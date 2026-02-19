import { D as J, G as vt, M as ts, N as Ir, Q as zr, R as no, V as ro, W as ns, X as Ke, u as un, Y as Lr, Z as io, _ as so, $ as ao, a0 as oo, a1 as Re, a2 as ze, a3 as lo, a4 as co, a5 as rs, a6 as uo, a7 as Sn, a8 as is, a9 as ss, aa as as, ab as os, ac as ls, ad as cs, ae as ho, af as fo, ag as mo, ah as po, ai as go, J as je, aj as vo, ak as yo, al as bo, am as xo, an as wo, ao as li, ap as _o, aq as Co, ar as ds, as as ko, at as At, au as Eo, av as So, aw as Do, ax as No, ay as Ro, az as To, aA as Ao, aB as Oo, aC as Mo, aD as Io, aE as zo, aF as us, aG as Lo, aH as Po, aI as Bo, aJ as Fo, aK as hs, aL as fs, aM as Ho, aN as jo, aO as $o, aP as Wo, aQ as ms, aR as ci, aS as Go, aT as Vo, I as Zo, aU as Uo, aV as qo, aW as Yo, aX as Ko } from "./F0AiChat-DaBFR7Ly.js";
import { A as ap, bb as op, B as lp, C as cp, E as dp, bq as up, h as hp, F as fp, a as mp, x as pp, i as gp, b as vp, aY as yp, aZ as bp, a_ as xp, a$ as wp, b1 as _p, b2 as Cp, b3 as kp, b4 as Ep, b5 as Sp, b6 as Dp, b7 as Np, b6 as Rp, b7 as Tp, bm as Ap, s as Op, t as Mp, v as Ip, ba as zp, w as Lp, c as Pp, bc as Bp, n as Fp, o as Hp, p as jp, H as $p, k as Wp, L as Gp, O as Vp, b9 as Zp, q as Up, P as qp, S as Yp, T as Kp, l as Xp, m as Jp, U as Qp, bn as eg, bh as tg, r as ng, j as rg, bk as ig, bg as sg, br as ag, bf as og, be as lg, b0 as cg, d as dg, bd as ug, bi as hg, e as fg, bs as mg, b8 as pg, b8 as gg, bj as vg, g as yg, f as bg, bp as xg, bl as wg, bo as _g } from "./F0AiChat-DaBFR7Ly.js";
import { jsx as f, jsxs as M, Fragment as yt } from "react/jsx-runtime";
import Z, { forwardRef as ke, useRef as F, useImperativeHandle as Xo, Children as Dn, createContext as Ge, useContext as Ie, useState as $, useMemo as z, useEffect as j, useCallback as Y, useLayoutEffect as br, createElement as di, isValidElement as ps, Fragment as gs, memo as Jo, useReducer as Qo, cloneElement as el, PureComponent as tl } from "react";
import { createPortal as Pr, unstable_batchedUpdates as xn } from "react-dom";
import { L as vs, C as nl, i as ys, D as rl, S as ui, a as il, f as lr, b as Ut, c as sl, A as al, d as wn, e as bs, E as ol, g as kn, h as ll, j as cl, k as dl, l as Nt, m as xs, u as ul, G as hl, n as fl, o as hi, p as ml, q as ws, r as pl, B as _s, X as Cs, Y as xr, s as gl, t as ks, v as vl, w as yl, x as bl, y as xl, z as wl, F as _l, H as Cl, I as kl, J as fi, K as El, M as Yt, N as cr, O as Sl, P as Dl, Q as Nl, R as Rl, T as Tl, U as Al, V as Ol, W as Ml, Z as Il, _ as zl, $ as Ll, a0 as mi, a1 as Pl, a2 as Es, a3 as Ss, a4 as Bl, a5 as Fl, a6 as Hl, a7 as Br, a8 as pi, a9 as jl, aa as $l, ab as Wl, ac as Gl, ad as Vl, ae as Zl, af as Ul, ag as ql, ah as Yl, ai as Ds, aj as Kl, ak as Xl, al as Ns, am as gi, an as Rs, ao as Jl, ap as Ql, aq as Nn, ar as ec, as as tc, at as nc } from "./DataCollectionStorageProvider-BcrIXM24.js";
import { aK as kg, au as Eg, av as Sg, ay as Dg, aC as Ng, aD as Rg, aF as Tg, aG as Ag, aH as Og, aI as Mg, aB as Ig, aE as zg, aw as Lg, ax as Pg, aJ as Bg, az as Fg, aA as Hg, aL as jg, aM as $g, aN as Wg, aO as Gg } from "./DataCollectionStorageProvider-BcrIXM24.js";
import { A as Zg, F as Ug, c as qg, b as Yg, a as Kg, o as Xg, u as Jg } from "./F0HILActionConfirmation-DO54Y1sO.js";
import { defaultTranslations as ev } from "./i18n-provider-defaults.js";
import './f0.css';const rc = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ic = ke(function({ widgets: e, children: t }, r) {
  const i = F(null);
  Xo(r, () => i.current);
  const s = Dn.toArray(e).filter((a) => !!a).map((a, o) => f("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: a
  }, o));
  return f(vs, {
    layout: "home",
    children: M("div", {
      ref: i,
      className: "@container",
      children: [M("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [f(nl, {
          columns: rc,
          showArrows: !1,
          children: s
        }), f("main", {
          children: t
        })]
      }), M("div", {
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
}), sc = vt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Ts = Z.forwardRef(({ children: n, variant: e, className: t, ...r }, i) => f(vs, {
  layout: "standard",
  children: f("section", {
    ref: i,
    className: J("relative flex-1 overflow-auto", t),
    ...r,
    children: f("div", {
      className: J(sc({
        variant: e
      })),
      children: n
    })
  })
}));
Ts.displayName = "StandardLayout";
const ac = ke(function({ children: e, sideContent: t, mainColumnPosition: r = "left", sticky: i = !1 }, s) {
  return f("div", {
    ref: s,
    className: "h-full",
    children: M("div", {
      className: J("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", i && "md:sticky md:top-0 md:max-h-full"),
      children: [f("main", {
        className: J("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), f(oc, {
        sticky: i,
        className: J("order-1", r === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), oc = ({ children: n, className: e }) => f("aside", {
  className: J("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: n
}), As = Ge(null);
function Os() {
  const n = Ie(As);
  if (!n)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return n;
}
function lc(n) {
  const { content: e, ...t } = n;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function Rt(n) {
  const e = lc(n);
  return n.subGridOpts?.children && (e.subGridOpts = {
    ...n.subGridOpts,
    children: n.subGridOpts.children.map(
      (t) => Rt(t)
    )
  }), e;
}
const cc = ["noMove", "noResize", "locked", "w", "h", "x", "y"], ct = 200;
function dc(n) {
  const e = n.cloneNode(!0);
  return n.querySelectorAll("canvas").forEach((r) => {
    if (r.width > 0 && r.height > 0)
      try {
        const i = r.toDataURL("image/png"), s = e.querySelectorAll("canvas"), a = Array.from(n.querySelectorAll("canvas")).indexOf(r), o = s[a];
        if (o && o.parentElement) {
          const l = document.createElement("img");
          l.src = i, l.style.width = `${r.width}px`, l.style.height = `${r.height}px`, l.style.display = "block", r.className && (l.className = r.className), r.id && (l.id = r.id), o.parentElement.replaceChild(l, o);
        }
      } catch (i) {
        console.warn("Failed to convert canvas to image:", i);
      }
  }), e.innerHTML;
}
function uc({ children: n, options: e, onResizeStop: t, onChange: r, widgets: i }) {
  const [s, a] = $(null), o = F(null), l = F(!1), d = z(() => ({
    ...e,
    children: (i || []).map((_) => Rt(_))
  }), [e, i]), [c, u] = $(() => {
    const _ = /* @__PURE__ */ new Map(), D = i || [], x = (w) => {
      w.id && w.content && _.set(w.id, w.content), w.subGridOpts?.children && w.subGridOpts.children.forEach((y) => {
        x(y);
      });
    };
    return D.forEach((w) => {
      x(w);
    }), _;
  }), h = F(c);
  j(() => {
    h.current = c;
  }, [c]);
  const [m, g] = $(() => {
    const _ = /* @__PURE__ */ new Map(), D = i || [], x = (w) => {
      w.id && w._originalContent !== void 0 && _.set(w.id, w._originalContent), w.subGridOpts?.children && w.subGridOpts.children.forEach((y) => {
        x(y);
      });
    };
    return D.forEach((w) => {
      x(w);
    }), _;
  }), v = F(m);
  j(() => {
    v.current = m;
  }, [m]);
  const [b, k] = $(() => {
    const _ = /* @__PURE__ */ new Map(), D = i || [], x = (w) => {
      if (w.id) {
        const y = Rt(w);
        _.set(w.id, y);
      }
      w.subGridOpts?.children && w.subGridOpts.children.forEach((y) => {
        x(y);
      });
    };
    return D.forEach((w) => {
      x(w);
    }), _;
  });
  ts(() => {
    if (!s) return;
    const _ = s.save();
    if (!Array.isArray(_))
      return;
    const D = _.map((T) => T.id), x = i || [], w = x.map((T) => T.id), y = x.filter((T) => !D.includes(T.id));
    y.length > 0 && (y.forEach((T) => {
      T.content && h.current.set(T.id, T.content), T._originalContent !== void 0 && v.current.set(T.id, T._originalContent);
    }), y.forEach((T) => {
      const C = Rt(T);
      s.addWidget(C);
    }), k((T) => {
      const C = new Map(T);
      return y.forEach((R) => {
        const A = Rt(R);
        C.set(R.id, A);
      }), C;
    }), u((T) => {
      const C = new Map(T);
      return y.forEach((R) => {
        R.content && C.set(R.id, R.content);
      }), C;
    }), g((T) => {
      const C = new Map(T);
      return y.forEach((R) => {
        R._originalContent !== void 0 && C.set(R.id, R._originalContent);
      }), C;
    }));
    const E = _.filter((T) => !w.includes(T.id));
    if (E.length > 0) {
      const T = E.map((C) => C.id).filter(Boolean);
      T.forEach((C) => {
        setTimeout(() => {
          h.current.delete(C), v.current.delete(C);
        }, ct);
      }), E.forEach((C) => {
        const R = s.el.querySelector(`[gs-id="${C.id}"]`);
        R && setTimeout(() => {
          s.removeWidget(R, !0);
        }, ct);
      }), k((C) => {
        const R = new Map(C);
        return T.forEach((A) => {
          setTimeout(() => {
            R.delete(A);
          }, ct);
        }), R;
      }), u((C) => {
        const R = new Map(C);
        return T.forEach((A) => {
          if (R.get(A)) {
            const oe = s.el.querySelector(`[gs-id="${A}"] .grid-stack-item-content`);
            let le = "";
            oe && (le = dc(oe)), R.set(A, f(Ir.div, {
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
                  duration: ct / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: ct / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: ct / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: le
              }
            }));
          }
          setTimeout(() => {
            R.delete(A);
          }, ct);
        }), R;
      }), g((C) => {
        const R = new Map(C);
        return T.forEach((A) => {
          setTimeout(() => {
            R.delete(A);
          }, ct);
        }), R;
      });
    }
    const P = x.filter((T) => D.includes(T.id));
    if (P.length > 0) {
      const T = [];
      P.forEach((C) => {
        const R = _.find((V) => V.id === C.id);
        if (!R)
          return;
        const A = cc.filter((V) => R[V] !== C[V]);
        if (A.length > 0) {
          const V = {}, oe = ["w", "h", "x", "y"], le = ["noMove", "noResize", "locked"], re = A.filter((te) => oe.includes(te)), ne = A.filter((te) => le.includes(te));
          if (re.length > 0 && ne.length > 0 && re.length + ne.length === A.length ? ne.forEach((te) => {
            const ve = C[te];
            ve !== void 0 && (V[te] = ve);
          }) : A.forEach((te) => {
            const ve = C[te];
            ve !== void 0 && (V[te] = ve);
          }), Object.keys(V).length > 0) {
            const te = s.el.querySelector(`[gs-id="${C.id}"]`);
            te && T.push({
              id: C.id,
              element: te,
              updateOptions: V
            });
          }
        }
      }), P.forEach((C) => {
        C.content && h.current.set(C.id, C.content), C._originalContent !== void 0 && v.current.set(C.id, C._originalContent);
      }), T.forEach(({ element: C, updateOptions: R }) => {
        try {
          s.update(C, R);
        } catch (A) {
          console.warn("Error updating widget:", A);
        }
      }), k((C) => {
        const R = new Map(C);
        return P.forEach((A) => {
          const V = Rt(A);
          R.set(A.id, V);
        }), R;
      }), u((C) => {
        const R = new Map(C);
        return P.forEach((A) => {
          A.content && R.set(A.id, A.content);
        }), R;
      }), g((C) => {
        const R = new Map(C);
        return P.forEach((A) => {
          A._originalContent !== void 0 && R.set(A.id, A._originalContent);
        }), R;
      });
    }
    l.current || (l.current = !0);
  }, [i]), j(() => {
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
  const N = Y(() => {
    if (!s)
      return;
    const _ = s.save();
    if (Array.isArray(_)) {
      const D = _.map((x) => {
        const w = x.id;
        if (!w) return null;
        const y = h.current.get(w), E = v.current.get(w), P = x;
        return {
          ...x,
          id: w,
          w: x.w ?? 1,
          h: x.h ?? 1,
          x: x.x ?? 0,
          y: x.y ?? 0,
          meta: P.meta,
          _originalContent: E,
          content: y ?? f("div", {
            children: "No content"
          })
        };
      }).filter((x) => x !== null);
      r?.(D);
    }
  }, [s]);
  return j(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const _ = (D, x) => {
      t?.(D, x);
    };
    try {
      s.on("resizestop", _), s.on("change added removed", N);
    } catch (D) {
      console.error("Error attaching GridStack event listeners:", D);
      return;
    }
    return () => {
      const D = o.current;
      if (D && D.el)
        try {
          D.off("resizestop"), D.off("change added removed");
        } catch (x) {
          console.warn("Error cleaning up GridStack event listeners:", x);
        }
    };
  }, [s, t, N]), j(() => {
    o.current = s;
  }, [s]), j(() => {
    s && s.el && s.el.parentElement && l.current && N();
  }, [s]), f(As.Provider, {
    value: {
      options: d,
      gridStack: s,
      _gridStack: {
        value: s,
        set: a
      },
      _rawWidgetMetaMap: {
        value: b,
        set: k
      },
      _reactContentMap: {
        value: c,
        set: u
      }
    },
    children: n
  });
}
const Ms = Ge(null);
function hc() {
  const n = Ie(Ms);
  if (!n)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return n;
}
const fc = Ge(null);
function mc() {
  const { _reactContentMap: n } = Os(), { getWidgetContainer: e } = hc();
  return f(yt, {
    children: Array.from(n.value.entries()).map(([t, r]) => {
      const i = e(t);
      return i ? f(fc.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: r && Pr(r, i)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function pc(n, e, t, r, i) {
  const s = (...a) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + i + " and has been replaced with `" + r + "`. It will be **removed** in a future release"), e.apply(n, a));
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
      const r = "getElementById" in t ? t : void 0;
      if (r && !isNaN(+e[0])) {
        const s = r.getElementById(e);
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
      const r = "getElementById" in t ? t : void 0;
      if (!e.length)
        return null;
      if (r && e[0] === "#")
        return r.getElementById(e.substring(1));
      if (e[0] === "#" || e[0] === "." || e[0] === "[")
        return t.querySelector(e);
      if (r && !isNaN(+e[0]))
        return r.getElementById(e);
      let i = t.querySelector(e);
      return r && !i && (i = r.getElementById(e)), i || (i = t.querySelector("." + e)), i;
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
    const r = document.createElement("div");
    return e.forEach((i) => {
      i && r.classList.add(i);
    }), t?.appendChild(r), r;
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
    const r = e.x > t.x ? e.x : t.x, i = e.x + e.w < t.x + t.w ? e.x + e.w : t.x + t.w;
    if (i <= r)
      return 0;
    const s = e.y > t.y ? e.y : t.y, a = e.y + e.h < t.y + t.h ? e.y + e.h : t.y + t.h;
    return a <= s ? 0 : (i - r) * (a - s);
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
    return t ? e.find((r) => r.id === t) : void 0;
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
    let t, r = "px";
    if (typeof e == "string")
      if (e === "auto" || e === "")
        t = 0;
      else {
        const i = e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%|cm|mm)?$/);
        if (!i)
          throw new Error(`Invalid height val = ${e}`);
        r = i[2] || "px", t = parseFloat(i[1]);
      }
    else
      t = e;
    return { h: t, unit: r };
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
    return t.forEach((r) => {
      for (const i in r) {
        if (!r.hasOwnProperty(i))
          return;
        e[i] === null || e[i] === void 0 ? e[i] = r[i] : typeof r[i] == "object" && typeof e[i] == "object" && p.defaults(e[i], r[i]);
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
    for (const r in e)
      if (e[r] !== t[r])
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
  static copyPos(e, t, r = !1) {
    return t.x !== void 0 && (e.x = t.x), t.y !== void 0 && (e.y = t.y), t.w !== void 0 && (e.w = t.w), t.h !== void 0 && (e.h = t.h), r && (t.minW && (e.minW = t.minW), t.minH && (e.minH = t.minH), t.maxW && (e.maxW = t.maxW), t.maxH && (e.maxH = t.maxH)), e;
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
      for (let r in e) {
        const i = e[r], s = t[r];
        r[0] === "_" || i === s ? delete e[r] : i && typeof i == "object" && s !== void 0 && (p.removeInternalAndSame(i, s), Object.keys(i).length || delete e[r]);
      }
  }
  /** removes internal fields '_' and default values for saving */
  static removeInternalForSave(e, t = !0) {
    for (let r in e)
      (r[0] === "_" || e[r] === null || e[r] === void 0) && delete e[r];
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
    let r = !1;
    return (...i) => {
      r || (r = !0, setTimeout(() => {
        e(...i), r = !1;
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
  static updateScrollPosition(e, t, r) {
    const i = p.getScrollElement(e);
    if (!i)
      return;
    const s = e.getBoundingClientRect(), a = i.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(a.bottom, o), d = s.top - Math.max(a.top, 0), c = i.scrollTop;
    d < 0 && r < 0 ? e.offsetHeight > a.height ? i.scrollTop += r : i.scrollTop += Math.abs(d) > Math.abs(r) ? r : d : l > 0 && r > 0 && (e.offsetHeight > a.height ? i.scrollTop += r : i.scrollTop += l > r ? r : l), t.top += i.scrollTop - c;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, r) {
    const i = p.getScrollElement(t), s = i.clientHeight, a = i === p.getScrollElement() ? 0 : i.getBoundingClientRect().top, o = e.clientY - a, l = o < r, d = o > s - r;
    l ? i.scrollBy({ behavior: "smooth", top: o - r }) : d && i.scrollBy({ behavior: "smooth", top: r - (s - o) });
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], r = p.clone(e);
    for (const i in r)
      r.hasOwnProperty(i) && typeof r[i] == "object" && i.substring(0, 2) !== "__" && !t.find((s) => s === i) && (r[i] = p.cloneDeep(e[i]));
    return r;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let r;
    typeof t == "string" ? r = p.getElement(t) : r = t, r && r.appendChild(e);
  }
  // public static setPositionRelative(el: HTMLElement): void {
  //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
  //     el.style.position = "relative";
  //   }
  // }
  static addElStyles(e, t) {
    if (t instanceof Object)
      for (const r in t)
        t.hasOwnProperty(r) && (Array.isArray(t[r]) ? t[r].forEach((i) => {
          e.style[r] = i;
        }) : e.style[r] = t[r]);
  }
  static initEvent(e, t) {
    const r = { type: t.type }, i = {
      button: 0,
      which: 0,
      buttons: 1,
      bubbles: !0,
      cancelable: !0,
      target: t.target ? t.target : e.target
    };
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].forEach((s) => r[s] = e[s]), ["pageX", "pageY", "clientX", "clientY", "screenX", "screenY"].forEach((s) => r[s] = e[s]), { ...r, ...i };
  }
  /** copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target */
  static simulateMouseEvent(e, t, r) {
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
    (r || e.target).dispatchEvent(s);
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
    const r = t.getBoundingClientRect();
    return e.removeChild(t), t.remove(), {
      xScale: 1 / r.width,
      yScale: 1 / r.height,
      xOffset: r.left,
      yOffset: r.top
    };
  }
  /** swap the given object 2 field values */
  static swap(e, t, r) {
    if (!e)
      return;
    const i = e[t];
    e[t] = e[r], e[r] = i;
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
class rt {
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
  _fixCollisions(e, t = e, r, i = {}) {
    if (this.sortNodes(-1), r = r || this.collide(e, t), !r)
      return !1;
    if (e._moving && !i.nested && !this.float && this.swap(e, r))
      return !0;
    let s = t;
    !this._loading && this._useEntireRowArea(e, t) && (s = { x: 0, w: this.column, y: t.y, h: t.h }, r = this.collide(e, s, i.skip));
    let a = !1;
    const o = { nested: !0, pack: !1 };
    let l = 0;
    for (; r = r || this.collide(e, s, i.skip); ) {
      if (l++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let d;
      if (r.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(r, { ...r, y: e.y }, e) || !this.collide(r, { ...r, y: t.y - r.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: r.y + r.h, ...o };
        d = this._loading && p.samePos(e, c) ? !0 : this.moveNode(e, c), (r.locked || this._loading) && d ? p.copyPos(t, e) : !r.locked && d && i.pack && (this._packNodes(), t.y = r.y + r.h, p.copyPos(e, t)), a = a || d;
      } else
        d = this.moveNode(r, { ...r, y: t.y + t.h, skip: e, ...o });
      if (!d)
        return a;
      r = void 0;
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
  collide(e, t = e, r) {
    const i = e._id, s = r?._id;
    return this.nodes.find((a) => a._id !== i && a._id !== s && p.isIntercepted(a, t));
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
  collideAll(e, t = e, r) {
    const i = e._id, s = r?._id;
    return this.nodes.filter((a) => a._id !== i && a._id !== s && p.isIntercepted(a, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, r) {
    if (!t.rect || !e._rect)
      return;
    const i = e._rect, s = { ...t.rect };
    s.y > i.y ? (s.h += s.y - i.y, s.y = i.y) : s.h += i.y - s.y, s.x > i.x ? (s.w += s.x - i.x, s.x = i.x) : s.w += i.x - s.x;
    let a, o = 0.5;
    for (let l of r) {
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
  cacheRects(e, t, r, i, s, a) {
    return this.nodes.forEach((o) => o._rect = {
      y: o.y * t + r,
      x: o.x * e + a,
      w: o.w * e - a - i,
      h: o.h * t - r - s
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
    function r() {
      const s = t.x, a = t.y;
      return t.x = e.x, t.y = e.y, e.h != t.h ? (e.x = s, e.y = t.y + t.h) : e.w != t.w ? (e.x = t.x + t.w, e.y = a) : (e.x = s, e.y = a), e._dirty = t._dirty = !0, !0;
    }
    let i;
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (i = p.isTouching(e, t)))
      return r();
    if (i !== !1) {
      if (e.w === t.w && e.x === t.x && (i || (i = p.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return r();
      }
      if (i !== !1) {
        if (e.h === t.h && e.y === t.y && (i || (i = p.isTouching(e, t)))) {
          if (t.x < e.x) {
            const s = e;
            e = t, t = s;
          }
          return r();
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
  isAreaEmpty(e, t, r, i) {
    const s = { x: e || 0, y: t || 0, w: r || 1, h: i || 1 };
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
    const r = this.batchMode;
    r || this.batchUpdate();
    const i = this._inColumnResize;
    i || (this._inColumnResize = !0);
    const s = this.nodes;
    return this.nodes = [], s.forEach((a, o, l) => {
      let d;
      a.locked || (a.autoPosition = !0, e === "list" && o && (d = l[o - 1])), this.addNode(a, !1, d);
    }), i || delete this._inColumnResize, r || this.batchUpdate(!1), this;
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
          const r = t === 0 ? 0 : e.y - 1;
          if (!(t === 0 || !this.collide(e, { x: e.x, y: r, w: e.w, h: e.h })))
            break;
          e._dirty = e.y !== r, e.y = r;
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
    e._id = e._id ?? rt._idSeq++;
    const r = e.id;
    if (r) {
      let s = 1;
      for (; this.nodes.find((a) => a.id === e.id && a !== e); )
        e.id = r + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const i = { x: 0, y: 0, w: 1, h: 1 };
    return p.defaults(e, i), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, p.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = i.x, e.autoPosition = !0), isNaN(e.y) && (e.y = i.y, e.autoPosition = !0), isNaN(e.w) && (e.w = i.w), isNaN(e.h) && (e.h = i.h), this.nodeBoundFix(e, t), e;
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
    const r = e._orig || p.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), p.samePos(e, r) || (e._dirty = !0), this;
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
  findEmptyPosition(e, t = this.nodes, r = this.column, i) {
    const s = i ? i.y * r + (i.x + i.w) : 0;
    let a = !1;
    for (let o = s; !a; ++o) {
      const l = o % r, d = Math.floor(o / r);
      if (l + e.w > r)
        continue;
      const c = { x: l, y: d, w: e.w, h: e.h };
      t.find((u) => p.isIntercepted(c, u)) || ((e.x !== l || e.y !== d) && (e._dirty = !0), e.x = l, e.y = d, delete e.autoPosition, a = !0);
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
  addNode(e, t = !1, r) {
    const i = this.nodes.find((a) => a._id === e._id);
    if (i)
      return i;
    this._inColumnResize ? this.nodeBoundFix(e) : this.prepareNode(e), delete e._temporaryRemoved, delete e._removeDOM;
    let s;
    return e.autoPosition && this.findEmptyPosition(e, this.nodes, this.column, r) && (delete e.autoPosition, s = !0), this.nodes.push(e), t && this.addedNodes.push(e), s || this._fixCollisions(e), this.batchMode || this._packNodes()._notify(), e;
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
  removeNode(e, t = !0, r = !1) {
    return this.nodes.find((i) => i._id === e._id) ? (r && this.removedNodes.push(e), t && (e._removeDOM = !0), this.nodes = this.nodes.filter((i) => i._id !== e._id), e._isAboutToRemove || this._packNodes(), this._notify([e]), this) : this;
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
    const r = this.nodes;
    return this.removedNodes = t ? r : [], this.nodes = [], this._notify(r);
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
    let r;
    const i = new rt({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((a) => a._id === e._id ? (r = { ...a }, r) : { ...a })
    });
    if (!r)
      return !1;
    const s = i.moveNode(r, t) && i.getRow() <= Math.max(this.getRow(), this.maxRow);
    if (!s && !t.resizing && t.collide) {
      const a = t.collide.el.gridstackNode;
      if (this.swap(e, a))
        return this._notify(), !0;
    }
    return s ? (i.nodes.filter((a) => a._dirty).forEach((a) => {
      const o = this.nodes.find((l) => l._id === a._id);
      o && (p.copyPos(o, a), o._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new rt({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((i) => ({ ...i }))
    }), r = { ...e };
    return this.cleanupNode(r), delete r.el, delete r._id, delete r.content, delete r.grid, t.addNode(r), t.getRow() <= this.maxRow ? (e._willFitPos = p.copyPos({}, r), !0) : !1;
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
    let r;
    t.pack === void 0 && !this.batchMode && (r = t.pack = !0), typeof t.x != "number" && (t.x = e.x), typeof t.y != "number" && (t.y = e.y), typeof t.w != "number" && (t.w = e.w), typeof t.h != "number" && (t.h = e.h);
    const i = e.w !== t.w || e.h !== t.h, s = p.copyPos({}, e, !0);
    if (p.copyPos(s, t), this.nodeBoundFix(s, i), p.copyPos(t, s), !t.forceCollide && p.samePos(e, t))
      return !1;
    const a = p.copyPos({}, e), o = this.collideAll(e, s, t.skip);
    let l = !0;
    if (o.length) {
      const d = e._moving && !t.nested;
      let c = d ? this.directionCollideCoverage(e, t, o) : o[0];
      if (d && c && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = p.areaIntercept(t.rect, c._rect), h = p.area(t.rect), m = p.area(c._rect);
        u / (h < m ? h : m) > 0.8 && (c.grid.makeSubGrid(c.el, void 0, e), c = void 0);
      }
      c ? l = !this._fixCollisions(e, s, c, t) : (l = !1, r && delete t.pack);
    }
    return l && !p.samePos(e, s) && (e._dirty = !0, p.copyPos(e, s)), t.pack && this._packNodes()._notify(), !p.samePos(e, a);
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
  save(e = !0, t, r) {
    const i = this._layouts?.length || 0;
    let s;
    i && (r ? r !== this.column && (s = this._layouts[r]) : this.column !== i - 1 && (s = this._layouts[i - 1]));
    const a = [];
    return this.sortNodes(), this.nodes.forEach((o) => {
      const l = s?.find((c) => c._id === o._id), d = { ...o, ...l || {} };
      p.removeInternalForSave(d, !e), t && t(o, d), a.push(d);
    }), a;
  }
  /** @internal called whenever a node is added or moved - updates the cached layouts */
  layoutsNodesChange(e) {
    return !this._layouts || this._inColumnResize ? this : (this._layouts.forEach((t, r) => {
      if (!t || r === this.column)
        return this;
      if (r < this.column)
        this._layouts[r] = void 0;
      else {
        const i = r / this.column;
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
  columnChanged(e, t, r = "moveScale") {
    if (!this.nodes.length || !t || e === t)
      return this;
    const i = r === "compact" || r === "list";
    i && this.sortNodes(1), t < e && this.cacheLayout(this.nodes, e), this.batchUpdate();
    let s = [], a = i ? this.nodes : p.sort(this.nodes, -1);
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
      this.compact(r, !1);
    else {
      if (a.length)
        if (typeof r == "function")
          r(t, e, s, a);
        else {
          const o = i || r === "none" ? 1 : t / e, l = r === "move" || r === "moveScale", d = r === "scale" || r === "moveScale";
          a.forEach((c) => {
            c.x = t === 1 ? 0 : l ? Math.round(c.x * o) : Math.min(c.x, t - 1), c.w = t === 1 || e === 1 ? 1 : d ? Math.round(c.w * o) || 1 : Math.min(c.w, t), s.push(c);
          }), a = [];
        }
      s = p.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((o) => {
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
  cacheLayout(e, t, r = !1) {
    const i = [];
    return e.forEach((s, a) => {
      if (s._id === void 0) {
        const o = s.id ? this.nodes.find((l) => l.id === s.id) : void 0;
        s._id = o?._id ?? rt._idSeq++;
      }
      i[a] = { x: s.x, y: s.y, w: s.w, _id: s._id };
    }), this._layouts = r ? [] : this._layouts || [], this._layouts[t] = i, this;
  }
  /**
   * call to cache the given node layout internally to the given location so we can restore back when column changes size
   * @param node single node to cache
   * @param column corresponding column index to save it under
   */
  cacheOneLayout(e, t) {
    e._id = e._id ?? rt._idSeq++;
    const r = { x: e.x, y: e.y, w: e.w, _id: e._id };
    (e.autoPosition || e.x === void 0) && (delete r.x, delete r.y, e.autoPosition && (r.autoPosition = !0)), this._layouts = this._layouts || [], this._layouts[t] = this._layouts[t] || [];
    const i = this.findCacheLayout(e, t);
    return i === -1 ? this._layouts[t].push(r) : this._layouts[t][i] = r, this;
  }
  findCacheLayout(e, t) {
    return this._layouts?.[t]?.findIndex((r) => r._id === e._id) ?? -1;
  }
  removeNodeFromLayoutCache(e) {
    if (this._layouts)
      for (let t = 0; t < this._layouts.length; t++) {
        const r = this.findCacheLayout(e, t);
        r !== -1 && this._layouts[t].splice(r, 1);
      }
  }
  /** called to remove all internal values but the _id */
  cleanupNode(e) {
    for (const t in e)
      t[0] === "_" && t !== "_id" && delete e[t];
    return this;
  }
}
rt._idSeq = 0;
const Ne = {
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
class H {
}
const He = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class Xe {
}
function Rn(n, e) {
  n.touches.length > 1 || (n.cancelable && n.preventDefault(), p.simulateMouseEvent(n.changedTouches[0], e));
}
function Is(n, e) {
  n.cancelable && n.preventDefault(), p.simulateMouseEvent(n, e);
}
function Tn(n) {
  Xe.touchHandled || (Xe.touchHandled = !0, Rn(n, "mousedown"));
}
function An(n) {
  Xe.touchHandled && Rn(n, "mousemove");
}
function On(n) {
  if (!Xe.touchHandled)
    return;
  Xe.pointerLeaveTimeout && (window.clearTimeout(Xe.pointerLeaveTimeout), delete Xe.pointerLeaveTimeout);
  const e = !!H.dragElement;
  Rn(n, "mouseup"), e || Rn(n, "click"), Xe.touchHandled = !1;
}
function Mn(n) {
  n.pointerType !== "mouse" && n.target.releasePointerCapture(n.pointerId);
}
function vi(n) {
  H.dragElement && n.pointerType !== "mouse" && Is(n, "mouseenter");
}
function yi(n) {
  H.dragElement && n.pointerType !== "mouse" && (Xe.pointerLeaveTimeout = window.setTimeout(() => {
    delete Xe.pointerLeaveTimeout, Is(n, "mouseleave");
  }, 10));
}
class qn {
  constructor(e, t, r) {
    this.host = e, this.dir = t, this.option = r, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${qn.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), He && (this.el.addEventListener("touchstart", Tn), this.el.addEventListener("pointerdown", Mn)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), He && (this.el.removeEventListener("touchstart", Tn), this.el.removeEventListener("pointerdown", Mn)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), He && (this.el.addEventListener("touchmove", An), this.el.addEventListener("touchend", On)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), He && (this.el.removeEventListener("touchmove", An), this.el.removeEventListener("touchend", On)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
qn.prefix = "ui-resizable-";
class Fr {
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
class tn extends Fr {
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
    const t = e.handles && e.handles !== this.option.handles, r = e.autoHide && e.autoHide !== this.option.autoHide;
    return Object.keys(e).forEach((i) => this.option[i] = e[i]), t && (this._removeHandlers(), this._setupHandlers()), r && this._setupAutoHide(this.option.autoHide), this;
  }
  /** @internal turns auto hide on/off */
  _setupAutoHide(e) {
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), H.overResizeElement === this && delete H.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    H.overResizeElement || H.dragElement || (H.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    H.overResizeElement === this && (delete H.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new qn(this.el, e, {
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
    const r = p.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(r, this._ui()), this.triggerEvent("resize", r), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = p.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = tn._originStyleProp.map((r) => this.el.style[r]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = p.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return tn._originStyleProp.forEach((e, t) => {
      this.el.style[e] = this.elOriginStyleVal[t] || null;
    }), this.el.parentElement.style.position = this.parentOriginStylePosition || null, this;
  }
  /** @internal */
  _getChange(e, t) {
    const r = this.startEvent, i = {
      width: this.originalRect.width,
      height: this.originalRect.height + this.scrolled,
      left: this.originalRect.left,
      top: this.originalRect.top - this.scrolled
    }, s = e.clientX - r.clientX, a = this.sizeToContent ? 0 : e.clientY - r.clientY;
    let o, l;
    t.indexOf("e") > -1 ? i.width += s : t.indexOf("w") > -1 && (i.width -= s, i.left += s, o = !0), t.indexOf("s") > -1 ? i.height += a : t.indexOf("n") > -1 && (i.height -= a, i.top += a, l = !0);
    const d = this._constrainSize(i.width, i.height, o, l);
    return Math.round(i.width) !== Math.round(d.width) && (t.indexOf("w") > -1 && (i.left += i.width - d.width), i.width = d.width), Math.round(i.height) !== Math.round(d.height) && (t.indexOf("n") > -1 && (i.top += i.height - d.height), i.height = d.height), i;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, r, i) {
    const s = this.option, a = (r ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, o = s.minWidth / this.rectScale.x || e, l = (i ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, d = s.minHeight / this.rectScale.y || t, c = Math.min(a, Math.max(o, e)), u = Math.min(l, Math.max(d, t));
    return { width: c, height: u };
  }
  /** @internal */
  _applyChange() {
    let e = { left: 0, top: 0, width: 0, height: 0 };
    if (this.el.style.position === "absolute") {
      const t = this.el.parentElement, { left: r, top: i } = t.getBoundingClientRect();
      e = { left: r, top: i, width: 0, height: 0 };
    }
    return this.temporalRect ? (Object.keys(this.temporalRect).forEach((t) => {
      const r = this.temporalRect[t], i = t === "width" || t === "left" ? this.rectScale.x : t === "height" || t === "top" ? this.rectScale.y : 1;
      this.el.style[t] = (r - e[t]) * i + "px";
    }), this) : this;
  }
  /** @internal */
  _removeHandlers() {
    return this.handlers.forEach((e) => e.destroy()), delete this.handlers, this;
  }
}
tn._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const gc = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class nn extends Fr {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.dragTransform = {
      xScale: 1,
      yScale: 1,
      xOffset: 0,
      yOffset: 0
    };
    const r = t?.handle?.substring(1), i = e.gridstackNode;
    this.dragEls = !r || e.classList.contains(r) ? [e] : i?.subGrid ? [e.querySelector(t.handle) || e] : Array.from(e.querySelectorAll(t.handle)), this.dragEls.length === 0 && (this.dragEls = [e]), this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this.enable();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.dragEls.forEach((e) => {
      e.addEventListener("mousedown", this._mouseDown), He && (e.addEventListener("touchstart", Tn), e.addEventListener("pointerdown", Mn));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), He && (t.removeEventListener("touchstart", Tn), t.removeEventListener("pointerdown", Mn));
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
    if (!H.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(gc) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete H.dragElement, delete H.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), He && (e.currentTarget.addEventListener("touchmove", An), e.currentTarget.addEventListener("touchend", On)), e.preventDefault(), document.activeElement && document.activeElement.blur(), H.mouseHandled = !0), !0;
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
      if (this._dragFollow(e), H.pauseDrag) {
        const r = Number.isInteger(H.pauseDrag) ? H.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), r);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, H.dragElement = this;
      const r = this.el.gridstackNode?.grid;
      r ? H.dropElement = r.el.ddElement.ddDroppable : delete H.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = p.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = p.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), He && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", An, !0), e.currentTarget.removeEventListener("touchend", On, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), H.dropElement?.el === this.el.parentElement && delete H.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = p.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), H.dropElement && H.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete H.dragElement, delete H.dropElement, delete H.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, r = t?.grid || H.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), r?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && r && (e.key === "r" || e.key === "R")) {
      if (!p.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, r.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", p.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = p.cloneNode(this.el)), e.parentElement || p.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = nn.originStyleProp.map((t) => this.el.style[t]), e;
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
      const t = this.helper, r = this.dragElementOriginStyle.transition || null;
      t.style.transition = this.dragElementOriginStyle.transition = "none", nn.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = r, 50);
    }
    return delete this.dragElementOriginStyle, this;
  }
  /** @internal updates the top/left position to follow the mouse */
  _dragFollow(e) {
    const t = { left: 0, top: 0 }, r = this.helper.style, i = this.dragOffset;
    r.left = (e.clientX + i.offsetLeft - t.left) * this.dragTransform.xScale + "px", r.top = (e.clientY + i.offsetTop - t.top) * this.dragTransform.yScale + "px";
  }
  /** @internal */
  _setupHelperContainmentStyle() {
    return this.helperContainment = this.helper.parentElement, this.helper.style.position !== "fixed" && (this.parentOriginStylePosition = this.helperContainment.style.position, getComputedStyle(this.helperContainment).position.match(/static/) && (this.helperContainment.style.position = "relative")), this;
  }
  /** @internal */
  _getDragOffset(e, t, r) {
    let i = 0, s = 0;
    r && (i = this.dragTransform.xOffset, s = this.dragTransform.yOffset);
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
    const t = this.el.parentElement.getBoundingClientRect(), r = this.helper.getBoundingClientRect();
    return {
      position: {
        top: (r.top - t.top) * this.dragTransform.yScale,
        left: (r.left - t.left) * this.dragTransform.xScale
      }
      /* not used by GridStack for now...
      helper: [this.helper], //The object arr representing the helper that's being dragged.
      offset: { top: offset.top, left: offset.left } // Current offset position of the helper as { top, left } object.
      */
    };
  }
}
nn.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class vc extends Fr {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), He && (this.el.addEventListener("pointerenter", vi), this.el.addEventListener("pointerleave", yi)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), He && (this.el.removeEventListener("pointerenter", vi), this.el.removeEventListener("pointerleave", yi)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!H.dragElement || !this._canDrop(H.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), H.dropElement && H.dropElement !== this && H.dropElement._mouseLeave(e, !0), H.dropElement = this;
    const t = p.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(H.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!H.dragElement || H.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const r = p.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(r, this._ui(H.dragElement)), this.triggerEvent("dropout", r), H.dropElement === this && (delete H.dropElement, !t)) {
      let i, s = this.el.parentElement;
      for (; !i && s; )
        i = s.ddElement?.ddDroppable, s = s.parentElement;
      i && i._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = p.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(H.dragElement)), this.triggerEvent("drop", t);
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
class Hr {
  static init(e) {
    return e.ddElement || (e.ddElement = new Hr(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new nn(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new tn(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new vc(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class yc {
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
  resizable(e, t, r, i) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddResizable && s.ddResizable[t]();
      else if (t === "destroy")
        s.ddResizable && s.cleanResizable();
      else if (t === "option")
        s.setupResizable({ [r]: i });
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
  draggable(e, t, r, i) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddDraggable && s.ddDraggable[t]();
      else if (t === "destroy")
        s.ddDraggable && s.cleanDraggable();
      else if (t === "option")
        s.setupDraggable({ [r]: i });
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
    return this._getDDElements(e).forEach((r) => r.setupDraggable(t)), this;
  }
  droppable(e, t, r, i) {
    return typeof t.accept == "function" && !t._accept && (t._accept = t.accept, t.accept = (s) => t._accept(s)), this._getDDElements(e, t).forEach((s) => {
      t === "disable" || t === "enable" ? s.ddDroppable && s.ddDroppable[t]() : t === "destroy" ? s.ddDroppable && s.cleanDroppable() : t === "option" ? s.setupDroppable({ [r]: i }) : s.setupDroppable(t);
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
  on(e, t, r) {
    return this._getDDElements(e).forEach((i) => i.on(t, (s) => {
      r(s, H.dragElement ? H.dragElement.el : s.target, H.dragElement ? H.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((r) => r.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const r = e.gridstack || t !== "destroy" && t !== "disable", i = p.getElements(e);
    return i.length ? i.map((a) => a.ddElement || (r ? Hr.init(a) : null)).filter((a) => a) : [];
  }
}
const be = new yc();
class B {
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
    const r = B.getGridElement(t);
    return r ? (r.gridstack || (r.gridstack = new B(r, p.cloneDeep(e))), r.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    const r = [];
    return typeof document > "u" || (B.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new B(i, p.cloneDeep(e))), r.push(i.gridstack);
    }), r.length === 0 && console.error('GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
Note: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.`)), r;
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
    let r = e;
    if (r.gridstack) {
      const a = r.gridstack;
      return t && (a.opts = { ...a.opts, ...t }), t.children !== void 0 && a.load(t.children), a;
    }
    return (!e.classList.contains("grid-stack") || B.addRemoveCB) && (B.addRemoveCB ? r = B.addRemoveCB(e, t, !0, !0) : r = p.createDiv(["grid-stack", t.class], e)), B.init(t, r);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    B.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = p.createDiv([this.opts.placeholderClass, Ne.itemClass, this.opts.itemClass]);
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
    const r = p.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const i = t.columnOpts;
    if (i) {
      const d = i.breakpoints;
      !i.columnWidth && !d?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, d?.length > 1 && d.sort((c, u) => (u.w || 0) - (c.w || 0)));
    }
    const s = {
      ...p.cloneDeep(Ne),
      column: p.toNumber(e.getAttribute("gs-column")) || Ne.column,
      minRow: r || p.toNumber(e.getAttribute("gs-min-row")) || Ne.minRow,
      maxRow: r || p.toNumber(e.getAttribute("gs-max-row")) || Ne.maxRow,
      staticGrid: p.toBool(e.getAttribute("gs-static")) || Ne.staticGrid,
      sizeToContent: p.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Ne.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Ne.removableOptions.accept,
        decline: Ne.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = p.toBool(e.getAttribute("gs-animate"))), t = p.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + Ne.itemClass)?.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Ne.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const d = t.cellHeight;
      delete t.cellHeight, this.cellHeight(d);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = He), this._setStaticClass();
    const l = t.engineClass || B.engineClass || rt;
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
    this.setAnimation(), t.subGridDynamic && !H.pauseDrag && (H.pauseDrag = !0), t.draggable?.pause !== void 0 && (H.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    let t, r = e;
    if (r.grid = this, r.el ? t = r.el : B.addRemoveCB ? t = B.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(r), !t)
      return;
    if (r = t.gridstackNode, r && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === r._id))
      return t;
    const i = this._readAttr(t);
    return p.defaults(e, i), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = p.createDiv(["grid-stack-item", this.opts.itemClass]), r = p.createDiv(["grid-stack-item-content"], t);
    return p.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([i]) => {
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, B.renderCB(r, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : B.renderCB(r, e), t;
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
  makeSubGrid(e, t, r, i = !0) {
    let s = e.gridstackNode;
    if (s || (s = this.makeWidget(e).gridstackNode), s.subGrid?.el)
      return s.subGrid;
    let a, o = this;
    for (; o && !a; )
      a = o.opts?.subGridOpts, o = o.parentGridNode?.grid;
    t = p.cloneDeep({
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
    t.column === "auto" && (l = !0, t.column = Math.max(s.w || 1, r?.w || 1), delete t.columnOpts);
    let d = s.el.querySelector(".grid-stack-item-content"), c, u;
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, p.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), B.addRemoveCB ? c = B.addRemoveCB(this.el, u, !0, !1) : (c = p.createDiv(["grid-stack-item"]), c.appendChild(d), d = p.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), r) {
      const m = l ? t.column : s.w, g = s.h + r.h, v = s.el.style;
      v.transition = "none", this.update(s.el, { w: m, h: g }), setTimeout(() => v.transition = null);
    }
    const h = s.subGrid = B.addGrid(d, t);
    return r?._moving && (h._isTemp = !0), l && (h._autoColumn = !0), i && h.makeWidget(c, u), r && (r._moving ? window.setTimeout(() => p.simulateMouseEvent(r._event, "mouseenter", h.el), 0) : h.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((r) => {
      r.x += this.parentGridNode.x, r.y += this.parentGridNode.y, t.makeWidget(r.el, r);
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
  save(e = !0, t = !1, r = B.saveCB, i) {
    const s = this.engine.save(e, r, i);
    if (s.forEach((a) => {
      if (e && a.el && !a.subGrid && !r) {
        const o = a.el.querySelector(".grid-stack-item-content");
        a.content = o?.innerHTML, a.content || delete a.content;
      } else if (!e && !r && delete a.content, a.subGrid?.el) {
        const o = a.w || a.subGrid.getColumn(), l = a.subGrid.save(e, t, r, o);
        a.subGridOpts = t ? l : { children: l }, delete a.subGrid;
      }
      delete a.el;
    }), t) {
      const a = p.cloneDeep(this.opts);
      a.marginBottom === a.marginTop && a.marginRight === a.marginLeft && a.marginTop === a.marginRight && (a.margin = a.marginTop, delete a.marginTop, delete a.marginRight, delete a.marginBottom, delete a.marginLeft), a.rtl === (this.el.style.direction === "rtl") && (a.rtl = "auto"), this._isAutoCellHeight && (a.cellHeight = "auto"), this._autoColumn && (a.column = "auto");
      const o = a._alwaysShowResizeHandle;
      return delete a._alwaysShowResizeHandle, o !== void 0 ? a.alwaysShowResizeHandle = o : delete a.alwaysShowResizeHandle, p.removeInternalAndSame(a, Ne), a.children = s, a;
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
  load(e, t = B.addRemoveCB || !0) {
    e = p.cloneDeep(e);
    const r = this.getColumn();
    e.forEach((c) => {
      c.w = c.w || c.minW || 1, c.h = c.h || c.minH || 1;
    }), e = p.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((c) => {
      i = Math.max(i, (c.x || 0) + c.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > r && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, r, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = B.addRemoveCB;
    typeof t == "function" && (B.addRemoveCB = t);
    const a = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, l = o && this.opts.animate;
    l && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      p.find(e, u.id) || (B.addRemoveCB && B.addRemoveCB(this.el, u, !1, !1), a.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const d = [];
    return this.engine.nodes = this.engine.nodes.filter((c) => p.find(e, c.id) ? (d.push(c), !1) : !0), e.forEach((c) => {
      const u = p.find(d, c.id);
      if (u) {
        if (p.shouldSizeToContent(u) && (c.h = u.h), this.engine.nodeBoundFix(c), (c.autoPosition || c.x === void 0 || c.y === void 0) && (c.w = c.w || u.w, c.h = c.h || u.h, this.engine.findEmptyPosition(c)), this.engine.nodes.push(u), p.samePos(u, c) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...c, forceCollide: !0 }), p.copyPos(c, u)), this.update(u.el, c), c.subGridOpts?.children) {
          const h = u.el.querySelector(".grid-stack");
          h && h.gridstack && h.gridstack.load(c.subGridOpts.children);
        }
      } else t && this.addWidget(c);
    }), delete this.engine._loading, this.engine.removedNodes = a, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? B.addRemoveCB = s : delete B.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const i = p.toNumber(t.getAttribute("gs-h")) || 1;
      return Math.round(t.offsetHeight / i);
    }
    const r = parseInt(this.el.getAttribute("gs-current-row"));
    return r ? Math.round(this.el.getBoundingClientRect().height / r) : this.opts.cellHeight;
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
      const r = -this.opts.marginRight - this.opts.marginLeft + this.opts.marginTop + this.opts.marginBottom;
      e = this.cellWidth() + r;
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
    let r = t;
    const i = this._widthOrContainer(!0);
    if (e.columnWidth)
      r = Math.min(Math.round(i / e.columnWidth) || 1, e.columnMax);
    else {
      r = e.columnMax;
      let s = 0;
      for (; s < e.breakpoints.length && i <= e.breakpoints[s].w; )
        r = e.breakpoints[s++].c || t;
    }
    if (r !== t) {
      const s = e.breakpoints?.find((a) => a.c === r);
      return this.column(r, s?.layout || e.layout), !0;
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
    const r = this.getColumn();
    return this.opts.column = e, this.engine ? (this.engine.column = e, this.el.classList.remove("gs-" + r), this._updateColumnVar(), this.engine.columnChanged(r, e, t), this._isAutoCellHeight && this.cellHeight(), this.resizeToContentCheck(!0), this._ignoreLayoutsNodeChange = !0, this._triggerChangeEvent(), delete this._ignoreLayoutsNodeChange, this) : (this.responseLayout = t, this);
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
    const r = this.el.getBoundingClientRect();
    let i;
    t ? i = { top: r.top + document.documentElement.scrollTop, left: r.left } : i = { top: this.el.offsetTop, left: this.el.offsetLeft };
    const s = e.left - i.left, a = e.top - i.top, o = r.width / this.getColumn(), l = r.height / parseInt(this.el.getAttribute("gs-current-row"));
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
  isAreaEmpty(e, t, r, i) {
    return this.engine.isAreaEmpty(e, t, r, i);
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
    const r = B.getElement(e);
    if (!r || r.gridstackNode)
      return r;
    r.parentElement || this.el.appendChild(r), this._prepareElement(r, !0, t);
    const i = r.gridstackNode;
    this._updateContainerHeight(), i.subGridOpts && this.makeSubGrid(r, i.subGridOpts, void 0, !1);
    let s;
    return this.opts.column === 1 && !this._ignoreLayoutsNodeChange && (s = this._ignoreLayoutsNodeChange = !0), this._triggerAddEvent(), this._triggerChangeEvent(), s && delete this._ignoreLayoutsNodeChange, r;
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
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((r) => this.off(r)), this) : ((e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable") && this._gsEventHandler[e] && this.el.removeEventListener(e, this._gsEventHandler[e]), delete this._gsEventHandler[e], this);
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
  removeWidget(e, t = !0, r = !0) {
    return e ? (B.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((a) => i === a.el)), s && (t && B.addRemoveCB && B.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, r), t && i.parentElement && i.remove());
    }), r && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((r) => {
      e && B.addRemoveCB && B.addRemoveCB(this.el, r, !1, !1), delete r.el.gridstackNode, this.opts.staticGrid || this._removeDD(r.el);
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
  setStatic(e, t = !0, r = !0) {
    return !!this.opts.staticGrid === e ? this : (e ? this.opts.staticGrid = !0 : delete this.opts.staticGrid, this._setupRemoveDrop(), this._setupAcceptWidget(), this.engine.nodes.forEach((i) => {
      this.prepareDragDrop(i.el), i.subGrid && r && i.subGrid.setStatic(e, t, r);
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
    return B.getElements(e).forEach((r) => {
      const i = r?.gridstackNode;
      if (!i)
        return;
      const s = { ...p.copyPos({}, i), ...p.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const a = ["x", "y", "w", "h"];
      let o;
      if (a.some((c) => s[c] !== void 0 && s[c] !== i[c]) && (o = {}, a.forEach((c) => {
        o[c] = s[c] !== void 0 ? s[c] : i[c], delete s[c];
      })), !o && (s.minW || s.minH || s.maxW || s.maxH) && (o = {}), s.content !== void 0) {
        const c = r.querySelector(".grid-stack-item-content");
        c && c.textContent !== s.content && (i.content = s.content, B.renderCB(c, s), i.subGrid?.el && (c.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, d = !1;
      for (const c in s)
        c[0] !== "_" && i[c] !== s[c] && (i[c] = s[c], l = !0, d = d || !this.opts.staticGrid && (c === "noResize" || c === "noMove" || c === "locked"));
      if (p.sanitizeMinMax(i), o) {
        const c = o.w !== void 0 && o.w !== i.w;
        this.moveNode(i, o), c && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(c, i), delete i._orig;
      }
      (o || l) && this._writeAttr(r, i), d && this.prepareDragDrop(i.el), B.updateCB && B.updateCB(i);
    }), this;
  }
  moveNode(e, t) {
    const r = e._updating;
    r || this.engine.cleanNodes().beginUpdate(e), this.engine.moveNode(e, t), this._updateContainerHeight(), r || (this._triggerChangeEvent(), this.engine.endUpdate());
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
    const r = t.grid;
    if (!r || e.parentElement !== r.el)
      return;
    const i = r.getCellHeight(!0);
    if (!i)
      return;
    let s = t.h ? t.h * i : e.clientHeight, a;
    if (t.resizeToContentParent && (a = e.querySelector(t.resizeToContentParent)), a || (a = e.querySelector(B.resizeToContentParent)), !a)
      return;
    const o = e.clientHeight - a.clientHeight, l = t.h ? t.h * i - o : a.clientHeight;
    let d;
    if (t.subGrid) {
      d = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const h = t.subGrid.el.getBoundingClientRect(), m = e.getBoundingClientRect();
      d += h.top - m.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const h = a.firstElementChild;
        if (!h) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${B.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
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
    u && c > u && (c = u, e.classList.add("size-to-content-max")), t.minH && c < t.minH ? c = t.minH : t.maxH && c > t.maxH && (c = t.maxH), c !== t.h && (r._ignoreLayoutsNodeChange = !0, r.moveNode(t, { h: c }), delete r._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    B.resizeToContentCB ? B.resizeToContentCB(e) : this.resizeToContent(e);
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
    return B.getElements(e).forEach((r) => {
      const i = r.gridstackNode;
      if (!p.canBeRotated(i))
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
      this.update(r, s), i._orig = a;
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
      const r = p.parseHeight(e);
      if (this.opts.marginUnit === r.unit && this.opts.margin === r.h)
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
      let r = 0, i = { x: t[r++], y: t[r++], w: t[r++], h: t[r++], autoPosition: t[r++] };
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
    const r = t ? new CustomEvent(e, { bubbles: !1, detail: t }) : new Event(e);
    let i = this;
    for (; i.parentGridNode; )
      i = i.parentGridNode.grid;
    return i.el.dispatchEvent(r), this;
  }
  /** @internal */
  _updateContainerHeight() {
    if (!this.engine || this.engine.batchMode)
      return this;
    const e = this.parentGridNode;
    let t = this.getRow() + this._extraDragRow;
    const r = this.opts.cellHeight, i = this.opts.cellHeightUnit;
    if (!r)
      return this;
    if (!e && !this.opts.minRow) {
      const s = p.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === i) {
        const a = Math.floor(s.h / r);
        t < a && (t = a);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * r + i), e && p.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, r) {
    r = r || this._readAttr(e), e.gridstackNode = r, r.el = e, r.grid = this, r = this.engine.addNode(r, t), this._writeAttr(e, r), e.classList.add(Ne.itemClass, this.opts.itemClass);
    const i = p.shouldSizeToContent(r);
    return i ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), i && this.resizeToContentCheck(!1, r), p.lazyLoad(r) || this.prepareDragDrop(r.el), this;
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
    const r = {
      // autoPosition: 'gs-auto-position', // no need to write out as already in node and doesn't affect CSS
      noResize: "gs-no-resize",
      noMove: "gs-no-move",
      locked: "gs-locked",
      id: "gs-id",
      sizeToContent: "gs-size-to-content"
    };
    for (const i in r)
      t[i] ? e.setAttribute(r[i], String(t[i])) : e.removeAttribute(r[i]);
    return this;
  }
  /** @internal call to read any default attributes from element */
  _readAttr(e, t = !0) {
    const r = {};
    r.x = p.toNumber(e.getAttribute("gs-x")), r.y = p.toNumber(e.getAttribute("gs-y")), r.w = p.toNumber(e.getAttribute("gs-w")), r.h = p.toNumber(e.getAttribute("gs-h")), r.autoPosition = p.toBool(e.getAttribute("gs-auto-position")), r.noResize = p.toBool(e.getAttribute("gs-no-resize")), r.noMove = p.toBool(e.getAttribute("gs-no-move")), r.locked = p.toBool(e.getAttribute("gs-locked"));
    const i = e.getAttribute("gs-size-to-content");
    i && (i === "true" || i === "false" ? r.sizeToContent = p.toBool(i) : r.sizeToContent = parseInt(i, 10)), r.id = e.getAttribute("gs-id"), r.maxW = p.toNumber(e.getAttribute("gs-max-w")), r.minW = p.toNumber(e.getAttribute("gs-min-w")), r.maxH = p.toNumber(e.getAttribute("gs-max-h")), r.minH = p.toNumber(e.getAttribute("gs-min-h")), t && (r.w === 1 && e.removeAttribute("gs-w"), r.h === 1 && e.removeAttribute("gs-h"), r.maxW && e.removeAttribute("gs-max-w"), r.minW && e.removeAttribute("gs-min-w"), r.maxH && e.removeAttribute("gs-max-h"), r.minH && e.removeAttribute("gs-min-h"));
    for (const s in r) {
      if (!r.hasOwnProperty(s))
        return;
      !r[s] && r[s] !== 0 && s !== "sizeToContent" && delete r[s];
    }
    return r;
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
    return this._autoColumn && this.parentGridNode ? this.opts.column !== this.parentGridNode.w && (this.column(this.parentGridNode.w, this.opts.layout || "list"), t = !0) : t = this.checkDynamicColumn(), this._isAutoCellHeight && this.cellHeight(), this.engine.nodes.forEach((r) => {
      r.subGrid && r.subGrid.onResize();
    }), this._skipInitialResize || this.resizeToContentCheck(t), delete this._skipInitialResize, this.batchUpdate(!1), this;
  }
  /** resizes content for given node (or all) if shouldSizeToContent() is true */
  resizeToContentCheck(e = !1, t = void 0) {
    if (this.engine) {
      if (e && this.hasAnimationCSS())
        return setTimeout(() => this.resizeToContentCheck(!1, t), this.animationDelay);
      if (t)
        p.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((r) => p.shouldSizeToContent(r))) {
        const r = [...this.engine.nodes];
        this.batchUpdate(), r.forEach((i) => {
          p.shouldSizeToContent(i) && this.resizeToContentCBCheck(i.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((r) => r.sizeToContent));
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
    return B.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return p.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, r = [];
    typeof this.opts.margin == "string" && (r = this.opts.margin.split(" ")), r.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = r[0], this.opts.marginLeft = this.opts.marginRight = r[1]) : r.length === 4 ? (this.opts.marginTop = r[0], this.opts.marginRight = r[1], this.opts.marginBottom = r[2], this.opts.marginLeft = r[3]) : (e = p.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((a) => {
      this.opts[a] === void 0 ? this.opts[a] = t : (e = p.parseHeight(this.opts[a]), this.opts[a] = e.h, delete this.opts.margin);
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
    return be;
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
  static setupDragIn(e, t, r, i = document) {
    t?.pause !== void 0 && (H.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? p.getElements(e, i) : e).forEach((a, o) => {
      be.isDraggable(a) || be.dragIn(a, t), r?.[o] && (a.gridstackNode = r[o]);
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
    return this.opts.staticGrid ? this : (B.getElements(e).forEach((r) => {
      const i = r.gridstackNode;
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
    return this.opts.staticGrid ? this : (B.getElements(e).forEach((r) => {
      const i = r.gridstackNode;
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
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableDrag : this.opts.disableDrag = !0, this.engine.nodes.forEach((r) => {
      this.prepareDragDrop(r.el), r.subGrid && t && r.subGrid.enableMove(e, t);
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
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableResize : this.opts.disableResize = !0, this.engine.nodes.forEach((r) => {
      this.prepareDragDrop(r.el), r.subGrid && t && r.subGrid.enableResize(e, t);
    }), this);
  }
  /** @internal call when drag (and drop) needs to be cancelled (Esc key) */
  cancelDrag() {
    const e = this._placeholder?.gridstackNode;
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && B._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return be.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return be.droppable(this.el, "destroy"), this;
    let e, t;
    const r = (i, s, a) => {
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
            be.off(s, "drag");
            return;
          }
          o._willFitPos && (p.copyPos(o, o._willFitPos), delete o._willFitPos);
        }
        this._onStartMoving(a, i, u, o, t, e);
      } else
        this._dragOrResize(a, i, u, o, t, e);
    };
    return be.droppable(this.el, {
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
      o._temporaryRemoved = !0) : (o.w = l, o.h = d, o._temporaryRemoved = !0), B._itemRemoving(o.el, !1), be.on(s, "drag", r), r(i, s, a), !1;
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
      if (!o || (l && (this.engine.cleanupNode(o), o.grid = this), delete o.grid?._isTemp, be.off(s, "drag"), a !== s ? (a.remove(), s = a) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = o.subGrid?.el?.gridstack;
      return p.copyPos(o, this._readAttr(this.placeholder)), p.removePositioningStyles(s), d && (o.content || o.subGridOpts || B.addRemoveCB) ? (delete o.el, s = this.addWidget(o)) : (this._prepareElement(s, !0, o), this.el.appendChild(s), this.resizeToContentCheck(!1, o), u && (u.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, c && c.grid ? c : void 0, o), !1;
    }), this;
  }
  /** @internal mark item for removal */
  static _itemRemoving(e, t) {
    if (!e)
      return;
    const r = e ? e.gridstackNode : void 0;
    !r?.grid || e.classList.contains(r.grid.opts.removableOptions.decline) || (t ? r._isAboutToRemove = !0 : delete r._isAboutToRemove, t ? e.classList.add("grid-stack-item-removing") : e.classList.remove("grid-stack-item-removing"));
  }
  /** @internal called to setup a trash drop zone if the user specifies it */
  _setupRemoveDrop() {
    if (typeof this.opts.removable != "string")
      return this;
    const e = document.querySelector(this.opts.removable);
    return e ? (!this.opts.staticGrid && !be.isDroppable(e) && be.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, r) => B._itemRemoving(r, !0)).on(e, "dropout", (t, r) => B._itemRemoving(r, !1)), this) : this;
  }
  /**
   * prepares the element for drag&drop - this is normally called by makeWidget() unless are are delay loading
   * @param el GridItemHTMLElement of the widget
   * @param [force=false]
   * */
  prepareDragDrop(e, t = !1) {
    const r = e?.gridstackNode;
    if (!r)
      return;
    const i = r.noMove || this.opts.disableDrag, s = r.noResize || this.opts.disableResize, a = this.opts.staticGrid || i && s;
    if ((t || a) && (r._initDD && (this._removeDD(e), delete r._initDD), a && e.classList.add("ui-draggable-disabled", "ui-resizable-disabled"), !t))
      return this;
    if (!r._initDD) {
      let o, l;
      const d = (h, m) => {
        this.triggerEvent(h, h.target), o = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, h, m, r, o, l);
      }, c = (h, m) => {
        this._dragOrResize(e, h, m, r, o, l);
      }, u = (h) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete r._moving, delete r._resizing, delete r._event, delete r._lastTried;
        const m = r.w !== r._orig.w, g = h.target;
        if (!(!g.gridstackNode || g.gridstackNode.grid !== this)) {
          if (r.el = g, r._isAboutToRemove) {
            const v = e.gridstackNode.grid;
            v._gsEventHandler[h.type] && v._gsEventHandler[h.type](h, g), v.engine.nodes.push(r), v.removeWidget(e, !0, !0);
          } else
            p.removePositioningStyles(g), r._temporaryRemoved ? (this._writePosAttr(g, r), this.engine.addNode(r)) : this._writePosAttr(g, r), this.triggerEvent(h, g);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), h.type === "resizestop" && (Number.isInteger(r.sizeToContent) && (r.sizeToContent = r.h), this.resizeToContentCheck(m, r));
        }
      };
      be.draggable(e, {
        start: d,
        stop: u,
        drag: c
      }).resizable(e, {
        start: d,
        stop: u,
        resize: c
      }), r._initDD = !0;
    }
    return be.draggable(e, i ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, r, i, s, a) {
    if (this.engine.cleanNodes().beginUpdate(i), this._writePosAttr(this.placeholder, i), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = i, i.grid?.el)
      this.dragTransform = p.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const o = this.placeholder.closest(".grid-stack");
      this.dragTransform = p.getValuesFromTransformedElement(o);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (i.el = this.placeholder, i._lastUiPosition = r.position, i._prevYPix = r.position.top, i._moving = t.type === "dragstart", i._resizing = t.type === "resizestart", delete i._lastTried, t.type === "dropover" && i._temporaryRemoved && (this.engine.addNode(i), i._moving = !0), this.engine.cacheRects(s, a, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const o = this.getColumn() - i.x, l = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - i.y;
      be.resizable(e, "option", "minWidth", s * Math.min(i.minW || 1, o)).resizable(e, "option", "minHeight", a * Math.min(i.minH || 1, l)).resizable(e, "option", "maxWidth", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, o)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, i.x + i.w)).resizable(e, "option", "maxHeight", a * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", a * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, i.y + i.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, r, i, s, a) {
    const o = { ...i._orig };
    let l, d = this.opts.marginLeft, c = this.opts.marginRight, u = this.opts.marginTop, h = this.opts.marginBottom;
    const m = Math.round(a * 0.1), g = Math.round(s * 0.1);
    if (d = Math.min(d, g), c = Math.min(c, g), u = Math.min(u, m), h = Math.min(h, m), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const b = r.position.top - i._prevYPix;
      i._prevYPix = r.position.top, this.opts.draggable.scroll !== !1 && p.updateScrollPosition(e, r.position, b);
      const k = r.position.left + (r.position.left > i._lastUiPosition.left ? -c : d), N = r.position.top + (r.position.top > i._lastUiPosition.top ? -h : u);
      o.x = Math.round(k / s), o.y = Math.round(N / a);
      const _ = this._extraDragRow;
      if (this.engine.collide(i, o)) {
        const D = this.getRow();
        let x = Math.max(0, o.y + i.h - D);
        this.opts.maxRow && D + x > this.opts.maxRow && (x = Math.max(0, this.opts.maxRow - D)), this._extraDragRow = x;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== _ && this._updateContainerHeight(), i.x === o.x && i.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (p.updateScrollResize(t, e, a), o.w = Math.round((r.size.width - d) / s), o.h = Math.round((r.size.height - u) / a), i.w === o.w && i.h === o.h) || i._lastTried && i._lastTried.w === o.w && i._lastTried.h === o.h)
        return;
      const b = r.position.left + d, k = r.position.top + u;
      o.x = Math.round(b / s), o.y = Math.round(k / a), l = !0;
    }
    i._event = t, i._lastTried = o;
    const v = {
      x: r.position.left + d,
      y: r.position.top + u,
      w: (r.size ? r.size.width : i.w * s) - d - c,
      h: (r.size ? r.size.height : i.h * a) - u - h
    };
    if (this.engine.moveNodeCheck(i, { ...o, cellWidth: s, cellHeight: a, rect: v, resizing: l })) {
      i._lastUiPosition = r.position, this.engine.cacheRects(s, a, u, c, h, d), delete i._skipDown, l && i.subGrid && i.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const b = t.target;
      i._sidebarOrig || this._writePosAttr(b, i), this.triggerEvent(t, b);
    }
  }
  /** call given event callback on our main top-most grid (if we're nested) */
  triggerEvent(e, t) {
    let r = this;
    for (; r.parentGridNode; )
      r = r.parentGridNode.grid;
    r._gsEventHandler[e.type] && r._gsEventHandler[e.type](e, t);
  }
  /** @internal called when item leaving our area by either cursor dropout event
   * or shape is outside our boundaries. remove it from us, and mark temporary if this was
   * our item to start with else restore prev node values from prev grid it came from.
   */
  _leave(e, t) {
    t = t || e;
    const r = t.gridstackNode;
    if (!r || (t.style.transform = t.style.transformOrigin = null, be.off(e, "drag"), r._temporaryRemoved))
      return;
    r._temporaryRemoved = !0, this.engine.removeNode(r), r.el = r._isExternal && t ? t : e;
    const i = r._sidebarOrig;
    r._isExternal && this.engine.cleanupNode(r), r._sidebarOrig = i, this.opts.removable === !0 && B._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : r._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return pc(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
B.renderCB = (n, e) => {
  n && e?.content && (n.textContent = e.content);
};
B.resizeToContentParent = ".grid-stack-item-content";
B.Utils = p;
B.Engine = rt;
B.GDRev = "12.3.2";
const _n = /* @__PURE__ */ new WeakMap();
function bc({ children: n }) {
  const { _gridStack: { value: e, set: t }, options: r } = Os(), i = F(/* @__PURE__ */ new Map()), s = F(null), a = F(r), o = Y((c, u) => {
    if (u.id && u.grid) {
      let h = _n.get(u.grid);
      h || (h = /* @__PURE__ */ new Map(), _n.set(u.grid, h)), h.set(u.id, c), i.current.set(u.id, c);
    }
  }, []), l = Y(() => {
    if (s.current) {
      B.renderCB = o;
      const c = B.init(a.current, s.current);
      return c && a.current.handle && c.opts && (c.opts.handle = a.current.handle), c;
    }
    return null;
  }, [o]), d = (c, u) => {
    const { children: h, ...m } = c, { children: g, ...v } = u;
    return ys(m, v);
  };
  return br(() => {
    if (!d(r, a.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), _n.delete(e), a.current = r, t(null);
      } catch (c) {
        console.error("Error destroying gridstack", c);
      }
    else e && (a.current = r, r.handle && e.opts && (e.opts.handle = r.handle));
  }, [r, e, t]), br(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, l, t]), f(Ms.Provider, {
    value: z(() => ({
      getWidgetContainer: (c) => {
        if (e) {
          const u = _n.get(e);
          if (u?.has(c))
            return u.get(c) || null;
        }
        return i.current.get(c) || null;
      }
    }), [e]),
    children: f("div", {
      ref: s,
      children: e ? n : null
    })
  });
}
const jr = ({ options: n, widgets: e, onChange: t, className: r }) => {
  const i = z(() => JSON.stringify(e.map((l) => ({
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
  }))), [e]), s = z(() => ({
    ...n,
    class: r
  }), [n, i, r]), a = (l, d, c) => {
    let u = c[0], h = 1 / 0;
    for (const m of c) {
      const g = m.w - l, v = m.h - d, b = g * g + v * v;
      b < h && (h = b, u = m);
    }
    return u;
  };
  return f(uc, {
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
    children: f(bc, {
      children: f(mc, {})
    })
  });
};
jr.displayName = "F0GridStack";
const xc = (n, e, t) => f("div", {
  children: n
}), Yn = ({ widgets: n = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: r = xc, main: i = !1, deps: s }) => {
  const a = Y((x, w, y) => f(Ir.div, {
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
    children: r(x, w, y)
  }), [r]), o = z(() => ({
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
  }), []), l = (x, w) => {
    if (typeof x.content == "function" && x.deps && w) {
      const y = {};
      return x.deps.forEach((E) => {
        typeof E == "string" && w[E] !== void 0 && (y[E] = w[E]);
      }), x.content(y);
    }
    return typeof x.content == "function" ? null : x.content;
  }, d = (x, w, y) => x.map((E) => {
    const P = l(E, y), T = {
      id: E.id,
      h: E.h ?? 1,
      w: E.w ?? 1,
      allowedSizes: E.availableSizes,
      noMove: !w,
      noResize: !w,
      locked: E.locked,
      meta: E.meta,
      _originalContent: P,
      content: a(P, E.meta, w)
    };
    return E.x !== void 0 && (T.x = E.x), E.y !== void 0 && (T.y = E.y), T;
  }), [c, u] = $(d(n, e)), h = F(e), m = F(n), g = F(!1), v = F(/* @__PURE__ */ new Map()), b = F(n);
  b.current = n;
  const k = F(s), N = z(() => {
    const x = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || n.forEach((w) => {
      if (w.deps && w.deps.length > 0) {
        const y = w.deps.map((E) => typeof E == "string" && s[E] !== void 0 ? s[E] : E).filter((E) => E !== null);
        x.set(w.id, y);
      }
    }), x;
  }, [n, s]), _ = Y((x) => {
    u(x), g.current || t(x.map((w) => {
      const y = b.current.find((E) => E.id === w.id);
      return {
        id: w.id,
        w: w.w ?? 1,
        h: w.h ?? 1,
        allowedSizes: w.allowedSizes,
        meta: w.meta,
        content: typeof y?.content == "function" ? y.content : w._originalContent,
        x: w.x ?? 0,
        y: w.y ?? 0,
        locked: w.locked,
        deps: y?.deps
      };
    })), g.current = !1;
  }, [t]), D = (x, w) => !x && !w ? !1 : !x || !w || x.length !== w.length ? !0 : x.some((y, E) => y !== w[E]);
  return j(() => {
    const x = h.current !== e, w = m.current !== n, y = k.current !== s && (k.current === void 0 || s === void 0 || Object.keys(k.current).length !== Object.keys(s).length || Object.keys(s).some((C) => k.current?.[C] !== s[C])), E = /* @__PURE__ */ new Map();
    n.forEach((C) => {
      if (C.deps && C.deps.length > 0) {
        const R = v.current.get(C.id), A = N.get(C.id);
        E.set(C.id, D(R, A)), A ? v.current.set(C.id, A) : v.current.delete(C.id);
      }
    });
    const P = new Set(n.map((C) => C.id));
    v.current.forEach((C, R) => {
      P.has(R) || v.current.delete(R);
    });
    const T = Array.from(E.values()).some((C) => C) || y;
    x && !w && !T ? (g.current = !0, u((C) => C.map((R) => {
      const A = n.find((oe) => oe.id === R.id);
      if (!A)
        return R;
      const V = l(A, s);
      return {
        ...R,
        noMove: !e,
        noResize: !e,
        locked: A.locked,
        meta: A.meta,
        _originalContent: V,
        content: a(V, A.meta, e)
      };
    }))) : (w || T) && u((C) => {
      const R = new Map(C.map((A) => [A.id, A]));
      return n.map((A) => {
        const V = R.get(A.id), oe = E.get(A.id) ?? !1;
        let le;
        oe || !V ? le = l(A, s) : le = V._originalContent ?? l(A, s);
        const re = {
          id: A.id,
          h: V?.h ?? A.h ?? 1,
          w: V?.w ?? A.w ?? 1,
          allowedSizes: A.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: A.locked,
          meta: A.meta,
          _originalContent: le,
          content: a(le, A.meta, e)
        }, ne = V?.x ?? A.x, te = V?.y ?? A.y;
        return ne !== void 0 && (re.x = ne), te !== void 0 && (re.y = te), re;
      });
    }), h.current = e, m.current = n, k.current = s;
  }, [n, e, a, N, s]), f(jr, {
    className: J(i && "h-full flex-1 overflow-auto"),
    options: o,
    onChange: _,
    widgets: c
  });
};
Yn.displayName = "GroupGrid";
Yn.__isPageLayoutGroup = !0;
const wc = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutBlock = !0, t;
}, _c = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutGroup = !0, t;
}, Cc = (n, e) => f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: e,
  ...n,
  children: f("path", {
    fill: "currentColor",
    d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
    vectorEffect: "non-scaling-stroke"
  })
}), zs = ke(Cc), kc = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], Ls = ke((n, e) => {
  const t = kc.reduce((r, i) => {
    const { [i]: s, ...a } = r;
    return a;
  }, n);
  return f(zr, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: n.icon == zs
  });
});
Ls.displayName = "AIButton";
const dr = vt({
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
}), Ec = {
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
}, $r = ke(({ content: n, variant: e, align: t, className: r, as: i, ellipsis: s, noEllipsisTooltip: a, markdown: o, ...l }, d) => {
  const c = i ?? Ec[e ?? "body"];
  if (s !== void 0)
    return f(no, {
      ref: d,
      lines: typeof s == "number" ? s : 1,
      noTooltip: a,
      tag: c,
      className: J(dr({
        variant: e,
        align: t
      }), r),
      markdown: o,
      ...l,
      children: n
    });
  if (o) {
    const u = ro(n);
    return di(c, {
      ...l,
      className: J(dr({
        variant: e,
        align: t
      }), r),
      ref: d,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return di(c, {
    ...l,
    className: J(dr({
      variant: e,
      align: t
    }), r),
    ref: d
  }, n);
});
$r.displayName = "Text";
const Ps = ke((n, e) => f($r, {
  ref: e,
  markdown: n.markdown ?? !0,
  ...n
}));
Ps.displayName = "F0Text";
const vm = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Bs = ({ title: n, draggable: e = !1, onDragStart: t, onDragEnd: r, isDragging: i = !1, AIButton: s, actions: a, children: o, selected: l = !1 }) => {
  const [d, c] = $(!1), [u, h] = $(!1), m = un(), g = (b) => {
    c(b);
  }, v = u || d;
  return j(() => {
    if (!i || !r) return;
    const b = () => {
      r();
    };
    return document.addEventListener("mouseup", b), () => {
      document.removeEventListener("mouseup", b);
    };
  }, [i, r]), M("div", {
    className: J("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && d ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [M("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [M("div", {
        className: J("flex min-w-0 flex-1 items-center", !e && "pl-4", !a && !s && "pr-4"),
        children: [e && f("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: f(Lr, {
            icon: io,
            size: "xs"
          })
        }), f("div", {
          className: J("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: f(Ps, {
            variant: "label",
            content: n,
            ellipsis: !0
          })
        })]
      }), f(so, {
        children: (s || a) && v && M(Ir.div, {
          className: J("flex shrink-0 items-center gap-0.5 pr-2", !a && "pr-4"),
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
            children: f(Ls, {
              size: "sm",
              label: m.ai.ask,
              onClick: s,
              icon: zs
            })
          }), a && f(ao, {
            items: a,
            open: d,
            onOpenChange: g,
            align: "end",
            children: f(zr, {
              icon: oo,
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
}, Sc = () => M("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [f("div", {
    className: "flex h-12 w-full items-center px-4",
    children: f(Ke, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), M("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [f(Ke, {
      className: "h-1/2 w-full rounded-sm"
    }), f(Ke, {
      className: "h-1/3 w-full rounded-sm"
    }), f(Ke, {
      className: "h-1/5 w-full rounded-sm"
    }), f(Ke, {
      className: "h-1/3 w-full rounded-sm"
    }), f(Ke, {
      className: "h-full w-full rounded-sm"
    }), f(Ke, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
Bs.displayName = "F0Widget";
const Dc = ns(Bs, Sc), Nc = ({ children: n, title: e, draggable: t = !1, actions: r, aiButton: i }) => f(Dc, {
  title: e,
  draggable: t,
  actions: r,
  AIButton: i,
  children: n
}), Fs = ({ widgets: n, editMode: e = !1, onChange: t = () => {
}, deps: r, ...i }) => f(Yn, {
  widgets: n,
  editMode: e,
  onChange: t,
  deps: r,
  ...i,
  WidgetWrapper: (s, a, o) => f(Nc, {
    title: a?.title ?? "",
    draggable: o,
    actions: a?.actions,
    aiButton: a?.aiButton,
    children: s
  })
});
Fs.displayName = "Dashboard";
const Rc = _c("Dashboard", Fs), ym = Re("Dashboard", Rc), Tc = vt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Ac = (n) => (n || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), Oc = (n) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(n) ? n.every(e) ? [{
    items: n
  }] : n : [n];
}, Kn = ke(({ children: n, variant: e = "default", className: t, draggable: r = !1, onDragStart: i, onDragEnd: s, onDrop: a, dragId: o, primaryAction: l, ...d }, c) => {
  const u = z(() => Oc(d.actions || []), [d.actions]), h = z(() => u.flatMap((g) => g.items), [u]), m = z(() => h.length > 0 || !!l, [h, l]);
  return M("div", {
    ref: c,
    className: J(Tc({
      variant: e
    }), "relative", t),
    draggable: r,
    onDragStart: i,
    onDragEnd: s,
    onDrop: a,
    "data-drag-id": o,
    ...d,
    children: [m && M("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, h.length > 0 && f(rl, {
        items: Ac(u)
      })]
    }), f("div", {
      children: n
    })]
  });
});
Kn.displayName = "Block";
Kn.__isPageLayoutBlock = !0;
const Mc = ({ title: n = "", description: e, titleLevel: t = "h2", children: r, className: i, ...s }) => {
  if (!n) return null;
  const a = t;
  return M(Kn, {
    ...s,
    className: J("space-y-4", i),
    children: [M("div", {
      className: "space-y-2",
      children: [f(a, {
        className: J("font-semibold text-f1-foreground", {
          "text-2xl": t === "h1",
          "text-xl": t === "h2",
          "text-lg": t === "h3",
          "text-base": t === "h4",
          "text-sm": t === "h5",
          "text-xs": t === "h6"
        }),
        children: n
      }), e && f("p", {
        className: "text-sm text-f1-foreground-secondary",
        children: e
      })]
    }), f("div", {
      className: "flex-1",
      children: r
    })]
  });
}, Ic = wc("BlockContent", Mc), zc = (n) => !ps(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutBlock" in n.type, Lc = (n) => !ps(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutGroup" in n.type, Hs = (n, e, t) => {
  const r = Dn.toArray(e);
  for (const i of r)
    t.includes("block") && zc(i) || t.includes("group") && Lc(i) || console.warn(
      `${n}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, Wr = ke(({ children: n, onSort: e, ...t }, r) => {
  Hs("GroupLinear", n, ["block"]);
  const [i, s] = $(Dn.toArray(n));
  return j(() => {
    s(Dn.toArray(n));
  }, [n]), j(() => {
    e?.(i);
  }, [i, e]), f("div", {
    ref: r,
    ...t,
    children: i.map((a, o) => f(gs, {
      children: a
    }, o))
  });
});
Wr.displayName = "GroupLinear";
Wr.__isPageLayoutGroup = !0;
function Pc() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return z(
    () => (r) => {
      e.forEach((i) => i(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const Xn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ft(n) {
  const e = Object.prototype.toString.call(n);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Gr(n) {
  return "nodeType" in n;
}
function xe(n) {
  var e, t;
  return n ? Ft(n) ? n : Gr(n) && (e = (t = n.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Vr(n) {
  const {
    Document: e
  } = xe(n);
  return n instanceof e;
}
function hn(n) {
  return Ft(n) ? !1 : n instanceof xe(n).HTMLElement;
}
function js(n) {
  return n instanceof xe(n).SVGElement;
}
function Ht(n) {
  return n ? Ft(n) ? n.document : Gr(n) ? Vr(n) ? n : hn(n) || js(n) ? n.ownerDocument : document : document : document;
}
const $e = Xn ? br : j;
function Jn(n) {
  const e = F(n);
  return $e(() => {
    e.current = n;
  }), Y(function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
function Bc() {
  const n = F(null), e = Y((r, i) => {
    n.current = setInterval(r, i);
  }, []), t = Y(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [e, t];
}
function rn(n, e) {
  e === void 0 && (e = [n]);
  const t = F(n);
  return $e(() => {
    t.current !== n && (t.current = n);
  }, e), t;
}
function fn(n, e) {
  const t = F();
  return z(
    () => {
      const r = n(t.current);
      return t.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function In(n) {
  const e = Jn(n), t = F(null), r = Y(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, r];
}
function zn(n) {
  const e = F();
  return j(() => {
    e.current = n;
  }, [n]), e.current;
}
let ur = {};
function mn(n, e) {
  return z(() => {
    if (e)
      return e;
    const t = ur[n] == null ? 0 : ur[n] + 1;
    return ur[n] = t, n + "-" + t;
  }, [n, e]);
}
function $s(n) {
  return function(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      r[i - 1] = arguments[i];
    return r.reduce((s, a) => {
      const o = Object.entries(a);
      for (const [l, d] of o) {
        const c = s[l];
        c != null && (s[l] = c + n * d);
      }
      return s;
    }, {
      ...e
    });
  };
}
const Ot = /* @__PURE__ */ $s(1), sn = /* @__PURE__ */ $s(-1);
function Fc(n) {
  return "clientX" in n && "clientY" in n;
}
function Qn(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: e
  } = xe(n.target);
  return e && n instanceof e;
}
function Hc(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: e
  } = xe(n.target);
  return e && n instanceof e;
}
function Ln(n) {
  if (Hc(n)) {
    if (n.touches && n.touches.length) {
      const {
        clientX: e,
        clientY: t
      } = n.touches[0];
      return {
        x: e,
        y: t
      };
    } else if (n.changedTouches && n.changedTouches.length) {
      const {
        clientX: e,
        clientY: t
      } = n.changedTouches[0];
      return {
        x: e,
        y: t
      };
    }
  }
  return Fc(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const mt = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(n) {
      if (!n)
        return;
      const {
        x: e,
        y: t
      } = n;
      return "translate3d(" + (e ? Math.round(e) : 0) + "px, " + (t ? Math.round(t) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(n) {
      if (!n)
        return;
      const {
        scaleX: e,
        scaleY: t
      } = n;
      return "scaleX(" + e + ") scaleY(" + t + ")";
    }
  },
  Transform: {
    toString(n) {
      if (n)
        return [mt.Translate.toString(n), mt.Scale.toString(n)].join(" ");
    }
  },
  Transition: {
    toString(n) {
      let {
        property: e,
        duration: t,
        easing: r
      } = n;
      return e + " " + t + "ms " + r;
    }
  }
}), bi = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function jc(n) {
  return n.matches(bi) ? n : n.querySelector(bi);
}
const $c = {
  display: "none"
};
function Wc(n) {
  let {
    id: e,
    value: t
  } = n;
  return Z.createElement("div", {
    id: e,
    style: $c
  }, t);
}
function Gc(n) {
  let {
    id: e,
    announcement: t,
    ariaLiveType: r = "assertive"
  } = n;
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
  return Z.createElement("div", {
    id: e,
    style: i,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, t);
}
function Vc() {
  const [n, e] = $("");
  return {
    announce: Y((r) => {
      r != null && e(r);
    }, []),
    announcement: n
  };
}
const Ws = /* @__PURE__ */ Ge(null);
function Zc(n) {
  const e = Ie(Ws);
  j(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(n);
  }, [n, e]);
}
function Uc() {
  const [n] = $(() => /* @__PURE__ */ new Set()), e = Y((r) => (n.add(r), () => n.delete(r)), [n]);
  return [Y((r) => {
    let {
      type: i,
      event: s
    } = r;
    n.forEach((a) => {
      var o;
      return (o = a[i]) == null ? void 0 : o.call(a, s);
    });
  }, [n]), e];
}
const qc = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Yc = {
  onDragStart(n) {
    let {
      active: e
    } = n;
    return "Picked up draggable item " + e.id + ".";
  },
  onDragOver(n) {
    let {
      active: e,
      over: t
    } = n;
    return t ? "Draggable item " + e.id + " was moved over droppable area " + t.id + "." : "Draggable item " + e.id + " is no longer over a droppable area.";
  },
  onDragEnd(n) {
    let {
      active: e,
      over: t
    } = n;
    return t ? "Draggable item " + e.id + " was dropped over droppable area " + t.id : "Draggable item " + e.id + " was dropped.";
  },
  onDragCancel(n) {
    let {
      active: e
    } = n;
    return "Dragging was cancelled. Draggable item " + e.id + " was dropped.";
  }
};
function Kc(n) {
  let {
    announcements: e = Yc,
    container: t,
    hiddenTextDescribedById: r,
    screenReaderInstructions: i = qc
  } = n;
  const {
    announce: s,
    announcement: a
  } = Vc(), o = mn("DndLiveRegion"), [l, d] = $(!1);
  if (j(() => {
    d(!0);
  }, []), Zc(z(() => ({
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
  const c = Z.createElement(Z.Fragment, null, Z.createElement(Wc, {
    id: r,
    value: i.draggable
  }), Z.createElement(Gc, {
    id: o,
    announcement: a
  }));
  return t ? Pr(c, t) : c;
}
var de;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(de || (de = {}));
function Pn() {
}
function xi(n, e) {
  return z(
    () => ({
      sensor: n,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, e]
  );
}
function Xc() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return z(
    () => [...e].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const We = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Jc(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Qc(n, e) {
  const t = Ln(n);
  if (!t)
    return "0 0";
  const r = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function ed(n, e) {
  let {
    data: {
      value: t
    }
  } = n, {
    data: {
      value: r
    }
  } = e;
  return t - r;
}
function td(n, e) {
  let {
    data: {
      value: t
    }
  } = n, {
    data: {
      value: r
    }
  } = e;
  return r - t;
}
function wi(n) {
  let {
    left: e,
    top: t,
    height: r,
    width: i
  } = n;
  return [{
    x: e,
    y: t
  }, {
    x: e + i,
    y: t
  }, {
    x: e,
    y: t + r
  }, {
    x: e + i,
    y: t + r
  }];
}
function Gs(n, e) {
  if (!n || n.length === 0)
    return null;
  const [t] = n;
  return t[e];
}
const nd = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: r
  } = n;
  const i = wi(e), s = [];
  for (const a of r) {
    const {
      id: o
    } = a, l = t.get(o);
    if (l) {
      const d = wi(l), c = i.reduce((h, m, g) => h + Jc(d[g], m), 0), u = Number((c / 4).toFixed(4));
      s.push({
        id: o,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(ed);
};
function rd(n, e) {
  const t = Math.max(e.top, n.top), r = Math.max(e.left, n.left), i = Math.min(e.left + e.width, n.left + n.width), s = Math.min(e.top + e.height, n.top + n.height), a = i - r, o = s - t;
  if (r < i && t < s) {
    const l = e.width * e.height, d = n.width * n.height, c = a * o, u = c / (l + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const id = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: r
  } = n;
  const i = [];
  for (const s of r) {
    const {
      id: a
    } = s, o = t.get(a);
    if (o) {
      const l = rd(o, e);
      l > 0 && i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(td);
};
function sd(n, e, t) {
  return {
    ...n,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Vs(n, e) {
  return n && e ? {
    x: n.left - e.left,
    y: n.top - e.top
  } : We;
}
function ad(n) {
  return function(t) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return i.reduce((a, o) => ({
      ...a,
      top: a.top + n * o.y,
      bottom: a.bottom + n * o.y,
      left: a.left + n * o.x,
      right: a.right + n * o.x
    }), {
      ...t
    });
  };
}
const od = /* @__PURE__ */ ad(1);
function Zs(n) {
  if (n.startsWith("matrix3d(")) {
    const e = n.slice(9, -1).split(/, /);
    return {
      x: +e[12],
      y: +e[13],
      scaleX: +e[0],
      scaleY: +e[5]
    };
  } else if (n.startsWith("matrix(")) {
    const e = n.slice(7, -1).split(/, /);
    return {
      x: +e[4],
      y: +e[5],
      scaleX: +e[0],
      scaleY: +e[3]
    };
  }
  return null;
}
function ld(n, e, t) {
  const r = Zs(e);
  if (!r)
    return n;
  const {
    scaleX: i,
    scaleY: s,
    x: a,
    y: o
  } = r, l = n.left - a - (1 - i) * parseFloat(t), d = n.top - o - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), c = i ? n.width / i : n.width, u = s ? n.height / s : n.height;
  return {
    width: c,
    height: u,
    top: d,
    right: l + c,
    bottom: d + u,
    left: l
  };
}
const cd = {
  ignoreTransform: !1
};
function jt(n, e) {
  e === void 0 && (e = cd);
  let t = n.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: c
    } = xe(n).getComputedStyle(n);
    d && (t = ld(t, d, c));
  }
  const {
    top: r,
    left: i,
    width: s,
    height: a,
    bottom: o,
    right: l
  } = t;
  return {
    top: r,
    left: i,
    width: s,
    height: a,
    bottom: o,
    right: l
  };
}
function _i(n) {
  return jt(n, {
    ignoreTransform: !0
  });
}
function dd(n) {
  const e = n.innerWidth, t = n.innerHeight;
  return {
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
  };
}
function ud(n, e) {
  return e === void 0 && (e = xe(n).getComputedStyle(n)), e.position === "fixed";
}
function hd(n, e) {
  e === void 0 && (e = xe(n).getComputedStyle(n));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function er(n, e) {
  const t = [];
  function r(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Vr(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!hn(i) || js(i) || t.includes(i))
      return t;
    const s = xe(n).getComputedStyle(i);
    return i !== n && hd(i, s) && t.push(i), ud(i, s) ? t : r(i.parentNode);
  }
  return n ? r(n) : t;
}
function Us(n) {
  const [e] = er(n, 1);
  return e ?? null;
}
function hr(n) {
  return !Xn || !n ? null : Ft(n) ? n : Gr(n) ? Vr(n) || n === Ht(n).scrollingElement ? window : hn(n) ? n : null : null;
}
function qs(n) {
  return Ft(n) ? n.scrollX : n.scrollLeft;
}
function Ys(n) {
  return Ft(n) ? n.scrollY : n.scrollTop;
}
function wr(n) {
  return {
    x: qs(n),
    y: Ys(n)
  };
}
var fe;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(fe || (fe = {}));
function Ks(n) {
  return !Xn || !n ? !1 : n === document.scrollingElement;
}
function Xs(n) {
  const e = {
    x: 0,
    y: 0
  }, t = Ks(n) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: n.clientHeight,
    width: n.clientWidth
  }, r = {
    x: n.scrollWidth - t.width,
    y: n.scrollHeight - t.height
  }, i = n.scrollTop <= e.y, s = n.scrollLeft <= e.x, a = n.scrollTop >= r.y, o = n.scrollLeft >= r.x;
  return {
    isTop: i,
    isLeft: s,
    isBottom: a,
    isRight: o,
    maxScroll: r,
    minScroll: e
  };
}
const fd = {
  x: 0.2,
  y: 0.2
};
function md(n, e, t, r, i) {
  let {
    top: s,
    left: a,
    right: o,
    bottom: l
  } = t;
  r === void 0 && (r = 10), i === void 0 && (i = fd);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: h
  } = Xs(n), m = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, v = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !d && s <= e.top + v.height ? (m.y = fe.Backward, g.y = r * Math.abs((e.top + v.height - s) / v.height)) : !c && l >= e.bottom - v.height && (m.y = fe.Forward, g.y = r * Math.abs((e.bottom - v.height - l) / v.height)), !h && o >= e.right - v.width ? (m.x = fe.Forward, g.x = r * Math.abs((e.right - v.width - o) / v.width)) : !u && a <= e.left + v.width && (m.x = fe.Backward, g.x = r * Math.abs((e.left + v.width - a) / v.width)), {
    direction: m,
    speed: g
  };
}
function pd(n) {
  if (n === document.scrollingElement) {
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
    right: r,
    bottom: i
  } = n.getBoundingClientRect();
  return {
    top: e,
    left: t,
    right: r,
    bottom: i,
    width: n.clientWidth,
    height: n.clientHeight
  };
}
function Js(n) {
  return n.reduce((e, t) => Ot(e, wr(t)), We);
}
function gd(n) {
  return n.reduce((e, t) => e + qs(t), 0);
}
function vd(n) {
  return n.reduce((e, t) => e + Ys(t), 0);
}
function Qs(n, e) {
  if (e === void 0 && (e = jt), !n)
    return;
  const {
    top: t,
    left: r,
    bottom: i,
    right: s
  } = e(n);
  Us(n) && (i <= 0 || s <= 0 || t >= window.innerHeight || r >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const yd = [["x", ["left", "right"], gd], ["y", ["top", "bottom"], vd]];
class Zr {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = er(t), i = Js(r);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, a, o] of yd)
      for (const l of a)
        Object.defineProperty(this, l, {
          get: () => {
            const d = o(r), c = i[s] - d;
            return this.rect[l] + c;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Kt {
  constructor(e) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((t) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...t);
      });
    }, this.target = e;
  }
  add(e, t, r) {
    var i;
    (i = this.target) == null || i.addEventListener(e, t, r), this.listeners.push([e, t, r]);
  }
}
function bd(n) {
  const {
    EventTarget: e
  } = xe(n);
  return n instanceof e ? n : Ht(n);
}
function fr(n, e) {
  const t = Math.abs(n.x), r = Math.abs(n.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + r ** 2) > e : "x" in e && "y" in e ? t > e.x && r > e.y : "x" in e ? t > e.x : "y" in e ? r > e.y : !1;
}
var Me;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(Me || (Me = {}));
function Ci(n) {
  n.preventDefault();
}
function xd(n) {
  n.stopPropagation();
}
var K;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter", n.Tab = "Tab";
})(K || (K = {}));
const ea = {
  start: [K.Space, K.Enter],
  cancel: [K.Esc],
  end: [K.Space, K.Enter, K.Tab]
}, wd = (n, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (n.code) {
    case K.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case K.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case K.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case K.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Ur {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new Kt(Ht(t)), this.windowListeners = new Kt(xe(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Me.Resize, this.handleCancel), this.windowListeners.add(Me.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Me.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, r = e.node.current;
    r && Qs(r), t(We);
  }
  handleKeyDown(e) {
    if (Qn(e)) {
      const {
        active: t,
        context: r,
        options: i
      } = this.props, {
        keyboardCodes: s = ea,
        coordinateGetter: a = wd,
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
      } = r.current, c = d ? {
        x: d.left,
        y: d.top
      } : We;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const u = a(e, {
        active: t,
        context: r.current,
        currentCoordinates: c
      });
      if (u) {
        const h = sn(u, c), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = r.current;
        for (const v of g) {
          const b = e.code, {
            isTop: k,
            isRight: N,
            isLeft: _,
            isBottom: D,
            maxScroll: x,
            minScroll: w
          } = Xs(v), y = pd(v), E = {
            x: Math.min(b === K.Right ? y.right - y.width / 2 : y.right, Math.max(b === K.Right ? y.left : y.left + y.width / 2, u.x)),
            y: Math.min(b === K.Down ? y.bottom - y.height / 2 : y.bottom, Math.max(b === K.Down ? y.top : y.top + y.height / 2, u.y))
          }, P = b === K.Right && !N || b === K.Left && !_, T = b === K.Down && !D || b === K.Up && !k;
          if (P && E.x !== u.x) {
            const C = v.scrollLeft + h.x, R = b === K.Right && C <= x.x || b === K.Left && C >= w.x;
            if (R && !h.y) {
              v.scrollTo({
                left: C,
                behavior: o
              });
              return;
            }
            R ? m.x = v.scrollLeft - C : m.x = b === K.Right ? v.scrollLeft - x.x : v.scrollLeft - w.x, m.x && v.scrollBy({
              left: -m.x,
              behavior: o
            });
            break;
          } else if (T && E.y !== u.y) {
            const C = v.scrollTop + h.y, R = b === K.Down && C <= x.y || b === K.Up && C >= w.y;
            if (R && !h.x) {
              v.scrollTo({
                top: C,
                behavior: o
              });
              return;
            }
            R ? m.y = v.scrollTop - C : m.y = b === K.Down ? v.scrollTop - x.y : v.scrollTop - w.y, m.y && v.scrollBy({
              top: -m.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, Ot(sn(u, this.referenceCoordinates), m));
      }
    }
  }
  handleMove(e, t) {
    const {
      onMove: r
    } = this.props;
    e.preventDefault(), r(t);
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
Ur.activators = [{
  eventName: "onKeyDown",
  handler: (n, e, t) => {
    let {
      keyboardCodes: r = ea,
      onActivation: i
    } = e, {
      active: s
    } = t;
    const {
      code: a
    } = n.nativeEvent;
    if (r.start.includes(a)) {
      const o = s.activatorNode.current;
      return o && n.target !== o ? !1 : (n.preventDefault(), i?.({
        event: n.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function ki(n) {
  return !!(n && "distance" in n);
}
function Ei(n) {
  return !!(n && "delay" in n);
}
class qr {
  constructor(e, t, r) {
    var i;
    r === void 0 && (r = bd(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: a
    } = s;
    this.props = e, this.events = t, this.document = Ht(a), this.documentListeners = new Kt(this.document), this.listeners = new Kt(r), this.windowListeners = new Kt(xe(a)), this.initialCoordinates = (i = Ln(s)) != null ? i : We, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: e,
      props: {
        options: {
          activationConstraint: t,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(e.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Me.Resize, this.handleCancel), this.windowListeners.add(Me.DragStart, Ci), this.windowListeners.add(Me.VisibilityChange, this.handleCancel), this.windowListeners.add(Me.ContextMenu, Ci), this.documentListeners.add(Me.Keydown, this.handleKeydown), t) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Ei(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (ki(t)) {
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
      active: r,
      onPending: i
    } = this.props;
    i(r, e, this.initialCoordinates, t);
  }
  handleStart() {
    const {
      initialCoordinates: e
    } = this, {
      onStart: t
    } = this.props;
    e && (this.activated = !0, this.documentListeners.add(Me.Click, xd, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Me.SelectionChange, this.removeTextSelection), t(e));
  }
  handleMove(e) {
    var t;
    const {
      activated: r,
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
    const l = (t = Ln(e)) != null ? t : We, d = sn(i, l);
    if (!r && o) {
      if (ki(o)) {
        if (o.tolerance != null && fr(d, o.tolerance))
          return this.handleCancel();
        if (fr(d, o.distance))
          return this.handleStart();
      }
      if (Ei(o) && fr(d, o.tolerance))
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
    e.code === K.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const _d = {
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
class Yr extends qr {
  constructor(e) {
    const {
      event: t
    } = e, r = Ht(t.target);
    super(e, _d, r);
  }
}
Yr.activators = [{
  eventName: "onPointerDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: r
    } = e;
    return !t.isPrimary || t.button !== 0 ? !1 : (r?.({
      event: t
    }), !0);
  }
}];
const Cd = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var _r;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(_r || (_r = {}));
class kd extends qr {
  constructor(e) {
    super(e, Cd, Ht(e.event.target));
  }
}
kd.activators = [{
  eventName: "onMouseDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: r
    } = e;
    return t.button === _r.RightClick ? !1 : (r?.({
      event: t
    }), !0);
  }
}];
const mr = {
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
class Ed extends qr {
  constructor(e) {
    super(e, mr);
  }
  static setup() {
    return window.addEventListener(mr.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(mr.move.name, e);
    };
    function e() {
    }
  }
}
Ed.activators = [{
  eventName: "onTouchStart",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: r
    } = e;
    const {
      touches: i
    } = t;
    return i.length > 1 ? !1 : (r?.({
      event: t
    }), !0);
  }
}];
var Xt;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(Xt || (Xt = {}));
var Bn;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Bn || (Bn = {}));
function Sd(n) {
  let {
    acceleration: e,
    activator: t = Xt.Pointer,
    canScroll: r,
    draggingRect: i,
    enabled: s,
    interval: a = 5,
    order: o = Bn.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: h
  } = n;
  const m = Nd({
    delta: u,
    disabled: !s
  }), [g, v] = Bc(), b = F({
    x: 0,
    y: 0
  }), k = F({
    x: 0,
    y: 0
  }), N = z(() => {
    switch (t) {
      case Xt.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Xt.DraggableRect:
        return i;
    }
  }, [t, i, l]), _ = F(null), D = Y(() => {
    const w = _.current;
    if (!w)
      return;
    const y = b.current.x * k.current.x, E = b.current.y * k.current.y;
    w.scrollBy(y, E);
  }, []), x = z(() => o === Bn.TreeOrder ? [...d].reverse() : d, [o, d]);
  j(
    () => {
      if (!s || !d.length || !N) {
        v();
        return;
      }
      for (const w of x) {
        if (r?.(w) === !1)
          continue;
        const y = d.indexOf(w), E = c[y];
        if (!E)
          continue;
        const {
          direction: P,
          speed: T
        } = md(w, E, N, e, h);
        for (const C of ["x", "y"])
          m[C][P[C]] || (T[C] = 0, P[C] = 0);
        if (T.x > 0 || T.y > 0) {
          v(), _.current = w, g(D, a), b.current = T, k.current = P;
          return;
        }
      }
      b.current = {
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
      D,
      r,
      v,
      s,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      g,
      d,
      x,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Dd = {
  x: {
    [fe.Backward]: !1,
    [fe.Forward]: !1
  },
  y: {
    [fe.Backward]: !1,
    [fe.Forward]: !1
  }
};
function Nd(n) {
  let {
    delta: e,
    disabled: t
  } = n;
  const r = zn(e);
  return fn((i) => {
    if (t || !r || !i)
      return Dd;
    const s = {
      x: Math.sign(e.x - r.x),
      y: Math.sign(e.y - r.y)
    };
    return {
      x: {
        [fe.Backward]: i.x[fe.Backward] || s.x === -1,
        [fe.Forward]: i.x[fe.Forward] || s.x === 1
      },
      y: {
        [fe.Backward]: i.y[fe.Backward] || s.y === -1,
        [fe.Forward]: i.y[fe.Forward] || s.y === 1
      }
    };
  }, [t, e, r]);
}
function Rd(n, e) {
  const t = e != null ? n.get(e) : void 0, r = t ? t.node.current : null;
  return fn((i) => {
    var s;
    return e == null ? null : (s = r ?? i) != null ? s : null;
  }, [r, e]);
}
function Td(n, e) {
  return z(() => n.reduce((t, r) => {
    const {
      sensor: i
    } = r, s = i.activators.map((a) => ({
      eventName: a.eventName,
      handler: e(a.handler, r)
    }));
    return [...t, ...s];
  }, []), [n, e]);
}
var an;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(an || (an = {}));
var Cr;
(function(n) {
  n.Optimized = "optimized";
})(Cr || (Cr = {}));
const Si = /* @__PURE__ */ new Map();
function Ad(n, e) {
  let {
    dragging: t,
    dependencies: r,
    config: i
  } = e;
  const [s, a] = $(null), {
    frequency: o,
    measure: l,
    strategy: d
  } = i, c = F(n), u = b(), h = rn(u), m = Y(function(k) {
    k === void 0 && (k = []), !h.current && a((N) => N === null ? k : N.concat(k.filter((_) => !N.includes(_))));
  }, [h]), g = F(null), v = fn((k) => {
    if (u && !t)
      return Si;
    if (!k || k === Si || c.current !== n || s != null) {
      const N = /* @__PURE__ */ new Map();
      for (let _ of n) {
        if (!_)
          continue;
        if (s && s.length > 0 && !s.includes(_.id) && _.rect.current) {
          N.set(_.id, _.rect.current);
          continue;
        }
        const D = _.node.current, x = D ? new Zr(l(D), D) : null;
        _.rect.current = x, x && N.set(_.id, x);
      }
      return N;
    }
    return k;
  }, [n, s, t, u, l]);
  return j(() => {
    c.current = n;
  }, [n]), j(
    () => {
      u || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), j(
    () => {
      s && s.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), j(
    () => {
      u || typeof o != "number" || g.current !== null || (g.current = setTimeout(() => {
        m(), g.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, u, m, ...r]
  ), {
    droppableRects: v,
    measureDroppableContainers: m,
    measuringScheduled: s != null
  };
  function b() {
    switch (d) {
      case an.Always:
        return !1;
      case an.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Kr(n, e) {
  return fn((t) => n ? t || (typeof e == "function" ? e(n) : n) : null, [e, n]);
}
function Od(n, e) {
  return Kr(n, e);
}
function Md(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const r = Jn(e), i = z(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(r);
  }, [r, t]);
  return j(() => () => i?.disconnect(), [i]), i;
}
function tr(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const r = Jn(e), i = z(
    () => {
      if (t || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: s
      } = window;
      return new s(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  );
  return j(() => () => i?.disconnect(), [i]), i;
}
function Id(n) {
  return new Zr(jt(n), n);
}
function Di(n, e, t) {
  e === void 0 && (e = Id);
  const [r, i] = $(null);
  function s() {
    i((l) => {
      if (!n)
        return null;
      if (n.isConnected === !1) {
        var d;
        return (d = l ?? t) != null ? d : null;
      }
      const c = e(n);
      return JSON.stringify(l) === JSON.stringify(c) ? l : c;
    });
  }
  const a = Md({
    callback(l) {
      if (n)
        for (const d of l) {
          const {
            type: c,
            target: u
          } = d;
          if (c === "childList" && u instanceof HTMLElement && u.contains(n)) {
            s();
            break;
          }
        }
    }
  }), o = tr({
    callback: s
  });
  return $e(() => {
    s(), n ? (o?.observe(n), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [n]), r;
}
function zd(n) {
  const e = Kr(n);
  return Vs(n, e);
}
const Ni = [];
function Ld(n) {
  const e = F(n), t = fn((r) => n ? r && r !== Ni && n && e.current && n.parentNode === e.current.parentNode ? r : er(n) : Ni, [n]);
  return j(() => {
    e.current = n;
  }, [n]), t;
}
function Pd(n) {
  const [e, t] = $(null), r = F(n), i = Y((s) => {
    const a = hr(s.target);
    a && t((o) => o ? (o.set(a, wr(a)), new Map(o)) : null);
  }, []);
  return j(() => {
    const s = r.current;
    if (n !== s) {
      a(s);
      const o = n.map((l) => {
        const d = hr(l);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, wr(d)]) : null;
      }).filter((l) => l != null);
      t(o.length ? new Map(o) : null), r.current = n;
    }
    return () => {
      a(n), a(s);
    };
    function a(o) {
      o.forEach((l) => {
        const d = hr(l);
        d?.removeEventListener("scroll", i);
      });
    }
  }, [i, n]), z(() => n.length ? e ? Array.from(e.values()).reduce((s, a) => Ot(s, a), We) : Js(n) : We, [n, e]);
}
function Ri(n, e) {
  e === void 0 && (e = []);
  const t = F(null);
  return j(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), j(() => {
    const r = n !== We;
    r && !t.current && (t.current = n), !r && t.current && (t.current = null);
  }, [n]), t.current ? sn(n, t.current) : We;
}
function Bd(n) {
  j(
    () => {
      if (!Xn)
        return;
      const e = n.map((t) => {
        let {
          sensor: r
        } = t;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const t of e)
          t?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n.map((e) => {
      let {
        sensor: t
      } = e;
      return t;
    })
  );
}
function Fd(n, e) {
  return z(() => n.reduce((t, r) => {
    let {
      eventName: i,
      handler: s
    } = r;
    return t[i] = (a) => {
      s(a, e);
    }, t;
  }, {}), [n, e]);
}
function ta(n) {
  return z(() => n ? dd(n) : null, [n]);
}
const Ti = [];
function Hd(n, e) {
  e === void 0 && (e = jt);
  const [t] = n, r = ta(t ? xe(t) : null), [i, s] = $(Ti);
  function a() {
    s(() => n.length ? n.map((l) => Ks(l) ? r : new Zr(e(l), l)) : Ti);
  }
  const o = tr({
    callback: a
  });
  return $e(() => {
    o?.disconnect(), a(), n.forEach((l) => o?.observe(l));
  }, [n]), i;
}
function na(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const e = n.children[0];
  return hn(e) ? e : n;
}
function jd(n) {
  let {
    measure: e
  } = n;
  const [t, r] = $(null), i = Y((d) => {
    for (const {
      target: c
    } of d)
      if (hn(c)) {
        r((u) => {
          const h = e(c);
          return u ? {
            ...u,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [e]), s = tr({
    callback: i
  }), a = Y((d) => {
    const c = na(d);
    s?.disconnect(), c && s?.observe(c), r(c ? e(c) : null);
  }, [e, s]), [o, l] = In(a);
  return z(() => ({
    nodeRef: o,
    rect: t,
    setRef: l
  }), [t, o, l]);
}
const $d = [{
  sensor: Yr,
  options: {}
}, {
  sensor: Ur,
  options: {}
}], Wd = {
  current: {}
}, En = {
  draggable: {
    measure: _i
  },
  droppable: {
    measure: _i,
    strategy: an.WhileDragging,
    frequency: Cr.Optimized
  },
  dragOverlay: {
    measure: jt
  }
};
class Jt extends Map {
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
    var t, r;
    return (t = (r = this.get(e)) == null ? void 0 : r.node.current) != null ? t : void 0;
  }
}
const Gd = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Jt(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Pn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: En,
  measureDroppableContainers: Pn,
  windowRect: null,
  measuringScheduled: !1
}, ra = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Pn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Pn
}, pn = /* @__PURE__ */ Ge(ra), ia = /* @__PURE__ */ Ge(Gd);
function Vd() {
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
      containers: new Jt()
    }
  };
}
function Zd(n, e) {
  switch (e.type) {
    case de.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case de.DragMove:
      return n.draggable.active == null ? n : {
        ...n,
        draggable: {
          ...n.draggable,
          translate: {
            x: e.coordinates.x - n.draggable.initialCoordinates.x,
            y: e.coordinates.y - n.draggable.initialCoordinates.y
          }
        }
      };
    case de.DragEnd:
    case de.DragCancel:
      return {
        ...n,
        draggable: {
          ...n.draggable,
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
    case de.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: r
      } = t, i = new Jt(n.droppable.containers);
      return i.set(r, t), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: i
        }
      };
    }
    case de.SetDroppableDisabled: {
      const {
        id: t,
        key: r,
        disabled: i
      } = e, s = n.droppable.containers.get(t);
      if (!s || r !== s.key)
        return n;
      const a = new Jt(n.droppable.containers);
      return a.set(t, {
        ...s,
        disabled: i
      }), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: a
        }
      };
    }
    case de.UnregisterDroppable: {
      const {
        id: t,
        key: r
      } = e, i = n.droppable.containers.get(t);
      if (!i || r !== i.key)
        return n;
      const s = new Jt(n.droppable.containers);
      return s.delete(t), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: s
        }
      };
    }
    default:
      return n;
  }
}
function Ud(n) {
  let {
    disabled: e
  } = n;
  const {
    active: t,
    activatorEvent: r,
    draggableNodes: i
  } = Ie(pn), s = zn(r), a = zn(t?.id);
  return j(() => {
    if (!e && !r && s && a != null) {
      if (!Qn(s) || document.activeElement === s.target)
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
          const u = jc(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, e, i, a, s]), null;
}
function sa(n, e) {
  let {
    transform: t,
    ...r
  } = e;
  return n != null && n.length ? n.reduce((i, s) => s({
    transform: i,
    ...r
  }), t) : t;
}
function qd(n) {
  return z(
    () => ({
      draggable: {
        ...En.draggable,
        ...n?.draggable
      },
      droppable: {
        ...En.droppable,
        ...n?.droppable
      },
      dragOverlay: {
        ...En.dragOverlay,
        ...n?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n?.draggable, n?.droppable, n?.dragOverlay]
  );
}
function Yd(n) {
  let {
    activeNode: e,
    measure: t,
    initialRect: r,
    config: i = !0
  } = n;
  const s = F(!1), {
    x: a,
    y: o
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  $e(() => {
    if (!a && !o || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !r)
      return;
    const d = e?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const c = t(d), u = Vs(c, r);
    if (a || (u.x = 0), o || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = Us(d);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, o, r, t]);
}
const nr = /* @__PURE__ */ Ge({
  ...We,
  scaleX: 1,
  scaleY: 1
});
var dt;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(dt || (dt = {}));
const Kd = /* @__PURE__ */ Jo(function(e) {
  var t, r, i, s;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: d,
    sensors: c = $d,
    collisionDetection: u = id,
    measuring: h,
    modifiers: m,
    ...g
  } = e;
  const v = Qo(Zd, void 0, Vd), [b, k] = v, [N, _] = Uc(), [D, x] = $(dt.Uninitialized), w = D === dt.Initialized, {
    draggable: {
      active: y,
      nodes: E,
      translate: P
    },
    droppable: {
      containers: T
    }
  } = b, C = y != null ? E.get(y) : null, R = F({
    initial: null,
    translated: null
  }), A = z(() => {
    var ge;
    return y != null ? {
      id: y,
      // It's possible for the active node to unmount while dragging
      data: (ge = C?.data) != null ? ge : Wd,
      rect: R
    } : null;
  }, [y, C]), V = F(null), [oe, le] = $(null), [re, ne] = $(null), te = rn(g, Object.values(g)), ve = mn("DndDescribedBy", a), Ze = z(() => T.getEnabled(), [T]), ue = qd(h), {
    droppableRects: he,
    measureDroppableContainers: we,
    measuringScheduled: Qe
  } = Ad(Ze, {
    dragging: w,
    dependencies: [P.x, P.y],
    config: ue.droppable
  }), pe = Rd(E, y), Pe = z(() => re ? Ln(re) : null, [re]), ye = to(), _e = Od(pe, ue.draggable.measure);
  Yd({
    activeNode: y != null ? E.get(y) : null,
    config: ye.layoutShiftCompensation,
    initialRect: _e,
    measure: ue.draggable.measure
  });
  const X = Di(pe, ue.draggable.measure, _e), et = Di(pe ? pe.parentElement : null), Ce = F({
    activatorEvent: null,
    active: null,
    activeNode: pe,
    collisionRect: null,
    collisions: null,
    droppableRects: he,
    draggableNodes: E,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: T,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Be = T.getNodeFor((t = Ce.current.over) == null ? void 0 : t.id), U = jd({
    measure: ue.dragOverlay.measure
  }), se = (r = U.nodeRef.current) != null ? r : pe, ae = w ? (i = U.rect) != null ? i : X : null, Fe = !!(U.nodeRef.current && U.rect), Ct = zd(Fe ? null : X), $t = ta(se ? xe(se) : null), Ue = Ld(w ? Be ?? pe : null), kt = Hd(Ue), xt = sa(m, {
    transform: {
      x: P.x - Ct.x,
      y: P.y - Ct.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: re,
    active: A,
    activeNodeRect: X,
    containerNodeRect: et,
    draggingNodeRect: ae,
    over: Ce.current.over,
    overlayNodeRect: U.rect,
    scrollableAncestors: Ue,
    scrollableAncestorRects: kt,
    windowRect: $t
  }), vn = Pe ? Ot(Pe, P) : null, yn = Pd(Ue), sr = Ri(yn), bn = Ri(yn, [X]), tt = Ot(xt, sr), Et = ae ? od(ae, xt) : null, Wt = A && Et ? u({
    active: A,
    collisionRect: Et,
    droppableRects: he,
    droppableContainers: Ze,
    pointerCoordinates: vn
  }) : null, ii = Gs(Wt, "id"), [st, si] = $(null), Ka = Fe ? xt : Ot(xt, bn), Xa = sd(Ka, (s = st?.rect) != null ? s : null, X), ar = F(null), ai = Y(
    (ge, Ee) => {
      let {
        sensor: Se,
        options: at
      } = Ee;
      if (V.current == null)
        return;
      const Ae = E.get(V.current);
      if (!Ae)
        return;
      const De = ge.nativeEvent, qe = new Se({
        active: V.current,
        activeNode: Ae,
        event: De,
        options: at,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Ce,
        onAbort(me) {
          if (!E.get(me))
            return;
          const {
            onDragAbort: Ye
          } = te.current, nt = {
            id: me
          };
          Ye?.(nt), N({
            type: "onDragAbort",
            event: nt
          });
        },
        onPending(me, ot, Ye, nt) {
          if (!E.get(me))
            return;
          const {
            onDragPending: Vt
          } = te.current, lt = {
            id: me,
            constraint: ot,
            initialCoordinates: Ye,
            offset: nt
          };
          Vt?.(lt), N({
            type: "onDragPending",
            event: lt
          });
        },
        onStart(me) {
          const ot = V.current;
          if (ot == null)
            return;
          const Ye = E.get(ot);
          if (!Ye)
            return;
          const {
            onDragStart: nt
          } = te.current, Gt = {
            activatorEvent: De,
            active: {
              id: ot,
              data: Ye.data,
              rect: R
            }
          };
          xn(() => {
            nt?.(Gt), x(dt.Initializing), k({
              type: de.DragStart,
              initialCoordinates: me,
              active: ot
            }), N({
              type: "onDragStart",
              event: Gt
            }), le(ar.current), ne(De);
          });
        },
        onMove(me) {
          k({
            type: de.DragMove,
            coordinates: me
          });
        },
        onEnd: St(de.DragEnd),
        onCancel: St(de.DragCancel)
      });
      ar.current = qe;
      function St(me) {
        return async function() {
          const {
            active: Ye,
            collisions: nt,
            over: Gt,
            scrollAdjustedTranslate: Vt
          } = Ce.current;
          let lt = null;
          if (Ye && Vt) {
            const {
              cancelDrop: Zt
            } = te.current;
            lt = {
              activatorEvent: De,
              active: Ye,
              collisions: nt,
              delta: Vt,
              over: Gt
            }, me === de.DragEnd && typeof Zt == "function" && await Promise.resolve(Zt(lt)) && (me = de.DragCancel);
          }
          V.current = null, xn(() => {
            k({
              type: me
            }), x(dt.Uninitialized), si(null), le(null), ne(null), ar.current = null;
            const Zt = me === de.DragEnd ? "onDragEnd" : "onDragCancel";
            if (lt) {
              const or = te.current[Zt];
              or?.(lt), N({
                type: Zt,
                event: lt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [E]
  ), Ja = Y((ge, Ee) => (Se, at) => {
    const Ae = Se.nativeEvent, De = E.get(at);
    if (
      // Another sensor is already instantiating
      V.current !== null || // No active draggable
      !De || // Event has already been captured
      Ae.dndKit || Ae.defaultPrevented
    )
      return;
    const qe = {
      active: De
    };
    ge(Se, Ee.options, qe) === !0 && (Ae.dndKit = {
      capturedBy: Ee.sensor
    }, V.current = at, ai(Se, Ee));
  }, [E, ai]), oi = Td(c, Ja);
  Bd(c), $e(() => {
    X && D === dt.Initializing && x(dt.Initialized);
  }, [X, D]), j(
    () => {
      const {
        onDragMove: ge
      } = te.current, {
        active: Ee,
        activatorEvent: Se,
        collisions: at,
        over: Ae
      } = Ce.current;
      if (!Ee || !Se)
        return;
      const De = {
        active: Ee,
        activatorEvent: Se,
        collisions: at,
        delta: {
          x: tt.x,
          y: tt.y
        },
        over: Ae
      };
      xn(() => {
        ge?.(De), N({
          type: "onDragMove",
          event: De
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tt.x, tt.y]
  ), j(
    () => {
      const {
        active: ge,
        activatorEvent: Ee,
        collisions: Se,
        droppableContainers: at,
        scrollAdjustedTranslate: Ae
      } = Ce.current;
      if (!ge || V.current == null || !Ee || !Ae)
        return;
      const {
        onDragOver: De
      } = te.current, qe = at.get(ii), St = qe && qe.rect.current ? {
        id: qe.id,
        rect: qe.rect.current,
        data: qe.data,
        disabled: qe.disabled
      } : null, me = {
        active: ge,
        activatorEvent: Ee,
        collisions: Se,
        delta: {
          x: Ae.x,
          y: Ae.y
        },
        over: St
      };
      xn(() => {
        si(St), De?.(me), N({
          type: "onDragOver",
          event: me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ii]
  ), $e(() => {
    Ce.current = {
      activatorEvent: re,
      active: A,
      activeNode: pe,
      collisionRect: Et,
      collisions: Wt,
      droppableRects: he,
      draggableNodes: E,
      draggingNode: se,
      draggingNodeRect: ae,
      droppableContainers: T,
      over: st,
      scrollableAncestors: Ue,
      scrollAdjustedTranslate: tt
    }, R.current = {
      initial: ae,
      translated: Et
    };
  }, [A, pe, Wt, Et, E, se, ae, he, T, st, Ue, tt]), Sd({
    ...ye,
    delta: P,
    draggingRect: Et,
    pointerCoordinates: vn,
    scrollableAncestors: Ue,
    scrollableAncestorRects: kt
  });
  const Qa = z(() => ({
    active: A,
    activeNode: pe,
    activeNodeRect: X,
    activatorEvent: re,
    collisions: Wt,
    containerNodeRect: et,
    dragOverlay: U,
    draggableNodes: E,
    droppableContainers: T,
    droppableRects: he,
    over: st,
    measureDroppableContainers: we,
    scrollableAncestors: Ue,
    scrollableAncestorRects: kt,
    measuringConfiguration: ue,
    measuringScheduled: Qe,
    windowRect: $t
  }), [A, pe, X, re, Wt, et, U, E, T, he, st, we, Ue, kt, ue, Qe, $t]), eo = z(() => ({
    activatorEvent: re,
    activators: oi,
    active: A,
    activeNodeRect: X,
    ariaDescribedById: {
      draggable: ve
    },
    dispatch: k,
    draggableNodes: E,
    over: st,
    measureDroppableContainers: we
  }), [re, oi, A, X, k, ve, E, st, we]);
  return Z.createElement(Ws.Provider, {
    value: _
  }, Z.createElement(pn.Provider, {
    value: eo
  }, Z.createElement(ia.Provider, {
    value: Qa
  }, Z.createElement(nr.Provider, {
    value: Xa
  }, d)), Z.createElement(Ud, {
    disabled: o?.restoreFocus === !1
  })), Z.createElement(Kc, {
    ...o,
    hiddenTextDescribedById: ve
  }));
  function to() {
    const ge = oe?.autoScrollEnabled === !1, Ee = typeof l == "object" ? l.enabled === !1 : l === !1, Se = w && !ge && !Ee;
    return typeof l == "object" ? {
      ...l,
      enabled: Se
    } : {
      enabled: Se
    };
  }
}), Xd = /* @__PURE__ */ Ge(null), Ai = "button", Jd = "Draggable";
function Qd(n) {
  let {
    id: e,
    data: t,
    disabled: r = !1,
    attributes: i
  } = n;
  const s = mn(Jd), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: h
  } = Ie(pn), {
    role: m = Ai,
    roleDescription: g = "draggable",
    tabIndex: v = 0
  } = i ?? {}, b = l?.id === e, k = Ie(b ? nr : Xd), [N, _] = In(), [D, x] = In(), w = Fd(a, e), y = rn(t);
  $e(
    () => (u.set(e, {
      id: e,
      key: s,
      node: N,
      activatorNode: D,
      data: y
    }), () => {
      const P = u.get(e);
      P && P.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const E = z(() => ({
    role: m,
    tabIndex: v,
    "aria-disabled": r,
    "aria-pressed": b && m === Ai ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": c.draggable
  }), [r, m, v, b, g, c.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: d,
    attributes: E,
    isDragging: b,
    listeners: r ? void 0 : w,
    node: N,
    over: h,
    setNodeRef: _,
    setActivatorNodeRef: x,
    transform: k
  };
}
function aa() {
  return Ie(ia);
}
const eu = "Droppable", tu = {
  timeout: 25
};
function nu(n) {
  let {
    data: e,
    disabled: t = !1,
    id: r,
    resizeObserverConfig: i
  } = n;
  const s = mn(eu), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: d
  } = Ie(pn), c = F({
    disabled: t
  }), u = F(!1), h = F(null), m = F(null), {
    disabled: g,
    updateMeasurementsFor: v,
    timeout: b
  } = {
    ...tu,
    ...i
  }, k = rn(v ?? r), N = Y(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        d(Array.isArray(k.current) ? k.current : [k.current]), m.current = null;
      }, b);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [b]
  ), _ = tr({
    callback: N,
    disabled: g || !a
  }), D = Y((E, P) => {
    _ && (P && (_.unobserve(P), u.current = !1), E && _.observe(E));
  }, [_]), [x, w] = In(D), y = rn(e);
  return j(() => {
    !_ || !x.current || (_.disconnect(), u.current = !1, _.observe(x.current));
  }, [x, _]), j(
    () => (o({
      type: de.RegisterDroppable,
      element: {
        id: r,
        key: s,
        disabled: t,
        node: x,
        rect: h,
        data: y
      }
    }), () => o({
      type: de.UnregisterDroppable,
      key: s,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), j(() => {
    t !== c.current.disabled && (o({
      type: de.SetDroppableDisabled,
      id: r,
      key: s,
      disabled: t
    }), c.current.disabled = t);
  }, [r, s, t, o]), {
    active: a,
    rect: h,
    isOver: l?.id === r,
    node: x,
    over: l,
    setNodeRef: w
  };
}
function ru(n) {
  let {
    animation: e,
    children: t
  } = n;
  const [r, i] = $(null), [s, a] = $(null), o = zn(t);
  return !t && !r && o && i(o), $e(() => {
    if (!s)
      return;
    const l = r?.key, d = r?.props.id;
    if (l == null || d == null) {
      i(null);
      return;
    }
    Promise.resolve(e(d, s)).then(() => {
      i(null);
    });
  }, [e, r, s]), Z.createElement(Z.Fragment, null, t, r ? el(r, {
    ref: a
  }) : null);
}
const iu = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function su(n) {
  let {
    children: e
  } = n;
  return Z.createElement(pn.Provider, {
    value: ra
  }, Z.createElement(nr.Provider, {
    value: iu
  }, e));
}
const au = {
  position: "fixed",
  touchAction: "none"
}, ou = (n) => Qn(n) ? "transform 250ms ease" : void 0, lu = /* @__PURE__ */ ke((n, e) => {
  let {
    as: t,
    activatorEvent: r,
    adjustScale: i,
    children: s,
    className: a,
    rect: o,
    style: l,
    transform: d,
    transition: c = ou
  } = n;
  if (!o)
    return null;
  const u = i ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...au,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: mt.Transform.toString(u),
    transformOrigin: i && r ? Qc(r, o) : void 0,
    transition: typeof c == "function" ? c(r) : c,
    ...l
  };
  return Z.createElement(t, {
    className: a,
    style: h,
    ref: e
  }, s);
}), cu = (n) => (e) => {
  let {
    active: t,
    dragOverlay: r
  } = e;
  const i = {}, {
    styles: s,
    className: a
  } = n;
  if (s != null && s.active)
    for (const [o, l] of Object.entries(s.active))
      l !== void 0 && (i[o] = t.node.style.getPropertyValue(o), t.node.style.setProperty(o, l));
  if (s != null && s.dragOverlay)
    for (const [o, l] of Object.entries(s.dragOverlay))
      l !== void 0 && r.node.style.setProperty(o, l);
  return a != null && a.active && t.node.classList.add(a.active), a != null && a.dragOverlay && r.node.classList.add(a.dragOverlay), function() {
    for (const [l, d] of Object.entries(i))
      t.node.style.setProperty(l, d);
    a != null && a.active && t.node.classList.remove(a.active);
  };
}, du = (n) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = n;
  return [{
    transform: mt.Transform.toString(e)
  }, {
    transform: mt.Transform.toString(t)
  }];
}, uu = {
  duration: 250,
  easing: "ease",
  keyframes: du,
  sideEffects: /* @__PURE__ */ cu({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function hu(n) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: r,
    measuringConfiguration: i
  } = n;
  return Jn((s, a) => {
    if (e === null)
      return;
    const o = t.get(s);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const d = na(a);
    if (!d)
      return;
    const {
      transform: c
    } = xe(a).getComputedStyle(a), u = Zs(c);
    if (!u)
      return;
    const h = typeof e == "function" ? e : fu(e);
    return Qs(l, i.draggable.measure), h({
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
      droppableContainers: r,
      measuringConfiguration: i,
      transform: u
    });
  });
}
function fu(n) {
  const {
    duration: e,
    easing: t,
    sideEffects: r,
    keyframes: i
  } = {
    ...uu,
    ...n
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
    }, m = i({
      ...d,
      active: a,
      dragOverlay: o,
      transform: {
        initial: l,
        final: h
      }
    }), [g] = m, v = m[m.length - 1];
    if (JSON.stringify(g) === JSON.stringify(v))
      return;
    const b = r?.({
      active: a,
      dragOverlay: o,
      ...d
    }), k = o.node.animate(m, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((N) => {
      k.onfinish = () => {
        b?.(), N();
      };
    });
  };
}
let Oi = 0;
function mu(n) {
  return z(() => {
    if (n != null)
      return Oi++, Oi;
  }, [n]);
}
const pu = /* @__PURE__ */ Z.memo((n) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: r,
    style: i,
    transition: s,
    modifiers: a,
    wrapperElement: o = "div",
    className: l,
    zIndex: d = 999
  } = n;
  const {
    activatorEvent: c,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggableNodes: g,
    droppableContainers: v,
    dragOverlay: b,
    over: k,
    measuringConfiguration: N,
    scrollableAncestors: _,
    scrollableAncestorRects: D,
    windowRect: x
  } = aa(), w = Ie(nr), y = mu(u?.id), E = sa(a, {
    activatorEvent: c,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: b.rect,
    over: k,
    overlayNodeRect: b.rect,
    scrollableAncestors: _,
    scrollableAncestorRects: D,
    transform: w,
    windowRect: x
  }), P = Kr(h), T = hu({
    config: r,
    draggableNodes: g,
    droppableContainers: v,
    measuringConfiguration: N
  }), C = P ? b.setRef : void 0;
  return Z.createElement(su, null, Z.createElement(ru, {
    animation: T
  }, u && y ? Z.createElement(lu, {
    key: y,
    id: u.id,
    ref: C,
    as: o,
    activatorEvent: c,
    adjustScale: e,
    className: l,
    transition: s,
    rect: P,
    style: {
      zIndex: d,
      ...i
    },
    transform: E
  }, t) : null));
});
function Xr(n, e, t) {
  const r = n.slice();
  return r.splice(t < 0 ? r.length + t : t, 0, r.splice(e, 1)[0]), r;
}
function gu(n, e) {
  return n.reduce((t, r, i) => {
    const s = e.get(r);
    return s && (t[i] = s), t;
  }, Array(n.length));
}
function Cn(n) {
  return n !== null && n >= 0;
}
function vu(n, e) {
  if (n === e)
    return !0;
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function yu(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const oa = (n) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: r,
    index: i
  } = n;
  const s = Xr(e, r, t), a = e[i], o = s[i];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, la = "Sortable", ca = /* @__PURE__ */ Z.createContext({
  activeIndex: -1,
  containerId: la,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: oa,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function bu(n) {
  let {
    children: e,
    id: t,
    items: r,
    strategy: i = oa,
    disabled: s = !1
  } = n;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: d,
    measureDroppableContainers: c
  } = aa(), u = mn(la, t), h = o.rect !== null, m = z(() => r.map((w) => typeof w == "object" && "id" in w ? w.id : w), [r]), g = a != null, v = a ? m.indexOf(a.id) : -1, b = d ? m.indexOf(d.id) : -1, k = F(m), N = !vu(m, k.current), _ = b !== -1 && v === -1 || N, D = yu(s);
  $e(() => {
    N && g && c(m);
  }, [N, m, g, c]), j(() => {
    k.current = m;
  }, [m]);
  const x = z(
    () => ({
      activeIndex: v,
      containerId: u,
      disabled: D,
      disableTransforms: _,
      items: m,
      overIndex: b,
      useDragOverlay: h,
      sortedRects: gu(m, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, u, D.draggable, D.droppable, _, m, b, l, h, i]
  );
  return Z.createElement(ca.Provider, {
    value: x
  }, e);
}
const xu = (n) => {
  let {
    id: e,
    items: t,
    activeIndex: r,
    overIndex: i
  } = n;
  return Xr(t, r, i).indexOf(e);
}, wu = (n) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: r,
    index: i,
    items: s,
    newIndex: a,
    previousItems: o,
    previousContainerId: l,
    transition: d
  } = n;
  return !d || !r || o !== s && i === a ? !1 : t ? !0 : a !== i && e === l;
}, _u = {
  duration: 200,
  easing: "ease"
}, da = "transform", Cu = /* @__PURE__ */ mt.Transition.toString({
  property: da,
  duration: 0,
  easing: "linear"
}), ku = {
  roleDescription: "sortable"
};
function Eu(n) {
  let {
    disabled: e,
    index: t,
    node: r,
    rect: i
  } = n;
  const [s, a] = $(null), o = F(t);
  return $e(() => {
    if (!e && t !== o.current && r.current) {
      const l = i.current;
      if (l) {
        const d = jt(r.current, {
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
  }, [e, t, r, i]), j(() => {
    s && a(null);
  }, [s]), s;
}
function Su(n) {
  let {
    animateLayoutChanges: e = wu,
    attributes: t,
    disabled: r,
    data: i,
    getNewIndex: s = xu,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: d = _u
  } = n;
  const {
    items: c,
    containerId: u,
    activeIndex: h,
    disabled: m,
    disableTransforms: g,
    sortedRects: v,
    overIndex: b,
    useDragOverlay: k,
    strategy: N
  } = Ie(ca), _ = Du(r, m), D = c.indexOf(a), x = z(() => ({
    sortable: {
      containerId: u,
      index: D,
      items: c
    },
    ...i
  }), [u, i, D, c]), w = z(() => c.slice(c.indexOf(a)), [c, a]), {
    rect: y,
    node: E,
    isOver: P,
    setNodeRef: T
  } = nu({
    id: a,
    data: x,
    disabled: _.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: w,
      ...l
    }
  }), {
    active: C,
    activatorEvent: R,
    activeNodeRect: A,
    attributes: V,
    setNodeRef: oe,
    listeners: le,
    isDragging: re,
    over: ne,
    setActivatorNodeRef: te,
    transform: ve
  } = Qd({
    id: a,
    data: x,
    attributes: {
      ...ku,
      ...t
    },
    disabled: _.draggable
  }), Ze = Pc(T, oe), ue = !!C, he = ue && !g && Cn(h) && Cn(b), we = !k && re, Qe = we && he ? ve : null, Pe = he ? Qe ?? (o ?? N)({
    rects: v,
    activeNodeRect: A,
    activeIndex: h,
    overIndex: b,
    index: D
  }) : null, ye = Cn(h) && Cn(b) ? s({
    id: a,
    items: c,
    activeIndex: h,
    overIndex: b
  }) : D, _e = C?.id, X = F({
    activeId: _e,
    items: c,
    newIndex: ye,
    containerId: u
  }), et = c !== X.current.items, Ce = e({
    active: C,
    containerId: u,
    isDragging: re,
    isSorting: ue,
    id: a,
    index: D,
    items: c,
    newIndex: X.current.newIndex,
    previousItems: X.current.items,
    previousContainerId: X.current.containerId,
    transition: d,
    wasDragging: X.current.activeId != null
  }), Be = Eu({
    disabled: !Ce,
    index: D,
    node: E,
    rect: y
  });
  return j(() => {
    ue && X.current.newIndex !== ye && (X.current.newIndex = ye), u !== X.current.containerId && (X.current.containerId = u), c !== X.current.items && (X.current.items = c);
  }, [ue, ye, u, c]), j(() => {
    if (_e === X.current.activeId)
      return;
    if (_e != null && X.current.activeId == null) {
      X.current.activeId = _e;
      return;
    }
    const se = setTimeout(() => {
      X.current.activeId = _e;
    }, 50);
    return () => clearTimeout(se);
  }, [_e]), {
    active: C,
    activeIndex: h,
    attributes: V,
    data: x,
    rect: y,
    index: D,
    newIndex: ye,
    items: c,
    isOver: P,
    isSorting: ue,
    isDragging: re,
    listeners: le,
    node: E,
    overIndex: b,
    over: ne,
    setNodeRef: Ze,
    setActivatorNodeRef: te,
    setDroppableNodeRef: T,
    setDraggableNodeRef: oe,
    transform: Be ?? Pe,
    transition: U()
  };
  function U() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Be || // Or to prevent items jumping to back to their "new" position when items change
      et && X.current.newIndex === D
    )
      return Cu;
    if (!(we && !Qn(R) || !d) && (ue || Ce))
      return mt.Transition.toString({
        ...d,
        property: da
      });
  }
}
function Du(n, e) {
  var t, r;
  return typeof n == "boolean" ? {
    draggable: n,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (t = n?.draggable) != null ? t : e.draggable,
    droppable: (r = n?.droppable) != null ? r : e.droppable
  };
}
function Fn(n) {
  if (!n)
    return !1;
  const e = n.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const Nu = [K.Down, K.Right, K.Up, K.Left], Ru = (n, e) => {
  let {
    context: {
      active: t,
      collisionRect: r,
      droppableRects: i,
      droppableContainers: s,
      over: a,
      scrollableAncestors: o
    }
  } = e;
  if (Nu.includes(n.code)) {
    if (n.preventDefault(), !t || !r)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = i.get(u.id);
      if (h)
        switch (n.code) {
          case K.Down:
            r.top < h.top && l.push(u);
            break;
          case K.Up:
            r.top > h.top && l.push(u);
            break;
          case K.Left:
            r.left > h.left && l.push(u);
            break;
          case K.Right:
            r.left < h.left && l.push(u);
            break;
        }
    });
    const d = nd({
      collisionRect: r,
      droppableRects: i,
      droppableContainers: l
    });
    let c = Gs(d, "id");
    if (c === a?.id && d.length > 1 && (c = d[1].id), c != null) {
      const u = s.get(t.id), h = s.get(c), m = h ? i.get(h.id) : null, g = h?.node.current;
      if (g && m && u && h) {
        const b = er(g).some((w, y) => o[y] !== w), k = ua(u, h), N = Tu(u, h), _ = b || !k ? {
          x: 0,
          y: 0
        } : {
          x: N ? r.width - m.width : 0,
          y: N ? r.height - m.height : 0
        }, D = {
          x: m.left,
          y: m.top
        };
        return _.x && _.y ? D : sn(D, _);
      }
    }
  }
};
function ua(n, e) {
  return !Fn(n) || !Fn(e) ? !1 : n.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Tu(n, e) {
  return !Fn(n) || !Fn(e) || !ua(n, e) ? !1 : n.data.current.sortable.index < e.data.current.sortable.index;
}
const Mi = ({ id: n, children: e }) => {
  const { attributes: t, listeners: r, setNodeRef: i, transform: s, transition: a } = Su({
    id: n
  }), o = {
    transform: mt.Translate.toString(s),
    transition: a,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return f("div", {
    ref: i,
    style: o,
    ...t,
    ...r,
    children: e
  });
}, Jr = ({ blocks: n, sortable: e = !1, onSort: t = () => {
}, main: r = !1 }) => {
  const [i, s] = $([]);
  ts(() => {
    s(n.map((u, h) => ({
      id: u.id ?? h.toString(),
      render: u.render
    })));
  }, [n]);
  const [a, o] = $(null), l = Xc(xi(Yr), xi(Ur, {
    coordinateGetter: Ru
  })), d = (u) => {
    o(u.active.id);
  }, c = (u) => {
    const { active: h, over: m } = u;
    o(null), m && h.id !== m.id && s((g) => {
      const v = g.findIndex((k) => k.id === h.id), b = g.findIndex((k) => k.id === m.id);
      return Xr(g, v, b);
    });
  };
  return f("div", {
    className: J("flex flex-wrap items-stretch gap-4", r && "flex-1"),
    children: M(Kd, {
      sensors: l,
      onDragStart: d,
      onDragEnd: c,
      children: [f(bu, {
        items: i,
        children: i.map((u) => f(Mi, {
          id: u.id,
          children: u.render
        }, u.id))
      }), f(pu, {
        children: a ? f(Mi, {
          id: a,
          children: i.find((u) => u.id === a)?.render
        }) : null
      })]
    })
  });
};
Jr.displayName = "GroupMasonry";
Jr.__isPageLayoutGroup = !0;
const Au = ke(function({ children: e, aside: t, header: r, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Hs("Page", e, ["block", "group"]), f("div", {
    ref: s,
    className: "h-full",
    children: M("div", {
      className: J("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [M("main", {
        className: J("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", i === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [r && f("header", {
          className: J("sticky top-0 z-30 bg-f1-background"),
          children: r
        }), f("div", {
          className: "flex-1",
          children: e
        })]
      }), t && f("aside", {
        className: J("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", i === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), bm = {
  Page: Re("Page", Au),
  Block: Re("Block", Kn),
  BlockContent: Re("BlockContent", Ic),
  Group: Re("Group", Wr),
  GroupGrid: Re("GroupGrid", Yn),
  GroupMasonry: Re("GroupMasonry", Jr)
}, xm = ze({
  name: "StandardLayout",
  type: "layout"
}, Ts), wm = ze({
  name: "TwoColumnLayout",
  type: "layout"
}, ac), _m = ze({
  name: "HomeLayout",
  type: "layout"
}, ic);
function Mt(n) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mt(n);
}
function Ou(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Mu(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, ma(r.key), r);
  }
}
function Iu(n, e, t) {
  return e && Mu(n.prototype, e), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function zu(n, e, t) {
  return e = Hn(e), Lu(n, ha() ? Reflect.construct(e, t || [], Hn(n).constructor) : e.apply(n, t));
}
function Lu(n, e) {
  if (e && (Mt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Pu(n);
}
function Pu(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function ha() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ha = function() {
    return !!n;
  })();
}
function Hn(n) {
  return Hn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Hn(n);
}
function Bu(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && kr(n, e);
}
function kr(n, e) {
  return kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, kr(n, e);
}
function fa(n, e, t) {
  return e = ma(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function ma(n) {
  var e = Fu(n, "string");
  return Mt(e) == "symbol" ? e : e + "";
}
function Fu(n, e) {
  if (Mt(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (Mt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var rr = /* @__PURE__ */ (function(n) {
  function e() {
    return Ou(this, e), zu(this, e, arguments);
  }
  return Bu(e, n), Iu(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(Z.Component);
fa(rr, "displayName", "ZAxis");
fa(rr, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Hu = ["option", "isActive"];
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Qt.apply(this, arguments);
}
function ju(n, e) {
  if (n == null) return {};
  var t = $u(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function $u(n, e) {
  if (n == null) return {};
  var t = {};
  for (var r in n)
    if (Object.prototype.hasOwnProperty.call(n, r)) {
      if (e.indexOf(r) >= 0) continue;
      t[r] = n[r];
    }
  return t;
}
function Wu(n) {
  var e = n.option, t = n.isActive, r = ju(n, Hu);
  return typeof e == "string" ? /* @__PURE__ */ Z.createElement(ui, Qt({
    option: /* @__PURE__ */ Z.createElement(il, Qt({
      type: e
    }, r)),
    isActive: t,
    shapeType: "symbols"
  }, r)) : /* @__PURE__ */ Z.createElement(ui, Qt({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, r));
}
function It(n) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, It(n);
}
function en() {
  return en = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, en.apply(this, arguments);
}
function Ii(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Oe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ii(Object(t), !0).forEach(function(r) {
      ht(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ii(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Gu(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function zi(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, ga(r.key), r);
  }
}
function Vu(n, e, t) {
  return e && zi(n.prototype, e), t && zi(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Zu(n, e, t) {
  return e = jn(e), Uu(n, pa() ? Reflect.construct(e, t || [], jn(n).constructor) : e.apply(n, t));
}
function Uu(n, e) {
  if (e && (It(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qu(n);
}
function qu(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function pa() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pa = function() {
    return !!n;
  })();
}
function jn(n) {
  return jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, jn(n);
}
function Yu(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Er(n, e);
}
function Er(n, e) {
  return Er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Er(n, e);
}
function ht(n, e, t) {
  return e = ga(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function ga(n) {
  var e = Ku(n, "string");
  return It(e) == "symbol" ? e : e + "";
}
function Ku(n, e) {
  if (It(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (It(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var gn = /* @__PURE__ */ (function(n) {
  function e() {
    var t;
    Gu(this, e);
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return t = Zu(this, e, [].concat(i)), ht(t, "state", {
      isAnimationFinished: !1
    }), ht(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), ht(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), ht(t, "id", ul("recharts-scatter-")), t;
  }
  return Yu(e, n), Vu(e, [{
    key: "renderSymbolsStatically",
    value: function(r) {
      var i = this, s = this.props, a = s.shape, o = s.activeShape, l = s.activeIndex, d = lr(this.props, !1);
      return r.map(function(c, u) {
        var h = l === u, m = h ? o : a, g = Oe(Oe({}, d), c);
        return /* @__PURE__ */ Z.createElement(Ut, en({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c?.cx, "-").concat(c?.cy, "-").concat(c?.size, "-").concat(u)
        }, sl(i.props, c, u), {
          role: "img"
        }), /* @__PURE__ */ Z.createElement(Wu, en({
          option: m,
          isActive: h,
          key: "symbol-".concat(u)
        }, g)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var r = this, i = this.props, s = i.points, a = i.isAnimationActive, o = i.animationBegin, l = i.animationDuration, d = i.animationEasing, c = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ Z.createElement(al, {
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
        var m = h.t, g = s.map(function(v, b) {
          var k = u && u[b];
          if (k) {
            var N = wn(k.cx, v.cx), _ = wn(k.cy, v.cy), D = wn(k.size, v.size);
            return Oe(Oe({}, v), {}, {
              cx: N(m),
              cy: _(m),
              size: D(m)
            });
          }
          var x = wn(0, v.size);
          return Oe(Oe({}, v), {}, {
            size: x(m)
          });
        });
        return /* @__PURE__ */ Z.createElement(Ut, null, r.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var r = this.props, i = r.points, s = r.isAnimationActive, a = this.state.prevPoints;
      return s && i && i.length && (!a || !ys(a, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var r = this.props.isAnimationActive;
      if (r && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, a = i.xAxis, o = i.yAxis, l = i.children, d = bs(l, ol);
      return d ? d.map(function(c, u) {
        var h = c.props, m = h.direction, g = h.dataKey;
        return /* @__PURE__ */ Z.cloneElement(c, {
          key: "".concat(m, "-").concat(g, "-").concat(s[u]),
          data: s,
          xAxis: a,
          yAxis: o,
          layout: m === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(b, k) {
            return {
              x: b.cx,
              y: b.cy,
              value: m === "x" ? +b.node.x : +b.node.y,
              errorVal: kn(b, k)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var r = this.props, i = r.points, s = r.line, a = r.lineType, o = r.lineJointType, l = lr(this.props, !1), d = lr(s, !1), c, u;
      if (a === "joint")
        c = i.map(function(_) {
          return {
            x: _.cx,
            y: _.cy
          };
        });
      else if (a === "fitting") {
        var h = ll(i), m = h.xmin, g = h.xmax, v = h.a, b = h.b, k = function(D) {
          return v * D + b;
        };
        c = [{
          x: m,
          y: k(m)
        }, {
          x: g,
          y: k(g)
        }];
      }
      var N = Oe(Oe(Oe({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, d), {}, {
        points: c
      });
      return /* @__PURE__ */ Z.isValidElement(s) ? u = /* @__PURE__ */ Z.cloneElement(s, N) : cl(s) ? u = s(N) : u = /* @__PURE__ */ Z.createElement(dl, en({}, N, {
        type: o
      })), /* @__PURE__ */ Z.createElement(Ut, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, s = r.points, a = r.line, o = r.className, l = r.xAxis, d = r.yAxis, c = r.left, u = r.top, h = r.width, m = r.height, g = r.id, v = r.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, k = lo("recharts-scatter", o), N = l && l.allowDataOverflow, _ = d && d.allowDataOverflow, D = N || _, x = Nt(g) ? this.id : g;
      return /* @__PURE__ */ Z.createElement(Ut, {
        className: k,
        clipPath: D ? "url(#clipPath-".concat(x, ")") : null
      }, N || _ ? /* @__PURE__ */ Z.createElement("defs", null, /* @__PURE__ */ Z.createElement("clipPath", {
        id: "clipPath-".concat(x)
      }, /* @__PURE__ */ Z.createElement("rect", {
        x: N ? c : c - h / 2,
        y: _ ? u : u - m / 2,
        width: N ? h : h * 2,
        height: _ ? m : m * 2
      }))) : null, a && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ Z.createElement(Ut, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || b) && xs.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, i) {
      return r.animationId !== i.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: i.curPoints
      } : r.points !== i.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }]);
})(tl);
ht(gn, "displayName", "Scatter");
ht(gn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !hl.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
ht(gn, "getComposedData", function(n) {
  var e = n.xAxis, t = n.yAxis, r = n.zAxis, i = n.item, s = n.displayedData, a = n.xAxisTicks, o = n.yAxisTicks, l = n.offset, d = i.props.tooltipType, c = bs(i.props.children, fl), u = Nt(e.dataKey) ? i.props.dataKey : e.dataKey, h = Nt(t.dataKey) ? i.props.dataKey : t.dataKey, m = r && r.dataKey, g = r ? r.range : rr.defaultProps.range, v = g && g[0], b = e.scale.bandwidth ? e.scale.bandwidth() : 0, k = t.scale.bandwidth ? t.scale.bandwidth() : 0, N = s.map(function(_, D) {
    var x = kn(_, u), w = kn(_, h), y = !Nt(m) && kn(_, m) || "-", E = [{
      name: Nt(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: x,
      payload: _,
      dataKey: u,
      type: d
    }, {
      name: Nt(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: w,
      payload: _,
      dataKey: h,
      type: d
    }];
    y !== "-" && E.push({
      name: r.name || r.dataKey,
      unit: r.unit || "",
      value: y,
      payload: _,
      dataKey: m,
      type: d
    });
    var P = hi({
      axis: e,
      ticks: a,
      bandSize: b,
      entry: _,
      index: D,
      dataKey: u
    }), T = hi({
      axis: t,
      ticks: o,
      bandSize: k,
      entry: _,
      index: D,
      dataKey: h
    }), C = y !== "-" ? r.scale(y) : v, R = Math.sqrt(Math.max(C, 0) / Math.PI);
    return Oe(Oe({}, _), {}, {
      cx: P,
      cy: T,
      x: P - R,
      y: T - R,
      xAxis: e,
      yAxis: t,
      zAxis: r,
      width: 2 * R,
      height: 2 * R,
      size: C,
      node: {
        x,
        y: w,
        z: y
      },
      tooltipPayload: E,
      tooltipPosition: {
        x: P,
        y: T
      },
      payload: _
    }, c && c[D] && c[D].props);
  });
  return Oe({
    points: N
  }, l);
});
var Xu = ml({
  chartName: "ComposedChart",
  GraphicalChild: [ws, pl, _s, gn],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Cs
  }, {
    axisType: "yAxis",
    AxisComp: xr
  }, {
    axisType: "zAxis",
    AxisComp: rr
  }],
  formatAxisMap: gl
});
const Ju = (n) => {
  const e = (t) => {
    const { cx: r, cy: i, fill: s, payload: a } = t, o = () => {
      if (!a) return "-";
      if (a[n] !== void 0)
        return a[n];
      for (const [l, d] of Object.entries(a))
        if (typeof d == "number" && l !== "x")
          return d;
      return "-";
    };
    return f("circle", {
      cx: r,
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
  return e.displayName = `Scatter-${n}`, e;
}, Qu = ({ dataConfig: n, data: e, xAxis: t, yAxis: r = {
  hide: !0
}, label: i = !1, hideTooltip: s = !1, hideGrid: a = !1, aspect: o, legend: l, showValueUnderLabel: d = !1, bar: c, line: u, scatter: h, onClick: m }, g) => {
  const v = vl(e), b = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], k = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], N = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], _ = [...b, ...k, ...N], D = Math.max(...v.flatMap((y) => _.map((E) => yl(r?.tickFormatter ? r.tickFormatter(`${y[E]}`) : `${y[E]}`)))), x = [c, u, h].filter((y) => y?.axisPosition === "left"), w = [c, u, h].filter((y) => y?.axisPosition === "right");
  return f(bl, {
    config: n,
    ref: g,
    aspect: o,
    children: M(Xu, {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: r && !r.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: d ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (y) => {
        if (!m || !y.activeLabel || !y.activePayload)
          return;
        const E = {
          label: y.activeLabel,
          values: {}
        };
        for (const P of y.activePayload)
          E.values[P.name] = P.value;
        m(E);
      },
      children: [!s && f(xl, {
        ...wl(),
        content: f(_l, {
          yAxisFormatter: r.tickFormatter
        })
      }), !a && f(Cl, {
        ...kl()
      }), x.length > 0 && f(xr, {
        ...fi(r),
        tick: !0,
        width: r.width ?? D + 20 + (w.length > 0 && x[0]?.axisLabel ? 20 : 0),
        hide: r.hide || x.some((y) => y?.hideAxis),
        label: x[0]?.axisLabel ? {
          value: x[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), w.length > 0 && f(xr, {
        ...fi(r),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: r.width ?? D + 20 + (x.length > 0 && w[0]?.axisLabel ? 20 : 0),
        hide: r.hide || w.some((y) => y?.hideAxis),
        label: w[0]?.axisLabel ? {
          value: w[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), f(Cs, {
        ...El(t),
        hide: t?.hide,
        tick: d ? (y) => {
          const { x: E, y: P, payload: T } = y, C = e.find((V) => V.label === T.value)?.values || "", R = Object.keys(C).length === 1 ? Object.values(C)?.[0] : void 0, A = R !== void 0 && r.tickFormatter ? r.tickFormatter(`${R}`) : R.toLocaleString();
          return M("g", {
            transform: `translate(${E},${P})`,
            children: [f("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: T.value
            }), !!R && f("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: A
            })]
          });
        } : void 0
      }), b.map((y, E) => f(_s, {
        isAnimationActive: !1,
        dataKey: String(y),
        fill: n[y].color ? Yt(n[y].color) : cr(E),
        radius: 4,
        maxBarSize: 32,
        children: i && f(xs, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(y)}`)
      }, `bar-${String(y)}`)), k.map((y, E) => f(ws, {
        type: u?.lineType ?? "natural",
        dataKey: String(y),
        stroke: n[y].color ? Yt(n[y].color) : cr(b.length + E),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(y)}`)), N.map((y, E) => f(gn, {
        dataKey: String(y),
        fill: n[y].color ? Yt(n[y].color) : cr(b.length + k.length + E),
        r: 4,
        isAnimationActive: !1,
        yAxisId: h?.axisPosition === "right" ? "right" : void 0,
        shape: Ju(String(y))
      }, `scatter-${String(y)}`)), l && f(Sl, {
        content: f(Dl, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, eh = ks(Qu), th = ({ value: n, max: e = 100, label: t, color: r }, i) => {
  const s = r ? Yt(r) : Yt("categorical-1"), a = n / e * 100;
  return M("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [f("div", {
      className: "flex-grow",
      children: f(Nl, {
        color: s,
        value: a,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": n,
        "aria-label": `${a.toFixed(1)}%`
      })
    }), t && f("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, nh = ks(th), Cm = ze(
  {
    name: "AreaChart",
    type: "info"
  },
  Rl
), km = ze(
  {
    name: "BarChart",
    type: "info"
  },
  Tl
), Em = ze(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Al
), Sm = ze(
  {
    name: "LineChart",
    type: "info"
  },
  Ol
), Dm = ze(
  {
    name: "PieChart",
    type: "info"
  },
  Ml
), Nm = ze(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Il
), Rm = ze(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  nh
), Tm = ze(
  {
    name: "ComboChart",
    type: "info"
  },
  eh
), rh = (n) => typeof n == "boolean" || !n ? {
  show: !!n,
  invertStatus: !1
} : {
  show: n.show ?? !0,
  invertStatus: n.invertStatus ?? !1
}, va = ({ label: n, ...e }) => {
  const t = zl(), r = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = rh(e.trend), s = t(e.comparison), a = Ll(r.numericValue, r.formatterOptions), o = mi(s.numericValue), l = mi(r.numericValue), d = z(() => {
    if (!(!o || !i.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, i.show]);
  return M("div", {
    className: "flex flex-col gap-2",
    children: [n && f("div", {
      children: n
    }), M("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [f("span", {
        className: "font-bold text-2xl",
        children: a
      }), o !== void 0 && f(Pl, {
        percentage: d,
        amount: s,
        invertStatus: i.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, ih = () => M("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [f(Ke, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), M("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [f(Ke, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), f(Ke, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
va.displayName = "F0BigNumber";
const sh = ns(va, ih), Am = Re("F0BigNumber", sh), ya = {
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
}, ba = {
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
}, ah = {}, oh = {
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
}, lh = {
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
}, ch = {
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
}, dh = {
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
}, uh = {
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
}, hh = {
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
}, xa = {
  width: oh,
  height: lh,
  minWidth: ch,
  minHeight: dh,
  maxWidth: uh,
  maxHeight: hh
}, wa = {
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
}, _a = {
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
}, Ca = {
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
}, fh = {}, ka = {
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
}, Ea = {
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
}, mh = {}, ph = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, Sa = {
  overflow: ph,
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
}, gh = {}, Da = {
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
}, vh = {}, yh = {
  ...wa,
  ...Da,
  ...Ea,
  ...Ca,
  ...ka,
  ...xa,
  ...ya,
  ...ba,
  ...Sa,
  ..._a
};
function bh(n, e) {
  return e.split(" ").map((t) => `${n}:${t}`).join(" ");
}
function xh(n, e) {
  const t = [];
  for (const [r, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = yh[r];
    if (!s) continue;
    const a = s[String(i)];
    a && t.push(bh(n, a));
  }
  return t.join(" ");
}
const wh = vt({
  base: "",
  variants: {
    ...wa,
    ...Da,
    ...Ea,
    ...Ca,
    ...ka,
    ...xa,
    ...ya,
    ...ba,
    ...Sa,
    ..._a
  },
  defaultVariants: {
    ...vh,
    ...mh,
    ...fh,
    ...ah,
    ...gh
  }
}), _h = ["sm", "md", "lg", "xl"], Na = ke(({ display: n, position: e, padding: t, paddingX: r, paddingY: i, paddingTop: s, paddingBottom: a, paddingLeft: o, paddingRight: l, margin: d, marginX: c, marginY: u, marginTop: h, marginBottom: m, marginLeft: g, marginRight: v, gap: b, columns: k, rows: N, colSpan: _, colStart: D, rowSpan: x, width: w, height: y, minWidth: E, minHeight: P, maxWidth: T, maxHeight: C, background: R, borderColor: A, border: V, borderTop: oe, borderBottom: le, borderLeft: re, borderRight: ne, borderRadius: te, borderRadiusTopLeft: ve, borderRadiusTopRight: Ze, borderRadiusBottomLeft: ue, borderRadiusBottomRight: he, borderStyle: we, overflow: Qe, overflowX: pe, overflowY: Pe, divider: ye, dividerColor: _e, alignItems: X, justifyContent: et, flexDirection: Ce, flexWrap: Be, grow: U, shrink: se, sm: ae, md: Fe, lg: Ct, xl: $t, ...Ue }, kt) => {
  const xt = oe && oe !== "none" || le && le !== "none" || re && re !== "none" || ne && ne !== "none", vn = V && V !== "none" || xt, yn = {
    sm: ae,
    md: Fe,
    lg: Ct,
    xl: $t
  }, sr = _h.map((bn) => {
    const tt = yn[bn];
    return tt ? xh(bn, tt) : "";
  }).filter(Boolean).join(" ");
  return f("div", {
    ref: kt,
    className: J(xt && "border-0", wh({
      display: n,
      position: e,
      padding: t,
      paddingX: r,
      paddingY: i,
      paddingTop: s,
      paddingBottom: a,
      paddingLeft: o,
      paddingRight: l,
      margin: d,
      marginX: c,
      marginY: u,
      marginTop: h,
      marginBottom: m,
      marginLeft: g,
      marginRight: v,
      gap: b,
      columns: k,
      rows: N,
      colSpan: _,
      colStart: D,
      rowSpan: x,
      width: w,
      height: y,
      minWidth: E,
      minHeight: P,
      maxWidth: T,
      maxHeight: C,
      background: R,
      borderColor: A,
      border: V,
      borderTop: oe,
      borderBottom: le,
      borderLeft: re,
      borderRight: ne,
      borderRadius: te,
      borderRadiusTopLeft: ve,
      borderRadiusTopRight: Ze,
      borderRadiusBottomLeft: ue,
      borderRadiusBottomRight: he,
      borderStyle: we,
      overflow: Qe,
      overflowX: pe,
      overflowY: Pe,
      divider: ye,
      dividerColor: _e,
      alignItems: X,
      justifyContent: et,
      flexDirection: Ce,
      flexWrap: Be,
      grow: U,
      shrink: se
    }), sr, vn && !A && "border-f1-border", ye && !_e && "divide-f1-border", "scrollbar-macos"),
    ...Ue
  });
});
Na.displayName = "F0Box";
const Om = ze({
  name: "F0Box",
  type: "layout"
}, Na), Mm = co.filter(
  (n) => n !== "ai"
), Im = rs, zm = ["default", "outline", "neutral"], Lm = rs, Pm = ["sm", "md", "lg"], Bm = ["compact", "expanded"], Fm = uo, Hm = [
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
], Sr = ({ count: n, list: e }) => {
  const [t, r] = $(!1), i = f(Sn, {
    label: `+${n}`
  });
  return e?.length ? M(is, {
    open: t,
    onOpenChange: r,
    children: [f(ss, {
      asChild: !0,
      children: f("button", {
        className: as("inline-flex flex-shrink-0 items-center"),
        children: i
      })
    }), f(os, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: M(ls, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, a) => f("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: f(Sn, {
            ...s
          })
        }, a)), f(cs, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
};
Sr.displayName = "ChipCounter";
const Ra = ({ chips: n, max: e = 4, remainingCount: t, layout: r = "compact" }) => {
  if (r === "fill")
    return f(ho, {
      items: n,
      renderListItem: (l) => f(Sn, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => f(Sr, {
        count: (t ?? 0) + l,
        list: t ? void 0 : n.slice(n.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const i = n.slice(0, e), s = n.slice(e), a = t ?? n.length - e, o = a > 0;
  return M("div", {
    className: "flex items-center gap-2",
    children: [i.map((l, d) => f(Sn, {
      ...l
    }, d)), o && f(Sr, {
      count: a,
      list: t ? void 0 : s
    })]
  });
};
Ra.displayName = "F0ChipList";
const jm = Re("F0ChipList", Ra), $m = fo, Ch = vt({
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
}), kh = vt({
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
}), Wm = ({ title: n, description: e, action: t, link: r, icon: i, variant: s = "neutral" }) => {
  const a = F(null);
  return f("div", {
    ref: a,
    className: "@container",
    children: f("div", {
      className: Ch({
        variant: s
      }),
      children: M("div", {
        className: J("flex flex-col items-start gap-3 @sm:flex-row @sm:items-center @sm:justify-between"),
        children: [M("div", {
          className: "flex flex-row gap-2",
          children: [f("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? f(mo, {
              icon: i || po,
              size: "sm"
            }) : f(Es, {
              type: s,
              size: "sm"
            })
          }), M("div", {
            className: "flex flex-col gap-0.5",
            children: [f("p", {
              className: kh({
                variant: s
              }),
              children: n
            }), f("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || r) && M("div", {
          className: J("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @sm:pl-0"),
          children: [r && f(go, {
            href: r.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: r.label
          }), t && f(je, {
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
}, Ta = ({ disableClose: n = !1, onClose: e, isOpen: t, children: r, position: i = "right", size: s = "md", primaryAction: a, secondaryAction: o, title: l, description: d, module: c, otherActions: u, tabs: h, modal: m = !1, activeTabId: g, setActiveTabId: v, disableContentPadding: b }) => {
  const [k, N] = $(t);
  j(() => {
    N(t);
  }, [t]);
  const _ = z(() => M(yt, {
    children: [f(vo, {
      title: l,
      description: d,
      module: c,
      otherActions: u,
      tabs: h,
      activeTabId: g,
      setActiveTabId: v,
      disableClose: n
    }), f(yo, {
      disableContentPadding: b ?? !1,
      children: r
    }), f(bo, {
      primaryAction: a ?? [],
      secondaryAction: o ?? [],
      onClose: () => N(!1)
    })]
  }), [l, d, c, u, h, g, v, n, b, r, a, o]);
  return f(xo, {
    isOpen: k,
    onClose: e,
    position: i,
    size: s,
    modal: m,
    showOverlay: m,
    fullHeight: !0,
    onOpenChange: N,
    children: _
  });
}, Eh = wo, Aa = (n) => {
  const e = Eh.reduce((t, r) => {
    const { [r]: i, ...s } = t;
    return s;
  }, n);
  return f(Ta, {
    ...e
  });
};
Aa.displayName = "F0Drawer";
const Gm = Re("F0Drawer", Aa), Sh = 388;
function Dh({ filters: n, value: e, onChange: t, height: r, width: i = 600, className: s, showApplyButton: a = !0, applyButtonLabel: o }) {
  const l = un(), [d, c] = $(null), [u, h] = $(e);
  j(() => {
    h(e);
  }, [e]), j(() => {
    if (!d && n) {
      const b = Object.keys(n);
      if (b.length > 0) {
        const k = b.find((N) => {
          const _ = u[N], D = li(n[N].type);
          return _ !== void 0 && !D.isEmpty(_, {
            schema: n[N],
            i18n: l
          });
        });
        c(k ?? b[0]);
      }
    }
  }, [n, d, u, l]);
  const m = (b, k) => {
    const N = {
      ...u,
      [b]: k
    };
    h(N), a || t(N);
  }, g = () => {
    t(u);
  }, v = z(() => r || Object.entries(n).reduce((k, [N, _]) => {
    const D = li(_.type);
    return Math.max(k, D?.formHeight || Sh);
  }, 0), [n, r]);
  return !n || Object.keys(n).length === 0 ? null : f("div", {
    className: J("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: i
    },
    children: f(_o, {
      filters: n,
      tempFilters: u,
      selectedFilterKey: d,
      onFilterSelect: c,
      onFilterChange: m,
      onApply: g,
      height: v,
      showApplyButton: a,
      applyButtonLabel: o
    })
  });
}
Dh.displayName = "F0FilterPickerContent";
const Oa = "gap-4", Nh = "mt-6", Rh = "max-w-[720px]", bt = "md", Ma = Ge(null);
function Ia() {
  const n = Ie(Ma);
  if (!n)
    throw new Error("useF0FormContext must be used within a F0Form");
  return n;
}
function on(n, e, t) {
  const r = ["forms", n];
  return e && r.push(e), t && r.push(t), r.join(".");
}
function ie(n, e) {
  return n._def?.typeName === e;
}
function Qr(n) {
  return ie(n, "ZodEffects") ? n._def.schema : n;
}
const za = /* @__PURE__ */ new WeakMap();
function Vm(n, e) {
  za.set(n, e);
  const t = n;
  return t._f0Config = e, t._innerSchema = n, t;
}
function ei(n) {
  const e = n;
  return e._f0Config ? e._f0Config : za.get(n);
}
function Zm(n) {
  return ei(n) !== void 0;
}
function Ve(n) {
  let e = n;
  for (; ie(e, "ZodOptional") || ie(e, "ZodNullable") || ie(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function Th(n, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = Ve(n);
  return ie(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : ie(t, "ZodNumber") ? "number" : ie(t, "ZodBoolean") ? "switch" : ie(t, "ZodDate") ? "date" : ie(t, "ZodEnum") || ie(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : ie(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function La(n) {
  return ie(n, "ZodOptional") || ie(n, "ZodNullable") || ie(n, "ZodDefault") && La(n._def.innerType);
}
const Ah = /* @__PURE__ */ new Set([
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
function Oh(n) {
  const e = Ve(n);
  return ie(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "min" ? (r.value ?? 0) >= 1 : Ah.has(r.kind)) : !1;
}
function Pa(n) {
  if (La(n))
    return !1;
  const e = Ve(n);
  return ie(e, "ZodString") ? Oh(n) : !0;
}
function Mh(n, e) {
  const t = e[n.fieldId];
  if ("equalsTo" in n)
    return n.equalsTo instanceof Date && t instanceof Date ? t.getTime() === n.equalsTo.getTime() : t === n.equalsTo;
  if ("notEqualsTo" in n)
    return n.notEqualsTo instanceof Date && t instanceof Date ? t.getTime() !== n.notEqualsTo.getTime() : t !== n.notEqualsTo;
  if ("greaterThan" in n) {
    const r = n.greaterThan;
    return typeof t == "number" && typeof r == "number" ? t > r : t instanceof Date && r instanceof Date ? t.getTime() > r.getTime() : !1;
  }
  if ("greaterThanOrEqual" in n) {
    const r = n.greaterThanOrEqual;
    return typeof t == "number" && typeof r == "number" ? t >= r : t instanceof Date && r instanceof Date ? t.getTime() >= r.getTime() : !1;
  }
  if ("lowerThan" in n) {
    const r = n.lowerThan;
    return typeof t == "number" && typeof r == "number" ? t < r : t instanceof Date && r instanceof Date ? t.getTime() < r.getTime() : !1;
  }
  if ("lowerThanOrEqual" in n) {
    const r = n.lowerThanOrEqual;
    return typeof t == "number" && typeof r == "number" ? t <= r : t instanceof Date && r instanceof Date ? t.getTime() <= r.getTime() : !1;
  }
  if ("isEmpty" in n) {
    const r = t == null || t === "" || Array.isArray(t) && t.length === 0;
    return n.isEmpty ? r : !r;
  }
  return "matches" in n ? typeof t == "string" && n.matches.test(t) : "includes" in n ? Array.isArray(t) ? t.includes(n.includes) : t === n.includes : "notIncludes" in n ? Array.isArray(t) ? !t.includes(n.notIncludes) : t !== n.notIncludes : !0;
}
function ir(n, e) {
  return typeof n == "function" ? n({ values: e }) : Mh(n, e);
}
function ti(n, e) {
  return n === void 0 ? !1 : typeof n == "function" ? n({ values: e }) : n;
}
function Dt(n, e) {
  if (n !== void 0)
    return typeof n == "function" ? n({ values: e }) : n;
}
function Ih(n) {
  const e = Ve(n);
  return ie(e, "ZodLiteral") && e._def.value === !0;
}
function zh({ field: n, formField: e }) {
  const t = n.validation && Ih(n.validation);
  return f(Co, {
    ...e,
    title: n.label,
    disabled: n.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function Lh({ field: n, formField: e, error: t, isValidating: r, required: i }) {
  const s = {
    id: n.id,
    label: n.label,
    placeholder: n.placeholder,
    value: e.value,
    onChange: e.onChange,
    onBlur: e.onBlur,
    error: t,
    isValidating: r,
    disabled: n.disabled,
    required: i,
    config: n.fieldConfig
  };
  return f(yt, {
    children: n.render(s)
  });
}
function Ph(n, e) {
  if (n)
    return {
      value: {
        from: n,
        to: n
      },
      granularity: e?.[0] ?? "day"
    };
}
function Bh(n) {
  return n?.value?.from;
}
function Ba({ field: n, formField: e, error: t, loading: r }) {
  const i = z(() => Ph(e.value ?? void 0, n.granularities), [e.value, n.granularities]), s = (a) => {
    e.onChange(Bh(a) ?? null);
  };
  return f(Ss, {
    label: n.label,
    placeholder: n.placeholder,
    disabled: n.disabled,
    granularities: n.granularities,
    minDate: n.minDate,
    maxDate: n.maxDate,
    presets: n.presets,
    clearable: n.clearable,
    value: i,
    onChange: s,
    size: bt,
    hideLabel: !0,
    error: t,
    loading: r
  });
}
function Dr(n) {
  if (!n || !(n instanceof Date) || isNaN(n.getTime())) return "";
  const e = String(n.getHours()).padStart(2, "0"), t = String(n.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function Fh(n) {
  if (!n) return;
  const [e, t] = n.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const r = /* @__PURE__ */ new Date();
  return r.setHours(e, t, 0, 0), r;
}
function pr(n, e) {
  if (!n) return;
  const t = new Date(n);
  if (e) {
    const [r, i, s] = e.split(":").map(Number);
    t.setHours(r ?? 0, i ?? 0, s ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function Fa({ field: n, formField: e, error: t, loading: r }) {
  const i = z(() => Dr(e.value ?? void 0), [e.value]), s = Y((a) => {
    if (!a) {
      e.onChange(null);
      return;
    }
    const o = Fh(a);
    e.onChange(o);
  }, [e]);
  return f(ds, {
    type: "time",
    label: n.label,
    disabled: n.disabled,
    value: i,
    onChange: s,
    size: bt,
    hideLabel: !0,
    error: t,
    loading: r,
    clearable: n.clearable,
    name: e.name,
    ref: e.ref,
    icon: ko
  });
}
function Hh({ field: n, formField: e, error: t, loading: r }) {
  const i = e.value ?? void 0, s = z(() => Dr(i), [i]), a = Y((h) => {
    if (!h) {
      e.onChange(null);
      return;
    }
    e.onChange(pr(h, s));
  }, [e, s]), o = Y((h) => {
    if (!h) {
      if (i) {
        const g = new Date(i);
        g.setHours(0, 0, 0, 0), e.onChange(g);
      }
      return;
    }
    const m = Dr(h);
    if (!i) {
      const g = /* @__PURE__ */ new Date();
      g.setHours(0, 0, 0, 0), e.onChange(pr(g, m));
      return;
    }
    e.onChange(pr(i, m));
  }, [e, i]), l = z(() => ({
    id: `${n.id}-date`,
    type: "date",
    label: n.label,
    placeholder: n.placeholder,
    disabled: n.disabled,
    granularities: n.granularities ?? ["day"],
    presets: n.presets,
    minDate: n.minDate,
    maxDate: n.maxDate,
    clearable: n.clearable
  }), [n]), d = z(() => ({
    ...e,
    value: i,
    onChange: a
  }), [e, i, a]), c = z(() => ({
    id: `${n.id}-time`,
    type: "time",
    label: "Time",
    disabled: n.disabled,
    clearable: !1
  }), [n.id, n.disabled]), u = z(() => ({
    ...e,
    value: i,
    onChange: o
  }), [e, i, o]);
  return M("div", {
    className: "flex gap-2",
    children: [f("div", {
      className: "flex-1",
      children: f(Ba, {
        field: l,
        formField: d,
        error: t,
        loading: r
      })
    }), f("div", {
      className: "w-32",
      children: f(Fa, {
        field: c,
        formField: u,
        error: t,
        loading: r
      })
    })]
  });
}
function jh(n) {
  if (!(!n?.from || !n?.to))
    return {
      value: {
        from: n.from,
        to: n.to
      },
      granularity: "range"
    };
}
function $h(n) {
  if (!(!n?.value?.from || !n?.value?.to))
    return {
      from: n.value.from,
      to: n.value.to
    };
}
function Wh({ field: n, formField: e, error: t, loading: r }) {
  const i = z(() => jh(e.value ?? void 0), [e.value]), s = (o) => {
    e.onChange($h(o) ?? null);
  }, a = n.fromLabel && n.toLabel ? `${n.label} (${n.fromLabel} - ${n.toLabel})` : n.label;
  return f(Ss, {
    label: a,
    placeholder: n.placeholder,
    disabled: n.disabled,
    granularities: n.granularities ?? ["range"],
    minDate: n.minDate,
    maxDate: n.maxDate,
    presets: n.presets,
    clearable: n.clearable,
    value: i,
    onChange: s,
    size: bt,
    hideLabel: !0,
    error: t,
    loading: r
  });
}
function Gh({ field: n, formField: e, error: t, loading: r }) {
  return f(Bl, {
    ...e,
    label: n.label,
    placeholder: n.placeholder,
    disabled: n.disabled,
    step: n.step,
    min: n.min,
    max: n.max,
    locale: n.locale ?? "en-US",
    value: e.value != null ? Number(e.value) : void 0,
    onChange: (i) => e.onChange(i),
    size: bt,
    hideLabel: !0,
    error: t,
    loading: r,
    clearable: n.clearable
  });
}
function Vh({ field: n, formField: e }) {
  const t = e.value;
  return f(Fl, {
    title: n.label,
    placeholder: n.placeholder ?? "",
    maxCharacters: n.maxCharacters,
    mentionsConfig: n.mentionsConfig,
    height: n.height,
    plainHtmlMode: n.plainHtmlMode,
    disabled: n.disabled,
    initialEditorState: {
      content: t?.value ?? ""
    },
    onChange: (r) => {
      e.onChange({
        value: r.value,
        mentionIds: r.mentionIds
      });
    }
  });
}
function Zh({ field: n, formField: e, error: t, loading: r }) {
  const i = {
    label: n.label,
    placeholder: n.placeholder,
    disabled: n.disabled,
    options: n.options,
    showSearchBox: n.showSearchBox,
    searchBoxPlaceholder: n.searchBoxPlaceholder,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    loading: r,
    size: bt,
    hideLabel: !0
  };
  return n.multiple ? f(At, {
    ...i,
    multiple: !0,
    clearable: n.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : n.clearable ? f(At, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : f(At, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function Uh({ field: n, formField: e, error: t, loading: r }) {
  const i = {
    label: n.label,
    placeholder: n.placeholder,
    disabled: n.disabled,
    source: n.source,
    mapOptions: n.mapOptions,
    showSearchBox: n.showSearchBox,
    searchBoxPlaceholder: n.searchBoxPlaceholder,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    loading: r,
    size: bt,
    hideLabel: !0
  };
  return n.multiple ? f(At, {
    ...i,
    multiple: !0,
    clearable: n.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : n.clearable ? f(At, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : f(At, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function qh(n) {
  const { field: e } = n;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? f(Uh, {
    ...n,
    field: e
  }) : "options" in e && e.options !== void 0 ? f(Zh, {
    ...n,
    field: e
  }) : null;
}
function Yh(n) {
  const e = Ve(n);
  return ie(e, "ZodLiteral") && e._def.value === !0;
}
function Kh({ field: n, formField: e }) {
  const t = n.validation && Yh(n.validation);
  return f(Eo, {
    ...e,
    title: n.label,
    disabled: n.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
const Xh = {
  email: "name@example.com"
}, Jh = {
  url: Do,
  email: So
};
function Qh({ field: n, formField: e, error: t, loading: r }) {
  const i = n.inputType ?? "text", s = n.placeholder ?? Xh[i] ?? void 0, a = Jh[i];
  return f(ds, {
    ...e,
    label: n.label,
    type: i,
    placeholder: s,
    disabled: n.disabled,
    value: e.value != null ? String(e.value) : "",
    size: bt,
    hideLabel: !0,
    error: t,
    loading: r,
    icon: a,
    clearable: n.clearable
  });
}
function ef({ field: n, formField: e, error: t, loading: r }) {
  return f(Hl, {
    ...e,
    label: n.label,
    placeholder: n.placeholder,
    disabled: n.disabled,
    rows: n.rows,
    maxLength: n.maxLength,
    value: e.value != null ? String(e.value) : "",
    size: bt,
    hideLabel: !0,
    error: t,
    loading: r
  });
}
function tf({ field: n, formField: e, fieldState: t, isSubmitting: r, isRequired: i, values: s }) {
  const a = !!t.error, { isValidating: o } = t, l = ti(n.disabled, s) || r, d = {
    error: a,
    loading: o
  };
  switch (n.type) {
    case "text":
      return f(Qh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "number":
      return f(Gh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "textarea":
      return f(ef, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "select":
      return f(qh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "checkbox":
      return f(zh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e
      });
    case "switch":
      return f(Kh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e
      });
    case "date":
      return f(Ba, {
        field: {
          ...n,
          disabled: l,
          minDate: Dt(n.minDate, s),
          maxDate: Dt(n.maxDate, s)
        },
        formField: e,
        ...d
      });
    case "time":
      return f(Fa, {
        field: {
          ...n,
          disabled: l,
          minDate: Dt(n.minDate, s),
          maxDate: Dt(n.maxDate, s)
        },
        formField: e,
        ...d
      });
    case "datetime":
      return f(Hh, {
        field: {
          ...n,
          disabled: l,
          minDate: Dt(n.minDate, s),
          maxDate: Dt(n.maxDate, s)
        },
        formField: e,
        ...d
      });
    case "daterange":
      return f(Wh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...d
      });
    case "richtext":
      return f(Vh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e
      });
    case "custom":
      return f(Lh, {
        field: {
          ...n,
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
function ni({ field: n, sectionId: e }) {
  const t = Br(), r = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = Ia(), { forms: a } = un(), o = ti(n.disabled, r), l = F(o);
  j(() => {
    const m = l.current;
    if (l.current = o, !m && o && n.resetOnDisable) {
      const g = t.formState.defaultValues?.[n.id];
      t.setValue(n.id, g, {
        shouldValidate: !1
      });
    }
  }, [o, n.resetOnDisable, n.id, t]);
  const d = !n.renderIf || ir(n.renderIf, r), c = n.type !== "checkbox" && n.type !== "custom", u = n.validation && Pa(n.validation), h = on(s, e, n.id);
  return d ? f(pi, {
    control: t.control,
    name: n.id,
    render: ({ field: m, fieldState: g }) => M(jl, {
      id: h,
      className: "scroll-mt-4",
      children: [c && M("label", {
        htmlFor: n.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [n.label, u && f("span", {
          className: "ml-0.5 text-f1-foreground-critical",
          children: "*"
        })]
      }), f($l, {
        children: tf({
          field: n,
          formField: m,
          fieldState: g,
          isSubmitting: i,
          isRequired: u,
          values: r
        })
      }), n.helpText && f(Wl, {
        children: n.helpText
      }), f(Gl, {
        fallback: u ? a.validation.required : a.validation.invalidType
      })]
    })
  }) : f(pi, {
    control: t.control,
    name: n.id,
    render: () => f("span", {
      className: "hidden",
      "aria-hidden": "true"
    })
  });
}
function Ha({ row: n, sectionId: e }) {
  return f("div", {
    className: `flex xs:flex-row flex-col ${Oa} [&>*]:flex-1`,
    children: n.fields.map((t) => f(ni, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function nf(n) {
  const e = Ve(n);
  return ie(e, "ZodLiteral") && e._def.value === !0;
}
function ja({ fields: n }) {
  const e = Br(), { watch: t, setValue: r } = e, { isSubmitting: i } = e.formState, s = t(), a = z(() => n.filter((h) => !h.renderIf || ir(h.renderIf, s)), [n, s]), o = z(() => Object.fromEntries(a.map((h) => [h.id, ti(h.disabled, s) || i])), [a, i, s]), l = F({});
  j(() => {
    const h = l.current, m = e.formState.defaultValues ?? {};
    for (const g of a) {
      if (!(g.id in h))
        continue;
      const v = h[g.id], b = o[g.id] ?? !1;
      if (!v && b && g.resetOnDisable) {
        const k = m[g.id] ?? !1;
        r(g.id, k, {
          shouldValidate: !1
        });
      }
    }
    l.current = {
      ...o
    };
  }, [o, a, e, r]);
  const d = z(() => a.map((h) => ({
    value: h.id,
    title: h.label,
    description: h.helpText,
    disabled: o[h.id] ?? !1,
    required: !!(h.validation && nf(h.validation))
  })), [a, o]), c = z(() => a.filter((h) => s[h.id]).map((h) => h.id), [a, s]);
  return a.length === 0 ? null : f(Vl, {
    multiple: !0,
    isToggle: !0,
    grouped: !0,
    items: d,
    value: c,
    onChange: (h) => {
      for (const m of a) {
        const g = h.includes(m.id), v = !!s[m.id];
        g !== v && r(m.id, g, {
          shouldValidate: !0
        });
      }
    }
  });
}
function rf(n) {
  const e = [];
  let t = [];
  const r = () => {
    t.length > 0 && (e.push({
      type: "switchGroup",
      fields: [...t]
    }), t = []);
  };
  return n.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (r(), i.type === "field" ? e.push({
      type: "field",
      item: i
    }) : i.type === "row" && e.push({
      type: "row",
      item: i,
      index: s
    }));
  }), r(), e;
}
function sf({ section: n }) {
  const t = Br().watch(), { formName: r } = Ia(), { title: i, description: s, renderIf: a, action: o, fields: l } = n.section, d = n.id;
  if (a && !ir(a, t))
    return null;
  const c = rf(l), u = on(r, d);
  return M("section", {
    id: u,
    className: "flex flex-col scroll-mt-4",
    children: [M("div", {
      className: J("flex items-start justify-between py-5", "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"),
      children: [f(Zl, {
        title: i,
        description: s ?? ""
      }), o && f(je, {
        label: o.label,
        icon: o.icon,
        onClick: o.onClick,
        href: o.href,
        variant: "outline",
        size: "md"
      })]
    }), f("div", {
      className: `flex flex-col ${Oa}`,
      children: c.map((h, m) => h.type === "switchGroup" ? f(ja, {
        fields: h.fields,
        sectionId: d
      }, `switch-group-${m}`) : h.type === "field" ? f(ni, {
        field: h.item.field,
        sectionId: d
      }, h.item.field.id) : h.type === "row" ? f(Ha, {
        row: h.item,
        sectionId: d
      }, `row-${h.index}`) : null)
    })]
  });
}
var ee;
(function(n) {
  n.assertEqual = (i) => {
  };
  function e(i) {
  }
  n.assertIs = e;
  function t(i) {
    throw new Error();
  }
  n.assertNever = t, n.arrayToEnum = (i) => {
    const s = {};
    for (const a of i)
      s[a] = a;
    return s;
  }, n.getValidEnumValues = (i) => {
    const s = n.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), a = {};
    for (const o of s)
      a[o] = i[o];
    return n.objectValues(a);
  }, n.objectValues = (i) => n.objectKeys(i).map(function(s) {
    return i[s];
  }), n.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const a in i)
      Object.prototype.hasOwnProperty.call(i, a) && s.push(a);
    return s;
  }, n.find = (i, s) => {
    for (const a of i)
      if (s(a))
        return a;
  }, n.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && Number.isFinite(i) && Math.floor(i) === i;
  function r(i, s = " | ") {
    return i.map((a) => typeof a == "string" ? `'${a}'` : a).join(s);
  }
  n.joinValues = r, n.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(ee || (ee = {}));
var Li;
(function(n) {
  n.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Li || (Li = {}));
const I = ee.arrayToEnum([
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
]), ut = (n) => {
  switch (typeof n) {
    case "undefined":
      return I.undefined;
    case "string":
      return I.string;
    case "number":
      return Number.isNaN(n) ? I.nan : I.number;
    case "boolean":
      return I.boolean;
    case "function":
      return I.function;
    case "bigint":
      return I.bigint;
    case "symbol":
      return I.symbol;
    case "object":
      return Array.isArray(n) ? I.array : n === null ? I.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? I.promise : typeof Map < "u" && n instanceof Map ? I.map : typeof Set < "u" && n instanceof Set ? I.set : typeof Date < "u" && n instanceof Date ? I.date : I.object;
    default:
      return I.unknown;
  }
}, S = ee.arrayToEnum([
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
class it extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const t = e || function(s) {
      return s.message;
    }, r = { _errors: [] }, i = (s) => {
      for (const a of s.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(i);
        else if (a.code === "invalid_return_type")
          i(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          i(a.argumentsError);
        else if (a.path.length === 0)
          r._errors.push(t(a));
        else {
          let o = r, l = 0;
          for (; l < a.path.length; ) {
            const d = a.path[l];
            l === a.path.length - 1 ? (o[d] = o[d] || { _errors: [] }, o[d]._errors.push(t(a))) : o[d] = o[d] || { _errors: [] }, o = o[d], l++;
          }
        }
    };
    return i(this), r;
  }
  static assert(e) {
    if (!(e instanceof it))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ee.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, r = [];
    for (const i of this.issues)
      if (i.path.length > 0) {
        const s = i.path[0];
        t[s] = t[s] || [], t[s].push(e(i));
      } else
        r.push(e(i));
    return { formErrors: r, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
it.create = (n) => new it(n);
const Nr = (n, e) => {
  let t;
  switch (n.code) {
    case S.invalid_type:
      n.received === I.undefined ? t = "Required" : t = `Expected ${n.expected}, received ${n.received}`;
      break;
    case S.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(n.expected, ee.jsonStringifyReplacer)}`;
      break;
    case S.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${ee.joinValues(n.keys, ", ")}`;
      break;
    case S.invalid_union:
      t = "Invalid input";
      break;
    case S.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${ee.joinValues(n.options)}`;
      break;
    case S.invalid_enum_value:
      t = `Invalid enum value. Expected ${ee.joinValues(n.options)}, received '${n.received}'`;
      break;
    case S.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case S.invalid_return_type:
      t = "Invalid function return type";
      break;
    case S.invalid_date:
      t = "Invalid date";
      break;
    case S.invalid_string:
      typeof n.validation == "object" ? "includes" in n.validation ? (t = `Invalid input: must include "${n.validation.includes}"`, typeof n.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith" in n.validation ? t = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith" in n.validation ? t = `Invalid input: must end with "${n.validation.endsWith}"` : ee.assertNever(n.validation) : n.validation !== "regex" ? t = `Invalid ${n.validation}` : t = "Invalid";
      break;
    case S.too_small:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "bigint" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : t = "Invalid input";
      break;
    case S.too_big:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : t = "Invalid input";
      break;
    case S.custom:
      t = "Invalid input";
      break;
    case S.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case S.not_multiple_of:
      t = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case S.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, ee.assertNever(n);
  }
  return { message: t };
};
let af = Nr;
function of() {
  return af;
}
const lf = (n) => {
  const { data: e, path: t, errorMaps: r, issueData: i } = n, s = [...t, ...i.path || []], a = {
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
  const l = r.filter((d) => !!d).slice().reverse();
  for (const d of l)
    o = d(a, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: s,
    message: o
  };
};
function O(n, e) {
  const t = of(), r = lf({
    issueData: e,
    data: n.data,
    path: n.path,
    errorMaps: [
      n.common.contextualErrorMap,
      // contextual error map is first priority
      n.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === Nr ? void 0 : Nr
      // then global default map
    ].filter((i) => !!i)
  });
  n.common.issues.push(r);
}
class Te {
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
    const r = [];
    for (const i of t) {
      if (i.status === "aborted")
        return W;
      i.status === "dirty" && e.dirty(), r.push(i.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, t) {
    const r = [];
    for (const i of t) {
      const s = await i.key, a = await i.value;
      r.push({
        key: s,
        value: a
      });
    }
    return Te.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, t) {
    const r = {};
    for (const i of t) {
      const { key: s, value: a } = i;
      if (s.status === "aborted" || a.status === "aborted")
        return W;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (r[s.value] = a.value);
    }
    return { status: e.value, value: r };
  }
}
const W = Object.freeze({
  status: "aborted"
}), qt = (n) => ({ status: "dirty", value: n }), Le = (n) => ({ status: "valid", value: n }), Pi = (n) => n.status === "aborted", Bi = (n) => n.status === "dirty", zt = (n) => n.status === "valid", $n = (n) => typeof Promise < "u" && n instanceof Promise;
var L;
(function(n) {
  n.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, n.toString = (e) => typeof e == "string" ? e : e?.message;
})(L || (L = {}));
class pt {
  constructor(e, t, r, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Fi = (n, e) => {
  if (zt(e))
    return { success: !0, data: e.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new it(n.common.issues);
      return this._error = t, this._error;
    }
  };
};
function q(n) {
  if (!n)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: r, description: i } = n;
  if (e && (t || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (a, o) => {
    const { message: l } = n;
    return a.code === "invalid_enum_value" ? { message: l ?? o.defaultError } : typeof o.data > "u" ? { message: l ?? r ?? o.defaultError } : a.code !== "invalid_type" ? { message: o.defaultError } : { message: l ?? t ?? o.defaultError };
  }, description: i };
}
class Q {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return ut(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: ut(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Te(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: ut(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if ($n(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const r = this.safeParse(e, t);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(e, t) {
    const r = {
      common: {
        issues: [],
        async: t?.async ?? !1,
        contextualErrorMap: t?.errorMap
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: ut(e)
    }, i = this._parseSync({ data: e, path: r.path, parent: r });
    return Fi(r, i);
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
      parsedType: ut(e)
    };
    if (!this["~standard"].async)
      try {
        const r = this._parseSync({ data: e, path: [], parent: t });
        return zt(r) ? {
          value: r.value
        } : {
          issues: t.common.issues
        };
      } catch (r) {
        r?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((r) => zt(r) ? {
      value: r.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    const r = await this.safeParseAsync(e, t);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(e, t) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: t?.errorMap,
        async: !0
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: ut(e)
    }, i = this._parse({ data: e, path: r.path, parent: r }), s = await ($n(i) ? i : Promise.resolve(i));
    return Fi(r, s);
  }
  refine(e, t) {
    const r = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: S.custom,
        ...r(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((r, i) => e(r) ? !0 : (i.addIssue(typeof t == "function" ? t(r, i) : t), !1));
  }
  _refinement(e) {
    return new Pt({
      schema: this,
      typeName: G.ZodEffects,
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
    return ft.create(this, this._def);
  }
  nullable() {
    return Bt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Je.create(this);
  }
  promise() {
    return Zn.create(this, this._def);
  }
  or(e) {
    return Gn.create([this, e], this._def);
  }
  and(e) {
    return Vn.create(this, e, this._def);
  }
  transform(e) {
    return new Pt({
      ...q(this._def),
      schema: this,
      typeName: G.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Ar({
      ...q(this._def),
      innerType: this,
      defaultValue: t,
      typeName: G.ZodDefault
    });
  }
  brand() {
    return new Af({
      typeName: G.ZodBranded,
      type: this,
      ...q(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Or({
      ...q(this._def),
      innerType: this,
      catchValue: t,
      typeName: G.ZodCatch
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
    return ri.create(this, e);
  }
  readonly() {
    return Mr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cf = /^c[^\s-]{8,}$/i, df = /^[0-9a-z]+$/, uf = /^[0-9A-HJKMNP-TV-Z]{26}$/i, hf = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ff = /^[a-z0-9_-]{21}$/i, mf = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, pf = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, gf = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, vf = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let gr;
const yf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, bf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, xf = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, wf = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, _f = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Cf = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, $a = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", kf = new RegExp(`^${$a}$`);
function Wa(n) {
  let e = "[0-5]\\d";
  n.precision ? e = `${e}\\.\\d{${n.precision}}` : n.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = n.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function Ef(n) {
  return new RegExp(`^${Wa(n)}$`);
}
function Sf(n) {
  let e = `${$a}T${Wa(n)}`;
  const t = [];
  return t.push(n.local ? "Z?" : "Z"), n.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function Df(n, e) {
  return !!((e === "v4" || !e) && yf.test(n) || (e === "v6" || !e) && xf.test(n));
}
function Nf(n, e) {
  if (!mf.test(n))
    return !1;
  try {
    const [t] = n.split(".");
    if (!t)
      return !1;
    const r = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), i = JSON.parse(atob(r));
    return !(typeof i != "object" || i === null || "typ" in i && i?.typ !== "JWT" || !i.alg || e && i.alg !== e);
  } catch {
    return !1;
  }
}
function Rf(n, e) {
  return !!((e === "v4" || !e) && bf.test(n) || (e === "v6" || !e) && wf.test(n));
}
class wt extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== I.string) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: S.invalid_type,
        expected: I.string,
        received: s.parsedType
      }), W;
    }
    const r = new Te();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), O(i, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), O(i, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? O(i, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && O(i, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        gf.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "email",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        gr || (gr = new RegExp(vf, "u")), gr.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "emoji",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        hf.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "uuid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "nanoid")
        ff.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "nanoid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        cf.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "cuid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        df.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "cuid2",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        uf.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "ulid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), O(i, {
            validation: "url",
            code: S.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "regex",
        code: S.invalid_string,
        message: s.message
      }), r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "datetime" ? Sf(s).test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.invalid_string,
        validation: "datetime",
        message: s.message
      }), r.dirty()) : s.kind === "date" ? kf.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.invalid_string,
        validation: "date",
        message: s.message
      }), r.dirty()) : s.kind === "time" ? Ef(s).test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.invalid_string,
        validation: "time",
        message: s.message
      }), r.dirty()) : s.kind === "duration" ? pf.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "duration",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "ip" ? Df(e.data, s.version) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "ip",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "jwt" ? Nf(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "jwt",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "cidr" ? Rf(e.data, s.version) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "cidr",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64" ? _f.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "base64",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64url" ? Cf.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "base64url",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : ee.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _regex(e, t, r) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: S.invalid_string,
      ...L.errToObj(r)
    });
  }
  _addCheck(e) {
    return new wt({
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
    return new wt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new wt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new wt({
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
wt.create = (n) => new wt({
  checks: [],
  typeName: G.ZodString,
  coerce: n?.coerce ?? !1,
  ...q(n)
});
function Tf(n, e) {
  const t = (n.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, i = t > r ? t : r, s = Number.parseInt(n.toFixed(i).replace(".", "")), a = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % a / 10 ** i;
}
class ln extends Q {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== I.number) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: S.invalid_type,
        expected: I.number,
        received: s.parsedType
      }), W;
    }
    let r;
    const i = new Te();
    for (const s of this._def.checks)
      s.kind === "int" ? ee.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? Tf(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.not_finite,
        message: s.message
      }), i.dirty()) : ee.assertNever(s);
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
  setLimit(e, t, r, i) {
    return new ln({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: L.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ln({
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && ee.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (t === null || r.value > t) && (t = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
ln.create = (n) => new ln({
  checks: [],
  typeName: G.ZodNumber,
  coerce: n?.coerce || !1,
  ...q(n)
});
class cn extends Q {
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
    if (this._getType(e) !== I.bigint)
      return this._getInvalidInput(e);
    let r;
    const i = new Te();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : ee.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return O(t, {
      code: S.invalid_type,
      expected: I.bigint,
      received: t.parsedType
    }), W;
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
  setLimit(e, t, r, i) {
    return new cn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: L.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new cn({
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
cn.create = (n) => new cn({
  checks: [],
  typeName: G.ZodBigInt,
  coerce: n?.coerce ?? !1,
  ...q(n)
});
class Hi extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== I.boolean) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: I.boolean,
        received: r.parsedType
      }), W;
    }
    return Le(e.data);
  }
}
Hi.create = (n) => new Hi({
  typeName: G.ZodBoolean,
  coerce: n?.coerce || !1,
  ...q(n)
});
class Wn extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== I.date) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: S.invalid_type,
        expected: I.date,
        received: s.parsedType
      }), W;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: S.invalid_date
      }), W;
    }
    const r = new Te();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty()) : ee.assertNever(s);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Wn({
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
Wn.create = (n) => new Wn({
  checks: [],
  coerce: n?.coerce || !1,
  typeName: G.ZodDate,
  ...q(n)
});
class ji extends Q {
  _parse(e) {
    if (this._getType(e) !== I.symbol) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: I.symbol,
        received: r.parsedType
      }), W;
    }
    return Le(e.data);
  }
}
ji.create = (n) => new ji({
  typeName: G.ZodSymbol,
  ...q(n)
});
class $i extends Q {
  _parse(e) {
    if (this._getType(e) !== I.undefined) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: I.undefined,
        received: r.parsedType
      }), W;
    }
    return Le(e.data);
  }
}
$i.create = (n) => new $i({
  typeName: G.ZodUndefined,
  ...q(n)
});
class Wi extends Q {
  _parse(e) {
    if (this._getType(e) !== I.null) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: I.null,
        received: r.parsedType
      }), W;
    }
    return Le(e.data);
  }
}
Wi.create = (n) => new Wi({
  typeName: G.ZodNull,
  ...q(n)
});
class Rr extends Q {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Le(e.data);
  }
}
Rr.create = (n) => new Rr({
  typeName: G.ZodAny,
  ...q(n)
});
class Gi extends Q {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Le(e.data);
  }
}
Gi.create = (n) => new Gi({
  typeName: G.ZodUnknown,
  ...q(n)
});
class gt extends Q {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return O(t, {
      code: S.invalid_type,
      expected: I.never,
      received: t.parsedType
    }), W;
  }
}
gt.create = (n) => new gt({
  typeName: G.ZodNever,
  ...q(n)
});
class Vi extends Q {
  _parse(e) {
    if (this._getType(e) !== I.undefined) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: I.void,
        received: r.parsedType
      }), W;
    }
    return Le(e.data);
  }
}
Vi.create = (n) => new Vi({
  typeName: G.ZodVoid,
  ...q(n)
});
class Je extends Q {
  _parse(e) {
    const { ctx: t, status: r } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== I.array)
      return O(t, {
        code: S.invalid_type,
        expected: I.array,
        received: t.parsedType
      }), W;
    if (i.exactLength !== null) {
      const a = t.data.length > i.exactLength.value, o = t.data.length < i.exactLength.value;
      (a || o) && (O(t, {
        code: a ? S.too_big : S.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (O(t, {
      code: S.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (O(t, {
      code: S.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new pt(t, a, t.path, o)))).then((a) => Te.mergeArray(r, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new pt(t, a, t.path, o)));
    return Te.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Je({
      ...this._def,
      minLength: { value: e, message: L.toString(t) }
    });
  }
  max(e, t) {
    return new Je({
      ...this._def,
      maxLength: { value: e, message: L.toString(t) }
    });
  }
  length(e, t) {
    return new Je({
      ...this._def,
      exactLength: { value: e, message: L.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Je.create = (n, e) => new Je({
  type: n,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: G.ZodArray,
  ...q(e)
});
function Tt(n) {
  if (n instanceof ce) {
    const e = {};
    for (const t in n.shape) {
      const r = n.shape[t];
      e[t] = ft.create(Tt(r));
    }
    return new ce({
      ...n._def,
      shape: () => e
    });
  } else return n instanceof Je ? new Je({
    ...n._def,
    type: Tt(n.element)
  }) : n instanceof ft ? ft.create(Tt(n.unwrap())) : n instanceof Bt ? Bt.create(Tt(n.unwrap())) : n instanceof _t ? _t.create(n.items.map((e) => Tt(e))) : n;
}
class ce extends Q {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = ee.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== I.object) {
      const d = this._getOrReturnCtx(e);
      return O(d, {
        code: S.invalid_type,
        expected: I.object,
        received: d.parsedType
      }), W;
    }
    const { status: r, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof gt && this._def.unknownKeys === "strip"))
      for (const d in i.data)
        a.includes(d) || o.push(d);
    const l = [];
    for (const d of a) {
      const c = s[d], u = i.data[d];
      l.push({
        key: { status: "valid", value: d },
        value: c._parse(new pt(i, u, i.path, d)),
        alwaysSet: d in i.data
      });
    }
    if (this._def.catchall instanceof gt) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const c of o)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: i.data[c] }
          });
      else if (d === "strict")
        o.length > 0 && (O(i, {
          code: S.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const c of o) {
        const u = i.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: d._parse(
            new pt(i, u, i.path, c)
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
    }).then((d) => Te.mergeObjectSync(r, d)) : Te.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return L.errToObj, new ce({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, r) => {
          const i = this._def.errorMap?.(t, r).message ?? r.defaultError;
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
    return new ce({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ce({
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
    return new ce({
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
    return new ce({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: G.ZodObject
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
    return new ce({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const r of ee.objectKeys(e))
      e[r] && this.shape[r] && (t[r] = this.shape[r]);
    return new ce({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const r of ee.objectKeys(this.shape))
      e[r] || (t[r] = this.shape[r]);
    return new ce({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Tt(this);
  }
  partial(e) {
    const t = {};
    for (const r of ee.objectKeys(this.shape)) {
      const i = this.shape[r];
      e && !e[r] ? t[r] = i : t[r] = i.optional();
    }
    return new ce({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const r of ee.objectKeys(this.shape))
      if (e && !e[r])
        t[r] = this.shape[r];
      else {
        let s = this.shape[r];
        for (; s instanceof ft; )
          s = s._def.innerType;
        t[r] = s;
      }
    return new ce({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ga(ee.objectKeys(this.shape));
  }
}
ce.create = (n, e) => new ce({
  shape: () => n,
  unknownKeys: "strip",
  catchall: gt.create(),
  typeName: G.ZodObject,
  ...q(e)
});
ce.strictCreate = (n, e) => new ce({
  shape: () => n,
  unknownKeys: "strict",
  catchall: gt.create(),
  typeName: G.ZodObject,
  ...q(e)
});
ce.lazycreate = (n, e) => new ce({
  shape: n,
  unknownKeys: "strip",
  catchall: gt.create(),
  typeName: G.ZodObject,
  ...q(e)
});
class Gn extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new it(o.ctx.common.issues));
      return O(t, {
        code: S.invalid_union,
        unionErrors: a
      }), W;
    }
    if (t.common.async)
      return Promise.all(r.map(async (s) => {
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
      for (const l of r) {
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
      const o = a.map((l) => new it(l));
      return O(t, {
        code: S.invalid_union,
        unionErrors: o
      }), W;
    }
  }
  get options() {
    return this._def.options;
  }
}
Gn.create = (n, e) => new Gn({
  options: n,
  typeName: G.ZodUnion,
  ...q(e)
});
function Tr(n, e) {
  const t = ut(n), r = ut(e);
  if (n === e)
    return { valid: !0, data: n };
  if (t === I.object && r === I.object) {
    const i = ee.objectKeys(e), s = ee.objectKeys(n).filter((o) => i.indexOf(o) !== -1), a = { ...n, ...e };
    for (const o of s) {
      const l = Tr(n[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (t === I.array && r === I.array) {
    if (n.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < n.length; s++) {
      const a = n[s], o = e[s], l = Tr(a, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === I.date && r === I.date && +n == +e ? { valid: !0, data: n } : { valid: !1 };
}
class Vn extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), i = (s, a) => {
      if (Pi(s) || Pi(a))
        return W;
      const o = Tr(s.value, a.value);
      return o.valid ? ((Bi(s) || Bi(a)) && t.dirty(), { status: t.value, value: o.data }) : (O(r, {
        code: S.invalid_intersection_types
      }), W);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([s, a]) => i(s, a)) : i(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Vn.create = (n, e, t) => new Vn({
  left: n,
  right: e,
  typeName: G.ZodIntersection,
  ...q(t)
});
class _t extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== I.array)
      return O(r, {
        code: S.invalid_type,
        expected: I.array,
        received: r.parsedType
      }), W;
    if (r.data.length < this._def.items.length)
      return O(r, {
        code: S.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), W;
    !this._def.rest && r.data.length > this._def.items.length && (O(r, {
      code: S.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...r.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new pt(r, a, r.path, o)) : null;
    }).filter((a) => !!a);
    return r.common.async ? Promise.all(s).then((a) => Te.mergeArray(t, a)) : Te.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new _t({
      ...this._def,
      rest: e
    });
  }
}
_t.create = (n, e) => {
  if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new _t({
    items: n,
    typeName: G.ZodTuple,
    rest: null,
    ...q(e)
  });
};
class Zi extends Q {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== I.map)
      return O(r, {
        code: S.invalid_type,
        expected: I.map,
        received: r.parsedType
      }), W;
    const i = this._def.keyType, s = this._def.valueType, a = [...r.data.entries()].map(([o, l], d) => ({
      key: i._parse(new pt(r, o, r.path, [d, "key"])),
      value: s._parse(new pt(r, l, r.path, [d, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const d = await l.key, c = await l.value;
          if (d.status === "aborted" || c.status === "aborted")
            return W;
          (d.status === "dirty" || c.status === "dirty") && t.dirty(), o.set(d.value, c.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const d = l.key, c = l.value;
        if (d.status === "aborted" || c.status === "aborted")
          return W;
        (d.status === "dirty" || c.status === "dirty") && t.dirty(), o.set(d.value, c.value);
      }
      return { status: t.value, value: o };
    }
  }
}
Zi.create = (n, e, t) => new Zi({
  valueType: e,
  keyType: n,
  typeName: G.ZodMap,
  ...q(t)
});
class dn extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== I.set)
      return O(r, {
        code: S.invalid_type,
        expected: I.set,
        received: r.parsedType
      }), W;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (O(r, {
      code: S.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (O(r, {
      code: S.too_big,
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
          return W;
        c.status === "dirty" && t.dirty(), d.add(c.value);
      }
      return { status: t.value, value: d };
    }
    const o = [...r.data.values()].map((l, d) => s._parse(new pt(r, l, r.path, d)));
    return r.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new dn({
      ...this._def,
      minSize: { value: e, message: L.toString(t) }
    });
  }
  max(e, t) {
    return new dn({
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
dn.create = (n, e) => new dn({
  valueType: n,
  minSize: null,
  maxSize: null,
  typeName: G.ZodSet,
  ...q(e)
});
class Ui extends Q {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Ui.create = (n, e) => new Ui({
  getter: n,
  typeName: G.ZodLazy,
  ...q(e)
});
class qi extends Q {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return O(t, {
        received: t.data,
        code: S.invalid_literal,
        expected: this._def.value
      }), W;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
qi.create = (n, e) => new qi({
  value: n,
  typeName: G.ZodLiteral,
  ...q(e)
});
function Ga(n, e) {
  return new Lt({
    values: n,
    typeName: G.ZodEnum,
    ...q(e)
  });
}
class Lt extends Q {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return O(t, {
        expected: ee.joinValues(r),
        received: t.parsedType,
        code: S.invalid_type
      }), W;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return O(t, {
        received: t.data,
        code: S.invalid_enum_value,
        options: r
      }), W;
    }
    return Le(e.data);
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
    return Lt.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return Lt.create(this.options.filter((r) => !e.includes(r)), {
      ...this._def,
      ...t
    });
  }
}
Lt.create = Ga;
class Yi extends Q {
  _parse(e) {
    const t = ee.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== I.string && r.parsedType !== I.number) {
      const i = ee.objectValues(t);
      return O(r, {
        expected: ee.joinValues(i),
        received: r.parsedType,
        code: S.invalid_type
      }), W;
    }
    if (this._cache || (this._cache = new Set(ee.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = ee.objectValues(t);
      return O(r, {
        received: r.data,
        code: S.invalid_enum_value,
        options: i
      }), W;
    }
    return Le(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Yi.create = (n, e) => new Yi({
  values: n,
  typeName: G.ZodNativeEnum,
  ...q(e)
});
class Zn extends Q {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== I.promise && t.common.async === !1)
      return O(t, {
        code: S.invalid_type,
        expected: I.promise,
        received: t.parsedType
      }), W;
    const r = t.parsedType === I.promise ? t.data : Promise.resolve(t.data);
    return Le(r.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Zn.create = (n, e) => new Zn({
  type: n,
  typeName: G.ZodPromise,
  ...q(e)
});
class Pt extends Q {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === G.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (a) => {
        O(r, a), a.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "preprocess") {
      const a = i.transform(r.data, s);
      if (r.common.async)
        return Promise.resolve(a).then(async (o) => {
          if (t.value === "aborted")
            return W;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? W : l.status === "dirty" || t.value === "dirty" ? qt(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return W;
        const o = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? W : o.status === "dirty" || t.value === "dirty" ? qt(o.value) : o;
      }
    }
    if (i.type === "refinement") {
      const a = (o) => {
        const l = i.refinement(o, s);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? W : (o.status === "dirty" && t.dirty(), a(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? W : (o.status === "dirty" && t.dirty(), a(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!zt(a))
          return W;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => zt(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({
          status: t.value,
          value: o
        })) : W);
    ee.assertNever(i);
  }
}
Pt.create = (n, e, t) => new Pt({
  schema: n,
  typeName: G.ZodEffects,
  effect: e,
  ...q(t)
});
Pt.createWithPreprocess = (n, e, t) => new Pt({
  schema: e,
  effect: { type: "preprocess", transform: n },
  typeName: G.ZodEffects,
  ...q(t)
});
class ft extends Q {
  _parse(e) {
    return this._getType(e) === I.undefined ? Le(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ft.create = (n, e) => new ft({
  innerType: n,
  typeName: G.ZodOptional,
  ...q(e)
});
class Bt extends Q {
  _parse(e) {
    return this._getType(e) === I.null ? Le(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Bt.create = (n, e) => new Bt({
  innerType: n,
  typeName: G.ZodNullable,
  ...q(e)
});
class Ar extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let r = t.data;
    return t.parsedType === I.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ar.create = (n, e) => new Ar({
  innerType: n,
  typeName: G.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...q(e)
});
class Or extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return $n(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new it(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new it(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Or.create = (n, e) => new Or({
  innerType: n,
  typeName: G.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...q(e)
});
class Ki extends Q {
  _parse(e) {
    if (this._getType(e) !== I.nan) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: I.nan,
        received: r.parsedType
      }), W;
    }
    return { status: "valid", value: e.data };
  }
}
Ki.create = (n) => new Ki({
  typeName: G.ZodNaN,
  ...q(n)
});
class Af extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = t.data;
    return this._def.type._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ri extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? W : s.status === "dirty" ? (t.dirty(), qt(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return i.status === "aborted" ? W : i.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, t) {
    return new ri({
      in: e,
      out: t,
      typeName: G.ZodPipeline
    });
  }
}
class Mr extends Q {
  _parse(e) {
    const t = this._def.innerType._parse(e), r = (i) => (zt(i) && (i.value = Object.freeze(i.value)), i);
    return $n(t) ? t.then((i) => r(i)) : r(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mr.create = (n, e) => new Mr({
  innerType: n,
  typeName: G.ZodReadonly,
  ...q(e)
});
var G;
(function(n) {
  n.ZodString = "ZodString", n.ZodNumber = "ZodNumber", n.ZodNaN = "ZodNaN", n.ZodBigInt = "ZodBigInt", n.ZodBoolean = "ZodBoolean", n.ZodDate = "ZodDate", n.ZodSymbol = "ZodSymbol", n.ZodUndefined = "ZodUndefined", n.ZodNull = "ZodNull", n.ZodAny = "ZodAny", n.ZodUnknown = "ZodUnknown", n.ZodNever = "ZodNever", n.ZodVoid = "ZodVoid", n.ZodArray = "ZodArray", n.ZodObject = "ZodObject", n.ZodUnion = "ZodUnion", n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", n.ZodIntersection = "ZodIntersection", n.ZodTuple = "ZodTuple", n.ZodRecord = "ZodRecord", n.ZodMap = "ZodMap", n.ZodSet = "ZodSet", n.ZodFunction = "ZodFunction", n.ZodLazy = "ZodLazy", n.ZodLiteral = "ZodLiteral", n.ZodEnum = "ZodEnum", n.ZodEffects = "ZodEffects", n.ZodNativeEnum = "ZodNativeEnum", n.ZodOptional = "ZodOptional", n.ZodNullable = "ZodNullable", n.ZodDefault = "ZodDefault", n.ZodCatch = "ZodCatch", n.ZodPromise = "ZodPromise", n.ZodBranded = "ZodBranded", n.ZodPipeline = "ZodPipeline", n.ZodReadonly = "ZodReadonly";
})(G || (G = {}));
const Of = Rr.create;
gt.create;
Je.create;
const Mf = ce.create;
Gn.create;
Vn.create;
_t.create;
Lt.create;
Zn.create;
ft.create;
Bt.create;
function If(n, e) {
  return async (t, r, i) => {
    const s = zf(n, t), a = { ...t };
    for (const l of Object.keys(a))
      a[l] === null && (a[l] = void 0);
    return Ul(s, e)(a, r, i);
  };
}
function zf(n, e) {
  const r = Qr(n).shape, i = {};
  for (const [a, o] of Object.entries(r)) {
    const l = ei(o);
    if (!l || !l.renderIf) {
      i[a] = o;
      continue;
    }
    ir(l.renderIf, e) ? i[a] = o : i[a] = Of();
  }
  const s = Mf(i);
  if (ie(n, "ZodEffects")) {
    const o = n._def.effect;
    if (o.type === "refinement")
      return s.superRefine(o.refinement);
  }
  return s;
}
function Xi(n) {
  const e = document.getElementById(n);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function Lf({
  formName: n,
  errors: e
}) {
  const t = Object.keys(e).filter((h) => h !== "root"), r = t.length > 0, i = t.length, [s, a] = $(0), o = F([]);
  j(() => {
    const h = t, m = o.current, g = h.find(
      (v) => !m.includes(v)
    );
    if (g) {
      const v = on(n, void 0, g);
      Xi(v);
      const b = h.indexOf(g);
      b !== -1 && a(b);
    }
    o.current = h;
  }, [t, n]);
  const l = Y(
    (h) => {
      if (t.length === 0) return;
      const m = (h % t.length + t.length) % t.length;
      a(m);
      const g = t[m], v = on(n, void 0, g);
      Xi(v);
    },
    [t, n]
  ), d = Y(() => {
    l(s - 1);
  }, [s, l]), c = Y(() => {
    l(s + 1);
  }, [s, l]), u = Y(() => {
    a(0), o.current = [];
  }, []);
  return {
    fieldErrors: t,
    hasErrors: r,
    errorCount: i,
    currentErrorIndex: s,
    goToPreviousError: d,
    goToNextError: c,
    resetErrorNavigation: u
  };
}
function Pf(n) {
  const e = Ve(n);
  if (!ie(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let r, i;
  for (const s of t)
    s.kind === "min" ? r = s.value : s.kind === "max" && (i = s.value);
  return { min: r, max: i };
}
function vr(n) {
  const e = Ve(n);
  if (!ie(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let r, i;
  for (const s of t)
    s.kind === "min" ? r = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: r, maxDate: i };
}
function Bf(n) {
  const e = Ve(n);
  if (!ie(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let r;
  for (const i of t)
    i.kind === "max" && (r = i.value);
  return { maxLength: r };
}
function Ff(n) {
  const e = Ve(n);
  return ie(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "email") : !1;
}
function Hf(n) {
  const e = Ve(n);
  return ie(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "url") : !1;
}
function Ji(n) {
  return Ff(n) ? "email" : Hf(n) ? "url" : "text";
}
function Qi(n, e, t, r) {
  const i = {
    id: n,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    validation: e
  }, s = !Pa(e);
  switch (r) {
    case "text": {
      const a = "inputType" in t && t.inputType ? t.inputType : Ji(e);
      return {
        ...i,
        type: "text",
        inputType: a,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: a, max: o } = Pf(e);
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
      const { maxLength: a } = Bf(e);
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
      const a = vr(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = vr(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = vr(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
        inputType: Ji(e),
        renderIf: t.renderIf
      };
  }
}
function Un(n) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (let r = 0; r < n.length; r++) {
    if (t.has(r)) continue;
    const i = n[r], s = i.config.row;
    if (s) {
      const a = [];
      for (let l = r; l < n.length; l++)
        n[l].config.row === s && (a.push(n[l]), t.add(l));
      a.sort((l, d) => l.position - d.position);
      const o = {
        type: "row",
        fields: a.map(
          (l) => Qi(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(o);
    } else {
      t.add(r);
      const a = Qi(
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
function Va(n) {
  const e = n.shape, t = [], r = Object.entries(e);
  for (let i = 0; i < r.length; i++) {
    const [s, a] = r[i], o = ei(a);
    if (o) {
      const l = Th(a, o);
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
function jf(n, e) {
  return z(() => {
    const t = Qr(n), r = Va(t), i = [], s = {};
    for (const l of r) {
      const d = l.config.section;
      d ? (s[d] || (s[d] = []), s[d].push(l)) : i.push(l);
    }
    i.sort((l, d) => l.position - d.position);
    for (const l of Object.keys(s))
      s[l].sort((d, c) => d.position - c.position);
    const a = [];
    a.push(...Un(i));
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
          fields: Un(c)
        }
      };
      a.push(u);
    }
    return a;
  }, [n, e]);
}
function Um(n, e) {
  const t = Qr(n), r = Va(t), i = [], s = {};
  for (const l of r) {
    const d = l.config.section;
    d ? (s[d] || (s[d] = []), s[d].push(l)) : i.push(l);
  }
  i.sort((l, d) => l.position - d.position);
  for (const l of Object.keys(s))
    s[l].sort((d, c) => d.position - c.position);
  const a = [];
  a.push(...Un(i));
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
        fields: Un(c)
      }
    };
    a.push(u);
  }
  return a;
}
function $f(n) {
  const { validation: e } = n.forms;
  return (t, r) => {
    switch (t.code) {
      case S.invalid_type:
        return t.received === "undefined" || t.received === "null" ? { message: e.required } : { message: e.invalidType };
      case S.invalid_string:
        if (t.validation === "email")
          return { message: e.string.email };
        if (t.validation === "url")
          return { message: e.string.url };
        break;
      case S.too_small:
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
      case S.too_big:
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
      case S.invalid_date:
        return { message: e.date.invalid };
      case S.not_multiple_of:
        if (t.multipleOf === 1)
          return { message: e.number.integer };
        break;
      case S.invalid_literal:
        if (t.expected === !0)
          return { message: e.checkbox.mustBeChecked };
        break;
    }
    return { message: r.defaultError };
  };
}
function Wf(n) {
  const e = [];
  let t = [];
  const r = () => {
    t.length > 0 && (e.push({
      type: "switchGroup",
      fields: [...t]
    }), t = []);
  };
  return n.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (r(), i.type === "field" ? e.push({
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
  }), r(), e;
}
const Gf = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Vf(n) {
  const e = un(), { forms: t } = e, { name: r, schema: i, sections: s, defaultValues: a, onSubmit: o, submitConfig: l, className: d, errorTriggerMode: c = "on-blur", styling: u, formRef: h } = n, m = u?.showSectionsSidepanel ?? !1, g = l?.type === "action-bar", v = l?.label ?? "Submit", b = l?.icon === null ? void 0 : l?.icon ?? No, k = l?.type !== "action-bar" && l?.hideSubmitButton, N = !g && !k, _ = l?.type === "action-bar" && l?.discardable, D = g ? l?.discardConfig : void 0, x = D?.label ?? t.actionBar.discard, w = D?.icon === null ? void 0 : D?.icon ?? Ro, y = g ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, E = g && !!l?.centerActionBarInFrameContent, P = jf(i, s), T = z(() => P.filter((U) => U.type === "section").map((U) => U.id), [P]), [C, R] = $(T[0]), A = Y((U) => {
    R(U);
    const se = on(r, U), ae = document.getElementById(se);
    ae && ae.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [r]), V = z(() => !s || !m ? [] : T.map((U) => ({
    id: U,
    label: s[U]?.title ?? U,
    onClick: () => A(U)
  })), [s, T, m, A]), oe = z(() => $f(e), [e]), le = Gf[c], re = z(() => If(i, {
    errorMap: oe
  }), [i, oe]), ne = ql({
    resolver: re,
    mode: le,
    defaultValues: a
  }), te = ne.formState.errors.root, { isDirty: ve, isSubmitting: Ze, errors: ue } = ne.formState, { hasErrors: he, errorCount: we, goToPreviousError: Qe, goToNextError: pe, resetErrorNavigation: Pe } = Lf({
    formName: r,
    errors: ue
  }), ye = async (U) => {
    const se = {
      ...U
    };
    for (const Fe of Object.keys(se))
      se[Fe] === null && (se[Fe] = void 0);
    const ae = await o(se);
    ae.success ? (ne.reset(U), Pe()) : (ae.errors && Object.entries(ae.errors).forEach(([Fe, Ct]) => {
      ne.setError(Fe, {
        message: Ct
      });
    }), ae.rootMessage && ne.setError("root", {
      message: ae.rootMessage
    }));
  }, _e = () => {
    ne.reset(), Pe();
  }, X = F(null);
  j(() => {
    if (h) {
      const U = {
        submit: () => new Promise((se, ae) => {
          ne.handleSubmit(async (Fe) => {
            await ye(Fe), se();
          }, () => {
            ae(new Error("Form validation failed"));
          })();
        }),
        reset: () => {
          ne.reset(), Pe();
        },
        isDirty: () => ne.formState.isDirty,
        _setStateCallback: (se) => {
          X.current = se;
        }
      };
      h.current = U;
    }
    return () => {
      h && (h.current = null);
    };
  }, [h, ne, Pe]), j(() => {
    X.current && X.current({
      isSubmitting: Ze,
      hasErrors: he
    });
  }, [Ze, he]);
  const et = Wf(P), Ce = z(() => ({
    formName: r
  }), [r]), Be = M("form", {
    onSubmit: ne.handleSubmit(ye),
    className: J("flex flex-col", Rh, d),
    children: [et.map((U, se) => {
      const ae = se !== 0 && U.type !== "section" ? "mt-4" : "";
      switch (U.type) {
        case "switchGroup":
          return f("div", {
            className: ae,
            children: f(ja, {
              fields: U.fields
            })
          }, `switch-group-${se}`);
        case "field":
          return f("div", {
            className: ae,
            children: f(ni, {
              field: U.item.field
            })
          }, U.item.field.id);
        case "row":
          return f("div", {
            className: ae,
            children: f(Ha, {
              row: U.item
            })
          }, `row-${U.index}`);
        case "section":
          return f("div", {
            className: se !== 0 ? Nh : "",
            children: f(sf, {
              section: U.item
            })
          }, U.item.id);
        default:
          return null;
      }
    }), te && f("p", {
      className: "mt-4 text-base font-medium text-f1-foreground-critical",
      children: te.message
    }), !g && N && f("div", {
      className: "mt-4",
      children: f(je, {
        type: "submit",
        label: v,
        icon: b,
        loading: Ze,
        disabled: he
      })
    })]
  });
  return f(Ma.Provider, {
    value: Ce,
    children: M(Yl, {
      ...ne,
      children: [m && V.length > 0 ? M("div", {
        className: "flex w-full gap-4",
        children: [f("div", {
          className: "shrink-0 sticky top-4 h-fit self-start pt-3",
          children: f(Ds, {
            items: V,
            activeItem: C,
            scrollable: !1
          })
        }), f("div", {
          className: "w-px bg-f1-border-secondary"
        }), f("div", {
          className: "flex flex-1 justify-center",
          children: Be
        })]
      }) : Be, g && f(Kl, {
        isOpen: ve,
        variant: "light",
        centerInFrameContent: E,
        label: he ? void 0 : y,
        leftContent: he ? M("div", {
          className: "flex items-center gap-3",
          children: [M("div", {
            className: "flex items-center gap-0.5",
            children: [f(Lr, {
              icon: To,
              size: "md",
              color: "critical"
            }), f("span", {
              className: "font-medium text-f1-foreground-critical",
              children: we === 1 ? t.actionBar.issues.one.replace("{{count}}", String(we)) : t.actionBar.issues.other.replace("{{count}}", String(we))
            })]
          }), we > 1 && M("div", {
            className: "flex items-center gap-2",
            children: [f(je, {
              icon: Ao,
              onClick: Qe,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }), f(je, {
              icon: Oo,
              onClick: pe,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            })]
          })]
        }) : void 0,
        primaryActions: [{
          label: v,
          icon: b,
          onClick: ne.handleSubmit(ye),
          disabled: he
        }],
        secondaryActions: _ ? [{
          label: x,
          icon: w,
          onClick: _e
        }] : []
      })]
    })
  });
}
function qm() {
  const [n, e] = $(!1), [t, r] = $(!1), i = F((c) => {
    e(c.isSubmitting), r(c.hasErrors);
  }), s = F(null), a = F({
    get current() {
      return s.current;
    },
    set current(c) {
      s.current = c, c && c._setStateCallback(i.current);
    }
  }), o = Y(async () => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return s.current.submit();
  }, []), l = Y(() => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    s.current.reset();
  }, []), d = Y(() => s.current ? s.current.isDirty() : !1, []);
  return {
    formRef: a.current,
    submit: o,
    reset: l,
    isDirty: d,
    isSubmitting: n,
    hasErrors: t
  };
}
const Ym = Re("F0Form", Vf), Zf = ke((n, e) => f($r, {
  ref: e,
  variant: "heading",
  ...n
}));
Zf.displayName = "F0Heading";
const Km = Re(
  "F0GridStack",
  jr
), yr = 16, Uf = vt({
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
function Za(n, e = 0) {
  return n.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? Za(t.children, e + 1) : []]);
}
function qf(n, e) {
  const t = n.length;
  if (t <= yr) return n;
  const r = t / (yr - 1), i = new Set(Array.from({
    length: yr - 1
  }, (s, a) => Math.min(Math.floor(a * r), t - 1)));
  if (i.add(t - 1), e) {
    const s = n.findIndex((a) => a.id === e);
    if (s !== -1 && !i.has(s)) {
      const a = [...i].reduce((o, l) => Math.abs(l - s) < Math.abs(o - s) ? l : o);
      i.delete(a), i.add(s);
    }
  }
  return [...i].sort((s, a) => s - a).map((s) => n[s]);
}
function Yf({ items: n, activeItem: e, className: t, align: r = "left", variant: i = "dark" }) {
  const s = z(() => qf(Za(n), e), [n, e]);
  return f("div", {
    className: J("flex flex-col justify-center gap-2 py-3", r === "right" ? "items-end" : "items-start", t),
    children: s.map((a) => f("div", {
      className: Uf({
        depth: a.depth,
        variant: i,
        active: a.id === e
      })
    }, a.id))
  });
}
const Kf = 300, Xf = 0, Jf = vt({
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
function Qf({ title: n, items: e, className: t, activeItem: r, collapsible: i = !1, showChildrenCounter: s = !1, barsAlign: a = "left", size: o = "md", variant: l = "light" }) {
  const [d, c] = $(!1), u = F(!1), h = (g) => {
    g && !d && (u.current = !0), c(g);
  }, m = Y((g) => {
    !g || !u.current || (u.current = !1, requestAnimationFrame(() => {
      g.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return M(Mo, {
    open: d,
    onOpenChange: h,
    openDelay: Xf,
    closeDelay: Kf,
    children: [f(Io, {
      asChild: !0,
      children: f("button", {
        className: J(as(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": n ?? "Menu",
        children: f(Yf, {
          items: e,
          activeItem: r,
          align: a,
          variant: l
        })
      })
    }), f(zo, {
      ref: m,
      side: a === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: J(Jf({
        size: o
      }), !n && "pt-2", "scrollbar-macos"),
      children: f(Ds, {
        title: n,
        items: e,
        activeItem: r,
        collapsible: i,
        hideChildrenCounter: !s,
        scrollable: !1
      })
    })]
  });
}
const Xm = Re(
  "F0TableOfContentPopover",
  Qf
), em = ({ benefits: n }) => f("div", {
  className: "flex flex-col gap-2",
  children: n.map((e, t) => f(tm, {
    text: e
  }, t))
}), tm = ({ text: n }) => M("div", {
  className: "flex flex-row items-start gap-2",
  children: [f(Lr, {
    icon: Po,
    size: "md",
    className: "text-f1-icon-positive"
  }), f("span", {
    children: n
  })]
}), Ua = ke(({ title: n, image: e, benefits: t, actions: r, withShadow: i = !0, module: s, moduleName: a, tag: o, promoTag: l }, d) => M("div", {
  ref: d,
  className: J("bg-white flex flex-row rounded-xl border border-f1-border-secondary", i && "shadow-md"),
  children: [f("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: f("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), M("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [M("div", {
      className: "flex flex-col gap-5",
      children: [M("div", {
        className: "flex flex-col gap-2",
        children: [M("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && f(us, {
            module: s
          }), a && f("p", {
            className: "text-base font-medium text-f1-foreground",
            children: a
          })]
        }), (o || l) && M("div", {
          className: "flex justify-start gap-2",
          children: [o && f(Lo, {
            icon: o.icon,
            text: o.label
          }), l && f(Xl, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), f("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: n
        })]
      }), f(em, {
        benefits: t
      })]
    }), r && f("div", {
      className: "flex gap-3",
      children: r
    })]
  })]
}));
Ua.displayName = "ProductBlankslate";
function nm({ isOpen: n, onClose: e, title: t, children: r, module: i, portalContainer: s }) {
  const [a, o] = $(n);
  return j(() => {
    o(n);
  }, [n]), f(Bo, {
    open: a,
    onOpenChange: (d) => {
      o(d), d || e();
    },
    modal: !0,
    children: M(Fo, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [M("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [M(hs, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [i && f(us, {
            module: i,
            size: "lg"
          }), t]
        }), f(zr, {
          variant: "outline",
          icon: fs,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), M(ls, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [r, f(cs, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Jm({ isOpen: n, onClose: e, title: t, image: r, benefits: i, errorMessage: s, successMessage: a, loadingState: o, nextSteps: l, closeLabel: d, primaryAction: c, modalTitle: u, modalModule: h, secondaryAction: m, portalContainer: g, tag: v, promoTag: b, showResponseDialog: k = !0 }) {
  const [N, _] = $(n), [D, x] = $(null), [w, y] = $(!1), E = async () => {
    if (c?.onClick) {
      y(!0);
      try {
        await c.onClick(), _(!1), k && x("success");
      } catch {
        k && x("error");
      } finally {
        y(!1);
      }
    }
  }, P = () => {
    _(!1), e?.();
  }, T = w;
  return M(yt, {
    children: [f(nm, {
      isOpen: N,
      onClose: P,
      title: u,
      module: h,
      portalContainer: g,
      children: f("div", {
        className: "pb-4 pl-4",
        children: f(Ua, {
          title: t,
          image: r,
          benefits: i,
          withShadow: !1,
          tag: v,
          promoTag: b,
          actions: M("div", {
            className: "flex gap-3",
            children: [c && f(je, {
              variant: c.variant,
              label: T ? o.label : c.label,
              icon: c.icon || void 0,
              onClick: E,
              loading: c.loading,
              size: c.size
            }), m && f(je, {
              onClick: m.onClick,
              label: m.label,
              variant: m.variant,
              size: m.size,
              icon: m.icon
            })]
          })
        })
      })
    }), D && k && f(Ns, {
      open: !0,
      onClose: () => {
        P(), x(null);
      },
      success: D === "success",
      errorMessage: s,
      successMessage: a,
      nextSteps: l,
      closeLabel: d,
      portalContainer: g
    })]
  });
}
function rm({ mediaUrl: n, title: e, description: t, onClose: r, dismissible: i, width: s, trackVisibility: a, actions: o, showConfirmation: l = !0 }) {
  const [d, c] = $(!1), u = () => {
    c(!0), r && r();
  };
  j(() => {
    a && a(!d);
  }, [a, d]);
  const h = n?.includes(".mp4");
  return f(yt, {
    children: d ? null : M(Ho, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [M(jo, {
        children: [i && f("div", {
          className: "absolute right-2 top-2 z-10",
          children: f(je, {
            variant: "ghost",
            icon: fs,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          })
        }), M("div", {
          children: [f("div", {
            children: n && (h ? f("video", {
              src: n,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : f("img", {
              src: n,
              alt: e,
              className: "h-full w-full rounded-md"
            }))
          }), M("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [f(gi, {
              className: "text-lg font-medium",
              children: e
            }), f(gi, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), o && f($o, {
        className: "p-3",
        children: o.map((m) => m.type === "upsell" ? f(Rs, {
          label: m.label,
          onRequest: m.onClick,
          errorMessage: m.errorMessage,
          successMessage: m.successMessage,
          loadingState: m.loadingState,
          nextSteps: m.nextSteps,
          closeLabel: m.closeLabel,
          showConfirmation: l && m.showConfirmation,
          variant: m.variant
        }, m.label) : f(je, {
          label: m.label,
          onClick: m.onClick,
          variant: m.variant
        }, m.label))
      })]
    })
  });
}
const im = ke(function({ primaryAction: e, secondaryAction: t, ...r }, i) {
  const s = (l) => l.variant === "promote" ? f(Rs, {
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
  }) : f(je, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), a = e?.variant !== "promote" ? e : void 0, o = t?.variant !== "promote" ? t : void 0;
  return M(Jl, {
    ref: i,
    ...r,
    primaryAction: a,
    secondaryAction: o,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
im.displayName = "UpsellingBanner";
function Qm({ isOpen: n, setIsOpen: e, label: t, variant: r = "promote", size: i = "md", showIcon: s = !0, side: a = "right", align: o = "center", icon: l = Wo, mediaUrl: d, title: c, description: u, width: h = "300px", trackVisibility: m, actions: g, onClick: v, hideLabel: b = !1 }) {
  const [k, N] = $(!1), [_, D] = $(null), [x, w] = $(null), y = (R) => {
    e(R), v && v();
  }, E = async (R) => {
    if (R.type === "upsell") {
      w(R);
      try {
        await R.onClick(), R.showConfirmation && (N(!0), D("success"));
      } catch {
        N(!0), D("error");
      }
    }
  }, P = () => {
    D(null), N(!1), w(null), e(!1);
  }, T = n && !k, C = g?.map((R) => R.type === "upsell" ? {
    ...R,
    onClick: () => E(R)
  } : R);
  return M(yt, {
    children: [M(is, {
      open: T,
      onOpenChange: y,
      children: [f(ss, {
        asChild: !0,
        children: f(je, {
          variant: r,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(n),
          hideLabel: b
        })
      }), f(os, {
        side: a,
        align: o,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: f(rm, {
          mediaUrl: d,
          title: c,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: h,
          trackVisibility: m,
          actions: C,
          showConfirmation: !1
        })
      })]
    }), x?.type === "upsell" && x.showConfirmation && _ && f(Ns, {
      open: !0,
      onClose: P,
      success: _ === "success",
      errorMessage: x.errorMessage,
      successMessage: x.successMessage,
      nextSteps: x.nextSteps,
      closeLabel: x.closeLabel,
      portalContainer: null
    })]
  });
}
const sm = ({ isOpen: n = !1, onClose: e = () => {
}, type: t, title: r, description: i, primaryAction: s, secondaryAction: a }) => f(ms, {
  isOpen: n,
  onClose: e,
  variant: "notification",
  size: "sm",
  primaryAction: s,
  secondaryAction: a,
  type: t == "critical" ? "critical" : "default",
  modal: !0,
  children: M("div", {
    className: "flex flex-col gap-4 py-2",
    children: [f(Es, {
      type: t,
      size: "lg"
    }), M("div", {
      className: "flex flex-col gap-0.5",
      children: [f(hs, {
        className: "text-xl sm:text-lg",
        children: r
      }), f(Ql, {
        className: "text-lg sm:text-base",
        children: i
      })]
    })]
  })
}), am = async (n) => Promise.resolve(typeof n.value == "function" ? await n.value() : n.value), om = ({ items: n }) => {
  const [e, t] = $({}), r = (o) => e[o] > 0, i = (o, l) => {
    t((d) => ({
      ...d,
      [o]: (d[o] || 0) + l
    }));
  }, s = z(() => {
    const o = (l, d) => ({
      ...d,
      value: Nn(),
      onClick: async () => {
        d.nonBlocking || i(l.id, 1);
        try {
          const c = await am(d);
          l.onClickAction(d, c);
        } finally {
          d.nonBlocking || i(l.id, -1);
        }
        return Promise.resolve();
      }
    });
    return n.map((l) => ({
      ...l,
      actions: {
        primary: ci(l.actions.primary).map((d) => o(l, d)),
        secondary: ci(l.actions.secondary).map((d) => o(l, d))
      }
    }));
  }, [n]), a = z(() => {
    const o = (l, d) => ({
      ...d,
      disabled: d.disabled || r(l)
    });
    return s.map((l) => ({
      ...l,
      actions: {
        primary: l.actions.primary.map((d) => o(l.id, d)),
        secondary: l.actions.secondary.map((d) => o(l.id, d))
      }
    }));
  }, [s, e]);
  return f(yt, {
    children: a.map((o) => f(gs, {
      children: o.variant === "notification" ? f(sm, {
        title: o.title,
        description: o.description ?? "",
        type: o.type,
        isOpen: !0,
        onClose: o.onCloseDialog,
        primaryAction: o.actions.primary[0],
        secondaryAction: o.actions.secondary
      }, o.id) : o.variant === "drawer" ? f(Ta, {
        disableClose: r(o.id),
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
      }, o.id) : f(ms, {
        disableClose: r(o.id),
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
}, qa = Ge(null), lm = ({ children: n }) => {
  const [e, t] = $([]), [r, i] = $(!1);
  j(() => {
    i(!0);
  }, []);
  const s = Y((c) => {
    t((u) => [...u, c]);
  }, []), a = Y((c) => {
    t((u) => u.filter((h) => h.id !== c));
  }, []), o = Y((c) => {
    t((u) => [...u, c]);
  }, []), l = Y((c) => {
    t((u) => u.filter((h) => h.id !== c));
  }, []), d = z(() => ({
    addDialog: s,
    removeDialog: a,
    addDrawer: o,
    removeDrawer: l
  }), [s, a, o, l]);
  return M(qa.Provider, {
    value: d,
    children: [r && typeof document < "u" && Pr(f(om, {
      items: e
    }), document.body), n]
  });
}, Ya = () => {
  const n = Ie(qa);
  if (!n)
    throw new Error("useDialogsAlikeLayoutContext must be used within a DialogsAlikeLayoutProvider");
  return n;
}, ep = () => {
  const n = un(), { addDialog: e, removeDialog: t } = Ya(), r = F(/* @__PURE__ */ new Map()), i = (c) => s({
    ...c,
    variant: "default"
  }), s = (c) => new Promise((u) => {
    const h = c.id || Nn(), m = async (k, N) => {
      u(N ?? void 0), !k?.keepOpen && (r.current.delete(h), t(h));
    }, g = () => {
      m(void 0, void 0);
    }, v = {
      id: h,
      actions: c.actions,
      onCloseDialog: g,
      onClickAction: (k, N) => {
        m(k, N);
      }
    };
    let b;
    if (c.variant === "notification") {
      if (!c.type || c.type === "default")
        throw new Error("Notification dialog must have a type");
      b = {
        ...c,
        ...v,
        variant: "notification",
        type: c.type
      };
    } else
      b = {
        ...c,
        ...v,
        variant: "default",
        type: void 0
      };
    r.current.set(h, g), e(b);
  }), a = (c) => {
    const u = {
      type: c.type ?? "info",
      variant: "notification",
      description: c.msg,
      id: c.id || Nn(),
      title: c.title,
      content: f(yt, {}),
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
          label: c.confirm?.label || n.actions.ok
        }
      }
    }),
    confirm: (c) => a({
      ...c,
      actions: {
        primary: {
          value: c.confirm?.value ?? !0,
          label: c.confirm?.label || n.actions.ok
        },
        secondary: {
          value: c.cancel?.value ?? !1,
          label: c.cancel?.label || n.actions.cancel
        }
      }
    }),
    closeDialog: (c) => {
      const u = r.current.get(c);
      u ? u() : t(c);
    }
  };
}, tp = () => {
  const { addDrawer: n, removeDrawer: e } = Ya(), t = F(/* @__PURE__ */ new Map()), r = (a) => i({
    ...a,
    variant: "drawer"
  }), i = (a) => new Promise((o) => {
    const l = a.id || Nn(), d = async (h, m) => {
      o(m ?? void 0), !h?.keepOpen && (t.current.delete(l), e(l));
    }, c = () => {
      d(void 0, void 0);
    }, u = {
      ...a,
      id: l,
      onCloseDialog: c,
      onClickAction: (h, m) => {
        d(h, m);
      }
    };
    t.current.set(l, c), n(u);
  });
  return {
    openDrawer: r,
    closeDrawer: (a) => {
      const o = t.current.get(a);
      o ? o() : e(a);
    }
  };
}, cm = Ge(null), dm = ({ children: n, fullScreen: e = !0 }) => {
  const t = F(null), [r, i] = $(t.current);
  return Ko(() => {
    i(t.current);
  }, []), f(cm.Provider, {
    value: {
      element: r
    },
    children: f("div", {
      ref: t,
      id: "f0-layout",
      className: J({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: n
    })
  });
}, um = ({ children: n }) => f(nc, {
  reducedMotion: "user",
  children: n
}), np = ({ children: n, layout: e, link: t, privacyModeInitiallyEnabled: r, image: i, i18n: s, l10n: a, isDev: o = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: d = !1 }) => f(um, {
  children: f(Go, {
    isDev: o,
    showExperimentalWarnings: d,
    children: f(Vo, {
      ...a,
      children: f(Zo, {
        ...s,
        children: f(Uo, {
          ...t,
          children: f(dm, {
            ...e,
            children: f(qo, {
              children: f(ec, {
                initiallyEnabled: r,
                children: f(Yo, {
                  ...i,
                  children: f(tc, {
                    handler: l,
                    children: f(lm, {
                      children: n
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
}), es = (n) => `datacollection-${n}`, rp = {
  get: async (n) => JSON.parse(
    localStorage.getItem(es(n)) ?? "{}"
  ),
  set: async (n, e) => {
    localStorage.setItem(es(n), JSON.stringify(e));
  }
};
export {
  ap as A,
  Zg as AiChatTranslationsProvider,
  Cm as AreaChart,
  op as Await,
  km as BarChart,
  lp as Blockquote,
  Em as CategoryBarChart,
  cp as ChatSpinner,
  Tm as ComboChart,
  ym as Dashboard,
  kg as DndProvider,
  dp as Em,
  up as EmojiImage,
  hp as F0ActionItem,
  fp as F0AiChat,
  mp as F0AiChatProvider,
  pp as F0AiChatTextArea,
  gp as F0AiCollapsibleMessage,
  vp as F0AiFullscreenChat,
  Wm as F0Alert,
  Ug as F0AuraVoiceAnimation,
  yp as F0Avatar,
  Es as F0AvatarAlert,
  bp as F0AvatarCompany,
  Eg as F0AvatarDate,
  xp as F0AvatarEmoji,
  wp as F0AvatarFile,
  mo as F0AvatarIcon,
  Sg as F0AvatarList,
  us as F0AvatarModule,
  _p as F0AvatarPerson,
  Cp as F0AvatarTeam,
  Am as F0BigNumber,
  Om as F0Box,
  je as F0Button,
  kp as F0ButtonDropdown,
  Ep as F0ButtonToggle,
  Dg as F0Card,
  Co as F0Checkbox,
  jm as F0ChipList,
  Ss as F0DatePicker,
  Sp as F0Dialog,
  Dp as F0DialogAlikeContext,
  Np as F0DialogAlikeProvider,
  Rp as F0DialogContext,
  Tp as F0DialogProvider,
  Gm as F0Drawer,
  Ap as F0EventCatcherProvider,
  Dh as F0FilterPickerContent,
  Ym as F0Form,
  Km as F0GridStack,
  qg as F0HILActionConfirmation,
  Zf as F0Heading,
  Lr as F0Icon,
  go as F0Link,
  Op as F0MessageSources,
  Mp as F0OneIcon,
  Ip as F0OneSwitch,
  np as F0Provider,
  At as F0Select,
  Xm as F0TableOfContentPopover,
  Ng as F0TagAlert,
  Pl as F0TagBalance,
  Rg as F0TagCompany,
  zp as F0TagDot,
  Tg as F0TagList,
  Ag as F0TagPerson,
  Lo as F0TagRaw,
  Xl as F0TagStatus,
  Og as F0TagTeam,
  Ps as F0Text,
  Lp as F0Thinking,
  Pp as FullscreenChatContext,
  Bp as GROUP_ID_SYMBOL,
  Fp as H1,
  Hp as H2,
  jp as H3,
  _m as HomeLayout,
  $p as Hr,
  Wp as Image,
  bm as Layout,
  Gp as Li,
  Sm as LineChart,
  Vp as Ol,
  Zp as OneFilterPicker,
  Up as P,
  Dm as PieChart,
  qp as Pre,
  ec as PrivacyModeProvider,
  Ua as ProductBlankslate,
  Mg as ProductCard,
  Jm as ProductModal,
  rm as ProductWidget,
  Rm as ProgressBarChart,
  xm as StandardLayout,
  Yp as Strong,
  Kp as Table,
  Ig as Tag,
  zg as TagCounter,
  Xp as Td,
  Jp as Th,
  wm as TwoColumnLayout,
  Qp as Ul,
  Ns as UpsellRequestResponseDialog,
  im as UpsellingBanner,
  Rs as UpsellingButton,
  Qm as UpsellingPopover,
  Nm as VerticalBarChart,
  Yg as actionItemStatuses,
  Kg as aiTranslations,
  vm as avatarVariants,
  eg as buildTranslations,
  Lm as buttonDropdownSizes,
  zm as buttonDropdownVariants,
  Im as buttonSizes,
  Pm as buttonToggleSizes,
  Bm as buttonToggleVariants,
  Mm as buttonVariants,
  Lg as cardImageFits,
  Pg as cardImageSizes,
  Bg as createAtlaskitDriver,
  tg as createDataSourceDefinition,
  wc as createPageLayoutBlock,
  _c as createPageLayoutBlockGroup,
  rp as dataCollectionLocalStorageHandler,
  $m as datepickerSizes,
  ev as defaultTranslations,
  ng as downloadTableAsExcel,
  ir as evaluateRenderIf,
  Re as experimental,
  Vm as f0FormField,
  rg as f0MarkdownRenderers,
  on as generateAnchorId,
  ig as getAnimationVariants,
  sg as getDataSourcePaginationType,
  ag as getEmojiLabel,
  ei as getF0Config,
  Um as getSchemaDefinition,
  Zm as hasF0Config,
  Th as inferFieldType,
  og as isInfiniteScrollPagination,
  lg as isPageBasedPagination,
  ie as isZodType,
  Fm as linkVariants,
  cg as modules,
  Xg as oneIconSizes,
  Fg as predefinedPresets,
  Hg as selectSizes,
  Hm as tagDotColors,
  Ve as unwrapZodSchema,
  dg as useAiChat,
  Jg as useAiChatTranslations,
  ug as useData,
  hg as useDataSource,
  fg as useDefaultCopilotActions,
  ep as useDialog,
  jg as useDndEvents,
  $g as useDraggable,
  tp as useDrawer,
  Wg as useDroppableList,
  mg as useEmojiConfetti,
  pg as useF0Dialog,
  gg as useF0DialogAlikeContext,
  qm as useF0Form,
  vg as useGroups,
  yg as useMessageSourcesAction,
  bg as useOrchestratorThinkingAction,
  Gg as usePrivacyMode,
  xg as useReducedMotion,
  jf as useSchemaDefinition,
  wg as useSelectable,
  _g as useXRay
};
