import { a6 as G, a7 as Ye, aa as qn, ab as Gi, ac as ji, ad as Os, ae as Ms, af as Kn, ag as Te, u as $i, ah as Ui, ai as zs, aj as Ps, ak as Ls, al as Is, am as ve, an as be, ao as Hs, ap as Bs, aq as Xn, ar as Fs, as as Xt, at as Yn, au as Zn, av as Jn, aw as Qn, ax as er, ay as tr, az as Ws, aA as Gs, aB as js, aC as $s, aD as Us, a8 as Oe, aE as gn, aF as Vs, aG as qs, aH as at, aI as Ks, aJ as Xs, aK as Ys, aL as Zs, aM as Js, aN as Qs, aO as eo, aP as to, aQ as io, aR as no, aS as ro, aT as so, aU as ir, aV as oo, aW as ao, aX as lo, aY as co, aZ as uo, a_ as nr, a$ as ho, b0 as fo, b1 as mo, I as po, b2 as go, b3 as vo, b4 as bo, b5 as yo } from "./F0AiChat-Dh2BXfQX.js";
import { A as Kh, bk as Xh, B as Yh, C as Zh, E as Jh, bz as Qh, h as ef, F as tf, a as nf, x as rf, i as sf, b as of, b6 as af, b7 as lf, b8 as cf, b9 as df, bb as uf, bc as hf, bd as ff, be as mf, bf as pf, bg as gf, bh as vf, bv as bf, s as yf, t as xf, v as wf, w as Cf, c as _f, bl as Ef, n as Sf, o as Df, p as Rf, H as Nf, k as kf, L as Tf, O as Af, bj as Of, q as Mf, P as zf, S as Pf, T as Lf, l as If, m as Hf, U as Bf, bw as Ff, bq as Wf, r as Gf, j as jf, bt as $f, bp as Uf, bA as Vf, bo as qf, bn as Kf, ba as Xf, d as Yf, bm as Zf, br as Jf, e as Qf, bB as em, bi as tm, bs as im, g as nm, f as rm, by as sm, bu as om, bx as am } from "./F0AiChat-Dh2BXfQX.js";
import { jsx as h, jsxs as A, Fragment as Ot } from "react/jsx-runtime";
import H, { forwardRef as ae, useRef as I, useImperativeHandle as xo, Children as Yt, createContext as Me, useContext as _e, useState as F, useMemo as P, useEffect as B, useCallback as q, useLayoutEffect as zi, createElement as vn, isValidElement as rr, Fragment as wo, memo as Co, useReducer as _o, cloneElement as Eo, PureComponent as So } from "react";
import { createPortal as sr, unstable_batchedUpdates as jt } from "react-dom";
import { L as or, C as Do, i as ar, D as Ro, S as bn, a as No, f as Di, b as yt, c as ko, A as To, d as $t, e as lr, E as Ao, g as qt, h as Oo, j as Mo, k as zo, l as st, m as cr, u as Po, G as Lo, n as Io, o as yn, p as Ho, q as dr, r as Bo, B as ur, X as hr, Y as Pi, s as Fo, t as fr, v as Wo, w as Go, x as jo, y as $o, z as Uo, F as Vo, H as qo, I as Ko, J as xn, K as Xo, M as xt, N as Ri, O as Yo, P as Zo, Q as Jo, R as Qo, T as ea, U as ta, V as ia, W as na, Z as ra, _ as sa, $ as oa, a0 as wn, a1 as aa, a2 as la, a3 as mr, a4 as ca, a5 as da, a6 as ua, a7 as Vi, a8 as ha, a9 as fa, aa as ma, ab as pa, ac as ga, ad as va, ae as ba, af as ya, ag as xa, ah as wa, ai as Ca, aj as _a, ak as Ea, al as pr, am as Sa, an as Da, ao as Cn, ap as Ra, aq as gr, ar as Na, as as ka, at as Ta, au as Aa } from "./DataCollectionStorageProvider-DtYiihLe.js";
import { aM as cm, av as dm, aw as um, az as hm, aD as fm, aE as mm, aF as pm, aH as gm, aI as vm, aJ as bm, aK as ym, aC as xm, aG as wm, ax as Cm, ay as _m, aL as Em, aA as Sm, aB as Dm, aN as Rm, aO as Nm, aP as km, aQ as Tm } from "./DataCollectionStorageProvider-DtYiihLe.js";
import { A as Om, F as Mm, c as zm, b as Pm, a as Lm, o as Im, u as Hm } from "./F0HILActionConfirmation-Cnf4j-kO.js";
import { defaultTranslations as Fm } from "./i18n-provider-defaults.js";
import './f0.css';const Oa = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Ma = ae(function({ widgets: e, children: t }, n) {
  const r = I(null);
  xo(n, () => r.current);
  const s = Yt.toArray(e).filter((o) => !!o).map((o, a) => h("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: o
  }, a));
  return h(or, {
    layout: "home",
    children: A("div", {
      ref: r,
      className: "@container",
      children: [A("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [h(Do, {
          columns: Oa,
          showArrows: !1,
          children: s
        }), h("main", {
          children: t
        })]
      }), A("div", {
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
}), za = Ye({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), vr = H.forwardRef(({ children: i, variant: e, className: t, ...n }, r) => h(or, {
  layout: "standard",
  children: h("section", {
    ref: r,
    className: G("relative flex-1 overflow-auto", t),
    ...n,
    children: h("div", {
      className: G(za({
        variant: e
      })),
      children: i
    })
  })
}));
vr.displayName = "StandardLayout";
const Pa = ae(function({ children: e, sideContent: t, mainColumnPosition: n = "left", sticky: r = !1 }, s) {
  return h("div", {
    ref: s,
    className: "h-full",
    children: A("div", {
      className: G("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", r && "md:sticky md:top-0 md:max-h-full"),
      children: [h("main", {
        className: G("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", r ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), h(La, {
        sticky: r,
        className: G("order-1", n === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), La = ({ children: i, className: e }) => h("aside", {
  className: G("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: i
}), br = Me(null);
function yr() {
  const i = _e(br);
  if (!i)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return i;
}
function Ia(i) {
  const { content: e, ...t } = i;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function ot(i) {
  const e = Ia(i);
  return i.subGridOpts?.children && (e.subGridOpts = {
    ...i.subGridOpts,
    children: i.subGridOpts.children.map(
      (t) => ot(t)
    )
  }), e;
}
const Ha = ["noMove", "noResize", "locked", "w", "h", "x", "y"], Ve = 200;
function Ba(i) {
  const e = i.cloneNode(!0);
  return i.querySelectorAll("canvas").forEach((n) => {
    if (n.width > 0 && n.height > 0)
      try {
        const r = n.toDataURL("image/png"), s = e.querySelectorAll("canvas"), o = Array.from(i.querySelectorAll("canvas")).indexOf(n), a = s[o];
        if (a && a.parentElement) {
          const l = document.createElement("img");
          l.src = r, l.style.width = `${n.width}px`, l.style.height = `${n.height}px`, l.style.display = "block", n.className && (l.className = n.className), n.id && (l.id = n.id), a.parentElement.replaceChild(l, a);
        }
      } catch (r) {
        console.warn("Failed to convert canvas to image:", r);
      }
  }), e.innerHTML;
}
function Fa({ children: i, options: e, onResizeStop: t, onChange: n, widgets: r }) {
  const [s, o] = F(null), a = I(null), l = I(!1), d = P(() => ({
    ...e,
    children: (r || []).map((C) => ot(C))
  }), [e, r]), [c, u] = F(() => {
    const C = /* @__PURE__ */ new Map(), D = r || [], b = (y) => {
      y.id && y.content && C.set(y.id, y.content), y.subGridOpts?.children && y.subGridOpts.children.forEach((g) => {
        b(g);
      });
    };
    return D.forEach((y) => {
      b(y);
    }), C;
  }), f = I(c);
  B(() => {
    f.current = c;
  }, [c]);
  const [m, x] = F(() => {
    const C = /* @__PURE__ */ new Map(), D = r || [], b = (y) => {
      y.id && y._originalContent !== void 0 && C.set(y.id, y._originalContent), y.subGridOpts?.children && y.subGridOpts.children.forEach((g) => {
        b(g);
      });
    };
    return D.forEach((y) => {
      b(y);
    }), C;
  }), v = I(m);
  B(() => {
    v.current = m;
  }, [m]);
  const [w, S] = F(() => {
    const C = /* @__PURE__ */ new Map(), D = r || [], b = (y) => {
      if (y.id) {
        const g = ot(y);
        C.set(y.id, g);
      }
      y.subGridOpts?.children && y.subGridOpts.children.forEach((g) => {
        b(g);
      });
    };
    return D.forEach((y) => {
      b(y);
    }), C;
  });
  qn(() => {
    if (!s) return;
    const C = s.save();
    if (!Array.isArray(C))
      return;
    const D = C.map((T) => T.id), b = r || [], y = b.map((T) => T.id), g = b.filter((T) => !D.includes(T.id));
    g.length > 0 && (g.forEach((T) => {
      T.content && f.current.set(T.id, T.content), T._originalContent !== void 0 && v.current.set(T.id, T._originalContent);
    }), g.forEach((T) => {
      const E = ot(T);
      s.addWidget(E);
    }), S((T) => {
      const E = new Map(T);
      return g.forEach((R) => {
        const k = ot(R);
        E.set(R.id, k);
      }), E;
    }), u((T) => {
      const E = new Map(T);
      return g.forEach((R) => {
        R.content && E.set(R.id, R.content);
      }), E;
    }), x((T) => {
      const E = new Map(T);
      return g.forEach((R) => {
        R._originalContent !== void 0 && E.set(R.id, R._originalContent);
      }), E;
    }));
    const _ = C.filter((T) => !y.includes(T.id));
    if (_.length > 0) {
      const T = _.map((E) => E.id).filter(Boolean);
      T.forEach((E) => {
        setTimeout(() => {
          f.current.delete(E), v.current.delete(E);
        }, Ve);
      }), _.forEach((E) => {
        const R = s.el.querySelector(`[gs-id="${E.id}"]`);
        R && setTimeout(() => {
          s.removeWidget(R, !0);
        }, Ve);
      }), S((E) => {
        const R = new Map(E);
        return T.forEach((k) => {
          setTimeout(() => {
            R.delete(k);
          }, Ve);
        }), R;
      }), u((E) => {
        const R = new Map(E);
        return T.forEach((k) => {
          if (R.get(k)) {
            const X = s.el.querySelector(`[gs-id="${k}"] .grid-stack-item-content`);
            let Y = "";
            X && (Y = Ba(X)), R.set(k, h(Gi.div, {
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
                  duration: Ve / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: Ve / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: Ve / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: Y
              }
            }));
          }
          setTimeout(() => {
            R.delete(k);
          }, Ve);
        }), R;
      }), x((E) => {
        const R = new Map(E);
        return T.forEach((k) => {
          setTimeout(() => {
            R.delete(k);
          }, Ve);
        }), R;
      });
    }
    const M = b.filter((T) => D.includes(T.id));
    if (M.length > 0) {
      const T = [];
      M.forEach((E) => {
        const R = C.find((L) => L.id === E.id);
        if (!R)
          return;
        const k = Ha.filter((L) => R[L] !== E[L]);
        if (k.length > 0) {
          const L = {}, X = ["w", "h", "x", "y"], Y = ["noMove", "noResize", "locked"], V = k.filter(($) => X.includes($)), Q = k.filter(($) => Y.includes($));
          if (V.length > 0 && Q.length > 0 && V.length + Q.length === k.length ? Q.forEach(($) => {
            const ne = E[$];
            ne !== void 0 && (L[$] = ne);
          }) : k.forEach(($) => {
            const ne = E[$];
            ne !== void 0 && (L[$] = ne);
          }), Object.keys(L).length > 0) {
            const $ = s.el.querySelector(`[gs-id="${E.id}"]`);
            $ && T.push({
              id: E.id,
              element: $,
              updateOptions: L
            });
          }
        }
      }), M.forEach((E) => {
        E.content && f.current.set(E.id, E.content), E._originalContent !== void 0 && v.current.set(E.id, E._originalContent);
      }), T.forEach(({ element: E, updateOptions: R }) => {
        try {
          s.update(E, R);
        } catch (k) {
          console.warn("Error updating widget:", k);
        }
      }), S((E) => {
        const R = new Map(E);
        return M.forEach((k) => {
          const L = ot(k);
          R.set(k.id, L);
        }), R;
      }), u((E) => {
        const R = new Map(E);
        return M.forEach((k) => {
          k.content && R.set(k.id, k.content);
        }), R;
      }), x((E) => {
        const R = new Map(E);
        return M.forEach((k) => {
          k._originalContent !== void 0 && R.set(k.id, k._originalContent);
        }), R;
      });
    }
    l.current || (l.current = !0);
  }, [r]), B(() => {
    if (!s || !d.handle) return;
    s.opts && (s.opts.handle = d.handle);
    const C = setTimeout(() => {
      if (s && s.el && d.handle && s.el.querySelectorAll(d.handle).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(C);
  }, [s, d.handle, d.children]);
  const N = q(() => {
    if (!s)
      return;
    const C = s.save();
    if (Array.isArray(C)) {
      const D = C.map((b) => {
        const y = b.id;
        if (!y) return null;
        const g = f.current.get(y), _ = v.current.get(y), M = b;
        return {
          ...b,
          id: y,
          w: b.w ?? 1,
          h: b.h ?? 1,
          x: b.x ?? 0,
          y: b.y ?? 0,
          meta: M.meta,
          _originalContent: _,
          content: g ?? h("div", {
            children: "No content"
          })
        };
      }).filter((b) => b !== null);
      n?.(D);
    }
  }, [s]);
  return B(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const C = (D, b) => {
      t?.(D, b);
    };
    try {
      s.on("resizestop", C), s.on("change added removed", N);
    } catch (D) {
      console.error("Error attaching GridStack event listeners:", D);
      return;
    }
    return () => {
      const D = a.current;
      if (D && D.el)
        try {
          D.off("resizestop"), D.off("change added removed");
        } catch (b) {
          console.warn("Error cleaning up GridStack event listeners:", b);
        }
    };
  }, [s, t, N]), B(() => {
    a.current = s;
  }, [s]), B(() => {
    s && s.el && s.el.parentElement && l.current && N();
  }, [s]), h(br.Provider, {
    value: {
      options: d,
      gridStack: s,
      _gridStack: {
        value: s,
        set: o
      },
      _rawWidgetMetaMap: {
        value: w,
        set: S
      },
      _reactContentMap: {
        value: c,
        set: u
      }
    },
    children: i
  });
}
const xr = Me(null);
function Wa() {
  const i = _e(xr);
  if (!i)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return i;
}
const Ga = Me(null);
function ja() {
  const { _reactContentMap: i } = yr(), { getWidgetContainer: e } = Wa();
  return h(Ot, {
    children: Array.from(i.value.entries()).map(([t, n]) => {
      const r = e(t);
      return r ? h(Ga.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: n && sr(n, r)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function $a(i, e, t, n, r) {
  const s = (...o) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + r + " and has been replaced with `" + n + "`. It will be **removed** in a future release"), e.apply(i, o));
  return s.prototype = e.prototype, s;
}
class p {
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
      let r = t.querySelectorAll(e);
      return !r.length && e[0] !== "." && e[0] !== "#" && (r = t.querySelectorAll("." + e), r.length || (r = t.querySelectorAll("#" + e))), Array.from(r);
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
      let r = t.querySelector(e);
      return n && !r && (r = n.getElementById(e)), r || (r = t.querySelector("." + e)), r;
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
    return e.forEach((r) => {
      r && n.classList.add(r);
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
    return p.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
    const n = e.x > t.x ? e.x : t.x, r = e.x + e.w < t.x + t.w ? e.x + e.w : t.x + t.w;
    if (r <= n)
      return 0;
    const s = e.y > t.y ? e.y : t.y, o = e.y + e.h < t.y + t.h ? e.y + e.h : t.y + t.h;
    return o <= s ? 0 : (r - n) * (o - s);
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
    return e.sort((r, s) => {
      const o = t * ((r.y ?? 1e4) - (s.y ?? 1e4));
      return o === 0 ? t * ((r.x ?? 1e4) - (s.x ?? 1e4)) : o;
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
        const r = e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%|cm|mm)?$/);
        if (!r)
          throw new Error(`Invalid height val = ${e}`);
        n = r[2] || "px", t = parseFloat(r[1]);
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
      for (const r in n) {
        if (!n.hasOwnProperty(r))
          return;
        e[r] === null || e[r] === void 0 ? e[r] = n[r] : typeof n[r] == "object" && typeof e[r] == "object" && p.defaults(e[r], n[r]);
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
        const r = e[n], s = t[n];
        n[0] === "_" || r === s ? delete e[n] : r && typeof r == "object" && s !== void 0 && (p.removeInternalAndSame(r, s), Object.keys(r).length || delete e[n]);
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
    return (...r) => {
      n || (n = !0, setTimeout(() => {
        e(...r), n = !1;
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : p.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, n) {
    const r = p.getScrollElement(e);
    if (!r)
      return;
    const s = e.getBoundingClientRect(), o = r.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(o.bottom, a), d = s.top - Math.max(o.top, 0), c = r.scrollTop;
    d < 0 && n < 0 ? e.offsetHeight > o.height ? r.scrollTop += n : r.scrollTop += Math.abs(d) > Math.abs(n) ? n : d : l > 0 && n > 0 && (e.offsetHeight > o.height ? r.scrollTop += n : r.scrollTop += l > n ? n : l), t.top += r.scrollTop - c;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, n) {
    const r = p.getScrollElement(t), s = r.clientHeight, o = r === p.getScrollElement() ? 0 : r.getBoundingClientRect().top, a = e.clientY - o, l = a < n, d = a > s - n;
    l ? r.scrollBy({ behavior: "smooth", top: a - n }) : d && r.scrollBy({ behavior: "smooth", top: n - (s - a) });
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], n = p.clone(e);
    for (const r in n)
      n.hasOwnProperty(r) && typeof n[r] == "object" && r.substring(0, 2) !== "__" && !t.find((s) => s === r) && (n[r] = p.cloneDeep(e[r]));
    return n;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let n;
    typeof t == "string" ? n = p.getElement(t) : n = t, n && n.appendChild(e);
  }
  // public static setPositionRelative(el: HTMLElement): void {
  //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
  //     el.style.position = "relative";
  //   }
  // }
  static addElStyles(e, t) {
    if (t instanceof Object)
      for (const n in t)
        t.hasOwnProperty(n) && (Array.isArray(t[n]) ? t[n].forEach((r) => {
          e.style[n] = r;
        }) : e.style[n] = t[n]);
  }
  static initEvent(e, t) {
    const n = { type: t.type }, r = {
      button: 0,
      which: 0,
      buttons: 1,
      bubbles: !0,
      cancelable: !0,
      target: t.target ? t.target : e.target
    };
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].forEach((s) => n[s] = e[s]), ["pageX", "pageY", "clientX", "clientY", "screenX", "screenY"].forEach((s) => n[s] = e[s]), { ...n, ...r };
  }
  /** copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target */
  static simulateMouseEvent(e, t, n) {
    const r = e, s = new MouseEvent(t, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      view: window,
      detail: 1,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: r.ctrlKey ?? !1,
      altKey: r.altKey ?? !1,
      shiftKey: r.shiftKey ?? !1,
      metaKey: r.metaKey ?? !1,
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
    p.addElStyles(t, {
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
    const r = e[t];
    e[t] = e[n], e[n] = r;
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
class Ie {
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
  _fixCollisions(e, t = e, n, r = {}) {
    if (this.sortNodes(-1), n = n || this.collide(e, t), !n)
      return !1;
    if (e._moving && !r.nested && !this.float && this.swap(e, n))
      return !0;
    let s = t;
    !this._loading && this._useEntireRowArea(e, t) && (s = { x: 0, w: this.column, y: t.y, h: t.h }, n = this.collide(e, s, r.skip));
    let o = !1;
    const a = { nested: !0, pack: !1 };
    let l = 0;
    for (; n = n || this.collide(e, s, r.skip); ) {
      if (l++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let d;
      if (n.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(n, { ...n, y: e.y }, e) || !this.collide(n, { ...n, y: t.y - n.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: n.y + n.h, ...a };
        d = this._loading && p.samePos(e, c) ? !0 : this.moveNode(e, c), (n.locked || this._loading) && d ? p.copyPos(t, e) : !n.locked && d && r.pack && (this._packNodes(), t.y = n.y + n.h, p.copyPos(e, t)), o = o || d;
      } else
        d = this.moveNode(n, { ...n, y: t.y + t.h, skip: e, ...a });
      if (!d)
        return o;
      n = void 0;
    }
    return o;
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
    const r = e._id, s = n?._id;
    return this.nodes.find((o) => o._id !== r && o._id !== s && p.isIntercepted(o, t));
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
    const r = e._id, s = n?._id;
    return this.nodes.filter((o) => o._id !== r && o._id !== s && p.isIntercepted(o, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, n) {
    if (!t.rect || !e._rect)
      return;
    const r = e._rect, s = { ...t.rect };
    s.y > r.y ? (s.h += s.y - r.y, s.y = r.y) : s.h += r.y - s.y, s.x > r.x ? (s.w += s.x - r.x, s.x = r.x) : s.w += r.x - s.x;
    let o, a = 0.5;
    for (let l of n) {
      if (l.locked || !l._rect)
        break;
      const d = l._rect;
      let c = Number.MAX_VALUE, u = Number.MAX_VALUE;
      r.y < d.y ? c = (s.y + s.h - d.y) / d.h : r.y + r.h > d.y + d.h && (c = (d.y + d.h - s.y) / d.h), r.x < d.x ? u = (s.x + s.w - d.x) / d.w : r.x + r.w > d.x + d.w && (u = (d.x + d.w - s.x) / d.w);
      const f = Math.min(u, c);
      f > a && (a = f, o = l);
    }
    return t.collide = o, o;
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
  cacheRects(e, t, n, r, s, o) {
    return this.nodes.forEach((a) => a._rect = {
      y: a.y * t + n,
      x: a.x * e + o,
      w: a.w * e - o - r,
      h: a.h * t - n - s
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
      const s = t.x, o = t.y;
      return t.x = e.x, t.y = e.y, e.h != t.h ? (e.x = s, e.y = t.y + t.h) : e.w != t.w ? (e.x = t.x + t.w, e.y = o) : (e.x = s, e.y = o), e._dirty = t._dirty = !0, !0;
    }
    let r;
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (r = p.isTouching(e, t)))
      return n();
    if (r !== !1) {
      if (e.w === t.w && e.x === t.x && (r || (r = p.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return n();
      }
      if (r !== !1) {
        if (e.h === t.h && e.y === t.y && (r || (r = p.isTouching(e, t)))) {
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
  isAreaEmpty(e, t, n, r) {
    const s = { x: e || 0, y: t || 0, w: n || 1, h: r || 1 };
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
    const r = this._inColumnResize;
    r || (this._inColumnResize = !0);
    const s = this.nodes;
    return this.nodes = [], s.forEach((o, a, l) => {
      let d;
      o.locked || (o.autoPosition = !0, e === "list" && a && (d = l[a - 1])), this.addNode(o, !1, d);
    }), r || delete this._inColumnResize, n || this.batchUpdate(!1), this;
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
    return this.nodes = p.sort(this.nodes, e), this;
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
    e._id = e._id ?? Ie._idSeq++;
    const n = e.id;
    if (n) {
      let s = 1;
      for (; this.nodes.find((o) => o.id === e.id && o !== e); )
        e.id = n + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const r = { x: 0, y: 0, w: 1, h: 1 };
    return p.defaults(e, r), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, p.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = r.x, e.autoPosition = !0), isNaN(e.y) && (e.y = r.y, e.autoPosition = !0), isNaN(e.w) && (e.w = r.w), isNaN(e.h) && (e.h = r.h), this.nodeBoundFix(e, t), e;
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
    const n = e._orig || p.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), p.samePos(e, n) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !p.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = p.copyPos({}, e), delete e._dirty;
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
      !e._orig || p.samePos(e, e._orig) || (p.copyPos(e, e._orig), e._dirty = !0);
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
  findEmptyPosition(e, t = this.nodes, n = this.column, r) {
    const s = r ? r.y * n + (r.x + r.w) : 0;
    let o = !1;
    for (let a = s; !o; ++a) {
      const l = a % n, d = Math.floor(a / n);
      if (l + e.w > n)
        continue;
      const c = { x: l, y: d, w: e.w, h: e.h };
      t.find((u) => p.isIntercepted(c, u)) || ((e.x !== l || e.y !== d) && (e._dirty = !0), e.x = l, e.y = d, delete e.autoPosition, o = !0);
    }
    return o;
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
    const r = this.nodes.find((o) => o._id === e._id);
    if (r)
      return r;
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
    return this.nodes.find((r) => r._id === e._id) ? (n && this.removedNodes.push(e), t && (e._removeDOM = !0), this.nodes = this.nodes.filter((r) => r._id !== e._id), e._isAboutToRemove || this._packNodes(), this._notify([e]), this) : this;
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
    e && this.nodes.forEach((r) => r._removeDOM = !0);
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
    const r = new Ie({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((o) => o._id === e._id ? (n = { ...o }, n) : { ...o })
    });
    if (!n)
      return !1;
    const s = r.moveNode(n, t) && r.getRow() <= Math.max(this.getRow(), this.maxRow);
    if (!s && !t.resizing && t.collide) {
      const o = t.collide.el.gridstackNode;
      if (this.swap(e, o))
        return this._notify(), !0;
    }
    return s ? (r.nodes.filter((o) => o._dirty).forEach((o) => {
      const a = this.nodes.find((l) => l._id === o._id);
      a && (p.copyPos(a, o), a._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new Ie({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((r) => ({ ...r }))
    }), n = { ...e };
    return this.cleanupNode(n), delete n.el, delete n._id, delete n.content, delete n.grid, t.addNode(n), t.getRow() <= this.maxRow ? (e._willFitPos = p.copyPos({}, n), !0) : !1;
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
    const r = e.w !== t.w || e.h !== t.h, s = p.copyPos({}, e, !0);
    if (p.copyPos(s, t), this.nodeBoundFix(s, r), p.copyPos(t, s), !t.forceCollide && p.samePos(e, t))
      return !1;
    const o = p.copyPos({}, e), a = this.collideAll(e, s, t.skip);
    let l = !0;
    if (a.length) {
      const d = e._moving && !t.nested;
      let c = d ? this.directionCollideCoverage(e, t, a) : a[0];
      if (d && c && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = p.areaIntercept(t.rect, c._rect), f = p.area(t.rect), m = p.area(c._rect);
        u / (f < m ? f : m) > 0.8 && (c.grid.makeSubGrid(c.el, void 0, e), c = void 0);
      }
      c ? l = !this._fixCollisions(e, s, c, t) : (l = !1, n && delete t.pack);
    }
    return l && !p.samePos(e, s) && (e._dirty = !0, p.copyPos(e, s)), t.pack && this._packNodes()._notify(), !p.samePos(e, o);
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
    const r = this._layouts?.length || 0;
    let s;
    r && (n ? n !== this.column && (s = this._layouts[n]) : this.column !== r - 1 && (s = this._layouts[r - 1]));
    const o = [];
    return this.sortNodes(), this.nodes.forEach((a) => {
      const l = s?.find((c) => c._id === a._id), d = { ...a, ...l || {} };
      p.removeInternalForSave(d, !e), t && t(a, d), o.push(d);
    }), o;
  }
  /** @internal called whenever a node is added or moved - updates the cached layouts */
  layoutsNodesChange(e) {
    return !this._layouts || this._inColumnResize ? this : (this._layouts.forEach((t, n) => {
      if (!t || n === this.column)
        return this;
      if (n < this.column)
        this._layouts[n] = void 0;
      else {
        const r = n / this.column;
        e.forEach((s) => {
          if (!s._orig)
            return;
          const o = t.find((a) => a._id === s._id);
          o && (o.y >= 0 && s.y !== s._orig.y && (o.y += s.y - s._orig.y), s.x !== s._orig.x && (o.x = Math.round(s.x * r)), s.w !== s._orig.w && (o.w = Math.round(s.w * r)));
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
    const r = n === "compact" || n === "list";
    r && this.sortNodes(1), t < e && this.cacheLayout(this.nodes, e), this.batchUpdate();
    let s = [], o = r ? this.nodes : p.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const a = this._layouts[t] || [], l = this._layouts.length - 1;
      !a.length && e !== l && this._layouts[l]?.length && (e = l, this._layouts[l].forEach((d) => {
        const c = o.find((u) => u._id === d._id);
        c && (!r && !d.autoPosition && (c.x = d.x ?? c.x, c.y = d.y ?? c.y), c.w = d.w ?? c.w, (d.x == null || d.y === void 0) && (c.autoPosition = !0));
      })), a.forEach((d) => {
        const c = o.findIndex((u) => u._id === d._id);
        if (c !== -1) {
          const u = o[c];
          if (r) {
            u.w = d.w;
            return;
          }
          (d.autoPosition || isNaN(d.x) || isNaN(d.y)) && this.findEmptyPosition(d, s), d.autoPosition || (u.x = d.x ?? u.x, u.y = d.y ?? u.y, u.w = d.w ?? u.w, s.push(u)), o.splice(c, 1);
        }
      });
    }
    if (r)
      this.compact(n, !1);
    else {
      if (o.length)
        if (typeof n == "function")
          n(t, e, s, o);
        else {
          const a = r || n === "none" ? 1 : t / e, l = n === "move" || n === "moveScale", d = n === "scale" || n === "moveScale";
          o.forEach((c) => {
            c.x = t === 1 ? 0 : l ? Math.round(c.x * a) : Math.min(c.x, t - 1), c.w = t === 1 || e === 1 ? 1 : d ? Math.round(c.w * a) || 1 : Math.min(c.w, t), s.push(c);
          }), o = [];
        }
      s = p.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((a) => {
        this.addNode(a, !1), delete a._orig;
      });
    }
    return this.nodes.forEach((a) => delete a._orig), this.batchUpdate(!1, !r), delete this._inColumnResize, this;
  }
  /**
   * call to cache the given layout internally to the given location so we can restore back when column changes size
   * @param nodes list of nodes
   * @param column corresponding column index to save it under
   * @param clear if true, will force other caches to be removed (default false)
   */
  cacheLayout(e, t, n = !1) {
    const r = [];
    return e.forEach((s, o) => {
      if (s._id === void 0) {
        const a = s.id ? this.nodes.find((l) => l.id === s.id) : void 0;
        s._id = a?._id ?? Ie._idSeq++;
      }
      r[o] = { x: s.x, y: s.y, w: s.w, _id: s._id };
    }), this._layouts = n ? [] : this._layouts || [], this._layouts[t] = r, this;
  }
  /**
   * call to cache the given node layout internally to the given location so we can restore back when column changes size
   * @param node single node to cache
   * @param column corresponding column index to save it under
   */
  cacheOneLayout(e, t) {
    e._id = e._id ?? Ie._idSeq++;
    const n = { x: e.x, y: e.y, w: e.w, _id: e._id };
    (e.autoPosition || e.x === void 0) && (delete n.x, delete n.y, e.autoPosition && (n.autoPosition = !0)), this._layouts = this._layouts || [], this._layouts[t] = this._layouts[t] || [];
    const r = this.findCacheLayout(e, t);
    return r === -1 ? this._layouts[t].push(n) : this._layouts[t][r] = n, this;
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
Ie._idSeq = 0;
const ue = {
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
class z {
}
const Ce = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class Ae {
}
function Zt(i, e) {
  i.touches.length > 1 || (i.cancelable && i.preventDefault(), p.simulateMouseEvent(i.changedTouches[0], e));
}
function wr(i, e) {
  i.cancelable && i.preventDefault(), p.simulateMouseEvent(i, e);
}
function Jt(i) {
  Ae.touchHandled || (Ae.touchHandled = !0, Zt(i, "mousedown"));
}
function Qt(i) {
  Ae.touchHandled && Zt(i, "mousemove");
}
function ei(i) {
  if (!Ae.touchHandled)
    return;
  Ae.pointerLeaveTimeout && (window.clearTimeout(Ae.pointerLeaveTimeout), delete Ae.pointerLeaveTimeout);
  const e = !!z.dragElement;
  Zt(i, "mouseup"), e || Zt(i, "click"), Ae.touchHandled = !1;
}
function ti(i) {
  i.pointerType !== "mouse" && i.target.releasePointerCapture(i.pointerId);
}
function _n(i) {
  z.dragElement && i.pointerType !== "mouse" && wr(i, "mouseenter");
}
function En(i) {
  z.dragElement && i.pointerType !== "mouse" && (Ae.pointerLeaveTimeout = window.setTimeout(() => {
    delete Ae.pointerLeaveTimeout, wr(i, "mouseleave");
  }, 10));
}
class fi {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${fi.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), Ce && (this.el.addEventListener("touchstart", Jt), this.el.addEventListener("pointerdown", ti)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), Ce && (this.el.removeEventListener("touchstart", Jt), this.el.removeEventListener("pointerdown", ti)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Ce && (this.el.addEventListener("touchmove", Qt), this.el.addEventListener("touchend", ei)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Ce && (this.el.removeEventListener("touchmove", Qt), this.el.removeEventListener("touchend", ei)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
fi.prefix = "ui-resizable-";
class qi {
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
class Dt extends qi {
  // have to be public else complains for HTMLElementExtendOpt ?
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.rectScale = { x: 1, y: 1 }, this._ui = () => {
      const r = this.el.parentElement.getBoundingClientRect(), s = {
        width: this.originalRect.width,
        height: this.originalRect.height + this.scrolled,
        left: this.originalRect.left,
        top: this.originalRect.top - this.scrolled
      }, o = this.temporalRect || s;
      return {
        position: {
          left: (o.left - r.left) * this.rectScale.x,
          top: (o.top - r.top) * this.rectScale.y
        },
        size: {
          width: o.width * this.rectScale.x,
          height: o.height * this.rectScale.y
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
    return Object.keys(e).forEach((r) => this.option[r] = e[r]), t && (this._removeHandlers(), this._setupHandlers()), n && this._setupAutoHide(this.option.autoHide), this;
  }
  /** @internal turns auto hide on/off */
  _setupAutoHide(e) {
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), z.overResizeElement === this && delete z.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    z.overResizeElement || z.dragElement || (z.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    z.overResizeElement === this && (delete z.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new fi(this.el, e, {
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
    this.sizeToContent = p.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = p.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = p.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const n = p.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(n, this._ui()), this.triggerEvent("resize", n), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = p.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = Dt._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = p.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Dt._originStyleProp.forEach((e, t) => {
      this.el.style[e] = this.elOriginStyleVal[t] || null;
    }), this.el.parentElement.style.position = this.parentOriginStylePosition || null, this;
  }
  /** @internal */
  _getChange(e, t) {
    const n = this.startEvent, r = {
      width: this.originalRect.width,
      height: this.originalRect.height + this.scrolled,
      left: this.originalRect.left,
      top: this.originalRect.top - this.scrolled
    }, s = e.clientX - n.clientX, o = this.sizeToContent ? 0 : e.clientY - n.clientY;
    let a, l;
    t.indexOf("e") > -1 ? r.width += s : t.indexOf("w") > -1 && (r.width -= s, r.left += s, a = !0), t.indexOf("s") > -1 ? r.height += o : t.indexOf("n") > -1 && (r.height -= o, r.top += o, l = !0);
    const d = this._constrainSize(r.width, r.height, a, l);
    return Math.round(r.width) !== Math.round(d.width) && (t.indexOf("w") > -1 && (r.left += r.width - d.width), r.width = d.width), Math.round(r.height) !== Math.round(d.height) && (t.indexOf("n") > -1 && (r.top += r.height - d.height), r.height = d.height), r;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, n, r) {
    const s = this.option, o = (n ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, a = s.minWidth / this.rectScale.x || e, l = (r ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, d = s.minHeight / this.rectScale.y || t, c = Math.min(o, Math.max(a, e)), u = Math.min(l, Math.max(d, t));
    return { width: c, height: u };
  }
  /** @internal */
  _applyChange() {
    let e = { left: 0, top: 0, width: 0, height: 0 };
    if (this.el.style.position === "absolute") {
      const t = this.el.parentElement, { left: n, top: r } = t.getBoundingClientRect();
      e = { left: n, top: r, width: 0, height: 0 };
    }
    return this.temporalRect ? (Object.keys(this.temporalRect).forEach((t) => {
      const n = this.temporalRect[t], r = t === "width" || t === "left" ? this.rectScale.x : t === "height" || t === "top" ? this.rectScale.y : 1;
      this.el.style[t] = (n - e[t]) * r + "px";
    }), this) : this;
  }
  /** @internal */
  _removeHandlers() {
    return this.handlers.forEach((e) => e.destroy()), delete this.handlers, this;
  }
}
Dt._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const Ua = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class Rt extends qi {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.dragTransform = {
      xScale: 1,
      yScale: 1,
      xOffset: 0,
      yOffset: 0
    };
    const n = t?.handle?.substring(1), r = e.gridstackNode;
    this.dragEls = !n || e.classList.contains(n) ? [e] : r?.subGrid ? [e.querySelector(t.handle) || e] : Array.from(e.querySelectorAll(t.handle)), this.dragEls.length === 0 && (this.dragEls = [e]), this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this.enable();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.dragEls.forEach((e) => {
      e.addEventListener("mousedown", this._mouseDown), Ce && (e.addEventListener("touchstart", Jt), e.addEventListener("pointerdown", ti));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), Ce && (t.removeEventListener("touchstart", Jt), t.removeEventListener("pointerdown", ti));
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
    if (!z.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(Ua) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete z.dragElement, delete z.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Ce && (e.currentTarget.addEventListener("touchmove", Qt), e.currentTarget.addEventListener("touchend", ei)), e.preventDefault(), document.activeElement && document.activeElement.blur(), z.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = p.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), z.pauseDrag) {
        const n = Number.isInteger(z.pauseDrag) ? z.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), n);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, z.dragElement = this;
      const n = this.el.gridstackNode?.grid;
      n ? z.dropElement = n.el.ddElement.ddDroppable : delete z.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = p.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const r = p.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(r, this.ui()), this.triggerEvent("dragstart", r), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Ce && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", Qt, !0), e.currentTarget.removeEventListener("touchend", ei, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), z.dropElement?.el === this.el.parentElement && delete z.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = p.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), z.dropElement && z.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete z.dragElement, delete z.dropElement, delete z.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, n = t?.grid || z.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), n?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && n && (e.key === "r" || e.key === "R")) {
      if (!p.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, n.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", p.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = p.cloneNode(this.el)), e.parentElement || p.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = Rt.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", Rt.originStyleProp.forEach((r) => t.style[r] = this.dragElementOriginStyle[r] || null), setTimeout(() => t.style.transition = n, 50);
    }
    return delete this.dragElementOriginStyle, this;
  }
  /** @internal updates the top/left position to follow the mouse */
  _dragFollow(e) {
    const t = { left: 0, top: 0 }, n = this.helper.style, r = this.dragOffset;
    n.left = (e.clientX + r.offsetLeft - t.left) * this.dragTransform.xScale + "px", n.top = (e.clientY + r.offsetTop - t.top) * this.dragTransform.yScale + "px";
  }
  /** @internal */
  _setupHelperContainmentStyle() {
    return this.helperContainment = this.helper.parentElement, this.helper.style.position !== "fixed" && (this.parentOriginStylePosition = this.helperContainment.style.position, getComputedStyle(this.helperContainment).position.match(/static/) && (this.helperContainment.style.position = "relative")), this;
  }
  /** @internal */
  _getDragOffset(e, t, n) {
    let r = 0, s = 0;
    n && (r = this.dragTransform.xOffset, s = this.dragTransform.yOffset);
    const o = t.getBoundingClientRect();
    return {
      left: o.left,
      top: o.top,
      offsetLeft: -e.clientX + o.left - r,
      offsetTop: -e.clientY + o.top - s,
      width: o.width * this.dragTransform.xScale,
      height: o.height * this.dragTransform.yScale
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
Rt.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Va extends qi {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), Ce && (this.el.addEventListener("pointerenter", _n), this.el.addEventListener("pointerleave", En)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), Ce && (this.el.removeEventListener("pointerenter", _n), this.el.removeEventListener("pointerleave", En)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!z.dragElement || !this._canDrop(z.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), z.dropElement && z.dropElement !== this && z.dropElement._mouseLeave(e, !0), z.dropElement = this;
    const t = p.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(z.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!z.dragElement || z.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = p.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(n, this._ui(z.dragElement)), this.triggerEvent("dropout", n), z.dropElement === this && (delete z.dropElement, !t)) {
      let r, s = this.el.parentElement;
      for (; !r && s; )
        r = s.ddElement?.ddDroppable, s = s.parentElement;
      r && r._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = p.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(z.dragElement)), this.triggerEvent("drop", t);
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
class Ki {
  static init(e) {
    return e.ddElement || (e.ddElement = new Ki(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new Rt(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Dt(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Va(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class qa {
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
  resizable(e, t, n, r) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddResizable && s.ddResizable[t]();
      else if (t === "destroy")
        s.ddResizable && s.cleanResizable();
      else if (t === "option")
        s.setupResizable({ [n]: r });
      else {
        const a = s.el.gridstackNode.grid;
        let l = s.el.getAttribute("gs-resize-handles") || a.opts.resizable.handles || "e,s,se";
        l === "all" && (l = "n,e,s,w,se,sw,ne,nw");
        const d = !a.opts.alwaysShowResizeHandle;
        s.setupResizable({
          ...a.opts.resizable,
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
  draggable(e, t, n, r) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddDraggable && s.ddDraggable[t]();
      else if (t === "destroy")
        s.ddDraggable && s.cleanDraggable();
      else if (t === "option")
        s.setupDraggable({ [n]: r });
      else {
        const o = s.el.gridstackNode.grid;
        s.setupDraggable({
          ...o.opts.draggable,
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
  droppable(e, t, n, r) {
    return typeof t.accept == "function" && !t._accept && (t._accept = t.accept, t.accept = (s) => t._accept(s)), this._getDDElements(e, t).forEach((s) => {
      t === "disable" || t === "enable" ? s.ddDroppable && s.ddDroppable[t]() : t === "destroy" ? s.ddDroppable && s.cleanDroppable() : t === "option" ? s.setupDroppable({ [n]: r }) : s.setupDroppable(t);
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
    return this._getDDElements(e).forEach((r) => r.on(t, (s) => {
      n(s, z.dragElement ? z.dragElement.el : s.target, z.dragElement ? z.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", r = p.getElements(e);
    return r.length ? r.map((o) => o.ddElement || (n ? Ki.init(o) : null)).filter((o) => o) : [];
  }
}
const re = new qa();
class O {
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
    const n = O.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new O(n, p.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (O.getGridElements(t).forEach((r) => {
      r.gridstack || (r.gridstack = new O(r, p.cloneDeep(e))), n.push(r.gridstack);
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
      const o = n.gridstack;
      return t && (o.opts = { ...o.opts, ...t }), t.children !== void 0 && o.load(t.children), o;
    }
    return (!e.classList.contains("grid-stack") || O.addRemoveCB) && (O.addRemoveCB ? n = O.addRemoveCB(e, t, !0, !0) : n = p.createDiv(["grid-stack", t.class], e)), O.init(t, n);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    O.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = p.createDiv([this.opts.placeholderClass, ue.itemClass, this.opts.itemClass]);
      const e = p.createDiv(["placeholder-content"], this._placeholder);
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
    const n = p.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const r = t.columnOpts;
    if (r) {
      const d = r.breakpoints;
      !r.columnWidth && !d?.length ? delete t.columnOpts : (r.columnMax = r.columnMax || 12, d?.length > 1 && d.sort((c, u) => (u.w || 0) - (c.w || 0)));
    }
    const s = {
      ...p.cloneDeep(ue),
      column: p.toNumber(e.getAttribute("gs-column")) || ue.column,
      minRow: n || p.toNumber(e.getAttribute("gs-min-row")) || ue.minRow,
      maxRow: n || p.toNumber(e.getAttribute("gs-max-row")) || ue.maxRow,
      staticGrid: p.toBool(e.getAttribute("gs-static")) || ue.staticGrid,
      sizeToContent: p.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || ue.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || ue.removableOptions.accept,
        decline: ue.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = p.toBool(e.getAttribute("gs-animate"))), t = p.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const a = this.el.closest("." + ue.itemClass)?.gridstackNode;
    if (a && (a.subGrid = this, this.parentGridNode = a, this.el.classList.add("grid-stack-nested"), a.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== ue.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const d = t.cellHeight;
      delete t.cellHeight, this.cellHeight(d);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = Ce), this._setStaticClass();
    const l = t.engineClass || O.engineClass || Ie;
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
    this.setAnimation(), t.subGridDynamic && !z.pauseDrag && (z.pauseDrag = !0), t.draggable?.pause !== void 0 && (z.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (n.grid = this, n.el ? t = n.el : O.addRemoveCB ? t = O.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
      return;
    if (n = t.gridstackNode, n && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === n._id))
      return t;
    const r = this._readAttr(t);
    return p.defaults(e, r), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = p.createDiv(["grid-stack-item", this.opts.itemClass]), n = p.createDiv(["grid-stack-item-content"], t);
    return p.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([r]) => {
      r.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, O.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : O.renderCB(n, e), t;
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
  makeSubGrid(e, t, n, r = !0) {
    let s = e.gridstackNode;
    if (s || (s = this.makeWidget(e).gridstackNode), s.subGrid?.el)
      return s.subGrid;
    let o, a = this;
    for (; a && !o; )
      o = a.opts?.subGridOpts, a = a.parentGridNode?.grid;
    t = p.cloneDeep({
      // by default sub-grid inherit from us | parent, other than id, children, etc...
      ...this.opts,
      id: void 0,
      children: void 0,
      column: "auto",
      columnOpts: void 0,
      layout: "list",
      subGridOpts: void 0,
      ...o || {},
      ...t || s.subGridOpts || {}
    }), s.subGridOpts = t;
    let l;
    t.column === "auto" && (l = !0, t.column = Math.max(s.w || 1, n?.w || 1), delete t.columnOpts);
    let d = s.el.querySelector(".grid-stack-item-content"), c, u;
    if (r && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, p.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), O.addRemoveCB ? c = O.addRemoveCB(this.el, u, !0, !1) : (c = p.createDiv(["grid-stack-item"]), c.appendChild(d), d = p.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const m = l ? t.column : s.w, x = s.h + n.h, v = s.el.style;
      v.transition = "none", this.update(s.el, { w: m, h: x }), setTimeout(() => v.transition = null);
    }
    const f = s.subGrid = O.addGrid(d, t);
    return n?._moving && (f._isTemp = !0), l && (f._autoColumn = !0), r && f.makeWidget(c, u), n && (n._moving ? window.setTimeout(() => p.simulateMouseEvent(n._event, "mouseenter", f.el), 0) : f.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), f;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((n) => {
      n.x += this.parentGridNode.x, n.y += this.parentGridNode.y, t.makeWidget(n.el, n);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => p.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, n = O.saveCB, r) {
    const s = this.engine.save(e, n, r);
    if (s.forEach((o) => {
      if (e && o.el && !o.subGrid && !n) {
        const a = o.el.querySelector(".grid-stack-item-content");
        o.content = a?.innerHTML, o.content || delete o.content;
      } else if (!e && !n && delete o.content, o.subGrid?.el) {
        const a = o.w || o.subGrid.getColumn(), l = o.subGrid.save(e, t, n, a);
        o.subGridOpts = t ? l : { children: l }, delete o.subGrid;
      }
      delete o.el;
    }), t) {
      const o = p.cloneDeep(this.opts);
      o.marginBottom === o.marginTop && o.marginRight === o.marginLeft && o.marginTop === o.marginRight && (o.margin = o.marginTop, delete o.marginTop, delete o.marginRight, delete o.marginBottom, delete o.marginLeft), o.rtl === (this.el.style.direction === "rtl") && (o.rtl = "auto"), this._isAutoCellHeight && (o.cellHeight = "auto"), this._autoColumn && (o.column = "auto");
      const a = o._alwaysShowResizeHandle;
      return delete o._alwaysShowResizeHandle, a !== void 0 ? o.alwaysShowResizeHandle = a : delete o.alwaysShowResizeHandle, p.removeInternalAndSame(o, ue), o.children = s, o;
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
  load(e, t = O.addRemoveCB || !0) {
    e = p.cloneDeep(e);
    const n = this.getColumn();
    e.forEach((c) => {
      c.w = c.w || c.minW || 1, c.h = c.h || c.minH || 1;
    }), e = p.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let r = 0;
    e.forEach((c) => {
      r = Math.max(r, (c.x || 0) + c.w);
    }), r > this.engine.defaultColumn && (this.engine.defaultColumn = r), r > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(r, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, r, !0));
    const s = O.addRemoveCB;
    typeof t == "function" && (O.addRemoveCB = t);
    const o = [];
    this.batchUpdate();
    const a = !this.engine.nodes.length, l = a && this.opts.animate;
    l && this.setAnimation(!1), !a && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      p.find(e, u.id) || (O.addRemoveCB && O.addRemoveCB(this.el, u, !1, !1), o.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const d = [];
    return this.engine.nodes = this.engine.nodes.filter((c) => p.find(e, c.id) ? (d.push(c), !1) : !0), e.forEach((c) => {
      const u = p.find(d, c.id);
      if (u) {
        if (p.shouldSizeToContent(u) && (c.h = u.h), this.engine.nodeBoundFix(c), (c.autoPosition || c.x === void 0 || c.y === void 0) && (c.w = c.w || u.w, c.h = c.h || u.h, this.engine.findEmptyPosition(c)), this.engine.nodes.push(u), p.samePos(u, c) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...c, forceCollide: !0 }), p.copyPos(c, u)), this.update(u.el, c), c.subGridOpts?.children) {
          const f = u.el.querySelector(".grid-stack");
          f && f.gridstack && f.gridstack.load(c.subGridOpts.children);
        }
      } else t && this.addWidget(c);
    }), delete this.engine._loading, this.engine.removedNodes = o, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? O.addRemoveCB = s : delete O.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const r = p.toNumber(t.getAttribute("gs-h")) || 1;
      return Math.round(t.offsetHeight / r);
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
    const t = p.parseHeight(e);
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
    const r = this._widthOrContainer(!0);
    if (e.columnWidth)
      n = Math.min(Math.round(r / e.columnWidth) || 1, e.columnMax);
    else {
      n = e.columnMax;
      let s = 0;
      for (; s < e.breakpoints.length && r <= e.breakpoints[s].w; )
        n = e.breakpoints[s++].c || t;
    }
    if (n !== t) {
      const s = e.breakpoints?.find((o) => o.c === n);
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
    let r;
    t ? r = { top: n.top + document.documentElement.scrollTop, left: n.left } : r = { top: this.el.offsetTop, left: this.el.offsetLeft };
    const s = e.left - r.left, o = e.top - r.top, a = n.width / this.getColumn(), l = n.height / parseInt(this.el.getAttribute("gs-current-row"));
    return { x: Math.floor(s / a), y: Math.floor(o / l) };
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
  isAreaEmpty(e, t, n, r) {
    return this.engine.isAreaEmpty(e, t, n, r);
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
    const n = O.getElement(e);
    if (!n || n.gridstackNode)
      return n;
    n.parentElement || this.el.appendChild(n), this._prepareElement(n, !0, t);
    const r = n.gridstackNode;
    this._updateContainerHeight(), r.subGridOpts && this.makeSubGrid(n, r.subGridOpts, void 0, !1);
    let s;
    return this.opts.column === 1 && !this._ignoreLayoutsNodeChange && (s = this._ignoreLayoutsNodeChange = !0), this._triggerAddEvent(), this._triggerChangeEvent(), s && delete this._ignoreLayoutsNodeChange, n;
  }
  on(e, t) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((r) => this.on(r, t)), this) : (e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable" ? (e === "enable" || e === "disable" ? this._gsEventHandler[e] = (r) => t(r) : this._gsEventHandler[e] = (r) => {
      r.detail && t(r, r.detail);
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
    return e ? (O.getElements(e).forEach((r) => {
      if (r.parentElement && r.parentElement !== this.el)
        return;
      let s = r.gridstackNode;
      s || (s = this.engine.nodes.find((o) => r === o.el)), s && (t && O.addRemoveCB && O.addRemoveCB(this.el, s, !1, !1), delete r.gridstackNode, this._removeDD(r), this.engine.removeNode(s, t, n), t && r.parentElement && r.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && O.addRemoveCB && O.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
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
    return !!this.opts.staticGrid === e ? this : (e ? this.opts.staticGrid = !0 : delete this.opts.staticGrid, this._setupRemoveDrop(), this._setupAcceptWidget(), this.engine.nodes.forEach((r) => {
      this.prepareDragDrop(r.el), r.subGrid && n && r.subGrid.setStatic(e, t, n);
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
    return O.getElements(e).forEach((n) => {
      const r = n?.gridstackNode;
      if (!r)
        return;
      const s = { ...p.copyPos({}, r), ...p.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const o = ["x", "y", "w", "h"];
      let a;
      if (o.some((c) => s[c] !== void 0 && s[c] !== r[c]) && (a = {}, o.forEach((c) => {
        a[c] = s[c] !== void 0 ? s[c] : r[c], delete s[c];
      })), !a && (s.minW || s.minH || s.maxW || s.maxH) && (a = {}), s.content !== void 0) {
        const c = n.querySelector(".grid-stack-item-content");
        c && c.textContent !== s.content && (r.content = s.content, O.renderCB(c, s), r.subGrid?.el && (c.appendChild(r.subGrid.el), r.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, d = !1;
      for (const c in s)
        c[0] !== "_" && r[c] !== s[c] && (r[c] = s[c], l = !0, d = d || !this.opts.staticGrid && (c === "noResize" || c === "noMove" || c === "locked"));
      if (p.sanitizeMinMax(r), a) {
        const c = a.w !== void 0 && a.w !== r.w;
        this.moveNode(r, a), c && r.subGrid ? r.subGrid.onResize(this.hasAnimationCSS() ? r.w : void 0) : this.resizeToContentCheck(c, r), delete r._orig;
      }
      (a || l) && this._writeAttr(n, r), d && this.prepareDragDrop(r.el), O.updateCB && O.updateCB(r);
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
    const r = n.getCellHeight(!0);
    if (!r)
      return;
    let s = t.h ? t.h * r : e.clientHeight, o;
    if (t.resizeToContentParent && (o = e.querySelector(t.resizeToContentParent)), o || (o = e.querySelector(O.resizeToContentParent)), !o)
      return;
    const a = e.clientHeight - o.clientHeight, l = t.h ? t.h * r - a : o.clientHeight;
    let d;
    if (t.subGrid) {
      d = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const f = t.subGrid.el.getBoundingClientRect(), m = e.getBoundingClientRect();
      d += f.top - m.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const f = o.firstElementChild;
        if (!f) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${O.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        d = f.getBoundingClientRect().height || l;
      }
    }
    if (l === d)
      return;
    s += d - l;
    let c = Math.ceil(s / r);
    const u = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    u && c > u && (c = u, e.classList.add("size-to-content-max")), t.minH && c < t.minH ? c = t.minH : t.maxH && c > t.maxH && (c = t.maxH), c !== t.h && (n._ignoreLayoutsNodeChange = !0, n.moveNode(t, { h: c }), delete n._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    O.resizeToContentCB ? O.resizeToContentCB(e) : this.resizeToContent(e);
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
    return O.getElements(e).forEach((n) => {
      const r = n.gridstackNode;
      if (!p.canBeRotated(r))
        return;
      const s = { w: r.h, h: r.w, minH: r.minW, minW: r.minH, maxH: r.maxW, maxW: r.maxH };
      if (t) {
        const a = t.left > 0 ? Math.floor(t.left / this.cellWidth()) : 0, l = t.top > 0 ? Math.floor(t.top / this.opts.cellHeight) : 0;
        s.x = r.x + a - (r.h - (l + 1)), s.y = r.y + l - a;
      }
      Object.keys(s).forEach((a) => {
        s[a] === void 0 && delete s[a];
      });
      const o = r._orig;
      this.update(n, s), r._orig = o;
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
      const n = p.parseHeight(e);
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
      let n = 0, r = { x: t[n++], y: t[n++], w: t[n++], h: t[n++], autoPosition: t[n++] };
      return this.willItFit(r);
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
    let r = this;
    for (; r.parentGridNode; )
      r = r.parentGridNode.grid;
    return r.el.dispatchEvent(n), this;
  }
  /** @internal */
  _updateContainerHeight() {
    if (!this.engine || this.engine.batchMode)
      return this;
    const e = this.parentGridNode;
    let t = this.getRow() + this._extraDragRow;
    const n = this.opts.cellHeight, r = this.opts.cellHeightUnit;
    if (!n)
      return this;
    if (!e && !this.opts.minRow) {
      const s = p.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === r) {
        const o = Math.floor(s.h / n);
        t < o && (t = o);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * n + r), e && p.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, n) {
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(ue.itemClass, this.opts.itemClass);
    const r = p.shouldSizeToContent(n);
    return r ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), r && this.resizeToContentCheck(!1, n), p.lazyLoad(n) || this.prepareDragDrop(n.el), this;
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
    for (const r in n)
      t[r] ? e.setAttribute(n[r], String(t[r])) : e.removeAttribute(n[r]);
    return this;
  }
  /** @internal call to read any default attributes from element */
  _readAttr(e, t = !0) {
    const n = {};
    n.x = p.toNumber(e.getAttribute("gs-x")), n.y = p.toNumber(e.getAttribute("gs-y")), n.w = p.toNumber(e.getAttribute("gs-w")), n.h = p.toNumber(e.getAttribute("gs-h")), n.autoPosition = p.toBool(e.getAttribute("gs-auto-position")), n.noResize = p.toBool(e.getAttribute("gs-no-resize")), n.noMove = p.toBool(e.getAttribute("gs-no-move")), n.locked = p.toBool(e.getAttribute("gs-locked"));
    const r = e.getAttribute("gs-size-to-content");
    r && (r === "true" || r === "false" ? n.sizeToContent = p.toBool(r) : n.sizeToContent = parseInt(r, 10)), n.id = e.getAttribute("gs-id"), n.maxW = p.toNumber(e.getAttribute("gs-max-w")), n.minW = p.toNumber(e.getAttribute("gs-min-w")), n.maxH = p.toNumber(e.getAttribute("gs-max-h")), n.minH = p.toNumber(e.getAttribute("gs-min-h")), t && (n.w === 1 && e.removeAttribute("gs-w"), n.h === 1 && e.removeAttribute("gs-h"), n.maxW && e.removeAttribute("gs-max-w"), n.minW && e.removeAttribute("gs-min-w"), n.maxH && e.removeAttribute("gs-max-h"), n.minH && e.removeAttribute("gs-min-h"));
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
        p.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((n) => p.shouldSizeToContent(n))) {
        const n = [...this.engine.nodes];
        this.batchUpdate(), n.forEach((r) => {
          p.shouldSizeToContent(r) && this.resizeToContentCBCheck(r.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((n) => n.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = p.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return p.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return p.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return O.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return p.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, n = [];
    typeof this.opts.margin == "string" && (n = this.opts.margin.split(" ")), n.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = n[0], this.opts.marginLeft = this.opts.marginRight = n[1]) : n.length === 4 ? (this.opts.marginTop = n[0], this.opts.marginRight = n[1], this.opts.marginBottom = n[2], this.opts.marginLeft = n[3]) : (e = p.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((o) => {
      this.opts[o] === void 0 ? this.opts[o] = t : (e = p.parseHeight(this.opts[o]), this.opts[o] = e.h, delete this.opts.margin);
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
    return re;
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
  static setupDragIn(e, t, n, r = document) {
    t?.pause !== void 0 && (z.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? p.getElements(e, r) : e).forEach((o, a) => {
      re.isDraggable(o) || re.dragIn(o, t), n?.[a] && (o.gridstackNode = n[a]);
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
    return this.opts.staticGrid ? this : (O.getElements(e).forEach((n) => {
      const r = n.gridstackNode;
      r && (t ? delete r.noMove : r.noMove = !0, this.prepareDragDrop(r.el));
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
    return this.opts.staticGrid ? this : (O.getElements(e).forEach((n) => {
      const r = n.gridstackNode;
      r && (t ? delete r.noResize : r.noResize = !0, this.prepareDragDrop(r.el));
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && O._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return re.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return re.droppable(this.el, "destroy"), this;
    let e, t;
    const n = (r, s, o) => {
      o = o || s;
      const a = o.gridstackNode;
      if (!a)
        return;
      if (!a.grid?.el) {
        o.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const f = o.getBoundingClientRect();
        o.style.left = f.x + (this.dragTransform.xScale - 1) * (r.clientX - f.x) / this.dragTransform.xScale + "px", o.style.top = f.y + (this.dragTransform.yScale - 1) * (r.clientY - f.y) / this.dragTransform.yScale + "px", o.style.transformOrigin = "0px 0px";
      }
      let { top: l, left: d } = o.getBoundingClientRect();
      const c = this.el.getBoundingClientRect();
      d -= c.left, l -= c.top;
      const u = {
        position: {
          top: l * this.dragTransform.xScale,
          left: d * this.dragTransform.yScale
        }
      };
      if (a._temporaryRemoved) {
        if (a.x = Math.max(0, Math.round(d / t)), a.y = Math.max(0, Math.round(l / e)), delete a.autoPosition, this.engine.nodeBoundFix(a), !this.engine.willItFit(a)) {
          if (a.autoPosition = !0, !this.engine.willItFit(a)) {
            re.off(s, "drag");
            return;
          }
          a._willFitPos && (p.copyPos(a, a._willFitPos), delete a._willFitPos);
        }
        this._onStartMoving(o, r, u, a, t, e);
      } else
        this._dragOrResize(o, r, u, a, t, e);
    };
    return re.droppable(this.el, {
      accept: (r) => {
        const s = r.gridstackNode || this._readAttr(r, !1);
        if (s?.grid === this)
          return !0;
        if (!this.opts.acceptWidgets)
          return !1;
        let o = !0;
        if (typeof this.opts.acceptWidgets == "function")
          o = this.opts.acceptWidgets(r);
        else {
          const a = this.opts.acceptWidgets === !0 ? ".grid-stack-item" : this.opts.acceptWidgets;
          o = r.matches(a);
        }
        if (o && s && this.opts.maxRow) {
          const a = { w: s.w, h: s.h, minW: s.minW, minH: s.minH };
          o = this.engine.willItFit(a);
        }
        return o;
      }
    }).on(this.el, "dropover", (r, s, o) => {
      let a = o?.gridstackNode || s.gridstackNode;
      if (a?.grid === this && !a._temporaryRemoved)
        return !1;
      if (a?._sidebarOrig && (a.w = a._sidebarOrig.w, a.h = a._sidebarOrig.h), a?.grid && a.grid !== this && !a._temporaryRemoved && a.grid._leave(s, o), o = o || s, t = this.cellWidth(), e = this.getCellHeight(!0), !a) {
        const c = o.getAttribute("data-gs-widget") || o.getAttribute("gridstacknode");
        if (c) {
          try {
            a = JSON.parse(c);
          } catch {
            console.error("Gridstack dropover: Bad JSON format: ", c);
          }
          o.removeAttribute("data-gs-widget"), o.removeAttribute("gridstacknode");
        }
        a || (a = this._readAttr(o)), a._sidebarOrig = { w: a.w, h: a.h };
      }
      a.grid || (a.el || (a = { ...a }), a._isExternal = !0, o.gridstackNode = a);
      const l = a.w || Math.round(o.offsetWidth / t) || 1, d = a.h || Math.round(o.offsetHeight / e) || 1;
      return a.grid && a.grid !== this ? (s._gridstackNodeOrig || (s._gridstackNodeOrig = a), s.gridstackNode = a = { ...a, w: l, h: d, grid: this }, delete a.x, delete a.y, this.engine.cleanupNode(a).nodeBoundFix(a), a._initDD = a._isExternal = // DOM needs to be re-parented on a drop
      a._temporaryRemoved = !0) : (a.w = l, a.h = d, a._temporaryRemoved = !0), O._itemRemoving(a.el, !1), re.on(s, "drag", n), n(r, s, o), !1;
    }).on(this.el, "dropout", (r, s, o) => {
      const a = o?.gridstackNode || s.gridstackNode;
      return a && (!a.grid || a.grid === this) && (this._leave(s, o), this._isTemp && this.removeAsSubGrid(a)), !1;
    }).on(this.el, "drop", (r, s, o) => {
      const a = o?.gridstackNode || s.gridstackNode;
      if (a?.grid === this && !a._isExternal)
        return !1;
      const l = !!this.placeholder.parentElement, d = s !== o;
      this.placeholder.remove(), delete this.placeholder.gridstackNode, l && this.opts.animate && (this.setAnimation(!1), this.setAnimation(!0, !0));
      const c = s._gridstackNodeOrig;
      if (delete s._gridstackNodeOrig, l && c?.grid && c.grid !== this) {
        const f = c.grid;
        f.engine.removeNodeFromLayoutCache(c), f.engine.removedNodes.push(c), f._triggerRemoveEvent()._triggerChangeEvent(), f.parentGridNode && !f.engine.nodes.length && f.opts.subGridDynamic && f.removeAsSubGrid();
      }
      if (!a || (l && (this.engine.cleanupNode(a), a.grid = this), delete a.grid?._isTemp, re.off(s, "drag"), o !== s ? (o.remove(), s = o) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = a.subGrid?.el?.gridstack;
      return p.copyPos(a, this._readAttr(this.placeholder)), p.removePositioningStyles(s), d && (a.content || a.subGridOpts || O.addRemoveCB) ? (delete a.el, s = this.addWidget(a)) : (this._prepareElement(s, !0, a), this.el.appendChild(s), this.resizeToContentCheck(!1, a), u && (u.parentGridNode = a), this._updateContainerHeight()), this.engine.addedNodes.push(a), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...r, type: "dropped" }, c && c.grid ? c : void 0, a), !1;
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
    return e ? (!this.opts.staticGrid && !re.isDroppable(e) && re.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => O._itemRemoving(n, !0)).on(e, "dropout", (t, n) => O._itemRemoving(n, !1)), this) : this;
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
    const r = n.noMove || this.opts.disableDrag, s = n.noResize || this.opts.disableResize, o = this.opts.staticGrid || r && s;
    if ((t || o) && (n._initDD && (this._removeDD(e), delete n._initDD), o && e.classList.add("ui-draggable-disabled", "ui-resizable-disabled"), !t))
      return this;
    if (!n._initDD) {
      let a, l;
      const d = (f, m) => {
        this.triggerEvent(f, f.target), a = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, f, m, n, a, l);
      }, c = (f, m) => {
        this._dragOrResize(e, f, m, n, a, l);
      }, u = (f) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete n._moving, delete n._resizing, delete n._event, delete n._lastTried;
        const m = n.w !== n._orig.w, x = f.target;
        if (!(!x.gridstackNode || x.gridstackNode.grid !== this)) {
          if (n.el = x, n._isAboutToRemove) {
            const v = e.gridstackNode.grid;
            v._gsEventHandler[f.type] && v._gsEventHandler[f.type](f, x), v.engine.nodes.push(n), v.removeWidget(e, !0, !0);
          } else
            p.removePositioningStyles(x), n._temporaryRemoved ? (this._writePosAttr(x, n), this.engine.addNode(n)) : this._writePosAttr(x, n), this.triggerEvent(f, x);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), f.type === "resizestop" && (Number.isInteger(n.sizeToContent) && (n.sizeToContent = n.h), this.resizeToContentCheck(m, n));
        }
      };
      re.draggable(e, {
        start: d,
        stop: u,
        drag: c
      }).resizable(e, {
        start: d,
        stop: u,
        resize: c
      }), n._initDD = !0;
    }
    return re.draggable(e, r ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, n, r, s, o) {
    if (this.engine.cleanNodes().beginUpdate(r), this._writePosAttr(this.placeholder, r), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = r, r.grid?.el)
      this.dragTransform = p.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const a = this.placeholder.closest(".grid-stack");
      this.dragTransform = p.getValuesFromTransformedElement(a);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (r.el = this.placeholder, r._lastUiPosition = n.position, r._prevYPix = n.position.top, r._moving = t.type === "dragstart", r._resizing = t.type === "resizestart", delete r._lastTried, t.type === "dropover" && r._temporaryRemoved && (this.engine.addNode(r), r._moving = !0), this.engine.cacheRects(s, o, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const a = this.getColumn() - r.x, l = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - r.y;
      re.resizable(e, "option", "minWidth", s * Math.min(r.minW || 1, a)).resizable(e, "option", "minHeight", o * Math.min(r.minH || 1, l)).resizable(e, "option", "maxWidth", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, a)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, r.x + r.w)).resizable(e, "option", "maxHeight", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, r.y + r.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, n, r, s, o) {
    const a = { ...r._orig };
    let l, d = this.opts.marginLeft, c = this.opts.marginRight, u = this.opts.marginTop, f = this.opts.marginBottom;
    const m = Math.round(o * 0.1), x = Math.round(s * 0.1);
    if (d = Math.min(d, x), c = Math.min(c, x), u = Math.min(u, m), f = Math.min(f, m), t.type === "drag") {
      if (r._temporaryRemoved)
        return;
      const w = n.position.top - r._prevYPix;
      r._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && p.updateScrollPosition(e, n.position, w);
      const S = n.position.left + (n.position.left > r._lastUiPosition.left ? -c : d), N = n.position.top + (n.position.top > r._lastUiPosition.top ? -f : u);
      a.x = Math.round(S / s), a.y = Math.round(N / o);
      const C = this._extraDragRow;
      if (this.engine.collide(r, a)) {
        const D = this.getRow();
        let b = Math.max(0, a.y + r.h - D);
        this.opts.maxRow && D + b > this.opts.maxRow && (b = Math.max(0, this.opts.maxRow - D)), this._extraDragRow = b;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== C && this._updateContainerHeight(), r.x === a.x && r.y === a.y)
        return;
    } else if (t.type === "resize") {
      if (a.x < 0 || (p.updateScrollResize(t, e, o), a.w = Math.round((n.size.width - d) / s), a.h = Math.round((n.size.height - u) / o), r.w === a.w && r.h === a.h) || r._lastTried && r._lastTried.w === a.w && r._lastTried.h === a.h)
        return;
      const w = n.position.left + d, S = n.position.top + u;
      a.x = Math.round(w / s), a.y = Math.round(S / o), l = !0;
    }
    r._event = t, r._lastTried = a;
    const v = {
      x: n.position.left + d,
      y: n.position.top + u,
      w: (n.size ? n.size.width : r.w * s) - d - c,
      h: (n.size ? n.size.height : r.h * o) - u - f
    };
    if (this.engine.moveNodeCheck(r, { ...a, cellWidth: s, cellHeight: o, rect: v, resizing: l })) {
      r._lastUiPosition = n.position, this.engine.cacheRects(s, o, u, c, f, d), delete r._skipDown, l && r.subGrid && r.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const w = t.target;
      r._sidebarOrig || this._writePosAttr(w, r), this.triggerEvent(t, w);
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
    if (!n || (t.style.transform = t.style.transformOrigin = null, re.off(e, "drag"), n._temporaryRemoved))
      return;
    n._temporaryRemoved = !0, this.engine.removeNode(n), n.el = n._isExternal && t ? t : e;
    const r = n._sidebarOrig;
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = r, this.opts.removable === !0 && O._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return $a(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
O.renderCB = (i, e) => {
  i && e?.content && (i.textContent = e.content);
};
O.resizeToContentParent = ".grid-stack-item-content";
O.Utils = p;
O.Engine = Ie;
O.GDRev = "12.3.2";
const Ut = /* @__PURE__ */ new WeakMap();
function Ka({ children: i }) {
  const { _gridStack: { value: e, set: t }, options: n } = yr(), r = I(/* @__PURE__ */ new Map()), s = I(null), o = I(n), a = q((c, u) => {
    if (u.id && u.grid) {
      let f = Ut.get(u.grid);
      f || (f = /* @__PURE__ */ new Map(), Ut.set(u.grid, f)), f.set(u.id, c), r.current.set(u.id, c);
    }
  }, []), l = q(() => {
    if (s.current) {
      O.renderCB = a;
      const c = O.init(o.current, s.current);
      return c && o.current.handle && c.opts && (c.opts.handle = o.current.handle), c;
    }
    return null;
  }, [a]), d = (c, u) => {
    const { children: f, ...m } = c, { children: x, ...v } = u;
    return ar(m, v);
  };
  return zi(() => {
    if (!d(n, o.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), r.current.clear(), Ut.delete(e), o.current = n, t(null);
      } catch (c) {
        console.error("Error destroying gridstack", c);
      }
    else e && (o.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), zi(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, l, t]), h(xr.Provider, {
    value: P(() => ({
      getWidgetContainer: (c) => {
        if (e) {
          const u = Ut.get(e);
          if (u?.has(c))
            return u.get(c) || null;
        }
        return r.current.get(c) || null;
      }
    }), [e]),
    children: h("div", {
      ref: s,
      children: e ? i : null
    })
  });
}
const Xi = ({ options: i, widgets: e, onChange: t, className: n }) => {
  const r = P(() => JSON.stringify(e.map((l) => ({
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
  }))), [e]), s = P(() => ({
    ...i,
    class: n
  }), [i, r, n]), o = (l, d, c) => {
    let u = c[0], f = 1 / 0;
    for (const m of c) {
      const x = m.w - l, v = m.h - d, w = x * x + v * v;
      w < f && (f = w, u = m);
    }
    return u;
  };
  return h(Fa, {
    options: s,
    widgets: e,
    onResizeStop: (l, d) => {
      const c = d.gridstackNode;
      if (!c) return;
      const u = d.gridstackNode?.allowedSizes ?? [];
      if (u.length === 0)
        return;
      const f = o(c.w ?? 1, c.h ?? 1, u ?? []);
      (c.w !== f.w || c.h !== f.h) && c.grid?.update(d, {
        w: f.w,
        h: f.h
      });
    },
    onChange: t,
    children: h(Ka, {
      children: h(ja, {})
    })
  });
};
Xi.displayName = "F0GridStack";
const Xa = (i, e, t) => h("div", {
  children: i
}), mi = ({ widgets: i = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: n = Xa, main: r = !1, deps: s }) => {
  const o = q((b, y, g) => h(Gi.div, {
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
    children: n(b, y, g)
  }), [n]), a = P(() => ({
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
  }), []), l = (b, y) => {
    if (typeof b.content == "function" && b.deps && y) {
      const g = {};
      return b.deps.forEach((_) => {
        typeof _ == "string" && y[_] !== void 0 && (g[_] = y[_]);
      }), b.content(g);
    }
    return typeof b.content == "function" ? null : b.content;
  }, d = (b, y, g) => b.map((_) => {
    const M = l(_, g), T = {
      id: _.id,
      h: _.h ?? 1,
      w: _.w ?? 1,
      allowedSizes: _.availableSizes,
      noMove: !y,
      noResize: !y,
      locked: _.locked,
      meta: _.meta,
      _originalContent: M,
      content: o(M, _.meta, y)
    };
    return _.x !== void 0 && (T.x = _.x), _.y !== void 0 && (T.y = _.y), T;
  }), [c, u] = F(d(i, e)), f = I(e), m = I(i), x = I(!1), v = I(/* @__PURE__ */ new Map()), w = I(i);
  w.current = i;
  const S = I(s), N = P(() => {
    const b = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || i.forEach((y) => {
      if (y.deps && y.deps.length > 0) {
        const g = y.deps.map((_) => typeof _ == "string" && s[_] !== void 0 ? s[_] : _).filter((_) => _ !== null);
        b.set(y.id, g);
      }
    }), b;
  }, [i, s]), C = q((b) => {
    u(b), x.current || t(b.map((y) => {
      const g = w.current.find((_) => _.id === y.id);
      return {
        id: y.id,
        w: y.w ?? 1,
        h: y.h ?? 1,
        allowedSizes: y.allowedSizes,
        meta: y.meta,
        content: typeof g?.content == "function" ? g.content : y._originalContent,
        x: y.x ?? 0,
        y: y.y ?? 0,
        locked: y.locked,
        deps: g?.deps
      };
    })), x.current = !1;
  }, [t]), D = (b, y) => !b && !y ? !1 : !b || !y || b.length !== y.length ? !0 : b.some((g, _) => g !== y[_]);
  return B(() => {
    const b = f.current !== e, y = m.current !== i, g = S.current !== s && (S.current === void 0 || s === void 0 || Object.keys(S.current).length !== Object.keys(s).length || Object.keys(s).some((E) => S.current?.[E] !== s[E])), _ = /* @__PURE__ */ new Map();
    i.forEach((E) => {
      if (E.deps && E.deps.length > 0) {
        const R = v.current.get(E.id), k = N.get(E.id);
        _.set(E.id, D(R, k)), k ? v.current.set(E.id, k) : v.current.delete(E.id);
      }
    });
    const M = new Set(i.map((E) => E.id));
    v.current.forEach((E, R) => {
      M.has(R) || v.current.delete(R);
    });
    const T = Array.from(_.values()).some((E) => E) || g;
    b && !y && !T ? (x.current = !0, u((E) => E.map((R) => {
      const k = i.find((X) => X.id === R.id);
      if (!k)
        return R;
      const L = l(k, s);
      return {
        ...R,
        noMove: !e,
        noResize: !e,
        locked: k.locked,
        meta: k.meta,
        _originalContent: L,
        content: o(L, k.meta, e)
      };
    }))) : (y || T) && u((E) => {
      const R = new Map(E.map((k) => [k.id, k]));
      return i.map((k) => {
        const L = R.get(k.id), X = _.get(k.id) ?? !1;
        let Y;
        X || !L ? Y = l(k, s) : Y = L._originalContent ?? l(k, s);
        const V = {
          id: k.id,
          h: L?.h ?? k.h ?? 1,
          w: L?.w ?? k.w ?? 1,
          allowedSizes: k.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: k.locked,
          meta: k.meta,
          _originalContent: Y,
          content: o(Y, k.meta, e)
        }, Q = L?.x ?? k.x, $ = L?.y ?? k.y;
        return Q !== void 0 && (V.x = Q), $ !== void 0 && (V.y = $), V;
      });
    }), f.current = e, m.current = i, S.current = s;
  }, [i, e, o, N, s]), h(Xi, {
    className: G(r && "h-full flex-1 overflow-auto"),
    options: a,
    onChange: C,
    widgets: c
  });
};
mi.displayName = "GroupGrid";
mi.__isPageLayoutGroup = !0;
const Ya = (i, e) => {
  const t = e;
  return t.displayName = i, t.__isPageLayoutBlock = !0, t;
}, Za = (i, e) => {
  const t = e;
  return t.displayName = i, t.__isPageLayoutGroup = !0, t;
}, Ja = (i, e) => h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: e,
  ...i,
  children: h("path", {
    fill: "currentColor",
    d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
    vectorEffect: "non-scaling-stroke"
  })
}), Cr = ae(Ja), Qa = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], _r = ae((i, e) => {
  const t = Qa.reduce((n, r) => {
    const { [r]: s, ...o } = n;
    return o;
  }, i);
  return h(ji, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: i.icon == Cr
  });
});
_r.displayName = "AIButton";
const Ni = Ye({
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
}), el = {
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
}, Yi = ae(({ content: i, variant: e, align: t, className: n, as: r, ellipsis: s, noEllipsisTooltip: o, markdown: a, ...l }, d) => {
  const c = r ?? el[e ?? "body"];
  if (s !== void 0)
    return h(Os, {
      ref: d,
      lines: typeof s == "number" ? s : 1,
      noTooltip: o,
      tag: c,
      className: G(Ni({
        variant: e,
        align: t
      }), n),
      markdown: a,
      ...l,
      children: i
    });
  if (a) {
    const u = Ms(i);
    return vn(c, {
      ...l,
      className: G(Ni({
        variant: e,
        align: t
      }), n),
      ref: d,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return vn(c, {
    ...l,
    className: G(Ni({
      variant: e,
      align: t
    }), n),
    ref: d
  }, i);
});
Yi.displayName = "Text";
const Er = ae((i, e) => h(Yi, {
  ref: e,
  markdown: i.markdown ?? !0,
  ...i
}));
Er.displayName = "F0Text";
const ch = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Sr = ({ title: i, draggable: e = !1, onDragStart: t, onDragEnd: n, isDragging: r = !1, AIButton: s, actions: o, children: a, selected: l = !1 }) => {
  const [d, c] = F(!1), [u, f] = F(!1), m = $i(), x = (w) => {
    c(w);
  }, v = u || d;
  return B(() => {
    if (!r || !n) return;
    const w = () => {
      n();
    };
    return document.addEventListener("mouseup", w), () => {
      document.removeEventListener("mouseup", w);
    };
  }, [r, n]), A("div", {
    className: G("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && d ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", r && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => f(!0),
    onMouseLeave: () => f(!1),
    children: [A("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [A("div", {
        className: G("flex min-w-0 flex-1 items-center", !e && "pl-4", !o && !s && "pr-4"),
        children: [e && h("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: h(Ui, {
            icon: zs,
            size: "xs"
          })
        }), h("div", {
          className: G("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: h(Er, {
            variant: "label",
            content: i,
            ellipsis: !0
          })
        })]
      }), h(Ps, {
        children: (s || o) && v && A(Gi.div, {
          className: G("flex shrink-0 items-center gap-0.5 pr-2", !o && "pr-4"),
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
            children: h(_r, {
              size: "sm",
              label: m.ai.ask,
              onClick: s,
              icon: Cr
            })
          }), o && h(Ls, {
            items: o,
            open: d,
            onOpenChange: x,
            align: "end",
            children: h(ji, {
              icon: Is,
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
      children: a
    })]
  });
}, tl = () => A("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [h("div", {
    className: "flex h-12 w-full items-center px-4",
    children: h(Te, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), A("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [h(Te, {
      className: "h-1/2 w-full rounded-sm"
    }), h(Te, {
      className: "h-1/3 w-full rounded-sm"
    }), h(Te, {
      className: "h-1/5 w-full rounded-sm"
    }), h(Te, {
      className: "h-1/3 w-full rounded-sm"
    }), h(Te, {
      className: "h-full w-full rounded-sm"
    }), h(Te, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
Sr.displayName = "F0Widget";
const il = Kn(Sr, tl), nl = ({ children: i, title: e, draggable: t = !1, actions: n, aiButton: r }) => h(il, {
  title: e,
  draggable: t,
  actions: n,
  AIButton: r,
  children: i
}), Dr = ({ widgets: i, editMode: e = !1, onChange: t = () => {
}, deps: n, ...r }) => h(mi, {
  widgets: i,
  editMode: e,
  onChange: t,
  deps: n,
  ...r,
  WidgetWrapper: (s, o, a) => h(nl, {
    title: o?.title ?? "",
    draggable: a,
    actions: o?.actions,
    aiButton: o?.aiButton,
    children: s
  })
});
Dr.displayName = "Dashboard";
const rl = Za("Dashboard", Dr), dh = ve("Dashboard", rl), sl = Ye({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), ol = (i) => (i || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), al = (i) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(i) ? i.every(e) ? [{
    items: i
  }] : i : [i];
}, pi = ae(({ children: i, variant: e = "default", className: t, draggable: n = !1, onDragStart: r, onDragEnd: s, onDrop: o, dragId: a, primaryAction: l, ...d }, c) => {
  const u = P(() => al(d.actions || []), [d.actions]), f = P(() => u.flatMap((x) => x.items), [u]), m = P(() => f.length > 0 || !!l, [f, l]);
  return A("div", {
    ref: c,
    className: G(sl({
      variant: e
    }), "relative", t),
    draggable: n,
    onDragStart: r,
    onDragEnd: s,
    onDrop: o,
    "data-drag-id": a,
    ...d,
    children: [m && A("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, f.length > 0 && h(Ro, {
        items: ol(u)
      })]
    }), h("div", {
      children: i
    })]
  });
});
pi.displayName = "Block";
pi.__isPageLayoutBlock = !0;
const ll = ({ title: i = "", description: e, titleLevel: t = "h2", children: n, className: r, ...s }) => {
  if (!i) return null;
  const o = t;
  return A(pi, {
    ...s,
    className: G("space-y-4", r),
    children: [A("div", {
      className: "space-y-2",
      children: [h(o, {
        className: G("font-semibold text-f1-foreground", {
          "text-2xl": t === "h1",
          "text-xl": t === "h2",
          "text-lg": t === "h3",
          "text-base": t === "h4",
          "text-sm": t === "h5",
          "text-xs": t === "h6"
        }),
        children: i
      }), e && h("p", {
        className: "text-sm text-f1-foreground-secondary",
        children: e
      })]
    }), h("div", {
      className: "flex-1",
      children: n
    })]
  });
}, cl = Ya("BlockContent", ll), dl = (i) => !rr(i) || !i.type || typeof i.type == "string" || typeof i.type == "symbol" ? !1 : "__isPageLayoutBlock" in i.type, ul = (i) => !rr(i) || !i.type || typeof i.type == "string" || typeof i.type == "symbol" ? !1 : "__isPageLayoutGroup" in i.type, Rr = (i, e, t) => {
  const n = Yt.toArray(e);
  for (const r of n)
    t.includes("block") && dl(r) || t.includes("group") && ul(r) || console.warn(
      `${i}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      r
    );
}, Zi = ae(({ children: i, onSort: e, ...t }, n) => {
  Rr("GroupLinear", i, ["block"]);
  const [r, s] = F(Yt.toArray(i));
  return B(() => {
    s(Yt.toArray(i));
  }, [i]), B(() => {
    e?.(r);
  }, [r, e]), h("div", {
    ref: n,
    ...t,
    children: r.map((o, a) => h(wo, {
      children: o
    }, a))
  });
});
Zi.displayName = "GroupLinear";
Zi.__isPageLayoutGroup = !0;
function hl() {
  for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
    e[t] = arguments[t];
  return P(
    () => (n) => {
      e.forEach((r) => r(n));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const gi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function ut(i) {
  const e = Object.prototype.toString.call(i);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Ji(i) {
  return "nodeType" in i;
}
function se(i) {
  var e, t;
  return i ? ut(i) ? i : Ji(i) && (e = (t = i.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Qi(i) {
  const {
    Document: e
  } = se(i);
  return i instanceof e;
}
function Mt(i) {
  return ut(i) ? !1 : i instanceof se(i).HTMLElement;
}
function Nr(i) {
  return i instanceof se(i).SVGElement;
}
function ht(i) {
  return i ? ut(i) ? i.document : Ji(i) ? Qi(i) ? i : Mt(i) || Nr(i) ? i.ownerDocument : document : document : document;
}
const Ee = gi ? zi : B;
function vi(i) {
  const e = I(i);
  return Ee(() => {
    e.current = i;
  }), q(function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function fl() {
  const i = I(null), e = q((n, r) => {
    i.current = setInterval(n, r);
  }, []), t = q(() => {
    i.current !== null && (clearInterval(i.current), i.current = null);
  }, []);
  return [e, t];
}
function Nt(i, e) {
  e === void 0 && (e = [i]);
  const t = I(i);
  return Ee(() => {
    t.current !== i && (t.current = i);
  }, e), t;
}
function zt(i, e) {
  const t = I();
  return P(
    () => {
      const n = i(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function ii(i) {
  const e = vi(i), t = I(null), n = q(
    (r) => {
      r !== t.current && e?.(r, t.current), t.current = r;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function ni(i) {
  const e = I();
  return B(() => {
    e.current = i;
  }, [i]), e.current;
}
let ki = {};
function Pt(i, e) {
  return P(() => {
    if (e)
      return e;
    const t = ki[i] == null ? 0 : ki[i] + 1;
    return ki[i] = t, i + "-" + t;
  }, [i, e]);
}
function kr(i) {
  return function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r];
    return n.reduce((s, o) => {
      const a = Object.entries(o);
      for (const [l, d] of a) {
        const c = s[l];
        c != null && (s[l] = c + i * d);
      }
      return s;
    }, {
      ...e
    });
  };
}
const lt = /* @__PURE__ */ kr(1), kt = /* @__PURE__ */ kr(-1);
function ml(i) {
  return "clientX" in i && "clientY" in i;
}
function bi(i) {
  if (!i)
    return !1;
  const {
    KeyboardEvent: e
  } = se(i.target);
  return e && i instanceof e;
}
function pl(i) {
  if (!i)
    return !1;
  const {
    TouchEvent: e
  } = se(i.target);
  return e && i instanceof e;
}
function ri(i) {
  if (pl(i)) {
    if (i.touches && i.touches.length) {
      const {
        clientX: e,
        clientY: t
      } = i.touches[0];
      return {
        x: e,
        y: t
      };
    } else if (i.changedTouches && i.changedTouches.length) {
      const {
        clientX: e,
        clientY: t
      } = i.changedTouches[0];
      return {
        x: e,
        y: t
      };
    }
  }
  return ml(i) ? {
    x: i.clientX,
    y: i.clientY
  } : null;
}
const Xe = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(i) {
      if (!i)
        return;
      const {
        x: e,
        y: t
      } = i;
      return "translate3d(" + (e ? Math.round(e) : 0) + "px, " + (t ? Math.round(t) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(i) {
      if (!i)
        return;
      const {
        scaleX: e,
        scaleY: t
      } = i;
      return "scaleX(" + e + ") scaleY(" + t + ")";
    }
  },
  Transform: {
    toString(i) {
      if (i)
        return [Xe.Translate.toString(i), Xe.Scale.toString(i)].join(" ");
    }
  },
  Transition: {
    toString(i) {
      let {
        property: e,
        duration: t,
        easing: n
      } = i;
      return e + " " + t + "ms " + n;
    }
  }
}), Sn = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function gl(i) {
  return i.matches(Sn) ? i : i.querySelector(Sn);
}
const vl = {
  display: "none"
};
function bl(i) {
  let {
    id: e,
    value: t
  } = i;
  return H.createElement("div", {
    id: e,
    style: vl
  }, t);
}
function yl(i) {
  let {
    id: e,
    announcement: t,
    ariaLiveType: n = "assertive"
  } = i;
  const r = {
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
  return H.createElement("div", {
    id: e,
    style: r,
    role: "status",
    "aria-live": n,
    "aria-atomic": !0
  }, t);
}
function xl() {
  const [i, e] = F("");
  return {
    announce: q((n) => {
      n != null && e(n);
    }, []),
    announcement: i
  };
}
const Tr = /* @__PURE__ */ Me(null);
function wl(i) {
  const e = _e(Tr);
  B(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(i);
  }, [i, e]);
}
function Cl() {
  const [i] = F(() => /* @__PURE__ */ new Set()), e = q((n) => (i.add(n), () => i.delete(n)), [i]);
  return [q((n) => {
    let {
      type: r,
      event: s
    } = n;
    i.forEach((o) => {
      var a;
      return (a = o[r]) == null ? void 0 : a.call(o, s);
    });
  }, [i]), e];
}
const _l = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, El = {
  onDragStart(i) {
    let {
      active: e
    } = i;
    return "Picked up draggable item " + e.id + ".";
  },
  onDragOver(i) {
    let {
      active: e,
      over: t
    } = i;
    return t ? "Draggable item " + e.id + " was moved over droppable area " + t.id + "." : "Draggable item " + e.id + " is no longer over a droppable area.";
  },
  onDragEnd(i) {
    let {
      active: e,
      over: t
    } = i;
    return t ? "Draggable item " + e.id + " was dropped over droppable area " + t.id : "Draggable item " + e.id + " was dropped.";
  },
  onDragCancel(i) {
    let {
      active: e
    } = i;
    return "Dragging was cancelled. Draggable item " + e.id + " was dropped.";
  }
};
function Sl(i) {
  let {
    announcements: e = El,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: r = _l
  } = i;
  const {
    announce: s,
    announcement: o
  } = xl(), a = Pt("DndLiveRegion"), [l, d] = F(!1);
  if (B(() => {
    d(!0);
  }, []), wl(P(() => ({
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
        over: m
      } = u;
      e.onDragMove && s(e.onDragMove({
        active: f,
        over: m
      }));
    },
    onDragOver(u) {
      let {
        active: f,
        over: m
      } = u;
      s(e.onDragOver({
        active: f,
        over: m
      }));
    },
    onDragEnd(u) {
      let {
        active: f,
        over: m
      } = u;
      s(e.onDragEnd({
        active: f,
        over: m
      }));
    },
    onDragCancel(u) {
      let {
        active: f,
        over: m
      } = u;
      s(e.onDragCancel({
        active: f,
        over: m
      }));
    }
  }), [s, e])), !l)
    return null;
  const c = H.createElement(H.Fragment, null, H.createElement(bl, {
    id: n,
    value: r.draggable
  }), H.createElement(yl, {
    id: a,
    announcement: o
  }));
  return t ? sr(c, t) : c;
}
var J;
(function(i) {
  i.DragStart = "dragStart", i.DragMove = "dragMove", i.DragEnd = "dragEnd", i.DragCancel = "dragCancel", i.DragOver = "dragOver", i.RegisterDroppable = "registerDroppable", i.SetDroppableDisabled = "setDroppableDisabled", i.UnregisterDroppable = "unregisterDroppable";
})(J || (J = {}));
function si() {
}
function Dn(i, e) {
  return P(
    () => ({
      sensor: i,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, e]
  );
}
function Dl() {
  for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
    e[t] = arguments[t];
  return P(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const Se = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Rl(i, e) {
  return Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2));
}
function Nl(i, e) {
  const t = ri(i);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function kl(i, e) {
  let {
    data: {
      value: t
    }
  } = i, {
    data: {
      value: n
    }
  } = e;
  return t - n;
}
function Tl(i, e) {
  let {
    data: {
      value: t
    }
  } = i, {
    data: {
      value: n
    }
  } = e;
  return n - t;
}
function Rn(i) {
  let {
    left: e,
    top: t,
    height: n,
    width: r
  } = i;
  return [{
    x: e,
    y: t
  }, {
    x: e + r,
    y: t
  }, {
    x: e,
    y: t + n
  }, {
    x: e + r,
    y: t + n
  }];
}
function Ar(i, e) {
  if (!i || i.length === 0)
    return null;
  const [t] = i;
  return t[e];
}
const Al = (i) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = i;
  const r = Rn(e), s = [];
  for (const o of n) {
    const {
      id: a
    } = o, l = t.get(a);
    if (l) {
      const d = Rn(l), c = r.reduce((f, m, x) => f + Rl(d[x], m), 0), u = Number((c / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: o,
          value: u
        }
      });
    }
  }
  return s.sort(kl);
};
function Ol(i, e) {
  const t = Math.max(e.top, i.top), n = Math.max(e.left, i.left), r = Math.min(e.left + e.width, i.left + i.width), s = Math.min(e.top + e.height, i.top + i.height), o = r - n, a = s - t;
  if (n < r && t < s) {
    const l = e.width * e.height, d = i.width * i.height, c = o * a, u = c / (l + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Ml = (i) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = i;
  const r = [];
  for (const s of n) {
    const {
      id: o
    } = s, a = t.get(o);
    if (a) {
      const l = Ol(a, e);
      l > 0 && r.push({
        id: o,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return r.sort(Tl);
};
function zl(i, e, t) {
  return {
    ...i,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Or(i, e) {
  return i && e ? {
    x: i.left - e.left,
    y: i.top - e.top
  } : Se;
}
function Pl(i) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return r.reduce((o, a) => ({
      ...o,
      top: o.top + i * a.y,
      bottom: o.bottom + i * a.y,
      left: o.left + i * a.x,
      right: o.right + i * a.x
    }), {
      ...t
    });
  };
}
const Ll = /* @__PURE__ */ Pl(1);
function Mr(i) {
  if (i.startsWith("matrix3d(")) {
    const e = i.slice(9, -1).split(/, /);
    return {
      x: +e[12],
      y: +e[13],
      scaleX: +e[0],
      scaleY: +e[5]
    };
  } else if (i.startsWith("matrix(")) {
    const e = i.slice(7, -1).split(/, /);
    return {
      x: +e[4],
      y: +e[5],
      scaleX: +e[0],
      scaleY: +e[3]
    };
  }
  return null;
}
function Il(i, e, t) {
  const n = Mr(e);
  if (!n)
    return i;
  const {
    scaleX: r,
    scaleY: s,
    x: o,
    y: a
  } = n, l = i.left - o - (1 - r) * parseFloat(t), d = i.top - a - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), c = r ? i.width / r : i.width, u = s ? i.height / s : i.height;
  return {
    width: c,
    height: u,
    top: d,
    right: l + c,
    bottom: d + u,
    left: l
  };
}
const Hl = {
  ignoreTransform: !1
};
function ft(i, e) {
  e === void 0 && (e = Hl);
  let t = i.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: c
    } = se(i).getComputedStyle(i);
    d && (t = Il(t, d, c));
  }
  const {
    top: n,
    left: r,
    width: s,
    height: o,
    bottom: a,
    right: l
  } = t;
  return {
    top: n,
    left: r,
    width: s,
    height: o,
    bottom: a,
    right: l
  };
}
function Nn(i) {
  return ft(i, {
    ignoreTransform: !0
  });
}
function Bl(i) {
  const e = i.innerWidth, t = i.innerHeight;
  return {
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
  };
}
function Fl(i, e) {
  return e === void 0 && (e = se(i).getComputedStyle(i)), e.position === "fixed";
}
function Wl(i, e) {
  e === void 0 && (e = se(i).getComputedStyle(i));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((r) => {
    const s = e[r];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function yi(i, e) {
  const t = [];
  function n(r) {
    if (e != null && t.length >= e || !r)
      return t;
    if (Qi(r) && r.scrollingElement != null && !t.includes(r.scrollingElement))
      return t.push(r.scrollingElement), t;
    if (!Mt(r) || Nr(r) || t.includes(r))
      return t;
    const s = se(i).getComputedStyle(r);
    return r !== i && Wl(r, s) && t.push(r), Fl(r, s) ? t : n(r.parentNode);
  }
  return i ? n(i) : t;
}
function zr(i) {
  const [e] = yi(i, 1);
  return e ?? null;
}
function Ti(i) {
  return !gi || !i ? null : ut(i) ? i : Ji(i) ? Qi(i) || i === ht(i).scrollingElement ? window : Mt(i) ? i : null : null;
}
function Pr(i) {
  return ut(i) ? i.scrollX : i.scrollLeft;
}
function Lr(i) {
  return ut(i) ? i.scrollY : i.scrollTop;
}
function Li(i) {
  return {
    x: Pr(i),
    y: Lr(i)
  };
}
var ee;
(function(i) {
  i[i.Forward = 1] = "Forward", i[i.Backward = -1] = "Backward";
})(ee || (ee = {}));
function Ir(i) {
  return !gi || !i ? !1 : i === document.scrollingElement;
}
function Hr(i) {
  const e = {
    x: 0,
    y: 0
  }, t = Ir(i) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: i.clientHeight,
    width: i.clientWidth
  }, n = {
    x: i.scrollWidth - t.width,
    y: i.scrollHeight - t.height
  }, r = i.scrollTop <= e.y, s = i.scrollLeft <= e.x, o = i.scrollTop >= n.y, a = i.scrollLeft >= n.x;
  return {
    isTop: r,
    isLeft: s,
    isBottom: o,
    isRight: a,
    maxScroll: n,
    minScroll: e
  };
}
const Gl = {
  x: 0.2,
  y: 0.2
};
function jl(i, e, t, n, r) {
  let {
    top: s,
    left: o,
    right: a,
    bottom: l
  } = t;
  n === void 0 && (n = 10), r === void 0 && (r = Gl);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: f
  } = Hr(i), m = {
    x: 0,
    y: 0
  }, x = {
    x: 0,
    y: 0
  }, v = {
    height: e.height * r.y,
    width: e.width * r.x
  };
  return !d && s <= e.top + v.height ? (m.y = ee.Backward, x.y = n * Math.abs((e.top + v.height - s) / v.height)) : !c && l >= e.bottom - v.height && (m.y = ee.Forward, x.y = n * Math.abs((e.bottom - v.height - l) / v.height)), !f && a >= e.right - v.width ? (m.x = ee.Forward, x.x = n * Math.abs((e.right - v.width - a) / v.width)) : !u && o <= e.left + v.width && (m.x = ee.Backward, x.x = n * Math.abs((e.left + v.width - o) / v.width)), {
    direction: m,
    speed: x
  };
}
function $l(i) {
  if (i === document.scrollingElement) {
    const {
      innerWidth: s,
      innerHeight: o
    } = window;
    return {
      top: 0,
      left: 0,
      right: s,
      bottom: o,
      width: s,
      height: o
    };
  }
  const {
    top: e,
    left: t,
    right: n,
    bottom: r
  } = i.getBoundingClientRect();
  return {
    top: e,
    left: t,
    right: n,
    bottom: r,
    width: i.clientWidth,
    height: i.clientHeight
  };
}
function Br(i) {
  return i.reduce((e, t) => lt(e, Li(t)), Se);
}
function Ul(i) {
  return i.reduce((e, t) => e + Pr(t), 0);
}
function Vl(i) {
  return i.reduce((e, t) => e + Lr(t), 0);
}
function Fr(i, e) {
  if (e === void 0 && (e = ft), !i)
    return;
  const {
    top: t,
    left: n,
    bottom: r,
    right: s
  } = e(i);
  zr(i) && (r <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && i.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const ql = [["x", ["left", "right"], Ul], ["y", ["top", "bottom"], Vl]];
class en {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = yi(t), r = Br(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, o, a] of ql)
      for (const l of o)
        Object.defineProperty(this, l, {
          get: () => {
            const d = a(n), c = r[s] - d;
            return this.rect[l] + c;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class wt {
  constructor(e) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((t) => {
        var n;
        return (n = this.target) == null ? void 0 : n.removeEventListener(...t);
      });
    }, this.target = e;
  }
  add(e, t, n) {
    var r;
    (r = this.target) == null || r.addEventListener(e, t, n), this.listeners.push([e, t, n]);
  }
}
function Kl(i) {
  const {
    EventTarget: e
  } = se(i);
  return i instanceof e ? i : ht(i);
}
function Ai(i, e) {
  const t = Math.abs(i.x), n = Math.abs(i.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var ge;
(function(i) {
  i.Click = "click", i.DragStart = "dragstart", i.Keydown = "keydown", i.ContextMenu = "contextmenu", i.Resize = "resize", i.SelectionChange = "selectionchange", i.VisibilityChange = "visibilitychange";
})(ge || (ge = {}));
function kn(i) {
  i.preventDefault();
}
function Xl(i) {
  i.stopPropagation();
}
var W;
(function(i) {
  i.Space = "Space", i.Down = "ArrowDown", i.Right = "ArrowRight", i.Left = "ArrowLeft", i.Up = "ArrowUp", i.Esc = "Escape", i.Enter = "Enter", i.Tab = "Tab";
})(W || (W = {}));
const Wr = {
  start: [W.Space, W.Enter],
  cancel: [W.Esc],
  end: [W.Space, W.Enter, W.Tab]
}, Yl = (i, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (i.code) {
    case W.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case W.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case W.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case W.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class tn {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new wt(ht(t)), this.windowListeners = new wt(se(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(ge.Resize, this.handleCancel), this.windowListeners.add(ge.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ge.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && Fr(n), t(Se);
  }
  handleKeyDown(e) {
    if (bi(e)) {
      const {
        active: t,
        context: n,
        options: r
      } = this.props, {
        keyboardCodes: s = Wr,
        coordinateGetter: o = Yl,
        scrollBehavior: a = "smooth"
      } = r, {
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
      } : Se;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const u = o(e, {
        active: t,
        context: n.current,
        currentCoordinates: c
      });
      if (u) {
        const f = kt(u, c), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: x
        } = n.current;
        for (const v of x) {
          const w = e.code, {
            isTop: S,
            isRight: N,
            isLeft: C,
            isBottom: D,
            maxScroll: b,
            minScroll: y
          } = Hr(v), g = $l(v), _ = {
            x: Math.min(w === W.Right ? g.right - g.width / 2 : g.right, Math.max(w === W.Right ? g.left : g.left + g.width / 2, u.x)),
            y: Math.min(w === W.Down ? g.bottom - g.height / 2 : g.bottom, Math.max(w === W.Down ? g.top : g.top + g.height / 2, u.y))
          }, M = w === W.Right && !N || w === W.Left && !C, T = w === W.Down && !D || w === W.Up && !S;
          if (M && _.x !== u.x) {
            const E = v.scrollLeft + f.x, R = w === W.Right && E <= b.x || w === W.Left && E >= y.x;
            if (R && !f.y) {
              v.scrollTo({
                left: E,
                behavior: a
              });
              return;
            }
            R ? m.x = v.scrollLeft - E : m.x = w === W.Right ? v.scrollLeft - b.x : v.scrollLeft - y.x, m.x && v.scrollBy({
              left: -m.x,
              behavior: a
            });
            break;
          } else if (T && _.y !== u.y) {
            const E = v.scrollTop + f.y, R = w === W.Down && E <= b.y || w === W.Up && E >= y.y;
            if (R && !f.x) {
              v.scrollTo({
                top: E,
                behavior: a
              });
              return;
            }
            R ? m.y = v.scrollTop - E : m.y = w === W.Down ? v.scrollTop - b.y : v.scrollTop - y.y, m.y && v.scrollBy({
              top: -m.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(e, lt(kt(u, this.referenceCoordinates), m));
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
tn.activators = [{
  eventName: "onKeyDown",
  handler: (i, e, t) => {
    let {
      keyboardCodes: n = Wr,
      onActivation: r
    } = e, {
      active: s
    } = t;
    const {
      code: o
    } = i.nativeEvent;
    if (n.start.includes(o)) {
      const a = s.activatorNode.current;
      return a && i.target !== a ? !1 : (i.preventDefault(), r?.({
        event: i.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Tn(i) {
  return !!(i && "distance" in i);
}
function An(i) {
  return !!(i && "delay" in i);
}
class nn {
  constructor(e, t, n) {
    var r;
    n === void 0 && (n = Kl(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: o
    } = s;
    this.props = e, this.events = t, this.document = ht(o), this.documentListeners = new wt(this.document), this.listeners = new wt(n), this.windowListeners = new wt(se(o)), this.initialCoordinates = (r = ri(s)) != null ? r : Se, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(ge.Resize, this.handleCancel), this.windowListeners.add(ge.DragStart, kn), this.windowListeners.add(ge.VisibilityChange, this.handleCancel), this.windowListeners.add(ge.ContextMenu, kn), this.documentListeners.add(ge.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (An(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (Tn(t)) {
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
      onPending: r
    } = this.props;
    r(n, e, this.initialCoordinates, t);
  }
  handleStart() {
    const {
      initialCoordinates: e
    } = this, {
      onStart: t
    } = this.props;
    e && (this.activated = !0, this.documentListeners.add(ge.Click, Xl, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(ge.SelectionChange, this.removeTextSelection), t(e));
  }
  handleMove(e) {
    var t;
    const {
      activated: n,
      initialCoordinates: r,
      props: s
    } = this, {
      onMove: o,
      options: {
        activationConstraint: a
      }
    } = s;
    if (!r)
      return;
    const l = (t = ri(e)) != null ? t : Se, d = kt(r, l);
    if (!n && a) {
      if (Tn(a)) {
        if (a.tolerance != null && Ai(d, a.tolerance))
          return this.handleCancel();
        if (Ai(d, a.distance))
          return this.handleStart();
      }
      if (An(a) && Ai(d, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, d);
      return;
    }
    e.cancelable && e.preventDefault(), o(l);
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
    e.code === W.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Zl = {
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
class rn extends nn {
  constructor(e) {
    const {
      event: t
    } = e, n = ht(t.target);
    super(e, Zl, n);
  }
}
rn.activators = [{
  eventName: "onPointerDown",
  handler: (i, e) => {
    let {
      nativeEvent: t
    } = i, {
      onActivation: n
    } = e;
    return !t.isPrimary || t.button !== 0 ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Jl = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Ii;
(function(i) {
  i[i.RightClick = 2] = "RightClick";
})(Ii || (Ii = {}));
class Ql extends nn {
  constructor(e) {
    super(e, Jl, ht(e.event.target));
  }
}
Ql.activators = [{
  eventName: "onMouseDown",
  handler: (i, e) => {
    let {
      nativeEvent: t
    } = i, {
      onActivation: n
    } = e;
    return t.button === Ii.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Oi = {
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
class ec extends nn {
  constructor(e) {
    super(e, Oi);
  }
  static setup() {
    return window.addEventListener(Oi.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Oi.move.name, e);
    };
    function e() {
    }
  }
}
ec.activators = [{
  eventName: "onTouchStart",
  handler: (i, e) => {
    let {
      nativeEvent: t
    } = i, {
      onActivation: n
    } = e;
    const {
      touches: r
    } = t;
    return r.length > 1 ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
var Ct;
(function(i) {
  i[i.Pointer = 0] = "Pointer", i[i.DraggableRect = 1] = "DraggableRect";
})(Ct || (Ct = {}));
var oi;
(function(i) {
  i[i.TreeOrder = 0] = "TreeOrder", i[i.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(oi || (oi = {}));
function tc(i) {
  let {
    acceleration: e,
    activator: t = Ct.Pointer,
    canScroll: n,
    draggingRect: r,
    enabled: s,
    interval: o = 5,
    order: a = oi.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: f
  } = i;
  const m = nc({
    delta: u,
    disabled: !s
  }), [x, v] = fl(), w = I({
    x: 0,
    y: 0
  }), S = I({
    x: 0,
    y: 0
  }), N = P(() => {
    switch (t) {
      case Ct.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Ct.DraggableRect:
        return r;
    }
  }, [t, r, l]), C = I(null), D = q(() => {
    const y = C.current;
    if (!y)
      return;
    const g = w.current.x * S.current.x, _ = w.current.y * S.current.y;
    y.scrollBy(g, _);
  }, []), b = P(() => a === oi.TreeOrder ? [...d].reverse() : d, [a, d]);
  B(
    () => {
      if (!s || !d.length || !N) {
        v();
        return;
      }
      for (const y of b) {
        if (n?.(y) === !1)
          continue;
        const g = d.indexOf(y), _ = c[g];
        if (!_)
          continue;
        const {
          direction: M,
          speed: T
        } = jl(y, _, N, e, f);
        for (const E of ["x", "y"])
          m[E][M[E]] || (T[E] = 0, M[E] = 0);
        if (T.x > 0 || T.y > 0) {
          v(), C.current = y, x(D, o), w.current = T, S.current = M;
          return;
        }
      }
      w.current = {
        x: 0,
        y: 0
      }, S.current = {
        x: 0,
        y: 0
      }, v();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      D,
      n,
      v,
      s,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      x,
      d,
      b,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f)
    ]
  );
}
const ic = {
  x: {
    [ee.Backward]: !1,
    [ee.Forward]: !1
  },
  y: {
    [ee.Backward]: !1,
    [ee.Forward]: !1
  }
};
function nc(i) {
  let {
    delta: e,
    disabled: t
  } = i;
  const n = ni(e);
  return zt((r) => {
    if (t || !n || !r)
      return ic;
    const s = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [ee.Backward]: r.x[ee.Backward] || s.x === -1,
        [ee.Forward]: r.x[ee.Forward] || s.x === 1
      },
      y: {
        [ee.Backward]: r.y[ee.Backward] || s.y === -1,
        [ee.Forward]: r.y[ee.Forward] || s.y === 1
      }
    };
  }, [t, e, n]);
}
function rc(i, e) {
  const t = e != null ? i.get(e) : void 0, n = t ? t.node.current : null;
  return zt((r) => {
    var s;
    return e == null ? null : (s = n ?? r) != null ? s : null;
  }, [n, e]);
}
function sc(i, e) {
  return P(() => i.reduce((t, n) => {
    const {
      sensor: r
    } = n, s = r.activators.map((o) => ({
      eventName: o.eventName,
      handler: e(o.handler, n)
    }));
    return [...t, ...s];
  }, []), [i, e]);
}
var Tt;
(function(i) {
  i[i.Always = 0] = "Always", i[i.BeforeDragging = 1] = "BeforeDragging", i[i.WhileDragging = 2] = "WhileDragging";
})(Tt || (Tt = {}));
var Hi;
(function(i) {
  i.Optimized = "optimized";
})(Hi || (Hi = {}));
const On = /* @__PURE__ */ new Map();
function oc(i, e) {
  let {
    dragging: t,
    dependencies: n,
    config: r
  } = e;
  const [s, o] = F(null), {
    frequency: a,
    measure: l,
    strategy: d
  } = r, c = I(i), u = w(), f = Nt(u), m = q(function(S) {
    S === void 0 && (S = []), !f.current && o((N) => N === null ? S : N.concat(S.filter((C) => !N.includes(C))));
  }, [f]), x = I(null), v = zt((S) => {
    if (u && !t)
      return On;
    if (!S || S === On || c.current !== i || s != null) {
      const N = /* @__PURE__ */ new Map();
      for (let C of i) {
        if (!C)
          continue;
        if (s && s.length > 0 && !s.includes(C.id) && C.rect.current) {
          N.set(C.id, C.rect.current);
          continue;
        }
        const D = C.node.current, b = D ? new en(l(D), D) : null;
        C.rect.current = b, b && N.set(C.id, b);
      }
      return N;
    }
    return S;
  }, [i, s, t, u, l]);
  return B(() => {
    c.current = i;
  }, [i]), B(
    () => {
      u || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), B(
    () => {
      s && s.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), B(
    () => {
      u || typeof a != "number" || x.current !== null || (x.current = setTimeout(() => {
        m(), x.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, u, m, ...n]
  ), {
    droppableRects: v,
    measureDroppableContainers: m,
    measuringScheduled: s != null
  };
  function w() {
    switch (d) {
      case Tt.Always:
        return !1;
      case Tt.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function sn(i, e) {
  return zt((t) => i ? t || (typeof e == "function" ? e(i) : i) : null, [e, i]);
}
function ac(i, e) {
  return sn(i, e);
}
function lc(i) {
  let {
    callback: e,
    disabled: t
  } = i;
  const n = vi(e), r = P(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return B(() => () => r?.disconnect(), [r]), r;
}
function xi(i) {
  let {
    callback: e,
    disabled: t
  } = i;
  const n = vi(e), r = P(
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
  return B(() => () => r?.disconnect(), [r]), r;
}
function cc(i) {
  return new en(ft(i), i);
}
function Mn(i, e, t) {
  e === void 0 && (e = cc);
  const [n, r] = F(null);
  function s() {
    r((l) => {
      if (!i)
        return null;
      if (i.isConnected === !1) {
        var d;
        return (d = l ?? t) != null ? d : null;
      }
      const c = e(i);
      return JSON.stringify(l) === JSON.stringify(c) ? l : c;
    });
  }
  const o = lc({
    callback(l) {
      if (i)
        for (const d of l) {
          const {
            type: c,
            target: u
          } = d;
          if (c === "childList" && u instanceof HTMLElement && u.contains(i)) {
            s();
            break;
          }
        }
    }
  }), a = xi({
    callback: s
  });
  return Ee(() => {
    s(), i ? (a?.observe(i), o?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), o?.disconnect());
  }, [i]), n;
}
function dc(i) {
  const e = sn(i);
  return Or(i, e);
}
const zn = [];
function uc(i) {
  const e = I(i), t = zt((n) => i ? n && n !== zn && i && e.current && i.parentNode === e.current.parentNode ? n : yi(i) : zn, [i]);
  return B(() => {
    e.current = i;
  }, [i]), t;
}
function hc(i) {
  const [e, t] = F(null), n = I(i), r = q((s) => {
    const o = Ti(s.target);
    o && t((a) => a ? (a.set(o, Li(o)), new Map(a)) : null);
  }, []);
  return B(() => {
    const s = n.current;
    if (i !== s) {
      o(s);
      const a = i.map((l) => {
        const d = Ti(l);
        return d ? (d.addEventListener("scroll", r, {
          passive: !0
        }), [d, Li(d)]) : null;
      }).filter((l) => l != null);
      t(a.length ? new Map(a) : null), n.current = i;
    }
    return () => {
      o(i), o(s);
    };
    function o(a) {
      a.forEach((l) => {
        const d = Ti(l);
        d?.removeEventListener("scroll", r);
      });
    }
  }, [r, i]), P(() => i.length ? e ? Array.from(e.values()).reduce((s, o) => lt(s, o), Se) : Br(i) : Se, [i, e]);
}
function Pn(i, e) {
  e === void 0 && (e = []);
  const t = I(null);
  return B(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), B(() => {
    const n = i !== Se;
    n && !t.current && (t.current = i), !n && t.current && (t.current = null);
  }, [i]), t.current ? kt(i, t.current) : Se;
}
function fc(i) {
  B(
    () => {
      if (!gi)
        return;
      const e = i.map((t) => {
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
    i.map((e) => {
      let {
        sensor: t
      } = e;
      return t;
    })
  );
}
function mc(i, e) {
  return P(() => i.reduce((t, n) => {
    let {
      eventName: r,
      handler: s
    } = n;
    return t[r] = (o) => {
      s(o, e);
    }, t;
  }, {}), [i, e]);
}
function Gr(i) {
  return P(() => i ? Bl(i) : null, [i]);
}
const Ln = [];
function pc(i, e) {
  e === void 0 && (e = ft);
  const [t] = i, n = Gr(t ? se(t) : null), [r, s] = F(Ln);
  function o() {
    s(() => i.length ? i.map((l) => Ir(l) ? n : new en(e(l), l)) : Ln);
  }
  const a = xi({
    callback: o
  });
  return Ee(() => {
    a?.disconnect(), o(), i.forEach((l) => a?.observe(l));
  }, [i]), r;
}
function jr(i) {
  if (!i)
    return null;
  if (i.children.length > 1)
    return i;
  const e = i.children[0];
  return Mt(e) ? e : i;
}
function gc(i) {
  let {
    measure: e
  } = i;
  const [t, n] = F(null), r = q((d) => {
    for (const {
      target: c
    } of d)
      if (Mt(c)) {
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
  }, [e]), s = xi({
    callback: r
  }), o = q((d) => {
    const c = jr(d);
    s?.disconnect(), c && s?.observe(c), n(c ? e(c) : null);
  }, [e, s]), [a, l] = ii(o);
  return P(() => ({
    nodeRef: a,
    rect: t,
    setRef: l
  }), [t, a, l]);
}
const vc = [{
  sensor: rn,
  options: {}
}, {
  sensor: tn,
  options: {}
}], bc = {
  current: {}
}, Kt = {
  draggable: {
    measure: Nn
  },
  droppable: {
    measure: Nn,
    strategy: Tt.WhileDragging,
    frequency: Hi.Optimized
  },
  dragOverlay: {
    measure: ft
  }
};
class _t extends Map {
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
const yc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new _t(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: si
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Kt,
  measureDroppableContainers: si,
  windowRect: null,
  measuringScheduled: !1
}, $r = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: si,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: si
}, Lt = /* @__PURE__ */ Me($r), Ur = /* @__PURE__ */ Me(yc);
function xc() {
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
      containers: new _t()
    }
  };
}
function wc(i, e) {
  switch (e.type) {
    case J.DragStart:
      return {
        ...i,
        draggable: {
          ...i.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case J.DragMove:
      return i.draggable.active == null ? i : {
        ...i,
        draggable: {
          ...i.draggable,
          translate: {
            x: e.coordinates.x - i.draggable.initialCoordinates.x,
            y: e.coordinates.y - i.draggable.initialCoordinates.y
          }
        }
      };
    case J.DragEnd:
    case J.DragCancel:
      return {
        ...i,
        draggable: {
          ...i.draggable,
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
    case J.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: n
      } = t, r = new _t(i.droppable.containers);
      return r.set(n, t), {
        ...i,
        droppable: {
          ...i.droppable,
          containers: r
        }
      };
    }
    case J.SetDroppableDisabled: {
      const {
        id: t,
        key: n,
        disabled: r
      } = e, s = i.droppable.containers.get(t);
      if (!s || n !== s.key)
        return i;
      const o = new _t(i.droppable.containers);
      return o.set(t, {
        ...s,
        disabled: r
      }), {
        ...i,
        droppable: {
          ...i.droppable,
          containers: o
        }
      };
    }
    case J.UnregisterDroppable: {
      const {
        id: t,
        key: n
      } = e, r = i.droppable.containers.get(t);
      if (!r || n !== r.key)
        return i;
      const s = new _t(i.droppable.containers);
      return s.delete(t), {
        ...i,
        droppable: {
          ...i.droppable,
          containers: s
        }
      };
    }
    default:
      return i;
  }
}
function Cc(i) {
  let {
    disabled: e
  } = i;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: r
  } = _e(Lt), s = ni(n), o = ni(t?.id);
  return B(() => {
    if (!e && !n && s && o != null) {
      if (!bi(s) || document.activeElement === s.target)
        return;
      const a = r.get(o);
      if (!a)
        return;
      const {
        activatorNode: l,
        node: d
      } = a;
      if (!l.current && !d.current)
        return;
      requestAnimationFrame(() => {
        for (const c of [l.current, d.current]) {
          if (!c)
            continue;
          const u = gl(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, r, o, s]), null;
}
function Vr(i, e) {
  let {
    transform: t,
    ...n
  } = e;
  return i != null && i.length ? i.reduce((r, s) => s({
    transform: r,
    ...n
  }), t) : t;
}
function _c(i) {
  return P(
    () => ({
      draggable: {
        ...Kt.draggable,
        ...i?.draggable
      },
      droppable: {
        ...Kt.droppable,
        ...i?.droppable
      },
      dragOverlay: {
        ...Kt.dragOverlay,
        ...i?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i?.draggable, i?.droppable, i?.dragOverlay]
  );
}
function Ec(i) {
  let {
    activeNode: e,
    measure: t,
    initialRect: n,
    config: r = !0
  } = i;
  const s = I(!1), {
    x: o,
    y: a
  } = typeof r == "boolean" ? {
    x: r,
    y: r
  } : r;
  Ee(() => {
    if (!o && !a || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !n)
      return;
    const d = e?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const c = t(d), u = Or(c, n);
    if (o || (u.x = 0), a || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = zr(d);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, o, a, n, t]);
}
const wi = /* @__PURE__ */ Me({
  ...Se,
  scaleX: 1,
  scaleY: 1
});
var qe;
(function(i) {
  i[i.Uninitialized = 0] = "Uninitialized", i[i.Initializing = 1] = "Initializing", i[i.Initialized = 2] = "Initialized";
})(qe || (qe = {}));
const Sc = /* @__PURE__ */ Co(function(e) {
  var t, n, r, s;
  let {
    id: o,
    accessibility: a,
    autoScroll: l = !0,
    children: d,
    sensors: c = vc,
    collisionDetection: u = Ml,
    measuring: f,
    modifiers: m,
    ...x
  } = e;
  const v = _o(wc, void 0, xc), [w, S] = v, [N, C] = Cl(), [D, b] = F(qe.Uninitialized), y = D === qe.Initialized, {
    draggable: {
      active: g,
      nodes: _,
      translate: M
    },
    droppable: {
      containers: T
    }
  } = w, E = g != null ? _.get(g) : null, R = I({
    initial: null,
    translated: null
  }), k = P(() => {
    var ie;
    return g != null ? {
      id: g,
      // It's possible for the active node to unmount while dragging
      data: (ie = E?.data) != null ? ie : bc,
      rect: R
    } : null;
  }, [g, E]), L = I(null), [X, Y] = F(null), [V, Q] = F(null), $ = Nt(x, Object.values(x)), ne = Pt("DndDescribedBy", o), He = P(() => T.getEnabled(), [T]), U = _c(f), {
    droppableRects: Z,
    measureDroppableContainers: ye,
    measuringScheduled: ze
  } = oc(He, {
    dragging: y,
    dependencies: [M.x, M.y],
    config: U.droppable
  }), oe = rc(_, g), tt = P(() => V ? ri(V) : null, [V]), xe = As(), he = ac(oe, U.draggable.measure);
  Ec({
    activeNode: g != null ? _.get(g) : null,
    config: xe.layoutShiftCompensation,
    initialRect: he,
    measure: U.draggable.measure
  });
  const j = Mn(oe, U.draggable.measure, he), Ze = Mn(oe ? oe.parentElement : null), fe = I({
    activatorEvent: null,
    active: null,
    activeNode: oe,
    collisionRect: null,
    collisions: null,
    droppableRects: Z,
    draggableNodes: _,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: T,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Be = T.getNodeFor((t = fe.current.over) == null ? void 0 : t.id), we = gc({
    measure: U.dragOverlay.measure
  }), Fe = (n = we.nodeRef.current) != null ? n : oe, We = y ? (r = we.rect) != null ? r : j : null, Ht = !!(we.nodeRef.current && we.rect), Bt = dc(Ht ? null : j), mt = Gr(Fe ? se(Fe) : null), Re = uc(y ? Be ?? oe : null), it = pc(Re), Je = Vr(m, {
    transform: {
      x: M.x - Bt.x,
      y: M.y - Bt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: V,
    active: k,
    activeNodeRect: j,
    containerNodeRect: Ze,
    draggingNodeRect: We,
    over: fe.current.over,
    overlayNodeRect: we.rect,
    scrollableAncestors: Re,
    scrollableAncestorRects: it,
    windowRect: mt
  }), Ft = tt ? lt(tt, M) : null, Wt = hc(Re), _i = Pn(Wt), Gt = Pn(Wt, [j]), Pe = lt(Je, _i), nt = We ? Ll(We, Je) : null, pt = k && nt ? u({
    active: k,
    collisionRect: nt,
    droppableRects: Z,
    droppableContainers: He,
    pointerCoordinates: Ft
  }) : null, hn = Ar(pt, "id"), [Ge, fn] = F(null), Ds = Ht ? Je : lt(Je, Gt), Rs = zl(Ds, (s = Ge?.rect) != null ? s : null, j), Ei = I(null), mn = q(
    (ie, le) => {
      let {
        sensor: ce,
        options: je
      } = le;
      if (L.current == null)
        return;
      const me = _.get(L.current);
      if (!me)
        return;
      const de = ie.nativeEvent, Ne = new ce({
        active: L.current,
        activeNode: me,
        event: de,
        options: je,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: fe,
        onAbort(te) {
          if (!_.get(te))
            return;
          const {
            onDragAbort: ke
          } = $.current, Le = {
            id: te
          };
          ke?.(Le), N({
            type: "onDragAbort",
            event: Le
          });
        },
        onPending(te, $e, ke, Le) {
          if (!_.get(te))
            return;
          const {
            onDragPending: vt
          } = $.current, Ue = {
            id: te,
            constraint: $e,
            initialCoordinates: ke,
            offset: Le
          };
          vt?.(Ue), N({
            type: "onDragPending",
            event: Ue
          });
        },
        onStart(te) {
          const $e = L.current;
          if ($e == null)
            return;
          const ke = _.get($e);
          if (!ke)
            return;
          const {
            onDragStart: Le
          } = $.current, gt = {
            activatorEvent: de,
            active: {
              id: $e,
              data: ke.data,
              rect: R
            }
          };
          jt(() => {
            Le?.(gt), b(qe.Initializing), S({
              type: J.DragStart,
              initialCoordinates: te,
              active: $e
            }), N({
              type: "onDragStart",
              event: gt
            }), Y(Ei.current), Q(de);
          });
        },
        onMove(te) {
          S({
            type: J.DragMove,
            coordinates: te
          });
        },
        onEnd: rt(J.DragEnd),
        onCancel: rt(J.DragCancel)
      });
      Ei.current = Ne;
      function rt(te) {
        return async function() {
          const {
            active: ke,
            collisions: Le,
            over: gt,
            scrollAdjustedTranslate: vt
          } = fe.current;
          let Ue = null;
          if (ke && vt) {
            const {
              cancelDrop: bt
            } = $.current;
            Ue = {
              activatorEvent: de,
              active: ke,
              collisions: Le,
              delta: vt,
              over: gt
            }, te === J.DragEnd && typeof bt == "function" && await Promise.resolve(bt(Ue)) && (te = J.DragCancel);
          }
          L.current = null, jt(() => {
            S({
              type: te
            }), b(qe.Uninitialized), fn(null), Y(null), Q(null), Ei.current = null;
            const bt = te === J.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ue) {
              const Si = $.current[bt];
              Si?.(Ue), N({
                type: bt,
                event: Ue
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [_]
  ), Ns = q((ie, le) => (ce, je) => {
    const me = ce.nativeEvent, de = _.get(je);
    if (
      // Another sensor is already instantiating
      L.current !== null || // No active draggable
      !de || // Event has already been captured
      me.dndKit || me.defaultPrevented
    )
      return;
    const Ne = {
      active: de
    };
    ie(ce, le.options, Ne) === !0 && (me.dndKit = {
      capturedBy: le.sensor
    }, L.current = je, mn(ce, le));
  }, [_, mn]), pn = sc(c, Ns);
  fc(c), Ee(() => {
    j && D === qe.Initializing && b(qe.Initialized);
  }, [j, D]), B(
    () => {
      const {
        onDragMove: ie
      } = $.current, {
        active: le,
        activatorEvent: ce,
        collisions: je,
        over: me
      } = fe.current;
      if (!le || !ce)
        return;
      const de = {
        active: le,
        activatorEvent: ce,
        collisions: je,
        delta: {
          x: Pe.x,
          y: Pe.y
        },
        over: me
      };
      jt(() => {
        ie?.(de), N({
          type: "onDragMove",
          event: de
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Pe.x, Pe.y]
  ), B(
    () => {
      const {
        active: ie,
        activatorEvent: le,
        collisions: ce,
        droppableContainers: je,
        scrollAdjustedTranslate: me
      } = fe.current;
      if (!ie || L.current == null || !le || !me)
        return;
      const {
        onDragOver: de
      } = $.current, Ne = je.get(hn), rt = Ne && Ne.rect.current ? {
        id: Ne.id,
        rect: Ne.rect.current,
        data: Ne.data,
        disabled: Ne.disabled
      } : null, te = {
        active: ie,
        activatorEvent: le,
        collisions: ce,
        delta: {
          x: me.x,
          y: me.y
        },
        over: rt
      };
      jt(() => {
        fn(rt), de?.(te), N({
          type: "onDragOver",
          event: te
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hn]
  ), Ee(() => {
    fe.current = {
      activatorEvent: V,
      active: k,
      activeNode: oe,
      collisionRect: nt,
      collisions: pt,
      droppableRects: Z,
      draggableNodes: _,
      draggingNode: Fe,
      draggingNodeRect: We,
      droppableContainers: T,
      over: Ge,
      scrollableAncestors: Re,
      scrollAdjustedTranslate: Pe
    }, R.current = {
      initial: We,
      translated: nt
    };
  }, [k, oe, pt, nt, _, Fe, We, Z, T, Ge, Re, Pe]), tc({
    ...xe,
    delta: M,
    draggingRect: nt,
    pointerCoordinates: Ft,
    scrollableAncestors: Re,
    scrollableAncestorRects: it
  });
  const ks = P(() => ({
    active: k,
    activeNode: oe,
    activeNodeRect: j,
    activatorEvent: V,
    collisions: pt,
    containerNodeRect: Ze,
    dragOverlay: we,
    draggableNodes: _,
    droppableContainers: T,
    droppableRects: Z,
    over: Ge,
    measureDroppableContainers: ye,
    scrollableAncestors: Re,
    scrollableAncestorRects: it,
    measuringConfiguration: U,
    measuringScheduled: ze,
    windowRect: mt
  }), [k, oe, j, V, pt, Ze, we, _, T, Z, Ge, ye, Re, it, U, ze, mt]), Ts = P(() => ({
    activatorEvent: V,
    activators: pn,
    active: k,
    activeNodeRect: j,
    ariaDescribedById: {
      draggable: ne
    },
    dispatch: S,
    draggableNodes: _,
    over: Ge,
    measureDroppableContainers: ye
  }), [V, pn, k, j, S, ne, _, Ge, ye]);
  return H.createElement(Tr.Provider, {
    value: C
  }, H.createElement(Lt.Provider, {
    value: Ts
  }, H.createElement(Ur.Provider, {
    value: ks
  }, H.createElement(wi.Provider, {
    value: Rs
  }, d)), H.createElement(Cc, {
    disabled: a?.restoreFocus === !1
  })), H.createElement(Sl, {
    ...a,
    hiddenTextDescribedById: ne
  }));
  function As() {
    const ie = X?.autoScrollEnabled === !1, le = typeof l == "object" ? l.enabled === !1 : l === !1, ce = y && !ie && !le;
    return typeof l == "object" ? {
      ...l,
      enabled: ce
    } : {
      enabled: ce
    };
  }
}), Dc = /* @__PURE__ */ Me(null), In = "button", Rc = "Draggable";
function Nc(i) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: r
  } = i;
  const s = Pt(Rc), {
    activators: o,
    activatorEvent: a,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: f
  } = _e(Lt), {
    role: m = In,
    roleDescription: x = "draggable",
    tabIndex: v = 0
  } = r ?? {}, w = l?.id === e, S = _e(w ? wi : Dc), [N, C] = ii(), [D, b] = ii(), y = mc(o, e), g = Nt(t);
  Ee(
    () => (u.set(e, {
      id: e,
      key: s,
      node: N,
      activatorNode: D,
      data: g
    }), () => {
      const M = u.get(e);
      M && M.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const _ = P(() => ({
    role: m,
    tabIndex: v,
    "aria-disabled": n,
    "aria-pressed": w && m === In ? !0 : void 0,
    "aria-roledescription": x,
    "aria-describedby": c.draggable
  }), [n, m, v, w, x, c.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: d,
    attributes: _,
    isDragging: w,
    listeners: n ? void 0 : y,
    node: N,
    over: f,
    setNodeRef: C,
    setActivatorNodeRef: b,
    transform: S
  };
}
function qr() {
  return _e(Ur);
}
const kc = "Droppable", Tc = {
  timeout: 25
};
function Ac(i) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: r
  } = i;
  const s = Pt(kc), {
    active: o,
    dispatch: a,
    over: l,
    measureDroppableContainers: d
  } = _e(Lt), c = I({
    disabled: t
  }), u = I(!1), f = I(null), m = I(null), {
    disabled: x,
    updateMeasurementsFor: v,
    timeout: w
  } = {
    ...Tc,
    ...r
  }, S = Nt(v ?? n), N = q(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        d(Array.isArray(S.current) ? S.current : [S.current]), m.current = null;
      }, w);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [w]
  ), C = xi({
    callback: N,
    disabled: x || !o
  }), D = q((_, M) => {
    C && (M && (C.unobserve(M), u.current = !1), _ && C.observe(_));
  }, [C]), [b, y] = ii(D), g = Nt(e);
  return B(() => {
    !C || !b.current || (C.disconnect(), u.current = !1, C.observe(b.current));
  }, [b, C]), B(
    () => (a({
      type: J.RegisterDroppable,
      element: {
        id: n,
        key: s,
        disabled: t,
        node: b,
        rect: f,
        data: g
      }
    }), () => a({
      type: J.UnregisterDroppable,
      key: s,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), B(() => {
    t !== c.current.disabled && (a({
      type: J.SetDroppableDisabled,
      id: n,
      key: s,
      disabled: t
    }), c.current.disabled = t);
  }, [n, s, t, a]), {
    active: o,
    rect: f,
    isOver: l?.id === n,
    node: b,
    over: l,
    setNodeRef: y
  };
}
function Oc(i) {
  let {
    animation: e,
    children: t
  } = i;
  const [n, r] = F(null), [s, o] = F(null), a = ni(t);
  return !t && !n && a && r(a), Ee(() => {
    if (!s)
      return;
    const l = n?.key, d = n?.props.id;
    if (l == null || d == null) {
      r(null);
      return;
    }
    Promise.resolve(e(d, s)).then(() => {
      r(null);
    });
  }, [e, n, s]), H.createElement(H.Fragment, null, t, n ? Eo(n, {
    ref: o
  }) : null);
}
const Mc = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function zc(i) {
  let {
    children: e
  } = i;
  return H.createElement(Lt.Provider, {
    value: $r
  }, H.createElement(wi.Provider, {
    value: Mc
  }, e));
}
const Pc = {
  position: "fixed",
  touchAction: "none"
}, Lc = (i) => bi(i) ? "transform 250ms ease" : void 0, Ic = /* @__PURE__ */ ae((i, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: r,
    children: s,
    className: o,
    rect: a,
    style: l,
    transform: d,
    transition: c = Lc
  } = i;
  if (!a)
    return null;
  const u = r ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...Pc,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: Xe.Transform.toString(u),
    transformOrigin: r && n ? Nl(n, a) : void 0,
    transition: typeof c == "function" ? c(n) : c,
    ...l
  };
  return H.createElement(t, {
    className: o,
    style: f,
    ref: e
  }, s);
}), Hc = (i) => (e) => {
  let {
    active: t,
    dragOverlay: n
  } = e;
  const r = {}, {
    styles: s,
    className: o
  } = i;
  if (s != null && s.active)
    for (const [a, l] of Object.entries(s.active))
      l !== void 0 && (r[a] = t.node.style.getPropertyValue(a), t.node.style.setProperty(a, l));
  if (s != null && s.dragOverlay)
    for (const [a, l] of Object.entries(s.dragOverlay))
      l !== void 0 && n.node.style.setProperty(a, l);
  return o != null && o.active && t.node.classList.add(o.active), o != null && o.dragOverlay && n.node.classList.add(o.dragOverlay), function() {
    for (const [l, d] of Object.entries(r))
      t.node.style.setProperty(l, d);
    o != null && o.active && t.node.classList.remove(o.active);
  };
}, Bc = (i) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = i;
  return [{
    transform: Xe.Transform.toString(e)
  }, {
    transform: Xe.Transform.toString(t)
  }];
}, Fc = {
  duration: 250,
  easing: "ease",
  keyframes: Bc,
  sideEffects: /* @__PURE__ */ Hc({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Wc(i) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: r
  } = i;
  return vi((s, o) => {
    if (e === null)
      return;
    const a = t.get(s);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const d = jr(o);
    if (!d)
      return;
    const {
      transform: c
    } = se(o).getComputedStyle(o), u = Mr(c);
    if (!u)
      return;
    const f = typeof e == "function" ? e : Gc(e);
    return Fr(l, r.draggable.measure), f({
      active: {
        id: s,
        data: a.data,
        node: l,
        rect: r.draggable.measure(l)
      },
      draggableNodes: t,
      dragOverlay: {
        node: o,
        rect: r.dragOverlay.measure(d)
      },
      droppableContainers: n,
      measuringConfiguration: r,
      transform: u
    });
  });
}
function Gc(i) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: r
  } = {
    ...Fc,
    ...i
  };
  return (s) => {
    let {
      active: o,
      dragOverlay: a,
      transform: l,
      ...d
    } = s;
    if (!e)
      return;
    const c = {
      x: a.rect.left - o.rect.left,
      y: a.rect.top - o.rect.top
    }, u = {
      scaleX: l.scaleX !== 1 ? o.rect.width * l.scaleX / a.rect.width : 1,
      scaleY: l.scaleY !== 1 ? o.rect.height * l.scaleY / a.rect.height : 1
    }, f = {
      x: l.x - c.x,
      y: l.y - c.y,
      ...u
    }, m = r({
      ...d,
      active: o,
      dragOverlay: a,
      transform: {
        initial: l,
        final: f
      }
    }), [x] = m, v = m[m.length - 1];
    if (JSON.stringify(x) === JSON.stringify(v))
      return;
    const w = n?.({
      active: o,
      dragOverlay: a,
      ...d
    }), S = a.node.animate(m, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((N) => {
      S.onfinish = () => {
        w?.(), N();
      };
    });
  };
}
let Hn = 0;
function jc(i) {
  return P(() => {
    if (i != null)
      return Hn++, Hn;
  }, [i]);
}
const $c = /* @__PURE__ */ H.memo((i) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: n,
    style: r,
    transition: s,
    modifiers: o,
    wrapperElement: a = "div",
    className: l,
    zIndex: d = 999
  } = i;
  const {
    activatorEvent: c,
    active: u,
    activeNodeRect: f,
    containerNodeRect: m,
    draggableNodes: x,
    droppableContainers: v,
    dragOverlay: w,
    over: S,
    measuringConfiguration: N,
    scrollableAncestors: C,
    scrollableAncestorRects: D,
    windowRect: b
  } = qr(), y = _e(wi), g = jc(u?.id), _ = Vr(o, {
    activatorEvent: c,
    active: u,
    activeNodeRect: f,
    containerNodeRect: m,
    draggingNodeRect: w.rect,
    over: S,
    overlayNodeRect: w.rect,
    scrollableAncestors: C,
    scrollableAncestorRects: D,
    transform: y,
    windowRect: b
  }), M = sn(f), T = Wc({
    config: n,
    draggableNodes: x,
    droppableContainers: v,
    measuringConfiguration: N
  }), E = M ? w.setRef : void 0;
  return H.createElement(zc, null, H.createElement(Oc, {
    animation: T
  }, u && g ? H.createElement(Ic, {
    key: g,
    id: u.id,
    ref: E,
    as: a,
    activatorEvent: c,
    adjustScale: e,
    className: l,
    transition: s,
    rect: M,
    style: {
      zIndex: d,
      ...r
    },
    transform: _
  }, t) : null));
});
function on(i, e, t) {
  const n = i.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function Uc(i, e) {
  return i.reduce((t, n, r) => {
    const s = e.get(n);
    return s && (t[r] = s), t;
  }, Array(i.length));
}
function Vt(i) {
  return i !== null && i >= 0;
}
function Vc(i, e) {
  if (i === e)
    return !0;
  if (i.length !== e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] !== e[t])
      return !1;
  return !0;
}
function qc(i) {
  return typeof i == "boolean" ? {
    draggable: i,
    droppable: i
  } : i;
}
const Kr = (i) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: r
  } = i;
  const s = on(e, n, t), o = e[r], a = s[r];
  return !a || !o ? null : {
    x: a.left - o.left,
    y: a.top - o.top,
    scaleX: a.width / o.width,
    scaleY: a.height / o.height
  };
}, Xr = "Sortable", Yr = /* @__PURE__ */ H.createContext({
  activeIndex: -1,
  containerId: Xr,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Kr,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Kc(i) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: r = Kr,
    disabled: s = !1
  } = i;
  const {
    active: o,
    dragOverlay: a,
    droppableRects: l,
    over: d,
    measureDroppableContainers: c
  } = qr(), u = Pt(Xr, t), f = a.rect !== null, m = P(() => n.map((y) => typeof y == "object" && "id" in y ? y.id : y), [n]), x = o != null, v = o ? m.indexOf(o.id) : -1, w = d ? m.indexOf(d.id) : -1, S = I(m), N = !Vc(m, S.current), C = w !== -1 && v === -1 || N, D = qc(s);
  Ee(() => {
    N && x && c(m);
  }, [N, m, x, c]), B(() => {
    S.current = m;
  }, [m]);
  const b = P(
    () => ({
      activeIndex: v,
      containerId: u,
      disabled: D,
      disableTransforms: C,
      items: m,
      overIndex: w,
      useDragOverlay: f,
      sortedRects: Uc(m, l),
      strategy: r
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, u, D.draggable, D.droppable, C, m, w, l, f, r]
  );
  return H.createElement(Yr.Provider, {
    value: b
  }, e);
}
const Xc = (i) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: r
  } = i;
  return on(t, n, r).indexOf(e);
}, Yc = (i) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: n,
    index: r,
    items: s,
    newIndex: o,
    previousItems: a,
    previousContainerId: l,
    transition: d
  } = i;
  return !d || !n || a !== s && r === o ? !1 : t ? !0 : o !== r && e === l;
}, Zc = {
  duration: 200,
  easing: "ease"
}, Zr = "transform", Jc = /* @__PURE__ */ Xe.Transition.toString({
  property: Zr,
  duration: 0,
  easing: "linear"
}), Qc = {
  roleDescription: "sortable"
};
function ed(i) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: r
  } = i;
  const [s, o] = F(null), a = I(t);
  return Ee(() => {
    if (!e && t !== a.current && n.current) {
      const l = r.current;
      if (l) {
        const d = ft(n.current, {
          ignoreTransform: !0
        }), c = {
          x: l.left - d.left,
          y: l.top - d.top,
          scaleX: l.width / d.width,
          scaleY: l.height / d.height
        };
        (c.x || c.y) && o(c);
      }
    }
    t !== a.current && (a.current = t);
  }, [e, t, n, r]), B(() => {
    s && o(null);
  }, [s]), s;
}
function td(i) {
  let {
    animateLayoutChanges: e = Yc,
    attributes: t,
    disabled: n,
    data: r,
    getNewIndex: s = Xc,
    id: o,
    strategy: a,
    resizeObserverConfig: l,
    transition: d = Zc
  } = i;
  const {
    items: c,
    containerId: u,
    activeIndex: f,
    disabled: m,
    disableTransforms: x,
    sortedRects: v,
    overIndex: w,
    useDragOverlay: S,
    strategy: N
  } = _e(Yr), C = id(n, m), D = c.indexOf(o), b = P(() => ({
    sortable: {
      containerId: u,
      index: D,
      items: c
    },
    ...r
  }), [u, r, D, c]), y = P(() => c.slice(c.indexOf(o)), [c, o]), {
    rect: g,
    node: _,
    isOver: M,
    setNodeRef: T
  } = Ac({
    id: o,
    data: b,
    disabled: C.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: y,
      ...l
    }
  }), {
    active: E,
    activatorEvent: R,
    activeNodeRect: k,
    attributes: L,
    setNodeRef: X,
    listeners: Y,
    isDragging: V,
    over: Q,
    setActivatorNodeRef: $,
    transform: ne
  } = Nc({
    id: o,
    data: b,
    attributes: {
      ...Qc,
      ...t
    },
    disabled: C.draggable
  }), He = hl(T, X), U = !!E, Z = U && !x && Vt(f) && Vt(w), ye = !S && V, ze = ye && Z ? ne : null, tt = Z ? ze ?? (a ?? N)({
    rects: v,
    activeNodeRect: k,
    activeIndex: f,
    overIndex: w,
    index: D
  }) : null, xe = Vt(f) && Vt(w) ? s({
    id: o,
    items: c,
    activeIndex: f,
    overIndex: w
  }) : D, he = E?.id, j = I({
    activeId: he,
    items: c,
    newIndex: xe,
    containerId: u
  }), Ze = c !== j.current.items, fe = e({
    active: E,
    containerId: u,
    isDragging: V,
    isSorting: U,
    id: o,
    index: D,
    items: c,
    newIndex: j.current.newIndex,
    previousItems: j.current.items,
    previousContainerId: j.current.containerId,
    transition: d,
    wasDragging: j.current.activeId != null
  }), Be = ed({
    disabled: !fe,
    index: D,
    node: _,
    rect: g
  });
  return B(() => {
    U && j.current.newIndex !== xe && (j.current.newIndex = xe), u !== j.current.containerId && (j.current.containerId = u), c !== j.current.items && (j.current.items = c);
  }, [U, xe, u, c]), B(() => {
    if (he === j.current.activeId)
      return;
    if (he != null && j.current.activeId == null) {
      j.current.activeId = he;
      return;
    }
    const Fe = setTimeout(() => {
      j.current.activeId = he;
    }, 50);
    return () => clearTimeout(Fe);
  }, [he]), {
    active: E,
    activeIndex: f,
    attributes: L,
    data: b,
    rect: g,
    index: D,
    newIndex: xe,
    items: c,
    isOver: M,
    isSorting: U,
    isDragging: V,
    listeners: Y,
    node: _,
    overIndex: w,
    over: Q,
    setNodeRef: He,
    setActivatorNodeRef: $,
    setDroppableNodeRef: T,
    setDraggableNodeRef: X,
    transform: Be ?? tt,
    transition: we()
  };
  function we() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Be || // Or to prevent items jumping to back to their "new" position when items change
      Ze && j.current.newIndex === D
    )
      return Jc;
    if (!(ye && !bi(R) || !d) && (U || fe))
      return Xe.Transition.toString({
        ...d,
        property: Zr
      });
  }
}
function id(i, e) {
  var t, n;
  return typeof i == "boolean" ? {
    draggable: i,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (t = i?.draggable) != null ? t : e.draggable,
    droppable: (n = i?.droppable) != null ? n : e.droppable
  };
}
function ai(i) {
  if (!i)
    return !1;
  const e = i.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const nd = [W.Down, W.Right, W.Up, W.Left], rd = (i, e) => {
  let {
    context: {
      active: t,
      collisionRect: n,
      droppableRects: r,
      droppableContainers: s,
      over: o,
      scrollableAncestors: a
    }
  } = e;
  if (nd.includes(i.code)) {
    if (i.preventDefault(), !t || !n)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const f = r.get(u.id);
      if (f)
        switch (i.code) {
          case W.Down:
            n.top < f.top && l.push(u);
            break;
          case W.Up:
            n.top > f.top && l.push(u);
            break;
          case W.Left:
            n.left > f.left && l.push(u);
            break;
          case W.Right:
            n.left < f.left && l.push(u);
            break;
        }
    });
    const d = Al({
      collisionRect: n,
      droppableRects: r,
      droppableContainers: l
    });
    let c = Ar(d, "id");
    if (c === o?.id && d.length > 1 && (c = d[1].id), c != null) {
      const u = s.get(t.id), f = s.get(c), m = f ? r.get(f.id) : null, x = f?.node.current;
      if (x && m && u && f) {
        const w = yi(x).some((y, g) => a[g] !== y), S = Jr(u, f), N = sd(u, f), C = w || !S ? {
          x: 0,
          y: 0
        } : {
          x: N ? n.width - m.width : 0,
          y: N ? n.height - m.height : 0
        }, D = {
          x: m.left,
          y: m.top
        };
        return C.x && C.y ? D : kt(D, C);
      }
    }
  }
};
function Jr(i, e) {
  return !ai(i) || !ai(e) ? !1 : i.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function sd(i, e) {
  return !ai(i) || !ai(e) || !Jr(i, e) ? !1 : i.data.current.sortable.index < e.data.current.sortable.index;
}
const Bn = ({ id: i, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: r, transform: s, transition: o } = td({
    id: i
  }), a = {
    transform: Xe.Translate.toString(s),
    transition: o,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return h("div", {
    ref: r,
    style: a,
    ...t,
    ...n,
    children: e
  });
}, an = ({ blocks: i, sortable: e = !1, onSort: t = () => {
}, main: n = !1 }) => {
  const [r, s] = F([]);
  qn(() => {
    s(i.map((u, f) => ({
      id: u.id ?? f.toString(),
      render: u.render
    })));
  }, [i]);
  const [o, a] = F(null), l = Dl(Dn(rn), Dn(tn, {
    coordinateGetter: rd
  })), d = (u) => {
    a(u.active.id);
  }, c = (u) => {
    const { active: f, over: m } = u;
    a(null), m && f.id !== m.id && s((x) => {
      const v = x.findIndex((S) => S.id === f.id), w = x.findIndex((S) => S.id === m.id);
      return on(x, v, w);
    });
  };
  return h("div", {
    className: G("flex flex-wrap items-stretch gap-4", n && "flex-1"),
    children: A(Sc, {
      sensors: l,
      onDragStart: d,
      onDragEnd: c,
      children: [h(Kc, {
        items: r,
        children: r.map((u) => h(Bn, {
          id: u.id,
          children: u.render
        }, u.id))
      }), h($c, {
        children: o ? h(Bn, {
          id: o,
          children: r.find((u) => u.id === o)?.render
        }) : null
      })]
    })
  });
};
an.displayName = "GroupMasonry";
an.__isPageLayoutGroup = !0;
const od = ae(function({ children: e, aside: t, header: n, variant: r = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Rr("Page", e, ["block", "group"]), h("div", {
    ref: s,
    className: "h-full",
    children: A("div", {
      className: G("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [A("main", {
        className: G("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", r === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [n && h("header", {
          className: G("sticky top-0 z-30 bg-f1-background"),
          children: n
        }), h("div", {
          className: "flex-1",
          children: e
        })]
      }), t && h("aside", {
        className: G("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", r === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), uh = {
  Page: ve("Page", od),
  Block: ve("Block", pi),
  BlockContent: ve("BlockContent", cl),
  Group: ve("Group", Zi),
  GroupGrid: ve("GroupGrid", mi),
  GroupMasonry: ve("GroupMasonry", an)
}, hh = be({
  name: "StandardLayout",
  type: "layout"
}, vr), fh = be({
  name: "TwoColumnLayout",
  type: "layout"
}, Pa), mh = be({
  name: "HomeLayout",
  type: "layout"
}, Ma);
function ct(i) {
  "@babel/helpers - typeof";
  return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ct(i);
}
function ad(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ld(i, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, ts(n.key), n);
  }
}
function cd(i, e, t) {
  return e && ld(i.prototype, e), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function dd(i, e, t) {
  return e = li(e), ud(i, Qr() ? Reflect.construct(e, t || [], li(i).constructor) : e.apply(i, t));
}
function ud(i, e) {
  if (e && (ct(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hd(i);
}
function hd(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function Qr() {
  try {
    var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Qr = function() {
    return !!i;
  })();
}
function li(i) {
  return li = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, li(i);
}
function fd(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(e && e.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), e && Bi(i, e);
}
function Bi(i, e) {
  return Bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Bi(i, e);
}
function es(i, e, t) {
  return e = ts(e), e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = t, i;
}
function ts(i) {
  var e = md(i, "string");
  return ct(e) == "symbol" ? e : e + "";
}
function md(i, e) {
  if (ct(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(i, e);
    if (ct(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var Ci = /* @__PURE__ */ (function(i) {
  function e() {
    return ad(this, e), dd(this, e, arguments);
  }
  return fd(e, i), cd(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(H.Component);
es(Ci, "displayName", "ZAxis");
es(Ci, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var pd = ["option", "isActive"];
function Et() {
  return Et = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, Et.apply(this, arguments);
}
function gd(i, e) {
  if (i == null) return {};
  var t = vd(i, e), n, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(i);
    for (r = 0; r < s.length; r++)
      n = s[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(i, n) && (t[n] = i[n]);
  }
  return t;
}
function vd(i, e) {
  if (i == null) return {};
  var t = {};
  for (var n in i)
    if (Object.prototype.hasOwnProperty.call(i, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = i[n];
    }
  return t;
}
function bd(i) {
  var e = i.option, t = i.isActive, n = gd(i, pd);
  return typeof e == "string" ? /* @__PURE__ */ H.createElement(bn, Et({
    option: /* @__PURE__ */ H.createElement(No, Et({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ H.createElement(bn, Et({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, n));
}
function dt(i) {
  "@babel/helpers - typeof";
  return dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, dt(i);
}
function St() {
  return St = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, St.apply(this, arguments);
}
function Fn(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    e && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function pe(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fn(Object(t), !0).forEach(function(n) {
      Ke(i, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Fn(Object(t)).forEach(function(n) {
      Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return i;
}
function yd(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Wn(i, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, ns(n.key), n);
  }
}
function xd(i, e, t) {
  return e && Wn(i.prototype, e), t && Wn(i, t), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function wd(i, e, t) {
  return e = ci(e), Cd(i, is() ? Reflect.construct(e, t || [], ci(i).constructor) : e.apply(i, t));
}
function Cd(i, e) {
  if (e && (dt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _d(i);
}
function _d(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function is() {
  try {
    var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (is = function() {
    return !!i;
  })();
}
function ci(i) {
  return ci = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ci(i);
}
function Ed(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(e && e.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), e && Fi(i, e);
}
function Fi(i, e) {
  return Fi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Fi(i, e);
}
function Ke(i, e, t) {
  return e = ns(e), e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = t, i;
}
function ns(i) {
  var e = Sd(i, "string");
  return dt(e) == "symbol" ? e : e + "";
}
function Sd(i, e) {
  if (dt(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(i, e);
    if (dt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var It = /* @__PURE__ */ (function(i) {
  function e() {
    var t;
    yd(this, e);
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t = wd(this, e, [].concat(r)), Ke(t, "state", {
      isAnimationFinished: !1
    }), Ke(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), Ke(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), Ke(t, "id", Po("recharts-scatter-")), t;
  }
  return Ed(e, i), xd(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var r = this, s = this.props, o = s.shape, a = s.activeShape, l = s.activeIndex, d = Di(this.props, !1);
      return n.map(function(c, u) {
        var f = l === u, m = f ? a : o, x = pe(pe({}, d), c);
        return /* @__PURE__ */ H.createElement(yt, St({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c?.cx, "-").concat(c?.cy, "-").concat(c?.size, "-").concat(u)
        }, ko(r.props, c, u), {
          role: "img"
        }), /* @__PURE__ */ H.createElement(bd, St({
          option: m,
          isActive: f,
          key: "symbol-".concat(u)
        }, x)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, r = this.props, s = r.points, o = r.isAnimationActive, a = r.animationBegin, l = r.animationDuration, d = r.animationEasing, c = r.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ H.createElement(To, {
        begin: a,
        duration: l,
        isActive: o,
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
        var m = f.t, x = s.map(function(v, w) {
          var S = u && u[w];
          if (S) {
            var N = $t(S.cx, v.cx), C = $t(S.cy, v.cy), D = $t(S.size, v.size);
            return pe(pe({}, v), {}, {
              cx: N(m),
              cy: C(m),
              size: D(m)
            });
          }
          var b = $t(0, v.size);
          return pe(pe({}, v), {}, {
            size: b(m)
          });
        });
        return /* @__PURE__ */ H.createElement(yt, null, n.renderSymbolsStatically(x));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, r = n.points, s = n.isAnimationActive, o = this.state.prevPoints;
      return s && r && r.length && (!o || !ar(o, r)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(r);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var r = this.props, s = r.points, o = r.xAxis, a = r.yAxis, l = r.children, d = lr(l, Ao);
      return d ? d.map(function(c, u) {
        var f = c.props, m = f.direction, x = f.dataKey;
        return /* @__PURE__ */ H.cloneElement(c, {
          key: "".concat(m, "-").concat(x, "-").concat(s[u]),
          data: s,
          xAxis: o,
          yAxis: a,
          layout: m === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(w, S) {
            return {
              x: w.cx,
              y: w.cy,
              value: m === "x" ? +w.node.x : +w.node.y,
              errorVal: qt(w, S)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, r = n.points, s = n.line, o = n.lineType, a = n.lineJointType, l = Di(this.props, !1), d = Di(s, !1), c, u;
      if (o === "joint")
        c = r.map(function(C) {
          return {
            x: C.cx,
            y: C.cy
          };
        });
      else if (o === "fitting") {
        var f = Oo(r), m = f.xmin, x = f.xmax, v = f.a, w = f.b, S = function(D) {
          return v * D + w;
        };
        c = [{
          x: m,
          y: S(m)
        }, {
          x,
          y: S(x)
        }];
      }
      var N = pe(pe(pe({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, d), {}, {
        points: c
      });
      return /* @__PURE__ */ H.isValidElement(s) ? u = /* @__PURE__ */ H.cloneElement(s, N) : Mo(s) ? u = s(N) : u = /* @__PURE__ */ H.createElement(zo, St({}, N, {
        type: a
      })), /* @__PURE__ */ H.createElement(yt, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, r = n.hide, s = n.points, o = n.line, a = n.className, l = n.xAxis, d = n.yAxis, c = n.left, u = n.top, f = n.width, m = n.height, x = n.id, v = n.isAnimationActive;
      if (r || !s || !s.length)
        return null;
      var w = this.state.isAnimationFinished, S = Hs("recharts-scatter", a), N = l && l.allowDataOverflow, C = d && d.allowDataOverflow, D = N || C, b = st(x) ? this.id : x;
      return /* @__PURE__ */ H.createElement(yt, {
        className: S,
        clipPath: D ? "url(#clipPath-".concat(b, ")") : null
      }, N || C ? /* @__PURE__ */ H.createElement("defs", null, /* @__PURE__ */ H.createElement("clipPath", {
        id: "clipPath-".concat(b)
      }, /* @__PURE__ */ H.createElement("rect", {
        x: N ? c : c - f / 2,
        y: C ? u : u - m / 2,
        width: N ? f : f * 2,
        height: C ? m : m * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ H.createElement(yt, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || w) && cr.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, r) {
      return n.animationId !== r.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: r.curPoints
      } : n.points !== r.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }]);
})(So);
Ke(It, "displayName", "Scatter");
Ke(It, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Lo.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Ke(It, "getComposedData", function(i) {
  var e = i.xAxis, t = i.yAxis, n = i.zAxis, r = i.item, s = i.displayedData, o = i.xAxisTicks, a = i.yAxisTicks, l = i.offset, d = r.props.tooltipType, c = lr(r.props.children, Io), u = st(e.dataKey) ? r.props.dataKey : e.dataKey, f = st(t.dataKey) ? r.props.dataKey : t.dataKey, m = n && n.dataKey, x = n ? n.range : Ci.defaultProps.range, v = x && x[0], w = e.scale.bandwidth ? e.scale.bandwidth() : 0, S = t.scale.bandwidth ? t.scale.bandwidth() : 0, N = s.map(function(C, D) {
    var b = qt(C, u), y = qt(C, f), g = !st(m) && qt(C, m) || "-", _ = [{
      name: st(e.dataKey) ? r.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: b,
      payload: C,
      dataKey: u,
      type: d
    }, {
      name: st(t.dataKey) ? r.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: y,
      payload: C,
      dataKey: f,
      type: d
    }];
    g !== "-" && _.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: g,
      payload: C,
      dataKey: m,
      type: d
    });
    var M = yn({
      axis: e,
      ticks: o,
      bandSize: w,
      entry: C,
      index: D,
      dataKey: u
    }), T = yn({
      axis: t,
      ticks: a,
      bandSize: S,
      entry: C,
      index: D,
      dataKey: f
    }), E = g !== "-" ? n.scale(g) : v, R = Math.sqrt(Math.max(E, 0) / Math.PI);
    return pe(pe({}, C), {}, {
      cx: M,
      cy: T,
      x: M - R,
      y: T - R,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * R,
      height: 2 * R,
      size: E,
      node: {
        x: b,
        y,
        z: g
      },
      tooltipPayload: _,
      tooltipPosition: {
        x: M,
        y: T
      },
      payload: C
    }, c && c[D] && c[D].props);
  });
  return pe({
    points: N
  }, l);
});
var Dd = Ho({
  chartName: "ComposedChart",
  GraphicalChild: [dr, Bo, ur, It],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: hr
  }, {
    axisType: "yAxis",
    AxisComp: Pi
  }, {
    axisType: "zAxis",
    AxisComp: Ci
  }],
  formatAxisMap: Fo
});
const Rd = (i) => {
  const e = (t) => {
    const { cx: n, cy: r, fill: s, payload: o } = t, a = () => {
      if (!o) return "-";
      if (o[i] !== void 0)
        return o[i];
      for (const [l, d] of Object.entries(o))
        if (typeof d == "number" && l !== "x")
          return d;
      return "-";
    };
    return h("circle", {
      cx: n,
      cy: r,
      r: 4,
      fill: s,
      stroke: "white",
      strokeWidth: 2,
      ref: (l) => {
        l?.parentElement && l.parentElement.setAttribute("aria-label", `Data point: ${a()}`);
      }
    });
  };
  return e.displayName = `Scatter-${i}`, e;
}, Nd = ({ dataConfig: i, data: e, xAxis: t, yAxis: n = {
  hide: !0
}, label: r = !1, hideTooltip: s = !1, hideGrid: o = !1, aspect: a, legend: l, showValueUnderLabel: d = !1, bar: c, line: u, scatter: f, onClick: m }, x) => {
  const v = Wo(e), w = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], S = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], N = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], C = [...w, ...S, ...N], D = Math.max(...v.flatMap((g) => C.map((_) => Go(n?.tickFormatter ? n.tickFormatter(`${g[_]}`) : `${g[_]}`)))), b = [c, u, f].filter((g) => g?.axisPosition === "left"), y = [c, u, f].filter((g) => g?.axisPosition === "right");
  return h(jo, {
    config: i,
    ref: x,
    aspect: a,
    children: A(Dd, {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: r ? 24 : 0,
        bottom: d ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (g) => {
        if (!m || !g.activeLabel || !g.activePayload)
          return;
        const _ = {
          label: g.activeLabel,
          values: {}
        };
        for (const M of g.activePayload)
          _.values[M.name] = M.value;
        m(_);
      },
      children: [!s && h($o, {
        ...Uo(),
        content: h(Vo, {
          yAxisFormatter: n.tickFormatter
        })
      }), !o && h(qo, {
        ...Ko()
      }), b.length > 0 && h(Pi, {
        ...xn(n),
        tick: !0,
        width: n.width ?? D + 20 + (y.length > 0 && b[0]?.axisLabel ? 20 : 0),
        hide: n.hide || b.some((g) => g?.hideAxis),
        label: b[0]?.axisLabel ? {
          value: b[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), y.length > 0 && h(Pi, {
        ...xn(n),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: n.width ?? D + 20 + (b.length > 0 && y[0]?.axisLabel ? 20 : 0),
        hide: n.hide || y.some((g) => g?.hideAxis),
        label: y[0]?.axisLabel ? {
          value: y[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), h(hr, {
        ...Xo(t),
        hide: t?.hide,
        tick: d ? (g) => {
          const { x: _, y: M, payload: T } = g, E = e.find((L) => L.label === T.value)?.values || "", R = Object.keys(E).length === 1 ? Object.values(E)?.[0] : void 0, k = R !== void 0 && n.tickFormatter ? n.tickFormatter(`${R}`) : R.toLocaleString();
          return A("g", {
            transform: `translate(${_},${M})`,
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
              children: k
            })]
          });
        } : void 0
      }), w.map((g, _) => h(ur, {
        isAnimationActive: !1,
        dataKey: String(g),
        fill: i[g].color ? xt(i[g].color) : Ri(_),
        radius: 4,
        maxBarSize: 32,
        children: r && h(cr, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(g)}`)
      }, `bar-${String(g)}`)), S.map((g, _) => h(dr, {
        type: u?.lineType ?? "natural",
        dataKey: String(g),
        stroke: i[g].color ? xt(i[g].color) : Ri(w.length + _),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(g)}`)), N.map((g, _) => h(It, {
        dataKey: String(g),
        fill: i[g].color ? xt(i[g].color) : Ri(w.length + S.length + _),
        r: 4,
        isAnimationActive: !1,
        yAxisId: f?.axisPosition === "right" ? "right" : void 0,
        shape: Rd(String(g))
      }, `scatter-${String(g)}`)), l && h(Yo, {
        content: h(Zo, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, kd = fr(Nd), Td = ({ value: i, max: e = 100, label: t, color: n }, r) => {
  const s = n ? xt(n) : xt("categorical-1"), o = i / e * 100;
  return A("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [h("div", {
      className: "flex-grow",
      children: h(Jo, {
        color: s,
        value: o,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": i,
        "aria-label": `${o.toFixed(1)}%`
      })
    }), t && h("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, Ad = fr(Td), ph = be(
  {
    name: "AreaChart",
    type: "info"
  },
  Qo
), gh = be(
  {
    name: "BarChart",
    type: "info"
  },
  ea
), vh = be(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  ta
), bh = be(
  {
    name: "LineChart",
    type: "info"
  },
  ia
), yh = be(
  {
    name: "PieChart",
    type: "info"
  },
  na
), xh = be(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ra
), wh = be(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Ad
), Ch = be(
  {
    name: "ComboChart",
    type: "info"
  },
  kd
), Od = (i) => typeof i == "boolean" || !i ? {
  show: !!i,
  invertStatus: !1
} : {
  show: i.show ?? !0,
  invertStatus: i.invertStatus ?? !1
}, rs = ({ label: i, ...e }) => {
  const t = sa(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), r = Od(e.trend), s = t(e.comparison), o = oa(n.numericValue, n.formatterOptions), a = wn(s.numericValue), l = wn(n.numericValue), d = P(() => {
    if (!(!a || !r.show) && !(!a || !l))
      return (l - a) / a * 100;
  }, [l, a, r.show]);
  return A("div", {
    className: "flex flex-col gap-2",
    children: [i && h("div", {
      children: i
    }), A("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [h("span", {
        className: "font-bold text-2xl",
        children: o
      }), a !== void 0 && h(aa, {
        percentage: d,
        amount: s,
        invertStatus: r.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, Md = () => A("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [h(Te, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), A("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [h(Te, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), h(Te, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
rs.displayName = "F0BigNumber";
const zd = Kn(rs, Md), _h = ve("F0BigNumber", zd), ss = {
  background: {
    transparent: "bg-transparent",
    primary: "bg-f1-background",
    secondary: "bg-f1-background-secondary",
    tertiary: "bg-f1-background-tertiary",
    inverse: "bg-f1-background-inverse",
    "inverse-secondary": "bg-f1-background-inverse-secondary",
    bold: "bg-f1-background-bold",
    accent: "bg-f1-background-accent",
    "accent-bold": "bg-f1-background-accent-bold",
    promote: "bg-f1-background-promote",
    critical: "bg-f1-background-critical",
    "critical-bold": "bg-f1-background-critical-bold",
    info: "bg-f1-background-info",
    "info-bold": "bg-f1-background-info-bold",
    warning: "bg-f1-background-warning",
    "warning-bold": "bg-f1-background-warning-bold",
    positive: "bg-f1-background-positive",
    "positive-bold": "bg-f1-background-positive-bold",
    selected: "bg-f1-background-selected",
    "selected-secondary": "bg-f1-background-selected-secondary",
    "selected-bold": "bg-f1-background-selected-bold",
    overlay: "bg-f1-background-overlay"
  }
}, os = {
  // -- Color --
  borderColor: {
    default: "border-f1-border",
    secondary: "border-f1-border-secondary",
    bold: "border-f1-border-bold",
    selected: "border-f1-border-selected",
    "selected-bold": "border-f1-border-selected-bold",
    critical: "border-f1-border-critical",
    "critical-bold": "border-f1-border-critical-bold",
    warning: "border-f1-border-warning",
    "warning-bold": "border-f1-border-warning-bold",
    info: "border-f1-border-info",
    "info-bold": "border-f1-border-info-bold",
    positive: "border-f1-border-positive",
    "positive-bold": "border-f1-border-positive-bold",
    promote: "border-f1-border-promote"
  },
  // -- Width (all sides) --
  border: {
    none: "border-0",
    default: "border border-solid",
    thick: "border-2 border-solid"
  },
  // -- Width per side (includes reset so only the specified side shows) --
  borderTop: {
    none: "border-t-0",
    default: "border-t border-solid",
    thick: "border-t-2 border-solid"
  },
  borderBottom: {
    none: "border-b-0",
    default: "border-b border-solid",
    thick: "border-b-2 border-solid"
  },
  borderLeft: {
    none: "border-l-0",
    default: "border-l border-solid",
    thick: "border-l-2 border-solid"
  },
  borderRight: {
    none: "border-r-0",
    default: "border-r border-solid",
    thick: "border-r-2 border-solid"
  },
  // -- Radius (all corners) --
  borderRadius: {
    none: "rounded-none",
    "2xs": "rounded-2xs",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full"
  },
  // -- Radius per corner --
  borderRadiusTopLeft: {
    none: "rounded-tl-none",
    "2xs": "rounded-tl-2xs",
    xs: "rounded-tl-xs",
    sm: "rounded-tl-sm",
    md: "rounded-tl-md",
    lg: "rounded-tl-lg",
    xl: "rounded-tl-xl",
    "2xl": "rounded-tl-2xl",
    full: "rounded-tl-full"
  },
  borderRadiusTopRight: {
    none: "rounded-tr-none",
    "2xs": "rounded-tr-2xs",
    xs: "rounded-tr-xs",
    sm: "rounded-tr-sm",
    md: "rounded-tr-md",
    lg: "rounded-tr-lg",
    xl: "rounded-tr-xl",
    "2xl": "rounded-tr-2xl",
    full: "rounded-tr-full"
  },
  borderRadiusBottomLeft: {
    none: "rounded-bl-none",
    "2xs": "rounded-bl-2xs",
    xs: "rounded-bl-xs",
    sm: "rounded-bl-sm",
    md: "rounded-bl-md",
    lg: "rounded-bl-lg",
    xl: "rounded-bl-xl",
    "2xl": "rounded-bl-2xl",
    full: "rounded-bl-full"
  },
  borderRadiusBottomRight: {
    none: "rounded-br-none",
    "2xs": "rounded-br-2xs",
    xs: "rounded-br-xs",
    sm: "rounded-br-sm",
    md: "rounded-br-md",
    lg: "rounded-br-lg",
    xl: "rounded-br-xl",
    "2xl": "rounded-br-2xl",
    full: "rounded-br-full"
  },
  // -- Style --
  borderStyle: {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
    double: "border-double",
    none: "border-none"
  }
}, Pd = {}, Ld = {
  // Special
  auto: "w-auto",
  full: "w-full",
  screen: "w-screen",
  min: "w-min",
  max: "w-max",
  fit: "w-fit",
  // Numeric scale
  0: "w-0",
  "0.5": "w-0.5",
  1: "w-1",
  "1.5": "w-1.5",
  2: "w-2",
  "2.5": "w-2.5",
  3: "w-3",
  "3.5": "w-3.5",
  4: "w-4",
  5: "w-5",
  6: "w-6",
  7: "w-7",
  8: "w-8",
  9: "w-9",
  10: "w-10",
  11: "w-11",
  12: "w-12",
  14: "w-14",
  16: "w-16",
  18: "w-18",
  20: "w-20",
  24: "w-24",
  28: "w-28",
  32: "w-32",
  36: "w-36",
  40: "w-40",
  44: "w-44",
  48: "w-48",
  52: "w-52",
  56: "w-56",
  60: "w-60",
  64: "w-64",
  72: "w-72",
  80: "w-80",
  96: "w-96",
  // Fractions
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "2/4": "w-2/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "4/5": "w-4/5",
  "1/6": "w-1/6",
  "5/6": "w-5/6"
}, Id = {
  auto: "h-auto",
  full: "h-full",
  screen: "h-screen",
  min: "h-min",
  max: "h-max",
  fit: "h-fit",
  0: "h-0",
  "0.5": "h-0.5",
  1: "h-1",
  "1.5": "h-1.5",
  2: "h-2",
  "2.5": "h-2.5",
  3: "h-3",
  "3.5": "h-3.5",
  4: "h-4",
  5: "h-5",
  6: "h-6",
  7: "h-7",
  8: "h-8",
  9: "h-9",
  10: "h-10",
  11: "h-11",
  12: "h-12",
  14: "h-14",
  16: "h-16",
  18: "h-18",
  20: "h-20",
  24: "h-24",
  28: "h-28",
  32: "h-32",
  36: "h-36",
  40: "h-40",
  44: "h-44",
  48: "h-48",
  52: "h-52",
  56: "h-56",
  60: "h-60",
  64: "h-64",
  72: "h-72",
  80: "h-80",
  96: "h-96",
  "1/2": "h-1/2",
  "1/3": "h-1/3",
  "2/3": "h-2/3",
  "1/4": "h-1/4",
  "2/4": "h-2/4",
  "3/4": "h-3/4",
  "1/5": "h-1/5",
  "2/5": "h-2/5",
  "3/5": "h-3/5",
  "4/5": "h-4/5",
  "1/6": "h-1/6",
  "5/6": "h-5/6"
}, Hd = {
  auto: "min-w-0",
  full: "min-w-full",
  screen: "min-w-screen",
  min: "min-w-min",
  max: "min-w-max",
  fit: "min-w-fit",
  0: "min-w-0",
  "0.5": "min-w-0.5",
  1: "min-w-1",
  "1.5": "min-w-1.5",
  2: "min-w-2",
  "2.5": "min-w-2.5",
  3: "min-w-3",
  "3.5": "min-w-3.5",
  4: "min-w-4",
  5: "min-w-5",
  6: "min-w-6",
  7: "min-w-7",
  8: "min-w-8",
  9: "min-w-9",
  10: "min-w-10",
  11: "min-w-11",
  12: "min-w-12",
  14: "min-w-14",
  16: "min-w-16",
  18: "min-w-18",
  20: "min-w-20",
  24: "min-w-24",
  28: "min-w-28",
  32: "min-w-32",
  36: "min-w-36",
  40: "min-w-40",
  44: "min-w-44",
  48: "min-w-48",
  52: "min-w-52",
  56: "min-w-56",
  60: "min-w-60",
  64: "min-w-64",
  72: "min-w-72",
  80: "min-w-80",
  96: "min-w-96",
  "1/2": "min-w-1/2",
  "1/3": "min-w-1/3",
  "2/3": "min-w-2/3",
  "1/4": "min-w-1/4",
  "2/4": "min-w-2/4",
  "3/4": "min-w-3/4",
  "1/5": "min-w-1/5",
  "2/5": "min-w-2/5",
  "3/5": "min-w-3/5",
  "4/5": "min-w-4/5",
  "1/6": "min-w-1/6",
  "5/6": "min-w-5/6"
}, Bd = {
  auto: "min-h-0",
  full: "min-h-full",
  screen: "min-h-screen",
  min: "min-h-min",
  max: "min-h-max",
  fit: "min-h-fit",
  0: "min-h-0",
  "0.5": "min-h-0.5",
  1: "min-h-1",
  "1.5": "min-h-1.5",
  2: "min-h-2",
  "2.5": "min-h-2.5",
  3: "min-h-3",
  "3.5": "min-h-3.5",
  4: "min-h-4",
  5: "min-h-5",
  6: "min-h-6",
  7: "min-h-7",
  8: "min-h-8",
  9: "min-h-9",
  10: "min-h-10",
  11: "min-h-11",
  12: "min-h-12",
  14: "min-h-14",
  16: "min-h-16",
  18: "min-h-18",
  20: "min-h-20",
  24: "min-h-24",
  28: "min-h-28",
  32: "min-h-32",
  36: "min-h-36",
  40: "min-h-40",
  44: "min-h-44",
  48: "min-h-48",
  52: "min-h-52",
  56: "min-h-56",
  60: "min-h-60",
  64: "min-h-64",
  72: "min-h-72",
  80: "min-h-80",
  96: "min-h-96",
  "1/2": "min-h-1/2",
  "1/3": "min-h-1/3",
  "2/3": "min-h-2/3",
  "1/4": "min-h-1/4",
  "2/4": "min-h-2/4",
  "3/4": "min-h-3/4",
  "1/5": "min-h-1/5",
  "2/5": "min-h-2/5",
  "3/5": "min-h-3/5",
  "4/5": "min-h-4/5",
  "1/6": "min-h-1/6",
  "5/6": "min-h-5/6"
}, Fd = {
  auto: "max-w-none",
  full: "max-w-full",
  screen: "max-w-screen",
  min: "max-w-min",
  max: "max-w-max",
  fit: "max-w-fit",
  0: "max-w-0",
  "0.5": "max-w-0.5",
  1: "max-w-1",
  "1.5": "max-w-1.5",
  2: "max-w-2",
  "2.5": "max-w-2.5",
  3: "max-w-3",
  "3.5": "max-w-3.5",
  4: "max-w-4",
  5: "max-w-5",
  6: "max-w-6",
  7: "max-w-7",
  8: "max-w-8",
  9: "max-w-9",
  10: "max-w-10",
  11: "max-w-11",
  12: "max-w-12",
  14: "max-w-14",
  16: "max-w-16",
  18: "max-w-18",
  20: "max-w-20",
  24: "max-w-24",
  28: "max-w-28",
  32: "max-w-32",
  36: "max-w-36",
  40: "max-w-40",
  44: "max-w-44",
  48: "max-w-48",
  52: "max-w-52",
  56: "max-w-56",
  60: "max-w-60",
  64: "max-w-64",
  72: "max-w-72",
  80: "max-w-80",
  96: "max-w-96",
  "1/2": "max-w-1/2",
  "1/3": "max-w-1/3",
  "2/3": "max-w-2/3",
  "1/4": "max-w-1/4",
  "2/4": "max-w-2/4",
  "3/4": "max-w-3/4",
  "1/5": "max-w-1/5",
  "2/5": "max-w-2/5",
  "3/5": "max-w-3/5",
  "4/5": "max-w-4/5",
  "1/6": "max-w-1/6",
  "5/6": "max-w-5/6"
}, Wd = {
  auto: "max-h-none",
  full: "max-h-full",
  screen: "max-h-screen",
  min: "max-h-min",
  max: "max-h-max",
  fit: "max-h-fit",
  0: "max-h-0",
  "0.5": "max-h-0.5",
  1: "max-h-1",
  "1.5": "max-h-1.5",
  2: "max-h-2",
  "2.5": "max-h-2.5",
  3: "max-h-3",
  "3.5": "max-h-3.5",
  4: "max-h-4",
  5: "max-h-5",
  6: "max-h-6",
  7: "max-h-7",
  8: "max-h-8",
  9: "max-h-9",
  10: "max-h-10",
  11: "max-h-11",
  12: "max-h-12",
  14: "max-h-14",
  16: "max-h-16",
  18: "max-h-18",
  20: "max-h-20",
  24: "max-h-24",
  28: "max-h-28",
  32: "max-h-32",
  36: "max-h-36",
  40: "max-h-40",
  44: "max-h-44",
  48: "max-h-48",
  52: "max-h-52",
  56: "max-h-56",
  60: "max-h-60",
  64: "max-h-64",
  72: "max-h-72",
  80: "max-h-80",
  96: "max-h-96",
  "1/2": "max-h-1/2",
  "1/3": "max-h-1/3",
  "2/3": "max-h-2/3",
  "1/4": "max-h-1/4",
  "2/4": "max-h-2/4",
  "3/4": "max-h-3/4",
  "1/5": "max-h-1/5",
  "2/5": "max-h-2/5",
  "3/5": "max-h-3/5",
  "4/5": "max-h-4/5",
  "1/6": "max-h-1/6",
  "5/6": "max-h-5/6"
}, as = {
  width: Ld,
  height: Id,
  minWidth: Hd,
  minHeight: Bd,
  maxWidth: Fd,
  maxHeight: Wd
}, ls = {
  display: {
    block: "block",
    flex: "flex",
    inline: "inline",
    "inline-flex": "inline-flex",
    grid: "grid",
    none: "hidden"
  },
  position: {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky"
  }
}, cs = {
  divider: {
    x: "divide-x divide-y-0 divide-solid",
    y: "divide-y divide-x-0 divide-solid"
  },
  dividerColor: {
    default: "divide-f1-border",
    secondary: "divide-f1-border-secondary",
    bold: "divide-f1-border-bold",
    selected: "divide-f1-border-selected",
    "selected-bold": "divide-f1-border-selected-bold",
    critical: "divide-f1-border-critical",
    "critical-bold": "divide-f1-border-critical-bold",
    warning: "divide-f1-border-warning",
    "warning-bold": "divide-f1-border-warning-bold",
    info: "divide-f1-border-info",
    "info-bold": "divide-f1-border-info-bold",
    positive: "divide-f1-border-positive",
    "positive-bold": "divide-f1-border-positive-bold",
    promote: "divide-f1-border-promote"
  }
}, ds = {
  gap: {
    none: "gap-0",
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
    xl: "gap-4",
    "2xl": "gap-6",
    "3xl": "gap-8",
    "4xl": "gap-10",
    "5xl": "gap-12"
  },
  alignItems: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline"
  },
  justifyContent: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
    stretch: "justify-stretch"
  },
  flexDirection: {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse"
  },
  flexWrap: {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse"
  },
  grow: {
    true: "grow",
    false: "grow-0"
  },
  shrink: {
    true: "shrink",
    false: "shrink-0"
  }
}, Gd = {}, us = {
  columns: {
    none: "grid-cols-none",
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12"
  },
  rows: {
    none: "grid-rows-none",
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
    4: "grid-rows-4",
    5: "grid-rows-5",
    6: "grid-rows-6"
  },
  colSpan: {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
    full: "col-span-full"
  },
  colStart: {
    auto: "col-start-auto",
    1: "col-start-1",
    2: "col-start-2",
    3: "col-start-3",
    4: "col-start-4",
    5: "col-start-5",
    6: "col-start-6",
    7: "col-start-7",
    8: "col-start-8",
    9: "col-start-9",
    10: "col-start-10",
    11: "col-start-11",
    12: "col-start-12",
    13: "col-start-13"
  },
  rowSpan: {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
    6: "row-span-6",
    full: "row-span-full"
  }
}, hs = {
  margin: {
    none: "m-0",
    xs: "m-1",
    sm: "m-2",
    md: "m-3",
    lg: "m-4",
    xl: "m-6",
    "2xl": "m-8",
    "3xl": "m-10",
    "4xl": "m-12",
    "5xl": "m-16",
    auto: "m-auto"
  },
  marginX: {
    none: "mx-0",
    xs: "mx-1",
    sm: "mx-2",
    md: "mx-3",
    lg: "mx-4",
    xl: "mx-6",
    "2xl": "mx-8",
    "3xl": "mx-10",
    "4xl": "mx-12",
    "5xl": "mx-16",
    auto: "mx-auto"
  },
  marginY: {
    none: "my-0",
    xs: "my-1",
    sm: "my-2",
    md: "my-3",
    lg: "my-4",
    xl: "my-6",
    "2xl": "my-8",
    "3xl": "my-10",
    "4xl": "my-12",
    "5xl": "my-16",
    auto: "my-auto"
  },
  marginTop: {
    none: "mt-0",
    xs: "mt-1",
    sm: "mt-2",
    md: "mt-3",
    lg: "mt-4",
    xl: "mt-6",
    "2xl": "mt-8",
    "3xl": "mt-10",
    "4xl": "mt-12",
    "5xl": "mt-16",
    auto: "mt-auto"
  },
  marginBottom: {
    none: "mb-0",
    xs: "mb-1",
    sm: "mb-2",
    md: "mb-3",
    lg: "mb-4",
    xl: "mb-6",
    "2xl": "mb-8",
    "3xl": "mb-10",
    "4xl": "mb-12",
    "5xl": "mb-16",
    auto: "mb-auto"
  },
  marginLeft: {
    none: "ml-0",
    xs: "ml-1",
    sm: "ml-2",
    md: "ml-3",
    lg: "ml-4",
    xl: "ml-6",
    "2xl": "ml-8",
    "3xl": "ml-10",
    "4xl": "ml-12",
    "5xl": "ml-16",
    auto: "ml-auto"
  },
  marginRight: {
    none: "mr-0",
    xs: "mr-1",
    sm: "mr-2",
    md: "mr-3",
    lg: "mr-4",
    xl: "mr-6",
    "2xl": "mr-8",
    "3xl": "mr-10",
    "4xl": "mr-12",
    "5xl": "mr-16",
    auto: "mr-auto"
  }
}, jd = {}, $d = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, fs = {
  overflow: $d,
  overflowX: {
    visible: "overflow-x-visible",
    hidden: "overflow-x-hidden",
    auto: "overflow-x-auto",
    scroll: "overflow-x-scroll"
  },
  overflowY: {
    visible: "overflow-y-visible",
    hidden: "overflow-y-hidden",
    auto: "overflow-y-auto",
    scroll: "overflow-y-scroll"
  }
}, Ud = {}, ms = {
  padding: {
    none: "p-0",
    xs: "p-1",
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
    xl: "p-6",
    "2xl": "p-8",
    "3xl": "p-10",
    "4xl": "p-12",
    "5xl": "p-16"
  },
  paddingX: {
    none: "px-0",
    xs: "px-1",
    sm: "px-2",
    md: "px-3",
    lg: "px-4",
    xl: "px-6",
    "2xl": "px-8",
    "3xl": "px-10",
    "4xl": "px-12",
    "5xl": "px-16"
  },
  paddingY: {
    none: "py-0",
    xs: "py-1",
    sm: "py-2",
    md: "py-3",
    lg: "py-4",
    xl: "py-6",
    "2xl": "py-8",
    "3xl": "py-10",
    "4xl": "py-12",
    "5xl": "py-16"
  },
  paddingTop: {
    none: "pt-0",
    xs: "pt-1",
    sm: "pt-2",
    md: "pt-3",
    lg: "pt-4",
    xl: "pt-6",
    "2xl": "pt-8",
    "3xl": "pt-10",
    "4xl": "pt-12",
    "5xl": "pt-16"
  },
  paddingBottom: {
    none: "pb-0",
    xs: "pb-1",
    sm: "pb-2",
    md: "pb-3",
    lg: "pb-4",
    xl: "pb-6",
    "2xl": "pb-8",
    "3xl": "pb-10",
    "4xl": "pb-12",
    "5xl": "pb-16"
  },
  paddingLeft: {
    none: "pl-0",
    xs: "pl-1",
    sm: "pl-2",
    md: "pl-3",
    lg: "pl-4",
    xl: "pl-6",
    "2xl": "pl-8",
    "3xl": "pl-10",
    "4xl": "pl-12",
    "5xl": "pl-16"
  },
  paddingRight: {
    none: "pr-0",
    xs: "pr-1",
    sm: "pr-2",
    md: "pr-3",
    lg: "pr-4",
    xl: "pr-6",
    "2xl": "pr-8",
    "3xl": "pr-10",
    "4xl": "pr-12",
    "5xl": "pr-16"
  }
}, Vd = {}, qd = {
  ...ls,
  ...ms,
  ...hs,
  ...ds,
  ...us,
  ...as,
  ...ss,
  ...os,
  ...fs,
  ...cs
};
function Kd(i, e) {
  return e.split(" ").map((t) => `${i}:${t}`).join(" ");
}
function Xd(i, e) {
  const t = [];
  for (const [n, r] of Object.entries(e)) {
    if (r == null) continue;
    const s = qd[n];
    if (!s) continue;
    const o = s[String(r)];
    o && t.push(Kd(i, o));
  }
  return t.join(" ");
}
const Yd = Ye({
  base: "",
  variants: {
    ...ls,
    ...ms,
    ...hs,
    ...ds,
    ...us,
    ...as,
    ...ss,
    ...os,
    ...fs,
    ...cs
  },
  defaultVariants: {
    ...Vd,
    ...jd,
    ...Gd,
    ...Pd,
    ...Ud
  }
}), Zd = ["sm", "md", "lg", "xl"], ps = ae(({ display: i, position: e, padding: t, paddingX: n, paddingY: r, paddingTop: s, paddingBottom: o, paddingLeft: a, paddingRight: l, margin: d, marginX: c, marginY: u, marginTop: f, marginBottom: m, marginLeft: x, marginRight: v, gap: w, columns: S, rows: N, colSpan: C, colStart: D, rowSpan: b, width: y, height: g, minWidth: _, minHeight: M, maxWidth: T, maxHeight: E, background: R, borderColor: k, border: L, borderTop: X, borderBottom: Y, borderLeft: V, borderRight: Q, borderRadius: $, borderRadiusTopLeft: ne, borderRadiusTopRight: He, borderRadiusBottomLeft: U, borderRadiusBottomRight: Z, borderStyle: ye, overflow: ze, overflowX: oe, overflowY: tt, divider: xe, dividerColor: he, alignItems: j, justifyContent: Ze, flexDirection: fe, flexWrap: Be, grow: we, shrink: Fe, sm: We, md: Ht, lg: Bt, xl: mt, ...Re }, it) => {
  const Je = X && X !== "none" || Y && Y !== "none" || V && V !== "none" || Q && Q !== "none", Ft = L && L !== "none" || Je, Wt = {
    sm: We,
    md: Ht,
    lg: Bt,
    xl: mt
  }, _i = Zd.map((Gt) => {
    const Pe = Wt[Gt];
    return Pe ? Xd(Gt, Pe) : "";
  }).filter(Boolean).join(" ");
  return h("div", {
    ref: it,
    className: G(Je && "border-0", Yd({
      display: i,
      position: e,
      padding: t,
      paddingX: n,
      paddingY: r,
      paddingTop: s,
      paddingBottom: o,
      paddingLeft: a,
      paddingRight: l,
      margin: d,
      marginX: c,
      marginY: u,
      marginTop: f,
      marginBottom: m,
      marginLeft: x,
      marginRight: v,
      gap: w,
      columns: S,
      rows: N,
      colSpan: C,
      colStart: D,
      rowSpan: b,
      width: y,
      height: g,
      minWidth: _,
      minHeight: M,
      maxWidth: T,
      maxHeight: E,
      background: R,
      borderColor: k,
      border: L,
      borderTop: X,
      borderBottom: Y,
      borderLeft: V,
      borderRight: Q,
      borderRadius: $,
      borderRadiusTopLeft: ne,
      borderRadiusTopRight: He,
      borderRadiusBottomLeft: U,
      borderRadiusBottomRight: Z,
      borderStyle: ye,
      overflow: ze,
      overflowX: oe,
      overflowY: tt,
      divider: xe,
      dividerColor: he,
      alignItems: j,
      justifyContent: Ze,
      flexDirection: fe,
      flexWrap: Be,
      grow: we,
      shrink: Fe
    }), _i, Ft && !k && "border-f1-border", xe && !he && "divide-f1-border", "scrollbar-macos"),
    ...Re
  });
});
ps.displayName = "F0Box";
const Eh = be({
  name: "F0Box",
  type: "layout"
}, ps), Sh = Bs.filter(
  (i) => i !== "ai"
), Dh = Xn, Rh = ["default", "outline", "neutral"], Nh = Xn, kh = ["sm", "md", "lg"], Th = ["compact", "expanded"], Ah = Fs, Oh = [
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
], Wi = ({ count: i, list: e }) => {
  const [t, n] = F(!1), r = h(Xt, {
    label: `+${i}`
  });
  return e?.length ? A(Yn, {
    open: t,
    onOpenChange: n,
    children: [h(Zn, {
      asChild: !0,
      children: h("button", {
        className: Jn("inline-flex flex-shrink-0 items-center"),
        children: r
      })
    }), h(Qn, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: A(er, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, o) => h("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: h(Xt, {
            ...s
          })
        }, o)), h(tr, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
Wi.displayName = "ChipCounter";
const gs = ({ chips: i, max: e = 4, remainingCount: t, layout: n = "compact" }) => {
  if (n === "fill")
    return h(Ws, {
      items: i,
      renderListItem: (l) => h(Xt, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => h(Wi, {
        count: (t ?? 0) + l,
        list: t ? void 0 : i.slice(i.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const r = i.slice(0, e), s = i.slice(e), o = t ?? i.length - e, a = o > 0;
  return A("div", {
    className: "flex items-center gap-2",
    children: [r.map((l, d) => h(Xt, {
      ...l
    }, d)), a && h(Wi, {
      count: o,
      list: t ? void 0 : s
    })]
  });
};
gs.displayName = "F0ChipList";
const Mh = ve("F0ChipList", gs), zh = Gs, Jd = Ye({
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
}), Qd = Ye({
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
}), Ph = ({ title: i, description: e, action: t, link: n, icon: r, variant: s = "neutral" }) => {
  const o = I(null);
  return h("div", {
    ref: o,
    className: "@container",
    children: h("div", {
      className: Jd({
        variant: s
      }),
      children: A("div", {
        className: G("flex flex-col items-start gap-3 @sm:flex-row @sm:items-center @sm:justify-between"),
        children: [A("div", {
          className: "flex flex-row gap-2",
          children: [h("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? h(js, {
              icon: r || $s,
              size: "sm"
            }) : h(la, {
              type: s,
              size: "sm"
            })
          }), A("div", {
            className: "flex flex-col gap-0.5",
            children: [h("p", {
              className: Qd({
                variant: s
              }),
              children: i
            }), h("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || n) && A("div", {
          className: G("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @sm:pl-0"),
          children: [n && h(Us, {
            href: n.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: n.label
          }), t && h(Oe, {
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
}, eu = 388;
function tu({ filters: i, value: e, onChange: t, height: n, width: r = 600, className: s, showApplyButton: o = !0, applyButtonLabel: a }) {
  const l = $i(), [d, c] = F(null), [u, f] = F(e);
  B(() => {
    f(e);
  }, [e]), B(() => {
    if (!d && i) {
      const w = Object.keys(i);
      if (w.length > 0) {
        const S = w.find((N) => {
          const C = u[N], D = gn(i[N].type);
          return C !== void 0 && !D.isEmpty(C, {
            schema: i[N],
            i18n: l
          });
        });
        c(S ?? w[0]);
      }
    }
  }, [i, d, u, l]);
  const m = (w, S) => {
    const N = {
      ...u,
      [w]: S
    };
    f(N), o || t(N);
  }, x = () => {
    t(u);
  }, v = P(() => n || Object.entries(i).reduce((S, [N, C]) => {
    const D = gn(C.type);
    return Math.max(S, D?.formHeight || eu);
  }, 0), [i, n]);
  return !i || Object.keys(i).length === 0 ? null : h("div", {
    className: G("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: r
    },
    children: h(Vs, {
      filters: i,
      tempFilters: u,
      selectedFilterKey: d,
      onFilterSelect: c,
      onFilterChange: m,
      onApply: x,
      height: v,
      showApplyButton: o,
      applyButtonLabel: a
    })
  });
}
tu.displayName = "F0FilterPickerContent";
const ln = "gap-4", iu = "mt-6", et = "md", vs = Me(null);
function bs() {
  const i = _e(vs);
  if (!i)
    throw new Error("useF0FormContext must be used within a F0Form");
  return i;
}
function di(i, e, t) {
  const n = ["forms", i];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function K(i, e) {
  return i._def?.typeName === e;
}
const ys = /* @__PURE__ */ new WeakMap();
function Lh(i, e) {
  ys.set(i, e);
  const t = i;
  return t._f0Config = e, t._innerSchema = i, t;
}
function xs(i) {
  const e = i;
  return e._f0Config ? e._f0Config : ys.get(i);
}
function Ih(i) {
  return xs(i) !== void 0;
}
function De(i) {
  let e = i;
  for (; K(e, "ZodOptional") || K(e, "ZodNullable") || K(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function nu(i, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = De(i);
  return K(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : K(t, "ZodNumber") ? "number" : K(t, "ZodBoolean") ? "switch" : K(t, "ZodDate") ? "date" : K(t, "ZodEnum") || K(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : K(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function cn(i) {
  return K(i, "ZodOptional") || K(i, "ZodNullable") || K(i, "ZodDefault") && cn(i._def.innerType);
}
function ru(i) {
  const e = De(i);
  return K(e, "ZodString") ? (e._def.checks || []).some(
    (n) => n.kind === "min" && (n.value ?? 0) >= 1
  ) : !1;
}
function su(i) {
  if (cn(i))
    return !1;
  const e = De(i);
  return K(e, "ZodString") ? ru(i) : !0;
}
function dn(i, e) {
  const t = e[i.fieldId];
  if ("equalsTo" in i)
    return i.equalsTo instanceof Date && t instanceof Date ? t.getTime() === i.equalsTo.getTime() : t === i.equalsTo;
  if ("notEqualsTo" in i)
    return i.notEqualsTo instanceof Date && t instanceof Date ? t.getTime() !== i.notEqualsTo.getTime() : t !== i.notEqualsTo;
  if ("greaterThan" in i) {
    const n = i.greaterThan;
    return typeof t == "number" && typeof n == "number" ? t > n : t instanceof Date && n instanceof Date ? t.getTime() > n.getTime() : !1;
  }
  if ("greaterThanOrEqual" in i) {
    const n = i.greaterThanOrEqual;
    return typeof t == "number" && typeof n == "number" ? t >= n : t instanceof Date && n instanceof Date ? t.getTime() >= n.getTime() : !1;
  }
  if ("lowerThan" in i) {
    const n = i.lowerThan;
    return typeof t == "number" && typeof n == "number" ? t < n : t instanceof Date && n instanceof Date ? t.getTime() < n.getTime() : !1;
  }
  if ("lowerThanOrEqual" in i) {
    const n = i.lowerThanOrEqual;
    return typeof t == "number" && typeof n == "number" ? t <= n : t instanceof Date && n instanceof Date ? t.getTime() <= n.getTime() : !1;
  }
  if ("isEmpty" in i) {
    const n = t == null || t === "" || Array.isArray(t) && t.length === 0;
    return i.isEmpty ? n : !n;
  }
  return "matches" in i ? typeof t == "string" && i.matches.test(t) : "includes" in i ? Array.isArray(t) ? t.includes(i.includes) : t === i.includes : "notIncludes" in i ? Array.isArray(t) ? !t.includes(i.notIncludes) : t !== i.notIncludes : !0;
}
function ou(i) {
  const e = De(i);
  return K(e, "ZodLiteral") && e._def.value === !0;
}
function au({ field: i, formField: e }) {
  const t = i.validation && ou(i.validation);
  return h(qs, {
    title: i.label,
    disabled: i.disabled,
    required: t,
    ...e,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function lu({ field: i, formField: e, error: t, isValidating: n }) {
  const r = {
    id: i.id,
    label: i.label,
    placeholder: i.placeholder,
    value: e.value,
    onChange: e.onChange,
    onBlur: e.onBlur,
    error: t,
    isValidating: n,
    disabled: i.disabled,
    config: i.fieldConfig
  };
  return h(Ot, {
    children: i.render(r)
  });
}
function cu(i, e) {
  if (i)
    return {
      value: {
        from: i,
        to: i
      },
      granularity: e?.[0] ?? "day"
    };
}
function du(i) {
  return i?.value?.from;
}
function uu({ field: i, formField: e, error: t, loading: n }) {
  const r = P(() => cu(e.value, i.granularities), [e.value, i.granularities]), s = (o) => {
    e.onChange(du(o));
  };
  return h(mr, {
    label: i.label,
    placeholder: i.placeholder,
    disabled: i.disabled,
    granularities: i.granularities,
    minDate: i.minDate,
    maxDate: i.maxDate,
    presets: i.presets,
    clearable: i.clearable,
    value: r,
    onChange: s,
    size: et,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function hu(i) {
  if (!(!i?.from || !i?.to))
    return {
      value: {
        from: i.from,
        to: i.to
      },
      granularity: "range"
    };
}
function fu(i) {
  if (!(!i?.value?.from || !i?.value?.to))
    return {
      from: i.value.from,
      to: i.value.to
    };
}
function mu({ field: i, formField: e, error: t, loading: n }) {
  const r = P(() => hu(e.value), [e.value]), s = (a) => {
    e.onChange(fu(a));
  }, o = i.fromLabel && i.toLabel ? `${i.label} (${i.fromLabel} - ${i.toLabel})` : i.label;
  return h(mr, {
    label: o,
    placeholder: i.placeholder,
    disabled: i.disabled,
    granularities: i.granularities ?? ["range"],
    minDate: i.minDate,
    maxDate: i.maxDate,
    presets: i.presets,
    clearable: i.clearable,
    value: r,
    onChange: s,
    size: et,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function pu({ field: i, formField: e, error: t, loading: n }) {
  return h(ca, {
    label: i.label,
    placeholder: i.placeholder,
    disabled: i.disabled,
    step: i.step,
    min: i.min,
    max: i.max,
    locale: i.locale ?? "en-US",
    ...e,
    value: e.value != null ? Number(e.value) : void 0,
    onChange: (r) => e.onChange(r),
    size: et,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function gu({ field: i, formField: e }) {
  const t = e.value;
  return h(da, {
    title: i.label,
    placeholder: i.placeholder ?? "",
    maxCharacters: i.maxCharacters,
    mentionsConfig: i.mentionsConfig,
    height: i.height,
    plainHtmlMode: i.plainHtmlMode,
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
function vu({ field: i, formField: e, error: t, loading: n }) {
  const r = {
    label: i.label,
    placeholder: i.placeholder,
    disabled: i.disabled,
    options: i.options,
    showSearchBox: i.showSearchBox,
    searchBoxPlaceholder: i.searchBoxPlaceholder,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    loading: n,
    size: et,
    hideLabel: !0
  };
  return i.multiple ? h(at, {
    ...r,
    multiple: !0,
    clearable: i.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : i.clearable ? h(at, {
    ...r,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : h(at, {
    ...r,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function bu({ field: i, formField: e, error: t, loading: n }) {
  const r = {
    label: i.label,
    placeholder: i.placeholder,
    disabled: i.disabled,
    source: i.source,
    mapOptions: i.mapOptions,
    showSearchBox: i.showSearchBox,
    searchBoxPlaceholder: i.searchBoxPlaceholder,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    loading: n,
    size: et,
    hideLabel: !0
  };
  return i.multiple ? h(at, {
    ...r,
    multiple: !0,
    clearable: i.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : i.clearable ? h(at, {
    ...r,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : h(at, {
    ...r,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function yu(i) {
  const { field: e } = i;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? h(bu, {
    ...i,
    field: e
  }) : "options" in e && e.options !== void 0 ? h(vu, {
    ...i,
    field: e
  }) : null;
}
function xu(i) {
  const e = De(i);
  return K(e, "ZodLiteral") && e._def.value === !0;
}
function wu({ field: i, formField: e }) {
  const t = i.validation && xu(i.validation);
  return h(Ks, {
    title: i.label,
    disabled: i.disabled,
    required: t,
    ...e,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
const Cu = {
  email: "name@example.com"
}, _u = {
  url: Zs,
  email: Ys
};
function Eu({ field: i, formField: e, error: t, loading: n }) {
  const r = i.inputType ?? "text", s = i.placeholder ?? Cu[r] ?? void 0, o = _u[r];
  return h(Xs, {
    label: i.label,
    type: r,
    placeholder: s,
    disabled: i.disabled,
    ...e,
    value: e.value != null ? String(e.value) : "",
    size: et,
    hideLabel: !0,
    error: t,
    loading: n,
    icon: o
  });
}
function Su({ field: i, formField: e, error: t, loading: n }) {
  return h(ua, {
    label: i.label,
    placeholder: i.placeholder,
    disabled: i.disabled,
    rows: i.rows,
    maxLength: i.maxLength,
    ...e,
    value: e.value != null ? String(e.value) : "",
    size: et,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Du({ field: i, formField: e, fieldState: t, isSubmitting: n }) {
  const r = !!t.error, { isValidating: s } = t, o = i.disabled || n, a = {
    error: r,
    loading: s
  };
  switch (i.type) {
    case "text":
      return h(Eu, {
        field: {
          ...i,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "number":
      return h(pu, {
        field: {
          ...i,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "textarea":
      return h(Su, {
        field: {
          ...i,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "select":
      return h(yu, {
        field: {
          ...i,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "checkbox":
      return h(au, {
        field: {
          ...i,
          disabled: o
        },
        formField: e
      });
    case "switch":
      return h(wu, {
        field: {
          ...i,
          disabled: o
        },
        formField: e
      });
    case "date":
      return h(uu, {
        field: {
          ...i,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "daterange":
      return h(mu, {
        field: {
          ...i,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "richtext":
      return h(gu, {
        field: {
          ...i,
          disabled: o
        },
        formField: e
      });
    case "custom":
      return h(lu, {
        field: {
          ...i,
          disabled: o
        },
        formField: e,
        error: t.error?.message,
        isValidating: s
      });
    default:
      return null;
  }
}
function un({ field: i, sectionId: e }) {
  const t = Vi(), n = t.watch(), { isSubmitting: r } = t.formState, { formName: s } = bs();
  if (i.renderIf && !dn(i.renderIf, n))
    return null;
  const o = i.type !== "checkbox" && i.type !== "custom", a = i.validation && su(i.validation), l = di(s, e, i.id);
  return h(ha, {
    control: t.control,
    name: i.id,
    render: ({ field: d, fieldState: c }) => A(fa, {
      id: l,
      className: "scroll-mt-4",
      children: [o && A("label", {
        htmlFor: i.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [i.label, a && h("span", {
          className: "ml-0.5 text-f1-foreground-critical",
          children: "*"
        })]
      }), h(ma, {
        children: Du({
          field: i,
          formField: d,
          fieldState: c,
          isSubmitting: r
        })
      }), i.helpText && h(pa, {
        children: i.helpText
      }), h(ga, {})]
    })
  });
}
function ws({ row: i, sectionId: e }) {
  return h("div", {
    className: `flex xs:flex-row flex-col ${ln} [&>*]:flex-1`,
    children: i.fields.map((t) => h(un, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function Ru(i) {
  const e = De(i);
  return K(e, "ZodLiteral") && e._def.value === !0;
}
function Cs({ fields: i }) {
  const e = Vi(), { watch: t, setValue: n } = e, { isSubmitting: r } = e.formState, s = t(), o = P(() => i.filter((c) => !c.renderIf || dn(c.renderIf, s)), [i, s]), a = P(() => o.map((c) => ({
    value: c.id,
    title: c.label,
    description: c.helpText,
    disabled: c.disabled || r,
    required: !!(c.validation && Ru(c.validation))
  })), [o, r]), l = P(() => o.filter((c) => s[c.id]).map((c) => c.id), [o, s]);
  return o.length === 0 ? null : h(va, {
    multiple: !0,
    isToggle: !0,
    grouped: !0,
    items: a,
    value: l,
    onChange: (c) => {
      for (const u of o) {
        const f = c.includes(u.id), m = !!s[u.id];
        f !== m && n(u.id, f, {
          shouldValidate: !0
        });
      }
    }
  });
}
function Nu(i, e) {
  return typeof i == "function" ? i(e) : dn(i, e);
}
function ku(i) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({
      type: "switchGroup",
      fields: [...t]
    }), t = []);
  };
  return i.forEach((r, s) => {
    r.type === "field" && r.field.type === "switch" ? t.push(r.field) : (n(), r.type === "field" ? e.push({
      type: "field",
      item: r
    }) : r.type === "row" && e.push({
      type: "row",
      item: r,
      index: s
    }));
  }), n(), e;
}
function Tu({ section: i }) {
  const t = Vi().watch(), { formName: n } = bs(), { title: r, description: s, renderIf: o, fields: a } = i.section, l = i.id;
  if (o && !Nu(o, t))
    return null;
  const d = ku(a), c = di(n, l);
  return A("section", {
    id: c,
    className: "flex flex-col scroll-mt-4",
    children: [h("div", {
      className: "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0 py-5",
      children: h(ba, {
        title: r,
        description: s ?? ""
      })
    }), h("div", {
      className: `flex flex-col ${ln}`,
      children: d.map((u, f) => u.type === "switchGroup" ? h(Cs, {
        fields: u.fields,
        sectionId: l
      }, `switch-group-${f}`) : u.type === "field" ? h(un, {
        field: u.item.field,
        sectionId: l
      }, u.item.field.id) : u.type === "row" ? h(ws, {
        row: u.item,
        sectionId: l
      }, `row-${u.index}`) : null)
    })]
  });
}
function Gn(i) {
  const e = document.getElementById(i);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function Au({
  formName: i,
  errors: e
}) {
  const t = Object.keys(e).filter((f) => f !== "root"), n = t.length > 0, r = t.length, [s, o] = F(0), a = I([]);
  B(() => {
    const f = t, m = a.current, x = f.find(
      (v) => !m.includes(v)
    );
    if (x) {
      const v = di(i, void 0, x);
      Gn(v);
      const w = f.indexOf(x);
      w !== -1 && o(w);
    }
    a.current = f;
  }, [t, i]);
  const l = q(
    (f) => {
      if (t.length === 0) return;
      const m = (f % t.length + t.length) % t.length;
      o(m);
      const x = t[m], v = di(i, void 0, x);
      Gn(v);
    },
    [t, i]
  ), d = q(() => {
    l(s - 1);
  }, [s, l]), c = q(() => {
    l(s + 1);
  }, [s, l]), u = q(() => {
    o(0), a.current = [];
  }, []);
  return {
    fieldErrors: t,
    hasErrors: n,
    errorCount: r,
    currentErrorIndex: s,
    goToPreviousError: d,
    goToNextError: c,
    resetErrorNavigation: u
  };
}
function Ou(i) {
  const e = De(i);
  if (!K(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let n, r;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (r = s.value);
  return { min: n, max: r };
}
function Mu(i) {
  const e = De(i);
  if (!K(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let n, r;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (r = new Date(s.value));
  return { minDate: n, maxDate: r };
}
function zu(i) {
  const e = De(i);
  if (!K(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const r of t)
    r.kind === "max" && (n = r.value);
  return { maxLength: n };
}
function Pu(i) {
  const e = De(i);
  return K(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "email") : !1;
}
function Lu(i) {
  const e = De(i);
  return K(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "url") : !1;
}
function jn(i) {
  return Pu(i) ? "email" : Lu(i) ? "url" : "text";
}
function $n(i, e, t, n) {
  const r = {
    id: i,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    validation: e
  }, s = cn(e);
  switch (n) {
    case "text": {
      const o = "inputType" in t && t.inputType ? t.inputType : jn(e);
      return {
        ...r,
        type: "text",
        inputType: o,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: o, max: a } = Ou(e);
      return {
        ...r,
        type: "number",
        step: "step" in t ? t.step : void 0,
        min: o,
        max: a,
        locale: "locale" in t ? t.locale : void 0,
        renderIf: t.renderIf
      };
    }
    case "textarea": {
      const { maxLength: o } = zu(e);
      return {
        ...r,
        type: "textarea",
        rows: "rows" in t ? t.rows : void 0,
        maxLength: o,
        renderIf: t.renderIf
      };
    }
    case "select": {
      const o = "source" in t && t.source;
      return {
        ...r,
        type: "select",
        // Only include options if not using source
        ...o ? {
          source: t.source,
          mapOptions: "mapOptions" in t ? t.mapOptions : void 0
        } : {
          options: "options" in t ? t.options : []
        },
        multiple: "multiple" in t ? t.multiple : void 0,
        clearable: s,
        showSearchBox: "showSearchBox" in t ? t.showSearchBox : void 0,
        searchBoxPlaceholder: "searchBoxPlaceholder" in t ? t.searchBoxPlaceholder : void 0,
        renderIf: t.renderIf
      };
    }
    case "checkbox":
      return {
        ...r,
        type: "checkbox",
        renderIf: t.renderIf
      };
    case "switch":
      return {
        ...r,
        type: "switch",
        renderIf: t.renderIf
      };
    case "date": {
      const { minDate: o, maxDate: a } = Mu(e);
      return {
        ...r,
        type: "date",
        granularities: "granularities" in t ? t.granularities : void 0,
        minDate: o,
        maxDate: a,
        presets: "presets" in t ? t.presets : void 0,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "daterange":
      return {
        ...r,
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
        ...r,
        type: "richtext",
        maxCharacters: "maxCharacters" in t ? t.maxCharacters : void 0,
        mentionsConfig: "mentionsConfig" in t ? t.mentionsConfig : void 0,
        height: "height" in t ? t.height : void 0,
        plainHtmlMode: "plainHtmlMode" in t ? t.plainHtmlMode : void 0,
        renderIf: t.renderIf
      };
    case "custom":
      return {
        ...r,
        type: "custom",
        render: "render" in t ? t.render : () => null,
        fieldConfig: "fieldConfig" in t ? t.fieldConfig : void 0,
        renderIf: t.renderIf
      };
    default:
      return {
        ...r,
        type: "text",
        inputType: jn(e),
        renderIf: t.renderIf
      };
  }
}
function ui(i) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (let n = 0; n < i.length; n++) {
    if (t.has(n)) continue;
    const r = i[n], s = r.config.row;
    if (s) {
      const o = [];
      for (let l = n; l < i.length; l++)
        i[l].config.row === s && (o.push(i[l]), t.add(l));
      o.sort((l, d) => l.position - d.position);
      const a = {
        type: "row",
        fields: o.map(
          (l) => $n(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(a);
    } else {
      t.add(n);
      const o = $n(
        r.id,
        r.schema,
        r.config,
        r.fieldType
      );
      e.push({ type: "field", field: o });
    }
  }
  return e;
}
function _s(i) {
  const e = i.shape, t = [], n = Object.entries(e);
  for (let r = 0; r < n.length; r++) {
    const [s, o] = n[r], a = xs(o);
    if (a) {
      const l = nu(o, a);
      t.push({
        id: s,
        schema: o,
        config: a,
        fieldType: l,
        position: r
      });
    }
  }
  return t;
}
function Iu(i, e) {
  return P(() => {
    const t = _s(i), n = [], r = {};
    for (const a of t) {
      const l = a.config.section;
      l ? (r[l] || (r[l] = []), r[l].push(a)) : n.push(a);
    }
    n.sort((a, l) => a.position - l.position);
    for (const a of Object.keys(r))
      r[a].sort((l, d) => l.position - d.position);
    const s = [];
    s.push(...ui(n));
    const o = e ? Object.keys(e).filter((a) => r[a]) : Object.keys(r);
    for (const a of o) {
      const l = e?.[a], d = r[a], c = {
        id: a,
        type: "section",
        section: {
          title: l?.title ?? a,
          description: l?.description,
          renderIf: l?.renderIf,
          fields: ui(d)
        }
      };
      s.push(c);
    }
    return s;
  }, [i, e]);
}
function Hh(i, e) {
  const t = _s(i), n = [], r = {};
  for (const a of t) {
    const l = a.config.section;
    l ? (r[l] || (r[l] = []), r[l].push(a)) : n.push(a);
  }
  n.sort((a, l) => a.position - l.position);
  for (const a of Object.keys(r))
    r[a].sort((l, d) => l.position - d.position);
  const s = [];
  s.push(...ui(n));
  const o = e ? Object.keys(e).filter((a) => r[a]) : Object.keys(r);
  for (const a of o) {
    const l = e?.[a], d = r[a], c = {
      id: a,
      type: "section",
      section: {
        title: l?.title ?? a,
        description: l?.description,
        renderIf: l?.renderIf,
        fields: ui(d)
      }
    };
    s.push(c);
  }
  return s;
}
var At;
(function(i) {
  i.assertEqual = (r) => {
  };
  function e(r) {
  }
  i.assertIs = e;
  function t(r) {
    throw new Error();
  }
  i.assertNever = t, i.arrayToEnum = (r) => {
    const s = {};
    for (const o of r)
      s[o] = o;
    return s;
  }, i.getValidEnumValues = (r) => {
    const s = i.objectKeys(r).filter((a) => typeof r[r[a]] != "number"), o = {};
    for (const a of s)
      o[a] = r[a];
    return i.objectValues(o);
  }, i.objectValues = (r) => i.objectKeys(r).map(function(s) {
    return r[s];
  }), i.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const s = [];
    for (const o in r)
      Object.prototype.hasOwnProperty.call(r, o) && s.push(o);
    return s;
  }, i.find = (r, s) => {
    for (const o of r)
      if (s(o))
        return o;
  }, i.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && Number.isFinite(r) && Math.floor(r) === r;
  function n(r, s = " | ") {
    return r.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  i.joinValues = n, i.jsonStringifyReplacer = (r, s) => typeof s == "bigint" ? s.toString() : s;
})(At || (At = {}));
var Un;
(function(i) {
  i.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Un || (Un = {}));
At.arrayToEnum([
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
]);
const Qe = At.arrayToEnum([
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
class hi extends Error {
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
    }, n = { _errors: [] }, r = (s) => {
      for (const o of s.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(r);
        else if (o.code === "invalid_return_type")
          r(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          r(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(t(o));
        else {
          let a = n, l = 0;
          for (; l < o.path.length; ) {
            const d = o.path[l];
            l === o.path.length - 1 ? (a[d] = a[d] || { _errors: [] }, a[d]._errors.push(t(o))) : a[d] = a[d] || { _errors: [] }, a = a[d], l++;
          }
        }
    };
    return r(this), n;
  }
  static assert(e) {
    if (!(e instanceof hi))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, At.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, n = [];
    for (const r of this.issues)
      if (r.path.length > 0) {
        const s = r.path[0];
        t[s] = t[s] || [], t[s].push(e(r));
      } else
        n.push(e(r));
    return { formErrors: n, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
hi.create = (i) => new hi(i);
function Hu(i) {
  const { validation: e } = i.forms;
  return (t, n) => {
    switch (t.code) {
      case Qe.invalid_type:
        return t.received === "undefined" || t.received === "null" ? { message: e.required } : { message: e.invalidType };
      case Qe.invalid_string:
        if (t.validation === "email")
          return { message: e.string.email };
        if (t.validation === "url")
          return { message: e.string.url };
        break;
      case Qe.too_small:
        if (t.type === "string")
          return t.minimum === 1 ? { message: e.required } : {
            message: e.string.min.replace(
              "{{min}}",
              String(t.minimum)
            )
          };
        if (t.type === "number")
          return t.minimum === 0 && !t.inclusive ? { message: e.number.positive } : {
            message: e.number.min.replace(
              "{{min}}",
              String(t.minimum)
            )
          };
        if (t.type === "array")
          return {
            message: e.array.min.replace(
              "{{min}}",
              String(t.minimum)
            )
          };
        if (t.type === "date")
          return {
            message: e.date.min.replace(
              "{{min}}",
              String(t.minimum)
            )
          };
        break;
      case Qe.too_big:
        if (t.type === "string")
          return {
            message: e.string.max.replace(
              "{{max}}",
              String(t.maximum)
            )
          };
        if (t.type === "number")
          return t.maximum === 0 && !t.inclusive ? { message: e.number.negative } : {
            message: e.number.max.replace(
              "{{max}}",
              String(t.maximum)
            )
          };
        if (t.type === "array")
          return {
            message: e.array.max.replace(
              "{{max}}",
              String(t.maximum)
            )
          };
        if (t.type === "date")
          return {
            message: e.date.max.replace(
              "{{max}}",
              String(t.maximum)
            )
          };
        break;
      case Qe.invalid_date:
        return { message: e.date.invalid };
      case Qe.not_multiple_of:
        if (t.multipleOf === 1)
          return { message: e.number.integer };
        break;
      case Qe.invalid_literal:
        if (t.expected === !0)
          return { message: e.checkbox.mustBeChecked };
        break;
    }
    return { message: n.defaultError };
  };
}
function Bu(i) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({
      type: "switchGroup",
      fields: [...t]
    }), t = []);
  };
  return i.forEach((r, s) => {
    r.type === "field" && r.field.type === "switch" ? t.push(r.field) : (n(), r.type === "field" ? e.push({
      type: "field",
      item: r
    }) : r.type === "row" ? e.push({
      type: "row",
      item: r,
      index: s
    }) : r.type === "section" && e.push({
      type: "section",
      item: r
    }));
  }), n(), e;
}
const Fu = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Wu(i) {
  const e = $i(), { forms: t } = e, { name: n, schema: r, sections: s, defaultValues: o, onSubmit: a, submitConfig: l, className: d, errorTriggerMode: c = "on-blur" } = i, u = l?.type === "action-bar", f = l?.label ?? "Submit", m = l?.icon === null ? void 0 : l?.icon ?? Js, x = !u, v = l?.type === "action-bar" && l?.discardable, w = u ? l?.discardConfig : void 0, S = w?.label ?? t.actionBar.discard, N = w?.icon === null ? void 0 : w?.icon ?? Qs, C = u ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, D = u && !!l?.centerActionBarInFrameContent, b = Iu(r, s), y = P(() => Hu(e), [e]), g = Fu[c], _ = ya({
    resolver: xa(r, {
      errorMap: y
    }),
    mode: g,
    defaultValues: o
  }), M = _.formState.errors.root, { isDirty: T, isSubmitting: E, errors: R } = _.formState, { hasErrors: k, errorCount: L, goToPreviousError: X, goToNextError: Y, resetErrorNavigation: V } = Au({
    formName: n,
    errors: R
  }), Q = async (U) => {
    const Z = await a(U);
    Z.success || (Z.errors && Object.entries(Z.errors).forEach(([ye, ze]) => {
      _.setError(ye, {
        message: ze
      });
    }), Z.rootMessage && _.setError("root", {
      message: Z.rootMessage
    }));
  }, $ = () => {
    _.reset(), V();
  }, ne = Bu(b), He = P(() => ({
    formName: n
  }), [n]);
  return h(vs.Provider, {
    value: He,
    children: A(wa, {
      ..._,
      children: [A("form", {
        onSubmit: _.handleSubmit(Q),
        className: G(`flex flex-col ${ln} max-w-[600px]`, d),
        children: [ne.map((U, Z) => {
          switch (U.type) {
            case "switchGroup":
              return h(Cs, {
                fields: U.fields
              }, `switch-group-${Z}`);
            case "field":
              return h(un, {
                field: U.item.field
              }, U.item.field.id);
            case "row":
              return h(ws, {
                row: U.item
              }, `row-${U.index}`);
            case "section":
              return h("div", {
                className: Z !== 0 ? iu : "",
                children: h(Tu, {
                  section: U.item
                })
              }, U.item.id);
            default:
              return null;
          }
        }), M && h("p", {
          className: "text-base font-medium text-f1-foreground-critical",
          children: M.message
        }), !u && x && h(Oe, {
          type: "submit",
          label: f,
          icon: m,
          loading: E,
          disabled: k
        })]
      }), u && h(Ca, {
        isOpen: T,
        variant: "light",
        centerInFrameContent: D,
        label: k ? void 0 : C,
        leftContent: k ? A("div", {
          className: "flex items-center gap-3",
          children: [A("div", {
            className: "flex items-center gap-0.5",
            children: [h(Ui, {
              icon: eo,
              size: "md",
              color: "critical"
            }), h("span", {
              className: "font-medium text-f1-foreground-critical",
              children: L === 1 ? t.actionBar.issues.one.replace("{{count}}", String(L)) : t.actionBar.issues.other.replace("{{count}}", String(L))
            })]
          }), L > 1 && A("div", {
            className: "flex items-center gap-2",
            children: [h(Oe, {
              icon: to,
              onClick: X,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }), h(Oe, {
              icon: io,
              onClick: Y,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            })]
          })]
        }) : void 0,
        primaryActions: [{
          label: f,
          icon: m,
          onClick: _.handleSubmit(Q),
          disabled: k
        }],
        secondaryActions: v ? [{
          label: S,
          icon: N,
          onClick: $
        }] : []
      })]
    })
  });
}
const Bh = ve("F0Form", Wu), Gu = ae((i, e) => h(Yi, {
  ref: e,
  variant: "heading",
  ...i
}));
Gu.displayName = "F0Heading";
const Fh = ve(
  "F0GridStack",
  Xi
), Mi = 16, ju = Ye({
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
function Es(i, e = 0) {
  return i.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? Es(t.children, e + 1) : []]);
}
function $u(i, e) {
  const t = i.length;
  if (t <= Mi) return i;
  const n = t / (Mi - 1), r = new Set(Array.from({
    length: Mi - 1
  }, (s, o) => Math.min(Math.floor(o * n), t - 1)));
  if (r.add(t - 1), e) {
    const s = i.findIndex((o) => o.id === e);
    if (s !== -1 && !r.has(s)) {
      const o = [...r].reduce((a, l) => Math.abs(l - s) < Math.abs(a - s) ? l : a);
      r.delete(o), r.add(s);
    }
  }
  return [...r].sort((s, o) => s - o).map((s) => i[s]);
}
function Uu({ items: i, activeItem: e, className: t, align: n = "left", variant: r = "dark" }) {
  const s = P(() => $u(Es(i), e), [i, e]);
  return h("div", {
    className: G("flex flex-col justify-center gap-2 py-3", n === "right" ? "items-end" : "items-start", t),
    children: s.map((o) => h("div", {
      className: ju({
        depth: o.depth,
        variant: r,
        active: o.id === e
      })
    }, o.id))
  });
}
const Vu = 300, qu = 0, Ku = Ye({
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
function Xu({ title: i, items: e, className: t, activeItem: n, collapsible: r = !1, showChildrenCounter: s = !1, barsAlign: o = "left", size: a = "md", variant: l = "light" }) {
  const [d, c] = F(!1), u = I(!1), f = (x) => {
    x && !d && (u.current = !0), c(x);
  }, m = q((x) => {
    !x || !u.current || (u.current = !1, requestAnimationFrame(() => {
      x.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return A(no, {
    open: d,
    onOpenChange: f,
    openDelay: qu,
    closeDelay: Vu,
    children: [h(ro, {
      asChild: !0,
      children: h("button", {
        className: G(Jn(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": i ?? "Menu",
        children: h(Uu, {
          items: e,
          activeItem: n,
          align: o,
          variant: l
        })
      })
    }), h(so, {
      ref: m,
      side: o === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: G(Ku({
        size: a
      }), !i && "pt-2", "scrollbar-macos"),
      children: h(_a, {
        title: i,
        items: e,
        activeItem: n,
        collapsible: r,
        hideChildrenCounter: !s,
        scrollable: !1
      })
    })]
  });
}
const Wh = ve(
  "F0TableOfContentPopover",
  Xu
), Yu = ({ benefits: i }) => h("div", {
  className: "flex flex-col gap-2",
  children: i.map((e, t) => h(Zu, {
    text: e
  }, t))
}), Zu = ({ text: i }) => A("div", {
  className: "flex flex-row items-start gap-2",
  children: [h(Ui, {
    icon: ao,
    size: "md",
    className: "text-f1-icon-positive"
  }), h("span", {
    children: i
  })]
}), Ss = ae(({ title: i, image: e, benefits: t, actions: n, withShadow: r = !0, module: s, moduleName: o, tag: a, promoTag: l }, d) => A("div", {
  ref: d,
  className: G("bg-white flex flex-row rounded-xl border border-f1-border-secondary", r && "shadow-md"),
  children: [h("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: h("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), A("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [A("div", {
      className: "flex flex-col gap-5",
      children: [A("div", {
        className: "flex flex-col gap-2",
        children: [A("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && h(ir, {
            module: s
          }), o && h("p", {
            className: "text-base font-medium text-f1-foreground",
            children: o
          })]
        }), (a || l) && A("div", {
          className: "flex justify-start gap-2",
          children: [a && h(oo, {
            icon: a.icon,
            text: a.label
          }), l && h(Ea, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), h("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: i
        })]
      }), h(Yu, {
        benefits: t
      })]
    }), n && h("div", {
      className: "flex gap-3",
      children: n
    })]
  })]
}));
Ss.displayName = "ProductBlankslate";
function Ju({ isOpen: i, onClose: e, title: t, children: n, module: r, portalContainer: s }) {
  const [o, a] = F(i);
  return B(() => {
    a(i);
  }, [i]), h(lo, {
    open: o,
    onOpenChange: (d) => {
      a(d), d || e();
    },
    modal: !0,
    children: A(co, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [A("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [A(uo, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [r && h(ir, {
            module: r,
            size: "lg"
          }), t]
        }), h(ji, {
          variant: "outline",
          icon: nr,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), A(er, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [n, h(tr, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Gh({ isOpen: i, onClose: e, title: t, image: n, benefits: r, errorMessage: s, successMessage: o, loadingState: a, nextSteps: l, closeLabel: d, primaryAction: c, modalTitle: u, modalModule: f, secondaryAction: m, portalContainer: x, tag: v, promoTag: w, showResponseDialog: S = !0 }) {
  const [N, C] = F(i), [D, b] = F(null), [y, g] = F(!1), _ = async () => {
    if (c?.onClick) {
      g(!0);
      try {
        await c.onClick(), C(!1), S && b("success");
      } catch {
        S && b("error");
      } finally {
        g(!1);
      }
    }
  }, M = () => {
    C(!1), e?.();
  }, T = y;
  return A(Ot, {
    children: [h(Ju, {
      isOpen: N,
      onClose: M,
      title: u,
      module: f,
      portalContainer: x,
      children: h("div", {
        className: "pb-4 pl-4",
        children: h(Ss, {
          title: t,
          image: n,
          benefits: r,
          withShadow: !1,
          tag: v,
          promoTag: w,
          actions: A("div", {
            className: "flex gap-3",
            children: [c && h(Oe, {
              variant: c.variant,
              label: T ? a.label : c.label,
              icon: c.icon || void 0,
              onClick: _,
              loading: c.loading,
              size: c.size
            }), m && h(Oe, {
              onClick: m.onClick,
              label: m.label,
              variant: m.variant,
              size: m.size,
              icon: m.icon
            })]
          })
        })
      })
    }), D && S && h(pr, {
      open: !0,
      onClose: () => {
        M(), b(null);
      },
      success: D === "success",
      errorMessage: s,
      successMessage: o,
      nextSteps: l,
      closeLabel: d,
      portalContainer: x
    })]
  });
}
function Qu({ mediaUrl: i, title: e, description: t, onClose: n, dismissible: r, width: s, trackVisibility: o, actions: a, showConfirmation: l = !0 }) {
  const [d, c] = F(!1), u = () => {
    c(!0), n && n();
  };
  B(() => {
    o && o(!d);
  }, [o, d]);
  const f = i?.includes(".mp4");
  return h(Ot, {
    children: d ? null : A(Sa, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [A(Da, {
        children: [r && h("div", {
          className: "absolute right-2 top-2 z-10",
          children: h(Oe, {
            variant: "ghost",
            icon: nr,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          })
        }), A("div", {
          children: [h("div", {
            children: i && (f ? h("video", {
              src: i,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : h("img", {
              src: i,
              alt: e,
              className: "h-full w-full rounded-md"
            }))
          }), A("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [h(Cn, {
              className: "text-lg font-medium",
              children: e
            }), h(Cn, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), a && h(Ra, {
        className: "p-3",
        children: a.map((m) => m.type === "upsell" ? h(gr, {
          label: m.label,
          onRequest: m.onClick,
          errorMessage: m.errorMessage,
          successMessage: m.successMessage,
          loadingState: m.loadingState,
          nextSteps: m.nextSteps,
          closeLabel: m.closeLabel,
          showConfirmation: l && m.showConfirmation,
          variant: m.variant
        }, m.label) : h(Oe, {
          label: m.label,
          onClick: m.onClick,
          variant: m.variant
        }, m.label))
      })]
    })
  });
}
const eh = ae(function({ primaryAction: e, secondaryAction: t, ...n }, r) {
  const s = (l) => l.variant === "promote" ? h(gr, {
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
  }) : h(Oe, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), o = e?.variant !== "promote" ? e : void 0, a = t?.variant !== "promote" ? t : void 0;
  return A(Na, {
    ref: r,
    ...n,
    primaryAction: o,
    secondaryAction: a,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
eh.displayName = "UpsellingBanner";
function jh({ isOpen: i, setIsOpen: e, label: t, variant: n = "promote", size: r = "md", showIcon: s = !0, side: o = "right", align: a = "center", icon: l = ho, mediaUrl: d, title: c, description: u, width: f = "300px", trackVisibility: m, actions: x, onClick: v, hideLabel: w = !1 }) {
  const [S, N] = F(!1), [C, D] = F(null), [b, y] = F(null), g = (R) => {
    e(R), v && v();
  }, _ = async (R) => {
    if (R.type === "upsell") {
      y(R);
      try {
        await R.onClick(), R.showConfirmation && (N(!0), D("success"));
      } catch {
        N(!0), D("error");
      }
    }
  }, M = () => {
    D(null), N(!1), y(null), e(!1);
  }, T = i && !S, E = x?.map((R) => R.type === "upsell" ? {
    ...R,
    onClick: () => _(R)
  } : R);
  return A(Ot, {
    children: [A(Yn, {
      open: T,
      onOpenChange: g,
      children: [h(Zn, {
        asChild: !0,
        children: h(Oe, {
          variant: n,
          label: t,
          size: r,
          icon: s ? l : void 0,
          onClick: () => e(i),
          hideLabel: w
        })
      }), h(Qn, {
        side: o,
        align: a,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: h(Qu, {
          mediaUrl: d,
          title: c,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: f,
          trackVisibility: m,
          actions: E,
          showConfirmation: !1
        })
      })]
    }), b?.type === "upsell" && b.showConfirmation && C && h(pr, {
      open: !0,
      onClose: M,
      success: C === "success",
      errorMessage: b.errorMessage,
      successMessage: b.successMessage,
      nextSteps: b.nextSteps,
      closeLabel: b.closeLabel,
      portalContainer: null
    })]
  });
}
const th = Me(null), ih = ({ children: i, fullScreen: e = !0 }) => {
  const t = I(null), [n, r] = F(t.current);
  return yo(() => {
    r(t.current);
  }, []), h(th.Provider, {
    value: {
      element: n
    },
    children: h("div", {
      ref: t,
      id: "f0-layout",
      className: G({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: i
    })
  });
}, nh = ({ children: i }) => h(Aa, {
  reducedMotion: "user",
  children: i
}), $h = ({ children: i, layout: e, link: t, privacyModeInitiallyEnabled: n, image: r, i18n: s, l10n: o, isDev: a = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: d = !1 }) => h(nh, {
  children: h(fo, {
    isDev: a,
    showExperimentalWarnings: d,
    children: h(mo, {
      ...o,
      children: h(po, {
        ...s,
        children: h(go, {
          ...t,
          children: h(ih, {
            ...e,
            children: h(vo, {
              children: h(ka, {
                initiallyEnabled: n,
                children: h(bo, {
                  ...r,
                  children: h(Ta, {
                    handler: l,
                    children: i
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}), Vn = (i) => `datacollection-${i}`, Uh = {
  get: async (i) => JSON.parse(
    localStorage.getItem(Vn(i)) ?? "{}"
  ),
  set: async (i, e) => {
    localStorage.setItem(Vn(i), JSON.stringify(e));
  }
};
export {
  Kh as A,
  Om as AiChatTranslationsProvider,
  ph as AreaChart,
  Xh as Await,
  gh as BarChart,
  Yh as Blockquote,
  vh as CategoryBarChart,
  Zh as ChatSpinner,
  Ch as ComboChart,
  dh as Dashboard,
  cm as DndProvider,
  Jh as Em,
  Qh as EmojiImage,
  ef as F0ActionItem,
  tf as F0AiChat,
  nf as F0AiChatProvider,
  rf as F0AiChatTextArea,
  sf as F0AiCollapsibleMessage,
  of as F0AiFullscreenChat,
  Ph as F0Alert,
  Mm as F0AuraVoiceAnimation,
  af as F0Avatar,
  la as F0AvatarAlert,
  lf as F0AvatarCompany,
  dm as F0AvatarDate,
  cf as F0AvatarEmoji,
  df as F0AvatarFile,
  js as F0AvatarIcon,
  um as F0AvatarList,
  ir as F0AvatarModule,
  uf as F0AvatarPerson,
  hf as F0AvatarTeam,
  _h as F0BigNumber,
  Eh as F0Box,
  Oe as F0Button,
  ff as F0ButtonDropdown,
  mf as F0ButtonToggle,
  hm as F0Card,
  qs as F0Checkbox,
  Mh as F0ChipList,
  mr as F0DatePicker,
  pf as F0Dialog,
  gf as F0DialogContext,
  vf as F0DialogProvider,
  bf as F0EventCatcherProvider,
  tu as F0FilterPickerContent,
  Bh as F0Form,
  Fh as F0GridStack,
  zm as F0HILActionConfirmation,
  Gu as F0Heading,
  Ui as F0Icon,
  Us as F0Link,
  yf as F0MessageSources,
  xf as F0OneIcon,
  wf as F0OneSwitch,
  $h as F0Provider,
  at as F0Select,
  Wh as F0TableOfContentPopover,
  fm as F0TagAlert,
  aa as F0TagBalance,
  mm as F0TagCompany,
  pm as F0TagDot,
  gm as F0TagList,
  vm as F0TagPerson,
  oo as F0TagRaw,
  Ea as F0TagStatus,
  bm as F0TagTeam,
  Er as F0Text,
  Cf as F0Thinking,
  _f as FullscreenChatContext,
  Ef as GROUP_ID_SYMBOL,
  Sf as H1,
  Df as H2,
  Rf as H3,
  mh as HomeLayout,
  Nf as Hr,
  kf as Image,
  uh as Layout,
  Tf as Li,
  bh as LineChart,
  Af as Ol,
  Of as OneFilterPicker,
  Mf as P,
  yh as PieChart,
  zf as Pre,
  ka as PrivacyModeProvider,
  Ss as ProductBlankslate,
  ym as ProductCard,
  Gh as ProductModal,
  Qu as ProductWidget,
  wh as ProgressBarChart,
  hh as StandardLayout,
  Pf as Strong,
  Lf as Table,
  xm as Tag,
  wm as TagCounter,
  If as Td,
  Hf as Th,
  fh as TwoColumnLayout,
  Bf as Ul,
  pr as UpsellRequestResponseDialog,
  eh as UpsellingBanner,
  gr as UpsellingButton,
  jh as UpsellingPopover,
  xh as VerticalBarChart,
  Pm as actionItemStatuses,
  Lm as aiTranslations,
  ch as avatarVariants,
  Ff as buildTranslations,
  Nh as buttonDropdownSizes,
  Rh as buttonDropdownVariants,
  Dh as buttonSizes,
  kh as buttonToggleSizes,
  Th as buttonToggleVariants,
  Sh as buttonVariants,
  Cm as cardImageFits,
  _m as cardImageSizes,
  Em as createAtlaskitDriver,
  Wf as createDataSourceDefinition,
  Ya as createPageLayoutBlock,
  Za as createPageLayoutBlockGroup,
  Uh as dataCollectionLocalStorageHandler,
  zh as datepickerSizes,
  Fm as defaultTranslations,
  Gf as downloadTableAsExcel,
  dn as evaluateRenderIf,
  ve as experimental,
  Lh as f0FormField,
  jf as f0MarkdownRenderers,
  di as generateAnchorId,
  $f as getAnimationVariants,
  Uf as getDataSourcePaginationType,
  Vf as getEmojiLabel,
  xs as getF0Config,
  Hh as getSchemaDefinition,
  Ih as hasF0Config,
  nu as inferFieldType,
  qf as isInfiniteScrollPagination,
  Kf as isPageBasedPagination,
  K as isZodType,
  Ah as linkVariants,
  Xf as modules,
  Im as oneIconSizes,
  Sm as predefinedPresets,
  Dm as selectSizes,
  Oh as tagDotColors,
  De as unwrapZodSchema,
  Yf as useAiChat,
  Hm as useAiChatTranslations,
  Zf as useData,
  Jf as useDataSource,
  Qf as useDefaultCopilotActions,
  Rm as useDndEvents,
  Nm as useDraggable,
  km as useDroppableList,
  em as useEmojiConfetti,
  tm as useF0Dialog,
  im as useGroups,
  nm as useMessageSourcesAction,
  rm as useOrchestratorThinkingAction,
  Tm as usePrivacyMode,
  sm as useReducedMotion,
  Iu as useSchemaDefinition,
  om as useSelectable,
  am as useXRay
};
