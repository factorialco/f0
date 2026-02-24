import { a6 as se, a7 as Vt, aa as qs, ab as bi, ac as xi, ad as fl, ae as ml, af as Ys, ag as bt, u as zr, ah as Dn, ai as pl, aj as gl, ak as vl, al as yl, am as st, an as ot, ao as bl, ap as xl, aq as Ks, ar as wl, as as en, at as Xs, au as Js, av as Qs, aw as ea, ax as ta, ay as ra, az as _l, aA as Cl, aB as El, aC as kl, aD as Sl, a8 as ht, aE as Zi, aF as Dl, aG as Rl, aH as Nl, aI as na, aJ as Al, aK as ia, aL as Tl, aM as rr, aN as Ol, aO as Ml, aP as Il, aQ as Ll, aR as Pl, aS as zl, aT as Fl, aU as Bl, aV as Hl, aW as Vl, aX as sa, aY as jl, aZ as $l, a_ as Wl, a$ as Gl, b0 as Ul, b1 as aa, b2 as Zl, b3 as ql, b4 as Yl, b5 as Kl, b6 as Xl, b7 as Jl, I as Ql, b8 as ec, b9 as tc, ba as rc, bb as nc } from "./F0AiChat-C1Q8vKme.js";
import { A as kg, br as Sg, B as Dg, C as Rg, E as Ng, bG as Ag, h as Tg, F as Og, a as Mg, x as Ig, i as Lg, b as Pg, bc as zg, bd as Fg, be as Bg, bf as Hg, bh as Vg, bi as jg, bj as $g, bk as Wg, bl as Gg, bm as Ug, bn as Zg, bC as qg, s as Yg, t as Kg, v as Xg, bq as Jg, w as Qg, c as ev, bs as tv, n as rv, o as nv, p as iv, H as sv, k as av, L as ov, O as lv, bp as cv, q as dv, P as uv, S as hv, T as fv, l as mv, m as pv, U as gv, bD as vv, bx as yv, r as bv, j as xv, bA as wv, bw as _v, bH as Cv, bv as Ev, bu as kv, bg as Sv, d as Dv, bt as Rv, by as Nv, e as Av, bI as Tv, bo as Ov, bz as Mv, g as Iv, f as Lv, bF as Pv, bB as zv, bE as Fv } from "./F0AiChat-C1Q8vKme.js";
import { jsx as f, jsxs as j, Fragment as Fr } from "react/jsx-runtime";
import * as at from "react";
import B, { forwardRef as Ge, useRef as Y, useImperativeHandle as ic, Children as tn, createContext as Et, useContext as ft, useState as te, useMemo as Z, useEffect as X, useCallback as ue, useLayoutEffect as ni, createElement as qi, isValidElement as oa, Fragment as sc, memo as ac, useReducer as oc, cloneElement as lc, PureComponent as cc } from "react";
import { createPortal as la, unstable_batchedUpdates as Zr } from "react-dom";
import { L as ca, C as dc, i as da, D as uc, S as Yi, a as hc, f as $n, b as gr, c as fc, A as mc, d as qr, e as ua, E as pc, g as Xr, h as gc, j as vc, k as yc, l as Qt, m as ha, u as bc, G as xc, n as wc, o as Ki, p as _c, q as fa, r as Cc, B as ma, X as pa, Y as ii, s as Ec, t as ga, v as kc, w as Sc, x as Dc, y as Rc, z as Nc, F as Ac, H as Tc, I as Oc, J as Xi, K as Mc, M as xr, N as Wn, O as Ic, P as Lc, Q as Pc, R as zc, T as Fc, U as Bc, V as Hc, W as Vc, Z as jc, _ as $c, $ as Wc, a0 as Ji, a1 as Gc, a2 as Uc, a3 as va, a4 as Zc, a5 as qc, a6 as Yc, a7 as Kc, a8 as Xc, a9 as ya, aa as Jc, ab as Qc, ac as ba, ad as xa, ae as ed, af as td, ag as rd, ah as nd } from "./DataCollectionStorageProvider-CeKkP7hm.js";
import { ay as Hv, ai as Vv, aj as jv, am as $v, aq as Wv, ar as Gv, at as Uv, au as Zv, av as qv, aw as Yv, ap as Kv, as as Xv, ak as Jv, al as Qv, ax as ey, an as ty, ao as ry, az as ny, aA as iy, aB as sy, aC as ay } from "./DataCollectionStorageProvider-CeKkP7hm.js";
import { A as ly, F as cy, c as dy, b as uy, a as hy, o as fy, u as my } from "./F0HILActionConfirmation-BZwmYcgP.js";
import { defaultTranslations as gy } from "./i18n-provider-defaults.js";
import './f0.css';const id = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, sd = Ge(function({ widgets: e, children: t }, n) {
  const i = Y(null);
  ic(n, () => i.current);
  const s = tn.toArray(e).filter((a) => !!a).map((a, o) => f("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: a
  }, o));
  return f(ca, {
    layout: "home",
    children: j("div", {
      ref: i,
      className: "@container",
      children: [j("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [f(dc, {
          columns: id,
          showArrows: !1,
          children: s
        }), f("main", {
          children: t
        })]
      }), j("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [f("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: s.slice(0, 3)
        }), f("main", {
          className: "col-span-2",
          children: t
        }), f("div", {
          className: "flex flex-1 flex-col gap-5",
          children: s.slice(3)
        })]
      })]
    })
  });
}), ad = Vt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), wa = B.forwardRef(({ children: r, variant: e, className: t, ...n }, i) => f(ca, {
  layout: "standard",
  children: f("section", {
    ref: i,
    className: se("relative flex-1 overflow-auto", t),
    ...n,
    children: f("div", {
      className: se(ad({
        variant: e
      })),
      children: r
    })
  })
}));
wa.displayName = "StandardLayout";
const od = Ge(function({ children: e, sideContent: t, mainColumnPosition: n = "left", sticky: i = !1 }, s) {
  return f("div", {
    ref: s,
    className: "h-full",
    children: j("div", {
      className: se("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", i && "md:sticky md:top-0 md:max-h-full"),
      children: [f("main", {
        className: se("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), f(ld, {
        sticky: i,
        className: se("order-1", n === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), ld = ({ children: r, className: e }) => f("aside", {
  className: se("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: r
}), _a = Et(null);
function Ca() {
  const r = ft(_a);
  if (!r)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return r;
}
function cd(r) {
  const { content: e, ...t } = r;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function er(r) {
  const e = cd(r);
  return r.subGridOpts?.children && (e.subGridOpts = {
    ...r.subGridOpts,
    children: r.subGridOpts.children.map(
      (t) => er(t)
    )
  }), e;
}
const dd = ["noMove", "noResize", "locked", "w", "h", "x", "y"], Ot = 200;
function ud(r) {
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
function hd({ children: r, options: e, onResizeStop: t, onChange: n, widgets: i }) {
  const [s, a] = te(null), o = Y(null), l = Y(!1), c = Z(() => ({
    ...e,
    children: (i || []).map((S) => er(S))
  }), [e, i]), [d, u] = te(() => {
    const S = /* @__PURE__ */ new Map(), O = i || [], x = (E) => {
      E.id && E.content && S.set(E.id, E.content), E.subGridOpts?.children && E.subGridOpts.children.forEach((C) => {
        x(C);
      });
    };
    return O.forEach((E) => {
      x(E);
    }), S;
  }), h = Y(d);
  X(() => {
    h.current = d;
  }, [d]);
  const [p, g] = te(() => {
    const S = /* @__PURE__ */ new Map(), O = i || [], x = (E) => {
      E.id && E._originalContent !== void 0 && S.set(E.id, E._originalContent), E.subGridOpts?.children && E.subGridOpts.children.forEach((C) => {
        x(C);
      });
    };
    return O.forEach((E) => {
      x(E);
    }), S;
  }), b = Y(p);
  X(() => {
    b.current = p;
  }, [p]);
  const [_, T] = te(() => {
    const S = /* @__PURE__ */ new Map(), O = i || [], x = (E) => {
      if (E.id) {
        const C = er(E);
        S.set(E.id, C);
      }
      E.subGridOpts?.children && E.subGridOpts.children.forEach((C) => {
        x(C);
      });
    };
    return O.forEach((E) => {
      x(E);
    }), S;
  });
  qs(() => {
    if (!s) return;
    const S = s.save();
    if (!Array.isArray(S))
      return;
    const O = S.map((I) => I.id), x = i || [], E = x.map((I) => I.id), C = x.filter((I) => !O.includes(I.id));
    C.length > 0 && (C.forEach((I) => {
      I.content && h.current.set(I.id, I.content), I._originalContent !== void 0 && b.current.set(I.id, I._originalContent);
    }), C.forEach((I) => {
      const R = er(I);
      s.addWidget(R);
    }), T((I) => {
      const R = new Map(I);
      return C.forEach((k) => {
        const A = er(k);
        R.set(k.id, A);
      }), R;
    }), u((I) => {
      const R = new Map(I);
      return C.forEach((k) => {
        k.content && R.set(k.id, k.content);
      }), R;
    }), g((I) => {
      const R = new Map(I);
      return C.forEach((k) => {
        k._originalContent !== void 0 && R.set(k.id, k._originalContent);
      }), R;
    }));
    const N = S.filter((I) => !E.includes(I.id));
    if (N.length > 0) {
      const I = N.map((R) => R.id).filter(Boolean);
      I.forEach((R) => {
        setTimeout(() => {
          h.current.delete(R), b.current.delete(R);
        }, Ot);
      }), N.forEach((R) => {
        const k = s.el.querySelector(`[gs-id="${R.id}"]`);
        k && setTimeout(() => {
          s.removeWidget(k, !0);
        }, Ot);
      }), T((R) => {
        const k = new Map(R);
        return I.forEach((A) => {
          setTimeout(() => {
            k.delete(A);
          }, Ot);
        }), k;
      }), u((R) => {
        const k = new Map(R);
        return I.forEach((A) => {
          if (k.get(A)) {
            const ie = s.el.querySelector(`[gs-id="${A}"] .grid-stack-item-content`);
            let fe = "";
            ie && (fe = ud(ie)), k.set(A, f(bi.div, {
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
                  duration: Ot / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: Ot / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: Ot / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: fe
              }
            }));
          }
          setTimeout(() => {
            k.delete(A);
          }, Ot);
        }), k;
      }), g((R) => {
        const k = new Map(R);
        return I.forEach((A) => {
          setTimeout(() => {
            k.delete(A);
          }, Ot);
        }), k;
      });
    }
    const V = x.filter((I) => O.includes(I.id));
    if (V.length > 0) {
      const I = [];
      V.forEach((R) => {
        const k = S.find(($) => $.id === R.id);
        if (!k)
          return;
        const A = dd.filter(($) => k[$] !== R[$]);
        if (A.length > 0) {
          const $ = {}, ie = ["w", "h", "x", "y"], fe = ["noMove", "noResize", "locked"], ne = A.filter((oe) => ie.includes(oe)), ce = A.filter((oe) => fe.includes(oe));
          if (ne.length > 0 && ce.length > 0 && ne.length + ce.length === A.length ? ce.forEach((oe) => {
            const we = R[oe];
            we !== void 0 && ($[oe] = we);
          }) : A.forEach((oe) => {
            const we = R[oe];
            we !== void 0 && ($[oe] = we);
          }), Object.keys($).length > 0) {
            const oe = s.el.querySelector(`[gs-id="${R.id}"]`);
            oe && I.push({
              id: R.id,
              element: oe,
              updateOptions: $
            });
          }
        }
      }), V.forEach((R) => {
        R.content && h.current.set(R.id, R.content), R._originalContent !== void 0 && b.current.set(R.id, R._originalContent);
      }), I.forEach(({ element: R, updateOptions: k }) => {
        try {
          s.update(R, k);
        } catch (A) {
          console.warn("Error updating widget:", A);
        }
      }), T((R) => {
        const k = new Map(R);
        return V.forEach((A) => {
          const $ = er(A);
          k.set(A.id, $);
        }), k;
      }), u((R) => {
        const k = new Map(R);
        return V.forEach((A) => {
          A.content && k.set(A.id, A.content);
        }), k;
      }), g((R) => {
        const k = new Map(R);
        return V.forEach((A) => {
          A._originalContent !== void 0 && k.set(A.id, A._originalContent);
        }), k;
      });
    }
    l.current || (l.current = !0);
  }, [i]), X(() => {
    if (!s || !c.handle) return;
    s.opts && (s.opts.handle = c.handle);
    const S = setTimeout(() => {
      if (s && s.el && c.handle && s.el.querySelectorAll(c.handle).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(S);
  }, [s, c.handle, c.children]);
  const D = ue(() => {
    if (!s)
      return;
    const S = s.save();
    if (Array.isArray(S)) {
      const O = S.map((x) => {
        const E = x.id;
        if (!E) return null;
        const C = h.current.get(E), N = b.current.get(E), V = x;
        return {
          ...x,
          id: E,
          w: x.w ?? 1,
          h: x.h ?? 1,
          x: x.x ?? 0,
          y: x.y ?? 0,
          meta: V.meta,
          _originalContent: N,
          content: C ?? f("div", {
            children: "No content"
          })
        };
      }).filter((x) => x !== null);
      n?.(O);
    }
  }, [s]);
  return X(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const S = (O, x) => {
      t?.(O, x);
    };
    try {
      s.on("resizestop", S), s.on("change added removed", D);
    } catch (O) {
      console.error("Error attaching GridStack event listeners:", O);
      return;
    }
    return () => {
      const O = o.current;
      if (O && O.el)
        try {
          O.off("resizestop"), O.off("change added removed");
        } catch (x) {
          console.warn("Error cleaning up GridStack event listeners:", x);
        }
    };
  }, [s, t, D]), X(() => {
    o.current = s;
  }, [s]), X(() => {
    s && s.el && s.el.parentElement && l.current && D();
  }, [s]), f(_a.Provider, {
    value: {
      options: c,
      gridStack: s,
      _gridStack: {
        value: s,
        set: a
      },
      _rawWidgetMetaMap: {
        value: _,
        set: T
      },
      _reactContentMap: {
        value: d,
        set: u
      }
    },
    children: r
  });
}
const Ea = Et(null);
function fd() {
  const r = ft(Ea);
  if (!r)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return r;
}
const md = Et(null);
function pd() {
  const { _reactContentMap: r } = Ca(), { getWidgetContainer: e } = fd();
  return f(Fr, {
    children: Array.from(r.value.entries()).map(([t, n]) => {
      const i = e(t);
      return i ? f(md.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: n && la(n, i)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function gd(r, e, t, n, i) {
  const s = (...a) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + i + " and has been replaced with `" + n + "`. It will be **removed** in a future release"), e.apply(r, a));
  return s.prototype = e.prototype, s;
}
class y {
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
    return y.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
        e[i] === null || e[i] === void 0 ? e[i] = n[i] : typeof n[i] == "object" && typeof e[i] == "object" && y.defaults(e[i], n[i]);
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
        n[0] === "_" || i === s ? delete e[n] : i && typeof i == "object" && s !== void 0 && (y.removeInternalAndSame(i, s), Object.keys(i).length || delete e[n]);
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : y.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, n) {
    const i = y.getScrollElement(e);
    if (!i)
      return;
    const s = e.getBoundingClientRect(), a = i.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(a.bottom, o), c = s.top - Math.max(a.top, 0), d = i.scrollTop;
    c < 0 && n < 0 ? e.offsetHeight > a.height ? i.scrollTop += n : i.scrollTop += Math.abs(c) > Math.abs(n) ? n : c : l > 0 && n > 0 && (e.offsetHeight > a.height ? i.scrollTop += n : i.scrollTop += l > n ? n : l), t.top += i.scrollTop - d;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, n) {
    const i = y.getScrollElement(t), s = i.clientHeight, a = i === y.getScrollElement() ? 0 : i.getBoundingClientRect().top, o = e.clientY - a, l = o < n, c = o > s - n;
    l ? i.scrollBy({ behavior: "smooth", top: o - n }) : c && i.scrollBy({ behavior: "smooth", top: n - (s - o) });
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], n = y.clone(e);
    for (const i in n)
      n.hasOwnProperty(i) && typeof n[i] == "object" && i.substring(0, 2) !== "__" && !t.find((s) => s === i) && (n[i] = y.cloneDeep(e[i]));
    return n;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let n;
    typeof t == "string" ? n = y.getElement(t) : n = t, n && n.appendChild(e);
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
    y.addElStyles(t, {
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
class Dt {
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
      let c;
      if (n.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(n, { ...n, y: e.y }, e) || !this.collide(n, { ...n, y: t.y - n.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const d = { ...t, y: n.y + n.h, ...o };
        c = this._loading && y.samePos(e, d) ? !0 : this.moveNode(e, d), (n.locked || this._loading) && c ? y.copyPos(t, e) : !n.locked && c && i.pack && (this._packNodes(), t.y = n.y + n.h, y.copyPos(e, t)), a = a || c;
      } else
        c = this.moveNode(n, { ...n, y: t.y + t.h, skip: e, ...o });
      if (!c)
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
    return this.nodes.find((a) => a._id !== i && a._id !== s && y.isIntercepted(a, t));
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
    return this.nodes.filter((a) => a._id !== i && a._id !== s && y.isIntercepted(a, t));
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
      const c = l._rect;
      let d = Number.MAX_VALUE, u = Number.MAX_VALUE;
      i.y < c.y ? d = (s.y + s.h - c.y) / c.h : i.y + i.h > c.y + c.h && (d = (c.y + c.h - s.y) / c.h), i.x < c.x ? u = (s.x + s.w - c.x) / c.w : i.x + i.w > c.x + c.w && (u = (c.x + c.w - s.x) / c.w);
      const h = Math.min(u, d);
      h > o && (o = h, a = l);
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
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (i = y.isTouching(e, t)))
      return n();
    if (i !== !1) {
      if (e.w === t.w && e.x === t.x && (i || (i = y.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return n();
      }
      if (i !== !1) {
        if (e.h === t.h && e.y === t.y && (i || (i = y.isTouching(e, t)))) {
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
      let c;
      a.locked || (a.autoPosition = !0, e === "list" && o && (c = l[o - 1])), this.addNode(a, !1, c);
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
    return this.nodes = y.sort(this.nodes, e), this;
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
    e._id = e._id ?? Dt._idSeq++;
    const n = e.id;
    if (n) {
      let s = 1;
      for (; this.nodes.find((a) => a.id === e.id && a !== e); )
        e.id = n + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const i = { x: 0, y: 0, w: 1, h: 1 };
    return y.defaults(e, i), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, y.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = i.x, e.autoPosition = !0), isNaN(e.y) && (e.y = i.y, e.autoPosition = !0), isNaN(e.w) && (e.w = i.w), isNaN(e.h) && (e.h = i.h), this.nodeBoundFix(e, t), e;
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
    const n = e._orig || y.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), y.samePos(e, n) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !y.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = y.copyPos({}, e), delete e._dirty;
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
      !e._orig || y.samePos(e, e._orig) || (y.copyPos(e, e._orig), e._dirty = !0);
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
      const l = o % n, c = Math.floor(o / n);
      if (l + e.w > n)
        continue;
      const d = { x: l, y: c, w: e.w, h: e.h };
      t.find((u) => y.isIntercepted(d, u)) || ((e.x !== l || e.y !== c) && (e._dirty = !0), e.x = l, e.y = c, delete e.autoPosition, a = !0);
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
    const i = new Dt({
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
      o && (y.copyPos(o, a), o._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new Dt({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((i) => ({ ...i }))
    }), n = { ...e };
    return this.cleanupNode(n), delete n.el, delete n._id, delete n.content, delete n.grid, t.addNode(n), t.getRow() <= this.maxRow ? (e._willFitPos = y.copyPos({}, n), !0) : !1;
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
    const i = e.w !== t.w || e.h !== t.h, s = y.copyPos({}, e, !0);
    if (y.copyPos(s, t), this.nodeBoundFix(s, i), y.copyPos(t, s), !t.forceCollide && y.samePos(e, t))
      return !1;
    const a = y.copyPos({}, e), o = this.collideAll(e, s, t.skip);
    let l = !0;
    if (o.length) {
      const c = e._moving && !t.nested;
      let d = c ? this.directionCollideCoverage(e, t, o) : o[0];
      if (c && d && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = y.areaIntercept(t.rect, d._rect), h = y.area(t.rect), p = y.area(d._rect);
        u / (h < p ? h : p) > 0.8 && (d.grid.makeSubGrid(d.el, void 0, e), d = void 0);
      }
      d ? l = !this._fixCollisions(e, s, d, t) : (l = !1, n && delete t.pack);
    }
    return l && !y.samePos(e, s) && (e._dirty = !0, y.copyPos(e, s)), t.pack && this._packNodes()._notify(), !y.samePos(e, a);
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
      const l = s?.find((d) => d._id === o._id), c = { ...o, ...l || {} };
      y.removeInternalForSave(c, !e), t && t(o, c), a.push(c);
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
    let s = [], a = i ? this.nodes : y.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const o = this._layouts[t] || [], l = this._layouts.length - 1;
      !o.length && e !== l && this._layouts[l]?.length && (e = l, this._layouts[l].forEach((c) => {
        const d = a.find((u) => u._id === c._id);
        d && (!i && !c.autoPosition && (d.x = c.x ?? d.x, d.y = c.y ?? d.y), d.w = c.w ?? d.w, (c.x == null || c.y === void 0) && (d.autoPosition = !0));
      })), o.forEach((c) => {
        const d = a.findIndex((u) => u._id === c._id);
        if (d !== -1) {
          const u = a[d];
          if (i) {
            u.w = c.w;
            return;
          }
          (c.autoPosition || isNaN(c.x) || isNaN(c.y)) && this.findEmptyPosition(c, s), c.autoPosition || (u.x = c.x ?? u.x, u.y = c.y ?? u.y, u.w = c.w ?? u.w, s.push(u)), a.splice(d, 1);
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
          const o = i || n === "none" ? 1 : t / e, l = n === "move" || n === "moveScale", c = n === "scale" || n === "moveScale";
          a.forEach((d) => {
            d.x = t === 1 ? 0 : l ? Math.round(d.x * o) : Math.min(d.x, t - 1), d.w = t === 1 || e === 1 ? 1 : c ? Math.round(d.w * o) || 1 : Math.min(d.w, t), s.push(d);
          }), a = [];
        }
      s = y.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((o) => {
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
        s._id = o?._id ?? Dt._idSeq++;
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
    e._id = e._id ?? Dt._idSeq++;
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
Dt._idSeq = 0;
const Ke = {
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
class K {
}
const ut = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class xt {
}
function rn(r, e) {
  r.touches.length > 1 || (r.cancelable && r.preventDefault(), y.simulateMouseEvent(r.changedTouches[0], e));
}
function ka(r, e) {
  r.cancelable && r.preventDefault(), y.simulateMouseEvent(r, e);
}
function nn(r) {
  xt.touchHandled || (xt.touchHandled = !0, rn(r, "mousedown"));
}
function sn(r) {
  xt.touchHandled && rn(r, "mousemove");
}
function an(r) {
  if (!xt.touchHandled)
    return;
  xt.pointerLeaveTimeout && (window.clearTimeout(xt.pointerLeaveTimeout), delete xt.pointerLeaveTimeout);
  const e = !!K.dragElement;
  rn(r, "mouseup"), e || rn(r, "click"), xt.touchHandled = !1;
}
function on(r) {
  r.pointerType !== "mouse" && r.target.releasePointerCapture(r.pointerId);
}
function Qi(r) {
  K.dragElement && r.pointerType !== "mouse" && ka(r, "mouseenter");
}
function es(r) {
  K.dragElement && r.pointerType !== "mouse" && (xt.pointerLeaveTimeout = window.setTimeout(() => {
    delete xt.pointerLeaveTimeout, ka(r, "mouseleave");
  }, 10));
}
class Rn {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Rn.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), ut && (this.el.addEventListener("touchstart", nn), this.el.addEventListener("pointerdown", on)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), ut && (this.el.removeEventListener("touchstart", nn), this.el.removeEventListener("pointerdown", on)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ut && (this.el.addEventListener("touchmove", sn), this.el.addEventListener("touchend", an)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ut && (this.el.removeEventListener("touchmove", sn), this.el.removeEventListener("touchend", an)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
Rn.prefix = "ui-resizable-";
class wi {
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
class Rr extends wi {
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
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), K.overResizeElement === this && delete K.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    K.overResizeElement || K.dragElement || (K.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    K.overResizeElement === this && (delete K.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Rn(this.el, e, {
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
    this.sizeToContent = y.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = y.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = y.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const n = y.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(n, this._ui()), this.triggerEvent("resize", n), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = y.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = Rr._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = y.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Rr._originStyleProp.forEach((e, t) => {
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
    const c = this._constrainSize(i.width, i.height, o, l);
    return Math.round(i.width) !== Math.round(c.width) && (t.indexOf("w") > -1 && (i.left += i.width - c.width), i.width = c.width), Math.round(i.height) !== Math.round(c.height) && (t.indexOf("n") > -1 && (i.top += i.height - c.height), i.height = c.height), i;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, n, i) {
    const s = this.option, a = (n ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, o = s.minWidth / this.rectScale.x || e, l = (i ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, c = s.minHeight / this.rectScale.y || t, d = Math.min(a, Math.max(o, e)), u = Math.min(l, Math.max(c, t));
    return { width: d, height: u };
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
Rr._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const vd = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class Nr extends wi {
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
      e.addEventListener("mousedown", this._mouseDown), ut && (e.addEventListener("touchstart", nn), e.addEventListener("pointerdown", on));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), ut && (t.removeEventListener("touchstart", nn), t.removeEventListener("pointerdown", on));
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
    if (!K.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(vd) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete K.dragElement, delete K.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ut && (e.currentTarget.addEventListener("touchmove", sn), e.currentTarget.addEventListener("touchend", an)), e.preventDefault(), document.activeElement && document.activeElement.blur(), K.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = y.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), K.pauseDrag) {
        const n = Number.isInteger(K.pauseDrag) ? K.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), n);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, K.dragElement = this;
      const n = this.el.gridstackNode?.grid;
      n ? K.dropElement = n.el.ddElement.ddDroppable : delete K.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = y.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = y.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ut && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", sn, !0), e.currentTarget.removeEventListener("touchend", an, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), K.dropElement?.el === this.el.parentElement && delete K.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = y.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), K.dropElement && K.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete K.dragElement, delete K.dropElement, delete K.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, n = t?.grid || K.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), n?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && n && (e.key === "r" || e.key === "R")) {
      if (!y.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, n.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", y.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = y.cloneNode(this.el)), e.parentElement || y.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = Nr.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", Nr.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = n, 50);
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
Nr.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class yd extends wi {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), ut && (this.el.addEventListener("pointerenter", Qi), this.el.addEventListener("pointerleave", es)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), ut && (this.el.removeEventListener("pointerenter", Qi), this.el.removeEventListener("pointerleave", es)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!K.dragElement || !this._canDrop(K.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), K.dropElement && K.dropElement !== this && K.dropElement._mouseLeave(e, !0), K.dropElement = this;
    const t = y.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(K.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!K.dragElement || K.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = y.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(n, this._ui(K.dragElement)), this.triggerEvent("dropout", n), K.dropElement === this && (delete K.dropElement, !t)) {
      let i, s = this.el.parentElement;
      for (; !i && s; )
        i = s.ddElement?.ddDroppable, s = s.parentElement;
      i && i._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = y.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(K.dragElement)), this.triggerEvent("drop", t);
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
class _i {
  static init(e) {
    return e.ddElement || (e.ddElement = new _i(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new Nr(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Rr(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new yd(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class bd {
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
        const c = !o.opts.alwaysShowResizeHandle;
        s.setupResizable({
          ...o.opts.resizable,
          handles: l,
          autoHide: c,
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
      n(s, K.dragElement ? K.dragElement.el : s.target, K.dragElement ? K.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", i = y.getElements(e);
    return i.length ? i.map((a) => a.ddElement || (n ? _i.init(a) : null)).filter((a) => a) : [];
  }
}
const Fe = new bd();
class U {
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
    const n = U.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new U(n, y.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (U.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new U(i, y.cloneDeep(e))), n.push(i.gridstack);
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
    return (!e.classList.contains("grid-stack") || U.addRemoveCB) && (U.addRemoveCB ? n = U.addRemoveCB(e, t, !0, !0) : n = y.createDiv(["grid-stack", t.class], e)), U.init(t, n);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    U.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = y.createDiv([this.opts.placeholderClass, Ke.itemClass, this.opts.itemClass]);
      const e = y.createDiv(["placeholder-content"], this._placeholder);
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
    const n = y.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const i = t.columnOpts;
    if (i) {
      const c = i.breakpoints;
      !i.columnWidth && !c?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, c?.length > 1 && c.sort((d, u) => (u.w || 0) - (d.w || 0)));
    }
    const s = {
      ...y.cloneDeep(Ke),
      column: y.toNumber(e.getAttribute("gs-column")) || Ke.column,
      minRow: n || y.toNumber(e.getAttribute("gs-min-row")) || Ke.minRow,
      maxRow: n || y.toNumber(e.getAttribute("gs-max-row")) || Ke.maxRow,
      staticGrid: y.toBool(e.getAttribute("gs-static")) || Ke.staticGrid,
      sizeToContent: y.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Ke.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Ke.removableOptions.accept,
        decline: Ke.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = y.toBool(e.getAttribute("gs-animate"))), t = y.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + Ke.itemClass)?.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Ke.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const c = t.cellHeight;
      delete t.cellHeight, this.cellHeight(c);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = ut), this._setStaticClass();
    const l = t.engineClass || U.engineClass || Dt;
    if (this.engine = new l({
      column: this.getColumn(),
      float: t.float,
      maxRow: t.maxRow,
      onChange: (c) => {
        c.forEach((d) => {
          const u = d.el;
          u && (d._removeDOM ? (u && u.remove(), delete d._removeDOM) : this._writePosAttr(u, d));
        }), this._updateContainerHeight();
      }
    }), t.auto && (this.batchUpdate(), this.engine._loading = !0, this.getGridItems().forEach((c) => this._prepareElement(c)), delete this.engine._loading, this.batchUpdate(!1)), t.children) {
      const c = t.children;
      delete t.children, c.length && this.load(c);
    }
    this.setAnimation(), t.subGridDynamic && !K.pauseDrag && (K.pauseDrag = !0), t.draggable?.pause !== void 0 && (K.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (n.grid = this, n.el ? t = n.el : U.addRemoveCB ? t = U.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
      return;
    if (n = t.gridstackNode, n && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === n._id))
      return t;
    const i = this._readAttr(t);
    return y.defaults(e, i), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = y.createDiv(["grid-stack-item", this.opts.itemClass]), n = y.createDiv(["grid-stack-item-content"], t);
    return y.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([i]) => {
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, U.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : U.renderCB(n, e), t;
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
    t = y.cloneDeep({
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
    let c = s.el.querySelector(".grid-stack-item-content"), d, u;
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, y.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), U.addRemoveCB ? d = U.addRemoveCB(this.el, u, !0, !1) : (d = y.createDiv(["grid-stack-item"]), d.appendChild(c), c = y.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const p = l ? t.column : s.w, g = s.h + n.h, b = s.el.style;
      b.transition = "none", this.update(s.el, { w: p, h: g }), setTimeout(() => b.transition = null);
    }
    const h = s.subGrid = U.addGrid(c, t);
    return n?._moving && (h._isTemp = !0), l && (h._autoColumn = !0), i && h.makeWidget(d, u), n && (n._moving ? window.setTimeout(() => y.simulateMouseEvent(n._event, "mouseenter", h.el), 0) : h.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((n) => {
      n.x += this.parentGridNode.x, n.y += this.parentGridNode.y, t.makeWidget(n.el, n);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => y.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, n = U.saveCB, i) {
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
      const a = y.cloneDeep(this.opts);
      a.marginBottom === a.marginTop && a.marginRight === a.marginLeft && a.marginTop === a.marginRight && (a.margin = a.marginTop, delete a.marginTop, delete a.marginRight, delete a.marginBottom, delete a.marginLeft), a.rtl === (this.el.style.direction === "rtl") && (a.rtl = "auto"), this._isAutoCellHeight && (a.cellHeight = "auto"), this._autoColumn && (a.column = "auto");
      const o = a._alwaysShowResizeHandle;
      return delete a._alwaysShowResizeHandle, o !== void 0 ? a.alwaysShowResizeHandle = o : delete a.alwaysShowResizeHandle, y.removeInternalAndSame(a, Ke), a.children = s, a;
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
  load(e, t = U.addRemoveCB || !0) {
    e = y.cloneDeep(e);
    const n = this.getColumn();
    e.forEach((d) => {
      d.w = d.w || d.minW || 1, d.h = d.h || d.minH || 1;
    }), e = y.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((d) => {
      i = Math.max(i, (d.x || 0) + d.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = U.addRemoveCB;
    typeof t == "function" && (U.addRemoveCB = t);
    const a = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, l = o && this.opts.animate;
    l && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      y.find(e, u.id) || (U.addRemoveCB && U.addRemoveCB(this.el, u, !1, !1), a.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const c = [];
    return this.engine.nodes = this.engine.nodes.filter((d) => y.find(e, d.id) ? (c.push(d), !1) : !0), e.forEach((d) => {
      const u = y.find(c, d.id);
      if (u) {
        if (y.shouldSizeToContent(u) && (d.h = u.h), this.engine.nodeBoundFix(d), (d.autoPosition || d.x === void 0 || d.y === void 0) && (d.w = d.w || u.w, d.h = d.h || u.h, this.engine.findEmptyPosition(d)), this.engine.nodes.push(u), y.samePos(u, d) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...d, forceCollide: !0 }), y.copyPos(d, u)), this.update(u.el, d), d.subGridOpts?.children) {
          const h = u.el.querySelector(".grid-stack");
          h && h.gridstack && h.gridstack.load(d.subGridOpts.children);
        }
      } else t && this.addWidget(d);
    }), delete this.engine._loading, this.engine.removedNodes = a, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? U.addRemoveCB = s : delete U.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const i = y.toNumber(t.getAttribute("gs-h")) || 1;
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
    const t = y.parseHeight(e);
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
    const n = U.getElement(e);
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
    return e ? (U.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((a) => i === a.el)), s && (t && U.addRemoveCB && U.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, n), t && i.parentElement && i.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && U.addRemoveCB && U.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
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
    return U.getElements(e).forEach((n) => {
      const i = n?.gridstackNode;
      if (!i)
        return;
      const s = { ...y.copyPos({}, i), ...y.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const a = ["x", "y", "w", "h"];
      let o;
      if (a.some((d) => s[d] !== void 0 && s[d] !== i[d]) && (o = {}, a.forEach((d) => {
        o[d] = s[d] !== void 0 ? s[d] : i[d], delete s[d];
      })), !o && (s.minW || s.minH || s.maxW || s.maxH) && (o = {}), s.content !== void 0) {
        const d = n.querySelector(".grid-stack-item-content");
        d && d.textContent !== s.content && (i.content = s.content, U.renderCB(d, s), i.subGrid?.el && (d.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, c = !1;
      for (const d in s)
        d[0] !== "_" && i[d] !== s[d] && (i[d] = s[d], l = !0, c = c || !this.opts.staticGrid && (d === "noResize" || d === "noMove" || d === "locked"));
      if (y.sanitizeMinMax(i), o) {
        const d = o.w !== void 0 && o.w !== i.w;
        this.moveNode(i, o), d && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(d, i), delete i._orig;
      }
      (o || l) && this._writeAttr(n, i), c && this.prepareDragDrop(i.el), U.updateCB && U.updateCB(i);
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
    if (t.resizeToContentParent && (a = e.querySelector(t.resizeToContentParent)), a || (a = e.querySelector(U.resizeToContentParent)), !a)
      return;
    const o = e.clientHeight - a.clientHeight, l = t.h ? t.h * i - o : a.clientHeight;
    let c;
    if (t.subGrid) {
      c = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const h = t.subGrid.el.getBoundingClientRect(), p = e.getBoundingClientRect();
      c += h.top - p.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const h = a.firstElementChild;
        if (!h) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${U.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        c = h.getBoundingClientRect().height || l;
      }
    }
    if (l === c)
      return;
    s += c - l;
    let d = Math.ceil(s / i);
    const u = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    u && d > u && (d = u, e.classList.add("size-to-content-max")), t.minH && d < t.minH ? d = t.minH : t.maxH && d > t.maxH && (d = t.maxH), d !== t.h && (n._ignoreLayoutsNodeChange = !0, n.moveNode(t, { h: d }), delete n._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    U.resizeToContentCB ? U.resizeToContentCB(e) : this.resizeToContent(e);
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
    return U.getElements(e).forEach((n) => {
      const i = n.gridstackNode;
      if (!y.canBeRotated(i))
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
      const n = y.parseHeight(e);
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
      const s = y.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === i) {
        const a = Math.floor(s.h / n);
        t < a && (t = a);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * n + i), e && y.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, n) {
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(Ke.itemClass, this.opts.itemClass);
    const i = y.shouldSizeToContent(n);
    return i ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), i && this.resizeToContentCheck(!1, n), y.lazyLoad(n) || this.prepareDragDrop(n.el), this;
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
    n.x = y.toNumber(e.getAttribute("gs-x")), n.y = y.toNumber(e.getAttribute("gs-y")), n.w = y.toNumber(e.getAttribute("gs-w")), n.h = y.toNumber(e.getAttribute("gs-h")), n.autoPosition = y.toBool(e.getAttribute("gs-auto-position")), n.noResize = y.toBool(e.getAttribute("gs-no-resize")), n.noMove = y.toBool(e.getAttribute("gs-no-move")), n.locked = y.toBool(e.getAttribute("gs-locked"));
    const i = e.getAttribute("gs-size-to-content");
    i && (i === "true" || i === "false" ? n.sizeToContent = y.toBool(i) : n.sizeToContent = parseInt(i, 10)), n.id = e.getAttribute("gs-id"), n.maxW = y.toNumber(e.getAttribute("gs-max-w")), n.minW = y.toNumber(e.getAttribute("gs-min-w")), n.maxH = y.toNumber(e.getAttribute("gs-max-h")), n.minH = y.toNumber(e.getAttribute("gs-min-h")), t && (n.w === 1 && e.removeAttribute("gs-w"), n.h === 1 && e.removeAttribute("gs-h"), n.maxW && e.removeAttribute("gs-max-w"), n.minW && e.removeAttribute("gs-min-w"), n.maxH && e.removeAttribute("gs-max-h"), n.minH && e.removeAttribute("gs-min-h"));
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
        y.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((n) => y.shouldSizeToContent(n))) {
        const n = [...this.engine.nodes];
        this.batchUpdate(), n.forEach((i) => {
          y.shouldSizeToContent(i) && this.resizeToContentCBCheck(i.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((n) => n.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = y.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return y.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return y.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return U.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return y.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, n = [];
    typeof this.opts.margin == "string" && (n = this.opts.margin.split(" ")), n.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = n[0], this.opts.marginLeft = this.opts.marginRight = n[1]) : n.length === 4 ? (this.opts.marginTop = n[0], this.opts.marginRight = n[1], this.opts.marginBottom = n[2], this.opts.marginLeft = n[3]) : (e = y.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((a) => {
      this.opts[a] === void 0 ? this.opts[a] = t : (e = y.parseHeight(this.opts[a]), this.opts[a] = e.h, delete this.opts.margin);
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
    return Fe;
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
    t?.pause !== void 0 && (K.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? y.getElements(e, i) : e).forEach((a, o) => {
      Fe.isDraggable(a) || Fe.dragIn(a, t), n?.[o] && (a.gridstackNode = n[o]);
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
    return this.opts.staticGrid ? this : (U.getElements(e).forEach((n) => {
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
    return this.opts.staticGrid ? this : (U.getElements(e).forEach((n) => {
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && U._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return Fe.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return Fe.droppable(this.el, "destroy"), this;
    let e, t;
    const n = (i, s, a) => {
      a = a || s;
      const o = a.gridstackNode;
      if (!o)
        return;
      if (!o.grid?.el) {
        a.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const h = a.getBoundingClientRect();
        a.style.left = h.x + (this.dragTransform.xScale - 1) * (i.clientX - h.x) / this.dragTransform.xScale + "px", a.style.top = h.y + (this.dragTransform.yScale - 1) * (i.clientY - h.y) / this.dragTransform.yScale + "px", a.style.transformOrigin = "0px 0px";
      }
      let { top: l, left: c } = a.getBoundingClientRect();
      const d = this.el.getBoundingClientRect();
      c -= d.left, l -= d.top;
      const u = {
        position: {
          top: l * this.dragTransform.xScale,
          left: c * this.dragTransform.yScale
        }
      };
      if (o._temporaryRemoved) {
        if (o.x = Math.max(0, Math.round(c / t)), o.y = Math.max(0, Math.round(l / e)), delete o.autoPosition, this.engine.nodeBoundFix(o), !this.engine.willItFit(o)) {
          if (o.autoPosition = !0, !this.engine.willItFit(o)) {
            Fe.off(s, "drag");
            return;
          }
          o._willFitPos && (y.copyPos(o, o._willFitPos), delete o._willFitPos);
        }
        this._onStartMoving(a, i, u, o, t, e);
      } else
        this._dragOrResize(a, i, u, o, t, e);
    };
    return Fe.droppable(this.el, {
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
        const d = a.getAttribute("data-gs-widget") || a.getAttribute("gridstacknode");
        if (d) {
          try {
            o = JSON.parse(d);
          } catch {
            console.error("Gridstack dropover: Bad JSON format: ", d);
          }
          a.removeAttribute("data-gs-widget"), a.removeAttribute("gridstacknode");
        }
        o || (o = this._readAttr(a)), o._sidebarOrig = { w: o.w, h: o.h };
      }
      o.grid || (o.el || (o = { ...o }), o._isExternal = !0, a.gridstackNode = o);
      const l = o.w || Math.round(a.offsetWidth / t) || 1, c = o.h || Math.round(a.offsetHeight / e) || 1;
      return o.grid && o.grid !== this ? (s._gridstackNodeOrig || (s._gridstackNodeOrig = o), s.gridstackNode = o = { ...o, w: l, h: c, grid: this }, delete o.x, delete o.y, this.engine.cleanupNode(o).nodeBoundFix(o), o._initDD = o._isExternal = // DOM needs to be re-parented on a drop
      o._temporaryRemoved = !0) : (o.w = l, o.h = c, o._temporaryRemoved = !0), U._itemRemoving(o.el, !1), Fe.on(s, "drag", n), n(i, s, a), !1;
    }).on(this.el, "dropout", (i, s, a) => {
      const o = a?.gridstackNode || s.gridstackNode;
      return o && (!o.grid || o.grid === this) && (this._leave(s, a), this._isTemp && this.removeAsSubGrid(o)), !1;
    }).on(this.el, "drop", (i, s, a) => {
      const o = a?.gridstackNode || s.gridstackNode;
      if (o?.grid === this && !o._isExternal)
        return !1;
      const l = !!this.placeholder.parentElement, c = s !== a;
      this.placeholder.remove(), delete this.placeholder.gridstackNode, l && this.opts.animate && (this.setAnimation(!1), this.setAnimation(!0, !0));
      const d = s._gridstackNodeOrig;
      if (delete s._gridstackNodeOrig, l && d?.grid && d.grid !== this) {
        const h = d.grid;
        h.engine.removeNodeFromLayoutCache(d), h.engine.removedNodes.push(d), h._triggerRemoveEvent()._triggerChangeEvent(), h.parentGridNode && !h.engine.nodes.length && h.opts.subGridDynamic && h.removeAsSubGrid();
      }
      if (!o || (l && (this.engine.cleanupNode(o), o.grid = this), delete o.grid?._isTemp, Fe.off(s, "drag"), a !== s ? (a.remove(), s = a) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = o.subGrid?.el?.gridstack;
      return y.copyPos(o, this._readAttr(this.placeholder)), y.removePositioningStyles(s), c && (o.content || o.subGridOpts || U.addRemoveCB) ? (delete o.el, s = this.addWidget(o)) : (this._prepareElement(s, !0, o), this.el.appendChild(s), this.resizeToContentCheck(!1, o), u && (u.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, d && d.grid ? d : void 0, o), !1;
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
    return e ? (!this.opts.staticGrid && !Fe.isDroppable(e) && Fe.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => U._itemRemoving(n, !0)).on(e, "dropout", (t, n) => U._itemRemoving(n, !1)), this) : this;
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
      const c = (h, p) => {
        this.triggerEvent(h, h.target), o = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, h, p, n, o, l);
      }, d = (h, p) => {
        this._dragOrResize(e, h, p, n, o, l);
      }, u = (h) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete n._moving, delete n._resizing, delete n._event, delete n._lastTried;
        const p = n.w !== n._orig.w, g = h.target;
        if (!(!g.gridstackNode || g.gridstackNode.grid !== this)) {
          if (n.el = g, n._isAboutToRemove) {
            const b = e.gridstackNode.grid;
            b._gsEventHandler[h.type] && b._gsEventHandler[h.type](h, g), b.engine.nodes.push(n), b.removeWidget(e, !0, !0);
          } else
            y.removePositioningStyles(g), n._temporaryRemoved ? (this._writePosAttr(g, n), this.engine.addNode(n)) : this._writePosAttr(g, n), this.triggerEvent(h, g);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), h.type === "resizestop" && (Number.isInteger(n.sizeToContent) && (n.sizeToContent = n.h), this.resizeToContentCheck(p, n));
        }
      };
      Fe.draggable(e, {
        start: c,
        stop: u,
        drag: d
      }).resizable(e, {
        start: c,
        stop: u,
        resize: d
      }), n._initDD = !0;
    }
    return Fe.draggable(e, i ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, n, i, s, a) {
    if (this.engine.cleanNodes().beginUpdate(i), this._writePosAttr(this.placeholder, i), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = i, i.grid?.el)
      this.dragTransform = y.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const o = this.placeholder.closest(".grid-stack");
      this.dragTransform = y.getValuesFromTransformedElement(o);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (i.el = this.placeholder, i._lastUiPosition = n.position, i._prevYPix = n.position.top, i._moving = t.type === "dragstart", i._resizing = t.type === "resizestart", delete i._lastTried, t.type === "dropover" && i._temporaryRemoved && (this.engine.addNode(i), i._moving = !0), this.engine.cacheRects(s, a, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const o = this.getColumn() - i.x, l = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - i.y;
      Fe.resizable(e, "option", "minWidth", s * Math.min(i.minW || 1, o)).resizable(e, "option", "minHeight", a * Math.min(i.minH || 1, l)).resizable(e, "option", "maxWidth", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, o)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, i.x + i.w)).resizable(e, "option", "maxHeight", a * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", a * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, i.y + i.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, n, i, s, a) {
    const o = { ...i._orig };
    let l, c = this.opts.marginLeft, d = this.opts.marginRight, u = this.opts.marginTop, h = this.opts.marginBottom;
    const p = Math.round(a * 0.1), g = Math.round(s * 0.1);
    if (c = Math.min(c, g), d = Math.min(d, g), u = Math.min(u, p), h = Math.min(h, p), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const _ = n.position.top - i._prevYPix;
      i._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && y.updateScrollPosition(e, n.position, _);
      const T = n.position.left + (n.position.left > i._lastUiPosition.left ? -d : c), D = n.position.top + (n.position.top > i._lastUiPosition.top ? -h : u);
      o.x = Math.round(T / s), o.y = Math.round(D / a);
      const S = this._extraDragRow;
      if (this.engine.collide(i, o)) {
        const O = this.getRow();
        let x = Math.max(0, o.y + i.h - O);
        this.opts.maxRow && O + x > this.opts.maxRow && (x = Math.max(0, this.opts.maxRow - O)), this._extraDragRow = x;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== S && this._updateContainerHeight(), i.x === o.x && i.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (y.updateScrollResize(t, e, a), o.w = Math.round((n.size.width - c) / s), o.h = Math.round((n.size.height - u) / a), i.w === o.w && i.h === o.h) || i._lastTried && i._lastTried.w === o.w && i._lastTried.h === o.h)
        return;
      const _ = n.position.left + c, T = n.position.top + u;
      o.x = Math.round(_ / s), o.y = Math.round(T / a), l = !0;
    }
    i._event = t, i._lastTried = o;
    const b = {
      x: n.position.left + c,
      y: n.position.top + u,
      w: (n.size ? n.size.width : i.w * s) - c - d,
      h: (n.size ? n.size.height : i.h * a) - u - h
    };
    if (this.engine.moveNodeCheck(i, { ...o, cellWidth: s, cellHeight: a, rect: b, resizing: l })) {
      i._lastUiPosition = n.position, this.engine.cacheRects(s, a, u, d, h, c), delete i._skipDown, l && i.subGrid && i.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const _ = t.target;
      i._sidebarOrig || this._writePosAttr(_, i), this.triggerEvent(t, _);
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
    if (!n || (t.style.transform = t.style.transformOrigin = null, Fe.off(e, "drag"), n._temporaryRemoved))
      return;
    n._temporaryRemoved = !0, this.engine.removeNode(n), n.el = n._isExternal && t ? t : e;
    const i = n._sidebarOrig;
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = i, this.opts.removable === !0 && U._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return gd(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
U.renderCB = (r, e) => {
  r && e?.content && (r.textContent = e.content);
};
U.resizeToContentParent = ".grid-stack-item-content";
U.Utils = y;
U.Engine = Dt;
U.GDRev = "12.3.2";
const Yr = /* @__PURE__ */ new WeakMap();
function xd({ children: r }) {
  const { _gridStack: { value: e, set: t }, options: n } = Ca(), i = Y(/* @__PURE__ */ new Map()), s = Y(null), a = Y(n), o = ue((d, u) => {
    if (u.id && u.grid) {
      let h = Yr.get(u.grid);
      h || (h = /* @__PURE__ */ new Map(), Yr.set(u.grid, h)), h.set(u.id, d), i.current.set(u.id, d);
    }
  }, []), l = ue(() => {
    if (s.current) {
      U.renderCB = o;
      const d = U.init(a.current, s.current);
      return d && a.current.handle && d.opts && (d.opts.handle = a.current.handle), d;
    }
    return null;
  }, [o]), c = (d, u) => {
    const { children: h, ...p } = d, { children: g, ...b } = u;
    return da(p, b);
  };
  return ni(() => {
    if (!c(n, a.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), Yr.delete(e), a.current = n, t(null);
      } catch (d) {
        console.error("Error destroying gridstack", d);
      }
    else e && (a.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), ni(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (d) {
        console.error("Error initializing gridstack", d);
      }
  }, [e, l, t]), f(Ea.Provider, {
    value: Z(() => ({
      getWidgetContainer: (d) => {
        if (e) {
          const u = Yr.get(e);
          if (u?.has(d))
            return u.get(d) || null;
        }
        return i.current.get(d) || null;
      }
    }), [e]),
    children: f("div", {
      ref: s,
      children: e ? r : null
    })
  });
}
const Ci = ({ options: r, widgets: e, onChange: t, className: n }) => {
  const i = Z(() => JSON.stringify(e.map((l) => ({
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
  }))), [e]), s = Z(() => ({
    ...r,
    class: n
  }), [r, i, n]), a = (l, c, d) => {
    let u = d[0], h = 1 / 0;
    for (const p of d) {
      const g = p.w - l, b = p.h - c, _ = g * g + b * b;
      _ < h && (h = _, u = p);
    }
    return u;
  };
  return f(hd, {
    options: s,
    widgets: e,
    onResizeStop: (l, c) => {
      const d = c.gridstackNode;
      if (!d) return;
      const u = c.gridstackNode?.allowedSizes ?? [];
      if (u.length === 0)
        return;
      const h = a(d.w ?? 1, d.h ?? 1, u ?? []);
      (d.w !== h.w || d.h !== h.h) && d.grid?.update(c, {
        w: h.w,
        h: h.h
      });
    },
    onChange: t,
    children: f(xd, {
      children: f(pd, {})
    })
  });
};
Ci.displayName = "F0GridStack";
const wd = (r, e, t) => f("div", {
  children: r
}), Nn = ({ widgets: r = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: n = wd, main: i = !1, deps: s }) => {
  const a = ue((x, E, C) => f(bi.div, {
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
    children: n(x, E, C)
  }), [n]), o = Z(() => ({
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
  }), []), l = (x, E) => {
    if (typeof x.content == "function" && x.deps && E) {
      const C = {};
      return x.deps.forEach((N) => {
        typeof N == "string" && E[N] !== void 0 && (C[N] = E[N]);
      }), x.content(C);
    }
    return typeof x.content == "function" ? null : x.content;
  }, c = (x, E, C) => x.map((N) => {
    const V = l(N, C), I = {
      id: N.id,
      h: N.h ?? 1,
      w: N.w ?? 1,
      allowedSizes: N.availableSizes,
      noMove: !E,
      noResize: !E,
      locked: N.locked,
      meta: N.meta,
      _originalContent: V,
      content: a(V, N.meta, E)
    };
    return N.x !== void 0 && (I.x = N.x), N.y !== void 0 && (I.y = N.y), I;
  }), [d, u] = te(c(r, e)), h = Y(e), p = Y(r), g = Y(!1), b = Y(/* @__PURE__ */ new Map()), _ = Y(r);
  _.current = r;
  const T = Y(s), D = Z(() => {
    const x = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || r.forEach((E) => {
      if (E.deps && E.deps.length > 0) {
        const C = E.deps.map((N) => typeof N == "string" && s[N] !== void 0 ? s[N] : N).filter((N) => N !== null);
        x.set(E.id, C);
      }
    }), x;
  }, [r, s]), S = ue((x) => {
    u(x), g.current || t(x.map((E) => {
      const C = _.current.find((N) => N.id === E.id);
      return {
        id: E.id,
        w: E.w ?? 1,
        h: E.h ?? 1,
        allowedSizes: E.allowedSizes,
        meta: E.meta,
        content: typeof C?.content == "function" ? C.content : E._originalContent,
        x: E.x ?? 0,
        y: E.y ?? 0,
        locked: E.locked,
        deps: C?.deps
      };
    })), g.current = !1;
  }, [t]), O = (x, E) => !x && !E ? !1 : !x || !E || x.length !== E.length ? !0 : x.some((C, N) => C !== E[N]);
  return X(() => {
    const x = h.current !== e, E = p.current !== r, C = T.current !== s && (T.current === void 0 || s === void 0 || Object.keys(T.current).length !== Object.keys(s).length || Object.keys(s).some((R) => T.current?.[R] !== s[R])), N = /* @__PURE__ */ new Map();
    r.forEach((R) => {
      if (R.deps && R.deps.length > 0) {
        const k = b.current.get(R.id), A = D.get(R.id);
        N.set(R.id, O(k, A)), A ? b.current.set(R.id, A) : b.current.delete(R.id);
      }
    });
    const V = new Set(r.map((R) => R.id));
    b.current.forEach((R, k) => {
      V.has(k) || b.current.delete(k);
    });
    const I = Array.from(N.values()).some((R) => R) || C;
    x && !E && !I ? (g.current = !0, u((R) => R.map((k) => {
      const A = r.find((ie) => ie.id === k.id);
      if (!A)
        return k;
      const $ = l(A, s);
      return {
        ...k,
        noMove: !e,
        noResize: !e,
        locked: A.locked,
        meta: A.meta,
        _originalContent: $,
        content: a($, A.meta, e)
      };
    }))) : (E || I) && u((R) => {
      const k = new Map(R.map((A) => [A.id, A]));
      return r.map((A) => {
        const $ = k.get(A.id), ie = N.get(A.id) ?? !1;
        let fe;
        ie || !$ ? fe = l(A, s) : fe = $._originalContent ?? l(A, s);
        const ne = {
          id: A.id,
          h: $?.h ?? A.h ?? 1,
          w: $?.w ?? A.w ?? 1,
          allowedSizes: A.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: A.locked,
          meta: A.meta,
          _originalContent: fe,
          content: a(fe, A.meta, e)
        }, ce = $?.x ?? A.x, oe = $?.y ?? A.y;
        return ce !== void 0 && (ne.x = ce), oe !== void 0 && (ne.y = oe), ne;
      });
    }), h.current = e, p.current = r, T.current = s;
  }, [r, e, a, D, s]), f(Ci, {
    className: se(i && "h-full flex-1 overflow-auto"),
    options: o,
    onChange: S,
    widgets: d
  });
};
Nn.displayName = "GroupGrid";
Nn.__isPageLayoutGroup = !0;
const _d = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutBlock = !0, t;
}, Cd = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutGroup = !0, t;
}, Ed = (r, e) => f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: e,
  ...r,
  children: f("path", {
    fill: "currentColor",
    d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
    vectorEffect: "non-scaling-stroke"
  })
}), Sa = Ge(Ed), kd = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], Da = Ge((r, e) => {
  const t = kd.reduce((n, i) => {
    const { [i]: s, ...a } = n;
    return a;
  }, r);
  return f(xi, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: r.icon == Sa
  });
});
Da.displayName = "AIButton";
const Gn = Vt({
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
}), Sd = {
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
}, Ei = Ge(({ content: r, variant: e, align: t, className: n, as: i, ellipsis: s, noEllipsisTooltip: a, markdown: o, ...l }, c) => {
  const d = i ?? Sd[e ?? "body"];
  if (s !== void 0)
    return f(fl, {
      ref: c,
      lines: typeof s == "number" ? s : 1,
      noTooltip: a,
      tag: d,
      className: se(Gn({
        variant: e,
        align: t
      }), n),
      markdown: o,
      ...l,
      children: r
    });
  if (o) {
    const u = ml(r);
    return qi(d, {
      ...l,
      className: se(Gn({
        variant: e,
        align: t
      }), n),
      ref: c,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return qi(d, {
    ...l,
    className: se(Gn({
      variant: e,
      align: t
    }), n),
    ref: c
  }, r);
});
Ei.displayName = "Text";
const Ra = Ge((r, e) => f(Ei, {
  ref: e,
  markdown: r.markdown ?? !0,
  ...r
}));
Ra.displayName = "F0Text";
const Bp = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Na = ({ title: r, draggable: e = !1, onDragStart: t, onDragEnd: n, isDragging: i = !1, AIButton: s, actions: a, children: o, selected: l = !1 }) => {
  const [c, d] = te(!1), [u, h] = te(!1), p = zr(), g = (_) => {
    d(_);
  }, b = u || c;
  return X(() => {
    if (!i || !n) return;
    const _ = () => {
      n();
    };
    return document.addEventListener("mouseup", _), () => {
      document.removeEventListener("mouseup", _);
    };
  }, [i, n]), j("div", {
    className: se("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && c ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [j("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [j("div", {
        className: se("flex min-w-0 flex-1 items-center", !e && "pl-4", !a && !s && "pr-4"),
        children: [e && f("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: f(Dn, {
            icon: pl,
            size: "xs"
          })
        }), f("div", {
          className: se("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: f(Ra, {
            variant: "label",
            content: r,
            ellipsis: !0
          })
        })]
      }), f(gl, {
        children: (s || a) && b && j(bi.div, {
          className: se("flex shrink-0 items-center gap-0.5 pr-2", !a && "pr-4"),
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
          children: [s && f("div", {
            className: "flex h-6 items-center",
            children: f(Da, {
              size: "sm",
              label: p.ai.ask,
              onClick: s,
              icon: Sa
            })
          }), a && f(vl, {
            items: a,
            open: c,
            onOpenChange: g,
            align: "end",
            children: f(xi, {
              icon: yl,
              label: "Actions",
              variant: "ghost",
              size: "md",
              hideLabel: !0,
              noAutoTooltip: !0,
              noTitle: !0,
              pressed: c
            })
          })]
        })
      })]
    }), f("div", {
      className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4",
      children: o
    })]
  });
}, Dd = () => j("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [f("div", {
    className: "flex h-12 w-full items-center px-4",
    children: f(bt, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), j("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [f(bt, {
      className: "h-1/2 w-full rounded-sm"
    }), f(bt, {
      className: "h-1/3 w-full rounded-sm"
    }), f(bt, {
      className: "h-1/5 w-full rounded-sm"
    }), f(bt, {
      className: "h-1/3 w-full rounded-sm"
    }), f(bt, {
      className: "h-full w-full rounded-sm"
    }), f(bt, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
Na.displayName = "F0Widget";
const Rd = Ys(Na, Dd), Nd = ({ children: r, title: e, draggable: t = !1, actions: n, aiButton: i }) => f(Rd, {
  title: e,
  draggable: t,
  actions: n,
  AIButton: i,
  children: r
}), Aa = ({ widgets: r, editMode: e = !1, onChange: t = () => {
}, deps: n, ...i }) => f(Nn, {
  widgets: r,
  editMode: e,
  onChange: t,
  deps: n,
  ...i,
  WidgetWrapper: (s, a, o) => f(Nd, {
    title: a?.title ?? "",
    draggable: o,
    actions: a?.actions,
    aiButton: a?.aiButton,
    children: s
  })
});
Aa.displayName = "Dashboard";
const Ad = Cd("Dashboard", Aa), Hp = st("Dashboard", Ad), Td = Vt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Od = (r) => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), Md = (r) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(r) ? r.every(e) ? [{
    items: r
  }] : r : [r];
}, An = Ge(({ children: r, variant: e = "default", className: t, draggable: n = !1, onDragStart: i, onDragEnd: s, onDrop: a, dragId: o, primaryAction: l, ...c }, d) => {
  const u = Z(() => Md(c.actions || []), [c.actions]), h = Z(() => u.flatMap((g) => g.items), [u]), p = Z(() => h.length > 0 || !!l, [h, l]);
  return j("div", {
    ref: d,
    className: se(Td({
      variant: e
    }), "relative", t),
    draggable: n,
    onDragStart: i,
    onDragEnd: s,
    onDrop: a,
    "data-drag-id": o,
    ...c,
    children: [p && j("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, h.length > 0 && f(uc, {
        items: Od(u)
      })]
    }), f("div", {
      children: r
    })]
  });
});
An.displayName = "Block";
An.__isPageLayoutBlock = !0;
const Id = ({ title: r = "", description: e, titleLevel: t = "h2", children: n, className: i, ...s }) => {
  if (!r) return null;
  const a = t;
  return j(An, {
    ...s,
    className: se("space-y-4", i),
    children: [j("div", {
      className: "space-y-2",
      children: [f(a, {
        className: se("font-semibold text-f1-foreground", {
          "text-2xl": t === "h1",
          "text-xl": t === "h2",
          "text-lg": t === "h3",
          "text-base": t === "h4",
          "text-sm": t === "h5",
          "text-xs": t === "h6"
        }),
        children: r
      }), e && f("p", {
        className: "text-sm text-f1-foreground-secondary",
        children: e
      })]
    }), f("div", {
      className: "flex-1",
      children: n
    })]
  });
}, Ld = _d("BlockContent", Id), Pd = (r) => !oa(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutBlock" in r.type, zd = (r) => !oa(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutGroup" in r.type, Ta = (r, e, t) => {
  const n = tn.toArray(e);
  for (const i of n)
    t.includes("block") && Pd(i) || t.includes("group") && zd(i) || console.warn(
      `${r}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, ki = Ge(({ children: r, onSort: e, ...t }, n) => {
  Ta("GroupLinear", r, ["block"]);
  const [i, s] = te(tn.toArray(r));
  return X(() => {
    s(tn.toArray(r));
  }, [r]), X(() => {
    e?.(i);
  }, [i, e]), f("div", {
    ref: n,
    ...t,
    children: i.map((a, o) => f(sc, {
      children: a
    }, o))
  });
});
ki.displayName = "GroupLinear";
ki.__isPageLayoutGroup = !0;
function Fd() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return Z(
    () => (n) => {
      e.forEach((i) => i(n));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const Tn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function dr(r) {
  const e = Object.prototype.toString.call(r);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Si(r) {
  return "nodeType" in r;
}
function He(r) {
  var e, t;
  return r ? dr(r) ? r : Si(r) && (e = (t = r.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Di(r) {
  const {
    Document: e
  } = He(r);
  return r instanceof e;
}
function Br(r) {
  return dr(r) ? !1 : r instanceof He(r).HTMLElement;
}
function Oa(r) {
  return r instanceof He(r).SVGElement;
}
function ur(r) {
  return r ? dr(r) ? r.document : Si(r) ? Di(r) ? r : Br(r) || Oa(r) ? r.ownerDocument : document : document : document;
}
const mt = Tn ? ni : X;
function On(r) {
  const e = Y(r);
  return mt(() => {
    e.current = r;
  }), ue(function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function Bd() {
  const r = Y(null), e = ue((n, i) => {
    r.current = setInterval(n, i);
  }, []), t = ue(() => {
    r.current !== null && (clearInterval(r.current), r.current = null);
  }, []);
  return [e, t];
}
function Ar(r, e) {
  e === void 0 && (e = [r]);
  const t = Y(r);
  return mt(() => {
    t.current !== r && (t.current = r);
  }, e), t;
}
function Hr(r, e) {
  const t = Y();
  return Z(
    () => {
      const n = r(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function ln(r) {
  const e = On(r), t = Y(null), n = ue(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function cn(r) {
  const e = Y();
  return X(() => {
    e.current = r;
  }, [r]), e.current;
}
let Un = {};
function Vr(r, e) {
  return Z(() => {
    if (e)
      return e;
    const t = Un[r] == null ? 0 : Un[r] + 1;
    return Un[r] = t, r + "-" + t;
  }, [r, e]);
}
function Ma(r) {
  return function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      n[i - 1] = arguments[i];
    return n.reduce((s, a) => {
      const o = Object.entries(a);
      for (const [l, c] of o) {
        const d = s[l];
        d != null && (s[l] = d + r * c);
      }
      return s;
    }, {
      ...e
    });
  };
}
const nr = /* @__PURE__ */ Ma(1), Tr = /* @__PURE__ */ Ma(-1);
function Hd(r) {
  return "clientX" in r && "clientY" in r;
}
function Mn(r) {
  if (!r)
    return !1;
  const {
    KeyboardEvent: e
  } = He(r.target);
  return e && r instanceof e;
}
function Vd(r) {
  if (!r)
    return !1;
  const {
    TouchEvent: e
  } = He(r.target);
  return e && r instanceof e;
}
function dn(r) {
  if (Vd(r)) {
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
  return Hd(r) ? {
    x: r.clientX,
    y: r.clientY
  } : null;
}
const Ft = /* @__PURE__ */ Object.freeze({
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
        return [Ft.Translate.toString(r), Ft.Scale.toString(r)].join(" ");
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
}), ts = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function jd(r) {
  return r.matches(ts) ? r : r.querySelector(ts);
}
const $d = {
  display: "none"
};
function Wd(r) {
  let {
    id: e,
    value: t
  } = r;
  return B.createElement("div", {
    id: e,
    style: $d
  }, t);
}
function Gd(r) {
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
  return B.createElement("div", {
    id: e,
    style: i,
    role: "status",
    "aria-live": n,
    "aria-atomic": !0
  }, t);
}
function Ud() {
  const [r, e] = te("");
  return {
    announce: ue((n) => {
      n != null && e(n);
    }, []),
    announcement: r
  };
}
const Ia = /* @__PURE__ */ Et(null);
function Zd(r) {
  const e = ft(Ia);
  X(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(r);
  }, [r, e]);
}
function qd() {
  const [r] = te(() => /* @__PURE__ */ new Set()), e = ue((n) => (r.add(n), () => r.delete(n)), [r]);
  return [ue((n) => {
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
const Yd = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Kd = {
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
function Xd(r) {
  let {
    announcements: e = Kd,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = Yd
  } = r;
  const {
    announce: s,
    announcement: a
  } = Ud(), o = Vr("DndLiveRegion"), [l, c] = te(!1);
  if (X(() => {
    c(!0);
  }, []), Zd(Z(() => ({
    onDragStart(u) {
      let {
        active: h
      } = u;
      s(e.onDragStart({
        active: h
      }));
    },
    onDragMove(u) {
      let {
        active: h,
        over: p
      } = u;
      e.onDragMove && s(e.onDragMove({
        active: h,
        over: p
      }));
    },
    onDragOver(u) {
      let {
        active: h,
        over: p
      } = u;
      s(e.onDragOver({
        active: h,
        over: p
      }));
    },
    onDragEnd(u) {
      let {
        active: h,
        over: p
      } = u;
      s(e.onDragEnd({
        active: h,
        over: p
      }));
    },
    onDragCancel(u) {
      let {
        active: h,
        over: p
      } = u;
      s(e.onDragCancel({
        active: h,
        over: p
      }));
    }
  }), [s, e])), !l)
    return null;
  const d = B.createElement(B.Fragment, null, B.createElement(Wd, {
    id: n,
    value: i.draggable
  }), B.createElement(Gd, {
    id: o,
    announcement: a
  }));
  return t ? la(d, t) : d;
}
var Ae;
(function(r) {
  r.DragStart = "dragStart", r.DragMove = "dragMove", r.DragEnd = "dragEnd", r.DragCancel = "dragCancel", r.DragOver = "dragOver", r.RegisterDroppable = "registerDroppable", r.SetDroppableDisabled = "setDroppableDisabled", r.UnregisterDroppable = "unregisterDroppable";
})(Ae || (Ae = {}));
function un() {
}
function rs(r, e) {
  return Z(
    () => ({
      sensor: r,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, e]
  );
}
function Jd() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return Z(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const pt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Qd(r, e) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function eu(r, e) {
  const t = dn(r);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function tu(r, e) {
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
function ru(r, e) {
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
function ns(r) {
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
function La(r, e) {
  if (!r || r.length === 0)
    return null;
  const [t] = r;
  return t[e];
}
const nu = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = ns(e), s = [];
  for (const a of n) {
    const {
      id: o
    } = a, l = t.get(o);
    if (l) {
      const c = ns(l), d = i.reduce((h, p, g) => h + Qd(c[g], p), 0), u = Number((d / 4).toFixed(4));
      s.push({
        id: o,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(tu);
};
function iu(r, e) {
  const t = Math.max(e.top, r.top), n = Math.max(e.left, r.left), i = Math.min(e.left + e.width, r.left + r.width), s = Math.min(e.top + e.height, r.top + r.height), a = i - n, o = s - t;
  if (n < i && t < s) {
    const l = e.width * e.height, c = r.width * r.height, d = a * o, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const su = (r) => {
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
      const l = iu(o, e);
      l > 0 && i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(ru);
};
function au(r, e, t) {
  return {
    ...r,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Pa(r, e) {
  return r && e ? {
    x: r.left - e.left,
    y: r.top - e.top
  } : pt;
}
function ou(r) {
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
const lu = /* @__PURE__ */ ou(1);
function za(r) {
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
function cu(r, e, t) {
  const n = za(e);
  if (!n)
    return r;
  const {
    scaleX: i,
    scaleY: s,
    x: a,
    y: o
  } = n, l = r.left - a - (1 - i) * parseFloat(t), c = r.top - o - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), d = i ? r.width / i : r.width, u = s ? r.height / s : r.height;
  return {
    width: d,
    height: u,
    top: c,
    right: l + d,
    bottom: c + u,
    left: l
  };
}
const du = {
  ignoreTransform: !1
};
function hr(r, e) {
  e === void 0 && (e = du);
  let t = r.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = He(r).getComputedStyle(r);
    c && (t = cu(t, c, d));
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
function is(r) {
  return hr(r, {
    ignoreTransform: !0
  });
}
function uu(r) {
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
function hu(r, e) {
  return e === void 0 && (e = He(r).getComputedStyle(r)), e.position === "fixed";
}
function fu(r, e) {
  e === void 0 && (e = He(r).getComputedStyle(r));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function In(r, e) {
  const t = [];
  function n(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Di(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!Br(i) || Oa(i) || t.includes(i))
      return t;
    const s = He(r).getComputedStyle(i);
    return i !== r && fu(i, s) && t.push(i), hu(i, s) ? t : n(i.parentNode);
  }
  return r ? n(r) : t;
}
function Fa(r) {
  const [e] = In(r, 1);
  return e ?? null;
}
function Zn(r) {
  return !Tn || !r ? null : dr(r) ? r : Si(r) ? Di(r) || r === ur(r).scrollingElement ? window : Br(r) ? r : null : null;
}
function Ba(r) {
  return dr(r) ? r.scrollX : r.scrollLeft;
}
function Ha(r) {
  return dr(r) ? r.scrollY : r.scrollTop;
}
function si(r) {
  return {
    x: Ba(r),
    y: Ha(r)
  };
}
var Te;
(function(r) {
  r[r.Forward = 1] = "Forward", r[r.Backward = -1] = "Backward";
})(Te || (Te = {}));
function Va(r) {
  return !Tn || !r ? !1 : r === document.scrollingElement;
}
function ja(r) {
  const e = {
    x: 0,
    y: 0
  }, t = Va(r) ? {
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
const mu = {
  x: 0.2,
  y: 0.2
};
function pu(r, e, t, n, i) {
  let {
    top: s,
    left: a,
    right: o,
    bottom: l
  } = t;
  n === void 0 && (n = 10), i === void 0 && (i = mu);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: h
  } = ja(r), p = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, b = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !c && s <= e.top + b.height ? (p.y = Te.Backward, g.y = n * Math.abs((e.top + b.height - s) / b.height)) : !d && l >= e.bottom - b.height && (p.y = Te.Forward, g.y = n * Math.abs((e.bottom - b.height - l) / b.height)), !h && o >= e.right - b.width ? (p.x = Te.Forward, g.x = n * Math.abs((e.right - b.width - o) / b.width)) : !u && a <= e.left + b.width && (p.x = Te.Backward, g.x = n * Math.abs((e.left + b.width - a) / b.width)), {
    direction: p,
    speed: g
  };
}
function gu(r) {
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
function $a(r) {
  return r.reduce((e, t) => nr(e, si(t)), pt);
}
function vu(r) {
  return r.reduce((e, t) => e + Ba(t), 0);
}
function yu(r) {
  return r.reduce((e, t) => e + Ha(t), 0);
}
function Wa(r, e) {
  if (e === void 0 && (e = hr), !r)
    return;
  const {
    top: t,
    left: n,
    bottom: i,
    right: s
  } = e(r);
  Fa(r) && (i <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && r.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const bu = [["x", ["left", "right"], vu], ["y", ["top", "bottom"], yu]];
class Ri {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = In(t), i = $a(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, a, o] of bu)
      for (const l of a)
        Object.defineProperty(this, l, {
          get: () => {
            const c = o(n), d = i[s] - c;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class wr {
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
function xu(r) {
  const {
    EventTarget: e
  } = He(r);
  return r instanceof e ? r : ur(r);
}
function qn(r, e) {
  const t = Math.abs(r.x), n = Math.abs(r.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var nt;
(function(r) {
  r.Click = "click", r.DragStart = "dragstart", r.Keydown = "keydown", r.ContextMenu = "contextmenu", r.Resize = "resize", r.SelectionChange = "selectionchange", r.VisibilityChange = "visibilitychange";
})(nt || (nt = {}));
function ss(r) {
  r.preventDefault();
}
function wu(r) {
  r.stopPropagation();
}
var de;
(function(r) {
  r.Space = "Space", r.Down = "ArrowDown", r.Right = "ArrowRight", r.Left = "ArrowLeft", r.Up = "ArrowUp", r.Esc = "Escape", r.Enter = "Enter", r.Tab = "Tab";
})(de || (de = {}));
const Ga = {
  start: [de.Space, de.Enter],
  cancel: [de.Esc],
  end: [de.Space, de.Enter, de.Tab]
}, _u = (r, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (r.code) {
    case de.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case de.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case de.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case de.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Ni {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new wr(ur(t)), this.windowListeners = new wr(He(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(nt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && Wa(n), t(pt);
  }
  handleKeyDown(e) {
    if (Mn(e)) {
      const {
        active: t,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: s = Ga,
        coordinateGetter: a = _u,
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
        collisionRect: c
      } = n.current, d = c ? {
        x: c.left,
        y: c.top
      } : pt;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = a(e, {
        active: t,
        context: n.current,
        currentCoordinates: d
      });
      if (u) {
        const h = Tr(u, d), p = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = n.current;
        for (const b of g) {
          const _ = e.code, {
            isTop: T,
            isRight: D,
            isLeft: S,
            isBottom: O,
            maxScroll: x,
            minScroll: E
          } = ja(b), C = gu(b), N = {
            x: Math.min(_ === de.Right ? C.right - C.width / 2 : C.right, Math.max(_ === de.Right ? C.left : C.left + C.width / 2, u.x)),
            y: Math.min(_ === de.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(_ === de.Down ? C.top : C.top + C.height / 2, u.y))
          }, V = _ === de.Right && !D || _ === de.Left && !S, I = _ === de.Down && !O || _ === de.Up && !T;
          if (V && N.x !== u.x) {
            const R = b.scrollLeft + h.x, k = _ === de.Right && R <= x.x || _ === de.Left && R >= E.x;
            if (k && !h.y) {
              b.scrollTo({
                left: R,
                behavior: o
              });
              return;
            }
            k ? p.x = b.scrollLeft - R : p.x = _ === de.Right ? b.scrollLeft - x.x : b.scrollLeft - E.x, p.x && b.scrollBy({
              left: -p.x,
              behavior: o
            });
            break;
          } else if (I && N.y !== u.y) {
            const R = b.scrollTop + h.y, k = _ === de.Down && R <= x.y || _ === de.Up && R >= E.y;
            if (k && !h.x) {
              b.scrollTo({
                top: R,
                behavior: o
              });
              return;
            }
            k ? p.y = b.scrollTop - R : p.y = _ === de.Down ? b.scrollTop - x.y : b.scrollTop - E.y, p.y && b.scrollBy({
              top: -p.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, nr(Tr(u, this.referenceCoordinates), p));
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
Ni.activators = [{
  eventName: "onKeyDown",
  handler: (r, e, t) => {
    let {
      keyboardCodes: n = Ga,
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
function as(r) {
  return !!(r && "distance" in r);
}
function os(r) {
  return !!(r && "delay" in r);
}
class Ai {
  constructor(e, t, n) {
    var i;
    n === void 0 && (n = xu(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: a
    } = s;
    this.props = e, this.events = t, this.document = ur(a), this.documentListeners = new wr(this.document), this.listeners = new wr(n), this.windowListeners = new wr(He(a)), this.initialCoordinates = (i = dn(s)) != null ? i : pt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.DragStart, ss), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), this.windowListeners.add(nt.ContextMenu, ss), this.documentListeners.add(nt.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (os(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (as(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(nt.Click, wu, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(nt.SelectionChange, this.removeTextSelection), t(e));
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
    const l = (t = dn(e)) != null ? t : pt, c = Tr(i, l);
    if (!n && o) {
      if (as(o)) {
        if (o.tolerance != null && qn(c, o.tolerance))
          return this.handleCancel();
        if (qn(c, o.distance))
          return this.handleStart();
      }
      if (os(o) && qn(c, o.tolerance))
        return this.handleCancel();
      this.handlePending(o, c);
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
    e.code === de.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Cu = {
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
class Ti extends Ai {
  constructor(e) {
    const {
      event: t
    } = e, n = ur(t.target);
    super(e, Cu, n);
  }
}
Ti.activators = [{
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
const Eu = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ai;
(function(r) {
  r[r.RightClick = 2] = "RightClick";
})(ai || (ai = {}));
class ku extends Ai {
  constructor(e) {
    super(e, Eu, ur(e.event.target));
  }
}
ku.activators = [{
  eventName: "onMouseDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    return t.button === ai.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Yn = {
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
class Su extends Ai {
  constructor(e) {
    super(e, Yn);
  }
  static setup() {
    return window.addEventListener(Yn.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Yn.move.name, e);
    };
    function e() {
    }
  }
}
Su.activators = [{
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
var _r;
(function(r) {
  r[r.Pointer = 0] = "Pointer", r[r.DraggableRect = 1] = "DraggableRect";
})(_r || (_r = {}));
var hn;
(function(r) {
  r[r.TreeOrder = 0] = "TreeOrder", r[r.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(hn || (hn = {}));
function Du(r) {
  let {
    acceleration: e,
    activator: t = _r.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: s,
    interval: a = 5,
    order: o = hn.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: h
  } = r;
  const p = Nu({
    delta: u,
    disabled: !s
  }), [g, b] = Bd(), _ = Y({
    x: 0,
    y: 0
  }), T = Y({
    x: 0,
    y: 0
  }), D = Z(() => {
    switch (t) {
      case _r.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case _r.DraggableRect:
        return i;
    }
  }, [t, i, l]), S = Y(null), O = ue(() => {
    const E = S.current;
    if (!E)
      return;
    const C = _.current.x * T.current.x, N = _.current.y * T.current.y;
    E.scrollBy(C, N);
  }, []), x = Z(() => o === hn.TreeOrder ? [...c].reverse() : c, [o, c]);
  X(
    () => {
      if (!s || !c.length || !D) {
        b();
        return;
      }
      for (const E of x) {
        if (n?.(E) === !1)
          continue;
        const C = c.indexOf(E), N = d[C];
        if (!N)
          continue;
        const {
          direction: V,
          speed: I
        } = pu(E, N, D, e, h);
        for (const R of ["x", "y"])
          p[R][V[R]] || (I[R] = 0, V[R] = 0);
        if (I.x > 0 || I.y > 0) {
          b(), S.current = E, g(O, a), _.current = I, T.current = V;
          return;
        }
      }
      _.current = {
        x: 0,
        y: 0
      }, T.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      O,
      n,
      b,
      s,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(D),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p),
      g,
      c,
      x,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Ru = {
  x: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  },
  y: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  }
};
function Nu(r) {
  let {
    delta: e,
    disabled: t
  } = r;
  const n = cn(e);
  return Hr((i) => {
    if (t || !n || !i)
      return Ru;
    const s = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [Te.Backward]: i.x[Te.Backward] || s.x === -1,
        [Te.Forward]: i.x[Te.Forward] || s.x === 1
      },
      y: {
        [Te.Backward]: i.y[Te.Backward] || s.y === -1,
        [Te.Forward]: i.y[Te.Forward] || s.y === 1
      }
    };
  }, [t, e, n]);
}
function Au(r, e) {
  const t = e != null ? r.get(e) : void 0, n = t ? t.node.current : null;
  return Hr((i) => {
    var s;
    return e == null ? null : (s = n ?? i) != null ? s : null;
  }, [n, e]);
}
function Tu(r, e) {
  return Z(() => r.reduce((t, n) => {
    const {
      sensor: i
    } = n, s = i.activators.map((a) => ({
      eventName: a.eventName,
      handler: e(a.handler, n)
    }));
    return [...t, ...s];
  }, []), [r, e]);
}
var Or;
(function(r) {
  r[r.Always = 0] = "Always", r[r.BeforeDragging = 1] = "BeforeDragging", r[r.WhileDragging = 2] = "WhileDragging";
})(Or || (Or = {}));
var oi;
(function(r) {
  r.Optimized = "optimized";
})(oi || (oi = {}));
const ls = /* @__PURE__ */ new Map();
function Ou(r, e) {
  let {
    dragging: t,
    dependencies: n,
    config: i
  } = e;
  const [s, a] = te(null), {
    frequency: o,
    measure: l,
    strategy: c
  } = i, d = Y(r), u = _(), h = Ar(u), p = ue(function(T) {
    T === void 0 && (T = []), !h.current && a((D) => D === null ? T : D.concat(T.filter((S) => !D.includes(S))));
  }, [h]), g = Y(null), b = Hr((T) => {
    if (u && !t)
      return ls;
    if (!T || T === ls || d.current !== r || s != null) {
      const D = /* @__PURE__ */ new Map();
      for (let S of r) {
        if (!S)
          continue;
        if (s && s.length > 0 && !s.includes(S.id) && S.rect.current) {
          D.set(S.id, S.rect.current);
          continue;
        }
        const O = S.node.current, x = O ? new Ri(l(O), O) : null;
        S.rect.current = x, x && D.set(S.id, x);
      }
      return D;
    }
    return T;
  }, [r, s, t, u, l]);
  return X(() => {
    d.current = r;
  }, [r]), X(
    () => {
      u || p();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), X(
    () => {
      s && s.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), X(
    () => {
      u || typeof o != "number" || g.current !== null || (g.current = setTimeout(() => {
        p(), g.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, u, p, ...n]
  ), {
    droppableRects: b,
    measureDroppableContainers: p,
    measuringScheduled: s != null
  };
  function _() {
    switch (c) {
      case Or.Always:
        return !1;
      case Or.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Oi(r, e) {
  return Hr((t) => r ? t || (typeof e == "function" ? e(r) : r) : null, [e, r]);
}
function Mu(r, e) {
  return Oi(r, e);
}
function Iu(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = On(e), i = Z(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return X(() => () => i?.disconnect(), [i]), i;
}
function Ln(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = On(e), i = Z(
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
  return X(() => () => i?.disconnect(), [i]), i;
}
function Lu(r) {
  return new Ri(hr(r), r);
}
function cs(r, e, t) {
  e === void 0 && (e = Lu);
  const [n, i] = te(null);
  function s() {
    i((l) => {
      if (!r)
        return null;
      if (r.isConnected === !1) {
        var c;
        return (c = l ?? t) != null ? c : null;
      }
      const d = e(r);
      return JSON.stringify(l) === JSON.stringify(d) ? l : d;
    });
  }
  const a = Iu({
    callback(l) {
      if (r)
        for (const c of l) {
          const {
            type: d,
            target: u
          } = c;
          if (d === "childList" && u instanceof HTMLElement && u.contains(r)) {
            s();
            break;
          }
        }
    }
  }), o = Ln({
    callback: s
  });
  return mt(() => {
    s(), r ? (o?.observe(r), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [r]), n;
}
function Pu(r) {
  const e = Oi(r);
  return Pa(r, e);
}
const ds = [];
function zu(r) {
  const e = Y(r), t = Hr((n) => r ? n && n !== ds && r && e.current && r.parentNode === e.current.parentNode ? n : In(r) : ds, [r]);
  return X(() => {
    e.current = r;
  }, [r]), t;
}
function Fu(r) {
  const [e, t] = te(null), n = Y(r), i = ue((s) => {
    const a = Zn(s.target);
    a && t((o) => o ? (o.set(a, si(a)), new Map(o)) : null);
  }, []);
  return X(() => {
    const s = n.current;
    if (r !== s) {
      a(s);
      const o = r.map((l) => {
        const c = Zn(l);
        return c ? (c.addEventListener("scroll", i, {
          passive: !0
        }), [c, si(c)]) : null;
      }).filter((l) => l != null);
      t(o.length ? new Map(o) : null), n.current = r;
    }
    return () => {
      a(r), a(s);
    };
    function a(o) {
      o.forEach((l) => {
        const c = Zn(l);
        c?.removeEventListener("scroll", i);
      });
    }
  }, [i, r]), Z(() => r.length ? e ? Array.from(e.values()).reduce((s, a) => nr(s, a), pt) : $a(r) : pt, [r, e]);
}
function us(r, e) {
  e === void 0 && (e = []);
  const t = Y(null);
  return X(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), X(() => {
    const n = r !== pt;
    n && !t.current && (t.current = r), !n && t.current && (t.current = null);
  }, [r]), t.current ? Tr(r, t.current) : pt;
}
function Bu(r) {
  X(
    () => {
      if (!Tn)
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
function Hu(r, e) {
  return Z(() => r.reduce((t, n) => {
    let {
      eventName: i,
      handler: s
    } = n;
    return t[i] = (a) => {
      s(a, e);
    }, t;
  }, {}), [r, e]);
}
function Ua(r) {
  return Z(() => r ? uu(r) : null, [r]);
}
const hs = [];
function Vu(r, e) {
  e === void 0 && (e = hr);
  const [t] = r, n = Ua(t ? He(t) : null), [i, s] = te(hs);
  function a() {
    s(() => r.length ? r.map((l) => Va(l) ? n : new Ri(e(l), l)) : hs);
  }
  const o = Ln({
    callback: a
  });
  return mt(() => {
    o?.disconnect(), a(), r.forEach((l) => o?.observe(l));
  }, [r]), i;
}
function Za(r) {
  if (!r)
    return null;
  if (r.children.length > 1)
    return r;
  const e = r.children[0];
  return Br(e) ? e : r;
}
function ju(r) {
  let {
    measure: e
  } = r;
  const [t, n] = te(null), i = ue((c) => {
    for (const {
      target: d
    } of c)
      if (Br(d)) {
        n((u) => {
          const h = e(d);
          return u ? {
            ...u,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [e]), s = Ln({
    callback: i
  }), a = ue((c) => {
    const d = Za(c);
    s?.disconnect(), d && s?.observe(d), n(d ? e(d) : null);
  }, [e, s]), [o, l] = ln(a);
  return Z(() => ({
    nodeRef: o,
    rect: t,
    setRef: l
  }), [t, o, l]);
}
const $u = [{
  sensor: Ti,
  options: {}
}, {
  sensor: Ni,
  options: {}
}], Wu = {
  current: {}
}, Jr = {
  draggable: {
    measure: is
  },
  droppable: {
    measure: is,
    strategy: Or.WhileDragging,
    frequency: oi.Optimized
  },
  dragOverlay: {
    measure: hr
  }
};
class Cr extends Map {
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
const Gu = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Cr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: un
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Jr,
  measureDroppableContainers: un,
  windowRect: null,
  measuringScheduled: !1
}, qa = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: un,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: un
}, jr = /* @__PURE__ */ Et(qa), Ya = /* @__PURE__ */ Et(Gu);
function Uu() {
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
      containers: new Cr()
    }
  };
}
function Zu(r, e) {
  switch (e.type) {
    case Ae.DragStart:
      return {
        ...r,
        draggable: {
          ...r.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case Ae.DragMove:
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
    case Ae.DragEnd:
    case Ae.DragCancel:
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
    case Ae.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: n
      } = t, i = new Cr(r.droppable.containers);
      return i.set(n, t), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: i
        }
      };
    }
    case Ae.SetDroppableDisabled: {
      const {
        id: t,
        key: n,
        disabled: i
      } = e, s = r.droppable.containers.get(t);
      if (!s || n !== s.key)
        return r;
      const a = new Cr(r.droppable.containers);
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
    case Ae.UnregisterDroppable: {
      const {
        id: t,
        key: n
      } = e, i = r.droppable.containers.get(t);
      if (!i || n !== i.key)
        return r;
      const s = new Cr(r.droppable.containers);
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
function qu(r) {
  let {
    disabled: e
  } = r;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: i
  } = ft(jr), s = cn(n), a = cn(t?.id);
  return X(() => {
    if (!e && !n && s && a != null) {
      if (!Mn(s) || document.activeElement === s.target)
        return;
      const o = i.get(a);
      if (!o)
        return;
      const {
        activatorNode: l,
        node: c
      } = o;
      if (!l.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [l.current, c.current]) {
          if (!d)
            continue;
          const u = jd(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, i, a, s]), null;
}
function Ka(r, e) {
  let {
    transform: t,
    ...n
  } = e;
  return r != null && r.length ? r.reduce((i, s) => s({
    transform: i,
    ...n
  }), t) : t;
}
function Yu(r) {
  return Z(
    () => ({
      draggable: {
        ...Jr.draggable,
        ...r?.draggable
      },
      droppable: {
        ...Jr.droppable,
        ...r?.droppable
      },
      dragOverlay: {
        ...Jr.dragOverlay,
        ...r?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r?.draggable, r?.droppable, r?.dragOverlay]
  );
}
function Ku(r) {
  let {
    activeNode: e,
    measure: t,
    initialRect: n,
    config: i = !0
  } = r;
  const s = Y(!1), {
    x: a,
    y: o
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  mt(() => {
    if (!a && !o || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !n)
      return;
    const c = e?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = t(c), u = Pa(d, n);
    if (a || (u.x = 0), o || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = Fa(c);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, o, n, t]);
}
const Pn = /* @__PURE__ */ Et({
  ...pt,
  scaleX: 1,
  scaleY: 1
});
var Mt;
(function(r) {
  r[r.Uninitialized = 0] = "Uninitialized", r[r.Initializing = 1] = "Initializing", r[r.Initialized = 2] = "Initialized";
})(Mt || (Mt = {}));
const Xu = /* @__PURE__ */ ac(function(e) {
  var t, n, i, s;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: c,
    sensors: d = $u,
    collisionDetection: u = su,
    measuring: h,
    modifiers: p,
    ...g
  } = e;
  const b = oc(Zu, void 0, Uu), [_, T] = b, [D, S] = qd(), [O, x] = te(Mt.Uninitialized), E = O === Mt.Initialized, {
    draggable: {
      active: C,
      nodes: N,
      translate: V
    },
    droppable: {
      containers: I
    }
  } = _, R = C != null ? N.get(C) : null, k = Y({
    initial: null,
    translated: null
  }), A = Z(() => {
    var Pe;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (Pe = R?.data) != null ? Pe : Wu,
      rect: k
    } : null;
  }, [C, R]), $ = Y(null), [ie, fe] = te(null), [ne, ce] = te(null), oe = Ar(g, Object.values(g)), we = Vr("DndDescribedBy", a), Ue = Z(() => I.getEnabled(), [I]), _e = Yu(h), {
    droppableRects: ke,
    measureDroppableContainers: Oe,
    measuringScheduled: ct
  } = Ou(Ue, {
    dragging: E,
    dependencies: [V.x, V.y],
    config: _e.droppable
  }), Se = Au(N, C), Ve = Z(() => ne ? dn(ne) : null, [ne]), Re = hl(), Me = Mu(Se, _e.draggable.measure);
  Ku({
    activeNode: C != null ? N.get(C) : null,
    config: Re.layoutShiftCompensation,
    initialRect: Me,
    measure: _e.draggable.measure
  });
  const le = cs(Se, _e.draggable.measure, Me), Je = cs(Se ? Se.parentElement : null), Le = Y({
    activatorEvent: null,
    active: null,
    activeNode: Se,
    collisionRect: null,
    collisions: null,
    droppableRects: ke,
    draggableNodes: N,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), je = I.getNodeFor((t = Le.current.over) == null ? void 0 : t.id), re = ju({
    measure: _e.dragOverlay.measure
  }), ye = (n = re.nodeRef.current) != null ? n : Se, be = E ? (i = re.rect) != null ? i : le : null, Qe = !!(re.nodeRef.current && re.rect), m = Pu(Qe ? null : le), v = Ua(ye ? He(ye) : null), w = zu(E ? je ?? Se : null), F = Vu(w), P = Ka(p, {
    transform: {
      x: V.x - m.x,
      y: V.y - m.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ne,
    active: A,
    activeNodeRect: le,
    containerNodeRect: Je,
    draggingNodeRect: be,
    over: Le.current.over,
    overlayNodeRect: re.rect,
    scrollableAncestors: w,
    scrollableAncestorRects: F,
    windowRect: v
  }), L = Ve ? nr(Ve, V) : null, q = Fu(w), ee = us(q), xe = us(q, [le]), ge = nr(P, ee), ze = be ? lu(be, P) : null, Wt = A && ze ? u({
    active: A,
    collisionRect: ze,
    droppableRects: ke,
    droppableContainers: Ue,
    pointerCoordinates: L
  }) : null, qt = La(Wt, "id"), [et, Gr] = te(null), Ur = Qe ? P : nr(P, xe), Vn = au(Ur, (s = et?.rect) != null ? s : null, le), Yt = Y(null), Gi = ue(
    (Pe, Ze) => {
      let {
        sensor: qe,
        options: Nt
      } = Ze;
      if ($.current == null)
        return;
      const tt = N.get($.current);
      if (!tt)
        return;
      const Ye = Pe.nativeEvent, vt = new qe({
        active: $.current,
        activeNode: tt,
        event: Ye,
        options: Nt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Le,
        onAbort(Ie) {
          if (!N.get(Ie))
            return;
          const {
            onDragAbort: yt
          } = oe.current, kt = {
            id: Ie
          };
          yt?.(kt), D({
            type: "onDragAbort",
            event: kt
          });
        },
        onPending(Ie, At, yt, kt) {
          if (!N.get(Ie))
            return;
          const {
            onDragPending: mr
          } = oe.current, Tt = {
            id: Ie,
            constraint: At,
            initialCoordinates: yt,
            offset: kt
          };
          mr?.(Tt), D({
            type: "onDragPending",
            event: Tt
          });
        },
        onStart(Ie) {
          const At = $.current;
          if (At == null)
            return;
          const yt = N.get(At);
          if (!yt)
            return;
          const {
            onDragStart: kt
          } = oe.current, fr = {
            activatorEvent: Ye,
            active: {
              id: At,
              data: yt.data,
              rect: k
            }
          };
          Zr(() => {
            kt?.(fr), x(Mt.Initializing), T({
              type: Ae.DragStart,
              initialCoordinates: Ie,
              active: At
            }), D({
              type: "onDragStart",
              event: fr
            }), fe(Yt.current), ce(Ye);
          });
        },
        onMove(Ie) {
          T({
            type: Ae.DragMove,
            coordinates: Ie
          });
        },
        onEnd: Kt(Ae.DragEnd),
        onCancel: Kt(Ae.DragCancel)
      });
      Yt.current = vt;
      function Kt(Ie) {
        return async function() {
          const {
            active: yt,
            collisions: kt,
            over: fr,
            scrollAdjustedTranslate: mr
          } = Le.current;
          let Tt = null;
          if (yt && mr) {
            const {
              cancelDrop: pr
            } = oe.current;
            Tt = {
              activatorEvent: Ye,
              active: yt,
              collisions: kt,
              delta: mr,
              over: fr
            }, Ie === Ae.DragEnd && typeof pr == "function" && await Promise.resolve(pr(Tt)) && (Ie = Ae.DragCancel);
          }
          $.current = null, Zr(() => {
            T({
              type: Ie
            }), x(Mt.Uninitialized), Gr(null), fe(null), ce(null), Yt.current = null;
            const pr = Ie === Ae.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Tt) {
              const jn = oe.current[pr];
              jn?.(Tt), D({
                type: pr,
                event: Tt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [N]
  ), cl = ue((Pe, Ze) => (qe, Nt) => {
    const tt = qe.nativeEvent, Ye = N.get(Nt);
    if (
      // Another sensor is already instantiating
      $.current !== null || // No active draggable
      !Ye || // Event has already been captured
      tt.dndKit || tt.defaultPrevented
    )
      return;
    const vt = {
      active: Ye
    };
    Pe(qe, Ze.options, vt) === !0 && (tt.dndKit = {
      capturedBy: Ze.sensor
    }, $.current = Nt, Gi(qe, Ze));
  }, [N, Gi]), Ui = Tu(d, cl);
  Bu(d), mt(() => {
    le && O === Mt.Initializing && x(Mt.Initialized);
  }, [le, O]), X(
    () => {
      const {
        onDragMove: Pe
      } = oe.current, {
        active: Ze,
        activatorEvent: qe,
        collisions: Nt,
        over: tt
      } = Le.current;
      if (!Ze || !qe)
        return;
      const Ye = {
        active: Ze,
        activatorEvent: qe,
        collisions: Nt,
        delta: {
          x: ge.x,
          y: ge.y
        },
        over: tt
      };
      Zr(() => {
        Pe?.(Ye), D({
          type: "onDragMove",
          event: Ye
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ge.x, ge.y]
  ), X(
    () => {
      const {
        active: Pe,
        activatorEvent: Ze,
        collisions: qe,
        droppableContainers: Nt,
        scrollAdjustedTranslate: tt
      } = Le.current;
      if (!Pe || $.current == null || !Ze || !tt)
        return;
      const {
        onDragOver: Ye
      } = oe.current, vt = Nt.get(qt), Kt = vt && vt.rect.current ? {
        id: vt.id,
        rect: vt.rect.current,
        data: vt.data,
        disabled: vt.disabled
      } : null, Ie = {
        active: Pe,
        activatorEvent: Ze,
        collisions: qe,
        delta: {
          x: tt.x,
          y: tt.y
        },
        over: Kt
      };
      Zr(() => {
        Gr(Kt), Ye?.(Ie), D({
          type: "onDragOver",
          event: Ie
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [qt]
  ), mt(() => {
    Le.current = {
      activatorEvent: ne,
      active: A,
      activeNode: Se,
      collisionRect: ze,
      collisions: Wt,
      droppableRects: ke,
      draggableNodes: N,
      draggingNode: ye,
      draggingNodeRect: be,
      droppableContainers: I,
      over: et,
      scrollableAncestors: w,
      scrollAdjustedTranslate: ge
    }, k.current = {
      initial: be,
      translated: ze
    };
  }, [A, Se, Wt, ze, N, ye, be, ke, I, et, w, ge]), Du({
    ...Re,
    delta: V,
    draggingRect: ze,
    pointerCoordinates: L,
    scrollableAncestors: w,
    scrollableAncestorRects: F
  });
  const dl = Z(() => ({
    active: A,
    activeNode: Se,
    activeNodeRect: le,
    activatorEvent: ne,
    collisions: Wt,
    containerNodeRect: Je,
    dragOverlay: re,
    draggableNodes: N,
    droppableContainers: I,
    droppableRects: ke,
    over: et,
    measureDroppableContainers: Oe,
    scrollableAncestors: w,
    scrollableAncestorRects: F,
    measuringConfiguration: _e,
    measuringScheduled: ct,
    windowRect: v
  }), [A, Se, le, ne, Wt, Je, re, N, I, ke, et, Oe, w, F, _e, ct, v]), ul = Z(() => ({
    activatorEvent: ne,
    activators: Ui,
    active: A,
    activeNodeRect: le,
    ariaDescribedById: {
      draggable: we
    },
    dispatch: T,
    draggableNodes: N,
    over: et,
    measureDroppableContainers: Oe
  }), [ne, Ui, A, le, T, we, N, et, Oe]);
  return B.createElement(Ia.Provider, {
    value: S
  }, B.createElement(jr.Provider, {
    value: ul
  }, B.createElement(Ya.Provider, {
    value: dl
  }, B.createElement(Pn.Provider, {
    value: Vn
  }, c)), B.createElement(qu, {
    disabled: o?.restoreFocus === !1
  })), B.createElement(Xd, {
    ...o,
    hiddenTextDescribedById: we
  }));
  function hl() {
    const Pe = ie?.autoScrollEnabled === !1, Ze = typeof l == "object" ? l.enabled === !1 : l === !1, qe = E && !Pe && !Ze;
    return typeof l == "object" ? {
      ...l,
      enabled: qe
    } : {
      enabled: qe
    };
  }
}), Ju = /* @__PURE__ */ Et(null), fs = "button", Qu = "Draggable";
function eh(r) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: i
  } = r;
  const s = Vr(Qu), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: h
  } = ft(jr), {
    role: p = fs,
    roleDescription: g = "draggable",
    tabIndex: b = 0
  } = i ?? {}, _ = l?.id === e, T = ft(_ ? Pn : Ju), [D, S] = ln(), [O, x] = ln(), E = Hu(a, e), C = Ar(t);
  mt(
    () => (u.set(e, {
      id: e,
      key: s,
      node: D,
      activatorNode: O,
      data: C
    }), () => {
      const V = u.get(e);
      V && V.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const N = Z(() => ({
    role: p,
    tabIndex: b,
    "aria-disabled": n,
    "aria-pressed": _ && p === fs ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": d.draggable
  }), [n, p, b, _, g, d.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: c,
    attributes: N,
    isDragging: _,
    listeners: n ? void 0 : E,
    node: D,
    over: h,
    setNodeRef: S,
    setActivatorNodeRef: x,
    transform: T
  };
}
function Xa() {
  return ft(Ya);
}
const th = "Droppable", rh = {
  timeout: 25
};
function nh(r) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: i
  } = r;
  const s = Vr(th), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: c
  } = ft(jr), d = Y({
    disabled: t
  }), u = Y(!1), h = Y(null), p = Y(null), {
    disabled: g,
    updateMeasurementsFor: b,
    timeout: _
  } = {
    ...rh,
    ...i
  }, T = Ar(b ?? n), D = ue(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
        c(Array.isArray(T.current) ? T.current : [T.current]), p.current = null;
      }, _);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [_]
  ), S = Ln({
    callback: D,
    disabled: g || !a
  }), O = ue((N, V) => {
    S && (V && (S.unobserve(V), u.current = !1), N && S.observe(N));
  }, [S]), [x, E] = ln(O), C = Ar(e);
  return X(() => {
    !S || !x.current || (S.disconnect(), u.current = !1, S.observe(x.current));
  }, [x, S]), X(
    () => (o({
      type: Ae.RegisterDroppable,
      element: {
        id: n,
        key: s,
        disabled: t,
        node: x,
        rect: h,
        data: C
      }
    }), () => o({
      type: Ae.UnregisterDroppable,
      key: s,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), X(() => {
    t !== d.current.disabled && (o({
      type: Ae.SetDroppableDisabled,
      id: n,
      key: s,
      disabled: t
    }), d.current.disabled = t);
  }, [n, s, t, o]), {
    active: a,
    rect: h,
    isOver: l?.id === n,
    node: x,
    over: l,
    setNodeRef: E
  };
}
function ih(r) {
  let {
    animation: e,
    children: t
  } = r;
  const [n, i] = te(null), [s, a] = te(null), o = cn(t);
  return !t && !n && o && i(o), mt(() => {
    if (!s)
      return;
    const l = n?.key, c = n?.props.id;
    if (l == null || c == null) {
      i(null);
      return;
    }
    Promise.resolve(e(c, s)).then(() => {
      i(null);
    });
  }, [e, n, s]), B.createElement(B.Fragment, null, t, n ? lc(n, {
    ref: a
  }) : null);
}
const sh = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function ah(r) {
  let {
    children: e
  } = r;
  return B.createElement(jr.Provider, {
    value: qa
  }, B.createElement(Pn.Provider, {
    value: sh
  }, e));
}
const oh = {
  position: "fixed",
  touchAction: "none"
}, lh = (r) => Mn(r) ? "transform 250ms ease" : void 0, ch = /* @__PURE__ */ Ge((r, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: i,
    children: s,
    className: a,
    rect: o,
    style: l,
    transform: c,
    transition: d = lh
  } = r;
  if (!o)
    return null;
  const u = i ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...oh,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: Ft.Transform.toString(u),
    transformOrigin: i && n ? eu(n, o) : void 0,
    transition: typeof d == "function" ? d(n) : d,
    ...l
  };
  return B.createElement(t, {
    className: a,
    style: h,
    ref: e
  }, s);
}), dh = (r) => (e) => {
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
    for (const [l, c] of Object.entries(i))
      t.node.style.setProperty(l, c);
    a != null && a.active && t.node.classList.remove(a.active);
  };
}, uh = (r) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = r;
  return [{
    transform: Ft.Transform.toString(e)
  }, {
    transform: Ft.Transform.toString(t)
  }];
}, hh = {
  duration: 250,
  easing: "ease",
  keyframes: uh,
  sideEffects: /* @__PURE__ */ dh({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function fh(r) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: i
  } = r;
  return On((s, a) => {
    if (e === null)
      return;
    const o = t.get(s);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const c = Za(a);
    if (!c)
      return;
    const {
      transform: d
    } = He(a).getComputedStyle(a), u = za(d);
    if (!u)
      return;
    const h = typeof e == "function" ? e : mh(e);
    return Wa(l, i.draggable.measure), h({
      active: {
        id: s,
        data: o.data,
        node: l,
        rect: i.draggable.measure(l)
      },
      draggableNodes: t,
      dragOverlay: {
        node: a,
        rect: i.dragOverlay.measure(c)
      },
      droppableContainers: n,
      measuringConfiguration: i,
      transform: u
    });
  });
}
function mh(r) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: i
  } = {
    ...hh,
    ...r
  };
  return (s) => {
    let {
      active: a,
      dragOverlay: o,
      transform: l,
      ...c
    } = s;
    if (!e)
      return;
    const d = {
      x: o.rect.left - a.rect.left,
      y: o.rect.top - a.rect.top
    }, u = {
      scaleX: l.scaleX !== 1 ? a.rect.width * l.scaleX / o.rect.width : 1,
      scaleY: l.scaleY !== 1 ? a.rect.height * l.scaleY / o.rect.height : 1
    }, h = {
      x: l.x - d.x,
      y: l.y - d.y,
      ...u
    }, p = i({
      ...c,
      active: a,
      dragOverlay: o,
      transform: {
        initial: l,
        final: h
      }
    }), [g] = p, b = p[p.length - 1];
    if (JSON.stringify(g) === JSON.stringify(b))
      return;
    const _ = n?.({
      active: a,
      dragOverlay: o,
      ...c
    }), T = o.node.animate(p, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((D) => {
      T.onfinish = () => {
        _?.(), D();
      };
    });
  };
}
let ms = 0;
function ph(r) {
  return Z(() => {
    if (r != null)
      return ms++, ms;
  }, [r]);
}
const gh = /* @__PURE__ */ B.memo((r) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: n,
    style: i,
    transition: s,
    modifiers: a,
    wrapperElement: o = "div",
    className: l,
    zIndex: c = 999
  } = r;
  const {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: p,
    draggableNodes: g,
    droppableContainers: b,
    dragOverlay: _,
    over: T,
    measuringConfiguration: D,
    scrollableAncestors: S,
    scrollableAncestorRects: O,
    windowRect: x
  } = Xa(), E = ft(Pn), C = ph(u?.id), N = Ka(a, {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: p,
    draggingNodeRect: _.rect,
    over: T,
    overlayNodeRect: _.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: O,
    transform: E,
    windowRect: x
  }), V = Oi(h), I = fh({
    config: n,
    draggableNodes: g,
    droppableContainers: b,
    measuringConfiguration: D
  }), R = V ? _.setRef : void 0;
  return B.createElement(ah, null, B.createElement(ih, {
    animation: I
  }, u && C ? B.createElement(ch, {
    key: C,
    id: u.id,
    ref: R,
    as: o,
    activatorEvent: d,
    adjustScale: e,
    className: l,
    transition: s,
    rect: V,
    style: {
      zIndex: c,
      ...i
    },
    transform: N
  }, t) : null));
});
function Mi(r, e, t) {
  const n = r.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function vh(r, e) {
  return r.reduce((t, n, i) => {
    const s = e.get(n);
    return s && (t[i] = s), t;
  }, Array(r.length));
}
function Kr(r) {
  return r !== null && r >= 0;
}
function yh(r, e) {
  if (r === e)
    return !0;
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function bh(r) {
  return typeof r == "boolean" ? {
    draggable: r,
    droppable: r
  } : r;
}
const Ja = (r) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: i
  } = r;
  const s = Mi(e, n, t), a = e[i], o = s[i];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, Qa = "Sortable", eo = /* @__PURE__ */ B.createContext({
  activeIndex: -1,
  containerId: Qa,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Ja,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function xh(r) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: i = Ja,
    disabled: s = !1
  } = r;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = Xa(), u = Vr(Qa, t), h = o.rect !== null, p = Z(() => n.map((E) => typeof E == "object" && "id" in E ? E.id : E), [n]), g = a != null, b = a ? p.indexOf(a.id) : -1, _ = c ? p.indexOf(c.id) : -1, T = Y(p), D = !yh(p, T.current), S = _ !== -1 && b === -1 || D, O = bh(s);
  mt(() => {
    D && g && d(p);
  }, [D, p, g, d]), X(() => {
    T.current = p;
  }, [p]);
  const x = Z(
    () => ({
      activeIndex: b,
      containerId: u,
      disabled: O,
      disableTransforms: S,
      items: p,
      overIndex: _,
      useDragOverlay: h,
      sortedRects: vh(p, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [b, u, O.draggable, O.droppable, S, p, _, l, h, i]
  );
  return B.createElement(eo.Provider, {
    value: x
  }, e);
}
const wh = (r) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: i
  } = r;
  return Mi(t, n, i).indexOf(e);
}, _h = (r) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: n,
    index: i,
    items: s,
    newIndex: a,
    previousItems: o,
    previousContainerId: l,
    transition: c
  } = r;
  return !c || !n || o !== s && i === a ? !1 : t ? !0 : a !== i && e === l;
}, Ch = {
  duration: 200,
  easing: "ease"
}, to = "transform", Eh = /* @__PURE__ */ Ft.Transition.toString({
  property: to,
  duration: 0,
  easing: "linear"
}), kh = {
  roleDescription: "sortable"
};
function Sh(r) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: i
  } = r;
  const [s, a] = te(null), o = Y(t);
  return mt(() => {
    if (!e && t !== o.current && n.current) {
      const l = i.current;
      if (l) {
        const c = hr(n.current, {
          ignoreTransform: !0
        }), d = {
          x: l.left - c.left,
          y: l.top - c.top,
          scaleX: l.width / c.width,
          scaleY: l.height / c.height
        };
        (d.x || d.y) && a(d);
      }
    }
    t !== o.current && (o.current = t);
  }, [e, t, n, i]), X(() => {
    s && a(null);
  }, [s]), s;
}
function Dh(r) {
  let {
    animateLayoutChanges: e = _h,
    attributes: t,
    disabled: n,
    data: i,
    getNewIndex: s = wh,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: c = Ch
  } = r;
  const {
    items: d,
    containerId: u,
    activeIndex: h,
    disabled: p,
    disableTransforms: g,
    sortedRects: b,
    overIndex: _,
    useDragOverlay: T,
    strategy: D
  } = ft(eo), S = Rh(n, p), O = d.indexOf(a), x = Z(() => ({
    sortable: {
      containerId: u,
      index: O,
      items: d
    },
    ...i
  }), [u, i, O, d]), E = Z(() => d.slice(d.indexOf(a)), [d, a]), {
    rect: C,
    node: N,
    isOver: V,
    setNodeRef: I
  } = nh({
    id: a,
    data: x,
    disabled: S.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: E,
      ...l
    }
  }), {
    active: R,
    activatorEvent: k,
    activeNodeRect: A,
    attributes: $,
    setNodeRef: ie,
    listeners: fe,
    isDragging: ne,
    over: ce,
    setActivatorNodeRef: oe,
    transform: we
  } = eh({
    id: a,
    data: x,
    attributes: {
      ...kh,
      ...t
    },
    disabled: S.draggable
  }), Ue = Fd(I, ie), _e = !!R, ke = _e && !g && Kr(h) && Kr(_), Oe = !T && ne, ct = Oe && ke ? we : null, Ve = ke ? ct ?? (o ?? D)({
    rects: b,
    activeNodeRect: A,
    activeIndex: h,
    overIndex: _,
    index: O
  }) : null, Re = Kr(h) && Kr(_) ? s({
    id: a,
    items: d,
    activeIndex: h,
    overIndex: _
  }) : O, Me = R?.id, le = Y({
    activeId: Me,
    items: d,
    newIndex: Re,
    containerId: u
  }), Je = d !== le.current.items, Le = e({
    active: R,
    containerId: u,
    isDragging: ne,
    isSorting: _e,
    id: a,
    index: O,
    items: d,
    newIndex: le.current.newIndex,
    previousItems: le.current.items,
    previousContainerId: le.current.containerId,
    transition: c,
    wasDragging: le.current.activeId != null
  }), je = Sh({
    disabled: !Le,
    index: O,
    node: N,
    rect: C
  });
  return X(() => {
    _e && le.current.newIndex !== Re && (le.current.newIndex = Re), u !== le.current.containerId && (le.current.containerId = u), d !== le.current.items && (le.current.items = d);
  }, [_e, Re, u, d]), X(() => {
    if (Me === le.current.activeId)
      return;
    if (Me != null && le.current.activeId == null) {
      le.current.activeId = Me;
      return;
    }
    const ye = setTimeout(() => {
      le.current.activeId = Me;
    }, 50);
    return () => clearTimeout(ye);
  }, [Me]), {
    active: R,
    activeIndex: h,
    attributes: $,
    data: x,
    rect: C,
    index: O,
    newIndex: Re,
    items: d,
    isOver: V,
    isSorting: _e,
    isDragging: ne,
    listeners: fe,
    node: N,
    overIndex: _,
    over: ce,
    setNodeRef: Ue,
    setActivatorNodeRef: oe,
    setDroppableNodeRef: I,
    setDraggableNodeRef: ie,
    transform: je ?? Ve,
    transition: re()
  };
  function re() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      je || // Or to prevent items jumping to back to their "new" position when items change
      Je && le.current.newIndex === O
    )
      return Eh;
    if (!(Oe && !Mn(k) || !c) && (_e || Le))
      return Ft.Transition.toString({
        ...c,
        property: to
      });
  }
}
function Rh(r, e) {
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
function fn(r) {
  if (!r)
    return !1;
  const e = r.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const Nh = [de.Down, de.Right, de.Up, de.Left], Ah = (r, e) => {
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
  if (Nh.includes(r.code)) {
    if (r.preventDefault(), !t || !n)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = i.get(u.id);
      if (h)
        switch (r.code) {
          case de.Down:
            n.top < h.top && l.push(u);
            break;
          case de.Up:
            n.top > h.top && l.push(u);
            break;
          case de.Left:
            n.left > h.left && l.push(u);
            break;
          case de.Right:
            n.left < h.left && l.push(u);
            break;
        }
    });
    const c = nu({
      collisionRect: n,
      droppableRects: i,
      droppableContainers: l
    });
    let d = La(c, "id");
    if (d === a?.id && c.length > 1 && (d = c[1].id), d != null) {
      const u = s.get(t.id), h = s.get(d), p = h ? i.get(h.id) : null, g = h?.node.current;
      if (g && p && u && h) {
        const _ = In(g).some((E, C) => o[C] !== E), T = ro(u, h), D = Th(u, h), S = _ || !T ? {
          x: 0,
          y: 0
        } : {
          x: D ? n.width - p.width : 0,
          y: D ? n.height - p.height : 0
        }, O = {
          x: p.left,
          y: p.top
        };
        return S.x && S.y ? O : Tr(O, S);
      }
    }
  }
};
function ro(r, e) {
  return !fn(r) || !fn(e) ? !1 : r.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Th(r, e) {
  return !fn(r) || !fn(e) || !ro(r, e) ? !1 : r.data.current.sortable.index < e.data.current.sortable.index;
}
const ps = ({ id: r, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: i, transform: s, transition: a } = Dh({
    id: r
  }), o = {
    transform: Ft.Translate.toString(s),
    transition: a,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return f("div", {
    ref: i,
    style: o,
    ...t,
    ...n,
    children: e
  });
}, Ii = ({ blocks: r, sortable: e = !1, onSort: t = () => {
}, main: n = !1 }) => {
  const [i, s] = te([]);
  qs(() => {
    s(r.map((u, h) => ({
      id: u.id ?? h.toString(),
      render: u.render
    })));
  }, [r]);
  const [a, o] = te(null), l = Jd(rs(Ti), rs(Ni, {
    coordinateGetter: Ah
  })), c = (u) => {
    o(u.active.id);
  }, d = (u) => {
    const { active: h, over: p } = u;
    o(null), p && h.id !== p.id && s((g) => {
      const b = g.findIndex((T) => T.id === h.id), _ = g.findIndex((T) => T.id === p.id);
      return Mi(g, b, _);
    });
  };
  return f("div", {
    className: se("flex flex-wrap items-stretch gap-4", n && "flex-1"),
    children: j(Xu, {
      sensors: l,
      onDragStart: c,
      onDragEnd: d,
      children: [f(xh, {
        items: i,
        children: i.map((u) => f(ps, {
          id: u.id,
          children: u.render
        }, u.id))
      }), f(gh, {
        children: a ? f(ps, {
          id: a,
          children: i.find((u) => u.id === a)?.render
        }) : null
      })]
    })
  });
};
Ii.displayName = "GroupMasonry";
Ii.__isPageLayoutGroup = !0;
const Oh = Ge(function({ children: e, aside: t, header: n, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Ta("Page", e, ["block", "group"]), f("div", {
    ref: s,
    className: "h-full",
    children: j("div", {
      className: se("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [j("main", {
        className: se("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", i === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [n && f("header", {
          className: se("sticky top-0 z-30 bg-f1-background"),
          children: n
        }), f("div", {
          className: "flex-1",
          children: e
        })]
      }), t && f("aside", {
        className: se("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", i === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), Vp = {
  Page: st("Page", Oh),
  Block: st("Block", An),
  BlockContent: st("BlockContent", Ld),
  Group: st("Group", ki),
  GroupGrid: st("GroupGrid", Nn),
  GroupMasonry: st("GroupMasonry", Ii)
}, jp = ot({
  name: "StandardLayout",
  type: "layout"
}, wa), $p = ot({
  name: "TwoColumnLayout",
  type: "layout"
}, od), Wp = ot({
  name: "HomeLayout",
  type: "layout"
}, sd);
function ir(r) {
  "@babel/helpers - typeof";
  return ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ir(r);
}
function Mh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ih(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, so(n.key), n);
  }
}
function Lh(r, e, t) {
  return e && Ih(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Ph(r, e, t) {
  return e = mn(e), zh(r, no() ? Reflect.construct(e, t || [], mn(r).constructor) : e.apply(r, t));
}
function zh(r, e) {
  if (e && (ir(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fh(r);
}
function Fh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function no() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (no = function() {
    return !!r;
  })();
}
function mn(r) {
  return mn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, mn(r);
}
function Bh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && li(r, e);
}
function li(r, e) {
  return li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, li(r, e);
}
function io(r, e, t) {
  return e = so(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function so(r) {
  var e = Hh(r, "string");
  return ir(e) == "symbol" ? e : e + "";
}
function Hh(r, e) {
  if (ir(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var zn = /* @__PURE__ */ (function(r) {
  function e() {
    return Mh(this, e), Ph(this, e, arguments);
  }
  return Bh(e, r), Lh(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(B.Component);
io(zn, "displayName", "ZAxis");
io(zn, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Vh = ["option", "isActive"];
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Er.apply(this, arguments);
}
function jh(r, e) {
  if (r == null) return {};
  var t = $h(r, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function $h(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function Wh(r) {
  var e = r.option, t = r.isActive, n = jh(r, Vh);
  return typeof e == "string" ? /* @__PURE__ */ B.createElement(Yi, Er({
    option: /* @__PURE__ */ B.createElement(hc, Er({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ B.createElement(Yi, Er({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, n));
}
function sr(r) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, sr(r);
}
function kr() {
  return kr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, kr.apply(this, arguments);
}
function gs(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function rt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gs(Object(t), !0).forEach(function(n) {
      Pt(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : gs(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Gh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vs(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, oo(n.key), n);
  }
}
function Uh(r, e, t) {
  return e && vs(r.prototype, e), t && vs(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Zh(r, e, t) {
  return e = pn(e), qh(r, ao() ? Reflect.construct(e, t || [], pn(r).constructor) : e.apply(r, t));
}
function qh(r, e) {
  if (e && (sr(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Yh(r);
}
function Yh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function ao() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ao = function() {
    return !!r;
  })();
}
function pn(r) {
  return pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, pn(r);
}
function Kh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && ci(r, e);
}
function ci(r, e) {
  return ci = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ci(r, e);
}
function Pt(r, e, t) {
  return e = oo(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function oo(r) {
  var e = Xh(r, "string");
  return sr(e) == "symbol" ? e : e + "";
}
function Xh(r, e) {
  if (sr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var $r = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    Gh(this, e);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return t = Zh(this, e, [].concat(i)), Pt(t, "state", {
      isAnimationFinished: !1
    }), Pt(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), Pt(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), Pt(t, "id", bc("recharts-scatter-")), t;
  }
  return Kh(e, r), Uh(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, s = this.props, a = s.shape, o = s.activeShape, l = s.activeIndex, c = $n(this.props, !1);
      return n.map(function(d, u) {
        var h = l === u, p = h ? o : a, g = rt(rt({}, c), d);
        return /* @__PURE__ */ B.createElement(gr, kr({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(d?.cx, "-").concat(d?.cy, "-").concat(d?.size, "-").concat(u)
        }, fc(i.props, d, u), {
          role: "img"
        }), /* @__PURE__ */ B.createElement(Wh, kr({
          option: p,
          isActive: h,
          key: "symbol-".concat(u)
        }, g)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, s = i.points, a = i.isAnimationActive, o = i.animationBegin, l = i.animationDuration, c = i.animationEasing, d = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ B.createElement(mc, {
        begin: o,
        duration: l,
        isActive: a,
        easing: c,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(d),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var p = h.t, g = s.map(function(b, _) {
          var T = u && u[_];
          if (T) {
            var D = qr(T.cx, b.cx), S = qr(T.cy, b.cy), O = qr(T.size, b.size);
            return rt(rt({}, b), {}, {
              cx: D(p),
              cy: S(p),
              size: O(p)
            });
          }
          var x = qr(0, b.size);
          return rt(rt({}, b), {}, {
            size: x(p)
          });
        });
        return /* @__PURE__ */ B.createElement(gr, null, n.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, s = n.isAnimationActive, a = this.state.prevPoints;
      return s && i && i.length && (!a || !da(a, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, a = i.xAxis, o = i.yAxis, l = i.children, c = ua(l, pc);
      return c ? c.map(function(d, u) {
        var h = d.props, p = h.direction, g = h.dataKey;
        return /* @__PURE__ */ B.cloneElement(d, {
          key: "".concat(p, "-").concat(g, "-").concat(s[u]),
          data: s,
          xAxis: a,
          yAxis: o,
          layout: p === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(_, T) {
            return {
              x: _.cx,
              y: _.cy,
              value: p === "x" ? +_.node.x : +_.node.y,
              errorVal: Xr(_, T)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, s = n.line, a = n.lineType, o = n.lineJointType, l = $n(this.props, !1), c = $n(s, !1), d, u;
      if (a === "joint")
        d = i.map(function(S) {
          return {
            x: S.cx,
            y: S.cy
          };
        });
      else if (a === "fitting") {
        var h = gc(i), p = h.xmin, g = h.xmax, b = h.a, _ = h.b, T = function(O) {
          return b * O + _;
        };
        d = [{
          x: p,
          y: T(p)
        }, {
          x: g,
          y: T(g)
        }];
      }
      var D = rt(rt(rt({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, c), {}, {
        points: d
      });
      return /* @__PURE__ */ B.isValidElement(s) ? u = /* @__PURE__ */ B.cloneElement(s, D) : vc(s) ? u = s(D) : u = /* @__PURE__ */ B.createElement(yc, kr({}, D, {
        type: o
      })), /* @__PURE__ */ B.createElement(gr, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, s = n.points, a = n.line, o = n.className, l = n.xAxis, c = n.yAxis, d = n.left, u = n.top, h = n.width, p = n.height, g = n.id, b = n.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var _ = this.state.isAnimationFinished, T = bl("recharts-scatter", o), D = l && l.allowDataOverflow, S = c && c.allowDataOverflow, O = D || S, x = Qt(g) ? this.id : g;
      return /* @__PURE__ */ B.createElement(gr, {
        className: T,
        clipPath: O ? "url(#clipPath-".concat(x, ")") : null
      }, D || S ? /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-".concat(x)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: D ? d : d - h / 2,
        y: S ? u : u - p / 2,
        width: D ? h : h * 2,
        height: S ? p : p * 2
      }))) : null, a && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ B.createElement(gr, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!b || _) && ha.renderCallByParent(this.props, s));
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
})(cc);
Pt($r, "displayName", "Scatter");
Pt($r, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !xc.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Pt($r, "getComposedData", function(r) {
  var e = r.xAxis, t = r.yAxis, n = r.zAxis, i = r.item, s = r.displayedData, a = r.xAxisTicks, o = r.yAxisTicks, l = r.offset, c = i.props.tooltipType, d = ua(i.props.children, wc), u = Qt(e.dataKey) ? i.props.dataKey : e.dataKey, h = Qt(t.dataKey) ? i.props.dataKey : t.dataKey, p = n && n.dataKey, g = n ? n.range : zn.defaultProps.range, b = g && g[0], _ = e.scale.bandwidth ? e.scale.bandwidth() : 0, T = t.scale.bandwidth ? t.scale.bandwidth() : 0, D = s.map(function(S, O) {
    var x = Xr(S, u), E = Xr(S, h), C = !Qt(p) && Xr(S, p) || "-", N = [{
      name: Qt(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: x,
      payload: S,
      dataKey: u,
      type: c
    }, {
      name: Qt(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: E,
      payload: S,
      dataKey: h,
      type: c
    }];
    C !== "-" && N.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: C,
      payload: S,
      dataKey: p,
      type: c
    });
    var V = Ki({
      axis: e,
      ticks: a,
      bandSize: _,
      entry: S,
      index: O,
      dataKey: u
    }), I = Ki({
      axis: t,
      ticks: o,
      bandSize: T,
      entry: S,
      index: O,
      dataKey: h
    }), R = C !== "-" ? n.scale(C) : b, k = Math.sqrt(Math.max(R, 0) / Math.PI);
    return rt(rt({}, S), {}, {
      cx: V,
      cy: I,
      x: V - k,
      y: I - k,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * k,
      height: 2 * k,
      size: R,
      node: {
        x,
        y: E,
        z: C
      },
      tooltipPayload: N,
      tooltipPosition: {
        x: V,
        y: I
      },
      payload: S
    }, d && d[O] && d[O].props);
  });
  return rt({
    points: D
  }, l);
});
var Jh = _c({
  chartName: "ComposedChart",
  GraphicalChild: [fa, Cc, ma, $r],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: pa
  }, {
    axisType: "yAxis",
    AxisComp: ii
  }, {
    axisType: "zAxis",
    AxisComp: zn
  }],
  formatAxisMap: Ec
});
const Qh = (r) => {
  const e = (t) => {
    const { cx: n, cy: i, fill: s, payload: a } = t, o = () => {
      if (!a) return "-";
      if (a[r] !== void 0)
        return a[r];
      for (const [l, c] of Object.entries(a))
        if (typeof c == "number" && l !== "x")
          return c;
      return "-";
    };
    return f("circle", {
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
}, ef = ({ dataConfig: r, data: e, xAxis: t, yAxis: n = {
  hide: !0
}, label: i = !1, hideTooltip: s = !1, hideGrid: a = !1, aspect: o, legend: l, showValueUnderLabel: c = !1, bar: d, line: u, scatter: h, onClick: p }, g) => {
  const b = kc(e), _ = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], T = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], D = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], S = [..._, ...T, ...D], O = Math.max(...b.flatMap((C) => S.map((N) => Sc(n?.tickFormatter ? n.tickFormatter(`${C[N]}`) : `${C[N]}`)))), x = [d, u, h].filter((C) => C?.axisPosition === "left"), E = [d, u, h].filter((C) => C?.axisPosition === "right");
  return f(Dc, {
    config: r,
    ref: g,
    aspect: o,
    children: j(Jh, {
      accessibilityLayer: !0,
      data: b,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: c ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (C) => {
        if (!p || !C.activeLabel || !C.activePayload)
          return;
        const N = {
          label: C.activeLabel,
          values: {}
        };
        for (const V of C.activePayload)
          N.values[V.name] = V.value;
        p(N);
      },
      children: [!s && f(Rc, {
        ...Nc(),
        content: f(Ac, {
          yAxisFormatter: n.tickFormatter
        })
      }), !a && f(Tc, {
        ...Oc()
      }), x.length > 0 && f(ii, {
        ...Xi(n),
        tick: !0,
        width: n.width ?? O + 20 + (E.length > 0 && x[0]?.axisLabel ? 20 : 0),
        hide: n.hide || x.some((C) => C?.hideAxis),
        label: x[0]?.axisLabel ? {
          value: x[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), E.length > 0 && f(ii, {
        ...Xi(n),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: n.width ?? O + 20 + (x.length > 0 && E[0]?.axisLabel ? 20 : 0),
        hide: n.hide || E.some((C) => C?.hideAxis),
        label: E[0]?.axisLabel ? {
          value: E[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), f(pa, {
        ...Mc(t),
        hide: t?.hide,
        tick: c ? (C) => {
          const { x: N, y: V, payload: I } = C, R = e.find(($) => $.label === I.value)?.values || "", k = Object.keys(R).length === 1 ? Object.values(R)?.[0] : void 0, A = k !== void 0 && n.tickFormatter ? n.tickFormatter(`${k}`) : k.toLocaleString();
          return j("g", {
            transform: `translate(${N},${V})`,
            children: [f("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: I.value
            }), !!k && f("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: A
            })]
          });
        } : void 0
      }), _.map((C, N) => f(ma, {
        isAnimationActive: !1,
        dataKey: String(C),
        fill: r[C].color ? xr(r[C].color) : Wn(N),
        radius: 4,
        maxBarSize: 32,
        children: i && f(ha, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(C)}`)
      }, `bar-${String(C)}`)), T.map((C, N) => f(fa, {
        type: u?.lineType ?? "natural",
        dataKey: String(C),
        stroke: r[C].color ? xr(r[C].color) : Wn(_.length + N),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(C)}`)), D.map((C, N) => f($r, {
        dataKey: String(C),
        fill: r[C].color ? xr(r[C].color) : Wn(_.length + T.length + N),
        r: 4,
        isAnimationActive: !1,
        yAxisId: h?.axisPosition === "right" ? "right" : void 0,
        shape: Qh(String(C))
      }, `scatter-${String(C)}`)), l && f(Ic, {
        content: f(Lc, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, tf = ga(ef), rf = ({ value: r, max: e = 100, label: t, color: n }, i) => {
  const s = n ? xr(n) : xr("categorical-1"), a = r / e * 100;
  return j("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [f("div", {
      className: "flex-grow",
      children: f(Pc, {
        color: s,
        value: a,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": r,
        "aria-label": `${a.toFixed(1)}%`
      })
    }), t && f("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, nf = ga(rf), Gp = ot(
  {
    name: "AreaChart",
    type: "info"
  },
  zc
), Up = ot(
  {
    name: "BarChart",
    type: "info"
  },
  Fc
), Zp = ot(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Bc
), qp = ot(
  {
    name: "LineChart",
    type: "info"
  },
  Hc
), Yp = ot(
  {
    name: "PieChart",
    type: "info"
  },
  Vc
), Kp = ot(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  jc
), Xp = ot(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  nf
), Jp = ot(
  {
    name: "ComboChart",
    type: "info"
  },
  tf
), sf = (r) => typeof r == "boolean" || !r ? {
  show: !!r,
  invertStatus: !1
} : {
  show: r.show ?? !0,
  invertStatus: r.invertStatus ?? !1
}, lo = ({ label: r, ...e }) => {
  const t = $c(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = sf(e.trend), s = t(e.comparison), a = Wc(n.numericValue, n.formatterOptions), o = Ji(s.numericValue), l = Ji(n.numericValue), c = Z(() => {
    if (!(!o || !i.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, i.show]);
  return j("div", {
    className: "flex flex-col gap-2",
    children: [r && f("div", {
      children: r
    }), j("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [f("span", {
        className: "font-bold text-2xl",
        children: a
      }), o !== void 0 && f(Gc, {
        percentage: c,
        amount: s,
        invertStatus: i.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, af = () => j("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [f(bt, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), j("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [f(bt, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), f(bt, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
lo.displayName = "F0BigNumber";
const of = Ys(lo, af), Qp = st("F0BigNumber", of), co = {
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
}, uo = {
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
}, lf = {}, cf = {
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
}, df = {
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
}, uf = {
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
}, hf = {
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
}, ff = {
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
}, mf = {
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
}, ho = {
  width: cf,
  height: df,
  minWidth: uf,
  minHeight: hf,
  maxWidth: ff,
  maxHeight: mf
}, fo = {
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
}, mo = {
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
}, po = {
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
}, pf = {}, go = {
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
}, vo = {
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
}, gf = {}, vf = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, yo = {
  overflow: vf,
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
}, yf = {}, bo = {
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
}, bf = {}, xf = {
  ...fo,
  ...bo,
  ...vo,
  ...po,
  ...go,
  ...ho,
  ...co,
  ...uo,
  ...yo,
  ...mo
};
function wf(r, e) {
  return e.split(" ").map((t) => `${r}:${t}`).join(" ");
}
function _f(r, e) {
  const t = [];
  for (const [n, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = xf[n];
    if (!s) continue;
    const a = s[String(i)];
    a && t.push(wf(r, a));
  }
  return t.join(" ");
}
const Cf = Vt({
  base: "",
  variants: {
    ...fo,
    ...bo,
    ...vo,
    ...po,
    ...go,
    ...ho,
    ...co,
    ...uo,
    ...yo,
    ...mo
  },
  defaultVariants: {
    ...bf,
    ...gf,
    ...pf,
    ...lf,
    ...yf
  }
}), Ef = ["sm", "md", "lg", "xl"], xo = Ge(({ display: r, position: e, padding: t, paddingX: n, paddingY: i, paddingTop: s, paddingBottom: a, paddingLeft: o, paddingRight: l, margin: c, marginX: d, marginY: u, marginTop: h, marginBottom: p, marginLeft: g, marginRight: b, gap: _, columns: T, rows: D, colSpan: S, colStart: O, rowSpan: x, width: E, height: C, minWidth: N, minHeight: V, maxWidth: I, maxHeight: R, background: k, borderColor: A, border: $, borderTop: ie, borderBottom: fe, borderLeft: ne, borderRight: ce, borderRadius: oe, borderRadiusTopLeft: we, borderRadiusTopRight: Ue, borderRadiusBottomLeft: _e, borderRadiusBottomRight: ke, borderStyle: Oe, overflow: ct, overflowX: Se, overflowY: Ve, divider: Re, dividerColor: Me, alignItems: le, justifyContent: Je, flexDirection: Le, flexWrap: je, grow: re, shrink: ye, sm: be, md: Qe, lg: m, xl: v, ...w }, F) => {
  const P = ie && ie !== "none" || fe && fe !== "none" || ne && ne !== "none" || ce && ce !== "none", L = $ && $ !== "none" || P, q = {
    sm: be,
    md: Qe,
    lg: m,
    xl: v
  }, ee = Ef.map((xe) => {
    const ge = q[xe];
    return ge ? _f(xe, ge) : "";
  }).filter(Boolean).join(" ");
  return f("div", {
    ref: F,
    className: se(P && "border-0", Cf({
      display: r,
      position: e,
      padding: t,
      paddingX: n,
      paddingY: i,
      paddingTop: s,
      paddingBottom: a,
      paddingLeft: o,
      paddingRight: l,
      margin: c,
      marginX: d,
      marginY: u,
      marginTop: h,
      marginBottom: p,
      marginLeft: g,
      marginRight: b,
      gap: _,
      columns: T,
      rows: D,
      colSpan: S,
      colStart: O,
      rowSpan: x,
      width: E,
      height: C,
      minWidth: N,
      minHeight: V,
      maxWidth: I,
      maxHeight: R,
      background: k,
      borderColor: A,
      border: $,
      borderTop: ie,
      borderBottom: fe,
      borderLeft: ne,
      borderRight: ce,
      borderRadius: oe,
      borderRadiusTopLeft: we,
      borderRadiusTopRight: Ue,
      borderRadiusBottomLeft: _e,
      borderRadiusBottomRight: ke,
      borderStyle: Oe,
      overflow: ct,
      overflowX: Se,
      overflowY: Ve,
      divider: Re,
      dividerColor: Me,
      alignItems: le,
      justifyContent: Je,
      flexDirection: Le,
      flexWrap: je,
      grow: re,
      shrink: ye
    }), ee, L && !A && "border-f1-border", Re && !Me && "divide-f1-border", "scrollbar-macos"),
    ...w
  });
});
xo.displayName = "F0Box";
const eg = ot({
  name: "F0Box",
  type: "layout"
}, xo), tg = xl.filter(
  (r) => r !== "ai"
), rg = Ks, ng = ["default", "outline", "neutral"], ig = Ks, sg = ["sm", "md", "lg"], ag = ["compact", "expanded"], og = wl, lg = [
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
], di = ({ count: r, list: e }) => {
  const [t, n] = te(!1), i = f(en, {
    label: `+${r}`
  });
  return e?.length ? j(Xs, {
    open: t,
    onOpenChange: n,
    children: [f(Js, {
      asChild: !0,
      children: f("button", {
        className: Qs("inline-flex flex-shrink-0 items-center"),
        children: i
      })
    }), f(ea, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: j(ta, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, a) => f("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: f(en, {
            ...s
          })
        }, a)), f(ra, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
};
di.displayName = "ChipCounter";
const wo = ({ chips: r, max: e = 4, remainingCount: t, layout: n = "compact" }) => {
  if (n === "fill")
    return f(_l, {
      items: r,
      renderListItem: (l) => f(en, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => f(di, {
        count: (t ?? 0) + l,
        list: t ? void 0 : r.slice(r.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const i = r.slice(0, e), s = r.slice(e), a = t ?? r.length - e, o = a > 0;
  return j("div", {
    className: "flex items-center gap-2",
    children: [i.map((l, c) => f(en, {
      ...l
    }, c)), o && f(di, {
      count: a,
      list: t ? void 0 : s
    })]
  });
};
wo.displayName = "F0ChipList";
const cg = st("F0ChipList", wo), dg = Cl, kf = Vt({
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
}), Sf = Vt({
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
}), ug = ({ title: r, description: e, action: t, link: n, icon: i, variant: s = "neutral" }) => {
  const a = Y(null);
  return f("div", {
    ref: a,
    className: "@container",
    children: f("div", {
      className: kf({
        variant: s
      }),
      children: j("div", {
        className: se("flex flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between"),
        children: [j("div", {
          className: "flex flex-row gap-2",
          children: [f("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? f(El, {
              icon: i || kl,
              size: "sm"
            }) : f(Uc, {
              type: s,
              size: "sm"
            })
          }), j("div", {
            className: "flex flex-col gap-0.5",
            children: [f("p", {
              className: Sf({
                variant: s
              }),
              children: r
            }), f("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || n) && j("div", {
          className: se("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0"),
          children: [n && f(Sl, {
            href: n.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: n.label
          }), t && f(ht, {
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
}, Df = 388;
function Rf({ filters: r, value: e, onChange: t, height: n, width: i = 600, className: s, showApplyButton: a = !0, applyButtonLabel: o }) {
  const l = zr(), [c, d] = te(null), [u, h] = te(e);
  X(() => {
    h(e);
  }, [e]), X(() => {
    if (!c && r) {
      const _ = Object.keys(r);
      if (_.length > 0) {
        const T = _.find((D) => {
          const S = u[D], O = Zi(r[D].type);
          return S !== void 0 && !O.isEmpty(S, {
            schema: r[D],
            i18n: l
          });
        });
        d(T ?? _[0]);
      }
    }
  }, [r, c, u, l]);
  const p = (_, T) => {
    const D = {
      ...u,
      [_]: T
    };
    h(D), a || t(D);
  }, g = () => {
    t(u);
  }, b = Z(() => n || Object.entries(r).reduce((T, [D, S]) => {
    const O = Zi(S.type);
    return Math.max(T, O?.formHeight || Df);
  }, 0), [r, n]);
  return !r || Object.keys(r).length === 0 ? null : f("div", {
    className: se("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: i
    },
    children: f(Dl, {
      filters: r,
      tempFilters: u,
      selectedFilterKey: c,
      onFilterSelect: d,
      onFilterChange: p,
      onApply: g,
      height: b,
      showApplyButton: a,
      applyButtonLabel: o
    })
  });
}
Rf.displayName = "F0FilterPickerContent";
var Wr = (r) => r.type === "checkbox", Gt = (r) => r instanceof Date, Be = (r) => r == null;
const _o = (r) => typeof r == "object";
var Ee = (r) => !Be(r) && !Array.isArray(r) && _o(r) && !Gt(r), Co = (r) => Ee(r) && r.target ? Wr(r.target) ? r.target.checked : r.target.value : r, Nf = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r, Eo = (r, e) => r.has(Nf(e)), Af = (r) => {
  const e = r.constructor && r.constructor.prototype;
  return Ee(e) && e.hasOwnProperty("isPrototypeOf");
}, Li = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function $e(r) {
  let e;
  const t = Array.isArray(r), n = typeof FileList < "u" ? r instanceof FileList : !1;
  if (r instanceof Date)
    e = new Date(r);
  else if (r instanceof Set)
    e = new Set(r);
  else if (!(Li && (r instanceof Blob || n)) && (t || Ee(r)))
    if (e = t ? [] : {}, !t && !Af(r))
      e = r;
    else
      for (const i in r)
        r.hasOwnProperty(i) && (e[i] = $e(r[i]));
  else
    return r;
  return e;
}
var Fn = (r) => Array.isArray(r) ? r.filter(Boolean) : [], Ce = (r) => r === void 0, z = (r, e, t) => {
  if (!e || !Ee(r))
    return t;
  const n = Fn(e.split(/[,[\].]+?/)).reduce((i, s) => Be(i) ? i : i[s], r);
  return Ce(n) || n === r ? Ce(r[e]) ? t : r[e] : n;
}, it = (r) => typeof r == "boolean", Pi = (r) => /^\w*$/.test(r), ko = (r) => Fn(r.replace(/["|']|\]/g, "").split(/\.|\[/)), pe = (r, e, t) => {
  let n = -1;
  const i = Pi(e) ? [e] : ko(e), s = i.length, a = s - 1;
  for (; ++n < s; ) {
    const o = i[n];
    let l = t;
    if (n !== a) {
      const c = r[o];
      l = Ee(c) || Array.isArray(c) ? c : isNaN(+i[n + 1]) ? {} : [];
    }
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    r[o] = l, r = r[o];
  }
  return r;
};
const gn = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, dt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, St = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, So = B.createContext(null), jt = () => B.useContext(So), Tf = (r) => {
  const { children: e, ...t } = r;
  return B.createElement(So.Provider, { value: t }, e);
};
var Do = (r, e, t, n = !0) => {
  const i = {
    defaultValues: e._defaultValues
  };
  for (const s in r)
    Object.defineProperty(i, s, {
      get: () => {
        const a = s;
        return e._proxyFormState[a] !== dt.all && (e._proxyFormState[a] = !n || dt.all), t && (t[a] = !0), r[a];
      }
    });
  return i;
}, We = (r) => Ee(r) && !Object.keys(r).length, Ro = (r, e, t, n) => {
  t(r);
  const { name: i, ...s } = r;
  return We(s) || Object.keys(s).length >= Object.keys(e).length || Object.keys(s).find((a) => e[a] === (!n || dt.all));
}, Sr = (r) => Array.isArray(r) ? r : [r], No = (r, e, t) => !r || !e || r === e || Sr(r).some((n) => n && (t ? n === e : n.startsWith(e) || e.startsWith(n)));
function zi(r) {
  const e = B.useRef(r);
  e.current = r, B.useEffect(() => {
    const t = !r.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [r.disabled]);
}
function Of(r) {
  const e = jt(), { control: t = e.control, disabled: n, name: i, exact: s } = r || {}, [a, o] = B.useState(t._formState), l = B.useRef(!0), c = B.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = B.useRef(i);
  return d.current = i, zi({
    disabled: n,
    next: (u) => l.current && No(d.current, u.name, s) && Ro(u, c.current, t._updateFormState) && o({
      ...t._formState,
      ...u
    }),
    subject: t._subjects.state
  }), B.useEffect(() => (l.current = !0, c.current.isValid && t._updateValid(!0), () => {
    l.current = !1;
  }), [t]), B.useMemo(() => Do(a, t, c.current, !1), [a, t]);
}
var _t = (r) => typeof r == "string", Ao = (r, e, t, n, i) => _t(r) ? (n && e.watch.add(r), z(t, r, i)) : Array.isArray(r) ? r.map((s) => (n && e.watch.add(s), z(t, s))) : (n && (e.watchAll = !0), t);
function Mf(r) {
  const e = jt(), { control: t = e.control, name: n, defaultValue: i, disabled: s, exact: a } = r || {}, o = B.useRef(n);
  o.current = n, zi({
    disabled: s,
    subject: t._subjects.values,
    next: (d) => {
      No(o.current, d.name, a) && c($e(Ao(o.current, t._names, d.values || t._formValues, !1, i)));
    }
  });
  const [l, c] = B.useState(t._getWatch(n, i));
  return B.useEffect(() => t._removeUnmounted()), l;
}
function If(r) {
  const e = jt(), { name: t, disabled: n, control: i = e.control, shouldUnregister: s } = r, a = Eo(i._names.array, t), o = Mf({
    control: i,
    name: t,
    defaultValue: z(i._formValues, t, z(i._defaultValues, t, r.defaultValue)),
    exact: !0
  }), l = Of({
    control: i,
    name: t,
    exact: !0
  }), c = B.useRef(i.register(t, {
    ...r.rules,
    value: o,
    ...it(r.disabled) ? { disabled: r.disabled } : {}
  })), d = B.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!z(l.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!z(l.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!z(l.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!z(l.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => z(l.errors, t)
    }
  }), [l, t]), u = B.useMemo(() => ({
    name: t,
    value: o,
    ...it(n) || l.disabled ? { disabled: l.disabled || n } : {},
    onChange: (h) => c.current.onChange({
      target: {
        value: Co(h),
        name: t
      },
      type: gn.CHANGE
    }),
    onBlur: () => c.current.onBlur({
      target: {
        value: z(i._formValues, t),
        name: t
      },
      type: gn.BLUR
    }),
    ref: (h) => {
      const p = z(i._fields, t);
      p && h && (p._f.ref = {
        focus: () => h.focus(),
        select: () => h.select(),
        setCustomValidity: (g) => h.setCustomValidity(g),
        reportValidity: () => h.reportValidity()
      });
    }
  }), [
    t,
    i._formValues,
    n,
    l.disabled,
    o,
    i._fields
  ]);
  return B.useEffect(() => {
    const h = i._options.shouldUnregister || s, p = (g, b) => {
      const _ = z(i._fields, g);
      _ && _._f && (_._f.mount = b);
    };
    if (p(t, !0), h) {
      const g = $e(z(i._options.defaultValues, t));
      pe(i._defaultValues, t, g), Ce(z(i._formValues, t)) && pe(i._formValues, t, g);
    }
    return !a && i.register(t), () => {
      (a ? h && !i._state.action : h) ? i.unregister(t) : p(t, !1);
    };
  }, [t, i, a, s]), B.useEffect(() => {
    i._updateDisabledField({
      disabled: n,
      fields: i._fields,
      name: t
    });
  }, [n, t, i]), B.useMemo(() => ({
    field: u,
    formState: l,
    fieldState: d
  }), [u, l, d]);
}
const Lf = (r) => r.render(If(r));
var To = (r, e, t, n, i) => e ? {
  ...t[r],
  types: {
    ...t[r] && t[r].types ? t[r].types : {},
    [n]: i || !0
  }
} : {}, ys = (r) => ({
  isOnSubmit: !r || r === dt.onSubmit,
  isOnBlur: r === dt.onBlur,
  isOnChange: r === dt.onChange,
  isOnAll: r === dt.all,
  isOnTouch: r === dt.onTouched
}), bs = (r, e, t) => !t && (e.watchAll || e.watch.has(r) || [...e.watch].some((n) => r.startsWith(n) && /^\.\w+/.test(r.slice(n.length))));
const Dr = (r, e, t, n) => {
  for (const i of t || Object.keys(r)) {
    const s = z(r, i);
    if (s) {
      const { _f: a, ...o } = s;
      if (a) {
        if (a.refs && a.refs[0] && e(a.refs[0], i) && !n)
          return !0;
        if (a.ref && e(a.ref, a.name) && !n)
          return !0;
        if (Dr(o, e))
          break;
      } else if (Ee(o) && Dr(o, e))
        break;
    }
  }
};
var Pf = (r, e, t) => {
  const n = Sr(z(r, t));
  return pe(n, "root", e[t]), pe(r, t, n), r;
}, Fi = (r) => r.type === "file", wt = (r) => typeof r == "function", vn = (r) => {
  if (!Li)
    return !1;
  const e = r ? r.ownerDocument : 0;
  return r instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, Qr = (r) => _t(r), Bi = (r) => r.type === "radio", yn = (r) => r instanceof RegExp;
const xs = {
  value: !1,
  isValid: !1
}, ws = { value: !0, isValid: !0 };
var Oo = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const e = r.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: e, isValid: !!e.length };
    }
    return r[0].checked && !r[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      r[0].attributes && !Ce(r[0].attributes.value) ? Ce(r[0].value) || r[0].value === "" ? ws : { value: r[0].value, isValid: !0 } : ws
    ) : xs;
  }
  return xs;
};
const _s = {
  isValid: !1,
  value: null
};
var Mo = (r) => Array.isArray(r) ? r.reduce((e, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : e, _s) : _s;
function Cs(r, e, t = "validate") {
  if (Qr(r) || Array.isArray(r) && r.every(Qr) || it(r) && !r)
    return {
      type: t,
      message: Qr(r) ? r : "",
      ref: e
    };
}
var Xt = (r) => Ee(r) && !yn(r) ? r : {
  value: r,
  message: ""
}, Es = async (r, e, t, n, i, s) => {
  const { ref: a, refs: o, required: l, maxLength: c, minLength: d, min: u, max: h, pattern: p, validate: g, name: b, valueAsNumber: _, mount: T } = r._f, D = z(t, b);
  if (!T || e.has(b))
    return {};
  const S = o ? o[0] : a, O = (k) => {
    i && S.reportValidity && (S.setCustomValidity(it(k) ? "" : k || ""), S.reportValidity());
  }, x = {}, E = Bi(a), C = Wr(a), N = E || C, V = (_ || Fi(a)) && Ce(a.value) && Ce(D) || vn(a) && a.value === "" || D === "" || Array.isArray(D) && !D.length, I = To.bind(null, b, n, x), R = (k, A, $, ie = St.maxLength, fe = St.minLength) => {
    const ne = k ? A : $;
    x[b] = {
      type: k ? ie : fe,
      message: ne,
      ref: a,
      ...I(k ? ie : fe, ne)
    };
  };
  if (s ? !Array.isArray(D) || !D.length : l && (!N && (V || Be(D)) || it(D) && !D || C && !Oo(o).isValid || E && !Mo(o).isValid)) {
    const { value: k, message: A } = Qr(l) ? { value: !!l, message: l } : Xt(l);
    if (k && (x[b] = {
      type: St.required,
      message: A,
      ref: S,
      ...I(St.required, A)
    }, !n))
      return O(A), x;
  }
  if (!V && (!Be(u) || !Be(h))) {
    let k, A;
    const $ = Xt(h), ie = Xt(u);
    if (!Be(D) && !isNaN(D)) {
      const fe = a.valueAsNumber || D && +D;
      Be($.value) || (k = fe > $.value), Be(ie.value) || (A = fe < ie.value);
    } else {
      const fe = a.valueAsDate || new Date(D), ne = (we) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + we), ce = a.type == "time", oe = a.type == "week";
      _t($.value) && D && (k = ce ? ne(D) > ne($.value) : oe ? D > $.value : fe > new Date($.value)), _t(ie.value) && D && (A = ce ? ne(D) < ne(ie.value) : oe ? D < ie.value : fe < new Date(ie.value));
    }
    if ((k || A) && (R(!!k, $.message, ie.message, St.max, St.min), !n))
      return O(x[b].message), x;
  }
  if ((c || d) && !V && (_t(D) || s && Array.isArray(D))) {
    const k = Xt(c), A = Xt(d), $ = !Be(k.value) && D.length > +k.value, ie = !Be(A.value) && D.length < +A.value;
    if (($ || ie) && (R($, k.message, A.message), !n))
      return O(x[b].message), x;
  }
  if (p && !V && _t(D)) {
    const { value: k, message: A } = Xt(p);
    if (yn(k) && !D.match(k) && (x[b] = {
      type: St.pattern,
      message: A,
      ref: a,
      ...I(St.pattern, A)
    }, !n))
      return O(A), x;
  }
  if (g) {
    if (wt(g)) {
      const k = await g(D, t), A = Cs(k, S);
      if (A && (x[b] = {
        ...A,
        ...I(St.validate, A.message)
      }, !n))
        return O(A.message), x;
    } else if (Ee(g)) {
      let k = {};
      for (const A in g) {
        if (!We(k) && !n)
          break;
        const $ = Cs(await g[A](D, t), S, A);
        $ && (k = {
          ...$,
          ...I(A, $.message)
        }, O($.message), n && (x[b] = k));
      }
      if (!We(k) && (x[b] = {
        ref: S,
        ...k
      }, !n))
        return x;
    }
  }
  return O(!0), x;
};
function zf(r, e) {
  const t = e.slice(0, -1).length;
  let n = 0;
  for (; n < t; )
    r = Ce(r) ? n++ : r[e[n++]];
  return r;
}
function Ff(r) {
  for (const e in r)
    if (r.hasOwnProperty(e) && !Ce(r[e]))
      return !1;
  return !0;
}
function Ne(r, e) {
  const t = Array.isArray(e) ? e : Pi(e) ? [e] : ko(e), n = t.length === 1 ? r : zf(r, t), i = t.length - 1, s = t[i];
  return n && delete n[s], i !== 0 && (Ee(n) && We(n) || Array.isArray(n) && Ff(n)) && Ne(r, t.slice(0, -1)), r;
}
var Kn = () => {
  let r = [];
  return {
    get observers() {
      return r;
    },
    next: (i) => {
      for (const s of r)
        s.next && s.next(i);
    },
    subscribe: (i) => (r.push(i), {
      unsubscribe: () => {
        r = r.filter((s) => s !== i);
      }
    }),
    unsubscribe: () => {
      r = [];
    }
  };
}, ui = (r) => Be(r) || !_o(r);
function Lt(r, e) {
  if (ui(r) || ui(e))
    return r === e;
  if (Gt(r) && Gt(e))
    return r.getTime() === e.getTime();
  const t = Object.keys(r), n = Object.keys(e);
  if (t.length !== n.length)
    return !1;
  for (const i of t) {
    const s = r[i];
    if (!n.includes(i))
      return !1;
    if (i !== "ref") {
      const a = e[i];
      if (Gt(s) && Gt(a) || Ee(s) && Ee(a) || Array.isArray(s) && Array.isArray(a) ? !Lt(s, a) : s !== a)
        return !1;
    }
  }
  return !0;
}
var Io = (r) => r.type === "select-multiple", Bf = (r) => Bi(r) || Wr(r), Xn = (r) => vn(r) && r.isConnected, Lo = (r) => {
  for (const e in r)
    if (wt(r[e]))
      return !0;
  return !1;
};
function bn(r, e = {}) {
  const t = Array.isArray(r);
  if (Ee(r) || t)
    for (const n in r)
      Array.isArray(r[n]) || Ee(r[n]) && !Lo(r[n]) ? (e[n] = Array.isArray(r[n]) ? [] : {}, bn(r[n], e[n])) : Be(r[n]) || (e[n] = !0);
  return e;
}
function Po(r, e, t) {
  const n = Array.isArray(r);
  if (Ee(r) || n)
    for (const i in r)
      Array.isArray(r[i]) || Ee(r[i]) && !Lo(r[i]) ? Ce(e) || ui(t[i]) ? t[i] = Array.isArray(r[i]) ? bn(r[i], []) : { ...bn(r[i]) } : Po(r[i], Be(e) ? {} : e[i], t[i]) : t[i] = !Lt(r[i], e[i]);
  return t;
}
var vr = (r, e) => Po(r, e, bn(e)), zo = (r, { valueAsNumber: e, valueAsDate: t, setValueAs: n }) => Ce(r) ? r : e ? r === "" ? NaN : r && +r : t && _t(r) ? new Date(r) : n ? n(r) : r;
function Jn(r) {
  const e = r.ref;
  return Fi(e) ? e.files : Bi(e) ? Mo(r.refs).value : Io(e) ? [...e.selectedOptions].map(({ value: t }) => t) : Wr(e) ? Oo(r.refs).value : zo(Ce(e.value) ? r.ref.value : e.value, r);
}
var Hf = (r, e, t, n) => {
  const i = {};
  for (const s of r) {
    const a = z(e, s);
    a && pe(i, s, a._f);
  }
  return {
    criteriaMode: t,
    names: [...r],
    fields: i,
    shouldUseNativeValidation: n
  };
}, yr = (r) => Ce(r) ? r : yn(r) ? r.source : Ee(r) ? yn(r.value) ? r.value.source : r.value : r;
const ks = "AsyncFunction";
var Vf = (r) => !!r && !!r.validate && !!(wt(r.validate) && r.validate.constructor.name === ks || Ee(r.validate) && Object.values(r.validate).find((e) => e.constructor.name === ks)), jf = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function Ss(r, e, t) {
  const n = z(r, t);
  if (n || Pi(t))
    return {
      error: n,
      name: t
    };
  const i = t.split(".");
  for (; i.length; ) {
    const s = i.join("."), a = z(e, s), o = z(r, s);
    if (a && !Array.isArray(a) && t !== s)
      return { name: t };
    if (o && o.type)
      return {
        name: s,
        error: o
      };
    i.pop();
  }
  return {
    name: t
  };
}
var $f = (r, e, t, n, i) => i.isOnAll ? !1 : !t && i.isOnTouch ? !(e || r) : (t ? n.isOnBlur : i.isOnBlur) ? !r : (t ? n.isOnChange : i.isOnChange) ? r : !0, Wf = (r, e) => !Fn(z(r, e)).length && Ne(r, e);
const Gf = {
  mode: dt.onSubmit,
  reValidateMode: dt.onChange,
  shouldFocusError: !0
};
function Uf(r = {}) {
  let e = {
    ...Gf,
    ...r
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: wt(e.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1
  }, n = {}, i = Ee(e.defaultValues) || Ee(e.values) ? $e(e.defaultValues || e.values) || {} : {}, s = e.shouldUnregister ? {} : $e(i), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, o = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, c = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, u = {
    values: Kn(),
    array: Kn(),
    state: Kn()
  }, h = ys(e.mode), p = ys(e.reValidateMode), g = e.criteriaMode === dt.all, b = (m) => (v) => {
    clearTimeout(c), c = setTimeout(m, v);
  }, _ = async (m) => {
    if (!e.disabled && (d.isValid || m)) {
      const v = e.resolver ? We((await N()).errors) : await I(n, !0);
      v !== t.isValid && u.state.next({
        isValid: v
      });
    }
  }, T = (m, v) => {
    !e.disabled && (d.isValidating || d.validatingFields) && ((m || Array.from(o.mount)).forEach((w) => {
      w && (v ? pe(t.validatingFields, w, v) : Ne(t.validatingFields, w));
    }), u.state.next({
      validatingFields: t.validatingFields,
      isValidating: !We(t.validatingFields)
    }));
  }, D = (m, v = [], w, F, P = !0, L = !0) => {
    if (F && w && !e.disabled) {
      if (a.action = !0, L && Array.isArray(z(n, m))) {
        const q = w(z(n, m), F.argA, F.argB);
        P && pe(n, m, q);
      }
      if (L && Array.isArray(z(t.errors, m))) {
        const q = w(z(t.errors, m), F.argA, F.argB);
        P && pe(t.errors, m, q), Wf(t.errors, m);
      }
      if (d.touchedFields && L && Array.isArray(z(t.touchedFields, m))) {
        const q = w(z(t.touchedFields, m), F.argA, F.argB);
        P && pe(t.touchedFields, m, q);
      }
      d.dirtyFields && (t.dirtyFields = vr(i, s)), u.state.next({
        name: m,
        isDirty: k(m, v),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      pe(s, m, v);
  }, S = (m, v) => {
    pe(t.errors, m, v), u.state.next({
      errors: t.errors
    });
  }, O = (m) => {
    t.errors = m, u.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, x = (m, v, w, F) => {
    const P = z(n, m);
    if (P) {
      const L = z(s, m, Ce(w) ? z(i, m) : w);
      Ce(L) || F && F.defaultChecked || v ? pe(s, m, v ? L : Jn(P._f)) : ie(m, L), a.mount && _();
    }
  }, E = (m, v, w, F, P) => {
    let L = !1, q = !1;
    const ee = {
      name: m
    };
    if (!e.disabled) {
      const xe = !!(z(n, m) && z(n, m)._f && z(n, m)._f.disabled);
      if (!w || F) {
        d.isDirty && (q = t.isDirty, t.isDirty = ee.isDirty = k(), L = q !== ee.isDirty);
        const ge = xe || Lt(z(i, m), v);
        q = !!(!xe && z(t.dirtyFields, m)), ge || xe ? Ne(t.dirtyFields, m) : pe(t.dirtyFields, m, !0), ee.dirtyFields = t.dirtyFields, L = L || d.dirtyFields && q !== !ge;
      }
      if (w) {
        const ge = z(t.touchedFields, m);
        ge || (pe(t.touchedFields, m, w), ee.touchedFields = t.touchedFields, L = L || d.touchedFields && ge !== w);
      }
      L && P && u.state.next(ee);
    }
    return L ? ee : {};
  }, C = (m, v, w, F) => {
    const P = z(t.errors, m), L = d.isValid && it(v) && t.isValid !== v;
    if (e.delayError && w ? (l = b(() => S(m, w)), l(e.delayError)) : (clearTimeout(c), l = null, w ? pe(t.errors, m, w) : Ne(t.errors, m)), (w ? !Lt(P, w) : P) || !We(F) || L) {
      const q = {
        ...F,
        ...L && it(v) ? { isValid: v } : {},
        errors: t.errors,
        name: m
      };
      t = {
        ...t,
        ...q
      }, u.state.next(q);
    }
  }, N = async (m) => {
    T(m, !0);
    const v = await e.resolver(s, e.context, Hf(m || o.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return T(m), v;
  }, V = async (m) => {
    const { errors: v } = await N(m);
    if (m)
      for (const w of m) {
        const F = z(v, w);
        F ? pe(t.errors, w, F) : Ne(t.errors, w);
      }
    else
      t.errors = v;
    return v;
  }, I = async (m, v, w = {
    valid: !0
  }) => {
    for (const F in m) {
      const P = m[F];
      if (P) {
        const { _f: L, ...q } = P;
        if (L) {
          const ee = o.array.has(L.name), xe = P._f && Vf(P._f);
          xe && d.validatingFields && T([F], !0);
          const ge = await Es(P, o.disabled, s, g, e.shouldUseNativeValidation && !v, ee);
          if (xe && d.validatingFields && T([F]), ge[L.name] && (w.valid = !1, v))
            break;
          !v && (z(ge, L.name) ? ee ? Pf(t.errors, ge, L.name) : pe(t.errors, L.name, ge[L.name]) : Ne(t.errors, L.name));
        }
        !We(q) && await I(q, v, w);
      }
    }
    return w.valid;
  }, R = () => {
    for (const m of o.unMount) {
      const v = z(n, m);
      v && (v._f.refs ? v._f.refs.every((w) => !Xn(w)) : !Xn(v._f.ref)) && Se(m);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, k = (m, v) => !e.disabled && (m && v && pe(s, m, v), !Lt(Ue(), i)), A = (m, v, w) => Ao(m, o, {
    ...a.mount ? s : Ce(v) ? i : _t(m) ? { [m]: v } : v
  }, w, v), $ = (m) => Fn(z(a.mount ? s : i, m, e.shouldUnregister ? z(i, m, []) : [])), ie = (m, v, w = {}) => {
    const F = z(n, m);
    let P = v;
    if (F) {
      const L = F._f;
      L && (!L.disabled && pe(s, m, zo(v, L)), P = vn(L.ref) && Be(v) ? "" : v, Io(L.ref) ? [...L.ref.options].forEach((q) => q.selected = P.includes(q.value)) : L.refs ? Wr(L.ref) ? L.refs.length > 1 ? L.refs.forEach((q) => (!q.defaultChecked || !q.disabled) && (q.checked = Array.isArray(P) ? !!P.find((ee) => ee === q.value) : P === q.value)) : L.refs[0] && (L.refs[0].checked = !!P) : L.refs.forEach((q) => q.checked = q.value === P) : Fi(L.ref) ? L.ref.value = "" : (L.ref.value = P, L.ref.type || u.values.next({
        name: m,
        values: { ...s }
      })));
    }
    (w.shouldDirty || w.shouldTouch) && E(m, P, w.shouldTouch, w.shouldDirty, !0), w.shouldValidate && we(m);
  }, fe = (m, v, w) => {
    for (const F in v) {
      const P = v[F], L = `${m}.${F}`, q = z(n, L);
      (o.array.has(m) || Ee(P) || q && !q._f) && !Gt(P) ? fe(L, P, w) : ie(L, P, w);
    }
  }, ne = (m, v, w = {}) => {
    const F = z(n, m), P = o.array.has(m), L = $e(v);
    pe(s, m, L), P ? (u.array.next({
      name: m,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && w.shouldDirty && u.state.next({
      name: m,
      dirtyFields: vr(i, s),
      isDirty: k(m, L)
    })) : F && !F._f && !Be(L) ? fe(m, L, w) : ie(m, L, w), bs(m, o) && u.state.next({ ...t }), u.values.next({
      name: a.mount ? m : void 0,
      values: { ...s }
    });
  }, ce = async (m) => {
    a.mount = !0;
    const v = m.target;
    let w = v.name, F = !0;
    const P = z(n, w), L = () => v.type ? Jn(P._f) : Co(m), q = (ee) => {
      F = Number.isNaN(ee) || Gt(ee) && isNaN(ee.getTime()) || Lt(ee, z(s, w, ee));
    };
    if (P) {
      let ee, xe;
      const ge = L(), ze = m.type === gn.BLUR || m.type === gn.FOCUS_OUT, Wt = !jf(P._f) && !e.resolver && !z(t.errors, w) && !P._f.deps || $f(ze, z(t.touchedFields, w), t.isSubmitted, p, h), qt = bs(w, o, ze);
      pe(s, w, ge), ze ? (P._f.onBlur && P._f.onBlur(m), l && l(0)) : P._f.onChange && P._f.onChange(m);
      const et = E(w, ge, ze, !1), Gr = !We(et) || qt;
      if (!ze && u.values.next({
        name: w,
        type: m.type,
        values: { ...s }
      }), Wt)
        return d.isValid && (e.mode === "onBlur" && ze ? _() : ze || _()), Gr && u.state.next({ name: w, ...qt ? {} : et });
      if (!ze && qt && u.state.next({ ...t }), e.resolver) {
        const { errors: Ur } = await N([w]);
        if (q(ge), F) {
          const Vn = Ss(t.errors, n, w), Yt = Ss(Ur, n, Vn.name || w);
          ee = Yt.error, w = Yt.name, xe = We(Ur);
        }
      } else
        T([w], !0), ee = (await Es(P, o.disabled, s, g, e.shouldUseNativeValidation))[w], T([w]), q(ge), F && (ee ? xe = !1 : d.isValid && (xe = await I(n, !0)));
      F && (P._f.deps && we(P._f.deps), C(w, xe, ee, et));
    }
  }, oe = (m, v) => {
    if (z(t.errors, v) && m.focus)
      return m.focus(), 1;
  }, we = async (m, v = {}) => {
    let w, F;
    const P = Sr(m);
    if (e.resolver) {
      const L = await V(Ce(m) ? m : P);
      w = We(L), F = m ? !P.some((q) => z(L, q)) : w;
    } else m ? (F = (await Promise.all(P.map(async (L) => {
      const q = z(n, L);
      return await I(q && q._f ? { [L]: q } : q);
    }))).every(Boolean), !(!F && !t.isValid) && _()) : F = w = await I(n);
    return u.state.next({
      ...!_t(m) || d.isValid && w !== t.isValid ? {} : { name: m },
      ...e.resolver || !m ? { isValid: w } : {},
      errors: t.errors
    }), v.shouldFocus && !F && Dr(n, oe, m ? P : o.mount), F;
  }, Ue = (m) => {
    const v = {
      ...a.mount ? s : i
    };
    return Ce(m) ? v : _t(m) ? z(v, m) : m.map((w) => z(v, w));
  }, _e = (m, v) => ({
    invalid: !!z((v || t).errors, m),
    isDirty: !!z((v || t).dirtyFields, m),
    error: z((v || t).errors, m),
    isValidating: !!z(t.validatingFields, m),
    isTouched: !!z((v || t).touchedFields, m)
  }), ke = (m) => {
    m && Sr(m).forEach((v) => Ne(t.errors, v)), u.state.next({
      errors: m ? t.errors : {}
    });
  }, Oe = (m, v, w) => {
    const F = (z(n, m, { _f: {} })._f || {}).ref, P = z(t.errors, m) || {}, { ref: L, message: q, type: ee, ...xe } = P;
    pe(t.errors, m, {
      ...xe,
      ...v,
      ref: F
    }), u.state.next({
      name: m,
      errors: t.errors,
      isValid: !1
    }), w && w.shouldFocus && F && F.focus && F.focus();
  }, ct = (m, v) => wt(m) ? u.values.subscribe({
    next: (w) => m(A(void 0, v), w)
  }) : A(m, v, !0), Se = (m, v = {}) => {
    for (const w of m ? Sr(m) : o.mount)
      o.mount.delete(w), o.array.delete(w), v.keepValue || (Ne(n, w), Ne(s, w)), !v.keepError && Ne(t.errors, w), !v.keepDirty && Ne(t.dirtyFields, w), !v.keepTouched && Ne(t.touchedFields, w), !v.keepIsValidating && Ne(t.validatingFields, w), !e.shouldUnregister && !v.keepDefaultValue && Ne(i, w);
    u.values.next({
      values: { ...s }
    }), u.state.next({
      ...t,
      ...v.keepDirty ? { isDirty: k() } : {}
    }), !v.keepIsValid && _();
  }, Ve = ({ disabled: m, name: v, field: w, fields: F }) => {
    (it(m) && a.mount || m || o.disabled.has(v)) && (m ? o.disabled.add(v) : o.disabled.delete(v), E(v, Jn(w ? w._f : z(F, v)._f), !1, !1, !0));
  }, Re = (m, v = {}) => {
    let w = z(n, m);
    const F = it(v.disabled) || it(e.disabled);
    return pe(n, m, {
      ...w || {},
      _f: {
        ...w && w._f ? w._f : { ref: { name: m } },
        name: m,
        mount: !0,
        ...v
      }
    }), o.mount.add(m), w ? Ve({
      field: w,
      disabled: it(v.disabled) ? v.disabled : e.disabled,
      name: m
    }) : x(m, !0, v.value), {
      ...F ? { disabled: v.disabled || e.disabled } : {},
      ...e.progressive ? {
        required: !!v.required,
        min: yr(v.min),
        max: yr(v.max),
        minLength: yr(v.minLength),
        maxLength: yr(v.maxLength),
        pattern: yr(v.pattern)
      } : {},
      name: m,
      onChange: ce,
      onBlur: ce,
      ref: (P) => {
        if (P) {
          Re(m, v), w = z(n, m);
          const L = Ce(P.value) && P.querySelectorAll && P.querySelectorAll("input,select,textarea")[0] || P, q = Bf(L), ee = w._f.refs || [];
          if (q ? ee.find((xe) => xe === L) : L === w._f.ref)
            return;
          pe(n, m, {
            _f: {
              ...w._f,
              ...q ? {
                refs: [
                  ...ee.filter(Xn),
                  L,
                  ...Array.isArray(z(i, m)) ? [{}] : []
                ],
                ref: { type: L.type, name: m }
              } : { ref: L }
            }
          }), x(m, !1, void 0, L);
        } else
          w = z(n, m, {}), w._f && (w._f.mount = !1), (e.shouldUnregister || v.shouldUnregister) && !(Eo(o.array, m) && a.action) && o.unMount.add(m);
      }
    };
  }, Me = () => e.shouldFocusError && Dr(n, oe, o.mount), le = (m) => {
    it(m) && (u.state.next({ disabled: m }), Dr(n, (v, w) => {
      const F = z(n, w);
      F && (v.disabled = F._f.disabled || m, Array.isArray(F._f.refs) && F._f.refs.forEach((P) => {
        P.disabled = F._f.disabled || m;
      }));
    }, 0, !1));
  }, Je = (m, v) => async (w) => {
    let F;
    w && (w.preventDefault && w.preventDefault(), w.persist && w.persist());
    let P = $e(s);
    if (o.disabled.size)
      for (const L of o.disabled)
        pe(P, L, void 0);
    if (u.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: L, values: q } = await N();
      t.errors = L, P = q;
    } else
      await I(n);
    if (Ne(t.errors, "root"), We(t.errors)) {
      u.state.next({
        errors: {}
      });
      try {
        await m(P, w);
      } catch (L) {
        F = L;
      }
    } else
      v && await v({ ...t.errors }, w), Me(), setTimeout(Me);
    if (u.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: We(t.errors) && !F,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), F)
      throw F;
  }, Le = (m, v = {}) => {
    z(n, m) && (Ce(v.defaultValue) ? ne(m, $e(z(i, m))) : (ne(m, v.defaultValue), pe(i, m, $e(v.defaultValue))), v.keepTouched || Ne(t.touchedFields, m), v.keepDirty || (Ne(t.dirtyFields, m), t.isDirty = v.defaultValue ? k(m, $e(z(i, m))) : k()), v.keepError || (Ne(t.errors, m), d.isValid && _()), u.state.next({ ...t }));
  }, je = (m, v = {}) => {
    const w = m ? $e(m) : i, F = $e(w), P = We(m), L = P ? i : F;
    if (v.keepDefaultValues || (i = w), !v.keepValues) {
      if (v.keepDirtyValues) {
        const q = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(vr(i, s))
        ]);
        for (const ee of Array.from(q))
          z(t.dirtyFields, ee) ? pe(L, ee, z(s, ee)) : ne(ee, z(L, ee));
      } else {
        if (Li && Ce(m))
          for (const q of o.mount) {
            const ee = z(n, q);
            if (ee && ee._f) {
              const xe = Array.isArray(ee._f.refs) ? ee._f.refs[0] : ee._f.ref;
              if (vn(xe)) {
                const ge = xe.closest("form");
                if (ge) {
                  ge.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      s = e.shouldUnregister ? v.keepDefaultValues ? $e(i) : {} : $e(L), u.array.next({
        values: { ...L }
      }), u.values.next({
        values: { ...L }
      });
    }
    o = {
      mount: v.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !d.isValid || !!v.keepIsValid || !!v.keepDirtyValues, a.watch = !!e.shouldUnregister, u.state.next({
      submitCount: v.keepSubmitCount ? t.submitCount : 0,
      isDirty: P ? !1 : v.keepDirty ? t.isDirty : !!(v.keepDefaultValues && !Lt(m, i)),
      isSubmitted: v.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: P ? {} : v.keepDirtyValues ? v.keepDefaultValues && s ? vr(i, s) : t.dirtyFields : v.keepDefaultValues && m ? vr(i, m) : v.keepDirty ? t.dirtyFields : {},
      touchedFields: v.keepTouched ? t.touchedFields : {},
      errors: v.keepErrors ? t.errors : {},
      isSubmitSuccessful: v.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, re = (m, v) => je(wt(m) ? m(s) : m, v);
  return {
    control: {
      register: Re,
      unregister: Se,
      getFieldState: _e,
      handleSubmit: Je,
      setError: Oe,
      _executeSchema: N,
      _getWatch: A,
      _getDirty: k,
      _updateValid: _,
      _removeUnmounted: R,
      _updateFieldArray: D,
      _updateDisabledField: Ve,
      _getFieldArray: $,
      _reset: je,
      _resetDefaultValues: () => wt(e.defaultValues) && e.defaultValues().then((m) => {
        re(m, e.resetOptions), u.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (m) => {
        t = {
          ...t,
          ...m
        };
      },
      _disableForm: le,
      _subjects: u,
      _proxyFormState: d,
      _setErrors: O,
      get _fields() {
        return n;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return a;
      },
      set _state(m) {
        a = m;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return o;
      },
      set _names(m) {
        o = m;
      },
      get _formState() {
        return t;
      },
      set _formState(m) {
        t = m;
      },
      get _options() {
        return e;
      },
      set _options(m) {
        e = {
          ...e,
          ...m
        };
      }
    },
    trigger: we,
    register: Re,
    handleSubmit: Je,
    watch: ct,
    setValue: ne,
    getValues: Ue,
    reset: re,
    resetField: Le,
    clearErrors: ke,
    unregister: Se,
    setError: Oe,
    setFocus: (m, v = {}) => {
      const w = z(n, m), F = w && w._f;
      if (F) {
        const P = F.refs ? F.refs[0] : F.ref;
        P.focus && (P.focus(), v.shouldSelect && wt(P.select) && P.select());
      }
    },
    getFieldState: _e
  };
}
function Zf(r = {}) {
  const e = B.useRef(void 0), t = B.useRef(void 0), [n, i] = B.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: wt(r.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1,
    defaultValues: wt(r.defaultValues) ? void 0 : r.defaultValues
  });
  e.current || (e.current = {
    ...Uf(r),
    formState: n
  });
  const s = e.current.control;
  return s._options = r, zi({
    subject: s._subjects.state,
    next: (a) => {
      Ro(a, s._proxyFormState, s._updateFormState, !0) && i({ ...s._formState });
    }
  }), B.useEffect(() => s._disableForm(r.disabled), [s, r.disabled]), B.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const a = s._getDirty();
      a !== n.isDirty && s._subjects.state.next({
        isDirty: a
      });
    }
  }, [s, n.isDirty]), B.useEffect(() => {
    r.values && !Lt(r.values, t.current) ? (s._reset(r.values, s._options.resetOptions), t.current = r.values, i((a) => ({ ...a }))) : s._resetDefaultValues();
  }, [r.values, s]), B.useEffect(() => {
    r.errors && s._setErrors(r.errors);
  }, [r.errors, s]), B.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), B.useEffect(() => {
    r.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [r.shouldUnregister, s]), e.current.formState = Do(n, s), e.current;
}
var qf = "Label", Fo = at.forwardRef((r, e) => /* @__PURE__ */ f(
  Rl.label,
  {
    ...r,
    ref: e,
    onMouseDown: (t) => {
      t.target.closest("button, input, select, textarea") || (r.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
Fo.displayName = qf;
var Bo = Fo;
const xn = at.forwardRef(({ className: r, ...e }, t) => f(Bo, {
  ref: t,
  className: se("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", r),
  ...e
}));
xn.displayName = Bo.displayName;
const Yf = Tf, Ho = at.createContext({}), Ds = ({ ...r }) => {
  const { formState: e } = jt();
  return f(Ho.Provider, {
    value: {
      name: r.name
    },
    children: f(Lf, {
      ...r,
      disabled: e.isSubmitting
    })
  });
}, Bn = () => {
  const r = at.useContext(Ho), e = at.useContext(Vo), { getFieldState: t, formState: n } = jt(), i = t(r.name, n);
  if (!r)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = e;
  return {
    id: s,
    name: r.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...i
  };
}, Vo = at.createContext({}), jo = at.forwardRef(({ className: r, ...e }, t) => {
  const n = at.useId();
  return f(Vo.Provider, {
    value: {
      id: n
    },
    children: f("div", {
      ref: t,
      className: se("space-y-2", r),
      ...e
    })
  });
});
jo.displayName = "FormItem";
const Kf = at.forwardRef(({ className: r, ...e }, t) => {
  const { error: n, formItemId: i } = Bn();
  return f(xn, {
    ref: t,
    className: se(n && "text-f1-foreground-critical", r),
    htmlFor: i,
    ...e
  });
});
Kf.displayName = "FormLabel";
const $o = at.forwardRef(({ ...r }, e) => {
  const { error: t, formItemId: n, formDescriptionId: i, formMessageId: s } = Bn();
  return f(Nl, {
    ref: e,
    id: n,
    "aria-describedby": t ? `${i} ${s}` : `${i}`,
    "aria-invalid": !!t,
    ...r
  });
});
$o.displayName = "FormControl";
const Wo = at.forwardRef(({ className: r, ...e }, t) => {
  const { formDescriptionId: n } = Bn();
  return f("p", {
    ref: t,
    id: n,
    className: se("text-base text-f1-foreground-secondary", r),
    ...e
  });
});
Wo.displayName = "FormDescription";
const Go = at.forwardRef(({ className: r, children: e, fallback: t, ...n }, i) => {
  const { error: s, formMessageId: a } = Bn(), { forms: o } = zr(), l = s ? s.message ?? t ?? o.validation.invalidType : e;
  return l ? j("div", {
    ref: i,
    id: a,
    className: se("flex gap-1", r),
    ...n,
    children: [f(Dn, {
      icon: na,
      color: "critical"
    }), f("span", {
      className: "text-base font-medium text-f1-foreground-critical",
      children: l
    })]
  }) : null;
});
Go.displayName = "FormMessage";
const Uo = "gap-4", Xf = "mt-6", Jf = "max-w-[720px]", $t = "md", Zo = Et(null);
function qo() {
  const r = ft(Zo);
  if (!r)
    throw new Error("useF0FormContext must be used within a F0Form");
  return r;
}
function Mr(r, e, t) {
  const n = ["forms", r];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function ve(r, e) {
  return r._def?.typeName === e;
}
function Hi(r) {
  return ve(r, "ZodEffects") ? r._def.schema : r;
}
const Yo = /* @__PURE__ */ new WeakMap();
function hg(r, e) {
  Yo.set(r, e);
  const t = r;
  return t._f0Config = e, t._innerSchema = r, t;
}
function Vi(r) {
  const e = r;
  return e._f0Config ? e._f0Config : Yo.get(r);
}
function fg(r) {
  return Vi(r) !== void 0;
}
function gt(r) {
  let e = r;
  for (; ve(e, "ZodOptional") || ve(e, "ZodNullable") || ve(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function Qf(r, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = gt(r);
  return ve(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : ve(t, "ZodNumber") ? "number" : ve(t, "ZodBoolean") ? "switch" : ve(t, "ZodDate") ? "date" : ve(t, "ZodEnum") || ve(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : ve(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function Ko(r) {
  return ve(r, "ZodOptional") || ve(r, "ZodNullable") || ve(r, "ZodDefault") && Ko(r._def.innerType);
}
const em = /* @__PURE__ */ new Set([
  "min",
  // .min(n) where n >= 1
  "email",
  // .email()
  "url",
  // .url()
  "uuid",
  // .uuid()
  "cuid",
  // .cuid()
  "cuid2",
  // .cuid2()
  "ulid",
  // .ulid()
  "regex",
  // .regex() - typically requires content
  "includes",
  // .includes() - requires the substring
  "startsWith",
  // .startsWith()
  "endsWith"
  // .endsWith()
]);
function tm(r) {
  const e = gt(r);
  return ve(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "min" ? (n.value ?? 0) >= 1 : em.has(n.kind)) : !1;
}
function Xo(r) {
  if (Ko(r))
    return !1;
  const e = gt(r);
  return ve(e, "ZodString") ? tm(r) : !0;
}
function rm(r, e) {
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
function Hn(r, e) {
  return typeof r == "function" ? r({ values: e }) : rm(r, e);
}
function ji(r, e) {
  return r === void 0 ? !1 : typeof r == "function" ? r({ values: e }) : r;
}
function Jt(r, e) {
  if (r !== void 0)
    return typeof r == "function" ? r({ values: e }) : r;
}
function nm(r) {
  const e = gt(r);
  return ve(e, "ZodLiteral") && e._def.value === !0;
}
function im({ field: r, formField: e }) {
  const t = r.validation && nm(r.validation);
  return f(Al, {
    ...e,
    title: r.label,
    disabled: r.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function sm({ field: r, formField: e, error: t, isValidating: n, required: i }) {
  const s = {
    id: r.id,
    label: r.label,
    placeholder: r.placeholder,
    value: e.value,
    onChange: e.onChange,
    onBlur: e.onBlur,
    error: t,
    isValidating: n,
    disabled: r.disabled,
    required: i,
    config: r.fieldConfig
  };
  return f(Fr, {
    children: r.render(s)
  });
}
function am(r, e) {
  if (r)
    return {
      value: {
        from: r,
        to: r
      },
      granularity: e?.[0] ?? "day"
    };
}
function om(r) {
  return r?.value?.from;
}
function Jo({ field: r, formField: e, error: t, loading: n }) {
  const i = Z(() => am(e.value ?? void 0, r.granularities), [e.value, r.granularities]), s = (a) => {
    e.onChange(om(a) ?? null);
  };
  return f(va, {
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
    size: $t,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function hi(r) {
  if (!r || !(r instanceof Date) || isNaN(r.getTime())) return "";
  const e = String(r.getHours()).padStart(2, "0"), t = String(r.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function lm(r) {
  if (!r) return;
  const [e, t] = r.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const n = /* @__PURE__ */ new Date();
  return n.setHours(e, t, 0, 0), n;
}
function Qn(r, e) {
  if (!r) return;
  const t = new Date(r);
  if (e) {
    const [n, i, s] = e.split(":").map(Number);
    t.setHours(n ?? 0, i ?? 0, s ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function Qo({ field: r, formField: e, error: t, loading: n }) {
  const i = Z(() => hi(e.value ?? void 0), [e.value]), s = ue((a) => {
    if (!a) {
      e.onChange(null);
      return;
    }
    const o = lm(a);
    e.onChange(o);
  }, [e]);
  return f(ia, {
    type: "time",
    label: r.label,
    disabled: r.disabled,
    value: i,
    onChange: s,
    size: $t,
    hideLabel: !0,
    error: t,
    loading: n,
    clearable: r.clearable,
    name: e.name,
    ref: e.ref,
    icon: Tl
  });
}
function cm({ field: r, formField: e, error: t, loading: n }) {
  const i = e.value ?? void 0, s = Z(() => hi(i), [i]), a = ue((h) => {
    if (!h) {
      e.onChange(null);
      return;
    }
    e.onChange(Qn(h, s));
  }, [e, s]), o = ue((h) => {
    if (!h) {
      if (i) {
        const g = new Date(i);
        g.setHours(0, 0, 0, 0), e.onChange(g);
      }
      return;
    }
    const p = hi(h);
    if (!i) {
      const g = /* @__PURE__ */ new Date();
      g.setHours(0, 0, 0, 0), e.onChange(Qn(g, p));
      return;
    }
    e.onChange(Qn(i, p));
  }, [e, i]), l = Z(() => ({
    id: `${r.id}-date`,
    type: "date",
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    granularities: r.granularities ?? ["day"],
    presets: r.presets,
    minDate: r.minDate,
    maxDate: r.maxDate,
    clearable: r.clearable
  }), [r]), c = Z(() => ({
    ...e,
    value: i,
    onChange: a
  }), [e, i, a]), d = Z(() => ({
    id: `${r.id}-time`,
    type: "time",
    label: "Time",
    disabled: r.disabled,
    clearable: !1
  }), [r.id, r.disabled]), u = Z(() => ({
    ...e,
    value: i,
    onChange: o
  }), [e, i, o]);
  return j("div", {
    className: "flex gap-2",
    children: [f("div", {
      className: "flex-1",
      children: f(Jo, {
        field: l,
        formField: c,
        error: t,
        loading: n
      })
    }), f("div", {
      className: "w-32",
      children: f(Qo, {
        field: d,
        formField: u,
        error: t,
        loading: n
      })
    })]
  });
}
function dm(r) {
  if (!(!r?.from || !r?.to))
    return {
      value: {
        from: r.from,
        to: r.to
      },
      granularity: "range"
    };
}
function um(r) {
  if (!(!r?.value?.from || !r?.value?.to))
    return {
      from: r.value.from,
      to: r.value.to
    };
}
function hm({ field: r, formField: e, error: t, loading: n }) {
  const i = Z(() => dm(e.value ?? void 0), [e.value]), s = (o) => {
    e.onChange(um(o) ?? null);
  }, a = r.fromLabel && r.toLabel ? `${r.label} (${r.fromLabel} - ${r.toLabel})` : r.label;
  return f(va, {
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
    size: $t,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function fm({ field: r, formField: e, error: t, loading: n }) {
  return f(Zc, {
    ...e,
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    step: r.step,
    min: r.min,
    max: r.max,
    locale: r.locale ?? "en-US",
    value: e.value != null ? Number(e.value) : void 0,
    onChange: (i) => e.onChange(i),
    size: $t,
    hideLabel: !0,
    error: t,
    loading: n,
    clearable: r.clearable
  });
}
function mm({ field: r, formField: e }) {
  const t = e.value;
  return f(qc, {
    title: r.label,
    placeholder: r.placeholder ?? "",
    maxCharacters: r.maxCharacters,
    mentionsConfig: r.mentionsConfig,
    height: r.height,
    plainHtmlMode: r.plainHtmlMode,
    disabled: r.disabled,
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
function pm({ field: r, formField: e, error: t, loading: n }) {
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
    loading: n,
    size: $t,
    hideLabel: !0
  };
  return r.multiple ? f(rr, {
    ...i,
    multiple: !0,
    clearable: r.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : r.clearable ? f(rr, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : f(rr, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function gm({ field: r, formField: e, error: t, loading: n }) {
  const i = {
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    source: r.source,
    mapOptions: r.mapOptions,
    showSearchBox: r.showSearchBox,
    searchBoxPlaceholder: r.searchBoxPlaceholder,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    loading: n,
    size: $t,
    hideLabel: !0
  };
  return r.multiple ? f(rr, {
    ...i,
    multiple: !0,
    clearable: r.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : r.clearable ? f(rr, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : f(rr, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function vm(r) {
  const { field: e } = r;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? f(gm, {
    ...r,
    field: e
  }) : "options" in e && e.options !== void 0 ? f(pm, {
    ...r,
    field: e
  }) : null;
}
function ym(r) {
  const e = gt(r);
  return ve(e, "ZodLiteral") && e._def.value === !0;
}
function bm({ field: r, formField: e }) {
  const t = r.validation && ym(r.validation);
  return f(Ol, {
    ...e,
    title: r.label,
    disabled: r.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
const xm = {
  email: "name@example.com"
}, wm = {
  url: Il,
  email: Ml
};
function _m({ field: r, formField: e, error: t, loading: n }) {
  const i = r.inputType ?? "text", s = r.placeholder ?? xm[i] ?? void 0, a = wm[i];
  return f(ia, {
    ...e,
    label: r.label,
    type: i,
    placeholder: s,
    disabled: r.disabled,
    value: e.value != null ? String(e.value) : "",
    size: $t,
    hideLabel: !0,
    error: t,
    loading: n,
    icon: a,
    clearable: r.clearable
  });
}
function Cm({ field: r, formField: e, error: t, loading: n }) {
  return f(Yc, {
    ...e,
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    rows: r.rows,
    maxLength: r.maxLength,
    value: e.value != null ? String(e.value) : "",
    size: $t,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Em({ field: r, formField: e, fieldState: t, isSubmitting: n, isRequired: i, values: s }) {
  const a = !!t.error, { isValidating: o } = t, l = ji(r.disabled, s) || n, c = {
    error: a,
    loading: o
  };
  switch (r.type) {
    case "text":
      return f(_m, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "number":
      return f(fm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "textarea":
      return f(Cm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "select":
      return f(vm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "checkbox":
      return f(im, {
        field: {
          ...r,
          disabled: l
        },
        formField: e
      });
    case "switch":
      return f(bm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e
      });
    case "date":
      return f(Jo, {
        field: {
          ...r,
          disabled: l,
          minDate: Jt(r.minDate, s),
          maxDate: Jt(r.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "time":
      return f(Qo, {
        field: {
          ...r,
          disabled: l,
          minDate: Jt(r.minDate, s),
          maxDate: Jt(r.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "datetime":
      return f(cm, {
        field: {
          ...r,
          disabled: l,
          minDate: Jt(r.minDate, s),
          maxDate: Jt(r.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "daterange":
      return f(hm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "richtext":
      return f(mm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e
      });
    case "custom":
      return f(sm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        isValidating: o,
        required: i
      });
    default:
      return null;
  }
}
function $i({ field: r, sectionId: e }) {
  const t = jt(), n = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = qo(), { forms: a } = zr(), o = ji(r.disabled, n), l = Y(o);
  X(() => {
    const p = l.current;
    if (l.current = o, !p && o && r.resetOnDisable) {
      const g = t.formState.defaultValues?.[r.id];
      t.setValue(r.id, g, {
        shouldValidate: !1
      });
    }
  }, [o, r.resetOnDisable, r.id, t]);
  const c = !r.renderIf || Hn(r.renderIf, n), d = r.type !== "checkbox" && r.type !== "custom", u = r.validation && Xo(r.validation), h = Mr(s, e, r.id);
  return c ? f(Ds, {
    control: t.control,
    name: r.id,
    render: ({ field: p, fieldState: g }) => j(jo, {
      id: h,
      className: "scroll-mt-4",
      children: [d && j("label", {
        htmlFor: r.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [r.label, u && f("span", {
          className: "ml-0.5 text-f1-foreground-critical",
          children: "*"
        })]
      }), f($o, {
        children: Em({
          field: r,
          formField: p,
          fieldState: g,
          isSubmitting: i,
          isRequired: u,
          values: n
        })
      }), r.helpText && f(Wo, {
        children: r.helpText
      }), f(Go, {
        fallback: u ? a.validation.required : a.validation.invalidType
      })]
    })
  }) : f(Ds, {
    control: t.control,
    name: r.id,
    render: () => f("span", {
      className: "hidden",
      "aria-hidden": "true"
    })
  });
}
function el({ row: r, sectionId: e }) {
  return f("div", {
    className: `flex xs:flex-row flex-col ${Uo} [&>*]:flex-1`,
    children: r.fields.map((t) => f($i, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function km(r) {
  const e = gt(r);
  return ve(e, "ZodLiteral") && e._def.value === !0;
}
function tl({ fields: r }) {
  const e = jt(), { watch: t, setValue: n } = e, { isSubmitting: i } = e.formState, s = t(), a = Z(() => r.filter((h) => !h.renderIf || Hn(h.renderIf, s)), [r, s]), o = Z(() => Object.fromEntries(a.map((h) => [h.id, ji(h.disabled, s) || i])), [a, i, s]), l = Y({});
  X(() => {
    const h = l.current, p = e.formState.defaultValues ?? {};
    for (const g of a) {
      if (!(g.id in h))
        continue;
      const b = h[g.id], _ = o[g.id] ?? !1;
      if (!b && _ && g.resetOnDisable) {
        const T = p[g.id] ?? !1;
        n(g.id, T, {
          shouldValidate: !1
        });
      }
    }
    l.current = {
      ...o
    };
  }, [o, a, e, n]);
  const c = Z(() => a.map((h) => ({
    value: h.id,
    title: h.label,
    description: h.helpText,
    disabled: o[h.id] ?? !1,
    required: !!(h.validation && km(h.validation))
  })), [a, o]), d = Z(() => a.filter((h) => s[h.id]).map((h) => h.id), [a, s]);
  return a.length === 0 ? null : f(Kc, {
    multiple: !0,
    isToggle: !0,
    grouped: !0,
    items: c,
    value: d,
    onChange: (h) => {
      for (const p of a) {
        const g = h.includes(p.id), b = !!s[p.id];
        g !== b && n(p.id, g, {
          shouldValidate: !0
        });
      }
    }
  });
}
function Sm(r) {
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
function Dm({ section: r }) {
  const t = jt().watch(), { formName: n } = qo(), { title: i, description: s, renderIf: a, action: o, fields: l } = r.section, c = r.id;
  if (a && !Hn(a, t))
    return null;
  const d = Sm(l), u = Mr(n, c);
  return j("section", {
    id: u,
    className: "flex flex-col scroll-mt-4",
    children: [j("div", {
      className: se("flex items-start justify-between py-5", "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"),
      children: [f(Xc, {
        title: i,
        description: s ?? ""
      }), o && f(ht, {
        label: o.label,
        icon: o.icon,
        onClick: o.onClick,
        href: o.href,
        variant: "outline",
        size: "md"
      })]
    }), f("div", {
      className: `flex flex-col ${Uo}`,
      children: d.map((h, p) => h.type === "switchGroup" ? f(tl, {
        fields: h.fields,
        sectionId: c
      }, `switch-group-${p}`) : h.type === "field" ? f($i, {
        field: h.item.field,
        sectionId: c
      }, h.item.field.id) : h.type === "row" ? f(el, {
        row: h.item,
        sectionId: c
      }, `row-${h.index}`) : null)
    })]
  });
}
const Rs = (r, e, t) => {
  if (r && "reportValidity" in r) {
    const n = z(t, e);
    r.setCustomValidity(n && n.message || ""), r.reportValidity();
  }
}, rl = (r, e) => {
  for (const t in e.fields) {
    const n = e.fields[t];
    n && n.ref && "reportValidity" in n.ref ? Rs(n.ref, t, r) : n.refs && n.refs.forEach((i) => Rs(i, t, r));
  }
}, Rm = (r, e) => {
  e.shouldUseNativeValidation && rl(r, e);
  const t = {};
  for (const n in r) {
    const i = z(e.fields, n), s = Object.assign(r[n] || {}, { ref: i && i.ref });
    if (Nm(e.names || Object.keys(r), n)) {
      const a = Object.assign({}, z(t, n));
      pe(a, "root", s), pe(t, n, a);
    } else pe(t, n, s);
  }
  return t;
}, Nm = (r, e) => r.some((t) => t.startsWith(e + "."));
var Am = function(r, e) {
  for (var t = {}; r.length; ) {
    var n = r[0], i = n.code, s = n.message, a = n.path.join(".");
    if (!t[a]) if ("unionErrors" in n) {
      var o = n.unionErrors[0].errors[0];
      t[a] = { message: o.message, type: o.code };
    } else t[a] = { message: s, type: i };
    if ("unionErrors" in n && n.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(u) {
        return r.push(u);
      });
    }), e) {
      var l = t[a].types, c = l && l[n.code];
      t[a] = To(a, e, t, i, c ? [].concat(c, n.message) : n.message);
    }
    r.shift();
  }
  return t;
}, Tm = function(r, e, t) {
  return t === void 0 && (t = {}), function(n, i, s) {
    try {
      return Promise.resolve((function(a, o) {
        try {
          var l = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(c) {
            return s.shouldUseNativeValidation && rl({}, s), { errors: {}, values: t.raw ? n : c };
          });
        } catch (c) {
          return o(c);
        }
        return l && l.then ? l.then(void 0, o) : l;
      })(0, function(a) {
        if ((function(o) {
          return Array.isArray(o?.errors);
        })(a)) return { values: {}, errors: Rm(Am(a.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}, me;
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
})(me || (me = {}));
var Ns;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Ns || (Ns = {}));
const W = me.arrayToEnum([
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
]), It = (r) => {
  switch (typeof r) {
    case "undefined":
      return W.undefined;
    case "string":
      return W.string;
    case "number":
      return Number.isNaN(r) ? W.nan : W.number;
    case "boolean":
      return W.boolean;
    case "function":
      return W.function;
    case "bigint":
      return W.bigint;
    case "symbol":
      return W.symbol;
    case "object":
      return Array.isArray(r) ? W.array : r === null ? W.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? W.promise : typeof Map < "u" && r instanceof Map ? W.map : typeof Set < "u" && r instanceof Set ? W.set : typeof Date < "u" && r instanceof Date ? W.date : W.object;
    default:
      return W.unknown;
  }
}, M = me.arrayToEnum([
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
class Rt extends Error {
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
            const c = a.path[l];
            l === a.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(t(a))) : o[c] = o[c] || { _errors: [] }, o = o[c], l++;
          }
        }
    };
    return i(this), n;
  }
  static assert(e) {
    if (!(e instanceof Rt))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, me.jsonStringifyReplacer, 2);
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
Rt.create = (r) => new Rt(r);
const fi = (r, e) => {
  let t;
  switch (r.code) {
    case M.invalid_type:
      r.received === W.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case M.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, me.jsonStringifyReplacer)}`;
      break;
    case M.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${me.joinValues(r.keys, ", ")}`;
      break;
    case M.invalid_union:
      t = "Invalid input";
      break;
    case M.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${me.joinValues(r.options)}`;
      break;
    case M.invalid_enum_value:
      t = `Invalid enum value. Expected ${me.joinValues(r.options)}, received '${r.received}'`;
      break;
    case M.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case M.invalid_return_type:
      t = "Invalid function return type";
      break;
    case M.invalid_date:
      t = "Invalid date";
      break;
    case M.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : me.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case M.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "bigint" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case M.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case M.custom:
      t = "Invalid input";
      break;
    case M.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case M.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case M.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, me.assertNever(r);
  }
  return { message: t };
};
let Om = fi;
function Mm() {
  return Om;
}
const Im = (r) => {
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
  const l = n.filter((c) => !!c).slice().reverse();
  for (const c of l)
    o = c(a, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: s,
    message: o
  };
};
function H(r, e) {
  const t = Mm(), n = Im({
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
      t === fi ? void 0 : fi
      // then global default map
    ].filter((i) => !!i)
  });
  r.common.issues.push(n);
}
class Xe {
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
        return J;
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
    return Xe.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const i of t) {
      const { key: s, value: a } = i;
      if (s.status === "aborted" || a.status === "aborted")
        return J;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (n[s.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const J = Object.freeze({
  status: "aborted"
}), br = (r) => ({ status: "dirty", value: r }), lt = (r) => ({ status: "valid", value: r }), As = (r) => r.status === "aborted", Ts = (r) => r.status === "dirty", ar = (r) => r.status === "valid", wn = (r) => typeof Promise < "u" && r instanceof Promise;
var G;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e?.message;
})(G || (G = {}));
class Bt {
  constructor(e, t, n, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Os = (r, e) => {
  if (ar(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Rt(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function ae(r) {
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
class he {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return It(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: It(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Xe(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: It(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (wn(t))
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
      parsedType: It(e)
    }, i = this._parseSync({ data: e, path: n.path, parent: n });
    return Os(n, i);
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
      parsedType: It(e)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return ar(n) ? {
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
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) => ar(n) ? {
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
      parsedType: It(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (wn(i) ? i : Promise.resolve(i));
    return Os(n, s);
  }
  refine(e, t) {
    const n = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: M.custom,
        ...n(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof t == "function" ? t(n, i) : t), !1));
  }
  _refinement(e) {
    return new lr({
      schema: this,
      typeName: Q.ZodEffects,
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
    return zt.create(this, this._def);
  }
  nullable() {
    return cr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ct.create(this);
  }
  promise() {
    return kn.create(this, this._def);
  }
  or(e) {
    return Cn.create([this, e], this._def);
  }
  and(e) {
    return En.create(this, e, this._def);
  }
  transform(e) {
    return new lr({
      ...ae(this._def),
      schema: this,
      typeName: Q.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new gi({
      ...ae(this._def),
      innerType: this,
      defaultValue: t,
      typeName: Q.ZodDefault
    });
  }
  brand() {
    return new np({
      typeName: Q.ZodBranded,
      type: this,
      ...ae(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new vi({
      ...ae(this._def),
      innerType: this,
      catchValue: t,
      typeName: Q.ZodCatch
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
    return Wi.create(this, e);
  }
  readonly() {
    return yi.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Lm = /^c[^\s-]{8,}$/i, Pm = /^[0-9a-z]+$/, zm = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Fm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Bm = /^[a-z0-9_-]{21}$/i, Hm = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Vm = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, jm = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, $m = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ei;
const Wm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Gm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Um = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Zm = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, qm = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ym = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, nl = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Km = new RegExp(`^${nl}$`);
function il(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function Xm(r) {
  return new RegExp(`^${il(r)}$`);
}
function Jm(r) {
  let e = `${nl}T${il(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function Qm(r, e) {
  return !!((e === "v4" || !e) && Wm.test(r) || (e === "v6" || !e) && Um.test(r));
}
function ep(r, e) {
  if (!Hm.test(r))
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
function tp(r, e) {
  return !!((e === "v4" || !e) && Gm.test(r) || (e === "v6" || !e) && Zm.test(r));
}
class Ut extends he {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== W.string) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: M.invalid_type,
        expected: W.string,
        received: s.parsedType
      }), J;
    }
    const n = new Xe();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), H(i, {
          code: M.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), H(i, {
          code: M.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? H(i, {
          code: M.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && H(i, {
          code: M.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        jm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "email",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        ei || (ei = new RegExp($m, "u")), ei.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "emoji",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Fm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "uuid",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        Bm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "nanoid",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Lm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "cuid",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Pm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "cuid2",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        zm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "ulid",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), H(i, {
            validation: "url",
            code: M.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "regex",
        code: M.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? Jm(s).test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Km.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Xm(s).test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? Vm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "duration",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? Qm(e.data, s.version) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "ip",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? ep(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "jwt",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? tp(e.data, s.version) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "cidr",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? qm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "base64",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? Ym.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "base64url",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : me.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: M.invalid_string,
      ...G.errToObj(n)
    });
  }
  _addCheck(e) {
    return new Ut({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...G.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...G.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...G.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...G.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...G.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...G.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...G.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...G.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...G.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...G.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...G.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...G.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...G.errToObj(e) });
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
      ...G.errToObj(e?.message)
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
      ...G.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...G.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...G.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...G.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...G.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...G.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...G.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...G.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...G.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, G.errToObj(e));
  }
  trim() {
    return new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Ut({
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
Ut.create = (r) => new Ut({
  checks: [],
  typeName: Q.ZodString,
  coerce: r?.coerce ?? !1,
  ...ae(r)
});
function rp(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = t > n ? t : n, s = Number.parseInt(r.toFixed(i).replace(".", "")), a = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % a / 10 ** i;
}
class Ir extends he {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== W.number) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: M.invalid_type,
        expected: W.number,
        received: s.parsedType
      }), J;
    }
    let n;
    const i = new Xe();
    for (const s of this._def.checks)
      s.kind === "int" ? me.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
        code: M.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: M.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: M.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? rp(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), H(n, {
        code: M.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
        code: M.not_finite,
        message: s.message
      }), i.dirty()) : me.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, G.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, G.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, G.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, G.toString(t));
  }
  setLimit(e, t, n, i) {
    return new Ir({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: G.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ir({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: G.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: G.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: G.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: G.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: G.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: G.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: G.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: G.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: G.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && me.isInteger(e.value));
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
Ir.create = (r) => new Ir({
  checks: [],
  typeName: Q.ZodNumber,
  coerce: r?.coerce || !1,
  ...ae(r)
});
class Lr extends he {
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
    if (this._getType(e) !== W.bigint)
      return this._getInvalidInput(e);
    let n;
    const i = new Xe();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: M.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: M.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: M.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : me.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return H(t, {
      code: M.invalid_type,
      expected: W.bigint,
      received: t.parsedType
    }), J;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, G.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, G.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, G.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, G.toString(t));
  }
  setLimit(e, t, n, i) {
    return new Lr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: G.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Lr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: G.toString(t)
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
Lr.create = (r) => new Lr({
  checks: [],
  typeName: Q.ZodBigInt,
  coerce: r?.coerce ?? !1,
  ...ae(r)
});
class Ms extends he {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== W.boolean) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.boolean,
        received: n.parsedType
      }), J;
    }
    return lt(e.data);
  }
}
Ms.create = (r) => new Ms({
  typeName: Q.ZodBoolean,
  coerce: r?.coerce || !1,
  ...ae(r)
});
class _n extends he {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== W.date) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: M.invalid_type,
        expected: W.date,
        received: s.parsedType
      }), J;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: M.invalid_date
      }), J;
    }
    const n = new Xe();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : me.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new _n({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: G.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: G.toString(t)
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
_n.create = (r) => new _n({
  checks: [],
  coerce: r?.coerce || !1,
  typeName: Q.ZodDate,
  ...ae(r)
});
class Is extends he {
  _parse(e) {
    if (this._getType(e) !== W.symbol) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.symbol,
        received: n.parsedType
      }), J;
    }
    return lt(e.data);
  }
}
Is.create = (r) => new Is({
  typeName: Q.ZodSymbol,
  ...ae(r)
});
class Ls extends he {
  _parse(e) {
    if (this._getType(e) !== W.undefined) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.undefined,
        received: n.parsedType
      }), J;
    }
    return lt(e.data);
  }
}
Ls.create = (r) => new Ls({
  typeName: Q.ZodUndefined,
  ...ae(r)
});
class Ps extends he {
  _parse(e) {
    if (this._getType(e) !== W.null) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.null,
        received: n.parsedType
      }), J;
    }
    return lt(e.data);
  }
}
Ps.create = (r) => new Ps({
  typeName: Q.ZodNull,
  ...ae(r)
});
class mi extends he {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return lt(e.data);
  }
}
mi.create = (r) => new mi({
  typeName: Q.ZodAny,
  ...ae(r)
});
class zs extends he {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return lt(e.data);
  }
}
zs.create = (r) => new zs({
  typeName: Q.ZodUnknown,
  ...ae(r)
});
class Ht extends he {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return H(t, {
      code: M.invalid_type,
      expected: W.never,
      received: t.parsedType
    }), J;
  }
}
Ht.create = (r) => new Ht({
  typeName: Q.ZodNever,
  ...ae(r)
});
class Fs extends he {
  _parse(e) {
    if (this._getType(e) !== W.undefined) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.void,
        received: n.parsedType
      }), J;
    }
    return lt(e.data);
  }
}
Fs.create = (r) => new Fs({
  typeName: Q.ZodVoid,
  ...ae(r)
});
class Ct extends he {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== W.array)
      return H(t, {
        code: M.invalid_type,
        expected: W.array,
        received: t.parsedType
      }), J;
    if (i.exactLength !== null) {
      const a = t.data.length > i.exactLength.value, o = t.data.length < i.exactLength.value;
      (a || o) && (H(t, {
        code: a ? M.too_big : M.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (H(t, {
      code: M.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (H(t, {
      code: M.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new Bt(t, a, t.path, o)))).then((a) => Xe.mergeArray(n, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new Bt(t, a, t.path, o)));
    return Xe.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Ct({
      ...this._def,
      minLength: { value: e, message: G.toString(t) }
    });
  }
  max(e, t) {
    return new Ct({
      ...this._def,
      maxLength: { value: e, message: G.toString(t) }
    });
  }
  length(e, t) {
    return new Ct({
      ...this._def,
      exactLength: { value: e, message: G.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ct.create = (r, e) => new Ct({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Q.ZodArray,
  ...ae(e)
});
function tr(r) {
  if (r instanceof De) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = zt.create(tr(n));
    }
    return new De({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof Ct ? new Ct({
    ...r._def,
    type: tr(r.element)
  }) : r instanceof zt ? zt.create(tr(r.unwrap())) : r instanceof cr ? cr.create(tr(r.unwrap())) : r instanceof Zt ? Zt.create(r.items.map((e) => tr(e))) : r;
}
class De extends he {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = me.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== W.object) {
      const c = this._getOrReturnCtx(e);
      return H(c, {
        code: M.invalid_type,
        expected: W.object,
        received: c.parsedType
      }), J;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Ht && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const d = s[c], u = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: d._parse(new Bt(i, u, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof Ht) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of o)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: i.data[d] }
          });
      else if (c === "strict")
        o.length > 0 && (H(i, {
          code: M.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of o) {
        const u = i.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new Bt(i, u, i.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of l) {
        const u = await d.key, h = await d.value;
        c.push({
          key: u,
          value: h,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => Xe.mergeObjectSync(n, c)) : Xe.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return G.errToObj, new De({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          const i = this._def.errorMap?.(t, n).message ?? n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: G.errToObj(e).message ?? i
          } : {
            message: i
          };
        }
      } : {}
    });
  }
  strip() {
    return new De({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new De({
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
    return new De({
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
    return new De({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: Q.ZodObject
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
    return new De({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const n of me.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new De({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const n of me.objectKeys(this.shape))
      e[n] || (t[n] = this.shape[n]);
    return new De({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return tr(this);
  }
  partial(e) {
    const t = {};
    for (const n of me.objectKeys(this.shape)) {
      const i = this.shape[n];
      e && !e[n] ? t[n] = i : t[n] = i.optional();
    }
    return new De({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const n of me.objectKeys(this.shape))
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof zt; )
          s = s._def.innerType;
        t[n] = s;
      }
    return new De({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return sl(me.objectKeys(this.shape));
  }
}
De.create = (r, e) => new De({
  shape: () => r,
  unknownKeys: "strip",
  catchall: Ht.create(),
  typeName: Q.ZodObject,
  ...ae(e)
});
De.strictCreate = (r, e) => new De({
  shape: () => r,
  unknownKeys: "strict",
  catchall: Ht.create(),
  typeName: Q.ZodObject,
  ...ae(e)
});
De.lazycreate = (r, e) => new De({
  shape: r,
  unknownKeys: "strip",
  catchall: Ht.create(),
  typeName: Q.ZodObject,
  ...ae(e)
});
class Cn extends he {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Rt(o.ctx.common.issues));
      return H(t, {
        code: M.invalid_union,
        unionErrors: a
      }), J;
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
        const c = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, d = l._parseSync({
          data: t.data,
          path: t.path,
          parent: c
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !s && (s = { result: d, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (s)
        return t.common.issues.push(...s.ctx.common.issues), s.result;
      const o = a.map((l) => new Rt(l));
      return H(t, {
        code: M.invalid_union,
        unionErrors: o
      }), J;
    }
  }
  get options() {
    return this._def.options;
  }
}
Cn.create = (r, e) => new Cn({
  options: r,
  typeName: Q.ZodUnion,
  ...ae(e)
});
function pi(r, e) {
  const t = It(r), n = It(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === W.object && n === W.object) {
    const i = me.objectKeys(e), s = me.objectKeys(r).filter((o) => i.indexOf(o) !== -1), a = { ...r, ...e };
    for (const o of s) {
      const l = pi(r[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (t === W.array && n === W.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s], o = e[s], l = pi(a, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === W.date && n === W.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class En extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (As(s) || As(a))
        return J;
      const o = pi(s.value, a.value);
      return o.valid ? ((Ts(s) || Ts(a)) && t.dirty(), { status: t.value, value: o.data }) : (H(n, {
        code: M.invalid_intersection_types
      }), J);
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
En.create = (r, e, t) => new En({
  left: r,
  right: e,
  typeName: Q.ZodIntersection,
  ...ae(t)
});
class Zt extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== W.array)
      return H(n, {
        code: M.invalid_type,
        expected: W.array,
        received: n.parsedType
      }), J;
    if (n.data.length < this._def.items.length)
      return H(n, {
        code: M.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), J;
    !this._def.rest && n.data.length > this._def.items.length && (H(n, {
      code: M.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...n.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new Bt(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(s).then((a) => Xe.mergeArray(t, a)) : Xe.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Zt({
      ...this._def,
      rest: e
    });
  }
}
Zt.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Zt({
    items: r,
    typeName: Q.ZodTuple,
    rest: null,
    ...ae(e)
  });
};
class Bs extends he {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== W.map)
      return H(n, {
        code: M.invalid_type,
        expected: W.map,
        received: n.parsedType
      }), J;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, l], c) => ({
      key: i._parse(new Bt(n, o, n.path, [c, "key"])),
      value: s._parse(new Bt(n, l, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, d = await l.value;
          if (c.status === "aborted" || d.status === "aborted")
            return J;
          (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return J;
        (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
      }
      return { status: t.value, value: o };
    }
  }
}
Bs.create = (r, e, t) => new Bs({
  valueType: e,
  keyType: r,
  typeName: Q.ZodMap,
  ...ae(t)
});
class Pr extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== W.set)
      return H(n, {
        code: M.invalid_type,
        expected: W.set,
        received: n.parsedType
      }), J;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (H(n, {
      code: M.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (H(n, {
      code: M.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), t.dirty());
    const s = this._def.valueType;
    function a(l) {
      const c = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return J;
        d.status === "dirty" && t.dirty(), c.add(d.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...n.data.values()].map((l, c) => s._parse(new Bt(n, l, n.path, c)));
    return n.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new Pr({
      ...this._def,
      minSize: { value: e, message: G.toString(t) }
    });
  }
  max(e, t) {
    return new Pr({
      ...this._def,
      maxSize: { value: e, message: G.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Pr.create = (r, e) => new Pr({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: Q.ZodSet,
  ...ae(e)
});
class Hs extends he {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Hs.create = (r, e) => new Hs({
  getter: r,
  typeName: Q.ZodLazy,
  ...ae(e)
});
class Vs extends he {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return H(t, {
        received: t.data,
        code: M.invalid_literal,
        expected: this._def.value
      }), J;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Vs.create = (r, e) => new Vs({
  value: r,
  typeName: Q.ZodLiteral,
  ...ae(e)
});
function sl(r, e) {
  return new or({
    values: r,
    typeName: Q.ZodEnum,
    ...ae(e)
  });
}
class or extends he {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return H(t, {
        expected: me.joinValues(n),
        received: t.parsedType,
        code: M.invalid_type
      }), J;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return H(t, {
        received: t.data,
        code: M.invalid_enum_value,
        options: n
      }), J;
    }
    return lt(e.data);
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
    return or.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return or.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
or.create = sl;
class js extends he {
  _parse(e) {
    const t = me.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== W.string && n.parsedType !== W.number) {
      const i = me.objectValues(t);
      return H(n, {
        expected: me.joinValues(i),
        received: n.parsedType,
        code: M.invalid_type
      }), J;
    }
    if (this._cache || (this._cache = new Set(me.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = me.objectValues(t);
      return H(n, {
        received: n.data,
        code: M.invalid_enum_value,
        options: i
      }), J;
    }
    return lt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
js.create = (r, e) => new js({
  values: r,
  typeName: Q.ZodNativeEnum,
  ...ae(e)
});
class kn extends he {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== W.promise && t.common.async === !1)
      return H(t, {
        code: M.invalid_type,
        expected: W.promise,
        received: t.parsedType
      }), J;
    const n = t.parsedType === W.promise ? t.data : Promise.resolve(t.data);
    return lt(n.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
kn.create = (r, e) => new kn({
  type: r,
  typeName: Q.ZodPromise,
  ...ae(e)
});
class lr extends he {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Q.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (a) => {
        H(n, a), a.fatal ? t.abort() : t.dirty();
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
            return J;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? J : l.status === "dirty" || t.value === "dirty" ? br(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return J;
        const o = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? J : o.status === "dirty" || t.value === "dirty" ? br(o.value) : o;
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
        return o.status === "aborted" ? J : (o.status === "dirty" && t.dirty(), a(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? J : (o.status === "dirty" && t.dirty(), a(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!ar(a))
          return J;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => ar(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({
          status: t.value,
          value: o
        })) : J);
    me.assertNever(i);
  }
}
lr.create = (r, e, t) => new lr({
  schema: r,
  typeName: Q.ZodEffects,
  effect: e,
  ...ae(t)
});
lr.createWithPreprocess = (r, e, t) => new lr({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: Q.ZodEffects,
  ...ae(t)
});
class zt extends he {
  _parse(e) {
    return this._getType(e) === W.undefined ? lt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
zt.create = (r, e) => new zt({
  innerType: r,
  typeName: Q.ZodOptional,
  ...ae(e)
});
class cr extends he {
  _parse(e) {
    return this._getType(e) === W.null ? lt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
cr.create = (r, e) => new cr({
  innerType: r,
  typeName: Q.ZodNullable,
  ...ae(e)
});
class gi extends he {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === W.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
gi.create = (r, e) => new gi({
  innerType: r,
  typeName: Q.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ae(e)
});
class vi extends he {
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
    return wn(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Rt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Rt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
vi.create = (r, e) => new vi({
  innerType: r,
  typeName: Q.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ae(e)
});
class $s extends he {
  _parse(e) {
    if (this._getType(e) !== W.nan) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.nan,
        received: n.parsedType
      }), J;
    }
    return { status: "valid", value: e.data };
  }
}
$s.create = (r) => new $s({
  typeName: Q.ZodNaN,
  ...ae(r)
});
class np extends he {
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
class Wi extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? J : s.status === "dirty" ? (t.dirty(), br(s.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? J : i.status === "dirty" ? (t.dirty(), {
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
    return new Wi({
      in: e,
      out: t,
      typeName: Q.ZodPipeline
    });
  }
}
class yi extends he {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (i) => (ar(i) && (i.value = Object.freeze(i.value)), i);
    return wn(t) ? t.then((i) => n(i)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yi.create = (r, e) => new yi({
  innerType: r,
  typeName: Q.ZodReadonly,
  ...ae(e)
});
var Q;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(Q || (Q = {}));
const ip = mi.create;
Ht.create;
Ct.create;
const sp = De.create;
Cn.create;
En.create;
Zt.create;
or.create;
kn.create;
zt.create;
cr.create;
function ap(r, e) {
  return async (t, n, i) => {
    const s = op(r, t), a = { ...t };
    for (const l of Object.keys(a))
      a[l] === null && (a[l] = void 0);
    return Tm(s, e)(a, n, i);
  };
}
function op(r, e) {
  const n = Hi(r).shape, i = {};
  for (const [a, o] of Object.entries(n)) {
    const l = Vi(o);
    if (!l || !l.renderIf) {
      i[a] = o;
      continue;
    }
    Hn(l.renderIf, e) ? i[a] = o : i[a] = ip();
  }
  const s = sp(i);
  if (ve(r, "ZodEffects")) {
    const o = r._def.effect;
    if (o.type === "refinement")
      return s.superRefine(o.refinement);
  }
  return s;
}
function Ws(r) {
  const e = document.getElementById(r);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function lp({
  formName: r,
  errors: e
}) {
  const t = Object.keys(e).filter((h) => h !== "root"), n = t.length > 0, i = t.length, [s, a] = te(0), o = Y([]);
  X(() => {
    const h = t, p = o.current, g = h.find(
      (b) => !p.includes(b)
    );
    if (g) {
      const b = Mr(r, void 0, g);
      Ws(b);
      const _ = h.indexOf(g);
      _ !== -1 && a(_);
    }
    o.current = h;
  }, [t, r]);
  const l = ue(
    (h) => {
      if (t.length === 0) return;
      const p = (h % t.length + t.length) % t.length;
      a(p);
      const g = t[p], b = Mr(r, void 0, g);
      Ws(b);
    },
    [t, r]
  ), c = ue(() => {
    l(s - 1);
  }, [s, l]), d = ue(() => {
    l(s + 1);
  }, [s, l]), u = ue(() => {
    a(0), o.current = [];
  }, []);
  return {
    fieldErrors: t,
    hasErrors: n,
    errorCount: i,
    currentErrorIndex: s,
    goToPreviousError: c,
    goToNextError: d,
    resetErrorNavigation: u
  };
}
function cp(r) {
  const e = gt(r);
  if (!ve(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (i = s.value);
  return { min: n, max: i };
}
function ti(r) {
  const e = gt(r);
  if (!ve(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: n, maxDate: i };
}
function dp(r) {
  const e = gt(r);
  if (!ve(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const i of t)
    i.kind === "max" && (n = i.value);
  return { maxLength: n };
}
function up(r) {
  const e = gt(r);
  return ve(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "email") : !1;
}
function hp(r) {
  const e = gt(r);
  return ve(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "url") : !1;
}
function Gs(r) {
  return up(r) ? "email" : hp(r) ? "url" : "text";
}
function Us(r, e, t, n) {
  const i = {
    id: r,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    validation: e
  }, s = !Xo(e);
  switch (n) {
    case "text": {
      const a = "inputType" in t && t.inputType ? t.inputType : Gs(e);
      return {
        ...i,
        type: "text",
        inputType: a,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: a, max: o } = cp(e);
      return {
        ...i,
        type: "number",
        step: "step" in t ? t.step : void 0,
        min: a,
        max: o,
        locale: "locale" in t ? t.locale : void 0,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "textarea": {
      const { maxLength: a } = dp(e);
      return {
        ...i,
        type: "textarea",
        rows: "rows" in t ? t.rows : void 0,
        maxLength: a,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "select": {
      const a = "source" in t && t.source;
      return {
        ...i,
        type: "select",
        // Only include options if not using source
        ...a ? {
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
      const a = ti(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
      return {
        ...i,
        type: "date",
        granularities: "granularities" in t ? t.granularities : void 0,
        minDate: o ?? a.minDate,
        maxDate: l ?? a.maxDate,
        presets: "presets" in t ? t.presets : void 0,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "time": {
      const a = ti(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
      return {
        ...i,
        type: "time",
        minDate: o ?? a.minDate,
        maxDate: l ?? a.maxDate,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "datetime": {
      const a = ti(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
      return {
        ...i,
        type: "datetime",
        minDate: o ?? a.minDate,
        maxDate: l ?? a.maxDate,
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
        fieldConfig: "fieldConfig" in t ? t.fieldConfig : void 0,
        renderIf: t.renderIf
      };
    default:
      return {
        ...i,
        type: "text",
        inputType: Gs(e),
        renderIf: t.renderIf
      };
  }
}
function Sn(r) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (let n = 0; n < r.length; n++) {
    if (t.has(n)) continue;
    const i = r[n], s = i.config.row;
    if (s) {
      const a = [];
      for (let l = n; l < r.length; l++)
        r[l].config.row === s && (a.push(r[l]), t.add(l));
      a.sort((l, c) => l.position - c.position);
      const o = {
        type: "row",
        fields: a.map(
          (l) => Us(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(o);
    } else {
      t.add(n);
      const a = Us(
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
function al(r) {
  const e = r.shape, t = [], n = Object.entries(e);
  for (let i = 0; i < n.length; i++) {
    const [s, a] = n[i], o = Vi(a);
    if (o) {
      const l = Qf(a, o);
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
function fp(r, e) {
  return Z(() => {
    const t = Hi(r), n = al(t), i = [], s = {};
    for (const l of n) {
      const c = l.config.section;
      c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
    }
    i.sort((l, c) => l.position - c.position);
    for (const l of Object.keys(s))
      s[l].sort((c, d) => c.position - d.position);
    const a = [];
    a.push(...Sn(i));
    const o = e ? Object.keys(e).filter((l) => s[l]) : Object.keys(s);
    for (const l of o) {
      const c = e?.[l], d = s[l], u = {
        id: l,
        type: "section",
        section: {
          title: c?.title ?? l,
          description: c?.description,
          renderIf: c?.renderIf,
          action: c?.action,
          fields: Sn(d)
        }
      };
      a.push(u);
    }
    return a;
  }, [r, e]);
}
function mg(r, e) {
  const t = Hi(r), n = al(t), i = [], s = {};
  for (const l of n) {
    const c = l.config.section;
    c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
  }
  i.sort((l, c) => l.position - c.position);
  for (const l of Object.keys(s))
    s[l].sort((c, d) => c.position - d.position);
  const a = [];
  a.push(...Sn(i));
  const o = e ? Object.keys(e).filter((l) => s[l]) : Object.keys(s);
  for (const l of o) {
    const c = e?.[l], d = s[l], u = {
      id: l,
      type: "section",
      section: {
        title: c?.title ?? l,
        description: c?.description,
        renderIf: c?.renderIf,
        action: c?.action,
        fields: Sn(d)
      }
    };
    a.push(u);
  }
  return a;
}
function mp(r) {
  const { validation: e } = r.forms;
  return (t, n) => {
    switch (t.code) {
      case M.invalid_type:
        return t.received === "undefined" || t.received === "null" ? { message: e.required } : { message: e.invalidType };
      case M.invalid_string:
        if (t.validation === "email")
          return { message: e.string.email };
        if (t.validation === "url")
          return { message: e.string.url };
        break;
      case M.too_small:
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
      case M.too_big:
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
      case M.invalid_date:
        return { message: e.date.invalid };
      case M.not_multiple_of:
        if (t.multipleOf === 1)
          return { message: e.number.integer };
        break;
      case M.invalid_literal:
        if (t.expected === !0)
          return { message: e.checkbox.mustBeChecked };
        break;
    }
    return { message: n.defaultError };
  };
}
function pp(r) {
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
const gp = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function vp(r) {
  const e = zr(), { forms: t } = e, { name: n, schema: i, sections: s, defaultValues: a, onSubmit: o, submitConfig: l, className: c, errorTriggerMode: d = "on-blur", styling: u, formRef: h } = r, p = u?.showSectionsSidepanel ?? !1, g = l?.type === "action-bar", b = l?.label ?? "Submit", _ = l?.icon === null ? void 0 : l?.icon ?? Ll, T = l?.type !== "action-bar" && l?.hideSubmitButton, D = !g && !T, S = l?.type === "action-bar" && l?.discardable, O = g ? l?.discardConfig : void 0, x = O?.label ?? t.actionBar.discard, E = O?.icon === null ? void 0 : O?.icon ?? Pl, C = g ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, N = g && !!l?.centerActionBarInFrameContent, V = fp(i, s), I = Z(() => V.filter((re) => re.type === "section").map((re) => re.id), [V]), [R, k] = te(I[0]), A = ue((re) => {
    k(re);
    const ye = Mr(n, re), be = document.getElementById(ye);
    be && be.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [n]), $ = Z(() => !s || !p ? [] : I.map((re) => ({
    id: re,
    label: s[re]?.title ?? re,
    onClick: () => A(re)
  })), [s, I, p, A]), ie = Z(() => mp(e), [e]), fe = gp[d], ne = Z(() => ap(i, {
    errorMap: ie
  }), [i, ie]), ce = Zf({
    resolver: ne,
    mode: fe,
    defaultValues: a
  }), oe = ce.formState.errors.root, { isDirty: we, isSubmitting: Ue, errors: _e } = ce.formState, { hasErrors: ke, errorCount: Oe, goToPreviousError: ct, goToNextError: Se, resetErrorNavigation: Ve } = lp({
    formName: n,
    errors: _e
  }), Re = async (re) => {
    const ye = {
      ...re
    };
    for (const Qe of Object.keys(ye))
      ye[Qe] === null && (ye[Qe] = void 0);
    const be = await o(ye);
    be.success ? (ce.reset(re), Ve()) : (be.errors && Object.entries(be.errors).forEach(([Qe, m]) => {
      ce.setError(Qe, {
        message: m
      });
    }), be.rootMessage && ce.setError("root", {
      message: be.rootMessage
    }));
  }, Me = () => {
    ce.reset(), Ve();
  }, le = Y(null);
  X(() => {
    if (h) {
      const re = {
        submit: () => new Promise((ye, be) => {
          ce.handleSubmit(async (Qe) => {
            await Re(Qe), ye();
          }, () => {
            be(new Error("Form validation failed"));
          })();
        }),
        reset: () => {
          ce.reset(), Ve();
        },
        isDirty: () => ce.formState.isDirty,
        _setStateCallback: (ye) => {
          le.current = ye;
        }
      };
      h.current = re;
    }
    return () => {
      h && (h.current = null);
    };
  }, [h, ce, Ve]), X(() => {
    le.current && le.current({
      isSubmitting: Ue,
      hasErrors: ke
    });
  }, [Ue, ke]);
  const Je = pp(V), Le = Z(() => ({
    formName: n
  }), [n]), je = j("form", {
    onSubmit: ce.handleSubmit(Re),
    className: se("flex flex-col", Jf, c),
    children: [Je.map((re, ye) => {
      const be = ye !== 0 && re.type !== "section" ? "mt-4" : "";
      switch (re.type) {
        case "switchGroup":
          return f("div", {
            className: be,
            children: f(tl, {
              fields: re.fields
            })
          }, `switch-group-${ye}`);
        case "field":
          return f("div", {
            className: be,
            children: f($i, {
              field: re.item.field
            })
          }, re.item.field.id);
        case "row":
          return f("div", {
            className: be,
            children: f(el, {
              row: re.item
            })
          }, `row-${re.index}`);
        case "section":
          return f("div", {
            className: ye !== 0 ? Xf : "",
            children: f(Dm, {
              section: re.item
            })
          }, re.item.id);
        default:
          return null;
      }
    }), oe && f("p", {
      className: "mt-4 text-base font-medium text-f1-foreground-critical",
      children: oe.message
    }), !g && D && f("div", {
      className: "mt-4",
      children: f(ht, {
        type: "submit",
        label: b,
        icon: _,
        loading: Ue,
        disabled: ke
      })
    })]
  });
  return f(Zo.Provider, {
    value: Le,
    children: j(Yf, {
      ...ce,
      children: [p && $.length > 0 ? j("div", {
        className: "flex w-full gap-4",
        children: [f("div", {
          className: "shrink-0 sticky top-4 h-fit self-start pt-3",
          children: f(ya, {
            items: $,
            activeItem: R,
            scrollable: !1
          })
        }), f("div", {
          className: "w-px bg-f1-border-secondary"
        }), f("div", {
          className: "flex flex-1 justify-center",
          children: je
        })]
      }) : je, g && f(Jc, {
        isOpen: we,
        variant: "light",
        centerInFrameContent: N,
        label: ke ? void 0 : C,
        leftContent: ke ? j("div", {
          className: "flex items-center gap-3",
          children: [j("div", {
            className: "flex items-center gap-0.5",
            children: [f(Dn, {
              icon: na,
              size: "md",
              color: "critical"
            }), f("span", {
              className: "font-medium text-f1-foreground-critical",
              children: Oe === 1 ? t.actionBar.issues.one.replace("{{count}}", String(Oe)) : t.actionBar.issues.other.replace("{{count}}", String(Oe))
            })]
          }), Oe > 1 && j("div", {
            className: "flex items-center gap-2",
            children: [f(ht, {
              icon: zl,
              onClick: ct,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }), f(ht, {
              icon: Fl,
              onClick: Se,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            })]
          })]
        }) : void 0,
        primaryActions: [{
          label: b,
          icon: _,
          onClick: ce.handleSubmit(Re),
          disabled: ke
        }],
        secondaryActions: S ? [{
          label: x,
          icon: E,
          onClick: Me
        }] : []
      })]
    })
  });
}
function pg() {
  const [r, e] = te(!1), [t, n] = te(!1), i = Y((d) => {
    e(d.isSubmitting), n(d.hasErrors);
  }), s = Y(null), a = Y({
    get current() {
      return s.current;
    },
    set current(d) {
      s.current = d, d && d._setStateCallback(i.current);
    }
  }), o = ue(async () => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return s.current.submit();
  }, []), l = ue(() => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    s.current.reset();
  }, []), c = ue(() => s.current ? s.current.isDirty() : !1, []);
  return {
    formRef: a.current,
    submit: o,
    reset: l,
    isDirty: c,
    isSubmitting: r,
    hasErrors: t
  };
}
const gg = st("F0Form", vp), yp = Ge((r, e) => f(Ei, {
  ref: e,
  variant: "heading",
  ...r
}));
yp.displayName = "F0Heading";
const vg = st(
  "F0GridStack",
  Ci
), ri = 16, bp = Vt({
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
function ol(r, e = 0) {
  return r.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? ol(t.children, e + 1) : []]);
}
function xp(r, e) {
  const t = r.length;
  if (t <= ri) return r;
  const n = t / (ri - 1), i = new Set(Array.from({
    length: ri - 1
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
function wp({ items: r, activeItem: e, className: t, align: n = "left", variant: i = "dark" }) {
  const s = Z(() => xp(ol(r), e), [r, e]);
  return f("div", {
    className: se("flex flex-col justify-center gap-2 py-3", n === "right" ? "items-end" : "items-start", t),
    children: s.map((a) => f("div", {
      className: bp({
        depth: a.depth,
        variant: i,
        active: a.id === e
      })
    }, a.id))
  });
}
const _p = 300, Cp = 0, Ep = Vt({
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
function kp({ title: r, items: e, className: t, activeItem: n, collapsible: i = !1, showChildrenCounter: s = !1, barsAlign: a = "left", size: o = "md", variant: l = "light" }) {
  const [c, d] = te(!1), u = Y(!1), h = (g) => {
    g && !c && (u.current = !0), d(g);
  }, p = ue((g) => {
    !g || !u.current || (u.current = !1, requestAnimationFrame(() => {
      g.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return j(Bl, {
    open: c,
    onOpenChange: h,
    openDelay: Cp,
    closeDelay: _p,
    children: [f(Hl, {
      asChild: !0,
      children: f("button", {
        className: se(Qs(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": r ?? "Menu",
        children: f(wp, {
          items: e,
          activeItem: n,
          align: a,
          variant: l
        })
      })
    }), f(Vl, {
      ref: p,
      side: a === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: se(Ep({
        size: o
      }), !r && "pt-2", "scrollbar-macos"),
      children: f(ya, {
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
const yg = st(
  "F0TableOfContentPopover",
  kp
), Sp = ({ benefits: r }) => f("div", {
  className: "flex flex-col gap-2",
  children: r.map((e, t) => f(Dp, {
    text: e
  }, t))
}), Dp = ({ text: r }) => j("div", {
  className: "flex flex-row items-start gap-2",
  children: [f(Dn, {
    icon: $l,
    size: "md",
    className: "text-f1-icon-positive"
  }), f("span", {
    children: r
  })]
}), ll = Ge(({ title: r, image: e, benefits: t, actions: n, withShadow: i = !0, module: s, moduleName: a, tag: o, promoTag: l }, c) => j("div", {
  ref: c,
  className: se("bg-white flex flex-row rounded-xl border border-f1-border-secondary", i && "shadow-md"),
  children: [f("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: f("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), j("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [j("div", {
      className: "flex flex-col gap-5",
      children: [j("div", {
        className: "flex flex-col gap-2",
        children: [j("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && f(sa, {
            module: s
          }), a && f("p", {
            className: "text-base font-medium text-f1-foreground",
            children: a
          })]
        }), (o || l) && j("div", {
          className: "flex justify-start gap-2",
          children: [o && f(jl, {
            icon: o.icon,
            text: o.label
          }), l && f(Qc, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), f("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: r
        })]
      }), f(Sp, {
        benefits: t
      })]
    }), n && f("div", {
      className: "flex gap-3",
      children: n
    })]
  })]
}));
ll.displayName = "ProductBlankslate";
function Rp({ isOpen: r, onClose: e, title: t, children: n, module: i, portalContainer: s }) {
  const [a, o] = te(r);
  return X(() => {
    o(r);
  }, [r]), f(Wl, {
    open: a,
    onOpenChange: (c) => {
      o(c), c || e();
    },
    modal: !0,
    children: j(Gl, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [j("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [j(Ul, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [i && f(sa, {
            module: i,
            size: "lg"
          }), t]
        }), f(xi, {
          variant: "outline",
          icon: aa,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), j(ta, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [n, f(ra, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function bg({ isOpen: r, onClose: e, title: t, image: n, benefits: i, errorMessage: s, successMessage: a, loadingState: o, nextSteps: l, closeLabel: c, primaryAction: d, modalTitle: u, modalModule: h, secondaryAction: p, portalContainer: g, tag: b, promoTag: _, showResponseDialog: T = !0 }) {
  const [D, S] = te(r), [O, x] = te(null), [E, C] = te(!1), N = async () => {
    if (d?.onClick) {
      C(!0);
      try {
        await d.onClick(), S(!1), T && x("success");
      } catch {
        T && x("error");
      } finally {
        C(!1);
      }
    }
  }, V = () => {
    S(!1), e?.();
  }, I = E;
  return j(Fr, {
    children: [f(Rp, {
      isOpen: D,
      onClose: V,
      title: u,
      module: h,
      portalContainer: g,
      children: f("div", {
        className: "pb-4 pl-4",
        children: f(ll, {
          title: t,
          image: n,
          benefits: i,
          withShadow: !1,
          tag: b,
          promoTag: _,
          actions: j("div", {
            className: "flex gap-3",
            children: [d && f(ht, {
              variant: d.variant,
              label: I ? o.label : d.label,
              icon: d.icon || void 0,
              onClick: N,
              loading: d.loading,
              size: d.size
            }), p && f(ht, {
              onClick: p.onClick,
              label: p.label,
              variant: p.variant,
              size: p.size,
              icon: p.icon
            })]
          })
        })
      })
    }), O && T && f(ba, {
      open: !0,
      onClose: () => {
        V(), x(null);
      },
      success: O === "success",
      errorMessage: s,
      successMessage: a,
      nextSteps: l,
      closeLabel: c,
      portalContainer: g
    })]
  });
}
function Np({ mediaUrl: r, title: e, description: t, onClose: n, dismissible: i, width: s, trackVisibility: a, actions: o, showConfirmation: l = !0 }) {
  const [c, d] = te(!1), u = () => {
    d(!0), n && n();
  };
  X(() => {
    a && a(!c);
  }, [a, c]);
  const h = r?.includes(".mp4");
  return f(Fr, {
    children: c ? null : j(Zl, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [j(ql, {
        children: [i && f("div", {
          className: "absolute right-2 top-2 z-10",
          children: f(ht, {
            variant: "ghost",
            icon: aa,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          })
        }), j("div", {
          children: [f("div", {
            children: r && (h ? f("video", {
              src: r,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : f("img", {
              src: r,
              alt: e,
              className: "h-full w-full rounded-md"
            }))
          }), j("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [f(xn, {
              className: "text-lg font-medium",
              children: e
            }), f(xn, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), o && f(Yl, {
        className: "p-3",
        children: o.map((p) => p.type === "upsell" ? f(xa, {
          label: p.label,
          onRequest: p.onClick,
          errorMessage: p.errorMessage,
          successMessage: p.successMessage,
          loadingState: p.loadingState,
          nextSteps: p.nextSteps,
          closeLabel: p.closeLabel,
          showConfirmation: l && p.showConfirmation,
          variant: p.variant
        }, p.label) : f(ht, {
          label: p.label,
          onClick: p.onClick,
          variant: p.variant
        }, p.label))
      })]
    })
  });
}
const Ap = Ge(function({ primaryAction: e, secondaryAction: t, ...n }, i) {
  const s = (l) => l.variant === "promote" ? f(xa, {
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
  }) : f(ht, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), a = e?.variant !== "promote" ? e : void 0, o = t?.variant !== "promote" ? t : void 0;
  return j(ed, {
    ref: i,
    ...n,
    primaryAction: a,
    secondaryAction: o,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
Ap.displayName = "UpsellingBanner";
function xg({ isOpen: r, setIsOpen: e, label: t, variant: n = "promote", size: i = "md", showIcon: s = !0, side: a = "right", align: o = "center", icon: l = Kl, mediaUrl: c, title: d, description: u, width: h = "300px", trackVisibility: p, actions: g, onClick: b, hideLabel: _ = !1 }) {
  const [T, D] = te(!1), [S, O] = te(null), [x, E] = te(null), C = (k) => {
    e(k), b && b();
  }, N = async (k) => {
    if (k.type === "upsell") {
      E(k);
      try {
        await k.onClick(), k.showConfirmation && (D(!0), O("success"));
      } catch {
        D(!0), O("error");
      }
    }
  }, V = () => {
    O(null), D(!1), E(null), e(!1);
  }, I = r && !T, R = g?.map((k) => k.type === "upsell" ? {
    ...k,
    onClick: () => N(k)
  } : k);
  return j(Fr, {
    children: [j(Xs, {
      open: I,
      onOpenChange: C,
      children: [f(Js, {
        asChild: !0,
        children: f(ht, {
          variant: n,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(r),
          hideLabel: _
        })
      }), f(ea, {
        side: a,
        align: o,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: f(Np, {
          mediaUrl: c,
          title: d,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: h,
          trackVisibility: p,
          actions: R,
          showConfirmation: !1
        })
      })]
    }), x?.type === "upsell" && x.showConfirmation && S && f(ba, {
      open: !0,
      onClose: V,
      success: S === "success",
      errorMessage: x.errorMessage,
      successMessage: x.successMessage,
      nextSteps: x.nextSteps,
      closeLabel: x.closeLabel,
      portalContainer: null
    })]
  });
}
const Tp = Et(null), Op = ({ children: r, fullScreen: e = !0 }) => {
  const t = Y(null), [n, i] = te(t.current);
  return nc(() => {
    i(t.current);
  }, []), f(Tp.Provider, {
    value: {
      element: n
    },
    children: f("div", {
      ref: t,
      id: "f0-layout",
      className: se({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: r
    })
  });
}, Mp = ({ children: r }) => f(nd, {
  reducedMotion: "user",
  children: r
}), wg = ({ children: r, layout: e, link: t, privacyModeInitiallyEnabled: n, image: i, i18n: s, l10n: a, isDev: o = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: c = !1 }) => f(Mp, {
  children: f(Xl, {
    isDev: o,
    showExperimentalWarnings: c,
    children: f(Jl, {
      ...a,
      children: f(Ql, {
        ...s,
        children: f(ec, {
          ...t,
          children: f(Op, {
            ...e,
            children: f(tc, {
              children: f(td, {
                initiallyEnabled: n,
                children: f(rc, {
                  ...i,
                  children: f(rd, {
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
}), Zs = (r) => `datacollection-${r}`, _g = {
  get: async (r) => JSON.parse(
    localStorage.getItem(Zs(r)) ?? "{}"
  ),
  set: async (r, e) => {
    localStorage.setItem(Zs(r), JSON.stringify(e));
  }
};
export {
  kg as A,
  ly as AiChatTranslationsProvider,
  Gp as AreaChart,
  Sg as Await,
  Up as BarChart,
  Dg as Blockquote,
  Zp as CategoryBarChart,
  Rg as ChatSpinner,
  Jp as ComboChart,
  Hp as Dashboard,
  Hv as DndProvider,
  Ng as Em,
  Ag as EmojiImage,
  Tg as F0ActionItem,
  Og as F0AiChat,
  Mg as F0AiChatProvider,
  Ig as F0AiChatTextArea,
  Lg as F0AiCollapsibleMessage,
  Pg as F0AiFullscreenChat,
  ug as F0Alert,
  cy as F0AuraVoiceAnimation,
  zg as F0Avatar,
  Uc as F0AvatarAlert,
  Fg as F0AvatarCompany,
  Vv as F0AvatarDate,
  Bg as F0AvatarEmoji,
  Hg as F0AvatarFile,
  El as F0AvatarIcon,
  jv as F0AvatarList,
  sa as F0AvatarModule,
  Vg as F0AvatarPerson,
  jg as F0AvatarTeam,
  Qp as F0BigNumber,
  eg as F0Box,
  ht as F0Button,
  $g as F0ButtonDropdown,
  Wg as F0ButtonToggle,
  $v as F0Card,
  Al as F0Checkbox,
  cg as F0ChipList,
  va as F0DatePicker,
  Gg as F0Dialog,
  Ug as F0DialogContext,
  Zg as F0DialogProvider,
  qg as F0EventCatcherProvider,
  Rf as F0FilterPickerContent,
  gg as F0Form,
  vg as F0GridStack,
  dy as F0HILActionConfirmation,
  yp as F0Heading,
  Dn as F0Icon,
  Sl as F0Link,
  Yg as F0MessageSources,
  Kg as F0OneIcon,
  Xg as F0OneSwitch,
  wg as F0Provider,
  rr as F0Select,
  yg as F0TableOfContentPopover,
  Wv as F0TagAlert,
  Gc as F0TagBalance,
  Gv as F0TagCompany,
  Jg as F0TagDot,
  Uv as F0TagList,
  Zv as F0TagPerson,
  jl as F0TagRaw,
  Qc as F0TagStatus,
  qv as F0TagTeam,
  Ra as F0Text,
  Qg as F0Thinking,
  ev as FullscreenChatContext,
  tv as GROUP_ID_SYMBOL,
  rv as H1,
  nv as H2,
  iv as H3,
  Wp as HomeLayout,
  sv as Hr,
  av as Image,
  Vp as Layout,
  ov as Li,
  qp as LineChart,
  lv as Ol,
  cv as OneFilterPicker,
  dv as P,
  Yp as PieChart,
  uv as Pre,
  td as PrivacyModeProvider,
  ll as ProductBlankslate,
  Yv as ProductCard,
  bg as ProductModal,
  Np as ProductWidget,
  Xp as ProgressBarChart,
  jp as StandardLayout,
  hv as Strong,
  fv as Table,
  Kv as Tag,
  Xv as TagCounter,
  mv as Td,
  pv as Th,
  $p as TwoColumnLayout,
  gv as Ul,
  ba as UpsellRequestResponseDialog,
  Ap as UpsellingBanner,
  xa as UpsellingButton,
  xg as UpsellingPopover,
  Kp as VerticalBarChart,
  uy as actionItemStatuses,
  hy as aiTranslations,
  Bp as avatarVariants,
  vv as buildTranslations,
  ig as buttonDropdownSizes,
  ng as buttonDropdownVariants,
  rg as buttonSizes,
  sg as buttonToggleSizes,
  ag as buttonToggleVariants,
  tg as buttonVariants,
  Jv as cardImageFits,
  Qv as cardImageSizes,
  ey as createAtlaskitDriver,
  yv as createDataSourceDefinition,
  _d as createPageLayoutBlock,
  Cd as createPageLayoutBlockGroup,
  _g as dataCollectionLocalStorageHandler,
  dg as datepickerSizes,
  gy as defaultTranslations,
  bv as downloadTableAsExcel,
  Hn as evaluateRenderIf,
  st as experimental,
  hg as f0FormField,
  xv as f0MarkdownRenderers,
  Mr as generateAnchorId,
  wv as getAnimationVariants,
  _v as getDataSourcePaginationType,
  Cv as getEmojiLabel,
  Vi as getF0Config,
  mg as getSchemaDefinition,
  fg as hasF0Config,
  Qf as inferFieldType,
  Ev as isInfiniteScrollPagination,
  kv as isPageBasedPagination,
  ve as isZodType,
  og as linkVariants,
  Sv as modules,
  fy as oneIconSizes,
  ty as predefinedPresets,
  ry as selectSizes,
  lg as tagDotColors,
  gt as unwrapZodSchema,
  Dv as useAiChat,
  my as useAiChatTranslations,
  Rv as useData,
  Nv as useDataSource,
  Av as useDefaultCopilotActions,
  ny as useDndEvents,
  iy as useDraggable,
  sy as useDroppableList,
  Tv as useEmojiConfetti,
  Ov as useF0Dialog,
  pg as useF0Form,
  Mv as useGroups,
  Iv as useMessageSourcesAction,
  Lv as useOrchestratorThinkingAction,
  ay as usePrivacyMode,
  Pv as useReducedMotion,
  fp as useSchemaDefinition,
  zv as useSelectable,
  Fv as useXRay
};
