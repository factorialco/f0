import { aa as me, ab as lt, a6 as se, a7 as jt, ac as la, ad as Ci, ae as Ei, af as is, ag as Tl, ah as ca, ai as bt, u as Xt, aj as Hr, ak as Ol, al as Ml, am as Ll, an as Il, ao as at, ap as Pl, aq as zl, ar as da, as as Fl, at as ua, au as fa, av as ki, aw as ha, ax as ma, ay as sn, az as pa, aA as Bl, aB as Hl, aC as Vl, aD as jl, aE as $l, a8 as Ge, aF as ss, aG as Wl, aH as Gl, aI as Ul, aJ as ga, aK as Zl, aL as ql, aM as Kl, aN as va, aO as Xl, aP as sr, aQ as Yl, aR as Jl, aS as Ql, aT as ec, aU as Si, aV as tc, aW as ya, aX as rc, aY as ba, aZ as nc, a_ as ic, a$ as sc, b0 as ac, b1 as oc, b2 as lc, b3 as cc, b4 as dc, b5 as uc, b6 as fc, b7 as hc, I as mc, b8 as pc, b9 as gc, ba as vc, bb as yc } from "./F0AiChat-oTIR5NbZ.js";
import { A as sv, bq as av, B as ov, C as lv, E as cv, bF as dv, h as uv, F as fv, a as hv, x as mv, i as pv, b as gv, bc as vv, bd as yv, be as bv, bg as xv, bh as wv, bi as _v, bj as Cv, bk as Ev, bl as kv, bm as Sv, bB as Dv, s as Nv, t as Rv, v as Av, bp as Tv, w as Ov, c as Mv, br as Lv, n as Iv, o as Pv, p as zv, H as Fv, k as Bv, L as Hv, O as Vv, bo as jv, q as $v, P as Wv, S as Gv, T as Uv, l as Zv, m as qv, U as Kv, bC as Xv, bw as Yv, r as Jv, j as Qv, bz as ey, bv as ty, bG as ry, bu as ny, bt as iy, bf as sy, d as ay, bs as oy, bx as ly, e as cy, bH as dy, bn as uy, by as fy, g as hy, f as my, bE as py, bA as gy, bD as vy } from "./F0AiChat-oTIR5NbZ.js";
import { jsx as f, jsxs as j, Fragment as Vr } from "react/jsx-runtime";
import * as ot from "react";
import W, { forwardRef as Ue, useRef as Q, useImperativeHandle as bc, Children as an, createContext as Et, useContext as ht, useState as re, useMemo as Z, useEffect as ee, useCallback as ne, useLayoutEffect as ai, createElement as Xr, isValidElement as xa, Fragment as xc, memo as wc, useReducer as _c, cloneElement as Cc, PureComponent as Ec, useId as kc } from "react";
import { createPortal as wa, unstable_batchedUpdates as Yr, flushSync as Sc } from "react-dom";
import { L as _a, C as Dc, i as Ca, D as Nc, S as as, a as Rc, f as Zn, b as br, c as Ac, A as Tc, d as Jr, e as Ea, E as Oc, g as tn, h as Mc, j as Lc, k as Ic, l as rr, m as ka, u as Pc, G as zc, n as Fc, o as os, p as Bc, q as Sa, r as Hc, B as Da, X as Na, Y as oi, s as Vc, t as Ra, v as jc, w as $c, x as Wc, y as Gc, z as Uc, F as Zc, H as qc, I as Kc, J as ls, K as Xc, M as Er, N as qn, O as Yc, P as Jc, Q as Qc, R as ed, T as td, U as rd, V as nd, W as id, Z as sd, _ as ad, $ as od, a0 as cs, a1 as ld, a2 as cd, a3 as ds, a4 as Aa, a5 as dd, a6 as ud, a7 as fd, a8 as hd, a9 as Ta, aa as Di, ab as md, ac as pd, ad as gd, ae as vd, af as yd, ag as Oa, ah as Ma, ai as bd, aj as xd, ak as wd, al as _d } from "./DataCollectionStorageProvider-B8_-moME.js";
import { aB as by, am as xy, an as wy, aq as _y, at as Cy, au as Ey, av as ky, ax as Sy, ay as Dy, az as Ny, aw as Ry, ao as Ay, ap as Ty, aA as Oy, ar as My, as as Ly, aC as Iy, aD as Py, aE as zy, aF as Fy } from "./DataCollectionStorageProvider-B8_-moME.js";
import { A as Hy, F as Vy, c as jy, b as $y, a as Wy, o as Gy, u as Uy } from "./F0HILActionConfirmation-C9Kwjohi.js";
import { defaultTranslations as qy } from "./i18n-provider-defaults.js";
import './f0.css';const Cd = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Ed = Ue(function({ widgets: e, children: t }, n) {
  const i = Q(null);
  bc(n, () => i.current);
  const s = an.toArray(e).filter((a) => !!a).map((a, o) => /* @__PURE__ */ f("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: a }, o));
  return /* @__PURE__ */ f(_a, { layout: "home", children: /* @__PURE__ */ j("div", { ref: i, className: "@container", children: [
    /* @__PURE__ */ j("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ f(Dc, { columns: Cd, showArrows: !1, children: s }),
      /* @__PURE__ */ f("main", { children: t })
    ] }),
    /* @__PURE__ */ j("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ f("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: s.slice(0, 3) }),
      /* @__PURE__ */ f("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col gap-5", children: s.slice(3) })
    ] })
  ] }) });
}), kd = jt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), La = W.forwardRef(({ children: r, variant: e, className: t, ...n }, i) => /* @__PURE__ */ f(_a, { layout: "standard", children: /* @__PURE__ */ f(
  "section",
  {
    ref: i,
    className: se("relative flex-1 overflow-auto", t),
    ...n,
    children: /* @__PURE__ */ f("div", { className: se(kd({ variant: e })), children: r })
  }
) }));
La.displayName = "StandardLayout";
const Sd = me(
  lt(
    {
      name: "StandardLayout",
      type: "layout"
    },
    La
  )
), Dd = Ue(
  function({
    children: e,
    sideContent: t,
    mainColumnPosition: n = "left",
    sticky: i = !1
  }, s) {
    return /* @__PURE__ */ f("div", { ref: s, className: "h-full", children: /* @__PURE__ */ j(
      "div",
      {
        className: se(
          "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
          "flex-col",
          "overflow-y-auto",
          i && "md:sticky md:top-0 md:max-h-full"
        ),
        children: [
          /* @__PURE__ */ f(
            "main",
            {
              className: se(
                "sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6",
                i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full",
                n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ f(
            Rd,
            {
              sticky: i,
              className: se(
                "order-1",
                n === "right" ? "md:order-1" : "md:order-3"
              ),
              children: t
            }
          )
        ]
      }
    ) });
  }
), Nd = me(
  lt(
    {
      name: "TwoColumnLayout",
      type: "layout"
    },
    Dd
  )
), Rd = ({
  children: r,
  className: e
}) => /* @__PURE__ */ f(
  "aside",
  {
    className: se(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      e
    ),
    children: r
  }
), Ia = Et(null);
function Pa() {
  const r = ht(Ia);
  if (!r)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return r;
}
function Ad(r) {
  const { content: e, ...t } = r;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function nr(r) {
  const e = Ad(r);
  return r.subGridOpts?.children && (e.subGridOpts = {
    ...r.subGridOpts,
    children: r.subGridOpts.children.map(
      (t) => nr(t)
    )
  }), e;
}
const Td = [
  "noMove",
  "noResize",
  "locked",
  "w",
  "h",
  "x",
  "y"
], Mt = 200;
function Od(r) {
  const e = r.cloneNode(!0);
  return r.querySelectorAll("canvas").forEach((n) => {
    if (n.width > 0 && n.height > 0)
      try {
        const i = n.toDataURL("image/png"), s = e.querySelectorAll("canvas"), a = Array.from(
          r.querySelectorAll("canvas")
        ).indexOf(n), o = s[a];
        if (o && o.parentElement) {
          const l = document.createElement("img");
          l.src = i, l.style.width = `${n.width}px`, l.style.height = `${n.height}px`, l.style.display = "block", n.className && (l.className = n.className), n.id && (l.id = n.id), o.parentElement.replaceChild(l, o);
        }
      } catch (i) {
        console.warn("Failed to convert canvas to image:", i);
      }
  }), e.innerHTML;
}
function Md({
  children: r,
  options: e,
  onResizeStop: t,
  onChange: n,
  widgets: i
}) {
  const [s, a] = re(null), o = Q(null), l = Q(!1), c = Z(() => ({
    ...e,
    children: (i || []).map((x) => nr(x))
  }), [e, i]), [d, u] = re(() => {
    const x = /* @__PURE__ */ new Map(), A = i || [], v = (C) => {
      C.id && C.content && x.set(C.id, C.content), C.subGridOpts?.children && C.subGridOpts.children.forEach((_) => {
        v(_);
      });
    };
    return A.forEach((C) => {
      v(C);
    }), x;
  }), h = Q(d);
  ee(() => {
    h.current = d;
  }, [d]);
  const [m, g] = re(() => {
    const x = /* @__PURE__ */ new Map(), A = i || [], v = (C) => {
      C.id && C._originalContent !== void 0 && x.set(C.id, C._originalContent), C.subGridOpts?.children && C.subGridOpts.children.forEach((_) => {
        v(_);
      });
    };
    return A.forEach((C) => {
      v(C);
    }), x;
  }), y = Q(m);
  ee(() => {
    y.current = m;
  }, [m]);
  const [k, R] = re(() => {
    const x = /* @__PURE__ */ new Map(), A = i || [], v = (C) => {
      if (C.id) {
        const _ = nr(C);
        x.set(C.id, _);
      }
      C.subGridOpts?.children && C.subGridOpts.children.forEach((_) => {
        v(_);
      });
    };
    return A.forEach((C) => {
      v(C);
    }), x;
  });
  la(() => {
    if (!s) return;
    const x = s.save();
    if (!Array.isArray(x))
      return;
    const A = x.map((I) => I.id), v = i || [], C = v.map((I) => I.id), _ = v.filter(
      (I) => !A.includes(I.id)
    );
    _.length > 0 && (_.forEach((I) => {
      I.content && h.current.set(I.id, I.content), I._originalContent !== void 0 && y.current.set(I.id, I._originalContent);
    }), _.forEach((I) => {
      const T = nr(I);
      s.addWidget(T);
    }), R((I) => {
      const T = new Map(I);
      return _.forEach((S) => {
        const M = nr(S);
        T.set(S.id, M);
      }), T;
    }), u((I) => {
      const T = new Map(I);
      return _.forEach((S) => {
        S.content && T.set(S.id, S.content);
      }), T;
    }), g((I) => {
      const T = new Map(I);
      return _.forEach((S) => {
        S._originalContent !== void 0 && T.set(S.id, S._originalContent);
      }), T;
    }));
    const O = x.filter(
      (I) => !C.includes(I.id)
    );
    if (O.length > 0) {
      const I = O.map((T) => T.id).filter(Boolean);
      I.forEach((T) => {
        setTimeout(() => {
          h.current.delete(T), y.current.delete(T);
        }, Mt);
      }), O.forEach((T) => {
        const S = s.el.querySelector(
          `[gs-id="${T.id}"]`
        );
        S && setTimeout(() => {
          s.removeWidget(S, !0);
        }, Mt);
      }), R((T) => {
        const S = new Map(T);
        return I.forEach((M) => {
          setTimeout(() => {
            S.delete(M);
          }, Mt);
        }), S;
      }), u((T) => {
        const S = new Map(T);
        return I.forEach((M) => {
          if (S.get(M)) {
            const z = s.el.querySelector(
              `[gs-id="${M}"] .grid-stack-item-content`
            );
            let q = "";
            z && (q = Od(z)), S.set(
              M,
              /* @__PURE__ */ f(
                Ci.div,
                {
                  className: "h-full w-full",
                  initial: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  animate: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
                  exit: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
                  transition: {
                    opacity: {
                      duration: Mt / 1e3,
                      ease: [0.32, 0, 0.67, 0]
                    },
                    scale: {
                      duration: Mt / 1e3,
                      ease: [0.65, 0, 0.35, 1]
                    },
                    filter: {
                      duration: Mt / 1e3,
                      ease: "linear"
                    }
                  },
                  dangerouslySetInnerHTML: { __html: q }
                }
              )
            );
          }
          setTimeout(() => {
            S.delete(M);
          }, Mt);
        }), S;
      }), g((T) => {
        const S = new Map(T);
        return I.forEach((M) => {
          setTimeout(() => {
            S.delete(M);
          }, Mt);
        }), S;
      });
    }
    const V = v.filter(
      (I) => A.includes(I.id)
    );
    if (V.length > 0) {
      const I = [];
      V.forEach((T) => {
        const S = x.find(
          (H) => H.id === T.id
        );
        if (!S)
          return;
        const M = Td.filter(
          (H) => S[H] !== T[H]
        );
        if (M.length > 0) {
          const H = {}, z = ["w", "h", "x", "y"], q = ["noMove", "noResize", "locked"], U = M.filter(
            (ce) => z.includes(ce)
          ), le = M.filter(
            (ce) => q.includes(ce)
          );
          if (U.length > 0 && le.length > 0 && U.length + le.length === M.length ? le.forEach((ce) => {
            const ue = T[ce];
            ue !== void 0 && (H[ce] = ue);
          }) : M.forEach((ce) => {
            const ue = T[ce];
            ue !== void 0 && (H[ce] = ue);
          }), Object.keys(H).length > 0) {
            const ce = s.el.querySelector(
              `[gs-id="${T.id}"]`
            );
            ce && I.push({
              id: T.id,
              element: ce,
              updateOptions: H
            });
          }
        }
      }), V.forEach((T) => {
        T.content && h.current.set(T.id, T.content), T._originalContent !== void 0 && y.current.set(T.id, T._originalContent);
      }), I.forEach(({ element: T, updateOptions: S }) => {
        try {
          s.update(T, S);
        } catch (M) {
          console.warn("Error updating widget:", M);
        }
      }), R((T) => {
        const S = new Map(T);
        return V.forEach((M) => {
          const H = nr(M);
          S.set(M.id, H);
        }), S;
      }), u((T) => {
        const S = new Map(T);
        return V.forEach((M) => {
          M.content && S.set(M.id, M.content);
        }), S;
      }), g((T) => {
        const S = new Map(T);
        return V.forEach((M) => {
          M._originalContent !== void 0 && S.set(M.id, M._originalContent);
        }), S;
      });
    }
    l.current || (l.current = !0);
  }, [i]), ee(() => {
    if (!s || !c.handle) return;
    s.opts && (s.opts.handle = c.handle);
    const x = setTimeout(() => {
      if (s && s.el && c.handle && s.el.querySelectorAll(
        c.handle
      ).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(x);
  }, [s, c.handle, c.children]);
  const D = ne(() => {
    if (!s)
      return;
    const x = s.save();
    if (Array.isArray(x)) {
      const A = x.map((v) => {
        const C = v.id;
        if (!C) return null;
        const _ = h.current.get(C), O = y.current.get(C), V = v;
        return {
          ...v,
          id: C,
          w: v.w ?? 1,
          h: v.h ?? 1,
          x: v.x ?? 0,
          y: v.y ?? 0,
          // Preserve meta if it exists (GridStack preserves custom properties)
          meta: V.meta,
          // Use _originalContent from originalContentMapRef
          _originalContent: O,
          // Use React content from reactContentMapRef
          content: _ ?? /* @__PURE__ */ f("div", { children: "No content" })
        };
      }).filter((v) => v !== null);
      n?.(A);
    }
  }, [s]);
  return ee(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const x = (A, v) => {
      t?.(A, v);
    };
    try {
      s.on("resizestop", x), s.on("change added removed", D);
    } catch (A) {
      console.error("Error attaching GridStack event listeners:", A);
      return;
    }
    return () => {
      const A = o.current;
      if (A && A.el)
        try {
          A.off("resizestop"), A.off("change added removed");
        } catch (v) {
          console.warn("Error cleaning up GridStack event listeners:", v);
        }
    };
  }, [s, t, D]), ee(() => {
    o.current = s;
  }, [s]), ee(() => {
    s && s.el && s.el.parentElement && l.current && D();
  }, [s]), /* @__PURE__ */ f(
    Ia.Provider,
    {
      value: {
        options: c,
        gridStack: s,
        _gridStack: {
          value: s,
          set: a
        },
        _rawWidgetMetaMap: {
          value: k,
          set: R
        },
        _reactContentMap: {
          value: d,
          set: u
        }
      },
      children: r
    }
  );
}
const za = Et(null);
function Ld() {
  const r = ht(za);
  if (!r)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return r;
}
const Id = Et(null);
function Pd() {
  const { _reactContentMap: r } = Pa(), { getWidgetContainer: e } = Ld();
  return /* @__PURE__ */ f(Vr, { children: Array.from(r.value.entries()).map(([t, n]) => {
    const i = e(t);
    return i ? /* @__PURE__ */ f(Id.Provider, { value: { widget: { id: t } }, children: n && wa(n, i) }, t) : (console.error(`Widget container not found for widget ${t}`), null);
  }) });
}
function zd(r, e, t, n, i) {
  const s = (...a) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + i + " and has been replaced with `" + n + "`. It will be **removed** in a future release"), e.apply(r, a));
  return s.prototype = e.prototype, s;
}
class w {
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
    return w.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
        e[i] === null || e[i] === void 0 ? e[i] = n[i] : typeof n[i] == "object" && typeof e[i] == "object" && w.defaults(e[i], n[i]);
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
        n[0] === "_" || i === s ? delete e[n] : i && typeof i == "object" && s !== void 0 && (w.removeInternalAndSame(i, s), Object.keys(i).length || delete e[n]);
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : w.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, n) {
    const i = w.getScrollElement(e);
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
    const i = w.getScrollElement(t), s = i.clientHeight, a = i === w.getScrollElement() ? 0 : i.getBoundingClientRect().top, o = e.clientY - a, l = o < n, c = o > s - n;
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], n = w.clone(e);
    for (const i in n)
      n.hasOwnProperty(i) && typeof n[i] == "object" && i.substring(0, 2) !== "__" && !t.find((s) => s === i) && (n[i] = w.cloneDeep(e[i]));
    return n;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let n;
    typeof t == "string" ? n = w.getElement(t) : n = t, n && n.appendChild(e);
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
    w.addElStyles(t, {
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
class Nt {
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
        c = this._loading && w.samePos(e, d) ? !0 : this.moveNode(e, d), (n.locked || this._loading) && c ? w.copyPos(t, e) : !n.locked && c && i.pack && (this._packNodes(), t.y = n.y + n.h, w.copyPos(e, t)), a = a || c;
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
    return this.nodes.find((a) => a._id !== i && a._id !== s && w.isIntercepted(a, t));
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
    return this.nodes.filter((a) => a._id !== i && a._id !== s && w.isIntercepted(a, t));
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
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (i = w.isTouching(e, t)))
      return n();
    if (i !== !1) {
      if (e.w === t.w && e.x === t.x && (i || (i = w.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return n();
      }
      if (i !== !1) {
        if (e.h === t.h && e.y === t.y && (i || (i = w.isTouching(e, t)))) {
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
    return this.nodes = w.sort(this.nodes, e), this;
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
    e._id = e._id ?? Nt._idSeq++;
    const n = e.id;
    if (n) {
      let s = 1;
      for (; this.nodes.find((a) => a.id === e.id && a !== e); )
        e.id = n + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const i = { x: 0, y: 0, w: 1, h: 1 };
    return w.defaults(e, i), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, w.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = i.x, e.autoPosition = !0), isNaN(e.y) && (e.y = i.y, e.autoPosition = !0), isNaN(e.w) && (e.w = i.w), isNaN(e.h) && (e.h = i.h), this.nodeBoundFix(e, t), e;
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
    const n = e._orig || w.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), w.samePos(e, n) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !w.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = w.copyPos({}, e), delete e._dirty;
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
      !e._orig || w.samePos(e, e._orig) || (w.copyPos(e, e._orig), e._dirty = !0);
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
      t.find((u) => w.isIntercepted(d, u)) || ((e.x !== l || e.y !== c) && (e._dirty = !0), e.x = l, e.y = c, delete e.autoPosition, a = !0);
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
    const i = new Nt({
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
      o && (w.copyPos(o, a), o._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new Nt({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((i) => ({ ...i }))
    }), n = { ...e };
    return this.cleanupNode(n), delete n.el, delete n._id, delete n.content, delete n.grid, t.addNode(n), t.getRow() <= this.maxRow ? (e._willFitPos = w.copyPos({}, n), !0) : !1;
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
    const i = e.w !== t.w || e.h !== t.h, s = w.copyPos({}, e, !0);
    if (w.copyPos(s, t), this.nodeBoundFix(s, i), w.copyPos(t, s), !t.forceCollide && w.samePos(e, t))
      return !1;
    const a = w.copyPos({}, e), o = this.collideAll(e, s, t.skip);
    let l = !0;
    if (o.length) {
      const c = e._moving && !t.nested;
      let d = c ? this.directionCollideCoverage(e, t, o) : o[0];
      if (c && d && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = w.areaIntercept(t.rect, d._rect), h = w.area(t.rect), m = w.area(d._rect);
        u / (h < m ? h : m) > 0.8 && (d.grid.makeSubGrid(d.el, void 0, e), d = void 0);
      }
      d ? l = !this._fixCollisions(e, s, d, t) : (l = !1, n && delete t.pack);
    }
    return l && !w.samePos(e, s) && (e._dirty = !0, w.copyPos(e, s)), t.pack && this._packNodes()._notify(), !w.samePos(e, a);
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
      w.removeInternalForSave(c, !e), t && t(o, c), a.push(c);
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
    let s = [], a = i ? this.nodes : w.sort(this.nodes, -1);
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
      s = w.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((o) => {
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
        s._id = o?._id ?? Nt._idSeq++;
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
    e._id = e._id ?? Nt._idSeq++;
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
Nt._idSeq = 0;
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
class te {
}
const ft = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class xt {
}
function on(r, e) {
  r.touches.length > 1 || (r.cancelable && r.preventDefault(), w.simulateMouseEvent(r.changedTouches[0], e));
}
function Fa(r, e) {
  r.cancelable && r.preventDefault(), w.simulateMouseEvent(r, e);
}
function ln(r) {
  xt.touchHandled || (xt.touchHandled = !0, on(r, "mousedown"));
}
function cn(r) {
  xt.touchHandled && on(r, "mousemove");
}
function dn(r) {
  if (!xt.touchHandled)
    return;
  xt.pointerLeaveTimeout && (window.clearTimeout(xt.pointerLeaveTimeout), delete xt.pointerLeaveTimeout);
  const e = !!te.dragElement;
  on(r, "mouseup"), e || on(r, "click"), xt.touchHandled = !1;
}
function un(r) {
  r.pointerType !== "mouse" && r.target.releasePointerCapture(r.pointerId);
}
function us(r) {
  te.dragElement && r.pointerType !== "mouse" && Fa(r, "mouseenter");
}
function fs(r) {
  te.dragElement && r.pointerType !== "mouse" && (xt.pointerLeaveTimeout = window.setTimeout(() => {
    delete xt.pointerLeaveTimeout, Fa(r, "mouseleave");
  }, 10));
}
class Tn {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Tn.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), ft && (this.el.addEventListener("touchstart", ln), this.el.addEventListener("pointerdown", un)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), ft && (this.el.removeEventListener("touchstart", ln), this.el.removeEventListener("pointerdown", un)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ft && (this.el.addEventListener("touchmove", cn), this.el.addEventListener("touchend", dn)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ft && (this.el.removeEventListener("touchmove", cn), this.el.removeEventListener("touchend", dn)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
Tn.prefix = "ui-resizable-";
class Ni {
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
class Or extends Ni {
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
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), te.overResizeElement === this && delete te.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    te.overResizeElement || te.dragElement || (te.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    te.overResizeElement === this && (delete te.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Tn(this.el, e, {
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
    this.sizeToContent = w.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = w.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = w.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const n = w.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(n, this._ui()), this.triggerEvent("resize", n), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = w.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = Or._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = w.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Or._originStyleProp.forEach((e, t) => {
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
Or._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const Fd = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class Mr extends Ni {
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
      e.addEventListener("mousedown", this._mouseDown), ft && (e.addEventListener("touchstart", ln), e.addEventListener("pointerdown", un));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), ft && (t.removeEventListener("touchstart", ln), t.removeEventListener("pointerdown", un));
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
    if (!te.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(Fd) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete te.dragElement, delete te.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ft && (e.currentTarget.addEventListener("touchmove", cn), e.currentTarget.addEventListener("touchend", dn)), e.preventDefault(), document.activeElement && document.activeElement.blur(), te.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = w.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), te.pauseDrag) {
        const n = Number.isInteger(te.pauseDrag) ? te.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), n);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, te.dragElement = this;
      const n = this.el.gridstackNode?.grid;
      n ? te.dropElement = n.el.ddElement.ddDroppable : delete te.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = w.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = w.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ft && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", cn, !0), e.currentTarget.removeEventListener("touchend", dn, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), te.dropElement?.el === this.el.parentElement && delete te.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = w.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), te.dropElement && te.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete te.dragElement, delete te.dropElement, delete te.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, n = t?.grid || te.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), n?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && n && (e.key === "r" || e.key === "R")) {
      if (!w.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, n.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", w.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = w.cloneNode(this.el)), e.parentElement || w.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = Mr.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", Mr.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = n, 50);
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
Mr.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Bd extends Ni {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), ft && (this.el.addEventListener("pointerenter", us), this.el.addEventListener("pointerleave", fs)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), ft && (this.el.removeEventListener("pointerenter", us), this.el.removeEventListener("pointerleave", fs)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!te.dragElement || !this._canDrop(te.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), te.dropElement && te.dropElement !== this && te.dropElement._mouseLeave(e, !0), te.dropElement = this;
    const t = w.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(te.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!te.dragElement || te.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = w.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(n, this._ui(te.dragElement)), this.triggerEvent("dropout", n), te.dropElement === this && (delete te.dropElement, !t)) {
      let i, s = this.el.parentElement;
      for (; !i && s; )
        i = s.ddElement?.ddDroppable, s = s.parentElement;
      i && i._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = w.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(te.dragElement)), this.triggerEvent("drop", t);
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
class Ri {
  static init(e) {
    return e.ddElement || (e.ddElement = new Ri(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new Mr(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Or(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Bd(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Hd {
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
      n(s, te.dragElement ? te.dragElement.el : s.target, te.dragElement ? te.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", i = w.getElements(e);
    return i.length ? i.map((a) => a.ddElement || (n ? Ri.init(a) : null)).filter((a) => a) : [];
  }
}
const Fe = new Hd();
class J {
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
    const n = J.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new J(n, w.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (J.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new J(i, w.cloneDeep(e))), n.push(i.gridstack);
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
    return (!e.classList.contains("grid-stack") || J.addRemoveCB) && (J.addRemoveCB ? n = J.addRemoveCB(e, t, !0, !0) : n = w.createDiv(["grid-stack", t.class], e)), J.init(t, n);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    J.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = w.createDiv([this.opts.placeholderClass, Ye.itemClass, this.opts.itemClass]);
      const e = w.createDiv(["placeholder-content"], this._placeholder);
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
    const n = w.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const i = t.columnOpts;
    if (i) {
      const c = i.breakpoints;
      !i.columnWidth && !c?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, c?.length > 1 && c.sort((d, u) => (u.w || 0) - (d.w || 0)));
    }
    const s = {
      ...w.cloneDeep(Ye),
      column: w.toNumber(e.getAttribute("gs-column")) || Ye.column,
      minRow: n || w.toNumber(e.getAttribute("gs-min-row")) || Ye.minRow,
      maxRow: n || w.toNumber(e.getAttribute("gs-max-row")) || Ye.maxRow,
      staticGrid: w.toBool(e.getAttribute("gs-static")) || Ye.staticGrid,
      sizeToContent: w.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Ye.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Ye.removableOptions.accept,
        decline: Ye.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = w.toBool(e.getAttribute("gs-animate"))), t = w.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + Ye.itemClass)?.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Ye.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const c = t.cellHeight;
      delete t.cellHeight, this.cellHeight(c);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = ft), this._setStaticClass();
    const l = t.engineClass || J.engineClass || Nt;
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
    this.setAnimation(), t.subGridDynamic && !te.pauseDrag && (te.pauseDrag = !0), t.draggable?.pause !== void 0 && (te.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (n.grid = this, n.el ? t = n.el : J.addRemoveCB ? t = J.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
      return;
    if (n = t.gridstackNode, n && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === n._id))
      return t;
    const i = this._readAttr(t);
    return w.defaults(e, i), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = w.createDiv(["grid-stack-item", this.opts.itemClass]), n = w.createDiv(["grid-stack-item-content"], t);
    return w.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([i]) => {
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, J.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : J.renderCB(n, e), t;
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
    t = w.cloneDeep({
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
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, w.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), J.addRemoveCB ? d = J.addRemoveCB(this.el, u, !0, !1) : (d = w.createDiv(["grid-stack-item"]), d.appendChild(c), c = w.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const m = l ? t.column : s.w, g = s.h + n.h, y = s.el.style;
      y.transition = "none", this.update(s.el, { w: m, h: g }), setTimeout(() => y.transition = null);
    }
    const h = s.subGrid = J.addGrid(c, t);
    return n?._moving && (h._isTemp = !0), l && (h._autoColumn = !0), i && h.makeWidget(d, u), n && (n._moving ? window.setTimeout(() => w.simulateMouseEvent(n._event, "mouseenter", h.el), 0) : h.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((n) => {
      n.x += this.parentGridNode.x, n.y += this.parentGridNode.y, t.makeWidget(n.el, n);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => w.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, n = J.saveCB, i) {
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
      const a = w.cloneDeep(this.opts);
      a.marginBottom === a.marginTop && a.marginRight === a.marginLeft && a.marginTop === a.marginRight && (a.margin = a.marginTop, delete a.marginTop, delete a.marginRight, delete a.marginBottom, delete a.marginLeft), a.rtl === (this.el.style.direction === "rtl") && (a.rtl = "auto"), this._isAutoCellHeight && (a.cellHeight = "auto"), this._autoColumn && (a.column = "auto");
      const o = a._alwaysShowResizeHandle;
      return delete a._alwaysShowResizeHandle, o !== void 0 ? a.alwaysShowResizeHandle = o : delete a.alwaysShowResizeHandle, w.removeInternalAndSame(a, Ye), a.children = s, a;
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
  load(e, t = J.addRemoveCB || !0) {
    e = w.cloneDeep(e);
    const n = this.getColumn();
    e.forEach((d) => {
      d.w = d.w || d.minW || 1, d.h = d.h || d.minH || 1;
    }), e = w.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((d) => {
      i = Math.max(i, (d.x || 0) + d.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = J.addRemoveCB;
    typeof t == "function" && (J.addRemoveCB = t);
    const a = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, l = o && this.opts.animate;
    l && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      w.find(e, u.id) || (J.addRemoveCB && J.addRemoveCB(this.el, u, !1, !1), a.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const c = [];
    return this.engine.nodes = this.engine.nodes.filter((d) => w.find(e, d.id) ? (c.push(d), !1) : !0), e.forEach((d) => {
      const u = w.find(c, d.id);
      if (u) {
        if (w.shouldSizeToContent(u) && (d.h = u.h), this.engine.nodeBoundFix(d), (d.autoPosition || d.x === void 0 || d.y === void 0) && (d.w = d.w || u.w, d.h = d.h || u.h, this.engine.findEmptyPosition(d)), this.engine.nodes.push(u), w.samePos(u, d) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...d, forceCollide: !0 }), w.copyPos(d, u)), this.update(u.el, d), d.subGridOpts?.children) {
          const h = u.el.querySelector(".grid-stack");
          h && h.gridstack && h.gridstack.load(d.subGridOpts.children);
        }
      } else t && this.addWidget(d);
    }), delete this.engine._loading, this.engine.removedNodes = a, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? J.addRemoveCB = s : delete J.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const i = w.toNumber(t.getAttribute("gs-h")) || 1;
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
    const t = w.parseHeight(e);
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
    const n = J.getElement(e);
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
    return e ? (J.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((a) => i === a.el)), s && (t && J.addRemoveCB && J.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, n), t && i.parentElement && i.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && J.addRemoveCB && J.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
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
    return J.getElements(e).forEach((n) => {
      const i = n?.gridstackNode;
      if (!i)
        return;
      const s = { ...w.copyPos({}, i), ...w.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const a = ["x", "y", "w", "h"];
      let o;
      if (a.some((d) => s[d] !== void 0 && s[d] !== i[d]) && (o = {}, a.forEach((d) => {
        o[d] = s[d] !== void 0 ? s[d] : i[d], delete s[d];
      })), !o && (s.minW || s.minH || s.maxW || s.maxH) && (o = {}), s.content !== void 0) {
        const d = n.querySelector(".grid-stack-item-content");
        d && d.textContent !== s.content && (i.content = s.content, J.renderCB(d, s), i.subGrid?.el && (d.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, c = !1;
      for (const d in s)
        d[0] !== "_" && i[d] !== s[d] && (i[d] = s[d], l = !0, c = c || !this.opts.staticGrid && (d === "noResize" || d === "noMove" || d === "locked"));
      if (w.sanitizeMinMax(i), o) {
        const d = o.w !== void 0 && o.w !== i.w;
        this.moveNode(i, o), d && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(d, i), delete i._orig;
      }
      (o || l) && this._writeAttr(n, i), c && this.prepareDragDrop(i.el), J.updateCB && J.updateCB(i);
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
    if (t.resizeToContentParent && (a = e.querySelector(t.resizeToContentParent)), a || (a = e.querySelector(J.resizeToContentParent)), !a)
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
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${J.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
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
    J.resizeToContentCB ? J.resizeToContentCB(e) : this.resizeToContent(e);
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
    return J.getElements(e).forEach((n) => {
      const i = n.gridstackNode;
      if (!w.canBeRotated(i))
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
      const n = w.parseHeight(e);
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
      const s = w.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === i) {
        const a = Math.floor(s.h / n);
        t < a && (t = a);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * n + i), e && w.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, n) {
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(Ye.itemClass, this.opts.itemClass);
    const i = w.shouldSizeToContent(n);
    return i ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), i && this.resizeToContentCheck(!1, n), w.lazyLoad(n) || this.prepareDragDrop(n.el), this;
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
    n.x = w.toNumber(e.getAttribute("gs-x")), n.y = w.toNumber(e.getAttribute("gs-y")), n.w = w.toNumber(e.getAttribute("gs-w")), n.h = w.toNumber(e.getAttribute("gs-h")), n.autoPosition = w.toBool(e.getAttribute("gs-auto-position")), n.noResize = w.toBool(e.getAttribute("gs-no-resize")), n.noMove = w.toBool(e.getAttribute("gs-no-move")), n.locked = w.toBool(e.getAttribute("gs-locked"));
    const i = e.getAttribute("gs-size-to-content");
    i && (i === "true" || i === "false" ? n.sizeToContent = w.toBool(i) : n.sizeToContent = parseInt(i, 10)), n.id = e.getAttribute("gs-id"), n.maxW = w.toNumber(e.getAttribute("gs-max-w")), n.minW = w.toNumber(e.getAttribute("gs-min-w")), n.maxH = w.toNumber(e.getAttribute("gs-max-h")), n.minH = w.toNumber(e.getAttribute("gs-min-h")), t && (n.w === 1 && e.removeAttribute("gs-w"), n.h === 1 && e.removeAttribute("gs-h"), n.maxW && e.removeAttribute("gs-max-w"), n.minW && e.removeAttribute("gs-min-w"), n.maxH && e.removeAttribute("gs-max-h"), n.minH && e.removeAttribute("gs-min-h"));
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
        w.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((n) => w.shouldSizeToContent(n))) {
        const n = [...this.engine.nodes];
        this.batchUpdate(), n.forEach((i) => {
          w.shouldSizeToContent(i) && this.resizeToContentCBCheck(i.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((n) => n.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = w.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return w.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return w.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return J.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return w.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, n = [];
    typeof this.opts.margin == "string" && (n = this.opts.margin.split(" ")), n.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = n[0], this.opts.marginLeft = this.opts.marginRight = n[1]) : n.length === 4 ? (this.opts.marginTop = n[0], this.opts.marginRight = n[1], this.opts.marginBottom = n[2], this.opts.marginLeft = n[3]) : (e = w.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((a) => {
      this.opts[a] === void 0 ? this.opts[a] = t : (e = w.parseHeight(this.opts[a]), this.opts[a] = e.h, delete this.opts.margin);
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
    t?.pause !== void 0 && (te.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? w.getElements(e, i) : e).forEach((a, o) => {
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
    return this.opts.staticGrid ? this : (J.getElements(e).forEach((n) => {
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
    return this.opts.staticGrid ? this : (J.getElements(e).forEach((n) => {
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && J._itemRemoving(e.el, !1), this.engine.restoreInitial());
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
          o._willFitPos && (w.copyPos(o, o._willFitPos), delete o._willFitPos);
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
      o._temporaryRemoved = !0) : (o.w = l, o.h = c, o._temporaryRemoved = !0), J._itemRemoving(o.el, !1), Fe.on(s, "drag", n), n(i, s, a), !1;
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
      return w.copyPos(o, this._readAttr(this.placeholder)), w.removePositioningStyles(s), c && (o.content || o.subGridOpts || J.addRemoveCB) ? (delete o.el, s = this.addWidget(o)) : (this._prepareElement(s, !0, o), this.el.appendChild(s), this.resizeToContentCheck(!1, o), u && (u.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, d && d.grid ? d : void 0, o), !1;
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
    return e ? (!this.opts.staticGrid && !Fe.isDroppable(e) && Fe.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => J._itemRemoving(n, !0)).on(e, "dropout", (t, n) => J._itemRemoving(n, !1)), this) : this;
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
            w.removePositioningStyles(g), n._temporaryRemoved ? (this._writePosAttr(g, n), this.engine.addNode(n)) : this._writePosAttr(g, n), this.triggerEvent(h, g);
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
      this.dragTransform = w.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const o = this.placeholder.closest(".grid-stack");
      this.dragTransform = w.getValuesFromTransformedElement(o);
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
      const k = n.position.top - i._prevYPix;
      i._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && w.updateScrollPosition(e, n.position, k);
      const R = n.position.left + (n.position.left > i._lastUiPosition.left ? -d : c), D = n.position.top + (n.position.top > i._lastUiPosition.top ? -h : u);
      o.x = Math.round(R / s), o.y = Math.round(D / a);
      const x = this._extraDragRow;
      if (this.engine.collide(i, o)) {
        const A = this.getRow();
        let v = Math.max(0, o.y + i.h - A);
        this.opts.maxRow && A + v > this.opts.maxRow && (v = Math.max(0, this.opts.maxRow - A)), this._extraDragRow = v;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== x && this._updateContainerHeight(), i.x === o.x && i.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (w.updateScrollResize(t, e, a), o.w = Math.round((n.size.width - c) / s), o.h = Math.round((n.size.height - u) / a), i.w === o.w && i.h === o.h) || i._lastTried && i._lastTried.w === o.w && i._lastTried.h === o.h)
        return;
      const k = n.position.left + c, R = n.position.top + u;
      o.x = Math.round(k / s), o.y = Math.round(R / a), l = !0;
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
      const k = t.target;
      i._sidebarOrig || this._writePosAttr(k, i), this.triggerEvent(t, k);
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
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = i, this.opts.removable === !0 && J._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return zd(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
J.renderCB = (r, e) => {
  r && e?.content && (r.textContent = e.content);
};
J.resizeToContentParent = ".grid-stack-item-content";
J.Utils = w;
J.Engine = Nt;
J.GDRev = "12.3.2";
const Qr = /* @__PURE__ */ new WeakMap();
function Vd({ children: r }) {
  const {
    _gridStack: { value: e, set: t },
    options: n
  } = Pa(), i = Q(/* @__PURE__ */ new Map()), s = Q(null), a = Q(n), o = ne(
    (d, u) => {
      if (u.id && u.grid) {
        let h = Qr.get(u.grid);
        h || (h = /* @__PURE__ */ new Map(), Qr.set(u.grid, h)), h.set(u.id, d), i.current.set(u.id, d);
      }
    },
    []
  ), l = ne(() => {
    if (s.current) {
      J.renderCB = o;
      const d = J.init(a.current, s.current);
      return d && a.current.handle && d.opts && (d.opts.handle = a.current.handle), d;
    }
    return null;
  }, [o]), c = (d, u) => {
    const { children: h, ...m } = d, { children: g, ...y } = u;
    return Ca(m, y);
  };
  return ai(() => {
    if (!c(n, a.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), Qr.delete(e), a.current = n, t(null);
      } catch (d) {
        console.error("Error destroying gridstack", d);
      }
    else e && (a.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), ai(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (d) {
        console.error("Error initializing gridstack", d);
      }
  }, [e, l, t]), /* @__PURE__ */ f(
    za.Provider,
    {
      value: Z(
        () => ({
          getWidgetContainer: (d) => {
            if (e) {
              const u = Qr.get(e);
              if (u?.has(d))
                return u.get(d) || null;
            }
            return i.current.get(d) || null;
          }
        }),
        // ! gridStack is required to reinitialize the grid when the options change
        [e]
      ),
      children: /* @__PURE__ */ f("div", { ref: s, children: e ? r : null })
    }
  );
}
const Ai = ({
  options: r,
  widgets: e,
  onChange: t,
  className: n
}) => {
  const i = Z(() => JSON.stringify(
    e.map((l) => ({
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
    }))
  ), [e]), s = Z(() => ({
    ...r,
    class: n
  }), [r, i, n]), a = (l, c, d) => {
    let u = d[0], h = 1 / 0;
    for (const m of d) {
      const g = m.w - l, y = m.h - c, k = g * g + y * y;
      k < h && (h = k, u = m);
    }
    return u;
  };
  return /* @__PURE__ */ f(
    Md,
    {
      options: s,
      widgets: e,
      onResizeStop: (l, c) => {
        const d = c.gridstackNode;
        if (!d) return;
        const u = c.gridstackNode?.allowedSizes ?? [];
        if (u.length === 0)
          return;
        const h = a(d.w ?? 1, d.h ?? 1, u ?? []);
        (d.w !== h.w || d.h !== h.h) && d.grid?.update(c, { w: h.w, h: h.h });
      },
      onChange: t,
      children: /* @__PURE__ */ f(Vd, { children: /* @__PURE__ */ f(Pd, {}) })
    }
  );
};
Ai.displayName = "F0GridStack";
const jd = (r, e, t) => /* @__PURE__ */ f("div", { children: r }), On = ({
  widgets: r = [],
  editMode: e = !1,
  onChange: t = () => {
  },
  WidgetWrapper: n = jd,
  main: i = !1,
  deps: s
}) => {
  const a = ne(
    (v, C, _) => /* @__PURE__ */ f(
      Ci.div,
      {
        className: "h-full w-full",
        initial: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: {
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        },
        children: n(v, C, _)
      }
    ),
    [n]
  ), o = Z(
    () => ({
      acceptWidgets: !0,
      margin: 8,
      handle: "[data-gs-handle='true']",
      column: 4,
      columnOpts: {
        breakpointForWindow: !0,
        breakpoints: [
          { c: 1, w: 700 },
          { c: 3, w: 850 },
          { c: 6, w: 950 },
          { c: 8, w: 1100 }
        ],
        columnMax: 4
      }
    }),
    []
  ), l = (v, C) => {
    if (typeof v.content == "function" && v.deps && C) {
      const _ = {};
      return v.deps.forEach((O) => {
        typeof O == "string" && C[O] !== void 0 && (_[O] = C[O]);
      }), v.content(_);
    }
    return typeof v.content == "function" ? null : v.content;
  }, c = (v, C, _) => v.map((O) => {
    const V = l(O, _), I = {
      id: O.id,
      h: O.h ?? 1,
      w: O.w ?? 1,
      allowedSizes: O.availableSizes,
      noMove: !C,
      noResize: !C,
      locked: O.locked,
      meta: O.meta,
      _originalContent: V,
      content: a(V, O.meta, C)
    };
    return O.x !== void 0 && (I.x = O.x), O.y !== void 0 && (I.y = O.y), I;
  }), [d, u] = re(
    c(r, e)
  ), h = Q(e), m = Q(r), g = Q(!1), y = Q(/* @__PURE__ */ new Map()), k = Q(r);
  k.current = r;
  const R = Q(s), D = Z(() => {
    const v = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || r.forEach((C) => {
      if (C.deps && C.deps.length > 0) {
        const _ = C.deps.map((O) => typeof O == "string" && s[O] !== void 0 ? s[O] : O).filter((O) => O !== null);
        v.set(C.id, _);
      }
    }), v;
  }, [r, s]), x = ne(
    (v) => {
      u(v), g.current || t(
        v.map((C) => {
          const _ = k.current.find(
            (O) => O.id === C.id
          );
          return {
            id: C.id,
            w: C.w ?? 1,
            h: C.h ?? 1,
            allowedSizes: C.allowedSizes,
            meta: C.meta,
            // Preserve the original content (function or static) from the widget prop
            content: typeof _?.content == "function" ? _.content : C._originalContent,
            x: C.x ?? 0,
            y: C.y ?? 0,
            locked: C.locked,
            deps: _?.deps
          };
        })
      ), g.current = !1;
    },
    [t]
  ), A = (v, C) => !v && !C ? !1 : !v || !C || v.length !== C.length ? !0 : v.some((_, O) => _ !== C[O]);
  return ee(() => {
    const v = h.current !== e, C = m.current !== r, _ = R.current !== s && (R.current === void 0 || s === void 0 || Object.keys(R.current).length !== Object.keys(s).length || Object.keys(s).some(
      (T) => R.current?.[T] !== s[T]
    )), O = /* @__PURE__ */ new Map();
    r.forEach((T) => {
      if (T.deps && T.deps.length > 0) {
        const S = y.current.get(T.id), M = D.get(T.id);
        O.set(
          T.id,
          A(S, M)
        ), M ? y.current.set(T.id, M) : y.current.delete(T.id);
      }
    });
    const V = new Set(r.map((T) => T.id));
    y.current.forEach((T, S) => {
      V.has(S) || y.current.delete(S);
    });
    const I = Array.from(O.values()).some((T) => T) || _;
    v && !C && !I ? (g.current = !0, u(
      (T) => T.map((S) => {
        const M = r.find((z) => z.id === S.id);
        if (!M)
          return S;
        const H = l(M, s);
        return {
          ...S,
          noMove: !e,
          noResize: !e,
          locked: M.locked,
          meta: M.meta,
          _originalContent: H,
          content: a(
            H,
            M.meta,
            e
          )
        };
      })
    )) : (C || I) && u((T) => {
      const S = new Map(
        T.map((M) => [M.id, M])
      );
      return r.map((M) => {
        const H = S.get(M.id), z = O.get(M.id) ?? !1;
        let q;
        z || !H ? q = l(M, s) : q = H._originalContent ?? l(M, s);
        const U = {
          id: M.id,
          h: H?.h ?? M.h ?? 1,
          w: H?.w ?? M.w ?? 1,
          allowedSizes: M.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: M.locked,
          meta: M.meta,
          _originalContent: q,
          content: a(q, M.meta, e)
        }, le = H?.x ?? M.x, ce = H?.y ?? M.y;
        return le !== void 0 && (U.x = le), ce !== void 0 && (U.y = ce), U;
      });
    }), h.current = e, m.current = r, R.current = s;
  }, [
    r,
    e,
    a,
    D,
    s
  ]), /* @__PURE__ */ f(
    Ai,
    {
      className: se(i && "h-full flex-1 overflow-auto"),
      options: o,
      onChange: x,
      widgets: d
    }
  );
};
On.displayName = "GroupGrid";
On.__isPageLayoutGroup = !0;
const $d = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutBlock = !0, t;
}, Wd = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutGroup = !0, t;
}, Gd = (r, e) => /* @__PURE__ */ f(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...r,
    children: /* @__PURE__ */ f(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Ba = Ue(Gd), Ud = [
  "append",
  "className",
  "pressed",
  "compact",
  "noTitle",
  "noAutoTooltip",
  "style",
  "variant",
  "loading",
  "emoji"
], Ha = Ue((r, e) => {
  const t = Ud.reduce((n, i) => {
    const { [i]: s, ...a } = n;
    return a;
  }, r);
  return /* @__PURE__ */ f(
    Ei,
    {
      ...t,
      variant: "ai",
      ref: e,
      iconRotate: r.icon == Ba
    }
  );
});
Ha.displayName = "AIButton";
const xr = jt({
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
}), Zd = {
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
}, Ti = Ue(
  ({
    content: r,
    variant: e,
    align: t,
    className: n,
    as: i,
    ellipsis: s,
    noEllipsisTooltip: a,
    markdown: o,
    required: l,
    ...c
  }, d) => {
    const u = i ?? Zd[e ?? "body"], h = l ? /* @__PURE__ */ f("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (s !== void 0) {
      const m = typeof s == "number" ? s : 1;
      return h ? Xr(
        u,
        {
          ...c,
          className: se(
            xr({ variant: e, align: t }),
            n,
            "inline-flex gap-0.5"
          ),
          ref: d
        },
        /* @__PURE__ */ f(
          is,
          {
            lines: m,
            noTooltip: a,
            tag: "span",
            className: "min-w-0",
            markdown: o,
            children: r
          }
        ),
        h
      ) : /* @__PURE__ */ f(
        is,
        {
          ref: d,
          lines: m,
          noTooltip: a,
          tag: u,
          className: se(xr({ variant: e, align: t }), n),
          markdown: o,
          ...c,
          children: r
        }
      );
    }
    if (o) {
      const m = Tl(r);
      return h ? Xr(
        u,
        {
          ...c,
          className: se(xr({ variant: e, align: t }), n),
          ref: d
        },
        /* @__PURE__ */ f("span", { dangerouslySetInnerHTML: { __html: m } }),
        h
      ) : Xr(u, {
        ...c,
        className: se(xr({ variant: e, align: t }), n),
        ref: d,
        dangerouslySetInnerHTML: { __html: m }
      });
    }
    return Xr(
      u,
      {
        ...c,
        className: se(xr({ variant: e, align: t }), n),
        ref: d
      },
      r,
      h
    );
  }
);
Ti.displayName = "Text";
const Va = Ue((r, e) => /* @__PURE__ */ f(Ti, { ref: e, markdown: r.markdown ?? !0, ...r }));
Va.displayName = "F0Text";
const qd = me(Va), pg = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], ja = ({
  title: r,
  draggable: e = !1,
  onDragStart: t,
  onDragEnd: n,
  isDragging: i = !1,
  AIButton: s,
  actions: a,
  children: o,
  selected: l = !1
}) => {
  const [c, d] = re(!1), [u, h] = re(!1), m = Xt(), g = (k) => {
    d(k);
  }, y = u || c;
  return ee(() => {
    if (!i || !n) return;
    const k = () => {
      n();
    };
    return document.addEventListener("mouseup", k), () => {
      document.removeEventListener("mouseup", k);
    };
  }, [i, n]), /* @__PURE__ */ j(
    "div",
    {
      className: se(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        e && c ? "border-f1-border-hover" : e && "hover:border-f1-border-hover",
        l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      ),
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      children: [
        /* @__PURE__ */ j("div", { className: "flex h-12 w-full items-center justify-between gap-3", children: [
          /* @__PURE__ */ j(
            "div",
            {
              className: se(
                "flex min-w-0 flex-1 items-center",
                !e && "pl-4",
                !a && !s && "pr-4"
              ),
              children: [
                e && /* @__PURE__ */ f(
                  "div",
                  {
                    className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
                    onMouseDown: t,
                    "data-gs-handle": "true",
                    children: /* @__PURE__ */ f(Hr, { icon: Ol, size: "xs" })
                  }
                ),
                /* @__PURE__ */ f(
                  "div",
                  {
                    className: se(
                      "flex min-w-0 flex-1 items-center",
                      e && "-translate-x-1.5"
                    ),
                    children: /* @__PURE__ */ f(qd, { variant: "label", content: r, ellipsis: !0 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ f(Ml, { children: (s || a) && y && /* @__PURE__ */ j(
            Ci.div,
            {
              className: se(
                "flex shrink-0 items-center gap-0.5 pr-2",
                !a && "pr-4"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: {
                duration: 0.2,
                ease: [0.33, 1, 0.68, 1]
              },
              children: [
                s && /* @__PURE__ */ f("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ f(
                  Ha,
                  {
                    size: "sm",
                    label: m.ai.ask,
                    onClick: s,
                    icon: Ba
                  }
                ) }),
                a && /* @__PURE__ */ f(
                  Ll,
                  {
                    items: a,
                    open: c,
                    onOpenChange: g,
                    align: "end",
                    children: /* @__PURE__ */ f(
                      Ei,
                      {
                        icon: Il,
                        label: "Actions",
                        variant: "ghost",
                        size: "md",
                        hideLabel: !0,
                        noAutoTooltip: !0,
                        noTitle: !0,
                        pressed: c
                      }
                    )
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4", children: o })
      ]
    }
  );
}, Kd = () => /* @__PURE__ */ j("div", { className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
  /* @__PURE__ */ f("div", { className: "flex h-12 w-full items-center px-4", children: /* @__PURE__ */ f(bt, { className: "h-3 w-full max-w-16 rounded-md" }) }),
  /* @__PURE__ */ j("div", { className: "flex flex-1 items-end gap-2 px-4 pb-4", children: [
    /* @__PURE__ */ f(bt, { className: "h-1/2 w-full rounded-sm" }),
    /* @__PURE__ */ f(bt, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ f(bt, { className: "h-1/5 w-full rounded-sm" }),
    /* @__PURE__ */ f(bt, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ f(bt, { className: "h-full w-full rounded-sm" }),
    /* @__PURE__ */ f(bt, { className: "h-3/4 w-full rounded-sm" })
  ] })
] });
ja.displayName = "F0Widget";
const Xd = ca(ja, Kd), Yd = ({
  children: r,
  title: e,
  draggable: t = !1,
  actions: n,
  aiButton: i
}) => /* @__PURE__ */ f(
  Xd,
  {
    title: e,
    draggable: t,
    actions: n,
    AIButton: i,
    children: r
  }
), $a = ({
  widgets: r,
  editMode: e = !1,
  onChange: t = () => {
  },
  deps: n,
  ...i
}) => /* @__PURE__ */ f(
  On,
  {
    widgets: r,
    editMode: e,
    onChange: t,
    deps: n,
    ...i,
    WidgetWrapper: (s, a, o) => /* @__PURE__ */ f(
      Yd,
      {
        title: a?.title ?? "",
        draggable: o,
        actions: a?.actions,
        aiButton: a?.aiButton,
        children: s
      }
    )
  }
);
$a.displayName = "Dashboard";
const Jd = Wd("Dashboard", $a), gg = me(
  at("Dashboard", Jd)
), Qd = jt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), eu = (r) => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({ type: "separator" }), e.push(...t), e), []), tu = (r) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(r) ? r.every(e) ? [
    {
      items: r
    }
  ] : r : [r];
}, Mn = Ue(
  ({
    children: r,
    variant: e = "default",
    className: t,
    draggable: n = !1,
    onDragStart: i,
    onDragEnd: s,
    onDrop: a,
    dragId: o,
    primaryAction: l,
    ...c
  }, d) => {
    const u = Z(
      () => tu(c.actions || []),
      [c.actions]
    ), h = Z(
      () => u.flatMap((g) => g.items),
      [u]
    ), m = Z(
      () => h.length > 0 || !!l,
      [h, l]
    );
    return /* @__PURE__ */ j(
      "div",
      {
        ref: d,
        className: se(Qd({ variant: e }), "relative", t),
        draggable: n,
        onDragStart: i,
        onDragEnd: s,
        onDrop: a,
        "data-drag-id": o,
        ...c,
        children: [
          m && /* @__PURE__ */ j("div", { className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4", children: [
            !!l && l,
            h.length > 0 && /* @__PURE__ */ f(
              Nc,
              {
                items: eu(u),
                "data-testid": "actions-dropdown"
              }
            )
          ] }),
          /* @__PURE__ */ f("div", { "data-testid": "content", children: r })
        ]
      }
    );
  }
);
Mn.displayName = "Block";
Mn.__isPageLayoutBlock = !0;
const ru = ({
  title: r = "",
  description: e,
  titleLevel: t = "h2",
  children: n,
  className: i,
  ...s
}) => {
  if (!r) return null;
  const a = t;
  return /* @__PURE__ */ j(Mn, { ...s, className: se("space-y-4", i), children: [
    /* @__PURE__ */ j("div", { className: "space-y-2", children: [
      /* @__PURE__ */ f(
        a,
        {
          className: se("font-semibold text-f1-foreground", {
            "text-2xl": t === "h1",
            "text-xl": t === "h2",
            "text-lg": t === "h3",
            "text-base": t === "h4",
            "text-sm": t === "h5",
            "text-xs": t === "h6"
          }),
          children: r
        }
      ),
      e && /* @__PURE__ */ f("p", { className: "text-sm text-f1-foreground-secondary", children: e })
    ] }),
    /* @__PURE__ */ f("div", { className: "flex-1", children: n })
  ] });
}, nu = $d(
  "BlockContent",
  ru
), iu = (r) => !xa(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutBlock" in r.type, su = (r) => !xa(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutGroup" in r.type, Wa = (r, e, t) => {
  const n = an.toArray(e);
  for (const i of n)
    t.includes("block") && iu(i) || t.includes("group") && su(i) || console.warn(
      `${r}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, Oi = Ue(
  ({ children: r, onSort: e, ...t }, n) => {
    Wa("GroupLinear", r, ["block"]);
    const [i, s] = re(an.toArray(r));
    return ee(() => {
      s(an.toArray(r));
    }, [r]), ee(() => {
      e?.(i);
    }, [i, e]), /* @__PURE__ */ f("div", { ref: n, ...t, children: i.map((a, o) => /* @__PURE__ */ f(xc, { children: a }, o)) });
  }
);
Oi.displayName = "GroupLinear";
Oi.__isPageLayoutGroup = !0;
function au() {
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
const Ln = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function hr(r) {
  const e = Object.prototype.toString.call(r);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Mi(r) {
  return "nodeType" in r;
}
function He(r) {
  var e, t;
  return r ? hr(r) ? r : Mi(r) && (e = (t = r.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Li(r) {
  const {
    Document: e
  } = He(r);
  return r instanceof e;
}
function jr(r) {
  return hr(r) ? !1 : r instanceof He(r).HTMLElement;
}
function Ga(r) {
  return r instanceof He(r).SVGElement;
}
function mr(r) {
  return r ? hr(r) ? r.document : Mi(r) ? Li(r) ? r : jr(r) || Ga(r) ? r.ownerDocument : document : document : document;
}
const mt = Ln ? ai : ee;
function In(r) {
  const e = Q(r);
  return mt(() => {
    e.current = r;
  }), ne(function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function ou() {
  const r = Q(null), e = ne((n, i) => {
    r.current = setInterval(n, i);
  }, []), t = ne(() => {
    r.current !== null && (clearInterval(r.current), r.current = null);
  }, []);
  return [e, t];
}
function Lr(r, e) {
  e === void 0 && (e = [r]);
  const t = Q(r);
  return mt(() => {
    t.current !== r && (t.current = r);
  }, e), t;
}
function $r(r, e) {
  const t = Q();
  return Z(
    () => {
      const n = r(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function fn(r) {
  const e = In(r), t = Q(null), n = ne(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function hn(r) {
  const e = Q();
  return ee(() => {
    e.current = r;
  }, [r]), e.current;
}
let Kn = {};
function Wr(r, e) {
  return Z(() => {
    if (e)
      return e;
    const t = Kn[r] == null ? 0 : Kn[r] + 1;
    return Kn[r] = t, r + "-" + t;
  }, [r, e]);
}
function Ua(r) {
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
const ar = /* @__PURE__ */ Ua(1), Ir = /* @__PURE__ */ Ua(-1);
function lu(r) {
  return "clientX" in r && "clientY" in r;
}
function Pn(r) {
  if (!r)
    return !1;
  const {
    KeyboardEvent: e
  } = He(r.target);
  return e && r instanceof e;
}
function cu(r) {
  if (!r)
    return !1;
  const {
    TouchEvent: e
  } = He(r.target);
  return e && r instanceof e;
}
function mn(r) {
  if (cu(r)) {
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
  return lu(r) ? {
    x: r.clientX,
    y: r.clientY
  } : null;
}
const Bt = /* @__PURE__ */ Object.freeze({
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
        return [Bt.Translate.toString(r), Bt.Scale.toString(r)].join(" ");
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
}), hs = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function du(r) {
  return r.matches(hs) ? r : r.querySelector(hs);
}
const uu = {
  display: "none"
};
function fu(r) {
  let {
    id: e,
    value: t
  } = r;
  return W.createElement("div", {
    id: e,
    style: uu
  }, t);
}
function hu(r) {
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
function mu() {
  const [r, e] = re("");
  return {
    announce: ne((n) => {
      n != null && e(n);
    }, []),
    announcement: r
  };
}
const Za = /* @__PURE__ */ Et(null);
function pu(r) {
  const e = ht(Za);
  ee(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(r);
  }, [r, e]);
}
function gu() {
  const [r] = re(() => /* @__PURE__ */ new Set()), e = ne((n) => (r.add(n), () => r.delete(n)), [r]);
  return [ne((n) => {
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
const vu = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, yu = {
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
function bu(r) {
  let {
    announcements: e = yu,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = vu
  } = r;
  const {
    announce: s,
    announcement: a
  } = mu(), o = Wr("DndLiveRegion"), [l, c] = re(!1);
  if (ee(() => {
    c(!0);
  }, []), pu(Z(() => ({
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
  const d = W.createElement(W.Fragment, null, W.createElement(fu, {
    id: n,
    value: i.draggable
  }), W.createElement(hu, {
    id: o,
    announcement: a
  }));
  return t ? wa(d, t) : d;
}
var De;
(function(r) {
  r.DragStart = "dragStart", r.DragMove = "dragMove", r.DragEnd = "dragEnd", r.DragCancel = "dragCancel", r.DragOver = "dragOver", r.RegisterDroppable = "registerDroppable", r.SetDroppableDisabled = "setDroppableDisabled", r.UnregisterDroppable = "unregisterDroppable";
})(De || (De = {}));
function pn() {
}
function ms(r, e) {
  return Z(
    () => ({
      sensor: r,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, e]
  );
}
function xu() {
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
function wu(r, e) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function _u(r, e) {
  const t = mn(r);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function Cu(r, e) {
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
function Eu(r, e) {
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
function ps(r) {
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
function qa(r, e) {
  if (!r || r.length === 0)
    return null;
  const [t] = r;
  return t[e];
}
const ku = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = ps(e), s = [];
  for (const a of n) {
    const {
      id: o
    } = a, l = t.get(o);
    if (l) {
      const c = ps(l), d = i.reduce((h, m, g) => h + wu(c[g], m), 0), u = Number((d / 4).toFixed(4));
      s.push({
        id: o,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(Cu);
};
function Su(r, e) {
  const t = Math.max(e.top, r.top), n = Math.max(e.left, r.left), i = Math.min(e.left + e.width, r.left + r.width), s = Math.min(e.top + e.height, r.top + r.height), a = i - n, o = s - t;
  if (n < i && t < s) {
    const l = e.width * e.height, c = r.width * r.height, d = a * o, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Du = (r) => {
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
      const l = Su(o, e);
      l > 0 && i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(Eu);
};
function Nu(r, e, t) {
  return {
    ...r,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Ka(r, e) {
  return r && e ? {
    x: r.left - e.left,
    y: r.top - e.top
  } : pt;
}
function Ru(r) {
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
const Au = /* @__PURE__ */ Ru(1);
function Xa(r) {
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
function Tu(r, e, t) {
  const n = Xa(e);
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
const Ou = {
  ignoreTransform: !1
};
function pr(r, e) {
  e === void 0 && (e = Ou);
  let t = r.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = He(r).getComputedStyle(r);
    c && (t = Tu(t, c, d));
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
function gs(r) {
  return pr(r, {
    ignoreTransform: !0
  });
}
function Mu(r) {
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
function Lu(r, e) {
  return e === void 0 && (e = He(r).getComputedStyle(r)), e.position === "fixed";
}
function Iu(r, e) {
  e === void 0 && (e = He(r).getComputedStyle(r));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function zn(r, e) {
  const t = [];
  function n(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Li(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!jr(i) || Ga(i) || t.includes(i))
      return t;
    const s = He(r).getComputedStyle(i);
    return i !== r && Iu(i, s) && t.push(i), Lu(i, s) ? t : n(i.parentNode);
  }
  return r ? n(r) : t;
}
function Ya(r) {
  const [e] = zn(r, 1);
  return e ?? null;
}
function Xn(r) {
  return !Ln || !r ? null : hr(r) ? r : Mi(r) ? Li(r) || r === mr(r).scrollingElement ? window : jr(r) ? r : null : null;
}
function Ja(r) {
  return hr(r) ? r.scrollX : r.scrollLeft;
}
function Qa(r) {
  return hr(r) ? r.scrollY : r.scrollTop;
}
function li(r) {
  return {
    x: Ja(r),
    y: Qa(r)
  };
}
var Ne;
(function(r) {
  r[r.Forward = 1] = "Forward", r[r.Backward = -1] = "Backward";
})(Ne || (Ne = {}));
function eo(r) {
  return !Ln || !r ? !1 : r === document.scrollingElement;
}
function to(r) {
  const e = {
    x: 0,
    y: 0
  }, t = eo(r) ? {
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
const Pu = {
  x: 0.2,
  y: 0.2
};
function zu(r, e, t, n, i) {
  let {
    top: s,
    left: a,
    right: o,
    bottom: l
  } = t;
  n === void 0 && (n = 10), i === void 0 && (i = Pu);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: h
  } = to(r), m = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, y = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !c && s <= e.top + y.height ? (m.y = Ne.Backward, g.y = n * Math.abs((e.top + y.height - s) / y.height)) : !d && l >= e.bottom - y.height && (m.y = Ne.Forward, g.y = n * Math.abs((e.bottom - y.height - l) / y.height)), !h && o >= e.right - y.width ? (m.x = Ne.Forward, g.x = n * Math.abs((e.right - y.width - o) / y.width)) : !u && a <= e.left + y.width && (m.x = Ne.Backward, g.x = n * Math.abs((e.left + y.width - a) / y.width)), {
    direction: m,
    speed: g
  };
}
function Fu(r) {
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
function ro(r) {
  return r.reduce((e, t) => ar(e, li(t)), pt);
}
function Bu(r) {
  return r.reduce((e, t) => e + Ja(t), 0);
}
function Hu(r) {
  return r.reduce((e, t) => e + Qa(t), 0);
}
function no(r, e) {
  if (e === void 0 && (e = pr), !r)
    return;
  const {
    top: t,
    left: n,
    bottom: i,
    right: s
  } = e(r);
  Ya(r) && (i <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && r.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Vu = [["x", ["left", "right"], Bu], ["y", ["top", "bottom"], Hu]];
class Ii {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = zn(t), i = ro(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, a, o] of Vu)
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
class kr {
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
function ju(r) {
  const {
    EventTarget: e
  } = He(r);
  return r instanceof e ? r : mr(r);
}
function Yn(r, e) {
  const t = Math.abs(r.x), n = Math.abs(r.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var it;
(function(r) {
  r.Click = "click", r.DragStart = "dragstart", r.Keydown = "keydown", r.ContextMenu = "contextmenu", r.Resize = "resize", r.SelectionChange = "selectionchange", r.VisibilityChange = "visibilitychange";
})(it || (it = {}));
function vs(r) {
  r.preventDefault();
}
function $u(r) {
  r.stopPropagation();
}
var fe;
(function(r) {
  r.Space = "Space", r.Down = "ArrowDown", r.Right = "ArrowRight", r.Left = "ArrowLeft", r.Up = "ArrowUp", r.Esc = "Escape", r.Enter = "Enter", r.Tab = "Tab";
})(fe || (fe = {}));
const io = {
  start: [fe.Space, fe.Enter],
  cancel: [fe.Esc],
  end: [fe.Space, fe.Enter, fe.Tab]
}, Wu = (r, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (r.code) {
    case fe.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case fe.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case fe.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case fe.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Pi {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new kr(mr(t)), this.windowListeners = new kr(He(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(it.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && no(n), t(pt);
  }
  handleKeyDown(e) {
    if (Pn(e)) {
      const {
        active: t,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: s = io,
        coordinateGetter: a = Wu,
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
        const h = Ir(u, d), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = n.current;
        for (const y of g) {
          const k = e.code, {
            isTop: R,
            isRight: D,
            isLeft: x,
            isBottom: A,
            maxScroll: v,
            minScroll: C
          } = to(y), _ = Fu(y), O = {
            x: Math.min(k === fe.Right ? _.right - _.width / 2 : _.right, Math.max(k === fe.Right ? _.left : _.left + _.width / 2, u.x)),
            y: Math.min(k === fe.Down ? _.bottom - _.height / 2 : _.bottom, Math.max(k === fe.Down ? _.top : _.top + _.height / 2, u.y))
          }, V = k === fe.Right && !D || k === fe.Left && !x, I = k === fe.Down && !A || k === fe.Up && !R;
          if (V && O.x !== u.x) {
            const T = y.scrollLeft + h.x, S = k === fe.Right && T <= v.x || k === fe.Left && T >= C.x;
            if (S && !h.y) {
              y.scrollTo({
                left: T,
                behavior: o
              });
              return;
            }
            S ? m.x = y.scrollLeft - T : m.x = k === fe.Right ? y.scrollLeft - v.x : y.scrollLeft - C.x, m.x && y.scrollBy({
              left: -m.x,
              behavior: o
            });
            break;
          } else if (I && O.y !== u.y) {
            const T = y.scrollTop + h.y, S = k === fe.Down && T <= v.y || k === fe.Up && T >= C.y;
            if (S && !h.x) {
              y.scrollTo({
                top: T,
                behavior: o
              });
              return;
            }
            S ? m.y = y.scrollTop - T : m.y = k === fe.Down ? y.scrollTop - v.y : y.scrollTop - C.y, m.y && y.scrollBy({
              top: -m.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, ar(Ir(u, this.referenceCoordinates), m));
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
Pi.activators = [{
  eventName: "onKeyDown",
  handler: (r, e, t) => {
    let {
      keyboardCodes: n = io,
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
function ys(r) {
  return !!(r && "distance" in r);
}
function bs(r) {
  return !!(r && "delay" in r);
}
class zi {
  constructor(e, t, n) {
    var i;
    n === void 0 && (n = ju(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: a
    } = s;
    this.props = e, this.events = t, this.document = mr(a), this.documentListeners = new kr(this.document), this.listeners = new kr(n), this.windowListeners = new kr(He(a)), this.initialCoordinates = (i = mn(s)) != null ? i : pt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.DragStart, vs), this.windowListeners.add(it.VisibilityChange, this.handleCancel), this.windowListeners.add(it.ContextMenu, vs), this.documentListeners.add(it.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (bs(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (ys(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(it.Click, $u, {
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
    const l = (t = mn(e)) != null ? t : pt, c = Ir(i, l);
    if (!n && o) {
      if (ys(o)) {
        if (o.tolerance != null && Yn(c, o.tolerance))
          return this.handleCancel();
        if (Yn(c, o.distance))
          return this.handleStart();
      }
      if (bs(o) && Yn(c, o.tolerance))
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
    e.code === fe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Gu = {
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
class Fi extends zi {
  constructor(e) {
    const {
      event: t
    } = e, n = mr(t.target);
    super(e, Gu, n);
  }
}
Fi.activators = [{
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
const Uu = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ci;
(function(r) {
  r[r.RightClick = 2] = "RightClick";
})(ci || (ci = {}));
class Zu extends zi {
  constructor(e) {
    super(e, Uu, mr(e.event.target));
  }
}
Zu.activators = [{
  eventName: "onMouseDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    return t.button === ci.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Jn = {
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
class qu extends zi {
  constructor(e) {
    super(e, Jn);
  }
  static setup() {
    return window.addEventListener(Jn.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Jn.move.name, e);
    };
    function e() {
    }
  }
}
qu.activators = [{
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
var Sr;
(function(r) {
  r[r.Pointer = 0] = "Pointer", r[r.DraggableRect = 1] = "DraggableRect";
})(Sr || (Sr = {}));
var gn;
(function(r) {
  r[r.TreeOrder = 0] = "TreeOrder", r[r.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(gn || (gn = {}));
function Ku(r) {
  let {
    acceleration: e,
    activator: t = Sr.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: s,
    interval: a = 5,
    order: o = gn.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: h
  } = r;
  const m = Yu({
    delta: u,
    disabled: !s
  }), [g, y] = ou(), k = Q({
    x: 0,
    y: 0
  }), R = Q({
    x: 0,
    y: 0
  }), D = Z(() => {
    switch (t) {
      case Sr.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Sr.DraggableRect:
        return i;
    }
  }, [t, i, l]), x = Q(null), A = ne(() => {
    const C = x.current;
    if (!C)
      return;
    const _ = k.current.x * R.current.x, O = k.current.y * R.current.y;
    C.scrollBy(_, O);
  }, []), v = Z(() => o === gn.TreeOrder ? [...c].reverse() : c, [o, c]);
  ee(
    () => {
      if (!s || !c.length || !D) {
        y();
        return;
      }
      for (const C of v) {
        if (n?.(C) === !1)
          continue;
        const _ = c.indexOf(C), O = d[_];
        if (!O)
          continue;
        const {
          direction: V,
          speed: I
        } = zu(C, O, D, e, h);
        for (const T of ["x", "y"])
          m[T][V[T]] || (I[T] = 0, V[T] = 0);
        if (I.x > 0 || I.y > 0) {
          y(), x.current = C, g(A, a), k.current = I, R.current = V;
          return;
        }
      }
      k.current = {
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
      A,
      n,
      y,
      s,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(D),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      g,
      c,
      v,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Xu = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function Yu(r) {
  let {
    delta: e,
    disabled: t
  } = r;
  const n = hn(e);
  return $r((i) => {
    if (t || !n || !i)
      return Xu;
    const s = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [Ne.Backward]: i.x[Ne.Backward] || s.x === -1,
        [Ne.Forward]: i.x[Ne.Forward] || s.x === 1
      },
      y: {
        [Ne.Backward]: i.y[Ne.Backward] || s.y === -1,
        [Ne.Forward]: i.y[Ne.Forward] || s.y === 1
      }
    };
  }, [t, e, n]);
}
function Ju(r, e) {
  const t = e != null ? r.get(e) : void 0, n = t ? t.node.current : null;
  return $r((i) => {
    var s;
    return e == null ? null : (s = n ?? i) != null ? s : null;
  }, [n, e]);
}
function Qu(r, e) {
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
var Pr;
(function(r) {
  r[r.Always = 0] = "Always", r[r.BeforeDragging = 1] = "BeforeDragging", r[r.WhileDragging = 2] = "WhileDragging";
})(Pr || (Pr = {}));
var di;
(function(r) {
  r.Optimized = "optimized";
})(di || (di = {}));
const xs = /* @__PURE__ */ new Map();
function ef(r, e) {
  let {
    dragging: t,
    dependencies: n,
    config: i
  } = e;
  const [s, a] = re(null), {
    frequency: o,
    measure: l,
    strategy: c
  } = i, d = Q(r), u = k(), h = Lr(u), m = ne(function(R) {
    R === void 0 && (R = []), !h.current && a((D) => D === null ? R : D.concat(R.filter((x) => !D.includes(x))));
  }, [h]), g = Q(null), y = $r((R) => {
    if (u && !t)
      return xs;
    if (!R || R === xs || d.current !== r || s != null) {
      const D = /* @__PURE__ */ new Map();
      for (let x of r) {
        if (!x)
          continue;
        if (s && s.length > 0 && !s.includes(x.id) && x.rect.current) {
          D.set(x.id, x.rect.current);
          continue;
        }
        const A = x.node.current, v = A ? new Ii(l(A), A) : null;
        x.rect.current = v, v && D.set(x.id, v);
      }
      return D;
    }
    return R;
  }, [r, s, t, u, l]);
  return ee(() => {
    d.current = r;
  }, [r]), ee(
    () => {
      u || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), ee(
    () => {
      s && s.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), ee(
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
  function k() {
    switch (c) {
      case Pr.Always:
        return !1;
      case Pr.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Bi(r, e) {
  return $r((t) => r ? t || (typeof e == "function" ? e(r) : r) : null, [e, r]);
}
function tf(r, e) {
  return Bi(r, e);
}
function rf(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = In(e), i = Z(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return ee(() => () => i?.disconnect(), [i]), i;
}
function Fn(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = In(e), i = Z(
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
  return ee(() => () => i?.disconnect(), [i]), i;
}
function nf(r) {
  return new Ii(pr(r), r);
}
function ws(r, e, t) {
  e === void 0 && (e = nf);
  const [n, i] = re(null);
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
  const a = rf({
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
  }), o = Fn({
    callback: s
  });
  return mt(() => {
    s(), r ? (o?.observe(r), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [r]), n;
}
function sf(r) {
  const e = Bi(r);
  return Ka(r, e);
}
const _s = [];
function af(r) {
  const e = Q(r), t = $r((n) => r ? n && n !== _s && r && e.current && r.parentNode === e.current.parentNode ? n : zn(r) : _s, [r]);
  return ee(() => {
    e.current = r;
  }, [r]), t;
}
function of(r) {
  const [e, t] = re(null), n = Q(r), i = ne((s) => {
    const a = Xn(s.target);
    a && t((o) => o ? (o.set(a, li(a)), new Map(o)) : null);
  }, []);
  return ee(() => {
    const s = n.current;
    if (r !== s) {
      a(s);
      const o = r.map((l) => {
        const c = Xn(l);
        return c ? (c.addEventListener("scroll", i, {
          passive: !0
        }), [c, li(c)]) : null;
      }).filter((l) => l != null);
      t(o.length ? new Map(o) : null), n.current = r;
    }
    return () => {
      a(r), a(s);
    };
    function a(o) {
      o.forEach((l) => {
        const c = Xn(l);
        c?.removeEventListener("scroll", i);
      });
    }
  }, [i, r]), Z(() => r.length ? e ? Array.from(e.values()).reduce((s, a) => ar(s, a), pt) : ro(r) : pt, [r, e]);
}
function Cs(r, e) {
  e === void 0 && (e = []);
  const t = Q(null);
  return ee(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), ee(() => {
    const n = r !== pt;
    n && !t.current && (t.current = r), !n && t.current && (t.current = null);
  }, [r]), t.current ? Ir(r, t.current) : pt;
}
function lf(r) {
  ee(
    () => {
      if (!Ln)
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
function cf(r, e) {
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
function so(r) {
  return Z(() => r ? Mu(r) : null, [r]);
}
const Es = [];
function df(r, e) {
  e === void 0 && (e = pr);
  const [t] = r, n = so(t ? He(t) : null), [i, s] = re(Es);
  function a() {
    s(() => r.length ? r.map((l) => eo(l) ? n : new Ii(e(l), l)) : Es);
  }
  const o = Fn({
    callback: a
  });
  return mt(() => {
    o?.disconnect(), a(), r.forEach((l) => o?.observe(l));
  }, [r]), i;
}
function ao(r) {
  if (!r)
    return null;
  if (r.children.length > 1)
    return r;
  const e = r.children[0];
  return jr(e) ? e : r;
}
function uf(r) {
  let {
    measure: e
  } = r;
  const [t, n] = re(null), i = ne((c) => {
    for (const {
      target: d
    } of c)
      if (jr(d)) {
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
  }, [e]), s = Fn({
    callback: i
  }), a = ne((c) => {
    const d = ao(c);
    s?.disconnect(), d && s?.observe(d), n(d ? e(d) : null);
  }, [e, s]), [o, l] = fn(a);
  return Z(() => ({
    nodeRef: o,
    rect: t,
    setRef: l
  }), [t, o, l]);
}
const ff = [{
  sensor: Fi,
  options: {}
}, {
  sensor: Pi,
  options: {}
}], hf = {
  current: {}
}, rn = {
  draggable: {
    measure: gs
  },
  droppable: {
    measure: gs,
    strategy: Pr.WhileDragging,
    frequency: di.Optimized
  },
  dragOverlay: {
    measure: pr
  }
};
class Dr extends Map {
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
const mf = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Dr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: pn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: rn,
  measureDroppableContainers: pn,
  windowRect: null,
  measuringScheduled: !1
}, oo = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: pn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: pn
}, Gr = /* @__PURE__ */ Et(oo), lo = /* @__PURE__ */ Et(mf);
function pf() {
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
      containers: new Dr()
    }
  };
}
function gf(r, e) {
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
      } = t, i = new Dr(r.droppable.containers);
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
      const a = new Dr(r.droppable.containers);
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
      const s = new Dr(r.droppable.containers);
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
function vf(r) {
  let {
    disabled: e
  } = r;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: i
  } = ht(Gr), s = hn(n), a = hn(t?.id);
  return ee(() => {
    if (!e && !n && s && a != null) {
      if (!Pn(s) || document.activeElement === s.target)
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
          const u = du(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, i, a, s]), null;
}
function co(r, e) {
  let {
    transform: t,
    ...n
  } = e;
  return r != null && r.length ? r.reduce((i, s) => s({
    transform: i,
    ...n
  }), t) : t;
}
function yf(r) {
  return Z(
    () => ({
      draggable: {
        ...rn.draggable,
        ...r?.draggable
      },
      droppable: {
        ...rn.droppable,
        ...r?.droppable
      },
      dragOverlay: {
        ...rn.dragOverlay,
        ...r?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r?.draggable, r?.droppable, r?.dragOverlay]
  );
}
function bf(r) {
  let {
    activeNode: e,
    measure: t,
    initialRect: n,
    config: i = !0
  } = r;
  const s = Q(!1), {
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
    const d = t(c), u = Ka(d, n);
    if (a || (u.x = 0), o || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = Ya(c);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, o, n, t]);
}
const Bn = /* @__PURE__ */ Et({
  ...pt,
  scaleX: 1,
  scaleY: 1
});
var Lt;
(function(r) {
  r[r.Uninitialized = 0] = "Uninitialized", r[r.Initializing = 1] = "Initializing", r[r.Initialized = 2] = "Initialized";
})(Lt || (Lt = {}));
const xf = /* @__PURE__ */ wc(function(e) {
  var t, n, i, s;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: c,
    sensors: d = ff,
    collisionDetection: u = Du,
    measuring: h,
    modifiers: m,
    ...g
  } = e;
  const y = _c(gf, void 0, pf), [k, R] = y, [D, x] = gu(), [A, v] = re(Lt.Uninitialized), C = A === Lt.Initialized, {
    draggable: {
      active: _,
      nodes: O,
      translate: V
    },
    droppable: {
      containers: I
    }
  } = k, T = _ != null ? O.get(_) : null, S = Q({
    initial: null,
    translated: null
  }), M = Z(() => {
    var Pe;
    return _ != null ? {
      id: _,
      // It's possible for the active node to unmount while dragging
      data: (Pe = T?.data) != null ? Pe : hf,
      rect: S
    } : null;
  }, [_, T]), H = Q(null), [z, q] = re(null), [U, le] = re(null), ce = Lr(g, Object.values(g)), ue = Wr("DndDescribedBy", a), Qe = Z(() => I.getEnabled(), [I]), we = yf(h), {
    droppableRects: Re,
    measureDroppableContainers: Ve,
    measuringScheduled: et
  } = ef(Qe, {
    dragging: C,
    dependencies: [V.x, V.y],
    config: we.droppable
  }), xe = Ju(O, _), Oe = Z(() => U ? mn(U) : null, [U]), Ae = Al(), Ee = tf(xe, we.draggable.measure);
  bf({
    activeNode: _ != null ? O.get(_) : null,
    config: Ae.layoutShiftCompensation,
    initialRect: Ee,
    measure: we.draggable.measure
  });
  const ie = ws(xe, we.draggable.measure, Ee), Me = ws(xe ? xe.parentElement : null), Le = Q({
    activatorEvent: null,
    active: null,
    activeNode: xe,
    collisionRect: null,
    collisions: null,
    droppableRects: Re,
    draggableNodes: O,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Ze = I.getNodeFor((t = Le.current.over) == null ? void 0 : t.id), Ie = uf({
    measure: we.dragOverlay.measure
  }), je = (n = Ie.nodeRef.current) != null ? n : xe, dt = C ? (i = Ie.rect) != null ? i : ie : null, kt = !!(Ie.nodeRef.current && Ie.rect), p = sf(kt ? null : ie), b = so(je ? He(je) : null), E = af(C ? Ze ?? xe : null), F = df(E), P = co(m, {
    transform: {
      x: V.x - p.x,
      y: V.y - p.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: U,
    active: M,
    activeNodeRect: ie,
    containerNodeRect: Me,
    draggingNodeRect: dt,
    over: Le.current.over,
    overlayNodeRect: Ie.rect,
    scrollableAncestors: E,
    scrollableAncestorRects: F,
    windowRect: b
  }), N = Oe ? ar(Oe, V) : null, $ = of(E), Y = Cs($), ge = Cs($, [ie]), ve = ar(P, Y), ze = dt ? Au(dt, P) : null, Gt = M && ze ? u({
    active: M,
    collisionRect: ze,
    droppableRects: Re,
    droppableContainers: Qe,
    pointerCoordinates: N
  }) : null, Yt = qa(Gt, "id"), [tt, qr] = re(null), Kr = kt ? P : ar(P, ge), Gn = Nu(Kr, (s = tt?.rect) != null ? s : null, ie), Jt = Q(null), rs = ne(
    (Pe, qe) => {
      let {
        sensor: Ke,
        options: At
      } = qe;
      if (H.current == null)
        return;
      const rt = O.get(H.current);
      if (!rt)
        return;
      const Xe = Pe.nativeEvent, vt = new Ke({
        active: H.current,
        activeNode: rt,
        event: Xe,
        options: At,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Le,
        onAbort(Te) {
          if (!O.get(Te))
            return;
          const {
            onDragAbort: yt
          } = ce.current, St = {
            id: Te
          };
          yt?.(St), D({
            type: "onDragAbort",
            event: St
          });
        },
        onPending(Te, Tt, yt, St) {
          if (!O.get(Te))
            return;
          const {
            onDragPending: vr
          } = ce.current, Ot = {
            id: Te,
            constraint: Tt,
            initialCoordinates: yt,
            offset: St
          };
          vr?.(Ot), D({
            type: "onDragPending",
            event: Ot
          });
        },
        onStart(Te) {
          const Tt = H.current;
          if (Tt == null)
            return;
          const yt = O.get(Tt);
          if (!yt)
            return;
          const {
            onDragStart: St
          } = ce.current, gr = {
            activatorEvent: Xe,
            active: {
              id: Tt,
              data: yt.data,
              rect: S
            }
          };
          Yr(() => {
            St?.(gr), v(Lt.Initializing), R({
              type: De.DragStart,
              initialCoordinates: Te,
              active: Tt
            }), D({
              type: "onDragStart",
              event: gr
            }), q(Jt.current), le(Xe);
          });
        },
        onMove(Te) {
          R({
            type: De.DragMove,
            coordinates: Te
          });
        },
        onEnd: Qt(De.DragEnd),
        onCancel: Qt(De.DragCancel)
      });
      Jt.current = vt;
      function Qt(Te) {
        return async function() {
          const {
            active: yt,
            collisions: St,
            over: gr,
            scrollAdjustedTranslate: vr
          } = Le.current;
          let Ot = null;
          if (yt && vr) {
            const {
              cancelDrop: yr
            } = ce.current;
            Ot = {
              activatorEvent: Xe,
              active: yt,
              collisions: St,
              delta: vr,
              over: gr
            }, Te === De.DragEnd && typeof yr == "function" && await Promise.resolve(yr(Ot)) && (Te = De.DragCancel);
          }
          H.current = null, Yr(() => {
            R({
              type: Te
            }), v(Lt.Uninitialized), qr(null), q(null), le(null), Jt.current = null;
            const yr = Te === De.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ot) {
              const Un = ce.current[yr];
              Un?.(Ot), D({
                type: yr,
                event: Ot
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [O]
  ), Dl = ne((Pe, qe) => (Ke, At) => {
    const rt = Ke.nativeEvent, Xe = O.get(At);
    if (
      // Another sensor is already instantiating
      H.current !== null || // No active draggable
      !Xe || // Event has already been captured
      rt.dndKit || rt.defaultPrevented
    )
      return;
    const vt = {
      active: Xe
    };
    Pe(Ke, qe.options, vt) === !0 && (rt.dndKit = {
      capturedBy: qe.sensor
    }, H.current = At, rs(Ke, qe));
  }, [O, rs]), ns = Qu(d, Dl);
  lf(d), mt(() => {
    ie && A === Lt.Initializing && v(Lt.Initialized);
  }, [ie, A]), ee(
    () => {
      const {
        onDragMove: Pe
      } = ce.current, {
        active: qe,
        activatorEvent: Ke,
        collisions: At,
        over: rt
      } = Le.current;
      if (!qe || !Ke)
        return;
      const Xe = {
        active: qe,
        activatorEvent: Ke,
        collisions: At,
        delta: {
          x: ve.x,
          y: ve.y
        },
        over: rt
      };
      Yr(() => {
        Pe?.(Xe), D({
          type: "onDragMove",
          event: Xe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ve.x, ve.y]
  ), ee(
    () => {
      const {
        active: Pe,
        activatorEvent: qe,
        collisions: Ke,
        droppableContainers: At,
        scrollAdjustedTranslate: rt
      } = Le.current;
      if (!Pe || H.current == null || !qe || !rt)
        return;
      const {
        onDragOver: Xe
      } = ce.current, vt = At.get(Yt), Qt = vt && vt.rect.current ? {
        id: vt.id,
        rect: vt.rect.current,
        data: vt.data,
        disabled: vt.disabled
      } : null, Te = {
        active: Pe,
        activatorEvent: qe,
        collisions: Ke,
        delta: {
          x: rt.x,
          y: rt.y
        },
        over: Qt
      };
      Yr(() => {
        qr(Qt), Xe?.(Te), D({
          type: "onDragOver",
          event: Te
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Yt]
  ), mt(() => {
    Le.current = {
      activatorEvent: U,
      active: M,
      activeNode: xe,
      collisionRect: ze,
      collisions: Gt,
      droppableRects: Re,
      draggableNodes: O,
      draggingNode: je,
      draggingNodeRect: dt,
      droppableContainers: I,
      over: tt,
      scrollableAncestors: E,
      scrollAdjustedTranslate: ve
    }, S.current = {
      initial: dt,
      translated: ze
    };
  }, [M, xe, Gt, ze, O, je, dt, Re, I, tt, E, ve]), Ku({
    ...Ae,
    delta: V,
    draggingRect: ze,
    pointerCoordinates: N,
    scrollableAncestors: E,
    scrollableAncestorRects: F
  });
  const Nl = Z(() => ({
    active: M,
    activeNode: xe,
    activeNodeRect: ie,
    activatorEvent: U,
    collisions: Gt,
    containerNodeRect: Me,
    dragOverlay: Ie,
    draggableNodes: O,
    droppableContainers: I,
    droppableRects: Re,
    over: tt,
    measureDroppableContainers: Ve,
    scrollableAncestors: E,
    scrollableAncestorRects: F,
    measuringConfiguration: we,
    measuringScheduled: et,
    windowRect: b
  }), [M, xe, ie, U, Gt, Me, Ie, O, I, Re, tt, Ve, E, F, we, et, b]), Rl = Z(() => ({
    activatorEvent: U,
    activators: ns,
    active: M,
    activeNodeRect: ie,
    ariaDescribedById: {
      draggable: ue
    },
    dispatch: R,
    draggableNodes: O,
    over: tt,
    measureDroppableContainers: Ve
  }), [U, ns, M, ie, R, ue, O, tt, Ve]);
  return W.createElement(Za.Provider, {
    value: x
  }, W.createElement(Gr.Provider, {
    value: Rl
  }, W.createElement(lo.Provider, {
    value: Nl
  }, W.createElement(Bn.Provider, {
    value: Gn
  }, c)), W.createElement(vf, {
    disabled: o?.restoreFocus === !1
  })), W.createElement(bu, {
    ...o,
    hiddenTextDescribedById: ue
  }));
  function Al() {
    const Pe = z?.autoScrollEnabled === !1, qe = typeof l == "object" ? l.enabled === !1 : l === !1, Ke = C && !Pe && !qe;
    return typeof l == "object" ? {
      ...l,
      enabled: Ke
    } : {
      enabled: Ke
    };
  }
}), wf = /* @__PURE__ */ Et(null), ks = "button", _f = "Draggable";
function Cf(r) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: i
  } = r;
  const s = Wr(_f), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: h
  } = ht(Gr), {
    role: m = ks,
    roleDescription: g = "draggable",
    tabIndex: y = 0
  } = i ?? {}, k = l?.id === e, R = ht(k ? Bn : wf), [D, x] = fn(), [A, v] = fn(), C = cf(a, e), _ = Lr(t);
  mt(
    () => (u.set(e, {
      id: e,
      key: s,
      node: D,
      activatorNode: A,
      data: _
    }), () => {
      const V = u.get(e);
      V && V.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const O = Z(() => ({
    role: m,
    tabIndex: y,
    "aria-disabled": n,
    "aria-pressed": k && m === ks ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": d.draggable
  }), [n, m, y, k, g, d.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: c,
    attributes: O,
    isDragging: k,
    listeners: n ? void 0 : C,
    node: D,
    over: h,
    setNodeRef: x,
    setActivatorNodeRef: v,
    transform: R
  };
}
function uo() {
  return ht(lo);
}
const Ef = "Droppable", kf = {
  timeout: 25
};
function Sf(r) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: i
  } = r;
  const s = Wr(Ef), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: c
  } = ht(Gr), d = Q({
    disabled: t
  }), u = Q(!1), h = Q(null), m = Q(null), {
    disabled: g,
    updateMeasurementsFor: y,
    timeout: k
  } = {
    ...kf,
    ...i
  }, R = Lr(y ?? n), D = ne(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        c(Array.isArray(R.current) ? R.current : [R.current]), m.current = null;
      }, k);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [k]
  ), x = Fn({
    callback: D,
    disabled: g || !a
  }), A = ne((O, V) => {
    x && (V && (x.unobserve(V), u.current = !1), O && x.observe(O));
  }, [x]), [v, C] = fn(A), _ = Lr(e);
  return ee(() => {
    !x || !v.current || (x.disconnect(), u.current = !1, x.observe(v.current));
  }, [v, x]), ee(
    () => (o({
      type: De.RegisterDroppable,
      element: {
        id: n,
        key: s,
        disabled: t,
        node: v,
        rect: h,
        data: _
      }
    }), () => o({
      type: De.UnregisterDroppable,
      key: s,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), ee(() => {
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
    node: v,
    over: l,
    setNodeRef: C
  };
}
function Df(r) {
  let {
    animation: e,
    children: t
  } = r;
  const [n, i] = re(null), [s, a] = re(null), o = hn(t);
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
  }, [e, n, s]), W.createElement(W.Fragment, null, t, n ? Cc(n, {
    ref: a
  }) : null);
}
const Nf = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Rf(r) {
  let {
    children: e
  } = r;
  return W.createElement(Gr.Provider, {
    value: oo
  }, W.createElement(Bn.Provider, {
    value: Nf
  }, e));
}
const Af = {
  position: "fixed",
  touchAction: "none"
}, Tf = (r) => Pn(r) ? "transform 250ms ease" : void 0, Of = /* @__PURE__ */ Ue((r, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: i,
    children: s,
    className: a,
    rect: o,
    style: l,
    transform: c,
    transition: d = Tf
  } = r;
  if (!o)
    return null;
  const u = i ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...Af,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: Bt.Transform.toString(u),
    transformOrigin: i && n ? _u(n, o) : void 0,
    transition: typeof d == "function" ? d(n) : d,
    ...l
  };
  return W.createElement(t, {
    className: a,
    style: h,
    ref: e
  }, s);
}), Mf = (r) => (e) => {
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
}, Lf = (r) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = r;
  return [{
    transform: Bt.Transform.toString(e)
  }, {
    transform: Bt.Transform.toString(t)
  }];
}, If = {
  duration: 250,
  easing: "ease",
  keyframes: Lf,
  sideEffects: /* @__PURE__ */ Mf({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Pf(r) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: i
  } = r;
  return In((s, a) => {
    if (e === null)
      return;
    const o = t.get(s);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const c = ao(a);
    if (!c)
      return;
    const {
      transform: d
    } = He(a).getComputedStyle(a), u = Xa(d);
    if (!u)
      return;
    const h = typeof e == "function" ? e : zf(e);
    return no(l, i.draggable.measure), h({
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
function zf(r) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: i
  } = {
    ...If,
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
    const k = n?.({
      active: a,
      dragOverlay: o,
      ...c
    }), R = o.node.animate(m, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((D) => {
      R.onfinish = () => {
        k?.(), D();
      };
    });
  };
}
let Ss = 0;
function Ff(r) {
  return Z(() => {
    if (r != null)
      return Ss++, Ss;
  }, [r]);
}
const Bf = /* @__PURE__ */ W.memo((r) => {
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
    dragOverlay: k,
    over: R,
    measuringConfiguration: D,
    scrollableAncestors: x,
    scrollableAncestorRects: A,
    windowRect: v
  } = uo(), C = ht(Bn), _ = Ff(u?.id), O = co(a, {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: k.rect,
    over: R,
    overlayNodeRect: k.rect,
    scrollableAncestors: x,
    scrollableAncestorRects: A,
    transform: C,
    windowRect: v
  }), V = Bi(h), I = Pf({
    config: n,
    draggableNodes: g,
    droppableContainers: y,
    measuringConfiguration: D
  }), T = V ? k.setRef : void 0;
  return W.createElement(Rf, null, W.createElement(Df, {
    animation: I
  }, u && _ ? W.createElement(Of, {
    key: _,
    id: u.id,
    ref: T,
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
    transform: O
  }, t) : null));
});
function Hi(r, e, t) {
  const n = r.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function Hf(r, e) {
  return r.reduce((t, n, i) => {
    const s = e.get(n);
    return s && (t[i] = s), t;
  }, Array(r.length));
}
function en(r) {
  return r !== null && r >= 0;
}
function Vf(r, e) {
  if (r === e)
    return !0;
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function jf(r) {
  return typeof r == "boolean" ? {
    draggable: r,
    droppable: r
  } : r;
}
const fo = (r) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: i
  } = r;
  const s = Hi(e, n, t), a = e[i], o = s[i];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, ho = "Sortable", mo = /* @__PURE__ */ W.createContext({
  activeIndex: -1,
  containerId: ho,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: fo,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function $f(r) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: i = fo,
    disabled: s = !1
  } = r;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = uo(), u = Wr(ho, t), h = o.rect !== null, m = Z(() => n.map((C) => typeof C == "object" && "id" in C ? C.id : C), [n]), g = a != null, y = a ? m.indexOf(a.id) : -1, k = c ? m.indexOf(c.id) : -1, R = Q(m), D = !Vf(m, R.current), x = k !== -1 && y === -1 || D, A = jf(s);
  mt(() => {
    D && g && d(m);
  }, [D, m, g, d]), ee(() => {
    R.current = m;
  }, [m]);
  const v = Z(
    () => ({
      activeIndex: y,
      containerId: u,
      disabled: A,
      disableTransforms: x,
      items: m,
      overIndex: k,
      useDragOverlay: h,
      sortedRects: Hf(m, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, u, A.draggable, A.droppable, x, m, k, l, h, i]
  );
  return W.createElement(mo.Provider, {
    value: v
  }, e);
}
const Wf = (r) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: i
  } = r;
  return Hi(t, n, i).indexOf(e);
}, Gf = (r) => {
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
}, Uf = {
  duration: 200,
  easing: "ease"
}, po = "transform", Zf = /* @__PURE__ */ Bt.Transition.toString({
  property: po,
  duration: 0,
  easing: "linear"
}), qf = {
  roleDescription: "sortable"
};
function Kf(r) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: i
  } = r;
  const [s, a] = re(null), o = Q(t);
  return mt(() => {
    if (!e && t !== o.current && n.current) {
      const l = i.current;
      if (l) {
        const c = pr(n.current, {
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
  }, [e, t, n, i]), ee(() => {
    s && a(null);
  }, [s]), s;
}
function Xf(r) {
  let {
    animateLayoutChanges: e = Gf,
    attributes: t,
    disabled: n,
    data: i,
    getNewIndex: s = Wf,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: c = Uf
  } = r;
  const {
    items: d,
    containerId: u,
    activeIndex: h,
    disabled: m,
    disableTransforms: g,
    sortedRects: y,
    overIndex: k,
    useDragOverlay: R,
    strategy: D
  } = ht(mo), x = Yf(n, m), A = d.indexOf(a), v = Z(() => ({
    sortable: {
      containerId: u,
      index: A,
      items: d
    },
    ...i
  }), [u, i, A, d]), C = Z(() => d.slice(d.indexOf(a)), [d, a]), {
    rect: _,
    node: O,
    isOver: V,
    setNodeRef: I
  } = Sf({
    id: a,
    data: v,
    disabled: x.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: C,
      ...l
    }
  }), {
    active: T,
    activatorEvent: S,
    activeNodeRect: M,
    attributes: H,
    setNodeRef: z,
    listeners: q,
    isDragging: U,
    over: le,
    setActivatorNodeRef: ce,
    transform: ue
  } = Cf({
    id: a,
    data: v,
    attributes: {
      ...qf,
      ...t
    },
    disabled: x.draggable
  }), Qe = au(I, z), we = !!T, Re = we && !g && en(h) && en(k), Ve = !R && U, et = Ve && Re ? ue : null, Oe = Re ? et ?? (o ?? D)({
    rects: y,
    activeNodeRect: M,
    activeIndex: h,
    overIndex: k,
    index: A
  }) : null, Ae = en(h) && en(k) ? s({
    id: a,
    items: d,
    activeIndex: h,
    overIndex: k
  }) : A, Ee = T?.id, ie = Q({
    activeId: Ee,
    items: d,
    newIndex: Ae,
    containerId: u
  }), Me = d !== ie.current.items, Le = e({
    active: T,
    containerId: u,
    isDragging: U,
    isSorting: we,
    id: a,
    index: A,
    items: d,
    newIndex: ie.current.newIndex,
    previousItems: ie.current.items,
    previousContainerId: ie.current.containerId,
    transition: c,
    wasDragging: ie.current.activeId != null
  }), Ze = Kf({
    disabled: !Le,
    index: A,
    node: O,
    rect: _
  });
  return ee(() => {
    we && ie.current.newIndex !== Ae && (ie.current.newIndex = Ae), u !== ie.current.containerId && (ie.current.containerId = u), d !== ie.current.items && (ie.current.items = d);
  }, [we, Ae, u, d]), ee(() => {
    if (Ee === ie.current.activeId)
      return;
    if (Ee != null && ie.current.activeId == null) {
      ie.current.activeId = Ee;
      return;
    }
    const je = setTimeout(() => {
      ie.current.activeId = Ee;
    }, 50);
    return () => clearTimeout(je);
  }, [Ee]), {
    active: T,
    activeIndex: h,
    attributes: H,
    data: v,
    rect: _,
    index: A,
    newIndex: Ae,
    items: d,
    isOver: V,
    isSorting: we,
    isDragging: U,
    listeners: q,
    node: O,
    overIndex: k,
    over: le,
    setNodeRef: Qe,
    setActivatorNodeRef: ce,
    setDroppableNodeRef: I,
    setDraggableNodeRef: z,
    transform: Ze ?? Oe,
    transition: Ie()
  };
  function Ie() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Ze || // Or to prevent items jumping to back to their "new" position when items change
      Me && ie.current.newIndex === A
    )
      return Zf;
    if (!(Ve && !Pn(S) || !c) && (we || Le))
      return Bt.Transition.toString({
        ...c,
        property: po
      });
  }
}
function Yf(r, e) {
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
function vn(r) {
  if (!r)
    return !1;
  const e = r.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const Jf = [fe.Down, fe.Right, fe.Up, fe.Left], Qf = (r, e) => {
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
  if (Jf.includes(r.code)) {
    if (r.preventDefault(), !t || !n)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = i.get(u.id);
      if (h)
        switch (r.code) {
          case fe.Down:
            n.top < h.top && l.push(u);
            break;
          case fe.Up:
            n.top > h.top && l.push(u);
            break;
          case fe.Left:
            n.left > h.left && l.push(u);
            break;
          case fe.Right:
            n.left < h.left && l.push(u);
            break;
        }
    });
    const c = ku({
      collisionRect: n,
      droppableRects: i,
      droppableContainers: l
    });
    let d = qa(c, "id");
    if (d === a?.id && c.length > 1 && (d = c[1].id), d != null) {
      const u = s.get(t.id), h = s.get(d), m = h ? i.get(h.id) : null, g = h?.node.current;
      if (g && m && u && h) {
        const k = zn(g).some((C, _) => o[_] !== C), R = go(u, h), D = eh(u, h), x = k || !R ? {
          x: 0,
          y: 0
        } : {
          x: D ? n.width - m.width : 0,
          y: D ? n.height - m.height : 0
        }, A = {
          x: m.left,
          y: m.top
        };
        return x.x && x.y ? A : Ir(A, x);
      }
    }
  }
};
function go(r, e) {
  return !vn(r) || !vn(e) ? !1 : r.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function eh(r, e) {
  return !vn(r) || !vn(e) || !go(r, e) ? !1 : r.data.current.sortable.index < e.data.current.sortable.index;
}
const Ds = ({ id: r, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: i, transform: s, transition: a } = Xf({ id: r }), o = {
    transform: Bt.Translate.toString(s),
    transition: a,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return /* @__PURE__ */ f("div", { ref: i, style: o, ...t, ...n, children: e });
}, Vi = ({
  blocks: r,
  sortable: e = !1,
  onSort: t = () => {
  },
  main: n = !1
}) => {
  const [i, s] = re([]);
  la(() => {
    s(
      r.map((u, h) => ({
        id: u.id ?? h.toString(),
        render: u.render
      }))
    );
  }, [r]);
  const [a, o] = re(null), l = xu(
    ms(Fi),
    ms(Pi, {
      coordinateGetter: Qf
    })
  ), c = (u) => {
    o(u.active.id);
  }, d = (u) => {
    const { active: h, over: m } = u;
    o(null), m && h.id !== m.id && s((g) => {
      const y = g.findIndex((R) => R.id === h.id), k = g.findIndex((R) => R.id === m.id);
      return Hi(g, y, k);
    });
  };
  return /* @__PURE__ */ f("div", { className: se("flex flex-wrap items-stretch gap-4", n && "flex-1"), children: /* @__PURE__ */ j(
    xf,
    {
      sensors: l,
      onDragStart: c,
      onDragEnd: d,
      children: [
        /* @__PURE__ */ f($f, { items: i, children: i.map((u) => /* @__PURE__ */ f(Ds, { id: u.id, children: u.render }, u.id)) }),
        /* @__PURE__ */ f(Bf, { children: a ? /* @__PURE__ */ f(Ds, { id: a, children: i.find((u) => u.id === a)?.render }) : null })
      ]
    }
  ) });
};
Vi.displayName = "GroupMasonry";
Vi.__isPageLayoutGroup = !0;
const th = Ue(function({ children: e, aside: t, header: n, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Wa("Page", e, ["block", "group"]), /* @__PURE__ */ f("div", { ref: s, className: "h-full", children: /* @__PURE__ */ j(
    "div",
    {
      className: se(
        "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
        "flex-col",
        "overflow-y-auto",
        "md:sticky md:top-0 md:max-h-full"
      ),
      children: [
        /* @__PURE__ */ j(
          "main",
          {
            className: se(
              "sm:min-h-xs h-fit border-0",
              "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2",
              "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden",
              i === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
              "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
            ),
            children: [
              n && /* @__PURE__ */ f(
                "header",
                {
                  className: se(
                    "sticky top-0 z-30 bg-f1-background"
                  ),
                  children: n
                }
              ),
              /* @__PURE__ */ f("div", { className: "flex-1", children: e })
            ]
          }
        ),
        t && /* @__PURE__ */ f(
          "aside",
          {
            className: se(
              "min-w-30 sm:basis-1/4 md:max-w-80",
              "order-2",
              i === "aside-main" ? "md:order-1" : "md:order-3"
            ),
            children: t
          }
        )
      ]
    }
  ) });
}), vg = {
  Page: me(at("Page", th)),
  Block: me(at("Block", Mn)),
  BlockContent: me(
    at("BlockContent", nu)
  ),
  Group: me(at("Group", Oi)),
  GroupGrid: me(
    at("GroupGrid", On)
  ),
  GroupMasonry: me(
    at("GroupMasonry", Vi)
  )
}, yg = Sd, bg = Nd, xg = me(
  lt(
    {
      name: "HomeLayout",
      type: "layout"
    },
    Ed
  )
);
function or(r) {
  "@babel/helpers - typeof";
  return or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, or(r);
}
function rh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, bo(n.key), n);
  }
}
function ih(r, e, t) {
  return e && nh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function sh(r, e, t) {
  return e = yn(e), ah(r, vo() ? Reflect.construct(e, t || [], yn(r).constructor) : e.apply(r, t));
}
function ah(r, e) {
  if (e && (or(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return oh(r);
}
function oh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function vo() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vo = function() {
    return !!r;
  })();
}
function yn(r) {
  return yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, yn(r);
}
function lh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && ui(r, e);
}
function ui(r, e) {
  return ui = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ui(r, e);
}
function yo(r, e, t) {
  return e = bo(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function bo(r) {
  var e = ch(r, "string");
  return or(e) == "symbol" ? e : e + "";
}
function ch(r, e) {
  if (or(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Hn = /* @__PURE__ */ (function(r) {
  function e() {
    return rh(this, e), sh(this, e, arguments);
  }
  return lh(e, r), ih(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(W.Component);
yo(Hn, "displayName", "ZAxis");
yo(Hn, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var dh = ["option", "isActive"];
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
function uh(r, e) {
  if (r == null) return {};
  var t = fh(r, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function fh(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function hh(r) {
  var e = r.option, t = r.isActive, n = uh(r, dh);
  return typeof e == "string" ? /* @__PURE__ */ W.createElement(as, Nr({
    option: /* @__PURE__ */ W.createElement(Rc, Nr({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ W.createElement(as, Nr({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, n));
}
function lr(r) {
  "@babel/helpers - typeof";
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, lr(r);
}
function Rr() {
  return Rr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Rr.apply(this, arguments);
}
function Ns(r, e) {
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
    e % 2 ? Ns(Object(t), !0).forEach(function(n) {
      zt(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ns(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function mh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Rs(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, wo(n.key), n);
  }
}
function ph(r, e, t) {
  return e && Rs(r.prototype, e), t && Rs(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function gh(r, e, t) {
  return e = bn(e), vh(r, xo() ? Reflect.construct(e, t || [], bn(r).constructor) : e.apply(r, t));
}
function vh(r, e) {
  if (e && (lr(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yh(r);
}
function yh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function xo() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xo = function() {
    return !!r;
  })();
}
function bn(r) {
  return bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, bn(r);
}
function bh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && fi(r, e);
}
function fi(r, e) {
  return fi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, fi(r, e);
}
function zt(r, e, t) {
  return e = wo(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function wo(r) {
  var e = xh(r, "string");
  return lr(e) == "symbol" ? e : e + "";
}
function xh(r, e) {
  if (lr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Ur = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    mh(this, e);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return t = gh(this, e, [].concat(i)), zt(t, "state", {
      isAnimationFinished: !1
    }), zt(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), zt(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), zt(t, "id", Pc("recharts-scatter-")), t;
  }
  return bh(e, r), ph(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, s = this.props, a = s.shape, o = s.activeShape, l = s.activeIndex, c = Zn(this.props, !1);
      return n.map(function(d, u) {
        var h = l === u, m = h ? o : a, g = nt(nt({}, c), d);
        return /* @__PURE__ */ W.createElement(br, Rr({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(d?.cx, "-").concat(d?.cy, "-").concat(d?.size, "-").concat(u)
        }, Ac(i.props, d, u), {
          role: "img"
        }), /* @__PURE__ */ W.createElement(hh, Rr({
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
      return /* @__PURE__ */ W.createElement(Tc, {
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
        var m = h.t, g = s.map(function(y, k) {
          var R = u && u[k];
          if (R) {
            var D = Jr(R.cx, y.cx), x = Jr(R.cy, y.cy), A = Jr(R.size, y.size);
            return nt(nt({}, y), {}, {
              cx: D(m),
              cy: x(m),
              size: A(m)
            });
          }
          var v = Jr(0, y.size);
          return nt(nt({}, y), {}, {
            size: v(m)
          });
        });
        return /* @__PURE__ */ W.createElement(br, null, n.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, s = n.isAnimationActive, a = this.state.prevPoints;
      return s && i && i.length && (!a || !Ca(a, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, a = i.xAxis, o = i.yAxis, l = i.children, c = Ea(l, Oc);
      return c ? c.map(function(d, u) {
        var h = d.props, m = h.direction, g = h.dataKey;
        return /* @__PURE__ */ W.cloneElement(d, {
          key: "".concat(m, "-").concat(g, "-").concat(s[u]),
          data: s,
          xAxis: a,
          yAxis: o,
          layout: m === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(k, R) {
            return {
              x: k.cx,
              y: k.cy,
              value: m === "x" ? +k.node.x : +k.node.y,
              errorVal: tn(k, R)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, s = n.line, a = n.lineType, o = n.lineJointType, l = Zn(this.props, !1), c = Zn(s, !1), d, u;
      if (a === "joint")
        d = i.map(function(x) {
          return {
            x: x.cx,
            y: x.cy
          };
        });
      else if (a === "fitting") {
        var h = Mc(i), m = h.xmin, g = h.xmax, y = h.a, k = h.b, R = function(A) {
          return y * A + k;
        };
        d = [{
          x: m,
          y: R(m)
        }, {
          x: g,
          y: R(g)
        }];
      }
      var D = nt(nt(nt({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, c), {}, {
        points: d
      });
      return /* @__PURE__ */ W.isValidElement(s) ? u = /* @__PURE__ */ W.cloneElement(s, D) : Lc(s) ? u = s(D) : u = /* @__PURE__ */ W.createElement(Ic, Rr({}, D, {
        type: o
      })), /* @__PURE__ */ W.createElement(br, {
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
      var k = this.state.isAnimationFinished, R = Pl("recharts-scatter", o), D = l && l.allowDataOverflow, x = c && c.allowDataOverflow, A = D || x, v = rr(g) ? this.id : g;
      return /* @__PURE__ */ W.createElement(br, {
        className: R,
        clipPath: A ? "url(#clipPath-".concat(v, ")") : null
      }, D || x ? /* @__PURE__ */ W.createElement("defs", null, /* @__PURE__ */ W.createElement("clipPath", {
        id: "clipPath-".concat(v)
      }, /* @__PURE__ */ W.createElement("rect", {
        x: D ? d : d - h / 2,
        y: x ? u : u - m / 2,
        width: D ? h : h * 2,
        height: x ? m : m * 2
      }))) : null, a && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ W.createElement(br, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!y || k) && ka.renderCallByParent(this.props, s));
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
})(Ec);
zt(Ur, "displayName", "Scatter");
zt(Ur, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !zc.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
zt(Ur, "getComposedData", function(r) {
  var e = r.xAxis, t = r.yAxis, n = r.zAxis, i = r.item, s = r.displayedData, a = r.xAxisTicks, o = r.yAxisTicks, l = r.offset, c = i.props.tooltipType, d = Ea(i.props.children, Fc), u = rr(e.dataKey) ? i.props.dataKey : e.dataKey, h = rr(t.dataKey) ? i.props.dataKey : t.dataKey, m = n && n.dataKey, g = n ? n.range : Hn.defaultProps.range, y = g && g[0], k = e.scale.bandwidth ? e.scale.bandwidth() : 0, R = t.scale.bandwidth ? t.scale.bandwidth() : 0, D = s.map(function(x, A) {
    var v = tn(x, u), C = tn(x, h), _ = !rr(m) && tn(x, m) || "-", O = [{
      name: rr(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: v,
      payload: x,
      dataKey: u,
      type: c
    }, {
      name: rr(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: C,
      payload: x,
      dataKey: h,
      type: c
    }];
    _ !== "-" && O.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: _,
      payload: x,
      dataKey: m,
      type: c
    });
    var V = os({
      axis: e,
      ticks: a,
      bandSize: k,
      entry: x,
      index: A,
      dataKey: u
    }), I = os({
      axis: t,
      ticks: o,
      bandSize: R,
      entry: x,
      index: A,
      dataKey: h
    }), T = _ !== "-" ? n.scale(_) : y, S = Math.sqrt(Math.max(T, 0) / Math.PI);
    return nt(nt({}, x), {}, {
      cx: V,
      cy: I,
      x: V - S,
      y: I - S,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * S,
      height: 2 * S,
      size: T,
      node: {
        x: v,
        y: C,
        z: _
      },
      tooltipPayload: O,
      tooltipPosition: {
        x: V,
        y: I
      },
      payload: x
    }, d && d[A] && d[A].props);
  });
  return nt({
    points: D
  }, l);
});
var wh = Bc({
  chartName: "ComposedChart",
  GraphicalChild: [Sa, Hc, Da, Ur],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Na
  }, {
    axisType: "yAxis",
    AxisComp: oi
  }, {
    axisType: "zAxis",
    AxisComp: Hn
  }],
  formatAxisMap: Vc
});
const _h = (r) => {
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
    return /* @__PURE__ */ f(
      "circle",
      {
        cx: n,
        cy: i,
        r: 4,
        fill: s,
        stroke: "white",
        strokeWidth: 2,
        ref: (l) => {
          l?.parentElement && l.parentElement.setAttribute(
            "aria-label",
            `Data point: ${o()}`
          );
        }
      }
    );
  };
  return e.displayName = `Scatter-${r}`, e;
}, Ch = ({
  dataConfig: r,
  data: e,
  xAxis: t,
  yAxis: n = { hide: !0 },
  label: i = !1,
  hideTooltip: s = !1,
  hideGrid: a = !1,
  aspect: o,
  legend: l,
  showValueUnderLabel: c = !1,
  bar: d,
  line: u,
  scatter: h,
  onClick: m
}, g) => {
  const y = jc(e), k = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], R = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], D = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], x = [
    ...k,
    ...R,
    ...D
  ], A = Math.max(
    ...y.flatMap(
      (_) => x.map(
        (O) => $c(
          n?.tickFormatter ? n.tickFormatter(`${_[O]}`) : `${_[O]}`
        )
      )
    )
  ), v = [d, u, h].filter(
    (_) => _?.axisPosition === "left"
  ), C = [d, u, h].filter(
    (_) => _?.axisPosition === "right"
  );
  return /* @__PURE__ */ f(Wc, { config: r, ref: g, aspect: o, children: /* @__PURE__ */ j(
    wh,
    {
      accessibilityLayer: !0,
      data: y,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: c ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (_) => {
        if (!m || !_.activeLabel || !_.activePayload)
          return;
        const O = {
          label: _.activeLabel,
          values: {}
        };
        for (const V of _.activePayload)
          O.values[V.name] = V.value;
        m(O);
      },
      children: [
        !s && /* @__PURE__ */ f(
          Gc,
          {
            ...Uc(),
            content: /* @__PURE__ */ f(Zc, { yAxisFormatter: n.tickFormatter })
          }
        ),
        !a && /* @__PURE__ */ f(qc, { ...Kc() }),
        v.length > 0 && /* @__PURE__ */ f(
          oi,
          {
            ...ls(n),
            tick: !0,
            width: n.width ?? A + 20 + (C.length > 0 && v[0]?.axisLabel ? 20 : 0),
            hide: n.hide || v.some((_) => _?.hideAxis),
            label: v[0]?.axisLabel ? {
              value: v[0].axisLabel,
              angle: -90,
              position: "insideLeft"
            } : void 0
          }
        ),
        C.length > 0 && /* @__PURE__ */ f(
          oi,
          {
            ...ls(n),
            yAxisId: "right",
            orientation: "right",
            tick: !0,
            width: n.width ?? A + 20 + (v.length > 0 && C[0]?.axisLabel ? 20 : 0),
            hide: n.hide || C.some((_) => _?.hideAxis),
            label: C[0]?.axisLabel ? {
              value: C[0].axisLabel,
              angle: 90,
              position: "insideRight"
            } : void 0
          }
        ),
        /* @__PURE__ */ f(
          Na,
          {
            ...Xc(t),
            hide: t?.hide,
            tick: c ? (_) => {
              const { x: O, y: V, payload: I } = _, T = e.find((H) => H.label === I.value)?.values || "", S = Object.keys(T).length === 1 ? Object.values(T)?.[0] : void 0, M = S !== void 0 && n.tickFormatter ? n.tickFormatter(`${S}`) : S.toLocaleString();
              return /* @__PURE__ */ j("g", { transform: `translate(${O},${V})`, children: [
                /* @__PURE__ */ f(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: I.value
                  }
                ),
                !!S && /* @__PURE__ */ f(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: M
                  }
                )
              ] });
            } : void 0
          }
        ),
        k.map((_, O) => /* @__PURE__ */ f(
          Da,
          {
            isAnimationActive: !1,
            dataKey: String(_),
            fill: r[_].color ? Er(r[_].color) : qn(O),
            radius: 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ f(
              ka,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${String(_)}`
            )
          },
          `bar-${String(_)}`
        )),
        R.map((_, O) => /* @__PURE__ */ f(
          Sa,
          {
            type: u?.lineType ?? "natural",
            dataKey: String(_),
            stroke: r[_].color ? Er(r[_].color) : qn(k.length + O),
            strokeWidth: 2,
            dot: u?.dot ?? !1,
            isAnimationActive: !1,
            yAxisId: u?.axisPosition === "right" ? "right" : void 0
          },
          `line-${String(_)}`
        )),
        D.map((_, O) => /* @__PURE__ */ f(
          Ur,
          {
            dataKey: String(_),
            fill: r[_].color ? Er(r[_].color) : qn(
              k.length + R.length + O
            ),
            r: 4,
            isAnimationActive: !1,
            yAxisId: h?.axisPosition === "right" ? "right" : void 0,
            shape: _h(String(_))
          },
          `scatter-${String(_)}`
        )),
        l && /* @__PURE__ */ f(
          Yc,
          {
            content: /* @__PURE__ */ f(Jc, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, Eh = Ra(Ch), kh = ({ value: r, max: e = 100, label: t, color: n }, i) => {
  const s = n ? Er(n) : Er("categorical-1"), a = r / e * 100;
  return /* @__PURE__ */ j("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ f("div", { className: "flex-grow", children: /* @__PURE__ */ f(
      Qc,
      {
        color: s,
        value: a,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": r,
        "aria-label": `${a.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ f("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, Sh = Ra(kh), wg = me(
  lt({ name: "AreaChart", type: "info" }, ed)
), _g = me(
  lt({ name: "BarChart", type: "info" }, td)
), Cg = me(
  lt(
    { name: "CategoryBarChart", type: "info" },
    rd
  )
), Eg = me(
  lt({ name: "LineChart", type: "info" }, nd)
), kg = me(
  lt({ name: "PieChart", type: "info" }, id)
), Sg = me(
  lt(
    { name: "VerticalBarChart", type: "info" },
    sd
  )
), Dg = me(
  lt({ name: "ProgressBarChart", type: "info" }, Sh)
), Ng = me(
  lt({ name: "ComboChart", type: "info" }, Eh)
), Dh = (r) => typeof r == "boolean" || !r ? {
  show: !!r,
  invertStatus: !1
} : {
  show: r.show ?? !0,
  invertStatus: r.invertStatus ?? !1
}, _o = ({ label: r, ...e }) => {
  const t = ad(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = Dh(e.trend), s = t(e.comparison), a = od(
    n.numericValue,
    n.formatterOptions
  ), o = cs(s.numericValue), l = cs(n.numericValue), c = Z(() => {
    if (!(!o || !i.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, i.show]);
  return /* @__PURE__ */ j("div", { className: "flex flex-col gap-2", children: [
    r && /* @__PURE__ */ f("div", { children: r }),
    /* @__PURE__ */ j("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f("span", { className: "font-bold text-2xl", children: a }),
      o !== void 0 && /* @__PURE__ */ f(
        ld,
        {
          percentage: c,
          amount: s,
          invertStatus: i.invertStatus,
          hint: e.comparisonHint
        }
      )
    ] })
  ] });
}, Nh = () => /* @__PURE__ */ j("div", { className: "relative flex h-full w-full cursor-progress flex-col gap-2", children: [
  /* @__PURE__ */ f(bt, { className: "h-3 w-full max-w-16 rounded-md" }),
  /* @__PURE__ */ j("div", { className: "flex flex-row flex-wrap items-end gap-2", children: [
    /* @__PURE__ */ f(bt, { className: "h-8 w-full max-w-36 rounded-sm" }),
    /* @__PURE__ */ f(bt, { className: "h-6 w-full max-w-18 rounded-sm" })
  ] })
] });
_o.displayName = "F0BigNumber";
const Rh = ca(_o, Nh), Rg = me(
  at("F0BigNumber", Rh)
), Co = {
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
}, Eo = {
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
}, Ah = {}, Th = {
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
}, Oh = {
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
}, Mh = {
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
}, Lh = {
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
}, Ih = {
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
}, Ph = {
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
}, ko = {
  width: Th,
  height: Oh,
  minWidth: Mh,
  minHeight: Lh,
  maxWidth: Ih,
  maxHeight: Ph
}, So = {
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
}, Do = {
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
}, No = {
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
}, zh = {}, Ro = {
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
}, Ao = {
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
}, Fh = {}, Bh = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, To = {
  overflow: Bh,
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
}, Hh = {}, Oo = {
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
}, Vh = {}, jh = {
  ...So,
  ...Oo,
  ...Ao,
  ...No,
  ...Ro,
  ...ko,
  ...Co,
  ...Eo,
  ...To,
  ...Do
};
function $h(r, e) {
  return e.split(" ").map((t) => `${r}:${t}`).join(" ");
}
function Wh(r, e) {
  const t = [];
  for (const [n, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = jh[n];
    if (!s) continue;
    const a = s[String(i)];
    a && t.push($h(r, a));
  }
  return t.join(" ");
}
const Gh = jt({
  base: "",
  variants: {
    ...So,
    ...Oo,
    ...Ao,
    ...No,
    ...Ro,
    ...ko,
    ...Co,
    ...Eo,
    ...To,
    ...Do
  },
  defaultVariants: {
    ...Vh,
    ...Fh,
    ...zh,
    ...Ah,
    ...Hh
  }
}), Uh = ["sm", "md", "lg", "xl"], Mo = Ue(
  ({
    // Display & Position
    display: r,
    position: e,
    // Padding
    padding: t,
    paddingX: n,
    paddingY: i,
    paddingTop: s,
    paddingBottom: a,
    paddingLeft: o,
    paddingRight: l,
    // Margin
    margin: c,
    marginX: d,
    marginY: u,
    marginTop: h,
    marginBottom: m,
    marginLeft: g,
    marginRight: y,
    // Gap
    gap: k,
    // Grid
    columns: R,
    rows: D,
    colSpan: x,
    colStart: A,
    rowSpan: v,
    // Dimensions
    width: C,
    height: _,
    minWidth: O,
    minHeight: V,
    maxWidth: I,
    maxHeight: T,
    // Background
    background: S,
    // Border
    borderColor: M,
    border: H,
    borderTop: z,
    borderBottom: q,
    borderLeft: U,
    borderRight: le,
    borderRadius: ce,
    borderRadiusTopLeft: ue,
    borderRadiusTopRight: Qe,
    borderRadiusBottomLeft: we,
    borderRadiusBottomRight: Re,
    borderStyle: Ve,
    // Overflow
    overflow: et,
    overflowX: xe,
    overflowY: Oe,
    // Divider
    divider: Ae,
    dividerColor: Ee,
    // Flex
    alignItems: ie,
    justifyContent: Me,
    flexDirection: Le,
    flexWrap: Ze,
    grow: Ie,
    shrink: je,
    // Responsive breakpoint overrides
    sm: dt,
    md: kt,
    lg: p,
    xl: b,
    ...E
  }, F) => {
    const P = z && z !== "none" || q && q !== "none" || U && U !== "none" || le && le !== "none", N = H && H !== "none" || P, $ = { sm: dt, md: kt, lg: p, xl: b }, Y = Uh.map((ge) => {
      const ve = $[ge];
      return ve ? Wh(ge, ve) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ f(
      "div",
      {
        ref: F,
        className: se(
          P && "border-0",
          Gh({
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
            gap: k,
            columns: R,
            rows: D,
            colSpan: x,
            colStart: A,
            rowSpan: v,
            width: C,
            height: _,
            minWidth: O,
            minHeight: V,
            maxWidth: I,
            maxHeight: T,
            background: S,
            borderColor: M,
            border: H,
            borderTop: z,
            borderBottom: q,
            borderLeft: U,
            borderRight: le,
            borderRadius: ce,
            borderRadiusTopLeft: ue,
            borderRadiusTopRight: Qe,
            borderRadiusBottomLeft: we,
            borderRadiusBottomRight: Re,
            borderStyle: Ve,
            overflow: et,
            overflowX: xe,
            overflowY: Oe,
            divider: Ae,
            dividerColor: Ee,
            alignItems: ie,
            justifyContent: Me,
            flexDirection: Le,
            flexWrap: Ze,
            grow: Ie,
            shrink: je
          }),
          Y,
          N && !M && "border-f1-border",
          Ae && !Ee && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...E
      }
    );
  }
);
Mo.displayName = "F0Box";
const Ag = lt(
  {
    name: "F0Box",
    type: "layout"
  },
  Mo
), Tg = zl.filter(
  (r) => r !== "ai"
), Og = da, Mg = ["default", "outline", "neutral"], Lg = da, Ig = ["sm", "md", "lg"], Pg = ["compact", "expanded"], zg = Fl, Fg = [
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
  const [t, n] = re(!1), i = /* @__PURE__ */ f(sn, { label: `+${r}` });
  return e?.length ? /* @__PURE__ */ j(ua, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ f(fa, { asChild: !0, children: /* @__PURE__ */ f("button", { className: ki("inline-flex flex-shrink-0 items-center"), children: i }) }),
    /* @__PURE__ */ f(
      ha,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ j(ma, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          e.map((s, a) => /* @__PURE__ */ f(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ f(sn, { ...s })
            },
            a
          )),
          /* @__PURE__ */ f(
            pa,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      }
    )
  ] }) : i;
};
hi.displayName = "ChipCounter";
const Lo = ({
  chips: r,
  max: e = 4,
  remainingCount: t,
  layout: n = "compact"
}) => {
  if (n === "fill")
    return /* @__PURE__ */ f(
      Bl,
      {
        items: r,
        renderListItem: (l) => /* @__PURE__ */ f(sn, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: t !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ f(
          hi,
          {
            count: (t ?? 0) + l,
            list: t ? void 0 : r.slice(r.length - l)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const i = r.slice(0, e), s = r.slice(e), a = t ?? r.length - e, o = a > 0;
  return /* @__PURE__ */ j("div", { className: "flex items-center gap-2", children: [
    i.map((l, c) => /* @__PURE__ */ f(sn, { ...l }, c)),
    o && /* @__PURE__ */ f(
      hi,
      {
        count: a,
        list: t ? void 0 : s
      }
    )
  ] });
};
Lo.displayName = "F0ChipList";
const Bg = me(
  at("F0ChipList", Lo)
), Hg = Hl, Zh = jt({
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
}), qh = jt({
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
}), Kh = ({
  title: r,
  description: e,
  action: t,
  link: n,
  icon: i,
  variant: s = "neutral"
}) => {
  const a = Q(null);
  return /* @__PURE__ */ f("div", { ref: a, className: "@container", children: /* @__PURE__ */ f("div", { className: Zh({ variant: s }), children: /* @__PURE__ */ j(
    "div",
    {
      className: se(
        "flex flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between"
      ),
      children: [
        /* @__PURE__ */ j("div", { className: "flex flex-row gap-2", children: [
          /* @__PURE__ */ f("div", { className: "h-6 w-6 flex-shrink-0", children: s === "neutral" ? /* @__PURE__ */ f(Vl, { icon: i || jl, size: "sm" }) : /* @__PURE__ */ f(cd, { type: s, size: "sm" }) }),
          /* @__PURE__ */ j("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ f("p", { className: qh({ variant: s }), children: r }),
            /* @__PURE__ */ f("p", { className: "text-base text-f1-foreground-secondary", children: e })
          ] })
        ] }),
        (t || n) && /* @__PURE__ */ j(
          "div",
          {
            className: se(
              "flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0"
            ),
            children: [
              n && /* @__PURE__ */ f(
                $l,
                {
                  href: n.href,
                  target: "_blank",
                  variant: "link",
                  size: "sm",
                  children: n.label
                }
              ),
              t && /* @__PURE__ */ f(
                Ge,
                {
                  label: t.label,
                  variant: "outline",
                  onClick: t.onClick,
                  size: "sm",
                  disabled: t.disabled
                }
              )
            ]
          }
        )
      ]
    }
  ) }) });
}, Vg = me(Kh), Xh = 388;
function Io({
  filters: r,
  value: e,
  onChange: t,
  height: n,
  width: i = 600,
  className: s,
  showApplyButton: a = !0,
  applyButtonLabel: o
}) {
  const l = Xt(), c = Object.keys(r)[0] ?? null, [d, u] = re(c), [h, m] = re(e);
  ee(() => {
    m(e);
  }, [e]), ee(() => {
    if (!d && r) {
      const R = Object.keys(r);
      if (R.length > 0) {
        const D = R.find((x) => {
          const A = h[x], v = ss(r[x].type);
          return A !== void 0 && !v.isEmpty(A, {
            schema: r[x],
            i18n: l
          });
        });
        u(D ?? R[0]);
      }
    }
  }, [r, d, h, l]);
  const g = (R, D) => {
    const x = {
      ...h,
      [R]: D
    };
    m(x), a || t(x);
  }, y = () => {
    t(h);
  }, k = Z(() => n || Object.entries(r).reduce((D, [x, A]) => {
    const v = ss(A.type);
    return Math.max(D, v?.formHeight || Xh);
  }, 0), [r, n]);
  return !r || Object.keys(r).length === 0 ? null : /* @__PURE__ */ f(
    "div",
    {
      className: se(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        s
      ),
      style: { maxWidth: i },
      children: /* @__PURE__ */ f(
        Wl,
        {
          filters: r,
          tempFilters: h,
          selectedFilterKey: d,
          onFilterSelect: u,
          onFilterChange: g,
          onApply: y,
          height: k,
          showApplyButton: a,
          applyButtonLabel: o
        }
      )
    }
  );
}
Io.displayName = "F0FilterPickerContent";
const jg = me(
  Io
);
var Zr = (r) => r.type === "checkbox", Ut = (r) => r instanceof Date, Be = (r) => r == null;
const Po = (r) => typeof r == "object";
var Ce = (r) => !Be(r) && !Array.isArray(r) && Po(r) && !Ut(r), zo = (r) => Ce(r) && r.target ? Zr(r.target) ? r.target.checked : r.target.value : r, Yh = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r, Fo = (r, e) => r.has(Yh(e)), Jh = (r) => {
  const e = r.constructor && r.constructor.prototype;
  return Ce(e) && e.hasOwnProperty("isPrototypeOf");
}, ji = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function $e(r) {
  let e;
  const t = Array.isArray(r), n = typeof FileList < "u" ? r instanceof FileList : !1;
  if (r instanceof Date)
    e = new Date(r);
  else if (r instanceof Set)
    e = new Set(r);
  else if (!(ji && (r instanceof Blob || n)) && (t || Ce(r)))
    if (e = t ? [] : {}, !t && !Jh(r))
      e = r;
    else
      for (const i in r)
        r.hasOwnProperty(i) && (e[i] = $e(r[i]));
  else
    return r;
  return e;
}
var Vn = (r) => Array.isArray(r) ? r.filter(Boolean) : [], _e = (r) => r === void 0, B = (r, e, t) => {
  if (!e || !Ce(r))
    return t;
  const n = Vn(e.split(/[,[\].]+?/)).reduce((i, s) => Be(i) ? i : i[s], r);
  return _e(n) || n === r ? _e(r[e]) ? t : r[e] : n;
}, st = (r) => typeof r == "boolean", $i = (r) => /^\w*$/.test(r), Bo = (r) => Vn(r.replace(/["|']|\]/g, "").split(/\.|\[/)), ye = (r, e, t) => {
  let n = -1;
  const i = $i(e) ? [e] : Bo(e), s = i.length, a = s - 1;
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
const xn = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ut = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Dt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ho = W.createContext(null), $t = () => W.useContext(Ho), Qh = (r) => {
  const { children: e, ...t } = r;
  return W.createElement(Ho.Provider, { value: t }, e);
};
var Vo = (r, e, t, n = !0) => {
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
}, We = (r) => Ce(r) && !Object.keys(r).length, jo = (r, e, t, n) => {
  t(r);
  const { name: i, ...s } = r;
  return We(s) || Object.keys(s).length >= Object.keys(e).length || Object.keys(s).find((a) => e[a] === (!n || ut.all));
}, Ar = (r) => Array.isArray(r) ? r : [r], $o = (r, e, t) => !r || !e || r === e || Ar(r).some((n) => n && (t ? n === e : n.startsWith(e) || e.startsWith(n)));
function Wi(r) {
  const e = W.useRef(r);
  e.current = r, W.useEffect(() => {
    const t = !r.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [r.disabled]);
}
function em(r) {
  const e = $t(), { control: t = e.control, disabled: n, name: i, exact: s } = r || {}, [a, o] = W.useState(t._formState), l = W.useRef(!0), c = W.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = W.useRef(i);
  return d.current = i, Wi({
    disabled: n,
    next: (u) => l.current && $o(d.current, u.name, s) && jo(u, c.current, t._updateFormState) && o({
      ...t._formState,
      ...u
    }),
    subject: t._subjects.state
  }), W.useEffect(() => (l.current = !0, c.current.isValid && t._updateValid(!0), () => {
    l.current = !1;
  }), [t]), W.useMemo(() => Vo(a, t, c.current, !1), [a, t]);
}
var _t = (r) => typeof r == "string", Wo = (r, e, t, n, i) => _t(r) ? (n && e.watch.add(r), B(t, r, i)) : Array.isArray(r) ? r.map((s) => (n && e.watch.add(s), B(t, s))) : (n && (e.watchAll = !0), t);
function tm(r) {
  const e = $t(), { control: t = e.control, name: n, defaultValue: i, disabled: s, exact: a } = r || {}, o = W.useRef(n);
  o.current = n, Wi({
    disabled: s,
    subject: t._subjects.values,
    next: (d) => {
      $o(o.current, d.name, a) && c($e(Wo(o.current, t._names, d.values || t._formValues, !1, i)));
    }
  });
  const [l, c] = W.useState(t._getWatch(n, i));
  return W.useEffect(() => t._removeUnmounted()), l;
}
function rm(r) {
  const e = $t(), { name: t, disabled: n, control: i = e.control, shouldUnregister: s } = r, a = Fo(i._names.array, t), o = tm({
    control: i,
    name: t,
    defaultValue: B(i._formValues, t, B(i._defaultValues, t, r.defaultValue)),
    exact: !0
  }), l = em({
    control: i,
    name: t,
    exact: !0
  }), c = W.useRef(i.register(t, {
    ...r.rules,
    value: o,
    ...st(r.disabled) ? { disabled: r.disabled } : {}
  })), d = W.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!B(l.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!B(l.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!B(l.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!B(l.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => B(l.errors, t)
    }
  }), [l, t]), u = W.useMemo(() => ({
    name: t,
    value: o,
    ...st(n) || l.disabled ? { disabled: l.disabled || n } : {},
    onChange: (h) => c.current.onChange({
      target: {
        value: zo(h),
        name: t
      },
      type: xn.CHANGE
    }),
    onBlur: () => c.current.onBlur({
      target: {
        value: B(i._formValues, t),
        name: t
      },
      type: xn.BLUR
    }),
    ref: (h) => {
      const m = B(i._fields, t);
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
  return W.useEffect(() => {
    const h = i._options.shouldUnregister || s, m = (g, y) => {
      const k = B(i._fields, g);
      k && k._f && (k._f.mount = y);
    };
    if (m(t, !0), h) {
      const g = $e(B(i._options.defaultValues, t));
      ye(i._defaultValues, t, g), _e(B(i._formValues, t)) && ye(i._formValues, t, g);
    }
    return !a && i.register(t), () => {
      (a ? h && !i._state.action : h) ? i.unregister(t) : m(t, !1);
    };
  }, [t, i, a, s]), W.useEffect(() => {
    i._updateDisabledField({
      disabled: n,
      fields: i._fields,
      name: t
    });
  }, [n, t, i]), W.useMemo(() => ({
    field: u,
    formState: l,
    fieldState: d
  }), [u, l, d]);
}
const nm = (r) => r.render(rm(r));
var Go = (r, e, t, n, i) => e ? {
  ...t[r],
  types: {
    ...t[r] && t[r].types ? t[r].types : {},
    [n]: i || !0
  }
} : {}, As = (r) => ({
  isOnSubmit: !r || r === ut.onSubmit,
  isOnBlur: r === ut.onBlur,
  isOnChange: r === ut.onChange,
  isOnAll: r === ut.all,
  isOnTouch: r === ut.onTouched
}), Ts = (r, e, t) => !t && (e.watchAll || e.watch.has(r) || [...e.watch].some((n) => r.startsWith(n) && /^\.\w+/.test(r.slice(n.length))));
const Tr = (r, e, t, n) => {
  for (const i of t || Object.keys(r)) {
    const s = B(r, i);
    if (s) {
      const { _f: a, ...o } = s;
      if (a) {
        if (a.refs && a.refs[0] && e(a.refs[0], i) && !n)
          return !0;
        if (a.ref && e(a.ref, a.name) && !n)
          return !0;
        if (Tr(o, e))
          break;
      } else if (Ce(o) && Tr(o, e))
        break;
    }
  }
};
var im = (r, e, t) => {
  const n = Ar(B(r, t));
  return ye(n, "root", e[t]), ye(r, t, n), r;
}, Gi = (r) => r.type === "file", wt = (r) => typeof r == "function", wn = (r) => {
  if (!ji)
    return !1;
  const e = r ? r.ownerDocument : 0;
  return r instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, nn = (r) => _t(r), Ui = (r) => r.type === "radio", _n = (r) => r instanceof RegExp;
const Os = {
  value: !1,
  isValid: !1
}, Ms = { value: !0, isValid: !0 };
var Uo = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const e = r.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: e, isValid: !!e.length };
    }
    return r[0].checked && !r[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      r[0].attributes && !_e(r[0].attributes.value) ? _e(r[0].value) || r[0].value === "" ? Ms : { value: r[0].value, isValid: !0 } : Ms
    ) : Os;
  }
  return Os;
};
const Ls = {
  isValid: !1,
  value: null
};
var Zo = (r) => Array.isArray(r) ? r.reduce((e, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : e, Ls) : Ls;
function Is(r, e, t = "validate") {
  if (nn(r) || Array.isArray(r) && r.every(nn) || st(r) && !r)
    return {
      type: t,
      message: nn(r) ? r : "",
      ref: e
    };
}
var er = (r) => Ce(r) && !_n(r) ? r : {
  value: r,
  message: ""
}, Ps = async (r, e, t, n, i, s) => {
  const { ref: a, refs: o, required: l, maxLength: c, minLength: d, min: u, max: h, pattern: m, validate: g, name: y, valueAsNumber: k, mount: R } = r._f, D = B(t, y);
  if (!R || e.has(y))
    return {};
  const x = o ? o[0] : a, A = (S) => {
    i && x.reportValidity && (x.setCustomValidity(st(S) ? "" : S || ""), x.reportValidity());
  }, v = {}, C = Ui(a), _ = Zr(a), O = C || _, V = (k || Gi(a)) && _e(a.value) && _e(D) || wn(a) && a.value === "" || D === "" || Array.isArray(D) && !D.length, I = Go.bind(null, y, n, v), T = (S, M, H, z = Dt.maxLength, q = Dt.minLength) => {
    const U = S ? M : H;
    v[y] = {
      type: S ? z : q,
      message: U,
      ref: a,
      ...I(S ? z : q, U)
    };
  };
  if (s ? !Array.isArray(D) || !D.length : l && (!O && (V || Be(D)) || st(D) && !D || _ && !Uo(o).isValid || C && !Zo(o).isValid)) {
    const { value: S, message: M } = nn(l) ? { value: !!l, message: l } : er(l);
    if (S && (v[y] = {
      type: Dt.required,
      message: M,
      ref: x,
      ...I(Dt.required, M)
    }, !n))
      return A(M), v;
  }
  if (!V && (!Be(u) || !Be(h))) {
    let S, M;
    const H = er(h), z = er(u);
    if (!Be(D) && !isNaN(D)) {
      const q = a.valueAsNumber || D && +D;
      Be(H.value) || (S = q > H.value), Be(z.value) || (M = q < z.value);
    } else {
      const q = a.valueAsDate || new Date(D), U = (ue) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ue), le = a.type == "time", ce = a.type == "week";
      _t(H.value) && D && (S = le ? U(D) > U(H.value) : ce ? D > H.value : q > new Date(H.value)), _t(z.value) && D && (M = le ? U(D) < U(z.value) : ce ? D < z.value : q < new Date(z.value));
    }
    if ((S || M) && (T(!!S, H.message, z.message, Dt.max, Dt.min), !n))
      return A(v[y].message), v;
  }
  if ((c || d) && !V && (_t(D) || s && Array.isArray(D))) {
    const S = er(c), M = er(d), H = !Be(S.value) && D.length > +S.value, z = !Be(M.value) && D.length < +M.value;
    if ((H || z) && (T(H, S.message, M.message), !n))
      return A(v[y].message), v;
  }
  if (m && !V && _t(D)) {
    const { value: S, message: M } = er(m);
    if (_n(S) && !D.match(S) && (v[y] = {
      type: Dt.pattern,
      message: M,
      ref: a,
      ...I(Dt.pattern, M)
    }, !n))
      return A(M), v;
  }
  if (g) {
    if (wt(g)) {
      const S = await g(D, t), M = Is(S, x);
      if (M && (v[y] = {
        ...M,
        ...I(Dt.validate, M.message)
      }, !n))
        return A(M.message), v;
    } else if (Ce(g)) {
      let S = {};
      for (const M in g) {
        if (!We(S) && !n)
          break;
        const H = Is(await g[M](D, t), x, M);
        H && (S = {
          ...H,
          ...I(M, H.message)
        }, A(H.message), n && (v[y] = S));
      }
      if (!We(S) && (v[y] = {
        ref: x,
        ...S
      }, !n))
        return v;
    }
  }
  return A(!0), v;
};
function sm(r, e) {
  const t = e.slice(0, -1).length;
  let n = 0;
  for (; n < t; )
    r = _e(r) ? n++ : r[e[n++]];
  return r;
}
function am(r) {
  for (const e in r)
    if (r.hasOwnProperty(e) && !_e(r[e]))
      return !1;
  return !0;
}
function Se(r, e) {
  const t = Array.isArray(e) ? e : $i(e) ? [e] : Bo(e), n = t.length === 1 ? r : sm(r, t), i = t.length - 1, s = t[i];
  return n && delete n[s], i !== 0 && (Ce(n) && We(n) || Array.isArray(n) && am(n)) && Se(r, t.slice(0, -1)), r;
}
var Qn = () => {
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
}, mi = (r) => Be(r) || !Po(r);
function Pt(r, e) {
  if (mi(r) || mi(e))
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
      if (Ut(s) && Ut(a) || Ce(s) && Ce(a) || Array.isArray(s) && Array.isArray(a) ? !Pt(s, a) : s !== a)
        return !1;
    }
  }
  return !0;
}
var qo = (r) => r.type === "select-multiple", om = (r) => Ui(r) || Zr(r), ei = (r) => wn(r) && r.isConnected, Ko = (r) => {
  for (const e in r)
    if (wt(r[e]))
      return !0;
  return !1;
};
function Cn(r, e = {}) {
  const t = Array.isArray(r);
  if (Ce(r) || t)
    for (const n in r)
      Array.isArray(r[n]) || Ce(r[n]) && !Ko(r[n]) ? (e[n] = Array.isArray(r[n]) ? [] : {}, Cn(r[n], e[n])) : Be(r[n]) || (e[n] = !0);
  return e;
}
function Xo(r, e, t) {
  const n = Array.isArray(r);
  if (Ce(r) || n)
    for (const i in r)
      Array.isArray(r[i]) || Ce(r[i]) && !Ko(r[i]) ? _e(e) || mi(t[i]) ? t[i] = Array.isArray(r[i]) ? Cn(r[i], []) : { ...Cn(r[i]) } : Xo(r[i], Be(e) ? {} : e[i], t[i]) : t[i] = !Pt(r[i], e[i]);
  return t;
}
var wr = (r, e) => Xo(r, e, Cn(e)), Yo = (r, { valueAsNumber: e, valueAsDate: t, setValueAs: n }) => _e(r) ? r : e ? r === "" ? NaN : r && +r : t && _t(r) ? new Date(r) : n ? n(r) : r;
function ti(r) {
  const e = r.ref;
  return Gi(e) ? e.files : Ui(e) ? Zo(r.refs).value : qo(e) ? [...e.selectedOptions].map(({ value: t }) => t) : Zr(e) ? Uo(r.refs).value : Yo(_e(e.value) ? r.ref.value : e.value, r);
}
var lm = (r, e, t, n) => {
  const i = {};
  for (const s of r) {
    const a = B(e, s);
    a && ye(i, s, a._f);
  }
  return {
    criteriaMode: t,
    names: [...r],
    fields: i,
    shouldUseNativeValidation: n
  };
}, _r = (r) => _e(r) ? r : _n(r) ? r.source : Ce(r) ? _n(r.value) ? r.value.source : r.value : r;
const zs = "AsyncFunction";
var cm = (r) => !!r && !!r.validate && !!(wt(r.validate) && r.validate.constructor.name === zs || Ce(r.validate) && Object.values(r.validate).find((e) => e.constructor.name === zs)), dm = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function Fs(r, e, t) {
  const n = B(r, t);
  if (n || $i(t))
    return {
      error: n,
      name: t
    };
  const i = t.split(".");
  for (; i.length; ) {
    const s = i.join("."), a = B(e, s), o = B(r, s);
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
var um = (r, e, t, n, i) => i.isOnAll ? !1 : !t && i.isOnTouch ? !(e || r) : (t ? n.isOnBlur : i.isOnBlur) ? !r : (t ? n.isOnChange : i.isOnChange) ? r : !0, fm = (r, e) => !Vn(B(r, e)).length && Se(r, e);
const hm = {
  mode: ut.onSubmit,
  reValidateMode: ut.onChange,
  shouldFocusError: !0
};
function mm(r = {}) {
  let e = {
    ...hm,
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
  }, n = {}, i = Ce(e.defaultValues) || Ce(e.values) ? $e(e.defaultValues || e.values) || {} : {}, s = e.shouldUnregister ? {} : $e(i), a = {
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
    values: Qn(),
    array: Qn(),
    state: Qn()
  }, h = As(e.mode), m = As(e.reValidateMode), g = e.criteriaMode === ut.all, y = (p) => (b) => {
    clearTimeout(c), c = setTimeout(p, b);
  }, k = async (p) => {
    if (!e.disabled && (d.isValid || p)) {
      const b = e.resolver ? We((await O()).errors) : await I(n, !0);
      b !== t.isValid && u.state.next({
        isValid: b
      });
    }
  }, R = (p, b) => {
    !e.disabled && (d.isValidating || d.validatingFields) && ((p || Array.from(o.mount)).forEach((E) => {
      E && (b ? ye(t.validatingFields, E, b) : Se(t.validatingFields, E));
    }), u.state.next({
      validatingFields: t.validatingFields,
      isValidating: !We(t.validatingFields)
    }));
  }, D = (p, b = [], E, F, P = !0, N = !0) => {
    if (F && E && !e.disabled) {
      if (a.action = !0, N && Array.isArray(B(n, p))) {
        const $ = E(B(n, p), F.argA, F.argB);
        P && ye(n, p, $);
      }
      if (N && Array.isArray(B(t.errors, p))) {
        const $ = E(B(t.errors, p), F.argA, F.argB);
        P && ye(t.errors, p, $), fm(t.errors, p);
      }
      if (d.touchedFields && N && Array.isArray(B(t.touchedFields, p))) {
        const $ = E(B(t.touchedFields, p), F.argA, F.argB);
        P && ye(t.touchedFields, p, $);
      }
      d.dirtyFields && (t.dirtyFields = wr(i, s)), u.state.next({
        name: p,
        isDirty: S(p, b),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      ye(s, p, b);
  }, x = (p, b) => {
    ye(t.errors, p, b), u.state.next({
      errors: t.errors
    });
  }, A = (p) => {
    t.errors = p, u.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, v = (p, b, E, F) => {
    const P = B(n, p);
    if (P) {
      const N = B(s, p, _e(E) ? B(i, p) : E);
      _e(N) || F && F.defaultChecked || b ? ye(s, p, b ? N : ti(P._f)) : z(p, N), a.mount && k();
    }
  }, C = (p, b, E, F, P) => {
    let N = !1, $ = !1;
    const Y = {
      name: p
    };
    if (!e.disabled) {
      const ge = !!(B(n, p) && B(n, p)._f && B(n, p)._f.disabled);
      if (!E || F) {
        d.isDirty && ($ = t.isDirty, t.isDirty = Y.isDirty = S(), N = $ !== Y.isDirty);
        const ve = ge || Pt(B(i, p), b);
        $ = !!(!ge && B(t.dirtyFields, p)), ve || ge ? Se(t.dirtyFields, p) : ye(t.dirtyFields, p, !0), Y.dirtyFields = t.dirtyFields, N = N || d.dirtyFields && $ !== !ve;
      }
      if (E) {
        const ve = B(t.touchedFields, p);
        ve || (ye(t.touchedFields, p, E), Y.touchedFields = t.touchedFields, N = N || d.touchedFields && ve !== E);
      }
      N && P && u.state.next(Y);
    }
    return N ? Y : {};
  }, _ = (p, b, E, F) => {
    const P = B(t.errors, p), N = d.isValid && st(b) && t.isValid !== b;
    if (e.delayError && E ? (l = y(() => x(p, E)), l(e.delayError)) : (clearTimeout(c), l = null, E ? ye(t.errors, p, E) : Se(t.errors, p)), (E ? !Pt(P, E) : P) || !We(F) || N) {
      const $ = {
        ...F,
        ...N && st(b) ? { isValid: b } : {},
        errors: t.errors,
        name: p
      };
      t = {
        ...t,
        ...$
      }, u.state.next($);
    }
  }, O = async (p) => {
    R(p, !0);
    const b = await e.resolver(s, e.context, lm(p || o.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return R(p), b;
  }, V = async (p) => {
    const { errors: b } = await O(p);
    if (p)
      for (const E of p) {
        const F = B(b, E);
        F ? ye(t.errors, E, F) : Se(t.errors, E);
      }
    else
      t.errors = b;
    return b;
  }, I = async (p, b, E = {
    valid: !0
  }) => {
    for (const F in p) {
      const P = p[F];
      if (P) {
        const { _f: N, ...$ } = P;
        if (N) {
          const Y = o.array.has(N.name), ge = P._f && cm(P._f);
          ge && d.validatingFields && R([F], !0);
          const ve = await Ps(P, o.disabled, s, g, e.shouldUseNativeValidation && !b, Y);
          if (ge && d.validatingFields && R([F]), ve[N.name] && (E.valid = !1, b))
            break;
          !b && (B(ve, N.name) ? Y ? im(t.errors, ve, N.name) : ye(t.errors, N.name, ve[N.name]) : Se(t.errors, N.name));
        }
        !We($) && await I($, b, E);
      }
    }
    return E.valid;
  }, T = () => {
    for (const p of o.unMount) {
      const b = B(n, p);
      b && (b._f.refs ? b._f.refs.every((E) => !ei(E)) : !ei(b._f.ref)) && xe(p);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, S = (p, b) => !e.disabled && (p && b && ye(s, p, b), !Pt(Qe(), i)), M = (p, b, E) => Wo(p, o, {
    ...a.mount ? s : _e(b) ? i : _t(p) ? { [p]: b } : b
  }, E, b), H = (p) => Vn(B(a.mount ? s : i, p, e.shouldUnregister ? B(i, p, []) : [])), z = (p, b, E = {}) => {
    const F = B(n, p);
    let P = b;
    if (F) {
      const N = F._f;
      N && (!N.disabled && ye(s, p, Yo(b, N)), P = wn(N.ref) && Be(b) ? "" : b, qo(N.ref) ? [...N.ref.options].forEach(($) => $.selected = P.includes($.value)) : N.refs ? Zr(N.ref) ? N.refs.length > 1 ? N.refs.forEach(($) => (!$.defaultChecked || !$.disabled) && ($.checked = Array.isArray(P) ? !!P.find((Y) => Y === $.value) : P === $.value)) : N.refs[0] && (N.refs[0].checked = !!P) : N.refs.forEach(($) => $.checked = $.value === P) : Gi(N.ref) ? N.ref.value = "" : (N.ref.value = P, N.ref.type || u.values.next({
        name: p,
        values: { ...s }
      })));
    }
    (E.shouldDirty || E.shouldTouch) && C(p, P, E.shouldTouch, E.shouldDirty, !0), E.shouldValidate && ue(p);
  }, q = (p, b, E) => {
    for (const F in b) {
      const P = b[F], N = `${p}.${F}`, $ = B(n, N);
      (o.array.has(p) || Ce(P) || $ && !$._f) && !Ut(P) ? q(N, P, E) : z(N, P, E);
    }
  }, U = (p, b, E = {}) => {
    const F = B(n, p), P = o.array.has(p), N = $e(b);
    ye(s, p, N), P ? (u.array.next({
      name: p,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && E.shouldDirty && u.state.next({
      name: p,
      dirtyFields: wr(i, s),
      isDirty: S(p, N)
    })) : F && !F._f && !Be(N) ? q(p, N, E) : z(p, N, E), Ts(p, o) && u.state.next({ ...t }), u.values.next({
      name: a.mount ? p : void 0,
      values: { ...s }
    });
  }, le = async (p) => {
    a.mount = !0;
    const b = p.target;
    let E = b.name, F = !0;
    const P = B(n, E), N = () => b.type ? ti(P._f) : zo(p), $ = (Y) => {
      F = Number.isNaN(Y) || Ut(Y) && isNaN(Y.getTime()) || Pt(Y, B(s, E, Y));
    };
    if (P) {
      let Y, ge;
      const ve = N(), ze = p.type === xn.BLUR || p.type === xn.FOCUS_OUT, Gt = !dm(P._f) && !e.resolver && !B(t.errors, E) && !P._f.deps || um(ze, B(t.touchedFields, E), t.isSubmitted, m, h), Yt = Ts(E, o, ze);
      ye(s, E, ve), ze ? (P._f.onBlur && P._f.onBlur(p), l && l(0)) : P._f.onChange && P._f.onChange(p);
      const tt = C(E, ve, ze, !1), qr = !We(tt) || Yt;
      if (!ze && u.values.next({
        name: E,
        type: p.type,
        values: { ...s }
      }), Gt)
        return d.isValid && (e.mode === "onBlur" && ze ? k() : ze || k()), qr && u.state.next({ name: E, ...Yt ? {} : tt });
      if (!ze && Yt && u.state.next({ ...t }), e.resolver) {
        const { errors: Kr } = await O([E]);
        if ($(ve), F) {
          const Gn = Fs(t.errors, n, E), Jt = Fs(Kr, n, Gn.name || E);
          Y = Jt.error, E = Jt.name, ge = We(Kr);
        }
      } else
        R([E], !0), Y = (await Ps(P, o.disabled, s, g, e.shouldUseNativeValidation))[E], R([E]), $(ve), F && (Y ? ge = !1 : d.isValid && (ge = await I(n, !0)));
      F && (P._f.deps && ue(P._f.deps), _(E, ge, Y, tt));
    }
  }, ce = (p, b) => {
    if (B(t.errors, b) && p.focus)
      return p.focus(), 1;
  }, ue = async (p, b = {}) => {
    let E, F;
    const P = Ar(p);
    if (e.resolver) {
      const N = await V(_e(p) ? p : P);
      E = We(N), F = p ? !P.some(($) => B(N, $)) : E;
    } else p ? (F = (await Promise.all(P.map(async (N) => {
      const $ = B(n, N);
      return await I($ && $._f ? { [N]: $ } : $);
    }))).every(Boolean), !(!F && !t.isValid) && k()) : F = E = await I(n);
    return u.state.next({
      ...!_t(p) || d.isValid && E !== t.isValid ? {} : { name: p },
      ...e.resolver || !p ? { isValid: E } : {},
      errors: t.errors
    }), b.shouldFocus && !F && Tr(n, ce, p ? P : o.mount), F;
  }, Qe = (p) => {
    const b = {
      ...a.mount ? s : i
    };
    return _e(p) ? b : _t(p) ? B(b, p) : p.map((E) => B(b, E));
  }, we = (p, b) => ({
    invalid: !!B((b || t).errors, p),
    isDirty: !!B((b || t).dirtyFields, p),
    error: B((b || t).errors, p),
    isValidating: !!B(t.validatingFields, p),
    isTouched: !!B((b || t).touchedFields, p)
  }), Re = (p) => {
    p && Ar(p).forEach((b) => Se(t.errors, b)), u.state.next({
      errors: p ? t.errors : {}
    });
  }, Ve = (p, b, E) => {
    const F = (B(n, p, { _f: {} })._f || {}).ref, P = B(t.errors, p) || {}, { ref: N, message: $, type: Y, ...ge } = P;
    ye(t.errors, p, {
      ...ge,
      ...b,
      ref: F
    }), u.state.next({
      name: p,
      errors: t.errors,
      isValid: !1
    }), E && E.shouldFocus && F && F.focus && F.focus();
  }, et = (p, b) => wt(p) ? u.values.subscribe({
    next: (E) => p(M(void 0, b), E)
  }) : M(p, b, !0), xe = (p, b = {}) => {
    for (const E of p ? Ar(p) : o.mount)
      o.mount.delete(E), o.array.delete(E), b.keepValue || (Se(n, E), Se(s, E)), !b.keepError && Se(t.errors, E), !b.keepDirty && Se(t.dirtyFields, E), !b.keepTouched && Se(t.touchedFields, E), !b.keepIsValidating && Se(t.validatingFields, E), !e.shouldUnregister && !b.keepDefaultValue && Se(i, E);
    u.values.next({
      values: { ...s }
    }), u.state.next({
      ...t,
      ...b.keepDirty ? { isDirty: S() } : {}
    }), !b.keepIsValid && k();
  }, Oe = ({ disabled: p, name: b, field: E, fields: F }) => {
    (st(p) && a.mount || p || o.disabled.has(b)) && (p ? o.disabled.add(b) : o.disabled.delete(b), C(b, ti(E ? E._f : B(F, b)._f), !1, !1, !0));
  }, Ae = (p, b = {}) => {
    let E = B(n, p);
    const F = st(b.disabled) || st(e.disabled);
    return ye(n, p, {
      ...E || {},
      _f: {
        ...E && E._f ? E._f : { ref: { name: p } },
        name: p,
        mount: !0,
        ...b
      }
    }), o.mount.add(p), E ? Oe({
      field: E,
      disabled: st(b.disabled) ? b.disabled : e.disabled,
      name: p
    }) : v(p, !0, b.value), {
      ...F ? { disabled: b.disabled || e.disabled } : {},
      ...e.progressive ? {
        required: !!b.required,
        min: _r(b.min),
        max: _r(b.max),
        minLength: _r(b.minLength),
        maxLength: _r(b.maxLength),
        pattern: _r(b.pattern)
      } : {},
      name: p,
      onChange: le,
      onBlur: le,
      ref: (P) => {
        if (P) {
          Ae(p, b), E = B(n, p);
          const N = _e(P.value) && P.querySelectorAll && P.querySelectorAll("input,select,textarea")[0] || P, $ = om(N), Y = E._f.refs || [];
          if ($ ? Y.find((ge) => ge === N) : N === E._f.ref)
            return;
          ye(n, p, {
            _f: {
              ...E._f,
              ...$ ? {
                refs: [
                  ...Y.filter(ei),
                  N,
                  ...Array.isArray(B(i, p)) ? [{}] : []
                ],
                ref: { type: N.type, name: p }
              } : { ref: N }
            }
          }), v(p, !1, void 0, N);
        } else
          E = B(n, p, {}), E._f && (E._f.mount = !1), (e.shouldUnregister || b.shouldUnregister) && !(Fo(o.array, p) && a.action) && o.unMount.add(p);
      }
    };
  }, Ee = () => e.shouldFocusError && Tr(n, ce, o.mount), ie = (p) => {
    st(p) && (u.state.next({ disabled: p }), Tr(n, (b, E) => {
      const F = B(n, E);
      F && (b.disabled = F._f.disabled || p, Array.isArray(F._f.refs) && F._f.refs.forEach((P) => {
        P.disabled = F._f.disabled || p;
      }));
    }, 0, !1));
  }, Me = (p, b) => async (E) => {
    let F;
    E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
    let P = $e(s);
    if (o.disabled.size)
      for (const N of o.disabled)
        ye(P, N, void 0);
    if (u.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: N, values: $ } = await O();
      t.errors = N, P = $;
    } else
      await I(n);
    if (Se(t.errors, "root"), We(t.errors)) {
      u.state.next({
        errors: {}
      });
      try {
        await p(P, E);
      } catch (N) {
        F = N;
      }
    } else
      b && await b({ ...t.errors }, E), Ee(), setTimeout(Ee);
    if (u.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: We(t.errors) && !F,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), F)
      throw F;
  }, Le = (p, b = {}) => {
    B(n, p) && (_e(b.defaultValue) ? U(p, $e(B(i, p))) : (U(p, b.defaultValue), ye(i, p, $e(b.defaultValue))), b.keepTouched || Se(t.touchedFields, p), b.keepDirty || (Se(t.dirtyFields, p), t.isDirty = b.defaultValue ? S(p, $e(B(i, p))) : S()), b.keepError || (Se(t.errors, p), d.isValid && k()), u.state.next({ ...t }));
  }, Ze = (p, b = {}) => {
    const E = p ? $e(p) : i, F = $e(E), P = We(p), N = P ? i : F;
    if (b.keepDefaultValues || (i = E), !b.keepValues) {
      if (b.keepDirtyValues) {
        const $ = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(wr(i, s))
        ]);
        for (const Y of Array.from($))
          B(t.dirtyFields, Y) ? ye(N, Y, B(s, Y)) : U(Y, B(N, Y));
      } else {
        if (ji && _e(p))
          for (const $ of o.mount) {
            const Y = B(n, $);
            if (Y && Y._f) {
              const ge = Array.isArray(Y._f.refs) ? Y._f.refs[0] : Y._f.ref;
              if (wn(ge)) {
                const ve = ge.closest("form");
                if (ve) {
                  ve.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      s = e.shouldUnregister ? b.keepDefaultValues ? $e(i) : {} : $e(N), u.array.next({
        values: { ...N }
      }), u.values.next({
        values: { ...N }
      });
    }
    o = {
      mount: b.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !d.isValid || !!b.keepIsValid || !!b.keepDirtyValues, a.watch = !!e.shouldUnregister, u.state.next({
      submitCount: b.keepSubmitCount ? t.submitCount : 0,
      isDirty: P ? !1 : b.keepDirty ? t.isDirty : !!(b.keepDefaultValues && !Pt(p, i)),
      isSubmitted: b.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: P ? {} : b.keepDirtyValues ? b.keepDefaultValues && s ? wr(i, s) : t.dirtyFields : b.keepDefaultValues && p ? wr(i, p) : b.keepDirty ? t.dirtyFields : {},
      touchedFields: b.keepTouched ? t.touchedFields : {},
      errors: b.keepErrors ? t.errors : {},
      isSubmitSuccessful: b.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Ie = (p, b) => Ze(wt(p) ? p(s) : p, b);
  return {
    control: {
      register: Ae,
      unregister: xe,
      getFieldState: we,
      handleSubmit: Me,
      setError: Ve,
      _executeSchema: O,
      _getWatch: M,
      _getDirty: S,
      _updateValid: k,
      _removeUnmounted: T,
      _updateFieldArray: D,
      _updateDisabledField: Oe,
      _getFieldArray: H,
      _reset: Ze,
      _resetDefaultValues: () => wt(e.defaultValues) && e.defaultValues().then((p) => {
        Ie(p, e.resetOptions), u.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (p) => {
        t = {
          ...t,
          ...p
        };
      },
      _disableForm: ie,
      _subjects: u,
      _proxyFormState: d,
      _setErrors: A,
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
    trigger: ue,
    register: Ae,
    handleSubmit: Me,
    watch: et,
    setValue: U,
    getValues: Qe,
    reset: Ie,
    resetField: Le,
    clearErrors: Re,
    unregister: xe,
    setError: Ve,
    setFocus: (p, b = {}) => {
      const E = B(n, p), F = E && E._f;
      if (F) {
        const P = F.refs ? F.refs[0] : F.ref;
        P.focus && (P.focus(), b.shouldSelect && wt(P.select) && P.select());
      }
    },
    getFieldState: we
  };
}
function Jo(r = {}) {
  const e = W.useRef(void 0), t = W.useRef(void 0), [n, i] = W.useState({
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
    ...mm(r),
    formState: n
  });
  const s = e.current.control;
  return s._options = r, Wi({
    subject: s._subjects.state,
    next: (a) => {
      jo(a, s._proxyFormState, s._updateFormState, !0) && i({ ...s._formState });
    }
  }), W.useEffect(() => s._disableForm(r.disabled), [s, r.disabled]), W.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const a = s._getDirty();
      a !== n.isDirty && s._subjects.state.next({
        isDirty: a
      });
    }
  }, [s, n.isDirty]), W.useEffect(() => {
    r.values && !Pt(r.values, t.current) ? (s._reset(r.values, s._options.resetOptions), t.current = r.values, i((a) => ({ ...a }))) : s._resetDefaultValues();
  }, [r.values, s]), W.useEffect(() => {
    r.errors && s._setErrors(r.errors);
  }, [r.errors, s]), W.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), W.useEffect(() => {
    r.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [r.shouldUnregister, s]), e.current.formState = Vo(n, s), e.current;
}
var pm = "Label", Qo = ot.forwardRef((r, e) => /* @__PURE__ */ f(
  Gl.label,
  {
    ...r,
    ref: e,
    onMouseDown: (t) => {
      t.target.closest("button, input, select, textarea") || (r.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
Qo.displayName = pm;
var el = Qo;
const En = ot.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ f(
  el,
  {
    ref: t,
    className: se(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      r
    ),
    ...e
  }
));
En.displayName = el.displayName;
const tl = Qh, rl = ot.createContext(
  {}
), Bs = ({
  ...r
}) => {
  const { formState: e } = $t();
  return /* @__PURE__ */ f(rl.Provider, { value: { name: r.name }, children: /* @__PURE__ */ f(nm, { ...r, disabled: e.isSubmitting }) });
}, jn = () => {
  const r = ot.useContext(rl), e = ot.useContext(nl), { getFieldState: t, formState: n } = $t(), i = t(r.name, n);
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
}, nl = ot.createContext(
  {}
), il = ot.forwardRef(({ className: r, ...e }, t) => {
  const n = ot.useId();
  return /* @__PURE__ */ f(nl.Provider, { value: { id: n }, children: /* @__PURE__ */ f("div", { ref: t, className: se("space-y-2", r), ...e }) });
});
il.displayName = "FormItem";
const gm = ot.forwardRef(({ className: r, ...e }, t) => {
  const { error: n, formItemId: i } = jn();
  return /* @__PURE__ */ f(
    En,
    {
      ref: t,
      className: se(n && "text-f1-foreground-critical", r),
      htmlFor: i,
      ...e
    }
  );
});
gm.displayName = "FormLabel";
const sl = ot.forwardRef(({ ...r }, e) => {
  const { error: t, formItemId: n, formDescriptionId: i, formMessageId: s } = jn();
  return /* @__PURE__ */ f(
    Ul,
    {
      ref: e,
      id: n,
      "aria-describedby": t ? `${i} ${s}` : `${i}`,
      "aria-invalid": !!t,
      ...r
    }
  );
});
sl.displayName = "FormControl";
const al = ot.forwardRef(({ className: r, ...e }, t) => {
  const { formDescriptionId: n } = jn();
  return /* @__PURE__ */ f(
    "p",
    {
      ref: t,
      id: n,
      className: se("text-base text-f1-foreground-secondary", r),
      ...e
    }
  );
});
al.displayName = "FormDescription";
const ol = ot.forwardRef(
  ({ className: r, children: e, fallback: t, ...n }, i) => {
    const { error: s, formMessageId: a } = jn(), { forms: o } = Xt(), l = s ? s.message ?? t ?? o.validation.invalidType : e;
    return l ? /* @__PURE__ */ j(
      "div",
      {
        ref: i,
        id: a,
        className: se("flex gap-1", r),
        ...n,
        children: [
          /* @__PURE__ */ f(Hr, { icon: ga, color: "critical" }),
          /* @__PURE__ */ f("span", { className: "text-base font-medium text-f1-foreground-critical", children: l })
        ]
      }
    ) : null;
  }
);
ol.displayName = "FormMessage";
function vm({
  isActionBar: r,
  isDirty: e,
  actionBarStatus: t,
  hasErrors: n,
  errorCount: i,
  resolvedActionBarLabel: s,
  centerActionBarInFrameContent: a,
  submitLabel: o,
  submitIcon: l,
  discardableChanges: c,
  discardLabel: d,
  discardIcon: u,
  issuesOneLabel: h,
  issuesOtherLabel: m,
  onSubmit: g,
  onDiscard: y,
  goToPreviousError: k,
  goToNextError: R
}) {
  return r ? /* @__PURE__ */ f(
    ds,
    {
      isOpen: e || t === "loading" || t === "success",
      variant: "light",
      status: n ? void 0 : t,
      centerInFrameContent: a,
      label: s,
      leftContent: n ? /* @__PURE__ */ j("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ j("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ f(Hr, { icon: ga, size: "md", color: "critical" }),
          /* @__PURE__ */ f("span", { className: "font-medium text-f1-foreground-critical", children: i === 1 ? h.replace("{{count}}", String(i)) : m.replace("{{count}}", String(i)) })
        ] }),
        i > 1 && /* @__PURE__ */ j("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ f(
            Ge,
            {
              icon: Zl,
              onClick: k,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }
          ),
          /* @__PURE__ */ f(
            Ge,
            {
              icon: ql,
              onClick: R,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            }
          )
        ] })
      ] }) : void 0,
      primaryActions: [
        {
          label: o,
          icon: l,
          onClick: g,
          disabled: n
        }
      ],
      secondaryActions: c ? [
        {
          label: d,
          icon: u,
          onClick: y
        }
      ] : []
    }
  ) : /* @__PURE__ */ f(
    ds,
    {
      isOpen: t === "loading" || t === "success",
      variant: "light",
      status: t,
      label: s
    }
  );
}
const Zi = "gap-4", ll = "mt-6", cl = "max-w-[720px]", Wt = "md", qi = Et(null);
function Ki() {
  const r = ht(qi);
  if (!r)
    throw new Error("useF0FormContext must be used within a F0Form");
  return r;
}
function qt(r, e, t) {
  const n = ["forms", r];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function be(r, e) {
  return r._def?.typeName === e;
}
function Xi(r) {
  return be(r, "ZodEffects") ? r._def.schema : r;
}
const dl = /* @__PURE__ */ new WeakMap();
function $g(r, e) {
  dl.set(r, e);
  const t = r;
  return t._f0Config = e, t._innerSchema = r, t;
}
function Yi(r) {
  const e = r;
  return e._f0Config ? e._f0Config : dl.get(r);
}
function Wg(r) {
  return Yi(r) !== void 0;
}
function gt(r) {
  let e = r;
  for (; be(e, "ZodOptional") || be(e, "ZodNullable") || be(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function ym(r, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("useUpload" in e && e.useUpload)
    return "file";
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = gt(r);
  return be(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : be(t, "ZodNumber") ? "number" : be(t, "ZodBoolean") ? "switch" : be(t, "ZodDate") ? "date" : be(t, "ZodEnum") || be(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : be(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function ul(r) {
  return be(r, "ZodOptional") || be(r, "ZodNullable") || be(r, "ZodDefault") && ul(r._def.innerType);
}
const bm = /* @__PURE__ */ new Set([
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
function xm(r) {
  const e = gt(r);
  return be(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "min" ? (n.value ?? 0) >= 1 : bm.has(n.kind)) : !1;
}
function fl(r) {
  if (ul(r))
    return !1;
  const e = gt(r);
  return be(e, "ZodString") ? xm(r) : !0;
}
function wm(r, e) {
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
function $n(r, e) {
  return typeof r == "function" ? r({ values: e }) : wm(r, e);
}
function Ji(r, e) {
  return r === void 0 ? !1 : typeof r == "function" ? r({ values: e }) : r;
}
function tr(r, e) {
  if (r !== void 0)
    return typeof r == "function" ? r({ values: e }) : r;
}
function _m(r) {
  const e = gt(r);
  return be(e, "ZodLiteral") && e._def.value === !0;
}
function Cm({
  field: r,
  formField: e
}) {
  const t = r.validation && _m(r.validation);
  return /* @__PURE__ */ f(
    Kl,
    {
      ...e,
      title: r.label,
      disabled: r.disabled,
      required: t,
      checked: !!e.value,
      onCheckedChange: e.onChange
    }
  );
}
function Em({
  field: r,
  formField: e,
  error: t,
  isValidating: n,
  required: i
}) {
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
  return /* @__PURE__ */ f(Vr, { children: r.render(s) });
}
function km(r, e) {
  if (r)
    return {
      value: { from: r, to: r },
      granularity: e?.[0] ?? "day"
    };
}
function Sm(r) {
  return r?.value?.from;
}
function hl({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = Z(
    () => km(
      e.value ?? void 0,
      r.granularities
    ),
    [e.value, r.granularities]
  ), s = (a) => {
    e.onChange(Sm(a) ?? null);
  };
  return /* @__PURE__ */ f(
    Aa,
    {
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
    }
  );
}
function pi(r) {
  if (!r || !(r instanceof Date) || isNaN(r.getTime())) return "";
  const e = String(r.getHours()).padStart(2, "0"), t = String(r.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function Dm(r) {
  if (!r) return;
  const [e, t] = r.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const n = /* @__PURE__ */ new Date();
  return n.setHours(e, t, 0, 0), n;
}
function ri(r, e) {
  if (!r) return;
  const t = new Date(r);
  if (e) {
    const [n, i, s] = e.split(":").map(Number);
    t.setHours(n ?? 0, i ?? 0, s ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function ml({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = Z(
    () => pi(e.value ?? void 0),
    [e.value]
  ), s = ne(
    (a) => {
      if (!a) {
        e.onChange(null);
        return;
      }
      const o = Dm(a);
      e.onChange(o);
    },
    [e]
  );
  return /* @__PURE__ */ f(
    va,
    {
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
      icon: Xl
    }
  );
}
function Nm({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = e.value ?? void 0, s = Z(() => pi(i), [i]), a = ne(
    (h) => {
      if (!h) {
        e.onChange(null);
        return;
      }
      e.onChange(ri(h, s));
    },
    [e, s]
  ), o = ne(
    (h) => {
      if (!h) {
        if (i) {
          const g = new Date(i);
          g.setHours(0, 0, 0, 0), e.onChange(g);
        }
        return;
      }
      const m = pi(h);
      if (!i) {
        const g = /* @__PURE__ */ new Date();
        g.setHours(0, 0, 0, 0), e.onChange(ri(g, m));
        return;
      }
      e.onChange(ri(i, m));
    },
    [e, i]
  ), l = Z(
    () => ({
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
    }),
    [r]
  ), c = Z(
    () => ({
      ...e,
      value: i,
      onChange: a
    }),
    [e, i, a]
  ), d = Z(
    () => ({
      id: `${r.id}-time`,
      type: "time",
      label: "Time",
      disabled: r.disabled,
      clearable: !1
      // Time clearing is handled via date clear
    }),
    [r.id, r.disabled]
  ), u = Z(
    () => ({
      ...e,
      value: i,
      onChange: o
    }),
    [e, i, o]
  );
  return /* @__PURE__ */ j("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ f("div", { className: "flex-1", children: /* @__PURE__ */ f(
      hl,
      {
        field: l,
        formField: c,
        error: t,
        loading: n
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "w-32", children: /* @__PURE__ */ f(
      ml,
      {
        field: d,
        formField: u,
        error: t,
        loading: n
      }
    ) })
  ] });
}
function Rm(r) {
  if (!(!r?.from || !r?.to))
    return {
      value: { from: r.from, to: r.to },
      granularity: "range"
    };
}
function Am(r) {
  if (!(!r?.value?.from || !r?.value?.to))
    return {
      from: r.value.from,
      to: r.value.to
    };
}
function Tm({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = Z(
    () => Rm(
      e.value ?? void 0
    ),
    [e.value]
  ), s = (o) => {
    e.onChange(Am(o) ?? null);
  }, a = r.fromLabel && r.toLabel ? `${r.label} (${r.fromLabel} - ${r.toLabel})` : r.label;
  return /* @__PURE__ */ f(
    Aa,
    {
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
    }
  );
}
function Om({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  return /* @__PURE__ */ f(
    dd,
    {
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
    }
  );
}
function Mm({
  field: r,
  formField: e
}) {
  const t = e.value;
  return /* @__PURE__ */ f(
    ud,
    {
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
    }
  );
}
function Lm({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
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
  return r.multiple ? /* @__PURE__ */ f(
    sr,
    {
      ...i,
      multiple: !0,
      clearable: r.clearable,
      value: e.value ?? [],
      onChange: (s) => e.onChange(s)
    }
  ) : r.clearable ? /* @__PURE__ */ f(
    sr,
    {
      ...i,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  ) : /* @__PURE__ */ f(
    sr,
    {
      ...i,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  );
}
function Im({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
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
  return r.multiple ? /* @__PURE__ */ f(
    sr,
    {
      ...i,
      multiple: !0,
      clearable: r.clearable,
      value: e.value ?? [],
      onChange: (s) => e.onChange(s)
    }
  ) : r.clearable ? /* @__PURE__ */ f(
    sr,
    {
      ...i,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  ) : /* @__PURE__ */ f(
    sr,
    {
      ...i,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  );
}
function Pm(r) {
  const { field: e } = r;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? /* @__PURE__ */ f(
    Im,
    {
      ...r,
      field: e
    }
  ) : "options" in e && e.options !== void 0 ? /* @__PURE__ */ f(
    Lm,
    {
      ...r,
      field: e
    }
  ) : null;
}
function zm(r) {
  const e = gt(r);
  return be(e, "ZodLiteral") && e._def.value === !0;
}
function Fm({
  field: r,
  formField: e
}) {
  const t = r.validation && zm(r.validation);
  return /* @__PURE__ */ f(
    Yl,
    {
      ...e,
      title: r.label,
      disabled: r.disabled,
      required: t,
      checked: !!e.value,
      onCheckedChange: e.onChange,
      hideLabel: !0
    }
  );
}
const Bm = {
  email: "name@example.com"
}, Hm = {
  url: Ql,
  email: Jl
};
function Vm({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = r.inputType ?? "text", s = r.placeholder ?? Bm[i] ?? void 0, a = Hm[i];
  return /* @__PURE__ */ f(
    va,
    {
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
    }
  );
}
function jm(r) {
  return r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
}
function $m({
  entry: r,
  useUpload: e,
  onUploadComplete: t,
  onRemove: n,
  onError: i,
  disabled: s,
  translations: a
}) {
  const o = !!r.file, l = e?.(), c = l?.upload, d = l?.cancelUpload, u = l?.progress ?? 0, h = l?.status ?? "idle", [m, g] = re(null), y = Q(!1), k = ne(async () => {
    if (!(!o || !r.file || !c) && !y.current) {
      y.current = !0;
      try {
        const _ = await c(r.file);
        _.type === "success" ? t(_.value) : n();
      } catch {
        const _ = a.uploadFailed;
        g(_), i(_);
      }
    }
  }, [
    o,
    r.file,
    c,
    t,
    n,
    i,
    a
  ]);
  ee(() => {
    o && k();
  }, [o, k]);
  const R = ne(() => {
    o && (h === "uploading" || h === "processing") && d?.(), n();
  }, [o, h, d, n]), D = o && (h === "uploading" || h === "processing"), x = Math.round(u * 100), A = r.file ?? {
    name: r.initialFile?.name ?? "",
    type: r.initialFile?.type ?? ""
  }, v = r.file?.name ?? r.initialFile?.name ?? "", C = r.file?.size ?? r.initialFile?.size;
  return /* @__PURE__ */ j(
    "div",
    {
      className: se(
        "flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-2.5 py-2",
        m && "border-f1-border-critical"
      ),
      children: [
        /* @__PURE__ */ f(ec, { file: A, size: "md" }),
        /* @__PURE__ */ j("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [
          /* @__PURE__ */ f("span", { className: "truncate text-base font-medium text-f1-foreground", children: v }),
          /* @__PURE__ */ f("span", { className: "text-sm text-f1-foreground-secondary", children: m || (D ? h === "processing" ? a.processing : `${a.uploading} ${x}%` : C != null ? jm(C) : null) })
        ] }),
        !s && /* @__PURE__ */ f(
          Ge,
          {
            variant: "ghost",
            size: "sm",
            label: a.remove,
            onClick: R,
            icon: Si,
            hideLabel: !0
          }
        )
      ]
    }
  );
}
const Wm = /* @__PURE__ */ new Set([
  "image",
  "video",
  "audio",
  "text",
  "application"
]);
function gi(r) {
  return Wm.has(r) ? `${r}/*` : r;
}
const Hs = {
  "application/pdf": "PDF",
  "application/msword": "DOC",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "DOCX",
  "application/vnd.ms-excel": "XLS",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "XLSX",
  "application/vnd.ms-powerpoint": "PPT",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "PPTX",
  "application/zip": "ZIP",
  "application/json": "JSON",
  "text/plain": "TXT",
  "text/csv": "CSV",
  "text/html": "HTML",
  "text/markdown": "Markdown",
  "image/jpeg": "JPEG",
  "image/png": "PNG",
  "image/gif": "GIF",
  "image/webp": "WebP",
  "image/svg+xml": "SVG",
  "image/heic": "HEIC",
  "image/bmp": "BMP",
  "image/tiff": "TIFF",
  "video/mp4": "MP4",
  "video/webm": "WebM",
  "video/quicktime": "MOV",
  "audio/mpeg": "MP3",
  "audio/ogg": "OGG",
  "audio/wav": "WAV"
}, Vs = {
  "image/*": "Images",
  "video/*": "Videos",
  "audio/*": "Audio",
  "text/*": "Text files",
  "application/*": "Documents"
};
function Gm(r) {
  if (!r || r.length === 0) return;
  const e = [];
  for (const t of r) {
    const n = gi(t);
    if (Vs[n])
      e.push(Vs[n]);
    else if (Hs[n])
      e.push(Hs[n]);
    else {
      const i = n.split("/")[1];
      i && e.push(i.toUpperCase());
    }
  }
  return e.length > 0 ? e.join(", ") : void 0;
}
function Um(r, e, t) {
  if (!r?.length) return [];
  const n = t ? Array.isArray(e) ? e : [] : typeof e == "string" && e ? [e] : [];
  if (n.length === 0) return [];
  const i = new Map(r.map((s) => [s.value, s]));
  return n.map((s) => i.get(s)).filter((s) => s != null).map((s) => ({
    key: `initial-${s.value}`,
    initialFile: s,
    value: s.value
  }));
}
function Zm({
  field: r,
  formField: e,
  error: t
}) {
  const { forms: n } = Xt(), { initialFiles: i } = Ki(), s = kc(), a = Q(null), [o, l] = re(!1), c = r.multiple ?? !1, [d, u] = re(
    () => Um(i, e.value, c)
  ), [h, m] = re(null), g = n.file, y = d.length > 0, k = c || !y, R = r.accept ? r.accept.map(gi).join(",") : void 0, D = Z(
    () => Gm(r.accept),
    [r.accept]
  ), x = ne(
    (z) => r.accept && !r.accept.some((q) => {
      const U = gi(q);
      return U.endsWith("/*") ? z.type.startsWith(U.replace("/*", "/")) : z.type === U;
    }) ? g.invalidFileType.replace(
      "{{types}}",
      D ?? ""
    ) : r.maxSizeMB && z.size > r.maxSizeMB * 1024 * 1024 ? g.fileTooLarge.replace(
      "{{maxSize}}",
      String(r.maxSizeMB)
    ) : null,
    [r.accept, r.maxSizeMB, g, D]
  ), A = ne(
    (z) => {
      m(null);
      const q = c ? z : [z[0]];
      for (const U of q) {
        const le = x(U);
        if (le) {
          m(le);
          continue;
        }
        const ce = `${U.name}-${U.size}-${Date.now()}-${Math.random()}`;
        u((ue) => c ? [...ue, { key: ce, file: U }] : [{ key: ce, file: U }]);
      }
    },
    [c, x]
  ), v = ne(
    (z) => {
      z.preventDefault(), z.stopPropagation(), r.disabled || l(!0);
    },
    [r.disabled]
  ), C = ne((z) => {
    z.preventDefault(), z.stopPropagation(), l(!1);
  }, []), _ = ne(
    (z) => {
      if (z.preventDefault(), z.stopPropagation(), l(!1), r.disabled) return;
      const q = Array.from(z.dataTransfer.files);
      q.length > 0 && A(q);
    },
    [r.disabled, A]
  ), O = ne(
    (z) => {
      const q = Array.from(z.target.files ?? []);
      q.length > 0 && A(q), a.current && (a.current.value = "");
    },
    [A]
  ), V = ne(() => {
    r.disabled || a.current?.click();
  }, [r.disabled]), I = ne(
    (z) => {
      (z.key === "Enter" || z.key === " ") && (z.preventDefault(), V());
    },
    [V]
  ), T = ne(
    (z, q) => {
      if (u(
        (U) => U.map((le) => le.key === z ? { ...le, value: q } : le)
      ), c) {
        const U = Array.isArray(e.value) ? e.value : [];
        e.onChange([...U, q]);
      } else
        e.onChange(q);
    },
    [c, e]
  ), S = ne(
    (z) => {
      const q = d.find((U) => U.key === z);
      if (u((U) => U.filter((le) => le.key !== z)), q?.value)
        if (c) {
          const U = Array.isArray(e.value) ? e.value : [];
          e.onChange(U.filter((le) => le !== q.value));
        } else
          e.onChange(void 0);
      else c || e.onChange(void 0);
    },
    [d, c, e]
  ), M = ne((z, q) => {
    u(
      (U) => U.map(
        (le) => le.key === z ? { ...le, error: q } : le
      )
    );
  }, []), H = o ? g.dropzoneActive : r.description ?? (c ? g.dropzoneMultiple : g.dropzone);
  return /* @__PURE__ */ j("div", { className: "flex flex-col gap-2", children: [
    k && /* @__PURE__ */ j(
      "div",
      {
        role: "button",
        tabIndex: r.disabled ? -1 : 0,
        onDragOver: v,
        onDragLeave: C,
        onDrop: _,
        onClick: V,
        onKeyDown: I,
        "aria-disabled": r.disabled,
        className: se(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors",
          o ? "border-f1-border-accent bg-f1-background-accent-bold/5" : t || h ? "border-f1-border-critical bg-f1-background" : "border-f1-border bg-f1-background",
          !r.disabled && !o && "hover:border-f1-border-hover hover:bg-f1-background-secondary",
          r.disabled && "cursor-not-allowed opacity-50",
          ki("rounded-lg")
        ),
        children: [
          /* @__PURE__ */ f("div", { className: "flex aspect-square items-center justify-center rounded-md border border-solid border-f1-border p-1 text-f1-icon", children: /* @__PURE__ */ f(Hr, { icon: tc, size: "lg" }) }),
          /* @__PURE__ */ j("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ f("span", { className: "text-center text-base text-f1-foreground-secondary", children: H }),
            !o && D && /* @__PURE__ */ f("span", { className: "text-center text-sm text-f1-foreground-secondary/70", children: g.acceptedTypes.replace(
              "{{types}}",
              D
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f(
      "input",
      {
        ref: a,
        id: s,
        type: "file",
        accept: R,
        multiple: c,
        onChange: O,
        className: "hidden",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    h && /* @__PURE__ */ f("p", { className: "text-base text-f1-foreground-critical", children: h }),
    d.length > 0 && /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: d.map((z) => /* @__PURE__ */ f(
      $m,
      {
        entry: z,
        useUpload: z.file ? r.useUpload : void 0,
        onUploadComplete: (q) => T(z.key, q),
        onRemove: () => S(z.key),
        onError: (q) => M(z.key, q),
        disabled: r.disabled,
        translations: {
          remove: g.remove,
          uploading: g.uploading,
          processing: g.processing,
          uploadFailed: g.uploadFailed
        }
      },
      z.key
    )) })
  ] });
}
function qm({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  return /* @__PURE__ */ f(
    fd,
    {
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
    }
  );
}
function Km({
  field: r,
  formField: e,
  fieldState: t,
  isSubmitting: n,
  isRequired: i,
  values: s
}) {
  const a = !!t.error, { isValidating: o } = t, l = Ji(r.disabled, s) || n, c = {
    error: a,
    loading: o
  };
  switch (r.type) {
    case "text":
      return /* @__PURE__ */ f(
        Vm,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "number":
      return /* @__PURE__ */ f(
        Om,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "textarea":
      return /* @__PURE__ */ f(
        qm,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "select":
      return /* @__PURE__ */ f(
        Pm,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "checkbox":
      return /* @__PURE__ */ f(
        Cm,
        {
          field: { ...r, disabled: l },
          formField: e
        }
      );
    case "switch":
      return /* @__PURE__ */ f(
        Fm,
        {
          field: { ...r, disabled: l },
          formField: e
        }
      );
    case "date":
      return /* @__PURE__ */ f(
        hl,
        {
          field: {
            ...r,
            disabled: l,
            // Evaluate dynamic date constraints
            minDate: tr(r.minDate, s),
            maxDate: tr(r.maxDate, s)
          },
          formField: e,
          ...c
        }
      );
    case "time":
      return /* @__PURE__ */ f(
        ml,
        {
          field: {
            ...r,
            disabled: l,
            // Evaluate dynamic date constraints
            minDate: tr(r.minDate, s),
            maxDate: tr(r.maxDate, s)
          },
          formField: e,
          ...c
        }
      );
    case "datetime":
      return /* @__PURE__ */ f(
        Nm,
        {
          field: {
            ...r,
            disabled: l,
            // Evaluate dynamic date constraints
            minDate: tr(r.minDate, s),
            maxDate: tr(r.maxDate, s)
          },
          formField: e,
          ...c
        }
      );
    case "daterange":
      return /* @__PURE__ */ f(
        Tm,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "richtext":
      return /* @__PURE__ */ f(
        Mm,
        {
          field: { ...r, disabled: l },
          formField: e
        }
      );
    case "file":
      return /* @__PURE__ */ f(
        Zm,
        {
          field: { ...r, disabled: l },
          formField: e,
          error: a
        }
      );
    case "custom":
      return /* @__PURE__ */ f(
        Em,
        {
          field: { ...r, disabled: l },
          formField: e,
          isValidating: o,
          required: i
        }
      );
    default:
      return null;
  }
}
function Wn({ field: r, sectionId: e }) {
  const t = $t(), n = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = Ki(), { forms: a } = Xt(), o = Ji(r.disabled, n), l = Q(o);
  ee(() => {
    const m = l.current;
    if (l.current = o, !m && o && r.resetOnDisable) {
      const g = t.formState.defaultValues?.[r.id];
      t.setValue(r.id, g, { shouldValidate: !1 });
    }
  }, [o, r.resetOnDisable, r.id, t]);
  const c = !r.renderIf || $n(r.renderIf, n), d = r.type !== "checkbox" && r.type !== "custom", u = r.validation && fl(r.validation), h = qt(s, e, r.id);
  return c ? /* @__PURE__ */ f(
    Bs,
    {
      control: t.control,
      name: r.id,
      render: ({ field: m, fieldState: g }) => /* @__PURE__ */ j(il, { id: h, className: "scroll-mt-4", children: [
        d && /* @__PURE__ */ j(
          "label",
          {
            htmlFor: r.id,
            className: "text-base font-medium leading-normal text-f1-foreground-secondary",
            children: [
              r.label,
              u && /* @__PURE__ */ f("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ f(sl, { children: Km({
          field: r,
          formField: m,
          fieldState: g,
          isSubmitting: i,
          isRequired: u,
          values: n
        }) }),
        r.helpText && /* @__PURE__ */ f(al, { children: r.helpText }),
        /* @__PURE__ */ f(
          ol,
          {
            fallback: u ? a.validation.required : a.validation.invalidType
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ f(
    Bs,
    {
      control: t.control,
      name: r.id,
      render: () => /* @__PURE__ */ f("span", { className: "hidden", "aria-hidden": "true" })
    }
  );
}
function Qi({ row: r, sectionId: e }) {
  return /* @__PURE__ */ f("div", { className: `flex xs:flex-row flex-col ${Zi} [&>*]:flex-1`, children: r.fields.map((t) => /* @__PURE__ */ f(Wn, { field: t, sectionId: e }, t.id)) });
}
function Xm(r) {
  const e = gt(r);
  return be(e, "ZodLiteral") && e._def.value === !0;
}
function es({ fields: r }) {
  const e = $t(), { watch: t, setValue: n } = e, { isSubmitting: i } = e.formState, s = t(), a = Z(
    () => r.filter(
      (h) => !h.renderIf || $n(h.renderIf, s)
    ),
    [r, s]
  ), o = Z(
    () => Object.fromEntries(
      a.map((h) => [
        h.id,
        Ji(h.disabled, s) || i
      ])
    ),
    [a, i, s]
  ), l = Q({});
  ee(() => {
    const h = l.current, m = e.formState.defaultValues ?? {};
    for (const g of a) {
      if (!(g.id in h))
        continue;
      const y = h[g.id], k = o[g.id] ?? !1;
      if (!y && k && g.resetOnDisable) {
        const R = m[g.id] ?? !1;
        n(g.id, R, { shouldValidate: !1 });
      }
    }
    l.current = { ...o };
  }, [o, a, e, n]);
  const c = Z(
    () => a.map((h) => ({
      value: h.id,
      title: h.label,
      description: h.helpText,
      disabled: o[h.id] ?? !1,
      required: !!(h.validation && Xm(h.validation))
    })),
    [a, o]
  ), d = Z(
    () => a.filter((h) => s[h.id]).map((h) => h.id),
    [a, s]
  );
  return a.length === 0 ? null : /* @__PURE__ */ f(
    hd,
    {
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
    }
  );
}
const js = (r, e, t) => {
  if (r && "reportValidity" in r) {
    const n = B(t, e);
    r.setCustomValidity(n && n.message || ""), r.reportValidity();
  }
}, pl = (r, e) => {
  for (const t in e.fields) {
    const n = e.fields[t];
    n && n.ref && "reportValidity" in n.ref ? js(n.ref, t, r) : n.refs && n.refs.forEach((i) => js(i, t, r));
  }
}, Ym = (r, e) => {
  e.shouldUseNativeValidation && pl(r, e);
  const t = {};
  for (const n in r) {
    const i = B(e.fields, n), s = Object.assign(r[n] || {}, { ref: i && i.ref });
    if (Jm(e.names || Object.keys(r), n)) {
      const a = Object.assign({}, B(t, n));
      ye(a, "root", s), ye(t, n, a);
    } else ye(t, n, s);
  }
  return t;
}, Jm = (r, e) => r.some((t) => t.startsWith(e + "."));
var Qm = function(r, e) {
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
      t[a] = Go(a, e, t, i, c ? [].concat(c, n.message) : n.message);
    }
    r.shift();
  }
  return t;
}, ep = function(r, e, t) {
  return t === void 0 && (t = {}), function(n, i, s) {
    try {
      return Promise.resolve((function(a, o) {
        try {
          var l = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(c) {
            return s.shouldUseNativeValidation && pl({}, s), { errors: {}, values: t.raw ? n : c };
          });
        } catch (c) {
          return o(c);
        }
        return l && l.then ? l.then(void 0, o) : l;
      })(0, function(a) {
        if ((function(o) {
          return Array.isArray(o?.errors);
        })(a)) return { values: {}, errors: Ym(Qm(a.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}, pe;
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
})(pe || (pe = {}));
var $s;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})($s || ($s = {}));
const K = pe.arrayToEnum([
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
      return K.undefined;
    case "string":
      return K.string;
    case "number":
      return Number.isNaN(r) ? K.nan : K.number;
    case "boolean":
      return K.boolean;
    case "function":
      return K.function;
    case "bigint":
      return K.bigint;
    case "symbol":
      return K.symbol;
    case "object":
      return Array.isArray(r) ? K.array : r === null ? K.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? K.promise : typeof Map < "u" && r instanceof Map ? K.map : typeof Set < "u" && r instanceof Set ? K.set : typeof Date < "u" && r instanceof Date ? K.date : K.object;
    default:
      return K.unknown;
  }
}, L = pe.arrayToEnum([
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
    return JSON.stringify(this.issues, pe.jsonStringifyReplacer, 2);
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
const vi = (r, e) => {
  let t;
  switch (r.code) {
    case L.invalid_type:
      r.received === K.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case L.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, pe.jsonStringifyReplacer)}`;
      break;
    case L.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${pe.joinValues(r.keys, ", ")}`;
      break;
    case L.invalid_union:
      t = "Invalid input";
      break;
    case L.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${pe.joinValues(r.options)}`;
      break;
    case L.invalid_enum_value:
      t = `Invalid enum value. Expected ${pe.joinValues(r.options)}, received '${r.received}'`;
      break;
    case L.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case L.invalid_return_type:
      t = "Invalid function return type";
      break;
    case L.invalid_date:
      t = "Invalid date";
      break;
    case L.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : pe.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case L.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "bigint" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case L.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case L.custom:
      t = "Invalid input";
      break;
    case L.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case L.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case L.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, pe.assertNever(r);
  }
  return { message: t };
};
let tp = vi;
function rp() {
  return tp;
}
const np = (r) => {
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
function G(r, e) {
  const t = rp(), n = np({
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
      t === vi ? void 0 : vi
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
        return ae;
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
        return ae;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (n[s.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const ae = Object.freeze({
  status: "aborted"
}), Cr = (r) => ({ status: "dirty", value: r }), ct = (r) => ({ status: "valid", value: r }), Ws = (r) => r.status === "aborted", Gs = (r) => r.status === "dirty", cr = (r) => r.status === "valid", kn = (r) => typeof Promise < "u" && r instanceof Promise;
var X;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e?.message;
})(X || (X = {}));
class Ht {
  constructor(e, t, n, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Us = (r, e) => {
  if (cr(e))
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
function de(r) {
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
    if (kn(t))
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
    return Us(n, i);
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
        return cr(n) ? {
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
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) => cr(n) ? {
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
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (kn(i) ? i : Promise.resolve(i));
    return Us(n, s);
  }
  refine(e, t) {
    const n = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: L.custom,
        ...n(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof t == "function" ? t(n, i) : t), !1));
  }
  _refinement(e) {
    return new ur({
      schema: this,
      typeName: oe.ZodEffects,
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
    return Ft.create(this, this._def);
  }
  nullable() {
    return fr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ct.create(this);
  }
  promise() {
    return Rn.create(this, this._def);
  }
  or(e) {
    return Dn.create([this, e], this._def);
  }
  and(e) {
    return Nn.create(this, e, this._def);
  }
  transform(e) {
    return new ur({
      ...de(this._def),
      schema: this,
      typeName: oe.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new xi({
      ...de(this._def),
      innerType: this,
      defaultValue: t,
      typeName: oe.ZodDefault
    });
  }
  brand() {
    return new Sp({
      typeName: oe.ZodBranded,
      type: this,
      ...de(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new wi({
      ...de(this._def),
      innerType: this,
      catchValue: t,
      typeName: oe.ZodCatch
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
    return ts.create(this, e);
  }
  readonly() {
    return _i.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const ip = /^c[^\s-]{8,}$/i, sp = /^[0-9a-z]+$/, ap = /^[0-9A-HJKMNP-TV-Z]{26}$/i, op = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, lp = /^[a-z0-9_-]{21}$/i, cp = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, dp = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, up = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, fp = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ni;
const hp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, mp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, pp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, gp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, vp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, yp = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, gl = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", bp = new RegExp(`^${gl}$`);
function vl(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function xp(r) {
  return new RegExp(`^${vl(r)}$`);
}
function wp(r) {
  let e = `${gl}T${vl(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function _p(r, e) {
  return !!((e === "v4" || !e) && hp.test(r) || (e === "v6" || !e) && pp.test(r));
}
function Cp(r, e) {
  if (!cp.test(r))
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
function Ep(r, e) {
  return !!((e === "v4" || !e) && mp.test(r) || (e === "v6" || !e) && gp.test(r));
}
class Zt extends he {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== K.string) {
      const s = this._getOrReturnCtx(e);
      return G(s, {
        code: L.invalid_type,
        expected: K.string,
        received: s.parsedType
      }), ae;
    }
    const n = new Je();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), G(i, {
          code: L.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), G(i, {
          code: L.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? G(i, {
          code: L.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && G(i, {
          code: L.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        up.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
          validation: "email",
          code: L.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        ni || (ni = new RegExp(fp, "u")), ni.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
          validation: "emoji",
          code: L.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        op.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
          validation: "uuid",
          code: L.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        lp.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
          validation: "nanoid",
          code: L.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        ip.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
          validation: "cuid",
          code: L.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        sp.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
          validation: "cuid2",
          code: L.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        ap.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
          validation: "ulid",
          code: L.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), G(i, {
            validation: "url",
            code: L.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
        validation: "regex",
        code: L.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), G(i, {
        code: L.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), G(i, {
        code: L.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), G(i, {
        code: L.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? wp(s).test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
        code: L.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? bp.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
        code: L.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? xp(s).test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
        code: L.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? dp.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
        validation: "duration",
        code: L.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? _p(e.data, s.version) || (i = this._getOrReturnCtx(e, i), G(i, {
        validation: "ip",
        code: L.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? Cp(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), G(i, {
        validation: "jwt",
        code: L.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? Ep(e.data, s.version) || (i = this._getOrReturnCtx(e, i), G(i, {
        validation: "cidr",
        code: L.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? vp.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
        validation: "base64",
        code: L.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? yp.test(e.data) || (i = this._getOrReturnCtx(e, i), G(i, {
        validation: "base64url",
        code: L.invalid_string,
        message: s.message
      }), n.dirty()) : pe.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: L.invalid_string,
      ...X.errToObj(n)
    });
  }
  _addCheck(e) {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...X.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...X.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...X.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...X.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...X.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...X.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...X.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...X.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...X.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...X.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...X.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...X.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...X.errToObj(e) });
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
      ...X.errToObj(e?.message)
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
      ...X.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...X.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...X.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...X.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...X.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...X.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...X.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...X.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...X.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, X.errToObj(e));
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
  typeName: oe.ZodString,
  coerce: r?.coerce ?? !1,
  ...de(r)
});
function kp(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = t > n ? t : n, s = Number.parseInt(r.toFixed(i).replace(".", "")), a = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % a / 10 ** i;
}
class zr extends he {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== K.number) {
      const s = this._getOrReturnCtx(e);
      return G(s, {
        code: L.invalid_type,
        expected: K.number,
        received: s.parsedType
      }), ae;
    }
    let n;
    const i = new Je();
    for (const s of this._def.checks)
      s.kind === "int" ? pe.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
        code: L.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), G(n, {
        code: L.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), G(n, {
        code: L.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? kp(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), G(n, {
        code: L.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
        code: L.not_finite,
        message: s.message
      }), i.dirty()) : pe.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, X.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, X.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, X.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, X.toString(t));
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
          message: X.toString(i)
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
  int(e) {
    return this._addCheck({
      kind: "int",
      message: X.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: X.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: X.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: X.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: X.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: X.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: X.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: X.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: X.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && pe.isInteger(e.value));
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
zr.create = (r) => new zr({
  checks: [],
  typeName: oe.ZodNumber,
  coerce: r?.coerce || !1,
  ...de(r)
});
class Fr extends he {
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
    if (this._getType(e) !== K.bigint)
      return this._getInvalidInput(e);
    let n;
    const i = new Je();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), G(n, {
        code: L.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), G(n, {
        code: L.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), G(n, {
        code: L.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : pe.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return G(t, {
      code: L.invalid_type,
      expected: K.bigint,
      received: t.parsedType
    }), ae;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, X.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, X.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, X.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, X.toString(t));
  }
  setLimit(e, t, n, i) {
    return new Fr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: X.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Fr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: X.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: X.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: X.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: X.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: X.toString(t)
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
Fr.create = (r) => new Fr({
  checks: [],
  typeName: oe.ZodBigInt,
  coerce: r?.coerce ?? !1,
  ...de(r)
});
class Zs extends he {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== K.boolean) {
      const n = this._getOrReturnCtx(e);
      return G(n, {
        code: L.invalid_type,
        expected: K.boolean,
        received: n.parsedType
      }), ae;
    }
    return ct(e.data);
  }
}
Zs.create = (r) => new Zs({
  typeName: oe.ZodBoolean,
  coerce: r?.coerce || !1,
  ...de(r)
});
class Sn extends he {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== K.date) {
      const s = this._getOrReturnCtx(e);
      return G(s, {
        code: L.invalid_type,
        expected: K.date,
        received: s.parsedType
      }), ae;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return G(s, {
        code: L.invalid_date
      }), ae;
    }
    const n = new Je();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), G(i, {
        code: L.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), G(i, {
        code: L.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : pe.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Sn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: X.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: X.toString(t)
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
Sn.create = (r) => new Sn({
  checks: [],
  coerce: r?.coerce || !1,
  typeName: oe.ZodDate,
  ...de(r)
});
class qs extends he {
  _parse(e) {
    if (this._getType(e) !== K.symbol) {
      const n = this._getOrReturnCtx(e);
      return G(n, {
        code: L.invalid_type,
        expected: K.symbol,
        received: n.parsedType
      }), ae;
    }
    return ct(e.data);
  }
}
qs.create = (r) => new qs({
  typeName: oe.ZodSymbol,
  ...de(r)
});
class Ks extends he {
  _parse(e) {
    if (this._getType(e) !== K.undefined) {
      const n = this._getOrReturnCtx(e);
      return G(n, {
        code: L.invalid_type,
        expected: K.undefined,
        received: n.parsedType
      }), ae;
    }
    return ct(e.data);
  }
}
Ks.create = (r) => new Ks({
  typeName: oe.ZodUndefined,
  ...de(r)
});
class Xs extends he {
  _parse(e) {
    if (this._getType(e) !== K.null) {
      const n = this._getOrReturnCtx(e);
      return G(n, {
        code: L.invalid_type,
        expected: K.null,
        received: n.parsedType
      }), ae;
    }
    return ct(e.data);
  }
}
Xs.create = (r) => new Xs({
  typeName: oe.ZodNull,
  ...de(r)
});
class yi extends he {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ct(e.data);
  }
}
yi.create = (r) => new yi({
  typeName: oe.ZodAny,
  ...de(r)
});
class Ys extends he {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ct(e.data);
  }
}
Ys.create = (r) => new Ys({
  typeName: oe.ZodUnknown,
  ...de(r)
});
class Vt extends he {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return G(t, {
      code: L.invalid_type,
      expected: K.never,
      received: t.parsedType
    }), ae;
  }
}
Vt.create = (r) => new Vt({
  typeName: oe.ZodNever,
  ...de(r)
});
class Js extends he {
  _parse(e) {
    if (this._getType(e) !== K.undefined) {
      const n = this._getOrReturnCtx(e);
      return G(n, {
        code: L.invalid_type,
        expected: K.void,
        received: n.parsedType
      }), ae;
    }
    return ct(e.data);
  }
}
Js.create = (r) => new Js({
  typeName: oe.ZodVoid,
  ...de(r)
});
class Ct extends he {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== K.array)
      return G(t, {
        code: L.invalid_type,
        expected: K.array,
        received: t.parsedType
      }), ae;
    if (i.exactLength !== null) {
      const a = t.data.length > i.exactLength.value, o = t.data.length < i.exactLength.value;
      (a || o) && (G(t, {
        code: a ? L.too_big : L.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (G(t, {
      code: L.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (G(t, {
      code: L.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new Ht(t, a, t.path, o)))).then((a) => Je.mergeArray(n, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new Ht(t, a, t.path, o)));
    return Je.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Ct({
      ...this._def,
      minLength: { value: e, message: X.toString(t) }
    });
  }
  max(e, t) {
    return new Ct({
      ...this._def,
      maxLength: { value: e, message: X.toString(t) }
    });
  }
  length(e, t) {
    return new Ct({
      ...this._def,
      exactLength: { value: e, message: X.toString(t) }
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
  typeName: oe.ZodArray,
  ...de(e)
});
function ir(r) {
  if (r instanceof ke) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = Ft.create(ir(n));
    }
    return new ke({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof Ct ? new Ct({
    ...r._def,
    type: ir(r.element)
  }) : r instanceof Ft ? Ft.create(ir(r.unwrap())) : r instanceof fr ? fr.create(ir(r.unwrap())) : r instanceof Kt ? Kt.create(r.items.map((e) => ir(e))) : r;
}
class ke extends he {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = pe.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== K.object) {
      const c = this._getOrReturnCtx(e);
      return G(c, {
        code: L.invalid_type,
        expected: K.object,
        received: c.parsedType
      }), ae;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Vt && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const d = s[c], u = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: d._parse(new Ht(i, u, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof Vt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of o)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: i.data[d] }
          });
      else if (c === "strict")
        o.length > 0 && (G(i, {
          code: L.unrecognized_keys,
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
            new Ht(i, u, i.path, d)
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
    return X.errToObj, new ke({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          const i = this._def.errorMap?.(t, n).message ?? n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: X.errToObj(e).message ?? i
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
      typeName: oe.ZodObject
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
    for (const n of pe.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new ke({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const n of pe.objectKeys(this.shape))
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
    return ir(this);
  }
  partial(e) {
    const t = {};
    for (const n of pe.objectKeys(this.shape)) {
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
    for (const n of pe.objectKeys(this.shape))
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof Ft; )
          s = s._def.innerType;
        t[n] = s;
      }
    return new ke({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return yl(pe.objectKeys(this.shape));
  }
}
ke.create = (r, e) => new ke({
  shape: () => r,
  unknownKeys: "strip",
  catchall: Vt.create(),
  typeName: oe.ZodObject,
  ...de(e)
});
ke.strictCreate = (r, e) => new ke({
  shape: () => r,
  unknownKeys: "strict",
  catchall: Vt.create(),
  typeName: oe.ZodObject,
  ...de(e)
});
ke.lazycreate = (r, e) => new ke({
  shape: r,
  unknownKeys: "strip",
  catchall: Vt.create(),
  typeName: oe.ZodObject,
  ...de(e)
});
class Dn extends he {
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
      return G(t, {
        code: L.invalid_union,
        unionErrors: a
      }), ae;
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
      return G(t, {
        code: L.invalid_union,
        unionErrors: o
      }), ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
Dn.create = (r, e) => new Dn({
  options: r,
  typeName: oe.ZodUnion,
  ...de(e)
});
function bi(r, e) {
  const t = It(r), n = It(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === K.object && n === K.object) {
    const i = pe.objectKeys(e), s = pe.objectKeys(r).filter((o) => i.indexOf(o) !== -1), a = { ...r, ...e };
    for (const o of s) {
      const l = bi(r[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (t === K.array && n === K.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s], o = e[s], l = bi(a, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === K.date && n === K.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class Nn extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (Ws(s) || Ws(a))
        return ae;
      const o = bi(s.value, a.value);
      return o.valid ? ((Gs(s) || Gs(a)) && t.dirty(), { status: t.value, value: o.data }) : (G(n, {
        code: L.invalid_intersection_types
      }), ae);
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
Nn.create = (r, e, t) => new Nn({
  left: r,
  right: e,
  typeName: oe.ZodIntersection,
  ...de(t)
});
class Kt extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== K.array)
      return G(n, {
        code: L.invalid_type,
        expected: K.array,
        received: n.parsedType
      }), ae;
    if (n.data.length < this._def.items.length)
      return G(n, {
        code: L.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ae;
    !this._def.rest && n.data.length > this._def.items.length && (G(n, {
      code: L.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...n.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new Ht(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(s).then((a) => Je.mergeArray(t, a)) : Je.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Kt({
      ...this._def,
      rest: e
    });
  }
}
Kt.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Kt({
    items: r,
    typeName: oe.ZodTuple,
    rest: null,
    ...de(e)
  });
};
class Qs extends he {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== K.map)
      return G(n, {
        code: L.invalid_type,
        expected: K.map,
        received: n.parsedType
      }), ae;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, l], c) => ({
      key: i._parse(new Ht(n, o, n.path, [c, "key"])),
      value: s._parse(new Ht(n, l, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, d = await l.value;
          if (c.status === "aborted" || d.status === "aborted")
            return ae;
          (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return ae;
        (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
      }
      return { status: t.value, value: o };
    }
  }
}
Qs.create = (r, e, t) => new Qs({
  valueType: e,
  keyType: r,
  typeName: oe.ZodMap,
  ...de(t)
});
class Br extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== K.set)
      return G(n, {
        code: L.invalid_type,
        expected: K.set,
        received: n.parsedType
      }), ae;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (G(n, {
      code: L.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (G(n, {
      code: L.too_big,
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
          return ae;
        d.status === "dirty" && t.dirty(), c.add(d.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...n.data.values()].map((l, c) => s._parse(new Ht(n, l, n.path, c)));
    return n.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new Br({
      ...this._def,
      minSize: { value: e, message: X.toString(t) }
    });
  }
  max(e, t) {
    return new Br({
      ...this._def,
      maxSize: { value: e, message: X.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Br.create = (r, e) => new Br({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: oe.ZodSet,
  ...de(e)
});
class ea extends he {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
ea.create = (r, e) => new ea({
  getter: r,
  typeName: oe.ZodLazy,
  ...de(e)
});
class ta extends he {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return G(t, {
        received: t.data,
        code: L.invalid_literal,
        expected: this._def.value
      }), ae;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ta.create = (r, e) => new ta({
  value: r,
  typeName: oe.ZodLiteral,
  ...de(e)
});
function yl(r, e) {
  return new dr({
    values: r,
    typeName: oe.ZodEnum,
    ...de(e)
  });
}
class dr extends he {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return G(t, {
        expected: pe.joinValues(n),
        received: t.parsedType,
        code: L.invalid_type
      }), ae;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return G(t, {
        received: t.data,
        code: L.invalid_enum_value,
        options: n
      }), ae;
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
    return dr.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return dr.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
dr.create = yl;
class ra extends he {
  _parse(e) {
    const t = pe.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== K.string && n.parsedType !== K.number) {
      const i = pe.objectValues(t);
      return G(n, {
        expected: pe.joinValues(i),
        received: n.parsedType,
        code: L.invalid_type
      }), ae;
    }
    if (this._cache || (this._cache = new Set(pe.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = pe.objectValues(t);
      return G(n, {
        received: n.data,
        code: L.invalid_enum_value,
        options: i
      }), ae;
    }
    return ct(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ra.create = (r, e) => new ra({
  values: r,
  typeName: oe.ZodNativeEnum,
  ...de(e)
});
class Rn extends he {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== K.promise && t.common.async === !1)
      return G(t, {
        code: L.invalid_type,
        expected: K.promise,
        received: t.parsedType
      }), ae;
    const n = t.parsedType === K.promise ? t.data : Promise.resolve(t.data);
    return ct(n.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Rn.create = (r, e) => new Rn({
  type: r,
  typeName: oe.ZodPromise,
  ...de(e)
});
class ur extends he {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === oe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (a) => {
        G(n, a), a.fatal ? t.abort() : t.dirty();
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
            return ae;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? ae : l.status === "dirty" || t.value === "dirty" ? Cr(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return ae;
        const o = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? ae : o.status === "dirty" || t.value === "dirty" ? Cr(o.value) : o;
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
        return o.status === "aborted" ? ae : (o.status === "dirty" && t.dirty(), a(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? ae : (o.status === "dirty" && t.dirty(), a(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!cr(a))
          return ae;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => cr(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({
          status: t.value,
          value: o
        })) : ae);
    pe.assertNever(i);
  }
}
ur.create = (r, e, t) => new ur({
  schema: r,
  typeName: oe.ZodEffects,
  effect: e,
  ...de(t)
});
ur.createWithPreprocess = (r, e, t) => new ur({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: oe.ZodEffects,
  ...de(t)
});
class Ft extends he {
  _parse(e) {
    return this._getType(e) === K.undefined ? ct(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ft.create = (r, e) => new Ft({
  innerType: r,
  typeName: oe.ZodOptional,
  ...de(e)
});
class fr extends he {
  _parse(e) {
    return this._getType(e) === K.null ? ct(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
fr.create = (r, e) => new fr({
  innerType: r,
  typeName: oe.ZodNullable,
  ...de(e)
});
class xi extends he {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === K.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
xi.create = (r, e) => new xi({
  innerType: r,
  typeName: oe.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...de(e)
});
class wi extends he {
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
    return kn(i) ? i.then((s) => ({
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
wi.create = (r, e) => new wi({
  innerType: r,
  typeName: oe.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...de(e)
});
class na extends he {
  _parse(e) {
    if (this._getType(e) !== K.nan) {
      const n = this._getOrReturnCtx(e);
      return G(n, {
        code: L.invalid_type,
        expected: K.nan,
        received: n.parsedType
      }), ae;
    }
    return { status: "valid", value: e.data };
  }
}
na.create = (r) => new na({
  typeName: oe.ZodNaN,
  ...de(r)
});
class Sp extends he {
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
class ts extends he {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? ae : s.status === "dirty" ? (t.dirty(), Cr(s.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? ae : i.status === "dirty" ? (t.dirty(), {
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
    return new ts({
      in: e,
      out: t,
      typeName: oe.ZodPipeline
    });
  }
}
class _i extends he {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (i) => (cr(i) && (i.value = Object.freeze(i.value)), i);
    return kn(t) ? t.then((i) => n(i)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
_i.create = (r, e) => new _i({
  innerType: r,
  typeName: oe.ZodReadonly,
  ...de(e)
});
var oe;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(oe || (oe = {}));
const Dp = yi.create;
Vt.create;
Ct.create;
const Np = ke.create;
Dn.create;
Nn.create;
Kt.create;
dr.create;
Rn.create;
Ft.create;
fr.create;
function bl(r, e) {
  return async (t, n, i) => {
    const s = Rp(r, t), a = { ...t };
    for (const l of Object.keys(a))
      a[l] === null && (a[l] = void 0);
    return ep(s, e)(a, n, i);
  };
}
function Rp(r, e) {
  const n = Xi(r).shape, i = {};
  for (const [a, o] of Object.entries(n)) {
    const l = Yi(o);
    if (!l || !l.renderIf) {
      i[a] = o;
      continue;
    }
    $n(l.renderIf, e) ? i[a] = o : i[a] = Dp();
  }
  const s = Np(i);
  if (be(r, "ZodEffects")) {
    const o = r._def.effect;
    if (o.type === "refinement")
      return s.superRefine(o.refinement);
  }
  return s;
}
function Ap(r) {
  const e = gt(r);
  if (!be(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (i = s.value);
  return { min: n, max: i };
}
function ii(r) {
  const e = gt(r);
  if (!be(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: n, maxDate: i };
}
function Tp(r) {
  const e = gt(r);
  if (!be(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const i of t)
    i.kind === "max" && (n = i.value);
  return { maxLength: n };
}
function Op(r) {
  const e = gt(r);
  return be(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "email") : !1;
}
function Mp(r) {
  const e = gt(r);
  return be(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "url") : !1;
}
function ia(r) {
  return Op(r) ? "email" : Mp(r) ? "url" : "text";
}
function sa(r, e, t, n) {
  const i = {
    id: r,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    validation: e
  }, s = !fl(e);
  switch (n) {
    case "text": {
      const a = "inputType" in t && t.inputType ? t.inputType : ia(e);
      return {
        ...i,
        type: "text",
        inputType: a,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: a, max: o } = Ap(e);
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
      const { maxLength: a } = Tp(e);
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
      const a = ii(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = ii(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = ii(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
    case "file":
      return {
        ...i,
        type: "file",
        accept: "accept" in t ? t.accept : void 0,
        maxSizeMB: "maxSizeMB" in t ? t.maxSizeMB : void 0,
        multiple: "multiple" in t ? t.multiple : void 0,
        description: "description" in t ? t.description : void 0,
        useUpload: "useUpload" in t ? t.useUpload : void 0,
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
        inputType: ia(e),
        renderIf: t.renderIf
      };
  }
}
function An(r) {
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
          (l) => sa(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(o);
    } else {
      t.add(n);
      const a = sa(
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
function xl(r) {
  const e = r.shape, t = [], n = Object.entries(e);
  for (let i = 0; i < n.length; i++) {
    const [s, a] = n[i], o = Yi(a);
    if (o) {
      const l = ym(a, o);
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
function wl(r, e) {
  return Z(() => {
    const t = Xi(r), n = xl(t), i = [], s = {};
    for (const l of n) {
      const c = l.config.section;
      c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
    }
    i.sort((l, c) => l.position - c.position);
    for (const l of Object.keys(s))
      s[l].sort((c, d) => c.position - d.position);
    const a = [];
    a.push(...An(i));
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
          fields: An(d)
        }
      };
      a.push(u);
    }
    return a;
  }, [r, e]);
}
function Gg(r, e) {
  const t = Xi(r), n = xl(t), i = [], s = {};
  for (const l of n) {
    const c = l.config.section;
    c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
  }
  i.sort((l, c) => l.position - c.position);
  for (const l of Object.keys(s))
    s[l].sort((c, d) => c.position - d.position);
  const a = [];
  a.push(...An(i));
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
        fields: An(d)
      }
    };
    a.push(u);
  }
  return a;
}
function _l(r) {
  const { validation: e } = r.forms;
  return (t, n) => {
    switch (t.code) {
      case L.invalid_type:
        return t.received === "undefined" || t.received === "null" ? { message: e.required } : { message: e.invalidType };
      case L.invalid_string:
        if (t.validation === "email")
          return { message: e.string.email };
        if (t.validation === "url")
          return { message: e.string.url };
        break;
      case L.too_small:
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
      case L.too_big:
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
      case L.invalid_date:
        return { message: e.date.invalid };
      case L.not_multiple_of:
        if (t.multipleOf === 1)
          return { message: e.number.integer };
        break;
      case L.invalid_literal:
        if (t.expected === !0)
          return { message: e.checkbox.mustBeChecked };
        break;
    }
    return { message: n.defaultError };
  };
}
const Lp = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Ip(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({ type: "switchGroup", fields: [...t] }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({ type: "field", item: i }) : i.type === "row" && e.push({ type: "row", item: i, index: s }));
  }), n(), e;
}
function Pp({
  formName: r,
  sectionId: e,
  schema: t,
  sectionConfig: n,
  defaultValues: i,
  onValuesChange: s,
  onSubmit: a,
  submitConfig: o,
  errorTriggerMode: l,
  className: c,
  initialFiles: d
}) {
  const u = Xt(), h = wl(t), m = o?.label ?? "Submit", g = o?.icon === null ? void 0 : o?.icon ?? ya, y = o?.showSubmitWhenDirty ?? !1, k = Z(() => _l(u), [u]), R = Lp[l], D = Z(
    () => bl(t, { errorMap: k }),
    [t, k]
  ), x = Jo({
    resolver: D,
    mode: R,
    defaultValues: i,
    ...i !== void 0 && {
      values: i
    }
  }), A = x.watch();
  ee(() => {
    s?.(A);
  }, [A, s]);
  const v = x.formState.errors.root, { isSubmitting: C, isDirty: _ } = x.formState, O = Object.keys(x.formState.errors).filter((H) => H !== "root").length > 0, V = ne(
    async (H) => {
      const z = { ...H };
      for (const U of Object.keys(z))
        z[U] === null && (z[U] = void 0);
      const q = await a(z);
      q.success ? x.reset(H) : (q.errors && Object.entries(q.errors).forEach(([U, le]) => {
        x.setError(U, { message: le });
      }), q.rootMessage && x.setError("root", { message: q.rootMessage }));
    },
    [a, x]
  ), I = Ip(h), T = Z(
    () => ({ formName: r, initialFiles: d }),
    [r, d]
  ), S = n?.title ?? e, M = n?.description;
  return /* @__PURE__ */ f(qi.Provider, { value: T, children: /* @__PURE__ */ f(tl, { ...x, children: /* @__PURE__ */ j(
    "form",
    {
      onSubmit: x.handleSubmit(V),
      className: se("flex flex-col", c),
      children: [
        /* @__PURE__ */ j(
          "div",
          {
            className: se(
              "flex items-start justify-between py-5",
              "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
            ),
            children: [
              /* @__PURE__ */ f(Ta, { title: S, description: M ?? "" }),
              n?.action && /* @__PURE__ */ f(
                Ge,
                {
                  label: n.action.label,
                  icon: n.action.icon,
                  onClick: n.action.onClick,
                  href: n.action.href,
                  variant: "outline",
                  size: "md"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ f("div", { className: `flex flex-col ${Zi}`, children: I.map((H, z) => {
          switch (H.type) {
            case "switchGroup":
              return /* @__PURE__ */ f(
                es,
                {
                  fields: H.fields,
                  sectionId: e
                },
                `switch-group-${z}`
              );
            case "field":
              return /* @__PURE__ */ f(
                Wn,
                {
                  field: H.item.field,
                  sectionId: e
                },
                H.item.field.id
              );
            case "row":
              return /* @__PURE__ */ f(
                Qi,
                {
                  row: H.item,
                  sectionId: e
                },
                `row-${H.index}`
              );
            default:
              return null;
          }
        }) }),
        v && /* @__PURE__ */ f("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: v.message }),
        (!y || _) && /* @__PURE__ */ f("div", { className: "mt-4", children: /* @__PURE__ */ f(
          Ge,
          {
            type: "submit",
            label: m,
            icon: g,
            loading: C,
            disabled: O
          }
        ) })
      ]
    }
  ) }) });
}
function zp(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({ type: "switchGroup", fields: [...t] }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({ type: "field", item: i }) : i.type === "row" && e.push({ type: "row", item: i, index: s }));
  }), n(), e;
}
function Fp({ section: r }) {
  const t = $t().watch(), { formName: n } = Ki(), { title: i, description: s, renderIf: a, action: o, fields: l } = r.section, c = r.id;
  if (a && !$n(a, t))
    return null;
  const d = zp(l), u = qt(n, c);
  return /* @__PURE__ */ j("section", { id: u, className: "flex flex-col scroll-mt-4", children: [
    /* @__PURE__ */ j(
      "div",
      {
        className: se(
          "flex items-start justify-between py-5",
          "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
        ),
        children: [
          /* @__PURE__ */ f(Ta, { title: i, description: s ?? "" }),
          o && /* @__PURE__ */ f(
            Ge,
            {
              label: o.label,
              icon: o.icon,
              onClick: o.onClick,
              href: o.href,
              variant: "outline",
              size: "md"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ f("div", { className: `flex flex-col ${Zi}`, children: d.map((h, m) => h.type === "switchGroup" ? /* @__PURE__ */ f(
      es,
      {
        fields: h.fields,
        sectionId: c
      },
      `switch-group-${m}`
    ) : h.type === "field" ? /* @__PURE__ */ f(
      Wn,
      {
        field: h.item.field,
        sectionId: c
      },
      h.item.field.id
    ) : h.type === "row" ? /* @__PURE__ */ f(
      Qi,
      {
        row: h.item,
        sectionId: c
      },
      `row-${h.index}`
    ) : null) })
  ] });
}
function aa(r) {
  const e = document.getElementById(r);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function Bp({
  formName: r,
  errors: e
}) {
  const t = Object.keys(e).filter((h) => h !== "root"), n = t.length > 0, i = t.length, [s, a] = re(0), o = Q([]);
  ee(() => {
    const h = t, m = o.current, g = h.find(
      (y) => !m.includes(y)
    );
    if (g) {
      const y = qt(r, void 0, g);
      aa(y);
      const k = h.indexOf(g);
      k !== -1 && a(k);
    }
    o.current = h;
  }, [t, r]);
  const l = ne(
    (h) => {
      if (t.length === 0) return;
      const m = (h % t.length + t.length) % t.length;
      a(m);
      const g = t[m], y = qt(r, void 0, g);
      aa(y);
    },
    [t, r]
  ), c = ne(() => {
    l(s - 1);
  }, [s, l]), d = ne(() => {
    l(s + 1);
  }, [s, l]), u = ne(() => {
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
function Hp(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({ type: "switchGroup", fields: [...t] }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({ type: "field", item: i }) : i.type === "row" ? e.push({ type: "row", item: i, index: s }) : i.type === "section" && e.push({ type: "section", item: i }));
  }), n(), e;
}
function Vp(r) {
  if (typeof r != "object" || r === null) return !1;
  const t = r._def;
  return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
const jp = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function $p(r) {
  const {
    name: e,
    schema: t,
    sections: n,
    defaultValues: i,
    onValuesChange: s,
    onSubmit: a,
    submitConfig: o,
    className: l,
    errorTriggerMode: c = "on-blur",
    styling: d,
    initialFiles: u
  } = r, h = d?.showSectionsSidepanel ?? !1, m = Z(() => Object.keys(t), [t]), g = ne(
    (x) => {
      const A = qt(e, x), v = document.getElementById(A);
      v && v.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [e]
  ), [y, k] = re(
    m[0]
  ), R = Z(() => !n || !h ? [] : m.map((x) => ({
    id: x,
    label: n[x]?.title ?? x,
    onClick: () => {
      k(x), g(x);
    }
  })), [n, m, h, g]), D = /* @__PURE__ */ f("div", { className: se("flex w-full flex-col", cl, l), children: m.map((x, A) => {
    const v = t[x], C = n?.[x], _ = i?.[x], O = C?.submitConfig ?? o;
    return /* @__PURE__ */ f(
      "div",
      {
        id: qt(e, x),
        className: se("scroll-mt-4", A !== 0 && ll),
        children: /* @__PURE__ */ f(
          Pp,
          {
            formName: e,
            sectionId: x,
            schema: v,
            sectionConfig: C,
            defaultValues: _,
            onValuesChange: s ? (V) => s(x, V) : void 0,
            onSubmit: (V) => a(x, V),
            submitConfig: O,
            errorTriggerMode: c,
            initialFiles: u
          }
        )
      },
      x
    );
  }) });
  return h && R.length > 0 ? /* @__PURE__ */ j("div", { className: "flex w-full gap-4", children: [
    /* @__PURE__ */ f("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ f(
      Di,
      {
        items: R,
        activeItem: y,
        scrollable: !1
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "w-px bg-f1-border-secondary" }),
    /* @__PURE__ */ f("div", { className: "flex flex-1 justify-center", children: D })
  ] }) : D;
}
function Wp(r) {
  return Vp(r.schema) ? /* @__PURE__ */ f(
    Gp,
    {
      ...r
    }
  ) : /* @__PURE__ */ f(
    $p,
    {
      ...r
    }
  );
}
function Gp(r) {
  const e = Xt(), { forms: t } = e, {
    name: n,
    schema: i,
    sections: s,
    defaultValues: a,
    onValuesChange: o,
    onSubmit: l,
    submitConfig: c,
    className: d,
    errorTriggerMode: u = "on-blur",
    styling: h,
    formRef: m
  } = r, g = h?.showSectionsSidepanel ?? !1, y = c?.type === "action-bar", k = c?.label ?? "Submit", R = c?.icon === null ? void 0 : c?.icon ?? ya, D = c?.type !== "action-bar" && c?.hideSubmitButton, x = !y && !D, A = c?.type === "action-bar" && c?.discardable, v = y ? c?.discardConfig : void 0, C = v?.label ?? t.actionBar.discard, _ = v?.icon === null ? void 0 : v?.icon ?? rc, O = y ? c?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, V = c?.savingMessage ?? t.actionBar.saving, I = y && !!c?.centerActionBarInFrameContent, T = wl(i, s), S = Z(() => T.filter((N) => N.type === "section").map((N) => N.id), [T]), [M, H] = re(
    S[0]
  ), z = ne(
    (N) => {
      H(N);
      const $ = qt(n, N), Y = document.getElementById($);
      Y && Y.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [n]
  ), q = Z(() => !s || !g ? [] : S.map((N) => ({
    id: N,
    label: s[N]?.title ?? N,
    onClick: () => z(N)
  })), [s, S, g, z]), U = Z(() => _l(e), [e]), le = jp[u], ce = Z(
    () => bl(i, { errorMap: U }),
    [i, U]
  ), ue = Jo({
    resolver: ce,
    mode: le,
    defaultValues: a,
    ...a !== void 0 && {
      values: a
    }
  }), Qe = ue.formState.errors.root, { isDirty: we, isSubmitting: Re, errors: Ve } = ue.formState, et = ue.watch();
  ee(() => {
    o?.(et);
  }, [et, o]);
  const [xe, Oe] = re("idle"), [Ae, Ee] = re(), ie = Q(null), {
    hasErrors: Me,
    errorCount: Le,
    goToPreviousError: Ze,
    goToNextError: Ie,
    resetErrorNavigation: je
  } = Bp({
    formName: n,
    errors: Ve
  }), dt = (() => {
    if (!Me)
      return xe === "loading" ? V : xe === "success" ? Ae ?? t.actionBar.saved : O;
  })(), kt = async (N) => {
    ie.current && (clearTimeout(ie.current), ie.current = null), Sc(() => {
      Oe("loading");
    });
    const $ = { ...N };
    for (const ge of Object.keys($))
      $[ge] === null && ($[ge] = void 0);
    const Y = await l($);
    Y.success ? (ue.reset(N), je(), Ee(Y.message), Oe("success"), ie.current = setTimeout(() => {
      Oe("idle"), Ee(void 0), ie.current = null;
    }, 3e3)) : (Oe("idle"), Y.errors && Object.entries(Y.errors).forEach(([ge, ve]) => {
      ue.setError(ge, { message: ve });
    }), Y.rootMessage && ue.setError("root", { message: Y.rootMessage }));
  };
  ee(() => () => {
    ie.current && clearTimeout(ie.current);
  }, []), ee(() => {
    we && xe === "success" && (ie.current && (clearTimeout(ie.current), ie.current = null), Oe("idle"), Ee(void 0));
  }, [we, xe]);
  const p = () => {
    ue.reset(), je(), Oe("idle"), Ee(void 0), ie.current && (clearTimeout(ie.current), ie.current = null);
  }, b = Q(null);
  ee(() => {
    if (m) {
      const N = {
        submit: () => new Promise(($, Y) => {
          ue.handleSubmit(
            async (ge) => {
              await kt(ge), $();
            },
            () => {
              Y(new Error("Form validation failed"));
            }
          )();
        }),
        reset: () => {
          ue.reset(), je();
        },
        isDirty: () => ue.formState.isDirty,
        _setStateCallback: ($) => {
          b.current = $;
        }
      };
      m.current = N;
    }
    return () => {
      m && (m.current = null);
    };
  }, [m, ue, je]), ee(() => {
    b.current && b.current({
      isSubmitting: Re,
      hasErrors: Me
    });
  }, [Re, Me]);
  const E = Hp(T), F = Z(
    () => ({ formName: n, initialFiles: r.initialFiles }),
    [n, r.initialFiles]
  ), P = /* @__PURE__ */ j(
    "form",
    {
      onSubmit: ue.handleSubmit(kt),
      className: se("flex flex-col", cl, d),
      children: [
        E.map((N, $) => {
          const Y = $ !== 0 && N.type !== "section" ? "mt-4" : "";
          switch (N.type) {
            case "switchGroup":
              return /* @__PURE__ */ f("div", { className: Y, children: /* @__PURE__ */ f(es, { fields: N.fields }) }, `switch-group-${$}`);
            case "field":
              return /* @__PURE__ */ f("div", { className: Y, children: /* @__PURE__ */ f(Wn, { field: N.item.field }) }, N.item.field.id);
            case "row":
              return /* @__PURE__ */ f("div", { className: Y, children: /* @__PURE__ */ f(Qi, { row: N.item }) }, `row-${N.index}`);
            case "section":
              return /* @__PURE__ */ f(
                "div",
                {
                  className: $ !== 0 ? ll : "",
                  children: /* @__PURE__ */ f(Fp, { section: N.item })
                },
                N.item.id
              );
            default:
              return null;
          }
        }),
        Qe && /* @__PURE__ */ f("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: Qe.message }),
        !y && x && /* @__PURE__ */ f("div", { className: "mt-4", children: /* @__PURE__ */ f(
          Ge,
          {
            type: "submit",
            label: k,
            icon: R,
            loading: Re,
            disabled: Me
          }
        ) })
      ]
    }
  );
  return /* @__PURE__ */ f(qi.Provider, { value: F, children: /* @__PURE__ */ j(tl, { ...ue, children: [
    g && q.length > 0 ? /* @__PURE__ */ j("div", { className: "flex w-full gap-4", children: [
      /* @__PURE__ */ f("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ f(
        Di,
        {
          items: q,
          activeItem: M,
          scrollable: !1
        }
      ) }),
      /* @__PURE__ */ f("div", { className: "w-px bg-f1-border-secondary" }),
      /* @__PURE__ */ f("div", { className: "flex flex-1 justify-center", children: P })
    ] }) : P,
    /* @__PURE__ */ f(
      vm,
      {
        isActionBar: y,
        isDirty: we,
        actionBarStatus: xe,
        hasErrors: Me,
        errorCount: Le,
        resolvedActionBarLabel: dt,
        centerActionBarInFrameContent: I,
        submitLabel: k,
        submitIcon: R,
        discardableChanges: A,
        discardLabel: C,
        discardIcon: _,
        issuesOneLabel: t.actionBar.issues.one,
        issuesOtherLabel: t.actionBar.issues.other,
        onSubmit: ue.handleSubmit(kt),
        onDiscard: p,
        goToPreviousError: Ze,
        goToNextError: Ie
      }
    )
  ] }) });
}
function Ug() {
  const [r, e] = re(!1), [t, n] = re(!1), i = Q((d) => {
    e(d.isSubmitting), n(d.hasErrors);
  }), s = Q(null), a = Q({
    get current() {
      return s.current;
    },
    set current(d) {
      s.current = d, d && d._setStateCallback(i.current);
    }
  }), o = ne(async () => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return s.current.submit();
  }, []), l = ne(() => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    s.current.reset();
  }, []), c = ne(() => s.current ? s.current.isDirty() : !1, []);
  return {
    formRef: a.current,
    submit: o,
    reset: l,
    isDirty: c,
    isSubmitting: r,
    hasErrors: t
  };
}
const Zg = at("F0Form", Wp), Cl = Ue((r, e) => /* @__PURE__ */ f(Ti, { ref: e, variant: "heading", ...r }));
Cl.displayName = "F0Heading";
const qg = me(Cl), Kg = me(md), Xg = me(
  at(
    "F0GridStack",
    Ai
  )
), si = 16, Up = jt({
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
  compoundVariants: [
    {
      variant: "light",
      active: !1,
      className: "bg-f1-foreground-tertiary opacity-60"
    },
    {
      variant: "dark",
      active: !1,
      className: "opacity-50"
    }
  ],
  defaultVariants: {
    depth: 3,
    variant: "light",
    active: !0
  }
});
function El(r, e = 0) {
  return r.flatMap((t) => [
    { id: t.id, depth: Math.min(e, 3) },
    ...t.children ? El(t.children, e + 1) : []
  ]);
}
function Zp(r, e) {
  const t = r.length;
  if (t <= si) return r;
  const n = t / (si - 1), i = new Set(
    Array.from(
      { length: si - 1 },
      (s, a) => Math.min(Math.floor(a * n), t - 1)
    )
  );
  if (i.add(t - 1), e) {
    const s = r.findIndex((a) => a.id === e);
    if (s !== -1 && !i.has(s)) {
      const a = [...i].reduce(
        (o, l) => Math.abs(l - s) < Math.abs(o - s) ? l : o
      );
      i.delete(a), i.add(s);
    }
  }
  return [...i].sort((s, a) => s - a).map((s) => r[s]);
}
function qp({
  items: r,
  activeItem: e,
  className: t,
  align: n = "left",
  variant: i = "dark"
}) {
  const s = Z(
    () => Zp(El(r), e),
    [r, e]
  );
  return /* @__PURE__ */ f(
    "div",
    {
      className: se(
        "flex flex-col justify-center gap-2 py-3",
        n === "right" ? "items-end" : "items-start",
        t
      ),
      children: s.map((a) => /* @__PURE__ */ f(
        "div",
        {
          className: Up({
            depth: a.depth,
            variant: i,
            active: a.id === e
          })
        },
        a.id
      ))
    }
  );
}
const Kp = 300, Xp = 0, Yp = jt({
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
function Jp({
  title: r,
  items: e,
  className: t,
  activeItem: n,
  collapsible: i = !1,
  showChildrenCounter: s = !1,
  barsAlign: a = "left",
  size: o = "md",
  variant: l = "light"
}) {
  const [c, d] = re(!1), u = Q(!1), h = (g) => {
    g && !c && (u.current = !0), d(g);
  }, m = ne((g) => {
    !g || !u.current || (u.current = !1, requestAnimationFrame(() => {
      g.querySelector("[data-active]")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }, []);
  return /* @__PURE__ */ j(
    pd,
    {
      open: c,
      onOpenChange: h,
      openDelay: Xp,
      closeDelay: Kp,
      children: [
        /* @__PURE__ */ f(gd, { asChild: !0, children: /* @__PURE__ */ f(
          "button",
          {
            className: se(
              ki(),
              "flex cursor-pointer items-center rounded-md px-1.5 py-1",
              t
            ),
            "aria-label": r ?? "Menu",
            children: /* @__PURE__ */ f(
              qp,
              {
                items: e,
                activeItem: n,
                align: a,
                variant: l
              }
            )
          }
        ) }),
        /* @__PURE__ */ f(
          vd,
          {
            ref: m,
            side: a === "left" ? "right" : "left",
            align: "center",
            sideOffset: -28,
            className: se(
              Yp({ size: o }),
              !r && "pt-2",
              "scrollbar-macos"
            ),
            children: /* @__PURE__ */ f(
              Di,
              {
                title: r,
                items: e,
                activeItem: n,
                collapsible: i,
                hideChildrenCounter: !s,
                scrollable: !1
              }
            )
          }
        )
      ]
    }
  );
}
const Yg = me(
  at(
    "F0TableOfContentPopover",
    Jp
  )
), Qp = ({ benefits: r }) => /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: r.map((e, t) => /* @__PURE__ */ f(eg, { text: e }, t)) }), eg = ({ text: r }) => /* @__PURE__ */ j("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ f(Hr, { icon: ic, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ f("span", { children: r })
] }), kl = Ue(
  ({
    title: r,
    image: e,
    benefits: t,
    actions: n,
    withShadow: i = !0,
    module: s,
    moduleName: a,
    tag: o,
    promoTag: l
  }, c) => /* @__PURE__ */ j(
    "div",
    {
      ref: c,
      className: se(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        i && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ f("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ f(
          "img",
          {
            src: e,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ j("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ j("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ j("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ j("div", { className: "flex flex-row items-center gap-2", children: [
                s && /* @__PURE__ */ f(ba, { module: s }),
                a && /* @__PURE__ */ f("p", { className: "text-base font-medium text-f1-foreground", children: a })
              ] }),
              (o || l) && /* @__PURE__ */ j("div", { className: "flex justify-start gap-2", children: [
                o && /* @__PURE__ */ f(nc, { icon: o.icon, text: o.label }),
                l && /* @__PURE__ */ f(
                  yd,
                  {
                    variant: l.variant || "positive",
                    text: l.label
                  }
                )
              ] }),
              /* @__PURE__ */ f("h2", { className: "font-bold text-xl text-f1-foreground", children: r })
            ] }),
            /* @__PURE__ */ f(Qp, { benefits: t })
          ] }),
          n && /* @__PURE__ */ f("div", { className: "flex gap-3", children: n })
        ] })
      ]
    }
  )
);
kl.displayName = "ProductBlankslate";
const tg = me(kl);
function rg({
  isOpen: r,
  onClose: e,
  title: t,
  children: n,
  module: i,
  portalContainer: s
}) {
  const [a, o] = re(r);
  return ee(() => {
    o(r);
  }, [r]), /* @__PURE__ */ f(sc, { open: a, onOpenChange: (c) => {
    o(c), c || e();
  }, modal: !0, children: /* @__PURE__ */ j(
    ac,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [
        /* @__PURE__ */ j("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ j(oc, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            i && /* @__PURE__ */ f(ba, { module: i, size: "lg" }),
            t
          ] }),
          /* @__PURE__ */ f(
            Ei,
            {
              variant: "outline",
              icon: Si,
              onClick: e,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ j(ma, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          n,
          /* @__PURE__ */ f(
            pa,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      ]
    }
  ) });
}
function ng({
  isOpen: r,
  onClose: e,
  title: t,
  image: n,
  benefits: i,
  errorMessage: s,
  successMessage: a,
  loadingState: o,
  nextSteps: l,
  closeLabel: c,
  primaryAction: d,
  modalTitle: u,
  modalModule: h,
  secondaryAction: m,
  portalContainer: g,
  tag: y,
  promoTag: k,
  showResponseDialog: R = !0
}) {
  const [D, x] = re(r), [A, v] = re(null), [C, _] = re(!1), O = async () => {
    if (d?.onClick) {
      _(!0);
      try {
        await d.onClick(), x(!1), R && v("success");
      } catch {
        R && v("error");
      } finally {
        _(!1);
      }
    }
  }, V = () => {
    x(!1), e?.();
  }, I = C;
  return /* @__PURE__ */ j(Vr, { children: [
    /* @__PURE__ */ f(
      rg,
      {
        isOpen: D,
        onClose: V,
        title: u,
        module: h,
        portalContainer: g,
        children: /* @__PURE__ */ f("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ f(
          tg,
          {
            title: t,
            image: n,
            benefits: i,
            withShadow: !1,
            tag: y,
            promoTag: k,
            actions: /* @__PURE__ */ j("div", { className: "flex gap-3", children: [
              d && /* @__PURE__ */ f(
                Ge,
                {
                  variant: d.variant,
                  label: I ? o.label : d.label,
                  icon: d.icon || void 0,
                  onClick: O,
                  loading: d.loading,
                  size: d.size
                }
              ),
              m && /* @__PURE__ */ f(
                Ge,
                {
                  onClick: m.onClick,
                  label: m.label,
                  variant: m.variant,
                  size: m.size,
                  icon: m.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    A && R && /* @__PURE__ */ f(
      Oa,
      {
        open: !0,
        onClose: () => {
          V(), v(null);
        },
        success: A === "success",
        errorMessage: s,
        successMessage: a,
        nextSteps: l,
        closeLabel: c,
        portalContainer: g
      }
    )
  ] });
}
const Jg = me(ng);
function ig({
  mediaUrl: r,
  title: e,
  description: t,
  onClose: n,
  dismissible: i,
  width: s,
  trackVisibility: a,
  actions: o,
  showConfirmation: l = !0
}) {
  const [c, d] = re(!1), u = () => {
    d(!0), n && n();
  };
  ee(() => {
    a && a(!c);
  }, [a, c]);
  const h = r?.includes(".mp4");
  return /* @__PURE__ */ f(Vr, { children: c ? null : /* @__PURE__ */ j(lc, { style: { width: s }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ j(cc, { children: [
      i && /* @__PURE__ */ f("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ f(
        Ge,
        {
          variant: "ghost",
          icon: Si,
          size: "sm",
          hideLabel: !0,
          onClick: u,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ j("div", { children: [
        /* @__PURE__ */ f("div", { children: r && (h ? /* @__PURE__ */ f(
          "video",
          {
            src: r,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ f(
          "img",
          {
            src: r,
            alt: e,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ j("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ f(En, { className: "text-lg font-medium", children: e }),
          /* @__PURE__ */ f(En, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    o && /* @__PURE__ */ f(dc, { className: "p-3", children: o.map(
      (m) => m.type === "upsell" ? /* @__PURE__ */ f(
        Ma,
        {
          label: m.label,
          onRequest: m.onClick,
          errorMessage: m.errorMessage,
          successMessage: m.successMessage,
          loadingState: m.loadingState,
          nextSteps: m.nextSteps,
          closeLabel: m.closeLabel,
          showConfirmation: l && m.showConfirmation,
          variant: m.variant
        },
        m.label
      ) : /* @__PURE__ */ f(
        Ge,
        {
          label: m.label,
          onClick: m.onClick,
          variant: m.variant
        },
        m.label
      )
    ) })
  ] }) });
}
const sg = me(ig), Sl = Ue(
  function({ primaryAction: e, secondaryAction: t, ...n }, i) {
    const s = (l) => l.variant === "promote" ? /* @__PURE__ */ f(
      Ma,
      {
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
      }
    ) : /* @__PURE__ */ f(
      Ge,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), a = e?.variant !== "promote" ? e : void 0, o = t?.variant !== "promote" ? t : void 0;
    return /* @__PURE__ */ j(
      bd,
      {
        ref: i,
        ...n,
        primaryAction: a,
        secondaryAction: o,
        children: [
          e?.variant === "promote" && s(e),
          t?.variant === "promote" && s(t)
        ]
      }
    );
  }
);
Sl.displayName = "UpsellingBanner";
const Qg = me(Sl);
function ag({
  isOpen: r,
  setIsOpen: e,
  label: t,
  variant: n = "promote",
  size: i = "md",
  showIcon: s = !0,
  side: a = "right",
  align: o = "center",
  icon: l = uc,
  mediaUrl: c,
  title: d,
  description: u,
  width: h = "300px",
  trackVisibility: m,
  actions: g,
  onClick: y,
  hideLabel: k = !1
}) {
  const [R, D] = re(!1), [x, A] = re(null), [v, C] = re(null), _ = (S) => {
    e(S), y && y();
  }, O = async (S) => {
    if (S.type === "upsell") {
      C(S);
      try {
        await S.onClick(), S.showConfirmation && (D(!0), A("success"));
      } catch {
        D(!0), A("error");
      }
    }
  }, V = () => {
    A(null), D(!1), C(null), e(!1);
  }, I = r && !R, T = g?.map((S) => S.type === "upsell" ? {
    ...S,
    onClick: () => O(S)
  } : S);
  return /* @__PURE__ */ j(Vr, { children: [
    /* @__PURE__ */ j(ua, { open: I, onOpenChange: _, children: [
      /* @__PURE__ */ f(fa, { asChild: !0, children: /* @__PURE__ */ f(
        Ge,
        {
          variant: n,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(r),
          hideLabel: k
        }
      ) }),
      /* @__PURE__ */ f(
        ha,
        {
          side: a,
          align: o,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ f(
            sg,
            {
              mediaUrl: c,
              title: d,
              description: u,
              onClose: () => e(!1),
              dismissible: !1,
              width: h,
              trackVisibility: m,
              actions: T,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    v?.type === "upsell" && v.showConfirmation && x && /* @__PURE__ */ f(
      Oa,
      {
        open: !0,
        onClose: V,
        success: x === "success",
        errorMessage: v.errorMessage,
        successMessage: v.successMessage,
        nextSteps: v.nextSteps,
        closeLabel: v.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const ev = me(ag), og = Et(
  null
), lg = ({ children: r, fullScreen: e = !0 }) => {
  const t = Q(null), [n, i] = re(t.current);
  return yc(() => {
    i(t.current);
  }, []), /* @__PURE__ */ f(og.Provider, { value: { element: n }, children: /* @__PURE__ */ f(
    "div",
    {
      ref: t,
      id: "f0-layout",
      className: se({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: r
    }
  ) });
}, cg = ({
  children: r
}) => /* @__PURE__ */ f(_d, { reducedMotion: "user", children: r }), tv = ({
  children: r,
  layout: e,
  link: t,
  privacyModeInitiallyEnabled: n,
  image: i,
  i18n: s,
  l10n: a,
  isDev: o = !1,
  dataCollectionStorageHandler: l,
  showExperimentalWarnings: c = !1,
  renderDataTestIdAttribute: d = !1
}) => /* @__PURE__ */ f(cg, { children: /* @__PURE__ */ f(
  fc,
  {
    isDev: o,
    showExperimentalWarnings: c,
    renderDataTestIdAttribute: d,
    children: /* @__PURE__ */ f(hc, { ...a, children: /* @__PURE__ */ f(mc, { ...s, children: /* @__PURE__ */ f(pc, { ...t, children: /* @__PURE__ */ f(lg, { ...e, children: /* @__PURE__ */ f(gc, { children: /* @__PURE__ */ f(
      xd,
      {
        initiallyEnabled: n,
        children: /* @__PURE__ */ f(vc, { ...i, children: /* @__PURE__ */ f(
          wd,
          {
            handler: l,
            children: r
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), oa = (r) => `datacollection-${r}`, rv = {
  get: async (r) => JSON.parse(
    localStorage.getItem(oa(r)) ?? "{}"
  ),
  set: async (r, e) => {
    localStorage.setItem(oa(r), JSON.stringify(e));
  }
};
export {
  sv as A,
  Hy as AiChatTranslationsProvider,
  wg as AreaChart,
  av as Await,
  _g as BarChart,
  ov as Blockquote,
  Cg as CategoryBarChart,
  lv as ChatSpinner,
  Ng as ComboChart,
  gg as Dashboard,
  by as DndProvider,
  cv as Em,
  dv as EmojiImage,
  uv as F0ActionItem,
  fv as F0AiChat,
  hv as F0AiChatProvider,
  mv as F0AiChatTextArea,
  pv as F0AiCollapsibleMessage,
  gv as F0AiFullscreenChat,
  Vg as F0Alert,
  Vy as F0AuraVoiceAnimation,
  vv as F0Avatar,
  cd as F0AvatarAlert,
  yv as F0AvatarCompany,
  xy as F0AvatarDate,
  bv as F0AvatarEmoji,
  ec as F0AvatarFile,
  Vl as F0AvatarIcon,
  wy as F0AvatarList,
  ba as F0AvatarModule,
  xv as F0AvatarPerson,
  wv as F0AvatarTeam,
  Rg as F0BigNumber,
  Ag as F0Box,
  Ge as F0Button,
  _v as F0ButtonDropdown,
  Cv as F0ButtonToggle,
  _y as F0Card,
  Kl as F0Checkbox,
  Bg as F0ChipList,
  Aa as F0DatePicker,
  Ev as F0Dialog,
  kv as F0DialogContext,
  Sv as F0DialogProvider,
  Dv as F0EventCatcherProvider,
  jg as F0FilterPickerContent,
  Zg as F0Form,
  Xg as F0GridStack,
  jy as F0HILActionConfirmation,
  qg as F0Heading,
  Hr as F0Icon,
  $l as F0Link,
  Nv as F0MessageSources,
  Rv as F0OneIcon,
  Av as F0OneSwitch,
  tv as F0Provider,
  sr as F0Select,
  Yg as F0TableOfContentPopover,
  Cy as F0TagAlert,
  ld as F0TagBalance,
  Ey as F0TagCompany,
  Tv as F0TagDot,
  ky as F0TagList,
  Sy as F0TagPerson,
  nc as F0TagRaw,
  yd as F0TagStatus,
  Dy as F0TagTeam,
  qd as F0Text,
  Ov as F0Thinking,
  Mv as FullscreenChatContext,
  Lv as GROUP_ID_SYMBOL,
  Iv as H1,
  Pv as H2,
  zv as H3,
  xg as HomeLayout,
  Fv as Hr,
  Bv as Image,
  vg as Layout,
  Hv as Li,
  Eg as LineChart,
  Vv as Ol,
  jv as OneFilterPicker,
  $v as P,
  kg as PieChart,
  Wv as Pre,
  xd as PrivacyModeProvider,
  tg as ProductBlankslate,
  Ny as ProductCard,
  Jg as ProductModal,
  sg as ProductWidget,
  Dg as ProgressBarChart,
  yg as StandardLayout,
  Gv as Strong,
  Uv as Table,
  Kg as Tag,
  Ry as TagCounter,
  Zv as Td,
  qv as Th,
  bg as TwoColumnLayout,
  Kv as Ul,
  Oa as UpsellRequestResponseDialog,
  Qg as UpsellingBanner,
  Ma as UpsellingButton,
  ev as UpsellingPopover,
  Sg as VerticalBarChart,
  $y as actionItemStatuses,
  Wy as aiTranslations,
  pg as avatarVariants,
  Xv as buildTranslations,
  Lg as buttonDropdownSizes,
  Mg as buttonDropdownVariants,
  Og as buttonSizes,
  Ig as buttonToggleSizes,
  Pg as buttonToggleVariants,
  Tg as buttonVariants,
  Ay as cardImageFits,
  Ty as cardImageSizes,
  Oy as createAtlaskitDriver,
  Yv as createDataSourceDefinition,
  $d as createPageLayoutBlock,
  Wd as createPageLayoutBlockGroup,
  rv as dataCollectionLocalStorageHandler,
  Hg as datepickerSizes,
  qy as defaultTranslations,
  Jv as downloadTableAsExcel,
  $n as evaluateRenderIf,
  at as experimental,
  $g as f0FormField,
  Qv as f0MarkdownRenderers,
  qt as generateAnchorId,
  ey as getAnimationVariants,
  ty as getDataSourcePaginationType,
  ry as getEmojiLabel,
  Yi as getF0Config,
  Gg as getSchemaDefinition,
  Wg as hasF0Config,
  ym as inferFieldType,
  ny as isInfiniteScrollPagination,
  iy as isPageBasedPagination,
  be as isZodType,
  zg as linkVariants,
  sy as modules,
  Gy as oneIconSizes,
  My as predefinedPresets,
  Ly as selectSizes,
  Fg as tagDotColors,
  gt as unwrapZodSchema,
  ay as useAiChat,
  Uy as useAiChatTranslations,
  oy as useData,
  ly as useDataSource,
  cy as useDefaultCopilotActions,
  Iy as useDndEvents,
  Py as useDraggable,
  zy as useDroppableList,
  dy as useEmojiConfetti,
  uy as useF0Dialog,
  Ug as useF0Form,
  fy as useGroups,
  hy as useMessageSourcesAction,
  my as useOrchestratorThinkingAction,
  Fy as usePrivacyMode,
  py as useReducedMotion,
  wl as useSchemaDefinition,
  gy as useSelectable,
  vy as useXRay,
  me as withDataTestId
};
