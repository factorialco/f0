import { D as K, G as Qe, M as as, N as It, Q as Br, R as co, V as uo, W as os, X as Ke, u as Ht, Y as Fr, Z as ho, _ as Nn, $ as fo, a0 as mo, a1 as Re, a2 as ze, a3 as po, a4 as go, a5 as ls, a6 as vo, a7 as Rn, a8 as cs, a9 as ds, aa as us, ab as hs, ac as fs, ad as ms, ae as yo, af as bo, ag as xo, ah as wo, ai as ps, J as Te, aj as _o, ak as Co, al as ko, am as Eo, an as So, ao as fi, ap as Do, aq as No, ar as gs, as as Ro, at as At, au as To, av as Ao, aw as Oo, ax as Io, ay as Mo, az as Po, aA as zo, aB as Lo, aC as Bo, aD as Fo, aE as Ho, aF as vs, aG as jo, aH as $o, aI as Wo, aJ as Go, aK as ys, aL as Hr, aM as Vo, aN as Zo, aO as Uo, aP as qo, aQ as bs, aR as _r, aS as xs, aT as Yo, aU as Ko, I as Xo, aV as Jo, aW as Qo, aX as el, aY as tl } from "./F0AiChat-TSHfeyOg.js";
import { A as Cp, bc as kp, B as Ep, C as Sp, E as Dp, br as Np, h as Rp, F as Tp, a as Ap, x as Op, i as Ip, b as Mp, aZ as Pp, a_ as zp, a$ as Lp, b0 as Bp, b2 as Fp, b3 as Hp, b4 as jp, b5 as $p, b6 as Wp, b7 as Gp, b8 as Vp, b7 as Zp, b8 as Up, bn as qp, s as Yp, t as Kp, v as Xp, bb as Jp, w as Qp, c as eg, bd as tg, n as ng, o as rg, p as ig, H as sg, k as ag, L as og, O as lg, ba as cg, q as dg, P as ug, S as hg, T as fg, l as mg, m as pg, U as gg, bo as vg, bi as yg, r as bg, j as xg, bl as wg, bh as _g, bs as Cg, bg as kg, bf as Eg, b1 as Sg, d as Dg, be as Ng, bj as Rg, e as Tg, bt as Ag, b9 as Og, b9 as Ig, bk as Mg, g as Pg, f as zg, bq as Lg, bm as Bg, bp as Fg } from "./F0AiChat-TSHfeyOg.js";
import { jsx as h, jsxs as I, Fragment as yt } from "react/jsx-runtime";
import U, { forwardRef as xe, useRef as B, useImperativeHandle as nl, Children as Tn, createContext as Le, useContext as Ae, useState as H, useMemo as P, useEffect as j, useCallback as V, useLayoutEffect as Cr, createElement as mi, isValidElement as ws, Fragment as _s, memo as rl, useReducer as il, cloneElement as sl, PureComponent as al } from "react";
import { createPortal as Kn, unstable_batchedUpdates as _n } from "react-dom";
import { L as Cs, C as ol, i as ks, D as ll, S as pi, a as cl, f as ur, b as Yt, c as dl, A as ul, d as Cn, e as Es, E as hl, g as Sn, h as fl, j as ml, k as pl, l as Nt, m as Ss, u as gl, G as vl, n as yl, o as gi, p as bl, q as Ds, r as xl, B as Ns, X as Rs, Y as kr, s as wl, t as Ts, v as _l, w as Cl, x as kl, y as El, z as Sl, F as Dl, H as Nl, I as Rl, J as vi, K as Tl, M as Xt, N as hr, O as Al, P as Ol, Q as Il, R as Ml, T as Pl, U as zl, V as Ll, W as Bl, Z as Fl, _ as Hl, $ as jl, a0 as yi, a1 as $l, a2 as jr, a3 as As, a4 as Wl, a5 as Gl, a6 as Vl, a7 as $r, a8 as bi, a9 as Zl, aa as Ul, ab as ql, ac as Yl, ad as Kl, ae as Xl, af as Jl, ag as Ql, ah as ec, ai as Os, aj as tc, ak as nc, al as Is, am as xi, an as Ms, ao as rc, ap as ic, aq as rn, ar as sc, as as ac, at as oc } from "./DataCollectionStorageProvider-CkV0l4fG.js";
import { aK as jg, au as $g, av as Wg, ay as Gg, aC as Vg, aD as Zg, aF as Ug, aG as qg, aH as Yg, aI as Kg, aB as Xg, aE as Jg, aw as Qg, ax as ev, aJ as tv, az as nv, aA as rv, aL as iv, aM as sv, aN as av, aO as ov } from "./DataCollectionStorageProvider-CkV0l4fG.js";
import { A as cv, F as dv, c as uv, b as hv, a as fv, o as mv, u as pv } from "./F0HILActionConfirmation-B_Q5LF58.js";
import { defaultTranslations as vv } from "./i18n-provider-defaults.js";
import './f0.css';const lc = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, cc = xe(function({ widgets: e, children: t }, r) {
  const i = B(null);
  nl(r, () => i.current);
  const s = Tn.toArray(e).filter((a) => !!a).map((a, o) => h("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: a
  }, o));
  return h(Cs, {
    layout: "home",
    children: I("div", {
      ref: i,
      className: "@container",
      children: [I("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [h(ol, {
          columns: lc,
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
}), dc = Qe({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Ps = U.forwardRef(({ children: n, variant: e, className: t, ...r }, i) => h(Cs, {
  layout: "standard",
  children: h("section", {
    ref: i,
    className: K("relative flex-1 overflow-auto", t),
    ...r,
    children: h("div", {
      className: K(dc({
        variant: e
      })),
      children: n
    })
  })
}));
Ps.displayName = "StandardLayout";
const uc = xe(function({ children: e, sideContent: t, mainColumnPosition: r = "left", sticky: i = !1 }, s) {
  return h("div", {
    ref: s,
    className: "h-full",
    children: I("div", {
      className: K("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", i && "md:sticky md:top-0 md:max-h-full"),
      children: [h("main", {
        className: K("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), h(hc, {
        sticky: i,
        className: K("order-1", r === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), hc = ({ children: n, className: e }) => h("aside", {
  className: K("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: n
}), zs = Le(null);
function Ls() {
  const n = Ae(zs);
  if (!n)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return n;
}
function fc(n) {
  const { content: e, ...t } = n;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function Rt(n) {
  const e = fc(n);
  return n.subGridOpts?.children && (e.subGridOpts = {
    ...n.subGridOpts,
    children: n.subGridOpts.children.map(
      (t) => Rt(t)
    )
  }), e;
}
const mc = ["noMove", "noResize", "locked", "w", "h", "x", "y"], dt = 200;
function pc(n) {
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
function gc({ children: n, options: e, onResizeStop: t, onChange: r, widgets: i }) {
  const [s, a] = H(null), o = B(null), l = B(!1), c = P(() => ({
    ...e,
    children: (i || []).map((C) => Rt(C))
  }), [e, i]), [d, u] = H(() => {
    const C = /* @__PURE__ */ new Map(), w = i || [], y = (_) => {
      _.id && _.content && C.set(_.id, _.content), _.subGridOpts?.children && _.subGridOpts.children.forEach((x) => {
        y(x);
      });
    };
    return w.forEach((_) => {
      y(_);
    }), C;
  }), f = B(d);
  j(() => {
    f.current = d;
  }, [d]);
  const [m, p] = H(() => {
    const C = /* @__PURE__ */ new Map(), w = i || [], y = (_) => {
      _.id && _._originalContent !== void 0 && C.set(_.id, _._originalContent), _.subGridOpts?.children && _.subGridOpts.children.forEach((x) => {
        y(x);
      });
    };
    return w.forEach((_) => {
      y(_);
    }), C;
  }), g = B(m);
  j(() => {
    g.current = m;
  }, [m]);
  const [b, E] = H(() => {
    const C = /* @__PURE__ */ new Map(), w = i || [], y = (_) => {
      if (_.id) {
        const x = Rt(_);
        C.set(_.id, x);
      }
      _.subGridOpts?.children && _.subGridOpts.children.forEach((x) => {
        y(x);
      });
    };
    return w.forEach((_) => {
      y(_);
    }), C;
  });
  as(() => {
    if (!s) return;
    const C = s.save();
    if (!Array.isArray(C))
      return;
    const w = C.map((T) => T.id), y = i || [], _ = y.map((T) => T.id), x = y.filter((T) => !w.includes(T.id));
    x.length > 0 && (x.forEach((T) => {
      T.content && f.current.set(T.id, T.content), T._originalContent !== void 0 && g.current.set(T.id, T._originalContent);
    }), x.forEach((T) => {
      const k = Rt(T);
      s.addWidget(k);
    }), E((T) => {
      const k = new Map(T);
      return x.forEach((R) => {
        const O = Rt(R);
        k.set(R.id, O);
      }), k;
    }), u((T) => {
      const k = new Map(T);
      return x.forEach((R) => {
        R.content && k.set(R.id, R.content);
      }), k;
    }), p((T) => {
      const k = new Map(T);
      return x.forEach((R) => {
        R._originalContent !== void 0 && k.set(R.id, R._originalContent);
      }), k;
    }));
    const D = C.filter((T) => !_.includes(T.id));
    if (D.length > 0) {
      const T = D.map((k) => k.id).filter(Boolean);
      T.forEach((k) => {
        setTimeout(() => {
          f.current.delete(k), g.current.delete(k);
        }, dt);
      }), D.forEach((k) => {
        const R = s.el.querySelector(`[gs-id="${k.id}"]`);
        R && setTimeout(() => {
          s.removeWidget(R, !0);
        }, dt);
      }), E((k) => {
        const R = new Map(k);
        return T.forEach((O) => {
          setTimeout(() => {
            R.delete(O);
          }, dt);
        }), R;
      }), u((k) => {
        const R = new Map(k);
        return T.forEach((O) => {
          if (R.get(O)) {
            const oe = s.el.querySelector(`[gs-id="${O}"] .grid-stack-item-content`);
            let le = "";
            oe && (le = pc(oe)), R.set(O, h(It.div, {
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
                  duration: dt / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: dt / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: dt / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: le
              }
            }));
          }
          setTimeout(() => {
            R.delete(O);
          }, dt);
        }), R;
      }), p((k) => {
        const R = new Map(k);
        return T.forEach((O) => {
          setTimeout(() => {
            R.delete(O);
          }, dt);
        }), R;
      });
    }
    const A = y.filter((T) => w.includes(T.id));
    if (A.length > 0) {
      const T = [];
      A.forEach((k) => {
        const R = C.find((Z) => Z.id === k.id);
        if (!R)
          return;
        const O = mc.filter((Z) => R[Z] !== k[Z]);
        if (O.length > 0) {
          const Z = {}, oe = ["w", "h", "x", "y"], le = ["noMove", "noResize", "locked"], re = O.filter((te) => oe.includes(te)), ne = O.filter((te) => le.includes(te));
          if (re.length > 0 && ne.length > 0 && re.length + ne.length === O.length ? ne.forEach((te) => {
            const ve = k[te];
            ve !== void 0 && (Z[te] = ve);
          }) : O.forEach((te) => {
            const ve = k[te];
            ve !== void 0 && (Z[te] = ve);
          }), Object.keys(Z).length > 0) {
            const te = s.el.querySelector(`[gs-id="${k.id}"]`);
            te && T.push({
              id: k.id,
              element: te,
              updateOptions: Z
            });
          }
        }
      }), A.forEach((k) => {
        k.content && f.current.set(k.id, k.content), k._originalContent !== void 0 && g.current.set(k.id, k._originalContent);
      }), T.forEach(({ element: k, updateOptions: R }) => {
        try {
          s.update(k, R);
        } catch (O) {
          console.warn("Error updating widget:", O);
        }
      }), E((k) => {
        const R = new Map(k);
        return A.forEach((O) => {
          const Z = Rt(O);
          R.set(O.id, Z);
        }), R;
      }), u((k) => {
        const R = new Map(k);
        return A.forEach((O) => {
          O.content && R.set(O.id, O.content);
        }), R;
      }), p((k) => {
        const R = new Map(k);
        return A.forEach((O) => {
          O._originalContent !== void 0 && R.set(O.id, O._originalContent);
        }), R;
      });
    }
    l.current || (l.current = !0);
  }, [i]), j(() => {
    if (!s || !c.handle) return;
    s.opts && (s.opts.handle = c.handle);
    const C = setTimeout(() => {
      if (s && s.el && c.handle && s.el.querySelectorAll(c.handle).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(C);
  }, [s, c.handle, c.children]);
  const S = V(() => {
    if (!s)
      return;
    const C = s.save();
    if (Array.isArray(C)) {
      const w = C.map((y) => {
        const _ = y.id;
        if (!_) return null;
        const x = f.current.get(_), D = g.current.get(_), A = y;
        return {
          ...y,
          id: _,
          w: y.w ?? 1,
          h: y.h ?? 1,
          x: y.x ?? 0,
          y: y.y ?? 0,
          meta: A.meta,
          _originalContent: D,
          content: x ?? h("div", {
            children: "No content"
          })
        };
      }).filter((y) => y !== null);
      r?.(w);
    }
  }, [s]);
  return j(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const C = (w, y) => {
      t?.(w, y);
    };
    try {
      s.on("resizestop", C), s.on("change added removed", S);
    } catch (w) {
      console.error("Error attaching GridStack event listeners:", w);
      return;
    }
    return () => {
      const w = o.current;
      if (w && w.el)
        try {
          w.off("resizestop"), w.off("change added removed");
        } catch (y) {
          console.warn("Error cleaning up GridStack event listeners:", y);
        }
    };
  }, [s, t, S]), j(() => {
    o.current = s;
  }, [s]), j(() => {
    s && s.el && s.el.parentElement && l.current && S();
  }, [s]), h(zs.Provider, {
    value: {
      options: c,
      gridStack: s,
      _gridStack: {
        value: s,
        set: a
      },
      _rawWidgetMetaMap: {
        value: b,
        set: E
      },
      _reactContentMap: {
        value: d,
        set: u
      }
    },
    children: n
  });
}
const Bs = Le(null);
function vc() {
  const n = Ae(Bs);
  if (!n)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return n;
}
const yc = Le(null);
function bc() {
  const { _reactContentMap: n } = Ls(), { getWidgetContainer: e } = vc();
  return h(yt, {
    children: Array.from(n.value.entries()).map(([t, r]) => {
      const i = e(t);
      return i ? h(yc.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: r && Kn(r, i)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function xc(n, e, t, r, i) {
  const s = (...a) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + i + " and has been replaced with `" + r + "`. It will be **removed** in a future release"), e.apply(n, a));
  return s.prototype = e.prototype, s;
}
class v {
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
    return v.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
        e[i] === null || e[i] === void 0 ? e[i] = r[i] : typeof r[i] == "object" && typeof e[i] == "object" && v.defaults(e[i], r[i]);
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
        r[0] === "_" || i === s ? delete e[r] : i && typeof i == "object" && s !== void 0 && (v.removeInternalAndSame(i, s), Object.keys(i).length || delete e[r]);
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : v.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, r) {
    const i = v.getScrollElement(e);
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
    const i = v.getScrollElement(t), s = i.clientHeight, a = i === v.getScrollElement() ? 0 : i.getBoundingClientRect().top, o = e.clientY - a, l = o < r, c = o > s - r;
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], r = v.clone(e);
    for (const i in r)
      r.hasOwnProperty(i) && typeof r[i] == "object" && i.substring(0, 2) !== "__" && !t.find((s) => s === i) && (r[i] = v.cloneDeep(e[i]));
    return r;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let r;
    typeof t == "string" ? r = v.getElement(t) : r = t, r && r.appendChild(e);
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
    v.addElStyles(t, {
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
class it {
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
        c = this._loading && v.samePos(e, d) ? !0 : this.moveNode(e, d), (r.locked || this._loading) && c ? v.copyPos(t, e) : !r.locked && c && i.pack && (this._packNodes(), t.y = r.y + r.h, v.copyPos(e, t)), a = a || c;
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
    return this.nodes.find((a) => a._id !== i && a._id !== s && v.isIntercepted(a, t));
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
    return this.nodes.filter((a) => a._id !== i && a._id !== s && v.isIntercepted(a, t));
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
      const f = Math.min(u, d);
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
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (i = v.isTouching(e, t)))
      return r();
    if (i !== !1) {
      if (e.w === t.w && e.x === t.x && (i || (i = v.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return r();
      }
      if (i !== !1) {
        if (e.h === t.h && e.y === t.y && (i || (i = v.isTouching(e, t)))) {
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
    return this.nodes = v.sort(this.nodes, e), this;
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
    e._id = e._id ?? it._idSeq++;
    const r = e.id;
    if (r) {
      let s = 1;
      for (; this.nodes.find((a) => a.id === e.id && a !== e); )
        e.id = r + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const i = { x: 0, y: 0, w: 1, h: 1 };
    return v.defaults(e, i), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, v.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = i.x, e.autoPosition = !0), isNaN(e.y) && (e.y = i.y, e.autoPosition = !0), isNaN(e.w) && (e.w = i.w), isNaN(e.h) && (e.h = i.h), this.nodeBoundFix(e, t), e;
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
    const r = e._orig || v.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), v.samePos(e, r) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !v.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = v.copyPos({}, e), delete e._dirty;
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
      !e._orig || v.samePos(e, e._orig) || (v.copyPos(e, e._orig), e._dirty = !0);
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
      t.find((u) => v.isIntercepted(d, u)) || ((e.x !== l || e.y !== c) && (e._dirty = !0), e.x = l, e.y = c, delete e.autoPosition, a = !0);
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
    const i = new it({
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
      o && (v.copyPos(o, a), o._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new it({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((i) => ({ ...i }))
    }), r = { ...e };
    return this.cleanupNode(r), delete r.el, delete r._id, delete r.content, delete r.grid, t.addNode(r), t.getRow() <= this.maxRow ? (e._willFitPos = v.copyPos({}, r), !0) : !1;
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
    const i = e.w !== t.w || e.h !== t.h, s = v.copyPos({}, e, !0);
    if (v.copyPos(s, t), this.nodeBoundFix(s, i), v.copyPos(t, s), !t.forceCollide && v.samePos(e, t))
      return !1;
    const a = v.copyPos({}, e), o = this.collideAll(e, s, t.skip);
    let l = !0;
    if (o.length) {
      const c = e._moving && !t.nested;
      let d = c ? this.directionCollideCoverage(e, t, o) : o[0];
      if (c && d && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = v.areaIntercept(t.rect, d._rect), f = v.area(t.rect), m = v.area(d._rect);
        u / (f < m ? f : m) > 0.8 && (d.grid.makeSubGrid(d.el, void 0, e), d = void 0);
      }
      d ? l = !this._fixCollisions(e, s, d, t) : (l = !1, r && delete t.pack);
    }
    return l && !v.samePos(e, s) && (e._dirty = !0, v.copyPos(e, s)), t.pack && this._packNodes()._notify(), !v.samePos(e, a);
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
      v.removeInternalForSave(c, !e), t && t(o, c), a.push(c);
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
    let s = [], a = i ? this.nodes : v.sort(this.nodes, -1);
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
      s = v.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((o) => {
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
        s._id = o?._id ?? it._idSeq++;
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
    e._id = e._id ?? it._idSeq++;
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
it._idSeq = 0;
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
class $ {
}
const $e = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class Xe {
}
function An(n, e) {
  n.touches.length > 1 || (n.cancelable && n.preventDefault(), v.simulateMouseEvent(n.changedTouches[0], e));
}
function Fs(n, e) {
  n.cancelable && n.preventDefault(), v.simulateMouseEvent(n, e);
}
function On(n) {
  Xe.touchHandled || (Xe.touchHandled = !0, An(n, "mousedown"));
}
function In(n) {
  Xe.touchHandled && An(n, "mousemove");
}
function Mn(n) {
  if (!Xe.touchHandled)
    return;
  Xe.pointerLeaveTimeout && (window.clearTimeout(Xe.pointerLeaveTimeout), delete Xe.pointerLeaveTimeout);
  const e = !!$.dragElement;
  An(n, "mouseup"), e || An(n, "click"), Xe.touchHandled = !1;
}
function Pn(n) {
  n.pointerType !== "mouse" && n.target.releasePointerCapture(n.pointerId);
}
function wi(n) {
  $.dragElement && n.pointerType !== "mouse" && Fs(n, "mouseenter");
}
function _i(n) {
  $.dragElement && n.pointerType !== "mouse" && (Xe.pointerLeaveTimeout = window.setTimeout(() => {
    delete Xe.pointerLeaveTimeout, Fs(n, "mouseleave");
  }, 10));
}
class Xn {
  constructor(e, t, r) {
    this.host = e, this.dir = t, this.option = r, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Xn.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), $e && (this.el.addEventListener("touchstart", On), this.el.addEventListener("pointerdown", Pn)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), $e && (this.el.removeEventListener("touchstart", On), this.el.removeEventListener("pointerdown", Pn)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), $e && (this.el.addEventListener("touchmove", In), this.el.addEventListener("touchend", Mn)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), $e && (this.el.removeEventListener("touchmove", In), this.el.removeEventListener("touchend", Mn)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
Xn.prefix = "ui-resizable-";
class Wr {
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
class sn extends Wr {
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
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), $.overResizeElement === this && delete $.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    $.overResizeElement || $.dragElement || ($.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    $.overResizeElement === this && (delete $.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Xn(this.el, e, {
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
    this.sizeToContent = v.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = v.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = v.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const r = v.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(r, this._ui()), this.triggerEvent("resize", r), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = v.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = sn._originStyleProp.map((r) => this.el.style[r]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = v.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return sn._originStyleProp.forEach((e, t) => {
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
sn._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const wc = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class an extends Wr {
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
      e.addEventListener("mousedown", this._mouseDown), $e && (e.addEventListener("touchstart", On), e.addEventListener("pointerdown", Pn));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), $e && (t.removeEventListener("touchstart", On), t.removeEventListener("pointerdown", Pn));
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
    if (!$.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(wc) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete $.dragElement, delete $.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), $e && (e.currentTarget.addEventListener("touchmove", In), e.currentTarget.addEventListener("touchend", Mn)), e.preventDefault(), document.activeElement && document.activeElement.blur(), $.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = v.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), $.pauseDrag) {
        const r = Number.isInteger($.pauseDrag) ? $.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), r);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, $.dragElement = this;
      const r = this.el.gridstackNode?.grid;
      r ? $.dropElement = r.el.ddElement.ddDroppable : delete $.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = v.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = v.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), $e && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", In, !0), e.currentTarget.removeEventListener("touchend", Mn, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), $.dropElement?.el === this.el.parentElement && delete $.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = v.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), $.dropElement && $.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete $.dragElement, delete $.dropElement, delete $.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, r = t?.grid || $.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), r?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && r && (e.key === "r" || e.key === "R")) {
      if (!v.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, r.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", v.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = v.cloneNode(this.el)), e.parentElement || v.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = an.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", an.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = r, 50);
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
an.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class _c extends Wr {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), $e && (this.el.addEventListener("pointerenter", wi), this.el.addEventListener("pointerleave", _i)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), $e && (this.el.removeEventListener("pointerenter", wi), this.el.removeEventListener("pointerleave", _i)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!$.dragElement || !this._canDrop($.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), $.dropElement && $.dropElement !== this && $.dropElement._mouseLeave(e, !0), $.dropElement = this;
    const t = v.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui($.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!$.dragElement || $.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const r = v.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(r, this._ui($.dragElement)), this.triggerEvent("dropout", r), $.dropElement === this && (delete $.dropElement, !t)) {
      let i, s = this.el.parentElement;
      for (; !i && s; )
        i = s.ddElement?.ddDroppable, s = s.parentElement;
      i && i._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = v.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui($.dragElement)), this.triggerEvent("drop", t);
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
class Gr {
  static init(e) {
    return e.ddElement || (e.ddElement = new Gr(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new an(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new sn(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new _c(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Cc {
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
      r(s, $.dragElement ? $.dragElement.el : s.target, $.dragElement ? $.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((r) => r.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const r = e.gridstack || t !== "destroy" && t !== "disable", i = v.getElements(e);
    return i.length ? i.map((a) => a.ddElement || (r ? Gr.init(a) : null)).filter((a) => a) : [];
  }
}
const be = new Cc();
class F {
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
    const r = F.getGridElement(t);
    return r ? (r.gridstack || (r.gridstack = new F(r, v.cloneDeep(e))), r.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (F.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new F(i, v.cloneDeep(e))), r.push(i.gridstack);
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
    return (!e.classList.contains("grid-stack") || F.addRemoveCB) && (F.addRemoveCB ? r = F.addRemoveCB(e, t, !0, !0) : r = v.createDiv(["grid-stack", t.class], e)), F.init(t, r);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    F.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = v.createDiv([this.opts.placeholderClass, Ne.itemClass, this.opts.itemClass]);
      const e = v.createDiv(["placeholder-content"], this._placeholder);
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
    const r = v.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const i = t.columnOpts;
    if (i) {
      const c = i.breakpoints;
      !i.columnWidth && !c?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, c?.length > 1 && c.sort((d, u) => (u.w || 0) - (d.w || 0)));
    }
    const s = {
      ...v.cloneDeep(Ne),
      column: v.toNumber(e.getAttribute("gs-column")) || Ne.column,
      minRow: r || v.toNumber(e.getAttribute("gs-min-row")) || Ne.minRow,
      maxRow: r || v.toNumber(e.getAttribute("gs-max-row")) || Ne.maxRow,
      staticGrid: v.toBool(e.getAttribute("gs-static")) || Ne.staticGrid,
      sizeToContent: v.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Ne.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Ne.removableOptions.accept,
        decline: Ne.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = v.toBool(e.getAttribute("gs-animate"))), t = v.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + Ne.itemClass)?.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Ne.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const c = t.cellHeight;
      delete t.cellHeight, this.cellHeight(c);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = $e), this._setStaticClass();
    const l = t.engineClass || F.engineClass || it;
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
    this.setAnimation(), t.subGridDynamic && !$.pauseDrag && ($.pauseDrag = !0), t.draggable?.pause !== void 0 && ($.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (r.grid = this, r.el ? t = r.el : F.addRemoveCB ? t = F.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(r), !t)
      return;
    if (r = t.gridstackNode, r && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === r._id))
      return t;
    const i = this._readAttr(t);
    return v.defaults(e, i), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = v.createDiv(["grid-stack-item", this.opts.itemClass]), r = v.createDiv(["grid-stack-item-content"], t);
    return v.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([i]) => {
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, F.renderCB(r, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : F.renderCB(r, e), t;
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
    t = v.cloneDeep({
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
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, v.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), F.addRemoveCB ? d = F.addRemoveCB(this.el, u, !0, !1) : (d = v.createDiv(["grid-stack-item"]), d.appendChild(c), c = v.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), r) {
      const m = l ? t.column : s.w, p = s.h + r.h, g = s.el.style;
      g.transition = "none", this.update(s.el, { w: m, h: p }), setTimeout(() => g.transition = null);
    }
    const f = s.subGrid = F.addGrid(c, t);
    return r?._moving && (f._isTemp = !0), l && (f._autoColumn = !0), i && f.makeWidget(d, u), r && (r._moving ? window.setTimeout(() => v.simulateMouseEvent(r._event, "mouseenter", f.el), 0) : f.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), f;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((r) => {
      r.x += this.parentGridNode.x, r.y += this.parentGridNode.y, t.makeWidget(r.el, r);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => v.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, r = F.saveCB, i) {
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
      const a = v.cloneDeep(this.opts);
      a.marginBottom === a.marginTop && a.marginRight === a.marginLeft && a.marginTop === a.marginRight && (a.margin = a.marginTop, delete a.marginTop, delete a.marginRight, delete a.marginBottom, delete a.marginLeft), a.rtl === (this.el.style.direction === "rtl") && (a.rtl = "auto"), this._isAutoCellHeight && (a.cellHeight = "auto"), this._autoColumn && (a.column = "auto");
      const o = a._alwaysShowResizeHandle;
      return delete a._alwaysShowResizeHandle, o !== void 0 ? a.alwaysShowResizeHandle = o : delete a.alwaysShowResizeHandle, v.removeInternalAndSame(a, Ne), a.children = s, a;
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
  load(e, t = F.addRemoveCB || !0) {
    e = v.cloneDeep(e);
    const r = this.getColumn();
    e.forEach((d) => {
      d.w = d.w || d.minW || 1, d.h = d.h || d.minH || 1;
    }), e = v.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((d) => {
      i = Math.max(i, (d.x || 0) + d.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > r && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, r, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = F.addRemoveCB;
    typeof t == "function" && (F.addRemoveCB = t);
    const a = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, l = o && this.opts.animate;
    l && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      v.find(e, u.id) || (F.addRemoveCB && F.addRemoveCB(this.el, u, !1, !1), a.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const c = [];
    return this.engine.nodes = this.engine.nodes.filter((d) => v.find(e, d.id) ? (c.push(d), !1) : !0), e.forEach((d) => {
      const u = v.find(c, d.id);
      if (u) {
        if (v.shouldSizeToContent(u) && (d.h = u.h), this.engine.nodeBoundFix(d), (d.autoPosition || d.x === void 0 || d.y === void 0) && (d.w = d.w || u.w, d.h = d.h || u.h, this.engine.findEmptyPosition(d)), this.engine.nodes.push(u), v.samePos(u, d) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...d, forceCollide: !0 }), v.copyPos(d, u)), this.update(u.el, d), d.subGridOpts?.children) {
          const f = u.el.querySelector(".grid-stack");
          f && f.gridstack && f.gridstack.load(d.subGridOpts.children);
        }
      } else t && this.addWidget(d);
    }), delete this.engine._loading, this.engine.removedNodes = a, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? F.addRemoveCB = s : delete F.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const i = v.toNumber(t.getAttribute("gs-h")) || 1;
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
    const t = v.parseHeight(e);
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
    const r = F.getElement(e);
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
    return e ? (F.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((a) => i === a.el)), s && (t && F.addRemoveCB && F.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, r), t && i.parentElement && i.remove());
    }), r && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((r) => {
      e && F.addRemoveCB && F.addRemoveCB(this.el, r, !1, !1), delete r.el.gridstackNode, this.opts.staticGrid || this._removeDD(r.el);
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
    return F.getElements(e).forEach((r) => {
      const i = r?.gridstackNode;
      if (!i)
        return;
      const s = { ...v.copyPos({}, i), ...v.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const a = ["x", "y", "w", "h"];
      let o;
      if (a.some((d) => s[d] !== void 0 && s[d] !== i[d]) && (o = {}, a.forEach((d) => {
        o[d] = s[d] !== void 0 ? s[d] : i[d], delete s[d];
      })), !o && (s.minW || s.minH || s.maxW || s.maxH) && (o = {}), s.content !== void 0) {
        const d = r.querySelector(".grid-stack-item-content");
        d && d.textContent !== s.content && (i.content = s.content, F.renderCB(d, s), i.subGrid?.el && (d.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, c = !1;
      for (const d in s)
        d[0] !== "_" && i[d] !== s[d] && (i[d] = s[d], l = !0, c = c || !this.opts.staticGrid && (d === "noResize" || d === "noMove" || d === "locked"));
      if (v.sanitizeMinMax(i), o) {
        const d = o.w !== void 0 && o.w !== i.w;
        this.moveNode(i, o), d && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(d, i), delete i._orig;
      }
      (o || l) && this._writeAttr(r, i), c && this.prepareDragDrop(i.el), F.updateCB && F.updateCB(i);
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
    if (t.resizeToContentParent && (a = e.querySelector(t.resizeToContentParent)), a || (a = e.querySelector(F.resizeToContentParent)), !a)
      return;
    const o = e.clientHeight - a.clientHeight, l = t.h ? t.h * i - o : a.clientHeight;
    let c;
    if (t.subGrid) {
      c = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const f = t.subGrid.el.getBoundingClientRect(), m = e.getBoundingClientRect();
      c += f.top - m.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const f = a.firstElementChild;
        if (!f) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${F.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        c = f.getBoundingClientRect().height || l;
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
    F.resizeToContentCB ? F.resizeToContentCB(e) : this.resizeToContent(e);
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
    return F.getElements(e).forEach((r) => {
      const i = r.gridstackNode;
      if (!v.canBeRotated(i))
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
      const r = v.parseHeight(e);
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
      const s = v.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === i) {
        const a = Math.floor(s.h / r);
        t < a && (t = a);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * r + i), e && v.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, r) {
    r = r || this._readAttr(e), e.gridstackNode = r, r.el = e, r.grid = this, r = this.engine.addNode(r, t), this._writeAttr(e, r), e.classList.add(Ne.itemClass, this.opts.itemClass);
    const i = v.shouldSizeToContent(r);
    return i ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), i && this.resizeToContentCheck(!1, r), v.lazyLoad(r) || this.prepareDragDrop(r.el), this;
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
    r.x = v.toNumber(e.getAttribute("gs-x")), r.y = v.toNumber(e.getAttribute("gs-y")), r.w = v.toNumber(e.getAttribute("gs-w")), r.h = v.toNumber(e.getAttribute("gs-h")), r.autoPosition = v.toBool(e.getAttribute("gs-auto-position")), r.noResize = v.toBool(e.getAttribute("gs-no-resize")), r.noMove = v.toBool(e.getAttribute("gs-no-move")), r.locked = v.toBool(e.getAttribute("gs-locked"));
    const i = e.getAttribute("gs-size-to-content");
    i && (i === "true" || i === "false" ? r.sizeToContent = v.toBool(i) : r.sizeToContent = parseInt(i, 10)), r.id = e.getAttribute("gs-id"), r.maxW = v.toNumber(e.getAttribute("gs-max-w")), r.minW = v.toNumber(e.getAttribute("gs-min-w")), r.maxH = v.toNumber(e.getAttribute("gs-max-h")), r.minH = v.toNumber(e.getAttribute("gs-min-h")), t && (r.w === 1 && e.removeAttribute("gs-w"), r.h === 1 && e.removeAttribute("gs-h"), r.maxW && e.removeAttribute("gs-max-w"), r.minW && e.removeAttribute("gs-min-w"), r.maxH && e.removeAttribute("gs-max-h"), r.minH && e.removeAttribute("gs-min-h"));
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
        v.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((r) => v.shouldSizeToContent(r))) {
        const r = [...this.engine.nodes];
        this.batchUpdate(), r.forEach((i) => {
          v.shouldSizeToContent(i) && this.resizeToContentCBCheck(i.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((r) => r.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = v.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return v.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return v.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return F.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return v.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, r = [];
    typeof this.opts.margin == "string" && (r = this.opts.margin.split(" ")), r.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = r[0], this.opts.marginLeft = this.opts.marginRight = r[1]) : r.length === 4 ? (this.opts.marginTop = r[0], this.opts.marginRight = r[1], this.opts.marginBottom = r[2], this.opts.marginLeft = r[3]) : (e = v.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((a) => {
      this.opts[a] === void 0 ? this.opts[a] = t : (e = v.parseHeight(this.opts[a]), this.opts[a] = e.h, delete this.opts.margin);
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
    t?.pause !== void 0 && ($.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? v.getElements(e, i) : e).forEach((a, o) => {
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
    return this.opts.staticGrid ? this : (F.getElements(e).forEach((r) => {
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
    return this.opts.staticGrid ? this : (F.getElements(e).forEach((r) => {
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && F._itemRemoving(e.el, !1), this.engine.restoreInitial());
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
        const f = a.getBoundingClientRect();
        a.style.left = f.x + (this.dragTransform.xScale - 1) * (i.clientX - f.x) / this.dragTransform.xScale + "px", a.style.top = f.y + (this.dragTransform.yScale - 1) * (i.clientY - f.y) / this.dragTransform.yScale + "px", a.style.transformOrigin = "0px 0px";
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
          o._willFitPos && (v.copyPos(o, o._willFitPos), delete o._willFitPos);
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
      o._temporaryRemoved = !0) : (o.w = l, o.h = c, o._temporaryRemoved = !0), F._itemRemoving(o.el, !1), be.on(s, "drag", r), r(i, s, a), !1;
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
        const f = d.grid;
        f.engine.removeNodeFromLayoutCache(d), f.engine.removedNodes.push(d), f._triggerRemoveEvent()._triggerChangeEvent(), f.parentGridNode && !f.engine.nodes.length && f.opts.subGridDynamic && f.removeAsSubGrid();
      }
      if (!o || (l && (this.engine.cleanupNode(o), o.grid = this), delete o.grid?._isTemp, be.off(s, "drag"), a !== s ? (a.remove(), s = a) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = o.subGrid?.el?.gridstack;
      return v.copyPos(o, this._readAttr(this.placeholder)), v.removePositioningStyles(s), c && (o.content || o.subGridOpts || F.addRemoveCB) ? (delete o.el, s = this.addWidget(o)) : (this._prepareElement(s, !0, o), this.el.appendChild(s), this.resizeToContentCheck(!1, o), u && (u.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, d && d.grid ? d : void 0, o), !1;
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
    return e ? (!this.opts.staticGrid && !be.isDroppable(e) && be.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, r) => F._itemRemoving(r, !0)).on(e, "dropout", (t, r) => F._itemRemoving(r, !1)), this) : this;
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
      const c = (f, m) => {
        this.triggerEvent(f, f.target), o = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, f, m, r, o, l);
      }, d = (f, m) => {
        this._dragOrResize(e, f, m, r, o, l);
      }, u = (f) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete r._moving, delete r._resizing, delete r._event, delete r._lastTried;
        const m = r.w !== r._orig.w, p = f.target;
        if (!(!p.gridstackNode || p.gridstackNode.grid !== this)) {
          if (r.el = p, r._isAboutToRemove) {
            const g = e.gridstackNode.grid;
            g._gsEventHandler[f.type] && g._gsEventHandler[f.type](f, p), g.engine.nodes.push(r), g.removeWidget(e, !0, !0);
          } else
            v.removePositioningStyles(p), r._temporaryRemoved ? (this._writePosAttr(p, r), this.engine.addNode(r)) : this._writePosAttr(p, r), this.triggerEvent(f, p);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), f.type === "resizestop" && (Number.isInteger(r.sizeToContent) && (r.sizeToContent = r.h), this.resizeToContentCheck(m, r));
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
      this.dragTransform = v.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const o = this.placeholder.closest(".grid-stack");
      this.dragTransform = v.getValuesFromTransformedElement(o);
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
    let l, c = this.opts.marginLeft, d = this.opts.marginRight, u = this.opts.marginTop, f = this.opts.marginBottom;
    const m = Math.round(a * 0.1), p = Math.round(s * 0.1);
    if (c = Math.min(c, p), d = Math.min(d, p), u = Math.min(u, m), f = Math.min(f, m), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const b = r.position.top - i._prevYPix;
      i._prevYPix = r.position.top, this.opts.draggable.scroll !== !1 && v.updateScrollPosition(e, r.position, b);
      const E = r.position.left + (r.position.left > i._lastUiPosition.left ? -d : c), S = r.position.top + (r.position.top > i._lastUiPosition.top ? -f : u);
      o.x = Math.round(E / s), o.y = Math.round(S / a);
      const C = this._extraDragRow;
      if (this.engine.collide(i, o)) {
        const w = this.getRow();
        let y = Math.max(0, o.y + i.h - w);
        this.opts.maxRow && w + y > this.opts.maxRow && (y = Math.max(0, this.opts.maxRow - w)), this._extraDragRow = y;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== C && this._updateContainerHeight(), i.x === o.x && i.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (v.updateScrollResize(t, e, a), o.w = Math.round((r.size.width - c) / s), o.h = Math.round((r.size.height - u) / a), i.w === o.w && i.h === o.h) || i._lastTried && i._lastTried.w === o.w && i._lastTried.h === o.h)
        return;
      const b = r.position.left + c, E = r.position.top + u;
      o.x = Math.round(b / s), o.y = Math.round(E / a), l = !0;
    }
    i._event = t, i._lastTried = o;
    const g = {
      x: r.position.left + c,
      y: r.position.top + u,
      w: (r.size ? r.size.width : i.w * s) - c - d,
      h: (r.size ? r.size.height : i.h * a) - u - f
    };
    if (this.engine.moveNodeCheck(i, { ...o, cellWidth: s, cellHeight: a, rect: g, resizing: l })) {
      i._lastUiPosition = r.position, this.engine.cacheRects(s, a, u, d, f, c), delete i._skipDown, l && i.subGrid && i.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
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
    r._isExternal && this.engine.cleanupNode(r), r._sidebarOrig = i, this.opts.removable === !0 && F._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : r._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return xc(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
F.renderCB = (n, e) => {
  n && e?.content && (n.textContent = e.content);
};
F.resizeToContentParent = ".grid-stack-item-content";
F.Utils = v;
F.Engine = it;
F.GDRev = "12.3.2";
const kn = /* @__PURE__ */ new WeakMap();
function kc({ children: n }) {
  const { _gridStack: { value: e, set: t }, options: r } = Ls(), i = B(/* @__PURE__ */ new Map()), s = B(null), a = B(r), o = V((d, u) => {
    if (u.id && u.grid) {
      let f = kn.get(u.grid);
      f || (f = /* @__PURE__ */ new Map(), kn.set(u.grid, f)), f.set(u.id, d), i.current.set(u.id, d);
    }
  }, []), l = V(() => {
    if (s.current) {
      F.renderCB = o;
      const d = F.init(a.current, s.current);
      return d && a.current.handle && d.opts && (d.opts.handle = a.current.handle), d;
    }
    return null;
  }, [o]), c = (d, u) => {
    const { children: f, ...m } = d, { children: p, ...g } = u;
    return ks(m, g);
  };
  return Cr(() => {
    if (!c(r, a.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), kn.delete(e), a.current = r, t(null);
      } catch (d) {
        console.error("Error destroying gridstack", d);
      }
    else e && (a.current = r, r.handle && e.opts && (e.opts.handle = r.handle));
  }, [r, e, t]), Cr(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (d) {
        console.error("Error initializing gridstack", d);
      }
  }, [e, l, t]), h(Bs.Provider, {
    value: P(() => ({
      getWidgetContainer: (d) => {
        if (e) {
          const u = kn.get(e);
          if (u?.has(d))
            return u.get(d) || null;
        }
        return i.current.get(d) || null;
      }
    }), [e]),
    children: h("div", {
      ref: s,
      children: e ? n : null
    })
  });
}
const Vr = ({ options: n, widgets: e, onChange: t, className: r }) => {
  const i = P(() => JSON.stringify(e.map((l) => ({
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
    ...n,
    class: r
  }), [n, i, r]), a = (l, c, d) => {
    let u = d[0], f = 1 / 0;
    for (const m of d) {
      const p = m.w - l, g = m.h - c, b = p * p + g * g;
      b < f && (f = b, u = m);
    }
    return u;
  };
  return h(gc, {
    options: s,
    widgets: e,
    onResizeStop: (l, c) => {
      const d = c.gridstackNode;
      if (!d) return;
      const u = c.gridstackNode?.allowedSizes ?? [];
      if (u.length === 0)
        return;
      const f = a(d.w ?? 1, d.h ?? 1, u ?? []);
      (d.w !== f.w || d.h !== f.h) && d.grid?.update(c, {
        w: f.w,
        h: f.h
      });
    },
    onChange: t,
    children: h(kc, {
      children: h(bc, {})
    })
  });
};
Vr.displayName = "F0GridStack";
const Ec = (n, e, t) => h("div", {
  children: n
}), Jn = ({ widgets: n = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: r = Ec, main: i = !1, deps: s }) => {
  const a = V((y, _, x) => h(It.div, {
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
    children: r(y, _, x)
  }), [r]), o = P(() => ({
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
  }), []), l = (y, _) => {
    if (typeof y.content == "function" && y.deps && _) {
      const x = {};
      return y.deps.forEach((D) => {
        typeof D == "string" && _[D] !== void 0 && (x[D] = _[D]);
      }), y.content(x);
    }
    return typeof y.content == "function" ? null : y.content;
  }, c = (y, _, x) => y.map((D) => {
    const A = l(D, x), T = {
      id: D.id,
      h: D.h ?? 1,
      w: D.w ?? 1,
      allowedSizes: D.availableSizes,
      noMove: !_,
      noResize: !_,
      locked: D.locked,
      meta: D.meta,
      _originalContent: A,
      content: a(A, D.meta, _)
    };
    return D.x !== void 0 && (T.x = D.x), D.y !== void 0 && (T.y = D.y), T;
  }), [d, u] = H(c(n, e)), f = B(e), m = B(n), p = B(!1), g = B(/* @__PURE__ */ new Map()), b = B(n);
  b.current = n;
  const E = B(s), S = P(() => {
    const y = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || n.forEach((_) => {
      if (_.deps && _.deps.length > 0) {
        const x = _.deps.map((D) => typeof D == "string" && s[D] !== void 0 ? s[D] : D).filter((D) => D !== null);
        y.set(_.id, x);
      }
    }), y;
  }, [n, s]), C = V((y) => {
    u(y), p.current || t(y.map((_) => {
      const x = b.current.find((D) => D.id === _.id);
      return {
        id: _.id,
        w: _.w ?? 1,
        h: _.h ?? 1,
        allowedSizes: _.allowedSizes,
        meta: _.meta,
        content: typeof x?.content == "function" ? x.content : _._originalContent,
        x: _.x ?? 0,
        y: _.y ?? 0,
        locked: _.locked,
        deps: x?.deps
      };
    })), p.current = !1;
  }, [t]), w = (y, _) => !y && !_ ? !1 : !y || !_ || y.length !== _.length ? !0 : y.some((x, D) => x !== _[D]);
  return j(() => {
    const y = f.current !== e, _ = m.current !== n, x = E.current !== s && (E.current === void 0 || s === void 0 || Object.keys(E.current).length !== Object.keys(s).length || Object.keys(s).some((k) => E.current?.[k] !== s[k])), D = /* @__PURE__ */ new Map();
    n.forEach((k) => {
      if (k.deps && k.deps.length > 0) {
        const R = g.current.get(k.id), O = S.get(k.id);
        D.set(k.id, w(R, O)), O ? g.current.set(k.id, O) : g.current.delete(k.id);
      }
    });
    const A = new Set(n.map((k) => k.id));
    g.current.forEach((k, R) => {
      A.has(R) || g.current.delete(R);
    });
    const T = Array.from(D.values()).some((k) => k) || x;
    y && !_ && !T ? (p.current = !0, u((k) => k.map((R) => {
      const O = n.find((oe) => oe.id === R.id);
      if (!O)
        return R;
      const Z = l(O, s);
      return {
        ...R,
        noMove: !e,
        noResize: !e,
        locked: O.locked,
        meta: O.meta,
        _originalContent: Z,
        content: a(Z, O.meta, e)
      };
    }))) : (_ || T) && u((k) => {
      const R = new Map(k.map((O) => [O.id, O]));
      return n.map((O) => {
        const Z = R.get(O.id), oe = D.get(O.id) ?? !1;
        let le;
        oe || !Z ? le = l(O, s) : le = Z._originalContent ?? l(O, s);
        const re = {
          id: O.id,
          h: Z?.h ?? O.h ?? 1,
          w: Z?.w ?? O.w ?? 1,
          allowedSizes: O.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: O.locked,
          meta: O.meta,
          _originalContent: le,
          content: a(le, O.meta, e)
        }, ne = Z?.x ?? O.x, te = Z?.y ?? O.y;
        return ne !== void 0 && (re.x = ne), te !== void 0 && (re.y = te), re;
      });
    }), f.current = e, m.current = n, E.current = s;
  }, [n, e, a, S, s]), h(Vr, {
    className: K(i && "h-full flex-1 overflow-auto"),
    options: o,
    onChange: C,
    widgets: d
  });
};
Jn.displayName = "GroupGrid";
Jn.__isPageLayoutGroup = !0;
const Sc = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutBlock = !0, t;
}, Dc = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutGroup = !0, t;
}, Nc = (n, e) => h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: e,
  ...n,
  children: h("path", {
    fill: "currentColor",
    d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
    vectorEffect: "non-scaling-stroke"
  })
}), Hs = xe(Nc), Rc = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], js = xe((n, e) => {
  const t = Rc.reduce((r, i) => {
    const { [i]: s, ...a } = r;
    return a;
  }, n);
  return h(Br, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: n.icon == Hs
  });
});
js.displayName = "AIButton";
const fr = Qe({
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
}), Tc = {
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
}, Zr = xe(({ content: n, variant: e, align: t, className: r, as: i, ellipsis: s, noEllipsisTooltip: a, markdown: o, ...l }, c) => {
  const d = i ?? Tc[e ?? "body"];
  if (s !== void 0)
    return h(co, {
      ref: c,
      lines: typeof s == "number" ? s : 1,
      noTooltip: a,
      tag: d,
      className: K(fr({
        variant: e,
        align: t
      }), r),
      markdown: o,
      ...l,
      children: n
    });
  if (o) {
    const u = uo(n);
    return mi(d, {
      ...l,
      className: K(fr({
        variant: e,
        align: t
      }), r),
      ref: c,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return mi(d, {
    ...l,
    className: K(fr({
      variant: e,
      align: t
    }), r),
    ref: c
  }, n);
});
Zr.displayName = "Text";
const $s = xe((n, e) => h(Zr, {
  ref: e,
  markdown: n.markdown ?? !0,
  ...n
}));
$s.displayName = "F0Text";
const Om = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Ws = ({ title: n, draggable: e = !1, onDragStart: t, onDragEnd: r, isDragging: i = !1, AIButton: s, actions: a, children: o, selected: l = !1 }) => {
  const [c, d] = H(!1), [u, f] = H(!1), m = Ht(), p = (b) => {
    d(b);
  }, g = u || c;
  return j(() => {
    if (!i || !r) return;
    const b = () => {
      r();
    };
    return document.addEventListener("mouseup", b), () => {
      document.removeEventListener("mouseup", b);
    };
  }, [i, r]), I("div", {
    className: K("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && c ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => f(!0),
    onMouseLeave: () => f(!1),
    children: [I("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [I("div", {
        className: K("flex min-w-0 flex-1 items-center", !e && "pl-4", !a && !s && "pr-4"),
        children: [e && h("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: h(Fr, {
            icon: ho,
            size: "xs"
          })
        }), h("div", {
          className: K("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: h($s, {
            variant: "label",
            content: n,
            ellipsis: !0
          })
        })]
      }), h(Nn, {
        children: (s || a) && g && I(It.div, {
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
            children: h(js, {
              size: "sm",
              label: m.ai.ask,
              onClick: s,
              icon: Hs
            })
          }), a && h(fo, {
            items: a,
            open: c,
            onOpenChange: p,
            align: "end",
            children: h(Br, {
              icon: mo,
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
    }), h("div", {
      className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4",
      children: o
    })]
  });
}, Ac = () => I("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [h("div", {
    className: "flex h-12 w-full items-center px-4",
    children: h(Ke, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), I("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [h(Ke, {
      className: "h-1/2 w-full rounded-sm"
    }), h(Ke, {
      className: "h-1/3 w-full rounded-sm"
    }), h(Ke, {
      className: "h-1/5 w-full rounded-sm"
    }), h(Ke, {
      className: "h-1/3 w-full rounded-sm"
    }), h(Ke, {
      className: "h-full w-full rounded-sm"
    }), h(Ke, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
Ws.displayName = "F0Widget";
const Oc = os(Ws, Ac), Ic = ({ children: n, title: e, draggable: t = !1, actions: r, aiButton: i }) => h(Oc, {
  title: e,
  draggable: t,
  actions: r,
  AIButton: i,
  children: n
}), Gs = ({ widgets: n, editMode: e = !1, onChange: t = () => {
}, deps: r, ...i }) => h(Jn, {
  widgets: n,
  editMode: e,
  onChange: t,
  deps: r,
  ...i,
  WidgetWrapper: (s, a, o) => h(Ic, {
    title: a?.title ?? "",
    draggable: o,
    actions: a?.actions,
    aiButton: a?.aiButton,
    children: s
  })
});
Gs.displayName = "Dashboard";
const Mc = Dc("Dashboard", Gs), Im = Re("Dashboard", Mc), Pc = Qe({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), zc = (n) => (n || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), Lc = (n) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(n) ? n.every(e) ? [{
    items: n
  }] : n : [n];
}, Qn = xe(({ children: n, variant: e = "default", className: t, draggable: r = !1, onDragStart: i, onDragEnd: s, onDrop: a, dragId: o, primaryAction: l, ...c }, d) => {
  const u = P(() => Lc(c.actions || []), [c.actions]), f = P(() => u.flatMap((p) => p.items), [u]), m = P(() => f.length > 0 || !!l, [f, l]);
  return I("div", {
    ref: d,
    className: K(Pc({
      variant: e
    }), "relative", t),
    draggable: r,
    onDragStart: i,
    onDragEnd: s,
    onDrop: a,
    "data-drag-id": o,
    ...c,
    children: [m && I("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, f.length > 0 && h(ll, {
        items: zc(u)
      })]
    }), h("div", {
      children: n
    })]
  });
});
Qn.displayName = "Block";
Qn.__isPageLayoutBlock = !0;
const Bc = ({ title: n = "", description: e, titleLevel: t = "h2", children: r, className: i, ...s }) => {
  if (!n) return null;
  const a = t;
  return I(Qn, {
    ...s,
    className: K("space-y-4", i),
    children: [I("div", {
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
        children: n
      }), e && h("p", {
        className: "text-sm text-f1-foreground-secondary",
        children: e
      })]
    }), h("div", {
      className: "flex-1",
      children: r
    })]
  });
}, Fc = Sc("BlockContent", Bc), Hc = (n) => !ws(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutBlock" in n.type, jc = (n) => !ws(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutGroup" in n.type, Vs = (n, e, t) => {
  const r = Tn.toArray(e);
  for (const i of r)
    t.includes("block") && Hc(i) || t.includes("group") && jc(i) || console.warn(
      `${n}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, Ur = xe(({ children: n, onSort: e, ...t }, r) => {
  Vs("GroupLinear", n, ["block"]);
  const [i, s] = H(Tn.toArray(n));
  return j(() => {
    s(Tn.toArray(n));
  }, [n]), j(() => {
    e?.(i);
  }, [i, e]), h("div", {
    ref: r,
    ...t,
    children: i.map((a, o) => h(_s, {
      children: a
    }, o))
  });
});
Ur.displayName = "GroupLinear";
Ur.__isPageLayoutGroup = !0;
function $c() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return P(
    () => (r) => {
      e.forEach((i) => i(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const er = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function jt(n) {
  const e = Object.prototype.toString.call(n);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function qr(n) {
  return "nodeType" in n;
}
function we(n) {
  var e, t;
  return n ? jt(n) ? n : qr(n) && (e = (t = n.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Yr(n) {
  const {
    Document: e
  } = we(n);
  return n instanceof e;
}
function mn(n) {
  return jt(n) ? !1 : n instanceof we(n).HTMLElement;
}
function Zs(n) {
  return n instanceof we(n).SVGElement;
}
function $t(n) {
  return n ? jt(n) ? n.document : qr(n) ? Yr(n) ? n : mn(n) || Zs(n) ? n.ownerDocument : document : document : document;
}
const We = er ? Cr : j;
function tr(n) {
  const e = B(n);
  return We(() => {
    e.current = n;
  }), V(function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
function Wc() {
  const n = B(null), e = V((r, i) => {
    n.current = setInterval(r, i);
  }, []), t = V(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [e, t];
}
function on(n, e) {
  e === void 0 && (e = [n]);
  const t = B(n);
  return We(() => {
    t.current !== n && (t.current = n);
  }, e), t;
}
function pn(n, e) {
  const t = B();
  return P(
    () => {
      const r = n(t.current);
      return t.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function zn(n) {
  const e = tr(n), t = B(null), r = V(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, r];
}
function Ln(n) {
  const e = B();
  return j(() => {
    e.current = n;
  }, [n]), e.current;
}
let mr = {};
function gn(n, e) {
  return P(() => {
    if (e)
      return e;
    const t = mr[n] == null ? 0 : mr[n] + 1;
    return mr[n] = t, n + "-" + t;
  }, [n, e]);
}
function Us(n) {
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
const Ot = /* @__PURE__ */ Us(1), ln = /* @__PURE__ */ Us(-1);
function Gc(n) {
  return "clientX" in n && "clientY" in n;
}
function nr(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: e
  } = we(n.target);
  return e && n instanceof e;
}
function Vc(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: e
  } = we(n.target);
  return e && n instanceof e;
}
function Bn(n) {
  if (Vc(n)) {
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
  return Gc(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const pt = /* @__PURE__ */ Object.freeze({
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
        return [pt.Translate.toString(n), pt.Scale.toString(n)].join(" ");
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
}), Ci = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Zc(n) {
  return n.matches(Ci) ? n : n.querySelector(Ci);
}
const Uc = {
  display: "none"
};
function qc(n) {
  let {
    id: e,
    value: t
  } = n;
  return U.createElement("div", {
    id: e,
    style: Uc
  }, t);
}
function Yc(n) {
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
  return U.createElement("div", {
    id: e,
    style: i,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, t);
}
function Kc() {
  const [n, e] = H("");
  return {
    announce: V((r) => {
      r != null && e(r);
    }, []),
    announcement: n
  };
}
const qs = /* @__PURE__ */ Le(null);
function Xc(n) {
  const e = Ae(qs);
  j(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(n);
  }, [n, e]);
}
function Jc() {
  const [n] = H(() => /* @__PURE__ */ new Set()), e = V((r) => (n.add(r), () => n.delete(r)), [n]);
  return [V((r) => {
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
const Qc = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, ed = {
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
function td(n) {
  let {
    announcements: e = ed,
    container: t,
    hiddenTextDescribedById: r,
    screenReaderInstructions: i = Qc
  } = n;
  const {
    announce: s,
    announcement: a
  } = Kc(), o = gn("DndLiveRegion"), [l, c] = H(!1);
  if (j(() => {
    c(!0);
  }, []), Xc(P(() => ({
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
  const d = U.createElement(U.Fragment, null, U.createElement(qc, {
    id: r,
    value: i.draggable
  }), U.createElement(Yc, {
    id: o,
    announcement: a
  }));
  return t ? Kn(d, t) : d;
}
var de;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(de || (de = {}));
function Fn() {
}
function ki(n, e) {
  return P(
    () => ({
      sensor: n,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, e]
  );
}
function nd() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return P(
    () => [...e].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const Ge = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function rd(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function id(n, e) {
  const t = Bn(n);
  if (!t)
    return "0 0";
  const r = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function sd(n, e) {
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
function ad(n, e) {
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
function Ei(n) {
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
function Ys(n, e) {
  if (!n || n.length === 0)
    return null;
  const [t] = n;
  return t[e];
}
const od = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: r
  } = n;
  const i = Ei(e), s = [];
  for (const a of r) {
    const {
      id: o
    } = a, l = t.get(o);
    if (l) {
      const c = Ei(l), d = i.reduce((f, m, p) => f + rd(c[p], m), 0), u = Number((d / 4).toFixed(4));
      s.push({
        id: o,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(sd);
};
function ld(n, e) {
  const t = Math.max(e.top, n.top), r = Math.max(e.left, n.left), i = Math.min(e.left + e.width, n.left + n.width), s = Math.min(e.top + e.height, n.top + n.height), a = i - r, o = s - t;
  if (r < i && t < s) {
    const l = e.width * e.height, c = n.width * n.height, d = a * o, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const cd = (n) => {
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
      const l = ld(o, e);
      l > 0 && i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(ad);
};
function dd(n, e, t) {
  return {
    ...n,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Ks(n, e) {
  return n && e ? {
    x: n.left - e.left,
    y: n.top - e.top
  } : Ge;
}
function ud(n) {
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
const hd = /* @__PURE__ */ ud(1);
function Xs(n) {
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
function fd(n, e, t) {
  const r = Xs(e);
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
const md = {
  ignoreTransform: !1
};
function Wt(n, e) {
  e === void 0 && (e = md);
  let t = n.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = we(n).getComputedStyle(n);
    c && (t = fd(t, c, d));
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
function Si(n) {
  return Wt(n, {
    ignoreTransform: !0
  });
}
function pd(n) {
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
function gd(n, e) {
  return e === void 0 && (e = we(n).getComputedStyle(n)), e.position === "fixed";
}
function vd(n, e) {
  e === void 0 && (e = we(n).getComputedStyle(n));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function rr(n, e) {
  const t = [];
  function r(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Yr(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!mn(i) || Zs(i) || t.includes(i))
      return t;
    const s = we(n).getComputedStyle(i);
    return i !== n && vd(i, s) && t.push(i), gd(i, s) ? t : r(i.parentNode);
  }
  return n ? r(n) : t;
}
function Js(n) {
  const [e] = rr(n, 1);
  return e ?? null;
}
function pr(n) {
  return !er || !n ? null : jt(n) ? n : qr(n) ? Yr(n) || n === $t(n).scrollingElement ? window : mn(n) ? n : null : null;
}
function Qs(n) {
  return jt(n) ? n.scrollX : n.scrollLeft;
}
function ea(n) {
  return jt(n) ? n.scrollY : n.scrollTop;
}
function Er(n) {
  return {
    x: Qs(n),
    y: ea(n)
  };
}
var fe;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(fe || (fe = {}));
function ta(n) {
  return !er || !n ? !1 : n === document.scrollingElement;
}
function na(n) {
  const e = {
    x: 0,
    y: 0
  }, t = ta(n) ? {
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
const yd = {
  x: 0.2,
  y: 0.2
};
function bd(n, e, t, r, i) {
  let {
    top: s,
    left: a,
    right: o,
    bottom: l
  } = t;
  r === void 0 && (r = 10), i === void 0 && (i = yd);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: f
  } = na(n), m = {
    x: 0,
    y: 0
  }, p = {
    x: 0,
    y: 0
  }, g = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !c && s <= e.top + g.height ? (m.y = fe.Backward, p.y = r * Math.abs((e.top + g.height - s) / g.height)) : !d && l >= e.bottom - g.height && (m.y = fe.Forward, p.y = r * Math.abs((e.bottom - g.height - l) / g.height)), !f && o >= e.right - g.width ? (m.x = fe.Forward, p.x = r * Math.abs((e.right - g.width - o) / g.width)) : !u && a <= e.left + g.width && (m.x = fe.Backward, p.x = r * Math.abs((e.left + g.width - a) / g.width)), {
    direction: m,
    speed: p
  };
}
function xd(n) {
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
function ra(n) {
  return n.reduce((e, t) => Ot(e, Er(t)), Ge);
}
function wd(n) {
  return n.reduce((e, t) => e + Qs(t), 0);
}
function _d(n) {
  return n.reduce((e, t) => e + ea(t), 0);
}
function ia(n, e) {
  if (e === void 0 && (e = Wt), !n)
    return;
  const {
    top: t,
    left: r,
    bottom: i,
    right: s
  } = e(n);
  Js(n) && (i <= 0 || s <= 0 || t >= window.innerHeight || r >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Cd = [["x", ["left", "right"], wd], ["y", ["top", "bottom"], _d]];
class Kr {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = rr(t), i = ra(r);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, a, o] of Cd)
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
class Jt {
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
function kd(n) {
  const {
    EventTarget: e
  } = we(n);
  return n instanceof e ? n : $t(n);
}
function gr(n, e) {
  const t = Math.abs(n.x), r = Math.abs(n.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + r ** 2) > e : "x" in e && "y" in e ? t > e.x && r > e.y : "x" in e ? t > e.x : "y" in e ? r > e.y : !1;
}
var Pe;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(Pe || (Pe = {}));
function Di(n) {
  n.preventDefault();
}
function Ed(n) {
  n.stopPropagation();
}
var X;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter", n.Tab = "Tab";
})(X || (X = {}));
const sa = {
  start: [X.Space, X.Enter],
  cancel: [X.Esc],
  end: [X.Space, X.Enter, X.Tab]
}, Sd = (n, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (n.code) {
    case X.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case X.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case X.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case X.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Xr {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new Jt($t(t)), this.windowListeners = new Jt(we(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Pe.Resize, this.handleCancel), this.windowListeners.add(Pe.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Pe.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, r = e.node.current;
    r && ia(r), t(Ge);
  }
  handleKeyDown(e) {
    if (nr(e)) {
      const {
        active: t,
        context: r,
        options: i
      } = this.props, {
        keyboardCodes: s = sa,
        coordinateGetter: a = Sd,
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
      } : Ge;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = a(e, {
        active: t,
        context: r.current,
        currentCoordinates: d
      });
      if (u) {
        const f = ln(u, d), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: p
        } = r.current;
        for (const g of p) {
          const b = e.code, {
            isTop: E,
            isRight: S,
            isLeft: C,
            isBottom: w,
            maxScroll: y,
            minScroll: _
          } = na(g), x = xd(g), D = {
            x: Math.min(b === X.Right ? x.right - x.width / 2 : x.right, Math.max(b === X.Right ? x.left : x.left + x.width / 2, u.x)),
            y: Math.min(b === X.Down ? x.bottom - x.height / 2 : x.bottom, Math.max(b === X.Down ? x.top : x.top + x.height / 2, u.y))
          }, A = b === X.Right && !S || b === X.Left && !C, T = b === X.Down && !w || b === X.Up && !E;
          if (A && D.x !== u.x) {
            const k = g.scrollLeft + f.x, R = b === X.Right && k <= y.x || b === X.Left && k >= _.x;
            if (R && !f.y) {
              g.scrollTo({
                left: k,
                behavior: o
              });
              return;
            }
            R ? m.x = g.scrollLeft - k : m.x = b === X.Right ? g.scrollLeft - y.x : g.scrollLeft - _.x, m.x && g.scrollBy({
              left: -m.x,
              behavior: o
            });
            break;
          } else if (T && D.y !== u.y) {
            const k = g.scrollTop + f.y, R = b === X.Down && k <= y.y || b === X.Up && k >= _.y;
            if (R && !f.x) {
              g.scrollTo({
                top: k,
                behavior: o
              });
              return;
            }
            R ? m.y = g.scrollTop - k : m.y = b === X.Down ? g.scrollTop - y.y : g.scrollTop - _.y, m.y && g.scrollBy({
              top: -m.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, Ot(ln(u, this.referenceCoordinates), m));
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
Xr.activators = [{
  eventName: "onKeyDown",
  handler: (n, e, t) => {
    let {
      keyboardCodes: r = sa,
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
function Ni(n) {
  return !!(n && "distance" in n);
}
function Ri(n) {
  return !!(n && "delay" in n);
}
class Jr {
  constructor(e, t, r) {
    var i;
    r === void 0 && (r = kd(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: a
    } = s;
    this.props = e, this.events = t, this.document = $t(a), this.documentListeners = new Jt(this.document), this.listeners = new Jt(r), this.windowListeners = new Jt(we(a)), this.initialCoordinates = (i = Bn(s)) != null ? i : Ge, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Pe.Resize, this.handleCancel), this.windowListeners.add(Pe.DragStart, Di), this.windowListeners.add(Pe.VisibilityChange, this.handleCancel), this.windowListeners.add(Pe.ContextMenu, Di), this.documentListeners.add(Pe.Keydown, this.handleKeydown), t) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Ri(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (Ni(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(Pe.Click, Ed, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Pe.SelectionChange, this.removeTextSelection), t(e));
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
    const l = (t = Bn(e)) != null ? t : Ge, c = ln(i, l);
    if (!r && o) {
      if (Ni(o)) {
        if (o.tolerance != null && gr(c, o.tolerance))
          return this.handleCancel();
        if (gr(c, o.distance))
          return this.handleStart();
      }
      if (Ri(o) && gr(c, o.tolerance))
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
    e.code === X.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Dd = {
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
class Qr extends Jr {
  constructor(e) {
    const {
      event: t
    } = e, r = $t(t.target);
    super(e, Dd, r);
  }
}
Qr.activators = [{
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
const Nd = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Sr;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(Sr || (Sr = {}));
class Rd extends Jr {
  constructor(e) {
    super(e, Nd, $t(e.event.target));
  }
}
Rd.activators = [{
  eventName: "onMouseDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: r
    } = e;
    return t.button === Sr.RightClick ? !1 : (r?.({
      event: t
    }), !0);
  }
}];
const vr = {
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
class Td extends Jr {
  constructor(e) {
    super(e, vr);
  }
  static setup() {
    return window.addEventListener(vr.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(vr.move.name, e);
    };
    function e() {
    }
  }
}
Td.activators = [{
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
var Qt;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(Qt || (Qt = {}));
var Hn;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Hn || (Hn = {}));
function Ad(n) {
  let {
    acceleration: e,
    activator: t = Qt.Pointer,
    canScroll: r,
    draggingRect: i,
    enabled: s,
    interval: a = 5,
    order: o = Hn.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: f
  } = n;
  const m = Id({
    delta: u,
    disabled: !s
  }), [p, g] = Wc(), b = B({
    x: 0,
    y: 0
  }), E = B({
    x: 0,
    y: 0
  }), S = P(() => {
    switch (t) {
      case Qt.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Qt.DraggableRect:
        return i;
    }
  }, [t, i, l]), C = B(null), w = V(() => {
    const _ = C.current;
    if (!_)
      return;
    const x = b.current.x * E.current.x, D = b.current.y * E.current.y;
    _.scrollBy(x, D);
  }, []), y = P(() => o === Hn.TreeOrder ? [...c].reverse() : c, [o, c]);
  j(
    () => {
      if (!s || !c.length || !S) {
        g();
        return;
      }
      for (const _ of y) {
        if (r?.(_) === !1)
          continue;
        const x = c.indexOf(_), D = d[x];
        if (!D)
          continue;
        const {
          direction: A,
          speed: T
        } = bd(_, D, S, e, f);
        for (const k of ["x", "y"])
          m[k][A[k]] || (T[k] = 0, A[k] = 0);
        if (T.x > 0 || T.y > 0) {
          g(), C.current = _, p(w, a), b.current = T, E.current = A;
          return;
        }
      }
      b.current = {
        x: 0,
        y: 0
      }, E.current = {
        x: 0,
        y: 0
      }, g();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      w,
      r,
      g,
      s,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(S),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      p,
      c,
      y,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f)
    ]
  );
}
const Od = {
  x: {
    [fe.Backward]: !1,
    [fe.Forward]: !1
  },
  y: {
    [fe.Backward]: !1,
    [fe.Forward]: !1
  }
};
function Id(n) {
  let {
    delta: e,
    disabled: t
  } = n;
  const r = Ln(e);
  return pn((i) => {
    if (t || !r || !i)
      return Od;
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
function Md(n, e) {
  const t = e != null ? n.get(e) : void 0, r = t ? t.node.current : null;
  return pn((i) => {
    var s;
    return e == null ? null : (s = r ?? i) != null ? s : null;
  }, [r, e]);
}
function Pd(n, e) {
  return P(() => n.reduce((t, r) => {
    const {
      sensor: i
    } = r, s = i.activators.map((a) => ({
      eventName: a.eventName,
      handler: e(a.handler, r)
    }));
    return [...t, ...s];
  }, []), [n, e]);
}
var cn;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(cn || (cn = {}));
var Dr;
(function(n) {
  n.Optimized = "optimized";
})(Dr || (Dr = {}));
const Ti = /* @__PURE__ */ new Map();
function zd(n, e) {
  let {
    dragging: t,
    dependencies: r,
    config: i
  } = e;
  const [s, a] = H(null), {
    frequency: o,
    measure: l,
    strategy: c
  } = i, d = B(n), u = b(), f = on(u), m = V(function(E) {
    E === void 0 && (E = []), !f.current && a((S) => S === null ? E : S.concat(E.filter((C) => !S.includes(C))));
  }, [f]), p = B(null), g = pn((E) => {
    if (u && !t)
      return Ti;
    if (!E || E === Ti || d.current !== n || s != null) {
      const S = /* @__PURE__ */ new Map();
      for (let C of n) {
        if (!C)
          continue;
        if (s && s.length > 0 && !s.includes(C.id) && C.rect.current) {
          S.set(C.id, C.rect.current);
          continue;
        }
        const w = C.node.current, y = w ? new Kr(l(w), w) : null;
        C.rect.current = y, y && S.set(C.id, y);
      }
      return S;
    }
    return E;
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
      u || typeof o != "number" || p.current !== null || (p.current = setTimeout(() => {
        m(), p.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, u, m, ...r]
  ), {
    droppableRects: g,
    measureDroppableContainers: m,
    measuringScheduled: s != null
  };
  function b() {
    switch (c) {
      case cn.Always:
        return !1;
      case cn.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function ei(n, e) {
  return pn((t) => n ? t || (typeof e == "function" ? e(n) : n) : null, [e, n]);
}
function Ld(n, e) {
  return ei(n, e);
}
function Bd(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const r = tr(e), i = P(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(r);
  }, [r, t]);
  return j(() => () => i?.disconnect(), [i]), i;
}
function ir(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const r = tr(e), i = P(
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
function Fd(n) {
  return new Kr(Wt(n), n);
}
function Ai(n, e, t) {
  e === void 0 && (e = Fd);
  const [r, i] = H(null);
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
  const a = Bd({
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
  }), o = ir({
    callback: s
  });
  return We(() => {
    s(), n ? (o?.observe(n), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [n]), r;
}
function Hd(n) {
  const e = ei(n);
  return Ks(n, e);
}
const Oi = [];
function jd(n) {
  const e = B(n), t = pn((r) => n ? r && r !== Oi && n && e.current && n.parentNode === e.current.parentNode ? r : rr(n) : Oi, [n]);
  return j(() => {
    e.current = n;
  }, [n]), t;
}
function $d(n) {
  const [e, t] = H(null), r = B(n), i = V((s) => {
    const a = pr(s.target);
    a && t((o) => o ? (o.set(a, Er(a)), new Map(o)) : null);
  }, []);
  return j(() => {
    const s = r.current;
    if (n !== s) {
      a(s);
      const o = n.map((l) => {
        const c = pr(l);
        return c ? (c.addEventListener("scroll", i, {
          passive: !0
        }), [c, Er(c)]) : null;
      }).filter((l) => l != null);
      t(o.length ? new Map(o) : null), r.current = n;
    }
    return () => {
      a(n), a(s);
    };
    function a(o) {
      o.forEach((l) => {
        const c = pr(l);
        c?.removeEventListener("scroll", i);
      });
    }
  }, [i, n]), P(() => n.length ? e ? Array.from(e.values()).reduce((s, a) => Ot(s, a), Ge) : ra(n) : Ge, [n, e]);
}
function Ii(n, e) {
  e === void 0 && (e = []);
  const t = B(null);
  return j(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), j(() => {
    const r = n !== Ge;
    r && !t.current && (t.current = n), !r && t.current && (t.current = null);
  }, [n]), t.current ? ln(n, t.current) : Ge;
}
function Wd(n) {
  j(
    () => {
      if (!er)
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
function Gd(n, e) {
  return P(() => n.reduce((t, r) => {
    let {
      eventName: i,
      handler: s
    } = r;
    return t[i] = (a) => {
      s(a, e);
    }, t;
  }, {}), [n, e]);
}
function aa(n) {
  return P(() => n ? pd(n) : null, [n]);
}
const Mi = [];
function Vd(n, e) {
  e === void 0 && (e = Wt);
  const [t] = n, r = aa(t ? we(t) : null), [i, s] = H(Mi);
  function a() {
    s(() => n.length ? n.map((l) => ta(l) ? r : new Kr(e(l), l)) : Mi);
  }
  const o = ir({
    callback: a
  });
  return We(() => {
    o?.disconnect(), a(), n.forEach((l) => o?.observe(l));
  }, [n]), i;
}
function oa(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const e = n.children[0];
  return mn(e) ? e : n;
}
function Zd(n) {
  let {
    measure: e
  } = n;
  const [t, r] = H(null), i = V((c) => {
    for (const {
      target: d
    } of c)
      if (mn(d)) {
        r((u) => {
          const f = e(d);
          return u ? {
            ...u,
            width: f.width,
            height: f.height
          } : f;
        });
        break;
      }
  }, [e]), s = ir({
    callback: i
  }), a = V((c) => {
    const d = oa(c);
    s?.disconnect(), d && s?.observe(d), r(d ? e(d) : null);
  }, [e, s]), [o, l] = zn(a);
  return P(() => ({
    nodeRef: o,
    rect: t,
    setRef: l
  }), [t, o, l]);
}
const Ud = [{
  sensor: Qr,
  options: {}
}, {
  sensor: Xr,
  options: {}
}], qd = {
  current: {}
}, Dn = {
  draggable: {
    measure: Si
  },
  droppable: {
    measure: Si,
    strategy: cn.WhileDragging,
    frequency: Dr.Optimized
  },
  dragOverlay: {
    measure: Wt
  }
};
class en extends Map {
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
const Yd = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new en(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Fn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Dn,
  measureDroppableContainers: Fn,
  windowRect: null,
  measuringScheduled: !1
}, la = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Fn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Fn
}, vn = /* @__PURE__ */ Le(la), ca = /* @__PURE__ */ Le(Yd);
function Kd() {
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
      containers: new en()
    }
  };
}
function Xd(n, e) {
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
      } = t, i = new en(n.droppable.containers);
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
      const a = new en(n.droppable.containers);
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
      const s = new en(n.droppable.containers);
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
function Jd(n) {
  let {
    disabled: e
  } = n;
  const {
    active: t,
    activatorEvent: r,
    draggableNodes: i
  } = Ae(vn), s = Ln(r), a = Ln(t?.id);
  return j(() => {
    if (!e && !r && s && a != null) {
      if (!nr(s) || document.activeElement === s.target)
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
          const u = Zc(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, e, i, a, s]), null;
}
function da(n, e) {
  let {
    transform: t,
    ...r
  } = e;
  return n != null && n.length ? n.reduce((i, s) => s({
    transform: i,
    ...r
  }), t) : t;
}
function Qd(n) {
  return P(
    () => ({
      draggable: {
        ...Dn.draggable,
        ...n?.draggable
      },
      droppable: {
        ...Dn.droppable,
        ...n?.droppable
      },
      dragOverlay: {
        ...Dn.dragOverlay,
        ...n?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n?.draggable, n?.droppable, n?.dragOverlay]
  );
}
function eu(n) {
  let {
    activeNode: e,
    measure: t,
    initialRect: r,
    config: i = !0
  } = n;
  const s = B(!1), {
    x: a,
    y: o
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  We(() => {
    if (!a && !o || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !r)
      return;
    const c = e?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = t(c), u = Ks(d, r);
    if (a || (u.x = 0), o || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = Js(c);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, o, r, t]);
}
const sr = /* @__PURE__ */ Le({
  ...Ge,
  scaleX: 1,
  scaleY: 1
});
var ut;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(ut || (ut = {}));
const tu = /* @__PURE__ */ rl(function(e) {
  var t, r, i, s;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: c,
    sensors: d = Ud,
    collisionDetection: u = cd,
    measuring: f,
    modifiers: m,
    ...p
  } = e;
  const g = il(Xd, void 0, Kd), [b, E] = g, [S, C] = Jc(), [w, y] = H(ut.Uninitialized), _ = w === ut.Initialized, {
    draggable: {
      active: x,
      nodes: D,
      translate: A
    },
    droppable: {
      containers: T
    }
  } = b, k = x != null ? D.get(x) : null, R = B({
    initial: null,
    translated: null
  }), O = P(() => {
    var ge;
    return x != null ? {
      id: x,
      // It's possible for the active node to unmount while dragging
      data: (ge = k?.data) != null ? ge : qd,
      rect: R
    } : null;
  }, [x, k]), Z = B(null), [oe, le] = H(null), [re, ne] = H(null), te = on(p, Object.values(p)), ve = gn("DndDescribedBy", a), Ze = P(() => T.getEnabled(), [T]), ue = Qd(f), {
    droppableRects: he,
    measureDroppableContainers: _e,
    measuringScheduled: et
  } = zd(Ze, {
    dragging: _,
    dependencies: [A.x, A.y],
    config: ue.droppable
  }), pe = Md(D, x), Fe = P(() => re ? Bn(re) : null, [re]), ye = lo(), Ce = Ld(pe, ue.draggable.measure);
  eu({
    activeNode: x != null ? D.get(x) : null,
    config: ye.layoutShiftCompensation,
    initialRect: Ce,
    measure: ue.draggable.measure
  });
  const J = Ai(pe, ue.draggable.measure, Ce), tt = Ai(pe ? pe.parentElement : null), ke = B({
    activatorEvent: null,
    active: null,
    activeNode: pe,
    collisionRect: null,
    collisions: null,
    droppableRects: he,
    draggableNodes: D,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: T,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), He = T.getNodeFor((t = ke.current.over) == null ? void 0 : t.id), q = Zd({
    measure: ue.dragOverlay.measure
  }), se = (r = q.nodeRef.current) != null ? r : pe, ae = _ ? (i = q.rect) != null ? i : J : null, je = !!(q.nodeRef.current && q.rect), Ct = Hd(je ? null : J), Gt = aa(se ? we(se) : null), Ue = jd(_ ? He ?? pe : null), kt = Vd(Ue), xt = da(m, {
    transform: {
      x: A.x - Ct.x,
      y: A.y - Ct.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: re,
    active: O,
    activeNodeRect: J,
    containerNodeRect: tt,
    draggingNodeRect: ae,
    over: ke.current.over,
    overlayNodeRect: q.rect,
    scrollableAncestors: Ue,
    scrollableAncestorRects: kt,
    windowRect: Gt
  }), bn = Fe ? Ot(Fe, A) : null, xn = $d(Ue), lr = Ii(xn), wn = Ii(xn, [J]), nt = Ot(xt, lr), Et = ae ? hd(ae, xt) : null, Vt = O && Et ? u({
    active: O,
    collisionRect: Et,
    droppableRects: he,
    droppableContainers: Ze,
    pointerCoordinates: bn
  }) : null, ci = Ys(Vt, "id"), [at, di] = H(null), ro = je ? xt : Ot(xt, wn), io = dd(ro, (s = at?.rect) != null ? s : null, J), cr = B(null), ui = V(
    (ge, Ee) => {
      let {
        sensor: Se,
        options: ot
      } = Ee;
      if (Z.current == null)
        return;
      const Ie = D.get(Z.current);
      if (!Ie)
        return;
      const De = ge.nativeEvent, qe = new Se({
        active: Z.current,
        activeNode: Ie,
        event: De,
        options: ot,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ke,
        onAbort(me) {
          if (!D.get(me))
            return;
          const {
            onDragAbort: Ye
          } = te.current, rt = {
            id: me
          };
          Ye?.(rt), S({
            type: "onDragAbort",
            event: rt
          });
        },
        onPending(me, lt, Ye, rt) {
          if (!D.get(me))
            return;
          const {
            onDragPending: Ut
          } = te.current, ct = {
            id: me,
            constraint: lt,
            initialCoordinates: Ye,
            offset: rt
          };
          Ut?.(ct), S({
            type: "onDragPending",
            event: ct
          });
        },
        onStart(me) {
          const lt = Z.current;
          if (lt == null)
            return;
          const Ye = D.get(lt);
          if (!Ye)
            return;
          const {
            onDragStart: rt
          } = te.current, Zt = {
            activatorEvent: De,
            active: {
              id: lt,
              data: Ye.data,
              rect: R
            }
          };
          _n(() => {
            rt?.(Zt), y(ut.Initializing), E({
              type: de.DragStart,
              initialCoordinates: me,
              active: lt
            }), S({
              type: "onDragStart",
              event: Zt
            }), le(cr.current), ne(De);
          });
        },
        onMove(me) {
          E({
            type: de.DragMove,
            coordinates: me
          });
        },
        onEnd: St(de.DragEnd),
        onCancel: St(de.DragCancel)
      });
      cr.current = qe;
      function St(me) {
        return async function() {
          const {
            active: Ye,
            collisions: rt,
            over: Zt,
            scrollAdjustedTranslate: Ut
          } = ke.current;
          let ct = null;
          if (Ye && Ut) {
            const {
              cancelDrop: qt
            } = te.current;
            ct = {
              activatorEvent: De,
              active: Ye,
              collisions: rt,
              delta: Ut,
              over: Zt
            }, me === de.DragEnd && typeof qt == "function" && await Promise.resolve(qt(ct)) && (me = de.DragCancel);
          }
          Z.current = null, _n(() => {
            E({
              type: me
            }), y(ut.Uninitialized), di(null), le(null), ne(null), cr.current = null;
            const qt = me === de.DragEnd ? "onDragEnd" : "onDragCancel";
            if (ct) {
              const dr = te.current[qt];
              dr?.(ct), S({
                type: qt,
                event: ct
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [D]
  ), so = V((ge, Ee) => (Se, ot) => {
    const Ie = Se.nativeEvent, De = D.get(ot);
    if (
      // Another sensor is already instantiating
      Z.current !== null || // No active draggable
      !De || // Event has already been captured
      Ie.dndKit || Ie.defaultPrevented
    )
      return;
    const qe = {
      active: De
    };
    ge(Se, Ee.options, qe) === !0 && (Ie.dndKit = {
      capturedBy: Ee.sensor
    }, Z.current = ot, ui(Se, Ee));
  }, [D, ui]), hi = Pd(d, so);
  Wd(d), We(() => {
    J && w === ut.Initializing && y(ut.Initialized);
  }, [J, w]), j(
    () => {
      const {
        onDragMove: ge
      } = te.current, {
        active: Ee,
        activatorEvent: Se,
        collisions: ot,
        over: Ie
      } = ke.current;
      if (!Ee || !Se)
        return;
      const De = {
        active: Ee,
        activatorEvent: Se,
        collisions: ot,
        delta: {
          x: nt.x,
          y: nt.y
        },
        over: Ie
      };
      _n(() => {
        ge?.(De), S({
          type: "onDragMove",
          event: De
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nt.x, nt.y]
  ), j(
    () => {
      const {
        active: ge,
        activatorEvent: Ee,
        collisions: Se,
        droppableContainers: ot,
        scrollAdjustedTranslate: Ie
      } = ke.current;
      if (!ge || Z.current == null || !Ee || !Ie)
        return;
      const {
        onDragOver: De
      } = te.current, qe = ot.get(ci), St = qe && qe.rect.current ? {
        id: qe.id,
        rect: qe.rect.current,
        data: qe.data,
        disabled: qe.disabled
      } : null, me = {
        active: ge,
        activatorEvent: Ee,
        collisions: Se,
        delta: {
          x: Ie.x,
          y: Ie.y
        },
        over: St
      };
      _n(() => {
        di(St), De?.(me), S({
          type: "onDragOver",
          event: me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ci]
  ), We(() => {
    ke.current = {
      activatorEvent: re,
      active: O,
      activeNode: pe,
      collisionRect: Et,
      collisions: Vt,
      droppableRects: he,
      draggableNodes: D,
      draggingNode: se,
      draggingNodeRect: ae,
      droppableContainers: T,
      over: at,
      scrollableAncestors: Ue,
      scrollAdjustedTranslate: nt
    }, R.current = {
      initial: ae,
      translated: Et
    };
  }, [O, pe, Vt, Et, D, se, ae, he, T, at, Ue, nt]), Ad({
    ...ye,
    delta: A,
    draggingRect: Et,
    pointerCoordinates: bn,
    scrollableAncestors: Ue,
    scrollableAncestorRects: kt
  });
  const ao = P(() => ({
    active: O,
    activeNode: pe,
    activeNodeRect: J,
    activatorEvent: re,
    collisions: Vt,
    containerNodeRect: tt,
    dragOverlay: q,
    draggableNodes: D,
    droppableContainers: T,
    droppableRects: he,
    over: at,
    measureDroppableContainers: _e,
    scrollableAncestors: Ue,
    scrollableAncestorRects: kt,
    measuringConfiguration: ue,
    measuringScheduled: et,
    windowRect: Gt
  }), [O, pe, J, re, Vt, tt, q, D, T, he, at, _e, Ue, kt, ue, et, Gt]), oo = P(() => ({
    activatorEvent: re,
    activators: hi,
    active: O,
    activeNodeRect: J,
    ariaDescribedById: {
      draggable: ve
    },
    dispatch: E,
    draggableNodes: D,
    over: at,
    measureDroppableContainers: _e
  }), [re, hi, O, J, E, ve, D, at, _e]);
  return U.createElement(qs.Provider, {
    value: C
  }, U.createElement(vn.Provider, {
    value: oo
  }, U.createElement(ca.Provider, {
    value: ao
  }, U.createElement(sr.Provider, {
    value: io
  }, c)), U.createElement(Jd, {
    disabled: o?.restoreFocus === !1
  })), U.createElement(td, {
    ...o,
    hiddenTextDescribedById: ve
  }));
  function lo() {
    const ge = oe?.autoScrollEnabled === !1, Ee = typeof l == "object" ? l.enabled === !1 : l === !1, Se = _ && !ge && !Ee;
    return typeof l == "object" ? {
      ...l,
      enabled: Se
    } : {
      enabled: Se
    };
  }
}), nu = /* @__PURE__ */ Le(null), Pi = "button", ru = "Draggable";
function iu(n) {
  let {
    id: e,
    data: t,
    disabled: r = !1,
    attributes: i
  } = n;
  const s = gn(ru), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: f
  } = Ae(vn), {
    role: m = Pi,
    roleDescription: p = "draggable",
    tabIndex: g = 0
  } = i ?? {}, b = l?.id === e, E = Ae(b ? sr : nu), [S, C] = zn(), [w, y] = zn(), _ = Gd(a, e), x = on(t);
  We(
    () => (u.set(e, {
      id: e,
      key: s,
      node: S,
      activatorNode: w,
      data: x
    }), () => {
      const A = u.get(e);
      A && A.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const D = P(() => ({
    role: m,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": b && m === Pi ? !0 : void 0,
    "aria-roledescription": p,
    "aria-describedby": d.draggable
  }), [r, m, g, b, p, d.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: c,
    attributes: D,
    isDragging: b,
    listeners: r ? void 0 : _,
    node: S,
    over: f,
    setNodeRef: C,
    setActivatorNodeRef: y,
    transform: E
  };
}
function ua() {
  return Ae(ca);
}
const su = "Droppable", au = {
  timeout: 25
};
function ou(n) {
  let {
    data: e,
    disabled: t = !1,
    id: r,
    resizeObserverConfig: i
  } = n;
  const s = gn(su), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: c
  } = Ae(vn), d = B({
    disabled: t
  }), u = B(!1), f = B(null), m = B(null), {
    disabled: p,
    updateMeasurementsFor: g,
    timeout: b
  } = {
    ...au,
    ...i
  }, E = on(g ?? r), S = V(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        c(Array.isArray(E.current) ? E.current : [E.current]), m.current = null;
      }, b);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [b]
  ), C = ir({
    callback: S,
    disabled: p || !a
  }), w = V((D, A) => {
    C && (A && (C.unobserve(A), u.current = !1), D && C.observe(D));
  }, [C]), [y, _] = zn(w), x = on(e);
  return j(() => {
    !C || !y.current || (C.disconnect(), u.current = !1, C.observe(y.current));
  }, [y, C]), j(
    () => (o({
      type: de.RegisterDroppable,
      element: {
        id: r,
        key: s,
        disabled: t,
        node: y,
        rect: f,
        data: x
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
    rect: f,
    isOver: l?.id === r,
    node: y,
    over: l,
    setNodeRef: _
  };
}
function lu(n) {
  let {
    animation: e,
    children: t
  } = n;
  const [r, i] = H(null), [s, a] = H(null), o = Ln(t);
  return !t && !r && o && i(o), We(() => {
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
  }, [e, r, s]), U.createElement(U.Fragment, null, t, r ? sl(r, {
    ref: a
  }) : null);
}
const cu = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function du(n) {
  let {
    children: e
  } = n;
  return U.createElement(vn.Provider, {
    value: la
  }, U.createElement(sr.Provider, {
    value: cu
  }, e));
}
const uu = {
  position: "fixed",
  touchAction: "none"
}, hu = (n) => nr(n) ? "transform 250ms ease" : void 0, fu = /* @__PURE__ */ xe((n, e) => {
  let {
    as: t,
    activatorEvent: r,
    adjustScale: i,
    children: s,
    className: a,
    rect: o,
    style: l,
    transform: c,
    transition: d = hu
  } = n;
  if (!o)
    return null;
  const u = i ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...uu,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: pt.Transform.toString(u),
    transformOrigin: i && r ? id(r, o) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...l
  };
  return U.createElement(t, {
    className: a,
    style: f,
    ref: e
  }, s);
}), mu = (n) => (e) => {
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
}, pu = (n) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = n;
  return [{
    transform: pt.Transform.toString(e)
  }, {
    transform: pt.Transform.toString(t)
  }];
}, gu = {
  duration: 250,
  easing: "ease",
  keyframes: pu,
  sideEffects: /* @__PURE__ */ mu({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function vu(n) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: r,
    measuringConfiguration: i
  } = n;
  return tr((s, a) => {
    if (e === null)
      return;
    const o = t.get(s);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const c = oa(a);
    if (!c)
      return;
    const {
      transform: d
    } = we(a).getComputedStyle(a), u = Xs(d);
    if (!u)
      return;
    const f = typeof e == "function" ? e : yu(e);
    return ia(l, i.draggable.measure), f({
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
function yu(n) {
  const {
    duration: e,
    easing: t,
    sideEffects: r,
    keyframes: i
  } = {
    ...gu,
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
    }, f = {
      x: l.x - d.x,
      y: l.y - d.y,
      ...u
    }, m = i({
      ...c,
      active: a,
      dragOverlay: o,
      transform: {
        initial: l,
        final: f
      }
    }), [p] = m, g = m[m.length - 1];
    if (JSON.stringify(p) === JSON.stringify(g))
      return;
    const b = r?.({
      active: a,
      dragOverlay: o,
      ...c
    }), E = o.node.animate(m, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((S) => {
      E.onfinish = () => {
        b?.(), S();
      };
    });
  };
}
let zi = 0;
function bu(n) {
  return P(() => {
    if (n != null)
      return zi++, zi;
  }, [n]);
}
const xu = /* @__PURE__ */ U.memo((n) => {
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
    activeNodeRect: f,
    containerNodeRect: m,
    draggableNodes: p,
    droppableContainers: g,
    dragOverlay: b,
    over: E,
    measuringConfiguration: S,
    scrollableAncestors: C,
    scrollableAncestorRects: w,
    windowRect: y
  } = ua(), _ = Ae(sr), x = bu(u?.id), D = da(a, {
    activatorEvent: d,
    active: u,
    activeNodeRect: f,
    containerNodeRect: m,
    draggingNodeRect: b.rect,
    over: E,
    overlayNodeRect: b.rect,
    scrollableAncestors: C,
    scrollableAncestorRects: w,
    transform: _,
    windowRect: y
  }), A = ei(f), T = vu({
    config: r,
    draggableNodes: p,
    droppableContainers: g,
    measuringConfiguration: S
  }), k = A ? b.setRef : void 0;
  return U.createElement(du, null, U.createElement(lu, {
    animation: T
  }, u && x ? U.createElement(fu, {
    key: x,
    id: u.id,
    ref: k,
    as: o,
    activatorEvent: d,
    adjustScale: e,
    className: l,
    transition: s,
    rect: A,
    style: {
      zIndex: c,
      ...i
    },
    transform: D
  }, t) : null));
});
function ti(n, e, t) {
  const r = n.slice();
  return r.splice(t < 0 ? r.length + t : t, 0, r.splice(e, 1)[0]), r;
}
function wu(n, e) {
  return n.reduce((t, r, i) => {
    const s = e.get(r);
    return s && (t[i] = s), t;
  }, Array(n.length));
}
function En(n) {
  return n !== null && n >= 0;
}
function _u(n, e) {
  if (n === e)
    return !0;
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function Cu(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const ha = (n) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: r,
    index: i
  } = n;
  const s = ti(e, r, t), a = e[i], o = s[i];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, fa = "Sortable", ma = /* @__PURE__ */ U.createContext({
  activeIndex: -1,
  containerId: fa,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: ha,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function ku(n) {
  let {
    children: e,
    id: t,
    items: r,
    strategy: i = ha,
    disabled: s = !1
  } = n;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = ua(), u = gn(fa, t), f = o.rect !== null, m = P(() => r.map((_) => typeof _ == "object" && "id" in _ ? _.id : _), [r]), p = a != null, g = a ? m.indexOf(a.id) : -1, b = c ? m.indexOf(c.id) : -1, E = B(m), S = !_u(m, E.current), C = b !== -1 && g === -1 || S, w = Cu(s);
  We(() => {
    S && p && d(m);
  }, [S, m, p, d]), j(() => {
    E.current = m;
  }, [m]);
  const y = P(
    () => ({
      activeIndex: g,
      containerId: u,
      disabled: w,
      disableTransforms: C,
      items: m,
      overIndex: b,
      useDragOverlay: f,
      sortedRects: wu(m, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, u, w.draggable, w.droppable, C, m, b, l, f, i]
  );
  return U.createElement(ma.Provider, {
    value: y
  }, e);
}
const Eu = (n) => {
  let {
    id: e,
    items: t,
    activeIndex: r,
    overIndex: i
  } = n;
  return ti(t, r, i).indexOf(e);
}, Su = (n) => {
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
}, Du = {
  duration: 200,
  easing: "ease"
}, pa = "transform", Nu = /* @__PURE__ */ pt.Transition.toString({
  property: pa,
  duration: 0,
  easing: "linear"
}), Ru = {
  roleDescription: "sortable"
};
function Tu(n) {
  let {
    disabled: e,
    index: t,
    node: r,
    rect: i
  } = n;
  const [s, a] = H(null), o = B(t);
  return We(() => {
    if (!e && t !== o.current && r.current) {
      const l = i.current;
      if (l) {
        const c = Wt(r.current, {
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
function Au(n) {
  let {
    animateLayoutChanges: e = Su,
    attributes: t,
    disabled: r,
    data: i,
    getNewIndex: s = Eu,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: c = Du
  } = n;
  const {
    items: d,
    containerId: u,
    activeIndex: f,
    disabled: m,
    disableTransforms: p,
    sortedRects: g,
    overIndex: b,
    useDragOverlay: E,
    strategy: S
  } = Ae(ma), C = Ou(r, m), w = d.indexOf(a), y = P(() => ({
    sortable: {
      containerId: u,
      index: w,
      items: d
    },
    ...i
  }), [u, i, w, d]), _ = P(() => d.slice(d.indexOf(a)), [d, a]), {
    rect: x,
    node: D,
    isOver: A,
    setNodeRef: T
  } = ou({
    id: a,
    data: y,
    disabled: C.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: _,
      ...l
    }
  }), {
    active: k,
    activatorEvent: R,
    activeNodeRect: O,
    attributes: Z,
    setNodeRef: oe,
    listeners: le,
    isDragging: re,
    over: ne,
    setActivatorNodeRef: te,
    transform: ve
  } = iu({
    id: a,
    data: y,
    attributes: {
      ...Ru,
      ...t
    },
    disabled: C.draggable
  }), Ze = $c(T, oe), ue = !!k, he = ue && !p && En(f) && En(b), _e = !E && re, et = _e && he ? ve : null, Fe = he ? et ?? (o ?? S)({
    rects: g,
    activeNodeRect: O,
    activeIndex: f,
    overIndex: b,
    index: w
  }) : null, ye = En(f) && En(b) ? s({
    id: a,
    items: d,
    activeIndex: f,
    overIndex: b
  }) : w, Ce = k?.id, J = B({
    activeId: Ce,
    items: d,
    newIndex: ye,
    containerId: u
  }), tt = d !== J.current.items, ke = e({
    active: k,
    containerId: u,
    isDragging: re,
    isSorting: ue,
    id: a,
    index: w,
    items: d,
    newIndex: J.current.newIndex,
    previousItems: J.current.items,
    previousContainerId: J.current.containerId,
    transition: c,
    wasDragging: J.current.activeId != null
  }), He = Tu({
    disabled: !ke,
    index: w,
    node: D,
    rect: x
  });
  return j(() => {
    ue && J.current.newIndex !== ye && (J.current.newIndex = ye), u !== J.current.containerId && (J.current.containerId = u), d !== J.current.items && (J.current.items = d);
  }, [ue, ye, u, d]), j(() => {
    if (Ce === J.current.activeId)
      return;
    if (Ce != null && J.current.activeId == null) {
      J.current.activeId = Ce;
      return;
    }
    const se = setTimeout(() => {
      J.current.activeId = Ce;
    }, 50);
    return () => clearTimeout(se);
  }, [Ce]), {
    active: k,
    activeIndex: f,
    attributes: Z,
    data: y,
    rect: x,
    index: w,
    newIndex: ye,
    items: d,
    isOver: A,
    isSorting: ue,
    isDragging: re,
    listeners: le,
    node: D,
    overIndex: b,
    over: ne,
    setNodeRef: Ze,
    setActivatorNodeRef: te,
    setDroppableNodeRef: T,
    setDraggableNodeRef: oe,
    transform: He ?? Fe,
    transition: q()
  };
  function q() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      He || // Or to prevent items jumping to back to their "new" position when items change
      tt && J.current.newIndex === w
    )
      return Nu;
    if (!(_e && !nr(R) || !c) && (ue || ke))
      return pt.Transition.toString({
        ...c,
        property: pa
      });
  }
}
function Ou(n, e) {
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
function jn(n) {
  if (!n)
    return !1;
  const e = n.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const Iu = [X.Down, X.Right, X.Up, X.Left], Mu = (n, e) => {
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
  if (Iu.includes(n.code)) {
    if (n.preventDefault(), !t || !r)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const f = i.get(u.id);
      if (f)
        switch (n.code) {
          case X.Down:
            r.top < f.top && l.push(u);
            break;
          case X.Up:
            r.top > f.top && l.push(u);
            break;
          case X.Left:
            r.left > f.left && l.push(u);
            break;
          case X.Right:
            r.left < f.left && l.push(u);
            break;
        }
    });
    const c = od({
      collisionRect: r,
      droppableRects: i,
      droppableContainers: l
    });
    let d = Ys(c, "id");
    if (d === a?.id && c.length > 1 && (d = c[1].id), d != null) {
      const u = s.get(t.id), f = s.get(d), m = f ? i.get(f.id) : null, p = f?.node.current;
      if (p && m && u && f) {
        const b = rr(p).some((_, x) => o[x] !== _), E = ga(u, f), S = Pu(u, f), C = b || !E ? {
          x: 0,
          y: 0
        } : {
          x: S ? r.width - m.width : 0,
          y: S ? r.height - m.height : 0
        }, w = {
          x: m.left,
          y: m.top
        };
        return C.x && C.y ? w : ln(w, C);
      }
    }
  }
};
function ga(n, e) {
  return !jn(n) || !jn(e) ? !1 : n.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Pu(n, e) {
  return !jn(n) || !jn(e) || !ga(n, e) ? !1 : n.data.current.sortable.index < e.data.current.sortable.index;
}
const Li = ({ id: n, children: e }) => {
  const { attributes: t, listeners: r, setNodeRef: i, transform: s, transition: a } = Au({
    id: n
  }), o = {
    transform: pt.Translate.toString(s),
    transition: a,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return h("div", {
    ref: i,
    style: o,
    ...t,
    ...r,
    children: e
  });
}, ni = ({ blocks: n, sortable: e = !1, onSort: t = () => {
}, main: r = !1 }) => {
  const [i, s] = H([]);
  as(() => {
    s(n.map((u, f) => ({
      id: u.id ?? f.toString(),
      render: u.render
    })));
  }, [n]);
  const [a, o] = H(null), l = nd(ki(Qr), ki(Xr, {
    coordinateGetter: Mu
  })), c = (u) => {
    o(u.active.id);
  }, d = (u) => {
    const { active: f, over: m } = u;
    o(null), m && f.id !== m.id && s((p) => {
      const g = p.findIndex((E) => E.id === f.id), b = p.findIndex((E) => E.id === m.id);
      return ti(p, g, b);
    });
  };
  return h("div", {
    className: K("flex flex-wrap items-stretch gap-4", r && "flex-1"),
    children: I(tu, {
      sensors: l,
      onDragStart: c,
      onDragEnd: d,
      children: [h(ku, {
        items: i,
        children: i.map((u) => h(Li, {
          id: u.id,
          children: u.render
        }, u.id))
      }), h(xu, {
        children: a ? h(Li, {
          id: a,
          children: i.find((u) => u.id === a)?.render
        }) : null
      })]
    })
  });
};
ni.displayName = "GroupMasonry";
ni.__isPageLayoutGroup = !0;
const zu = xe(function({ children: e, aside: t, header: r, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Vs("Page", e, ["block", "group"]), h("div", {
    ref: s,
    className: "h-full",
    children: I("div", {
      className: K("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [I("main", {
        className: K("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", i === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [r && h("header", {
          className: K("sticky top-0 z-30 bg-f1-background"),
          children: r
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
}), Mm = {
  Page: Re("Page", zu),
  Block: Re("Block", Qn),
  BlockContent: Re("BlockContent", Fc),
  Group: Re("Group", Ur),
  GroupGrid: Re("GroupGrid", Jn),
  GroupMasonry: Re("GroupMasonry", ni)
}, Pm = ze({
  name: "StandardLayout",
  type: "layout"
}, Ps), zm = ze({
  name: "TwoColumnLayout",
  type: "layout"
}, uc), Lm = ze({
  name: "HomeLayout",
  type: "layout"
}, cc);
function Mt(n) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mt(n);
}
function Lu(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Bu(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, ba(r.key), r);
  }
}
function Fu(n, e, t) {
  return e && Bu(n.prototype, e), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Hu(n, e, t) {
  return e = $n(e), ju(n, va() ? Reflect.construct(e, t || [], $n(n).constructor) : e.apply(n, t));
}
function ju(n, e) {
  if (e && (Mt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $u(n);
}
function $u(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function va() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (va = function() {
    return !!n;
  })();
}
function $n(n) {
  return $n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, $n(n);
}
function Wu(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Nr(n, e);
}
function Nr(n, e) {
  return Nr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Nr(n, e);
}
function ya(n, e, t) {
  return e = ba(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function ba(n) {
  var e = Gu(n, "string");
  return Mt(e) == "symbol" ? e : e + "";
}
function Gu(n, e) {
  if (Mt(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (Mt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var ar = /* @__PURE__ */ (function(n) {
  function e() {
    return Lu(this, e), Hu(this, e, arguments);
  }
  return Wu(e, n), Fu(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(U.Component);
ya(ar, "displayName", "ZAxis");
ya(ar, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Vu = ["option", "isActive"];
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, tn.apply(this, arguments);
}
function Zu(n, e) {
  if (n == null) return {};
  var t = Uu(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Uu(n, e) {
  if (n == null) return {};
  var t = {};
  for (var r in n)
    if (Object.prototype.hasOwnProperty.call(n, r)) {
      if (e.indexOf(r) >= 0) continue;
      t[r] = n[r];
    }
  return t;
}
function qu(n) {
  var e = n.option, t = n.isActive, r = Zu(n, Vu);
  return typeof e == "string" ? /* @__PURE__ */ U.createElement(pi, tn({
    option: /* @__PURE__ */ U.createElement(cl, tn({
      type: e
    }, r)),
    isActive: t,
    shapeType: "symbols"
  }, r)) : /* @__PURE__ */ U.createElement(pi, tn({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, r));
}
function Pt(n) {
  "@babel/helpers - typeof";
  return Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pt(n);
}
function nn() {
  return nn = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, nn.apply(this, arguments);
}
function Bi(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Me(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bi(Object(t), !0).forEach(function(r) {
      ft(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Bi(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Yu(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Fi(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, wa(r.key), r);
  }
}
function Ku(n, e, t) {
  return e && Fi(n.prototype, e), t && Fi(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Xu(n, e, t) {
  return e = Wn(e), Ju(n, xa() ? Reflect.construct(e, t || [], Wn(n).constructor) : e.apply(n, t));
}
function Ju(n, e) {
  if (e && (Pt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Qu(n);
}
function Qu(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function xa() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xa = function() {
    return !!n;
  })();
}
function Wn(n) {
  return Wn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Wn(n);
}
function eh(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Rr(n, e);
}
function Rr(n, e) {
  return Rr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Rr(n, e);
}
function ft(n, e, t) {
  return e = wa(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function wa(n) {
  var e = th(n, "string");
  return Pt(e) == "symbol" ? e : e + "";
}
function th(n, e) {
  if (Pt(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (Pt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var yn = /* @__PURE__ */ (function(n) {
  function e() {
    var t;
    Yu(this, e);
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return t = Xu(this, e, [].concat(i)), ft(t, "state", {
      isAnimationFinished: !1
    }), ft(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), ft(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), ft(t, "id", gl("recharts-scatter-")), t;
  }
  return eh(e, n), Ku(e, [{
    key: "renderSymbolsStatically",
    value: function(r) {
      var i = this, s = this.props, a = s.shape, o = s.activeShape, l = s.activeIndex, c = ur(this.props, !1);
      return r.map(function(d, u) {
        var f = l === u, m = f ? o : a, p = Me(Me({}, c), d);
        return /* @__PURE__ */ U.createElement(Yt, nn({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(d?.cx, "-").concat(d?.cy, "-").concat(d?.size, "-").concat(u)
        }, dl(i.props, d, u), {
          role: "img"
        }), /* @__PURE__ */ U.createElement(qu, nn({
          option: m,
          isActive: f,
          key: "symbol-".concat(u)
        }, p)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var r = this, i = this.props, s = i.points, a = i.isAnimationActive, o = i.animationBegin, l = i.animationDuration, c = i.animationEasing, d = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ U.createElement(ul, {
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
      }, function(f) {
        var m = f.t, p = s.map(function(g, b) {
          var E = u && u[b];
          if (E) {
            var S = Cn(E.cx, g.cx), C = Cn(E.cy, g.cy), w = Cn(E.size, g.size);
            return Me(Me({}, g), {}, {
              cx: S(m),
              cy: C(m),
              size: w(m)
            });
          }
          var y = Cn(0, g.size);
          return Me(Me({}, g), {}, {
            size: y(m)
          });
        });
        return /* @__PURE__ */ U.createElement(Yt, null, r.renderSymbolsStatically(p));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var r = this.props, i = r.points, s = r.isAnimationActive, a = this.state.prevPoints;
      return s && i && i.length && (!a || !ks(a, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var r = this.props.isAnimationActive;
      if (r && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, a = i.xAxis, o = i.yAxis, l = i.children, c = Es(l, hl);
      return c ? c.map(function(d, u) {
        var f = d.props, m = f.direction, p = f.dataKey;
        return /* @__PURE__ */ U.cloneElement(d, {
          key: "".concat(m, "-").concat(p, "-").concat(s[u]),
          data: s,
          xAxis: a,
          yAxis: o,
          layout: m === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(b, E) {
            return {
              x: b.cx,
              y: b.cy,
              value: m === "x" ? +b.node.x : +b.node.y,
              errorVal: Sn(b, E)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var r = this.props, i = r.points, s = r.line, a = r.lineType, o = r.lineJointType, l = ur(this.props, !1), c = ur(s, !1), d, u;
      if (a === "joint")
        d = i.map(function(C) {
          return {
            x: C.cx,
            y: C.cy
          };
        });
      else if (a === "fitting") {
        var f = fl(i), m = f.xmin, p = f.xmax, g = f.a, b = f.b, E = function(w) {
          return g * w + b;
        };
        d = [{
          x: m,
          y: E(m)
        }, {
          x: p,
          y: E(p)
        }];
      }
      var S = Me(Me(Me({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, c), {}, {
        points: d
      });
      return /* @__PURE__ */ U.isValidElement(s) ? u = /* @__PURE__ */ U.cloneElement(s, S) : ml(s) ? u = s(S) : u = /* @__PURE__ */ U.createElement(pl, nn({}, S, {
        type: o
      })), /* @__PURE__ */ U.createElement(Yt, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, s = r.points, a = r.line, o = r.className, l = r.xAxis, c = r.yAxis, d = r.left, u = r.top, f = r.width, m = r.height, p = r.id, g = r.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, E = po("recharts-scatter", o), S = l && l.allowDataOverflow, C = c && c.allowDataOverflow, w = S || C, y = Nt(p) ? this.id : p;
      return /* @__PURE__ */ U.createElement(Yt, {
        className: E,
        clipPath: w ? "url(#clipPath-".concat(y, ")") : null
      }, S || C ? /* @__PURE__ */ U.createElement("defs", null, /* @__PURE__ */ U.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ U.createElement("rect", {
        x: S ? d : d - f / 2,
        y: C ? u : u - m / 2,
        width: S ? f : f * 2,
        height: C ? m : m * 2
      }))) : null, a && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ U.createElement(Yt, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!g || b) && Ss.renderCallByParent(this.props, s));
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
})(al);
ft(yn, "displayName", "Scatter");
ft(yn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !vl.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
ft(yn, "getComposedData", function(n) {
  var e = n.xAxis, t = n.yAxis, r = n.zAxis, i = n.item, s = n.displayedData, a = n.xAxisTicks, o = n.yAxisTicks, l = n.offset, c = i.props.tooltipType, d = Es(i.props.children, yl), u = Nt(e.dataKey) ? i.props.dataKey : e.dataKey, f = Nt(t.dataKey) ? i.props.dataKey : t.dataKey, m = r && r.dataKey, p = r ? r.range : ar.defaultProps.range, g = p && p[0], b = e.scale.bandwidth ? e.scale.bandwidth() : 0, E = t.scale.bandwidth ? t.scale.bandwidth() : 0, S = s.map(function(C, w) {
    var y = Sn(C, u), _ = Sn(C, f), x = !Nt(m) && Sn(C, m) || "-", D = [{
      name: Nt(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: y,
      payload: C,
      dataKey: u,
      type: c
    }, {
      name: Nt(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: _,
      payload: C,
      dataKey: f,
      type: c
    }];
    x !== "-" && D.push({
      name: r.name || r.dataKey,
      unit: r.unit || "",
      value: x,
      payload: C,
      dataKey: m,
      type: c
    });
    var A = gi({
      axis: e,
      ticks: a,
      bandSize: b,
      entry: C,
      index: w,
      dataKey: u
    }), T = gi({
      axis: t,
      ticks: o,
      bandSize: E,
      entry: C,
      index: w,
      dataKey: f
    }), k = x !== "-" ? r.scale(x) : g, R = Math.sqrt(Math.max(k, 0) / Math.PI);
    return Me(Me({}, C), {}, {
      cx: A,
      cy: T,
      x: A - R,
      y: T - R,
      xAxis: e,
      yAxis: t,
      zAxis: r,
      width: 2 * R,
      height: 2 * R,
      size: k,
      node: {
        x: y,
        y: _,
        z: x
      },
      tooltipPayload: D,
      tooltipPosition: {
        x: A,
        y: T
      },
      payload: C
    }, d && d[w] && d[w].props);
  });
  return Me({
    points: S
  }, l);
});
var nh = bl({
  chartName: "ComposedChart",
  GraphicalChild: [Ds, xl, Ns, yn],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Rs
  }, {
    axisType: "yAxis",
    AxisComp: kr
  }, {
    axisType: "zAxis",
    AxisComp: ar
  }],
  formatAxisMap: wl
});
const rh = (n) => {
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
    return h("circle", {
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
}, ih = ({ dataConfig: n, data: e, xAxis: t, yAxis: r = {
  hide: !0
}, label: i = !1, hideTooltip: s = !1, hideGrid: a = !1, aspect: o, legend: l, showValueUnderLabel: c = !1, bar: d, line: u, scatter: f, onClick: m }, p) => {
  const g = _l(e), b = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], E = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], S = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], C = [...b, ...E, ...S], w = Math.max(...g.flatMap((x) => C.map((D) => Cl(r?.tickFormatter ? r.tickFormatter(`${x[D]}`) : `${x[D]}`)))), y = [d, u, f].filter((x) => x?.axisPosition === "left"), _ = [d, u, f].filter((x) => x?.axisPosition === "right");
  return h(kl, {
    config: n,
    ref: p,
    aspect: o,
    children: I(nh, {
      accessibilityLayer: !0,
      data: g,
      margin: {
        left: r && !r.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: c ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (x) => {
        if (!m || !x.activeLabel || !x.activePayload)
          return;
        const D = {
          label: x.activeLabel,
          values: {}
        };
        for (const A of x.activePayload)
          D.values[A.name] = A.value;
        m(D);
      },
      children: [!s && h(El, {
        ...Sl(),
        content: h(Dl, {
          yAxisFormatter: r.tickFormatter
        })
      }), !a && h(Nl, {
        ...Rl()
      }), y.length > 0 && h(kr, {
        ...vi(r),
        tick: !0,
        width: r.width ?? w + 20 + (_.length > 0 && y[0]?.axisLabel ? 20 : 0),
        hide: r.hide || y.some((x) => x?.hideAxis),
        label: y[0]?.axisLabel ? {
          value: y[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), _.length > 0 && h(kr, {
        ...vi(r),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: r.width ?? w + 20 + (y.length > 0 && _[0]?.axisLabel ? 20 : 0),
        hide: r.hide || _.some((x) => x?.hideAxis),
        label: _[0]?.axisLabel ? {
          value: _[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), h(Rs, {
        ...Tl(t),
        hide: t?.hide,
        tick: c ? (x) => {
          const { x: D, y: A, payload: T } = x, k = e.find((Z) => Z.label === T.value)?.values || "", R = Object.keys(k).length === 1 ? Object.values(k)?.[0] : void 0, O = R !== void 0 && r.tickFormatter ? r.tickFormatter(`${R}`) : R.toLocaleString();
          return I("g", {
            transform: `translate(${D},${A})`,
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
              children: O
            })]
          });
        } : void 0
      }), b.map((x, D) => h(Ns, {
        isAnimationActive: !1,
        dataKey: String(x),
        fill: n[x].color ? Xt(n[x].color) : hr(D),
        radius: 4,
        maxBarSize: 32,
        children: i && h(Ss, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(x)}`)
      }, `bar-${String(x)}`)), E.map((x, D) => h(Ds, {
        type: u?.lineType ?? "natural",
        dataKey: String(x),
        stroke: n[x].color ? Xt(n[x].color) : hr(b.length + D),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(x)}`)), S.map((x, D) => h(yn, {
        dataKey: String(x),
        fill: n[x].color ? Xt(n[x].color) : hr(b.length + E.length + D),
        r: 4,
        isAnimationActive: !1,
        yAxisId: f?.axisPosition === "right" ? "right" : void 0,
        shape: rh(String(x))
      }, `scatter-${String(x)}`)), l && h(Al, {
        content: h(Ol, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, sh = Ts(ih), ah = ({ value: n, max: e = 100, label: t, color: r }, i) => {
  const s = r ? Xt(r) : Xt("categorical-1"), a = n / e * 100;
  return I("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [h("div", {
      className: "flex-grow",
      children: h(Il, {
        color: s,
        value: a,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": n,
        "aria-label": `${a.toFixed(1)}%`
      })
    }), t && h("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, oh = Ts(ah), Bm = ze(
  {
    name: "AreaChart",
    type: "info"
  },
  Ml
), Fm = ze(
  {
    name: "BarChart",
    type: "info"
  },
  Pl
), Hm = ze(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  zl
), jm = ze(
  {
    name: "LineChart",
    type: "info"
  },
  Ll
), $m = ze(
  {
    name: "PieChart",
    type: "info"
  },
  Bl
), Wm = ze(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Fl
), Gm = ze(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  oh
), Vm = ze(
  {
    name: "ComboChart",
    type: "info"
  },
  sh
), lh = (n) => typeof n == "boolean" || !n ? {
  show: !!n,
  invertStatus: !1
} : {
  show: n.show ?? !0,
  invertStatus: n.invertStatus ?? !1
}, _a = ({ label: n, ...e }) => {
  const t = Hl(), r = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = lh(e.trend), s = t(e.comparison), a = jl(r.numericValue, r.formatterOptions), o = yi(s.numericValue), l = yi(r.numericValue), c = P(() => {
    if (!(!o || !i.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, i.show]);
  return I("div", {
    className: "flex flex-col gap-2",
    children: [n && h("div", {
      children: n
    }), I("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [h("span", {
        className: "font-bold text-2xl",
        children: a
      }), o !== void 0 && h($l, {
        percentage: c,
        amount: s,
        invertStatus: i.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, ch = () => I("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [h(Ke, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), I("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [h(Ke, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), h(Ke, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
_a.displayName = "F0BigNumber";
const dh = os(_a, ch), Zm = Re("F0BigNumber", dh), Ca = {
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
}, ka = {
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
}, uh = {}, hh = {
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
}, fh = {
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
}, mh = {
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
}, ph = {
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
}, gh = {
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
}, vh = {
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
}, Ea = {
  width: hh,
  height: fh,
  minWidth: mh,
  minHeight: ph,
  maxWidth: gh,
  maxHeight: vh
}, Sa = {
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
}, Da = {
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
}, Na = {
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
}, yh = {}, Ra = {
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
}, Ta = {
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
}, bh = {}, xh = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, Aa = {
  overflow: xh,
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
}, wh = {}, Oa = {
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
}, _h = {}, Ch = {
  ...Sa,
  ...Oa,
  ...Ta,
  ...Na,
  ...Ra,
  ...Ea,
  ...Ca,
  ...ka,
  ...Aa,
  ...Da
};
function kh(n, e) {
  return e.split(" ").map((t) => `${n}:${t}`).join(" ");
}
function Eh(n, e) {
  const t = [];
  for (const [r, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = Ch[r];
    if (!s) continue;
    const a = s[String(i)];
    a && t.push(kh(n, a));
  }
  return t.join(" ");
}
const Sh = Qe({
  base: "",
  variants: {
    ...Sa,
    ...Oa,
    ...Ta,
    ...Na,
    ...Ra,
    ...Ea,
    ...Ca,
    ...ka,
    ...Aa,
    ...Da
  },
  defaultVariants: {
    ..._h,
    ...bh,
    ...yh,
    ...uh,
    ...wh
  }
}), Dh = ["sm", "md", "lg", "xl"], Ia = xe(({ display: n, position: e, padding: t, paddingX: r, paddingY: i, paddingTop: s, paddingBottom: a, paddingLeft: o, paddingRight: l, margin: c, marginX: d, marginY: u, marginTop: f, marginBottom: m, marginLeft: p, marginRight: g, gap: b, columns: E, rows: S, colSpan: C, colStart: w, rowSpan: y, width: _, height: x, minWidth: D, minHeight: A, maxWidth: T, maxHeight: k, background: R, borderColor: O, border: Z, borderTop: oe, borderBottom: le, borderLeft: re, borderRight: ne, borderRadius: te, borderRadiusTopLeft: ve, borderRadiusTopRight: Ze, borderRadiusBottomLeft: ue, borderRadiusBottomRight: he, borderStyle: _e, overflow: et, overflowX: pe, overflowY: Fe, divider: ye, dividerColor: Ce, alignItems: J, justifyContent: tt, flexDirection: ke, flexWrap: He, grow: q, shrink: se, sm: ae, md: je, lg: Ct, xl: Gt, ...Ue }, kt) => {
  const xt = oe && oe !== "none" || le && le !== "none" || re && re !== "none" || ne && ne !== "none", bn = Z && Z !== "none" || xt, xn = {
    sm: ae,
    md: je,
    lg: Ct,
    xl: Gt
  }, lr = Dh.map((wn) => {
    const nt = xn[wn];
    return nt ? Eh(wn, nt) : "";
  }).filter(Boolean).join(" ");
  return h("div", {
    ref: kt,
    className: K(xt && "border-0", Sh({
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
      marginTop: f,
      marginBottom: m,
      marginLeft: p,
      marginRight: g,
      gap: b,
      columns: E,
      rows: S,
      colSpan: C,
      colStart: w,
      rowSpan: y,
      width: _,
      height: x,
      minWidth: D,
      minHeight: A,
      maxWidth: T,
      maxHeight: k,
      background: R,
      borderColor: O,
      border: Z,
      borderTop: oe,
      borderBottom: le,
      borderLeft: re,
      borderRight: ne,
      borderRadius: te,
      borderRadiusTopLeft: ve,
      borderRadiusTopRight: Ze,
      borderRadiusBottomLeft: ue,
      borderRadiusBottomRight: he,
      borderStyle: _e,
      overflow: et,
      overflowX: pe,
      overflowY: Fe,
      divider: ye,
      dividerColor: Ce,
      alignItems: J,
      justifyContent: tt,
      flexDirection: ke,
      flexWrap: He,
      grow: q,
      shrink: se
    }), lr, bn && !O && "border-f1-border", ye && !Ce && "divide-f1-border", "scrollbar-macos"),
    ...Ue
  });
});
Ia.displayName = "F0Box";
const Um = ze({
  name: "F0Box",
  type: "layout"
}, Ia), qm = go.filter(
  (n) => n !== "ai"
), Ym = ls, Km = ["default", "outline", "neutral"], Xm = ls, Jm = ["sm", "md", "lg"], Qm = ["compact", "expanded"], ep = vo, tp = [
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
], Tr = ({ count: n, list: e }) => {
  const [t, r] = H(!1), i = h(Rn, {
    label: `+${n}`
  });
  return e?.length ? I(cs, {
    open: t,
    onOpenChange: r,
    children: [h(ds, {
      asChild: !0,
      children: h("button", {
        className: us("inline-flex flex-shrink-0 items-center"),
        children: i
      })
    }), h(hs, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: I(fs, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, a) => h("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: h(Rn, {
            ...s
          })
        }, a)), h(ms, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
};
Tr.displayName = "ChipCounter";
const Ma = ({ chips: n, max: e = 4, remainingCount: t, layout: r = "compact" }) => {
  if (r === "fill")
    return h(yo, {
      items: n,
      renderListItem: (l) => h(Rn, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => h(Tr, {
        count: (t ?? 0) + l,
        list: t ? void 0 : n.slice(n.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const i = n.slice(0, e), s = n.slice(e), a = t ?? n.length - e, o = a > 0;
  return I("div", {
    className: "flex items-center gap-2",
    children: [i.map((l, c) => h(Rn, {
      ...l
    }, c)), o && h(Tr, {
      count: a,
      list: t ? void 0 : s
    })]
  });
};
Ma.displayName = "F0ChipList";
const np = Re("F0ChipList", Ma), rp = bo, Nh = Qe({
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
}), Rh = Qe({
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
}), ip = ({ title: n, description: e, action: t, link: r, icon: i, variant: s = "neutral" }) => {
  const a = B(null);
  return h("div", {
    ref: a,
    className: "@container",
    children: h("div", {
      className: Nh({
        variant: s
      }),
      children: I("div", {
        className: K("flex flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between"),
        children: [I("div", {
          className: "flex flex-row gap-2",
          children: [h("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? h(xo, {
              icon: i || wo,
              size: "sm"
            }) : h(jr, {
              type: s,
              size: "sm"
            })
          }), I("div", {
            className: "flex flex-col gap-0.5",
            children: [h("p", {
              className: Rh({
                variant: s
              }),
              children: n
            }), h("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || r) && I("div", {
          className: K("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0"),
          children: [r && h(ps, {
            href: r.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: r.label
          }), t && h(Te, {
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
}, Pa = ({ disableClose: n = !1, onClose: e, isOpen: t, children: r, position: i = "right", size: s = "md", primaryAction: a, secondaryAction: o, title: l, description: c, module: d, otherActions: u, tabs: f, modal: m = !1, activeTabId: p, setActiveTabId: g, disableContentPadding: b }) => {
  const [E, S] = H(t);
  j(() => {
    S(t);
  }, [t]);
  const C = P(() => I(yt, {
    children: [h(_o, {
      title: l,
      description: c,
      module: d,
      otherActions: u,
      tabs: f,
      activeTabId: p,
      setActiveTabId: g,
      disableClose: n
    }), h(Co, {
      disableContentPadding: b ?? !1,
      children: r
    }), h(ko, {
      primaryAction: a ?? [],
      secondaryAction: o ?? [],
      onClose: () => S(!1)
    })]
  }), [l, c, d, u, f, p, g, n, b, r, a, o]);
  return h(Eo, {
    isOpen: E,
    onClose: e,
    position: i,
    size: s,
    modal: m,
    showOverlay: m,
    fullHeight: !0,
    onOpenChange: S,
    children: C
  });
}, Th = So, za = (n) => {
  const e = Th.reduce((t, r) => {
    const { [r]: i, ...s } = t;
    return s;
  }, n);
  return h(Pa, {
    ...e
  });
};
za.displayName = "F0Drawer";
const sp = Re("F0Drawer", za), Ah = 388;
function Oh({ filters: n, value: e, onChange: t, height: r, width: i = 600, className: s, showApplyButton: a = !0, applyButtonLabel: o }) {
  const l = Ht(), [c, d] = H(null), [u, f] = H(e);
  j(() => {
    f(e);
  }, [e]), j(() => {
    if (!c && n) {
      const b = Object.keys(n);
      if (b.length > 0) {
        const E = b.find((S) => {
          const C = u[S], w = fi(n[S].type);
          return C !== void 0 && !w.isEmpty(C, {
            schema: n[S],
            i18n: l
          });
        });
        d(E ?? b[0]);
      }
    }
  }, [n, c, u, l]);
  const m = (b, E) => {
    const S = {
      ...u,
      [b]: E
    };
    f(S), a || t(S);
  }, p = () => {
    t(u);
  }, g = P(() => r || Object.entries(n).reduce((E, [S, C]) => {
    const w = fi(C.type);
    return Math.max(E, w?.formHeight || Ah);
  }, 0), [n, r]);
  return !n || Object.keys(n).length === 0 ? null : h("div", {
    className: K("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: i
    },
    children: h(Do, {
      filters: n,
      tempFilters: u,
      selectedFilterKey: c,
      onFilterSelect: d,
      onFilterChange: m,
      onApply: p,
      height: g,
      showApplyButton: a,
      applyButtonLabel: o
    })
  });
}
Oh.displayName = "F0FilterPickerContent";
const La = "gap-4", Ih = "mt-6", Mh = "max-w-[720px]", bt = "md", Ba = Le(null);
function Fa() {
  const n = Ae(Ba);
  if (!n)
    throw new Error("useF0FormContext must be used within a F0Form");
  return n;
}
function dn(n, e, t) {
  const r = ["forms", n];
  return e && r.push(e), t && r.push(t), r.join(".");
}
function ie(n, e) {
  return n._def?.typeName === e;
}
function ri(n) {
  return ie(n, "ZodEffects") ? n._def.schema : n;
}
const Ha = /* @__PURE__ */ new WeakMap();
function ap(n, e) {
  Ha.set(n, e);
  const t = n;
  return t._f0Config = e, t._innerSchema = n, t;
}
function ii(n) {
  const e = n;
  return e._f0Config ? e._f0Config : Ha.get(n);
}
function op(n) {
  return ii(n) !== void 0;
}
function Ve(n) {
  let e = n;
  for (; ie(e, "ZodOptional") || ie(e, "ZodNullable") || ie(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function Ph(n, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = Ve(n);
  return ie(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : ie(t, "ZodNumber") ? "number" : ie(t, "ZodBoolean") ? "switch" : ie(t, "ZodDate") ? "date" : ie(t, "ZodEnum") || ie(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : ie(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function ja(n) {
  return ie(n, "ZodOptional") || ie(n, "ZodNullable") || ie(n, "ZodDefault") && ja(n._def.innerType);
}
const zh = /* @__PURE__ */ new Set([
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
function Lh(n) {
  const e = Ve(n);
  return ie(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "min" ? (r.value ?? 0) >= 1 : zh.has(r.kind)) : !1;
}
function $a(n) {
  if (ja(n))
    return !1;
  const e = Ve(n);
  return ie(e, "ZodString") ? Lh(n) : !0;
}
function Bh(n, e) {
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
function or(n, e) {
  return typeof n == "function" ? n({ values: e }) : Bh(n, e);
}
function si(n, e) {
  return n === void 0 ? !1 : typeof n == "function" ? n({ values: e }) : n;
}
function Dt(n, e) {
  if (n !== void 0)
    return typeof n == "function" ? n({ values: e }) : n;
}
function Fh(n) {
  const e = Ve(n);
  return ie(e, "ZodLiteral") && e._def.value === !0;
}
function Hh({ field: n, formField: e }) {
  const t = n.validation && Fh(n.validation);
  return h(No, {
    ...e,
    title: n.label,
    disabled: n.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function jh({ field: n, formField: e, error: t, isValidating: r, required: i }) {
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
  return h(yt, {
    children: n.render(s)
  });
}
function $h(n, e) {
  if (n)
    return {
      value: {
        from: n,
        to: n
      },
      granularity: e?.[0] ?? "day"
    };
}
function Wh(n) {
  return n?.value?.from;
}
function Wa({ field: n, formField: e, error: t, loading: r }) {
  const i = P(() => $h(e.value ?? void 0, n.granularities), [e.value, n.granularities]), s = (a) => {
    e.onChange(Wh(a) ?? null);
  };
  return h(As, {
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
function Ar(n) {
  if (!n || !(n instanceof Date) || isNaN(n.getTime())) return "";
  const e = String(n.getHours()).padStart(2, "0"), t = String(n.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function Gh(n) {
  if (!n) return;
  const [e, t] = n.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const r = /* @__PURE__ */ new Date();
  return r.setHours(e, t, 0, 0), r;
}
function yr(n, e) {
  if (!n) return;
  const t = new Date(n);
  if (e) {
    const [r, i, s] = e.split(":").map(Number);
    t.setHours(r ?? 0, i ?? 0, s ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function Ga({ field: n, formField: e, error: t, loading: r }) {
  const i = P(() => Ar(e.value ?? void 0), [e.value]), s = V((a) => {
    if (!a) {
      e.onChange(null);
      return;
    }
    const o = Gh(a);
    e.onChange(o);
  }, [e]);
  return h(gs, {
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
    icon: Ro
  });
}
function Vh({ field: n, formField: e, error: t, loading: r }) {
  const i = e.value ?? void 0, s = P(() => Ar(i), [i]), a = V((f) => {
    if (!f) {
      e.onChange(null);
      return;
    }
    e.onChange(yr(f, s));
  }, [e, s]), o = V((f) => {
    if (!f) {
      if (i) {
        const p = new Date(i);
        p.setHours(0, 0, 0, 0), e.onChange(p);
      }
      return;
    }
    const m = Ar(f);
    if (!i) {
      const p = /* @__PURE__ */ new Date();
      p.setHours(0, 0, 0, 0), e.onChange(yr(p, m));
      return;
    }
    e.onChange(yr(i, m));
  }, [e, i]), l = P(() => ({
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
  }), [n]), c = P(() => ({
    ...e,
    value: i,
    onChange: a
  }), [e, i, a]), d = P(() => ({
    id: `${n.id}-time`,
    type: "time",
    label: "Time",
    disabled: n.disabled,
    clearable: !1
  }), [n.id, n.disabled]), u = P(() => ({
    ...e,
    value: i,
    onChange: o
  }), [e, i, o]);
  return I("div", {
    className: "flex gap-2",
    children: [h("div", {
      className: "flex-1",
      children: h(Wa, {
        field: l,
        formField: c,
        error: t,
        loading: r
      })
    }), h("div", {
      className: "w-32",
      children: h(Ga, {
        field: d,
        formField: u,
        error: t,
        loading: r
      })
    })]
  });
}
function Zh(n) {
  if (!(!n?.from || !n?.to))
    return {
      value: {
        from: n.from,
        to: n.to
      },
      granularity: "range"
    };
}
function Uh(n) {
  if (!(!n?.value?.from || !n?.value?.to))
    return {
      from: n.value.from,
      to: n.value.to
    };
}
function qh({ field: n, formField: e, error: t, loading: r }) {
  const i = P(() => Zh(e.value ?? void 0), [e.value]), s = (o) => {
    e.onChange(Uh(o) ?? null);
  }, a = n.fromLabel && n.toLabel ? `${n.label} (${n.fromLabel} - ${n.toLabel})` : n.label;
  return h(As, {
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
function Yh({ field: n, formField: e, error: t, loading: r }) {
  return h(Wl, {
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
function Kh({ field: n, formField: e }) {
  const t = e.value;
  return h(Gl, {
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
function Xh({ field: n, formField: e, error: t, loading: r }) {
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
  return n.multiple ? h(At, {
    ...i,
    multiple: !0,
    clearable: n.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : n.clearable ? h(At, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : h(At, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function Jh({ field: n, formField: e, error: t, loading: r }) {
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
  return n.multiple ? h(At, {
    ...i,
    multiple: !0,
    clearable: n.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s)
  }) : n.clearable ? h(At, {
    ...i,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  }) : h(At, {
    ...i,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s)
  });
}
function Qh(n) {
  const { field: e } = n;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? h(Jh, {
    ...n,
    field: e
  }) : "options" in e && e.options !== void 0 ? h(Xh, {
    ...n,
    field: e
  }) : null;
}
function ef(n) {
  const e = Ve(n);
  return ie(e, "ZodLiteral") && e._def.value === !0;
}
function tf({ field: n, formField: e }) {
  const t = n.validation && ef(n.validation);
  return h(To, {
    ...e,
    title: n.label,
    disabled: n.disabled,
    required: t,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
const nf = {
  email: "name@example.com"
}, rf = {
  url: Oo,
  email: Ao
};
function sf({ field: n, formField: e, error: t, loading: r }) {
  const i = n.inputType ?? "text", s = n.placeholder ?? nf[i] ?? void 0, a = rf[i];
  return h(gs, {
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
function af({ field: n, formField: e, error: t, loading: r }) {
  return h(Vl, {
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
function of({ field: n, formField: e, fieldState: t, isSubmitting: r, isRequired: i, values: s }) {
  const a = !!t.error, { isValidating: o } = t, l = si(n.disabled, s) || r, c = {
    error: a,
    loading: o
  };
  switch (n.type) {
    case "text":
      return h(sf, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "number":
      return h(Yh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "textarea":
      return h(af, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "select":
      return h(Qh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "checkbox":
      return h(Hh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e
      });
    case "switch":
      return h(tf, {
        field: {
          ...n,
          disabled: l
        },
        formField: e
      });
    case "date":
      return h(Wa, {
        field: {
          ...n,
          disabled: l,
          minDate: Dt(n.minDate, s),
          maxDate: Dt(n.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "time":
      return h(Ga, {
        field: {
          ...n,
          disabled: l,
          minDate: Dt(n.minDate, s),
          maxDate: Dt(n.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "datetime":
      return h(Vh, {
        field: {
          ...n,
          disabled: l,
          minDate: Dt(n.minDate, s),
          maxDate: Dt(n.maxDate, s)
        },
        formField: e,
        ...c
      });
    case "daterange":
      return h(qh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e,
        ...c
      });
    case "richtext":
      return h(Kh, {
        field: {
          ...n,
          disabled: l
        },
        formField: e
      });
    case "custom":
      return h(jh, {
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
function ai({ field: n, sectionId: e }) {
  const t = $r(), r = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = Fa(), { forms: a } = Ht(), o = si(n.disabled, r), l = B(o);
  j(() => {
    const m = l.current;
    if (l.current = o, !m && o && n.resetOnDisable) {
      const p = t.formState.defaultValues?.[n.id];
      t.setValue(n.id, p, {
        shouldValidate: !1
      });
    }
  }, [o, n.resetOnDisable, n.id, t]);
  const c = !n.renderIf || or(n.renderIf, r), d = n.type !== "checkbox" && n.type !== "custom", u = n.validation && $a(n.validation), f = dn(s, e, n.id);
  return c ? h(bi, {
    control: t.control,
    name: n.id,
    render: ({ field: m, fieldState: p }) => I(Zl, {
      id: f,
      className: "scroll-mt-4",
      children: [d && I("label", {
        htmlFor: n.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [n.label, u && h("span", {
          className: "ml-0.5 text-f1-foreground-critical",
          children: "*"
        })]
      }), h(Ul, {
        children: of({
          field: n,
          formField: m,
          fieldState: p,
          isSubmitting: i,
          isRequired: u,
          values: r
        })
      }), n.helpText && h(ql, {
        children: n.helpText
      }), h(Yl, {
        fallback: u ? a.validation.required : a.validation.invalidType
      })]
    })
  }) : h(bi, {
    control: t.control,
    name: n.id,
    render: () => h("span", {
      className: "hidden",
      "aria-hidden": "true"
    })
  });
}
function Va({ row: n, sectionId: e }) {
  return h("div", {
    className: `flex xs:flex-row flex-col ${La} [&>*]:flex-1`,
    children: n.fields.map((t) => h(ai, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function lf(n) {
  const e = Ve(n);
  return ie(e, "ZodLiteral") && e._def.value === !0;
}
function Za({ fields: n }) {
  const e = $r(), { watch: t, setValue: r } = e, { isSubmitting: i } = e.formState, s = t(), a = P(() => n.filter((f) => !f.renderIf || or(f.renderIf, s)), [n, s]), o = P(() => Object.fromEntries(a.map((f) => [f.id, si(f.disabled, s) || i])), [a, i, s]), l = B({});
  j(() => {
    const f = l.current, m = e.formState.defaultValues ?? {};
    for (const p of a) {
      if (!(p.id in f))
        continue;
      const g = f[p.id], b = o[p.id] ?? !1;
      if (!g && b && p.resetOnDisable) {
        const E = m[p.id] ?? !1;
        r(p.id, E, {
          shouldValidate: !1
        });
      }
    }
    l.current = {
      ...o
    };
  }, [o, a, e, r]);
  const c = P(() => a.map((f) => ({
    value: f.id,
    title: f.label,
    description: f.helpText,
    disabled: o[f.id] ?? !1,
    required: !!(f.validation && lf(f.validation))
  })), [a, o]), d = P(() => a.filter((f) => s[f.id]).map((f) => f.id), [a, s]);
  return a.length === 0 ? null : h(Kl, {
    multiple: !0,
    isToggle: !0,
    grouped: !0,
    items: c,
    value: d,
    onChange: (f) => {
      for (const m of a) {
        const p = f.includes(m.id), g = !!s[m.id];
        p !== g && r(m.id, p, {
          shouldValidate: !0
        });
      }
    }
  });
}
function cf(n) {
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
function df({ section: n }) {
  const t = $r().watch(), { formName: r } = Fa(), { title: i, description: s, renderIf: a, action: o, fields: l } = n.section, c = n.id;
  if (a && !or(a, t))
    return null;
  const d = cf(l), u = dn(r, c);
  return I("section", {
    id: u,
    className: "flex flex-col scroll-mt-4",
    children: [I("div", {
      className: K("flex items-start justify-between py-5", "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"),
      children: [h(Xl, {
        title: i,
        description: s ?? ""
      }), o && h(Te, {
        label: o.label,
        icon: o.icon,
        onClick: o.onClick,
        href: o.href,
        variant: "outline",
        size: "md"
      })]
    }), h("div", {
      className: `flex flex-col ${La}`,
      children: d.map((f, m) => f.type === "switchGroup" ? h(Za, {
        fields: f.fields,
        sectionId: c
      }, `switch-group-${m}`) : f.type === "field" ? h(ai, {
        field: f.item.field,
        sectionId: c
      }, f.item.field.id) : f.type === "row" ? h(Va, {
        row: f.item,
        sectionId: c
      }, `row-${f.index}`) : null)
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
var Hi;
(function(n) {
  n.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Hi || (Hi = {}));
const z = ee.arrayToEnum([
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
]), ht = (n) => {
  switch (typeof n) {
    case "undefined":
      return z.undefined;
    case "string":
      return z.string;
    case "number":
      return Number.isNaN(n) ? z.nan : z.number;
    case "boolean":
      return z.boolean;
    case "function":
      return z.function;
    case "bigint":
      return z.bigint;
    case "symbol":
      return z.symbol;
    case "object":
      return Array.isArray(n) ? z.array : n === null ? z.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? z.promise : typeof Map < "u" && n instanceof Map ? z.map : typeof Set < "u" && n instanceof Set ? z.set : typeof Date < "u" && n instanceof Date ? z.date : z.object;
    default:
      return z.unknown;
  }
}, N = ee.arrayToEnum([
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
class st extends Error {
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
    if (!(e instanceof st))
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
st.create = (n) => new st(n);
const Or = (n, e) => {
  let t;
  switch (n.code) {
    case N.invalid_type:
      n.received === z.undefined ? t = "Required" : t = `Expected ${n.expected}, received ${n.received}`;
      break;
    case N.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(n.expected, ee.jsonStringifyReplacer)}`;
      break;
    case N.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${ee.joinValues(n.keys, ", ")}`;
      break;
    case N.invalid_union:
      t = "Invalid input";
      break;
    case N.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${ee.joinValues(n.options)}`;
      break;
    case N.invalid_enum_value:
      t = `Invalid enum value. Expected ${ee.joinValues(n.options)}, received '${n.received}'`;
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
      typeof n.validation == "object" ? "includes" in n.validation ? (t = `Invalid input: must include "${n.validation.includes}"`, typeof n.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith" in n.validation ? t = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith" in n.validation ? t = `Invalid input: must end with "${n.validation.endsWith}"` : ee.assertNever(n.validation) : n.validation !== "regex" ? t = `Invalid ${n.validation}` : t = "Invalid";
      break;
    case N.too_small:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "bigint" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : t = "Invalid input";
      break;
    case N.too_big:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : t = "Invalid input";
      break;
    case N.custom:
      t = "Invalid input";
      break;
    case N.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case N.not_multiple_of:
      t = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case N.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, ee.assertNever(n);
  }
  return { message: t };
};
let uf = Or;
function hf() {
  return uf;
}
const ff = (n) => {
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
function M(n, e) {
  const t = hf(), r = ff({
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
      t === Or ? void 0 : Or
      // then global default map
    ].filter((i) => !!i)
  });
  n.common.issues.push(r);
}
class Oe {
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
    return Oe.mergeObjectSync(e, r);
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
}), Kt = (n) => ({ status: "dirty", value: n }), Be = (n) => ({ status: "valid", value: n }), ji = (n) => n.status === "aborted", $i = (n) => n.status === "dirty", zt = (n) => n.status === "valid", Gn = (n) => typeof Promise < "u" && n instanceof Promise;
var L;
(function(n) {
  n.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, n.toString = (e) => typeof e == "string" ? e : e?.message;
})(L || (L = {}));
class gt {
  constructor(e, t, r, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Wi = (n, e) => {
  if (zt(e))
    return { success: !0, data: e.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new st(n.common.issues);
      return this._error = t, this._error;
    }
  };
};
function Y(n) {
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
    return ht(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: ht(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Oe(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: ht(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Gn(t))
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
      parsedType: ht(e)
    }, i = this._parseSync({ data: e, path: r.path, parent: r });
    return Wi(r, i);
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
      parsedType: ht(e)
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
      parsedType: ht(e)
    }, i = this._parse({ data: e, path: r.path, parent: r }), s = await (Gn(i) ? i : Promise.resolve(i));
    return Wi(r, s);
  }
  refine(e, t) {
    const r = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: N.custom,
        ...r(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((r, i) => e(r) ? !0 : (i.addIssue(typeof t == "function" ? t(r, i) : t), !1));
  }
  _refinement(e) {
    return new Bt({
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
    return mt.create(this, this._def);
  }
  nullable() {
    return Ft.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Je.create(this);
  }
  promise() {
    return qn.create(this, this._def);
  }
  or(e) {
    return Zn.create([this, e], this._def);
  }
  and(e) {
    return Un.create(this, e, this._def);
  }
  transform(e) {
    return new Bt({
      ...Y(this._def),
      schema: this,
      typeName: G.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Pr({
      ...Y(this._def),
      innerType: this,
      defaultValue: t,
      typeName: G.ZodDefault
    });
  }
  brand() {
    return new zf({
      typeName: G.ZodBranded,
      type: this,
      ...Y(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new zr({
      ...Y(this._def),
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
    return oi.create(this, e);
  }
  readonly() {
    return Lr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const mf = /^c[^\s-]{8,}$/i, pf = /^[0-9a-z]+$/, gf = /^[0-9A-HJKMNP-TV-Z]{26}$/i, vf = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, yf = /^[a-z0-9_-]{21}$/i, bf = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, xf = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, wf = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, _f = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let br;
const Cf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, kf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Ef = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Sf = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Df = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Nf = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ua = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Rf = new RegExp(`^${Ua}$`);
function qa(n) {
  let e = "[0-5]\\d";
  n.precision ? e = `${e}\\.\\d{${n.precision}}` : n.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = n.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function Tf(n) {
  return new RegExp(`^${qa(n)}$`);
}
function Af(n) {
  let e = `${Ua}T${qa(n)}`;
  const t = [];
  return t.push(n.local ? "Z?" : "Z"), n.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function Of(n, e) {
  return !!((e === "v4" || !e) && Cf.test(n) || (e === "v6" || !e) && Ef.test(n));
}
function If(n, e) {
  if (!bf.test(n))
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
function Mf(n, e) {
  return !!((e === "v4" || !e) && kf.test(n) || (e === "v6" || !e) && Sf.test(n));
}
class wt extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== z.string) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: N.invalid_type,
        expected: z.string,
        received: s.parsedType
      }), W;
    }
    const r = new Oe();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), M(i, {
          code: N.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), M(i, {
          code: N.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? M(i, {
          code: N.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && M(i, {
          code: N.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        wf.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "email",
          code: N.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        br || (br = new RegExp(_f, "u")), br.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "emoji",
          code: N.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        vf.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "uuid",
          code: N.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "nanoid")
        yf.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "nanoid",
          code: N.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        mf.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "cuid",
          code: N.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        pf.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "cuid2",
          code: N.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        gf.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "ulid",
          code: N.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), M(i, {
            validation: "url",
            code: N.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
        validation: "regex",
        code: N.invalid_string,
        message: s.message
      }), r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), M(i, {
        code: N.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), M(i, {
        code: N.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), M(i, {
        code: N.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "datetime" ? Af(s).test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
        code: N.invalid_string,
        validation: "datetime",
        message: s.message
      }), r.dirty()) : s.kind === "date" ? Rf.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
        code: N.invalid_string,
        validation: "date",
        message: s.message
      }), r.dirty()) : s.kind === "time" ? Tf(s).test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
        code: N.invalid_string,
        validation: "time",
        message: s.message
      }), r.dirty()) : s.kind === "duration" ? xf.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
        validation: "duration",
        code: N.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "ip" ? Of(e.data, s.version) || (i = this._getOrReturnCtx(e, i), M(i, {
        validation: "ip",
        code: N.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "jwt" ? If(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), M(i, {
        validation: "jwt",
        code: N.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "cidr" ? Mf(e.data, s.version) || (i = this._getOrReturnCtx(e, i), M(i, {
        validation: "cidr",
        code: N.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64" ? Df.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
        validation: "base64",
        code: N.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64url" ? Nf.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
        validation: "base64url",
        code: N.invalid_string,
        message: s.message
      }), r.dirty()) : ee.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _regex(e, t, r) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: N.invalid_string,
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
  ...Y(n)
});
function Pf(n, e) {
  const t = (n.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, i = t > r ? t : r, s = Number.parseInt(n.toFixed(i).replace(".", "")), a = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % a / 10 ** i;
}
class un extends Q {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== z.number) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: N.invalid_type,
        expected: z.number,
        received: s.parsedType
      }), W;
    }
    let r;
    const i = new Oe();
    for (const s of this._def.checks)
      s.kind === "int" ? ee.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), M(r, {
        code: N.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), M(r, {
        code: N.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), M(r, {
        code: N.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? Pf(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), M(r, {
        code: N.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), M(r, {
        code: N.not_finite,
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
    return new un({
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
    return new un({
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
un.create = (n) => new un({
  checks: [],
  typeName: G.ZodNumber,
  coerce: n?.coerce || !1,
  ...Y(n)
});
class hn extends Q {
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
    let r;
    const i = new Oe();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), M(r, {
        code: N.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), M(r, {
        code: N.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), M(r, {
        code: N.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : ee.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return M(t, {
      code: N.invalid_type,
      expected: z.bigint,
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
    return new hn({
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
    return new hn({
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
hn.create = (n) => new hn({
  checks: [],
  typeName: G.ZodBigInt,
  coerce: n?.coerce ?? !1,
  ...Y(n)
});
class Gi extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== z.boolean) {
      const r = this._getOrReturnCtx(e);
      return M(r, {
        code: N.invalid_type,
        expected: z.boolean,
        received: r.parsedType
      }), W;
    }
    return Be(e.data);
  }
}
Gi.create = (n) => new Gi({
  typeName: G.ZodBoolean,
  coerce: n?.coerce || !1,
  ...Y(n)
});
class Vn extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== z.date) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: N.invalid_type,
        expected: z.date,
        received: s.parsedType
      }), W;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: N.invalid_date
      }), W;
    }
    const r = new Oe();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), M(i, {
        code: N.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), M(i, {
        code: N.too_big,
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
    return new Vn({
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
Vn.create = (n) => new Vn({
  checks: [],
  coerce: n?.coerce || !1,
  typeName: G.ZodDate,
  ...Y(n)
});
class Vi extends Q {
  _parse(e) {
    if (this._getType(e) !== z.symbol) {
      const r = this._getOrReturnCtx(e);
      return M(r, {
        code: N.invalid_type,
        expected: z.symbol,
        received: r.parsedType
      }), W;
    }
    return Be(e.data);
  }
}
Vi.create = (n) => new Vi({
  typeName: G.ZodSymbol,
  ...Y(n)
});
class Zi extends Q {
  _parse(e) {
    if (this._getType(e) !== z.undefined) {
      const r = this._getOrReturnCtx(e);
      return M(r, {
        code: N.invalid_type,
        expected: z.undefined,
        received: r.parsedType
      }), W;
    }
    return Be(e.data);
  }
}
Zi.create = (n) => new Zi({
  typeName: G.ZodUndefined,
  ...Y(n)
});
class Ui extends Q {
  _parse(e) {
    if (this._getType(e) !== z.null) {
      const r = this._getOrReturnCtx(e);
      return M(r, {
        code: N.invalid_type,
        expected: z.null,
        received: r.parsedType
      }), W;
    }
    return Be(e.data);
  }
}
Ui.create = (n) => new Ui({
  typeName: G.ZodNull,
  ...Y(n)
});
class Ir extends Q {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Be(e.data);
  }
}
Ir.create = (n) => new Ir({
  typeName: G.ZodAny,
  ...Y(n)
});
class qi extends Q {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Be(e.data);
  }
}
qi.create = (n) => new qi({
  typeName: G.ZodUnknown,
  ...Y(n)
});
class vt extends Q {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return M(t, {
      code: N.invalid_type,
      expected: z.never,
      received: t.parsedType
    }), W;
  }
}
vt.create = (n) => new vt({
  typeName: G.ZodNever,
  ...Y(n)
});
class Yi extends Q {
  _parse(e) {
    if (this._getType(e) !== z.undefined) {
      const r = this._getOrReturnCtx(e);
      return M(r, {
        code: N.invalid_type,
        expected: z.void,
        received: r.parsedType
      }), W;
    }
    return Be(e.data);
  }
}
Yi.create = (n) => new Yi({
  typeName: G.ZodVoid,
  ...Y(n)
});
class Je extends Q {
  _parse(e) {
    const { ctx: t, status: r } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== z.array)
      return M(t, {
        code: N.invalid_type,
        expected: z.array,
        received: t.parsedType
      }), W;
    if (i.exactLength !== null) {
      const a = t.data.length > i.exactLength.value, o = t.data.length < i.exactLength.value;
      (a || o) && (M(t, {
        code: a ? N.too_big : N.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (M(t, {
      code: N.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (M(t, {
      code: N.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new gt(t, a, t.path, o)))).then((a) => Oe.mergeArray(r, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new gt(t, a, t.path, o)));
    return Oe.mergeArray(r, s);
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
  ...Y(e)
});
function Tt(n) {
  if (n instanceof ce) {
    const e = {};
    for (const t in n.shape) {
      const r = n.shape[t];
      e[t] = mt.create(Tt(r));
    }
    return new ce({
      ...n._def,
      shape: () => e
    });
  } else return n instanceof Je ? new Je({
    ...n._def,
    type: Tt(n.element)
  }) : n instanceof mt ? mt.create(Tt(n.unwrap())) : n instanceof Ft ? Ft.create(Tt(n.unwrap())) : n instanceof _t ? _t.create(n.items.map((e) => Tt(e))) : n;
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
    if (this._getType(e) !== z.object) {
      const c = this._getOrReturnCtx(e);
      return M(c, {
        code: N.invalid_type,
        expected: z.object,
        received: c.parsedType
      }), W;
    }
    const { status: r, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof vt && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const d = s[c], u = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: d._parse(new gt(i, u, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof vt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of o)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: i.data[d] }
          });
      else if (c === "strict")
        o.length > 0 && (M(i, {
          code: N.unrecognized_keys,
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
            new gt(i, u, i.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of l) {
        const u = await d.key, f = await d.value;
        c.push({
          key: u,
          value: f,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => Oe.mergeObjectSync(r, c)) : Oe.mergeObjectSync(r, l);
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
        for (; s instanceof mt; )
          s = s._def.innerType;
        t[r] = s;
      }
    return new ce({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ya(ee.objectKeys(this.shape));
  }
}
ce.create = (n, e) => new ce({
  shape: () => n,
  unknownKeys: "strip",
  catchall: vt.create(),
  typeName: G.ZodObject,
  ...Y(e)
});
ce.strictCreate = (n, e) => new ce({
  shape: () => n,
  unknownKeys: "strict",
  catchall: vt.create(),
  typeName: G.ZodObject,
  ...Y(e)
});
ce.lazycreate = (n, e) => new ce({
  shape: n,
  unknownKeys: "strip",
  catchall: vt.create(),
  typeName: G.ZodObject,
  ...Y(e)
});
class Zn extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new st(o.ctx.common.issues));
      return M(t, {
        code: N.invalid_union,
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
      const o = a.map((l) => new st(l));
      return M(t, {
        code: N.invalid_union,
        unionErrors: o
      }), W;
    }
  }
  get options() {
    return this._def.options;
  }
}
Zn.create = (n, e) => new Zn({
  options: n,
  typeName: G.ZodUnion,
  ...Y(e)
});
function Mr(n, e) {
  const t = ht(n), r = ht(e);
  if (n === e)
    return { valid: !0, data: n };
  if (t === z.object && r === z.object) {
    const i = ee.objectKeys(e), s = ee.objectKeys(n).filter((o) => i.indexOf(o) !== -1), a = { ...n, ...e };
    for (const o of s) {
      const l = Mr(n[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (t === z.array && r === z.array) {
    if (n.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < n.length; s++) {
      const a = n[s], o = e[s], l = Mr(a, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === z.date && r === z.date && +n == +e ? { valid: !0, data: n } : { valid: !1 };
}
class Un extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), i = (s, a) => {
      if (ji(s) || ji(a))
        return W;
      const o = Mr(s.value, a.value);
      return o.valid ? (($i(s) || $i(a)) && t.dirty(), { status: t.value, value: o.data }) : (M(r, {
        code: N.invalid_intersection_types
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
Un.create = (n, e, t) => new Un({
  left: n,
  right: e,
  typeName: G.ZodIntersection,
  ...Y(t)
});
class _t extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== z.array)
      return M(r, {
        code: N.invalid_type,
        expected: z.array,
        received: r.parsedType
      }), W;
    if (r.data.length < this._def.items.length)
      return M(r, {
        code: N.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), W;
    !this._def.rest && r.data.length > this._def.items.length && (M(r, {
      code: N.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...r.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new gt(r, a, r.path, o)) : null;
    }).filter((a) => !!a);
    return r.common.async ? Promise.all(s).then((a) => Oe.mergeArray(t, a)) : Oe.mergeArray(t, s);
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
    ...Y(e)
  });
};
class Ki extends Q {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== z.map)
      return M(r, {
        code: N.invalid_type,
        expected: z.map,
        received: r.parsedType
      }), W;
    const i = this._def.keyType, s = this._def.valueType, a = [...r.data.entries()].map(([o, l], c) => ({
      key: i._parse(new gt(r, o, r.path, [c, "key"])),
      value: s._parse(new gt(r, l, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, d = await l.value;
          if (c.status === "aborted" || d.status === "aborted")
            return W;
          (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return W;
        (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
      }
      return { status: t.value, value: o };
    }
  }
}
Ki.create = (n, e, t) => new Ki({
  valueType: e,
  keyType: n,
  typeName: G.ZodMap,
  ...Y(t)
});
class fn extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== z.set)
      return M(r, {
        code: N.invalid_type,
        expected: z.set,
        received: r.parsedType
      }), W;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (M(r, {
      code: N.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (M(r, {
      code: N.too_big,
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
          return W;
        d.status === "dirty" && t.dirty(), c.add(d.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...r.data.values()].map((l, c) => s._parse(new gt(r, l, r.path, c)));
    return r.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new fn({
      ...this._def,
      minSize: { value: e, message: L.toString(t) }
    });
  }
  max(e, t) {
    return new fn({
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
fn.create = (n, e) => new fn({
  valueType: n,
  minSize: null,
  maxSize: null,
  typeName: G.ZodSet,
  ...Y(e)
});
class Xi extends Q {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Xi.create = (n, e) => new Xi({
  getter: n,
  typeName: G.ZodLazy,
  ...Y(e)
});
class Ji extends Q {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return M(t, {
        received: t.data,
        code: N.invalid_literal,
        expected: this._def.value
      }), W;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ji.create = (n, e) => new Ji({
  value: n,
  typeName: G.ZodLiteral,
  ...Y(e)
});
function Ya(n, e) {
  return new Lt({
    values: n,
    typeName: G.ZodEnum,
    ...Y(e)
  });
}
class Lt extends Q {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return M(t, {
        expected: ee.joinValues(r),
        received: t.parsedType,
        code: N.invalid_type
      }), W;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return M(t, {
        received: t.data,
        code: N.invalid_enum_value,
        options: r
      }), W;
    }
    return Be(e.data);
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
Lt.create = Ya;
class Qi extends Q {
  _parse(e) {
    const t = ee.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== z.string && r.parsedType !== z.number) {
      const i = ee.objectValues(t);
      return M(r, {
        expected: ee.joinValues(i),
        received: r.parsedType,
        code: N.invalid_type
      }), W;
    }
    if (this._cache || (this._cache = new Set(ee.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = ee.objectValues(t);
      return M(r, {
        received: r.data,
        code: N.invalid_enum_value,
        options: i
      }), W;
    }
    return Be(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Qi.create = (n, e) => new Qi({
  values: n,
  typeName: G.ZodNativeEnum,
  ...Y(e)
});
class qn extends Q {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== z.promise && t.common.async === !1)
      return M(t, {
        code: N.invalid_type,
        expected: z.promise,
        received: t.parsedType
      }), W;
    const r = t.parsedType === z.promise ? t.data : Promise.resolve(t.data);
    return Be(r.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
qn.create = (n, e) => new qn({
  type: n,
  typeName: G.ZodPromise,
  ...Y(e)
});
class Bt extends Q {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === G.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (a) => {
        M(r, a), a.fatal ? t.abort() : t.dirty();
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
          return l.status === "aborted" ? W : l.status === "dirty" || t.value === "dirty" ? Kt(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return W;
        const o = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? W : o.status === "dirty" || t.value === "dirty" ? Kt(o.value) : o;
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
Bt.create = (n, e, t) => new Bt({
  schema: n,
  typeName: G.ZodEffects,
  effect: e,
  ...Y(t)
});
Bt.createWithPreprocess = (n, e, t) => new Bt({
  schema: e,
  effect: { type: "preprocess", transform: n },
  typeName: G.ZodEffects,
  ...Y(t)
});
class mt extends Q {
  _parse(e) {
    return this._getType(e) === z.undefined ? Be(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
mt.create = (n, e) => new mt({
  innerType: n,
  typeName: G.ZodOptional,
  ...Y(e)
});
class Ft extends Q {
  _parse(e) {
    return this._getType(e) === z.null ? Be(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ft.create = (n, e) => new Ft({
  innerType: n,
  typeName: G.ZodNullable,
  ...Y(e)
});
class Pr extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let r = t.data;
    return t.parsedType === z.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Pr.create = (n, e) => new Pr({
  innerType: n,
  typeName: G.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Y(e)
});
class zr extends Q {
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
    return Gn(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new st(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new st(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
zr.create = (n, e) => new zr({
  innerType: n,
  typeName: G.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Y(e)
});
class es extends Q {
  _parse(e) {
    if (this._getType(e) !== z.nan) {
      const r = this._getOrReturnCtx(e);
      return M(r, {
        code: N.invalid_type,
        expected: z.nan,
        received: r.parsedType
      }), W;
    }
    return { status: "valid", value: e.data };
  }
}
es.create = (n) => new es({
  typeName: G.ZodNaN,
  ...Y(n)
});
class zf extends Q {
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
class oi extends Q {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? W : s.status === "dirty" ? (t.dirty(), Kt(s.value)) : this._def.out._parseAsync({
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
    return new oi({
      in: e,
      out: t,
      typeName: G.ZodPipeline
    });
  }
}
class Lr extends Q {
  _parse(e) {
    const t = this._def.innerType._parse(e), r = (i) => (zt(i) && (i.value = Object.freeze(i.value)), i);
    return Gn(t) ? t.then((i) => r(i)) : r(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Lr.create = (n, e) => new Lr({
  innerType: n,
  typeName: G.ZodReadonly,
  ...Y(e)
});
var G;
(function(n) {
  n.ZodString = "ZodString", n.ZodNumber = "ZodNumber", n.ZodNaN = "ZodNaN", n.ZodBigInt = "ZodBigInt", n.ZodBoolean = "ZodBoolean", n.ZodDate = "ZodDate", n.ZodSymbol = "ZodSymbol", n.ZodUndefined = "ZodUndefined", n.ZodNull = "ZodNull", n.ZodAny = "ZodAny", n.ZodUnknown = "ZodUnknown", n.ZodNever = "ZodNever", n.ZodVoid = "ZodVoid", n.ZodArray = "ZodArray", n.ZodObject = "ZodObject", n.ZodUnion = "ZodUnion", n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", n.ZodIntersection = "ZodIntersection", n.ZodTuple = "ZodTuple", n.ZodRecord = "ZodRecord", n.ZodMap = "ZodMap", n.ZodSet = "ZodSet", n.ZodFunction = "ZodFunction", n.ZodLazy = "ZodLazy", n.ZodLiteral = "ZodLiteral", n.ZodEnum = "ZodEnum", n.ZodEffects = "ZodEffects", n.ZodNativeEnum = "ZodNativeEnum", n.ZodOptional = "ZodOptional", n.ZodNullable = "ZodNullable", n.ZodDefault = "ZodDefault", n.ZodCatch = "ZodCatch", n.ZodPromise = "ZodPromise", n.ZodBranded = "ZodBranded", n.ZodPipeline = "ZodPipeline", n.ZodReadonly = "ZodReadonly";
})(G || (G = {}));
const Lf = Ir.create;
vt.create;
Je.create;
const Bf = ce.create;
Zn.create;
Un.create;
_t.create;
Lt.create;
qn.create;
mt.create;
Ft.create;
function Ff(n, e) {
  return async (t, r, i) => {
    const s = Hf(n, t), a = { ...t };
    for (const l of Object.keys(a))
      a[l] === null && (a[l] = void 0);
    return Jl(s, e)(a, r, i);
  };
}
function Hf(n, e) {
  const r = ri(n).shape, i = {};
  for (const [a, o] of Object.entries(r)) {
    const l = ii(o);
    if (!l || !l.renderIf) {
      i[a] = o;
      continue;
    }
    or(l.renderIf, e) ? i[a] = o : i[a] = Lf();
  }
  const s = Bf(i);
  if (ie(n, "ZodEffects")) {
    const o = n._def.effect;
    if (o.type === "refinement")
      return s.superRefine(o.refinement);
  }
  return s;
}
function ts(n) {
  const e = document.getElementById(n);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function jf({
  formName: n,
  errors: e
}) {
  const t = Object.keys(e).filter((f) => f !== "root"), r = t.length > 0, i = t.length, [s, a] = H(0), o = B([]);
  j(() => {
    const f = t, m = o.current, p = f.find(
      (g) => !m.includes(g)
    );
    if (p) {
      const g = dn(n, void 0, p);
      ts(g);
      const b = f.indexOf(p);
      b !== -1 && a(b);
    }
    o.current = f;
  }, [t, n]);
  const l = V(
    (f) => {
      if (t.length === 0) return;
      const m = (f % t.length + t.length) % t.length;
      a(m);
      const p = t[m], g = dn(n, void 0, p);
      ts(g);
    },
    [t, n]
  ), c = V(() => {
    l(s - 1);
  }, [s, l]), d = V(() => {
    l(s + 1);
  }, [s, l]), u = V(() => {
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
function $f(n) {
  const e = Ve(n);
  if (!ie(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let r, i;
  for (const s of t)
    s.kind === "min" ? r = s.value : s.kind === "max" && (i = s.value);
  return { min: r, max: i };
}
function xr(n) {
  const e = Ve(n);
  if (!ie(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let r, i;
  for (const s of t)
    s.kind === "min" ? r = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: r, maxDate: i };
}
function Wf(n) {
  const e = Ve(n);
  if (!ie(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let r;
  for (const i of t)
    i.kind === "max" && (r = i.value);
  return { maxLength: r };
}
function Gf(n) {
  const e = Ve(n);
  return ie(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "email") : !1;
}
function Vf(n) {
  const e = Ve(n);
  return ie(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "url") : !1;
}
function ns(n) {
  return Gf(n) ? "email" : Vf(n) ? "url" : "text";
}
function rs(n, e, t, r) {
  const i = {
    id: n,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    validation: e
  }, s = !$a(e);
  switch (r) {
    case "text": {
      const a = "inputType" in t && t.inputType ? t.inputType : ns(e);
      return {
        ...i,
        type: "text",
        inputType: a,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: a, max: o } = $f(e);
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
      const { maxLength: a } = Wf(e);
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
      const a = xr(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = xr(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = xr(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
        inputType: ns(e),
        renderIf: t.renderIf
      };
  }
}
function Yn(n) {
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
          (l) => rs(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(o);
    } else {
      t.add(r);
      const a = rs(
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
function Ka(n) {
  const e = n.shape, t = [], r = Object.entries(e);
  for (let i = 0; i < r.length; i++) {
    const [s, a] = r[i], o = ii(a);
    if (o) {
      const l = Ph(a, o);
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
function Zf(n, e) {
  return P(() => {
    const t = ri(n), r = Ka(t), i = [], s = {};
    for (const l of r) {
      const c = l.config.section;
      c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
    }
    i.sort((l, c) => l.position - c.position);
    for (const l of Object.keys(s))
      s[l].sort((c, d) => c.position - d.position);
    const a = [];
    a.push(...Yn(i));
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
          fields: Yn(d)
        }
      };
      a.push(u);
    }
    return a;
  }, [n, e]);
}
function lp(n, e) {
  const t = ri(n), r = Ka(t), i = [], s = {};
  for (const l of r) {
    const c = l.config.section;
    c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
  }
  i.sort((l, c) => l.position - c.position);
  for (const l of Object.keys(s))
    s[l].sort((c, d) => c.position - d.position);
  const a = [];
  a.push(...Yn(i));
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
        fields: Yn(d)
      }
    };
    a.push(u);
  }
  return a;
}
function Uf(n) {
  const { validation: e } = n.forms;
  return (t, r) => {
    switch (t.code) {
      case N.invalid_type:
        return t.received === "undefined" || t.received === "null" ? { message: e.required } : { message: e.invalidType };
      case N.invalid_string:
        if (t.validation === "email")
          return { message: e.string.email };
        if (t.validation === "url")
          return { message: e.string.url };
        break;
      case N.too_small:
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
      case N.too_big:
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
      case N.invalid_date:
        return { message: e.date.invalid };
      case N.not_multiple_of:
        if (t.multipleOf === 1)
          return { message: e.number.integer };
        break;
      case N.invalid_literal:
        if (t.expected === !0)
          return { message: e.checkbox.mustBeChecked };
        break;
    }
    return { message: r.defaultError };
  };
}
function qf(n) {
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
const Yf = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Kf(n) {
  const e = Ht(), { forms: t } = e, { name: r, schema: i, sections: s, defaultValues: a, onSubmit: o, submitConfig: l, className: c, errorTriggerMode: d = "on-blur", styling: u, formRef: f } = n, m = u?.showSectionsSidepanel ?? !1, p = l?.type === "action-bar", g = l?.label ?? "Submit", b = l?.icon === null ? void 0 : l?.icon ?? Io, E = l?.type !== "action-bar" && l?.hideSubmitButton, S = !p && !E, C = l?.type === "action-bar" && l?.discardable, w = p ? l?.discardConfig : void 0, y = w?.label ?? t.actionBar.discard, _ = w?.icon === null ? void 0 : w?.icon ?? Mo, x = p ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, D = p && !!l?.centerActionBarInFrameContent, A = Zf(i, s), T = P(() => A.filter((q) => q.type === "section").map((q) => q.id), [A]), [k, R] = H(T[0]), O = V((q) => {
    R(q);
    const se = dn(r, q), ae = document.getElementById(se);
    ae && ae.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [r]), Z = P(() => !s || !m ? [] : T.map((q) => ({
    id: q,
    label: s[q]?.title ?? q,
    onClick: () => O(q)
  })), [s, T, m, O]), oe = P(() => Uf(e), [e]), le = Yf[d], re = P(() => Ff(i, {
    errorMap: oe
  }), [i, oe]), ne = Ql({
    resolver: re,
    mode: le,
    defaultValues: a
  }), te = ne.formState.errors.root, { isDirty: ve, isSubmitting: Ze, errors: ue } = ne.formState, { hasErrors: he, errorCount: _e, goToPreviousError: et, goToNextError: pe, resetErrorNavigation: Fe } = jf({
    formName: r,
    errors: ue
  }), ye = async (q) => {
    const se = {
      ...q
    };
    for (const je of Object.keys(se))
      se[je] === null && (se[je] = void 0);
    const ae = await o(se);
    ae.success ? (ne.reset(q), Fe()) : (ae.errors && Object.entries(ae.errors).forEach(([je, Ct]) => {
      ne.setError(je, {
        message: Ct
      });
    }), ae.rootMessage && ne.setError("root", {
      message: ae.rootMessage
    }));
  }, Ce = () => {
    ne.reset(), Fe();
  }, J = B(null);
  j(() => {
    if (f) {
      const q = {
        submit: () => new Promise((se, ae) => {
          ne.handleSubmit(async (je) => {
            await ye(je), se();
          }, () => {
            ae(new Error("Form validation failed"));
          })();
        }),
        reset: () => {
          ne.reset(), Fe();
        },
        isDirty: () => ne.formState.isDirty,
        _setStateCallback: (se) => {
          J.current = se;
        }
      };
      f.current = q;
    }
    return () => {
      f && (f.current = null);
    };
  }, [f, ne, Fe]), j(() => {
    J.current && J.current({
      isSubmitting: Ze,
      hasErrors: he
    });
  }, [Ze, he]);
  const tt = qf(A), ke = P(() => ({
    formName: r
  }), [r]), He = I("form", {
    onSubmit: ne.handleSubmit(ye),
    className: K("flex flex-col", Mh, c),
    children: [tt.map((q, se) => {
      const ae = se !== 0 && q.type !== "section" ? "mt-4" : "";
      switch (q.type) {
        case "switchGroup":
          return h("div", {
            className: ae,
            children: h(Za, {
              fields: q.fields
            })
          }, `switch-group-${se}`);
        case "field":
          return h("div", {
            className: ae,
            children: h(ai, {
              field: q.item.field
            })
          }, q.item.field.id);
        case "row":
          return h("div", {
            className: ae,
            children: h(Va, {
              row: q.item
            })
          }, `row-${q.index}`);
        case "section":
          return h("div", {
            className: se !== 0 ? Ih : "",
            children: h(df, {
              section: q.item
            })
          }, q.item.id);
        default:
          return null;
      }
    }), te && h("p", {
      className: "mt-4 text-base font-medium text-f1-foreground-critical",
      children: te.message
    }), !p && S && h("div", {
      className: "mt-4",
      children: h(Te, {
        type: "submit",
        label: g,
        icon: b,
        loading: Ze,
        disabled: he
      })
    })]
  });
  return h(Ba.Provider, {
    value: ke,
    children: I(ec, {
      ...ne,
      children: [m && Z.length > 0 ? I("div", {
        className: "flex w-full gap-4",
        children: [h("div", {
          className: "shrink-0 sticky top-4 h-fit self-start pt-3",
          children: h(Os, {
            items: Z,
            activeItem: k,
            scrollable: !1
          })
        }), h("div", {
          className: "w-px bg-f1-border-secondary"
        }), h("div", {
          className: "flex flex-1 justify-center",
          children: He
        })]
      }) : He, p && h(tc, {
        isOpen: ve,
        variant: "light",
        centerInFrameContent: D,
        label: he ? void 0 : x,
        leftContent: he ? I("div", {
          className: "flex items-center gap-3",
          children: [I("div", {
            className: "flex items-center gap-0.5",
            children: [h(Fr, {
              icon: Po,
              size: "md",
              color: "critical"
            }), h("span", {
              className: "font-medium text-f1-foreground-critical",
              children: _e === 1 ? t.actionBar.issues.one.replace("{{count}}", String(_e)) : t.actionBar.issues.other.replace("{{count}}", String(_e))
            })]
          }), _e > 1 && I("div", {
            className: "flex items-center gap-2",
            children: [h(Te, {
              icon: zo,
              onClick: et,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }), h(Te, {
              icon: Lo,
              onClick: pe,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            })]
          })]
        }) : void 0,
        primaryActions: [{
          label: g,
          icon: b,
          onClick: ne.handleSubmit(ye),
          disabled: he
        }],
        secondaryActions: C ? [{
          label: y,
          icon: _,
          onClick: Ce
        }] : []
      })]
    })
  });
}
function cp() {
  const [n, e] = H(!1), [t, r] = H(!1), i = B((d) => {
    e(d.isSubmitting), r(d.hasErrors);
  }), s = B(null), a = B({
    get current() {
      return s.current;
    },
    set current(d) {
      s.current = d, d && d._setStateCallback(i.current);
    }
  }), o = V(async () => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return s.current.submit();
  }, []), l = V(() => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    s.current.reset();
  }, []), c = V(() => s.current ? s.current.isDirty() : !1, []);
  return {
    formRef: a.current,
    submit: o,
    reset: l,
    isDirty: c,
    isSubmitting: n,
    hasErrors: t
  };
}
const dp = Re("F0Form", Kf), Xf = xe((n, e) => h(Zr, {
  ref: e,
  variant: "heading",
  ...n
}));
Xf.displayName = "F0Heading";
const up = Re(
  "F0GridStack",
  Vr
), wr = 16, Jf = Qe({
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
function Xa(n, e = 0) {
  return n.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? Xa(t.children, e + 1) : []]);
}
function Qf(n, e) {
  const t = n.length;
  if (t <= wr) return n;
  const r = t / (wr - 1), i = new Set(Array.from({
    length: wr - 1
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
function em({ items: n, activeItem: e, className: t, align: r = "left", variant: i = "dark" }) {
  const s = P(() => Qf(Xa(n), e), [n, e]);
  return h("div", {
    className: K("flex flex-col justify-center gap-2 py-3", r === "right" ? "items-end" : "items-start", t),
    children: s.map((a) => h("div", {
      className: Jf({
        depth: a.depth,
        variant: i,
        active: a.id === e
      })
    }, a.id))
  });
}
const tm = 300, nm = 0, rm = Qe({
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
function im({ title: n, items: e, className: t, activeItem: r, collapsible: i = !1, showChildrenCounter: s = !1, barsAlign: a = "left", size: o = "md", variant: l = "light" }) {
  const [c, d] = H(!1), u = B(!1), f = (p) => {
    p && !c && (u.current = !0), d(p);
  }, m = V((p) => {
    !p || !u.current || (u.current = !1, requestAnimationFrame(() => {
      p.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return I(Bo, {
    open: c,
    onOpenChange: f,
    openDelay: nm,
    closeDelay: tm,
    children: [h(Fo, {
      asChild: !0,
      children: h("button", {
        className: K(us(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": n ?? "Menu",
        children: h(em, {
          items: e,
          activeItem: r,
          align: a,
          variant: l
        })
      })
    }), h(Ho, {
      ref: m,
      side: a === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: K(rm({
        size: o
      }), !n && "pt-2", "scrollbar-macos"),
      children: h(Os, {
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
const hp = Re(
  "F0TableOfContentPopover",
  im
), sm = ({ benefits: n }) => h("div", {
  className: "flex flex-col gap-2",
  children: n.map((e, t) => h(am, {
    text: e
  }, t))
}), am = ({ text: n }) => I("div", {
  className: "flex flex-row items-start gap-2",
  children: [h(Fr, {
    icon: $o,
    size: "md",
    className: "text-f1-icon-positive"
  }), h("span", {
    children: n
  })]
}), Ja = xe(({ title: n, image: e, benefits: t, actions: r, withShadow: i = !0, module: s, moduleName: a, tag: o, promoTag: l }, c) => I("div", {
  ref: c,
  className: K("bg-white flex flex-row rounded-xl border border-f1-border-secondary", i && "shadow-md"),
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
          children: [s && h(vs, {
            module: s
          }), a && h("p", {
            className: "text-base font-medium text-f1-foreground",
            children: a
          })]
        }), (o || l) && I("div", {
          className: "flex justify-start gap-2",
          children: [o && h(jo, {
            icon: o.icon,
            text: o.label
          }), l && h(nc, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), h("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: n
        })]
      }), h(sm, {
        benefits: t
      })]
    }), r && h("div", {
      className: "flex gap-3",
      children: r
    })]
  })]
}));
Ja.displayName = "ProductBlankslate";
function om({ isOpen: n, onClose: e, title: t, children: r, module: i, portalContainer: s }) {
  const [a, o] = H(n);
  return j(() => {
    o(n);
  }, [n]), h(Wo, {
    open: a,
    onOpenChange: (c) => {
      o(c), c || e();
    },
    modal: !0,
    children: I(Go, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [I("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [I(ys, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [i && h(vs, {
            module: i,
            size: "lg"
          }), t]
        }), h(Br, {
          variant: "outline",
          icon: Hr,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), I(fs, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [r, h(ms, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function fp({ isOpen: n, onClose: e, title: t, image: r, benefits: i, errorMessage: s, successMessage: a, loadingState: o, nextSteps: l, closeLabel: c, primaryAction: d, modalTitle: u, modalModule: f, secondaryAction: m, portalContainer: p, tag: g, promoTag: b, showResponseDialog: E = !0 }) {
  const [S, C] = H(n), [w, y] = H(null), [_, x] = H(!1), D = async () => {
    if (d?.onClick) {
      x(!0);
      try {
        await d.onClick(), C(!1), E && y("success");
      } catch {
        E && y("error");
      } finally {
        x(!1);
      }
    }
  }, A = () => {
    C(!1), e?.();
  }, T = _;
  return I(yt, {
    children: [h(om, {
      isOpen: S,
      onClose: A,
      title: u,
      module: f,
      portalContainer: p,
      children: h("div", {
        className: "pb-4 pl-4",
        children: h(Ja, {
          title: t,
          image: r,
          benefits: i,
          withShadow: !1,
          tag: g,
          promoTag: b,
          actions: I("div", {
            className: "flex gap-3",
            children: [d && h(Te, {
              variant: d.variant,
              label: T ? o.label : d.label,
              icon: d.icon || void 0,
              onClick: D,
              loading: d.loading,
              size: d.size
            }), m && h(Te, {
              onClick: m.onClick,
              label: m.label,
              variant: m.variant,
              size: m.size,
              icon: m.icon
            })]
          })
        })
      })
    }), w && E && h(Is, {
      open: !0,
      onClose: () => {
        A(), y(null);
      },
      success: w === "success",
      errorMessage: s,
      successMessage: a,
      nextSteps: l,
      closeLabel: c,
      portalContainer: p
    })]
  });
}
function lm({ mediaUrl: n, title: e, description: t, onClose: r, dismissible: i, width: s, trackVisibility: a, actions: o, showConfirmation: l = !0 }) {
  const [c, d] = H(!1), u = () => {
    d(!0), r && r();
  };
  j(() => {
    a && a(!c);
  }, [a, c]);
  const f = n?.includes(".mp4");
  return h(yt, {
    children: c ? null : I(Vo, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [I(Zo, {
        children: [i && h("div", {
          className: "absolute right-2 top-2 z-10",
          children: h(Te, {
            variant: "ghost",
            icon: Hr,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          })
        }), I("div", {
          children: [h("div", {
            children: n && (f ? h("video", {
              src: n,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : h("img", {
              src: n,
              alt: e,
              className: "h-full w-full rounded-md"
            }))
          }), I("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [h(xi, {
              className: "text-lg font-medium",
              children: e
            }), h(xi, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), o && h(Uo, {
        className: "p-3",
        children: o.map((m) => m.type === "upsell" ? h(Ms, {
          label: m.label,
          onRequest: m.onClick,
          errorMessage: m.errorMessage,
          successMessage: m.successMessage,
          loadingState: m.loadingState,
          nextSteps: m.nextSteps,
          closeLabel: m.closeLabel,
          showConfirmation: l && m.showConfirmation,
          variant: m.variant
        }, m.label) : h(Te, {
          label: m.label,
          onClick: m.onClick,
          variant: m.variant
        }, m.label))
      })]
    })
  });
}
const cm = xe(function({ primaryAction: e, secondaryAction: t, ...r }, i) {
  const s = (l) => l.variant === "promote" ? h(Ms, {
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
  }) : h(Te, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), a = e?.variant !== "promote" ? e : void 0, o = t?.variant !== "promote" ? t : void 0;
  return I(rc, {
    ref: i,
    ...r,
    primaryAction: a,
    secondaryAction: o,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
cm.displayName = "UpsellingBanner";
function mp({ isOpen: n, setIsOpen: e, label: t, variant: r = "promote", size: i = "md", showIcon: s = !0, side: a = "right", align: o = "center", icon: l = qo, mediaUrl: c, title: d, description: u, width: f = "300px", trackVisibility: m, actions: p, onClick: g, hideLabel: b = !1 }) {
  const [E, S] = H(!1), [C, w] = H(null), [y, _] = H(null), x = (R) => {
    e(R), g && g();
  }, D = async (R) => {
    if (R.type === "upsell") {
      _(R);
      try {
        await R.onClick(), R.showConfirmation && (S(!0), w("success"));
      } catch {
        S(!0), w("error");
      }
    }
  }, A = () => {
    w(null), S(!1), _(null), e(!1);
  }, T = n && !E, k = p?.map((R) => R.type === "upsell" ? {
    ...R,
    onClick: () => D(R)
  } : R);
  return I(yt, {
    children: [I(cs, {
      open: T,
      onOpenChange: x,
      children: [h(ds, {
        asChild: !0,
        children: h(Te, {
          variant: r,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(n),
          hideLabel: b
        })
      }), h(hs, {
        side: a,
        align: o,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: h(lm, {
          mediaUrl: c,
          title: d,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: f,
          trackVisibility: m,
          actions: k,
          showConfirmation: !1
        })
      })]
    }), y?.type === "upsell" && y.showConfirmation && C && h(Is, {
      open: !0,
      onClose: A,
      success: C === "success",
      errorMessage: y.errorMessage,
      successMessage: y.successMessage,
      nextSteps: y.nextSteps,
      closeLabel: y.closeLabel,
      portalContainer: null
    })]
  });
}
const dm = ({ isOpen: n = !1, onClose: e = () => {
}, type: t, title: r, description: i, primaryAction: s, secondaryAction: a }) => h(bs, {
  isOpen: n,
  onClose: e,
  variant: "notification",
  size: "sm",
  primaryAction: s,
  secondaryAction: a,
  type: t == "critical" ? "critical" : "default",
  modal: !0,
  children: I("div", {
    className: "flex flex-col gap-4 py-2",
    children: [h(jr, {
      type: t,
      size: "lg"
    }), I("div", {
      className: "flex flex-col gap-0.5",
      children: [h(ys, {
        className: "text-xl sm:text-lg",
        children: r
      }), h(ic, {
        className: "text-lg sm:text-base",
        children: i
      })]
    })]
  })
}), um = async (n) => Promise.resolve(typeof n.value == "function" ? await n.value() : n.value), hm = ({ items: n }) => {
  const [e, t] = H({}), r = (o) => e[o] > 0, i = (o, l) => {
    t((c) => ({
      ...c,
      [o]: (c[o] || 0) + l
    }));
  }, s = P(() => {
    const o = (l, c) => ({
      ...c,
      value: rn(),
      onClick: async () => {
        c.nonBlocking || i(l.id, 1);
        try {
          const d = await um(c);
          l.onClickAction(c, d);
        } finally {
          c.nonBlocking || i(l.id, -1);
        }
        return Promise.resolve();
      }
    });
    return n.map((l) => ({
      ...l,
      actions: {
        primary: _r(l.actions.primary).map((c) => o(l, c)),
        secondary: _r(l.actions.secondary).map((c) => o(l, c))
      }
    }));
  }, [n]), a = P(() => {
    const o = (l, c) => ({
      ...c,
      disabled: c.disabled || r(l)
    });
    return s.map((l) => ({
      ...l,
      actions: {
        primary: l.actions.primary.map((c) => o(l.id, c)),
        secondary: l.actions.secondary.map((c) => o(l.id, c))
      }
    }));
  }, [s, e]);
  return h(yt, {
    children: a.map((o) => h(_s, {
      children: o.variant === "notification" ? h(dm, {
        title: o.title,
        description: o.description ?? "",
        type: o.type,
        isOpen: !0,
        onClose: o.onCloseDialog,
        primaryAction: o.actions.primary[0],
        secondaryAction: o.actions.secondary
      }, o.id) : o.variant === "drawer" ? h(Pa, {
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
      }, o.id) : h(bs, {
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
}, Qa = Le(null), fm = ({ children: n }) => {
  const [e, t] = H([]), [r, i] = H(!1);
  j(() => {
    i(!0);
  }, []);
  const s = V((d) => {
    t((u) => [...u, d]);
  }, []), a = V((d) => {
    t((u) => u.filter((f) => f.id !== d));
  }, []), o = V((d) => {
    t((u) => [...u, d]);
  }, []), l = V((d) => {
    t((u) => u.filter((f) => f.id !== d));
  }, []), c = P(() => ({
    addDialog: s,
    removeDialog: a,
    addDrawer: o,
    removeDrawer: l
  }), [s, a, o, l]);
  return I(Qa.Provider, {
    value: c,
    children: [r && typeof document < "u" && Kn(h(hm, {
      items: e
    }), document.body), n]
  });
}, eo = () => {
  const n = Ae(Qa);
  if (!n)
    throw new Error("useDialogsAlikeLayoutContext must be used within a DialogsAlikeLayoutProvider");
  return n;
}, pp = () => {
  const n = Ht(), { addDialog: e, removeDialog: t } = eo(), r = B(/* @__PURE__ */ new Map()), i = (d) => s({
    ...d,
    variant: "default"
  }), s = (d) => new Promise((u) => {
    const f = d.id || rn(), m = async (E, S) => {
      u(S ?? void 0), !E?.keepOpen && (r.current.delete(f), t(f));
    }, p = () => {
      m(void 0, void 0);
    }, g = {
      id: f,
      actions: d.actions,
      onCloseDialog: p,
      onClickAction: (E, S) => {
        m(E, S);
      }
    };
    let b;
    if (d.variant === "notification") {
      if (!d.type || d.type === "default")
        throw new Error("Notification dialog must have a type");
      b = {
        ...d,
        ...g,
        variant: "notification",
        type: d.type
      };
    } else
      b = {
        ...d,
        ...g,
        variant: "default",
        type: void 0
      };
    r.current.set(f, p), e(b);
  }), a = (d) => {
    const u = {
      type: d.type ?? "info",
      variant: "notification",
      description: d.msg,
      id: d.id || rn(),
      title: d.title,
      content: h(yt, {}),
      actions: d.actions
    };
    return s(u);
  };
  return {
    openDialog: i,
    openNotificationDialog: a,
    alert: (d) => a({
      ...d,
      actions: {
        primary: {
          value: d.confirm?.value ?? !0,
          label: d.confirm?.label || n.actions.ok
        }
      }
    }),
    confirm: (d) => a({
      ...d,
      actions: {
        primary: {
          value: d.confirm?.value ?? !0,
          label: d.confirm?.label || n.actions.ok
        },
        secondary: {
          value: d.cancel?.value ?? !1,
          label: d.cancel?.label || n.actions.cancel
        }
      }
    }),
    closeDialog: (d) => {
      const u = r.current.get(d);
      u ? u() : t(d);
    }
  };
}, gp = () => {
  const { addDrawer: n, removeDrawer: e } = eo(), t = B(/* @__PURE__ */ new Map()), r = (a) => i({
    ...a,
    variant: "drawer"
  }), i = (a) => new Promise((o) => {
    const l = a.id || rn(), c = async (f, m) => {
      o(m ?? void 0), !f?.keepOpen && (t.current.delete(l), e(l));
    }, d = () => {
      c(void 0, void 0);
    }, u = {
      ...a,
      id: l,
      onCloseDialog: d,
      onClickAction: (f, m) => {
        c(f, m);
      }
    };
    t.current.set(l, d), n(u);
  });
  return {
    openDrawer: r,
    closeDrawer: (a) => {
      const o = t.current.get(a);
      o ? o() : e(a);
    }
  };
}, mm = Qe({
  base: "isolation-isolate pointer-events-auto relative flex w-full flex-col gap-3 rounded-lg border p-3 shadow-lg bg-f1-background-inverse dark:bg-f1-background-inverse-secondary overflow-hidden",
  variants: {
    variant: {
      error: "border-f1-border-critical",
      warning: "border-f1-border-warning",
      success: "border-f1-border-positive",
      default: "border-f1-border py-3 px-4"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), pm = Qe({
  base: "font-medium text-base",
  variants: {
    variant: {
      error: "text-f1-icon-critical",
      warning: "text-f1-icon-warning",
      success: "text-f1-icon-positive",
      default: "text-f1-foreground-inverse"
    },
    hasIcon: {
      true: "pt-[3px]",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    hasIcon: !1
  }
}), li = xe(({ title: n, description: e, variant: t = "default", duration: r, onClose: i, actions: s, forcePauseTimer: a }, o) => {
  const l = Ht(), [c, d] = H(r || 0), [u, f] = H(!1), { role: m, ariaLive: p, avatarType: g, progressBarColor: b } = P(() => {
    const A = () => t === "error" || t === "warning" ? {
      role: "alert",
      ariaLive: "assertive"
    } : {
      role: "status",
      ariaLive: "polite"
    }, T = {
      error: "critical",
      warning: "warning",
      success: "positive",
      default: null
    }, k = {
      error: "bg-f1-icon-critical",
      warning: "bg-f1-icon-warning",
      success: "bg-f1-icon-positive",
      default: "bg-f1-foreground-inverse-secondary"
    };
    return {
      ...A(),
      avatarType: T[t],
      progressBarColor: k[t]
    };
  }, [t]), E = V(() => {
    i?.();
  }, [i]);
  j(() => {
    if (!r || r <= 0 || u || a)
      return;
    const A = setInterval(() => {
      d((T) => {
        const k = T - 16;
        return k <= 0 ? (clearInterval(A), E(), 0) : k;
      });
    }, 16);
    return () => clearInterval(A);
  }, [r, u, E, a]);
  const S = () => {
    r && r > 0 && f(!0);
  }, C = () => {
    r && r > 0 && f(!1);
  }, w = _r(s), y = w.filter((A) => A.type === "button"), _ = w.filter((A) => A.type === "link"), x = (A, T) => {
    T && T(), A.keepOpen || E();
  }, D = r ? c / r * 100 : 0;
  return I("div", {
    ref: o,
    role: m,
    "aria-live": p,
    className: mm({
      variant: t
    }),
    onMouseEnter: S,
    onMouseLeave: C,
    children: [I("div", {
      className: "pointer-events-auto flex flex-row gap-3",
      children: [g && h("div", {
        className: "flex-shrink-0",
        children: h(jr, {
          type: g,
          size: "sm"
        })
      }), I("div", {
        className: "flex flex-1 flex-col gap-1",
        children: [n && h("p", {
          className: pm({
            variant: t,
            hasIcon: !!g
          }),
          children: n
        }), e && h("p", {
          className: "line-clamp-3 text-base text-f1-foreground-inverse-secondary",
          children: e
        }), (y.length > 0 || _.length > 0) && I("div", {
          className: "dark mt-1 flex flex-row flex-wrap items-center gap-3",
          children: [y.map((A) => h(Te, {
            ...A,
            variant: "outline",
            size: "sm",
            onClick: () => x(A, A.onClick)
          }, `button-${A.label}`)), _.map((A) => h("div", {
            onClick: () => x(A),
            children: h(ps, {
              href: A.href,
              children: A.label
            })
          }, `link-${A.label}`))]
        })]
      }), i && h("div", {
        className: "dark flex-shrink-0",
        children: h(Te, {
          variant: "ghost",
          icon: Hr,
          size: "sm",
          hideLabel: !0,
          onClick: E,
          label: l.actions.close
        })
      })]
    }), r && r > 0 && h("div", {
      className: "absolute bottom-0 left-0 right-0 h-[3px] w-full overflow-hidden rounded-b-lg",
      children: h("div", {
        className: K("h-full w-full", b),
        style: {
          transform: `translateX(-${100 - D}%)`,
          transition: u ? "none" : "transform 16ms linear"
        }
      })
    })]
  });
});
li.displayName = "F0Toast";
const vp = () => xs("(min-width: 640px)", {
  initializeWithValue: !1
}), gm = () => xs("(max-width: 639px)", {
  initializeWithValue: !1
}), to = Le(null), vm = {
  "top-right": "justify-end items-start top-0 right-0 bottom-0 left-0 sm:left-auto"
}, ym = 3, bm = 2, is = 3, no = 400, xm = ({ items: n, isTransitioning: e, promotingIds: t, onHoverChange: r }) => {
  const [i, s] = H(!1), a = B(!1), o = B(/* @__PURE__ */ new Set());
  for (const g of t)
    o.current.add(g);
  const l = new Set(n.map((g) => g.id));
  for (const g of o.current)
    l.has(g) || o.current.delete(g);
  const c = 500, d = 40, u = Math.min(n.length * 15, 150), f = Math.min(n.length * 2, 10);
  j(() => {
    if (e) {
      a.current = !0, s(!1);
      const g = setTimeout(() => {
        a.current = !1;
      }, no);
      return () => clearTimeout(g);
    }
  }, [e]);
  const m = () => {
    a.current || s(!0);
  };
  if (j(() => {
    r?.(i);
  }, [i]), n.length === 0) return null;
  const p = n.filter((g) => !o.current.has(g.id)).length;
  return p === 0 ? null : h("div", {
    className: "pointer-events-auto relative z-[101] mb-4 flex flex-col gap-4",
    onMouseEnter: m,
    onMouseLeave: () => s(!1),
    children: h(Nn, {
      children: (() => {
        let g = 0;
        return n.map((b) => {
          if (o.current.has(b.id))
            return h(It.div, {
              style: {
                position: "absolute",
                width: 0,
                height: 0,
                overflow: "hidden",
                opacity: 0,
                pointerEvents: "none"
              },
              exit: {
                transition: {
                  duration: 0
                }
              }
            }, b.id);
          const S = g;
          g++;
          const C = Math.min(S, is - 1), w = S < is;
          return h(It.div, {
            initial: {
              opacity: 0,
              x: 60,
              scale: 1 - C * 0.05
            },
            animate: i ? "expanded" : "stacked",
            exit: {
              opacity: 0,
              scale: 0.5,
              transition: {
                duration: 0.2
              }
            },
            variants: {
              stacked: {
                x: 0,
                y: C * -10,
                scale: w ? 1 - C * 0.05 : 0.9,
                opacity: w ? 1 : 0,
                zIndex: p - S,
                height: S === 0 ? "auto" : 0
              },
              expanded: {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                zIndex: S + 1,
                height: "auto"
              }
            },
            style: {
              order: i ? p - 1 - S : 0
            },
            transition: {
              type: "spring",
              stiffness: c - u,
              damping: d + f
            },
            className: K(!i && S > 0 && "absolute top-0 left-0 right-0"),
            children: h(li, {
              ...b,
              forcePauseTimer: !0
            })
          }, b.id);
        });
      })()
    })
  });
}, wm = ({ items: n, position: e = "top-right" }) => {
  const t = gm(), r = B(/* @__PURE__ */ new Set()), i = B(/* @__PURE__ */ new Set()), s = B(/* @__PURE__ */ new Set()), [a, o] = H(!1), l = B(null), c = B(null), d = B(0), { stackedItems: u, activeItems: f } = P(() => {
    const w = n.length, y = Math.min(w, t ? bm : ym), _ = n.slice(0, y);
    return {
      stackedItems: n.slice(y),
      activeItems: _
    };
  }, [n, t]), m = new Set(u.map((w) => w.id)), p = /* @__PURE__ */ new Set();
  for (const w of r.current)
    !m.has(w) && f.some((y) => y.id === w) && p.add(w);
  r.current = m, i.current = p;
  for (const w of p)
    s.current.add(w);
  for (const w of s.current)
    f.some((y) => y.id === w) || s.current.delete(w);
  const g = s.current.size === 0 ? u : [...f.filter((w) => s.current.has(w.id)), ...u];
  if (p.size > 0 && l.current && c.current) {
    const w = l.current.getBoundingClientRect(), y = c.current.getBoundingClientRect();
    d.current = w.top - y.top;
  }
  j(() => {
    if (p.size > 0) {
      o(!0);
      const w = setTimeout(() => o(!1), no);
      return () => clearTimeout(w);
    }
  }, [u, f]);
  const b = n.length > 0, [E, S] = H(!1), C = V((w) => {
    S(w);
  }, []);
  return h("div", {
    className: K("pointer-events-none fixed z-[100] flex overflow-x-hidden overflow-y-auto", vm[e]),
    children: h(Nn, {
      children: b && I("div", {
        className: "flex w-full flex-col p-6 sm:w-[350px]",
        children: [h("div", {
          ref: l,
          children: h(xm, {
            items: g,
            isTransitioning: a,
            promotingIds: i.current,
            onHoverChange: C
          })
        }), h("div", {
          ref: c,
          className: "relative flex flex-col-reverse gap-4",
          children: h(Nn, {
            mode: "popLayout",
            children: f.map((w) => {
              const y = i.current.has(w.id);
              return h(It.div, {
                layout: !0,
                initial: y ? {
                  opacity: 1,
                  x: 0,
                  y: d.current,
                  scale: 1
                } : {
                  opacity: 0,
                  x: 60,
                  scale: 0.95
                },
                animate: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1
                },
                exit: {
                  opacity: 0,
                  scale: 0.9,
                  transition: {
                    duration: 0.2
                  }
                },
                children: h(li, {
                  ...w,
                  forcePauseTimer: E
                })
              }, w.id);
            })
          })
        })]
      }, "toast-panel")
    })
  });
}, _m = ({ children: n }) => {
  const [e, t] = H([]), [r, i] = H(!1);
  j(() => {
    i(!0);
  }, []);
  const s = V((c) => {
    t((d) => {
      const u = d.findIndex((f) => f.id === c.id);
      if (u !== -1) {
        const f = [...d];
        return f[u] = c, f;
      }
      return [...d, c];
    });
  }, []), a = V((c) => {
    t((d) => d.filter((u) => u.id !== c));
  }, []), o = V(() => {
    t([]);
  }, []), l = P(() => ({
    addToast: s,
    removeToast: a,
    clearAll: o
  }), [s, a, o]);
  return I(to.Provider, {
    value: l,
    children: [r && typeof document < "u" && Kn(h(wm, {
      items: e
    }), document.body), n]
  });
}, Cm = () => {
  const n = Ae(to);
  if (!n)
    throw new Error("useToastContext must be used within a ToastProvider");
  return n;
}, yp = () => {
  const { addToast: n, removeToast: e, clearAll: t } = Cm();
  return {
    toast: V((i) => {
      const s = i.id ?? rn();
      return n({
        duration: i.persistent ? void 0 : 1e4,
        ...i,
        id: s,
        onClose: () => e(s)
      }), s;
    }, [n, e]),
    removeToast: e,
    clearAll: t
  };
}, km = Le(null), Em = ({ children: n, fullScreen: e = !0 }) => {
  const t = B(null), [r, i] = H(t.current);
  return tl(() => {
    i(t.current);
  }, []), h(km.Provider, {
    value: {
      element: r
    },
    children: h("div", {
      ref: t,
      id: "f0-layout",
      className: K({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: n
    })
  });
}, Sm = ({ children: n }) => h(oc, {
  reducedMotion: "user",
  children: n
}), bp = ({ children: n, layout: e, link: t, privacyModeInitiallyEnabled: r, image: i, i18n: s, l10n: a, isDev: o = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: c = !1 }) => h(Sm, {
  children: h(Yo, {
    isDev: o,
    showExperimentalWarnings: c,
    children: h(Ko, {
      ...a,
      children: h(Xo, {
        ...s,
        children: h(Jo, {
          ...t,
          children: h(Em, {
            ...e,
            children: h(Qo, {
              children: h(sc, {
                initiallyEnabled: r,
                children: h(el, {
                  ...i,
                  children: h(ac, {
                    handler: l,
                    children: h(fm, {
                      children: h(_m, {
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
  })
}), ss = (n) => `datacollection-${n}`, xp = {
  get: async (n) => JSON.parse(
    localStorage.getItem(ss(n)) ?? "{}"
  ),
  set: async (n, e) => {
    localStorage.setItem(ss(n), JSON.stringify(e));
  }
};
export {
  Cp as A,
  cv as AiChatTranslationsProvider,
  Bm as AreaChart,
  kp as Await,
  Fm as BarChart,
  Ep as Blockquote,
  Hm as CategoryBarChart,
  Sp as ChatSpinner,
  Vm as ComboChart,
  Im as Dashboard,
  jg as DndProvider,
  Dp as Em,
  Np as EmojiImage,
  Rp as F0ActionItem,
  Tp as F0AiChat,
  Ap as F0AiChatProvider,
  Op as F0AiChatTextArea,
  Ip as F0AiCollapsibleMessage,
  Mp as F0AiFullscreenChat,
  ip as F0Alert,
  dv as F0AuraVoiceAnimation,
  Pp as F0Avatar,
  jr as F0AvatarAlert,
  zp as F0AvatarCompany,
  $g as F0AvatarDate,
  Lp as F0AvatarEmoji,
  Bp as F0AvatarFile,
  xo as F0AvatarIcon,
  Wg as F0AvatarList,
  vs as F0AvatarModule,
  Fp as F0AvatarPerson,
  Hp as F0AvatarTeam,
  Zm as F0BigNumber,
  Um as F0Box,
  Te as F0Button,
  jp as F0ButtonDropdown,
  $p as F0ButtonToggle,
  Gg as F0Card,
  No as F0Checkbox,
  np as F0ChipList,
  As as F0DatePicker,
  Wp as F0Dialog,
  Gp as F0DialogAlikeContext,
  Vp as F0DialogAlikeProvider,
  Zp as F0DialogContext,
  Up as F0DialogProvider,
  sp as F0Drawer,
  qp as F0EventCatcherProvider,
  Oh as F0FilterPickerContent,
  dp as F0Form,
  up as F0GridStack,
  uv as F0HILActionConfirmation,
  Xf as F0Heading,
  Fr as F0Icon,
  ps as F0Link,
  Yp as F0MessageSources,
  Kp as F0OneIcon,
  Xp as F0OneSwitch,
  bp as F0Provider,
  At as F0Select,
  hp as F0TableOfContentPopover,
  Vg as F0TagAlert,
  $l as F0TagBalance,
  Zg as F0TagCompany,
  Jp as F0TagDot,
  Ug as F0TagList,
  qg as F0TagPerson,
  jo as F0TagRaw,
  nc as F0TagStatus,
  Yg as F0TagTeam,
  $s as F0Text,
  Qp as F0Thinking,
  eg as FullscreenChatContext,
  tg as GROUP_ID_SYMBOL,
  ng as H1,
  rg as H2,
  ig as H3,
  Lm as HomeLayout,
  sg as Hr,
  ag as Image,
  Mm as Layout,
  og as Li,
  jm as LineChart,
  lg as Ol,
  cg as OneFilterPicker,
  dg as P,
  $m as PieChart,
  ug as Pre,
  sc as PrivacyModeProvider,
  Ja as ProductBlankslate,
  Kg as ProductCard,
  fp as ProductModal,
  lm as ProductWidget,
  Gm as ProgressBarChart,
  Pm as StandardLayout,
  hg as Strong,
  fg as Table,
  Xg as Tag,
  Jg as TagCounter,
  mg as Td,
  pg as Th,
  _m as ToastProvider,
  zm as TwoColumnLayout,
  gg as Ul,
  Is as UpsellRequestResponseDialog,
  cm as UpsellingBanner,
  Ms as UpsellingButton,
  mp as UpsellingPopover,
  Wm as VerticalBarChart,
  hv as actionItemStatuses,
  fv as aiTranslations,
  Om as avatarVariants,
  vg as buildTranslations,
  Xm as buttonDropdownSizes,
  Km as buttonDropdownVariants,
  Ym as buttonSizes,
  Jm as buttonToggleSizes,
  Qm as buttonToggleVariants,
  qm as buttonVariants,
  Qg as cardImageFits,
  ev as cardImageSizes,
  tv as createAtlaskitDriver,
  yg as createDataSourceDefinition,
  Sc as createPageLayoutBlock,
  Dc as createPageLayoutBlockGroup,
  xp as dataCollectionLocalStorageHandler,
  rp as datepickerSizes,
  vv as defaultTranslations,
  bg as downloadTableAsExcel,
  or as evaluateRenderIf,
  Re as experimental,
  ap as f0FormField,
  xg as f0MarkdownRenderers,
  dn as generateAnchorId,
  wg as getAnimationVariants,
  _g as getDataSourcePaginationType,
  Cg as getEmojiLabel,
  ii as getF0Config,
  lp as getSchemaDefinition,
  op as hasF0Config,
  Ph as inferFieldType,
  kg as isInfiniteScrollPagination,
  Eg as isPageBasedPagination,
  ie as isZodType,
  ep as linkVariants,
  Sg as modules,
  mv as oneIconSizes,
  nv as predefinedPresets,
  rv as selectSizes,
  tp as tagDotColors,
  Ve as unwrapZodSchema,
  Dg as useAiChat,
  pv as useAiChatTranslations,
  Ng as useData,
  Rg as useDataSource,
  Tg as useDefaultCopilotActions,
  pp as useDialog,
  iv as useDndEvents,
  sv as useDraggable,
  gp as useDrawer,
  av as useDroppableList,
  Ag as useEmojiConfetti,
  Og as useF0Dialog,
  Ig as useF0DialogAlikeContext,
  cp as useF0Form,
  Mg as useGroups,
  vp as useIsDesktop,
  gm as useIsMobile,
  Pg as useMessageSourcesAction,
  zg as useOrchestratorThinkingAction,
  ov as usePrivacyMode,
  Lg as useReducedMotion,
  Zf as useSchemaDefinition,
  Bg as useSelectable,
  yp as useToast,
  Cm as useToastContext,
  Fg as useXRay
};
