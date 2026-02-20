import { D as se, G as Vt, M as Xs, N as xi, Q as wi, R as Cl, V as kl, W as Js, X as xt, u as ur, Y as Nn, Z as El, _ as Sl, $ as Dl, a0 as Nl, a1 as Xe, a2 as lt, a3 as Rl, a4 as Al, a5 as Qs, a6 as Tl, a7 as en, a8 as ea, a9 as ta, aa as ra, ab as na, ac as ia, ad as sa, ae as Ol, af as Ml, ag as Il, ah as Ll, ai as Pl, J as ft, aj as zl, ak as Fl, al as Bl, am as Hl, an as Vl, ao as Yi, ap as jl, aq as $l, ar as Wl, as as aa, at as Gl, au as oa, av as Ul, aw as nr, ax as Zl, ay as ql, az as Yl, aA as Kl, aB as Xl, aC as Jl, aD as Ql, aE as ec, aF as tc, aG as rc, aH as la, aI as nc, aJ as ic, aK as sc, aL as ac, aM as ca, aN as da, aO as oc, aP as lc, aQ as cc, aR as dc, aS as ua, aT as Ki, aU as uc, aV as hc, I as fc, aW as mc, aX as pc, aY as gc, aZ as vc } from "./F0AiChat-DlvnPh_4.js";
import { A as Ug, bd as Zg, B as qg, C as Yg, E as Kg, bs as Xg, h as Jg, F as Qg, a as ev, x as tv, i as rv, b as nv, a_ as iv, a$ as sv, b0 as av, b1 as ov, b3 as lv, b4 as cv, b5 as dv, b6 as uv, b7 as hv, b8 as fv, b9 as mv, b8 as pv, b9 as gv, bo as vv, s as yv, t as bv, v as xv, bc as wv, w as _v, c as Cv, be as kv, n as Ev, o as Sv, p as Dv, H as Nv, k as Rv, L as Av, O as Tv, bb as Ov, q as Mv, P as Iv, S as Lv, T as Pv, l as zv, m as Fv, U as Bv, bp as Hv, bj as Vv, r as jv, j as $v, bm as Wv, bi as Gv, bt as Uv, bh as Zv, bg as qv, b2 as Yv, d as Kv, bf as Xv, bk as Jv, e as Qv, bu as ey, ba as ty, ba as ry, bl as ny, g as iy, f as sy, br as ay, bn as oy, bq as ly } from "./F0AiChat-DlvnPh_4.js";
import { jsx as f, jsxs as V, Fragment as jt } from "react/jsx-runtime";
import * as at from "react";
import B, { forwardRef as Ge, useRef as Y, useImperativeHandle as yc, Children as tn, createContext as gt, useContext as ot, useState as J, useMemo as G, useEffect as X, useCallback as oe, useLayoutEffect as ii, createElement as Xi, isValidElement as ha, Fragment as fa, memo as bc, useReducer as xc, cloneElement as wc, PureComponent as _c } from "react";
import { createPortal as _i, unstable_batchedUpdates as Zr } from "react-dom";
import { L as ma, C as Cc, i as pa, D as kc, S as Ji, a as Ec, f as Wn, b as yr, c as Sc, A as Dc, d as qr, e as ga, E as Nc, g as Xr, h as Rc, j as Ac, k as Tc, l as er, m as va, u as Oc, G as Mc, n as Ic, o as Qi, p as Lc, q as ya, r as Pc, B as ba, X as xa, Y as si, s as zc, t as wa, v as Fc, w as Bc, x as Hc, y as Vc, z as jc, F as $c, H as Wc, I as Gc, J as es, K as Uc, M as _r, N as Gn, O as Zc, P as qc, Q as Yc, R as Kc, T as Xc, U as Jc, V as Qc, W as ed, Z as td, _ as rd, $ as nd, a0 as ts, a1 as id, a2 as _a, a3 as Ca, a4 as sd, a5 as ad, a6 as od, a7 as ld, a8 as cd, a9 as ka, aa as dd, ab as ud, ac as Ea, ad as Sa, ae as hd, af as fd, ag as rn, ah as md, ai as pd, aj as gd } from "./DataCollectionStorageProvider-7NjoZyfc.js";
import { aA as dy, ak as uy, al as hy, ao as fy, as as my, at as py, av as gy, aw as vy, ax as yy, ay as by, ar as xy, au as wy, am as _y, an as Cy, az as ky, ap as Ey, aq as Sy, aB as Dy, aC as Ny, aD as Ry, aE as Ay } from "./DataCollectionStorageProvider-7NjoZyfc.js";
import { A as Oy, F as My, c as Iy, b as Ly, a as Py, o as zy, u as Fy } from "./F0HILActionConfirmation-Bs4DOXyi.js";
import { defaultTranslations as Hy } from "./i18n-provider-defaults.js";
import './f0.css';const vd = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, yd = Ge(function({ widgets: e, children: t }, n) {
  const i = Y(null);
  yc(n, () => i.current);
  const s = tn.toArray(e).filter((a) => !!a).map((a, o) => f("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: a
  }, o));
  return f(ma, {
    layout: "home",
    children: V("div", {
      ref: i,
      className: "@container",
      children: [V("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [f(Cc, {
          columns: vd,
          showArrows: !1,
          children: s
        }), f("main", {
          children: t
        })]
      }), V("div", {
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
}), bd = Vt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Da = B.forwardRef(({ children: r, variant: e, className: t, ...n }, i) => f(ma, {
  layout: "standard",
  children: f("section", {
    ref: i,
    className: se("relative flex-1 overflow-auto", t),
    ...n,
    children: f("div", {
      className: se(bd({
        variant: e
      })),
      children: r
    })
  })
}));
Da.displayName = "StandardLayout";
const xd = Ge(function({ children: e, sideContent: t, mainColumnPosition: n = "left", sticky: i = !1 }, s) {
  return f("div", {
    ref: s,
    className: "h-full",
    children: V("div", {
      className: se("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", i && "md:sticky md:top-0 md:max-h-full"),
      children: [f("main", {
        className: se("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), f(wd, {
        sticky: i,
        className: se("order-1", n === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), wd = ({ children: r, className: e }) => f("aside", {
  className: se("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: r
}), Na = gt(null);
function Ra() {
  const r = ot(Na);
  if (!r)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return r;
}
function _d(r) {
  const { content: e, ...t } = r;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function tr(r) {
  const e = _d(r);
  return r.subGridOpts?.children && (e.subGridOpts = {
    ...r.subGridOpts,
    children: r.subGridOpts.children.map(
      (t) => tr(t)
    )
  }), e;
}
const Cd = ["noMove", "noResize", "locked", "w", "h", "x", "y"], Ot = 200;
function kd(r) {
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
function Ed({ children: r, options: e, onResizeStop: t, onChange: n, widgets: i }) {
  const [s, a] = J(null), o = Y(null), l = Y(!1), d = G(() => ({
    ...e,
    children: (i || []).map((D) => tr(D))
  }), [e, i]), [c, u] = J(() => {
    const D = /* @__PURE__ */ new Map(), O = i || [], x = (k) => {
      k.id && k.content && D.set(k.id, k.content), k.subGridOpts?.children && k.subGridOpts.children.forEach((C) => {
        x(C);
      });
    };
    return O.forEach((k) => {
      x(k);
    }), D;
  }), h = Y(c);
  X(() => {
    h.current = c;
  }, [c]);
  const [p, g] = J(() => {
    const D = /* @__PURE__ */ new Map(), O = i || [], x = (k) => {
      k.id && k._originalContent !== void 0 && D.set(k.id, k._originalContent), k.subGridOpts?.children && k.subGridOpts.children.forEach((C) => {
        x(C);
      });
    };
    return O.forEach((k) => {
      x(k);
    }), D;
  }), y = Y(p);
  X(() => {
    y.current = p;
  }, [p]);
  const [w, R] = J(() => {
    const D = /* @__PURE__ */ new Map(), O = i || [], x = (k) => {
      if (k.id) {
        const C = tr(k);
        D.set(k.id, C);
      }
      k.subGridOpts?.children && k.subGridOpts.children.forEach((C) => {
        x(C);
      });
    };
    return O.forEach((k) => {
      x(k);
    }), D;
  });
  Xs(() => {
    if (!s) return;
    const D = s.save();
    if (!Array.isArray(D))
      return;
    const O = D.map((I) => I.id), x = i || [], k = x.map((I) => I.id), C = x.filter((I) => !O.includes(I.id));
    C.length > 0 && (C.forEach((I) => {
      I.content && h.current.set(I.id, I.content), I._originalContent !== void 0 && y.current.set(I.id, I._originalContent);
    }), C.forEach((I) => {
      const N = tr(I);
      s.addWidget(N);
    }), R((I) => {
      const N = new Map(I);
      return C.forEach((E) => {
        const T = tr(E);
        N.set(E.id, T);
      }), N;
    }), u((I) => {
      const N = new Map(I);
      return C.forEach((E) => {
        E.content && N.set(E.id, E.content);
      }), N;
    }), g((I) => {
      const N = new Map(I);
      return C.forEach((E) => {
        E._originalContent !== void 0 && N.set(E.id, E._originalContent);
      }), N;
    }));
    const A = D.filter((I) => !k.includes(I.id));
    if (A.length > 0) {
      const I = A.map((N) => N.id).filter(Boolean);
      I.forEach((N) => {
        setTimeout(() => {
          h.current.delete(N), y.current.delete(N);
        }, Ot);
      }), A.forEach((N) => {
        const E = s.el.querySelector(`[gs-id="${N.id}"]`);
        E && setTimeout(() => {
          s.removeWidget(E, !0);
        }, Ot);
      }), R((N) => {
        const E = new Map(N);
        return I.forEach((T) => {
          setTimeout(() => {
            E.delete(T);
          }, Ot);
        }), E;
      }), u((N) => {
        const E = new Map(N);
        return I.forEach((T) => {
          if (E.get(T)) {
            const ie = s.el.querySelector(`[gs-id="${T}"] .grid-stack-item-content`);
            let fe = "";
            ie && (fe = kd(ie)), E.set(T, f(xi.div, {
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
            E.delete(T);
          }, Ot);
        }), E;
      }), g((N) => {
        const E = new Map(N);
        return I.forEach((T) => {
          setTimeout(() => {
            E.delete(T);
          }, Ot);
        }), E;
      });
    }
    const j = x.filter((I) => O.includes(I.id));
    if (j.length > 0) {
      const I = [];
      j.forEach((N) => {
        const E = D.find(($) => $.id === N.id);
        if (!E)
          return;
        const T = Cd.filter(($) => E[$] !== N[$]);
        if (T.length > 0) {
          const $ = {}, ie = ["w", "h", "x", "y"], fe = ["noMove", "noResize", "locked"], ne = T.filter((le) => ie.includes(le)), de = T.filter((le) => fe.includes(le));
          if (ne.length > 0 && de.length > 0 && ne.length + de.length === T.length ? de.forEach((le) => {
            const we = N[le];
            we !== void 0 && ($[le] = we);
          }) : T.forEach((le) => {
            const we = N[le];
            we !== void 0 && ($[le] = we);
          }), Object.keys($).length > 0) {
            const le = s.el.querySelector(`[gs-id="${N.id}"]`);
            le && I.push({
              id: N.id,
              element: le,
              updateOptions: $
            });
          }
        }
      }), j.forEach((N) => {
        N.content && h.current.set(N.id, N.content), N._originalContent !== void 0 && y.current.set(N.id, N._originalContent);
      }), I.forEach(({ element: N, updateOptions: E }) => {
        try {
          s.update(N, E);
        } catch (T) {
          console.warn("Error updating widget:", T);
        }
      }), R((N) => {
        const E = new Map(N);
        return j.forEach((T) => {
          const $ = tr(T);
          E.set(T.id, $);
        }), E;
      }), u((N) => {
        const E = new Map(N);
        return j.forEach((T) => {
          T.content && E.set(T.id, T.content);
        }), E;
      }), g((N) => {
        const E = new Map(N);
        return j.forEach((T) => {
          T._originalContent !== void 0 && E.set(T.id, T._originalContent);
        }), E;
      });
    }
    l.current || (l.current = !0);
  }, [i]), X(() => {
    if (!s || !d.handle) return;
    s.opts && (s.opts.handle = d.handle);
    const D = setTimeout(() => {
      if (s && s.el && d.handle && s.el.querySelectorAll(d.handle).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(D);
  }, [s, d.handle, d.children]);
  const S = oe(() => {
    if (!s)
      return;
    const D = s.save();
    if (Array.isArray(D)) {
      const O = D.map((x) => {
        const k = x.id;
        if (!k) return null;
        const C = h.current.get(k), A = y.current.get(k), j = x;
        return {
          ...x,
          id: k,
          w: x.w ?? 1,
          h: x.h ?? 1,
          x: x.x ?? 0,
          y: x.y ?? 0,
          meta: j.meta,
          _originalContent: A,
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
    const D = (O, x) => {
      t?.(O, x);
    };
    try {
      s.on("resizestop", D), s.on("change added removed", S);
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
  }, [s, t, S]), X(() => {
    o.current = s;
  }, [s]), X(() => {
    s && s.el && s.el.parentElement && l.current && S();
  }, [s]), f(Na.Provider, {
    value: {
      options: d,
      gridStack: s,
      _gridStack: {
        value: s,
        set: a
      },
      _rawWidgetMetaMap: {
        value: w,
        set: R
      },
      _reactContentMap: {
        value: c,
        set: u
      }
    },
    children: r
  });
}
const Aa = gt(null);
function Sd() {
  const r = ot(Aa);
  if (!r)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return r;
}
const Dd = gt(null);
function Nd() {
  const { _reactContentMap: r } = Ra(), { getWidgetContainer: e } = Sd();
  return f(jt, {
    children: Array.from(r.value.entries()).map(([t, n]) => {
      const i = e(t);
      return i ? f(Dd.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: n && _i(n, i)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function Rd(r, e, t, n, i) {
  const s = (...a) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + i + " and has been replaced with `" + n + "`. It will be **removed** in a future release"), e.apply(r, a));
  return s.prototype = e.prototype, s;
}
class b {
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
    return b.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
        e[i] === null || e[i] === void 0 ? e[i] = n[i] : typeof n[i] == "object" && typeof e[i] == "object" && b.defaults(e[i], n[i]);
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
        n[0] === "_" || i === s ? delete e[n] : i && typeof i == "object" && s !== void 0 && (b.removeInternalAndSame(i, s), Object.keys(i).length || delete e[n]);
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : b.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, n) {
    const i = b.getScrollElement(e);
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
    const i = b.getScrollElement(t), s = i.clientHeight, a = i === b.getScrollElement() ? 0 : i.getBoundingClientRect().top, o = e.clientY - a, l = o < n, d = o > s - n;
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], n = b.clone(e);
    for (const i in n)
      n.hasOwnProperty(i) && typeof n[i] == "object" && i.substring(0, 2) !== "__" && !t.find((s) => s === i) && (n[i] = b.cloneDeep(e[i]));
    return n;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let n;
    typeof t == "string" ? n = b.getElement(t) : n = t, n && n.appendChild(e);
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
    b.addElStyles(t, {
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
      let d;
      if (n.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(n, { ...n, y: e.y }, e) || !this.collide(n, { ...n, y: t.y - n.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: n.y + n.h, ...o };
        d = this._loading && b.samePos(e, c) ? !0 : this.moveNode(e, c), (n.locked || this._loading) && d ? b.copyPos(t, e) : !n.locked && d && i.pack && (this._packNodes(), t.y = n.y + n.h, b.copyPos(e, t)), a = a || d;
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
    return this.nodes.find((a) => a._id !== i && a._id !== s && b.isIntercepted(a, t));
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
    return this.nodes.filter((a) => a._id !== i && a._id !== s && b.isIntercepted(a, t));
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
      const h = Math.min(u, c);
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
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (i = b.isTouching(e, t)))
      return n();
    if (i !== !1) {
      if (e.w === t.w && e.x === t.x && (i || (i = b.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return n();
      }
      if (i !== !1) {
        if (e.h === t.h && e.y === t.y && (i || (i = b.isTouching(e, t)))) {
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
    return this.nodes = b.sort(this.nodes, e), this;
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
    return b.defaults(e, i), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, b.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = i.x, e.autoPosition = !0), isNaN(e.y) && (e.y = i.y, e.autoPosition = !0), isNaN(e.w) && (e.w = i.w), isNaN(e.h) && (e.h = i.h), this.nodeBoundFix(e, t), e;
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
    const n = e._orig || b.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), b.samePos(e, n) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !b.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = b.copyPos({}, e), delete e._dirty;
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
      !e._orig || b.samePos(e, e._orig) || (b.copyPos(e, e._orig), e._dirty = !0);
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
      t.find((u) => b.isIntercepted(c, u)) || ((e.x !== l || e.y !== d) && (e._dirty = !0), e.x = l, e.y = d, delete e.autoPosition, a = !0);
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
      o && (b.copyPos(o, a), o._dirty = !0);
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
    return this.cleanupNode(n), delete n.el, delete n._id, delete n.content, delete n.grid, t.addNode(n), t.getRow() <= this.maxRow ? (e._willFitPos = b.copyPos({}, n), !0) : !1;
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
    const i = e.w !== t.w || e.h !== t.h, s = b.copyPos({}, e, !0);
    if (b.copyPos(s, t), this.nodeBoundFix(s, i), b.copyPos(t, s), !t.forceCollide && b.samePos(e, t))
      return !1;
    const a = b.copyPos({}, e), o = this.collideAll(e, s, t.skip);
    let l = !0;
    if (o.length) {
      const d = e._moving && !t.nested;
      let c = d ? this.directionCollideCoverage(e, t, o) : o[0];
      if (d && c && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = b.areaIntercept(t.rect, c._rect), h = b.area(t.rect), p = b.area(c._rect);
        u / (h < p ? h : p) > 0.8 && (c.grid.makeSubGrid(c.el, void 0, e), c = void 0);
      }
      c ? l = !this._fixCollisions(e, s, c, t) : (l = !1, n && delete t.pack);
    }
    return l && !b.samePos(e, s) && (e._dirty = !0, b.copyPos(e, s)), t.pack && this._packNodes()._notify(), !b.samePos(e, a);
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
      b.removeInternalForSave(d, !e), t && t(o, d), a.push(d);
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
    let s = [], a = i ? this.nodes : b.sort(this.nodes, -1);
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
      s = b.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((o) => {
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
const ht = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class wt {
}
function nn(r, e) {
  r.touches.length > 1 || (r.cancelable && r.preventDefault(), b.simulateMouseEvent(r.changedTouches[0], e));
}
function Ta(r, e) {
  r.cancelable && r.preventDefault(), b.simulateMouseEvent(r, e);
}
function sn(r) {
  wt.touchHandled || (wt.touchHandled = !0, nn(r, "mousedown"));
}
function an(r) {
  wt.touchHandled && nn(r, "mousemove");
}
function on(r) {
  if (!wt.touchHandled)
    return;
  wt.pointerLeaveTimeout && (window.clearTimeout(wt.pointerLeaveTimeout), delete wt.pointerLeaveTimeout);
  const e = !!K.dragElement;
  nn(r, "mouseup"), e || nn(r, "click"), wt.touchHandled = !1;
}
function ln(r) {
  r.pointerType !== "mouse" && r.target.releasePointerCapture(r.pointerId);
}
function rs(r) {
  K.dragElement && r.pointerType !== "mouse" && Ta(r, "mouseenter");
}
function ns(r) {
  K.dragElement && r.pointerType !== "mouse" && (wt.pointerLeaveTimeout = window.setTimeout(() => {
    delete wt.pointerLeaveTimeout, Ta(r, "mouseleave");
  }, 10));
}
class Rn {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Rn.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), ht && (this.el.addEventListener("touchstart", sn), this.el.addEventListener("pointerdown", ln)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), ht && (this.el.removeEventListener("touchstart", sn), this.el.removeEventListener("pointerdown", ln)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ht && (this.el.addEventListener("touchmove", an), this.el.addEventListener("touchend", on)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ht && (this.el.removeEventListener("touchmove", an), this.el.removeEventListener("touchend", on)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
class Ci {
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
class Ar extends Ci {
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
    this.sizeToContent = b.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = b.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = b.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const n = b.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(n, this._ui()), this.triggerEvent("resize", n), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = b.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = Ar._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = b.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Ar._originStyleProp.forEach((e, t) => {
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
Ar._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const Ad = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class Tr extends Ci {
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
      e.addEventListener("mousedown", this._mouseDown), ht && (e.addEventListener("touchstart", sn), e.addEventListener("pointerdown", ln));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), ht && (t.removeEventListener("touchstart", sn), t.removeEventListener("pointerdown", ln));
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
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(Ad) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete K.dragElement, delete K.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ht && (e.currentTarget.addEventListener("touchmove", an), e.currentTarget.addEventListener("touchend", on)), e.preventDefault(), document.activeElement && document.activeElement.blur(), K.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = b.initEvent(e, { target: this.el, type: "drag" });
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
      n ? K.dropElement = n.el.ddElement.ddDroppable : delete K.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = b.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = b.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ht && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", an, !0), e.currentTarget.removeEventListener("touchend", on, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), K.dropElement?.el === this.el.parentElement && delete K.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = b.initEvent(e, { target: this.el, type: "dragstop" });
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
      if (!b.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, n.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", b.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = b.cloneNode(this.el)), e.parentElement || b.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = Tr.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", Tr.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = n, 50);
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
Tr.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Td extends Ci {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), ht && (this.el.addEventListener("pointerenter", rs), this.el.addEventListener("pointerleave", ns)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), ht && (this.el.removeEventListener("pointerenter", rs), this.el.removeEventListener("pointerleave", ns)));
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
    const t = b.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(K.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!K.dragElement || K.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = b.initEvent(e, { target: this.el, type: "dropout" });
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
    const t = b.initEvent(e, { target: this.el, type: "drop" });
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new Tr(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Ar(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Td(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Od {
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
      n(s, K.dragElement ? K.dragElement.el : s.target, K.dragElement ? K.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", i = b.getElements(e);
    return i.length ? i.map((a) => a.ddElement || (n ? ki.init(a) : null)).filter((a) => a) : [];
  }
}
const Fe = new Od();
class Z {
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
    const n = Z.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new Z(n, b.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (Z.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new Z(i, b.cloneDeep(e))), n.push(i.gridstack);
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
    return (!e.classList.contains("grid-stack") || Z.addRemoveCB) && (Z.addRemoveCB ? n = Z.addRemoveCB(e, t, !0, !0) : n = b.createDiv(["grid-stack", t.class], e)), Z.init(t, n);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    Z.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = b.createDiv([this.opts.placeholderClass, Ke.itemClass, this.opts.itemClass]);
      const e = b.createDiv(["placeholder-content"], this._placeholder);
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
    const n = b.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const i = t.columnOpts;
    if (i) {
      const d = i.breakpoints;
      !i.columnWidth && !d?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, d?.length > 1 && d.sort((c, u) => (u.w || 0) - (c.w || 0)));
    }
    const s = {
      ...b.cloneDeep(Ke),
      column: b.toNumber(e.getAttribute("gs-column")) || Ke.column,
      minRow: n || b.toNumber(e.getAttribute("gs-min-row")) || Ke.minRow,
      maxRow: n || b.toNumber(e.getAttribute("gs-max-row")) || Ke.maxRow,
      staticGrid: b.toBool(e.getAttribute("gs-static")) || Ke.staticGrid,
      sizeToContent: b.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Ke.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Ke.removableOptions.accept,
        decline: Ke.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = b.toBool(e.getAttribute("gs-animate"))), t = b.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + Ke.itemClass)?.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Ke.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const d = t.cellHeight;
      delete t.cellHeight, this.cellHeight(d);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = ht), this._setStaticClass();
    const l = t.engineClass || Z.engineClass || Dt;
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
    if (n.grid = this, n.el ? t = n.el : Z.addRemoveCB ? t = Z.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
      return;
    if (n = t.gridstackNode, n && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === n._id))
      return t;
    const i = this._readAttr(t);
    return b.defaults(e, i), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = b.createDiv(["grid-stack-item", this.opts.itemClass]), n = b.createDiv(["grid-stack-item-content"], t);
    return b.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([i]) => {
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, Z.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : Z.renderCB(n, e), t;
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
    t = b.cloneDeep({
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
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, b.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), Z.addRemoveCB ? c = Z.addRemoveCB(this.el, u, !0, !1) : (c = b.createDiv(["grid-stack-item"]), c.appendChild(d), d = b.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const p = l ? t.column : s.w, g = s.h + n.h, y = s.el.style;
      y.transition = "none", this.update(s.el, { w: p, h: g }), setTimeout(() => y.transition = null);
    }
    const h = s.subGrid = Z.addGrid(d, t);
    return n?._moving && (h._isTemp = !0), l && (h._autoColumn = !0), i && h.makeWidget(c, u), n && (n._moving ? window.setTimeout(() => b.simulateMouseEvent(n._event, "mouseenter", h.el), 0) : h.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((n) => {
      n.x += this.parentGridNode.x, n.y += this.parentGridNode.y, t.makeWidget(n.el, n);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => b.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, n = Z.saveCB, i) {
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
      const a = b.cloneDeep(this.opts);
      a.marginBottom === a.marginTop && a.marginRight === a.marginLeft && a.marginTop === a.marginRight && (a.margin = a.marginTop, delete a.marginTop, delete a.marginRight, delete a.marginBottom, delete a.marginLeft), a.rtl === (this.el.style.direction === "rtl") && (a.rtl = "auto"), this._isAutoCellHeight && (a.cellHeight = "auto"), this._autoColumn && (a.column = "auto");
      const o = a._alwaysShowResizeHandle;
      return delete a._alwaysShowResizeHandle, o !== void 0 ? a.alwaysShowResizeHandle = o : delete a.alwaysShowResizeHandle, b.removeInternalAndSame(a, Ke), a.children = s, a;
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
  load(e, t = Z.addRemoveCB || !0) {
    e = b.cloneDeep(e);
    const n = this.getColumn();
    e.forEach((c) => {
      c.w = c.w || c.minW || 1, c.h = c.h || c.minH || 1;
    }), e = b.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((c) => {
      i = Math.max(i, (c.x || 0) + c.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = Z.addRemoveCB;
    typeof t == "function" && (Z.addRemoveCB = t);
    const a = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, l = o && this.opts.animate;
    l && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      b.find(e, u.id) || (Z.addRemoveCB && Z.addRemoveCB(this.el, u, !1, !1), a.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const d = [];
    return this.engine.nodes = this.engine.nodes.filter((c) => b.find(e, c.id) ? (d.push(c), !1) : !0), e.forEach((c) => {
      const u = b.find(d, c.id);
      if (u) {
        if (b.shouldSizeToContent(u) && (c.h = u.h), this.engine.nodeBoundFix(c), (c.autoPosition || c.x === void 0 || c.y === void 0) && (c.w = c.w || u.w, c.h = c.h || u.h, this.engine.findEmptyPosition(c)), this.engine.nodes.push(u), b.samePos(u, c) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...c, forceCollide: !0 }), b.copyPos(c, u)), this.update(u.el, c), c.subGridOpts?.children) {
          const h = u.el.querySelector(".grid-stack");
          h && h.gridstack && h.gridstack.load(c.subGridOpts.children);
        }
      } else t && this.addWidget(c);
    }), delete this.engine._loading, this.engine.removedNodes = a, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? Z.addRemoveCB = s : delete Z.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const i = b.toNumber(t.getAttribute("gs-h")) || 1;
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
    const t = b.parseHeight(e);
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
    const n = Z.getElement(e);
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
    return e ? (Z.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((a) => i === a.el)), s && (t && Z.addRemoveCB && Z.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, n), t && i.parentElement && i.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && Z.addRemoveCB && Z.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
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
    return Z.getElements(e).forEach((n) => {
      const i = n?.gridstackNode;
      if (!i)
        return;
      const s = { ...b.copyPos({}, i), ...b.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const a = ["x", "y", "w", "h"];
      let o;
      if (a.some((c) => s[c] !== void 0 && s[c] !== i[c]) && (o = {}, a.forEach((c) => {
        o[c] = s[c] !== void 0 ? s[c] : i[c], delete s[c];
      })), !o && (s.minW || s.minH || s.maxW || s.maxH) && (o = {}), s.content !== void 0) {
        const c = n.querySelector(".grid-stack-item-content");
        c && c.textContent !== s.content && (i.content = s.content, Z.renderCB(c, s), i.subGrid?.el && (c.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, d = !1;
      for (const c in s)
        c[0] !== "_" && i[c] !== s[c] && (i[c] = s[c], l = !0, d = d || !this.opts.staticGrid && (c === "noResize" || c === "noMove" || c === "locked"));
      if (b.sanitizeMinMax(i), o) {
        const c = o.w !== void 0 && o.w !== i.w;
        this.moveNode(i, o), c && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(c, i), delete i._orig;
      }
      (o || l) && this._writeAttr(n, i), d && this.prepareDragDrop(i.el), Z.updateCB && Z.updateCB(i);
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
    if (t.resizeToContentParent && (a = e.querySelector(t.resizeToContentParent)), a || (a = e.querySelector(Z.resizeToContentParent)), !a)
      return;
    const o = e.clientHeight - a.clientHeight, l = t.h ? t.h * i - o : a.clientHeight;
    let d;
    if (t.subGrid) {
      d = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const h = t.subGrid.el.getBoundingClientRect(), p = e.getBoundingClientRect();
      d += h.top - p.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const h = a.firstElementChild;
        if (!h) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${Z.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        d = h.getBoundingClientRect().height || l;
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
    Z.resizeToContentCB ? Z.resizeToContentCB(e) : this.resizeToContent(e);
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
    return Z.getElements(e).forEach((n) => {
      const i = n.gridstackNode;
      if (!b.canBeRotated(i))
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
      const n = b.parseHeight(e);
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
      const s = b.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === i) {
        const a = Math.floor(s.h / n);
        t < a && (t = a);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * n + i), e && b.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, n) {
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(Ke.itemClass, this.opts.itemClass);
    const i = b.shouldSizeToContent(n);
    return i ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), i && this.resizeToContentCheck(!1, n), b.lazyLoad(n) || this.prepareDragDrop(n.el), this;
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
    n.x = b.toNumber(e.getAttribute("gs-x")), n.y = b.toNumber(e.getAttribute("gs-y")), n.w = b.toNumber(e.getAttribute("gs-w")), n.h = b.toNumber(e.getAttribute("gs-h")), n.autoPosition = b.toBool(e.getAttribute("gs-auto-position")), n.noResize = b.toBool(e.getAttribute("gs-no-resize")), n.noMove = b.toBool(e.getAttribute("gs-no-move")), n.locked = b.toBool(e.getAttribute("gs-locked"));
    const i = e.getAttribute("gs-size-to-content");
    i && (i === "true" || i === "false" ? n.sizeToContent = b.toBool(i) : n.sizeToContent = parseInt(i, 10)), n.id = e.getAttribute("gs-id"), n.maxW = b.toNumber(e.getAttribute("gs-max-w")), n.minW = b.toNumber(e.getAttribute("gs-min-w")), n.maxH = b.toNumber(e.getAttribute("gs-max-h")), n.minH = b.toNumber(e.getAttribute("gs-min-h")), t && (n.w === 1 && e.removeAttribute("gs-w"), n.h === 1 && e.removeAttribute("gs-h"), n.maxW && e.removeAttribute("gs-max-w"), n.minW && e.removeAttribute("gs-min-w"), n.maxH && e.removeAttribute("gs-max-h"), n.minH && e.removeAttribute("gs-min-h"));
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
        b.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((n) => b.shouldSizeToContent(n))) {
        const n = [...this.engine.nodes];
        this.batchUpdate(), n.forEach((i) => {
          b.shouldSizeToContent(i) && this.resizeToContentCBCheck(i.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((n) => n.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = b.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return b.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return b.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return Z.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return b.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, n = [];
    typeof this.opts.margin == "string" && (n = this.opts.margin.split(" ")), n.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = n[0], this.opts.marginLeft = this.opts.marginRight = n[1]) : n.length === 4 ? (this.opts.marginTop = n[0], this.opts.marginRight = n[1], this.opts.marginBottom = n[2], this.opts.marginLeft = n[3]) : (e = b.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((a) => {
      this.opts[a] === void 0 ? this.opts[a] = t : (e = b.parseHeight(this.opts[a]), this.opts[a] = e.h, delete this.opts.margin);
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
    t?.pause !== void 0 && (K.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? b.getElements(e, i) : e).forEach((a, o) => {
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
    return this.opts.staticGrid ? this : (Z.getElements(e).forEach((n) => {
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
    return this.opts.staticGrid ? this : (Z.getElements(e).forEach((n) => {
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && Z._itemRemoving(e.el, !1), this.engine.restoreInitial());
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
            Fe.off(s, "drag");
            return;
          }
          o._willFitPos && (b.copyPos(o, o._willFitPos), delete o._willFitPos);
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
      o._temporaryRemoved = !0) : (o.w = l, o.h = d, o._temporaryRemoved = !0), Z._itemRemoving(o.el, !1), Fe.on(s, "drag", n), n(i, s, a), !1;
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
        const h = c.grid;
        h.engine.removeNodeFromLayoutCache(c), h.engine.removedNodes.push(c), h._triggerRemoveEvent()._triggerChangeEvent(), h.parentGridNode && !h.engine.nodes.length && h.opts.subGridDynamic && h.removeAsSubGrid();
      }
      if (!o || (l && (this.engine.cleanupNode(o), o.grid = this), delete o.grid?._isTemp, Fe.off(s, "drag"), a !== s ? (a.remove(), s = a) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = o.subGrid?.el?.gridstack;
      return b.copyPos(o, this._readAttr(this.placeholder)), b.removePositioningStyles(s), d && (o.content || o.subGridOpts || Z.addRemoveCB) ? (delete o.el, s = this.addWidget(o)) : (this._prepareElement(s, !0, o), this.el.appendChild(s), this.resizeToContentCheck(!1, o), u && (u.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, c && c.grid ? c : void 0, o), !1;
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
    return e ? (!this.opts.staticGrid && !Fe.isDroppable(e) && Fe.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => Z._itemRemoving(n, !0)).on(e, "dropout", (t, n) => Z._itemRemoving(n, !1)), this) : this;
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
      const d = (h, p) => {
        this.triggerEvent(h, h.target), o = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, h, p, n, o, l);
      }, c = (h, p) => {
        this._dragOrResize(e, h, p, n, o, l);
      }, u = (h) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete n._moving, delete n._resizing, delete n._event, delete n._lastTried;
        const p = n.w !== n._orig.w, g = h.target;
        if (!(!g.gridstackNode || g.gridstackNode.grid !== this)) {
          if (n.el = g, n._isAboutToRemove) {
            const y = e.gridstackNode.grid;
            y._gsEventHandler[h.type] && y._gsEventHandler[h.type](h, g), y.engine.nodes.push(n), y.removeWidget(e, !0, !0);
          } else
            b.removePositioningStyles(g), n._temporaryRemoved ? (this._writePosAttr(g, n), this.engine.addNode(n)) : this._writePosAttr(g, n), this.triggerEvent(h, g);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), h.type === "resizestop" && (Number.isInteger(n.sizeToContent) && (n.sizeToContent = n.h), this.resizeToContentCheck(p, n));
        }
      };
      Fe.draggable(e, {
        start: d,
        stop: u,
        drag: c
      }).resizable(e, {
        start: d,
        stop: u,
        resize: c
      }), n._initDD = !0;
    }
    return Fe.draggable(e, i ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, n, i, s, a) {
    if (this.engine.cleanNodes().beginUpdate(i), this._writePosAttr(this.placeholder, i), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = i, i.grid?.el)
      this.dragTransform = b.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const o = this.placeholder.closest(".grid-stack");
      this.dragTransform = b.getValuesFromTransformedElement(o);
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
    let l, d = this.opts.marginLeft, c = this.opts.marginRight, u = this.opts.marginTop, h = this.opts.marginBottom;
    const p = Math.round(a * 0.1), g = Math.round(s * 0.1);
    if (d = Math.min(d, g), c = Math.min(c, g), u = Math.min(u, p), h = Math.min(h, p), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const w = n.position.top - i._prevYPix;
      i._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && b.updateScrollPosition(e, n.position, w);
      const R = n.position.left + (n.position.left > i._lastUiPosition.left ? -c : d), S = n.position.top + (n.position.top > i._lastUiPosition.top ? -h : u);
      o.x = Math.round(R / s), o.y = Math.round(S / a);
      const D = this._extraDragRow;
      if (this.engine.collide(i, o)) {
        const O = this.getRow();
        let x = Math.max(0, o.y + i.h - O);
        this.opts.maxRow && O + x > this.opts.maxRow && (x = Math.max(0, this.opts.maxRow - O)), this._extraDragRow = x;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== D && this._updateContainerHeight(), i.x === o.x && i.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (b.updateScrollResize(t, e, a), o.w = Math.round((n.size.width - d) / s), o.h = Math.round((n.size.height - u) / a), i.w === o.w && i.h === o.h) || i._lastTried && i._lastTried.w === o.w && i._lastTried.h === o.h)
        return;
      const w = n.position.left + d, R = n.position.top + u;
      o.x = Math.round(w / s), o.y = Math.round(R / a), l = !0;
    }
    i._event = t, i._lastTried = o;
    const y = {
      x: n.position.left + d,
      y: n.position.top + u,
      w: (n.size ? n.size.width : i.w * s) - d - c,
      h: (n.size ? n.size.height : i.h * a) - u - h
    };
    if (this.engine.moveNodeCheck(i, { ...o, cellWidth: s, cellHeight: a, rect: y, resizing: l })) {
      i._lastUiPosition = n.position, this.engine.cacheRects(s, a, u, c, h, d), delete i._skipDown, l && i.subGrid && i.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const w = t.target;
      i._sidebarOrig || this._writePosAttr(w, i), this.triggerEvent(t, w);
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
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = i, this.opts.removable === !0 && Z._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return Rd(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
Z.renderCB = (r, e) => {
  r && e?.content && (r.textContent = e.content);
};
Z.resizeToContentParent = ".grid-stack-item-content";
Z.Utils = b;
Z.Engine = Dt;
Z.GDRev = "12.3.2";
const Yr = /* @__PURE__ */ new WeakMap();
function Md({ children: r }) {
  const { _gridStack: { value: e, set: t }, options: n } = Ra(), i = Y(/* @__PURE__ */ new Map()), s = Y(null), a = Y(n), o = oe((c, u) => {
    if (u.id && u.grid) {
      let h = Yr.get(u.grid);
      h || (h = /* @__PURE__ */ new Map(), Yr.set(u.grid, h)), h.set(u.id, c), i.current.set(u.id, c);
    }
  }, []), l = oe(() => {
    if (s.current) {
      Z.renderCB = o;
      const c = Z.init(a.current, s.current);
      return c && a.current.handle && c.opts && (c.opts.handle = a.current.handle), c;
    }
    return null;
  }, [o]), d = (c, u) => {
    const { children: h, ...p } = c, { children: g, ...y } = u;
    return pa(p, y);
  };
  return ii(() => {
    if (!d(n, a.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), Yr.delete(e), a.current = n, t(null);
      } catch (c) {
        console.error("Error destroying gridstack", c);
      }
    else e && (a.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), ii(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, l, t]), f(Aa.Provider, {
    value: G(() => ({
      getWidgetContainer: (c) => {
        if (e) {
          const u = Yr.get(e);
          if (u?.has(c))
            return u.get(c) || null;
        }
        return i.current.get(c) || null;
      }
    }), [e]),
    children: f("div", {
      ref: s,
      children: e ? r : null
    })
  });
}
const Ei = ({ options: r, widgets: e, onChange: t, className: n }) => {
  const i = G(() => JSON.stringify(e.map((l) => ({
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
  }))), [e]), s = G(() => ({
    ...r,
    class: n
  }), [r, i, n]), a = (l, d, c) => {
    let u = c[0], h = 1 / 0;
    for (const p of c) {
      const g = p.w - l, y = p.h - d, w = g * g + y * y;
      w < h && (h = w, u = p);
    }
    return u;
  };
  return f(Ed, {
    options: s,
    widgets: e,
    onResizeStop: (l, d) => {
      const c = d.gridstackNode;
      if (!c) return;
      const u = d.gridstackNode?.allowedSizes ?? [];
      if (u.length === 0)
        return;
      const h = a(c.w ?? 1, c.h ?? 1, u ?? []);
      (c.w !== h.w || c.h !== h.h) && c.grid?.update(d, {
        w: h.w,
        h: h.h
      });
    },
    onChange: t,
    children: f(Md, {
      children: f(Nd, {})
    })
  });
};
Ei.displayName = "F0GridStack";
const Id = (r, e, t) => f("div", {
  children: r
}), An = ({ widgets: r = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: n = Id, main: i = !1, deps: s }) => {
  const a = oe((x, k, C) => f(xi.div, {
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
    children: n(x, k, C)
  }), [n]), o = G(() => ({
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
  }), []), l = (x, k) => {
    if (typeof x.content == "function" && x.deps && k) {
      const C = {};
      return x.deps.forEach((A) => {
        typeof A == "string" && k[A] !== void 0 && (C[A] = k[A]);
      }), x.content(C);
    }
    return typeof x.content == "function" ? null : x.content;
  }, d = (x, k, C) => x.map((A) => {
    const j = l(A, C), I = {
      id: A.id,
      h: A.h ?? 1,
      w: A.w ?? 1,
      allowedSizes: A.availableSizes,
      noMove: !k,
      noResize: !k,
      locked: A.locked,
      meta: A.meta,
      _originalContent: j,
      content: a(j, A.meta, k)
    };
    return A.x !== void 0 && (I.x = A.x), A.y !== void 0 && (I.y = A.y), I;
  }), [c, u] = J(d(r, e)), h = Y(e), p = Y(r), g = Y(!1), y = Y(/* @__PURE__ */ new Map()), w = Y(r);
  w.current = r;
  const R = Y(s), S = G(() => {
    const x = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || r.forEach((k) => {
      if (k.deps && k.deps.length > 0) {
        const C = k.deps.map((A) => typeof A == "string" && s[A] !== void 0 ? s[A] : A).filter((A) => A !== null);
        x.set(k.id, C);
      }
    }), x;
  }, [r, s]), D = oe((x) => {
    u(x), g.current || t(x.map((k) => {
      const C = w.current.find((A) => A.id === k.id);
      return {
        id: k.id,
        w: k.w ?? 1,
        h: k.h ?? 1,
        allowedSizes: k.allowedSizes,
        meta: k.meta,
        content: typeof C?.content == "function" ? C.content : k._originalContent,
        x: k.x ?? 0,
        y: k.y ?? 0,
        locked: k.locked,
        deps: C?.deps
      };
    })), g.current = !1;
  }, [t]), O = (x, k) => !x && !k ? !1 : !x || !k || x.length !== k.length ? !0 : x.some((C, A) => C !== k[A]);
  return X(() => {
    const x = h.current !== e, k = p.current !== r, C = R.current !== s && (R.current === void 0 || s === void 0 || Object.keys(R.current).length !== Object.keys(s).length || Object.keys(s).some((N) => R.current?.[N] !== s[N])), A = /* @__PURE__ */ new Map();
    r.forEach((N) => {
      if (N.deps && N.deps.length > 0) {
        const E = y.current.get(N.id), T = S.get(N.id);
        A.set(N.id, O(E, T)), T ? y.current.set(N.id, T) : y.current.delete(N.id);
      }
    });
    const j = new Set(r.map((N) => N.id));
    y.current.forEach((N, E) => {
      j.has(E) || y.current.delete(E);
    });
    const I = Array.from(A.values()).some((N) => N) || C;
    x && !k && !I ? (g.current = !0, u((N) => N.map((E) => {
      const T = r.find((ie) => ie.id === E.id);
      if (!T)
        return E;
      const $ = l(T, s);
      return {
        ...E,
        noMove: !e,
        noResize: !e,
        locked: T.locked,
        meta: T.meta,
        _originalContent: $,
        content: a($, T.meta, e)
      };
    }))) : (k || I) && u((N) => {
      const E = new Map(N.map((T) => [T.id, T]));
      return r.map((T) => {
        const $ = E.get(T.id), ie = A.get(T.id) ?? !1;
        let fe;
        ie || !$ ? fe = l(T, s) : fe = $._originalContent ?? l(T, s);
        const ne = {
          id: T.id,
          h: $?.h ?? T.h ?? 1,
          w: $?.w ?? T.w ?? 1,
          allowedSizes: T.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: T.locked,
          meta: T.meta,
          _originalContent: fe,
          content: a(fe, T.meta, e)
        }, de = $?.x ?? T.x, le = $?.y ?? T.y;
        return de !== void 0 && (ne.x = de), le !== void 0 && (ne.y = le), ne;
      });
    }), h.current = e, p.current = r, R.current = s;
  }, [r, e, a, S, s]), f(Ei, {
    className: se(i && "h-full flex-1 overflow-auto"),
    options: o,
    onChange: D,
    widgets: c
  });
};
An.displayName = "GroupGrid";
An.__isPageLayoutGroup = !0;
const Ld = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutBlock = !0, t;
}, Pd = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutGroup = !0, t;
}, zd = (r, e) => f("svg", {
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
}), Oa = Ge(zd), Fd = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], Ma = Ge((r, e) => {
  const t = Fd.reduce((n, i) => {
    const { [i]: s, ...a } = n;
    return a;
  }, r);
  return f(wi, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: r.icon == Oa
  });
});
Ma.displayName = "AIButton";
const Un = Vt({
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
}), Bd = {
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
}, Si = Ge(({ content: r, variant: e, align: t, className: n, as: i, ellipsis: s, noEllipsisTooltip: a, markdown: o, ...l }, d) => {
  const c = i ?? Bd[e ?? "body"];
  if (s !== void 0)
    return f(Cl, {
      ref: d,
      lines: typeof s == "number" ? s : 1,
      noTooltip: a,
      tag: c,
      className: se(Un({
        variant: e,
        align: t
      }), n),
      markdown: o,
      ...l,
      children: r
    });
  if (o) {
    const u = kl(r);
    return Xi(c, {
      ...l,
      className: se(Un({
        variant: e,
        align: t
      }), n),
      ref: d,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return Xi(c, {
    ...l,
    className: se(Un({
      variant: e,
      align: t
    }), n),
    ref: d
  }, r);
});
Si.displayName = "Text";
const Ia = Ge((r, e) => f(Si, {
  ref: e,
  markdown: r.markdown ?? !0,
  ...r
}));
Ia.displayName = "F0Text";
const ng = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], La = ({ title: r, draggable: e = !1, onDragStart: t, onDragEnd: n, isDragging: i = !1, AIButton: s, actions: a, children: o, selected: l = !1 }) => {
  const [d, c] = J(!1), [u, h] = J(!1), p = ur(), g = (w) => {
    c(w);
  }, y = u || d;
  return X(() => {
    if (!i || !n) return;
    const w = () => {
      n();
    };
    return document.addEventListener("mouseup", w), () => {
      document.removeEventListener("mouseup", w);
    };
  }, [i, n]), V("div", {
    className: se("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && d ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [V("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [V("div", {
        className: se("flex min-w-0 flex-1 items-center", !e && "pl-4", !a && !s && "pr-4"),
        children: [e && f("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: f(Nn, {
            icon: El,
            size: "xs"
          })
        }), f("div", {
          className: se("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: f(Ia, {
            variant: "label",
            content: r,
            ellipsis: !0
          })
        })]
      }), f(Sl, {
        children: (s || a) && y && V(xi.div, {
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
            children: f(Ma, {
              size: "sm",
              label: p.ai.ask,
              onClick: s,
              icon: Oa
            })
          }), a && f(Dl, {
            items: a,
            open: d,
            onOpenChange: g,
            align: "end",
            children: f(wi, {
              icon: Nl,
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
    }), f("div", {
      className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4",
      children: o
    })]
  });
}, Hd = () => V("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [f("div", {
    className: "flex h-12 w-full items-center px-4",
    children: f(xt, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), V("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [f(xt, {
      className: "h-1/2 w-full rounded-sm"
    }), f(xt, {
      className: "h-1/3 w-full rounded-sm"
    }), f(xt, {
      className: "h-1/5 w-full rounded-sm"
    }), f(xt, {
      className: "h-1/3 w-full rounded-sm"
    }), f(xt, {
      className: "h-full w-full rounded-sm"
    }), f(xt, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
La.displayName = "F0Widget";
const Vd = Js(La, Hd), jd = ({ children: r, title: e, draggable: t = !1, actions: n, aiButton: i }) => f(Vd, {
  title: e,
  draggable: t,
  actions: n,
  AIButton: i,
  children: r
}), Pa = ({ widgets: r, editMode: e = !1, onChange: t = () => {
}, deps: n, ...i }) => f(An, {
  widgets: r,
  editMode: e,
  onChange: t,
  deps: n,
  ...i,
  WidgetWrapper: (s, a, o) => f(jd, {
    title: a?.title ?? "",
    draggable: o,
    actions: a?.actions,
    aiButton: a?.aiButton,
    children: s
  })
});
Pa.displayName = "Dashboard";
const $d = Pd("Dashboard", Pa), ig = Xe("Dashboard", $d), Wd = Vt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Gd = (r) => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), Ud = (r) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(r) ? r.every(e) ? [{
    items: r
  }] : r : [r];
}, Tn = Ge(({ children: r, variant: e = "default", className: t, draggable: n = !1, onDragStart: i, onDragEnd: s, onDrop: a, dragId: o, primaryAction: l, ...d }, c) => {
  const u = G(() => Ud(d.actions || []), [d.actions]), h = G(() => u.flatMap((g) => g.items), [u]), p = G(() => h.length > 0 || !!l, [h, l]);
  return V("div", {
    ref: c,
    className: se(Wd({
      variant: e
    }), "relative", t),
    draggable: n,
    onDragStart: i,
    onDragEnd: s,
    onDrop: a,
    "data-drag-id": o,
    ...d,
    children: [p && V("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, h.length > 0 && f(kc, {
        items: Gd(u)
      })]
    }), f("div", {
      children: r
    })]
  });
});
Tn.displayName = "Block";
Tn.__isPageLayoutBlock = !0;
const Zd = ({ title: r = "", description: e, titleLevel: t = "h2", children: n, className: i, ...s }) => {
  if (!r) return null;
  const a = t;
  return V(Tn, {
    ...s,
    className: se("space-y-4", i),
    children: [V("div", {
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
}, qd = Ld("BlockContent", Zd), Yd = (r) => !ha(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutBlock" in r.type, Kd = (r) => !ha(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutGroup" in r.type, za = (r, e, t) => {
  const n = tn.toArray(e);
  for (const i of n)
    t.includes("block") && Yd(i) || t.includes("group") && Kd(i) || console.warn(
      `${r}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, Di = Ge(({ children: r, onSort: e, ...t }, n) => {
  za("GroupLinear", r, ["block"]);
  const [i, s] = J(tn.toArray(r));
  return X(() => {
    s(tn.toArray(r));
  }, [r]), X(() => {
    e?.(i);
  }, [i, e]), f("div", {
    ref: n,
    ...t,
    children: i.map((a, o) => f(fa, {
      children: a
    }, o))
  });
});
Di.displayName = "GroupLinear";
Di.__isPageLayoutGroup = !0;
function Xd() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return G(
    () => (n) => {
      e.forEach((i) => i(n));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function hr(r) {
  const e = Object.prototype.toString.call(r);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Ni(r) {
  return "nodeType" in r;
}
function He(r) {
  var e, t;
  return r ? hr(r) ? r : Ni(r) && (e = (t = r.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Ri(r) {
  const {
    Document: e
  } = He(r);
  return r instanceof e;
}
function Br(r) {
  return hr(r) ? !1 : r instanceof He(r).HTMLElement;
}
function Fa(r) {
  return r instanceof He(r).SVGElement;
}
function fr(r) {
  return r ? hr(r) ? r.document : Ni(r) ? Ri(r) ? r : Br(r) || Fa(r) ? r.ownerDocument : document : document : document;
}
const mt = On ? ii : X;
function Mn(r) {
  const e = Y(r);
  return mt(() => {
    e.current = r;
  }), oe(function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function Jd() {
  const r = Y(null), e = oe((n, i) => {
    r.current = setInterval(n, i);
  }, []), t = oe(() => {
    r.current !== null && (clearInterval(r.current), r.current = null);
  }, []);
  return [e, t];
}
function Or(r, e) {
  e === void 0 && (e = [r]);
  const t = Y(r);
  return mt(() => {
    t.current !== r && (t.current = r);
  }, e), t;
}
function Hr(r, e) {
  const t = Y();
  return G(
    () => {
      const n = r(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function cn(r) {
  const e = Mn(r), t = Y(null), n = oe(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function dn(r) {
  const e = Y();
  return X(() => {
    e.current = r;
  }, [r]), e.current;
}
let Zn = {};
function Vr(r, e) {
  return G(() => {
    if (e)
      return e;
    const t = Zn[r] == null ? 0 : Zn[r] + 1;
    return Zn[r] = t, r + "-" + t;
  }, [r, e]);
}
function Ba(r) {
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
const ir = /* @__PURE__ */ Ba(1), Mr = /* @__PURE__ */ Ba(-1);
function Qd(r) {
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
function eu(r) {
  if (!r)
    return !1;
  const {
    TouchEvent: e
  } = He(r.target);
  return e && r instanceof e;
}
function un(r) {
  if (eu(r)) {
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
  return Qd(r) ? {
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
}), is = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function tu(r) {
  return r.matches(is) ? r : r.querySelector(is);
}
const ru = {
  display: "none"
};
function nu(r) {
  let {
    id: e,
    value: t
  } = r;
  return B.createElement("div", {
    id: e,
    style: ru
  }, t);
}
function iu(r) {
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
function su() {
  const [r, e] = J("");
  return {
    announce: oe((n) => {
      n != null && e(n);
    }, []),
    announcement: r
  };
}
const Ha = /* @__PURE__ */ gt(null);
function au(r) {
  const e = ot(Ha);
  X(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(r);
  }, [r, e]);
}
function ou() {
  const [r] = J(() => /* @__PURE__ */ new Set()), e = oe((n) => (r.add(n), () => r.delete(n)), [r]);
  return [oe((n) => {
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
const lu = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, cu = {
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
function du(r) {
  let {
    announcements: e = cu,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = lu
  } = r;
  const {
    announce: s,
    announcement: a
  } = su(), o = Vr("DndLiveRegion"), [l, d] = J(!1);
  if (X(() => {
    d(!0);
  }, []), au(G(() => ({
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
  const c = B.createElement(B.Fragment, null, B.createElement(nu, {
    id: n,
    value: i.draggable
  }), B.createElement(iu, {
    id: o,
    announcement: a
  }));
  return t ? _i(c, t) : c;
}
var Ae;
(function(r) {
  r.DragStart = "dragStart", r.DragMove = "dragMove", r.DragEnd = "dragEnd", r.DragCancel = "dragCancel", r.DragOver = "dragOver", r.RegisterDroppable = "registerDroppable", r.SetDroppableDisabled = "setDroppableDisabled", r.UnregisterDroppable = "unregisterDroppable";
})(Ae || (Ae = {}));
function hn() {
}
function ss(r, e) {
  return G(
    () => ({
      sensor: r,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, e]
  );
}
function uu() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return G(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const pt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function hu(r, e) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function fu(r, e) {
  const t = un(r);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function mu(r, e) {
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
function pu(r, e) {
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
function as(r) {
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
function Va(r, e) {
  if (!r || r.length === 0)
    return null;
  const [t] = r;
  return t[e];
}
const gu = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = as(e), s = [];
  for (const a of n) {
    const {
      id: o
    } = a, l = t.get(o);
    if (l) {
      const d = as(l), c = i.reduce((h, p, g) => h + hu(d[g], p), 0), u = Number((c / 4).toFixed(4));
      s.push({
        id: o,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(mu);
};
function vu(r, e) {
  const t = Math.max(e.top, r.top), n = Math.max(e.left, r.left), i = Math.min(e.left + e.width, r.left + r.width), s = Math.min(e.top + e.height, r.top + r.height), a = i - n, o = s - t;
  if (n < i && t < s) {
    const l = e.width * e.height, d = r.width * r.height, c = a * o, u = c / (l + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const yu = (r) => {
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
      const l = vu(o, e);
      l > 0 && i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(pu);
};
function bu(r, e, t) {
  return {
    ...r,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function ja(r, e) {
  return r && e ? {
    x: r.left - e.left,
    y: r.top - e.top
  } : pt;
}
function xu(r) {
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
const wu = /* @__PURE__ */ xu(1);
function $a(r) {
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
function _u(r, e, t) {
  const n = $a(e);
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
const Cu = {
  ignoreTransform: !1
};
function mr(r, e) {
  e === void 0 && (e = Cu);
  let t = r.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: c
    } = He(r).getComputedStyle(r);
    d && (t = _u(t, d, c));
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
function os(r) {
  return mr(r, {
    ignoreTransform: !0
  });
}
function ku(r) {
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
function Eu(r, e) {
  return e === void 0 && (e = He(r).getComputedStyle(r)), e.position === "fixed";
}
function Su(r, e) {
  e === void 0 && (e = He(r).getComputedStyle(r));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function Ln(r, e) {
  const t = [];
  function n(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Ri(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!Br(i) || Fa(i) || t.includes(i))
      return t;
    const s = He(r).getComputedStyle(i);
    return i !== r && Su(i, s) && t.push(i), Eu(i, s) ? t : n(i.parentNode);
  }
  return r ? n(r) : t;
}
function Wa(r) {
  const [e] = Ln(r, 1);
  return e ?? null;
}
function qn(r) {
  return !On || !r ? null : hr(r) ? r : Ni(r) ? Ri(r) || r === fr(r).scrollingElement ? window : Br(r) ? r : null : null;
}
function Ga(r) {
  return hr(r) ? r.scrollX : r.scrollLeft;
}
function Ua(r) {
  return hr(r) ? r.scrollY : r.scrollTop;
}
function ai(r) {
  return {
    x: Ga(r),
    y: Ua(r)
  };
}
var Te;
(function(r) {
  r[r.Forward = 1] = "Forward", r[r.Backward = -1] = "Backward";
})(Te || (Te = {}));
function Za(r) {
  return !On || !r ? !1 : r === document.scrollingElement;
}
function qa(r) {
  const e = {
    x: 0,
    y: 0
  }, t = Za(r) ? {
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
const Du = {
  x: 0.2,
  y: 0.2
};
function Nu(r, e, t, n, i) {
  let {
    top: s,
    left: a,
    right: o,
    bottom: l
  } = t;
  n === void 0 && (n = 10), i === void 0 && (i = Du);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: h
  } = qa(r), p = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, y = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !d && s <= e.top + y.height ? (p.y = Te.Backward, g.y = n * Math.abs((e.top + y.height - s) / y.height)) : !c && l >= e.bottom - y.height && (p.y = Te.Forward, g.y = n * Math.abs((e.bottom - y.height - l) / y.height)), !h && o >= e.right - y.width ? (p.x = Te.Forward, g.x = n * Math.abs((e.right - y.width - o) / y.width)) : !u && a <= e.left + y.width && (p.x = Te.Backward, g.x = n * Math.abs((e.left + y.width - a) / y.width)), {
    direction: p,
    speed: g
  };
}
function Ru(r) {
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
function Ya(r) {
  return r.reduce((e, t) => ir(e, ai(t)), pt);
}
function Au(r) {
  return r.reduce((e, t) => e + Ga(t), 0);
}
function Tu(r) {
  return r.reduce((e, t) => e + Ua(t), 0);
}
function Ka(r, e) {
  if (e === void 0 && (e = mr), !r)
    return;
  const {
    top: t,
    left: n,
    bottom: i,
    right: s
  } = e(r);
  Wa(r) && (i <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && r.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Ou = [["x", ["left", "right"], Au], ["y", ["top", "bottom"], Tu]];
class Ai {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = Ln(t), i = Ya(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, a, o] of Ou)
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
class Cr {
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
function Mu(r) {
  const {
    EventTarget: e
  } = He(r);
  return r instanceof e ? r : fr(r);
}
function Yn(r, e) {
  const t = Math.abs(r.x), n = Math.abs(r.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var it;
(function(r) {
  r.Click = "click", r.DragStart = "dragstart", r.Keydown = "keydown", r.ContextMenu = "contextmenu", r.Resize = "resize", r.SelectionChange = "selectionchange", r.VisibilityChange = "visibilitychange";
})(it || (it = {}));
function ls(r) {
  r.preventDefault();
}
function Iu(r) {
  r.stopPropagation();
}
var ue;
(function(r) {
  r.Space = "Space", r.Down = "ArrowDown", r.Right = "ArrowRight", r.Left = "ArrowLeft", r.Up = "ArrowUp", r.Esc = "Escape", r.Enter = "Enter", r.Tab = "Tab";
})(ue || (ue = {}));
const Xa = {
  start: [ue.Space, ue.Enter],
  cancel: [ue.Esc],
  end: [ue.Space, ue.Enter, ue.Tab]
}, Lu = (r, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (r.code) {
    case ue.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case ue.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case ue.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case ue.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Ti {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new Cr(fr(t)), this.windowListeners = new Cr(He(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(it.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && Ka(n), t(pt);
  }
  handleKeyDown(e) {
    if (In(e)) {
      const {
        active: t,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: s = Xa,
        coordinateGetter: a = Lu,
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
      } : pt;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const u = a(e, {
        active: t,
        context: n.current,
        currentCoordinates: c
      });
      if (u) {
        const h = Mr(u, c), p = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = n.current;
        for (const y of g) {
          const w = e.code, {
            isTop: R,
            isRight: S,
            isLeft: D,
            isBottom: O,
            maxScroll: x,
            minScroll: k
          } = qa(y), C = Ru(y), A = {
            x: Math.min(w === ue.Right ? C.right - C.width / 2 : C.right, Math.max(w === ue.Right ? C.left : C.left + C.width / 2, u.x)),
            y: Math.min(w === ue.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(w === ue.Down ? C.top : C.top + C.height / 2, u.y))
          }, j = w === ue.Right && !S || w === ue.Left && !D, I = w === ue.Down && !O || w === ue.Up && !R;
          if (j && A.x !== u.x) {
            const N = y.scrollLeft + h.x, E = w === ue.Right && N <= x.x || w === ue.Left && N >= k.x;
            if (E && !h.y) {
              y.scrollTo({
                left: N,
                behavior: o
              });
              return;
            }
            E ? p.x = y.scrollLeft - N : p.x = w === ue.Right ? y.scrollLeft - x.x : y.scrollLeft - k.x, p.x && y.scrollBy({
              left: -p.x,
              behavior: o
            });
            break;
          } else if (I && A.y !== u.y) {
            const N = y.scrollTop + h.y, E = w === ue.Down && N <= x.y || w === ue.Up && N >= k.y;
            if (E && !h.x) {
              y.scrollTo({
                top: N,
                behavior: o
              });
              return;
            }
            E ? p.y = y.scrollTop - N : p.y = w === ue.Down ? y.scrollTop - x.y : y.scrollTop - k.y, p.y && y.scrollBy({
              top: -p.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, ir(Mr(u, this.referenceCoordinates), p));
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
Ti.activators = [{
  eventName: "onKeyDown",
  handler: (r, e, t) => {
    let {
      keyboardCodes: n = Xa,
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
function cs(r) {
  return !!(r && "distance" in r);
}
function ds(r) {
  return !!(r && "delay" in r);
}
class Oi {
  constructor(e, t, n) {
    var i;
    n === void 0 && (n = Mu(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: a
    } = s;
    this.props = e, this.events = t, this.document = fr(a), this.documentListeners = new Cr(this.document), this.listeners = new Cr(n), this.windowListeners = new Cr(He(a)), this.initialCoordinates = (i = un(s)) != null ? i : pt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.DragStart, ls), this.windowListeners.add(it.VisibilityChange, this.handleCancel), this.windowListeners.add(it.ContextMenu, ls), this.documentListeners.add(it.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (ds(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (cs(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(it.Click, Iu, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(it.SelectionChange, this.removeTextSelection), t(e));
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
    const l = (t = un(e)) != null ? t : pt, d = Mr(i, l);
    if (!n && o) {
      if (cs(o)) {
        if (o.tolerance != null && Yn(d, o.tolerance))
          return this.handleCancel();
        if (Yn(d, o.distance))
          return this.handleStart();
      }
      if (ds(o) && Yn(d, o.tolerance))
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
    e.code === ue.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Pu = {
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
class Mi extends Oi {
  constructor(e) {
    const {
      event: t
    } = e, n = fr(t.target);
    super(e, Pu, n);
  }
}
Mi.activators = [{
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
const zu = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var oi;
(function(r) {
  r[r.RightClick = 2] = "RightClick";
})(oi || (oi = {}));
class Fu extends Oi {
  constructor(e) {
    super(e, zu, fr(e.event.target));
  }
}
Fu.activators = [{
  eventName: "onMouseDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    return t.button === oi.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Kn = {
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
class Bu extends Oi {
  constructor(e) {
    super(e, Kn);
  }
  static setup() {
    return window.addEventListener(Kn.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Kn.move.name, e);
    };
    function e() {
    }
  }
}
Bu.activators = [{
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
var fn;
(function(r) {
  r[r.TreeOrder = 0] = "TreeOrder", r[r.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(fn || (fn = {}));
function Hu(r) {
  let {
    acceleration: e,
    activator: t = kr.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: s,
    interval: a = 5,
    order: o = fn.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: h
  } = r;
  const p = ju({
    delta: u,
    disabled: !s
  }), [g, y] = Jd(), w = Y({
    x: 0,
    y: 0
  }), R = Y({
    x: 0,
    y: 0
  }), S = G(() => {
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
  }, [t, i, l]), D = Y(null), O = oe(() => {
    const k = D.current;
    if (!k)
      return;
    const C = w.current.x * R.current.x, A = w.current.y * R.current.y;
    k.scrollBy(C, A);
  }, []), x = G(() => o === fn.TreeOrder ? [...d].reverse() : d, [o, d]);
  X(
    () => {
      if (!s || !d.length || !S) {
        y();
        return;
      }
      for (const k of x) {
        if (n?.(k) === !1)
          continue;
        const C = d.indexOf(k), A = c[C];
        if (!A)
          continue;
        const {
          direction: j,
          speed: I
        } = Nu(k, A, S, e, h);
        for (const N of ["x", "y"])
          p[N][j[N]] || (I[N] = 0, j[N] = 0);
        if (I.x > 0 || I.y > 0) {
          y(), D.current = k, g(O, a), w.current = I, R.current = j;
          return;
        }
      }
      w.current = {
        x: 0,
        y: 0
      }, R.current = {
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
      JSON.stringify(S),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p),
      g,
      d,
      x,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Vu = {
  x: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  },
  y: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  }
};
function ju(r) {
  let {
    delta: e,
    disabled: t
  } = r;
  const n = dn(e);
  return Hr((i) => {
    if (t || !n || !i)
      return Vu;
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
function $u(r, e) {
  const t = e != null ? r.get(e) : void 0, n = t ? t.node.current : null;
  return Hr((i) => {
    var s;
    return e == null ? null : (s = n ?? i) != null ? s : null;
  }, [n, e]);
}
function Wu(r, e) {
  return G(() => r.reduce((t, n) => {
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
var li;
(function(r) {
  r.Optimized = "optimized";
})(li || (li = {}));
const us = /* @__PURE__ */ new Map();
function Gu(r, e) {
  let {
    dragging: t,
    dependencies: n,
    config: i
  } = e;
  const [s, a] = J(null), {
    frequency: o,
    measure: l,
    strategy: d
  } = i, c = Y(r), u = w(), h = Or(u), p = oe(function(R) {
    R === void 0 && (R = []), !h.current && a((S) => S === null ? R : S.concat(R.filter((D) => !S.includes(D))));
  }, [h]), g = Y(null), y = Hr((R) => {
    if (u && !t)
      return us;
    if (!R || R === us || c.current !== r || s != null) {
      const S = /* @__PURE__ */ new Map();
      for (let D of r) {
        if (!D)
          continue;
        if (s && s.length > 0 && !s.includes(D.id) && D.rect.current) {
          S.set(D.id, D.rect.current);
          continue;
        }
        const O = D.node.current, x = O ? new Ai(l(O), O) : null;
        D.rect.current = x, x && S.set(D.id, x);
      }
      return S;
    }
    return R;
  }, [r, s, t, u, l]);
  return X(() => {
    c.current = r;
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
    droppableRects: y,
    measureDroppableContainers: p,
    measuringScheduled: s != null
  };
  function w() {
    switch (d) {
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
  return Hr((t) => r ? t || (typeof e == "function" ? e(r) : r) : null, [e, r]);
}
function Uu(r, e) {
  return Ii(r, e);
}
function Zu(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Mn(e), i = G(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return X(() => () => i?.disconnect(), [i]), i;
}
function Pn(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Mn(e), i = G(
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
function qu(r) {
  return new Ai(mr(r), r);
}
function hs(r, e, t) {
  e === void 0 && (e = qu);
  const [n, i] = J(null);
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
  const a = Zu({
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
  }), o = Pn({
    callback: s
  });
  return mt(() => {
    s(), r ? (o?.observe(r), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [r]), n;
}
function Yu(r) {
  const e = Ii(r);
  return ja(r, e);
}
const fs = [];
function Ku(r) {
  const e = Y(r), t = Hr((n) => r ? n && n !== fs && r && e.current && r.parentNode === e.current.parentNode ? n : Ln(r) : fs, [r]);
  return X(() => {
    e.current = r;
  }, [r]), t;
}
function Xu(r) {
  const [e, t] = J(null), n = Y(r), i = oe((s) => {
    const a = qn(s.target);
    a && t((o) => o ? (o.set(a, ai(a)), new Map(o)) : null);
  }, []);
  return X(() => {
    const s = n.current;
    if (r !== s) {
      a(s);
      const o = r.map((l) => {
        const d = qn(l);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, ai(d)]) : null;
      }).filter((l) => l != null);
      t(o.length ? new Map(o) : null), n.current = r;
    }
    return () => {
      a(r), a(s);
    };
    function a(o) {
      o.forEach((l) => {
        const d = qn(l);
        d?.removeEventListener("scroll", i);
      });
    }
  }, [i, r]), G(() => r.length ? e ? Array.from(e.values()).reduce((s, a) => ir(s, a), pt) : Ya(r) : pt, [r, e]);
}
function ms(r, e) {
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
  }, [r]), t.current ? Mr(r, t.current) : pt;
}
function Ju(r) {
  X(
    () => {
      if (!On)
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
function Qu(r, e) {
  return G(() => r.reduce((t, n) => {
    let {
      eventName: i,
      handler: s
    } = n;
    return t[i] = (a) => {
      s(a, e);
    }, t;
  }, {}), [r, e]);
}
function Ja(r) {
  return G(() => r ? ku(r) : null, [r]);
}
const ps = [];
function eh(r, e) {
  e === void 0 && (e = mr);
  const [t] = r, n = Ja(t ? He(t) : null), [i, s] = J(ps);
  function a() {
    s(() => r.length ? r.map((l) => Za(l) ? n : new Ai(e(l), l)) : ps);
  }
  const o = Pn({
    callback: a
  });
  return mt(() => {
    o?.disconnect(), a(), r.forEach((l) => o?.observe(l));
  }, [r]), i;
}
function Qa(r) {
  if (!r)
    return null;
  if (r.children.length > 1)
    return r;
  const e = r.children[0];
  return Br(e) ? e : r;
}
function th(r) {
  let {
    measure: e
  } = r;
  const [t, n] = J(null), i = oe((d) => {
    for (const {
      target: c
    } of d)
      if (Br(c)) {
        n((u) => {
          const h = e(c);
          return u ? {
            ...u,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [e]), s = Pn({
    callback: i
  }), a = oe((d) => {
    const c = Qa(d);
    s?.disconnect(), c && s?.observe(c), n(c ? e(c) : null);
  }, [e, s]), [o, l] = cn(a);
  return G(() => ({
    nodeRef: o,
    rect: t,
    setRef: l
  }), [t, o, l]);
}
const rh = [{
  sensor: Mi,
  options: {}
}, {
  sensor: Ti,
  options: {}
}], nh = {
  current: {}
}, Jr = {
  draggable: {
    measure: os
  },
  droppable: {
    measure: os,
    strategy: Ir.WhileDragging,
    frequency: li.Optimized
  },
  dragOverlay: {
    measure: mr
  }
};
class Er extends Map {
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
const ih = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Er(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: hn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Jr,
  measureDroppableContainers: hn,
  windowRect: null,
  measuringScheduled: !1
}, eo = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: hn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: hn
}, jr = /* @__PURE__ */ gt(eo), to = /* @__PURE__ */ gt(ih);
function sh() {
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
      containers: new Er()
    }
  };
}
function ah(r, e) {
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
      } = t, i = new Er(r.droppable.containers);
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
      const a = new Er(r.droppable.containers);
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
      const s = new Er(r.droppable.containers);
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
function oh(r) {
  let {
    disabled: e
  } = r;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: i
  } = ot(jr), s = dn(n), a = dn(t?.id);
  return X(() => {
    if (!e && !n && s && a != null) {
      if (!In(s) || document.activeElement === s.target)
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
          const u = tu(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, i, a, s]), null;
}
function ro(r, e) {
  let {
    transform: t,
    ...n
  } = e;
  return r != null && r.length ? r.reduce((i, s) => s({
    transform: i,
    ...n
  }), t) : t;
}
function lh(r) {
  return G(
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
function ch(r) {
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
    const d = e?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const c = t(d), u = ja(c, n);
    if (a || (u.x = 0), o || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = Wa(d);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, o, n, t]);
}
const zn = /* @__PURE__ */ gt({
  ...pt,
  scaleX: 1,
  scaleY: 1
});
var Mt;
(function(r) {
  r[r.Uninitialized = 0] = "Uninitialized", r[r.Initializing = 1] = "Initializing", r[r.Initialized = 2] = "Initialized";
})(Mt || (Mt = {}));
const dh = /* @__PURE__ */ bc(function(e) {
  var t, n, i, s;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: d,
    sensors: c = rh,
    collisionDetection: u = yu,
    measuring: h,
    modifiers: p,
    ...g
  } = e;
  const y = xc(ah, void 0, sh), [w, R] = y, [S, D] = ou(), [O, x] = J(Mt.Uninitialized), k = O === Mt.Initialized, {
    draggable: {
      active: C,
      nodes: A,
      translate: j
    },
    droppable: {
      containers: I
    }
  } = w, N = C != null ? A.get(C) : null, E = Y({
    initial: null,
    translated: null
  }), T = G(() => {
    var Pe;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (Pe = N?.data) != null ? Pe : nh,
      rect: E
    } : null;
  }, [C, N]), $ = Y(null), [ie, fe] = J(null), [ne, de] = J(null), le = Or(g, Object.values(g)), we = Vr("DndDescribedBy", a), Ue = G(() => I.getEnabled(), [I]), _e = lh(h), {
    droppableRects: Ee,
    measureDroppableContainers: Oe,
    measuringScheduled: dt
  } = Gu(Ue, {
    dragging: k,
    dependencies: [j.x, j.y],
    config: _e.droppable
  }), Se = $u(A, C), Ve = G(() => ne ? un(ne) : null, [ne]), Ne = _l(), Me = Uu(Se, _e.draggable.measure);
  ch({
    activeNode: C != null ? A.get(C) : null,
    config: Ne.layoutShiftCompensation,
    initialRect: Me,
    measure: _e.draggable.measure
  });
  const ce = hs(Se, _e.draggable.measure, Me), Qe = hs(Se ? Se.parentElement : null), Le = Y({
    activatorEvent: null,
    active: null,
    activeNode: Se,
    collisionRect: null,
    collisions: null,
    droppableRects: Ee,
    draggableNodes: A,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), je = I.getNodeFor((t = Le.current.over) == null ? void 0 : t.id), re = th({
    measure: _e.dragOverlay.measure
  }), ye = (n = re.nodeRef.current) != null ? n : Se, be = k ? (i = re.rect) != null ? i : ce : null, et = !!(re.nodeRef.current && re.rect), m = Yu(et ? null : ce), v = Ja(ye ? He(ye) : null), _ = Ku(k ? je ?? Se : null), F = eh(_), P = ro(p, {
    transform: {
      x: j.x - m.x,
      y: j.y - m.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ne,
    active: T,
    activeNodeRect: ce,
    containerNodeRect: Qe,
    draggingNodeRect: be,
    over: Le.current.over,
    overlayNodeRect: re.rect,
    scrollableAncestors: _,
    scrollableAncestorRects: F,
    windowRect: v
  }), L = Ve ? ir(Ve, j) : null, q = Xu(_), te = ms(q), xe = ms(q, [ce]), ge = ir(P, te), ze = be ? wu(be, P) : null, Gt = T && ze ? u({
    active: T,
    collisionRect: ze,
    droppableRects: Ee,
    droppableContainers: Ue,
    pointerCoordinates: L
  }) : null, Yt = Va(Gt, "id"), [tt, Gr] = J(null), Ur = et ? P : ir(P, xe), jn = bu(Ur, (s = tt?.rect) != null ? s : null, ce), Kt = Y(null), Zi = oe(
    (Pe, Ze) => {
      let {
        sensor: qe,
        options: Rt
      } = Ze;
      if ($.current == null)
        return;
      const rt = A.get($.current);
      if (!rt)
        return;
      const Ye = Pe.nativeEvent, yt = new qe({
        active: $.current,
        activeNode: rt,
        event: Ye,
        options: Rt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Le,
        onAbort(Ie) {
          if (!A.get(Ie))
            return;
          const {
            onDragAbort: bt
          } = le.current, Et = {
            id: Ie
          };
          bt?.(Et), S({
            type: "onDragAbort",
            event: Et
          });
        },
        onPending(Ie, At, bt, Et) {
          if (!A.get(Ie))
            return;
          const {
            onDragPending: gr
          } = le.current, Tt = {
            id: Ie,
            constraint: At,
            initialCoordinates: bt,
            offset: Et
          };
          gr?.(Tt), S({
            type: "onDragPending",
            event: Tt
          });
        },
        onStart(Ie) {
          const At = $.current;
          if (At == null)
            return;
          const bt = A.get(At);
          if (!bt)
            return;
          const {
            onDragStart: Et
          } = le.current, pr = {
            activatorEvent: Ye,
            active: {
              id: At,
              data: bt.data,
              rect: E
            }
          };
          Zr(() => {
            Et?.(pr), x(Mt.Initializing), R({
              type: Ae.DragStart,
              initialCoordinates: Ie,
              active: At
            }), S({
              type: "onDragStart",
              event: pr
            }), fe(Kt.current), de(Ye);
          });
        },
        onMove(Ie) {
          R({
            type: Ae.DragMove,
            coordinates: Ie
          });
        },
        onEnd: Xt(Ae.DragEnd),
        onCancel: Xt(Ae.DragCancel)
      });
      Kt.current = yt;
      function Xt(Ie) {
        return async function() {
          const {
            active: bt,
            collisions: Et,
            over: pr,
            scrollAdjustedTranslate: gr
          } = Le.current;
          let Tt = null;
          if (bt && gr) {
            const {
              cancelDrop: vr
            } = le.current;
            Tt = {
              activatorEvent: Ye,
              active: bt,
              collisions: Et,
              delta: gr,
              over: pr
            }, Ie === Ae.DragEnd && typeof vr == "function" && await Promise.resolve(vr(Tt)) && (Ie = Ae.DragCancel);
          }
          $.current = null, Zr(() => {
            R({
              type: Ie
            }), x(Mt.Uninitialized), Gr(null), fe(null), de(null), Kt.current = null;
            const vr = Ie === Ae.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Tt) {
              const $n = le.current[vr];
              $n?.(Tt), S({
                type: vr,
                event: Tt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [A]
  ), bl = oe((Pe, Ze) => (qe, Rt) => {
    const rt = qe.nativeEvent, Ye = A.get(Rt);
    if (
      // Another sensor is already instantiating
      $.current !== null || // No active draggable
      !Ye || // Event has already been captured
      rt.dndKit || rt.defaultPrevented
    )
      return;
    const yt = {
      active: Ye
    };
    Pe(qe, Ze.options, yt) === !0 && (rt.dndKit = {
      capturedBy: Ze.sensor
    }, $.current = Rt, Zi(qe, Ze));
  }, [A, Zi]), qi = Wu(c, bl);
  Ju(c), mt(() => {
    ce && O === Mt.Initializing && x(Mt.Initialized);
  }, [ce, O]), X(
    () => {
      const {
        onDragMove: Pe
      } = le.current, {
        active: Ze,
        activatorEvent: qe,
        collisions: Rt,
        over: rt
      } = Le.current;
      if (!Ze || !qe)
        return;
      const Ye = {
        active: Ze,
        activatorEvent: qe,
        collisions: Rt,
        delta: {
          x: ge.x,
          y: ge.y
        },
        over: rt
      };
      Zr(() => {
        Pe?.(Ye), S({
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
        droppableContainers: Rt,
        scrollAdjustedTranslate: rt
      } = Le.current;
      if (!Pe || $.current == null || !Ze || !rt)
        return;
      const {
        onDragOver: Ye
      } = le.current, yt = Rt.get(Yt), Xt = yt && yt.rect.current ? {
        id: yt.id,
        rect: yt.rect.current,
        data: yt.data,
        disabled: yt.disabled
      } : null, Ie = {
        active: Pe,
        activatorEvent: Ze,
        collisions: qe,
        delta: {
          x: rt.x,
          y: rt.y
        },
        over: Xt
      };
      Zr(() => {
        Gr(Xt), Ye?.(Ie), S({
          type: "onDragOver",
          event: Ie
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Yt]
  ), mt(() => {
    Le.current = {
      activatorEvent: ne,
      active: T,
      activeNode: Se,
      collisionRect: ze,
      collisions: Gt,
      droppableRects: Ee,
      draggableNodes: A,
      draggingNode: ye,
      draggingNodeRect: be,
      droppableContainers: I,
      over: tt,
      scrollableAncestors: _,
      scrollAdjustedTranslate: ge
    }, E.current = {
      initial: be,
      translated: ze
    };
  }, [T, Se, Gt, ze, A, ye, be, Ee, I, tt, _, ge]), Hu({
    ...Ne,
    delta: j,
    draggingRect: ze,
    pointerCoordinates: L,
    scrollableAncestors: _,
    scrollableAncestorRects: F
  });
  const xl = G(() => ({
    active: T,
    activeNode: Se,
    activeNodeRect: ce,
    activatorEvent: ne,
    collisions: Gt,
    containerNodeRect: Qe,
    dragOverlay: re,
    draggableNodes: A,
    droppableContainers: I,
    droppableRects: Ee,
    over: tt,
    measureDroppableContainers: Oe,
    scrollableAncestors: _,
    scrollableAncestorRects: F,
    measuringConfiguration: _e,
    measuringScheduled: dt,
    windowRect: v
  }), [T, Se, ce, ne, Gt, Qe, re, A, I, Ee, tt, Oe, _, F, _e, dt, v]), wl = G(() => ({
    activatorEvent: ne,
    activators: qi,
    active: T,
    activeNodeRect: ce,
    ariaDescribedById: {
      draggable: we
    },
    dispatch: R,
    draggableNodes: A,
    over: tt,
    measureDroppableContainers: Oe
  }), [ne, qi, T, ce, R, we, A, tt, Oe]);
  return B.createElement(Ha.Provider, {
    value: D
  }, B.createElement(jr.Provider, {
    value: wl
  }, B.createElement(to.Provider, {
    value: xl
  }, B.createElement(zn.Provider, {
    value: jn
  }, d)), B.createElement(oh, {
    disabled: o?.restoreFocus === !1
  })), B.createElement(du, {
    ...o,
    hiddenTextDescribedById: we
  }));
  function _l() {
    const Pe = ie?.autoScrollEnabled === !1, Ze = typeof l == "object" ? l.enabled === !1 : l === !1, qe = k && !Pe && !Ze;
    return typeof l == "object" ? {
      ...l,
      enabled: qe
    } : {
      enabled: qe
    };
  }
}), uh = /* @__PURE__ */ gt(null), gs = "button", hh = "Draggable";
function fh(r) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: i
  } = r;
  const s = Vr(hh), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: h
  } = ot(jr), {
    role: p = gs,
    roleDescription: g = "draggable",
    tabIndex: y = 0
  } = i ?? {}, w = l?.id === e, R = ot(w ? zn : uh), [S, D] = cn(), [O, x] = cn(), k = Qu(a, e), C = Or(t);
  mt(
    () => (u.set(e, {
      id: e,
      key: s,
      node: S,
      activatorNode: O,
      data: C
    }), () => {
      const j = u.get(e);
      j && j.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const A = G(() => ({
    role: p,
    tabIndex: y,
    "aria-disabled": n,
    "aria-pressed": w && p === gs ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": c.draggable
  }), [n, p, y, w, g, c.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: d,
    attributes: A,
    isDragging: w,
    listeners: n ? void 0 : k,
    node: S,
    over: h,
    setNodeRef: D,
    setActivatorNodeRef: x,
    transform: R
  };
}
function no() {
  return ot(to);
}
const mh = "Droppable", ph = {
  timeout: 25
};
function gh(r) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: i
  } = r;
  const s = Vr(mh), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: d
  } = ot(jr), c = Y({
    disabled: t
  }), u = Y(!1), h = Y(null), p = Y(null), {
    disabled: g,
    updateMeasurementsFor: y,
    timeout: w
  } = {
    ...ph,
    ...i
  }, R = Or(y ?? n), S = oe(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
        d(Array.isArray(R.current) ? R.current : [R.current]), p.current = null;
      }, w);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [w]
  ), D = Pn({
    callback: S,
    disabled: g || !a
  }), O = oe((A, j) => {
    D && (j && (D.unobserve(j), u.current = !1), A && D.observe(A));
  }, [D]), [x, k] = cn(O), C = Or(e);
  return X(() => {
    !D || !x.current || (D.disconnect(), u.current = !1, D.observe(x.current));
  }, [x, D]), X(
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
    t !== c.current.disabled && (o({
      type: Ae.SetDroppableDisabled,
      id: n,
      key: s,
      disabled: t
    }), c.current.disabled = t);
  }, [n, s, t, o]), {
    active: a,
    rect: h,
    isOver: l?.id === n,
    node: x,
    over: l,
    setNodeRef: k
  };
}
function vh(r) {
  let {
    animation: e,
    children: t
  } = r;
  const [n, i] = J(null), [s, a] = J(null), o = dn(t);
  return !t && !n && o && i(o), mt(() => {
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
  }, [e, n, s]), B.createElement(B.Fragment, null, t, n ? wc(n, {
    ref: a
  }) : null);
}
const yh = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function bh(r) {
  let {
    children: e
  } = r;
  return B.createElement(jr.Provider, {
    value: eo
  }, B.createElement(zn.Provider, {
    value: yh
  }, e));
}
const xh = {
  position: "fixed",
  touchAction: "none"
}, wh = (r) => In(r) ? "transform 250ms ease" : void 0, _h = /* @__PURE__ */ Ge((r, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: i,
    children: s,
    className: a,
    rect: o,
    style: l,
    transform: d,
    transition: c = wh
  } = r;
  if (!o)
    return null;
  const u = i ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...xh,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: Ft.Transform.toString(u),
    transformOrigin: i && n ? fu(n, o) : void 0,
    transition: typeof c == "function" ? c(n) : c,
    ...l
  };
  return B.createElement(t, {
    className: a,
    style: h,
    ref: e
  }, s);
}), Ch = (r) => (e) => {
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
}, kh = (r) => {
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
}, Eh = {
  duration: 250,
  easing: "ease",
  keyframes: kh,
  sideEffects: /* @__PURE__ */ Ch({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Sh(r) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: i
  } = r;
  return Mn((s, a) => {
    if (e === null)
      return;
    const o = t.get(s);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const d = Qa(a);
    if (!d)
      return;
    const {
      transform: c
    } = He(a).getComputedStyle(a), u = $a(c);
    if (!u)
      return;
    const h = typeof e == "function" ? e : Dh(e);
    return Ka(l, i.draggable.measure), h({
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
function Dh(r) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: i
  } = {
    ...Eh,
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
    }, h = {
      x: l.x - c.x,
      y: l.y - c.y,
      ...u
    }, p = i({
      ...d,
      active: a,
      dragOverlay: o,
      transform: {
        initial: l,
        final: h
      }
    }), [g] = p, y = p[p.length - 1];
    if (JSON.stringify(g) === JSON.stringify(y))
      return;
    const w = n?.({
      active: a,
      dragOverlay: o,
      ...d
    }), R = o.node.animate(p, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((S) => {
      R.onfinish = () => {
        w?.(), S();
      };
    });
  };
}
let vs = 0;
function Nh(r) {
  return G(() => {
    if (r != null)
      return vs++, vs;
  }, [r]);
}
const Rh = /* @__PURE__ */ B.memo((r) => {
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
    activeNodeRect: h,
    containerNodeRect: p,
    draggableNodes: g,
    droppableContainers: y,
    dragOverlay: w,
    over: R,
    measuringConfiguration: S,
    scrollableAncestors: D,
    scrollableAncestorRects: O,
    windowRect: x
  } = no(), k = ot(zn), C = Nh(u?.id), A = ro(a, {
    activatorEvent: c,
    active: u,
    activeNodeRect: h,
    containerNodeRect: p,
    draggingNodeRect: w.rect,
    over: R,
    overlayNodeRect: w.rect,
    scrollableAncestors: D,
    scrollableAncestorRects: O,
    transform: k,
    windowRect: x
  }), j = Ii(h), I = Sh({
    config: n,
    draggableNodes: g,
    droppableContainers: y,
    measuringConfiguration: S
  }), N = j ? w.setRef : void 0;
  return B.createElement(bh, null, B.createElement(vh, {
    animation: I
  }, u && C ? B.createElement(_h, {
    key: C,
    id: u.id,
    ref: N,
    as: o,
    activatorEvent: c,
    adjustScale: e,
    className: l,
    transition: s,
    rect: j,
    style: {
      zIndex: d,
      ...i
    },
    transform: A
  }, t) : null));
});
function Li(r, e, t) {
  const n = r.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function Ah(r, e) {
  return r.reduce((t, n, i) => {
    const s = e.get(n);
    return s && (t[i] = s), t;
  }, Array(r.length));
}
function Kr(r) {
  return r !== null && r >= 0;
}
function Th(r, e) {
  if (r === e)
    return !0;
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Oh(r) {
  return typeof r == "boolean" ? {
    draggable: r,
    droppable: r
  } : r;
}
const io = (r) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: i
  } = r;
  const s = Li(e, n, t), a = e[i], o = s[i];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, so = "Sortable", ao = /* @__PURE__ */ B.createContext({
  activeIndex: -1,
  containerId: so,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: io,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Mh(r) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: i = io,
    disabled: s = !1
  } = r;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: d,
    measureDroppableContainers: c
  } = no(), u = Vr(so, t), h = o.rect !== null, p = G(() => n.map((k) => typeof k == "object" && "id" in k ? k.id : k), [n]), g = a != null, y = a ? p.indexOf(a.id) : -1, w = d ? p.indexOf(d.id) : -1, R = Y(p), S = !Th(p, R.current), D = w !== -1 && y === -1 || S, O = Oh(s);
  mt(() => {
    S && g && c(p);
  }, [S, p, g, c]), X(() => {
    R.current = p;
  }, [p]);
  const x = G(
    () => ({
      activeIndex: y,
      containerId: u,
      disabled: O,
      disableTransforms: D,
      items: p,
      overIndex: w,
      useDragOverlay: h,
      sortedRects: Ah(p, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, u, O.draggable, O.droppable, D, p, w, l, h, i]
  );
  return B.createElement(ao.Provider, {
    value: x
  }, e);
}
const Ih = (r) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: i
  } = r;
  return Li(t, n, i).indexOf(e);
}, Lh = (r) => {
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
}, Ph = {
  duration: 200,
  easing: "ease"
}, oo = "transform", zh = /* @__PURE__ */ Ft.Transition.toString({
  property: oo,
  duration: 0,
  easing: "linear"
}), Fh = {
  roleDescription: "sortable"
};
function Bh(r) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: i
  } = r;
  const [s, a] = J(null), o = Y(t);
  return mt(() => {
    if (!e && t !== o.current && n.current) {
      const l = i.current;
      if (l) {
        const d = mr(n.current, {
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
  }, [e, t, n, i]), X(() => {
    s && a(null);
  }, [s]), s;
}
function Hh(r) {
  let {
    animateLayoutChanges: e = Lh,
    attributes: t,
    disabled: n,
    data: i,
    getNewIndex: s = Ih,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: d = Ph
  } = r;
  const {
    items: c,
    containerId: u,
    activeIndex: h,
    disabled: p,
    disableTransforms: g,
    sortedRects: y,
    overIndex: w,
    useDragOverlay: R,
    strategy: S
  } = ot(ao), D = Vh(n, p), O = c.indexOf(a), x = G(() => ({
    sortable: {
      containerId: u,
      index: O,
      items: c
    },
    ...i
  }), [u, i, O, c]), k = G(() => c.slice(c.indexOf(a)), [c, a]), {
    rect: C,
    node: A,
    isOver: j,
    setNodeRef: I
  } = gh({
    id: a,
    data: x,
    disabled: D.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: k,
      ...l
    }
  }), {
    active: N,
    activatorEvent: E,
    activeNodeRect: T,
    attributes: $,
    setNodeRef: ie,
    listeners: fe,
    isDragging: ne,
    over: de,
    setActivatorNodeRef: le,
    transform: we
  } = fh({
    id: a,
    data: x,
    attributes: {
      ...Fh,
      ...t
    },
    disabled: D.draggable
  }), Ue = Xd(I, ie), _e = !!N, Ee = _e && !g && Kr(h) && Kr(w), Oe = !R && ne, dt = Oe && Ee ? we : null, Ve = Ee ? dt ?? (o ?? S)({
    rects: y,
    activeNodeRect: T,
    activeIndex: h,
    overIndex: w,
    index: O
  }) : null, Ne = Kr(h) && Kr(w) ? s({
    id: a,
    items: c,
    activeIndex: h,
    overIndex: w
  }) : O, Me = N?.id, ce = Y({
    activeId: Me,
    items: c,
    newIndex: Ne,
    containerId: u
  }), Qe = c !== ce.current.items, Le = e({
    active: N,
    containerId: u,
    isDragging: ne,
    isSorting: _e,
    id: a,
    index: O,
    items: c,
    newIndex: ce.current.newIndex,
    previousItems: ce.current.items,
    previousContainerId: ce.current.containerId,
    transition: d,
    wasDragging: ce.current.activeId != null
  }), je = Bh({
    disabled: !Le,
    index: O,
    node: A,
    rect: C
  });
  return X(() => {
    _e && ce.current.newIndex !== Ne && (ce.current.newIndex = Ne), u !== ce.current.containerId && (ce.current.containerId = u), c !== ce.current.items && (ce.current.items = c);
  }, [_e, Ne, u, c]), X(() => {
    if (Me === ce.current.activeId)
      return;
    if (Me != null && ce.current.activeId == null) {
      ce.current.activeId = Me;
      return;
    }
    const ye = setTimeout(() => {
      ce.current.activeId = Me;
    }, 50);
    return () => clearTimeout(ye);
  }, [Me]), {
    active: N,
    activeIndex: h,
    attributes: $,
    data: x,
    rect: C,
    index: O,
    newIndex: Ne,
    items: c,
    isOver: j,
    isSorting: _e,
    isDragging: ne,
    listeners: fe,
    node: A,
    overIndex: w,
    over: de,
    setNodeRef: Ue,
    setActivatorNodeRef: le,
    setDroppableNodeRef: I,
    setDraggableNodeRef: ie,
    transform: je ?? Ve,
    transition: re()
  };
  function re() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      je || // Or to prevent items jumping to back to their "new" position when items change
      Qe && ce.current.newIndex === O
    )
      return zh;
    if (!(Oe && !In(E) || !d) && (_e || Le))
      return Ft.Transition.toString({
        ...d,
        property: oo
      });
  }
}
function Vh(r, e) {
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
function mn(r) {
  if (!r)
    return !1;
  const e = r.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const jh = [ue.Down, ue.Right, ue.Up, ue.Left], $h = (r, e) => {
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
  if (jh.includes(r.code)) {
    if (r.preventDefault(), !t || !n)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = i.get(u.id);
      if (h)
        switch (r.code) {
          case ue.Down:
            n.top < h.top && l.push(u);
            break;
          case ue.Up:
            n.top > h.top && l.push(u);
            break;
          case ue.Left:
            n.left > h.left && l.push(u);
            break;
          case ue.Right:
            n.left < h.left && l.push(u);
            break;
        }
    });
    const d = gu({
      collisionRect: n,
      droppableRects: i,
      droppableContainers: l
    });
    let c = Va(d, "id");
    if (c === a?.id && d.length > 1 && (c = d[1].id), c != null) {
      const u = s.get(t.id), h = s.get(c), p = h ? i.get(h.id) : null, g = h?.node.current;
      if (g && p && u && h) {
        const w = Ln(g).some((k, C) => o[C] !== k), R = lo(u, h), S = Wh(u, h), D = w || !R ? {
          x: 0,
          y: 0
        } : {
          x: S ? n.width - p.width : 0,
          y: S ? n.height - p.height : 0
        }, O = {
          x: p.left,
          y: p.top
        };
        return D.x && D.y ? O : Mr(O, D);
      }
    }
  }
};
function lo(r, e) {
  return !mn(r) || !mn(e) ? !1 : r.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Wh(r, e) {
  return !mn(r) || !mn(e) || !lo(r, e) ? !1 : r.data.current.sortable.index < e.data.current.sortable.index;
}
const ys = ({ id: r, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: i, transform: s, transition: a } = Hh({
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
}, Pi = ({ blocks: r, sortable: e = !1, onSort: t = () => {
}, main: n = !1 }) => {
  const [i, s] = J([]);
  Xs(() => {
    s(r.map((u, h) => ({
      id: u.id ?? h.toString(),
      render: u.render
    })));
  }, [r]);
  const [a, o] = J(null), l = uu(ss(Mi), ss(Ti, {
    coordinateGetter: $h
  })), d = (u) => {
    o(u.active.id);
  }, c = (u) => {
    const { active: h, over: p } = u;
    o(null), p && h.id !== p.id && s((g) => {
      const y = g.findIndex((R) => R.id === h.id), w = g.findIndex((R) => R.id === p.id);
      return Li(g, y, w);
    });
  };
  return f("div", {
    className: se("flex flex-wrap items-stretch gap-4", n && "flex-1"),
    children: V(dh, {
      sensors: l,
      onDragStart: d,
      onDragEnd: c,
      children: [f(Mh, {
        items: i,
        children: i.map((u) => f(ys, {
          id: u.id,
          children: u.render
        }, u.id))
      }), f(Rh, {
        children: a ? f(ys, {
          id: a,
          children: i.find((u) => u.id === a)?.render
        }) : null
      })]
    })
  });
};
Pi.displayName = "GroupMasonry";
Pi.__isPageLayoutGroup = !0;
const Gh = Ge(function({ children: e, aside: t, header: n, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && za("Page", e, ["block", "group"]), f("div", {
    ref: s,
    className: "h-full",
    children: V("div", {
      className: se("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [V("main", {
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
}), sg = {
  Page: Xe("Page", Gh),
  Block: Xe("Block", Tn),
  BlockContent: Xe("BlockContent", qd),
  Group: Xe("Group", Di),
  GroupGrid: Xe("GroupGrid", An),
  GroupMasonry: Xe("GroupMasonry", Pi)
}, ag = lt({
  name: "StandardLayout",
  type: "layout"
}, Da), og = lt({
  name: "TwoColumnLayout",
  type: "layout"
}, xd), lg = lt({
  name: "HomeLayout",
  type: "layout"
}, yd);
function sr(r) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, sr(r);
}
function Uh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, ho(n.key), n);
  }
}
function qh(r, e, t) {
  return e && Zh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Yh(r, e, t) {
  return e = pn(e), Kh(r, co() ? Reflect.construct(e, t || [], pn(r).constructor) : e.apply(r, t));
}
function Kh(r, e) {
  if (e && (sr(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Xh(r);
}
function Xh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function co() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (co = function() {
    return !!r;
  })();
}
function pn(r) {
  return pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, pn(r);
}
function Jh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && ci(r, e);
}
function ci(r, e) {
  return ci = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ci(r, e);
}
function uo(r, e, t) {
  return e = ho(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function ho(r) {
  var e = Qh(r, "string");
  return sr(e) == "symbol" ? e : e + "";
}
function Qh(r, e) {
  if (sr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Fn = /* @__PURE__ */ (function(r) {
  function e() {
    return Uh(this, e), Yh(this, e, arguments);
  }
  return Jh(e, r), qh(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(B.Component);
uo(Fn, "displayName", "ZAxis");
uo(Fn, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var ef = ["option", "isActive"];
function Sr() {
  return Sr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Sr.apply(this, arguments);
}
function tf(r, e) {
  if (r == null) return {};
  var t = rf(r, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function rf(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function nf(r) {
  var e = r.option, t = r.isActive, n = tf(r, ef);
  return typeof e == "string" ? /* @__PURE__ */ B.createElement(Ji, Sr({
    option: /* @__PURE__ */ B.createElement(Ec, Sr({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ B.createElement(Ji, Sr({
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
function bs(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function nt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bs(Object(t), !0).forEach(function(n) {
      Pt(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : bs(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function sf(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xs(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, mo(n.key), n);
  }
}
function af(r, e, t) {
  return e && xs(r.prototype, e), t && xs(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function of(r, e, t) {
  return e = gn(e), lf(r, fo() ? Reflect.construct(e, t || [], gn(r).constructor) : e.apply(r, t));
}
function lf(r, e) {
  if (e && (ar(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cf(r);
}
function cf(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function fo() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fo = function() {
    return !!r;
  })();
}
function gn(r) {
  return gn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, gn(r);
}
function df(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && di(r, e);
}
function di(r, e) {
  return di = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, di(r, e);
}
function Pt(r, e, t) {
  return e = mo(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function mo(r) {
  var e = uf(r, "string");
  return ar(e) == "symbol" ? e : e + "";
}
function uf(r, e) {
  if (ar(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var $r = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    sf(this, e);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return t = of(this, e, [].concat(i)), Pt(t, "state", {
      isAnimationFinished: !1
    }), Pt(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), Pt(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), Pt(t, "id", Oc("recharts-scatter-")), t;
  }
  return df(e, r), af(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, s = this.props, a = s.shape, o = s.activeShape, l = s.activeIndex, d = Wn(this.props, !1);
      return n.map(function(c, u) {
        var h = l === u, p = h ? o : a, g = nt(nt({}, d), c);
        return /* @__PURE__ */ B.createElement(yr, Dr({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c?.cx, "-").concat(c?.cy, "-").concat(c?.size, "-").concat(u)
        }, Sc(i.props, c, u), {
          role: "img"
        }), /* @__PURE__ */ B.createElement(nf, Dr({
          option: p,
          isActive: h,
          key: "symbol-".concat(u)
        }, g)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, s = i.points, a = i.isAnimationActive, o = i.animationBegin, l = i.animationDuration, d = i.animationEasing, c = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ B.createElement(Dc, {
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
      }, function(h) {
        var p = h.t, g = s.map(function(y, w) {
          var R = u && u[w];
          if (R) {
            var S = qr(R.cx, y.cx), D = qr(R.cy, y.cy), O = qr(R.size, y.size);
            return nt(nt({}, y), {}, {
              cx: S(p),
              cy: D(p),
              size: O(p)
            });
          }
          var x = qr(0, y.size);
          return nt(nt({}, y), {}, {
            size: x(p)
          });
        });
        return /* @__PURE__ */ B.createElement(yr, null, n.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, s = n.isAnimationActive, a = this.state.prevPoints;
      return s && i && i.length && (!a || !pa(a, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, a = i.xAxis, o = i.yAxis, l = i.children, d = ga(l, Nc);
      return d ? d.map(function(c, u) {
        var h = c.props, p = h.direction, g = h.dataKey;
        return /* @__PURE__ */ B.cloneElement(c, {
          key: "".concat(p, "-").concat(g, "-").concat(s[u]),
          data: s,
          xAxis: a,
          yAxis: o,
          layout: p === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(w, R) {
            return {
              x: w.cx,
              y: w.cy,
              value: p === "x" ? +w.node.x : +w.node.y,
              errorVal: Xr(w, R)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, s = n.line, a = n.lineType, o = n.lineJointType, l = Wn(this.props, !1), d = Wn(s, !1), c, u;
      if (a === "joint")
        c = i.map(function(D) {
          return {
            x: D.cx,
            y: D.cy
          };
        });
      else if (a === "fitting") {
        var h = Rc(i), p = h.xmin, g = h.xmax, y = h.a, w = h.b, R = function(O) {
          return y * O + w;
        };
        c = [{
          x: p,
          y: R(p)
        }, {
          x: g,
          y: R(g)
        }];
      }
      var S = nt(nt(nt({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, d), {}, {
        points: c
      });
      return /* @__PURE__ */ B.isValidElement(s) ? u = /* @__PURE__ */ B.cloneElement(s, S) : Ac(s) ? u = s(S) : u = /* @__PURE__ */ B.createElement(Tc, Dr({}, S, {
        type: o
      })), /* @__PURE__ */ B.createElement(yr, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, s = n.points, a = n.line, o = n.className, l = n.xAxis, d = n.yAxis, c = n.left, u = n.top, h = n.width, p = n.height, g = n.id, y = n.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var w = this.state.isAnimationFinished, R = Rl("recharts-scatter", o), S = l && l.allowDataOverflow, D = d && d.allowDataOverflow, O = S || D, x = er(g) ? this.id : g;
      return /* @__PURE__ */ B.createElement(yr, {
        className: R,
        clipPath: O ? "url(#clipPath-".concat(x, ")") : null
      }, S || D ? /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-".concat(x)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: S ? c : c - h / 2,
        y: D ? u : u - p / 2,
        width: S ? h : h * 2,
        height: D ? p : p * 2
      }))) : null, a && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ B.createElement(yr, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!y || w) && va.renderCallByParent(this.props, s));
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
})(_c);
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
  isAnimationActive: !Mc.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Pt($r, "getComposedData", function(r) {
  var e = r.xAxis, t = r.yAxis, n = r.zAxis, i = r.item, s = r.displayedData, a = r.xAxisTicks, o = r.yAxisTicks, l = r.offset, d = i.props.tooltipType, c = ga(i.props.children, Ic), u = er(e.dataKey) ? i.props.dataKey : e.dataKey, h = er(t.dataKey) ? i.props.dataKey : t.dataKey, p = n && n.dataKey, g = n ? n.range : Fn.defaultProps.range, y = g && g[0], w = e.scale.bandwidth ? e.scale.bandwidth() : 0, R = t.scale.bandwidth ? t.scale.bandwidth() : 0, S = s.map(function(D, O) {
    var x = Xr(D, u), k = Xr(D, h), C = !er(p) && Xr(D, p) || "-", A = [{
      name: er(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: x,
      payload: D,
      dataKey: u,
      type: d
    }, {
      name: er(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: k,
      payload: D,
      dataKey: h,
      type: d
    }];
    C !== "-" && A.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: C,
      payload: D,
      dataKey: p,
      type: d
    });
    var j = Qi({
      axis: e,
      ticks: a,
      bandSize: w,
      entry: D,
      index: O,
      dataKey: u
    }), I = Qi({
      axis: t,
      ticks: o,
      bandSize: R,
      entry: D,
      index: O,
      dataKey: h
    }), N = C !== "-" ? n.scale(C) : y, E = Math.sqrt(Math.max(N, 0) / Math.PI);
    return nt(nt({}, D), {}, {
      cx: j,
      cy: I,
      x: j - E,
      y: I - E,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * E,
      height: 2 * E,
      size: N,
      node: {
        x,
        y: k,
        z: C
      },
      tooltipPayload: A,
      tooltipPosition: {
        x: j,
        y: I
      },
      payload: D
    }, c && c[O] && c[O].props);
  });
  return nt({
    points: S
  }, l);
});
var hf = Lc({
  chartName: "ComposedChart",
  GraphicalChild: [ya, Pc, ba, $r],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: xa
  }, {
    axisType: "yAxis",
    AxisComp: si
  }, {
    axisType: "zAxis",
    AxisComp: Fn
  }],
  formatAxisMap: zc
});
const ff = (r) => {
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
}, mf = ({ dataConfig: r, data: e, xAxis: t, yAxis: n = {
  hide: !0
}, label: i = !1, hideTooltip: s = !1, hideGrid: a = !1, aspect: o, legend: l, showValueUnderLabel: d = !1, bar: c, line: u, scatter: h, onClick: p }, g) => {
  const y = Fc(e), w = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], R = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], S = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], D = [...w, ...R, ...S], O = Math.max(...y.flatMap((C) => D.map((A) => Bc(n?.tickFormatter ? n.tickFormatter(`${C[A]}`) : `${C[A]}`)))), x = [c, u, h].filter((C) => C?.axisPosition === "left"), k = [c, u, h].filter((C) => C?.axisPosition === "right");
  return f(Hc, {
    config: r,
    ref: g,
    aspect: o,
    children: V(hf, {
      accessibilityLayer: !0,
      data: y,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: d ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (C) => {
        if (!p || !C.activeLabel || !C.activePayload)
          return;
        const A = {
          label: C.activeLabel,
          values: {}
        };
        for (const j of C.activePayload)
          A.values[j.name] = j.value;
        p(A);
      },
      children: [!s && f(Vc, {
        ...jc(),
        content: f($c, {
          yAxisFormatter: n.tickFormatter
        })
      }), !a && f(Wc, {
        ...Gc()
      }), x.length > 0 && f(si, {
        ...es(n),
        tick: !0,
        width: n.width ?? O + 20 + (k.length > 0 && x[0]?.axisLabel ? 20 : 0),
        hide: n.hide || x.some((C) => C?.hideAxis),
        label: x[0]?.axisLabel ? {
          value: x[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), k.length > 0 && f(si, {
        ...es(n),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: n.width ?? O + 20 + (x.length > 0 && k[0]?.axisLabel ? 20 : 0),
        hide: n.hide || k.some((C) => C?.hideAxis),
        label: k[0]?.axisLabel ? {
          value: k[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), f(xa, {
        ...Uc(t),
        hide: t?.hide,
        tick: d ? (C) => {
          const { x: A, y: j, payload: I } = C, N = e.find(($) => $.label === I.value)?.values || "", E = Object.keys(N).length === 1 ? Object.values(N)?.[0] : void 0, T = E !== void 0 && n.tickFormatter ? n.tickFormatter(`${E}`) : E.toLocaleString();
          return V("g", {
            transform: `translate(${A},${j})`,
            children: [f("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: I.value
            }), !!E && f("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: T
            })]
          });
        } : void 0
      }), w.map((C, A) => f(ba, {
        isAnimationActive: !1,
        dataKey: String(C),
        fill: r[C].color ? _r(r[C].color) : Gn(A),
        radius: 4,
        maxBarSize: 32,
        children: i && f(va, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(C)}`)
      }, `bar-${String(C)}`)), R.map((C, A) => f(ya, {
        type: u?.lineType ?? "natural",
        dataKey: String(C),
        stroke: r[C].color ? _r(r[C].color) : Gn(w.length + A),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(C)}`)), S.map((C, A) => f($r, {
        dataKey: String(C),
        fill: r[C].color ? _r(r[C].color) : Gn(w.length + R.length + A),
        r: 4,
        isAnimationActive: !1,
        yAxisId: h?.axisPosition === "right" ? "right" : void 0,
        shape: ff(String(C))
      }, `scatter-${String(C)}`)), l && f(Zc, {
        content: f(qc, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, pf = wa(mf), gf = ({ value: r, max: e = 100, label: t, color: n }, i) => {
  const s = n ? _r(n) : _r("categorical-1"), a = r / e * 100;
  return V("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [f("div", {
      className: "flex-grow",
      children: f(Yc, {
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
}, vf = wa(gf), cg = lt(
  {
    name: "AreaChart",
    type: "info"
  },
  Kc
), dg = lt(
  {
    name: "BarChart",
    type: "info"
  },
  Xc
), ug = lt(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Jc
), hg = lt(
  {
    name: "LineChart",
    type: "info"
  },
  Qc
), fg = lt(
  {
    name: "PieChart",
    type: "info"
  },
  ed
), mg = lt(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  td
), pg = lt(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  vf
), gg = lt(
  {
    name: "ComboChart",
    type: "info"
  },
  pf
), yf = (r) => typeof r == "boolean" || !r ? {
  show: !!r,
  invertStatus: !1
} : {
  show: r.show ?? !0,
  invertStatus: r.invertStatus ?? !1
}, po = ({ label: r, ...e }) => {
  const t = rd(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = yf(e.trend), s = t(e.comparison), a = nd(n.numericValue, n.formatterOptions), o = ts(s.numericValue), l = ts(n.numericValue), d = G(() => {
    if (!(!o || !i.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, i.show]);
  return V("div", {
    className: "flex flex-col gap-2",
    children: [r && f("div", {
      children: r
    }), V("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [f("span", {
        className: "font-bold text-2xl",
        children: a
      }), o !== void 0 && f(id, {
        percentage: d,
        amount: s,
        invertStatus: i.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, bf = () => V("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [f(xt, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), V("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [f(xt, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), f(xt, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
po.displayName = "F0BigNumber";
const xf = Js(po, bf), vg = Xe("F0BigNumber", xf), go = {
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
}, vo = {
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
}, wf = {}, _f = {
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
}, Cf = {
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
}, kf = {
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
}, Ef = {
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
}, Sf = {
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
}, Df = {
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
}, yo = {
  width: _f,
  height: Cf,
  minWidth: kf,
  minHeight: Ef,
  maxWidth: Sf,
  maxHeight: Df
}, bo = {
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
}, xo = {
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
}, wo = {
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
}, Nf = {}, _o = {
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
}, Co = {
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
}, Rf = {}, Af = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, ko = {
  overflow: Af,
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
}, Tf = {}, Eo = {
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
}, Of = {}, Mf = {
  ...bo,
  ...Eo,
  ...Co,
  ...wo,
  ..._o,
  ...yo,
  ...go,
  ...vo,
  ...ko,
  ...xo
};
function If(r, e) {
  return e.split(" ").map((t) => `${r}:${t}`).join(" ");
}
function Lf(r, e) {
  const t = [];
  for (const [n, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = Mf[n];
    if (!s) continue;
    const a = s[String(i)];
    a && t.push(If(r, a));
  }
  return t.join(" ");
}
const Pf = Vt({
  base: "",
  variants: {
    ...bo,
    ...Eo,
    ...Co,
    ...wo,
    ..._o,
    ...yo,
    ...go,
    ...vo,
    ...ko,
    ...xo
  },
  defaultVariants: {
    ...Of,
    ...Rf,
    ...Nf,
    ...wf,
    ...Tf
  }
}), zf = ["sm", "md", "lg", "xl"], So = Ge(({ display: r, position: e, padding: t, paddingX: n, paddingY: i, paddingTop: s, paddingBottom: a, paddingLeft: o, paddingRight: l, margin: d, marginX: c, marginY: u, marginTop: h, marginBottom: p, marginLeft: g, marginRight: y, gap: w, columns: R, rows: S, colSpan: D, colStart: O, rowSpan: x, width: k, height: C, minWidth: A, minHeight: j, maxWidth: I, maxHeight: N, background: E, borderColor: T, border: $, borderTop: ie, borderBottom: fe, borderLeft: ne, borderRight: de, borderRadius: le, borderRadiusTopLeft: we, borderRadiusTopRight: Ue, borderRadiusBottomLeft: _e, borderRadiusBottomRight: Ee, borderStyle: Oe, overflow: dt, overflowX: Se, overflowY: Ve, divider: Ne, dividerColor: Me, alignItems: ce, justifyContent: Qe, flexDirection: Le, flexWrap: je, grow: re, shrink: ye, sm: be, md: et, lg: m, xl: v, ..._ }, F) => {
  const P = ie && ie !== "none" || fe && fe !== "none" || ne && ne !== "none" || de && de !== "none", L = $ && $ !== "none" || P, q = {
    sm: be,
    md: et,
    lg: m,
    xl: v
  }, te = zf.map((xe) => {
    const ge = q[xe];
    return ge ? Lf(xe, ge) : "";
  }).filter(Boolean).join(" ");
  return f("div", {
    ref: F,
    className: se(P && "border-0", Pf({
      display: r,
      position: e,
      padding: t,
      paddingX: n,
      paddingY: i,
      paddingTop: s,
      paddingBottom: a,
      paddingLeft: o,
      paddingRight: l,
      margin: d,
      marginX: c,
      marginY: u,
      marginTop: h,
      marginBottom: p,
      marginLeft: g,
      marginRight: y,
      gap: w,
      columns: R,
      rows: S,
      colSpan: D,
      colStart: O,
      rowSpan: x,
      width: k,
      height: C,
      minWidth: A,
      minHeight: j,
      maxWidth: I,
      maxHeight: N,
      background: E,
      borderColor: T,
      border: $,
      borderTop: ie,
      borderBottom: fe,
      borderLeft: ne,
      borderRight: de,
      borderRadius: le,
      borderRadiusTopLeft: we,
      borderRadiusTopRight: Ue,
      borderRadiusBottomLeft: _e,
      borderRadiusBottomRight: Ee,
      borderStyle: Oe,
      overflow: dt,
      overflowX: Se,
      overflowY: Ve,
      divider: Ne,
      dividerColor: Me,
      alignItems: ce,
      justifyContent: Qe,
      flexDirection: Le,
      flexWrap: je,
      grow: re,
      shrink: ye
    }), te, L && !T && "border-f1-border", Ne && !Me && "divide-f1-border", "scrollbar-macos"),
    ..._
  });
});
So.displayName = "F0Box";
const yg = lt({
  name: "F0Box",
  type: "layout"
}, So), bg = Al.filter(
  (r) => r !== "ai"
), xg = Qs, wg = ["default", "outline", "neutral"], _g = Qs, Cg = ["sm", "md", "lg"], kg = ["compact", "expanded"], Eg = Tl, Sg = [
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
], ui = ({ count: r, list: e }) => {
  const [t, n] = J(!1), i = f(en, {
    label: `+${r}`
  });
  return e?.length ? V(ea, {
    open: t,
    onOpenChange: n,
    children: [f(ta, {
      asChild: !0,
      children: f("button", {
        className: ra("inline-flex flex-shrink-0 items-center"),
        children: i
      })
    }), f(na, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: V(ia, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, a) => f("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: f(en, {
            ...s
          })
        }, a)), f(sa, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
};
ui.displayName = "ChipCounter";
const Do = ({ chips: r, max: e = 4, remainingCount: t, layout: n = "compact" }) => {
  if (n === "fill")
    return f(Ol, {
      items: r,
      renderListItem: (l) => f(en, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => f(ui, {
        count: (t ?? 0) + l,
        list: t ? void 0 : r.slice(r.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const i = r.slice(0, e), s = r.slice(e), a = t ?? r.length - e, o = a > 0;
  return V("div", {
    className: "flex items-center gap-2",
    children: [i.map((l, d) => f(en, {
      ...l
    }, d)), o && f(ui, {
      count: a,
      list: t ? void 0 : s
    })]
  });
};
Do.displayName = "F0ChipList";
const Dg = Xe("F0ChipList", Do), Ng = Ml, Ff = Vt({
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
}), Bf = Vt({
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
}), Rg = ({ title: r, description: e, action: t, link: n, icon: i, variant: s = "neutral" }) => {
  const a = Y(null);
  return f("div", {
    ref: a,
    className: "@container",
    children: f("div", {
      className: Ff({
        variant: s
      }),
      children: V("div", {
        className: se("flex flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between"),
        children: [V("div", {
          className: "flex flex-row gap-2",
          children: [f("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? f(Il, {
              icon: i || Ll,
              size: "sm"
            }) : f(_a, {
              type: s,
              size: "sm"
            })
          }), V("div", {
            className: "flex flex-col gap-0.5",
            children: [f("p", {
              className: Bf({
                variant: s
              }),
              children: r
            }), f("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || n) && V("div", {
          className: se("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0"),
          children: [n && f(Pl, {
            href: n.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: n.label
          }), t && f(ft, {
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
}, No = ({ disableClose: r = !1, onClose: e, isOpen: t, children: n, position: i = "right", size: s = "md", primaryAction: a, secondaryAction: o, title: l, description: d, module: c, otherActions: u, tabs: h, modal: p = !1, activeTabId: g, setActiveTabId: y, disableContentPadding: w }) => {
  const [R, S] = J(t);
  X(() => {
    S(t);
  }, [t]);
  const D = G(() => V(jt, {
    children: [f(zl, {
      title: l,
      description: d,
      module: c,
      otherActions: u,
      tabs: h,
      activeTabId: g,
      setActiveTabId: y,
      disableClose: r
    }), f(Fl, {
      disableContentPadding: w ?? !1,
      children: n
    }), f(Bl, {
      primaryAction: a ?? [],
      secondaryAction: o ?? [],
      onClose: () => S(!1)
    })]
  }), [l, d, c, u, h, g, y, r, w, n, a, o]);
  return f(Hl, {
    isOpen: R,
    onClose: e,
    position: i,
    size: s,
    modal: p,
    showOverlay: p,
    fullHeight: !0,
    onOpenChange: S,
    children: D
  });
}, Hf = Vl, Ro = (r) => {
  const e = Hf.reduce((t, n) => {
    const { [n]: i, ...s } = t;
    return s;
  }, r);
  return f(No, {
    ...e
  });
};
Ro.displayName = "F0Drawer";
const Ag = Xe("F0Drawer", Ro), Vf = 388;
function jf({ filters: r, value: e, onChange: t, height: n, width: i = 600, className: s, showApplyButton: a = !0, applyButtonLabel: o }) {
  const l = ur(), [d, c] = J(null), [u, h] = J(e);
  X(() => {
    h(e);
  }, [e]), X(() => {
    if (!d && r) {
      const w = Object.keys(r);
      if (w.length > 0) {
        const R = w.find((S) => {
          const D = u[S], O = Yi(r[S].type);
          return D !== void 0 && !O.isEmpty(D, {
            schema: r[S],
            i18n: l
          });
        });
        c(R ?? w[0]);
      }
    }
  }, [r, d, u, l]);
  const p = (w, R) => {
    const S = {
      ...u,
      [w]: R
    };
    h(S), a || t(S);
  }, g = () => {
    t(u);
  }, y = G(() => n || Object.entries(r).reduce((R, [S, D]) => {
    const O = Yi(D.type);
    return Math.max(R, O?.formHeight || Vf);
  }, 0), [r, n]);
  return !r || Object.keys(r).length === 0 ? null : f("div", {
    className: se("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: i
    },
    children: f(jl, {
      filters: r,
      tempFilters: u,
      selectedFilterKey: d,
      onFilterSelect: c,
      onFilterChange: p,
      onApply: g,
      height: y,
      showApplyButton: a,
      applyButtonLabel: o
    })
  });
}
jf.displayName = "F0FilterPickerContent";
var Wr = (r) => r.type === "checkbox", Ut = (r) => r instanceof Date, Be = (r) => r == null;
const Ao = (r) => typeof r == "object";
var ke = (r) => !Be(r) && !Array.isArray(r) && Ao(r) && !Ut(r), To = (r) => ke(r) && r.target ? Wr(r.target) ? r.target.checked : r.target.value : r, $f = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r, Oo = (r, e) => r.has($f(e)), Wf = (r) => {
  const e = r.constructor && r.constructor.prototype;
  return ke(e) && e.hasOwnProperty("isPrototypeOf");
}, zi = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function $e(r) {
  let e;
  const t = Array.isArray(r), n = typeof FileList < "u" ? r instanceof FileList : !1;
  if (r instanceof Date)
    e = new Date(r);
  else if (r instanceof Set)
    e = new Set(r);
  else if (!(zi && (r instanceof Blob || n)) && (t || ke(r)))
    if (e = t ? [] : {}, !t && !Wf(r))
      e = r;
    else
      for (const i in r)
        r.hasOwnProperty(i) && (e[i] = $e(r[i]));
  else
    return r;
  return e;
}
var Bn = (r) => Array.isArray(r) ? r.filter(Boolean) : [], Ce = (r) => r === void 0, z = (r, e, t) => {
  if (!e || !ke(r))
    return t;
  const n = Bn(e.split(/[,[\].]+?/)).reduce((i, s) => Be(i) ? i : i[s], r);
  return Ce(n) || n === r ? Ce(r[e]) ? t : r[e] : n;
}, st = (r) => typeof r == "boolean", Fi = (r) => /^\w*$/.test(r), Mo = (r) => Bn(r.replace(/["|']|\]/g, "").split(/\.|\[/)), pe = (r, e, t) => {
  let n = -1;
  const i = Fi(e) ? [e] : Mo(e), s = i.length, a = s - 1;
  for (; ++n < s; ) {
    const o = i[n];
    let l = t;
    if (n !== a) {
      const d = r[o];
      l = ke(d) || Array.isArray(d) ? d : isNaN(+i[n + 1]) ? {} : [];
    }
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    r[o] = l, r = r[o];
  }
  return r;
};
const vn = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ut = {
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
}, Io = B.createContext(null), $t = () => B.useContext(Io), Gf = (r) => {
  const { children: e, ...t } = r;
  return B.createElement(Io.Provider, { value: t }, e);
};
var Lo = (r, e, t, n = !0) => {
  const i = {
    defaultValues: e._defaultValues
  };
  for (const s in r)
    Object.defineProperty(i, s, {
      get: () => {
        const a = s;
        return e._proxyFormState[a] !== ut.all && (e._proxyFormState[a] = !n || ut.all), t && (t[a] = !0), r[a];
      }
    });
  return i;
}, We = (r) => ke(r) && !Object.keys(r).length, Po = (r, e, t, n) => {
  t(r);
  const { name: i, ...s } = r;
  return We(s) || Object.keys(s).length >= Object.keys(e).length || Object.keys(s).find((a) => e[a] === (!n || ut.all));
}, Nr = (r) => Array.isArray(r) ? r : [r], zo = (r, e, t) => !r || !e || r === e || Nr(r).some((n) => n && (t ? n === e : n.startsWith(e) || e.startsWith(n)));
function Bi(r) {
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
function Uf(r) {
  const e = $t(), { control: t = e.control, disabled: n, name: i, exact: s } = r || {}, [a, o] = B.useState(t._formState), l = B.useRef(!0), d = B.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), c = B.useRef(i);
  return c.current = i, Bi({
    disabled: n,
    next: (u) => l.current && zo(c.current, u.name, s) && Po(u, d.current, t._updateFormState) && o({
      ...t._formState,
      ...u
    }),
    subject: t._subjects.state
  }), B.useEffect(() => (l.current = !0, d.current.isValid && t._updateValid(!0), () => {
    l.current = !1;
  }), [t]), B.useMemo(() => Lo(a, t, d.current, !1), [a, t]);
}
var Ct = (r) => typeof r == "string", Fo = (r, e, t, n, i) => Ct(r) ? (n && e.watch.add(r), z(t, r, i)) : Array.isArray(r) ? r.map((s) => (n && e.watch.add(s), z(t, s))) : (n && (e.watchAll = !0), t);
function Zf(r) {
  const e = $t(), { control: t = e.control, name: n, defaultValue: i, disabled: s, exact: a } = r || {}, o = B.useRef(n);
  o.current = n, Bi({
    disabled: s,
    subject: t._subjects.values,
    next: (c) => {
      zo(o.current, c.name, a) && d($e(Fo(o.current, t._names, c.values || t._formValues, !1, i)));
    }
  });
  const [l, d] = B.useState(t._getWatch(n, i));
  return B.useEffect(() => t._removeUnmounted()), l;
}
function qf(r) {
  const e = $t(), { name: t, disabled: n, control: i = e.control, shouldUnregister: s } = r, a = Oo(i._names.array, t), o = Zf({
    control: i,
    name: t,
    defaultValue: z(i._formValues, t, z(i._defaultValues, t, r.defaultValue)),
    exact: !0
  }), l = Uf({
    control: i,
    name: t,
    exact: !0
  }), d = B.useRef(i.register(t, {
    ...r.rules,
    value: o,
    ...st(r.disabled) ? { disabled: r.disabled } : {}
  })), c = B.useMemo(() => Object.defineProperties({}, {
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
    ...st(n) || l.disabled ? { disabled: l.disabled || n } : {},
    onChange: (h) => d.current.onChange({
      target: {
        value: To(h),
        name: t
      },
      type: vn.CHANGE
    }),
    onBlur: () => d.current.onBlur({
      target: {
        value: z(i._formValues, t),
        name: t
      },
      type: vn.BLUR
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
    const h = i._options.shouldUnregister || s, p = (g, y) => {
      const w = z(i._fields, g);
      w && w._f && (w._f.mount = y);
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
    fieldState: c
  }), [u, l, c]);
}
const Yf = (r) => r.render(qf(r));
var Bo = (r, e, t, n, i) => e ? {
  ...t[r],
  types: {
    ...t[r] && t[r].types ? t[r].types : {},
    [n]: i || !0
  }
} : {}, ws = (r) => ({
  isOnSubmit: !r || r === ut.onSubmit,
  isOnBlur: r === ut.onBlur,
  isOnChange: r === ut.onChange,
  isOnAll: r === ut.all,
  isOnTouch: r === ut.onTouched
}), _s = (r, e, t) => !t && (e.watchAll || e.watch.has(r) || [...e.watch].some((n) => r.startsWith(n) && /^\.\w+/.test(r.slice(n.length))));
const Rr = (r, e, t, n) => {
  for (const i of t || Object.keys(r)) {
    const s = z(r, i);
    if (s) {
      const { _f: a, ...o } = s;
      if (a) {
        if (a.refs && a.refs[0] && e(a.refs[0], i) && !n)
          return !0;
        if (a.ref && e(a.ref, a.name) && !n)
          return !0;
        if (Rr(o, e))
          break;
      } else if (ke(o) && Rr(o, e))
        break;
    }
  }
};
var Kf = (r, e, t) => {
  const n = Nr(z(r, t));
  return pe(n, "root", e[t]), pe(r, t, n), r;
}, Hi = (r) => r.type === "file", _t = (r) => typeof r == "function", yn = (r) => {
  if (!zi)
    return !1;
  const e = r ? r.ownerDocument : 0;
  return r instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, Qr = (r) => Ct(r), Vi = (r) => r.type === "radio", bn = (r) => r instanceof RegExp;
const Cs = {
  value: !1,
  isValid: !1
}, ks = { value: !0, isValid: !0 };
var Ho = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const e = r.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: e, isValid: !!e.length };
    }
    return r[0].checked && !r[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      r[0].attributes && !Ce(r[0].attributes.value) ? Ce(r[0].value) || r[0].value === "" ? ks : { value: r[0].value, isValid: !0 } : ks
    ) : Cs;
  }
  return Cs;
};
const Es = {
  isValid: !1,
  value: null
};
var Vo = (r) => Array.isArray(r) ? r.reduce((e, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : e, Es) : Es;
function Ss(r, e, t = "validate") {
  if (Qr(r) || Array.isArray(r) && r.every(Qr) || st(r) && !r)
    return {
      type: t,
      message: Qr(r) ? r : "",
      ref: e
    };
}
var Jt = (r) => ke(r) && !bn(r) ? r : {
  value: r,
  message: ""
}, Ds = async (r, e, t, n, i, s) => {
  const { ref: a, refs: o, required: l, maxLength: d, minLength: c, min: u, max: h, pattern: p, validate: g, name: y, valueAsNumber: w, mount: R } = r._f, S = z(t, y);
  if (!R || e.has(y))
    return {};
  const D = o ? o[0] : a, O = (E) => {
    i && D.reportValidity && (D.setCustomValidity(st(E) ? "" : E || ""), D.reportValidity());
  }, x = {}, k = Vi(a), C = Wr(a), A = k || C, j = (w || Hi(a)) && Ce(a.value) && Ce(S) || yn(a) && a.value === "" || S === "" || Array.isArray(S) && !S.length, I = Bo.bind(null, y, n, x), N = (E, T, $, ie = St.maxLength, fe = St.minLength) => {
    const ne = E ? T : $;
    x[y] = {
      type: E ? ie : fe,
      message: ne,
      ref: a,
      ...I(E ? ie : fe, ne)
    };
  };
  if (s ? !Array.isArray(S) || !S.length : l && (!A && (j || Be(S)) || st(S) && !S || C && !Ho(o).isValid || k && !Vo(o).isValid)) {
    const { value: E, message: T } = Qr(l) ? { value: !!l, message: l } : Jt(l);
    if (E && (x[y] = {
      type: St.required,
      message: T,
      ref: D,
      ...I(St.required, T)
    }, !n))
      return O(T), x;
  }
  if (!j && (!Be(u) || !Be(h))) {
    let E, T;
    const $ = Jt(h), ie = Jt(u);
    if (!Be(S) && !isNaN(S)) {
      const fe = a.valueAsNumber || S && +S;
      Be($.value) || (E = fe > $.value), Be(ie.value) || (T = fe < ie.value);
    } else {
      const fe = a.valueAsDate || new Date(S), ne = (we) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + we), de = a.type == "time", le = a.type == "week";
      Ct($.value) && S && (E = de ? ne(S) > ne($.value) : le ? S > $.value : fe > new Date($.value)), Ct(ie.value) && S && (T = de ? ne(S) < ne(ie.value) : le ? S < ie.value : fe < new Date(ie.value));
    }
    if ((E || T) && (N(!!E, $.message, ie.message, St.max, St.min), !n))
      return O(x[y].message), x;
  }
  if ((d || c) && !j && (Ct(S) || s && Array.isArray(S))) {
    const E = Jt(d), T = Jt(c), $ = !Be(E.value) && S.length > +E.value, ie = !Be(T.value) && S.length < +T.value;
    if (($ || ie) && (N($, E.message, T.message), !n))
      return O(x[y].message), x;
  }
  if (p && !j && Ct(S)) {
    const { value: E, message: T } = Jt(p);
    if (bn(E) && !S.match(E) && (x[y] = {
      type: St.pattern,
      message: T,
      ref: a,
      ...I(St.pattern, T)
    }, !n))
      return O(T), x;
  }
  if (g) {
    if (_t(g)) {
      const E = await g(S, t), T = Ss(E, D);
      if (T && (x[y] = {
        ...T,
        ...I(St.validate, T.message)
      }, !n))
        return O(T.message), x;
    } else if (ke(g)) {
      let E = {};
      for (const T in g) {
        if (!We(E) && !n)
          break;
        const $ = Ss(await g[T](S, t), D, T);
        $ && (E = {
          ...$,
          ...I(T, $.message)
        }, O($.message), n && (x[y] = E));
      }
      if (!We(E) && (x[y] = {
        ref: D,
        ...E
      }, !n))
        return x;
    }
  }
  return O(!0), x;
};
function Xf(r, e) {
  const t = e.slice(0, -1).length;
  let n = 0;
  for (; n < t; )
    r = Ce(r) ? n++ : r[e[n++]];
  return r;
}
function Jf(r) {
  for (const e in r)
    if (r.hasOwnProperty(e) && !Ce(r[e]))
      return !1;
  return !0;
}
function Re(r, e) {
  const t = Array.isArray(e) ? e : Fi(e) ? [e] : Mo(e), n = t.length === 1 ? r : Xf(r, t), i = t.length - 1, s = t[i];
  return n && delete n[s], i !== 0 && (ke(n) && We(n) || Array.isArray(n) && Jf(n)) && Re(r, t.slice(0, -1)), r;
}
var Xn = () => {
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
}, hi = (r) => Be(r) || !Ao(r);
function Lt(r, e) {
  if (hi(r) || hi(e))
    return r === e;
  if (Ut(r) && Ut(e))
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
      if (Ut(s) && Ut(a) || ke(s) && ke(a) || Array.isArray(s) && Array.isArray(a) ? !Lt(s, a) : s !== a)
        return !1;
    }
  }
  return !0;
}
var jo = (r) => r.type === "select-multiple", Qf = (r) => Vi(r) || Wr(r), Jn = (r) => yn(r) && r.isConnected, $o = (r) => {
  for (const e in r)
    if (_t(r[e]))
      return !0;
  return !1;
};
function xn(r, e = {}) {
  const t = Array.isArray(r);
  if (ke(r) || t)
    for (const n in r)
      Array.isArray(r[n]) || ke(r[n]) && !$o(r[n]) ? (e[n] = Array.isArray(r[n]) ? [] : {}, xn(r[n], e[n])) : Be(r[n]) || (e[n] = !0);
  return e;
}
function Wo(r, e, t) {
  const n = Array.isArray(r);
  if (ke(r) || n)
    for (const i in r)
      Array.isArray(r[i]) || ke(r[i]) && !$o(r[i]) ? Ce(e) || hi(t[i]) ? t[i] = Array.isArray(r[i]) ? xn(r[i], []) : { ...xn(r[i]) } : Wo(r[i], Be(e) ? {} : e[i], t[i]) : t[i] = !Lt(r[i], e[i]);
  return t;
}
var br = (r, e) => Wo(r, e, xn(e)), Go = (r, { valueAsNumber: e, valueAsDate: t, setValueAs: n }) => Ce(r) ? r : e ? r === "" ? NaN : r && +r : t && Ct(r) ? new Date(r) : n ? n(r) : r;
function Qn(r) {
  const e = r.ref;
  return Hi(e) ? e.files : Vi(e) ? Vo(r.refs).value : jo(e) ? [...e.selectedOptions].map(({ value: t }) => t) : Wr(e) ? Ho(r.refs).value : Go(Ce(e.value) ? r.ref.value : e.value, r);
}
var em = (r, e, t, n) => {
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
}, xr = (r) => Ce(r) ? r : bn(r) ? r.source : ke(r) ? bn(r.value) ? r.value.source : r.value : r;
const Ns = "AsyncFunction";
var tm = (r) => !!r && !!r.validate && !!(_t(r.validate) && r.validate.constructor.name === Ns || ke(r.validate) && Object.values(r.validate).find((e) => e.constructor.name === Ns)), rm = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function Rs(r, e, t) {
  const n = z(r, t);
  if (n || Fi(t))
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
var nm = (r, e, t, n, i) => i.isOnAll ? !1 : !t && i.isOnTouch ? !(e || r) : (t ? n.isOnBlur : i.isOnBlur) ? !r : (t ? n.isOnChange : i.isOnChange) ? r : !0, im = (r, e) => !Bn(z(r, e)).length && Re(r, e);
const sm = {
  mode: ut.onSubmit,
  reValidateMode: ut.onChange,
  shouldFocusError: !0
};
function am(r = {}) {
  let e = {
    ...sm,
    ...r
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: _t(e.defaultValues),
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
  }, n = {}, i = ke(e.defaultValues) || ke(e.values) ? $e(e.defaultValues || e.values) || {} : {}, s = e.shouldUnregister ? {} : $e(i), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, o = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, d = 0;
  const c = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, u = {
    values: Xn(),
    array: Xn(),
    state: Xn()
  }, h = ws(e.mode), p = ws(e.reValidateMode), g = e.criteriaMode === ut.all, y = (m) => (v) => {
    clearTimeout(d), d = setTimeout(m, v);
  }, w = async (m) => {
    if (!e.disabled && (c.isValid || m)) {
      const v = e.resolver ? We((await A()).errors) : await I(n, !0);
      v !== t.isValid && u.state.next({
        isValid: v
      });
    }
  }, R = (m, v) => {
    !e.disabled && (c.isValidating || c.validatingFields) && ((m || Array.from(o.mount)).forEach((_) => {
      _ && (v ? pe(t.validatingFields, _, v) : Re(t.validatingFields, _));
    }), u.state.next({
      validatingFields: t.validatingFields,
      isValidating: !We(t.validatingFields)
    }));
  }, S = (m, v = [], _, F, P = !0, L = !0) => {
    if (F && _ && !e.disabled) {
      if (a.action = !0, L && Array.isArray(z(n, m))) {
        const q = _(z(n, m), F.argA, F.argB);
        P && pe(n, m, q);
      }
      if (L && Array.isArray(z(t.errors, m))) {
        const q = _(z(t.errors, m), F.argA, F.argB);
        P && pe(t.errors, m, q), im(t.errors, m);
      }
      if (c.touchedFields && L && Array.isArray(z(t.touchedFields, m))) {
        const q = _(z(t.touchedFields, m), F.argA, F.argB);
        P && pe(t.touchedFields, m, q);
      }
      c.dirtyFields && (t.dirtyFields = br(i, s)), u.state.next({
        name: m,
        isDirty: E(m, v),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      pe(s, m, v);
  }, D = (m, v) => {
    pe(t.errors, m, v), u.state.next({
      errors: t.errors
    });
  }, O = (m) => {
    t.errors = m, u.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, x = (m, v, _, F) => {
    const P = z(n, m);
    if (P) {
      const L = z(s, m, Ce(_) ? z(i, m) : _);
      Ce(L) || F && F.defaultChecked || v ? pe(s, m, v ? L : Qn(P._f)) : ie(m, L), a.mount && w();
    }
  }, k = (m, v, _, F, P) => {
    let L = !1, q = !1;
    const te = {
      name: m
    };
    if (!e.disabled) {
      const xe = !!(z(n, m) && z(n, m)._f && z(n, m)._f.disabled);
      if (!_ || F) {
        c.isDirty && (q = t.isDirty, t.isDirty = te.isDirty = E(), L = q !== te.isDirty);
        const ge = xe || Lt(z(i, m), v);
        q = !!(!xe && z(t.dirtyFields, m)), ge || xe ? Re(t.dirtyFields, m) : pe(t.dirtyFields, m, !0), te.dirtyFields = t.dirtyFields, L = L || c.dirtyFields && q !== !ge;
      }
      if (_) {
        const ge = z(t.touchedFields, m);
        ge || (pe(t.touchedFields, m, _), te.touchedFields = t.touchedFields, L = L || c.touchedFields && ge !== _);
      }
      L && P && u.state.next(te);
    }
    return L ? te : {};
  }, C = (m, v, _, F) => {
    const P = z(t.errors, m), L = c.isValid && st(v) && t.isValid !== v;
    if (e.delayError && _ ? (l = y(() => D(m, _)), l(e.delayError)) : (clearTimeout(d), l = null, _ ? pe(t.errors, m, _) : Re(t.errors, m)), (_ ? !Lt(P, _) : P) || !We(F) || L) {
      const q = {
        ...F,
        ...L && st(v) ? { isValid: v } : {},
        errors: t.errors,
        name: m
      };
      t = {
        ...t,
        ...q
      }, u.state.next(q);
    }
  }, A = async (m) => {
    R(m, !0);
    const v = await e.resolver(s, e.context, em(m || o.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return R(m), v;
  }, j = async (m) => {
    const { errors: v } = await A(m);
    if (m)
      for (const _ of m) {
        const F = z(v, _);
        F ? pe(t.errors, _, F) : Re(t.errors, _);
      }
    else
      t.errors = v;
    return v;
  }, I = async (m, v, _ = {
    valid: !0
  }) => {
    for (const F in m) {
      const P = m[F];
      if (P) {
        const { _f: L, ...q } = P;
        if (L) {
          const te = o.array.has(L.name), xe = P._f && tm(P._f);
          xe && c.validatingFields && R([F], !0);
          const ge = await Ds(P, o.disabled, s, g, e.shouldUseNativeValidation && !v, te);
          if (xe && c.validatingFields && R([F]), ge[L.name] && (_.valid = !1, v))
            break;
          !v && (z(ge, L.name) ? te ? Kf(t.errors, ge, L.name) : pe(t.errors, L.name, ge[L.name]) : Re(t.errors, L.name));
        }
        !We(q) && await I(q, v, _);
      }
    }
    return _.valid;
  }, N = () => {
    for (const m of o.unMount) {
      const v = z(n, m);
      v && (v._f.refs ? v._f.refs.every((_) => !Jn(_)) : !Jn(v._f.ref)) && Se(m);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, E = (m, v) => !e.disabled && (m && v && pe(s, m, v), !Lt(Ue(), i)), T = (m, v, _) => Fo(m, o, {
    ...a.mount ? s : Ce(v) ? i : Ct(m) ? { [m]: v } : v
  }, _, v), $ = (m) => Bn(z(a.mount ? s : i, m, e.shouldUnregister ? z(i, m, []) : [])), ie = (m, v, _ = {}) => {
    const F = z(n, m);
    let P = v;
    if (F) {
      const L = F._f;
      L && (!L.disabled && pe(s, m, Go(v, L)), P = yn(L.ref) && Be(v) ? "" : v, jo(L.ref) ? [...L.ref.options].forEach((q) => q.selected = P.includes(q.value)) : L.refs ? Wr(L.ref) ? L.refs.length > 1 ? L.refs.forEach((q) => (!q.defaultChecked || !q.disabled) && (q.checked = Array.isArray(P) ? !!P.find((te) => te === q.value) : P === q.value)) : L.refs[0] && (L.refs[0].checked = !!P) : L.refs.forEach((q) => q.checked = q.value === P) : Hi(L.ref) ? L.ref.value = "" : (L.ref.value = P, L.ref.type || u.values.next({
        name: m,
        values: { ...s }
      })));
    }
    (_.shouldDirty || _.shouldTouch) && k(m, P, _.shouldTouch, _.shouldDirty, !0), _.shouldValidate && we(m);
  }, fe = (m, v, _) => {
    for (const F in v) {
      const P = v[F], L = `${m}.${F}`, q = z(n, L);
      (o.array.has(m) || ke(P) || q && !q._f) && !Ut(P) ? fe(L, P, _) : ie(L, P, _);
    }
  }, ne = (m, v, _ = {}) => {
    const F = z(n, m), P = o.array.has(m), L = $e(v);
    pe(s, m, L), P ? (u.array.next({
      name: m,
      values: { ...s }
    }), (c.isDirty || c.dirtyFields) && _.shouldDirty && u.state.next({
      name: m,
      dirtyFields: br(i, s),
      isDirty: E(m, L)
    })) : F && !F._f && !Be(L) ? fe(m, L, _) : ie(m, L, _), _s(m, o) && u.state.next({ ...t }), u.values.next({
      name: a.mount ? m : void 0,
      values: { ...s }
    });
  }, de = async (m) => {
    a.mount = !0;
    const v = m.target;
    let _ = v.name, F = !0;
    const P = z(n, _), L = () => v.type ? Qn(P._f) : To(m), q = (te) => {
      F = Number.isNaN(te) || Ut(te) && isNaN(te.getTime()) || Lt(te, z(s, _, te));
    };
    if (P) {
      let te, xe;
      const ge = L(), ze = m.type === vn.BLUR || m.type === vn.FOCUS_OUT, Gt = !rm(P._f) && !e.resolver && !z(t.errors, _) && !P._f.deps || nm(ze, z(t.touchedFields, _), t.isSubmitted, p, h), Yt = _s(_, o, ze);
      pe(s, _, ge), ze ? (P._f.onBlur && P._f.onBlur(m), l && l(0)) : P._f.onChange && P._f.onChange(m);
      const tt = k(_, ge, ze, !1), Gr = !We(tt) || Yt;
      if (!ze && u.values.next({
        name: _,
        type: m.type,
        values: { ...s }
      }), Gt)
        return c.isValid && (e.mode === "onBlur" && ze ? w() : ze || w()), Gr && u.state.next({ name: _, ...Yt ? {} : tt });
      if (!ze && Yt && u.state.next({ ...t }), e.resolver) {
        const { errors: Ur } = await A([_]);
        if (q(ge), F) {
          const jn = Rs(t.errors, n, _), Kt = Rs(Ur, n, jn.name || _);
          te = Kt.error, _ = Kt.name, xe = We(Ur);
        }
      } else
        R([_], !0), te = (await Ds(P, o.disabled, s, g, e.shouldUseNativeValidation))[_], R([_]), q(ge), F && (te ? xe = !1 : c.isValid && (xe = await I(n, !0)));
      F && (P._f.deps && we(P._f.deps), C(_, xe, te, tt));
    }
  }, le = (m, v) => {
    if (z(t.errors, v) && m.focus)
      return m.focus(), 1;
  }, we = async (m, v = {}) => {
    let _, F;
    const P = Nr(m);
    if (e.resolver) {
      const L = await j(Ce(m) ? m : P);
      _ = We(L), F = m ? !P.some((q) => z(L, q)) : _;
    } else m ? (F = (await Promise.all(P.map(async (L) => {
      const q = z(n, L);
      return await I(q && q._f ? { [L]: q } : q);
    }))).every(Boolean), !(!F && !t.isValid) && w()) : F = _ = await I(n);
    return u.state.next({
      ...!Ct(m) || c.isValid && _ !== t.isValid ? {} : { name: m },
      ...e.resolver || !m ? { isValid: _ } : {},
      errors: t.errors
    }), v.shouldFocus && !F && Rr(n, le, m ? P : o.mount), F;
  }, Ue = (m) => {
    const v = {
      ...a.mount ? s : i
    };
    return Ce(m) ? v : Ct(m) ? z(v, m) : m.map((_) => z(v, _));
  }, _e = (m, v) => ({
    invalid: !!z((v || t).errors, m),
    isDirty: !!z((v || t).dirtyFields, m),
    error: z((v || t).errors, m),
    isValidating: !!z(t.validatingFields, m),
    isTouched: !!z((v || t).touchedFields, m)
  }), Ee = (m) => {
    m && Nr(m).forEach((v) => Re(t.errors, v)), u.state.next({
      errors: m ? t.errors : {}
    });
  }, Oe = (m, v, _) => {
    const F = (z(n, m, { _f: {} })._f || {}).ref, P = z(t.errors, m) || {}, { ref: L, message: q, type: te, ...xe } = P;
    pe(t.errors, m, {
      ...xe,
      ...v,
      ref: F
    }), u.state.next({
      name: m,
      errors: t.errors,
      isValid: !1
    }), _ && _.shouldFocus && F && F.focus && F.focus();
  }, dt = (m, v) => _t(m) ? u.values.subscribe({
    next: (_) => m(T(void 0, v), _)
  }) : T(m, v, !0), Se = (m, v = {}) => {
    for (const _ of m ? Nr(m) : o.mount)
      o.mount.delete(_), o.array.delete(_), v.keepValue || (Re(n, _), Re(s, _)), !v.keepError && Re(t.errors, _), !v.keepDirty && Re(t.dirtyFields, _), !v.keepTouched && Re(t.touchedFields, _), !v.keepIsValidating && Re(t.validatingFields, _), !e.shouldUnregister && !v.keepDefaultValue && Re(i, _);
    u.values.next({
      values: { ...s }
    }), u.state.next({
      ...t,
      ...v.keepDirty ? { isDirty: E() } : {}
    }), !v.keepIsValid && w();
  }, Ve = ({ disabled: m, name: v, field: _, fields: F }) => {
    (st(m) && a.mount || m || o.disabled.has(v)) && (m ? o.disabled.add(v) : o.disabled.delete(v), k(v, Qn(_ ? _._f : z(F, v)._f), !1, !1, !0));
  }, Ne = (m, v = {}) => {
    let _ = z(n, m);
    const F = st(v.disabled) || st(e.disabled);
    return pe(n, m, {
      ..._ || {},
      _f: {
        ..._ && _._f ? _._f : { ref: { name: m } },
        name: m,
        mount: !0,
        ...v
      }
    }), o.mount.add(m), _ ? Ve({
      field: _,
      disabled: st(v.disabled) ? v.disabled : e.disabled,
      name: m
    }) : x(m, !0, v.value), {
      ...F ? { disabled: v.disabled || e.disabled } : {},
      ...e.progressive ? {
        required: !!v.required,
        min: xr(v.min),
        max: xr(v.max),
        minLength: xr(v.minLength),
        maxLength: xr(v.maxLength),
        pattern: xr(v.pattern)
      } : {},
      name: m,
      onChange: de,
      onBlur: de,
      ref: (P) => {
        if (P) {
          Ne(m, v), _ = z(n, m);
          const L = Ce(P.value) && P.querySelectorAll && P.querySelectorAll("input,select,textarea")[0] || P, q = Qf(L), te = _._f.refs || [];
          if (q ? te.find((xe) => xe === L) : L === _._f.ref)
            return;
          pe(n, m, {
            _f: {
              ..._._f,
              ...q ? {
                refs: [
                  ...te.filter(Jn),
                  L,
                  ...Array.isArray(z(i, m)) ? [{}] : []
                ],
                ref: { type: L.type, name: m }
              } : { ref: L }
            }
          }), x(m, !1, void 0, L);
        } else
          _ = z(n, m, {}), _._f && (_._f.mount = !1), (e.shouldUnregister || v.shouldUnregister) && !(Oo(o.array, m) && a.action) && o.unMount.add(m);
      }
    };
  }, Me = () => e.shouldFocusError && Rr(n, le, o.mount), ce = (m) => {
    st(m) && (u.state.next({ disabled: m }), Rr(n, (v, _) => {
      const F = z(n, _);
      F && (v.disabled = F._f.disabled || m, Array.isArray(F._f.refs) && F._f.refs.forEach((P) => {
        P.disabled = F._f.disabled || m;
      }));
    }, 0, !1));
  }, Qe = (m, v) => async (_) => {
    let F;
    _ && (_.preventDefault && _.preventDefault(), _.persist && _.persist());
    let P = $e(s);
    if (o.disabled.size)
      for (const L of o.disabled)
        pe(P, L, void 0);
    if (u.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: L, values: q } = await A();
      t.errors = L, P = q;
    } else
      await I(n);
    if (Re(t.errors, "root"), We(t.errors)) {
      u.state.next({
        errors: {}
      });
      try {
        await m(P, _);
      } catch (L) {
        F = L;
      }
    } else
      v && await v({ ...t.errors }, _), Me(), setTimeout(Me);
    if (u.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: We(t.errors) && !F,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), F)
      throw F;
  }, Le = (m, v = {}) => {
    z(n, m) && (Ce(v.defaultValue) ? ne(m, $e(z(i, m))) : (ne(m, v.defaultValue), pe(i, m, $e(v.defaultValue))), v.keepTouched || Re(t.touchedFields, m), v.keepDirty || (Re(t.dirtyFields, m), t.isDirty = v.defaultValue ? E(m, $e(z(i, m))) : E()), v.keepError || (Re(t.errors, m), c.isValid && w()), u.state.next({ ...t }));
  }, je = (m, v = {}) => {
    const _ = m ? $e(m) : i, F = $e(_), P = We(m), L = P ? i : F;
    if (v.keepDefaultValues || (i = _), !v.keepValues) {
      if (v.keepDirtyValues) {
        const q = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(br(i, s))
        ]);
        for (const te of Array.from(q))
          z(t.dirtyFields, te) ? pe(L, te, z(s, te)) : ne(te, z(L, te));
      } else {
        if (zi && Ce(m))
          for (const q of o.mount) {
            const te = z(n, q);
            if (te && te._f) {
              const xe = Array.isArray(te._f.refs) ? te._f.refs[0] : te._f.ref;
              if (yn(xe)) {
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
    }, a.mount = !c.isValid || !!v.keepIsValid || !!v.keepDirtyValues, a.watch = !!e.shouldUnregister, u.state.next({
      submitCount: v.keepSubmitCount ? t.submitCount : 0,
      isDirty: P ? !1 : v.keepDirty ? t.isDirty : !!(v.keepDefaultValues && !Lt(m, i)),
      isSubmitted: v.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: P ? {} : v.keepDirtyValues ? v.keepDefaultValues && s ? br(i, s) : t.dirtyFields : v.keepDefaultValues && m ? br(i, m) : v.keepDirty ? t.dirtyFields : {},
      touchedFields: v.keepTouched ? t.touchedFields : {},
      errors: v.keepErrors ? t.errors : {},
      isSubmitSuccessful: v.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, re = (m, v) => je(_t(m) ? m(s) : m, v);
  return {
    control: {
      register: Ne,
      unregister: Se,
      getFieldState: _e,
      handleSubmit: Qe,
      setError: Oe,
      _executeSchema: A,
      _getWatch: T,
      _getDirty: E,
      _updateValid: w,
      _removeUnmounted: N,
      _updateFieldArray: S,
      _updateDisabledField: Ve,
      _getFieldArray: $,
      _reset: je,
      _resetDefaultValues: () => _t(e.defaultValues) && e.defaultValues().then((m) => {
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
      _disableForm: ce,
      _subjects: u,
      _proxyFormState: c,
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
    register: Ne,
    handleSubmit: Qe,
    watch: dt,
    setValue: ne,
    getValues: Ue,
    reset: re,
    resetField: Le,
    clearErrors: Ee,
    unregister: Se,
    setError: Oe,
    setFocus: (m, v = {}) => {
      const _ = z(n, m), F = _ && _._f;
      if (F) {
        const P = F.refs ? F.refs[0] : F.ref;
        P.focus && (P.focus(), v.shouldSelect && _t(P.select) && P.select());
      }
    },
    getFieldState: _e
  };
}
function om(r = {}) {
  const e = B.useRef(void 0), t = B.useRef(void 0), [n, i] = B.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: _t(r.defaultValues),
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
    defaultValues: _t(r.defaultValues) ? void 0 : r.defaultValues
  });
  e.current || (e.current = {
    ...am(r),
    formState: n
  });
  const s = e.current.control;
  return s._options = r, Bi({
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
    r.values && !Lt(r.values, t.current) ? (s._reset(r.values, s._options.resetOptions), t.current = r.values, i((a) => ({ ...a }))) : s._resetDefaultValues();
  }, [r.values, s]), B.useEffect(() => {
    r.errors && s._setErrors(r.errors);
  }, [r.errors, s]), B.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), B.useEffect(() => {
    r.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [r.shouldUnregister, s]), e.current.formState = Lo(n, s), e.current;
}
var lm = "Label", Uo = at.forwardRef((r, e) => /* @__PURE__ */ f(
  $l.label,
  {
    ...r,
    ref: e,
    onMouseDown: (t) => {
      t.target.closest("button, input, select, textarea") || (r.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
Uo.displayName = lm;
var Zo = Uo;
const wn = at.forwardRef(({ className: r, ...e }, t) => f(Zo, {
  ref: t,
  className: se("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", r),
  ...e
}));
wn.displayName = Zo.displayName;
const cm = Gf, qo = at.createContext({}), As = ({ ...r }) => {
  const { formState: e } = $t();
  return f(qo.Provider, {
    value: {
      name: r.name
    },
    children: f(Yf, {
      ...r,
      disabled: e.isSubmitting
    })
  });
}, Hn = () => {
  const r = at.useContext(qo), e = at.useContext(Yo), { getFieldState: t, formState: n } = $t(), i = t(r.name, n);
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
}, Yo = at.createContext({}), Ko = at.forwardRef(({ className: r, ...e }, t) => {
  const n = at.useId();
  return f(Yo.Provider, {
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
Ko.displayName = "FormItem";
const dm = at.forwardRef(({ className: r, ...e }, t) => {
  const { error: n, formItemId: i } = Hn();
  return f(wn, {
    ref: t,
    className: se(n && "text-f1-foreground-critical", r),
    htmlFor: i,
    ...e
  });
});
dm.displayName = "FormLabel";
const Xo = at.forwardRef(({ ...r }, e) => {
  const { error: t, formItemId: n, formDescriptionId: i, formMessageId: s } = Hn();
  return f(Wl, {
    ref: e,
    id: n,
    "aria-describedby": t ? `${i} ${s}` : `${i}`,
    "aria-invalid": !!t,
    ...r
  });
});
Xo.displayName = "FormControl";
const Jo = at.forwardRef(({ className: r, ...e }, t) => {
  const { formDescriptionId: n } = Hn();
  return f("p", {
    ref: t,
    id: n,
    className: se("text-base text-f1-foreground-secondary", r),
    ...e
  });
});
Jo.displayName = "FormDescription";
const Qo = at.forwardRef(({ className: r, children: e, fallback: t, ...n }, i) => {
  const { error: s, formMessageId: a } = Hn(), { forms: o } = ur(), l = s ? s.message ?? t ?? o.validation.invalidType : e;
  return l ? V("div", {
    ref: i,
    id: a,
    className: se("flex gap-1", r),
    ...n,
    children: [f(Nn, {
      icon: aa,
      color: "critical"
    }), f("span", {
      className: "text-base font-medium text-f1-foreground-critical",
      children: l
    })]
  }) : null;
});
Qo.displayName = "FormMessage";
const el = "gap-4", um = "mt-6", hm = "max-w-[720px]", Wt = "md", tl = gt(null);
function rl() {
  const r = ot(tl);
  if (!r)
    throw new Error("useF0FormContext must be used within a F0Form");
  return r;
}
function Lr(r, e, t) {
  const n = ["forms", r];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function ve(r, e) {
  return r._def?.typeName === e;
}
function ji(r) {
  return ve(r, "ZodEffects") ? r._def.schema : r;
}
const nl = /* @__PURE__ */ new WeakMap();
function Tg(r, e) {
  nl.set(r, e);
  const t = r;
  return t._f0Config = e, t._innerSchema = r, t;
}
function $i(r) {
  const e = r;
  return e._f0Config ? e._f0Config : nl.get(r);
}
function Og(r) {
  return $i(r) !== void 0;
}
function vt(r) {
  let e = r;
  for (; ve(e, "ZodOptional") || ve(e, "ZodNullable") || ve(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function fm(r, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = vt(r);
  return ve(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : ve(t, "ZodNumber") ? "number" : ve(t, "ZodBoolean") ? "switch" : ve(t, "ZodDate") ? "date" : ve(t, "ZodEnum") || ve(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : ve(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function il(r) {
  return ve(r, "ZodOptional") || ve(r, "ZodNullable") || ve(r, "ZodDefault") && il(r._def.innerType);
}
const mm = /* @__PURE__ */ new Set([
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
function pm(r) {
  const e = vt(r);
  return ve(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "min" ? (n.value ?? 0) >= 1 : mm.has(n.kind)) : !1;
}
function sl(r) {
  if (il(r))
    return !1;
  const e = vt(r);
  return ve(e, "ZodString") ? pm(r) : !0;
}
function gm(r, e) {
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
function Vn(r, e) {
  return typeof r == "function" ? r({ values: e }) : gm(r, e);
}
function Wi(r, e) {
  return r === void 0 ? !1 : typeof r == "function" ? r({ values: e }) : r;
}
function Qt(r, e) {
  if (r !== void 0)
    return typeof r == "function" ? r({ values: e }) : r;
}
function vm(r) {
  const e = vt(r);
  return ve(e, "ZodLiteral") && e._def.value === !0;
}
function ym({ field: r, formField: e }) {
  const t = r.validation && vm(r.validation);
  return f(Gl, {
    ...e,
    title: r.label,
    disabled: r.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function bm({ field: r, formField: e, error: t, isValidating: n, required: i }) {
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
  return f(jt, {
    children: r.render(s)
  });
}
function xm(r, e) {
  if (r)
    return {
      value: {
        from: r,
        to: r
      },
      granularity: e?.[0] ?? "day"
    };
}
function wm(r) {
  return r?.value?.from;
}
function al({ field: r, formField: e, error: t, loading: n }) {
  const i = G(() => xm(e.value ?? void 0, r.granularities), [e.value, r.granularities]), s = (a) => {
    e.onChange(wm(a) ?? null);
  };
  return f(Ca, {
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
    size: Wt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function fi(r) {
  if (!r || !(r instanceof Date) || isNaN(r.getTime())) return "";
  const e = String(r.getHours()).padStart(2, "0"), t = String(r.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function _m(r) {
  if (!r) return;
  const [e, t] = r.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const n = /* @__PURE__ */ new Date();
  return n.setHours(e, t, 0, 0), n;
}
function ei(r, e) {
  if (!r) return;
  const t = new Date(r);
  if (e) {
    const [n, i, s] = e.split(":").map(Number);
    t.setHours(n ?? 0, i ?? 0, s ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function ol({ field: r, formField: e, error: t, loading: n }) {
  const i = G(() => fi(e.value ?? void 0), [e.value]), s = oe((a) => {
    if (!a) {
      e.onChange(null);
      return;
    }
    const o = _m(a);
    e.onChange(o);
  }, [e]);
  return f(oa, {
    type: "time",
    label: r.label,
    disabled: r.disabled,
    value: i,
    onChange: s,
    size: Wt,
    hideLabel: !0,
    error: t,
    loading: n,
    clearable: r.clearable,
    name: e.name,
    ref: e.ref,
    icon: Ul
  });
}
function Cm({ field: r, formField: e, error: t, loading: n }) {
  const i = e.value ?? void 0, s = G(() => fi(i), [i]), a = oe((h) => {
    if (!h) {
      e.onChange(null);
      return;
    }
    e.onChange(ei(h, s));
  }, [e, s]), o = oe((h) => {
    if (!h) {
      if (i) {
        const g = new Date(i);
        g.setHours(0, 0, 0, 0), e.onChange(g);
      }
      return;
    }
    const p = fi(h);
    if (!i) {
      const g = /* @__PURE__ */ new Date();
      g.setHours(0, 0, 0, 0), e.onChange(ei(g, p));
      return;
    }
    e.onChange(ei(i, p));
  }, [e, i]), l = G(() => ({
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
  }), [r]), d = G(() => ({
    ...e,
    value: i,
    onChange: a
  }), [e, i, a]), c = G(() => ({
    id: `${r.id}-time`,
    type: "time",
    label: "Time",
    disabled: r.disabled,
    clearable: !1
  }), [r.id, r.disabled]), u = G(() => ({
    ...e,
    value: i,
    onChange: o
  }), [e, i, o]);
  return V("div", {
    className: "flex gap-2",
    children: [f("div", {
      className: "flex-1",
      children: f(al, {
        field: l,
        formField: d,
        error: t,
        loading: n
      })
    }), f("div", {
      className: "w-32",
      children: f(ol, {
        field: c,
        formField: u,
        error: t,
        loading: n
      })
    })]
  });
}
function km(r) {
  if (!(!r?.from || !r?.to))
    return {
      value: {
        from: r.from,
        to: r.to
      },
      granularity: "range"
    };
}
function Em(r) {
  if (!(!r?.value?.from || !r?.value?.to))
    return {
      from: r.value.from,
      to: r.value.to
    };
}
function Sm({ field: r, formField: e, error: t, loading: n }) {
  const i = G(() => km(e.value ?? void 0), [e.value]), s = (o) => {
    e.onChange(Em(o) ?? null);
  }, a = r.fromLabel && r.toLabel ? `${r.label} (${r.fromLabel} - ${r.toLabel})` : r.label;
  return f(Ca, {
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
    size: Wt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Dm({ field: r, formField: e, error: t, loading: n }) {
  return f(sd, {
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
    size: Wt,
    hideLabel: !0,
    error: t,
    loading: n,
    clearable: r.clearable
  });
}
function Nm({ field: r, formField: e }) {
  const t = e.value;
  return f(ad, {
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
function Rm({ field: r, formField: e, error: t, loading: n }) {
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
    size: Wt,
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
function Am({ field: r, formField: e, error: t, loading: n }) {
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
    size: Wt,
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
function Tm(r) {
  const { field: e } = r;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? f(Am, {
    ...r,
    field: e
  }) : "options" in e && e.options !== void 0 ? f(Rm, {
    ...r,
    field: e
  }) : null;
}
function Om(r) {
  const e = vt(r);
  return ve(e, "ZodLiteral") && e._def.value === !0;
}
function Mm({ field: r, formField: e }) {
  const t = r.validation && Om(r.validation);
  return f(Zl, {
    ...e,
    title: r.label,
    disabled: r.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
const Im = {
  email: "name@example.com"
}, Lm = {
  url: Yl,
  email: ql
};
function Pm({ field: r, formField: e, error: t, loading: n }) {
  const i = r.inputType ?? "text", s = r.placeholder ?? Im[i] ?? void 0, a = Lm[i];
  return f(oa, {
    ...e,
    label: r.label,
    type: i,
    placeholder: s,
    disabled: r.disabled,
    value: e.value != null ? String(e.value) : "",
    size: Wt,
    hideLabel: !0,
    error: t,
    loading: n,
    icon: a,
    clearable: r.clearable
  });
}
function zm({ field: r, formField: e, error: t, loading: n }) {
  return f(od, {
    ...e,
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    rows: r.rows,
    maxLength: r.maxLength,
    value: e.value != null ? String(e.value) : "",
    size: Wt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Fm({ field: r, formField: e, fieldState: t, isSubmitting: n, isRequired: i, values: s }) {
  const a = !!t.error, { isValidating: o } = t, l = Wi(r.disabled, s) || n, d = {
    error: a,
    loading: o
  };
  switch (r.type) {
    case "text":
      return f(Pm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "number":
      return f(Dm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "textarea":
      return f(zm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "select":
      return f(Tm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "checkbox":
      return f(ym, {
        field: {
          ...r,
          disabled: l
        },
        formField: e
      });
    case "switch":
      return f(Mm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e
      });
    case "date":
      return f(al, {
        field: {
          ...r,
          disabled: l,
          minDate: Qt(r.minDate, s),
          maxDate: Qt(r.maxDate, s)
        },
        formField: e,
        ...d
      });
    case "time":
      return f(ol, {
        field: {
          ...r,
          disabled: l,
          minDate: Qt(r.minDate, s),
          maxDate: Qt(r.maxDate, s)
        },
        formField: e,
        ...d
      });
    case "datetime":
      return f(Cm, {
        field: {
          ...r,
          disabled: l,
          minDate: Qt(r.minDate, s),
          maxDate: Qt(r.maxDate, s)
        },
        formField: e,
        ...d
      });
    case "daterange":
      return f(Sm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "richtext":
      return f(Nm, {
        field: {
          ...r,
          disabled: l
        },
        formField: e
      });
    case "custom":
      return f(bm, {
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
function Gi({ field: r, sectionId: e }) {
  const t = $t(), n = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = rl(), { forms: a } = ur(), o = Wi(r.disabled, n), l = Y(o);
  X(() => {
    const p = l.current;
    if (l.current = o, !p && o && r.resetOnDisable) {
      const g = t.formState.defaultValues?.[r.id];
      t.setValue(r.id, g, {
        shouldValidate: !1
      });
    }
  }, [o, r.resetOnDisable, r.id, t]);
  const d = !r.renderIf || Vn(r.renderIf, n), c = r.type !== "checkbox" && r.type !== "custom", u = r.validation && sl(r.validation), h = Lr(s, e, r.id);
  return d ? f(As, {
    control: t.control,
    name: r.id,
    render: ({ field: p, fieldState: g }) => V(Ko, {
      id: h,
      className: "scroll-mt-4",
      children: [c && V("label", {
        htmlFor: r.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [r.label, u && f("span", {
          className: "ml-0.5 text-f1-foreground-critical",
          children: "*"
        })]
      }), f(Xo, {
        children: Fm({
          field: r,
          formField: p,
          fieldState: g,
          isSubmitting: i,
          isRequired: u,
          values: n
        })
      }), r.helpText && f(Jo, {
        children: r.helpText
      }), f(Qo, {
        fallback: u ? a.validation.required : a.validation.invalidType
      })]
    })
  }) : f(As, {
    control: t.control,
    name: r.id,
    render: () => f("span", {
      className: "hidden",
      "aria-hidden": "true"
    })
  });
}
function ll({ row: r, sectionId: e }) {
  return f("div", {
    className: `flex xs:flex-row flex-col ${el} [&>*]:flex-1`,
    children: r.fields.map((t) => f(Gi, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function Bm(r) {
  const e = vt(r);
  return ve(e, "ZodLiteral") && e._def.value === !0;
}
function cl({ fields: r }) {
  const e = $t(), { watch: t, setValue: n } = e, { isSubmitting: i } = e.formState, s = t(), a = G(() => r.filter((h) => !h.renderIf || Vn(h.renderIf, s)), [r, s]), o = G(() => Object.fromEntries(a.map((h) => [h.id, Wi(h.disabled, s) || i])), [a, i, s]), l = Y({});
  X(() => {
    const h = l.current, p = e.formState.defaultValues ?? {};
    for (const g of a) {
      if (!(g.id in h))
        continue;
      const y = h[g.id], w = o[g.id] ?? !1;
      if (!y && w && g.resetOnDisable) {
        const R = p[g.id] ?? !1;
        n(g.id, R, {
          shouldValidate: !1
        });
      }
    }
    l.current = {
      ...o
    };
  }, [o, a, e, n]);
  const d = G(() => a.map((h) => ({
    value: h.id,
    title: h.label,
    description: h.helpText,
    disabled: o[h.id] ?? !1,
    required: !!(h.validation && Bm(h.validation))
  })), [a, o]), c = G(() => a.filter((h) => s[h.id]).map((h) => h.id), [a, s]);
  return a.length === 0 ? null : f(ld, {
    multiple: !0,
    isToggle: !0,
    grouped: !0,
    items: d,
    value: c,
    onChange: (h) => {
      for (const p of a) {
        const g = h.includes(p.id), y = !!s[p.id];
        g !== y && n(p.id, g, {
          shouldValidate: !0
        });
      }
    }
  });
}
function Hm(r) {
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
function Vm({ section: r }) {
  const t = $t().watch(), { formName: n } = rl(), { title: i, description: s, renderIf: a, action: o, fields: l } = r.section, d = r.id;
  if (a && !Vn(a, t))
    return null;
  const c = Hm(l), u = Lr(n, d);
  return V("section", {
    id: u,
    className: "flex flex-col scroll-mt-4",
    children: [V("div", {
      className: se("flex items-start justify-between py-5", "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"),
      children: [f(cd, {
        title: i,
        description: s ?? ""
      }), o && f(ft, {
        label: o.label,
        icon: o.icon,
        onClick: o.onClick,
        href: o.href,
        variant: "outline",
        size: "md"
      })]
    }), f("div", {
      className: `flex flex-col ${el}`,
      children: c.map((h, p) => h.type === "switchGroup" ? f(cl, {
        fields: h.fields,
        sectionId: d
      }, `switch-group-${p}`) : h.type === "field" ? f(Gi, {
        field: h.item.field,
        sectionId: d
      }, h.item.field.id) : h.type === "row" ? f(ll, {
        row: h.item,
        sectionId: d
      }, `row-${h.index}`) : null)
    })]
  });
}
const Ts = (r, e, t) => {
  if (r && "reportValidity" in r) {
    const n = z(t, e);
    r.setCustomValidity(n && n.message || ""), r.reportValidity();
  }
}, dl = (r, e) => {
  for (const t in e.fields) {
    const n = e.fields[t];
    n && n.ref && "reportValidity" in n.ref ? Ts(n.ref, t, r) : n.refs && n.refs.forEach((i) => Ts(i, t, r));
  }
}, jm = (r, e) => {
  e.shouldUseNativeValidation && dl(r, e);
  const t = {};
  for (const n in r) {
    const i = z(e.fields, n), s = Object.assign(r[n] || {}, { ref: i && i.ref });
    if ($m(e.names || Object.keys(r), n)) {
      const a = Object.assign({}, z(t, n));
      pe(a, "root", s), pe(t, n, a);
    } else pe(t, n, s);
  }
  return t;
}, $m = (r, e) => r.some((t) => t.startsWith(e + "."));
var Wm = function(r, e) {
  for (var t = {}; r.length; ) {
    var n = r[0], i = n.code, s = n.message, a = n.path.join(".");
    if (!t[a]) if ("unionErrors" in n) {
      var o = n.unionErrors[0].errors[0];
      t[a] = { message: o.message, type: o.code };
    } else t[a] = { message: s, type: i };
    if ("unionErrors" in n && n.unionErrors.forEach(function(c) {
      return c.errors.forEach(function(u) {
        return r.push(u);
      });
    }), e) {
      var l = t[a].types, d = l && l[n.code];
      t[a] = Bo(a, e, t, i, d ? [].concat(d, n.message) : n.message);
    }
    r.shift();
  }
  return t;
}, Gm = function(r, e, t) {
  return t === void 0 && (t = {}), function(n, i, s) {
    try {
      return Promise.resolve((function(a, o) {
        try {
          var l = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(d) {
            return s.shouldUseNativeValidation && dl({}, s), { errors: {}, values: t.raw ? n : d };
          });
        } catch (d) {
          return o(d);
        }
        return l && l.then ? l.then(void 0, o) : l;
      })(0, function(a) {
        if ((function(o) {
          return Array.isArray(o?.errors);
        })(a)) return { values: {}, errors: jm(Wm(a.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
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
var Os;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Os || (Os = {}));
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
            const d = a.path[l];
            l === a.path.length - 1 ? (o[d] = o[d] || { _errors: [] }, o[d]._errors.push(t(a))) : o[d] = o[d] || { _errors: [] }, o = o[d], l++;
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
Nt.create = (r) => new Nt(r);
const mi = (r, e) => {
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
let Um = mi;
function Zm() {
  return Um;
}
const qm = (r) => {
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
function H(r, e) {
  const t = Zm(), n = qm({
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
      t === mi ? void 0 : mi
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
        return Q;
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
        return Q;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (n[s.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const Q = Object.freeze({
  status: "aborted"
}), wr = (r) => ({ status: "dirty", value: r }), ct = (r) => ({ status: "valid", value: r }), Ms = (r) => r.status === "aborted", Is = (r) => r.status === "dirty", or = (r) => r.status === "valid", _n = (r) => typeof Promise < "u" && r instanceof Promise;
var U;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e?.message;
})(U || (U = {}));
class Bt {
  constructor(e, t, n, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ls = (r, e) => {
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
      status: new Je(),
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
    if (_n(t))
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
    return Ls(n, i);
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
      parsedType: It(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (_n(i) ? i : Promise.resolve(i));
    return Ls(n, s);
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
    return new cr({
      schema: this,
      typeName: ee.ZodEffects,
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
    return kt.create(this);
  }
  promise() {
    return Sn.create(this, this._def);
  }
  or(e) {
    return kn.create([this, e], this._def);
  }
  and(e) {
    return En.create(this, e, this._def);
  }
  transform(e) {
    return new cr({
      ...ae(this._def),
      schema: this,
      typeName: ee.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new vi({
      ...ae(this._def),
      innerType: this,
      defaultValue: t,
      typeName: ee.ZodDefault
    });
  }
  brand() {
    return new vp({
      typeName: ee.ZodBranded,
      type: this,
      ...ae(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new yi({
      ...ae(this._def),
      innerType: this,
      catchValue: t,
      typeName: ee.ZodCatch
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
    return Ui.create(this, e);
  }
  readonly() {
    return bi.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ym = /^c[^\s-]{8,}$/i, Km = /^[0-9a-z]+$/, Xm = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Jm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Qm = /^[a-z0-9_-]{21}$/i, ep = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, tp = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, rp = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, np = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ti;
const ip = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ap = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, op = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, lp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, cp = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, ul = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", dp = new RegExp(`^${ul}$`);
function hl(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function up(r) {
  return new RegExp(`^${hl(r)}$`);
}
function hp(r) {
  let e = `${ul}T${hl(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function fp(r, e) {
  return !!((e === "v4" || !e) && ip.test(r) || (e === "v6" || !e) && ap.test(r));
}
function mp(r, e) {
  if (!ep.test(r))
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
function pp(r, e) {
  return !!((e === "v4" || !e) && sp.test(r) || (e === "v6" || !e) && op.test(r));
}
class Zt extends he {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== W.string) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: M.invalid_type,
        expected: W.string,
        received: s.parsedType
      }), Q;
    }
    const n = new Je();
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
        rp.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "email",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        ti || (ti = new RegExp(np, "u")), ti.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "emoji",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Jm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "uuid",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        Qm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "nanoid",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Ym.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "cuid",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Km.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
          validation: "cuid2",
          code: M.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        Xm.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
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
      }), n.dirty()) : s.kind === "datetime" ? hp(s).test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? dp.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? up(s).test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        code: M.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? tp.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "duration",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? fp(e.data, s.version) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "ip",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? mp(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "jwt",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? pp(e.data, s.version) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "cidr",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? lp.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
        validation: "base64",
        code: M.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? cp.test(e.data) || (i = this._getOrReturnCtx(e, i), H(i, {
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
      ...U.errToObj(n)
    });
  }
  _addCheck(e) {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...U.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...U.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...U.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...U.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...U.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...U.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...U.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...U.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...U.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...U.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...U.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...U.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...U.errToObj(e) });
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
      ...U.errToObj(e?.message)
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
      ...U.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...U.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...U.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...U.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...U.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...U.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...U.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...U.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...U.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, U.errToObj(e));
  }
  trim() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Zt({
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
Zt.create = (r) => new Zt({
  checks: [],
  typeName: ee.ZodString,
  coerce: r?.coerce ?? !1,
  ...ae(r)
});
function gp(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = t > n ? t : n, s = Number.parseInt(r.toFixed(i).replace(".", "")), a = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % a / 10 ** i;
}
class Pr extends he {
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
      }), Q;
    }
    let n;
    const i = new Je();
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
      }), i.dirty()) : s.kind === "multipleOf" ? gp(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), H(n, {
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
    return this.setLimit("min", e, !0, U.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, U.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, U.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, U.toString(t));
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
          message: U.toString(i)
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
      message: U.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: U.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: U.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: U.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: U.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: U.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: U.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: U.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: U.toString(e)
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
Pr.create = (r) => new Pr({
  checks: [],
  typeName: ee.ZodNumber,
  coerce: r?.coerce || !1,
  ...ae(r)
});
class zr extends he {
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
    const i = new Je();
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
    }), Q;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, U.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, U.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, U.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, U.toString(t));
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
          message: U.toString(i)
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
      message: U.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: U.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: U.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: U.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: U.toString(t)
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
  typeName: ee.ZodBigInt,
  coerce: r?.coerce ?? !1,
  ...ae(r)
});
class Ps extends he {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== W.boolean) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.boolean,
        received: n.parsedType
      }), Q;
    }
    return ct(e.data);
  }
}
Ps.create = (r) => new Ps({
  typeName: ee.ZodBoolean,
  coerce: r?.coerce || !1,
  ...ae(r)
});
class Cn extends he {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== W.date) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: M.invalid_type,
        expected: W.date,
        received: s.parsedType
      }), Q;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return H(s, {
        code: M.invalid_date
      }), Q;
    }
    const n = new Je();
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
    return new Cn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: U.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: U.toString(t)
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
Cn.create = (r) => new Cn({
  checks: [],
  coerce: r?.coerce || !1,
  typeName: ee.ZodDate,
  ...ae(r)
});
class zs extends he {
  _parse(e) {
    if (this._getType(e) !== W.symbol) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.symbol,
        received: n.parsedType
      }), Q;
    }
    return ct(e.data);
  }
}
zs.create = (r) => new zs({
  typeName: ee.ZodSymbol,
  ...ae(r)
});
class Fs extends he {
  _parse(e) {
    if (this._getType(e) !== W.undefined) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.undefined,
        received: n.parsedType
      }), Q;
    }
    return ct(e.data);
  }
}
Fs.create = (r) => new Fs({
  typeName: ee.ZodUndefined,
  ...ae(r)
});
class Bs extends he {
  _parse(e) {
    if (this._getType(e) !== W.null) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.null,
        received: n.parsedType
      }), Q;
    }
    return ct(e.data);
  }
}
Bs.create = (r) => new Bs({
  typeName: ee.ZodNull,
  ...ae(r)
});
class pi extends he {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ct(e.data);
  }
}
pi.create = (r) => new pi({
  typeName: ee.ZodAny,
  ...ae(r)
});
class Hs extends he {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ct(e.data);
  }
}
Hs.create = (r) => new Hs({
  typeName: ee.ZodUnknown,
  ...ae(r)
});
class Ht extends he {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return H(t, {
      code: M.invalid_type,
      expected: W.never,
      received: t.parsedType
    }), Q;
  }
}
Ht.create = (r) => new Ht({
  typeName: ee.ZodNever,
  ...ae(r)
});
class Vs extends he {
  _parse(e) {
    if (this._getType(e) !== W.undefined) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.void,
        received: n.parsedType
      }), Q;
    }
    return ct(e.data);
  }
}
Vs.create = (r) => new Vs({
  typeName: ee.ZodVoid,
  ...ae(r)
});
class kt extends he {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== W.array)
      return H(t, {
        code: M.invalid_type,
        expected: W.array,
        received: t.parsedType
      }), Q;
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
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new Bt(t, a, t.path, o)))).then((a) => Je.mergeArray(n, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new Bt(t, a, t.path, o)));
    return Je.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new kt({
      ...this._def,
      minLength: { value: e, message: U.toString(t) }
    });
  }
  max(e, t) {
    return new kt({
      ...this._def,
      maxLength: { value: e, message: U.toString(t) }
    });
  }
  length(e, t) {
    return new kt({
      ...this._def,
      exactLength: { value: e, message: U.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
kt.create = (r, e) => new kt({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ee.ZodArray,
  ...ae(e)
});
function rr(r) {
  if (r instanceof De) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = zt.create(rr(n));
    }
    return new De({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof kt ? new kt({
    ...r._def,
    type: rr(r.element)
  }) : r instanceof zt ? zt.create(rr(r.unwrap())) : r instanceof dr ? dr.create(rr(r.unwrap())) : r instanceof qt ? qt.create(r.items.map((e) => rr(e))) : r;
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
      const d = this._getOrReturnCtx(e);
      return H(d, {
        code: M.invalid_type,
        expected: W.object,
        received: d.parsedType
      }), Q;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Ht && this._def.unknownKeys === "strip"))
      for (const d in i.data)
        a.includes(d) || o.push(d);
    const l = [];
    for (const d of a) {
      const c = s[d], u = i.data[d];
      l.push({
        key: { status: "valid", value: d },
        value: c._parse(new Bt(i, u, i.path, d)),
        alwaysSet: d in i.data
      });
    }
    if (this._def.catchall instanceof Ht) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const c of o)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: i.data[c] }
          });
      else if (d === "strict")
        o.length > 0 && (H(i, {
          code: M.unrecognized_keys,
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
            new Bt(i, u, i.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const c of l) {
        const u = await c.key, h = await c.value;
        d.push({
          key: u,
          value: h,
          alwaysSet: c.alwaysSet
        });
      }
      return d;
    }).then((d) => Je.mergeObjectSync(n, d)) : Je.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return U.errToObj, new De({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          const i = this._def.errorMap?.(t, n).message ?? n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: U.errToObj(e).message ?? i
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
      typeName: ee.ZodObject
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
    return rr(this);
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
    return fl(me.objectKeys(this.shape));
  }
}
De.create = (r, e) => new De({
  shape: () => r,
  unknownKeys: "strip",
  catchall: Ht.create(),
  typeName: ee.ZodObject,
  ...ae(e)
});
De.strictCreate = (r, e) => new De({
  shape: () => r,
  unknownKeys: "strict",
  catchall: Ht.create(),
  typeName: ee.ZodObject,
  ...ae(e)
});
De.lazycreate = (r, e) => new De({
  shape: r,
  unknownKeys: "strip",
  catchall: Ht.create(),
  typeName: ee.ZodObject,
  ...ae(e)
});
class kn extends he {
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
        code: M.invalid_union,
        unionErrors: a
      }), Q;
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
      const o = a.map((l) => new Nt(l));
      return H(t, {
        code: M.invalid_union,
        unionErrors: o
      }), Q;
    }
  }
  get options() {
    return this._def.options;
  }
}
kn.create = (r, e) => new kn({
  options: r,
  typeName: ee.ZodUnion,
  ...ae(e)
});
function gi(r, e) {
  const t = It(r), n = It(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === W.object && n === W.object) {
    const i = me.objectKeys(e), s = me.objectKeys(r).filter((o) => i.indexOf(o) !== -1), a = { ...r, ...e };
    for (const o of s) {
      const l = gi(r[o], e[o]);
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
      const a = r[s], o = e[s], l = gi(a, o);
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
      if (Ms(s) || Ms(a))
        return Q;
      const o = gi(s.value, a.value);
      return o.valid ? ((Is(s) || Is(a)) && t.dirty(), { status: t.value, value: o.data }) : (H(n, {
        code: M.invalid_intersection_types
      }), Q);
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
  typeName: ee.ZodIntersection,
  ...ae(t)
});
class qt extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== W.array)
      return H(n, {
        code: M.invalid_type,
        expected: W.array,
        received: n.parsedType
      }), Q;
    if (n.data.length < this._def.items.length)
      return H(n, {
        code: M.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Q;
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
    typeName: ee.ZodTuple,
    rest: null,
    ...ae(e)
  });
};
class js extends he {
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
      }), Q;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, l], d) => ({
      key: i._parse(new Bt(n, o, n.path, [d, "key"])),
      value: s._parse(new Bt(n, l, n.path, [d, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const d = await l.key, c = await l.value;
          if (d.status === "aborted" || c.status === "aborted")
            return Q;
          (d.status === "dirty" || c.status === "dirty") && t.dirty(), o.set(d.value, c.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const d = l.key, c = l.value;
        if (d.status === "aborted" || c.status === "aborted")
          return Q;
        (d.status === "dirty" || c.status === "dirty") && t.dirty(), o.set(d.value, c.value);
      }
      return { status: t.value, value: o };
    }
  }
}
js.create = (r, e, t) => new js({
  valueType: e,
  keyType: r,
  typeName: ee.ZodMap,
  ...ae(t)
});
class Fr extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== W.set)
      return H(n, {
        code: M.invalid_type,
        expected: W.set,
        received: n.parsedType
      }), Q;
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
      const d = /* @__PURE__ */ new Set();
      for (const c of l) {
        if (c.status === "aborted")
          return Q;
        c.status === "dirty" && t.dirty(), d.add(c.value);
      }
      return { status: t.value, value: d };
    }
    const o = [...n.data.values()].map((l, d) => s._parse(new Bt(n, l, n.path, d)));
    return n.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new Fr({
      ...this._def,
      minSize: { value: e, message: U.toString(t) }
    });
  }
  max(e, t) {
    return new Fr({
      ...this._def,
      maxSize: { value: e, message: U.toString(t) }
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
  typeName: ee.ZodSet,
  ...ae(e)
});
class $s extends he {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
$s.create = (r, e) => new $s({
  getter: r,
  typeName: ee.ZodLazy,
  ...ae(e)
});
class Ws extends he {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return H(t, {
        received: t.data,
        code: M.invalid_literal,
        expected: this._def.value
      }), Q;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ws.create = (r, e) => new Ws({
  value: r,
  typeName: ee.ZodLiteral,
  ...ae(e)
});
function fl(r, e) {
  return new lr({
    values: r,
    typeName: ee.ZodEnum,
    ...ae(e)
  });
}
class lr extends he {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return H(t, {
        expected: me.joinValues(n),
        received: t.parsedType,
        code: M.invalid_type
      }), Q;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return H(t, {
        received: t.data,
        code: M.invalid_enum_value,
        options: n
      }), Q;
    }
    return ct(e.data);
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
class Gs extends he {
  _parse(e) {
    const t = me.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== W.string && n.parsedType !== W.number) {
      const i = me.objectValues(t);
      return H(n, {
        expected: me.joinValues(i),
        received: n.parsedType,
        code: M.invalid_type
      }), Q;
    }
    if (this._cache || (this._cache = new Set(me.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = me.objectValues(t);
      return H(n, {
        received: n.data,
        code: M.invalid_enum_value,
        options: i
      }), Q;
    }
    return ct(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Gs.create = (r, e) => new Gs({
  values: r,
  typeName: ee.ZodNativeEnum,
  ...ae(e)
});
class Sn extends he {
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
      }), Q;
    const n = t.parsedType === W.promise ? t.data : Promise.resolve(t.data);
    return ct(n.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Sn.create = (r, e) => new Sn({
  type: r,
  typeName: ee.ZodPromise,
  ...ae(e)
});
class cr extends he {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ee.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
            return Q;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? Q : l.status === "dirty" || t.value === "dirty" ? wr(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return Q;
        const o = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? Q : o.status === "dirty" || t.value === "dirty" ? wr(o.value) : o;
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
        return o.status === "aborted" ? Q : (o.status === "dirty" && t.dirty(), a(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? Q : (o.status === "dirty" && t.dirty(), a(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!or(a))
          return Q;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => or(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({
          status: t.value,
          value: o
        })) : Q);
    me.assertNever(i);
  }
}
cr.create = (r, e, t) => new cr({
  schema: r,
  typeName: ee.ZodEffects,
  effect: e,
  ...ae(t)
});
cr.createWithPreprocess = (r, e, t) => new cr({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: ee.ZodEffects,
  ...ae(t)
});
class zt extends he {
  _parse(e) {
    return this._getType(e) === W.undefined ? ct(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
zt.create = (r, e) => new zt({
  innerType: r,
  typeName: ee.ZodOptional,
  ...ae(e)
});
class dr extends he {
  _parse(e) {
    return this._getType(e) === W.null ? ct(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
dr.create = (r, e) => new dr({
  innerType: r,
  typeName: ee.ZodNullable,
  ...ae(e)
});
class vi extends he {
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
vi.create = (r, e) => new vi({
  innerType: r,
  typeName: ee.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ae(e)
});
class yi extends he {
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
    return _n(i) ? i.then((s) => ({
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
yi.create = (r, e) => new yi({
  innerType: r,
  typeName: ee.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ae(e)
});
class Us extends he {
  _parse(e) {
    if (this._getType(e) !== W.nan) {
      const n = this._getOrReturnCtx(e);
      return H(n, {
        code: M.invalid_type,
        expected: W.nan,
        received: n.parsedType
      }), Q;
    }
    return { status: "valid", value: e.data };
  }
}
Us.create = (r) => new Us({
  typeName: ee.ZodNaN,
  ...ae(r)
});
class vp extends he {
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
class Ui extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? Q : s.status === "dirty" ? (t.dirty(), wr(s.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? Q : i.status === "dirty" ? (t.dirty(), {
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
    return new Ui({
      in: e,
      out: t,
      typeName: ee.ZodPipeline
    });
  }
}
class bi extends he {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (i) => (or(i) && (i.value = Object.freeze(i.value)), i);
    return _n(t) ? t.then((i) => n(i)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
bi.create = (r, e) => new bi({
  innerType: r,
  typeName: ee.ZodReadonly,
  ...ae(e)
});
var ee;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(ee || (ee = {}));
const yp = pi.create;
Ht.create;
kt.create;
const bp = De.create;
kn.create;
En.create;
qt.create;
lr.create;
Sn.create;
zt.create;
dr.create;
function xp(r, e) {
  return async (t, n, i) => {
    const s = wp(r, t), a = { ...t };
    for (const l of Object.keys(a))
      a[l] === null && (a[l] = void 0);
    return Gm(s, e)(a, n, i);
  };
}
function wp(r, e) {
  const n = ji(r).shape, i = {};
  for (const [a, o] of Object.entries(n)) {
    const l = $i(o);
    if (!l || !l.renderIf) {
      i[a] = o;
      continue;
    }
    Vn(l.renderIf, e) ? i[a] = o : i[a] = yp();
  }
  const s = bp(i);
  if (ve(r, "ZodEffects")) {
    const o = r._def.effect;
    if (o.type === "refinement")
      return s.superRefine(o.refinement);
  }
  return s;
}
function Zs(r) {
  const e = document.getElementById(r);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function _p({
  formName: r,
  errors: e
}) {
  const t = Object.keys(e).filter((h) => h !== "root"), n = t.length > 0, i = t.length, [s, a] = J(0), o = Y([]);
  X(() => {
    const h = t, p = o.current, g = h.find(
      (y) => !p.includes(y)
    );
    if (g) {
      const y = Lr(r, void 0, g);
      Zs(y);
      const w = h.indexOf(g);
      w !== -1 && a(w);
    }
    o.current = h;
  }, [t, r]);
  const l = oe(
    (h) => {
      if (t.length === 0) return;
      const p = (h % t.length + t.length) % t.length;
      a(p);
      const g = t[p], y = Lr(r, void 0, g);
      Zs(y);
    },
    [t, r]
  ), d = oe(() => {
    l(s - 1);
  }, [s, l]), c = oe(() => {
    l(s + 1);
  }, [s, l]), u = oe(() => {
    a(0), o.current = [];
  }, []);
  return {
    fieldErrors: t,
    hasErrors: n,
    errorCount: i,
    currentErrorIndex: s,
    goToPreviousError: d,
    goToNextError: c,
    resetErrorNavigation: u
  };
}
function Cp(r) {
  const e = vt(r);
  if (!ve(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (i = s.value);
  return { min: n, max: i };
}
function ri(r) {
  const e = vt(r);
  if (!ve(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: n, maxDate: i };
}
function kp(r) {
  const e = vt(r);
  if (!ve(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const i of t)
    i.kind === "max" && (n = i.value);
  return { maxLength: n };
}
function Ep(r) {
  const e = vt(r);
  return ve(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "email") : !1;
}
function Sp(r) {
  const e = vt(r);
  return ve(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "url") : !1;
}
function qs(r) {
  return Ep(r) ? "email" : Sp(r) ? "url" : "text";
}
function Ys(r, e, t, n) {
  const i = {
    id: r,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    validation: e
  }, s = !sl(e);
  switch (n) {
    case "text": {
      const a = "inputType" in t && t.inputType ? t.inputType : qs(e);
      return {
        ...i,
        type: "text",
        inputType: a,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: a, max: o } = Cp(e);
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
      const { maxLength: a } = kp(e);
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
      const a = ri(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = ri(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = ri(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
        inputType: qs(e),
        renderIf: t.renderIf
      };
  }
}
function Dn(r) {
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
          (l) => Ys(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(o);
    } else {
      t.add(n);
      const a = Ys(
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
function ml(r) {
  const e = r.shape, t = [], n = Object.entries(e);
  for (let i = 0; i < n.length; i++) {
    const [s, a] = n[i], o = $i(a);
    if (o) {
      const l = fm(a, o);
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
function Dp(r, e) {
  return G(() => {
    const t = ji(r), n = ml(t), i = [], s = {};
    for (const l of n) {
      const d = l.config.section;
      d ? (s[d] || (s[d] = []), s[d].push(l)) : i.push(l);
    }
    i.sort((l, d) => l.position - d.position);
    for (const l of Object.keys(s))
      s[l].sort((d, c) => d.position - c.position);
    const a = [];
    a.push(...Dn(i));
    const o = e ? Object.keys(e).filter((l) => s[l]) : Object.keys(s);
    for (const l of o) {
      const d = e?.[l], c = s[l], u = {
        id: l,
        type: "section",
        section: {
          title: d?.title ?? l,
          description: d?.description,
          renderIf: d?.renderIf,
          action: d?.action,
          fields: Dn(c)
        }
      };
      a.push(u);
    }
    return a;
  }, [r, e]);
}
function Mg(r, e) {
  const t = ji(r), n = ml(t), i = [], s = {};
  for (const l of n) {
    const d = l.config.section;
    d ? (s[d] || (s[d] = []), s[d].push(l)) : i.push(l);
  }
  i.sort((l, d) => l.position - d.position);
  for (const l of Object.keys(s))
    s[l].sort((d, c) => d.position - c.position);
  const a = [];
  a.push(...Dn(i));
  const o = e ? Object.keys(e).filter((l) => s[l]) : Object.keys(s);
  for (const l of o) {
    const d = e?.[l], c = s[l], u = {
      id: l,
      type: "section",
      section: {
        title: d?.title ?? l,
        description: d?.description,
        renderIf: d?.renderIf,
        action: d?.action,
        fields: Dn(c)
      }
    };
    a.push(u);
  }
  return a;
}
function Np(r) {
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
function Rp(r) {
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
const Ap = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Tp(r) {
  const e = ur(), { forms: t } = e, { name: n, schema: i, sections: s, defaultValues: a, onSubmit: o, submitConfig: l, className: d, errorTriggerMode: c = "on-blur", styling: u, formRef: h } = r, p = u?.showSectionsSidepanel ?? !1, g = l?.type === "action-bar", y = l?.label ?? "Submit", w = l?.icon === null ? void 0 : l?.icon ?? Kl, R = l?.type !== "action-bar" && l?.hideSubmitButton, S = !g && !R, D = l?.type === "action-bar" && l?.discardable, O = g ? l?.discardConfig : void 0, x = O?.label ?? t.actionBar.discard, k = O?.icon === null ? void 0 : O?.icon ?? Xl, C = g ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, A = g && !!l?.centerActionBarInFrameContent, j = Dp(i, s), I = G(() => j.filter((re) => re.type === "section").map((re) => re.id), [j]), [N, E] = J(I[0]), T = oe((re) => {
    E(re);
    const ye = Lr(n, re), be = document.getElementById(ye);
    be && be.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [n]), $ = G(() => !s || !p ? [] : I.map((re) => ({
    id: re,
    label: s[re]?.title ?? re,
    onClick: () => T(re)
  })), [s, I, p, T]), ie = G(() => Np(e), [e]), fe = Ap[c], ne = G(() => xp(i, {
    errorMap: ie
  }), [i, ie]), de = om({
    resolver: ne,
    mode: fe,
    defaultValues: a
  }), le = de.formState.errors.root, { isDirty: we, isSubmitting: Ue, errors: _e } = de.formState, { hasErrors: Ee, errorCount: Oe, goToPreviousError: dt, goToNextError: Se, resetErrorNavigation: Ve } = _p({
    formName: n,
    errors: _e
  }), Ne = async (re) => {
    const ye = {
      ...re
    };
    for (const et of Object.keys(ye))
      ye[et] === null && (ye[et] = void 0);
    const be = await o(ye);
    be.success ? (de.reset(re), Ve()) : (be.errors && Object.entries(be.errors).forEach(([et, m]) => {
      de.setError(et, {
        message: m
      });
    }), be.rootMessage && de.setError("root", {
      message: be.rootMessage
    }));
  }, Me = () => {
    de.reset(), Ve();
  }, ce = Y(null);
  X(() => {
    if (h) {
      const re = {
        submit: () => new Promise((ye, be) => {
          de.handleSubmit(async (et) => {
            await Ne(et), ye();
          }, () => {
            be(new Error("Form validation failed"));
          })();
        }),
        reset: () => {
          de.reset(), Ve();
        },
        isDirty: () => de.formState.isDirty,
        _setStateCallback: (ye) => {
          ce.current = ye;
        }
      };
      h.current = re;
    }
    return () => {
      h && (h.current = null);
    };
  }, [h, de, Ve]), X(() => {
    ce.current && ce.current({
      isSubmitting: Ue,
      hasErrors: Ee
    });
  }, [Ue, Ee]);
  const Qe = Rp(j), Le = G(() => ({
    formName: n
  }), [n]), je = V("form", {
    onSubmit: de.handleSubmit(Ne),
    className: se("flex flex-col", hm, d),
    children: [Qe.map((re, ye) => {
      const be = ye !== 0 && re.type !== "section" ? "mt-4" : "";
      switch (re.type) {
        case "switchGroup":
          return f("div", {
            className: be,
            children: f(cl, {
              fields: re.fields
            })
          }, `switch-group-${ye}`);
        case "field":
          return f("div", {
            className: be,
            children: f(Gi, {
              field: re.item.field
            })
          }, re.item.field.id);
        case "row":
          return f("div", {
            className: be,
            children: f(ll, {
              row: re.item
            })
          }, `row-${re.index}`);
        case "section":
          return f("div", {
            className: ye !== 0 ? um : "",
            children: f(Vm, {
              section: re.item
            })
          }, re.item.id);
        default:
          return null;
      }
    }), le && f("p", {
      className: "mt-4 text-base font-medium text-f1-foreground-critical",
      children: le.message
    }), !g && S && f("div", {
      className: "mt-4",
      children: f(ft, {
        type: "submit",
        label: y,
        icon: w,
        loading: Ue,
        disabled: Ee
      })
    })]
  });
  return f(tl.Provider, {
    value: Le,
    children: V(cm, {
      ...de,
      children: [p && $.length > 0 ? V("div", {
        className: "flex w-full gap-4",
        children: [f("div", {
          className: "shrink-0 sticky top-4 h-fit self-start pt-3",
          children: f(ka, {
            items: $,
            activeItem: N,
            scrollable: !1
          })
        }), f("div", {
          className: "w-px bg-f1-border-secondary"
        }), f("div", {
          className: "flex flex-1 justify-center",
          children: je
        })]
      }) : je, g && f(dd, {
        isOpen: we,
        variant: "light",
        centerInFrameContent: A,
        label: Ee ? void 0 : C,
        leftContent: Ee ? V("div", {
          className: "flex items-center gap-3",
          children: [V("div", {
            className: "flex items-center gap-0.5",
            children: [f(Nn, {
              icon: aa,
              size: "md",
              color: "critical"
            }), f("span", {
              className: "font-medium text-f1-foreground-critical",
              children: Oe === 1 ? t.actionBar.issues.one.replace("{{count}}", String(Oe)) : t.actionBar.issues.other.replace("{{count}}", String(Oe))
            })]
          }), Oe > 1 && V("div", {
            className: "flex items-center gap-2",
            children: [f(ft, {
              icon: Jl,
              onClick: dt,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }), f(ft, {
              icon: Ql,
              onClick: Se,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            })]
          })]
        }) : void 0,
        primaryActions: [{
          label: y,
          icon: w,
          onClick: de.handleSubmit(Ne),
          disabled: Ee
        }],
        secondaryActions: D ? [{
          label: x,
          icon: k,
          onClick: Me
        }] : []
      })]
    })
  });
}
function Ig() {
  const [r, e] = J(!1), [t, n] = J(!1), i = Y((c) => {
    e(c.isSubmitting), n(c.hasErrors);
  }), s = Y(null), a = Y({
    get current() {
      return s.current;
    },
    set current(c) {
      s.current = c, c && c._setStateCallback(i.current);
    }
  }), o = oe(async () => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return s.current.submit();
  }, []), l = oe(() => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    s.current.reset();
  }, []), d = oe(() => s.current ? s.current.isDirty() : !1, []);
  return {
    formRef: a.current,
    submit: o,
    reset: l,
    isDirty: d,
    isSubmitting: r,
    hasErrors: t
  };
}
const Lg = Xe("F0Form", Tp), Op = Ge((r, e) => f(Si, {
  ref: e,
  variant: "heading",
  ...r
}));
Op.displayName = "F0Heading";
const Pg = Xe(
  "F0GridStack",
  Ei
), ni = 16, Mp = Vt({
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
function pl(r, e = 0) {
  return r.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? pl(t.children, e + 1) : []]);
}
function Ip(r, e) {
  const t = r.length;
  if (t <= ni) return r;
  const n = t / (ni - 1), i = new Set(Array.from({
    length: ni - 1
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
function Lp({ items: r, activeItem: e, className: t, align: n = "left", variant: i = "dark" }) {
  const s = G(() => Ip(pl(r), e), [r, e]);
  return f("div", {
    className: se("flex flex-col justify-center gap-2 py-3", n === "right" ? "items-end" : "items-start", t),
    children: s.map((a) => f("div", {
      className: Mp({
        depth: a.depth,
        variant: i,
        active: a.id === e
      })
    }, a.id))
  });
}
const Pp = 300, zp = 0, Fp = Vt({
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
function Bp({ title: r, items: e, className: t, activeItem: n, collapsible: i = !1, showChildrenCounter: s = !1, barsAlign: a = "left", size: o = "md", variant: l = "light" }) {
  const [d, c] = J(!1), u = Y(!1), h = (g) => {
    g && !d && (u.current = !0), c(g);
  }, p = oe((g) => {
    !g || !u.current || (u.current = !1, requestAnimationFrame(() => {
      g.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return V(ec, {
    open: d,
    onOpenChange: h,
    openDelay: zp,
    closeDelay: Pp,
    children: [f(tc, {
      asChild: !0,
      children: f("button", {
        className: se(ra(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": r ?? "Menu",
        children: f(Lp, {
          items: e,
          activeItem: n,
          align: a,
          variant: l
        })
      })
    }), f(rc, {
      ref: p,
      side: a === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: se(Fp({
        size: o
      }), !r && "pt-2", "scrollbar-macos"),
      children: f(ka, {
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
const zg = Xe(
  "F0TableOfContentPopover",
  Bp
), Hp = ({ benefits: r }) => f("div", {
  className: "flex flex-col gap-2",
  children: r.map((e, t) => f(Vp, {
    text: e
  }, t))
}), Vp = ({ text: r }) => V("div", {
  className: "flex flex-row items-start gap-2",
  children: [f(Nn, {
    icon: ic,
    size: "md",
    className: "text-f1-icon-positive"
  }), f("span", {
    children: r
  })]
}), gl = Ge(({ title: r, image: e, benefits: t, actions: n, withShadow: i = !0, module: s, moduleName: a, tag: o, promoTag: l }, d) => V("div", {
  ref: d,
  className: se("bg-white flex flex-row rounded-xl border border-f1-border-secondary", i && "shadow-md"),
  children: [f("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: f("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), V("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [V("div", {
      className: "flex flex-col gap-5",
      children: [V("div", {
        className: "flex flex-col gap-2",
        children: [V("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && f(la, {
            module: s
          }), a && f("p", {
            className: "text-base font-medium text-f1-foreground",
            children: a
          })]
        }), (o || l) && V("div", {
          className: "flex justify-start gap-2",
          children: [o && f(nc, {
            icon: o.icon,
            text: o.label
          }), l && f(ud, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), f("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: r
        })]
      }), f(Hp, {
        benefits: t
      })]
    }), n && f("div", {
      className: "flex gap-3",
      children: n
    })]
  })]
}));
gl.displayName = "ProductBlankslate";
function jp({ isOpen: r, onClose: e, title: t, children: n, module: i, portalContainer: s }) {
  const [a, o] = J(r);
  return X(() => {
    o(r);
  }, [r]), f(sc, {
    open: a,
    onOpenChange: (d) => {
      o(d), d || e();
    },
    modal: !0,
    children: V(ac, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [V("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [V(ca, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [i && f(la, {
            module: i,
            size: "lg"
          }), t]
        }), f(wi, {
          variant: "outline",
          icon: da,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), V(ia, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [n, f(sa, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Fg({ isOpen: r, onClose: e, title: t, image: n, benefits: i, errorMessage: s, successMessage: a, loadingState: o, nextSteps: l, closeLabel: d, primaryAction: c, modalTitle: u, modalModule: h, secondaryAction: p, portalContainer: g, tag: y, promoTag: w, showResponseDialog: R = !0 }) {
  const [S, D] = J(r), [O, x] = J(null), [k, C] = J(!1), A = async () => {
    if (c?.onClick) {
      C(!0);
      try {
        await c.onClick(), D(!1), R && x("success");
      } catch {
        R && x("error");
      } finally {
        C(!1);
      }
    }
  }, j = () => {
    D(!1), e?.();
  }, I = k;
  return V(jt, {
    children: [f(jp, {
      isOpen: S,
      onClose: j,
      title: u,
      module: h,
      portalContainer: g,
      children: f("div", {
        className: "pb-4 pl-4",
        children: f(gl, {
          title: t,
          image: n,
          benefits: i,
          withShadow: !1,
          tag: y,
          promoTag: w,
          actions: V("div", {
            className: "flex gap-3",
            children: [c && f(ft, {
              variant: c.variant,
              label: I ? o.label : c.label,
              icon: c.icon || void 0,
              onClick: A,
              loading: c.loading,
              size: c.size
            }), p && f(ft, {
              onClick: p.onClick,
              label: p.label,
              variant: p.variant,
              size: p.size,
              icon: p.icon
            })]
          })
        })
      })
    }), O && R && f(Ea, {
      open: !0,
      onClose: () => {
        j(), x(null);
      },
      success: O === "success",
      errorMessage: s,
      successMessage: a,
      nextSteps: l,
      closeLabel: d,
      portalContainer: g
    })]
  });
}
function $p({ mediaUrl: r, title: e, description: t, onClose: n, dismissible: i, width: s, trackVisibility: a, actions: o, showConfirmation: l = !0 }) {
  const [d, c] = J(!1), u = () => {
    c(!0), n && n();
  };
  X(() => {
    a && a(!d);
  }, [a, d]);
  const h = r?.includes(".mp4");
  return f(jt, {
    children: d ? null : V(oc, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [V(lc, {
        children: [i && f("div", {
          className: "absolute right-2 top-2 z-10",
          children: f(ft, {
            variant: "ghost",
            icon: da,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          })
        }), V("div", {
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
          }), V("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [f(wn, {
              className: "text-lg font-medium",
              children: e
            }), f(wn, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), o && f(cc, {
        className: "p-3",
        children: o.map((p) => p.type === "upsell" ? f(Sa, {
          label: p.label,
          onRequest: p.onClick,
          errorMessage: p.errorMessage,
          successMessage: p.successMessage,
          loadingState: p.loadingState,
          nextSteps: p.nextSteps,
          closeLabel: p.closeLabel,
          showConfirmation: l && p.showConfirmation,
          variant: p.variant
        }, p.label) : f(ft, {
          label: p.label,
          onClick: p.onClick,
          variant: p.variant
        }, p.label))
      })]
    })
  });
}
const Wp = Ge(function({ primaryAction: e, secondaryAction: t, ...n }, i) {
  const s = (l) => l.variant === "promote" ? f(Sa, {
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
  }) : f(ft, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), a = e?.variant !== "promote" ? e : void 0, o = t?.variant !== "promote" ? t : void 0;
  return V(hd, {
    ref: i,
    ...n,
    primaryAction: a,
    secondaryAction: o,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
Wp.displayName = "UpsellingBanner";
function Bg({ isOpen: r, setIsOpen: e, label: t, variant: n = "promote", size: i = "md", showIcon: s = !0, side: a = "right", align: o = "center", icon: l = dc, mediaUrl: d, title: c, description: u, width: h = "300px", trackVisibility: p, actions: g, onClick: y, hideLabel: w = !1 }) {
  const [R, S] = J(!1), [D, O] = J(null), [x, k] = J(null), C = (E) => {
    e(E), y && y();
  }, A = async (E) => {
    if (E.type === "upsell") {
      k(E);
      try {
        await E.onClick(), E.showConfirmation && (S(!0), O("success"));
      } catch {
        S(!0), O("error");
      }
    }
  }, j = () => {
    O(null), S(!1), k(null), e(!1);
  }, I = r && !R, N = g?.map((E) => E.type === "upsell" ? {
    ...E,
    onClick: () => A(E)
  } : E);
  return V(jt, {
    children: [V(ea, {
      open: I,
      onOpenChange: C,
      children: [f(ta, {
        asChild: !0,
        children: f(ft, {
          variant: n,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(r),
          hideLabel: w
        })
      }), f(na, {
        side: a,
        align: o,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: f($p, {
          mediaUrl: d,
          title: c,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: h,
          trackVisibility: p,
          actions: N,
          showConfirmation: !1
        })
      })]
    }), x?.type === "upsell" && x.showConfirmation && D && f(Ea, {
      open: !0,
      onClose: j,
      success: D === "success",
      errorMessage: x.errorMessage,
      successMessage: x.successMessage,
      nextSteps: x.nextSteps,
      closeLabel: x.closeLabel,
      portalContainer: null
    })]
  });
}
const Gp = ({ isOpen: r = !1, onClose: e = () => {
}, type: t, title: n, description: i, primaryAction: s, secondaryAction: a }) => f(ua, {
  isOpen: r,
  onClose: e,
  variant: "notification",
  size: "sm",
  primaryAction: s,
  secondaryAction: a,
  type: t == "critical" ? "critical" : "default",
  modal: !0,
  children: V("div", {
    className: "flex flex-col gap-4 py-2",
    children: [f(_a, {
      type: t,
      size: "lg"
    }), V("div", {
      className: "flex flex-col gap-0.5",
      children: [f(ca, {
        className: "text-xl sm:text-lg",
        children: n
      }), f(fd, {
        className: "text-lg sm:text-base",
        children: i
      })]
    })]
  })
}), Up = async (r) => Promise.resolve(typeof r.value == "function" ? await r.value() : r.value), Zp = ({ items: r }) => {
  const [e, t] = J({}), n = (o) => e[o] > 0, i = (o, l) => {
    t((d) => ({
      ...d,
      [o]: (d[o] || 0) + l
    }));
  }, s = G(() => {
    const o = (l, d) => ({
      ...d,
      value: rn(),
      onClick: async () => {
        d.nonBlocking || i(l.id, 1);
        try {
          const c = await Up(d);
          l.onClickAction(d, c);
        } finally {
          d.nonBlocking || i(l.id, -1);
        }
        return Promise.resolve();
      }
    });
    return r.map((l) => ({
      ...l,
      actions: {
        primary: Ki(l.actions.primary).map((d) => o(l, d)),
        secondary: Ki(l.actions.secondary).map((d) => o(l, d))
      }
    }));
  }, [r]), a = G(() => {
    const o = (l, d) => ({
      ...d,
      disabled: d.disabled || n(l)
    });
    return s.map((l) => ({
      ...l,
      actions: {
        primary: l.actions.primary.map((d) => o(l.id, d)),
        secondary: l.actions.secondary.map((d) => o(l.id, d))
      }
    }));
  }, [s, e]);
  return f(jt, {
    children: a.map((o) => f(fa, {
      children: o.variant === "notification" ? f(Gp, {
        title: o.title,
        description: o.description ?? "",
        type: o.type,
        isOpen: !0,
        onClose: o.onCloseDialog,
        primaryAction: o.actions.primary[0],
        secondaryAction: o.actions.secondary
      }, o.id) : o.variant === "drawer" ? f(No, {
        disableClose: n(o.id),
        isOpen: !0,
        size: o.size,
        onClose: o.onCloseDialog,
        title: o.title,
        description: o.description,
        primaryAction: o.actions.primary,
        secondaryAction: o.actions.secondary,
        modal: o.modal,
        position: o.position,
        module: o.module,
        children: o.content
      }, o.id) : f(ua, {
        disableClose: n(o.id),
        isOpen: !0,
        size: o.size,
        onClose: o.onCloseDialog,
        title: o.title,
        description: o.description,
        primaryAction: o.actions.primary,
        secondaryAction: o.actions.secondary,
        modal: o.modal,
        module: o.module,
        children: o.content
      }, o.id)
    }, o.id))
  });
}, vl = gt(null), qp = ({ children: r }) => {
  const [e, t] = J([]), [n, i] = J(!1);
  X(() => {
    i(!0);
  }, []);
  const s = oe((c) => {
    t((u) => [...u, c]);
  }, []), a = oe((c) => {
    t((u) => u.filter((h) => h.id !== c));
  }, []), o = oe((c) => {
    t((u) => [...u, c]);
  }, []), l = oe((c) => {
    t((u) => u.filter((h) => h.id !== c));
  }, []), d = G(() => ({
    addDialog: s,
    removeDialog: a,
    addDrawer: o,
    removeDrawer: l
  }), [s, a, o, l]);
  return V(vl.Provider, {
    value: d,
    children: [n && typeof document < "u" && _i(f(Zp, {
      items: e
    }), document.body), r]
  });
}, yl = () => {
  const r = ot(vl);
  if (!r)
    throw new Error("useDialogsAlikeLayoutContext must be used within a DialogsAlikeLayoutProvider");
  return r;
}, Hg = () => {
  const r = ur(), { addDialog: e, removeDialog: t } = yl(), n = Y(/* @__PURE__ */ new Map()), i = (c) => s({
    ...c,
    variant: "default"
  }), s = (c) => new Promise((u) => {
    const h = c.id || rn(), p = async (R, S) => {
      u(S ?? void 0), !R?.keepOpen && (n.current.delete(h), t(h));
    }, g = () => {
      p(void 0, void 0);
    }, y = {
      id: h,
      actions: c.actions,
      onCloseDialog: g,
      onClickAction: (R, S) => {
        p(R, S);
      }
    };
    let w;
    if (c.variant === "notification") {
      if (!c.type || c.type === "default")
        throw new Error("Notification dialog must have a type");
      w = {
        ...c,
        ...y,
        variant: "notification",
        type: c.type
      };
    } else
      w = {
        ...c,
        ...y,
        variant: "default",
        type: void 0
      };
    n.current.set(h, g), e(w);
  }), a = (c) => {
    const u = {
      type: c.type ?? "info",
      variant: "notification",
      description: c.msg,
      id: c.id || rn(),
      title: c.title,
      content: f(jt, {}),
      actions: c.actions
    };
    return s(u);
  };
  return {
    openDialog: i,
    openNotificationDialog: a,
    alert: (c) => a({
      ...c,
      actions: {
        primary: {
          value: c.confirm?.value ?? !0,
          label: c.confirm?.label || r.actions.ok
        }
      }
    }),
    confirm: (c) => a({
      ...c,
      actions: {
        primary: {
          value: c.confirm?.value ?? !0,
          label: c.confirm?.label || r.actions.ok
        },
        secondary: {
          value: c.cancel?.value ?? !1,
          label: c.cancel?.label || r.actions.cancel
        }
      }
    }),
    closeDialog: (c) => {
      const u = n.current.get(c);
      u ? u() : t(c);
    }
  };
}, Vg = () => {
  const { addDrawer: r, removeDrawer: e } = yl(), t = Y(/* @__PURE__ */ new Map()), n = (a) => i({
    ...a,
    variant: "drawer"
  }), i = (a) => new Promise((o) => {
    const l = a.id || rn(), d = async (h, p) => {
      o(p ?? void 0), !h?.keepOpen && (t.current.delete(l), e(l));
    }, c = () => {
      d(void 0, void 0);
    }, u = {
      ...a,
      id: l,
      onCloseDialog: c,
      onClickAction: (h, p) => {
        d(h, p);
      }
    };
    t.current.set(l, c), r(u);
  });
  return {
    openDrawer: n,
    closeDrawer: (a) => {
      const o = t.current.get(a);
      o ? o() : e(a);
    }
  };
}, Yp = gt(null), Kp = ({ children: r, fullScreen: e = !0 }) => {
  const t = Y(null), [n, i] = J(t.current);
  return vc(() => {
    i(t.current);
  }, []), f(Yp.Provider, {
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
}, Xp = ({ children: r }) => f(gd, {
  reducedMotion: "user",
  children: r
}), jg = ({ children: r, layout: e, link: t, privacyModeInitiallyEnabled: n, image: i, i18n: s, l10n: a, isDev: o = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: d = !1 }) => f(Xp, {
  children: f(uc, {
    isDev: o,
    showExperimentalWarnings: d,
    children: f(hc, {
      ...a,
      children: f(fc, {
        ...s,
        children: f(mc, {
          ...t,
          children: f(Kp, {
            ...e,
            children: f(pc, {
              children: f(md, {
                initiallyEnabled: n,
                children: f(gc, {
                  ...i,
                  children: f(pd, {
                    handler: l,
                    children: f(qp, {
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
  })
}), Ks = (r) => `datacollection-${r}`, $g = {
  get: async (r) => JSON.parse(
    localStorage.getItem(Ks(r)) ?? "{}"
  ),
  set: async (r, e) => {
    localStorage.setItem(Ks(r), JSON.stringify(e));
  }
};
export {
  Ug as A,
  Oy as AiChatTranslationsProvider,
  cg as AreaChart,
  Zg as Await,
  dg as BarChart,
  qg as Blockquote,
  ug as CategoryBarChart,
  Yg as ChatSpinner,
  gg as ComboChart,
  ig as Dashboard,
  dy as DndProvider,
  Kg as Em,
  Xg as EmojiImage,
  Jg as F0ActionItem,
  Qg as F0AiChat,
  ev as F0AiChatProvider,
  tv as F0AiChatTextArea,
  rv as F0AiCollapsibleMessage,
  nv as F0AiFullscreenChat,
  Rg as F0Alert,
  My as F0AuraVoiceAnimation,
  iv as F0Avatar,
  _a as F0AvatarAlert,
  sv as F0AvatarCompany,
  uy as F0AvatarDate,
  av as F0AvatarEmoji,
  ov as F0AvatarFile,
  Il as F0AvatarIcon,
  hy as F0AvatarList,
  la as F0AvatarModule,
  lv as F0AvatarPerson,
  cv as F0AvatarTeam,
  vg as F0BigNumber,
  yg as F0Box,
  ft as F0Button,
  dv as F0ButtonDropdown,
  uv as F0ButtonToggle,
  fy as F0Card,
  Gl as F0Checkbox,
  Dg as F0ChipList,
  Ca as F0DatePicker,
  hv as F0Dialog,
  fv as F0DialogAlikeContext,
  mv as F0DialogAlikeProvider,
  pv as F0DialogContext,
  gv as F0DialogProvider,
  Ag as F0Drawer,
  vv as F0EventCatcherProvider,
  jf as F0FilterPickerContent,
  Lg as F0Form,
  Pg as F0GridStack,
  Iy as F0HILActionConfirmation,
  Op as F0Heading,
  Nn as F0Icon,
  Pl as F0Link,
  yv as F0MessageSources,
  bv as F0OneIcon,
  xv as F0OneSwitch,
  jg as F0Provider,
  nr as F0Select,
  zg as F0TableOfContentPopover,
  my as F0TagAlert,
  id as F0TagBalance,
  py as F0TagCompany,
  wv as F0TagDot,
  gy as F0TagList,
  vy as F0TagPerson,
  nc as F0TagRaw,
  ud as F0TagStatus,
  yy as F0TagTeam,
  Ia as F0Text,
  _v as F0Thinking,
  Cv as FullscreenChatContext,
  kv as GROUP_ID_SYMBOL,
  Ev as H1,
  Sv as H2,
  Dv as H3,
  lg as HomeLayout,
  Nv as Hr,
  Rv as Image,
  sg as Layout,
  Av as Li,
  hg as LineChart,
  Tv as Ol,
  Ov as OneFilterPicker,
  Mv as P,
  fg as PieChart,
  Iv as Pre,
  md as PrivacyModeProvider,
  gl as ProductBlankslate,
  by as ProductCard,
  Fg as ProductModal,
  $p as ProductWidget,
  pg as ProgressBarChart,
  ag as StandardLayout,
  Lv as Strong,
  Pv as Table,
  xy as Tag,
  wy as TagCounter,
  zv as Td,
  Fv as Th,
  og as TwoColumnLayout,
  Bv as Ul,
  Ea as UpsellRequestResponseDialog,
  Wp as UpsellingBanner,
  Sa as UpsellingButton,
  Bg as UpsellingPopover,
  mg as VerticalBarChart,
  Ly as actionItemStatuses,
  Py as aiTranslations,
  ng as avatarVariants,
  Hv as buildTranslations,
  _g as buttonDropdownSizes,
  wg as buttonDropdownVariants,
  xg as buttonSizes,
  Cg as buttonToggleSizes,
  kg as buttonToggleVariants,
  bg as buttonVariants,
  _y as cardImageFits,
  Cy as cardImageSizes,
  ky as createAtlaskitDriver,
  Vv as createDataSourceDefinition,
  Ld as createPageLayoutBlock,
  Pd as createPageLayoutBlockGroup,
  $g as dataCollectionLocalStorageHandler,
  Ng as datepickerSizes,
  Hy as defaultTranslations,
  jv as downloadTableAsExcel,
  Vn as evaluateRenderIf,
  Xe as experimental,
  Tg as f0FormField,
  $v as f0MarkdownRenderers,
  Lr as generateAnchorId,
  Wv as getAnimationVariants,
  Gv as getDataSourcePaginationType,
  Uv as getEmojiLabel,
  $i as getF0Config,
  Mg as getSchemaDefinition,
  Og as hasF0Config,
  fm as inferFieldType,
  Zv as isInfiniteScrollPagination,
  qv as isPageBasedPagination,
  ve as isZodType,
  Eg as linkVariants,
  Yv as modules,
  zy as oneIconSizes,
  Ey as predefinedPresets,
  Sy as selectSizes,
  Sg as tagDotColors,
  vt as unwrapZodSchema,
  Kv as useAiChat,
  Fy as useAiChatTranslations,
  Xv as useData,
  Jv as useDataSource,
  Qv as useDefaultCopilotActions,
  Hg as useDialog,
  Dy as useDndEvents,
  Ny as useDraggable,
  Vg as useDrawer,
  Ry as useDroppableList,
  ey as useEmojiConfetti,
  ty as useF0Dialog,
  ry as useF0DialogAlikeContext,
  Ig as useF0Form,
  ny as useGroups,
  iy as useMessageSourcesAction,
  sy as useOrchestratorThinkingAction,
  Ay as usePrivacyMode,
  ay as useReducedMotion,
  Dp as useSchemaDefinition,
  oy as useSelectable,
  ly as useXRay
};
