import { y as K, z as ht, D as Hi, G as yn, J as bn, K as _a, M as wa, N as ji, Q as Me, R as xn, V as $i, W as Ca, X as Ea, Y as ka, Z as Sa, _ as we, $ as Oe, a0 as Na, a1 as Ra, a2 as Wi, a3 as Da, a4 as mr, a5 as Gi, a6 as Ui, a7 as Vi, a8 as Zi, a9 as qi, aa as Yi, ab as Ta, ac as Aa, ad as Oa, ae as za, af as La, w as it, ag as Kn, ah as Pa, ai as Ma, aj as qr, ak as Xi, al as Ia, am as Fa, an as Ba, ao as Ha, ap as Ki, aq as ja, ar as $a, as as Wa, at as Ga, au as Ua, av as Ji, aw as Va, ax as Za, ay as qa, az as Ya, aA as Xa, aB as Ka, aC as Ja, aD as Qa } from "./F0AiChat-S7IaaWQz.js";
import { A as kf, aS as Sf, B as Nf, C as Rf, E as Df, b5 as Tf, g as Af, F as Of, a as zf, v as Lf, h as Pf, b as Mf, aE as If, aF as Ff, aG as Bf, aH as Hf, aJ as jf, aK as $f, aL as Wf, aM as Gf, aN as Uf, aO as Vf, aP as Zf, b1 as qf, q as Yf, r as Xf, s as Kf, t as Jf, c as Qf, aT as ep, l as tp, m as rp, n as np, H as ip, I as sp, L as ap, O as op, aR as lp, o as cp, P as dp, S as up, T as hp, j as fp, k as pp, U as mp, b2 as gp, aY as vp, p as yp, i as bp, a$ as xp, aX as _p, b6 as wp, aW as Cp, aV as Ep, aI as kp, u as Sp, aU as Np, aZ as Rp, d as Dp, b7 as Tp, aQ as Ap, a_ as Op, f as zp, e as Lp, b4 as Pp, b0 as Mp, b3 as Ip } from "./F0AiChat-S7IaaWQz.js";
import { jsx as h, jsxs as P, Fragment as Qt } from "react/jsx-runtime";
import W, { forwardRef as ve, useRef as j, useImperativeHandle as eo, Children as gr, createContext as Fe, useContext as De, useState as U, useMemo as $, useEffect as G, useCallback as ee, useLayoutEffect as sn, createElement as Jn, isValidElement as Qi, Fragment as to, memo as ro, useReducer as no, cloneElement as io, PureComponent as so } from "react";
import { createPortal as es, unstable_batchedUpdates as cr } from "react-dom";
import { L as ts, C as ao, i as rs, D as oo, S as Qn, a as lo, f as Yr, b as Ft, c as co, A as uo, d as dr, e as ns, E as ho, g as fr, h as fo, j as po, k as mo, l as bt, m as is, u as go, G as vo, n as yo, o as ei, p as bo, q as ss, r as xo, B as as, X as os, Y as an, s as _o, t as ls, v as wo, w as Co, x as Eo, y as ko, z as So, F as No, H as Ro, I as Do, J as ti, K as To, M as Ht, N as Xr, O as Ao, P as Oo, Q as zo, R as Lo, T as Po, U as Mo, V as Io, W as Fo, Z as Bo, _ as Ho, $ as jo, a0 as ri, a1 as $o, a2 as Wo, a3 as cs, a4 as Go, a5 as Uo, a6 as Vo, a7 as _n, a8 as Zo, a9 as qo, aa as Yo, ab as Xo, ac as Ko, ad as Jo, ae as Qo, af as el, ag as tl, ah as rl, ai as nl, aj as il, ak as ds, al as sl, am as al, an as ni, ao as ol, ap as us, aq as ll, ar as cl, as as dl, at as ul } from "./DataCollectionStorageProvider-B1NPGNFn.js";
import { aL as Bp, au as Hp, av as jp, ay as $p, aC as Wp, aD as Gp, aE as Up, aG as Vp, aH as Zp, aI as qp, aJ as Yp, aB as Xp, aF as Kp, aw as Jp, ax as Qp, aK as em, az as tm, aA as rm, aM as nm, aN as im, aO as sm, aP as am } from "./DataCollectionStorageProvider-B1NPGNFn.js";
import { A as lm, F as cm, b as dm, a as um, o as hm, u as fm } from "./F0HILActionConfirmation-CuY92_NZ.js";
import { defaultTranslations as mm } from "./i18n-provider-defaults.js";
import './f0.css';const hl = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, fl = ve(function({ widgets: e, children: t }, n) {
  const i = j(null);
  eo(n, () => i.current);
  const s = gr.toArray(e).filter((a) => !!a).map((a, o) => h("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: a
  }, o));
  return h(ts, {
    layout: "home",
    children: P("div", {
      ref: i,
      className: "@container",
      children: [P("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [h(ao, {
          columns: hl,
          showArrows: !1,
          children: s
        }), h("main", {
          children: t
        })]
      }), P("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [h("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: s.slice(0, 3)
        }), h("main", {
          className: "col-span-2",
          children: t
        }), h("div", {
          className: "flex flex-1 flex-col gap-5",
          children: s.slice(3)
        })]
      })]
    })
  });
}), pl = ht({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), hs = W.forwardRef(({ children: r, variant: e, className: t, ...n }, i) => h(ts, {
  layout: "standard",
  children: h("section", {
    ref: i,
    className: K("relative flex-1 overflow-auto", t),
    ...n,
    children: h("div", {
      className: K(pl({
        variant: e
      })),
      children: r
    })
  })
}));
hs.displayName = "StandardLayout";
const ml = ve(function({ children: e, sideContent: t, mainColumnPosition: n = "left", sticky: i = !1 }, s) {
  return h("div", {
    ref: s,
    className: "h-full",
    children: P("div", {
      className: K("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", i && "md:sticky md:top-0 md:max-h-full"),
      children: [h("main", {
        className: K("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), h(gl, {
        sticky: i,
        className: K("order-1", n === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), gl = ({ children: r, className: e }) => h("aside", {
  className: K("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: r
}), fs = Fe(null);
function ps() {
  const r = De(fs);
  if (!r)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return r;
}
function vl(r) {
  const { content: e, ...t } = r;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function xt(r) {
  const e = vl(r);
  return r.subGridOpts?.children && (e.subGridOpts = {
    ...r.subGridOpts,
    children: r.subGridOpts.children.map(
      (t) => xt(t)
    )
  }), e;
}
const yl = ["noMove", "noResize", "locked", "w", "h", "x", "y"], Qe = 200;
function bl(r) {
  const e = r.cloneNode(!0);
  return r.querySelectorAll("canvas").forEach((n) => {
    if (n.width > 0 && n.height > 0)
      try {
        const i = n.toDataURL("image/png"), s = e.querySelectorAll("canvas"), a = Array.from(r.querySelectorAll("canvas")).indexOf(n), o = s[a];
        if (o && o.parentElement) {
          const l = document.createElement("img");
          l.src = i, l.style.width = `${n.width}px`, l.style.height = `${n.height}px`, l.style.display = "block", n.className && (l.className = n.className), n.id && (l.id = n.id), o.parentElement.replaceChild(l, o);
        }
      } catch (i) {
        console.warn("Failed to convert canvas to image:", i);
      }
  }), e.innerHTML;
}
function xl({ children: r, options: e, onResizeStop: t, onChange: n, widgets: i }) {
  const [s, a] = U(null), o = j(null), l = j(!1), d = $(() => ({
    ...e,
    children: (i || []).map((_) => xt(_))
  }), [e, i]), [c, u] = U(() => {
    const _ = /* @__PURE__ */ new Map(), S = i || [], y = (b) => {
      b.id && b.content && _.set(b.id, b.content), b.subGridOpts?.children && b.subGridOpts.children.forEach((g) => {
        y(g);
      });
    };
    return S.forEach((b) => {
      y(b);
    }), _;
  }), f = j(c);
  G(() => {
    f.current = c;
  }, [c]);
  const [p, C] = U(() => {
    const _ = /* @__PURE__ */ new Map(), S = i || [], y = (b) => {
      b.id && b._originalContent !== void 0 && _.set(b.id, b._originalContent), b.subGridOpts?.children && b.subGridOpts.children.forEach((g) => {
        y(g);
      });
    };
    return S.forEach((b) => {
      y(b);
    }), _;
  }), v = j(p);
  G(() => {
    v.current = p;
  }, [p]);
  const [x, k] = U(() => {
    const _ = /* @__PURE__ */ new Map(), S = i || [], y = (b) => {
      if (b.id) {
        const g = xt(b);
        _.set(b.id, g);
      }
      b.subGridOpts?.children && b.subGridOpts.children.forEach((g) => {
        y(g);
      });
    };
    return S.forEach((b) => {
      y(b);
    }), _;
  });
  Hi(() => {
    if (!s) return;
    const _ = s.save();
    if (!Array.isArray(_))
      return;
    const S = _.map((T) => T.id), y = i || [], b = y.map((T) => T.id), g = y.filter((T) => !S.includes(T.id));
    g.length > 0 && (g.forEach((T) => {
      T.content && f.current.set(T.id, T.content), T._originalContent !== void 0 && v.current.set(T.id, T._originalContent);
    }), g.forEach((T) => {
      const E = xt(T);
      s.addWidget(E);
    }), k((T) => {
      const E = new Map(T);
      return g.forEach((R) => {
        const A = xt(R);
        E.set(R.id, A);
      }), E;
    }), u((T) => {
      const E = new Map(T);
      return g.forEach((R) => {
        R.content && E.set(R.id, R.content);
      }), E;
    }), C((T) => {
      const E = new Map(T);
      return g.forEach((R) => {
        R._originalContent !== void 0 && E.set(R.id, R._originalContent);
      }), E;
    }));
    const w = _.filter((T) => !b.includes(T.id));
    if (w.length > 0) {
      const T = w.map((E) => E.id).filter(Boolean);
      T.forEach((E) => {
        setTimeout(() => {
          f.current.delete(E), v.current.delete(E);
        }, Qe);
      }), w.forEach((E) => {
        const R = s.el.querySelector(`[gs-id="${E.id}"]`);
        R && setTimeout(() => {
          s.removeWidget(R, !0);
        }, Qe);
      }), k((E) => {
        const R = new Map(E);
        return T.forEach((A) => {
          setTimeout(() => {
            R.delete(A);
          }, Qe);
        }), R;
      }), u((E) => {
        const R = new Map(E);
        return T.forEach((A) => {
          if (R.get(A)) {
            const ce = s.el.querySelector(`[gs-id="${A}"] .grid-stack-item-content`);
            let de = "";
            ce && (de = bl(ce)), R.set(A, h(yn.div, {
              className: "h-full w-full",
              initial: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
              },
              animate: {
                opacity: 0,
                scale: 0.85,
                filter: "blur(14px)"
              },
              exit: {
                opacity: 0,
                scale: 0.85,
                filter: "blur(14px)"
              },
              transition: {
                opacity: {
                  duration: Qe / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: Qe / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: Qe / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: de
              }
            }));
          }
          setTimeout(() => {
            R.delete(A);
          }, Qe);
        }), R;
      }), C((E) => {
        const R = new Map(E);
        return T.forEach((A) => {
          setTimeout(() => {
            R.delete(A);
          }, Qe);
        }), R;
      });
    }
    const I = y.filter((T) => S.includes(T.id));
    if (I.length > 0) {
      const T = [];
      I.forEach((E) => {
        const R = _.find((Z) => Z.id === E.id);
        if (!R)
          return;
        const A = yl.filter((Z) => R[Z] !== E[Z]);
        if (A.length > 0) {
          const Z = {}, ce = ["w", "h", "x", "y"], de = ["noMove", "noResize", "locked"], te = A.filter((Q) => ce.includes(Q)), Ee = A.filter((Q) => de.includes(Q));
          if (te.length > 0 && Ee.length > 0 && te.length + Ee.length === A.length ? Ee.forEach((Q) => {
            const ke = E[Q];
            ke !== void 0 && (Z[Q] = ke);
          }) : A.forEach((Q) => {
            const ke = E[Q];
            ke !== void 0 && (Z[Q] = ke);
          }), Object.keys(Z).length > 0) {
            const Q = s.el.querySelector(`[gs-id="${E.id}"]`);
            Q && T.push({
              id: E.id,
              element: Q,
              updateOptions: Z
            });
          }
        }
      }), I.forEach((E) => {
        E.content && f.current.set(E.id, E.content), E._originalContent !== void 0 && v.current.set(E.id, E._originalContent);
      }), T.forEach(({ element: E, updateOptions: R }) => {
        try {
          s.update(E, R);
        } catch (A) {
          console.warn("Error updating widget:", A);
        }
      }), k((E) => {
        const R = new Map(E);
        return I.forEach((A) => {
          const Z = xt(A);
          R.set(A.id, Z);
        }), R;
      }), u((E) => {
        const R = new Map(E);
        return I.forEach((A) => {
          A.content && R.set(A.id, A.content);
        }), R;
      }), C((E) => {
        const R = new Map(E);
        return I.forEach((A) => {
          A._originalContent !== void 0 && R.set(A.id, A._originalContent);
        }), R;
      });
    }
    l.current || (l.current = !0);
  }, [i]), G(() => {
    if (!s || !d.handle) return;
    s.opts && (s.opts.handle = d.handle);
    const _ = setTimeout(() => {
      if (s && s.el && d.handle && s.el.querySelectorAll(d.handle).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(_);
  }, [s, d.handle, d.children]);
  const D = ee(() => {
    if (!s)
      return;
    const _ = s.save();
    if (Array.isArray(_)) {
      const S = _.map((y) => {
        const b = y.id;
        if (!b) return null;
        const g = f.current.get(b), w = v.current.get(b), I = y;
        return {
          ...y,
          id: b,
          w: y.w ?? 1,
          h: y.h ?? 1,
          x: y.x ?? 0,
          y: y.y ?? 0,
          meta: I.meta,
          _originalContent: w,
          content: g ?? h("div", {
            children: "No content"
          })
        };
      }).filter((y) => y !== null);
      n?.(S);
    }
  }, [s]);
  return G(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const _ = (S, y) => {
      t?.(S, y);
    };
    try {
      s.on("resizestop", _), s.on("change added removed", D);
    } catch (S) {
      console.error("Error attaching GridStack event listeners:", S);
      return;
    }
    return () => {
      const S = o.current;
      if (S && S.el)
        try {
          S.off("resizestop"), S.off("change added removed");
        } catch (y) {
          console.warn("Error cleaning up GridStack event listeners:", y);
        }
    };
  }, [s, t, D]), G(() => {
    o.current = s;
  }, [s]), G(() => {
    s && s.el && s.el.parentElement && l.current && D();
  }, [s]), h(fs.Provider, {
    value: {
      options: d,
      gridStack: s,
      _gridStack: {
        value: s,
        set: a
      },
      _rawWidgetMetaMap: {
        value: x,
        set: k
      },
      _reactContentMap: {
        value: c,
        set: u
      }
    },
    children: r
  });
}
const ms = Fe(null);
function _l() {
  const r = De(ms);
  if (!r)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return r;
}
const wl = Fe(null);
function Cl() {
  const { _reactContentMap: r } = ps(), { getWidgetContainer: e } = _l();
  return h(Qt, {
    children: Array.from(r.value.entries()).map(([t, n]) => {
      const i = e(t);
      return i ? h(wl.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: n && es(n, i)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function El(r, e, t, n, i) {
  const s = (...a) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + i + " and has been replaced with `" + n + "`. It will be **removed** in a future release"), e.apply(r, a));
  return s.prototype = e.prototype, s;
}
class m {
  /**
   * Convert a potential selector into an actual list of HTML elements.
   * Supports CSS selectors, element references, and special ID handling.
   *
   * @param els selector string, HTMLElement, or array of elements
   * @param root optional root element to search within (defaults to document, useful for shadow DOM)
   * @returns array of HTML elements matching the selector
   *
   * @example
   * const elements = Utils.getElements('.grid-item');
   * const byId = Utils.getElements('#myWidget');
   * const fromShadow = Utils.getElements('.item', shadowRoot);
   */
  static getElements(e, t = document) {
    if (typeof e == "string") {
      const n = "getElementById" in t ? t : void 0;
      if (n && !isNaN(+e[0])) {
        const s = n.getElementById(e);
        return s ? [s] : [];
      }
      let i = t.querySelectorAll(e);
      return !i.length && e[0] !== "." && e[0] !== "#" && (i = t.querySelectorAll("." + e), i.length || (i = t.querySelectorAll("#" + e))), Array.from(i);
    }
    return [e];
  }
  /**
   * Convert a potential selector into a single HTML element.
   * Similar to getElements() but returns only the first match.
   *
   * @param els selector string or HTMLElement
   * @param root optional root element to search within (defaults to document)
   * @returns the first HTML element matching the selector, or null if not found
   *
   * @example
   * const element = Utils.getElement('#myWidget');
   * const first = Utils.getElement('.grid-item');
   */
  static getElement(e, t = document) {
    if (typeof e == "string") {
      const n = "getElementById" in t ? t : void 0;
      if (!e.length)
        return null;
      if (n && e[0] === "#")
        return n.getElementById(e.substring(1));
      if (e[0] === "#" || e[0] === "." || e[0] === "[")
        return t.querySelector(e);
      if (n && !isNaN(+e[0]))
        return n.getElementById(e);
      let i = t.querySelector(e);
      return n && !i && (i = n.getElementById(e)), i || (i = t.querySelector("." + e)), i;
    }
    return e;
  }
  /**
   * Check if a widget should be lazy loaded based on node or grid settings.
   *
   * @param n the grid node to check
   * @returns true if the item should be lazy loaded
   *
   * @example
   * if (Utils.lazyLoad(node)) {
   *   // Set up intersection observer for lazy loading
   * }
   */
  static lazyLoad(e) {
    return e.lazyLoad || e.grid?.opts?.lazyLoad && e.lazyLoad !== !1;
  }
  /**
   * Create a div element with the specified CSS classes.
   *
   * @param classes array of CSS class names to add
   * @param parent optional parent element to append the div to
   * @returns the created div element
   *
   * @example
   * const div = Utils.createDiv(['grid-item', 'draggable']);
   * const nested = Utils.createDiv(['content'], parentDiv);
   */
  static createDiv(e, t) {
    const n = document.createElement("div");
    return e.forEach((i) => {
      i && n.classList.add(i);
    }), t?.appendChild(n), n;
  }
  /**
   * Check if a widget should resize to fit its content.
   *
   * @param n the grid node to check (can be undefined)
   * @param strict if true, only returns true for explicit sizeToContent:true (not numbers)
   * @returns true if the widget should resize to content
   *
   * @example
   * if (Utils.shouldSizeToContent(node)) {
   *   // Trigger content-based resizing
   * }
   */
  static shouldSizeToContent(e, t = !1) {
    return e?.grid && (t ? e.sizeToContent === !0 || e.grid.opts.sizeToContent === !0 && e.sizeToContent === void 0 : !!e.sizeToContent || e.grid.opts.sizeToContent && e.sizeToContent !== !1);
  }
  /**
   * Check if two grid positions overlap/intersect.
   *
   * @param a first position with x, y, w, h properties
   * @param b second position with x, y, w, h properties
   * @returns true if the positions overlap
   *
   * @example
   * const overlaps = Utils.isIntercepted(
   *   {x: 0, y: 0, w: 2, h: 1},
   *   {x: 1, y: 0, w: 2, h: 1}
   * ); // true - they overlap
   */
  static isIntercepted(e, t) {
    return !(e.y >= t.y + t.h || e.y + e.h <= t.y || e.x + e.w <= t.x || e.x >= t.x + t.w);
  }
  /**
   * Check if two grid positions are touching (edges or corners).
   *
   * @param a first position
   * @param b second position
   * @returns true if the positions are touching
   *
   * @example
   * const touching = Utils.isTouching(
   *   {x: 0, y: 0, w: 2, h: 1},
   *   {x: 2, y: 0, w: 1, h: 1}
   * ); // true - they share an edge
   */
  static isTouching(e, t) {
    return m.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
  }
  /**
   * Calculate the overlapping area between two grid positions.
   *
   * @param a first position
   * @param b second position
   * @returns the area of overlap (0 if no overlap)
   *
   * @example
   * const overlap = Utils.areaIntercept(
   *   {x: 0, y: 0, w: 3, h: 2},
   *   {x: 1, y: 0, w: 3, h: 2}
   * ); // returns 4 (2x2 overlap)
   */
  static areaIntercept(e, t) {
    const n = e.x > t.x ? e.x : t.x, i = e.x + e.w < t.x + t.w ? e.x + e.w : t.x + t.w;
    if (i <= n)
      return 0;
    const s = e.y > t.y ? e.y : t.y, a = e.y + e.h < t.y + t.h ? e.y + e.h : t.y + t.h;
    return a <= s ? 0 : (i - n) * (a - s);
  }
  /**
   * Calculate the total area of a grid position.
   *
   * @param a position with width and height
   * @returns the total area (width * height)
   *
   * @example
   * const area = Utils.area({x: 0, y: 0, w: 3, h: 2}); // returns 6
   */
  static area(e) {
    return e.w * e.h;
  }
  /**
   * Sort an array of grid nodes by position (y first, then x).
   *
   * @param nodes array of nodes to sort
   * @param dir sort direction: 1 for ascending (top-left first), -1 for descending
   * @returns the sorted array (modifies original)
   *
   * @example
   * const sorted = Utils.sort(nodes); // Sort top-left to bottom-right
   * const reverse = Utils.sort(nodes, -1); // Sort bottom-right to top-left
   */
  static sort(e, t = 1) {
    return e.sort((i, s) => {
      const a = t * ((i.y ?? 1e4) - (s.y ?? 1e4));
      return a === 0 ? t * ((i.x ?? 1e4) - (s.x ?? 1e4)) : a;
    });
  }
  /**
   * Find a grid node by its ID.
   *
   * @param nodes array of nodes to search
   * @param id the ID to search for
   * @returns the node with matching ID, or undefined if not found
   *
   * @example
   * const node = Utils.find(nodes, 'widget-1');
   * if (node) console.log('Found node at:', node.x, node.y);
   */
  static find(e, t) {
    return t ? e.find((n) => n.id === t) : void 0;
  }
  /**
   * Convert various value types to boolean.
   * Handles strings like 'false', 'no', '0' as false.
   *
   * @param v value to convert
   * @returns boolean representation
   *
   * @example
   * Utils.toBool('true');  // true
   * Utils.toBool('false'); // false
   * Utils.toBool('no');    // false
   * Utils.toBool('1');     // true
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static toBool(e) {
    return typeof e == "boolean" ? e : typeof e == "string" ? (e = e.toLowerCase(), !(e === "" || e === "no" || e === "false" || e === "0")) : !!e;
  }
  /**
   * Convert a string value to a number, handling null and empty strings.
   *
   * @param value string or null value to convert
   * @returns number value, or undefined for null/empty strings
   *
   * @example
   * Utils.toNumber('42');  // 42
   * Utils.toNumber('');    // undefined
   * Utils.toNumber(null);  // undefined
   */
  static toNumber(e) {
    return e === null || e.length === 0 ? void 0 : Number(e);
  }
  /**
   * Parse a height value with units into numeric value and unit string.
   * Supports px, em, rem, vh, vw, %, cm, mm units.
   *
   * @param val height value as number or string with units
   * @returns object with h (height) and unit properties
   *
   * @example
   * Utils.parseHeight('100px');  // {h: 100, unit: 'px'}
   * Utils.parseHeight('2rem');   // {h: 2, unit: 'rem'}
   * Utils.parseHeight(50);       // {h: 50, unit: 'px'}
   */
  static parseHeight(e) {
    let t, n = "px";
    if (typeof e == "string")
      if (e === "auto" || e === "")
        t = 0;
      else {
        const i = e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%|cm|mm)?$/);
        if (!i)
          throw new Error(`Invalid height val = ${e}`);
        n = i[2] || "px", t = parseFloat(i[1]);
      }
    else
      t = e;
    return { h: t, unit: n };
  }
  /**
   * Copy unset fields from source objects to target object (shallow merge with defaults).
   * Similar to Object.assign but only sets undefined/null fields.
   *
   * @param target the object to copy defaults into
   * @param sources one or more source objects to copy defaults from
   * @returns the modified target object
   *
   * @example
   * const config = { width: 100 };
   * Utils.defaults(config, { width: 200, height: 50 });
   * // config is now { width: 100, height: 50 }
   */
  // eslint-disable-next-line
  static defaults(e, ...t) {
    return t.forEach((n) => {
      for (const i in n) {
        if (!n.hasOwnProperty(i))
          return;
        e[i] === null || e[i] === void 0 ? e[i] = n[i] : typeof n[i] == "object" && typeof e[i] == "object" && m.defaults(e[i], n[i]);
      }
    }), e;
  }
  /**
   * Compare two objects for equality (shallow comparison).
   * Checks if objects have the same fields and values at one level deep.
   *
   * @param a first object to compare
   * @param b second object to compare
   * @returns true if objects have the same values
   *
   * @example
   * Utils.same({x: 1, y: 2}, {x: 1, y: 2}); // true
   * Utils.same({x: 1}, {x: 1, y: 2}); // false
   */
  static same(e, t) {
    if (typeof e != "object")
      return e == t;
    if (typeof e != typeof t || Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const n in e)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  /**
   * Copy position and size properties from one widget to another.
   * Copies x, y, w, h and optionally min/max constraints.
   *
   * @param a target widget to copy to
   * @param b source widget to copy from
   * @param doMinMax if true, also copy min/max width/height constraints
   * @returns the target widget (a)
   *
   * @example
   * Utils.copyPos(widget1, widget2); // Copy position/size
   * Utils.copyPos(widget1, widget2, true); // Also copy constraints
   */
  static copyPos(e, t, n = !1) {
    return t.x !== void 0 && (e.x = t.x), t.y !== void 0 && (e.y = t.y), t.w !== void 0 && (e.w = t.w), t.h !== void 0 && (e.h = t.h), n && (t.minW && (e.minW = t.minW), t.minH && (e.minH = t.minH), t.maxW && (e.maxW = t.maxW), t.maxH && (e.maxH = t.maxH)), e;
  }
  /** true if a and b has same size & position */
  static samePos(e, t) {
    return e && t && e.x === t.x && e.y === t.y && (e.w || 1) === (t.w || 1) && (e.h || 1) === (t.h || 1);
  }
  /** given a node, makes sure it's min/max are valid */
  static sanitizeMinMax(e) {
    e.minW || delete e.minW, e.minH || delete e.minH, e.maxW || delete e.maxW, e.maxH || delete e.maxH;
  }
  /** removes field from the first object if same as the second objects (like diffing) and internal '_' for saving */
  static removeInternalAndSame(e, t) {
    if (!(typeof e != "object" || typeof t != "object"))
      for (let n in e) {
        const i = e[n], s = t[n];
        n[0] === "_" || i === s ? delete e[n] : i && typeof i == "object" && s !== void 0 && (m.removeInternalAndSame(i, s), Object.keys(i).length || delete e[n]);
      }
  }
  /** removes internal fields '_' and default values for saving */
  static removeInternalForSave(e, t = !0) {
    for (let n in e)
      (n[0] === "_" || e[n] === null || e[n] === void 0) && delete e[n];
    delete e.grid, t && delete e.el, e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, e.locked || delete e.locked, (e.w === 1 || e.w === e.minW) && delete e.w, (e.h === 1 || e.h === e.minH) && delete e.h;
  }
  /** return the closest parent (or itself) matching the given class */
  // static closestUpByClass(el: HTMLElement, name: string): HTMLElement {
  //   while (el) {
  //     if (el.classList.contains(name)) return el;
  //     el = el.parentElement
  //   }
  //   return null;
  // }
  /** delay calling the given function for given delay, preventing new calls from happening while waiting */
  static throttle(e, t) {
    let n = !1;
    return (...i) => {
      n || (n = !0, setTimeout(() => {
        e(...i), n = !1;
      }, t));
    };
  }
  static removePositioningStyles(e) {
    const t = e.style;
    t.position && t.removeProperty("position"), t.left && t.removeProperty("left"), t.top && t.removeProperty("top"), t.width && t.removeProperty("width"), t.height && t.removeProperty("height");
  }
  /** @internal returns the passed element if scrollable, else the closest parent that will, up to the entire document scrolling element */
  static getScrollElement(e) {
    if (!e)
      return document.scrollingElement || document.documentElement;
    const t = getComputedStyle(e);
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : m.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, n) {
    const i = m.getScrollElement(e);
    if (!i)
      return;
    const s = e.getBoundingClientRect(), a = i.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(a.bottom, o), d = s.top - Math.max(a.top, 0), c = i.scrollTop;
    d < 0 && n < 0 ? e.offsetHeight > a.height ? i.scrollTop += n : i.scrollTop += Math.abs(d) > Math.abs(n) ? n : d : l > 0 && n > 0 && (e.offsetHeight > a.height ? i.scrollTop += n : i.scrollTop += l > n ? n : l), t.top += i.scrollTop - c;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, n) {
    const i = m.getScrollElement(t), s = i.clientHeight, a = i === m.getScrollElement() ? 0 : i.getBoundingClientRect().top, o = e.clientY - a, l = o < n, d = o > s - n;
    l ? i.scrollBy({ behavior: "smooth", top: o - n }) : d && i.scrollBy({ behavior: "smooth", top: n - (s - o) });
  }
  /** single level clone, returning a new object with same top fields. This will share sub objects and arrays */
  static clone(e) {
    return e == null || typeof e != "object" ? e : e instanceof Array ? [...e] : { ...e };
  }
  /**
   * Recursive clone version that returns a full copy, checking for nested objects and arrays ONLY.
   * Note: this will use as-is any key starting with double __ (and not copy inside) some lib have circular dependencies.
   */
  static cloneDeep(e) {
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], n = m.clone(e);
    for (const i in n)
      n.hasOwnProperty(i) && typeof n[i] == "object" && i.substring(0, 2) !== "__" && !t.find((s) => s === i) && (n[i] = m.cloneDeep(e[i]));
    return n;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let n;
    typeof t == "string" ? n = m.getElement(t) : n = t, n && n.appendChild(e);
  }
  // public static setPositionRelative(el: HTMLElement): void {
  //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
  //     el.style.position = "relative";
  //   }
  // }
  static addElStyles(e, t) {
    if (t instanceof Object)
      for (const n in t)
        t.hasOwnProperty(n) && (Array.isArray(t[n]) ? t[n].forEach((i) => {
          e.style[n] = i;
        }) : e.style[n] = t[n]);
  }
  static initEvent(e, t) {
    const n = { type: t.type }, i = {
      button: 0,
      which: 0,
      buttons: 1,
      bubbles: !0,
      cancelable: !0,
      target: t.target ? t.target : e.target
    };
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].forEach((s) => n[s] = e[s]), ["pageX", "pageY", "clientX", "clientY", "screenX", "screenY"].forEach((s) => n[s] = e[s]), { ...n, ...i };
  }
  /** copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target */
  static simulateMouseEvent(e, t, n) {
    const i = e, s = new MouseEvent(t, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      view: window,
      detail: 1,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: i.ctrlKey ?? !1,
      altKey: i.altKey ?? !1,
      shiftKey: i.shiftKey ?? !1,
      metaKey: i.metaKey ?? !1,
      button: 0,
      relatedTarget: e.target
    });
    (n || e.target).dispatchEvent(s);
  }
  /**
   * defines an element that is used to get the offset and scale from grid transforms
   * returns the scale and offsets from said element
  */
  static getValuesFromTransformedElement(e) {
    const t = document.createElement("div");
    m.addElStyles(t, {
      opacity: "0",
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "1px",
      height: "1px",
      zIndex: "-999999"
    }), e.appendChild(t);
    const n = t.getBoundingClientRect();
    return e.removeChild(t), t.remove(), {
      xScale: 1 / n.width,
      yScale: 1 / n.height,
      xOffset: n.left,
      yOffset: n.top
    };
  }
  /** swap the given object 2 field values */
  static swap(e, t, n) {
    if (!e)
      return;
    const i = e[t];
    e[t] = e[n], e[n] = i;
  }
  /** returns true if event is inside the given element rectangle */
  // Note: Safari Mac has null event.relatedTarget which causes #1684 so check if DragEvent is inside the coordinates instead
  //    Utils.el.contains(event.relatedTarget as HTMLElement)
  // public static inside(e: MouseEvent, el: HTMLElement): boolean {
  //   // srcElement, toElement, target: all set to placeholder when leaving simple grid, so we can't use that (Chrome)
  //   const target: HTMLElement = e.relatedTarget || (e as any).fromElement;
  //   if (!target) {
  //     const { bottom, left, right, top } = el.getBoundingClientRect();
  //     return (e.x < right && e.x > left && e.y < bottom && e.y > top);
  //   }
  //   return el.contains(target);
  // }
  /** true if the item can be rotated (checking for prop, not space available) */
  static canBeRotated(e) {
    return !(!e || e.w === e.h || e.locked || e.noResize || e.grid?.opts.disableResize || e.minW && e.minW === e.maxW || e.minH && e.minH === e.maxH);
  }
}
class We {
  constructor(e = {}) {
    this.addedNodes = [], this.removedNodes = [], this.defaultColumn = 12, this.column = e.column || this.defaultColumn, this.column > this.defaultColumn && (this.defaultColumn = this.column), this.maxRow = e.maxRow, this._float = e.float, this.nodes = e.nodes || [], this.onChange = e.onChange;
  }
  /**
   * Enable/disable batch mode for multiple operations to optimize performance.
   * When enabled, layout updates are deferred until batch mode is disabled.
   *
   * @param flag true to enable batch mode, false to disable and apply changes
   * @param doPack if true (default), pack/compact nodes when disabling batch mode
   * @returns the engine instance for chaining
   *
   * @example
   * // Start batch mode for multiple operations
   * engine.batchUpdate(true);
   * engine.addNode(node1);
   * engine.addNode(node2);
   * engine.batchUpdate(false); // Apply all changes at once
   */
  batchUpdate(e = !0, t = !0) {
    return !!this.batchMode === e ? this : (this.batchMode = e, e ? (this._prevFloat = this._float, this._float = !0, this.cleanNodes(), this.saveInitial()) : (this._float = this._prevFloat, delete this._prevFloat, t && this._packNodes(), this._notify()), this);
  }
  // use entire row for hitting area (will use bottom reverse sorted first) if we not actively moving DOWN and didn't already skip
  _useEntireRowArea(e, t) {
    return (!this.float || this.batchMode && !this._prevFloat) && !this._hasLocked && (!e._moving || e._skipDown || t.y <= e.y);
  }
  /** @internal fix collision on given 'node', going to given new location 'nn', with optional 'collide' node already found.
   * return true if we moved. */
  _fixCollisions(e, t = e, n, i = {}) {
    if (this.sortNodes(-1), n = n || this.collide(e, t), !n)
      return !1;
    if (e._moving && !i.nested && !this.float && this.swap(e, n))
      return !0;
    let s = t;
    !this._loading && this._useEntireRowArea(e, t) && (s = { x: 0, w: this.column, y: t.y, h: t.h }, n = this.collide(e, s, i.skip));
    let a = !1;
    const o = { nested: !0, pack: !1 };
    let l = 0;
    for (; n = n || this.collide(e, s, i.skip); ) {
      if (l++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let d;
      if (n.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(n, { ...n, y: e.y }, e) || !this.collide(n, { ...n, y: t.y - n.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: n.y + n.h, ...o };
        d = this._loading && m.samePos(e, c) ? !0 : this.moveNode(e, c), (n.locked || this._loading) && d ? m.copyPos(t, e) : !n.locked && d && i.pack && (this._packNodes(), t.y = n.y + n.h, m.copyPos(e, t)), a = a || d;
      } else
        d = this.moveNode(n, { ...n, y: t.y + t.h, skip: e, ...o });
      if (!d)
        return a;
      n = void 0;
    }
    return a;
  }
  /**
   * Return the first node that intercepts/collides with the given node or area.
   * Used for collision detection during drag and drop operations.
   *
   * @param skip the node to skip in collision detection (usually the node being moved)
   * @param area the area to check for collisions (defaults to skip node's area)
   * @param skip2 optional second node to skip in collision detection
   * @returns the first colliding node, or undefined if no collision
   *
   * @example
   * const colliding = engine.collide(draggedNode, {x: 2, y: 1, w: 2, h: 1});
   * if (colliding) {
   *   console.log('Would collide with:', colliding.id);
   * }
   */
  collide(e, t = e, n) {
    const i = e._id, s = n?._id;
    return this.nodes.find((a) => a._id !== i && a._id !== s && m.isIntercepted(a, t));
  }
  /**
   * Return all nodes that intercept/collide with the given node or area.
   * Similar to collide() but returns all colliding nodes instead of just the first.
   *
   * @param skip the node to skip in collision detection
   * @param area the area to check for collisions (defaults to skip node's area)
   * @param skip2 optional second node to skip in collision detection
   * @returns array of all colliding nodes
   *
   * @example
   * const allCollisions = engine.collideAll(draggedNode);
   * console.log('Colliding with', allCollisions.length, 'nodes');
   */
  collideAll(e, t = e, n) {
    const i = e._id, s = n?._id;
    return this.nodes.filter((a) => a._id !== i && a._id !== s && m.isIntercepted(a, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, n) {
    if (!t.rect || !e._rect)
      return;
    const i = e._rect, s = { ...t.rect };
    s.y > i.y ? (s.h += s.y - i.y, s.y = i.y) : s.h += i.y - s.y, s.x > i.x ? (s.w += s.x - i.x, s.x = i.x) : s.w += i.x - s.x;
    let a, o = 0.5;
    for (let l of n) {
      if (l.locked || !l._rect)
        break;
      const d = l._rect;
      let c = Number.MAX_VALUE, u = Number.MAX_VALUE;
      i.y < d.y ? c = (s.y + s.h - d.y) / d.h : i.y + i.h > d.y + d.h && (c = (d.y + d.h - s.y) / d.h), i.x < d.x ? u = (s.x + s.w - d.x) / d.w : i.x + i.w > d.x + d.w && (u = (d.x + d.w - s.x) / d.w);
      const f = Math.min(u, c);
      f > o && (o = f, a = l);
    }
    return t.collide = a, a;
  }
  /** does a pixel coverage returning the node that has the most coverage by area */
  /*
  protected collideCoverage(r: GridStackPosition, collides: GridStackNode[]): {collide: GridStackNode, over: number} {
    const collide: GridStackNode;
    const overMax = 0;
    collides.forEach(n => {
      if (n.locked || !n._rect) return;
      const over = Utils.areaIntercept(r, n._rect);
      if (over > overMax) {
        overMax = over;
        collide = n;
      }
    });
    return {collide, over: overMax};
  }
  */
  /**
   * Cache the pixel rectangles for all nodes used for collision detection during drag operations.
   * This optimization converts grid coordinates to pixel coordinates for faster collision detection.
   *
   * @param w width of a single grid cell in pixels
   * @param h height of a single grid cell in pixels
   * @param top top margin/padding in pixels
   * @param right right margin/padding in pixels
   * @param bottom bottom margin/padding in pixels
   * @param left left margin/padding in pixels
   * @returns the engine instance for chaining
   *
   * @internal This is typically called by GridStack during resize events
   */
  cacheRects(e, t, n, i, s, a) {
    return this.nodes.forEach((o) => o._rect = {
      y: o.y * t + n,
      x: o.x * e + a,
      w: o.w * e - a - i,
      h: o.h * t - n - s
    }), this;
  }
  /**
   * Attempt to swap the positions of two nodes if they meet swapping criteria.
   * Nodes can swap if they are the same size or in the same column/row, not locked, and touching.
   *
   * @param a first node to swap
   * @param b second node to swap
   * @returns true if swap was successful, false if not possible, undefined if not applicable
   *
   * @example
   * const swapped = engine.swap(nodeA, nodeB);
   * if (swapped) {
   *   console.log('Nodes swapped successfully');
   * }
   */
  swap(e, t) {
    if (!t || t.locked || !e || e.locked)
      return !1;
    function n() {
      const s = t.x, a = t.y;
      return t.x = e.x, t.y = e.y, e.h != t.h ? (e.x = s, e.y = t.y + t.h) : e.w != t.w ? (e.x = t.x + t.w, e.y = a) : (e.x = s, e.y = a), e._dirty = t._dirty = !0, !0;
    }
    let i;
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (i = m.isTouching(e, t)))
      return n();
    if (i !== !1) {
      if (e.w === t.w && e.x === t.x && (i || (i = m.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return n();
      }
      if (i !== !1) {
        if (e.h === t.h && e.y === t.y && (i || (i = m.isTouching(e, t)))) {
          if (t.x < e.x) {
            const s = e;
            e = t, t = s;
          }
          return n();
        }
        return !1;
      }
    }
  }
  /**
   * Check if the specified rectangular area is empty (no nodes occupy any part of it).
   *
   * @param x the x coordinate (column) of the area to check
   * @param y the y coordinate (row) of the area to check
   * @param w the width in columns of the area to check
   * @param h the height in rows of the area to check
   * @returns true if the area is completely empty, false if any node overlaps
   *
   * @example
   * if (engine.isAreaEmpty(2, 1, 3, 2)) {
   *   console.log('Area is available for placement');
   * }
   */
  isAreaEmpty(e, t, n, i) {
    const s = { x: e || 0, y: t || 0, w: n || 1, h: i || 1 };
    return !this.collide(s);
  }
  /**
   * Re-layout grid items to reclaim any empty space.
   * This optimizes the grid layout by moving items to fill gaps.
   *
   * @param layout layout algorithm to use:
   *   - 'compact' (default): find truly empty spaces, may reorder items
   *   - 'list': keep the sort order exactly the same, move items up sequentially
   * @param doSort if true (default), sort nodes by position before compacting
   * @returns the engine instance for chaining
   *
   * @example
   * // Compact to fill empty spaces
   * engine.compact();
   *
   * // Compact preserving item order
   * engine.compact('list');
   */
  compact(e = "compact", t = !0) {
    if (this.nodes.length === 0)
      return this;
    t && this.sortNodes();
    const n = this.batchMode;
    n || this.batchUpdate();
    const i = this._inColumnResize;
    i || (this._inColumnResize = !0);
    const s = this.nodes;
    return this.nodes = [], s.forEach((a, o, l) => {
      let d;
      a.locked || (a.autoPosition = !0, e === "list" && o && (d = l[o - 1])), this.addNode(a, !1, d);
    }), i || delete this._inColumnResize, n || this.batchUpdate(!1), this;
  }
  /**
   * Enable/disable floating widgets (default: `false`).
   * When floating is enabled, widgets can move up to fill empty spaces.
   * See [example](http://gridstackjs.com/demo/float.html)
   *
   * @param val true to enable floating, false to disable
   *
   * @example
   * engine.float = true;  // Enable floating
   * engine.float = false; // Disable floating (default)
   */
  set float(e) {
    this._float !== e && (this._float = e || !1, e || this._packNodes()._notify());
  }
  /**
   * Get the current floating mode setting.
   *
   * @returns true if floating is enabled, false otherwise
   *
   * @example
   * const isFloating = engine.float;
   * console.log('Floating enabled:', isFloating);
   */
  get float() {
    return this._float || !1;
  }
  /**
   * Sort the nodes array from first to last, or reverse.
   * This is called during collision/placement operations to enforce a specific order.
   *
   * @param dir sort direction: 1 for ascending (first to last), -1 for descending (last to first)
   * @returns the engine instance for chaining
   *
   * @example
   * engine.sortNodes();    // Sort ascending (default)
   * engine.sortNodes(-1);  // Sort descending
   */
  sortNodes(e = 1) {
    return this.nodes = m.sort(this.nodes, e), this;
  }
  /** @internal called to top gravity pack the items back OR revert back to original Y positions when floating */
  _packNodes() {
    return this.batchMode ? this : (this.sortNodes(), this.float ? this.nodes.forEach((e) => {
      if (e._updating || e._orig === void 0 || e.y === e._orig.y)
        return;
      let t = e.y;
      for (; t > e._orig.y; )
        --t, this.collide(e, { x: e.x, y: t, w: e.w, h: e.h }) || (e._dirty = !0, e.y = t);
    }) : this.nodes.forEach((e, t) => {
      if (!e.locked)
        for (; e.y > 0; ) {
          const n = t === 0 ? 0 : e.y - 1;
          if (!(t === 0 || !this.collide(e, { x: e.x, y: n, w: e.w, h: e.h })))
            break;
          e._dirty = e.y !== n, e.y = n;
        }
    }), this);
  }
  /**
   * Prepare and validate a node's coordinates and values for the current grid.
   * This ensures the node has valid position, size, and properties before being added to the grid.
   *
   * @param node the node to prepare and validate
   * @param resizing if true, resize the node down if it's out of bounds; if false, move it to fit
   * @returns the prepared node with valid coordinates
   *
   * @example
   * const node = { w: 3, h: 2, content: 'Hello' };
   * const prepared = engine.prepareNode(node);
   * console.log('Node prepared at:', prepared.x, prepared.y);
   */
  prepareNode(e, t) {
    e._id = e._id ?? We._idSeq++;
    const n = e.id;
    if (n) {
      let s = 1;
      for (; this.nodes.find((a) => a.id === e.id && a !== e); )
        e.id = n + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const i = { x: 0, y: 0, w: 1, h: 1 };
    return m.defaults(e, i), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, m.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = i.x, e.autoPosition = !0), isNaN(e.y) && (e.y = i.y, e.autoPosition = !0), isNaN(e.w) && (e.w = i.w), isNaN(e.h) && (e.h = i.h), this.nodeBoundFix(e, t), e;
  }
  /**
   * Part 2 of preparing a node to fit inside the grid - validates and fixes coordinates and dimensions.
   * This ensures the node fits within grid boundaries and respects min/max constraints.
   *
   * @param node the node to validate and fix
   * @param resizing if true, resize the node to fit; if false, move the node to fit
   * @returns the engine instance for chaining
   *
   * @example
   * // Fix a node that might be out of bounds
   * engine.nodeBoundFix(node, true); // Resize to fit
   * engine.nodeBoundFix(node, false); // Move to fit
   */
  nodeBoundFix(e, t) {
    const n = e._orig || m.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), m.samePos(e, n) || (e._dirty = !0), this;
  }
  /**
   * Returns a list of nodes that have been modified from their original values.
   * This is used to track which nodes need DOM updates.
   *
   * @param verify if true, performs additional verification by comparing current vs original positions
   * @returns array of nodes that have been modified
   *
   * @example
   * const changed = engine.getDirtyNodes();
   * console.log('Modified nodes:', changed.length);
   *
   * // Get verified dirty nodes
   * const verified = engine.getDirtyNodes(true);
   */
  getDirtyNodes(e) {
    return e ? this.nodes.filter((t) => t._dirty && !m.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
  }
  /** @internal call this to call onChange callback with dirty nodes so DOM can be updated */
  _notify(e) {
    if (this.batchMode || !this.onChange)
      return this;
    const t = (e || []).concat(this.getDirtyNodes());
    return this.onChange(t), this;
  }
  /**
   * Clean all dirty and last tried information from nodes.
   * This resets the dirty state tracking for all nodes.
   *
   * @returns the engine instance for chaining
   *
   * @internal
   */
  cleanNodes() {
    return this.batchMode ? this : (this.nodes.forEach((e) => {
      delete e._dirty, delete e._lastTried;
    }), this);
  }
  /**
   * Save the initial position/size of all nodes to track real dirty state.
   * This creates a snapshot of current positions that can be restored later.
   *
   * Note: Should be called right after change events and before move/resize operations.
   *
   * @returns the engine instance for chaining
   *
   * @internal
   */
  saveInitial() {
    return this.nodes.forEach((e) => {
      e._orig = m.copyPos({}, e), delete e._dirty;
    }), this._hasLocked = this.nodes.some((e) => e.locked), this;
  }
  /**
   * Restore all nodes back to their initial values.
   * This is typically called when canceling an operation (e.g., Esc key during drag).
   *
   * @returns the engine instance for chaining
   *
   * @internal
   */
  restoreInitial() {
    return this.nodes.forEach((e) => {
      !e._orig || m.samePos(e, e._orig) || (m.copyPos(e, e._orig), e._dirty = !0);
    }), this._notify(), this;
  }
  /**
   * Find the first available empty spot for the given node dimensions.
   * Updates the node's x,y attributes with the found position.
   *
   * @param node the node to find a position for (w,h must be set)
   * @param nodeList optional list of nodes to check against (defaults to engine nodes)
   * @param column optional column count (defaults to engine column count)
   * @param after optional node to start search after (maintains order)
   * @returns true if an empty position was found and node was updated
   *
   * @example
   * const node = { w: 2, h: 1 };
   * if (engine.findEmptyPosition(node)) {
   *   console.log('Found position at:', node.x, node.y);
   * }
   */
  findEmptyPosition(e, t = this.nodes, n = this.column, i) {
    const s = i ? i.y * n + (i.x + i.w) : 0;
    let a = !1;
    for (let o = s; !a; ++o) {
      const l = o % n, d = Math.floor(o / n);
      if (l + e.w > n)
        continue;
      const c = { x: l, y: d, w: e.w, h: e.h };
      t.find((u) => m.isIntercepted(c, u)) || ((e.x !== l || e.y !== d) && (e._dirty = !0), e.x = l, e.y = d, delete e.autoPosition, a = !0);
    }
    return a;
  }
  /**
   * Add the given node to the grid, handling collision detection and re-packing.
   * This is the main method for adding new widgets to the engine.
   *
   * @param node the node to add to the grid
   * @param triggerAddEvent if true, adds node to addedNodes list for event triggering
   * @param after optional node to place this node after (for ordering)
   * @returns the added node (or existing node if duplicate)
   *
   * @example
   * const node = { x: 0, y: 0, w: 2, h: 1, content: 'Hello' };
   * const added = engine.addNode(node, true);
   */
  addNode(e, t = !1, n) {
    const i = this.nodes.find((a) => a._id === e._id);
    if (i)
      return i;
    this._inColumnResize ? this.nodeBoundFix(e) : this.prepareNode(e), delete e._temporaryRemoved, delete e._removeDOM;
    let s;
    return e.autoPosition && this.findEmptyPosition(e, this.nodes, this.column, n) && (delete e.autoPosition, s = !0), this.nodes.push(e), t && this.addedNodes.push(e), s || this._fixCollisions(e), this.batchMode || this._packNodes()._notify(), e;
  }
  /**
   * Remove the given node from the grid.
   *
   * @param node the node to remove
   * @param removeDOM if true (default), marks node for DOM removal
   * @param triggerEvent if true, adds node to removedNodes list for event triggering
   * @returns the engine instance for chaining
   *
   * @example
   * engine.removeNode(node, true, true);
   */
  removeNode(e, t = !0, n = !1) {
    return this.nodes.find((i) => i._id === e._id) ? (n && this.removedNodes.push(e), t && (e._removeDOM = !0), this.nodes = this.nodes.filter((i) => i._id !== e._id), e._isAboutToRemove || this._packNodes(), this._notify([e]), this) : this;
  }
  /**
   * Remove all nodes from the grid.
   *
   * @param removeDOM if true (default), marks all nodes for DOM removal
   * @param triggerEvent if true (default), triggers removal events
   * @returns the engine instance for chaining
   *
   * @example
   * engine.removeAll(); // Remove all nodes
   */
  removeAll(e = !0, t = !0) {
    if (delete this._layouts, !this.nodes.length)
      return this;
    e && this.nodes.forEach((i) => i._removeDOM = !0);
    const n = this.nodes;
    return this.removedNodes = t ? n : [], this.nodes = [], this._notify(n);
  }
  /**
   * Check if a node can be moved to a new position, considering layout constraints.
   * This is a safer version of moveNode() that validates the move first.
   *
   * For complex cases (like maxRow constraints), it simulates the move in a clone first,
   * then applies the changes only if they meet all specifications.
   *
   * @param node the node to move
   * @param o move options including target position
   * @returns true if the node was successfully moved
   *
   * @example
   * const canMove = engine.moveNodeCheck(node, { x: 2, y: 1 });
   * if (canMove) {
   *   console.log('Node moved successfully');
   * }
   */
  moveNodeCheck(e, t) {
    if (!this.changedPosConstrain(e, t))
      return !1;
    if (t.pack = !0, !this.maxRow)
      return this.moveNode(e, t);
    let n;
    const i = new We({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((a) => a._id === e._id ? (n = { ...a }, n) : { ...a })
    });
    if (!n)
      return !1;
    const s = i.moveNode(n, t) && i.getRow() <= Math.max(this.getRow(), this.maxRow);
    if (!s && !t.resizing && t.collide) {
      const a = t.collide.el.gridstackNode;
      if (this.swap(e, a))
        return this._notify(), !0;
    }
    return s ? (i.nodes.filter((a) => a._dirty).forEach((a) => {
      const o = this.nodes.find((l) => l._id === a._id);
      o && (m.copyPos(o, a), o._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new We({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((i) => ({ ...i }))
    }), n = { ...e };
    return this.cleanupNode(n), delete n.el, delete n._id, delete n.content, delete n.grid, t.addNode(n), t.getRow() <= this.maxRow ? (e._willFitPos = m.copyPos({}, n), !0) : !1;
  }
  /** true if x,y or w,h are different after clamping to min/max */
  changedPosConstrain(e, t) {
    return t.w = t.w || e.w, t.h = t.h || e.h, e.x !== t.x || e.y !== t.y ? !0 : (e.maxW && (t.w = Math.min(t.w, e.maxW)), e.maxH && (t.h = Math.min(t.h, e.maxH)), e.minW && (t.w = Math.max(t.w, e.minW)), e.minH && (t.h = Math.max(t.h, e.minH)), e.w !== t.w || e.h !== t.h);
  }
  /** return true if the passed in node was actually moved (checks for no-op and locked) */
  moveNode(e, t) {
    if (!e || /*node.locked ||*/
    !t)
      return !1;
    let n;
    t.pack === void 0 && !this.batchMode && (n = t.pack = !0), typeof t.x != "number" && (t.x = e.x), typeof t.y != "number" && (t.y = e.y), typeof t.w != "number" && (t.w = e.w), typeof t.h != "number" && (t.h = e.h);
    const i = e.w !== t.w || e.h !== t.h, s = m.copyPos({}, e, !0);
    if (m.copyPos(s, t), this.nodeBoundFix(s, i), m.copyPos(t, s), !t.forceCollide && m.samePos(e, t))
      return !1;
    const a = m.copyPos({}, e), o = this.collideAll(e, s, t.skip);
    let l = !0;
    if (o.length) {
      const d = e._moving && !t.nested;
      let c = d ? this.directionCollideCoverage(e, t, o) : o[0];
      if (d && c && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = m.areaIntercept(t.rect, c._rect), f = m.area(t.rect), p = m.area(c._rect);
        u / (f < p ? f : p) > 0.8 && (c.grid.makeSubGrid(c.el, void 0, e), c = void 0);
      }
      c ? l = !this._fixCollisions(e, s, c, t) : (l = !1, n && delete t.pack);
    }
    return l && !m.samePos(e, s) && (e._dirty = !0, m.copyPos(e, s)), t.pack && this._packNodes()._notify(), !m.samePos(e, a);
  }
  getRow() {
    return this.nodes.reduce((e, t) => Math.max(e, t.y + t.h), 0);
  }
  beginUpdate(e) {
    return e._updating || (e._updating = !0, delete e._skipDown, this.batchMode || this.saveInitial()), this;
  }
  endUpdate() {
    const e = this.nodes.find((t) => t._updating);
    return e && (delete e._updating, delete e._skipDown), this;
  }
  /** saves a copy of the largest column layout (eg 12 even when rendering 1 column) so we don't loose orig layout, unless explicity column
   * count to use is given. returning a list of widgets for serialization
   * @param saveElement if true (default), the element will be saved to GridStackWidget.el field, else it will be removed.
   * @param saveCB callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.
   * @param column if provided, the grid will be saved for the given column count (IFF we have matching internal saved layout, or current layout).
   * Note: nested grids will ALWAYS save the container w to match overall layouts (parent + child) to be consistent.
  */
  save(e = !0, t, n) {
    const i = this._layouts?.length || 0;
    let s;
    i && (n ? n !== this.column && (s = this._layouts[n]) : this.column !== i - 1 && (s = this._layouts[i - 1]));
    const a = [];
    return this.sortNodes(), this.nodes.forEach((o) => {
      const l = s?.find((c) => c._id === o._id), d = { ...o, ...l || {} };
      m.removeInternalForSave(d, !e), t && t(o, d), a.push(d);
    }), a;
  }
  /** @internal called whenever a node is added or moved - updates the cached layouts */
  layoutsNodesChange(e) {
    return !this._layouts || this._inColumnResize ? this : (this._layouts.forEach((t, n) => {
      if (!t || n === this.column)
        return this;
      if (n < this.column)
        this._layouts[n] = void 0;
      else {
        const i = n / this.column;
        e.forEach((s) => {
          if (!s._orig)
            return;
          const a = t.find((o) => o._id === s._id);
          a && (a.y >= 0 && s.y !== s._orig.y && (a.y += s.y - s._orig.y), s.x !== s._orig.x && (a.x = Math.round(s.x * i)), s.w !== s._orig.w && (a.w = Math.round(s.w * i)));
        });
      }
    }), this);
  }
  /**
   * @internal Called to scale the widget width & position up/down based on the column change.
   * Note we store previous layouts (especially original ones) to make it possible to go
   * from say 12 -> 1 -> 12 and get back to where we were.
   *
   * @param prevColumn previous number of columns
   * @param column  new column number
   * @param layout specify the type of re-layout that will happen (position, size, etc...).
   * Note: items will never be outside of the current column boundaries. default (moveScale). Ignored for 1 column
   */
  columnChanged(e, t, n = "moveScale") {
    if (!this.nodes.length || !t || e === t)
      return this;
    const i = n === "compact" || n === "list";
    i && this.sortNodes(1), t < e && this.cacheLayout(this.nodes, e), this.batchUpdate();
    let s = [], a = i ? this.nodes : m.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const o = this._layouts[t] || [], l = this._layouts.length - 1;
      !o.length && e !== l && this._layouts[l]?.length && (e = l, this._layouts[l].forEach((d) => {
        const c = a.find((u) => u._id === d._id);
        c && (!i && !d.autoPosition && (c.x = d.x ?? c.x, c.y = d.y ?? c.y), c.w = d.w ?? c.w, (d.x == null || d.y === void 0) && (c.autoPosition = !0));
      })), o.forEach((d) => {
        const c = a.findIndex((u) => u._id === d._id);
        if (c !== -1) {
          const u = a[c];
          if (i) {
            u.w = d.w;
            return;
          }
          (d.autoPosition || isNaN(d.x) || isNaN(d.y)) && this.findEmptyPosition(d, s), d.autoPosition || (u.x = d.x ?? u.x, u.y = d.y ?? u.y, u.w = d.w ?? u.w, s.push(u)), a.splice(c, 1);
        }
      });
    }
    if (i)
      this.compact(n, !1);
    else {
      if (a.length)
        if (typeof n == "function")
          n(t, e, s, a);
        else {
          const o = i || n === "none" ? 1 : t / e, l = n === "move" || n === "moveScale", d = n === "scale" || n === "moveScale";
          a.forEach((c) => {
            c.x = t === 1 ? 0 : l ? Math.round(c.x * o) : Math.min(c.x, t - 1), c.w = t === 1 || e === 1 ? 1 : d ? Math.round(c.w * o) || 1 : Math.min(c.w, t), s.push(c);
          }), a = [];
        }
      s = m.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((o) => {
        this.addNode(o, !1), delete o._orig;
      });
    }
    return this.nodes.forEach((o) => delete o._orig), this.batchUpdate(!1, !i), delete this._inColumnResize, this;
  }
  /**
   * call to cache the given layout internally to the given location so we can restore back when column changes size
   * @param nodes list of nodes
   * @param column corresponding column index to save it under
   * @param clear if true, will force other caches to be removed (default false)
   */
  cacheLayout(e, t, n = !1) {
    const i = [];
    return e.forEach((s, a) => {
      if (s._id === void 0) {
        const o = s.id ? this.nodes.find((l) => l.id === s.id) : void 0;
        s._id = o?._id ?? We._idSeq++;
      }
      i[a] = { x: s.x, y: s.y, w: s.w, _id: s._id };
    }), this._layouts = n ? [] : this._layouts || [], this._layouts[t] = i, this;
  }
  /**
   * call to cache the given node layout internally to the given location so we can restore back when column changes size
   * @param node single node to cache
   * @param column corresponding column index to save it under
   */
  cacheOneLayout(e, t) {
    e._id = e._id ?? We._idSeq++;
    const n = { x: e.x, y: e.y, w: e.w, _id: e._id };
    (e.autoPosition || e.x === void 0) && (delete n.x, delete n.y, e.autoPosition && (n.autoPosition = !0)), this._layouts = this._layouts || [], this._layouts[t] = this._layouts[t] || [];
    const i = this.findCacheLayout(e, t);
    return i === -1 ? this._layouts[t].push(n) : this._layouts[t][i] = n, this;
  }
  findCacheLayout(e, t) {
    return this._layouts?.[t]?.findIndex((n) => n._id === e._id) ?? -1;
  }
  removeNodeFromLayoutCache(e) {
    if (this._layouts)
      for (let t = 0; t < this._layouts.length; t++) {
        const n = this.findCacheLayout(e, t);
        n !== -1 && this._layouts[t].splice(n, 1);
      }
  }
  /** called to remove all internal values but the _id */
  cleanupNode(e) {
    for (const t in e)
      t[0] === "_" && t !== "_id" && delete e[t];
    return this;
  }
}
We._idSeq = 0;
const me = {
  alwaysShowResizeHandle: "mobile",
  animate: !0,
  auto: !0,
  cellHeight: "auto",
  cellHeightThrottle: 100,
  cellHeightUnit: "px",
  column: 12,
  draggable: { handle: ".grid-stack-item-content", appendTo: "body", scroll: !0 },
  handle: ".grid-stack-item-content",
  itemClass: "grid-stack-item",
  margin: 10,
  marginUnit: "px",
  maxRow: 0,
  minRow: 0,
  placeholderClass: "grid-stack-placeholder",
  placeholderText: "",
  removableOptions: { accept: "grid-stack-item", decline: "grid-stack-non-removable" },
  resizable: { handles: "se" },
  rtl: "auto"
  // **** same as not being set ****
  // disableDrag: false,
  // disableResize: false,
  // float: false,
  // handleClass: null,
  // removable: false,
  // staticGrid: false,
  //removable
};
class F {
}
const Se = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class Ie {
}
function vr(r, e) {
  r.touches.length > 1 || (r.cancelable && r.preventDefault(), m.simulateMouseEvent(r.changedTouches[0], e));
}
function gs(r, e) {
  r.cancelable && r.preventDefault(), m.simulateMouseEvent(r, e);
}
function yr(r) {
  Ie.touchHandled || (Ie.touchHandled = !0, vr(r, "mousedown"));
}
function br(r) {
  Ie.touchHandled && vr(r, "mousemove");
}
function xr(r) {
  if (!Ie.touchHandled)
    return;
  Ie.pointerLeaveTimeout && (window.clearTimeout(Ie.pointerLeaveTimeout), delete Ie.pointerLeaveTimeout);
  const e = !!F.dragElement;
  vr(r, "mouseup"), e || vr(r, "click"), Ie.touchHandled = !1;
}
function _r(r) {
  r.pointerType !== "mouse" && r.target.releasePointerCapture(r.pointerId);
}
function ii(r) {
  F.dragElement && r.pointerType !== "mouse" && gs(r, "mouseenter");
}
function si(r) {
  F.dragElement && r.pointerType !== "mouse" && (Ie.pointerLeaveTimeout = window.setTimeout(() => {
    delete Ie.pointerLeaveTimeout, gs(r, "mouseleave");
  }, 10));
}
class Pr {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Pr.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), Se && (this.el.addEventListener("touchstart", yr), this.el.addEventListener("pointerdown", _r)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), Se && (this.el.removeEventListener("touchstart", yr), this.el.removeEventListener("pointerdown", _r)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Se && (this.el.addEventListener("touchmove", br), this.el.addEventListener("touchend", xr)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Se && (this.el.removeEventListener("touchmove", br), this.el.removeEventListener("touchend", xr)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel */
  _keyEvent(e) {
    e.key === "Escape" && (this.host.gridstackNode?.grid?.engine.restoreInitial(), this._mouseUp(this.mouseDownEvent));
  }
  /** @internal */
  _triggerEvent(e, t) {
    return this.option[e] && this.option[e](t), this;
  }
}
Pr.prefix = "ui-resizable-";
class wn {
  constructor() {
    this._eventRegister = {};
  }
  /**
   * Returns the current disabled state.
   * Note: Use enable()/disable() methods to change state as other operations need to happen.
   */
  get disabled() {
    return this._disabled;
  }
  /**
   * Register an event callback for the specified event.
   *
   * @param event - Event name to listen for
   * @param callback - Function to call when event occurs
   */
  on(e, t) {
    this._eventRegister[e] = t;
  }
  /**
   * Unregister an event callback for the specified event.
   *
   * @param event - Event name to stop listening for
   */
  off(e) {
    delete this._eventRegister[e];
  }
  /**
   * Enable this drag & drop implementation.
   * Subclasses should override to perform additional setup.
   */
  enable() {
    this._disabled = !1;
  }
  /**
   * Disable this drag & drop implementation.
   * Subclasses should override to perform additional cleanup.
   */
  disable() {
    this._disabled = !0;
  }
  /**
   * Destroy this drag & drop implementation and clean up resources.
   * Removes all event handlers and clears internal state.
   */
  destroy() {
    delete this._eventRegister;
  }
  /**
   * Trigger a registered event callback if one exists and the implementation is enabled.
   *
   * @param eventName - Name of the event to trigger
   * @param event - DOM event object to pass to the callback
   * @returns Result from the callback function, if any
   */
  triggerEvent(e, t) {
    if (!this.disabled && this._eventRegister && this._eventRegister[e])
      return this._eventRegister[e](t);
  }
}
class Vt extends wn {
  // have to be public else complains for HTMLElementExtendOpt ?
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.rectScale = { x: 1, y: 1 }, this._ui = () => {
      const i = this.el.parentElement.getBoundingClientRect(), s = {
        width: this.originalRect.width,
        height: this.originalRect.height + this.scrolled,
        left: this.originalRect.left,
        top: this.originalRect.top - this.scrolled
      }, a = this.temporalRect || s;
      return {
        position: {
          left: (a.left - i.left) * this.rectScale.x,
          top: (a.top - i.top) * this.rectScale.y
        },
        size: {
          width: a.width * this.rectScale.x,
          height: a.height * this.rectScale.y
        }
        /* Gridstack ONLY needs position set above... keep around in case.
        element: [this.el], // The object representing the element to be resized
        helper: [], // TODO: not support yet - The object representing the helper that's being resized
        originalElement: [this.el],// we don't wrap here, so simplify as this.el //The object representing the original element before it is wrapped
        originalPosition: { // The position represented as { left, top } before the resizable is resized
          left: this.originalRect.left - containmentRect.left,
          top: this.originalRect.top - containmentRect.top
        },
        originalSize: { // The size represented as { width, height } before the resizable is resized
          width: this.originalRect.width,
          height: this.originalRect.height
        }
        */
      };
    }, this._mouseOver = this._mouseOver.bind(this), this._mouseOut = this._mouseOut.bind(this), this.enable(), this._setupAutoHide(this.option.autoHide), this._setupHandlers();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    super.enable(), this.el.classList.remove("ui-resizable-disabled"), this._setupAutoHide(this.option.autoHide);
  }
  disable() {
    super.disable(), this.el.classList.add("ui-resizable-disabled"), this._setupAutoHide(!1);
  }
  destroy() {
    this._removeHandlers(), this._setupAutoHide(!1), delete this.el, super.destroy();
  }
  updateOption(e) {
    const t = e.handles && e.handles !== this.option.handles, n = e.autoHide && e.autoHide !== this.option.autoHide;
    return Object.keys(e).forEach((i) => this.option[i] = e[i]), t && (this._removeHandlers(), this._setupHandlers()), n && this._setupAutoHide(this.option.autoHide), this;
  }
  /** @internal turns auto hide on/off */
  _setupAutoHide(e) {
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), F.overResizeElement === this && delete F.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    F.overResizeElement || F.dragElement || (F.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    F.overResizeElement === this && (delete F.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Pr(this.el, e, {
      start: (t) => {
        this._resizeStart(t);
      },
      stop: (t) => {
        this._resizeStop(t);
      },
      move: (t) => {
        this._resizing(t, e);
      }
    })), this;
  }
  /** @internal */
  _resizeStart(e) {
    this.sizeToContent = m.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = m.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = m.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const n = m.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(n, this._ui()), this.triggerEvent("resize", n), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = m.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = Vt._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = m.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Vt._originStyleProp.forEach((e, t) => {
      this.el.style[e] = this.elOriginStyleVal[t] || null;
    }), this.el.parentElement.style.position = this.parentOriginStylePosition || null, this;
  }
  /** @internal */
  _getChange(e, t) {
    const n = this.startEvent, i = {
      width: this.originalRect.width,
      height: this.originalRect.height + this.scrolled,
      left: this.originalRect.left,
      top: this.originalRect.top - this.scrolled
    }, s = e.clientX - n.clientX, a = this.sizeToContent ? 0 : e.clientY - n.clientY;
    let o, l;
    t.indexOf("e") > -1 ? i.width += s : t.indexOf("w") > -1 && (i.width -= s, i.left += s, o = !0), t.indexOf("s") > -1 ? i.height += a : t.indexOf("n") > -1 && (i.height -= a, i.top += a, l = !0);
    const d = this._constrainSize(i.width, i.height, o, l);
    return Math.round(i.width) !== Math.round(d.width) && (t.indexOf("w") > -1 && (i.left += i.width - d.width), i.width = d.width), Math.round(i.height) !== Math.round(d.height) && (t.indexOf("n") > -1 && (i.top += i.height - d.height), i.height = d.height), i;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, n, i) {
    const s = this.option, a = (n ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, o = s.minWidth / this.rectScale.x || e, l = (i ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, d = s.minHeight / this.rectScale.y || t, c = Math.min(a, Math.max(o, e)), u = Math.min(l, Math.max(d, t));
    return { width: c, height: u };
  }
  /** @internal */
  _applyChange() {
    let e = { left: 0, top: 0, width: 0, height: 0 };
    if (this.el.style.position === "absolute") {
      const t = this.el.parentElement, { left: n, top: i } = t.getBoundingClientRect();
      e = { left: n, top: i, width: 0, height: 0 };
    }
    return this.temporalRect ? (Object.keys(this.temporalRect).forEach((t) => {
      const n = this.temporalRect[t], i = t === "width" || t === "left" ? this.rectScale.x : t === "height" || t === "top" ? this.rectScale.y : 1;
      this.el.style[t] = (n - e[t]) * i + "px";
    }), this) : this;
  }
  /** @internal */
  _removeHandlers() {
    return this.handlers.forEach((e) => e.destroy()), delete this.handlers, this;
  }
}
Vt._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const kl = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class Zt extends wn {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.dragTransform = {
      xScale: 1,
      yScale: 1,
      xOffset: 0,
      yOffset: 0
    };
    const n = t?.handle?.substring(1), i = e.gridstackNode;
    this.dragEls = !n || e.classList.contains(n) ? [e] : i?.subGrid ? [e.querySelector(t.handle) || e] : Array.from(e.querySelectorAll(t.handle)), this.dragEls.length === 0 && (this.dragEls = [e]), this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this.enable();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.dragEls.forEach((e) => {
      e.addEventListener("mousedown", this._mouseDown), Se && (e.addEventListener("touchstart", yr), e.addEventListener("pointerdown", _r));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), Se && (t.removeEventListener("touchstart", yr), t.removeEventListener("pointerdown", _r));
    }), e || this.el.classList.add("ui-draggable-disabled"));
  }
  destroy() {
    this.dragTimeout && window.clearTimeout(this.dragTimeout), delete this.dragTimeout, this.mouseDownEvent && this._mouseUp(this.mouseDownEvent), this.disable(!0), delete this.el, delete this.helper, delete this.option, super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this;
  }
  /** @internal call when mouse goes down before a dragstart happens */
  _mouseDown(e) {
    if (!F.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(kl) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete F.dragElement, delete F.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Se && (e.currentTarget.addEventListener("touchmove", br), e.currentTarget.addEventListener("touchend", xr)), e.preventDefault(), document.activeElement && document.activeElement.blur(), F.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = m.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), F.pauseDrag) {
        const n = Number.isInteger(F.pauseDrag) ? F.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), n);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, F.dragElement = this;
      const n = this.el.gridstackNode?.grid;
      n ? F.dropElement = n.el.ddElement.ddDroppable : delete F.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = m.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = m.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Se && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", br, !0), e.currentTarget.removeEventListener("touchend", xr, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), F.dropElement?.el === this.el.parentElement && delete F.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = m.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), F.dropElement && F.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete F.dragElement, delete F.dropElement, delete F.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, n = t?.grid || F.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), n?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && n && (e.key === "r" || e.key === "R")) {
      if (!m.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, n.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", m.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = m.cloneNode(this.el)), e.parentElement || m.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = Zt.originStyleProp.map((t) => this.el.style[t]), e;
  }
  /** @internal set the fix position of the dragged item */
  _setupHelperStyle(e) {
    this.helper.classList.add("ui-draggable-dragging"), this.el.gridstackNode?.grid?.el.classList.add("grid-stack-dragging");
    const t = this.helper.style;
    return t.pointerEvents = "none", t.width = this.dragOffset.width + "px", t.height = this.dragOffset.height + "px", t.willChange = "left, top", t.position = "fixed", this._dragFollow(e), t.transition = "none", setTimeout(() => {
      this.helper && (t.transition = null);
    }, 0), this;
  }
  /** @internal restore back the original style before dragging */
  _removeHelperStyle() {
    if (this.helper.classList.remove("ui-draggable-dragging"), this.el.gridstackNode?.grid?.el.classList.remove("grid-stack-dragging"), !this.helper?.gridstackNode?._isAboutToRemove && this.dragElementOriginStyle) {
      const t = this.helper, n = this.dragElementOriginStyle.transition || null;
      t.style.transition = this.dragElementOriginStyle.transition = "none", Zt.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = n, 50);
    }
    return delete this.dragElementOriginStyle, this;
  }
  /** @internal updates the top/left position to follow the mouse */
  _dragFollow(e) {
    const t = { left: 0, top: 0 }, n = this.helper.style, i = this.dragOffset;
    n.left = (e.clientX + i.offsetLeft - t.left) * this.dragTransform.xScale + "px", n.top = (e.clientY + i.offsetTop - t.top) * this.dragTransform.yScale + "px";
  }
  /** @internal */
  _setupHelperContainmentStyle() {
    return this.helperContainment = this.helper.parentElement, this.helper.style.position !== "fixed" && (this.parentOriginStylePosition = this.helperContainment.style.position, getComputedStyle(this.helperContainment).position.match(/static/) && (this.helperContainment.style.position = "relative")), this;
  }
  /** @internal */
  _getDragOffset(e, t, n) {
    let i = 0, s = 0;
    n && (i = this.dragTransform.xOffset, s = this.dragTransform.yOffset);
    const a = t.getBoundingClientRect();
    return {
      left: a.left,
      top: a.top,
      offsetLeft: -e.clientX + a.left - i,
      offsetTop: -e.clientY + a.top - s,
      width: a.width * this.dragTransform.xScale,
      height: a.height * this.dragTransform.yScale
    };
  }
  /** @internal TODO: set to public as called by DDDroppable! */
  ui() {
    const t = this.el.parentElement.getBoundingClientRect(), n = this.helper.getBoundingClientRect();
    return {
      position: {
        top: (n.top - t.top) * this.dragTransform.yScale,
        left: (n.left - t.left) * this.dragTransform.xScale
      }
      /* not used by GridStack for now...
      helper: [this.helper], //The object arr representing the helper that's being dragged.
      offset: { top: offset.top, left: offset.left } // Current offset position of the helper as { top, left } object.
      */
    };
  }
}
Zt.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Sl extends wn {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this._mouseEnter = this._mouseEnter.bind(this), this._mouseLeave = this._mouseLeave.bind(this), this.enable(), this._setupAccept();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), Se && (this.el.addEventListener("pointerenter", ii), this.el.addEventListener("pointerleave", si)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), Se && (this.el.removeEventListener("pointerenter", ii), this.el.removeEventListener("pointerleave", si)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!F.dragElement || !this._canDrop(F.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), F.dropElement && F.dropElement !== this && F.dropElement._mouseLeave(e, !0), F.dropElement = this;
    const t = m.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(F.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!F.dragElement || F.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = m.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(n, this._ui(F.dragElement)), this.triggerEvent("dropout", n), F.dropElement === this && (delete F.dropElement, !t)) {
      let i, s = this.el.parentElement;
      for (; !i && s; )
        i = s.ddElement?.ddDroppable, s = s.parentElement;
      i && i._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = m.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(F.dragElement)), this.triggerEvent("drop", t);
  }
  /** @internal true if element matches the string/method accept option */
  _canDrop(e) {
    return e && (!this.accept || this.accept(e));
  }
  /** @internal */
  _setupAccept() {
    return this.option.accept ? (typeof this.option.accept == "string" ? this.accept = (e) => e.classList.contains(this.option.accept) || e.matches(this.option.accept) : this.accept = this.option.accept, this) : this;
  }
  /** @internal */
  _ui(e) {
    return {
      draggable: e.el,
      ...e.ui()
    };
  }
}
class Cn {
  static init(e) {
    return e.ddElement || (e.ddElement = new Cn(e)), e.ddElement;
  }
  constructor(e) {
    this.el = e;
  }
  on(e, t) {
    return this.ddDraggable && ["drag", "dragstart", "dragstop"].indexOf(e) > -1 ? this.ddDraggable.on(e, t) : this.ddDroppable && ["drop", "dropover", "dropout"].indexOf(e) > -1 ? this.ddDroppable.on(e, t) : this.ddResizable && ["resizestart", "resize", "resizestop"].indexOf(e) > -1 && this.ddResizable.on(e, t), this;
  }
  off(e) {
    return this.ddDraggable && ["drag", "dragstart", "dragstop"].indexOf(e) > -1 ? this.ddDraggable.off(e) : this.ddDroppable && ["drop", "dropover", "dropout"].indexOf(e) > -1 ? this.ddDroppable.off(e) : this.ddResizable && ["resizestart", "resize", "resizestop"].indexOf(e) > -1 && this.ddResizable.off(e), this;
  }
  setupDraggable(e) {
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new Zt(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Vt(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Sl(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Nl {
  /**
   * Enable/disable/configure resizing for grid elements.
   *
   * @param el - Grid item element(s) to configure
   * @param opts - Resize options or command ('enable', 'disable', 'destroy', 'option', or config object)
   * @param key - Option key when using 'option' command
   * @param value - Option value when using 'option' command
   * @returns this instance for chaining
   *
   * @example
   * dd.resizable(element, 'enable');  // Enable resizing
   * dd.resizable(element, 'option', 'minWidth', 100);  // Set minimum width
   */
  resizable(e, t, n, i) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddResizable && s.ddResizable[t]();
      else if (t === "destroy")
        s.ddResizable && s.cleanResizable();
      else if (t === "option")
        s.setupResizable({ [n]: i });
      else {
        const o = s.el.gridstackNode.grid;
        let l = s.el.getAttribute("gs-resize-handles") || o.opts.resizable.handles || "e,s,se";
        l === "all" && (l = "n,e,s,w,se,sw,ne,nw");
        const d = !o.opts.alwaysShowResizeHandle;
        s.setupResizable({
          ...o.opts.resizable,
          handles: l,
          autoHide: d,
          start: t.start,
          stop: t.stop,
          resize: t.resize
        });
      }
    }), this;
  }
  /**
   * Enable/disable/configure dragging for grid elements.
   *
   * @param el - Grid item element(s) to configure
   * @param opts - Drag options or command ('enable', 'disable', 'destroy', 'option', or config object)
   * @param key - Option key when using 'option' command
   * @param value - Option value when using 'option' command
   * @returns this instance for chaining
   *
   * @example
   * dd.draggable(element, 'enable');  // Enable dragging
   * dd.draggable(element, {handle: '.drag-handle'});  // Configure drag handle
   */
  draggable(e, t, n, i) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddDraggable && s.ddDraggable[t]();
      else if (t === "destroy")
        s.ddDraggable && s.cleanDraggable();
      else if (t === "option")
        s.setupDraggable({ [n]: i });
      else {
        const a = s.el.gridstackNode.grid;
        s.setupDraggable({
          ...a.opts.draggable,
          // containment: (grid.parentGridNode && grid.opts.dragOut === false) ? grid.el.parentElement : (grid.opts.draggable.containment || null),
          start: t.start,
          stop: t.stop,
          drag: t.drag
        });
      }
    }), this;
  }
  dragIn(e, t) {
    return this._getDDElements(e).forEach((n) => n.setupDraggable(t)), this;
  }
  droppable(e, t, n, i) {
    return typeof t.accept == "function" && !t._accept && (t._accept = t.accept, t.accept = (s) => t._accept(s)), this._getDDElements(e, t).forEach((s) => {
      t === "disable" || t === "enable" ? s.ddDroppable && s.ddDroppable[t]() : t === "destroy" ? s.ddDroppable && s.cleanDroppable() : t === "option" ? s.setupDroppable({ [n]: i }) : s.setupDroppable(t);
    }), this;
  }
  /** true if element is droppable */
  isDroppable(e) {
    return !!(e?.ddElement?.ddDroppable && !e.ddElement.ddDroppable.disabled);
  }
  /** true if element is draggable */
  isDraggable(e) {
    return !!(e?.ddElement?.ddDraggable && !e.ddElement.ddDraggable.disabled);
  }
  /** true if element is draggable */
  isResizable(e) {
    return !!(e?.ddElement?.ddResizable && !e.ddElement.ddResizable.disabled);
  }
  on(e, t, n) {
    return this._getDDElements(e).forEach((i) => i.on(t, (s) => {
      n(s, F.dragElement ? F.dragElement.el : s.target, F.dragElement ? F.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", i = m.getElements(e);
    return i.length ? i.map((a) => a.ddElement || (n ? Cn.init(a) : null)).filter((a) => a) : [];
  }
}
const oe = new Nl();
class M {
  /**
   * initializing the HTML element, or selector string, into a grid will return the grid. Calling it again will
   * simply return the existing instance (ignore any passed options). There is also an initAll() version that support
   * multiple grids initialization at once. Or you can use addGrid() to create the entire grid from JSON.
   * @param options grid options (optional)
   * @param elOrString element or CSS selector (first one used) to convert to a grid (default to '.grid-stack' class selector)
   *
   * @example
   * const grid = GridStack.init();
   *
   * Note: the HTMLElement (of type GridHTMLElement) will store a `gridstack: GridStack` value that can be retrieve later
   * const grid = document.querySelector('.grid-stack').gridstack;
   */
  static init(e = {}, t = ".grid-stack") {
    if (typeof document > "u")
      return null;
    const n = M.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new M(n, m.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
Note: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.` : "GridStack.init() no grid element was passed."), null);
  }
  /**
   * Will initialize a list of elements (given a selector) and return an array of grids.
   * @param options grid options (optional)
   * @param selector elements selector to convert to grids (default to '.grid-stack' class selector)
   *
   * @example
   * const grids = GridStack.initAll();
   * grids.forEach(...)
   */
  static initAll(e = {}, t = ".grid-stack") {
    const n = [];
    return typeof document > "u" || (M.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new M(i, m.cloneDeep(e))), n.push(i.gridstack);
    }), n.length === 0 && console.error('GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
Note: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.`)), n;
  }
  /**
   * call to create a grid with the given options, including loading any children from JSON structure. This will call GridStack.init(), then
   * grid.load() on any passed children (recursively). Great alternative to calling init() if you want entire grid to come from
   * JSON serialized data, including options.
   * @param parent HTML element parent to the grid
   * @param opt grids options used to initialize the grid, and list of children
   */
  static addGrid(e, t = {}) {
    if (!e)
      return null;
    let n = e;
    if (n.gridstack) {
      const a = n.gridstack;
      return t && (a.opts = { ...a.opts, ...t }), t.children !== void 0 && a.load(t.children), a;
    }
    return (!e.classList.contains("grid-stack") || M.addRemoveCB) && (M.addRemoveCB ? n = M.addRemoveCB(e, t, !0, !0) : n = m.createDiv(["grid-stack", t.class], e)), M.init(t, n);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    M.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = m.createDiv([this.opts.placeholderClass, me.itemClass, this.opts.itemClass]);
      const e = m.createDiv(["placeholder-content"], this._placeholder);
      this.opts.placeholderText && (e.textContent = this.opts.placeholderText);
    }
    return this._placeholder;
  }
  /**
   * Construct a grid item from the given element and options
   * @param el the HTML element tied to this grid after it's been initialized
   * @param opts grid options - public for classes to access, but use methods to modify!
   */
  constructor(e, t = {}) {
    this.el = e, this.opts = t, this.animationDelay = 310, this._gsEventHandler = {}, this._extraDragRow = 0, this.dragTransform = { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 }, e.gridstack = this, this.opts = t = t || {}, e.classList.contains("grid-stack") || this.el.classList.add("grid-stack"), t.row && (t.minRow = t.maxRow = t.row, delete t.row);
    const n = m.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const i = t.columnOpts;
    if (i) {
      const d = i.breakpoints;
      !i.columnWidth && !d?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, d?.length > 1 && d.sort((c, u) => (u.w || 0) - (c.w || 0)));
    }
    const s = {
      ...m.cloneDeep(me),
      column: m.toNumber(e.getAttribute("gs-column")) || me.column,
      minRow: n || m.toNumber(e.getAttribute("gs-min-row")) || me.minRow,
      maxRow: n || m.toNumber(e.getAttribute("gs-max-row")) || me.maxRow,
      staticGrid: m.toBool(e.getAttribute("gs-static")) || me.staticGrid,
      sizeToContent: m.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || me.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || me.removableOptions.accept,
        decline: me.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = m.toBool(e.getAttribute("gs-animate"))), t = m.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + me.itemClass)?.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== me.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const d = t.cellHeight;
      delete t.cellHeight, this.cellHeight(d);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = Se), this._setStaticClass();
    const l = t.engineClass || M.engineClass || We;
    if (this.engine = new l({
      column: this.getColumn(),
      float: t.float,
      maxRow: t.maxRow,
      onChange: (d) => {
        d.forEach((c) => {
          const u = c.el;
          u && (c._removeDOM ? (u && u.remove(), delete c._removeDOM) : this._writePosAttr(u, c));
        }), this._updateContainerHeight();
      }
    }), t.auto && (this.batchUpdate(), this.engine._loading = !0, this.getGridItems().forEach((d) => this._prepareElement(d)), delete this.engine._loading, this.batchUpdate(!1)), t.children) {
      const d = t.children;
      delete t.children, d.length && this.load(d);
    }
    this.setAnimation(), t.subGridDynamic && !F.pauseDrag && (F.pauseDrag = !0), t.draggable?.pause !== void 0 && (F.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
  }
  _updateColumnVar(e = this.opts) {
    this.el.classList.add("gs-" + e.column), typeof e.column == "number" && this.el.style.setProperty("--gs-column-width", `${100 / e.column}%`);
  }
  /**
   * add a new widget and returns it.
   *
   * Widget will be always placed even if result height is more than actual grid height.
   * You need to use `willItFit()` before calling addWidget for additional check.
   * See also `makeWidget(el)` for DOM element.
   *
   * @example
   * const grid = GridStack.init();
   * grid.addWidget({w: 3, content: 'hello'});
   *
   * @param w GridStackWidget definition. used MakeWidget(el) if you have dom element instead.
   */
  addWidget(e) {
    if (!e)
      return;
    if (typeof e == "string") {
      console.error("V11: GridStack.addWidget() does not support string anymore. see #2736");
      return;
    }
    if (e.ELEMENT_NODE)
      return console.error("V11: GridStack.addWidget() does not support HTMLElement anymore. use makeWidget()"), this.makeWidget(e);
    let t, n = e;
    if (n.grid = this, n.el ? t = n.el : M.addRemoveCB ? t = M.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
      return;
    if (n = t.gridstackNode, n && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === n._id))
      return t;
    const i = this._readAttr(t);
    return m.defaults(e, i), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
  }
  /**
   * Create the default grid item divs and content (possibly lazy loaded) by using GridStack.renderCB().
   *
   * @param n GridStackNode definition containing widget configuration
   * @returns the created HTML element with proper grid item structure
   *
   * @example
   * const element = grid.createWidgetDivs({ w: 2, h: 1, content: 'Hello World' });
   */
  createWidgetDivs(e) {
    const t = m.createDiv(["grid-stack-item", this.opts.itemClass]), n = m.createDiv(["grid-stack-item-content"], t);
    return m.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([i]) => {
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, M.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : M.renderCB(n, e), t;
  }
  /**
   * Convert an existing gridItem element into a sub-grid with the given (optional) options, else inherit them
   * from the parent's subGrid options.
   * @param el gridItem element to convert
   * @param ops (optional) sub-grid options, else default to node, then parent settings, else defaults
   * @param nodeToAdd (optional) node to add to the newly created sub grid (used when dragging over existing regular item)
   * @param saveContent if true (default) the html inside .grid-stack-content will be saved to child widget
   * @returns newly created grid
   */
  makeSubGrid(e, t, n, i = !0) {
    let s = e.gridstackNode;
    if (s || (s = this.makeWidget(e).gridstackNode), s.subGrid?.el)
      return s.subGrid;
    let a, o = this;
    for (; o && !a; )
      a = o.opts?.subGridOpts, o = o.parentGridNode?.grid;
    t = m.cloneDeep({
      // by default sub-grid inherit from us | parent, other than id, children, etc...
      ...this.opts,
      id: void 0,
      children: void 0,
      column: "auto",
      columnOpts: void 0,
      layout: "list",
      subGridOpts: void 0,
      ...a || {},
      ...t || s.subGridOpts || {}
    }), s.subGridOpts = t;
    let l;
    t.column === "auto" && (l = !0, t.column = Math.max(s.w || 1, n?.w || 1), delete t.columnOpts);
    let d = s.el.querySelector(".grid-stack-item-content"), c, u;
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, m.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), M.addRemoveCB ? c = M.addRemoveCB(this.el, u, !0, !1) : (c = m.createDiv(["grid-stack-item"]), c.appendChild(d), d = m.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const p = l ? t.column : s.w, C = s.h + n.h, v = s.el.style;
      v.transition = "none", this.update(s.el, { w: p, h: C }), setTimeout(() => v.transition = null);
    }
    const f = s.subGrid = M.addGrid(d, t);
    return n?._moving && (f._isTemp = !0), l && (f._autoColumn = !0), i && f.makeWidget(c, u), n && (n._moving ? window.setTimeout(() => m.simulateMouseEvent(n._event, "mouseenter", f.el), 0) : f.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), f;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((n) => {
      n.x += this.parentGridNode.x, n.y += this.parentGridNode.y, t.makeWidget(n.el, n);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => m.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
  }
  /**
   * saves the current layout returning a list of widgets for serialization which might include any nested grids.
   * @param saveContent if true (default) the latest html inside .grid-stack-content will be saved to GridStackWidget.content field, else it will
   * be removed.
   * @param saveGridOpt if true (default false), save the grid options itself, so you can call the new GridStack.addGrid()
   * to recreate everything from scratch. GridStackOptions.children would then contain the widget list instead.
   * @param saveCB callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.
   * @param column if provided, the grid will be saved for the given column size (IFF we have matching internal saved layout, or current layout).
   * Otherwise it will use the largest possible layout (say 12 even if rendering at 1 column) so we can restore to all layouts.
   * NOTE: if you want to save to currently display layout, pass this.getColumn() as column.
   * NOTE2: nested grids will ALWAYS save to the container size to be in sync with parent.
   * @returns list of widgets or full grid option, including .children list of widgets
   */
  save(e = !0, t = !1, n = M.saveCB, i) {
    const s = this.engine.save(e, n, i);
    if (s.forEach((a) => {
      if (e && a.el && !a.subGrid && !n) {
        const o = a.el.querySelector(".grid-stack-item-content");
        a.content = o?.innerHTML, a.content || delete a.content;
      } else if (!e && !n && delete a.content, a.subGrid?.el) {
        const o = a.w || a.subGrid.getColumn(), l = a.subGrid.save(e, t, n, o);
        a.subGridOpts = t ? l : { children: l }, delete a.subGrid;
      }
      delete a.el;
    }), t) {
      const a = m.cloneDeep(this.opts);
      a.marginBottom === a.marginTop && a.marginRight === a.marginLeft && a.marginTop === a.marginRight && (a.margin = a.marginTop, delete a.marginTop, delete a.marginRight, delete a.marginBottom, delete a.marginLeft), a.rtl === (this.el.style.direction === "rtl") && (a.rtl = "auto"), this._isAutoCellHeight && (a.cellHeight = "auto"), this._autoColumn && (a.column = "auto");
      const o = a._alwaysShowResizeHandle;
      return delete a._alwaysShowResizeHandle, o !== void 0 ? a.alwaysShowResizeHandle = o : delete a.alwaysShowResizeHandle, m.removeInternalAndSame(a, me), a.children = s, a;
    }
    return s;
  }
  /**
   * Load widgets from a list. This will call update() on each (matching by id) or add/remove widgets that are not there.
   * Used to restore a grid layout for a saved layout list (see `save()`).
   *
   * @param items list of widgets definition to update/create
   * @param addRemove boolean (default true) or callback method can be passed to control if and how missing widgets can be added/removed, giving
   * the user control of insertion.
   * @returns the grid instance for chaining
   *
   * @example
   * // Basic usage with saved layout
   * const savedLayout = grid.save(); // Save current layout
   * // ... later restore it
   * grid.load(savedLayout);
   *
   * // Load with custom add/remove callback
   * grid.load(layout, (items, grid, add) => {
   *   if (add) {
   *     // Custom logic for adding new widgets
   *     items.forEach(item => {
   *       const el = document.createElement('div');
   *       el.innerHTML = item.content || '';
   *       grid.addWidget(el, item);
   *     });
   *   } else {
   *     // Custom logic for removing widgets
   *     items.forEach(item => grid.removeWidget(item.el));
   *   }
   * });
   *
   * // Load without adding/removing missing widgets
   * grid.load(layout, false);
   *
   * @see {@link http://gridstackjs.com/demo/serialization.html} for complete example
   */
  load(e, t = M.addRemoveCB || !0) {
    e = m.cloneDeep(e);
    const n = this.getColumn();
    e.forEach((c) => {
      c.w = c.w || c.minW || 1, c.h = c.h || c.minH || 1;
    }), e = m.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((c) => {
      i = Math.max(i, (c.x || 0) + c.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = M.addRemoveCB;
    typeof t == "function" && (M.addRemoveCB = t);
    const a = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, l = o && this.opts.animate;
    l && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      m.find(e, u.id) || (M.addRemoveCB && M.addRemoveCB(this.el, u, !1, !1), a.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const d = [];
    return this.engine.nodes = this.engine.nodes.filter((c) => m.find(e, c.id) ? (d.push(c), !1) : !0), e.forEach((c) => {
      const u = m.find(d, c.id);
      if (u) {
        if (m.shouldSizeToContent(u) && (c.h = u.h), this.engine.nodeBoundFix(c), (c.autoPosition || c.x === void 0 || c.y === void 0) && (c.w = c.w || u.w, c.h = c.h || u.h, this.engine.findEmptyPosition(c)), this.engine.nodes.push(u), m.samePos(u, c) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...c, forceCollide: !0 }), m.copyPos(c, u)), this.update(u.el, c), c.subGridOpts?.children) {
          const f = u.el.querySelector(".grid-stack");
          f && f.gridstack && f.gridstack.load(c.subGridOpts.children);
        }
      } else t && this.addWidget(c);
    }), delete this.engine._loading, this.engine.removedNodes = a, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? M.addRemoveCB = s : delete M.addRemoveCB, l && this.setAnimation(!0, !0), this;
  }
  /**
   * use before calling a bunch of `addWidget()` to prevent un-necessary relayouts in between (more efficient)
   * and get a single event callback. You will see no changes until `batchUpdate(false)` is called.
   */
  batchUpdate(e = !0) {
    return this.engine.batchUpdate(e), e || (this._updateContainerHeight(), this._triggerRemoveEvent(), this._triggerAddEvent(), this._triggerChangeEvent()), this;
  }
  /**
   * Gets the current cell height in pixels. This takes into account the unit type and converts to pixels if necessary.
   *
   * @param forcePixel if true, forces conversion to pixels even when cellHeight is specified in other units
   * @returns the cell height in pixels
   *
   * @example
   * const height = grid.getCellHeight();
   * console.log('Cell height:', height, 'px');
   *
   * // Force pixel conversion
   * const pixelHeight = grid.getCellHeight(true);
   */
  getCellHeight(e = !1) {
    if (this.opts.cellHeight && this.opts.cellHeight !== "auto" && (!e || !this.opts.cellHeightUnit || this.opts.cellHeightUnit === "px"))
      return this.opts.cellHeight;
    if (this.opts.cellHeightUnit === "rem")
      return this.opts.cellHeight * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (this.opts.cellHeightUnit === "em")
      return this.opts.cellHeight * parseFloat(getComputedStyle(this.el).fontSize);
    if (this.opts.cellHeightUnit === "cm")
      return this.opts.cellHeight * (96 / 2.54);
    if (this.opts.cellHeightUnit === "mm")
      return this.opts.cellHeight * (96 / 2.54) / 10;
    const t = this.el.querySelector("." + this.opts.itemClass);
    if (t) {
      const i = m.toNumber(t.getAttribute("gs-h")) || 1;
      return Math.round(t.offsetHeight / i);
    }
    const n = parseInt(this.el.getAttribute("gs-current-row"));
    return n ? Math.round(this.el.getBoundingClientRect().height / n) : this.opts.cellHeight;
  }
  /**
   * Update current cell height - see `GridStackOptions.cellHeight` for format by updating eh Browser CSS variable.
   *
   * @param val the cell height. Options:
   *   - `undefined`: cells content will be made square (match width minus margin)
   *   - `0`: the CSS will be generated by the application instead
   *   - number: height in pixels
   *   - string: height with units (e.g., '70px', '5rem', '2em')
   * @returns the grid instance for chaining
   *
   * @example
   * grid.cellHeight(100);     // 100px height
   * grid.cellHeight('70px');  // explicit pixel height
   * grid.cellHeight('5rem');  // relative to root font size
   * grid.cellHeight(grid.cellWidth() * 1.2); // aspect ratio
   * grid.cellHeight('auto');  // auto-size based on content
   */
  cellHeight(e) {
    if (e !== void 0 && this._isAutoCellHeight !== (e === "auto") && (this._isAutoCellHeight = e === "auto", this._updateResizeEvent()), (e === "initial" || e === "auto") && (e = void 0), e === void 0) {
      const n = -this.opts.marginRight - this.opts.marginLeft + this.opts.marginTop + this.opts.marginBottom;
      e = this.cellWidth() + n;
    }
    const t = m.parseHeight(e);
    return this.opts.cellHeightUnit === t.unit && this.opts.cellHeight === t.h ? this : (this.opts.cellHeightUnit = t.unit, this.opts.cellHeight = t.h, this.el.style.setProperty("--gs-cell-height", `${this.opts.cellHeight}${this.opts.cellHeightUnit}`), this._updateContainerHeight(), this.resizeToContentCheck(), this);
  }
  /** Gets current cell width. */
  /**
   * Gets the current cell width in pixels. This is calculated based on the grid container width divided by the number of columns.
   *
   * @returns the cell width in pixels
   *
   * @example
   * const width = grid.cellWidth();
   * console.log('Cell width:', width, 'px');
   *
   * // Use cell width to calculate widget dimensions
   * const widgetWidth = width * 3; // For a 3-column wide widget
   */
  cellWidth() {
    return this._widthOrContainer() / this.getColumn();
  }
  /** return our expected width (or parent) , and optionally of window for dynamic column check */
  _widthOrContainer(e = !1) {
    return e && this.opts.columnOpts?.breakpointForWindow ? window.innerWidth : this.el.clientWidth || this.el.parentElement.clientWidth || window.innerWidth;
  }
  /** checks for dynamic column count for our current size, returning true if changed */
  checkDynamicColumn() {
    const e = this.opts.columnOpts;
    if (!e || !e.columnWidth && !e.breakpoints?.length)
      return !1;
    const t = this.getColumn();
    let n = t;
    const i = this._widthOrContainer(!0);
    if (e.columnWidth)
      n = Math.min(Math.round(i / e.columnWidth) || 1, e.columnMax);
    else {
      n = e.columnMax;
      let s = 0;
      for (; s < e.breakpoints.length && i <= e.breakpoints[s].w; )
        n = e.breakpoints[s++].c || t;
    }
    if (n !== t) {
      const s = e.breakpoints?.find((a) => a.c === n);
      return this.column(n, s?.layout || e.layout), !0;
    }
    return !1;
  }
  /**
   * Re-layout grid items to reclaim any empty space. This is useful after removing widgets
   * or when you want to optimize the layout.
   *
   * @param layout layout type. Options:
   *   - 'compact' (default): might re-order items to fill any empty space
   *   - 'list': keep the widget left->right order the same, even if that means leaving an empty slot if things don't fit
   * @param doSort re-sort items first based on x,y position. Set to false to do your own sorting ahead (default: true)
   * @returns the grid instance for chaining
   *
   * @example
   * // Compact layout after removing widgets
   * grid.removeWidget('.widget-to-remove');
   * grid.compact();
   *
   * // Use list layout (preserve order)
   * grid.compact('list');
   *
   * // Compact without sorting first
   * grid.compact('compact', false);
   */
  compact(e = "compact", t = !0) {
    return this.engine.compact(e, t), this._triggerChangeEvent(), this;
  }
  /**
   * Set the number of columns in the grid. Will update existing widgets to conform to new number of columns,
   * as well as cache the original layout so you can revert back to previous positions without loss.
   *
   * Requires `gridstack-extra.css` or `gridstack-extra.min.css` for [2-11] columns,
   * else you will need to generate correct CSS.
   * See: https://github.com/gridstack/gridstack.js#change-grid-columns
   *
   * @param column Integer > 0 (default 12)
   * @param layout specify the type of re-layout that will happen. Options:
   *   - 'moveScale' (default): scale widget positions and sizes
   *   - 'move': keep widget sizes, only move positions
   *   - 'scale': keep widget positions, only scale sizes
   *   - 'none': don't change widget positions or sizes
   *   Note: items will never be outside of the current column boundaries.
   *   Ignored for `column=1` as we always want to vertically stack.
   * @returns the grid instance for chaining
   *
   * @example
   * // Change to 6 columns with default scaling
   * grid.column(6);
   *
   * // Change to 4 columns, only move positions
   * grid.column(4, 'move');
   *
   * // Single column layout (vertical stack)
   * grid.column(1);
   */
  column(e, t = "moveScale") {
    if (!e || e < 1 || this.opts.column === e)
      return this;
    const n = this.getColumn();
    return this.opts.column = e, this.engine ? (this.engine.column = e, this.el.classList.remove("gs-" + n), this._updateColumnVar(), this.engine.columnChanged(n, e, t), this._isAutoCellHeight && this.cellHeight(), this.resizeToContentCheck(!0), this._ignoreLayoutsNodeChange = !0, this._triggerChangeEvent(), delete this._ignoreLayoutsNodeChange, this) : (this.responseLayout = t, this);
  }
  /**
   * Get the number of columns in the grid (default 12).
   *
   * @returns the current number of columns in the grid
   *
   * @example
   * const columnCount = grid.getColumn(); // returns 12 by default
   */
  getColumn() {
    return this.opts.column;
  }
  /**
   * Returns an array of grid HTML elements (no placeholder) - used to iterate through our children in DOM order.
   * This method excludes placeholder elements and returns only actual grid items.
   *
   * @returns array of GridItemHTMLElement instances representing all grid items
   *
   * @example
   * const items = grid.getGridItems();
   * items.forEach(item => {
   *   console.log('Item ID:', item.gridstackNode.id);
   * });
   */
  getGridItems() {
    return Array.from(this.el.children).filter((e) => e.matches("." + this.opts.itemClass) && !e.matches("." + this.opts.placeholderClass));
  }
  /**
   * Returns true if change callbacks should be ignored due to column change, sizeToContent, loading, etc.
   * This is useful for callers who want to implement dirty flag functionality.
   *
   * @returns true if change callbacks are currently being ignored
   *
   * @example
   * if (!grid.isIgnoreChangeCB()) {
   *   // Process the change event
   *   console.log('Grid layout changed');
   * }
   */
  isIgnoreChangeCB() {
    return this._ignoreLayoutsNodeChange;
  }
  /**
   * Destroys a grid instance. DO NOT CALL any methods or access any vars after this as it will free up members.
   * @param removeDOM if `false` grid and items HTML elements will not be removed from the DOM (Optional. Default `true`).
   */
  destroy(e = !0) {
    if (this.el)
      return this.offAll(), this._updateResizeEvent(!0), this.setStatic(!0, !1), this.setAnimation(!1), e ? this.el.parentNode.removeChild(this.el) : (this.removeAll(e), this.el.removeAttribute("gs-current-row")), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, delete this.opts, delete this._placeholder?.gridstackNode, delete this._placeholder, delete this.engine, delete this.el.gridstack, delete this.el, this;
  }
  /**
   * Enable/disable floating widgets (default: `false`). When enabled, widgets can float up to fill empty spaces.
   * See [example](http://gridstackjs.com/demo/float.html)
   *
   * @param val true to enable floating, false to disable
   * @returns the grid instance for chaining
   *
   * @example
   * grid.float(true);  // Enable floating
   * grid.float(false); // Disable floating (default)
   */
  float(e) {
    return this.opts.float !== e && (this.opts.float = this.engine.float = e, this._triggerChangeEvent()), this;
  }
  /**
   * Get the current float mode setting.
   *
   * @returns true if floating is enabled, false otherwise
   *
   * @example
   * const isFloating = grid.getFloat();
   * console.log('Floating enabled:', isFloating);
   */
  getFloat() {
    return this.engine.float;
  }
  /**
   * Get the position of the cell under a pixel on screen.
   * @param position the position of the pixel to resolve in
   * absolute coordinates, as an object with top and left properties
   * @param useDocRelative if true, value will be based on document position vs parent position (Optional. Default false).
   * Useful when grid is within `position: relative` element
   *
   * Returns an object with properties `x` and `y` i.e. the column and row in the grid.
   */
  getCellFromPixel(e, t = !1) {
    const n = this.el.getBoundingClientRect();
    let i;
    t ? i = { top: n.top + document.documentElement.scrollTop, left: n.left } : i = { top: this.el.offsetTop, left: this.el.offsetLeft };
    const s = e.left - i.left, a = e.top - i.top, o = n.width / this.getColumn(), l = n.height / parseInt(this.el.getAttribute("gs-current-row"));
    return { x: Math.floor(s / o), y: Math.floor(a / l) };
  }
  /**
   * Returns the current number of rows, which will be at least `minRow` if set.
   * The row count is based on the highest positioned widget in the grid.
   *
   * @returns the current number of rows in the grid
   *
   * @example
   * const rowCount = grid.getRow();
   * console.log('Grid has', rowCount, 'rows');
   */
  getRow() {
    return Math.max(this.engine.getRow(), this.opts.minRow || 0);
  }
  /**
   * Checks if the specified rectangular area is empty (no widgets occupy any part of it).
   *
   * @param x the x coordinate (column) of the area to check
   * @param y the y coordinate (row) of the area to check
   * @param w the width in columns of the area to check
   * @param h the height in rows of the area to check
   * @returns true if the area is completely empty, false if any widget overlaps
   *
   * @example
   * // Check if a 2x2 area at position (1,1) is empty
   * if (grid.isAreaEmpty(1, 1, 2, 2)) {
   *   console.log('Area is available for placement');
   * }
   */
  isAreaEmpty(e, t, n, i) {
    return this.engine.isAreaEmpty(e, t, n, i);
  }
  /**
   * If you add elements to your grid by hand (or have some framework creating DOM), you have to tell gridstack afterwards to make them widgets.
   * If you want gridstack to add the elements for you, use `addWidget()` instead.
   * Makes the given element a widget and returns it.
   *
   * @param els widget or single selector to convert.
   * @param options widget definition to use instead of reading attributes or using default sizing values
   * @returns the converted GridItemHTMLElement
   *
   * @example
   * const grid = GridStack.init();
   *
   * // Create HTML content manually, possibly looking like:
   * // <div id="item-1" gs-x="0" gs-y="0" gs-w="3" gs-h="2"></div>
   * grid.el.innerHTML = '<div id="item-1" gs-w="3"></div><div id="item-2"></div>';
   *
   * // Convert existing elements to widgets
   * grid.makeWidget('#item-1'); // Uses gs-* attributes from DOM
   * grid.makeWidget('#item-2', {w: 2, h: 1, content: 'Hello World'});
   *
   * // Or pass DOM element directly
   * const element = document.getElementById('item-3');
   * grid.makeWidget(element, {x: 0, y: 1, w: 4, h: 2});
   */
  makeWidget(e, t) {
    const n = M.getElement(e);
    if (!n || n.gridstackNode)
      return n;
    n.parentElement || this.el.appendChild(n), this._prepareElement(n, !0, t);
    const i = n.gridstackNode;
    this._updateContainerHeight(), i.subGridOpts && this.makeSubGrid(n, i.subGridOpts, void 0, !1);
    let s;
    return this.opts.column === 1 && !this._ignoreLayoutsNodeChange && (s = this._ignoreLayoutsNodeChange = !0), this._triggerAddEvent(), this._triggerChangeEvent(), s && delete this._ignoreLayoutsNodeChange, n;
  }
  on(e, t) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((i) => this.on(i, t)), this) : (e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable" ? (e === "enable" || e === "disable" ? this._gsEventHandler[e] = (i) => t(i) : this._gsEventHandler[e] = (i) => {
      i.detail && t(i, i.detail);
    }, this.el.addEventListener(e, this._gsEventHandler[e])) : e === "drag" || e === "dragstart" || e === "dragstop" || e === "resizestart" || e === "resize" || e === "resizestop" || e === "dropped" || e === "resizecontent" ? this._gsEventHandler[e] = t : console.error("GridStack.on(" + e + ") event not supported"), this);
  }
  /**
   * unsubscribe from the 'on' event GridStackEvent
   * @param name of the event (see possible values) or list of names space separated
   */
  off(e) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((n) => this.off(n)), this) : ((e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable") && this._gsEventHandler[e] && this.el.removeEventListener(e, this._gsEventHandler[e]), delete this._gsEventHandler[e], this);
  }
  /**
   * Remove all event handlers from the grid. This is useful for cleanup when destroying a grid.
   *
   * @returns the grid instance for chaining
   *
   * @example
   * grid.offAll(); // Remove all event listeners
   */
  offAll() {
    return Object.keys(this._gsEventHandler).forEach((e) => this.off(e)), this;
  }
  /**
   * Removes widget from the grid.
   * @param el  widget or selector to modify
   * @param removeDOM if `false` DOM element won't be removed from the tree (Default? true).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeWidget(e, t = !0, n = !0) {
    return e ? (M.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((a) => i === a.el)), s && (t && M.addRemoveCB && M.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, n), t && i.parentElement && i.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && M.addRemoveCB && M.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
    }), this.engine.removeAll(e, t), t && this._triggerRemoveEvent(), this;
  }
  /**
   * Toggle the grid animation state.  Toggles the `grid-stack-animate` class.
   * @param doAnimate if true the grid will animate.
   * @param delay if true setting will be set on next event loop.
   */
  setAnimation(e = this.opts.animate, t) {
    return t ? setTimeout(() => {
      this.opts && this.setAnimation(e);
    }) : e ? this.el.classList.add("grid-stack-animate") : this.el.classList.remove("grid-stack-animate"), this.opts.animate = e, this;
  }
  /** @internal */
  hasAnimationCSS() {
    return this.el.classList.contains("grid-stack-animate");
  }
  /**
   * Toggle the grid static state, which permanently removes/add Drag&Drop support, unlike disable()/enable() that just turns it off/on.
   * Also toggle the grid-stack-static class.
   * @param val if true the grid become static.
   * @param updateClass true (default) if css class gets updated
   * @param recurse true (default) if sub-grids also get updated
   */
  setStatic(e, t = !0, n = !0) {
    return !!this.opts.staticGrid === e ? this : (e ? this.opts.staticGrid = !0 : delete this.opts.staticGrid, this._setupRemoveDrop(), this._setupAcceptWidget(), this.engine.nodes.forEach((i) => {
      this.prepareDragDrop(i.el), i.subGrid && n && i.subGrid.setStatic(e, t, n);
    }), t && this._setStaticClass(), this);
  }
  /**
   * Updates the passed in options on the grid (similar to update(widget) for for the grid options).
   * @param options PARTIAL grid options to update - only items specified will be updated.
   * NOTE: not all options updating are currently supported (lot of code, unlikely to change)
   */
  updateOptions(e) {
    const t = this.opts;
    return e === t ? this : (e.acceptWidgets !== void 0 && (t.acceptWidgets = e.acceptWidgets, this._setupAcceptWidget()), e.animate !== void 0 && this.setAnimation(e.animate), e.cellHeight && this.cellHeight(e.cellHeight), e.class !== void 0 && e.class !== t.class && (t.class && this.el.classList.remove(t.class), e.class && this.el.classList.add(e.class)), e.columnOpts ? (this.opts.columnOpts = e.columnOpts, this.checkDynamicColumn()) : e.columnOpts === null && this.opts.columnOpts ? (delete this.opts.columnOpts, this._updateResizeEvent()) : typeof e.column == "number" && this.column(e.column), e.margin !== void 0 && this.margin(e.margin), e.staticGrid !== void 0 && this.setStatic(e.staticGrid), e.disableDrag !== void 0 && !e.staticGrid && this.enableMove(!e.disableDrag), e.disableResize !== void 0 && !e.staticGrid && this.enableResize(!e.disableResize), e.float !== void 0 && this.float(e.float), e.row !== void 0 ? (t.minRow = t.maxRow = t.row = e.row, this._updateContainerHeight()) : (e.minRow !== void 0 && (t.minRow = e.minRow, this._updateContainerHeight()), e.maxRow !== void 0 && (t.maxRow = e.maxRow)), e.children?.length && this.load(e.children), this);
  }
  /**
   * Updates widget position/size and other info. This is used to change widget properties after creation.
   * Can update position, size, content, and other widget properties.
   *
   * Note: If you need to call this on all nodes, use load() instead which will update what changed.
   * Setting the same x,y for multiple items will be indeterministic and likely unwanted.
   *
   * @param els widget element(s) or selector to modify
   * @param opt new widget options (x,y,w,h, etc.). Only those set will be updated.
   * @returns the grid instance for chaining
   *
   * @example
   * // Update widget size and position
   * grid.update('.my-widget', { x: 2, y: 1, w: 3, h: 2 });
   *
   * // Update widget content
   * grid.update(widget, { content: '<p>New content</p>' });
   *
   * // Update multiple properties
   * grid.update('#my-widget', {
   *   w: 4,
   *   h: 3,
   *   noResize: true,
   *   locked: true
   * });
   */
  update(e, t) {
    return M.getElements(e).forEach((n) => {
      const i = n?.gridstackNode;
      if (!i)
        return;
      const s = { ...m.copyPos({}, i), ...m.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const a = ["x", "y", "w", "h"];
      let o;
      if (a.some((c) => s[c] !== void 0 && s[c] !== i[c]) && (o = {}, a.forEach((c) => {
        o[c] = s[c] !== void 0 ? s[c] : i[c], delete s[c];
      })), !o && (s.minW || s.minH || s.maxW || s.maxH) && (o = {}), s.content !== void 0) {
        const c = n.querySelector(".grid-stack-item-content");
        c && c.textContent !== s.content && (i.content = s.content, M.renderCB(c, s), i.subGrid?.el && (c.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, d = !1;
      for (const c in s)
        c[0] !== "_" && i[c] !== s[c] && (i[c] = s[c], l = !0, d = d || !this.opts.staticGrid && (c === "noResize" || c === "noMove" || c === "locked"));
      if (m.sanitizeMinMax(i), o) {
        const c = o.w !== void 0 && o.w !== i.w;
        this.moveNode(i, o), c && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(c, i), delete i._orig;
      }
      (o || l) && this._writeAttr(n, i), d && this.prepareDragDrop(i.el), M.updateCB && M.updateCB(i);
    }), this;
  }
  moveNode(e, t) {
    const n = e._updating;
    n || this.engine.cleanNodes().beginUpdate(e), this.engine.moveNode(e, t), this._updateContainerHeight(), n || (this._triggerChangeEvent(), this.engine.endUpdate());
  }
  /**
   * Updates widget height to match the content height to avoid vertical scrollbars or dead space.
   * This automatically adjusts the widget height based on its content size.
   *
   * Note: This assumes only 1 child under resizeToContentParent='.grid-stack-item-content'
   * (sized to gridItem minus padding) that represents the entire content size.
   *
   * @param el the grid item element to resize
   *
   * @example
   * // Resize a widget to fit its content
   * const widget = document.querySelector('.grid-stack-item');
   * grid.resizeToContent(widget);
   *
   * // This is commonly used with dynamic content:
   * widget.querySelector('.content').innerHTML = 'New longer content...';
   * grid.resizeToContent(widget);
   */
  resizeToContent(e) {
    if (!e || (e.classList.remove("size-to-content-max"), !e.clientHeight))
      return;
    const t = e.gridstackNode;
    if (!t)
      return;
    const n = t.grid;
    if (!n || e.parentElement !== n.el)
      return;
    const i = n.getCellHeight(!0);
    if (!i)
      return;
    let s = t.h ? t.h * i : e.clientHeight, a;
    if (t.resizeToContentParent && (a = e.querySelector(t.resizeToContentParent)), a || (a = e.querySelector(M.resizeToContentParent)), !a)
      return;
    const o = e.clientHeight - a.clientHeight, l = t.h ? t.h * i - o : a.clientHeight;
    let d;
    if (t.subGrid) {
      d = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const f = t.subGrid.el.getBoundingClientRect(), p = e.getBoundingClientRect();
      d += f.top - p.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const f = a.firstElementChild;
        if (!f) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${M.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        d = f.getBoundingClientRect().height || l;
      }
    }
    if (l === d)
      return;
    s += d - l;
    let c = Math.ceil(s / i);
    const u = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    u && c > u && (c = u, e.classList.add("size-to-content-max")), t.minH && c < t.minH ? c = t.minH : t.maxH && c > t.maxH && (c = t.maxH), c !== t.h && (n._ignoreLayoutsNodeChange = !0, n.moveNode(t, { h: c }), delete n._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    M.resizeToContentCB ? M.resizeToContentCB(e) : this.resizeToContent(e);
  }
  /**
   * Rotate widgets by swapping their width and height. This is typically called when the user presses 'r' during dragging.
   * The rotation swaps the w/h dimensions and adjusts min/max constraints accordingly.
   *
   * @param els widget element(s) or selector to rotate
   * @param relative optional pixel coordinate relative to upper/left corner to rotate around (keeps that cell under cursor)
   * @returns the grid instance for chaining
   *
   * @example
   * // Rotate a specific widget
   * grid.rotate('.my-widget');
   *
   * // Rotate with relative positioning during drag
   * grid.rotate(widget, { left: 50, top: 30 });
   */
  rotate(e, t) {
    return M.getElements(e).forEach((n) => {
      const i = n.gridstackNode;
      if (!m.canBeRotated(i))
        return;
      const s = { w: i.h, h: i.w, minH: i.minW, minW: i.minH, maxH: i.maxW, maxW: i.maxH };
      if (t) {
        const o = t.left > 0 ? Math.floor(t.left / this.cellWidth()) : 0, l = t.top > 0 ? Math.floor(t.top / this.opts.cellHeight) : 0;
        s.x = i.x + o - (i.h - (l + 1)), s.y = i.y + l - o;
      }
      Object.keys(s).forEach((o) => {
        s[o] === void 0 && delete s[o];
      });
      const a = i._orig;
      this.update(n, s), i._orig = a;
    }), this;
  }
  /**
   * Updates the margins which will set all 4 sides at once - see `GridStackOptions.margin` for format options.
   * Supports CSS string format of 1, 2, or 4 values or a single number.
   *
   * @param value margin value - can be:
   *   - Single number: `10` (applies to all sides)
   *   - Two values: `'10px 20px'` (top/bottom, left/right)
   *   - Four values: `'10px 20px 5px 15px'` (top, right, bottom, left)
   * @returns the grid instance for chaining
   *
   * @example
   * grid.margin(10);           // 10px all sides
   * grid.margin('10px 20px');  // 10px top/bottom, 20px left/right
   * grid.margin('5px 10px 15px 20px'); // Different for each side
   */
  margin(e) {
    if (!(typeof e == "string" && e.split(" ").length > 1)) {
      const n = m.parseHeight(e);
      if (this.opts.marginUnit === n.unit && this.opts.margin === n.h)
        return;
    }
    return this.opts.margin = e, this.opts.marginTop = this.opts.marginBottom = this.opts.marginLeft = this.opts.marginRight = void 0, this._initMargin(), this;
  }
  /**
   * Returns the current margin value as a number (undefined if the 4 sides don't match).
   * This only returns a number if all sides have the same margin value.
   *
   * @returns the margin value in pixels, or undefined if sides have different values
   *
   * @example
   * const margin = grid.getMargin();
   * if (margin !== undefined) {
   *   console.log('Uniform margin:', margin, 'px');
   * } else {
   *   console.log('Margins are different on different sides');
   * }
   */
  getMargin() {
    return this.opts.margin;
  }
  /**
   * Returns true if the height of the grid will be less than the vertical
   * constraint. Always returns true if grid doesn't have height constraint.
   * @param node contains x,y,w,h,auto-position options
   *
   * @example
   * if (grid.willItFit(newWidget)) {
   *   grid.addWidget(newWidget);
   * } else {
   *   alert('Not enough free space to place the widget');
   * }
   */
  willItFit(e) {
    if (arguments.length > 1) {
      console.warn("gridstack.ts: `willItFit(x,y,w,h,autoPosition)` is deprecated. Use `willItFit({x, y,...})`. It will be removed soon");
      const t = arguments;
      let n = 0, i = { x: t[n++], y: t[n++], w: t[n++], h: t[n++], autoPosition: t[n++] };
      return this.willItFit(i);
    }
    return this.engine.willItFit(e);
  }
  /** @internal */
  _triggerChangeEvent() {
    if (this.engine.batchMode)
      return this;
    const e = this.engine.getDirtyNodes(!0);
    return e && e.length && (this._ignoreLayoutsNodeChange || this.engine.layoutsNodesChange(e), this._triggerEvent("change", e)), this.engine.saveInitial(), this;
  }
  /** @internal */
  _triggerAddEvent() {
    if (this.engine.batchMode)
      return this;
    if (this.engine.addedNodes?.length) {
      this._ignoreLayoutsNodeChange || this.engine.layoutsNodesChange(this.engine.addedNodes), this.engine.addedNodes.forEach((t) => {
        delete t._dirty;
      });
      const e = [...this.engine.addedNodes];
      this.engine.addedNodes = [], this._triggerEvent("added", e);
    }
    return this;
  }
  /** @internal */
  _triggerRemoveEvent() {
    if (this.engine.batchMode)
      return this;
    if (this.engine.removedNodes?.length) {
      const e = [...this.engine.removedNodes];
      this.engine.removedNodes = [], this._triggerEvent("removed", e);
    }
    return this;
  }
  /** @internal */
  _triggerEvent(e, t) {
    const n = t ? new CustomEvent(e, { bubbles: !1, detail: t }) : new Event(e);
    let i = this;
    for (; i.parentGridNode; )
      i = i.parentGridNode.grid;
    return i.el.dispatchEvent(n), this;
  }
  /** @internal */
  _updateContainerHeight() {
    if (!this.engine || this.engine.batchMode)
      return this;
    const e = this.parentGridNode;
    let t = this.getRow() + this._extraDragRow;
    const n = this.opts.cellHeight, i = this.opts.cellHeightUnit;
    if (!n)
      return this;
    if (!e && !this.opts.minRow) {
      const s = m.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === i) {
        const a = Math.floor(s.h / n);
        t < a && (t = a);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * n + i), e && m.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, n) {
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(me.itemClass, this.opts.itemClass);
    const i = m.shouldSizeToContent(n);
    return i ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), i && this.resizeToContentCheck(!1, n), m.lazyLoad(n) || this.prepareDragDrop(n.el), this;
  }
  /** @internal write position CSS vars and x,y,w,h attributes (not used for CSS but by users) back to element */
  _writePosAttr(e, t) {
    return (!t._moving && !t._resizing || this._placeholder === e) && (e.style.top = t.y ? t.y === 1 ? "var(--gs-cell-height)" : `calc(${t.y} * var(--gs-cell-height))` : null, e.style.left = t.x ? t.x === 1 ? "var(--gs-column-width)" : `calc(${t.x} * var(--gs-column-width))` : null, e.style.width = t.w > 1 ? `calc(${t.w} * var(--gs-column-width))` : null, e.style.height = t.h > 1 ? `calc(${t.h} * var(--gs-cell-height))` : null), t.x > 0 ? e.setAttribute("gs-x", String(t.x)) : e.removeAttribute("gs-x"), t.y > 0 ? e.setAttribute("gs-y", String(t.y)) : e.removeAttribute("gs-y"), t.w > 1 ? e.setAttribute("gs-w", String(t.w)) : e.removeAttribute("gs-w"), t.h > 1 ? e.setAttribute("gs-h", String(t.h)) : e.removeAttribute("gs-h"), this;
  }
  /** @internal call to write any default attributes back to element */
  _writeAttr(e, t) {
    if (!t)
      return this;
    this._writePosAttr(e, t);
    const n = {
      // autoPosition: 'gs-auto-position', // no need to write out as already in node and doesn't affect CSS
      noResize: "gs-no-resize",
      noMove: "gs-no-move",
      locked: "gs-locked",
      id: "gs-id",
      sizeToContent: "gs-size-to-content"
    };
    for (const i in n)
      t[i] ? e.setAttribute(n[i], String(t[i])) : e.removeAttribute(n[i]);
    return this;
  }
  /** @internal call to read any default attributes from element */
  _readAttr(e, t = !0) {
    const n = {};
    n.x = m.toNumber(e.getAttribute("gs-x")), n.y = m.toNumber(e.getAttribute("gs-y")), n.w = m.toNumber(e.getAttribute("gs-w")), n.h = m.toNumber(e.getAttribute("gs-h")), n.autoPosition = m.toBool(e.getAttribute("gs-auto-position")), n.noResize = m.toBool(e.getAttribute("gs-no-resize")), n.noMove = m.toBool(e.getAttribute("gs-no-move")), n.locked = m.toBool(e.getAttribute("gs-locked"));
    const i = e.getAttribute("gs-size-to-content");
    i && (i === "true" || i === "false" ? n.sizeToContent = m.toBool(i) : n.sizeToContent = parseInt(i, 10)), n.id = e.getAttribute("gs-id"), n.maxW = m.toNumber(e.getAttribute("gs-max-w")), n.minW = m.toNumber(e.getAttribute("gs-min-w")), n.maxH = m.toNumber(e.getAttribute("gs-max-h")), n.minH = m.toNumber(e.getAttribute("gs-min-h")), t && (n.w === 1 && e.removeAttribute("gs-w"), n.h === 1 && e.removeAttribute("gs-h"), n.maxW && e.removeAttribute("gs-max-w"), n.minW && e.removeAttribute("gs-min-w"), n.maxH && e.removeAttribute("gs-max-h"), n.minH && e.removeAttribute("gs-min-h"));
    for (const s in n) {
      if (!n.hasOwnProperty(s))
        return;
      !n[s] && n[s] !== 0 && s !== "sizeToContent" && delete n[s];
    }
    return n;
  }
  /** @internal */
  _setStaticClass() {
    const e = ["grid-stack-static"];
    return this.opts.staticGrid ? (this.el.classList.add(...e), this.el.setAttribute("gs-static", "true")) : (this.el.classList.remove(...e), this.el.removeAttribute("gs-static")), this;
  }
  /**
   * called when we are being resized - check if the one Column Mode needs to be turned on/off
   * and remember the prev columns we used, or get our count from parent, as well as check for cellHeight==='auto' (square)
   * or `sizeToContent` gridItem options.
   */
  onResize(e = this.el?.clientWidth) {
    if (!e || this.prevWidth === e)
      return;
    this.prevWidth = e, this.batchUpdate();
    let t = !1;
    return this._autoColumn && this.parentGridNode ? this.opts.column !== this.parentGridNode.w && (this.column(this.parentGridNode.w, this.opts.layout || "list"), t = !0) : t = this.checkDynamicColumn(), this._isAutoCellHeight && this.cellHeight(), this.engine.nodes.forEach((n) => {
      n.subGrid && n.subGrid.onResize();
    }), this._skipInitialResize || this.resizeToContentCheck(t), delete this._skipInitialResize, this.batchUpdate(!1), this;
  }
  /** resizes content for given node (or all) if shouldSizeToContent() is true */
  resizeToContentCheck(e = !1, t = void 0) {
    if (this.engine) {
      if (e && this.hasAnimationCSS())
        return setTimeout(() => this.resizeToContentCheck(!1, t), this.animationDelay);
      if (t)
        m.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((n) => m.shouldSizeToContent(n))) {
        const n = [...this.engine.nodes];
        this.batchUpdate(), n.forEach((i) => {
          m.shouldSizeToContent(i) && this.resizeToContentCBCheck(i.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((n) => n.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = m.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return m.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return m.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return M.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return m.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, n = [];
    typeof this.opts.margin == "string" && (n = this.opts.margin.split(" ")), n.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = n[0], this.opts.marginLeft = this.opts.marginRight = n[1]) : n.length === 4 ? (this.opts.marginTop = n[0], this.opts.marginRight = n[1], this.opts.marginBottom = n[2], this.opts.marginLeft = n[3]) : (e = m.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((a) => {
      this.opts[a] === void 0 ? this.opts[a] = t : (e = m.parseHeight(this.opts[a]), this.opts[a] = e.h, delete this.opts.margin);
    }), this.opts.marginUnit = e.unit, this.opts.marginTop === this.opts.marginBottom && this.opts.marginLeft === this.opts.marginRight && this.opts.marginTop === this.opts.marginRight && (this.opts.margin = this.opts.marginTop);
    const s = this.el.style;
    return s.setProperty("--gs-item-margin-top", `${this.opts.marginTop}${this.opts.marginUnit}`), s.setProperty("--gs-item-margin-bottom", `${this.opts.marginBottom}${this.opts.marginUnit}`), s.setProperty("--gs-item-margin-right", `${this.opts.marginRight}${this.opts.marginUnit}`), s.setProperty("--gs-item-margin-left", `${this.opts.marginLeft}${this.opts.marginUnit}`), this;
  }
  /* ===========================================================================================
   * drag&drop methods that used to be stubbed out and implemented in dd-gridstack.ts
   * but caused loading issues in prod - see https://github.com/gridstack/gridstack.js/issues/2039
   * ===========================================================================================
   */
  /**
   * Get the global drag & drop implementation instance.
   * This provides access to the underlying drag & drop functionality.
   *
   * @returns the DDGridStack instance used for drag & drop operations
   *
   * @example
   * const dd = GridStack.getDD();
   * // Access drag & drop functionality
   */
  static getDD() {
    return oe;
  }
  /**
   * call to setup dragging in from the outside (say toolbar), by specifying the class selection and options.
   * Called during GridStack.init() as options, but can also be called directly (last param are used) in case the toolbar
   * is dynamically create and needs to be set later.
   * @param dragIn string selector (ex: '.sidebar-item') or list of dom elements
   * @param dragInOptions options - see DDDragOpt. (default: {handle: '.grid-stack-item-content', appendTo: 'body'}
   * @param widgets GridStackWidget def to assign to each element which defines what to create on drop
   * @param root optional root which defaults to document (for shadow dom pass the parent HTMLDocument)
   */
  static setupDragIn(e, t, n, i = document) {
    t?.pause !== void 0 && (F.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? m.getElements(e, i) : e).forEach((a, o) => {
      oe.isDraggable(a) || oe.dragIn(a, t), n?.[o] && (a.gridstackNode = n[o]);
    });
  }
  /**
   * Enables/Disables dragging by the user for specific grid elements.
   * For all items and future items, use enableMove() instead. No-op for static grids.
   *
   * Note: If you want to prevent an item from moving due to being pushed around by another
   * during collision, use the 'locked' property instead.
   *
   * @param els widget element(s) or selector to modify
   * @param val if true widget will be draggable, assuming the parent grid isn't noMove or static
   * @returns the grid instance for chaining
   *
   * @example
   * // Make specific widgets draggable
   * grid.movable('.my-widget', true);
   *
   * // Disable dragging for specific widgets
   * grid.movable('#fixed-widget', false);
   */
  movable(e, t) {
    return this.opts.staticGrid ? this : (M.getElements(e).forEach((n) => {
      const i = n.gridstackNode;
      i && (t ? delete i.noMove : i.noMove = !0, this.prepareDragDrop(i.el));
    }), this);
  }
  /**
   * Enables/Disables user resizing for specific grid elements.
   * For all items and future items, use enableResize() instead. No-op for static grids.
   *
   * @param els widget element(s) or selector to modify
   * @param val if true widget will be resizable, assuming the parent grid isn't noResize or static
   * @returns the grid instance for chaining
   *
   * @example
   * // Make specific widgets resizable
   * grid.resizable('.my-widget', true);
   *
   * // Disable resizing for specific widgets
   * grid.resizable('#fixed-size-widget', false);
   */
  resizable(e, t) {
    return this.opts.staticGrid ? this : (M.getElements(e).forEach((n) => {
      const i = n.gridstackNode;
      i && (t ? delete i.noResize : i.noResize = !0, this.prepareDragDrop(i.el));
    }), this);
  }
  /**
   * Temporarily disables widgets moving/resizing.
   * If you want a more permanent way (which freezes up resources) use `setStatic(true)` instead.
   *
   * Note: This is a no-op for static grids.
   *
   * This is a shortcut for:
   * ```typescript
   * grid.enableMove(false);
   * grid.enableResize(false);
   * ```
   *
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Disable all interactions
   * grid.disable();
   *
   * // Disable only this grid, not sub-grids
   * grid.disable(false);
   */
  disable(e = !0) {
    if (!this.opts.staticGrid)
      return this.enableMove(!1, e), this.enableResize(!1, e), this._triggerEvent("disable"), this;
  }
  /**
   * Re-enables widgets moving/resizing - see disable().
   * Note: This is a no-op for static grids.
   *
   * This is a shortcut for:
   * ```typescript
   * grid.enableMove(true);
   * grid.enableResize(true);
   * ```
   *
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Re-enable all interactions
   * grid.enable();
   *
   * // Enable only this grid, not sub-grids
   * grid.enable(false);
   */
  enable(e = !0) {
    if (!this.opts.staticGrid)
      return this.enableMove(!0, e), this.enableResize(!0, e), this._triggerEvent("enable"), this;
  }
  /**
   * Enables/disables widget moving for all widgets. No-op for static grids.
   * Note: locally defined items (with noMove property) still override this setting.
   *
   * @param doEnable if true widgets will be movable, if false moving is disabled
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Enable moving for all widgets
   * grid.enableMove(true);
   *
   * // Disable moving for all widgets
   * grid.enableMove(false);
   *
   * // Enable only this grid, not sub-grids
   * grid.enableMove(true, false);
   */
  enableMove(e, t = !0) {
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableDrag : this.opts.disableDrag = !0, this.engine.nodes.forEach((n) => {
      this.prepareDragDrop(n.el), n.subGrid && t && n.subGrid.enableMove(e, t);
    }), this);
  }
  /**
   * Enables/disables widget resizing for all widgets. No-op for static grids.
   * Note: locally defined items (with noResize property) still override this setting.
   *
   * @param doEnable if true widgets will be resizable, if false resizing is disabled
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Enable resizing for all widgets
   * grid.enableResize(true);
   *
   * // Disable resizing for all widgets
   * grid.enableResize(false);
   *
   * // Enable only this grid, not sub-grids
   * grid.enableResize(true, false);
   */
  enableResize(e, t = !0) {
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableResize : this.opts.disableResize = !0, this.engine.nodes.forEach((n) => {
      this.prepareDragDrop(n.el), n.subGrid && t && n.subGrid.enableResize(e, t);
    }), this);
  }
  /** @internal call when drag (and drop) needs to be cancelled (Esc key) */
  cancelDrag() {
    const e = this._placeholder?.gridstackNode;
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && M._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return oe.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return oe.droppable(this.el, "destroy"), this;
    let e, t;
    const n = (i, s, a) => {
      a = a || s;
      const o = a.gridstackNode;
      if (!o)
        return;
      if (!o.grid?.el) {
        a.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const f = a.getBoundingClientRect();
        a.style.left = f.x + (this.dragTransform.xScale - 1) * (i.clientX - f.x) / this.dragTransform.xScale + "px", a.style.top = f.y + (this.dragTransform.yScale - 1) * (i.clientY - f.y) / this.dragTransform.yScale + "px", a.style.transformOrigin = "0px 0px";
      }
      let { top: l, left: d } = a.getBoundingClientRect();
      const c = this.el.getBoundingClientRect();
      d -= c.left, l -= c.top;
      const u = {
        position: {
          top: l * this.dragTransform.xScale,
          left: d * this.dragTransform.yScale
        }
      };
      if (o._temporaryRemoved) {
        if (o.x = Math.max(0, Math.round(d / t)), o.y = Math.max(0, Math.round(l / e)), delete o.autoPosition, this.engine.nodeBoundFix(o), !this.engine.willItFit(o)) {
          if (o.autoPosition = !0, !this.engine.willItFit(o)) {
            oe.off(s, "drag");
            return;
          }
          o._willFitPos && (m.copyPos(o, o._willFitPos), delete o._willFitPos);
        }
        this._onStartMoving(a, i, u, o, t, e);
      } else
        this._dragOrResize(a, i, u, o, t, e);
    };
    return oe.droppable(this.el, {
      accept: (i) => {
        const s = i.gridstackNode || this._readAttr(i, !1);
        if (s?.grid === this)
          return !0;
        if (!this.opts.acceptWidgets)
          return !1;
        let a = !0;
        if (typeof this.opts.acceptWidgets == "function")
          a = this.opts.acceptWidgets(i);
        else {
          const o = this.opts.acceptWidgets === !0 ? ".grid-stack-item" : this.opts.acceptWidgets;
          a = i.matches(o);
        }
        if (a && s && this.opts.maxRow) {
          const o = { w: s.w, h: s.h, minW: s.minW, minH: s.minH };
          a = this.engine.willItFit(o);
        }
        return a;
      }
    }).on(this.el, "dropover", (i, s, a) => {
      let o = a?.gridstackNode || s.gridstackNode;
      if (o?.grid === this && !o._temporaryRemoved)
        return !1;
      if (o?._sidebarOrig && (o.w = o._sidebarOrig.w, o.h = o._sidebarOrig.h), o?.grid && o.grid !== this && !o._temporaryRemoved && o.grid._leave(s, a), a = a || s, t = this.cellWidth(), e = this.getCellHeight(!0), !o) {
        const c = a.getAttribute("data-gs-widget") || a.getAttribute("gridstacknode");
        if (c) {
          try {
            o = JSON.parse(c);
          } catch {
            console.error("Gridstack dropover: Bad JSON format: ", c);
          }
          a.removeAttribute("data-gs-widget"), a.removeAttribute("gridstacknode");
        }
        o || (o = this._readAttr(a)), o._sidebarOrig = { w: o.w, h: o.h };
      }
      o.grid || (o.el || (o = { ...o }), o._isExternal = !0, a.gridstackNode = o);
      const l = o.w || Math.round(a.offsetWidth / t) || 1, d = o.h || Math.round(a.offsetHeight / e) || 1;
      return o.grid && o.grid !== this ? (s._gridstackNodeOrig || (s._gridstackNodeOrig = o), s.gridstackNode = o = { ...o, w: l, h: d, grid: this }, delete o.x, delete o.y, this.engine.cleanupNode(o).nodeBoundFix(o), o._initDD = o._isExternal = // DOM needs to be re-parented on a drop
      o._temporaryRemoved = !0) : (o.w = l, o.h = d, o._temporaryRemoved = !0), M._itemRemoving(o.el, !1), oe.on(s, "drag", n), n(i, s, a), !1;
    }).on(this.el, "dropout", (i, s, a) => {
      const o = a?.gridstackNode || s.gridstackNode;
      return o && (!o.grid || o.grid === this) && (this._leave(s, a), this._isTemp && this.removeAsSubGrid(o)), !1;
    }).on(this.el, "drop", (i, s, a) => {
      const o = a?.gridstackNode || s.gridstackNode;
      if (o?.grid === this && !o._isExternal)
        return !1;
      const l = !!this.placeholder.parentElement, d = s !== a;
      this.placeholder.remove(), delete this.placeholder.gridstackNode, l && this.opts.animate && (this.setAnimation(!1), this.setAnimation(!0, !0));
      const c = s._gridstackNodeOrig;
      if (delete s._gridstackNodeOrig, l && c?.grid && c.grid !== this) {
        const f = c.grid;
        f.engine.removeNodeFromLayoutCache(c), f.engine.removedNodes.push(c), f._triggerRemoveEvent()._triggerChangeEvent(), f.parentGridNode && !f.engine.nodes.length && f.opts.subGridDynamic && f.removeAsSubGrid();
      }
      if (!o || (l && (this.engine.cleanupNode(o), o.grid = this), delete o.grid?._isTemp, oe.off(s, "drag"), a !== s ? (a.remove(), s = a) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = o.subGrid?.el?.gridstack;
      return m.copyPos(o, this._readAttr(this.placeholder)), m.removePositioningStyles(s), d && (o.content || o.subGridOpts || M.addRemoveCB) ? (delete o.el, s = this.addWidget(o)) : (this._prepareElement(s, !0, o), this.el.appendChild(s), this.resizeToContentCheck(!1, o), u && (u.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, c && c.grid ? c : void 0, o), !1;
    }), this;
  }
  /** @internal mark item for removal */
  static _itemRemoving(e, t) {
    if (!e)
      return;
    const n = e ? e.gridstackNode : void 0;
    !n?.grid || e.classList.contains(n.grid.opts.removableOptions.decline) || (t ? n._isAboutToRemove = !0 : delete n._isAboutToRemove, t ? e.classList.add("grid-stack-item-removing") : e.classList.remove("grid-stack-item-removing"));
  }
  /** @internal called to setup a trash drop zone if the user specifies it */
  _setupRemoveDrop() {
    if (typeof this.opts.removable != "string")
      return this;
    const e = document.querySelector(this.opts.removable);
    return e ? (!this.opts.staticGrid && !oe.isDroppable(e) && oe.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => M._itemRemoving(n, !0)).on(e, "dropout", (t, n) => M._itemRemoving(n, !1)), this) : this;
  }
  /**
   * prepares the element for drag&drop - this is normally called by makeWidget() unless are are delay loading
   * @param el GridItemHTMLElement of the widget
   * @param [force=false]
   * */
  prepareDragDrop(e, t = !1) {
    const n = e?.gridstackNode;
    if (!n)
      return;
    const i = n.noMove || this.opts.disableDrag, s = n.noResize || this.opts.disableResize, a = this.opts.staticGrid || i && s;
    if ((t || a) && (n._initDD && (this._removeDD(e), delete n._initDD), a && e.classList.add("ui-draggable-disabled", "ui-resizable-disabled"), !t))
      return this;
    if (!n._initDD) {
      let o, l;
      const d = (f, p) => {
        this.triggerEvent(f, f.target), o = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, f, p, n, o, l);
      }, c = (f, p) => {
        this._dragOrResize(e, f, p, n, o, l);
      }, u = (f) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete n._moving, delete n._resizing, delete n._event, delete n._lastTried;
        const p = n.w !== n._orig.w, C = f.target;
        if (!(!C.gridstackNode || C.gridstackNode.grid !== this)) {
          if (n.el = C, n._isAboutToRemove) {
            const v = e.gridstackNode.grid;
            v._gsEventHandler[f.type] && v._gsEventHandler[f.type](f, C), v.engine.nodes.push(n), v.removeWidget(e, !0, !0);
          } else
            m.removePositioningStyles(C), n._temporaryRemoved ? (this._writePosAttr(C, n), this.engine.addNode(n)) : this._writePosAttr(C, n), this.triggerEvent(f, C);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), f.type === "resizestop" && (Number.isInteger(n.sizeToContent) && (n.sizeToContent = n.h), this.resizeToContentCheck(p, n));
        }
      };
      oe.draggable(e, {
        start: d,
        stop: u,
        drag: c
      }).resizable(e, {
        start: d,
        stop: u,
        resize: c
      }), n._initDD = !0;
    }
    return oe.draggable(e, i ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, n, i, s, a) {
    if (this.engine.cleanNodes().beginUpdate(i), this._writePosAttr(this.placeholder, i), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = i, i.grid?.el)
      this.dragTransform = m.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const o = this.placeholder.closest(".grid-stack");
      this.dragTransform = m.getValuesFromTransformedElement(o);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (i.el = this.placeholder, i._lastUiPosition = n.position, i._prevYPix = n.position.top, i._moving = t.type === "dragstart", i._resizing = t.type === "resizestart", delete i._lastTried, t.type === "dropover" && i._temporaryRemoved && (this.engine.addNode(i), i._moving = !0), this.engine.cacheRects(s, a, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const o = this.getColumn() - i.x, l = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - i.y;
      oe.resizable(e, "option", "minWidth", s * Math.min(i.minW || 1, o)).resizable(e, "option", "minHeight", a * Math.min(i.minH || 1, l)).resizable(e, "option", "maxWidth", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, o)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, i.x + i.w)).resizable(e, "option", "maxHeight", a * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", a * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, i.y + i.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, n, i, s, a) {
    const o = { ...i._orig };
    let l, d = this.opts.marginLeft, c = this.opts.marginRight, u = this.opts.marginTop, f = this.opts.marginBottom;
    const p = Math.round(a * 0.1), C = Math.round(s * 0.1);
    if (d = Math.min(d, C), c = Math.min(c, C), u = Math.min(u, p), f = Math.min(f, p), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const x = n.position.top - i._prevYPix;
      i._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && m.updateScrollPosition(e, n.position, x);
      const k = n.position.left + (n.position.left > i._lastUiPosition.left ? -c : d), D = n.position.top + (n.position.top > i._lastUiPosition.top ? -f : u);
      o.x = Math.round(k / s), o.y = Math.round(D / a);
      const _ = this._extraDragRow;
      if (this.engine.collide(i, o)) {
        const S = this.getRow();
        let y = Math.max(0, o.y + i.h - S);
        this.opts.maxRow && S + y > this.opts.maxRow && (y = Math.max(0, this.opts.maxRow - S)), this._extraDragRow = y;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== _ && this._updateContainerHeight(), i.x === o.x && i.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (m.updateScrollResize(t, e, a), o.w = Math.round((n.size.width - d) / s), o.h = Math.round((n.size.height - u) / a), i.w === o.w && i.h === o.h) || i._lastTried && i._lastTried.w === o.w && i._lastTried.h === o.h)
        return;
      const x = n.position.left + d, k = n.position.top + u;
      o.x = Math.round(x / s), o.y = Math.round(k / a), l = !0;
    }
    i._event = t, i._lastTried = o;
    const v = {
      x: n.position.left + d,
      y: n.position.top + u,
      w: (n.size ? n.size.width : i.w * s) - d - c,
      h: (n.size ? n.size.height : i.h * a) - u - f
    };
    if (this.engine.moveNodeCheck(i, { ...o, cellWidth: s, cellHeight: a, rect: v, resizing: l })) {
      i._lastUiPosition = n.position, this.engine.cacheRects(s, a, u, c, f, d), delete i._skipDown, l && i.subGrid && i.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const x = t.target;
      i._sidebarOrig || this._writePosAttr(x, i), this.triggerEvent(t, x);
    }
  }
  /** call given event callback on our main top-most grid (if we're nested) */
  triggerEvent(e, t) {
    let n = this;
    for (; n.parentGridNode; )
      n = n.parentGridNode.grid;
    n._gsEventHandler[e.type] && n._gsEventHandler[e.type](e, t);
  }
  /** @internal called when item leaving our area by either cursor dropout event
   * or shape is outside our boundaries. remove it from us, and mark temporary if this was
   * our item to start with else restore prev node values from prev grid it came from.
   */
  _leave(e, t) {
    t = t || e;
    const n = t.gridstackNode;
    if (!n || (t.style.transform = t.style.transformOrigin = null, oe.off(e, "drag"), n._temporaryRemoved))
      return;
    n._temporaryRemoved = !0, this.engine.removeNode(n), n.el = n._isExternal && t ? t : e;
    const i = n._sidebarOrig;
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = i, this.opts.removable === !0 && M._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return El(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
M.renderCB = (r, e) => {
  r && e?.content && (r.textContent = e.content);
};
M.resizeToContentParent = ".grid-stack-item-content";
M.Utils = m;
M.Engine = We;
M.GDRev = "12.3.2";
const ur = /* @__PURE__ */ new WeakMap();
function Rl({ children: r }) {
  const { _gridStack: { value: e, set: t }, options: n } = ps(), i = j(/* @__PURE__ */ new Map()), s = j(null), a = j(n), o = ee((c, u) => {
    if (u.id && u.grid) {
      let f = ur.get(u.grid);
      f || (f = /* @__PURE__ */ new Map(), ur.set(u.grid, f)), f.set(u.id, c), i.current.set(u.id, c);
    }
  }, []), l = ee(() => {
    if (s.current) {
      M.renderCB = o;
      const c = M.init(a.current, s.current);
      return c && a.current.handle && c.opts && (c.opts.handle = a.current.handle), c;
    }
    return null;
  }, [o]), d = (c, u) => {
    const { children: f, ...p } = c, { children: C, ...v } = u;
    return rs(p, v);
  };
  return sn(() => {
    if (!d(n, a.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), ur.delete(e), a.current = n, t(null);
      } catch (c) {
        console.error("Error destroying gridstack", c);
      }
    else e && (a.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), sn(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, l, t]), h(ms.Provider, {
    value: $(() => ({
      getWidgetContainer: (c) => {
        if (e) {
          const u = ur.get(e);
          if (u?.has(c))
            return u.get(c) || null;
        }
        return i.current.get(c) || null;
      }
    }), [e]),
    children: h("div", {
      ref: s,
      children: e ? r : null
    })
  });
}
const En = ({ options: r, widgets: e, onChange: t, className: n }) => {
  const i = $(() => JSON.stringify(e.map((l) => ({
    id: l.id,
    w: l.w,
    h: l.h,
    x: l.x,
    y: l.y,
    noMove: l.noMove,
    noResize: l.noResize,
    locked: l.locked,
    content: l.content?.toString() ?? "",
    _originalContent: l._originalContent?.toString() ?? "",
    allowedSizes: l.allowedSizes
  }))), [e]), s = $(() => ({
    ...r,
    class: n
  }), [r, i, n]), a = (l, d, c) => {
    let u = c[0], f = 1 / 0;
    for (const p of c) {
      const C = p.w - l, v = p.h - d, x = C * C + v * v;
      x < f && (f = x, u = p);
    }
    return u;
  };
  return h(xl, {
    options: s,
    widgets: e,
    onResizeStop: (l, d) => {
      const c = d.gridstackNode;
      if (!c) return;
      const u = d.gridstackNode?.allowedSizes ?? [];
      if (u.length === 0)
        return;
      const f = a(c.w ?? 1, c.h ?? 1, u ?? []);
      (c.w !== f.w || c.h !== f.h) && c.grid?.update(d, {
        w: f.w,
        h: f.h
      });
    },
    onChange: t,
    children: h(Rl, {
      children: h(Cl, {})
    })
  });
};
En.displayName = "F0GridStack";
const Dl = (r, e, t) => h("div", {
  children: r
}), Mr = ({ widgets: r = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: n = Dl, main: i = !1, deps: s }) => {
  const a = ee((y, b, g) => h(yn.div, {
    className: "h-full w-full",
    initial: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)"
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    transition: {
      opacity: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      },
      scale: {
        type: "spring",
        stiffness: 100,
        damping: 6,
        mass: 0.5
      },
      filter: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    children: n(y, b, g)
  }), [n]), o = $(() => ({
    acceptWidgets: !0,
    margin: 8,
    handle: "[data-gs-handle='true']",
    column: 4,
    columnOpts: {
      breakpointForWindow: !0,
      breakpoints: [{
        c: 1,
        w: 700
      }, {
        c: 3,
        w: 850
      }, {
        c: 6,
        w: 950
      }, {
        c: 8,
        w: 1100
      }],
      columnMax: 4
    }
  }), []), l = (y, b) => {
    if (typeof y.content == "function" && y.deps && b) {
      const g = {};
      return y.deps.forEach((w) => {
        typeof w == "string" && b[w] !== void 0 && (g[w] = b[w]);
      }), y.content(g);
    }
    return typeof y.content == "function" ? null : y.content;
  }, d = (y, b, g) => y.map((w) => {
    const I = l(w, g), T = {
      id: w.id,
      h: w.h ?? 1,
      w: w.w ?? 1,
      allowedSizes: w.availableSizes,
      noMove: !b,
      noResize: !b,
      locked: w.locked,
      meta: w.meta,
      _originalContent: I,
      content: a(I, w.meta, b)
    };
    return w.x !== void 0 && (T.x = w.x), w.y !== void 0 && (T.y = w.y), T;
  }), [c, u] = U(d(r, e)), f = j(e), p = j(r), C = j(!1), v = j(/* @__PURE__ */ new Map()), x = j(r);
  x.current = r;
  const k = j(s), D = $(() => {
    const y = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || r.forEach((b) => {
      if (b.deps && b.deps.length > 0) {
        const g = b.deps.map((w) => typeof w == "string" && s[w] !== void 0 ? s[w] : w).filter((w) => w !== null);
        y.set(b.id, g);
      }
    }), y;
  }, [r, s]), _ = ee((y) => {
    u(y), C.current || t(y.map((b) => {
      const g = x.current.find((w) => w.id === b.id);
      return {
        id: b.id,
        w: b.w ?? 1,
        h: b.h ?? 1,
        allowedSizes: b.allowedSizes,
        meta: b.meta,
        content: typeof g?.content == "function" ? g.content : b._originalContent,
        x: b.x ?? 0,
        y: b.y ?? 0,
        locked: b.locked,
        deps: g?.deps
      };
    })), C.current = !1;
  }, [t]), S = (y, b) => !y && !b ? !1 : !y || !b || y.length !== b.length ? !0 : y.some((g, w) => g !== b[w]);
  return G(() => {
    const y = f.current !== e, b = p.current !== r, g = k.current !== s && (k.current === void 0 || s === void 0 || Object.keys(k.current).length !== Object.keys(s).length || Object.keys(s).some((E) => k.current?.[E] !== s[E])), w = /* @__PURE__ */ new Map();
    r.forEach((E) => {
      if (E.deps && E.deps.length > 0) {
        const R = v.current.get(E.id), A = D.get(E.id);
        w.set(E.id, S(R, A)), A ? v.current.set(E.id, A) : v.current.delete(E.id);
      }
    });
    const I = new Set(r.map((E) => E.id));
    v.current.forEach((E, R) => {
      I.has(R) || v.current.delete(R);
    });
    const T = Array.from(w.values()).some((E) => E) || g;
    y && !b && !T ? (C.current = !0, u((E) => E.map((R) => {
      const A = r.find((ce) => ce.id === R.id);
      if (!A)
        return R;
      const Z = l(A, s);
      return {
        ...R,
        noMove: !e,
        noResize: !e,
        locked: A.locked,
        meta: A.meta,
        _originalContent: Z,
        content: a(Z, A.meta, e)
      };
    }))) : (b || T) && u((E) => {
      const R = new Map(E.map((A) => [A.id, A]));
      return r.map((A) => {
        const Z = R.get(A.id), ce = w.get(A.id) ?? !1;
        let de;
        ce || !Z ? de = l(A, s) : de = Z._originalContent ?? l(A, s);
        const te = {
          id: A.id,
          h: Z?.h ?? A.h ?? 1,
          w: Z?.w ?? A.w ?? 1,
          allowedSizes: A.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: A.locked,
          meta: A.meta,
          _originalContent: de,
          content: a(de, A.meta, e)
        }, Ee = Z?.x ?? A.x, Q = Z?.y ?? A.y;
        return Ee !== void 0 && (te.x = Ee), Q !== void 0 && (te.y = Q), te;
      });
    }), f.current = e, p.current = r, k.current = s;
  }, [r, e, a, D, s]), h(En, {
    className: K(i && "h-full flex-1 overflow-auto"),
    options: o,
    onChange: _,
    widgets: c
  });
};
Mr.displayName = "GroupGrid";
Mr.__isPageLayoutGroup = !0;
const Tl = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutBlock = !0, t;
}, Al = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutGroup = !0, t;
}, Ol = (r, e) => h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: e,
  ...r,
  children: h("path", {
    fill: "currentColor",
    d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
    vectorEffect: "non-scaling-stroke"
  })
}), vs = ve(Ol), zl = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], ys = ve((r, e) => {
  const t = zl.reduce((n, i) => {
    const { [i]: s, ...a } = n;
    return a;
  }, r);
  return h(bn, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: r.icon == vs
  });
});
ys.displayName = "AIButton";
const Kr = ht({
  base: "text-base text-f1-foreground",
  variants: {
    variant: {
      // -- PUBLIC VARIANTS
      // Heading
      heading: "text-lg font-semibold",
      // Body
      body: "",
      description: "text-f1-foreground-secondary",
      small: "text-sm font-medium text-f1-foreground-secondary",
      inverse: "text-f1-foreground-inverse",
      code: "text-f1-foreground-secondary",
      // Label
      label: "font-medium",
      // -- PRIVATE VARIANTS
      // Heading
      "heading-large": "text-2xl font-semibold",
      // Label
      "label-input": "font-medium text-f1-foreground-secondary",
      // Semantic text
      selected: "font-medium text-f1-foreground-selected",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      positive: "text-f1-foreground-positive",
      info: "text-f1-foreground-info",
      "warning-strong": "font-semibold text-f1-foreground-warning",
      "critical-strong": "font-semibold text-f1-foreground-critical",
      "positive-strong": "font-semibold text-f1-foreground-positive",
      "info-strong": "font-semibold text-f1-foreground-info"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "body",
    align: "left"
  }
}), Ll = {
  "heading-large": "h1",
  heading: "h2",
  body: "p",
  description: "p",
  label: "p",
  "label-input": "label",
  small: "p",
  selected: "p",
  inverse: "p",
  warning: "p",
  critical: "p",
  positive: "p",
  info: "p",
  "warning-strong": "p",
  "critical-strong": "p",
  "positive-strong": "p",
  "info-strong": "p",
  code: "code"
}, kn = ve(({ content: r, variant: e, align: t, className: n, as: i, ellipsis: s, noEllipsisTooltip: a, markdown: o, ...l }, d) => {
  const c = i ?? Ll[e ?? "body"];
  if (s !== void 0)
    return h(_a, {
      ref: d,
      lines: typeof s == "number" ? s : 1,
      noTooltip: a,
      tag: c,
      className: K(Kr({
        variant: e,
        align: t
      }), n),
      markdown: o,
      ...l,
      children: r
    });
  if (o) {
    const u = wa(r);
    return Jn(c, {
      ...l,
      className: K(Kr({
        variant: e,
        align: t
      }), n),
      ref: d,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return Jn(c, {
    ...l,
    className: K(Kr({
      variant: e,
      align: t
    }), n),
    ref: d
  }, r);
});
kn.displayName = "Text";
const bs = ve((r, e) => h(kn, {
  ref: e,
  markdown: r.markdown ?? !0,
  ...r
}));
bs.displayName = "F0Text";
const Hh = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], xs = ({ title: r, draggable: e = !1, onDragStart: t, onDragEnd: n, isDragging: i = !1, AIButton: s, actions: a, children: o, selected: l = !1 }) => {
  const [d, c] = U(!1), [u, f] = U(!1), p = xn(), C = (x) => {
    c(x);
  }, v = u || d;
  return G(() => {
    if (!i || !n) return;
    const x = () => {
      n();
    };
    return document.addEventListener("mouseup", x), () => {
      document.removeEventListener("mouseup", x);
    };
  }, [i, n]), P("div", {
    className: K("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && d ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => f(!0),
    onMouseLeave: () => f(!1),
    children: [P("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [P("div", {
        className: K("flex min-w-0 flex-1 items-center", !e && "pl-4", !a && !s && "pr-4"),
        children: [e && h("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: h($i, {
            icon: Ca,
            size: "xs"
          })
        }), h("div", {
          className: K("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: h(bs, {
            variant: "label",
            content: r,
            ellipsis: !0
          })
        })]
      }), h(Ea, {
        children: (s || a) && v && P(yn.div, {
          className: K("flex shrink-0 items-center gap-0.5 pr-2", !a && "pr-4"),
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          transition: {
            duration: 0.2,
            ease: [0.33, 1, 0.68, 1]
          },
          children: [s && h("div", {
            className: "flex h-6 items-center",
            children: h(ys, {
              size: "sm",
              label: p.ai.ask,
              onClick: s,
              icon: vs
            })
          }), a && h(ka, {
            items: a,
            open: d,
            onOpenChange: C,
            align: "end",
            children: h(bn, {
              icon: Sa,
              label: "Actions",
              variant: "ghost",
              size: "md",
              hideLabel: !0,
              noAutoTooltip: !0,
              noTitle: !0,
              pressed: d
            })
          })]
        })
      })]
    }), h("div", {
      className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4",
      children: o
    })]
  });
}, Pl = () => P("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [h("div", {
    className: "flex h-12 w-full items-center px-4",
    children: h(Me, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), P("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [h(Me, {
      className: "h-1/2 w-full rounded-sm"
    }), h(Me, {
      className: "h-1/3 w-full rounded-sm"
    }), h(Me, {
      className: "h-1/5 w-full rounded-sm"
    }), h(Me, {
      className: "h-1/3 w-full rounded-sm"
    }), h(Me, {
      className: "h-full w-full rounded-sm"
    }), h(Me, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
xs.displayName = "F0Widget";
const Ml = ji(xs, Pl), Il = ({ children: r, title: e, draggable: t = !1, actions: n, aiButton: i }) => h(Ml, {
  title: e,
  draggable: t,
  actions: n,
  AIButton: i,
  children: r
}), _s = ({ widgets: r, editMode: e = !1, onChange: t = () => {
}, deps: n, ...i }) => h(Mr, {
  widgets: r,
  editMode: e,
  onChange: t,
  deps: n,
  ...i,
  WidgetWrapper: (s, a, o) => h(Il, {
    title: a?.title ?? "",
    draggable: o,
    actions: a?.actions,
    aiButton: a?.aiButton,
    children: s
  })
});
_s.displayName = "Dashboard";
const Fl = Al("Dashboard", _s), jh = we("Dashboard", Fl), Bl = ht({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Hl = (r) => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), jl = (r) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(r) ? r.every(e) ? [{
    items: r
  }] : r : [r];
}, Ir = ve(({ children: r, variant: e = "default", className: t, draggable: n = !1, onDragStart: i, onDragEnd: s, onDrop: a, dragId: o, primaryAction: l, ...d }, c) => {
  const u = $(() => jl(d.actions || []), [d.actions]), f = $(() => u.flatMap((C) => C.items), [u]), p = $(() => f.length > 0 || !!l, [f, l]);
  return P("div", {
    ref: c,
    className: K(Bl({
      variant: e
    }), "relative", t),
    draggable: n,
    onDragStart: i,
    onDragEnd: s,
    onDrop: a,
    "data-drag-id": o,
    ...d,
    children: [p && P("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, f.length > 0 && h(oo, {
        items: Hl(u)
      })]
    }), h("div", {
      children: r
    })]
  });
});
Ir.displayName = "Block";
Ir.__isPageLayoutBlock = !0;
const $l = ({ title: r = "", description: e, titleLevel: t = "h2", children: n, className: i, ...s }) => {
  if (!r) return null;
  const a = t;
  return P(Ir, {
    ...s,
    className: K("space-y-4", i),
    children: [P("div", {
      className: "space-y-2",
      children: [h(a, {
        className: K("font-semibold text-f1-foreground", {
          "text-2xl": t === "h1",
          "text-xl": t === "h2",
          "text-lg": t === "h3",
          "text-base": t === "h4",
          "text-sm": t === "h5",
          "text-xs": t === "h6"
        }),
        children: r
      }), e && h("p", {
        className: "text-sm text-f1-foreground-secondary",
        children: e
      })]
    }), h("div", {
      className: "flex-1",
      children: n
    })]
  });
}, Wl = Tl("BlockContent", $l), Gl = (r) => !Qi(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutBlock" in r.type, Ul = (r) => !Qi(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutGroup" in r.type, ws = (r, e, t) => {
  const n = gr.toArray(e);
  for (const i of n)
    t.includes("block") && Gl(i) || t.includes("group") && Ul(i) || console.warn(
      `${r}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, Sn = ve(({ children: r, onSort: e, ...t }, n) => {
  ws("GroupLinear", r, ["block"]);
  const [i, s] = U(gr.toArray(r));
  return G(() => {
    s(gr.toArray(r));
  }, [r]), G(() => {
    e?.(i);
  }, [i, e]), h("div", {
    ref: n,
    ...t,
    children: i.map((a, o) => h(to, {
      children: a
    }, o))
  });
});
Sn.displayName = "GroupLinear";
Sn.__isPageLayoutGroup = !0;
function Vl() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return $(
    () => (n) => {
      e.forEach((i) => i(n));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const Fr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Dt(r) {
  const e = Object.prototype.toString.call(r);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Nn(r) {
  return "nodeType" in r;
}
function le(r) {
  var e, t;
  return r ? Dt(r) ? r : Nn(r) && (e = (t = r.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Rn(r) {
  const {
    Document: e
  } = le(r);
  return r instanceof e;
}
function er(r) {
  return Dt(r) ? !1 : r instanceof le(r).HTMLElement;
}
function Cs(r) {
  return r instanceof le(r).SVGElement;
}
function Tt(r) {
  return r ? Dt(r) ? r.document : Nn(r) ? Rn(r) ? r : er(r) || Cs(r) ? r.ownerDocument : document : document : document;
}
const Te = Fr ? sn : G;
function Br(r) {
  const e = j(r);
  return Te(() => {
    e.current = r;
  }), ee(function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function Zl() {
  const r = j(null), e = ee((n, i) => {
    r.current = setInterval(n, i);
  }, []), t = ee(() => {
    r.current !== null && (clearInterval(r.current), r.current = null);
  }, []);
  return [e, t];
}
function qt(r, e) {
  e === void 0 && (e = [r]);
  const t = j(r);
  return Te(() => {
    t.current !== r && (t.current = r);
  }, e), t;
}
function tr(r, e) {
  const t = j();
  return $(
    () => {
      const n = r(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function wr(r) {
  const e = Br(r), t = j(null), n = ee(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function Cr(r) {
  const e = j();
  return G(() => {
    e.current = r;
  }, [r]), e.current;
}
let Jr = {};
function rr(r, e) {
  return $(() => {
    if (e)
      return e;
    const t = Jr[r] == null ? 0 : Jr[r] + 1;
    return Jr[r] = t, r + "-" + t;
  }, [r, e]);
}
function Es(r) {
  return function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      n[i - 1] = arguments[i];
    return n.reduce((s, a) => {
      const o = Object.entries(a);
      for (const [l, d] of o) {
        const c = s[l];
        c != null && (s[l] = c + r * d);
      }
      return s;
    }, {
      ...e
    });
  };
}
const wt = /* @__PURE__ */ Es(1), Yt = /* @__PURE__ */ Es(-1);
function ql(r) {
  return "clientX" in r && "clientY" in r;
}
function Hr(r) {
  if (!r)
    return !1;
  const {
    KeyboardEvent: e
  } = le(r.target);
  return e && r instanceof e;
}
function Yl(r) {
  if (!r)
    return !1;
  const {
    TouchEvent: e
  } = le(r.target);
  return e && r instanceof e;
}
function Er(r) {
  if (Yl(r)) {
    if (r.touches && r.touches.length) {
      const {
        clientX: e,
        clientY: t
      } = r.touches[0];
      return {
        x: e,
        y: t
      };
    } else if (r.changedTouches && r.changedTouches.length) {
      const {
        clientX: e,
        clientY: t
      } = r.changedTouches[0];
      return {
        x: e,
        y: t
      };
    }
  }
  return ql(r) ? {
    x: r.clientX,
    y: r.clientY
  } : null;
}
const st = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(r) {
      if (!r)
        return;
      const {
        x: e,
        y: t
      } = r;
      return "translate3d(" + (e ? Math.round(e) : 0) + "px, " + (t ? Math.round(t) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(r) {
      if (!r)
        return;
      const {
        scaleX: e,
        scaleY: t
      } = r;
      return "scaleX(" + e + ") scaleY(" + t + ")";
    }
  },
  Transform: {
    toString(r) {
      if (r)
        return [st.Translate.toString(r), st.Scale.toString(r)].join(" ");
    }
  },
  Transition: {
    toString(r) {
      let {
        property: e,
        duration: t,
        easing: n
      } = r;
      return e + " " + t + "ms " + n;
    }
  }
}), ai = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Xl(r) {
  return r.matches(ai) ? r : r.querySelector(ai);
}
const Kl = {
  display: "none"
};
function Jl(r) {
  let {
    id: e,
    value: t
  } = r;
  return W.createElement("div", {
    id: e,
    style: Kl
  }, t);
}
function Ql(r) {
  let {
    id: e,
    announcement: t,
    ariaLiveType: n = "assertive"
  } = r;
  const i = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return W.createElement("div", {
    id: e,
    style: i,
    role: "status",
    "aria-live": n,
    "aria-atomic": !0
  }, t);
}
function ec() {
  const [r, e] = U("");
  return {
    announce: ee((n) => {
      n != null && e(n);
    }, []),
    announcement: r
  };
}
const ks = /* @__PURE__ */ Fe(null);
function tc(r) {
  const e = De(ks);
  G(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(r);
  }, [r, e]);
}
function rc() {
  const [r] = U(() => /* @__PURE__ */ new Set()), e = ee((n) => (r.add(n), () => r.delete(n)), [r]);
  return [ee((n) => {
    let {
      type: i,
      event: s
    } = n;
    r.forEach((a) => {
      var o;
      return (o = a[i]) == null ? void 0 : o.call(a, s);
    });
  }, [r]), e];
}
const nc = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, ic = {
  onDragStart(r) {
    let {
      active: e
    } = r;
    return "Picked up draggable item " + e.id + ".";
  },
  onDragOver(r) {
    let {
      active: e,
      over: t
    } = r;
    return t ? "Draggable item " + e.id + " was moved over droppable area " + t.id + "." : "Draggable item " + e.id + " is no longer over a droppable area.";
  },
  onDragEnd(r) {
    let {
      active: e,
      over: t
    } = r;
    return t ? "Draggable item " + e.id + " was dropped over droppable area " + t.id : "Draggable item " + e.id + " was dropped.";
  },
  onDragCancel(r) {
    let {
      active: e
    } = r;
    return "Dragging was cancelled. Draggable item " + e.id + " was dropped.";
  }
};
function sc(r) {
  let {
    announcements: e = ic,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = nc
  } = r;
  const {
    announce: s,
    announcement: a
  } = ec(), o = rr("DndLiveRegion"), [l, d] = U(!1);
  if (G(() => {
    d(!0);
  }, []), tc($(() => ({
    onDragStart(u) {
      let {
        active: f
      } = u;
      s(e.onDragStart({
        active: f
      }));
    },
    onDragMove(u) {
      let {
        active: f,
        over: p
      } = u;
      e.onDragMove && s(e.onDragMove({
        active: f,
        over: p
      }));
    },
    onDragOver(u) {
      let {
        active: f,
        over: p
      } = u;
      s(e.onDragOver({
        active: f,
        over: p
      }));
    },
    onDragEnd(u) {
      let {
        active: f,
        over: p
      } = u;
      s(e.onDragEnd({
        active: f,
        over: p
      }));
    },
    onDragCancel(u) {
      let {
        active: f,
        over: p
      } = u;
      s(e.onDragCancel({
        active: f,
        over: p
      }));
    }
  }), [s, e])), !l)
    return null;
  const c = W.createElement(W.Fragment, null, W.createElement(Jl, {
    id: n,
    value: i.draggable
  }), W.createElement(Ql, {
    id: o,
    announcement: a
  }));
  return t ? es(c, t) : c;
}
var ne;
(function(r) {
  r.DragStart = "dragStart", r.DragMove = "dragMove", r.DragEnd = "dragEnd", r.DragCancel = "dragCancel", r.DragOver = "dragOver", r.RegisterDroppable = "registerDroppable", r.SetDroppableDisabled = "setDroppableDisabled", r.UnregisterDroppable = "unregisterDroppable";
})(ne || (ne = {}));
function kr() {
}
function oi(r, e) {
  return $(
    () => ({
      sensor: r,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, e]
  );
}
function ac() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return $(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const Ae = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function oc(r, e) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function lc(r, e) {
  const t = Er(r);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function cc(r, e) {
  let {
    data: {
      value: t
    }
  } = r, {
    data: {
      value: n
    }
  } = e;
  return t - n;
}
function dc(r, e) {
  let {
    data: {
      value: t
    }
  } = r, {
    data: {
      value: n
    }
  } = e;
  return n - t;
}
function li(r) {
  let {
    left: e,
    top: t,
    height: n,
    width: i
  } = r;
  return [{
    x: e,
    y: t
  }, {
    x: e + i,
    y: t
  }, {
    x: e,
    y: t + n
  }, {
    x: e + i,
    y: t + n
  }];
}
function Ss(r, e) {
  if (!r || r.length === 0)
    return null;
  const [t] = r;
  return t[e];
}
const uc = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = li(e), s = [];
  for (const a of n) {
    const {
      id: o
    } = a, l = t.get(o);
    if (l) {
      const d = li(l), c = i.reduce((f, p, C) => f + oc(d[C], p), 0), u = Number((c / 4).toFixed(4));
      s.push({
        id: o,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(cc);
};
function hc(r, e) {
  const t = Math.max(e.top, r.top), n = Math.max(e.left, r.left), i = Math.min(e.left + e.width, r.left + r.width), s = Math.min(e.top + e.height, r.top + r.height), a = i - n, o = s - t;
  if (n < i && t < s) {
    const l = e.width * e.height, d = r.width * r.height, c = a * o, u = c / (l + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const fc = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = [];
  for (const s of n) {
    const {
      id: a
    } = s, o = t.get(a);
    if (o) {
      const l = hc(o, e);
      l > 0 && i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(dc);
};
function pc(r, e, t) {
  return {
    ...r,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Ns(r, e) {
  return r && e ? {
    x: r.left - e.left,
    y: r.top - e.top
  } : Ae;
}
function mc(r) {
  return function(t) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      i[s - 1] = arguments[s];
    return i.reduce((a, o) => ({
      ...a,
      top: a.top + r * o.y,
      bottom: a.bottom + r * o.y,
      left: a.left + r * o.x,
      right: a.right + r * o.x
    }), {
      ...t
    });
  };
}
const gc = /* @__PURE__ */ mc(1);
function Rs(r) {
  if (r.startsWith("matrix3d(")) {
    const e = r.slice(9, -1).split(/, /);
    return {
      x: +e[12],
      y: +e[13],
      scaleX: +e[0],
      scaleY: +e[5]
    };
  } else if (r.startsWith("matrix(")) {
    const e = r.slice(7, -1).split(/, /);
    return {
      x: +e[4],
      y: +e[5],
      scaleX: +e[0],
      scaleY: +e[3]
    };
  }
  return null;
}
function vc(r, e, t) {
  const n = Rs(e);
  if (!n)
    return r;
  const {
    scaleX: i,
    scaleY: s,
    x: a,
    y: o
  } = n, l = r.left - a - (1 - i) * parseFloat(t), d = r.top - o - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), c = i ? r.width / i : r.width, u = s ? r.height / s : r.height;
  return {
    width: c,
    height: u,
    top: d,
    right: l + c,
    bottom: d + u,
    left: l
  };
}
const yc = {
  ignoreTransform: !1
};
function At(r, e) {
  e === void 0 && (e = yc);
  let t = r.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: c
    } = le(r).getComputedStyle(r);
    d && (t = vc(t, d, c));
  }
  const {
    top: n,
    left: i,
    width: s,
    height: a,
    bottom: o,
    right: l
  } = t;
  return {
    top: n,
    left: i,
    width: s,
    height: a,
    bottom: o,
    right: l
  };
}
function ci(r) {
  return At(r, {
    ignoreTransform: !0
  });
}
function bc(r) {
  const e = r.innerWidth, t = r.innerHeight;
  return {
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
  };
}
function xc(r, e) {
  return e === void 0 && (e = le(r).getComputedStyle(r)), e.position === "fixed";
}
function _c(r, e) {
  e === void 0 && (e = le(r).getComputedStyle(r));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function jr(r, e) {
  const t = [];
  function n(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Rn(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!er(i) || Cs(i) || t.includes(i))
      return t;
    const s = le(r).getComputedStyle(i);
    return i !== r && _c(i, s) && t.push(i), xc(i, s) ? t : n(i.parentNode);
  }
  return r ? n(r) : t;
}
function Ds(r) {
  const [e] = jr(r, 1);
  return e ?? null;
}
function Qr(r) {
  return !Fr || !r ? null : Dt(r) ? r : Nn(r) ? Rn(r) || r === Tt(r).scrollingElement ? window : er(r) ? r : null : null;
}
function Ts(r) {
  return Dt(r) ? r.scrollX : r.scrollLeft;
}
function As(r) {
  return Dt(r) ? r.scrollY : r.scrollTop;
}
function on(r) {
  return {
    x: Ts(r),
    y: As(r)
  };
}
var ie;
(function(r) {
  r[r.Forward = 1] = "Forward", r[r.Backward = -1] = "Backward";
})(ie || (ie = {}));
function Os(r) {
  return !Fr || !r ? !1 : r === document.scrollingElement;
}
function zs(r) {
  const e = {
    x: 0,
    y: 0
  }, t = Os(r) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: r.clientHeight,
    width: r.clientWidth
  }, n = {
    x: r.scrollWidth - t.width,
    y: r.scrollHeight - t.height
  }, i = r.scrollTop <= e.y, s = r.scrollLeft <= e.x, a = r.scrollTop >= n.y, o = r.scrollLeft >= n.x;
  return {
    isTop: i,
    isLeft: s,
    isBottom: a,
    isRight: o,
    maxScroll: n,
    minScroll: e
  };
}
const wc = {
  x: 0.2,
  y: 0.2
};
function Cc(r, e, t, n, i) {
  let {
    top: s,
    left: a,
    right: o,
    bottom: l
  } = t;
  n === void 0 && (n = 10), i === void 0 && (i = wc);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: f
  } = zs(r), p = {
    x: 0,
    y: 0
  }, C = {
    x: 0,
    y: 0
  }, v = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !d && s <= e.top + v.height ? (p.y = ie.Backward, C.y = n * Math.abs((e.top + v.height - s) / v.height)) : !c && l >= e.bottom - v.height && (p.y = ie.Forward, C.y = n * Math.abs((e.bottom - v.height - l) / v.height)), !f && o >= e.right - v.width ? (p.x = ie.Forward, C.x = n * Math.abs((e.right - v.width - o) / v.width)) : !u && a <= e.left + v.width && (p.x = ie.Backward, C.x = n * Math.abs((e.left + v.width - a) / v.width)), {
    direction: p,
    speed: C
  };
}
function Ec(r) {
  if (r === document.scrollingElement) {
    const {
      innerWidth: s,
      innerHeight: a
    } = window;
    return {
      top: 0,
      left: 0,
      right: s,
      bottom: a,
      width: s,
      height: a
    };
  }
  const {
    top: e,
    left: t,
    right: n,
    bottom: i
  } = r.getBoundingClientRect();
  return {
    top: e,
    left: t,
    right: n,
    bottom: i,
    width: r.clientWidth,
    height: r.clientHeight
  };
}
function Ls(r) {
  return r.reduce((e, t) => wt(e, on(t)), Ae);
}
function kc(r) {
  return r.reduce((e, t) => e + Ts(t), 0);
}
function Sc(r) {
  return r.reduce((e, t) => e + As(t), 0);
}
function Ps(r, e) {
  if (e === void 0 && (e = At), !r)
    return;
  const {
    top: t,
    left: n,
    bottom: i,
    right: s
  } = e(r);
  Ds(r) && (i <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && r.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Nc = [["x", ["left", "right"], kc], ["y", ["top", "bottom"], Sc]];
class Dn {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = jr(t), i = Ls(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, a, o] of Nc)
      for (const l of a)
        Object.defineProperty(this, l, {
          get: () => {
            const d = o(n), c = i[s] - d;
            return this.rect[l] + c;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class jt {
  constructor(e) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((t) => {
        var n;
        return (n = this.target) == null ? void 0 : n.removeEventListener(...t);
      });
    }, this.target = e;
  }
  add(e, t, n) {
    var i;
    (i = this.target) == null || i.addEventListener(e, t, n), this.listeners.push([e, t, n]);
  }
}
function Rc(r) {
  const {
    EventTarget: e
  } = le(r);
  return r instanceof e ? r : Tt(r);
}
function en(r, e) {
  const t = Math.abs(r.x), n = Math.abs(r.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var _e;
(function(r) {
  r.Click = "click", r.DragStart = "dragstart", r.Keydown = "keydown", r.ContextMenu = "contextmenu", r.Resize = "resize", r.SelectionChange = "selectionchange", r.VisibilityChange = "visibilitychange";
})(_e || (_e = {}));
function di(r) {
  r.preventDefault();
}
function Dc(r) {
  r.stopPropagation();
}
var q;
(function(r) {
  r.Space = "Space", r.Down = "ArrowDown", r.Right = "ArrowRight", r.Left = "ArrowLeft", r.Up = "ArrowUp", r.Esc = "Escape", r.Enter = "Enter", r.Tab = "Tab";
})(q || (q = {}));
const Ms = {
  start: [q.Space, q.Enter],
  cancel: [q.Esc],
  end: [q.Space, q.Enter, q.Tab]
}, Tc = (r, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (r.code) {
    case q.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case q.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case q.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case q.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Tn {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new jt(Tt(t)), this.windowListeners = new jt(le(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(_e.Resize, this.handleCancel), this.windowListeners.add(_e.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(_e.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && Ps(n), t(Ae);
  }
  handleKeyDown(e) {
    if (Hr(e)) {
      const {
        active: t,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: s = Ms,
        coordinateGetter: a = Tc,
        scrollBehavior: o = "smooth"
      } = i, {
        code: l
      } = e;
      if (s.end.includes(l)) {
        this.handleEnd(e);
        return;
      }
      if (s.cancel.includes(l)) {
        this.handleCancel(e);
        return;
      }
      const {
        collisionRect: d
      } = n.current, c = d ? {
        x: d.left,
        y: d.top
      } : Ae;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const u = a(e, {
        active: t,
        context: n.current,
        currentCoordinates: c
      });
      if (u) {
        const f = Yt(u, c), p = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: C
        } = n.current;
        for (const v of C) {
          const x = e.code, {
            isTop: k,
            isRight: D,
            isLeft: _,
            isBottom: S,
            maxScroll: y,
            minScroll: b
          } = zs(v), g = Ec(v), w = {
            x: Math.min(x === q.Right ? g.right - g.width / 2 : g.right, Math.max(x === q.Right ? g.left : g.left + g.width / 2, u.x)),
            y: Math.min(x === q.Down ? g.bottom - g.height / 2 : g.bottom, Math.max(x === q.Down ? g.top : g.top + g.height / 2, u.y))
          }, I = x === q.Right && !D || x === q.Left && !_, T = x === q.Down && !S || x === q.Up && !k;
          if (I && w.x !== u.x) {
            const E = v.scrollLeft + f.x, R = x === q.Right && E <= y.x || x === q.Left && E >= b.x;
            if (R && !f.y) {
              v.scrollTo({
                left: E,
                behavior: o
              });
              return;
            }
            R ? p.x = v.scrollLeft - E : p.x = x === q.Right ? v.scrollLeft - y.x : v.scrollLeft - b.x, p.x && v.scrollBy({
              left: -p.x,
              behavior: o
            });
            break;
          } else if (T && w.y !== u.y) {
            const E = v.scrollTop + f.y, R = x === q.Down && E <= y.y || x === q.Up && E >= b.y;
            if (R && !f.x) {
              v.scrollTo({
                top: E,
                behavior: o
              });
              return;
            }
            R ? p.y = v.scrollTop - E : p.y = x === q.Down ? v.scrollTop - y.y : v.scrollTop - b.y, p.y && v.scrollBy({
              top: -p.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, wt(Yt(u, this.referenceCoordinates), p));
      }
    }
  }
  handleMove(e, t) {
    const {
      onMove: n
    } = this.props;
    e.preventDefault(), n(t);
  }
  handleEnd(e) {
    const {
      onEnd: t
    } = this.props;
    e.preventDefault(), this.detach(), t();
  }
  handleCancel(e) {
    const {
      onCancel: t
    } = this.props;
    e.preventDefault(), this.detach(), t();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Tn.activators = [{
  eventName: "onKeyDown",
  handler: (r, e, t) => {
    let {
      keyboardCodes: n = Ms,
      onActivation: i
    } = e, {
      active: s
    } = t;
    const {
      code: a
    } = r.nativeEvent;
    if (n.start.includes(a)) {
      const o = s.activatorNode.current;
      return o && r.target !== o ? !1 : (r.preventDefault(), i?.({
        event: r.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function ui(r) {
  return !!(r && "distance" in r);
}
function hi(r) {
  return !!(r && "delay" in r);
}
class An {
  constructor(e, t, n) {
    var i;
    n === void 0 && (n = Rc(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: a
    } = s;
    this.props = e, this.events = t, this.document = Tt(a), this.documentListeners = new jt(this.document), this.listeners = new jt(n), this.windowListeners = new jt(le(a)), this.initialCoordinates = (i = Er(s)) != null ? i : Ae, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: e,
      props: {
        options: {
          activationConstraint: t,
          bypassActivationConstraint: n
        }
      }
    } = this;
    if (this.listeners.add(e.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(_e.Resize, this.handleCancel), this.windowListeners.add(_e.DragStart, di), this.windowListeners.add(_e.VisibilityChange, this.handleCancel), this.windowListeners.add(_e.ContextMenu, di), this.documentListeners.add(_e.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (hi(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (ui(t)) {
        this.handlePending(t);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(e, t) {
    const {
      active: n,
      onPending: i
    } = this.props;
    i(n, e, this.initialCoordinates, t);
  }
  handleStart() {
    const {
      initialCoordinates: e
    } = this, {
      onStart: t
    } = this.props;
    e && (this.activated = !0, this.documentListeners.add(_e.Click, Dc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(_e.SelectionChange, this.removeTextSelection), t(e));
  }
  handleMove(e) {
    var t;
    const {
      activated: n,
      initialCoordinates: i,
      props: s
    } = this, {
      onMove: a,
      options: {
        activationConstraint: o
      }
    } = s;
    if (!i)
      return;
    const l = (t = Er(e)) != null ? t : Ae, d = Yt(i, l);
    if (!n && o) {
      if (ui(o)) {
        if (o.tolerance != null && en(d, o.tolerance))
          return this.handleCancel();
        if (en(d, o.distance))
          return this.handleStart();
      }
      if (hi(o) && en(d, o.tolerance))
        return this.handleCancel();
      this.handlePending(o, d);
      return;
    }
    e.cancelable && e.preventDefault(), a(l);
  }
  handleEnd() {
    const {
      onAbort: e,
      onEnd: t
    } = this.props;
    this.detach(), this.activated || e(this.props.active), t();
  }
  handleCancel() {
    const {
      onAbort: e,
      onCancel: t
    } = this.props;
    this.detach(), this.activated || e(this.props.active), t();
  }
  handleKeydown(e) {
    e.code === q.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Ac = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class On extends An {
  constructor(e) {
    const {
      event: t
    } = e, n = Tt(t.target);
    super(e, Ac, n);
  }
}
On.activators = [{
  eventName: "onPointerDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    return !t.isPrimary || t.button !== 0 ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Oc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ln;
(function(r) {
  r[r.RightClick = 2] = "RightClick";
})(ln || (ln = {}));
class zc extends An {
  constructor(e) {
    super(e, Oc, Tt(e.event.target));
  }
}
zc.activators = [{
  eventName: "onMouseDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    return t.button === ln.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const tn = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Lc extends An {
  constructor(e) {
    super(e, tn);
  }
  static setup() {
    return window.addEventListener(tn.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(tn.move.name, e);
    };
    function e() {
    }
  }
}
Lc.activators = [{
  eventName: "onTouchStart",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    const {
      touches: i
    } = t;
    return i.length > 1 ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
var $t;
(function(r) {
  r[r.Pointer = 0] = "Pointer", r[r.DraggableRect = 1] = "DraggableRect";
})($t || ($t = {}));
var Sr;
(function(r) {
  r[r.TreeOrder = 0] = "TreeOrder", r[r.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Sr || (Sr = {}));
function Pc(r) {
  let {
    acceleration: e,
    activator: t = $t.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: s,
    interval: a = 5,
    order: o = Sr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: f
  } = r;
  const p = Ic({
    delta: u,
    disabled: !s
  }), [C, v] = Zl(), x = j({
    x: 0,
    y: 0
  }), k = j({
    x: 0,
    y: 0
  }), D = $(() => {
    switch (t) {
      case $t.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case $t.DraggableRect:
        return i;
    }
  }, [t, i, l]), _ = j(null), S = ee(() => {
    const b = _.current;
    if (!b)
      return;
    const g = x.current.x * k.current.x, w = x.current.y * k.current.y;
    b.scrollBy(g, w);
  }, []), y = $(() => o === Sr.TreeOrder ? [...d].reverse() : d, [o, d]);
  G(
    () => {
      if (!s || !d.length || !D) {
        v();
        return;
      }
      for (const b of y) {
        if (n?.(b) === !1)
          continue;
        const g = d.indexOf(b), w = c[g];
        if (!w)
          continue;
        const {
          direction: I,
          speed: T
        } = Cc(b, w, D, e, f);
        for (const E of ["x", "y"])
          p[E][I[E]] || (T[E] = 0, I[E] = 0);
        if (T.x > 0 || T.y > 0) {
          v(), _.current = b, C(S, a), x.current = T, k.current = I;
          return;
        }
      }
      x.current = {
        x: 0,
        y: 0
      }, k.current = {
        x: 0,
        y: 0
      }, v();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      S,
      n,
      v,
      s,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(D),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p),
      C,
      d,
      y,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f)
    ]
  );
}
const Mc = {
  x: {
    [ie.Backward]: !1,
    [ie.Forward]: !1
  },
  y: {
    [ie.Backward]: !1,
    [ie.Forward]: !1
  }
};
function Ic(r) {
  let {
    delta: e,
    disabled: t
  } = r;
  const n = Cr(e);
  return tr((i) => {
    if (t || !n || !i)
      return Mc;
    const s = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [ie.Backward]: i.x[ie.Backward] || s.x === -1,
        [ie.Forward]: i.x[ie.Forward] || s.x === 1
      },
      y: {
        [ie.Backward]: i.y[ie.Backward] || s.y === -1,
        [ie.Forward]: i.y[ie.Forward] || s.y === 1
      }
    };
  }, [t, e, n]);
}
function Fc(r, e) {
  const t = e != null ? r.get(e) : void 0, n = t ? t.node.current : null;
  return tr((i) => {
    var s;
    return e == null ? null : (s = n ?? i) != null ? s : null;
  }, [n, e]);
}
function Bc(r, e) {
  return $(() => r.reduce((t, n) => {
    const {
      sensor: i
    } = n, s = i.activators.map((a) => ({
      eventName: a.eventName,
      handler: e(a.handler, n)
    }));
    return [...t, ...s];
  }, []), [r, e]);
}
var Xt;
(function(r) {
  r[r.Always = 0] = "Always", r[r.BeforeDragging = 1] = "BeforeDragging", r[r.WhileDragging = 2] = "WhileDragging";
})(Xt || (Xt = {}));
var cn;
(function(r) {
  r.Optimized = "optimized";
})(cn || (cn = {}));
const fi = /* @__PURE__ */ new Map();
function Hc(r, e) {
  let {
    dragging: t,
    dependencies: n,
    config: i
  } = e;
  const [s, a] = U(null), {
    frequency: o,
    measure: l,
    strategy: d
  } = i, c = j(r), u = x(), f = qt(u), p = ee(function(k) {
    k === void 0 && (k = []), !f.current && a((D) => D === null ? k : D.concat(k.filter((_) => !D.includes(_))));
  }, [f]), C = j(null), v = tr((k) => {
    if (u && !t)
      return fi;
    if (!k || k === fi || c.current !== r || s != null) {
      const D = /* @__PURE__ */ new Map();
      for (let _ of r) {
        if (!_)
          continue;
        if (s && s.length > 0 && !s.includes(_.id) && _.rect.current) {
          D.set(_.id, _.rect.current);
          continue;
        }
        const S = _.node.current, y = S ? new Dn(l(S), S) : null;
        _.rect.current = y, y && D.set(_.id, y);
      }
      return D;
    }
    return k;
  }, [r, s, t, u, l]);
  return G(() => {
    c.current = r;
  }, [r]), G(
    () => {
      u || p();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), G(
    () => {
      s && s.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), G(
    () => {
      u || typeof o != "number" || C.current !== null || (C.current = setTimeout(() => {
        p(), C.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, u, p, ...n]
  ), {
    droppableRects: v,
    measureDroppableContainers: p,
    measuringScheduled: s != null
  };
  function x() {
    switch (d) {
      case Xt.Always:
        return !1;
      case Xt.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function zn(r, e) {
  return tr((t) => r ? t || (typeof e == "function" ? e(r) : r) : null, [e, r]);
}
function jc(r, e) {
  return zn(r, e);
}
function $c(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Br(e), i = $(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return G(() => () => i?.disconnect(), [i]), i;
}
function $r(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Br(e), i = $(
    () => {
      if (t || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: s
      } = window;
      return new s(n);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  );
  return G(() => () => i?.disconnect(), [i]), i;
}
function Wc(r) {
  return new Dn(At(r), r);
}
function pi(r, e, t) {
  e === void 0 && (e = Wc);
  const [n, i] = U(null);
  function s() {
    i((l) => {
      if (!r)
        return null;
      if (r.isConnected === !1) {
        var d;
        return (d = l ?? t) != null ? d : null;
      }
      const c = e(r);
      return JSON.stringify(l) === JSON.stringify(c) ? l : c;
    });
  }
  const a = $c({
    callback(l) {
      if (r)
        for (const d of l) {
          const {
            type: c,
            target: u
          } = d;
          if (c === "childList" && u instanceof HTMLElement && u.contains(r)) {
            s();
            break;
          }
        }
    }
  }), o = $r({
    callback: s
  });
  return Te(() => {
    s(), r ? (o?.observe(r), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [r]), n;
}
function Gc(r) {
  const e = zn(r);
  return Ns(r, e);
}
const mi = [];
function Uc(r) {
  const e = j(r), t = tr((n) => r ? n && n !== mi && r && e.current && r.parentNode === e.current.parentNode ? n : jr(r) : mi, [r]);
  return G(() => {
    e.current = r;
  }, [r]), t;
}
function Vc(r) {
  const [e, t] = U(null), n = j(r), i = ee((s) => {
    const a = Qr(s.target);
    a && t((o) => o ? (o.set(a, on(a)), new Map(o)) : null);
  }, []);
  return G(() => {
    const s = n.current;
    if (r !== s) {
      a(s);
      const o = r.map((l) => {
        const d = Qr(l);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, on(d)]) : null;
      }).filter((l) => l != null);
      t(o.length ? new Map(o) : null), n.current = r;
    }
    return () => {
      a(r), a(s);
    };
    function a(o) {
      o.forEach((l) => {
        const d = Qr(l);
        d?.removeEventListener("scroll", i);
      });
    }
  }, [i, r]), $(() => r.length ? e ? Array.from(e.values()).reduce((s, a) => wt(s, a), Ae) : Ls(r) : Ae, [r, e]);
}
function gi(r, e) {
  e === void 0 && (e = []);
  const t = j(null);
  return G(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), G(() => {
    const n = r !== Ae;
    n && !t.current && (t.current = r), !n && t.current && (t.current = null);
  }, [r]), t.current ? Yt(r, t.current) : Ae;
}
function Zc(r) {
  G(
    () => {
      if (!Fr)
        return;
      const e = r.map((t) => {
        let {
          sensor: n
        } = t;
        return n.setup == null ? void 0 : n.setup();
      });
      return () => {
        for (const t of e)
          t?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r.map((e) => {
      let {
        sensor: t
      } = e;
      return t;
    })
  );
}
function qc(r, e) {
  return $(() => r.reduce((t, n) => {
    let {
      eventName: i,
      handler: s
    } = n;
    return t[i] = (a) => {
      s(a, e);
    }, t;
  }, {}), [r, e]);
}
function Is(r) {
  return $(() => r ? bc(r) : null, [r]);
}
const vi = [];
function Yc(r, e) {
  e === void 0 && (e = At);
  const [t] = r, n = Is(t ? le(t) : null), [i, s] = U(vi);
  function a() {
    s(() => r.length ? r.map((l) => Os(l) ? n : new Dn(e(l), l)) : vi);
  }
  const o = $r({
    callback: a
  });
  return Te(() => {
    o?.disconnect(), a(), r.forEach((l) => o?.observe(l));
  }, [r]), i;
}
function Fs(r) {
  if (!r)
    return null;
  if (r.children.length > 1)
    return r;
  const e = r.children[0];
  return er(e) ? e : r;
}
function Xc(r) {
  let {
    measure: e
  } = r;
  const [t, n] = U(null), i = ee((d) => {
    for (const {
      target: c
    } of d)
      if (er(c)) {
        n((u) => {
          const f = e(c);
          return u ? {
            ...u,
            width: f.width,
            height: f.height
          } : f;
        });
        break;
      }
  }, [e]), s = $r({
    callback: i
  }), a = ee((d) => {
    const c = Fs(d);
    s?.disconnect(), c && s?.observe(c), n(c ? e(c) : null);
  }, [e, s]), [o, l] = wr(a);
  return $(() => ({
    nodeRef: o,
    rect: t,
    setRef: l
  }), [t, o, l]);
}
const Kc = [{
  sensor: On,
  options: {}
}, {
  sensor: Tn,
  options: {}
}], Jc = {
  current: {}
}, pr = {
  draggable: {
    measure: ci
  },
  droppable: {
    measure: ci,
    strategy: Xt.WhileDragging,
    frequency: cn.Optimized
  },
  dragOverlay: {
    measure: At
  }
};
class Wt extends Map {
  get(e) {
    var t;
    return e != null && (t = super.get(e)) != null ? t : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((e) => {
      let {
        disabled: t
      } = e;
      return !t;
    });
  }
  getNodeFor(e) {
    var t, n;
    return (t = (n = this.get(e)) == null ? void 0 : n.node.current) != null ? t : void 0;
  }
}
const Qc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Wt(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: kr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: pr,
  measureDroppableContainers: kr,
  windowRect: null,
  measuringScheduled: !1
}, Bs = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: kr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: kr
}, nr = /* @__PURE__ */ Fe(Bs), Hs = /* @__PURE__ */ Fe(Qc);
function ed() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Wt()
    }
  };
}
function td(r, e) {
  switch (e.type) {
    case ne.DragStart:
      return {
        ...r,
        draggable: {
          ...r.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case ne.DragMove:
      return r.draggable.active == null ? r : {
        ...r,
        draggable: {
          ...r.draggable,
          translate: {
            x: e.coordinates.x - r.draggable.initialCoordinates.x,
            y: e.coordinates.y - r.draggable.initialCoordinates.y
          }
        }
      };
    case ne.DragEnd:
    case ne.DragCancel:
      return {
        ...r,
        draggable: {
          ...r.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case ne.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: n
      } = t, i = new Wt(r.droppable.containers);
      return i.set(n, t), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: i
        }
      };
    }
    case ne.SetDroppableDisabled: {
      const {
        id: t,
        key: n,
        disabled: i
      } = e, s = r.droppable.containers.get(t);
      if (!s || n !== s.key)
        return r;
      const a = new Wt(r.droppable.containers);
      return a.set(t, {
        ...s,
        disabled: i
      }), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: a
        }
      };
    }
    case ne.UnregisterDroppable: {
      const {
        id: t,
        key: n
      } = e, i = r.droppable.containers.get(t);
      if (!i || n !== i.key)
        return r;
      const s = new Wt(r.droppable.containers);
      return s.delete(t), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: s
        }
      };
    }
    default:
      return r;
  }
}
function rd(r) {
  let {
    disabled: e
  } = r;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: i
  } = De(nr), s = Cr(n), a = Cr(t?.id);
  return G(() => {
    if (!e && !n && s && a != null) {
      if (!Hr(s) || document.activeElement === s.target)
        return;
      const o = i.get(a);
      if (!o)
        return;
      const {
        activatorNode: l,
        node: d
      } = o;
      if (!l.current && !d.current)
        return;
      requestAnimationFrame(() => {
        for (const c of [l.current, d.current]) {
          if (!c)
            continue;
          const u = Xl(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, i, a, s]), null;
}
function js(r, e) {
  let {
    transform: t,
    ...n
  } = e;
  return r != null && r.length ? r.reduce((i, s) => s({
    transform: i,
    ...n
  }), t) : t;
}
function nd(r) {
  return $(
    () => ({
      draggable: {
        ...pr.draggable,
        ...r?.draggable
      },
      droppable: {
        ...pr.droppable,
        ...r?.droppable
      },
      dragOverlay: {
        ...pr.dragOverlay,
        ...r?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r?.draggable, r?.droppable, r?.dragOverlay]
  );
}
function id(r) {
  let {
    activeNode: e,
    measure: t,
    initialRect: n,
    config: i = !0
  } = r;
  const s = j(!1), {
    x: a,
    y: o
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  Te(() => {
    if (!a && !o || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !n)
      return;
    const d = e?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const c = t(d), u = Ns(c, n);
    if (a || (u.x = 0), o || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = Ds(d);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, o, n, t]);
}
const Wr = /* @__PURE__ */ Fe({
  ...Ae,
  scaleX: 1,
  scaleY: 1
});
var et;
(function(r) {
  r[r.Uninitialized = 0] = "Uninitialized", r[r.Initializing = 1] = "Initializing", r[r.Initialized = 2] = "Initialized";
})(et || (et = {}));
const sd = /* @__PURE__ */ ro(function(e) {
  var t, n, i, s;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: d,
    sensors: c = Kc,
    collisionDetection: u = fc,
    measuring: f,
    modifiers: p,
    ...C
  } = e;
  const v = no(td, void 0, ed), [x, k] = v, [D, _] = rc(), [S, y] = U(et.Uninitialized), b = S === et.Initialized, {
    draggable: {
      active: g,
      nodes: w,
      translate: I
    },
    droppable: {
      containers: T
    }
  } = x, E = g != null ? w.get(g) : null, R = j({
    initial: null,
    translated: null
  }), A = $(() => {
    var ae;
    return g != null ? {
      id: g,
      // It's possible for the active node to unmount while dragging
      data: (ae = E?.data) != null ? ae : Jc,
      rect: R
    } : null;
  }, [g, E]), Z = j(null), [ce, de] = U(null), [te, Ee] = U(null), Q = qt(C, Object.values(C)), ke = rr("DndDescribedBy", a), sr = $(() => T.getEnabled(), [T]), ue = nd(f), {
    droppableRects: Be,
    measureDroppableContainers: lt,
    measuringScheduled: Ot
  } = Hc(sr, {
    dragging: b,
    dependencies: [I.x, I.y],
    config: ue.droppable
  }), ye = Fc(w, g), ar = $(() => te ? Er(te) : null, [te]), Ze = xa(), He = jc(ye, ue.draggable.measure);
  id({
    activeNode: g != null ? w.get(g) : null,
    config: Ze.layoutShiftCompensation,
    initialRect: He,
    measure: ue.draggable.measure
  });
  const J = pi(ye, ue.draggable.measure, He), zt = pi(ye ? ye.parentElement : null), ze = j({
    activatorEvent: null,
    active: null,
    activeNode: ye,
    collisionRect: null,
    collisions: null,
    droppableRects: Be,
    draggableNodes: w,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: T,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ft = T.getNodeFor((t = ze.current.over) == null ? void 0 : t.id), je = Xc({
    measure: ue.dragOverlay.measure
  }), pt = (n = je.nodeRef.current) != null ? n : ye, mt = b ? (i = je.rect) != null ? i : J : null, Wn = !!(je.nodeRef.current && je.rect), Gn = Gc(Wn ? null : J), Ur = Is(pt ? le(pt) : null), qe = Uc(b ? ft ?? ye : null), or = Yc(qe), lr = js(p, {
    transform: {
      x: I.x - Gn.x,
      y: I.y - Gn.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: te,
    active: A,
    activeNodeRect: J,
    containerNodeRect: zt,
    draggingNodeRect: mt,
    over: ze.current.over,
    overlayNodeRect: je.rect,
    scrollableAncestors: qe,
    scrollableAncestorRects: or,
    windowRect: Ur
  }), Un = ar ? wt(ar, I) : null, Vn = Vc(qe), fa = gi(Vn), pa = gi(Vn, [J]), gt = wt(lr, fa), vt = mt ? gc(mt, lr) : null, Lt = A && vt ? u({
    active: A,
    collisionRect: vt,
    droppableRects: Be,
    droppableContainers: sr,
    pointerCoordinates: Un
  }) : null, Zn = Ss(Lt, "id"), [Ye, qn] = U(null), ma = Wn ? lr : wt(lr, pa), ga = pc(ma, (s = Ye?.rect) != null ? s : null, J), Vr = j(null), Yn = ee(
    (ae, he) => {
      let {
        sensor: fe,
        options: Xe
      } = he;
      if (Z.current == null)
        return;
      const be = w.get(Z.current);
      if (!be)
        return;
      const pe = ae.nativeEvent, Le = new fe({
        active: Z.current,
        activeNode: be,
        event: pe,
        options: Xe,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ze,
        onAbort(se) {
          if (!w.get(se))
            return;
          const {
            onDragAbort: Pe
          } = Q.current, $e = {
            id: se
          };
          Pe?.($e), D({
            type: "onDragAbort",
            event: $e
          });
        },
        onPending(se, Ke, Pe, $e) {
          if (!w.get(se))
            return;
          const {
            onDragPending: Mt
          } = Q.current, Je = {
            id: se,
            constraint: Ke,
            initialCoordinates: Pe,
            offset: $e
          };
          Mt?.(Je), D({
            type: "onDragPending",
            event: Je
          });
        },
        onStart(se) {
          const Ke = Z.current;
          if (Ke == null)
            return;
          const Pe = w.get(Ke);
          if (!Pe)
            return;
          const {
            onDragStart: $e
          } = Q.current, Pt = {
            activatorEvent: pe,
            active: {
              id: Ke,
              data: Pe.data,
              rect: R
            }
          };
          cr(() => {
            $e?.(Pt), y(et.Initializing), k({
              type: ne.DragStart,
              initialCoordinates: se,
              active: Ke
            }), D({
              type: "onDragStart",
              event: Pt
            }), de(Vr.current), Ee(pe);
          });
        },
        onMove(se) {
          k({
            type: ne.DragMove,
            coordinates: se
          });
        },
        onEnd: yt(ne.DragEnd),
        onCancel: yt(ne.DragCancel)
      });
      Vr.current = Le;
      function yt(se) {
        return async function() {
          const {
            active: Pe,
            collisions: $e,
            over: Pt,
            scrollAdjustedTranslate: Mt
          } = ze.current;
          let Je = null;
          if (Pe && Mt) {
            const {
              cancelDrop: It
            } = Q.current;
            Je = {
              activatorEvent: pe,
              active: Pe,
              collisions: $e,
              delta: Mt,
              over: Pt
            }, se === ne.DragEnd && typeof It == "function" && await Promise.resolve(It(Je)) && (se = ne.DragCancel);
          }
          Z.current = null, cr(() => {
            k({
              type: se
            }), y(et.Uninitialized), qn(null), de(null), Ee(null), Vr.current = null;
            const It = se === ne.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Je) {
              const Zr = Q.current[It];
              Zr?.(Je), D({
                type: It,
                event: Je
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [w]
  ), va = ee((ae, he) => (fe, Xe) => {
    const be = fe.nativeEvent, pe = w.get(Xe);
    if (
      // Another sensor is already instantiating
      Z.current !== null || // No active draggable
      !pe || // Event has already been captured
      be.dndKit || be.defaultPrevented
    )
      return;
    const Le = {
      active: pe
    };
    ae(fe, he.options, Le) === !0 && (be.dndKit = {
      capturedBy: he.sensor
    }, Z.current = Xe, Yn(fe, he));
  }, [w, Yn]), Xn = Bc(c, va);
  Zc(c), Te(() => {
    J && S === et.Initializing && y(et.Initialized);
  }, [J, S]), G(
    () => {
      const {
        onDragMove: ae
      } = Q.current, {
        active: he,
        activatorEvent: fe,
        collisions: Xe,
        over: be
      } = ze.current;
      if (!he || !fe)
        return;
      const pe = {
        active: he,
        activatorEvent: fe,
        collisions: Xe,
        delta: {
          x: gt.x,
          y: gt.y
        },
        over: be
      };
      cr(() => {
        ae?.(pe), D({
          type: "onDragMove",
          event: pe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gt.x, gt.y]
  ), G(
    () => {
      const {
        active: ae,
        activatorEvent: he,
        collisions: fe,
        droppableContainers: Xe,
        scrollAdjustedTranslate: be
      } = ze.current;
      if (!ae || Z.current == null || !he || !be)
        return;
      const {
        onDragOver: pe
      } = Q.current, Le = Xe.get(Zn), yt = Le && Le.rect.current ? {
        id: Le.id,
        rect: Le.rect.current,
        data: Le.data,
        disabled: Le.disabled
      } : null, se = {
        active: ae,
        activatorEvent: he,
        collisions: fe,
        delta: {
          x: be.x,
          y: be.y
        },
        over: yt
      };
      cr(() => {
        qn(yt), pe?.(se), D({
          type: "onDragOver",
          event: se
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Zn]
  ), Te(() => {
    ze.current = {
      activatorEvent: te,
      active: A,
      activeNode: ye,
      collisionRect: vt,
      collisions: Lt,
      droppableRects: Be,
      draggableNodes: w,
      draggingNode: pt,
      draggingNodeRect: mt,
      droppableContainers: T,
      over: Ye,
      scrollableAncestors: qe,
      scrollAdjustedTranslate: gt
    }, R.current = {
      initial: mt,
      translated: vt
    };
  }, [A, ye, Lt, vt, w, pt, mt, Be, T, Ye, qe, gt]), Pc({
    ...Ze,
    delta: I,
    draggingRect: vt,
    pointerCoordinates: Un,
    scrollableAncestors: qe,
    scrollableAncestorRects: or
  });
  const ya = $(() => ({
    active: A,
    activeNode: ye,
    activeNodeRect: J,
    activatorEvent: te,
    collisions: Lt,
    containerNodeRect: zt,
    dragOverlay: je,
    draggableNodes: w,
    droppableContainers: T,
    droppableRects: Be,
    over: Ye,
    measureDroppableContainers: lt,
    scrollableAncestors: qe,
    scrollableAncestorRects: or,
    measuringConfiguration: ue,
    measuringScheduled: Ot,
    windowRect: Ur
  }), [A, ye, J, te, Lt, zt, je, w, T, Be, Ye, lt, qe, or, ue, Ot, Ur]), ba = $(() => ({
    activatorEvent: te,
    activators: Xn,
    active: A,
    activeNodeRect: J,
    ariaDescribedById: {
      draggable: ke
    },
    dispatch: k,
    draggableNodes: w,
    over: Ye,
    measureDroppableContainers: lt
  }), [te, Xn, A, J, k, ke, w, Ye, lt]);
  return W.createElement(ks.Provider, {
    value: _
  }, W.createElement(nr.Provider, {
    value: ba
  }, W.createElement(Hs.Provider, {
    value: ya
  }, W.createElement(Wr.Provider, {
    value: ga
  }, d)), W.createElement(rd, {
    disabled: o?.restoreFocus === !1
  })), W.createElement(sc, {
    ...o,
    hiddenTextDescribedById: ke
  }));
  function xa() {
    const ae = ce?.autoScrollEnabled === !1, he = typeof l == "object" ? l.enabled === !1 : l === !1, fe = b && !ae && !he;
    return typeof l == "object" ? {
      ...l,
      enabled: fe
    } : {
      enabled: fe
    };
  }
}), ad = /* @__PURE__ */ Fe(null), yi = "button", od = "Draggable";
function ld(r) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: i
  } = r;
  const s = rr(od), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: f
  } = De(nr), {
    role: p = yi,
    roleDescription: C = "draggable",
    tabIndex: v = 0
  } = i ?? {}, x = l?.id === e, k = De(x ? Wr : ad), [D, _] = wr(), [S, y] = wr(), b = qc(a, e), g = qt(t);
  Te(
    () => (u.set(e, {
      id: e,
      key: s,
      node: D,
      activatorNode: S,
      data: g
    }), () => {
      const I = u.get(e);
      I && I.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const w = $(() => ({
    role: p,
    tabIndex: v,
    "aria-disabled": n,
    "aria-pressed": x && p === yi ? !0 : void 0,
    "aria-roledescription": C,
    "aria-describedby": c.draggable
  }), [n, p, v, x, C, c.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: d,
    attributes: w,
    isDragging: x,
    listeners: n ? void 0 : b,
    node: D,
    over: f,
    setNodeRef: _,
    setActivatorNodeRef: y,
    transform: k
  };
}
function $s() {
  return De(Hs);
}
const cd = "Droppable", dd = {
  timeout: 25
};
function ud(r) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: i
  } = r;
  const s = rr(cd), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: d
  } = De(nr), c = j({
    disabled: t
  }), u = j(!1), f = j(null), p = j(null), {
    disabled: C,
    updateMeasurementsFor: v,
    timeout: x
  } = {
    ...dd,
    ...i
  }, k = qt(v ?? n), D = ee(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
        d(Array.isArray(k.current) ? k.current : [k.current]), p.current = null;
      }, x);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), _ = $r({
    callback: D,
    disabled: C || !a
  }), S = ee((w, I) => {
    _ && (I && (_.unobserve(I), u.current = !1), w && _.observe(w));
  }, [_]), [y, b] = wr(S), g = qt(e);
  return G(() => {
    !_ || !y.current || (_.disconnect(), u.current = !1, _.observe(y.current));
  }, [y, _]), G(
    () => (o({
      type: ne.RegisterDroppable,
      element: {
        id: n,
        key: s,
        disabled: t,
        node: y,
        rect: f,
        data: g
      }
    }), () => o({
      type: ne.UnregisterDroppable,
      key: s,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), G(() => {
    t !== c.current.disabled && (o({
      type: ne.SetDroppableDisabled,
      id: n,
      key: s,
      disabled: t
    }), c.current.disabled = t);
  }, [n, s, t, o]), {
    active: a,
    rect: f,
    isOver: l?.id === n,
    node: y,
    over: l,
    setNodeRef: b
  };
}
function hd(r) {
  let {
    animation: e,
    children: t
  } = r;
  const [n, i] = U(null), [s, a] = U(null), o = Cr(t);
  return !t && !n && o && i(o), Te(() => {
    if (!s)
      return;
    const l = n?.key, d = n?.props.id;
    if (l == null || d == null) {
      i(null);
      return;
    }
    Promise.resolve(e(d, s)).then(() => {
      i(null);
    });
  }, [e, n, s]), W.createElement(W.Fragment, null, t, n ? io(n, {
    ref: a
  }) : null);
}
const fd = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function pd(r) {
  let {
    children: e
  } = r;
  return W.createElement(nr.Provider, {
    value: Bs
  }, W.createElement(Wr.Provider, {
    value: fd
  }, e));
}
const md = {
  position: "fixed",
  touchAction: "none"
}, gd = (r) => Hr(r) ? "transform 250ms ease" : void 0, vd = /* @__PURE__ */ ve((r, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: i,
    children: s,
    className: a,
    rect: o,
    style: l,
    transform: d,
    transition: c = gd
  } = r;
  if (!o)
    return null;
  const u = i ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...md,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: st.Transform.toString(u),
    transformOrigin: i && n ? lc(n, o) : void 0,
    transition: typeof c == "function" ? c(n) : c,
    ...l
  };
  return W.createElement(t, {
    className: a,
    style: f,
    ref: e
  }, s);
}), yd = (r) => (e) => {
  let {
    active: t,
    dragOverlay: n
  } = e;
  const i = {}, {
    styles: s,
    className: a
  } = r;
  if (s != null && s.active)
    for (const [o, l] of Object.entries(s.active))
      l !== void 0 && (i[o] = t.node.style.getPropertyValue(o), t.node.style.setProperty(o, l));
  if (s != null && s.dragOverlay)
    for (const [o, l] of Object.entries(s.dragOverlay))
      l !== void 0 && n.node.style.setProperty(o, l);
  return a != null && a.active && t.node.classList.add(a.active), a != null && a.dragOverlay && n.node.classList.add(a.dragOverlay), function() {
    for (const [l, d] of Object.entries(i))
      t.node.style.setProperty(l, d);
    a != null && a.active && t.node.classList.remove(a.active);
  };
}, bd = (r) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = r;
  return [{
    transform: st.Transform.toString(e)
  }, {
    transform: st.Transform.toString(t)
  }];
}, xd = {
  duration: 250,
  easing: "ease",
  keyframes: bd,
  sideEffects: /* @__PURE__ */ yd({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function _d(r) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: i
  } = r;
  return Br((s, a) => {
    if (e === null)
      return;
    const o = t.get(s);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const d = Fs(a);
    if (!d)
      return;
    const {
      transform: c
    } = le(a).getComputedStyle(a), u = Rs(c);
    if (!u)
      return;
    const f = typeof e == "function" ? e : wd(e);
    return Ps(l, i.draggable.measure), f({
      active: {
        id: s,
        data: o.data,
        node: l,
        rect: i.draggable.measure(l)
      },
      draggableNodes: t,
      dragOverlay: {
        node: a,
        rect: i.dragOverlay.measure(d)
      },
      droppableContainers: n,
      measuringConfiguration: i,
      transform: u
    });
  });
}
function wd(r) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: i
  } = {
    ...xd,
    ...r
  };
  return (s) => {
    let {
      active: a,
      dragOverlay: o,
      transform: l,
      ...d
    } = s;
    if (!e)
      return;
    const c = {
      x: o.rect.left - a.rect.left,
      y: o.rect.top - a.rect.top
    }, u = {
      scaleX: l.scaleX !== 1 ? a.rect.width * l.scaleX / o.rect.width : 1,
      scaleY: l.scaleY !== 1 ? a.rect.height * l.scaleY / o.rect.height : 1
    }, f = {
      x: l.x - c.x,
      y: l.y - c.y,
      ...u
    }, p = i({
      ...d,
      active: a,
      dragOverlay: o,
      transform: {
        initial: l,
        final: f
      }
    }), [C] = p, v = p[p.length - 1];
    if (JSON.stringify(C) === JSON.stringify(v))
      return;
    const x = n?.({
      active: a,
      dragOverlay: o,
      ...d
    }), k = o.node.animate(p, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((D) => {
      k.onfinish = () => {
        x?.(), D();
      };
    });
  };
}
let bi = 0;
function Cd(r) {
  return $(() => {
    if (r != null)
      return bi++, bi;
  }, [r]);
}
const Ed = /* @__PURE__ */ W.memo((r) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: n,
    style: i,
    transition: s,
    modifiers: a,
    wrapperElement: o = "div",
    className: l,
    zIndex: d = 999
  } = r;
  const {
    activatorEvent: c,
    active: u,
    activeNodeRect: f,
    containerNodeRect: p,
    draggableNodes: C,
    droppableContainers: v,
    dragOverlay: x,
    over: k,
    measuringConfiguration: D,
    scrollableAncestors: _,
    scrollableAncestorRects: S,
    windowRect: y
  } = $s(), b = De(Wr), g = Cd(u?.id), w = js(a, {
    activatorEvent: c,
    active: u,
    activeNodeRect: f,
    containerNodeRect: p,
    draggingNodeRect: x.rect,
    over: k,
    overlayNodeRect: x.rect,
    scrollableAncestors: _,
    scrollableAncestorRects: S,
    transform: b,
    windowRect: y
  }), I = zn(f), T = _d({
    config: n,
    draggableNodes: C,
    droppableContainers: v,
    measuringConfiguration: D
  }), E = I ? x.setRef : void 0;
  return W.createElement(pd, null, W.createElement(hd, {
    animation: T
  }, u && g ? W.createElement(vd, {
    key: g,
    id: u.id,
    ref: E,
    as: o,
    activatorEvent: c,
    adjustScale: e,
    className: l,
    transition: s,
    rect: I,
    style: {
      zIndex: d,
      ...i
    },
    transform: w
  }, t) : null));
});
function Ln(r, e, t) {
  const n = r.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function kd(r, e) {
  return r.reduce((t, n, i) => {
    const s = e.get(n);
    return s && (t[i] = s), t;
  }, Array(r.length));
}
function hr(r) {
  return r !== null && r >= 0;
}
function Sd(r, e) {
  if (r === e)
    return !0;
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Nd(r) {
  return typeof r == "boolean" ? {
    draggable: r,
    droppable: r
  } : r;
}
const Ws = (r) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: i
  } = r;
  const s = Ln(e, n, t), a = e[i], o = s[i];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, Gs = "Sortable", Us = /* @__PURE__ */ W.createContext({
  activeIndex: -1,
  containerId: Gs,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Ws,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Rd(r) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: i = Ws,
    disabled: s = !1
  } = r;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: d,
    measureDroppableContainers: c
  } = $s(), u = rr(Gs, t), f = o.rect !== null, p = $(() => n.map((b) => typeof b == "object" && "id" in b ? b.id : b), [n]), C = a != null, v = a ? p.indexOf(a.id) : -1, x = d ? p.indexOf(d.id) : -1, k = j(p), D = !Sd(p, k.current), _ = x !== -1 && v === -1 || D, S = Nd(s);
  Te(() => {
    D && C && c(p);
  }, [D, p, C, c]), G(() => {
    k.current = p;
  }, [p]);
  const y = $(
    () => ({
      activeIndex: v,
      containerId: u,
      disabled: S,
      disableTransforms: _,
      items: p,
      overIndex: x,
      useDragOverlay: f,
      sortedRects: kd(p, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, u, S.draggable, S.droppable, _, p, x, l, f, i]
  );
  return W.createElement(Us.Provider, {
    value: y
  }, e);
}
const Dd = (r) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: i
  } = r;
  return Ln(t, n, i).indexOf(e);
}, Td = (r) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: n,
    index: i,
    items: s,
    newIndex: a,
    previousItems: o,
    previousContainerId: l,
    transition: d
  } = r;
  return !d || !n || o !== s && i === a ? !1 : t ? !0 : a !== i && e === l;
}, Ad = {
  duration: 200,
  easing: "ease"
}, Vs = "transform", Od = /* @__PURE__ */ st.Transition.toString({
  property: Vs,
  duration: 0,
  easing: "linear"
}), zd = {
  roleDescription: "sortable"
};
function Ld(r) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: i
  } = r;
  const [s, a] = U(null), o = j(t);
  return Te(() => {
    if (!e && t !== o.current && n.current) {
      const l = i.current;
      if (l) {
        const d = At(n.current, {
          ignoreTransform: !0
        }), c = {
          x: l.left - d.left,
          y: l.top - d.top,
          scaleX: l.width / d.width,
          scaleY: l.height / d.height
        };
        (c.x || c.y) && a(c);
      }
    }
    t !== o.current && (o.current = t);
  }, [e, t, n, i]), G(() => {
    s && a(null);
  }, [s]), s;
}
function Pd(r) {
  let {
    animateLayoutChanges: e = Td,
    attributes: t,
    disabled: n,
    data: i,
    getNewIndex: s = Dd,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: d = Ad
  } = r;
  const {
    items: c,
    containerId: u,
    activeIndex: f,
    disabled: p,
    disableTransforms: C,
    sortedRects: v,
    overIndex: x,
    useDragOverlay: k,
    strategy: D
  } = De(Us), _ = Md(n, p), S = c.indexOf(a), y = $(() => ({
    sortable: {
      containerId: u,
      index: S,
      items: c
    },
    ...i
  }), [u, i, S, c]), b = $(() => c.slice(c.indexOf(a)), [c, a]), {
    rect: g,
    node: w,
    isOver: I,
    setNodeRef: T
  } = ud({
    id: a,
    data: y,
    disabled: _.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: b,
      ...l
    }
  }), {
    active: E,
    activatorEvent: R,
    activeNodeRect: A,
    attributes: Z,
    setNodeRef: ce,
    listeners: de,
    isDragging: te,
    over: Ee,
    setActivatorNodeRef: Q,
    transform: ke
  } = ld({
    id: a,
    data: y,
    attributes: {
      ...zd,
      ...t
    },
    disabled: _.draggable
  }), sr = Vl(T, ce), ue = !!E, Be = ue && !C && hr(f) && hr(x), lt = !k && te, Ot = lt && Be ? ke : null, ar = Be ? Ot ?? (o ?? D)({
    rects: v,
    activeNodeRect: A,
    activeIndex: f,
    overIndex: x,
    index: S
  }) : null, Ze = hr(f) && hr(x) ? s({
    id: a,
    items: c,
    activeIndex: f,
    overIndex: x
  }) : S, He = E?.id, J = j({
    activeId: He,
    items: c,
    newIndex: Ze,
    containerId: u
  }), zt = c !== J.current.items, ze = e({
    active: E,
    containerId: u,
    isDragging: te,
    isSorting: ue,
    id: a,
    index: S,
    items: c,
    newIndex: J.current.newIndex,
    previousItems: J.current.items,
    previousContainerId: J.current.containerId,
    transition: d,
    wasDragging: J.current.activeId != null
  }), ft = Ld({
    disabled: !ze,
    index: S,
    node: w,
    rect: g
  });
  return G(() => {
    ue && J.current.newIndex !== Ze && (J.current.newIndex = Ze), u !== J.current.containerId && (J.current.containerId = u), c !== J.current.items && (J.current.items = c);
  }, [ue, Ze, u, c]), G(() => {
    if (He === J.current.activeId)
      return;
    if (He != null && J.current.activeId == null) {
      J.current.activeId = He;
      return;
    }
    const pt = setTimeout(() => {
      J.current.activeId = He;
    }, 50);
    return () => clearTimeout(pt);
  }, [He]), {
    active: E,
    activeIndex: f,
    attributes: Z,
    data: y,
    rect: g,
    index: S,
    newIndex: Ze,
    items: c,
    isOver: I,
    isSorting: ue,
    isDragging: te,
    listeners: de,
    node: w,
    overIndex: x,
    over: Ee,
    setNodeRef: sr,
    setActivatorNodeRef: Q,
    setDroppableNodeRef: T,
    setDraggableNodeRef: ce,
    transform: ft ?? ar,
    transition: je()
  };
  function je() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      ft || // Or to prevent items jumping to back to their "new" position when items change
      zt && J.current.newIndex === S
    )
      return Od;
    if (!(lt && !Hr(R) || !d) && (ue || ze))
      return st.Transition.toString({
        ...d,
        property: Vs
      });
  }
}
function Md(r, e) {
  var t, n;
  return typeof r == "boolean" ? {
    draggable: r,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (t = r?.draggable) != null ? t : e.draggable,
    droppable: (n = r?.droppable) != null ? n : e.droppable
  };
}
function Nr(r) {
  if (!r)
    return !1;
  const e = r.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const Id = [q.Down, q.Right, q.Up, q.Left], Fd = (r, e) => {
  let {
    context: {
      active: t,
      collisionRect: n,
      droppableRects: i,
      droppableContainers: s,
      over: a,
      scrollableAncestors: o
    }
  } = e;
  if (Id.includes(r.code)) {
    if (r.preventDefault(), !t || !n)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const f = i.get(u.id);
      if (f)
        switch (r.code) {
          case q.Down:
            n.top < f.top && l.push(u);
            break;
          case q.Up:
            n.top > f.top && l.push(u);
            break;
          case q.Left:
            n.left > f.left && l.push(u);
            break;
          case q.Right:
            n.left < f.left && l.push(u);
            break;
        }
    });
    const d = uc({
      collisionRect: n,
      droppableRects: i,
      droppableContainers: l
    });
    let c = Ss(d, "id");
    if (c === a?.id && d.length > 1 && (c = d[1].id), c != null) {
      const u = s.get(t.id), f = s.get(c), p = f ? i.get(f.id) : null, C = f?.node.current;
      if (C && p && u && f) {
        const x = jr(C).some((b, g) => o[g] !== b), k = Zs(u, f), D = Bd(u, f), _ = x || !k ? {
          x: 0,
          y: 0
        } : {
          x: D ? n.width - p.width : 0,
          y: D ? n.height - p.height : 0
        }, S = {
          x: p.left,
          y: p.top
        };
        return _.x && _.y ? S : Yt(S, _);
      }
    }
  }
};
function Zs(r, e) {
  return !Nr(r) || !Nr(e) ? !1 : r.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Bd(r, e) {
  return !Nr(r) || !Nr(e) || !Zs(r, e) ? !1 : r.data.current.sortable.index < e.data.current.sortable.index;
}
const xi = ({ id: r, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: i, transform: s, transition: a } = Pd({
    id: r
  }), o = {
    transform: st.Translate.toString(s),
    transition: a,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return h("div", {
    ref: i,
    style: o,
    ...t,
    ...n,
    children: e
  });
}, Pn = ({ blocks: r, sortable: e = !1, onSort: t = () => {
}, main: n = !1 }) => {
  const [i, s] = U([]);
  Hi(() => {
    s(r.map((u, f) => ({
      id: u.id ?? f.toString(),
      render: u.render
    })));
  }, [r]);
  const [a, o] = U(null), l = ac(oi(On), oi(Tn, {
    coordinateGetter: Fd
  })), d = (u) => {
    o(u.active.id);
  }, c = (u) => {
    const { active: f, over: p } = u;
    o(null), p && f.id !== p.id && s((C) => {
      const v = C.findIndex((k) => k.id === f.id), x = C.findIndex((k) => k.id === p.id);
      return Ln(C, v, x);
    });
  };
  return h("div", {
    className: K("flex flex-wrap items-stretch gap-4", n && "flex-1"),
    children: P(sd, {
      sensors: l,
      onDragStart: d,
      onDragEnd: c,
      children: [h(Rd, {
        items: i,
        children: i.map((u) => h(xi, {
          id: u.id,
          children: u.render
        }, u.id))
      }), h(Ed, {
        children: a ? h(xi, {
          id: a,
          children: i.find((u) => u.id === a)?.render
        }) : null
      })]
    })
  });
};
Pn.displayName = "GroupMasonry";
Pn.__isPageLayoutGroup = !0;
const Hd = ve(function({ children: e, aside: t, header: n, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && ws("Page", e, ["block", "group"]), h("div", {
    ref: s,
    className: "h-full",
    children: P("div", {
      className: K("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [P("main", {
        className: K("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", i === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [n && h("header", {
          className: K("sticky top-0 z-30 bg-f1-background"),
          children: n
        }), h("div", {
          className: "flex-1",
          children: e
        })]
      }), t && h("aside", {
        className: K("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", i === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), $h = {
  Page: we("Page", Hd),
  Block: we("Block", Ir),
  BlockContent: we("BlockContent", Wl),
  Group: we("Group", Sn),
  GroupGrid: we("GroupGrid", Mr),
  GroupMasonry: we("GroupMasonry", Pn)
}, Wh = Oe({
  name: "StandardLayout",
  type: "layout"
}, hs), Gh = Oe({
  name: "TwoColumnLayout",
  type: "layout"
}, ml), Uh = Oe({
  name: "HomeLayout",
  type: "layout"
}, fl);
function Ct(r) {
  "@babel/helpers - typeof";
  return Ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ct(r);
}
function jd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $d(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Xs(n.key), n);
  }
}
function Wd(r, e, t) {
  return e && $d(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Gd(r, e, t) {
  return e = Rr(e), Ud(r, qs() ? Reflect.construct(e, t || [], Rr(r).constructor) : e.apply(r, t));
}
function Ud(r, e) {
  if (e && (Ct(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Vd(r);
}
function Vd(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function qs() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qs = function() {
    return !!r;
  })();
}
function Rr(r) {
  return Rr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Rr(r);
}
function Zd(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && dn(r, e);
}
function dn(r, e) {
  return dn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, dn(r, e);
}
function Ys(r, e, t) {
  return e = Xs(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Xs(r) {
  var e = qd(r, "string");
  return Ct(e) == "symbol" ? e : e + "";
}
function qd(r, e) {
  if (Ct(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (Ct(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Gr = /* @__PURE__ */ (function(r) {
  function e() {
    return jd(this, e), Gd(this, e, arguments);
  }
  return Zd(e, r), Wd(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(W.Component);
Ys(Gr, "displayName", "ZAxis");
Ys(Gr, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Yd = ["option", "isActive"];
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Gt.apply(this, arguments);
}
function Xd(r, e) {
  if (r == null) return {};
  var t = Kd(r, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function Kd(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function Jd(r) {
  var e = r.option, t = r.isActive, n = Xd(r, Yd);
  return typeof e == "string" ? /* @__PURE__ */ W.createElement(Qn, Gt({
    option: /* @__PURE__ */ W.createElement(lo, Gt({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ W.createElement(Qn, Gt({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, n));
}
function Et(r) {
  "@babel/helpers - typeof";
  return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Et(r);
}
function Ut() {
  return Ut = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Ut.apply(this, arguments);
}
function _i(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function xe(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _i(Object(t), !0).forEach(function(n) {
      rt(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : _i(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Qd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wi(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Js(n.key), n);
  }
}
function eu(r, e, t) {
  return e && wi(r.prototype, e), t && wi(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function tu(r, e, t) {
  return e = Dr(e), ru(r, Ks() ? Reflect.construct(e, t || [], Dr(r).constructor) : e.apply(r, t));
}
function ru(r, e) {
  if (e && (Et(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nu(r);
}
function nu(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ks() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ks = function() {
    return !!r;
  })();
}
function Dr(r) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Dr(r);
}
function iu(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && un(r, e);
}
function un(r, e) {
  return un = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, un(r, e);
}
function rt(r, e, t) {
  return e = Js(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Js(r) {
  var e = su(r, "string");
  return Et(e) == "symbol" ? e : e + "";
}
function su(r, e) {
  if (Et(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (Et(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var ir = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    Qd(this, e);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return t = tu(this, e, [].concat(i)), rt(t, "state", {
      isAnimationFinished: !1
    }), rt(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), rt(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), rt(t, "id", go("recharts-scatter-")), t;
  }
  return iu(e, r), eu(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, s = this.props, a = s.shape, o = s.activeShape, l = s.activeIndex, d = Yr(this.props, !1);
      return n.map(function(c, u) {
        var f = l === u, p = f ? o : a, C = xe(xe({}, d), c);
        return /* @__PURE__ */ W.createElement(Ft, Ut({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c?.cx, "-").concat(c?.cy, "-").concat(c?.size, "-").concat(u)
        }, co(i.props, c, u), {
          role: "img"
        }), /* @__PURE__ */ W.createElement(Jd, Ut({
          option: p,
          isActive: f,
          key: "symbol-".concat(u)
        }, C)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, s = i.points, a = i.isAnimationActive, o = i.animationBegin, l = i.animationDuration, d = i.animationEasing, c = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ W.createElement(uo, {
        begin: o,
        duration: l,
        isActive: a,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(c),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(f) {
        var p = f.t, C = s.map(function(v, x) {
          var k = u && u[x];
          if (k) {
            var D = dr(k.cx, v.cx), _ = dr(k.cy, v.cy), S = dr(k.size, v.size);
            return xe(xe({}, v), {}, {
              cx: D(p),
              cy: _(p),
              size: S(p)
            });
          }
          var y = dr(0, v.size);
          return xe(xe({}, v), {}, {
            size: y(p)
          });
        });
        return /* @__PURE__ */ W.createElement(Ft, null, n.renderSymbolsStatically(C));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, s = n.isAnimationActive, a = this.state.prevPoints;
      return s && i && i.length && (!a || !rs(a, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, a = i.xAxis, o = i.yAxis, l = i.children, d = ns(l, ho);
      return d ? d.map(function(c, u) {
        var f = c.props, p = f.direction, C = f.dataKey;
        return /* @__PURE__ */ W.cloneElement(c, {
          key: "".concat(p, "-").concat(C, "-").concat(s[u]),
          data: s,
          xAxis: a,
          yAxis: o,
          layout: p === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(x, k) {
            return {
              x: x.cx,
              y: x.cy,
              value: p === "x" ? +x.node.x : +x.node.y,
              errorVal: fr(x, k)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, s = n.line, a = n.lineType, o = n.lineJointType, l = Yr(this.props, !1), d = Yr(s, !1), c, u;
      if (a === "joint")
        c = i.map(function(_) {
          return {
            x: _.cx,
            y: _.cy
          };
        });
      else if (a === "fitting") {
        var f = fo(i), p = f.xmin, C = f.xmax, v = f.a, x = f.b, k = function(S) {
          return v * S + x;
        };
        c = [{
          x: p,
          y: k(p)
        }, {
          x: C,
          y: k(C)
        }];
      }
      var D = xe(xe(xe({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, d), {}, {
        points: c
      });
      return /* @__PURE__ */ W.isValidElement(s) ? u = /* @__PURE__ */ W.cloneElement(s, D) : po(s) ? u = s(D) : u = /* @__PURE__ */ W.createElement(mo, Ut({}, D, {
        type: o
      })), /* @__PURE__ */ W.createElement(Ft, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, s = n.points, a = n.line, o = n.className, l = n.xAxis, d = n.yAxis, c = n.left, u = n.top, f = n.width, p = n.height, C = n.id, v = n.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var x = this.state.isAnimationFinished, k = Na("recharts-scatter", o), D = l && l.allowDataOverflow, _ = d && d.allowDataOverflow, S = D || _, y = bt(C) ? this.id : C;
      return /* @__PURE__ */ W.createElement(Ft, {
        className: k,
        clipPath: S ? "url(#clipPath-".concat(y, ")") : null
      }, D || _ ? /* @__PURE__ */ W.createElement("defs", null, /* @__PURE__ */ W.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ W.createElement("rect", {
        x: D ? c : c - f / 2,
        y: _ ? u : u - p / 2,
        width: D ? f : f * 2,
        height: _ ? p : p * 2
      }))) : null, a && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ W.createElement(Ft, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || x) && is.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }]);
})(so);
rt(ir, "displayName", "Scatter");
rt(ir, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !vo.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
rt(ir, "getComposedData", function(r) {
  var e = r.xAxis, t = r.yAxis, n = r.zAxis, i = r.item, s = r.displayedData, a = r.xAxisTicks, o = r.yAxisTicks, l = r.offset, d = i.props.tooltipType, c = ns(i.props.children, yo), u = bt(e.dataKey) ? i.props.dataKey : e.dataKey, f = bt(t.dataKey) ? i.props.dataKey : t.dataKey, p = n && n.dataKey, C = n ? n.range : Gr.defaultProps.range, v = C && C[0], x = e.scale.bandwidth ? e.scale.bandwidth() : 0, k = t.scale.bandwidth ? t.scale.bandwidth() : 0, D = s.map(function(_, S) {
    var y = fr(_, u), b = fr(_, f), g = !bt(p) && fr(_, p) || "-", w = [{
      name: bt(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: y,
      payload: _,
      dataKey: u,
      type: d
    }, {
      name: bt(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: b,
      payload: _,
      dataKey: f,
      type: d
    }];
    g !== "-" && w.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: g,
      payload: _,
      dataKey: p,
      type: d
    });
    var I = ei({
      axis: e,
      ticks: a,
      bandSize: x,
      entry: _,
      index: S,
      dataKey: u
    }), T = ei({
      axis: t,
      ticks: o,
      bandSize: k,
      entry: _,
      index: S,
      dataKey: f
    }), E = g !== "-" ? n.scale(g) : v, R = Math.sqrt(Math.max(E, 0) / Math.PI);
    return xe(xe({}, _), {}, {
      cx: I,
      cy: T,
      x: I - R,
      y: T - R,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * R,
      height: 2 * R,
      size: E,
      node: {
        x: y,
        y: b,
        z: g
      },
      tooltipPayload: w,
      tooltipPosition: {
        x: I,
        y: T
      },
      payload: _
    }, c && c[S] && c[S].props);
  });
  return xe({
    points: D
  }, l);
});
var au = bo({
  chartName: "ComposedChart",
  GraphicalChild: [ss, xo, as, ir],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: os
  }, {
    axisType: "yAxis",
    AxisComp: an
  }, {
    axisType: "zAxis",
    AxisComp: Gr
  }],
  formatAxisMap: _o
});
const ou = (r) => {
  const e = (t) => {
    const { cx: n, cy: i, fill: s, payload: a } = t, o = () => {
      if (!a) return "-";
      if (a[r] !== void 0)
        return a[r];
      for (const [l, d] of Object.entries(a))
        if (typeof d == "number" && l !== "x")
          return d;
      return "-";
    };
    return h("circle", {
      cx: n,
      cy: i,
      r: 4,
      fill: s,
      stroke: "white",
      strokeWidth: 2,
      ref: (l) => {
        l?.parentElement && l.parentElement.setAttribute("aria-label", `Data point: ${o()}`);
      }
    });
  };
  return e.displayName = `Scatter-${r}`, e;
}, lu = ({ dataConfig: r, data: e, xAxis: t, yAxis: n = {
  hide: !0
}, label: i = !1, hideTooltip: s = !1, hideGrid: a = !1, aspect: o, legend: l, showValueUnderLabel: d = !1, bar: c, line: u, scatter: f, onClick: p }, C) => {
  const v = wo(e), x = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], k = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], D = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], _ = [...x, ...k, ...D], S = Math.max(...v.flatMap((g) => _.map((w) => Co(n?.tickFormatter ? n.tickFormatter(`${g[w]}`) : `${g[w]}`)))), y = [c, u, f].filter((g) => g?.axisPosition === "left"), b = [c, u, f].filter((g) => g?.axisPosition === "right");
  return h(Eo, {
    config: r,
    ref: C,
    aspect: o,
    children: P(au, {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: d ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (g) => {
        if (!p || !g.activeLabel || !g.activePayload)
          return;
        const w = {
          label: g.activeLabel,
          values: {}
        };
        for (const I of g.activePayload)
          w.values[I.name] = I.value;
        p(w);
      },
      children: [!s && h(ko, {
        ...So(),
        content: h(No, {
          yAxisFormatter: n.tickFormatter
        })
      }), !a && h(Ro, {
        ...Do()
      }), y.length > 0 && h(an, {
        ...ti(n),
        tick: !0,
        width: n.width ?? S + 20 + (b.length > 0 && y[0]?.axisLabel ? 20 : 0),
        hide: n.hide || y.some((g) => g?.hideAxis),
        label: y[0]?.axisLabel ? {
          value: y[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), b.length > 0 && h(an, {
        ...ti(n),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: n.width ?? S + 20 + (y.length > 0 && b[0]?.axisLabel ? 20 : 0),
        hide: n.hide || b.some((g) => g?.hideAxis),
        label: b[0]?.axisLabel ? {
          value: b[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), h(os, {
        ...To(t),
        hide: t?.hide,
        tick: d ? (g) => {
          const { x: w, y: I, payload: T } = g, E = e.find((Z) => Z.label === T.value)?.values || "", R = Object.keys(E).length === 1 ? Object.values(E)?.[0] : void 0, A = R !== void 0 && n.tickFormatter ? n.tickFormatter(`${R}`) : R.toLocaleString();
          return P("g", {
            transform: `translate(${w},${I})`,
            children: [h("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: T.value
            }), !!R && h("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: A
            })]
          });
        } : void 0
      }), x.map((g, w) => h(as, {
        isAnimationActive: !1,
        dataKey: String(g),
        fill: r[g].color ? Ht(r[g].color) : Xr(w),
        radius: 4,
        maxBarSize: 32,
        children: i && h(is, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(g)}`)
      }, `bar-${String(g)}`)), k.map((g, w) => h(ss, {
        type: u?.lineType ?? "natural",
        dataKey: String(g),
        stroke: r[g].color ? Ht(r[g].color) : Xr(x.length + w),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(g)}`)), D.map((g, w) => h(ir, {
        dataKey: String(g),
        fill: r[g].color ? Ht(r[g].color) : Xr(x.length + k.length + w),
        r: 4,
        isAnimationActive: !1,
        yAxisId: f?.axisPosition === "right" ? "right" : void 0,
        shape: ou(String(g))
      }, `scatter-${String(g)}`)), l && h(Ao, {
        content: h(Oo, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, cu = ls(lu), du = ({ value: r, max: e = 100, label: t, color: n }, i) => {
  const s = n ? Ht(n) : Ht("categorical-1"), a = r / e * 100;
  return P("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [h("div", {
      className: "flex-grow",
      children: h(zo, {
        color: s,
        value: a,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": r,
        "aria-label": `${a.toFixed(1)}%`
      })
    }), t && h("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, uu = ls(du), Vh = Oe(
  {
    name: "AreaChart",
    type: "info"
  },
  Lo
), Zh = Oe(
  {
    name: "BarChart",
    type: "info"
  },
  Po
), qh = Oe(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Mo
), Yh = Oe(
  {
    name: "LineChart",
    type: "info"
  },
  Io
), Xh = Oe(
  {
    name: "PieChart",
    type: "info"
  },
  Fo
), Kh = Oe(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Bo
), Jh = Oe(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  uu
), Qh = Oe(
  {
    name: "ComboChart",
    type: "info"
  },
  cu
), hu = (r) => typeof r == "boolean" || !r ? {
  show: !!r,
  invertStatus: !1
} : {
  show: r.show ?? !0,
  invertStatus: r.invertStatus ?? !1
}, Qs = ({ label: r, ...e }) => {
  const t = Ho(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = hu(e.trend), s = t(e.comparison), a = jo(n.numericValue, n.formatterOptions), o = ri(s.numericValue), l = ri(n.numericValue), d = $(() => {
    if (!(!o || !i.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, i.show]);
  return P("div", {
    className: "flex flex-col gap-2",
    children: [r && h("div", {
      children: r
    }), P("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [h("span", {
        className: "font-bold text-2xl",
        children: a
      }), o !== void 0 && h($o, {
        percentage: d,
        amount: s,
        invertStatus: i.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, fu = () => P("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [h(Me, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), P("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [h(Me, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), h(Me, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
Qs.displayName = "F0BigNumber";
const pu = ji(Qs, fu), ef = we("F0BigNumber", pu), tf = Ra.filter(
  (r) => r !== "ai"
), rf = Wi, nf = ["default", "outline", "neutral"], sf = Wi, af = ["sm", "md", "lg"], of = ["compact", "expanded"], lf = Da, cf = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel"
], hn = ({ count: r, list: e }) => {
  const [t, n] = U(!1), i = h(mr, {
    label: `+${r}`
  });
  return e?.length ? P(Gi, {
    open: t,
    onOpenChange: n,
    children: [h(Ui, {
      asChild: !0,
      children: h("button", {
        className: Vi("inline-flex flex-shrink-0 items-center"),
        children: i
      })
    }), h(Zi, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: P(qi, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, a) => h("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: h(mr, {
            ...s
          })
        }, a)), h(Yi, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
};
hn.displayName = "ChipCounter";
const ea = ({ chips: r, max: e = 4, remainingCount: t, layout: n = "compact" }) => {
  if (n === "fill")
    return h(Ta, {
      items: r,
      renderListItem: (l) => h(mr, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => h(hn, {
        count: (t ?? 0) + l,
        list: t ? void 0 : r.slice(r.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const i = r.slice(0, e), s = r.slice(e), a = t ?? r.length - e, o = a > 0;
  return P("div", {
    className: "flex items-center gap-2",
    children: [i.map((l, d) => h(mr, {
      ...l
    }, d)), o && h(hn, {
      count: a,
      list: t ? void 0 : s
    })]
  });
};
ea.displayName = "F0ChipList";
const df = we("F0ChipList", ea), uf = Aa, mu = ht({
  base: "w-full rounded-md p-2 pr-3 text-f1-foreground",
  variants: {
    variant: {
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning",
      critical: "bg-f1-background-critical",
      neutral: "bg-f1-background-tertiary",
      positive: "bg-f1-background-positive"
    }
  },
  defaultVariants: {
    variant: "neutral"
  }
}), gu = ht({
  base: "font-medium",
  variants: {
    variant: {
      info: "text-f1-foreground-info",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      neutral: "text-f1-foreground",
      positive: "text-f1-foreground-positive"
    }
  },
  defaultVariants: {
    variant: "info"
  }
}), hf = ({ title: r, description: e, action: t, link: n, icon: i, variant: s = "neutral" }) => {
  const a = j(null);
  return h("div", {
    ref: a,
    className: "@container",
    children: h("div", {
      className: mu({
        variant: s
      }),
      children: P("div", {
        className: K("flex flex-col items-start gap-3 @sm:flex-row @sm:items-center @sm:justify-between"),
        children: [P("div", {
          className: "flex flex-row gap-2",
          children: [h("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? h(Oa, {
              icon: i || za,
              size: "sm"
            }) : h(Wo, {
              type: s,
              size: "sm"
            })
          }), P("div", {
            className: "flex flex-col gap-0.5",
            children: [h("p", {
              className: gu({
                variant: s
              }),
              children: r
            }), h("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || n) && P("div", {
          className: K("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @sm:pl-0"),
          children: [n && h(La, {
            href: n.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: n.label
          }), t && h(it, {
            label: t.label,
            variant: "outline",
            onClick: t.onClick,
            size: "sm",
            disabled: t.disabled
          })]
        })]
      })
    })
  });
}, vu = 388;
function yu({ filters: r, value: e, onChange: t, height: n, width: i = 600, className: s, showApplyButton: a = !0, applyButtonLabel: o }) {
  const l = xn(), [d, c] = U(null), [u, f] = U(e);
  G(() => {
    f(e);
  }, [e]), G(() => {
    if (!d && r) {
      const x = Object.keys(r);
      if (x.length > 0) {
        const k = x.find((D) => {
          const _ = u[D], S = Kn(r[D].type);
          return _ !== void 0 && !S.isEmpty(_, {
            schema: r[D],
            i18n: l
          });
        });
        c(k ?? x[0]);
      }
    }
  }, [r, d, u, l]);
  const p = (x, k) => {
    const D = {
      ...u,
      [x]: k
    };
    f(D), a || t(D);
  }, C = () => {
    t(u);
  }, v = $(() => n || Object.entries(r).reduce((k, [D, _]) => {
    const S = Kn(_.type);
    return Math.max(k, S?.formHeight || vu);
  }, 0), [r, n]);
  return !r || Object.keys(r).length === 0 ? null : h("div", {
    className: K("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: i
    },
    children: h(Pa, {
      filters: r,
      tempFilters: u,
      selectedFilterKey: d,
      onFilterSelect: c,
      onFilterChange: p,
      onApply: C,
      height: v,
      showApplyButton: a,
      applyButtonLabel: o
    })
  });
}
yu.displayName = "F0FilterPickerContent";
const Mn = "gap-4", bu = "p-4", xu = "mt-6", nt = "md", ta = Fe(null);
function In() {
  const r = De(ta);
  if (!r)
    throw new Error("useF0FormContext must be used within a F0Form");
  return r;
}
function Fn(r, e, t) {
  const n = ["forms", r];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function Bn(r, e) {
  const t = e[r.fieldId];
  if ("equalsTo" in r)
    return r.equalsTo instanceof Date && t instanceof Date ? t.getTime() === r.equalsTo.getTime() : t === r.equalsTo;
  if ("notEqualsTo" in r)
    return r.notEqualsTo instanceof Date && t instanceof Date ? t.getTime() !== r.notEqualsTo.getTime() : t !== r.notEqualsTo;
  if ("greaterThan" in r) {
    const n = r.greaterThan;
    return typeof t == "number" && typeof n == "number" ? t > n : t instanceof Date && n instanceof Date ? t.getTime() > n.getTime() : !1;
  }
  if ("greaterThanOrEqual" in r) {
    const n = r.greaterThanOrEqual;
    return typeof t == "number" && typeof n == "number" ? t >= n : t instanceof Date && n instanceof Date ? t.getTime() >= n.getTime() : !1;
  }
  if ("lowerThan" in r) {
    const n = r.lowerThan;
    return typeof t == "number" && typeof n == "number" ? t < n : t instanceof Date && n instanceof Date ? t.getTime() < n.getTime() : !1;
  }
  if ("lowerThanOrEqual" in r) {
    const n = r.lowerThanOrEqual;
    return typeof t == "number" && typeof n == "number" ? t <= n : t instanceof Date && n instanceof Date ? t.getTime() <= n.getTime() : !1;
  }
  if ("isEmpty" in r) {
    const n = t == null || t === "" || Array.isArray(t) && t.length === 0;
    return r.isEmpty ? n : !n;
  }
  return "matches" in r ? typeof t == "string" && r.matches.test(t) : "includes" in r ? Array.isArray(t) ? t.includes(r.includes) : t === r.includes : "notIncludes" in r ? Array.isArray(t) ? !t.includes(r.notIncludes) : t !== r.notIncludes : !0;
}
function _u({ field: r, formField: e }) {
  return h(Ma, {
    title: r.label,
    disabled: r.disabled,
    ...e,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function wu({ field: r, formField: e, error: t, isValidating: n }) {
  const i = {
    id: r.id,
    label: r.label,
    placeholder: r.placeholder,
    value: e.value,
    onChange: e.onChange,
    onBlur: e.onBlur,
    error: t,
    isValidating: n,
    disabled: r.disabled
  };
  return h(Qt, {
    children: r.render(i)
  });
}
function Cu(r, e) {
  if (r)
    return {
      value: {
        from: r,
        to: r
      },
      granularity: e?.[0] ?? "day"
    };
}
function Eu(r) {
  return r?.value?.from;
}
function ku({ field: r, formField: e, error: t, loading: n }) {
  const i = $(() => Cu(e.value, r.granularities), [e.value, r.granularities]), s = (a) => {
    e.onChange(Eu(a));
  };
  return h(cs, {
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    granularities: r.granularities,
    minDate: r.minDate,
    maxDate: r.maxDate,
    presets: r.presets,
    clearable: r.clearable,
    value: i,
    onChange: s,
    size: nt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Su(r) {
  if (!(!r?.from || !r?.to))
    return {
      value: {
        from: r.from,
        to: r.to
      },
      granularity: "range"
    };
}
function Nu(r) {
  if (!(!r?.value?.from || !r?.value?.to))
    return {
      from: r.value.from,
      to: r.value.to
    };
}
function Ru({ field: r, formField: e, error: t, loading: n }) {
  const i = $(() => Su(e.value), [e.value]), s = (o) => {
    e.onChange(Nu(o));
  }, a = r.fromLabel && r.toLabel ? `${r.label} (${r.fromLabel} - ${r.toLabel})` : r.label;
  return h(cs, {
    label: a,
    placeholder: r.placeholder,
    disabled: r.disabled,
    granularities: r.granularities ?? ["range"],
    minDate: r.minDate,
    maxDate: r.maxDate,
    presets: r.presets,
    clearable: r.clearable,
    value: i,
    onChange: s,
    size: nt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Du({ field: r, formField: e, error: t, loading: n }) {
  return h(Go, {
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    step: r.step,
    min: r.min,
    max: r.max,
    locale: r.locale ?? "en-US",
    ...e,
    value: e.value != null ? Number(e.value) : void 0,
    onChange: (i) => e.onChange(i),
    size: nt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Tu({ field: r, formField: e }) {
  const t = e.value;
  return h(Uo, {
    title: r.label,
    placeholder: r.placeholder ?? "",
    maxCharacters: r.maxCharacters,
    mentionsConfig: r.mentionsConfig,
    height: r.height,
    plainHtmlMode: r.plainHtmlMode,
    initialEditorState: {
      content: t?.value ?? ""
    },
    onChange: (n) => {
      e.onChange({
        value: n.value,
        mentionIds: n.mentionIds
      });
    }
  });
}
function Au({ field: r, formField: e, error: t, loading: n }) {
  const i = {
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    options: r.options,
    showSearchBox: r.showSearchBox,
    searchBoxPlaceholder: r.searchBoxPlaceholder,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    loading: n
  };
  return r.multiple ? h(qr, {
    ...i,
    multiple: !0,
    clearable: r.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s),
    size: nt,
    hideLabel: !0
  }) : r.clearable ? h(qr, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s),
    size: nt,
    hideLabel: !0
  }) : h(qr, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s),
    size: nt,
    hideLabel: !0
  });
}
function Ou({ field: r, formField: e }) {
  return h(Xi, {
    title: r.label,
    disabled: r.disabled,
    ...e,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
function zu({ field: r, formField: e, error: t, loading: n }) {
  return h(Ia, {
    label: r.label,
    type: r.inputType ?? "text",
    placeholder: r.placeholder,
    disabled: r.disabled,
    ...e,
    value: e.value != null ? String(e.value) : "",
    size: nt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Lu({ field: r, formField: e, error: t, loading: n }) {
  return h(Vo, {
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    rows: r.rows,
    maxLength: r.maxLength,
    ...e,
    value: e.value != null ? String(e.value) : "",
    size: nt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Pu(r, e, t) {
  const n = !!t.error, { isValidating: i } = t, s = {
    error: n,
    loading: i
  };
  switch (r.type) {
    case "text":
      return h(zu, {
        field: r,
        formField: e,
        ...s
      });
    case "number":
      return h(Du, {
        field: r,
        formField: e,
        ...s
      });
    case "textarea":
      return h(Lu, {
        field: r,
        formField: e,
        ...s
      });
    case "select":
      return h(Au, {
        field: r,
        formField: e,
        ...s
      });
    case "checkbox":
      return h(_u, {
        field: r,
        formField: e
      });
    case "switch":
      return h(Ou, {
        field: r,
        formField: e
      });
    case "date":
      return h(ku, {
        field: r,
        formField: e,
        ...s
      });
    case "daterange":
      return h(Ru, {
        field: r,
        formField: e,
        ...s
      });
    case "richtext":
      return h(Tu, {
        field: r,
        formField: e
      });
    case "custom":
      return h(wu, {
        field: r,
        formField: e,
        error: t.error?.message,
        isValidating: i
      });
    default:
      return null;
  }
}
function Hn({ field: r, sectionId: e }) {
  const t = _n(), n = t.watch(), { formName: i } = In();
  if (r.renderIf && !Bn(r.renderIf, n))
    return null;
  const s = r.type !== "checkbox" && r.type !== "custom", a = Fn(i, e, r.id);
  return h(Zo, {
    control: t.control,
    name: r.id,
    render: ({ field: o, fieldState: l }) => P(qo, {
      id: a,
      className: "scroll-mt-4",
      children: [s && h("label", {
        htmlFor: r.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: r.label
      }), h(Yo, {
        children: Pu(r, o, l)
      }), r.helpText && h(Xo, {
        children: r.helpText
      }), h(Ko, {})]
    })
  });
}
function ra({ row: r, sectionId: e }) {
  return h("div", {
    className: `flex flex-row ${Mn} [&>*]:flex-1`,
    children: r.fields.map((t) => h(Hn, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function Mu({ field: r, isLast: e, sectionId: t }) {
  const n = _n(), { watch: i } = n, s = i(), { formName: a } = In();
  if (r.renderIf && !Bn(r.renderIf, s))
    return null;
  const o = n.getFieldState(r.id), l = i(r.id), d = Fn(a, t, r.id);
  return P("div", {
    id: d,
    className: `flex items-start justify-between scroll-mt-4 ${bu} ${e ? "" : "border-0 border-b border-solid border-f1-border-secondary"}`,
    children: [P("div", {
      className: "flex flex-col gap-1 pr-4",
      children: [h("label", {
        htmlFor: r.id,
        className: "text-base font-medium leading-normal text-f1-foreground",
        children: r.label
      }), r.helpText && h("p", {
        className: "text-base text-f1-foreground-secondary",
        children: r.helpText
      }), o.error && h("p", {
        className: "text-sm font-medium text-f1-foreground-critical",
        children: o.error.message
      })]
    }), h(Xi, {
      id: r.id,
      disabled: r.disabled,
      checked: !!l,
      onCheckedChange: (c) => {
        n.setValue(r.id, c, {
          shouldValidate: !0
        });
      },
      hideLabel: !0
    })]
  });
}
function na({ fields: r, sectionId: e }) {
  return r.length === 0 ? null : h("div", {
    className: "rounded-lg border border-solid border-f1-border-secondary",
    children: r.map((t, n) => h(Mu, {
      field: t,
      isLast: n === r.length - 1,
      sectionId: e
    }, t.id))
  });
}
function Iu(r, e) {
  return typeof r == "function" ? r(e) : Bn(r, e);
}
function Fu(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({
      type: "switchGroup",
      fields: [...t]
    }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({
      type: "field",
      item: i
    }) : i.type === "row" && e.push({
      type: "row",
      item: i,
      index: s
    }));
  }), n(), e;
}
function Bu({ section: r }) {
  const t = _n().watch(), { formName: n } = In(), { title: i, description: s, renderIf: a, fields: o } = r.section, l = r.id;
  if (a && !Iu(a, t))
    return null;
  const d = Fu(o), c = Fn(n, l);
  return P("section", {
    id: c,
    className: "flex flex-col scroll-mt-4",
    children: [h("div", {
      className: "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0 py-5",
      children: h(Jo, {
        title: i,
        description: s ?? ""
      })
    }), h("div", {
      className: `flex flex-col ${Mn}`,
      children: d.map((u, f) => u.type === "switchGroup" ? h(na, {
        fields: u.fields,
        sectionId: l
      }, `switch-group-${f}`) : u.type === "field" ? h(Hn, {
        field: u.item.field,
        sectionId: l
      }, u.item.field.id) : u.type === "row" ? h(ra, {
        row: u.item,
        sectionId: l
      }, `row-${u.index}`) : null)
    })]
  });
}
var X;
(function(r) {
  r.assertEqual = (i) => {
  };
  function e(i) {
  }
  r.assertIs = e;
  function t(i) {
    throw new Error();
  }
  r.assertNever = t, r.arrayToEnum = (i) => {
    const s = {};
    for (const a of i)
      s[a] = a;
    return s;
  }, r.getValidEnumValues = (i) => {
    const s = r.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), a = {};
    for (const o of s)
      a[o] = i[o];
    return r.objectValues(a);
  }, r.objectValues = (i) => r.objectKeys(i).map(function(s) {
    return i[s];
  }), r.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const a in i)
      Object.prototype.hasOwnProperty.call(i, a) && s.push(a);
    return s;
  }, r.find = (i, s) => {
    for (const a of i)
      if (s(a))
        return a;
  }, r.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && Number.isFinite(i) && Math.floor(i) === i;
  function n(i, s = " | ") {
    return i.map((a) => typeof a == "string" ? `'${a}'` : a).join(s);
  }
  r.joinValues = n, r.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(X || (X = {}));
var Ci;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Ci || (Ci = {}));
const z = X.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), tt = (r) => {
  switch (typeof r) {
    case "undefined":
      return z.undefined;
    case "string":
      return z.string;
    case "number":
      return Number.isNaN(r) ? z.nan : z.number;
    case "boolean":
      return z.boolean;
    case "function":
      return z.function;
    case "bigint":
      return z.bigint;
    case "symbol":
      return z.symbol;
    case "object":
      return Array.isArray(r) ? z.array : r === null ? z.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? z.promise : typeof Map < "u" && r instanceof Map ? z.map : typeof Set < "u" && r instanceof Set ? z.set : typeof Date < "u" && r instanceof Date ? z.date : z.object;
    default:
      return z.unknown;
  }
}, N = X.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class Ue extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const t = e || function(s) {
      return s.message;
    }, n = { _errors: [] }, i = (s) => {
      for (const a of s.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(i);
        else if (a.code === "invalid_return_type")
          i(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          i(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(t(a));
        else {
          let o = n, l = 0;
          for (; l < a.path.length; ) {
            const d = a.path[l];
            l === a.path.length - 1 ? (o[d] = o[d] || { _errors: [] }, o[d]._errors.push(t(a))) : o[d] = o[d] || { _errors: [] }, o = o[d], l++;
          }
        }
    };
    return i(this), n;
  }
  static assert(e) {
    if (!(e instanceof Ue))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, X.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, n = [];
    for (const i of this.issues)
      if (i.path.length > 0) {
        const s = i.path[0];
        t[s] = t[s] || [], t[s].push(e(i));
      } else
        n.push(e(i));
    return { formErrors: n, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
Ue.create = (r) => new Ue(r);
const fn = (r, e) => {
  let t;
  switch (r.code) {
    case N.invalid_type:
      r.received === z.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case N.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, X.jsonStringifyReplacer)}`;
      break;
    case N.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${X.joinValues(r.keys, ", ")}`;
      break;
    case N.invalid_union:
      t = "Invalid input";
      break;
    case N.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${X.joinValues(r.options)}`;
      break;
    case N.invalid_enum_value:
      t = `Invalid enum value. Expected ${X.joinValues(r.options)}, received '${r.received}'`;
      break;
    case N.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case N.invalid_return_type:
      t = "Invalid function return type";
      break;
    case N.invalid_date:
      t = "Invalid date";
      break;
    case N.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : X.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case N.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "bigint" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case N.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case N.custom:
      t = "Invalid input";
      break;
    case N.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case N.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case N.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, X.assertNever(r);
  }
  return { message: t };
};
let Hu = fn;
function ju() {
  return Hu;
}
const $u = (r) => {
  const { data: e, path: t, errorMaps: n, issueData: i } = r, s = [...t, ...i.path || []], a = {
    ...i,
    path: s
  };
  if (i.message !== void 0)
    return {
      ...i,
      path: s,
      message: i.message
    };
  let o = "";
  const l = n.filter((d) => !!d).slice().reverse();
  for (const d of l)
    o = d(a, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: s,
    message: o
  };
};
function O(r, e) {
  const t = ju(), n = $u({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      // contextual error map is first priority
      r.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === fn ? void 0 : fn
      // then global default map
    ].filter((i) => !!i)
  });
  r.common.issues.push(n);
}
class ge {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const n = [];
    for (const i of t) {
      if (i.status === "aborted")
        return B;
      i.status === "dirty" && e.dirty(), n.push(i.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, t) {
    const n = [];
    for (const i of t) {
      const s = await i.key, a = await i.value;
      n.push({
        key: s,
        value: a
      });
    }
    return ge.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const i of t) {
      const { key: s, value: a } = i;
      if (s.status === "aborted" || a.status === "aborted")
        return B;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (n[s.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const B = Object.freeze({
  status: "aborted"
}), Bt = (r) => ({ status: "dirty", value: r }), Ce = (r) => ({ status: "valid", value: r }), Ei = (r) => r.status === "aborted", ki = (r) => r.status === "dirty", kt = (r) => r.status === "valid", Tr = (r) => typeof Promise < "u" && r instanceof Promise;
var L;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e?.message;
})(L || (L = {}));
class at {
  constructor(e, t, n, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Si = (r, e) => {
  if (kt(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Ue(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function V(r) {
  if (!r)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: n, description: i } = r;
  if (e && (t || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (a, o) => {
    const { message: l } = r;
    return a.code === "invalid_enum_value" ? { message: l ?? o.defaultError } : typeof o.data > "u" ? { message: l ?? n ?? o.defaultError } : a.code !== "invalid_type" ? { message: o.defaultError } : { message: l ?? t ?? o.defaultError };
  }, description: i };
}
class Y {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return tt(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: tt(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new ge(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: tt(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Tr(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const n = this.safeParse(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, t) {
    const n = {
      common: {
        issues: [],
        async: t?.async ?? !1,
        contextualErrorMap: t?.errorMap
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: tt(e)
    }, i = this._parseSync({ data: e, path: n.path, parent: n });
    return Si(n, i);
  }
  "~validate"(e) {
    const t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: tt(e)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return kt(n) ? {
          value: n.value
        } : {
          issues: t.common.issues
        };
      } catch (n) {
        n?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) => kt(n) ? {
      value: n.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    const n = await this.safeParseAsync(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, t) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: t?.errorMap,
        async: !0
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: tt(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (Tr(i) ? i : Promise.resolve(i));
    return Si(n, s);
  }
  refine(e, t) {
    const n = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: N.custom,
        ...n(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof t == "function" ? t(n, i) : t), !1));
  }
  _refinement(e) {
    return new Nt({
      schema: this,
      typeName: H.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (t) => this["~validate"](t)
    };
  }
  optional() {
    return Re.create(this, this._def);
  }
  nullable() {
    return Ve.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ne.create(this);
  }
  promise() {
    return zr.create(this, this._def);
  }
  or(e) {
    return Ar.create([this, e], this._def);
  }
  and(e) {
    return Or.create(this, e, this._def);
  }
  transform(e) {
    return new Nt({
      ...V(this._def),
      schema: this,
      typeName: H.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Rt({
      ...V(this._def),
      innerType: this,
      defaultValue: t,
      typeName: H.ZodDefault
    });
  }
  brand() {
    return new uh({
      typeName: H.ZodBranded,
      type: this,
      ...V(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new gn({
      ...V(this._def),
      innerType: this,
      catchValue: t,
      typeName: H.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return jn.create(this, e);
  }
  readonly() {
    return vn.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Wu = /^c[^\s-]{8,}$/i, Gu = /^[0-9a-z]+$/, Uu = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Vu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Zu = /^[a-z0-9_-]{21}$/i, qu = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Yu = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Xu = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Ku = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let rn;
const Ju = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Qu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, eh = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, th = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, rh = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, nh = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, ia = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ih = new RegExp(`^${ia}$`);
function sa(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function sh(r) {
  return new RegExp(`^${sa(r)}$`);
}
function ah(r) {
  let e = `${ia}T${sa(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function oh(r, e) {
  return !!((e === "v4" || !e) && Ju.test(r) || (e === "v6" || !e) && eh.test(r));
}
function lh(r, e) {
  if (!qu.test(r))
    return !1;
  try {
    const [t] = r.split(".");
    if (!t)
      return !1;
    const n = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), i = JSON.parse(atob(n));
    return !(typeof i != "object" || i === null || "typ" in i && i?.typ !== "JWT" || !i.alg || e && i.alg !== e);
  } catch {
    return !1;
  }
}
function ch(r, e) {
  return !!((e === "v4" || !e) && Qu.test(r) || (e === "v6" || !e) && th.test(r));
}
class Ge extends Y {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== z.string) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: N.invalid_type,
        expected: z.string,
        received: s.parsedType
      }), B;
    }
    const n = new ge();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), O(i, {
          code: N.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), O(i, {
          code: N.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? O(i, {
          code: N.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && O(i, {
          code: N.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Xu.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "email",
          code: N.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        rn || (rn = new RegExp(Ku, "u")), rn.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "emoji",
          code: N.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Vu.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "uuid",
          code: N.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        Zu.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "nanoid",
          code: N.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Wu.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "cuid",
          code: N.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Gu.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "cuid2",
          code: N.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        Uu.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "ulid",
          code: N.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), O(i, {
            validation: "url",
            code: N.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "regex",
        code: N.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: N.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: N.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: N.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? ah(s).test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: N.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? ih.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: N.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? sh(s).test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: N.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? Yu.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "duration",
        code: N.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? oh(e.data, s.version) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "ip",
        code: N.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? lh(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "jwt",
        code: N.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? ch(e.data, s.version) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "cidr",
        code: N.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? rh.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "base64",
        code: N.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? nh.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "base64url",
        code: N.invalid_string,
        message: s.message
      }), n.dirty()) : X.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: N.invalid_string,
      ...L.errToObj(n)
    });
  }
  _addCheck(e) {
    return new Ge({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...L.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...L.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...L.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...L.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...L.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...L.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...L.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...L.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...L.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...L.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...L.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...L.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...L.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      offset: e?.offset ?? !1,
      local: e?.local ?? !1,
      ...L.errToObj(e?.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      ...L.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...L.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...L.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...L.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...L.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...L.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...L.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...L.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...L.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, L.errToObj(e));
  }
  trim() {
    return new Ge({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Ge({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Ge({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Ge.create = (r) => new Ge({
  checks: [],
  typeName: H.ZodString,
  coerce: r?.coerce ?? !1,
  ...V(r)
});
function dh(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = t > n ? t : n, s = Number.parseInt(r.toFixed(i).replace(".", "")), a = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % a / 10 ** i;
}
class ct extends Y {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== z.number) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: N.invalid_type,
        expected: z.number,
        received: s.parsedType
      }), B;
    }
    let n;
    const i = new ge();
    for (const s of this._def.checks)
      s.kind === "int" ? X.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), O(n, {
        code: N.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: N.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: N.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? dh(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), O(n, {
        code: N.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), O(n, {
        code: N.not_finite,
        message: s.message
      }), i.dirty()) : X.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, L.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, L.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, L.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, L.toString(t));
  }
  setLimit(e, t, n, i) {
    return new ct({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: L.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ct({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: L.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: L.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: L.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: L.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: L.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: L.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: L.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: L.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: L.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && X.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (t === null || n.value > t) && (t = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
ct.create = (r) => new ct({
  checks: [],
  typeName: H.ZodNumber,
  coerce: r?.coerce || !1,
  ...V(r)
});
class Kt extends Y {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== z.bigint)
      return this._getInvalidInput(e);
    let n;
    const i = new ge();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: N.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: N.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: N.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : X.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return O(t, {
      code: N.invalid_type,
      expected: z.bigint,
      received: t.parsedType
    }), B;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, L.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, L.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, L.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, L.toString(t));
  }
  setLimit(e, t, n, i) {
    return new Kt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: L.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Kt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: L.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: L.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: L.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: L.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: L.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Kt.create = (r) => new Kt({
  checks: [],
  typeName: H.ZodBigInt,
  coerce: r?.coerce ?? !1,
  ...V(r)
});
class pn extends Y {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== z.boolean) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: N.invalid_type,
        expected: z.boolean,
        received: n.parsedType
      }), B;
    }
    return Ce(e.data);
  }
}
pn.create = (r) => new pn({
  typeName: H.ZodBoolean,
  coerce: r?.coerce || !1,
  ...V(r)
});
class St extends Y {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== z.date) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: N.invalid_type,
        expected: z.date,
        received: s.parsedType
      }), B;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: N.invalid_date
      }), B;
    }
    const n = new ge();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), O(i, {
        code: N.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), O(i, {
        code: N.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : X.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new St({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: L.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: L.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
St.create = (r) => new St({
  checks: [],
  coerce: r?.coerce || !1,
  typeName: H.ZodDate,
  ...V(r)
});
class Ni extends Y {
  _parse(e) {
    if (this._getType(e) !== z.symbol) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: N.invalid_type,
        expected: z.symbol,
        received: n.parsedType
      }), B;
    }
    return Ce(e.data);
  }
}
Ni.create = (r) => new Ni({
  typeName: H.ZodSymbol,
  ...V(r)
});
class Ri extends Y {
  _parse(e) {
    if (this._getType(e) !== z.undefined) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: N.invalid_type,
        expected: z.undefined,
        received: n.parsedType
      }), B;
    }
    return Ce(e.data);
  }
}
Ri.create = (r) => new Ri({
  typeName: H.ZodUndefined,
  ...V(r)
});
class Di extends Y {
  _parse(e) {
    if (this._getType(e) !== z.null) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: N.invalid_type,
        expected: z.null,
        received: n.parsedType
      }), B;
    }
    return Ce(e.data);
  }
}
Di.create = (r) => new Di({
  typeName: H.ZodNull,
  ...V(r)
});
class Ti extends Y {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Ce(e.data);
  }
}
Ti.create = (r) => new Ti({
  typeName: H.ZodAny,
  ...V(r)
});
class Ai extends Y {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Ce(e.data);
  }
}
Ai.create = (r) => new Ai({
  typeName: H.ZodUnknown,
  ...V(r)
});
class ot extends Y {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return O(t, {
      code: N.invalid_type,
      expected: z.never,
      received: t.parsedType
    }), B;
  }
}
ot.create = (r) => new ot({
  typeName: H.ZodNever,
  ...V(r)
});
class Oi extends Y {
  _parse(e) {
    if (this._getType(e) !== z.undefined) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: N.invalid_type,
        expected: z.void,
        received: n.parsedType
      }), B;
    }
    return Ce(e.data);
  }
}
Oi.create = (r) => new Oi({
  typeName: H.ZodVoid,
  ...V(r)
});
class Ne extends Y {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== z.array)
      return O(t, {
        code: N.invalid_type,
        expected: z.array,
        received: t.parsedType
      }), B;
    if (i.exactLength !== null) {
      const a = t.data.length > i.exactLength.value, o = t.data.length < i.exactLength.value;
      (a || o) && (O(t, {
        code: a ? N.too_big : N.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (O(t, {
      code: N.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (O(t, {
      code: N.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new at(t, a, t.path, o)))).then((a) => ge.mergeArray(n, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new at(t, a, t.path, o)));
    return ge.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Ne({
      ...this._def,
      minLength: { value: e, message: L.toString(t) }
    });
  }
  max(e, t) {
    return new Ne({
      ...this._def,
      maxLength: { value: e, message: L.toString(t) }
    });
  }
  length(e, t) {
    return new Ne({
      ...this._def,
      exactLength: { value: e, message: L.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ne.create = (r, e) => new Ne({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: H.ZodArray,
  ...V(e)
});
function _t(r) {
  if (r instanceof re) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = Re.create(_t(n));
    }
    return new re({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof Ne ? new Ne({
    ...r._def,
    type: _t(r.element)
  }) : r instanceof Re ? Re.create(_t(r.unwrap())) : r instanceof Ve ? Ve.create(_t(r.unwrap())) : r instanceof dt ? dt.create(r.items.map((e) => _t(e))) : r;
}
class re extends Y {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = X.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== z.object) {
      const d = this._getOrReturnCtx(e);
      return O(d, {
        code: N.invalid_type,
        expected: z.object,
        received: d.parsedType
      }), B;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof ot && this._def.unknownKeys === "strip"))
      for (const d in i.data)
        a.includes(d) || o.push(d);
    const l = [];
    for (const d of a) {
      const c = s[d], u = i.data[d];
      l.push({
        key: { status: "valid", value: d },
        value: c._parse(new at(i, u, i.path, d)),
        alwaysSet: d in i.data
      });
    }
    if (this._def.catchall instanceof ot) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const c of o)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: i.data[c] }
          });
      else if (d === "strict")
        o.length > 0 && (O(i, {
          code: N.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const c of o) {
        const u = i.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: d._parse(
            new at(i, u, i.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const c of l) {
        const u = await c.key, f = await c.value;
        d.push({
          key: u,
          value: f,
          alwaysSet: c.alwaysSet
        });
      }
      return d;
    }).then((d) => ge.mergeObjectSync(n, d)) : ge.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return L.errToObj, new re({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          const i = this._def.errorMap?.(t, n).message ?? n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: L.errToObj(e).message ?? i
          } : {
            message: i
          };
        }
      } : {}
    });
  }
  strip() {
    return new re({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new re({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new re({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new re({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: H.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new re({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const n of X.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new re({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const n of X.objectKeys(this.shape))
      e[n] || (t[n] = this.shape[n]);
    return new re({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return _t(this);
  }
  partial(e) {
    const t = {};
    for (const n of X.objectKeys(this.shape)) {
      const i = this.shape[n];
      e && !e[n] ? t[n] = i : t[n] = i.optional();
    }
    return new re({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const n of X.objectKeys(this.shape))
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof Re; )
          s = s._def.innerType;
        t[n] = s;
      }
    return new re({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return aa(X.objectKeys(this.shape));
  }
}
re.create = (r, e) => new re({
  shape: () => r,
  unknownKeys: "strip",
  catchall: ot.create(),
  typeName: H.ZodObject,
  ...V(e)
});
re.strictCreate = (r, e) => new re({
  shape: () => r,
  unknownKeys: "strict",
  catchall: ot.create(),
  typeName: H.ZodObject,
  ...V(e)
});
re.lazycreate = (r, e) => new re({
  shape: r,
  unknownKeys: "strip",
  catchall: ot.create(),
  typeName: H.ZodObject,
  ...V(e)
});
class Ar extends Y {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Ue(o.ctx.common.issues));
      return O(t, {
        code: N.invalid_union,
        unionErrors: a
      }), B;
    }
    if (t.common.async)
      return Promise.all(n.map(async (s) => {
        const a = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: t.data,
            path: t.path,
            parent: a
          }),
          ctx: a
        };
      })).then(i);
    {
      let s;
      const a = [];
      for (const l of n) {
        const d = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, c = l._parseSync({
          data: t.data,
          path: t.path,
          parent: d
        });
        if (c.status === "valid")
          return c;
        c.status === "dirty" && !s && (s = { result: c, ctx: d }), d.common.issues.length && a.push(d.common.issues);
      }
      if (s)
        return t.common.issues.push(...s.ctx.common.issues), s.result;
      const o = a.map((l) => new Ue(l));
      return O(t, {
        code: N.invalid_union,
        unionErrors: o
      }), B;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ar.create = (r, e) => new Ar({
  options: r,
  typeName: H.ZodUnion,
  ...V(e)
});
function mn(r, e) {
  const t = tt(r), n = tt(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === z.object && n === z.object) {
    const i = X.objectKeys(e), s = X.objectKeys(r).filter((o) => i.indexOf(o) !== -1), a = { ...r, ...e };
    for (const o of s) {
      const l = mn(r[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (t === z.array && n === z.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s], o = e[s], l = mn(a, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === z.date && n === z.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class Or extends Y {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (Ei(s) || Ei(a))
        return B;
      const o = mn(s.value, a.value);
      return o.valid ? ((ki(s) || ki(a)) && t.dirty(), { status: t.value, value: o.data }) : (O(n, {
        code: N.invalid_intersection_types
      }), B);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([s, a]) => i(s, a)) : i(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Or.create = (r, e, t) => new Or({
  left: r,
  right: e,
  typeName: H.ZodIntersection,
  ...V(t)
});
class dt extends Y {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== z.array)
      return O(n, {
        code: N.invalid_type,
        expected: z.array,
        received: n.parsedType
      }), B;
    if (n.data.length < this._def.items.length)
      return O(n, {
        code: N.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), B;
    !this._def.rest && n.data.length > this._def.items.length && (O(n, {
      code: N.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...n.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new at(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(s).then((a) => ge.mergeArray(t, a)) : ge.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new dt({
      ...this._def,
      rest: e
    });
  }
}
dt.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new dt({
    items: r,
    typeName: H.ZodTuple,
    rest: null,
    ...V(e)
  });
};
class zi extends Y {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== z.map)
      return O(n, {
        code: N.invalid_type,
        expected: z.map,
        received: n.parsedType
      }), B;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, l], d) => ({
      key: i._parse(new at(n, o, n.path, [d, "key"])),
      value: s._parse(new at(n, l, n.path, [d, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const d = await l.key, c = await l.value;
          if (d.status === "aborted" || c.status === "aborted")
            return B;
          (d.status === "dirty" || c.status === "dirty") && t.dirty(), o.set(d.value, c.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const d = l.key, c = l.value;
        if (d.status === "aborted" || c.status === "aborted")
          return B;
        (d.status === "dirty" || c.status === "dirty") && t.dirty(), o.set(d.value, c.value);
      }
      return { status: t.value, value: o };
    }
  }
}
zi.create = (r, e, t) => new zi({
  valueType: e,
  keyType: r,
  typeName: H.ZodMap,
  ...V(t)
});
class Jt extends Y {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== z.set)
      return O(n, {
        code: N.invalid_type,
        expected: z.set,
        received: n.parsedType
      }), B;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (O(n, {
      code: N.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (O(n, {
      code: N.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), t.dirty());
    const s = this._def.valueType;
    function a(l) {
      const d = /* @__PURE__ */ new Set();
      for (const c of l) {
        if (c.status === "aborted")
          return B;
        c.status === "dirty" && t.dirty(), d.add(c.value);
      }
      return { status: t.value, value: d };
    }
    const o = [...n.data.values()].map((l, d) => s._parse(new at(n, l, n.path, d)));
    return n.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new Jt({
      ...this._def,
      minSize: { value: e, message: L.toString(t) }
    });
  }
  max(e, t) {
    return new Jt({
      ...this._def,
      maxSize: { value: e, message: L.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Jt.create = (r, e) => new Jt({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: H.ZodSet,
  ...V(e)
});
class Li extends Y {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Li.create = (r, e) => new Li({
  getter: r,
  typeName: H.ZodLazy,
  ...V(e)
});
class Pi extends Y {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return O(t, {
        received: t.data,
        code: N.invalid_literal,
        expected: this._def.value
      }), B;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Pi.create = (r, e) => new Pi({
  value: r,
  typeName: H.ZodLiteral,
  ...V(e)
});
function aa(r, e) {
  return new ut({
    values: r,
    typeName: H.ZodEnum,
    ...V(e)
  });
}
class ut extends Y {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return O(t, {
        expected: X.joinValues(n),
        received: t.parsedType,
        code: N.invalid_type
      }), B;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return O(t, {
        received: t.data,
        code: N.invalid_enum_value,
        options: n
      }), B;
    }
    return Ce(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return ut.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return ut.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
ut.create = aa;
class Mi extends Y {
  _parse(e) {
    const t = X.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== z.string && n.parsedType !== z.number) {
      const i = X.objectValues(t);
      return O(n, {
        expected: X.joinValues(i),
        received: n.parsedType,
        code: N.invalid_type
      }), B;
    }
    if (this._cache || (this._cache = new Set(X.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = X.objectValues(t);
      return O(n, {
        received: n.data,
        code: N.invalid_enum_value,
        options: i
      }), B;
    }
    return Ce(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Mi.create = (r, e) => new Mi({
  values: r,
  typeName: H.ZodNativeEnum,
  ...V(e)
});
class zr extends Y {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== z.promise && t.common.async === !1)
      return O(t, {
        code: N.invalid_type,
        expected: z.promise,
        received: t.parsedType
      }), B;
    const n = t.parsedType === z.promise ? t.data : Promise.resolve(t.data);
    return Ce(n.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
zr.create = (r, e) => new zr({
  type: r,
  typeName: H.ZodPromise,
  ...V(e)
});
class Nt extends Y {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === H.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (a) => {
        O(n, a), a.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "preprocess") {
      const a = i.transform(n.data, s);
      if (n.common.async)
        return Promise.resolve(a).then(async (o) => {
          if (t.value === "aborted")
            return B;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? B : l.status === "dirty" || t.value === "dirty" ? Bt(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return B;
        const o = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? B : o.status === "dirty" || t.value === "dirty" ? Bt(o.value) : o;
      }
    }
    if (i.type === "refinement") {
      const a = (o) => {
        const l = i.refinement(o, s);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? B : (o.status === "dirty" && t.dirty(), a(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? B : (o.status === "dirty" && t.dirty(), a(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!kt(a))
          return B;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => kt(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({
          status: t.value,
          value: o
        })) : B);
    X.assertNever(i);
  }
}
Nt.create = (r, e, t) => new Nt({
  schema: r,
  typeName: H.ZodEffects,
  effect: e,
  ...V(t)
});
Nt.createWithPreprocess = (r, e, t) => new Nt({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: H.ZodEffects,
  ...V(t)
});
class Re extends Y {
  _parse(e) {
    return this._getType(e) === z.undefined ? Ce(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Re.create = (r, e) => new Re({
  innerType: r,
  typeName: H.ZodOptional,
  ...V(e)
});
class Ve extends Y {
  _parse(e) {
    return this._getType(e) === z.null ? Ce(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ve.create = (r, e) => new Ve({
  innerType: r,
  typeName: H.ZodNullable,
  ...V(e)
});
class Rt extends Y {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === z.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Rt.create = (r, e) => new Rt({
  innerType: r,
  typeName: H.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...V(e)
});
class gn extends Y {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Tr(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Ue(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Ue(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
gn.create = (r, e) => new gn({
  innerType: r,
  typeName: H.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...V(e)
});
class Ii extends Y {
  _parse(e) {
    if (this._getType(e) !== z.nan) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: N.invalid_type,
        expected: z.nan,
        received: n.parsedType
      }), B;
    }
    return { status: "valid", value: e.data };
  }
}
Ii.create = (r) => new Ii({
  typeName: H.ZodNaN,
  ...V(r)
});
class uh extends Y {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = t.data;
    return this._def.type._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class jn extends Y {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? B : s.status === "dirty" ? (t.dirty(), Bt(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return i.status === "aborted" ? B : i.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, t) {
    return new jn({
      in: e,
      out: t,
      typeName: H.ZodPipeline
    });
  }
}
class vn extends Y {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (i) => (kt(i) && (i.value = Object.freeze(i.value)), i);
    return Tr(t) ? t.then((i) => n(i)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
vn.create = (r, e) => new vn({
  innerType: r,
  typeName: H.ZodReadonly,
  ...V(e)
});
var H;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(H || (H = {}));
ot.create;
Ne.create;
Ar.create;
Or.create;
dt.create;
ut.create;
zr.create;
Re.create;
Ve.create;
const oa = /* @__PURE__ */ new WeakMap();
function ff(r, e) {
  oa.set(r, e);
  const t = r;
  return t._f0Config = e, t._innerSchema = r, t;
}
function la(r) {
  const e = r;
  return e._f0Config ? e._f0Config : oa.get(r);
}
function pf(r) {
  return la(r) !== void 0;
}
function hh(r, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options)
    return "select";
  let t = r;
  for (; t instanceof Re || t instanceof Ve || t instanceof Rt; )
    t = t._def.innerType;
  return t instanceof Ge ? "rows" in e && e.rows ? "textarea" : "text" : t instanceof ct ? "number" : t instanceof pn ? "switch" : t instanceof St ? "date" : t instanceof ut || t instanceof Ne && "options" in e && e.options ? "select" : t instanceof re && "render" in e && e.render ? "custom" : "text";
}
function $n(r) {
  let e = r;
  for (; e instanceof Re || e instanceof Ve || e instanceof Rt; )
    e = e._def.innerType;
  return e;
}
function ca(r) {
  return r instanceof Re || r instanceof Ve || r instanceof Rt && ca(r._def.innerType);
}
function fh(r) {
  const e = $n(r);
  if (!(e instanceof ct))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (i = s.value);
  return { min: n, max: i };
}
function ph(r) {
  const e = $n(r);
  if (!(e instanceof St))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: n, maxDate: i };
}
function mh(r) {
  const e = $n(r);
  if (!(e instanceof Ge))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const i of t)
    i.kind === "max" && (n = i.value);
  return { maxLength: n };
}
function Fi(r, e, t, n) {
  const i = {
    id: r,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    validation: e
  }, s = ca(e);
  switch (n) {
    case "text":
      return {
        ...i,
        type: "text",
        inputType: "inputType" in t && t.inputType || "text",
        renderIf: t.renderIf
      };
    case "number": {
      const { min: a, max: o } = fh(e);
      return {
        ...i,
        type: "number",
        step: "step" in t ? t.step : void 0,
        min: a,
        max: o,
        locale: "locale" in t ? t.locale : void 0,
        renderIf: t.renderIf
      };
    }
    case "textarea": {
      const { maxLength: a } = mh(e);
      return {
        ...i,
        type: "textarea",
        rows: "rows" in t ? t.rows : void 0,
        maxLength: a,
        renderIf: t.renderIf
      };
    }
    case "select":
      return {
        ...i,
        type: "select",
        options: "options" in t ? t.options : [],
        multiple: "multiple" in t ? t.multiple : void 0,
        clearable: s,
        showSearchBox: "showSearchBox" in t ? t.showSearchBox : void 0,
        searchBoxPlaceholder: "searchBoxPlaceholder" in t ? t.searchBoxPlaceholder : void 0,
        renderIf: t.renderIf
      };
    case "checkbox":
      return {
        ...i,
        type: "checkbox",
        renderIf: t.renderIf
      };
    case "switch":
      return {
        ...i,
        type: "switch",
        renderIf: t.renderIf
      };
    case "date": {
      const { minDate: a, maxDate: o } = ph(e);
      return {
        ...i,
        type: "date",
        granularities: "granularities" in t ? t.granularities : void 0,
        minDate: a,
        maxDate: o,
        presets: "presets" in t ? t.presets : void 0,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "daterange":
      return {
        ...i,
        type: "daterange",
        fromLabel: "fromLabel" in t ? t.fromLabel : void 0,
        toLabel: "toLabel" in t ? t.toLabel : void 0,
        granularities: "granularities" in t ? t.granularities : void 0,
        presets: "presets" in t ? t.presets : void 0,
        clearable: s,
        renderIf: t.renderIf
      };
    case "richtext":
      return {
        ...i,
        type: "richtext",
        maxCharacters: "maxCharacters" in t ? t.maxCharacters : void 0,
        mentionsConfig: "mentionsConfig" in t ? t.mentionsConfig : void 0,
        height: "height" in t ? t.height : void 0,
        plainHtmlMode: "plainHtmlMode" in t ? t.plainHtmlMode : void 0,
        renderIf: t.renderIf
      };
    case "custom":
      return {
        ...i,
        type: "custom",
        render: "render" in t ? t.render : () => null,
        renderIf: t.renderIf
      };
    default:
      return {
        ...i,
        type: "text",
        inputType: "text",
        renderIf: t.renderIf
      };
  }
}
function Lr(r) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (let n = 0; n < r.length; n++) {
    if (t.has(n)) continue;
    const i = r[n], s = i.config.row;
    if (s) {
      const a = [];
      for (let l = n; l < r.length; l++)
        r[l].config.row === s && (a.push(r[l]), t.add(l));
      a.sort((l, d) => l.position - d.position);
      const o = {
        type: "row",
        fields: a.map(
          (l) => Fi(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(o);
    } else {
      t.add(n);
      const a = Fi(
        i.id,
        i.schema,
        i.config,
        i.fieldType
      );
      e.push({ type: "field", field: a });
    }
  }
  return e;
}
function da(r) {
  const e = r.shape, t = [], n = Object.entries(e);
  for (let i = 0; i < n.length; i++) {
    const [s, a] = n[i], o = la(a);
    if (o) {
      const l = hh(a, o);
      t.push({
        id: s,
        schema: a,
        config: o,
        fieldType: l,
        position: i
      });
    }
  }
  return t;
}
function gh(r, e) {
  return $(() => {
    const t = da(r), n = [], i = {};
    for (const o of t) {
      const l = o.config.section;
      l ? (i[l] || (i[l] = []), i[l].push(o)) : n.push(o);
    }
    n.sort((o, l) => o.position - l.position);
    for (const o of Object.keys(i))
      i[o].sort((l, d) => l.position - d.position);
    const s = [];
    s.push(...Lr(n));
    const a = Object.keys(i).sort((o, l) => {
      const d = e?.[o]?.order ?? 0, c = e?.[l]?.order ?? 0;
      return d - c;
    });
    for (const o of a) {
      const l = e?.[o], d = i[o], c = {
        id: o,
        type: "section",
        section: {
          title: l?.title ?? o,
          description: l?.description,
          renderIf: l?.renderIf,
          fields: Lr(d)
        }
      };
      s.push(c);
    }
    return s;
  }, [r, e]);
}
function mf(r, e) {
  const t = da(r), n = [], i = {};
  for (const o of t) {
    const l = o.config.section;
    l ? (i[l] || (i[l] = []), i[l].push(o)) : n.push(o);
  }
  n.sort((o, l) => o.position - l.position);
  for (const o of Object.keys(i))
    i[o].sort((l, d) => l.position - d.position);
  const s = [];
  s.push(...Lr(n));
  const a = Object.keys(i).sort((o, l) => {
    const d = e?.[o]?.order ?? 0, c = e?.[l]?.order ?? 0;
    return d - c;
  });
  for (const o of a) {
    const l = e?.[o], d = i[o], c = {
      id: o,
      type: "section",
      section: {
        title: l?.title ?? o,
        description: l?.description,
        renderIf: l?.renderIf,
        fields: Lr(d)
      }
    };
    s.push(c);
  }
  return s;
}
function vh(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({
      type: "switchGroup",
      fields: [...t]
    }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({
      type: "field",
      item: i
    }) : i.type === "row" ? e.push({
      type: "row",
      item: i,
      index: s
    }) : i.type === "section" && e.push({
      type: "section",
      item: i
    }));
  }), n(), e;
}
function yh(r) {
  const { forms: e } = xn(), { name: t, schema: n, sections: i, defaultValues: s, onSubmit: a, submitLabel: o = "Submit", className: l } = r, d = r.submitType ?? "default", c = d === "default" ? r.showSubmitButton ?? !0 : !1, u = d === "action-bar" ? r.discardableChanges ?? !1 : !1, f = d === "action-bar" ? r.discardLabel ?? e.actionBar.discard : e.actionBar.discard, p = d === "action-bar" ? r.actionBarLabel ?? e.actionBar.unsavedChanges : e.actionBar.unsavedChanges, C = gh(n, i), v = Qo({
    resolver: el(n),
    mode: "onChange",
    defaultValues: s
  }), x = v.formState.errors.root, { isDirty: k, isSubmitting: D } = v.formState, _ = async (g) => {
    const w = await a(g);
    w.success || (w.errors && Object.entries(w.errors).forEach(([I, T]) => {
      v.setError(I, {
        message: T
      });
    }), w.rootMessage && v.setError("root", {
      message: w.rootMessage
    }));
  }, S = () => {
    v.reset();
  }, y = vh(C), b = $(() => ({
    formName: t
  }), [t]);
  return h(ta.Provider, {
    value: b,
    children: P(tl, {
      ...v,
      children: [P("form", {
        onSubmit: v.handleSubmit(_),
        className: K(`flex flex-col ${Mn}`, l),
        children: [y.map((g, w) => {
          switch (g.type) {
            case "switchGroup":
              return h(na, {
                fields: g.fields
              }, `switch-group-${w}`);
            case "field":
              return h(Hn, {
                field: g.item.field
              }, g.item.field.id);
            case "row":
              return h(ra, {
                row: g.item
              }, `row-${g.index}`);
            case "section":
              return h("div", {
                className: w !== 0 ? xu : "",
                children: h(Bu, {
                  section: g.item
                })
              }, g.item.id);
            default:
              return null;
          }
        }), x && h("p", {
          className: "text-base font-medium text-f1-foreground-critical",
          children: x.message
        }), d === "default" && c && h(it, {
          type: "submit",
          label: o,
          loading: D
        })]
      }), d === "action-bar" && h(rl, {
        isOpen: k,
        label: p,
        primaryActions: [{
          label: o,
          onClick: v.handleSubmit(_)
        }],
        secondaryActions: u ? [{
          label: f,
          onClick: S
        }] : []
      })]
    })
  });
}
const gf = we("F0Form", yh), bh = ve((r, e) => h(kn, {
  ref: e,
  variant: "heading",
  ...r
}));
bh.displayName = "F0Heading";
const vf = we(
  "F0GridStack",
  En
), nn = 16, xh = ht({
  base: "h-0.5 rounded-full bg-f1-foreground cursor-pointer",
  variants: {
    depth: {
      0: "w-4",
      1: "w-3",
      2: "w-2",
      3: "w-1.5"
    },
    variant: {
      light: "",
      dark: "dark"
    },
    active: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [{
    variant: "light",
    active: !1,
    className: "bg-f1-foreground-tertiary opacity-60"
  }, {
    variant: "dark",
    active: !1,
    className: "opacity-50"
  }],
  defaultVariants: {
    depth: 3,
    variant: "light",
    active: !0
  }
});
function ua(r, e = 0) {
  return r.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? ua(t.children, e + 1) : []]);
}
function _h(r, e) {
  const t = r.length;
  if (t <= nn) return r;
  const n = t / (nn - 1), i = new Set(Array.from({
    length: nn - 1
  }, (s, a) => Math.min(Math.floor(a * n), t - 1)));
  if (i.add(t - 1), e) {
    const s = r.findIndex((a) => a.id === e);
    if (s !== -1 && !i.has(s)) {
      const a = [...i].reduce((o, l) => Math.abs(l - s) < Math.abs(o - s) ? l : o);
      i.delete(a), i.add(s);
    }
  }
  return [...i].sort((s, a) => s - a).map((s) => r[s]);
}
function wh({ items: r, activeItem: e, className: t, align: n = "left", variant: i = "dark" }) {
  const s = $(() => _h(ua(r), e), [r, e]);
  return h("div", {
    className: K("flex flex-col justify-center gap-2 py-3", n === "right" ? "items-end" : "items-start", t),
    children: s.map((a) => h("div", {
      className: xh({
        depth: a.depth,
        variant: i,
        active: a.id === e
      })
    }, a.id))
  });
}
const Ch = 300, Eh = 0, kh = ht({
  base: "w-auto overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-0 shadow-lg",
  variants: {
    size: {
      sm: "max-h-[240px]",
      md: "max-h-[400px]",
      lg: "max-h-[600px]"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function Sh({ title: r, items: e, className: t, activeItem: n, collapsible: i = !1, showChildrenCounter: s = !1, barsAlign: a = "left", size: o = "md", variant: l = "light" }) {
  const [d, c] = U(!1), u = j(!1), f = (C) => {
    C && !d && (u.current = !0), c(C);
  }, p = ee((C) => {
    !C || !u.current || (u.current = !1, requestAnimationFrame(() => {
      C.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return P(Fa, {
    open: d,
    onOpenChange: f,
    openDelay: Eh,
    closeDelay: Ch,
    children: [h(Ba, {
      asChild: !0,
      children: h("button", {
        className: K(Vi(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": r ?? "Menu",
        children: h(wh, {
          items: e,
          activeItem: n,
          align: a,
          variant: l
        })
      })
    }), h(Ha, {
      ref: p,
      side: a === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: K(kh({
        size: o
      }), !r && "pt-2", "scrollbar-macos"),
      children: h(nl, {
        title: r,
        items: e,
        activeItem: n,
        collapsible: i,
        hideChildrenCounter: !s,
        scrollable: !1
      })
    })]
  });
}
const yf = we(
  "F0TableOfContentPopover",
  Sh
), Nh = ({ benefits: r }) => h("div", {
  className: "flex flex-col gap-2",
  children: r.map((e, t) => h(Rh, {
    text: e
  }, t))
}), Rh = ({ text: r }) => P("div", {
  className: "flex flex-row items-start gap-2",
  children: [h($i, {
    icon: $a,
    size: "md",
    className: "text-f1-icon-positive"
  }), h("span", {
    children: r
  })]
}), ha = ve(({ title: r, image: e, benefits: t, actions: n, withShadow: i = !0, module: s, moduleName: a, tag: o, promoTag: l }, d) => P("div", {
  ref: d,
  className: K("bg-white flex flex-row rounded-xl border border-f1-border-secondary", i && "shadow-md"),
  children: [h("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: h("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), P("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [P("div", {
      className: "flex flex-col gap-5",
      children: [P("div", {
        className: "flex flex-col gap-2",
        children: [P("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && h(Ki, {
            module: s
          }), a && h("p", {
            className: "text-base font-medium text-f1-foreground",
            children: a
          })]
        }), (o || l) && P("div", {
          className: "flex justify-start gap-2",
          children: [o && h(ja, {
            icon: o.icon,
            text: o.label
          }), l && h(il, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), h("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: r
        })]
      }), h(Nh, {
        benefits: t
      })]
    }), n && h("div", {
      className: "flex gap-3",
      children: n
    })]
  })]
}));
ha.displayName = "ProductBlankslate";
function Dh({ isOpen: r, onClose: e, title: t, children: n, module: i, portalContainer: s }) {
  const [a, o] = U(r);
  return G(() => {
    o(r);
  }, [r]), h(Wa, {
    open: a,
    onOpenChange: (d) => {
      o(d), d || e();
    },
    modal: !0,
    children: P(Ga, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [P("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [P(Ua, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [i && h(Ki, {
            module: i,
            size: "lg"
          }), t]
        }), h(bn, {
          variant: "outline",
          icon: Ji,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), P(qi, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [n, h(Yi, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function bf({ isOpen: r, onClose: e, title: t, image: n, benefits: i, errorMessage: s, successMessage: a, loadingState: o, nextSteps: l, closeLabel: d, primaryAction: c, modalTitle: u, modalModule: f, secondaryAction: p, portalContainer: C, tag: v, promoTag: x, showResponseDialog: k = !0 }) {
  const [D, _] = U(r), [S, y] = U(null), [b, g] = U(!1), w = async () => {
    if (c?.onClick) {
      g(!0);
      try {
        await c.onClick(), _(!1), k && y("success");
      } catch {
        k && y("error");
      } finally {
        g(!1);
      }
    }
  }, I = () => {
    _(!1), e?.();
  }, T = b;
  return P(Qt, {
    children: [h(Dh, {
      isOpen: D,
      onClose: I,
      title: u,
      module: f,
      portalContainer: C,
      children: h("div", {
        className: "pb-4 pl-4",
        children: h(ha, {
          title: t,
          image: n,
          benefits: i,
          withShadow: !1,
          tag: v,
          promoTag: x,
          actions: P("div", {
            className: "flex gap-3",
            children: [c && h(it, {
              variant: c.variant,
              label: T ? o.label : c.label,
              icon: c.icon || void 0,
              onClick: w,
              loading: c.loading,
              size: c.size
            }), p && h(it, {
              onClick: p.onClick,
              label: p.label,
              variant: p.variant,
              size: p.size,
              icon: p.icon
            })]
          })
        })
      })
    }), S && k && h(ds, {
      open: !0,
      onClose: () => {
        I(), y(null);
      },
      success: S === "success",
      errorMessage: s,
      successMessage: a,
      nextSteps: l,
      closeLabel: d,
      portalContainer: C
    })]
  });
}
function Th({ mediaUrl: r, title: e, description: t, onClose: n, dismissible: i, width: s, trackVisibility: a, actions: o, showConfirmation: l = !0 }) {
  const [d, c] = U(!1), u = () => {
    c(!0), n && n();
  };
  G(() => {
    a && a(!d);
  }, [a, d]);
  const f = r?.includes(".mp4");
  return h(Qt, {
    children: d ? null : P(sl, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [P(al, {
        children: [i && h("div", {
          className: "absolute right-2 top-2 z-10",
          children: h(it, {
            variant: "ghost",
            icon: Ji,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          })
        }), P("div", {
          children: [h("div", {
            children: r && (f ? h("video", {
              src: r,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : h("img", {
              src: r,
              alt: e,
              className: "h-full w-full rounded-md"
            }))
          }), P("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [h(ni, {
              className: "text-lg font-medium",
              children: e
            }), h(ni, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), o && h(ol, {
        className: "p-3",
        children: o.map((p) => p.type === "upsell" ? h(us, {
          label: p.label,
          onRequest: p.onClick,
          errorMessage: p.errorMessage,
          successMessage: p.successMessage,
          loadingState: p.loadingState,
          nextSteps: p.nextSteps,
          closeLabel: p.closeLabel,
          showConfirmation: l && p.showConfirmation,
          variant: p.variant
        }, p.label) : h(it, {
          label: p.label,
          onClick: p.onClick,
          variant: p.variant
        }, p.label))
      })]
    })
  });
}
const Ah = ve(function({ primaryAction: e, secondaryAction: t, ...n }, i) {
  const s = (l) => l.variant === "promote" ? h(us, {
    label: l.label,
    onRequest: async () => {
      await l.onClick();
    },
    errorMessage: l.errorMessage,
    successMessage: l.successMessage,
    loadingState: l.loadingState,
    nextSteps: l.nextSteps,
    closeLabel: l.closeLabel,
    showIcon: l.showIcon,
    showConfirmation: l.showConfirmation,
    variant: l.variant
  }) : h(it, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), a = e?.variant !== "promote" ? e : void 0, o = t?.variant !== "promote" ? t : void 0;
  return P(ll, {
    ref: i,
    ...n,
    primaryAction: a,
    secondaryAction: o,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
Ah.displayName = "UpsellingBanner";
function xf({ isOpen: r, setIsOpen: e, label: t, variant: n = "promote", size: i = "md", showIcon: s = !0, side: a = "right", align: o = "center", icon: l = Va, mediaUrl: d, title: c, description: u, width: f = "300px", trackVisibility: p, actions: C, onClick: v, hideLabel: x = !1 }) {
  const [k, D] = U(!1), [_, S] = U(null), [y, b] = U(null), g = (R) => {
    e(R), v && v();
  }, w = async (R) => {
    if (R.type === "upsell") {
      b(R);
      try {
        await R.onClick(), R.showConfirmation && (D(!0), S("success"));
      } catch {
        D(!0), S("error");
      }
    }
  }, I = () => {
    S(null), D(!1), b(null), e(!1);
  }, T = r && !k, E = C?.map((R) => R.type === "upsell" ? {
    ...R,
    onClick: () => w(R)
  } : R);
  return P(Qt, {
    children: [P(Gi, {
      open: T,
      onOpenChange: g,
      children: [h(Ui, {
        asChild: !0,
        children: h(it, {
          variant: n,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(r),
          hideLabel: x
        })
      }), h(Zi, {
        side: a,
        align: o,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: h(Th, {
          mediaUrl: d,
          title: c,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: f,
          trackVisibility: p,
          actions: E,
          showConfirmation: !1
        })
      })]
    }), y?.type === "upsell" && y.showConfirmation && _ && h(ds, {
      open: !0,
      onClose: I,
      success: _ === "success",
      errorMessage: y.errorMessage,
      successMessage: y.successMessage,
      nextSteps: y.nextSteps,
      closeLabel: y.closeLabel,
      portalContainer: null
    })]
  });
}
const Oh = Fe(null), zh = ({ children: r, fullScreen: e = !0 }) => {
  const t = j(null), [n, i] = U(t.current);
  return Qa(() => {
    i(t.current);
  }, []), h(Oh.Provider, {
    value: {
      element: n
    },
    children: h("div", {
      ref: t,
      id: "f0-layout",
      className: K({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: r
    })
  });
}, Lh = ({ children: r }) => h(ul, {
  reducedMotion: "user",
  children: r
}), _f = ({ children: r, layout: e, link: t, privacyModeInitiallyEnabled: n, image: i, i18n: s, l10n: a, isDev: o = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: d = !1 }) => h(Lh, {
  children: h(Za, {
    isDev: o,
    showExperimentalWarnings: d,
    children: h(qa, {
      ...a,
      children: h(Ya, {
        ...s,
        children: h(Xa, {
          ...t,
          children: h(zh, {
            ...e,
            children: h(Ka, {
              children: h(cl, {
                initiallyEnabled: n,
                children: h(Ja, {
                  ...i,
                  children: h(dl, {
                    handler: l,
                    children: r
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}), Bi = (r) => `datacollection-${r}`, wf = {
  get: async (r) => JSON.parse(
    localStorage.getItem(Bi(r)) ?? "{}"
  ),
  set: async (r, e) => {
    localStorage.setItem(Bi(r), JSON.stringify(e));
  }
};
export {
  kf as A,
  lm as AiChatTranslationsProvider,
  Vh as AreaChart,
  Sf as Await,
  Zh as BarChart,
  Nf as Blockquote,
  qh as CategoryBarChart,
  Rf as ChatSpinner,
  Qh as ComboChart,
  jh as Dashboard,
  Bp as DndProvider,
  Df as Em,
  Tf as EmojiImage,
  Af as F0ActionItem,
  Of as F0AiChat,
  zf as F0AiChatProvider,
  Lf as F0AiChatTextArea,
  Pf as F0AiCollapsibleMessage,
  Mf as F0AiFullscreenChat,
  hf as F0Alert,
  If as F0Avatar,
  Wo as F0AvatarAlert,
  Ff as F0AvatarCompany,
  Hp as F0AvatarDate,
  Bf as F0AvatarEmoji,
  Hf as F0AvatarFile,
  Oa as F0AvatarIcon,
  jp as F0AvatarList,
  Ki as F0AvatarModule,
  jf as F0AvatarPerson,
  $f as F0AvatarTeam,
  ef as F0BigNumber,
  it as F0Button,
  Wf as F0ButtonDropdown,
  Gf as F0ButtonToggle,
  $p as F0Card,
  Ma as F0Checkbox,
  df as F0ChipList,
  cs as F0DatePicker,
  Uf as F0Dialog,
  Vf as F0DialogContext,
  Zf as F0DialogProvider,
  qf as F0EventCatcherProvider,
  yu as F0FilterPickerContent,
  gf as F0Form,
  vf as F0GridStack,
  cm as F0HILActionConfirmation,
  bh as F0Heading,
  $i as F0Icon,
  La as F0Link,
  Yf as F0MessageSources,
  Xf as F0OneIcon,
  Kf as F0OneSwitch,
  _f as F0Provider,
  qr as F0Select,
  yf as F0TableOfContentPopover,
  Wp as F0TagAlert,
  $o as F0TagBalance,
  Gp as F0TagCompany,
  Up as F0TagDot,
  Vp as F0TagList,
  Zp as F0TagPerson,
  ja as F0TagRaw,
  il as F0TagStatus,
  qp as F0TagTeam,
  bs as F0Text,
  Jf as F0Thinking,
  Qf as FullscreenChatContext,
  ep as GROUP_ID_SYMBOL,
  tp as H1,
  rp as H2,
  np as H3,
  Uh as HomeLayout,
  ip as Hr,
  sp as Image,
  $h as Layout,
  ap as Li,
  Yh as LineChart,
  op as Ol,
  lp as OneFilterPicker,
  cp as P,
  Xh as PieChart,
  dp as Pre,
  cl as PrivacyModeProvider,
  ha as ProductBlankslate,
  Yp as ProductCard,
  bf as ProductModal,
  Th as ProductWidget,
  Jh as ProgressBarChart,
  Wh as StandardLayout,
  up as Strong,
  hp as Table,
  Xp as Tag,
  Kp as TagCounter,
  fp as Td,
  pp as Th,
  Gh as TwoColumnLayout,
  mp as Ul,
  ds as UpsellRequestResponseDialog,
  Ah as UpsellingBanner,
  us as UpsellingButton,
  xf as UpsellingPopover,
  Kh as VerticalBarChart,
  dm as actionItemStatuses,
  um as aiTranslations,
  Hh as avatarVariants,
  gp as buildTranslations,
  sf as buttonDropdownSizes,
  nf as buttonDropdownVariants,
  rf as buttonSizes,
  af as buttonToggleSizes,
  of as buttonToggleVariants,
  tf as buttonVariants,
  Jp as cardImageFits,
  Qp as cardImageSizes,
  em as createAtlaskitDriver,
  vp as createDataSourceDefinition,
  Tl as createPageLayoutBlock,
  Al as createPageLayoutBlockGroup,
  wf as dataCollectionLocalStorageHandler,
  uf as datepickerSizes,
  mm as defaultTranslations,
  yp as downloadTableAsExcel,
  Bn as evaluateRenderIf,
  we as experimental,
  ff as f0,
  bp as f0MarkdownRenderers,
  Fn as generateAnchorId,
  xp as getAnimationVariants,
  _p as getDataSourcePaginationType,
  wp as getEmojiLabel,
  la as getF0Config,
  mf as getSchemaDefinition,
  pf as hasF0Config,
  hh as inferFieldType,
  Cp as isInfiniteScrollPagination,
  Ep as isPageBasedPagination,
  lf as linkVariants,
  kp as modules,
  hm as oneIconSizes,
  tm as predefinedPresets,
  rm as selectSizes,
  cf as tagDotColors,
  Sp as useAiChat,
  fm as useAiChatTranslations,
  Np as useData,
  Rp as useDataSource,
  Dp as useDefaultCopilotActions,
  nm as useDndEvents,
  im as useDraggable,
  sm as useDroppableList,
  Tp as useEmojiConfetti,
  Ap as useF0Dialog,
  Op as useGroups,
  zp as useMessageSourcesAction,
  Lp as useOrchestratorThinkingAction,
  am as usePrivacyMode,
  Pp as useReducedMotion,
  gh as useSchemaDefinition,
  Mp as useSelectable,
  Ip as useXRay
};
