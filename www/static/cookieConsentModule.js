(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/vanilla-cookieconsent/dist/cookieconsent.esm.js
  var cookieconsent_esm_exports = {};
  __export(cookieconsent_esm_exports, {
    acceptCategory: () => Ve,
    acceptService: () => Le,
    acceptedCategory: () => Ie,
    acceptedService: () => je,
    eraseCookies: () => Pe,
    getConfig: () => Qe,
    getCookie: () => Ke,
    getUserPreferences: () => Ue,
    hide: () => Re,
    hidePreferences: () => $e,
    loadScript: () => ze,
    reset: () => Ye,
    run: () => Xe,
    setCookieData: () => qe,
    setLanguage: () => Je,
    show: () => Oe,
    showPreferences: () => Be,
    validConsent: () => We,
    validCookie: () => Fe
  });
  var e = "opt-in";
  var t = "opt-out";
  var o = "show--consent";
  var n = "show--preferences";
  var a = "disable--interaction";
  var s = "data-category";
  var c = "div";
  var r = "button";
  var i = "aria-hidden";
  var l = "btn-group";
  var d = "click";
  var f = "data-role";
  var _ = "consentModal";
  var u = "preferencesModal";
  var p = class {
    constructor() {
      this.t = { mode: e, revision: 0, autoShow: true, lazyHtmlGeneration: true, autoClearCookies: true, manageScriptTags: true, hideFromBots: true, cookie: { name: "cc_cookie", expiresAfterDays: 182, domain: "", path: "/", secure: true, sameSite: "Lax" } }, this.o = { i: {}, l: "", _: {}, u: {}, p: {}, m: [], v: false, h: null, C: null, S: null, M: "", D: true, T: false, k: false, A: false, N: false, H: [], V: false, I: true, L: [], j: false, F: "", P: false, O: [], R: [], B: [], $: [], G: false, J: false, U: false, q: [], K: [], W: [], X: {}, Y: {}, Z: {}, ee: {}, te: {}, oe: [] }, this.ne = { ae: {}, se: {} }, this.ce = {}, this.re = { ie: "cc:onFirstConsent", le: "cc:onConsent", de: "cc:onChange", fe: "cc:onModalShow", _e: "cc:onModalHide", ue: "cc:onModalReady" };
    }
  };
  var g = new p();
  var m = (e2, t2) => e2.indexOf(t2);
  var b = (e2, t2) => -1 !== m(e2, t2);
  var v = (e2) => Array.isArray(e2);
  var y = (e2) => "string" == typeof e2;
  var h = (e2) => !!e2 && "object" == typeof e2 && !v(e2);
  var C = (e2) => "function" == typeof e2;
  var w = (e2) => Object.keys(e2);
  var S = (e2) => Array.from(new Set(e2));
  var x = () => document.activeElement;
  var M = (e2) => e2.preventDefault();
  var D = (e2, t2) => e2.querySelectorAll(t2);
  var T = (e2) => e2.dispatchEvent(new Event("change"));
  var k = (e2) => {
    const t2 = document.createElement(e2);
    return e2 === r && (t2.type = e2), t2;
  };
  var E = (e2, t2, o2) => e2.setAttribute(t2, o2);
  var A = (e2, t2, o2) => {
    e2.removeAttribute(o2 ? "data-" + t2 : t2);
  };
  var N = (e2, t2, o2) => e2.getAttribute(o2 ? "data-" + t2 : t2);
  var H = (e2, t2) => e2.appendChild(t2);
  var V = (e2, t2) => e2.classList.add(t2);
  var I = (e2, t2) => V(e2, "cm__" + t2);
  var L = (e2, t2) => V(e2, "pm__" + t2);
  var j = (e2, t2) => e2.classList.remove(t2);
  var F = (e2) => {
    if ("object" != typeof e2) return e2;
    if (e2 instanceof Date) return new Date(e2.getTime());
    let t2 = Array.isArray(e2) ? [] : {};
    for (let o2 in e2) {
      let n2 = e2[o2];
      t2[o2] = F(n2);
    }
    return t2;
  };
  var P = () => {
    const e2 = {}, { O: t2, X: o2, Y: n2 } = g.o;
    for (const a2 of t2) e2[a2] = $(n2[a2], w(o2[a2]));
    return e2;
  };
  var O = (e2, t2) => dispatchEvent(new CustomEvent(e2, { detail: t2 }));
  var R = (e2, t2, o2, n2) => {
    e2.addEventListener(t2, o2), n2 && g.o.m.push({ pe: e2, ge: t2, me: o2 });
  };
  var B = () => {
    const e2 = g.t.cookie.expiresAfterDays;
    return C(e2) ? e2(g.o.F) : e2;
  };
  var $ = (e2, t2) => {
    const o2 = e2 || [], n2 = t2 || [];
    return o2.filter((e3) => !b(n2, e3)).concat(n2.filter((e3) => !b(o2, e3)));
  };
  var G = (e2) => {
    g.o.R = S(e2), g.o.F = (() => {
      let e3 = "custom";
      const { R: t2, O: o2, B: n2 } = g.o, a2 = t2.length;
      return a2 === o2.length ? e3 = "all" : a2 === n2.length && (e3 = "necessary"), e3;
    })();
  };
  var J = (e2, t2, o2, n2) => {
    const a2 = "accept-", { show: s2, showPreferences: c2, hide: r2, hidePreferences: i2, acceptCategory: l2 } = t2, f2 = e2 || document, _2 = (e3) => D(f2, `[data-cc="${e3}"]`), u2 = (e3, t3) => {
      M(e3), l2(t3), i2(), r2();
    }, p2 = _2("show-preferencesModal"), m2 = _2("show-consentModal"), b2 = _2(a2 + "all"), v2 = _2(a2 + "necessary"), y2 = _2(a2 + "custom"), h2 = g.t.lazyHtmlGeneration;
    for (const e3 of p2) E(e3, "aria-haspopup", "dialog"), R(e3, d, (e4) => {
      M(e4), c2();
    }), h2 && (R(e3, "mouseenter", (e4) => {
      M(e4), g.o.N || o2(t2, n2);
    }, true), R(e3, "focus", () => {
      g.o.N || o2(t2, n2);
    }));
    for (let e3 of m2) E(e3, "aria-haspopup", "dialog"), R(e3, d, (e4) => {
      M(e4), s2(true);
    }, true);
    for (let e3 of b2) R(e3, d, (e4) => {
      u2(e4, "all");
    }, true);
    for (let e3 of y2) R(e3, d, (e4) => {
      u2(e4);
    }, true);
    for (let e3 of v2) R(e3, d, (e4) => {
      u2(e4, []);
    }, true);
  };
  var U = (e2, t2) => {
    e2 && (t2 && (e2.tabIndex = -1), e2.focus(), t2 && e2.removeAttribute("tabindex"));
  };
  var z = (e2, t2) => {
    const o2 = (n2) => {
      n2.target.removeEventListener("transitionend", o2), "opacity" === n2.propertyName && "1" === getComputedStyle(e2).opacity && U(((e3) => 1 === e3 ? g.ne.be : g.ne.ve)(t2));
    };
    R(e2, "transitionend", o2);
  };
  var q;
  var K = (e2) => {
    clearTimeout(q), e2 ? V(g.ne.ye, a) : q = setTimeout(() => {
      j(g.ne.ye, a);
    }, 500);
  };
  var Q = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "];
  var W = (e2 = 0, t2 = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${t2}"><path d="${Q[e2]}"/></svg>`;
  var X = (e2) => {
    const t2 = g.ne, o2 = g.o;
    ((e3) => {
      const n2 = e3 === t2.he, a2 = o2.i.disablePageInteraction ? t2.ye : n2 ? t2.Ce : t2.ye;
      R(a2, "keydown", (t3) => {
        if ("Tab" !== t3.key || !(n2 ? o2.k && !o2.A : o2.A)) return;
        const a3 = x(), s2 = n2 ? o2.q : o2.K;
        0 !== s2.length && (t3.shiftKey ? a3 !== s2[0] && e3.contains(a3) || (M(t3), U(s2[1])) : a3 !== s2[1] && e3.contains(a3) || (M(t3), U(s2[0])));
      }, true);
    })(e2);
  };
  var Y = ["[href]", r, "input", "details", "[tabindex]"].map((e2) => e2 + ':not([tabindex="-1"])').join(",");
  var Z = (e2) => {
    const { o: t2, ne: o2 } = g, n2 = (e3, t3) => {
      const o3 = D(e3, Y);
      t3[0] = o3[0], t3[1] = o3[o3.length - 1];
    };
    1 === e2 && t2.T && n2(o2.he, t2.q), 2 === e2 && t2.N && n2(o2.we, t2.K);
  };
  var ee = (e2, t2, o2) => {
    const { de: n2, le: a2, ie: s2, _e: c2, ue: r2, fe: i2 } = g.ce, l2 = g.re;
    if (t2) {
      const n3 = { modalName: t2 };
      return e2 === l2.fe ? C(i2) && i2(n3) : e2 === l2._e ? C(c2) && c2(n3) : (n3.modal = o2, C(r2) && r2(n3)), O(e2, n3);
    }
    const d2 = { cookie: g.o.p };
    e2 === l2.ie ? C(s2) && s2(F(d2)) : e2 === l2.le ? C(a2) && a2(F(d2)) : (d2.changedCategories = g.o.L, d2.changedServices = g.o.ee, C(n2) && n2(F(d2))), O(e2, F(d2));
  };
  var te = (e2, t2) => {
    try {
      return e2();
    } catch (e3) {
      return !t2 && console.warn("CookieConsent:", e3), false;
    }
  };
  var oe = (e2) => {
    const { Y: t2, ee: o2, O: n2, X: a2, oe: c2, p: r2, L: i2 } = g.o;
    for (const e3 of n2) {
      const n3 = o2[e3] || t2[e3] || [];
      for (const o3 of n3) {
        const n4 = a2[e3][o3];
        if (!n4) continue;
        const { onAccept: s2, onReject: c3 } = n4;
        !n4.Se && b(t2[e3], o3) ? (n4.Se = true, C(s2) && s2()) : n4.Se && !b(t2[e3], o3) && (n4.Se = false, C(c3) && c3());
      }
    }
    if (!g.t.manageScriptTags) return;
    const l2 = c2, d2 = e2 || r2.categories || [], f2 = (e3, n3) => {
      if (n3 >= e3.length) return;
      const a3 = c2[n3];
      if (a3.xe) return f2(e3, n3 + 1);
      const r3 = a3.Me, l3 = a3.De, _2 = a3.Te, u2 = b(d2, l3), p2 = !!_2 && b(t2[l3], _2);
      if (!_2 && !a3.ke && u2 || !_2 && a3.ke && !u2 && b(i2, l3) || _2 && !a3.ke && p2 || _2 && a3.ke && !p2 && b(o2[l3] || [], _2)) {
        a3.xe = true;
        const t3 = N(r3, "type", true);
        A(r3, "type", !!t3), A(r3, s);
        let o3 = N(r3, "src", true);
        o3 && A(r3, "src", true);
        const c3 = k("script");
        c3.textContent = r3.innerHTML;
        for (const { nodeName: e4 } of r3.attributes) E(c3, e4, r3[e4] || N(r3, e4));
        t3 && (c3.type = t3), o3 ? c3.src = o3 : o3 = r3.src;
        const i3 = !!o3 && (!t3 || ["text/javascript", "module"].includes(t3));
        if (i3 && (c3.onload = c3.onerror = () => {
          f2(e3, ++n3);
        }), r3.replaceWith(c3), i3) return;
      }
      f2(e3, ++n3);
    };
    f2(l2, 0);
  };
  var ne = "bottom";
  var ae = "left";
  var se = "center";
  var ce = "right";
  var re = "inline";
  var ie = "wide";
  var le = "pm--";
  var de = ["middle", "top", ne];
  var fe = [ae, se, ce];
  var _e = { box: { Ee: [ie, re], Ae: de, Ne: fe, He: ne, Ve: ce }, cloud: { Ee: [re], Ae: de, Ne: fe, He: ne, Ve: se }, bar: { Ee: [re], Ae: de.slice(1), Ne: [], He: ne, Ve: "" } };
  var ue = { box: { Ee: [], Ae: [], Ne: [], He: "", Ve: "" }, bar: { Ee: [ie], Ae: [], Ne: [ae, ce], He: "", Ve: ae } };
  var pe = (e2) => {
    const t2 = g.o.i.guiOptions, o2 = t2 && t2.consentModal, n2 = t2 && t2.preferencesModal;
    0 === e2 && ge(g.ne.he, _e, o2, "cm--", "box", "cm"), 1 === e2 && ge(g.ne.we, ue, n2, le, "box", "pm");
  };
  var ge = (e2, t2, o2, n2, a2, s2) => {
    e2.className = s2;
    const c2 = o2 && o2.layout, r2 = o2 && o2.position, i2 = o2 && o2.flipButtons, l2 = !o2 || false !== o2.equalWeightButtons, d2 = c2 && c2.split(" ") || [], f2 = d2[0], _2 = d2[1], u2 = f2 in t2 ? f2 : a2, p2 = t2[u2], m2 = b(p2.Ee, _2) && _2, v2 = r2 && r2.split(" ") || [], y2 = v2[0], h2 = n2 === le ? v2[0] : v2[1], C2 = b(p2.Ae, y2) ? y2 : p2.He, w2 = b(p2.Ne, h2) ? h2 : p2.Ve, S2 = (t3) => {
      t3 && V(e2, n2 + t3);
    };
    S2(u2), S2(m2), S2(C2), S2(w2), i2 && S2("flip");
    const x2 = s2 + "__btn--secondary";
    if ("cm" === s2) {
      const { Ie: e3, Le: t3 } = g.ne;
      e3 && (l2 ? j(e3, x2) : V(e3, x2)), t3 && (l2 ? j(t3, x2) : V(t3, x2));
    } else {
      const { je: e3 } = g.ne;
      e3 && (l2 ? j(e3, x2) : V(e3, x2));
    }
  };
  var me = (e2, t2) => {
    const o2 = g.o, n2 = g.ne, { hide: a2, hidePreferences: s2, acceptCategory: _2 } = e2, p2 = (e3) => {
      _2(e3), s2(), a2();
    }, m2 = o2.u && o2.u.preferencesModal;
    if (!m2) return;
    const b2 = m2.title, v2 = m2.closeIconLabel, C2 = m2.acceptAllBtn, S2 = m2.acceptNecessaryBtn, x2 = m2.savePreferencesBtn, M2 = m2.sections || [], D2 = C2 || S2 || x2;
    if (n2.Fe) n2.Pe = k(c), L(n2.Pe, "body");
    else {
      n2.Fe = k(c), V(n2.Fe, "pm-wrapper");
      const e3 = k("div");
      V(e3, "pm-overlay"), H(n2.Fe, e3), R(e3, d, s2), n2.we = k(c), V(n2.we, "pm"), E(n2.we, "role", "dialog"), E(n2.we, i, true), E(n2.we, "aria-modal", true), E(n2.we, "aria-labelledby", "pm__title"), R(n2.ye, "keydown", (e4) => {
        27 === e4.keyCode && s2();
      }, true), n2.Oe = k(c), L(n2.Oe, "header"), n2.Re = k("h2"), L(n2.Re, "title"), n2.Re.id = "pm__title", n2.Be = k(r), L(n2.Be, "close-btn"), E(n2.Be, "aria-label", m2.closeIconLabel || ""), R(n2.Be, d, s2), n2.$e = k("span"), n2.$e.innerHTML = W(), H(n2.Be, n2.$e), n2.Ge = k(c), L(n2.Ge, "body"), n2.Je = k(c), L(n2.Je, "footer");
      var T2 = k(c);
      V(T2, "btns");
      var A2 = k(c), N2 = k(c);
      L(A2, l), L(N2, l), H(n2.Je, A2), H(n2.Je, N2), H(n2.Oe, n2.Re), H(n2.Oe, n2.Be), n2.ve = k(c), E(n2.ve, "tabIndex", -1), H(n2.we, n2.ve), H(n2.we, n2.Oe), H(n2.we, n2.Ge), D2 && H(n2.we, n2.Je), H(n2.Fe, n2.we);
    }
    let I2;
    b2 && (n2.Re.innerHTML = b2, v2 && E(n2.Be, "aria-label", v2)), M2.forEach((e3, t3) => {
      const a3 = e3.title, s3 = e3.description, l2 = e3.linkedCategory, f2 = l2 && o2.P[l2], _3 = e3.cookieTable, u2 = _3 && _3.body, p3 = _3 && _3.caption, g2 = u2 && u2.length > 0, b3 = !!f2, v3 = b3 && o2.X[l2], C3 = h(v3) && w(v3) || [], S3 = b3 && (!!s3 || !!g2 || w(v3).length > 0);
      var x3 = k(c);
      if (L(x3, "section"), S3 || s3) {
        var M3 = k(c);
        L(M3, "section-desc-wrapper");
      }
      let D3 = C3.length;
      if (S3 && D3 > 0) {
        const e4 = k(c);
        L(e4, "section-services");
        for (const t4 of C3) {
          const o3 = v3[t4], n3 = o3 && o3.label || t4, a4 = k(c), s4 = k(c), r2 = k(c), i2 = k(c);
          L(a4, "service"), L(i2, "service-title"), L(s4, "service-header"), L(r2, "service-icon");
          const d2 = be(n3, t4, f2, true, l2);
          i2.innerHTML = n3, H(s4, r2), H(s4, i2), H(a4, s4), H(a4, d2), H(e4, a4);
        }
        H(M3, e4);
      }
      if (a3) {
        var T3 = k(c), A3 = k(b3 ? r : c);
        if (L(T3, "section-title-wrapper"), L(A3, "section-title"), A3.innerHTML = a3, H(T3, A3), b3) {
          const e4 = k("span");
          e4.innerHTML = W(2, 3.5), L(e4, "section-arrow"), H(T3, e4), x3.className += "--toggle";
          const t4 = be(a3, l2, f2);
          let o3 = m2.serviceCounterLabel;
          if (D3 > 0 && y(o3)) {
            let e5 = k("span");
            L(e5, "badge"), L(e5, "service-counter"), E(e5, i, true), E(e5, "data-servicecounter", D3), o3 && (o3 = o3.split("|"), o3 = o3.length > 1 && D3 > 1 ? o3[1] : o3[0], E(e5, "data-counterlabel", o3)), e5.innerHTML = D3 + (o3 ? " " + o3 : ""), H(A3, e5);
          }
          if (S3) {
            L(x3, "section--expandable");
            var N3 = l2 + "-desc";
            E(A3, "aria-expanded", false), E(A3, "aria-controls", N3);
          }
          H(T3, t4);
        } else E(A3, "role", "heading"), E(A3, "aria-level", "3");
        H(x3, T3);
      }
      if (s3) {
        var F2 = k("p");
        L(F2, "section-desc"), F2.innerHTML = s3, H(M3, F2);
      }
      if (S3 && (E(M3, i, "true"), M3.id = N3, ((e4, t4, o3) => {
        R(A3, d, () => {
          t4.classList.contains("is-expanded") ? (j(t4, "is-expanded"), E(o3, "aria-expanded", "false"), E(e4, i, "true")) : (V(t4, "is-expanded"), E(o3, "aria-expanded", "true"), E(e4, i, "false"));
        });
      })(M3, x3, A3), g2)) {
        const e4 = k("table"), o3 = k("thead"), a4 = k("tbody");
        if (p3) {
          const t4 = k("caption");
          L(t4, "table-caption"), t4.innerHTML = p3, e4.appendChild(t4);
        }
        L(e4, "section-table"), L(o3, "table-head"), L(a4, "table-body");
        const s4 = _3.headers, r2 = w(s4), i2 = n2.Ue.createDocumentFragment(), l3 = k("tr");
        for (const e5 of r2) {
          const o4 = s4[e5], n3 = k("th");
          n3.id = "cc__row-" + o4 + t3, E(n3, "scope", "col"), L(n3, "table-th"), n3.innerHTML = o4, H(i2, n3);
        }
        H(l3, i2), H(o3, l3);
        const d2 = n2.Ue.createDocumentFragment();
        for (const e5 of u2) {
          const o4 = k("tr");
          L(o4, "table-tr");
          for (const n3 of r2) {
            const a5 = s4[n3], r3 = e5[n3], i3 = k("td"), l4 = k(c);
            L(i3, "table-td"), E(i3, "data-column", a5), E(i3, "headers", "cc__row-" + a5 + t3), l4.insertAdjacentHTML("beforeend", r3), H(i3, l4), H(o4, i3);
          }
          H(d2, o4);
        }
        H(a4, d2), H(e4, o3), H(e4, a4), H(M3, e4);
      }
      (S3 || s3) && H(x3, M3);
      const P2 = n2.Pe || n2.Ge;
      b3 ? (I2 || (I2 = k(c), L(I2, "section-toggles")), I2.appendChild(x3)) : I2 = null, H(P2, I2 || x3);
    }), C2 && (n2.ze || (n2.ze = k(r), L(n2.ze, "btn"), E(n2.ze, f, "all"), H(A2, n2.ze), R(n2.ze, d, () => p2("all"))), n2.ze.innerHTML = C2), S2 && (n2.je || (n2.je = k(r), L(n2.je, "btn"), E(n2.je, f, "necessary"), H(A2, n2.je), R(n2.je, d, () => p2([]))), n2.je.innerHTML = S2), x2 && (n2.qe || (n2.qe = k(r), L(n2.qe, "btn"), L(n2.qe, "btn--secondary"), E(n2.qe, f, "save"), H(N2, n2.qe), R(n2.qe, d, () => p2())), n2.qe.innerHTML = x2), n2.Pe && (n2.we.replaceChild(n2.Pe, n2.Ge), n2.Ge = n2.Pe), pe(1), o2.N || (o2.N = true, ee(g.re.ue, u, n2.we), t2(e2), H(n2.Ce, n2.Fe), X(n2.we), setTimeout(() => V(n2.Fe, "cc--anim"), 100)), Z(2);
  };
  function be(e2, t2, o2, n2, a2) {
    const c2 = g.o, r2 = g.ne, l2 = k("label"), f2 = k("input"), _2 = k("span"), u2 = k("span"), p2 = k("span"), m2 = k("span"), v2 = k("span");
    if (m2.innerHTML = W(1, 3), v2.innerHTML = W(0, 3), f2.type = "checkbox", V(l2, "section__toggle-wrapper"), V(f2, "section__toggle"), V(m2, "toggle__icon-on"), V(v2, "toggle__icon-off"), V(_2, "toggle__icon"), V(u2, "toggle__icon-circle"), V(p2, "toggle__label"), E(_2, i, "true"), n2 ? (V(l2, "toggle-service"), E(f2, s, a2), r2.se[a2][t2] = f2) : r2.ae[t2] = f2, n2 ? ((e3) => {
      R(f2, "change", () => {
        const t3 = r2.se[e3], o3 = r2.ae[e3];
        c2.Z[e3] = [];
        for (let o4 in t3) {
          const n3 = t3[o4];
          n3.checked && c2.Z[e3].push(n3.value);
        }
        o3.checked = c2.Z[e3].length > 0;
      });
    })(a2) : ((e3) => {
      R(f2, d, () => {
        const t3 = r2.se[e3], o3 = f2.checked;
        c2.Z[e3] = [];
        for (let n3 in t3) t3[n3].checked = o3, o3 && c2.Z[e3].push(n3);
      });
    })(t2), f2.value = t2, p2.textContent = e2.replace(/<.*>.*<\/.*>/gm, ""), H(u2, v2), H(u2, m2), H(_2, u2), c2.D) (o2.readOnly || o2.enabled) && (f2.checked = true);
    else if (n2) {
      const e3 = c2.Y[a2];
      f2.checked = o2.readOnly || b(e3, t2);
    } else b(c2.R, t2) && (f2.checked = true);
    return o2.readOnly && (f2.disabled = true), H(l2, f2), H(l2, _2), H(l2, p2), l2;
  }
  var ve = () => {
    const e2 = k("span");
    return g.ne.Ke || (g.ne.Ke = e2), e2;
  };
  var ye = (e2, t2) => {
    const o2 = g.o, n2 = g.ne, { hide: a2, showPreferences: s2, acceptCategory: u2 } = e2, p2 = o2.u && o2.u.consentModal;
    if (!p2) return;
    const m2 = p2.acceptAllBtn, b2 = p2.acceptNecessaryBtn, v2 = p2.showPreferencesBtn, y2 = p2.closeIconLabel, h2 = p2.footer, C2 = p2.label, w2 = p2.title, S2 = (e3) => {
      a2(), u2(e3);
    };
    if (!n2.Qe) {
      n2.Qe = k(c), n2.he = k(c), n2.We = k(c), n2.Xe = k(c), n2.Ye = k(c), V(n2.Qe, "cm-wrapper"), V(n2.he, "cm"), I(n2.We, "body"), I(n2.Xe, "texts"), I(n2.Ye, "btns"), E(n2.he, "role", "dialog"), E(n2.he, "aria-modal", "true"), E(n2.he, i, "false"), E(n2.he, "aria-describedby", "cm__desc"), C2 ? E(n2.he, "aria-label", C2) : w2 && E(n2.he, "aria-labelledby", "cm__title");
      const e3 = "box", t3 = o2.i.guiOptions, a3 = t3 && t3.consentModal, s3 = (a3 && a3.layout || e3).split(" ")[0] === e3;
      w2 && y2 && s3 && (n2.Le || (n2.Le = k(r), n2.Le.innerHTML = W(), I(n2.Le, "btn"), I(n2.Le, "btn--close"), R(n2.Le, d, () => {
        S2([]);
      }), H(n2.We, n2.Le)), E(n2.Le, "aria-label", y2)), H(n2.We, n2.Xe), (m2 || b2 || v2) && H(n2.We, n2.Ye), n2.be = k(c), E(n2.be, "tabIndex", -1), H(n2.he, n2.be), H(n2.he, n2.We), H(n2.Qe, n2.he);
    }
    w2 && (n2.Ze || (n2.Ze = k("h2"), n2.Ze.className = n2.Ze.id = "cm__title", H(n2.Xe, n2.Ze)), n2.Ze.innerHTML = w2);
    let x2 = p2.description;
    if (x2 && (o2.V && (x2 = x2.replace("{{revisionMessage}}", o2.I ? "" : p2.revisionMessage || "")), n2.et || (n2.et = k("p"), n2.et.className = n2.et.id = "cm__desc", H(n2.Xe, n2.et)), n2.et.innerHTML = x2), m2 && (n2.tt || (n2.tt = k(r), H(n2.tt, ve()), I(n2.tt, "btn"), E(n2.tt, f, "all"), R(n2.tt, d, () => {
      S2("all");
    })), n2.tt.firstElementChild.innerHTML = m2), b2 && (n2.Ie || (n2.Ie = k(r), H(n2.Ie, ve()), I(n2.Ie, "btn"), E(n2.Ie, f, "necessary"), R(n2.Ie, d, () => {
      S2([]);
    })), n2.Ie.firstElementChild.innerHTML = b2), v2 && (n2.ot || (n2.ot = k(r), H(n2.ot, ve()), I(n2.ot, "btn"), I(n2.ot, "btn--secondary"), E(n2.ot, f, "show"), R(n2.ot, "mouseenter", () => {
      o2.N || me(e2, t2);
    }), R(n2.ot, d, s2)), n2.ot.firstElementChild.innerHTML = v2), n2.nt || (n2.nt = k(c), I(n2.nt, l), m2 && H(n2.nt, n2.tt), b2 && H(n2.nt, n2.Ie), (m2 || b2) && H(n2.We, n2.nt), H(n2.Ye, n2.nt)), n2.ot && !n2.st && (n2.st = k(c), n2.Ie && n2.tt ? (I(n2.st, l), H(n2.st, n2.ot), H(n2.Ye, n2.st)) : (H(n2.nt, n2.ot), I(n2.nt, l + "--uneven"))), h2) {
      if (!n2.ct) {
        let e3 = k(c), t3 = k(c);
        n2.ct = k(c), I(e3, "footer"), I(t3, "links"), I(n2.ct, "link-group"), H(t3, n2.ct), H(e3, t3), H(n2.he, e3);
      }
      n2.ct.innerHTML = h2;
    }
    pe(0), o2.T || (o2.T = true, ee(g.re.ue, _, n2.he), t2(e2), H(n2.Ce, n2.Qe), X(n2.he), setTimeout(() => V(n2.Qe, "cc--anim"), 100)), Z(1), J(n2.We, e2, me, t2);
  };
  var he = (e2) => {
    if (!y(e2)) return null;
    if (e2 in g.o._) return e2;
    let t2 = e2.slice(0, 2);
    return t2 in g.o._ ? t2 : null;
  };
  var Ce = () => g.o.l || g.o.i.language.default;
  var we = (e2) => {
    e2 && (g.o.l = e2);
  };
  var Se = async (e2) => {
    const t2 = g.o;
    let o2 = he(e2) ? e2 : Ce(), n2 = t2._[o2];
    if (y(n2) ? n2 = await (async (e3) => {
      try {
        const t3 = await fetch(e3);
        return await t3.json();
      } catch (e4) {
        return console.error(e4), false;
      }
    })(n2) : C(n2) && (n2 = await n2()), !n2) throw `Could not load translation for the '${o2}' language`;
    return t2.u = n2, we(o2), true;
  };
  var xe = () => {
    let e2 = g.o.i.language.rtl, t2 = g.ne.Ce;
    e2 && t2 && (v(e2) || (e2 = [e2]), b(e2, g.o.l) ? V(t2, "cc--rtl") : j(t2, "cc--rtl"));
  };
  var Me = () => {
    const e2 = g.ne;
    if (e2.Ce) return;
    e2.Ce = k(c), e2.Ce.id = "cc-main", e2.Ce.setAttribute("data-nosnippet", ""), xe();
    let t2 = g.o.i.root;
    t2 && y(t2) && (t2 = document.querySelector(t2)), (t2 || e2.Ue.body).appendChild(e2.Ce);
  };
  var De = (e2) => te(() => localStorage.removeItem(e2));
  var Te = (e2, t2) => {
    if (t2 instanceof RegExp) return e2.filter((e3) => t2.test(e3));
    {
      const o2 = m(e2, t2);
      return o2 > -1 ? [e2[o2]] : [];
    }
  };
  var ke = (e2) => {
    const { hostname: t2, protocol: o2 } = location, { name: n2, path: a2, domain: s2, sameSite: c2, useLocalStorage: r2, secure: i2 } = g.t.cookie, l2 = e2 ? (() => {
      const e3 = g.o.S, t3 = e3 ? /* @__PURE__ */ new Date() - e3 : 0;
      return 864e5 * B() - t3;
    })() : 864e5 * B(), d2 = /* @__PURE__ */ new Date();
    d2.setTime(d2.getTime() + l2), g.o.p.expirationTime = d2.getTime();
    const f2 = JSON.stringify(g.o.p);
    let _2 = n2 + "=" + encodeURIComponent(f2) + (0 !== l2 ? "; expires=" + d2.toUTCString() : "") + "; Path=" + a2 + "; SameSite=" + c2;
    b(t2, ".") && (_2 += "; Domain=" + s2), i2 && "https:" === o2 && (_2 += "; Secure"), r2 ? ((e3, t3) => {
      te(() => localStorage.setItem(e3, t3));
    })(n2, f2) : document.cookie = _2, g.o.p;
  };
  var Ee = (e2, t2, o2) => {
    if (0 === e2.length) return;
    const n2 = o2 || g.t.cookie.domain, a2 = t2 || g.t.cookie.path, s2 = "www." === n2.slice(0, 4), c2 = s2 && n2.substring(4), r2 = (e3, t3) => {
      t3 && "." !== t3.slice(0, 1) && (t3 = "." + t3), document.cookie = e3 + "=; path=" + a2 + (t3 ? "; domain=" + t3 : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    };
    for (const t3 of e2) r2(t3, o2), o2 || r2(t3, n2), s2 && r2(t3, c2);
  };
  var Ae = (e2) => {
    const t2 = e2 || g.t.cookie.name, o2 = g.t.cookie.useLocalStorage;
    return ((e3, t3) => {
      let o3;
      return o3 = te(() => JSON.parse(t3 ? e3 : decodeURIComponent(e3)), true) || {}, o3;
    })(o2 ? (n2 = t2, te(() => localStorage.getItem(n2)) || "") : Ne(t2, true), o2);
    var n2;
  };
  var Ne = (e2, t2) => {
    const o2 = document.cookie.match("(^|;)\\s*" + e2 + "\\s*=\\s*([^;]+)");
    return o2 ? t2 ? o2.pop() : e2 : "";
  };
  var He = (e2) => {
    const t2 = document.cookie.split(/;\s*/), o2 = [];
    for (const n2 of t2) {
      let t3 = n2.split("=")[0];
      e2 ? te(() => {
        e2.test(t3) && o2.push(t3);
      }) : o2.push(t3);
    }
    return o2;
  };
  var Ve = (o2, n2 = []) => {
    ((e2, t2) => {
      const { O: o3, R: n3, B: a2, N: s2, Z: c2, $: r2, X: i2 } = g.o;
      let l2 = [];
      if (e2) {
        v(e2) ? l2.push(...e2) : y(e2) && (l2 = "all" === e2 ? o3 : [e2]);
        for (const e3 of o3) c2[e3] = b(l2, e3) ? w(i2[e3]) : [];
      } else l2 = [...n3, ...r2], s2 && (l2 = (() => {
        const e3 = g.ne.ae;
        if (!e3) return [];
        let t3 = [];
        for (let o4 in e3) e3[o4].checked && t3.push(o4);
        return t3;
      })());
      l2 = l2.filter((e3) => !b(o3, e3) || !b(t2, e3)), l2.push(...a2), G(l2);
    })(o2, n2), (() => {
      const e2 = g.o, { Z: t2, B: o3, Y: n3, X: a2, O: s2 } = e2, c2 = s2;
      e2.te = F(n3);
      for (const s3 of c2) {
        const c3 = a2[s3], r2 = w(c3), i2 = t2[s3] && t2[s3].length > 0, l2 = b(o3, s3);
        if (0 !== r2.length) {
          if (n3[s3] = [], l2) n3[s3].push(...r2);
          else if (i2) {
            const e3 = t2[s3];
            n3[s3].push(...e3);
          } else n3[s3] = e2.Z[s3];
          n3[s3] = S(n3[s3]);
        }
      }
    })(), (() => {
      const o3 = g.o;
      o3.L = g.t.mode === t && o3.D ? $(o3.$, o3.R) : $(o3.R, o3.p.categories);
      let n3 = o3.L.length > 0, a2 = false;
      for (const e2 of o3.O) o3.ee[e2] = $(o3.Y[e2], o3.te[e2]), o3.ee[e2].length > 0 && (a2 = true);
      const s2 = g.ne.ae;
      for (const e2 in s2) s2[e2].checked = b(o3.R, e2);
      for (const e2 of o3.O) {
        const t2 = g.ne.se[e2], n4 = o3.Y[e2];
        for (const e3 in t2) t2[e3].checked = b(n4, e3);
      }
      o3.C || (o3.C = /* @__PURE__ */ new Date()), o3.M || (o3.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (e2) => (e2 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e2 / 4).toString(16))), o3.p = { categories: F(o3.R), revision: g.t.revision, data: o3.h, consentTimestamp: o3.C.toISOString(), consentId: o3.M, services: F(o3.Y), languageCode: g.o.l }, o3.S && (o3.p.lastConsentTimestamp = o3.S.toISOString());
      let c2 = false;
      const r2 = n3 || a2;
      (o3.D || r2) && (o3.D && (o3.D = false, c2 = true), o3.S = o3.S ? /* @__PURE__ */ new Date() : o3.C, o3.p.lastConsentTimestamp = o3.S.toISOString(), ke(), g.t.autoClearCookies && (c2 || r2) && ((e2) => {
        const t2 = g.o, o4 = He(), n4 = ((e3) => {
          const t3 = g.o;
          return (e3 ? t3.O : t3.L).filter((e4) => {
            const o5 = t3.P[e4];
            return !!o5 && !o5.readOnly && !!o5.autoClear;
          });
        })(e2);
        for (const e3 in t2.ee) for (const n5 of t2.ee[e3]) {
          const a3 = t2.X[e3][n5].cookies;
          if (!b(t2.Y[e3], n5) && a3) for (const e4 of a3) {
            const t3 = Te(o4, e4.name);
            Ee(t3, e4.path, e4.domain);
          }
        }
        for (const a3 of n4) {
          const n5 = t2.P[a3].autoClear, s3 = n5 && n5.cookies || [], c3 = b(t2.L, a3), r3 = !b(t2.R, a3), i2 = c3 && r3;
          if (e2 ? r3 : i2) {
            n5.reloadPage && i2 && (t2.j = true);
            for (const e3 of s3) {
              const t3 = Te(o4, e3.name);
              Ee(t3, e3.path, e3.domain);
            }
          }
        }
      })(c2), oe()), c2 && (ee(g.re.ie), ee(g.re.le), g.t.mode === e) || (r2 && ee(g.re.de), o3.j && (o3.j = false, location.reload()));
    })();
  };
  var Ie = (e2) => {
    const t2 = g.o.D ? [] : g.o.R;
    return b(t2, e2);
  };
  var Le = (e2, t2) => {
    const { O: o2, X: n2 } = g.o;
    if (!(e2 && t2 && y(t2) && b(o2, t2) && 0 !== w(n2[t2]).length)) return false;
    ((e3, t3) => {
      const o3 = g.o, { X: n3, Z: a2, N: s2 } = o3, c2 = g.ne.se[t3] || {}, r2 = g.ne.ae[t3] || {}, i2 = w(n3[t3]);
      if (a2[t3] = [], y(e3)) {
        if ("all" === e3) {
          if (a2[t3].push(...i2), s2) for (let e4 in c2) c2[e4].checked = true, T(c2[e4]);
        } else if (b(i2, e3) && a2[t3].push(e3), s2) for (let t4 in c2) c2[t4].checked = e3 === t4, T(c2[t4]);
      } else if (v(e3)) for (let o4 of i2) {
        const n4 = b(e3, o4);
        n4 && a2[t3].push(o4), s2 && (c2[o4].checked = n4, T(c2[o4]));
      }
      const l2 = 0 === a2[t3].length;
      o3.R = l2 ? o3.R.filter((e4) => e4 !== t3) : S([...o3.R, t3]), s2 && (r2.checked = !l2, T(r2));
    })(e2, t2), Ve();
  };
  var je = (e2, t2) => {
    const o2 = g.o.D ? [] : g.o.Y[t2] || [];
    return b(o2, e2);
  };
  var Fe = (e2) => "" !== Ne(e2, true);
  var Pe = (e2, t2, o2) => {
    let n2 = [];
    const a2 = (e3) => {
      if (y(e3)) {
        let t3 = Ne(e3);
        "" !== t3 && n2.push(t3);
      } else n2.push(...He(e3));
    };
    if (v(e2)) for (let t3 of e2) a2(t3);
    else a2(e2);
    Ee(n2, t2, o2);
  };
  var Oe = (e2) => {
    const { ne: t2, o: n2 } = g;
    if (!n2.k) {
      if (!n2.T) {
        if (!e2) return;
        ye(Ge, Me);
      }
      n2.k = true, n2.J = x(), n2.v && K(true), z(t2.he, 1), V(t2.ye, o), E(t2.he, i, "false"), setTimeout(() => {
        U(g.ne.be);
      }, 100), ee(g.re.fe, _);
    }
  };
  var Re = () => {
    const { ne: e2, o: t2, re: n2 } = g;
    t2.k && (t2.k = false, t2.v && K(), U(e2.Ke, true), j(e2.ye, o), E(e2.he, i, "true"), U(t2.J), t2.J = null, ee(n2._e, _));
  };
  var Be = () => {
    const e2 = g.o;
    e2.A || (e2.N || me(Ge, Me), e2.A = true, e2.k ? e2.U = x() : e2.J = x(), z(g.ne.we, 2), V(g.ne.ye, n), E(g.ne.we, i, "false"), setTimeout(() => {
      U(g.ne.ve);
    }, 100), ee(g.re.fe, u));
  };
  var $e = () => {
    const e2 = g.o;
    e2.A && (e2.A = false, (() => {
      const e3 = We(), t2 = g.o.P, o2 = g.ne.ae, n2 = g.ne.se, a2 = (e4) => b(g.o.$, e4);
      for (const s2 in o2) {
        const c2 = !!t2[s2].readOnly;
        o2[s2].checked = c2 || (e3 ? Ie(s2) : a2(s2));
        for (const t3 in n2[s2]) n2[s2][t3].checked = c2 || (e3 ? je(t3, s2) : a2(s2));
      }
    })(), U(g.ne.$e, true), j(g.ne.ye, n), E(g.ne.we, i, "true"), e2.k ? (U(e2.U), e2.U = null) : (U(e2.J), e2.J = null), ee(g.re._e, u));
  };
  var Ge = { show: Oe, hide: Re, showPreferences: Be, hidePreferences: $e, acceptCategory: Ve };
  var Je = async (e2, t2) => {
    if (!he(e2)) return false;
    const o2 = g.o;
    return !(e2 === Ce() && true !== t2 || !await Se(e2) || (we(e2), o2.T && ye(Ge, Me), o2.N && me(Ge, Me), xe(), 0));
  };
  var Ue = () => {
    const { F: e2, Y: t2 } = g.o, { accepted: o2, rejected: n2 } = (() => {
      const { D: e3, R: t3, O: o3 } = g.o;
      return { accepted: t3, rejected: e3 ? [] : o3.filter((e4) => !b(t3, e4)) };
    })();
    return F({ acceptType: e2, acceptedCategories: o2, rejectedCategories: n2, acceptedServices: t2, rejectedServices: P() });
  };
  var ze = (e2, t2) => {
    let o2 = document.querySelector('script[src="' + e2 + '"]');
    return new Promise((n2) => {
      if (o2) return n2(true);
      if (o2 = k("script"), h(t2)) for (const e3 in t2) E(o2, e3, t2[e3]);
      o2.onload = () => n2(true), o2.onerror = () => {
        o2.remove(), n2(false);
      }, o2.src = e2, H(document.head, o2);
    });
  };
  var qe = (e2) => {
    let t2, o2 = e2.value, n2 = e2.mode, a2 = false;
    const s2 = g.o;
    if ("update" === n2) {
      s2.h = t2 = Ke("data");
      const e3 = typeof t2 == typeof o2;
      if (e3 && "object" == typeof t2) {
        !t2 && (t2 = {});
        for (let e4 in o2) t2[e4] !== o2[e4] && (t2[e4] = o2[e4], a2 = true);
      } else !e3 && t2 || t2 === o2 || (t2 = o2, a2 = true);
    } else t2 = o2, a2 = true;
    return a2 && (s2.h = t2, s2.p.data = t2, ke(true)), a2;
  };
  var Ke = (e2, t2) => {
    const o2 = Ae(t2);
    return e2 ? o2[e2] : o2;
  };
  var Qe = (e2) => {
    const t2 = g.t, o2 = g.o.i;
    return e2 ? t2[e2] || o2[e2] : { ...t2, ...o2, cookie: { ...t2.cookie } };
  };
  var We = () => !g.o.D;
  var Xe = async (e2) => {
    const { o: o2, t: n2, re: a2 } = g, c2 = window;
    if (!c2._ccRun) {
      if (c2._ccRun = true, ((e3) => {
        const { ne: o3, t: n3, o: a3 } = g, c3 = n3, r3 = a3, { cookie: i3 } = c3, l2 = g.ce, d2 = e3.cookie, f2 = e3.categories, _2 = w(f2) || [], u2 = navigator, p2 = document;
        o3.Ue = p2, o3.ye = p2.documentElement, i3.domain = location.hostname, r3.i = e3, r3.P = f2, r3.O = _2, r3._ = e3.language.translations, r3.v = !!e3.disablePageInteraction, l2.ie = e3.onFirstConsent, l2.le = e3.onConsent, l2.de = e3.onChange, l2._e = e3.onModalHide, l2.fe = e3.onModalShow, l2.ue = e3.onModalReady;
        const { mode: m2, autoShow: v2, lazyHtmlGeneration: y2, autoClearCookies: C2, revision: S2, manageScriptTags: x2, hideFromBots: M2 } = e3;
        m2 === t && (c3.mode = m2), "boolean" == typeof C2 && (c3.autoClearCookies = C2), "boolean" == typeof x2 && (c3.manageScriptTags = x2), "number" == typeof S2 && S2 >= 0 && (c3.revision = S2, r3.V = true), "boolean" == typeof v2 && (c3.autoShow = v2), "boolean" == typeof y2 && (c3.lazyHtmlGeneration = y2), false === M2 && (c3.hideFromBots = false), true === c3.hideFromBots && u2 && (r3.G = u2.userAgent && /bot|crawl|spider|slurp|teoma/i.test(u2.userAgent) || u2.webdriver), h(d2) && (c3.cookie = { ...i3, ...d2 }), c3.autoClearCookies, r3.V, c3.manageScriptTags, ((e4) => {
          const { P: t2, X: o4, Y: n4, Z: a4, B: s2 } = g.o;
          for (let c4 of e4) {
            const e5 = t2[c4], r4 = e5.services || {}, i4 = h(r4) && w(r4) || [];
            o4[c4] = {}, n4[c4] = [], a4[c4] = [], e5.readOnly && (s2.push(c4), n4[c4] = i4), g.ne.se[c4] = {};
            for (let e6 of i4) {
              const t3 = r4[e6];
              t3.Se = false, o4[c4][e6] = t3;
            }
          }
        })(_2), (() => {
          if (!g.t.manageScriptTags) return;
          const e4 = g.o, t2 = D(document, "script[" + s + "]");
          for (const o4 of t2) {
            let t3 = N(o4, s), n4 = o4.dataset.service || "", a4 = false;
            if (t3 && "!" === t3.charAt(0) && (t3 = t3.slice(1), a4 = true), "!" === n4.charAt(0) && (n4 = n4.slice(1), a4 = true), b(e4.O, t3) && (e4.oe.push({ Me: o4, xe: false, ke: a4, De: t3, Te: n4 }), n4)) {
              const o5 = e4.X[t3];
              o5[n4] || (o5[n4] = { Se: false });
            }
          }
        })(), we((() => {
          const e4 = g.o.i.language.autoDetect;
          if (e4) {
            const t2 = { browser: navigator.language, document: document.documentElement.lang }, o4 = he(t2[e4]);
            if (o4) return o4;
          }
          return Ce();
        })());
      })(e2), o2.G) return;
      (() => {
        const e3 = g.o, o3 = g.t, n3 = Ae(), { categories: a3, services: s2, consentId: c3, consentTimestamp: r3, lastConsentTimestamp: i3, data: l2, revision: d2 } = n3, f2 = v(a3);
        e3.p = n3, e3.M = c3;
        const _2 = !!c3 && y(c3);
        e3.C = r3, e3.C && (e3.C = new Date(r3)), e3.S = i3, e3.S && (e3.S = new Date(i3)), e3.h = void 0 !== l2 ? l2 : null, e3.V && _2 && d2 !== o3.revision && (e3.I = false), e3.D = !(_2 && e3.I && e3.C && e3.S && f2), o3.cookie.useLocalStorage && !e3.D && (e3.D = (/* @__PURE__ */ new Date()).getTime() > (n3.expirationTime || 0), e3.D && De(o3.cookie.name)), e3.D, (() => {
          const e4 = g.o;
          for (const o4 of e4.O) {
            const n4 = e4.P[o4];
            if (n4.readOnly || n4.enabled) {
              e4.$.push(o4);
              const n5 = e4.X[o4] || {};
              for (let a4 in n5) e4.Z[o4].push(a4), e4.i.mode === t && e4.Y[o4].push(a4);
            }
          }
        })(), e3.D ? o3.mode === t && (e3.R = [...e3.$]) : (e3.Y = { ...e3.Y, ...s2 }, e3.Z = { ...e3.Y }, G([...e3.B, ...a3]));
      })();
      const i2 = We();
      if (!await Se()) return false;
      if (J(null, r2 = Ge, me, Me), g.o.D && ye(r2, Me), g.t.lazyHtmlGeneration || me(r2, Me), n2.autoShow && !i2 && Oe(true), i2) return oe(), ee(a2.le);
      n2.mode === t && oe(o2.$);
    }
    var r2;
  };
  var Ye = (e2) => {
    const { Ce: t2, ye: s2 } = g.ne, { name: c2, path: r2, domain: i2, useLocalStorage: l2 } = g.t.cookie;
    e2 && (l2 ? De(c2) : Pe(c2, r2, i2));
    for (const { pe: e3, ge: t3, me: o2 } of g.o.m) e3.removeEventListener(t3, o2);
    t2 && t2.remove(), s2 && s2.classList.remove(a, n, o);
    const d2 = new p();
    for (const e3 in g) g[e3] = d2[e3];
    window._ccRun = false;
  };

  // src/static/consentManager.js
  window.analyticsLoaded = false;
  window.reodevLoaded = false;
  function hasConsent(category) {
    if (typeof window.CookieConsent === "undefined") {
      return false;
    }
    return window.CookieConsent.acceptedCategory(category);
  }
  function deleteCookie(name, domain, path = "/") {
    const cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}${domain ? `; domain=${domain}` : ""}`;
    document.cookie = cookieString;
    console.log(`[ConsentManager] Deleted cookie: ${name}`);
  }
  function clearTrackingData(category) {
    console.log(`[ConsentManager] Clearing tracking data for category: ${category}`);
    if (category === "analytics") {
      deleteCookie("vectaraAnonymousId");
      deleteCookie("__anon_id_email");
      deleteCookie("__anon_id_uid");
      const gaCookies = document.cookie.split(";").filter((c2) => {
        const name = c2.trim().split("=")[0];
        return name.startsWith("_ga") || name.startsWith("_gid") || name.startsWith("_gat");
      });
      gaCookies.forEach((cookie) => {
        const name = cookie.trim().split("=")[0];
        deleteCookie(name);
        deleteCookie(name, ".vectara.com");
        deleteCookie(name, window.location.hostname);
      });
      if (window.analytics) {
        console.log("[ConsentManager] Clearing analytics object");
        window.analytics = void 0;
      }
      if (window.dataLayer) {
        console.log("[ConsentManager] Clearing dataLayer");
        window.dataLayer = [];
      }
      window.analyticsLoaded = false;
    }
    if (category === "marketing") {
      const reoCookies = document.cookie.split(";").filter((c2) => {
        const name = c2.trim().split("=")[0];
        return name.startsWith("reo_") || name.startsWith("_reo");
      });
      reoCookies.forEach((cookie) => {
        const name = cookie.trim().split("=")[0];
        deleteCookie(name);
        deleteCookie(name, ".vectara.com");
        deleteCookie(name, window.location.hostname);
      });
      if (window.Reo) {
        console.log("[ConsentManager] Clearing Reo object");
        window.Reo = void 0;
      }
      window.reodevLoaded = false;
    }
  }
  function whenAvailable(objectPath, timeout = 3e3) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const checkInterval = 50;
      function check() {
        const parts = objectPath.split(".");
        let obj = window;
        for (let i2 = 1; i2 < parts.length; i2++) {
          obj = obj[parts[i2]];
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
  function loadAnalytics() {
    if (window.analyticsLoaded) {
      console.log("[ConsentManager] Analytics already loaded");
      return;
    }
    console.log("[ConsentManager] Loading analytics.js");
    const script = document.createElement("script");
    script.src = "/analytics.js";
    script.async = true;
    script.onload = () => {
      console.log("[ConsentManager] Analytics.js loaded successfully");
      window.analyticsLoaded = true;
    };
    script.onerror = () => {
      console.error("[ConsentManager] Failed to load analytics.js");
    };
    document.head.appendChild(script);
  }
  function loadReodev() {
    if (window.reodevLoaded) {
      console.log("[ConsentManager] Reo.dev already loaded");
      return;
    }
    console.log("[ConsentManager] Loading reodev.js");
    const script = document.createElement("script");
    script.src = "/scripts/reodev.js";
    script.async = true;
    script.onload = () => {
      console.log("[ConsentManager] Reodev.js loaded successfully");
      window.reodevLoaded = true;
    };
    script.onerror = () => {
      console.error("[ConsentManager] Failed to load reodev.js");
    };
    document.head.appendChild(script);
  }
  function loadConsentedServices() {
    console.log("[ConsentManager] Loading consented services");
    if (hasConsent("analytics")) {
      loadAnalytics();
    }
    if (hasConsent("marketing")) {
      loadReodev();
    }
  }
  function initializeConsentManager() {
    window.VectaraConsent = {
      hasConsent,
      clearTrackingData,
      loadAnalytics,
      loadReodev,
      loadConsentedServices,
      whenAvailable
    };
    console.log("[ConsentManager] Consent manager initialized");
  }

  // src/static/cookieConsentModule.js
  initializeConsentManager();
  if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", function() {
      console.log("[CookieConsent] Initializing cookie consent");
      const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const cookieDomain = isLocalhost ? window.location.hostname : ".vectara.com";
      Xe({
        // Cookie settings
        cookie: {
          name: "cc_cookie_vectara_docs",
          domain: cookieDomain,
          path: "/",
          expiresAfterDays: 365,
          sameSite: "Lax"
        },
        // Automatically clear cookies when consent is revoked
        autoClearCookies: true,
        // GUI options
        guiOptions: {
          consentModal: {
            layout: "box inline",
            position: "bottom right",
            equalWeightButtons: false,
            flipButtons: false
          },
          preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: false,
            flipButtons: false
          }
        },
        // Consent categories
        categories: {
          necessary: {
            enabled: true,
            readOnly: true
          },
          analytics: {
            enabled: false,
            readOnly: false,
            autoClear: {
              cookies: [
                {
                  name: /^vectaraAnonymousId$/
                },
                {
                  name: /^__anon_id_email$/
                },
                {
                  name: /^__anon_id_uid$/
                },
                {
                  name: /^_ga/
                },
                {
                  name: /^_gid/
                },
                {
                  name: /^_gat/
                }
              ]
            }
          },
          marketing: {
            enabled: false,
            readOnly: false,
            autoClear: {
              cookies: [
                {
                  name: /^reo_/
                },
                {
                  name: /^_reo/
                }
              ]
            }
          }
        },
        // Consent modal language configuration
        language: {
          default: "en",
          translations: {
            en: {
              consentModal: {
                title: "We use cookies",
                description: "We use cookies to improve your experience on our website. Some cookies are necessary for the site to function, while others help us analyze site usage and provide personalized features. You can choose which categories of cookies to accept.",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                showPreferencesBtn: "Manage preferences",
                footer: `
                <a href="/docs/legal/website-privacy-policy">Privacy Policy</a>
                <a href="/docs/legal/cookie-policy">Cookie Policy</a>
              `
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
                    description: "We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. Below you can choose which types of cookies you allow us to use."
                  },
                  {
                    title: "Strictly Necessary",
                    description: "These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
                    linkedCategory: "necessary"
                  },
                  {
                    title: "Analytics",
                    description: "Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Tag Manager and Vectara Snow Analytics to track page views, user behavior, and site performance.",
                    linkedCategory: "analytics",
                    cookieTable: {
                      headers: {
                        name: "Cookie",
                        domain: "Domain",
                        duration: "Duration",
                        description: "Description"
                      },
                      body: [
                        {
                          name: "vectaraAnonymousId",
                          domain: window.location.hostname,
                          duration: "1 year",
                          description: "Unique identifier for anonymous user tracking in Vectara analytics"
                        },
                        {
                          name: "__anon_id_email",
                          domain: window.location.hostname,
                          duration: "Session",
                          description: "Anonymous email identifier for Vectara analytics"
                        },
                        {
                          name: "__anon_id_uid",
                          domain: window.location.hostname,
                          duration: "Session",
                          description: "Anonymous user identifier for Vectara analytics"
                        },
                        {
                          name: "_ga",
                          domain: ".vectara.com",
                          duration: "2 years",
                          description: "Google Analytics - Used to distinguish users"
                        },
                        {
                          name: "_gid",
                          domain: ".vectara.com",
                          duration: "24 hours",
                          description: "Google Analytics - Used to distinguish users"
                        },
                        {
                          name: "_gat",
                          domain: ".vectara.com",
                          duration: "1 minute",
                          description: "Google Analytics - Used to throttle request rate"
                        }
                      ]
                    }
                  },
                  {
                    title: "Marketing",
                    description: "Marketing cookies are used to track visitors across websites and record user sessions. We use Reo.dev to record user sessions for improving user experience and understanding how visitors use our website.",
                    linkedCategory: "marketing",
                    cookieTable: {
                      headers: {
                        name: "Cookie",
                        domain: "Domain",
                        duration: "Duration",
                        description: "Description"
                      },
                      body: [
                        {
                          name: "reo_*",
                          domain: window.location.hostname,
                          duration: "Varies",
                          description: "Reo.dev session recording cookies for user experience analysis"
                        }
                      ]
                    }
                  },
                  {
                    title: "More Information",
                    description: 'For more information about our use of cookies and your privacy rights, please read our <a href="/docs/legal/cookie-policy">Cookie Policy</a> and <a href="/docs/legal/website-privacy-policy">Privacy Policy</a>. If you have any questions, contact us at <a href="mailto:privacy@vectara.com">privacy@vectara.com</a>.'
                  }
                ]
              }
            }
          }
        },
        // Lifecycle callbacks
        onFirstConsent: function({ cookie }) {
          console.log("[CookieConsent] First consent received", cookie);
        },
        onConsent: function({ cookie }) {
          console.log("[CookieConsent] Consent updated", cookie);
          if (window.VectaraConsent) {
            window.VectaraConsent.loadConsentedServices();
          }
        },
        onChange: function({ changedCategories, changedServices }) {
          console.log("[CookieConsent] Consent changed", {
            changedCategories,
            changedServices
          });
          if (!window.VectaraConsent) {
            console.warn("[CookieConsent] VectaraConsent not available");
            return;
          }
          if (changedCategories.includes("analytics")) {
            const hasAnalyticsConsent = Ie("analytics");
            if (hasAnalyticsConsent) {
              console.log("[CookieConsent] Analytics consent granted, loading services");
              window.VectaraConsent.loadAnalytics();
            } else {
              console.log("[CookieConsent] Analytics consent revoked, clearing data");
              window.VectaraConsent.clearTrackingData("analytics");
            }
          }
          if (changedCategories.includes("marketing")) {
            const hasMarketingConsent = Ie("marketing");
            if (hasMarketingConsent) {
              console.log("[CookieConsent] Marketing consent granted, loading services");
              window.VectaraConsent.loadReodev();
            } else {
              console.log("[CookieConsent] Marketing consent revoked, clearing data");
              window.VectaraConsent.clearTrackingData("marketing");
            }
          }
        }
      });
      window.CookieConsent = cookieconsent_esm_exports;
      console.log("[CookieConsent] Cookie consent initialized successfully");
    });
  }
})();
/*! Bundled license information:

vanilla-cookieconsent/dist/cookieconsent.esm.js:
  (*!
  * CookieConsent 3.1.0
  * https://github.com/orestbida/cookieconsent
  * Author Orest Bida
  * Released under the MIT License
  *)
*/
