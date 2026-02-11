import { a6 as X, a7 as mt, aa as qi, ab as Nn, ac as Dn, ad as Io, ae as Po, af as Yi, ag as $e, u as Tn, ah as An, ai as Bo, aj as Fo, ak as Ho, al as jo, am as De, an as Te, ao as $o, ap as Wo, aq as Ki, ar as Go, as as _r, at as Xi, au as Ji, av as Qi, aw as es, ax as ts, ay as rs, az as Vo, aA as Zo, aB as Uo, aC as qo, aD as Yo, a8 as Ge, aE as ri, aF as Ko, aG as Xo, aH as Rt, aI as Jo, aJ as Qo, aK as ea, aL as ta, aM as ra, aN as na, aO as ia, aP as sa, aQ as oa, aR as aa, aS as la, aT as ca, aU as ns, aV as da, aW as ua, aX as ha, aY as fa, aZ as ma, a_ as is, a$ as pa, b0 as ga, b1 as va, b2 as ya, b3 as ba, b4 as xa, I as wa, b5 as _a, b6 as Ca, b7 as Ea, b8 as ka } from "./F0AiChat-VAb8J2qp.js";
import { A as Rm, bn as Nm, B as Dm, C as Tm, E as Am, bC as Om, h as Mm, F as Lm, a as zm, x as Im, i as Pm, b as Bm, b9 as Fm, ba as Hm, bb as jm, bc as $m, be as Wm, bf as Gm, bg as Vm, bh as Zm, bi as Um, bj as qm, bk as Ym, by as Km, s as Xm, t as Jm, v as Qm, w as ep, c as tp, bo as rp, n as np, o as ip, p as sp, H as op, k as ap, L as lp, O as cp, bm as dp, q as up, P as hp, S as fp, T as mp, l as pp, m as gp, U as vp, bz as yp, bt as bp, r as xp, j as wp, bw as _p, bs as Cp, bD as Ep, br as kp, bq as Sp, bd as Rp, d as Np, bp as Dp, bu as Tp, e as Ap, bE as Op, bl as Mp, bv as Lp, g as zp, f as Ip, bB as Pp, bx as Bp, bA as Fp } from "./F0AiChat-VAb8J2qp.js";
import { jsx as h, jsxs as I, Fragment as sr } from "react/jsx-runtime";
import G, { forwardRef as ye, useRef as $, useImperativeHandle as Sa, Children as Cr, createContext as Ze, useContext as ze, useState as Z, useMemo as F, useEffect as V, useCallback as te, useLayoutEffect as mn, createElement as ni, isValidElement as ss, Fragment as Ra, memo as Na, useReducer as Da, cloneElement as Ta, PureComponent as Aa } from "react";
import { createPortal as os, unstable_batchedUpdates as gr } from "react-dom";
import { L as as, C as Oa, i as ls, D as Ma, S as ii, a as La, f as sn, b as Wt, c as za, A as Ia, d as vr, e as cs, E as Pa, g as xr, h as Ba, j as Fa, k as Ha, l as Et, m as ds, u as ja, G as $a, n as Wa, o as si, p as Ga, q as us, r as Va, B as hs, X as fs, Y as pn, s as Za, t as ms, v as Ua, w as qa, x as Ya, y as Ka, z as Xa, F as Ja, H as Qa, I as el, J as oi, K as tl, M as Vt, N as on, O as rl, P as nl, Q as il, R as sl, T as ol, U as al, V as ll, W as cl, Z as dl, _ as ul, $ as hl, a0 as ai, a1 as fl, a2 as ml, a3 as ps, a4 as pl, a5 as gl, a6 as vl, a7 as On, a8 as li, a9 as yl, aa as bl, ab as xl, ac as wl, ad as _l, ae as Cl, af as El, ag as kl, ah as Sl, ai as Rl, aj as Nl, ak as Dl, al as gs, am as ci, an as vs, ao as Tl, ap as Al, aq as Ol, ar as Ml } from "./DataCollectionStorageProvider-6Tg6PaZu.js";
import { aJ as jp, as as $p, at as Wp, aw as Gp, aA as Vp, aB as Zp, aC as Up, aE as qp, aF as Yp, aG as Kp, aH as Xp, az as Jp, aD as Qp, au as eg, av as tg, aI as rg, ax as ng, ay as ig, aK as sg, aL as og, aM as ag, aN as lg } from "./DataCollectionStorageProvider-6Tg6PaZu.js";
import { A as dg, F as ug, c as hg, b as fg, a as mg, o as pg, u as gg } from "./F0HILActionConfirmation-BOl2o6w4.js";
import { defaultTranslations as yg } from "./i18n-provider-defaults.js";
import './f0.css';const Ll = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, zl = ye(function({ widgets: e, children: t }, n) {
  const i = $(null);
  Sa(n, () => i.current);
  const s = Cr.toArray(e).filter((o) => !!o).map((o, a) => h("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: o
  }, a));
  return h(as, {
    layout: "home",
    children: I("div", {
      ref: i,
      className: "@container",
      children: [I("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [h(Oa, {
          columns: Ll,
          showArrows: !1,
          children: s
        }), h("main", {
          children: t
        })]
      }), I("div", {
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
}), Il = mt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ys = G.forwardRef(({ children: r, variant: e, className: t, ...n }, i) => h(as, {
  layout: "standard",
  children: h("section", {
    ref: i,
    className: X("relative flex-1 overflow-auto", t),
    ...n,
    children: h("div", {
      className: X(Il({
        variant: e
      })),
      children: r
    })
  })
}));
ys.displayName = "StandardLayout";
const Pl = ye(function({ children: e, sideContent: t, mainColumnPosition: n = "left", sticky: i = !1 }, s) {
  return h("div", {
    ref: s,
    className: "h-full",
    children: I("div", {
      className: X("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", i && "md:sticky md:top-0 md:max-h-full"),
      children: [h("main", {
        className: X("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), h(Bl, {
        sticky: i,
        className: X("order-1", n === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), Bl = ({ children: r, className: e }) => h("aside", {
  className: X("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: r
}), bs = Ze(null);
function xs() {
  const r = ze(bs);
  if (!r)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return r;
}
function Fl(r) {
  const { content: e, ...t } = r;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function kt(r) {
  const e = Fl(r);
  return r.subGridOpts?.children && (e.subGridOpts = {
    ...r.subGridOpts,
    children: r.subGridOpts.children.map(
      (t) => kt(t)
    )
  }), e;
}
const Hl = ["noMove", "noResize", "locked", "w", "h", "x", "y"], ot = 200;
function jl(r) {
  const e = r.cloneNode(!0);
  return r.querySelectorAll("canvas").forEach((n) => {
    if (n.width > 0 && n.height > 0)
      try {
        const i = n.toDataURL("image/png"), s = e.querySelectorAll("canvas"), o = Array.from(r.querySelectorAll("canvas")).indexOf(n), a = s[o];
        if (a && a.parentElement) {
          const l = document.createElement("img");
          l.src = i, l.style.width = `${n.width}px`, l.style.height = `${n.height}px`, l.style.display = "block", n.className && (l.className = n.className), n.id && (l.id = n.id), a.parentElement.replaceChild(l, a);
        }
      } catch (i) {
        console.warn("Failed to convert canvas to image:", i);
      }
  }), e.innerHTML;
}
function $l({ children: r, options: e, onResizeStop: t, onChange: n, widgets: i }) {
  const [s, o] = Z(null), a = $(null), l = $(!1), d = F(() => ({
    ...e,
    children: (i || []).map((_) => kt(_))
  }), [e, i]), [c, u] = Z(() => {
    const _ = /* @__PURE__ */ new Map(), R = i || [], y = (b) => {
      b.id && b.content && _.set(b.id, b.content), b.subGridOpts?.children && b.subGridOpts.children.forEach((g) => {
        y(g);
      });
    };
    return R.forEach((b) => {
      y(b);
    }), _;
  }), f = $(c);
  V(() => {
    f.current = c;
  }, [c]);
  const [m, x] = Z(() => {
    const _ = /* @__PURE__ */ new Map(), R = i || [], y = (b) => {
      b.id && b._originalContent !== void 0 && _.set(b.id, b._originalContent), b.subGridOpts?.children && b.subGridOpts.children.forEach((g) => {
        y(g);
      });
    };
    return R.forEach((b) => {
      y(b);
    }), _;
  }), v = $(m);
  V(() => {
    v.current = m;
  }, [m]);
  const [w, S] = Z(() => {
    const _ = /* @__PURE__ */ new Map(), R = i || [], y = (b) => {
      if (b.id) {
        const g = kt(b);
        _.set(b.id, g);
      }
      b.subGridOpts?.children && b.subGridOpts.children.forEach((g) => {
        y(g);
      });
    };
    return R.forEach((b) => {
      y(b);
    }), _;
  });
  qi(() => {
    if (!s) return;
    const _ = s.save();
    if (!Array.isArray(_))
      return;
    const R = _.map((T) => T.id), y = i || [], b = y.map((T) => T.id), g = y.filter((T) => !R.includes(T.id));
    g.length > 0 && (g.forEach((T) => {
      T.content && f.current.set(T.id, T.content), T._originalContent !== void 0 && v.current.set(T.id, T._originalContent);
    }), g.forEach((T) => {
      const C = kt(T);
      s.addWidget(C);
    }), S((T) => {
      const C = new Map(T);
      return g.forEach((N) => {
        const A = kt(N);
        C.set(N.id, A);
      }), C;
    }), u((T) => {
      const C = new Map(T);
      return g.forEach((N) => {
        N.content && C.set(N.id, N.content);
      }), C;
    }), x((T) => {
      const C = new Map(T);
      return g.forEach((N) => {
        N._originalContent !== void 0 && C.set(N.id, N._originalContent);
      }), C;
    }));
    const E = _.filter((T) => !b.includes(T.id));
    if (E.length > 0) {
      const T = E.map((C) => C.id).filter(Boolean);
      T.forEach((C) => {
        setTimeout(() => {
          f.current.delete(C), v.current.delete(C);
        }, ot);
      }), E.forEach((C) => {
        const N = s.el.querySelector(`[gs-id="${C.id}"]`);
        N && setTimeout(() => {
          s.removeWidget(N, !0);
        }, ot);
      }), S((C) => {
        const N = new Map(C);
        return T.forEach((A) => {
          setTimeout(() => {
            N.delete(A);
          }, ot);
        }), N;
      }), u((C) => {
        const N = new Map(C);
        return T.forEach((A) => {
          if (N.get(A)) {
            const re = s.el.querySelector(`[gs-id="${A}"] .grid-stack-item-content`);
            let se = "";
            re && (se = jl(re)), N.set(A, h(Nn.div, {
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
                  duration: ot / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: ot / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: ot / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: se
              }
            }));
          }
          setTimeout(() => {
            N.delete(A);
          }, ot);
        }), N;
      }), x((C) => {
        const N = new Map(C);
        return T.forEach((A) => {
          setTimeout(() => {
            N.delete(A);
          }, ot);
        }), N;
      });
    }
    const M = y.filter((T) => R.includes(T.id));
    if (M.length > 0) {
      const T = [];
      M.forEach((C) => {
        const N = _.find((H) => H.id === C.id);
        if (!N)
          return;
        const A = Hl.filter((H) => N[H] !== C[H]);
        if (A.length > 0) {
          const H = {}, re = ["w", "h", "x", "y"], se = ["noMove", "noResize", "locked"], ee = A.filter((J) => re.includes(J)), ue = A.filter((J) => se.includes(J));
          if (ee.length > 0 && ue.length > 0 && ee.length + ue.length === A.length ? ue.forEach((J) => {
            const pe = C[J];
            pe !== void 0 && (H[J] = pe);
          }) : A.forEach((J) => {
            const pe = C[J];
            pe !== void 0 && (H[J] = pe);
          }), Object.keys(H).length > 0) {
            const J = s.el.querySelector(`[gs-id="${C.id}"]`);
            J && T.push({
              id: C.id,
              element: J,
              updateOptions: H
            });
          }
        }
      }), M.forEach((C) => {
        C.content && f.current.set(C.id, C.content), C._originalContent !== void 0 && v.current.set(C.id, C._originalContent);
      }), T.forEach(({ element: C, updateOptions: N }) => {
        try {
          s.update(C, N);
        } catch (A) {
          console.warn("Error updating widget:", A);
        }
      }), S((C) => {
        const N = new Map(C);
        return M.forEach((A) => {
          const H = kt(A);
          N.set(A.id, H);
        }), N;
      }), u((C) => {
        const N = new Map(C);
        return M.forEach((A) => {
          A.content && N.set(A.id, A.content);
        }), N;
      }), x((C) => {
        const N = new Map(C);
        return M.forEach((A) => {
          A._originalContent !== void 0 && N.set(A.id, A._originalContent);
        }), N;
      });
    }
    l.current || (l.current = !0);
  }, [i]), V(() => {
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
  const D = te(() => {
    if (!s)
      return;
    const _ = s.save();
    if (Array.isArray(_)) {
      const R = _.map((y) => {
        const b = y.id;
        if (!b) return null;
        const g = f.current.get(b), E = v.current.get(b), M = y;
        return {
          ...y,
          id: b,
          w: y.w ?? 1,
          h: y.h ?? 1,
          x: y.x ?? 0,
          y: y.y ?? 0,
          meta: M.meta,
          _originalContent: E,
          content: g ?? h("div", {
            children: "No content"
          })
        };
      }).filter((y) => y !== null);
      n?.(R);
    }
  }, [s]);
  return V(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const _ = (R, y) => {
      t?.(R, y);
    };
    try {
      s.on("resizestop", _), s.on("change added removed", D);
    } catch (R) {
      console.error("Error attaching GridStack event listeners:", R);
      return;
    }
    return () => {
      const R = a.current;
      if (R && R.el)
        try {
          R.off("resizestop"), R.off("change added removed");
        } catch (y) {
          console.warn("Error cleaning up GridStack event listeners:", y);
        }
    };
  }, [s, t, D]), V(() => {
    a.current = s;
  }, [s]), V(() => {
    s && s.el && s.el.parentElement && l.current && D();
  }, [s]), h(bs.Provider, {
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
    children: r
  });
}
const ws = Ze(null);
function Wl() {
  const r = ze(ws);
  if (!r)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return r;
}
const Gl = Ze(null);
function Vl() {
  const { _reactContentMap: r } = xs(), { getWidgetContainer: e } = Wl();
  return h(sr, {
    children: Array.from(r.value.entries()).map(([t, n]) => {
      const i = e(t);
      return i ? h(Gl.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: n && os(n, i)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function Zl(r, e, t, n, i) {
  const s = (...o) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + i + " and has been replaced with `" + n + "`. It will be **removed** in a future release"), e.apply(r, o));
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
    const n = e.x > t.x ? e.x : t.x, i = e.x + e.w < t.x + t.w ? e.x + e.w : t.x + t.w;
    if (i <= n)
      return 0;
    const s = e.y > t.y ? e.y : t.y, o = e.y + e.h < t.y + t.h ? e.y + e.h : t.y + t.h;
    return o <= s ? 0 : (i - n) * (o - s);
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
      const o = t * ((i.y ?? 1e4) - (s.y ?? 1e4));
      return o === 0 ? t * ((i.x ?? 1e4) - (s.x ?? 1e4)) : o;
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
        e[i] === null || e[i] === void 0 ? e[i] = n[i] : typeof n[i] == "object" && typeof e[i] == "object" && p.defaults(e[i], n[i]);
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
        n[0] === "_" || i === s ? delete e[n] : i && typeof i == "object" && s !== void 0 && (p.removeInternalAndSame(i, s), Object.keys(i).length || delete e[n]);
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : p.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, n) {
    const i = p.getScrollElement(e);
    if (!i)
      return;
    const s = e.getBoundingClientRect(), o = i.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(o.bottom, a), d = s.top - Math.max(o.top, 0), c = i.scrollTop;
    d < 0 && n < 0 ? e.offsetHeight > o.height ? i.scrollTop += n : i.scrollTop += Math.abs(d) > Math.abs(n) ? n : d : l > 0 && n > 0 && (e.offsetHeight > o.height ? i.scrollTop += n : i.scrollTop += l > n ? n : l), t.top += i.scrollTop - c;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, n) {
    const i = p.getScrollElement(t), s = i.clientHeight, o = i === p.getScrollElement() ? 0 : i.getBoundingClientRect().top, a = e.clientY - o, l = a < n, d = a > s - n;
    l ? i.scrollBy({ behavior: "smooth", top: a - n }) : d && i.scrollBy({ behavior: "smooth", top: n - (s - a) });
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
    for (const i in n)
      n.hasOwnProperty(i) && typeof n[i] == "object" && i.substring(0, 2) !== "__" && !t.find((s) => s === i) && (n[i] = p.cloneDeep(e[i]));
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
class Ke {
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
    let o = !1;
    const a = { nested: !0, pack: !1 };
    let l = 0;
    for (; n = n || this.collide(e, s, i.skip); ) {
      if (l++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let d;
      if (n.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(n, { ...n, y: e.y }, e) || !this.collide(n, { ...n, y: t.y - n.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: n.y + n.h, ...a };
        d = this._loading && p.samePos(e, c) ? !0 : this.moveNode(e, c), (n.locked || this._loading) && d ? p.copyPos(t, e) : !n.locked && d && i.pack && (this._packNodes(), t.y = n.y + n.h, p.copyPos(e, t)), o = o || d;
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
    const i = e._id, s = n?._id;
    return this.nodes.find((o) => o._id !== i && o._id !== s && p.isIntercepted(o, t));
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
    return this.nodes.filter((o) => o._id !== i && o._id !== s && p.isIntercepted(o, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, n) {
    if (!t.rect || !e._rect)
      return;
    const i = e._rect, s = { ...t.rect };
    s.y > i.y ? (s.h += s.y - i.y, s.y = i.y) : s.h += i.y - s.y, s.x > i.x ? (s.w += s.x - i.x, s.x = i.x) : s.w += i.x - s.x;
    let o, a = 0.5;
    for (let l of n) {
      if (l.locked || !l._rect)
        break;
      const d = l._rect;
      let c = Number.MAX_VALUE, u = Number.MAX_VALUE;
      i.y < d.y ? c = (s.y + s.h - d.y) / d.h : i.y + i.h > d.y + d.h && (c = (d.y + d.h - s.y) / d.h), i.x < d.x ? u = (s.x + s.w - d.x) / d.w : i.x + i.w > d.x + d.w && (u = (d.x + d.w - s.x) / d.w);
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
  cacheRects(e, t, n, i, s, o) {
    return this.nodes.forEach((a) => a._rect = {
      y: a.y * t + n,
      x: a.x * e + o,
      w: a.w * e - o - i,
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
    let i;
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (i = p.isTouching(e, t)))
      return n();
    if (i !== !1) {
      if (e.w === t.w && e.x === t.x && (i || (i = p.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return n();
      }
      if (i !== !1) {
        if (e.h === t.h && e.y === t.y && (i || (i = p.isTouching(e, t)))) {
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
    return this.nodes = [], s.forEach((o, a, l) => {
      let d;
      o.locked || (o.autoPosition = !0, e === "list" && a && (d = l[a - 1])), this.addNode(o, !1, d);
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
    e._id = e._id ?? Ke._idSeq++;
    const n = e.id;
    if (n) {
      let s = 1;
      for (; this.nodes.find((o) => o.id === e.id && o !== e); )
        e.id = n + "_" + s++;
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
  findEmptyPosition(e, t = this.nodes, n = this.column, i) {
    const s = i ? i.y * n + (i.x + i.w) : 0;
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
    const i = this.nodes.find((o) => o._id === e._id);
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
    const i = new Ke({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((o) => o._id === e._id ? (n = { ...o }, n) : { ...o })
    });
    if (!n)
      return !1;
    const s = i.moveNode(n, t) && i.getRow() <= Math.max(this.getRow(), this.maxRow);
    if (!s && !t.resizing && t.collide) {
      const o = t.collide.el.gridstackNode;
      if (this.swap(e, o))
        return this._notify(), !0;
    }
    return s ? (i.nodes.filter((o) => o._dirty).forEach((o) => {
      const a = this.nodes.find((l) => l._id === o._id);
      a && (p.copyPos(a, o), a._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new Ke({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((i) => ({ ...i }))
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
    const i = e.w !== t.w || e.h !== t.h, s = p.copyPos({}, e, !0);
    if (p.copyPos(s, t), this.nodeBoundFix(s, i), p.copyPos(t, s), !t.forceCollide && p.samePos(e, t))
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
    const i = this._layouts?.length || 0;
    let s;
    i && (n ? n !== this.column && (s = this._layouts[n]) : this.column !== i - 1 && (s = this._layouts[i - 1]));
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
        const i = n / this.column;
        e.forEach((s) => {
          if (!s._orig)
            return;
          const o = t.find((a) => a._id === s._id);
          o && (o.y >= 0 && s.y !== s._orig.y && (o.y += s.y - s._orig.y), s.x !== s._orig.x && (o.x = Math.round(s.x * i)), s.w !== s._orig.w && (o.w = Math.round(s.w * i)));
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
    let s = [], o = i ? this.nodes : p.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const a = this._layouts[t] || [], l = this._layouts.length - 1;
      !a.length && e !== l && this._layouts[l]?.length && (e = l, this._layouts[l].forEach((d) => {
        const c = o.find((u) => u._id === d._id);
        c && (!i && !d.autoPosition && (c.x = d.x ?? c.x, c.y = d.y ?? c.y), c.w = d.w ?? c.w, (d.x == null || d.y === void 0) && (c.autoPosition = !0));
      })), a.forEach((d) => {
        const c = o.findIndex((u) => u._id === d._id);
        if (c !== -1) {
          const u = o[c];
          if (i) {
            u.w = d.w;
            return;
          }
          (d.autoPosition || isNaN(d.x) || isNaN(d.y)) && this.findEmptyPosition(d, s), d.autoPosition || (u.x = d.x ?? u.x, u.y = d.y ?? u.y, u.w = d.w ?? u.w, s.push(u)), o.splice(c, 1);
        }
      });
    }
    if (i)
      this.compact(n, !1);
    else {
      if (o.length)
        if (typeof n == "function")
          n(t, e, s, o);
        else {
          const a = i || n === "none" ? 1 : t / e, l = n === "move" || n === "moveScale", d = n === "scale" || n === "moveScale";
          o.forEach((c) => {
            c.x = t === 1 ? 0 : l ? Math.round(c.x * a) : Math.min(c.x, t - 1), c.w = t === 1 || e === 1 ? 1 : d ? Math.round(c.w * a) || 1 : Math.min(c.w, t), s.push(c);
          }), o = [];
        }
      s = p.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((a) => {
        this.addNode(a, !1), delete a._orig;
      });
    }
    return this.nodes.forEach((a) => delete a._orig), this.batchUpdate(!1, !i), delete this._inColumnResize, this;
  }
  /**
   * call to cache the given layout internally to the given location so we can restore back when column changes size
   * @param nodes list of nodes
   * @param column corresponding column index to save it under
   * @param clear if true, will force other caches to be removed (default false)
   */
  cacheLayout(e, t, n = !1) {
    const i = [];
    return e.forEach((s, o) => {
      if (s._id === void 0) {
        const a = s.id ? this.nodes.find((l) => l.id === s.id) : void 0;
        s._id = a?._id ?? Ke._idSeq++;
      }
      i[o] = { x: s.x, y: s.y, w: s.w, _id: s._id };
    }), this._layouts = n ? [] : this._layouts || [], this._layouts[t] = i, this;
  }
  /**
   * call to cache the given node layout internally to the given location so we can restore back when column changes size
   * @param node single node to cache
   * @param column corresponding column index to save it under
   */
  cacheOneLayout(e, t) {
    e._id = e._id ?? Ke._idSeq++;
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
Ke._idSeq = 0;
const _e = {
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
class B {
}
const Le = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class We {
}
function Er(r, e) {
  r.touches.length > 1 || (r.cancelable && r.preventDefault(), p.simulateMouseEvent(r.changedTouches[0], e));
}
function _s(r, e) {
  r.cancelable && r.preventDefault(), p.simulateMouseEvent(r, e);
}
function kr(r) {
  We.touchHandled || (We.touchHandled = !0, Er(r, "mousedown"));
}
function Sr(r) {
  We.touchHandled && Er(r, "mousemove");
}
function Rr(r) {
  if (!We.touchHandled)
    return;
  We.pointerLeaveTimeout && (window.clearTimeout(We.pointerLeaveTimeout), delete We.pointerLeaveTimeout);
  const e = !!B.dragElement;
  Er(r, "mouseup"), e || Er(r, "click"), We.touchHandled = !1;
}
function Nr(r) {
  r.pointerType !== "mouse" && r.target.releasePointerCapture(r.pointerId);
}
function di(r) {
  B.dragElement && r.pointerType !== "mouse" && _s(r, "mouseenter");
}
function ui(r) {
  B.dragElement && r.pointerType !== "mouse" && (We.pointerLeaveTimeout = window.setTimeout(() => {
    delete We.pointerLeaveTimeout, _s(r, "mouseleave");
  }, 10));
}
class Gr {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Gr.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), Le && (this.el.addEventListener("touchstart", kr), this.el.addEventListener("pointerdown", Nr)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), Le && (this.el.removeEventListener("touchstart", kr), this.el.removeEventListener("pointerdown", Nr)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Le && (this.el.addEventListener("touchmove", Sr), this.el.addEventListener("touchend", Rr)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Le && (this.el.removeEventListener("touchmove", Sr), this.el.removeEventListener("touchend", Rr)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
Gr.prefix = "ui-resizable-";
class Mn {
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
class Xt extends Mn {
  // have to be public else complains for HTMLElementExtendOpt ?
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.rectScale = { x: 1, y: 1 }, this._ui = () => {
      const i = this.el.parentElement.getBoundingClientRect(), s = {
        width: this.originalRect.width,
        height: this.originalRect.height + this.scrolled,
        left: this.originalRect.left,
        top: this.originalRect.top - this.scrolled
      }, o = this.temporalRect || s;
      return {
        position: {
          left: (o.left - i.left) * this.rectScale.x,
          top: (o.top - i.top) * this.rectScale.y
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
    return Object.keys(e).forEach((i) => this.option[i] = e[i]), t && (this._removeHandlers(), this._setupHandlers()), n && this._setupAutoHide(this.option.autoHide), this;
  }
  /** @internal turns auto hide on/off */
  _setupAutoHide(e) {
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), B.overResizeElement === this && delete B.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    B.overResizeElement || B.dragElement || (B.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    B.overResizeElement === this && (delete B.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Gr(this.el, e, {
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
    this.elOriginStyleVal = Xt._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = p.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Xt._originStyleProp.forEach((e, t) => {
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
    }, s = e.clientX - n.clientX, o = this.sizeToContent ? 0 : e.clientY - n.clientY;
    let a, l;
    t.indexOf("e") > -1 ? i.width += s : t.indexOf("w") > -1 && (i.width -= s, i.left += s, a = !0), t.indexOf("s") > -1 ? i.height += o : t.indexOf("n") > -1 && (i.height -= o, i.top += o, l = !0);
    const d = this._constrainSize(i.width, i.height, a, l);
    return Math.round(i.width) !== Math.round(d.width) && (t.indexOf("w") > -1 && (i.left += i.width - d.width), i.width = d.width), Math.round(i.height) !== Math.round(d.height) && (t.indexOf("n") > -1 && (i.top += i.height - d.height), i.height = d.height), i;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, n, i) {
    const s = this.option, o = (n ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, a = s.minWidth / this.rectScale.x || e, l = (i ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, d = s.minHeight / this.rectScale.y || t, c = Math.min(o, Math.max(a, e)), u = Math.min(l, Math.max(d, t));
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
Xt._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const Ul = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class Jt extends Mn {
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
      e.addEventListener("mousedown", this._mouseDown), Le && (e.addEventListener("touchstart", kr), e.addEventListener("pointerdown", Nr));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), Le && (t.removeEventListener("touchstart", kr), t.removeEventListener("pointerdown", Nr));
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
    if (!B.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(Ul) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete B.dragElement, delete B.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Le && (e.currentTarget.addEventListener("touchmove", Sr), e.currentTarget.addEventListener("touchend", Rr)), e.preventDefault(), document.activeElement && document.activeElement.blur(), B.mouseHandled = !0), !0;
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
      if (this._dragFollow(e), B.pauseDrag) {
        const n = Number.isInteger(B.pauseDrag) ? B.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), n);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, B.dragElement = this;
      const n = this.el.gridstackNode?.grid;
      n ? B.dropElement = n.el.ddElement.ddDroppable : delete B.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = p.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = p.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Le && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", Sr, !0), e.currentTarget.removeEventListener("touchend", Rr, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), B.dropElement?.el === this.el.parentElement && delete B.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = p.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), B.dropElement && B.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete B.dragElement, delete B.dropElement, delete B.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, n = t?.grid || B.dropElement?.el?.gridstack;
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
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = p.cloneNode(this.el)), e.parentElement || p.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = Jt.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", Jt.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = n, 50);
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
    const o = t.getBoundingClientRect();
    return {
      left: o.left,
      top: o.top,
      offsetLeft: -e.clientX + o.left - i,
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
Jt.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class ql extends Mn {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), Le && (this.el.addEventListener("pointerenter", di), this.el.addEventListener("pointerleave", ui)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), Le && (this.el.removeEventListener("pointerenter", di), this.el.removeEventListener("pointerleave", ui)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!B.dragElement || !this._canDrop(B.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), B.dropElement && B.dropElement !== this && B.dropElement._mouseLeave(e, !0), B.dropElement = this;
    const t = p.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(B.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!B.dragElement || B.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = p.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(n, this._ui(B.dragElement)), this.triggerEvent("dropout", n), B.dropElement === this && (delete B.dropElement, !t)) {
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
    this.option.drop && this.option.drop(t, this._ui(B.dragElement)), this.triggerEvent("drop", t);
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
class Ln {
  static init(e) {
    return e.ddElement || (e.ddElement = new Ln(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new Jt(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Xt(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new ql(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Yl {
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
  draggable(e, t, n, i) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddDraggable && s.ddDraggable[t]();
      else if (t === "destroy")
        s.ddDraggable && s.cleanDraggable();
      else if (t === "option")
        s.setupDraggable({ [n]: i });
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
      n(s, B.dragElement ? B.dragElement.el : s.target, B.dragElement ? B.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", i = p.getElements(e);
    return i.length ? i.map((o) => o.ddElement || (n ? Ln.init(o) : null)).filter((o) => o) : [];
  }
}
const ge = new Yl();
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
    const n = P.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new P(n, p.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (P.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new P(i, p.cloneDeep(e))), n.push(i.gridstack);
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
    return (!e.classList.contains("grid-stack") || P.addRemoveCB) && (P.addRemoveCB ? n = P.addRemoveCB(e, t, !0, !0) : n = p.createDiv(["grid-stack", t.class], e)), P.init(t, n);
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
      this._placeholder = p.createDiv([this.opts.placeholderClass, _e.itemClass, this.opts.itemClass]);
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
    const i = t.columnOpts;
    if (i) {
      const d = i.breakpoints;
      !i.columnWidth && !d?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, d?.length > 1 && d.sort((c, u) => (u.w || 0) - (c.w || 0)));
    }
    const s = {
      ...p.cloneDeep(_e),
      column: p.toNumber(e.getAttribute("gs-column")) || _e.column,
      minRow: n || p.toNumber(e.getAttribute("gs-min-row")) || _e.minRow,
      maxRow: n || p.toNumber(e.getAttribute("gs-max-row")) || _e.maxRow,
      staticGrid: p.toBool(e.getAttribute("gs-static")) || _e.staticGrid,
      sizeToContent: p.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || _e.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || _e.removableOptions.accept,
        decline: _e.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = p.toBool(e.getAttribute("gs-animate"))), t = p.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const a = this.el.closest("." + _e.itemClass)?.gridstackNode;
    if (a && (a.subGrid = this, this.parentGridNode = a, this.el.classList.add("grid-stack-nested"), a.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== _e.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const d = t.cellHeight;
      delete t.cellHeight, this.cellHeight(d);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = Le), this._setStaticClass();
    const l = t.engineClass || P.engineClass || Ke;
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
    this.setAnimation(), t.subGridDynamic && !B.pauseDrag && (B.pauseDrag = !0), t.draggable?.pause !== void 0 && (B.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (n.grid = this, n.el ? t = n.el : P.addRemoveCB ? t = P.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
      return;
    if (n = t.gridstackNode, n && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === n._id))
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
    const t = p.createDiv(["grid-stack-item", this.opts.itemClass]), n = p.createDiv(["grid-stack-item-content"], t);
    return p.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([i]) => {
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, P.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : P.renderCB(n, e), t;
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
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, p.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), P.addRemoveCB ? c = P.addRemoveCB(this.el, u, !0, !1) : (c = p.createDiv(["grid-stack-item"]), c.appendChild(d), d = p.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const m = l ? t.column : s.w, x = s.h + n.h, v = s.el.style;
      v.transition = "none", this.update(s.el, { w: m, h: x }), setTimeout(() => v.transition = null);
    }
    const f = s.subGrid = P.addGrid(d, t);
    return n?._moving && (f._isTemp = !0), l && (f._autoColumn = !0), i && f.makeWidget(c, u), n && (n._moving ? window.setTimeout(() => p.simulateMouseEvent(n._event, "mouseenter", f.el), 0) : f.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), f;
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
  save(e = !0, t = !1, n = P.saveCB, i) {
    const s = this.engine.save(e, n, i);
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
      return delete o._alwaysShowResizeHandle, a !== void 0 ? o.alwaysShowResizeHandle = a : delete o.alwaysShowResizeHandle, p.removeInternalAndSame(o, _e), o.children = s, o;
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
    const n = this.getColumn();
    e.forEach((c) => {
      c.w = c.w || c.minW || 1, c.h = c.h || c.minH || 1;
    }), e = p.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((c) => {
      i = Math.max(i, (c.x || 0) + c.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = P.addRemoveCB;
    typeof t == "function" && (P.addRemoveCB = t);
    const o = [];
    this.batchUpdate();
    const a = !this.engine.nodes.length, l = a && this.opts.animate;
    l && this.setAnimation(!1), !a && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      p.find(e, u.id) || (P.addRemoveCB && P.addRemoveCB(this.el, u, !1, !1), o.push(u), this.removeWidget(u.el, !0, !1));
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
    }), delete this.engine._loading, this.engine.removedNodes = o, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? P.addRemoveCB = s : delete P.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
    let i;
    t ? i = { top: n.top + document.documentElement.scrollTop, left: n.left } : i = { top: this.el.offsetTop, left: this.el.offsetLeft };
    const s = e.left - i.left, o = e.top - i.top, a = n.width / this.getColumn(), l = n.height / parseInt(this.el.getAttribute("gs-current-row"));
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
    const n = P.getElement(e);
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
    return e ? (P.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((o) => i === o.el)), s && (t && P.addRemoveCB && P.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, n), t && i.parentElement && i.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && P.addRemoveCB && P.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
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
    return P.getElements(e).forEach((n) => {
      const i = n?.gridstackNode;
      if (!i)
        return;
      const s = { ...p.copyPos({}, i), ...p.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const o = ["x", "y", "w", "h"];
      let a;
      if (o.some((c) => s[c] !== void 0 && s[c] !== i[c]) && (a = {}, o.forEach((c) => {
        a[c] = s[c] !== void 0 ? s[c] : i[c], delete s[c];
      })), !a && (s.minW || s.minH || s.maxW || s.maxH) && (a = {}), s.content !== void 0) {
        const c = n.querySelector(".grid-stack-item-content");
        c && c.textContent !== s.content && (i.content = s.content, P.renderCB(c, s), i.subGrid?.el && (c.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, d = !1;
      for (const c in s)
        c[0] !== "_" && i[c] !== s[c] && (i[c] = s[c], l = !0, d = d || !this.opts.staticGrid && (c === "noResize" || c === "noMove" || c === "locked"));
      if (p.sanitizeMinMax(i), a) {
        const c = a.w !== void 0 && a.w !== i.w;
        this.moveNode(i, a), c && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(c, i), delete i._orig;
      }
      (a || l) && this._writeAttr(n, i), d && this.prepareDragDrop(i.el), P.updateCB && P.updateCB(i);
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
    let s = t.h ? t.h * i : e.clientHeight, o;
    if (t.resizeToContentParent && (o = e.querySelector(t.resizeToContentParent)), o || (o = e.querySelector(P.resizeToContentParent)), !o)
      return;
    const a = e.clientHeight - o.clientHeight, l = t.h ? t.h * i - a : o.clientHeight;
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
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${P.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
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
    return P.getElements(e).forEach((n) => {
      const i = n.gridstackNode;
      if (!p.canBeRotated(i))
        return;
      const s = { w: i.h, h: i.w, minH: i.minW, minW: i.minH, maxH: i.maxW, maxW: i.maxH };
      if (t) {
        const a = t.left > 0 ? Math.floor(t.left / this.cellWidth()) : 0, l = t.top > 0 ? Math.floor(t.top / this.opts.cellHeight) : 0;
        s.x = i.x + a - (i.h - (l + 1)), s.y = i.y + l - a;
      }
      Object.keys(s).forEach((a) => {
        s[a] === void 0 && delete s[a];
      });
      const o = i._orig;
      this.update(n, s), i._orig = o;
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
      const s = p.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === i) {
        const o = Math.floor(s.h / n);
        t < o && (t = o);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * n + i), e && p.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, n) {
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(_e.itemClass, this.opts.itemClass);
    const i = p.shouldSizeToContent(n);
    return i ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), i && this.resizeToContentCheck(!1, n), p.lazyLoad(n) || this.prepareDragDrop(n.el), this;
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
    n.x = p.toNumber(e.getAttribute("gs-x")), n.y = p.toNumber(e.getAttribute("gs-y")), n.w = p.toNumber(e.getAttribute("gs-w")), n.h = p.toNumber(e.getAttribute("gs-h")), n.autoPosition = p.toBool(e.getAttribute("gs-auto-position")), n.noResize = p.toBool(e.getAttribute("gs-no-resize")), n.noMove = p.toBool(e.getAttribute("gs-no-move")), n.locked = p.toBool(e.getAttribute("gs-locked"));
    const i = e.getAttribute("gs-size-to-content");
    i && (i === "true" || i === "false" ? n.sizeToContent = p.toBool(i) : n.sizeToContent = parseInt(i, 10)), n.id = e.getAttribute("gs-id"), n.maxW = p.toNumber(e.getAttribute("gs-max-w")), n.minW = p.toNumber(e.getAttribute("gs-min-w")), n.maxH = p.toNumber(e.getAttribute("gs-max-h")), n.minH = p.toNumber(e.getAttribute("gs-min-h")), t && (n.w === 1 && e.removeAttribute("gs-w"), n.h === 1 && e.removeAttribute("gs-h"), n.maxW && e.removeAttribute("gs-max-w"), n.minW && e.removeAttribute("gs-min-w"), n.maxH && e.removeAttribute("gs-max-h"), n.minH && e.removeAttribute("gs-min-h"));
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
        this.batchUpdate(), n.forEach((i) => {
          p.shouldSizeToContent(i) && this.resizeToContentCBCheck(i.el);
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
    return P.getElement(e);
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
    return ge;
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
    t?.pause !== void 0 && (B.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? p.getElements(e, i) : e).forEach((o, a) => {
      ge.isDraggable(o) || ge.dragIn(o, t), n?.[a] && (o.gridstackNode = n[a]);
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
    return this.opts.staticGrid ? this : (P.getElements(e).forEach((n) => {
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
    return this.opts.staticGrid ? this : (P.getElements(e).forEach((n) => {
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && P._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return ge.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return ge.droppable(this.el, "destroy"), this;
    let e, t;
    const n = (i, s, o) => {
      o = o || s;
      const a = o.gridstackNode;
      if (!a)
        return;
      if (!a.grid?.el) {
        o.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const f = o.getBoundingClientRect();
        o.style.left = f.x + (this.dragTransform.xScale - 1) * (i.clientX - f.x) / this.dragTransform.xScale + "px", o.style.top = f.y + (this.dragTransform.yScale - 1) * (i.clientY - f.y) / this.dragTransform.yScale + "px", o.style.transformOrigin = "0px 0px";
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
            ge.off(s, "drag");
            return;
          }
          a._willFitPos && (p.copyPos(a, a._willFitPos), delete a._willFitPos);
        }
        this._onStartMoving(o, i, u, a, t, e);
      } else
        this._dragOrResize(o, i, u, a, t, e);
    };
    return ge.droppable(this.el, {
      accept: (i) => {
        const s = i.gridstackNode || this._readAttr(i, !1);
        if (s?.grid === this)
          return !0;
        if (!this.opts.acceptWidgets)
          return !1;
        let o = !0;
        if (typeof this.opts.acceptWidgets == "function")
          o = this.opts.acceptWidgets(i);
        else {
          const a = this.opts.acceptWidgets === !0 ? ".grid-stack-item" : this.opts.acceptWidgets;
          o = i.matches(a);
        }
        if (o && s && this.opts.maxRow) {
          const a = { w: s.w, h: s.h, minW: s.minW, minH: s.minH };
          o = this.engine.willItFit(a);
        }
        return o;
      }
    }).on(this.el, "dropover", (i, s, o) => {
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
      a._temporaryRemoved = !0) : (a.w = l, a.h = d, a._temporaryRemoved = !0), P._itemRemoving(a.el, !1), ge.on(s, "drag", n), n(i, s, o), !1;
    }).on(this.el, "dropout", (i, s, o) => {
      const a = o?.gridstackNode || s.gridstackNode;
      return a && (!a.grid || a.grid === this) && (this._leave(s, o), this._isTemp && this.removeAsSubGrid(a)), !1;
    }).on(this.el, "drop", (i, s, o) => {
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
      if (!a || (l && (this.engine.cleanupNode(a), a.grid = this), delete a.grid?._isTemp, ge.off(s, "drag"), o !== s ? (o.remove(), s = o) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = a.subGrid?.el?.gridstack;
      return p.copyPos(a, this._readAttr(this.placeholder)), p.removePositioningStyles(s), d && (a.content || a.subGridOpts || P.addRemoveCB) ? (delete a.el, s = this.addWidget(a)) : (this._prepareElement(s, !0, a), this.el.appendChild(s), this.resizeToContentCheck(!1, a), u && (u.parentGridNode = a), this._updateContainerHeight()), this.engine.addedNodes.push(a), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, c && c.grid ? c : void 0, a), !1;
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
    return e ? (!this.opts.staticGrid && !ge.isDroppable(e) && ge.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => P._itemRemoving(n, !0)).on(e, "dropout", (t, n) => P._itemRemoving(n, !1)), this) : this;
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
    const i = n.noMove || this.opts.disableDrag, s = n.noResize || this.opts.disableResize, o = this.opts.staticGrid || i && s;
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
      ge.draggable(e, {
        start: d,
        stop: u,
        drag: c
      }).resizable(e, {
        start: d,
        stop: u,
        resize: c
      }), n._initDD = !0;
    }
    return ge.draggable(e, i ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, n, i, s, o) {
    if (this.engine.cleanNodes().beginUpdate(i), this._writePosAttr(this.placeholder, i), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = i, i.grid?.el)
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
    if (i.el = this.placeholder, i._lastUiPosition = n.position, i._prevYPix = n.position.top, i._moving = t.type === "dragstart", i._resizing = t.type === "resizestart", delete i._lastTried, t.type === "dropover" && i._temporaryRemoved && (this.engine.addNode(i), i._moving = !0), this.engine.cacheRects(s, o, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const a = this.getColumn() - i.x, l = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - i.y;
      ge.resizable(e, "option", "minWidth", s * Math.min(i.minW || 1, a)).resizable(e, "option", "minHeight", o * Math.min(i.minH || 1, l)).resizable(e, "option", "maxWidth", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, a)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, i.x + i.w)).resizable(e, "option", "maxHeight", o * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", o * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, i.y + i.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, n, i, s, o) {
    const a = { ...i._orig };
    let l, d = this.opts.marginLeft, c = this.opts.marginRight, u = this.opts.marginTop, f = this.opts.marginBottom;
    const m = Math.round(o * 0.1), x = Math.round(s * 0.1);
    if (d = Math.min(d, x), c = Math.min(c, x), u = Math.min(u, m), f = Math.min(f, m), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const w = n.position.top - i._prevYPix;
      i._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && p.updateScrollPosition(e, n.position, w);
      const S = n.position.left + (n.position.left > i._lastUiPosition.left ? -c : d), D = n.position.top + (n.position.top > i._lastUiPosition.top ? -f : u);
      a.x = Math.round(S / s), a.y = Math.round(D / o);
      const _ = this._extraDragRow;
      if (this.engine.collide(i, a)) {
        const R = this.getRow();
        let y = Math.max(0, a.y + i.h - R);
        this.opts.maxRow && R + y > this.opts.maxRow && (y = Math.max(0, this.opts.maxRow - R)), this._extraDragRow = y;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== _ && this._updateContainerHeight(), i.x === a.x && i.y === a.y)
        return;
    } else if (t.type === "resize") {
      if (a.x < 0 || (p.updateScrollResize(t, e, o), a.w = Math.round((n.size.width - d) / s), a.h = Math.round((n.size.height - u) / o), i.w === a.w && i.h === a.h) || i._lastTried && i._lastTried.w === a.w && i._lastTried.h === a.h)
        return;
      const w = n.position.left + d, S = n.position.top + u;
      a.x = Math.round(w / s), a.y = Math.round(S / o), l = !0;
    }
    i._event = t, i._lastTried = a;
    const v = {
      x: n.position.left + d,
      y: n.position.top + u,
      w: (n.size ? n.size.width : i.w * s) - d - c,
      h: (n.size ? n.size.height : i.h * o) - u - f
    };
    if (this.engine.moveNodeCheck(i, { ...a, cellWidth: s, cellHeight: o, rect: v, resizing: l })) {
      i._lastUiPosition = n.position, this.engine.cacheRects(s, o, u, c, f, d), delete i._skipDown, l && i.subGrid && i.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
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
    if (!n || (t.style.transform = t.style.transformOrigin = null, ge.off(e, "drag"), n._temporaryRemoved))
      return;
    n._temporaryRemoved = !0, this.engine.removeNode(n), n.el = n._isExternal && t ? t : e;
    const i = n._sidebarOrig;
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = i, this.opts.removable === !0 && P._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return Zl(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
P.renderCB = (r, e) => {
  r && e?.content && (r.textContent = e.content);
};
P.resizeToContentParent = ".grid-stack-item-content";
P.Utils = p;
P.Engine = Ke;
P.GDRev = "12.3.2";
const yr = /* @__PURE__ */ new WeakMap();
function Kl({ children: r }) {
  const { _gridStack: { value: e, set: t }, options: n } = xs(), i = $(/* @__PURE__ */ new Map()), s = $(null), o = $(n), a = te((c, u) => {
    if (u.id && u.grid) {
      let f = yr.get(u.grid);
      f || (f = /* @__PURE__ */ new Map(), yr.set(u.grid, f)), f.set(u.id, c), i.current.set(u.id, c);
    }
  }, []), l = te(() => {
    if (s.current) {
      P.renderCB = a;
      const c = P.init(o.current, s.current);
      return c && o.current.handle && c.opts && (c.opts.handle = o.current.handle), c;
    }
    return null;
  }, [a]), d = (c, u) => {
    const { children: f, ...m } = c, { children: x, ...v } = u;
    return ls(m, v);
  };
  return mn(() => {
    if (!d(n, o.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), yr.delete(e), o.current = n, t(null);
      } catch (c) {
        console.error("Error destroying gridstack", c);
      }
    else e && (o.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), mn(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, l, t]), h(ws.Provider, {
    value: F(() => ({
      getWidgetContainer: (c) => {
        if (e) {
          const u = yr.get(e);
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
const zn = ({ options: r, widgets: e, onChange: t, className: n }) => {
  const i = F(() => JSON.stringify(e.map((l) => ({
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
  }))), [e]), s = F(() => ({
    ...r,
    class: n
  }), [r, i, n]), o = (l, d, c) => {
    let u = c[0], f = 1 / 0;
    for (const m of c) {
      const x = m.w - l, v = m.h - d, w = x * x + v * v;
      w < f && (f = w, u = m);
    }
    return u;
  };
  return h($l, {
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
    children: h(Kl, {
      children: h(Vl, {})
    })
  });
};
zn.displayName = "F0GridStack";
const Xl = (r, e, t) => h("div", {
  children: r
}), Vr = ({ widgets: r = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: n = Xl, main: i = !1, deps: s }) => {
  const o = te((y, b, g) => h(Nn.div, {
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
  }), [n]), a = F(() => ({
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
      return y.deps.forEach((E) => {
        typeof E == "string" && b[E] !== void 0 && (g[E] = b[E]);
      }), y.content(g);
    }
    return typeof y.content == "function" ? null : y.content;
  }, d = (y, b, g) => y.map((E) => {
    const M = l(E, g), T = {
      id: E.id,
      h: E.h ?? 1,
      w: E.w ?? 1,
      allowedSizes: E.availableSizes,
      noMove: !b,
      noResize: !b,
      locked: E.locked,
      meta: E.meta,
      _originalContent: M,
      content: o(M, E.meta, b)
    };
    return E.x !== void 0 && (T.x = E.x), E.y !== void 0 && (T.y = E.y), T;
  }), [c, u] = Z(d(r, e)), f = $(e), m = $(r), x = $(!1), v = $(/* @__PURE__ */ new Map()), w = $(r);
  w.current = r;
  const S = $(s), D = F(() => {
    const y = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || r.forEach((b) => {
      if (b.deps && b.deps.length > 0) {
        const g = b.deps.map((E) => typeof E == "string" && s[E] !== void 0 ? s[E] : E).filter((E) => E !== null);
        y.set(b.id, g);
      }
    }), y;
  }, [r, s]), _ = te((y) => {
    u(y), x.current || t(y.map((b) => {
      const g = w.current.find((E) => E.id === b.id);
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
    })), x.current = !1;
  }, [t]), R = (y, b) => !y && !b ? !1 : !y || !b || y.length !== b.length ? !0 : y.some((g, E) => g !== b[E]);
  return V(() => {
    const y = f.current !== e, b = m.current !== r, g = S.current !== s && (S.current === void 0 || s === void 0 || Object.keys(S.current).length !== Object.keys(s).length || Object.keys(s).some((C) => S.current?.[C] !== s[C])), E = /* @__PURE__ */ new Map();
    r.forEach((C) => {
      if (C.deps && C.deps.length > 0) {
        const N = v.current.get(C.id), A = D.get(C.id);
        E.set(C.id, R(N, A)), A ? v.current.set(C.id, A) : v.current.delete(C.id);
      }
    });
    const M = new Set(r.map((C) => C.id));
    v.current.forEach((C, N) => {
      M.has(N) || v.current.delete(N);
    });
    const T = Array.from(E.values()).some((C) => C) || g;
    y && !b && !T ? (x.current = !0, u((C) => C.map((N) => {
      const A = r.find((re) => re.id === N.id);
      if (!A)
        return N;
      const H = l(A, s);
      return {
        ...N,
        noMove: !e,
        noResize: !e,
        locked: A.locked,
        meta: A.meta,
        _originalContent: H,
        content: o(H, A.meta, e)
      };
    }))) : (b || T) && u((C) => {
      const N = new Map(C.map((A) => [A.id, A]));
      return r.map((A) => {
        const H = N.get(A.id), re = E.get(A.id) ?? !1;
        let se;
        re || !H ? se = l(A, s) : se = H._originalContent ?? l(A, s);
        const ee = {
          id: A.id,
          h: H?.h ?? A.h ?? 1,
          w: H?.w ?? A.w ?? 1,
          allowedSizes: A.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: A.locked,
          meta: A.meta,
          _originalContent: se,
          content: o(se, A.meta, e)
        }, ue = H?.x ?? A.x, J = H?.y ?? A.y;
        return ue !== void 0 && (ee.x = ue), J !== void 0 && (ee.y = J), ee;
      });
    }), f.current = e, m.current = r, S.current = s;
  }, [r, e, o, D, s]), h(zn, {
    className: X(i && "h-full flex-1 overflow-auto"),
    options: a,
    onChange: _,
    widgets: c
  });
};
Vr.displayName = "GroupGrid";
Vr.__isPageLayoutGroup = !0;
const Jl = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutBlock = !0, t;
}, Ql = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutGroup = !0, t;
}, ec = (r, e) => h("svg", {
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
}), Cs = ye(ec), tc = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], Es = ye((r, e) => {
  const t = tc.reduce((n, i) => {
    const { [i]: s, ...o } = n;
    return o;
  }, r);
  return h(Dn, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: r.icon == Cs
  });
});
Es.displayName = "AIButton";
const an = mt({
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
}), rc = {
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
}, In = ye(({ content: r, variant: e, align: t, className: n, as: i, ellipsis: s, noEllipsisTooltip: o, markdown: a, ...l }, d) => {
  const c = i ?? rc[e ?? "body"];
  if (s !== void 0)
    return h(Io, {
      ref: d,
      lines: typeof s == "number" ? s : 1,
      noTooltip: o,
      tag: c,
      className: X(an({
        variant: e,
        align: t
      }), n),
      markdown: a,
      ...l,
      children: r
    });
  if (a) {
    const u = Po(r);
    return ni(c, {
      ...l,
      className: X(an({
        variant: e,
        align: t
      }), n),
      ref: d,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return ni(c, {
    ...l,
    className: X(an({
      variant: e,
      align: t
    }), n),
    ref: d
  }, r);
});
In.displayName = "Text";
const ks = ye((r, e) => h(In, {
  ref: e,
  markdown: r.markdown ?? !0,
  ...r
}));
ks.displayName = "F0Text";
const $f = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Ss = ({ title: r, draggable: e = !1, onDragStart: t, onDragEnd: n, isDragging: i = !1, AIButton: s, actions: o, children: a, selected: l = !1 }) => {
  const [d, c] = Z(!1), [u, f] = Z(!1), m = Tn(), x = (w) => {
    c(w);
  }, v = u || d;
  return V(() => {
    if (!i || !n) return;
    const w = () => {
      n();
    };
    return document.addEventListener("mouseup", w), () => {
      document.removeEventListener("mouseup", w);
    };
  }, [i, n]), I("div", {
    className: X("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && d ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => f(!0),
    onMouseLeave: () => f(!1),
    children: [I("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [I("div", {
        className: X("flex min-w-0 flex-1 items-center", !e && "pl-4", !o && !s && "pr-4"),
        children: [e && h("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: h(An, {
            icon: Bo,
            size: "xs"
          })
        }), h("div", {
          className: X("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: h(ks, {
            variant: "label",
            content: r,
            ellipsis: !0
          })
        })]
      }), h(Fo, {
        children: (s || o) && v && I(Nn.div, {
          className: X("flex shrink-0 items-center gap-0.5 pr-2", !o && "pr-4"),
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
            children: h(Es, {
              size: "sm",
              label: m.ai.ask,
              onClick: s,
              icon: Cs
            })
          }), o && h(Ho, {
            items: o,
            open: d,
            onOpenChange: x,
            align: "end",
            children: h(Dn, {
              icon: jo,
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
}, nc = () => I("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [h("div", {
    className: "flex h-12 w-full items-center px-4",
    children: h($e, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), I("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [h($e, {
      className: "h-1/2 w-full rounded-sm"
    }), h($e, {
      className: "h-1/3 w-full rounded-sm"
    }), h($e, {
      className: "h-1/5 w-full rounded-sm"
    }), h($e, {
      className: "h-1/3 w-full rounded-sm"
    }), h($e, {
      className: "h-full w-full rounded-sm"
    }), h($e, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
Ss.displayName = "F0Widget";
const ic = Yi(Ss, nc), sc = ({ children: r, title: e, draggable: t = !1, actions: n, aiButton: i }) => h(ic, {
  title: e,
  draggable: t,
  actions: n,
  AIButton: i,
  children: r
}), Rs = ({ widgets: r, editMode: e = !1, onChange: t = () => {
}, deps: n, ...i }) => h(Vr, {
  widgets: r,
  editMode: e,
  onChange: t,
  deps: n,
  ...i,
  WidgetWrapper: (s, o, a) => h(sc, {
    title: o?.title ?? "",
    draggable: a,
    actions: o?.actions,
    aiButton: o?.aiButton,
    children: s
  })
});
Rs.displayName = "Dashboard";
const oc = Ql("Dashboard", Rs), Wf = De("Dashboard", oc), ac = mt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), lc = (r) => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), cc = (r) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(r) ? r.every(e) ? [{
    items: r
  }] : r : [r];
}, Zr = ye(({ children: r, variant: e = "default", className: t, draggable: n = !1, onDragStart: i, onDragEnd: s, onDrop: o, dragId: a, primaryAction: l, ...d }, c) => {
  const u = F(() => cc(d.actions || []), [d.actions]), f = F(() => u.flatMap((x) => x.items), [u]), m = F(() => f.length > 0 || !!l, [f, l]);
  return I("div", {
    ref: c,
    className: X(ac({
      variant: e
    }), "relative", t),
    draggable: n,
    onDragStart: i,
    onDragEnd: s,
    onDrop: o,
    "data-drag-id": a,
    ...d,
    children: [m && I("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, f.length > 0 && h(Ma, {
        items: lc(u)
      })]
    }), h("div", {
      children: r
    })]
  });
});
Zr.displayName = "Block";
Zr.__isPageLayoutBlock = !0;
const dc = ({ title: r = "", description: e, titleLevel: t = "h2", children: n, className: i, ...s }) => {
  if (!r) return null;
  const o = t;
  return I(Zr, {
    ...s,
    className: X("space-y-4", i),
    children: [I("div", {
      className: "space-y-2",
      children: [h(o, {
        className: X("font-semibold text-f1-foreground", {
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
}, uc = Jl("BlockContent", dc), hc = (r) => !ss(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutBlock" in r.type, fc = (r) => !ss(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutGroup" in r.type, Ns = (r, e, t) => {
  const n = Cr.toArray(e);
  for (const i of n)
    t.includes("block") && hc(i) || t.includes("group") && fc(i) || console.warn(
      `${r}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, Pn = ye(({ children: r, onSort: e, ...t }, n) => {
  Ns("GroupLinear", r, ["block"]);
  const [i, s] = Z(Cr.toArray(r));
  return V(() => {
    s(Cr.toArray(r));
  }, [r]), V(() => {
    e?.(i);
  }, [i, e]), h("div", {
    ref: n,
    ...t,
    children: i.map((o, a) => h(Ra, {
      children: o
    }, a))
  });
});
Pn.displayName = "GroupLinear";
Pn.__isPageLayoutGroup = !0;
function mc() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return F(
    () => (n) => {
      e.forEach((i) => i(n));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const Ur = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function zt(r) {
  const e = Object.prototype.toString.call(r);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Bn(r) {
  return "nodeType" in r;
}
function ve(r) {
  var e, t;
  return r ? zt(r) ? r : Bn(r) && (e = (t = r.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Fn(r) {
  const {
    Document: e
  } = ve(r);
  return r instanceof e;
}
function or(r) {
  return zt(r) ? !1 : r instanceof ve(r).HTMLElement;
}
function Ds(r) {
  return r instanceof ve(r).SVGElement;
}
function It(r) {
  return r ? zt(r) ? r.document : Bn(r) ? Fn(r) ? r : or(r) || Ds(r) ? r.ownerDocument : document : document : document;
}
const Ie = Ur ? mn : V;
function qr(r) {
  const e = $(r);
  return Ie(() => {
    e.current = r;
  }), te(function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function pc() {
  const r = $(null), e = te((n, i) => {
    r.current = setInterval(n, i);
  }, []), t = te(() => {
    r.current !== null && (clearInterval(r.current), r.current = null);
  }, []);
  return [e, t];
}
function Qt(r, e) {
  e === void 0 && (e = [r]);
  const t = $(r);
  return Ie(() => {
    t.current !== r && (t.current = r);
  }, e), t;
}
function ar(r, e) {
  const t = $();
  return F(
    () => {
      const n = r(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function Dr(r) {
  const e = qr(r), t = $(null), n = te(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function Tr(r) {
  const e = $();
  return V(() => {
    e.current = r;
  }, [r]), e.current;
}
let ln = {};
function lr(r, e) {
  return F(() => {
    if (e)
      return e;
    const t = ln[r] == null ? 0 : ln[r] + 1;
    return ln[r] = t, r + "-" + t;
  }, [r, e]);
}
function Ts(r) {
  return function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      n[i - 1] = arguments[i];
    return n.reduce((s, o) => {
      const a = Object.entries(o);
      for (const [l, d] of a) {
        const c = s[l];
        c != null && (s[l] = c + r * d);
      }
      return s;
    }, {
      ...e
    });
  };
}
const Nt = /* @__PURE__ */ Ts(1), er = /* @__PURE__ */ Ts(-1);
function gc(r) {
  return "clientX" in r && "clientY" in r;
}
function Yr(r) {
  if (!r)
    return !1;
  const {
    KeyboardEvent: e
  } = ve(r.target);
  return e && r instanceof e;
}
function vc(r) {
  if (!r)
    return !1;
  const {
    TouchEvent: e
  } = ve(r.target);
  return e && r instanceof e;
}
function Ar(r) {
  if (vc(r)) {
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
  return gc(r) ? {
    x: r.clientX,
    y: r.clientY
  } : null;
}
const ut = /* @__PURE__ */ Object.freeze({
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
        return [ut.Translate.toString(r), ut.Scale.toString(r)].join(" ");
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
}), hi = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function yc(r) {
  return r.matches(hi) ? r : r.querySelector(hi);
}
const bc = {
  display: "none"
};
function xc(r) {
  let {
    id: e,
    value: t
  } = r;
  return G.createElement("div", {
    id: e,
    style: bc
  }, t);
}
function wc(r) {
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
  return G.createElement("div", {
    id: e,
    style: i,
    role: "status",
    "aria-live": n,
    "aria-atomic": !0
  }, t);
}
function _c() {
  const [r, e] = Z("");
  return {
    announce: te((n) => {
      n != null && e(n);
    }, []),
    announcement: r
  };
}
const As = /* @__PURE__ */ Ze(null);
function Cc(r) {
  const e = ze(As);
  V(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(r);
  }, [r, e]);
}
function Ec() {
  const [r] = Z(() => /* @__PURE__ */ new Set()), e = te((n) => (r.add(n), () => r.delete(n)), [r]);
  return [te((n) => {
    let {
      type: i,
      event: s
    } = n;
    r.forEach((o) => {
      var a;
      return (a = o[i]) == null ? void 0 : a.call(o, s);
    });
  }, [r]), e];
}
const kc = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Sc = {
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
function Rc(r) {
  let {
    announcements: e = Sc,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = kc
  } = r;
  const {
    announce: s,
    announcement: o
  } = _c(), a = lr("DndLiveRegion"), [l, d] = Z(!1);
  if (V(() => {
    d(!0);
  }, []), Cc(F(() => ({
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
  const c = G.createElement(G.Fragment, null, G.createElement(xc, {
    id: n,
    value: i.draggable
  }), G.createElement(wc, {
    id: a,
    announcement: o
  }));
  return t ? os(c, t) : c;
}
var ae;
(function(r) {
  r.DragStart = "dragStart", r.DragMove = "dragMove", r.DragEnd = "dragEnd", r.DragCancel = "dragCancel", r.DragOver = "dragOver", r.RegisterDroppable = "registerDroppable", r.SetDroppableDisabled = "setDroppableDisabled", r.UnregisterDroppable = "unregisterDroppable";
})(ae || (ae = {}));
function Or() {
}
function fi(r, e) {
  return F(
    () => ({
      sensor: r,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, e]
  );
}
function Nc() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return F(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const Pe = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Dc(r, e) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function Tc(r, e) {
  const t = Ar(r);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function Ac(r, e) {
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
function Oc(r, e) {
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
function mi(r) {
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
function Os(r, e) {
  if (!r || r.length === 0)
    return null;
  const [t] = r;
  return t[e];
}
const Mc = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = mi(e), s = [];
  for (const o of n) {
    const {
      id: a
    } = o, l = t.get(a);
    if (l) {
      const d = mi(l), c = i.reduce((f, m, x) => f + Dc(d[x], m), 0), u = Number((c / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: o,
          value: u
        }
      });
    }
  }
  return s.sort(Ac);
};
function Lc(r, e) {
  const t = Math.max(e.top, r.top), n = Math.max(e.left, r.left), i = Math.min(e.left + e.width, r.left + r.width), s = Math.min(e.top + e.height, r.top + r.height), o = i - n, a = s - t;
  if (n < i && t < s) {
    const l = e.width * e.height, d = r.width * r.height, c = o * a, u = c / (l + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const zc = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = [];
  for (const s of n) {
    const {
      id: o
    } = s, a = t.get(o);
    if (a) {
      const l = Lc(a, e);
      l > 0 && i.push({
        id: o,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(Oc);
};
function Ic(r, e, t) {
  return {
    ...r,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Ms(r, e) {
  return r && e ? {
    x: r.left - e.left,
    y: r.top - e.top
  } : Pe;
}
function Pc(r) {
  return function(t) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      i[s - 1] = arguments[s];
    return i.reduce((o, a) => ({
      ...o,
      top: o.top + r * a.y,
      bottom: o.bottom + r * a.y,
      left: o.left + r * a.x,
      right: o.right + r * a.x
    }), {
      ...t
    });
  };
}
const Bc = /* @__PURE__ */ Pc(1);
function Ls(r) {
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
function Fc(r, e, t) {
  const n = Ls(e);
  if (!n)
    return r;
  const {
    scaleX: i,
    scaleY: s,
    x: o,
    y: a
  } = n, l = r.left - o - (1 - i) * parseFloat(t), d = r.top - a - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), c = i ? r.width / i : r.width, u = s ? r.height / s : r.height;
  return {
    width: c,
    height: u,
    top: d,
    right: l + c,
    bottom: d + u,
    left: l
  };
}
const Hc = {
  ignoreTransform: !1
};
function Pt(r, e) {
  e === void 0 && (e = Hc);
  let t = r.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: c
    } = ve(r).getComputedStyle(r);
    d && (t = Fc(t, d, c));
  }
  const {
    top: n,
    left: i,
    width: s,
    height: o,
    bottom: a,
    right: l
  } = t;
  return {
    top: n,
    left: i,
    width: s,
    height: o,
    bottom: a,
    right: l
  };
}
function pi(r) {
  return Pt(r, {
    ignoreTransform: !0
  });
}
function jc(r) {
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
function $c(r, e) {
  return e === void 0 && (e = ve(r).getComputedStyle(r)), e.position === "fixed";
}
function Wc(r, e) {
  e === void 0 && (e = ve(r).getComputedStyle(r));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function Kr(r, e) {
  const t = [];
  function n(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Fn(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!or(i) || Ds(i) || t.includes(i))
      return t;
    const s = ve(r).getComputedStyle(i);
    return i !== r && Wc(i, s) && t.push(i), $c(i, s) ? t : n(i.parentNode);
  }
  return r ? n(r) : t;
}
function zs(r) {
  const [e] = Kr(r, 1);
  return e ?? null;
}
function cn(r) {
  return !Ur || !r ? null : zt(r) ? r : Bn(r) ? Fn(r) || r === It(r).scrollingElement ? window : or(r) ? r : null : null;
}
function Is(r) {
  return zt(r) ? r.scrollX : r.scrollLeft;
}
function Ps(r) {
  return zt(r) ? r.scrollY : r.scrollTop;
}
function gn(r) {
  return {
    x: Is(r),
    y: Ps(r)
  };
}
var de;
(function(r) {
  r[r.Forward = 1] = "Forward", r[r.Backward = -1] = "Backward";
})(de || (de = {}));
function Bs(r) {
  return !Ur || !r ? !1 : r === document.scrollingElement;
}
function Fs(r) {
  const e = {
    x: 0,
    y: 0
  }, t = Bs(r) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: r.clientHeight,
    width: r.clientWidth
  }, n = {
    x: r.scrollWidth - t.width,
    y: r.scrollHeight - t.height
  }, i = r.scrollTop <= e.y, s = r.scrollLeft <= e.x, o = r.scrollTop >= n.y, a = r.scrollLeft >= n.x;
  return {
    isTop: i,
    isLeft: s,
    isBottom: o,
    isRight: a,
    maxScroll: n,
    minScroll: e
  };
}
const Gc = {
  x: 0.2,
  y: 0.2
};
function Vc(r, e, t, n, i) {
  let {
    top: s,
    left: o,
    right: a,
    bottom: l
  } = t;
  n === void 0 && (n = 10), i === void 0 && (i = Gc);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: f
  } = Fs(r), m = {
    x: 0,
    y: 0
  }, x = {
    x: 0,
    y: 0
  }, v = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !d && s <= e.top + v.height ? (m.y = de.Backward, x.y = n * Math.abs((e.top + v.height - s) / v.height)) : !c && l >= e.bottom - v.height && (m.y = de.Forward, x.y = n * Math.abs((e.bottom - v.height - l) / v.height)), !f && a >= e.right - v.width ? (m.x = de.Forward, x.x = n * Math.abs((e.right - v.width - a) / v.width)) : !u && o <= e.left + v.width && (m.x = de.Backward, x.x = n * Math.abs((e.left + v.width - o) / v.width)), {
    direction: m,
    speed: x
  };
}
function Zc(r) {
  if (r === document.scrollingElement) {
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
function Hs(r) {
  return r.reduce((e, t) => Nt(e, gn(t)), Pe);
}
function Uc(r) {
  return r.reduce((e, t) => e + Is(t), 0);
}
function qc(r) {
  return r.reduce((e, t) => e + Ps(t), 0);
}
function js(r, e) {
  if (e === void 0 && (e = Pt), !r)
    return;
  const {
    top: t,
    left: n,
    bottom: i,
    right: s
  } = e(r);
  zs(r) && (i <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && r.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Yc = [["x", ["left", "right"], Uc], ["y", ["top", "bottom"], qc]];
class Hn {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = Kr(t), i = Hs(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, o, a] of Yc)
      for (const l of o)
        Object.defineProperty(this, l, {
          get: () => {
            const d = a(n), c = i[s] - d;
            return this.rect[l] + c;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Zt {
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
function Kc(r) {
  const {
    EventTarget: e
  } = ve(r);
  return r instanceof e ? r : It(r);
}
function dn(r, e) {
  const t = Math.abs(r.x), n = Math.abs(r.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var Ne;
(function(r) {
  r.Click = "click", r.DragStart = "dragstart", r.Keydown = "keydown", r.ContextMenu = "contextmenu", r.Resize = "resize", r.SelectionChange = "selectionchange", r.VisibilityChange = "visibilitychange";
})(Ne || (Ne = {}));
function gi(r) {
  r.preventDefault();
}
function Xc(r) {
  r.stopPropagation();
}
var q;
(function(r) {
  r.Space = "Space", r.Down = "ArrowDown", r.Right = "ArrowRight", r.Left = "ArrowLeft", r.Up = "ArrowUp", r.Esc = "Escape", r.Enter = "Enter", r.Tab = "Tab";
})(q || (q = {}));
const $s = {
  start: [q.Space, q.Enter],
  cancel: [q.Esc],
  end: [q.Space, q.Enter, q.Tab]
}, Jc = (r, e) => {
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
class jn {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new Zt(It(t)), this.windowListeners = new Zt(ve(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ne.Resize, this.handleCancel), this.windowListeners.add(Ne.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ne.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && js(n), t(Pe);
  }
  handleKeyDown(e) {
    if (Yr(e)) {
      const {
        active: t,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: s = $s,
        coordinateGetter: o = Jc,
        scrollBehavior: a = "smooth"
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
      } : Pe;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const u = o(e, {
        active: t,
        context: n.current,
        currentCoordinates: c
      });
      if (u) {
        const f = er(u, c), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: x
        } = n.current;
        for (const v of x) {
          const w = e.code, {
            isTop: S,
            isRight: D,
            isLeft: _,
            isBottom: R,
            maxScroll: y,
            minScroll: b
          } = Fs(v), g = Zc(v), E = {
            x: Math.min(w === q.Right ? g.right - g.width / 2 : g.right, Math.max(w === q.Right ? g.left : g.left + g.width / 2, u.x)),
            y: Math.min(w === q.Down ? g.bottom - g.height / 2 : g.bottom, Math.max(w === q.Down ? g.top : g.top + g.height / 2, u.y))
          }, M = w === q.Right && !D || w === q.Left && !_, T = w === q.Down && !R || w === q.Up && !S;
          if (M && E.x !== u.x) {
            const C = v.scrollLeft + f.x, N = w === q.Right && C <= y.x || w === q.Left && C >= b.x;
            if (N && !f.y) {
              v.scrollTo({
                left: C,
                behavior: a
              });
              return;
            }
            N ? m.x = v.scrollLeft - C : m.x = w === q.Right ? v.scrollLeft - y.x : v.scrollLeft - b.x, m.x && v.scrollBy({
              left: -m.x,
              behavior: a
            });
            break;
          } else if (T && E.y !== u.y) {
            const C = v.scrollTop + f.y, N = w === q.Down && C <= y.y || w === q.Up && C >= b.y;
            if (N && !f.x) {
              v.scrollTo({
                top: C,
                behavior: a
              });
              return;
            }
            N ? m.y = v.scrollTop - C : m.y = w === q.Down ? v.scrollTop - y.y : v.scrollTop - b.y, m.y && v.scrollBy({
              top: -m.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(e, Nt(er(u, this.referenceCoordinates), m));
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
jn.activators = [{
  eventName: "onKeyDown",
  handler: (r, e, t) => {
    let {
      keyboardCodes: n = $s,
      onActivation: i
    } = e, {
      active: s
    } = t;
    const {
      code: o
    } = r.nativeEvent;
    if (n.start.includes(o)) {
      const a = s.activatorNode.current;
      return a && r.target !== a ? !1 : (r.preventDefault(), i?.({
        event: r.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function vi(r) {
  return !!(r && "distance" in r);
}
function yi(r) {
  return !!(r && "delay" in r);
}
class $n {
  constructor(e, t, n) {
    var i;
    n === void 0 && (n = Kc(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: o
    } = s;
    this.props = e, this.events = t, this.document = It(o), this.documentListeners = new Zt(this.document), this.listeners = new Zt(n), this.windowListeners = new Zt(ve(o)), this.initialCoordinates = (i = Ar(s)) != null ? i : Pe, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Ne.Resize, this.handleCancel), this.windowListeners.add(Ne.DragStart, gi), this.windowListeners.add(Ne.VisibilityChange, this.handleCancel), this.windowListeners.add(Ne.ContextMenu, gi), this.documentListeners.add(Ne.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (yi(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (vi(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(Ne.Click, Xc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ne.SelectionChange, this.removeTextSelection), t(e));
  }
  handleMove(e) {
    var t;
    const {
      activated: n,
      initialCoordinates: i,
      props: s
    } = this, {
      onMove: o,
      options: {
        activationConstraint: a
      }
    } = s;
    if (!i)
      return;
    const l = (t = Ar(e)) != null ? t : Pe, d = er(i, l);
    if (!n && a) {
      if (vi(a)) {
        if (a.tolerance != null && dn(d, a.tolerance))
          return this.handleCancel();
        if (dn(d, a.distance))
          return this.handleStart();
      }
      if (yi(a) && dn(d, a.tolerance))
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
    e.code === q.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Qc = {
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
class Wn extends $n {
  constructor(e) {
    const {
      event: t
    } = e, n = It(t.target);
    super(e, Qc, n);
  }
}
Wn.activators = [{
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
const ed = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var vn;
(function(r) {
  r[r.RightClick = 2] = "RightClick";
})(vn || (vn = {}));
class td extends $n {
  constructor(e) {
    super(e, ed, It(e.event.target));
  }
}
td.activators = [{
  eventName: "onMouseDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    return t.button === vn.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const un = {
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
class rd extends $n {
  constructor(e) {
    super(e, un);
  }
  static setup() {
    return window.addEventListener(un.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(un.move.name, e);
    };
    function e() {
    }
  }
}
rd.activators = [{
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
var Ut;
(function(r) {
  r[r.Pointer = 0] = "Pointer", r[r.DraggableRect = 1] = "DraggableRect";
})(Ut || (Ut = {}));
var Mr;
(function(r) {
  r[r.TreeOrder = 0] = "TreeOrder", r[r.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Mr || (Mr = {}));
function nd(r) {
  let {
    acceleration: e,
    activator: t = Ut.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: s,
    interval: o = 5,
    order: a = Mr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: f
  } = r;
  const m = sd({
    delta: u,
    disabled: !s
  }), [x, v] = pc(), w = $({
    x: 0,
    y: 0
  }), S = $({
    x: 0,
    y: 0
  }), D = F(() => {
    switch (t) {
      case Ut.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Ut.DraggableRect:
        return i;
    }
  }, [t, i, l]), _ = $(null), R = te(() => {
    const b = _.current;
    if (!b)
      return;
    const g = w.current.x * S.current.x, E = w.current.y * S.current.y;
    b.scrollBy(g, E);
  }, []), y = F(() => a === Mr.TreeOrder ? [...d].reverse() : d, [a, d]);
  V(
    () => {
      if (!s || !d.length || !D) {
        v();
        return;
      }
      for (const b of y) {
        if (n?.(b) === !1)
          continue;
        const g = d.indexOf(b), E = c[g];
        if (!E)
          continue;
        const {
          direction: M,
          speed: T
        } = Vc(b, E, D, e, f);
        for (const C of ["x", "y"])
          m[C][M[C]] || (T[C] = 0, M[C] = 0);
        if (T.x > 0 || T.y > 0) {
          v(), _.current = b, x(R, o), w.current = T, S.current = M;
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
      R,
      n,
      v,
      s,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(D),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      x,
      d,
      y,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f)
    ]
  );
}
const id = {
  x: {
    [de.Backward]: !1,
    [de.Forward]: !1
  },
  y: {
    [de.Backward]: !1,
    [de.Forward]: !1
  }
};
function sd(r) {
  let {
    delta: e,
    disabled: t
  } = r;
  const n = Tr(e);
  return ar((i) => {
    if (t || !n || !i)
      return id;
    const s = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [de.Backward]: i.x[de.Backward] || s.x === -1,
        [de.Forward]: i.x[de.Forward] || s.x === 1
      },
      y: {
        [de.Backward]: i.y[de.Backward] || s.y === -1,
        [de.Forward]: i.y[de.Forward] || s.y === 1
      }
    };
  }, [t, e, n]);
}
function od(r, e) {
  const t = e != null ? r.get(e) : void 0, n = t ? t.node.current : null;
  return ar((i) => {
    var s;
    return e == null ? null : (s = n ?? i) != null ? s : null;
  }, [n, e]);
}
function ad(r, e) {
  return F(() => r.reduce((t, n) => {
    const {
      sensor: i
    } = n, s = i.activators.map((o) => ({
      eventName: o.eventName,
      handler: e(o.handler, n)
    }));
    return [...t, ...s];
  }, []), [r, e]);
}
var tr;
(function(r) {
  r[r.Always = 0] = "Always", r[r.BeforeDragging = 1] = "BeforeDragging", r[r.WhileDragging = 2] = "WhileDragging";
})(tr || (tr = {}));
var yn;
(function(r) {
  r.Optimized = "optimized";
})(yn || (yn = {}));
const bi = /* @__PURE__ */ new Map();
function ld(r, e) {
  let {
    dragging: t,
    dependencies: n,
    config: i
  } = e;
  const [s, o] = Z(null), {
    frequency: a,
    measure: l,
    strategy: d
  } = i, c = $(r), u = w(), f = Qt(u), m = te(function(S) {
    S === void 0 && (S = []), !f.current && o((D) => D === null ? S : D.concat(S.filter((_) => !D.includes(_))));
  }, [f]), x = $(null), v = ar((S) => {
    if (u && !t)
      return bi;
    if (!S || S === bi || c.current !== r || s != null) {
      const D = /* @__PURE__ */ new Map();
      for (let _ of r) {
        if (!_)
          continue;
        if (s && s.length > 0 && !s.includes(_.id) && _.rect.current) {
          D.set(_.id, _.rect.current);
          continue;
        }
        const R = _.node.current, y = R ? new Hn(l(R), R) : null;
        _.rect.current = y, y && D.set(_.id, y);
      }
      return D;
    }
    return S;
  }, [r, s, t, u, l]);
  return V(() => {
    c.current = r;
  }, [r]), V(
    () => {
      u || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), V(
    () => {
      s && s.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), V(
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
      case tr.Always:
        return !1;
      case tr.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Gn(r, e) {
  return ar((t) => r ? t || (typeof e == "function" ? e(r) : r) : null, [e, r]);
}
function cd(r, e) {
  return Gn(r, e);
}
function dd(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = qr(e), i = F(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return V(() => () => i?.disconnect(), [i]), i;
}
function Xr(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = qr(e), i = F(
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
  return V(() => () => i?.disconnect(), [i]), i;
}
function ud(r) {
  return new Hn(Pt(r), r);
}
function xi(r, e, t) {
  e === void 0 && (e = ud);
  const [n, i] = Z(null);
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
  const o = dd({
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
  }), a = Xr({
    callback: s
  });
  return Ie(() => {
    s(), r ? (a?.observe(r), o?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), o?.disconnect());
  }, [r]), n;
}
function hd(r) {
  const e = Gn(r);
  return Ms(r, e);
}
const wi = [];
function fd(r) {
  const e = $(r), t = ar((n) => r ? n && n !== wi && r && e.current && r.parentNode === e.current.parentNode ? n : Kr(r) : wi, [r]);
  return V(() => {
    e.current = r;
  }, [r]), t;
}
function md(r) {
  const [e, t] = Z(null), n = $(r), i = te((s) => {
    const o = cn(s.target);
    o && t((a) => a ? (a.set(o, gn(o)), new Map(a)) : null);
  }, []);
  return V(() => {
    const s = n.current;
    if (r !== s) {
      o(s);
      const a = r.map((l) => {
        const d = cn(l);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, gn(d)]) : null;
      }).filter((l) => l != null);
      t(a.length ? new Map(a) : null), n.current = r;
    }
    return () => {
      o(r), o(s);
    };
    function o(a) {
      a.forEach((l) => {
        const d = cn(l);
        d?.removeEventListener("scroll", i);
      });
    }
  }, [i, r]), F(() => r.length ? e ? Array.from(e.values()).reduce((s, o) => Nt(s, o), Pe) : Hs(r) : Pe, [r, e]);
}
function _i(r, e) {
  e === void 0 && (e = []);
  const t = $(null);
  return V(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), V(() => {
    const n = r !== Pe;
    n && !t.current && (t.current = r), !n && t.current && (t.current = null);
  }, [r]), t.current ? er(r, t.current) : Pe;
}
function pd(r) {
  V(
    () => {
      if (!Ur)
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
function gd(r, e) {
  return F(() => r.reduce((t, n) => {
    let {
      eventName: i,
      handler: s
    } = n;
    return t[i] = (o) => {
      s(o, e);
    }, t;
  }, {}), [r, e]);
}
function Ws(r) {
  return F(() => r ? jc(r) : null, [r]);
}
const Ci = [];
function vd(r, e) {
  e === void 0 && (e = Pt);
  const [t] = r, n = Ws(t ? ve(t) : null), [i, s] = Z(Ci);
  function o() {
    s(() => r.length ? r.map((l) => Bs(l) ? n : new Hn(e(l), l)) : Ci);
  }
  const a = Xr({
    callback: o
  });
  return Ie(() => {
    a?.disconnect(), o(), r.forEach((l) => a?.observe(l));
  }, [r]), i;
}
function Gs(r) {
  if (!r)
    return null;
  if (r.children.length > 1)
    return r;
  const e = r.children[0];
  return or(e) ? e : r;
}
function yd(r) {
  let {
    measure: e
  } = r;
  const [t, n] = Z(null), i = te((d) => {
    for (const {
      target: c
    } of d)
      if (or(c)) {
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
  }, [e]), s = Xr({
    callback: i
  }), o = te((d) => {
    const c = Gs(d);
    s?.disconnect(), c && s?.observe(c), n(c ? e(c) : null);
  }, [e, s]), [a, l] = Dr(o);
  return F(() => ({
    nodeRef: a,
    rect: t,
    setRef: l
  }), [t, a, l]);
}
const bd = [{
  sensor: Wn,
  options: {}
}, {
  sensor: jn,
  options: {}
}], xd = {
  current: {}
}, wr = {
  draggable: {
    measure: pi
  },
  droppable: {
    measure: pi,
    strategy: tr.WhileDragging,
    frequency: yn.Optimized
  },
  dragOverlay: {
    measure: Pt
  }
};
class qt extends Map {
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
const wd = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new qt(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Or
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: wr,
  measureDroppableContainers: Or,
  windowRect: null,
  measuringScheduled: !1
}, Vs = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Or,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Or
}, cr = /* @__PURE__ */ Ze(Vs), Zs = /* @__PURE__ */ Ze(wd);
function _d() {
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
      containers: new qt()
    }
  };
}
function Cd(r, e) {
  switch (e.type) {
    case ae.DragStart:
      return {
        ...r,
        draggable: {
          ...r.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case ae.DragMove:
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
    case ae.DragEnd:
    case ae.DragCancel:
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
    case ae.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: n
      } = t, i = new qt(r.droppable.containers);
      return i.set(n, t), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: i
        }
      };
    }
    case ae.SetDroppableDisabled: {
      const {
        id: t,
        key: n,
        disabled: i
      } = e, s = r.droppable.containers.get(t);
      if (!s || n !== s.key)
        return r;
      const o = new qt(r.droppable.containers);
      return o.set(t, {
        ...s,
        disabled: i
      }), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: o
        }
      };
    }
    case ae.UnregisterDroppable: {
      const {
        id: t,
        key: n
      } = e, i = r.droppable.containers.get(t);
      if (!i || n !== i.key)
        return r;
      const s = new qt(r.droppable.containers);
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
function Ed(r) {
  let {
    disabled: e
  } = r;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: i
  } = ze(cr), s = Tr(n), o = Tr(t?.id);
  return V(() => {
    if (!e && !n && s && o != null) {
      if (!Yr(s) || document.activeElement === s.target)
        return;
      const a = i.get(o);
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
          const u = yc(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, i, o, s]), null;
}
function Us(r, e) {
  let {
    transform: t,
    ...n
  } = e;
  return r != null && r.length ? r.reduce((i, s) => s({
    transform: i,
    ...n
  }), t) : t;
}
function kd(r) {
  return F(
    () => ({
      draggable: {
        ...wr.draggable,
        ...r?.draggable
      },
      droppable: {
        ...wr.droppable,
        ...r?.droppable
      },
      dragOverlay: {
        ...wr.dragOverlay,
        ...r?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r?.draggable, r?.droppable, r?.dragOverlay]
  );
}
function Sd(r) {
  let {
    activeNode: e,
    measure: t,
    initialRect: n,
    config: i = !0
  } = r;
  const s = $(!1), {
    x: o,
    y: a
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  Ie(() => {
    if (!o && !a || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !n)
      return;
    const d = e?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const c = t(d), u = Ms(c, n);
    if (o || (u.x = 0), a || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = zs(d);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, o, a, n, t]);
}
const Jr = /* @__PURE__ */ Ze({
  ...Pe,
  scaleX: 1,
  scaleY: 1
});
var at;
(function(r) {
  r[r.Uninitialized = 0] = "Uninitialized", r[r.Initializing = 1] = "Initializing", r[r.Initialized = 2] = "Initialized";
})(at || (at = {}));
const Rd = /* @__PURE__ */ Na(function(e) {
  var t, n, i, s;
  let {
    id: o,
    accessibility: a,
    autoScroll: l = !0,
    children: d,
    sensors: c = bd,
    collisionDetection: u = zc,
    measuring: f,
    modifiers: m,
    ...x
  } = e;
  const v = Da(Cd, void 0, _d), [w, S] = v, [D, _] = Ec(), [R, y] = Z(at.Uninitialized), b = R === at.Initialized, {
    draggable: {
      active: g,
      nodes: E,
      translate: M
    },
    droppable: {
      containers: T
    }
  } = w, C = g != null ? E.get(g) : null, N = $({
    initial: null,
    translated: null
  }), A = F(() => {
    var me;
    return g != null ? {
      id: g,
      // It's possible for the active node to unmount while dragging
      data: (me = C?.data) != null ? me : xd,
      rect: N
    } : null;
  }, [g, C]), H = $(null), [re, se] = Z(null), [ee, ue] = Z(null), J = Qt(x, Object.values(x)), pe = lr("DndDescribedBy", o), Je = F(() => T.getEnabled(), [T]), le = kd(f), {
    droppableRects: ie,
    measureDroppableContainers: ce,
    measuringScheduled: Ue
  } = ld(Je, {
    dragging: b,
    dependencies: [M.x, M.y],
    config: le.droppable
  }), fe = od(E, g), xt = F(() => ee ? Ar(ee) : null, [ee]), Oe = zo(), Ee = cd(fe, le.draggable.measure);
  Sd({
    activeNode: g != null ? E.get(g) : null,
    config: Oe.layoutShiftCompensation,
    initialRect: Ee,
    measure: le.draggable.measure
  });
  const Q = xi(fe, le.draggable.measure, Ee), pt = xi(fe ? fe.parentElement : null), ke = $({
    activatorEvent: null,
    active: null,
    activeNode: fe,
    collisionRect: null,
    collisions: null,
    droppableRects: ie,
    draggableNodes: E,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: T,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Qe = T.getNodeFor((t = ke.current.over) == null ? void 0 : t.id), Me = yd({
    measure: le.dragOverlay.measure
  }), et = (n = Me.nodeRef.current) != null ? n : fe, tt = b ? (i = Me.rect) != null ? i : Q : null, ur = !!(Me.nodeRef.current && Me.rect), hr = hd(ur ? null : Q), Bt = Ws(et ? ve(et) : null), Fe = fd(b ? Qe ?? fe : null), wt = vd(Fe), gt = Us(m, {
    transform: {
      x: M.x - hr.x,
      y: M.y - hr.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ee,
    active: A,
    activeNodeRect: Q,
    containerNodeRect: pt,
    draggingNodeRect: tt,
    over: ke.current.over,
    overlayNodeRect: Me.rect,
    scrollableAncestors: Fe,
    scrollableAncestorRects: wt,
    windowRect: Bt
  }), fr = xt ? Nt(xt, M) : null, mr = md(Fe), tn = _i(mr), pr = _i(mr, [Q]), qe = Nt(gt, tn), _t = tt ? Bc(tt, gt) : null, Ft = A && _t ? u({
    active: A,
    collisionRect: _t,
    droppableRects: ie,
    droppableContainers: Je,
    pointerCoordinates: fr
  }) : null, Jn = Os(Ft, "id"), [rt, Qn] = Z(null), To = ur ? gt : Nt(gt, pr), Ao = Ic(To, (s = rt?.rect) != null ? s : null, Q), rn = $(null), ei = te(
    (me, be) => {
      let {
        sensor: xe,
        options: nt
      } = be;
      if (H.current == null)
        return;
      const Se = E.get(H.current);
      if (!Se)
        return;
      const we = me.nativeEvent, He = new xe({
        active: H.current,
        activeNode: Se,
        event: we,
        options: nt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ke,
        onAbort(he) {
          if (!E.get(he))
            return;
          const {
            onDragAbort: je
          } = J.current, Ye = {
            id: he
          };
          je?.(Ye), D({
            type: "onDragAbort",
            event: Ye
          });
        },
        onPending(he, it, je, Ye) {
          if (!E.get(he))
            return;
          const {
            onDragPending: jt
          } = J.current, st = {
            id: he,
            constraint: it,
            initialCoordinates: je,
            offset: Ye
          };
          jt?.(st), D({
            type: "onDragPending",
            event: st
          });
        },
        onStart(he) {
          const it = H.current;
          if (it == null)
            return;
          const je = E.get(it);
          if (!je)
            return;
          const {
            onDragStart: Ye
          } = J.current, Ht = {
            activatorEvent: we,
            active: {
              id: it,
              data: je.data,
              rect: N
            }
          };
          gr(() => {
            Ye?.(Ht), y(at.Initializing), S({
              type: ae.DragStart,
              initialCoordinates: he,
              active: it
            }), D({
              type: "onDragStart",
              event: Ht
            }), se(rn.current), ue(we);
          });
        },
        onMove(he) {
          S({
            type: ae.DragMove,
            coordinates: he
          });
        },
        onEnd: Ct(ae.DragEnd),
        onCancel: Ct(ae.DragCancel)
      });
      rn.current = He;
      function Ct(he) {
        return async function() {
          const {
            active: je,
            collisions: Ye,
            over: Ht,
            scrollAdjustedTranslate: jt
          } = ke.current;
          let st = null;
          if (je && jt) {
            const {
              cancelDrop: $t
            } = J.current;
            st = {
              activatorEvent: we,
              active: je,
              collisions: Ye,
              delta: jt,
              over: Ht
            }, he === ae.DragEnd && typeof $t == "function" && await Promise.resolve($t(st)) && (he = ae.DragCancel);
          }
          H.current = null, gr(() => {
            S({
              type: he
            }), y(at.Uninitialized), Qn(null), se(null), ue(null), rn.current = null;
            const $t = he === ae.DragEnd ? "onDragEnd" : "onDragCancel";
            if (st) {
              const nn = J.current[$t];
              nn?.(st), D({
                type: $t,
                event: st
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [E]
  ), Oo = te((me, be) => (xe, nt) => {
    const Se = xe.nativeEvent, we = E.get(nt);
    if (
      // Another sensor is already instantiating
      H.current !== null || // No active draggable
      !we || // Event has already been captured
      Se.dndKit || Se.defaultPrevented
    )
      return;
    const He = {
      active: we
    };
    me(xe, be.options, He) === !0 && (Se.dndKit = {
      capturedBy: be.sensor
    }, H.current = nt, ei(xe, be));
  }, [E, ei]), ti = ad(c, Oo);
  pd(c), Ie(() => {
    Q && R === at.Initializing && y(at.Initialized);
  }, [Q, R]), V(
    () => {
      const {
        onDragMove: me
      } = J.current, {
        active: be,
        activatorEvent: xe,
        collisions: nt,
        over: Se
      } = ke.current;
      if (!be || !xe)
        return;
      const we = {
        active: be,
        activatorEvent: xe,
        collisions: nt,
        delta: {
          x: qe.x,
          y: qe.y
        },
        over: Se
      };
      gr(() => {
        me?.(we), D({
          type: "onDragMove",
          event: we
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [qe.x, qe.y]
  ), V(
    () => {
      const {
        active: me,
        activatorEvent: be,
        collisions: xe,
        droppableContainers: nt,
        scrollAdjustedTranslate: Se
      } = ke.current;
      if (!me || H.current == null || !be || !Se)
        return;
      const {
        onDragOver: we
      } = J.current, He = nt.get(Jn), Ct = He && He.rect.current ? {
        id: He.id,
        rect: He.rect.current,
        data: He.data,
        disabled: He.disabled
      } : null, he = {
        active: me,
        activatorEvent: be,
        collisions: xe,
        delta: {
          x: Se.x,
          y: Se.y
        },
        over: Ct
      };
      gr(() => {
        Qn(Ct), we?.(he), D({
          type: "onDragOver",
          event: he
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Jn]
  ), Ie(() => {
    ke.current = {
      activatorEvent: ee,
      active: A,
      activeNode: fe,
      collisionRect: _t,
      collisions: Ft,
      droppableRects: ie,
      draggableNodes: E,
      draggingNode: et,
      draggingNodeRect: tt,
      droppableContainers: T,
      over: rt,
      scrollableAncestors: Fe,
      scrollAdjustedTranslate: qe
    }, N.current = {
      initial: tt,
      translated: _t
    };
  }, [A, fe, Ft, _t, E, et, tt, ie, T, rt, Fe, qe]), nd({
    ...Oe,
    delta: M,
    draggingRect: _t,
    pointerCoordinates: fr,
    scrollableAncestors: Fe,
    scrollableAncestorRects: wt
  });
  const Mo = F(() => ({
    active: A,
    activeNode: fe,
    activeNodeRect: Q,
    activatorEvent: ee,
    collisions: Ft,
    containerNodeRect: pt,
    dragOverlay: Me,
    draggableNodes: E,
    droppableContainers: T,
    droppableRects: ie,
    over: rt,
    measureDroppableContainers: ce,
    scrollableAncestors: Fe,
    scrollableAncestorRects: wt,
    measuringConfiguration: le,
    measuringScheduled: Ue,
    windowRect: Bt
  }), [A, fe, Q, ee, Ft, pt, Me, E, T, ie, rt, ce, Fe, wt, le, Ue, Bt]), Lo = F(() => ({
    activatorEvent: ee,
    activators: ti,
    active: A,
    activeNodeRect: Q,
    ariaDescribedById: {
      draggable: pe
    },
    dispatch: S,
    draggableNodes: E,
    over: rt,
    measureDroppableContainers: ce
  }), [ee, ti, A, Q, S, pe, E, rt, ce]);
  return G.createElement(As.Provider, {
    value: _
  }, G.createElement(cr.Provider, {
    value: Lo
  }, G.createElement(Zs.Provider, {
    value: Mo
  }, G.createElement(Jr.Provider, {
    value: Ao
  }, d)), G.createElement(Ed, {
    disabled: a?.restoreFocus === !1
  })), G.createElement(Rc, {
    ...a,
    hiddenTextDescribedById: pe
  }));
  function zo() {
    const me = re?.autoScrollEnabled === !1, be = typeof l == "object" ? l.enabled === !1 : l === !1, xe = b && !me && !be;
    return typeof l == "object" ? {
      ...l,
      enabled: xe
    } : {
      enabled: xe
    };
  }
}), Nd = /* @__PURE__ */ Ze(null), Ei = "button", Dd = "Draggable";
function Td(r) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: i
  } = r;
  const s = lr(Dd), {
    activators: o,
    activatorEvent: a,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: f
  } = ze(cr), {
    role: m = Ei,
    roleDescription: x = "draggable",
    tabIndex: v = 0
  } = i ?? {}, w = l?.id === e, S = ze(w ? Jr : Nd), [D, _] = Dr(), [R, y] = Dr(), b = gd(o, e), g = Qt(t);
  Ie(
    () => (u.set(e, {
      id: e,
      key: s,
      node: D,
      activatorNode: R,
      data: g
    }), () => {
      const M = u.get(e);
      M && M.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const E = F(() => ({
    role: m,
    tabIndex: v,
    "aria-disabled": n,
    "aria-pressed": w && m === Ei ? !0 : void 0,
    "aria-roledescription": x,
    "aria-describedby": c.draggable
  }), [n, m, v, w, x, c.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: d,
    attributes: E,
    isDragging: w,
    listeners: n ? void 0 : b,
    node: D,
    over: f,
    setNodeRef: _,
    setActivatorNodeRef: y,
    transform: S
  };
}
function qs() {
  return ze(Zs);
}
const Ad = "Droppable", Od = {
  timeout: 25
};
function Md(r) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: i
  } = r;
  const s = lr(Ad), {
    active: o,
    dispatch: a,
    over: l,
    measureDroppableContainers: d
  } = ze(cr), c = $({
    disabled: t
  }), u = $(!1), f = $(null), m = $(null), {
    disabled: x,
    updateMeasurementsFor: v,
    timeout: w
  } = {
    ...Od,
    ...i
  }, S = Qt(v ?? n), D = te(
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
  ), _ = Xr({
    callback: D,
    disabled: x || !o
  }), R = te((E, M) => {
    _ && (M && (_.unobserve(M), u.current = !1), E && _.observe(E));
  }, [_]), [y, b] = Dr(R), g = Qt(e);
  return V(() => {
    !_ || !y.current || (_.disconnect(), u.current = !1, _.observe(y.current));
  }, [y, _]), V(
    () => (a({
      type: ae.RegisterDroppable,
      element: {
        id: n,
        key: s,
        disabled: t,
        node: y,
        rect: f,
        data: g
      }
    }), () => a({
      type: ae.UnregisterDroppable,
      key: s,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), V(() => {
    t !== c.current.disabled && (a({
      type: ae.SetDroppableDisabled,
      id: n,
      key: s,
      disabled: t
    }), c.current.disabled = t);
  }, [n, s, t, a]), {
    active: o,
    rect: f,
    isOver: l?.id === n,
    node: y,
    over: l,
    setNodeRef: b
  };
}
function Ld(r) {
  let {
    animation: e,
    children: t
  } = r;
  const [n, i] = Z(null), [s, o] = Z(null), a = Tr(t);
  return !t && !n && a && i(a), Ie(() => {
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
  }, [e, n, s]), G.createElement(G.Fragment, null, t, n ? Ta(n, {
    ref: o
  }) : null);
}
const zd = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Id(r) {
  let {
    children: e
  } = r;
  return G.createElement(cr.Provider, {
    value: Vs
  }, G.createElement(Jr.Provider, {
    value: zd
  }, e));
}
const Pd = {
  position: "fixed",
  touchAction: "none"
}, Bd = (r) => Yr(r) ? "transform 250ms ease" : void 0, Fd = /* @__PURE__ */ ye((r, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: i,
    children: s,
    className: o,
    rect: a,
    style: l,
    transform: d,
    transition: c = Bd
  } = r;
  if (!a)
    return null;
  const u = i ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...Pd,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: ut.Transform.toString(u),
    transformOrigin: i && n ? Tc(n, a) : void 0,
    transition: typeof c == "function" ? c(n) : c,
    ...l
  };
  return G.createElement(t, {
    className: o,
    style: f,
    ref: e
  }, s);
}), Hd = (r) => (e) => {
  let {
    active: t,
    dragOverlay: n
  } = e;
  const i = {}, {
    styles: s,
    className: o
  } = r;
  if (s != null && s.active)
    for (const [a, l] of Object.entries(s.active))
      l !== void 0 && (i[a] = t.node.style.getPropertyValue(a), t.node.style.setProperty(a, l));
  if (s != null && s.dragOverlay)
    for (const [a, l] of Object.entries(s.dragOverlay))
      l !== void 0 && n.node.style.setProperty(a, l);
  return o != null && o.active && t.node.classList.add(o.active), o != null && o.dragOverlay && n.node.classList.add(o.dragOverlay), function() {
    for (const [l, d] of Object.entries(i))
      t.node.style.setProperty(l, d);
    o != null && o.active && t.node.classList.remove(o.active);
  };
}, jd = (r) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = r;
  return [{
    transform: ut.Transform.toString(e)
  }, {
    transform: ut.Transform.toString(t)
  }];
}, $d = {
  duration: 250,
  easing: "ease",
  keyframes: jd,
  sideEffects: /* @__PURE__ */ Hd({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Wd(r) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: i
  } = r;
  return qr((s, o) => {
    if (e === null)
      return;
    const a = t.get(s);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const d = Gs(o);
    if (!d)
      return;
    const {
      transform: c
    } = ve(o).getComputedStyle(o), u = Ls(c);
    if (!u)
      return;
    const f = typeof e == "function" ? e : Gd(e);
    return js(l, i.draggable.measure), f({
      active: {
        id: s,
        data: a.data,
        node: l,
        rect: i.draggable.measure(l)
      },
      draggableNodes: t,
      dragOverlay: {
        node: o,
        rect: i.dragOverlay.measure(d)
      },
      droppableContainers: n,
      measuringConfiguration: i,
      transform: u
    });
  });
}
function Gd(r) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: i
  } = {
    ...$d,
    ...r
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
    }, m = i({
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
    return new Promise((D) => {
      S.onfinish = () => {
        w?.(), D();
      };
    });
  };
}
let ki = 0;
function Vd(r) {
  return F(() => {
    if (r != null)
      return ki++, ki;
  }, [r]);
}
const Zd = /* @__PURE__ */ G.memo((r) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: n,
    style: i,
    transition: s,
    modifiers: o,
    wrapperElement: a = "div",
    className: l,
    zIndex: d = 999
  } = r;
  const {
    activatorEvent: c,
    active: u,
    activeNodeRect: f,
    containerNodeRect: m,
    draggableNodes: x,
    droppableContainers: v,
    dragOverlay: w,
    over: S,
    measuringConfiguration: D,
    scrollableAncestors: _,
    scrollableAncestorRects: R,
    windowRect: y
  } = qs(), b = ze(Jr), g = Vd(u?.id), E = Us(o, {
    activatorEvent: c,
    active: u,
    activeNodeRect: f,
    containerNodeRect: m,
    draggingNodeRect: w.rect,
    over: S,
    overlayNodeRect: w.rect,
    scrollableAncestors: _,
    scrollableAncestorRects: R,
    transform: b,
    windowRect: y
  }), M = Gn(f), T = Wd({
    config: n,
    draggableNodes: x,
    droppableContainers: v,
    measuringConfiguration: D
  }), C = M ? w.setRef : void 0;
  return G.createElement(Id, null, G.createElement(Ld, {
    animation: T
  }, u && g ? G.createElement(Fd, {
    key: g,
    id: u.id,
    ref: C,
    as: a,
    activatorEvent: c,
    adjustScale: e,
    className: l,
    transition: s,
    rect: M,
    style: {
      zIndex: d,
      ...i
    },
    transform: E
  }, t) : null));
});
function Vn(r, e, t) {
  const n = r.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function Ud(r, e) {
  return r.reduce((t, n, i) => {
    const s = e.get(n);
    return s && (t[i] = s), t;
  }, Array(r.length));
}
function br(r) {
  return r !== null && r >= 0;
}
function qd(r, e) {
  if (r === e)
    return !0;
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Yd(r) {
  return typeof r == "boolean" ? {
    draggable: r,
    droppable: r
  } : r;
}
const Ys = (r) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: i
  } = r;
  const s = Vn(e, n, t), o = e[i], a = s[i];
  return !a || !o ? null : {
    x: a.left - o.left,
    y: a.top - o.top,
    scaleX: a.width / o.width,
    scaleY: a.height / o.height
  };
}, Ks = "Sortable", Xs = /* @__PURE__ */ G.createContext({
  activeIndex: -1,
  containerId: Ks,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Ys,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Kd(r) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: i = Ys,
    disabled: s = !1
  } = r;
  const {
    active: o,
    dragOverlay: a,
    droppableRects: l,
    over: d,
    measureDroppableContainers: c
  } = qs(), u = lr(Ks, t), f = a.rect !== null, m = F(() => n.map((b) => typeof b == "object" && "id" in b ? b.id : b), [n]), x = o != null, v = o ? m.indexOf(o.id) : -1, w = d ? m.indexOf(d.id) : -1, S = $(m), D = !qd(m, S.current), _ = w !== -1 && v === -1 || D, R = Yd(s);
  Ie(() => {
    D && x && c(m);
  }, [D, m, x, c]), V(() => {
    S.current = m;
  }, [m]);
  const y = F(
    () => ({
      activeIndex: v,
      containerId: u,
      disabled: R,
      disableTransforms: _,
      items: m,
      overIndex: w,
      useDragOverlay: f,
      sortedRects: Ud(m, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, u, R.draggable, R.droppable, _, m, w, l, f, i]
  );
  return G.createElement(Xs.Provider, {
    value: y
  }, e);
}
const Xd = (r) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: i
  } = r;
  return Vn(t, n, i).indexOf(e);
}, Jd = (r) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: n,
    index: i,
    items: s,
    newIndex: o,
    previousItems: a,
    previousContainerId: l,
    transition: d
  } = r;
  return !d || !n || a !== s && i === o ? !1 : t ? !0 : o !== i && e === l;
}, Qd = {
  duration: 200,
  easing: "ease"
}, Js = "transform", eu = /* @__PURE__ */ ut.Transition.toString({
  property: Js,
  duration: 0,
  easing: "linear"
}), tu = {
  roleDescription: "sortable"
};
function ru(r) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: i
  } = r;
  const [s, o] = Z(null), a = $(t);
  return Ie(() => {
    if (!e && t !== a.current && n.current) {
      const l = i.current;
      if (l) {
        const d = Pt(n.current, {
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
  }, [e, t, n, i]), V(() => {
    s && o(null);
  }, [s]), s;
}
function nu(r) {
  let {
    animateLayoutChanges: e = Jd,
    attributes: t,
    disabled: n,
    data: i,
    getNewIndex: s = Xd,
    id: o,
    strategy: a,
    resizeObserverConfig: l,
    transition: d = Qd
  } = r;
  const {
    items: c,
    containerId: u,
    activeIndex: f,
    disabled: m,
    disableTransforms: x,
    sortedRects: v,
    overIndex: w,
    useDragOverlay: S,
    strategy: D
  } = ze(Xs), _ = iu(n, m), R = c.indexOf(o), y = F(() => ({
    sortable: {
      containerId: u,
      index: R,
      items: c
    },
    ...i
  }), [u, i, R, c]), b = F(() => c.slice(c.indexOf(o)), [c, o]), {
    rect: g,
    node: E,
    isOver: M,
    setNodeRef: T
  } = Md({
    id: o,
    data: y,
    disabled: _.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: b,
      ...l
    }
  }), {
    active: C,
    activatorEvent: N,
    activeNodeRect: A,
    attributes: H,
    setNodeRef: re,
    listeners: se,
    isDragging: ee,
    over: ue,
    setActivatorNodeRef: J,
    transform: pe
  } = Td({
    id: o,
    data: y,
    attributes: {
      ...tu,
      ...t
    },
    disabled: _.draggable
  }), Je = mc(T, re), le = !!C, ie = le && !x && br(f) && br(w), ce = !S && ee, Ue = ce && ie ? pe : null, xt = ie ? Ue ?? (a ?? D)({
    rects: v,
    activeNodeRect: A,
    activeIndex: f,
    overIndex: w,
    index: R
  }) : null, Oe = br(f) && br(w) ? s({
    id: o,
    items: c,
    activeIndex: f,
    overIndex: w
  }) : R, Ee = C?.id, Q = $({
    activeId: Ee,
    items: c,
    newIndex: Oe,
    containerId: u
  }), pt = c !== Q.current.items, ke = e({
    active: C,
    containerId: u,
    isDragging: ee,
    isSorting: le,
    id: o,
    index: R,
    items: c,
    newIndex: Q.current.newIndex,
    previousItems: Q.current.items,
    previousContainerId: Q.current.containerId,
    transition: d,
    wasDragging: Q.current.activeId != null
  }), Qe = ru({
    disabled: !ke,
    index: R,
    node: E,
    rect: g
  });
  return V(() => {
    le && Q.current.newIndex !== Oe && (Q.current.newIndex = Oe), u !== Q.current.containerId && (Q.current.containerId = u), c !== Q.current.items && (Q.current.items = c);
  }, [le, Oe, u, c]), V(() => {
    if (Ee === Q.current.activeId)
      return;
    if (Ee != null && Q.current.activeId == null) {
      Q.current.activeId = Ee;
      return;
    }
    const et = setTimeout(() => {
      Q.current.activeId = Ee;
    }, 50);
    return () => clearTimeout(et);
  }, [Ee]), {
    active: C,
    activeIndex: f,
    attributes: H,
    data: y,
    rect: g,
    index: R,
    newIndex: Oe,
    items: c,
    isOver: M,
    isSorting: le,
    isDragging: ee,
    listeners: se,
    node: E,
    overIndex: w,
    over: ue,
    setNodeRef: Je,
    setActivatorNodeRef: J,
    setDroppableNodeRef: T,
    setDraggableNodeRef: re,
    transform: Qe ?? xt,
    transition: Me()
  };
  function Me() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Qe || // Or to prevent items jumping to back to their "new" position when items change
      pt && Q.current.newIndex === R
    )
      return eu;
    if (!(ce && !Yr(N) || !d) && (le || ke))
      return ut.Transition.toString({
        ...d,
        property: Js
      });
  }
}
function iu(r, e) {
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
function Lr(r) {
  if (!r)
    return !1;
  const e = r.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const su = [q.Down, q.Right, q.Up, q.Left], ou = (r, e) => {
  let {
    context: {
      active: t,
      collisionRect: n,
      droppableRects: i,
      droppableContainers: s,
      over: o,
      scrollableAncestors: a
    }
  } = e;
  if (su.includes(r.code)) {
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
    const d = Mc({
      collisionRect: n,
      droppableRects: i,
      droppableContainers: l
    });
    let c = Os(d, "id");
    if (c === o?.id && d.length > 1 && (c = d[1].id), c != null) {
      const u = s.get(t.id), f = s.get(c), m = f ? i.get(f.id) : null, x = f?.node.current;
      if (x && m && u && f) {
        const w = Kr(x).some((b, g) => a[g] !== b), S = Qs(u, f), D = au(u, f), _ = w || !S ? {
          x: 0,
          y: 0
        } : {
          x: D ? n.width - m.width : 0,
          y: D ? n.height - m.height : 0
        }, R = {
          x: m.left,
          y: m.top
        };
        return _.x && _.y ? R : er(R, _);
      }
    }
  }
};
function Qs(r, e) {
  return !Lr(r) || !Lr(e) ? !1 : r.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function au(r, e) {
  return !Lr(r) || !Lr(e) || !Qs(r, e) ? !1 : r.data.current.sortable.index < e.data.current.sortable.index;
}
const Si = ({ id: r, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: i, transform: s, transition: o } = nu({
    id: r
  }), a = {
    transform: ut.Translate.toString(s),
    transition: o,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return h("div", {
    ref: i,
    style: a,
    ...t,
    ...n,
    children: e
  });
}, Zn = ({ blocks: r, sortable: e = !1, onSort: t = () => {
}, main: n = !1 }) => {
  const [i, s] = Z([]);
  qi(() => {
    s(r.map((u, f) => ({
      id: u.id ?? f.toString(),
      render: u.render
    })));
  }, [r]);
  const [o, a] = Z(null), l = Nc(fi(Wn), fi(jn, {
    coordinateGetter: ou
  })), d = (u) => {
    a(u.active.id);
  }, c = (u) => {
    const { active: f, over: m } = u;
    a(null), m && f.id !== m.id && s((x) => {
      const v = x.findIndex((S) => S.id === f.id), w = x.findIndex((S) => S.id === m.id);
      return Vn(x, v, w);
    });
  };
  return h("div", {
    className: X("flex flex-wrap items-stretch gap-4", n && "flex-1"),
    children: I(Rd, {
      sensors: l,
      onDragStart: d,
      onDragEnd: c,
      children: [h(Kd, {
        items: i,
        children: i.map((u) => h(Si, {
          id: u.id,
          children: u.render
        }, u.id))
      }), h(Zd, {
        children: o ? h(Si, {
          id: o,
          children: i.find((u) => u.id === o)?.render
        }) : null
      })]
    })
  });
};
Zn.displayName = "GroupMasonry";
Zn.__isPageLayoutGroup = !0;
const lu = ye(function({ children: e, aside: t, header: n, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Ns("Page", e, ["block", "group"]), h("div", {
    ref: s,
    className: "h-full",
    children: I("div", {
      className: X("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [I("main", {
        className: X("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", i === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [n && h("header", {
          className: X("sticky top-0 z-30 bg-f1-background"),
          children: n
        }), h("div", {
          className: "flex-1",
          children: e
        })]
      }), t && h("aside", {
        className: X("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", i === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), Gf = {
  Page: De("Page", lu),
  Block: De("Block", Zr),
  BlockContent: De("BlockContent", uc),
  Group: De("Group", Pn),
  GroupGrid: De("GroupGrid", Vr),
  GroupMasonry: De("GroupMasonry", Zn)
}, Vf = Te({
  name: "StandardLayout",
  type: "layout"
}, ys), Zf = Te({
  name: "TwoColumnLayout",
  type: "layout"
}, Pl), Uf = Te({
  name: "HomeLayout",
  type: "layout"
}, zl);
function Dt(r) {
  "@babel/helpers - typeof";
  return Dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Dt(r);
}
function cu(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function du(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, ro(n.key), n);
  }
}
function uu(r, e, t) {
  return e && du(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function hu(r, e, t) {
  return e = zr(e), fu(r, eo() ? Reflect.construct(e, t || [], zr(r).constructor) : e.apply(r, t));
}
function fu(r, e) {
  if (e && (Dt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mu(r);
}
function mu(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function eo() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (eo = function() {
    return !!r;
  })();
}
function zr(r) {
  return zr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, zr(r);
}
function pu(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && bn(r, e);
}
function bn(r, e) {
  return bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, bn(r, e);
}
function to(r, e, t) {
  return e = ro(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function ro(r) {
  var e = gu(r, "string");
  return Dt(e) == "symbol" ? e : e + "";
}
function gu(r, e) {
  if (Dt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (Dt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Qr = /* @__PURE__ */ (function(r) {
  function e() {
    return cu(this, e), hu(this, e, arguments);
  }
  return pu(e, r), uu(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(G.Component);
to(Qr, "displayName", "ZAxis");
to(Qr, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var vu = ["option", "isActive"];
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Yt.apply(this, arguments);
}
function yu(r, e) {
  if (r == null) return {};
  var t = bu(r, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function bu(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function xu(r) {
  var e = r.option, t = r.isActive, n = yu(r, vu);
  return typeof e == "string" ? /* @__PURE__ */ G.createElement(ii, Yt({
    option: /* @__PURE__ */ G.createElement(La, Yt({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ G.createElement(ii, Yt({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, n));
}
function Tt(r) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tt(r);
}
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Kt.apply(this, arguments);
}
function Ri(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Re(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ri(Object(t), !0).forEach(function(n) {
      ct(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ri(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function wu(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ni(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, io(n.key), n);
  }
}
function _u(r, e, t) {
  return e && Ni(r.prototype, e), t && Ni(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Cu(r, e, t) {
  return e = Ir(e), Eu(r, no() ? Reflect.construct(e, t || [], Ir(r).constructor) : e.apply(r, t));
}
function Eu(r, e) {
  if (e && (Tt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ku(r);
}
function ku(r) {
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
function Ir(r) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ir(r);
}
function Su(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && xn(r, e);
}
function xn(r, e) {
  return xn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, xn(r, e);
}
function ct(r, e, t) {
  return e = io(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function io(r) {
  var e = Ru(r, "string");
  return Tt(e) == "symbol" ? e : e + "";
}
function Ru(r, e) {
  if (Tt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (Tt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var dr = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    wu(this, e);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return t = Cu(this, e, [].concat(i)), ct(t, "state", {
      isAnimationFinished: !1
    }), ct(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), ct(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), ct(t, "id", ja("recharts-scatter-")), t;
  }
  return Su(e, r), _u(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, s = this.props, o = s.shape, a = s.activeShape, l = s.activeIndex, d = sn(this.props, !1);
      return n.map(function(c, u) {
        var f = l === u, m = f ? a : o, x = Re(Re({}, d), c);
        return /* @__PURE__ */ G.createElement(Wt, Kt({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c?.cx, "-").concat(c?.cy, "-").concat(c?.size, "-").concat(u)
        }, za(i.props, c, u), {
          role: "img"
        }), /* @__PURE__ */ G.createElement(xu, Kt({
          option: m,
          isActive: f,
          key: "symbol-".concat(u)
        }, x)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, s = i.points, o = i.isAnimationActive, a = i.animationBegin, l = i.animationDuration, d = i.animationEasing, c = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ G.createElement(Ia, {
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
            var D = vr(S.cx, v.cx), _ = vr(S.cy, v.cy), R = vr(S.size, v.size);
            return Re(Re({}, v), {}, {
              cx: D(m),
              cy: _(m),
              size: R(m)
            });
          }
          var y = vr(0, v.size);
          return Re(Re({}, v), {}, {
            size: y(m)
          });
        });
        return /* @__PURE__ */ G.createElement(Wt, null, n.renderSymbolsStatically(x));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, s = n.isAnimationActive, o = this.state.prevPoints;
      return s && i && i.length && (!o || !ls(o, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, o = i.xAxis, a = i.yAxis, l = i.children, d = cs(l, Pa);
      return d ? d.map(function(c, u) {
        var f = c.props, m = f.direction, x = f.dataKey;
        return /* @__PURE__ */ G.cloneElement(c, {
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
              errorVal: xr(w, S)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, s = n.line, o = n.lineType, a = n.lineJointType, l = sn(this.props, !1), d = sn(s, !1), c, u;
      if (o === "joint")
        c = i.map(function(_) {
          return {
            x: _.cx,
            y: _.cy
          };
        });
      else if (o === "fitting") {
        var f = Ba(i), m = f.xmin, x = f.xmax, v = f.a, w = f.b, S = function(R) {
          return v * R + w;
        };
        c = [{
          x: m,
          y: S(m)
        }, {
          x,
          y: S(x)
        }];
      }
      var D = Re(Re(Re({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, d), {}, {
        points: c
      });
      return /* @__PURE__ */ G.isValidElement(s) ? u = /* @__PURE__ */ G.cloneElement(s, D) : Fa(s) ? u = s(D) : u = /* @__PURE__ */ G.createElement(Ha, Kt({}, D, {
        type: a
      })), /* @__PURE__ */ G.createElement(Wt, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, s = n.points, o = n.line, a = n.className, l = n.xAxis, d = n.yAxis, c = n.left, u = n.top, f = n.width, m = n.height, x = n.id, v = n.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var w = this.state.isAnimationFinished, S = $o("recharts-scatter", a), D = l && l.allowDataOverflow, _ = d && d.allowDataOverflow, R = D || _, y = Et(x) ? this.id : x;
      return /* @__PURE__ */ G.createElement(Wt, {
        className: S,
        clipPath: R ? "url(#clipPath-".concat(y, ")") : null
      }, D || _ ? /* @__PURE__ */ G.createElement("defs", null, /* @__PURE__ */ G.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ G.createElement("rect", {
        x: D ? c : c - f / 2,
        y: _ ? u : u - m / 2,
        width: D ? f : f * 2,
        height: _ ? m : m * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ G.createElement(Wt, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || w) && ds.renderCallByParent(this.props, s));
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
})(Aa);
ct(dr, "displayName", "Scatter");
ct(dr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !$a.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
ct(dr, "getComposedData", function(r) {
  var e = r.xAxis, t = r.yAxis, n = r.zAxis, i = r.item, s = r.displayedData, o = r.xAxisTicks, a = r.yAxisTicks, l = r.offset, d = i.props.tooltipType, c = cs(i.props.children, Wa), u = Et(e.dataKey) ? i.props.dataKey : e.dataKey, f = Et(t.dataKey) ? i.props.dataKey : t.dataKey, m = n && n.dataKey, x = n ? n.range : Qr.defaultProps.range, v = x && x[0], w = e.scale.bandwidth ? e.scale.bandwidth() : 0, S = t.scale.bandwidth ? t.scale.bandwidth() : 0, D = s.map(function(_, R) {
    var y = xr(_, u), b = xr(_, f), g = !Et(m) && xr(_, m) || "-", E = [{
      name: Et(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: y,
      payload: _,
      dataKey: u,
      type: d
    }, {
      name: Et(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: b,
      payload: _,
      dataKey: f,
      type: d
    }];
    g !== "-" && E.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: g,
      payload: _,
      dataKey: m,
      type: d
    });
    var M = si({
      axis: e,
      ticks: o,
      bandSize: w,
      entry: _,
      index: R,
      dataKey: u
    }), T = si({
      axis: t,
      ticks: a,
      bandSize: S,
      entry: _,
      index: R,
      dataKey: f
    }), C = g !== "-" ? n.scale(g) : v, N = Math.sqrt(Math.max(C, 0) / Math.PI);
    return Re(Re({}, _), {}, {
      cx: M,
      cy: T,
      x: M - N,
      y: T - N,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * N,
      height: 2 * N,
      size: C,
      node: {
        x: y,
        y: b,
        z: g
      },
      tooltipPayload: E,
      tooltipPosition: {
        x: M,
        y: T
      },
      payload: _
    }, c && c[R] && c[R].props);
  });
  return Re({
    points: D
  }, l);
});
var Nu = Ga({
  chartName: "ComposedChart",
  GraphicalChild: [us, Va, hs, dr],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: fs
  }, {
    axisType: "yAxis",
    AxisComp: pn
  }, {
    axisType: "zAxis",
    AxisComp: Qr
  }],
  formatAxisMap: Za
});
const Du = (r) => {
  const e = (t) => {
    const { cx: n, cy: i, fill: s, payload: o } = t, a = () => {
      if (!o) return "-";
      if (o[r] !== void 0)
        return o[r];
      for (const [l, d] of Object.entries(o))
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
        l?.parentElement && l.parentElement.setAttribute("aria-label", `Data point: ${a()}`);
      }
    });
  };
  return e.displayName = `Scatter-${r}`, e;
}, Tu = ({ dataConfig: r, data: e, xAxis: t, yAxis: n = {
  hide: !0
}, label: i = !1, hideTooltip: s = !1, hideGrid: o = !1, aspect: a, legend: l, showValueUnderLabel: d = !1, bar: c, line: u, scatter: f, onClick: m }, x) => {
  const v = Ua(e), w = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], S = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], D = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], _ = [...w, ...S, ...D], R = Math.max(...v.flatMap((g) => _.map((E) => qa(n?.tickFormatter ? n.tickFormatter(`${g[E]}`) : `${g[E]}`)))), y = [c, u, f].filter((g) => g?.axisPosition === "left"), b = [c, u, f].filter((g) => g?.axisPosition === "right");
  return h(Ya, {
    config: r,
    ref: x,
    aspect: a,
    children: I(Nu, {
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
        if (!m || !g.activeLabel || !g.activePayload)
          return;
        const E = {
          label: g.activeLabel,
          values: {}
        };
        for (const M of g.activePayload)
          E.values[M.name] = M.value;
        m(E);
      },
      children: [!s && h(Ka, {
        ...Xa(),
        content: h(Ja, {
          yAxisFormatter: n.tickFormatter
        })
      }), !o && h(Qa, {
        ...el()
      }), y.length > 0 && h(pn, {
        ...oi(n),
        tick: !0,
        width: n.width ?? R + 20 + (b.length > 0 && y[0]?.axisLabel ? 20 : 0),
        hide: n.hide || y.some((g) => g?.hideAxis),
        label: y[0]?.axisLabel ? {
          value: y[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), b.length > 0 && h(pn, {
        ...oi(n),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: n.width ?? R + 20 + (y.length > 0 && b[0]?.axisLabel ? 20 : 0),
        hide: n.hide || b.some((g) => g?.hideAxis),
        label: b[0]?.axisLabel ? {
          value: b[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), h(fs, {
        ...tl(t),
        hide: t?.hide,
        tick: d ? (g) => {
          const { x: E, y: M, payload: T } = g, C = e.find((H) => H.label === T.value)?.values || "", N = Object.keys(C).length === 1 ? Object.values(C)?.[0] : void 0, A = N !== void 0 && n.tickFormatter ? n.tickFormatter(`${N}`) : N.toLocaleString();
          return I("g", {
            transform: `translate(${E},${M})`,
            children: [h("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: T.value
            }), !!N && h("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: A
            })]
          });
        } : void 0
      }), w.map((g, E) => h(hs, {
        isAnimationActive: !1,
        dataKey: String(g),
        fill: r[g].color ? Vt(r[g].color) : on(E),
        radius: 4,
        maxBarSize: 32,
        children: i && h(ds, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(g)}`)
      }, `bar-${String(g)}`)), S.map((g, E) => h(us, {
        type: u?.lineType ?? "natural",
        dataKey: String(g),
        stroke: r[g].color ? Vt(r[g].color) : on(w.length + E),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(g)}`)), D.map((g, E) => h(dr, {
        dataKey: String(g),
        fill: r[g].color ? Vt(r[g].color) : on(w.length + S.length + E),
        r: 4,
        isAnimationActive: !1,
        yAxisId: f?.axisPosition === "right" ? "right" : void 0,
        shape: Du(String(g))
      }, `scatter-${String(g)}`)), l && h(rl, {
        content: h(nl, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, Au = ms(Tu), Ou = ({ value: r, max: e = 100, label: t, color: n }, i) => {
  const s = n ? Vt(n) : Vt("categorical-1"), o = r / e * 100;
  return I("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [h("div", {
      className: "flex-grow",
      children: h(il, {
        color: s,
        value: o,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": r,
        "aria-label": `${o.toFixed(1)}%`
      })
    }), t && h("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, Mu = ms(Ou), qf = Te(
  {
    name: "AreaChart",
    type: "info"
  },
  sl
), Yf = Te(
  {
    name: "BarChart",
    type: "info"
  },
  ol
), Kf = Te(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  al
), Xf = Te(
  {
    name: "LineChart",
    type: "info"
  },
  ll
), Jf = Te(
  {
    name: "PieChart",
    type: "info"
  },
  cl
), Qf = Te(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  dl
), em = Te(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Mu
), tm = Te(
  {
    name: "ComboChart",
    type: "info"
  },
  Au
), Lu = (r) => typeof r == "boolean" || !r ? {
  show: !!r,
  invertStatus: !1
} : {
  show: r.show ?? !0,
  invertStatus: r.invertStatus ?? !1
}, so = ({ label: r, ...e }) => {
  const t = ul(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = Lu(e.trend), s = t(e.comparison), o = hl(n.numericValue, n.formatterOptions), a = ai(s.numericValue), l = ai(n.numericValue), d = F(() => {
    if (!(!a || !i.show) && !(!a || !l))
      return (l - a) / a * 100;
  }, [l, a, i.show]);
  return I("div", {
    className: "flex flex-col gap-2",
    children: [r && h("div", {
      children: r
    }), I("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [h("span", {
        className: "font-bold text-2xl",
        children: o
      }), a !== void 0 && h(fl, {
        percentage: d,
        amount: s,
        invertStatus: i.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, zu = () => I("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [h($e, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), I("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [h($e, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), h($e, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
so.displayName = "F0BigNumber";
const Iu = Yi(so, zu), rm = De("F0BigNumber", Iu), oo = {
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
}, ao = {
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
}, Pu = {}, Bu = {
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
}, Fu = {
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
}, Hu = {
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
}, ju = {
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
}, $u = {
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
}, Wu = {
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
}, lo = {
  width: Bu,
  height: Fu,
  minWidth: Hu,
  minHeight: ju,
  maxWidth: $u,
  maxHeight: Wu
}, co = {
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
}, uo = {
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
}, ho = {
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
}, Gu = {}, fo = {
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
}, mo = {
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
}, Vu = {}, Zu = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, po = {
  overflow: Zu,
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
}, Uu = {}, go = {
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
}, qu = {}, Yu = {
  ...co,
  ...go,
  ...mo,
  ...ho,
  ...fo,
  ...lo,
  ...oo,
  ...ao,
  ...po,
  ...uo
};
function Ku(r, e) {
  return e.split(" ").map((t) => `${r}:${t}`).join(" ");
}
function Xu(r, e) {
  const t = [];
  for (const [n, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = Yu[n];
    if (!s) continue;
    const o = s[String(i)];
    o && t.push(Ku(r, o));
  }
  return t.join(" ");
}
const Ju = mt({
  base: "",
  variants: {
    ...co,
    ...go,
    ...mo,
    ...ho,
    ...fo,
    ...lo,
    ...oo,
    ...ao,
    ...po,
    ...uo
  },
  defaultVariants: {
    ...qu,
    ...Vu,
    ...Gu,
    ...Pu,
    ...Uu
  }
}), Qu = ["sm", "md", "lg", "xl"], vo = ye(({ display: r, position: e, padding: t, paddingX: n, paddingY: i, paddingTop: s, paddingBottom: o, paddingLeft: a, paddingRight: l, margin: d, marginX: c, marginY: u, marginTop: f, marginBottom: m, marginLeft: x, marginRight: v, gap: w, columns: S, rows: D, colSpan: _, colStart: R, rowSpan: y, width: b, height: g, minWidth: E, minHeight: M, maxWidth: T, maxHeight: C, background: N, borderColor: A, border: H, borderTop: re, borderBottom: se, borderLeft: ee, borderRight: ue, borderRadius: J, borderRadiusTopLeft: pe, borderRadiusTopRight: Je, borderRadiusBottomLeft: le, borderRadiusBottomRight: ie, borderStyle: ce, overflow: Ue, overflowX: fe, overflowY: xt, divider: Oe, dividerColor: Ee, alignItems: Q, justifyContent: pt, flexDirection: ke, flexWrap: Qe, grow: Me, shrink: et, sm: tt, md: ur, lg: hr, xl: Bt, ...Fe }, wt) => {
  const gt = re && re !== "none" || se && se !== "none" || ee && ee !== "none" || ue && ue !== "none", fr = H && H !== "none" || gt, mr = {
    sm: tt,
    md: ur,
    lg: hr,
    xl: Bt
  }, tn = Qu.map((pr) => {
    const qe = mr[pr];
    return qe ? Xu(pr, qe) : "";
  }).filter(Boolean).join(" ");
  return h("div", {
    ref: wt,
    className: X(gt && "border-0", Ju({
      display: r,
      position: e,
      padding: t,
      paddingX: n,
      paddingY: i,
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
      rows: D,
      colSpan: _,
      colStart: R,
      rowSpan: y,
      width: b,
      height: g,
      minWidth: E,
      minHeight: M,
      maxWidth: T,
      maxHeight: C,
      background: N,
      borderColor: A,
      border: H,
      borderTop: re,
      borderBottom: se,
      borderLeft: ee,
      borderRight: ue,
      borderRadius: J,
      borderRadiusTopLeft: pe,
      borderRadiusTopRight: Je,
      borderRadiusBottomLeft: le,
      borderRadiusBottomRight: ie,
      borderStyle: ce,
      overflow: Ue,
      overflowX: fe,
      overflowY: xt,
      divider: Oe,
      dividerColor: Ee,
      alignItems: Q,
      justifyContent: pt,
      flexDirection: ke,
      flexWrap: Qe,
      grow: Me,
      shrink: et
    }), tn, fr && !A && "border-f1-border", Oe && !Ee && "divide-f1-border", "scrollbar-macos"),
    ...Fe
  });
});
vo.displayName = "F0Box";
const nm = Te({
  name: "F0Box",
  type: "layout"
}, vo), im = Wo.filter(
  (r) => r !== "ai"
), sm = Ki, om = ["default", "outline", "neutral"], am = Ki, lm = ["sm", "md", "lg"], cm = ["compact", "expanded"], dm = Go, um = [
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
], wn = ({ count: r, list: e }) => {
  const [t, n] = Z(!1), i = h(_r, {
    label: `+${r}`
  });
  return e?.length ? I(Xi, {
    open: t,
    onOpenChange: n,
    children: [h(Ji, {
      asChild: !0,
      children: h("button", {
        className: Qi("inline-flex flex-shrink-0 items-center"),
        children: i
      })
    }), h(es, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: I(ts, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, o) => h("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: h(_r, {
            ...s
          })
        }, o)), h(rs, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
};
wn.displayName = "ChipCounter";
const yo = ({ chips: r, max: e = 4, remainingCount: t, layout: n = "compact" }) => {
  if (n === "fill")
    return h(Vo, {
      items: r,
      renderListItem: (l) => h(_r, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => h(wn, {
        count: (t ?? 0) + l,
        list: t ? void 0 : r.slice(r.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const i = r.slice(0, e), s = r.slice(e), o = t ?? r.length - e, a = o > 0;
  return I("div", {
    className: "flex items-center gap-2",
    children: [i.map((l, d) => h(_r, {
      ...l
    }, d)), a && h(wn, {
      count: o,
      list: t ? void 0 : s
    })]
  });
};
yo.displayName = "F0ChipList";
const hm = De("F0ChipList", yo), fm = Zo, eh = mt({
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
}), th = mt({
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
}), mm = ({ title: r, description: e, action: t, link: n, icon: i, variant: s = "neutral" }) => {
  const o = $(null);
  return h("div", {
    ref: o,
    className: "@container",
    children: h("div", {
      className: eh({
        variant: s
      }),
      children: I("div", {
        className: X("flex flex-col items-start gap-3 @sm:flex-row @sm:items-center @sm:justify-between"),
        children: [I("div", {
          className: "flex flex-row gap-2",
          children: [h("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? h(Uo, {
              icon: i || qo,
              size: "sm"
            }) : h(ml, {
              type: s,
              size: "sm"
            })
          }), I("div", {
            className: "flex flex-col gap-0.5",
            children: [h("p", {
              className: th({
                variant: s
              }),
              children: r
            }), h("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || n) && I("div", {
          className: X("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @sm:pl-0"),
          children: [n && h(Yo, {
            href: n.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: n.label
          }), t && h(Ge, {
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
}, rh = 388;
function nh({ filters: r, value: e, onChange: t, height: n, width: i = 600, className: s, showApplyButton: o = !0, applyButtonLabel: a }) {
  const l = Tn(), [d, c] = Z(null), [u, f] = Z(e);
  V(() => {
    f(e);
  }, [e]), V(() => {
    if (!d && r) {
      const w = Object.keys(r);
      if (w.length > 0) {
        const S = w.find((D) => {
          const _ = u[D], R = ri(r[D].type);
          return _ !== void 0 && !R.isEmpty(_, {
            schema: r[D],
            i18n: l
          });
        });
        c(S ?? w[0]);
      }
    }
  }, [r, d, u, l]);
  const m = (w, S) => {
    const D = {
      ...u,
      [w]: S
    };
    f(D), o || t(D);
  }, x = () => {
    t(u);
  }, v = F(() => n || Object.entries(r).reduce((S, [D, _]) => {
    const R = ri(_.type);
    return Math.max(S, R?.formHeight || rh);
  }, 0), [r, n]);
  return !r || Object.keys(r).length === 0 ? null : h("div", {
    className: X("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: i
    },
    children: h(Ko, {
      filters: r,
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
nh.displayName = "F0FilterPickerContent";
const Un = "gap-4", ih = "mt-6", bt = "md", bo = Ze(null);
function xo() {
  const r = ze(bo);
  if (!r)
    throw new Error("useF0FormContext must be used within a F0Form");
  return r;
}
function Pr(r, e, t) {
  const n = ["forms", r];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function ne(r, e) {
  return r._def?.typeName === e;
}
const wo = /* @__PURE__ */ new WeakMap();
function pm(r, e) {
  wo.set(r, e);
  const t = r;
  return t._f0Config = e, t._innerSchema = r, t;
}
function qn(r) {
  const e = r;
  return e._f0Config ? e._f0Config : wo.get(r);
}
function gm(r) {
  return qn(r) !== void 0;
}
function Be(r) {
  let e = r;
  for (; ne(e, "ZodOptional") || ne(e, "ZodNullable") || ne(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function sh(r, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = Be(r);
  return ne(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : ne(t, "ZodNumber") ? "number" : ne(t, "ZodBoolean") ? "switch" : ne(t, "ZodDate") ? "date" : ne(t, "ZodEnum") || ne(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : ne(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function Yn(r) {
  return ne(r, "ZodOptional") || ne(r, "ZodNullable") || ne(r, "ZodDefault") && Yn(r._def.innerType);
}
function oh(r) {
  const e = Be(r);
  return ne(e, "ZodString") ? (e._def.checks || []).some(
    (n) => n.kind === "min" && (n.value ?? 0) >= 1
  ) : !1;
}
function ah(r) {
  if (Yn(r))
    return !1;
  const e = Be(r);
  return ne(e, "ZodString") ? oh(r) : !0;
}
function en(r, e) {
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
function lh(r) {
  const e = Be(r);
  return ne(e, "ZodLiteral") && e._def.value === !0;
}
function ch({ field: r, formField: e }) {
  const t = r.validation && lh(r.validation);
  return h(Xo, {
    title: r.label,
    disabled: r.disabled,
    required: t,
    ...e,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function dh({ field: r, formField: e, error: t, isValidating: n }) {
  const i = {
    id: r.id,
    label: r.label,
    placeholder: r.placeholder,
    value: e.value,
    onChange: e.onChange,
    onBlur: e.onBlur,
    error: t,
    isValidating: n,
    disabled: r.disabled,
    config: r.fieldConfig
  };
  return h(sr, {
    children: r.render(i)
  });
}
function uh(r, e) {
  if (r)
    return {
      value: {
        from: r,
        to: r
      },
      granularity: e?.[0] ?? "day"
    };
}
function hh(r) {
  return r?.value?.from;
}
function fh({ field: r, formField: e, error: t, loading: n }) {
  const i = F(() => uh(e.value, r.granularities), [e.value, r.granularities]), s = (o) => {
    e.onChange(hh(o));
  };
  return h(ps, {
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
    size: bt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function mh(r) {
  if (!(!r?.from || !r?.to))
    return {
      value: {
        from: r.from,
        to: r.to
      },
      granularity: "range"
    };
}
function ph(r) {
  if (!(!r?.value?.from || !r?.value?.to))
    return {
      from: r.value.from,
      to: r.value.to
    };
}
function gh({ field: r, formField: e, error: t, loading: n }) {
  const i = F(() => mh(e.value), [e.value]), s = (a) => {
    e.onChange(ph(a));
  }, o = r.fromLabel && r.toLabel ? `${r.label} (${r.fromLabel} - ${r.toLabel})` : r.label;
  return h(ps, {
    label: o,
    placeholder: r.placeholder,
    disabled: r.disabled,
    granularities: r.granularities ?? ["range"],
    minDate: r.minDate,
    maxDate: r.maxDate,
    presets: r.presets,
    clearable: r.clearable,
    value: i,
    onChange: s,
    size: bt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function vh({ field: r, formField: e, error: t, loading: n }) {
  return h(pl, {
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
    size: bt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function yh({ field: r, formField: e }) {
  const t = e.value;
  return h(gl, {
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
function bh({ field: r, formField: e, error: t, loading: n }) {
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
    size: bt,
    hideLabel: !0
  };
  return r.multiple ? h(Rt, {
    ...i,
    multiple: !0,
    clearable: r.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : r.clearable ? h(Rt, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : h(Rt, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function xh({ field: r, formField: e, error: t, loading: n }) {
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
    size: bt,
    hideLabel: !0
  };
  return r.multiple ? h(Rt, {
    ...i,
    multiple: !0,
    clearable: r.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : r.clearable ? h(Rt, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : h(Rt, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function wh(r) {
  const { field: e } = r;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? h(xh, {
    ...r,
    field: e
  }) : "options" in e && e.options !== void 0 ? h(bh, {
    ...r,
    field: e
  }) : null;
}
function _h(r) {
  const e = Be(r);
  return ne(e, "ZodLiteral") && e._def.value === !0;
}
function Ch({ field: r, formField: e }) {
  const t = r.validation && _h(r.validation);
  return h(Jo, {
    title: r.label,
    disabled: r.disabled,
    required: t,
    ...e,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
const Eh = {
  email: "name@example.com"
}, kh = {
  url: ta,
  email: ea
};
function Sh({ field: r, formField: e, error: t, loading: n }) {
  const i = r.inputType ?? "text", s = r.placeholder ?? Eh[i] ?? void 0, o = kh[i];
  return h(Qo, {
    label: r.label,
    type: i,
    placeholder: s,
    disabled: r.disabled,
    ...e,
    value: e.value != null ? String(e.value) : "",
    size: bt,
    hideLabel: !0,
    error: t,
    loading: n,
    icon: o
  });
}
function Rh({ field: r, formField: e, error: t, loading: n }) {
  return h(vl, {
    label: r.label,
    placeholder: r.placeholder,
    disabled: r.disabled,
    rows: r.rows,
    maxLength: r.maxLength,
    ...e,
    value: e.value != null ? String(e.value) : "",
    size: bt,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Nh({ field: r, formField: e, fieldState: t, isSubmitting: n }) {
  const i = !!t.error, { isValidating: s } = t, o = r.disabled || n, a = {
    error: i,
    loading: s
  };
  switch (r.type) {
    case "text":
      return h(Sh, {
        field: {
          ...r,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "number":
      return h(vh, {
        field: {
          ...r,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "textarea":
      return h(Rh, {
        field: {
          ...r,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "select":
      return h(wh, {
        field: {
          ...r,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "checkbox":
      return h(ch, {
        field: {
          ...r,
          disabled: o
        },
        formField: e
      });
    case "switch":
      return h(Ch, {
        field: {
          ...r,
          disabled: o
        },
        formField: e
      });
    case "date":
      return h(fh, {
        field: {
          ...r,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "daterange":
      return h(gh, {
        field: {
          ...r,
          disabled: o
        },
        formField: e,
        ...a
      });
    case "richtext":
      return h(yh, {
        field: {
          ...r,
          disabled: o
        },
        formField: e
      });
    case "custom":
      return h(dh, {
        field: {
          ...r,
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
function Kn({ field: r, sectionId: e }) {
  const t = On(), n = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = xo(), o = !r.renderIf || en(r.renderIf, n), a = r.type !== "checkbox" && r.type !== "custom", l = r.validation && ah(r.validation), d = Pr(s, e, r.id);
  return o ? h(li, {
    control: t.control,
    name: r.id,
    render: ({ field: c, fieldState: u }) => I(yl, {
      id: d,
      className: "scroll-mt-4",
      children: [a && I("label", {
        htmlFor: r.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [r.label, l && h("span", {
          className: "ml-0.5 text-f1-foreground-critical",
          children: "*"
        })]
      }), h(bl, {
        children: Nh({
          field: r,
          formField: c,
          fieldState: u,
          isSubmitting: i
        })
      }), r.helpText && h(xl, {
        children: r.helpText
      }), h(wl, {})]
    })
  }) : h(li, {
    control: t.control,
    name: r.id,
    render: () => h("span", {
      className: "hidden",
      "aria-hidden": "true"
    })
  });
}
function _o({ row: r, sectionId: e }) {
  return h("div", {
    className: `flex xs:flex-row flex-col ${Un} [&>*]:flex-1`,
    children: r.fields.map((t) => h(Kn, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function Dh(r) {
  const e = Be(r);
  return ne(e, "ZodLiteral") && e._def.value === !0;
}
function Co({ fields: r }) {
  const e = On(), { watch: t, setValue: n } = e, { isSubmitting: i } = e.formState, s = t(), o = F(() => r.filter((c) => !c.renderIf || en(c.renderIf, s)), [r, s]), a = F(() => o.map((c) => ({
    value: c.id,
    title: c.label,
    description: c.helpText,
    disabled: c.disabled || i,
    required: !!(c.validation && Dh(c.validation))
  })), [o, i]), l = F(() => o.filter((c) => s[c.id]).map((c) => c.id), [o, s]);
  return o.length === 0 ? null : h(_l, {
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
function Th(r, e) {
  return typeof r == "function" ? r(e) : en(r, e);
}
function Ah(r) {
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
function Oh({ section: r }) {
  const t = On().watch(), { formName: n } = xo(), { title: i, description: s, renderIf: o, fields: a } = r.section, l = r.id;
  if (o && !Th(o, t))
    return null;
  const d = Ah(a), c = Pr(n, l);
  return I("section", {
    id: c,
    className: "flex flex-col scroll-mt-4",
    children: [h("div", {
      className: "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0 py-5",
      children: h(Cl, {
        title: i,
        description: s ?? ""
      })
    }), h("div", {
      className: `flex flex-col ${Un}`,
      children: d.map((u, f) => u.type === "switchGroup" ? h(Co, {
        fields: u.fields,
        sectionId: l
      }, `switch-group-${f}`) : u.type === "field" ? h(Kn, {
        field: u.item.field,
        sectionId: l
      }, u.item.field.id) : u.type === "row" ? h(_o, {
        row: u.item,
        sectionId: l
      }, `row-${u.index}`) : null)
    })]
  });
}
var K;
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
    for (const o of i)
      s[o] = o;
    return s;
  }, r.getValidEnumValues = (i) => {
    const s = r.objectKeys(i).filter((a) => typeof i[i[a]] != "number"), o = {};
    for (const a of s)
      o[a] = i[a];
    return r.objectValues(o);
  }, r.objectValues = (i) => r.objectKeys(i).map(function(s) {
    return i[s];
  }), r.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const o in i)
      Object.prototype.hasOwnProperty.call(i, o) && s.push(o);
    return s;
  }, r.find = (i, s) => {
    for (const o of i)
      if (s(o))
        return o;
  }, r.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && Number.isFinite(i) && Math.floor(i) === i;
  function n(i, s = " | ") {
    return i.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  r.joinValues = n, r.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(K || (K = {}));
var Di;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Di || (Di = {}));
const L = K.arrayToEnum([
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
]), lt = (r) => {
  switch (typeof r) {
    case "undefined":
      return L.undefined;
    case "string":
      return L.string;
    case "number":
      return Number.isNaN(r) ? L.nan : L.number;
    case "boolean":
      return L.boolean;
    case "function":
      return L.function;
    case "bigint":
      return L.bigint;
    case "symbol":
      return L.symbol;
    case "object":
      return Array.isArray(r) ? L.array : r === null ? L.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? L.promise : typeof Map < "u" && r instanceof Map ? L.map : typeof Set < "u" && r instanceof Set ? L.set : typeof Date < "u" && r instanceof Date ? L.date : L.object;
    default:
      return L.unknown;
  }
}, k = K.arrayToEnum([
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
class Xe extends Error {
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
      for (const o of s.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(i);
        else if (o.code === "invalid_return_type")
          i(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          i(o.argumentsError);
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
    return i(this), n;
  }
  static assert(e) {
    if (!(e instanceof Xe))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, K.jsonStringifyReplacer, 2);
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
Xe.create = (r) => new Xe(r);
const _n = (r, e) => {
  let t;
  switch (r.code) {
    case k.invalid_type:
      r.received === L.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case k.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, K.jsonStringifyReplacer)}`;
      break;
    case k.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${K.joinValues(r.keys, ", ")}`;
      break;
    case k.invalid_union:
      t = "Invalid input";
      break;
    case k.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${K.joinValues(r.options)}`;
      break;
    case k.invalid_enum_value:
      t = `Invalid enum value. Expected ${K.joinValues(r.options)}, received '${r.received}'`;
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
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : K.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case k.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "bigint" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case k.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case k.custom:
      t = "Invalid input";
      break;
    case k.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case k.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case k.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, K.assertNever(r);
  }
  return { message: t };
};
let Mh = _n;
function Lh() {
  return Mh;
}
const zh = (r) => {
  const { data: e, path: t, errorMaps: n, issueData: i } = r, s = [...t, ...i.path || []], o = {
    ...i,
    path: s
  };
  if (i.message !== void 0)
    return {
      ...i,
      path: s,
      message: i.message
    };
  let a = "";
  const l = n.filter((d) => !!d).slice().reverse();
  for (const d of l)
    a = d(o, { data: e, defaultError: a }).message;
  return {
    ...i,
    path: s,
    message: a
  };
};
function O(r, e) {
  const t = Lh(), n = zh({
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
      t === _n ? void 0 : _n
      // then global default map
    ].filter((i) => !!i)
  });
  r.common.issues.push(n);
}
class Ce {
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
        return j;
      i.status === "dirty" && e.dirty(), n.push(i.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, t) {
    const n = [];
    for (const i of t) {
      const s = await i.key, o = await i.value;
      n.push({
        key: s,
        value: o
      });
    }
    return Ce.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const i of t) {
      const { key: s, value: o } = i;
      if (s.status === "aborted" || o.status === "aborted")
        return j;
      s.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const j = Object.freeze({
  status: "aborted"
}), Gt = (r) => ({ status: "dirty", value: r }), Ae = (r) => ({ status: "valid", value: r }), Ti = (r) => r.status === "aborted", Ai = (r) => r.status === "dirty", At = (r) => r.status === "valid", Br = (r) => typeof Promise < "u" && r instanceof Promise;
var z;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e?.message;
})(z || (z = {}));
class ht {
  constructor(e, t, n, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Oi = (r, e) => {
  if (At(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Xe(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function U(r) {
  if (!r)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: n, description: i } = r;
  if (e && (t || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (o, a) => {
    const { message: l } = r;
    return o.code === "invalid_enum_value" ? { message: l ?? a.defaultError } : typeof a.data > "u" ? { message: l ?? n ?? a.defaultError } : o.code !== "invalid_type" ? { message: a.defaultError } : { message: l ?? t ?? a.defaultError };
  }, description: i };
}
class Y {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return lt(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: lt(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Ce(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: lt(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Br(t))
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
      parsedType: lt(e)
    }, i = this._parseSync({ data: e, path: n.path, parent: n });
    return Oi(n, i);
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
      parsedType: lt(e)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return At(n) ? {
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
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) => At(n) ? {
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
      parsedType: lt(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (Br(i) ? i : Promise.resolve(i));
    return Oi(n, s);
  }
  refine(e, t) {
    const n = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const o = e(i), a = () => s.addIssue({
        code: k.custom,
        ...n(i)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof t == "function" ? t(n, i) : t), !1));
  }
  _refinement(e) {
    return new Mt({
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
    return dt.create(this, this._def);
  }
  nullable() {
    return Lt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ve.create(this);
  }
  promise() {
    return $r.create(this, this._def);
  }
  or(e) {
    return Hr.create([this, e], this._def);
  }
  and(e) {
    return jr.create(this, e, this._def);
  }
  transform(e) {
    return new Mt({
      ...U(this._def),
      schema: this,
      typeName: W.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new kn({
      ...U(this._def),
      innerType: this,
      defaultValue: t,
      typeName: W.ZodDefault
    });
  }
  brand() {
    return new sf({
      typeName: W.ZodBranded,
      type: this,
      ...U(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Sn({
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
    return Xn.create(this, e);
  }
  readonly() {
    return Rn.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ih = /^c[^\s-]{8,}$/i, Ph = /^[0-9a-z]+$/, Bh = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Fh = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Hh = /^[a-z0-9_-]{21}$/i, jh = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, $h = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Wh = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Gh = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let hn;
const Vh = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Zh = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Uh = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, qh = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Yh = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Kh = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Eo = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Xh = new RegExp(`^${Eo}$`);
function ko(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function Jh(r) {
  return new RegExp(`^${ko(r)}$`);
}
function Qh(r) {
  let e = `${Eo}T${ko(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function ef(r, e) {
  return !!((e === "v4" || !e) && Vh.test(r) || (e === "v6" || !e) && Uh.test(r));
}
function tf(r, e) {
  if (!jh.test(r))
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
function rf(r, e) {
  return !!((e === "v4" || !e) && Zh.test(r) || (e === "v6" || !e) && qh.test(r));
}
class vt extends Y {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== L.string) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: k.invalid_type,
        expected: L.string,
        received: s.parsedType
      }), j;
    }
    const n = new Ce();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), O(i, {
          code: k.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), O(i, {
          code: k.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = e.data.length > s.value, a = e.data.length < s.value;
        (o || a) && (i = this._getOrReturnCtx(e, i), o ? O(i, {
          code: k.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && O(i, {
          code: k.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Wh.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "email",
          code: k.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        hn || (hn = new RegExp(Gh, "u")), hn.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "emoji",
          code: k.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Fh.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "uuid",
          code: k.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        Hh.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "nanoid",
          code: k.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Ih.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "cuid",
          code: k.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Ph.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "cuid2",
          code: k.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        Bh.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "ulid",
          code: k.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), O(i, {
            validation: "url",
            code: k.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "regex",
        code: k.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: k.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: k.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: k.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? Qh(s).test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: k.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Xh.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: k.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Jh(s).test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        code: k.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? $h.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "duration",
        code: k.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? ef(e.data, s.version) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "ip",
        code: k.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? tf(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "jwt",
        code: k.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? rf(e.data, s.version) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "cidr",
        code: k.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? Yh.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "base64",
        code: k.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? Kh.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
        validation: "base64url",
        code: k.invalid_string,
        message: s.message
      }), n.dirty()) : K.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: k.invalid_string,
      ...z.errToObj(n)
    });
  }
  _addCheck(e) {
    return new vt({
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
    return new vt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new vt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new vt({
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
vt.create = (r) => new vt({
  checks: [],
  typeName: W.ZodString,
  coerce: r?.coerce ?? !1,
  ...U(r)
});
function nf(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = t > n ? t : n, s = Number.parseInt(r.toFixed(i).replace(".", "")), o = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % o / 10 ** i;
}
class rr extends Y {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== L.number) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: k.invalid_type,
        expected: L.number,
        received: s.parsedType
      }), j;
    }
    let n;
    const i = new Ce();
    for (const s of this._def.checks)
      s.kind === "int" ? K.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), O(n, {
        code: k.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: k.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: k.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? nf(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), O(n, {
        code: k.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), O(n, {
        code: k.not_finite,
        message: s.message
      }), i.dirty()) : K.assertNever(s);
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
  setLimit(e, t, n, i) {
    return new rr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: z.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new rr({
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && K.isInteger(e.value));
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
rr.create = (r) => new rr({
  checks: [],
  typeName: W.ZodNumber,
  coerce: r?.coerce || !1,
  ...U(r)
});
class nr extends Y {
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
    if (this._getType(e) !== L.bigint)
      return this._getInvalidInput(e);
    let n;
    const i = new Ce();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: k.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: k.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), O(n, {
        code: k.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : K.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return O(t, {
      code: k.invalid_type,
      expected: L.bigint,
      received: t.parsedType
    }), j;
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
  setLimit(e, t, n, i) {
    return new nr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: z.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new nr({
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
nr.create = (r) => new nr({
  checks: [],
  typeName: W.ZodBigInt,
  coerce: r?.coerce ?? !1,
  ...U(r)
});
class Mi extends Y {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== L.boolean) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: k.invalid_type,
        expected: L.boolean,
        received: n.parsedType
      }), j;
    }
    return Ae(e.data);
  }
}
Mi.create = (r) => new Mi({
  typeName: W.ZodBoolean,
  coerce: r?.coerce || !1,
  ...U(r)
});
class Fr extends Y {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== L.date) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: k.invalid_type,
        expected: L.date,
        received: s.parsedType
      }), j;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: k.invalid_date
      }), j;
    }
    const n = new Ce();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), O(i, {
        code: k.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), O(i, {
        code: k.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : K.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Fr({
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
Fr.create = (r) => new Fr({
  checks: [],
  coerce: r?.coerce || !1,
  typeName: W.ZodDate,
  ...U(r)
});
class Li extends Y {
  _parse(e) {
    if (this._getType(e) !== L.symbol) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: k.invalid_type,
        expected: L.symbol,
        received: n.parsedType
      }), j;
    }
    return Ae(e.data);
  }
}
Li.create = (r) => new Li({
  typeName: W.ZodSymbol,
  ...U(r)
});
class zi extends Y {
  _parse(e) {
    if (this._getType(e) !== L.undefined) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: k.invalid_type,
        expected: L.undefined,
        received: n.parsedType
      }), j;
    }
    return Ae(e.data);
  }
}
zi.create = (r) => new zi({
  typeName: W.ZodUndefined,
  ...U(r)
});
class Ii extends Y {
  _parse(e) {
    if (this._getType(e) !== L.null) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: k.invalid_type,
        expected: L.null,
        received: n.parsedType
      }), j;
    }
    return Ae(e.data);
  }
}
Ii.create = (r) => new Ii({
  typeName: W.ZodNull,
  ...U(r)
});
class Cn extends Y {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Ae(e.data);
  }
}
Cn.create = (r) => new Cn({
  typeName: W.ZodAny,
  ...U(r)
});
class Pi extends Y {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Ae(e.data);
  }
}
Pi.create = (r) => new Pi({
  typeName: W.ZodUnknown,
  ...U(r)
});
class ft extends Y {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return O(t, {
      code: k.invalid_type,
      expected: L.never,
      received: t.parsedType
    }), j;
  }
}
ft.create = (r) => new ft({
  typeName: W.ZodNever,
  ...U(r)
});
class Bi extends Y {
  _parse(e) {
    if (this._getType(e) !== L.undefined) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: k.invalid_type,
        expected: L.void,
        received: n.parsedType
      }), j;
    }
    return Ae(e.data);
  }
}
Bi.create = (r) => new Bi({
  typeName: W.ZodVoid,
  ...U(r)
});
class Ve extends Y {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== L.array)
      return O(t, {
        code: k.invalid_type,
        expected: L.array,
        received: t.parsedType
      }), j;
    if (i.exactLength !== null) {
      const o = t.data.length > i.exactLength.value, a = t.data.length < i.exactLength.value;
      (o || a) && (O(t, {
        code: o ? k.too_big : k.too_small,
        minimum: a ? i.exactLength.value : void 0,
        maximum: o ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (O(t, {
      code: k.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (O(t, {
      code: k.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((o, a) => i.type._parseAsync(new ht(t, o, t.path, a)))).then((o) => Ce.mergeArray(n, o));
    const s = [...t.data].map((o, a) => i.type._parseSync(new ht(t, o, t.path, a)));
    return Ce.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Ve({
      ...this._def,
      minLength: { value: e, message: z.toString(t) }
    });
  }
  max(e, t) {
    return new Ve({
      ...this._def,
      maxLength: { value: e, message: z.toString(t) }
    });
  }
  length(e, t) {
    return new Ve({
      ...this._def,
      exactLength: { value: e, message: z.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ve.create = (r, e) => new Ve({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: W.ZodArray,
  ...U(e)
});
function St(r) {
  if (r instanceof oe) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = dt.create(St(n));
    }
    return new oe({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof Ve ? new Ve({
    ...r._def,
    type: St(r.element)
  }) : r instanceof dt ? dt.create(St(r.unwrap())) : r instanceof Lt ? Lt.create(St(r.unwrap())) : r instanceof yt ? yt.create(r.items.map((e) => St(e))) : r;
}
class oe extends Y {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = K.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== L.object) {
      const d = this._getOrReturnCtx(e);
      return O(d, {
        code: k.invalid_type,
        expected: L.object,
        received: d.parsedType
      }), j;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof ft && this._def.unknownKeys === "strip"))
      for (const d in i.data)
        o.includes(d) || a.push(d);
    const l = [];
    for (const d of o) {
      const c = s[d], u = i.data[d];
      l.push({
        key: { status: "valid", value: d },
        value: c._parse(new ht(i, u, i.path, d)),
        alwaysSet: d in i.data
      });
    }
    if (this._def.catchall instanceof ft) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const c of a)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: i.data[c] }
          });
      else if (d === "strict")
        a.length > 0 && (O(i, {
          code: k.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const c of a) {
        const u = i.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: d._parse(
            new ht(i, u, i.path, c)
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
    }).then((d) => Ce.mergeObjectSync(n, d)) : Ce.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return z.errToObj, new oe({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          const i = this._def.errorMap?.(t, n).message ?? n.defaultError;
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
    return new oe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new oe({
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
    return new oe({
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
    return new oe({
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
    return new oe({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const n of K.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new oe({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const n of K.objectKeys(this.shape))
      e[n] || (t[n] = this.shape[n]);
    return new oe({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return St(this);
  }
  partial(e) {
    const t = {};
    for (const n of K.objectKeys(this.shape)) {
      const i = this.shape[n];
      e && !e[n] ? t[n] = i : t[n] = i.optional();
    }
    return new oe({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const n of K.objectKeys(this.shape))
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof dt; )
          s = s._def.innerType;
        t[n] = s;
      }
    return new oe({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return So(K.objectKeys(this.shape));
  }
}
oe.create = (r, e) => new oe({
  shape: () => r,
  unknownKeys: "strip",
  catchall: ft.create(),
  typeName: W.ZodObject,
  ...U(e)
});
oe.strictCreate = (r, e) => new oe({
  shape: () => r,
  unknownKeys: "strict",
  catchall: ft.create(),
  typeName: W.ZodObject,
  ...U(e)
});
oe.lazycreate = (r, e) => new oe({
  shape: r,
  unknownKeys: "strip",
  catchall: ft.create(),
  typeName: W.ZodObject,
  ...U(e)
});
class Hr extends Y {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const a of s)
        if (a.result.status === "valid")
          return a.result;
      for (const a of s)
        if (a.result.status === "dirty")
          return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((a) => new Xe(a.ctx.common.issues));
      return O(t, {
        code: k.invalid_union,
        unionErrors: o
      }), j;
    }
    if (t.common.async)
      return Promise.all(n.map(async (s) => {
        const o = {
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
            parent: o
          }),
          ctx: o
        };
      })).then(i);
    {
      let s;
      const o = [];
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
        c.status === "dirty" && !s && (s = { result: c, ctx: d }), d.common.issues.length && o.push(d.common.issues);
      }
      if (s)
        return t.common.issues.push(...s.ctx.common.issues), s.result;
      const a = o.map((l) => new Xe(l));
      return O(t, {
        code: k.invalid_union,
        unionErrors: a
      }), j;
    }
  }
  get options() {
    return this._def.options;
  }
}
Hr.create = (r, e) => new Hr({
  options: r,
  typeName: W.ZodUnion,
  ...U(e)
});
function En(r, e) {
  const t = lt(r), n = lt(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === L.object && n === L.object) {
    const i = K.objectKeys(e), s = K.objectKeys(r).filter((a) => i.indexOf(a) !== -1), o = { ...r, ...e };
    for (const a of s) {
      const l = En(r[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (t === L.array && n === L.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const o = r[s], a = e[s], l = En(o, a);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === L.date && n === L.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class jr extends Y {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = (s, o) => {
      if (Ti(s) || Ti(o))
        return j;
      const a = En(s.value, o.value);
      return a.valid ? ((Ai(s) || Ai(o)) && t.dirty(), { status: t.value, value: a.data }) : (O(n, {
        code: k.invalid_intersection_types
      }), j);
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
    ]).then(([s, o]) => i(s, o)) : i(this._def.left._parseSync({
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
jr.create = (r, e, t) => new jr({
  left: r,
  right: e,
  typeName: W.ZodIntersection,
  ...U(t)
});
class yt extends Y {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== L.array)
      return O(n, {
        code: k.invalid_type,
        expected: L.array,
        received: n.parsedType
      }), j;
    if (n.data.length < this._def.items.length)
      return O(n, {
        code: k.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), j;
    !this._def.rest && n.data.length > this._def.items.length && (O(n, {
      code: k.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...n.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new ht(n, o, n.path, a)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => Ce.mergeArray(t, o)) : Ce.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new yt({
      ...this._def,
      rest: e
    });
  }
}
yt.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new yt({
    items: r,
    typeName: W.ZodTuple,
    rest: null,
    ...U(e)
  });
};
class Fi extends Y {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== L.map)
      return O(n, {
        code: k.invalid_type,
        expected: L.map,
        received: n.parsedType
      }), j;
    const i = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([a, l], d) => ({
      key: i._parse(new ht(n, a, n.path, [d, "key"])),
      value: s._parse(new ht(n, l, n.path, [d, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const d = await l.key, c = await l.value;
          if (d.status === "aborted" || c.status === "aborted")
            return j;
          (d.status === "dirty" || c.status === "dirty") && t.dirty(), a.set(d.value, c.value);
        }
        return { status: t.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const d = l.key, c = l.value;
        if (d.status === "aborted" || c.status === "aborted")
          return j;
        (d.status === "dirty" || c.status === "dirty") && t.dirty(), a.set(d.value, c.value);
      }
      return { status: t.value, value: a };
    }
  }
}
Fi.create = (r, e, t) => new Fi({
  valueType: e,
  keyType: r,
  typeName: W.ZodMap,
  ...U(t)
});
class ir extends Y {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== L.set)
      return O(n, {
        code: k.invalid_type,
        expected: L.set,
        received: n.parsedType
      }), j;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (O(n, {
      code: k.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (O(n, {
      code: k.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), t.dirty());
    const s = this._def.valueType;
    function o(l) {
      const d = /* @__PURE__ */ new Set();
      for (const c of l) {
        if (c.status === "aborted")
          return j;
        c.status === "dirty" && t.dirty(), d.add(c.value);
      }
      return { status: t.value, value: d };
    }
    const a = [...n.data.values()].map((l, d) => s._parse(new ht(n, l, n.path, d)));
    return n.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, t) {
    return new ir({
      ...this._def,
      minSize: { value: e, message: z.toString(t) }
    });
  }
  max(e, t) {
    return new ir({
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
ir.create = (r, e) => new ir({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: W.ZodSet,
  ...U(e)
});
class Hi extends Y {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Hi.create = (r, e) => new Hi({
  getter: r,
  typeName: W.ZodLazy,
  ...U(e)
});
class ji extends Y {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return O(t, {
        received: t.data,
        code: k.invalid_literal,
        expected: this._def.value
      }), j;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ji.create = (r, e) => new ji({
  value: r,
  typeName: W.ZodLiteral,
  ...U(e)
});
function So(r, e) {
  return new Ot({
    values: r,
    typeName: W.ZodEnum,
    ...U(e)
  });
}
class Ot extends Y {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return O(t, {
        expected: K.joinValues(n),
        received: t.parsedType,
        code: k.invalid_type
      }), j;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return O(t, {
        received: t.data,
        code: k.invalid_enum_value,
        options: n
      }), j;
    }
    return Ae(e.data);
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
    return Ot.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return Ot.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
Ot.create = So;
class $i extends Y {
  _parse(e) {
    const t = K.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== L.string && n.parsedType !== L.number) {
      const i = K.objectValues(t);
      return O(n, {
        expected: K.joinValues(i),
        received: n.parsedType,
        code: k.invalid_type
      }), j;
    }
    if (this._cache || (this._cache = new Set(K.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = K.objectValues(t);
      return O(n, {
        received: n.data,
        code: k.invalid_enum_value,
        options: i
      }), j;
    }
    return Ae(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
$i.create = (r, e) => new $i({
  values: r,
  typeName: W.ZodNativeEnum,
  ...U(e)
});
class $r extends Y {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== L.promise && t.common.async === !1)
      return O(t, {
        code: k.invalid_type,
        expected: L.promise,
        received: t.parsedType
      }), j;
    const n = t.parsedType === L.promise ? t.data : Promise.resolve(t.data);
    return Ae(n.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
$r.create = (r, e) => new $r({
  type: r,
  typeName: W.ZodPromise,
  ...U(e)
});
class Mt extends Y {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === W.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (o) => {
        O(n, o), o.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "preprocess") {
      const o = i.transform(n.data, s);
      if (n.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (t.value === "aborted")
            return j;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? j : l.status === "dirty" || t.value === "dirty" ? Gt(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return j;
        const a = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? j : a.status === "dirty" || t.value === "dirty" ? Gt(a.value) : a;
      }
    }
    if (i.type === "refinement") {
      const o = (a) => {
        const l = i.refinement(a, s);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? j : (a.status === "dirty" && t.dirty(), o(a.value), { status: t.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? j : (a.status === "dirty" && t.dirty(), o(a.value).then(() => ({ status: t.value, value: a.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!At(o))
          return j;
        const a = i.transform(o.value, s);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => At(o) ? Promise.resolve(i.transform(o.value, s)).then((a) => ({
          status: t.value,
          value: a
        })) : j);
    K.assertNever(i);
  }
}
Mt.create = (r, e, t) => new Mt({
  schema: r,
  typeName: W.ZodEffects,
  effect: e,
  ...U(t)
});
Mt.createWithPreprocess = (r, e, t) => new Mt({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: W.ZodEffects,
  ...U(t)
});
class dt extends Y {
  _parse(e) {
    return this._getType(e) === L.undefined ? Ae(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
dt.create = (r, e) => new dt({
  innerType: r,
  typeName: W.ZodOptional,
  ...U(e)
});
class Lt extends Y {
  _parse(e) {
    return this._getType(e) === L.null ? Ae(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Lt.create = (r, e) => new Lt({
  innerType: r,
  typeName: W.ZodNullable,
  ...U(e)
});
class kn extends Y {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === L.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
kn.create = (r, e) => new kn({
  innerType: r,
  typeName: W.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...U(e)
});
class Sn extends Y {
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
    return Br(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Xe(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Xe(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Sn.create = (r, e) => new Sn({
  innerType: r,
  typeName: W.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...U(e)
});
class Wi extends Y {
  _parse(e) {
    if (this._getType(e) !== L.nan) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        code: k.invalid_type,
        expected: L.nan,
        received: n.parsedType
      }), j;
    }
    return { status: "valid", value: e.data };
  }
}
Wi.create = (r) => new Wi({
  typeName: W.ZodNaN,
  ...U(r)
});
class sf extends Y {
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
class Xn extends Y {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? j : s.status === "dirty" ? (t.dirty(), Gt(s.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? j : i.status === "dirty" ? (t.dirty(), {
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
    return new Xn({
      in: e,
      out: t,
      typeName: W.ZodPipeline
    });
  }
}
class Rn extends Y {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (i) => (At(i) && (i.value = Object.freeze(i.value)), i);
    return Br(t) ? t.then((i) => n(i)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Rn.create = (r, e) => new Rn({
  innerType: r,
  typeName: W.ZodReadonly,
  ...U(e)
});
var W;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(W || (W = {}));
const of = Cn.create;
ft.create;
Ve.create;
const af = oe.create;
Hr.create;
jr.create;
yt.create;
Ot.create;
$r.create;
dt.create;
Lt.create;
function lf(r, e) {
  return async (t, n, i) => {
    const s = cf(r, t);
    return El(s, e)(t, n, i);
  };
}
function cf(r, e) {
  const t = r.shape, n = {};
  for (const [i, s] of Object.entries(t)) {
    const o = qn(s);
    if (!o || !o.renderIf) {
      n[i] = s;
      continue;
    }
    en(o.renderIf, e) ? n[i] = s : n[i] = of();
  }
  return af(n);
}
function Gi(r) {
  const e = document.getElementById(r);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function df({
  formName: r,
  errors: e
}) {
  const t = Object.keys(e).filter((f) => f !== "root"), n = t.length > 0, i = t.length, [s, o] = Z(0), a = $([]);
  V(() => {
    const f = t, m = a.current, x = f.find(
      (v) => !m.includes(v)
    );
    if (x) {
      const v = Pr(r, void 0, x);
      Gi(v);
      const w = f.indexOf(x);
      w !== -1 && o(w);
    }
    a.current = f;
  }, [t, r]);
  const l = te(
    (f) => {
      if (t.length === 0) return;
      const m = (f % t.length + t.length) % t.length;
      o(m);
      const x = t[m], v = Pr(r, void 0, x);
      Gi(v);
    },
    [t, r]
  ), d = te(() => {
    l(s - 1);
  }, [s, l]), c = te(() => {
    l(s + 1);
  }, [s, l]), u = te(() => {
    o(0), a.current = [];
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
function uf(r) {
  const e = Be(r);
  if (!ne(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (i = s.value);
  return { min: n, max: i };
}
function hf(r) {
  const e = Be(r);
  if (!ne(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: n, maxDate: i };
}
function ff(r) {
  const e = Be(r);
  if (!ne(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const i of t)
    i.kind === "max" && (n = i.value);
  return { maxLength: n };
}
function mf(r) {
  const e = Be(r);
  return ne(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "email") : !1;
}
function pf(r) {
  const e = Be(r);
  return ne(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "url") : !1;
}
function Vi(r) {
  return mf(r) ? "email" : pf(r) ? "url" : "text";
}
function Zi(r, e, t, n) {
  const i = {
    id: r,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    validation: e
  }, s = Yn(e);
  switch (n) {
    case "text": {
      const o = "inputType" in t && t.inputType ? t.inputType : Vi(e);
      return {
        ...i,
        type: "text",
        inputType: o,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: o, max: a } = uf(e);
      return {
        ...i,
        type: "number",
        step: "step" in t ? t.step : void 0,
        min: o,
        max: a,
        locale: "locale" in t ? t.locale : void 0,
        renderIf: t.renderIf
      };
    }
    case "textarea": {
      const { maxLength: o } = ff(e);
      return {
        ...i,
        type: "textarea",
        rows: "rows" in t ? t.rows : void 0,
        maxLength: o,
        renderIf: t.renderIf
      };
    }
    case "select": {
      const o = "source" in t && t.source;
      return {
        ...i,
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
      const { minDate: o, maxDate: a } = hf(e);
      return {
        ...i,
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
        inputType: Vi(e),
        renderIf: t.renderIf
      };
  }
}
function Wr(r) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (let n = 0; n < r.length; n++) {
    if (t.has(n)) continue;
    const i = r[n], s = i.config.row;
    if (s) {
      const o = [];
      for (let l = n; l < r.length; l++)
        r[l].config.row === s && (o.push(r[l]), t.add(l));
      o.sort((l, d) => l.position - d.position);
      const a = {
        type: "row",
        fields: o.map(
          (l) => Zi(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(a);
    } else {
      t.add(n);
      const o = Zi(
        i.id,
        i.schema,
        i.config,
        i.fieldType
      );
      e.push({ type: "field", field: o });
    }
  }
  return e;
}
function Ro(r) {
  const e = r.shape, t = [], n = Object.entries(e);
  for (let i = 0; i < n.length; i++) {
    const [s, o] = n[i], a = qn(o);
    if (a) {
      const l = sh(o, a);
      t.push({
        id: s,
        schema: o,
        config: a,
        fieldType: l,
        position: i
      });
    }
  }
  return t;
}
function gf(r, e) {
  return F(() => {
    const t = Ro(r), n = [], i = {};
    for (const a of t) {
      const l = a.config.section;
      l ? (i[l] || (i[l] = []), i[l].push(a)) : n.push(a);
    }
    n.sort((a, l) => a.position - l.position);
    for (const a of Object.keys(i))
      i[a].sort((l, d) => l.position - d.position);
    const s = [];
    s.push(...Wr(n));
    const o = e ? Object.keys(e).filter((a) => i[a]) : Object.keys(i);
    for (const a of o) {
      const l = e?.[a], d = i[a], c = {
        id: a,
        type: "section",
        section: {
          title: l?.title ?? a,
          description: l?.description,
          renderIf: l?.renderIf,
          fields: Wr(d)
        }
      };
      s.push(c);
    }
    return s;
  }, [r, e]);
}
function vm(r, e) {
  const t = Ro(r), n = [], i = {};
  for (const a of t) {
    const l = a.config.section;
    l ? (i[l] || (i[l] = []), i[l].push(a)) : n.push(a);
  }
  n.sort((a, l) => a.position - l.position);
  for (const a of Object.keys(i))
    i[a].sort((l, d) => l.position - d.position);
  const s = [];
  s.push(...Wr(n));
  const o = e ? Object.keys(e).filter((a) => i[a]) : Object.keys(i);
  for (const a of o) {
    const l = e?.[a], d = i[a], c = {
      id: a,
      type: "section",
      section: {
        title: l?.title ?? a,
        description: l?.description,
        renderIf: l?.renderIf,
        fields: Wr(d)
      }
    };
    s.push(c);
  }
  return s;
}
function vf(r) {
  const { validation: e } = r.forms;
  return (t, n) => {
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
    return { message: n.defaultError };
  };
}
function yf(r) {
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
const bf = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function xf(r) {
  const e = Tn(), { forms: t } = e, { name: n, schema: i, sections: s, defaultValues: o, onSubmit: a, submitConfig: l, className: d, errorTriggerMode: c = "on-blur" } = r, u = l?.type === "action-bar", f = l?.label ?? "Submit", m = l?.icon === null ? void 0 : l?.icon ?? ra, x = !u, v = l?.type === "action-bar" && l?.discardable, w = u ? l?.discardConfig : void 0, S = w?.label ?? t.actionBar.discard, D = w?.icon === null ? void 0 : w?.icon ?? na, _ = u ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, R = u && !!l?.centerActionBarInFrameContent, y = gf(i, s), b = F(() => vf(e), [e]), g = bf[c], E = F(() => lf(i, {
    errorMap: b
  }), [i, b]), M = kl({
    resolver: E,
    mode: g,
    defaultValues: o
  }), T = M.formState.errors.root, { isDirty: C, isSubmitting: N, errors: A } = M.formState, { hasErrors: H, errorCount: re, goToPreviousError: se, goToNextError: ee, resetErrorNavigation: ue } = df({
    formName: n,
    errors: A
  }), J = async (ie) => {
    const ce = await a(ie);
    ce.success || (ce.errors && Object.entries(ce.errors).forEach(([Ue, fe]) => {
      M.setError(Ue, {
        message: fe
      });
    }), ce.rootMessage && M.setError("root", {
      message: ce.rootMessage
    }));
  }, pe = () => {
    M.reset(), ue();
  }, Je = yf(y), le = F(() => ({
    formName: n
  }), [n]);
  return h(bo.Provider, {
    value: le,
    children: I(Sl, {
      ...M,
      children: [I("form", {
        onSubmit: M.handleSubmit(J),
        className: X(`flex flex-col ${Un} max-w-[600px]`, d),
        children: [Je.map((ie, ce) => {
          switch (ie.type) {
            case "switchGroup":
              return h(Co, {
                fields: ie.fields
              }, `switch-group-${ce}`);
            case "field":
              return h(Kn, {
                field: ie.item.field
              }, ie.item.field.id);
            case "row":
              return h(_o, {
                row: ie.item
              }, `row-${ie.index}`);
            case "section":
              return h("div", {
                className: ce !== 0 ? ih : "",
                children: h(Oh, {
                  section: ie.item
                })
              }, ie.item.id);
            default:
              return null;
          }
        }), T && h("p", {
          className: "text-base font-medium text-f1-foreground-critical",
          children: T.message
        }), !u && x && h(Ge, {
          type: "submit",
          label: f,
          icon: m,
          loading: N,
          disabled: H
        })]
      }), u && h(Rl, {
        isOpen: C,
        variant: "light",
        centerInFrameContent: R,
        label: H ? void 0 : _,
        leftContent: H ? I("div", {
          className: "flex items-center gap-3",
          children: [I("div", {
            className: "flex items-center gap-0.5",
            children: [h(An, {
              icon: ia,
              size: "md",
              color: "critical"
            }), h("span", {
              className: "font-medium text-f1-foreground-critical",
              children: re === 1 ? t.actionBar.issues.one.replace("{{count}}", String(re)) : t.actionBar.issues.other.replace("{{count}}", String(re))
            })]
          }), re > 1 && I("div", {
            className: "flex items-center gap-2",
            children: [h(Ge, {
              icon: sa,
              onClick: se,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }), h(Ge, {
              icon: oa,
              onClick: ee,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            })]
          })]
        }) : void 0,
        primaryActions: [{
          label: f,
          icon: m,
          onClick: M.handleSubmit(J),
          disabled: H
        }],
        secondaryActions: v ? [{
          label: S,
          icon: D,
          onClick: pe
        }] : []
      })]
    })
  });
}
const ym = De("F0Form", xf), wf = ye((r, e) => h(In, {
  ref: e,
  variant: "heading",
  ...r
}));
wf.displayName = "F0Heading";
const bm = De(
  "F0GridStack",
  zn
), fn = 16, _f = mt({
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
function No(r, e = 0) {
  return r.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? No(t.children, e + 1) : []]);
}
function Cf(r, e) {
  const t = r.length;
  if (t <= fn) return r;
  const n = t / (fn - 1), i = new Set(Array.from({
    length: fn - 1
  }, (s, o) => Math.min(Math.floor(o * n), t - 1)));
  if (i.add(t - 1), e) {
    const s = r.findIndex((o) => o.id === e);
    if (s !== -1 && !i.has(s)) {
      const o = [...i].reduce((a, l) => Math.abs(l - s) < Math.abs(a - s) ? l : a);
      i.delete(o), i.add(s);
    }
  }
  return [...i].sort((s, o) => s - o).map((s) => r[s]);
}
function Ef({ items: r, activeItem: e, className: t, align: n = "left", variant: i = "dark" }) {
  const s = F(() => Cf(No(r), e), [r, e]);
  return h("div", {
    className: X("flex flex-col justify-center gap-2 py-3", n === "right" ? "items-end" : "items-start", t),
    children: s.map((o) => h("div", {
      className: _f({
        depth: o.depth,
        variant: i,
        active: o.id === e
      })
    }, o.id))
  });
}
const kf = 300, Sf = 0, Rf = mt({
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
function Nf({ title: r, items: e, className: t, activeItem: n, collapsible: i = !1, showChildrenCounter: s = !1, barsAlign: o = "left", size: a = "md", variant: l = "light" }) {
  const [d, c] = Z(!1), u = $(!1), f = (x) => {
    x && !d && (u.current = !0), c(x);
  }, m = te((x) => {
    !x || !u.current || (u.current = !1, requestAnimationFrame(() => {
      x.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return I(aa, {
    open: d,
    onOpenChange: f,
    openDelay: Sf,
    closeDelay: kf,
    children: [h(la, {
      asChild: !0,
      children: h("button", {
        className: X(Qi(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": r ?? "Menu",
        children: h(Ef, {
          items: e,
          activeItem: n,
          align: o,
          variant: l
        })
      })
    }), h(ca, {
      ref: m,
      side: o === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: X(Rf({
        size: a
      }), !r && "pt-2", "scrollbar-macos"),
      children: h(Nl, {
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
const xm = De(
  "F0TableOfContentPopover",
  Nf
), Df = ({ benefits: r }) => h("div", {
  className: "flex flex-col gap-2",
  children: r.map((e, t) => h(Tf, {
    text: e
  }, t))
}), Tf = ({ text: r }) => I("div", {
  className: "flex flex-row items-start gap-2",
  children: [h(An, {
    icon: ua,
    size: "md",
    className: "text-f1-icon-positive"
  }), h("span", {
    children: r
  })]
}), Do = ye(({ title: r, image: e, benefits: t, actions: n, withShadow: i = !0, module: s, moduleName: o, tag: a, promoTag: l }, d) => I("div", {
  ref: d,
  className: X("bg-white flex flex-row rounded-xl border border-f1-border-secondary", i && "shadow-md"),
  children: [h("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: h("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), I("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [I("div", {
      className: "flex flex-col gap-5",
      children: [I("div", {
        className: "flex flex-col gap-2",
        children: [I("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && h(ns, {
            module: s
          }), o && h("p", {
            className: "text-base font-medium text-f1-foreground",
            children: o
          })]
        }), (a || l) && I("div", {
          className: "flex justify-start gap-2",
          children: [a && h(da, {
            icon: a.icon,
            text: a.label
          }), l && h(Dl, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), h("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: r
        })]
      }), h(Df, {
        benefits: t
      })]
    }), n && h("div", {
      className: "flex gap-3",
      children: n
    })]
  })]
}));
Do.displayName = "ProductBlankslate";
function Af({ isOpen: r, onClose: e, title: t, children: n, module: i, portalContainer: s }) {
  const [o, a] = Z(r);
  return V(() => {
    a(r);
  }, [r]), h(ha, {
    open: o,
    onOpenChange: (d) => {
      a(d), d || e();
    },
    modal: !0,
    children: I(fa, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [I("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [I(ma, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [i && h(ns, {
            module: i,
            size: "lg"
          }), t]
        }), h(Dn, {
          variant: "outline",
          icon: is,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), I(ts, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [n, h(rs, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function wm({ isOpen: r, onClose: e, title: t, image: n, benefits: i, errorMessage: s, successMessage: o, loadingState: a, nextSteps: l, closeLabel: d, primaryAction: c, modalTitle: u, modalModule: f, secondaryAction: m, portalContainer: x, tag: v, promoTag: w, showResponseDialog: S = !0 }) {
  const [D, _] = Z(r), [R, y] = Z(null), [b, g] = Z(!1), E = async () => {
    if (c?.onClick) {
      g(!0);
      try {
        await c.onClick(), _(!1), S && y("success");
      } catch {
        S && y("error");
      } finally {
        g(!1);
      }
    }
  }, M = () => {
    _(!1), e?.();
  }, T = b;
  return I(sr, {
    children: [h(Af, {
      isOpen: D,
      onClose: M,
      title: u,
      module: f,
      portalContainer: x,
      children: h("div", {
        className: "pb-4 pl-4",
        children: h(Do, {
          title: t,
          image: n,
          benefits: i,
          withShadow: !1,
          tag: v,
          promoTag: w,
          actions: I("div", {
            className: "flex gap-3",
            children: [c && h(Ge, {
              variant: c.variant,
              label: T ? a.label : c.label,
              icon: c.icon || void 0,
              onClick: E,
              loading: c.loading,
              size: c.size
            }), m && h(Ge, {
              onClick: m.onClick,
              label: m.label,
              variant: m.variant,
              size: m.size,
              icon: m.icon
            })]
          })
        })
      })
    }), R && S && h(gs, {
      open: !0,
      onClose: () => {
        M(), y(null);
      },
      success: R === "success",
      errorMessage: s,
      successMessage: o,
      nextSteps: l,
      closeLabel: d,
      portalContainer: x
    })]
  });
}
function Of({ mediaUrl: r, title: e, description: t, onClose: n, dismissible: i, width: s, trackVisibility: o, actions: a, showConfirmation: l = !0 }) {
  const [d, c] = Z(!1), u = () => {
    c(!0), n && n();
  };
  V(() => {
    o && o(!d);
  }, [o, d]);
  const f = r?.includes(".mp4");
  return h(sr, {
    children: d ? null : I(pa, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [I(ga, {
        children: [i && h("div", {
          className: "absolute right-2 top-2 z-10",
          children: h(Ge, {
            variant: "ghost",
            icon: is,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          })
        }), I("div", {
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
          }), I("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [h(ci, {
              className: "text-lg font-medium",
              children: e
            }), h(ci, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), a && h(va, {
        className: "p-3",
        children: a.map((m) => m.type === "upsell" ? h(vs, {
          label: m.label,
          onRequest: m.onClick,
          errorMessage: m.errorMessage,
          successMessage: m.successMessage,
          loadingState: m.loadingState,
          nextSteps: m.nextSteps,
          closeLabel: m.closeLabel,
          showConfirmation: l && m.showConfirmation,
          variant: m.variant
        }, m.label) : h(Ge, {
          label: m.label,
          onClick: m.onClick,
          variant: m.variant
        }, m.label))
      })]
    })
  });
}
const Mf = ye(function({ primaryAction: e, secondaryAction: t, ...n }, i) {
  const s = (l) => l.variant === "promote" ? h(vs, {
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
  }) : h(Ge, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), o = e?.variant !== "promote" ? e : void 0, a = t?.variant !== "promote" ? t : void 0;
  return I(Tl, {
    ref: i,
    ...n,
    primaryAction: o,
    secondaryAction: a,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
Mf.displayName = "UpsellingBanner";
function _m({ isOpen: r, setIsOpen: e, label: t, variant: n = "promote", size: i = "md", showIcon: s = !0, side: o = "right", align: a = "center", icon: l = ya, mediaUrl: d, title: c, description: u, width: f = "300px", trackVisibility: m, actions: x, onClick: v, hideLabel: w = !1 }) {
  const [S, D] = Z(!1), [_, R] = Z(null), [y, b] = Z(null), g = (N) => {
    e(N), v && v();
  }, E = async (N) => {
    if (N.type === "upsell") {
      b(N);
      try {
        await N.onClick(), N.showConfirmation && (D(!0), R("success"));
      } catch {
        D(!0), R("error");
      }
    }
  }, M = () => {
    R(null), D(!1), b(null), e(!1);
  }, T = r && !S, C = x?.map((N) => N.type === "upsell" ? {
    ...N,
    onClick: () => E(N)
  } : N);
  return I(sr, {
    children: [I(Xi, {
      open: T,
      onOpenChange: g,
      children: [h(Ji, {
        asChild: !0,
        children: h(Ge, {
          variant: n,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(r),
          hideLabel: w
        })
      }), h(es, {
        side: o,
        align: a,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: h(Of, {
          mediaUrl: d,
          title: c,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: f,
          trackVisibility: m,
          actions: C,
          showConfirmation: !1
        })
      })]
    }), y?.type === "upsell" && y.showConfirmation && _ && h(gs, {
      open: !0,
      onClose: M,
      success: _ === "success",
      errorMessage: y.errorMessage,
      successMessage: y.successMessage,
      nextSteps: y.nextSteps,
      closeLabel: y.closeLabel,
      portalContainer: null
    })]
  });
}
const Lf = Ze(null), zf = ({ children: r, fullScreen: e = !0 }) => {
  const t = $(null), [n, i] = Z(t.current);
  return ka(() => {
    i(t.current);
  }, []), h(Lf.Provider, {
    value: {
      element: n
    },
    children: h("div", {
      ref: t,
      id: "f0-layout",
      className: X({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: r
    })
  });
}, If = ({ children: r }) => h(Ml, {
  reducedMotion: "user",
  children: r
}), Cm = ({ children: r, layout: e, link: t, privacyModeInitiallyEnabled: n, image: i, i18n: s, l10n: o, isDev: a = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: d = !1 }) => h(If, {
  children: h(ba, {
    isDev: a,
    showExperimentalWarnings: d,
    children: h(xa, {
      ...o,
      children: h(wa, {
        ...s,
        children: h(_a, {
          ...t,
          children: h(zf, {
            ...e,
            children: h(Ca, {
              children: h(Al, {
                initiallyEnabled: n,
                children: h(Ea, {
                  ...i,
                  children: h(Ol, {
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
}), Ui = (r) => `datacollection-${r}`, Em = {
  get: async (r) => JSON.parse(
    localStorage.getItem(Ui(r)) ?? "{}"
  ),
  set: async (r, e) => {
    localStorage.setItem(Ui(r), JSON.stringify(e));
  }
};
export {
  Rm as A,
  dg as AiChatTranslationsProvider,
  qf as AreaChart,
  Nm as Await,
  Yf as BarChart,
  Dm as Blockquote,
  Kf as CategoryBarChart,
  Tm as ChatSpinner,
  tm as ComboChart,
  Wf as Dashboard,
  jp as DndProvider,
  Am as Em,
  Om as EmojiImage,
  Mm as F0ActionItem,
  Lm as F0AiChat,
  zm as F0AiChatProvider,
  Im as F0AiChatTextArea,
  Pm as F0AiCollapsibleMessage,
  Bm as F0AiFullscreenChat,
  mm as F0Alert,
  ug as F0AuraVoiceAnimation,
  Fm as F0Avatar,
  ml as F0AvatarAlert,
  Hm as F0AvatarCompany,
  $p as F0AvatarDate,
  jm as F0AvatarEmoji,
  $m as F0AvatarFile,
  Uo as F0AvatarIcon,
  Wp as F0AvatarList,
  ns as F0AvatarModule,
  Wm as F0AvatarPerson,
  Gm as F0AvatarTeam,
  rm as F0BigNumber,
  nm as F0Box,
  Ge as F0Button,
  Vm as F0ButtonDropdown,
  Zm as F0ButtonToggle,
  Gp as F0Card,
  Xo as F0Checkbox,
  hm as F0ChipList,
  ps as F0DatePicker,
  Um as F0Dialog,
  qm as F0DialogContext,
  Ym as F0DialogProvider,
  Km as F0EventCatcherProvider,
  nh as F0FilterPickerContent,
  ym as F0Form,
  bm as F0GridStack,
  hg as F0HILActionConfirmation,
  wf as F0Heading,
  An as F0Icon,
  Yo as F0Link,
  Xm as F0MessageSources,
  Jm as F0OneIcon,
  Qm as F0OneSwitch,
  Cm as F0Provider,
  Rt as F0Select,
  xm as F0TableOfContentPopover,
  Vp as F0TagAlert,
  fl as F0TagBalance,
  Zp as F0TagCompany,
  Up as F0TagDot,
  qp as F0TagList,
  Yp as F0TagPerson,
  da as F0TagRaw,
  Dl as F0TagStatus,
  Kp as F0TagTeam,
  ks as F0Text,
  ep as F0Thinking,
  tp as FullscreenChatContext,
  rp as GROUP_ID_SYMBOL,
  np as H1,
  ip as H2,
  sp as H3,
  Uf as HomeLayout,
  op as Hr,
  ap as Image,
  Gf as Layout,
  lp as Li,
  Xf as LineChart,
  cp as Ol,
  dp as OneFilterPicker,
  up as P,
  Jf as PieChart,
  hp as Pre,
  Al as PrivacyModeProvider,
  Do as ProductBlankslate,
  Xp as ProductCard,
  wm as ProductModal,
  Of as ProductWidget,
  em as ProgressBarChart,
  Vf as StandardLayout,
  fp as Strong,
  mp as Table,
  Jp as Tag,
  Qp as TagCounter,
  pp as Td,
  gp as Th,
  Zf as TwoColumnLayout,
  vp as Ul,
  gs as UpsellRequestResponseDialog,
  Mf as UpsellingBanner,
  vs as UpsellingButton,
  _m as UpsellingPopover,
  Qf as VerticalBarChart,
  fg as actionItemStatuses,
  mg as aiTranslations,
  $f as avatarVariants,
  yp as buildTranslations,
  am as buttonDropdownSizes,
  om as buttonDropdownVariants,
  sm as buttonSizes,
  lm as buttonToggleSizes,
  cm as buttonToggleVariants,
  im as buttonVariants,
  eg as cardImageFits,
  tg as cardImageSizes,
  rg as createAtlaskitDriver,
  bp as createDataSourceDefinition,
  Jl as createPageLayoutBlock,
  Ql as createPageLayoutBlockGroup,
  Em as dataCollectionLocalStorageHandler,
  fm as datepickerSizes,
  yg as defaultTranslations,
  xp as downloadTableAsExcel,
  en as evaluateRenderIf,
  De as experimental,
  pm as f0FormField,
  wp as f0MarkdownRenderers,
  Pr as generateAnchorId,
  _p as getAnimationVariants,
  Cp as getDataSourcePaginationType,
  Ep as getEmojiLabel,
  qn as getF0Config,
  vm as getSchemaDefinition,
  gm as hasF0Config,
  sh as inferFieldType,
  kp as isInfiniteScrollPagination,
  Sp as isPageBasedPagination,
  ne as isZodType,
  dm as linkVariants,
  Rp as modules,
  pg as oneIconSizes,
  ng as predefinedPresets,
  ig as selectSizes,
  um as tagDotColors,
  Be as unwrapZodSchema,
  Np as useAiChat,
  gg as useAiChatTranslations,
  Dp as useData,
  Tp as useDataSource,
  Ap as useDefaultCopilotActions,
  sg as useDndEvents,
  og as useDraggable,
  ag as useDroppableList,
  Op as useEmojiConfetti,
  Mp as useF0Dialog,
  Lp as useGroups,
  zp as useMessageSourcesAction,
  Ip as useOrchestratorThinkingAction,
  lg as usePrivacyMode,
  Pp as useReducedMotion,
  gf as useSchemaDefinition,
  Bp as useSelectable,
  Fp as useXRay
};
