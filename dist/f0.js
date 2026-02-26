import { M as he, N as ct, D as ie, G as jt, Q as ua, R as ki, V as Ei, W as as, X as Vl, Y as fa, Z as xt, u as $t, _ as Vr, $ as jl, a0 as $l, a1 as Wl, a2 as Gl, a3 as Qe, a4 as Ul, a5 as Zl, a6 as ha, a7 as ql, a8 as ma, a9 as pa, aa as Si, ab as ga, ac as va, ad as sn, ae as ya, af as Kl, ag as Xl, ah as Yl, ai as Jl, aj as Ql, J as Ge, ak as ec, al as tc, am as rc, an as nc, ao as ic, ap as os, aq as sc, ar as ac, as as oc, at as ba, au as lc, av as cc, aw as dc, ax as xa, ay as uc, az as ar, aA as fc, aB as hc, aC as mc, aD as pc, aE as Di, aF as gc, aG as wa, aH as vc, aI as _a, aJ as yc, aK as bc, aL as xc, aM as wc, aN as Ca, aO as _c, aP as Cc, aQ as kc, aR as Ec, aS as ka, aT as ls, aU as Sc, aV as Dc, I as Nc, aW as Rc, aX as Ac, aY as Tc, aZ as Oc } from "./F0AiChat-DDqhuaZ2.js";
import { A as Sv, bc as Dv, B as Nv, C as Rv, E as Av, br as Tv, h as Ov, F as Mv, a as Lv, x as Iv, i as Pv, b as zv, a_ as Fv, a$ as Bv, b0 as Hv, b2 as Vv, b3 as jv, b4 as $v, b5 as Wv, b6 as Gv, b7 as Uv, b8 as Zv, b7 as qv, b8 as Kv, bn as Xv, s as Yv, t as Jv, v as Qv, bb as ey, w as ty, c as ry, bd as ny, n as iy, o as sy, p as ay, H as oy, k as ly, L as cy, O as dy, ba as uy, q as fy, P as hy, S as my, T as py, l as gy, m as vy, U as yy, bo as by, bi as xy, r as wy, j as _y, bl as Cy, bh as ky, bs as Ey, bg as Sy, bf as Dy, b1 as Ny, d as Ry, be as Ay, bj as Ty, e as Oy, bt as My, b9 as Ly, b9 as Iy, bk as Py, g as zy, f as Fy, bq as By, bm as Hy, bp as Vy } from "./F0AiChat-DDqhuaZ2.js";
import { jsx as h, jsxs as H, Fragment as Wt } from "react/jsx-runtime";
import * as ot from "react";
import V, { forwardRef as Ue, useRef as J, useImperativeHandle as Mc, Children as an, createContext as gt, useContext as lt, useState as Q, useMemo as G, useEffect as re, useCallback as ee, useLayoutEffect as oi, createElement as Xr, isValidElement as Ea, Fragment as Sa, memo as Lc, useReducer as Ic, cloneElement as Pc, PureComponent as zc, useId as Fc } from "react";
import { createPortal as Ni, unstable_batchedUpdates as Yr, flushSync as Bc } from "react-dom";
import { L as Da, C as Hc, i as Na, D as Vc, S as cs, a as jc, f as qn, b as xr, c as $c, A as Wc, d as Jr, e as Ra, E as Gc, g as tn, h as Uc, j as Zc, k as qc, l as nr, m as Aa, u as Kc, G as Xc, n as Yc, o as ds, p as Jc, q as Ta, r as Qc, B as Oa, X as Ma, Y as li, s as ed, t as La, v as td, w as rd, x as nd, y as id, z as sd, F as ad, H as od, I as ld, J as us, K as cd, M as Er, N as Kn, O as dd, P as ud, Q as fd, R as hd, T as md, U as pd, V as gd, W as vd, Z as yd, _ as bd, $ as xd, a0 as fs, a1 as wd, a2 as Ia, a3 as hs, a4 as Pa, a5 as _d, a6 as Cd, a7 as kd, a8 as Ed, a9 as za, aa as Ri, ab as Sd, ac as Dd, ad as Nd, ae as Rd, af as Ad, ag as Fa, ah as Ba, ai as Td, aj as Od, ak as on, al as Md, am as Ld, an as Id } from "./DataCollectionStorageProvider-Hicekaw6.js";
import { aD as $y, ao as Wy, ap as Gy, as as Uy, av as Zy, aw as qy, ax as Ky, az as Xy, aA as Yy, aB as Jy, ay as Qy, aq as eb, ar as tb, aC as rb, at as nb, au as ib, aE as sb, aF as ab, aG as ob, aH as lb } from "./DataCollectionStorageProvider-Hicekaw6.js";
import { A as db, F as ub, c as fb, b as hb, a as mb, o as pb, u as gb } from "./F0HILActionConfirmation-CyDLs4SS.js";
import { defaultTranslations as yb } from "./i18n-provider-defaults.js";
import './f0.css';const Pd = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, zd = Ue(function({ widgets: e, children: t }, n) {
  const i = J(null);
  Mc(n, () => i.current);
  const s = an.toArray(e).filter((a) => !!a).map((a, o) => /* @__PURE__ */ h("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: a }, o));
  return /* @__PURE__ */ h(Da, { layout: "home", children: /* @__PURE__ */ H("div", { ref: i, className: "@container", children: [
    /* @__PURE__ */ H("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ h(Hc, { columns: Pd, showArrows: !1, children: s }),
      /* @__PURE__ */ h("main", { children: t })
    ] }),
    /* @__PURE__ */ H("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ h("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: s.slice(0, 3) }),
      /* @__PURE__ */ h("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ h("div", { className: "flex flex-1 flex-col gap-5", children: s.slice(3) })
    ] })
  ] }) });
}), Fd = jt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Ha = V.forwardRef(({ children: r, variant: e, className: t, ...n }, i) => /* @__PURE__ */ h(Da, { layout: "standard", children: /* @__PURE__ */ h(
  "section",
  {
    ref: i,
    className: ie("relative flex-1 overflow-auto", t),
    ...n,
    children: /* @__PURE__ */ h("div", { className: ie(Fd({ variant: e })), children: r })
  }
) }));
Ha.displayName = "StandardLayout";
const Bd = he(
  ct(
    {
      name: "StandardLayout",
      type: "layout"
    },
    Ha
  )
), Hd = Ue(
  function({
    children: e,
    sideContent: t,
    mainColumnPosition: n = "left",
    sticky: i = !1
  }, s) {
    return /* @__PURE__ */ h("div", { ref: s, className: "h-full", children: /* @__PURE__ */ H(
      "div",
      {
        className: ie(
          "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
          "flex-col",
          "overflow-y-auto",
          i && "md:sticky md:top-0 md:max-h-full"
        ),
        children: [
          /* @__PURE__ */ h(
            "main",
            {
              className: ie(
                "sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6",
                i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full",
                n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ h(
            jd,
            {
              sticky: i,
              className: ie(
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
), Vd = he(
  ct(
    {
      name: "TwoColumnLayout",
      type: "layout"
    },
    Hd
  )
), jd = ({
  children: r,
  className: e
}) => /* @__PURE__ */ h(
  "aside",
  {
    className: ie(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      e
    ),
    children: r
  }
), Va = gt(null);
function ja() {
  const r = lt(Va);
  if (!r)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return r;
}
function $d(r) {
  const { content: e, ...t } = r;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function ir(r) {
  const e = $d(r);
  return r.subGridOpts?.children && (e.subGridOpts = {
    ...r.subGridOpts,
    children: r.subGridOpts.children.map(
      (t) => ir(t)
    )
  }), e;
}
const Wd = [
  "noMove",
  "noResize",
  "locked",
  "w",
  "h",
  "x",
  "y"
], Mt = 200;
function Gd(r) {
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
function Ud({
  children: r,
  options: e,
  onResizeStop: t,
  onChange: n,
  widgets: i
}) {
  const [s, a] = Q(null), o = J(null), l = J(!1), d = G(() => ({
    ...e,
    children: (i || []).map((D) => ir(D))
  }), [e, i]), [c, u] = Q(() => {
    const D = /* @__PURE__ */ new Map(), R = i || [], x = (S) => {
      S.id && S.content && D.set(S.id, S.content), S.subGridOpts?.children && S.subGridOpts.children.forEach((C) => {
        x(C);
      });
    };
    return R.forEach((S) => {
      x(S);
    }), D;
  }), f = J(c);
  re(() => {
    f.current = c;
  }, [c]);
  const [m, g] = Q(() => {
    const D = /* @__PURE__ */ new Map(), R = i || [], x = (S) => {
      S.id && S._originalContent !== void 0 && D.set(S.id, S._originalContent), S.subGridOpts?.children && S.subGridOpts.children.forEach((C) => {
        x(C);
      });
    };
    return R.forEach((S) => {
      x(S);
    }), D;
  }), v = J(m);
  re(() => {
    v.current = m;
  }, [m]);
  const [_, N] = Q(() => {
    const D = /* @__PURE__ */ new Map(), R = i || [], x = (S) => {
      if (S.id) {
        const C = ir(S);
        D.set(S.id, C);
      }
      S.subGridOpts?.children && S.subGridOpts.children.forEach((C) => {
        x(C);
      });
    };
    return R.forEach((S) => {
      x(S);
    }), D;
  });
  ua(() => {
    if (!s) return;
    const D = s.save();
    if (!Array.isArray(D))
      return;
    const R = D.map((P) => P.id), x = i || [], S = x.map((P) => P.id), C = x.filter(
      (P) => !R.includes(P.id)
    );
    C.length > 0 && (C.forEach((P) => {
      P.content && f.current.set(P.id, P.content), P._originalContent !== void 0 && v.current.set(P.id, P._originalContent);
    }), C.forEach((P) => {
      const A = ir(P);
      s.addWidget(A);
    }), N((P) => {
      const A = new Map(P);
      return C.forEach((k) => {
        const T = ir(k);
        A.set(k.id, T);
      }), A;
    }), u((P) => {
      const A = new Map(P);
      return C.forEach((k) => {
        k.content && A.set(k.id, k.content);
      }), A;
    }), g((P) => {
      const A = new Map(P);
      return C.forEach((k) => {
        k._originalContent !== void 0 && A.set(k.id, k._originalContent);
      }), A;
    }));
    const O = D.filter(
      (P) => !S.includes(P.id)
    );
    if (O.length > 0) {
      const P = O.map((A) => A.id).filter(Boolean);
      P.forEach((A) => {
        setTimeout(() => {
          f.current.delete(A), v.current.delete(A);
        }, Mt);
      }), O.forEach((A) => {
        const k = s.el.querySelector(
          `[gs-id="${A.id}"]`
        );
        k && setTimeout(() => {
          s.removeWidget(k, !0);
        }, Mt);
      }), N((A) => {
        const k = new Map(A);
        return P.forEach((T) => {
          setTimeout(() => {
            k.delete(T);
          }, Mt);
        }), k;
      }), u((A) => {
        const k = new Map(A);
        return P.forEach((T) => {
          if (k.get(T)) {
            const F = s.el.querySelector(
              `[gs-id="${T}"] .grid-stack-item-content`
            );
            let X = "";
            F && (X = Gd(F)), k.set(
              T,
              /* @__PURE__ */ h(
                ki.div,
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
                  dangerouslySetInnerHTML: { __html: X }
                }
              )
            );
          }
          setTimeout(() => {
            k.delete(T);
          }, Mt);
        }), k;
      }), g((A) => {
        const k = new Map(A);
        return P.forEach((T) => {
          setTimeout(() => {
            k.delete(T);
          }, Mt);
        }), k;
      });
    }
    const W = x.filter(
      (P) => R.includes(P.id)
    );
    if (W.length > 0) {
      const P = [];
      W.forEach((A) => {
        const k = D.find(
          (j) => j.id === A.id
        );
        if (!k)
          return;
        const T = Wd.filter(
          (j) => k[j] !== A[j]
        );
        if (T.length > 0) {
          const j = {}, F = ["w", "h", "x", "y"], X = ["noMove", "noResize", "locked"], q = T.filter(
            (te) => F.includes(te)
          ), le = T.filter(
            (te) => X.includes(te)
          );
          if (q.length > 0 && le.length > 0 && q.length + le.length === T.length ? le.forEach((te) => {
            const be = A[te];
            be !== void 0 && (j[te] = be);
          }) : T.forEach((te) => {
            const be = A[te];
            be !== void 0 && (j[te] = be);
          }), Object.keys(j).length > 0) {
            const te = s.el.querySelector(
              `[gs-id="${A.id}"]`
            );
            te && P.push({
              id: A.id,
              element: te,
              updateOptions: j
            });
          }
        }
      }), W.forEach((A) => {
        A.content && f.current.set(A.id, A.content), A._originalContent !== void 0 && v.current.set(A.id, A._originalContent);
      }), P.forEach(({ element: A, updateOptions: k }) => {
        try {
          s.update(A, k);
        } catch (T) {
          console.warn("Error updating widget:", T);
        }
      }), N((A) => {
        const k = new Map(A);
        return W.forEach((T) => {
          const j = ir(T);
          k.set(T.id, j);
        }), k;
      }), u((A) => {
        const k = new Map(A);
        return W.forEach((T) => {
          T.content && k.set(T.id, T.content);
        }), k;
      }), g((A) => {
        const k = new Map(A);
        return W.forEach((T) => {
          T._originalContent !== void 0 && k.set(T.id, T._originalContent);
        }), k;
      });
    }
    l.current || (l.current = !0);
  }, [i]), re(() => {
    if (!s || !d.handle) return;
    s.opts && (s.opts.handle = d.handle);
    const D = setTimeout(() => {
      if (s && s.el && d.handle && s.el.querySelectorAll(
        d.handle
      ).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(D);
  }, [s, d.handle, d.children]);
  const b = ee(() => {
    if (!s)
      return;
    const D = s.save();
    if (Array.isArray(D)) {
      const R = D.map((x) => {
        const S = x.id;
        if (!S) return null;
        const C = f.current.get(S), O = v.current.get(S), W = x;
        return {
          ...x,
          id: S,
          w: x.w ?? 1,
          h: x.h ?? 1,
          x: x.x ?? 0,
          y: x.y ?? 0,
          // Preserve meta if it exists (GridStack preserves custom properties)
          meta: W.meta,
          // Use _originalContent from originalContentMapRef
          _originalContent: O,
          // Use React content from reactContentMapRef
          content: C ?? /* @__PURE__ */ h("div", { children: "No content" })
        };
      }).filter((x) => x !== null);
      n?.(R);
    }
  }, [s]);
  return re(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const D = (R, x) => {
      t?.(R, x);
    };
    try {
      s.on("resizestop", D), s.on("change added removed", b);
    } catch (R) {
      console.error("Error attaching GridStack event listeners:", R);
      return;
    }
    return () => {
      const R = o.current;
      if (R && R.el)
        try {
          R.off("resizestop"), R.off("change added removed");
        } catch (x) {
          console.warn("Error cleaning up GridStack event listeners:", x);
        }
    };
  }, [s, t, b]), re(() => {
    o.current = s;
  }, [s]), re(() => {
    s && s.el && s.el.parentElement && l.current && b();
  }, [s]), /* @__PURE__ */ h(
    Va.Provider,
    {
      value: {
        options: d,
        gridStack: s,
        _gridStack: {
          value: s,
          set: a
        },
        _rawWidgetMetaMap: {
          value: _,
          set: N
        },
        _reactContentMap: {
          value: c,
          set: u
        }
      },
      children: r
    }
  );
}
const $a = gt(null);
function Zd() {
  const r = lt($a);
  if (!r)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return r;
}
const qd = gt(null);
function Kd() {
  const { _reactContentMap: r } = ja(), { getWidgetContainer: e } = Zd();
  return /* @__PURE__ */ h(Wt, { children: Array.from(r.value.entries()).map(([t, n]) => {
    const i = e(t);
    return i ? /* @__PURE__ */ h(qd.Provider, { value: { widget: { id: t } }, children: n && Ni(n, i) }, t) : (console.error(`Widget container not found for widget ${t}`), null);
  }) });
}
function Xd(r, e, t, n, i) {
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
    const i = w.getScrollElement(t), s = i.clientHeight, a = i === w.getScrollElement() ? 0 : i.getBoundingClientRect().top, o = e.clientY - a, l = o < n, d = o > s - n;
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
      let d;
      if (n.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(n, { ...n, y: e.y }, e) || !this.collide(n, { ...n, y: t.y - n.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: n.y + n.h, ...o };
        d = this._loading && w.samePos(e, c) ? !0 : this.moveNode(e, c), (n.locked || this._loading) && d ? w.copyPos(t, e) : !n.locked && d && i.pack && (this._packNodes(), t.y = n.y + n.h, w.copyPos(e, t)), a = a || d;
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
      const l = o % n, d = Math.floor(o / n);
      if (l + e.w > n)
        continue;
      const c = { x: l, y: d, w: e.w, h: e.h };
      t.find((u) => w.isIntercepted(c, u)) || ((e.x !== l || e.y !== d) && (e._dirty = !0), e.x = l, e.y = d, delete e.autoPosition, a = !0);
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
      const d = e._moving && !t.nested;
      let c = d ? this.directionCollideCoverage(e, t, o) : o[0];
      if (d && c && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = w.areaIntercept(t.rect, c._rect), f = w.area(t.rect), m = w.area(c._rect);
        u / (f < m ? f : m) > 0.8 && (c.grid.makeSubGrid(c.el, void 0, e), c = void 0);
      }
      c ? l = !this._fixCollisions(e, s, c, t) : (l = !1, n && delete t.pack);
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
      const l = s?.find((c) => c._id === o._id), d = { ...o, ...l || {} };
      w.removeInternalForSave(d, !e), t && t(o, d), a.push(d);
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
const Je = {
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
class ne {
}
const ht = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class wt {
}
function ln(r, e) {
  r.touches.length > 1 || (r.cancelable && r.preventDefault(), w.simulateMouseEvent(r.changedTouches[0], e));
}
function Wa(r, e) {
  r.cancelable && r.preventDefault(), w.simulateMouseEvent(r, e);
}
function cn(r) {
  wt.touchHandled || (wt.touchHandled = !0, ln(r, "mousedown"));
}
function dn(r) {
  wt.touchHandled && ln(r, "mousemove");
}
function un(r) {
  if (!wt.touchHandled)
    return;
  wt.pointerLeaveTimeout && (window.clearTimeout(wt.pointerLeaveTimeout), delete wt.pointerLeaveTimeout);
  const e = !!ne.dragElement;
  ln(r, "mouseup"), e || ln(r, "click"), wt.touchHandled = !1;
}
function fn(r) {
  r.pointerType !== "mouse" && r.target.releasePointerCapture(r.pointerId);
}
function ms(r) {
  ne.dragElement && r.pointerType !== "mouse" && Wa(r, "mouseenter");
}
function ps(r) {
  ne.dragElement && r.pointerType !== "mouse" && (wt.pointerLeaveTimeout = window.setTimeout(() => {
    delete wt.pointerLeaveTimeout, Wa(r, "mouseleave");
  }, 10));
}
class On {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${On.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), ht && (this.el.addEventListener("touchstart", cn), this.el.addEventListener("pointerdown", fn)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), ht && (this.el.removeEventListener("touchstart", cn), this.el.removeEventListener("pointerdown", fn)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ht && (this.el.addEventListener("touchmove", dn), this.el.addEventListener("touchend", un)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ht && (this.el.removeEventListener("touchmove", dn), this.el.removeEventListener("touchend", un)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
On.prefix = "ui-resizable-";
class Ai {
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
class Mr extends Ai {
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
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), ne.overResizeElement === this && delete ne.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    ne.overResizeElement || ne.dragElement || (ne.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    ne.overResizeElement === this && (delete ne.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new On(this.el, e, {
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
    this.elOriginStyleVal = Mr._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = w.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Mr._originStyleProp.forEach((e, t) => {
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
Mr._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const Yd = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class Lr extends Ai {
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
      e.addEventListener("mousedown", this._mouseDown), ht && (e.addEventListener("touchstart", cn), e.addEventListener("pointerdown", fn));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), ht && (t.removeEventListener("touchstart", cn), t.removeEventListener("pointerdown", fn));
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
    if (!ne.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(Yd) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete ne.dragElement, delete ne.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ht && (e.currentTarget.addEventListener("touchmove", dn), e.currentTarget.addEventListener("touchend", un)), e.preventDefault(), document.activeElement && document.activeElement.blur(), ne.mouseHandled = !0), !0;
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
      if (this._dragFollow(e), ne.pauseDrag) {
        const n = Number.isInteger(ne.pauseDrag) ? ne.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), n);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, ne.dragElement = this;
      const n = this.el.gridstackNode?.grid;
      n ? ne.dropElement = n.el.ddElement.ddDroppable : delete ne.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = w.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = w.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ht && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", dn, !0), e.currentTarget.removeEventListener("touchend", un, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), ne.dropElement?.el === this.el.parentElement && delete ne.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = w.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), ne.dropElement && ne.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete ne.dragElement, delete ne.dropElement, delete ne.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, n = t?.grid || ne.dropElement?.el?.gridstack;
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
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = w.cloneNode(this.el)), e.parentElement || w.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = Lr.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", Lr.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = n, 50);
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
Lr.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Jd extends Ai {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), ht && (this.el.addEventListener("pointerenter", ms), this.el.addEventListener("pointerleave", ps)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), ht && (this.el.removeEventListener("pointerenter", ms), this.el.removeEventListener("pointerleave", ps)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!ne.dragElement || !this._canDrop(ne.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), ne.dropElement && ne.dropElement !== this && ne.dropElement._mouseLeave(e, !0), ne.dropElement = this;
    const t = w.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(ne.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!ne.dragElement || ne.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = w.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(n, this._ui(ne.dragElement)), this.triggerEvent("dropout", n), ne.dropElement === this && (delete ne.dropElement, !t)) {
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
    this.option.drop && this.option.drop(t, this._ui(ne.dragElement)), this.triggerEvent("drop", t);
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
class Ti {
  static init(e) {
    return e.ddElement || (e.ddElement = new Ti(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new Lr(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Mr(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Jd(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Qd {
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
      n(s, ne.dragElement ? ne.dragElement.el : s.target, ne.dragElement ? ne.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", i = w.getElements(e);
    return i.length ? i.map((a) => a.ddElement || (n ? Ti.init(a) : null)).filter((a) => a) : [];
  }
}
const Be = new Qd();
class Y {
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
    const n = Y.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new Y(n, w.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (Y.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new Y(i, w.cloneDeep(e))), n.push(i.gridstack);
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
    return (!e.classList.contains("grid-stack") || Y.addRemoveCB) && (Y.addRemoveCB ? n = Y.addRemoveCB(e, t, !0, !0) : n = w.createDiv(["grid-stack", t.class], e)), Y.init(t, n);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    Y.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = w.createDiv([this.opts.placeholderClass, Je.itemClass, this.opts.itemClass]);
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
      const d = i.breakpoints;
      !i.columnWidth && !d?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, d?.length > 1 && d.sort((c, u) => (u.w || 0) - (c.w || 0)));
    }
    const s = {
      ...w.cloneDeep(Je),
      column: w.toNumber(e.getAttribute("gs-column")) || Je.column,
      minRow: n || w.toNumber(e.getAttribute("gs-min-row")) || Je.minRow,
      maxRow: n || w.toNumber(e.getAttribute("gs-max-row")) || Je.maxRow,
      staticGrid: w.toBool(e.getAttribute("gs-static")) || Je.staticGrid,
      sizeToContent: w.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Je.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Je.removableOptions.accept,
        decline: Je.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = w.toBool(e.getAttribute("gs-animate"))), t = w.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + Je.itemClass)?.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Je.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const d = t.cellHeight;
      delete t.cellHeight, this.cellHeight(d);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = ht), this._setStaticClass();
    const l = t.engineClass || Y.engineClass || Nt;
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
    this.setAnimation(), t.subGridDynamic && !ne.pauseDrag && (ne.pauseDrag = !0), t.draggable?.pause !== void 0 && (ne.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (n.grid = this, n.el ? t = n.el : Y.addRemoveCB ? t = Y.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
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
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, Y.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : Y.renderCB(n, e), t;
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
    let d = s.el.querySelector(".grid-stack-item-content"), c, u;
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, w.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), Y.addRemoveCB ? c = Y.addRemoveCB(this.el, u, !0, !1) : (c = w.createDiv(["grid-stack-item"]), c.appendChild(d), d = w.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const m = l ? t.column : s.w, g = s.h + n.h, v = s.el.style;
      v.transition = "none", this.update(s.el, { w: m, h: g }), setTimeout(() => v.transition = null);
    }
    const f = s.subGrid = Y.addGrid(d, t);
    return n?._moving && (f._isTemp = !0), l && (f._autoColumn = !0), i && f.makeWidget(c, u), n && (n._moving ? window.setTimeout(() => w.simulateMouseEvent(n._event, "mouseenter", f.el), 0) : f.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), f;
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
  save(e = !0, t = !1, n = Y.saveCB, i) {
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
      return delete a._alwaysShowResizeHandle, o !== void 0 ? a.alwaysShowResizeHandle = o : delete a.alwaysShowResizeHandle, w.removeInternalAndSame(a, Je), a.children = s, a;
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
  load(e, t = Y.addRemoveCB || !0) {
    e = w.cloneDeep(e);
    const n = this.getColumn();
    e.forEach((c) => {
      c.w = c.w || c.minW || 1, c.h = c.h || c.minH || 1;
    }), e = w.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((c) => {
      i = Math.max(i, (c.x || 0) + c.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = Y.addRemoveCB;
    typeof t == "function" && (Y.addRemoveCB = t);
    const a = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, l = o && this.opts.animate;
    l && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      w.find(e, u.id) || (Y.addRemoveCB && Y.addRemoveCB(this.el, u, !1, !1), a.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const d = [];
    return this.engine.nodes = this.engine.nodes.filter((c) => w.find(e, c.id) ? (d.push(c), !1) : !0), e.forEach((c) => {
      const u = w.find(d, c.id);
      if (u) {
        if (w.shouldSizeToContent(u) && (c.h = u.h), this.engine.nodeBoundFix(c), (c.autoPosition || c.x === void 0 || c.y === void 0) && (c.w = c.w || u.w, c.h = c.h || u.h, this.engine.findEmptyPosition(c)), this.engine.nodes.push(u), w.samePos(u, c) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...c, forceCollide: !0 }), w.copyPos(c, u)), this.update(u.el, c), c.subGridOpts?.children) {
          const f = u.el.querySelector(".grid-stack");
          f && f.gridstack && f.gridstack.load(c.subGridOpts.children);
        }
      } else t && this.addWidget(c);
    }), delete this.engine._loading, this.engine.removedNodes = a, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? Y.addRemoveCB = s : delete Y.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
    const n = Y.getElement(e);
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
    return e ? (Y.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((a) => i === a.el)), s && (t && Y.addRemoveCB && Y.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, n), t && i.parentElement && i.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && Y.addRemoveCB && Y.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
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
    return Y.getElements(e).forEach((n) => {
      const i = n?.gridstackNode;
      if (!i)
        return;
      const s = { ...w.copyPos({}, i), ...w.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const a = ["x", "y", "w", "h"];
      let o;
      if (a.some((c) => s[c] !== void 0 && s[c] !== i[c]) && (o = {}, a.forEach((c) => {
        o[c] = s[c] !== void 0 ? s[c] : i[c], delete s[c];
      })), !o && (s.minW || s.minH || s.maxW || s.maxH) && (o = {}), s.content !== void 0) {
        const c = n.querySelector(".grid-stack-item-content");
        c && c.textContent !== s.content && (i.content = s.content, Y.renderCB(c, s), i.subGrid?.el && (c.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, d = !1;
      for (const c in s)
        c[0] !== "_" && i[c] !== s[c] && (i[c] = s[c], l = !0, d = d || !this.opts.staticGrid && (c === "noResize" || c === "noMove" || c === "locked"));
      if (w.sanitizeMinMax(i), o) {
        const c = o.w !== void 0 && o.w !== i.w;
        this.moveNode(i, o), c && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(c, i), delete i._orig;
      }
      (o || l) && this._writeAttr(n, i), d && this.prepareDragDrop(i.el), Y.updateCB && Y.updateCB(i);
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
    if (t.resizeToContentParent && (a = e.querySelector(t.resizeToContentParent)), a || (a = e.querySelector(Y.resizeToContentParent)), !a)
      return;
    const o = e.clientHeight - a.clientHeight, l = t.h ? t.h * i - o : a.clientHeight;
    let d;
    if (t.subGrid) {
      d = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const f = t.subGrid.el.getBoundingClientRect(), m = e.getBoundingClientRect();
      d += f.top - m.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const f = a.firstElementChild;
        if (!f) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${Y.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
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
    Y.resizeToContentCB ? Y.resizeToContentCB(e) : this.resizeToContent(e);
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
    return Y.getElements(e).forEach((n) => {
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
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(Je.itemClass, this.opts.itemClass);
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
    return Y.getElement(e);
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
    return Be;
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
    t?.pause !== void 0 && (ne.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? w.getElements(e, i) : e).forEach((a, o) => {
      Be.isDraggable(a) || Be.dragIn(a, t), n?.[o] && (a.gridstackNode = n[o]);
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
    return this.opts.staticGrid ? this : (Y.getElements(e).forEach((n) => {
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
    return this.opts.staticGrid ? this : (Y.getElements(e).forEach((n) => {
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && Y._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return Be.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return Be.droppable(this.el, "destroy"), this;
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
            Be.off(s, "drag");
            return;
          }
          o._willFitPos && (w.copyPos(o, o._willFitPos), delete o._willFitPos);
        }
        this._onStartMoving(a, i, u, o, t, e);
      } else
        this._dragOrResize(a, i, u, o, t, e);
    };
    return Be.droppable(this.el, {
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
      o._temporaryRemoved = !0) : (o.w = l, o.h = d, o._temporaryRemoved = !0), Y._itemRemoving(o.el, !1), Be.on(s, "drag", n), n(i, s, a), !1;
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
      if (!o || (l && (this.engine.cleanupNode(o), o.grid = this), delete o.grid?._isTemp, Be.off(s, "drag"), a !== s ? (a.remove(), s = a) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = o.subGrid?.el?.gridstack;
      return w.copyPos(o, this._readAttr(this.placeholder)), w.removePositioningStyles(s), d && (o.content || o.subGridOpts || Y.addRemoveCB) ? (delete o.el, s = this.addWidget(o)) : (this._prepareElement(s, !0, o), this.el.appendChild(s), this.resizeToContentCheck(!1, o), u && (u.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, c && c.grid ? c : void 0, o), !1;
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
    return e ? (!this.opts.staticGrid && !Be.isDroppable(e) && Be.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => Y._itemRemoving(n, !0)).on(e, "dropout", (t, n) => Y._itemRemoving(n, !1)), this) : this;
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
      const d = (f, m) => {
        this.triggerEvent(f, f.target), o = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, f, m, n, o, l);
      }, c = (f, m) => {
        this._dragOrResize(e, f, m, n, o, l);
      }, u = (f) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete n._moving, delete n._resizing, delete n._event, delete n._lastTried;
        const m = n.w !== n._orig.w, g = f.target;
        if (!(!g.gridstackNode || g.gridstackNode.grid !== this)) {
          if (n.el = g, n._isAboutToRemove) {
            const v = e.gridstackNode.grid;
            v._gsEventHandler[f.type] && v._gsEventHandler[f.type](f, g), v.engine.nodes.push(n), v.removeWidget(e, !0, !0);
          } else
            w.removePositioningStyles(g), n._temporaryRemoved ? (this._writePosAttr(g, n), this.engine.addNode(n)) : this._writePosAttr(g, n), this.triggerEvent(f, g);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), f.type === "resizestop" && (Number.isInteger(n.sizeToContent) && (n.sizeToContent = n.h), this.resizeToContentCheck(m, n));
        }
      };
      Be.draggable(e, {
        start: d,
        stop: u,
        drag: c
      }).resizable(e, {
        start: d,
        stop: u,
        resize: c
      }), n._initDD = !0;
    }
    return Be.draggable(e, i ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
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
      Be.resizable(e, "option", "minWidth", s * Math.min(i.minW || 1, o)).resizable(e, "option", "minHeight", a * Math.min(i.minH || 1, l)).resizable(e, "option", "maxWidth", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, o)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, i.x + i.w)).resizable(e, "option", "maxHeight", a * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", a * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, i.y + i.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, n, i, s, a) {
    const o = { ...i._orig };
    let l, d = this.opts.marginLeft, c = this.opts.marginRight, u = this.opts.marginTop, f = this.opts.marginBottom;
    const m = Math.round(a * 0.1), g = Math.round(s * 0.1);
    if (d = Math.min(d, g), c = Math.min(c, g), u = Math.min(u, m), f = Math.min(f, m), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const _ = n.position.top - i._prevYPix;
      i._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && w.updateScrollPosition(e, n.position, _);
      const N = n.position.left + (n.position.left > i._lastUiPosition.left ? -c : d), b = n.position.top + (n.position.top > i._lastUiPosition.top ? -f : u);
      o.x = Math.round(N / s), o.y = Math.round(b / a);
      const D = this._extraDragRow;
      if (this.engine.collide(i, o)) {
        const R = this.getRow();
        let x = Math.max(0, o.y + i.h - R);
        this.opts.maxRow && R + x > this.opts.maxRow && (x = Math.max(0, this.opts.maxRow - R)), this._extraDragRow = x;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== D && this._updateContainerHeight(), i.x === o.x && i.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (w.updateScrollResize(t, e, a), o.w = Math.round((n.size.width - d) / s), o.h = Math.round((n.size.height - u) / a), i.w === o.w && i.h === o.h) || i._lastTried && i._lastTried.w === o.w && i._lastTried.h === o.h)
        return;
      const _ = n.position.left + d, N = n.position.top + u;
      o.x = Math.round(_ / s), o.y = Math.round(N / a), l = !0;
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
    if (!n || (t.style.transform = t.style.transformOrigin = null, Be.off(e, "drag"), n._temporaryRemoved))
      return;
    n._temporaryRemoved = !0, this.engine.removeNode(n), n.el = n._isExternal && t ? t : e;
    const i = n._sidebarOrig;
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = i, this.opts.removable === !0 && Y._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return Xd(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
Y.renderCB = (r, e) => {
  r && e?.content && (r.textContent = e.content);
};
Y.resizeToContentParent = ".grid-stack-item-content";
Y.Utils = w;
Y.Engine = Nt;
Y.GDRev = "12.3.2";
const Qr = /* @__PURE__ */ new WeakMap();
function eu({ children: r }) {
  const {
    _gridStack: { value: e, set: t },
    options: n
  } = ja(), i = J(/* @__PURE__ */ new Map()), s = J(null), a = J(n), o = ee(
    (c, u) => {
      if (u.id && u.grid) {
        let f = Qr.get(u.grid);
        f || (f = /* @__PURE__ */ new Map(), Qr.set(u.grid, f)), f.set(u.id, c), i.current.set(u.id, c);
      }
    },
    []
  ), l = ee(() => {
    if (s.current) {
      Y.renderCB = o;
      const c = Y.init(a.current, s.current);
      return c && a.current.handle && c.opts && (c.opts.handle = a.current.handle), c;
    }
    return null;
  }, [o]), d = (c, u) => {
    const { children: f, ...m } = c, { children: g, ...v } = u;
    return Na(m, v);
  };
  return oi(() => {
    if (!d(n, a.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), Qr.delete(e), a.current = n, t(null);
      } catch (c) {
        console.error("Error destroying gridstack", c);
      }
    else e && (a.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), oi(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, l, t]), /* @__PURE__ */ h(
    $a.Provider,
    {
      value: G(
        () => ({
          getWidgetContainer: (c) => {
            if (e) {
              const u = Qr.get(e);
              if (u?.has(c))
                return u.get(c) || null;
            }
            return i.current.get(c) || null;
          }
        }),
        // ! gridStack is required to reinitialize the grid when the options change
        [e]
      ),
      children: /* @__PURE__ */ h("div", { ref: s, children: e ? r : null })
    }
  );
}
const Oi = ({
  options: r,
  widgets: e,
  onChange: t,
  className: n
}) => {
  const i = G(() => JSON.stringify(
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
  ), [e]), s = G(() => ({
    ...r,
    class: n
  }), [r, i, n]), a = (l, d, c) => {
    let u = c[0], f = 1 / 0;
    for (const m of c) {
      const g = m.w - l, v = m.h - d, _ = g * g + v * v;
      _ < f && (f = _, u = m);
    }
    return u;
  };
  return /* @__PURE__ */ h(
    Ud,
    {
      options: s,
      widgets: e,
      onResizeStop: (l, d) => {
        const c = d.gridstackNode;
        if (!c) return;
        const u = d.gridstackNode?.allowedSizes ?? [];
        if (u.length === 0)
          return;
        const f = a(c.w ?? 1, c.h ?? 1, u ?? []);
        (c.w !== f.w || c.h !== f.h) && c.grid?.update(d, { w: f.w, h: f.h });
      },
      onChange: t,
      children: /* @__PURE__ */ h(eu, { children: /* @__PURE__ */ h(Kd, {}) })
    }
  );
};
Oi.displayName = "F0GridStack";
const tu = (r, e, t) => /* @__PURE__ */ h("div", { children: r }), Mn = ({
  widgets: r = [],
  editMode: e = !1,
  onChange: t = () => {
  },
  WidgetWrapper: n = tu,
  main: i = !1,
  deps: s
}) => {
  const a = ee(
    (x, S, C) => /* @__PURE__ */ h(
      ki.div,
      {
        className: "h-full w-full",
        initial: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: {
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        },
        children: n(x, S, C)
      }
    ),
    [n]
  ), o = G(
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
  ), l = (x, S) => {
    if (typeof x.content == "function" && x.deps && S) {
      const C = {};
      return x.deps.forEach((O) => {
        typeof O == "string" && S[O] !== void 0 && (C[O] = S[O]);
      }), x.content(C);
    }
    return typeof x.content == "function" ? null : x.content;
  }, d = (x, S, C) => x.map((O) => {
    const W = l(O, C), P = {
      id: O.id,
      h: O.h ?? 1,
      w: O.w ?? 1,
      allowedSizes: O.availableSizes,
      noMove: !S,
      noResize: !S,
      locked: O.locked,
      meta: O.meta,
      _originalContent: W,
      content: a(W, O.meta, S)
    };
    return O.x !== void 0 && (P.x = O.x), O.y !== void 0 && (P.y = O.y), P;
  }), [c, u] = Q(
    d(r, e)
  ), f = J(e), m = J(r), g = J(!1), v = J(/* @__PURE__ */ new Map()), _ = J(r);
  _.current = r;
  const N = J(s), b = G(() => {
    const x = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || r.forEach((S) => {
      if (S.deps && S.deps.length > 0) {
        const C = S.deps.map((O) => typeof O == "string" && s[O] !== void 0 ? s[O] : O).filter((O) => O !== null);
        x.set(S.id, C);
      }
    }), x;
  }, [r, s]), D = ee(
    (x) => {
      u(x), g.current || t(
        x.map((S) => {
          const C = _.current.find(
            (O) => O.id === S.id
          );
          return {
            id: S.id,
            w: S.w ?? 1,
            h: S.h ?? 1,
            allowedSizes: S.allowedSizes,
            meta: S.meta,
            // Preserve the original content (function or static) from the widget prop
            content: typeof C?.content == "function" ? C.content : S._originalContent,
            x: S.x ?? 0,
            y: S.y ?? 0,
            locked: S.locked,
            deps: C?.deps
          };
        })
      ), g.current = !1;
    },
    [t]
  ), R = (x, S) => !x && !S ? !1 : !x || !S || x.length !== S.length ? !0 : x.some((C, O) => C !== S[O]);
  return re(() => {
    const x = f.current !== e, S = m.current !== r, C = N.current !== s && (N.current === void 0 || s === void 0 || Object.keys(N.current).length !== Object.keys(s).length || Object.keys(s).some(
      (A) => N.current?.[A] !== s[A]
    )), O = /* @__PURE__ */ new Map();
    r.forEach((A) => {
      if (A.deps && A.deps.length > 0) {
        const k = v.current.get(A.id), T = b.get(A.id);
        O.set(
          A.id,
          R(k, T)
        ), T ? v.current.set(A.id, T) : v.current.delete(A.id);
      }
    });
    const W = new Set(r.map((A) => A.id));
    v.current.forEach((A, k) => {
      W.has(k) || v.current.delete(k);
    });
    const P = Array.from(O.values()).some((A) => A) || C;
    x && !S && !P ? (g.current = !0, u(
      (A) => A.map((k) => {
        const T = r.find((F) => F.id === k.id);
        if (!T)
          return k;
        const j = l(T, s);
        return {
          ...k,
          noMove: !e,
          noResize: !e,
          locked: T.locked,
          meta: T.meta,
          _originalContent: j,
          content: a(
            j,
            T.meta,
            e
          )
        };
      })
    )) : (S || P) && u((A) => {
      const k = new Map(
        A.map((T) => [T.id, T])
      );
      return r.map((T) => {
        const j = k.get(T.id), F = O.get(T.id) ?? !1;
        let X;
        F || !j ? X = l(T, s) : X = j._originalContent ?? l(T, s);
        const q = {
          id: T.id,
          h: j?.h ?? T.h ?? 1,
          w: j?.w ?? T.w ?? 1,
          allowedSizes: T.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: T.locked,
          meta: T.meta,
          _originalContent: X,
          content: a(X, T.meta, e)
        }, le = j?.x ?? T.x, te = j?.y ?? T.y;
        return le !== void 0 && (q.x = le), te !== void 0 && (q.y = te), q;
      });
    }), f.current = e, m.current = r, N.current = s;
  }, [
    r,
    e,
    a,
    b,
    s
  ]), /* @__PURE__ */ h(
    Oi,
    {
      className: ie(i && "h-full flex-1 overflow-auto"),
      options: o,
      onChange: D,
      widgets: c
    }
  );
};
Mn.displayName = "GroupGrid";
Mn.__isPageLayoutGroup = !0;
const ru = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutBlock = !0, t;
}, nu = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutGroup = !0, t;
}, iu = (r, e) => /* @__PURE__ */ h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: e,
    ...r,
    children: /* @__PURE__ */ h(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Ga = Ue(iu), su = [
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
], Ua = Ue((r, e) => {
  const t = su.reduce((n, i) => {
    const { [i]: s, ...a } = n;
    return a;
  }, r);
  return /* @__PURE__ */ h(
    Ei,
    {
      ...t,
      variant: "ai",
      ref: e,
      iconRotate: r.icon == Ga
    }
  );
});
Ua.displayName = "AIButton";
const wr = jt({
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
}), au = {
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
}, Mi = Ue(
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
    ...d
  }, c) => {
    const u = i ?? au[e ?? "body"], f = l ? /* @__PURE__ */ h("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (s !== void 0) {
      const m = typeof s == "number" ? s : 1;
      return f ? Xr(
        u,
        {
          ...d,
          className: ie(
            wr({ variant: e, align: t }),
            n,
            "inline-flex gap-0.5"
          ),
          ref: c
        },
        /* @__PURE__ */ h(
          as,
          {
            lines: m,
            noTooltip: a,
            tag: "span",
            className: "min-w-0",
            markdown: o,
            children: r
          }
        ),
        f
      ) : /* @__PURE__ */ h(
        as,
        {
          ref: c,
          lines: m,
          noTooltip: a,
          tag: u,
          className: ie(wr({ variant: e, align: t }), n),
          markdown: o,
          ...d,
          children: r
        }
      );
    }
    if (o) {
      const m = Vl(r);
      return f ? Xr(
        u,
        {
          ...d,
          className: ie(wr({ variant: e, align: t }), n),
          ref: c
        },
        /* @__PURE__ */ h("span", { dangerouslySetInnerHTML: { __html: m } }),
        f
      ) : Xr(u, {
        ...d,
        className: ie(wr({ variant: e, align: t }), n),
        ref: c,
        dangerouslySetInnerHTML: { __html: m }
      });
    }
    return Xr(
      u,
      {
        ...d,
        className: ie(wr({ variant: e, align: t }), n),
        ref: c
      },
      r,
      f
    );
  }
);
Mi.displayName = "Text";
const Za = Ue((r, e) => /* @__PURE__ */ h(Mi, { ref: e, markdown: r.markdown ?? !0, ...r }));
Za.displayName = "F0Text";
const ou = he(Za), Mg = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], qa = ({
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
  const [d, c] = Q(!1), [u, f] = Q(!1), m = $t(), g = (_) => {
    c(_);
  }, v = u || d;
  return re(() => {
    if (!i || !n) return;
    const _ = () => {
      n();
    };
    return document.addEventListener("mouseup", _), () => {
      document.removeEventListener("mouseup", _);
    };
  }, [i, n]), /* @__PURE__ */ H(
    "div",
    {
      className: ie(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        e && d ? "border-f1-border-hover" : e && "hover:border-f1-border-hover",
        l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      ),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [
        /* @__PURE__ */ H("div", { className: "flex h-12 w-full items-center justify-between gap-3", children: [
          /* @__PURE__ */ H(
            "div",
            {
              className: ie(
                "flex min-w-0 flex-1 items-center",
                !e && "pl-4",
                !a && !s && "pr-4"
              ),
              children: [
                e && /* @__PURE__ */ h(
                  "div",
                  {
                    className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
                    onMouseDown: t,
                    "data-gs-handle": "true",
                    children: /* @__PURE__ */ h(Vr, { icon: jl, size: "xs" })
                  }
                ),
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: ie(
                      "flex min-w-0 flex-1 items-center",
                      e && "-translate-x-1.5"
                    ),
                    children: /* @__PURE__ */ h(ou, { variant: "label", content: r, ellipsis: !0 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ h($l, { children: (s || a) && v && /* @__PURE__ */ H(
            ki.div,
            {
              className: ie(
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
                s && /* @__PURE__ */ h("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ h(
                  Ua,
                  {
                    size: "sm",
                    label: m.ai.ask,
                    onClick: s,
                    icon: Ga
                  }
                ) }),
                a && /* @__PURE__ */ h(
                  Wl,
                  {
                    items: a,
                    open: d,
                    onOpenChange: g,
                    align: "end",
                    children: /* @__PURE__ */ h(
                      Ei,
                      {
                        icon: Gl,
                        label: "Actions",
                        variant: "ghost",
                        size: "md",
                        hideLabel: !0,
                        noAutoTooltip: !0,
                        noTitle: !0,
                        pressed: d
                      }
                    )
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ h("div", { className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4", children: o })
      ]
    }
  );
}, lu = () => /* @__PURE__ */ H("div", { className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
  /* @__PURE__ */ h("div", { className: "flex h-12 w-full items-center px-4", children: /* @__PURE__ */ h(xt, { className: "h-3 w-full max-w-16 rounded-md" }) }),
  /* @__PURE__ */ H("div", { className: "flex flex-1 items-end gap-2 px-4 pb-4", children: [
    /* @__PURE__ */ h(xt, { className: "h-1/2 w-full rounded-sm" }),
    /* @__PURE__ */ h(xt, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ h(xt, { className: "h-1/5 w-full rounded-sm" }),
    /* @__PURE__ */ h(xt, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ h(xt, { className: "h-full w-full rounded-sm" }),
    /* @__PURE__ */ h(xt, { className: "h-3/4 w-full rounded-sm" })
  ] })
] });
qa.displayName = "F0Widget";
const cu = fa(qa, lu), du = ({
  children: r,
  title: e,
  draggable: t = !1,
  actions: n,
  aiButton: i
}) => /* @__PURE__ */ h(
  cu,
  {
    title: e,
    draggable: t,
    actions: n,
    AIButton: i,
    children: r
  }
), Ka = ({
  widgets: r,
  editMode: e = !1,
  onChange: t = () => {
  },
  deps: n,
  ...i
}) => /* @__PURE__ */ h(
  Mn,
  {
    widgets: r,
    editMode: e,
    onChange: t,
    deps: n,
    ...i,
    WidgetWrapper: (s, a, o) => /* @__PURE__ */ h(
      du,
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
Ka.displayName = "Dashboard";
const uu = nu("Dashboard", Ka), Lg = he(
  Qe("Dashboard", uu)
), fu = jt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), hu = (r) => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({ type: "separator" }), e.push(...t), e), []), mu = (r) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(r) ? r.every(e) ? [
    {
      items: r
    }
  ] : r : [r];
}, Ln = Ue(
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
    ...d
  }, c) => {
    const u = G(
      () => mu(d.actions || []),
      [d.actions]
    ), f = G(
      () => u.flatMap((g) => g.items),
      [u]
    ), m = G(
      () => f.length > 0 || !!l,
      [f, l]
    );
    return /* @__PURE__ */ H(
      "div",
      {
        ref: c,
        className: ie(fu({ variant: e }), "relative", t),
        draggable: n,
        onDragStart: i,
        onDragEnd: s,
        onDrop: a,
        "data-drag-id": o,
        ...d,
        children: [
          m && /* @__PURE__ */ H("div", { className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4", children: [
            !!l && l,
            f.length > 0 && /* @__PURE__ */ h(
              Vc,
              {
                items: hu(u),
                "data-testid": "actions-dropdown"
              }
            )
          ] }),
          /* @__PURE__ */ h("div", { "data-testid": "content", children: r })
        ]
      }
    );
  }
);
Ln.displayName = "Block";
Ln.__isPageLayoutBlock = !0;
const pu = ({
  title: r = "",
  description: e,
  titleLevel: t = "h2",
  children: n,
  className: i,
  ...s
}) => {
  if (!r) return null;
  const a = t;
  return /* @__PURE__ */ H(Ln, { ...s, className: ie("space-y-4", i), children: [
    /* @__PURE__ */ H("div", { className: "space-y-2", children: [
      /* @__PURE__ */ h(
        a,
        {
          className: ie("font-semibold text-f1-foreground", {
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
      e && /* @__PURE__ */ h("p", { className: "text-sm text-f1-foreground-secondary", children: e })
    ] }),
    /* @__PURE__ */ h("div", { className: "flex-1", children: n })
  ] });
}, gu = ru(
  "BlockContent",
  pu
), vu = (r) => !Ea(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutBlock" in r.type, yu = (r) => !Ea(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutGroup" in r.type, Xa = (r, e, t) => {
  const n = an.toArray(e);
  for (const i of n)
    t.includes("block") && vu(i) || t.includes("group") && yu(i) || console.warn(
      `${r}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, Li = Ue(
  ({ children: r, onSort: e, ...t }, n) => {
    Xa("GroupLinear", r, ["block"]);
    const [i, s] = Q(an.toArray(r));
    return re(() => {
      s(an.toArray(r));
    }, [r]), re(() => {
      e?.(i);
    }, [i, e]), /* @__PURE__ */ h("div", { ref: n, ...t, children: i.map((a, o) => /* @__PURE__ */ h(Sa, { children: a }, o)) });
  }
);
Li.displayName = "GroupLinear";
Li.__isPageLayoutGroup = !0;
function bu() {
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
const In = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function mr(r) {
  const e = Object.prototype.toString.call(r);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Ii(r) {
  return "nodeType" in r;
}
function Ve(r) {
  var e, t;
  return r ? mr(r) ? r : Ii(r) && (e = (t = r.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Pi(r) {
  const {
    Document: e
  } = Ve(r);
  return r instanceof e;
}
function jr(r) {
  return mr(r) ? !1 : r instanceof Ve(r).HTMLElement;
}
function Ya(r) {
  return r instanceof Ve(r).SVGElement;
}
function pr(r) {
  return r ? mr(r) ? r.document : Ii(r) ? Pi(r) ? r : jr(r) || Ya(r) ? r.ownerDocument : document : document : document;
}
const mt = In ? oi : re;
function Pn(r) {
  const e = J(r);
  return mt(() => {
    e.current = r;
  }), ee(function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function xu() {
  const r = J(null), e = ee((n, i) => {
    r.current = setInterval(n, i);
  }, []), t = ee(() => {
    r.current !== null && (clearInterval(r.current), r.current = null);
  }, []);
  return [e, t];
}
function Ir(r, e) {
  e === void 0 && (e = [r]);
  const t = J(r);
  return mt(() => {
    t.current !== r && (t.current = r);
  }, e), t;
}
function $r(r, e) {
  const t = J();
  return G(
    () => {
      const n = r(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function hn(r) {
  const e = Pn(r), t = J(null), n = ee(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function mn(r) {
  const e = J();
  return re(() => {
    e.current = r;
  }, [r]), e.current;
}
let Xn = {};
function Wr(r, e) {
  return G(() => {
    if (e)
      return e;
    const t = Xn[r] == null ? 0 : Xn[r] + 1;
    return Xn[r] = t, r + "-" + t;
  }, [r, e]);
}
function Ja(r) {
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
const or = /* @__PURE__ */ Ja(1), Pr = /* @__PURE__ */ Ja(-1);
function wu(r) {
  return "clientX" in r && "clientY" in r;
}
function zn(r) {
  if (!r)
    return !1;
  const {
    KeyboardEvent: e
  } = Ve(r.target);
  return e && r instanceof e;
}
function _u(r) {
  if (!r)
    return !1;
  const {
    TouchEvent: e
  } = Ve(r.target);
  return e && r instanceof e;
}
function pn(r) {
  if (_u(r)) {
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
  return wu(r) ? {
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
}), gs = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Cu(r) {
  return r.matches(gs) ? r : r.querySelector(gs);
}
const ku = {
  display: "none"
};
function Eu(r) {
  let {
    id: e,
    value: t
  } = r;
  return V.createElement("div", {
    id: e,
    style: ku
  }, t);
}
function Su(r) {
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
  return V.createElement("div", {
    id: e,
    style: i,
    role: "status",
    "aria-live": n,
    "aria-atomic": !0
  }, t);
}
function Du() {
  const [r, e] = Q("");
  return {
    announce: ee((n) => {
      n != null && e(n);
    }, []),
    announcement: r
  };
}
const Qa = /* @__PURE__ */ gt(null);
function Nu(r) {
  const e = lt(Qa);
  re(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(r);
  }, [r, e]);
}
function Ru() {
  const [r] = Q(() => /* @__PURE__ */ new Set()), e = ee((n) => (r.add(n), () => r.delete(n)), [r]);
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
const Au = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Tu = {
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
function Ou(r) {
  let {
    announcements: e = Tu,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = Au
  } = r;
  const {
    announce: s,
    announcement: a
  } = Du(), o = Wr("DndLiveRegion"), [l, d] = Q(!1);
  if (re(() => {
    d(!0);
  }, []), Nu(G(() => ({
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
  const c = V.createElement(V.Fragment, null, V.createElement(Eu, {
    id: n,
    value: i.draggable
  }), V.createElement(Su, {
    id: o,
    announcement: a
  }));
  return t ? Ni(c, t) : c;
}
var Ne;
(function(r) {
  r.DragStart = "dragStart", r.DragMove = "dragMove", r.DragEnd = "dragEnd", r.DragCancel = "dragCancel", r.DragOver = "dragOver", r.RegisterDroppable = "registerDroppable", r.SetDroppableDisabled = "setDroppableDisabled", r.UnregisterDroppable = "unregisterDroppable";
})(Ne || (Ne = {}));
function gn() {
}
function vs(r, e) {
  return G(
    () => ({
      sensor: r,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, e]
  );
}
function Mu() {
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
function Lu(r, e) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function Iu(r, e) {
  const t = pn(r);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function Pu(r, e) {
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
function zu(r, e) {
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
function ys(r) {
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
function eo(r, e) {
  if (!r || r.length === 0)
    return null;
  const [t] = r;
  return t[e];
}
const Fu = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = ys(e), s = [];
  for (const a of n) {
    const {
      id: o
    } = a, l = t.get(o);
    if (l) {
      const d = ys(l), c = i.reduce((f, m, g) => f + Lu(d[g], m), 0), u = Number((c / 4).toFixed(4));
      s.push({
        id: o,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return s.sort(Pu);
};
function Bu(r, e) {
  const t = Math.max(e.top, r.top), n = Math.max(e.left, r.left), i = Math.min(e.left + e.width, r.left + r.width), s = Math.min(e.top + e.height, r.top + r.height), a = i - n, o = s - t;
  if (n < i && t < s) {
    const l = e.width * e.height, d = r.width * r.height, c = a * o, u = c / (l + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Hu = (r) => {
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
      const l = Bu(o, e);
      l > 0 && i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(zu);
};
function Vu(r, e, t) {
  return {
    ...r,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function to(r, e) {
  return r && e ? {
    x: r.left - e.left,
    y: r.top - e.top
  } : pt;
}
function ju(r) {
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
const $u = /* @__PURE__ */ ju(1);
function ro(r) {
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
function Wu(r, e, t) {
  const n = ro(e);
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
const Gu = {
  ignoreTransform: !1
};
function gr(r, e) {
  e === void 0 && (e = Gu);
  let t = r.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: c
    } = Ve(r).getComputedStyle(r);
    d && (t = Wu(t, d, c));
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
function bs(r) {
  return gr(r, {
    ignoreTransform: !0
  });
}
function Uu(r) {
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
function Zu(r, e) {
  return e === void 0 && (e = Ve(r).getComputedStyle(r)), e.position === "fixed";
}
function qu(r, e) {
  e === void 0 && (e = Ve(r).getComputedStyle(r));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function Fn(r, e) {
  const t = [];
  function n(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Pi(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!jr(i) || Ya(i) || t.includes(i))
      return t;
    const s = Ve(r).getComputedStyle(i);
    return i !== r && qu(i, s) && t.push(i), Zu(i, s) ? t : n(i.parentNode);
  }
  return r ? n(r) : t;
}
function no(r) {
  const [e] = Fn(r, 1);
  return e ?? null;
}
function Yn(r) {
  return !In || !r ? null : mr(r) ? r : Ii(r) ? Pi(r) || r === pr(r).scrollingElement ? window : jr(r) ? r : null : null;
}
function io(r) {
  return mr(r) ? r.scrollX : r.scrollLeft;
}
function so(r) {
  return mr(r) ? r.scrollY : r.scrollTop;
}
function ci(r) {
  return {
    x: io(r),
    y: so(r)
  };
}
var Ae;
(function(r) {
  r[r.Forward = 1] = "Forward", r[r.Backward = -1] = "Backward";
})(Ae || (Ae = {}));
function ao(r) {
  return !In || !r ? !1 : r === document.scrollingElement;
}
function oo(r) {
  const e = {
    x: 0,
    y: 0
  }, t = ao(r) ? {
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
const Ku = {
  x: 0.2,
  y: 0.2
};
function Xu(r, e, t, n, i) {
  let {
    top: s,
    left: a,
    right: o,
    bottom: l
  } = t;
  n === void 0 && (n = 10), i === void 0 && (i = Ku);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: f
  } = oo(r), m = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, v = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !d && s <= e.top + v.height ? (m.y = Ae.Backward, g.y = n * Math.abs((e.top + v.height - s) / v.height)) : !c && l >= e.bottom - v.height && (m.y = Ae.Forward, g.y = n * Math.abs((e.bottom - v.height - l) / v.height)), !f && o >= e.right - v.width ? (m.x = Ae.Forward, g.x = n * Math.abs((e.right - v.width - o) / v.width)) : !u && a <= e.left + v.width && (m.x = Ae.Backward, g.x = n * Math.abs((e.left + v.width - a) / v.width)), {
    direction: m,
    speed: g
  };
}
function Yu(r) {
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
function lo(r) {
  return r.reduce((e, t) => or(e, ci(t)), pt);
}
function Ju(r) {
  return r.reduce((e, t) => e + io(t), 0);
}
function Qu(r) {
  return r.reduce((e, t) => e + so(t), 0);
}
function co(r, e) {
  if (e === void 0 && (e = gr), !r)
    return;
  const {
    top: t,
    left: n,
    bottom: i,
    right: s
  } = e(r);
  no(r) && (i <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && r.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const ef = [["x", ["left", "right"], Ju], ["y", ["top", "bottom"], Qu]];
class zi {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = Fn(t), i = lo(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, a, o] of ef)
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
class Sr {
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
function tf(r) {
  const {
    EventTarget: e
  } = Ve(r);
  return r instanceof e ? r : pr(r);
}
function Jn(r, e) {
  const t = Math.abs(r.x), n = Math.abs(r.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var st;
(function(r) {
  r.Click = "click", r.DragStart = "dragstart", r.Keydown = "keydown", r.ContextMenu = "contextmenu", r.Resize = "resize", r.SelectionChange = "selectionchange", r.VisibilityChange = "visibilitychange";
})(st || (st = {}));
function xs(r) {
  r.preventDefault();
}
function rf(r) {
  r.stopPropagation();
}
var de;
(function(r) {
  r.Space = "Space", r.Down = "ArrowDown", r.Right = "ArrowRight", r.Left = "ArrowLeft", r.Up = "ArrowUp", r.Esc = "Escape", r.Enter = "Enter", r.Tab = "Tab";
})(de || (de = {}));
const uo = {
  start: [de.Space, de.Enter],
  cancel: [de.Esc],
  end: [de.Space, de.Enter, de.Tab]
}, nf = (r, e) => {
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
class Fi {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new Sr(pr(t)), this.windowListeners = new Sr(Ve(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(st.Resize, this.handleCancel), this.windowListeners.add(st.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(st.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && co(n), t(pt);
  }
  handleKeyDown(e) {
    if (zn(e)) {
      const {
        active: t,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: s = uo,
        coordinateGetter: a = nf,
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
        const f = Pr(u, c), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = n.current;
        for (const v of g) {
          const _ = e.code, {
            isTop: N,
            isRight: b,
            isLeft: D,
            isBottom: R,
            maxScroll: x,
            minScroll: S
          } = oo(v), C = Yu(v), O = {
            x: Math.min(_ === de.Right ? C.right - C.width / 2 : C.right, Math.max(_ === de.Right ? C.left : C.left + C.width / 2, u.x)),
            y: Math.min(_ === de.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(_ === de.Down ? C.top : C.top + C.height / 2, u.y))
          }, W = _ === de.Right && !b || _ === de.Left && !D, P = _ === de.Down && !R || _ === de.Up && !N;
          if (W && O.x !== u.x) {
            const A = v.scrollLeft + f.x, k = _ === de.Right && A <= x.x || _ === de.Left && A >= S.x;
            if (k && !f.y) {
              v.scrollTo({
                left: A,
                behavior: o
              });
              return;
            }
            k ? m.x = v.scrollLeft - A : m.x = _ === de.Right ? v.scrollLeft - x.x : v.scrollLeft - S.x, m.x && v.scrollBy({
              left: -m.x,
              behavior: o
            });
            break;
          } else if (P && O.y !== u.y) {
            const A = v.scrollTop + f.y, k = _ === de.Down && A <= x.y || _ === de.Up && A >= S.y;
            if (k && !f.x) {
              v.scrollTo({
                top: A,
                behavior: o
              });
              return;
            }
            k ? m.y = v.scrollTop - A : m.y = _ === de.Down ? v.scrollTop - x.y : v.scrollTop - S.y, m.y && v.scrollBy({
              top: -m.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, or(Pr(u, this.referenceCoordinates), m));
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
Fi.activators = [{
  eventName: "onKeyDown",
  handler: (r, e, t) => {
    let {
      keyboardCodes: n = uo,
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
function ws(r) {
  return !!(r && "distance" in r);
}
function _s(r) {
  return !!(r && "delay" in r);
}
class Bi {
  constructor(e, t, n) {
    var i;
    n === void 0 && (n = tf(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: a
    } = s;
    this.props = e, this.events = t, this.document = pr(a), this.documentListeners = new Sr(this.document), this.listeners = new Sr(n), this.windowListeners = new Sr(Ve(a)), this.initialCoordinates = (i = pn(s)) != null ? i : pt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(st.Resize, this.handleCancel), this.windowListeners.add(st.DragStart, xs), this.windowListeners.add(st.VisibilityChange, this.handleCancel), this.windowListeners.add(st.ContextMenu, xs), this.documentListeners.add(st.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (_s(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (ws(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(st.Click, rf, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(st.SelectionChange, this.removeTextSelection), t(e));
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
    const l = (t = pn(e)) != null ? t : pt, d = Pr(i, l);
    if (!n && o) {
      if (ws(o)) {
        if (o.tolerance != null && Jn(d, o.tolerance))
          return this.handleCancel();
        if (Jn(d, o.distance))
          return this.handleStart();
      }
      if (_s(o) && Jn(d, o.tolerance))
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
    e.code === de.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const sf = {
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
class Hi extends Bi {
  constructor(e) {
    const {
      event: t
    } = e, n = pr(t.target);
    super(e, sf, n);
  }
}
Hi.activators = [{
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
const af = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var di;
(function(r) {
  r[r.RightClick = 2] = "RightClick";
})(di || (di = {}));
class of extends Bi {
  constructor(e) {
    super(e, af, pr(e.event.target));
  }
}
of.activators = [{
  eventName: "onMouseDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    return t.button === di.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Qn = {
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
class lf extends Bi {
  constructor(e) {
    super(e, Qn);
  }
  static setup() {
    return window.addEventListener(Qn.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Qn.move.name, e);
    };
    function e() {
    }
  }
}
lf.activators = [{
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
var Dr;
(function(r) {
  r[r.Pointer = 0] = "Pointer", r[r.DraggableRect = 1] = "DraggableRect";
})(Dr || (Dr = {}));
var vn;
(function(r) {
  r[r.TreeOrder = 0] = "TreeOrder", r[r.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(vn || (vn = {}));
function cf(r) {
  let {
    acceleration: e,
    activator: t = Dr.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: s,
    interval: a = 5,
    order: o = vn.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: f
  } = r;
  const m = uf({
    delta: u,
    disabled: !s
  }), [g, v] = xu(), _ = J({
    x: 0,
    y: 0
  }), N = J({
    x: 0,
    y: 0
  }), b = G(() => {
    switch (t) {
      case Dr.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Dr.DraggableRect:
        return i;
    }
  }, [t, i, l]), D = J(null), R = ee(() => {
    const S = D.current;
    if (!S)
      return;
    const C = _.current.x * N.current.x, O = _.current.y * N.current.y;
    S.scrollBy(C, O);
  }, []), x = G(() => o === vn.TreeOrder ? [...d].reverse() : d, [o, d]);
  re(
    () => {
      if (!s || !d.length || !b) {
        v();
        return;
      }
      for (const S of x) {
        if (n?.(S) === !1)
          continue;
        const C = d.indexOf(S), O = c[C];
        if (!O)
          continue;
        const {
          direction: W,
          speed: P
        } = Xu(S, O, b, e, f);
        for (const A of ["x", "y"])
          m[A][W[A]] || (P[A] = 0, W[A] = 0);
        if (P.x > 0 || P.y > 0) {
          v(), D.current = S, g(R, a), _.current = P, N.current = W;
          return;
        }
      }
      _.current = {
        x: 0,
        y: 0
      }, N.current = {
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
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(b),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      g,
      d,
      x,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f)
    ]
  );
}
const df = {
  x: {
    [Ae.Backward]: !1,
    [Ae.Forward]: !1
  },
  y: {
    [Ae.Backward]: !1,
    [Ae.Forward]: !1
  }
};
function uf(r) {
  let {
    delta: e,
    disabled: t
  } = r;
  const n = mn(e);
  return $r((i) => {
    if (t || !n || !i)
      return df;
    const s = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [Ae.Backward]: i.x[Ae.Backward] || s.x === -1,
        [Ae.Forward]: i.x[Ae.Forward] || s.x === 1
      },
      y: {
        [Ae.Backward]: i.y[Ae.Backward] || s.y === -1,
        [Ae.Forward]: i.y[Ae.Forward] || s.y === 1
      }
    };
  }, [t, e, n]);
}
function ff(r, e) {
  const t = e != null ? r.get(e) : void 0, n = t ? t.node.current : null;
  return $r((i) => {
    var s;
    return e == null ? null : (s = n ?? i) != null ? s : null;
  }, [n, e]);
}
function hf(r, e) {
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
var zr;
(function(r) {
  r[r.Always = 0] = "Always", r[r.BeforeDragging = 1] = "BeforeDragging", r[r.WhileDragging = 2] = "WhileDragging";
})(zr || (zr = {}));
var ui;
(function(r) {
  r.Optimized = "optimized";
})(ui || (ui = {}));
const Cs = /* @__PURE__ */ new Map();
function mf(r, e) {
  let {
    dragging: t,
    dependencies: n,
    config: i
  } = e;
  const [s, a] = Q(null), {
    frequency: o,
    measure: l,
    strategy: d
  } = i, c = J(r), u = _(), f = Ir(u), m = ee(function(N) {
    N === void 0 && (N = []), !f.current && a((b) => b === null ? N : b.concat(N.filter((D) => !b.includes(D))));
  }, [f]), g = J(null), v = $r((N) => {
    if (u && !t)
      return Cs;
    if (!N || N === Cs || c.current !== r || s != null) {
      const b = /* @__PURE__ */ new Map();
      for (let D of r) {
        if (!D)
          continue;
        if (s && s.length > 0 && !s.includes(D.id) && D.rect.current) {
          b.set(D.id, D.rect.current);
          continue;
        }
        const R = D.node.current, x = R ? new zi(l(R), R) : null;
        D.rect.current = x, x && b.set(D.id, x);
      }
      return b;
    }
    return N;
  }, [r, s, t, u, l]);
  return re(() => {
    c.current = r;
  }, [r]), re(
    () => {
      u || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), re(
    () => {
      s && s.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), re(
    () => {
      u || typeof o != "number" || g.current !== null || (g.current = setTimeout(() => {
        m(), g.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, u, m, ...n]
  ), {
    droppableRects: v,
    measureDroppableContainers: m,
    measuringScheduled: s != null
  };
  function _() {
    switch (d) {
      case zr.Always:
        return !1;
      case zr.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Vi(r, e) {
  return $r((t) => r ? t || (typeof e == "function" ? e(r) : r) : null, [e, r]);
}
function pf(r, e) {
  return Vi(r, e);
}
function gf(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Pn(e), i = G(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return re(() => () => i?.disconnect(), [i]), i;
}
function Bn(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Pn(e), i = G(
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
  return re(() => () => i?.disconnect(), [i]), i;
}
function vf(r) {
  return new zi(gr(r), r);
}
function ks(r, e, t) {
  e === void 0 && (e = vf);
  const [n, i] = Q(null);
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
  const a = gf({
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
  }), o = Bn({
    callback: s
  });
  return mt(() => {
    s(), r ? (o?.observe(r), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [r]), n;
}
function yf(r) {
  const e = Vi(r);
  return to(r, e);
}
const Es = [];
function bf(r) {
  const e = J(r), t = $r((n) => r ? n && n !== Es && r && e.current && r.parentNode === e.current.parentNode ? n : Fn(r) : Es, [r]);
  return re(() => {
    e.current = r;
  }, [r]), t;
}
function xf(r) {
  const [e, t] = Q(null), n = J(r), i = ee((s) => {
    const a = Yn(s.target);
    a && t((o) => o ? (o.set(a, ci(a)), new Map(o)) : null);
  }, []);
  return re(() => {
    const s = n.current;
    if (r !== s) {
      a(s);
      const o = r.map((l) => {
        const d = Yn(l);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, ci(d)]) : null;
      }).filter((l) => l != null);
      t(o.length ? new Map(o) : null), n.current = r;
    }
    return () => {
      a(r), a(s);
    };
    function a(o) {
      o.forEach((l) => {
        const d = Yn(l);
        d?.removeEventListener("scroll", i);
      });
    }
  }, [i, r]), G(() => r.length ? e ? Array.from(e.values()).reduce((s, a) => or(s, a), pt) : lo(r) : pt, [r, e]);
}
function Ss(r, e) {
  e === void 0 && (e = []);
  const t = J(null);
  return re(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), re(() => {
    const n = r !== pt;
    n && !t.current && (t.current = r), !n && t.current && (t.current = null);
  }, [r]), t.current ? Pr(r, t.current) : pt;
}
function wf(r) {
  re(
    () => {
      if (!In)
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
function _f(r, e) {
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
function fo(r) {
  return G(() => r ? Uu(r) : null, [r]);
}
const Ds = [];
function Cf(r, e) {
  e === void 0 && (e = gr);
  const [t] = r, n = fo(t ? Ve(t) : null), [i, s] = Q(Ds);
  function a() {
    s(() => r.length ? r.map((l) => ao(l) ? n : new zi(e(l), l)) : Ds);
  }
  const o = Bn({
    callback: a
  });
  return mt(() => {
    o?.disconnect(), a(), r.forEach((l) => o?.observe(l));
  }, [r]), i;
}
function ho(r) {
  if (!r)
    return null;
  if (r.children.length > 1)
    return r;
  const e = r.children[0];
  return jr(e) ? e : r;
}
function kf(r) {
  let {
    measure: e
  } = r;
  const [t, n] = Q(null), i = ee((d) => {
    for (const {
      target: c
    } of d)
      if (jr(c)) {
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
  }, [e]), s = Bn({
    callback: i
  }), a = ee((d) => {
    const c = ho(d);
    s?.disconnect(), c && s?.observe(c), n(c ? e(c) : null);
  }, [e, s]), [o, l] = hn(a);
  return G(() => ({
    nodeRef: o,
    rect: t,
    setRef: l
  }), [t, o, l]);
}
const Ef = [{
  sensor: Hi,
  options: {}
}, {
  sensor: Fi,
  options: {}
}], Sf = {
  current: {}
}, rn = {
  draggable: {
    measure: bs
  },
  droppable: {
    measure: bs,
    strategy: zr.WhileDragging,
    frequency: ui.Optimized
  },
  dragOverlay: {
    measure: gr
  }
};
class Nr extends Map {
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
const Df = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Nr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: gn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: rn,
  measureDroppableContainers: gn,
  windowRect: null,
  measuringScheduled: !1
}, mo = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: gn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: gn
}, Gr = /* @__PURE__ */ gt(mo), po = /* @__PURE__ */ gt(Df);
function Nf() {
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
      containers: new Nr()
    }
  };
}
function Rf(r, e) {
  switch (e.type) {
    case Ne.DragStart:
      return {
        ...r,
        draggable: {
          ...r.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case Ne.DragMove:
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
    case Ne.DragEnd:
    case Ne.DragCancel:
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
    case Ne.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: n
      } = t, i = new Nr(r.droppable.containers);
      return i.set(n, t), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: i
        }
      };
    }
    case Ne.SetDroppableDisabled: {
      const {
        id: t,
        key: n,
        disabled: i
      } = e, s = r.droppable.containers.get(t);
      if (!s || n !== s.key)
        return r;
      const a = new Nr(r.droppable.containers);
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
    case Ne.UnregisterDroppable: {
      const {
        id: t,
        key: n
      } = e, i = r.droppable.containers.get(t);
      if (!i || n !== i.key)
        return r;
      const s = new Nr(r.droppable.containers);
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
function Af(r) {
  let {
    disabled: e
  } = r;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: i
  } = lt(Gr), s = mn(n), a = mn(t?.id);
  return re(() => {
    if (!e && !n && s && a != null) {
      if (!zn(s) || document.activeElement === s.target)
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
          const u = Cu(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, i, a, s]), null;
}
function go(r, e) {
  let {
    transform: t,
    ...n
  } = e;
  return r != null && r.length ? r.reduce((i, s) => s({
    transform: i,
    ...n
  }), t) : t;
}
function Tf(r) {
  return G(
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
function Of(r) {
  let {
    activeNode: e,
    measure: t,
    initialRect: n,
    config: i = !0
  } = r;
  const s = J(!1), {
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
    const c = t(d), u = to(c, n);
    if (a || (u.x = 0), o || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = no(d);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, o, n, t]);
}
const Hn = /* @__PURE__ */ gt({
  ...pt,
  scaleX: 1,
  scaleY: 1
});
var Lt;
(function(r) {
  r[r.Uninitialized = 0] = "Uninitialized", r[r.Initializing = 1] = "Initializing", r[r.Initialized = 2] = "Initialized";
})(Lt || (Lt = {}));
const Mf = /* @__PURE__ */ Lc(function(e) {
  var t, n, i, s;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: d,
    sensors: c = Ef,
    collisionDetection: u = Hu,
    measuring: f,
    modifiers: m,
    ...g
  } = e;
  const v = Ic(Rf, void 0, Nf), [_, N] = v, [b, D] = Ru(), [R, x] = Q(Lt.Uninitialized), S = R === Lt.Initialized, {
    draggable: {
      active: C,
      nodes: O,
      translate: W
    },
    droppable: {
      containers: P
    }
  } = _, A = C != null ? O.get(C) : null, k = J({
    initial: null,
    translated: null
  }), T = G(() => {
    var Pe;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (Pe = A?.data) != null ? Pe : Sf,
      rect: k
    } : null;
  }, [C, A]), j = J(null), [F, X] = Q(null), [q, le] = Q(null), te = Ir(g, Object.values(g)), be = Wr("DndDescribedBy", a), Ze = G(() => P.getEnabled(), [P]), xe = Tf(f), {
    droppableRects: ze,
    measureDroppableContainers: Re,
    measuringScheduled: Oe
  } = mf(Ze, {
    dragging: S,
    dependencies: [W.x, W.y],
    config: xe.droppable
  }), Ee = ff(O, C), je = G(() => q ? pn(q) : null, [q]), ge = Hl(), _e = pf(Ee, xe.draggable.measure);
  Of({
    activeNode: C != null ? O.get(C) : null,
    config: ge.layoutShiftCompensation,
    initialRect: _e,
    measure: xe.draggable.measure
  });
  const ue = ks(Ee, xe.draggable.measure, _e), tt = ks(Ee ? Ee.parentElement : null), Me = J({
    activatorEvent: null,
    active: null,
    activeNode: Ee,
    collisionRect: null,
    collisions: null,
    droppableRects: ze,
    draggableNodes: O,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: P,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Le = P.getNodeFor((t = Me.current.over) == null ? void 0 : t.id), Ie = kf({
    measure: xe.dragOverlay.measure
  }), qe = (n = Ie.nodeRef.current) != null ? n : Ee, ut = S ? (i = Ie.rect) != null ? i : ue : null, Et = !!(Ie.nodeRef.current && Ie.rect), p = yf(Et ? null : ue), y = fo(qe ? Ve(qe) : null), E = bf(S ? Le ?? Ee : null), L = Cf(E), I = go(m, {
    transform: {
      x: W.x - p.x,
      y: W.y - p.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: q,
    active: T,
    activeNodeRect: ue,
    containerNodeRect: tt,
    draggingNodeRect: ut,
    over: Me.current.over,
    overlayNodeRect: Ie.rect,
    scrollableAncestors: E,
    scrollableAncestorRects: L,
    windowRect: y
  }), M = je ? or(je, W) : null, U = xf(E), se = Ss(U), we = Ss(U, [ue]), ve = or(I, se), Fe = ut ? $u(ut, I) : null, Zt = T && Fe ? u({
    active: T,
    collisionRect: Fe,
    droppableRects: ze,
    droppableContainers: Ze,
    pointerCoordinates: M
  }) : null, Jt = eo(Zt, "id"), [rt, qr] = Q(null), Kr = Et ? I : or(I, we), Un = Vu(Kr, (s = rt?.rect) != null ? s : null, ue), Qt = J(null), is = ee(
    (Pe, Ke) => {
      let {
        sensor: Xe,
        options: At
      } = Ke;
      if (j.current == null)
        return;
      const nt = O.get(j.current);
      if (!nt)
        return;
      const Ye = Pe.nativeEvent, yt = new Xe({
        active: j.current,
        activeNode: nt,
        event: Ye,
        options: At,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Me,
        onAbort(Te) {
          if (!O.get(Te))
            return;
          const {
            onDragAbort: bt
          } = te.current, St = {
            id: Te
          };
          bt?.(St), b({
            type: "onDragAbort",
            event: St
          });
        },
        onPending(Te, Tt, bt, St) {
          if (!O.get(Te))
            return;
          const {
            onDragPending: yr
          } = te.current, Ot = {
            id: Te,
            constraint: Tt,
            initialCoordinates: bt,
            offset: St
          };
          yr?.(Ot), b({
            type: "onDragPending",
            event: Ot
          });
        },
        onStart(Te) {
          const Tt = j.current;
          if (Tt == null)
            return;
          const bt = O.get(Tt);
          if (!bt)
            return;
          const {
            onDragStart: St
          } = te.current, vr = {
            activatorEvent: Ye,
            active: {
              id: Tt,
              data: bt.data,
              rect: k
            }
          };
          Yr(() => {
            St?.(vr), x(Lt.Initializing), N({
              type: Ne.DragStart,
              initialCoordinates: Te,
              active: Tt
            }), b({
              type: "onDragStart",
              event: vr
            }), X(Qt.current), le(Ye);
          });
        },
        onMove(Te) {
          N({
            type: Ne.DragMove,
            coordinates: Te
          });
        },
        onEnd: er(Ne.DragEnd),
        onCancel: er(Ne.DragCancel)
      });
      Qt.current = yt;
      function er(Te) {
        return async function() {
          const {
            active: bt,
            collisions: St,
            over: vr,
            scrollAdjustedTranslate: yr
          } = Me.current;
          let Ot = null;
          if (bt && yr) {
            const {
              cancelDrop: br
            } = te.current;
            Ot = {
              activatorEvent: Ye,
              active: bt,
              collisions: St,
              delta: yr,
              over: vr
            }, Te === Ne.DragEnd && typeof br == "function" && await Promise.resolve(br(Ot)) && (Te = Ne.DragCancel);
          }
          j.current = null, Yr(() => {
            N({
              type: Te
            }), x(Lt.Uninitialized), qr(null), X(null), le(null), Qt.current = null;
            const br = Te === Ne.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ot) {
              const Zn = te.current[br];
              Zn?.(Ot), b({
                type: br,
                event: Ot
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [O]
  ), zl = ee((Pe, Ke) => (Xe, At) => {
    const nt = Xe.nativeEvent, Ye = O.get(At);
    if (
      // Another sensor is already instantiating
      j.current !== null || // No active draggable
      !Ye || // Event has already been captured
      nt.dndKit || nt.defaultPrevented
    )
      return;
    const yt = {
      active: Ye
    };
    Pe(Xe, Ke.options, yt) === !0 && (nt.dndKit = {
      capturedBy: Ke.sensor
    }, j.current = At, is(Xe, Ke));
  }, [O, is]), ss = hf(c, zl);
  wf(c), mt(() => {
    ue && R === Lt.Initializing && x(Lt.Initialized);
  }, [ue, R]), re(
    () => {
      const {
        onDragMove: Pe
      } = te.current, {
        active: Ke,
        activatorEvent: Xe,
        collisions: At,
        over: nt
      } = Me.current;
      if (!Ke || !Xe)
        return;
      const Ye = {
        active: Ke,
        activatorEvent: Xe,
        collisions: At,
        delta: {
          x: ve.x,
          y: ve.y
        },
        over: nt
      };
      Yr(() => {
        Pe?.(Ye), b({
          type: "onDragMove",
          event: Ye
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ve.x, ve.y]
  ), re(
    () => {
      const {
        active: Pe,
        activatorEvent: Ke,
        collisions: Xe,
        droppableContainers: At,
        scrollAdjustedTranslate: nt
      } = Me.current;
      if (!Pe || j.current == null || !Ke || !nt)
        return;
      const {
        onDragOver: Ye
      } = te.current, yt = At.get(Jt), er = yt && yt.rect.current ? {
        id: yt.id,
        rect: yt.rect.current,
        data: yt.data,
        disabled: yt.disabled
      } : null, Te = {
        active: Pe,
        activatorEvent: Ke,
        collisions: Xe,
        delta: {
          x: nt.x,
          y: nt.y
        },
        over: er
      };
      Yr(() => {
        qr(er), Ye?.(Te), b({
          type: "onDragOver",
          event: Te
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Jt]
  ), mt(() => {
    Me.current = {
      activatorEvent: q,
      active: T,
      activeNode: Ee,
      collisionRect: Fe,
      collisions: Zt,
      droppableRects: ze,
      draggableNodes: O,
      draggingNode: qe,
      draggingNodeRect: ut,
      droppableContainers: P,
      over: rt,
      scrollableAncestors: E,
      scrollAdjustedTranslate: ve
    }, k.current = {
      initial: ut,
      translated: Fe
    };
  }, [T, Ee, Zt, Fe, O, qe, ut, ze, P, rt, E, ve]), cf({
    ...ge,
    delta: W,
    draggingRect: Fe,
    pointerCoordinates: M,
    scrollableAncestors: E,
    scrollableAncestorRects: L
  });
  const Fl = G(() => ({
    active: T,
    activeNode: Ee,
    activeNodeRect: ue,
    activatorEvent: q,
    collisions: Zt,
    containerNodeRect: tt,
    dragOverlay: Ie,
    draggableNodes: O,
    droppableContainers: P,
    droppableRects: ze,
    over: rt,
    measureDroppableContainers: Re,
    scrollableAncestors: E,
    scrollableAncestorRects: L,
    measuringConfiguration: xe,
    measuringScheduled: Oe,
    windowRect: y
  }), [T, Ee, ue, q, Zt, tt, Ie, O, P, ze, rt, Re, E, L, xe, Oe, y]), Bl = G(() => ({
    activatorEvent: q,
    activators: ss,
    active: T,
    activeNodeRect: ue,
    ariaDescribedById: {
      draggable: be
    },
    dispatch: N,
    draggableNodes: O,
    over: rt,
    measureDroppableContainers: Re
  }), [q, ss, T, ue, N, be, O, rt, Re]);
  return V.createElement(Qa.Provider, {
    value: D
  }, V.createElement(Gr.Provider, {
    value: Bl
  }, V.createElement(po.Provider, {
    value: Fl
  }, V.createElement(Hn.Provider, {
    value: Un
  }, d)), V.createElement(Af, {
    disabled: o?.restoreFocus === !1
  })), V.createElement(Ou, {
    ...o,
    hiddenTextDescribedById: be
  }));
  function Hl() {
    const Pe = F?.autoScrollEnabled === !1, Ke = typeof l == "object" ? l.enabled === !1 : l === !1, Xe = S && !Pe && !Ke;
    return typeof l == "object" ? {
      ...l,
      enabled: Xe
    } : {
      enabled: Xe
    };
  }
}), Lf = /* @__PURE__ */ gt(null), Ns = "button", If = "Draggable";
function Pf(r) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: i
  } = r;
  const s = Wr(If), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: f
  } = lt(Gr), {
    role: m = Ns,
    roleDescription: g = "draggable",
    tabIndex: v = 0
  } = i ?? {}, _ = l?.id === e, N = lt(_ ? Hn : Lf), [b, D] = hn(), [R, x] = hn(), S = _f(a, e), C = Ir(t);
  mt(
    () => (u.set(e, {
      id: e,
      key: s,
      node: b,
      activatorNode: R,
      data: C
    }), () => {
      const W = u.get(e);
      W && W.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const O = G(() => ({
    role: m,
    tabIndex: v,
    "aria-disabled": n,
    "aria-pressed": _ && m === Ns ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": c.draggable
  }), [n, m, v, _, g, c.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: d,
    attributes: O,
    isDragging: _,
    listeners: n ? void 0 : S,
    node: b,
    over: f,
    setNodeRef: D,
    setActivatorNodeRef: x,
    transform: N
  };
}
function vo() {
  return lt(po);
}
const zf = "Droppable", Ff = {
  timeout: 25
};
function Bf(r) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: i
  } = r;
  const s = Wr(zf), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: d
  } = lt(Gr), c = J({
    disabled: t
  }), u = J(!1), f = J(null), m = J(null), {
    disabled: g,
    updateMeasurementsFor: v,
    timeout: _
  } = {
    ...Ff,
    ...i
  }, N = Ir(v ?? n), b = ee(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        d(Array.isArray(N.current) ? N.current : [N.current]), m.current = null;
      }, _);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [_]
  ), D = Bn({
    callback: b,
    disabled: g || !a
  }), R = ee((O, W) => {
    D && (W && (D.unobserve(W), u.current = !1), O && D.observe(O));
  }, [D]), [x, S] = hn(R), C = Ir(e);
  return re(() => {
    !D || !x.current || (D.disconnect(), u.current = !1, D.observe(x.current));
  }, [x, D]), re(
    () => (o({
      type: Ne.RegisterDroppable,
      element: {
        id: n,
        key: s,
        disabled: t,
        node: x,
        rect: f,
        data: C
      }
    }), () => o({
      type: Ne.UnregisterDroppable,
      key: s,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), re(() => {
    t !== c.current.disabled && (o({
      type: Ne.SetDroppableDisabled,
      id: n,
      key: s,
      disabled: t
    }), c.current.disabled = t);
  }, [n, s, t, o]), {
    active: a,
    rect: f,
    isOver: l?.id === n,
    node: x,
    over: l,
    setNodeRef: S
  };
}
function Hf(r) {
  let {
    animation: e,
    children: t
  } = r;
  const [n, i] = Q(null), [s, a] = Q(null), o = mn(t);
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
  }, [e, n, s]), V.createElement(V.Fragment, null, t, n ? Pc(n, {
    ref: a
  }) : null);
}
const Vf = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function jf(r) {
  let {
    children: e
  } = r;
  return V.createElement(Gr.Provider, {
    value: mo
  }, V.createElement(Hn.Provider, {
    value: Vf
  }, e));
}
const $f = {
  position: "fixed",
  touchAction: "none"
}, Wf = (r) => zn(r) ? "transform 250ms ease" : void 0, Gf = /* @__PURE__ */ Ue((r, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: i,
    children: s,
    className: a,
    rect: o,
    style: l,
    transform: d,
    transition: c = Wf
  } = r;
  if (!o)
    return null;
  const u = i ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...$f,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: Bt.Transform.toString(u),
    transformOrigin: i && n ? Iu(n, o) : void 0,
    transition: typeof c == "function" ? c(n) : c,
    ...l
  };
  return V.createElement(t, {
    className: a,
    style: f,
    ref: e
  }, s);
}), Uf = (r) => (e) => {
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
}, Zf = (r) => {
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
}, qf = {
  duration: 250,
  easing: "ease",
  keyframes: Zf,
  sideEffects: /* @__PURE__ */ Uf({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Kf(r) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: i
  } = r;
  return Pn((s, a) => {
    if (e === null)
      return;
    const o = t.get(s);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const d = ho(a);
    if (!d)
      return;
    const {
      transform: c
    } = Ve(a).getComputedStyle(a), u = ro(c);
    if (!u)
      return;
    const f = typeof e == "function" ? e : Xf(e);
    return co(l, i.draggable.measure), f({
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
function Xf(r) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: i
  } = {
    ...qf,
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
    }, m = i({
      ...d,
      active: a,
      dragOverlay: o,
      transform: {
        initial: l,
        final: f
      }
    }), [g] = m, v = m[m.length - 1];
    if (JSON.stringify(g) === JSON.stringify(v))
      return;
    const _ = n?.({
      active: a,
      dragOverlay: o,
      ...d
    }), N = o.node.animate(m, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((b) => {
      N.onfinish = () => {
        _?.(), b();
      };
    });
  };
}
let Rs = 0;
function Yf(r) {
  return G(() => {
    if (r != null)
      return Rs++, Rs;
  }, [r]);
}
const Jf = /* @__PURE__ */ V.memo((r) => {
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
    containerNodeRect: m,
    draggableNodes: g,
    droppableContainers: v,
    dragOverlay: _,
    over: N,
    measuringConfiguration: b,
    scrollableAncestors: D,
    scrollableAncestorRects: R,
    windowRect: x
  } = vo(), S = lt(Hn), C = Yf(u?.id), O = go(a, {
    activatorEvent: c,
    active: u,
    activeNodeRect: f,
    containerNodeRect: m,
    draggingNodeRect: _.rect,
    over: N,
    overlayNodeRect: _.rect,
    scrollableAncestors: D,
    scrollableAncestorRects: R,
    transform: S,
    windowRect: x
  }), W = Vi(f), P = Kf({
    config: n,
    draggableNodes: g,
    droppableContainers: v,
    measuringConfiguration: b
  }), A = W ? _.setRef : void 0;
  return V.createElement(jf, null, V.createElement(Hf, {
    animation: P
  }, u && C ? V.createElement(Gf, {
    key: C,
    id: u.id,
    ref: A,
    as: o,
    activatorEvent: c,
    adjustScale: e,
    className: l,
    transition: s,
    rect: W,
    style: {
      zIndex: d,
      ...i
    },
    transform: O
  }, t) : null));
});
function ji(r, e, t) {
  const n = r.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function Qf(r, e) {
  return r.reduce((t, n, i) => {
    const s = e.get(n);
    return s && (t[i] = s), t;
  }, Array(r.length));
}
function en(r) {
  return r !== null && r >= 0;
}
function eh(r, e) {
  if (r === e)
    return !0;
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function th(r) {
  return typeof r == "boolean" ? {
    draggable: r,
    droppable: r
  } : r;
}
const yo = (r) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: i
  } = r;
  const s = ji(e, n, t), a = e[i], o = s[i];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, bo = "Sortable", xo = /* @__PURE__ */ V.createContext({
  activeIndex: -1,
  containerId: bo,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: yo,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function rh(r) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: i = yo,
    disabled: s = !1
  } = r;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: d,
    measureDroppableContainers: c
  } = vo(), u = Wr(bo, t), f = o.rect !== null, m = G(() => n.map((S) => typeof S == "object" && "id" in S ? S.id : S), [n]), g = a != null, v = a ? m.indexOf(a.id) : -1, _ = d ? m.indexOf(d.id) : -1, N = J(m), b = !eh(m, N.current), D = _ !== -1 && v === -1 || b, R = th(s);
  mt(() => {
    b && g && c(m);
  }, [b, m, g, c]), re(() => {
    N.current = m;
  }, [m]);
  const x = G(
    () => ({
      activeIndex: v,
      containerId: u,
      disabled: R,
      disableTransforms: D,
      items: m,
      overIndex: _,
      useDragOverlay: f,
      sortedRects: Qf(m, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, u, R.draggable, R.droppable, D, m, _, l, f, i]
  );
  return V.createElement(xo.Provider, {
    value: x
  }, e);
}
const nh = (r) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: i
  } = r;
  return ji(t, n, i).indexOf(e);
}, ih = (r) => {
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
}, sh = {
  duration: 200,
  easing: "ease"
}, wo = "transform", ah = /* @__PURE__ */ Bt.Transition.toString({
  property: wo,
  duration: 0,
  easing: "linear"
}), oh = {
  roleDescription: "sortable"
};
function lh(r) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: i
  } = r;
  const [s, a] = Q(null), o = J(t);
  return mt(() => {
    if (!e && t !== o.current && n.current) {
      const l = i.current;
      if (l) {
        const d = gr(n.current, {
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
  }, [e, t, n, i]), re(() => {
    s && a(null);
  }, [s]), s;
}
function ch(r) {
  let {
    animateLayoutChanges: e = ih,
    attributes: t,
    disabled: n,
    data: i,
    getNewIndex: s = nh,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: d = sh
  } = r;
  const {
    items: c,
    containerId: u,
    activeIndex: f,
    disabled: m,
    disableTransforms: g,
    sortedRects: v,
    overIndex: _,
    useDragOverlay: N,
    strategy: b
  } = lt(xo), D = dh(n, m), R = c.indexOf(a), x = G(() => ({
    sortable: {
      containerId: u,
      index: R,
      items: c
    },
    ...i
  }), [u, i, R, c]), S = G(() => c.slice(c.indexOf(a)), [c, a]), {
    rect: C,
    node: O,
    isOver: W,
    setNodeRef: P
  } = Bf({
    id: a,
    data: x,
    disabled: D.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: S,
      ...l
    }
  }), {
    active: A,
    activatorEvent: k,
    activeNodeRect: T,
    attributes: j,
    setNodeRef: F,
    listeners: X,
    isDragging: q,
    over: le,
    setActivatorNodeRef: te,
    transform: be
  } = Pf({
    id: a,
    data: x,
    attributes: {
      ...oh,
      ...t
    },
    disabled: D.draggable
  }), Ze = bu(P, F), xe = !!A, ze = xe && !g && en(f) && en(_), Re = !N && q, Oe = Re && ze ? be : null, je = ze ? Oe ?? (o ?? b)({
    rects: v,
    activeNodeRect: T,
    activeIndex: f,
    overIndex: _,
    index: R
  }) : null, ge = en(f) && en(_) ? s({
    id: a,
    items: c,
    activeIndex: f,
    overIndex: _
  }) : R, _e = A?.id, ue = J({
    activeId: _e,
    items: c,
    newIndex: ge,
    containerId: u
  }), tt = c !== ue.current.items, Me = e({
    active: A,
    containerId: u,
    isDragging: q,
    isSorting: xe,
    id: a,
    index: R,
    items: c,
    newIndex: ue.current.newIndex,
    previousItems: ue.current.items,
    previousContainerId: ue.current.containerId,
    transition: d,
    wasDragging: ue.current.activeId != null
  }), Le = lh({
    disabled: !Me,
    index: R,
    node: O,
    rect: C
  });
  return re(() => {
    xe && ue.current.newIndex !== ge && (ue.current.newIndex = ge), u !== ue.current.containerId && (ue.current.containerId = u), c !== ue.current.items && (ue.current.items = c);
  }, [xe, ge, u, c]), re(() => {
    if (_e === ue.current.activeId)
      return;
    if (_e != null && ue.current.activeId == null) {
      ue.current.activeId = _e;
      return;
    }
    const qe = setTimeout(() => {
      ue.current.activeId = _e;
    }, 50);
    return () => clearTimeout(qe);
  }, [_e]), {
    active: A,
    activeIndex: f,
    attributes: j,
    data: x,
    rect: C,
    index: R,
    newIndex: ge,
    items: c,
    isOver: W,
    isSorting: xe,
    isDragging: q,
    listeners: X,
    node: O,
    overIndex: _,
    over: le,
    setNodeRef: Ze,
    setActivatorNodeRef: te,
    setDroppableNodeRef: P,
    setDraggableNodeRef: F,
    transform: Le ?? je,
    transition: Ie()
  };
  function Ie() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Le || // Or to prevent items jumping to back to their "new" position when items change
      tt && ue.current.newIndex === R
    )
      return ah;
    if (!(Re && !zn(k) || !d) && (xe || Me))
      return Bt.Transition.toString({
        ...d,
        property: wo
      });
  }
}
function dh(r, e) {
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
function yn(r) {
  if (!r)
    return !1;
  const e = r.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const uh = [de.Down, de.Right, de.Up, de.Left], fh = (r, e) => {
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
  if (uh.includes(r.code)) {
    if (r.preventDefault(), !t || !n)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const f = i.get(u.id);
      if (f)
        switch (r.code) {
          case de.Down:
            n.top < f.top && l.push(u);
            break;
          case de.Up:
            n.top > f.top && l.push(u);
            break;
          case de.Left:
            n.left > f.left && l.push(u);
            break;
          case de.Right:
            n.left < f.left && l.push(u);
            break;
        }
    });
    const d = Fu({
      collisionRect: n,
      droppableRects: i,
      droppableContainers: l
    });
    let c = eo(d, "id");
    if (c === a?.id && d.length > 1 && (c = d[1].id), c != null) {
      const u = s.get(t.id), f = s.get(c), m = f ? i.get(f.id) : null, g = f?.node.current;
      if (g && m && u && f) {
        const _ = Fn(g).some((S, C) => o[C] !== S), N = _o(u, f), b = hh(u, f), D = _ || !N ? {
          x: 0,
          y: 0
        } : {
          x: b ? n.width - m.width : 0,
          y: b ? n.height - m.height : 0
        }, R = {
          x: m.left,
          y: m.top
        };
        return D.x && D.y ? R : Pr(R, D);
      }
    }
  }
};
function _o(r, e) {
  return !yn(r) || !yn(e) ? !1 : r.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function hh(r, e) {
  return !yn(r) || !yn(e) || !_o(r, e) ? !1 : r.data.current.sortable.index < e.data.current.sortable.index;
}
const As = ({ id: r, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: i, transform: s, transition: a } = ch({ id: r }), o = {
    transform: Bt.Translate.toString(s),
    transition: a,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return /* @__PURE__ */ h("div", { ref: i, style: o, ...t, ...n, children: e });
}, $i = ({
  blocks: r,
  sortable: e = !1,
  onSort: t = () => {
  },
  main: n = !1
}) => {
  const [i, s] = Q([]);
  ua(() => {
    s(
      r.map((u, f) => ({
        id: u.id ?? f.toString(),
        render: u.render
      }))
    );
  }, [r]);
  const [a, o] = Q(null), l = Mu(
    vs(Hi),
    vs(Fi, {
      coordinateGetter: fh
    })
  ), d = (u) => {
    o(u.active.id);
  }, c = (u) => {
    const { active: f, over: m } = u;
    o(null), m && f.id !== m.id && s((g) => {
      const v = g.findIndex((N) => N.id === f.id), _ = g.findIndex((N) => N.id === m.id);
      return ji(g, v, _);
    });
  };
  return /* @__PURE__ */ h("div", { className: ie("flex flex-wrap items-stretch gap-4", n && "flex-1"), children: /* @__PURE__ */ H(
    Mf,
    {
      sensors: l,
      onDragStart: d,
      onDragEnd: c,
      children: [
        /* @__PURE__ */ h(rh, { items: i, children: i.map((u) => /* @__PURE__ */ h(As, { id: u.id, children: u.render }, u.id)) }),
        /* @__PURE__ */ h(Jf, { children: a ? /* @__PURE__ */ h(As, { id: a, children: i.find((u) => u.id === a)?.render }) : null })
      ]
    }
  ) });
};
$i.displayName = "GroupMasonry";
$i.__isPageLayoutGroup = !0;
const mh = Ue(function({ children: e, aside: t, header: n, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Xa("Page", e, ["block", "group"]), /* @__PURE__ */ h("div", { ref: s, className: "h-full", children: /* @__PURE__ */ H(
    "div",
    {
      className: ie(
        "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
        "flex-col",
        "overflow-y-auto",
        "md:sticky md:top-0 md:max-h-full"
      ),
      children: [
        /* @__PURE__ */ H(
          "main",
          {
            className: ie(
              "sm:min-h-xs h-fit border-0",
              "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2",
              "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden",
              i === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
              "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
            ),
            children: [
              n && /* @__PURE__ */ h(
                "header",
                {
                  className: ie(
                    "sticky top-0 z-30 bg-f1-background"
                  ),
                  children: n
                }
              ),
              /* @__PURE__ */ h("div", { className: "flex-1", children: e })
            ]
          }
        ),
        t && /* @__PURE__ */ h(
          "aside",
          {
            className: ie(
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
}), Ig = {
  Page: he(Qe("Page", mh)),
  Block: he(Qe("Block", Ln)),
  BlockContent: he(
    Qe("BlockContent", gu)
  ),
  Group: he(Qe("Group", Li)),
  GroupGrid: he(
    Qe("GroupGrid", Mn)
  ),
  GroupMasonry: he(
    Qe("GroupMasonry", $i)
  )
}, Pg = Bd, zg = Vd, Fg = he(
  ct(
    {
      name: "HomeLayout",
      type: "layout"
    },
    zd
  )
);
function lr(r) {
  "@babel/helpers - typeof";
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, lr(r);
}
function ph(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function gh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Eo(n.key), n);
  }
}
function vh(r, e, t) {
  return e && gh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function yh(r, e, t) {
  return e = bn(e), bh(r, Co() ? Reflect.construct(e, t || [], bn(r).constructor) : e.apply(r, t));
}
function bh(r, e) {
  if (e && (lr(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return xh(r);
}
function xh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Co() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Co = function() {
    return !!r;
  })();
}
function bn(r) {
  return bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, bn(r);
}
function wh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && fi(r, e);
}
function fi(r, e) {
  return fi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, fi(r, e);
}
function ko(r, e, t) {
  return e = Eo(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Eo(r) {
  var e = _h(r, "string");
  return lr(e) == "symbol" ? e : e + "";
}
function _h(r, e) {
  if (lr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Vn = /* @__PURE__ */ (function(r) {
  function e() {
    return ph(this, e), yh(this, e, arguments);
  }
  return wh(e, r), vh(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(V.Component);
ko(Vn, "displayName", "ZAxis");
ko(Vn, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Ch = ["option", "isActive"];
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
function kh(r, e) {
  if (r == null) return {};
  var t = Eh(r, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function Eh(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function Sh(r) {
  var e = r.option, t = r.isActive, n = kh(r, Ch);
  return typeof e == "string" ? /* @__PURE__ */ V.createElement(cs, Rr({
    option: /* @__PURE__ */ V.createElement(jc, Rr({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ V.createElement(cs, Rr({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, n));
}
function cr(r) {
  "@babel/helpers - typeof";
  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, cr(r);
}
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Ar.apply(this, arguments);
}
function Ts(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function it(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ts(Object(t), !0).forEach(function(n) {
      zt(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ts(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Dh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Os(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Do(n.key), n);
  }
}
function Nh(r, e, t) {
  return e && Os(r.prototype, e), t && Os(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Rh(r, e, t) {
  return e = xn(e), Ah(r, So() ? Reflect.construct(e, t || [], xn(r).constructor) : e.apply(r, t));
}
function Ah(r, e) {
  if (e && (cr(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Th(r);
}
function Th(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function So() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (So = function() {
    return !!r;
  })();
}
function xn(r) {
  return xn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, xn(r);
}
function Oh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && hi(r, e);
}
function hi(r, e) {
  return hi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, hi(r, e);
}
function zt(r, e, t) {
  return e = Do(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Do(r) {
  var e = Mh(r, "string");
  return cr(e) == "symbol" ? e : e + "";
}
function Mh(r, e) {
  if (cr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (cr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Ur = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    Dh(this, e);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return t = Rh(this, e, [].concat(i)), zt(t, "state", {
      isAnimationFinished: !1
    }), zt(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), zt(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), zt(t, "id", Kc("recharts-scatter-")), t;
  }
  return Oh(e, r), Nh(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, s = this.props, a = s.shape, o = s.activeShape, l = s.activeIndex, d = qn(this.props, !1);
      return n.map(function(c, u) {
        var f = l === u, m = f ? o : a, g = it(it({}, d), c);
        return /* @__PURE__ */ V.createElement(xr, Ar({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c?.cx, "-").concat(c?.cy, "-").concat(c?.size, "-").concat(u)
        }, $c(i.props, c, u), {
          role: "img"
        }), /* @__PURE__ */ V.createElement(Sh, Ar({
          option: m,
          isActive: f,
          key: "symbol-".concat(u)
        }, g)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, s = i.points, a = i.isAnimationActive, o = i.animationBegin, l = i.animationDuration, d = i.animationEasing, c = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ V.createElement(Wc, {
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
        var m = f.t, g = s.map(function(v, _) {
          var N = u && u[_];
          if (N) {
            var b = Jr(N.cx, v.cx), D = Jr(N.cy, v.cy), R = Jr(N.size, v.size);
            return it(it({}, v), {}, {
              cx: b(m),
              cy: D(m),
              size: R(m)
            });
          }
          var x = Jr(0, v.size);
          return it(it({}, v), {}, {
            size: x(m)
          });
        });
        return /* @__PURE__ */ V.createElement(xr, null, n.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, s = n.isAnimationActive, a = this.state.prevPoints;
      return s && i && i.length && (!a || !Na(a, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, a = i.xAxis, o = i.yAxis, l = i.children, d = Ra(l, Gc);
      return d ? d.map(function(c, u) {
        var f = c.props, m = f.direction, g = f.dataKey;
        return /* @__PURE__ */ V.cloneElement(c, {
          key: "".concat(m, "-").concat(g, "-").concat(s[u]),
          data: s,
          xAxis: a,
          yAxis: o,
          layout: m === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(_, N) {
            return {
              x: _.cx,
              y: _.cy,
              value: m === "x" ? +_.node.x : +_.node.y,
              errorVal: tn(_, N)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, s = n.line, a = n.lineType, o = n.lineJointType, l = qn(this.props, !1), d = qn(s, !1), c, u;
      if (a === "joint")
        c = i.map(function(D) {
          return {
            x: D.cx,
            y: D.cy
          };
        });
      else if (a === "fitting") {
        var f = Uc(i), m = f.xmin, g = f.xmax, v = f.a, _ = f.b, N = function(R) {
          return v * R + _;
        };
        c = [{
          x: m,
          y: N(m)
        }, {
          x: g,
          y: N(g)
        }];
      }
      var b = it(it(it({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, d), {}, {
        points: c
      });
      return /* @__PURE__ */ V.isValidElement(s) ? u = /* @__PURE__ */ V.cloneElement(s, b) : Zc(s) ? u = s(b) : u = /* @__PURE__ */ V.createElement(qc, Ar({}, b, {
        type: o
      })), /* @__PURE__ */ V.createElement(xr, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, s = n.points, a = n.line, o = n.className, l = n.xAxis, d = n.yAxis, c = n.left, u = n.top, f = n.width, m = n.height, g = n.id, v = n.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var _ = this.state.isAnimationFinished, N = Ul("recharts-scatter", o), b = l && l.allowDataOverflow, D = d && d.allowDataOverflow, R = b || D, x = nr(g) ? this.id : g;
      return /* @__PURE__ */ V.createElement(xr, {
        className: N,
        clipPath: R ? "url(#clipPath-".concat(x, ")") : null
      }, b || D ? /* @__PURE__ */ V.createElement("defs", null, /* @__PURE__ */ V.createElement("clipPath", {
        id: "clipPath-".concat(x)
      }, /* @__PURE__ */ V.createElement("rect", {
        x: b ? c : c - f / 2,
        y: D ? u : u - m / 2,
        width: b ? f : f * 2,
        height: D ? m : m * 2
      }))) : null, a && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ V.createElement(xr, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || _) && Aa.renderCallByParent(this.props, s));
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
})(zc);
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
  isAnimationActive: !Xc.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
zt(Ur, "getComposedData", function(r) {
  var e = r.xAxis, t = r.yAxis, n = r.zAxis, i = r.item, s = r.displayedData, a = r.xAxisTicks, o = r.yAxisTicks, l = r.offset, d = i.props.tooltipType, c = Ra(i.props.children, Yc), u = nr(e.dataKey) ? i.props.dataKey : e.dataKey, f = nr(t.dataKey) ? i.props.dataKey : t.dataKey, m = n && n.dataKey, g = n ? n.range : Vn.defaultProps.range, v = g && g[0], _ = e.scale.bandwidth ? e.scale.bandwidth() : 0, N = t.scale.bandwidth ? t.scale.bandwidth() : 0, b = s.map(function(D, R) {
    var x = tn(D, u), S = tn(D, f), C = !nr(m) && tn(D, m) || "-", O = [{
      name: nr(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: x,
      payload: D,
      dataKey: u,
      type: d
    }, {
      name: nr(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: S,
      payload: D,
      dataKey: f,
      type: d
    }];
    C !== "-" && O.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: C,
      payload: D,
      dataKey: m,
      type: d
    });
    var W = ds({
      axis: e,
      ticks: a,
      bandSize: _,
      entry: D,
      index: R,
      dataKey: u
    }), P = ds({
      axis: t,
      ticks: o,
      bandSize: N,
      entry: D,
      index: R,
      dataKey: f
    }), A = C !== "-" ? n.scale(C) : v, k = Math.sqrt(Math.max(A, 0) / Math.PI);
    return it(it({}, D), {}, {
      cx: W,
      cy: P,
      x: W - k,
      y: P - k,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * k,
      height: 2 * k,
      size: A,
      node: {
        x,
        y: S,
        z: C
      },
      tooltipPayload: O,
      tooltipPosition: {
        x: W,
        y: P
      },
      payload: D
    }, c && c[R] && c[R].props);
  });
  return it({
    points: b
  }, l);
});
var Lh = Jc({
  chartName: "ComposedChart",
  GraphicalChild: [Ta, Qc, Oa, Ur],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ma
  }, {
    axisType: "yAxis",
    AxisComp: li
  }, {
    axisType: "zAxis",
    AxisComp: Vn
  }],
  formatAxisMap: ed
});
const Ih = (r) => {
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
    return /* @__PURE__ */ h(
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
}, Ph = ({
  dataConfig: r,
  data: e,
  xAxis: t,
  yAxis: n = { hide: !0 },
  label: i = !1,
  hideTooltip: s = !1,
  hideGrid: a = !1,
  aspect: o,
  legend: l,
  showValueUnderLabel: d = !1,
  bar: c,
  line: u,
  scatter: f,
  onClick: m
}, g) => {
  const v = td(e), _ = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], N = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], b = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], D = [
    ..._,
    ...N,
    ...b
  ], R = Math.max(
    ...v.flatMap(
      (C) => D.map(
        (O) => rd(
          n?.tickFormatter ? n.tickFormatter(`${C[O]}`) : `${C[O]}`
        )
      )
    )
  ), x = [c, u, f].filter(
    (C) => C?.axisPosition === "left"
  ), S = [c, u, f].filter(
    (C) => C?.axisPosition === "right"
  );
  return /* @__PURE__ */ h(nd, { config: r, ref: g, aspect: o, children: /* @__PURE__ */ H(
    Lh,
    {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: d ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (C) => {
        if (!m || !C.activeLabel || !C.activePayload)
          return;
        const O = {
          label: C.activeLabel,
          values: {}
        };
        for (const W of C.activePayload)
          O.values[W.name] = W.value;
        m(O);
      },
      children: [
        !s && /* @__PURE__ */ h(
          id,
          {
            ...sd(),
            content: /* @__PURE__ */ h(ad, { yAxisFormatter: n.tickFormatter })
          }
        ),
        !a && /* @__PURE__ */ h(od, { ...ld() }),
        x.length > 0 && /* @__PURE__ */ h(
          li,
          {
            ...us(n),
            tick: !0,
            width: n.width ?? R + 20 + (S.length > 0 && x[0]?.axisLabel ? 20 : 0),
            hide: n.hide || x.some((C) => C?.hideAxis),
            label: x[0]?.axisLabel ? {
              value: x[0].axisLabel,
              angle: -90,
              position: "insideLeft"
            } : void 0
          }
        ),
        S.length > 0 && /* @__PURE__ */ h(
          li,
          {
            ...us(n),
            yAxisId: "right",
            orientation: "right",
            tick: !0,
            width: n.width ?? R + 20 + (x.length > 0 && S[0]?.axisLabel ? 20 : 0),
            hide: n.hide || S.some((C) => C?.hideAxis),
            label: S[0]?.axisLabel ? {
              value: S[0].axisLabel,
              angle: 90,
              position: "insideRight"
            } : void 0
          }
        ),
        /* @__PURE__ */ h(
          Ma,
          {
            ...cd(t),
            hide: t?.hide,
            tick: d ? (C) => {
              const { x: O, y: W, payload: P } = C, A = e.find((j) => j.label === P.value)?.values || "", k = Object.keys(A).length === 1 ? Object.values(A)?.[0] : void 0, T = k !== void 0 && n.tickFormatter ? n.tickFormatter(`${k}`) : k.toLocaleString();
              return /* @__PURE__ */ H("g", { transform: `translate(${O},${W})`, children: [
                /* @__PURE__ */ h(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: P.value
                  }
                ),
                !!k && /* @__PURE__ */ h(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: T
                  }
                )
              ] });
            } : void 0
          }
        ),
        _.map((C, O) => /* @__PURE__ */ h(
          Oa,
          {
            isAnimationActive: !1,
            dataKey: String(C),
            fill: r[C].color ? Er(r[C].color) : Kn(O),
            radius: 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ h(
              Aa,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${String(C)}`
            )
          },
          `bar-${String(C)}`
        )),
        N.map((C, O) => /* @__PURE__ */ h(
          Ta,
          {
            type: u?.lineType ?? "natural",
            dataKey: String(C),
            stroke: r[C].color ? Er(r[C].color) : Kn(_.length + O),
            strokeWidth: 2,
            dot: u?.dot ?? !1,
            isAnimationActive: !1,
            yAxisId: u?.axisPosition === "right" ? "right" : void 0
          },
          `line-${String(C)}`
        )),
        b.map((C, O) => /* @__PURE__ */ h(
          Ur,
          {
            dataKey: String(C),
            fill: r[C].color ? Er(r[C].color) : Kn(
              _.length + N.length + O
            ),
            r: 4,
            isAnimationActive: !1,
            yAxisId: f?.axisPosition === "right" ? "right" : void 0,
            shape: Ih(String(C))
          },
          `scatter-${String(C)}`
        )),
        l && /* @__PURE__ */ h(
          dd,
          {
            content: /* @__PURE__ */ h(ud, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, zh = La(Ph), Fh = ({ value: r, max: e = 100, label: t, color: n }, i) => {
  const s = n ? Er(n) : Er("categorical-1"), a = r / e * 100;
  return /* @__PURE__ */ H("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ h("div", { className: "flex-grow", children: /* @__PURE__ */ h(
      fd,
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
    t && /* @__PURE__ */ h("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, Bh = La(Fh), Bg = he(
  ct({ name: "AreaChart", type: "info" }, hd)
), Hg = he(
  ct({ name: "BarChart", type: "info" }, md)
), Vg = he(
  ct(
    { name: "CategoryBarChart", type: "info" },
    pd
  )
), jg = he(
  ct({ name: "LineChart", type: "info" }, gd)
), $g = he(
  ct({ name: "PieChart", type: "info" }, vd)
), Wg = he(
  ct(
    { name: "VerticalBarChart", type: "info" },
    yd
  )
), Gg = he(
  ct({ name: "ProgressBarChart", type: "info" }, Bh)
), Ug = he(
  ct({ name: "ComboChart", type: "info" }, zh)
), Hh = (r) => typeof r == "boolean" || !r ? {
  show: !!r,
  invertStatus: !1
} : {
  show: r.show ?? !0,
  invertStatus: r.invertStatus ?? !1
}, No = ({ label: r, ...e }) => {
  const t = bd(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = Hh(e.trend), s = t(e.comparison), a = xd(
    n.numericValue,
    n.formatterOptions
  ), o = fs(s.numericValue), l = fs(n.numericValue), d = G(() => {
    if (!(!o || !i.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, i.show]);
  return /* @__PURE__ */ H("div", { className: "flex flex-col gap-2", children: [
    r && /* @__PURE__ */ h("div", { children: r }),
    /* @__PURE__ */ H("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ h("span", { className: "font-bold text-2xl", children: a }),
      o !== void 0 && /* @__PURE__ */ h(
        wd,
        {
          percentage: d,
          amount: s,
          invertStatus: i.invertStatus,
          hint: e.comparisonHint
        }
      )
    ] })
  ] });
}, Vh = () => /* @__PURE__ */ H("div", { className: "relative flex h-full w-full cursor-progress flex-col gap-2", children: [
  /* @__PURE__ */ h(xt, { className: "h-3 w-full max-w-16 rounded-md" }),
  /* @__PURE__ */ H("div", { className: "flex flex-row flex-wrap items-end gap-2", children: [
    /* @__PURE__ */ h(xt, { className: "h-8 w-full max-w-36 rounded-sm" }),
    /* @__PURE__ */ h(xt, { className: "h-6 w-full max-w-18 rounded-sm" })
  ] })
] });
No.displayName = "F0BigNumber";
const jh = fa(No, Vh), Zg = he(
  Qe("F0BigNumber", jh)
), Ro = {
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
}, Ao = {
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
}, $h = {}, Wh = {
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
}, Gh = {
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
}, Uh = {
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
}, Zh = {
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
}, qh = {
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
}, Kh = {
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
}, To = {
  width: Wh,
  height: Gh,
  minWidth: Uh,
  minHeight: Zh,
  maxWidth: qh,
  maxHeight: Kh
}, Oo = {
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
}, Mo = {
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
}, Lo = {
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
}, Xh = {}, Io = {
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
}, Po = {
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
}, Yh = {}, Jh = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, zo = {
  overflow: Jh,
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
}, Qh = {}, Fo = {
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
}, em = {}, tm = {
  ...Oo,
  ...Fo,
  ...Po,
  ...Lo,
  ...Io,
  ...To,
  ...Ro,
  ...Ao,
  ...zo,
  ...Mo
};
function rm(r, e) {
  return e.split(" ").map((t) => `${r}:${t}`).join(" ");
}
function nm(r, e) {
  const t = [];
  for (const [n, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = tm[n];
    if (!s) continue;
    const a = s[String(i)];
    a && t.push(rm(r, a));
  }
  return t.join(" ");
}
const im = jt({
  base: "",
  variants: {
    ...Oo,
    ...Fo,
    ...Po,
    ...Lo,
    ...Io,
    ...To,
    ...Ro,
    ...Ao,
    ...zo,
    ...Mo
  },
  defaultVariants: {
    ...em,
    ...Yh,
    ...Xh,
    ...$h,
    ...Qh
  }
}), sm = ["sm", "md", "lg", "xl"], Bo = Ue(
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
    margin: d,
    marginX: c,
    marginY: u,
    marginTop: f,
    marginBottom: m,
    marginLeft: g,
    marginRight: v,
    // Gap
    gap: _,
    // Grid
    columns: N,
    rows: b,
    colSpan: D,
    colStart: R,
    rowSpan: x,
    // Dimensions
    width: S,
    height: C,
    minWidth: O,
    minHeight: W,
    maxWidth: P,
    maxHeight: A,
    // Background
    background: k,
    // Border
    borderColor: T,
    border: j,
    borderTop: F,
    borderBottom: X,
    borderLeft: q,
    borderRight: le,
    borderRadius: te,
    borderRadiusTopLeft: be,
    borderRadiusTopRight: Ze,
    borderRadiusBottomLeft: xe,
    borderRadiusBottomRight: ze,
    borderStyle: Re,
    // Overflow
    overflow: Oe,
    overflowX: Ee,
    overflowY: je,
    // Divider
    divider: ge,
    dividerColor: _e,
    // Flex
    alignItems: ue,
    justifyContent: tt,
    flexDirection: Me,
    flexWrap: Le,
    grow: Ie,
    shrink: qe,
    // Responsive breakpoint overrides
    sm: ut,
    md: Et,
    lg: p,
    xl: y,
    ...E
  }, L) => {
    const I = F && F !== "none" || X && X !== "none" || q && q !== "none" || le && le !== "none", M = j && j !== "none" || I, U = { sm: ut, md: Et, lg: p, xl: y }, se = sm.map((we) => {
      const ve = U[we];
      return ve ? nm(we, ve) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ h(
      "div",
      {
        ref: L,
        className: ie(
          I && "border-0",
          im({
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
            marginTop: f,
            marginBottom: m,
            marginLeft: g,
            marginRight: v,
            gap: _,
            columns: N,
            rows: b,
            colSpan: D,
            colStart: R,
            rowSpan: x,
            width: S,
            height: C,
            minWidth: O,
            minHeight: W,
            maxWidth: P,
            maxHeight: A,
            background: k,
            borderColor: T,
            border: j,
            borderTop: F,
            borderBottom: X,
            borderLeft: q,
            borderRight: le,
            borderRadius: te,
            borderRadiusTopLeft: be,
            borderRadiusTopRight: Ze,
            borderRadiusBottomLeft: xe,
            borderRadiusBottomRight: ze,
            borderStyle: Re,
            overflow: Oe,
            overflowX: Ee,
            overflowY: je,
            divider: ge,
            dividerColor: _e,
            alignItems: ue,
            justifyContent: tt,
            flexDirection: Me,
            flexWrap: Le,
            grow: Ie,
            shrink: qe
          }),
          se,
          M && !T && "border-f1-border",
          ge && !_e && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...E
      }
    );
  }
);
Bo.displayName = "F0Box";
const qg = ct(
  {
    name: "F0Box",
    type: "layout"
  },
  Bo
), Kg = Zl.filter(
  (r) => r !== "ai"
), Xg = ha, Yg = ["default", "outline", "neutral"], Jg = ha, Qg = ["sm", "md", "lg"], ev = ["compact", "expanded"], tv = ql, rv = [
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
], mi = ({ count: r, list: e }) => {
  const [t, n] = Q(!1), i = /* @__PURE__ */ h(sn, { label: `+${r}` });
  return e?.length ? /* @__PURE__ */ H(ma, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ h(pa, { asChild: !0, children: /* @__PURE__ */ h("button", { className: Si("inline-flex flex-shrink-0 items-center"), children: i }) }),
    /* @__PURE__ */ h(
      ga,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ H(va, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          e.map((s, a) => /* @__PURE__ */ h(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ h(sn, { ...s })
            },
            a
          )),
          /* @__PURE__ */ h(
            ya,
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
mi.displayName = "ChipCounter";
const Ho = ({
  chips: r,
  max: e = 4,
  remainingCount: t,
  layout: n = "compact"
}) => {
  if (n === "fill")
    return /* @__PURE__ */ h(
      Kl,
      {
        items: r,
        renderListItem: (l) => /* @__PURE__ */ h(sn, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: t !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ h(
          mi,
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
  return /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
    i.map((l, d) => /* @__PURE__ */ h(sn, { ...l }, d)),
    o && /* @__PURE__ */ h(
      mi,
      {
        count: a,
        list: t ? void 0 : s
      }
    )
  ] });
};
Ho.displayName = "F0ChipList";
const nv = he(
  Qe("F0ChipList", Ho)
), iv = Xl, am = jt({
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
}), om = jt({
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
}), lm = ({
  title: r,
  description: e,
  action: t,
  link: n,
  icon: i,
  variant: s = "neutral"
}) => {
  const a = J(null);
  return /* @__PURE__ */ h("div", { ref: a, className: "@container", children: /* @__PURE__ */ h("div", { className: am({ variant: s }), children: /* @__PURE__ */ H(
    "div",
    {
      className: ie(
        "flex flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between"
      ),
      children: [
        /* @__PURE__ */ H("div", { className: "flex flex-row gap-2", children: [
          /* @__PURE__ */ h("div", { className: "h-6 w-6 flex-shrink-0", children: s === "neutral" ? /* @__PURE__ */ h(Yl, { icon: i || Jl, size: "sm" }) : /* @__PURE__ */ h(Ia, { type: s, size: "sm" }) }),
          /* @__PURE__ */ H("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ h("p", { className: om({ variant: s }), children: r }),
            /* @__PURE__ */ h("p", { className: "text-base text-f1-foreground-secondary", children: e })
          ] })
        ] }),
        (t || n) && /* @__PURE__ */ H(
          "div",
          {
            className: ie(
              "flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0"
            ),
            children: [
              n && /* @__PURE__ */ h(
                Ql,
                {
                  href: n.href,
                  target: "_blank",
                  variant: "link",
                  size: "sm",
                  children: n.label
                }
              ),
              t && /* @__PURE__ */ h(
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
}, sv = he(lm), Vo = ({
  disableClose: r = !1,
  onClose: e,
  isOpen: t,
  children: n,
  position: i = "right",
  size: s = "md",
  primaryAction: a,
  secondaryAction: o,
  title: l,
  description: d,
  module: c,
  otherActions: u,
  tabs: f,
  modal: m = !1,
  activeTabId: g,
  setActiveTabId: v,
  disableContentPadding: _
}) => {
  const [N, b] = Q(t);
  re(() => {
    b(t);
  }, [t]);
  const D = G(() => /* @__PURE__ */ H(Wt, { children: [
    /* @__PURE__ */ h(
      ec,
      {
        title: l,
        description: d,
        module: c,
        otherActions: u,
        tabs: f,
        activeTabId: g,
        setActiveTabId: v,
        disableClose: r
      }
    ),
    /* @__PURE__ */ h(tc, { disableContentPadding: _ ?? !1, children: n }),
    /* @__PURE__ */ h(
      rc,
      {
        primaryAction: a ?? [],
        secondaryAction: o ?? [],
        onClose: () => b(!1)
      }
    )
  ] }), [
    l,
    d,
    c,
    u,
    f,
    g,
    v,
    r,
    _,
    n,
    a,
    o
  ]);
  return /* @__PURE__ */ h(
    nc,
    {
      isOpen: N,
      onClose: e,
      position: i,
      size: s,
      modal: m,
      showOverlay: m,
      fullHeight: !0,
      onOpenChange: b,
      children: D
    }
  );
}, cm = ic, jo = (r) => {
  const e = cm.reduce((t, n) => {
    const { [n]: i, ...s } = t;
    return s;
  }, r);
  return /* @__PURE__ */ h(Vo, { ...e });
};
jo.displayName = "F0Drawer";
const av = Qe("F0Drawer", jo), dm = 388;
function $o({
  filters: r,
  value: e,
  onChange: t,
  height: n,
  width: i = 600,
  className: s,
  showApplyButton: a = !0,
  applyButtonLabel: o
}) {
  const l = $t(), d = Object.keys(r)[0] ?? null, [c, u] = Q(d), [f, m] = Q(e);
  re(() => {
    m(e);
  }, [e]), re(() => {
    if (!c && r) {
      const N = Object.keys(r);
      if (N.length > 0) {
        const b = N.find((D) => {
          const R = f[D], x = os(r[D].type);
          return R !== void 0 && !x.isEmpty(R, {
            schema: r[D],
            i18n: l
          });
        });
        u(b ?? N[0]);
      }
    }
  }, [r, c, f, l]);
  const g = (N, b) => {
    const D = {
      ...f,
      [N]: b
    };
    m(D), a || t(D);
  }, v = () => {
    t(f);
  }, _ = G(() => n || Object.entries(r).reduce((b, [D, R]) => {
    const x = os(R.type);
    return Math.max(b, x?.formHeight || dm);
  }, 0), [r, n]);
  return !r || Object.keys(r).length === 0 ? null : /* @__PURE__ */ h(
    "div",
    {
      className: ie(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        s
      ),
      style: { maxWidth: i },
      children: /* @__PURE__ */ h(
        sc,
        {
          filters: r,
          tempFilters: f,
          selectedFilterKey: c,
          onFilterSelect: u,
          onFilterChange: g,
          onApply: v,
          height: _,
          showApplyButton: a,
          applyButtonLabel: o
        }
      )
    }
  );
}
$o.displayName = "F0FilterPickerContent";
const ov = he(
  $o
);
var Zr = (r) => r.type === "checkbox", qt = (r) => r instanceof Date, He = (r) => r == null;
const Wo = (r) => typeof r == "object";
var ke = (r) => !He(r) && !Array.isArray(r) && Wo(r) && !qt(r), Go = (r) => ke(r) && r.target ? Zr(r.target) ? r.target.checked : r.target.value : r, um = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r, Uo = (r, e) => r.has(um(e)), fm = (r) => {
  const e = r.constructor && r.constructor.prototype;
  return ke(e) && e.hasOwnProperty("isPrototypeOf");
}, Wi = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function $e(r) {
  let e;
  const t = Array.isArray(r), n = typeof FileList < "u" ? r instanceof FileList : !1;
  if (r instanceof Date)
    e = new Date(r);
  else if (r instanceof Set)
    e = new Set(r);
  else if (!(Wi && (r instanceof Blob || n)) && (t || ke(r)))
    if (e = t ? [] : {}, !t && !fm(r))
      e = r;
    else
      for (const i in r)
        r.hasOwnProperty(i) && (e[i] = $e(r[i]));
  else
    return r;
  return e;
}
var jn = (r) => Array.isArray(r) ? r.filter(Boolean) : [], Ce = (r) => r === void 0, B = (r, e, t) => {
  if (!e || !ke(r))
    return t;
  const n = jn(e.split(/[,[\].]+?/)).reduce((i, s) => He(i) ? i : i[s], r);
  return Ce(n) || n === r ? Ce(r[e]) ? t : r[e] : n;
}, at = (r) => typeof r == "boolean", Gi = (r) => /^\w*$/.test(r), Zo = (r) => jn(r.replace(/["|']|\]/g, "").split(/\.|\[/)), pe = (r, e, t) => {
  let n = -1;
  const i = Gi(e) ? [e] : Zo(e), s = i.length, a = s - 1;
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
const wn = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ft = {
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
}, qo = V.createContext(null), Gt = () => V.useContext(qo), hm = (r) => {
  const { children: e, ...t } = r;
  return V.createElement(qo.Provider, { value: t }, e);
};
var Ko = (r, e, t, n = !0) => {
  const i = {
    defaultValues: e._defaultValues
  };
  for (const s in r)
    Object.defineProperty(i, s, {
      get: () => {
        const a = s;
        return e._proxyFormState[a] !== ft.all && (e._proxyFormState[a] = !n || ft.all), t && (t[a] = !0), r[a];
      }
    });
  return i;
}, We = (r) => ke(r) && !Object.keys(r).length, Xo = (r, e, t, n) => {
  t(r);
  const { name: i, ...s } = r;
  return We(s) || Object.keys(s).length >= Object.keys(e).length || Object.keys(s).find((a) => e[a] === (!n || ft.all));
}, Tr = (r) => Array.isArray(r) ? r : [r], Yo = (r, e, t) => !r || !e || r === e || Tr(r).some((n) => n && (t ? n === e : n.startsWith(e) || e.startsWith(n)));
function Ui(r) {
  const e = V.useRef(r);
  e.current = r, V.useEffect(() => {
    const t = !r.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [r.disabled]);
}
function mm(r) {
  const e = Gt(), { control: t = e.control, disabled: n, name: i, exact: s } = r || {}, [a, o] = V.useState(t._formState), l = V.useRef(!0), d = V.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), c = V.useRef(i);
  return c.current = i, Ui({
    disabled: n,
    next: (u) => l.current && Yo(c.current, u.name, s) && Xo(u, d.current, t._updateFormState) && o({
      ...t._formState,
      ...u
    }),
    subject: t._subjects.state
  }), V.useEffect(() => (l.current = !0, d.current.isValid && t._updateValid(!0), () => {
    l.current = !1;
  }), [t]), V.useMemo(() => Ko(a, t, d.current, !1), [a, t]);
}
var Ct = (r) => typeof r == "string", Jo = (r, e, t, n, i) => Ct(r) ? (n && e.watch.add(r), B(t, r, i)) : Array.isArray(r) ? r.map((s) => (n && e.watch.add(s), B(t, s))) : (n && (e.watchAll = !0), t);
function pm(r) {
  const e = Gt(), { control: t = e.control, name: n, defaultValue: i, disabled: s, exact: a } = r || {}, o = V.useRef(n);
  o.current = n, Ui({
    disabled: s,
    subject: t._subjects.values,
    next: (c) => {
      Yo(o.current, c.name, a) && d($e(Jo(o.current, t._names, c.values || t._formValues, !1, i)));
    }
  });
  const [l, d] = V.useState(t._getWatch(n, i));
  return V.useEffect(() => t._removeUnmounted()), l;
}
function gm(r) {
  const e = Gt(), { name: t, disabled: n, control: i = e.control, shouldUnregister: s } = r, a = Uo(i._names.array, t), o = pm({
    control: i,
    name: t,
    defaultValue: B(i._formValues, t, B(i._defaultValues, t, r.defaultValue)),
    exact: !0
  }), l = mm({
    control: i,
    name: t,
    exact: !0
  }), d = V.useRef(i.register(t, {
    ...r.rules,
    value: o,
    ...at(r.disabled) ? { disabled: r.disabled } : {}
  })), c = V.useMemo(() => Object.defineProperties({}, {
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
  }), [l, t]), u = V.useMemo(() => ({
    name: t,
    value: o,
    ...at(n) || l.disabled ? { disabled: l.disabled || n } : {},
    onChange: (f) => d.current.onChange({
      target: {
        value: Go(f),
        name: t
      },
      type: wn.CHANGE
    }),
    onBlur: () => d.current.onBlur({
      target: {
        value: B(i._formValues, t),
        name: t
      },
      type: wn.BLUR
    }),
    ref: (f) => {
      const m = B(i._fields, t);
      m && f && (m._f.ref = {
        focus: () => f.focus(),
        select: () => f.select(),
        setCustomValidity: (g) => f.setCustomValidity(g),
        reportValidity: () => f.reportValidity()
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
  return V.useEffect(() => {
    const f = i._options.shouldUnregister || s, m = (g, v) => {
      const _ = B(i._fields, g);
      _ && _._f && (_._f.mount = v);
    };
    if (m(t, !0), f) {
      const g = $e(B(i._options.defaultValues, t));
      pe(i._defaultValues, t, g), Ce(B(i._formValues, t)) && pe(i._formValues, t, g);
    }
    return !a && i.register(t), () => {
      (a ? f && !i._state.action : f) ? i.unregister(t) : m(t, !1);
    };
  }, [t, i, a, s]), V.useEffect(() => {
    i._updateDisabledField({
      disabled: n,
      fields: i._fields,
      name: t
    });
  }, [n, t, i]), V.useMemo(() => ({
    field: u,
    formState: l,
    fieldState: c
  }), [u, l, c]);
}
const vm = (r) => r.render(gm(r));
var Qo = (r, e, t, n, i) => e ? {
  ...t[r],
  types: {
    ...t[r] && t[r].types ? t[r].types : {},
    [n]: i || !0
  }
} : {}, Ms = (r) => ({
  isOnSubmit: !r || r === ft.onSubmit,
  isOnBlur: r === ft.onBlur,
  isOnChange: r === ft.onChange,
  isOnAll: r === ft.all,
  isOnTouch: r === ft.onTouched
}), Ls = (r, e, t) => !t && (e.watchAll || e.watch.has(r) || [...e.watch].some((n) => r.startsWith(n) && /^\.\w+/.test(r.slice(n.length))));
const Or = (r, e, t, n) => {
  for (const i of t || Object.keys(r)) {
    const s = B(r, i);
    if (s) {
      const { _f: a, ...o } = s;
      if (a) {
        if (a.refs && a.refs[0] && e(a.refs[0], i) && !n)
          return !0;
        if (a.ref && e(a.ref, a.name) && !n)
          return !0;
        if (Or(o, e))
          break;
      } else if (ke(o) && Or(o, e))
        break;
    }
  }
};
var ym = (r, e, t) => {
  const n = Tr(B(r, t));
  return pe(n, "root", e[t]), pe(r, t, n), r;
}, Zi = (r) => r.type === "file", _t = (r) => typeof r == "function", _n = (r) => {
  if (!Wi)
    return !1;
  const e = r ? r.ownerDocument : 0;
  return r instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, nn = (r) => Ct(r), qi = (r) => r.type === "radio", Cn = (r) => r instanceof RegExp;
const Is = {
  value: !1,
  isValid: !1
}, Ps = { value: !0, isValid: !0 };
var el = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const e = r.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: e, isValid: !!e.length };
    }
    return r[0].checked && !r[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      r[0].attributes && !Ce(r[0].attributes.value) ? Ce(r[0].value) || r[0].value === "" ? Ps : { value: r[0].value, isValid: !0 } : Ps
    ) : Is;
  }
  return Is;
};
const zs = {
  isValid: !1,
  value: null
};
var tl = (r) => Array.isArray(r) ? r.reduce((e, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : e, zs) : zs;
function Fs(r, e, t = "validate") {
  if (nn(r) || Array.isArray(r) && r.every(nn) || at(r) && !r)
    return {
      type: t,
      message: nn(r) ? r : "",
      ref: e
    };
}
var tr = (r) => ke(r) && !Cn(r) ? r : {
  value: r,
  message: ""
}, Bs = async (r, e, t, n, i, s) => {
  const { ref: a, refs: o, required: l, maxLength: d, minLength: c, min: u, max: f, pattern: m, validate: g, name: v, valueAsNumber: _, mount: N } = r._f, b = B(t, v);
  if (!N || e.has(v))
    return {};
  const D = o ? o[0] : a, R = (k) => {
    i && D.reportValidity && (D.setCustomValidity(at(k) ? "" : k || ""), D.reportValidity());
  }, x = {}, S = qi(a), C = Zr(a), O = S || C, W = (_ || Zi(a)) && Ce(a.value) && Ce(b) || _n(a) && a.value === "" || b === "" || Array.isArray(b) && !b.length, P = Qo.bind(null, v, n, x), A = (k, T, j, F = Dt.maxLength, X = Dt.minLength) => {
    const q = k ? T : j;
    x[v] = {
      type: k ? F : X,
      message: q,
      ref: a,
      ...P(k ? F : X, q)
    };
  };
  if (s ? !Array.isArray(b) || !b.length : l && (!O && (W || He(b)) || at(b) && !b || C && !el(o).isValid || S && !tl(o).isValid)) {
    const { value: k, message: T } = nn(l) ? { value: !!l, message: l } : tr(l);
    if (k && (x[v] = {
      type: Dt.required,
      message: T,
      ref: D,
      ...P(Dt.required, T)
    }, !n))
      return R(T), x;
  }
  if (!W && (!He(u) || !He(f))) {
    let k, T;
    const j = tr(f), F = tr(u);
    if (!He(b) && !isNaN(b)) {
      const X = a.valueAsNumber || b && +b;
      He(j.value) || (k = X > j.value), He(F.value) || (T = X < F.value);
    } else {
      const X = a.valueAsDate || new Date(b), q = (be) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + be), le = a.type == "time", te = a.type == "week";
      Ct(j.value) && b && (k = le ? q(b) > q(j.value) : te ? b > j.value : X > new Date(j.value)), Ct(F.value) && b && (T = le ? q(b) < q(F.value) : te ? b < F.value : X < new Date(F.value));
    }
    if ((k || T) && (A(!!k, j.message, F.message, Dt.max, Dt.min), !n))
      return R(x[v].message), x;
  }
  if ((d || c) && !W && (Ct(b) || s && Array.isArray(b))) {
    const k = tr(d), T = tr(c), j = !He(k.value) && b.length > +k.value, F = !He(T.value) && b.length < +T.value;
    if ((j || F) && (A(j, k.message, T.message), !n))
      return R(x[v].message), x;
  }
  if (m && !W && Ct(b)) {
    const { value: k, message: T } = tr(m);
    if (Cn(k) && !b.match(k) && (x[v] = {
      type: Dt.pattern,
      message: T,
      ref: a,
      ...P(Dt.pattern, T)
    }, !n))
      return R(T), x;
  }
  if (g) {
    if (_t(g)) {
      const k = await g(b, t), T = Fs(k, D);
      if (T && (x[v] = {
        ...T,
        ...P(Dt.validate, T.message)
      }, !n))
        return R(T.message), x;
    } else if (ke(g)) {
      let k = {};
      for (const T in g) {
        if (!We(k) && !n)
          break;
        const j = Fs(await g[T](b, t), D, T);
        j && (k = {
          ...j,
          ...P(T, j.message)
        }, R(j.message), n && (x[v] = k));
      }
      if (!We(k) && (x[v] = {
        ref: D,
        ...k
      }, !n))
        return x;
    }
  }
  return R(!0), x;
};
function bm(r, e) {
  const t = e.slice(0, -1).length;
  let n = 0;
  for (; n < t; )
    r = Ce(r) ? n++ : r[e[n++]];
  return r;
}
function xm(r) {
  for (const e in r)
    if (r.hasOwnProperty(e) && !Ce(r[e]))
      return !1;
  return !0;
}
function De(r, e) {
  const t = Array.isArray(e) ? e : Gi(e) ? [e] : Zo(e), n = t.length === 1 ? r : bm(r, t), i = t.length - 1, s = t[i];
  return n && delete n[s], i !== 0 && (ke(n) && We(n) || Array.isArray(n) && xm(n)) && De(r, t.slice(0, -1)), r;
}
var ei = () => {
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
}, pi = (r) => He(r) || !Wo(r);
function Pt(r, e) {
  if (pi(r) || pi(e))
    return r === e;
  if (qt(r) && qt(e))
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
      if (qt(s) && qt(a) || ke(s) && ke(a) || Array.isArray(s) && Array.isArray(a) ? !Pt(s, a) : s !== a)
        return !1;
    }
  }
  return !0;
}
var rl = (r) => r.type === "select-multiple", wm = (r) => qi(r) || Zr(r), ti = (r) => _n(r) && r.isConnected, nl = (r) => {
  for (const e in r)
    if (_t(r[e]))
      return !0;
  return !1;
};
function kn(r, e = {}) {
  const t = Array.isArray(r);
  if (ke(r) || t)
    for (const n in r)
      Array.isArray(r[n]) || ke(r[n]) && !nl(r[n]) ? (e[n] = Array.isArray(r[n]) ? [] : {}, kn(r[n], e[n])) : He(r[n]) || (e[n] = !0);
  return e;
}
function il(r, e, t) {
  const n = Array.isArray(r);
  if (ke(r) || n)
    for (const i in r)
      Array.isArray(r[i]) || ke(r[i]) && !nl(r[i]) ? Ce(e) || pi(t[i]) ? t[i] = Array.isArray(r[i]) ? kn(r[i], []) : { ...kn(r[i]) } : il(r[i], He(e) ? {} : e[i], t[i]) : t[i] = !Pt(r[i], e[i]);
  return t;
}
var _r = (r, e) => il(r, e, kn(e)), sl = (r, { valueAsNumber: e, valueAsDate: t, setValueAs: n }) => Ce(r) ? r : e ? r === "" ? NaN : r && +r : t && Ct(r) ? new Date(r) : n ? n(r) : r;
function ri(r) {
  const e = r.ref;
  return Zi(e) ? e.files : qi(e) ? tl(r.refs).value : rl(e) ? [...e.selectedOptions].map(({ value: t }) => t) : Zr(e) ? el(r.refs).value : sl(Ce(e.value) ? r.ref.value : e.value, r);
}
var _m = (r, e, t, n) => {
  const i = {};
  for (const s of r) {
    const a = B(e, s);
    a && pe(i, s, a._f);
  }
  return {
    criteriaMode: t,
    names: [...r],
    fields: i,
    shouldUseNativeValidation: n
  };
}, Cr = (r) => Ce(r) ? r : Cn(r) ? r.source : ke(r) ? Cn(r.value) ? r.value.source : r.value : r;
const Hs = "AsyncFunction";
var Cm = (r) => !!r && !!r.validate && !!(_t(r.validate) && r.validate.constructor.name === Hs || ke(r.validate) && Object.values(r.validate).find((e) => e.constructor.name === Hs)), km = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function Vs(r, e, t) {
  const n = B(r, t);
  if (n || Gi(t))
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
var Em = (r, e, t, n, i) => i.isOnAll ? !1 : !t && i.isOnTouch ? !(e || r) : (t ? n.isOnBlur : i.isOnBlur) ? !r : (t ? n.isOnChange : i.isOnChange) ? r : !0, Sm = (r, e) => !jn(B(r, e)).length && De(r, e);
const Dm = {
  mode: ft.onSubmit,
  reValidateMode: ft.onChange,
  shouldFocusError: !0
};
function Nm(r = {}) {
  let e = {
    ...Dm,
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
    values: ei(),
    array: ei(),
    state: ei()
  }, f = Ms(e.mode), m = Ms(e.reValidateMode), g = e.criteriaMode === ft.all, v = (p) => (y) => {
    clearTimeout(d), d = setTimeout(p, y);
  }, _ = async (p) => {
    if (!e.disabled && (c.isValid || p)) {
      const y = e.resolver ? We((await O()).errors) : await P(n, !0);
      y !== t.isValid && u.state.next({
        isValid: y
      });
    }
  }, N = (p, y) => {
    !e.disabled && (c.isValidating || c.validatingFields) && ((p || Array.from(o.mount)).forEach((E) => {
      E && (y ? pe(t.validatingFields, E, y) : De(t.validatingFields, E));
    }), u.state.next({
      validatingFields: t.validatingFields,
      isValidating: !We(t.validatingFields)
    }));
  }, b = (p, y = [], E, L, I = !0, M = !0) => {
    if (L && E && !e.disabled) {
      if (a.action = !0, M && Array.isArray(B(n, p))) {
        const U = E(B(n, p), L.argA, L.argB);
        I && pe(n, p, U);
      }
      if (M && Array.isArray(B(t.errors, p))) {
        const U = E(B(t.errors, p), L.argA, L.argB);
        I && pe(t.errors, p, U), Sm(t.errors, p);
      }
      if (c.touchedFields && M && Array.isArray(B(t.touchedFields, p))) {
        const U = E(B(t.touchedFields, p), L.argA, L.argB);
        I && pe(t.touchedFields, p, U);
      }
      c.dirtyFields && (t.dirtyFields = _r(i, s)), u.state.next({
        name: p,
        isDirty: k(p, y),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      pe(s, p, y);
  }, D = (p, y) => {
    pe(t.errors, p, y), u.state.next({
      errors: t.errors
    });
  }, R = (p) => {
    t.errors = p, u.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, x = (p, y, E, L) => {
    const I = B(n, p);
    if (I) {
      const M = B(s, p, Ce(E) ? B(i, p) : E);
      Ce(M) || L && L.defaultChecked || y ? pe(s, p, y ? M : ri(I._f)) : F(p, M), a.mount && _();
    }
  }, S = (p, y, E, L, I) => {
    let M = !1, U = !1;
    const se = {
      name: p
    };
    if (!e.disabled) {
      const we = !!(B(n, p) && B(n, p)._f && B(n, p)._f.disabled);
      if (!E || L) {
        c.isDirty && (U = t.isDirty, t.isDirty = se.isDirty = k(), M = U !== se.isDirty);
        const ve = we || Pt(B(i, p), y);
        U = !!(!we && B(t.dirtyFields, p)), ve || we ? De(t.dirtyFields, p) : pe(t.dirtyFields, p, !0), se.dirtyFields = t.dirtyFields, M = M || c.dirtyFields && U !== !ve;
      }
      if (E) {
        const ve = B(t.touchedFields, p);
        ve || (pe(t.touchedFields, p, E), se.touchedFields = t.touchedFields, M = M || c.touchedFields && ve !== E);
      }
      M && I && u.state.next(se);
    }
    return M ? se : {};
  }, C = (p, y, E, L) => {
    const I = B(t.errors, p), M = c.isValid && at(y) && t.isValid !== y;
    if (e.delayError && E ? (l = v(() => D(p, E)), l(e.delayError)) : (clearTimeout(d), l = null, E ? pe(t.errors, p, E) : De(t.errors, p)), (E ? !Pt(I, E) : I) || !We(L) || M) {
      const U = {
        ...L,
        ...M && at(y) ? { isValid: y } : {},
        errors: t.errors,
        name: p
      };
      t = {
        ...t,
        ...U
      }, u.state.next(U);
    }
  }, O = async (p) => {
    N(p, !0);
    const y = await e.resolver(s, e.context, _m(p || o.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return N(p), y;
  }, W = async (p) => {
    const { errors: y } = await O(p);
    if (p)
      for (const E of p) {
        const L = B(y, E);
        L ? pe(t.errors, E, L) : De(t.errors, E);
      }
    else
      t.errors = y;
    return y;
  }, P = async (p, y, E = {
    valid: !0
  }) => {
    for (const L in p) {
      const I = p[L];
      if (I) {
        const { _f: M, ...U } = I;
        if (M) {
          const se = o.array.has(M.name), we = I._f && Cm(I._f);
          we && c.validatingFields && N([L], !0);
          const ve = await Bs(I, o.disabled, s, g, e.shouldUseNativeValidation && !y, se);
          if (we && c.validatingFields && N([L]), ve[M.name] && (E.valid = !1, y))
            break;
          !y && (B(ve, M.name) ? se ? ym(t.errors, ve, M.name) : pe(t.errors, M.name, ve[M.name]) : De(t.errors, M.name));
        }
        !We(U) && await P(U, y, E);
      }
    }
    return E.valid;
  }, A = () => {
    for (const p of o.unMount) {
      const y = B(n, p);
      y && (y._f.refs ? y._f.refs.every((E) => !ti(E)) : !ti(y._f.ref)) && Ee(p);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, k = (p, y) => !e.disabled && (p && y && pe(s, p, y), !Pt(Ze(), i)), T = (p, y, E) => Jo(p, o, {
    ...a.mount ? s : Ce(y) ? i : Ct(p) ? { [p]: y } : y
  }, E, y), j = (p) => jn(B(a.mount ? s : i, p, e.shouldUnregister ? B(i, p, []) : [])), F = (p, y, E = {}) => {
    const L = B(n, p);
    let I = y;
    if (L) {
      const M = L._f;
      M && (!M.disabled && pe(s, p, sl(y, M)), I = _n(M.ref) && He(y) ? "" : y, rl(M.ref) ? [...M.ref.options].forEach((U) => U.selected = I.includes(U.value)) : M.refs ? Zr(M.ref) ? M.refs.length > 1 ? M.refs.forEach((U) => (!U.defaultChecked || !U.disabled) && (U.checked = Array.isArray(I) ? !!I.find((se) => se === U.value) : I === U.value)) : M.refs[0] && (M.refs[0].checked = !!I) : M.refs.forEach((U) => U.checked = U.value === I) : Zi(M.ref) ? M.ref.value = "" : (M.ref.value = I, M.ref.type || u.values.next({
        name: p,
        values: { ...s }
      })));
    }
    (E.shouldDirty || E.shouldTouch) && S(p, I, E.shouldTouch, E.shouldDirty, !0), E.shouldValidate && be(p);
  }, X = (p, y, E) => {
    for (const L in y) {
      const I = y[L], M = `${p}.${L}`, U = B(n, M);
      (o.array.has(p) || ke(I) || U && !U._f) && !qt(I) ? X(M, I, E) : F(M, I, E);
    }
  }, q = (p, y, E = {}) => {
    const L = B(n, p), I = o.array.has(p), M = $e(y);
    pe(s, p, M), I ? (u.array.next({
      name: p,
      values: { ...s }
    }), (c.isDirty || c.dirtyFields) && E.shouldDirty && u.state.next({
      name: p,
      dirtyFields: _r(i, s),
      isDirty: k(p, M)
    })) : L && !L._f && !He(M) ? X(p, M, E) : F(p, M, E), Ls(p, o) && u.state.next({ ...t }), u.values.next({
      name: a.mount ? p : void 0,
      values: { ...s }
    });
  }, le = async (p) => {
    a.mount = !0;
    const y = p.target;
    let E = y.name, L = !0;
    const I = B(n, E), M = () => y.type ? ri(I._f) : Go(p), U = (se) => {
      L = Number.isNaN(se) || qt(se) && isNaN(se.getTime()) || Pt(se, B(s, E, se));
    };
    if (I) {
      let se, we;
      const ve = M(), Fe = p.type === wn.BLUR || p.type === wn.FOCUS_OUT, Zt = !km(I._f) && !e.resolver && !B(t.errors, E) && !I._f.deps || Em(Fe, B(t.touchedFields, E), t.isSubmitted, m, f), Jt = Ls(E, o, Fe);
      pe(s, E, ve), Fe ? (I._f.onBlur && I._f.onBlur(p), l && l(0)) : I._f.onChange && I._f.onChange(p);
      const rt = S(E, ve, Fe, !1), qr = !We(rt) || Jt;
      if (!Fe && u.values.next({
        name: E,
        type: p.type,
        values: { ...s }
      }), Zt)
        return c.isValid && (e.mode === "onBlur" && Fe ? _() : Fe || _()), qr && u.state.next({ name: E, ...Jt ? {} : rt });
      if (!Fe && Jt && u.state.next({ ...t }), e.resolver) {
        const { errors: Kr } = await O([E]);
        if (U(ve), L) {
          const Un = Vs(t.errors, n, E), Qt = Vs(Kr, n, Un.name || E);
          se = Qt.error, E = Qt.name, we = We(Kr);
        }
      } else
        N([E], !0), se = (await Bs(I, o.disabled, s, g, e.shouldUseNativeValidation))[E], N([E]), U(ve), L && (se ? we = !1 : c.isValid && (we = await P(n, !0)));
      L && (I._f.deps && be(I._f.deps), C(E, we, se, rt));
    }
  }, te = (p, y) => {
    if (B(t.errors, y) && p.focus)
      return p.focus(), 1;
  }, be = async (p, y = {}) => {
    let E, L;
    const I = Tr(p);
    if (e.resolver) {
      const M = await W(Ce(p) ? p : I);
      E = We(M), L = p ? !I.some((U) => B(M, U)) : E;
    } else p ? (L = (await Promise.all(I.map(async (M) => {
      const U = B(n, M);
      return await P(U && U._f ? { [M]: U } : U);
    }))).every(Boolean), !(!L && !t.isValid) && _()) : L = E = await P(n);
    return u.state.next({
      ...!Ct(p) || c.isValid && E !== t.isValid ? {} : { name: p },
      ...e.resolver || !p ? { isValid: E } : {},
      errors: t.errors
    }), y.shouldFocus && !L && Or(n, te, p ? I : o.mount), L;
  }, Ze = (p) => {
    const y = {
      ...a.mount ? s : i
    };
    return Ce(p) ? y : Ct(p) ? B(y, p) : p.map((E) => B(y, E));
  }, xe = (p, y) => ({
    invalid: !!B((y || t).errors, p),
    isDirty: !!B((y || t).dirtyFields, p),
    error: B((y || t).errors, p),
    isValidating: !!B(t.validatingFields, p),
    isTouched: !!B((y || t).touchedFields, p)
  }), ze = (p) => {
    p && Tr(p).forEach((y) => De(t.errors, y)), u.state.next({
      errors: p ? t.errors : {}
    });
  }, Re = (p, y, E) => {
    const L = (B(n, p, { _f: {} })._f || {}).ref, I = B(t.errors, p) || {}, { ref: M, message: U, type: se, ...we } = I;
    pe(t.errors, p, {
      ...we,
      ...y,
      ref: L
    }), u.state.next({
      name: p,
      errors: t.errors,
      isValid: !1
    }), E && E.shouldFocus && L && L.focus && L.focus();
  }, Oe = (p, y) => _t(p) ? u.values.subscribe({
    next: (E) => p(T(void 0, y), E)
  }) : T(p, y, !0), Ee = (p, y = {}) => {
    for (const E of p ? Tr(p) : o.mount)
      o.mount.delete(E), o.array.delete(E), y.keepValue || (De(n, E), De(s, E)), !y.keepError && De(t.errors, E), !y.keepDirty && De(t.dirtyFields, E), !y.keepTouched && De(t.touchedFields, E), !y.keepIsValidating && De(t.validatingFields, E), !e.shouldUnregister && !y.keepDefaultValue && De(i, E);
    u.values.next({
      values: { ...s }
    }), u.state.next({
      ...t,
      ...y.keepDirty ? { isDirty: k() } : {}
    }), !y.keepIsValid && _();
  }, je = ({ disabled: p, name: y, field: E, fields: L }) => {
    (at(p) && a.mount || p || o.disabled.has(y)) && (p ? o.disabled.add(y) : o.disabled.delete(y), S(y, ri(E ? E._f : B(L, y)._f), !1, !1, !0));
  }, ge = (p, y = {}) => {
    let E = B(n, p);
    const L = at(y.disabled) || at(e.disabled);
    return pe(n, p, {
      ...E || {},
      _f: {
        ...E && E._f ? E._f : { ref: { name: p } },
        name: p,
        mount: !0,
        ...y
      }
    }), o.mount.add(p), E ? je({
      field: E,
      disabled: at(y.disabled) ? y.disabled : e.disabled,
      name: p
    }) : x(p, !0, y.value), {
      ...L ? { disabled: y.disabled || e.disabled } : {},
      ...e.progressive ? {
        required: !!y.required,
        min: Cr(y.min),
        max: Cr(y.max),
        minLength: Cr(y.minLength),
        maxLength: Cr(y.maxLength),
        pattern: Cr(y.pattern)
      } : {},
      name: p,
      onChange: le,
      onBlur: le,
      ref: (I) => {
        if (I) {
          ge(p, y), E = B(n, p);
          const M = Ce(I.value) && I.querySelectorAll && I.querySelectorAll("input,select,textarea")[0] || I, U = wm(M), se = E._f.refs || [];
          if (U ? se.find((we) => we === M) : M === E._f.ref)
            return;
          pe(n, p, {
            _f: {
              ...E._f,
              ...U ? {
                refs: [
                  ...se.filter(ti),
                  M,
                  ...Array.isArray(B(i, p)) ? [{}] : []
                ],
                ref: { type: M.type, name: p }
              } : { ref: M }
            }
          }), x(p, !1, void 0, M);
        } else
          E = B(n, p, {}), E._f && (E._f.mount = !1), (e.shouldUnregister || y.shouldUnregister) && !(Uo(o.array, p) && a.action) && o.unMount.add(p);
      }
    };
  }, _e = () => e.shouldFocusError && Or(n, te, o.mount), ue = (p) => {
    at(p) && (u.state.next({ disabled: p }), Or(n, (y, E) => {
      const L = B(n, E);
      L && (y.disabled = L._f.disabled || p, Array.isArray(L._f.refs) && L._f.refs.forEach((I) => {
        I.disabled = L._f.disabled || p;
      }));
    }, 0, !1));
  }, tt = (p, y) => async (E) => {
    let L;
    E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
    let I = $e(s);
    if (o.disabled.size)
      for (const M of o.disabled)
        pe(I, M, void 0);
    if (u.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: M, values: U } = await O();
      t.errors = M, I = U;
    } else
      await P(n);
    if (De(t.errors, "root"), We(t.errors)) {
      u.state.next({
        errors: {}
      });
      try {
        await p(I, E);
      } catch (M) {
        L = M;
      }
    } else
      y && await y({ ...t.errors }, E), _e(), setTimeout(_e);
    if (u.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: We(t.errors) && !L,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), L)
      throw L;
  }, Me = (p, y = {}) => {
    B(n, p) && (Ce(y.defaultValue) ? q(p, $e(B(i, p))) : (q(p, y.defaultValue), pe(i, p, $e(y.defaultValue))), y.keepTouched || De(t.touchedFields, p), y.keepDirty || (De(t.dirtyFields, p), t.isDirty = y.defaultValue ? k(p, $e(B(i, p))) : k()), y.keepError || (De(t.errors, p), c.isValid && _()), u.state.next({ ...t }));
  }, Le = (p, y = {}) => {
    const E = p ? $e(p) : i, L = $e(E), I = We(p), M = I ? i : L;
    if (y.keepDefaultValues || (i = E), !y.keepValues) {
      if (y.keepDirtyValues) {
        const U = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(_r(i, s))
        ]);
        for (const se of Array.from(U))
          B(t.dirtyFields, se) ? pe(M, se, B(s, se)) : q(se, B(M, se));
      } else {
        if (Wi && Ce(p))
          for (const U of o.mount) {
            const se = B(n, U);
            if (se && se._f) {
              const we = Array.isArray(se._f.refs) ? se._f.refs[0] : se._f.ref;
              if (_n(we)) {
                const ve = we.closest("form");
                if (ve) {
                  ve.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      s = e.shouldUnregister ? y.keepDefaultValues ? $e(i) : {} : $e(M), u.array.next({
        values: { ...M }
      }), u.values.next({
        values: { ...M }
      });
    }
    o = {
      mount: y.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !c.isValid || !!y.keepIsValid || !!y.keepDirtyValues, a.watch = !!e.shouldUnregister, u.state.next({
      submitCount: y.keepSubmitCount ? t.submitCount : 0,
      isDirty: I ? !1 : y.keepDirty ? t.isDirty : !!(y.keepDefaultValues && !Pt(p, i)),
      isSubmitted: y.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: I ? {} : y.keepDirtyValues ? y.keepDefaultValues && s ? _r(i, s) : t.dirtyFields : y.keepDefaultValues && p ? _r(i, p) : y.keepDirty ? t.dirtyFields : {},
      touchedFields: y.keepTouched ? t.touchedFields : {},
      errors: y.keepErrors ? t.errors : {},
      isSubmitSuccessful: y.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Ie = (p, y) => Le(_t(p) ? p(s) : p, y);
  return {
    control: {
      register: ge,
      unregister: Ee,
      getFieldState: xe,
      handleSubmit: tt,
      setError: Re,
      _executeSchema: O,
      _getWatch: T,
      _getDirty: k,
      _updateValid: _,
      _removeUnmounted: A,
      _updateFieldArray: b,
      _updateDisabledField: je,
      _getFieldArray: j,
      _reset: Le,
      _resetDefaultValues: () => _t(e.defaultValues) && e.defaultValues().then((p) => {
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
      _disableForm: ue,
      _subjects: u,
      _proxyFormState: c,
      _setErrors: R,
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
    trigger: be,
    register: ge,
    handleSubmit: tt,
    watch: Oe,
    setValue: q,
    getValues: Ze,
    reset: Ie,
    resetField: Me,
    clearErrors: ze,
    unregister: Ee,
    setError: Re,
    setFocus: (p, y = {}) => {
      const E = B(n, p), L = E && E._f;
      if (L) {
        const I = L.refs ? L.refs[0] : L.ref;
        I.focus && (I.focus(), y.shouldSelect && _t(I.select) && I.select());
      }
    },
    getFieldState: xe
  };
}
function al(r = {}) {
  const e = V.useRef(void 0), t = V.useRef(void 0), [n, i] = V.useState({
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
    ...Nm(r),
    formState: n
  });
  const s = e.current.control;
  return s._options = r, Ui({
    subject: s._subjects.state,
    next: (a) => {
      Xo(a, s._proxyFormState, s._updateFormState, !0) && i({ ...s._formState });
    }
  }), V.useEffect(() => s._disableForm(r.disabled), [s, r.disabled]), V.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const a = s._getDirty();
      a !== n.isDirty && s._subjects.state.next({
        isDirty: a
      });
    }
  }, [s, n.isDirty]), V.useEffect(() => {
    r.values && !Pt(r.values, t.current) ? (s._reset(r.values, s._options.resetOptions), t.current = r.values, i((a) => ({ ...a }))) : s._resetDefaultValues();
  }, [r.values, s]), V.useEffect(() => {
    r.errors && s._setErrors(r.errors);
  }, [r.errors, s]), V.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), V.useEffect(() => {
    r.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [r.shouldUnregister, s]), e.current.formState = Ko(n, s), e.current;
}
var Rm = "Label", ol = ot.forwardRef((r, e) => /* @__PURE__ */ h(
  ac.label,
  {
    ...r,
    ref: e,
    onMouseDown: (t) => {
      t.target.closest("button, input, select, textarea") || (r.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
ol.displayName = Rm;
var ll = ol;
const En = ot.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ h(
  ll,
  {
    ref: t,
    className: ie(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      r
    ),
    ...e
  }
));
En.displayName = ll.displayName;
const cl = hm, dl = ot.createContext(
  {}
), js = ({
  ...r
}) => {
  const { formState: e } = Gt();
  return /* @__PURE__ */ h(dl.Provider, { value: { name: r.name }, children: /* @__PURE__ */ h(vm, { ...r, disabled: e.isSubmitting }) });
}, $n = () => {
  const r = ot.useContext(dl), e = ot.useContext(ul), { getFieldState: t, formState: n } = Gt(), i = t(r.name, n);
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
}, ul = ot.createContext(
  {}
), fl = ot.forwardRef(({ className: r, ...e }, t) => {
  const n = ot.useId();
  return /* @__PURE__ */ h(ul.Provider, { value: { id: n }, children: /* @__PURE__ */ h("div", { ref: t, className: ie("space-y-2", r), ...e }) });
});
fl.displayName = "FormItem";
const Am = ot.forwardRef(({ className: r, ...e }, t) => {
  const { error: n, formItemId: i } = $n();
  return /* @__PURE__ */ h(
    En,
    {
      ref: t,
      className: ie(n && "text-f1-foreground-critical", r),
      htmlFor: i,
      ...e
    }
  );
});
Am.displayName = "FormLabel";
const hl = ot.forwardRef(({ ...r }, e) => {
  const { error: t, formItemId: n, formDescriptionId: i, formMessageId: s } = $n();
  return /* @__PURE__ */ h(
    oc,
    {
      ref: e,
      id: n,
      "aria-describedby": t ? `${i} ${s}` : `${i}`,
      "aria-invalid": !!t,
      ...r
    }
  );
});
hl.displayName = "FormControl";
const ml = ot.forwardRef(({ className: r, ...e }, t) => {
  const { formDescriptionId: n } = $n();
  return /* @__PURE__ */ h(
    "p",
    {
      ref: t,
      id: n,
      className: ie("text-base text-f1-foreground-secondary", r),
      ...e
    }
  );
});
ml.displayName = "FormDescription";
const pl = ot.forwardRef(
  ({ className: r, children: e, fallback: t, ...n }, i) => {
    const { error: s, formMessageId: a } = $n(), { forms: o } = $t(), l = s ? s.message ?? t ?? o.validation.invalidType : e;
    return l ? /* @__PURE__ */ H(
      "div",
      {
        ref: i,
        id: a,
        className: ie("flex gap-1", r),
        ...n,
        children: [
          /* @__PURE__ */ h(Vr, { icon: ba, color: "critical" }),
          /* @__PURE__ */ h("span", { className: "text-base font-medium text-f1-foreground-critical", children: l })
        ]
      }
    ) : null;
  }
);
pl.displayName = "FormMessage";
function Tm({
  isActionBar: r,
  isDirty: e,
  actionBarStatus: t,
  hasErrors: n,
  errorCount: i,
  resolvedActionBarLabel: s,
  centerActionBarInFrameContent: a,
  submitLabel: o,
  submitIcon: l,
  discardableChanges: d,
  discardLabel: c,
  discardIcon: u,
  issuesOneLabel: f,
  issuesOtherLabel: m,
  onSubmit: g,
  onDiscard: v,
  goToPreviousError: _,
  goToNextError: N
}) {
  return r ? /* @__PURE__ */ h(
    hs,
    {
      isOpen: e || t === "loading" || t === "success",
      variant: "light",
      status: n ? void 0 : t,
      centerInFrameContent: a,
      label: s,
      leftContent: n ? /* @__PURE__ */ H("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ H("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ h(Vr, { icon: ba, size: "md", color: "critical" }),
          /* @__PURE__ */ h("span", { className: "font-medium text-f1-foreground-critical", children: i === 1 ? f.replace("{{count}}", String(i)) : m.replace("{{count}}", String(i)) })
        ] }),
        i > 1 && /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ h(
            Ge,
            {
              icon: lc,
              onClick: _,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }
          ),
          /* @__PURE__ */ h(
            Ge,
            {
              icon: cc,
              onClick: N,
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
      secondaryActions: d ? [
        {
          label: c,
          icon: u,
          onClick: v
        }
      ] : []
    }
  ) : /* @__PURE__ */ h(
    hs,
    {
      isOpen: t === "loading" || t === "success",
      variant: "light",
      status: t,
      label: s
    }
  );
}
const Ki = "gap-4", gl = "mt-6", vl = "max-w-[720px]", Ut = "md", Xi = gt(null);
function Yi() {
  const r = lt(Xi);
  if (!r)
    throw new Error("useF0FormContext must be used within a F0Form");
  return r;
}
function Xt(r, e, t) {
  const n = ["forms", r];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function ye(r, e) {
  return r._def?.typeName === e;
}
function Ji(r) {
  return ye(r, "ZodEffects") ? r._def.schema : r;
}
const yl = /* @__PURE__ */ new WeakMap();
function lv(r, e) {
  yl.set(r, e);
  const t = r;
  return t._f0Config = e, t._innerSchema = r, t;
}
function Qi(r) {
  const e = r;
  return e._f0Config ? e._f0Config : yl.get(r);
}
function cv(r) {
  return Qi(r) !== void 0;
}
function vt(r) {
  let e = r;
  for (; ye(e, "ZodOptional") || ye(e, "ZodNullable") || ye(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function Om(r, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("useUpload" in e && e.useUpload)
    return "file";
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = vt(r);
  return ye(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : ye(t, "ZodNumber") ? "number" : ye(t, "ZodBoolean") ? "switch" : ye(t, "ZodDate") ? "date" : ye(t, "ZodEnum") || ye(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : ye(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function bl(r) {
  return ye(r, "ZodOptional") || ye(r, "ZodNullable") || ye(r, "ZodDefault") && bl(r._def.innerType);
}
const Mm = /* @__PURE__ */ new Set([
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
function Lm(r) {
  const e = vt(r);
  return ye(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "min" ? (n.value ?? 0) >= 1 : Mm.has(n.kind)) : !1;
}
function xl(r) {
  if (bl(r))
    return !1;
  const e = vt(r);
  return ye(e, "ZodString") ? Lm(r) : !0;
}
function Im(r, e) {
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
function Wn(r, e) {
  return typeof r == "function" ? r({ values: e }) : Im(r, e);
}
function es(r, e) {
  return r === void 0 ? !1 : typeof r == "function" ? r({ values: e }) : r;
}
function rr(r, e) {
  if (r !== void 0)
    return typeof r == "function" ? r({ values: e }) : r;
}
function Pm(r) {
  const e = vt(r);
  return ye(e, "ZodLiteral") && e._def.value === !0;
}
function zm({
  field: r,
  formField: e
}) {
  const t = r.validation && Pm(r.validation);
  return /* @__PURE__ */ h(
    dc,
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
function Fm({
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
  return /* @__PURE__ */ h(Wt, { children: r.render(s) });
}
function Bm(r, e) {
  if (r)
    return {
      value: { from: r, to: r },
      granularity: e?.[0] ?? "day"
    };
}
function Hm(r) {
  return r?.value?.from;
}
function wl({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = G(
    () => Bm(
      e.value ?? void 0,
      r.granularities
    ),
    [e.value, r.granularities]
  ), s = (a) => {
    e.onChange(Hm(a) ?? null);
  };
  return /* @__PURE__ */ h(
    Pa,
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
      size: Ut,
      hideLabel: !0,
      error: t,
      loading: n
    }
  );
}
function gi(r) {
  if (!r || !(r instanceof Date) || isNaN(r.getTime())) return "";
  const e = String(r.getHours()).padStart(2, "0"), t = String(r.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function Vm(r) {
  if (!r) return;
  const [e, t] = r.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const n = /* @__PURE__ */ new Date();
  return n.setHours(e, t, 0, 0), n;
}
function ni(r, e) {
  if (!r) return;
  const t = new Date(r);
  if (e) {
    const [n, i, s] = e.split(":").map(Number);
    t.setHours(n ?? 0, i ?? 0, s ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function _l({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = G(
    () => gi(e.value ?? void 0),
    [e.value]
  ), s = ee(
    (a) => {
      if (!a) {
        e.onChange(null);
        return;
      }
      const o = Vm(a);
      e.onChange(o);
    },
    [e]
  );
  return /* @__PURE__ */ h(
    xa,
    {
      type: "time",
      label: r.label,
      disabled: r.disabled,
      value: i,
      onChange: s,
      size: Ut,
      hideLabel: !0,
      error: t,
      loading: n,
      clearable: r.clearable,
      name: e.name,
      ref: e.ref,
      icon: uc
    }
  );
}
function jm({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = e.value ?? void 0, s = G(() => gi(i), [i]), a = ee(
    (f) => {
      if (!f) {
        e.onChange(null);
        return;
      }
      e.onChange(ni(f, s));
    },
    [e, s]
  ), o = ee(
    (f) => {
      if (!f) {
        if (i) {
          const g = new Date(i);
          g.setHours(0, 0, 0, 0), e.onChange(g);
        }
        return;
      }
      const m = gi(f);
      if (!i) {
        const g = /* @__PURE__ */ new Date();
        g.setHours(0, 0, 0, 0), e.onChange(ni(g, m));
        return;
      }
      e.onChange(ni(i, m));
    },
    [e, i]
  ), l = G(
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
  ), d = G(
    () => ({
      ...e,
      value: i,
      onChange: a
    }),
    [e, i, a]
  ), c = G(
    () => ({
      id: `${r.id}-time`,
      type: "time",
      label: "Time",
      disabled: r.disabled,
      clearable: !1
      // Time clearing is handled via date clear
    }),
    [r.id, r.disabled]
  ), u = G(
    () => ({
      ...e,
      value: i,
      onChange: o
    }),
    [e, i, o]
  );
  return /* @__PURE__ */ H("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ h("div", { className: "flex-1", children: /* @__PURE__ */ h(
      wl,
      {
        field: l,
        formField: d,
        error: t,
        loading: n
      }
    ) }),
    /* @__PURE__ */ h("div", { className: "w-32", children: /* @__PURE__ */ h(
      _l,
      {
        field: c,
        formField: u,
        error: t,
        loading: n
      }
    ) })
  ] });
}
function $m(r) {
  if (!(!r?.from || !r?.to))
    return {
      value: { from: r.from, to: r.to },
      granularity: "range"
    };
}
function Wm(r) {
  if (!(!r?.value?.from || !r?.value?.to))
    return {
      from: r.value.from,
      to: r.value.to
    };
}
function Gm({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = G(
    () => $m(
      e.value ?? void 0
    ),
    [e.value]
  ), s = (o) => {
    e.onChange(Wm(o) ?? null);
  }, a = r.fromLabel && r.toLabel ? `${r.label} (${r.fromLabel} - ${r.toLabel})` : r.label;
  return /* @__PURE__ */ h(
    Pa,
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
      size: Ut,
      hideLabel: !0,
      error: t,
      loading: n
    }
  );
}
function Um({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  return /* @__PURE__ */ h(
    _d,
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
      size: Ut,
      hideLabel: !0,
      error: t,
      loading: n,
      clearable: r.clearable
    }
  );
}
function Zm({
  field: r,
  formField: e
}) {
  const t = e.value;
  return /* @__PURE__ */ h(
    Cd,
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
function qm({
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
    size: Ut,
    hideLabel: !0
  };
  return r.multiple ? /* @__PURE__ */ h(
    ar,
    {
      ...i,
      multiple: !0,
      clearable: r.clearable,
      value: e.value ?? [],
      onChange: (s) => e.onChange(s)
    }
  ) : r.clearable ? /* @__PURE__ */ h(
    ar,
    {
      ...i,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  ) : /* @__PURE__ */ h(
    ar,
    {
      ...i,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  );
}
function Km({
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
    size: Ut,
    hideLabel: !0
  };
  return r.multiple ? /* @__PURE__ */ h(
    ar,
    {
      ...i,
      multiple: !0,
      clearable: r.clearable,
      value: e.value ?? [],
      onChange: (s) => e.onChange(s)
    }
  ) : r.clearable ? /* @__PURE__ */ h(
    ar,
    {
      ...i,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  ) : /* @__PURE__ */ h(
    ar,
    {
      ...i,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  );
}
function Xm(r) {
  const { field: e } = r;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? /* @__PURE__ */ h(
    Km,
    {
      ...r,
      field: e
    }
  ) : "options" in e && e.options !== void 0 ? /* @__PURE__ */ h(
    qm,
    {
      ...r,
      field: e
    }
  ) : null;
}
function Ym(r) {
  const e = vt(r);
  return ye(e, "ZodLiteral") && e._def.value === !0;
}
function Jm({
  field: r,
  formField: e
}) {
  const t = r.validation && Ym(r.validation);
  return /* @__PURE__ */ h(
    fc,
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
const Qm = {
  email: "name@example.com"
}, ep = {
  url: mc,
  email: hc
};
function tp({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = r.inputType ?? "text", s = r.placeholder ?? Qm[i] ?? void 0, a = ep[i];
  return /* @__PURE__ */ h(
    xa,
    {
      ...e,
      label: r.label,
      type: i,
      placeholder: s,
      disabled: r.disabled,
      value: e.value != null ? String(e.value) : "",
      size: Ut,
      hideLabel: !0,
      error: t,
      loading: n,
      icon: a,
      clearable: r.clearable
    }
  );
}
function rp(r) {
  return r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
}
function np({
  entry: r,
  useUpload: e,
  onUploadComplete: t,
  onRemove: n,
  onError: i,
  disabled: s,
  translations: a
}) {
  const o = !!r.file, l = e?.(), d = l?.upload, c = l?.cancelUpload, u = l?.progress ?? 0, f = l?.status ?? "idle", [m, g] = Q(null), v = J(!1), _ = ee(async () => {
    if (!(!o || !r.file || !d) && !v.current) {
      v.current = !0;
      try {
        const C = await d(r.file);
        C.type === "success" ? t(C.value) : n();
      } catch {
        const C = a.uploadFailed;
        g(C), i(C);
      }
    }
  }, [
    o,
    r.file,
    d,
    t,
    n,
    i,
    a
  ]);
  re(() => {
    o && _();
  }, [o, _]);
  const N = ee(() => {
    o && (f === "uploading" || f === "processing") && c?.(), n();
  }, [o, f, c, n]), b = o && (f === "uploading" || f === "processing"), D = Math.round(u * 100), R = r.file ?? {
    name: r.initialFile?.name ?? "",
    type: r.initialFile?.type ?? ""
  }, x = r.file?.name ?? r.initialFile?.name ?? "", S = r.file?.size ?? r.initialFile?.size;
  return /* @__PURE__ */ H(
    "div",
    {
      className: ie(
        "flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-2.5 py-2",
        m && "border-f1-border-critical"
      ),
      children: [
        /* @__PURE__ */ h(pc, { file: R, size: "md" }),
        /* @__PURE__ */ H("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [
          /* @__PURE__ */ h("span", { className: "truncate text-base font-medium text-f1-foreground", children: x }),
          /* @__PURE__ */ h("span", { className: "text-sm text-f1-foreground-secondary", children: m || (b ? f === "processing" ? a.processing : `${a.uploading} ${D}%` : S != null ? rp(S) : null) })
        ] }),
        !s && /* @__PURE__ */ h(
          Ge,
          {
            variant: "ghost",
            size: "sm",
            label: a.remove,
            onClick: N,
            icon: Di,
            hideLabel: !0
          }
        )
      ]
    }
  );
}
const ip = /* @__PURE__ */ new Set([
  "image",
  "video",
  "audio",
  "text",
  "application"
]);
function vi(r) {
  return ip.has(r) ? `${r}/*` : r;
}
const $s = {
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
}, Ws = {
  "image/*": "Images",
  "video/*": "Videos",
  "audio/*": "Audio",
  "text/*": "Text files",
  "application/*": "Documents"
};
function sp(r) {
  if (!r || r.length === 0) return;
  const e = [];
  for (const t of r) {
    const n = vi(t);
    if (Ws[n])
      e.push(Ws[n]);
    else if ($s[n])
      e.push($s[n]);
    else {
      const i = n.split("/")[1];
      i && e.push(i.toUpperCase());
    }
  }
  return e.length > 0 ? e.join(", ") : void 0;
}
function ap(r, e, t) {
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
function op({
  field: r,
  formField: e,
  error: t
}) {
  const { forms: n } = $t(), { initialFiles: i } = Yi(), s = Fc(), a = J(null), [o, l] = Q(!1), d = r.multiple ?? !1, [c, u] = Q(
    () => ap(i, e.value, d)
  ), [f, m] = Q(null), g = n.file, v = c.length > 0, _ = d || !v, N = r.accept ? r.accept.map(vi).join(",") : void 0, b = G(
    () => sp(r.accept),
    [r.accept]
  ), D = ee(
    (F) => r.accept && !r.accept.some((X) => {
      const q = vi(X);
      return q.endsWith("/*") ? F.type.startsWith(q.replace("/*", "/")) : F.type === q;
    }) ? g.invalidFileType.replace(
      "{{types}}",
      b ?? ""
    ) : r.maxSizeMB && F.size > r.maxSizeMB * 1024 * 1024 ? g.fileTooLarge.replace(
      "{{maxSize}}",
      String(r.maxSizeMB)
    ) : null,
    [r.accept, r.maxSizeMB, g, b]
  ), R = ee(
    (F) => {
      m(null);
      const X = d ? F : [F[0]];
      for (const q of X) {
        const le = D(q);
        if (le) {
          m(le);
          continue;
        }
        const te = `${q.name}-${q.size}-${Date.now()}-${Math.random()}`;
        u((be) => d ? [...be, { key: te, file: q }] : [{ key: te, file: q }]);
      }
    },
    [d, D]
  ), x = ee(
    (F) => {
      F.preventDefault(), F.stopPropagation(), r.disabled || l(!0);
    },
    [r.disabled]
  ), S = ee((F) => {
    F.preventDefault(), F.stopPropagation(), l(!1);
  }, []), C = ee(
    (F) => {
      if (F.preventDefault(), F.stopPropagation(), l(!1), r.disabled) return;
      const X = Array.from(F.dataTransfer.files);
      X.length > 0 && R(X);
    },
    [r.disabled, R]
  ), O = ee(
    (F) => {
      const X = Array.from(F.target.files ?? []);
      X.length > 0 && R(X), a.current && (a.current.value = "");
    },
    [R]
  ), W = ee(() => {
    r.disabled || a.current?.click();
  }, [r.disabled]), P = ee(
    (F) => {
      (F.key === "Enter" || F.key === " ") && (F.preventDefault(), W());
    },
    [W]
  ), A = ee(
    (F, X) => {
      if (u(
        (q) => q.map((le) => le.key === F ? { ...le, value: X } : le)
      ), d) {
        const q = Array.isArray(e.value) ? e.value : [];
        e.onChange([...q, X]);
      } else
        e.onChange(X);
    },
    [d, e]
  ), k = ee(
    (F) => {
      const X = c.find((q) => q.key === F);
      if (u((q) => q.filter((le) => le.key !== F)), X?.value)
        if (d) {
          const q = Array.isArray(e.value) ? e.value : [];
          e.onChange(q.filter((le) => le !== X.value));
        } else
          e.onChange(void 0);
      else d || e.onChange(void 0);
    },
    [c, d, e]
  ), T = ee((F, X) => {
    u(
      (q) => q.map(
        (le) => le.key === F ? { ...le, error: X } : le
      )
    );
  }, []), j = o ? g.dropzoneActive : r.description ?? (d ? g.dropzoneMultiple : g.dropzone);
  return /* @__PURE__ */ H("div", { className: "flex flex-col gap-2", children: [
    _ && /* @__PURE__ */ H(
      "div",
      {
        role: "button",
        tabIndex: r.disabled ? -1 : 0,
        onDragOver: x,
        onDragLeave: S,
        onDrop: C,
        onClick: W,
        onKeyDown: P,
        "aria-disabled": r.disabled,
        className: ie(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors",
          o ? "border-f1-border-accent bg-f1-background-accent-bold/5" : t || f ? "border-f1-border-critical bg-f1-background" : "border-f1-border bg-f1-background",
          !r.disabled && !o && "hover:border-f1-border-hover hover:bg-f1-background-secondary",
          r.disabled && "cursor-not-allowed opacity-50",
          Si("rounded-lg")
        ),
        children: [
          /* @__PURE__ */ h("div", { className: "flex aspect-square items-center justify-center rounded-md border border-solid border-f1-border p-1 text-f1-icon", children: /* @__PURE__ */ h(Vr, { icon: gc, size: "lg" }) }),
          /* @__PURE__ */ H("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ h("span", { className: "text-center text-base text-f1-foreground-secondary", children: j }),
            !o && b && /* @__PURE__ */ h("span", { className: "text-center text-sm text-f1-foreground-secondary/70", children: g.acceptedTypes.replace(
              "{{types}}",
              b
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ h(
      "input",
      {
        ref: a,
        id: s,
        type: "file",
        accept: N,
        multiple: d,
        onChange: O,
        className: "hidden",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    f && /* @__PURE__ */ h("p", { className: "text-base text-f1-foreground-critical", children: f }),
    c.length > 0 && /* @__PURE__ */ h("div", { className: "flex flex-col gap-2", children: c.map((F) => /* @__PURE__ */ h(
      np,
      {
        entry: F,
        useUpload: F.file ? r.useUpload : void 0,
        onUploadComplete: (X) => A(F.key, X),
        onRemove: () => k(F.key),
        onError: (X) => T(F.key, X),
        disabled: r.disabled,
        translations: {
          remove: g.remove,
          uploading: g.uploading,
          processing: g.processing,
          uploadFailed: g.uploadFailed
        }
      },
      F.key
    )) })
  ] });
}
function lp({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  return /* @__PURE__ */ h(
    kd,
    {
      ...e,
      label: r.label,
      placeholder: r.placeholder,
      disabled: r.disabled,
      rows: r.rows,
      maxLength: r.maxLength,
      value: e.value != null ? String(e.value) : "",
      size: Ut,
      hideLabel: !0,
      error: t,
      loading: n
    }
  );
}
function cp({
  field: r,
  formField: e,
  fieldState: t,
  isSubmitting: n,
  isRequired: i,
  values: s
}) {
  const a = !!t.error, { isValidating: o } = t, l = es(r.disabled, s) || n, d = {
    error: a,
    loading: o
  };
  switch (r.type) {
    case "text":
      return /* @__PURE__ */ h(
        tp,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...d
        }
      );
    case "number":
      return /* @__PURE__ */ h(
        Um,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...d
        }
      );
    case "textarea":
      return /* @__PURE__ */ h(
        lp,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...d
        }
      );
    case "select":
      return /* @__PURE__ */ h(
        Xm,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...d
        }
      );
    case "checkbox":
      return /* @__PURE__ */ h(
        zm,
        {
          field: { ...r, disabled: l },
          formField: e
        }
      );
    case "switch":
      return /* @__PURE__ */ h(
        Jm,
        {
          field: { ...r, disabled: l },
          formField: e
        }
      );
    case "date":
      return /* @__PURE__ */ h(
        wl,
        {
          field: {
            ...r,
            disabled: l,
            // Evaluate dynamic date constraints
            minDate: rr(r.minDate, s),
            maxDate: rr(r.maxDate, s)
          },
          formField: e,
          ...d
        }
      );
    case "time":
      return /* @__PURE__ */ h(
        _l,
        {
          field: {
            ...r,
            disabled: l,
            // Evaluate dynamic date constraints
            minDate: rr(r.minDate, s),
            maxDate: rr(r.maxDate, s)
          },
          formField: e,
          ...d
        }
      );
    case "datetime":
      return /* @__PURE__ */ h(
        jm,
        {
          field: {
            ...r,
            disabled: l,
            // Evaluate dynamic date constraints
            minDate: rr(r.minDate, s),
            maxDate: rr(r.maxDate, s)
          },
          formField: e,
          ...d
        }
      );
    case "daterange":
      return /* @__PURE__ */ h(
        Gm,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...d
        }
      );
    case "richtext":
      return /* @__PURE__ */ h(
        Zm,
        {
          field: { ...r, disabled: l },
          formField: e
        }
      );
    case "file":
      return /* @__PURE__ */ h(
        op,
        {
          field: { ...r, disabled: l },
          formField: e,
          error: a
        }
      );
    case "custom":
      return /* @__PURE__ */ h(
        Fm,
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
function Gn({ field: r, sectionId: e }) {
  const t = Gt(), n = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = Yi(), { forms: a } = $t(), o = es(r.disabled, n), l = J(o);
  re(() => {
    const m = l.current;
    if (l.current = o, !m && o && r.resetOnDisable) {
      const g = t.formState.defaultValues?.[r.id];
      t.setValue(r.id, g, { shouldValidate: !1 });
    }
  }, [o, r.resetOnDisable, r.id, t]);
  const d = !r.renderIf || Wn(r.renderIf, n), c = r.type !== "checkbox" && r.type !== "custom", u = r.validation && xl(r.validation), f = Xt(s, e, r.id);
  return d ? /* @__PURE__ */ h(
    js,
    {
      control: t.control,
      name: r.id,
      render: ({ field: m, fieldState: g }) => /* @__PURE__ */ H(fl, { id: f, className: "scroll-mt-4", children: [
        c && /* @__PURE__ */ H(
          "label",
          {
            htmlFor: r.id,
            className: "text-base font-medium leading-normal text-f1-foreground-secondary",
            children: [
              r.label,
              u && /* @__PURE__ */ h("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ h(hl, { children: cp({
          field: r,
          formField: m,
          fieldState: g,
          isSubmitting: i,
          isRequired: u,
          values: n
        }) }),
        r.helpText && /* @__PURE__ */ h(ml, { children: r.helpText }),
        /* @__PURE__ */ h(
          pl,
          {
            fallback: u ? a.validation.required : a.validation.invalidType
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ h(
    js,
    {
      control: t.control,
      name: r.id,
      render: () => /* @__PURE__ */ h("span", { className: "hidden", "aria-hidden": "true" })
    }
  );
}
function ts({ row: r, sectionId: e }) {
  return /* @__PURE__ */ h("div", { className: `flex xs:flex-row flex-col ${Ki} [&>*]:flex-1`, children: r.fields.map((t) => /* @__PURE__ */ h(Gn, { field: t, sectionId: e }, t.id)) });
}
function dp(r) {
  const e = vt(r);
  return ye(e, "ZodLiteral") && e._def.value === !0;
}
function rs({ fields: r }) {
  const e = Gt(), { watch: t, setValue: n } = e, { isSubmitting: i } = e.formState, s = t(), a = G(
    () => r.filter(
      (f) => !f.renderIf || Wn(f.renderIf, s)
    ),
    [r, s]
  ), o = G(
    () => Object.fromEntries(
      a.map((f) => [
        f.id,
        es(f.disabled, s) || i
      ])
    ),
    [a, i, s]
  ), l = J({});
  re(() => {
    const f = l.current, m = e.formState.defaultValues ?? {};
    for (const g of a) {
      if (!(g.id in f))
        continue;
      const v = f[g.id], _ = o[g.id] ?? !1;
      if (!v && _ && g.resetOnDisable) {
        const N = m[g.id] ?? !1;
        n(g.id, N, { shouldValidate: !1 });
      }
    }
    l.current = { ...o };
  }, [o, a, e, n]);
  const d = G(
    () => a.map((f) => ({
      value: f.id,
      title: f.label,
      description: f.helpText,
      disabled: o[f.id] ?? !1,
      required: !!(f.validation && dp(f.validation))
    })),
    [a, o]
  ), c = G(
    () => a.filter((f) => s[f.id]).map((f) => f.id),
    [a, s]
  );
  return a.length === 0 ? null : /* @__PURE__ */ h(
    Ed,
    {
      multiple: !0,
      isToggle: !0,
      grouped: !0,
      items: d,
      value: c,
      onChange: (f) => {
        for (const m of a) {
          const g = f.includes(m.id), v = !!s[m.id];
          g !== v && n(m.id, g, {
            shouldValidate: !0,
            shouldDirty: !0
          });
        }
      }
    }
  );
}
const Gs = (r, e, t) => {
  if (r && "reportValidity" in r) {
    const n = B(t, e);
    r.setCustomValidity(n && n.message || ""), r.reportValidity();
  }
}, Cl = (r, e) => {
  for (const t in e.fields) {
    const n = e.fields[t];
    n && n.ref && "reportValidity" in n.ref ? Gs(n.ref, t, r) : n.refs && n.refs.forEach((i) => Gs(i, t, r));
  }
}, up = (r, e) => {
  e.shouldUseNativeValidation && Cl(r, e);
  const t = {};
  for (const n in r) {
    const i = B(e.fields, n), s = Object.assign(r[n] || {}, { ref: i && i.ref });
    if (fp(e.names || Object.keys(r), n)) {
      const a = Object.assign({}, B(t, n));
      pe(a, "root", s), pe(t, n, a);
    } else pe(t, n, s);
  }
  return t;
}, fp = (r, e) => r.some((t) => t.startsWith(e + "."));
var hp = function(r, e) {
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
      t[a] = Qo(a, e, t, i, d ? [].concat(d, n.message) : n.message);
    }
    r.shift();
  }
  return t;
}, mp = function(r, e, t) {
  return t === void 0 && (t = {}), function(n, i, s) {
    try {
      return Promise.resolve((function(a, o) {
        try {
          var l = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(d) {
            return s.shouldUseNativeValidation && Cl({}, s), { errors: {}, values: t.raw ? n : d };
          });
        } catch (d) {
          return o(d);
        }
        return l && l.then ? l.then(void 0, o) : l;
      })(0, function(a) {
        if ((function(o) {
          return Array.isArray(o?.errors);
        })(a)) return { values: {}, errors: up(hp(a.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
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
var Us;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Us || (Us = {}));
const Z = me.arrayToEnum([
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
      return Z.undefined;
    case "string":
      return Z.string;
    case "number":
      return Number.isNaN(r) ? Z.nan : Z.number;
    case "boolean":
      return Z.boolean;
    case "function":
      return Z.function;
    case "bigint":
      return Z.bigint;
    case "symbol":
      return Z.symbol;
    case "object":
      return Array.isArray(r) ? Z.array : r === null ? Z.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? Z.promise : typeof Map < "u" && r instanceof Map ? Z.map : typeof Set < "u" && r instanceof Set ? Z.set : typeof Date < "u" && r instanceof Date ? Z.date : Z.object;
    default:
      return Z.unknown;
  }
}, z = me.arrayToEnum([
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
            const d = a.path[l];
            l === a.path.length - 1 ? (o[d] = o[d] || { _errors: [] }, o[d]._errors.push(t(a))) : o[d] = o[d] || { _errors: [] }, o = o[d], l++;
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
const yi = (r, e) => {
  let t;
  switch (r.code) {
    case z.invalid_type:
      r.received === Z.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case z.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, me.jsonStringifyReplacer)}`;
      break;
    case z.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${me.joinValues(r.keys, ", ")}`;
      break;
    case z.invalid_union:
      t = "Invalid input";
      break;
    case z.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${me.joinValues(r.options)}`;
      break;
    case z.invalid_enum_value:
      t = `Invalid enum value. Expected ${me.joinValues(r.options)}, received '${r.received}'`;
      break;
    case z.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case z.invalid_return_type:
      t = "Invalid function return type";
      break;
    case z.invalid_date:
      t = "Invalid date";
      break;
    case z.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : me.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case z.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "bigint" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case z.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case z.custom:
      t = "Invalid input";
      break;
    case z.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case z.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case z.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, me.assertNever(r);
  }
  return { message: t };
};
let pp = yi;
function gp() {
  return pp;
}
const vp = (r) => {
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
function $(r, e) {
  const t = gp(), n = vp({
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
      t === yi ? void 0 : yi
      // then global default map
    ].filter((i) => !!i)
  });
  r.common.issues.push(n);
}
class et {
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
    return et.mergeObjectSync(e, n);
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
}), kr = (r) => ({ status: "dirty", value: r }), dt = (r) => ({ status: "valid", value: r }), Zs = (r) => r.status === "aborted", qs = (r) => r.status === "dirty", dr = (r) => r.status === "valid", Sn = (r) => typeof Promise < "u" && r instanceof Promise;
var K;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e?.message;
})(K || (K = {}));
class Ht {
  constructor(e, t, n, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ks = (r, e) => {
  if (dr(e))
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
function ce(r) {
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
class fe {
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
      status: new et(),
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
    if (Sn(t))
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
    return Ks(n, i);
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
        return dr(n) ? {
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
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) => dr(n) ? {
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
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (Sn(i) ? i : Promise.resolve(i));
    return Ks(n, s);
  }
  refine(e, t) {
    const n = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: z.custom,
        ...n(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof t == "function" ? t(n, i) : t), !1));
  }
  _refinement(e) {
    return new fr({
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
    return hr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return kt.create(this);
  }
  promise() {
    return An.create(this, this._def);
  }
  or(e) {
    return Nn.create([this, e], this._def);
  }
  and(e) {
    return Rn.create(this, e, this._def);
  }
  transform(e) {
    return new fr({
      ...ce(this._def),
      schema: this,
      typeName: oe.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new wi({
      ...ce(this._def),
      innerType: this,
      defaultValue: t,
      typeName: oe.ZodDefault
    });
  }
  brand() {
    return new Hp({
      typeName: oe.ZodBranded,
      type: this,
      ...ce(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new _i({
      ...ce(this._def),
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
    return ns.create(this, e);
  }
  readonly() {
    return Ci.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const yp = /^c[^\s-]{8,}$/i, bp = /^[0-9a-z]+$/, xp = /^[0-9A-HJKMNP-TV-Z]{26}$/i, wp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, _p = /^[a-z0-9_-]{21}$/i, Cp = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, kp = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ep = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Sp = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ii;
const Dp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Np = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Rp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Ap = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Tp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Op = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, kl = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Mp = new RegExp(`^${kl}$`);
function El(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function Lp(r) {
  return new RegExp(`^${El(r)}$`);
}
function Ip(r) {
  let e = `${kl}T${El(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function Pp(r, e) {
  return !!((e === "v4" || !e) && Dp.test(r) || (e === "v6" || !e) && Rp.test(r));
}
function zp(r, e) {
  if (!Cp.test(r))
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
function Fp(r, e) {
  return !!((e === "v4" || !e) && Np.test(r) || (e === "v6" || !e) && Ap.test(r));
}
class Kt extends fe {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== Z.string) {
      const s = this._getOrReturnCtx(e);
      return $(s, {
        code: z.invalid_type,
        expected: Z.string,
        received: s.parsedType
      }), ae;
    }
    const n = new et();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), $(i, {
          code: z.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), $(i, {
          code: z.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? $(i, {
          code: z.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && $(i, {
          code: z.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Ep.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
          validation: "email",
          code: z.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        ii || (ii = new RegExp(Sp, "u")), ii.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
          validation: "emoji",
          code: z.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        wp.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
          validation: "uuid",
          code: z.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        _p.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
          validation: "nanoid",
          code: z.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        yp.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
          validation: "cuid",
          code: z.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        bp.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
          validation: "cuid2",
          code: z.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        xp.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
          validation: "ulid",
          code: z.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), $(i, {
            validation: "url",
            code: z.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
        validation: "regex",
        code: z.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), $(i, {
        code: z.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), $(i, {
        code: z.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), $(i, {
        code: z.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? Ip(s).test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
        code: z.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? Mp.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
        code: z.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? Lp(s).test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
        code: z.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? kp.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
        validation: "duration",
        code: z.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? Pp(e.data, s.version) || (i = this._getOrReturnCtx(e, i), $(i, {
        validation: "ip",
        code: z.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? zp(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), $(i, {
        validation: "jwt",
        code: z.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? Fp(e.data, s.version) || (i = this._getOrReturnCtx(e, i), $(i, {
        validation: "cidr",
        code: z.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? Tp.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
        validation: "base64",
        code: z.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? Op.test(e.data) || (i = this._getOrReturnCtx(e, i), $(i, {
        validation: "base64url",
        code: z.invalid_string,
        message: s.message
      }), n.dirty()) : me.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: z.invalid_string,
      ...K.errToObj(n)
    });
  }
  _addCheck(e) {
    return new Kt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...K.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...K.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...K.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...K.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...K.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...K.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...K.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...K.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...K.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...K.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...K.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...K.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...K.errToObj(e) });
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
      ...K.errToObj(e?.message)
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
      ...K.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...K.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...K.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...K.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...K.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...K.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...K.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...K.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...K.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, K.errToObj(e));
  }
  trim() {
    return new Kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Kt({
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
Kt.create = (r) => new Kt({
  checks: [],
  typeName: oe.ZodString,
  coerce: r?.coerce ?? !1,
  ...ce(r)
});
function Bp(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = t > n ? t : n, s = Number.parseInt(r.toFixed(i).replace(".", "")), a = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % a / 10 ** i;
}
class Fr extends fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== Z.number) {
      const s = this._getOrReturnCtx(e);
      return $(s, {
        code: z.invalid_type,
        expected: Z.number,
        received: s.parsedType
      }), ae;
    }
    let n;
    const i = new et();
    for (const s of this._def.checks)
      s.kind === "int" ? me.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), $(n, {
        code: z.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), $(n, {
        code: z.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), $(n, {
        code: z.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? Bp(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), $(n, {
        code: z.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), $(n, {
        code: z.not_finite,
        message: s.message
      }), i.dirty()) : me.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, K.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, K.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, K.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, K.toString(t));
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
          message: K.toString(i)
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
  int(e) {
    return this._addCheck({
      kind: "int",
      message: K.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: K.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: K.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: K.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: K.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: K.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: K.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: K.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: K.toString(e)
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
Fr.create = (r) => new Fr({
  checks: [],
  typeName: oe.ZodNumber,
  coerce: r?.coerce || !1,
  ...ce(r)
});
class Br extends fe {
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
    if (this._getType(e) !== Z.bigint)
      return this._getInvalidInput(e);
    let n;
    const i = new et();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), $(n, {
        code: z.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), $(n, {
        code: z.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), $(n, {
        code: z.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : me.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return $(t, {
      code: z.invalid_type,
      expected: Z.bigint,
      received: t.parsedType
    }), ae;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, K.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, K.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, K.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, K.toString(t));
  }
  setLimit(e, t, n, i) {
    return new Br({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: K.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Br({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: K.toString(t)
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
Br.create = (r) => new Br({
  checks: [],
  typeName: oe.ZodBigInt,
  coerce: r?.coerce ?? !1,
  ...ce(r)
});
class Xs extends fe {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== Z.boolean) {
      const n = this._getOrReturnCtx(e);
      return $(n, {
        code: z.invalid_type,
        expected: Z.boolean,
        received: n.parsedType
      }), ae;
    }
    return dt(e.data);
  }
}
Xs.create = (r) => new Xs({
  typeName: oe.ZodBoolean,
  coerce: r?.coerce || !1,
  ...ce(r)
});
class Dn extends fe {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== Z.date) {
      const s = this._getOrReturnCtx(e);
      return $(s, {
        code: z.invalid_type,
        expected: Z.date,
        received: s.parsedType
      }), ae;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return $(s, {
        code: z.invalid_date
      }), ae;
    }
    const n = new et();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), $(i, {
        code: z.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), $(i, {
        code: z.too_big,
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
    return new Dn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: K.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: K.toString(t)
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
Dn.create = (r) => new Dn({
  checks: [],
  coerce: r?.coerce || !1,
  typeName: oe.ZodDate,
  ...ce(r)
});
class Ys extends fe {
  _parse(e) {
    if (this._getType(e) !== Z.symbol) {
      const n = this._getOrReturnCtx(e);
      return $(n, {
        code: z.invalid_type,
        expected: Z.symbol,
        received: n.parsedType
      }), ae;
    }
    return dt(e.data);
  }
}
Ys.create = (r) => new Ys({
  typeName: oe.ZodSymbol,
  ...ce(r)
});
class Js extends fe {
  _parse(e) {
    if (this._getType(e) !== Z.undefined) {
      const n = this._getOrReturnCtx(e);
      return $(n, {
        code: z.invalid_type,
        expected: Z.undefined,
        received: n.parsedType
      }), ae;
    }
    return dt(e.data);
  }
}
Js.create = (r) => new Js({
  typeName: oe.ZodUndefined,
  ...ce(r)
});
class Qs extends fe {
  _parse(e) {
    if (this._getType(e) !== Z.null) {
      const n = this._getOrReturnCtx(e);
      return $(n, {
        code: z.invalid_type,
        expected: Z.null,
        received: n.parsedType
      }), ae;
    }
    return dt(e.data);
  }
}
Qs.create = (r) => new Qs({
  typeName: oe.ZodNull,
  ...ce(r)
});
class bi extends fe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return dt(e.data);
  }
}
bi.create = (r) => new bi({
  typeName: oe.ZodAny,
  ...ce(r)
});
class ea extends fe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return dt(e.data);
  }
}
ea.create = (r) => new ea({
  typeName: oe.ZodUnknown,
  ...ce(r)
});
class Vt extends fe {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return $(t, {
      code: z.invalid_type,
      expected: Z.never,
      received: t.parsedType
    }), ae;
  }
}
Vt.create = (r) => new Vt({
  typeName: oe.ZodNever,
  ...ce(r)
});
class ta extends fe {
  _parse(e) {
    if (this._getType(e) !== Z.undefined) {
      const n = this._getOrReturnCtx(e);
      return $(n, {
        code: z.invalid_type,
        expected: Z.void,
        received: n.parsedType
      }), ae;
    }
    return dt(e.data);
  }
}
ta.create = (r) => new ta({
  typeName: oe.ZodVoid,
  ...ce(r)
});
class kt extends fe {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== Z.array)
      return $(t, {
        code: z.invalid_type,
        expected: Z.array,
        received: t.parsedType
      }), ae;
    if (i.exactLength !== null) {
      const a = t.data.length > i.exactLength.value, o = t.data.length < i.exactLength.value;
      (a || o) && ($(t, {
        code: a ? z.too_big : z.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && ($(t, {
      code: z.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && ($(t, {
      code: z.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => i.type._parseAsync(new Ht(t, a, t.path, o)))).then((a) => et.mergeArray(n, a));
    const s = [...t.data].map((a, o) => i.type._parseSync(new Ht(t, a, t.path, o)));
    return et.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new kt({
      ...this._def,
      minLength: { value: e, message: K.toString(t) }
    });
  }
  max(e, t) {
    return new kt({
      ...this._def,
      maxLength: { value: e, message: K.toString(t) }
    });
  }
  length(e, t) {
    return new kt({
      ...this._def,
      exactLength: { value: e, message: K.toString(t) }
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
  typeName: oe.ZodArray,
  ...ce(e)
});
function sr(r) {
  if (r instanceof Se) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = Ft.create(sr(n));
    }
    return new Se({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof kt ? new kt({
    ...r._def,
    type: sr(r.element)
  }) : r instanceof Ft ? Ft.create(sr(r.unwrap())) : r instanceof hr ? hr.create(sr(r.unwrap())) : r instanceof Yt ? Yt.create(r.items.map((e) => sr(e))) : r;
}
class Se extends fe {
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
    if (this._getType(e) !== Z.object) {
      const d = this._getOrReturnCtx(e);
      return $(d, {
        code: z.invalid_type,
        expected: Z.object,
        received: d.parsedType
      }), ae;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Vt && this._def.unknownKeys === "strip"))
      for (const d in i.data)
        a.includes(d) || o.push(d);
    const l = [];
    for (const d of a) {
      const c = s[d], u = i.data[d];
      l.push({
        key: { status: "valid", value: d },
        value: c._parse(new Ht(i, u, i.path, d)),
        alwaysSet: d in i.data
      });
    }
    if (this._def.catchall instanceof Vt) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const c of o)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: i.data[c] }
          });
      else if (d === "strict")
        o.length > 0 && ($(i, {
          code: z.unrecognized_keys,
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
            new Ht(i, u, i.path, c)
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
    }).then((d) => et.mergeObjectSync(n, d)) : et.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return K.errToObj, new Se({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          const i = this._def.errorMap?.(t, n).message ?? n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: K.errToObj(e).message ?? i
          } : {
            message: i
          };
        }
      } : {}
    });
  }
  strip() {
    return new Se({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Se({
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
    return new Se({
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
    return new Se({
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
    return new Se({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const n of me.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new Se({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const n of me.objectKeys(this.shape))
      e[n] || (t[n] = this.shape[n]);
    return new Se({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return sr(this);
  }
  partial(e) {
    const t = {};
    for (const n of me.objectKeys(this.shape)) {
      const i = this.shape[n];
      e && !e[n] ? t[n] = i : t[n] = i.optional();
    }
    return new Se({
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
        for (; s instanceof Ft; )
          s = s._def.innerType;
        t[n] = s;
      }
    return new Se({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Sl(me.objectKeys(this.shape));
  }
}
Se.create = (r, e) => new Se({
  shape: () => r,
  unknownKeys: "strip",
  catchall: Vt.create(),
  typeName: oe.ZodObject,
  ...ce(e)
});
Se.strictCreate = (r, e) => new Se({
  shape: () => r,
  unknownKeys: "strict",
  catchall: Vt.create(),
  typeName: oe.ZodObject,
  ...ce(e)
});
Se.lazycreate = (r, e) => new Se({
  shape: r,
  unknownKeys: "strip",
  catchall: Vt.create(),
  typeName: oe.ZodObject,
  ...ce(e)
});
class Nn extends fe {
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
      return $(t, {
        code: z.invalid_union,
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
      const o = a.map((l) => new Rt(l));
      return $(t, {
        code: z.invalid_union,
        unionErrors: o
      }), ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
Nn.create = (r, e) => new Nn({
  options: r,
  typeName: oe.ZodUnion,
  ...ce(e)
});
function xi(r, e) {
  const t = It(r), n = It(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === Z.object && n === Z.object) {
    const i = me.objectKeys(e), s = me.objectKeys(r).filter((o) => i.indexOf(o) !== -1), a = { ...r, ...e };
    for (const o of s) {
      const l = xi(r[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (t === Z.array && n === Z.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s], o = e[s], l = xi(a, o);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === Z.date && n === Z.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class Rn extends fe {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (Zs(s) || Zs(a))
        return ae;
      const o = xi(s.value, a.value);
      return o.valid ? ((qs(s) || qs(a)) && t.dirty(), { status: t.value, value: o.data }) : ($(n, {
        code: z.invalid_intersection_types
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
Rn.create = (r, e, t) => new Rn({
  left: r,
  right: e,
  typeName: oe.ZodIntersection,
  ...ce(t)
});
class Yt extends fe {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Z.array)
      return $(n, {
        code: z.invalid_type,
        expected: Z.array,
        received: n.parsedType
      }), ae;
    if (n.data.length < this._def.items.length)
      return $(n, {
        code: z.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ae;
    !this._def.rest && n.data.length > this._def.items.length && ($(n, {
      code: z.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...n.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new Ht(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(s).then((a) => et.mergeArray(t, a)) : et.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Yt({
      ...this._def,
      rest: e
    });
  }
}
Yt.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Yt({
    items: r,
    typeName: oe.ZodTuple,
    rest: null,
    ...ce(e)
  });
};
class ra extends fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Z.map)
      return $(n, {
        code: z.invalid_type,
        expected: Z.map,
        received: n.parsedType
      }), ae;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, l], d) => ({
      key: i._parse(new Ht(n, o, n.path, [d, "key"])),
      value: s._parse(new Ht(n, l, n.path, [d, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const d = await l.key, c = await l.value;
          if (d.status === "aborted" || c.status === "aborted")
            return ae;
          (d.status === "dirty" || c.status === "dirty") && t.dirty(), o.set(d.value, c.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const d = l.key, c = l.value;
        if (d.status === "aborted" || c.status === "aborted")
          return ae;
        (d.status === "dirty" || c.status === "dirty") && t.dirty(), o.set(d.value, c.value);
      }
      return { status: t.value, value: o };
    }
  }
}
ra.create = (r, e, t) => new ra({
  valueType: e,
  keyType: r,
  typeName: oe.ZodMap,
  ...ce(t)
});
class Hr extends fe {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Z.set)
      return $(n, {
        code: z.invalid_type,
        expected: Z.set,
        received: n.parsedType
      }), ae;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && ($(n, {
      code: z.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && ($(n, {
      code: z.too_big,
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
          return ae;
        c.status === "dirty" && t.dirty(), d.add(c.value);
      }
      return { status: t.value, value: d };
    }
    const o = [...n.data.values()].map((l, d) => s._parse(new Ht(n, l, n.path, d)));
    return n.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new Hr({
      ...this._def,
      minSize: { value: e, message: K.toString(t) }
    });
  }
  max(e, t) {
    return new Hr({
      ...this._def,
      maxSize: { value: e, message: K.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Hr.create = (r, e) => new Hr({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: oe.ZodSet,
  ...ce(e)
});
class na extends fe {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
na.create = (r, e) => new na({
  getter: r,
  typeName: oe.ZodLazy,
  ...ce(e)
});
class ia extends fe {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return $(t, {
        received: t.data,
        code: z.invalid_literal,
        expected: this._def.value
      }), ae;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ia.create = (r, e) => new ia({
  value: r,
  typeName: oe.ZodLiteral,
  ...ce(e)
});
function Sl(r, e) {
  return new ur({
    values: r,
    typeName: oe.ZodEnum,
    ...ce(e)
  });
}
class ur extends fe {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return $(t, {
        expected: me.joinValues(n),
        received: t.parsedType,
        code: z.invalid_type
      }), ae;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return $(t, {
        received: t.data,
        code: z.invalid_enum_value,
        options: n
      }), ae;
    }
    return dt(e.data);
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
    return ur.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return ur.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
ur.create = Sl;
class sa extends fe {
  _parse(e) {
    const t = me.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== Z.string && n.parsedType !== Z.number) {
      const i = me.objectValues(t);
      return $(n, {
        expected: me.joinValues(i),
        received: n.parsedType,
        code: z.invalid_type
      }), ae;
    }
    if (this._cache || (this._cache = new Set(me.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = me.objectValues(t);
      return $(n, {
        received: n.data,
        code: z.invalid_enum_value,
        options: i
      }), ae;
    }
    return dt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
sa.create = (r, e) => new sa({
  values: r,
  typeName: oe.ZodNativeEnum,
  ...ce(e)
});
class An extends fe {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== Z.promise && t.common.async === !1)
      return $(t, {
        code: z.invalid_type,
        expected: Z.promise,
        received: t.parsedType
      }), ae;
    const n = t.parsedType === Z.promise ? t.data : Promise.resolve(t.data);
    return dt(n.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
An.create = (r, e) => new An({
  type: r,
  typeName: oe.ZodPromise,
  ...ce(e)
});
class fr extends fe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === oe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (a) => {
        $(n, a), a.fatal ? t.abort() : t.dirty();
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
          return l.status === "aborted" ? ae : l.status === "dirty" || t.value === "dirty" ? kr(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return ae;
        const o = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? ae : o.status === "dirty" || t.value === "dirty" ? kr(o.value) : o;
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
        if (!dr(a))
          return ae;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => dr(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({
          status: t.value,
          value: o
        })) : ae);
    me.assertNever(i);
  }
}
fr.create = (r, e, t) => new fr({
  schema: r,
  typeName: oe.ZodEffects,
  effect: e,
  ...ce(t)
});
fr.createWithPreprocess = (r, e, t) => new fr({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: oe.ZodEffects,
  ...ce(t)
});
class Ft extends fe {
  _parse(e) {
    return this._getType(e) === Z.undefined ? dt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ft.create = (r, e) => new Ft({
  innerType: r,
  typeName: oe.ZodOptional,
  ...ce(e)
});
class hr extends fe {
  _parse(e) {
    return this._getType(e) === Z.null ? dt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
hr.create = (r, e) => new hr({
  innerType: r,
  typeName: oe.ZodNullable,
  ...ce(e)
});
class wi extends fe {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === Z.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
wi.create = (r, e) => new wi({
  innerType: r,
  typeName: oe.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ce(e)
});
class _i extends fe {
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
    return Sn(i) ? i.then((s) => ({
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
_i.create = (r, e) => new _i({
  innerType: r,
  typeName: oe.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ce(e)
});
class aa extends fe {
  _parse(e) {
    if (this._getType(e) !== Z.nan) {
      const n = this._getOrReturnCtx(e);
      return $(n, {
        code: z.invalid_type,
        expected: Z.nan,
        received: n.parsedType
      }), ae;
    }
    return { status: "valid", value: e.data };
  }
}
aa.create = (r) => new aa({
  typeName: oe.ZodNaN,
  ...ce(r)
});
class Hp extends fe {
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
class ns extends fe {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? ae : s.status === "dirty" ? (t.dirty(), kr(s.value)) : this._def.out._parseAsync({
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
    return new ns({
      in: e,
      out: t,
      typeName: oe.ZodPipeline
    });
  }
}
class Ci extends fe {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (i) => (dr(i) && (i.value = Object.freeze(i.value)), i);
    return Sn(t) ? t.then((i) => n(i)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ci.create = (r, e) => new Ci({
  innerType: r,
  typeName: oe.ZodReadonly,
  ...ce(e)
});
var oe;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(oe || (oe = {}));
const Vp = bi.create;
Vt.create;
kt.create;
const jp = Se.create;
Nn.create;
Rn.create;
Yt.create;
ur.create;
An.create;
Ft.create;
hr.create;
function Dl(r, e) {
  return async (t, n, i) => {
    const s = $p(r, t), a = { ...t };
    for (const l of Object.keys(a))
      a[l] === null && (a[l] = void 0);
    return mp(s, e)(a, n, i);
  };
}
function $p(r, e) {
  const n = Ji(r).shape, i = {};
  for (const [a, o] of Object.entries(n)) {
    const l = Qi(o);
    if (!l || !l.renderIf) {
      i[a] = o;
      continue;
    }
    Wn(l.renderIf, e) ? i[a] = o : i[a] = Vp();
  }
  const s = jp(i);
  if (ye(r, "ZodEffects")) {
    const o = r._def.effect;
    if (o.type === "refinement")
      return s.superRefine(o.refinement);
  }
  return s;
}
function Wp(r) {
  const e = vt(r);
  if (!ye(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (i = s.value);
  return { min: n, max: i };
}
function si(r) {
  const e = vt(r);
  if (!ye(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: n, maxDate: i };
}
function Gp(r) {
  const e = vt(r);
  if (!ye(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const i of t)
    i.kind === "max" && (n = i.value);
  return { maxLength: n };
}
function Up(r) {
  const e = vt(r);
  return ye(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "email") : !1;
}
function Zp(r) {
  const e = vt(r);
  return ye(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "url") : !1;
}
function oa(r) {
  return Up(r) ? "email" : Zp(r) ? "url" : "text";
}
function la(r, e, t, n) {
  const i = {
    id: r,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    validation: e
  }, s = !xl(e);
  switch (n) {
    case "text": {
      const a = "inputType" in t && t.inputType ? t.inputType : oa(e);
      return {
        ...i,
        type: "text",
        inputType: a,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: a, max: o } = Wp(e);
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
      const { maxLength: a } = Gp(e);
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
      const a = si(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = si(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
      const a = si(e), o = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
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
        inputType: oa(e),
        renderIf: t.renderIf
      };
  }
}
function Tn(r) {
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
          (l) => la(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(o);
    } else {
      t.add(n);
      const a = la(
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
function Nl(r) {
  const e = r.shape, t = [], n = Object.entries(e);
  for (let i = 0; i < n.length; i++) {
    const [s, a] = n[i], o = Qi(a);
    if (o) {
      const l = Om(a, o);
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
function Rl(r, e) {
  return G(() => {
    const t = Ji(r), n = Nl(t), i = [], s = {};
    for (const l of n) {
      const d = l.config.section;
      d ? (s[d] || (s[d] = []), s[d].push(l)) : i.push(l);
    }
    i.sort((l, d) => l.position - d.position);
    for (const l of Object.keys(s))
      s[l].sort((d, c) => d.position - c.position);
    const a = [];
    a.push(...Tn(i));
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
          fields: Tn(c)
        }
      };
      a.push(u);
    }
    return a;
  }, [r, e]);
}
function dv(r, e) {
  const t = Ji(r), n = Nl(t), i = [], s = {};
  for (const l of n) {
    const d = l.config.section;
    d ? (s[d] || (s[d] = []), s[d].push(l)) : i.push(l);
  }
  i.sort((l, d) => l.position - d.position);
  for (const l of Object.keys(s))
    s[l].sort((d, c) => d.position - c.position);
  const a = [];
  a.push(...Tn(i));
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
        fields: Tn(c)
      }
    };
    a.push(u);
  }
  return a;
}
function Al(r) {
  const { validation: e } = r.forms;
  return (t, n) => {
    switch (t.code) {
      case z.invalid_type:
        return t.received === "undefined" || t.received === "null" ? { message: e.required } : { message: e.invalidType };
      case z.invalid_string:
        if (t.validation === "email")
          return { message: e.string.email };
        if (t.validation === "url")
          return { message: e.string.url };
        break;
      case z.too_small:
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
      case z.too_big:
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
      case z.invalid_date:
        return { message: e.date.invalid };
      case z.not_multiple_of:
        if (t.multipleOf === 1)
          return { message: e.number.integer };
        break;
      case z.invalid_literal:
        if (t.expected === !0)
          return { message: e.checkbox.mustBeChecked };
        break;
    }
    return { message: n.defaultError };
  };
}
const qp = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Kp(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({ type: "switchGroup", fields: [...t] }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({ type: "field", item: i }) : i.type === "row" && e.push({ type: "row", item: i, index: s }));
  }), n(), e;
}
function Xp({
  formName: r,
  sectionId: e,
  schema: t,
  sectionConfig: n,
  defaultValues: i,
  onSubmit: s,
  submitConfig: a,
  errorTriggerMode: o,
  className: l,
  initialFiles: d
}) {
  const c = $t(), u = Rl(t), f = a?.label ?? "Submit", m = a?.icon === null ? void 0 : a?.icon ?? wa, g = a?.showSubmitWhenDirty ?? !1, v = G(() => Al(c), [c]), _ = qp[o], N = G(
    () => Dl(t, { errorMap: v }),
    [t, v]
  ), b = al({
    resolver: N,
    mode: _,
    defaultValues: i
  }), D = b.formState.errors.root, { isSubmitting: R, isDirty: x } = b.formState, S = Object.keys(b.formState.errors).filter((k) => k !== "root").length > 0, C = ee(
    async (k) => {
      const T = { ...k };
      for (const F of Object.keys(T))
        T[F] === null && (T[F] = void 0);
      const j = await s(T);
      j.success ? b.reset(k) : (j.errors && Object.entries(j.errors).forEach(([F, X]) => {
        b.setError(F, { message: X });
      }), j.rootMessage && b.setError("root", { message: j.rootMessage }));
    },
    [s, b]
  ), O = Kp(u), W = G(
    () => ({ formName: r, initialFiles: d }),
    [r, d]
  ), P = n?.title ?? e, A = n?.description;
  return /* @__PURE__ */ h(Xi.Provider, { value: W, children: /* @__PURE__ */ h(cl, { ...b, children: /* @__PURE__ */ H(
    "form",
    {
      onSubmit: b.handleSubmit(C),
      className: ie("flex flex-col", l),
      children: [
        /* @__PURE__ */ H(
          "div",
          {
            className: ie(
              "flex items-start justify-between py-5",
              "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
            ),
            children: [
              /* @__PURE__ */ h(za, { title: P, description: A ?? "" }),
              n?.action && /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("div", { className: `flex flex-col ${Ki}`, children: O.map((k, T) => {
          switch (k.type) {
            case "switchGroup":
              return /* @__PURE__ */ h(
                rs,
                {
                  fields: k.fields,
                  sectionId: e
                },
                `switch-group-${T}`
              );
            case "field":
              return /* @__PURE__ */ h(
                Gn,
                {
                  field: k.item.field,
                  sectionId: e
                },
                k.item.field.id
              );
            case "row":
              return /* @__PURE__ */ h(
                ts,
                {
                  row: k.item,
                  sectionId: e
                },
                `row-${k.index}`
              );
            default:
              return null;
          }
        }) }),
        D && /* @__PURE__ */ h("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: D.message }),
        (!g || x) && /* @__PURE__ */ h("div", { className: "mt-4", children: /* @__PURE__ */ h(
          Ge,
          {
            type: "submit",
            label: f,
            icon: m,
            loading: R,
            disabled: S
          }
        ) })
      ]
    }
  ) }) });
}
function Yp(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({ type: "switchGroup", fields: [...t] }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({ type: "field", item: i }) : i.type === "row" && e.push({ type: "row", item: i, index: s }));
  }), n(), e;
}
function Jp({ section: r }) {
  const t = Gt().watch(), { formName: n } = Yi(), { title: i, description: s, renderIf: a, action: o, fields: l } = r.section, d = r.id;
  if (a && !Wn(a, t))
    return null;
  const c = Yp(l), u = Xt(n, d);
  return /* @__PURE__ */ H("section", { id: u, className: "flex flex-col scroll-mt-4", children: [
    /* @__PURE__ */ H(
      "div",
      {
        className: ie(
          "flex items-start justify-between py-5",
          "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
        ),
        children: [
          /* @__PURE__ */ h(za, { title: i, description: s ?? "" }),
          o && /* @__PURE__ */ h(
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
    /* @__PURE__ */ h("div", { className: `flex flex-col ${Ki}`, children: c.map((f, m) => f.type === "switchGroup" ? /* @__PURE__ */ h(
      rs,
      {
        fields: f.fields,
        sectionId: d
      },
      `switch-group-${m}`
    ) : f.type === "field" ? /* @__PURE__ */ h(
      Gn,
      {
        field: f.item.field,
        sectionId: d
      },
      f.item.field.id
    ) : f.type === "row" ? /* @__PURE__ */ h(
      ts,
      {
        row: f.item,
        sectionId: d
      },
      `row-${f.index}`
    ) : null) })
  ] });
}
function ca(r) {
  const e = document.getElementById(r);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function Qp({
  formName: r,
  errors: e
}) {
  const t = Object.keys(e).filter((f) => f !== "root"), n = t.length > 0, i = t.length, [s, a] = Q(0), o = J([]);
  re(() => {
    const f = t, m = o.current, g = f.find(
      (v) => !m.includes(v)
    );
    if (g) {
      const v = Xt(r, void 0, g);
      ca(v);
      const _ = f.indexOf(g);
      _ !== -1 && a(_);
    }
    o.current = f;
  }, [t, r]);
  const l = ee(
    (f) => {
      if (t.length === 0) return;
      const m = (f % t.length + t.length) % t.length;
      a(m);
      const g = t[m], v = Xt(r, void 0, g);
      ca(v);
    },
    [t, r]
  ), d = ee(() => {
    l(s - 1);
  }, [s, l]), c = ee(() => {
    l(s + 1);
  }, [s, l]), u = ee(() => {
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
function eg(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({ type: "switchGroup", fields: [...t] }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({ type: "field", item: i }) : i.type === "row" ? e.push({ type: "row", item: i, index: s }) : i.type === "section" && e.push({ type: "section", item: i }));
  }), n(), e;
}
function tg(r) {
  if (typeof r != "object" || r === null) return !1;
  const t = r._def;
  return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
const rg = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function ng(r) {
  const {
    name: e,
    schema: t,
    sections: n,
    defaultValues: i,
    onSubmit: s,
    submitConfig: a,
    className: o,
    errorTriggerMode: l = "on-blur",
    styling: d,
    initialFiles: c
  } = r, u = d?.showSectionsSidepanel ?? !1, f = G(() => Object.keys(t), [t]), m = ee(
    (b) => {
      const D = Xt(e, b), R = document.getElementById(D);
      R && R.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [e]
  ), [g, v] = Q(
    f[0]
  ), _ = G(() => !n || !u ? [] : f.map((b) => ({
    id: b,
    label: n[b]?.title ?? b,
    onClick: () => {
      v(b), m(b);
    }
  })), [n, f, u, m]), N = /* @__PURE__ */ h("div", { className: ie("flex w-full flex-col", vl, o), children: f.map((b, D) => {
    const R = t[b], x = n?.[b], S = i?.[b], C = x?.submitConfig ?? a;
    return /* @__PURE__ */ h(
      "div",
      {
        id: Xt(e, b),
        className: ie("scroll-mt-4", D !== 0 && gl),
        children: /* @__PURE__ */ h(
          Xp,
          {
            formName: e,
            sectionId: b,
            schema: R,
            sectionConfig: x,
            defaultValues: S,
            onSubmit: (O) => s(b, O),
            submitConfig: C,
            errorTriggerMode: l,
            initialFiles: c
          }
        )
      },
      b
    );
  }) });
  return u && _.length > 0 ? /* @__PURE__ */ H("div", { className: "flex w-full gap-4", children: [
    /* @__PURE__ */ h("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ h(
      Ri,
      {
        items: _,
        activeItem: g,
        scrollable: !1
      }
    ) }),
    /* @__PURE__ */ h("div", { className: "w-px bg-f1-border-secondary" }),
    /* @__PURE__ */ h("div", { className: "flex flex-1 justify-center", children: N })
  ] }) : N;
}
function ig(r) {
  return tg(r.schema) ? /* @__PURE__ */ h(
    sg,
    {
      ...r
    }
  ) : /* @__PURE__ */ h(
    ng,
    {
      ...r
    }
  );
}
function sg(r) {
  const e = $t(), { forms: t } = e, {
    name: n,
    schema: i,
    sections: s,
    defaultValues: a,
    onSubmit: o,
    submitConfig: l,
    className: d,
    errorTriggerMode: c = "on-blur",
    styling: u,
    formRef: f
  } = r, m = u?.showSectionsSidepanel ?? !1, g = l?.type === "action-bar", v = l?.label ?? "Submit", _ = l?.icon === null ? void 0 : l?.icon ?? wa, N = l?.type !== "action-bar" && l?.hideSubmitButton, b = !g && !N, D = l?.type === "action-bar" && l?.discardable, R = g ? l?.discardConfig : void 0, x = R?.label ?? t.actionBar.discard, S = R?.icon === null ? void 0 : R?.icon ?? vc, C = g ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, O = l?.savingMessage ?? t.actionBar.saving, W = g && !!l?.centerActionBarInFrameContent, P = Rl(i, s), A = G(() => P.filter((L) => L.type === "section").map((L) => L.id), [P]), [k, T] = Q(
    A[0]
  ), j = ee(
    (L) => {
      T(L);
      const I = Xt(n, L), M = document.getElementById(I);
      M && M.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [n]
  ), F = G(() => !s || !m ? [] : A.map((L) => ({
    id: L,
    label: s[L]?.title ?? L,
    onClick: () => j(L)
  })), [s, A, m, j]), X = G(() => Al(e), [e]), q = rg[c], le = G(
    () => Dl(i, { errorMap: X }),
    [i, X]
  ), te = al({
    resolver: le,
    mode: q,
    defaultValues: a
  }), be = te.formState.errors.root, { isDirty: Ze, isSubmitting: xe, errors: ze } = te.formState, [Re, Oe] = Q("idle"), [Ee, je] = Q(), ge = J(null), {
    hasErrors: _e,
    errorCount: ue,
    goToPreviousError: tt,
    goToNextError: Me,
    resetErrorNavigation: Le
  } = Qp({
    formName: n,
    errors: ze
  }), Ie = (() => {
    if (!_e)
      return Re === "loading" ? O : Re === "success" ? Ee ?? t.actionBar.saved : C;
  })(), qe = async (L) => {
    ge.current && (clearTimeout(ge.current), ge.current = null), Bc(() => {
      Oe("loading");
    });
    const I = { ...L };
    for (const U of Object.keys(I))
      I[U] === null && (I[U] = void 0);
    const M = await o(I);
    M.success ? (te.reset(L), Le(), je(M.message), Oe("success"), ge.current = setTimeout(() => {
      Oe("idle"), je(void 0), ge.current = null;
    }, 3e3)) : (Oe("idle"), M.errors && Object.entries(M.errors).forEach(([U, se]) => {
      te.setError(U, { message: se });
    }), M.rootMessage && te.setError("root", { message: M.rootMessage }));
  };
  re(() => () => {
    ge.current && clearTimeout(ge.current);
  }, []), re(() => {
    Ze && Re === "success" && (ge.current && (clearTimeout(ge.current), ge.current = null), Oe("idle"), je(void 0));
  }, [Ze, Re]);
  const ut = () => {
    te.reset(), Le(), Oe("idle"), je(void 0), ge.current && (clearTimeout(ge.current), ge.current = null);
  }, Et = J(null);
  re(() => {
    if (f) {
      const L = {
        submit: () => new Promise((I, M) => {
          te.handleSubmit(
            async (U) => {
              await qe(U), I();
            },
            () => {
              M(new Error("Form validation failed"));
            }
          )();
        }),
        reset: () => {
          te.reset(), Le();
        },
        isDirty: () => te.formState.isDirty,
        _setStateCallback: (I) => {
          Et.current = I;
        }
      };
      f.current = L;
    }
    return () => {
      f && (f.current = null);
    };
  }, [f, te, Le]), re(() => {
    Et.current && Et.current({
      isSubmitting: xe,
      hasErrors: _e
    });
  }, [xe, _e]);
  const p = eg(P), y = G(
    () => ({ formName: n, initialFiles: r.initialFiles }),
    [n, r.initialFiles]
  ), E = /* @__PURE__ */ H(
    "form",
    {
      onSubmit: te.handleSubmit(qe),
      className: ie("flex flex-col", vl, d),
      children: [
        p.map((L, I) => {
          const M = I !== 0 && L.type !== "section" ? "mt-4" : "";
          switch (L.type) {
            case "switchGroup":
              return /* @__PURE__ */ h("div", { className: M, children: /* @__PURE__ */ h(rs, { fields: L.fields }) }, `switch-group-${I}`);
            case "field":
              return /* @__PURE__ */ h("div", { className: M, children: /* @__PURE__ */ h(Gn, { field: L.item.field }) }, L.item.field.id);
            case "row":
              return /* @__PURE__ */ h("div", { className: M, children: /* @__PURE__ */ h(ts, { row: L.item }) }, `row-${L.index}`);
            case "section":
              return /* @__PURE__ */ h(
                "div",
                {
                  className: I !== 0 ? gl : "",
                  children: /* @__PURE__ */ h(Jp, { section: L.item })
                },
                L.item.id
              );
            default:
              return null;
          }
        }),
        be && /* @__PURE__ */ h("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: be.message }),
        !g && b && /* @__PURE__ */ h("div", { className: "mt-4", children: /* @__PURE__ */ h(
          Ge,
          {
            type: "submit",
            label: v,
            icon: _,
            loading: xe,
            disabled: _e
          }
        ) })
      ]
    }
  );
  return /* @__PURE__ */ h(Xi.Provider, { value: y, children: /* @__PURE__ */ H(cl, { ...te, children: [
    m && F.length > 0 ? /* @__PURE__ */ H("div", { className: "flex w-full gap-4", children: [
      /* @__PURE__ */ h("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ h(
        Ri,
        {
          items: F,
          activeItem: k,
          scrollable: !1
        }
      ) }),
      /* @__PURE__ */ h("div", { className: "w-px bg-f1-border-secondary" }),
      /* @__PURE__ */ h("div", { className: "flex flex-1 justify-center", children: E })
    ] }) : E,
    /* @__PURE__ */ h(
      Tm,
      {
        isActionBar: g,
        isDirty: Ze,
        actionBarStatus: Re,
        hasErrors: _e,
        errorCount: ue,
        resolvedActionBarLabel: Ie,
        centerActionBarInFrameContent: W,
        submitLabel: v,
        submitIcon: _,
        discardableChanges: D,
        discardLabel: x,
        discardIcon: S,
        issuesOneLabel: t.actionBar.issues.one,
        issuesOtherLabel: t.actionBar.issues.other,
        onSubmit: te.handleSubmit(qe),
        onDiscard: ut,
        goToPreviousError: tt,
        goToNextError: Me
      }
    )
  ] }) });
}
function uv() {
  const [r, e] = Q(!1), [t, n] = Q(!1), i = J((c) => {
    e(c.isSubmitting), n(c.hasErrors);
  }), s = J(null), a = J({
    get current() {
      return s.current;
    },
    set current(c) {
      s.current = c, c && c._setStateCallback(i.current);
    }
  }), o = ee(async () => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return s.current.submit();
  }, []), l = ee(() => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    s.current.reset();
  }, []), d = ee(() => s.current ? s.current.isDirty() : !1, []);
  return {
    formRef: a.current,
    submit: o,
    reset: l,
    isDirty: d,
    isSubmitting: r,
    hasErrors: t
  };
}
const fv = Qe("F0Form", ig), Tl = Ue((r, e) => /* @__PURE__ */ h(Mi, { ref: e, variant: "heading", ...r }));
Tl.displayName = "F0Heading";
const hv = he(Tl), mv = he(Sd), pv = he(
  Qe(
    "F0GridStack",
    Oi
  )
), ai = 16, ag = jt({
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
function Ol(r, e = 0) {
  return r.flatMap((t) => [
    { id: t.id, depth: Math.min(e, 3) },
    ...t.children ? Ol(t.children, e + 1) : []
  ]);
}
function og(r, e) {
  const t = r.length;
  if (t <= ai) return r;
  const n = t / (ai - 1), i = new Set(
    Array.from(
      { length: ai - 1 },
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
function lg({
  items: r,
  activeItem: e,
  className: t,
  align: n = "left",
  variant: i = "dark"
}) {
  const s = G(
    () => og(Ol(r), e),
    [r, e]
  );
  return /* @__PURE__ */ h(
    "div",
    {
      className: ie(
        "flex flex-col justify-center gap-2 py-3",
        n === "right" ? "items-end" : "items-start",
        t
      ),
      children: s.map((a) => /* @__PURE__ */ h(
        "div",
        {
          className: ag({
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
const cg = 300, dg = 0, ug = jt({
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
function fg({
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
  const [d, c] = Q(!1), u = J(!1), f = (g) => {
    g && !d && (u.current = !0), c(g);
  }, m = ee((g) => {
    !g || !u.current || (u.current = !1, requestAnimationFrame(() => {
      g.querySelector("[data-active]")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }, []);
  return /* @__PURE__ */ H(
    Dd,
    {
      open: d,
      onOpenChange: f,
      openDelay: dg,
      closeDelay: cg,
      children: [
        /* @__PURE__ */ h(Nd, { asChild: !0, children: /* @__PURE__ */ h(
          "button",
          {
            className: ie(
              Si(),
              "flex cursor-pointer items-center rounded-md px-1.5 py-1",
              t
            ),
            "aria-label": r ?? "Menu",
            children: /* @__PURE__ */ h(
              lg,
              {
                items: e,
                activeItem: n,
                align: a,
                variant: l
              }
            )
          }
        ) }),
        /* @__PURE__ */ h(
          Rd,
          {
            ref: m,
            side: a === "left" ? "right" : "left",
            align: "center",
            sideOffset: -28,
            className: ie(
              ug({ size: o }),
              !r && "pt-2",
              "scrollbar-macos"
            ),
            children: /* @__PURE__ */ h(
              Ri,
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
const gv = he(
  Qe(
    "F0TableOfContentPopover",
    fg
  )
), hg = ({ benefits: r }) => /* @__PURE__ */ h("div", { className: "flex flex-col gap-2", children: r.map((e, t) => /* @__PURE__ */ h(mg, { text: e }, t)) }), mg = ({ text: r }) => /* @__PURE__ */ H("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ h(Vr, { icon: bc, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ h("span", { children: r })
] }), Ml = Ue(
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
  }, d) => /* @__PURE__ */ H(
    "div",
    {
      ref: d,
      className: ie(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        i && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ h("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ h(
          "img",
          {
            src: e,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ H("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ H("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ H("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ H("div", { className: "flex flex-row items-center gap-2", children: [
                s && /* @__PURE__ */ h(_a, { module: s }),
                a && /* @__PURE__ */ h("p", { className: "text-base font-medium text-f1-foreground", children: a })
              ] }),
              (o || l) && /* @__PURE__ */ H("div", { className: "flex justify-start gap-2", children: [
                o && /* @__PURE__ */ h(yc, { icon: o.icon, text: o.label }),
                l && /* @__PURE__ */ h(
                  Ad,
                  {
                    variant: l.variant || "positive",
                    text: l.label
                  }
                )
              ] }),
              /* @__PURE__ */ h("h2", { className: "font-bold text-xl text-f1-foreground", children: r })
            ] }),
            /* @__PURE__ */ h(hg, { benefits: t })
          ] }),
          n && /* @__PURE__ */ h("div", { className: "flex gap-3", children: n })
        ] })
      ]
    }
  )
);
Ml.displayName = "ProductBlankslate";
const pg = he(Ml);
function gg({
  isOpen: r,
  onClose: e,
  title: t,
  children: n,
  module: i,
  portalContainer: s
}) {
  const [a, o] = Q(r);
  return re(() => {
    o(r);
  }, [r]), /* @__PURE__ */ h(xc, { open: a, onOpenChange: (d) => {
    o(d), d || e();
  }, modal: !0, children: /* @__PURE__ */ H(
    wc,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [
        /* @__PURE__ */ H("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ H(Ca, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            i && /* @__PURE__ */ h(_a, { module: i, size: "lg" }),
            t
          ] }),
          /* @__PURE__ */ h(
            Ei,
            {
              variant: "outline",
              icon: Di,
              onClick: e,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ H(va, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          n,
          /* @__PURE__ */ h(
            ya,
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
function vg({
  isOpen: r,
  onClose: e,
  title: t,
  image: n,
  benefits: i,
  errorMessage: s,
  successMessage: a,
  loadingState: o,
  nextSteps: l,
  closeLabel: d,
  primaryAction: c,
  modalTitle: u,
  modalModule: f,
  secondaryAction: m,
  portalContainer: g,
  tag: v,
  promoTag: _,
  showResponseDialog: N = !0
}) {
  const [b, D] = Q(r), [R, x] = Q(null), [S, C] = Q(!1), O = async () => {
    if (c?.onClick) {
      C(!0);
      try {
        await c.onClick(), D(!1), N && x("success");
      } catch {
        N && x("error");
      } finally {
        C(!1);
      }
    }
  }, W = () => {
    D(!1), e?.();
  }, P = S;
  return /* @__PURE__ */ H(Wt, { children: [
    /* @__PURE__ */ h(
      gg,
      {
        isOpen: b,
        onClose: W,
        title: u,
        module: f,
        portalContainer: g,
        children: /* @__PURE__ */ h("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ h(
          pg,
          {
            title: t,
            image: n,
            benefits: i,
            withShadow: !1,
            tag: v,
            promoTag: _,
            actions: /* @__PURE__ */ H("div", { className: "flex gap-3", children: [
              c && /* @__PURE__ */ h(
                Ge,
                {
                  variant: c.variant,
                  label: P ? o.label : c.label,
                  icon: c.icon || void 0,
                  onClick: O,
                  loading: c.loading,
                  size: c.size
                }
              ),
              m && /* @__PURE__ */ h(
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
    R && N && /* @__PURE__ */ h(
      Fa,
      {
        open: !0,
        onClose: () => {
          W(), x(null);
        },
        success: R === "success",
        errorMessage: s,
        successMessage: a,
        nextSteps: l,
        closeLabel: d,
        portalContainer: g
      }
    )
  ] });
}
const vv = he(vg);
function yg({
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
  const [d, c] = Q(!1), u = () => {
    c(!0), n && n();
  };
  re(() => {
    a && a(!d);
  }, [a, d]);
  const f = r?.includes(".mp4");
  return /* @__PURE__ */ h(Wt, { children: d ? null : /* @__PURE__ */ H(_c, { style: { width: s }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ H(Cc, { children: [
      i && /* @__PURE__ */ h("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ h(
        Ge,
        {
          variant: "ghost",
          icon: Di,
          size: "sm",
          hideLabel: !0,
          onClick: u,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ H("div", { children: [
        /* @__PURE__ */ h("div", { children: r && (f ? /* @__PURE__ */ h(
          "video",
          {
            src: r,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ h(
          "img",
          {
            src: r,
            alt: e,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ H("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ h(En, { className: "text-lg font-medium", children: e }),
          /* @__PURE__ */ h(En, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    o && /* @__PURE__ */ h(kc, { className: "p-3", children: o.map(
      (m) => m.type === "upsell" ? /* @__PURE__ */ h(
        Ba,
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
      ) : /* @__PURE__ */ h(
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
const bg = he(yg), Ll = Ue(
  function({ primaryAction: e, secondaryAction: t, ...n }, i) {
    const s = (l) => l.variant === "promote" ? /* @__PURE__ */ h(
      Ba,
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
    ) : /* @__PURE__ */ h(
      Ge,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), a = e?.variant !== "promote" ? e : void 0, o = t?.variant !== "promote" ? t : void 0;
    return /* @__PURE__ */ H(
      Td,
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
Ll.displayName = "UpsellingBanner";
const yv = he(Ll);
function xg({
  isOpen: r,
  setIsOpen: e,
  label: t,
  variant: n = "promote",
  size: i = "md",
  showIcon: s = !0,
  side: a = "right",
  align: o = "center",
  icon: l = Ec,
  mediaUrl: d,
  title: c,
  description: u,
  width: f = "300px",
  trackVisibility: m,
  actions: g,
  onClick: v,
  hideLabel: _ = !1
}) {
  const [N, b] = Q(!1), [D, R] = Q(null), [x, S] = Q(null), C = (k) => {
    e(k), v && v();
  }, O = async (k) => {
    if (k.type === "upsell") {
      S(k);
      try {
        await k.onClick(), k.showConfirmation && (b(!0), R("success"));
      } catch {
        b(!0), R("error");
      }
    }
  }, W = () => {
    R(null), b(!1), S(null), e(!1);
  }, P = r && !N, A = g?.map((k) => k.type === "upsell" ? {
    ...k,
    onClick: () => O(k)
  } : k);
  return /* @__PURE__ */ H(Wt, { children: [
    /* @__PURE__ */ H(ma, { open: P, onOpenChange: C, children: [
      /* @__PURE__ */ h(pa, { asChild: !0, children: /* @__PURE__ */ h(
        Ge,
        {
          variant: n,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(r),
          hideLabel: _
        }
      ) }),
      /* @__PURE__ */ h(
        ga,
        {
          side: a,
          align: o,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ h(
            bg,
            {
              mediaUrl: d,
              title: c,
              description: u,
              onClose: () => e(!1),
              dismissible: !1,
              width: f,
              trackVisibility: m,
              actions: A,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    x?.type === "upsell" && x.showConfirmation && D && /* @__PURE__ */ h(
      Fa,
      {
        open: !0,
        onClose: W,
        success: D === "success",
        errorMessage: x.errorMessage,
        successMessage: x.successMessage,
        nextSteps: x.nextSteps,
        closeLabel: x.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const bv = he(xg), wg = ({
  isOpen: r = !1,
  onClose: e = () => {
  },
  type: t,
  title: n,
  description: i,
  primaryAction: s,
  secondaryAction: a
}) => /* @__PURE__ */ h(
  ka,
  {
    isOpen: r,
    onClose: e,
    variant: "notification",
    size: "sm",
    primaryAction: s,
    secondaryAction: a,
    type: t == "critical" ? "critical" : "default",
    modal: !0,
    children: /* @__PURE__ */ H("div", { className: "flex flex-col gap-4 py-2", children: [
      /* @__PURE__ */ h(Ia, { type: t, size: "lg" }),
      /* @__PURE__ */ H("div", { className: "flex flex-col gap-0.5", children: [
        /* @__PURE__ */ h(Ca, { className: "text-xl sm:text-lg", children: n }),
        /* @__PURE__ */ h(Od, { className: "text-lg sm:text-base", children: i })
      ] })
    ] })
  }
), _g = async (r) => Promise.resolve(
  typeof r.value == "function" ? await r.value() : r.value
), Cg = ({ items: r }) => {
  const [e, t] = Q({}), n = (o) => e[o] > 0, i = (o, l) => {
    t((d) => ({
      ...d,
      [o]: (d[o] || 0) + l
    }));
  }, s = G(() => {
    const o = (l, d) => ({
      ...d,
      value: on(),
      onClick: async () => {
        d.nonBlocking || i(l.id, 1);
        try {
          const c = await _g(d);
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
        primary: ls(l.actions.primary).map(
          (d) => o(l, d)
        ),
        secondary: ls(l.actions.secondary).map(
          (d) => o(l, d)
        )
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
        primary: l.actions.primary.map(
          (d) => o(l.id, d)
        ),
        secondary: l.actions.secondary.map(
          (d) => o(l.id, d)
        )
      }
    }));
  }, [s, e]);
  return /* @__PURE__ */ h(Wt, { children: a.map((o) => /* @__PURE__ */ h(Sa, { children: o.variant === "notification" ? /* @__PURE__ */ h(
    wg,
    {
      title: o.title,
      description: o.description ?? "",
      type: o.type,
      isOpen: !0,
      onClose: o.onCloseDialog,
      primaryAction: o.actions.primary[0],
      secondaryAction: o.actions.secondary
    },
    o.id
  ) : o.variant === "drawer" ? /* @__PURE__ */ h(
    Vo,
    {
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
    },
    o.id
  ) : /* @__PURE__ */ h(
    ka,
    {
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
    },
    o.id
  ) }, o.id)) });
}, Il = gt(null), kg = ({
  children: r
}) => {
  const [e, t] = Q([]), [n, i] = Q(!1);
  re(() => {
    i(!0);
  }, []);
  const s = ee((c) => {
    t((u) => [...u, c]);
  }, []), a = ee((c) => {
    t((u) => u.filter((f) => f.id !== c));
  }, []), o = ee((c) => {
    t((u) => [...u, c]);
  }, []), l = ee((c) => {
    t((u) => u.filter((f) => f.id !== c));
  }, []), d = G(
    () => ({
      addDialog: s,
      removeDialog: a,
      addDrawer: o,
      removeDrawer: l
    }),
    [s, a, o, l]
  );
  return /* @__PURE__ */ H(Il.Provider, { value: d, children: [
    n && typeof document < "u" && Ni(/* @__PURE__ */ h(Cg, { items: e }), document.body),
    r
  ] });
}, Pl = () => {
  const r = lt(Il);
  if (!r)
    throw new Error(
      "useDialogsAlikeLayoutContext must be used within a DialogsAlikeLayoutProvider"
    );
  return r;
}, xv = () => {
  const r = $t(), { addDialog: e, removeDialog: t } = Pl(), n = J(/* @__PURE__ */ new Map()), i = (c) => s({ ...c, variant: "default" }), s = (c) => new Promise((u) => {
    const f = c.id || on(), m = async (N, b) => {
      u(b ?? void 0), !N?.keepOpen && (n.current.delete(f), t(f));
    }, g = () => {
      m(void 0, void 0);
    }, v = {
      id: f,
      actions: c.actions,
      onCloseDialog: g,
      onClickAction: (N, b) => {
        m(N, b);
      }
    };
    let _;
    if (c.variant === "notification") {
      if (!c.type || c.type === "default")
        throw new Error("Notification dialog must have a type");
      _ = {
        ...c,
        ...v,
        variant: "notification",
        type: c.type
      };
    } else
      _ = {
        ...c,
        ...v,
        variant: "default",
        type: void 0
      };
    n.current.set(f, g), e(_);
  }), a = (c) => {
    const u = {
      type: c.type ?? "info",
      variant: "notification",
      description: c.msg,
      id: c.id || on(),
      title: c.title,
      content: /* @__PURE__ */ h(Wt, {}),
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
}, wv = () => {
  const { addDrawer: r, removeDrawer: e } = Pl(), t = J(/* @__PURE__ */ new Map()), n = (a) => i({ ...a, variant: "drawer" }), i = (a) => new Promise((o) => {
    const l = a.id || on(), d = async (f, m) => {
      o(m ?? void 0), !f?.keepOpen && (t.current.delete(l), e(l));
    }, c = () => {
      d(void 0, void 0);
    }, u = {
      ...a,
      id: l,
      onCloseDialog: c,
      onClickAction: (f, m) => {
        d(f, m);
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
}, Eg = gt(
  null
), Sg = ({ children: r, fullScreen: e = !0 }) => {
  const t = J(null), [n, i] = Q(t.current);
  return Oc(() => {
    i(t.current);
  }, []), /* @__PURE__ */ h(Eg.Provider, { value: { element: n }, children: /* @__PURE__ */ h(
    "div",
    {
      ref: t,
      id: "f0-layout",
      className: ie({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: r
    }
  ) });
}, Dg = ({
  children: r
}) => /* @__PURE__ */ h(Id, { reducedMotion: "user", children: r }), _v = ({
  children: r,
  layout: e,
  link: t,
  privacyModeInitiallyEnabled: n,
  image: i,
  i18n: s,
  l10n: a,
  isDev: o = !1,
  dataCollectionStorageHandler: l,
  showExperimentalWarnings: d = !1,
  renderDataTestIdAttribute: c = !1
}) => /* @__PURE__ */ h(Dg, { children: /* @__PURE__ */ h(
  Sc,
  {
    isDev: o,
    showExperimentalWarnings: d,
    renderDataTestIdAttribute: c,
    children: /* @__PURE__ */ h(Dc, { ...a, children: /* @__PURE__ */ h(Nc, { ...s, children: /* @__PURE__ */ h(Rc, { ...t, children: /* @__PURE__ */ h(Sg, { ...e, children: /* @__PURE__ */ h(Ac, { children: /* @__PURE__ */ h(
      Md,
      {
        initiallyEnabled: n,
        children: /* @__PURE__ */ h(Tc, { ...i, children: /* @__PURE__ */ h(
          Ld,
          {
            handler: l,
            children: /* @__PURE__ */ h(kg, { children: r })
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), da = (r) => `datacollection-${r}`, Cv = {
  get: async (r) => JSON.parse(
    localStorage.getItem(da(r)) ?? "{}"
  ),
  set: async (r, e) => {
    localStorage.setItem(da(r), JSON.stringify(e));
  }
};
export {
  Sv as A,
  db as AiChatTranslationsProvider,
  Bg as AreaChart,
  Dv as Await,
  Hg as BarChart,
  Nv as Blockquote,
  Vg as CategoryBarChart,
  Rv as ChatSpinner,
  Ug as ComboChart,
  Lg as Dashboard,
  $y as DndProvider,
  Av as Em,
  Tv as EmojiImage,
  Ov as F0ActionItem,
  Mv as F0AiChat,
  Lv as F0AiChatProvider,
  Iv as F0AiChatTextArea,
  Pv as F0AiCollapsibleMessage,
  zv as F0AiFullscreenChat,
  sv as F0Alert,
  ub as F0AuraVoiceAnimation,
  Fv as F0Avatar,
  Ia as F0AvatarAlert,
  Bv as F0AvatarCompany,
  Wy as F0AvatarDate,
  Hv as F0AvatarEmoji,
  pc as F0AvatarFile,
  Yl as F0AvatarIcon,
  Gy as F0AvatarList,
  _a as F0AvatarModule,
  Vv as F0AvatarPerson,
  jv as F0AvatarTeam,
  Zg as F0BigNumber,
  qg as F0Box,
  Ge as F0Button,
  $v as F0ButtonDropdown,
  Wv as F0ButtonToggle,
  Uy as F0Card,
  dc as F0Checkbox,
  nv as F0ChipList,
  Pa as F0DatePicker,
  Gv as F0Dialog,
  Uv as F0DialogAlikeContext,
  Zv as F0DialogAlikeProvider,
  qv as F0DialogContext,
  Kv as F0DialogProvider,
  av as F0Drawer,
  Xv as F0EventCatcherProvider,
  ov as F0FilterPickerContent,
  fv as F0Form,
  pv as F0GridStack,
  fb as F0HILActionConfirmation,
  hv as F0Heading,
  Vr as F0Icon,
  Ql as F0Link,
  Yv as F0MessageSources,
  Jv as F0OneIcon,
  Qv as F0OneSwitch,
  _v as F0Provider,
  ar as F0Select,
  gv as F0TableOfContentPopover,
  Zy as F0TagAlert,
  wd as F0TagBalance,
  qy as F0TagCompany,
  ey as F0TagDot,
  Ky as F0TagList,
  Xy as F0TagPerson,
  yc as F0TagRaw,
  Ad as F0TagStatus,
  Yy as F0TagTeam,
  ou as F0Text,
  ty as F0Thinking,
  ry as FullscreenChatContext,
  ny as GROUP_ID_SYMBOL,
  iy as H1,
  sy as H2,
  ay as H3,
  Fg as HomeLayout,
  oy as Hr,
  ly as Image,
  Ig as Layout,
  cy as Li,
  jg as LineChart,
  dy as Ol,
  uy as OneFilterPicker,
  fy as P,
  $g as PieChart,
  hy as Pre,
  Md as PrivacyModeProvider,
  pg as ProductBlankslate,
  Jy as ProductCard,
  vv as ProductModal,
  bg as ProductWidget,
  Gg as ProgressBarChart,
  Pg as StandardLayout,
  my as Strong,
  py as Table,
  mv as Tag,
  Qy as TagCounter,
  gy as Td,
  vy as Th,
  zg as TwoColumnLayout,
  yy as Ul,
  Fa as UpsellRequestResponseDialog,
  yv as UpsellingBanner,
  Ba as UpsellingButton,
  bv as UpsellingPopover,
  Wg as VerticalBarChart,
  hb as actionItemStatuses,
  mb as aiTranslations,
  Mg as avatarVariants,
  by as buildTranslations,
  Jg as buttonDropdownSizes,
  Yg as buttonDropdownVariants,
  Xg as buttonSizes,
  Qg as buttonToggleSizes,
  ev as buttonToggleVariants,
  Kg as buttonVariants,
  eb as cardImageFits,
  tb as cardImageSizes,
  rb as createAtlaskitDriver,
  xy as createDataSourceDefinition,
  ru as createPageLayoutBlock,
  nu as createPageLayoutBlockGroup,
  Cv as dataCollectionLocalStorageHandler,
  iv as datepickerSizes,
  yb as defaultTranslations,
  wy as downloadTableAsExcel,
  Wn as evaluateRenderIf,
  Qe as experimental,
  lv as f0FormField,
  _y as f0MarkdownRenderers,
  Xt as generateAnchorId,
  Cy as getAnimationVariants,
  ky as getDataSourcePaginationType,
  Ey as getEmojiLabel,
  Qi as getF0Config,
  dv as getSchemaDefinition,
  cv as hasF0Config,
  Om as inferFieldType,
  Sy as isInfiniteScrollPagination,
  Dy as isPageBasedPagination,
  ye as isZodType,
  tv as linkVariants,
  Ny as modules,
  pb as oneIconSizes,
  nb as predefinedPresets,
  ib as selectSizes,
  rv as tagDotColors,
  vt as unwrapZodSchema,
  Ry as useAiChat,
  gb as useAiChatTranslations,
  Ay as useData,
  Ty as useDataSource,
  Oy as useDefaultCopilotActions,
  xv as useDialog,
  sb as useDndEvents,
  ab as useDraggable,
  wv as useDrawer,
  ob as useDroppableList,
  My as useEmojiConfetti,
  Ly as useF0Dialog,
  Iy as useF0DialogAlikeContext,
  uv as useF0Form,
  Py as useGroups,
  zy as useMessageSourcesAction,
  Fy as useOrchestratorThinkingAction,
  lb as usePrivacyMode,
  By as useReducedMotion,
  Rl as useSchemaDefinition,
  Hy as useSelectable,
  Vy as useXRay,
  he as withDataTestId
};
