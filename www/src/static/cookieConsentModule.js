/**
 * Cookie Consent Module
 *
 * Initializes vanilla-cookieconsent library with Vectara configuration
 * Handles consent categories, UI configuration, and lifecycle callbacks
 */

import * as CookieConsent from "vanilla-cookieconsent";
import { initializeConsentManager } from "./consentManager.js";

// Initialize consent manager first
initializeConsentManager();

// Initialize cookie consent on DOM load
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", function () {
    console.log("[CookieConsent] Initializing cookie consent");

    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    const cookieDomain = isLocalhost
      ? window.location.hostname
      : ".vectara.com";

    CookieConsent.run({
      // Cookie settings
      cookie: {
        name: "cc_cookie_vectara_docs",
        domain: cookieDomain,
        path: "/",
        expiresAfterDays: 365,
        sameSite: "Lax",
      },

      // Automatically clear cookies when consent is revoked
      autoClearCookies: true,

      // GUI options
      guiOptions: {
        consentModal: {
          layout: "box inline",
          position: "bottom right",
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: false,
          flipButtons: false,
        },
      },

      // Consent categories
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          readOnly: false,
          autoClear: {
            cookies: [
              {
                name: /^vectaraAnonymousId$/,
              },
              {
                name: /^__anon_id_email$/,
              },
              {
                name: /^__anon_id_uid$/,
              },
              {
                name: /^_ga/,
              },
              {
                name: /^_gid/,
              },
              {
                name: /^_gat/,
              },
            ],
          },
        },
        marketing: {
          enabled: false,
          readOnly: false,
          autoClear: {
            cookies: [
              {
                name: /^reo_/,
              },
              {
                name: /^_reo/,
              },
            ],
          },
        },
      },

      // Consent modal language configuration
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "We use cookies to improve your experience on our website. Some cookies are necessary for the site to function, while others help us analyze site usage and provide personalized features. You can choose which categories of cookies to accept.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
            },
            preferencesModal: {
              title: "Cookie Preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "Cookie Usage",
                  description:
                    "We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. Below you can choose which types of cookies you allow us to use.",
                },
                {
                  title: "Strictly Necessary",
                  description:
                    "These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description:
                    "Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously, to track page views, user behavior, and site performance.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Marketing cookies are used to track visitors across websites and record user sessions for improving user experience and understanding how visitors use our website.",
                  linkedCategory: "marketing",
                },
              ],
            },
          },
        },
      },

      // Lifecycle callbacks
      onFirstConsent: function ({ cookie }) {
        console.log("[CookieConsent] First consent received", cookie);
      },

      onConsent: function ({ cookie }) {
        console.log("[CookieConsent] Consent updated", cookie);

        // Load services based on consent
        if (window.VectaraConsent) {
          window.VectaraConsent.loadConsentedServices();
        }
      },

      onChange: function ({ changedCategories, changedServices }) {
        console.log("[CookieConsent] Consent changed", {
          changedCategories,
          changedServices,
        });

        if (!window.VectaraConsent) {
          console.warn("[CookieConsent] VectaraConsent not available");
          return;
        }

        // Handle analytics consent changes
        if (changedCategories.includes("analytics")) {
          const hasAnalyticsConsent =
            CookieConsent.acceptedCategory("analytics");

          if (hasAnalyticsConsent) {
            console.log(
              "[CookieConsent] Analytics consent granted, loading services",
            );
            window.VectaraConsent.loadAnalytics();
          } else {
            console.log(
              "[CookieConsent] Analytics consent revoked, clearing data",
            );
            window.VectaraConsent.clearTrackingData("analytics");
          }
        }

        // Handle marketing consent changes
        if (changedCategories.includes("marketing")) {
          const hasMarketingConsent =
            CookieConsent.acceptedCategory("marketing");

          if (hasMarketingConsent) {
            console.log(
              "[CookieConsent] Marketing consent granted, loading services",
            );
            window.VectaraConsent.loadReodev();
          } else {
            console.log(
              "[CookieConsent] Marketing consent revoked, clearing data",
            );
            window.VectaraConsent.clearTrackingData("marketing");
          }
        }
      },
    });

    // Expose CookieConsent to window for footer link access
    window.CookieConsent = CookieConsent;

    console.log("[CookieConsent] Cookie consent initialized successfully");
  });
}
