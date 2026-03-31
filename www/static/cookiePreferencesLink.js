/**
 * Cookie Preferences Link Handler
 *
 * Handles clicks on the "Manage Cookie Preferences" footer link
 * to open the cookie consent preferences modal
 */

export function onRouteDidUpdate() {
  // Add click handler for manage cookie preferences link
  if (typeof window !== 'undefined') {
    // Wait a bit for DOM to be ready
    setTimeout(() => {
      const manageCookieLinks = document.querySelectorAll('a[href="#manage-cookies"]');

      manageCookieLinks.forEach(link => {
        // Remove any existing listener to avoid duplicates
        link.onclick = (e) => {
          e.preventDefault();

          if (window.CookieConsent && typeof window.CookieConsent.showPreferences === 'function') {
            window.CookieConsent.showPreferences();
          } else {
            console.warn('[CookiePreferences] CookieConsent not available yet');
          }
        };
      });
    }, 100);
  }
}
