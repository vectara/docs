export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname !== previousLocation?.pathname) {
    // Only track page views if analytics consent is granted
    if (window.VectaraConsent && window.VectaraConsent.hasConsent('analytics')) {
      window.analytics?.page?.();
    }
  }
}
