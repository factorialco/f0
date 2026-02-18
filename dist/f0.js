import { a6 as X, a7 as vt, aa as Ji, ab as Mr, ac as Ir, ad as Za, ae as Ua, af as Qi, ag as qe, u as Zn, ah as zr, ai as qa, aj as Ya, ak as Ka, al as Xa, am as Me, an as Ie, ao as Ja, ap as Qa, aq as es, ar as eo, as as kn, at as ts, au as ns, av as rs, aw as is, ax as ss, ay as as, az as to, aA as no, aB as ro, aC as io, aD as so, a8 as Be, aE as ai, aF as ao, aG as oo, aH as os, aI as lo, aJ as Nt, aK as co, aL as uo, aM as ho, aN as fo, aO as mo, aP as po, aQ as go, aR as vo, aS as yo, aT as bo, aU as xo, aV as ls, aW as wo, aX as _o, aY as Co, aZ as Eo, a_ as ko, a$ as cs, b0 as So, b1 as Do, b2 as Ro, b3 as No, b4 as To, b5 as Oo, I as Ao, b6 as Mo, b7 as Io, b8 as zo, b9 as Lo } from "./F0AiChat-CTxU6Jgv.js";
import { A as Fm, bp as Hm, B as jm, C as $m, E as Wm, bE as Gm, h as Vm, F as Zm, a as Um, x as qm, i as Ym, b as Km, ba as Xm, bb as Jm, bc as Qm, bd as ep, bf as tp, bg as np, bh as rp, bi as ip, bj as sp, bk as ap, bl as op, bA as lp, s as cp, t as dp, v as up, bo as hp, w as fp, c as mp, bq as pp, n as gp, o as vp, p as yp, H as bp, k as xp, L as wp, O as _p, bn as Cp, q as Ep, P as kp, S as Sp, T as Dp, l as Rp, m as Np, U as Tp, bB as Op, bv as Ap, r as Mp, j as Ip, by as zp, bu as Lp, bF as Pp, bt as Bp, bs as Fp, be as Hp, d as jp, br as $p, bw as Wp, e as Gp, bG as Vp, bm as Zp, bx as Up, g as qp, f as Yp, bD as Kp, bz as Xp, bC as Jp } from "./F0AiChat-CTxU6Jgv.js";
import { jsx as f, jsxs as M, Fragment as cn } from "react/jsx-runtime";
import V, { forwardRef as Ee, useRef as F, useImperativeHandle as Po, Children as Sn, createContext as Xe, useContext as Fe, useState as Z, useMemo as B, useEffect as j, useCallback as J, useLayoutEffect as yr, createElement as oi, isValidElement as ds, Fragment as Bo, memo as Fo, useReducer as Ho, cloneElement as jo, PureComponent as $o } from "react";
import { createPortal as us, unstable_batchedUpdates as bn } from "react-dom";
import { L as hs, C as Wo, i as fs, D as Go, S as li, a as Vo, f as or, b as Vt, c as Zo, A as Uo, d as xn, e as ms, E as qo, g as Cn, h as Yo, j as Ko, k as Xo, l as St, m as ps, u as Jo, G as Qo, n as el, o as ci, p as tl, q as gs, r as nl, B as vs, X as ys, Y as br, s as rl, t as bs, v as il, w as sl, x as al, y as ol, z as ll, F as cl, H as dl, I as ul, J as di, K as hl, M as Ut, N as lr, O as fl, P as ml, Q as pl, R as gl, T as vl, U as yl, V as bl, W as xl, Z as wl, _ as _l, $ as Cl, a0 as ui, a1 as El, a2 as kl, a3 as xs, a4 as Sl, a5 as Dl, a6 as Rl, a7 as Lr, a8 as hi, a9 as Nl, aa as Tl, ab as Ol, ac as Al, ad as Ml, ae as Il, af as zl, ag as Ll, ah as Pl, ai as ws, aj as Bl, ak as Fl, al as _s, am as fi, an as Cs, ao as Hl, ap as jl, aq as $l, ar as Wl } from "./DataCollectionStorageProvider-B0FaXD_U.js";
import { aI as eg, as as tg, at as ng, aw as rg, aA as ig, aB as sg, aD as ag, aE as og, aF as lg, aG as cg, az as dg, aC as ug, au as hg, av as fg, aH as mg, ax as pg, ay as gg, aJ as vg, aK as yg, aL as bg, aM as xg } from "./DataCollectionStorageProvider-B0FaXD_U.js";
import { A as _g, F as Cg, c as Eg, b as kg, a as Sg, o as Dg, u as Rg } from "./F0HILActionConfirmation-D8y1ITUc.js";
import { defaultTranslations as Tg } from "./i18n-provider-defaults.js";
import './f0.css';const Gl = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Vl = Ee(function({ widgets: e, children: t }, r) {
  const i = F(null);
  Po(r, () => i.current);
  const s = Sn.toArray(e).filter((a) => !!a).map((a, o) => f("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: a
  }, o));
  return f(hs, {
    layout: "home",
    children: M("div", {
      ref: i,
      className: "@container",
      children: [M("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [f(Wo, {
          columns: Gl,
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
}), Zl = vt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Es = V.forwardRef(({ children: n, variant: e, className: t, ...r }, i) => f(hs, {
  layout: "standard",
  children: f("section", {
    ref: i,
    className: X("relative flex-1 overflow-auto", t),
    ...r,
    children: f("div", {
      className: X(Zl({
        variant: e
      })),
      children: n
    })
  })
}));
Es.displayName = "StandardLayout";
const Ul = Ee(function({ children: e, sideContent: t, mainColumnPosition: r = "left", sticky: i = !1 }, s) {
  return f("div", {
    ref: s,
    className: "h-full",
    children: M("div", {
      className: X("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", i && "md:sticky md:top-0 md:max-h-full"),
      children: [f("main", {
        className: X("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), f(ql, {
        sticky: i,
        className: X("order-1", r === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), ql = ({ children: n, className: e }) => f("aside", {
  className: X("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: n
}), ks = Xe(null);
function Ss() {
  const n = Fe(ks);
  if (!n)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return n;
}
function Yl(n) {
  const { content: e, ...t } = n;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function Dt(n) {
  const e = Yl(n);
  return n.subGridOpts?.children && (e.subGridOpts = {
    ...n.subGridOpts,
    children: n.subGridOpts.children.map(
      (t) => Dt(t)
    )
  }), e;
}
const Kl = ["noMove", "noResize", "locked", "w", "h", "x", "y"], ct = 200;
function Xl(n) {
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
function Jl({ children: n, options: e, onResizeStop: t, onChange: r, widgets: i }) {
  const [s, a] = Z(null), o = F(null), l = F(!1), c = B(() => ({
    ...e,
    children: (i || []).map((_) => Dt(_))
  }), [e, i]), [d, u] = Z(() => {
    const _ = /* @__PURE__ */ new Map(), D = i || [], b = (x) => {
      x.id && x.content && _.set(x.id, x.content), x.subGridOpts?.children && x.subGridOpts.children.forEach((y) => {
        b(y);
      });
    };
    return D.forEach((x) => {
      b(x);
    }), _;
  }), h = F(d);
  j(() => {
    h.current = d;
  }, [d]);
  const [m, g] = Z(() => {
    const _ = /* @__PURE__ */ new Map(), D = i || [], b = (x) => {
      x.id && x._originalContent !== void 0 && _.set(x.id, x._originalContent), x.subGridOpts?.children && x.subGridOpts.children.forEach((y) => {
        b(y);
      });
    };
    return D.forEach((x) => {
      b(x);
    }), _;
  }), v = F(m);
  j(() => {
    v.current = m;
  }, [m]);
  const [w, S] = Z(() => {
    const _ = /* @__PURE__ */ new Map(), D = i || [], b = (x) => {
      if (x.id) {
        const y = Dt(x);
        _.set(x.id, y);
      }
      x.subGridOpts?.children && x.subGridOpts.children.forEach((y) => {
        b(y);
      });
    };
    return D.forEach((x) => {
      b(x);
    }), _;
  });
  Ji(() => {
    if (!s) return;
    const _ = s.save();
    if (!Array.isArray(_))
      return;
    const D = _.map((T) => T.id), b = i || [], x = b.map((T) => T.id), y = b.filter((T) => !D.includes(T.id));
    y.length > 0 && (y.forEach((T) => {
      T.content && h.current.set(T.id, T.content), T._originalContent !== void 0 && v.current.set(T.id, T._originalContent);
    }), y.forEach((T) => {
      const C = Dt(T);
      s.addWidget(C);
    }), S((T) => {
      const C = new Map(T);
      return y.forEach((R) => {
        const O = Dt(R);
        C.set(R.id, O);
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
    const E = _.filter((T) => !x.includes(T.id));
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
      }), S((C) => {
        const R = new Map(C);
        return T.forEach((O) => {
          setTimeout(() => {
            R.delete(O);
          }, ct);
        }), R;
      }), u((C) => {
        const R = new Map(C);
        return T.forEach((O) => {
          if (R.get(O)) {
            const ae = s.el.querySelector(`[gs-id="${O}"] .grid-stack-item-content`);
            let oe = "";
            ae && (oe = Xl(ae)), R.set(O, f(Mr.div, {
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
                __html: oe
              }
            }));
          }
          setTimeout(() => {
            R.delete(O);
          }, ct);
        }), R;
      }), g((C) => {
        const R = new Map(C);
        return T.forEach((O) => {
          setTimeout(() => {
            R.delete(O);
          }, ct);
        }), R;
      });
    }
    const L = b.filter((T) => D.includes(T.id));
    if (L.length > 0) {
      const T = [];
      L.forEach((C) => {
        const R = _.find((G) => G.id === C.id);
        if (!R)
          return;
        const O = Kl.filter((G) => R[G] !== C[G]);
        if (O.length > 0) {
          const G = {}, ae = ["w", "h", "x", "y"], oe = ["noMove", "noResize", "locked"], re = O.filter((te) => ae.includes(te)), ne = O.filter((te) => oe.includes(te));
          if (re.length > 0 && ne.length > 0 && re.length + ne.length === O.length ? ne.forEach((te) => {
            const ve = C[te];
            ve !== void 0 && (G[te] = ve);
          }) : O.forEach((te) => {
            const ve = C[te];
            ve !== void 0 && (G[te] = ve);
          }), Object.keys(G).length > 0) {
            const te = s.el.querySelector(`[gs-id="${C.id}"]`);
            te && T.push({
              id: C.id,
              element: te,
              updateOptions: G
            });
          }
        }
      }), L.forEach((C) => {
        C.content && h.current.set(C.id, C.content), C._originalContent !== void 0 && v.current.set(C.id, C._originalContent);
      }), T.forEach(({ element: C, updateOptions: R }) => {
        try {
          s.update(C, R);
        } catch (O) {
          console.warn("Error updating widget:", O);
        }
      }), S((C) => {
        const R = new Map(C);
        return L.forEach((O) => {
          const G = Dt(O);
          R.set(O.id, G);
        }), R;
      }), u((C) => {
        const R = new Map(C);
        return L.forEach((O) => {
          O.content && R.set(O.id, O.content);
        }), R;
      }), g((C) => {
        const R = new Map(C);
        return L.forEach((O) => {
          O._originalContent !== void 0 && R.set(O.id, O._originalContent);
        }), R;
      });
    }
    l.current || (l.current = !0);
  }, [i]), j(() => {
    if (!s || !c.handle) return;
    s.opts && (s.opts.handle = c.handle);
    const _ = setTimeout(() => {
      if (s && s.el && c.handle && s.el.querySelectorAll(c.handle).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(_);
  }, [s, c.handle, c.children]);
  const N = J(() => {
    if (!s)
      return;
    const _ = s.save();
    if (Array.isArray(_)) {
      const D = _.map((b) => {
        const x = b.id;
        if (!x) return null;
        const y = h.current.get(x), E = v.current.get(x), L = b;
        return {
          ...b,
          id: x,
          w: b.w ?? 1,
          h: b.h ?? 1,
          x: b.x ?? 0,
          y: b.y ?? 0,
          meta: L.meta,
          _originalContent: E,
          content: y ?? f("div", {
            children: "No content"
          })
        };
      }).filter((b) => b !== null);
      r?.(D);
    }
  }, [s]);
  return j(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const _ = (D, b) => {
      t?.(D, b);
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
        } catch (b) {
          console.warn("Error cleaning up GridStack event listeners:", b);
        }
    };
  }, [s, t, N]), j(() => {
    o.current = s;
  }, [s]), j(() => {
    s && s.el && s.el.parentElement && l.current && N();
  }, [s]), f(ks.Provider, {
    value: {
      options: c,
      gridStack: s,
      _gridStack: {
        value: s,
        set: a
      },
      _rawWidgetMetaMap: {
        value: w,
        set: S
      },
      _reactContentMap: {
        value: d,
        set: u
      }
    },
    children: n
  });
}
const Ds = Xe(null);
function Ql() {
  const n = Fe(Ds);
  if (!n)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return n;
}
const ec = Xe(null);
function tc() {
  const { _reactContentMap: n } = Ss(), { getWidgetContainer: e } = Ql();
  return f(cn, {
    children: Array.from(n.value.entries()).map(([t, r]) => {
      const i = e(t);
      return i ? f(ec.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: r && us(r, i)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function nc(n, e, t, r, i) {
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
    const s = e.getBoundingClientRect(), a = i.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(a.bottom, o), c = s.top - Math.max(a.top, 0), d = i.scrollTop;
    c < 0 && r < 0 ? e.offsetHeight > a.height ? i.scrollTop += r : i.scrollTop += Math.abs(c) > Math.abs(r) ? r : c : l > 0 && r > 0 && (e.offsetHeight > a.height ? i.scrollTop += r : i.scrollTop += l > r ? r : l), t.top += i.scrollTop - d;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, r) {
    const i = p.getScrollElement(t), s = i.clientHeight, a = i === p.getScrollElement() ? 0 : i.getBoundingClientRect().top, o = e.clientY - a, l = o < r, c = o > s - r;
    l ? i.scrollBy({ behavior: "smooth", top: o - r }) : c && i.scrollBy({ behavior: "smooth", top: r - (s - o) });
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
class nt {
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
      let c;
      if (r.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(r, { ...r, y: e.y }, e) || !this.collide(r, { ...r, y: t.y - r.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const d = { ...t, y: r.y + r.h, ...o };
        c = this._loading && p.samePos(e, d) ? !0 : this.moveNode(e, d), (r.locked || this._loading) && c ? p.copyPos(t, e) : !r.locked && c && i.pack && (this._packNodes(), t.y = r.y + r.h, p.copyPos(e, t)), a = a || c;
      } else
        c = this.moveNode(r, { ...r, y: t.y + t.h, skip: e, ...o });
      if (!c)
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
      let c;
      a.locked || (a.autoPosition = !0, e === "list" && o && (c = l[o - 1])), this.addNode(a, !1, c);
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
    e._id = e._id ?? nt._idSeq++;
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
      const l = o % r, c = Math.floor(o / r);
      if (l + e.w > r)
        continue;
      const d = { x: l, y: c, w: e.w, h: e.h };
      t.find((u) => p.isIntercepted(d, u)) || ((e.x !== l || e.y !== c) && (e._dirty = !0), e.x = l, e.y = c, delete e.autoPosition, a = !0);
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
    const i = new nt({
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
    const t = new nt({
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
      const c = e._moving && !t.nested;
      let d = c ? this.directionCollideCoverage(e, t, o) : o[0];
      if (c && d && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = p.areaIntercept(t.rect, d._rect), h = p.area(t.rect), m = p.area(d._rect);
        u / (h < m ? h : m) > 0.8 && (d.grid.makeSubGrid(d.el, void 0, e), d = void 0);
      }
      d ? l = !this._fixCollisions(e, s, d, t) : (l = !1, r && delete t.pack);
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
      const l = s?.find((d) => d._id === o._id), c = { ...o, ...l || {} };
      p.removeInternalForSave(c, !e), t && t(o, c), a.push(c);
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
      this.compact(r, !1);
    else {
      if (a.length)
        if (typeof r == "function")
          r(t, e, s, a);
        else {
          const o = i || r === "none" ? 1 : t / e, l = r === "move" || r === "moveScale", c = r === "scale" || r === "moveScale";
          a.forEach((d) => {
            d.x = t === 1 ? 0 : l ? Math.round(d.x * o) : Math.min(d.x, t - 1), d.w = t === 1 || e === 1 ? 1 : c ? Math.round(d.w * o) || 1 : Math.min(d.w, t), s.push(d);
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
        s._id = o?._id ?? nt._idSeq++;
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
    e._id = e._id ?? nt._idSeq++;
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
nt._idSeq = 0;
const Re = {
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
const Pe = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class Ye {
}
function Dn(n, e) {
  n.touches.length > 1 || (n.cancelable && n.preventDefault(), p.simulateMouseEvent(n.changedTouches[0], e));
}
function Rs(n, e) {
  n.cancelable && n.preventDefault(), p.simulateMouseEvent(n, e);
}
function Rn(n) {
  Ye.touchHandled || (Ye.touchHandled = !0, Dn(n, "mousedown"));
}
function Nn(n) {
  Ye.touchHandled && Dn(n, "mousemove");
}
function Tn(n) {
  if (!Ye.touchHandled)
    return;
  Ye.pointerLeaveTimeout && (window.clearTimeout(Ye.pointerLeaveTimeout), delete Ye.pointerLeaveTimeout);
  const e = !!H.dragElement;
  Dn(n, "mouseup"), e || Dn(n, "click"), Ye.touchHandled = !1;
}
function On(n) {
  n.pointerType !== "mouse" && n.target.releasePointerCapture(n.pointerId);
}
function mi(n) {
  H.dragElement && n.pointerType !== "mouse" && Rs(n, "mouseenter");
}
function pi(n) {
  H.dragElement && n.pointerType !== "mouse" && (Ye.pointerLeaveTimeout = window.setTimeout(() => {
    delete Ye.pointerLeaveTimeout, Rs(n, "mouseleave");
  }, 10));
}
class Un {
  constructor(e, t, r) {
    this.host = e, this.dir = t, this.option = r, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Un.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), Pe && (this.el.addEventListener("touchstart", Rn), this.el.addEventListener("pointerdown", On)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), Pe && (this.el.removeEventListener("touchstart", Rn), this.el.removeEventListener("pointerdown", On)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Pe && (this.el.addEventListener("touchmove", Nn), this.el.addEventListener("touchend", Tn)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Pe && (this.el.removeEventListener("touchmove", Nn), this.el.removeEventListener("touchend", Tn)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
Un.prefix = "ui-resizable-";
class Pr {
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
class Qt extends Pr {
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
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Un(this.el, e, {
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
    this.elOriginStyleVal = Qt._originStyleProp.map((r) => this.el.style[r]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = p.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Qt._originStyleProp.forEach((e, t) => {
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
    const c = this._constrainSize(i.width, i.height, o, l);
    return Math.round(i.width) !== Math.round(c.width) && (t.indexOf("w") > -1 && (i.left += i.width - c.width), i.width = c.width), Math.round(i.height) !== Math.round(c.height) && (t.indexOf("n") > -1 && (i.top += i.height - c.height), i.height = c.height), i;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, r, i) {
    const s = this.option, a = (r ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, o = s.minWidth / this.rectScale.x || e, l = (i ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, c = s.minHeight / this.rectScale.y || t, d = Math.min(a, Math.max(o, e)), u = Math.min(l, Math.max(c, t));
    return { width: d, height: u };
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
Qt._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const rc = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class en extends Pr {
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
      e.addEventListener("mousedown", this._mouseDown), Pe && (e.addEventListener("touchstart", Rn), e.addEventListener("pointerdown", On));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), Pe && (t.removeEventListener("touchstart", Rn), t.removeEventListener("pointerdown", On));
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
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(rc) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete H.dragElement, delete H.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Pe && (e.currentTarget.addEventListener("touchmove", Nn), e.currentTarget.addEventListener("touchend", Tn)), e.preventDefault(), document.activeElement && document.activeElement.blur(), H.mouseHandled = !0), !0;
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
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Pe && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", Nn, !0), e.currentTarget.removeEventListener("touchend", Tn, !0)), this.dragging) {
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
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = p.cloneNode(this.el)), e.parentElement || p.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = en.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", en.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = r, 50);
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
en.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class ic extends Pr {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), Pe && (this.el.addEventListener("pointerenter", mi), this.el.addEventListener("pointerleave", pi)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), Pe && (this.el.removeEventListener("pointerenter", mi), this.el.removeEventListener("pointerleave", pi)));
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
class Br {
  static init(e) {
    return e.ddElement || (e.ddElement = new Br(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new en(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Qt(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new ic(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class sc {
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
    return i.length ? i.map((a) => a.ddElement || (r ? Br.init(a) : null)).filter((a) => a) : [];
  }
}
const be = new sc();
class P {
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
    const r = P.getGridElement(t);
    return r ? (r.gridstack || (r.gridstack = new P(r, p.cloneDeep(e))), r.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (P.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new P(i, p.cloneDeep(e))), r.push(i.gridstack);
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
    return (!e.classList.contains("grid-stack") || P.addRemoveCB) && (P.addRemoveCB ? r = P.addRemoveCB(e, t, !0, !0) : r = p.createDiv(["grid-stack", t.class], e)), P.init(t, r);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    P.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = p.createDiv([this.opts.placeholderClass, Re.itemClass, this.opts.itemClass]);
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
      const c = i.breakpoints;
      !i.columnWidth && !c?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, c?.length > 1 && c.sort((d, u) => (u.w || 0) - (d.w || 0)));
    }
    const s = {
      ...p.cloneDeep(Re),
      column: p.toNumber(e.getAttribute("gs-column")) || Re.column,
      minRow: r || p.toNumber(e.getAttribute("gs-min-row")) || Re.minRow,
      maxRow: r || p.toNumber(e.getAttribute("gs-max-row")) || Re.maxRow,
      staticGrid: p.toBool(e.getAttribute("gs-static")) || Re.staticGrid,
      sizeToContent: p.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Re.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Re.removableOptions.accept,
        decline: Re.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = p.toBool(e.getAttribute("gs-animate"))), t = p.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + Re.itemClass)?.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Re.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const c = t.cellHeight;
      delete t.cellHeight, this.cellHeight(c);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = Pe), this._setStaticClass();
    const l = t.engineClass || P.engineClass || nt;
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
    if (r.grid = this, r.el ? t = r.el : P.addRemoveCB ? t = P.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(r), !t)
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
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, P.renderCB(r, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : P.renderCB(r, e), t;
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
    let c = s.el.querySelector(".grid-stack-item-content"), d, u;
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, p.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), P.addRemoveCB ? d = P.addRemoveCB(this.el, u, !0, !1) : (d = p.createDiv(["grid-stack-item"]), d.appendChild(c), c = p.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), r) {
      const m = l ? t.column : s.w, g = s.h + r.h, v = s.el.style;
      v.transition = "none", this.update(s.el, { w: m, h: g }), setTimeout(() => v.transition = null);
    }
    const h = s.subGrid = P.addGrid(c, t);
    return r?._moving && (h._isTemp = !0), l && (h._autoColumn = !0), i && h.makeWidget(d, u), r && (r._moving ? window.setTimeout(() => p.simulateMouseEvent(r._event, "mouseenter", h.el), 0) : h.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), h;
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
  save(e = !0, t = !1, r = P.saveCB, i) {
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
      return delete a._alwaysShowResizeHandle, o !== void 0 ? a.alwaysShowResizeHandle = o : delete a.alwaysShowResizeHandle, p.removeInternalAndSame(a, Re), a.children = s, a;
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
  load(e, t = P.addRemoveCB || !0) {
    e = p.cloneDeep(e);
    const r = this.getColumn();
    e.forEach((d) => {
      d.w = d.w || d.minW || 1, d.h = d.h || d.minH || 1;
    }), e = p.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((d) => {
      i = Math.max(i, (d.x || 0) + d.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > r && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, r, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = P.addRemoveCB;
    typeof t == "function" && (P.addRemoveCB = t);
    const a = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, l = o && this.opts.animate;
    l && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      p.find(e, u.id) || (P.addRemoveCB && P.addRemoveCB(this.el, u, !1, !1), a.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const c = [];
    return this.engine.nodes = this.engine.nodes.filter((d) => p.find(e, d.id) ? (c.push(d), !1) : !0), e.forEach((d) => {
      const u = p.find(c, d.id);
      if (u) {
        if (p.shouldSizeToContent(u) && (d.h = u.h), this.engine.nodeBoundFix(d), (d.autoPosition || d.x === void 0 || d.y === void 0) && (d.w = d.w || u.w, d.h = d.h || u.h, this.engine.findEmptyPosition(d)), this.engine.nodes.push(u), p.samePos(u, d) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...d, forceCollide: !0 }), p.copyPos(d, u)), this.update(u.el, d), d.subGridOpts?.children) {
          const h = u.el.querySelector(".grid-stack");
          h && h.gridstack && h.gridstack.load(d.subGridOpts.children);
        }
      } else t && this.addWidget(d);
    }), delete this.engine._loading, this.engine.removedNodes = a, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? P.addRemoveCB = s : delete P.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
    const r = P.getElement(e);
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
    return e ? (P.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((a) => i === a.el)), s && (t && P.addRemoveCB && P.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, r), t && i.parentElement && i.remove());
    }), r && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((r) => {
      e && P.addRemoveCB && P.addRemoveCB(this.el, r, !1, !1), delete r.el.gridstackNode, this.opts.staticGrid || this._removeDD(r.el);
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
    return P.getElements(e).forEach((r) => {
      const i = r?.gridstackNode;
      if (!i)
        return;
      const s = { ...p.copyPos({}, i), ...p.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const a = ["x", "y", "w", "h"];
      let o;
      if (a.some((d) => s[d] !== void 0 && s[d] !== i[d]) && (o = {}, a.forEach((d) => {
        o[d] = s[d] !== void 0 ? s[d] : i[d], delete s[d];
      })), !o && (s.minW || s.minH || s.maxW || s.maxH) && (o = {}), s.content !== void 0) {
        const d = r.querySelector(".grid-stack-item-content");
        d && d.textContent !== s.content && (i.content = s.content, P.renderCB(d, s), i.subGrid?.el && (d.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, c = !1;
      for (const d in s)
        d[0] !== "_" && i[d] !== s[d] && (i[d] = s[d], l = !0, c = c || !this.opts.staticGrid && (d === "noResize" || d === "noMove" || d === "locked"));
      if (p.sanitizeMinMax(i), o) {
        const d = o.w !== void 0 && o.w !== i.w;
        this.moveNode(i, o), d && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(d, i), delete i._orig;
      }
      (o || l) && this._writeAttr(r, i), c && this.prepareDragDrop(i.el), P.updateCB && P.updateCB(i);
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
    if (t.resizeToContentParent && (a = e.querySelector(t.resizeToContentParent)), a || (a = e.querySelector(P.resizeToContentParent)), !a)
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
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${P.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
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
    u && d > u && (d = u, e.classList.add("size-to-content-max")), t.minH && d < t.minH ? d = t.minH : t.maxH && d > t.maxH && (d = t.maxH), d !== t.h && (r._ignoreLayoutsNodeChange = !0, r.moveNode(t, { h: d }), delete r._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    P.resizeToContentCB ? P.resizeToContentCB(e) : this.resizeToContent(e);
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
    return P.getElements(e).forEach((r) => {
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
    r = r || this._readAttr(e), e.gridstackNode = r, r.el = e, r.grid = this, r = this.engine.addNode(r, t), this._writeAttr(e, r), e.classList.add(Re.itemClass, this.opts.itemClass);
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
    return P.getElement(e);
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
    return this.opts.staticGrid ? this : (P.getElements(e).forEach((r) => {
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
    return this.opts.staticGrid ? this : (P.getElements(e).forEach((r) => {
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && P._itemRemoving(e.el, !1), this.engine.restoreInitial());
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
      o._temporaryRemoved = !0) : (o.w = l, o.h = c, o._temporaryRemoved = !0), P._itemRemoving(o.el, !1), be.on(s, "drag", r), r(i, s, a), !1;
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
      if (!o || (l && (this.engine.cleanupNode(o), o.grid = this), delete o.grid?._isTemp, be.off(s, "drag"), a !== s ? (a.remove(), s = a) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = o.subGrid?.el?.gridstack;
      return p.copyPos(o, this._readAttr(this.placeholder)), p.removePositioningStyles(s), c && (o.content || o.subGridOpts || P.addRemoveCB) ? (delete o.el, s = this.addWidget(o)) : (this._prepareElement(s, !0, o), this.el.appendChild(s), this.resizeToContentCheck(!1, o), u && (u.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, d && d.grid ? d : void 0, o), !1;
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
    return e ? (!this.opts.staticGrid && !be.isDroppable(e) && be.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, r) => P._itemRemoving(r, !0)).on(e, "dropout", (t, r) => P._itemRemoving(r, !1)), this) : this;
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
      const c = (h, m) => {
        this.triggerEvent(h, h.target), o = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, h, m, r, o, l);
      }, d = (h, m) => {
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
        start: c,
        stop: u,
        drag: d
      }).resizable(e, {
        start: c,
        stop: u,
        resize: d
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
    let l, c = this.opts.marginLeft, d = this.opts.marginRight, u = this.opts.marginTop, h = this.opts.marginBottom;
    const m = Math.round(a * 0.1), g = Math.round(s * 0.1);
    if (c = Math.min(c, g), d = Math.min(d, g), u = Math.min(u, m), h = Math.min(h, m), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const w = r.position.top - i._prevYPix;
      i._prevYPix = r.position.top, this.opts.draggable.scroll !== !1 && p.updateScrollPosition(e, r.position, w);
      const S = r.position.left + (r.position.left > i._lastUiPosition.left ? -d : c), N = r.position.top + (r.position.top > i._lastUiPosition.top ? -h : u);
      o.x = Math.round(S / s), o.y = Math.round(N / a);
      const _ = this._extraDragRow;
      if (this.engine.collide(i, o)) {
        const D = this.getRow();
        let b = Math.max(0, o.y + i.h - D);
        this.opts.maxRow && D + b > this.opts.maxRow && (b = Math.max(0, this.opts.maxRow - D)), this._extraDragRow = b;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== _ && this._updateContainerHeight(), i.x === o.x && i.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (p.updateScrollResize(t, e, a), o.w = Math.round((r.size.width - c) / s), o.h = Math.round((r.size.height - u) / a), i.w === o.w && i.h === o.h) || i._lastTried && i._lastTried.w === o.w && i._lastTried.h === o.h)
        return;
      const w = r.position.left + c, S = r.position.top + u;
      o.x = Math.round(w / s), o.y = Math.round(S / a), l = !0;
    }
    i._event = t, i._lastTried = o;
    const v = {
      x: r.position.left + c,
      y: r.position.top + u,
      w: (r.size ? r.size.width : i.w * s) - c - d,
      h: (r.size ? r.size.height : i.h * a) - u - h
    };
    if (this.engine.moveNodeCheck(i, { ...o, cellWidth: s, cellHeight: a, rect: v, resizing: l })) {
      i._lastUiPosition = r.position, this.engine.cacheRects(s, a, u, d, h, c), delete i._skipDown, l && i.subGrid && i.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const w = t.target;
      i._sidebarOrig || this._writePosAttr(w, i), this.triggerEvent(t, w);
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
    r._isExternal && this.engine.cleanupNode(r), r._sidebarOrig = i, this.opts.removable === !0 && P._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : r._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return nc(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
P.renderCB = (n, e) => {
  n && e?.content && (n.textContent = e.content);
};
P.resizeToContentParent = ".grid-stack-item-content";
P.Utils = p;
P.Engine = nt;
P.GDRev = "12.3.2";
const wn = /* @__PURE__ */ new WeakMap();
function ac({ children: n }) {
  const { _gridStack: { value: e, set: t }, options: r } = Ss(), i = F(/* @__PURE__ */ new Map()), s = F(null), a = F(r), o = J((d, u) => {
    if (u.id && u.grid) {
      let h = wn.get(u.grid);
      h || (h = /* @__PURE__ */ new Map(), wn.set(u.grid, h)), h.set(u.id, d), i.current.set(u.id, d);
    }
  }, []), l = J(() => {
    if (s.current) {
      P.renderCB = o;
      const d = P.init(a.current, s.current);
      return d && a.current.handle && d.opts && (d.opts.handle = a.current.handle), d;
    }
    return null;
  }, [o]), c = (d, u) => {
    const { children: h, ...m } = d, { children: g, ...v } = u;
    return fs(m, v);
  };
  return yr(() => {
    if (!c(r, a.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), wn.delete(e), a.current = r, t(null);
      } catch (d) {
        console.error("Error destroying gridstack", d);
      }
    else e && (a.current = r, r.handle && e.opts && (e.opts.handle = r.handle));
  }, [r, e, t]), yr(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (d) {
        console.error("Error initializing gridstack", d);
      }
  }, [e, l, t]), f(Ds.Provider, {
    value: B(() => ({
      getWidgetContainer: (d) => {
        if (e) {
          const u = wn.get(e);
          if (u?.has(d))
            return u.get(d) || null;
        }
        return i.current.get(d) || null;
      }
    }), [e]),
    children: f("div", {
      ref: s,
      children: e ? n : null
    })
  });
}
const Fr = ({ options: n, widgets: e, onChange: t, className: r }) => {
  const i = B(() => JSON.stringify(e.map((l) => ({
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
  }))), [e]), s = B(() => ({
    ...n,
    class: r
  }), [n, i, r]), a = (l, c, d) => {
    let u = d[0], h = 1 / 0;
    for (const m of d) {
      const g = m.w - l, v = m.h - c, w = g * g + v * v;
      w < h && (h = w, u = m);
    }
    return u;
  };
  return f(Jl, {
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
    children: f(ac, {
      children: f(tc, {})
    })
  });
};
Fr.displayName = "F0GridStack";
const oc = (n, e, t) => f("div", {
  children: n
}), qn = ({ widgets: n = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: r = oc, main: i = !1, deps: s }) => {
  const a = J((b, x, y) => f(Mr.div, {
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
    children: r(b, x, y)
  }), [r]), o = B(() => ({
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
  }), []), l = (b, x) => {
    if (typeof b.content == "function" && b.deps && x) {
      const y = {};
      return b.deps.forEach((E) => {
        typeof E == "string" && x[E] !== void 0 && (y[E] = x[E]);
      }), b.content(y);
    }
    return typeof b.content == "function" ? null : b.content;
  }, c = (b, x, y) => b.map((E) => {
    const L = l(E, y), T = {
      id: E.id,
      h: E.h ?? 1,
      w: E.w ?? 1,
      allowedSizes: E.availableSizes,
      noMove: !x,
      noResize: !x,
      locked: E.locked,
      meta: E.meta,
      _originalContent: L,
      content: a(L, E.meta, x)
    };
    return E.x !== void 0 && (T.x = E.x), E.y !== void 0 && (T.y = E.y), T;
  }), [d, u] = Z(c(n, e)), h = F(e), m = F(n), g = F(!1), v = F(/* @__PURE__ */ new Map()), w = F(n);
  w.current = n;
  const S = F(s), N = B(() => {
    const b = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || n.forEach((x) => {
      if (x.deps && x.deps.length > 0) {
        const y = x.deps.map((E) => typeof E == "string" && s[E] !== void 0 ? s[E] : E).filter((E) => E !== null);
        b.set(x.id, y);
      }
    }), b;
  }, [n, s]), _ = J((b) => {
    u(b), g.current || t(b.map((x) => {
      const y = w.current.find((E) => E.id === x.id);
      return {
        id: x.id,
        w: x.w ?? 1,
        h: x.h ?? 1,
        allowedSizes: x.allowedSizes,
        meta: x.meta,
        content: typeof y?.content == "function" ? y.content : x._originalContent,
        x: x.x ?? 0,
        y: x.y ?? 0,
        locked: x.locked,
        deps: y?.deps
      };
    })), g.current = !1;
  }, [t]), D = (b, x) => !b && !x ? !1 : !b || !x || b.length !== x.length ? !0 : b.some((y, E) => y !== x[E]);
  return j(() => {
    const b = h.current !== e, x = m.current !== n, y = S.current !== s && (S.current === void 0 || s === void 0 || Object.keys(S.current).length !== Object.keys(s).length || Object.keys(s).some((C) => S.current?.[C] !== s[C])), E = /* @__PURE__ */ new Map();
    n.forEach((C) => {
      if (C.deps && C.deps.length > 0) {
        const R = v.current.get(C.id), O = N.get(C.id);
        E.set(C.id, D(R, O)), O ? v.current.set(C.id, O) : v.current.delete(C.id);
      }
    });
    const L = new Set(n.map((C) => C.id));
    v.current.forEach((C, R) => {
      L.has(R) || v.current.delete(R);
    });
    const T = Array.from(E.values()).some((C) => C) || y;
    b && !x && !T ? (g.current = !0, u((C) => C.map((R) => {
      const O = n.find((ae) => ae.id === R.id);
      if (!O)
        return R;
      const G = l(O, s);
      return {
        ...R,
        noMove: !e,
        noResize: !e,
        locked: O.locked,
        meta: O.meta,
        _originalContent: G,
        content: a(G, O.meta, e)
      };
    }))) : (x || T) && u((C) => {
      const R = new Map(C.map((O) => [O.id, O]));
      return n.map((O) => {
        const G = R.get(O.id), ae = E.get(O.id) ?? !1;
        let oe;
        ae || !G ? oe = l(O, s) : oe = G._originalContent ?? l(O, s);
        const re = {
          id: O.id,
          h: G?.h ?? O.h ?? 1,
          w: G?.w ?? O.w ?? 1,
          allowedSizes: O.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: O.locked,
          meta: O.meta,
          _originalContent: oe,
          content: a(oe, O.meta, e)
        }, ne = G?.x ?? O.x, te = G?.y ?? O.y;
        return ne !== void 0 && (re.x = ne), te !== void 0 && (re.y = te), re;
      });
    }), h.current = e, m.current = n, S.current = s;
  }, [n, e, a, N, s]), f(Fr, {
    className: X(i && "h-full flex-1 overflow-auto"),
    options: o,
    onChange: _,
    widgets: d
  });
};
qn.displayName = "GroupGrid";
qn.__isPageLayoutGroup = !0;
const lc = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutBlock = !0, t;
}, cc = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutGroup = !0, t;
}, dc = (n, e) => f("svg", {
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
}), Ns = Ee(dc), uc = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], Ts = Ee((n, e) => {
  const t = uc.reduce((r, i) => {
    const { [i]: s, ...a } = r;
    return a;
  }, n);
  return f(Ir, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: n.icon == Ns
  });
});
Ts.displayName = "AIButton";
const cr = vt({
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
}), hc = {
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
}, Hr = Ee(({ content: n, variant: e, align: t, className: r, as: i, ellipsis: s, noEllipsisTooltip: a, markdown: o, ...l }, c) => {
  const d = i ?? hc[e ?? "body"];
  if (s !== void 0)
    return f(Za, {
      ref: c,
      lines: typeof s == "number" ? s : 1,
      noTooltip: a,
      tag: d,
      className: X(cr({
        variant: e,
        align: t
      }), r),
      markdown: o,
      ...l,
      children: n
    });
  if (o) {
    const u = Ua(n);
    return oi(d, {
      ...l,
      className: X(cr({
        variant: e,
        align: t
      }), r),
      ref: c,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return oi(d, {
    ...l,
    className: X(cr({
      variant: e,
      align: t
    }), r),
    ref: c
  }, n);
});
Hr.displayName = "Text";
const Os = Ee((n, e) => f(Hr, {
  ref: e,
  markdown: n.markdown ?? !0,
  ...n
}));
Os.displayName = "F0Text";
const Qf = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], As = ({ title: n, draggable: e = !1, onDragStart: t, onDragEnd: r, isDragging: i = !1, AIButton: s, actions: a, children: o, selected: l = !1 }) => {
  const [c, d] = Z(!1), [u, h] = Z(!1), m = Zn(), g = (w) => {
    d(w);
  }, v = u || c;
  return j(() => {
    if (!i || !r) return;
    const w = () => {
      r();
    };
    return document.addEventListener("mouseup", w), () => {
      document.removeEventListener("mouseup", w);
    };
  }, [i, r]), M("div", {
    className: X("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && c ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [M("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [M("div", {
        className: X("flex min-w-0 flex-1 items-center", !e && "pl-4", !a && !s && "pr-4"),
        children: [e && f("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: f(zr, {
            icon: qa,
            size: "xs"
          })
        }), f("div", {
          className: X("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: f(Os, {
            variant: "label",
            content: n,
            ellipsis: !0
          })
        })]
      }), f(Ya, {
        children: (s || a) && v && M(Mr.div, {
          className: X("flex shrink-0 items-center gap-0.5 pr-2", !a && "pr-4"),
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
            children: f(Ts, {
              size: "sm",
              label: m.ai.ask,
              onClick: s,
              icon: Ns
            })
          }), a && f(Ka, {
            items: a,
            open: c,
            onOpenChange: g,
            align: "end",
            children: f(Ir, {
              icon: Xa,
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
}, fc = () => M("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [f("div", {
    className: "flex h-12 w-full items-center px-4",
    children: f(qe, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), M("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [f(qe, {
      className: "h-1/2 w-full rounded-sm"
    }), f(qe, {
      className: "h-1/3 w-full rounded-sm"
    }), f(qe, {
      className: "h-1/5 w-full rounded-sm"
    }), f(qe, {
      className: "h-1/3 w-full rounded-sm"
    }), f(qe, {
      className: "h-full w-full rounded-sm"
    }), f(qe, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
As.displayName = "F0Widget";
const mc = Qi(As, fc), pc = ({ children: n, title: e, draggable: t = !1, actions: r, aiButton: i }) => f(mc, {
  title: e,
  draggable: t,
  actions: r,
  AIButton: i,
  children: n
}), Ms = ({ widgets: n, editMode: e = !1, onChange: t = () => {
}, deps: r, ...i }) => f(qn, {
  widgets: n,
  editMode: e,
  onChange: t,
  deps: r,
  ...i,
  WidgetWrapper: (s, a, o) => f(pc, {
    title: a?.title ?? "",
    draggable: o,
    actions: a?.actions,
    aiButton: a?.aiButton,
    children: s
  })
});
Ms.displayName = "Dashboard";
const gc = cc("Dashboard", Ms), em = Me("Dashboard", gc), vc = vt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), yc = (n) => (n || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), bc = (n) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(n) ? n.every(e) ? [{
    items: n
  }] : n : [n];
}, Yn = Ee(({ children: n, variant: e = "default", className: t, draggable: r = !1, onDragStart: i, onDragEnd: s, onDrop: a, dragId: o, primaryAction: l, ...c }, d) => {
  const u = B(() => bc(c.actions || []), [c.actions]), h = B(() => u.flatMap((g) => g.items), [u]), m = B(() => h.length > 0 || !!l, [h, l]);
  return M("div", {
    ref: d,
    className: X(vc({
      variant: e
    }), "relative", t),
    draggable: r,
    onDragStart: i,
    onDragEnd: s,
    onDrop: a,
    "data-drag-id": o,
    ...c,
    children: [m && M("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, h.length > 0 && f(Go, {
        items: yc(u)
      })]
    }), f("div", {
      children: n
    })]
  });
});
Yn.displayName = "Block";
Yn.__isPageLayoutBlock = !0;
const xc = ({ title: n = "", description: e, titleLevel: t = "h2", children: r, className: i, ...s }) => {
  if (!n) return null;
  const a = t;
  return M(Yn, {
    ...s,
    className: X("space-y-4", i),
    children: [M("div", {
      className: "space-y-2",
      children: [f(a, {
        className: X("font-semibold text-f1-foreground", {
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
}, wc = lc("BlockContent", xc), _c = (n) => !ds(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutBlock" in n.type, Cc = (n) => !ds(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutGroup" in n.type, Is = (n, e, t) => {
  const r = Sn.toArray(e);
  for (const i of r)
    t.includes("block") && _c(i) || t.includes("group") && Cc(i) || console.warn(
      `${n}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, jr = Ee(({ children: n, onSort: e, ...t }, r) => {
  Is("GroupLinear", n, ["block"]);
  const [i, s] = Z(Sn.toArray(n));
  return j(() => {
    s(Sn.toArray(n));
  }, [n]), j(() => {
    e?.(i);
  }, [i, e]), f("div", {
    ref: r,
    ...t,
    children: i.map((a, o) => f(Bo, {
      children: a
    }, o))
  });
});
jr.displayName = "GroupLinear";
jr.__isPageLayoutGroup = !0;
function Ec() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return B(
    () => (r) => {
      e.forEach((i) => i(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const Kn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Pt(n) {
  const e = Object.prototype.toString.call(n);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function $r(n) {
  return "nodeType" in n;
}
function xe(n) {
  var e, t;
  return n ? Pt(n) ? n : $r(n) && (e = (t = n.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Wr(n) {
  const {
    Document: e
  } = xe(n);
  return n instanceof e;
}
function dn(n) {
  return Pt(n) ? !1 : n instanceof xe(n).HTMLElement;
}
function zs(n) {
  return n instanceof xe(n).SVGElement;
}
function Bt(n) {
  return n ? Pt(n) ? n.document : $r(n) ? Wr(n) ? n : dn(n) || zs(n) ? n.ownerDocument : document : document : document;
}
const He = Kn ? yr : j;
function Xn(n) {
  const e = F(n);
  return He(() => {
    e.current = n;
  }), J(function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
function kc() {
  const n = F(null), e = J((r, i) => {
    n.current = setInterval(r, i);
  }, []), t = J(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [e, t];
}
function tn(n, e) {
  e === void 0 && (e = [n]);
  const t = F(n);
  return He(() => {
    t.current !== n && (t.current = n);
  }, e), t;
}
function un(n, e) {
  const t = F();
  return B(
    () => {
      const r = n(t.current);
      return t.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function An(n) {
  const e = Xn(n), t = F(null), r = J(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, r];
}
function Mn(n) {
  const e = F();
  return j(() => {
    e.current = n;
  }, [n]), e.current;
}
let dr = {};
function hn(n, e) {
  return B(() => {
    if (e)
      return e;
    const t = dr[n] == null ? 0 : dr[n] + 1;
    return dr[n] = t, n + "-" + t;
  }, [n, e]);
}
function Ls(n) {
  return function(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      r[i - 1] = arguments[i];
    return r.reduce((s, a) => {
      const o = Object.entries(a);
      for (const [l, c] of o) {
        const d = s[l];
        d != null && (s[l] = d + n * c);
      }
      return s;
    }, {
      ...e
    });
  };
}
const Tt = /* @__PURE__ */ Ls(1), nn = /* @__PURE__ */ Ls(-1);
function Sc(n) {
  return "clientX" in n && "clientY" in n;
}
function Jn(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: e
  } = xe(n.target);
  return e && n instanceof e;
}
function Dc(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: e
  } = xe(n.target);
  return e && n instanceof e;
}
function In(n) {
  if (Dc(n)) {
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
  return Sc(n) ? {
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
}), gi = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Rc(n) {
  return n.matches(gi) ? n : n.querySelector(gi);
}
const Nc = {
  display: "none"
};
function Tc(n) {
  let {
    id: e,
    value: t
  } = n;
  return V.createElement("div", {
    id: e,
    style: Nc
  }, t);
}
function Oc(n) {
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
  return V.createElement("div", {
    id: e,
    style: i,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, t);
}
function Ac() {
  const [n, e] = Z("");
  return {
    announce: J((r) => {
      r != null && e(r);
    }, []),
    announcement: n
  };
}
const Ps = /* @__PURE__ */ Xe(null);
function Mc(n) {
  const e = Fe(Ps);
  j(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(n);
  }, [n, e]);
}
function Ic() {
  const [n] = Z(() => /* @__PURE__ */ new Set()), e = J((r) => (n.add(r), () => n.delete(r)), [n]);
  return [J((r) => {
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
const zc = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Lc = {
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
function Pc(n) {
  let {
    announcements: e = Lc,
    container: t,
    hiddenTextDescribedById: r,
    screenReaderInstructions: i = zc
  } = n;
  const {
    announce: s,
    announcement: a
  } = Ac(), o = hn("DndLiveRegion"), [l, c] = Z(!1);
  if (j(() => {
    c(!0);
  }, []), Mc(B(() => ({
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
  const d = V.createElement(V.Fragment, null, V.createElement(Tc, {
    id: r,
    value: i.draggable
  }), V.createElement(Oc, {
    id: o,
    announcement: a
  }));
  return t ? us(d, t) : d;
}
var de;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(de || (de = {}));
function zn() {
}
function vi(n, e) {
  return B(
    () => ({
      sensor: n,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, e]
  );
}
function Bc() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return B(
    () => [...e].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const je = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Fc(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Hc(n, e) {
  const t = In(n);
  if (!t)
    return "0 0";
  const r = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function jc(n, e) {
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
function $c(n, e) {
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
function yi(n) {
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
function Bs(n, e) {
  if (!n || n.length === 0)
    return null;
  const [t] = n;
  return t[e];
}
const Wc = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: r
  } = n;
  const i = yi(e), s = [];
  for (const a of r) {
    const {
      id: o
    } = a, l = t.get(o);
    if (l) {
      const c = yi(l), d = i.reduce((h, m, g) => h + Fc(c[g], m), 0), u = Number((d / 4).toFixed(4));
      s.push({
        id: o,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(jc);
};
function Gc(n, e) {
  const t = Math.max(e.top, n.top), r = Math.max(e.left, n.left), i = Math.min(e.left + e.width, n.left + n.width), s = Math.min(e.top + e.height, n.top + n.height), a = i - r, o = s - t;
  if (r < i && t < s) {
    const l = e.width * e.height, c = n.width * n.height, d = a * o, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Vc = (n) => {
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
      const l = Gc(o, e);
      l > 0 && i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort($c);
};
function Zc(n, e, t) {
  return {
    ...n,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Fs(n, e) {
  return n && e ? {
    x: n.left - e.left,
    y: n.top - e.top
  } : je;
}
function Uc(n) {
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
const qc = /* @__PURE__ */ Uc(1);
function Hs(n) {
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
function Yc(n, e, t) {
  const r = Hs(e);
  if (!r)
    return n;
  const {
    scaleX: i,
    scaleY: s,
    x: a,
    y: o
  } = r, l = n.left - a - (1 - i) * parseFloat(t), c = n.top - o - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), d = i ? n.width / i : n.width, u = s ? n.height / s : n.height;
  return {
    width: d,
    height: u,
    top: c,
    right: l + d,
    bottom: c + u,
    left: l
  };
}
const Kc = {
  ignoreTransform: !1
};
function Ft(n, e) {
  e === void 0 && (e = Kc);
  let t = n.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = xe(n).getComputedStyle(n);
    c && (t = Yc(t, c, d));
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
function bi(n) {
  return Ft(n, {
    ignoreTransform: !0
  });
}
function Xc(n) {
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
function Jc(n, e) {
  return e === void 0 && (e = xe(n).getComputedStyle(n)), e.position === "fixed";
}
function Qc(n, e) {
  e === void 0 && (e = xe(n).getComputedStyle(n));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function Qn(n, e) {
  const t = [];
  function r(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Wr(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!dn(i) || zs(i) || t.includes(i))
      return t;
    const s = xe(n).getComputedStyle(i);
    return i !== n && Qc(i, s) && t.push(i), Jc(i, s) ? t : r(i.parentNode);
  }
  return n ? r(n) : t;
}
function js(n) {
  const [e] = Qn(n, 1);
  return e ?? null;
}
function ur(n) {
  return !Kn || !n ? null : Pt(n) ? n : $r(n) ? Wr(n) || n === Bt(n).scrollingElement ? window : dn(n) ? n : null : null;
}
function $s(n) {
  return Pt(n) ? n.scrollX : n.scrollLeft;
}
function Ws(n) {
  return Pt(n) ? n.scrollY : n.scrollTop;
}
function xr(n) {
  return {
    x: $s(n),
    y: Ws(n)
  };
}
var fe;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(fe || (fe = {}));
function Gs(n) {
  return !Kn || !n ? !1 : n === document.scrollingElement;
}
function Vs(n) {
  const e = {
    x: 0,
    y: 0
  }, t = Gs(n) ? {
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
const ed = {
  x: 0.2,
  y: 0.2
};
function td(n, e, t, r, i) {
  let {
    top: s,
    left: a,
    right: o,
    bottom: l
  } = t;
  r === void 0 && (r = 10), i === void 0 && (i = ed);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: h
  } = Vs(n), m = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, v = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !c && s <= e.top + v.height ? (m.y = fe.Backward, g.y = r * Math.abs((e.top + v.height - s) / v.height)) : !d && l >= e.bottom - v.height && (m.y = fe.Forward, g.y = r * Math.abs((e.bottom - v.height - l) / v.height)), !h && o >= e.right - v.width ? (m.x = fe.Forward, g.x = r * Math.abs((e.right - v.width - o) / v.width)) : !u && a <= e.left + v.width && (m.x = fe.Backward, g.x = r * Math.abs((e.left + v.width - a) / v.width)), {
    direction: m,
    speed: g
  };
}
function nd(n) {
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
function Zs(n) {
  return n.reduce((e, t) => Tt(e, xr(t)), je);
}
function rd(n) {
  return n.reduce((e, t) => e + $s(t), 0);
}
function id(n) {
  return n.reduce((e, t) => e + Ws(t), 0);
}
function Us(n, e) {
  if (e === void 0 && (e = Ft), !n)
    return;
  const {
    top: t,
    left: r,
    bottom: i,
    right: s
  } = e(n);
  js(n) && (i <= 0 || s <= 0 || t >= window.innerHeight || r >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const sd = [["x", ["left", "right"], rd], ["y", ["top", "bottom"], id]];
class Gr {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Qn(t), i = Zs(r);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, a, o] of sd)
      for (const l of a)
        Object.defineProperty(this, l, {
          get: () => {
            const c = o(r), d = i[s] - c;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class qt {
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
function ad(n) {
  const {
    EventTarget: e
  } = xe(n);
  return n instanceof e ? n : Bt(n);
}
function hr(n, e) {
  const t = Math.abs(n.x), r = Math.abs(n.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + r ** 2) > e : "x" in e && "y" in e ? t > e.x && r > e.y : "x" in e ? t > e.x : "y" in e ? r > e.y : !1;
}
var Ae;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(Ae || (Ae = {}));
function xi(n) {
  n.preventDefault();
}
function od(n) {
  n.stopPropagation();
}
var Y;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter", n.Tab = "Tab";
})(Y || (Y = {}));
const qs = {
  start: [Y.Space, Y.Enter],
  cancel: [Y.Esc],
  end: [Y.Space, Y.Enter, Y.Tab]
}, ld = (n, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (n.code) {
    case Y.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case Y.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case Y.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case Y.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Vr {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new qt(Bt(t)), this.windowListeners = new qt(xe(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ae.Resize, this.handleCancel), this.windowListeners.add(Ae.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ae.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, r = e.node.current;
    r && Us(r), t(je);
  }
  handleKeyDown(e) {
    if (Jn(e)) {
      const {
        active: t,
        context: r,
        options: i
      } = this.props, {
        keyboardCodes: s = qs,
        coordinateGetter: a = ld,
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
      } = r.current, d = c ? {
        x: c.left,
        y: c.top
      } : je;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = a(e, {
        active: t,
        context: r.current,
        currentCoordinates: d
      });
      if (u) {
        const h = nn(u, d), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = r.current;
        for (const v of g) {
          const w = e.code, {
            isTop: S,
            isRight: N,
            isLeft: _,
            isBottom: D,
            maxScroll: b,
            minScroll: x
          } = Vs(v), y = nd(v), E = {
            x: Math.min(w === Y.Right ? y.right - y.width / 2 : y.right, Math.max(w === Y.Right ? y.left : y.left + y.width / 2, u.x)),
            y: Math.min(w === Y.Down ? y.bottom - y.height / 2 : y.bottom, Math.max(w === Y.Down ? y.top : y.top + y.height / 2, u.y))
          }, L = w === Y.Right && !N || w === Y.Left && !_, T = w === Y.Down && !D || w === Y.Up && !S;
          if (L && E.x !== u.x) {
            const C = v.scrollLeft + h.x, R = w === Y.Right && C <= b.x || w === Y.Left && C >= x.x;
            if (R && !h.y) {
              v.scrollTo({
                left: C,
                behavior: o
              });
              return;
            }
            R ? m.x = v.scrollLeft - C : m.x = w === Y.Right ? v.scrollLeft - b.x : v.scrollLeft - x.x, m.x && v.scrollBy({
              left: -m.x,
              behavior: o
            });
            break;
          } else if (T && E.y !== u.y) {
            const C = v.scrollTop + h.y, R = w === Y.Down && C <= b.y || w === Y.Up && C >= x.y;
            if (R && !h.x) {
              v.scrollTo({
                top: C,
                behavior: o
              });
              return;
            }
            R ? m.y = v.scrollTop - C : m.y = w === Y.Down ? v.scrollTop - b.y : v.scrollTop - x.y, m.y && v.scrollBy({
              top: -m.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, Tt(nn(u, this.referenceCoordinates), m));
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
Vr.activators = [{
  eventName: "onKeyDown",
  handler: (n, e, t) => {
    let {
      keyboardCodes: r = qs,
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
function wi(n) {
  return !!(n && "distance" in n);
}
function _i(n) {
  return !!(n && "delay" in n);
}
class Zr {
  constructor(e, t, r) {
    var i;
    r === void 0 && (r = ad(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: a
    } = s;
    this.props = e, this.events = t, this.document = Bt(a), this.documentListeners = new qt(this.document), this.listeners = new qt(r), this.windowListeners = new qt(xe(a)), this.initialCoordinates = (i = In(s)) != null ? i : je, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Ae.Resize, this.handleCancel), this.windowListeners.add(Ae.DragStart, xi), this.windowListeners.add(Ae.VisibilityChange, this.handleCancel), this.windowListeners.add(Ae.ContextMenu, xi), this.documentListeners.add(Ae.Keydown, this.handleKeydown), t) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (_i(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (wi(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(Ae.Click, od, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ae.SelectionChange, this.removeTextSelection), t(e));
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
    const l = (t = In(e)) != null ? t : je, c = nn(i, l);
    if (!r && o) {
      if (wi(o)) {
        if (o.tolerance != null && hr(c, o.tolerance))
          return this.handleCancel();
        if (hr(c, o.distance))
          return this.handleStart();
      }
      if (_i(o) && hr(c, o.tolerance))
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
    e.code === Y.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const cd = {
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
class Ur extends Zr {
  constructor(e) {
    const {
      event: t
    } = e, r = Bt(t.target);
    super(e, cd, r);
  }
}
Ur.activators = [{
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
const dd = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var wr;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(wr || (wr = {}));
class ud extends Zr {
  constructor(e) {
    super(e, dd, Bt(e.event.target));
  }
}
ud.activators = [{
  eventName: "onMouseDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: r
    } = e;
    return t.button === wr.RightClick ? !1 : (r?.({
      event: t
    }), !0);
  }
}];
const fr = {
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
class hd extends Zr {
  constructor(e) {
    super(e, fr);
  }
  static setup() {
    return window.addEventListener(fr.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(fr.move.name, e);
    };
    function e() {
    }
  }
}
hd.activators = [{
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
var Yt;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(Yt || (Yt = {}));
var Ln;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Ln || (Ln = {}));
function fd(n) {
  let {
    acceleration: e,
    activator: t = Yt.Pointer,
    canScroll: r,
    draggingRect: i,
    enabled: s,
    interval: a = 5,
    order: o = Ln.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: h
  } = n;
  const m = pd({
    delta: u,
    disabled: !s
  }), [g, v] = kc(), w = F({
    x: 0,
    y: 0
  }), S = F({
    x: 0,
    y: 0
  }), N = B(() => {
    switch (t) {
      case Yt.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Yt.DraggableRect:
        return i;
    }
  }, [t, i, l]), _ = F(null), D = J(() => {
    const x = _.current;
    if (!x)
      return;
    const y = w.current.x * S.current.x, E = w.current.y * S.current.y;
    x.scrollBy(y, E);
  }, []), b = B(() => o === Ln.TreeOrder ? [...c].reverse() : c, [o, c]);
  j(
    () => {
      if (!s || !c.length || !N) {
        v();
        return;
      }
      for (const x of b) {
        if (r?.(x) === !1)
          continue;
        const y = c.indexOf(x), E = d[y];
        if (!E)
          continue;
        const {
          direction: L,
          speed: T
        } = td(x, E, N, e, h);
        for (const C of ["x", "y"])
          m[C][L[C]] || (T[C] = 0, L[C] = 0);
        if (T.x > 0 || T.y > 0) {
          v(), _.current = x, g(D, a), w.current = T, S.current = L;
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
      r,
      v,
      s,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
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
const md = {
  x: {
    [fe.Backward]: !1,
    [fe.Forward]: !1
  },
  y: {
    [fe.Backward]: !1,
    [fe.Forward]: !1
  }
};
function pd(n) {
  let {
    delta: e,
    disabled: t
  } = n;
  const r = Mn(e);
  return un((i) => {
    if (t || !r || !i)
      return md;
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
function gd(n, e) {
  const t = e != null ? n.get(e) : void 0, r = t ? t.node.current : null;
  return un((i) => {
    var s;
    return e == null ? null : (s = r ?? i) != null ? s : null;
  }, [r, e]);
}
function vd(n, e) {
  return B(() => n.reduce((t, r) => {
    const {
      sensor: i
    } = r, s = i.activators.map((a) => ({
      eventName: a.eventName,
      handler: e(a.handler, r)
    }));
    return [...t, ...s];
  }, []), [n, e]);
}
var rn;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(rn || (rn = {}));
var _r;
(function(n) {
  n.Optimized = "optimized";
})(_r || (_r = {}));
const Ci = /* @__PURE__ */ new Map();
function yd(n, e) {
  let {
    dragging: t,
    dependencies: r,
    config: i
  } = e;
  const [s, a] = Z(null), {
    frequency: o,
    measure: l,
    strategy: c
  } = i, d = F(n), u = w(), h = tn(u), m = J(function(S) {
    S === void 0 && (S = []), !h.current && a((N) => N === null ? S : N.concat(S.filter((_) => !N.includes(_))));
  }, [h]), g = F(null), v = un((S) => {
    if (u && !t)
      return Ci;
    if (!S || S === Ci || d.current !== n || s != null) {
      const N = /* @__PURE__ */ new Map();
      for (let _ of n) {
        if (!_)
          continue;
        if (s && s.length > 0 && !s.includes(_.id) && _.rect.current) {
          N.set(_.id, _.rect.current);
          continue;
        }
        const D = _.node.current, b = D ? new Gr(l(D), D) : null;
        _.rect.current = b, b && N.set(_.id, b);
      }
      return N;
    }
    return S;
  }, [n, s, t, u, l]);
  return j(() => {
    d.current = n;
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
  function w() {
    switch (c) {
      case rn.Always:
        return !1;
      case rn.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function qr(n, e) {
  return un((t) => n ? t || (typeof e == "function" ? e(n) : n) : null, [e, n]);
}
function bd(n, e) {
  return qr(n, e);
}
function xd(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const r = Xn(e), i = B(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(r);
  }, [r, t]);
  return j(() => () => i?.disconnect(), [i]), i;
}
function er(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const r = Xn(e), i = B(
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
function wd(n) {
  return new Gr(Ft(n), n);
}
function Ei(n, e, t) {
  e === void 0 && (e = wd);
  const [r, i] = Z(null);
  function s() {
    i((l) => {
      if (!n)
        return null;
      if (n.isConnected === !1) {
        var c;
        return (c = l ?? t) != null ? c : null;
      }
      const d = e(n);
      return JSON.stringify(l) === JSON.stringify(d) ? l : d;
    });
  }
  const a = xd({
    callback(l) {
      if (n)
        for (const c of l) {
          const {
            type: d,
            target: u
          } = c;
          if (d === "childList" && u instanceof HTMLElement && u.contains(n)) {
            s();
            break;
          }
        }
    }
  }), o = er({
    callback: s
  });
  return He(() => {
    s(), n ? (o?.observe(n), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [n]), r;
}
function _d(n) {
  const e = qr(n);
  return Fs(n, e);
}
const ki = [];
function Cd(n) {
  const e = F(n), t = un((r) => n ? r && r !== ki && n && e.current && n.parentNode === e.current.parentNode ? r : Qn(n) : ki, [n]);
  return j(() => {
    e.current = n;
  }, [n]), t;
}
function Ed(n) {
  const [e, t] = Z(null), r = F(n), i = J((s) => {
    const a = ur(s.target);
    a && t((o) => o ? (o.set(a, xr(a)), new Map(o)) : null);
  }, []);
  return j(() => {
    const s = r.current;
    if (n !== s) {
      a(s);
      const o = n.map((l) => {
        const c = ur(l);
        return c ? (c.addEventListener("scroll", i, {
          passive: !0
        }), [c, xr(c)]) : null;
      }).filter((l) => l != null);
      t(o.length ? new Map(o) : null), r.current = n;
    }
    return () => {
      a(n), a(s);
    };
    function a(o) {
      o.forEach((l) => {
        const c = ur(l);
        c?.removeEventListener("scroll", i);
      });
    }
  }, [i, n]), B(() => n.length ? e ? Array.from(e.values()).reduce((s, a) => Tt(s, a), je) : Zs(n) : je, [n, e]);
}
function Si(n, e) {
  e === void 0 && (e = []);
  const t = F(null);
  return j(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), j(() => {
    const r = n !== je;
    r && !t.current && (t.current = n), !r && t.current && (t.current = null);
  }, [n]), t.current ? nn(n, t.current) : je;
}
function kd(n) {
  j(
    () => {
      if (!Kn)
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
function Sd(n, e) {
  return B(() => n.reduce((t, r) => {
    let {
      eventName: i,
      handler: s
    } = r;
    return t[i] = (a) => {
      s(a, e);
    }, t;
  }, {}), [n, e]);
}
function Ys(n) {
  return B(() => n ? Xc(n) : null, [n]);
}
const Di = [];
function Dd(n, e) {
  e === void 0 && (e = Ft);
  const [t] = n, r = Ys(t ? xe(t) : null), [i, s] = Z(Di);
  function a() {
    s(() => n.length ? n.map((l) => Gs(l) ? r : new Gr(e(l), l)) : Di);
  }
  const o = er({
    callback: a
  });
  return He(() => {
    o?.disconnect(), a(), n.forEach((l) => o?.observe(l));
  }, [n]), i;
}
function Ks(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const e = n.children[0];
  return dn(e) ? e : n;
}
function Rd(n) {
  let {
    measure: e
  } = n;
  const [t, r] = Z(null), i = J((c) => {
    for (const {
      target: d
    } of c)
      if (dn(d)) {
        r((u) => {
          const h = e(d);
          return u ? {
            ...u,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [e]), s = er({
    callback: i
  }), a = J((c) => {
    const d = Ks(c);
    s?.disconnect(), d && s?.observe(d), r(d ? e(d) : null);
  }, [e, s]), [o, l] = An(a);
  return B(() => ({
    nodeRef: o,
    rect: t,
    setRef: l
  }), [t, o, l]);
}
const Nd = [{
  sensor: Ur,
  options: {}
}, {
  sensor: Vr,
  options: {}
}], Td = {
  current: {}
}, En = {
  draggable: {
    measure: bi
  },
  droppable: {
    measure: bi,
    strategy: rn.WhileDragging,
    frequency: _r.Optimized
  },
  dragOverlay: {
    measure: Ft
  }
};
class Kt extends Map {
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
const Od = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Kt(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: zn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: En,
  measureDroppableContainers: zn,
  windowRect: null,
  measuringScheduled: !1
}, Xs = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: zn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: zn
}, fn = /* @__PURE__ */ Xe(Xs), Js = /* @__PURE__ */ Xe(Od);
function Ad() {
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
      containers: new Kt()
    }
  };
}
function Md(n, e) {
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
      } = t, i = new Kt(n.droppable.containers);
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
      const a = new Kt(n.droppable.containers);
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
      const s = new Kt(n.droppable.containers);
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
function Id(n) {
  let {
    disabled: e
  } = n;
  const {
    active: t,
    activatorEvent: r,
    draggableNodes: i
  } = Fe(fn), s = Mn(r), a = Mn(t?.id);
  return j(() => {
    if (!e && !r && s && a != null) {
      if (!Jn(s) || document.activeElement === s.target)
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
          const u = Rc(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, e, i, a, s]), null;
}
function Qs(n, e) {
  let {
    transform: t,
    ...r
  } = e;
  return n != null && n.length ? n.reduce((i, s) => s({
    transform: i,
    ...r
  }), t) : t;
}
function zd(n) {
  return B(
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
function Ld(n) {
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
  He(() => {
    if (!a && !o || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !r)
      return;
    const c = e?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = t(c), u = Fs(d, r);
    if (a || (u.x = 0), o || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = js(c);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, o, r, t]);
}
const tr = /* @__PURE__ */ Xe({
  ...je,
  scaleX: 1,
  scaleY: 1
});
var dt;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(dt || (dt = {}));
const Pd = /* @__PURE__ */ Fo(function(e) {
  var t, r, i, s;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: c,
    sensors: d = Nd,
    collisionDetection: u = Vc,
    measuring: h,
    modifiers: m,
    ...g
  } = e;
  const v = Ho(Md, void 0, Ad), [w, S] = v, [N, _] = Ic(), [D, b] = Z(dt.Uninitialized), x = D === dt.Initialized, {
    draggable: {
      active: y,
      nodes: E,
      translate: L
    },
    droppable: {
      containers: T
    }
  } = w, C = y != null ? E.get(y) : null, R = F({
    initial: null,
    translated: null
  }), O = B(() => {
    var ge;
    return y != null ? {
      id: y,
      // It's possible for the active node to unmount while dragging
      data: (ge = C?.data) != null ? ge : Td,
      rect: R
    } : null;
  }, [y, C]), G = F(null), [ae, oe] = Z(null), [re, ne] = Z(null), te = tn(g, Object.values(g)), ve = hn("DndDescribedBy", a), We = B(() => T.getEnabled(), [T]), ue = zd(h), {
    droppableRects: he,
    measureDroppableContainers: we,
    measuringScheduled: Je
  } = yd(We, {
    dragging: x,
    dependencies: [L.x, L.y],
    config: ue.droppable
  }), pe = gd(E, y), Ge = B(() => re ? In(re) : null, [re]), ye = Va(), _e = bd(pe, ue.draggable.measure);
  Ld({
    activeNode: y != null ? E.get(y) : null,
    config: ye.layoutShiftCompensation,
    initialRect: _e,
    measure: ue.draggable.measure
  });
  const K = Ei(pe, ue.draggable.measure, _e), Qe = Ei(pe ? pe.parentElement : null), Ce = F({
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
  }), Le = T.getNodeFor((t = Ce.current.over) == null ? void 0 : t.id), q = Rd({
    measure: ue.dragOverlay.measure
  }), se = (r = q.nodeRef.current) != null ? r : pe, ce = x ? (i = q.rect) != null ? i : K : null, it = !!(q.nodeRef.current && q.rect), pn = _d(it ? null : K), Ht = Ys(se ? xe(se) : null), Ve = Cd(x ? Le ?? pe : null), _t = Dd(Ve), bt = Qs(m, {
    transform: {
      x: L.x - pn.x,
      y: L.y - pn.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: re,
    active: O,
    activeNodeRect: K,
    containerNodeRect: Qe,
    draggingNodeRect: ce,
    over: Ce.current.over,
    overlayNodeRect: q.rect,
    scrollableAncestors: Ve,
    scrollableAncestorRects: _t,
    windowRect: Ht
  }), gn = Ge ? Tt(Ge, L) : null, vn = Ed(Ve), ir = Si(vn), yn = Si(vn, [K]), et = Tt(bt, ir), Ct = ce ? qc(ce, bt) : null, jt = O && Ct ? u({
    active: O,
    collisionRect: Ct,
    droppableRects: he,
    droppableContainers: We,
    pointerCoordinates: gn
  }) : null, ni = Bs(jt, "id"), [st, ri] = Z(null), Ha = it ? bt : Tt(bt, yn), ja = Zc(Ha, (s = st?.rect) != null ? s : null, K), sr = F(null), ii = J(
    (ge, ke) => {
      let {
        sensor: Se,
        options: at
      } = ke;
      if (G.current == null)
        return;
      const Te = E.get(G.current);
      if (!Te)
        return;
      const De = ge.nativeEvent, Ze = new Se({
        active: G.current,
        activeNode: Te,
        event: De,
        options: at,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Ce,
        onAbort(me) {
          if (!E.get(me))
            return;
          const {
            onDragAbort: Ue
          } = te.current, tt = {
            id: me
          };
          Ue?.(tt), N({
            type: "onDragAbort",
            event: tt
          });
        },
        onPending(me, ot, Ue, tt) {
          if (!E.get(me))
            return;
          const {
            onDragPending: Wt
          } = te.current, lt = {
            id: me,
            constraint: ot,
            initialCoordinates: Ue,
            offset: tt
          };
          Wt?.(lt), N({
            type: "onDragPending",
            event: lt
          });
        },
        onStart(me) {
          const ot = G.current;
          if (ot == null)
            return;
          const Ue = E.get(ot);
          if (!Ue)
            return;
          const {
            onDragStart: tt
          } = te.current, $t = {
            activatorEvent: De,
            active: {
              id: ot,
              data: Ue.data,
              rect: R
            }
          };
          bn(() => {
            tt?.($t), b(dt.Initializing), S({
              type: de.DragStart,
              initialCoordinates: me,
              active: ot
            }), N({
              type: "onDragStart",
              event: $t
            }), oe(sr.current), ne(De);
          });
        },
        onMove(me) {
          S({
            type: de.DragMove,
            coordinates: me
          });
        },
        onEnd: Et(de.DragEnd),
        onCancel: Et(de.DragCancel)
      });
      sr.current = Ze;
      function Et(me) {
        return async function() {
          const {
            active: Ue,
            collisions: tt,
            over: $t,
            scrollAdjustedTranslate: Wt
          } = Ce.current;
          let lt = null;
          if (Ue && Wt) {
            const {
              cancelDrop: Gt
            } = te.current;
            lt = {
              activatorEvent: De,
              active: Ue,
              collisions: tt,
              delta: Wt,
              over: $t
            }, me === de.DragEnd && typeof Gt == "function" && await Promise.resolve(Gt(lt)) && (me = de.DragCancel);
          }
          G.current = null, bn(() => {
            S({
              type: me
            }), b(dt.Uninitialized), ri(null), oe(null), ne(null), sr.current = null;
            const Gt = me === de.DragEnd ? "onDragEnd" : "onDragCancel";
            if (lt) {
              const ar = te.current[Gt];
              ar?.(lt), N({
                type: Gt,
                event: lt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [E]
  ), $a = J((ge, ke) => (Se, at) => {
    const Te = Se.nativeEvent, De = E.get(at);
    if (
      // Another sensor is already instantiating
      G.current !== null || // No active draggable
      !De || // Event has already been captured
      Te.dndKit || Te.defaultPrevented
    )
      return;
    const Ze = {
      active: De
    };
    ge(Se, ke.options, Ze) === !0 && (Te.dndKit = {
      capturedBy: ke.sensor
    }, G.current = at, ii(Se, ke));
  }, [E, ii]), si = vd(d, $a);
  kd(d), He(() => {
    K && D === dt.Initializing && b(dt.Initialized);
  }, [K, D]), j(
    () => {
      const {
        onDragMove: ge
      } = te.current, {
        active: ke,
        activatorEvent: Se,
        collisions: at,
        over: Te
      } = Ce.current;
      if (!ke || !Se)
        return;
      const De = {
        active: ke,
        activatorEvent: Se,
        collisions: at,
        delta: {
          x: et.x,
          y: et.y
        },
        over: Te
      };
      bn(() => {
        ge?.(De), N({
          type: "onDragMove",
          event: De
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [et.x, et.y]
  ), j(
    () => {
      const {
        active: ge,
        activatorEvent: ke,
        collisions: Se,
        droppableContainers: at,
        scrollAdjustedTranslate: Te
      } = Ce.current;
      if (!ge || G.current == null || !ke || !Te)
        return;
      const {
        onDragOver: De
      } = te.current, Ze = at.get(ni), Et = Ze && Ze.rect.current ? {
        id: Ze.id,
        rect: Ze.rect.current,
        data: Ze.data,
        disabled: Ze.disabled
      } : null, me = {
        active: ge,
        activatorEvent: ke,
        collisions: Se,
        delta: {
          x: Te.x,
          y: Te.y
        },
        over: Et
      };
      bn(() => {
        ri(Et), De?.(me), N({
          type: "onDragOver",
          event: me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ni]
  ), He(() => {
    Ce.current = {
      activatorEvent: re,
      active: O,
      activeNode: pe,
      collisionRect: Ct,
      collisions: jt,
      droppableRects: he,
      draggableNodes: E,
      draggingNode: se,
      draggingNodeRect: ce,
      droppableContainers: T,
      over: st,
      scrollableAncestors: Ve,
      scrollAdjustedTranslate: et
    }, R.current = {
      initial: ce,
      translated: Ct
    };
  }, [O, pe, jt, Ct, E, se, ce, he, T, st, Ve, et]), fd({
    ...ye,
    delta: L,
    draggingRect: Ct,
    pointerCoordinates: gn,
    scrollableAncestors: Ve,
    scrollableAncestorRects: _t
  });
  const Wa = B(() => ({
    active: O,
    activeNode: pe,
    activeNodeRect: K,
    activatorEvent: re,
    collisions: jt,
    containerNodeRect: Qe,
    dragOverlay: q,
    draggableNodes: E,
    droppableContainers: T,
    droppableRects: he,
    over: st,
    measureDroppableContainers: we,
    scrollableAncestors: Ve,
    scrollableAncestorRects: _t,
    measuringConfiguration: ue,
    measuringScheduled: Je,
    windowRect: Ht
  }), [O, pe, K, re, jt, Qe, q, E, T, he, st, we, Ve, _t, ue, Je, Ht]), Ga = B(() => ({
    activatorEvent: re,
    activators: si,
    active: O,
    activeNodeRect: K,
    ariaDescribedById: {
      draggable: ve
    },
    dispatch: S,
    draggableNodes: E,
    over: st,
    measureDroppableContainers: we
  }), [re, si, O, K, S, ve, E, st, we]);
  return V.createElement(Ps.Provider, {
    value: _
  }, V.createElement(fn.Provider, {
    value: Ga
  }, V.createElement(Js.Provider, {
    value: Wa
  }, V.createElement(tr.Provider, {
    value: ja
  }, c)), V.createElement(Id, {
    disabled: o?.restoreFocus === !1
  })), V.createElement(Pc, {
    ...o,
    hiddenTextDescribedById: ve
  }));
  function Va() {
    const ge = ae?.autoScrollEnabled === !1, ke = typeof l == "object" ? l.enabled === !1 : l === !1, Se = x && !ge && !ke;
    return typeof l == "object" ? {
      ...l,
      enabled: Se
    } : {
      enabled: Se
    };
  }
}), Bd = /* @__PURE__ */ Xe(null), Ri = "button", Fd = "Draggable";
function Hd(n) {
  let {
    id: e,
    data: t,
    disabled: r = !1,
    attributes: i
  } = n;
  const s = hn(Fd), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: h
  } = Fe(fn), {
    role: m = Ri,
    roleDescription: g = "draggable",
    tabIndex: v = 0
  } = i ?? {}, w = l?.id === e, S = Fe(w ? tr : Bd), [N, _] = An(), [D, b] = An(), x = Sd(a, e), y = tn(t);
  He(
    () => (u.set(e, {
      id: e,
      key: s,
      node: N,
      activatorNode: D,
      data: y
    }), () => {
      const L = u.get(e);
      L && L.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const E = B(() => ({
    role: m,
    tabIndex: v,
    "aria-disabled": r,
    "aria-pressed": w && m === Ri ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": d.draggable
  }), [r, m, v, w, g, d.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: c,
    attributes: E,
    isDragging: w,
    listeners: r ? void 0 : x,
    node: N,
    over: h,
    setNodeRef: _,
    setActivatorNodeRef: b,
    transform: S
  };
}
function ea() {
  return Fe(Js);
}
const jd = "Droppable", $d = {
  timeout: 25
};
function Wd(n) {
  let {
    data: e,
    disabled: t = !1,
    id: r,
    resizeObserverConfig: i
  } = n;
  const s = hn(jd), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: c
  } = Fe(fn), d = F({
    disabled: t
  }), u = F(!1), h = F(null), m = F(null), {
    disabled: g,
    updateMeasurementsFor: v,
    timeout: w
  } = {
    ...$d,
    ...i
  }, S = tn(v ?? r), N = J(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        c(Array.isArray(S.current) ? S.current : [S.current]), m.current = null;
      }, w);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [w]
  ), _ = er({
    callback: N,
    disabled: g || !a
  }), D = J((E, L) => {
    _ && (L && (_.unobserve(L), u.current = !1), E && _.observe(E));
  }, [_]), [b, x] = An(D), y = tn(e);
  return j(() => {
    !_ || !b.current || (_.disconnect(), u.current = !1, _.observe(b.current));
  }, [b, _]), j(
    () => (o({
      type: de.RegisterDroppable,
      element: {
        id: r,
        key: s,
        disabled: t,
        node: b,
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
    t !== d.current.disabled && (o({
      type: de.SetDroppableDisabled,
      id: r,
      key: s,
      disabled: t
    }), d.current.disabled = t);
  }, [r, s, t, o]), {
    active: a,
    rect: h,
    isOver: l?.id === r,
    node: b,
    over: l,
    setNodeRef: x
  };
}
function Gd(n) {
  let {
    animation: e,
    children: t
  } = n;
  const [r, i] = Z(null), [s, a] = Z(null), o = Mn(t);
  return !t && !r && o && i(o), He(() => {
    if (!s)
      return;
    const l = r?.key, c = r?.props.id;
    if (l == null || c == null) {
      i(null);
      return;
    }
    Promise.resolve(e(c, s)).then(() => {
      i(null);
    });
  }, [e, r, s]), V.createElement(V.Fragment, null, t, r ? jo(r, {
    ref: a
  }) : null);
}
const Vd = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Zd(n) {
  let {
    children: e
  } = n;
  return V.createElement(fn.Provider, {
    value: Xs
  }, V.createElement(tr.Provider, {
    value: Vd
  }, e));
}
const Ud = {
  position: "fixed",
  touchAction: "none"
}, qd = (n) => Jn(n) ? "transform 250ms ease" : void 0, Yd = /* @__PURE__ */ Ee((n, e) => {
  let {
    as: t,
    activatorEvent: r,
    adjustScale: i,
    children: s,
    className: a,
    rect: o,
    style: l,
    transform: c,
    transition: d = qd
  } = n;
  if (!o)
    return null;
  const u = i ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...Ud,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: mt.Transform.toString(u),
    transformOrigin: i && r ? Hc(r, o) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...l
  };
  return V.createElement(t, {
    className: a,
    style: h,
    ref: e
  }, s);
}), Kd = (n) => (e) => {
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
    for (const [l, c] of Object.entries(i))
      t.node.style.setProperty(l, c);
    a != null && a.active && t.node.classList.remove(a.active);
  };
}, Xd = (n) => {
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
}, Jd = {
  duration: 250,
  easing: "ease",
  keyframes: Xd,
  sideEffects: /* @__PURE__ */ Kd({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Qd(n) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: r,
    measuringConfiguration: i
  } = n;
  return Xn((s, a) => {
    if (e === null)
      return;
    const o = t.get(s);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const c = Ks(a);
    if (!c)
      return;
    const {
      transform: d
    } = xe(a).getComputedStyle(a), u = Hs(d);
    if (!u)
      return;
    const h = typeof e == "function" ? e : eu(e);
    return Us(l, i.draggable.measure), h({
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
      droppableContainers: r,
      measuringConfiguration: i,
      transform: u
    });
  });
}
function eu(n) {
  const {
    duration: e,
    easing: t,
    sideEffects: r,
    keyframes: i
  } = {
    ...Jd,
    ...n
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
    }), [g] = m, v = m[m.length - 1];
    if (JSON.stringify(g) === JSON.stringify(v))
      return;
    const w = r?.({
      active: a,
      dragOverlay: o,
      ...c
    }), S = o.node.animate(m, {
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
let Ni = 0;
function tu(n) {
  return B(() => {
    if (n != null)
      return Ni++, Ni;
  }, [n]);
}
const nu = /* @__PURE__ */ V.memo((n) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: r,
    style: i,
    transition: s,
    modifiers: a,
    wrapperElement: o = "div",
    className: l,
    zIndex: c = 999
  } = n;
  const {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggableNodes: g,
    droppableContainers: v,
    dragOverlay: w,
    over: S,
    measuringConfiguration: N,
    scrollableAncestors: _,
    scrollableAncestorRects: D,
    windowRect: b
  } = ea(), x = Fe(tr), y = tu(u?.id), E = Qs(a, {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: w.rect,
    over: S,
    overlayNodeRect: w.rect,
    scrollableAncestors: _,
    scrollableAncestorRects: D,
    transform: x,
    windowRect: b
  }), L = qr(h), T = Qd({
    config: r,
    draggableNodes: g,
    droppableContainers: v,
    measuringConfiguration: N
  }), C = L ? w.setRef : void 0;
  return V.createElement(Zd, null, V.createElement(Gd, {
    animation: T
  }, u && y ? V.createElement(Yd, {
    key: y,
    id: u.id,
    ref: C,
    as: o,
    activatorEvent: d,
    adjustScale: e,
    className: l,
    transition: s,
    rect: L,
    style: {
      zIndex: c,
      ...i
    },
    transform: E
  }, t) : null));
});
function Yr(n, e, t) {
  const r = n.slice();
  return r.splice(t < 0 ? r.length + t : t, 0, r.splice(e, 1)[0]), r;
}
function ru(n, e) {
  return n.reduce((t, r, i) => {
    const s = e.get(r);
    return s && (t[i] = s), t;
  }, Array(n.length));
}
function _n(n) {
  return n !== null && n >= 0;
}
function iu(n, e) {
  if (n === e)
    return !0;
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function su(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const ta = (n) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: r,
    index: i
  } = n;
  const s = Yr(e, r, t), a = e[i], o = s[i];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, na = "Sortable", ra = /* @__PURE__ */ V.createContext({
  activeIndex: -1,
  containerId: na,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: ta,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function au(n) {
  let {
    children: e,
    id: t,
    items: r,
    strategy: i = ta,
    disabled: s = !1
  } = n;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = ea(), u = hn(na, t), h = o.rect !== null, m = B(() => r.map((x) => typeof x == "object" && "id" in x ? x.id : x), [r]), g = a != null, v = a ? m.indexOf(a.id) : -1, w = c ? m.indexOf(c.id) : -1, S = F(m), N = !iu(m, S.current), _ = w !== -1 && v === -1 || N, D = su(s);
  He(() => {
    N && g && d(m);
  }, [N, m, g, d]), j(() => {
    S.current = m;
  }, [m]);
  const b = B(
    () => ({
      activeIndex: v,
      containerId: u,
      disabled: D,
      disableTransforms: _,
      items: m,
      overIndex: w,
      useDragOverlay: h,
      sortedRects: ru(m, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, u, D.draggable, D.droppable, _, m, w, l, h, i]
  );
  return V.createElement(ra.Provider, {
    value: b
  }, e);
}
const ou = (n) => {
  let {
    id: e,
    items: t,
    activeIndex: r,
    overIndex: i
  } = n;
  return Yr(t, r, i).indexOf(e);
}, lu = (n) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: r,
    index: i,
    items: s,
    newIndex: a,
    previousItems: o,
    previousContainerId: l,
    transition: c
  } = n;
  return !c || !r || o !== s && i === a ? !1 : t ? !0 : a !== i && e === l;
}, cu = {
  duration: 200,
  easing: "ease"
}, ia = "transform", du = /* @__PURE__ */ mt.Transition.toString({
  property: ia,
  duration: 0,
  easing: "linear"
}), uu = {
  roleDescription: "sortable"
};
function hu(n) {
  let {
    disabled: e,
    index: t,
    node: r,
    rect: i
  } = n;
  const [s, a] = Z(null), o = F(t);
  return He(() => {
    if (!e && t !== o.current && r.current) {
      const l = i.current;
      if (l) {
        const c = Ft(r.current, {
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
  }, [e, t, r, i]), j(() => {
    s && a(null);
  }, [s]), s;
}
function fu(n) {
  let {
    animateLayoutChanges: e = lu,
    attributes: t,
    disabled: r,
    data: i,
    getNewIndex: s = ou,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: c = cu
  } = n;
  const {
    items: d,
    containerId: u,
    activeIndex: h,
    disabled: m,
    disableTransforms: g,
    sortedRects: v,
    overIndex: w,
    useDragOverlay: S,
    strategy: N
  } = Fe(ra), _ = mu(r, m), D = d.indexOf(a), b = B(() => ({
    sortable: {
      containerId: u,
      index: D,
      items: d
    },
    ...i
  }), [u, i, D, d]), x = B(() => d.slice(d.indexOf(a)), [d, a]), {
    rect: y,
    node: E,
    isOver: L,
    setNodeRef: T
  } = Wd({
    id: a,
    data: b,
    disabled: _.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: x,
      ...l
    }
  }), {
    active: C,
    activatorEvent: R,
    activeNodeRect: O,
    attributes: G,
    setNodeRef: ae,
    listeners: oe,
    isDragging: re,
    over: ne,
    setActivatorNodeRef: te,
    transform: ve
  } = Hd({
    id: a,
    data: b,
    attributes: {
      ...uu,
      ...t
    },
    disabled: _.draggable
  }), We = Ec(T, ae), ue = !!C, he = ue && !g && _n(h) && _n(w), we = !S && re, Je = we && he ? ve : null, Ge = he ? Je ?? (o ?? N)({
    rects: v,
    activeNodeRect: O,
    activeIndex: h,
    overIndex: w,
    index: D
  }) : null, ye = _n(h) && _n(w) ? s({
    id: a,
    items: d,
    activeIndex: h,
    overIndex: w
  }) : D, _e = C?.id, K = F({
    activeId: _e,
    items: d,
    newIndex: ye,
    containerId: u
  }), Qe = d !== K.current.items, Ce = e({
    active: C,
    containerId: u,
    isDragging: re,
    isSorting: ue,
    id: a,
    index: D,
    items: d,
    newIndex: K.current.newIndex,
    previousItems: K.current.items,
    previousContainerId: K.current.containerId,
    transition: c,
    wasDragging: K.current.activeId != null
  }), Le = hu({
    disabled: !Ce,
    index: D,
    node: E,
    rect: y
  });
  return j(() => {
    ue && K.current.newIndex !== ye && (K.current.newIndex = ye), u !== K.current.containerId && (K.current.containerId = u), d !== K.current.items && (K.current.items = d);
  }, [ue, ye, u, d]), j(() => {
    if (_e === K.current.activeId)
      return;
    if (_e != null && K.current.activeId == null) {
      K.current.activeId = _e;
      return;
    }
    const se = setTimeout(() => {
      K.current.activeId = _e;
    }, 50);
    return () => clearTimeout(se);
  }, [_e]), {
    active: C,
    activeIndex: h,
    attributes: G,
    data: b,
    rect: y,
    index: D,
    newIndex: ye,
    items: d,
    isOver: L,
    isSorting: ue,
    isDragging: re,
    listeners: oe,
    node: E,
    overIndex: w,
    over: ne,
    setNodeRef: We,
    setActivatorNodeRef: te,
    setDroppableNodeRef: T,
    setDraggableNodeRef: ae,
    transform: Le ?? Ge,
    transition: q()
  };
  function q() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Le || // Or to prevent items jumping to back to their "new" position when items change
      Qe && K.current.newIndex === D
    )
      return du;
    if (!(we && !Jn(R) || !c) && (ue || Ce))
      return mt.Transition.toString({
        ...c,
        property: ia
      });
  }
}
function mu(n, e) {
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
function Pn(n) {
  if (!n)
    return !1;
  const e = n.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const pu = [Y.Down, Y.Right, Y.Up, Y.Left], gu = (n, e) => {
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
  if (pu.includes(n.code)) {
    if (n.preventDefault(), !t || !r)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = i.get(u.id);
      if (h)
        switch (n.code) {
          case Y.Down:
            r.top < h.top && l.push(u);
            break;
          case Y.Up:
            r.top > h.top && l.push(u);
            break;
          case Y.Left:
            r.left > h.left && l.push(u);
            break;
          case Y.Right:
            r.left < h.left && l.push(u);
            break;
        }
    });
    const c = Wc({
      collisionRect: r,
      droppableRects: i,
      droppableContainers: l
    });
    let d = Bs(c, "id");
    if (d === a?.id && c.length > 1 && (d = c[1].id), d != null) {
      const u = s.get(t.id), h = s.get(d), m = h ? i.get(h.id) : null, g = h?.node.current;
      if (g && m && u && h) {
        const w = Qn(g).some((x, y) => o[y] !== x), S = sa(u, h), N = vu(u, h), _ = w || !S ? {
          x: 0,
          y: 0
        } : {
          x: N ? r.width - m.width : 0,
          y: N ? r.height - m.height : 0
        }, D = {
          x: m.left,
          y: m.top
        };
        return _.x && _.y ? D : nn(D, _);
      }
    }
  }
};
function sa(n, e) {
  return !Pn(n) || !Pn(e) ? !1 : n.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function vu(n, e) {
  return !Pn(n) || !Pn(e) || !sa(n, e) ? !1 : n.data.current.sortable.index < e.data.current.sortable.index;
}
const Ti = ({ id: n, children: e }) => {
  const { attributes: t, listeners: r, setNodeRef: i, transform: s, transition: a } = fu({
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
}, Kr = ({ blocks: n, sortable: e = !1, onSort: t = () => {
}, main: r = !1 }) => {
  const [i, s] = Z([]);
  Ji(() => {
    s(n.map((u, h) => ({
      id: u.id ?? h.toString(),
      render: u.render
    })));
  }, [n]);
  const [a, o] = Z(null), l = Bc(vi(Ur), vi(Vr, {
    coordinateGetter: gu
  })), c = (u) => {
    o(u.active.id);
  }, d = (u) => {
    const { active: h, over: m } = u;
    o(null), m && h.id !== m.id && s((g) => {
      const v = g.findIndex((S) => S.id === h.id), w = g.findIndex((S) => S.id === m.id);
      return Yr(g, v, w);
    });
  };
  return f("div", {
    className: X("flex flex-wrap items-stretch gap-4", r && "flex-1"),
    children: M(Pd, {
      sensors: l,
      onDragStart: c,
      onDragEnd: d,
      children: [f(au, {
        items: i,
        children: i.map((u) => f(Ti, {
          id: u.id,
          children: u.render
        }, u.id))
      }), f(nu, {
        children: a ? f(Ti, {
          id: a,
          children: i.find((u) => u.id === a)?.render
        }) : null
      })]
    })
  });
};
Kr.displayName = "GroupMasonry";
Kr.__isPageLayoutGroup = !0;
const yu = Ee(function({ children: e, aside: t, header: r, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Is("Page", e, ["block", "group"]), f("div", {
    ref: s,
    className: "h-full",
    children: M("div", {
      className: X("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [M("main", {
        className: X("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", i === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [r && f("header", {
          className: X("sticky top-0 z-30 bg-f1-background"),
          children: r
        }), f("div", {
          className: "flex-1",
          children: e
        })]
      }), t && f("aside", {
        className: X("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", i === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), tm = {
  Page: Me("Page", yu),
  Block: Me("Block", Yn),
  BlockContent: Me("BlockContent", wc),
  Group: Me("Group", jr),
  GroupGrid: Me("GroupGrid", qn),
  GroupMasonry: Me("GroupMasonry", Kr)
}, nm = Ie({
  name: "StandardLayout",
  type: "layout"
}, Es), rm = Ie({
  name: "TwoColumnLayout",
  type: "layout"
}, Ul), im = Ie({
  name: "HomeLayout",
  type: "layout"
}, Vl);
function Ot(n) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ot(n);
}
function bu(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xu(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, la(r.key), r);
  }
}
function wu(n, e, t) {
  return e && xu(n.prototype, e), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function _u(n, e, t) {
  return e = Bn(e), Cu(n, aa() ? Reflect.construct(e, t || [], Bn(n).constructor) : e.apply(n, t));
}
function Cu(n, e) {
  if (e && (Ot(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Eu(n);
}
function Eu(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function aa() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (aa = function() {
    return !!n;
  })();
}
function Bn(n) {
  return Bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Bn(n);
}
function ku(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Cr(n, e);
}
function Cr(n, e) {
  return Cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Cr(n, e);
}
function oa(n, e, t) {
  return e = la(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function la(n) {
  var e = Su(n, "string");
  return Ot(e) == "symbol" ? e : e + "";
}
function Su(n, e) {
  if (Ot(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (Ot(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var nr = /* @__PURE__ */ (function(n) {
  function e() {
    return bu(this, e), _u(this, e, arguments);
  }
  return ku(e, n), wu(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(V.Component);
oa(nr, "displayName", "ZAxis");
oa(nr, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Du = ["option", "isActive"];
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Xt.apply(this, arguments);
}
function Ru(n, e) {
  if (n == null) return {};
  var t = Nu(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Nu(n, e) {
  if (n == null) return {};
  var t = {};
  for (var r in n)
    if (Object.prototype.hasOwnProperty.call(n, r)) {
      if (e.indexOf(r) >= 0) continue;
      t[r] = n[r];
    }
  return t;
}
function Tu(n) {
  var e = n.option, t = n.isActive, r = Ru(n, Du);
  return typeof e == "string" ? /* @__PURE__ */ V.createElement(li, Xt({
    option: /* @__PURE__ */ V.createElement(Vo, Xt({
      type: e
    }, r)),
    isActive: t,
    shapeType: "symbols"
  }, r)) : /* @__PURE__ */ V.createElement(li, Xt({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, r));
}
function At(n) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, At(n);
}
function Jt() {
  return Jt = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Jt.apply(this, arguments);
}
function Oi(n, e) {
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
    e % 2 ? Oi(Object(t), !0).forEach(function(r) {
      ht(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Oi(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ou(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ai(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, da(r.key), r);
  }
}
function Au(n, e, t) {
  return e && Ai(n.prototype, e), t && Ai(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Mu(n, e, t) {
  return e = Fn(e), Iu(n, ca() ? Reflect.construct(e, t || [], Fn(n).constructor) : e.apply(n, t));
}
function Iu(n, e) {
  if (e && (At(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zu(n);
}
function zu(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function ca() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ca = function() {
    return !!n;
  })();
}
function Fn(n) {
  return Fn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Fn(n);
}
function Lu(n, e) {
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
  return e = da(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function da(n) {
  var e = Pu(n, "string");
  return At(e) == "symbol" ? e : e + "";
}
function Pu(n, e) {
  if (At(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (At(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var mn = /* @__PURE__ */ (function(n) {
  function e() {
    var t;
    Ou(this, e);
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return t = Mu(this, e, [].concat(i)), ht(t, "state", {
      isAnimationFinished: !1
    }), ht(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), ht(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), ht(t, "id", Jo("recharts-scatter-")), t;
  }
  return Lu(e, n), Au(e, [{
    key: "renderSymbolsStatically",
    value: function(r) {
      var i = this, s = this.props, a = s.shape, o = s.activeShape, l = s.activeIndex, c = or(this.props, !1);
      return r.map(function(d, u) {
        var h = l === u, m = h ? o : a, g = Oe(Oe({}, c), d);
        return /* @__PURE__ */ V.createElement(Vt, Jt({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(d?.cx, "-").concat(d?.cy, "-").concat(d?.size, "-").concat(u)
        }, Zo(i.props, d, u), {
          role: "img"
        }), /* @__PURE__ */ V.createElement(Tu, Jt({
          option: m,
          isActive: h,
          key: "symbol-".concat(u)
        }, g)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var r = this, i = this.props, s = i.points, a = i.isAnimationActive, o = i.animationBegin, l = i.animationDuration, c = i.animationEasing, d = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ V.createElement(Uo, {
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
        var m = h.t, g = s.map(function(v, w) {
          var S = u && u[w];
          if (S) {
            var N = xn(S.cx, v.cx), _ = xn(S.cy, v.cy), D = xn(S.size, v.size);
            return Oe(Oe({}, v), {}, {
              cx: N(m),
              cy: _(m),
              size: D(m)
            });
          }
          var b = xn(0, v.size);
          return Oe(Oe({}, v), {}, {
            size: b(m)
          });
        });
        return /* @__PURE__ */ V.createElement(Vt, null, r.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var r = this.props, i = r.points, s = r.isAnimationActive, a = this.state.prevPoints;
      return s && i && i.length && (!a || !fs(a, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var r = this.props.isAnimationActive;
      if (r && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, a = i.xAxis, o = i.yAxis, l = i.children, c = ms(l, qo);
      return c ? c.map(function(d, u) {
        var h = d.props, m = h.direction, g = h.dataKey;
        return /* @__PURE__ */ V.cloneElement(d, {
          key: "".concat(m, "-").concat(g, "-").concat(s[u]),
          data: s,
          xAxis: a,
          yAxis: o,
          layout: m === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(w, S) {
            return {
              x: w.cx,
              y: w.cy,
              value: m === "x" ? +w.node.x : +w.node.y,
              errorVal: Cn(w, S)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var r = this.props, i = r.points, s = r.line, a = r.lineType, o = r.lineJointType, l = or(this.props, !1), c = or(s, !1), d, u;
      if (a === "joint")
        d = i.map(function(_) {
          return {
            x: _.cx,
            y: _.cy
          };
        });
      else if (a === "fitting") {
        var h = Yo(i), m = h.xmin, g = h.xmax, v = h.a, w = h.b, S = function(D) {
          return v * D + w;
        };
        d = [{
          x: m,
          y: S(m)
        }, {
          x: g,
          y: S(g)
        }];
      }
      var N = Oe(Oe(Oe({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, c), {}, {
        points: d
      });
      return /* @__PURE__ */ V.isValidElement(s) ? u = /* @__PURE__ */ V.cloneElement(s, N) : Ko(s) ? u = s(N) : u = /* @__PURE__ */ V.createElement(Xo, Jt({}, N, {
        type: o
      })), /* @__PURE__ */ V.createElement(Vt, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, s = r.points, a = r.line, o = r.className, l = r.xAxis, c = r.yAxis, d = r.left, u = r.top, h = r.width, m = r.height, g = r.id, v = r.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var w = this.state.isAnimationFinished, S = Ja("recharts-scatter", o), N = l && l.allowDataOverflow, _ = c && c.allowDataOverflow, D = N || _, b = St(g) ? this.id : g;
      return /* @__PURE__ */ V.createElement(Vt, {
        className: S,
        clipPath: D ? "url(#clipPath-".concat(b, ")") : null
      }, N || _ ? /* @__PURE__ */ V.createElement("defs", null, /* @__PURE__ */ V.createElement("clipPath", {
        id: "clipPath-".concat(b)
      }, /* @__PURE__ */ V.createElement("rect", {
        x: N ? d : d - h / 2,
        y: _ ? u : u - m / 2,
        width: N ? h : h * 2,
        height: _ ? m : m * 2
      }))) : null, a && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ V.createElement(Vt, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || w) && ps.renderCallByParent(this.props, s));
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
})($o);
ht(mn, "displayName", "Scatter");
ht(mn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Qo.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
ht(mn, "getComposedData", function(n) {
  var e = n.xAxis, t = n.yAxis, r = n.zAxis, i = n.item, s = n.displayedData, a = n.xAxisTicks, o = n.yAxisTicks, l = n.offset, c = i.props.tooltipType, d = ms(i.props.children, el), u = St(e.dataKey) ? i.props.dataKey : e.dataKey, h = St(t.dataKey) ? i.props.dataKey : t.dataKey, m = r && r.dataKey, g = r ? r.range : nr.defaultProps.range, v = g && g[0], w = e.scale.bandwidth ? e.scale.bandwidth() : 0, S = t.scale.bandwidth ? t.scale.bandwidth() : 0, N = s.map(function(_, D) {
    var b = Cn(_, u), x = Cn(_, h), y = !St(m) && Cn(_, m) || "-", E = [{
      name: St(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: b,
      payload: _,
      dataKey: u,
      type: c
    }, {
      name: St(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: x,
      payload: _,
      dataKey: h,
      type: c
    }];
    y !== "-" && E.push({
      name: r.name || r.dataKey,
      unit: r.unit || "",
      value: y,
      payload: _,
      dataKey: m,
      type: c
    });
    var L = ci({
      axis: e,
      ticks: a,
      bandSize: w,
      entry: _,
      index: D,
      dataKey: u
    }), T = ci({
      axis: t,
      ticks: o,
      bandSize: S,
      entry: _,
      index: D,
      dataKey: h
    }), C = y !== "-" ? r.scale(y) : v, R = Math.sqrt(Math.max(C, 0) / Math.PI);
    return Oe(Oe({}, _), {}, {
      cx: L,
      cy: T,
      x: L - R,
      y: T - R,
      xAxis: e,
      yAxis: t,
      zAxis: r,
      width: 2 * R,
      height: 2 * R,
      size: C,
      node: {
        x: b,
        y: x,
        z: y
      },
      tooltipPayload: E,
      tooltipPosition: {
        x: L,
        y: T
      },
      payload: _
    }, d && d[D] && d[D].props);
  });
  return Oe({
    points: N
  }, l);
});
var Bu = tl({
  chartName: "ComposedChart",
  GraphicalChild: [gs, nl, vs, mn],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: ys
  }, {
    axisType: "yAxis",
    AxisComp: br
  }, {
    axisType: "zAxis",
    AxisComp: nr
  }],
  formatAxisMap: rl
});
const Fu = (n) => {
  const e = (t) => {
    const { cx: r, cy: i, fill: s, payload: a } = t, o = () => {
      if (!a) return "-";
      if (a[n] !== void 0)
        return a[n];
      for (const [l, c] of Object.entries(a))
        if (typeof c == "number" && l !== "x")
          return c;
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
}, Hu = ({ dataConfig: n, data: e, xAxis: t, yAxis: r = {
  hide: !0
}, label: i = !1, hideTooltip: s = !1, hideGrid: a = !1, aspect: o, legend: l, showValueUnderLabel: c = !1, bar: d, line: u, scatter: h, onClick: m }, g) => {
  const v = il(e), w = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], S = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], N = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], _ = [...w, ...S, ...N], D = Math.max(...v.flatMap((y) => _.map((E) => sl(r?.tickFormatter ? r.tickFormatter(`${y[E]}`) : `${y[E]}`)))), b = [d, u, h].filter((y) => y?.axisPosition === "left"), x = [d, u, h].filter((y) => y?.axisPosition === "right");
  return f(al, {
    config: n,
    ref: g,
    aspect: o,
    children: M(Bu, {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: r && !r.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: c ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (y) => {
        if (!m || !y.activeLabel || !y.activePayload)
          return;
        const E = {
          label: y.activeLabel,
          values: {}
        };
        for (const L of y.activePayload)
          E.values[L.name] = L.value;
        m(E);
      },
      children: [!s && f(ol, {
        ...ll(),
        content: f(cl, {
          yAxisFormatter: r.tickFormatter
        })
      }), !a && f(dl, {
        ...ul()
      }), b.length > 0 && f(br, {
        ...di(r),
        tick: !0,
        width: r.width ?? D + 20 + (x.length > 0 && b[0]?.axisLabel ? 20 : 0),
        hide: r.hide || b.some((y) => y?.hideAxis),
        label: b[0]?.axisLabel ? {
          value: b[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), x.length > 0 && f(br, {
        ...di(r),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: r.width ?? D + 20 + (b.length > 0 && x[0]?.axisLabel ? 20 : 0),
        hide: r.hide || x.some((y) => y?.hideAxis),
        label: x[0]?.axisLabel ? {
          value: x[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), f(ys, {
        ...hl(t),
        hide: t?.hide,
        tick: c ? (y) => {
          const { x: E, y: L, payload: T } = y, C = e.find((G) => G.label === T.value)?.values || "", R = Object.keys(C).length === 1 ? Object.values(C)?.[0] : void 0, O = R !== void 0 && r.tickFormatter ? r.tickFormatter(`${R}`) : R.toLocaleString();
          return M("g", {
            transform: `translate(${E},${L})`,
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
              children: O
            })]
          });
        } : void 0
      }), w.map((y, E) => f(vs, {
        isAnimationActive: !1,
        dataKey: String(y),
        fill: n[y].color ? Ut(n[y].color) : lr(E),
        radius: 4,
        maxBarSize: 32,
        children: i && f(ps, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(y)}`)
      }, `bar-${String(y)}`)), S.map((y, E) => f(gs, {
        type: u?.lineType ?? "natural",
        dataKey: String(y),
        stroke: n[y].color ? Ut(n[y].color) : lr(w.length + E),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(y)}`)), N.map((y, E) => f(mn, {
        dataKey: String(y),
        fill: n[y].color ? Ut(n[y].color) : lr(w.length + S.length + E),
        r: 4,
        isAnimationActive: !1,
        yAxisId: h?.axisPosition === "right" ? "right" : void 0,
        shape: Fu(String(y))
      }, `scatter-${String(y)}`)), l && f(fl, {
        content: f(ml, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, ju = bs(Hu), $u = ({ value: n, max: e = 100, label: t, color: r }, i) => {
  const s = r ? Ut(r) : Ut("categorical-1"), a = n / e * 100;
  return M("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [f("div", {
      className: "flex-grow",
      children: f(pl, {
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
}, Wu = bs($u), sm = Ie(
  {
    name: "AreaChart",
    type: "info"
  },
  gl
), am = Ie(
  {
    name: "BarChart",
    type: "info"
  },
  vl
), om = Ie(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  yl
), lm = Ie(
  {
    name: "LineChart",
    type: "info"
  },
  bl
), cm = Ie(
  {
    name: "PieChart",
    type: "info"
  },
  xl
), dm = Ie(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  wl
), um = Ie(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Wu
), hm = Ie(
  {
    name: "ComboChart",
    type: "info"
  },
  ju
), Gu = (n) => typeof n == "boolean" || !n ? {
  show: !!n,
  invertStatus: !1
} : {
  show: n.show ?? !0,
  invertStatus: n.invertStatus ?? !1
}, ua = ({ label: n, ...e }) => {
  const t = _l(), r = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = Gu(e.trend), s = t(e.comparison), a = Cl(r.numericValue, r.formatterOptions), o = ui(s.numericValue), l = ui(r.numericValue), c = B(() => {
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
      }), o !== void 0 && f(El, {
        percentage: c,
        amount: s,
        invertStatus: i.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, Vu = () => M("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [f(qe, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), M("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [f(qe, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), f(qe, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
ua.displayName = "F0BigNumber";
const Zu = Qi(ua, Vu), fm = Me("F0BigNumber", Zu), ha = {
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
}, fa = {
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
}, Uu = {}, qu = {
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
}, Yu = {
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
}, Ku = {
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
}, Xu = {
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
}, Ju = {
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
}, Qu = {
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
}, ma = {
  width: qu,
  height: Yu,
  minWidth: Ku,
  minHeight: Xu,
  maxWidth: Ju,
  maxHeight: Qu
}, pa = {
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
}, ga = {
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
}, va = {
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
}, eh = {}, ya = {
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
}, ba = {
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
}, th = {}, nh = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, xa = {
  overflow: nh,
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
}, rh = {}, wa = {
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
}, ih = {}, sh = {
  ...pa,
  ...wa,
  ...ba,
  ...va,
  ...ya,
  ...ma,
  ...ha,
  ...fa,
  ...xa,
  ...ga
};
function ah(n, e) {
  return e.split(" ").map((t) => `${n}:${t}`).join(" ");
}
function oh(n, e) {
  const t = [];
  for (const [r, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = sh[r];
    if (!s) continue;
    const a = s[String(i)];
    a && t.push(ah(n, a));
  }
  return t.join(" ");
}
const lh = vt({
  base: "",
  variants: {
    ...pa,
    ...wa,
    ...ba,
    ...va,
    ...ya,
    ...ma,
    ...ha,
    ...fa,
    ...xa,
    ...ga
  },
  defaultVariants: {
    ...ih,
    ...th,
    ...eh,
    ...Uu,
    ...rh
  }
}), ch = ["sm", "md", "lg", "xl"], _a = Ee(({ display: n, position: e, padding: t, paddingX: r, paddingY: i, paddingTop: s, paddingBottom: a, paddingLeft: o, paddingRight: l, margin: c, marginX: d, marginY: u, marginTop: h, marginBottom: m, marginLeft: g, marginRight: v, gap: w, columns: S, rows: N, colSpan: _, colStart: D, rowSpan: b, width: x, height: y, minWidth: E, minHeight: L, maxWidth: T, maxHeight: C, background: R, borderColor: O, border: G, borderTop: ae, borderBottom: oe, borderLeft: re, borderRight: ne, borderRadius: te, borderRadiusTopLeft: ve, borderRadiusTopRight: We, borderRadiusBottomLeft: ue, borderRadiusBottomRight: he, borderStyle: we, overflow: Je, overflowX: pe, overflowY: Ge, divider: ye, dividerColor: _e, alignItems: K, justifyContent: Qe, flexDirection: Ce, flexWrap: Le, grow: q, shrink: se, sm: ce, md: it, lg: pn, xl: Ht, ...Ve }, _t) => {
  const bt = ae && ae !== "none" || oe && oe !== "none" || re && re !== "none" || ne && ne !== "none", gn = G && G !== "none" || bt, vn = {
    sm: ce,
    md: it,
    lg: pn,
    xl: Ht
  }, ir = ch.map((yn) => {
    const et = vn[yn];
    return et ? oh(yn, et) : "";
  }).filter(Boolean).join(" ");
  return f("div", {
    ref: _t,
    className: X(bt && "border-0", lh({
      display: n,
      position: e,
      padding: t,
      paddingX: r,
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
      marginRight: v,
      gap: w,
      columns: S,
      rows: N,
      colSpan: _,
      colStart: D,
      rowSpan: b,
      width: x,
      height: y,
      minWidth: E,
      minHeight: L,
      maxWidth: T,
      maxHeight: C,
      background: R,
      borderColor: O,
      border: G,
      borderTop: ae,
      borderBottom: oe,
      borderLeft: re,
      borderRight: ne,
      borderRadius: te,
      borderRadiusTopLeft: ve,
      borderRadiusTopRight: We,
      borderRadiusBottomLeft: ue,
      borderRadiusBottomRight: he,
      borderStyle: we,
      overflow: Je,
      overflowX: pe,
      overflowY: Ge,
      divider: ye,
      dividerColor: _e,
      alignItems: K,
      justifyContent: Qe,
      flexDirection: Ce,
      flexWrap: Le,
      grow: q,
      shrink: se
    }), ir, gn && !O && "border-f1-border", ye && !_e && "divide-f1-border", "scrollbar-macos"),
    ...Ve
  });
});
_a.displayName = "F0Box";
const mm = Ie({
  name: "F0Box",
  type: "layout"
}, _a), pm = Qa.filter(
  (n) => n !== "ai"
), gm = es, vm = ["default", "outline", "neutral"], ym = es, bm = ["sm", "md", "lg"], xm = ["compact", "expanded"], wm = eo, _m = [
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
], kr = ({ count: n, list: e }) => {
  const [t, r] = Z(!1), i = f(kn, {
    label: `+${n}`
  });
  return e?.length ? M(ts, {
    open: t,
    onOpenChange: r,
    children: [f(ns, {
      asChild: !0,
      children: f("button", {
        className: rs("inline-flex flex-shrink-0 items-center"),
        children: i
      })
    }), f(is, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: M(ss, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, a) => f("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: f(kn, {
            ...s
          })
        }, a)), f(as, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
};
kr.displayName = "ChipCounter";
const Ca = ({ chips: n, max: e = 4, remainingCount: t, layout: r = "compact" }) => {
  if (r === "fill")
    return f(to, {
      items: n,
      renderListItem: (l) => f(kn, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => f(kr, {
        count: (t ?? 0) + l,
        list: t ? void 0 : n.slice(n.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const i = n.slice(0, e), s = n.slice(e), a = t ?? n.length - e, o = a > 0;
  return M("div", {
    className: "flex items-center gap-2",
    children: [i.map((l, c) => f(kn, {
      ...l
    }, c)), o && f(kr, {
      count: a,
      list: t ? void 0 : s
    })]
  });
};
Ca.displayName = "F0ChipList";
const Cm = Me("F0ChipList", Ca), Em = no, dh = vt({
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
}), uh = vt({
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
}), km = ({ title: n, description: e, action: t, link: r, icon: i, variant: s = "neutral" }) => {
  const a = F(null);
  return f("div", {
    ref: a,
    className: "@container",
    children: f("div", {
      className: dh({
        variant: s
      }),
      children: M("div", {
        className: X("flex flex-col items-start gap-3 @sm:flex-row @sm:items-center @sm:justify-between"),
        children: [M("div", {
          className: "flex flex-row gap-2",
          children: [f("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? f(ro, {
              icon: i || io,
              size: "sm"
            }) : f(kl, {
              type: s,
              size: "sm"
            })
          }), M("div", {
            className: "flex flex-col gap-0.5",
            children: [f("p", {
              className: uh({
                variant: s
              }),
              children: n
            }), f("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || r) && M("div", {
          className: X("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @sm:pl-0"),
          children: [r && f(so, {
            href: r.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: r.label
          }), t && f(Be, {
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
}, hh = 388;
function fh({ filters: n, value: e, onChange: t, height: r, width: i = 600, className: s, showApplyButton: a = !0, applyButtonLabel: o }) {
  const l = Zn(), [c, d] = Z(null), [u, h] = Z(e);
  j(() => {
    h(e);
  }, [e]), j(() => {
    if (!c && n) {
      const w = Object.keys(n);
      if (w.length > 0) {
        const S = w.find((N) => {
          const _ = u[N], D = ai(n[N].type);
          return _ !== void 0 && !D.isEmpty(_, {
            schema: n[N],
            i18n: l
          });
        });
        d(S ?? w[0]);
      }
    }
  }, [n, c, u, l]);
  const m = (w, S) => {
    const N = {
      ...u,
      [w]: S
    };
    h(N), a || t(N);
  }, g = () => {
    t(u);
  }, v = B(() => r || Object.entries(n).reduce((S, [N, _]) => {
    const D = ai(_.type);
    return Math.max(S, D?.formHeight || hh);
  }, 0), [n, r]);
  return !n || Object.keys(n).length === 0 ? null : f("div", {
    className: X("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: i
    },
    children: f(ao, {
      filters: n,
      tempFilters: u,
      selectedFilterKey: c,
      onFilterSelect: d,
      onFilterChange: m,
      onApply: g,
      height: v,
      showApplyButton: a,
      applyButtonLabel: o
    })
  });
}
fh.displayName = "F0FilterPickerContent";
const Ea = "gap-4", mh = "mt-6", ph = "max-w-[720px]", yt = "md", ka = Xe(null);
function Sa() {
  const n = Fe(ka);
  if (!n)
    throw new Error("useF0FormContext must be used within a F0Form");
  return n;
}
function sn(n, e, t) {
  const r = ["forms", n];
  return e && r.push(e), t && r.push(t), r.join(".");
}
function ie(n, e) {
  return n._def?.typeName === e;
}
function Xr(n) {
  return ie(n, "ZodEffects") ? n._def.schema : n;
}
const Da = /* @__PURE__ */ new WeakMap();
function Sm(n, e) {
  Da.set(n, e);
  const t = n;
  return t._f0Config = e, t._innerSchema = n, t;
}
function Jr(n) {
  const e = n;
  return e._f0Config ? e._f0Config : Da.get(n);
}
function Dm(n) {
  return Jr(n) !== void 0;
}
function $e(n) {
  let e = n;
  for (; ie(e, "ZodOptional") || ie(e, "ZodNullable") || ie(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function gh(n, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = $e(n);
  return ie(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : ie(t, "ZodNumber") ? "number" : ie(t, "ZodBoolean") ? "switch" : ie(t, "ZodDate") ? "date" : ie(t, "ZodEnum") || ie(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : ie(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function Ra(n) {
  return ie(n, "ZodOptional") || ie(n, "ZodNullable") || ie(n, "ZodDefault") && Ra(n._def.innerType);
}
const vh = /* @__PURE__ */ new Set([
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
function yh(n) {
  const e = $e(n);
  return ie(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "min" ? (r.value ?? 0) >= 1 : vh.has(r.kind)) : !1;
}
function Na(n) {
  if (Ra(n))
    return !1;
  const e = $e(n);
  return ie(e, "ZodString") ? yh(n) : !0;
}
function bh(n, e) {
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
function rr(n, e) {
  return typeof n == "function" ? n({ values: e }) : bh(n, e);
}
function Qr(n, e) {
  return n === void 0 ? !1 : typeof n == "function" ? n({ values: e }) : n;
}
function kt(n, e) {
  if (n !== void 0)
    return typeof n == "function" ? n({ values: e }) : n;
}
function xh(n) {
  const e = $e(n);
  return ie(e, "ZodLiteral") && e._def.value === !0;
}
function wh({ field: n, formField: e }) {
  const t = n.validation && xh(n.validation);
  return f(oo, {
    ...e,
    title: n.label,
    disabled: n.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function _h({ field: n, formField: e, error: t, isValidating: r, required: i }) {
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
  return f(cn, {
    children: n.render(s)
  });
}
function Ch(n, e) {
  if (n)
    return {
      value: {
        from: n,
        to: n
      },
      granularity: e?.[0] ?? "day"
    };
}
function Eh(n) {
  return n?.value?.from;
}
function Ta({ field: n, formField: e, error: t, loading: r }) {
  const i = B(() => Ch(e.value, n.granularities), [e.value, n.granularities]), s = (a) => {
    e.onChange(Eh(a));
  };
  return f(xs, {
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
    size: yt,
    hideLabel: !0,
    error: t,
    loading: r
  });
}
function Sr(n) {
  if (!n || !(n instanceof Date) || isNaN(n.getTime())) return "";
  const e = String(n.getHours()).padStart(2, "0"), t = String(n.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function kh(n) {
  if (!n) return;
  const [e, t] = n.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const r = /* @__PURE__ */ new Date();
  return r.setHours(e, t, 0, 0), r;
}
function mr(n, e) {
  if (!n) return;
  const t = new Date(n);
  if (e) {
    const [r, i, s] = e.split(":").map(Number);
    t.setHours(r ?? 0, i ?? 0, s ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function Oa({ field: n, formField: e, error: t, loading: r }) {
  const i = B(() => Sr(e.value), [e.value]), s = J((a) => {
    if (!a) {
      e.onChange(void 0);
      return;
    }
    const o = kh(a);
    e.onChange(o);
  }, [e]);
  return f(os, {
    type: "time",
    label: n.label,
    disabled: n.disabled,
    value: i,
    onChange: s,
    size: yt,
    hideLabel: !0,
    error: t,
    loading: r,
    clearable: n.clearable,
    name: e.name,
    ref: e.ref,
    icon: lo
  });
}
function Sh({ field: n, formField: e, error: t, loading: r }) {
  const i = e.value, s = B(() => Sr(i), [i]), a = J((h) => {
    if (!h) {
      e.onChange(void 0);
      return;
    }
    e.onChange(mr(h, s));
  }, [e, s]), o = J((h) => {
    if (!h) {
      if (i) {
        const g = new Date(i);
        g.setHours(0, 0, 0, 0), e.onChange(g);
      }
      return;
    }
    const m = Sr(h);
    if (!i) {
      const g = /* @__PURE__ */ new Date();
      g.setHours(0, 0, 0, 0), e.onChange(mr(g, m));
      return;
    }
    e.onChange(mr(i, m));
  }, [e, i]), l = B(() => ({
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
  }), [n]), c = B(() => ({
    ...e,
    value: i,
    onChange: a
  }), [e, i, a]), d = B(() => ({
    id: `${n.id}-time`,
    type: "time",
    label: "Time",
    disabled: n.disabled,
    clearable: !1
  }), [n.id, n.disabled]), u = B(() => ({
    ...e,
    value: i,
    onChange: o
  }), [e, i, o]);
  return M("div", {
    className: "flex gap-2",
    children: [f("div", {
      className: "flex-1",
      children: f(Ta, {
        field: l,
        formField: c,
        error: t,
        loading: r
      })
    }), f("div", {
      className: "w-32",
      children: f(Oa, {
        field: d,
        formField: u,
        error: t,
        loading: r
      })
    })]
  });
}
function Dh(n) {
  if (!(!n?.from || !n?.to))
    return {
      value: {
        from: n.from,
        to: n.to
      },
      granularity: "range"
    };
}
function Rh(n) {
  if (!(!n?.value?.from || !n?.value?.to))
    return {
      from: n.value.from,
      to: n.value.to
    };
}
function Nh({ field: n, formField: e, error: t, loading: r }) {
  const i = B(() => Dh(e.value), [e.value]), s = (o) => {
    e.onChange(Rh(o));
  }, a = n.fromLabel && n.toLabel ? `${n.label} (${n.fromLabel} - ${n.toLabel})` : n.label;
  return f(xs, {
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
    size: yt,
    hideLabel: !0,
    error: t,
    loading: r
  });
}
function Th({ field: n, formField: e, error: t, loading: r }) {
  return f(Sl, {
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
    size: yt,
    hideLabel: !0,
    error: t,
    loading: r,
    clearable: n.clearable
  });
}
function Oh({ field: n, formField: e }) {
  const t = e.value;
  return f(Dl, {
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
function Ah({ field: n, formField: e, error: t, loading: r }) {
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
    size: yt,
    hideLabel: !0
  };
  return n.multiple ? f(Nt, {
    ...i,
    multiple: !0,
    clearable: n.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : n.clearable ? f(Nt, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : f(Nt, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function Mh({ field: n, formField: e, error: t, loading: r }) {
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
    size: yt,
    hideLabel: !0
  };
  return n.multiple ? f(Nt, {
    ...i,
    multiple: !0,
    clearable: n.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : n.clearable ? f(Nt, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : f(Nt, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function Ih(n) {
  const { field: e } = n;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? f(Mh, {
    ...n,
    field: e
  }) : "options" in e && e.options !== void 0 ? f(Ah, {
    ...n,
    field: e
  }) : null;
}
function zh(n) {
  const e = $e(n);
  return ie(e, "ZodLiteral") && e._def.value === !0;
}
function Lh({ field: n, formField: e }) {
  const t = n.validation && zh(n.validation);
  return f(co, {
    ...e,
    title: n.label,
    disabled: n.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
const Ph = {
  email: "name@example.com"
}, Bh = {
  url: ho,
  email: uo
};
function Fh({ field: n, formField: e, error: t, loading: r }) {
  const i = n.inputType ?? "text", s = n.placeholder ?? Ph[i] ?? void 0, a = Bh[i];
  return f(os, {
    ...e,
    label: n.label,
    type: i,
    placeholder: s,
    disabled: n.disabled,
    value: e.value != null ? String(e.value) : "",
    size: yt,
    hideLabel: !0,
    error: t,
    loading: r,
    icon: a,
    clearable: n.clearable
  });
}
function Hh({ field: n, formField: e, error: t, loading: r }) {
  return f(Rl, {
    ...e,
    label: n.label,
    placeholder: n.placeholder,
    disabled: n.disabled,
    rows: n.rows,
    maxLength: n.maxLength,
    value: e.value != null ? String(e.value) : "",
    size: yt,
    hideLabel: !0,
    error: t,
    loading: r
  });
}
function jh({ field: n, formField: e, fieldState: t, isSubmitting: r, isRequired: i, values: s }) {
  const a = !!t.error, { isValidating: o } = t, l = Qr(n.disabled, s) || r, c = {
    error: a,
    loading: o
  };
  switch (n.type) {
    case "text":
      return f(Fh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "number":
      return f(Th, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "textarea":
      return f(Hh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "select":
      return f(Ih, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "checkbox":
      return f(wh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e
      });
    case "switch":
      return f(Lh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e
      });
    case "date":
      return f(Ta, {
        field: {
          ...n,
          disabled: l,
          minDate: kt(n.minDate, s),
          maxDate: kt(n.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "time":
      return f(Oa, {
        field: {
          ...n,
          disabled: l,
          minDate: kt(n.minDate, s),
          maxDate: kt(n.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "datetime":
      return f(Sh, {
        field: {
          ...n,
          disabled: l,
          minDate: kt(n.minDate, s),
          maxDate: kt(n.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "daterange":
      return f(Nh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "richtext":
      return f(Oh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e
      });
    case "custom":
      return f(_h, {
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
function ei({ field: n, sectionId: e }) {
  const t = Lr(), r = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = Sa(), { forms: a } = Zn(), o = Qr(n.disabled, r), l = F(o);
  j(() => {
    const m = l.current;
    if (l.current = o, !m && o && n.resetOnDisable) {
      const g = t.formState.defaultValues?.[n.id];
      t.setValue(n.id, g, {
        shouldValidate: !1
      });
    }
  }, [o, n.resetOnDisable, n.id, t]);
  const c = !n.renderIf || rr(n.renderIf, r), d = n.type !== "checkbox" && n.type !== "custom", u = n.validation && Na(n.validation), h = sn(s, e, n.id);
  return c ? f(hi, {
    control: t.control,
    name: n.id,
    render: ({ field: m, fieldState: g }) => M(Nl, {
      id: h,
      className: "scroll-mt-4",
      children: [d && M("label", {
        htmlFor: n.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [n.label, u && f("span", {
          className: "ml-0.5 text-f1-foreground-critical",
          children: "*"
        })]
      }), f(Tl, {
        children: jh({
          field: n,
          formField: m,
          fieldState: g,
          isSubmitting: i,
          isRequired: u,
          values: r
        })
      }), n.helpText && f(Ol, {
        children: n.helpText
      }), f(Al, {
        fallback: u ? a.validation.required : a.validation.invalidType
      })]
    })
  }) : f(hi, {
    control: t.control,
    name: n.id,
    render: () => f("span", {
      className: "hidden",
      "aria-hidden": "true"
    })
  });
}
function Aa({ row: n, sectionId: e }) {
  return f("div", {
    className: `flex xs:flex-row flex-col ${Ea} [&>*]:flex-1`,
    children: n.fields.map((t) => f(ei, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function $h(n) {
  const e = $e(n);
  return ie(e, "ZodLiteral") && e._def.value === !0;
}
function Ma({ fields: n }) {
  const e = Lr(), { watch: t, setValue: r } = e, { isSubmitting: i } = e.formState, s = t(), a = B(() => n.filter((h) => !h.renderIf || rr(h.renderIf, s)), [n, s]), o = B(() => Object.fromEntries(a.map((h) => [h.id, Qr(h.disabled, s) || i])), [a, i, s]), l = F({});
  j(() => {
    const h = l.current, m = e.formState.defaultValues ?? {};
    for (const g of a) {
      if (!(g.id in h))
        continue;
      const v = h[g.id], w = o[g.id] ?? !1;
      if (!v && w && g.resetOnDisable) {
        const S = m[g.id] ?? !1;
        r(g.id, S, {
          shouldValidate: !1
        });
      }
    }
    l.current = {
      ...o
    };
  }, [o, a, e, r]);
  const c = B(() => a.map((h) => ({
    value: h.id,
    title: h.label,
    description: h.helpText,
    disabled: o[h.id] ?? !1,
    required: !!(h.validation && $h(h.validation))
  })), [a, o]), d = B(() => a.filter((h) => s[h.id]).map((h) => h.id), [a, s]);
  return a.length === 0 ? null : f(Ml, {
    multiple: !0,
    isToggle: !0,
    grouped: !0,
    items: c,
    value: d,
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
function Wh(n) {
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
function Gh({ section: n }) {
  const t = Lr().watch(), { formName: r } = Sa(), { title: i, description: s, renderIf: a, action: o, fields: l } = n.section, c = n.id;
  if (a && !rr(a, t))
    return null;
  const d = Wh(l), u = sn(r, c);
  return M("section", {
    id: u,
    className: "flex flex-col scroll-mt-4",
    children: [M("div", {
      className: X("flex items-start justify-between py-5", "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"),
      children: [f(Il, {
        title: i,
        description: s ?? ""
      }), o && f(Be, {
        label: o.label,
        icon: o.icon,
        onClick: o.onClick,
        href: o.href,
        variant: "outline",
        size: "md"
      })]
    }), f("div", {
      className: `flex flex-col ${Ea}`,
      children: d.map((h, m) => h.type === "switchGroup" ? f(Ma, {
        fields: h.fields,
        sectionId: c
      }, `switch-group-${m}`) : h.type === "field" ? f(ei, {
        field: h.item.field,
        sectionId: c
      }, h.item.field.id) : h.type === "row" ? f(Aa, {
        row: h.item,
        sectionId: c
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
var Mi;
(function(n) {
  n.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Mi || (Mi = {}));
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
}, k = ee.arrayToEnum([
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
class rt extends Error {
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
            const c = a.path[l];
            l === a.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(t(a))) : o[c] = o[c] || { _errors: [] }, o = o[c], l++;
          }
        }
    };
    return i(this), r;
  }
  static assert(e) {
    if (!(e instanceof rt))
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
rt.create = (n) => new rt(n);
const Dr = (n, e) => {
  let t;
  switch (n.code) {
    case k.invalid_type:
      n.received === I.undefined ? t = "Required" : t = `Expected ${n.expected}, received ${n.received}`;
      break;
    case k.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(n.expected, ee.jsonStringifyReplacer)}`;
      break;
    case k.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${ee.joinValues(n.keys, ", ")}`;
      break;
    case k.invalid_union:
      t = "Invalid input";
      break;
    case k.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${ee.joinValues(n.options)}`;
      break;
    case k.invalid_enum_value:
      t = `Invalid enum value. Expected ${ee.joinValues(n.options)}, received '${n.received}'`;
      break;
    case k.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case k.invalid_return_type:
      t = "Invalid function return type";
      break;
    case k.invalid_date:
      t = "Invalid date";
      break;
    case k.invalid_string:
      typeof n.validation == "object" ? "includes" in n.validation ? (t = `Invalid input: must include "${n.validation.includes}"`, typeof n.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith" in n.validation ? t = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith" in n.validation ? t = `Invalid input: must end with "${n.validation.endsWith}"` : ee.assertNever(n.validation) : n.validation !== "regex" ? t = `Invalid ${n.validation}` : t = "Invalid";
      break;
    case k.too_small:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "bigint" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : t = "Invalid input";
      break;
    case k.too_big:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : t = "Invalid input";
      break;
    case k.custom:
      t = "Invalid input";
      break;
    case k.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case k.not_multiple_of:
      t = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case k.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, ee.assertNever(n);
  }
  return { message: t };
};
let Vh = Dr;
function Zh() {
  return Vh;
}
const Uh = (n) => {
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
  const l = r.filter((c) => !!c).slice().reverse();
  for (const c of l)
    o = c(a, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: s,
    message: o
  };
};
function A(n, e) {
  const t = Zh(), r = Uh({
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
      t === Dr ? void 0 : Dr
      // then global default map
    ].filter((i) => !!i)
  });
  n.common.issues.push(r);
}
class Ne {
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
        return $;
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
    return Ne.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, t) {
    const r = {};
    for (const i of t) {
      const { key: s, value: a } = i;
      if (s.status === "aborted" || a.status === "aborted")
        return $;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (r[s.value] = a.value);
    }
    return { status: e.value, value: r };
  }
}
const $ = Object.freeze({
  status: "aborted"
}), Zt = (n) => ({ status: "dirty", value: n }), ze = (n) => ({ status: "valid", value: n }), Ii = (n) => n.status === "aborted", zi = (n) => n.status === "dirty", Mt = (n) => n.status === "valid", Hn = (n) => typeof Promise < "u" && n instanceof Promise;
var z;
(function(n) {
  n.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, n.toString = (e) => typeof e == "string" ? e : e?.message;
})(z || (z = {}));
class pt {
  constructor(e, t, r, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Li = (n, e) => {
  if (Mt(e))
    return { success: !0, data: e.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new rt(n.common.issues);
      return this._error = t, this._error;
    }
  };
};
function U(n) {
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
      status: new Ne(),
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
    if (Hn(t))
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
    return Li(r, i);
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
        return Mt(r) ? {
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
    return this._parseAsync({ data: e, path: [], parent: t }).then((r) => Mt(r) ? {
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
    }, i = this._parse({ data: e, path: r.path, parent: r }), s = await (Hn(i) ? i : Promise.resolve(i));
    return Li(r, s);
  }
  refine(e, t) {
    const r = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: k.custom,
        ...r(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((r, i) => e(r) ? !0 : (i.addIssue(typeof t == "function" ? t(r, i) : t), !1));
  }
  _refinement(e) {
    return new zt({
      schema: this,
      typeName: W.ZodEffects,
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
    return Lt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ke.create(this);
  }
  promise() {
    return Gn.create(this, this._def);
  }
  or(e) {
    return $n.create([this, e], this._def);
  }
  and(e) {
    return Wn.create(this, e, this._def);
  }
  transform(e) {
    return new zt({
      ...U(this._def),
      schema: this,
      typeName: W.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Tr({
      ...U(this._def),
      innerType: this,
      defaultValue: t,
      typeName: W.ZodDefault
    });
  }
  brand() {
    return new vf({
      typeName: W.ZodBranded,
      type: this,
      ...U(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Or({
      ...U(this._def),
      innerType: this,
      catchValue: t,
      typeName: W.ZodCatch
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
    return ti.create(this, e);
  }
  readonly() {
    return Ar.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const qh = /^c[^\s-]{8,}$/i, Yh = /^[0-9a-z]+$/, Kh = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Xh = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Jh = /^[a-z0-9_-]{21}$/i, Qh = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ef = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, tf = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, nf = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let pr;
const rf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, af = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, of = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, lf = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, cf = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ia = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", df = new RegExp(`^${Ia}$`);
function za(n) {
  let e = "[0-5]\\d";
  n.precision ? e = `${e}\\.\\d{${n.precision}}` : n.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = n.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function uf(n) {
  return new RegExp(`^${za(n)}$`);
}
function hf(n) {
  let e = `${Ia}T${za(n)}`;
  const t = [];
  return t.push(n.local ? "Z?" : "Z"), n.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function ff(n, e) {
  return !!((e === "v4" || !e) && rf.test(n) || (e === "v6" || !e) && af.test(n));
}
function mf(n, e) {
  if (!Qh.test(n))
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
function pf(n, e) {
  return !!((e === "v4" || !e) && sf.test(n) || (e === "v6" || !e) && of.test(n));
}
class xt extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== I.string) {
      const s = this._getOrReturnCtx(e);
      return A(s, {
        code: k.invalid_type,
        expected: I.string,
        received: s.parsedType
      }), $;
    }
    const r = new Ne();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), A(i, {
          code: k.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), A(i, {
          code: k.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? A(i, {
          code: k.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && A(i, {
          code: k.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        tf.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
          validation: "email",
          code: k.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        pr || (pr = new RegExp(nf, "u")), pr.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
          validation: "emoji",
          code: k.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        Xh.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
          validation: "uuid",
          code: k.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "nanoid")
        Jh.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
          validation: "nanoid",
          code: k.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        qh.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
          validation: "cuid",
          code: k.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        Yh.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
          validation: "cuid2",
          code: k.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        Kh.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
          validation: "ulid",
          code: k.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), A(i, {
            validation: "url",
            code: k.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "regex",
        code: k.invalid_string,
        message: s.message
      }), r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: k.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: k.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: k.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "datetime" ? hf(s).test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: k.invalid_string,
        validation: "datetime",
        message: s.message
      }), r.dirty()) : s.kind === "date" ? df.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: k.invalid_string,
        validation: "date",
        message: s.message
      }), r.dirty()) : s.kind === "time" ? uf(s).test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        code: k.invalid_string,
        validation: "time",
        message: s.message
      }), r.dirty()) : s.kind === "duration" ? ef.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "duration",
        code: k.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "ip" ? ff(e.data, s.version) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "ip",
        code: k.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "jwt" ? mf(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "jwt",
        code: k.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "cidr" ? pf(e.data, s.version) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "cidr",
        code: k.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64" ? lf.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "base64",
        code: k.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64url" ? cf.test(e.data) || (i = this._getOrReturnCtx(e, i), A(i, {
        validation: "base64url",
        code: k.invalid_string,
        message: s.message
      }), r.dirty()) : ee.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _regex(e, t, r) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: k.invalid_string,
      ...z.errToObj(r)
    });
  }
  _addCheck(e) {
    return new xt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...z.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...z.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...z.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...z.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...z.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...z.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...z.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...z.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...z.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...z.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...z.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...z.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...z.errToObj(e) });
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
      ...z.errToObj(e?.message)
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
      ...z.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...z.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...z.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...z.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...z.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...z.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...z.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...z.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...z.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, z.errToObj(e));
  }
  trim() {
    return new xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new xt({
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
xt.create = (n) => new xt({
  checks: [],
  typeName: W.ZodString,
  coerce: n?.coerce ?? !1,
  ...U(n)
});
function gf(n, e) {
  const t = (n.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, i = t > r ? t : r, s = Number.parseInt(n.toFixed(i).replace(".", "")), a = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % a / 10 ** i;
}
class an extends Q {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== I.number) {
      const s = this._getOrReturnCtx(e);
      return A(s, {
        code: k.invalid_type,
        expected: I.number,
        received: s.parsedType
      }), $;
    }
    let r;
    const i = new Ne();
    for (const s of this._def.checks)
      s.kind === "int" ? ee.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), A(r, {
        code: k.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), A(r, {
        code: k.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), A(r, {
        code: k.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? gf(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), A(r, {
        code: k.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), A(r, {
        code: k.not_finite,
        message: s.message
      }), i.dirty()) : ee.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, z.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, z.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, z.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, z.toString(t));
  }
  setLimit(e, t, r, i) {
    return new an({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: z.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new an({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: z.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: z.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: z.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: z.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: z.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: z.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: z.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: z.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: z.toString(e)
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
an.create = (n) => new an({
  checks: [],
  typeName: W.ZodNumber,
  coerce: n?.coerce || !1,
  ...U(n)
});
class on extends Q {
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
    const i = new Ne();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), A(r, {
        code: k.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), A(r, {
        code: k.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), A(r, {
        code: k.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : ee.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return A(t, {
      code: k.invalid_type,
      expected: I.bigint,
      received: t.parsedType
    }), $;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, z.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, z.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, z.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, z.toString(t));
  }
  setLimit(e, t, r, i) {
    return new on({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: z.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new on({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: z.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: z.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: z.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: z.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: z.toString(t)
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
on.create = (n) => new on({
  checks: [],
  typeName: W.ZodBigInt,
  coerce: n?.coerce ?? !1,
  ...U(n)
});
class Pi extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== I.boolean) {
      const r = this._getOrReturnCtx(e);
      return A(r, {
        code: k.invalid_type,
        expected: I.boolean,
        received: r.parsedType
      }), $;
    }
    return ze(e.data);
  }
}
Pi.create = (n) => new Pi({
  typeName: W.ZodBoolean,
  coerce: n?.coerce || !1,
  ...U(n)
});
class jn extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== I.date) {
      const s = this._getOrReturnCtx(e);
      return A(s, {
        code: k.invalid_type,
        expected: I.date,
        received: s.parsedType
      }), $;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return A(s, {
        code: k.invalid_date
      }), $;
    }
    const r = new Ne();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), A(i, {
        code: k.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), A(i, {
        code: k.too_big,
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
    return new jn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: z.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: z.toString(t)
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
jn.create = (n) => new jn({
  checks: [],
  coerce: n?.coerce || !1,
  typeName: W.ZodDate,
  ...U(n)
});
class Bi extends Q {
  _parse(e) {
    if (this._getType(e) !== I.symbol) {
      const r = this._getOrReturnCtx(e);
      return A(r, {
        code: k.invalid_type,
        expected: I.symbol,
        received: r.parsedType
      }), $;
    }
    return ze(e.data);
  }
}
Bi.create = (n) => new Bi({
  typeName: W.ZodSymbol,
  ...U(n)
});
class Fi extends Q {
  _parse(e) {
    if (this._getType(e) !== I.undefined) {
      const r = this._getOrReturnCtx(e);
      return A(r, {
        code: k.invalid_type,
        expected: I.undefined,
        received: r.parsedType
      }), $;
    }
    return ze(e.data);
  }
}
Fi.create = (n) => new Fi({
  typeName: W.ZodUndefined,
  ...U(n)
});
class Hi extends Q {
  _parse(e) {
    if (this._getType(e) !== I.null) {
      const r = this._getOrReturnCtx(e);
      return A(r, {
        code: k.invalid_type,
        expected: I.null,
        received: r.parsedType
      }), $;
    }
    return ze(e.data);
  }
}
Hi.create = (n) => new Hi({
  typeName: W.ZodNull,
  ...U(n)
});
class Rr extends Q {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ze(e.data);
  }
}
Rr.create = (n) => new Rr({
  typeName: W.ZodAny,
  ...U(n)
});
class ji extends Q {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ze(e.data);
  }
}
ji.create = (n) => new ji({
  typeName: W.ZodUnknown,
  ...U(n)
});
class gt extends Q {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return A(t, {
      code: k.invalid_type,
      expected: I.never,
      received: t.parsedType
    }), $;
  }
}
gt.create = (n) => new gt({
  typeName: W.ZodNever,
  ...U(n)
});
class $i extends Q {
  _parse(e) {
    if (this._getType(e) !== I.undefined) {
      const r = this._getOrReturnCtx(e);
      return A(r, {
        code: k.invalid_type,
        expected: I.void,
        received: r.parsedType
      }), $;
    }
    return ze(e.data);
  }
}
$i.create = (n) => new $i({
  typeName: W.ZodVoid,
  ...U(n)
});
class Ke extends Q {
  _parse(e) {
    const { ctx: t, status: r } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== I.array)
      return A(t, {
        code: k.invalid_type,
        expected: I.array,
        received: t.parsedType
      }), $;
    if (i.exactLength !== null) {
      const a = t.data.length > i.exactLength.value, o = t.data.length < i.exactLength.value;
      (a || o) && (A(t, {
        code: a ? k.too_big : k.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (A(t, {
      code: k.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (A(t, {
      code: k.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new pt(t, a, t.path, o)))).then((a) => Ne.mergeArray(r, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new pt(t, a, t.path, o)));
    return Ne.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Ke({
      ...this._def,
      minLength: { value: e, message: z.toString(t) }
    });
  }
  max(e, t) {
    return new Ke({
      ...this._def,
      maxLength: { value: e, message: z.toString(t) }
    });
  }
  length(e, t) {
    return new Ke({
      ...this._def,
      exactLength: { value: e, message: z.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ke.create = (n, e) => new Ke({
  type: n,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: W.ZodArray,
  ...U(e)
});
function Rt(n) {
  if (n instanceof le) {
    const e = {};
    for (const t in n.shape) {
      const r = n.shape[t];
      e[t] = ft.create(Rt(r));
    }
    return new le({
      ...n._def,
      shape: () => e
    });
  } else return n instanceof Ke ? new Ke({
    ...n._def,
    type: Rt(n.element)
  }) : n instanceof ft ? ft.create(Rt(n.unwrap())) : n instanceof Lt ? Lt.create(Rt(n.unwrap())) : n instanceof wt ? wt.create(n.items.map((e) => Rt(e))) : n;
}
class le extends Q {
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
      const c = this._getOrReturnCtx(e);
      return A(c, {
        code: k.invalid_type,
        expected: I.object,
        received: c.parsedType
      }), $;
    }
    const { status: r, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof gt && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const d = s[c], u = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: d._parse(new pt(i, u, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof gt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of o)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: i.data[d] }
          });
      else if (c === "strict")
        o.length > 0 && (A(i, {
          code: k.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of o) {
        const u = i.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new pt(i, u, i.path, d)
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
    }).then((c) => Ne.mergeObjectSync(r, c)) : Ne.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return z.errToObj, new le({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, r) => {
          const i = this._def.errorMap?.(t, r).message ?? r.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: z.errToObj(e).message ?? i
          } : {
            message: i
          };
        }
      } : {}
    });
  }
  strip() {
    return new le({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new le({
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
    return new le({
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
    return new le({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: W.ZodObject
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
    return new le({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const r of ee.objectKeys(e))
      e[r] && this.shape[r] && (t[r] = this.shape[r]);
    return new le({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const r of ee.objectKeys(this.shape))
      e[r] || (t[r] = this.shape[r]);
    return new le({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Rt(this);
  }
  partial(e) {
    const t = {};
    for (const r of ee.objectKeys(this.shape)) {
      const i = this.shape[r];
      e && !e[r] ? t[r] = i : t[r] = i.optional();
    }
    return new le({
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
    return new le({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return La(ee.objectKeys(this.shape));
  }
}
le.create = (n, e) => new le({
  shape: () => n,
  unknownKeys: "strip",
  catchall: gt.create(),
  typeName: W.ZodObject,
  ...U(e)
});
le.strictCreate = (n, e) => new le({
  shape: () => n,
  unknownKeys: "strict",
  catchall: gt.create(),
  typeName: W.ZodObject,
  ...U(e)
});
le.lazycreate = (n, e) => new le({
  shape: n,
  unknownKeys: "strip",
  catchall: gt.create(),
  typeName: W.ZodObject,
  ...U(e)
});
class $n extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new rt(o.ctx.common.issues));
      return A(t, {
        code: k.invalid_union,
        unionErrors: a
      }), $;
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
      const o = a.map((l) => new rt(l));
      return A(t, {
        code: k.invalid_union,
        unionErrors: o
      }), $;
    }
  }
  get options() {
    return this._def.options;
  }
}
$n.create = (n, e) => new $n({
  options: n,
  typeName: W.ZodUnion,
  ...U(e)
});
function Nr(n, e) {
  const t = ut(n), r = ut(e);
  if (n === e)
    return { valid: !0, data: n };
  if (t === I.object && r === I.object) {
    const i = ee.objectKeys(e), s = ee.objectKeys(n).filter((o) => i.indexOf(o) !== -1), a = { ...n, ...e };
    for (const o of s) {
      const l = Nr(n[o], e[o]);
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
      const a = n[s], o = e[s], l = Nr(a, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === I.date && r === I.date && +n == +e ? { valid: !0, data: n } : { valid: !1 };
}
class Wn extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), i = (s, a) => {
      if (Ii(s) || Ii(a))
        return $;
      const o = Nr(s.value, a.value);
      return o.valid ? ((zi(s) || zi(a)) && t.dirty(), { status: t.value, value: o.data }) : (A(r, {
        code: k.invalid_intersection_types
      }), $);
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
Wn.create = (n, e, t) => new Wn({
  left: n,
  right: e,
  typeName: W.ZodIntersection,
  ...U(t)
});
class wt extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== I.array)
      return A(r, {
        code: k.invalid_type,
        expected: I.array,
        received: r.parsedType
      }), $;
    if (r.data.length < this._def.items.length)
      return A(r, {
        code: k.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), $;
    !this._def.rest && r.data.length > this._def.items.length && (A(r, {
      code: k.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...r.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new pt(r, a, r.path, o)) : null;
    }).filter((a) => !!a);
    return r.common.async ? Promise.all(s).then((a) => Ne.mergeArray(t, a)) : Ne.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new wt({
      ...this._def,
      rest: e
    });
  }
}
wt.create = (n, e) => {
  if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new wt({
    items: n,
    typeName: W.ZodTuple,
    rest: null,
    ...U(e)
  });
};
class Wi extends Q {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== I.map)
      return A(r, {
        code: k.invalid_type,
        expected: I.map,
        received: r.parsedType
      }), $;
    const i = this._def.keyType, s = this._def.valueType, a = [...r.data.entries()].map(([o, l], c) => ({
      key: i._parse(new pt(r, o, r.path, [c, "key"])),
      value: s._parse(new pt(r, l, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, d = await l.value;
          if (c.status === "aborted" || d.status === "aborted")
            return $;
          (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return $;
        (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
      }
      return { status: t.value, value: o };
    }
  }
}
Wi.create = (n, e, t) => new Wi({
  valueType: e,
  keyType: n,
  typeName: W.ZodMap,
  ...U(t)
});
class ln extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== I.set)
      return A(r, {
        code: k.invalid_type,
        expected: I.set,
        received: r.parsedType
      }), $;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (A(r, {
      code: k.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (A(r, {
      code: k.too_big,
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
          return $;
        d.status === "dirty" && t.dirty(), c.add(d.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...r.data.values()].map((l, c) => s._parse(new pt(r, l, r.path, c)));
    return r.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new ln({
      ...this._def,
      minSize: { value: e, message: z.toString(t) }
    });
  }
  max(e, t) {
    return new ln({
      ...this._def,
      maxSize: { value: e, message: z.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ln.create = (n, e) => new ln({
  valueType: n,
  minSize: null,
  maxSize: null,
  typeName: W.ZodSet,
  ...U(e)
});
class Gi extends Q {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Gi.create = (n, e) => new Gi({
  getter: n,
  typeName: W.ZodLazy,
  ...U(e)
});
class Vi extends Q {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return A(t, {
        received: t.data,
        code: k.invalid_literal,
        expected: this._def.value
      }), $;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Vi.create = (n, e) => new Vi({
  value: n,
  typeName: W.ZodLiteral,
  ...U(e)
});
function La(n, e) {
  return new It({
    values: n,
    typeName: W.ZodEnum,
    ...U(e)
  });
}
class It extends Q {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return A(t, {
        expected: ee.joinValues(r),
        received: t.parsedType,
        code: k.invalid_type
      }), $;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return A(t, {
        received: t.data,
        code: k.invalid_enum_value,
        options: r
      }), $;
    }
    return ze(e.data);
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
    return It.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return It.create(this.options.filter((r) => !e.includes(r)), {
      ...this._def,
      ...t
    });
  }
}
It.create = La;
class Zi extends Q {
  _parse(e) {
    const t = ee.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== I.string && r.parsedType !== I.number) {
      const i = ee.objectValues(t);
      return A(r, {
        expected: ee.joinValues(i),
        received: r.parsedType,
        code: k.invalid_type
      }), $;
    }
    if (this._cache || (this._cache = new Set(ee.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = ee.objectValues(t);
      return A(r, {
        received: r.data,
        code: k.invalid_enum_value,
        options: i
      }), $;
    }
    return ze(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Zi.create = (n, e) => new Zi({
  values: n,
  typeName: W.ZodNativeEnum,
  ...U(e)
});
class Gn extends Q {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== I.promise && t.common.async === !1)
      return A(t, {
        code: k.invalid_type,
        expected: I.promise,
        received: t.parsedType
      }), $;
    const r = t.parsedType === I.promise ? t.data : Promise.resolve(t.data);
    return ze(r.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Gn.create = (n, e) => new Gn({
  type: n,
  typeName: W.ZodPromise,
  ...U(e)
});
class zt extends Q {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === W.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (a) => {
        A(r, a), a.fatal ? t.abort() : t.dirty();
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
            return $;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? $ : l.status === "dirty" || t.value === "dirty" ? Zt(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return $;
        const o = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? $ : o.status === "dirty" || t.value === "dirty" ? Zt(o.value) : o;
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
        return o.status === "aborted" ? $ : (o.status === "dirty" && t.dirty(), a(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? $ : (o.status === "dirty" && t.dirty(), a(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Mt(a))
          return $;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => Mt(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({
          status: t.value,
          value: o
        })) : $);
    ee.assertNever(i);
  }
}
zt.create = (n, e, t) => new zt({
  schema: n,
  typeName: W.ZodEffects,
  effect: e,
  ...U(t)
});
zt.createWithPreprocess = (n, e, t) => new zt({
  schema: e,
  effect: { type: "preprocess", transform: n },
  typeName: W.ZodEffects,
  ...U(t)
});
class ft extends Q {
  _parse(e) {
    return this._getType(e) === I.undefined ? ze(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ft.create = (n, e) => new ft({
  innerType: n,
  typeName: W.ZodOptional,
  ...U(e)
});
class Lt extends Q {
  _parse(e) {
    return this._getType(e) === I.null ? ze(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Lt.create = (n, e) => new Lt({
  innerType: n,
  typeName: W.ZodNullable,
  ...U(e)
});
class Tr extends Q {
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
Tr.create = (n, e) => new Tr({
  innerType: n,
  typeName: W.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...U(e)
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
    return Hn(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new rt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new rt(r.common.issues);
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
  typeName: W.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...U(e)
});
class Ui extends Q {
  _parse(e) {
    if (this._getType(e) !== I.nan) {
      const r = this._getOrReturnCtx(e);
      return A(r, {
        code: k.invalid_type,
        expected: I.nan,
        received: r.parsedType
      }), $;
    }
    return { status: "valid", value: e.data };
  }
}
Ui.create = (n) => new Ui({
  typeName: W.ZodNaN,
  ...U(n)
});
class vf extends Q {
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
class ti extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? $ : s.status === "dirty" ? (t.dirty(), Zt(s.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? $ : i.status === "dirty" ? (t.dirty(), {
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
    return new ti({
      in: e,
      out: t,
      typeName: W.ZodPipeline
    });
  }
}
class Ar extends Q {
  _parse(e) {
    const t = this._def.innerType._parse(e), r = (i) => (Mt(i) && (i.value = Object.freeze(i.value)), i);
    return Hn(t) ? t.then((i) => r(i)) : r(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ar.create = (n, e) => new Ar({
  innerType: n,
  typeName: W.ZodReadonly,
  ...U(e)
});
var W;
(function(n) {
  n.ZodString = "ZodString", n.ZodNumber = "ZodNumber", n.ZodNaN = "ZodNaN", n.ZodBigInt = "ZodBigInt", n.ZodBoolean = "ZodBoolean", n.ZodDate = "ZodDate", n.ZodSymbol = "ZodSymbol", n.ZodUndefined = "ZodUndefined", n.ZodNull = "ZodNull", n.ZodAny = "ZodAny", n.ZodUnknown = "ZodUnknown", n.ZodNever = "ZodNever", n.ZodVoid = "ZodVoid", n.ZodArray = "ZodArray", n.ZodObject = "ZodObject", n.ZodUnion = "ZodUnion", n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", n.ZodIntersection = "ZodIntersection", n.ZodTuple = "ZodTuple", n.ZodRecord = "ZodRecord", n.ZodMap = "ZodMap", n.ZodSet = "ZodSet", n.ZodFunction = "ZodFunction", n.ZodLazy = "ZodLazy", n.ZodLiteral = "ZodLiteral", n.ZodEnum = "ZodEnum", n.ZodEffects = "ZodEffects", n.ZodNativeEnum = "ZodNativeEnum", n.ZodOptional = "ZodOptional", n.ZodNullable = "ZodNullable", n.ZodDefault = "ZodDefault", n.ZodCatch = "ZodCatch", n.ZodPromise = "ZodPromise", n.ZodBranded = "ZodBranded", n.ZodPipeline = "ZodPipeline", n.ZodReadonly = "ZodReadonly";
})(W || (W = {}));
const yf = Rr.create;
gt.create;
Ke.create;
const bf = le.create;
$n.create;
Wn.create;
wt.create;
It.create;
Gn.create;
ft.create;
Lt.create;
function xf(n, e) {
  return async (t, r, i) => {
    const s = wf(n, t);
    return zl(s, e)(t, r, i);
  };
}
function wf(n, e) {
  const r = Xr(n).shape, i = {};
  for (const [a, o] of Object.entries(r)) {
    const l = Jr(o);
    if (!l || !l.renderIf) {
      i[a] = o;
      continue;
    }
    rr(l.renderIf, e) ? i[a] = o : i[a] = yf();
  }
  const s = bf(i);
  if (ie(n, "ZodEffects")) {
    const o = n._def.effect;
    if (o.type === "refinement")
      return s.superRefine(o.refinement);
  }
  return s;
}
function qi(n) {
  const e = document.getElementById(n);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function _f({
  formName: n,
  errors: e
}) {
  const t = Object.keys(e).filter((h) => h !== "root"), r = t.length > 0, i = t.length, [s, a] = Z(0), o = F([]);
  j(() => {
    const h = t, m = o.current, g = h.find(
      (v) => !m.includes(v)
    );
    if (g) {
      const v = sn(n, void 0, g);
      qi(v);
      const w = h.indexOf(g);
      w !== -1 && a(w);
    }
    o.current = h;
  }, [t, n]);
  const l = J(
    (h) => {
      if (t.length === 0) return;
      const m = (h % t.length + t.length) % t.length;
      a(m);
      const g = t[m], v = sn(n, void 0, g);
      qi(v);
    },
    [t, n]
  ), c = J(() => {
    l(s - 1);
  }, [s, l]), d = J(() => {
    l(s + 1);
  }, [s, l]), u = J(() => {
    a(0), o.current = [];
  }, []);
  return {
    fieldErrors: t,
    hasErrors: r,
    errorCount: i,
    currentErrorIndex: s,
    goToPreviousError: c,
    goToNextError: d,
    resetErrorNavigation: u
  };
}
function Cf(n) {
  const e = $e(n);
  if (!ie(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let r, i;
  for (const s of t)
    s.kind === "min" ? r = s.value : s.kind === "max" && (i = s.value);
  return { min: r, max: i };
}
function gr(n) {
  const e = $e(n);
  if (!ie(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let r, i;
  for (const s of t)
    s.kind === "min" ? r = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: r, maxDate: i };
}
function Ef(n) {
  const e = $e(n);
  if (!ie(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let r;
  for (const i of t)
    i.kind === "max" && (r = i.value);
  return { maxLength: r };
}
function kf(n) {
  const e = $e(n);
  return ie(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "email") : !1;
}
function Sf(n) {
  const e = $e(n);
  return ie(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "url") : !1;
}
function Yi(n) {
  return kf(n) ? "email" : Sf(n) ? "url" : "text";
}
function Ki(n, e, t, r) {
  const i = {
    id: n,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    validation: e
  }, s = !Na(e);
  switch (r) {
    case "text": {
      const a = "inputType" in t && t.inputType ? t.inputType : Yi(e);
      return {
        ...i,
        type: "text",
        inputType: a,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: a, max: o } = Cf(e);
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
      const { maxLength: a } = Ef(e);
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
      const a = gr(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = gr(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = gr(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
        inputType: Yi(e),
        renderIf: t.renderIf
      };
  }
}
function Vn(n) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (let r = 0; r < n.length; r++) {
    if (t.has(r)) continue;
    const i = n[r], s = i.config.row;
    if (s) {
      const a = [];
      for (let l = r; l < n.length; l++)
        n[l].config.row === s && (a.push(n[l]), t.add(l));
      a.sort((l, c) => l.position - c.position);
      const o = {
        type: "row",
        fields: a.map(
          (l) => Ki(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(o);
    } else {
      t.add(r);
      const a = Ki(
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
function Pa(n) {
  const e = n.shape, t = [], r = Object.entries(e);
  for (let i = 0; i < r.length; i++) {
    const [s, a] = r[i], o = Jr(a);
    if (o) {
      const l = gh(a, o);
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
function Df(n, e) {
  return B(() => {
    const t = Xr(n), r = Pa(t), i = [], s = {};
    for (const l of r) {
      const c = l.config.section;
      c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
    }
    i.sort((l, c) => l.position - c.position);
    for (const l of Object.keys(s))
      s[l].sort((c, d) => c.position - d.position);
    const a = [];
    a.push(...Vn(i));
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
          fields: Vn(d)
        }
      };
      a.push(u);
    }
    return a;
  }, [n, e]);
}
function Rm(n, e) {
  const t = Xr(n), r = Pa(t), i = [], s = {};
  for (const l of r) {
    const c = l.config.section;
    c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
  }
  i.sort((l, c) => l.position - c.position);
  for (const l of Object.keys(s))
    s[l].sort((c, d) => c.position - d.position);
  const a = [];
  a.push(...Vn(i));
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
        fields: Vn(d)
      }
    };
    a.push(u);
  }
  return a;
}
function Rf(n) {
  const { validation: e } = n.forms;
  return (t, r) => {
    switch (t.code) {
      case k.invalid_type:
        return t.received === "undefined" || t.received === "null" ? { message: e.required } : { message: e.invalidType };
      case k.invalid_string:
        if (t.validation === "email")
          return { message: e.string.email };
        if (t.validation === "url")
          return { message: e.string.url };
        break;
      case k.too_small:
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
      case k.too_big:
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
      case k.invalid_date:
        return { message: e.date.invalid };
      case k.not_multiple_of:
        if (t.multipleOf === 1)
          return { message: e.number.integer };
        break;
      case k.invalid_literal:
        if (t.expected === !0)
          return { message: e.checkbox.mustBeChecked };
        break;
    }
    return { message: r.defaultError };
  };
}
function Nf(n) {
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
const Tf = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Of(n) {
  const e = Zn(), { forms: t } = e, { name: r, schema: i, sections: s, defaultValues: a, onSubmit: o, submitConfig: l, className: c, errorTriggerMode: d = "on-blur", styling: u, formRef: h } = n, m = u?.showSectionsSidepanel ?? !1, g = l?.type === "action-bar", v = l?.label ?? "Submit", w = l?.icon === null ? void 0 : l?.icon ?? fo, S = l?.type !== "action-bar" && l?.hideSubmitButton, N = !g && !S, _ = l?.type === "action-bar" && l?.discardable, D = g ? l?.discardConfig : void 0, b = D?.label ?? t.actionBar.discard, x = D?.icon === null ? void 0 : D?.icon ?? mo, y = g ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, E = g && !!l?.centerActionBarInFrameContent, L = Df(i, s), T = B(() => L.filter((q) => q.type === "section").map((q) => q.id), [L]), [C, R] = Z(T[0]), O = J((q) => {
    R(q);
    const se = sn(r, q), ce = document.getElementById(se);
    ce && ce.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [r]), G = B(() => !s || !m ? [] : T.map((q) => ({
    id: q,
    label: s[q]?.title ?? q,
    onClick: () => O(q)
  })), [s, T, m, O]), ae = B(() => Rf(e), [e]), oe = Tf[d], re = B(() => xf(i, {
    errorMap: ae
  }), [i, ae]), ne = Ll({
    resolver: re,
    mode: oe,
    defaultValues: a
  }), te = ne.formState.errors.root, { isDirty: ve, isSubmitting: We, errors: ue } = ne.formState, { hasErrors: he, errorCount: we, goToPreviousError: Je, goToNextError: pe, resetErrorNavigation: Ge } = _f({
    formName: r,
    errors: ue
  }), ye = async (q) => {
    const se = await o(q);
    se.success || (se.errors && Object.entries(se.errors).forEach(([ce, it]) => {
      ne.setError(ce, {
        message: it
      });
    }), se.rootMessage && ne.setError("root", {
      message: se.rootMessage
    }));
  }, _e = () => {
    ne.reset(), Ge();
  }, K = F(null);
  j(() => {
    if (h) {
      const q = {
        submit: () => new Promise((se, ce) => {
          ne.handleSubmit(async (it) => {
            await ye(it), se();
          }, () => {
            ce(new Error("Form validation failed"));
          })();
        }),
        reset: () => {
          ne.reset(), Ge();
        },
        isDirty: () => ne.formState.isDirty,
        _setStateCallback: (se) => {
          K.current = se;
        }
      };
      h.current = q;
    }
    return () => {
      h && (h.current = null);
    };
  }, [h, ne, Ge]), j(() => {
    K.current && K.current({
      isSubmitting: We,
      hasErrors: he
    });
  }, [We, he]);
  const Qe = Nf(L), Ce = B(() => ({
    formName: r
  }), [r]), Le = M("form", {
    onSubmit: ne.handleSubmit(ye),
    className: X("flex flex-col", ph, c),
    children: [Qe.map((q, se) => {
      const ce = se !== 0 && q.type !== "section" ? "mt-4" : "";
      switch (q.type) {
        case "switchGroup":
          return f("div", {
            className: ce,
            children: f(Ma, {
              fields: q.fields
            })
          }, `switch-group-${se}`);
        case "field":
          return f("div", {
            className: ce,
            children: f(ei, {
              field: q.item.field
            })
          }, q.item.field.id);
        case "row":
          return f("div", {
            className: ce,
            children: f(Aa, {
              row: q.item
            })
          }, `row-${q.index}`);
        case "section":
          return f("div", {
            className: se !== 0 ? mh : "",
            children: f(Gh, {
              section: q.item
            })
          }, q.item.id);
        default:
          return null;
      }
    }), te && f("p", {
      className: "mt-4 text-base font-medium text-f1-foreground-critical",
      children: te.message
    }), !g && N && f("div", {
      className: "mt-4",
      children: f(Be, {
        type: "submit",
        label: v,
        icon: w,
        loading: We,
        disabled: he
      })
    })]
  });
  return f(ka.Provider, {
    value: Ce,
    children: M(Pl, {
      ...ne,
      children: [m && G.length > 0 ? M("div", {
        className: "flex w-full gap-4",
        children: [f("div", {
          className: "shrink-0 sticky top-4 h-fit self-start pt-3",
          children: f(ws, {
            items: G,
            activeItem: C,
            scrollable: !1
          })
        }), f("div", {
          className: "w-px bg-f1-border-secondary"
        }), f("div", {
          className: "flex flex-1 justify-center",
          children: Le
        })]
      }) : Le, g && f(Bl, {
        isOpen: ve,
        variant: "light",
        centerInFrameContent: E,
        label: he ? void 0 : y,
        leftContent: he ? M("div", {
          className: "flex items-center gap-3",
          children: [M("div", {
            className: "flex items-center gap-0.5",
            children: [f(zr, {
              icon: po,
              size: "md",
              color: "critical"
            }), f("span", {
              className: "font-medium text-f1-foreground-critical",
              children: we === 1 ? t.actionBar.issues.one.replace("{{count}}", String(we)) : t.actionBar.issues.other.replace("{{count}}", String(we))
            })]
          }), we > 1 && M("div", {
            className: "flex items-center gap-2",
            children: [f(Be, {
              icon: go,
              onClick: Je,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }), f(Be, {
              icon: vo,
              onClick: pe,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            })]
          })]
        }) : void 0,
        primaryActions: [{
          label: v,
          icon: w,
          onClick: ne.handleSubmit(ye),
          disabled: he
        }],
        secondaryActions: _ ? [{
          label: b,
          icon: x,
          onClick: _e
        }] : []
      })]
    })
  });
}
function Nm() {
  const [n, e] = Z(!1), [t, r] = Z(!1), i = F((d) => {
    e(d.isSubmitting), r(d.hasErrors);
  }), s = F(null), a = F({
    get current() {
      return s.current;
    },
    set current(d) {
      s.current = d, d && d._setStateCallback(i.current);
    }
  }), o = J(async () => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return s.current.submit();
  }, []), l = J(() => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    s.current.reset();
  }, []), c = J(() => s.current ? s.current.isDirty() : !1, []);
  return {
    formRef: a.current,
    submit: o,
    reset: l,
    isDirty: c,
    isSubmitting: n,
    hasErrors: t
  };
}
const Tm = Me("F0Form", Of), Af = Ee((n, e) => f(Hr, {
  ref: e,
  variant: "heading",
  ...n
}));
Af.displayName = "F0Heading";
const Om = Me(
  "F0GridStack",
  Fr
), vr = 16, Mf = vt({
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
function Ba(n, e = 0) {
  return n.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? Ba(t.children, e + 1) : []]);
}
function If(n, e) {
  const t = n.length;
  if (t <= vr) return n;
  const r = t / (vr - 1), i = new Set(Array.from({
    length: vr - 1
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
function zf({ items: n, activeItem: e, className: t, align: r = "left", variant: i = "dark" }) {
  const s = B(() => If(Ba(n), e), [n, e]);
  return f("div", {
    className: X("flex flex-col justify-center gap-2 py-3", r === "right" ? "items-end" : "items-start", t),
    children: s.map((a) => f("div", {
      className: Mf({
        depth: a.depth,
        variant: i,
        active: a.id === e
      })
    }, a.id))
  });
}
const Lf = 300, Pf = 0, Bf = vt({
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
function Ff({ title: n, items: e, className: t, activeItem: r, collapsible: i = !1, showChildrenCounter: s = !1, barsAlign: a = "left", size: o = "md", variant: l = "light" }) {
  const [c, d] = Z(!1), u = F(!1), h = (g) => {
    g && !c && (u.current = !0), d(g);
  }, m = J((g) => {
    !g || !u.current || (u.current = !1, requestAnimationFrame(() => {
      g.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return M(yo, {
    open: c,
    onOpenChange: h,
    openDelay: Pf,
    closeDelay: Lf,
    children: [f(bo, {
      asChild: !0,
      children: f("button", {
        className: X(rs(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": n ?? "Menu",
        children: f(zf, {
          items: e,
          activeItem: r,
          align: a,
          variant: l
        })
      })
    }), f(xo, {
      ref: m,
      side: a === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: X(Bf({
        size: o
      }), !n && "pt-2", "scrollbar-macos"),
      children: f(ws, {
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
const Am = Me(
  "F0TableOfContentPopover",
  Ff
), Hf = ({ benefits: n }) => f("div", {
  className: "flex flex-col gap-2",
  children: n.map((e, t) => f(jf, {
    text: e
  }, t))
}), jf = ({ text: n }) => M("div", {
  className: "flex flex-row items-start gap-2",
  children: [f(zr, {
    icon: _o,
    size: "md",
    className: "text-f1-icon-positive"
  }), f("span", {
    children: n
  })]
}), Fa = Ee(({ title: n, image: e, benefits: t, actions: r, withShadow: i = !0, module: s, moduleName: a, tag: o, promoTag: l }, c) => M("div", {
  ref: c,
  className: X("bg-white flex flex-row rounded-xl border border-f1-border-secondary", i && "shadow-md"),
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
          children: [s && f(ls, {
            module: s
          }), a && f("p", {
            className: "text-base font-medium text-f1-foreground",
            children: a
          })]
        }), (o || l) && M("div", {
          className: "flex justify-start gap-2",
          children: [o && f(wo, {
            icon: o.icon,
            text: o.label
          }), l && f(Fl, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), f("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: n
        })]
      }), f(Hf, {
        benefits: t
      })]
    }), r && f("div", {
      className: "flex gap-3",
      children: r
    })]
  })]
}));
Fa.displayName = "ProductBlankslate";
function $f({ isOpen: n, onClose: e, title: t, children: r, module: i, portalContainer: s }) {
  const [a, o] = Z(n);
  return j(() => {
    o(n);
  }, [n]), f(Co, {
    open: a,
    onOpenChange: (c) => {
      o(c), c || e();
    },
    modal: !0,
    children: M(Eo, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [M("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [M(ko, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [i && f(ls, {
            module: i,
            size: "lg"
          }), t]
        }), f(Ir, {
          variant: "outline",
          icon: cs,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), M(ss, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [r, f(as, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Mm({ isOpen: n, onClose: e, title: t, image: r, benefits: i, errorMessage: s, successMessage: a, loadingState: o, nextSteps: l, closeLabel: c, primaryAction: d, modalTitle: u, modalModule: h, secondaryAction: m, portalContainer: g, tag: v, promoTag: w, showResponseDialog: S = !0 }) {
  const [N, _] = Z(n), [D, b] = Z(null), [x, y] = Z(!1), E = async () => {
    if (d?.onClick) {
      y(!0);
      try {
        await d.onClick(), _(!1), S && b("success");
      } catch {
        S && b("error");
      } finally {
        y(!1);
      }
    }
  }, L = () => {
    _(!1), e?.();
  }, T = x;
  return M(cn, {
    children: [f($f, {
      isOpen: N,
      onClose: L,
      title: u,
      module: h,
      portalContainer: g,
      children: f("div", {
        className: "pb-4 pl-4",
        children: f(Fa, {
          title: t,
          image: r,
          benefits: i,
          withShadow: !1,
          tag: v,
          promoTag: w,
          actions: M("div", {
            className: "flex gap-3",
            children: [d && f(Be, {
              variant: d.variant,
              label: T ? o.label : d.label,
              icon: d.icon || void 0,
              onClick: E,
              loading: d.loading,
              size: d.size
            }), m && f(Be, {
              onClick: m.onClick,
              label: m.label,
              variant: m.variant,
              size: m.size,
              icon: m.icon
            })]
          })
        })
      })
    }), D && S && f(_s, {
      open: !0,
      onClose: () => {
        L(), b(null);
      },
      success: D === "success",
      errorMessage: s,
      successMessage: a,
      nextSteps: l,
      closeLabel: c,
      portalContainer: g
    })]
  });
}
function Wf({ mediaUrl: n, title: e, description: t, onClose: r, dismissible: i, width: s, trackVisibility: a, actions: o, showConfirmation: l = !0 }) {
  const [c, d] = Z(!1), u = () => {
    d(!0), r && r();
  };
  j(() => {
    a && a(!c);
  }, [a, c]);
  const h = n?.includes(".mp4");
  return f(cn, {
    children: c ? null : M(So, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [M(Do, {
        children: [i && f("div", {
          className: "absolute right-2 top-2 z-10",
          children: f(Be, {
            variant: "ghost",
            icon: cs,
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
            children: [f(fi, {
              className: "text-lg font-medium",
              children: e
            }), f(fi, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), o && f(Ro, {
        className: "p-3",
        children: o.map((m) => m.type === "upsell" ? f(Cs, {
          label: m.label,
          onRequest: m.onClick,
          errorMessage: m.errorMessage,
          successMessage: m.successMessage,
          loadingState: m.loadingState,
          nextSteps: m.nextSteps,
          closeLabel: m.closeLabel,
          showConfirmation: l && m.showConfirmation,
          variant: m.variant
        }, m.label) : f(Be, {
          label: m.label,
          onClick: m.onClick,
          variant: m.variant
        }, m.label))
      })]
    })
  });
}
const Gf = Ee(function({ primaryAction: e, secondaryAction: t, ...r }, i) {
  const s = (l) => l.variant === "promote" ? f(Cs, {
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
  }) : f(Be, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), a = e?.variant !== "promote" ? e : void 0, o = t?.variant !== "promote" ? t : void 0;
  return M(Hl, {
    ref: i,
    ...r,
    primaryAction: a,
    secondaryAction: o,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
Gf.displayName = "UpsellingBanner";
function Im({ isOpen: n, setIsOpen: e, label: t, variant: r = "promote", size: i = "md", showIcon: s = !0, side: a = "right", align: o = "center", icon: l = No, mediaUrl: c, title: d, description: u, width: h = "300px", trackVisibility: m, actions: g, onClick: v, hideLabel: w = !1 }) {
  const [S, N] = Z(!1), [_, D] = Z(null), [b, x] = Z(null), y = (R) => {
    e(R), v && v();
  }, E = async (R) => {
    if (R.type === "upsell") {
      x(R);
      try {
        await R.onClick(), R.showConfirmation && (N(!0), D("success"));
      } catch {
        N(!0), D("error");
      }
    }
  }, L = () => {
    D(null), N(!1), x(null), e(!1);
  }, T = n && !S, C = g?.map((R) => R.type === "upsell" ? {
    ...R,
    onClick: () => E(R)
  } : R);
  return M(cn, {
    children: [M(ts, {
      open: T,
      onOpenChange: y,
      children: [f(ns, {
        asChild: !0,
        children: f(Be, {
          variant: r,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(n),
          hideLabel: w
        })
      }), f(is, {
        side: a,
        align: o,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: f(Wf, {
          mediaUrl: c,
          title: d,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: h,
          trackVisibility: m,
          actions: C,
          showConfirmation: !1
        })
      })]
    }), b?.type === "upsell" && b.showConfirmation && _ && f(_s, {
      open: !0,
      onClose: L,
      success: _ === "success",
      errorMessage: b.errorMessage,
      successMessage: b.successMessage,
      nextSteps: b.nextSteps,
      closeLabel: b.closeLabel,
      portalContainer: null
    })]
  });
}
const Vf = Xe(null), Zf = ({ children: n, fullScreen: e = !0 }) => {
  const t = F(null), [r, i] = Z(t.current);
  return Lo(() => {
    i(t.current);
  }, []), f(Vf.Provider, {
    value: {
      element: r
    },
    children: f("div", {
      ref: t,
      id: "f0-layout",
      className: X({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: n
    })
  });
}, Uf = ({ children: n }) => f(Wl, {
  reducedMotion: "user",
  children: n
}), zm = ({ children: n, layout: e, link: t, privacyModeInitiallyEnabled: r, image: i, i18n: s, l10n: a, isDev: o = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: c = !1 }) => f(Uf, {
  children: f(To, {
    isDev: o,
    showExperimentalWarnings: c,
    children: f(Oo, {
      ...a,
      children: f(Ao, {
        ...s,
        children: f(Mo, {
          ...t,
          children: f(Zf, {
            ...e,
            children: f(Io, {
              children: f(jl, {
                initiallyEnabled: r,
                children: f(zo, {
                  ...i,
                  children: f($l, {
                    handler: l,
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
}), Xi = (n) => `datacollection-${n}`, Lm = {
  get: async (n) => JSON.parse(
    localStorage.getItem(Xi(n)) ?? "{}"
  ),
  set: async (n, e) => {
    localStorage.setItem(Xi(n), JSON.stringify(e));
  }
};
export {
  Fm as A,
  _g as AiChatTranslationsProvider,
  sm as AreaChart,
  Hm as Await,
  am as BarChart,
  jm as Blockquote,
  om as CategoryBarChart,
  $m as ChatSpinner,
  hm as ComboChart,
  em as Dashboard,
  eg as DndProvider,
  Wm as Em,
  Gm as EmojiImage,
  Vm as F0ActionItem,
  Zm as F0AiChat,
  Um as F0AiChatProvider,
  qm as F0AiChatTextArea,
  Ym as F0AiCollapsibleMessage,
  Km as F0AiFullscreenChat,
  km as F0Alert,
  Cg as F0AuraVoiceAnimation,
  Xm as F0Avatar,
  kl as F0AvatarAlert,
  Jm as F0AvatarCompany,
  tg as F0AvatarDate,
  Qm as F0AvatarEmoji,
  ep as F0AvatarFile,
  ro as F0AvatarIcon,
  ng as F0AvatarList,
  ls as F0AvatarModule,
  tp as F0AvatarPerson,
  np as F0AvatarTeam,
  fm as F0BigNumber,
  mm as F0Box,
  Be as F0Button,
  rp as F0ButtonDropdown,
  ip as F0ButtonToggle,
  rg as F0Card,
  oo as F0Checkbox,
  Cm as F0ChipList,
  xs as F0DatePicker,
  sp as F0Dialog,
  ap as F0DialogContext,
  op as F0DialogProvider,
  lp as F0EventCatcherProvider,
  fh as F0FilterPickerContent,
  Tm as F0Form,
  Om as F0GridStack,
  Eg as F0HILActionConfirmation,
  Af as F0Heading,
  zr as F0Icon,
  so as F0Link,
  cp as F0MessageSources,
  dp as F0OneIcon,
  up as F0OneSwitch,
  zm as F0Provider,
  Nt as F0Select,
  Am as F0TableOfContentPopover,
  ig as F0TagAlert,
  El as F0TagBalance,
  sg as F0TagCompany,
  hp as F0TagDot,
  ag as F0TagList,
  og as F0TagPerson,
  wo as F0TagRaw,
  Fl as F0TagStatus,
  lg as F0TagTeam,
  Os as F0Text,
  fp as F0Thinking,
  mp as FullscreenChatContext,
  pp as GROUP_ID_SYMBOL,
  gp as H1,
  vp as H2,
  yp as H3,
  im as HomeLayout,
  bp as Hr,
  xp as Image,
  tm as Layout,
  wp as Li,
  lm as LineChart,
  _p as Ol,
  Cp as OneFilterPicker,
  Ep as P,
  cm as PieChart,
  kp as Pre,
  jl as PrivacyModeProvider,
  Fa as ProductBlankslate,
  cg as ProductCard,
  Mm as ProductModal,
  Wf as ProductWidget,
  um as ProgressBarChart,
  nm as StandardLayout,
  Sp as Strong,
  Dp as Table,
  dg as Tag,
  ug as TagCounter,
  Rp as Td,
  Np as Th,
  rm as TwoColumnLayout,
  Tp as Ul,
  _s as UpsellRequestResponseDialog,
  Gf as UpsellingBanner,
  Cs as UpsellingButton,
  Im as UpsellingPopover,
  dm as VerticalBarChart,
  kg as actionItemStatuses,
  Sg as aiTranslations,
  Qf as avatarVariants,
  Op as buildTranslations,
  ym as buttonDropdownSizes,
  vm as buttonDropdownVariants,
  gm as buttonSizes,
  bm as buttonToggleSizes,
  xm as buttonToggleVariants,
  pm as buttonVariants,
  hg as cardImageFits,
  fg as cardImageSizes,
  mg as createAtlaskitDriver,
  Ap as createDataSourceDefinition,
  lc as createPageLayoutBlock,
  cc as createPageLayoutBlockGroup,
  Lm as dataCollectionLocalStorageHandler,
  Em as datepickerSizes,
  Tg as defaultTranslations,
  Mp as downloadTableAsExcel,
  rr as evaluateRenderIf,
  Me as experimental,
  Sm as f0FormField,
  Ip as f0MarkdownRenderers,
  sn as generateAnchorId,
  zp as getAnimationVariants,
  Lp as getDataSourcePaginationType,
  Pp as getEmojiLabel,
  Jr as getF0Config,
  Rm as getSchemaDefinition,
  Dm as hasF0Config,
  gh as inferFieldType,
  Bp as isInfiniteScrollPagination,
  Fp as isPageBasedPagination,
  ie as isZodType,
  wm as linkVariants,
  Hp as modules,
  Dg as oneIconSizes,
  pg as predefinedPresets,
  gg as selectSizes,
  _m as tagDotColors,
  $e as unwrapZodSchema,
  jp as useAiChat,
  Rg as useAiChatTranslations,
  $p as useData,
  Wp as useDataSource,
  Gp as useDefaultCopilotActions,
  vg as useDndEvents,
  yg as useDraggable,
  bg as useDroppableList,
  Vp as useEmojiConfetti,
  Zp as useF0Dialog,
  Nm as useF0Form,
  Up as useGroups,
  qp as useMessageSourcesAction,
  Yp as useOrchestratorThinkingAction,
  xg as usePrivacyMode,
  Kp as useReducedMotion,
  Df as useSchemaDefinition,
  Xp as useSelectable,
  Jp as useXRay
};
