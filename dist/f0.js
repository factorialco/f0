import { aa as ye, ab as tt, a6 as le, a7 as kt, ac as ho, ad as Ai, ae as Ti, af as ln, ag as ql, ah as mo, ai as wt, u as Tt, aj as Gr, ak as Kl, al as Xl, am as Yl, an as Jl, ao as lt, ap as Ql, aq as ec, ar as po, as as tc, at as go, au as vo, av as Ln, aw as yo, ax as bo, ay as cn, az as xo, aA as rc, aB as nc, aC as ic, aD as sc, aE as oc, a8 as Ke, aF as cs, aG as ac, aH as lc, aI as cc, aJ as dc, aK as wo, aL as uc, aM as fc, aN as hc, aO as _o, aP as mc, aQ as lr, aR as pc, aS as gc, aT as vc, aU as yc, aV as Oi, aW as bc, aX as Co, aY as xc, a9 as wc, aZ as _c, a_ as Cc, a$ as Ec, b0 as Sc, b1 as Eo, b2 as kc, b3 as Dc, b4 as Nc, b5 as Rc, b6 as Ac, b7 as Tc, b8 as Oc, b9 as Mc, ba as Fc, bb as Lc, bc as Ic, I as Pc, bd as zc, be as Bc, bf as Vc, bg as Hc } from "./F0AiChat-C037KOv0.js";
import { A as ey, bv as ty, B as ry, C as ny, E as iy, bK as sy, h as oy, F as ay, a as ly, x as cy, i as dy, b as uy, bh as fy, bi as hy, bj as my, bl as py, bm as gy, bn as vy, bo as yy, bp as by, bq as xy, br as wy, bG as _y, s as Cy, t as Ey, v as Sy, bu as ky, w as Dy, c as Ny, bw as Ry, n as Ay, o as Ty, p as Oy, H as My, k as Fy, L as Ly, O as Iy, bt as Py, q as zy, P as By, S as Vy, T as Hy, l as jy, m as $y, U as Wy, bH as Gy, bB as Uy, r as Zy, j as qy, bE as Ky, bA as Xy, bL as Yy, bz as Jy, by as Qy, bk as eb, d as tb, bx as rb, bC as nb, e as ib, bM as sb, bs as ob, bD as ab, g as lb, f as cb, bJ as db, bF as ub, bI as fb } from "./F0AiChat-C037KOv0.js";
import { jsx as f, jsxs as W, Fragment as Yt } from "react/jsx-runtime";
import * as ct from "react";
import q, { forwardRef as Ge, useRef as Y, useImperativeHandle as jc, Children as dn, createContext as vt, useContext as dt, useState as re, useMemo as H, useEffect as ie, useCallback as K, useLayoutEffect as fi, createElement as ar, isValidElement as So, Fragment as $c, memo as Wc, useReducer as Gc, cloneElement as Uc, PureComponent as Zc, useId as qc } from "react";
import { createPortal as ko, unstable_batchedUpdates as en, flushSync as Kc } from "react-dom";
import { L as Do, C as Xc, i as No, D as Yc, S as ds, a as Jc, f as Jn, b as Cr, c as Qc, A as ed, d as tn, e as Ro, E as td, g as sn, h as rd, j as nd, k as id, l as ir, m as Ao, u as sd, G as od, n as ad, o as us, p as ld, q as To, r as cd, B as Oo, X as Mo, Y as hi, s as dd, t as Fo, v as ud, w as fd, x as hd, y as md, z as pd, F as gd, H as vd, I as yd, J as fs, K as bd, M as Rr, N as Qn, O as xd, P as wd, Q as _d, R as Cd, T as Ed, U as Sd, V as kd, W as Dd, Z as Nd, _ as Rd, $ as Ad, a0 as hs, a1 as Td, a2 as Od, a3 as mi, a4 as Lo, a5 as Md, a6 as Fd, a7 as Ld, a8 as Id, a9 as Io, aa as Mi, ab as Pd, ac as zd, ad as Bd, ae as Vd, af as Hd, ag as Po, ah as zo, ai as jd, aj as $d, ak as Wd, al as Gd } from "./DataCollectionStorageProvider-C9X4oJL2.js";
import { aB as mb, am as pb, an as gb, aq as vb, at as yb, au as bb, av as xb, ax as wb, ay as _b, az as Cb, aw as Eb, ao as Sb, ap as kb, aA as Db, ar as Nb, as as Rb, aC as Ab, aD as Tb, aE as Ob, aF as Mb } from "./DataCollectionStorageProvider-C9X4oJL2.js";
import { A as Lb, F as Ib, c as Pb, b as zb, a as Bb, o as Vb, u as Hb } from "./F0HILActionConfirmation-Ba1wbwZK.js";
import { defaultTranslations as $b } from "./i18n-provider-defaults.js";
import './f0.css';const Ud = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Zd = Ge(function({ widgets: e, children: t }, n) {
  const i = Y(null);
  jc(n, () => i.current);
  const s = dn.toArray(e).filter((o) => !!o).map((o, a) => /* @__PURE__ */ f("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: o }, a));
  return /* @__PURE__ */ f(Do, { layout: "home", children: /* @__PURE__ */ W("div", { ref: i, className: "@container", children: [
    /* @__PURE__ */ W("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ f(Xc, { columns: Ud, showArrows: !1, children: s }),
      /* @__PURE__ */ f("main", { children: t })
    ] }),
    /* @__PURE__ */ W("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ f("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: s.slice(0, 3) }),
      /* @__PURE__ */ f("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col gap-5", children: s.slice(3) })
    ] })
  ] }) });
}), qd = kt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Bo = q.forwardRef(({ children: r, variant: e, className: t, ...n }, i) => /* @__PURE__ */ f(Do, { layout: "standard", children: /* @__PURE__ */ f(
  "section",
  {
    ref: i,
    className: le("relative flex-1 overflow-auto", t),
    ...n,
    children: /* @__PURE__ */ f("div", { className: le(qd({ variant: e })), children: r })
  }
) }));
Bo.displayName = "StandardLayout";
const Kd = ye(
  tt(
    {
      name: "StandardLayout",
      type: "layout"
    },
    Bo
  )
), Xd = Ge(
  function({
    children: e,
    sideContent: t,
    mainColumnPosition: n = "left",
    sticky: i = !1
  }, s) {
    return /* @__PURE__ */ f("div", { ref: s, className: "h-full", children: /* @__PURE__ */ W(
      "div",
      {
        className: le(
          "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
          "flex-col",
          "overflow-y-auto",
          i && "md:sticky md:top-0 md:max-h-full"
        ),
        children: [
          /* @__PURE__ */ f(
            "main",
            {
              className: le(
                "sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6",
                i ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full",
                n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ f(
            Jd,
            {
              sticky: i,
              className: le(
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
), Yd = ye(
  tt(
    {
      name: "TwoColumnLayout",
      type: "layout"
    },
    Xd
  )
), Jd = ({
  children: r,
  className: e
}) => /* @__PURE__ */ f(
  "aside",
  {
    className: le(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      e
    ),
    children: r
  }
), Vo = vt(null);
function Ho() {
  const r = dt(Vo);
  if (!r)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return r;
}
function Qd(r) {
  const { content: e, ...t } = r;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function sr(r) {
  const e = Qd(r);
  return r.subGridOpts?.children && (e.subGridOpts = {
    ...r.subGridOpts,
    children: r.subGridOpts.children.map(
      (t) => sr(t)
    )
  }), e;
}
const eu = [
  "noMove",
  "noResize",
  "locked",
  "w",
  "h",
  "x",
  "y"
], Lt = 200;
function tu(r) {
  const e = r.cloneNode(!0);
  return r.querySelectorAll("canvas").forEach((n) => {
    if (n.width > 0 && n.height > 0)
      try {
        const i = n.toDataURL("image/png"), s = e.querySelectorAll("canvas"), o = Array.from(
          r.querySelectorAll("canvas")
        ).indexOf(n), a = s[o];
        if (a && a.parentElement) {
          const l = document.createElement("img");
          l.src = i, l.style.width = `${n.width}px`, l.style.height = `${n.height}px`, l.style.display = "block", n.className && (l.className = n.className), n.id && (l.id = n.id), a.parentElement.replaceChild(l, a);
        }
      } catch (i) {
        console.warn("Failed to convert canvas to image:", i);
      }
  }), e.innerHTML;
}
function ru({
  children: r,
  options: e,
  onResizeStop: t,
  onChange: n,
  widgets: i
}) {
  const [s, o] = re(null), a = Y(null), l = Y(!1), c = H(() => ({
    ...e,
    children: (i || []).map((S) => sr(S))
  }), [e, i]), [d, u] = re(() => {
    const S = /* @__PURE__ */ new Map(), k = i || [], b = (x) => {
      x.id && x.content && S.set(x.id, x.content), x.subGridOpts?.children && x.subGridOpts.children.forEach((w) => {
        b(w);
      });
    };
    return k.forEach((x) => {
      b(x);
    }), S;
  }), h = Y(d);
  ie(() => {
    h.current = d;
  }, [d]);
  const [m, g] = re(() => {
    const S = /* @__PURE__ */ new Map(), k = i || [], b = (x) => {
      x.id && x._originalContent !== void 0 && S.set(x.id, x._originalContent), x.subGridOpts?.children && x.subGridOpts.children.forEach((w) => {
        b(w);
      });
    };
    return k.forEach((x) => {
      b(x);
    }), S;
  }), y = Y(m);
  ie(() => {
    y.current = m;
  }, [m]);
  const [v, A] = re(() => {
    const S = /* @__PURE__ */ new Map(), k = i || [], b = (x) => {
      if (x.id) {
        const w = sr(x);
        S.set(x.id, w);
      }
      x.subGridOpts?.children && x.subGridOpts.children.forEach((w) => {
        b(w);
      });
    };
    return k.forEach((x) => {
      b(x);
    }), S;
  });
  ho(() => {
    if (!s) return;
    const S = s.save();
    if (!Array.isArray(S))
      return;
    const k = S.map((F) => F.id), b = i || [], x = b.map((F) => F.id), w = b.filter(
      (F) => !k.includes(F.id)
    );
    w.length > 0 && (w.forEach((F) => {
      F.content && h.current.set(F.id, F.content), F._originalContent !== void 0 && y.current.set(F.id, F._originalContent);
    }), w.forEach((F) => {
      const T = sr(F);
      s.addWidget(T);
    }), A((F) => {
      const T = new Map(F);
      return w.forEach((D) => {
        const O = sr(D);
        T.set(D.id, O);
      }), T;
    }), u((F) => {
      const T = new Map(F);
      return w.forEach((D) => {
        D.content && T.set(D.id, D.content);
      }), T;
    }), g((F) => {
      const T = new Map(F);
      return w.forEach((D) => {
        D._originalContent !== void 0 && T.set(D.id, D._originalContent);
      }), T;
    }));
    const R = S.filter(
      (F) => !x.includes(F.id)
    );
    if (R.length > 0) {
      const F = R.map((T) => T.id).filter(Boolean);
      F.forEach((T) => {
        setTimeout(() => {
          h.current.delete(T), y.current.delete(T);
        }, Lt);
      }), R.forEach((T) => {
        const D = s.el.querySelector(
          `[gs-id="${T.id}"]`
        );
        D && setTimeout(() => {
          s.removeWidget(D, !0);
        }, Lt);
      }), A((T) => {
        const D = new Map(T);
        return F.forEach((O) => {
          setTimeout(() => {
            D.delete(O);
          }, Lt);
        }), D;
      }), u((T) => {
        const D = new Map(T);
        return F.forEach((O) => {
          if (D.get(O)) {
            const I = s.el.querySelector(
              `[gs-id="${O}"] .grid-stack-item-content`
            );
            let U = "";
            I && (U = tu(I)), D.set(
              O,
              /* @__PURE__ */ f(
                Ai.div,
                {
                  className: "h-full w-full",
                  initial: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  animate: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
                  exit: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
                  transition: {
                    opacity: {
                      duration: Lt / 1e3,
                      ease: [0.32, 0, 0.67, 0]
                    },
                    scale: {
                      duration: Lt / 1e3,
                      ease: [0.65, 0, 0.35, 1]
                    },
                    filter: {
                      duration: Lt / 1e3,
                      ease: "linear"
                    }
                  },
                  dangerouslySetInnerHTML: { __html: U }
                }
              )
            );
          }
          setTimeout(() => {
            D.delete(O);
          }, Lt);
        }), D;
      }), g((T) => {
        const D = new Map(T);
        return F.forEach((O) => {
          setTimeout(() => {
            D.delete(O);
          }, Lt);
        }), D;
      });
    }
    const z = b.filter(
      (F) => k.includes(F.id)
    );
    if (z.length > 0) {
      const F = [];
      z.forEach((T) => {
        const D = S.find(
          (G) => G.id === T.id
        );
        if (!D)
          return;
        const O = eu.filter(
          (G) => D[G] !== T[G]
        );
        if (O.length > 0) {
          const G = {}, I = ["w", "h", "x", "y"], U = ["noMove", "noResize", "locked"], j = O.filter(
            (ce) => I.includes(ce)
          ), ne = O.filter(
            (ce) => U.includes(ce)
          );
          if (j.length > 0 && ne.length > 0 && j.length + ne.length === O.length ? ne.forEach((ce) => {
            const he = T[ce];
            he !== void 0 && (G[ce] = he);
          }) : O.forEach((ce) => {
            const he = T[ce];
            he !== void 0 && (G[ce] = he);
          }), Object.keys(G).length > 0) {
            const ce = s.el.querySelector(
              `[gs-id="${T.id}"]`
            );
            ce && F.push({
              id: T.id,
              element: ce,
              updateOptions: G
            });
          }
        }
      }), z.forEach((T) => {
        T.content && h.current.set(T.id, T.content), T._originalContent !== void 0 && y.current.set(T.id, T._originalContent);
      }), F.forEach(({ element: T, updateOptions: D }) => {
        try {
          s.update(T, D);
        } catch (O) {
          console.warn("Error updating widget:", O);
        }
      }), A((T) => {
        const D = new Map(T);
        return z.forEach((O) => {
          const G = sr(O);
          D.set(O.id, G);
        }), D;
      }), u((T) => {
        const D = new Map(T);
        return z.forEach((O) => {
          O.content && D.set(O.id, O.content);
        }), D;
      }), g((T) => {
        const D = new Map(T);
        return z.forEach((O) => {
          O._originalContent !== void 0 && D.set(O.id, O._originalContent);
        }), D;
      });
    }
    l.current || (l.current = !0);
  }, [i]), ie(() => {
    if (!s || !c.handle) return;
    s.opts && (s.opts.handle = c.handle);
    const S = setTimeout(() => {
      if (s && s.el && c.handle && s.el.querySelectorAll(
        c.handle
      ).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(S);
  }, [s, c.handle, c.children]);
  const _ = K(() => {
    if (!s)
      return;
    const S = s.save();
    if (Array.isArray(S)) {
      const k = S.map((b) => {
        const x = b.id;
        if (!x) return null;
        const w = h.current.get(x), R = y.current.get(x), z = b;
        return {
          ...b,
          id: x,
          w: b.w ?? 1,
          h: b.h ?? 1,
          x: b.x ?? 0,
          y: b.y ?? 0,
          // Preserve meta if it exists (GridStack preserves custom properties)
          meta: z.meta,
          // Use _originalContent from originalContentMapRef
          _originalContent: R,
          // Use React content from reactContentMapRef
          content: w ?? /* @__PURE__ */ f("div", { children: "No content" })
        };
      }).filter((b) => b !== null);
      n?.(k);
    }
  }, [s]);
  return ie(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const S = (k, b) => {
      t?.(k, b);
    };
    try {
      s.on("resizestop", S), s.on("change added removed", _);
    } catch (k) {
      console.error("Error attaching GridStack event listeners:", k);
      return;
    }
    return () => {
      const k = a.current;
      if (k && k.el)
        try {
          k.off("resizestop"), k.off("change added removed");
        } catch (b) {
          console.warn("Error cleaning up GridStack event listeners:", b);
        }
    };
  }, [s, t, _]), ie(() => {
    a.current = s;
  }, [s]), ie(() => {
    s && s.el && s.el.parentElement && l.current && _();
  }, [s]), /* @__PURE__ */ f(
    Vo.Provider,
    {
      value: {
        options: c,
        gridStack: s,
        _gridStack: {
          value: s,
          set: o
        },
        _rawWidgetMetaMap: {
          value: v,
          set: A
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
const jo = vt(null);
function nu() {
  const r = dt(jo);
  if (!r)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return r;
}
const iu = vt(null);
function su() {
  const { _reactContentMap: r } = Ho(), { getWidgetContainer: e } = nu();
  return /* @__PURE__ */ f(Yt, { children: Array.from(r.value.entries()).map(([t, n]) => {
    const i = e(t);
    return i ? /* @__PURE__ */ f(iu.Provider, { value: { widget: { id: t } }, children: n && ko(n, i) }, t) : (console.error(`Widget container not found for widget ${t}`), null);
  }) });
}
function ou(r, e, t, n, i) {
  const s = (...o) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + i + " and has been replaced with `" + n + "`. It will be **removed** in a future release"), e.apply(r, o));
  return s.prototype = e.prototype, s;
}
class E {
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
    return E.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
        e[i] === null || e[i] === void 0 ? e[i] = n[i] : typeof n[i] == "object" && typeof e[i] == "object" && E.defaults(e[i], n[i]);
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
        n[0] === "_" || i === s ? delete e[n] : i && typeof i == "object" && s !== void 0 && (E.removeInternalAndSame(i, s), Object.keys(i).length || delete e[n]);
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : E.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, n) {
    const i = E.getScrollElement(e);
    if (!i)
      return;
    const s = e.getBoundingClientRect(), o = i.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(o.bottom, a), c = s.top - Math.max(o.top, 0), d = i.scrollTop;
    c < 0 && n < 0 ? e.offsetHeight > o.height ? i.scrollTop += n : i.scrollTop += Math.abs(c) > Math.abs(n) ? n : c : l > 0 && n > 0 && (e.offsetHeight > o.height ? i.scrollTop += n : i.scrollTop += l > n ? n : l), t.top += i.scrollTop - d;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, n) {
    const i = E.getScrollElement(t), s = i.clientHeight, o = i === E.getScrollElement() ? 0 : i.getBoundingClientRect().top, a = e.clientY - o, l = a < n, c = a > s - n;
    l ? i.scrollBy({ behavior: "smooth", top: a - n }) : c && i.scrollBy({ behavior: "smooth", top: n - (s - a) });
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], n = E.clone(e);
    for (const i in n)
      n.hasOwnProperty(i) && typeof n[i] == "object" && i.substring(0, 2) !== "__" && !t.find((s) => s === i) && (n[i] = E.cloneDeep(e[i]));
    return n;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let n;
    typeof t == "string" ? n = E.getElement(t) : n = t, n && n.appendChild(e);
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
    E.addElStyles(t, {
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
class Rt {
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
      let c;
      if (n.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(n, { ...n, y: e.y }, e) || !this.collide(n, { ...n, y: t.y - n.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const d = { ...t, y: n.y + n.h, ...a };
        c = this._loading && E.samePos(e, d) ? !0 : this.moveNode(e, d), (n.locked || this._loading) && c ? E.copyPos(t, e) : !n.locked && c && i.pack && (this._packNodes(), t.y = n.y + n.h, E.copyPos(e, t)), o = o || c;
      } else
        c = this.moveNode(n, { ...n, y: t.y + t.h, skip: e, ...a });
      if (!c)
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
    return this.nodes.find((o) => o._id !== i && o._id !== s && E.isIntercepted(o, t));
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
    return this.nodes.filter((o) => o._id !== i && o._id !== s && E.isIntercepted(o, t));
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
      const c = l._rect;
      let d = Number.MAX_VALUE, u = Number.MAX_VALUE;
      i.y < c.y ? d = (s.y + s.h - c.y) / c.h : i.y + i.h > c.y + c.h && (d = (c.y + c.h - s.y) / c.h), i.x < c.x ? u = (s.x + s.w - c.x) / c.w : i.x + i.w > c.x + c.w && (u = (c.x + c.w - s.x) / c.w);
      const h = Math.min(u, d);
      h > a && (a = h, o = l);
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
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (i = E.isTouching(e, t)))
      return n();
    if (i !== !1) {
      if (e.w === t.w && e.x === t.x && (i || (i = E.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return n();
      }
      if (i !== !1) {
        if (e.h === t.h && e.y === t.y && (i || (i = E.isTouching(e, t)))) {
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
      let c;
      o.locked || (o.autoPosition = !0, e === "list" && a && (c = l[a - 1])), this.addNode(o, !1, c);
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
    return this.nodes = E.sort(this.nodes, e), this;
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
    e._id = e._id ?? Rt._idSeq++;
    const n = e.id;
    if (n) {
      let s = 1;
      for (; this.nodes.find((o) => o.id === e.id && o !== e); )
        e.id = n + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const i = { x: 0, y: 0, w: 1, h: 1 };
    return E.defaults(e, i), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, E.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = i.x, e.autoPosition = !0), isNaN(e.y) && (e.y = i.y, e.autoPosition = !0), isNaN(e.w) && (e.w = i.w), isNaN(e.h) && (e.h = i.h), this.nodeBoundFix(e, t), e;
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
    const n = e._orig || E.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), E.samePos(e, n) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !E.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = E.copyPos({}, e), delete e._dirty;
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
      !e._orig || E.samePos(e, e._orig) || (E.copyPos(e, e._orig), e._dirty = !0);
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
      const l = a % n, c = Math.floor(a / n);
      if (l + e.w > n)
        continue;
      const d = { x: l, y: c, w: e.w, h: e.h };
      t.find((u) => E.isIntercepted(d, u)) || ((e.x !== l || e.y !== c) && (e._dirty = !0), e.x = l, e.y = c, delete e.autoPosition, o = !0);
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
    const i = new Rt({
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
      a && (E.copyPos(a, o), a._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new Rt({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((i) => ({ ...i }))
    }), n = { ...e };
    return this.cleanupNode(n), delete n.el, delete n._id, delete n.content, delete n.grid, t.addNode(n), t.getRow() <= this.maxRow ? (e._willFitPos = E.copyPos({}, n), !0) : !1;
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
    const i = e.w !== t.w || e.h !== t.h, s = E.copyPos({}, e, !0);
    if (E.copyPos(s, t), this.nodeBoundFix(s, i), E.copyPos(t, s), !t.forceCollide && E.samePos(e, t))
      return !1;
    const o = E.copyPos({}, e), a = this.collideAll(e, s, t.skip);
    let l = !0;
    if (a.length) {
      const c = e._moving && !t.nested;
      let d = c ? this.directionCollideCoverage(e, t, a) : a[0];
      if (c && d && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = E.areaIntercept(t.rect, d._rect), h = E.area(t.rect), m = E.area(d._rect);
        u / (h < m ? h : m) > 0.8 && (d.grid.makeSubGrid(d.el, void 0, e), d = void 0);
      }
      d ? l = !this._fixCollisions(e, s, d, t) : (l = !1, n && delete t.pack);
    }
    return l && !E.samePos(e, s) && (e._dirty = !0, E.copyPos(e, s)), t.pack && this._packNodes()._notify(), !E.samePos(e, o);
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
      const l = s?.find((d) => d._id === a._id), c = { ...a, ...l || {} };
      E.removeInternalForSave(c, !e), t && t(a, c), o.push(c);
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
    let s = [], o = i ? this.nodes : E.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const a = this._layouts[t] || [], l = this._layouts.length - 1;
      !a.length && e !== l && this._layouts[l]?.length && (e = l, this._layouts[l].forEach((c) => {
        const d = o.find((u) => u._id === c._id);
        d && (!i && !c.autoPosition && (d.x = c.x ?? d.x, d.y = c.y ?? d.y), d.w = c.w ?? d.w, (c.x == null || c.y === void 0) && (d.autoPosition = !0));
      })), a.forEach((c) => {
        const d = o.findIndex((u) => u._id === c._id);
        if (d !== -1) {
          const u = o[d];
          if (i) {
            u.w = c.w;
            return;
          }
          (c.autoPosition || isNaN(c.x) || isNaN(c.y)) && this.findEmptyPosition(c, s), c.autoPosition || (u.x = c.x ?? u.x, u.y = c.y ?? u.y, u.w = c.w ?? u.w, s.push(u)), o.splice(d, 1);
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
          const a = i || n === "none" ? 1 : t / e, l = n === "move" || n === "moveScale", c = n === "scale" || n === "moveScale";
          o.forEach((d) => {
            d.x = t === 1 ? 0 : l ? Math.round(d.x * a) : Math.min(d.x, t - 1), d.w = t === 1 || e === 1 ? 1 : c ? Math.round(d.w * a) || 1 : Math.min(d.w, t), s.push(d);
          }), o = [];
        }
      s = E.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((a) => {
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
        s._id = a?._id ?? Rt._idSeq++;
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
    e._id = e._id ?? Rt._idSeq++;
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
Rt._idSeq = 0;
const Qe = {
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
class ae {
}
const mt = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class _t {
}
function un(r, e) {
  r.touches.length > 1 || (r.cancelable && r.preventDefault(), E.simulateMouseEvent(r.changedTouches[0], e));
}
function $o(r, e) {
  r.cancelable && r.preventDefault(), E.simulateMouseEvent(r, e);
}
function fn(r) {
  _t.touchHandled || (_t.touchHandled = !0, un(r, "mousedown"));
}
function hn(r) {
  _t.touchHandled && un(r, "mousemove");
}
function mn(r) {
  if (!_t.touchHandled)
    return;
  _t.pointerLeaveTimeout && (window.clearTimeout(_t.pointerLeaveTimeout), delete _t.pointerLeaveTimeout);
  const e = !!ae.dragElement;
  un(r, "mouseup"), e || un(r, "click"), _t.touchHandled = !1;
}
function pn(r) {
  r.pointerType !== "mouse" && r.target.releasePointerCapture(r.pointerId);
}
function ms(r) {
  ae.dragElement && r.pointerType !== "mouse" && $o(r, "mouseenter");
}
function ps(r) {
  ae.dragElement && r.pointerType !== "mouse" && (_t.pointerLeaveTimeout = window.setTimeout(() => {
    delete _t.pointerLeaveTimeout, $o(r, "mouseleave");
  }, 10));
}
class In {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${In.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), mt && (this.el.addEventListener("touchstart", fn), this.el.addEventListener("pointerdown", pn)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), mt && (this.el.removeEventListener("touchstart", fn), this.el.removeEventListener("pointerdown", pn)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), mt && (this.el.addEventListener("touchmove", hn), this.el.addEventListener("touchend", mn)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), mt && (this.el.removeEventListener("touchmove", hn), this.el.removeEventListener("touchend", mn)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
In.prefix = "ui-resizable-";
class Fi {
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
class Pr extends Fi {
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
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), ae.overResizeElement === this && delete ae.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    ae.overResizeElement || ae.dragElement || (ae.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    ae.overResizeElement === this && (delete ae.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new In(this.el, e, {
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
    this.sizeToContent = E.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = E.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = E.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const n = E.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(n, this._ui()), this.triggerEvent("resize", n), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = E.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = Pr._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = E.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Pr._originStyleProp.forEach((e, t) => {
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
    const c = this._constrainSize(i.width, i.height, a, l);
    return Math.round(i.width) !== Math.round(c.width) && (t.indexOf("w") > -1 && (i.left += i.width - c.width), i.width = c.width), Math.round(i.height) !== Math.round(c.height) && (t.indexOf("n") > -1 && (i.top += i.height - c.height), i.height = c.height), i;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, n, i) {
    const s = this.option, o = (n ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, a = s.minWidth / this.rectScale.x || e, l = (i ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, c = s.minHeight / this.rectScale.y || t, d = Math.min(o, Math.max(a, e)), u = Math.min(l, Math.max(c, t));
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
Pr._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const au = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class zr extends Fi {
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
      e.addEventListener("mousedown", this._mouseDown), mt && (e.addEventListener("touchstart", fn), e.addEventListener("pointerdown", pn));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), mt && (t.removeEventListener("touchstart", fn), t.removeEventListener("pointerdown", pn));
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
    if (!ae.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(au) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete ae.dragElement, delete ae.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), mt && (e.currentTarget.addEventListener("touchmove", hn), e.currentTarget.addEventListener("touchend", mn)), e.preventDefault(), document.activeElement && document.activeElement.blur(), ae.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = E.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), ae.pauseDrag) {
        const n = Number.isInteger(ae.pauseDrag) ? ae.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), n);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, ae.dragElement = this;
      const n = this.el.gridstackNode?.grid;
      n ? ae.dropElement = n.el.ddElement.ddDroppable : delete ae.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = E.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const i = E.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(i, this.ui()), this.triggerEvent("dragstart", i), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), mt && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", hn, !0), e.currentTarget.removeEventListener("touchend", mn, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), ae.dropElement?.el === this.el.parentElement && delete ae.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = E.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), ae.dropElement && ae.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete ae.dragElement, delete ae.dropElement, delete ae.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, n = t?.grid || ae.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), n?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && n && (e.key === "r" || e.key === "R")) {
      if (!E.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, n.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", E.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = E.cloneNode(this.el)), e.parentElement || E.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = zr.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", zr.originStyleProp.forEach((i) => t.style[i] = this.dragElementOriginStyle[i] || null), setTimeout(() => t.style.transition = n, 50);
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
zr.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class lu extends Fi {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), mt && (this.el.addEventListener("pointerenter", ms), this.el.addEventListener("pointerleave", ps)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), mt && (this.el.removeEventListener("pointerenter", ms), this.el.removeEventListener("pointerleave", ps)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!ae.dragElement || !this._canDrop(ae.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), ae.dropElement && ae.dropElement !== this && ae.dropElement._mouseLeave(e, !0), ae.dropElement = this;
    const t = E.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(ae.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!ae.dragElement || ae.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = E.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(n, this._ui(ae.dragElement)), this.triggerEvent("dropout", n), ae.dropElement === this && (delete ae.dropElement, !t)) {
      let i, s = this.el.parentElement;
      for (; !i && s; )
        i = s.ddElement?.ddDroppable, s = s.parentElement;
      i && i._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = E.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(ae.dragElement)), this.triggerEvent("drop", t);
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
class Li {
  static init(e) {
    return e.ddElement || (e.ddElement = new Li(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new zr(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Pr(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new lu(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class cu {
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
        const c = !a.opts.alwaysShowResizeHandle;
        s.setupResizable({
          ...a.opts.resizable,
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
      n(s, ae.dragElement ? ae.dragElement.el : s.target, ae.dragElement ? ae.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", i = E.getElements(e);
    return i.length ? i.map((o) => o.ddElement || (n ? Li.init(o) : null)).filter((o) => o) : [];
  }
}
const $e = new cu();
class te {
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
    const n = te.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new te(n, E.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (te.getGridElements(t).forEach((i) => {
      i.gridstack || (i.gridstack = new te(i, E.cloneDeep(e))), n.push(i.gridstack);
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
    return (!e.classList.contains("grid-stack") || te.addRemoveCB) && (te.addRemoveCB ? n = te.addRemoveCB(e, t, !0, !0) : n = E.createDiv(["grid-stack", t.class], e)), te.init(t, n);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    te.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = E.createDiv([this.opts.placeholderClass, Qe.itemClass, this.opts.itemClass]);
      const e = E.createDiv(["placeholder-content"], this._placeholder);
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
    const n = E.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const i = t.columnOpts;
    if (i) {
      const c = i.breakpoints;
      !i.columnWidth && !c?.length ? delete t.columnOpts : (i.columnMax = i.columnMax || 12, c?.length > 1 && c.sort((d, u) => (u.w || 0) - (d.w || 0)));
    }
    const s = {
      ...E.cloneDeep(Qe),
      column: E.toNumber(e.getAttribute("gs-column")) || Qe.column,
      minRow: n || E.toNumber(e.getAttribute("gs-min-row")) || Qe.minRow,
      maxRow: n || E.toNumber(e.getAttribute("gs-max-row")) || Qe.maxRow,
      staticGrid: E.toBool(e.getAttribute("gs-static")) || Qe.staticGrid,
      sizeToContent: E.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Qe.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Qe.removableOptions.accept,
        decline: Qe.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = E.toBool(e.getAttribute("gs-animate"))), t = E.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const a = this.el.closest("." + Qe.itemClass)?.gridstackNode;
    if (a && (a.subGrid = this, this.parentGridNode = a, this.el.classList.add("grid-stack-nested"), a.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Qe.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const c = t.cellHeight;
      delete t.cellHeight, this.cellHeight(c);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = mt), this._setStaticClass();
    const l = t.engineClass || te.engineClass || Rt;
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
    this.setAnimation(), t.subGridDynamic && !ae.pauseDrag && (ae.pauseDrag = !0), t.draggable?.pause !== void 0 && (ae.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (n.grid = this, n.el ? t = n.el : te.addRemoveCB ? t = te.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
      return;
    if (n = t.gridstackNode, n && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === n._id))
      return t;
    const i = this._readAttr(t);
    return E.defaults(e, i), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = E.createDiv(["grid-stack-item", this.opts.itemClass]), n = E.createDiv(["grid-stack-item-content"], t);
    return E.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([i]) => {
      i.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, te.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : te.renderCB(n, e), t;
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
    t = E.cloneDeep({
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
    let c = s.el.querySelector(".grid-stack-item-content"), d, u;
    if (i && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, E.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), te.addRemoveCB ? d = te.addRemoveCB(this.el, u, !0, !1) : (d = E.createDiv(["grid-stack-item"]), d.appendChild(c), c = E.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const m = l ? t.column : s.w, g = s.h + n.h, y = s.el.style;
      y.transition = "none", this.update(s.el, { w: m, h: g }), setTimeout(() => y.transition = null);
    }
    const h = s.subGrid = te.addGrid(c, t);
    return n?._moving && (h._isTemp = !0), l && (h._autoColumn = !0), i && h.makeWidget(d, u), n && (n._moving ? window.setTimeout(() => E.simulateMouseEvent(n._event, "mouseenter", h.el), 0) : h.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((n) => {
      n.x += this.parentGridNode.x, n.y += this.parentGridNode.y, t.makeWidget(n.el, n);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => E.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, n = te.saveCB, i) {
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
      const o = E.cloneDeep(this.opts);
      o.marginBottom === o.marginTop && o.marginRight === o.marginLeft && o.marginTop === o.marginRight && (o.margin = o.marginTop, delete o.marginTop, delete o.marginRight, delete o.marginBottom, delete o.marginLeft), o.rtl === (this.el.style.direction === "rtl") && (o.rtl = "auto"), this._isAutoCellHeight && (o.cellHeight = "auto"), this._autoColumn && (o.column = "auto");
      const a = o._alwaysShowResizeHandle;
      return delete o._alwaysShowResizeHandle, a !== void 0 ? o.alwaysShowResizeHandle = a : delete o.alwaysShowResizeHandle, E.removeInternalAndSame(o, Qe), o.children = s, o;
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
  load(e, t = te.addRemoveCB || !0) {
    e = E.cloneDeep(e);
    const n = this.getColumn();
    e.forEach((d) => {
      d.w = d.w || d.minW || 1, d.h = d.h || d.minH || 1;
    }), e = E.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let i = 0;
    e.forEach((d) => {
      i = Math.max(i, (d.x || 0) + d.w);
    }), i > this.engine.defaultColumn && (this.engine.defaultColumn = i), i > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(i, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, i, !0));
    const s = te.addRemoveCB;
    typeof t == "function" && (te.addRemoveCB = t);
    const o = [];
    this.batchUpdate();
    const a = !this.engine.nodes.length, l = a && this.opts.animate;
    l && this.setAnimation(!1), !a && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      E.find(e, u.id) || (te.addRemoveCB && te.addRemoveCB(this.el, u, !1, !1), o.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const c = [];
    return this.engine.nodes = this.engine.nodes.filter((d) => E.find(e, d.id) ? (c.push(d), !1) : !0), e.forEach((d) => {
      const u = E.find(c, d.id);
      if (u) {
        if (E.shouldSizeToContent(u) && (d.h = u.h), this.engine.nodeBoundFix(d), (d.autoPosition || d.x === void 0 || d.y === void 0) && (d.w = d.w || u.w, d.h = d.h || u.h, this.engine.findEmptyPosition(d)), this.engine.nodes.push(u), E.samePos(u, d) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...d, forceCollide: !0 }), E.copyPos(d, u)), this.update(u.el, d), d.subGridOpts?.children) {
          const h = u.el.querySelector(".grid-stack");
          h && h.gridstack && h.gridstack.load(d.subGridOpts.children);
        }
      } else t && this.addWidget(d);
    }), delete this.engine._loading, this.engine.removedNodes = o, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? te.addRemoveCB = s : delete te.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const i = E.toNumber(t.getAttribute("gs-h")) || 1;
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
    const t = E.parseHeight(e);
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
    const n = te.getElement(e);
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
    return e ? (te.getElements(e).forEach((i) => {
      if (i.parentElement && i.parentElement !== this.el)
        return;
      let s = i.gridstackNode;
      s || (s = this.engine.nodes.find((o) => i === o.el)), s && (t && te.addRemoveCB && te.addRemoveCB(this.el, s, !1, !1), delete i.gridstackNode, this._removeDD(i), this.engine.removeNode(s, t, n), t && i.parentElement && i.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && te.addRemoveCB && te.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
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
    return te.getElements(e).forEach((n) => {
      const i = n?.gridstackNode;
      if (!i)
        return;
      const s = { ...E.copyPos({}, i), ...E.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const o = ["x", "y", "w", "h"];
      let a;
      if (o.some((d) => s[d] !== void 0 && s[d] !== i[d]) && (a = {}, o.forEach((d) => {
        a[d] = s[d] !== void 0 ? s[d] : i[d], delete s[d];
      })), !a && (s.minW || s.minH || s.maxW || s.maxH) && (a = {}), s.content !== void 0) {
        const d = n.querySelector(".grid-stack-item-content");
        d && d.textContent !== s.content && (i.content = s.content, te.renderCB(d, s), i.subGrid?.el && (d.appendChild(i.subGrid.el), i.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, c = !1;
      for (const d in s)
        d[0] !== "_" && i[d] !== s[d] && (i[d] = s[d], l = !0, c = c || !this.opts.staticGrid && (d === "noResize" || d === "noMove" || d === "locked"));
      if (E.sanitizeMinMax(i), a) {
        const d = a.w !== void 0 && a.w !== i.w;
        this.moveNode(i, a), d && i.subGrid ? i.subGrid.onResize(this.hasAnimationCSS() ? i.w : void 0) : this.resizeToContentCheck(d, i), delete i._orig;
      }
      (a || l) && this._writeAttr(n, i), c && this.prepareDragDrop(i.el), te.updateCB && te.updateCB(i);
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
    if (t.resizeToContentParent && (o = e.querySelector(t.resizeToContentParent)), o || (o = e.querySelector(te.resizeToContentParent)), !o)
      return;
    const a = e.clientHeight - o.clientHeight, l = t.h ? t.h * i - a : o.clientHeight;
    let c;
    if (t.subGrid) {
      c = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const h = t.subGrid.el.getBoundingClientRect(), m = e.getBoundingClientRect();
      c += h.top - m.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const h = o.firstElementChild;
        if (!h) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${te.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
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
    te.resizeToContentCB ? te.resizeToContentCB(e) : this.resizeToContent(e);
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
    return te.getElements(e).forEach((n) => {
      const i = n.gridstackNode;
      if (!E.canBeRotated(i))
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
      const n = E.parseHeight(e);
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
      const s = E.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === i) {
        const o = Math.floor(s.h / n);
        t < o && (t = o);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * n + i), e && E.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, n) {
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(Qe.itemClass, this.opts.itemClass);
    const i = E.shouldSizeToContent(n);
    return i ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), i && this.resizeToContentCheck(!1, n), E.lazyLoad(n) || this.prepareDragDrop(n.el), this;
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
    n.x = E.toNumber(e.getAttribute("gs-x")), n.y = E.toNumber(e.getAttribute("gs-y")), n.w = E.toNumber(e.getAttribute("gs-w")), n.h = E.toNumber(e.getAttribute("gs-h")), n.autoPosition = E.toBool(e.getAttribute("gs-auto-position")), n.noResize = E.toBool(e.getAttribute("gs-no-resize")), n.noMove = E.toBool(e.getAttribute("gs-no-move")), n.locked = E.toBool(e.getAttribute("gs-locked"));
    const i = e.getAttribute("gs-size-to-content");
    i && (i === "true" || i === "false" ? n.sizeToContent = E.toBool(i) : n.sizeToContent = parseInt(i, 10)), n.id = e.getAttribute("gs-id"), n.maxW = E.toNumber(e.getAttribute("gs-max-w")), n.minW = E.toNumber(e.getAttribute("gs-min-w")), n.maxH = E.toNumber(e.getAttribute("gs-max-h")), n.minH = E.toNumber(e.getAttribute("gs-min-h")), t && (n.w === 1 && e.removeAttribute("gs-w"), n.h === 1 && e.removeAttribute("gs-h"), n.maxW && e.removeAttribute("gs-max-w"), n.minW && e.removeAttribute("gs-min-w"), n.maxH && e.removeAttribute("gs-max-h"), n.minH && e.removeAttribute("gs-min-h"));
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
        E.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((n) => E.shouldSizeToContent(n))) {
        const n = [...this.engine.nodes];
        this.batchUpdate(), n.forEach((i) => {
          E.shouldSizeToContent(i) && this.resizeToContentCBCheck(i.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((n) => n.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = E.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return E.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return E.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return te.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return E.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, n = [];
    typeof this.opts.margin == "string" && (n = this.opts.margin.split(" ")), n.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = n[0], this.opts.marginLeft = this.opts.marginRight = n[1]) : n.length === 4 ? (this.opts.marginTop = n[0], this.opts.marginRight = n[1], this.opts.marginBottom = n[2], this.opts.marginLeft = n[3]) : (e = E.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((o) => {
      this.opts[o] === void 0 ? this.opts[o] = t : (e = E.parseHeight(this.opts[o]), this.opts[o] = e.h, delete this.opts.margin);
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
    return $e;
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
    t?.pause !== void 0 && (ae.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? E.getElements(e, i) : e).forEach((o, a) => {
      $e.isDraggable(o) || $e.dragIn(o, t), n?.[a] && (o.gridstackNode = n[a]);
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
    return this.opts.staticGrid ? this : (te.getElements(e).forEach((n) => {
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
    return this.opts.staticGrid ? this : (te.getElements(e).forEach((n) => {
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && te._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return $e.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return $e.droppable(this.el, "destroy"), this;
    let e, t;
    const n = (i, s, o) => {
      o = o || s;
      const a = o.gridstackNode;
      if (!a)
        return;
      if (!a.grid?.el) {
        o.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const h = o.getBoundingClientRect();
        o.style.left = h.x + (this.dragTransform.xScale - 1) * (i.clientX - h.x) / this.dragTransform.xScale + "px", o.style.top = h.y + (this.dragTransform.yScale - 1) * (i.clientY - h.y) / this.dragTransform.yScale + "px", o.style.transformOrigin = "0px 0px";
      }
      let { top: l, left: c } = o.getBoundingClientRect();
      const d = this.el.getBoundingClientRect();
      c -= d.left, l -= d.top;
      const u = {
        position: {
          top: l * this.dragTransform.xScale,
          left: c * this.dragTransform.yScale
        }
      };
      if (a._temporaryRemoved) {
        if (a.x = Math.max(0, Math.round(c / t)), a.y = Math.max(0, Math.round(l / e)), delete a.autoPosition, this.engine.nodeBoundFix(a), !this.engine.willItFit(a)) {
          if (a.autoPosition = !0, !this.engine.willItFit(a)) {
            $e.off(s, "drag");
            return;
          }
          a._willFitPos && (E.copyPos(a, a._willFitPos), delete a._willFitPos);
        }
        this._onStartMoving(o, i, u, a, t, e);
      } else
        this._dragOrResize(o, i, u, a, t, e);
    };
    return $e.droppable(this.el, {
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
        const d = o.getAttribute("data-gs-widget") || o.getAttribute("gridstacknode");
        if (d) {
          try {
            a = JSON.parse(d);
          } catch {
            console.error("Gridstack dropover: Bad JSON format: ", d);
          }
          o.removeAttribute("data-gs-widget"), o.removeAttribute("gridstacknode");
        }
        a || (a = this._readAttr(o)), a._sidebarOrig = { w: a.w, h: a.h };
      }
      a.grid || (a.el || (a = { ...a }), a._isExternal = !0, o.gridstackNode = a);
      const l = a.w || Math.round(o.offsetWidth / t) || 1, c = a.h || Math.round(o.offsetHeight / e) || 1;
      return a.grid && a.grid !== this ? (s._gridstackNodeOrig || (s._gridstackNodeOrig = a), s.gridstackNode = a = { ...a, w: l, h: c, grid: this }, delete a.x, delete a.y, this.engine.cleanupNode(a).nodeBoundFix(a), a._initDD = a._isExternal = // DOM needs to be re-parented on a drop
      a._temporaryRemoved = !0) : (a.w = l, a.h = c, a._temporaryRemoved = !0), te._itemRemoving(a.el, !1), $e.on(s, "drag", n), n(i, s, o), !1;
    }).on(this.el, "dropout", (i, s, o) => {
      const a = o?.gridstackNode || s.gridstackNode;
      return a && (!a.grid || a.grid === this) && (this._leave(s, o), this._isTemp && this.removeAsSubGrid(a)), !1;
    }).on(this.el, "drop", (i, s, o) => {
      const a = o?.gridstackNode || s.gridstackNode;
      if (a?.grid === this && !a._isExternal)
        return !1;
      const l = !!this.placeholder.parentElement, c = s !== o;
      this.placeholder.remove(), delete this.placeholder.gridstackNode, l && this.opts.animate && (this.setAnimation(!1), this.setAnimation(!0, !0));
      const d = s._gridstackNodeOrig;
      if (delete s._gridstackNodeOrig, l && d?.grid && d.grid !== this) {
        const h = d.grid;
        h.engine.removeNodeFromLayoutCache(d), h.engine.removedNodes.push(d), h._triggerRemoveEvent()._triggerChangeEvent(), h.parentGridNode && !h.engine.nodes.length && h.opts.subGridDynamic && h.removeAsSubGrid();
      }
      if (!a || (l && (this.engine.cleanupNode(a), a.grid = this), delete a.grid?._isTemp, $e.off(s, "drag"), o !== s ? (o.remove(), s = o) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = a.subGrid?.el?.gridstack;
      return E.copyPos(a, this._readAttr(this.placeholder)), E.removePositioningStyles(s), c && (a.content || a.subGridOpts || te.addRemoveCB) ? (delete a.el, s = this.addWidget(a)) : (this._prepareElement(s, !0, a), this.el.appendChild(s), this.resizeToContentCheck(!1, a), u && (u.parentGridNode = a), this._updateContainerHeight()), this.engine.addedNodes.push(a), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...i, type: "dropped" }, d && d.grid ? d : void 0, a), !1;
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
    return e ? (!this.opts.staticGrid && !$e.isDroppable(e) && $e.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => te._itemRemoving(n, !0)).on(e, "dropout", (t, n) => te._itemRemoving(n, !1)), this) : this;
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
      const c = (h, m) => {
        this.triggerEvent(h, h.target), a = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, h, m, n, a, l);
      }, d = (h, m) => {
        this._dragOrResize(e, h, m, n, a, l);
      }, u = (h) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete n._moving, delete n._resizing, delete n._event, delete n._lastTried;
        const m = n.w !== n._orig.w, g = h.target;
        if (!(!g.gridstackNode || g.gridstackNode.grid !== this)) {
          if (n.el = g, n._isAboutToRemove) {
            const y = e.gridstackNode.grid;
            y._gsEventHandler[h.type] && y._gsEventHandler[h.type](h, g), y.engine.nodes.push(n), y.removeWidget(e, !0, !0);
          } else
            E.removePositioningStyles(g), n._temporaryRemoved ? (this._writePosAttr(g, n), this.engine.addNode(n)) : this._writePosAttr(g, n), this.triggerEvent(h, g);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), h.type === "resizestop" && (Number.isInteger(n.sizeToContent) && (n.sizeToContent = n.h), this.resizeToContentCheck(m, n));
        }
      };
      $e.draggable(e, {
        start: c,
        stop: u,
        drag: d
      }).resizable(e, {
        start: c,
        stop: u,
        resize: d
      }), n._initDD = !0;
    }
    return $e.draggable(e, i ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, n, i, s, o) {
    if (this.engine.cleanNodes().beginUpdate(i), this._writePosAttr(this.placeholder, i), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = i, i.grid?.el)
      this.dragTransform = E.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const a = this.placeholder.closest(".grid-stack");
      this.dragTransform = E.getValuesFromTransformedElement(a);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (i.el = this.placeholder, i._lastUiPosition = n.position, i._prevYPix = n.position.top, i._moving = t.type === "dragstart", i._resizing = t.type === "resizestart", delete i._lastTried, t.type === "dropover" && i._temporaryRemoved && (this.engine.addNode(i), i._moving = !0), this.engine.cacheRects(s, o, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const a = this.getColumn() - i.x, l = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - i.y;
      $e.resizable(e, "option", "minWidth", s * Math.min(i.minW || 1, a)).resizable(e, "option", "minHeight", o * Math.min(i.minH || 1, l)).resizable(e, "option", "maxWidth", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, a)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(i.maxW || Number.MAX_SAFE_INTEGER, i.x + i.w)).resizable(e, "option", "maxHeight", o * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", o * Math.min(i.maxH || Number.MAX_SAFE_INTEGER, i.y + i.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, n, i, s, o) {
    const a = { ...i._orig };
    let l, c = this.opts.marginLeft, d = this.opts.marginRight, u = this.opts.marginTop, h = this.opts.marginBottom;
    const m = Math.round(o * 0.1), g = Math.round(s * 0.1);
    if (c = Math.min(c, g), d = Math.min(d, g), u = Math.min(u, m), h = Math.min(h, m), t.type === "drag") {
      if (i._temporaryRemoved)
        return;
      const v = n.position.top - i._prevYPix;
      i._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && E.updateScrollPosition(e, n.position, v);
      const A = n.position.left + (n.position.left > i._lastUiPosition.left ? -d : c), _ = n.position.top + (n.position.top > i._lastUiPosition.top ? -h : u);
      a.x = Math.round(A / s), a.y = Math.round(_ / o);
      const S = this._extraDragRow;
      if (this.engine.collide(i, a)) {
        const k = this.getRow();
        let b = Math.max(0, a.y + i.h - k);
        this.opts.maxRow && k + b > this.opts.maxRow && (b = Math.max(0, this.opts.maxRow - k)), this._extraDragRow = b;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== S && this._updateContainerHeight(), i.x === a.x && i.y === a.y)
        return;
    } else if (t.type === "resize") {
      if (a.x < 0 || (E.updateScrollResize(t, e, o), a.w = Math.round((n.size.width - c) / s), a.h = Math.round((n.size.height - u) / o), i.w === a.w && i.h === a.h) || i._lastTried && i._lastTried.w === a.w && i._lastTried.h === a.h)
        return;
      const v = n.position.left + c, A = n.position.top + u;
      a.x = Math.round(v / s), a.y = Math.round(A / o), l = !0;
    }
    i._event = t, i._lastTried = a;
    const y = {
      x: n.position.left + c,
      y: n.position.top + u,
      w: (n.size ? n.size.width : i.w * s) - c - d,
      h: (n.size ? n.size.height : i.h * o) - u - h
    };
    if (this.engine.moveNodeCheck(i, { ...a, cellWidth: s, cellHeight: o, rect: y, resizing: l })) {
      i._lastUiPosition = n.position, this.engine.cacheRects(s, o, u, d, h, c), delete i._skipDown, l && i.subGrid && i.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const v = t.target;
      i._sidebarOrig || this._writePosAttr(v, i), this.triggerEvent(t, v);
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
    if (!n || (t.style.transform = t.style.transformOrigin = null, $e.off(e, "drag"), n._temporaryRemoved))
      return;
    n._temporaryRemoved = !0, this.engine.removeNode(n), n.el = n._isExternal && t ? t : e;
    const i = n._sidebarOrig;
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = i, this.opts.removable === !0 && te._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return ou(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
te.renderCB = (r, e) => {
  r && e?.content && (r.textContent = e.content);
};
te.resizeToContentParent = ".grid-stack-item-content";
te.Utils = E;
te.Engine = Rt;
te.GDRev = "12.3.2";
const rn = /* @__PURE__ */ new WeakMap();
function du({ children: r }) {
  const {
    _gridStack: { value: e, set: t },
    options: n
  } = Ho(), i = Y(/* @__PURE__ */ new Map()), s = Y(null), o = Y(n), a = K(
    (d, u) => {
      if (u.id && u.grid) {
        let h = rn.get(u.grid);
        h || (h = /* @__PURE__ */ new Map(), rn.set(u.grid, h)), h.set(u.id, d), i.current.set(u.id, d);
      }
    },
    []
  ), l = K(() => {
    if (s.current) {
      te.renderCB = a;
      const d = te.init(o.current, s.current);
      return d && o.current.handle && d.opts && (d.opts.handle = o.current.handle), d;
    }
    return null;
  }, [a]), c = (d, u) => {
    const { children: h, ...m } = d, { children: g, ...y } = u;
    return No(m, y);
  };
  return fi(() => {
    if (!c(n, o.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), i.current.clear(), rn.delete(e), o.current = n, t(null);
      } catch (d) {
        console.error("Error destroying gridstack", d);
      }
    else e && (o.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), fi(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (d) {
        console.error("Error initializing gridstack", d);
      }
  }, [e, l, t]), /* @__PURE__ */ f(
    jo.Provider,
    {
      value: H(
        () => ({
          getWidgetContainer: (d) => {
            if (e) {
              const u = rn.get(e);
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
const Ii = ({
  options: r,
  widgets: e,
  onChange: t,
  className: n
}) => {
  const i = H(() => JSON.stringify(
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
  ), [e]), s = H(() => ({
    ...r,
    class: n
  }), [r, i, n]), o = (l, c, d) => {
    let u = d[0], h = 1 / 0;
    for (const m of d) {
      const g = m.w - l, y = m.h - c, v = g * g + y * y;
      v < h && (h = v, u = m);
    }
    return u;
  };
  return /* @__PURE__ */ f(
    ru,
    {
      options: s,
      widgets: e,
      onResizeStop: (l, c) => {
        const d = c.gridstackNode;
        if (!d) return;
        const u = c.gridstackNode?.allowedSizes ?? [];
        if (u.length === 0)
          return;
        const h = o(d.w ?? 1, d.h ?? 1, u ?? []);
        (d.w !== h.w || d.h !== h.h) && d.grid?.update(c, { w: h.w, h: h.h });
      },
      onChange: t,
      children: /* @__PURE__ */ f(du, { children: /* @__PURE__ */ f(su, {}) })
    }
  );
};
Ii.displayName = "F0GridStack";
const uu = (r, e, t) => /* @__PURE__ */ f("div", { children: r }), Pn = ({
  widgets: r = [],
  editMode: e = !1,
  onChange: t = () => {
  },
  WidgetWrapper: n = uu,
  main: i = !1,
  deps: s
}) => {
  const o = K(
    (b, x, w) => /* @__PURE__ */ f(
      Ai.div,
      {
        className: "h-full w-full",
        initial: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: {
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        },
        children: n(b, x, w)
      }
    ),
    [n]
  ), a = H(
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
  ), l = (b, x) => {
    if (typeof b.content == "function" && b.deps && x) {
      const w = {};
      return b.deps.forEach((R) => {
        typeof R == "string" && x[R] !== void 0 && (w[R] = x[R]);
      }), b.content(w);
    }
    return typeof b.content == "function" ? null : b.content;
  }, c = (b, x, w) => b.map((R) => {
    const z = l(R, w), F = {
      id: R.id,
      h: R.h ?? 1,
      w: R.w ?? 1,
      allowedSizes: R.availableSizes,
      noMove: !x,
      noResize: !x,
      locked: R.locked,
      meta: R.meta,
      _originalContent: z,
      content: o(z, R.meta, x)
    };
    return R.x !== void 0 && (F.x = R.x), R.y !== void 0 && (F.y = R.y), F;
  }), [d, u] = re(
    c(r, e)
  ), h = Y(e), m = Y(r), g = Y(!1), y = Y(/* @__PURE__ */ new Map()), v = Y(r);
  v.current = r;
  const A = Y(s), _ = H(() => {
    const b = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || r.forEach((x) => {
      if (x.deps && x.deps.length > 0) {
        const w = x.deps.map((R) => typeof R == "string" && s[R] !== void 0 ? s[R] : R).filter((R) => R !== null);
        b.set(x.id, w);
      }
    }), b;
  }, [r, s]), S = K(
    (b) => {
      u(b), g.current || t(
        b.map((x) => {
          const w = v.current.find(
            (R) => R.id === x.id
          );
          return {
            id: x.id,
            w: x.w ?? 1,
            h: x.h ?? 1,
            allowedSizes: x.allowedSizes,
            meta: x.meta,
            // Preserve the original content (function or static) from the widget prop
            content: typeof w?.content == "function" ? w.content : x._originalContent,
            x: x.x ?? 0,
            y: x.y ?? 0,
            locked: x.locked,
            deps: w?.deps
          };
        })
      ), g.current = !1;
    },
    [t]
  ), k = (b, x) => !b && !x ? !1 : !b || !x || b.length !== x.length ? !0 : b.some((w, R) => w !== x[R]);
  return ie(() => {
    const b = h.current !== e, x = m.current !== r, w = A.current !== s && (A.current === void 0 || s === void 0 || Object.keys(A.current).length !== Object.keys(s).length || Object.keys(s).some(
      (T) => A.current?.[T] !== s[T]
    )), R = /* @__PURE__ */ new Map();
    r.forEach((T) => {
      if (T.deps && T.deps.length > 0) {
        const D = y.current.get(T.id), O = _.get(T.id);
        R.set(
          T.id,
          k(D, O)
        ), O ? y.current.set(T.id, O) : y.current.delete(T.id);
      }
    });
    const z = new Set(r.map((T) => T.id));
    y.current.forEach((T, D) => {
      z.has(D) || y.current.delete(D);
    });
    const F = Array.from(R.values()).some((T) => T) || w;
    b && !x && !F ? (g.current = !0, u(
      (T) => T.map((D) => {
        const O = r.find((I) => I.id === D.id);
        if (!O)
          return D;
        const G = l(O, s);
        return {
          ...D,
          noMove: !e,
          noResize: !e,
          locked: O.locked,
          meta: O.meta,
          _originalContent: G,
          content: o(
            G,
            O.meta,
            e
          )
        };
      })
    )) : (x || F) && u((T) => {
      const D = new Map(
        T.map((O) => [O.id, O])
      );
      return r.map((O) => {
        const G = D.get(O.id), I = R.get(O.id) ?? !1;
        let U;
        I || !G ? U = l(O, s) : U = G._originalContent ?? l(O, s);
        const j = {
          id: O.id,
          h: G?.h ?? O.h ?? 1,
          w: G?.w ?? O.w ?? 1,
          allowedSizes: O.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: O.locked,
          meta: O.meta,
          _originalContent: U,
          content: o(U, O.meta, e)
        }, ne = G?.x ?? O.x, ce = G?.y ?? O.y;
        return ne !== void 0 && (j.x = ne), ce !== void 0 && (j.y = ce), j;
      });
    }), h.current = e, m.current = r, A.current = s;
  }, [
    r,
    e,
    o,
    _,
    s
  ]), /* @__PURE__ */ f(
    Ii,
    {
      className: le(i && "h-full flex-1 overflow-auto"),
      options: a,
      onChange: S,
      widgets: d
    }
  );
};
Pn.displayName = "GroupGrid";
Pn.__isPageLayoutGroup = !0;
const fu = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutBlock = !0, t;
}, hu = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutGroup = !0, t;
}, mu = (r, e) => /* @__PURE__ */ f(
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
), Wo = Ge(mu), pu = [
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
], Go = Ge((r, e) => {
  const t = pu.reduce((n, i) => {
    const { [i]: s, ...o } = n;
    return o;
  }, r);
  return /* @__PURE__ */ f(
    Ti,
    {
      ...t,
      variant: "ai",
      ref: e,
      iconRotate: r.icon == Wo
    }
  );
});
Go.displayName = "AIButton";
const Er = kt({
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
}), gu = {
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
}, Pi = Ge(
  ({
    content: r,
    variant: e,
    align: t,
    className: n,
    as: i,
    ellipsis: s,
    noEllipsisTooltip: o,
    markdown: a,
    required: l,
    ...c
  }, d) => {
    const u = i ?? gu[e ?? "body"], h = l ? /* @__PURE__ */ f("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (s !== void 0) {
      const m = typeof s == "number" ? s : 1;
      return h ? ar(
        u,
        {
          ...c,
          className: le(
            Er({ variant: e, align: t }),
            n,
            "inline-flex gap-0.5"
          ),
          ref: d
        },
        /* @__PURE__ */ f(
          ln,
          {
            lines: m,
            noTooltip: o,
            tag: "span",
            className: "min-w-0",
            markdown: a,
            children: r
          }
        ),
        h
      ) : /* @__PURE__ */ f(
        ln,
        {
          ref: d,
          lines: m,
          noTooltip: o,
          tag: u,
          className: le(Er({ variant: e, align: t }), n),
          markdown: a,
          ...c,
          children: r
        }
      );
    }
    if (a) {
      const m = ql(r);
      return h ? ar(
        u,
        {
          ...c,
          className: le(Er({ variant: e, align: t }), n),
          ref: d
        },
        /* @__PURE__ */ f("span", { dangerouslySetInnerHTML: { __html: m } }),
        h
      ) : ar(u, {
        ...c,
        className: le(Er({ variant: e, align: t }), n),
        ref: d,
        dangerouslySetInnerHTML: { __html: m }
      });
    }
    return ar(
      u,
      {
        ...c,
        className: le(Er({ variant: e, align: t }), n),
        ref: d
      },
      r,
      h
    );
  }
);
Pi.displayName = "Text";
const Uo = Ge((r, e) => /* @__PURE__ */ f(Pi, { ref: e, markdown: r.markdown ?? !0, ...r }));
Uo.displayName = "F0Text";
const vu = ye(Uo), lv = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Zo = ({
  title: r,
  draggable: e = !1,
  onDragStart: t,
  onDragEnd: n,
  isDragging: i = !1,
  AIButton: s,
  actions: o,
  children: a,
  selected: l = !1
}) => {
  const [c, d] = re(!1), [u, h] = re(!1), m = Tt(), g = (v) => {
    d(v);
  }, y = u || c;
  return ie(() => {
    if (!i || !n) return;
    const v = () => {
      n();
    };
    return document.addEventListener("mouseup", v), () => {
      document.removeEventListener("mouseup", v);
    };
  }, [i, n]), /* @__PURE__ */ W(
    "div",
    {
      className: le(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        e && c ? "border-f1-border-hover" : e && "hover:border-f1-border-hover",
        l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        i && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      ),
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      children: [
        /* @__PURE__ */ W("div", { className: "flex h-12 w-full items-center justify-between gap-3", children: [
          /* @__PURE__ */ W(
            "div",
            {
              className: le(
                "flex min-w-0 flex-1 items-center",
                !e && "pl-4",
                !o && !s && "pr-4"
              ),
              children: [
                e && /* @__PURE__ */ f(
                  "div",
                  {
                    className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
                    onMouseDown: t,
                    "data-gs-handle": "true",
                    children: /* @__PURE__ */ f(Gr, { icon: Kl, size: "xs" })
                  }
                ),
                /* @__PURE__ */ f(
                  "div",
                  {
                    className: le(
                      "flex min-w-0 flex-1 items-center",
                      e && "-translate-x-1.5"
                    ),
                    children: /* @__PURE__ */ f(vu, { variant: "label", content: r, ellipsis: !0 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ f(Xl, { children: (s || o) && y && /* @__PURE__ */ W(
            Ai.div,
            {
              className: le(
                "flex shrink-0 items-center gap-0.5 pr-2",
                !o && "pr-4"
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
                  Go,
                  {
                    size: "sm",
                    label: m.ai.ask,
                    onClick: s,
                    icon: Wo
                  }
                ) }),
                o && /* @__PURE__ */ f(
                  Yl,
                  {
                    items: o,
                    open: c,
                    onOpenChange: g,
                    align: "end",
                    children: /* @__PURE__ */ f(
                      Ti,
                      {
                        icon: Jl,
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
        /* @__PURE__ */ f("div", { className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4", children: a })
      ]
    }
  );
}, yu = () => /* @__PURE__ */ W("div", { className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
  /* @__PURE__ */ f("div", { className: "flex h-12 w-full items-center px-4", children: /* @__PURE__ */ f(wt, { className: "h-3 w-full max-w-16 rounded-md" }) }),
  /* @__PURE__ */ W("div", { className: "flex flex-1 items-end gap-2 px-4 pb-4", children: [
    /* @__PURE__ */ f(wt, { className: "h-1/2 w-full rounded-sm" }),
    /* @__PURE__ */ f(wt, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ f(wt, { className: "h-1/5 w-full rounded-sm" }),
    /* @__PURE__ */ f(wt, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ f(wt, { className: "h-full w-full rounded-sm" }),
    /* @__PURE__ */ f(wt, { className: "h-3/4 w-full rounded-sm" })
  ] })
] });
Zo.displayName = "F0Widget";
const bu = mo(Zo, yu), xu = ({
  children: r,
  title: e,
  draggable: t = !1,
  actions: n,
  aiButton: i
}) => /* @__PURE__ */ f(
  bu,
  {
    title: e,
    draggable: t,
    actions: n,
    AIButton: i,
    children: r
  }
), qo = ({
  widgets: r,
  editMode: e = !1,
  onChange: t = () => {
  },
  deps: n,
  ...i
}) => /* @__PURE__ */ f(
  Pn,
  {
    widgets: r,
    editMode: e,
    onChange: t,
    deps: n,
    ...i,
    WidgetWrapper: (s, o, a) => /* @__PURE__ */ f(
      xu,
      {
        title: o?.title ?? "",
        draggable: a,
        actions: o?.actions,
        aiButton: o?.aiButton,
        children: s
      }
    )
  }
);
qo.displayName = "Dashboard";
const wu = hu("Dashboard", qo), cv = ye(
  lt("Dashboard", wu)
), _u = kt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Cu = (r) => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({ type: "separator" }), e.push(...t), e), []), Eu = (r) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(r) ? r.every(e) ? [
    {
      items: r
    }
  ] : r : [r];
}, zn = Ge(
  ({
    children: r,
    variant: e = "default",
    className: t,
    draggable: n = !1,
    onDragStart: i,
    onDragEnd: s,
    onDrop: o,
    dragId: a,
    primaryAction: l,
    ...c
  }, d) => {
    const u = H(
      () => Eu(c.actions || []),
      [c.actions]
    ), h = H(
      () => u.flatMap((g) => g.items),
      [u]
    ), m = H(
      () => h.length > 0 || !!l,
      [h, l]
    );
    return /* @__PURE__ */ W(
      "div",
      {
        ref: d,
        className: le(_u({ variant: e }), "relative", t),
        draggable: n,
        onDragStart: i,
        onDragEnd: s,
        onDrop: o,
        "data-drag-id": a,
        ...c,
        children: [
          m && /* @__PURE__ */ W("div", { className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4", children: [
            !!l && l,
            h.length > 0 && /* @__PURE__ */ f(
              Yc,
              {
                items: Cu(u),
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
zn.displayName = "Block";
zn.__isPageLayoutBlock = !0;
const Su = ({
  title: r = "",
  description: e,
  titleLevel: t = "h2",
  children: n,
  className: i,
  ...s
}) => {
  if (!r) return null;
  const o = t;
  return /* @__PURE__ */ W(zn, { ...s, className: le("space-y-4", i), children: [
    /* @__PURE__ */ W("div", { className: "space-y-2", children: [
      /* @__PURE__ */ f(
        o,
        {
          className: le("font-semibold text-f1-foreground", {
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
}, ku = fu(
  "BlockContent",
  Su
), Du = (r) => !So(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutBlock" in r.type, Nu = (r) => !So(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutGroup" in r.type, Ko = (r, e, t) => {
  const n = dn.toArray(e);
  for (const i of n)
    t.includes("block") && Du(i) || t.includes("group") && Nu(i) || console.warn(
      `${r}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      i
    );
}, zi = Ge(
  ({ children: r, onSort: e, ...t }, n) => {
    Ko("GroupLinear", r, ["block"]);
    const [i, s] = re(dn.toArray(r));
    return ie(() => {
      s(dn.toArray(r));
    }, [r]), ie(() => {
      e?.(i);
    }, [i, e]), /* @__PURE__ */ f("div", { ref: n, ...t, children: i.map((o, a) => /* @__PURE__ */ f($c, { children: o }, a)) });
  }
);
zi.displayName = "GroupLinear";
zi.__isPageLayoutGroup = !0;
function Ru() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return H(
    () => (n) => {
      e.forEach((i) => i(n));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const Bn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function gr(r) {
  const e = Object.prototype.toString.call(r);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Bi(r) {
  return "nodeType" in r;
}
function Ue(r) {
  var e, t;
  return r ? gr(r) ? r : Bi(r) && (e = (t = r.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Vi(r) {
  const {
    Document: e
  } = Ue(r);
  return r instanceof e;
}
function Ur(r) {
  return gr(r) ? !1 : r instanceof Ue(r).HTMLElement;
}
function Xo(r) {
  return r instanceof Ue(r).SVGElement;
}
function vr(r) {
  return r ? gr(r) ? r.document : Bi(r) ? Vi(r) ? r : Ur(r) || Xo(r) ? r.ownerDocument : document : document : document;
}
const pt = Bn ? fi : ie;
function Vn(r) {
  const e = Y(r);
  return pt(() => {
    e.current = r;
  }), K(function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function Au() {
  const r = Y(null), e = K((n, i) => {
    r.current = setInterval(n, i);
  }, []), t = K(() => {
    r.current !== null && (clearInterval(r.current), r.current = null);
  }, []);
  return [e, t];
}
function Br(r, e) {
  e === void 0 && (e = [r]);
  const t = Y(r);
  return pt(() => {
    t.current !== r && (t.current = r);
  }, e), t;
}
function Zr(r, e) {
  const t = Y();
  return H(
    () => {
      const n = r(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function gn(r) {
  const e = Vn(r), t = Y(null), n = K(
    (i) => {
      i !== t.current && e?.(i, t.current), t.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function vn(r) {
  const e = Y();
  return ie(() => {
    e.current = r;
  }, [r]), e.current;
}
let ei = {};
function qr(r, e) {
  return H(() => {
    if (e)
      return e;
    const t = ei[r] == null ? 0 : ei[r] + 1;
    return ei[r] = t, r + "-" + t;
  }, [r, e]);
}
function Yo(r) {
  return function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      n[i - 1] = arguments[i];
    return n.reduce((s, o) => {
      const a = Object.entries(o);
      for (const [l, c] of a) {
        const d = s[l];
        d != null && (s[l] = d + r * c);
      }
      return s;
    }, {
      ...e
    });
  };
}
const cr = /* @__PURE__ */ Yo(1), Vr = /* @__PURE__ */ Yo(-1);
function Tu(r) {
  return "clientX" in r && "clientY" in r;
}
function Hn(r) {
  if (!r)
    return !1;
  const {
    KeyboardEvent: e
  } = Ue(r.target);
  return e && r instanceof e;
}
function Ou(r) {
  if (!r)
    return !1;
  const {
    TouchEvent: e
  } = Ue(r.target);
  return e && r instanceof e;
}
function yn(r) {
  if (Ou(r)) {
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
  return Tu(r) ? {
    x: r.clientX,
    y: r.clientY
  } : null;
}
const Ht = /* @__PURE__ */ Object.freeze({
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
        return [Ht.Translate.toString(r), Ht.Scale.toString(r)].join(" ");
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
function Mu(r) {
  return r.matches(gs) ? r : r.querySelector(gs);
}
const Fu = {
  display: "none"
};
function Lu(r) {
  let {
    id: e,
    value: t
  } = r;
  return q.createElement("div", {
    id: e,
    style: Fu
  }, t);
}
function Iu(r) {
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
  return q.createElement("div", {
    id: e,
    style: i,
    role: "status",
    "aria-live": n,
    "aria-atomic": !0
  }, t);
}
function Pu() {
  const [r, e] = re("");
  return {
    announce: K((n) => {
      n != null && e(n);
    }, []),
    announcement: r
  };
}
const Jo = /* @__PURE__ */ vt(null);
function zu(r) {
  const e = dt(Jo);
  ie(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(r);
  }, [r, e]);
}
function Bu() {
  const [r] = re(() => /* @__PURE__ */ new Set()), e = K((n) => (r.add(n), () => r.delete(n)), [r]);
  return [K((n) => {
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
const Vu = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Hu = {
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
function ju(r) {
  let {
    announcements: e = Hu,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = Vu
  } = r;
  const {
    announce: s,
    announcement: o
  } = Pu(), a = qr("DndLiveRegion"), [l, c] = re(!1);
  if (ie(() => {
    c(!0);
  }, []), zu(H(() => ({
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
  const d = q.createElement(q.Fragment, null, q.createElement(Lu, {
    id: n,
    value: i.draggable
  }), q.createElement(Iu, {
    id: a,
    announcement: o
  }));
  return t ? ko(d, t) : d;
}
var Fe;
(function(r) {
  r.DragStart = "dragStart", r.DragMove = "dragMove", r.DragEnd = "dragEnd", r.DragCancel = "dragCancel", r.DragOver = "dragOver", r.RegisterDroppable = "registerDroppable", r.SetDroppableDisabled = "setDroppableDisabled", r.UnregisterDroppable = "unregisterDroppable";
})(Fe || (Fe = {}));
function bn() {
}
function vs(r, e) {
  return H(
    () => ({
      sensor: r,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, e]
  );
}
function $u() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return H(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const gt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Wu(r, e) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function Gu(r, e) {
  const t = yn(r);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function Uu(r, e) {
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
function Zu(r, e) {
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
function Qo(r, e) {
  if (!r || r.length === 0)
    return null;
  const [t] = r;
  return t[e];
}
const qu = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = r;
  const i = ys(e), s = [];
  for (const o of n) {
    const {
      id: a
    } = o, l = t.get(a);
    if (l) {
      const c = ys(l), d = i.reduce((h, m, g) => h + Wu(c[g], m), 0), u = Number((d / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: o,
          value: u
        }
      });
    }
  }
  return s.sort(Uu);
};
function Ku(r, e) {
  const t = Math.max(e.top, r.top), n = Math.max(e.left, r.left), i = Math.min(e.left + e.width, r.left + r.width), s = Math.min(e.top + e.height, r.top + r.height), o = i - n, a = s - t;
  if (n < i && t < s) {
    const l = e.width * e.height, c = r.width * r.height, d = o * a, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Xu = (r) => {
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
      const l = Ku(a, e);
      l > 0 && i.push({
        id: o,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(Zu);
};
function Yu(r, e, t) {
  return {
    ...r,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function ea(r, e) {
  return r && e ? {
    x: r.left - e.left,
    y: r.top - e.top
  } : gt;
}
function Ju(r) {
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
const Qu = /* @__PURE__ */ Ju(1);
function ta(r) {
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
function ef(r, e, t) {
  const n = ta(e);
  if (!n)
    return r;
  const {
    scaleX: i,
    scaleY: s,
    x: o,
    y: a
  } = n, l = r.left - o - (1 - i) * parseFloat(t), c = r.top - a - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), d = i ? r.width / i : r.width, u = s ? r.height / s : r.height;
  return {
    width: d,
    height: u,
    top: c,
    right: l + d,
    bottom: c + u,
    left: l
  };
}
const tf = {
  ignoreTransform: !1
};
function yr(r, e) {
  e === void 0 && (e = tf);
  let t = r.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = Ue(r).getComputedStyle(r);
    c && (t = ef(t, c, d));
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
function bs(r) {
  return yr(r, {
    ignoreTransform: !0
  });
}
function rf(r) {
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
function nf(r, e) {
  return e === void 0 && (e = Ue(r).getComputedStyle(r)), e.position === "fixed";
}
function sf(r, e) {
  e === void 0 && (e = Ue(r).getComputedStyle(r));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = e[i];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function jn(r, e) {
  const t = [];
  function n(i) {
    if (e != null && t.length >= e || !i)
      return t;
    if (Vi(i) && i.scrollingElement != null && !t.includes(i.scrollingElement))
      return t.push(i.scrollingElement), t;
    if (!Ur(i) || Xo(i) || t.includes(i))
      return t;
    const s = Ue(r).getComputedStyle(i);
    return i !== r && sf(i, s) && t.push(i), nf(i, s) ? t : n(i.parentNode);
  }
  return r ? n(r) : t;
}
function ra(r) {
  const [e] = jn(r, 1);
  return e ?? null;
}
function ti(r) {
  return !Bn || !r ? null : gr(r) ? r : Bi(r) ? Vi(r) || r === vr(r).scrollingElement ? window : Ur(r) ? r : null : null;
}
function na(r) {
  return gr(r) ? r.scrollX : r.scrollLeft;
}
function ia(r) {
  return gr(r) ? r.scrollY : r.scrollTop;
}
function pi(r) {
  return {
    x: na(r),
    y: ia(r)
  };
}
var Ie;
(function(r) {
  r[r.Forward = 1] = "Forward", r[r.Backward = -1] = "Backward";
})(Ie || (Ie = {}));
function sa(r) {
  return !Bn || !r ? !1 : r === document.scrollingElement;
}
function oa(r) {
  const e = {
    x: 0,
    y: 0
  }, t = sa(r) ? {
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
const of = {
  x: 0.2,
  y: 0.2
};
function af(r, e, t, n, i) {
  let {
    top: s,
    left: o,
    right: a,
    bottom: l
  } = t;
  n === void 0 && (n = 10), i === void 0 && (i = of);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: h
  } = oa(r), m = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, y = {
    height: e.height * i.y,
    width: e.width * i.x
  };
  return !c && s <= e.top + y.height ? (m.y = Ie.Backward, g.y = n * Math.abs((e.top + y.height - s) / y.height)) : !d && l >= e.bottom - y.height && (m.y = Ie.Forward, g.y = n * Math.abs((e.bottom - y.height - l) / y.height)), !h && a >= e.right - y.width ? (m.x = Ie.Forward, g.x = n * Math.abs((e.right - y.width - a) / y.width)) : !u && o <= e.left + y.width && (m.x = Ie.Backward, g.x = n * Math.abs((e.left + y.width - o) / y.width)), {
    direction: m,
    speed: g
  };
}
function lf(r) {
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
function aa(r) {
  return r.reduce((e, t) => cr(e, pi(t)), gt);
}
function cf(r) {
  return r.reduce((e, t) => e + na(t), 0);
}
function df(r) {
  return r.reduce((e, t) => e + ia(t), 0);
}
function la(r, e) {
  if (e === void 0 && (e = yr), !r)
    return;
  const {
    top: t,
    left: n,
    bottom: i,
    right: s
  } = e(r);
  ra(r) && (i <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && r.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const uf = [["x", ["left", "right"], cf], ["y", ["top", "bottom"], df]];
class Hi {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = jn(t), i = aa(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, o, a] of uf)
      for (const l of o)
        Object.defineProperty(this, l, {
          get: () => {
            const c = a(n), d = i[s] - c;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Ar {
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
function ff(r) {
  const {
    EventTarget: e
  } = Ue(r);
  return r instanceof e ? r : vr(r);
}
function ri(r, e) {
  const t = Math.abs(r.x), n = Math.abs(r.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var ot;
(function(r) {
  r.Click = "click", r.DragStart = "dragstart", r.Keydown = "keydown", r.ContextMenu = "contextmenu", r.Resize = "resize", r.SelectionChange = "selectionchange", r.VisibilityChange = "visibilitychange";
})(ot || (ot = {}));
function xs(r) {
  r.preventDefault();
}
function hf(r) {
  r.stopPropagation();
}
var ge;
(function(r) {
  r.Space = "Space", r.Down = "ArrowDown", r.Right = "ArrowRight", r.Left = "ArrowLeft", r.Up = "ArrowUp", r.Esc = "Escape", r.Enter = "Enter", r.Tab = "Tab";
})(ge || (ge = {}));
const ca = {
  start: [ge.Space, ge.Enter],
  cancel: [ge.Esc],
  end: [ge.Space, ge.Enter, ge.Tab]
}, mf = (r, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (r.code) {
    case ge.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case ge.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case ge.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case ge.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class ji {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new Ar(vr(t)), this.windowListeners = new Ar(Ue(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(ot.Resize, this.handleCancel), this.windowListeners.add(ot.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ot.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && la(n), t(gt);
  }
  handleKeyDown(e) {
    if (Hn(e)) {
      const {
        active: t,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: s = ca,
        coordinateGetter: o = mf,
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
        collisionRect: c
      } = n.current, d = c ? {
        x: c.left,
        y: c.top
      } : gt;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = o(e, {
        active: t,
        context: n.current,
        currentCoordinates: d
      });
      if (u) {
        const h = Vr(u, d), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = n.current;
        for (const y of g) {
          const v = e.code, {
            isTop: A,
            isRight: _,
            isLeft: S,
            isBottom: k,
            maxScroll: b,
            minScroll: x
          } = oa(y), w = lf(y), R = {
            x: Math.min(v === ge.Right ? w.right - w.width / 2 : w.right, Math.max(v === ge.Right ? w.left : w.left + w.width / 2, u.x)),
            y: Math.min(v === ge.Down ? w.bottom - w.height / 2 : w.bottom, Math.max(v === ge.Down ? w.top : w.top + w.height / 2, u.y))
          }, z = v === ge.Right && !_ || v === ge.Left && !S, F = v === ge.Down && !k || v === ge.Up && !A;
          if (z && R.x !== u.x) {
            const T = y.scrollLeft + h.x, D = v === ge.Right && T <= b.x || v === ge.Left && T >= x.x;
            if (D && !h.y) {
              y.scrollTo({
                left: T,
                behavior: a
              });
              return;
            }
            D ? m.x = y.scrollLeft - T : m.x = v === ge.Right ? y.scrollLeft - b.x : y.scrollLeft - x.x, m.x && y.scrollBy({
              left: -m.x,
              behavior: a
            });
            break;
          } else if (F && R.y !== u.y) {
            const T = y.scrollTop + h.y, D = v === ge.Down && T <= b.y || v === ge.Up && T >= x.y;
            if (D && !h.x) {
              y.scrollTo({
                top: T,
                behavior: a
              });
              return;
            }
            D ? m.y = y.scrollTop - T : m.y = v === ge.Down ? y.scrollTop - b.y : y.scrollTop - x.y, m.y && y.scrollBy({
              top: -m.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(e, cr(Vr(u, this.referenceCoordinates), m));
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
ji.activators = [{
  eventName: "onKeyDown",
  handler: (r, e, t) => {
    let {
      keyboardCodes: n = ca,
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
function ws(r) {
  return !!(r && "distance" in r);
}
function _s(r) {
  return !!(r && "delay" in r);
}
class $i {
  constructor(e, t, n) {
    var i;
    n === void 0 && (n = ff(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: o
    } = s;
    this.props = e, this.events = t, this.document = vr(o), this.documentListeners = new Ar(this.document), this.listeners = new Ar(n), this.windowListeners = new Ar(Ue(o)), this.initialCoordinates = (i = yn(s)) != null ? i : gt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(ot.Resize, this.handleCancel), this.windowListeners.add(ot.DragStart, xs), this.windowListeners.add(ot.VisibilityChange, this.handleCancel), this.windowListeners.add(ot.ContextMenu, xs), this.documentListeners.add(ot.Keydown, this.handleKeydown), t) {
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
    e && (this.activated = !0, this.documentListeners.add(ot.Click, hf, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(ot.SelectionChange, this.removeTextSelection), t(e));
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
    const l = (t = yn(e)) != null ? t : gt, c = Vr(i, l);
    if (!n && a) {
      if (ws(a)) {
        if (a.tolerance != null && ri(c, a.tolerance))
          return this.handleCancel();
        if (ri(c, a.distance))
          return this.handleStart();
      }
      if (_s(a) && ri(c, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, c);
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
    e.code === ge.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const pf = {
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
class Wi extends $i {
  constructor(e) {
    const {
      event: t
    } = e, n = vr(t.target);
    super(e, pf, n);
  }
}
Wi.activators = [{
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
const gf = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var gi;
(function(r) {
  r[r.RightClick = 2] = "RightClick";
})(gi || (gi = {}));
class vf extends $i {
  constructor(e) {
    super(e, gf, vr(e.event.target));
  }
}
vf.activators = [{
  eventName: "onMouseDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: n
    } = e;
    return t.button === gi.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const ni = {
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
class yf extends $i {
  constructor(e) {
    super(e, ni);
  }
  static setup() {
    return window.addEventListener(ni.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(ni.move.name, e);
    };
    function e() {
    }
  }
}
yf.activators = [{
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
var Tr;
(function(r) {
  r[r.Pointer = 0] = "Pointer", r[r.DraggableRect = 1] = "DraggableRect";
})(Tr || (Tr = {}));
var xn;
(function(r) {
  r[r.TreeOrder = 0] = "TreeOrder", r[r.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(xn || (xn = {}));
function bf(r) {
  let {
    acceleration: e,
    activator: t = Tr.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: s,
    interval: o = 5,
    order: a = xn.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: h
  } = r;
  const m = wf({
    delta: u,
    disabled: !s
  }), [g, y] = Au(), v = Y({
    x: 0,
    y: 0
  }), A = Y({
    x: 0,
    y: 0
  }), _ = H(() => {
    switch (t) {
      case Tr.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Tr.DraggableRect:
        return i;
    }
  }, [t, i, l]), S = Y(null), k = K(() => {
    const x = S.current;
    if (!x)
      return;
    const w = v.current.x * A.current.x, R = v.current.y * A.current.y;
    x.scrollBy(w, R);
  }, []), b = H(() => a === xn.TreeOrder ? [...c].reverse() : c, [a, c]);
  ie(
    () => {
      if (!s || !c.length || !_) {
        y();
        return;
      }
      for (const x of b) {
        if (n?.(x) === !1)
          continue;
        const w = c.indexOf(x), R = d[w];
        if (!R)
          continue;
        const {
          direction: z,
          speed: F
        } = af(x, R, _, e, h);
        for (const T of ["x", "y"])
          m[T][z[T]] || (F[T] = 0, z[T] = 0);
        if (F.x > 0 || F.y > 0) {
          y(), S.current = x, g(k, o), v.current = F, A.current = z;
          return;
        }
      }
      v.current = {
        x: 0,
        y: 0
      }, A.current = {
        x: 0,
        y: 0
      }, y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      k,
      n,
      y,
      s,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(_),
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
const xf = {
  x: {
    [Ie.Backward]: !1,
    [Ie.Forward]: !1
  },
  y: {
    [Ie.Backward]: !1,
    [Ie.Forward]: !1
  }
};
function wf(r) {
  let {
    delta: e,
    disabled: t
  } = r;
  const n = vn(e);
  return Zr((i) => {
    if (t || !n || !i)
      return xf;
    const s = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [Ie.Backward]: i.x[Ie.Backward] || s.x === -1,
        [Ie.Forward]: i.x[Ie.Forward] || s.x === 1
      },
      y: {
        [Ie.Backward]: i.y[Ie.Backward] || s.y === -1,
        [Ie.Forward]: i.y[Ie.Forward] || s.y === 1
      }
    };
  }, [t, e, n]);
}
function _f(r, e) {
  const t = e != null ? r.get(e) : void 0, n = t ? t.node.current : null;
  return Zr((i) => {
    var s;
    return e == null ? null : (s = n ?? i) != null ? s : null;
  }, [n, e]);
}
function Cf(r, e) {
  return H(() => r.reduce((t, n) => {
    const {
      sensor: i
    } = n, s = i.activators.map((o) => ({
      eventName: o.eventName,
      handler: e(o.handler, n)
    }));
    return [...t, ...s];
  }, []), [r, e]);
}
var Hr;
(function(r) {
  r[r.Always = 0] = "Always", r[r.BeforeDragging = 1] = "BeforeDragging", r[r.WhileDragging = 2] = "WhileDragging";
})(Hr || (Hr = {}));
var vi;
(function(r) {
  r.Optimized = "optimized";
})(vi || (vi = {}));
const Cs = /* @__PURE__ */ new Map();
function Ef(r, e) {
  let {
    dragging: t,
    dependencies: n,
    config: i
  } = e;
  const [s, o] = re(null), {
    frequency: a,
    measure: l,
    strategy: c
  } = i, d = Y(r), u = v(), h = Br(u), m = K(function(A) {
    A === void 0 && (A = []), !h.current && o((_) => _ === null ? A : _.concat(A.filter((S) => !_.includes(S))));
  }, [h]), g = Y(null), y = Zr((A) => {
    if (u && !t)
      return Cs;
    if (!A || A === Cs || d.current !== r || s != null) {
      const _ = /* @__PURE__ */ new Map();
      for (let S of r) {
        if (!S)
          continue;
        if (s && s.length > 0 && !s.includes(S.id) && S.rect.current) {
          _.set(S.id, S.rect.current);
          continue;
        }
        const k = S.node.current, b = k ? new Hi(l(k), k) : null;
        S.rect.current = b, b && _.set(S.id, b);
      }
      return _;
    }
    return A;
  }, [r, s, t, u, l]);
  return ie(() => {
    d.current = r;
  }, [r]), ie(
    () => {
      u || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), ie(
    () => {
      s && s.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), ie(
    () => {
      u || typeof a != "number" || g.current !== null || (g.current = setTimeout(() => {
        m(), g.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, u, m, ...n]
  ), {
    droppableRects: y,
    measureDroppableContainers: m,
    measuringScheduled: s != null
  };
  function v() {
    switch (c) {
      case Hr.Always:
        return !1;
      case Hr.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Gi(r, e) {
  return Zr((t) => r ? t || (typeof e == "function" ? e(r) : r) : null, [e, r]);
}
function Sf(r, e) {
  return Gi(r, e);
}
function kf(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Vn(e), i = H(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return ie(() => () => i?.disconnect(), [i]), i;
}
function $n(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const n = Vn(e), i = H(
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
  return ie(() => () => i?.disconnect(), [i]), i;
}
function Df(r) {
  return new Hi(yr(r), r);
}
function Es(r, e, t) {
  e === void 0 && (e = Df);
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
  const o = kf({
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
  }), a = $n({
    callback: s
  });
  return pt(() => {
    s(), r ? (a?.observe(r), o?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), o?.disconnect());
  }, [r]), n;
}
function Nf(r) {
  const e = Gi(r);
  return ea(r, e);
}
const Ss = [];
function Rf(r) {
  const e = Y(r), t = Zr((n) => r ? n && n !== Ss && r && e.current && r.parentNode === e.current.parentNode ? n : jn(r) : Ss, [r]);
  return ie(() => {
    e.current = r;
  }, [r]), t;
}
function Af(r) {
  const [e, t] = re(null), n = Y(r), i = K((s) => {
    const o = ti(s.target);
    o && t((a) => a ? (a.set(o, pi(o)), new Map(a)) : null);
  }, []);
  return ie(() => {
    const s = n.current;
    if (r !== s) {
      o(s);
      const a = r.map((l) => {
        const c = ti(l);
        return c ? (c.addEventListener("scroll", i, {
          passive: !0
        }), [c, pi(c)]) : null;
      }).filter((l) => l != null);
      t(a.length ? new Map(a) : null), n.current = r;
    }
    return () => {
      o(r), o(s);
    };
    function o(a) {
      a.forEach((l) => {
        const c = ti(l);
        c?.removeEventListener("scroll", i);
      });
    }
  }, [i, r]), H(() => r.length ? e ? Array.from(e.values()).reduce((s, o) => cr(s, o), gt) : aa(r) : gt, [r, e]);
}
function ks(r, e) {
  e === void 0 && (e = []);
  const t = Y(null);
  return ie(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), ie(() => {
    const n = r !== gt;
    n && !t.current && (t.current = r), !n && t.current && (t.current = null);
  }, [r]), t.current ? Vr(r, t.current) : gt;
}
function Tf(r) {
  ie(
    () => {
      if (!Bn)
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
function Of(r, e) {
  return H(() => r.reduce((t, n) => {
    let {
      eventName: i,
      handler: s
    } = n;
    return t[i] = (o) => {
      s(o, e);
    }, t;
  }, {}), [r, e]);
}
function da(r) {
  return H(() => r ? rf(r) : null, [r]);
}
const Ds = [];
function Mf(r, e) {
  e === void 0 && (e = yr);
  const [t] = r, n = da(t ? Ue(t) : null), [i, s] = re(Ds);
  function o() {
    s(() => r.length ? r.map((l) => sa(l) ? n : new Hi(e(l), l)) : Ds);
  }
  const a = $n({
    callback: o
  });
  return pt(() => {
    a?.disconnect(), o(), r.forEach((l) => a?.observe(l));
  }, [r]), i;
}
function ua(r) {
  if (!r)
    return null;
  if (r.children.length > 1)
    return r;
  const e = r.children[0];
  return Ur(e) ? e : r;
}
function Ff(r) {
  let {
    measure: e
  } = r;
  const [t, n] = re(null), i = K((c) => {
    for (const {
      target: d
    } of c)
      if (Ur(d)) {
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
  }, [e]), s = $n({
    callback: i
  }), o = K((c) => {
    const d = ua(c);
    s?.disconnect(), d && s?.observe(d), n(d ? e(d) : null);
  }, [e, s]), [a, l] = gn(o);
  return H(() => ({
    nodeRef: a,
    rect: t,
    setRef: l
  }), [t, a, l]);
}
const Lf = [{
  sensor: Wi,
  options: {}
}, {
  sensor: ji,
  options: {}
}], If = {
  current: {}
}, on = {
  draggable: {
    measure: bs
  },
  droppable: {
    measure: bs,
    strategy: Hr.WhileDragging,
    frequency: vi.Optimized
  },
  dragOverlay: {
    measure: yr
  }
};
class Or extends Map {
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
const Pf = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Or(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: bn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: on,
  measureDroppableContainers: bn,
  windowRect: null,
  measuringScheduled: !1
}, fa = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: bn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: bn
}, Kr = /* @__PURE__ */ vt(fa), ha = /* @__PURE__ */ vt(Pf);
function zf() {
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
      containers: new Or()
    }
  };
}
function Bf(r, e) {
  switch (e.type) {
    case Fe.DragStart:
      return {
        ...r,
        draggable: {
          ...r.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case Fe.DragMove:
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
    case Fe.DragEnd:
    case Fe.DragCancel:
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
    case Fe.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: n
      } = t, i = new Or(r.droppable.containers);
      return i.set(n, t), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: i
        }
      };
    }
    case Fe.SetDroppableDisabled: {
      const {
        id: t,
        key: n,
        disabled: i
      } = e, s = r.droppable.containers.get(t);
      if (!s || n !== s.key)
        return r;
      const o = new Or(r.droppable.containers);
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
    case Fe.UnregisterDroppable: {
      const {
        id: t,
        key: n
      } = e, i = r.droppable.containers.get(t);
      if (!i || n !== i.key)
        return r;
      const s = new Or(r.droppable.containers);
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
function Vf(r) {
  let {
    disabled: e
  } = r;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: i
  } = dt(Kr), s = vn(n), o = vn(t?.id);
  return ie(() => {
    if (!e && !n && s && o != null) {
      if (!Hn(s) || document.activeElement === s.target)
        return;
      const a = i.get(o);
      if (!a)
        return;
      const {
        activatorNode: l,
        node: c
      } = a;
      if (!l.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [l.current, c.current]) {
          if (!d)
            continue;
          const u = Mu(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, i, o, s]), null;
}
function ma(r, e) {
  let {
    transform: t,
    ...n
  } = e;
  return r != null && r.length ? r.reduce((i, s) => s({
    transform: i,
    ...n
  }), t) : t;
}
function Hf(r) {
  return H(
    () => ({
      draggable: {
        ...on.draggable,
        ...r?.draggable
      },
      droppable: {
        ...on.droppable,
        ...r?.droppable
      },
      dragOverlay: {
        ...on.dragOverlay,
        ...r?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r?.draggable, r?.droppable, r?.dragOverlay]
  );
}
function jf(r) {
  let {
    activeNode: e,
    measure: t,
    initialRect: n,
    config: i = !0
  } = r;
  const s = Y(!1), {
    x: o,
    y: a
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  pt(() => {
    if (!o && !a || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !n)
      return;
    const c = e?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = t(c), u = ea(d, n);
    if (o || (u.x = 0), a || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = ra(c);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, o, a, n, t]);
}
const Wn = /* @__PURE__ */ vt({
  ...gt,
  scaleX: 1,
  scaleY: 1
});
var It;
(function(r) {
  r[r.Uninitialized = 0] = "Uninitialized", r[r.Initializing = 1] = "Initializing", r[r.Initialized = 2] = "Initialized";
})(It || (It = {}));
const $f = /* @__PURE__ */ Wc(function(e) {
  var t, n, i, s;
  let {
    id: o,
    accessibility: a,
    autoScroll: l = !0,
    children: c,
    sensors: d = Lf,
    collisionDetection: u = Xu,
    measuring: h,
    modifiers: m,
    ...g
  } = e;
  const y = Gc(Bf, void 0, zf), [v, A] = y, [_, S] = Bu(), [k, b] = re(It.Uninitialized), x = k === It.Initialized, {
    draggable: {
      active: w,
      nodes: R,
      translate: z
    },
    droppable: {
      containers: F
    }
  } = v, T = w != null ? R.get(w) : null, D = Y({
    initial: null,
    translated: null
  }), O = H(() => {
    var Ve;
    return w != null ? {
      id: w,
      // It's possible for the active node to unmount while dragging
      data: (Ve = T?.data) != null ? Ve : If,
      rect: D
    } : null;
  }, [w, T]), G = Y(null), [I, U] = re(null), [j, ne] = re(null), ce = Br(g, Object.values(g)), he = qr("DndDescribedBy", o), Pe = H(() => F.getEnabled(), [F]), we = Hf(h), {
    droppableRects: ke,
    measureDroppableContainers: Le,
    measuringScheduled: me
  } = Ef(Pe, {
    dragging: x,
    dependencies: [z.x, z.y],
    config: we.droppable
  }), de = _f(R, w), Se = H(() => j ? yn(j) : null, [j]), se = Zl(), ee = Sf(de, we.draggable.measure);
  jf({
    activeNode: w != null ? R.get(w) : null,
    config: se.layoutShiftCompensation,
    initialRect: ee,
    measure: we.draggable.measure
  });
  const $ = Es(de, we.draggable.measure, ee), De = Es(de ? de.parentElement : null), Te = Y({
    activatorEvent: null,
    active: null,
    activeNode: de,
    collisionRect: null,
    collisions: null,
    droppableRects: ke,
    draggableNodes: R,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: F,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), He = F.getNodeFor((t = Te.current.over) == null ? void 0 : t.id), Ne = Ff({
    measure: we.dragOverlay.measure
  }), rt = (n = Ne.nodeRef.current) != null ? n : de, Be = x ? (i = Ne.rect) != null ? i : $ : null, ft = !!(Ne.nodeRef.current && Ne.rect), p = Nf(ft ? null : $), C = da(rt ? Ue(rt) : null), N = Rf(x ? He ?? de : null), B = Mf(N), M = ma(m, {
    transform: {
      x: z.x - p.x,
      y: z.y - p.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: j,
    active: O,
    activeNodeRect: $,
    containerNodeRect: De,
    draggingNodeRect: Be,
    over: Te.current.over,
    overlayNodeRect: Ne.rect,
    scrollableAncestors: N,
    scrollableAncestorRects: B,
    windowRect: C
  }), L = Se ? cr(Se, z) : null, Z = Af(N), oe = ks(Z), Ce = ks(Z, [$]), _e = cr(M, oe), je = Be ? Qu(Be, M) : null, Ut = O && je ? u({
    active: O,
    collisionRect: je,
    droppableRects: ke,
    droppableContainers: Pe,
    pointerCoordinates: L
  }) : null, Qt = Qo(Ut, "id"), [nt, Jr] = re(null), Qr = ft ? M : cr(M, Ce), Xn = Yu(Qr, (s = nt?.rect) != null ? s : null, $), er = Y(null), as = K(
    (Ve, Xe) => {
      let {
        sensor: Ye,
        options: Ot
      } = Xe;
      if (G.current == null)
        return;
      const it = R.get(G.current);
      if (!it)
        return;
      const Je = Ve.nativeEvent, bt = new Ye({
        active: G.current,
        activeNode: it,
        event: Je,
        options: Ot,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Te,
        onAbort(ze) {
          if (!R.get(ze))
            return;
          const {
            onDragAbort: xt
          } = ce.current, Dt = {
            id: ze
          };
          xt?.(Dt), _({
            type: "onDragAbort",
            event: Dt
          });
        },
        onPending(ze, Mt, xt, Dt) {
          if (!R.get(ze))
            return;
          const {
            onDragPending: wr
          } = ce.current, Ft = {
            id: ze,
            constraint: Mt,
            initialCoordinates: xt,
            offset: Dt
          };
          wr?.(Ft), _({
            type: "onDragPending",
            event: Ft
          });
        },
        onStart(ze) {
          const Mt = G.current;
          if (Mt == null)
            return;
          const xt = R.get(Mt);
          if (!xt)
            return;
          const {
            onDragStart: Dt
          } = ce.current, xr = {
            activatorEvent: Je,
            active: {
              id: Mt,
              data: xt.data,
              rect: D
            }
          };
          en(() => {
            Dt?.(xr), b(It.Initializing), A({
              type: Fe.DragStart,
              initialCoordinates: ze,
              active: Mt
            }), _({
              type: "onDragStart",
              event: xr
            }), U(er.current), ne(Je);
          });
        },
        onMove(ze) {
          A({
            type: Fe.DragMove,
            coordinates: ze
          });
        },
        onEnd: tr(Fe.DragEnd),
        onCancel: tr(Fe.DragCancel)
      });
      er.current = bt;
      function tr(ze) {
        return async function() {
          const {
            active: xt,
            collisions: Dt,
            over: xr,
            scrollAdjustedTranslate: wr
          } = Te.current;
          let Ft = null;
          if (xt && wr) {
            const {
              cancelDrop: _r
            } = ce.current;
            Ft = {
              activatorEvent: Je,
              active: xt,
              collisions: Dt,
              delta: wr,
              over: xr
            }, ze === Fe.DragEnd && typeof _r == "function" && await Promise.resolve(_r(Ft)) && (ze = Fe.DragCancel);
          }
          G.current = null, en(() => {
            A({
              type: ze
            }), b(It.Uninitialized), Jr(null), U(null), ne(null), er.current = null;
            const _r = ze === Fe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ft) {
              const Yn = ce.current[_r];
              Yn?.(Ft), _({
                type: _r,
                event: Ft
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [R]
  ), Wl = K((Ve, Xe) => (Ye, Ot) => {
    const it = Ye.nativeEvent, Je = R.get(Ot);
    if (
      // Another sensor is already instantiating
      G.current !== null || // No active draggable
      !Je || // Event has already been captured
      it.dndKit || it.defaultPrevented
    )
      return;
    const bt = {
      active: Je
    };
    Ve(Ye, Xe.options, bt) === !0 && (it.dndKit = {
      capturedBy: Xe.sensor
    }, G.current = Ot, as(Ye, Xe));
  }, [R, as]), ls = Cf(d, Wl);
  Tf(d), pt(() => {
    $ && k === It.Initializing && b(It.Initialized);
  }, [$, k]), ie(
    () => {
      const {
        onDragMove: Ve
      } = ce.current, {
        active: Xe,
        activatorEvent: Ye,
        collisions: Ot,
        over: it
      } = Te.current;
      if (!Xe || !Ye)
        return;
      const Je = {
        active: Xe,
        activatorEvent: Ye,
        collisions: Ot,
        delta: {
          x: _e.x,
          y: _e.y
        },
        over: it
      };
      en(() => {
        Ve?.(Je), _({
          type: "onDragMove",
          event: Je
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [_e.x, _e.y]
  ), ie(
    () => {
      const {
        active: Ve,
        activatorEvent: Xe,
        collisions: Ye,
        droppableContainers: Ot,
        scrollAdjustedTranslate: it
      } = Te.current;
      if (!Ve || G.current == null || !Xe || !it)
        return;
      const {
        onDragOver: Je
      } = ce.current, bt = Ot.get(Qt), tr = bt && bt.rect.current ? {
        id: bt.id,
        rect: bt.rect.current,
        data: bt.data,
        disabled: bt.disabled
      } : null, ze = {
        active: Ve,
        activatorEvent: Xe,
        collisions: Ye,
        delta: {
          x: it.x,
          y: it.y
        },
        over: tr
      };
      en(() => {
        Jr(tr), Je?.(ze), _({
          type: "onDragOver",
          event: ze
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Qt]
  ), pt(() => {
    Te.current = {
      activatorEvent: j,
      active: O,
      activeNode: de,
      collisionRect: je,
      collisions: Ut,
      droppableRects: ke,
      draggableNodes: R,
      draggingNode: rt,
      draggingNodeRect: Be,
      droppableContainers: F,
      over: nt,
      scrollableAncestors: N,
      scrollAdjustedTranslate: _e
    }, D.current = {
      initial: Be,
      translated: je
    };
  }, [O, de, Ut, je, R, rt, Be, ke, F, nt, N, _e]), bf({
    ...se,
    delta: z,
    draggingRect: je,
    pointerCoordinates: L,
    scrollableAncestors: N,
    scrollableAncestorRects: B
  });
  const Gl = H(() => ({
    active: O,
    activeNode: de,
    activeNodeRect: $,
    activatorEvent: j,
    collisions: Ut,
    containerNodeRect: De,
    dragOverlay: Ne,
    draggableNodes: R,
    droppableContainers: F,
    droppableRects: ke,
    over: nt,
    measureDroppableContainers: Le,
    scrollableAncestors: N,
    scrollableAncestorRects: B,
    measuringConfiguration: we,
    measuringScheduled: me,
    windowRect: C
  }), [O, de, $, j, Ut, De, Ne, R, F, ke, nt, Le, N, B, we, me, C]), Ul = H(() => ({
    activatorEvent: j,
    activators: ls,
    active: O,
    activeNodeRect: $,
    ariaDescribedById: {
      draggable: he
    },
    dispatch: A,
    draggableNodes: R,
    over: nt,
    measureDroppableContainers: Le
  }), [j, ls, O, $, A, he, R, nt, Le]);
  return q.createElement(Jo.Provider, {
    value: S
  }, q.createElement(Kr.Provider, {
    value: Ul
  }, q.createElement(ha.Provider, {
    value: Gl
  }, q.createElement(Wn.Provider, {
    value: Xn
  }, c)), q.createElement(Vf, {
    disabled: a?.restoreFocus === !1
  })), q.createElement(ju, {
    ...a,
    hiddenTextDescribedById: he
  }));
  function Zl() {
    const Ve = I?.autoScrollEnabled === !1, Xe = typeof l == "object" ? l.enabled === !1 : l === !1, Ye = x && !Ve && !Xe;
    return typeof l == "object" ? {
      ...l,
      enabled: Ye
    } : {
      enabled: Ye
    };
  }
}), Wf = /* @__PURE__ */ vt(null), Ns = "button", Gf = "Draggable";
function Uf(r) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: i
  } = r;
  const s = qr(Gf), {
    activators: o,
    activatorEvent: a,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: h
  } = dt(Kr), {
    role: m = Ns,
    roleDescription: g = "draggable",
    tabIndex: y = 0
  } = i ?? {}, v = l?.id === e, A = dt(v ? Wn : Wf), [_, S] = gn(), [k, b] = gn(), x = Of(o, e), w = Br(t);
  pt(
    () => (u.set(e, {
      id: e,
      key: s,
      node: _,
      activatorNode: k,
      data: w
    }), () => {
      const z = u.get(e);
      z && z.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const R = H(() => ({
    role: m,
    tabIndex: y,
    "aria-disabled": n,
    "aria-pressed": v && m === Ns ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": d.draggable
  }), [n, m, y, v, g, d.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: c,
    attributes: R,
    isDragging: v,
    listeners: n ? void 0 : x,
    node: _,
    over: h,
    setNodeRef: S,
    setActivatorNodeRef: b,
    transform: A
  };
}
function pa() {
  return dt(ha);
}
const Zf = "Droppable", qf = {
  timeout: 25
};
function Kf(r) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: i
  } = r;
  const s = qr(Zf), {
    active: o,
    dispatch: a,
    over: l,
    measureDroppableContainers: c
  } = dt(Kr), d = Y({
    disabled: t
  }), u = Y(!1), h = Y(null), m = Y(null), {
    disabled: g,
    updateMeasurementsFor: y,
    timeout: v
  } = {
    ...qf,
    ...i
  }, A = Br(y ?? n), _ = K(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        c(Array.isArray(A.current) ? A.current : [A.current]), m.current = null;
      }, v);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  ), S = $n({
    callback: _,
    disabled: g || !o
  }), k = K((R, z) => {
    S && (z && (S.unobserve(z), u.current = !1), R && S.observe(R));
  }, [S]), [b, x] = gn(k), w = Br(e);
  return ie(() => {
    !S || !b.current || (S.disconnect(), u.current = !1, S.observe(b.current));
  }, [b, S]), ie(
    () => (a({
      type: Fe.RegisterDroppable,
      element: {
        id: n,
        key: s,
        disabled: t,
        node: b,
        rect: h,
        data: w
      }
    }), () => a({
      type: Fe.UnregisterDroppable,
      key: s,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), ie(() => {
    t !== d.current.disabled && (a({
      type: Fe.SetDroppableDisabled,
      id: n,
      key: s,
      disabled: t
    }), d.current.disabled = t);
  }, [n, s, t, a]), {
    active: o,
    rect: h,
    isOver: l?.id === n,
    node: b,
    over: l,
    setNodeRef: x
  };
}
function Xf(r) {
  let {
    animation: e,
    children: t
  } = r;
  const [n, i] = re(null), [s, o] = re(null), a = vn(t);
  return !t && !n && a && i(a), pt(() => {
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
  }, [e, n, s]), q.createElement(q.Fragment, null, t, n ? Uc(n, {
    ref: o
  }) : null);
}
const Yf = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Jf(r) {
  let {
    children: e
  } = r;
  return q.createElement(Kr.Provider, {
    value: fa
  }, q.createElement(Wn.Provider, {
    value: Yf
  }, e));
}
const Qf = {
  position: "fixed",
  touchAction: "none"
}, eh = (r) => Hn(r) ? "transform 250ms ease" : void 0, th = /* @__PURE__ */ Ge((r, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: i,
    children: s,
    className: o,
    rect: a,
    style: l,
    transform: c,
    transition: d = eh
  } = r;
  if (!a)
    return null;
  const u = i ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...Qf,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: Ht.Transform.toString(u),
    transformOrigin: i && n ? Gu(n, a) : void 0,
    transition: typeof d == "function" ? d(n) : d,
    ...l
  };
  return q.createElement(t, {
    className: o,
    style: h,
    ref: e
  }, s);
}), rh = (r) => (e) => {
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
    for (const [l, c] of Object.entries(i))
      t.node.style.setProperty(l, c);
    o != null && o.active && t.node.classList.remove(o.active);
  };
}, nh = (r) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = r;
  return [{
    transform: Ht.Transform.toString(e)
  }, {
    transform: Ht.Transform.toString(t)
  }];
}, ih = {
  duration: 250,
  easing: "ease",
  keyframes: nh,
  sideEffects: /* @__PURE__ */ rh({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function sh(r) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: i
  } = r;
  return Vn((s, o) => {
    if (e === null)
      return;
    const a = t.get(s);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const c = ua(o);
    if (!c)
      return;
    const {
      transform: d
    } = Ue(o).getComputedStyle(o), u = ta(d);
    if (!u)
      return;
    const h = typeof e == "function" ? e : oh(e);
    return la(l, i.draggable.measure), h({
      active: {
        id: s,
        data: a.data,
        node: l,
        rect: i.draggable.measure(l)
      },
      draggableNodes: t,
      dragOverlay: {
        node: o,
        rect: i.dragOverlay.measure(c)
      },
      droppableContainers: n,
      measuringConfiguration: i,
      transform: u
    });
  });
}
function oh(r) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: i
  } = {
    ...ih,
    ...r
  };
  return (s) => {
    let {
      active: o,
      dragOverlay: a,
      transform: l,
      ...c
    } = s;
    if (!e)
      return;
    const d = {
      x: a.rect.left - o.rect.left,
      y: a.rect.top - o.rect.top
    }, u = {
      scaleX: l.scaleX !== 1 ? o.rect.width * l.scaleX / a.rect.width : 1,
      scaleY: l.scaleY !== 1 ? o.rect.height * l.scaleY / a.rect.height : 1
    }, h = {
      x: l.x - d.x,
      y: l.y - d.y,
      ...u
    }, m = i({
      ...c,
      active: o,
      dragOverlay: a,
      transform: {
        initial: l,
        final: h
      }
    }), [g] = m, y = m[m.length - 1];
    if (JSON.stringify(g) === JSON.stringify(y))
      return;
    const v = n?.({
      active: o,
      dragOverlay: a,
      ...c
    }), A = a.node.animate(m, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((_) => {
      A.onfinish = () => {
        v?.(), _();
      };
    });
  };
}
let Rs = 0;
function ah(r) {
  return H(() => {
    if (r != null)
      return Rs++, Rs;
  }, [r]);
}
const lh = /* @__PURE__ */ q.memo((r) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: n,
    style: i,
    transition: s,
    modifiers: o,
    wrapperElement: a = "div",
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
    dragOverlay: v,
    over: A,
    measuringConfiguration: _,
    scrollableAncestors: S,
    scrollableAncestorRects: k,
    windowRect: b
  } = pa(), x = dt(Wn), w = ah(u?.id), R = ma(o, {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: v.rect,
    over: A,
    overlayNodeRect: v.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: k,
    transform: x,
    windowRect: b
  }), z = Gi(h), F = sh({
    config: n,
    draggableNodes: g,
    droppableContainers: y,
    measuringConfiguration: _
  }), T = z ? v.setRef : void 0;
  return q.createElement(Jf, null, q.createElement(Xf, {
    animation: F
  }, u && w ? q.createElement(th, {
    key: w,
    id: u.id,
    ref: T,
    as: a,
    activatorEvent: d,
    adjustScale: e,
    className: l,
    transition: s,
    rect: z,
    style: {
      zIndex: c,
      ...i
    },
    transform: R
  }, t) : null));
});
function Ui(r, e, t) {
  const n = r.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function ch(r, e) {
  return r.reduce((t, n, i) => {
    const s = e.get(n);
    return s && (t[i] = s), t;
  }, Array(r.length));
}
function nn(r) {
  return r !== null && r >= 0;
}
function dh(r, e) {
  if (r === e)
    return !0;
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function uh(r) {
  return typeof r == "boolean" ? {
    draggable: r,
    droppable: r
  } : r;
}
const ga = (r) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: i
  } = r;
  const s = Ui(e, n, t), o = e[i], a = s[i];
  return !a || !o ? null : {
    x: a.left - o.left,
    y: a.top - o.top,
    scaleX: a.width / o.width,
    scaleY: a.height / o.height
  };
}, va = "Sortable", ya = /* @__PURE__ */ q.createContext({
  activeIndex: -1,
  containerId: va,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: ga,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function fh(r) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: i = ga,
    disabled: s = !1
  } = r;
  const {
    active: o,
    dragOverlay: a,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = pa(), u = qr(va, t), h = a.rect !== null, m = H(() => n.map((x) => typeof x == "object" && "id" in x ? x.id : x), [n]), g = o != null, y = o ? m.indexOf(o.id) : -1, v = c ? m.indexOf(c.id) : -1, A = Y(m), _ = !dh(m, A.current), S = v !== -1 && y === -1 || _, k = uh(s);
  pt(() => {
    _ && g && d(m);
  }, [_, m, g, d]), ie(() => {
    A.current = m;
  }, [m]);
  const b = H(
    () => ({
      activeIndex: y,
      containerId: u,
      disabled: k,
      disableTransforms: S,
      items: m,
      overIndex: v,
      useDragOverlay: h,
      sortedRects: ch(m, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, u, k.draggable, k.droppable, S, m, v, l, h, i]
  );
  return q.createElement(ya.Provider, {
    value: b
  }, e);
}
const hh = (r) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: i
  } = r;
  return Ui(t, n, i).indexOf(e);
}, mh = (r) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: n,
    index: i,
    items: s,
    newIndex: o,
    previousItems: a,
    previousContainerId: l,
    transition: c
  } = r;
  return !c || !n || a !== s && i === o ? !1 : t ? !0 : o !== i && e === l;
}, ph = {
  duration: 200,
  easing: "ease"
}, ba = "transform", gh = /* @__PURE__ */ Ht.Transition.toString({
  property: ba,
  duration: 0,
  easing: "linear"
}), vh = {
  roleDescription: "sortable"
};
function yh(r) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: i
  } = r;
  const [s, o] = re(null), a = Y(t);
  return pt(() => {
    if (!e && t !== a.current && n.current) {
      const l = i.current;
      if (l) {
        const c = yr(n.current, {
          ignoreTransform: !0
        }), d = {
          x: l.left - c.left,
          y: l.top - c.top,
          scaleX: l.width / c.width,
          scaleY: l.height / c.height
        };
        (d.x || d.y) && o(d);
      }
    }
    t !== a.current && (a.current = t);
  }, [e, t, n, i]), ie(() => {
    s && o(null);
  }, [s]), s;
}
function bh(r) {
  let {
    animateLayoutChanges: e = mh,
    attributes: t,
    disabled: n,
    data: i,
    getNewIndex: s = hh,
    id: o,
    strategy: a,
    resizeObserverConfig: l,
    transition: c = ph
  } = r;
  const {
    items: d,
    containerId: u,
    activeIndex: h,
    disabled: m,
    disableTransforms: g,
    sortedRects: y,
    overIndex: v,
    useDragOverlay: A,
    strategy: _
  } = dt(ya), S = xh(n, m), k = d.indexOf(o), b = H(() => ({
    sortable: {
      containerId: u,
      index: k,
      items: d
    },
    ...i
  }), [u, i, k, d]), x = H(() => d.slice(d.indexOf(o)), [d, o]), {
    rect: w,
    node: R,
    isOver: z,
    setNodeRef: F
  } = Kf({
    id: o,
    data: b,
    disabled: S.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: x,
      ...l
    }
  }), {
    active: T,
    activatorEvent: D,
    activeNodeRect: O,
    attributes: G,
    setNodeRef: I,
    listeners: U,
    isDragging: j,
    over: ne,
    setActivatorNodeRef: ce,
    transform: he
  } = Uf({
    id: o,
    data: b,
    attributes: {
      ...vh,
      ...t
    },
    disabled: S.draggable
  }), Pe = Ru(F, I), we = !!T, ke = we && !g && nn(h) && nn(v), Le = !A && j, me = Le && ke ? he : null, Se = ke ? me ?? (a ?? _)({
    rects: y,
    activeNodeRect: O,
    activeIndex: h,
    overIndex: v,
    index: k
  }) : null, se = nn(h) && nn(v) ? s({
    id: o,
    items: d,
    activeIndex: h,
    overIndex: v
  }) : k, ee = T?.id, $ = Y({
    activeId: ee,
    items: d,
    newIndex: se,
    containerId: u
  }), De = d !== $.current.items, Te = e({
    active: T,
    containerId: u,
    isDragging: j,
    isSorting: we,
    id: o,
    index: k,
    items: d,
    newIndex: $.current.newIndex,
    previousItems: $.current.items,
    previousContainerId: $.current.containerId,
    transition: c,
    wasDragging: $.current.activeId != null
  }), He = yh({
    disabled: !Te,
    index: k,
    node: R,
    rect: w
  });
  return ie(() => {
    we && $.current.newIndex !== se && ($.current.newIndex = se), u !== $.current.containerId && ($.current.containerId = u), d !== $.current.items && ($.current.items = d);
  }, [we, se, u, d]), ie(() => {
    if (ee === $.current.activeId)
      return;
    if (ee != null && $.current.activeId == null) {
      $.current.activeId = ee;
      return;
    }
    const rt = setTimeout(() => {
      $.current.activeId = ee;
    }, 50);
    return () => clearTimeout(rt);
  }, [ee]), {
    active: T,
    activeIndex: h,
    attributes: G,
    data: b,
    rect: w,
    index: k,
    newIndex: se,
    items: d,
    isOver: z,
    isSorting: we,
    isDragging: j,
    listeners: U,
    node: R,
    overIndex: v,
    over: ne,
    setNodeRef: Pe,
    setActivatorNodeRef: ce,
    setDroppableNodeRef: F,
    setDraggableNodeRef: I,
    transform: He ?? Se,
    transition: Ne()
  };
  function Ne() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      He || // Or to prevent items jumping to back to their "new" position when items change
      De && $.current.newIndex === k
    )
      return gh;
    if (!(Le && !Hn(D) || !c) && (we || Te))
      return Ht.Transition.toString({
        ...c,
        property: ba
      });
  }
}
function xh(r, e) {
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
function wn(r) {
  if (!r)
    return !1;
  const e = r.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const wh = [ge.Down, ge.Right, ge.Up, ge.Left], _h = (r, e) => {
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
  if (wh.includes(r.code)) {
    if (r.preventDefault(), !t || !n)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = i.get(u.id);
      if (h)
        switch (r.code) {
          case ge.Down:
            n.top < h.top && l.push(u);
            break;
          case ge.Up:
            n.top > h.top && l.push(u);
            break;
          case ge.Left:
            n.left > h.left && l.push(u);
            break;
          case ge.Right:
            n.left < h.left && l.push(u);
            break;
        }
    });
    const c = qu({
      collisionRect: n,
      droppableRects: i,
      droppableContainers: l
    });
    let d = Qo(c, "id");
    if (d === o?.id && c.length > 1 && (d = c[1].id), d != null) {
      const u = s.get(t.id), h = s.get(d), m = h ? i.get(h.id) : null, g = h?.node.current;
      if (g && m && u && h) {
        const v = jn(g).some((x, w) => a[w] !== x), A = xa(u, h), _ = Ch(u, h), S = v || !A ? {
          x: 0,
          y: 0
        } : {
          x: _ ? n.width - m.width : 0,
          y: _ ? n.height - m.height : 0
        }, k = {
          x: m.left,
          y: m.top
        };
        return S.x && S.y ? k : Vr(k, S);
      }
    }
  }
};
function xa(r, e) {
  return !wn(r) || !wn(e) ? !1 : r.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Ch(r, e) {
  return !wn(r) || !wn(e) || !xa(r, e) ? !1 : r.data.current.sortable.index < e.data.current.sortable.index;
}
const As = ({ id: r, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: i, transform: s, transition: o } = bh({ id: r }), a = {
    transform: Ht.Translate.toString(s),
    transition: o,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return /* @__PURE__ */ f("div", { ref: i, style: a, ...t, ...n, children: e });
}, Zi = ({
  blocks: r,
  sortable: e = !1,
  onSort: t = () => {
  },
  main: n = !1
}) => {
  const [i, s] = re([]);
  ho(() => {
    s(
      r.map((u, h) => ({
        id: u.id ?? h.toString(),
        render: u.render
      }))
    );
  }, [r]);
  const [o, a] = re(null), l = $u(
    vs(Wi),
    vs(ji, {
      coordinateGetter: _h
    })
  ), c = (u) => {
    a(u.active.id);
  }, d = (u) => {
    const { active: h, over: m } = u;
    a(null), m && h.id !== m.id && s((g) => {
      const y = g.findIndex((A) => A.id === h.id), v = g.findIndex((A) => A.id === m.id);
      return Ui(g, y, v);
    });
  };
  return /* @__PURE__ */ f("div", { className: le("flex flex-wrap items-stretch gap-4", n && "flex-1"), children: /* @__PURE__ */ W(
    $f,
    {
      sensors: l,
      onDragStart: c,
      onDragEnd: d,
      children: [
        /* @__PURE__ */ f(fh, { items: i, children: i.map((u) => /* @__PURE__ */ f(As, { id: u.id, children: u.render }, u.id)) }),
        /* @__PURE__ */ f(lh, { children: o ? /* @__PURE__ */ f(As, { id: o, children: i.find((u) => u.id === o)?.render }) : null })
      ]
    }
  ) });
};
Zi.displayName = "GroupMasonry";
Zi.__isPageLayoutGroup = !0;
const Eh = Ge(function({ children: e, aside: t, header: n, variant: i = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && Ko("Page", e, ["block", "group"]), /* @__PURE__ */ f("div", { ref: s, className: "h-full", children: /* @__PURE__ */ W(
    "div",
    {
      className: le(
        "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
        "flex-col",
        "overflow-y-auto",
        "md:sticky md:top-0 md:max-h-full"
      ),
      children: [
        /* @__PURE__ */ W(
          "main",
          {
            className: le(
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
                  className: le(
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
            className: le(
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
}), dv = {
  Page: ye(lt("Page", Eh)),
  Block: ye(lt("Block", zn)),
  BlockContent: ye(
    lt("BlockContent", ku)
  ),
  Group: ye(lt("Group", zi)),
  GroupGrid: ye(
    lt("GroupGrid", Pn)
  ),
  GroupMasonry: ye(
    lt("GroupMasonry", Zi)
  )
}, uv = Kd, fv = Yd, hv = ye(
  tt(
    {
      name: "HomeLayout",
      type: "layout"
    },
    Zd
  )
);
function dr(r) {
  "@babel/helpers - typeof";
  return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, dr(r);
}
function Sh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function kh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Ca(n.key), n);
  }
}
function Dh(r, e, t) {
  return e && kh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Nh(r, e, t) {
  return e = _n(e), Rh(r, wa() ? Reflect.construct(e, t || [], _n(r).constructor) : e.apply(r, t));
}
function Rh(r, e) {
  if (e && (dr(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ah(r);
}
function Ah(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function wa() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wa = function() {
    return !!r;
  })();
}
function _n(r) {
  return _n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _n(r);
}
function Th(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && yi(r, e);
}
function yi(r, e) {
  return yi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, yi(r, e);
}
function _a(r, e, t) {
  return e = Ca(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Ca(r) {
  var e = Oh(r, "string");
  return dr(e) == "symbol" ? e : e + "";
}
function Oh(r, e) {
  if (dr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Gn = /* @__PURE__ */ (function(r) {
  function e() {
    return Sh(this, e), Nh(this, e, arguments);
  }
  return Th(e, r), Dh(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(q.Component);
_a(Gn, "displayName", "ZAxis");
_a(Gn, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Mh = ["option", "isActive"];
function Mr() {
  return Mr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Mr.apply(this, arguments);
}
function Fh(r, e) {
  if (r == null) return {};
  var t = Lh(r, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function Lh(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
  return t;
}
function Ih(r) {
  var e = r.option, t = r.isActive, n = Fh(r, Mh);
  return typeof e == "string" ? /* @__PURE__ */ q.createElement(ds, Mr({
    option: /* @__PURE__ */ q.createElement(Jc, Mr({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ q.createElement(ds, Mr({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, n));
}
function ur(r) {
  "@babel/helpers - typeof";
  return ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ur(r);
}
function Fr() {
  return Fr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Fr.apply(this, arguments);
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
function st(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ts(Object(t), !0).forEach(function(n) {
      Bt(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ts(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Ph(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Os(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Sa(n.key), n);
  }
}
function zh(r, e, t) {
  return e && Os(r.prototype, e), t && Os(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Bh(r, e, t) {
  return e = Cn(e), Vh(r, Ea() ? Reflect.construct(e, t || [], Cn(r).constructor) : e.apply(r, t));
}
function Vh(r, e) {
  if (e && (ur(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Hh(r);
}
function Hh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ea() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ea = function() {
    return !!r;
  })();
}
function Cn(r) {
  return Cn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Cn(r);
}
function jh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && bi(r, e);
}
function bi(r, e) {
  return bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, bi(r, e);
}
function Bt(r, e, t) {
  return e = Sa(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Sa(r) {
  var e = $h(r, "string");
  return ur(e) == "symbol" ? e : e + "";
}
function $h(r, e) {
  if (ur(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (ur(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Xr = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    Ph(this, e);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return t = Bh(this, e, [].concat(i)), Bt(t, "state", {
      isAnimationFinished: !1
    }), Bt(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), Bt(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), Bt(t, "id", sd("recharts-scatter-")), t;
  }
  return jh(e, r), zh(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, s = this.props, o = s.shape, a = s.activeShape, l = s.activeIndex, c = Jn(this.props, !1);
      return n.map(function(d, u) {
        var h = l === u, m = h ? a : o, g = st(st({}, c), d);
        return /* @__PURE__ */ q.createElement(Cr, Fr({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(d?.cx, "-").concat(d?.cy, "-").concat(d?.size, "-").concat(u)
        }, Qc(i.props, d, u), {
          role: "img"
        }), /* @__PURE__ */ q.createElement(Ih, Fr({
          option: m,
          isActive: h,
          key: "symbol-".concat(u)
        }, g)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, s = i.points, o = i.isAnimationActive, a = i.animationBegin, l = i.animationDuration, c = i.animationEasing, d = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ q.createElement(ed, {
        begin: a,
        duration: l,
        isActive: o,
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
        var m = h.t, g = s.map(function(y, v) {
          var A = u && u[v];
          if (A) {
            var _ = tn(A.cx, y.cx), S = tn(A.cy, y.cy), k = tn(A.size, y.size);
            return st(st({}, y), {}, {
              cx: _(m),
              cy: S(m),
              size: k(m)
            });
          }
          var b = tn(0, y.size);
          return st(st({}, y), {}, {
            size: b(m)
          });
        });
        return /* @__PURE__ */ q.createElement(Cr, null, n.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, s = n.isAnimationActive, o = this.state.prevPoints;
      return s && i && i.length && (!o || !No(o, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, s = i.points, o = i.xAxis, a = i.yAxis, l = i.children, c = Ro(l, td);
      return c ? c.map(function(d, u) {
        var h = d.props, m = h.direction, g = h.dataKey;
        return /* @__PURE__ */ q.cloneElement(d, {
          key: "".concat(m, "-").concat(g, "-").concat(s[u]),
          data: s,
          xAxis: o,
          yAxis: a,
          layout: m === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(v, A) {
            return {
              x: v.cx,
              y: v.cy,
              value: m === "x" ? +v.node.x : +v.node.y,
              errorVal: sn(v, A)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, s = n.line, o = n.lineType, a = n.lineJointType, l = Jn(this.props, !1), c = Jn(s, !1), d, u;
      if (o === "joint")
        d = i.map(function(S) {
          return {
            x: S.cx,
            y: S.cy
          };
        });
      else if (o === "fitting") {
        var h = rd(i), m = h.xmin, g = h.xmax, y = h.a, v = h.b, A = function(k) {
          return y * k + v;
        };
        d = [{
          x: m,
          y: A(m)
        }, {
          x: g,
          y: A(g)
        }];
      }
      var _ = st(st(st({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, c), {}, {
        points: d
      });
      return /* @__PURE__ */ q.isValidElement(s) ? u = /* @__PURE__ */ q.cloneElement(s, _) : nd(s) ? u = s(_) : u = /* @__PURE__ */ q.createElement(id, Fr({}, _, {
        type: a
      })), /* @__PURE__ */ q.createElement(Cr, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, s = n.points, o = n.line, a = n.className, l = n.xAxis, c = n.yAxis, d = n.left, u = n.top, h = n.width, m = n.height, g = n.id, y = n.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var v = this.state.isAnimationFinished, A = Ql("recharts-scatter", a), _ = l && l.allowDataOverflow, S = c && c.allowDataOverflow, k = _ || S, b = ir(g) ? this.id : g;
      return /* @__PURE__ */ q.createElement(Cr, {
        className: A,
        clipPath: k ? "url(#clipPath-".concat(b, ")") : null
      }, _ || S ? /* @__PURE__ */ q.createElement("defs", null, /* @__PURE__ */ q.createElement("clipPath", {
        id: "clipPath-".concat(b)
      }, /* @__PURE__ */ q.createElement("rect", {
        x: _ ? d : d - h / 2,
        y: S ? u : u - m / 2,
        width: _ ? h : h * 2,
        height: S ? m : m * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ q.createElement(Cr, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!y || v) && Ao.renderCallByParent(this.props, s));
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
})(Zc);
Bt(Xr, "displayName", "Scatter");
Bt(Xr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !od.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Bt(Xr, "getComposedData", function(r) {
  var e = r.xAxis, t = r.yAxis, n = r.zAxis, i = r.item, s = r.displayedData, o = r.xAxisTicks, a = r.yAxisTicks, l = r.offset, c = i.props.tooltipType, d = Ro(i.props.children, ad), u = ir(e.dataKey) ? i.props.dataKey : e.dataKey, h = ir(t.dataKey) ? i.props.dataKey : t.dataKey, m = n && n.dataKey, g = n ? n.range : Gn.defaultProps.range, y = g && g[0], v = e.scale.bandwidth ? e.scale.bandwidth() : 0, A = t.scale.bandwidth ? t.scale.bandwidth() : 0, _ = s.map(function(S, k) {
    var b = sn(S, u), x = sn(S, h), w = !ir(m) && sn(S, m) || "-", R = [{
      name: ir(e.dataKey) ? i.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: b,
      payload: S,
      dataKey: u,
      type: c
    }, {
      name: ir(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: x,
      payload: S,
      dataKey: h,
      type: c
    }];
    w !== "-" && R.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: w,
      payload: S,
      dataKey: m,
      type: c
    });
    var z = us({
      axis: e,
      ticks: o,
      bandSize: v,
      entry: S,
      index: k,
      dataKey: u
    }), F = us({
      axis: t,
      ticks: a,
      bandSize: A,
      entry: S,
      index: k,
      dataKey: h
    }), T = w !== "-" ? n.scale(w) : y, D = Math.sqrt(Math.max(T, 0) / Math.PI);
    return st(st({}, S), {}, {
      cx: z,
      cy: F,
      x: z - D,
      y: F - D,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * D,
      height: 2 * D,
      size: T,
      node: {
        x: b,
        y: x,
        z: w
      },
      tooltipPayload: R,
      tooltipPosition: {
        x: z,
        y: F
      },
      payload: S
    }, d && d[k] && d[k].props);
  });
  return st({
    points: _
  }, l);
});
var Wh = ld({
  chartName: "ComposedChart",
  GraphicalChild: [To, cd, Oo, Xr],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Mo
  }, {
    axisType: "yAxis",
    AxisComp: hi
  }, {
    axisType: "zAxis",
    AxisComp: Gn
  }],
  formatAxisMap: dd
});
const Gh = (r) => {
  const e = (t) => {
    const { cx: n, cy: i, fill: s, payload: o } = t, a = () => {
      if (!o) return "-";
      if (o[r] !== void 0)
        return o[r];
      for (const [l, c] of Object.entries(o))
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
            `Data point: ${a()}`
          );
        }
      }
    );
  };
  return e.displayName = `Scatter-${r}`, e;
}, Uh = ({
  dataConfig: r,
  data: e,
  xAxis: t,
  yAxis: n = { hide: !0 },
  label: i = !1,
  hideTooltip: s = !1,
  hideGrid: o = !1,
  aspect: a,
  legend: l,
  showValueUnderLabel: c = !1,
  bar: d,
  line: u,
  scatter: h,
  onClick: m
}, g) => {
  const y = ud(e), v = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], A = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], _ = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], S = [
    ...v,
    ...A,
    ..._
  ], k = Math.max(
    ...y.flatMap(
      (w) => S.map(
        (R) => fd(
          n?.tickFormatter ? n.tickFormatter(`${w[R]}`) : `${w[R]}`
        )
      )
    )
  ), b = [d, u, h].filter(
    (w) => w?.axisPosition === "left"
  ), x = [d, u, h].filter(
    (w) => w?.axisPosition === "right"
  );
  return /* @__PURE__ */ f(hd, { config: r, ref: g, aspect: a, children: /* @__PURE__ */ W(
    Wh,
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
      onClick: (w) => {
        if (!m || !w.activeLabel || !w.activePayload)
          return;
        const R = {
          label: w.activeLabel,
          values: {}
        };
        for (const z of w.activePayload)
          R.values[z.name] = z.value;
        m(R);
      },
      children: [
        !s && /* @__PURE__ */ f(
          md,
          {
            ...pd(),
            content: /* @__PURE__ */ f(gd, { yAxisFormatter: n.tickFormatter })
          }
        ),
        !o && /* @__PURE__ */ f(vd, { ...yd() }),
        b.length > 0 && /* @__PURE__ */ f(
          hi,
          {
            ...fs(n),
            tick: !0,
            width: n.width ?? k + 20 + (x.length > 0 && b[0]?.axisLabel ? 20 : 0),
            hide: n.hide || b.some((w) => w?.hideAxis),
            label: b[0]?.axisLabel ? {
              value: b[0].axisLabel,
              angle: -90,
              position: "insideLeft"
            } : void 0
          }
        ),
        x.length > 0 && /* @__PURE__ */ f(
          hi,
          {
            ...fs(n),
            yAxisId: "right",
            orientation: "right",
            tick: !0,
            width: n.width ?? k + 20 + (b.length > 0 && x[0]?.axisLabel ? 20 : 0),
            hide: n.hide || x.some((w) => w?.hideAxis),
            label: x[0]?.axisLabel ? {
              value: x[0].axisLabel,
              angle: 90,
              position: "insideRight"
            } : void 0
          }
        ),
        /* @__PURE__ */ f(
          Mo,
          {
            ...bd(t),
            hide: t?.hide,
            tick: c ? (w) => {
              const { x: R, y: z, payload: F } = w, T = e.find((G) => G.label === F.value)?.values || "", D = Object.keys(T).length === 1 ? Object.values(T)?.[0] : void 0, O = D !== void 0 && n.tickFormatter ? n.tickFormatter(`${D}`) : D.toLocaleString();
              return /* @__PURE__ */ W("g", { transform: `translate(${R},${z})`, children: [
                /* @__PURE__ */ f(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: F.value
                  }
                ),
                !!D && /* @__PURE__ */ f(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: O
                  }
                )
              ] });
            } : void 0
          }
        ),
        v.map((w, R) => /* @__PURE__ */ f(
          Oo,
          {
            isAnimationActive: !1,
            dataKey: String(w),
            fill: r[w].color ? Rr(r[w].color) : Qn(R),
            radius: 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ f(
              Ao,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${String(w)}`
            )
          },
          `bar-${String(w)}`
        )),
        A.map((w, R) => /* @__PURE__ */ f(
          To,
          {
            type: u?.lineType ?? "natural",
            dataKey: String(w),
            stroke: r[w].color ? Rr(r[w].color) : Qn(v.length + R),
            strokeWidth: 2,
            dot: u?.dot ?? !1,
            isAnimationActive: !1,
            yAxisId: u?.axisPosition === "right" ? "right" : void 0
          },
          `line-${String(w)}`
        )),
        _.map((w, R) => /* @__PURE__ */ f(
          Xr,
          {
            dataKey: String(w),
            fill: r[w].color ? Rr(r[w].color) : Qn(
              v.length + A.length + R
            ),
            r: 4,
            isAnimationActive: !1,
            yAxisId: h?.axisPosition === "right" ? "right" : void 0,
            shape: Gh(String(w))
          },
          `scatter-${String(w)}`
        )),
        l && /* @__PURE__ */ f(
          xd,
          {
            content: /* @__PURE__ */ f(wd, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, Zh = Fo(Uh), qh = ({ value: r, max: e = 100, label: t, color: n }, i) => {
  const s = n ? Rr(n) : Rr("categorical-1"), o = r / e * 100;
  return /* @__PURE__ */ W("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ f("div", { className: "flex-grow", children: /* @__PURE__ */ f(
      _d,
      {
        color: s,
        value: o,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": r,
        "aria-label": `${o.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ f("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, Kh = Fo(qh), mv = ye(
  tt({ name: "AreaChart", type: "info" }, Cd)
), pv = ye(
  tt({ name: "BarChart", type: "info" }, Ed)
), gv = ye(
  tt(
    { name: "CategoryBarChart", type: "info" },
    Sd
  )
), vv = ye(
  tt({ name: "LineChart", type: "info" }, kd)
), yv = ye(
  tt({ name: "PieChart", type: "info" }, Dd)
), bv = ye(
  tt(
    { name: "VerticalBarChart", type: "info" },
    Nd
  )
), xv = ye(
  tt({ name: "ProgressBarChart", type: "info" }, Kh)
), wv = ye(
  tt({ name: "ComboChart", type: "info" }, Zh)
), Xh = (r) => typeof r == "boolean" || !r ? {
  show: !!r,
  invertStatus: !1
} : {
  show: r.show ?? !0,
  invertStatus: r.invertStatus ?? !1
}, ka = ({ label: r, ...e }) => {
  const t = Rd(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), i = Xh(e.trend), s = t(e.comparison), o = Ad(
    n.numericValue,
    n.formatterOptions
  ), a = hs(s.numericValue), l = hs(n.numericValue), c = H(() => {
    if (!(!a || !i.show) && !(!a || !l))
      return (l - a) / a * 100;
  }, [l, a, i.show]);
  return /* @__PURE__ */ W("div", { className: "flex flex-col gap-2", children: [
    r && /* @__PURE__ */ f("div", { children: r }),
    /* @__PURE__ */ W("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f("span", { className: "font-bold text-2xl", children: o }),
      a !== void 0 && /* @__PURE__ */ f(
        Td,
        {
          percentage: c,
          amount: s,
          invertStatus: i.invertStatus,
          hint: e.comparisonHint
        }
      )
    ] })
  ] });
}, Yh = () => /* @__PURE__ */ W("div", { className: "relative flex h-full w-full cursor-progress flex-col gap-2", children: [
  /* @__PURE__ */ f(wt, { className: "h-3 w-full max-w-16 rounded-md" }),
  /* @__PURE__ */ W("div", { className: "flex flex-row flex-wrap items-end gap-2", children: [
    /* @__PURE__ */ f(wt, { className: "h-8 w-full max-w-36 rounded-sm" }),
    /* @__PURE__ */ f(wt, { className: "h-6 w-full max-w-18 rounded-sm" })
  ] })
] });
ka.displayName = "F0BigNumber";
const Jh = mo(ka, Yh), _v = ye(
  lt("F0BigNumber", Jh)
), Da = {
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
}, Na = {
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
}, Qh = {}, em = {
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
}, tm = {
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
}, rm = {
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
}, nm = {
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
}, im = {
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
}, sm = {
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
}, Ra = {
  width: em,
  height: tm,
  minWidth: rm,
  minHeight: nm,
  maxWidth: im,
  maxHeight: sm
}, Aa = {
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
}, Ta = {
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
}, Oa = {
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
}, om = {}, Ma = {
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
}, Fa = {
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
}, am = {}, lm = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, La = {
  overflow: lm,
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
}, cm = {}, Ia = {
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
}, dm = {}, um = {
  ...Aa,
  ...Ia,
  ...Fa,
  ...Oa,
  ...Ma,
  ...Ra,
  ...Da,
  ...Na,
  ...La,
  ...Ta
};
function fm(r, e) {
  return e.split(" ").map((t) => `${r}:${t}`).join(" ");
}
function hm(r, e) {
  const t = [];
  for (const [n, i] of Object.entries(e)) {
    if (i == null) continue;
    const s = um[n];
    if (!s) continue;
    const o = s[String(i)];
    o && t.push(fm(r, o));
  }
  return t.join(" ");
}
const mm = kt({
  base: "",
  variants: {
    ...Aa,
    ...Ia,
    ...Fa,
    ...Oa,
    ...Ma,
    ...Ra,
    ...Da,
    ...Na,
    ...La,
    ...Ta
  },
  defaultVariants: {
    ...dm,
    ...am,
    ...om,
    ...Qh,
    ...cm
  }
}), pm = ["sm", "md", "lg", "xl"], Pa = Ge(
  ({
    // Display & Position
    display: r,
    position: e,
    // Padding
    padding: t,
    paddingX: n,
    paddingY: i,
    paddingTop: s,
    paddingBottom: o,
    paddingLeft: a,
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
    gap: v,
    // Grid
    columns: A,
    rows: _,
    colSpan: S,
    colStart: k,
    rowSpan: b,
    // Dimensions
    width: x,
    height: w,
    minWidth: R,
    minHeight: z,
    maxWidth: F,
    maxHeight: T,
    // Background
    background: D,
    // Border
    borderColor: O,
    border: G,
    borderTop: I,
    borderBottom: U,
    borderLeft: j,
    borderRight: ne,
    borderRadius: ce,
    borderRadiusTopLeft: he,
    borderRadiusTopRight: Pe,
    borderRadiusBottomLeft: we,
    borderRadiusBottomRight: ke,
    borderStyle: Le,
    // Overflow
    overflow: me,
    overflowX: de,
    overflowY: Se,
    // Divider
    divider: se,
    dividerColor: ee,
    // Flex
    alignItems: $,
    justifyContent: De,
    flexDirection: Te,
    flexWrap: He,
    grow: Ne,
    shrink: rt,
    // Responsive breakpoint overrides
    sm: Be,
    md: ft,
    lg: p,
    xl: C,
    ...N
  }, B) => {
    const M = I && I !== "none" || U && U !== "none" || j && j !== "none" || ne && ne !== "none", L = G && G !== "none" || M, Z = { sm: Be, md: ft, lg: p, xl: C }, oe = pm.map((Ce) => {
      const _e = Z[Ce];
      return _e ? hm(Ce, _e) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ f(
      "div",
      {
        ref: B,
        className: le(
          M && "border-0",
          mm({
            display: r,
            position: e,
            padding: t,
            paddingX: n,
            paddingY: i,
            paddingTop: s,
            paddingBottom: o,
            paddingLeft: a,
            paddingRight: l,
            margin: c,
            marginX: d,
            marginY: u,
            marginTop: h,
            marginBottom: m,
            marginLeft: g,
            marginRight: y,
            gap: v,
            columns: A,
            rows: _,
            colSpan: S,
            colStart: k,
            rowSpan: b,
            width: x,
            height: w,
            minWidth: R,
            minHeight: z,
            maxWidth: F,
            maxHeight: T,
            background: D,
            borderColor: O,
            border: G,
            borderTop: I,
            borderBottom: U,
            borderLeft: j,
            borderRight: ne,
            borderRadius: ce,
            borderRadiusTopLeft: he,
            borderRadiusTopRight: Pe,
            borderRadiusBottomLeft: we,
            borderRadiusBottomRight: ke,
            borderStyle: Le,
            overflow: me,
            overflowX: de,
            overflowY: Se,
            divider: se,
            dividerColor: ee,
            alignItems: $,
            justifyContent: De,
            flexDirection: Te,
            flexWrap: He,
            grow: Ne,
            shrink: rt
          }),
          oe,
          L && !O && "border-f1-border",
          se && !ee && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...N
      }
    );
  }
);
Pa.displayName = "F0Box";
const Cv = tt(
  {
    name: "F0Box",
    type: "layout"
  },
  Pa
), Ev = ec.filter(
  (r) => r !== "ai"
), Sv = po, kv = ["default", "outline", "neutral"], Dv = po, Nv = ["sm", "md", "lg"], Rv = ["compact", "expanded"], Av = tc, Tv = [
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
], xi = ({ count: r, list: e }) => {
  const [t, n] = re(!1), i = /* @__PURE__ */ f(cn, { label: `+${r}` });
  return e?.length ? /* @__PURE__ */ W(go, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ f(vo, { asChild: !0, children: /* @__PURE__ */ f("button", { className: Ln("inline-flex flex-shrink-0 items-center"), children: i }) }),
    /* @__PURE__ */ f(
      yo,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ W(bo, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          e.map((s, o) => /* @__PURE__ */ f(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ f(cn, { ...s })
            },
            o
          )),
          /* @__PURE__ */ f(
            xo,
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
xi.displayName = "ChipCounter";
const za = ({
  chips: r,
  max: e = 4,
  remainingCount: t,
  layout: n = "compact"
}) => {
  if (n === "fill")
    return /* @__PURE__ */ f(
      rc,
      {
        items: r,
        renderListItem: (l) => /* @__PURE__ */ f(cn, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: t !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ f(
          xi,
          {
            count: (t ?? 0) + l,
            list: t ? void 0 : r.slice(r.length - l)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const i = r.slice(0, e), s = r.slice(e), o = t ?? r.length - e, a = o > 0;
  return /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
    i.map((l, c) => /* @__PURE__ */ f(cn, { ...l }, c)),
    a && /* @__PURE__ */ f(
      xi,
      {
        count: o,
        list: t ? void 0 : s
      }
    )
  ] });
};
za.displayName = "F0ChipList";
const Ov = ye(
  lt("F0ChipList", za)
), Mv = nc, gm = kt({
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
}), vm = kt({
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
}), ym = ({
  title: r,
  description: e,
  action: t,
  link: n,
  icon: i,
  variant: s = "neutral"
}) => {
  const o = Y(null);
  return /* @__PURE__ */ f("div", { ref: o, className: "@container", children: /* @__PURE__ */ f("div", { className: gm({ variant: s }), children: /* @__PURE__ */ W(
    "div",
    {
      className: le(
        "flex flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between"
      ),
      children: [
        /* @__PURE__ */ W("div", { className: "flex flex-row gap-2", children: [
          /* @__PURE__ */ f("div", { className: "h-6 w-6 flex-shrink-0", children: s === "neutral" ? /* @__PURE__ */ f(ic, { icon: i || sc, size: "sm" }) : /* @__PURE__ */ f(Od, { type: s, size: "sm" }) }),
          /* @__PURE__ */ W("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ f("p", { className: vm({ variant: s }), children: r }),
            /* @__PURE__ */ f("p", { className: "text-base text-f1-foreground-secondary", children: e })
          ] })
        ] }),
        (t || n) && /* @__PURE__ */ W(
          "div",
          {
            className: le(
              "flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0"
            ),
            children: [
              n && /* @__PURE__ */ f(
                oc,
                {
                  href: n.href,
                  target: "_blank",
                  variant: "link",
                  size: "sm",
                  children: n.label
                }
              ),
              t && /* @__PURE__ */ f(
                Ke,
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
}, Fv = ye(ym), bm = 388;
function Ba({
  filters: r,
  value: e,
  onChange: t,
  height: n,
  width: i = 600,
  className: s,
  showApplyButton: o = !0,
  applyButtonLabel: a,
  dataTestId: l
}) {
  const c = Tt(), d = Object.keys(r)[0] ?? null, [u, h] = re(d), [m, g] = re(e);
  ie(() => {
    g(e);
  }, [e]), ie(() => {
    if (!u && r) {
      const _ = Object.keys(r);
      if (_.length > 0) {
        const S = _.find((k) => {
          const b = m[k], x = cs(r[k].type);
          return b !== void 0 && !x.isEmpty(b, {
            schema: r[k],
            i18n: c
          });
        });
        h(S ?? _[0]);
      }
    }
  }, [r, u, m, c]);
  const y = (_, S) => {
    const k = {
      ...m,
      [_]: S
    };
    g(k), o || t(k);
  }, v = () => {
    t(m);
  }, A = H(() => n || Object.entries(r).reduce((S, [k, b]) => {
    const x = cs(b.type);
    return Math.max(S, x?.formHeight || bm);
  }, 0), [r, n]);
  return !r || Object.keys(r).length === 0 ? null : /* @__PURE__ */ f(ac, { dataTestId: l, children: /* @__PURE__ */ f(
    "div",
    {
      className: le(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        s
      ),
      style: { maxWidth: i },
      children: /* @__PURE__ */ f(
        lc,
        {
          filters: r,
          tempFilters: m,
          selectedFilterKey: u,
          onFilterSelect: h,
          onFilterChange: y,
          onApply: v,
          height: A,
          showApplyButton: o,
          applyButtonLabel: a
        }
      )
    }
  ) });
}
Ba.displayName = "F0FilterPickerContent";
const Lv = Ba;
var Yr = (r) => r.type === "checkbox", Zt = (r) => r instanceof Date, We = (r) => r == null;
const Va = (r) => typeof r == "object";
var Ae = (r) => !We(r) && !Array.isArray(r) && Va(r) && !Zt(r), Ha = (r) => Ae(r) && r.target ? Yr(r.target) ? r.target.checked : r.target.value : r, xm = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r, ja = (r, e) => r.has(xm(e)), wm = (r) => {
  const e = r.constructor && r.constructor.prototype;
  return Ae(e) && e.hasOwnProperty("isPrototypeOf");
}, qi = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ze(r) {
  let e;
  const t = Array.isArray(r), n = typeof FileList < "u" ? r instanceof FileList : !1;
  if (r instanceof Date)
    e = new Date(r);
  else if (r instanceof Set)
    e = new Set(r);
  else if (!(qi && (r instanceof Blob || n)) && (t || Ae(r)))
    if (e = t ? [] : {}, !t && !wm(r))
      e = r;
    else
      for (const i in r)
        r.hasOwnProperty(i) && (e[i] = Ze(r[i]));
  else
    return r;
  return e;
}
var Un = (r) => Array.isArray(r) ? r.filter(Boolean) : [], Re = (r) => r === void 0, V = (r, e, t) => {
  if (!e || !Ae(r))
    return t;
  const n = Un(e.split(/[,[\].]+?/)).reduce((i, s) => We(i) ? i : i[s], r);
  return Re(n) || n === r ? Re(r[e]) ? t : r[e] : n;
}, at = (r) => typeof r == "boolean", Ki = (r) => /^\w*$/.test(r), $a = (r) => Un(r.replace(/["|']|\]/g, "").split(/\.|\[/)), xe = (r, e, t) => {
  let n = -1;
  const i = Ki(e) ? [e] : $a(e), s = i.length, o = s - 1;
  for (; ++n < s; ) {
    const a = i[n];
    let l = t;
    if (n !== o) {
      const c = r[a];
      l = Ae(c) || Array.isArray(c) ? c : isNaN(+i[n + 1]) ? {} : [];
    }
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    r[a] = l, r = r[a];
  }
  return r;
};
const En = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ht = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Nt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Wa = q.createContext(null), Wt = () => q.useContext(Wa), _m = (r) => {
  const { children: e, ...t } = r;
  return q.createElement(Wa.Provider, { value: t }, e);
};
var Ga = (r, e, t, n = !0) => {
  const i = {
    defaultValues: e._defaultValues
  };
  for (const s in r)
    Object.defineProperty(i, s, {
      get: () => {
        const o = s;
        return e._proxyFormState[o] !== ht.all && (e._proxyFormState[o] = !n || ht.all), t && (t[o] = !0), r[o];
      }
    });
  return i;
}, qe = (r) => Ae(r) && !Object.keys(r).length, Ua = (r, e, t, n) => {
  t(r);
  const { name: i, ...s } = r;
  return qe(s) || Object.keys(s).length >= Object.keys(e).length || Object.keys(s).find((o) => e[o] === (!n || ht.all));
}, Lr = (r) => Array.isArray(r) ? r : [r], Za = (r, e, t) => !r || !e || r === e || Lr(r).some((n) => n && (t ? n === e : n.startsWith(e) || e.startsWith(n)));
function Xi(r) {
  const e = q.useRef(r);
  e.current = r, q.useEffect(() => {
    const t = !r.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [r.disabled]);
}
function Cm(r) {
  const e = Wt(), { control: t = e.control, disabled: n, name: i, exact: s } = r || {}, [o, a] = q.useState(t._formState), l = q.useRef(!0), c = q.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = q.useRef(i);
  return d.current = i, Xi({
    disabled: n,
    next: (u) => l.current && Za(d.current, u.name, s) && Ua(u, c.current, t._updateFormState) && a({
      ...t._formState,
      ...u
    }),
    subject: t._subjects.state
  }), q.useEffect(() => (l.current = !0, c.current.isValid && t._updateValid(!0), () => {
    l.current = !1;
  }), [t]), q.useMemo(() => Ga(o, t, c.current, !1), [o, t]);
}
var Et = (r) => typeof r == "string", qa = (r, e, t, n, i) => Et(r) ? (n && e.watch.add(r), V(t, r, i)) : Array.isArray(r) ? r.map((s) => (n && e.watch.add(s), V(t, s))) : (n && (e.watchAll = !0), t);
function Em(r) {
  const e = Wt(), { control: t = e.control, name: n, defaultValue: i, disabled: s, exact: o } = r || {}, a = q.useRef(n);
  a.current = n, Xi({
    disabled: s,
    subject: t._subjects.values,
    next: (d) => {
      Za(a.current, d.name, o) && c(Ze(qa(a.current, t._names, d.values || t._formValues, !1, i)));
    }
  });
  const [l, c] = q.useState(t._getWatch(n, i));
  return q.useEffect(() => t._removeUnmounted()), l;
}
function Sm(r) {
  const e = Wt(), { name: t, disabled: n, control: i = e.control, shouldUnregister: s } = r, o = ja(i._names.array, t), a = Em({
    control: i,
    name: t,
    defaultValue: V(i._formValues, t, V(i._defaultValues, t, r.defaultValue)),
    exact: !0
  }), l = Cm({
    control: i,
    name: t,
    exact: !0
  }), c = q.useRef(i.register(t, {
    ...r.rules,
    value: a,
    ...at(r.disabled) ? { disabled: r.disabled } : {}
  })), d = q.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!V(l.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!V(l.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!V(l.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!V(l.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => V(l.errors, t)
    }
  }), [l, t]), u = q.useMemo(() => ({
    name: t,
    value: a,
    ...at(n) || l.disabled ? { disabled: l.disabled || n } : {},
    onChange: (h) => c.current.onChange({
      target: {
        value: Ha(h),
        name: t
      },
      type: En.CHANGE
    }),
    onBlur: () => c.current.onBlur({
      target: {
        value: V(i._formValues, t),
        name: t
      },
      type: En.BLUR
    }),
    ref: (h) => {
      const m = V(i._fields, t);
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
    a,
    i._fields
  ]);
  return q.useEffect(() => {
    const h = i._options.shouldUnregister || s, m = (g, y) => {
      const v = V(i._fields, g);
      v && v._f && (v._f.mount = y);
    };
    if (m(t, !0), h) {
      const g = Ze(V(i._options.defaultValues, t));
      xe(i._defaultValues, t, g), Re(V(i._formValues, t)) && xe(i._formValues, t, g);
    }
    return !o && i.register(t), () => {
      (o ? h && !i._state.action : h) ? i.unregister(t) : m(t, !1);
    };
  }, [t, i, o, s]), q.useEffect(() => {
    i._updateDisabledField({
      disabled: n,
      fields: i._fields,
      name: t
    });
  }, [n, t, i]), q.useMemo(() => ({
    field: u,
    formState: l,
    fieldState: d
  }), [u, l, d]);
}
const km = (r) => r.render(Sm(r));
var Ka = (r, e, t, n, i) => e ? {
  ...t[r],
  types: {
    ...t[r] && t[r].types ? t[r].types : {},
    [n]: i || !0
  }
} : {}, Ms = (r) => ({
  isOnSubmit: !r || r === ht.onSubmit,
  isOnBlur: r === ht.onBlur,
  isOnChange: r === ht.onChange,
  isOnAll: r === ht.all,
  isOnTouch: r === ht.onTouched
}), Fs = (r, e, t) => !t && (e.watchAll || e.watch.has(r) || [...e.watch].some((n) => r.startsWith(n) && /^\.\w+/.test(r.slice(n.length))));
const Ir = (r, e, t, n) => {
  for (const i of t || Object.keys(r)) {
    const s = V(r, i);
    if (s) {
      const { _f: o, ...a } = s;
      if (o) {
        if (o.refs && o.refs[0] && e(o.refs[0], i) && !n)
          return !0;
        if (o.ref && e(o.ref, o.name) && !n)
          return !0;
        if (Ir(a, e))
          break;
      } else if (Ae(a) && Ir(a, e))
        break;
    }
  }
};
var Dm = (r, e, t) => {
  const n = Lr(V(r, t));
  return xe(n, "root", e[t]), xe(r, t, n), r;
}, Yi = (r) => r.type === "file", Ct = (r) => typeof r == "function", Sn = (r) => {
  if (!qi)
    return !1;
  const e = r ? r.ownerDocument : 0;
  return r instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, an = (r) => Et(r), Ji = (r) => r.type === "radio", kn = (r) => r instanceof RegExp;
const Ls = {
  value: !1,
  isValid: !1
}, Is = { value: !0, isValid: !0 };
var Xa = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const e = r.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: e, isValid: !!e.length };
    }
    return r[0].checked && !r[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      r[0].attributes && !Re(r[0].attributes.value) ? Re(r[0].value) || r[0].value === "" ? Is : { value: r[0].value, isValid: !0 } : Is
    ) : Ls;
  }
  return Ls;
};
const Ps = {
  isValid: !1,
  value: null
};
var Ya = (r) => Array.isArray(r) ? r.reduce((e, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : e, Ps) : Ps;
function zs(r, e, t = "validate") {
  if (an(r) || Array.isArray(r) && r.every(an) || at(r) && !r)
    return {
      type: t,
      message: an(r) ? r : "",
      ref: e
    };
}
var rr = (r) => Ae(r) && !kn(r) ? r : {
  value: r,
  message: ""
}, Bs = async (r, e, t, n, i, s) => {
  const { ref: o, refs: a, required: l, maxLength: c, minLength: d, min: u, max: h, pattern: m, validate: g, name: y, valueAsNumber: v, mount: A } = r._f, _ = V(t, y);
  if (!A || e.has(y))
    return {};
  const S = a ? a[0] : o, k = (D) => {
    i && S.reportValidity && (S.setCustomValidity(at(D) ? "" : D || ""), S.reportValidity());
  }, b = {}, x = Ji(o), w = Yr(o), R = x || w, z = (v || Yi(o)) && Re(o.value) && Re(_) || Sn(o) && o.value === "" || _ === "" || Array.isArray(_) && !_.length, F = Ka.bind(null, y, n, b), T = (D, O, G, I = Nt.maxLength, U = Nt.minLength) => {
    const j = D ? O : G;
    b[y] = {
      type: D ? I : U,
      message: j,
      ref: o,
      ...F(D ? I : U, j)
    };
  };
  if (s ? !Array.isArray(_) || !_.length : l && (!R && (z || We(_)) || at(_) && !_ || w && !Xa(a).isValid || x && !Ya(a).isValid)) {
    const { value: D, message: O } = an(l) ? { value: !!l, message: l } : rr(l);
    if (D && (b[y] = {
      type: Nt.required,
      message: O,
      ref: S,
      ...F(Nt.required, O)
    }, !n))
      return k(O), b;
  }
  if (!z && (!We(u) || !We(h))) {
    let D, O;
    const G = rr(h), I = rr(u);
    if (!We(_) && !isNaN(_)) {
      const U = o.valueAsNumber || _ && +_;
      We(G.value) || (D = U > G.value), We(I.value) || (O = U < I.value);
    } else {
      const U = o.valueAsDate || new Date(_), j = (he) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + he), ne = o.type == "time", ce = o.type == "week";
      Et(G.value) && _ && (D = ne ? j(_) > j(G.value) : ce ? _ > G.value : U > new Date(G.value)), Et(I.value) && _ && (O = ne ? j(_) < j(I.value) : ce ? _ < I.value : U < new Date(I.value));
    }
    if ((D || O) && (T(!!D, G.message, I.message, Nt.max, Nt.min), !n))
      return k(b[y].message), b;
  }
  if ((c || d) && !z && (Et(_) || s && Array.isArray(_))) {
    const D = rr(c), O = rr(d), G = !We(D.value) && _.length > +D.value, I = !We(O.value) && _.length < +O.value;
    if ((G || I) && (T(G, D.message, O.message), !n))
      return k(b[y].message), b;
  }
  if (m && !z && Et(_)) {
    const { value: D, message: O } = rr(m);
    if (kn(D) && !_.match(D) && (b[y] = {
      type: Nt.pattern,
      message: O,
      ref: o,
      ...F(Nt.pattern, O)
    }, !n))
      return k(O), b;
  }
  if (g) {
    if (Ct(g)) {
      const D = await g(_, t), O = zs(D, S);
      if (O && (b[y] = {
        ...O,
        ...F(Nt.validate, O.message)
      }, !n))
        return k(O.message), b;
    } else if (Ae(g)) {
      let D = {};
      for (const O in g) {
        if (!qe(D) && !n)
          break;
        const G = zs(await g[O](_, t), S, O);
        G && (D = {
          ...G,
          ...F(O, G.message)
        }, k(G.message), n && (b[y] = D));
      }
      if (!qe(D) && (b[y] = {
        ref: S,
        ...D
      }, !n))
        return b;
    }
  }
  return k(!0), b;
};
function Nm(r, e) {
  const t = e.slice(0, -1).length;
  let n = 0;
  for (; n < t; )
    r = Re(r) ? n++ : r[e[n++]];
  return r;
}
function Rm(r) {
  for (const e in r)
    if (r.hasOwnProperty(e) && !Re(r[e]))
      return !1;
  return !0;
}
function Me(r, e) {
  const t = Array.isArray(e) ? e : Ki(e) ? [e] : $a(e), n = t.length === 1 ? r : Nm(r, t), i = t.length - 1, s = t[i];
  return n && delete n[s], i !== 0 && (Ae(n) && qe(n) || Array.isArray(n) && Rm(n)) && Me(r, t.slice(0, -1)), r;
}
var ii = () => {
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
}, wi = (r) => We(r) || !Va(r);
function zt(r, e) {
  if (wi(r) || wi(e))
    return r === e;
  if (Zt(r) && Zt(e))
    return r.getTime() === e.getTime();
  const t = Object.keys(r), n = Object.keys(e);
  if (t.length !== n.length)
    return !1;
  for (const i of t) {
    const s = r[i];
    if (!n.includes(i))
      return !1;
    if (i !== "ref") {
      const o = e[i];
      if (Zt(s) && Zt(o) || Ae(s) && Ae(o) || Array.isArray(s) && Array.isArray(o) ? !zt(s, o) : s !== o)
        return !1;
    }
  }
  return !0;
}
var Ja = (r) => r.type === "select-multiple", Am = (r) => Ji(r) || Yr(r), si = (r) => Sn(r) && r.isConnected, Qa = (r) => {
  for (const e in r)
    if (Ct(r[e]))
      return !0;
  return !1;
};
function Dn(r, e = {}) {
  const t = Array.isArray(r);
  if (Ae(r) || t)
    for (const n in r)
      Array.isArray(r[n]) || Ae(r[n]) && !Qa(r[n]) ? (e[n] = Array.isArray(r[n]) ? [] : {}, Dn(r[n], e[n])) : We(r[n]) || (e[n] = !0);
  return e;
}
function el(r, e, t) {
  const n = Array.isArray(r);
  if (Ae(r) || n)
    for (const i in r)
      Array.isArray(r[i]) || Ae(r[i]) && !Qa(r[i]) ? Re(e) || wi(t[i]) ? t[i] = Array.isArray(r[i]) ? Dn(r[i], []) : { ...Dn(r[i]) } : el(r[i], We(e) ? {} : e[i], t[i]) : t[i] = !zt(r[i], e[i]);
  return t;
}
var Sr = (r, e) => el(r, e, Dn(e)), tl = (r, { valueAsNumber: e, valueAsDate: t, setValueAs: n }) => Re(r) ? r : e ? r === "" ? NaN : r && +r : t && Et(r) ? new Date(r) : n ? n(r) : r;
function oi(r) {
  const e = r.ref;
  return Yi(e) ? e.files : Ji(e) ? Ya(r.refs).value : Ja(e) ? [...e.selectedOptions].map(({ value: t }) => t) : Yr(e) ? Xa(r.refs).value : tl(Re(e.value) ? r.ref.value : e.value, r);
}
var Tm = (r, e, t, n) => {
  const i = {};
  for (const s of r) {
    const o = V(e, s);
    o && xe(i, s, o._f);
  }
  return {
    criteriaMode: t,
    names: [...r],
    fields: i,
    shouldUseNativeValidation: n
  };
}, kr = (r) => Re(r) ? r : kn(r) ? r.source : Ae(r) ? kn(r.value) ? r.value.source : r.value : r;
const Vs = "AsyncFunction";
var Om = (r) => !!r && !!r.validate && !!(Ct(r.validate) && r.validate.constructor.name === Vs || Ae(r.validate) && Object.values(r.validate).find((e) => e.constructor.name === Vs)), Mm = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function Hs(r, e, t) {
  const n = V(r, t);
  if (n || Ki(t))
    return {
      error: n,
      name: t
    };
  const i = t.split(".");
  for (; i.length; ) {
    const s = i.join("."), o = V(e, s), a = V(r, s);
    if (o && !Array.isArray(o) && t !== s)
      return { name: t };
    if (a && a.type)
      return {
        name: s,
        error: a
      };
    i.pop();
  }
  return {
    name: t
  };
}
var Fm = (r, e, t, n, i) => i.isOnAll ? !1 : !t && i.isOnTouch ? !(e || r) : (t ? n.isOnBlur : i.isOnBlur) ? !r : (t ? n.isOnChange : i.isOnChange) ? r : !0, Lm = (r, e) => !Un(V(r, e)).length && Me(r, e);
const Im = {
  mode: ht.onSubmit,
  reValidateMode: ht.onChange,
  shouldFocusError: !0
};
function Pm(r = {}) {
  let e = {
    ...Im,
    ...r
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Ct(e.defaultValues),
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
  }, n = {}, i = Ae(e.defaultValues) || Ae(e.values) ? Ze(e.defaultValues || e.values) || {} : {}, s = e.shouldUnregister ? {} : Ze(i), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, a = {
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
    values: ii(),
    array: ii(),
    state: ii()
  }, h = Ms(e.mode), m = Ms(e.reValidateMode), g = e.criteriaMode === ht.all, y = (p) => (C) => {
    clearTimeout(c), c = setTimeout(p, C);
  }, v = async (p) => {
    if (!e.disabled && (d.isValid || p)) {
      const C = e.resolver ? qe((await R()).errors) : await F(n, !0);
      C !== t.isValid && u.state.next({
        isValid: C
      });
    }
  }, A = (p, C) => {
    !e.disabled && (d.isValidating || d.validatingFields) && ((p || Array.from(a.mount)).forEach((N) => {
      N && (C ? xe(t.validatingFields, N, C) : Me(t.validatingFields, N));
    }), u.state.next({
      validatingFields: t.validatingFields,
      isValidating: !qe(t.validatingFields)
    }));
  }, _ = (p, C = [], N, B, M = !0, L = !0) => {
    if (B && N && !e.disabled) {
      if (o.action = !0, L && Array.isArray(V(n, p))) {
        const Z = N(V(n, p), B.argA, B.argB);
        M && xe(n, p, Z);
      }
      if (L && Array.isArray(V(t.errors, p))) {
        const Z = N(V(t.errors, p), B.argA, B.argB);
        M && xe(t.errors, p, Z), Lm(t.errors, p);
      }
      if (d.touchedFields && L && Array.isArray(V(t.touchedFields, p))) {
        const Z = N(V(t.touchedFields, p), B.argA, B.argB);
        M && xe(t.touchedFields, p, Z);
      }
      d.dirtyFields && (t.dirtyFields = Sr(i, s)), u.state.next({
        name: p,
        isDirty: D(p, C),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      xe(s, p, C);
  }, S = (p, C) => {
    xe(t.errors, p, C), u.state.next({
      errors: t.errors
    });
  }, k = (p) => {
    t.errors = p, u.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, b = (p, C, N, B) => {
    const M = V(n, p);
    if (M) {
      const L = V(s, p, Re(N) ? V(i, p) : N);
      Re(L) || B && B.defaultChecked || C ? xe(s, p, C ? L : oi(M._f)) : I(p, L), o.mount && v();
    }
  }, x = (p, C, N, B, M) => {
    let L = !1, Z = !1;
    const oe = {
      name: p
    };
    if (!e.disabled) {
      const Ce = !!(V(n, p) && V(n, p)._f && V(n, p)._f.disabled);
      if (!N || B) {
        d.isDirty && (Z = t.isDirty, t.isDirty = oe.isDirty = D(), L = Z !== oe.isDirty);
        const _e = Ce || zt(V(i, p), C);
        Z = !!(!Ce && V(t.dirtyFields, p)), _e || Ce ? Me(t.dirtyFields, p) : xe(t.dirtyFields, p, !0), oe.dirtyFields = t.dirtyFields, L = L || d.dirtyFields && Z !== !_e;
      }
      if (N) {
        const _e = V(t.touchedFields, p);
        _e || (xe(t.touchedFields, p, N), oe.touchedFields = t.touchedFields, L = L || d.touchedFields && _e !== N);
      }
      L && M && u.state.next(oe);
    }
    return L ? oe : {};
  }, w = (p, C, N, B) => {
    const M = V(t.errors, p), L = d.isValid && at(C) && t.isValid !== C;
    if (e.delayError && N ? (l = y(() => S(p, N)), l(e.delayError)) : (clearTimeout(c), l = null, N ? xe(t.errors, p, N) : Me(t.errors, p)), (N ? !zt(M, N) : M) || !qe(B) || L) {
      const Z = {
        ...B,
        ...L && at(C) ? { isValid: C } : {},
        errors: t.errors,
        name: p
      };
      t = {
        ...t,
        ...Z
      }, u.state.next(Z);
    }
  }, R = async (p) => {
    A(p, !0);
    const C = await e.resolver(s, e.context, Tm(p || a.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return A(p), C;
  }, z = async (p) => {
    const { errors: C } = await R(p);
    if (p)
      for (const N of p) {
        const B = V(C, N);
        B ? xe(t.errors, N, B) : Me(t.errors, N);
      }
    else
      t.errors = C;
    return C;
  }, F = async (p, C, N = {
    valid: !0
  }) => {
    for (const B in p) {
      const M = p[B];
      if (M) {
        const { _f: L, ...Z } = M;
        if (L) {
          const oe = a.array.has(L.name), Ce = M._f && Om(M._f);
          Ce && d.validatingFields && A([B], !0);
          const _e = await Bs(M, a.disabled, s, g, e.shouldUseNativeValidation && !C, oe);
          if (Ce && d.validatingFields && A([B]), _e[L.name] && (N.valid = !1, C))
            break;
          !C && (V(_e, L.name) ? oe ? Dm(t.errors, _e, L.name) : xe(t.errors, L.name, _e[L.name]) : Me(t.errors, L.name));
        }
        !qe(Z) && await F(Z, C, N);
      }
    }
    return N.valid;
  }, T = () => {
    for (const p of a.unMount) {
      const C = V(n, p);
      C && (C._f.refs ? C._f.refs.every((N) => !si(N)) : !si(C._f.ref)) && de(p);
    }
    a.unMount = /* @__PURE__ */ new Set();
  }, D = (p, C) => !e.disabled && (p && C && xe(s, p, C), !zt(Pe(), i)), O = (p, C, N) => qa(p, a, {
    ...o.mount ? s : Re(C) ? i : Et(p) ? { [p]: C } : C
  }, N, C), G = (p) => Un(V(o.mount ? s : i, p, e.shouldUnregister ? V(i, p, []) : [])), I = (p, C, N = {}) => {
    const B = V(n, p);
    let M = C;
    if (B) {
      const L = B._f;
      L && (!L.disabled && xe(s, p, tl(C, L)), M = Sn(L.ref) && We(C) ? "" : C, Ja(L.ref) ? [...L.ref.options].forEach((Z) => Z.selected = M.includes(Z.value)) : L.refs ? Yr(L.ref) ? L.refs.length > 1 ? L.refs.forEach((Z) => (!Z.defaultChecked || !Z.disabled) && (Z.checked = Array.isArray(M) ? !!M.find((oe) => oe === Z.value) : M === Z.value)) : L.refs[0] && (L.refs[0].checked = !!M) : L.refs.forEach((Z) => Z.checked = Z.value === M) : Yi(L.ref) ? L.ref.value = "" : (L.ref.value = M, L.ref.type || u.values.next({
        name: p,
        values: { ...s }
      })));
    }
    (N.shouldDirty || N.shouldTouch) && x(p, M, N.shouldTouch, N.shouldDirty, !0), N.shouldValidate && he(p);
  }, U = (p, C, N) => {
    for (const B in C) {
      const M = C[B], L = `${p}.${B}`, Z = V(n, L);
      (a.array.has(p) || Ae(M) || Z && !Z._f) && !Zt(M) ? U(L, M, N) : I(L, M, N);
    }
  }, j = (p, C, N = {}) => {
    const B = V(n, p), M = a.array.has(p), L = Ze(C);
    xe(s, p, L), M ? (u.array.next({
      name: p,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && N.shouldDirty && u.state.next({
      name: p,
      dirtyFields: Sr(i, s),
      isDirty: D(p, L)
    })) : B && !B._f && !We(L) ? U(p, L, N) : I(p, L, N), Fs(p, a) && u.state.next({ ...t }), u.values.next({
      name: o.mount ? p : void 0,
      values: { ...s }
    });
  }, ne = async (p) => {
    o.mount = !0;
    const C = p.target;
    let N = C.name, B = !0;
    const M = V(n, N), L = () => C.type ? oi(M._f) : Ha(p), Z = (oe) => {
      B = Number.isNaN(oe) || Zt(oe) && isNaN(oe.getTime()) || zt(oe, V(s, N, oe));
    };
    if (M) {
      let oe, Ce;
      const _e = L(), je = p.type === En.BLUR || p.type === En.FOCUS_OUT, Ut = !Mm(M._f) && !e.resolver && !V(t.errors, N) && !M._f.deps || Fm(je, V(t.touchedFields, N), t.isSubmitted, m, h), Qt = Fs(N, a, je);
      xe(s, N, _e), je ? (M._f.onBlur && M._f.onBlur(p), l && l(0)) : M._f.onChange && M._f.onChange(p);
      const nt = x(N, _e, je, !1), Jr = !qe(nt) || Qt;
      if (!je && u.values.next({
        name: N,
        type: p.type,
        values: { ...s }
      }), Ut)
        return d.isValid && (e.mode === "onBlur" && je ? v() : je || v()), Jr && u.state.next({ name: N, ...Qt ? {} : nt });
      if (!je && Qt && u.state.next({ ...t }), e.resolver) {
        const { errors: Qr } = await R([N]);
        if (Z(_e), B) {
          const Xn = Hs(t.errors, n, N), er = Hs(Qr, n, Xn.name || N);
          oe = er.error, N = er.name, Ce = qe(Qr);
        }
      } else
        A([N], !0), oe = (await Bs(M, a.disabled, s, g, e.shouldUseNativeValidation))[N], A([N]), Z(_e), B && (oe ? Ce = !1 : d.isValid && (Ce = await F(n, !0)));
      B && (M._f.deps && he(M._f.deps), w(N, Ce, oe, nt));
    }
  }, ce = (p, C) => {
    if (V(t.errors, C) && p.focus)
      return p.focus(), 1;
  }, he = async (p, C = {}) => {
    let N, B;
    const M = Lr(p);
    if (e.resolver) {
      const L = await z(Re(p) ? p : M);
      N = qe(L), B = p ? !M.some((Z) => V(L, Z)) : N;
    } else p ? (B = (await Promise.all(M.map(async (L) => {
      const Z = V(n, L);
      return await F(Z && Z._f ? { [L]: Z } : Z);
    }))).every(Boolean), !(!B && !t.isValid) && v()) : B = N = await F(n);
    return u.state.next({
      ...!Et(p) || d.isValid && N !== t.isValid ? {} : { name: p },
      ...e.resolver || !p ? { isValid: N } : {},
      errors: t.errors
    }), C.shouldFocus && !B && Ir(n, ce, p ? M : a.mount), B;
  }, Pe = (p) => {
    const C = {
      ...o.mount ? s : i
    };
    return Re(p) ? C : Et(p) ? V(C, p) : p.map((N) => V(C, N));
  }, we = (p, C) => ({
    invalid: !!V((C || t).errors, p),
    isDirty: !!V((C || t).dirtyFields, p),
    error: V((C || t).errors, p),
    isValidating: !!V(t.validatingFields, p),
    isTouched: !!V((C || t).touchedFields, p)
  }), ke = (p) => {
    p && Lr(p).forEach((C) => Me(t.errors, C)), u.state.next({
      errors: p ? t.errors : {}
    });
  }, Le = (p, C, N) => {
    const B = (V(n, p, { _f: {} })._f || {}).ref, M = V(t.errors, p) || {}, { ref: L, message: Z, type: oe, ...Ce } = M;
    xe(t.errors, p, {
      ...Ce,
      ...C,
      ref: B
    }), u.state.next({
      name: p,
      errors: t.errors,
      isValid: !1
    }), N && N.shouldFocus && B && B.focus && B.focus();
  }, me = (p, C) => Ct(p) ? u.values.subscribe({
    next: (N) => p(O(void 0, C), N)
  }) : O(p, C, !0), de = (p, C = {}) => {
    for (const N of p ? Lr(p) : a.mount)
      a.mount.delete(N), a.array.delete(N), C.keepValue || (Me(n, N), Me(s, N)), !C.keepError && Me(t.errors, N), !C.keepDirty && Me(t.dirtyFields, N), !C.keepTouched && Me(t.touchedFields, N), !C.keepIsValidating && Me(t.validatingFields, N), !e.shouldUnregister && !C.keepDefaultValue && Me(i, N);
    u.values.next({
      values: { ...s }
    }), u.state.next({
      ...t,
      ...C.keepDirty ? { isDirty: D() } : {}
    }), !C.keepIsValid && v();
  }, Se = ({ disabled: p, name: C, field: N, fields: B }) => {
    (at(p) && o.mount || p || a.disabled.has(C)) && (p ? a.disabled.add(C) : a.disabled.delete(C), x(C, oi(N ? N._f : V(B, C)._f), !1, !1, !0));
  }, se = (p, C = {}) => {
    let N = V(n, p);
    const B = at(C.disabled) || at(e.disabled);
    return xe(n, p, {
      ...N || {},
      _f: {
        ...N && N._f ? N._f : { ref: { name: p } },
        name: p,
        mount: !0,
        ...C
      }
    }), a.mount.add(p), N ? Se({
      field: N,
      disabled: at(C.disabled) ? C.disabled : e.disabled,
      name: p
    }) : b(p, !0, C.value), {
      ...B ? { disabled: C.disabled || e.disabled } : {},
      ...e.progressive ? {
        required: !!C.required,
        min: kr(C.min),
        max: kr(C.max),
        minLength: kr(C.minLength),
        maxLength: kr(C.maxLength),
        pattern: kr(C.pattern)
      } : {},
      name: p,
      onChange: ne,
      onBlur: ne,
      ref: (M) => {
        if (M) {
          se(p, C), N = V(n, p);
          const L = Re(M.value) && M.querySelectorAll && M.querySelectorAll("input,select,textarea")[0] || M, Z = Am(L), oe = N._f.refs || [];
          if (Z ? oe.find((Ce) => Ce === L) : L === N._f.ref)
            return;
          xe(n, p, {
            _f: {
              ...N._f,
              ...Z ? {
                refs: [
                  ...oe.filter(si),
                  L,
                  ...Array.isArray(V(i, p)) ? [{}] : []
                ],
                ref: { type: L.type, name: p }
              } : { ref: L }
            }
          }), b(p, !1, void 0, L);
        } else
          N = V(n, p, {}), N._f && (N._f.mount = !1), (e.shouldUnregister || C.shouldUnregister) && !(ja(a.array, p) && o.action) && a.unMount.add(p);
      }
    };
  }, ee = () => e.shouldFocusError && Ir(n, ce, a.mount), $ = (p) => {
    at(p) && (u.state.next({ disabled: p }), Ir(n, (C, N) => {
      const B = V(n, N);
      B && (C.disabled = B._f.disabled || p, Array.isArray(B._f.refs) && B._f.refs.forEach((M) => {
        M.disabled = B._f.disabled || p;
      }));
    }, 0, !1));
  }, De = (p, C) => async (N) => {
    let B;
    N && (N.preventDefault && N.preventDefault(), N.persist && N.persist());
    let M = Ze(s);
    if (a.disabled.size)
      for (const L of a.disabled)
        xe(M, L, void 0);
    if (u.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: L, values: Z } = await R();
      t.errors = L, M = Z;
    } else
      await F(n);
    if (Me(t.errors, "root"), qe(t.errors)) {
      u.state.next({
        errors: {}
      });
      try {
        await p(M, N);
      } catch (L) {
        B = L;
      }
    } else
      C && await C({ ...t.errors }, N), ee(), setTimeout(ee);
    if (u.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: qe(t.errors) && !B,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), B)
      throw B;
  }, Te = (p, C = {}) => {
    V(n, p) && (Re(C.defaultValue) ? j(p, Ze(V(i, p))) : (j(p, C.defaultValue), xe(i, p, Ze(C.defaultValue))), C.keepTouched || Me(t.touchedFields, p), C.keepDirty || (Me(t.dirtyFields, p), t.isDirty = C.defaultValue ? D(p, Ze(V(i, p))) : D()), C.keepError || (Me(t.errors, p), d.isValid && v()), u.state.next({ ...t }));
  }, He = (p, C = {}) => {
    const N = p ? Ze(p) : i, B = Ze(N), M = qe(p), L = M ? i : B;
    if (C.keepDefaultValues || (i = N), !C.keepValues) {
      if (C.keepDirtyValues) {
        const Z = /* @__PURE__ */ new Set([
          ...a.mount,
          ...Object.keys(Sr(i, s))
        ]);
        for (const oe of Array.from(Z))
          V(t.dirtyFields, oe) ? xe(L, oe, V(s, oe)) : j(oe, V(L, oe));
      } else {
        if (qi && Re(p))
          for (const Z of a.mount) {
            const oe = V(n, Z);
            if (oe && oe._f) {
              const Ce = Array.isArray(oe._f.refs) ? oe._f.refs[0] : oe._f.ref;
              if (Sn(Ce)) {
                const _e = Ce.closest("form");
                if (_e) {
                  _e.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      s = e.shouldUnregister ? C.keepDefaultValues ? Ze(i) : {} : Ze(L), u.array.next({
        values: { ...L }
      }), u.values.next({
        values: { ...L }
      });
    }
    a = {
      mount: C.keepDirtyValues ? a.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, o.mount = !d.isValid || !!C.keepIsValid || !!C.keepDirtyValues, o.watch = !!e.shouldUnregister, u.state.next({
      submitCount: C.keepSubmitCount ? t.submitCount : 0,
      isDirty: M ? !1 : C.keepDirty ? t.isDirty : !!(C.keepDefaultValues && !zt(p, i)),
      isSubmitted: C.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: M ? {} : C.keepDirtyValues ? C.keepDefaultValues && s ? Sr(i, s) : t.dirtyFields : C.keepDefaultValues && p ? Sr(i, p) : C.keepDirty ? t.dirtyFields : {},
      touchedFields: C.keepTouched ? t.touchedFields : {},
      errors: C.keepErrors ? t.errors : {},
      isSubmitSuccessful: C.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Ne = (p, C) => He(Ct(p) ? p(s) : p, C);
  return {
    control: {
      register: se,
      unregister: de,
      getFieldState: we,
      handleSubmit: De,
      setError: Le,
      _executeSchema: R,
      _getWatch: O,
      _getDirty: D,
      _updateValid: v,
      _removeUnmounted: T,
      _updateFieldArray: _,
      _updateDisabledField: Se,
      _getFieldArray: G,
      _reset: He,
      _resetDefaultValues: () => Ct(e.defaultValues) && e.defaultValues().then((p) => {
        Ne(p, e.resetOptions), u.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (p) => {
        t = {
          ...t,
          ...p
        };
      },
      _disableForm: $,
      _subjects: u,
      _proxyFormState: d,
      _setErrors: k,
      get _fields() {
        return n;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return o;
      },
      set _state(p) {
        o = p;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return a;
      },
      set _names(p) {
        a = p;
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
    trigger: he,
    register: se,
    handleSubmit: De,
    watch: me,
    setValue: j,
    getValues: Pe,
    reset: Ne,
    resetField: Te,
    clearErrors: ke,
    unregister: de,
    setError: Le,
    setFocus: (p, C = {}) => {
      const N = V(n, p), B = N && N._f;
      if (B) {
        const M = B.refs ? B.refs[0] : B.ref;
        M.focus && (M.focus(), C.shouldSelect && Ct(M.select) && M.select());
      }
    },
    getFieldState: we
  };
}
function rl(r = {}) {
  const e = q.useRef(void 0), t = q.useRef(void 0), [n, i] = q.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ct(r.defaultValues),
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
    defaultValues: Ct(r.defaultValues) ? void 0 : r.defaultValues
  });
  e.current || (e.current = {
    ...Pm(r),
    formState: n
  });
  const s = e.current.control;
  return s._options = r, Xi({
    subject: s._subjects.state,
    next: (o) => {
      Ua(o, s._proxyFormState, s._updateFormState, !0) && i({ ...s._formState });
    }
  }), q.useEffect(() => s._disableForm(r.disabled), [s, r.disabled]), q.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const o = s._getDirty();
      o !== n.isDirty && s._subjects.state.next({
        isDirty: o
      });
    }
  }, [s, n.isDirty]), q.useEffect(() => {
    r.values && !zt(r.values, t.current) ? (s._reset(r.values, s._options.resetOptions), t.current = r.values, i((o) => ({ ...o }))) : s._resetDefaultValues();
  }, [r.values, s]), q.useEffect(() => {
    r.errors && s._setErrors(r.errors);
  }, [r.errors, s]), q.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), q.useEffect(() => {
    r.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [r.shouldUnregister, s]), e.current.formState = Ga(n, s), e.current;
}
var zm = "Label", nl = ct.forwardRef((r, e) => /* @__PURE__ */ f(
  cc.label,
  {
    ...r,
    ref: e,
    onMouseDown: (t) => {
      t.target.closest("button, input, select, textarea") || (r.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
nl.displayName = zm;
var il = nl;
const Nn = ct.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ f(
  il,
  {
    ref: t,
    className: le(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      r
    ),
    ...e
  }
));
Nn.displayName = il.displayName;
const sl = _m, ol = ct.createContext(
  {}
), js = ({
  ...r
}) => {
  const { formState: e } = Wt();
  return /* @__PURE__ */ f(ol.Provider, { value: { name: r.name }, children: /* @__PURE__ */ f(km, { ...r, disabled: e.isSubmitting }) });
}, Zn = () => {
  const r = ct.useContext(ol), e = ct.useContext(al), { getFieldState: t, formState: n } = Wt(), i = t(r.name, n);
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
}, al = ct.createContext(
  {}
), ll = ct.forwardRef(({ className: r, ...e }, t) => {
  const n = ct.useId();
  return /* @__PURE__ */ f(al.Provider, { value: { id: n }, children: /* @__PURE__ */ f("div", { ref: t, className: le("space-y-2", r), ...e }) });
});
ll.displayName = "FormItem";
const Bm = ct.forwardRef(({ className: r, ...e }, t) => {
  const { error: n, formItemId: i } = Zn();
  return /* @__PURE__ */ f(
    Nn,
    {
      ref: t,
      className: le(n && "text-f1-foreground-critical", r),
      htmlFor: i,
      ...e
    }
  );
});
Bm.displayName = "FormLabel";
const cl = ct.forwardRef(({ ...r }, e) => {
  const { error: t, formItemId: n, formDescriptionId: i, formMessageId: s } = Zn();
  return /* @__PURE__ */ f(
    dc,
    {
      ref: e,
      id: n,
      "aria-describedby": t ? `${i} ${s}` : `${i}`,
      "aria-invalid": !!t,
      ...r
    }
  );
});
cl.displayName = "FormControl";
const dl = ct.forwardRef(({ className: r, ...e }, t) => {
  const { formDescriptionId: n } = Zn();
  return /* @__PURE__ */ f(
    "p",
    {
      ref: t,
      id: n,
      className: le("text-base text-f1-foreground-secondary", r),
      ...e
    }
  );
});
dl.displayName = "FormDescription";
const ul = ct.forwardRef(
  ({ className: r, children: e, fallback: t, ...n }, i) => {
    const { error: s, formMessageId: o } = Zn(), { forms: a } = Tt(), l = s ? s.message ?? t ?? a.validation.invalidType : e;
    return l ? /* @__PURE__ */ W(
      "div",
      {
        ref: i,
        id: o,
        className: le("flex gap-1", r),
        ...n,
        children: [
          /* @__PURE__ */ f(Gr, { icon: wo, color: "critical" }),
          /* @__PURE__ */ f("span", { className: "text-base font-medium text-f1-foreground-critical", children: l })
        ]
      }
    ) : null;
  }
);
ul.displayName = "FormMessage";
function Vm({
  isActionBar: r,
  isDirty: e,
  actionBarStatus: t,
  hasErrors: n,
  errorCount: i,
  resolvedActionBarLabel: s,
  centerActionBarInFrameContent: o,
  submitLabel: a,
  submitIcon: l,
  discardableChanges: c,
  discardLabel: d,
  discardIcon: u,
  issuesOneLabel: h,
  issuesOtherLabel: m,
  onSubmit: g,
  onDiscard: y,
  goToPreviousError: v,
  goToNextError: A
}) {
  return r ? /* @__PURE__ */ f(
    mi,
    {
      isOpen: e || t === "loading" || t === "success",
      variant: "light",
      status: n ? void 0 : t,
      centerInFrameContent: o,
      label: s,
      leftContent: n ? /* @__PURE__ */ W("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ W("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ f(Gr, { icon: wo, size: "md", color: "critical" }),
          /* @__PURE__ */ f("span", { className: "font-medium text-f1-foreground-critical", children: i === 1 ? h.replace("{{count}}", String(i)) : m.replace("{{count}}", String(i)) })
        ] }),
        i > 1 && /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ f(
            Ke,
            {
              icon: uc,
              onClick: v,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }
          ),
          /* @__PURE__ */ f(
            Ke,
            {
              icon: fc,
              onClick: A,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            }
          )
        ] })
      ] }) : void 0,
      primaryActions: [
        {
          label: a,
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
    mi,
    {
      isOpen: t === "loading" || t === "success",
      variant: "light",
      status: t,
      label: s
    }
  );
}
const Qi = "gap-4", fl = "mt-6", hl = "max-w-[720px]", Gt = "md", es = vt(null);
function ts() {
  const r = dt(es);
  if (!r)
    throw new Error("useF0FormContext must be used within a F0Form");
  return r;
}
function Kt(r, e, t) {
  const n = ["forms", r];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function Ee(r, e) {
  return r._def?.typeName === e;
}
function Jt(r) {
  return Ee(r, "ZodEffects") ? r._def.schema : r;
}
const ml = /* @__PURE__ */ new WeakMap();
function Iv(r, e) {
  ml.set(r, e);
  const t = r;
  return t._f0Config = e, t._innerSchema = r, t;
}
function br(r) {
  const e = r;
  return e._f0Config ? e._f0Config : ml.get(r);
}
function Pv(r) {
  return br(r) !== void 0;
}
function yt(r) {
  let e = r;
  for (; Ee(e, "ZodOptional") || Ee(e, "ZodNullable") || Ee(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function Hm(r, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("useUpload" in e && e.useUpload)
    return "file";
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = yt(r);
  return Ee(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : Ee(t, "ZodNumber") ? "number" : Ee(t, "ZodBoolean") ? "switch" : Ee(t, "ZodDate") ? "date" : Ee(t, "ZodEnum") || Ee(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : Ee(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function pl(r) {
  return Ee(r, "ZodOptional") || Ee(r, "ZodNullable") || Ee(r, "ZodDefault") && pl(r._def.innerType);
}
const jm = /* @__PURE__ */ new Set([
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
function $m(r) {
  const e = yt(r);
  return Ee(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "min" ? (n.value ?? 0) >= 1 : jm.has(n.kind)) : !1;
}
function gl(r) {
  if (pl(r))
    return !1;
  const e = yt(r);
  return Ee(e, "ZodString") ? $m(r) : !0;
}
function Wm(r, e) {
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
function qn(r, e) {
  return typeof r == "function" ? r({ values: e }) : Wm(r, e);
}
function rs(r, e) {
  return r === void 0 ? !1 : typeof r == "function" ? r({ values: e }) : r;
}
function nr(r, e) {
  if (r !== void 0)
    return typeof r == "function" ? r({ values: e }) : r;
}
function Gm(r) {
  const e = yt(r);
  return Ee(e, "ZodLiteral") && e._def.value === !0;
}
function Um({
  field: r,
  formField: e
}) {
  const t = r.validation && Gm(r.validation);
  return /* @__PURE__ */ f(
    hc,
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
function Zm({
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
  return /* @__PURE__ */ f(Yt, { children: r.render(s) });
}
function qm(r, e) {
  if (r)
    return {
      value: { from: r, to: r },
      granularity: e?.[0] ?? "day"
    };
}
function Km(r) {
  return r?.value?.from;
}
function vl({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = H(
    () => qm(
      e.value ?? void 0,
      r.granularities
    ),
    [e.value, r.granularities]
  ), s = (o) => {
    e.onChange(Km(o) ?? null);
  };
  return /* @__PURE__ */ f(
    Lo,
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
      size: Gt,
      hideLabel: !0,
      error: t,
      loading: n
    }
  );
}
function _i(r) {
  if (!r || !(r instanceof Date) || isNaN(r.getTime())) return "";
  const e = String(r.getHours()).padStart(2, "0"), t = String(r.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function Xm(r) {
  if (!r) return;
  const [e, t] = r.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const n = /* @__PURE__ */ new Date();
  return n.setHours(e, t, 0, 0), n;
}
function ai(r, e) {
  if (!r) return;
  const t = new Date(r);
  if (e) {
    const [n, i, s] = e.split(":").map(Number);
    t.setHours(n ?? 0, i ?? 0, s ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function yl({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = H(
    () => _i(e.value ?? void 0),
    [e.value]
  ), s = K(
    (o) => {
      if (!o) {
        e.onChange(null);
        return;
      }
      const a = Xm(o);
      e.onChange(a);
    },
    [e]
  );
  return /* @__PURE__ */ f(
    _o,
    {
      type: "time",
      label: r.label,
      disabled: r.disabled,
      value: i,
      onChange: s,
      size: Gt,
      hideLabel: !0,
      error: t,
      loading: n,
      clearable: r.clearable,
      name: e.name,
      ref: e.ref,
      icon: mc
    }
  );
}
function Ym({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = e.value ?? void 0, s = H(() => _i(i), [i]), o = K(
    (h) => {
      if (!h) {
        e.onChange(null);
        return;
      }
      e.onChange(ai(h, s));
    },
    [e, s]
  ), a = K(
    (h) => {
      if (!h) {
        if (i) {
          const g = new Date(i);
          g.setHours(0, 0, 0, 0), e.onChange(g);
        }
        return;
      }
      const m = _i(h);
      if (!i) {
        const g = /* @__PURE__ */ new Date();
        g.setHours(0, 0, 0, 0), e.onChange(ai(g, m));
        return;
      }
      e.onChange(ai(i, m));
    },
    [e, i]
  ), l = H(
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
  ), c = H(
    () => ({
      ...e,
      value: i,
      onChange: o
    }),
    [e, i, o]
  ), d = H(
    () => ({
      id: `${r.id}-time`,
      type: "time",
      label: "Time",
      disabled: r.disabled,
      clearable: !1
      // Time clearing is handled via date clear
    }),
    [r.id, r.disabled]
  ), u = H(
    () => ({
      ...e,
      value: i,
      onChange: a
    }),
    [e, i, a]
  );
  return /* @__PURE__ */ W("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ f("div", { className: "flex-1", children: /* @__PURE__ */ f(
      vl,
      {
        field: l,
        formField: c,
        error: t,
        loading: n
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "w-32", children: /* @__PURE__ */ f(
      yl,
      {
        field: d,
        formField: u,
        error: t,
        loading: n
      }
    ) })
  ] });
}
function Jm(r) {
  if (!(!r?.from || !r?.to))
    return {
      value: { from: r.from, to: r.to },
      granularity: "range"
    };
}
function Qm(r) {
  if (!(!r?.value?.from || !r?.value?.to))
    return {
      from: r.value.from,
      to: r.value.to
    };
}
function ep({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = H(
    () => Jm(
      e.value ?? void 0
    ),
    [e.value]
  ), s = (a) => {
    e.onChange(Qm(a) ?? null);
  }, o = r.fromLabel && r.toLabel ? `${r.label} (${r.fromLabel} - ${r.toLabel})` : r.label;
  return /* @__PURE__ */ f(
    Lo,
    {
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
      size: Gt,
      hideLabel: !0,
      error: t,
      loading: n
    }
  );
}
function tp({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  return /* @__PURE__ */ f(
    Md,
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
      size: Gt,
      hideLabel: !0,
      error: t,
      loading: n,
      clearable: r.clearable
    }
  );
}
function rp({
  field: r,
  formField: e
}) {
  const t = e.value;
  return /* @__PURE__ */ f(
    Fd,
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
function np({
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
    size: Gt,
    hideLabel: !0
  };
  return r.multiple ? /* @__PURE__ */ f(
    lr,
    {
      ...i,
      multiple: !0,
      clearable: r.clearable,
      value: e.value ?? [],
      onChange: (s) => e.onChange(s)
    }
  ) : r.clearable ? /* @__PURE__ */ f(
    lr,
    {
      ...i,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  ) : /* @__PURE__ */ f(
    lr,
    {
      ...i,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  );
}
function ip({
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
    size: Gt,
    hideLabel: !0
  };
  return r.multiple ? /* @__PURE__ */ f(
    lr,
    {
      ...i,
      multiple: !0,
      clearable: r.clearable,
      value: e.value ?? [],
      onChange: (s) => e.onChange(s)
    }
  ) : r.clearable ? /* @__PURE__ */ f(
    lr,
    {
      ...i,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  ) : /* @__PURE__ */ f(
    lr,
    {
      ...i,
      value: e.value ?? void 0,
      onChange: (s) => e.onChange(s)
    }
  );
}
function sp(r) {
  const { field: e } = r;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? /* @__PURE__ */ f(
    ip,
    {
      ...r,
      field: e
    }
  ) : "options" in e && e.options !== void 0 ? /* @__PURE__ */ f(
    np,
    {
      ...r,
      field: e
    }
  ) : null;
}
function op(r) {
  const e = yt(r);
  return Ee(e, "ZodLiteral") && e._def.value === !0;
}
function ap({
  field: r,
  formField: e
}) {
  const t = r.validation && op(r.validation);
  return /* @__PURE__ */ f(
    pc,
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
const lp = {
  email: "name@example.com"
}, cp = {
  url: vc,
  email: gc
};
function dp({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  const i = r.inputType ?? "text", s = r.placeholder ?? lp[i] ?? void 0, o = cp[i];
  return /* @__PURE__ */ f(
    _o,
    {
      ...e,
      label: r.label,
      type: i,
      placeholder: s,
      disabled: r.disabled,
      value: e.value != null ? String(e.value) : "",
      size: Gt,
      hideLabel: !0,
      error: t,
      loading: n,
      icon: o,
      clearable: r.clearable
    }
  );
}
function up(r) {
  return r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
}
function fp({
  entry: r,
  useUpload: e,
  onUploadComplete: t,
  onRemove: n,
  onError: i,
  disabled: s,
  translations: o
}) {
  const a = !!r.file, l = e?.(), c = l?.upload, d = l?.cancelUpload, u = l?.progress ?? 0, h = l?.status ?? "idle", [m, g] = re(null), y = Y(!1), v = K(async () => {
    if (!(!a || !r.file || !c) && !y.current) {
      y.current = !0;
      try {
        const w = await c(r.file);
        w.type === "success" ? t(w.value) : n();
      } catch {
        const w = o.uploadFailed;
        g(w), i(w);
      }
    }
  }, [
    a,
    r.file,
    c,
    t,
    n,
    i,
    o
  ]);
  ie(() => {
    a && v();
  }, [a, v]);
  const A = K(() => {
    a && (h === "uploading" || h === "processing") && d?.(), n();
  }, [a, h, d, n]), _ = a && (h === "uploading" || h === "processing"), S = Math.round(u * 100), k = r.file ?? {
    name: r.initialFile?.name ?? "",
    type: r.initialFile?.type ?? ""
  }, b = r.file?.name ?? r.initialFile?.name ?? "", x = r.file?.size ?? r.initialFile?.size;
  return /* @__PURE__ */ W(
    "div",
    {
      className: le(
        "flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-2.5 py-2",
        m && "border-f1-border-critical"
      ),
      children: [
        /* @__PURE__ */ f(yc, { file: k, size: "md" }),
        /* @__PURE__ */ W("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [
          /* @__PURE__ */ f("span", { className: "truncate text-base font-medium text-f1-foreground", children: b }),
          /* @__PURE__ */ f("span", { className: "text-sm text-f1-foreground-secondary", children: m || (_ ? h === "processing" ? o.processing : `${o.uploading} ${S}%` : x != null ? up(x) : null) })
        ] }),
        !s && /* @__PURE__ */ f(
          Ke,
          {
            variant: "ghost",
            size: "sm",
            label: o.remove,
            onClick: A,
            icon: Oi,
            hideLabel: !0
          }
        )
      ]
    }
  );
}
const hp = /* @__PURE__ */ new Set([
  "image",
  "video",
  "audio",
  "text",
  "application"
]);
function Ci(r) {
  return hp.has(r) ? `${r}/*` : r;
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
function mp(r) {
  if (!r || r.length === 0) return;
  const e = [];
  for (const t of r) {
    const n = Ci(t);
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
function pp(r, e, t) {
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
function gp({
  field: r,
  formField: e,
  error: t
}) {
  const { forms: n } = Tt(), { initialFiles: i } = ts(), s = qc(), o = Y(null), [a, l] = re(!1), c = r.multiple ?? !1, [d, u] = re(
    () => pp(i, e.value, c)
  ), [h, m] = re(null), g = n.file, y = d.length > 0, v = c || !y, A = r.accept ? r.accept.map(Ci).join(",") : void 0, _ = H(
    () => mp(r.accept),
    [r.accept]
  ), S = K(
    (I) => r.accept && !r.accept.some((U) => {
      const j = Ci(U);
      return j.endsWith("/*") ? I.type.startsWith(j.replace("/*", "/")) : I.type === j;
    }) ? g.invalidFileType.replace(
      "{{types}}",
      _ ?? ""
    ) : r.maxSizeMB && I.size > r.maxSizeMB * 1024 * 1024 ? g.fileTooLarge.replace(
      "{{maxSize}}",
      String(r.maxSizeMB)
    ) : null,
    [r.accept, r.maxSizeMB, g, _]
  ), k = K(
    (I) => {
      m(null);
      const U = c ? I : [I[0]];
      for (const j of U) {
        const ne = S(j);
        if (ne) {
          m(ne);
          continue;
        }
        const ce = `${j.name}-${j.size}-${Date.now()}-${Math.random()}`;
        u((he) => c ? [...he, { key: ce, file: j }] : [{ key: ce, file: j }]);
      }
    },
    [c, S]
  ), b = K(
    (I) => {
      I.preventDefault(), I.stopPropagation(), r.disabled || l(!0);
    },
    [r.disabled]
  ), x = K((I) => {
    I.preventDefault(), I.stopPropagation(), l(!1);
  }, []), w = K(
    (I) => {
      if (I.preventDefault(), I.stopPropagation(), l(!1), r.disabled) return;
      const U = Array.from(I.dataTransfer.files);
      U.length > 0 && k(U);
    },
    [r.disabled, k]
  ), R = K(
    (I) => {
      const U = Array.from(I.target.files ?? []);
      U.length > 0 && k(U), o.current && (o.current.value = "");
    },
    [k]
  ), z = K(() => {
    r.disabled || o.current?.click();
  }, [r.disabled]), F = K(
    (I) => {
      (I.key === "Enter" || I.key === " ") && (I.preventDefault(), z());
    },
    [z]
  ), T = K(
    (I, U) => {
      if (u(
        (j) => j.map((ne) => ne.key === I ? { ...ne, value: U } : ne)
      ), c) {
        const j = Array.isArray(e.value) ? e.value : [];
        e.onChange([...j, U]);
      } else
        e.onChange(U);
    },
    [c, e]
  ), D = K(
    (I) => {
      const U = d.find((j) => j.key === I);
      if (u((j) => j.filter((ne) => ne.key !== I)), U?.value)
        if (c) {
          const j = Array.isArray(e.value) ? e.value : [];
          e.onChange(j.filter((ne) => ne !== U.value));
        } else
          e.onChange(void 0);
      else c || e.onChange(void 0);
    },
    [d, c, e]
  ), O = K((I, U) => {
    u(
      (j) => j.map(
        (ne) => ne.key === I ? { ...ne, error: U } : ne
      )
    );
  }, []), G = a ? g.dropzoneActive : r.description ?? (c ? g.dropzoneMultiple : g.dropzone);
  return /* @__PURE__ */ W("div", { className: "flex flex-col gap-2", children: [
    v && /* @__PURE__ */ W(
      "div",
      {
        role: "button",
        tabIndex: r.disabled ? -1 : 0,
        onDragOver: b,
        onDragLeave: x,
        onDrop: w,
        onClick: z,
        onKeyDown: F,
        "aria-disabled": r.disabled,
        className: le(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors",
          a ? "border-f1-border-accent bg-f1-background-accent-bold/5" : t || h ? "border-f1-border-critical bg-f1-background" : "border-f1-border bg-f1-background",
          !r.disabled && !a && "hover:border-f1-border-hover hover:bg-f1-background-secondary",
          r.disabled && "cursor-not-allowed opacity-50",
          Ln("rounded-lg")
        ),
        children: [
          /* @__PURE__ */ f("div", { className: "flex aspect-square items-center justify-center rounded-md border border-solid border-f1-border p-1 text-f1-icon", children: /* @__PURE__ */ f(Gr, { icon: bc, size: "lg" }) }),
          /* @__PURE__ */ W("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ f("span", { className: "text-center text-base text-f1-foreground-secondary", children: G }),
            !a && _ && /* @__PURE__ */ f("span", { className: "text-center text-sm text-f1-foreground-secondary/70", children: g.acceptedTypes.replace(
              "{{types}}",
              _
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f(
      "input",
      {
        ref: o,
        id: s,
        type: "file",
        accept: A,
        multiple: c,
        onChange: R,
        className: "hidden",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    h && /* @__PURE__ */ f("p", { className: "text-base text-f1-foreground-critical", children: h }),
    d.length > 0 && /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: d.map((I) => /* @__PURE__ */ f(
      fp,
      {
        entry: I,
        useUpload: I.file ? r.useUpload : void 0,
        onUploadComplete: (U) => T(I.key, U),
        onRemove: () => D(I.key),
        onError: (U) => O(I.key, U),
        disabled: r.disabled,
        translations: {
          remove: g.remove,
          uploading: g.uploading,
          processing: g.processing,
          uploadFailed: g.uploadFailed
        }
      },
      I.key
    )) })
  ] });
}
function vp({
  field: r,
  formField: e,
  error: t,
  loading: n
}) {
  return /* @__PURE__ */ f(
    Ld,
    {
      ...e,
      label: r.label,
      placeholder: r.placeholder,
      disabled: r.disabled,
      rows: r.rows,
      maxLength: r.maxLength,
      value: e.value != null ? String(e.value) : "",
      size: Gt,
      hideLabel: !0,
      error: t,
      loading: n
    }
  );
}
function yp({
  field: r,
  formField: e,
  fieldState: t,
  isSubmitting: n,
  isRequired: i,
  values: s
}) {
  const o = !!t.error, { isValidating: a } = t, l = rs(r.disabled, s) || n, c = {
    error: o,
    loading: a
  };
  switch (r.type) {
    case "text":
      return /* @__PURE__ */ f(
        dp,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "number":
      return /* @__PURE__ */ f(
        tp,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "textarea":
      return /* @__PURE__ */ f(
        vp,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "select":
      return /* @__PURE__ */ f(
        sp,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "checkbox":
      return /* @__PURE__ */ f(
        Um,
        {
          field: { ...r, disabled: l },
          formField: e
        }
      );
    case "switch":
      return /* @__PURE__ */ f(
        ap,
        {
          field: { ...r, disabled: l },
          formField: e
        }
      );
    case "date":
      return /* @__PURE__ */ f(
        vl,
        {
          field: {
            ...r,
            disabled: l,
            // Evaluate dynamic date constraints
            minDate: nr(r.minDate, s),
            maxDate: nr(r.maxDate, s)
          },
          formField: e,
          ...c
        }
      );
    case "time":
      return /* @__PURE__ */ f(
        yl,
        {
          field: {
            ...r,
            disabled: l,
            // Evaluate dynamic date constraints
            minDate: nr(r.minDate, s),
            maxDate: nr(r.maxDate, s)
          },
          formField: e,
          ...c
        }
      );
    case "datetime":
      return /* @__PURE__ */ f(
        Ym,
        {
          field: {
            ...r,
            disabled: l,
            // Evaluate dynamic date constraints
            minDate: nr(r.minDate, s),
            maxDate: nr(r.maxDate, s)
          },
          formField: e,
          ...c
        }
      );
    case "daterange":
      return /* @__PURE__ */ f(
        ep,
        {
          field: { ...r, disabled: l },
          formField: e,
          ...c
        }
      );
    case "richtext":
      return /* @__PURE__ */ f(
        rp,
        {
          field: { ...r, disabled: l },
          formField: e
        }
      );
    case "file":
      return /* @__PURE__ */ f(
        gp,
        {
          field: { ...r, disabled: l },
          formField: e,
          error: o
        }
      );
    case "custom":
      return /* @__PURE__ */ f(
        Zm,
        {
          field: { ...r, disabled: l },
          formField: e,
          isValidating: a,
          required: i
        }
      );
    default:
      return null;
  }
}
function Kn({ field: r, sectionId: e }) {
  const t = Wt(), n = t.watch(), { isSubmitting: i } = t.formState, { formName: s } = ts(), { forms: o } = Tt(), a = rs(r.disabled, n), l = Y(a);
  ie(() => {
    const m = l.current;
    if (l.current = a, !m && a && r.resetOnDisable) {
      const g = t.formState.defaultValues?.[r.id];
      t.setValue(r.id, g, { shouldValidate: !1 });
    }
  }, [a, r.resetOnDisable, r.id, t]);
  const c = !r.renderIf || qn(r.renderIf, n), d = r.type !== "checkbox" && r.type !== "custom", u = r.validation && gl(r.validation), h = Kt(s, e, r.id);
  return c ? /* @__PURE__ */ f(
    js,
    {
      control: t.control,
      name: r.id,
      render: ({ field: m, fieldState: g }) => /* @__PURE__ */ W(ll, { id: h, className: "scroll-mt-4", children: [
        d && /* @__PURE__ */ W(
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
        /* @__PURE__ */ f(cl, { children: yp({
          field: r,
          formField: m,
          fieldState: g,
          isSubmitting: i,
          isRequired: u,
          values: n
        }) }),
        r.helpText && /* @__PURE__ */ f(dl, { children: r.helpText }),
        /* @__PURE__ */ f(
          ul,
          {
            fallback: u ? o.validation.required : o.validation.invalidType
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ f(
    js,
    {
      control: t.control,
      name: r.id,
      render: () => /* @__PURE__ */ f("span", { className: "hidden", "aria-hidden": "true" })
    }
  );
}
function ns({ row: r, sectionId: e }) {
  return /* @__PURE__ */ f("div", { className: `flex xs:flex-row flex-col ${Qi} [&>*]:flex-1`, children: r.fields.map((t) => /* @__PURE__ */ f(Kn, { field: t, sectionId: e }, t.id)) });
}
function bp(r) {
  const e = yt(r);
  return Ee(e, "ZodLiteral") && e._def.value === !0;
}
function is({ fields: r }) {
  const e = Wt(), { watch: t, setValue: n } = e, { isSubmitting: i } = e.formState, s = t(), o = H(
    () => r.filter(
      (h) => !h.renderIf || qn(h.renderIf, s)
    ),
    [r, s]
  ), a = H(
    () => Object.fromEntries(
      o.map((h) => [
        h.id,
        rs(h.disabled, s) || i
      ])
    ),
    [o, i, s]
  ), l = Y({});
  ie(() => {
    const h = l.current, m = e.formState.defaultValues ?? {};
    for (const g of o) {
      if (!(g.id in h))
        continue;
      const y = h[g.id], v = a[g.id] ?? !1;
      if (!y && v && g.resetOnDisable) {
        const A = m[g.id] ?? !1;
        n(g.id, A, { shouldValidate: !1 });
      }
    }
    l.current = { ...a };
  }, [a, o, e, n]);
  const c = H(
    () => o.map((h) => ({
      value: h.id,
      title: h.label,
      description: h.helpText,
      disabled: a[h.id] ?? !1,
      required: !!(h.validation && bp(h.validation))
    })),
    [o, a]
  ), d = H(
    () => o.filter((h) => s[h.id]).map((h) => h.id),
    [o, s]
  );
  return o.length === 0 ? null : /* @__PURE__ */ f(
    Id,
    {
      multiple: !0,
      isToggle: !0,
      grouped: !0,
      items: c,
      value: d,
      onChange: (h) => {
        for (const m of o) {
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
const Gs = (r, e, t) => {
  if (r && "reportValidity" in r) {
    const n = V(t, e);
    r.setCustomValidity(n && n.message || ""), r.reportValidity();
  }
}, bl = (r, e) => {
  for (const t in e.fields) {
    const n = e.fields[t];
    n && n.ref && "reportValidity" in n.ref ? Gs(n.ref, t, r) : n.refs && n.refs.forEach((i) => Gs(i, t, r));
  }
}, xp = (r, e) => {
  e.shouldUseNativeValidation && bl(r, e);
  const t = {};
  for (const n in r) {
    const i = V(e.fields, n), s = Object.assign(r[n] || {}, { ref: i && i.ref });
    if (wp(e.names || Object.keys(r), n)) {
      const o = Object.assign({}, V(t, n));
      xe(o, "root", s), xe(t, n, o);
    } else xe(t, n, s);
  }
  return t;
}, wp = (r, e) => r.some((t) => t.startsWith(e + "."));
var _p = function(r, e) {
  for (var t = {}; r.length; ) {
    var n = r[0], i = n.code, s = n.message, o = n.path.join(".");
    if (!t[o]) if ("unionErrors" in n) {
      var a = n.unionErrors[0].errors[0];
      t[o] = { message: a.message, type: a.code };
    } else t[o] = { message: s, type: i };
    if ("unionErrors" in n && n.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(u) {
        return r.push(u);
      });
    }), e) {
      var l = t[o].types, c = l && l[n.code];
      t[o] = Ka(o, e, t, i, c ? [].concat(c, n.message) : n.message);
    }
    r.shift();
  }
  return t;
}, Cp = function(r, e, t) {
  return t === void 0 && (t = {}), function(n, i, s) {
    try {
      return Promise.resolve((function(o, a) {
        try {
          var l = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(c) {
            return s.shouldUseNativeValidation && bl({}, s), { errors: {}, values: t.raw ? n : c };
          });
        } catch (c) {
          return a(c);
        }
        return l && l.then ? l.then(void 0, a) : l;
      })(0, function(o) {
        if ((function(a) {
          return Array.isArray(a?.errors);
        })(o)) return { values: {}, errors: xp(_p(o.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
}, be;
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
})(be || (be = {}));
var Us;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Us || (Us = {}));
const J = be.arrayToEnum([
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
]), Pt = (r) => {
  switch (typeof r) {
    case "undefined":
      return J.undefined;
    case "string":
      return J.string;
    case "number":
      return Number.isNaN(r) ? J.nan : J.number;
    case "boolean":
      return J.boolean;
    case "function":
      return J.function;
    case "bigint":
      return J.bigint;
    case "symbol":
      return J.symbol;
    case "object":
      return Array.isArray(r) ? J.array : r === null ? J.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? J.promise : typeof Map < "u" && r instanceof Map ? J.map : typeof Set < "u" && r instanceof Set ? J.set : typeof Date < "u" && r instanceof Date ? J.date : J.object;
    default:
      return J.unknown;
  }
}, P = be.arrayToEnum([
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
class At extends Error {
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
            const c = o.path[l];
            l === o.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(t(o))) : a[c] = a[c] || { _errors: [] }, a = a[c], l++;
          }
        }
    };
    return i(this), n;
  }
  static assert(e) {
    if (!(e instanceof At))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, be.jsonStringifyReplacer, 2);
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
At.create = (r) => new At(r);
const Ei = (r, e) => {
  let t;
  switch (r.code) {
    case P.invalid_type:
      r.received === J.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case P.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, be.jsonStringifyReplacer)}`;
      break;
    case P.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${be.joinValues(r.keys, ", ")}`;
      break;
    case P.invalid_union:
      t = "Invalid input";
      break;
    case P.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${be.joinValues(r.options)}`;
      break;
    case P.invalid_enum_value:
      t = `Invalid enum value. Expected ${be.joinValues(r.options)}, received '${r.received}'`;
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
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : be.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
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
      t = e.defaultError, be.assertNever(r);
  }
  return { message: t };
};
let Ep = Ei;
function Sp() {
  return Ep;
}
const kp = (r) => {
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
  const l = n.filter((c) => !!c).slice().reverse();
  for (const c of l)
    a = c(o, { data: e, defaultError: a }).message;
  return {
    ...i,
    path: s,
    message: a
  };
};
function X(r, e) {
  const t = Sp(), n = kp({
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
      t === Ei ? void 0 : Ei
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
        return ue;
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
    return et.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const i of t) {
      const { key: s, value: o } = i;
      if (s.status === "aborted" || o.status === "aborted")
        return ue;
      s.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const ue = Object.freeze({
  status: "aborted"
}), Dr = (r) => ({ status: "dirty", value: r }), ut = (r) => ({ status: "valid", value: r }), Zs = (r) => r.status === "aborted", qs = (r) => r.status === "dirty", fr = (r) => r.status === "valid", Rn = (r) => typeof Promise < "u" && r instanceof Promise;
var Q;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e?.message;
})(Q || (Q = {}));
class jt {
  constructor(e, t, n, i) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ks = (r, e) => {
  if (fr(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new At(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function pe(r) {
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
class ve {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Pt(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: Pt(e.data),
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
        parsedType: Pt(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Rn(t))
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
      parsedType: Pt(e)
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
      parsedType: Pt(e)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: e, path: [], parent: t });
        return fr(n) ? {
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
    return this._parseAsync({ data: e, path: [], parent: t }).then((n) => fr(n) ? {
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
      parsedType: Pt(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (Rn(i) ? i : Promise.resolve(i));
    return Ks(n, s);
  }
  refine(e, t) {
    const n = (i) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, s) => {
      const o = e(i), a = () => s.addIssue({
        code: P.custom,
        ...n(i)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof t == "function" ? t(n, i) : t), !1));
  }
  _refinement(e) {
    return new mr({
      schema: this,
      typeName: fe.ZodEffects,
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
    return Vt.create(this, this._def);
  }
  nullable() {
    return pr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return St.create(this);
  }
  promise() {
    return Mn.create(this, this._def);
  }
  or(e) {
    return Tn.create([this, e], this._def);
  }
  and(e) {
    return On.create(this, e, this._def);
  }
  transform(e) {
    return new mr({
      ...pe(this._def),
      schema: this,
      typeName: fe.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Di({
      ...pe(this._def),
      innerType: this,
      defaultValue: t,
      typeName: fe.ZodDefault
    });
  }
  brand() {
    return new Kp({
      typeName: fe.ZodBranded,
      type: this,
      ...pe(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Ni({
      ...pe(this._def),
      innerType: this,
      catchValue: t,
      typeName: fe.ZodCatch
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
    return ss.create(this, e);
  }
  readonly() {
    return Ri.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Dp = /^c[^\s-]{8,}$/i, Np = /^[0-9a-z]+$/, Rp = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Ap = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Tp = /^[a-z0-9_-]{21}$/i, Op = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Mp = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Fp = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Lp = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let li;
const Ip = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Pp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, zp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Bp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Vp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Hp = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, xl = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", jp = new RegExp(`^${xl}$`);
function wl(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function $p(r) {
  return new RegExp(`^${wl(r)}$`);
}
function Wp(r) {
  let e = `${xl}T${wl(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function Gp(r, e) {
  return !!((e === "v4" || !e) && Ip.test(r) || (e === "v6" || !e) && zp.test(r));
}
function Up(r, e) {
  if (!Op.test(r))
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
function Zp(r, e) {
  return !!((e === "v4" || !e) && Pp.test(r) || (e === "v6" || !e) && Bp.test(r));
}
class qt extends ve {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== J.string) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: P.invalid_type,
        expected: J.string,
        received: s.parsedType
      }), ue;
    }
    const n = new et();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), X(i, {
          code: P.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), X(i, {
          code: P.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = e.data.length > s.value, a = e.data.length < s.value;
        (o || a) && (i = this._getOrReturnCtx(e, i), o ? X(i, {
          code: P.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && X(i, {
          code: P.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        Fp.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "email",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        li || (li = new RegExp(Lp, "u")), li.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "emoji",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        Ap.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "uuid",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "nanoid")
        Tp.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "nanoid",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        Dp.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "cuid",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        Np.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "cuid2",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        Rp.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
          validation: "ulid",
          code: P.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), X(i, {
            validation: "url",
            code: P.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
        validation: "regex",
        code: P.invalid_string,
        message: s.message
      }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), X(i, {
        code: P.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), X(i, {
        code: P.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), X(i, {
        code: P.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), n.dirty()) : s.kind === "datetime" ? Wp(s).test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
        code: P.invalid_string,
        validation: "datetime",
        message: s.message
      }), n.dirty()) : s.kind === "date" ? jp.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
        code: P.invalid_string,
        validation: "date",
        message: s.message
      }), n.dirty()) : s.kind === "time" ? $p(s).test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
        code: P.invalid_string,
        validation: "time",
        message: s.message
      }), n.dirty()) : s.kind === "duration" ? Mp.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
        validation: "duration",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "ip" ? Gp(e.data, s.version) || (i = this._getOrReturnCtx(e, i), X(i, {
        validation: "ip",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "jwt" ? Up(e.data, s.alg) || (i = this._getOrReturnCtx(e, i), X(i, {
        validation: "jwt",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "cidr" ? Zp(e.data, s.version) || (i = this._getOrReturnCtx(e, i), X(i, {
        validation: "cidr",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64" ? Vp.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
        validation: "base64",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : s.kind === "base64url" ? Hp.test(e.data) || (i = this._getOrReturnCtx(e, i), X(i, {
        validation: "base64url",
        code: P.invalid_string,
        message: s.message
      }), n.dirty()) : be.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((i) => e.test(i), {
      validation: t,
      code: P.invalid_string,
      ...Q.errToObj(n)
    });
  }
  _addCheck(e) {
    return new qt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...Q.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...Q.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...Q.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...Q.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...Q.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...Q.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...Q.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...Q.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...Q.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...Q.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...Q.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...Q.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...Q.errToObj(e) });
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
      ...Q.errToObj(e?.message)
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
      ...Q.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...Q.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...Q.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...Q.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...Q.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...Q.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...Q.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...Q.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...Q.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, Q.errToObj(e));
  }
  trim() {
    return new qt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new qt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new qt({
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
qt.create = (r) => new qt({
  checks: [],
  typeName: fe.ZodString,
  coerce: r?.coerce ?? !1,
  ...pe(r)
});
function qp(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = t > n ? t : n, s = Number.parseInt(r.toFixed(i).replace(".", "")), o = Number.parseInt(e.toFixed(i).replace(".", ""));
  return s % o / 10 ** i;
}
class jr extends ve {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== J.number) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: P.invalid_type,
        expected: J.number,
        received: s.parsedType
      }), ue;
    }
    let n;
    const i = new et();
    for (const s of this._def.checks)
      s.kind === "int" ? be.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), X(n, {
        code: P.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: P.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: P.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? qp(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), X(n, {
        code: P.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), X(n, {
        code: P.not_finite,
        message: s.message
      }), i.dirty()) : be.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, Q.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, Q.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, Q.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, Q.toString(t));
  }
  setLimit(e, t, n, i) {
    return new jr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: Q.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new jr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: Q.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Q.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Q.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Q.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Q.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Q.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: Q.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Q.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Q.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && be.isInteger(e.value));
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
jr.create = (r) => new jr({
  checks: [],
  typeName: fe.ZodNumber,
  coerce: r?.coerce || !1,
  ...pe(r)
});
class $r extends ve {
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
    if (this._getType(e) !== J.bigint)
      return this._getInvalidInput(e);
    let n;
    const i = new et();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: P.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: P.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: P.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : be.assertNever(s);
    return { status: i.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return X(t, {
      code: P.invalid_type,
      expected: J.bigint,
      received: t.parsedType
    }), ue;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, Q.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, Q.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, Q.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, Q.toString(t));
  }
  setLimit(e, t, n, i) {
    return new $r({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: Q.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new $r({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Q.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Q.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Q.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Q.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Q.toString(t)
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
$r.create = (r) => new $r({
  checks: [],
  typeName: fe.ZodBigInt,
  coerce: r?.coerce ?? !1,
  ...pe(r)
});
class Xs extends ve {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== J.boolean) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: P.invalid_type,
        expected: J.boolean,
        received: n.parsedType
      }), ue;
    }
    return ut(e.data);
  }
}
Xs.create = (r) => new Xs({
  typeName: fe.ZodBoolean,
  coerce: r?.coerce || !1,
  ...pe(r)
});
class An extends ve {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== J.date) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: P.invalid_type,
        expected: J.date,
        received: s.parsedType
      }), ue;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return X(s, {
        code: P.invalid_date
      }), ue;
    }
    const n = new et();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), X(i, {
        code: P.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), X(i, {
        code: P.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : be.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new An({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: Q.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: Q.toString(t)
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
An.create = (r) => new An({
  checks: [],
  coerce: r?.coerce || !1,
  typeName: fe.ZodDate,
  ...pe(r)
});
class Ys extends ve {
  _parse(e) {
    if (this._getType(e) !== J.symbol) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: P.invalid_type,
        expected: J.symbol,
        received: n.parsedType
      }), ue;
    }
    return ut(e.data);
  }
}
Ys.create = (r) => new Ys({
  typeName: fe.ZodSymbol,
  ...pe(r)
});
class Js extends ve {
  _parse(e) {
    if (this._getType(e) !== J.undefined) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: P.invalid_type,
        expected: J.undefined,
        received: n.parsedType
      }), ue;
    }
    return ut(e.data);
  }
}
Js.create = (r) => new Js({
  typeName: fe.ZodUndefined,
  ...pe(r)
});
class Qs extends ve {
  _parse(e) {
    if (this._getType(e) !== J.null) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: P.invalid_type,
        expected: J.null,
        received: n.parsedType
      }), ue;
    }
    return ut(e.data);
  }
}
Qs.create = (r) => new Qs({
  typeName: fe.ZodNull,
  ...pe(r)
});
class Si extends ve {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ut(e.data);
  }
}
Si.create = (r) => new Si({
  typeName: fe.ZodAny,
  ...pe(r)
});
class eo extends ve {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ut(e.data);
  }
}
eo.create = (r) => new eo({
  typeName: fe.ZodUnknown,
  ...pe(r)
});
class $t extends ve {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return X(t, {
      code: P.invalid_type,
      expected: J.never,
      received: t.parsedType
    }), ue;
  }
}
$t.create = (r) => new $t({
  typeName: fe.ZodNever,
  ...pe(r)
});
class to extends ve {
  _parse(e) {
    if (this._getType(e) !== J.undefined) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: P.invalid_type,
        expected: J.void,
        received: n.parsedType
      }), ue;
    }
    return ut(e.data);
  }
}
to.create = (r) => new to({
  typeName: fe.ZodVoid,
  ...pe(r)
});
class St extends ve {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), i = this._def;
    if (t.parsedType !== J.array)
      return X(t, {
        code: P.invalid_type,
        expected: J.array,
        received: t.parsedType
      }), ue;
    if (i.exactLength !== null) {
      const o = t.data.length > i.exactLength.value, a = t.data.length < i.exactLength.value;
      (o || a) && (X(t, {
        code: o ? P.too_big : P.too_small,
        minimum: a ? i.exactLength.value : void 0,
        maximum: o ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && t.data.length < i.minLength.value && (X(t, {
      code: P.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && t.data.length > i.maxLength.value && (X(t, {
      code: P.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((o, a) => i.type._parseAsync(new jt(t, o, t.path, a)))).then((o) => et.mergeArray(n, o));
    const s = [...t.data].map((o, a) => i.type._parseSync(new jt(t, o, t.path, a)));
    return et.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new St({
      ...this._def,
      minLength: { value: e, message: Q.toString(t) }
    });
  }
  max(e, t) {
    return new St({
      ...this._def,
      maxLength: { value: e, message: Q.toString(t) }
    });
  }
  length(e, t) {
    return new St({
      ...this._def,
      exactLength: { value: e, message: Q.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
St.create = (r, e) => new St({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: fe.ZodArray,
  ...pe(e)
});
function or(r) {
  if (r instanceof Oe) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = Vt.create(or(n));
    }
    return new Oe({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof St ? new St({
    ...r._def,
    type: or(r.element)
  }) : r instanceof Vt ? Vt.create(or(r.unwrap())) : r instanceof pr ? pr.create(or(r.unwrap())) : r instanceof Xt ? Xt.create(r.items.map((e) => or(e))) : r;
}
class Oe extends ve {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = be.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== J.object) {
      const c = this._getOrReturnCtx(e);
      return X(c, {
        code: P.invalid_type,
        expected: J.object,
        received: c.parsedType
      }), ue;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof $t && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        o.includes(c) || a.push(c);
    const l = [];
    for (const c of o) {
      const d = s[c], u = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: d._parse(new jt(i, u, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof $t) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of a)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: i.data[d] }
          });
      else if (c === "strict")
        a.length > 0 && (X(i, {
          code: P.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of a) {
        const u = i.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new jt(i, u, i.path, d)
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
    }).then((c) => et.mergeObjectSync(n, c)) : et.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return Q.errToObj, new Oe({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          const i = this._def.errorMap?.(t, n).message ?? n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: Q.errToObj(e).message ?? i
          } : {
            message: i
          };
        }
      } : {}
    });
  }
  strip() {
    return new Oe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Oe({
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
    return new Oe({
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
    return new Oe({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: fe.ZodObject
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
    return new Oe({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const n of be.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new Oe({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const n of be.objectKeys(this.shape))
      e[n] || (t[n] = this.shape[n]);
    return new Oe({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return or(this);
  }
  partial(e) {
    const t = {};
    for (const n of be.objectKeys(this.shape)) {
      const i = this.shape[n];
      e && !e[n] ? t[n] = i : t[n] = i.optional();
    }
    return new Oe({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const n of be.objectKeys(this.shape))
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof Vt; )
          s = s._def.innerType;
        t[n] = s;
      }
    return new Oe({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return _l(be.objectKeys(this.shape));
  }
}
Oe.create = (r, e) => new Oe({
  shape: () => r,
  unknownKeys: "strip",
  catchall: $t.create(),
  typeName: fe.ZodObject,
  ...pe(e)
});
Oe.strictCreate = (r, e) => new Oe({
  shape: () => r,
  unknownKeys: "strict",
  catchall: $t.create(),
  typeName: fe.ZodObject,
  ...pe(e)
});
Oe.lazycreate = (r, e) => new Oe({
  shape: r,
  unknownKeys: "strip",
  catchall: $t.create(),
  typeName: fe.ZodObject,
  ...pe(e)
});
class Tn extends ve {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const a of s)
        if (a.result.status === "valid")
          return a.result;
      for (const a of s)
        if (a.result.status === "dirty")
          return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((a) => new At(a.ctx.common.issues));
      return X(t, {
        code: P.invalid_union,
        unionErrors: o
      }), ue;
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
        d.status === "dirty" && !s && (s = { result: d, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (s)
        return t.common.issues.push(...s.ctx.common.issues), s.result;
      const a = o.map((l) => new At(l));
      return X(t, {
        code: P.invalid_union,
        unionErrors: a
      }), ue;
    }
  }
  get options() {
    return this._def.options;
  }
}
Tn.create = (r, e) => new Tn({
  options: r,
  typeName: fe.ZodUnion,
  ...pe(e)
});
function ki(r, e) {
  const t = Pt(r), n = Pt(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === J.object && n === J.object) {
    const i = be.objectKeys(e), s = be.objectKeys(r).filter((a) => i.indexOf(a) !== -1), o = { ...r, ...e };
    for (const a of s) {
      const l = ki(r[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (t === J.array && n === J.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const o = r[s], a = e[s], l = ki(o, a);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return t === J.date && n === J.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class On extends ve {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = (s, o) => {
      if (Zs(s) || Zs(o))
        return ue;
      const a = ki(s.value, o.value);
      return a.valid ? ((qs(s) || qs(o)) && t.dirty(), { status: t.value, value: a.data }) : (X(n, {
        code: P.invalid_intersection_types
      }), ue);
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
On.create = (r, e, t) => new On({
  left: r,
  right: e,
  typeName: fe.ZodIntersection,
  ...pe(t)
});
class Xt extends ve {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== J.array)
      return X(n, {
        code: P.invalid_type,
        expected: J.array,
        received: n.parsedType
      }), ue;
    if (n.data.length < this._def.items.length)
      return X(n, {
        code: P.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ue;
    !this._def.rest && n.data.length > this._def.items.length && (X(n, {
      code: P.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...n.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new jt(n, o, n.path, a)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => et.mergeArray(t, o)) : et.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Xt({
      ...this._def,
      rest: e
    });
  }
}
Xt.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Xt({
    items: r,
    typeName: fe.ZodTuple,
    rest: null,
    ...pe(e)
  });
};
class ro extends ve {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== J.map)
      return X(n, {
        code: P.invalid_type,
        expected: J.map,
        received: n.parsedType
      }), ue;
    const i = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([a, l], c) => ({
      key: i._parse(new jt(n, a, n.path, [c, "key"])),
      value: s._parse(new jt(n, l, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key, d = await l.value;
          if (c.status === "aborted" || d.status === "aborted")
            return ue;
          (c.status === "dirty" || d.status === "dirty") && t.dirty(), a.set(c.value, d.value);
        }
        return { status: t.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return ue;
        (c.status === "dirty" || d.status === "dirty") && t.dirty(), a.set(c.value, d.value);
      }
      return { status: t.value, value: a };
    }
  }
}
ro.create = (r, e, t) => new ro({
  valueType: e,
  keyType: r,
  typeName: fe.ZodMap,
  ...pe(t)
});
class Wr extends ve {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== J.set)
      return X(n, {
        code: P.invalid_type,
        expected: J.set,
        received: n.parsedType
      }), ue;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (X(n, {
      code: P.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), t.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (X(n, {
      code: P.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), t.dirty());
    const s = this._def.valueType;
    function o(l) {
      const c = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return ue;
        d.status === "dirty" && t.dirty(), c.add(d.value);
      }
      return { status: t.value, value: c };
    }
    const a = [...n.data.values()].map((l, c) => s._parse(new jt(n, l, n.path, c)));
    return n.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, t) {
    return new Wr({
      ...this._def,
      minSize: { value: e, message: Q.toString(t) }
    });
  }
  max(e, t) {
    return new Wr({
      ...this._def,
      maxSize: { value: e, message: Q.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Wr.create = (r, e) => new Wr({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: fe.ZodSet,
  ...pe(e)
});
class no extends ve {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
no.create = (r, e) => new no({
  getter: r,
  typeName: fe.ZodLazy,
  ...pe(e)
});
class io extends ve {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return X(t, {
        received: t.data,
        code: P.invalid_literal,
        expected: this._def.value
      }), ue;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
io.create = (r, e) => new io({
  value: r,
  typeName: fe.ZodLiteral,
  ...pe(e)
});
function _l(r, e) {
  return new hr({
    values: r,
    typeName: fe.ZodEnum,
    ...pe(e)
  });
}
class hr extends ve {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return X(t, {
        expected: be.joinValues(n),
        received: t.parsedType,
        code: P.invalid_type
      }), ue;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return X(t, {
        received: t.data,
        code: P.invalid_enum_value,
        options: n
      }), ue;
    }
    return ut(e.data);
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
    return hr.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return hr.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
hr.create = _l;
class so extends ve {
  _parse(e) {
    const t = be.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== J.string && n.parsedType !== J.number) {
      const i = be.objectValues(t);
      return X(n, {
        expected: be.joinValues(i),
        received: n.parsedType,
        code: P.invalid_type
      }), ue;
    }
    if (this._cache || (this._cache = new Set(be.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const i = be.objectValues(t);
      return X(n, {
        received: n.data,
        code: P.invalid_enum_value,
        options: i
      }), ue;
    }
    return ut(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
so.create = (r, e) => new so({
  values: r,
  typeName: fe.ZodNativeEnum,
  ...pe(e)
});
class Mn extends ve {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== J.promise && t.common.async === !1)
      return X(t, {
        code: P.invalid_type,
        expected: J.promise,
        received: t.parsedType
      }), ue;
    const n = t.parsedType === J.promise ? t.data : Promise.resolve(t.data);
    return ut(n.then((i) => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Mn.create = (r, e) => new Mn({
  type: r,
  typeName: fe.ZodPromise,
  ...pe(e)
});
class mr extends ve {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === fe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (o) => {
        X(n, o), o.fatal ? t.abort() : t.dirty();
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
            return ue;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? ue : l.status === "dirty" || t.value === "dirty" ? Dr(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return ue;
        const a = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? ue : a.status === "dirty" || t.value === "dirty" ? Dr(a.value) : a;
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
        return a.status === "aborted" ? ue : (a.status === "dirty" && t.dirty(), o(a.value), { status: t.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? ue : (a.status === "dirty" && t.dirty(), o(a.value).then(() => ({ status: t.value, value: a.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!fr(o))
          return ue;
        const a = i.transform(o.value, s);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => fr(o) ? Promise.resolve(i.transform(o.value, s)).then((a) => ({
          status: t.value,
          value: a
        })) : ue);
    be.assertNever(i);
  }
}
mr.create = (r, e, t) => new mr({
  schema: r,
  typeName: fe.ZodEffects,
  effect: e,
  ...pe(t)
});
mr.createWithPreprocess = (r, e, t) => new mr({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: fe.ZodEffects,
  ...pe(t)
});
class Vt extends ve {
  _parse(e) {
    return this._getType(e) === J.undefined ? ut(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Vt.create = (r, e) => new Vt({
  innerType: r,
  typeName: fe.ZodOptional,
  ...pe(e)
});
class pr extends ve {
  _parse(e) {
    return this._getType(e) === J.null ? ut(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
pr.create = (r, e) => new pr({
  innerType: r,
  typeName: fe.ZodNullable,
  ...pe(e)
});
class Di extends ve {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === J.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Di.create = (r, e) => new Di({
  innerType: r,
  typeName: fe.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...pe(e)
});
class Ni extends ve {
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
    return Rn(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new At(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new At(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ni.create = (r, e) => new Ni({
  innerType: r,
  typeName: fe.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...pe(e)
});
class oo extends ve {
  _parse(e) {
    if (this._getType(e) !== J.nan) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: P.invalid_type,
        expected: J.nan,
        received: n.parsedType
      }), ue;
    }
    return { status: "valid", value: e.data };
  }
}
oo.create = (r) => new oo({
  typeName: fe.ZodNaN,
  ...pe(r)
});
class Kp extends ve {
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
class ss extends ve {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? ue : s.status === "dirty" ? (t.dirty(), Dr(s.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? ue : i.status === "dirty" ? (t.dirty(), {
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
    return new ss({
      in: e,
      out: t,
      typeName: fe.ZodPipeline
    });
  }
}
class Ri extends ve {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (i) => (fr(i) && (i.value = Object.freeze(i.value)), i);
    return Rn(t) ? t.then((i) => n(i)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ri.create = (r, e) => new Ri({
  innerType: r,
  typeName: fe.ZodReadonly,
  ...pe(e)
});
var fe;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(fe || (fe = {}));
const Xp = Si.create;
$t.create;
St.create;
const Cl = Oe.create;
Tn.create;
On.create;
Xt.create;
hr.create;
Mn.create;
Vt.create;
pr.create;
function El(r, e) {
  return async (t, n, i) => {
    const s = Yp(r, t), o = { ...t };
    for (const l of Object.keys(o))
      o[l] === null && (o[l] = void 0);
    return Cp(s, e)(o, n, i);
  };
}
function Yp(r, e) {
  const n = Jt(r).shape, i = {};
  for (const [o, a] of Object.entries(n)) {
    const l = br(a);
    if (!l || !l.renderIf) {
      i[o] = a;
      continue;
    }
    qn(l.renderIf, e) ? i[o] = a : i[o] = Xp();
  }
  const s = Cl(i);
  if (Ee(r, "ZodEffects")) {
    const a = r._def.effect;
    if (a.type === "refinement")
      return s.superRefine(a.refinement);
  }
  return s;
}
function Jp(r) {
  const e = yt(r);
  if (!Ee(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (i = s.value);
  return { min: n, max: i };
}
function ci(r) {
  const e = yt(r);
  if (!Ee(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let n, i;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (i = new Date(s.value));
  return { minDate: n, maxDate: i };
}
function Qp(r) {
  const e = yt(r);
  if (!Ee(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const i of t)
    i.kind === "max" && (n = i.value);
  return { maxLength: n };
}
function eg(r) {
  const e = yt(r);
  return Ee(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "email") : !1;
}
function tg(r) {
  const e = yt(r);
  return Ee(e, "ZodString") ? (e._def.checks || []).some((n) => n.kind === "url") : !1;
}
function ao(r) {
  return eg(r) ? "email" : tg(r) ? "url" : "text";
}
function lo(r, e, t, n) {
  const i = {
    id: r,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    validation: e
  }, s = !gl(e);
  switch (n) {
    case "text": {
      const o = "inputType" in t && t.inputType ? t.inputType : ao(e);
      return {
        ...i,
        type: "text",
        inputType: o,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "number": {
      const { min: o, max: a } = Jp(e);
      return {
        ...i,
        type: "number",
        step: "step" in t ? t.step : void 0,
        min: o,
        max: a,
        locale: "locale" in t ? t.locale : void 0,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "textarea": {
      const { maxLength: o } = Qp(e);
      return {
        ...i,
        type: "textarea",
        rows: "rows" in t ? t.rows : void 0,
        maxLength: o,
        clearable: s,
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
      const o = ci(e), a = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
      return {
        ...i,
        type: "date",
        granularities: "granularities" in t ? t.granularities : void 0,
        minDate: a ?? o.minDate,
        maxDate: l ?? o.maxDate,
        presets: "presets" in t ? t.presets : void 0,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "time": {
      const o = ci(e), a = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
      return {
        ...i,
        type: "time",
        minDate: a ?? o.minDate,
        maxDate: l ?? o.maxDate,
        clearable: s,
        renderIf: t.renderIf
      };
    }
    case "datetime": {
      const o = ci(e), a = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
      return {
        ...i,
        type: "datetime",
        minDate: a ?? o.minDate,
        maxDate: l ?? o.maxDate,
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
        inputType: ao(e),
        renderIf: t.renderIf
      };
  }
}
function Fn(r) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (let n = 0; n < r.length; n++) {
    if (t.has(n)) continue;
    const i = r[n], s = i.config.row;
    if (s) {
      const o = [];
      for (let l = n; l < r.length; l++)
        r[l].config.row === s && (o.push(r[l]), t.add(l));
      o.sort((l, c) => l.position - c.position);
      const a = {
        type: "row",
        fields: o.map(
          (l) => lo(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(a);
    } else {
      t.add(n);
      const o = lo(
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
function Sl(r) {
  const e = r.shape, t = [], n = Object.entries(e);
  for (let i = 0; i < n.length; i++) {
    const [s, o] = n[i], a = br(o);
    if (a) {
      const l = Hm(o, a);
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
function kl(r, e) {
  return H(() => {
    const t = Jt(r), n = Sl(t), i = [], s = {};
    for (const l of n) {
      const c = l.config.section;
      c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
    }
    i.sort((l, c) => l.position - c.position);
    for (const l of Object.keys(s))
      s[l].sort((c, d) => c.position - d.position);
    const o = [];
    o.push(...Fn(i));
    const a = e ? Object.keys(e).filter((l) => s[l]) : Object.keys(s);
    for (const l of a) {
      const c = e?.[l], d = s[l], u = {
        id: l,
        type: "section",
        section: {
          title: c?.title ?? l,
          description: c?.description,
          renderIf: c?.renderIf,
          action: c?.action,
          fields: Fn(d)
        }
      };
      o.push(u);
    }
    return o;
  }, [r, e]);
}
function zv(r, e) {
  const t = Jt(r), n = Sl(t), i = [], s = {};
  for (const l of n) {
    const c = l.config.section;
    c ? (s[c] || (s[c] = []), s[c].push(l)) : i.push(l);
  }
  i.sort((l, c) => l.position - c.position);
  for (const l of Object.keys(s))
    s[l].sort((c, d) => c.position - d.position);
  const o = [];
  o.push(...Fn(i));
  const a = e ? Object.keys(e).filter((l) => s[l]) : Object.keys(s);
  for (const l of a) {
    const c = e?.[l], d = s[l], u = {
      id: l,
      type: "section",
      section: {
        title: c?.title ?? l,
        description: c?.description,
        renderIf: c?.renderIf,
        action: c?.action,
        fields: Fn(d)
      }
    };
    o.push(u);
  }
  return o;
}
function Dl(r) {
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
const rg = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function ng(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({ type: "switchGroup", fields: [...t] }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({ type: "field", item: i }) : i.type === "row" && e.push({ type: "row", item: i, index: s }));
  }), n(), e;
}
function Nl({
  formName: r,
  sectionId: e,
  schema: t,
  sectionConfig: n,
  defaultValues: i,
  onSubmit: s,
  submitConfig: o,
  errorTriggerMode: a,
  className: l,
  initialFiles: c,
  formRef: d
}) {
  const u = Tt(), h = kl(t), m = o?.label ?? "Submit", g = o?.icon === null ? void 0 : o?.icon ?? Co, y = o?.showSubmitWhenDirty ?? !1, v = o?.hideSubmitButton ?? !1, A = H(() => Dl(u), [u]), _ = rg[a], S = H(
    () => El(t, { errorMap: A }),
    [t, A]
  ), k = rl({
    resolver: S,
    mode: _,
    defaultValues: i
  }), b = k.formState.errors.root, { isSubmitting: x, isDirty: w } = k.formState, R = Object.keys(k.formState.errors).filter((I) => I !== "root").length > 0, z = Y(null), F = K(
    async (I) => {
      const U = { ...I };
      for (const ne of Object.keys(U))
        U[ne] === null && (U[ne] = void 0);
      const j = await s(U);
      j.success ? k.reset(I) : (j.errors && Object.entries(j.errors).forEach(([ne, ce]) => {
        k.setError(ne, { message: ce });
      }), j.rootMessage && k.setError("root", { message: j.rootMessage }));
    },
    [s, k]
  );
  ie(() => {
    if (d) {
      const I = {
        submit: () => new Promise((U, j) => {
          k.handleSubmit(
            async (ne) => {
              await F(ne), U();
            },
            () => {
              j(new Error("Form validation failed"));
            }
          )();
        }),
        reset: () => k.reset(),
        isDirty: () => k.formState.isDirty,
        getValues: () => k.getValues(),
        _setStateCallback: (U) => {
          z.current = U;
        }
      };
      d.current = I;
    }
    return () => {
      d && (d.current = null);
    };
  }, [d, k, F]), ie(() => {
    z.current && z.current({ isSubmitting: x, hasErrors: R });
  }, [x, R]);
  const T = ng(h), D = H(
    () => ({ formName: r, initialFiles: c }),
    [r, c]
  ), O = n?.title ?? e, G = n?.description;
  return /* @__PURE__ */ f(es.Provider, { value: D, children: /* @__PURE__ */ f(sl, { ...k, children: /* @__PURE__ */ W(
    "form",
    {
      onSubmit: k.handleSubmit(F),
      className: le("flex flex-col", l),
      children: [
        /* @__PURE__ */ W(
          "div",
          {
            className: le(
              "flex items-start justify-between py-5",
              "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
            ),
            children: [
              /* @__PURE__ */ f(Io, { title: O, description: G ?? "" }),
              n?.action && /* @__PURE__ */ f(
                Ke,
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
        /* @__PURE__ */ f("div", { className: `flex flex-col ${Qi}`, children: T.map((I, U) => {
          switch (I.type) {
            case "switchGroup":
              return /* @__PURE__ */ f(
                is,
                {
                  fields: I.fields,
                  sectionId: e
                },
                `switch-group-${U}`
              );
            case "field":
              return /* @__PURE__ */ f(
                Kn,
                {
                  field: I.item.field,
                  sectionId: e
                },
                I.item.field.id
              );
            case "row":
              return /* @__PURE__ */ f(
                ns,
                {
                  row: I.item,
                  sectionId: e
                },
                `row-${I.index}`
              );
            default:
              return null;
          }
        }) }),
        b && /* @__PURE__ */ f("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: b.message }),
        !v && (!y || w) && /* @__PURE__ */ f("div", { className: "mt-4", children: /* @__PURE__ */ f(
          Ke,
          {
            type: "submit",
            label: m,
            icon: g,
            loading: x,
            disabled: R
          }
        ) })
      ]
    }
  ) }) });
}
function ig(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({ type: "switchGroup", fields: [...t] }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({ type: "field", item: i }) : i.type === "row" && e.push({ type: "row", item: i, index: s }));
  }), n(), e;
}
function sg({ section: r }) {
  const t = Wt().watch(), { formName: n } = ts(), { title: i, description: s, renderIf: o, action: a, fields: l } = r.section, c = r.id;
  if (o && !qn(o, t))
    return null;
  const d = ig(l), u = Kt(n, c);
  return /* @__PURE__ */ W("section", { id: u, className: "flex flex-col scroll-mt-4", children: [
    /* @__PURE__ */ W(
      "div",
      {
        className: le(
          "flex items-start justify-between py-5",
          "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
        ),
        children: [
          /* @__PURE__ */ f(Io, { title: i, description: s ?? "" }),
          a && /* @__PURE__ */ f(
            Ke,
            {
              label: a.label,
              icon: a.icon,
              onClick: a.onClick,
              href: a.href,
              variant: "outline",
              size: "md"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ f("div", { className: `flex flex-col ${Qi}`, children: d.map((h, m) => h.type === "switchGroup" ? /* @__PURE__ */ f(
      is,
      {
        fields: h.fields,
        sectionId: c
      },
      `switch-group-${m}`
    ) : h.type === "field" ? /* @__PURE__ */ f(
      Kn,
      {
        field: h.item.field,
        sectionId: c
      },
      h.item.field.id
    ) : h.type === "row" ? /* @__PURE__ */ f(
      ns,
      {
        row: h.item,
        sectionId: c
      },
      `row-${h.index}`
    ) : null) })
  ] });
}
function co(r) {
  const e = document.getElementById(r);
  if (e) {
    e.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = e.querySelector("input, textarea, select");
    t instanceof HTMLElement && t.focus();
  }
}
function og({
  formName: r,
  errors: e
}) {
  const t = Object.keys(e).filter((h) => h !== "root"), n = t.length > 0, i = t.length, [s, o] = re(0), a = Y([]);
  ie(() => {
    const h = t, m = a.current, g = h.find(
      (y) => !m.includes(y)
    );
    if (g) {
      const y = Kt(r, void 0, g);
      co(y);
      const v = h.indexOf(g);
      v !== -1 && o(v);
    }
    a.current = h;
  }, [t, r]);
  const l = K(
    (h) => {
      if (t.length === 0) return;
      const m = (h % t.length + t.length) % t.length;
      o(m);
      const g = t[m], y = Kt(r, void 0, g);
      co(y);
    },
    [t, r]
  ), c = K(() => {
    l(s - 1);
  }, [s, l]), d = K(() => {
    l(s + 1);
  }, [s, l]), u = K(() => {
    o(0), a.current = [];
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
function ag(r) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({ type: "switchGroup", fields: [...t] }), t = []);
  };
  return r.forEach((i, s) => {
    i.type === "field" && i.field.type === "switch" ? t.push(i.field) : (n(), i.type === "field" ? e.push({ type: "field", item: i }) : i.type === "row" ? e.push({ type: "row", item: i, index: s }) : i.type === "section" && e.push({ type: "section", item: i }));
  }), n(), e;
}
function lg(r) {
  if (typeof r != "object" || r === null) return !1;
  const t = r._def;
  return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
const cg = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Rl(r) {
  const {
    name: e,
    schema: t,
    sections: n,
    defaultValues: i,
    onSubmit: s,
    submitConfig: o,
    className: a,
    errorTriggerMode: l = "on-blur",
    styling: c,
    initialFiles: d
  } = r, u = c?.showSectionsSidepanel ?? !1, h = H(() => Object.keys(t), [t]), m = K(
    (_) => {
      const S = Kt(e, _), k = document.getElementById(S);
      k && k.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [e]
  ), [g, y] = re(
    h[0]
  ), v = H(() => !n || !u ? [] : h.map((_) => ({
    id: _,
    label: n[_]?.title ?? _,
    onClick: () => {
      y(_), m(_);
    }
  })), [n, h, u, m]), A = /* @__PURE__ */ f("div", { className: le("flex w-full flex-col", hl, a), children: h.map((_, S) => {
    const k = t[_], b = n?.[_], x = i?.[_], w = b?.submitConfig ?? o;
    return /* @__PURE__ */ f(
      "div",
      {
        id: Kt(e, _),
        className: le("scroll-mt-4", S !== 0 && fl),
        children: /* @__PURE__ */ f(
          Nl,
          {
            formName: e,
            sectionId: _,
            schema: k,
            sectionConfig: b,
            defaultValues: x,
            onSubmit: (R) => s(_, R),
            submitConfig: w,
            errorTriggerMode: l,
            initialFiles: d
          }
        )
      },
      _
    );
  }) });
  return u && v.length > 0 ? /* @__PURE__ */ W("div", { className: "flex w-full gap-4", children: [
    /* @__PURE__ */ f("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ f(
      Mi,
      {
        items: v,
        activeItem: g,
        scrollable: !1
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "w-px bg-f1-border-secondary" }),
    /* @__PURE__ */ f("div", { className: "flex flex-1 justify-center", children: A })
  ] }) : A;
}
function dg(r) {
  return "formDefinition" in r && r.formDefinition != null;
}
function Al(r) {
  const e = r;
  if (dg(e))
    return /* @__PURE__ */ f(ug, { ...e });
  const t = e;
  return lg(t.schema) ? /* @__PURE__ */ f(
    Tl,
    {
      ...t
    }
  ) : /* @__PURE__ */ f(
    Rl,
    {
      ...t
    }
  );
}
function ug(r) {
  const { formDefinition: e, className: t, styling: n, formRef: i, initialFiles: s } = r;
  return e._brand === "single" ? /* @__PURE__ */ f(
    fg,
    {
      formDefinition: e,
      className: t,
      styling: n,
      formRef: i,
      initialFiles: s
    }
  ) : /* @__PURE__ */ f(
    hg,
    {
      formDefinition: e,
      className: t,
      styling: n,
      formRef: i,
      initialFiles: s
    }
  );
}
function fg({
  formDefinition: r,
  className: e,
  styling: t,
  formRef: n,
  initialFiles: i
}) {
  const s = r, o = K(
    (a) => s.onSubmit({ data: a }),
    [s]
  );
  return /* @__PURE__ */ f(
    Tl,
    {
      name: s.name,
      schema: s.schema,
      sections: s.sections,
      defaultValues: s.defaultValues,
      onSubmit: o,
      submitConfig: s.submitConfig,
      errorTriggerMode: s.errorTriggerMode,
      className: e,
      styling: t,
      formRef: n,
      initialFiles: i
    }
  );
}
function hg({
  formDefinition: r,
  className: e,
  styling: t,
  formRef: n,
  initialFiles: i
}) {
  const s = r, o = Y(
    s.defaultValues ? { ...s.defaultValues } : {}
  ), a = K(
    (l, c) => (o.current[l] = c, s.onSubmit({
      sectionId: l,
      data: c,
      fullData: { ...o.current }
    })),
    [s]
  );
  return /* @__PURE__ */ f(
    Rl,
    {
      name: s.name,
      schema: s.schema,
      sections: s.sections,
      defaultValues: s.defaultValues,
      onSubmit: a,
      submitConfig: s.submitConfig,
      errorTriggerMode: s.errorTriggerMode,
      className: e,
      styling: t,
      formRef: n,
      initialFiles: i
    }
  );
}
function Tl(r) {
  const e = Tt(), { forms: t } = e, {
    name: n,
    schema: i,
    sections: s,
    defaultValues: o,
    onSubmit: a,
    submitConfig: l,
    className: c,
    errorTriggerMode: d = "on-blur",
    styling: u,
    formRef: h
  } = r, m = u?.showSectionsSidepanel ?? !1, g = l?.type === "action-bar", y = l?.label ?? "Submit", v = l?.icon === null ? void 0 : l?.icon ?? Co, A = l?.type !== "action-bar" && l?.hideSubmitButton, _ = l?.type !== "action-bar" && !!l?.hideActionBar, S = !g && !A, k = l?.type === "action-bar" && l?.discardable, b = g ? l?.discardConfig : void 0, x = b?.label ?? t.actionBar.discard, w = b?.icon === null ? void 0 : b?.icon ?? xc, R = g ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, z = l?.savingMessage ?? t.actionBar.saving, F = g && !!l?.centerActionBarInFrameContent, T = kl(i, s), D = H(() => T.filter((M) => M.type === "section").map((M) => M.id), [T]), [O, G] = re(
    D[0]
  ), I = K(
    (M) => {
      G(M);
      const L = Kt(n, M), Z = document.getElementById(L);
      Z && Z.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [n]
  ), U = H(() => !s || !m ? [] : D.map((M) => ({
    id: M,
    label: s[M]?.title ?? M,
    onClick: () => I(M)
  })), [s, D, m, I]), j = H(() => Dl(e), [e]), ne = cg[d], ce = H(
    () => El(i, { errorMap: j }),
    [i, j]
  ), he = rl({
    resolver: ce,
    mode: ne,
    defaultValues: o
  }), Pe = he.formState.errors.root, { isDirty: we, isSubmitting: ke, errors: Le } = he.formState, [me, de] = re("idle"), [Se, se] = re(), ee = Y(null), {
    hasErrors: $,
    errorCount: De,
    goToPreviousError: Te,
    goToNextError: He,
    resetErrorNavigation: Ne
  } = og({
    formName: n,
    errors: Le
  }), rt = (() => {
    if (!$)
      return me === "loading" ? z : me === "success" ? Se ?? t.actionBar.saved : R;
  })(), Be = async (M) => {
    ee.current && (clearTimeout(ee.current), ee.current = null), Kc(() => {
      de("loading");
    });
    const L = { ...M };
    for (const oe of Object.keys(L))
      L[oe] === null && (L[oe] = void 0);
    const Z = await a(L);
    Z.success ? (he.reset(M), Ne(), se(Z.message), de("success"), ee.current = setTimeout(() => {
      de("idle"), se(void 0), ee.current = null;
    }, 3e3)) : (de("idle"), Z.errors && Object.entries(Z.errors).forEach(([oe, Ce]) => {
      he.setError(oe, { message: Ce });
    }), Z.rootMessage && he.setError("root", { message: Z.rootMessage }));
  };
  ie(() => () => {
    ee.current && clearTimeout(ee.current);
  }, []), ie(() => {
    we && me === "success" && (ee.current && (clearTimeout(ee.current), ee.current = null), de("idle"), se(void 0));
  }, [we, me]);
  const ft = () => {
    he.reset(), Ne(), de("idle"), se(void 0), ee.current && (clearTimeout(ee.current), ee.current = null);
  }, p = Y(null);
  ie(() => {
    if (h) {
      const M = {
        submit: () => new Promise((L, Z) => {
          he.handleSubmit(
            async (oe) => {
              await Be(oe), L();
            },
            () => {
              Z(new Error("Form validation failed"));
            }
          )();
        }),
        reset: () => {
          he.reset(), Ne();
        },
        isDirty: () => he.formState.isDirty,
        getValues: () => he.getValues(),
        _setStateCallback: (L) => {
          p.current = L;
        }
      };
      h.current = M;
    }
    return () => {
      h && (h.current = null);
    };
  }, [h, he, Ne]), ie(() => {
    p.current && p.current({
      isSubmitting: ke,
      hasErrors: $
    });
  }, [ke, $]);
  const C = ag(T), N = H(
    () => ({ formName: n, initialFiles: r.initialFiles }),
    [n, r.initialFiles]
  ), B = /* @__PURE__ */ W(
    "form",
    {
      onSubmit: he.handleSubmit(Be),
      className: le("flex flex-col", hl, c),
      children: [
        C.map((M, L) => {
          const Z = L !== 0 && M.type !== "section" ? "mt-4" : "";
          switch (M.type) {
            case "switchGroup":
              return /* @__PURE__ */ f("div", { className: Z, children: /* @__PURE__ */ f(is, { fields: M.fields }) }, `switch-group-${L}`);
            case "field":
              return /* @__PURE__ */ f("div", { className: Z, children: /* @__PURE__ */ f(Kn, { field: M.item.field }) }, M.item.field.id);
            case "row":
              return /* @__PURE__ */ f("div", { className: Z, children: /* @__PURE__ */ f(ns, { row: M.item }) }, `row-${M.index}`);
            case "section":
              return /* @__PURE__ */ f(
                "div",
                {
                  className: L !== 0 ? fl : "",
                  children: /* @__PURE__ */ f(sg, { section: M.item })
                },
                M.item.id
              );
            default:
              return null;
          }
        }),
        Pe && /* @__PURE__ */ f("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: Pe.message }),
        !g && S && /* @__PURE__ */ f("div", { className: "mt-4", children: /* @__PURE__ */ f(
          Ke,
          {
            type: "submit",
            label: y,
            icon: v,
            loading: ke,
            disabled: $
          }
        ) })
      ]
    }
  );
  return /* @__PURE__ */ f(es.Provider, { value: N, children: /* @__PURE__ */ W(sl, { ...he, children: [
    m && U.length > 0 ? /* @__PURE__ */ W("div", { className: "flex w-full gap-4", children: [
      /* @__PURE__ */ f("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ f(
        Mi,
        {
          items: U,
          activeItem: O,
          scrollable: !1
        }
      ) }),
      /* @__PURE__ */ f("div", { className: "w-px bg-f1-border-secondary" }),
      /* @__PURE__ */ f("div", { className: "flex flex-1 justify-center", children: B })
    ] }) : B,
    !_ && /* @__PURE__ */ f(
      Vm,
      {
        isActionBar: g,
        isDirty: we,
        actionBarStatus: me,
        hasErrors: $,
        errorCount: De,
        resolvedActionBarLabel: rt,
        centerActionBarInFrameContent: F,
        submitLabel: y,
        submitIcon: v,
        discardableChanges: k,
        discardLabel: x,
        discardIcon: w,
        issuesOneLabel: t.actionBar.issues.one,
        issuesOtherLabel: t.actionBar.issues.other,
        onSubmit: he.handleSubmit(Be),
        onDiscard: ft,
        goToPreviousError: Te,
        goToNextError: He
      }
    )
  ] }) });
}
function Ol() {
  const [r, e] = re(!1), [t, n] = re(!1), i = Y((u) => {
    e(u.isSubmitting), n(u.hasErrors);
  }), s = Y(null), o = Y({
    get current() {
      return s.current;
    },
    set current(u) {
      s.current = u, u && u._setStateCallback(i.current);
    }
  }), a = K(async () => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return s.current.submit();
  }, []), l = K(() => {
    if (!s.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    s.current.reset();
  }, []), c = K(() => s.current ? s.current.isDirty() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), d = K(() => s.current ? s.current.getValues() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []);
  return {
    formRef: o.current,
    submit: a,
    reset: l,
    isDirty: c,
    getValues: d,
    isSubmitting: r,
    hasErrors: t
  };
}
const Bv = lt("F0Form", Al), Ml = vt(null);
function mg() {
  const r = dt(Ml);
  if (!r)
    throw new Error("useF0Wizard must be used within a F0Wizard");
  return r;
}
function pg({ children: r, ...e }) {
  return /* @__PURE__ */ f(Ml.Provider, { value: e, children: r });
}
const gg = kt({
  base: "flex-1 text-base font-medium leading-5 tracking-[-0.005em]",
  variants: {
    state: {
      active: "text-f1-foreground",
      completed: "text-f1-foreground-secondary",
      upcoming: "text-f1-foreground"
    }
  }
});
function vg(r, e, t) {
  return r === e ? "active" : t ? "completed" : "upcoming";
}
function yg({ state: r, index: e }) {
  return r === "completed" ? /* @__PURE__ */ f("span", { className: "flex h-5 w-5 min-w-5 shrink-0 items-center justify-center rounded-xs bg-f1-background-secondary text-f1-foreground-secondary", children: /* @__PURE__ */ f(wc, { className: "h-3 w-3" }) }) : /* @__PURE__ */ f(
    _c,
    {
      value: e + 1,
      type: r === "active" ? "selected" : "default",
      size: "md"
    }
  );
}
function bg() {
  const { steps: r, currentStep: e, goToStep: t, allowStepSkipping: n } = mg();
  return /* @__PURE__ */ f("nav", { "aria-label": "Wizard steps", className: "flex flex-col gap-1.5 p-1", children: r.map((i, s) => {
    const o = s < e || i.isCompleted?.() === !0, a = vg(s, e, o), l = r[e]?.hasErrors?.() === !0, c = s > e && r.slice(e, s).some((m) => m.hasErrors?.() === !0);
    let d = s !== e && !l && !c && r.slice(0, s).every((m) => m.isCompleted?.() !== !1);
    return d && !n && s > e + 1 && (d = !1), /* @__PURE__ */ W(
      "button",
      {
        type: "button",
        onClick: () => {
          d && t(s);
        },
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && d && (m.preventDefault(), t(s));
        },
        disabled: !d && s !== e,
        "aria-current": s === e ? "step" : void 0,
        className: le(
          Ln(),
          "flex cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left",
          a === "active" && "bg-f1-background-selected",
          d && "hover:bg-f1-background-secondary-hover",
          !d && s !== e && "cursor-default opacity-70"
        ),
        children: [
          /* @__PURE__ */ f(yg, { state: a, index: s }),
          /* @__PURE__ */ f("span", { className: gg({ state: a }), children: i.title })
        ]
      },
      s
    );
  }) });
}
function xg({
  steps: r,
  defaultStepIndex: e = 0,
  onSubmit: t,
  onStepChanged: n,
  allowStepSkipping: i = !1,
  autoCloseOnLastStepSubmit: s = !1,
  onClose: o
}) {
  const [a, l] = re(e), [c, d] = re(!1), u = Y(r);
  u.current = r;
  const h = K(
    (v) => {
      l(v), n?.(v);
    },
    [n]
  ), m = K(
    async (v) => {
      if (!(v < 0 || v >= u.current.length || u.current[a]?.hasErrors?.() === !0 || !i && v > a + 1 || v > a && u.current.slice(a, v).some((S) => S.hasErrors?.() === !0) || !u.current.slice(0, v).every((_) => _.isCompleted?.() !== !1))) {
        if (v > a) {
          d(!0);
          try {
            for (let _ = a; _ < v; _++) {
              const S = u.current[_];
              S?.onNext && await S.onNext();
            }
            h(v);
          } catch {
          } finally {
            d(!1);
          }
          return;
        }
        h(v);
      }
    },
    [h, a, i]
  ), g = K(async () => {
    const v = u.current[a];
    if (v) {
      d(!0);
      try {
        v.onNext && await v.onNext(), a === u.current.length - 1 ? (t && await t(), s && o?.()) : h(a + 1);
      } catch {
      } finally {
        d(!1);
      }
    }
  }, [a, t, h, s, o]), y = K(() => {
    a > 0 && h(a - 1);
  }, [a, h]);
  return {
    currentStep: a,
    loading: c,
    goToStep: m,
    goNext: g,
    goPrevious: y
  };
}
const wg = () => {
}, os = ({
  steps: r,
  children: e,
  isOpen: t,
  onClose: n = wg,
  title: i,
  width: s = "xl",
  defaultStepIndex: o,
  nextLabel: a,
  previousLabel: l,
  submitLabel: c,
  onSubmit: d,
  onStepChanged: u,
  allowStepSkipping: h = !1,
  autoCloseOnLastStepSubmit: m = !1,
  autoSkipCompletedSteps: g = !1
}) => {
  const y = H(() => {
    if (o !== void 0) return o;
    if (!g) return 0;
    const z = r.findIndex(
      (F) => F.isCompleted?.() !== !0
    );
    return z === -1 ? r.length - 1 : z;
  }, [o, g, r]), v = xg({
    steps: r,
    defaultStepIndex: y,
    onSubmit: d,
    onStepChanged: u,
    allowStepSkipping: h,
    autoCloseOnLastStepSubmit: m,
    onClose: n
  }), A = Tt(), _ = r[v.currentStep], S = v.currentStep === 0, k = v.currentStep === r.length - 1, b = k ? _?.nextLabel ?? c ?? A.wizard.submit : _?.nextLabel ?? a ?? A.wizard.next, x = _?.previousLabel ?? l ?? A.wizard.previous, w = H(
    () => ({
      label: b,
      icon: k ? void 0 : Cc,
      onClick: () => {
        v.goNext();
      },
      disabled: _?.isCompleted?.() === !1 || _?.hasErrors?.() === !0,
      loading: v.loading
    }),
    [b, k, v, _]
  ), R = H(
    () => S ? void 0 : {
      label: x,
      icon: Ec,
      onClick: v.goPrevious,
      disabled: v.loading
    },
    [S, x, v]
  );
  return /* @__PURE__ */ f(
    Sc,
    {
      isOpen: t,
      onClose: n,
      width: s,
      title: i,
      primaryAction: w,
      secondaryAction: R,
      disableContentPadding: !0,
      children: /* @__PURE__ */ f(
        pg,
        {
          currentStep: v.currentStep,
          totalSteps: r.length,
          loading: v.loading,
          goToStep: v.goToStep,
          goNext: v.goNext,
          goPrevious: v.goPrevious,
          steps: r,
          allowStepSkipping: h,
          children: /* @__PURE__ */ W("div", { className: "flex min-h-[58vh] flex-1 flex-row", children: [
            /* @__PURE__ */ f("div", { className: "w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2", children: /* @__PURE__ */ f(bg, {}) }),
            /* @__PURE__ */ f("div", { className: "flex-1 overflow-y-auto px-8", children: e({
              currentStep: v.currentStep,
              goToStep: v.goToStep
            }) })
          ] })
        }
      )
    }
  );
};
os.displayName = "F0Wizard";
function Fl(r) {
  const t = Jt(r).shape, n = Object.entries(t);
  return n.length === 0 ? !1 : n.every(([, i]) => br(i)?.disabled === !0);
}
function _g(r, e) {
  if (e) return Object.keys(e);
  const n = Jt(r).shape, i = /* @__PURE__ */ new Set();
  for (const s of Object.values(n)) {
    const o = br(s);
    o?.section && i.add(o.section);
  }
  return Array.from(i);
}
function di(r, e) {
  const t = r.shape, n = {};
  for (const [i, s] of Object.entries(t)) {
    const o = br(s);
    o?.section && e.includes(o.section) && (n[i] = s);
  }
  return Cl(n);
}
function Ll(r, e, t) {
  const n = e ?? {};
  if (t) return t({ data: n });
  const s = Jt(r).shape;
  return Object.entries(s).every(([o, a]) => {
    if (a.isOptional()) return !0;
    const l = n[o];
    return l != null && l !== "";
  });
}
const Cg = 3e3;
function Il() {
  const { forms: r } = Tt(), [e, t] = re("idle"), [n, i] = re(), s = Y(null);
  ie(() => () => {
    s.current && clearTimeout(s.current);
  }, []);
  const o = K((c) => {
    s.current && (clearTimeout(s.current), s.current = null), i(c), t("success"), s.current = setTimeout(() => {
      t("idle"), i(void 0), s.current = null;
    }, Cg);
  }, []), a = e === "success" ? n ?? r.actionBar.saved : void 0, l = H(
    () => /* @__PURE__ */ f(
      mi,
      {
        isOpen: e === "success",
        variant: "light",
        status: e,
        label: a
      }
    ),
    [e, a]
  );
  return { showSuccess: o, ActionBar: l };
}
function Pl(r, e, t, n, i, s, o) {
  return (t ?? r.map((l) => ({
    title: e?.[l]?.title ?? l,
    sectionIds: [l]
  }))).map((l, c) => {
    const d = n(l.sectionIds), u = o?.(c) ?? !1;
    return {
      title: l.title,
      nextLabel: l.nextLabel,
      previousLabel: l.previousLabel,
      isCompleted: d || u ? () => !0 : void 0,
      hasErrors: s ? () => s(c) : void 0,
      onNext: i(c)
    };
  });
}
function Nr(r, e, t) {
  if (t)
    return t[r]?.sectionIds ?? [];
  const n = e[r];
  return n ? [n] : [];
}
function Eg({
  formDefinition: r,
  steps: e,
  isOpen: t,
  onClose: n,
  title: i,
  width: s,
  defaultStepIndex: o,
  nextLabel: a,
  previousLabel: l,
  onStepChanged: c,
  allowStepSkipping: d,
  autoCloseOnLastStepSubmit: u,
  linkAfterLastStepSubmit: h,
  autoSkipCompletedSteps: m = !1
}) {
  const {
    name: g,
    schema: y,
    sections: v,
    defaultValues: A,
    onSubmit: _,
    submitConfig: S,
    errorTriggerMode: k = "on-blur"
  } = r, b = S?.label, x = H(() => Object.keys(y), [y]), w = H(() => e ? e.some(
    (ee) => ee.sectionIds.length > 1
  ) ? (process.env.NODE_ENV !== "production" && console.error(
    "[F0WizardForm] Per-section schema mode does not support grouping multiple sections into a single step. Each section requires its own independent form and submit. Steps with multiple sectionIds will be automatically split into separate steps."
  ), e.flatMap(
    (ee) => ee.sectionIds.map(($) => ({
      title: v?.[$]?.title ?? ee.title,
      sectionIds: [$],
      nextLabel: ee.nextLabel,
      previousLabel: ee.previousLabel
    }))
  )) : e : void 0, [e, v]), R = Y({}), z = Y(o ?? 0), F = H(
    () => Object.fromEntries(x.map((se) => [se, null])),
    [x]
  ), [T, D] = re({}), O = Y(T);
  O.current = T;
  const G = K(
    (se) => se.every((ee) => {
      const $ = y[ee];
      return $ ? Fl($) : !1;
    }),
    [y]
  ), I = K(
    (se) => async () => {
      const ee = Nr(se, x, w);
      for (const $ of ee) {
        const De = F[$];
        De && await De.submit();
      }
    },
    [x, w, F]
  ), U = K(
    (se) => Nr(se, x, w).some(($) => O.current[$] === !0),
    [x, w]
  ), j = H(
    () => w ?? x.map((se) => ({
      title: v?.[se]?.title ?? se,
      sectionIds: [se]
    })),
    [w, x, v]
  ), ne = K(
    (se) => {
      if (!m) return !1;
      const ee = j[se];
      return ee ? ee.sectionIds.every(($) => {
        const De = y[$];
        if (!De) return !1;
        const Te = A?.[$] ?? R.current[$];
        return Ll(De, Te, ee.isCompleted);
      }) : !1;
    },
    [m, j, y, A]
  ), ce = H(() => {
    if (o !== void 0) return o;
    if (!m) return;
    const se = j.findIndex(
      (ee, $) => !ne($)
    );
    return se === -1 ? j.length - 1 : se;
  }, [o, m, j, ne]), he = H(
    () => Pl(
      x,
      v,
      w,
      G,
      I,
      U,
      m ? ne : void 0
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      x,
      v,
      w,
      G,
      I,
      U,
      T,
      m,
      ne
    ]
  ), Pe = Y(null), { showSuccess: we, ActionBar: ke } = Il(), Le = K(
    (se) => async (ee) => {
      R.current[se] = ee;
      const $ = await _({
        sectionId: se,
        data: ee,
        fullData: { ...R.current }
      });
      return Pe.current = $, $.success && we($.message), $;
    },
    [_, we]
  ), me = K(() => {
    if (Pe.current?.success) {
      if (h) {
        const ee = h({
          fullData: { ...R.current }
        });
        window.location.href = ee;
        return;
      }
      u && n?.();
    }
  }, [u, h, n]), de = K(() => {
    const se = Nr(
      z.current,
      x,
      w
    );
    for (const ee of se) {
      const $ = F[ee];
      $ && (R.current[ee] = $.getValues());
    }
  }, [x, w, F]), Se = K(
    (se) => {
      de(), z.current = se, c?.(se);
    },
    [de, c]
  );
  return /* @__PURE__ */ f(
    os,
    {
      steps: he,
      isOpen: t,
      onClose: n,
      title: i,
      width: s,
      defaultStepIndex: ce,
      nextLabel: a,
      previousLabel: l,
      submitLabel: b,
      onSubmit: me,
      onStepChanged: Se,
      allowStepSkipping: d,
      children: ({ currentStep: se }) => {
        const ee = Nr(
          se,
          x,
          w
        );
        return /* @__PURE__ */ W(Yt, { children: [
          /* @__PURE__ */ f("div", { className: "flex flex-col gap-6", children: ee.map(($) => {
            const De = y[$];
            if (!De) return null;
            const Te = v?.[$], He = R.current[$], Ne = A?.[$];
            return /* @__PURE__ */ f(
              Sg,
              {
                sectionId: $,
                formName: g,
                schema: De,
                sectionConfig: Te,
                defaultValues: He ?? Ne,
                onSubmit: Le($),
                submitConfig: S,
                errorTriggerMode: k,
                sectionForms: F,
                onErrorStateChange: (Be) => {
                  D((ft) => ft[$] === Be ? ft : { ...ft, [$]: Be });
                }
              },
              $
            );
          }) }),
          ke
        ] });
      }
    }
  );
}
function Sg({
  sectionId: r,
  formName: e,
  schema: t,
  sectionConfig: n,
  defaultValues: i,
  onSubmit: s,
  submitConfig: o,
  errorTriggerMode: a,
  sectionForms: l,
  onErrorStateChange: c
}) {
  const d = Ol();
  ie(() => (l[r] = d, () => {
    l[r] = null;
  }), [l, r, d]);
  const u = Y(c);
  return u.current = c, ie(() => {
    u.current(d.hasErrors);
  }, [d.hasErrors]), /* @__PURE__ */ f(
    Nl,
    {
      formName: e,
      sectionId: r,
      schema: t,
      sectionConfig: n,
      defaultValues: i,
      onSubmit: s,
      submitConfig: {
        ...o,
        hideSubmitButton: !0
      },
      errorTriggerMode: a,
      formRef: d.formRef
    }
  );
}
function kg({
  formDefinition: r,
  steps: e,
  isOpen: t,
  onClose: n,
  title: i,
  width: s,
  defaultStepIndex: o,
  nextLabel: a,
  previousLabel: l,
  onStepChanged: c,
  allowStepSkipping: d,
  autoCloseOnLastStepSubmit: u,
  linkAfterLastStepSubmit: h,
  autoSkipCompletedSteps: m = !1
}) {
  const {
    name: g,
    schema: y,
    sections: v,
    defaultValues: A,
    onSubmit: _,
    submitConfig: S,
    errorTriggerMode: k = "on-blur"
  } = r, b = S?.label, x = H(() => Jt(y), [y]), w = H(
    () => _g(y, v),
    [y, v]
  ), R = K(
    (me) => {
      const de = di(x, me);
      return Fl(de);
    },
    [x]
  ), z = Ol(), F = Y(
    A ? { ...A } : {}
  ), T = Y(o ?? 0), D = K(
    (me) => async () => {
      await z.submit();
    },
    [z]
  ), O = K(
    (me) => z.hasErrors,
    [z.hasErrors]
  ), G = H(
    () => e ?? w.map((me) => ({
      title: v?.[me]?.title ?? me,
      sectionIds: [me]
    })),
    [e, w, v]
  ), I = K(
    (me) => {
      if (!m) return !1;
      const de = G[me];
      if (!de) return !1;
      const Se = di(
        x,
        de.sectionIds
      );
      return Ll(Se, A, de.isCompleted);
    },
    [m, G, x, A]
  ), U = H(() => {
    if (o !== void 0) return o;
    if (!m) return;
    const me = G.findIndex(
      (de, Se) => !I(Se)
    );
    return me === -1 ? G.length - 1 : me;
  }, [o, m, G, I]), j = H(
    () => Pl(
      w,
      v,
      e,
      R,
      D,
      O,
      m ? I : void 0
    ),
    [
      w,
      v,
      e,
      R,
      D,
      O,
      m,
      I
    ]
  ), ne = Y(null), ce = Y(null), { showSuccess: he, ActionBar: Pe } = Il(), we = K(
    async (me) => {
      Object.assign(F.current, me);
      const de = { ...F.current };
      ce.current = de;
      const Se = await _({ data: de });
      return ne.current = Se, Se;
    },
    [_]
  ), ke = K(() => {
    const me = ne.current;
    if (me?.success) {
      if (he(me.message), h) {
        const de = h({
          fullData: ce.current
        });
        window.location.href = de;
        return;
      }
      u && n?.();
    }
  }, [u, h, n, he]), Le = K(
    (me) => {
      const de = z.getValues();
      Object.assign(F.current, de), T.current = me, c?.(me);
    },
    [z, c]
  );
  return /* @__PURE__ */ f(
    os,
    {
      steps: j,
      isOpen: t,
      onClose: n,
      title: i,
      width: s,
      defaultStepIndex: U,
      nextLabel: a,
      previousLabel: l,
      submitLabel: b,
      onSubmit: ke,
      onStepChanged: Le,
      allowStepSkipping: d,
      children: ({ currentStep: me }) => {
        const de = Nr(
          me,
          w,
          e
        ), Se = di(
          x,
          de
        ), se = de.reduce((ee, $) => (v?.[$] && (ee[$] = v[$]), ee), {});
        return /* @__PURE__ */ W(Yt, { children: [
          /* @__PURE__ */ f("div", { className: "pb-5", children: /* @__PURE__ */ f(
            Al,
            {
              name: `${g}-step-${me}`,
              schema: Se,
              sections: se,
              defaultValues: F.current,
              onSubmit: we,
              submitConfig: { hideSubmitButton: !0, hideActionBar: !0 },
              errorTriggerMode: k,
              formRef: z.formRef
            }
          ) }),
          Pe
        ] });
      }
    }
  );
}
function zl(r) {
  return r.formDefinition._brand === "per-section" ? /* @__PURE__ */ f(
    Eg,
    {
      ...r
    }
  ) : /* @__PURE__ */ f(
    kg,
    {
      ...r
    }
  );
}
zl.displayName = "F0WizardForm";
function Dg(r) {
  if (typeof r != "object" || r === null) return !1;
  const t = r._def;
  return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
function Vv(r) {
  const {
    name: e,
    schema: t,
    sections: n,
    defaultValues: i,
    onSubmit: s,
    submitConfig: o,
    errorTriggerMode: a
  } = r;
  return H(() => {
    const l = Dg(t) ? "single" : "per-section";
    return {
      name: e,
      schema: t,
      sections: n,
      defaultValues: i,
      onSubmit: s,
      submitConfig: o,
      errorTriggerMode: a,
      _brand: l
    };
  }, [
    e,
    t,
    n,
    i,
    s,
    o,
    a
  ]);
}
const Hv = ye(zl), Bl = Ge((r, e) => /* @__PURE__ */ f(Pi, { ref: e, variant: "heading", ...r }));
Bl.displayName = "F0Heading";
const jv = ye(Bl), Ng = {
  variant: {
    title: "text-3xl font-semibold",
    heading: "text-xl font-semibold",
    subtitle: "text-lg font-normal",
    body: "text-base font-normal",
    label: "text-base font-medium",
    description: "text-base font-normal",
    caption: "text-sm font-normal",
    code: "text-sm font-normal font-mono"
  }
}, Rg = {
  title: "h2",
  heading: "h3",
  subtitle: "p",
  body: "p",
  label: "label",
  description: "p",
  caption: "span",
  code: "code"
}, Ag = /* @__PURE__ */ new Set([
  "description",
  "subtitle",
  "caption",
  "label"
]), Tg = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl"
}, uo = {
  secondary: "text-f1-foreground-secondary",
  tertiary: "text-f1-foreground-tertiary",
  inverse: "text-f1-foreground-inverse",
  "inverse-secondary": "text-f1-foreground-inverse-secondary",
  disabled: "text-f1-foreground-disabled",
  accent: "text-f1-foreground-accent",
  critical: "text-f1-foreground-critical",
  warning: "text-f1-foreground-warning",
  positive: "text-f1-foreground-positive",
  info: "text-f1-foreground-info",
  selected: "text-f1-foreground-selected"
}, Og = {
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }
}, Mg = {
  align: "left"
}, Fg = {
  underline: "underline",
  overline: "overline",
  "line-through": "line-through"
}, Lg = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize"
}, Ig = kt({
  base: "text-f1-foreground",
  variants: {
    ...Ng,
    ...Og
  },
  defaultVariants: {
    variant: "body",
    ...Mg
  }
});
function Pg(r, e) {
  if (r && r !== "default") return uo[r];
  if (r !== "default" && Ag.has(e))
    return uo.secondary;
}
function zg(r) {
  if (!(!r || r === "default"))
    return Tg[r];
}
const Vl = Ge(
  ({
    content: r,
    variant: e = "body",
    size: t,
    color: n,
    align: i,
    ellipsis: s,
    noEllipsisTooltip: o,
    decoration: a,
    transform: l,
    required: c,
    ...d
  }, u) => {
    const h = le(
      Ig({ variant: e, align: i }),
      zg(t),
      Pg(n, e),
      a && a !== "none" ? Fg[a] : void 0,
      l && l !== "none" ? Lg[l] : void 0
    ), m = Rg[e], g = c ? /* @__PURE__ */ f("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (s !== void 0) {
      const y = typeof s == "number" ? s : 1;
      return g ? ar(
        m,
        {
          ...d,
          className: le(h, "inline-flex gap-0.5"),
          ref: u
        },
        /* @__PURE__ */ f(
          ln,
          {
            lines: y,
            noTooltip: o,
            tag: "span",
            className: "min-w-0",
            children: r
          }
        ),
        g
      ) : /* @__PURE__ */ f(
        ln,
        {
          ref: u,
          lines: y,
          noTooltip: o,
          tag: m,
          className: h,
          ...d,
          children: r
        }
      );
    }
    return ar(
      m,
      { ...d, className: h, ref: u },
      r,
      g
    );
  }
);
Vl.displayName = "F0TextV2";
const $v = tt(
  {
    name: "F0TextV2",
    type: "info"
  },
  Vl
), Wv = ye(Pd), Gv = ye(
  lt(
    "F0GridStack",
    Ii
  )
), ui = 16, Bg = kt({
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
function Hl(r, e = 0) {
  return r.flatMap((t) => [
    { id: t.id, depth: Math.min(e, 3) },
    ...t.children ? Hl(t.children, e + 1) : []
  ]);
}
function Vg(r, e) {
  const t = r.length;
  if (t <= ui) return r;
  const n = t / (ui - 1), i = new Set(
    Array.from(
      { length: ui - 1 },
      (s, o) => Math.min(Math.floor(o * n), t - 1)
    )
  );
  if (i.add(t - 1), e) {
    const s = r.findIndex((o) => o.id === e);
    if (s !== -1 && !i.has(s)) {
      const o = [...i].reduce(
        (a, l) => Math.abs(l - s) < Math.abs(a - s) ? l : a
      );
      i.delete(o), i.add(s);
    }
  }
  return [...i].sort((s, o) => s - o).map((s) => r[s]);
}
function Hg({
  items: r,
  activeItem: e,
  className: t,
  align: n = "left",
  variant: i = "dark"
}) {
  const s = H(
    () => Vg(Hl(r), e),
    [r, e]
  );
  return /* @__PURE__ */ f(
    "div",
    {
      className: le(
        "flex flex-col justify-center gap-2 py-3",
        n === "right" ? "items-end" : "items-start",
        t
      ),
      children: s.map((o) => /* @__PURE__ */ f(
        "div",
        {
          className: Bg({
            depth: o.depth,
            variant: i,
            active: o.id === e
          })
        },
        o.id
      ))
    }
  );
}
const jg = 300, $g = 0, Wg = kt({
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
function Gg({
  title: r,
  items: e,
  className: t,
  activeItem: n,
  collapsible: i = !1,
  showChildrenCounter: s = !1,
  barsAlign: o = "left",
  size: a = "md",
  variant: l = "light"
}) {
  const [c, d] = re(!1), u = Y(!1), h = (g) => {
    g && !c && (u.current = !0), d(g);
  }, m = K((g) => {
    !g || !u.current || (u.current = !1, requestAnimationFrame(() => {
      g.querySelector("[data-active]")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }, []);
  return /* @__PURE__ */ W(
    zd,
    {
      open: c,
      onOpenChange: h,
      openDelay: $g,
      closeDelay: jg,
      children: [
        /* @__PURE__ */ f(Bd, { asChild: !0, children: /* @__PURE__ */ f(
          "button",
          {
            className: le(
              Ln(),
              "flex cursor-pointer items-center rounded-md px-1.5 py-1",
              t
            ),
            "aria-label": r ?? "Menu",
            children: /* @__PURE__ */ f(
              Hg,
              {
                items: e,
                activeItem: n,
                align: o,
                variant: l
              }
            )
          }
        ) }),
        /* @__PURE__ */ f(
          Vd,
          {
            ref: m,
            side: o === "left" ? "right" : "left",
            align: "center",
            sideOffset: -28,
            className: le(
              Wg({ size: a }),
              !r && "pt-2",
              "scrollbar-macos"
            ),
            children: /* @__PURE__ */ f(
              Mi,
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
const Uv = ye(
  lt(
    "F0TableOfContentPopover",
    Gg
  )
), Ug = ({ benefits: r }) => /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: r.map((e, t) => /* @__PURE__ */ f(Zg, { text: e }, t)) }), Zg = ({ text: r }) => /* @__PURE__ */ W("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ f(Gr, { icon: Dc, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ f("span", { children: r })
] }), jl = Ge(
  ({
    title: r,
    image: e,
    benefits: t,
    actions: n,
    withShadow: i = !0,
    module: s,
    moduleName: o,
    tag: a,
    promoTag: l
  }, c) => /* @__PURE__ */ W(
    "div",
    {
      ref: c,
      className: le(
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
        /* @__PURE__ */ W("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ W("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ W("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ W("div", { className: "flex flex-row items-center gap-2", children: [
                s && /* @__PURE__ */ f(Eo, { module: s }),
                o && /* @__PURE__ */ f("p", { className: "text-base font-medium text-f1-foreground", children: o })
              ] }),
              (a || l) && /* @__PURE__ */ W("div", { className: "flex justify-start gap-2", children: [
                a && /* @__PURE__ */ f(kc, { icon: a.icon, text: a.label }),
                l && /* @__PURE__ */ f(
                  Hd,
                  {
                    variant: l.variant || "positive",
                    text: l.label
                  }
                )
              ] }),
              /* @__PURE__ */ f("h2", { className: "font-bold text-xl text-f1-foreground", children: r })
            ] }),
            /* @__PURE__ */ f(Ug, { benefits: t })
          ] }),
          n && /* @__PURE__ */ f("div", { className: "flex gap-3", children: n })
        ] })
      ]
    }
  )
);
jl.displayName = "ProductBlankslate";
const qg = ye(jl);
function Kg({
  isOpen: r,
  onClose: e,
  title: t,
  children: n,
  module: i,
  portalContainer: s
}) {
  const [o, a] = re(r);
  return ie(() => {
    a(r);
  }, [r]), /* @__PURE__ */ f(Nc, { open: o, onOpenChange: (c) => {
    a(c), c || e();
  }, modal: !0, children: /* @__PURE__ */ W(
    Rc,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [
        /* @__PURE__ */ W("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ W(Ac, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            i && /* @__PURE__ */ f(Eo, { module: i, size: "lg" }),
            t
          ] }),
          /* @__PURE__ */ f(
            Ti,
            {
              variant: "outline",
              icon: Oi,
              onClick: e,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ W(bo, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          n,
          /* @__PURE__ */ f(
            xo,
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
function Xg({
  isOpen: r,
  onClose: e,
  title: t,
  image: n,
  benefits: i,
  errorMessage: s,
  successMessage: o,
  loadingState: a,
  nextSteps: l,
  closeLabel: c,
  primaryAction: d,
  modalTitle: u,
  modalModule: h,
  secondaryAction: m,
  portalContainer: g,
  tag: y,
  promoTag: v,
  showResponseDialog: A = !0
}) {
  const [_, S] = re(r), [k, b] = re(null), [x, w] = re(!1), R = async () => {
    if (d?.onClick) {
      w(!0);
      try {
        await d.onClick(), S(!1), A && b("success");
      } catch {
        A && b("error");
      } finally {
        w(!1);
      }
    }
  }, z = () => {
    S(!1), e?.();
  }, F = x;
  return /* @__PURE__ */ W(Yt, { children: [
    /* @__PURE__ */ f(
      Kg,
      {
        isOpen: _,
        onClose: z,
        title: u,
        module: h,
        portalContainer: g,
        children: /* @__PURE__ */ f("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ f(
          qg,
          {
            title: t,
            image: n,
            benefits: i,
            withShadow: !1,
            tag: y,
            promoTag: v,
            actions: /* @__PURE__ */ W("div", { className: "flex gap-3", children: [
              d && /* @__PURE__ */ f(
                Ke,
                {
                  variant: d.variant,
                  label: F ? a.label : d.label,
                  icon: d.icon || void 0,
                  onClick: R,
                  loading: d.loading,
                  size: d.size
                }
              ),
              m && /* @__PURE__ */ f(
                Ke,
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
    k && A && /* @__PURE__ */ f(
      Po,
      {
        open: !0,
        onClose: () => {
          z(), b(null);
        },
        success: k === "success",
        errorMessage: s,
        successMessage: o,
        nextSteps: l,
        closeLabel: c,
        portalContainer: g
      }
    )
  ] });
}
const Zv = ye(Xg);
function Yg({
  mediaUrl: r,
  title: e,
  description: t,
  onClose: n,
  dismissible: i,
  width: s,
  trackVisibility: o,
  actions: a,
  showConfirmation: l = !0
}) {
  const [c, d] = re(!1), u = () => {
    d(!0), n && n();
  };
  ie(() => {
    o && o(!c);
  }, [o, c]);
  const h = r?.includes(".mp4");
  return /* @__PURE__ */ f(Yt, { children: c ? null : /* @__PURE__ */ W(Tc, { style: { width: s }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ W(Oc, { children: [
      i && /* @__PURE__ */ f("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ f(
        Ke,
        {
          variant: "ghost",
          icon: Oi,
          size: "sm",
          hideLabel: !0,
          onClick: u,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ W("div", { children: [
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
        /* @__PURE__ */ W("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ f(Nn, { className: "text-lg font-medium", children: e }),
          /* @__PURE__ */ f(Nn, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    a && /* @__PURE__ */ f(Mc, { className: "p-3", children: a.map(
      (m) => m.type === "upsell" ? /* @__PURE__ */ f(
        zo,
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
        Ke,
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
const Jg = ye(Yg), $l = Ge(
  function({ primaryAction: e, secondaryAction: t, ...n }, i) {
    const s = (l) => l.variant === "promote" ? /* @__PURE__ */ f(
      zo,
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
      Ke,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), o = e?.variant !== "promote" ? e : void 0, a = t?.variant !== "promote" ? t : void 0;
    return /* @__PURE__ */ W(
      jd,
      {
        ref: i,
        ...n,
        primaryAction: o,
        secondaryAction: a,
        children: [
          e?.variant === "promote" && s(e),
          t?.variant === "promote" && s(t)
        ]
      }
    );
  }
);
$l.displayName = "UpsellingBanner";
const qv = ye($l);
function Qg({
  isOpen: r,
  setIsOpen: e,
  label: t,
  variant: n = "promote",
  size: i = "md",
  showIcon: s = !0,
  side: o = "right",
  align: a = "center",
  icon: l = Fc,
  mediaUrl: c,
  title: d,
  description: u,
  width: h = "300px",
  trackVisibility: m,
  actions: g,
  onClick: y,
  hideLabel: v = !1
}) {
  const [A, _] = re(!1), [S, k] = re(null), [b, x] = re(null), w = (D) => {
    e(D), y && y();
  }, R = async (D) => {
    if (D.type === "upsell") {
      x(D);
      try {
        await D.onClick(), D.showConfirmation && (_(!0), k("success"));
      } catch {
        _(!0), k("error");
      }
    }
  }, z = () => {
    k(null), _(!1), x(null), e(!1);
  }, F = r && !A, T = g?.map((D) => D.type === "upsell" ? {
    ...D,
    onClick: () => R(D)
  } : D);
  return /* @__PURE__ */ W(Yt, { children: [
    /* @__PURE__ */ W(go, { open: F, onOpenChange: w, children: [
      /* @__PURE__ */ f(vo, { asChild: !0, children: /* @__PURE__ */ f(
        Ke,
        {
          variant: n,
          label: t,
          size: i,
          icon: s ? l : void 0,
          onClick: () => e(r),
          hideLabel: v
        }
      ) }),
      /* @__PURE__ */ f(
        yo,
        {
          side: o,
          align: a,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ f(
            Jg,
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
    b?.type === "upsell" && b.showConfirmation && S && /* @__PURE__ */ f(
      Po,
      {
        open: !0,
        onClose: z,
        success: S === "success",
        errorMessage: b.errorMessage,
        successMessage: b.successMessage,
        nextSteps: b.nextSteps,
        closeLabel: b.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const Kv = ye(Qg), ev = vt(
  null
), tv = ({ children: r, fullScreen: e = !0 }) => {
  const t = Y(null), [n, i] = re(t.current);
  return Hc(() => {
    i(t.current);
  }, []), /* @__PURE__ */ f(ev.Provider, { value: { element: n }, children: /* @__PURE__ */ f(
    "div",
    {
      ref: t,
      id: "f0-layout",
      className: le({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: r
    }
  ) });
}, rv = ({
  children: r
}) => /* @__PURE__ */ f(Gd, { reducedMotion: "user", children: r }), Xv = ({
  children: r,
  layout: e,
  link: t,
  privacyModeInitiallyEnabled: n,
  image: i,
  i18n: s,
  l10n: o,
  isDev: a = !1,
  dataCollectionStorageHandler: l,
  showExperimentalWarnings: c = !1,
  renderDataTestIdAttribute: d = !1
}) => /* @__PURE__ */ f(rv, { children: /* @__PURE__ */ f(
  Lc,
  {
    isDev: a,
    showExperimentalWarnings: c,
    renderDataTestIdAttribute: d,
    children: /* @__PURE__ */ f(Ic, { ...o, children: /* @__PURE__ */ f(Pc, { ...s, children: /* @__PURE__ */ f(zc, { ...t, children: /* @__PURE__ */ f(tv, { ...e, children: /* @__PURE__ */ f(Bc, { children: /* @__PURE__ */ f(
      $d,
      {
        initiallyEnabled: n,
        children: /* @__PURE__ */ f(Vc, { ...i, children: /* @__PURE__ */ f(
          Wd,
          {
            handler: l,
            children: r
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), fo = (r) => `datacollection-${r}`, Yv = {
  get: async (r) => JSON.parse(
    localStorage.getItem(fo(r)) ?? "{}"
  ),
  set: async (r, e) => {
    localStorage.setItem(fo(r), JSON.stringify(e));
  }
};
export {
  ey as A,
  Lb as AiChatTranslationsProvider,
  mv as AreaChart,
  ty as Await,
  pv as BarChart,
  ry as Blockquote,
  gv as CategoryBarChart,
  ny as ChatSpinner,
  wv as ComboChart,
  cv as Dashboard,
  ac as DataTestIdWrapper,
  mb as DndProvider,
  iy as Em,
  sy as EmojiImage,
  oy as F0ActionItem,
  ay as F0AiChat,
  ly as F0AiChatProvider,
  cy as F0AiChatTextArea,
  dy as F0AiCollapsibleMessage,
  uy as F0AiFullscreenChat,
  Fv as F0Alert,
  Ib as F0AuraVoiceAnimation,
  fy as F0Avatar,
  Od as F0AvatarAlert,
  hy as F0AvatarCompany,
  pb as F0AvatarDate,
  my as F0AvatarEmoji,
  yc as F0AvatarFile,
  ic as F0AvatarIcon,
  gb as F0AvatarList,
  Eo as F0AvatarModule,
  py as F0AvatarPerson,
  gy as F0AvatarTeam,
  _v as F0BigNumber,
  Cv as F0Box,
  Ke as F0Button,
  vy as F0ButtonDropdown,
  yy as F0ButtonToggle,
  vb as F0Card,
  hc as F0Checkbox,
  Ov as F0ChipList,
  Lo as F0DatePicker,
  by as F0Dialog,
  xy as F0DialogContext,
  wy as F0DialogProvider,
  _y as F0EventCatcherProvider,
  Lv as F0FilterPickerContent,
  Bv as F0Form,
  Gv as F0GridStack,
  Pb as F0HILActionConfirmation,
  jv as F0Heading,
  Gr as F0Icon,
  oc as F0Link,
  Cy as F0MessageSources,
  Ey as F0OneIcon,
  Sy as F0OneSwitch,
  Xv as F0Provider,
  lr as F0Select,
  Uv as F0TableOfContentPopover,
  yb as F0TagAlert,
  Td as F0TagBalance,
  bb as F0TagCompany,
  ky as F0TagDot,
  xb as F0TagList,
  wb as F0TagPerson,
  kc as F0TagRaw,
  Hd as F0TagStatus,
  _b as F0TagTeam,
  vu as F0Text,
  $v as F0TextV2,
  Dy as F0Thinking,
  Hv as F0WizardForm,
  Ny as FullscreenChatContext,
  Ry as GROUP_ID_SYMBOL,
  Ay as H1,
  Ty as H2,
  Oy as H3,
  hv as HomeLayout,
  My as Hr,
  Fy as Image,
  dv as Layout,
  Ly as Li,
  vv as LineChart,
  Iy as Ol,
  Py as OneFilterPicker,
  zy as P,
  yv as PieChart,
  By as Pre,
  $d as PrivacyModeProvider,
  qg as ProductBlankslate,
  Cb as ProductCard,
  Zv as ProductModal,
  Jg as ProductWidget,
  xv as ProgressBarChart,
  uv as StandardLayout,
  Vy as Strong,
  Hy as Table,
  Wv as Tag,
  Eb as TagCounter,
  jy as Td,
  $y as Th,
  fv as TwoColumnLayout,
  Wy as Ul,
  Po as UpsellRequestResponseDialog,
  qv as UpsellingBanner,
  zo as UpsellingButton,
  Kv as UpsellingPopover,
  bv as VerticalBarChart,
  zb as actionItemStatuses,
  Bb as aiTranslations,
  lv as avatarVariants,
  Gy as buildTranslations,
  Dv as buttonDropdownSizes,
  kv as buttonDropdownVariants,
  Sv as buttonSizes,
  Nv as buttonToggleSizes,
  Rv as buttonToggleVariants,
  Ev as buttonVariants,
  Sb as cardImageFits,
  kb as cardImageSizes,
  Db as createAtlaskitDriver,
  Uy as createDataSourceDefinition,
  fu as createPageLayoutBlock,
  hu as createPageLayoutBlockGroup,
  Yv as dataCollectionLocalStorageHandler,
  Mv as datepickerSizes,
  $b as defaultTranslations,
  Zy as downloadTableAsExcel,
  qn as evaluateRenderIf,
  lt as experimental,
  Iv as f0FormField,
  qy as f0MarkdownRenderers,
  Kt as generateAnchorId,
  Ky as getAnimationVariants,
  Xy as getDataSourcePaginationType,
  Yy as getEmojiLabel,
  br as getF0Config,
  zv as getSchemaDefinition,
  Pv as hasF0Config,
  Hm as inferFieldType,
  Jy as isInfiniteScrollPagination,
  Qy as isPageBasedPagination,
  Ee as isZodType,
  Av as linkVariants,
  eb as modules,
  Vb as oneIconSizes,
  Nb as predefinedPresets,
  Rb as selectSizes,
  Tv as tagDotColors,
  yt as unwrapZodSchema,
  tb as useAiChat,
  Hb as useAiChatTranslations,
  rb as useData,
  nb as useDataSource,
  ib as useDefaultCopilotActions,
  Ab as useDndEvents,
  Tb as useDraggable,
  Ob as useDroppableList,
  sb as useEmojiConfetti,
  ob as useF0Dialog,
  Ol as useF0Form,
  Vv as useF0FormDefinition,
  ab as useGroups,
  lb as useMessageSourcesAction,
  cb as useOrchestratorThinkingAction,
  Mb as usePrivacyMode,
  db as useReducedMotion,
  kl as useSchemaDefinition,
  ub as useSelectable,
  fb as useXRay,
  ye as withDataTestId
};
