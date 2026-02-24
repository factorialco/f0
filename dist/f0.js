import { a6 as re, a7 as Vt, aa as ta, ab as wi, ac as _i, ad as Qi, ae as El, af as ra, ag as yt, u as ur, ah as Rn, ai as kl, aj as Sl, ak as Dl, al as Nl, am as st, an as ot, ao as Rl, ap as Al, aq as na, ar as Tl, as as rn, at as ia, au as sa, av as aa, aw as oa, ax as la, ay as ca, az as Ol, aA as Ml, aB as Ll, aC as Il, aD as Pl, a8 as Xe, aE as es, aF as zl, aG as Fl, aH as Bl, aI as da, aJ as Hl, aK as Vl, aL as jl, aM as ua, aN as $l, aO as nr, aP as Wl, aQ as Gl, aR as Ul, aS as ha, aT as Zl, aU as fa, aV as ql, aW as Kl, aX as Yl, aY as Xl, aZ as Jl, a_ as ma, a$ as Ql, b0 as ec, b1 as tc, b2 as rc, b3 as nc, b4 as ic, I as sc, b5 as ac, b6 as oc, b7 as lc, b8 as cc } from "./F0AiChat-Djichzjr.js";
import { A as Mg, bo as Lg, B as Ig, C as Pg, E as zg, bD as Fg, h as Bg, F as Hg, a as Vg, x as jg, i as $g, b as Wg, b9 as Gg, ba as Ug, bb as Zg, bc as qg, be as Kg, bf as Yg, bg as Xg, bh as Jg, bi as Qg, bj as ev, bk as tv, bz as rv, s as nv, t as iv, v as sv, bn as av, w as ov, c as lv, bp as cv, n as dv, o as uv, p as hv, H as fv, k as mv, L as pv, O as gv, bm as vv, q as yv, P as bv, S as xv, T as wv, l as _v, m as Cv, U as Ev, bA as kv, bu as Sv, r as Dv, j as Nv, bx as Rv, bt as Av, bE as Tv, bs as Ov, br as Mv, bd as Lv, d as Iv, bq as Pv, bv as zv, e as Fv, bF as Bv, bl as Hv, bw as Vv, g as jv, f as $v, bC as Wv, by as Gv, bB as Uv } from "./F0AiChat-Djichzjr.js";
import { jsx as f, jsxs as j, Fragment as Br } from "react/jsx-runtime";
import * as at from "react";
import B, { forwardRef as We, useRef as K, useImperativeHandle as dc, Children as nn, createContext as Ct, useContext as ht, useState as Q, useMemo as U, useEffect as J, useCallback as le, useLayoutEffect as si, createElement as qr, isValidElement as pa, Fragment as uc, memo as hc, useReducer as fc, cloneElement as mc, PureComponent as pc } from "react";
import { createPortal as ga, unstable_batchedUpdates as Kr, flushSync as gc } from "react-dom";
import { L as va, C as vc, i as ya, D as yc, S as ts, a as bc, f as Un, b as yr, c as xc, A as wc, d as Yr, e as ba, E as _c, g as Qr, h as Cc, j as Ec, k as kc, l as er, m as xa, u as Sc, G as Dc, n as Nc, o as rs, p as Rc, q as wa, r as Ac, B as _a, X as Ca, Y as ai, s as Tc, t as Ea, v as Oc, w as Mc, x as Lc, y as Ic, z as Pc, F as zc, H as Fc, I as Bc, J as ns, K as Hc, M as Cr, N as Zn, O as Vc, P as jc, Q as $c, R as Wc, T as Gc, U as Uc, V as Zc, W as qc, Z as Kc, _ as Yc, $ as Xc, a0 as is, a1 as Jc, a2 as Qc, a3 as ss, a4 as ka, a5 as ed, a6 as td, a7 as rd, a8 as nd, a9 as Sa, aa as Ci, ab as id, ac as sd, ad, ae as od, af as Da, ag as Na, ah as ld, ai as cd, aj as dd, ak as ud } from "./DataCollectionStorageProvider-uz3aT5NW.js";
import { aB as qv, al as Kv, am as Yv, ap as Xv, at as Jv, au as Qv, aw as ey, ax as ty, ay as ry, az as ny, as as iy, av as sy, an as ay, ao as oy, aA as ly, aq as cy, ar as dy, aC as uy, aD as hy, aE as fy, aF as my } from "./DataCollectionStorageProvider-uz3aT5NW.js";
import { A as gy, F as vy, c as yy, b as by, a as xy, o as wy, u as _y } from "./F0HILActionConfirmation-BVKnYA0y.js";
import { defaultTranslations as Ey } from "./i18n-provider-defaults.js";
import './f0.css';const hd = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, fd = We(function({ widgets: e, children: t }, n) {
  const i = K(null);
  dc(n, () => i.current);
  const s = nn.toArray(e).filter((a) => !!a).map((a, o) => f("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: a
  }, o));
  return f(va, {
    layout: "home",
    children: j("div", {
      ref: i,
      className: "@container",
      children: [j("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [f(vc, {
          columns: hd,
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
}), md = Vt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Ra = B.forwardRef(({ children: r, variant: e, className: t, ...n }, i) => f(va, {
  layout: "standard",
  children: f("section", {
    ref: i,
    className: re("relative flex-1 overflow-auto", t),
    ...n,
    children: f("div", {
      className: re(md({
        variant: e
      })),
      children: r
    })
  })
}));
Ra.displayName = "StandardLayout";
const pd = We(function({ children: e, sideContent: t, mainColumnPosition: n = "left", sticky: i = !1 }, s) {
  return f("div", {
    ref: s,
    className: "h-full",
    children: j("div", {
      className: re("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", i && "md:sticky md:top-0 md:max-h-full"),
      children: [f("main", {
        className: re("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), f(gd, {
        sticky: i,
        className: re("order-1", n === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), gd = ({ children: r, className: e }) => f("aside", {
  className: re("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: r
}), Aa = Ct(null);
function Ta() {
  const r = ht(Aa);
  if (!r)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return r;
}
function vd(r) {
  const { content: e, ...t } = r;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function tr(r) {
  const e = vd(r);
  return r.subGridOpts?.children && (e.subGridOpts = {
    ...r.subGridOpts,
    children: r.subGridOpts.children.map(
      (t) => tr(t)
    )
  }), e;
}
const yd = ["noMove", "noResize", "locked", "w", "h", "x", "y"], Ot = 200;
function bd(r) {
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
function xd({ children: r, options: e, onResizeStop: t, onChange: n, widgets: i }) {
  const [s, a] = Q(null), o = K(null), l = K(!1), c = U(() => ({
    ...e,
    children: (i || []).map((D) => tr(D))
  }), [e, i]), [d, u] = Q(() => {
    const D = /* @__PURE__ */ new Map(), O = i || [], b = (k) => {
      k.id && k.content && D.set(k.id, k.content), k.subGridOpts?.children && k.subGridOpts.children.forEach((E) => {
        b(E);
      });
    };
    return O.forEach((k) => {
      b(k);
    }), D;
  }), h = K(d);
  J(() => {
    h.current = d;
  }, [d]);
  const [m, g] = Q(() => {
    const D = /* @__PURE__ */ new Map(), O = i || [], b = (k) => {
      k.id && k._originalContent !== void 0 && D.set(k.id, k._originalContent), k.subGridOpts?.children && k.subGridOpts.children.forEach((E) => {
        b(E);
      });
    };
    return O.forEach((k) => {
      b(k);
    }), D;
  }), y = K(m);
  J(() => {
    y.current = m;
  }, [m]);
  const [S, _] = Q(() => {
    const D = /* @__PURE__ */ new Map(), O = i || [], b = (k) => {
      if (k.id) {
        const E = tr(k);
        D.set(k.id, E);
      }
      k.subGridOpts?.children && k.subGridOpts.children.forEach((E) => {
        b(E);
      });
    };
    return O.forEach((k) => {
      b(k);
    }), D;
  });
  ta(() => {
    if (!s) return;
    const D = s.save();
    if (!Array.isArray(D))
      return;
    const O = D.map((z) => z.id), b = i || [], k = b.map((z) => z.id), E = b.filter((z) => !O.includes(z.id));
    E.length > 0 && (E.forEach((z) => {
      z.content && h.current.set(z.id, z.content), z._originalContent !== void 0 && y.current.set(z.id, z._originalContent);
    }), E.forEach((z) => {
      const N = tr(z);
      s.addWidget(N);
    }), _((z) => {
      const N = new Map(z);
      return E.forEach((C) => {
        const A = tr(C);
        N.set(C.id, A);
      }), N;
    }), u((z) => {
      const N = new Map(z);
      return E.forEach((C) => {
        C.content && N.set(C.id, C.content);
      }), N;
    }), g((z) => {
      const N = new Map(z);
      return E.forEach((C) => {
        C._originalContent !== void 0 && N.set(C.id, C._originalContent);
      }), N;
    }));
    const T = D.filter((z) => !k.includes(z.id));
    if (T.length > 0) {
      const z = T.map((N) => N.id).filter(Boolean);
      z.forEach((N) => {
        setTimeout(() => {
          h.current.delete(N), y.current.delete(N);
        }, Ot);
      }), T.forEach((N) => {
        const C = s.el.querySelector(`[gs-id="${N.id}"]`);
        C && setTimeout(() => {
          s.removeWidget(C, !0);
        }, Ot);
      }), _((N) => {
        const C = new Map(N);
        return z.forEach((A) => {
          setTimeout(() => {
            C.delete(A);
          }, Ot);
        }), C;
      }), u((N) => {
        const C = new Map(N);
        return z.forEach((A) => {
          if (C.get(A)) {
            const ie = s.el.querySelector(`[gs-id="${A}"] .grid-stack-item-content`);
            let de = "";
            ie && (de = bd(ie)), C.set(A, f(wi.div, {
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
                __html: de
              }
            }));
          }
          setTimeout(() => {
            C.delete(A);
          }, Ot);
        }), C;
      }), g((N) => {
        const C = new Map(N);
        return z.forEach((A) => {
          setTimeout(() => {
            C.delete(A);
          }, Ot);
        }), C;
      });
    }
    const $ = b.filter((z) => O.includes(z.id));
    if ($.length > 0) {
      const z = [];
      $.forEach((N) => {
        const C = D.find((V) => V.id === N.id);
        if (!C)
          return;
        const A = yd.filter((V) => C[V] !== N[V]);
        if (A.length > 0) {
          const V = {}, ie = ["w", "h", "x", "y"], de = ["noMove", "noResize", "locked"], se = A.filter((X) => ie.includes(X)), ve = A.filter((X) => de.includes(X));
          if (se.length > 0 && ve.length > 0 && se.length + ve.length === A.length ? ve.forEach((X) => {
            const xe = N[X];
            xe !== void 0 && (V[X] = xe);
          }) : A.forEach((X) => {
            const xe = N[X];
            xe !== void 0 && (V[X] = xe);
          }), Object.keys(V).length > 0) {
            const X = s.el.querySelector(`[gs-id="${N.id}"]`);
            X && z.push({
              id: N.id,
              element: X,
              updateOptions: V
            });
          }
        }
      }), $.forEach((N) => {
        N.content && h.current.set(N.id, N.content), N._originalContent !== void 0 && y.current.set(N.id, N._originalContent);
      }), z.forEach(({ element: N, updateOptions: C }) => {
        try {
          s.update(N, C);
        } catch (A) {
          console.warn("Error updating widget:", A);
        }
      }), _((N) => {
        const C = new Map(N);
        return $.forEach((A) => {
          const V = tr(A);
          C.set(A.id, V);
        }), C;
      }), u((N) => {
        const C = new Map(N);
        return $.forEach((A) => {
          A.content && C.set(A.id, A.content);
        }), C;
      }), g((N) => {
        const C = new Map(N);
        return $.forEach((A) => {
          A._originalContent !== void 0 && C.set(A.id, A._originalContent);
        }), C;
      });
    }
    l.current || (l.current = !0);
  }, [i]), J(() => {
    if (!s || !c.handle) return;
    s.opts && (s.opts.handle = c.handle);
    const D = setTimeout(() => {
      if (s && s.el && c.handle && s.el.querySelectorAll(c.handle).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(D);
  }, [s, c.handle, c.children]);
  const R = le(() => {
    if (!s)
      return;
    const D = s.save();
    if (Array.isArray(D)) {
      const O = D.map((b) => {
        const k = b.id;
        if (!k) return null;
        const E = h.current.get(k), T = y.current.get(k), $ = b;
        return {
          ...b,
          id: k,
          w: b.w ?? 1,
          h: b.h ?? 1,
          x: b.x ?? 0,
          y: b.y ?? 0,
          meta: $.meta,
          _originalContent: T,
          content: E ?? f("div", {
            children: "No content"
          })
        };
      }).filter((b) => b !== null);
      n?.(O);
    }
  }, [s]);
  return J(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const D = (O, b) => {
      t?.(O, b);
    };
    try {
      s.on("resizestop", D), s.on("change added removed", R);
    } catch (O) {
      console.error("Error attaching GridStack event listeners:", O);
      return;
    }
    return () => {
      const O = o.current;
      if (O && O.el)
        try {
          O.off("resizestop"), O.off("change added removed");
        } catch (b) {
          console.warn("Error cleaning up GridStack event listeners:", b);
        }
    };
  }, [s, t, R]), J(() => {
    o.current = s;
  }, [s]), J(() => {
    s && s.el && s.el.parentElement && l.current && R();
  }, [s]), f(Aa.Provider, {
    value: {
      options: c,
      gridStack: s,
      _gridStack: {
        value: s,
        set: a
      },
      _rawWidgetMetaMap: {
        value: S,
        set: _
      },
      _reactContentMap: {
        value: d,
        set: u
      }
    },
    children: r
  });
}
const Oa = Ct(null);
function wd() {
  const r = ht(Oa);
  if (!r)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return r;
}
const _d = Ct(null);
function Cd() {
  const { _reactContentMap: r } = Ta(), { getWidgetContainer: e } = wd();
  return f(Br, {
    children: Array.from(r.value.entries()).map(([t, n]) => {
      const i = e(t);
      return i ? f(_d.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: n && ga(n, i)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function Ed(r, e, t, n, i) {
  const s = (...a) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + i + " and has been replaced with `" + n + "`. It will be **removed** in a future release"), e.apply(r, a));
  return s.prototype = e.prototype, s;
}
class x {
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
    return x.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
        e[i] === null || e[i] === void 0 ? e[i] = n[i] : typeof n[i] == "object" && typeof e[i] == "object" && x.defaults(e[i], n[i]);
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
        n[0] === "_" || i === s ? delete e[n] : i && typeof i == "object" && s !== void 0 && (x.removeInternalAndSame(i, s), Object.keys(i).length || delete e[n]);
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : x.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, n) {
    const i = x.getScrollElement(e);
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
    const i = x.getScrollElement(t), s = i.clientHeight, a = i === x.getScrollElement() ? 0 : i.getBoundingClientRect().top, o = e.clientY - a, l = o < n, c = o > s - n;
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], n = x.clone(e);
    for (const i in n)
      n.hasOwnProperty(i) && typeof n[i] == "object" && i.substring(0, 2) !== "__" && !t.find((s) => s === i) && (n[i] = x.cloneDeep(e[i]));
    return n;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let n;
    typeof t == "string" ? n = x.getElement(t) : n = t, n && n.appendChild(e);
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
    x.addElStyles(t, {
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
        c = this._loading && x.samePos(e, d) ? !0 : this.moveNode(e, d), (n.locked || this._loading) && c ? x.copyPos(t, e) : !n.locked && c && i.pack && (this._packNodes(), t.y = n.y + n.h, x.copyPos(e, t)), a = a || c;
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
    return this.nodes.find((a) => a._id !== i && a._id !== s && x.isIntercepted(a, t));
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
    return this.nodes.filter((a) => a._id !== i && a._id !== s && x.isIntercepted(a, t));
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
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (i = x.isTouching(e, t)))
      return n();
    if (i !== !1) {
      if (e.w === t.w && e.x === t.x && (i || (i = x.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return n();
      }
      if (i !== !1) {
        if (e.h === t.h && e.y === t.y && (i || (i = x.isTouching(e, t)))) {
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
    return this.nodes = x.sort(this.nodes, e), this;
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
    return x.defaults(e, i), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, x.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = i.x, e.autoPosition = !0), isNaN(e.y) && (e.y = i.y, e.autoPosition = !0), isNaN(e.w) && (e.w = i.w), isNaN(e.h) && (e.h = i.h), this.nodeBoundFix(e, t), e;
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
    const n = e._orig || x.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), x.samePos(e, n) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !x.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = x.copyPos({}, e), delete e._dirty;
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
      !e._orig || x.samePos(e, e._orig) || (x.copyPos(e, e._orig), e._dirty = !0);
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
      t.find((u) => x.isIntercepted(d, u)) || ((e.x !== l || e.y !== c) && (e._dirty = !0), e.x = l, e.y = c, delete e.autoPosition, a = !0);
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
      o && (x.copyPos(o, a), o._dirty = !0);
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
    return this.cleanupNode(n), delete n.el, delete n._id, delete n.content, delete n.grid, t.addNode(n), t.getRow() <= this.maxRow ? (e._willFitPos = x.copyPos({}, n), !0) : !1;
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
    const i = e.w !== t.w || e.h !== t.h, s = x.copyPos({}, e, !0);
    if (x.copyPos(s, t), this.nodeBoundFix(s, i), x.copyPos(t, s), !t.forceCollide && x.samePos(e, t))
      return !1;
    const a = x.copyPos({}, e), o = this.collideAll(e, s, t.skip);
    let l = !0;
    if (o.length) {
      const c = e._moving && !t.nested;
      let d = c ? this.directionCollideCoverage(e, t, o) : o[0];
      if (c && d && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = x.areaIntercept(t.rect, d._rect), h = x.area(t.rect), m = x.area(d._rect);
        u / (h < m ? h : m) > 0.8 && (d.grid.makeSubGrid(d.el, void 0, e), d = void 0);
      }
      d ? l = !this._fixCollisions(e, s, d, t) : (l = !1, n && delete t.pack);
    }
    return l && !x.samePos(e, s) && (e._dirty = !0, x.copyPos(e, s)), t.pack && this._packNodes()._notify(), !x.samePos(e, a);
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
      x.removeInternalForSave(c, !e), t && t(o, c), a.push(c);
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
    let s = [], a = i ? this.nodes : x.sort(this.nodes, -1);
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
      s = x.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((o) => {
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
const Ye = {
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
class Y {
}
const ut = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class bt {
}
function sn(r, e) {
  r.touches.length > 1 || (r.cancelable && r.preventDefault(), x.simulateMouseEvent(r.changedTouches[0], e));
}
function Ma(r, e) {
  r.cancelable && r.preventDefault(), x.simulateMouseEvent(r, e);
}
function an(r) {
  bt.touchHandled || (bt.touchHandled = !0, sn(r, "mousedown"));
}
function on(r) {
  bt.touchHandled && sn(r, "mousemove");
}
function ln(r) {
  if (!bt.touchHandled)
    return;
  bt.pointerLeaveTimeout && (window.clearTimeout(bt.pointerLeaveTimeout), delete bt.pointerLeaveTimeout);
  const e = !!Y.dragElement;
  sn(r, "mouseup"), e || sn(r, "click"), bt.touchHandled = !1;
}
function cn(r) {
  r.pointerType !== "mouse" && r.target.releasePointerCapture(r.pointerId);
}
function as(r) {
  Y.dragElement && r.pointerType !== "mouse" && Ma(r, "mouseenter");
}
function os(r) {
  Y.dragElement && r.pointerType !== "mouse" && (bt.pointerLeaveTimeout = window.setTimeout(() => {
    delete bt.pointerLeaveTimeout, Ma(r, "mouseleave");
  }, 10));
}
class An {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${An.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), ut && (this.el.addEventListener("touchstart", an), this.el.addEventListener("pointerdown", cn)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), ut && (this.el.removeEventListener("touchstart", an), this.el.removeEventListener("pointerdown", cn)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ut && (this.el.addEventListener("touchmove", on), this.el.addEventListener("touchend", ln)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ut && (this.el.removeEventListener("touchmove", on), this.el.removeEventListener("touchend", ln)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
An.prefix = "ui-resizable-";
class Ei {
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
class Tr extends Ei {
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
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), Y.overResizeElement === this && delete Y.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    Y.overResizeElement || Y.dragElement || (Y.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    Y.overResizeElement === this && (delete Y.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new An(this.el, e, {
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
    this.sizeToContent = x.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = x.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = x.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const n = x.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(n, this._ui()), this.triggerEvent("resize", n), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = x.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = Tr._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = x.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Tr._originStyleProp.forEach((e, t) => {
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
Tr._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const kd = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class Or extends Ei {
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
      e.addEventListener("mousedown", this._mouseDown), ut && (e.addEventListener("touchstart", an), e.addEventListener("pointerdown", cn));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), ut && (t.removeEventListener("touchstart", an), t.removeEventListener("pointerdown", cn));
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
    if (!Y.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(kd) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete Y.dragElement, delete Y.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ut && (e.currentTarget.addEventListener("touchmove", on), e.currentTarget.addEventListener("touchend", ln)), e.preventDefault(), document.activeElement && document.activeElement.blur(), Y.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = x.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), Y.pauseDrag) {
        const n = Number.isInteger(Y.pauseDrag) ? Y.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), n);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, Y.dragElement = this;
      const n = this.el.gridstackNode?.grid;
      n ? Y.dropElement = n.el.ddElement.ddDroppable : delete Y.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = x.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = x.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ut && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", on, !0), e.currentTarget.removeEventListener("touchend", ln, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), Y.dropElement?.el === this.el.parentElement && delete Y.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = x.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), Y.dropElement && Y.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete Y.dragElement, delete Y.dropElement, delete Y.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, n = t?.grid || Y.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), n?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && n && (e.key === "r" || e.key === "R")) {
      if (!x.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, n.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", x.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = x.cloneNode(this.el)), e.parentElement || x.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = Or.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", Or.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = n, 50);
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
Or.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Sd extends Ei {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), ut && (this.el.addEventListener("pointerenter", as), this.el.addEventListener("pointerleave", os)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), ut && (this.el.removeEventListener("pointerenter", as), this.el.removeEventListener("pointerleave", os)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!Y.dragElement || !this._canDrop(Y.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), Y.dropElement && Y.dropElement !== this && Y.dropElement._mouseLeave(e, !0), Y.dropElement = this;
    const t = x.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(Y.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!Y.dragElement || Y.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = x.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(n, this._ui(Y.dragElement)), this.triggerEvent("dropout", n), Y.dropElement === this && (delete Y.dropElement, !t)) {
      let i, s = this.el.parentElement;
      for (; !i && s; )
        i = s.ddElement?.ddDroppable, s = s.parentElement;
      i && i._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = x.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(Y.dragElement)), this.triggerEvent("drop", t);
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
class ki {
  static init(e) {
    return e.ddElement || (e.ddElement = new ki(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new Or(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Tr(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Sd(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Dd {
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
      n(s, Y.dragElement ? Y.dragElement.el : s.target, Y.dragElement ? Y.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", i = x.getElements(e);
    return i.length ? i.map((a) => a.ddElement || (n ? ki.init(a) : null)).filter((a) => a) : [];
  }
}
const Fe = new Dd();
class q {
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
    const n = q.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new q(n, x.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (q.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new q(i, x.cloneDeep(e))), n.push(i.gridstack);
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
    return (!e.classList.contains("grid-stack") || q.addRemoveCB) && (q.addRemoveCB ? n = q.addRemoveCB(e, t, !0, !0) : n = x.createDiv(["grid-stack", t.class], e)), q.init(t, n);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    q.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = x.createDiv([this.opts.placeholderClass, Ye.itemClass, this.opts.itemClass]);
      const e = x.createDiv(["placeholder-content"], this._placeholder);
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
    const n = x.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const i = t.columnOpts;
    if (i) {
      const c = i.breakpoints;
      !i.columnWidth && !c?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, c?.length > 1 && c.sort((d, u) => (u.w || 0) - (d.w || 0)));
    }
    const s = {
      ...x.cloneDeep(Ye),
      column: x.toNumber(e.getAttribute("gs-column")) || Ye.column,
      minRow: n || x.toNumber(e.getAttribute("gs-min-row")) || Ye.minRow,
      maxRow: n || x.toNumber(e.getAttribute("gs-max-row")) || Ye.maxRow,
      staticGrid: x.toBool(e.getAttribute("gs-static")) || Ye.staticGrid,
      sizeToContent: x.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Ye.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Ye.removableOptions.accept,
        decline: Ye.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = x.toBool(e.getAttribute("gs-animate"))), t = x.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + Ye.itemClass)?.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Ye.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const c = t.cellHeight;
      delete t.cellHeight, this.cellHeight(c);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = ut), this._setStaticClass();
    const l = t.engineClass || q.engineClass || Dt;
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
    this.setAnimation(), t.subGridDynamic && !Y.pauseDrag && (Y.pauseDrag = !0), t.draggable?.pause !== void 0 && (Y.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (n.grid = this, n.el ? t = n.el : q.addRemoveCB ? t = q.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
      return;
    if (n = t.gridstackNode, n && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === n._id))
      return t;
    const i = this._readAttr(t);
    return x.defaults(e, i), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = x.createDiv(["grid-stack-item", this.opts.itemClass]), n = x.createDiv(["grid-stack-item-content"], t);
    return x.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([i]) => {
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, q.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : q.renderCB(n, e), t;
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
    t = x.cloneDeep({
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
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, x.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), q.addRemoveCB ? d = q.addRemoveCB(this.el, u, !0, !1) : (d = x.createDiv(["grid-stack-item"]), d.appendChild(c), c = x.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const m = l ? t.column : s.w, g = s.h + n.h, y = s.el.style;
      y.transition = "none", this.update(s.el, { w: m, h: g }), setTimeout(() => y.transition = null);
    }
    const h = s.subGrid = q.addGrid(c, t);
    return n?._moving && (h._isTemp = !0), l && (h._autoColumn = !0), i && h.makeWidget(d, u), n && (n._moving ? window.setTimeout(() => x.simulateMouseEvent(n._event, "mouseenter", h.el), 0) : h.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((n) => {
      n.x += this.parentGridNode.x, n.y += this.parentGridNode.y, t.makeWidget(n.el, n);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => x.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, n = q.saveCB, i) {
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
      const a = x.cloneDeep(this.opts);
      a.marginBottom === a.marginTop && a.marginRight === a.marginLeft && a.marginTop === a.marginRight && (a.margin = a.marginTop, delete a.marginTop, delete a.marginRight, delete a.marginBottom, delete a.marginLeft), a.rtl === (this.el.style.direction === "rtl") && (a.rtl = "auto"), this._isAutoCellHeight && (a.cellHeight = "auto"), this._autoColumn && (a.column = "auto");
      const o = a._alwaysShowResizeHandle;
      return delete a._alwaysShowResizeHandle, o !== void 0 ? a.alwaysShowResizeHandle = o : delete a.alwaysShowResizeHandle, x.removeInternalAndSame(a, Ye), a.children = s, a;
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
  load(e, t = q.addRemoveCB || !0) {
    e = x.cloneDeep(e);
    const n = this.getColumn();
    e.forEach((d) => {
      d.w = d.w || d.minW || 1, d.h = d.h || d.minH || 1;
    }), e = x.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((d) => {
      i = Math.max(i, (d.x || 0) + d.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = q.addRemoveCB;
    typeof t == "function" && (q.addRemoveCB = t);
    const a = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, l = o && this.opts.animate;
    l && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      x.find(e, u.id) || (q.addRemoveCB && q.addRemoveCB(this.el, u, !1, !1), a.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const c = [];
    return this.engine.nodes = this.engine.nodes.filter((d) => x.find(e, d.id) ? (c.push(d), !1) : !0), e.forEach((d) => {
      const u = x.find(c, d.id);
      if (u) {
        if (x.shouldSizeToContent(u) && (d.h = u.h), this.engine.nodeBoundFix(d), (d.autoPosition || d.x === void 0 || d.y === void 0) && (d.w = d.w || u.w, d.h = d.h || u.h, this.engine.findEmptyPosition(d)), this.engine.nodes.push(u), x.samePos(u, d) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...d, forceCollide: !0 }), x.copyPos(d, u)), this.update(u.el, d), d.subGridOpts?.children) {
          const h = u.el.querySelector(".grid-stack");
          h && h.gridstack && h.gridstack.load(d.subGridOpts.children);
        }
      } else t && this.addWidget(d);
    }), delete this.engine._loading, this.engine.removedNodes = a, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? q.addRemoveCB = s : delete q.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const i = x.toNumber(t.getAttribute("gs-h")) || 1;
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
    const t = x.parseHeight(e);
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
    const n = q.getElement(e);
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
    return e ? (q.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((a) => i === a.el)), s && (t && q.addRemoveCB && q.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, n), t && i.parentElement && i.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && q.addRemoveCB && q.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
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
    return q.getElements(e).forEach((n) => {
      const i = n?.gridstackNode;
      if (!i)
        return;
      const s = { ...x.copyPos({}, i), ...x.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const a = ["x", "y", "w", "h"];
      let o;
      if (a.some((d) => s[d] !== void 0 && s[d] !== i[d]) && (o = {}, a.forEach((d) => {
        o[d] = s[d] !== void 0 ? s[d] : i[d], delete s[d];
      })), !o && (s.minW || s.minH || s.maxW || s.maxH) && (o = {}), s.content !== void 0) {
        const d = n.querySelector(".grid-stack-item-content");
        d && d.textContent !== s.content && (i.content = s.content, q.renderCB(d, s), i.subGrid?.el && (d.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, c = !1;
      for (const d in s)
        d[0] !== "_" && i[d] !== s[d] && (i[d] = s[d], l = !0, c = c || !this.opts.staticGrid && (d === "noResize" || d === "noMove" || d === "locked"));
      if (x.sanitizeMinMax(i), o) {
        const d = o.w !== void 0 && o.w !== i.w;
        this.moveNode(i, o), d && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(d, i), delete i._orig;
      }
      (o || l) && this._writeAttr(n, i), c && this.prepareDragDrop(i.el), q.updateCB && q.updateCB(i);
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
    if (t.resizeToContentParent && (a = e.querySelector(t.resizeToContentParent)), a || (a = e.querySelector(q.resizeToContentParent)), !a)
      return;
    const o = e.clientHeight - a.clientHeight, l = t.h ? t.h * i - o : a.clientHeight;
    let c;
    if (t.subGrid) {
      c = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const h = t.subGrid.el.getBoundingClientRect(), m = e.getBoundingClientRect();
      c += h.top - m.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const h = a.firstElementChild;
        if (!h) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${q.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
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
    q.resizeToContentCB ? q.resizeToContentCB(e) : this.resizeToContent(e);
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
    return q.getElements(e).forEach((n) => {
      const i = n.gridstackNode;
      if (!x.canBeRotated(i))
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
      const n = x.parseHeight(e);
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
      const s = x.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === i) {
        const a = Math.floor(s.h / n);
        t < a && (t = a);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * n + i), e && x.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, n) {
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(Ye.itemClass, this.opts.itemClass);
    const i = x.shouldSizeToContent(n);
    return i ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), i && this.resizeToContentCheck(!1, n), x.lazyLoad(n) || this.prepareDragDrop(n.el), this;
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
    n.x = x.toNumber(e.getAttribute("gs-x")), n.y = x.toNumber(e.getAttribute("gs-y")), n.w = x.toNumber(e.getAttribute("gs-w")), n.h = x.toNumber(e.getAttribute("gs-h")), n.autoPosition = x.toBool(e.getAttribute("gs-auto-position")), n.noResize = x.toBool(e.getAttribute("gs-no-resize")), n.noMove = x.toBool(e.getAttribute("gs-no-move")), n.locked = x.toBool(e.getAttribute("gs-locked"));
    const i = e.getAttribute("gs-size-to-content");
    i && (i === "true" || i === "false" ? n.sizeToContent = x.toBool(i) : n.sizeToContent = parseInt(i, 10)), n.id = e.getAttribute("gs-id"), n.maxW = x.toNumber(e.getAttribute("gs-max-w")), n.minW = x.toNumber(e.getAttribute("gs-min-w")), n.maxH = x.toNumber(e.getAttribute("gs-max-h")), n.minH = x.toNumber(e.getAttribute("gs-min-h")), t && (n.w === 1 && e.removeAttribute("gs-w"), n.h === 1 && e.removeAttribute("gs-h"), n.maxW && e.removeAttribute("gs-max-w"), n.minW && e.removeAttribute("gs-min-w"), n.maxH && e.removeAttribute("gs-max-h"), n.minH && e.removeAttribute("gs-min-h"));
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
        x.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((n) => x.shouldSizeToContent(n))) {
        const n = [...this.engine.nodes];
        this.batchUpdate(), n.forEach((i) => {
          x.shouldSizeToContent(i) && this.resizeToContentCBCheck(i.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((n) => n.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = x.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return x.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return x.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return q.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return x.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, n = [];
    typeof this.opts.margin == "string" && (n = this.opts.margin.split(" ")), n.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = n[0], this.opts.marginLeft = this.opts.marginRight = n[1]) : n.length === 4 ? (this.opts.marginTop = n[0], this.opts.marginRight = n[1], this.opts.marginBottom = n[2], this.opts.marginLeft = n[3]) : (e = x.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((a) => {
      this.opts[a] === void 0 ? this.opts[a] = t : (e = x.parseHeight(this.opts[a]), this.opts[a] = e.h, delete this.opts.margin);
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
    t?.pause !== void 0 && (Y.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? x.getElements(e, i) : e).forEach((a, o) => {
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
    return this.opts.staticGrid ? this : (q.getElements(e).forEach((n) => {
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
    return this.opts.staticGrid ? this : (q.getElements(e).forEach((n) => {
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && q._itemRemoving(e.el, !1), this.engine.restoreInitial());
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
          o._willFitPos && (x.copyPos(o, o._willFitPos), delete o._willFitPos);
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
      o._temporaryRemoved = !0) : (o.w = l, o.h = c, o._temporaryRemoved = !0), q._itemRemoving(o.el, !1), Fe.on(s, "drag", n), n(i, s, a), !1;
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
      return x.copyPos(o, this._readAttr(this.placeholder)), x.removePositioningStyles(s), c && (o.content || o.subGridOpts || q.addRemoveCB) ? (delete o.el, s = this.addWidget(o)) : (this._prepareElement(s, !0, o), this.el.appendChild(s), this.resizeToContentCheck(!1, o), u && (u.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, d && d.grid ? d : void 0, o), !1;
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
    return e ? (!this.opts.staticGrid && !Fe.isDroppable(e) && Fe.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => q._itemRemoving(n, !0)).on(e, "dropout", (t, n) => q._itemRemoving(n, !1)), this) : this;
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
      const c = (h, m) => {
        this.triggerEvent(h, h.target), o = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, h, m, n, o, l);
      }, d = (h, m) => {
        this._dragOrResize(e, h, m, n, o, l);
      }, u = (h) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete n._moving, delete n._resizing, delete n._event, delete n._lastTried;
        const m = n.w !== n._orig.w, g = h.target;
        if (!(!g.gridstackNode || g.gridstackNode.grid !== this)) {
          if (n.el = g, n._isAboutToRemove) {
            const y = e.gridstackNode.grid;
            y._gsEventHandler[h.type] && y._gsEventHandler[h.type](h, g), y.engine.nodes.push(n), y.removeWidget(e, !0, !0);
          } else
            x.removePositioningStyles(g), n._temporaryRemoved ? (this._writePosAttr(g, n), this.engine.addNode(n)) : this._writePosAttr(g, n), this.triggerEvent(h, g);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), h.type === "resizestop" && (Number.isInteger(n.sizeToContent) && (n.sizeToContent = n.h), this.resizeToContentCheck(m, n));
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
      this.dragTransform = x.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const o = this.placeholder.closest(".grid-stack");
      this.dragTransform = x.getValuesFromTransformedElement(o);
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
    const m = Math.round(a * 0.1), g = Math.round(s * 0.1);
    if (c = Math.min(c, g), d = Math.min(d, g), u = Math.min(u, m), h = Math.min(h, m), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const S = n.position.top - i._prevYPix;
      i._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && x.updateScrollPosition(e, n.position, S);
      const _ = n.position.left + (n.position.left > i._lastUiPosition.left ? -d : c), R = n.position.top + (n.position.top > i._lastUiPosition.top ? -h : u);
      o.x = Math.round(_ / s), o.y = Math.round(R / a);
      const D = this._extraDragRow;
      if (this.engine.collide(i, o)) {
        const O = this.getRow();
        let b = Math.max(0, o.y + i.h - O);
        this.opts.maxRow && O + b > this.opts.maxRow && (b = Math.max(0, this.opts.maxRow - O)), this._extraDragRow = b;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== D && this._updateContainerHeight(), i.x === o.x && i.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (x.updateScrollResize(t, e, a), o.w = Math.round((n.size.width - c) / s), o.h = Math.round((n.size.height - u) / a), i.w === o.w && i.h === o.h) || i._lastTried && i._lastTried.w === o.w && i._lastTried.h === o.h)
        return;
      const S = n.position.left + c, _ = n.position.top + u;
      o.x = Math.round(S / s), o.y = Math.round(_ / a), l = !0;
    }
    i._event = t, i._lastTried = o;
    const y = {
      x: n.position.left + c,
      y: n.position.top + u,
      w: (n.size ? n.size.width : i.w * s) - c - d,
      h: (n.size ? n.size.height : i.h * a) - u - h
    };
    if (this.engine.moveNodeCheck(i, { ...o, cellWidth: s, cellHeight: a, rect: y, resizing: l })) {
      i._lastUiPosition = n.position, this.engine.cacheRects(s, a, u, d, h, c), delete i._skipDown, l && i.subGrid && i.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const S = t.target;
      i._sidebarOrig || this._writePosAttr(S, i), this.triggerEvent(t, S);
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
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = i, this.opts.removable === !0 && q._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return Ed(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
q.renderCB = (r, e) => {
  r && e?.content && (r.textContent = e.content);
};
q.resizeToContentParent = ".grid-stack-item-content";
q.Utils = x;
q.Engine = Dt;
q.GDRev = "12.3.2";
const Xr = /* @__PURE__ */ new WeakMap();
function Nd({ children: r }) {
  const { _gridStack: { value: e, set: t }, options: n } = Ta(), i = K(/* @__PURE__ */ new Map()), s = K(null), a = K(n), o = le((d, u) => {
    if (u.id && u.grid) {
      let h = Xr.get(u.grid);
      h || (h = /* @__PURE__ */ new Map(), Xr.set(u.grid, h)), h.set(u.id, d), i.current.set(u.id, d);
    }
  }, []), l = le(() => {
    if (s.current) {
      q.renderCB = o;
      const d = q.init(a.current, s.current);
      return d && a.current.handle && d.opts && (d.opts.handle = a.current.handle), d;
    }
    return null;
  }, [o]), c = (d, u) => {
    const { children: h, ...m } = d, { children: g, ...y } = u;
    return ya(m, y);
  };
  return si(() => {
    if (!c(n, a.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), Xr.delete(e), a.current = n, t(null);
      } catch (d) {
        console.error("Error destroying gridstack", d);
      }
    else e && (a.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), si(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (d) {
        console.error("Error initializing gridstack", d);
      }
  }, [e, l, t]), f(Oa.Provider, {
    value: U(() => ({
      getWidgetContainer: (d) => {
        if (e) {
          const u = Xr.get(e);
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
const Si = ({ options: r, widgets: e, onChange: t, className: n }) => {
  const i = U(() => JSON.stringify(e.map((l) => ({
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
  }))), [e]), s = U(() => ({
    ...r,
    class: n
  }), [r, i, n]), a = (l, c, d) => {
    let u = d[0], h = 1 / 0;
    for (const m of d) {
      const g = m.w - l, y = m.h - c, S = g * g + y * y;
      S < h && (h = S, u = m);
    }
    return u;
  };
  return f(xd, {
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
    children: f(Nd, {
      children: f(Cd, {})
    })
  });
};
Si.displayName = "F0GridStack";
const Rd = (r, e, t) => f("div", {
  children: r
}), Tn = ({ widgets: r = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: n = Rd, main: i = !1, deps: s }) => {
  const a = le((b, k, E) => f(wi.div, {
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
    children: n(b, k, E)
  }), [n]), o = U(() => ({
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
  }), []), l = (b, k) => {
    if (typeof b.content == "function" && b.deps && k) {
      const E = {};
      return b.deps.forEach((T) => {
        typeof T == "string" && k[T] !== void 0 && (E[T] = k[T]);
      }), b.content(E);
    }
    return typeof b.content == "function" ? null : b.content;
  }, c = (b, k, E) => b.map((T) => {
    const $ = l(T, E), z = {
      id: T.id,
      h: T.h ?? 1,
      w: T.w ?? 1,
      allowedSizes: T.availableSizes,
      noMove: !k,
      noResize: !k,
      locked: T.locked,
      meta: T.meta,
      _originalContent: $,
      content: a($, T.meta, k)
    };
    return T.x !== void 0 && (z.x = T.x), T.y !== void 0 && (z.y = T.y), z;
  }), [d, u] = Q(c(r, e)), h = K(e), m = K(r), g = K(!1), y = K(/* @__PURE__ */ new Map()), S = K(r);
  S.current = r;
  const _ = K(s), R = U(() => {
    const b = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || r.forEach((k) => {
      if (k.deps && k.deps.length > 0) {
        const E = k.deps.map((T) => typeof T == "string" && s[T] !== void 0 ? s[T] : T).filter((T) => T !== null);
        b.set(k.id, E);
      }
    }), b;
  }, [r, s]), D = le((b) => {
    u(b), g.current || t(b.map((k) => {
      const E = S.current.find((T) => T.id === k.id);
      return {
        id: k.id,
        w: k.w ?? 1,
        h: k.h ?? 1,
        allowedSizes: k.allowedSizes,
        meta: k.meta,
        content: typeof E?.content == "function" ? E.content : k._originalContent,
        x: k.x ?? 0,
        y: k.y ?? 0,
        locked: k.locked,
        deps: E?.deps
      };
    })), g.current = !1;
  }, [t]), O = (b, k) => !b && !k ? !1 : !b || !k || b.length !== k.length ? !0 : b.some((E, T) => E !== k[T]);
  return J(() => {
    const b = h.current !== e, k = m.current !== r, E = _.current !== s && (_.current === void 0 || s === void 0 || Object.keys(_.current).length !== Object.keys(s).length || Object.keys(s).some((N) => _.current?.[N] !== s[N])), T = /* @__PURE__ */ new Map();
    r.forEach((N) => {
      if (N.deps && N.deps.length > 0) {
        const C = y.current.get(N.id), A = R.get(N.id);
        T.set(N.id, O(C, A)), A ? y.current.set(N.id, A) : y.current.delete(N.id);
      }
    });
    const $ = new Set(r.map((N) => N.id));
    y.current.forEach((N, C) => {
      $.has(C) || y.current.delete(C);
    });
    const z = Array.from(T.values()).some((N) => N) || E;
    b && !k && !z ? (g.current = !0, u((N) => N.map((C) => {
      const A = r.find((ie) => ie.id === C.id);
      if (!A)
        return C;
      const V = l(A, s);
      return {
        ...C,
        noMove: !e,
        noResize: !e,
        locked: A.locked,
        meta: A.meta,
        _originalContent: V,
        content: a(V, A.meta, e)
      };
    }))) : (k || z) && u((N) => {
      const C = new Map(N.map((A) => [A.id, A]));
      return r.map((A) => {
        const V = C.get(A.id), ie = T.get(A.id) ?? !1;
        let de;
        ie || !V ? de = l(A, s) : de = V._originalContent ?? l(A, s);
        const se = {
          id: A.id,
          h: V?.h ?? A.h ?? 1,
          w: V?.w ?? A.w ?? 1,
          allowedSizes: A.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: A.locked,
          meta: A.meta,
          _originalContent: de,
          content: a(de, A.meta, e)
        }, ve = V?.x ?? A.x, X = V?.y ?? A.y;
        return ve !== void 0 && (se.x = ve), X !== void 0 && (se.y = X), se;
      });
    }), h.current = e, m.current = r, _.current = s;
  }, [r, e, a, R, s]), f(Si, {
    className: re(i && "h-full flex-1 overflow-auto"),
    options: o,
    onChange: D,
    widgets: d
  });
};
Tn.displayName = "GroupGrid";
Tn.__isPageLayoutGroup = !0;
const Ad = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutBlock = !0, t;
}, Td = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutGroup = !0, t;
}, Od = (r, e) => f("svg", {
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
}), La = We(Od), Md = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], Ia = We((r, e) => {
  const t = Md.reduce((n, i) => {
    const { [i]: s, ...a } = n;
    return a;
  }, r);
  return f(_i, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: r.icon == La
  });
});
Ia.displayName = "AIButton";
const br = Vt({
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
}), Ld = {
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
}, Di = We(({ content: r, variant: e, align: t, className: n, as: i, ellipsis: s, noEllipsisTooltip: a, markdown: o, required: l, ...c }, d) => {
  const u = i ?? Ld[e ?? "body"], h = l ? f("span", {
    className: "text-f1-foreground-critical",
    "aria-hidden": "true",
    children: " *"
  }) : null;
  if (s !== void 0) {
    const m = typeof s == "number" ? s : 1;
    return h ? qr(u, {
      ...c,
      className: re(br({
        variant: e,
        align: t
      }), n, "inline-flex gap-0.5"),
      ref: d
    }, f(Qi, {
      lines: m,
      noTooltip: a,
      tag: "span",
      className: "min-w-0",
      markdown: o,
      children: r
    }), h) : f(Qi, {
      ref: d,
      lines: m,
      noTooltip: a,
      tag: u,
      className: re(br({
        variant: e,
        align: t
      }), n),
      markdown: o,
      ...c,
      children: r
    });
  }
  if (o) {
    const m = El(r);
    return h ? qr(u, {
      ...c,
      className: re(br({
        variant: e,
        align: t
      }), n),
      ref: d
    }, f("span", {
      dangerouslySetInnerHTML: {
        __html: m
      }
    }), h) : qr(u, {
      ...c,
      className: re(br({
        variant: e,
        align: t
      }), n),
      ref: d,
      dangerouslySetInnerHTML: {
        __html: m
      }
    });
  }
  return qr(u, {
    ...c,
    className: re(br({
      variant: e,
      align: t
    }), n),
    ref: d
  }, r, h);
});
Di.displayName = "Text";
const Pa = We((r, e) => f(Di, {
  ref: e,
  markdown: r.markdown ?? !0,
  ...r
}));
Pa.displayName = "F0Text";
const Zp = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], za = ({ title: r, draggable: e = !1, onDragStart: t, onDragEnd: n, isDragging: i = !1, AIButton: s, actions: a, children: o, selected: l = !1 }) => {
  const [c, d] = Q(!1), [u, h] = Q(!1), m = ur(), g = (S) => {
    d(S);
  }, y = u || c;
  return J(() => {
    if (!i || !n) return;
    const S = () => {
      n();
    };
    return document.addEventListener("mouseup", S), () => {
      document.removeEventListener("mouseup", S);
    };
  }, [i, n]), j("div", {
    className: re("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && c ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [j("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [j("div", {
        className: re("flex min-w-0 flex-1 items-center", !e && "pl-4", !a && !s && "pr-4"),
        children: [e && f("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: f(Rn, {
            icon: kl,
            size: "xs"
          })
        }), f("div", {
          className: re("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: f(Pa, {
            variant: "label",
            content: r,
            ellipsis: !0
          })
        })]
      }), f(Sl, {
        children: (s || a) && y && j(wi.div, {
          className: re("flex shrink-0 items-center gap-0.5 pr-2", !a && "pr-4"),
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
            children: f(Ia, {
              size: "sm",
              label: m.ai.ask,
              onClick: s,
              icon: La
            })
          }), a && f(Dl, {
            items: a,
            open: c,
            onOpenChange: g,
            align: "end",
            children: f(_i, {
              icon: Nl,
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
}, Id = () => j("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [f("div", {
    className: "flex h-12 w-full items-center px-4",
    children: f(yt, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), j("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [f(yt, {
      className: "h-1/2 w-full rounded-sm"
    }), f(yt, {
      className: "h-1/3 w-full rounded-sm"
    }), f(yt, {
      className: "h-1/5 w-full rounded-sm"
    }), f(yt, {
      className: "h-1/3 w-full rounded-sm"
    }), f(yt, {
      className: "h-full w-full rounded-sm"
    }), f(yt, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
za.displayName = "F0Widget";
const Pd = ra(za, Id), zd = ({ children: r, title: e, draggable: t = !1, actions: n, aiButton: i }) => f(Pd, {
  title: e,
  draggable: t,
  actions: n,
  AIButton: i,
  children: r
}), Fa = ({ widgets: r, editMode: e = !1, onChange: t = () => {
}, deps: n, ...i }) => f(Tn, {
  widgets: r,
  editMode: e,
  onChange: t,
  deps: n,
  ...i,
  WidgetWrapper: (s, a, o) => f(zd, {
    title: a?.title ?? "",
    draggable: o,
    actions: a?.actions,
    aiButton: a?.aiButton,
    children: s
  })
});
Fa.displayName = "Dashboard";
const Fd = Td("Dashboard", Fa), qp = st("Dashboard", Fd), Bd = Vt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Hd = (r) => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), Vd = (r) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(r) ? r.every(e) ? [{
    items: r
  }] : r : [r];
}, On = We(({ children: r, variant: e = "default", className: t, draggable: n = !1, onDragStart: i, onDragEnd: s, onDrop: a, dragId: o, primaryAction: l, ...c }, d) => {
  const u = U(() => Vd(c.actions || []), [c.actions]), h = U(() => u.flatMap((g) => g.items), [u]), m = U(() => h.length > 0 || !!l, [h, l]);
  return j("div", {
    ref: d,
    className: re(Bd({
      variant: e
    }), "relative", t),
    draggable: n,
    onDragStart: i,
    onDragEnd: s,
    onDrop: a,
    "data-drag-id": o,
    ...c,
    children: [m && j("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, h.length > 0 && f(yc, {
        items: Hd(u)
      })]
    }), f("div", {
      children: r
    })]
  });
});
On.displayName = "Block";
On.__isPageLayoutBlock = !0;
const jd = ({ title: r = "", description: e, titleLevel: t = "h2", children: n, className: i, ...s }) => {
  if (!r) return null;
  const a = t;
  return j(On, {
    ...s,
    className: re("space-y-4", i),
    children: [j("div", {
      className: "space-y-2",
      children: [f(a, {
        className: re("font-semibold text-f1-foreground", {
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
}, $d = Ad("BlockContent", jd), Wd = (r) => !pa(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutBlock" in r.type, Gd = (r) => !pa(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutGroup" in r.type, Ba = (r, e, t) => {
  const n = nn.toArray(e);
  for (const i of n)
    t.includes("block") && Wd(i) || t.includes("group") && Gd(i) || console.warn(
      `${r}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, Ni = We(({ children: r, onSort: e, ...t }, n) => {
  Ba("GroupLinear", r, ["block"]);
  const [i, s] = Q(nn.toArray(r));
  return J(() => {
    s(nn.toArray(r));
  }, [r]), J(() => {
    e?.(i);
  }, [i, e]), f("div", {
    ref: n,
    ...t,
    children: i.map((a, o) => f(uc, {
      children: a
    }, o))
  });
});
Ni.displayName = "GroupLinear";
Ni.__isPageLayoutGroup = !0;
function Ud() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return U(
    () => (n) => {
      e.forEach((i) => i(n));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const Mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function hr(r) {
  const e = Object.prototype.toString.call(r);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Ri(r) {
  return "nodeType" in r;
}
function He(r) {
  var e, t;
  return r ? hr(r) ? r : Ri(r) && (e = (t = r.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Ai(r) {
  const {
    Document: e
  } = He(r);
  return r instanceof e;
}
function Hr(r) {
  return hr(r) ? !1 : r instanceof He(r).HTMLElement;
}
function Ha(r) {
  return r instanceof He(r).SVGElement;
}
function fr(r) {
  return r ? hr(r) ? r.document : Ri(r) ? Ai(r) ? r : Hr(r) || Ha(r) ? r.ownerDocument : document : document : document;
}
const ft = Mn ? si : J;
function Ln(r) {
  const e = K(r);
  return ft(() => {
    e.current = r;
  }), le(function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function Zd() {
  const r = K(null), e = le((n, i) => {
    r.current = setInterval(n, i);
  }, []), t = le(() => {
    r.current !== null && (clearInterval(r.current), r.current = null);
  }, []);
  return [e, t];
}
function Mr(r, e) {
  e === void 0 && (e = [r]);
  const t = K(r);
  return ft(() => {
    t.current !== r && (t.current = r);
  }, e), t;
}
function Vr(r, e) {
  const t = K();
  return U(
    () => {
      const n = r(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function dn(r) {
  const e = Ln(r), t = K(null), n = le(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function un(r) {
  const e = K();
  return J(() => {
    e.current = r;
  }, [r]), e.current;
}
let qn = {};
function jr(r, e) {
  return U(() => {
    if (e)
      return e;
    const t = qn[r] == null ? 0 : qn[r] + 1;
    return qn[r] = t, r + "-" + t;
  }, [r, e]);
}
function Va(r) {
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
const ir = /* @__PURE__ */ Va(1), Lr = /* @__PURE__ */ Va(-1);
function qd(r) {
  return "clientX" in r && "clientY" in r;
}
function In(r) {
  if (!r)
    return !1;
  const {
    KeyboardEvent: e
  } = He(r.target);
  return e && r instanceof e;
}
function Kd(r) {
  if (!r)
    return !1;
  const {
    TouchEvent: e
  } = He(r.target);
  return e && r instanceof e;
}
function hn(r) {
  if (Kd(r)) {
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
  return qd(r) ? {
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
}), ls = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Yd(r) {
  return r.matches(ls) ? r : r.querySelector(ls);
}
const Xd = {
  display: "none"
};
function Jd(r) {
  let {
    id: e,
    value: t
  } = r;
  return B.createElement("div", {
    id: e,
    style: Xd
  }, t);
}
function Qd(r) {
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
function eu() {
  const [r, e] = Q("");
  return {
    announce: le((n) => {
      n != null && e(n);
    }, []),
    announcement: r
  };
}
const ja = /* @__PURE__ */ Ct(null);
function tu(r) {
  const e = ht(ja);
  J(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(r);
  }, [r, e]);
}
function ru() {
  const [r] = Q(() => /* @__PURE__ */ new Set()), e = le((n) => (r.add(n), () => r.delete(n)), [r]);
  return [le((n) => {
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
const nu = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, iu = {
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
function su(r) {
  let {
    announcements: e = iu,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = nu
  } = r;
  const {
    announce: s,
    announcement: a
  } = eu(), o = jr("DndLiveRegion"), [l, c] = Q(!1);
  if (J(() => {
    c(!0);
  }, []), tu(U(() => ({
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
        over: m
      } = u;
      e.onDragMove && s(e.onDragMove({
        active: h,
        over: m
      }));
    },
    onDragOver(u) {
      let {
        active: h,
        over: m
      } = u;
      s(e.onDragOver({
        active: h,
        over: m
      }));
    },
    onDragEnd(u) {
      let {
        active: h,
        over: m
      } = u;
      s(e.onDragEnd({
        active: h,
        over: m
      }));
    },
    onDragCancel(u) {
      let {
        active: h,
        over: m
      } = u;
      s(e.onDragCancel({
        active: h,
        over: m
      }));
    }
  }), [s, e])), !l)
    return null;
  const d = B.createElement(B.Fragment, null, B.createElement(Jd, {
    id: n,
    value: i.draggable
  }), B.createElement(Qd, {
    id: o,
    announcement: a
  }));
  return t ? ga(d, t) : d;
}
var De;
(function(r) {
  r.DragStart = "dragStart", r.DragMove = "dragMove", r.DragEnd = "dragEnd", r.DragCancel = "dragCancel", r.DragOver = "dragOver", r.RegisterDroppable = "registerDroppable", r.SetDroppableDisabled = "setDroppableDisabled", r.UnregisterDroppable = "unregisterDroppable";
})(De || (De = {}));
function fn() {
}
function cs(r, e) {
  return U(
    () => ({
      sensor: r,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, e]
  );
}
function au() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return U(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const mt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function ou(r, e) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function lu(r, e) {
  const t = hn(r);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function cu(r, e) {
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
function du(r, e) {
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
function ds(r) {
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
function $a(r, e) {
  if (!r || r.length === 0)
    return null;
  const [t] = r;
  return t[e];
}
const uu = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = ds(e), s = [];
  for (const a of n) {
    const {
      id: o
    } = a, l = t.get(o);
    if (l) {
      const c = ds(l), d = i.reduce((h, m, g) => h + ou(c[g], m), 0), u = Number((d / 4).toFixed(4));
      s.push({
        id: o,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(cu);
};
function hu(r, e) {
  const t = Math.max(e.top, r.top), n = Math.max(e.left, r.left), i = Math.min(e.left + e.width, r.left + r.width), s = Math.min(e.top + e.height, r.top + r.height), a = i - n, o = s - t;
  if (n < i && t < s) {
    const l = e.width * e.height, c = r.width * r.height, d = a * o, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const fu = (r) => {
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
      const l = hu(o, e);
      l > 0 && i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(du);
};
function mu(r, e, t) {
  return {
    ...r,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Wa(r, e) {
  return r && e ? {
    x: r.left - e.left,
    y: r.top - e.top
  } : mt;
}
function pu(r) {
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
const gu = /* @__PURE__ */ pu(1);
function Ga(r) {
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
function vu(r, e, t) {
  const n = Ga(e);
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
const yu = {
  ignoreTransform: !1
};
function mr(r, e) {
  e === void 0 && (e = yu);
  let t = r.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = He(r).getComputedStyle(r);
    c && (t = vu(t, c, d));
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
function us(r) {
  return mr(r, {
    ignoreTransform: !0
  });
}
function bu(r) {
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
function xu(r, e) {
  return e === void 0 && (e = He(r).getComputedStyle(r)), e.position === "fixed";
}
function wu(r, e) {
  e === void 0 && (e = He(r).getComputedStyle(r));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function Pn(r, e) {
  const t = [];
  function n(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Ai(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!Hr(i) || Ha(i) || t.includes(i))
      return t;
    const s = He(r).getComputedStyle(i);
    return i !== r && wu(i, s) && t.push(i), xu(i, s) ? t : n(i.parentNode);
  }
  return r ? n(r) : t;
}
function Ua(r) {
  const [e] = Pn(r, 1);
  return e ?? null;
}
function Kn(r) {
  return !Mn || !r ? null : hr(r) ? r : Ri(r) ? Ai(r) || r === fr(r).scrollingElement ? window : Hr(r) ? r : null : null;
}
function Za(r) {
  return hr(r) ? r.scrollX : r.scrollLeft;
}
function qa(r) {
  return hr(r) ? r.scrollY : r.scrollTop;
}
function oi(r) {
  return {
    x: Za(r),
    y: qa(r)
  };
}
var Re;
(function(r) {
  r[r.Forward = 1] = "Forward", r[r.Backward = -1] = "Backward";
})(Re || (Re = {}));
function Ka(r) {
  return !Mn || !r ? !1 : r === document.scrollingElement;
}
function Ya(r) {
  const e = {
    x: 0,
    y: 0
  }, t = Ka(r) ? {
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
const _u = {
  x: 0.2,
  y: 0.2
};
function Cu(r, e, t, n, i) {
  let {
    top: s,
    left: a,
    right: o,
    bottom: l
  } = t;
  n === void 0 && (n = 10), i === void 0 && (i = _u);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: h
  } = Ya(r), m = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, y = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !c && s <= e.top + y.height ? (m.y = Re.Backward, g.y = n * Math.abs((e.top + y.height - s) / y.height)) : !d && l >= e.bottom - y.height && (m.y = Re.Forward, g.y = n * Math.abs((e.bottom - y.height - l) / y.height)), !h && o >= e.right - y.width ? (m.x = Re.Forward, g.x = n * Math.abs((e.right - y.width - o) / y.width)) : !u && a <= e.left + y.width && (m.x = Re.Backward, g.x = n * Math.abs((e.left + y.width - a) / y.width)), {
    direction: m,
    speed: g
  };
}
function Eu(r) {
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
function Xa(r) {
  return r.reduce((e, t) => ir(e, oi(t)), mt);
}
function ku(r) {
  return r.reduce((e, t) => e + Za(t), 0);
}
function Su(r) {
  return r.reduce((e, t) => e + qa(t), 0);
}
function Ja(r, e) {
  if (e === void 0 && (e = mr), !r)
    return;
  const {
    top: t,
    left: n,
    bottom: i,
    right: s
  } = e(r);
  Ua(r) && (i <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && r.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Du = [["x", ["left", "right"], ku], ["y", ["top", "bottom"], Su]];
class Ti {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = Pn(t), i = Xa(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, a, o] of Du)
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
class Er {
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
function Nu(r) {
  const {
    EventTarget: e
  } = He(r);
  return r instanceof e ? r : fr(r);
}
function Yn(r, e) {
  const t = Math.abs(r.x), n = Math.abs(r.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var nt;
(function(r) {
  r.Click = "click", r.DragStart = "dragstart", r.Keydown = "keydown", r.ContextMenu = "contextmenu", r.Resize = "resize", r.SelectionChange = "selectionchange", r.VisibilityChange = "visibilitychange";
})(nt || (nt = {}));
function hs(r) {
  r.preventDefault();
}
function Ru(r) {
  r.stopPropagation();
}
var oe;
(function(r) {
  r.Space = "Space", r.Down = "ArrowDown", r.Right = "ArrowRight", r.Left = "ArrowLeft", r.Up = "ArrowUp", r.Esc = "Escape", r.Enter = "Enter", r.Tab = "Tab";
})(oe || (oe = {}));
const Qa = {
  start: [oe.Space, oe.Enter],
  cancel: [oe.Esc],
  end: [oe.Space, oe.Enter, oe.Tab]
}, Au = (r, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (r.code) {
    case oe.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case oe.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case oe.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case oe.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Oi {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new Er(fr(t)), this.windowListeners = new Er(He(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(nt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && Ja(n), t(mt);
  }
  handleKeyDown(e) {
    if (In(e)) {
      const {
        active: t,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: s = Qa,
        coordinateGetter: a = Au,
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
      } : mt;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = a(e, {
        active: t,
        context: n.current,
        currentCoordinates: d
      });
      if (u) {
        const h = Lr(u, d), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = n.current;
        for (const y of g) {
          const S = e.code, {
            isTop: _,
            isRight: R,
            isLeft: D,
            isBottom: O,
            maxScroll: b,
            minScroll: k
          } = Ya(y), E = Eu(y), T = {
            x: Math.min(S === oe.Right ? E.right - E.width / 2 : E.right, Math.max(S === oe.Right ? E.left : E.left + E.width / 2, u.x)),
            y: Math.min(S === oe.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(S === oe.Down ? E.top : E.top + E.height / 2, u.y))
          }, $ = S === oe.Right && !R || S === oe.Left && !D, z = S === oe.Down && !O || S === oe.Up && !_;
          if ($ && T.x !== u.x) {
            const N = y.scrollLeft + h.x, C = S === oe.Right && N <= b.x || S === oe.Left && N >= k.x;
            if (C && !h.y) {
              y.scrollTo({
                left: N,
                behavior: o
              });
              return;
            }
            C ? m.x = y.scrollLeft - N : m.x = S === oe.Right ? y.scrollLeft - b.x : y.scrollLeft - k.x, m.x && y.scrollBy({
              left: -m.x,
              behavior: o
            });
            break;
          } else if (z && T.y !== u.y) {
            const N = y.scrollTop + h.y, C = S === oe.Down && N <= b.y || S === oe.Up && N >= k.y;
            if (C && !h.x) {
              y.scrollTo({
                top: N,
                behavior: o
              });
              return;
            }
            C ? m.y = y.scrollTop - N : m.y = S === oe.Down ? y.scrollTop - b.y : y.scrollTop - k.y, m.y && y.scrollBy({
              top: -m.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, ir(Lr(u, this.referenceCoordinates), m));
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
Oi.activators = [{
  eventName: "onKeyDown",
  handler: (r, e, t) => {
    let {
      keyboardCodes: n = Qa,
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
function fs(r) {
  return !!(r && "distance" in r);
}
function ms(r) {
  return !!(r && "delay" in r);
}
class Mi {
  constructor(e, t, n) {
    var i;
    n === void 0 && (n = Nu(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: a
    } = s;
    this.props = e, this.events = t, this.document = fr(a), this.documentListeners = new Er(this.document), this.listeners = new Er(n), this.windowListeners = new Er(He(a)), this.initialCoordinates = (i = hn(s)) != null ? i : mt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.DragStart, hs), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), this.windowListeners.add(nt.ContextMenu, hs), this.documentListeners.add(nt.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (ms(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (fs(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(nt.Click, Ru, {
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
    const l = (t = hn(e)) != null ? t : mt, c = Lr(i, l);
    if (!n && o) {
      if (fs(o)) {
        if (o.tolerance != null && Yn(c, o.tolerance))
          return this.handleCancel();
        if (Yn(c, o.distance))
          return this.handleStart();
      }
      if (ms(o) && Yn(c, o.tolerance))
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
    e.code === oe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Tu = {
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
class Li extends Mi {
  constructor(e) {
    const {
      event: t
    } = e, n = fr(t.target);
    super(e, Tu, n);
  }
}
Li.activators = [{
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
const Ou = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var li;
(function(r) {
  r[r.RightClick = 2] = "RightClick";
})(li || (li = {}));
class Mu extends Mi {
  constructor(e) {
    super(e, Ou, fr(e.event.target));
  }
}
Mu.activators = [{
  eventName: "onMouseDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    return t.button === li.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Xn = {
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
class Lu extends Mi {
  constructor(e) {
    super(e, Xn);
  }
  static setup() {
    return window.addEventListener(Xn.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Xn.move.name, e);
    };
    function e() {
    }
  }
}
Lu.activators = [{
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
var kr;
(function(r) {
  r[r.Pointer = 0] = "Pointer", r[r.DraggableRect = 1] = "DraggableRect";
})(kr || (kr = {}));
var mn;
(function(r) {
  r[r.TreeOrder = 0] = "TreeOrder", r[r.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(mn || (mn = {}));
function Iu(r) {
  let {
    acceleration: e,
    activator: t = kr.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: s,
    interval: a = 5,
    order: o = mn.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: h
  } = r;
  const m = zu({
    delta: u,
    disabled: !s
  }), [g, y] = Zd(), S = K({
    x: 0,
    y: 0
  }), _ = K({
    x: 0,
    y: 0
  }), R = U(() => {
    switch (t) {
      case kr.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case kr.DraggableRect:
        return i;
    }
  }, [t, i, l]), D = K(null), O = le(() => {
    const k = D.current;
    if (!k)
      return;
    const E = S.current.x * _.current.x, T = S.current.y * _.current.y;
    k.scrollBy(E, T);
  }, []), b = U(() => o === mn.TreeOrder ? [...c].reverse() : c, [o, c]);
  J(
    () => {
      if (!s || !c.length || !R) {
        y();
        return;
      }
      for (const k of b) {
        if (n?.(k) === !1)
          continue;
        const E = c.indexOf(k), T = d[E];
        if (!T)
          continue;
        const {
          direction: $,
          speed: z
        } = Cu(k, T, R, e, h);
        for (const N of ["x", "y"])
          m[N][$[N]] || (z[N] = 0, $[N] = 0);
        if (z.x > 0 || z.y > 0) {
          y(), D.current = k, g(O, a), S.current = z, _.current = $;
          return;
        }
      }
      S.current = {
        x: 0,
        y: 0
      }, _.current = {
        x: 0,
        y: 0
      }, y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      O,
      n,
      y,
      s,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(R),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      g,
      c,
      b,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Pu = {
  x: {
    [Re.Backward]: !1,
    [Re.Forward]: !1
  },
  y: {
    [Re.Backward]: !1,
    [Re.Forward]: !1
  }
};
function zu(r) {
  let {
    delta: e,
    disabled: t
  } = r;
  const n = un(e);
  return Vr((i) => {
    if (t || !n || !i)
      return Pu;
    const s = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [Re.Backward]: i.x[Re.Backward] || s.x === -1,
        [Re.Forward]: i.x[Re.Forward] || s.x === 1
      },
      y: {
        [Re.Backward]: i.y[Re.Backward] || s.y === -1,
        [Re.Forward]: i.y[Re.Forward] || s.y === 1
      }
    };
  }, [t, e, n]);
}
function Fu(r, e) {
  const t = e != null ? r.get(e) : void 0, n = t ? t.node.current : null;
  return Vr((i) => {
    var s;
    return e == null ? null : (s = n ?? i) != null ? s : null;
  }, [n, e]);
}
function Bu(r, e) {
  return U(() => r.reduce((t, n) => {
    const {
      sensor: i
    } = n, s = i.activators.map((a) => ({
      eventName: a.eventName,
      handler: e(a.handler, n)
    }));
    return [...t, ...s];
  }, []), [r, e]);
}
var Ir;
(function(r) {
  r[r.Always = 0] = "Always", r[r.BeforeDragging = 1] = "BeforeDragging", r[r.WhileDragging = 2] = "WhileDragging";
})(Ir || (Ir = {}));
var ci;
(function(r) {
  r.Optimized = "optimized";
})(ci || (ci = {}));
const ps = /* @__PURE__ */ new Map();
function Hu(r, e) {
  let {
    dragging: t,
    dependencies: n,
    config: i
  } = e;
  const [s, a] = Q(null), {
    frequency: o,
    measure: l,
    strategy: c
  } = i, d = K(r), u = S(), h = Mr(u), m = le(function(_) {
    _ === void 0 && (_ = []), !h.current && a((R) => R === null ? _ : R.concat(_.filter((D) => !R.includes(D))));
  }, [h]), g = K(null), y = Vr((_) => {
    if (u && !t)
      return ps;
    if (!_ || _ === ps || d.current !== r || s != null) {
      const R = /* @__PURE__ */ new Map();
      for (let D of r) {
        if (!D)
          continue;
        if (s && s.length > 0 && !s.includes(D.id) && D.rect.current) {
          R.set(D.id, D.rect.current);
          continue;
        }
        const O = D.node.current, b = O ? new Ti(l(O), O) : null;
        D.rect.current = b, b && R.set(D.id, b);
      }
      return R;
    }
    return _;
  }, [r, s, t, u, l]);
  return J(() => {
    d.current = r;
  }, [r]), J(
    () => {
      u || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), J(
    () => {
      s && s.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), J(
    () => {
      u || typeof o != "number" || g.current !== null || (g.current = setTimeout(() => {
        m(), g.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, u, m, ...n]
  ), {
    droppableRects: y,
    measureDroppableContainers: m,
    measuringScheduled: s != null
  };
  function S() {
    switch (c) {
      case Ir.Always:
        return !1;
      case Ir.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Ii(r, e) {
  return Vr((t) => r ? t || (typeof e == "function" ? e(r) : r) : null, [e, r]);
}
function Vu(r, e) {
  return Ii(r, e);
}
function ju(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Ln(e), i = U(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return J(() => () => i?.disconnect(), [i]), i;
}
function zn(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Ln(e), i = U(
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
  return J(() => () => i?.disconnect(), [i]), i;
}
function $u(r) {
  return new Ti(mr(r), r);
}
function gs(r, e, t) {
  e === void 0 && (e = $u);
  const [n, i] = Q(null);
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
  const a = ju({
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
  }), o = zn({
    callback: s
  });
  return ft(() => {
    s(), r ? (o?.observe(r), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [r]), n;
}
function Wu(r) {
  const e = Ii(r);
  return Wa(r, e);
}
const vs = [];
function Gu(r) {
  const e = K(r), t = Vr((n) => r ? n && n !== vs && r && e.current && r.parentNode === e.current.parentNode ? n : Pn(r) : vs, [r]);
  return J(() => {
    e.current = r;
  }, [r]), t;
}
function Uu(r) {
  const [e, t] = Q(null), n = K(r), i = le((s) => {
    const a = Kn(s.target);
    a && t((o) => o ? (o.set(a, oi(a)), new Map(o)) : null);
  }, []);
  return J(() => {
    const s = n.current;
    if (r !== s) {
      a(s);
      const o = r.map((l) => {
        const c = Kn(l);
        return c ? (c.addEventListener("scroll", i, {
          passive: !0
        }), [c, oi(c)]) : null;
      }).filter((l) => l != null);
      t(o.length ? new Map(o) : null), n.current = r;
    }
    return () => {
      a(r), a(s);
    };
    function a(o) {
      o.forEach((l) => {
        const c = Kn(l);
        c?.removeEventListener("scroll", i);
      });
    }
  }, [i, r]), U(() => r.length ? e ? Array.from(e.values()).reduce((s, a) => ir(s, a), mt) : Xa(r) : mt, [r, e]);
}
function ys(r, e) {
  e === void 0 && (e = []);
  const t = K(null);
  return J(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), J(() => {
    const n = r !== mt;
    n && !t.current && (t.current = r), !n && t.current && (t.current = null);
  }, [r]), t.current ? Lr(r, t.current) : mt;
}
function Zu(r) {
  J(
    () => {
      if (!Mn)
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
function qu(r, e) {
  return U(() => r.reduce((t, n) => {
    let {
      eventName: i,
      handler: s
    } = n;
    return t[i] = (a) => {
      s(a, e);
    }, t;
  }, {}), [r, e]);
}
function eo(r) {
  return U(() => r ? bu(r) : null, [r]);
}
const bs = [];
function Ku(r, e) {
  e === void 0 && (e = mr);
  const [t] = r, n = eo(t ? He(t) : null), [i, s] = Q(bs);
  function a() {
    s(() => r.length ? r.map((l) => Ka(l) ? n : new Ti(e(l), l)) : bs);
  }
  const o = zn({
    callback: a
  });
  return ft(() => {
    o?.disconnect(), a(), r.forEach((l) => o?.observe(l));
  }, [r]), i;
}
function to(r) {
  if (!r)
    return null;
  if (r.children.length > 1)
    return r;
  const e = r.children[0];
  return Hr(e) ? e : r;
}
function Yu(r) {
  let {
    measure: e
  } = r;
  const [t, n] = Q(null), i = le((c) => {
    for (const {
      target: d
    } of c)
      if (Hr(d)) {
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
  }, [e]), s = zn({
    callback: i
  }), a = le((c) => {
    const d = to(c);
    s?.disconnect(), d && s?.observe(d), n(d ? e(d) : null);
  }, [e, s]), [o, l] = dn(a);
  return U(() => ({
    nodeRef: o,
    rect: t,
    setRef: l
  }), [t, o, l]);
}
const Xu = [{
  sensor: Li,
  options: {}
}, {
  sensor: Oi,
  options: {}
}], Ju = {
  current: {}
}, en = {
  draggable: {
    measure: us
  },
  droppable: {
    measure: us,
    strategy: Ir.WhileDragging,
    frequency: ci.Optimized
  },
  dragOverlay: {
    measure: mr
  }
};
class Sr extends Map {
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
const Qu = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Sr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: fn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: en,
  measureDroppableContainers: fn,
  windowRect: null,
  measuringScheduled: !1
}, ro = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: fn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: fn
}, $r = /* @__PURE__ */ Ct(ro), no = /* @__PURE__ */ Ct(Qu);
function eh() {
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
      containers: new Sr()
    }
  };
}
function th(r, e) {
  switch (e.type) {
    case De.DragStart:
      return {
        ...r,
        draggable: {
          ...r.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case De.DragMove:
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
    case De.DragEnd:
    case De.DragCancel:
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
    case De.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: n
      } = t, i = new Sr(r.droppable.containers);
      return i.set(n, t), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: i
        }
      };
    }
    case De.SetDroppableDisabled: {
      const {
        id: t,
        key: n,
        disabled: i
      } = e, s = r.droppable.containers.get(t);
      if (!s || n !== s.key)
        return r;
      const a = new Sr(r.droppable.containers);
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
    case De.UnregisterDroppable: {
      const {
        id: t,
        key: n
      } = e, i = r.droppable.containers.get(t);
      if (!i || n !== i.key)
        return r;
      const s = new Sr(r.droppable.containers);
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
function rh(r) {
  let {
    disabled: e
  } = r;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: i
  } = ht($r), s = un(n), a = un(t?.id);
  return J(() => {
    if (!e && !n && s && a != null) {
      if (!In(s) || document.activeElement === s.target)
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
          const u = Yd(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, i, a, s]), null;
}
function io(r, e) {
  let {
    transform: t,
    ...n
  } = e;
  return r != null && r.length ? r.reduce((i, s) => s({
    transform: i,
    ...n
  }), t) : t;
}
function nh(r) {
  return U(
    () => ({
      draggable: {
        ...en.draggable,
        ...r?.draggable
      },
      droppable: {
        ...en.droppable,
        ...r?.droppable
      },
      dragOverlay: {
        ...en.dragOverlay,
        ...r?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r?.draggable, r?.droppable, r?.dragOverlay]
  );
}
function ih(r) {
  let {
    activeNode: e,
    measure: t,
    initialRect: n,
    config: i = !0
  } = r;
  const s = K(!1), {
    x: a,
    y: o
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  ft(() => {
    if (!a && !o || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !n)
      return;
    const c = e?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = t(c), u = Wa(d, n);
    if (a || (u.x = 0), o || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = Ua(c);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, o, n, t]);
}
const Fn = /* @__PURE__ */ Ct({
  ...mt,
  scaleX: 1,
  scaleY: 1
});
var Mt;
(function(r) {
  r[r.Uninitialized = 0] = "Uninitialized", r[r.Initializing = 1] = "Initializing", r[r.Initialized = 2] = "Initialized";
})(Mt || (Mt = {}));
const sh = /* @__PURE__ */ hc(function(e) {
  var t, n, i, s;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: c,
    sensors: d = Xu,
    collisionDetection: u = fu,
    measuring: h,
    modifiers: m,
    ...g
  } = e;
  const y = fc(th, void 0, eh), [S, _] = y, [R, D] = ru(), [O, b] = Q(Mt.Uninitialized), k = O === Mt.Initialized, {
    draggable: {
      active: E,
      nodes: T,
      translate: $
    },
    droppable: {
      containers: z
    }
  } = S, N = E != null ? T.get(E) : null, C = K({
    initial: null,
    translated: null
  }), A = U(() => {
    var Ie;
    return E != null ? {
      id: E,
      // It's possible for the active node to unmount while dragging
      data: (Ie = N?.data) != null ? Ie : Ju,
      rect: C
    } : null;
  }, [E, N]), V = K(null), [ie, de] = Q(null), [se, ve] = Q(null), X = Mr(g, Object.values(g)), xe = jr("DndDescribedBy", a), Ge = U(() => z.getEnabled(), [z]), ye = nh(h), {
    droppableRects: Pe,
    measureDroppableContainers: Ne,
    measuringScheduled: Te
  } = Hu(Ge, {
    dragging: k,
    dependencies: [$.x, $.y],
    config: ye.droppable
  }), Ee = Fu(T, E), Ve = U(() => se ? hn(se) : null, [se]), me = Cl(), we = Vu(Ee, ye.draggable.measure);
  ih({
    activeNode: E != null ? T.get(E) : null,
    config: me.layoutShiftCompensation,
    initialRect: we,
    measure: ye.draggable.measure
  });
  const ce = gs(Ee, ye.draggable.measure, we), Qe = gs(Ee ? Ee.parentElement : null), Oe = K({
    activatorEvent: null,
    active: null,
    activeNode: Ee,
    collisionRect: null,
    collisions: null,
    droppableRects: Pe,
    draggableNodes: T,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: z,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Me = z.getNodeFor((t = Oe.current.over) == null ? void 0 : t.id), Le = Yu({
    measure: ye.dragOverlay.measure
  }), Ue = (n = Le.nodeRef.current) != null ? n : Ee, ct = k ? (i = Le.rect) != null ? i : ce : null, Et = !!(Le.nodeRef.current && Le.rect), p = Wu(Et ? null : ce), v = eo(Ue ? He(Ue) : null), w = Gu(k ? Me ?? Ee : null), L = Ku(w), I = io(m, {
    transform: {
      x: $.x - p.x,
      y: $.y - p.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: se,
    active: A,
    activeNodeRect: ce,
    containerNodeRect: Qe,
    draggingNodeRect: ct,
    over: Oe.current.over,
    overlayNodeRect: Le.rect,
    scrollableAncestors: w,
    scrollableAncestorRects: L,
    windowRect: v
  }), M = Ve ? ir(Ve, $) : null, W = Uu(w), ee = ys(W), be = ys(W, [ce]), pe = ir(I, ee), ze = ct ? gu(ct, I) : null, Wt = A && ze ? u({
    active: A,
    collisionRect: ze,
    droppableRects: Pe,
    droppableContainers: Ge,
    pointerCoordinates: M
  }) : null, Kt = $a(Wt, "id"), [et, Ur] = Q(null), Zr = Et ? I : ir(I, be), Wn = mu(Zr, (s = et?.rect) != null ? s : null, ce), Yt = K(null), Xi = le(
    (Ie, Ze) => {
      let {
        sensor: qe,
        options: Rt
      } = Ze;
      if (V.current == null)
        return;
      const tt = T.get(V.current);
      if (!tt)
        return;
      const Ke = Ie.nativeEvent, gt = new qe({
        active: V.current,
        activeNode: tt,
        event: Ke,
        options: Rt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Oe,
        onAbort(Ae) {
          if (!T.get(Ae))
            return;
          const {
            onDragAbort: vt
          } = X.current, kt = {
            id: Ae
          };
          vt?.(kt), R({
            type: "onDragAbort",
            event: kt
          });
        },
        onPending(Ae, At, vt, kt) {
          if (!T.get(Ae))
            return;
          const {
            onDragPending: gr
          } = X.current, Tt = {
            id: Ae,
            constraint: At,
            initialCoordinates: vt,
            offset: kt
          };
          gr?.(Tt), R({
            type: "onDragPending",
            event: Tt
          });
        },
        onStart(Ae) {
          const At = V.current;
          if (At == null)
            return;
          const vt = T.get(At);
          if (!vt)
            return;
          const {
            onDragStart: kt
          } = X.current, pr = {
            activatorEvent: Ke,
            active: {
              id: At,
              data: vt.data,
              rect: C
            }
          };
          Kr(() => {
            kt?.(pr), b(Mt.Initializing), _({
              type: De.DragStart,
              initialCoordinates: Ae,
              active: At
            }), R({
              type: "onDragStart",
              event: pr
            }), de(Yt.current), ve(Ke);
          });
        },
        onMove(Ae) {
          _({
            type: De.DragMove,
            coordinates: Ae
          });
        },
        onEnd: Xt(De.DragEnd),
        onCancel: Xt(De.DragCancel)
      });
      Yt.current = gt;
      function Xt(Ae) {
        return async function() {
          const {
            active: vt,
            collisions: kt,
            over: pr,
            scrollAdjustedTranslate: gr
          } = Oe.current;
          let Tt = null;
          if (vt && gr) {
            const {
              cancelDrop: vr
            } = X.current;
            Tt = {
              activatorEvent: Ke,
              active: vt,
              collisions: kt,
              delta: gr,
              over: pr
            }, Ae === De.DragEnd && typeof vr == "function" && await Promise.resolve(vr(Tt)) && (Ae = De.DragCancel);
          }
          V.current = null, Kr(() => {
            _({
              type: Ae
            }), b(Mt.Uninitialized), Ur(null), de(null), ve(null), Yt.current = null;
            const vr = Ae === De.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Tt) {
              const Gn = X.current[vr];
              Gn?.(Tt), R({
                type: vr,
                event: Tt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [T]
  ), xl = le((Ie, Ze) => (qe, Rt) => {
    const tt = qe.nativeEvent, Ke = T.get(Rt);
    if (
      // Another sensor is already instantiating
      V.current !== null || // No active draggable
      !Ke || // Event has already been captured
      tt.dndKit || tt.defaultPrevented
    )
      return;
    const gt = {
      active: Ke
    };
    Ie(qe, Ze.options, gt) === !0 && (tt.dndKit = {
      capturedBy: Ze.sensor
    }, V.current = Rt, Xi(qe, Ze));
  }, [T, Xi]), Ji = Bu(d, xl);
  Zu(d), ft(() => {
    ce && O === Mt.Initializing && b(Mt.Initialized);
  }, [ce, O]), J(
    () => {
      const {
        onDragMove: Ie
      } = X.current, {
        active: Ze,
        activatorEvent: qe,
        collisions: Rt,
        over: tt
      } = Oe.current;
      if (!Ze || !qe)
        return;
      const Ke = {
        active: Ze,
        activatorEvent: qe,
        collisions: Rt,
        delta: {
          x: pe.x,
          y: pe.y
        },
        over: tt
      };
      Kr(() => {
        Ie?.(Ke), R({
          type: "onDragMove",
          event: Ke
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pe.x, pe.y]
  ), J(
    () => {
      const {
        active: Ie,
        activatorEvent: Ze,
        collisions: qe,
        droppableContainers: Rt,
        scrollAdjustedTranslate: tt
      } = Oe.current;
      if (!Ie || V.current == null || !Ze || !tt)
        return;
      const {
        onDragOver: Ke
      } = X.current, gt = Rt.get(Kt), Xt = gt && gt.rect.current ? {
        id: gt.id,
        rect: gt.rect.current,
        data: gt.data,
        disabled: gt.disabled
      } : null, Ae = {
        active: Ie,
        activatorEvent: Ze,
        collisions: qe,
        delta: {
          x: tt.x,
          y: tt.y
        },
        over: Xt
      };
      Kr(() => {
        Ur(Xt), Ke?.(Ae), R({
          type: "onDragOver",
          event: Ae
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Kt]
  ), ft(() => {
    Oe.current = {
      activatorEvent: se,
      active: A,
      activeNode: Ee,
      collisionRect: ze,
      collisions: Wt,
      droppableRects: Pe,
      draggableNodes: T,
      draggingNode: Ue,
      draggingNodeRect: ct,
      droppableContainers: z,
      over: et,
      scrollableAncestors: w,
      scrollAdjustedTranslate: pe
    }, C.current = {
      initial: ct,
      translated: ze
    };
  }, [A, Ee, Wt, ze, T, Ue, ct, Pe, z, et, w, pe]), Iu({
    ...me,
    delta: $,
    draggingRect: ze,
    pointerCoordinates: M,
    scrollableAncestors: w,
    scrollableAncestorRects: L
  });
  const wl = U(() => ({
    active: A,
    activeNode: Ee,
    activeNodeRect: ce,
    activatorEvent: se,
    collisions: Wt,
    containerNodeRect: Qe,
    dragOverlay: Le,
    draggableNodes: T,
    droppableContainers: z,
    droppableRects: Pe,
    over: et,
    measureDroppableContainers: Ne,
    scrollableAncestors: w,
    scrollableAncestorRects: L,
    measuringConfiguration: ye,
    measuringScheduled: Te,
    windowRect: v
  }), [A, Ee, ce, se, Wt, Qe, Le, T, z, Pe, et, Ne, w, L, ye, Te, v]), _l = U(() => ({
    activatorEvent: se,
    activators: Ji,
    active: A,
    activeNodeRect: ce,
    ariaDescribedById: {
      draggable: xe
    },
    dispatch: _,
    draggableNodes: T,
    over: et,
    measureDroppableContainers: Ne
  }), [se, Ji, A, ce, _, xe, T, et, Ne]);
  return B.createElement(ja.Provider, {
    value: D
  }, B.createElement($r.Provider, {
    value: _l
  }, B.createElement(no.Provider, {
    value: wl
  }, B.createElement(Fn.Provider, {
    value: Wn
  }, c)), B.createElement(rh, {
    disabled: o?.restoreFocus === !1
  })), B.createElement(su, {
    ...o,
    hiddenTextDescribedById: xe
  }));
  function Cl() {
    const Ie = ie?.autoScrollEnabled === !1, Ze = typeof l == "object" ? l.enabled === !1 : l === !1, qe = k && !Ie && !Ze;
    return typeof l == "object" ? {
      ...l,
      enabled: qe
    } : {
      enabled: qe
    };
  }
}), ah = /* @__PURE__ */ Ct(null), xs = "button", oh = "Draggable";
function lh(r) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: i
  } = r;
  const s = jr(oh), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: h
  } = ht($r), {
    role: m = xs,
    roleDescription: g = "draggable",
    tabIndex: y = 0
  } = i ?? {}, S = l?.id === e, _ = ht(S ? Fn : ah), [R, D] = dn(), [O, b] = dn(), k = qu(a, e), E = Mr(t);
  ft(
    () => (u.set(e, {
      id: e,
      key: s,
      node: R,
      activatorNode: O,
      data: E
    }), () => {
      const $ = u.get(e);
      $ && $.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const T = U(() => ({
    role: m,
    tabIndex: y,
    "aria-disabled": n,
    "aria-pressed": S && m === xs ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": d.draggable
  }), [n, m, y, S, g, d.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: c,
    attributes: T,
    isDragging: S,
    listeners: n ? void 0 : k,
    node: R,
    over: h,
    setNodeRef: D,
    setActivatorNodeRef: b,
    transform: _
  };
}
function so() {
  return ht(no);
}
const ch = "Droppable", dh = {
  timeout: 25
};
function uh(r) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: i
  } = r;
  const s = jr(ch), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: c
  } = ht($r), d = K({
    disabled: t
  }), u = K(!1), h = K(null), m = K(null), {
    disabled: g,
    updateMeasurementsFor: y,
    timeout: S
  } = {
    ...dh,
    ...i
  }, _ = Mr(y ?? n), R = le(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        c(Array.isArray(_.current) ? _.current : [_.current]), m.current = null;
      }, S);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [S]
  ), D = zn({
    callback: R,
    disabled: g || !a
  }), O = le((T, $) => {
    D && ($ && (D.unobserve($), u.current = !1), T && D.observe(T));
  }, [D]), [b, k] = dn(O), E = Mr(e);
  return J(() => {
    !D || !b.current || (D.disconnect(), u.current = !1, D.observe(b.current));
  }, [b, D]), J(
    () => (o({
      type: De.RegisterDroppable,
      element: {
        id: n,
        key: s,
        disabled: t,
        node: b,
        rect: h,
        data: E
      }
    }), () => o({
      type: De.UnregisterDroppable,
      key: s,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), J(() => {
    t !== d.current.disabled && (o({
      type: De.SetDroppableDisabled,
      id: n,
      key: s,
      disabled: t
    }), d.current.disabled = t);
  }, [n, s, t, o]), {
    active: a,
    rect: h,
    isOver: l?.id === n,
    node: b,
    over: l,
    setNodeRef: k
  };
}
function hh(r) {
  let {
    animation: e,
    children: t
  } = r;
  const [n, i] = Q(null), [s, a] = Q(null), o = un(t);
  return !t && !n && o && i(o), ft(() => {
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
  }, [e, n, s]), B.createElement(B.Fragment, null, t, n ? mc(n, {
    ref: a
  }) : null);
}
const fh = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function mh(r) {
  let {
    children: e
  } = r;
  return B.createElement($r.Provider, {
    value: ro
  }, B.createElement(Fn.Provider, {
    value: fh
  }, e));
}
const ph = {
  position: "fixed",
  touchAction: "none"
}, gh = (r) => In(r) ? "transform 250ms ease" : void 0, vh = /* @__PURE__ */ We((r, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: i,
    children: s,
    className: a,
    rect: o,
    style: l,
    transform: c,
    transition: d = gh
  } = r;
  if (!o)
    return null;
  const u = i ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...ph,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: Ft.Transform.toString(u),
    transformOrigin: i && n ? lu(n, o) : void 0,
    transition: typeof d == "function" ? d(n) : d,
    ...l
  };
  return B.createElement(t, {
    className: a,
    style: h,
    ref: e
  }, s);
}), yh = (r) => (e) => {
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
}, bh = (r) => {
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
}, xh = {
  duration: 250,
  easing: "ease",
  keyframes: bh,
  sideEffects: /* @__PURE__ */ yh({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function wh(r) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: i
  } = r;
  return Ln((s, a) => {
    if (e === null)
      return;
    const o = t.get(s);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const c = to(a);
    if (!c)
      return;
    const {
      transform: d
    } = He(a).getComputedStyle(a), u = Ga(d);
    if (!u)
      return;
    const h = typeof e == "function" ? e : _h(e);
    return Ja(l, i.draggable.measure), h({
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
function _h(r) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: i
  } = {
    ...xh,
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
    }, m = i({
      ...c,
      active: a,
      dragOverlay: o,
      transform: {
        initial: l,
        final: h
      }
    }), [g] = m, y = m[m.length - 1];
    if (JSON.stringify(g) === JSON.stringify(y))
      return;
    const S = n?.({
      active: a,
      dragOverlay: o,
      ...c
    }), _ = o.node.animate(m, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((R) => {
      _.onfinish = () => {
        S?.(), R();
      };
    });
  };
}
let ws = 0;
function Ch(r) {
  return U(() => {
    if (r != null)
      return ws++, ws;
  }, [r]);
}
const Eh = /* @__PURE__ */ B.memo((r) => {
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
    containerNodeRect: m,
    draggableNodes: g,
    droppableContainers: y,
    dragOverlay: S,
    over: _,
    measuringConfiguration: R,
    scrollableAncestors: D,
    scrollableAncestorRects: O,
    windowRect: b
  } = so(), k = ht(Fn), E = Ch(u?.id), T = io(a, {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: S.rect,
    over: _,
    overlayNodeRect: S.rect,
    scrollableAncestors: D,
    scrollableAncestorRects: O,
    transform: k,
    windowRect: b
  }), $ = Ii(h), z = wh({
    config: n,
    draggableNodes: g,
    droppableContainers: y,
    measuringConfiguration: R
  }), N = $ ? S.setRef : void 0;
  return B.createElement(mh, null, B.createElement(hh, {
    animation: z
  }, u && E ? B.createElement(vh, {
    key: E,
    id: u.id,
    ref: N,
    as: o,
    activatorEvent: d,
    adjustScale: e,
    className: l,
    transition: s,
    rect: $,
    style: {
      zIndex: c,
      ...i
    },
    transform: T
  }, t) : null));
});
function Pi(r, e, t) {
  const n = r.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function kh(r, e) {
  return r.reduce((t, n, i) => {
    const s = e.get(n);
    return s && (t[i] = s), t;
  }, Array(r.length));
}
function Jr(r) {
  return r !== null && r >= 0;
}
function Sh(r, e) {
  if (r === e)
    return !0;
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Dh(r) {
  return typeof r == "boolean" ? {
    draggable: r,
    droppable: r
  } : r;
}
const ao = (r) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: i
  } = r;
  const s = Pi(e, n, t), a = e[i], o = s[i];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, oo = "Sortable", lo = /* @__PURE__ */ B.createContext({
  activeIndex: -1,
  containerId: oo,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: ao,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Nh(r) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: i = ao,
    disabled: s = !1
  } = r;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = so(), u = jr(oo, t), h = o.rect !== null, m = U(() => n.map((k) => typeof k == "object" && "id" in k ? k.id : k), [n]), g = a != null, y = a ? m.indexOf(a.id) : -1, S = c ? m.indexOf(c.id) : -1, _ = K(m), R = !Sh(m, _.current), D = S !== -1 && y === -1 || R, O = Dh(s);
  ft(() => {
    R && g && d(m);
  }, [R, m, g, d]), J(() => {
    _.current = m;
  }, [m]);
  const b = U(
    () => ({
      activeIndex: y,
      containerId: u,
      disabled: O,
      disableTransforms: D,
      items: m,
      overIndex: S,
      useDragOverlay: h,
      sortedRects: kh(m, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, u, O.draggable, O.droppable, D, m, S, l, h, i]
  );
  return B.createElement(lo.Provider, {
    value: b
  }, e);
}
const Rh = (r) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: i
  } = r;
  return Pi(t, n, i).indexOf(e);
}, Ah = (r) => {
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
}, Th = {
  duration: 200,
  easing: "ease"
}, co = "transform", Oh = /* @__PURE__ */ Ft.Transition.toString({
  property: co,
  duration: 0,
  easing: "linear"
}), Mh = {
  roleDescription: "sortable"
};
function Lh(r) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: i
  } = r;
  const [s, a] = Q(null), o = K(t);
  return ft(() => {
    if (!e && t !== o.current && n.current) {
      const l = i.current;
      if (l) {
        const c = mr(n.current, {
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
  }, [e, t, n, i]), J(() => {
    s && a(null);
  }, [s]), s;
}
function Ih(r) {
  let {
    animateLayoutChanges: e = Ah,
    attributes: t,
    disabled: n,
    data: i,
    getNewIndex: s = Rh,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: c = Th
  } = r;
  const {
    items: d,
    containerId: u,
    activeIndex: h,
    disabled: m,
    disableTransforms: g,
    sortedRects: y,
    overIndex: S,
    useDragOverlay: _,
    strategy: R
  } = ht(lo), D = Ph(n, m), O = d.indexOf(a), b = U(() => ({
    sortable: {
      containerId: u,
      index: O,
      items: d
    },
    ...i
  }), [u, i, O, d]), k = U(() => d.slice(d.indexOf(a)), [d, a]), {
    rect: E,
    node: T,
    isOver: $,
    setNodeRef: z
  } = uh({
    id: a,
    data: b,
    disabled: D.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: k,
      ...l
    }
  }), {
    active: N,
    activatorEvent: C,
    activeNodeRect: A,
    attributes: V,
    setNodeRef: ie,
    listeners: de,
    isDragging: se,
    over: ve,
    setActivatorNodeRef: X,
    transform: xe
  } = lh({
    id: a,
    data: b,
    attributes: {
      ...Mh,
      ...t
    },
    disabled: D.draggable
  }), Ge = Ud(z, ie), ye = !!N, Pe = ye && !g && Jr(h) && Jr(S), Ne = !_ && se, Te = Ne && Pe ? xe : null, Ve = Pe ? Te ?? (o ?? R)({
    rects: y,
    activeNodeRect: A,
    activeIndex: h,
    overIndex: S,
    index: O
  }) : null, me = Jr(h) && Jr(S) ? s({
    id: a,
    items: d,
    activeIndex: h,
    overIndex: S
  }) : O, we = N?.id, ce = K({
    activeId: we,
    items: d,
    newIndex: me,
    containerId: u
  }), Qe = d !== ce.current.items, Oe = e({
    active: N,
    containerId: u,
    isDragging: se,
    isSorting: ye,
    id: a,
    index: O,
    items: d,
    newIndex: ce.current.newIndex,
    previousItems: ce.current.items,
    previousContainerId: ce.current.containerId,
    transition: c,
    wasDragging: ce.current.activeId != null
  }), Me = Lh({
    disabled: !Oe,
    index: O,
    node: T,
    rect: E
  });
  return J(() => {
    ye && ce.current.newIndex !== me && (ce.current.newIndex = me), u !== ce.current.containerId && (ce.current.containerId = u), d !== ce.current.items && (ce.current.items = d);
  }, [ye, me, u, d]), J(() => {
    if (we === ce.current.activeId)
      return;
    if (we != null && ce.current.activeId == null) {
      ce.current.activeId = we;
      return;
    }
    const Ue = setTimeout(() => {
      ce.current.activeId = we;
    }, 50);
    return () => clearTimeout(Ue);
  }, [we]), {
    active: N,
    activeIndex: h,
    attributes: V,
    data: b,
    rect: E,
    index: O,
    newIndex: me,
    items: d,
    isOver: $,
    isSorting: ye,
    isDragging: se,
    listeners: de,
    node: T,
    overIndex: S,
    over: ve,
    setNodeRef: Ge,
    setActivatorNodeRef: X,
    setDroppableNodeRef: z,
    setDraggableNodeRef: ie,
    transform: Me ?? Ve,
    transition: Le()
  };
  function Le() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Me || // Or to prevent items jumping to back to their "new" position when items change
      Qe && ce.current.newIndex === O
    )
      return Oh;
    if (!(Ne && !In(C) || !c) && (ye || Oe))
      return Ft.Transition.toString({
        ...c,
        property: co
      });
  }
}
function Ph(r, e) {
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
function pn(r) {
  if (!r)
    return !1;
  const e = r.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const zh = [oe.Down, oe.Right, oe.Up, oe.Left], Fh = (r, e) => {
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
  if (zh.includes(r.code)) {
    if (r.preventDefault(), !t || !n)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = i.get(u.id);
      if (h)
        switch (r.code) {
          case oe.Down:
            n.top < h.top && l.push(u);
            break;
          case oe.Up:
            n.top > h.top && l.push(u);
            break;
          case oe.Left:
            n.left > h.left && l.push(u);
            break;
          case oe.Right:
            n.left < h.left && l.push(u);
            break;
        }
    });
    const c = uu({
      collisionRect: n,
      droppableRects: i,
      droppableContainers: l
    });
    let d = $a(c, "id");
    if (d === a?.id && c.length > 1 && (d = c[1].id), d != null) {
      const u = s.get(t.id), h = s.get(d), m = h ? i.get(h.id) : null, g = h?.node.current;
      if (g && m && u && h) {
        const S = Pn(g).some((k, E) => o[E] !== k), _ = uo(u, h), R = Bh(u, h), D = S || !_ ? {
          x: 0,
          y: 0
        } : {
          x: R ? n.width - m.width : 0,
          y: R ? n.height - m.height : 0
        }, O = {
          x: m.left,
          y: m.top
        };
        return D.x && D.y ? O : Lr(O, D);
      }
    }
  }
};
function uo(r, e) {
  return !pn(r) || !pn(e) ? !1 : r.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Bh(r, e) {
  return !pn(r) || !pn(e) || !uo(r, e) ? !1 : r.data.current.sortable.index < e.data.current.sortable.index;
}
const _s = ({ id: r, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: i, transform: s, transition: a } = Ih({
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
}, zi = ({ blocks: r, sortable: e = !1, onSort: t = () => {
}, main: n = !1 }) => {
  const [i, s] = Q([]);
  ta(() => {
    s(r.map((u, h) => ({
      id: u.id ?? h.toString(),
      render: u.render
    })));
  }, [r]);
  const [a, o] = Q(null), l = au(cs(Li), cs(Oi, {
    coordinateGetter: Fh
  })), c = (u) => {
    o(u.active.id);
  }, d = (u) => {
    const { active: h, over: m } = u;
    o(null), m && h.id !== m.id && s((g) => {
      const y = g.findIndex((_) => _.id === h.id), S = g.findIndex((_) => _.id === m.id);
      return Pi(g, y, S);
    });
  };
  return f("div", {
    className: re("flex flex-wrap items-stretch gap-4", n && "flex-1"),
    children: j(sh, {
      sensors: l,
      onDragStart: c,
      onDragEnd: d,
      children: [f(Nh, {
        items: i,
        children: i.map((u) => f(_s, {
          id: u.id,
          children: u.render
        }, u.id))
      }), f(Eh, {
        children: a ? f(_s, {
          id: a,
          children: i.find((u) => u.id === a)?.render
        }) : null
      })]
    })
  });
};
zi.displayName = "GroupMasonry";
zi.__isPageLayoutGroup = !0;
const Hh = We(function({ children: e, aside: t, header: n, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Ba("Page", e, ["block", "group"]), f("div", {
    ref: s,
    className: "h-full",
    children: j("div", {
      className: re("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [j("main", {
        className: re("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", i === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [n && f("header", {
          className: re("sticky top-0 z-30 bg-f1-background"),
          children: n
        }), f("div", {
          className: "flex-1",
          children: e
        })]
      }), t && f("aside", {
        className: re("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", i === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), Kp = {
  Page: st("Page", Hh),
  Block: st("Block", On),
  BlockContent: st("BlockContent", $d),
  Group: st("Group", Ni),
  GroupGrid: st("GroupGrid", Tn),
  GroupMasonry: st("GroupMasonry", zi)
}, Yp = ot({
  name: "StandardLayout",
  type: "layout"
}, Ra), Xp = ot({
  name: "TwoColumnLayout",
  type: "layout"
}, pd), Jp = ot({
  name: "HomeLayout",
  type: "layout"
}, fd);
function sr(r) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, sr(r);
}
function Vh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, mo(n.key), n);
  }
}
function $h(r, e, t) {
  return e && jh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Wh(r, e, t) {
  return e = gn(e), Gh(r, ho() ? Reflect.construct(e, t || [], gn(r).constructor) : e.apply(r, t));
}
function Gh(r, e) {
  if (e && (sr(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Uh(r);
}
function Uh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function ho() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ho = function() {
    return !!r;
  })();
}
function gn(r) {
  return gn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, gn(r);
}
function Zh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && di(r, e);
}
function di(r, e) {
  return di = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, di(r, e);
}
function fo(r, e, t) {
  return e = mo(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function mo(r) {
  var e = qh(r, "string");
  return sr(e) == "symbol" ? e : e + "";
}
function qh(r, e) {
  if (sr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Bn = /* @__PURE__ */ (function(r) {
  function e() {
    return Vh(this, e), Wh(this, e, arguments);
  }
  return Zh(e, r), $h(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(B.Component);
fo(Bn, "displayName", "ZAxis");
fo(Bn, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Kh = ["option", "isActive"];
function Dr() {
  return Dr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Dr.apply(this, arguments);
}
function Yh(r, e) {
  if (r == null) return {};
  var t = Xh(r, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function Xh(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function Jh(r) {
  var e = r.option, t = r.isActive, n = Yh(r, Kh);
  return typeof e == "string" ? /* @__PURE__ */ B.createElement(ts, Dr({
    option: /* @__PURE__ */ B.createElement(bc, Dr({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ B.createElement(ts, Dr({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, n));
}
function ar(r) {
  "@babel/helpers - typeof";
  return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ar(r);
}
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Nr.apply(this, arguments);
}
function Cs(r, e) {
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
    e % 2 ? Cs(Object(t), !0).forEach(function(n) {
      Pt(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Cs(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Qh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Es(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, go(n.key), n);
  }
}
function ef(r, e, t) {
  return e && Es(r.prototype, e), t && Es(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function tf(r, e, t) {
  return e = vn(e), rf(r, po() ? Reflect.construct(e, t || [], vn(r).constructor) : e.apply(r, t));
}
function rf(r, e) {
  if (e && (ar(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nf(r);
}
function nf(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function po() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (po = function() {
    return !!r;
  })();
}
function vn(r) {
  return vn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, vn(r);
}
function sf(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && ui(r, e);
}
function ui(r, e) {
  return ui = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ui(r, e);
}
function Pt(r, e, t) {
  return e = go(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function go(r) {
  var e = af(r, "string");
  return ar(e) == "symbol" ? e : e + "";
}
function af(r, e) {
  if (ar(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Wr = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    Qh(this, e);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return t = tf(this, e, [].concat(i)), Pt(t, "state", {
      isAnimationFinished: !1
    }), Pt(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), Pt(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), Pt(t, "id", Sc("recharts-scatter-")), t;
  }
  return sf(e, r), ef(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, s = this.props, a = s.shape, o = s.activeShape, l = s.activeIndex, c = Un(this.props, !1);
      return n.map(function(d, u) {
        var h = l === u, m = h ? o : a, g = rt(rt({}, c), d);
        return /* @__PURE__ */ B.createElement(yr, Nr({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(d?.cx, "-").concat(d?.cy, "-").concat(d?.size, "-").concat(u)
        }, xc(i.props, d, u), {
          role: "img"
        }), /* @__PURE__ */ B.createElement(Jh, Nr({
          option: m,
          isActive: h,
          key: "symbol-".concat(u)
        }, g)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, s = i.points, a = i.isAnimationActive, o = i.animationBegin, l = i.animationDuration, c = i.animationEasing, d = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ B.createElement(wc, {
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
        var m = h.t, g = s.map(function(y, S) {
          var _ = u && u[S];
          if (_) {
            var R = Yr(_.cx, y.cx), D = Yr(_.cy, y.cy), O = Yr(_.size, y.size);
            return rt(rt({}, y), {}, {
              cx: R(m),
              cy: D(m),
              size: O(m)
            });
          }
          var b = Yr(0, y.size);
          return rt(rt({}, y), {}, {
            size: b(m)
          });
        });
        return /* @__PURE__ */ B.createElement(yr, null, n.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, s = n.isAnimationActive, a = this.state.prevPoints;
      return s && i && i.length && (!a || !ya(a, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, a = i.xAxis, o = i.yAxis, l = i.children, c = ba(l, _c);
      return c ? c.map(function(d, u) {
        var h = d.props, m = h.direction, g = h.dataKey;
        return /* @__PURE__ */ B.cloneElement(d, {
          key: "".concat(m, "-").concat(g, "-").concat(s[u]),
          data: s,
          xAxis: a,
          yAxis: o,
          layout: m === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(S, _) {
            return {
              x: S.cx,
              y: S.cy,
              value: m === "x" ? +S.node.x : +S.node.y,
              errorVal: Qr(S, _)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, s = n.line, a = n.lineType, o = n.lineJointType, l = Un(this.props, !1), c = Un(s, !1), d, u;
      if (a === "joint")
        d = i.map(function(D) {
          return {
            x: D.cx,
            y: D.cy
          };
        });
      else if (a === "fitting") {
        var h = Cc(i), m = h.xmin, g = h.xmax, y = h.a, S = h.b, _ = function(O) {
          return y * O + S;
        };
        d = [{
          x: m,
          y: _(m)
        }, {
          x: g,
          y: _(g)
        }];
      }
      var R = rt(rt(rt({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, c), {}, {
        points: d
      });
      return /* @__PURE__ */ B.isValidElement(s) ? u = /* @__PURE__ */ B.cloneElement(s, R) : Ec(s) ? u = s(R) : u = /* @__PURE__ */ B.createElement(kc, Nr({}, R, {
        type: o
      })), /* @__PURE__ */ B.createElement(yr, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, s = n.points, a = n.line, o = n.className, l = n.xAxis, c = n.yAxis, d = n.left, u = n.top, h = n.width, m = n.height, g = n.id, y = n.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var S = this.state.isAnimationFinished, _ = Rl("recharts-scatter", o), R = l && l.allowDataOverflow, D = c && c.allowDataOverflow, O = R || D, b = er(g) ? this.id : g;
      return /* @__PURE__ */ B.createElement(yr, {
        className: _,
        clipPath: O ? "url(#clipPath-".concat(b, ")") : null
      }, R || D ? /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-".concat(b)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: R ? d : d - h / 2,
        y: D ? u : u - m / 2,
        width: R ? h : h * 2,
        height: D ? m : m * 2
      }))) : null, a && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ B.createElement(yr, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!y || S) && xa.renderCallByParent(this.props, s));
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
})(pc);
Pt(Wr, "displayName", "Scatter");
Pt(Wr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Dc.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Pt(Wr, "getComposedData", function(r) {
  var e = r.xAxis, t = r.yAxis, n = r.zAxis, i = r.item, s = r.displayedData, a = r.xAxisTicks, o = r.yAxisTicks, l = r.offset, c = i.props.tooltipType, d = ba(i.props.children, Nc), u = er(e.dataKey) ? i.props.dataKey : e.dataKey, h = er(t.dataKey) ? i.props.dataKey : t.dataKey, m = n && n.dataKey, g = n ? n.range : Bn.defaultProps.range, y = g && g[0], S = e.scale.bandwidth ? e.scale.bandwidth() : 0, _ = t.scale.bandwidth ? t.scale.bandwidth() : 0, R = s.map(function(D, O) {
    var b = Qr(D, u), k = Qr(D, h), E = !er(m) && Qr(D, m) || "-", T = [{
      name: er(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: b,
      payload: D,
      dataKey: u,
      type: c
    }, {
      name: er(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: k,
      payload: D,
      dataKey: h,
      type: c
    }];
    E !== "-" && T.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: E,
      payload: D,
      dataKey: m,
      type: c
    });
    var $ = rs({
      axis: e,
      ticks: a,
      bandSize: S,
      entry: D,
      index: O,
      dataKey: u
    }), z = rs({
      axis: t,
      ticks: o,
      bandSize: _,
      entry: D,
      index: O,
      dataKey: h
    }), N = E !== "-" ? n.scale(E) : y, C = Math.sqrt(Math.max(N, 0) / Math.PI);
    return rt(rt({}, D), {}, {
      cx: $,
      cy: z,
      x: $ - C,
      y: z - C,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * C,
      height: 2 * C,
      size: N,
      node: {
        x: b,
        y: k,
        z: E
      },
      tooltipPayload: T,
      tooltipPosition: {
        x: $,
        y: z
      },
      payload: D
    }, d && d[O] && d[O].props);
  });
  return rt({
    points: R
  }, l);
});
var of = Rc({
  chartName: "ComposedChart",
  GraphicalChild: [wa, Ac, _a, Wr],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ca
  }, {
    axisType: "yAxis",
    AxisComp: ai
  }, {
    axisType: "zAxis",
    AxisComp: Bn
  }],
  formatAxisMap: Tc
});
const lf = (r) => {
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
}, cf = ({ dataConfig: r, data: e, xAxis: t, yAxis: n = {
  hide: !0
}, label: i = !1, hideTooltip: s = !1, hideGrid: a = !1, aspect: o, legend: l, showValueUnderLabel: c = !1, bar: d, line: u, scatter: h, onClick: m }, g) => {
  const y = Oc(e), S = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], _ = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], R = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], D = [...S, ..._, ...R], O = Math.max(...y.flatMap((E) => D.map((T) => Mc(n?.tickFormatter ? n.tickFormatter(`${E[T]}`) : `${E[T]}`)))), b = [d, u, h].filter((E) => E?.axisPosition === "left"), k = [d, u, h].filter((E) => E?.axisPosition === "right");
  return f(Lc, {
    config: r,
    ref: g,
    aspect: o,
    children: j(of, {
      accessibilityLayer: !0,
      data: y,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: c ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (E) => {
        if (!m || !E.activeLabel || !E.activePayload)
          return;
        const T = {
          label: E.activeLabel,
          values: {}
        };
        for (const $ of E.activePayload)
          T.values[$.name] = $.value;
        m(T);
      },
      children: [!s && f(Ic, {
        ...Pc(),
        content: f(zc, {
          yAxisFormatter: n.tickFormatter
        })
      }), !a && f(Fc, {
        ...Bc()
      }), b.length > 0 && f(ai, {
        ...ns(n),
        tick: !0,
        width: n.width ?? O + 20 + (k.length > 0 && b[0]?.axisLabel ? 20 : 0),
        hide: n.hide || b.some((E) => E?.hideAxis),
        label: b[0]?.axisLabel ? {
          value: b[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), k.length > 0 && f(ai, {
        ...ns(n),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: n.width ?? O + 20 + (b.length > 0 && k[0]?.axisLabel ? 20 : 0),
        hide: n.hide || k.some((E) => E?.hideAxis),
        label: k[0]?.axisLabel ? {
          value: k[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), f(Ca, {
        ...Hc(t),
        hide: t?.hide,
        tick: c ? (E) => {
          const { x: T, y: $, payload: z } = E, N = e.find((V) => V.label === z.value)?.values || "", C = Object.keys(N).length === 1 ? Object.values(N)?.[0] : void 0, A = C !== void 0 && n.tickFormatter ? n.tickFormatter(`${C}`) : C.toLocaleString();
          return j("g", {
            transform: `translate(${T},${$})`,
            children: [f("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: z.value
            }), !!C && f("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: A
            })]
          });
        } : void 0
      }), S.map((E, T) => f(_a, {
        isAnimationActive: !1,
        dataKey: String(E),
        fill: r[E].color ? Cr(r[E].color) : Zn(T),
        radius: 4,
        maxBarSize: 32,
        children: i && f(xa, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(E)}`)
      }, `bar-${String(E)}`)), _.map((E, T) => f(wa, {
        type: u?.lineType ?? "natural",
        dataKey: String(E),
        stroke: r[E].color ? Cr(r[E].color) : Zn(S.length + T),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(E)}`)), R.map((E, T) => f(Wr, {
        dataKey: String(E),
        fill: r[E].color ? Cr(r[E].color) : Zn(S.length + _.length + T),
        r: 4,
        isAnimationActive: !1,
        yAxisId: h?.axisPosition === "right" ? "right" : void 0,
        shape: lf(String(E))
      }, `scatter-${String(E)}`)), l && f(Vc, {
        content: f(jc, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, df = Ea(cf), uf = ({ value: r, max: e = 100, label: t, color: n }, i) => {
  const s = n ? Cr(n) : Cr("categorical-1"), a = r / e * 100;
  return j("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [f("div", {
      className: "flex-grow",
      children: f($c, {
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
}, hf = Ea(uf), Qp = ot(
  {
    name: "AreaChart",
    type: "info"
  },
  Wc
), eg = ot(
  {
    name: "BarChart",
    type: "info"
  },
  Gc
), tg = ot(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Uc
), rg = ot(
  {
    name: "LineChart",
    type: "info"
  },
  Zc
), ng = ot(
  {
    name: "PieChart",
    type: "info"
  },
  qc
), ig = ot(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Kc
), sg = ot(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  hf
), ag = ot(
  {
    name: "ComboChart",
    type: "info"
  },
  df
), ff = (r) => typeof r == "boolean" || !r ? {
  show: !!r,
  invertStatus: !1
} : {
  show: r.show ?? !0,
  invertStatus: r.invertStatus ?? !1
}, vo = ({ label: r, ...e }) => {
  const t = Yc(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = ff(e.trend), s = t(e.comparison), a = Xc(n.numericValue, n.formatterOptions), o = is(s.numericValue), l = is(n.numericValue), c = U(() => {
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
      }), o !== void 0 && f(Jc, {
        percentage: c,
        amount: s,
        invertStatus: i.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, mf = () => j("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [f(yt, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), j("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [f(yt, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), f(yt, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
vo.displayName = "F0BigNumber";
const pf = ra(vo, mf), og = st("F0BigNumber", pf), yo = {
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
}, bo = {
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
}, gf = {}, vf = {
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
}, yf = {
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
}, bf = {
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
}, xf = {
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
}, wf = {
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
}, _f = {
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
}, xo = {
  width: vf,
  height: yf,
  minWidth: bf,
  minHeight: xf,
  maxWidth: wf,
  maxHeight: _f
}, wo = {
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
}, _o = {
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
}, Co = {
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
}, Cf = {}, Eo = {
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
}, ko = {
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
}, Ef = {}, kf = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, So = {
  overflow: kf,
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
}, Sf = {}, Do = {
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
}, Df = {}, Nf = {
  ...wo,
  ...Do,
  ...ko,
  ...Co,
  ...Eo,
  ...xo,
  ...yo,
  ...bo,
  ...So,
  ..._o
};
function Rf(r, e) {
  return e.split(" ").map((t) => `${r}:${t}`).join(" ");
}
function Af(r, e) {
  const t = [];
  for (const [n, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = Nf[n];
    if (!s) continue;
    const a = s[String(i)];
    a && t.push(Rf(r, a));
  }
  return t.join(" ");
}
const Tf = Vt({
  base: "",
  variants: {
    ...wo,
    ...Do,
    ...ko,
    ...Co,
    ...Eo,
    ...xo,
    ...yo,
    ...bo,
    ...So,
    ..._o
  },
  defaultVariants: {
    ...Df,
    ...Ef,
    ...Cf,
    ...gf,
    ...Sf
  }
}), Of = ["sm", "md", "lg", "xl"], No = We(({ display: r, position: e, padding: t, paddingX: n, paddingY: i, paddingTop: s, paddingBottom: a, paddingLeft: o, paddingRight: l, margin: c, marginX: d, marginY: u, marginTop: h, marginBottom: m, marginLeft: g, marginRight: y, gap: S, columns: _, rows: R, colSpan: D, colStart: O, rowSpan: b, width: k, height: E, minWidth: T, minHeight: $, maxWidth: z, maxHeight: N, background: C, borderColor: A, border: V, borderTop: ie, borderBottom: de, borderLeft: se, borderRight: ve, borderRadius: X, borderRadiusTopLeft: xe, borderRadiusTopRight: Ge, borderRadiusBottomLeft: ye, borderRadiusBottomRight: Pe, borderStyle: Ne, overflow: Te, overflowX: Ee, overflowY: Ve, divider: me, dividerColor: we, alignItems: ce, justifyContent: Qe, flexDirection: Oe, flexWrap: Me, grow: Le, shrink: Ue, sm: ct, md: Et, lg: p, xl: v, ...w }, L) => {
  const I = ie && ie !== "none" || de && de !== "none" || se && se !== "none" || ve && ve !== "none", M = V && V !== "none" || I, W = {
    sm: ct,
    md: Et,
    lg: p,
    xl: v
  }, ee = Of.map((be) => {
    const pe = W[be];
    return pe ? Af(be, pe) : "";
  }).filter(Boolean).join(" ");
  return f("div", {
    ref: L,
    className: re(I && "border-0", Tf({
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
      marginBottom: m,
      marginLeft: g,
      marginRight: y,
      gap: S,
      columns: _,
      rows: R,
      colSpan: D,
      colStart: O,
      rowSpan: b,
      width: k,
      height: E,
      minWidth: T,
      minHeight: $,
      maxWidth: z,
      maxHeight: N,
      background: C,
      borderColor: A,
      border: V,
      borderTop: ie,
      borderBottom: de,
      borderLeft: se,
      borderRight: ve,
      borderRadius: X,
      borderRadiusTopLeft: xe,
      borderRadiusTopRight: Ge,
      borderRadiusBottomLeft: ye,
      borderRadiusBottomRight: Pe,
      borderStyle: Ne,
      overflow: Te,
      overflowX: Ee,
      overflowY: Ve,
      divider: me,
      dividerColor: we,
      alignItems: ce,
      justifyContent: Qe,
      flexDirection: Oe,
      flexWrap: Me,
      grow: Le,
      shrink: Ue
    }), ee, M && !A && "border-f1-border", me && !we && "divide-f1-border", "scrollbar-macos"),
    ...w
  });
});
No.displayName = "F0Box";
const lg = ot({
  name: "F0Box",
  type: "layout"
}, No), cg = Al.filter(
  (r) => r !== "ai"
), dg = na, ug = ["default", "outline", "neutral"], hg = na, fg = ["sm", "md", "lg"], mg = ["compact", "expanded"], pg = Tl, gg = [
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
], hi = ({ count: r, list: e }) => {
  const [t, n] = Q(!1), i = f(rn, {
    label: `+${r}`
  });
  return e?.length ? j(ia, {
    open: t,
    onOpenChange: n,
    children: [f(sa, {
      asChild: !0,
      children: f("button", {
        className: aa("inline-flex flex-shrink-0 items-center"),
        children: i
      })
    }), f(oa, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: j(la, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, a) => f("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: f(rn, {
            ...s
          })
        }, a)), f(ca, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
};
hi.displayName = "ChipCounter";
const Ro = ({ chips: r, max: e = 4, remainingCount: t, layout: n = "compact" }) => {
  if (n === "fill")
    return f(Ol, {
      items: r,
      renderListItem: (l) => f(rn, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => f(hi, {
        count: (t ?? 0) + l,
        list: t ? void 0 : r.slice(r.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const i = r.slice(0, e), s = r.slice(e), a = t ?? r.length - e, o = a > 0;
  return j("div", {
    className: "flex items-center gap-2",
    children: [i.map((l, c) => f(rn, {
      ...l
    }, c)), o && f(hi, {
      count: a,
      list: t ? void 0 : s
    })]
  });
};
Ro.displayName = "F0ChipList";
const vg = st("F0ChipList", Ro), yg = Ml, Mf = Vt({
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
}), Lf = Vt({
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
}), bg = ({ title: r, description: e, action: t, link: n, icon: i, variant: s = "neutral" }) => {
  const a = K(null);
  return f("div", {
    ref: a,
    className: "@container",
    children: f("div", {
      className: Mf({
        variant: s
      }),
      children: j("div", {
        className: re("flex flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between"),
        children: [j("div", {
          className: "flex flex-row gap-2",
          children: [f("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? f(Ll, {
              icon: i || Il,
              size: "sm"
            }) : f(Qc, {
              type: s,
              size: "sm"
            })
          }), j("div", {
            className: "flex flex-col gap-0.5",
            children: [f("p", {
              className: Lf({
                variant: s
              }),
              children: r
            }), f("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || n) && j("div", {
          className: re("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0"),
          children: [n && f(Pl, {
            href: n.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: n.label
          }), t && f(Xe, {
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
}, If = 388;
function Pf({ filters: r, value: e, onChange: t, height: n, width: i = 600, className: s, showApplyButton: a = !0, applyButtonLabel: o }) {
  const l = ur(), c = Object.keys(r)[0] ?? null, [d, u] = Q(c), [h, m] = Q(e);
  J(() => {
    m(e);
  }, [e]), J(() => {
    if (!d && r) {
      const _ = Object.keys(r);
      if (_.length > 0) {
        const R = _.find((D) => {
          const O = h[D], b = es(r[D].type);
          return O !== void 0 && !b.isEmpty(O, {
            schema: r[D],
            i18n: l
          });
        });
        u(R ?? _[0]);
      }
    }
  }, [r, d, h, l]);
  const g = (_, R) => {
    const D = {
      ...h,
      [_]: R
    };
    m(D), a || t(D);
  }, y = () => {
    t(h);
  }, S = U(() => n || Object.entries(r).reduce((R, [D, O]) => {
    const b = es(O.type);
    return Math.max(R, b?.formHeight || If);
  }, 0), [r, n]);
  return !r || Object.keys(r).length === 0 ? null : f("div", {
    className: re("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: i
    },
    children: f(zl, {
      filters: r,
      tempFilters: h,
      selectedFilterKey: d,
      onFilterSelect: u,
      onFilterChange: g,
      onApply: y,
      height: S,
      showApplyButton: a,
      applyButtonLabel: o
    })
  });
}
Pf.displayName = "F0FilterPickerContent";
var Gr = (r) => r.type === "checkbox", Gt = (r) => r instanceof Date, Be = (r) => r == null;
const Ao = (r) => typeof r == "object";
var Ce = (r) => !Be(r) && !Array.isArray(r) && Ao(r) && !Gt(r), To = (r) => Ce(r) && r.target ? Gr(r.target) ? r.target.checked : r.target.value : r, zf = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r, Oo = (r, e) => r.has(zf(e)), Ff = (r) => {
  const e = r.constructor && r.constructor.prototype;
  return Ce(e) && e.hasOwnProperty("isPrototypeOf");
}, Fi = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function je(r) {
  let e;
  const t = Array.isArray(r), n = typeof FileList < "u" ? r instanceof FileList : !1;
  if (r instanceof Date)
    e = new Date(r);
  else if (r instanceof Set)
    e = new Set(r);
  else if (!(Fi && (r instanceof Blob || n)) && (t || Ce(r)))
    if (e = t ? [] : {}, !t && !Ff(r))
      e = r;
    else
      for (const i in r)
        r.hasOwnProperty(i) && (e[i] = je(r[i]));
  else
    return r;
  return e;
}
var Hn = (r) => Array.isArray(r) ? r.filter(Boolean) : [], _e = (r) => r === void 0, F = (r, e, t) => {
  if (!e || !Ce(r))
    return t;
  const n = Hn(e.split(/[,[\].]+?/)).reduce((i, s) => Be(i) ? i : i[s], r);
  return _e(n) || n === r ? _e(r[e]) ? t : r[e] : n;
}, it = (r) => typeof r == "boolean", Bi = (r) => /^\w*$/.test(r), Mo = (r) => Hn(r.replace(/["|']|\]/g, "").split(/\.|\[/)), fe = (r, e, t) => {
  let n = -1;
  const i = Bi(e) ? [e] : Mo(e), s = i.length, a = s - 1;
  for (; ++n < s; ) {
    const o = i[n];
    let l = t;
    if (n !== a) {
      const c = r[o];
      l = Ce(c) || Array.isArray(c) ? c : isNaN(+i[n + 1]) ? {} : [];
    }
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    r[o] = l, r = r[o];
  }
  return r;
};
const yn = {
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
}, Lo = B.createContext(null), jt = () => B.useContext(Lo), Bf = (r) => {
  const { children: e, ...t } = r;
  return B.createElement(Lo.Provider, { value: t }, e);
};
var Io = (r, e, t, n = !0) => {
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
}, $e = (r) => Ce(r) && !Object.keys(r).length, Po = (r, e, t, n) => {
  t(r);
  const { name: i, ...s } = r;
  return $e(s) || Object.keys(s).length >= Object.keys(e).length || Object.keys(s).find((a) => e[a] === (!n || dt.all));
}, Rr = (r) => Array.isArray(r) ? r : [r], zo = (r, e, t) => !r || !e || r === e || Rr(r).some((n) => n && (t ? n === e : n.startsWith(e) || e.startsWith(n)));
function Hi(r) {
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
function Hf(r) {
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
  return d.current = i, Hi({
    disabled: n,
    next: (u) => l.current && zo(d.current, u.name, s) && Po(u, c.current, t._updateFormState) && o({
      ...t._formState,
      ...u
    }),
    subject: t._subjects.state
  }), B.useEffect(() => (l.current = !0, c.current.isValid && t._updateValid(!0), () => {
    l.current = !1;
  }), [t]), B.useMemo(() => Io(a, t, c.current, !1), [a, t]);
}
var wt = (r) => typeof r == "string", Fo = (r, e, t, n, i) => wt(r) ? (n && e.watch.add(r), F(t, r, i)) : Array.isArray(r) ? r.map((s) => (n && e.watch.add(s), F(t, s))) : (n && (e.watchAll = !0), t);
function Vf(r) {
  const e = jt(), { control: t = e.control, name: n, defaultValue: i, disabled: s, exact: a } = r || {}, o = B.useRef(n);
  o.current = n, Hi({
    disabled: s,
    subject: t._subjects.values,
    next: (d) => {
      zo(o.current, d.name, a) && c(je(Fo(o.current, t._names, d.values || t._formValues, !1, i)));
    }
  });
  const [l, c] = B.useState(t._getWatch(n, i));
  return B.useEffect(() => t._removeUnmounted()), l;
}
function jf(r) {
  const e = jt(), { name: t, disabled: n, control: i = e.control, shouldUnregister: s } = r, a = Oo(i._names.array, t), o = Vf({
    control: i,
    name: t,
    defaultValue: F(i._formValues, t, F(i._defaultValues, t, r.defaultValue)),
    exact: !0
  }), l = Hf({
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
      get: () => !!F(l.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!F(l.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!F(l.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!F(l.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => F(l.errors, t)
    }
  }), [l, t]), u = B.useMemo(() => ({
    name: t,
    value: o,
    ...it(n) || l.disabled ? { disabled: l.disabled || n } : {},
    onChange: (h) => c.current.onChange({
      target: {
        value: To(h),
        name: t
      },
      type: yn.CHANGE
    }),
    onBlur: () => c.current.onBlur({
      target: {
        value: F(i._formValues, t),
        name: t
      },
      type: yn.BLUR
    }),
    ref: (h) => {
      const m = F(i._fields, t);
      m && h && (m._f.ref = {
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
    const h = i._options.shouldUnregister || s, m = (g, y) => {
      const S = F(i._fields, g);
      S && S._f && (S._f.mount = y);
    };
    if (m(t, !0), h) {
      const g = je(F(i._options.defaultValues, t));
      fe(i._defaultValues, t, g), _e(F(i._formValues, t)) && fe(i._formValues, t, g);
    }
    return !a && i.register(t), () => {
      (a ? h && !i._state.action : h) ? i.unregister(t) : m(t, !1);
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
const $f = (r) => r.render(jf(r));
var Bo = (r, e, t, n, i) => e ? {
  ...t[r],
  types: {
    ...t[r] && t[r].types ? t[r].types : {},
    [n]: i || !0
  }
} : {}, ks = (r) => ({
  isOnSubmit: !r || r === dt.onSubmit,
  isOnBlur: r === dt.onBlur,
  isOnChange: r === dt.onChange,
  isOnAll: r === dt.all,
  isOnTouch: r === dt.onTouched
}), Ss = (r, e, t) => !t && (e.watchAll || e.watch.has(r) || [...e.watch].some((n) => r.startsWith(n) && /^\.\w+/.test(r.slice(n.length))));
const Ar = (r, e, t, n) => {
  for (const i of t || Object.keys(r)) {
    const s = F(r, i);
    if (s) {
      const { _f: a, ...o } = s;
      if (a) {
        if (a.refs && a.refs[0] && e(a.refs[0], i) && !n)
          return !0;
        if (a.ref && e(a.ref, a.name) && !n)
          return !0;
        if (Ar(o, e))
          break;
      } else if (Ce(o) && Ar(o, e))
        break;
    }
  }
};
var Wf = (r, e, t) => {
  const n = Rr(F(r, t));
  return fe(n, "root", e[t]), fe(r, t, n), r;
}, Vi = (r) => r.type === "file", xt = (r) => typeof r == "function", bn = (r) => {
  if (!Fi)
    return !1;
  const e = r ? r.ownerDocument : 0;
  return r instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, tn = (r) => wt(r), ji = (r) => r.type === "radio", xn = (r) => r instanceof RegExp;
const Ds = {
  value: !1,
  isValid: !1
}, Ns = { value: !0, isValid: !0 };
var Ho = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const e = r.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: e, isValid: !!e.length };
    }
    return r[0].checked && !r[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      r[0].attributes && !_e(r[0].attributes.value) ? _e(r[0].value) || r[0].value === "" ? Ns : { value: r[0].value, isValid: !0 } : Ns
    ) : Ds;
  }
  return Ds;
};
const Rs = {
  isValid: !1,
  value: null
};
var Vo = (r) => Array.isArray(r) ? r.reduce((e, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : e, Rs) : Rs;
function As(r, e, t = "validate") {
  if (tn(r) || Array.isArray(r) && r.every(tn) || it(r) && !r)
    return {
      type: t,
      message: tn(r) ? r : "",
      ref: e
    };
}
var Jt = (r) => Ce(r) && !xn(r) ? r : {
  value: r,
  message: ""
}, Ts = async (r, e, t, n, i, s) => {
  const { ref: a, refs: o, required: l, maxLength: c, minLength: d, min: u, max: h, pattern: m, validate: g, name: y, valueAsNumber: S, mount: _ } = r._f, R = F(t, y);
  if (!_ || e.has(y))
    return {};
  const D = o ? o[0] : a, O = (C) => {
    i && D.reportValidity && (D.setCustomValidity(it(C) ? "" : C || ""), D.reportValidity());
  }, b = {}, k = ji(a), E = Gr(a), T = k || E, $ = (S || Vi(a)) && _e(a.value) && _e(R) || bn(a) && a.value === "" || R === "" || Array.isArray(R) && !R.length, z = Bo.bind(null, y, n, b), N = (C, A, V, ie = St.maxLength, de = St.minLength) => {
    const se = C ? A : V;
    b[y] = {
      type: C ? ie : de,
      message: se,
      ref: a,
      ...z(C ? ie : de, se)
    };
  };
  if (s ? !Array.isArray(R) || !R.length : l && (!T && ($ || Be(R)) || it(R) && !R || E && !Ho(o).isValid || k && !Vo(o).isValid)) {
    const { value: C, message: A } = tn(l) ? { value: !!l, message: l } : Jt(l);
    if (C && (b[y] = {
      type: St.required,
      message: A,
      ref: D,
      ...z(St.required, A)
    }, !n))
      return O(A), b;
  }
  if (!$ && (!Be(u) || !Be(h))) {
    let C, A;
    const V = Jt(h), ie = Jt(u);
    if (!Be(R) && !isNaN(R)) {
      const de = a.valueAsNumber || R && +R;
      Be(V.value) || (C = de > V.value), Be(ie.value) || (A = de < ie.value);
    } else {
      const de = a.valueAsDate || new Date(R), se = (xe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + xe), ve = a.type == "time", X = a.type == "week";
      wt(V.value) && R && (C = ve ? se(R) > se(V.value) : X ? R > V.value : de > new Date(V.value)), wt(ie.value) && R && (A = ve ? se(R) < se(ie.value) : X ? R < ie.value : de < new Date(ie.value));
    }
    if ((C || A) && (N(!!C, V.message, ie.message, St.max, St.min), !n))
      return O(b[y].message), b;
  }
  if ((c || d) && !$ && (wt(R) || s && Array.isArray(R))) {
    const C = Jt(c), A = Jt(d), V = !Be(C.value) && R.length > +C.value, ie = !Be(A.value) && R.length < +A.value;
    if ((V || ie) && (N(V, C.message, A.message), !n))
      return O(b[y].message), b;
  }
  if (m && !$ && wt(R)) {
    const { value: C, message: A } = Jt(m);
    if (xn(C) && !R.match(C) && (b[y] = {
      type: St.pattern,
      message: A,
      ref: a,
      ...z(St.pattern, A)
    }, !n))
      return O(A), b;
  }
  if (g) {
    if (xt(g)) {
      const C = await g(R, t), A = As(C, D);
      if (A && (b[y] = {
        ...A,
        ...z(St.validate, A.message)
      }, !n))
        return O(A.message), b;
    } else if (Ce(g)) {
      let C = {};
      for (const A in g) {
        if (!$e(C) && !n)
          break;
        const V = As(await g[A](R, t), D, A);
        V && (C = {
          ...V,
          ...z(A, V.message)
        }, O(V.message), n && (b[y] = C));
      }
      if (!$e(C) && (b[y] = {
        ref: D,
        ...C
      }, !n))
        return b;
    }
  }
  return O(!0), b;
};
function Gf(r, e) {
  const t = e.slice(0, -1).length;
  let n = 0;
  for (; n < t; )
    r = _e(r) ? n++ : r[e[n++]];
  return r;
}
function Uf(r) {
  for (const e in r)
    if (r.hasOwnProperty(e) && !_e(r[e]))
      return !1;
  return !0;
}
function Se(r, e) {
  const t = Array.isArray(e) ? e : Bi(e) ? [e] : Mo(e), n = t.length === 1 ? r : Gf(r, t), i = t.length - 1, s = t[i];
  return n && delete n[s], i !== 0 && (Ce(n) && $e(n) || Array.isArray(n) && Uf(n)) && Se(r, t.slice(0, -1)), r;
}
var Jn = () => {
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
}, fi = (r) => Be(r) || !Ao(r);
function It(r, e) {
  if (fi(r) || fi(e))
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
      if (Gt(s) && Gt(a) || Ce(s) && Ce(a) || Array.isArray(s) && Array.isArray(a) ? !It(s, a) : s !== a)
        return !1;
    }
  }
  return !0;
}
var jo = (r) => r.type === "select-multiple", Zf = (r) => ji(r) || Gr(r), Qn = (r) => bn(r) && r.isConnected, $o = (r) => {
  for (const e in r)
    if (xt(r[e]))
      return !0;
  return !1;
};
function wn(r, e = {}) {
  const t = Array.isArray(r);
  if (Ce(r) || t)
    for (const n in r)
      Array.isArray(r[n]) || Ce(r[n]) && !$o(r[n]) ? (e[n] = Array.isArray(r[n]) ? [] : {}, wn(r[n], e[n])) : Be(r[n]) || (e[n] = !0);
  return e;
}
function Wo(r, e, t) {
  const n = Array.isArray(r);
  if (Ce(r) || n)
    for (const i in r)
      Array.isArray(r[i]) || Ce(r[i]) && !$o(r[i]) ? _e(e) || fi(t[i]) ? t[i] = Array.isArray(r[i]) ? wn(r[i], []) : { ...wn(r[i]) } : Wo(r[i], Be(e) ? {} : e[i], t[i]) : t[i] = !It(r[i], e[i]);
  return t;
}
var xr = (r, e) => Wo(r, e, wn(e)), Go = (r, { valueAsNumber: e, valueAsDate: t, setValueAs: n }) => _e(r) ? r : e ? r === "" ? NaN : r && +r : t && wt(r) ? new Date(r) : n ? n(r) : r;
function ei(r) {
  const e = r.ref;
  return Vi(e) ? e.files : ji(e) ? Vo(r.refs).value : jo(e) ? [...e.selectedOptions].map(({ value: t }) => t) : Gr(e) ? Ho(r.refs).value : Go(_e(e.value) ? r.ref.value : e.value, r);
}
var qf = (r, e, t, n) => {
  const i = {};
  for (const s of r) {
    const a = F(e, s);
    a && fe(i, s, a._f);
  }
  return {
    criteriaMode: t,
    names: [...r],
    fields: i,
    shouldUseNativeValidation: n
  };
}, wr = (r) => _e(r) ? r : xn(r) ? r.source : Ce(r) ? xn(r.value) ? r.value.source : r.value : r;
const Os = "AsyncFunction";
var Kf = (r) => !!r && !!r.validate && !!(xt(r.validate) && r.validate.constructor.name === Os || Ce(r.validate) && Object.values(r.validate).find((e) => e.constructor.name === Os)), Yf = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function Ms(r, e, t) {
  const n = F(r, t);
  if (n || Bi(t))
    return {
      error: n,
      name: t
    };
  const i = t.split(".");
  for (; i.length; ) {
    const s = i.join("."), a = F(e, s), o = F(r, s);
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
var Xf = (r, e, t, n, i) => i.isOnAll ? !1 : !t && i.isOnTouch ? !(e || r) : (t ? n.isOnBlur : i.isOnBlur) ? !r : (t ? n.isOnChange : i.isOnChange) ? r : !0, Jf = (r, e) => !Hn(F(r, e)).length && Se(r, e);
const Qf = {
  mode: dt.onSubmit,
  reValidateMode: dt.onChange,
  shouldFocusError: !0
};
function em(r = {}) {
  let e = {
    ...Qf,
    ...r
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: xt(e.defaultValues),
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
  }, n = {}, i = Ce(e.defaultValues) || Ce(e.values) ? je(e.defaultValues || e.values) || {} : {}, s = e.shouldUnregister ? {} : je(i), a = {
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
    values: Jn(),
    array: Jn(),
    state: Jn()
  }, h = ks(e.mode), m = ks(e.reValidateMode), g = e.criteriaMode === dt.all, y = (p) => (v) => {
    clearTimeout(c), c = setTimeout(p, v);
  }, S = async (p) => {
    if (!e.disabled && (d.isValid || p)) {
      const v = e.resolver ? $e((await T()).errors) : await z(n, !0);
      v !== t.isValid && u.state.next({
        isValid: v
      });
    }
  }, _ = (p, v) => {
    !e.disabled && (d.isValidating || d.validatingFields) && ((p || Array.from(o.mount)).forEach((w) => {
      w && (v ? fe(t.validatingFields, w, v) : Se(t.validatingFields, w));
    }), u.state.next({
      validatingFields: t.validatingFields,
      isValidating: !$e(t.validatingFields)
    }));
  }, R = (p, v = [], w, L, I = !0, M = !0) => {
    if (L && w && !e.disabled) {
      if (a.action = !0, M && Array.isArray(F(n, p))) {
        const W = w(F(n, p), L.argA, L.argB);
        I && fe(n, p, W);
      }
      if (M && Array.isArray(F(t.errors, p))) {
        const W = w(F(t.errors, p), L.argA, L.argB);
        I && fe(t.errors, p, W), Jf(t.errors, p);
      }
      if (d.touchedFields && M && Array.isArray(F(t.touchedFields, p))) {
        const W = w(F(t.touchedFields, p), L.argA, L.argB);
        I && fe(t.touchedFields, p, W);
      }
      d.dirtyFields && (t.dirtyFields = xr(i, s)), u.state.next({
        name: p,
        isDirty: C(p, v),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      fe(s, p, v);
  }, D = (p, v) => {
    fe(t.errors, p, v), u.state.next({
      errors: t.errors
    });
  }, O = (p) => {
    t.errors = p, u.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, b = (p, v, w, L) => {
    const I = F(n, p);
    if (I) {
      const M = F(s, p, _e(w) ? F(i, p) : w);
      _e(M) || L && L.defaultChecked || v ? fe(s, p, v ? M : ei(I._f)) : ie(p, M), a.mount && S();
    }
  }, k = (p, v, w, L, I) => {
    let M = !1, W = !1;
    const ee = {
      name: p
    };
    if (!e.disabled) {
      const be = !!(F(n, p) && F(n, p)._f && F(n, p)._f.disabled);
      if (!w || L) {
        d.isDirty && (W = t.isDirty, t.isDirty = ee.isDirty = C(), M = W !== ee.isDirty);
        const pe = be || It(F(i, p), v);
        W = !!(!be && F(t.dirtyFields, p)), pe || be ? Se(t.dirtyFields, p) : fe(t.dirtyFields, p, !0), ee.dirtyFields = t.dirtyFields, M = M || d.dirtyFields && W !== !pe;
      }
      if (w) {
        const pe = F(t.touchedFields, p);
        pe || (fe(t.touchedFields, p, w), ee.touchedFields = t.touchedFields, M = M || d.touchedFields && pe !== w);
      }
      M && I && u.state.next(ee);
    }
    return M ? ee : {};
  }, E = (p, v, w, L) => {
    const I = F(t.errors, p), M = d.isValid && it(v) && t.isValid !== v;
    if (e.delayError && w ? (l = y(() => D(p, w)), l(e.delayError)) : (clearTimeout(c), l = null, w ? fe(t.errors, p, w) : Se(t.errors, p)), (w ? !It(I, w) : I) || !$e(L) || M) {
      const W = {
        ...L,
        ...M && it(v) ? { isValid: v } : {},
        errors: t.errors,
        name: p
      };
      t = {
        ...t,
        ...W
      }, u.state.next(W);
    }
  }, T = async (p) => {
    _(p, !0);
    const v = await e.resolver(s, e.context, qf(p || o.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return _(p), v;
  }, $ = async (p) => {
    const { errors: v } = await T(p);
    if (p)
      for (const w of p) {
        const L = F(v, w);
        L ? fe(t.errors, w, L) : Se(t.errors, w);
      }
    else
      t.errors = v;
    return v;
  }, z = async (p, v, w = {
    valid: !0
  }) => {
    for (const L in p) {
      const I = p[L];
      if (I) {
        const { _f: M, ...W } = I;
        if (M) {
          const ee = o.array.has(M.name), be = I._f && Kf(I._f);
          be && d.validatingFields && _([L], !0);
          const pe = await Ts(I, o.disabled, s, g, e.shouldUseNativeValidation && !v, ee);
          if (be && d.validatingFields && _([L]), pe[M.name] && (w.valid = !1, v))
            break;
          !v && (F(pe, M.name) ? ee ? Wf(t.errors, pe, M.name) : fe(t.errors, M.name, pe[M.name]) : Se(t.errors, M.name));
        }
        !$e(W) && await z(W, v, w);
      }
    }
    return w.valid;
  }, N = () => {
    for (const p of o.unMount) {
      const v = F(n, p);
      v && (v._f.refs ? v._f.refs.every((w) => !Qn(w)) : !Qn(v._f.ref)) && Ee(p);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, C = (p, v) => !e.disabled && (p && v && fe(s, p, v), !It(Ge(), i)), A = (p, v, w) => Fo(p, o, {
    ...a.mount ? s : _e(v) ? i : wt(p) ? { [p]: v } : v
  }, w, v), V = (p) => Hn(F(a.mount ? s : i, p, e.shouldUnregister ? F(i, p, []) : [])), ie = (p, v, w = {}) => {
    const L = F(n, p);
    let I = v;
    if (L) {
      const M = L._f;
      M && (!M.disabled && fe(s, p, Go(v, M)), I = bn(M.ref) && Be(v) ? "" : v, jo(M.ref) ? [...M.ref.options].forEach((W) => W.selected = I.includes(W.value)) : M.refs ? Gr(M.ref) ? M.refs.length > 1 ? M.refs.forEach((W) => (!W.defaultChecked || !W.disabled) && (W.checked = Array.isArray(I) ? !!I.find((ee) => ee === W.value) : I === W.value)) : M.refs[0] && (M.refs[0].checked = !!I) : M.refs.forEach((W) => W.checked = W.value === I) : Vi(M.ref) ? M.ref.value = "" : (M.ref.value = I, M.ref.type || u.values.next({
        name: p,
        values: { ...s }
      })));
    }
    (w.shouldDirty || w.shouldTouch) && k(p, I, w.shouldTouch, w.shouldDirty, !0), w.shouldValidate && xe(p);
  }, de = (p, v, w) => {
    for (const L in v) {
      const I = v[L], M = `${p}.${L}`, W = F(n, M);
      (o.array.has(p) || Ce(I) || W && !W._f) && !Gt(I) ? de(M, I, w) : ie(M, I, w);
    }
  }, se = (p, v, w = {}) => {
    const L = F(n, p), I = o.array.has(p), M = je(v);
    fe(s, p, M), I ? (u.array.next({
      name: p,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && w.shouldDirty && u.state.next({
      name: p,
      dirtyFields: xr(i, s),
      isDirty: C(p, M)
    })) : L && !L._f && !Be(M) ? de(p, M, w) : ie(p, M, w), Ss(p, o) && u.state.next({ ...t }), u.values.next({
      name: a.mount ? p : void 0,
      values: { ...s }
    });
  }, ve = async (p) => {
    a.mount = !0;
    const v = p.target;
    let w = v.name, L = !0;
    const I = F(n, w), M = () => v.type ? ei(I._f) : To(p), W = (ee) => {
      L = Number.isNaN(ee) || Gt(ee) && isNaN(ee.getTime()) || It(ee, F(s, w, ee));
    };
    if (I) {
      let ee, be;
      const pe = M(), ze = p.type === yn.BLUR || p.type === yn.FOCUS_OUT, Wt = !Yf(I._f) && !e.resolver && !F(t.errors, w) && !I._f.deps || Xf(ze, F(t.touchedFields, w), t.isSubmitted, m, h), Kt = Ss(w, o, ze);
      fe(s, w, pe), ze ? (I._f.onBlur && I._f.onBlur(p), l && l(0)) : I._f.onChange && I._f.onChange(p);
      const et = k(w, pe, ze, !1), Ur = !$e(et) || Kt;
      if (!ze && u.values.next({
        name: w,
        type: p.type,
        values: { ...s }
      }), Wt)
        return d.isValid && (e.mode === "onBlur" && ze ? S() : ze || S()), Ur && u.state.next({ name: w, ...Kt ? {} : et });
      if (!ze && Kt && u.state.next({ ...t }), e.resolver) {
        const { errors: Zr } = await T([w]);
        if (W(pe), L) {
          const Wn = Ms(t.errors, n, w), Yt = Ms(Zr, n, Wn.name || w);
          ee = Yt.error, w = Yt.name, be = $e(Zr);
        }
      } else
        _([w], !0), ee = (await Ts(I, o.disabled, s, g, e.shouldUseNativeValidation))[w], _([w]), W(pe), L && (ee ? be = !1 : d.isValid && (be = await z(n, !0)));
      L && (I._f.deps && xe(I._f.deps), E(w, be, ee, et));
    }
  }, X = (p, v) => {
    if (F(t.errors, v) && p.focus)
      return p.focus(), 1;
  }, xe = async (p, v = {}) => {
    let w, L;
    const I = Rr(p);
    if (e.resolver) {
      const M = await $(_e(p) ? p : I);
      w = $e(M), L = p ? !I.some((W) => F(M, W)) : w;
    } else p ? (L = (await Promise.all(I.map(async (M) => {
      const W = F(n, M);
      return await z(W && W._f ? { [M]: W } : W);
    }))).every(Boolean), !(!L && !t.isValid) && S()) : L = w = await z(n);
    return u.state.next({
      ...!wt(p) || d.isValid && w !== t.isValid ? {} : { name: p },
      ...e.resolver || !p ? { isValid: w } : {},
      errors: t.errors
    }), v.shouldFocus && !L && Ar(n, X, p ? I : o.mount), L;
  }, Ge = (p) => {
    const v = {
      ...a.mount ? s : i
    };
    return _e(p) ? v : wt(p) ? F(v, p) : p.map((w) => F(v, w));
  }, ye = (p, v) => ({
    invalid: !!F((v || t).errors, p),
    isDirty: !!F((v || t).dirtyFields, p),
    error: F((v || t).errors, p),
    isValidating: !!F(t.validatingFields, p),
    isTouched: !!F((v || t).touchedFields, p)
  }), Pe = (p) => {
    p && Rr(p).forEach((v) => Se(t.errors, v)), u.state.next({
      errors: p ? t.errors : {}
    });
  }, Ne = (p, v, w) => {
    const L = (F(n, p, { _f: {} })._f || {}).ref, I = F(t.errors, p) || {}, { ref: M, message: W, type: ee, ...be } = I;
    fe(t.errors, p, {
      ...be,
      ...v,
      ref: L
    }), u.state.next({
      name: p,
      errors: t.errors,
      isValid: !1
    }), w && w.shouldFocus && L && L.focus && L.focus();
  }, Te = (p, v) => xt(p) ? u.values.subscribe({
    next: (w) => p(A(void 0, v), w)
  }) : A(p, v, !0), Ee = (p, v = {}) => {
    for (const w of p ? Rr(p) : o.mount)
      o.mount.delete(w), o.array.delete(w), v.keepValue || (Se(n, w), Se(s, w)), !v.keepError && Se(t.errors, w), !v.keepDirty && Se(t.dirtyFields, w), !v.keepTouched && Se(t.touchedFields, w), !v.keepIsValidating && Se(t.validatingFields, w), !e.shouldUnregister && !v.keepDefaultValue && Se(i, w);
    u.values.next({
      values: { ...s }
    }), u.state.next({
      ...t,
      ...v.keepDirty ? { isDirty: C() } : {}
    }), !v.keepIsValid && S();
  }, Ve = ({ disabled: p, name: v, field: w, fields: L }) => {
    (it(p) && a.mount || p || o.disabled.has(v)) && (p ? o.disabled.add(v) : o.disabled.delete(v), k(v, ei(w ? w._f : F(L, v)._f), !1, !1, !0));
  }, me = (p, v = {}) => {
    let w = F(n, p);
    const L = it(v.disabled) || it(e.disabled);
    return fe(n, p, {
      ...w || {},
      _f: {
        ...w && w._f ? w._f : { ref: { name: p } },
        name: p,
        mount: !0,
        ...v
      }
    }), o.mount.add(p), w ? Ve({
      field: w,
      disabled: it(v.disabled) ? v.disabled : e.disabled,
      name: p
    }) : b(p, !0, v.value), {
      ...L ? { disabled: v.disabled || e.disabled } : {},
      ...e.progressive ? {
        required: !!v.required,
        min: wr(v.min),
        max: wr(v.max),
        minLength: wr(v.minLength),
        maxLength: wr(v.maxLength),
        pattern: wr(v.pattern)
      } : {},
      name: p,
      onChange: ve,
      onBlur: ve,
      ref: (I) => {
        if (I) {
          me(p, v), w = F(n, p);
          const M = _e(I.value) && I.querySelectorAll && I.querySelectorAll("input,select,textarea")[0] || I, W = Zf(M), ee = w._f.refs || [];
          if (W ? ee.find((be) => be === M) : M === w._f.ref)
            return;
          fe(n, p, {
            _f: {
              ...w._f,
              ...W ? {
                refs: [
                  ...ee.filter(Qn),
                  M,
                  ...Array.isArray(F(i, p)) ? [{}] : []
                ],
                ref: { type: M.type, name: p }
              } : { ref: M }
            }
          }), b(p, !1, void 0, M);
        } else
          w = F(n, p, {}), w._f && (w._f.mount = !1), (e.shouldUnregister || v.shouldUnregister) && !(Oo(o.array, p) && a.action) && o.unMount.add(p);
      }
    };
  }, we = () => e.shouldFocusError && Ar(n, X, o.mount), ce = (p) => {
    it(p) && (u.state.next({ disabled: p }), Ar(n, (v, w) => {
      const L = F(n, w);
      L && (v.disabled = L._f.disabled || p, Array.isArray(L._f.refs) && L._f.refs.forEach((I) => {
        I.disabled = L._f.disabled || p;
      }));
    }, 0, !1));
  }, Qe = (p, v) => async (w) => {
    let L;
    w && (w.preventDefault && w.preventDefault(), w.persist && w.persist());
    let I = je(s);
    if (o.disabled.size)
      for (const M of o.disabled)
        fe(I, M, void 0);
    if (u.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: M, values: W } = await T();
      t.errors = M, I = W;
    } else
      await z(n);
    if (Se(t.errors, "root"), $e(t.errors)) {
      u.state.next({
        errors: {}
      });
      try {
        await p(I, w);
      } catch (M) {
        L = M;
      }
    } else
      v && await v({ ...t.errors }, w), we(), setTimeout(we);
    if (u.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: $e(t.errors) && !L,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), L)
      throw L;
  }, Oe = (p, v = {}) => {
    F(n, p) && (_e(v.defaultValue) ? se(p, je(F(i, p))) : (se(p, v.defaultValue), fe(i, p, je(v.defaultValue))), v.keepTouched || Se(t.touchedFields, p), v.keepDirty || (Se(t.dirtyFields, p), t.isDirty = v.defaultValue ? C(p, je(F(i, p))) : C()), v.keepError || (Se(t.errors, p), d.isValid && S()), u.state.next({ ...t }));
  }, Me = (p, v = {}) => {
    const w = p ? je(p) : i, L = je(w), I = $e(p), M = I ? i : L;
    if (v.keepDefaultValues || (i = w), !v.keepValues) {
      if (v.keepDirtyValues) {
        const W = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(xr(i, s))
        ]);
        for (const ee of Array.from(W))
          F(t.dirtyFields, ee) ? fe(M, ee, F(s, ee)) : se(ee, F(M, ee));
      } else {
        if (Fi && _e(p))
          for (const W of o.mount) {
            const ee = F(n, W);
            if (ee && ee._f) {
              const be = Array.isArray(ee._f.refs) ? ee._f.refs[0] : ee._f.ref;
              if (bn(be)) {
                const pe = be.closest("form");
                if (pe) {
                  pe.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      s = e.shouldUnregister ? v.keepDefaultValues ? je(i) : {} : je(M), u.array.next({
        values: { ...M }
      }), u.values.next({
        values: { ...M }
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
      isDirty: I ? !1 : v.keepDirty ? t.isDirty : !!(v.keepDefaultValues && !It(p, i)),
      isSubmitted: v.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: I ? {} : v.keepDirtyValues ? v.keepDefaultValues && s ? xr(i, s) : t.dirtyFields : v.keepDefaultValues && p ? xr(i, p) : v.keepDirty ? t.dirtyFields : {},
      touchedFields: v.keepTouched ? t.touchedFields : {},
      errors: v.keepErrors ? t.errors : {},
      isSubmitSuccessful: v.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Le = (p, v) => Me(xt(p) ? p(s) : p, v);
  return {
    control: {
      register: me,
      unregister: Ee,
      getFieldState: ye,
      handleSubmit: Qe,
      setError: Ne,
      _executeSchema: T,
      _getWatch: A,
      _getDirty: C,
      _updateValid: S,
      _removeUnmounted: N,
      _updateFieldArray: R,
      _updateDisabledField: Ve,
      _getFieldArray: V,
      _reset: Me,
      _resetDefaultValues: () => xt(e.defaultValues) && e.defaultValues().then((p) => {
        Le(p, e.resetOptions), u.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (p) => {
        t = {
          ...t,
          ...p
        };
      },
      _disableForm: ce,
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
      set _state(p) {
        a = p;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return o;
      },
      set _names(p) {
        o = p;
      },
      get _formState() {
        return t;
      },
      set _formState(p) {
        t = p;
      },
      get _options() {
        return e;
      },
      set _options(p) {
        e = {
          ...e,
          ...p
        };
      }
    },
    trigger: xe,
    register: me,
    handleSubmit: Qe,
    watch: Te,
    setValue: se,
    getValues: Ge,
    reset: Le,
    resetField: Oe,
    clearErrors: Pe,
    unregister: Ee,
    setError: Ne,
    setFocus: (p, v = {}) => {
      const w = F(n, p), L = w && w._f;
      if (L) {
        const I = L.refs ? L.refs[0] : L.ref;
        I.focus && (I.focus(), v.shouldSelect && xt(I.select) && I.select());
      }
    },
    getFieldState: ye
  };
}
function Uo(r = {}) {
  const e = B.useRef(void 0), t = B.useRef(void 0), [n, i] = B.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: xt(r.defaultValues),
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
    defaultValues: xt(r.defaultValues) ? void 0 : r.defaultValues
  });
  e.current || (e.current = {
    ...em(r),
    formState: n
  });
  const s = e.current.control;
  return s._options = r, Hi({
    subject: s._subjects.state,
    next: (a) => {
      Po(a, s._proxyFormState, s._updateFormState, !0) && i({ ...s._formState });
    }
  }), B.useEffect(() => s._disableForm(r.disabled), [s, r.disabled]), B.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const a = s._getDirty();
      a !== n.isDirty && s._subjects.state.next({
        isDirty: a
      });
    }
  }, [s, n.isDirty]), B.useEffect(() => {
    r.values && !It(r.values, t.current) ? (s._reset(r.values, s._options.resetOptions), t.current = r.values, i((a) => ({ ...a }))) : s._resetDefaultValues();
  }, [r.values, s]), B.useEffect(() => {
    r.errors && s._setErrors(r.errors);
  }, [r.errors, s]), B.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), B.useEffect(() => {
    r.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [r.shouldUnregister, s]), e.current.formState = Io(n, s), e.current;
}
var tm = "Label", Zo = at.forwardRef((r, e) => /* @__PURE__ */ f(
  Fl.label,
  {
    ...r,
    ref: e,
    onMouseDown: (t) => {
      t.target.closest("button, input, select, textarea") || (r.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
Zo.displayName = tm;
var qo = Zo;
const _n = at.forwardRef(({ className: r, ...e }, t) => f(qo, {
  ref: t,
  className: re("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", r),
  ...e
}));
_n.displayName = qo.displayName;
const Ko = Bf, Yo = at.createContext({}), Ls = ({ ...r }) => {
  const { formState: e } = jt();
  return f(Yo.Provider, {
    value: {
      name: r.name
    },
    children: f($f, {
      ...r,
      disabled: e.isSubmitting
    })
  });
}, Vn = () => {
  const r = at.useContext(Yo), e = at.useContext(Xo), { getFieldState: t, formState: n } = jt(), i = t(r.name, n);
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
}, Xo = at.createContext({}), Jo = at.forwardRef(({ className: r, ...e }, t) => {
  const n = at.useId();
  return f(Xo.Provider, {
    value: {
      id: n
    },
    children: f("div", {
      ref: t,
      className: re("space-y-2", r),
      ...e
    })
  });
});
Jo.displayName = "FormItem";
const rm = at.forwardRef(({ className: r, ...e }, t) => {
  const { error: n, formItemId: i } = Vn();
  return f(_n, {
    ref: t,
    className: re(n && "text-f1-foreground-critical", r),
    htmlFor: i,
    ...e
  });
});
rm.displayName = "FormLabel";
const Qo = at.forwardRef(({ ...r }, e) => {
  const { error: t, formItemId: n, formDescriptionId: i, formMessageId: s } = Vn();
  return f(Bl, {
    ref: e,
    id: n,
    "aria-describedby": t ? `${i} ${s}` : `${i}`,
    "aria-invalid": !!t,
    ...r
  });
});
Qo.displayName = "FormControl";
const el = at.forwardRef(({ className: r, ...e }, t) => {
  const { formDescriptionId: n } = Vn();
  return f("p", {
    ref: t,
    id: n,
    className: re("text-base text-f1-foreground-secondary", r),
    ...e
  });
});
el.displayName = "FormDescription";
const tl = at.forwardRef(({ className: r, children: e, fallback: t, ...n }, i) => {
  const { error: s, formMessageId: a } = Vn(), { forms: o } = ur(), l = s ? s.message ?? t ?? o.validation.invalidType : e;
  return l ? j("div", {
    ref: i,
    id: a,
    className: re("flex gap-1", r),
    ...n,
    children: [f(Rn, {
      icon: da,
      color: "critical"
    }), f("span", {
      className: "text-base font-medium text-f1-foreground-critical",
      children: l
    })]
  }) : null;
});
tl.displayName = "FormMessage";
function nm({ isActionBar: r, isDirty: e, actionBarStatus: t, hasErrors: n, errorCount: i, resolvedActionBarLabel: s, centerActionBarInFrameContent: a, submitLabel: o, submitIcon: l, discardableChanges: c, discardLabel: d, discardIcon: u, issuesOneLabel: h, issuesOtherLabel: m, onSubmit: g, onDiscard: y, goToPreviousError: S, goToNextError: _ }) {
  return r ? f(ss, {
    isOpen: e || t === "loading" || t === "success",
    variant: "light",
    status: n ? void 0 : t,
    centerInFrameContent: a,
    label: s,
    leftContent: n ? j("div", {
      className: "flex items-center gap-3",
      children: [j("div", {
        className: "flex items-center gap-0.5",
        children: [f(Rn, {
          icon: da,
          size: "md",
          color: "critical"
        }), f("span", {
          className: "font-medium text-f1-foreground-critical",
          children: i === 1 ? h.replace("{{count}}", String(i)) : m.replace("{{count}}", String(i))
        })]
      }), i > 1 && j("div", {
        className: "flex items-center gap-2",
        children: [f(Xe, {
          icon: Hl,
          onClick: S,
          variant: "outline",
          label: "Go to previous error",
          hideLabel: !0
        }), f(Xe, {
          icon: Vl,
          onClick: _,
          variant: "outline",
          label: "Go to next error",
          hideLabel: !0
        })]
      })]
    }) : void 0,
    primaryActions: [{
      label: o,
      icon: l,
      onClick: g,
      disabled: n
    }],
    secondaryActions: c ? [{
      label: d,
      icon: u,
      onClick: y
    }] : []
  }) : f(ss, {
    isOpen: t === "loading" || t === "success",
    variant: "light",
    status: t,
    label: s
  });
}
const $i = "gap-4", rl = "mt-6", nl = "max-w-[720px]", $t = "md", Wi = Ct(null);
function il() {
  const r = ht(Wi);
  if (!r)
    throw new Error("useF0FormContext must be used within a F0Form");
  return r;
}
function Zt(r, e, t) {
  const n = ["forms", r];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function ge(r, e) {
  return r._def?.typeName === e;
}
function Gi(r) {
  return ge(r, "ZodEffects") ? r._def.schema : r;
}
const sl = /* @__PURE__ */ new WeakMap();
function xg(r, e) {
  sl.set(r, e);
  const t = r;
  return t._f0Config = e, t._innerSchema = r, t;
}
function Ui(r) {
  const e = r;
  return e._f0Config ? e._f0Config : sl.get(r);
}
function wg(r) {
  return Ui(r) !== void 0;
}
function pt(r) {
  let e = r;
  for (; ge(e, "ZodOptional") || ge(e, "ZodNullable") || ge(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function im(r, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = pt(r);
  return ge(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : ge(t, "ZodNumber") ? "number" : ge(t, "ZodBoolean") ? "switch" : ge(t, "ZodDate") ? "date" : ge(t, "ZodEnum") || ge(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : ge(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function al(r) {
  return ge(r, "ZodOptional") || ge(r, "ZodNullable") || ge(r, "ZodDefault") && al(r._def.innerType);
}
const sm = /* @__PURE__ */ new Set([
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
function am(r) {
  const e = pt(r);
  return ge(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "min" ? (n.value ?? 0) >= 1 : sm.has(n.kind)) : !1;
}
function ol(r) {
  if (al(r))
    return !1;
  const e = pt(r);
  return ge(e, "ZodString") ? am(r) : !0;
}
function om(r, e) {
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
function jn(r, e) {
  return typeof r == "function" ? r({ values: e }) : om(r, e);
}
function Zi(r, e) {
  return r === void 0 ? !1 : typeof r == "function" ? r({ values: e }) : r;
}
function Qt(r, e) {
  if (r !== void 0)
    return typeof r == "function" ? r({ values: e }) : r;
}
function lm(r) {
  const e = pt(r);
  return ge(e, "ZodLiteral") && e._def.value === !0;
}
function cm({ field: r, formField: e }) {
  const t = r.validation && lm(r.validation);
  return f(jl, {
    ...e,
    title: r.label,
    disabled: r.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function dm({ field: r, formField: e, error: t, isValidating: n, required: i }) {
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
  return f(Br, {
    children: r.render(s)
  });
}
function um(r, e) {
  if (r)
    return {
      value: {
        from: r,
        to: r
      },
      granularity: e?.[0] ?? "day"
    };
}
function hm(r) {
  return r?.value?.from;
}
function ll({ field: r, formField: e, error: t, loading: n }) {
  const i = U(() => um(e.value ?? void 0, r.granularities), [e.value, r.granularities]), s = (a) => {
    e.onChange(hm(a) ?? null);
  };
  return f(ka, {
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
function mi(r) {
  if (!r || !(r instanceof Date) || isNaN(r.getTime())) return "";
  const e = String(r.getHours()).padStart(2, "0"), t = String(r.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function fm(r) {
  if (!r) return;
  const [e, t] = r.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const n = /* @__PURE__ */ new Date();
  return n.setHours(e, t, 0, 0), n;
}
function ti(r, e) {
  if (!r) return;
  const t = new Date(r);
  if (e) {
    const [n, i, s] = e.split(":").map(Number);
    t.setHours(n ?? 0, i ?? 0, s ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function cl({ field: r, formField: e, error: t, loading: n }) {
  const i = U(() => mi(e.value ?? void 0), [e.value]), s = le((a) => {
    if (!a) {
      e.onChange(null);
      return;
    }
    const o = fm(a);
    e.onChange(o);
  }, [e]);
  return f(ua, {
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
    icon: $l
  });
}
function mm({ field: r, formField: e, error: t, loading: n }) {
  const i = e.value ?? void 0, s = U(() => mi(i), [i]), a = le((h) => {
    if (!h) {
      e.onChange(null);
      return;
    }
    e.onChange(ti(h, s));
  }, [e, s]), o = le((h) => {
    if (!h) {
      if (i) {
        const g = new Date(i);
        g.setHours(0, 0, 0, 0), e.onChange(g);
      }
      return;
    }
    const m = mi(h);
    if (!i) {
      const g = /* @__PURE__ */ new Date();
      g.setHours(0, 0, 0, 0), e.onChange(ti(g, m));
      return;
    }
    e.onChange(ti(i, m));
  }, [e, i]), l = U(() => ({
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
  }), [r]), c = U(() => ({
    ...e,
    value: i,
    onChange: a
  }), [e, i, a]), d = U(() => ({
    id: `${r.id}-time`,
    type: "time",
    label: "Time",
    disabled: r.disabled,
    clearable: !1
  }), [r.id, r.disabled]), u = U(() => ({
    ...e,
    value: i,
    onChange: o
  }), [e, i, o]);
  return j("div", {
    className: "flex gap-2",
    children: [f("div", {
      className: "flex-1",
      children: f(ll, {
        field: l,
        formField: c,
        error: t,
        loading: n
      })
    }), f("div", {
      className: "w-32",
      children: f(cl, {
        field: d,
        formField: u,
        error: t,
        loading: n
      })
    })]
  });
}
function pm(r) {
  if (!(!r?.from || !r?.to))
    return {
      value: {
        from: r.from,
        to: r.to
      },
      granularity: "range"
    };
}
function gm(r) {
  if (!(!r?.value?.from || !r?.value?.to))
    return {
      from: r.value.from,
      to: r.value.to
    };
}
function vm({ field: r, formField: e, error: t, loading: n }) {
  const i = U(() => pm(e.value ?? void 0), [e.value]), s = (o) => {
    e.onChange(gm(o) ?? null);
  }, a = r.fromLabel && r.toLabel ? `${r.label} (${r.fromLabel} - ${r.toLabel})` : r.label;
  return f(ka, {
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
function ym({ field: r, formField: e, error: t, loading: n }) {
  return f(ed, {
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
function bm({ field: r, formField: e }) {
  const t = e.value;
  return f(td, {
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
function xm({ field: r, formField: e, error: t, loading: n }) {
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
  return r.multiple ? f(nr, {
    ...i,
    multiple: !0,
    clearable: r.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : r.clearable ? f(nr, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : f(nr, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function wm({ field: r, formField: e, error: t, loading: n }) {
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
  return r.multiple ? f(nr, {
    ...i,
    multiple: !0,
    clearable: r.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : r.clearable ? f(nr, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : f(nr, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function _m(r) {
  const { field: e } = r;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? f(wm, {
    ...r,
    field: e
  }) : "options" in e && e.options !== void 0 ? f(xm, {
    ...r,
    field: e
  }) : null;
}
function Cm(r) {
  const e = pt(r);
  return ge(e, "ZodLiteral") && e._def.value === !0;
}
function Em({ field: r, formField: e }) {
  const t = r.validation && Cm(r.validation);
  return f(Wl, {
    ...e,
    title: r.label,
    disabled: r.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
const km = {
  email: "name@example.com"
}, Sm = {
  url: Ul,
  email: Gl
};
function Dm({ field: r, formField: e, error: t, loading: n }) {
  const i = r.inputType ?? "text", s = r.placeholder ?? km[i] ?? void 0, a = Sm[i];
  return f(ua, {
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
function Nm({ field: r, formField: e, error: t, loading: n }) {
  return f(rd, {
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
function Rm({ field: r, formField: e, fieldState: t, isSubmitting: n, isRequired: i, values: s }) {
  const a = !!t.error, { isValidating: o } = t, l = Zi(r.disabled, s) || n, c = {
    error: a,
    loading: o
  };
  switch (r.type) {
    case "text":
      return f(Dm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "number":
      return f(ym, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "textarea":
      return f(Nm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "select":
      return f(_m, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "checkbox":
      return f(cm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e
      });
    case "switch":
      return f(Em, {
        field: {
          ...r,
          disabled: l
        },
        formField: e
      });
    case "date":
      return f(ll, {
        field: {
          ...r,
          disabled: l,
          minDate: Qt(r.minDate, s),
          maxDate: Qt(r.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "time":
      return f(cl, {
        field: {
          ...r,
          disabled: l,
          minDate: Qt(r.minDate, s),
          maxDate: Qt(r.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "datetime":
      return f(mm, {
        field: {
          ...r,
          disabled: l,
          minDate: Qt(r.minDate, s),
          maxDate: Qt(r.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "daterange":
      return f(vm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "richtext":
      return f(bm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e
      });
    case "custom":
      return f(dm, {
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
function $n({ field: r, sectionId: e }) {
  const t = jt(), n = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = il(), { forms: a } = ur(), o = Zi(r.disabled, n), l = K(o);
  J(() => {
    const m = l.current;
    if (l.current = o, !m && o && r.resetOnDisable) {
      const g = t.formState.defaultValues?.[r.id];
      t.setValue(r.id, g, {
        shouldValidate: !1
      });
    }
  }, [o, r.resetOnDisable, r.id, t]);
  const c = !r.renderIf || jn(r.renderIf, n), d = r.type !== "checkbox" && r.type !== "custom", u = r.validation && ol(r.validation), h = Zt(s, e, r.id);
  return c ? f(Ls, {
    control: t.control,
    name: r.id,
    render: ({ field: m, fieldState: g }) => j(Jo, {
      id: h,
      className: "scroll-mt-4",
      children: [d && j("label", {
        htmlFor: r.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [r.label, u && f("span", {
          className: "ml-0.5 text-f1-foreground-critical",
          children: "*"
        })]
      }), f(Qo, {
        children: Rm({
          field: r,
          formField: m,
          fieldState: g,
          isSubmitting: i,
          isRequired: u,
          values: n
        })
      }), r.helpText && f(el, {
        children: r.helpText
      }), f(tl, {
        fallback: u ? a.validation.required : a.validation.invalidType
      })]
    })
  }) : f(Ls, {
    control: t.control,
    name: r.id,
    render: () => f("span", {
      className: "hidden",
      "aria-hidden": "true"
    })
  });
}
function qi({ row: r, sectionId: e }) {
  return f("div", {
    className: `flex xs:flex-row flex-col ${$i} [&>*]:flex-1`,
    children: r.fields.map((t) => f($n, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function Am(r) {
  const e = pt(r);
  return ge(e, "ZodLiteral") && e._def.value === !0;
}
function Ki({ fields: r }) {
  const e = jt(), { watch: t, setValue: n } = e, { isSubmitting: i } = e.formState, s = t(), a = U(() => r.filter((h) => !h.renderIf || jn(h.renderIf, s)), [r, s]), o = U(() => Object.fromEntries(a.map((h) => [h.id, Zi(h.disabled, s) || i])), [a, i, s]), l = K({});
  J(() => {
    const h = l.current, m = e.formState.defaultValues ?? {};
    for (const g of a) {
      if (!(g.id in h))
        continue;
      const y = h[g.id], S = o[g.id] ?? !1;
      if (!y && S && g.resetOnDisable) {
        const _ = m[g.id] ?? !1;
        n(g.id, _, {
          shouldValidate: !1
        });
      }
    }
    l.current = {
      ...o
    };
  }, [o, a, e, n]);
  const c = U(() => a.map((h) => ({
    value: h.id,
    title: h.label,
    description: h.helpText,
    disabled: o[h.id] ?? !1,
    required: !!(h.validation && Am(h.validation))
  })), [a, o]), d = U(() => a.filter((h) => s[h.id]).map((h) => h.id), [a, s]);
  return a.length === 0 ? null : f(nd, {
    multiple: !0,
    isToggle: !0,
    grouped: !0,
    items: c,
    value: d,
    onChange: (h) => {
      for (const m of a) {
        const g = h.includes(m.id), y = !!s[m.id];
        g !== y && n(m.id, g, {
          shouldValidate: !0,
          shouldDirty: !0
        });
      }
    }
  });
}
const Is = (r, e, t) => {
  if (r && "reportValidity" in r) {
    const n = F(t, e);
    r.setCustomValidity(n && n.message || ""), r.reportValidity();
  }
}, dl = (r, e) => {
  for (const t in e.fields) {
    const n = e.fields[t];
    n && n.ref && "reportValidity" in n.ref ? Is(n.ref, t, r) : n.refs && n.refs.forEach((i) => Is(i, t, r));
  }
}, Tm = (r, e) => {
  e.shouldUseNativeValidation && dl(r, e);
  const t = {};
  for (const n in r) {
    const i = F(e.fields, n), s = Object.assign(r[n] || {}, { ref: i && i.ref });
    if (Om(e.names || Object.keys(r), n)) {
      const a = Object.assign({}, F(t, n));
      fe(a, "root", s), fe(t, n, a);
    } else fe(t, n, s);
  }
  return t;
}, Om = (r, e) => r.some((t) => t.startsWith(e + "."));
var Mm = function(r, e) {
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
      t[a] = Bo(a, e, t, i, c ? [].concat(c, n.message) : n.message);
    }
    r.shift();
  }
  return t;
}, Lm = function(r, e, t) {
  return t === void 0 && (t = {}), function(n, i, s) {
    try {
      return Promise.resolve((function(a, o) {
        try {
          var l = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(c) {
            return s.shouldUseNativeValidation && dl({}, s), { errors: {}, values: t.raw ? n : c };
          });
        } catch (c) {
          return o(c);
        }
        return l && l.then ? l.then(void 0, o) : l;
      })(0, function(a) {
        if ((function(o) {
          return Array.isArray(o?.errors);
        })(a)) return { values: {}, errors: Tm(Mm(a.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}, he;
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
})(he || (he = {}));
var Ps;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Ps || (Ps = {}));
const G = he.arrayToEnum([
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
]), Lt = (r) => {
  switch (typeof r) {
    case "undefined":
      return G.undefined;
    case "string":
      return G.string;
    case "number":
      return Number.isNaN(r) ? G.nan : G.number;
    case "boolean":
      return G.boolean;
    case "function":
      return G.function;
    case "bigint":
      return G.bigint;
    case "symbol":
      return G.symbol;
    case "object":
      return Array.isArray(r) ? G.array : r === null ? G.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? G.promise : typeof Map < "u" && r instanceof Map ? G.map : typeof Set < "u" && r instanceof Set ? G.set : typeof Date < "u" && r instanceof Date ? G.date : G.object;
    default:
      return G.unknown;
  }
}, P = he.arrayToEnum([
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
class Nt extends Error {
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
    if (!(e instanceof Nt))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, he.jsonStringifyReplacer, 2);
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
Nt.create = (r) => new Nt(r);
const pi = (r, e) => {
  let t;
  switch (r.code) {
    case P.invalid_type:
      r.received === G.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case P.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, he.jsonStringifyReplacer)}`;
      break;
    case P.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${he.joinValues(r.keys, ", ")}`;
      break;
    case P.invalid_union:
      t = "Invalid input";
      break;
    case P.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${he.joinValues(r.options)}`;
      break;
    case P.invalid_enum_value:
      t = `Invalid enum value. Expected ${he.joinValues(r.options)}, received '${r.received}'`;
      break;
    case P.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case P.invalid_return_type:
      t = "Invalid function return type";
      break;
    case P.invalid_date:
      t = "Invalid date";
      break;
    case P.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : he.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case P.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "bigint" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case P.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case P.custom:
      t = "Invalid input";
      break;
    case P.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case P.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case P.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, he.assertNever(r);
  }
  return { message: t };
};
let Im = pi;
function Pm() {
  return Im;
}
const zm = (r) => {
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
  const t = Pm(), n = zm({
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
      t === pi ? void 0 : pi
      // then global default map
    ].filter((i) => !!i)
  });
  r.common.issues.push(n);
}
class Je {
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
        return te;
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
    return Je.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const i of t) {
      const { key: s, value: a } = i;
      if (s.status === "aborted" || a.status === "aborted")
        return te;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (n[s.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const te = Object.freeze({
  status: "aborted"
}), _r = (r) => ({ status: "dirty", value: r }), lt = (r) => ({ status: "valid", value: r }), zs = (r) => r.status === "aborted", Fs = (r) => r.status === "dirty", or = (r) => r.status === "valid", Cn = (r) => typeof Promise < "u" && r instanceof Promise;
var Z;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e?.message;
})(Z || (Z = {}));
class Bt {
  constructor(e, t, n, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Bs = (r, e) => {
  if (or(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Nt(r.common.issues);
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
class ue {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Lt(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: Lt(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Je(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Lt(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Cn(t))
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
      parsedType: Lt(e)
    }, i = this._parseSync({ data: e, path: n.path, parent: n });
    return Bs(n, i);
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
      parsedType: Lt(e)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return or(n) ? {
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
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) => or(n) ? {
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
      parsedType: Lt(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (Cn(i) ? i : Promise.resolve(i));
    return Bs(n, s);
  }
  refine(e, t) {
    const n = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: P.custom,
        ...n(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof t == "function" ? t(n, i) : t), !1));
  }
  _refinement(e) {
    return new cr({
      schema: this,
      typeName: ne.ZodEffects,
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
    return dr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return _t.create(this);
  }
  promise() {
    return Dn.create(this, this._def);
  }
  or(e) {
    return kn.create([this, e], this._def);
  }
  and(e) {
    return Sn.create(this, e, this._def);
  }
  transform(e) {
    return new cr({
      ...ae(this._def),
      schema: this,
      typeName: ne.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new yi({
      ...ae(this._def),
      innerType: this,
      defaultValue: t,
      typeName: ne.ZodDefault
    });
  }
  brand() {
    return new ap({
      typeName: ne.ZodBranded,
      type: this,
      ...ae(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new bi({
      ...ae(this._def),
      innerType: this,
      catchValue: t,
      typeName: ne.ZodCatch
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
    return Yi.create(this, e);
  }
  readonly() {
    return xi.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Fm = /^c[^\s-]{8,}$/i, Bm = /^[0-9a-z]+$/, Hm = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Vm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, jm = /^[a-z0-9_-]{21}$/i, $m = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Wm = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Gm = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Um = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ri;
const Zm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, qm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Km = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Ym = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Xm = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Jm = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, ul = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Qm = new RegExp(`^${ul}$`);
function hl(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function ep(r) {
  return new RegExp(`^${hl(r)}$`);
}
function tp(r) {
  let e = `${ul}T${hl(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function rp(r, e) {
  return !!((e === "v4" || !e) && Zm.test(r) || (e === "v6" || !e) && Km.test(r));
}
function np(r, e) {
  if (!$m.test(r))
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
function ip(r, e) {
  return !!((e === "v4" || !e) && qm.test(r) || (e === "v6" || !e) && Ym.test(r));
}
class Ut extends ue {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== G.string) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: P.invalid_type,
        expected: G.string,
        received: s.parsedType
      }), te;
    }
    const n = new Je();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), H(i, {
          code: P.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), H(i, {
          code: P.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? H(i, {
          code: P.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && H(i, {
          code: P.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Gm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "email",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        ri || (ri = new RegExp(Um, "u")), ri.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "emoji",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Vm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "uuid",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        jm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "nanoid",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Fm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "cuid",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Bm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "cuid2",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        Hm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "ulid",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), H(i, {
            validation: "url",
            code: P.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "regex",
        code: P.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: P.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: P.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: P.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? tp(s).test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: P.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Qm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: P.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? ep(s).test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: P.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? Wm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "duration",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? rp(e.data, s.version) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "ip",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? np(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "jwt",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? ip(e.data, s.version) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "cidr",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? Xm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "base64",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? Jm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "base64url",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : he.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: P.invalid_string,
      ...Z.errToObj(n)
    });
  }
  _addCheck(e) {
    return new Ut({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...Z.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...Z.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...Z.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...Z.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...Z.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...Z.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...Z.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...Z.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...Z.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...Z.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...Z.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...Z.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...Z.errToObj(e) });
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
      ...Z.errToObj(e?.message)
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
      ...Z.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...Z.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...Z.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...Z.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...Z.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...Z.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...Z.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...Z.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...Z.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, Z.errToObj(e));
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
  typeName: ne.ZodString,
  coerce: r?.coerce ?? !1,
  ...ae(r)
});
function sp(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = t > n ? t : n, s = Number.parseInt(r.toFixed(i).replace(".", "")), a = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % a / 10 ** i;
}
class Pr extends ue {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== G.number) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: P.invalid_type,
        expected: G.number,
        received: s.parsedType
      }), te;
    }
    let n;
    const i = new Je();
    for (const s of this._def.checks)
      s.kind === "int" ? he.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
        code: P.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: P.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: P.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? sp(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), H(n, {
        code: P.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
        code: P.not_finite,
        message: s.message
      }), i.dirty()) : he.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, Z.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, Z.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, Z.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, Z.toString(t));
  }
  setLimit(e, t, n, i) {
    return new Pr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: Z.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Pr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: Z.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Z.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Z.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Z.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Z.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Z.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: Z.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Z.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Z.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && he.isInteger(e.value));
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
Pr.create = (r) => new Pr({
  checks: [],
  typeName: ne.ZodNumber,
  coerce: r?.coerce || !1,
  ...ae(r)
});
class zr extends ue {
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
    if (this._getType(e) !== G.bigint)
      return this._getInvalidInput(e);
    let n;
    const i = new Je();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: P.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: P.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), H(n, {
        code: P.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : he.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return H(t, {
      code: P.invalid_type,
      expected: G.bigint,
      received: t.parsedType
    }), te;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, Z.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, Z.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, Z.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, Z.toString(t));
  }
  setLimit(e, t, n, i) {
    return new zr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: Z.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new zr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Z.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Z.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Z.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Z.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Z.toString(t)
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
zr.create = (r) => new zr({
  checks: [],
  typeName: ne.ZodBigInt,
  coerce: r?.coerce ?? !1,
  ...ae(r)
});
class Hs extends ue {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== G.boolean) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: P.invalid_type,
        expected: G.boolean,
        received: n.parsedType
      }), te;
    }
    return lt(e.data);
  }
}
Hs.create = (r) => new Hs({
  typeName: ne.ZodBoolean,
  coerce: r?.coerce || !1,
  ...ae(r)
});
class En extends ue {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== G.date) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: P.invalid_type,
        expected: G.date,
        received: s.parsedType
      }), te;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: P.invalid_date
      }), te;
    }
    const n = new Je();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), H(i, {
        code: P.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), H(i, {
        code: P.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : he.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new En({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: Z.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: Z.toString(t)
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
En.create = (r) => new En({
  checks: [],
  coerce: r?.coerce || !1,
  typeName: ne.ZodDate,
  ...ae(r)
});
class Vs extends ue {
  _parse(e) {
    if (this._getType(e) !== G.symbol) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: P.invalid_type,
        expected: G.symbol,
        received: n.parsedType
      }), te;
    }
    return lt(e.data);
  }
}
Vs.create = (r) => new Vs({
  typeName: ne.ZodSymbol,
  ...ae(r)
});
class js extends ue {
  _parse(e) {
    if (this._getType(e) !== G.undefined) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: P.invalid_type,
        expected: G.undefined,
        received: n.parsedType
      }), te;
    }
    return lt(e.data);
  }
}
js.create = (r) => new js({
  typeName: ne.ZodUndefined,
  ...ae(r)
});
class $s extends ue {
  _parse(e) {
    if (this._getType(e) !== G.null) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: P.invalid_type,
        expected: G.null,
        received: n.parsedType
      }), te;
    }
    return lt(e.data);
  }
}
$s.create = (r) => new $s({
  typeName: ne.ZodNull,
  ...ae(r)
});
class gi extends ue {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return lt(e.data);
  }
}
gi.create = (r) => new gi({
  typeName: ne.ZodAny,
  ...ae(r)
});
class Ws extends ue {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return lt(e.data);
  }
}
Ws.create = (r) => new Ws({
  typeName: ne.ZodUnknown,
  ...ae(r)
});
class Ht extends ue {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return H(t, {
      code: P.invalid_type,
      expected: G.never,
      received: t.parsedType
    }), te;
  }
}
Ht.create = (r) => new Ht({
  typeName: ne.ZodNever,
  ...ae(r)
});
class Gs extends ue {
  _parse(e) {
    if (this._getType(e) !== G.undefined) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: P.invalid_type,
        expected: G.void,
        received: n.parsedType
      }), te;
    }
    return lt(e.data);
  }
}
Gs.create = (r) => new Gs({
  typeName: ne.ZodVoid,
  ...ae(r)
});
class _t extends ue {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== G.array)
      return H(t, {
        code: P.invalid_type,
        expected: G.array,
        received: t.parsedType
      }), te;
    if (i.exactLength !== null) {
      const a = t.data.length > i.exactLength.value, o = t.data.length < i.exactLength.value;
      (a || o) && (H(t, {
        code: a ? P.too_big : P.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (H(t, {
      code: P.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (H(t, {
      code: P.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new Bt(t, a, t.path, o)))).then((a) => Je.mergeArray(n, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new Bt(t, a, t.path, o)));
    return Je.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new _t({
      ...this._def,
      minLength: { value: e, message: Z.toString(t) }
    });
  }
  max(e, t) {
    return new _t({
      ...this._def,
      maxLength: { value: e, message: Z.toString(t) }
    });
  }
  length(e, t) {
    return new _t({
      ...this._def,
      exactLength: { value: e, message: Z.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
_t.create = (r, e) => new _t({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ne.ZodArray,
  ...ae(e)
});
function rr(r) {
  if (r instanceof ke) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = zt.create(rr(n));
    }
    return new ke({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof _t ? new _t({
    ...r._def,
    type: rr(r.element)
  }) : r instanceof zt ? zt.create(rr(r.unwrap())) : r instanceof dr ? dr.create(rr(r.unwrap())) : r instanceof qt ? qt.create(r.items.map((e) => rr(e))) : r;
}
class ke extends ue {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = he.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== G.object) {
      const c = this._getOrReturnCtx(e);
      return H(c, {
        code: P.invalid_type,
        expected: G.object,
        received: c.parsedType
      }), te;
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
          code: P.unrecognized_keys,
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
    }).then((c) => Je.mergeObjectSync(n, c)) : Je.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return Z.errToObj, new ke({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          const i = this._def.errorMap?.(t, n).message ?? n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: Z.errToObj(e).message ?? i
          } : {
            message: i
          };
        }
      } : {}
    });
  }
  strip() {
    return new ke({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ke({
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
    return new ke({
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
    return new ke({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: ne.ZodObject
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
    return new ke({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const n of he.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new ke({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const n of he.objectKeys(this.shape))
      e[n] || (t[n] = this.shape[n]);
    return new ke({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return rr(this);
  }
  partial(e) {
    const t = {};
    for (const n of he.objectKeys(this.shape)) {
      const i = this.shape[n];
      e && !e[n] ? t[n] = i : t[n] = i.optional();
    }
    return new ke({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const n of he.objectKeys(this.shape))
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof zt; )
          s = s._def.innerType;
        t[n] = s;
      }
    return new ke({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return fl(he.objectKeys(this.shape));
  }
}
ke.create = (r, e) => new ke({
  shape: () => r,
  unknownKeys: "strip",
  catchall: Ht.create(),
  typeName: ne.ZodObject,
  ...ae(e)
});
ke.strictCreate = (r, e) => new ke({
  shape: () => r,
  unknownKeys: "strict",
  catchall: Ht.create(),
  typeName: ne.ZodObject,
  ...ae(e)
});
ke.lazycreate = (r, e) => new ke({
  shape: r,
  unknownKeys: "strip",
  catchall: Ht.create(),
  typeName: ne.ZodObject,
  ...ae(e)
});
class kn extends ue {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Nt(o.ctx.common.issues));
      return H(t, {
        code: P.invalid_union,
        unionErrors: a
      }), te;
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
      const o = a.map((l) => new Nt(l));
      return H(t, {
        code: P.invalid_union,
        unionErrors: o
      }), te;
    }
  }
  get options() {
    return this._def.options;
  }
}
kn.create = (r, e) => new kn({
  options: r,
  typeName: ne.ZodUnion,
  ...ae(e)
});
function vi(r, e) {
  const t = Lt(r), n = Lt(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === G.object && n === G.object) {
    const i = he.objectKeys(e), s = he.objectKeys(r).filter((o) => i.indexOf(o) !== -1), a = { ...r, ...e };
    for (const o of s) {
      const l = vi(r[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (t === G.array && n === G.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s], o = e[s], l = vi(a, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === G.date && n === G.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class Sn extends ue {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (zs(s) || zs(a))
        return te;
      const o = vi(s.value, a.value);
      return o.valid ? ((Fs(s) || Fs(a)) && t.dirty(), { status: t.value, value: o.data }) : (H(n, {
        code: P.invalid_intersection_types
      }), te);
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
Sn.create = (r, e, t) => new Sn({
  left: r,
  right: e,
  typeName: ne.ZodIntersection,
  ...ae(t)
});
class qt extends ue {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== G.array)
      return H(n, {
        code: P.invalid_type,
        expected: G.array,
        received: n.parsedType
      }), te;
    if (n.data.length < this._def.items.length)
      return H(n, {
        code: P.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), te;
    !this._def.rest && n.data.length > this._def.items.length && (H(n, {
      code: P.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...n.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new Bt(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(s).then((a) => Je.mergeArray(t, a)) : Je.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new qt({
      ...this._def,
      rest: e
    });
  }
}
qt.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new qt({
    items: r,
    typeName: ne.ZodTuple,
    rest: null,
    ...ae(e)
  });
};
class Us extends ue {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== G.map)
      return H(n, {
        code: P.invalid_type,
        expected: G.map,
        received: n.parsedType
      }), te;
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
            return te;
          (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return te;
        (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
      }
      return { status: t.value, value: o };
    }
  }
}
Us.create = (r, e, t) => new Us({
  valueType: e,
  keyType: r,
  typeName: ne.ZodMap,
  ...ae(t)
});
class Fr extends ue {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== G.set)
      return H(n, {
        code: P.invalid_type,
        expected: G.set,
        received: n.parsedType
      }), te;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (H(n, {
      code: P.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (H(n, {
      code: P.too_big,
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
          return te;
        d.status === "dirty" && t.dirty(), c.add(d.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...n.data.values()].map((l, c) => s._parse(new Bt(n, l, n.path, c)));
    return n.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new Fr({
      ...this._def,
      minSize: { value: e, message: Z.toString(t) }
    });
  }
  max(e, t) {
    return new Fr({
      ...this._def,
      maxSize: { value: e, message: Z.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Fr.create = (r, e) => new Fr({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: ne.ZodSet,
  ...ae(e)
});
class Zs extends ue {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Zs.create = (r, e) => new Zs({
  getter: r,
  typeName: ne.ZodLazy,
  ...ae(e)
});
class qs extends ue {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return H(t, {
        received: t.data,
        code: P.invalid_literal,
        expected: this._def.value
      }), te;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
qs.create = (r, e) => new qs({
  value: r,
  typeName: ne.ZodLiteral,
  ...ae(e)
});
function fl(r, e) {
  return new lr({
    values: r,
    typeName: ne.ZodEnum,
    ...ae(e)
  });
}
class lr extends ue {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return H(t, {
        expected: he.joinValues(n),
        received: t.parsedType,
        code: P.invalid_type
      }), te;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return H(t, {
        received: t.data,
        code: P.invalid_enum_value,
        options: n
      }), te;
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
    return lr.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return lr.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
lr.create = fl;
class Ks extends ue {
  _parse(e) {
    const t = he.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== G.string && n.parsedType !== G.number) {
      const i = he.objectValues(t);
      return H(n, {
        expected: he.joinValues(i),
        received: n.parsedType,
        code: P.invalid_type
      }), te;
    }
    if (this._cache || (this._cache = new Set(he.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = he.objectValues(t);
      return H(n, {
        received: n.data,
        code: P.invalid_enum_value,
        options: i
      }), te;
    }
    return lt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ks.create = (r, e) => new Ks({
  values: r,
  typeName: ne.ZodNativeEnum,
  ...ae(e)
});
class Dn extends ue {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== G.promise && t.common.async === !1)
      return H(t, {
        code: P.invalid_type,
        expected: G.promise,
        received: t.parsedType
      }), te;
    const n = t.parsedType === G.promise ? t.data : Promise.resolve(t.data);
    return lt(n.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Dn.create = (r, e) => new Dn({
  type: r,
  typeName: ne.ZodPromise,
  ...ae(e)
});
class cr extends ue {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ne.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
            return te;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? te : l.status === "dirty" || t.value === "dirty" ? _r(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return te;
        const o = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? te : o.status === "dirty" || t.value === "dirty" ? _r(o.value) : o;
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
        return o.status === "aborted" ? te : (o.status === "dirty" && t.dirty(), a(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? te : (o.status === "dirty" && t.dirty(), a(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!or(a))
          return te;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => or(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({
          status: t.value,
          value: o
        })) : te);
    he.assertNever(i);
  }
}
cr.create = (r, e, t) => new cr({
  schema: r,
  typeName: ne.ZodEffects,
  effect: e,
  ...ae(t)
});
cr.createWithPreprocess = (r, e, t) => new cr({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: ne.ZodEffects,
  ...ae(t)
});
class zt extends ue {
  _parse(e) {
    return this._getType(e) === G.undefined ? lt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
zt.create = (r, e) => new zt({
  innerType: r,
  typeName: ne.ZodOptional,
  ...ae(e)
});
class dr extends ue {
  _parse(e) {
    return this._getType(e) === G.null ? lt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
dr.create = (r, e) => new dr({
  innerType: r,
  typeName: ne.ZodNullable,
  ...ae(e)
});
class yi extends ue {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === G.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
yi.create = (r, e) => new yi({
  innerType: r,
  typeName: ne.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ae(e)
});
class bi extends ue {
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
    return Cn(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Nt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Nt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
bi.create = (r, e) => new bi({
  innerType: r,
  typeName: ne.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ae(e)
});
class Ys extends ue {
  _parse(e) {
    if (this._getType(e) !== G.nan) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: P.invalid_type,
        expected: G.nan,
        received: n.parsedType
      }), te;
    }
    return { status: "valid", value: e.data };
  }
}
Ys.create = (r) => new Ys({
  typeName: ne.ZodNaN,
  ...ae(r)
});
class ap extends ue {
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
class Yi extends ue {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? te : s.status === "dirty" ? (t.dirty(), _r(s.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? te : i.status === "dirty" ? (t.dirty(), {
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
    return new Yi({
      in: e,
      out: t,
      typeName: ne.ZodPipeline
    });
  }
}
class xi extends ue {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (i) => (or(i) && (i.value = Object.freeze(i.value)), i);
    return Cn(t) ? t.then((i) => n(i)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
xi.create = (r, e) => new xi({
  innerType: r,
  typeName: ne.ZodReadonly,
  ...ae(e)
});
var ne;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(ne || (ne = {}));
const op = gi.create;
Ht.create;
_t.create;
const lp = ke.create;
kn.create;
Sn.create;
qt.create;
lr.create;
Dn.create;
zt.create;
dr.create;
function ml(r, e) {
  return async (t, n, i) => {
    const s = cp(r, t), a = { ...t };
    for (const l of Object.keys(a))
      a[l] === null && (a[l] = void 0);
    return Lm(s, e)(a, n, i);
  };
}
function cp(r, e) {
  const n = Gi(r).shape, i = {};
  for (const [a, o] of Object.entries(n)) {
    const l = Ui(o);
    if (!l || !l.renderIf) {
      i[a] = o;
      continue;
    }
    jn(l.renderIf, e) ? i[a] = o : i[a] = op();
  }
  const s = lp(i);
  if (ge(r, "ZodEffects")) {
    const o = r._def.effect;
    if (o.type === "refinement")
      return s.superRefine(o.refinement);
  }
  return s;
}
function dp(r) {
  const e = pt(r);
  if (!ge(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (i = s.value);
  return { min: n, max: i };
}
function ni(r) {
  const e = pt(r);
  if (!ge(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: n, maxDate: i };
}
function up(r) {
  const e = pt(r);
  if (!ge(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const i of t)
    i.kind === "max" && (n = i.value);
  return { maxLength: n };
}
function hp(r) {
  const e = pt(r);
  return ge(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "email") : !1;
}
function fp(r) {
  const e = pt(r);
  return ge(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "url") : !1;
}
function Xs(r) {
  return hp(r) ? "email" : fp(r) ? "url" : "text";
}
function Js(r, e, t, n) {
  const i = {
    id: r,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    validation: e
  }, s = !ol(e);
  switch (n) {
    case "text": {
      const a = "inputType" in t && t.inputType ? t.inputType : Xs(e);
      return {
        ...i,
        type: "text",
        inputType: a,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: a, max: o } = dp(e);
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
      const { maxLength: a } = up(e);
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
      const a = ni(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = ni(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = ni(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
        inputType: Xs(e),
        renderIf: t.renderIf
      };
  }
}
function Nn(r) {
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
          (l) => Js(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(o);
    } else {
      t.add(n);
      const a = Js(
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
function pl(r) {
  const e = r.shape, t = [], n = Object.entries(e);
  for (let i = 0; i < n.length; i++) {
    const [s, a] = n[i], o = Ui(a);
    if (o) {
      const l = im(a, o);
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
function gl(r, e) {
  return U(() => {
    const t = Gi(r), n = pl(t), i = [], s = {};
    for (const l of n) {
      const c = l.config.section;
      c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
    }
    i.sort((l, c) => l.position - c.position);
    for (const l of Object.keys(s))
      s[l].sort((c, d) => c.position - d.position);
    const a = [];
    a.push(...Nn(i));
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
          fields: Nn(d)
        }
      };
      a.push(u);
    }
    return a;
  }, [r, e]);
}
function _g(r, e) {
  const t = Gi(r), n = pl(t), i = [], s = {};
  for (const l of n) {
    const c = l.config.section;
    c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
  }
  i.sort((l, c) => l.position - c.position);
  for (const l of Object.keys(s))
    s[l].sort((c, d) => c.position - d.position);
  const a = [];
  a.push(...Nn(i));
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
        fields: Nn(d)
      }
    };
    a.push(u);
  }
  return a;
}
function vl(r) {
  const { validation: e } = r.forms;
  return (t, n) => {
    switch (t.code) {
      case P.invalid_type:
        return t.received === "undefined" || t.received === "null" ? { message: e.required } : { message: e.invalidType };
      case P.invalid_string:
        if (t.validation === "email")
          return { message: e.string.email };
        if (t.validation === "url")
          return { message: e.string.url };
        break;
      case P.too_small:
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
      case P.too_big:
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
      case P.invalid_date:
        return { message: e.date.invalid };
      case P.not_multiple_of:
        if (t.multipleOf === 1)
          return { message: e.number.integer };
        break;
      case P.invalid_literal:
        if (t.expected === !0)
          return { message: e.checkbox.mustBeChecked };
        break;
    }
    return { message: n.defaultError };
  };
}
const mp = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
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
    }) : i.type === "row" && e.push({
      type: "row",
      item: i,
      index: s
    }));
  }), n(), e;
}
function gp({ formName: r, sectionId: e, schema: t, sectionConfig: n, defaultValues: i, onSubmit: s, submitConfig: a, errorTriggerMode: o, className: l }) {
  const c = ur(), d = gl(t), u = a?.label ?? "Submit", h = a?.icon === null ? void 0 : a?.icon ?? ha, m = a?.showSubmitWhenDirty ?? !1, g = U(() => vl(c), [c]), y = mp[o], S = U(() => ml(t, {
    errorMap: g
  }), [t, g]), _ = Uo({
    resolver: S,
    mode: y,
    defaultValues: i
  }), R = _.formState.errors.root, { isSubmitting: D, isDirty: O } = _.formState, b = Object.keys(_.formState.errors).filter((N) => N !== "root").length > 0, k = le(async (N) => {
    const C = {
      ...N
    };
    for (const V of Object.keys(C))
      C[V] === null && (C[V] = void 0);
    const A = await s(C);
    A.success ? _.reset(N) : (A.errors && Object.entries(A.errors).forEach(([V, ie]) => {
      _.setError(V, {
        message: ie
      });
    }), A.rootMessage && _.setError("root", {
      message: A.rootMessage
    }));
  }, [s, _]), E = pp(d), T = U(() => ({
    formName: r
  }), [r]), $ = n?.title ?? e, z = n?.description;
  return f(Wi.Provider, {
    value: T,
    children: f(Ko, {
      ..._,
      children: j("form", {
        onSubmit: _.handleSubmit(k),
        className: re("flex flex-col", l),
        children: [j("div", {
          className: re("flex items-start justify-between py-5", "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"),
          children: [f(Sa, {
            title: $,
            description: z ?? ""
          }), n?.action && f(Xe, {
            label: n.action.label,
            icon: n.action.icon,
            onClick: n.action.onClick,
            href: n.action.href,
            variant: "outline",
            size: "md"
          })]
        }), f("div", {
          className: `flex flex-col ${$i}`,
          children: E.map((N, C) => {
            switch (N.type) {
              case "switchGroup":
                return f(Ki, {
                  fields: N.fields,
                  sectionId: e
                }, `switch-group-${C}`);
              case "field":
                return f($n, {
                  field: N.item.field,
                  sectionId: e
                }, N.item.field.id);
              case "row":
                return f(qi, {
                  row: N.item,
                  sectionId: e
                }, `row-${N.index}`);
              default:
                return null;
            }
          })
        }), R && f("p", {
          className: "mt-4 text-base font-medium text-f1-foreground-critical",
          children: R.message
        }), (!m || O) && f("div", {
          className: "mt-4",
          children: f(Xe, {
            type: "submit",
            label: u,
            icon: h,
            loading: D,
            disabled: b
          })
        })]
      })
    })
  });
}
function vp(r) {
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
function yp({ section: r }) {
  const t = jt().watch(), { formName: n } = il(), { title: i, description: s, renderIf: a, action: o, fields: l } = r.section, c = r.id;
  if (a && !jn(a, t))
    return null;
  const d = vp(l), u = Zt(n, c);
  return j("section", {
    id: u,
    className: "flex flex-col scroll-mt-4",
    children: [j("div", {
      className: re("flex items-start justify-between py-5", "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"),
      children: [f(Sa, {
        title: i,
        description: s ?? ""
      }), o && f(Xe, {
        label: o.label,
        icon: o.icon,
        onClick: o.onClick,
        href: o.href,
        variant: "outline",
        size: "md"
      })]
    }), f("div", {
      className: `flex flex-col ${$i}`,
      children: d.map((h, m) => h.type === "switchGroup" ? f(Ki, {
        fields: h.fields,
        sectionId: c
      }, `switch-group-${m}`) : h.type === "field" ? f($n, {
        field: h.item.field,
        sectionId: c
      }, h.item.field.id) : h.type === "row" ? f(qi, {
        row: h.item,
        sectionId: c
      }, `row-${h.index}`) : null)
    })]
  });
}
function Qs(r) {
  const e = document.getElementById(r);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function bp({
  formName: r,
  errors: e
}) {
  const t = Object.keys(e).filter((h) => h !== "root"), n = t.length > 0, i = t.length, [s, a] = Q(0), o = K([]);
  J(() => {
    const h = t, m = o.current, g = h.find(
      (y) => !m.includes(y)
    );
    if (g) {
      const y = Zt(r, void 0, g);
      Qs(y);
      const S = h.indexOf(g);
      S !== -1 && a(S);
    }
    o.current = h;
  }, [t, r]);
  const l = le(
    (h) => {
      if (t.length === 0) return;
      const m = (h % t.length + t.length) % t.length;
      a(m);
      const g = t[m], y = Zt(r, void 0, g);
      Qs(y);
    },
    [t, r]
  ), c = le(() => {
    l(s - 1);
  }, [s, l]), d = le(() => {
    l(s + 1);
  }, [s, l]), u = le(() => {
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
function xp(r) {
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
function wp(r) {
  if (typeof r != "object" || r === null) return !1;
  const t = r._def;
  return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
const _p = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Cp(r) {
  const { name: e, schema: t, sections: n, defaultValues: i, onSubmit: s, submitConfig: a, className: o, errorTriggerMode: l = "on-blur", styling: c } = r, d = c?.showSectionsSidepanel ?? !1, u = U(() => Object.keys(t), [t]), h = le((_) => {
    const R = Zt(e, _), D = document.getElementById(R);
    D && D.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [e]), [m, g] = Q(u[0]), y = U(() => !n || !d ? [] : u.map((_) => ({
    id: _,
    label: n[_]?.title ?? _,
    onClick: () => {
      g(_), h(_);
    }
  })), [n, u, d, h]), S = f("div", {
    className: re("flex w-full flex-col", nl, o),
    children: u.map((_, R) => {
      const D = t[_], O = n?.[_], b = i?.[_], k = O?.submitConfig ?? a;
      return f("div", {
        id: Zt(e, _),
        className: re("scroll-mt-4", R !== 0 && rl),
        children: f(gp, {
          formName: e,
          sectionId: _,
          schema: D,
          sectionConfig: O,
          defaultValues: b,
          onSubmit: (E) => s(_, E),
          submitConfig: k,
          errorTriggerMode: l
        })
      }, _);
    })
  });
  return d && y.length > 0 ? j("div", {
    className: "flex w-full gap-4",
    children: [f("div", {
      className: "sticky top-4 h-fit shrink-0 self-start pt-3",
      children: f(Ci, {
        items: y,
        activeItem: m,
        scrollable: !1
      })
    }), f("div", {
      className: "w-px bg-f1-border-secondary"
    }), f("div", {
      className: "flex flex-1 justify-center",
      children: S
    })]
  }) : S;
}
function Ep(r) {
  return wp(r.schema) ? f(kp, {
    ...r
  }) : f(Cp, {
    ...r
  });
}
function kp(r) {
  const e = ur(), { forms: t } = e, { name: n, schema: i, sections: s, defaultValues: a, onSubmit: o, submitConfig: l, className: c, errorTriggerMode: d = "on-blur", styling: u, formRef: h } = r, m = u?.showSectionsSidepanel ?? !1, g = l?.type === "action-bar", y = l?.label ?? "Submit", S = l?.icon === null ? void 0 : l?.icon ?? ha, _ = l?.type !== "action-bar" && l?.hideSubmitButton, R = !g && !_, D = l?.type === "action-bar" && l?.discardable, O = g ? l?.discardConfig : void 0, b = O?.label ?? t.actionBar.discard, k = O?.icon === null ? void 0 : O?.icon ?? Zl, E = g ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, T = l?.savingMessage ?? t.actionBar.saving, $ = g && !!l?.centerActionBarInFrameContent, z = gl(i, s), N = U(() => z.filter((L) => L.type === "section").map((L) => L.id), [z]), [C, A] = Q(N[0]), V = le((L) => {
    A(L);
    const I = Zt(n, L), M = document.getElementById(I);
    M && M.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [n]), ie = U(() => !s || !m ? [] : N.map((L) => ({
    id: L,
    label: s[L]?.title ?? L,
    onClick: () => V(L)
  })), [s, N, m, V]), de = U(() => vl(e), [e]), se = _p[d], ve = U(() => ml(i, {
    errorMap: de
  }), [i, de]), X = Uo({
    resolver: ve,
    mode: se,
    defaultValues: a
  }), xe = X.formState.errors.root, { isDirty: Ge, isSubmitting: ye, errors: Pe } = X.formState, [Ne, Te] = Q("idle"), [Ee, Ve] = Q(), me = K(null), { hasErrors: we, errorCount: ce, goToPreviousError: Qe, goToNextError: Oe, resetErrorNavigation: Me } = bp({
    formName: n,
    errors: Pe
  }), Le = (() => {
    if (!we)
      return Ne === "loading" ? T : Ne === "success" ? Ee ?? t.actionBar.saved : E;
  })(), Ue = async (L) => {
    me.current && (clearTimeout(me.current), me.current = null), gc(() => {
      Te("loading");
    });
    const I = {
      ...L
    };
    for (const W of Object.keys(I))
      I[W] === null && (I[W] = void 0);
    const M = await o(I);
    M.success ? (X.reset(L), Me(), Ve(M.message), Te("success"), me.current = setTimeout(() => {
      Te("idle"), Ve(void 0), me.current = null;
    }, 3e3)) : (Te("idle"), M.errors && Object.entries(M.errors).forEach(([W, ee]) => {
      X.setError(W, {
        message: ee
      });
    }), M.rootMessage && X.setError("root", {
      message: M.rootMessage
    }));
  };
  J(() => () => {
    me.current && clearTimeout(me.current);
  }, []), J(() => {
    Ge && Ne === "success" && (me.current && (clearTimeout(me.current), me.current = null), Te("idle"), Ve(void 0));
  }, [Ge, Ne]);
  const ct = () => {
    X.reset(), Me(), Te("idle"), Ve(void 0), me.current && (clearTimeout(me.current), me.current = null);
  }, Et = K(null);
  J(() => {
    if (h) {
      const L = {
        submit: () => new Promise((I, M) => {
          X.handleSubmit(async (W) => {
            await Ue(W), I();
          }, () => {
            M(new Error("Form validation failed"));
          })();
        }),
        reset: () => {
          X.reset(), Me();
        },
        isDirty: () => X.formState.isDirty,
        _setStateCallback: (I) => {
          Et.current = I;
        }
      };
      h.current = L;
    }
    return () => {
      h && (h.current = null);
    };
  }, [h, X, Me]), J(() => {
    Et.current && Et.current({
      isSubmitting: ye,
      hasErrors: we
    });
  }, [ye, we]);
  const p = xp(z), v = U(() => ({
    formName: n
  }), [n]), w = j("form", {
    onSubmit: X.handleSubmit(Ue),
    className: re("flex flex-col", nl, c),
    children: [p.map((L, I) => {
      const M = I !== 0 && L.type !== "section" ? "mt-4" : "";
      switch (L.type) {
        case "switchGroup":
          return f("div", {
            className: M,
            children: f(Ki, {
              fields: L.fields
            })
          }, `switch-group-${I}`);
        case "field":
          return f("div", {
            className: M,
            children: f($n, {
              field: L.item.field
            })
          }, L.item.field.id);
        case "row":
          return f("div", {
            className: M,
            children: f(qi, {
              row: L.item
            })
          }, `row-${L.index}`);
        case "section":
          return f("div", {
            className: I !== 0 ? rl : "",
            children: f(yp, {
              section: L.item
            })
          }, L.item.id);
        default:
          return null;
      }
    }), xe && f("p", {
      className: "mt-4 text-base font-medium text-f1-foreground-critical",
      children: xe.message
    }), !g && R && f("div", {
      className: "mt-4",
      children: f(Xe, {
        type: "submit",
        label: y,
        icon: S,
        loading: ye,
        disabled: we
      })
    })]
  });
  return f(Wi.Provider, {
    value: v,
    children: j(Ko, {
      ...X,
      children: [m && ie.length > 0 ? j("div", {
        className: "flex w-full gap-4",
        children: [f("div", {
          className: "sticky top-4 h-fit shrink-0 self-start pt-3",
          children: f(Ci, {
            items: ie,
            activeItem: C,
            scrollable: !1
          })
        }), f("div", {
          className: "w-px bg-f1-border-secondary"
        }), f("div", {
          className: "flex flex-1 justify-center",
          children: w
        })]
      }) : w, f(nm, {
        isActionBar: g,
        isDirty: Ge,
        actionBarStatus: Ne,
        hasErrors: we,
        errorCount: ce,
        resolvedActionBarLabel: Le,
        centerActionBarInFrameContent: $,
        submitLabel: y,
        submitIcon: S,
        discardableChanges: D,
        discardLabel: b,
        discardIcon: k,
        issuesOneLabel: t.actionBar.issues.one,
        issuesOtherLabel: t.actionBar.issues.other,
        onSubmit: X.handleSubmit(Ue),
        onDiscard: ct,
        goToPreviousError: Qe,
        goToNextError: Oe
      })]
    })
  });
}
function Cg() {
  const [r, e] = Q(!1), [t, n] = Q(!1), i = K((d) => {
    e(d.isSubmitting), n(d.hasErrors);
  }), s = K(null), a = K({
    get current() {
      return s.current;
    },
    set current(d) {
      s.current = d, d && d._setStateCallback(i.current);
    }
  }), o = le(async () => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return s.current.submit();
  }, []), l = le(() => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    s.current.reset();
  }, []), c = le(() => s.current ? s.current.isDirty() : !1, []);
  return {
    formRef: a.current,
    submit: o,
    reset: l,
    isDirty: c,
    isSubmitting: r,
    hasErrors: t
  };
}
const Eg = st("F0Form", Ep), Sp = We((r, e) => f(Di, {
  ref: e,
  variant: "heading",
  ...r
}));
Sp.displayName = "F0Heading";
const kg = st(
  "F0GridStack",
  Si
), ii = 16, Dp = Vt({
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
function yl(r, e = 0) {
  return r.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? yl(t.children, e + 1) : []]);
}
function Np(r, e) {
  const t = r.length;
  if (t <= ii) return r;
  const n = t / (ii - 1), i = new Set(Array.from({
    length: ii - 1
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
function Rp({ items: r, activeItem: e, className: t, align: n = "left", variant: i = "dark" }) {
  const s = U(() => Np(yl(r), e), [r, e]);
  return f("div", {
    className: re("flex flex-col justify-center gap-2 py-3", n === "right" ? "items-end" : "items-start", t),
    children: s.map((a) => f("div", {
      className: Dp({
        depth: a.depth,
        variant: i,
        active: a.id === e
      })
    }, a.id))
  });
}
const Ap = 300, Tp = 0, Op = Vt({
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
function Mp({ title: r, items: e, className: t, activeItem: n, collapsible: i = !1, showChildrenCounter: s = !1, barsAlign: a = "left", size: o = "md", variant: l = "light" }) {
  const [c, d] = Q(!1), u = K(!1), h = (g) => {
    g && !c && (u.current = !0), d(g);
  }, m = le((g) => {
    !g || !u.current || (u.current = !1, requestAnimationFrame(() => {
      g.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return j(id, {
    open: c,
    onOpenChange: h,
    openDelay: Tp,
    closeDelay: Ap,
    children: [f(sd, {
      asChild: !0,
      children: f("button", {
        className: re(aa(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": r ?? "Menu",
        children: f(Rp, {
          items: e,
          activeItem: n,
          align: a,
          variant: l
        })
      })
    }), f(ad, {
      ref: m,
      side: a === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: re(Op({
        size: o
      }), !r && "pt-2", "scrollbar-macos"),
      children: f(Ci, {
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
const Sg = st(
  "F0TableOfContentPopover",
  Mp
), Lp = ({ benefits: r }) => f("div", {
  className: "flex flex-col gap-2",
  children: r.map((e, t) => f(Ip, {
    text: e
  }, t))
}), Ip = ({ text: r }) => j("div", {
  className: "flex flex-row items-start gap-2",
  children: [f(Rn, {
    icon: Kl,
    size: "md",
    className: "text-f1-icon-positive"
  }), f("span", {
    children: r
  })]
}), bl = We(({ title: r, image: e, benefits: t, actions: n, withShadow: i = !0, module: s, moduleName: a, tag: o, promoTag: l }, c) => j("div", {
  ref: c,
  className: re("bg-white flex flex-row rounded-xl border border-f1-border-secondary", i && "shadow-md"),
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
          children: [s && f(fa, {
            module: s
          }), a && f("p", {
            className: "text-base font-medium text-f1-foreground",
            children: a
          })]
        }), (o || l) && j("div", {
          className: "flex justify-start gap-2",
          children: [o && f(ql, {
            icon: o.icon,
            text: o.label
          }), l && f(od, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), f("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: r
        })]
      }), f(Lp, {
        benefits: t
      })]
    }), n && f("div", {
      className: "flex gap-3",
      children: n
    })]
  })]
}));
bl.displayName = "ProductBlankslate";
function Pp({ isOpen: r, onClose: e, title: t, children: n, module: i, portalContainer: s }) {
  const [a, o] = Q(r);
  return J(() => {
    o(r);
  }, [r]), f(Yl, {
    open: a,
    onOpenChange: (c) => {
      o(c), c || e();
    },
    modal: !0,
    children: j(Xl, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [j("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [j(Jl, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [i && f(fa, {
            module: i,
            size: "lg"
          }), t]
        }), f(_i, {
          variant: "outline",
          icon: ma,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), j(la, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [n, f(ca, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Dg({ isOpen: r, onClose: e, title: t, image: n, benefits: i, errorMessage: s, successMessage: a, loadingState: o, nextSteps: l, closeLabel: c, primaryAction: d, modalTitle: u, modalModule: h, secondaryAction: m, portalContainer: g, tag: y, promoTag: S, showResponseDialog: _ = !0 }) {
  const [R, D] = Q(r), [O, b] = Q(null), [k, E] = Q(!1), T = async () => {
    if (d?.onClick) {
      E(!0);
      try {
        await d.onClick(), D(!1), _ && b("success");
      } catch {
        _ && b("error");
      } finally {
        E(!1);
      }
    }
  }, $ = () => {
    D(!1), e?.();
  }, z = k;
  return j(Br, {
    children: [f(Pp, {
      isOpen: R,
      onClose: $,
      title: u,
      module: h,
      portalContainer: g,
      children: f("div", {
        className: "pb-4 pl-4",
        children: f(bl, {
          title: t,
          image: n,
          benefits: i,
          withShadow: !1,
          tag: y,
          promoTag: S,
          actions: j("div", {
            className: "flex gap-3",
            children: [d && f(Xe, {
              variant: d.variant,
              label: z ? o.label : d.label,
              icon: d.icon || void 0,
              onClick: T,
              loading: d.loading,
              size: d.size
            }), m && f(Xe, {
              onClick: m.onClick,
              label: m.label,
              variant: m.variant,
              size: m.size,
              icon: m.icon
            })]
          })
        })
      })
    }), O && _ && f(Da, {
      open: !0,
      onClose: () => {
        $(), b(null);
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
function zp({ mediaUrl: r, title: e, description: t, onClose: n, dismissible: i, width: s, trackVisibility: a, actions: o, showConfirmation: l = !0 }) {
  const [c, d] = Q(!1), u = () => {
    d(!0), n && n();
  };
  J(() => {
    a && a(!c);
  }, [a, c]);
  const h = r?.includes(".mp4");
  return f(Br, {
    children: c ? null : j(Ql, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [j(ec, {
        children: [i && f("div", {
          className: "absolute right-2 top-2 z-10",
          children: f(Xe, {
            variant: "ghost",
            icon: ma,
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
            children: [f(_n, {
              className: "text-lg font-medium",
              children: e
            }), f(_n, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), o && f(tc, {
        className: "p-3",
        children: o.map((m) => m.type === "upsell" ? f(Na, {
          label: m.label,
          onRequest: m.onClick,
          errorMessage: m.errorMessage,
          successMessage: m.successMessage,
          loadingState: m.loadingState,
          nextSteps: m.nextSteps,
          closeLabel: m.closeLabel,
          showConfirmation: l && m.showConfirmation,
          variant: m.variant
        }, m.label) : f(Xe, {
          label: m.label,
          onClick: m.onClick,
          variant: m.variant
        }, m.label))
      })]
    })
  });
}
const Fp = We(function({ primaryAction: e, secondaryAction: t, ...n }, i) {
  const s = (l) => l.variant === "promote" ? f(Na, {
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
  }) : f(Xe, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), a = e?.variant !== "promote" ? e : void 0, o = t?.variant !== "promote" ? t : void 0;
  return j(ld, {
    ref: i,
    ...n,
    primaryAction: a,
    secondaryAction: o,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
Fp.displayName = "UpsellingBanner";
function Ng({ isOpen: r, setIsOpen: e, label: t, variant: n = "promote", size: i = "md", showIcon: s = !0, side: a = "right", align: o = "center", icon: l = rc, mediaUrl: c, title: d, description: u, width: h = "300px", trackVisibility: m, actions: g, onClick: y, hideLabel: S = !1 }) {
  const [_, R] = Q(!1), [D, O] = Q(null), [b, k] = Q(null), E = (C) => {
    e(C), y && y();
  }, T = async (C) => {
    if (C.type === "upsell") {
      k(C);
      try {
        await C.onClick(), C.showConfirmation && (R(!0), O("success"));
      } catch {
        R(!0), O("error");
      }
    }
  }, $ = () => {
    O(null), R(!1), k(null), e(!1);
  }, z = r && !_, N = g?.map((C) => C.type === "upsell" ? {
    ...C,
    onClick: () => T(C)
  } : C);
  return j(Br, {
    children: [j(ia, {
      open: z,
      onOpenChange: E,
      children: [f(sa, {
        asChild: !0,
        children: f(Xe, {
          variant: n,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(r),
          hideLabel: S
        })
      }), f(oa, {
        side: a,
        align: o,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: f(zp, {
          mediaUrl: c,
          title: d,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: h,
          trackVisibility: m,
          actions: N,
          showConfirmation: !1
        })
      })]
    }), b?.type === "upsell" && b.showConfirmation && D && f(Da, {
      open: !0,
      onClose: $,
      success: D === "success",
      errorMessage: b.errorMessage,
      successMessage: b.successMessage,
      nextSteps: b.nextSteps,
      closeLabel: b.closeLabel,
      portalContainer: null
    })]
  });
}
const Bp = Ct(null), Hp = ({ children: r, fullScreen: e = !0 }) => {
  const t = K(null), [n, i] = Q(t.current);
  return cc(() => {
    i(t.current);
  }, []), f(Bp.Provider, {
    value: {
      element: n
    },
    children: f("div", {
      ref: t,
      id: "f0-layout",
      className: re({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: r
    })
  });
}, Vp = ({ children: r }) => f(ud, {
  reducedMotion: "user",
  children: r
}), Rg = ({ children: r, layout: e, link: t, privacyModeInitiallyEnabled: n, image: i, i18n: s, l10n: a, isDev: o = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: c = !1 }) => f(Vp, {
  children: f(nc, {
    isDev: o,
    showExperimentalWarnings: c,
    children: f(ic, {
      ...a,
      children: f(sc, {
        ...s,
        children: f(ac, {
          ...t,
          children: f(Hp, {
            ...e,
            children: f(oc, {
              children: f(cd, {
                initiallyEnabled: n,
                children: f(lc, {
                  ...i,
                  children: f(dd, {
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
}), ea = (r) => `datacollection-${r}`, Ag = {
  get: async (r) => JSON.parse(
    localStorage.getItem(ea(r)) ?? "{}"
  ),
  set: async (r, e) => {
    localStorage.setItem(ea(r), JSON.stringify(e));
  }
};
export {
  Mg as A,
  gy as AiChatTranslationsProvider,
  Qp as AreaChart,
  Lg as Await,
  eg as BarChart,
  Ig as Blockquote,
  tg as CategoryBarChart,
  Pg as ChatSpinner,
  ag as ComboChart,
  qp as Dashboard,
  qv as DndProvider,
  zg as Em,
  Fg as EmojiImage,
  Bg as F0ActionItem,
  Hg as F0AiChat,
  Vg as F0AiChatProvider,
  jg as F0AiChatTextArea,
  $g as F0AiCollapsibleMessage,
  Wg as F0AiFullscreenChat,
  bg as F0Alert,
  vy as F0AuraVoiceAnimation,
  Gg as F0Avatar,
  Qc as F0AvatarAlert,
  Ug as F0AvatarCompany,
  Kv as F0AvatarDate,
  Zg as F0AvatarEmoji,
  qg as F0AvatarFile,
  Ll as F0AvatarIcon,
  Yv as F0AvatarList,
  fa as F0AvatarModule,
  Kg as F0AvatarPerson,
  Yg as F0AvatarTeam,
  og as F0BigNumber,
  lg as F0Box,
  Xe as F0Button,
  Xg as F0ButtonDropdown,
  Jg as F0ButtonToggle,
  Xv as F0Card,
  jl as F0Checkbox,
  vg as F0ChipList,
  ka as F0DatePicker,
  Qg as F0Dialog,
  ev as F0DialogContext,
  tv as F0DialogProvider,
  rv as F0EventCatcherProvider,
  Pf as F0FilterPickerContent,
  Eg as F0Form,
  kg as F0GridStack,
  yy as F0HILActionConfirmation,
  Sp as F0Heading,
  Rn as F0Icon,
  Pl as F0Link,
  nv as F0MessageSources,
  iv as F0OneIcon,
  sv as F0OneSwitch,
  Rg as F0Provider,
  nr as F0Select,
  Sg as F0TableOfContentPopover,
  Jv as F0TagAlert,
  Jc as F0TagBalance,
  Qv as F0TagCompany,
  av as F0TagDot,
  ey as F0TagList,
  ty as F0TagPerson,
  ql as F0TagRaw,
  od as F0TagStatus,
  ry as F0TagTeam,
  Pa as F0Text,
  ov as F0Thinking,
  lv as FullscreenChatContext,
  cv as GROUP_ID_SYMBOL,
  dv as H1,
  uv as H2,
  hv as H3,
  Jp as HomeLayout,
  fv as Hr,
  mv as Image,
  Kp as Layout,
  pv as Li,
  rg as LineChart,
  gv as Ol,
  vv as OneFilterPicker,
  yv as P,
  ng as PieChart,
  bv as Pre,
  cd as PrivacyModeProvider,
  bl as ProductBlankslate,
  ny as ProductCard,
  Dg as ProductModal,
  zp as ProductWidget,
  sg as ProgressBarChart,
  Yp as StandardLayout,
  xv as Strong,
  wv as Table,
  iy as Tag,
  sy as TagCounter,
  _v as Td,
  Cv as Th,
  Xp as TwoColumnLayout,
  Ev as Ul,
  Da as UpsellRequestResponseDialog,
  Fp as UpsellingBanner,
  Na as UpsellingButton,
  Ng as UpsellingPopover,
  ig as VerticalBarChart,
  by as actionItemStatuses,
  xy as aiTranslations,
  Zp as avatarVariants,
  kv as buildTranslations,
  hg as buttonDropdownSizes,
  ug as buttonDropdownVariants,
  dg as buttonSizes,
  fg as buttonToggleSizes,
  mg as buttonToggleVariants,
  cg as buttonVariants,
  ay as cardImageFits,
  oy as cardImageSizes,
  ly as createAtlaskitDriver,
  Sv as createDataSourceDefinition,
  Ad as createPageLayoutBlock,
  Td as createPageLayoutBlockGroup,
  Ag as dataCollectionLocalStorageHandler,
  yg as datepickerSizes,
  Ey as defaultTranslations,
  Dv as downloadTableAsExcel,
  jn as evaluateRenderIf,
  st as experimental,
  xg as f0FormField,
  Nv as f0MarkdownRenderers,
  Zt as generateAnchorId,
  Rv as getAnimationVariants,
  Av as getDataSourcePaginationType,
  Tv as getEmojiLabel,
  Ui as getF0Config,
  _g as getSchemaDefinition,
  wg as hasF0Config,
  im as inferFieldType,
  Ov as isInfiniteScrollPagination,
  Mv as isPageBasedPagination,
  ge as isZodType,
  pg as linkVariants,
  Lv as modules,
  wy as oneIconSizes,
  cy as predefinedPresets,
  dy as selectSizes,
  gg as tagDotColors,
  pt as unwrapZodSchema,
  Iv as useAiChat,
  _y as useAiChatTranslations,
  Pv as useData,
  zv as useDataSource,
  Fv as useDefaultCopilotActions,
  uy as useDndEvents,
  hy as useDraggable,
  fy as useDroppableList,
  Bv as useEmojiConfetti,
  Hv as useF0Dialog,
  Cg as useF0Form,
  Vv as useGroups,
  jv as useMessageSourcesAction,
  $v as useOrchestratorThinkingAction,
  my as usePrivacyMode,
  Wv as useReducedMotion,
  gl as useSchemaDefinition,
  Gv as useSelectable,
  Uv as useXRay
};
