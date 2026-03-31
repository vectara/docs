/**
 * Consent Manager Utility Module
 *
 * Provides utilities for checking consent status, loading services dynamically,
 * and managing tracking data based on user consent preferences.
 */

// Global flags to track if services have been loaded
window.analyticsLoaded = false;
window.reodevLoaded = false;

/**
 * Check if user has consented to a specific category
 * @param {string} category - The consent category to check (e.g., 'analytics', 'marketing')
 * @returns {boolean} - True if user has consented to the category
 */
export function hasConsent(category) {
  if (typeof window.CookieConsent === 'undefined') {
    return false;
  }
  return window.CookieConsent.acceptedCategory(category);
}

/**
 * Delete a cookie by name
 * @param {string} name - Cookie name
 * @param {string} domain - Cookie domain (optional)
 * @param {string} path - Cookie path (default: '/')
 */
function deleteCookie(name, domain, path = '/') {
  const cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}${domain ? `; domain=${domain}` : ''}`;
  document.cookie = cookieString;
  console.log(`[ConsentManager] Deleted cookie: ${name}`);
}

/**
 * Clear tracking data when consent is revoked
 * @param {string} category - The consent category that was revoked
 */
export function clearTrackingData(category) {
  console.log(`[ConsentManager] Clearing tracking data for category: ${category}`);

  if (category === 'analytics') {
    // Clear Vectara analytics cookies
    deleteCookie('vectaraAnonymousId');
    deleteCookie('__anon_id_email');
    deleteCookie('__anon_id_uid');

    // Clear Google Analytics cookies (set by GTM)
    const gaCookies = document.cookie.split(';').filter(c => {
      const name = c.trim().split('=')[0];
      return name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat');
    });

    gaCookies.forEach(cookie => {
      const name = cookie.trim().split('=')[0];
      deleteCookie(name);
      // Try with domain for GA cookies
      deleteCookie(name, '.vectara.com');
      deleteCookie(name, window.location.hostname);
    });

    // Clear analytics objects
    if (window.analytics) {
      console.log('[ConsentManager] Clearing analytics object');
      window.analytics = undefined;
    }
    if (window.dataLayer) {
      console.log('[ConsentManager] Clearing dataLayer');
      window.dataLayer = [];
    }
    window.analyticsLoaded = false;
  }

  if (category === 'marketing') {
    // Clear Reo.dev cookies
    const reoCookies = document.cookie.split(';').filter(c => {
      const name = c.trim().split('=')[0];
      return name.startsWith('reo_') || name.startsWith('_reo');
    });

    reoCookies.forEach(cookie => {
      const name = cookie.trim().split('=')[0];
      deleteCookie(name);
      deleteCookie(name, '.vectara.com');
      deleteCookie(name, window.location.hostname);
    });

    // Clear Reo.dev object
    if (window.Reo) {
      console.log('[ConsentManager] Clearing Reo object');
      window.Reo = undefined;
    }
    window.reodevLoaded = false;
  }
}

/**
 * Wait for a global object to become available
 * @param {string} objectPath - Dot-notation path to the object (e.g., 'window.analytics')
 * @param {number} timeout - Maximum time to wait in milliseconds
 * @returns {Promise} - Resolves when object is available or rejects on timeout
 */
export function whenAvailable(objectPath, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const checkInterval = 50;

    function check() {
      const parts = objectPath.split('.');
      let obj = window;

      for (let i = 1; i < parts.length; i++) {
        obj = obj[parts[i]];
        if (!obj) break;
      }

      if (obj) {
        resolve(obj);
      } else if (Date.now() - startTime >= timeout) {
        reject(new Error(`Timeout waiting for ${objectPath}`));
      } else {
        setTimeout(check, checkInterval);
      }
    }

    check();
  });
}

/**
 * Load analytics.js dynamically
 */
export function loadAnalytics() {
  if (window.analyticsLoaded) {
    console.log('[ConsentManager] Analytics already loaded');
    return;
  }

  console.log('[ConsentManager] Loading analytics.js');
  const script = document.createElement('script');
  script.src = '/analytics.js';
  script.async = true;
  script.onload = () => {
    console.log('[ConsentManager] Analytics.js loaded successfully');
    window.analyticsLoaded = true;
  };
  script.onerror = () => {
    console.error('[ConsentManager] Failed to load analytics.js');
  };
  document.head.appendChild(script);
}

/**
 * Load reodev.js dynamically
 */
export function loadReodev() {
  if (window.reodevLoaded) {
    console.log('[ConsentManager] Reo.dev already loaded');
    return;
  }

  console.log('[ConsentManager] Loading reodev.js');
  const script = document.createElement('script');
  script.src = '/scripts/reodev.js';
  script.async = true;
  script.onload = () => {
    console.log('[ConsentManager] Reodev.js loaded successfully');
    window.reodevLoaded = true;
  };
  script.onerror = () => {
    console.error('[ConsentManager] Failed to load reodev.js');
  };
  document.head.appendChild(script);
}

/**
 * Load all services based on current consent
 */
export function loadConsentedServices() {
  console.log('[ConsentManager] Loading consented services');

  if (hasConsent('analytics')) {
    loadAnalytics();
  }

  if (hasConsent('marketing')) {
    loadReodev();
  }
}

// Initialize and expose on window
export function initializeConsentManager() {
  window.VectaraConsent = {
    hasConsent,
    clearTrackingData,
    loadAnalytics,
    loadReodev,
    loadConsentedServices,
    whenAvailable
  };

  console.log('[ConsentManager] Consent manager initialized');
}
