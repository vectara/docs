declare global {
  interface Window {
    __APP_CONFIG__?: {
      domainOverrides?: Record<string, string>;
    };
  }
}

function getOverrides(): Record<string, string> | null {
  if (typeof window !== "undefined" && window.__APP_CONFIG__?.domainOverrides) {
    const overrides = window.__APP_CONFIG__.domainOverrides;
    if (Object.keys(overrides).length > 0) {
      return overrides;
    }
  }
  return null;
}

function rewriteTextNodes(
  root: Node,
  overrides: Record<string, string>,
): boolean {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Text | null;
  let didRewrite = false;
  while ((node = walker.nextNode() as Text | null)) {
    let text = node.textContent ?? "";
    let changed = false;
    for (const [from, to] of Object.entries(overrides)) {
      if (text.includes(from)) {
        text = text.split(from).join(to);
        changed = true;
      }
    }
    if (changed) {
      node.textContent = text;
      didRewrite = true;
    }
  }
  return didRewrite;
}

function rewriteAttributes(
  root: Element,
  overrides: Record<string, string>,
): void {
  const selector = Object.keys(overrides)
    .flatMap((d) => [`[href*="${d}"]`, `[src*="${d}"]`])
    .join(",");
  if (!selector) return;
  root.querySelectorAll(selector).forEach((el) => {
    for (const attr of ["href", "src"]) {
      let val = el.getAttribute(attr);
      if (!val) continue;
      for (const [from, to] of Object.entries(overrides)) {
        if (val.includes(from)) {
          val = val.split(from).join(to);
        }
      }
      el.setAttribute(attr, val);
    }
  });
}

let observer: MutationObserver | null = null;
let rewriting = false;

function setupObserver(overrides: Record<string, string>): void {
  if (observer) return;

  observer = new MutationObserver(() => {
    if (rewriting) return;
    rewriting = true;
    rewriteTextNodes(document.body, overrides);
    rewriteAttributes(document.body, overrides);
    rewriting = false;
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

export function onRouteDidUpdate(): void {
  const overrides = getOverrides();
  if (!overrides) return;

  rewriting = true;
  rewriteTextNodes(document.body, overrides);
  rewriteAttributes(document.body, overrides);
  rewriting = false;

  setupObserver(overrides);
}
