import { cX as Ua, az as Pe, b_ as gr, L as Y, M as fn, cY as Za, $ as Rn, cZ as Qd, aE as ko, c_ as Kd, aF as Ga, ai as $e, u as De, aa as ze, c$ as vr, a7 as Xd, d0 as Yd, d1 as Jd, T as eu, ad as Qa, d2 as Br, aA as St, aw as Ni, d3 as tu, d4 as nu, d5 as ru, d6 as No, bE as su, d7 as iu, d8 as Ka, d9 as ou, b0 as Ei, b1 as Di, a5 as ps, b2 as Ti, aL as Xa, cM as Vr, da as Ya, db as au, dc as lu, dd as cu, aG as du, de as Ri, df as Eo, bH as uu, dg as fu, b6 as hu, dh as mu, an as Ja, cs as ri, N as Be, au as pu, av as $r, di as ar, dj as el, cu as Ai, dk as gu, dl as vu, ap as yr, dm as Fi, cv as tl, aV as Dn, cw as nl, dn as yu, dp as Oi, bu, dq as rl, dr as sl, O as Tt, aQ as xu, ds as si, dt as il, du as wu, dv as ol, bS as An, dw as al, dx as _u, dy as Cu, at as ll, dz as Su, cj as ku, dA as Nu, aD as gs, dB as Eu, dC as Du, dD as Tu, dE as Ru, j as Au, dF as Fu, a9 as cl, dG as wn, dH as dl, dI as ul, dJ as jr, cm as fl, ab as Ii, ac as Li, dK as Mi, ag as Pi, am as pt, dL as zi, ao as Fn, dM as Yn, dN as Jn, af as er, dO as tr, dP as Ou, dQ as Nr, dR as hl, by as Hr, dS as ft, dT as ml, bU as vs, dU as pl, bP as Bi, bV as Vi, dV as Iu, co as gl, dW as Lu, dX as Mu, dY as Pu, bn as vl, bs as zu, dZ as Bu, d_ as Vu, d$ as $u, e0 as yl, b$ as ju, c3 as Hu, ca as Wu, e1 as bl, e2 as qu, e3 as Uu, e4 as Zu, e5 as Gu, I as Qu, e6 as Ku, e7 as Xu, e8 as Yu, e9 as Ju, bI as ef, ea as tf } from "./F0AiChat-Bgyj2Zb4.js";
import { ew as Xx, ee as Yx, i as Jx, eI as ew, bm as tw, h as nw, F as rw, a as sw, C as iw, b as ow, l as aw, bT as lw, cc as cw, bA as dw, cd as uw, bf as fw, bG as hw, aK as mw, bB as pw, aT as gw, el as vw, ep as yw, ec as bw, eq as xw, eM as ww, k as _w, bD as Cw, es as Sw, bC as kw, bF as Nw, eu as Ew, ev as Dw, cW as Tw, ef as Rw, ex as Aw, eg as Fw, eh as Ow, ei as Iw, cI as Lw, cJ as Mw, eb as Pw, ej as zw, ek as Bw, et as Vw, cK as $w, cr as jw, eN as Hw, em as Ww, en as qw, eo as Uw, ed as Zw, cL as Gw, eH as Qw, eC as Kw, eF as Xw, g as Yw, eB as Jw, bq as e0, cH as t0, cE as n0, cG as r0, cD as s0, eA as i0, ez as o0, cx as a0, cF as l0, c as c0, ey as d0, eD as u0, d as f0, eJ as h0, eK as m0, eL as p0, bo as g0, er as v0, eE as y0, f as b0, e as x0, bl as w0, eG as _0, eO as C0 } from "./F0AiChat-Bgyj2Zb4.js";
import { jsx as c, jsxs as T, Fragment as Ye } from "react/jsx-runtime";
import * as Rt from "react";
import fe, { forwardRef as vt, useRef as Z, useImperativeHandle as nf, Children as Wr, createContext as ct, useContext as Je, useState as ee, useMemo as H, useEffect as re, useCallback as B, useLayoutEffect as ii, createElement as Er, isValidElement as xl, Fragment as wl, memo as _l, useReducer as rf, cloneElement as sf, useId as $i } from "react";
import { createPortal as Cl, unstable_batchedUpdates as Dr, flushSync as of } from "react-dom";
import { C as af, w as Sl, J as lf, T as cf, S as kl, z as ji, M as Nl, G as df, $ as uf, O as ff, Q as hf, y as El, k as mf, U as pf } from "./index-C4aqRchK.js";
import { m as k0, n as N0, o as E0, t as D0, F as T0, K as R0, p as A0, H as F0, N as O0, q as I0, P as L0, s as M0, v as P0, R as z0, r as B0, _ as V0, E as $0, x as j0, u as H0 } from "./index-C4aqRchK.js";
import { A as q0, F as U0, c as Z0, d as G0, b as Q0, a as K0, e as X0, o as Y0, u as J0 } from "./F0HILActionConfirmation-Cvmm8Uke.js";
import { defaultTranslations as t_ } from "./i18n-provider-defaults.js";
import './f0.css';const gf = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, vf = vt(function({ widgets: e, children: t }, r) {
  const s = Z(null);
  nf(r, () => s.current);
  const i = Wr.toArray(e).filter((o) => !!o).map((o, a) => /* @__PURE__ */ c("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: o }, a));
  return /* @__PURE__ */ c(Ua, { layout: "home", children: /* @__PURE__ */ T("div", { ref: s, className: "@container", children: [
    /* @__PURE__ */ T("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ c(af, { columns: gf, showArrows: !1, children: i }),
      /* @__PURE__ */ c("main", { children: t })
    ] }),
    /* @__PURE__ */ T("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ c("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: i.slice(0, 3) }),
      /* @__PURE__ */ c("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-5", children: i.slice(3) })
    ] })
  ] }) });
}), yf = fn({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Dl = fe.forwardRef(({ children: n, variant: e, className: t, ...r }, s) => /* @__PURE__ */ c(Ua, { layout: "standard", children: /* @__PURE__ */ c(
  "section",
  {
    ref: s,
    className: Y("relative flex-1 overflow-auto", t),
    ...r,
    children: /* @__PURE__ */ c("div", { className: Y(yf({ variant: e })), children: n })
  }
) }));
Dl.displayName = "StandardLayout";
const bf = Pe(
  gr(
    {
      name: "StandardLayout",
      type: "layout"
    },
    Dl
  )
), xf = vt(
  function({
    children: e,
    sideContent: t,
    mainColumnPosition: r = "left",
    sticky: s = !1
  }, i) {
    return /* @__PURE__ */ c("div", { ref: i, className: "h-full", children: /* @__PURE__ */ T(
      "div",
      {
        className: Y(
          "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
          "flex-col",
          "overflow-y-auto",
          s && "md:sticky md:top-0 md:max-h-full"
        ),
        children: [
          /* @__PURE__ */ c(
            "main",
            {
              className: Y(
                "sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6",
                s ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full",
                r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ c(
            _f,
            {
              sticky: s,
              className: Y(
                "order-1",
                r === "right" ? "md:order-1" : "md:order-3"
              ),
              children: t
            }
          )
        ]
      }
    ) });
  }
), wf = Pe(
  gr(
    {
      name: "TwoColumnLayout",
      type: "layout"
    },
    xf
  )
), _f = ({
  children: n,
  className: e
}) => /* @__PURE__ */ c(
  "aside",
  {
    className: Y(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      e
    ),
    children: n
  }
), Tl = ct(null);
function Rl() {
  const n = Je(Tl);
  if (!n)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return n;
}
function Cf(n) {
  const { content: e, ...t } = n;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function Nn(n) {
  const e = Cf(n);
  return n.subGridOpts?.children && (e.subGridOpts = {
    ...n.subGridOpts,
    children: n.subGridOpts.children.map(
      (t) => Nn(t)
    )
  }), e;
}
const Sf = [
  "noMove",
  "noResize",
  "locked",
  "w",
  "h",
  "x",
  "y"
], nn = 200;
function kf(n) {
  const e = n.cloneNode(!0);
  return n.querySelectorAll("canvas").forEach((r) => {
    if (r.width > 0 && r.height > 0)
      try {
        const s = r.toDataURL("image/png"), i = e.querySelectorAll("canvas"), o = Array.from(
          n.querySelectorAll("canvas")
        ).indexOf(r), a = i[o];
        if (a && a.parentElement) {
          const l = document.createElement("img");
          l.src = s, l.style.width = `${r.width}px`, l.style.height = `${r.height}px`, l.style.display = "block", r.className && (l.className = r.className), r.id && (l.id = r.id), a.parentElement.replaceChild(l, a);
        }
      } catch (s) {
        console.warn("Failed to convert canvas to image:", s);
      }
  }), e.innerHTML;
}
function Nf({
  children: n,
  options: e,
  onResizeStop: t,
  onChange: r,
  widgets: s,
  static: i,
  forcePositionSync: o
}) {
  const [a, l] = ee(null), u = Z(null), d = Z(!1), f = H(() => ({
    ...e,
    children: (s || []).map((w) => Nn(w))
  }), [e, s]), [h, m] = ee(() => {
    const w = /* @__PURE__ */ new Map(), N = s || [], A = (I) => {
      I.id && I.content && w.set(I.id, I.content), I.subGridOpts?.children && I.subGridOpts.children.forEach((D) => {
        A(D);
      });
    };
    return N.forEach((I) => {
      A(I);
    }), w;
  }), g = Z(h);
  re(() => {
    g.current = h;
  }, [h]);
  const [y, p] = ee(() => {
    const w = /* @__PURE__ */ new Map(), N = s || [], A = (I) => {
      I.id && I._originalContent !== void 0 && w.set(I.id, I._originalContent), I.subGridOpts?.children && I.subGridOpts.children.forEach((D) => {
        A(D);
      });
    };
    return N.forEach((I) => {
      A(I);
    }), w;
  }), b = Z(y);
  re(() => {
    b.current = y;
  }, [y]);
  const v = Z(r);
  re(() => {
    v.current = r;
  }, [r]);
  const [k, C] = ee(() => {
    const w = /* @__PURE__ */ new Map(), N = s || [], A = (I) => {
      if (I.id) {
        const D = Nn(I);
        w.set(I.id, D);
      }
      I.subGridOpts?.children && I.subGridOpts.children.forEach((D) => {
        A(D);
      });
    };
    return N.forEach((I) => {
      A(I);
    }), w;
  });
  Za(() => {
    if (!a) return;
    const w = a.save();
    if (!Array.isArray(w))
      return;
    const N = w.map((M) => M.id), A = s || [], I = A.map((M) => M.id), D = A.filter(
      (M) => !N.includes(M.id)
    );
    D.length > 0 && (D.forEach((M) => {
      M.content && g.current.set(M.id, M.content), M._originalContent !== void 0 && b.current.set(M.id, M._originalContent);
    }), D.forEach((M) => {
      const P = Nn(M);
      a.addWidget(P);
    }), C((M) => {
      const P = new Map(M);
      return D.forEach(($) => {
        const W = Nn($);
        P.set($.id, W);
      }), P;
    }), m((M) => {
      const P = new Map(M);
      return D.forEach(($) => {
        $.content && P.set($.id, $.content);
      }), P;
    }), p((M) => {
      const P = new Map(M);
      return D.forEach(($) => {
        $._originalContent !== void 0 && P.set($.id, $._originalContent);
      }), P;
    }));
    const L = w.filter(
      (M) => !I.includes(M.id)
    );
    if (L.length > 0) {
      const M = L.map((P) => P.id).filter(Boolean);
      M.forEach((P) => {
        setTimeout(() => {
          g.current.delete(P), b.current.delete(P);
        }, nn);
      }), L.forEach((P) => {
        const $ = a.el.querySelector(
          `[gs-id="${P.id}"]`
        );
        $ && setTimeout(() => {
          a.removeWidget($, !0);
        }, nn);
      }), C((P) => {
        const $ = new Map(P);
        return M.forEach((W) => {
          setTimeout(() => {
            $.delete(W);
          }, nn);
        }), $;
      }), m((P) => {
        const $ = new Map(P);
        return M.forEach((W) => {
          if ($.get(W)) {
            const G = a.el.querySelector(
              `[gs-id="${W}"] .grid-stack-item-content`
            );
            let oe = "";
            G && (oe = kf(G)), $.set(
              W,
              /* @__PURE__ */ c(
                Rn.div,
                {
                  className: "h-full w-full",
                  initial: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  animate: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
                  exit: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
                  transition: {
                    opacity: {
                      duration: nn / 1e3,
                      ease: [0.32, 0, 0.67, 0]
                    },
                    scale: {
                      duration: nn / 1e3,
                      ease: [0.65, 0, 0.35, 1]
                    },
                    filter: {
                      duration: nn / 1e3,
                      ease: "linear"
                    }
                  },
                  dangerouslySetInnerHTML: { __html: oe }
                }
              )
            );
          }
          setTimeout(() => {
            $.delete(W);
          }, nn);
        }), $;
      }), p((P) => {
        const $ = new Map(P);
        return M.forEach((W) => {
          setTimeout(() => {
            $.delete(W);
          }, nn);
        }), $;
      });
    }
    const E = A.filter(
      (M) => N.includes(M.id)
    );
    if (E.length > 0) {
      const M = [];
      E.forEach((P) => {
        const $ = w.find(
          (ce) => ce.id === P.id
        );
        if (!$)
          return;
        const W = Sf.filter(
          (ce) => $[ce] !== P[ce]
        );
        if (W.length > 0) {
          const ce = {}, G = ["w", "h", "x", "y"], oe = ["noMove", "noResize", "locked"], me = W.filter(
            (V) => G.includes(V)
          ), z = W.filter(
            (V) => oe.includes(V)
          );
          if (me.length > 0 && z.length > 0 && me.length + z.length === W.length ? z.forEach((V) => {
            const Q = P[V];
            Q !== void 0 && (ce[V] = Q);
          }) : W.forEach((V) => {
            const Q = P[V];
            Q !== void 0 && (ce[V] = Q);
          }), Object.keys(ce).length > 0) {
            const V = a.el.querySelector(
              `[gs-id="${P.id}"]`
            );
            V && M.push({
              id: P.id,
              element: V,
              updateOptions: ce
            });
          }
        }
      }), E.forEach((P) => {
        P.content && g.current.set(P.id, P.content), P._originalContent !== void 0 && b.current.set(P.id, P._originalContent);
      }), M.forEach(({ element: P, updateOptions: $ }) => {
        try {
          a.update(P, $);
        } catch (W) {
          console.warn("Error updating widget:", W);
        }
      }), C((P) => {
        const $ = new Map(P);
        return E.forEach((W) => {
          const ce = Nn(W);
          $.set(W.id, ce);
        }), $;
      }), m((P) => {
        const $ = new Map(P);
        return E.forEach((W) => {
          W.content && $.set(W.id, W.content);
        }), $;
      }), p((P) => {
        const $ = new Map(P);
        return E.forEach((W) => {
          W._originalContent !== void 0 && $.set(W.id, W._originalContent);
        }), $;
      });
    }
    d.current || (d.current = !0);
  }, [s]), re(() => {
    !a || i === void 0 || a.setStatic(i);
  }, [a, i]);
  const x = Z(o);
  re(() => {
    if (!a || o === void 0 || o === x.current)
      return;
    x.current = o;
    const w = s || [];
    a.batchUpdate(), w.forEach((N) => {
      const A = a.el.querySelector(
        `[gs-id="${N.id}"]`
      );
      A && a.update(A, {
        x: N.x ?? 0,
        y: N.y ?? 0,
        w: N.w ?? 1,
        h: N.h ?? 1
      });
    }), a.batchUpdate(!1);
  }, [a, o]), re(() => {
    if (!a || !f.handle) return;
    a.opts && (a.opts.handle = f.handle);
    const w = setTimeout(() => {
      if (a && a.el && f.handle && a.el.querySelectorAll(
        f.handle
      ).length > 0)
        try {
          !a.opts?.disableResize && (a.disable(!1), a.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(w);
  }, [a, f.handle, f.children]);
  const _ = B(() => {
    if (!a)
      return;
    const w = a.save();
    if (Array.isArray(w)) {
      const N = w.map((A) => {
        const I = A.id;
        if (!I) return null;
        const D = g.current.get(I), L = b.current.get(I), E = A;
        return {
          ...A,
          id: I,
          w: A.w ?? 1,
          h: A.h ?? 1,
          x: A.x ?? 0,
          y: A.y ?? 0,
          // Preserve meta if it exists (GridStack preserves custom properties)
          meta: E.meta,
          // Use _originalContent from originalContentMapRef
          _originalContent: L,
          // Use React content from reactContentMapRef
          content: D ?? /* @__PURE__ */ c("div", { children: "No content" })
        };
      }).filter((A) => A !== null);
      v.current?.(N);
    }
  }, [a]);
  return re(() => {
    if (!a || !a.el || !a.el.parentElement)
      return;
    const w = (N, A) => {
      t?.(N, A);
    };
    try {
      a.on("resizestop", w), a.on("change added removed", _);
    } catch (N) {
      console.error("Error attaching GridStack event listeners:", N);
      return;
    }
    return () => {
      const N = u.current;
      if (N && N.el)
        try {
          N.off("resizestop"), N.off("change added removed");
        } catch (A) {
          console.warn("Error cleaning up GridStack event listeners:", A);
        }
    };
  }, [a, t, _]), re(() => {
    u.current = a;
  }, [a]), re(() => {
    a && a.el && a.el.parentElement && d.current && _();
  }, [a]), /* @__PURE__ */ c(
    Tl.Provider,
    {
      value: {
        options: f,
        gridStack: a,
        _gridStack: {
          value: a,
          set: l
        },
        _rawWidgetMetaMap: {
          value: k,
          set: C
        },
        _reactContentMap: {
          value: h,
          set: m
        }
      },
      children: n
    }
  );
}
const Al = ct(null);
function Ef() {
  const n = Je(Al);
  if (!n)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return n;
}
const Df = ct(null);
function Tf() {
  const { _reactContentMap: n } = Rl(), { getWidgetContainer: e } = Ef();
  return /* @__PURE__ */ c(Ye, { children: Array.from(n.value.entries()).map(([t, r]) => {
    const s = e(t);
    return s ? /* @__PURE__ */ c(Df.Provider, { value: { widget: { id: t } }, children: r && Cl(r, s) }, t) : (console.error(`Widget container not found for widget ${t}`), null);
  }) });
}
function Rf(n, e, t, r, s) {
  const i = (...o) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + s + " and has been replaced with `" + r + "`. It will be **removed** in a future release"), e.apply(n, o));
  return i.prototype = e.prototype, i;
}
class F {
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
        const i = r.getElementById(e);
        return i ? [i] : [];
      }
      let s = t.querySelectorAll(e);
      return !s.length && e[0] !== "." && e[0] !== "#" && (s = t.querySelectorAll("." + e), s.length || (s = t.querySelectorAll("#" + e))), Array.from(s);
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
      let s = t.querySelector(e);
      return r && !s && (s = r.getElementById(e)), s || (s = t.querySelector("." + e)), s;
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
    return e.forEach((s) => {
      s && r.classList.add(s);
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
    return F.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
    const r = e.x > t.x ? e.x : t.x, s = e.x + e.w < t.x + t.w ? e.x + e.w : t.x + t.w;
    if (s <= r)
      return 0;
    const i = e.y > t.y ? e.y : t.y, o = e.y + e.h < t.y + t.h ? e.y + e.h : t.y + t.h;
    return o <= i ? 0 : (s - r) * (o - i);
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
    return e.sort((s, i) => {
      const o = t * ((s.y ?? 1e4) - (i.y ?? 1e4));
      return o === 0 ? t * ((s.x ?? 1e4) - (i.x ?? 1e4)) : o;
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
        const s = e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%|cm|mm)?$/);
        if (!s)
          throw new Error(`Invalid height val = ${e}`);
        r = s[2] || "px", t = parseFloat(s[1]);
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
      for (const s in r) {
        if (!r.hasOwnProperty(s))
          return;
        e[s] === null || e[s] === void 0 ? e[s] = r[s] : typeof r[s] == "object" && typeof e[s] == "object" && F.defaults(e[s], r[s]);
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
        const s = e[r], i = t[r];
        r[0] === "_" || s === i ? delete e[r] : s && typeof s == "object" && i !== void 0 && (F.removeInternalAndSame(s, i), Object.keys(s).length || delete e[r]);
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
    return (...s) => {
      r || (r = !0, setTimeout(() => {
        e(...s), r = !1;
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : F.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, r) {
    const s = F.getScrollElement(e);
    if (!s)
      return;
    const i = e.getBoundingClientRect(), o = s.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, l = i.bottom - Math.min(o.bottom, a), u = i.top - Math.max(o.top, 0), d = s.scrollTop;
    u < 0 && r < 0 ? e.offsetHeight > o.height ? s.scrollTop += r : s.scrollTop += Math.abs(u) > Math.abs(r) ? r : u : l > 0 && r > 0 && (e.offsetHeight > o.height ? s.scrollTop += r : s.scrollTop += l > r ? r : l), t.top += s.scrollTop - d;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, r) {
    const s = F.getScrollElement(t), i = s.clientHeight, o = s === F.getScrollElement() ? 0 : s.getBoundingClientRect().top, a = e.clientY - o, l = a < r, u = a > i - r;
    l ? s.scrollBy({ behavior: "smooth", top: a - r }) : u && s.scrollBy({ behavior: "smooth", top: r - (i - a) });
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], r = F.clone(e);
    for (const s in r)
      r.hasOwnProperty(s) && typeof r[s] == "object" && s.substring(0, 2) !== "__" && !t.find((i) => i === s) && (r[s] = F.cloneDeep(e[s]));
    return r;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let r;
    typeof t == "string" ? r = F.getElement(t) : r = t, r && r.appendChild(e);
  }
  // public static setPositionRelative(el: HTMLElement): void {
  //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
  //     el.style.position = "relative";
  //   }
  // }
  static addElStyles(e, t) {
    if (t instanceof Object)
      for (const r in t)
        t.hasOwnProperty(r) && (Array.isArray(t[r]) ? t[r].forEach((s) => {
          e.style[r] = s;
        }) : e.style[r] = t[r]);
  }
  static initEvent(e, t) {
    const r = { type: t.type }, s = {
      button: 0,
      which: 0,
      buttons: 1,
      bubbles: !0,
      cancelable: !0,
      target: t.target ? t.target : e.target
    };
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].forEach((i) => r[i] = e[i]), ["pageX", "pageY", "clientX", "clientY", "screenX", "screenY"].forEach((i) => r[i] = e[i]), { ...r, ...s };
  }
  /** copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target */
  static simulateMouseEvent(e, t, r) {
    const s = e, i = new MouseEvent(t, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      view: window,
      detail: 1,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: s.ctrlKey ?? !1,
      altKey: s.altKey ?? !1,
      shiftKey: s.shiftKey ?? !1,
      metaKey: s.metaKey ?? !1,
      button: 0,
      relatedTarget: e.target
    });
    (r || e.target).dispatchEvent(i);
  }
  /**
   * defines an element that is used to get the offset and scale from grid transforms
   * returns the scale and offsets from said element
  */
  static getValuesFromTransformedElement(e) {
    const t = document.createElement("div");
    F.addElStyles(t, {
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
    const s = e[t];
    e[t] = e[r], e[r] = s;
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
class Kt {
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
  _fixCollisions(e, t = e, r, s = {}) {
    if (this.sortNodes(-1), r = r || this.collide(e, t), !r)
      return !1;
    if (e._moving && !s.nested && !this.float && this.swap(e, r))
      return !0;
    let i = t;
    !this._loading && this._useEntireRowArea(e, t) && (i = { x: 0, w: this.column, y: t.y, h: t.h }, r = this.collide(e, i, s.skip));
    let o = !1;
    const a = { nested: !0, pack: !1 };
    let l = 0;
    for (; r = r || this.collide(e, i, s.skip); ) {
      if (l++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let u;
      if (r.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(r, { ...r, y: e.y }, e) || !this.collide(r, { ...r, y: t.y - r.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const d = { ...t, y: r.y + r.h, ...a };
        u = this._loading && F.samePos(e, d) ? !0 : this.moveNode(e, d), (r.locked || this._loading) && u ? F.copyPos(t, e) : !r.locked && u && s.pack && (this._packNodes(), t.y = r.y + r.h, F.copyPos(e, t)), o = o || u;
      } else
        u = this.moveNode(r, { ...r, y: t.y + t.h, skip: e, ...a });
      if (!u)
        return o;
      r = void 0;
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
  collide(e, t = e, r) {
    const s = e._id, i = r?._id;
    return this.nodes.find((o) => o._id !== s && o._id !== i && F.isIntercepted(o, t));
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
    const s = e._id, i = r?._id;
    return this.nodes.filter((o) => o._id !== s && o._id !== i && F.isIntercepted(o, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, r) {
    if (!t.rect || !e._rect)
      return;
    const s = e._rect, i = { ...t.rect };
    i.y > s.y ? (i.h += i.y - s.y, i.y = s.y) : i.h += s.y - i.y, i.x > s.x ? (i.w += i.x - s.x, i.x = s.x) : i.w += s.x - i.x;
    let o, a = 0.5;
    for (let l of r) {
      if (l.locked || !l._rect)
        break;
      const u = l._rect;
      let d = Number.MAX_VALUE, f = Number.MAX_VALUE;
      s.y < u.y ? d = (i.y + i.h - u.y) / u.h : s.y + s.h > u.y + u.h && (d = (u.y + u.h - i.y) / u.h), s.x < u.x ? f = (i.x + i.w - u.x) / u.w : s.x + s.w > u.x + u.w && (f = (u.x + u.w - i.x) / u.w);
      const h = Math.min(f, d);
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
  cacheRects(e, t, r, s, i, o) {
    return this.nodes.forEach((a) => a._rect = {
      y: a.y * t + r,
      x: a.x * e + o,
      w: a.w * e - o - s,
      h: a.h * t - r - i
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
      const i = t.x, o = t.y;
      return t.x = e.x, t.y = e.y, e.h != t.h ? (e.x = i, e.y = t.y + t.h) : e.w != t.w ? (e.x = t.x + t.w, e.y = o) : (e.x = i, e.y = o), e._dirty = t._dirty = !0, !0;
    }
    let s;
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (s = F.isTouching(e, t)))
      return r();
    if (s !== !1) {
      if (e.w === t.w && e.x === t.x && (s || (s = F.isTouching(e, t)))) {
        if (t.y < e.y) {
          const i = e;
          e = t, t = i;
        }
        return r();
      }
      if (s !== !1) {
        if (e.h === t.h && e.y === t.y && (s || (s = F.isTouching(e, t)))) {
          if (t.x < e.x) {
            const i = e;
            e = t, t = i;
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
  isAreaEmpty(e, t, r, s) {
    const i = { x: e || 0, y: t || 0, w: r || 1, h: s || 1 };
    return !this.collide(i);
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
    const s = this._inColumnResize;
    s || (this._inColumnResize = !0);
    const i = this.nodes;
    return this.nodes = [], i.forEach((o, a, l) => {
      let u;
      o.locked || (o.autoPosition = !0, e === "list" && a && (u = l[a - 1])), this.addNode(o, !1, u);
    }), s || delete this._inColumnResize, r || this.batchUpdate(!1), this;
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
    return this.nodes = F.sort(this.nodes, e), this;
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
    e._id = e._id ?? Kt._idSeq++;
    const r = e.id;
    if (r) {
      let i = 1;
      for (; this.nodes.find((o) => o.id === e.id && o !== e); )
        e.id = r + "_" + i++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const s = { x: 0, y: 0, w: 1, h: 1 };
    return F.defaults(e, s), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, F.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = s.x, e.autoPosition = !0), isNaN(e.y) && (e.y = s.y, e.autoPosition = !0), isNaN(e.w) && (e.w = s.w), isNaN(e.h) && (e.h = s.h), this.nodeBoundFix(e, t), e;
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
    const r = e._orig || F.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const i = { ...e };
      i.autoPosition || i.x === void 0 ? (delete i.x, delete i.y) : i.x = Math.min(this.defaultColumn - 1, i.x), i.w = Math.min(this.defaultColumn, i.w || 1), this.cacheOneLayout(i, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), F.samePos(e, r) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !F.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = F.copyPos({}, e), delete e._dirty;
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
      !e._orig || F.samePos(e, e._orig) || (F.copyPos(e, e._orig), e._dirty = !0);
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
  findEmptyPosition(e, t = this.nodes, r = this.column, s) {
    const i = s ? s.y * r + (s.x + s.w) : 0;
    let o = !1;
    for (let a = i; !o; ++a) {
      const l = a % r, u = Math.floor(a / r);
      if (l + e.w > r)
        continue;
      const d = { x: l, y: u, w: e.w, h: e.h };
      t.find((f) => F.isIntercepted(d, f)) || ((e.x !== l || e.y !== u) && (e._dirty = !0), e.x = l, e.y = u, delete e.autoPosition, o = !0);
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
  addNode(e, t = !1, r) {
    const s = this.nodes.find((o) => o._id === e._id);
    if (s)
      return s;
    this._inColumnResize ? this.nodeBoundFix(e) : this.prepareNode(e), delete e._temporaryRemoved, delete e._removeDOM;
    let i;
    return e.autoPosition && this.findEmptyPosition(e, this.nodes, this.column, r) && (delete e.autoPosition, i = !0), this.nodes.push(e), t && this.addedNodes.push(e), i || this._fixCollisions(e), this.batchMode || this._packNodes()._notify(), e;
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
    return this.nodes.find((s) => s._id === e._id) ? (r && this.removedNodes.push(e), t && (e._removeDOM = !0), this.nodes = this.nodes.filter((s) => s._id !== e._id), e._isAboutToRemove || this._packNodes(), this._notify([e]), this) : this;
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
    e && this.nodes.forEach((s) => s._removeDOM = !0);
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
    const s = new Kt({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((o) => o._id === e._id ? (r = { ...o }, r) : { ...o })
    });
    if (!r)
      return !1;
    const i = s.moveNode(r, t) && s.getRow() <= Math.max(this.getRow(), this.maxRow);
    if (!i && !t.resizing && t.collide) {
      const o = t.collide.el.gridstackNode;
      if (this.swap(e, o))
        return this._notify(), !0;
    }
    return i ? (s.nodes.filter((o) => o._dirty).forEach((o) => {
      const a = this.nodes.find((l) => l._id === o._id);
      a && (F.copyPos(a, o), a._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new Kt({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((s) => ({ ...s }))
    }), r = { ...e };
    return this.cleanupNode(r), delete r.el, delete r._id, delete r.content, delete r.grid, t.addNode(r), t.getRow() <= this.maxRow ? (e._willFitPos = F.copyPos({}, r), !0) : !1;
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
    const s = e.w !== t.w || e.h !== t.h, i = F.copyPos({}, e, !0);
    if (F.copyPos(i, t), this.nodeBoundFix(i, s), F.copyPos(t, i), !t.forceCollide && F.samePos(e, t))
      return !1;
    const o = F.copyPos({}, e), a = this.collideAll(e, i, t.skip);
    let l = !0;
    if (a.length) {
      const u = e._moving && !t.nested;
      let d = u ? this.directionCollideCoverage(e, t, a) : a[0];
      if (u && d && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const f = F.areaIntercept(t.rect, d._rect), h = F.area(t.rect), m = F.area(d._rect);
        f / (h < m ? h : m) > 0.8 && (d.grid.makeSubGrid(d.el, void 0, e), d = void 0);
      }
      d ? l = !this._fixCollisions(e, i, d, t) : (l = !1, r && delete t.pack);
    }
    return l && !F.samePos(e, i) && (e._dirty = !0, F.copyPos(e, i)), t.pack && this._packNodes()._notify(), !F.samePos(e, o);
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
    const s = this._layouts?.length || 0;
    let i;
    s && (r ? r !== this.column && (i = this._layouts[r]) : this.column !== s - 1 && (i = this._layouts[s - 1]));
    const o = [];
    return this.sortNodes(), this.nodes.forEach((a) => {
      const l = i?.find((d) => d._id === a._id), u = { ...a, ...l || {} };
      F.removeInternalForSave(u, !e), t && t(a, u), o.push(u);
    }), o;
  }
  /** @internal called whenever a node is added or moved - updates the cached layouts */
  layoutsNodesChange(e) {
    return !this._layouts || this._inColumnResize ? this : (this._layouts.forEach((t, r) => {
      if (!t || r === this.column)
        return this;
      if (r < this.column)
        this._layouts[r] = void 0;
      else {
        const s = r / this.column;
        e.forEach((i) => {
          if (!i._orig)
            return;
          const o = t.find((a) => a._id === i._id);
          o && (o.y >= 0 && i.y !== i._orig.y && (o.y += i.y - i._orig.y), i.x !== i._orig.x && (o.x = Math.round(i.x * s)), i.w !== i._orig.w && (o.w = Math.round(i.w * s)));
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
    const s = r === "compact" || r === "list";
    s && this.sortNodes(1), t < e && this.cacheLayout(this.nodes, e), this.batchUpdate();
    let i = [], o = s ? this.nodes : F.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const a = this._layouts[t] || [], l = this._layouts.length - 1;
      !a.length && e !== l && this._layouts[l]?.length && (e = l, this._layouts[l].forEach((u) => {
        const d = o.find((f) => f._id === u._id);
        d && (!s && !u.autoPosition && (d.x = u.x ?? d.x, d.y = u.y ?? d.y), d.w = u.w ?? d.w, (u.x == null || u.y === void 0) && (d.autoPosition = !0));
      })), a.forEach((u) => {
        const d = o.findIndex((f) => f._id === u._id);
        if (d !== -1) {
          const f = o[d];
          if (s) {
            f.w = u.w;
            return;
          }
          (u.autoPosition || isNaN(u.x) || isNaN(u.y)) && this.findEmptyPosition(u, i), u.autoPosition || (f.x = u.x ?? f.x, f.y = u.y ?? f.y, f.w = u.w ?? f.w, i.push(f)), o.splice(d, 1);
        }
      });
    }
    if (s)
      this.compact(r, !1);
    else {
      if (o.length)
        if (typeof r == "function")
          r(t, e, i, o);
        else {
          const a = s || r === "none" ? 1 : t / e, l = r === "move" || r === "moveScale", u = r === "scale" || r === "moveScale";
          o.forEach((d) => {
            d.x = t === 1 ? 0 : l ? Math.round(d.x * a) : Math.min(d.x, t - 1), d.w = t === 1 || e === 1 ? 1 : u ? Math.round(d.w * a) || 1 : Math.min(d.w, t), i.push(d);
          }), o = [];
        }
      i = F.sort(i, -1), this._inColumnResize = !0, this.nodes = [], i.forEach((a) => {
        this.addNode(a, !1), delete a._orig;
      });
    }
    return this.nodes.forEach((a) => delete a._orig), this.batchUpdate(!1, !s), delete this._inColumnResize, this;
  }
  /**
   * call to cache the given layout internally to the given location so we can restore back when column changes size
   * @param nodes list of nodes
   * @param column corresponding column index to save it under
   * @param clear if true, will force other caches to be removed (default false)
   */
  cacheLayout(e, t, r = !1) {
    const s = [];
    return e.forEach((i, o) => {
      if (i._id === void 0) {
        const a = i.id ? this.nodes.find((l) => l.id === i.id) : void 0;
        i._id = a?._id ?? Kt._idSeq++;
      }
      s[o] = { x: i.x, y: i.y, w: i.w, _id: i._id };
    }), this._layouts = r ? [] : this._layouts || [], this._layouts[t] = s, this;
  }
  /**
   * call to cache the given node layout internally to the given location so we can restore back when column changes size
   * @param node single node to cache
   * @param column corresponding column index to save it under
   */
  cacheOneLayout(e, t) {
    e._id = e._id ?? Kt._idSeq++;
    const r = { x: e.x, y: e.y, w: e.w, _id: e._id };
    (e.autoPosition || e.x === void 0) && (delete r.x, delete r.y, e.autoPosition && (r.autoPosition = !0)), this._layouts = this._layouts || [], this._layouts[t] = this._layouts[t] || [];
    const s = this.findCacheLayout(e, t);
    return s === -1 ? this._layouts[t].push(r) : this._layouts[t][s] = r, this;
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
Kt._idSeq = 0;
const _t = {
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
class pe {
}
const Mt = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class Ht {
}
function qr(n, e) {
  n.touches.length > 1 || (n.cancelable && n.preventDefault(), F.simulateMouseEvent(n.changedTouches[0], e));
}
function Fl(n, e) {
  n.cancelable && n.preventDefault(), F.simulateMouseEvent(n, e);
}
function Ur(n) {
  Ht.touchHandled || (Ht.touchHandled = !0, qr(n, "mousedown"));
}
function Zr(n) {
  Ht.touchHandled && qr(n, "mousemove");
}
function Gr(n) {
  if (!Ht.touchHandled)
    return;
  Ht.pointerLeaveTimeout && (window.clearTimeout(Ht.pointerLeaveTimeout), delete Ht.pointerLeaveTimeout);
  const e = !!pe.dragElement;
  qr(n, "mouseup"), e || qr(n, "click"), Ht.touchHandled = !1;
}
function Qr(n) {
  n.pointerType !== "mouse" && n.target.releasePointerCapture(n.pointerId);
}
function Do(n) {
  pe.dragElement && n.pointerType !== "mouse" && Fl(n, "mouseenter");
}
function To(n) {
  pe.dragElement && n.pointerType !== "mouse" && (Ht.pointerLeaveTimeout = window.setTimeout(() => {
    delete Ht.pointerLeaveTimeout, Fl(n, "mouseleave");
  }, 10));
}
class ys {
  constructor(e, t, r) {
    this.host = e, this.dir = t, this.option = r, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${ys.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), Mt && (this.el.addEventListener("touchstart", Ur), this.el.addEventListener("pointerdown", Qr)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), Mt && (this.el.removeEventListener("touchstart", Ur), this.el.removeEventListener("pointerdown", Qr)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Mt && (this.el.addEventListener("touchmove", Zr), this.el.addEventListener("touchend", Gr)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Mt && (this.el.removeEventListener("touchmove", Zr), this.el.removeEventListener("touchend", Gr)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
ys.prefix = "ui-resizable-";
class Hi {
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
class lr extends Hi {
  // have to be public else complains for HTMLElementExtendOpt ?
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.rectScale = { x: 1, y: 1 }, this._ui = () => {
      const s = this.el.parentElement.getBoundingClientRect(), i = {
        width: this.originalRect.width,
        height: this.originalRect.height + this.scrolled,
        left: this.originalRect.left,
        top: this.originalRect.top - this.scrolled
      }, o = this.temporalRect || i;
      return {
        position: {
          left: (o.left - s.left) * this.rectScale.x,
          top: (o.top - s.top) * this.rectScale.y
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
    const t = e.handles && e.handles !== this.option.handles, r = e.autoHide && e.autoHide !== this.option.autoHide;
    return Object.keys(e).forEach((s) => this.option[s] = e[s]), t && (this._removeHandlers(), this._setupHandlers()), r && this._setupAutoHide(this.option.autoHide), this;
  }
  /** @internal turns auto hide on/off */
  _setupAutoHide(e) {
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), pe.overResizeElement === this && delete pe.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    pe.overResizeElement || pe.dragElement || (pe.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    pe.overResizeElement === this && (delete pe.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new ys(this.el, e, {
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
    this.sizeToContent = F.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = F.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = F.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const r = F.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(r, this._ui()), this.triggerEvent("resize", r), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = F.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = lr._originStyleProp.map((r) => this.el.style[r]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = F.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return lr._originStyleProp.forEach((e, t) => {
      this.el.style[e] = this.elOriginStyleVal[t] || null;
    }), this.el.parentElement.style.position = this.parentOriginStylePosition || null, this;
  }
  /** @internal */
  _getChange(e, t) {
    const r = this.startEvent, s = {
      width: this.originalRect.width,
      height: this.originalRect.height + this.scrolled,
      left: this.originalRect.left,
      top: this.originalRect.top - this.scrolled
    }, i = e.clientX - r.clientX, o = this.sizeToContent ? 0 : e.clientY - r.clientY;
    let a, l;
    t.indexOf("e") > -1 ? s.width += i : t.indexOf("w") > -1 && (s.width -= i, s.left += i, a = !0), t.indexOf("s") > -1 ? s.height += o : t.indexOf("n") > -1 && (s.height -= o, s.top += o, l = !0);
    const u = this._constrainSize(s.width, s.height, a, l);
    return Math.round(s.width) !== Math.round(u.width) && (t.indexOf("w") > -1 && (s.left += s.width - u.width), s.width = u.width), Math.round(s.height) !== Math.round(u.height) && (t.indexOf("n") > -1 && (s.top += s.height - u.height), s.height = u.height), s;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, r, s) {
    const i = this.option, o = (r ? i.maxWidthMoveLeft : i.maxWidth) || Number.MAX_SAFE_INTEGER, a = i.minWidth / this.rectScale.x || e, l = (s ? i.maxHeightMoveUp : i.maxHeight) || Number.MAX_SAFE_INTEGER, u = i.minHeight / this.rectScale.y || t, d = Math.min(o, Math.max(a, e)), f = Math.min(l, Math.max(u, t));
    return { width: d, height: f };
  }
  /** @internal */
  _applyChange() {
    let e = { left: 0, top: 0, width: 0, height: 0 };
    if (this.el.style.position === "absolute") {
      const t = this.el.parentElement, { left: r, top: s } = t.getBoundingClientRect();
      e = { left: r, top: s, width: 0, height: 0 };
    }
    return this.temporalRect ? (Object.keys(this.temporalRect).forEach((t) => {
      const r = this.temporalRect[t], s = t === "width" || t === "left" ? this.rectScale.x : t === "height" || t === "top" ? this.rectScale.y : 1;
      this.el.style[t] = (r - e[t]) * s + "px";
    }), this) : this;
  }
  /** @internal */
  _removeHandlers() {
    return this.handlers.forEach((e) => e.destroy()), delete this.handlers, this;
  }
}
lr._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const Af = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class cr extends Hi {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.dragTransform = {
      xScale: 1,
      yScale: 1,
      xOffset: 0,
      yOffset: 0
    };
    const r = t?.handle?.substring(1), s = e.gridstackNode;
    this.dragEls = !r || e.classList.contains(r) ? [e] : s?.subGrid ? [e.querySelector(t.handle) || e] : Array.from(e.querySelectorAll(t.handle)), this.dragEls.length === 0 && (this.dragEls = [e]), this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this.enable();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.dragEls.forEach((e) => {
      e.addEventListener("mousedown", this._mouseDown), Mt && (e.addEventListener("touchstart", Ur), e.addEventListener("pointerdown", Qr));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), Mt && (t.removeEventListener("touchstart", Ur), t.removeEventListener("pointerdown", Qr));
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
    if (!pe.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(Af) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete pe.dragElement, delete pe.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Mt && (e.currentTarget.addEventListener("touchmove", Zr), e.currentTarget.addEventListener("touchend", Gr)), e.preventDefault(), document.activeElement && document.activeElement.blur(), pe.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = F.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), pe.pauseDrag) {
        const r = Number.isInteger(pe.pauseDrag) ? pe.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), r);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, pe.dragElement = this;
      const r = this.el.gridstackNode?.grid;
      r ? pe.dropElement = r.el.ddElement.ddDroppable : delete pe.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = F.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const s = F.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(s, this.ui()), this.triggerEvent("dragstart", s), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Mt && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", Zr, !0), e.currentTarget.removeEventListener("touchend", Gr, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), pe.dropElement?.el === this.el.parentElement && delete pe.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = F.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), pe.dropElement && pe.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete pe.dragElement, delete pe.dropElement, delete pe.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, r = t?.grid || pe.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), r?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && r && (e.key === "r" || e.key === "R")) {
      if (!F.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, r.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", F.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = F.cloneNode(this.el)), e.parentElement || F.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = cr.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", cr.originStyleProp.forEach((s) => t.style[s] = this.dragElementOriginStyle[s] || null), setTimeout(() => t.style.transition = r, 50);
    }
    return delete this.dragElementOriginStyle, this;
  }
  /** @internal updates the top/left position to follow the mouse */
  _dragFollow(e) {
    const t = { left: 0, top: 0 }, r = this.helper.style, s = this.dragOffset;
    r.left = (e.clientX + s.offsetLeft - t.left) * this.dragTransform.xScale + "px", r.top = (e.clientY + s.offsetTop - t.top) * this.dragTransform.yScale + "px";
  }
  /** @internal */
  _setupHelperContainmentStyle() {
    return this.helperContainment = this.helper.parentElement, this.helper.style.position !== "fixed" && (this.parentOriginStylePosition = this.helperContainment.style.position, getComputedStyle(this.helperContainment).position.match(/static/) && (this.helperContainment.style.position = "relative")), this;
  }
  /** @internal */
  _getDragOffset(e, t, r) {
    let s = 0, i = 0;
    r && (s = this.dragTransform.xOffset, i = this.dragTransform.yOffset);
    const o = t.getBoundingClientRect();
    return {
      left: o.left,
      top: o.top,
      offsetLeft: -e.clientX + o.left - s,
      offsetTop: -e.clientY + o.top - i,
      width: o.width * this.dragTransform.xScale,
      height: o.height * this.dragTransform.yScale
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
cr.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Ff extends Hi {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), Mt && (this.el.addEventListener("pointerenter", Do), this.el.addEventListener("pointerleave", To)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), Mt && (this.el.removeEventListener("pointerenter", Do), this.el.removeEventListener("pointerleave", To)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!pe.dragElement || !this._canDrop(pe.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), pe.dropElement && pe.dropElement !== this && pe.dropElement._mouseLeave(e, !0), pe.dropElement = this;
    const t = F.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(pe.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!pe.dragElement || pe.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const r = F.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(r, this._ui(pe.dragElement)), this.triggerEvent("dropout", r), pe.dropElement === this && (delete pe.dropElement, !t)) {
      let s, i = this.el.parentElement;
      for (; !s && i; )
        s = i.ddElement?.ddDroppable, i = i.parentElement;
      s && s._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = F.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(pe.dragElement)), this.triggerEvent("drop", t);
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
class Wi {
  static init(e) {
    return e.ddElement || (e.ddElement = new Wi(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new cr(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new lr(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Ff(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Of {
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
  resizable(e, t, r, s) {
    return this._getDDElements(e, t).forEach((i) => {
      if (t === "disable" || t === "enable")
        i.ddResizable && i.ddResizable[t]();
      else if (t === "destroy")
        i.ddResizable && i.cleanResizable();
      else if (t === "option")
        i.setupResizable({ [r]: s });
      else {
        const a = i.el.gridstackNode.grid;
        let l = i.el.getAttribute("gs-resize-handles") || a.opts.resizable.handles || "e,s,se";
        l === "all" && (l = "n,e,s,w,se,sw,ne,nw");
        const u = !a.opts.alwaysShowResizeHandle;
        i.setupResizable({
          ...a.opts.resizable,
          handles: l,
          autoHide: u,
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
  draggable(e, t, r, s) {
    return this._getDDElements(e, t).forEach((i) => {
      if (t === "disable" || t === "enable")
        i.ddDraggable && i.ddDraggable[t]();
      else if (t === "destroy")
        i.ddDraggable && i.cleanDraggable();
      else if (t === "option")
        i.setupDraggable({ [r]: s });
      else {
        const o = i.el.gridstackNode.grid;
        i.setupDraggable({
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
    return this._getDDElements(e).forEach((r) => r.setupDraggable(t)), this;
  }
  droppable(e, t, r, s) {
    return typeof t.accept == "function" && !t._accept && (t._accept = t.accept, t.accept = (i) => t._accept(i)), this._getDDElements(e, t).forEach((i) => {
      t === "disable" || t === "enable" ? i.ddDroppable && i.ddDroppable[t]() : t === "destroy" ? i.ddDroppable && i.cleanDroppable() : t === "option" ? i.setupDroppable({ [r]: s }) : i.setupDroppable(t);
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
    return this._getDDElements(e).forEach((s) => s.on(t, (i) => {
      r(i, pe.dragElement ? pe.dragElement.el : i.target, pe.dragElement ? pe.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((r) => r.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const r = e.gridstack || t !== "destroy" && t !== "disable", s = F.getElements(e);
    return s.length ? s.map((o) => o.ddElement || (r ? Wi.init(o) : null)).filter((o) => o) : [];
  }
}
const st = new Of();
class ue {
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
    const r = ue.getGridElement(t);
    return r ? (r.gridstack || (r.gridstack = new ue(r, F.cloneDeep(e))), r.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (ue.getGridElements(t).forEach((s) => {
      s.gridstack || (s.gridstack = new ue(s, F.cloneDeep(e))), r.push(s.gridstack);
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
      const o = r.gridstack;
      return t && (o.opts = { ...o.opts, ...t }), t.children !== void 0 && o.load(t.children), o;
    }
    return (!e.classList.contains("grid-stack") || ue.addRemoveCB) && (ue.addRemoveCB ? r = ue.addRemoveCB(e, t, !0, !0) : r = F.createDiv(["grid-stack", t.class], e)), ue.init(t, r);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    ue.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = F.createDiv([this.opts.placeholderClass, _t.itemClass, this.opts.itemClass]);
      const e = F.createDiv(["placeholder-content"], this._placeholder);
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
    const r = F.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const s = t.columnOpts;
    if (s) {
      const u = s.breakpoints;
      !s.columnWidth && !u?.length ? delete t.columnOpts : (s.columnMax = s.columnMax || 12, u?.length > 1 && u.sort((d, f) => (f.w || 0) - (d.w || 0)));
    }
    const i = {
      ...F.cloneDeep(_t),
      column: F.toNumber(e.getAttribute("gs-column")) || _t.column,
      minRow: r || F.toNumber(e.getAttribute("gs-min-row")) || _t.minRow,
      maxRow: r || F.toNumber(e.getAttribute("gs-max-row")) || _t.maxRow,
      staticGrid: F.toBool(e.getAttribute("gs-static")) || _t.staticGrid,
      sizeToContent: F.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || _t.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || _t.removableOptions.accept,
        decline: _t.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (i.animate = F.toBool(e.getAttribute("gs-animate"))), t = F.defaults(t, i), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const a = this.el.closest("." + _t.itemClass)?.gridstackNode;
    if (a && (a.subGrid = this, this.parentGridNode = a, this.el.classList.add("grid-stack-nested"), a.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== _t.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const u = t.cellHeight;
      delete t.cellHeight, this.cellHeight(u);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = Mt), this._setStaticClass();
    const l = t.engineClass || ue.engineClass || Kt;
    if (this.engine = new l({
      column: this.getColumn(),
      float: t.float,
      maxRow: t.maxRow,
      onChange: (u) => {
        u.forEach((d) => {
          const f = d.el;
          f && (d._removeDOM ? (f && f.remove(), delete d._removeDOM) : this._writePosAttr(f, d));
        }), this._updateContainerHeight();
      }
    }), t.auto && (this.batchUpdate(), this.engine._loading = !0, this.getGridItems().forEach((u) => this._prepareElement(u)), delete this.engine._loading, this.batchUpdate(!1)), t.children) {
      const u = t.children;
      delete t.children, u.length && this.load(u);
    }
    this.setAnimation(), t.subGridDynamic && !pe.pauseDrag && (pe.pauseDrag = !0), t.draggable?.pause !== void 0 && (pe.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (r.grid = this, r.el ? t = r.el : ue.addRemoveCB ? t = ue.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(r), !t)
      return;
    if (r = t.gridstackNode, r && t.parentElement === this.el && this.engine.nodes.find((i) => i._id === r._id))
      return t;
    const s = this._readAttr(t);
    return F.defaults(e, s), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = F.createDiv(["grid-stack-item", this.opts.itemClass]), r = F.createDiv(["grid-stack-item-content"], t);
    return F.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([s]) => {
      s.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, ue.renderCB(r, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : ue.renderCB(r, e), t;
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
  makeSubGrid(e, t, r, s = !0) {
    let i = e.gridstackNode;
    if (i || (i = this.makeWidget(e).gridstackNode), i.subGrid?.el)
      return i.subGrid;
    let o, a = this;
    for (; a && !o; )
      o = a.opts?.subGridOpts, a = a.parentGridNode?.grid;
    t = F.cloneDeep({
      // by default sub-grid inherit from us | parent, other than id, children, etc...
      ...this.opts,
      id: void 0,
      children: void 0,
      column: "auto",
      columnOpts: void 0,
      layout: "list",
      subGridOpts: void 0,
      ...o || {},
      ...t || i.subGridOpts || {}
    }), i.subGridOpts = t;
    let l;
    t.column === "auto" && (l = !0, t.column = Math.max(i.w || 1, r?.w || 1), delete t.columnOpts);
    let u = i.el.querySelector(".grid-stack-item-content"), d, f;
    if (s && (this._removeDD(i.el), f = { ...i, x: 0, y: 0 }, F.removeInternalForSave(f), delete f.subGridOpts, i.content && (f.content = i.content, delete i.content), ue.addRemoveCB ? d = ue.addRemoveCB(this.el, f, !0, !1) : (d = F.createDiv(["grid-stack-item"]), d.appendChild(u), u = F.createDiv(["grid-stack-item-content"], i.el)), this.prepareDragDrop(i.el)), r) {
      const m = l ? t.column : i.w, g = i.h + r.h, y = i.el.style;
      y.transition = "none", this.update(i.el, { w: m, h: g }), setTimeout(() => y.transition = null);
    }
    const h = i.subGrid = ue.addGrid(u, t);
    return r?._moving && (h._isTemp = !0), l && (h._autoColumn = !0), s && h.makeWidget(d, f), r && (r._moving ? window.setTimeout(() => F.simulateMouseEvent(r._event, "mouseenter", h.el), 0) : h.makeWidget(i.el, i)), this.resizeToContentCheck(!1, i), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((r) => {
      r.x += this.parentGridNode.x, r.y += this.parentGridNode.y, t.makeWidget(r.el, r);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => F.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, r = ue.saveCB, s) {
    const i = this.engine.save(e, r, s);
    if (i.forEach((o) => {
      if (e && o.el && !o.subGrid && !r) {
        const a = o.el.querySelector(".grid-stack-item-content");
        o.content = a?.innerHTML, o.content || delete o.content;
      } else if (!e && !r && delete o.content, o.subGrid?.el) {
        const a = o.w || o.subGrid.getColumn(), l = o.subGrid.save(e, t, r, a);
        o.subGridOpts = t ? l : { children: l }, delete o.subGrid;
      }
      delete o.el;
    }), t) {
      const o = F.cloneDeep(this.opts);
      o.marginBottom === o.marginTop && o.marginRight === o.marginLeft && o.marginTop === o.marginRight && (o.margin = o.marginTop, delete o.marginTop, delete o.marginRight, delete o.marginBottom, delete o.marginLeft), o.rtl === (this.el.style.direction === "rtl") && (o.rtl = "auto"), this._isAutoCellHeight && (o.cellHeight = "auto"), this._autoColumn && (o.column = "auto");
      const a = o._alwaysShowResizeHandle;
      return delete o._alwaysShowResizeHandle, a !== void 0 ? o.alwaysShowResizeHandle = a : delete o.alwaysShowResizeHandle, F.removeInternalAndSame(o, _t), o.children = i, o;
    }
    return i;
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
  load(e, t = ue.addRemoveCB || !0) {
    e = F.cloneDeep(e);
    const r = this.getColumn();
    e.forEach((d) => {
      d.w = d.w || d.minW || 1, d.h = d.h || d.minH || 1;
    }), e = F.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let s = 0;
    e.forEach((d) => {
      s = Math.max(s, (d.x || 0) + d.w);
    }), s > this.engine.defaultColumn && (this.engine.defaultColumn = s), s > r && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(s, r, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, s, !0));
    const i = ue.addRemoveCB;
    typeof t == "function" && (ue.addRemoveCB = t);
    const o = [];
    this.batchUpdate();
    const a = !this.engine.nodes.length, l = a && this.opts.animate;
    l && this.setAnimation(!1), !a && t && [...this.engine.nodes].forEach((f) => {
      if (!f.id)
        return;
      F.find(e, f.id) || (ue.addRemoveCB && ue.addRemoveCB(this.el, f, !1, !1), o.push(f), this.removeWidget(f.el, !0, !1));
    }), this.engine._loading = !0;
    const u = [];
    return this.engine.nodes = this.engine.nodes.filter((d) => F.find(e, d.id) ? (u.push(d), !1) : !0), e.forEach((d) => {
      const f = F.find(u, d.id);
      if (f) {
        if (F.shouldSizeToContent(f) && (d.h = f.h), this.engine.nodeBoundFix(d), (d.autoPosition || d.x === void 0 || d.y === void 0) && (d.w = d.w || f.w, d.h = d.h || f.h, this.engine.findEmptyPosition(d)), this.engine.nodes.push(f), F.samePos(f, d) && this.engine.nodes.length > 1 && (this.moveNode(f, { ...d, forceCollide: !0 }), F.copyPos(d, f)), this.update(f.el, d), d.subGridOpts?.children) {
          const h = f.el.querySelector(".grid-stack");
          h && h.gridstack && h.gridstack.load(d.subGridOpts.children);
        }
      } else t && this.addWidget(d);
    }), delete this.engine._loading, this.engine.removedNodes = o, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, i ? ue.addRemoveCB = i : delete ue.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const s = F.toNumber(t.getAttribute("gs-h")) || 1;
      return Math.round(t.offsetHeight / s);
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
    const t = F.parseHeight(e);
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
    const s = this._widthOrContainer(!0);
    if (e.columnWidth)
      r = Math.min(Math.round(s / e.columnWidth) || 1, e.columnMax);
    else {
      r = e.columnMax;
      let i = 0;
      for (; i < e.breakpoints.length && s <= e.breakpoints[i].w; )
        r = e.breakpoints[i++].c || t;
    }
    if (r !== t) {
      const i = e.breakpoints?.find((o) => o.c === r);
      return this.column(r, i?.layout || e.layout), !0;
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
    let s;
    t ? s = { top: r.top + document.documentElement.scrollTop, left: r.left } : s = { top: this.el.offsetTop, left: this.el.offsetLeft };
    const i = e.left - s.left, o = e.top - s.top, a = r.width / this.getColumn(), l = r.height / parseInt(this.el.getAttribute("gs-current-row"));
    return { x: Math.floor(i / a), y: Math.floor(o / l) };
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
  isAreaEmpty(e, t, r, s) {
    return this.engine.isAreaEmpty(e, t, r, s);
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
    const r = ue.getElement(e);
    if (!r || r.gridstackNode)
      return r;
    r.parentElement || this.el.appendChild(r), this._prepareElement(r, !0, t);
    const s = r.gridstackNode;
    this._updateContainerHeight(), s.subGridOpts && this.makeSubGrid(r, s.subGridOpts, void 0, !1);
    let i;
    return this.opts.column === 1 && !this._ignoreLayoutsNodeChange && (i = this._ignoreLayoutsNodeChange = !0), this._triggerAddEvent(), this._triggerChangeEvent(), i && delete this._ignoreLayoutsNodeChange, r;
  }
  on(e, t) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((s) => this.on(s, t)), this) : (e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable" ? (e === "enable" || e === "disable" ? this._gsEventHandler[e] = (s) => t(s) : this._gsEventHandler[e] = (s) => {
      s.detail && t(s, s.detail);
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
    return e ? (ue.getElements(e).forEach((s) => {
      if (s.parentElement && s.parentElement !== this.el)
        return;
      let i = s.gridstackNode;
      i || (i = this.engine.nodes.find((o) => s === o.el)), i && (t && ue.addRemoveCB && ue.addRemoveCB(this.el, i, !1, !1), delete s.gridstackNode, this._removeDD(s), this.engine.removeNode(i, t, r), t && s.parentElement && s.remove());
    }), r && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((r) => {
      e && ue.addRemoveCB && ue.addRemoveCB(this.el, r, !1, !1), delete r.el.gridstackNode, this.opts.staticGrid || this._removeDD(r.el);
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
    return !!this.opts.staticGrid === e ? this : (e ? this.opts.staticGrid = !0 : delete this.opts.staticGrid, this._setupRemoveDrop(), this._setupAcceptWidget(), this.engine.nodes.forEach((s) => {
      this.prepareDragDrop(s.el), s.subGrid && r && s.subGrid.setStatic(e, t, r);
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
    return ue.getElements(e).forEach((r) => {
      const s = r?.gridstackNode;
      if (!s)
        return;
      const i = { ...F.copyPos({}, s), ...F.cloneDeep(t) };
      this.engine.nodeBoundFix(i), delete i.autoPosition;
      const o = ["x", "y", "w", "h"];
      let a;
      if (o.some((d) => i[d] !== void 0 && i[d] !== s[d]) && (a = {}, o.forEach((d) => {
        a[d] = i[d] !== void 0 ? i[d] : s[d], delete i[d];
      })), !a && (i.minW || i.minH || i.maxW || i.maxH) && (a = {}), i.content !== void 0) {
        const d = r.querySelector(".grid-stack-item-content");
        d && d.textContent !== i.content && (s.content = i.content, ue.renderCB(d, i), s.subGrid?.el && (d.appendChild(s.subGrid.el), s.subGrid._updateContainerHeight())), delete i.content;
      }
      let l = !1, u = !1;
      for (const d in i)
        d[0] !== "_" && s[d] !== i[d] && (s[d] = i[d], l = !0, u = u || !this.opts.staticGrid && (d === "noResize" || d === "noMove" || d === "locked"));
      if (F.sanitizeMinMax(s), a) {
        const d = a.w !== void 0 && a.w !== s.w;
        this.moveNode(s, a), d && s.subGrid ? s.subGrid.onResize(this.hasAnimationCSS() ? s.w : void 0) : this.resizeToContentCheck(d, s), delete s._orig;
      }
      (a || l) && this._writeAttr(r, s), u && this.prepareDragDrop(s.el), ue.updateCB && ue.updateCB(s);
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
    const s = r.getCellHeight(!0);
    if (!s)
      return;
    let i = t.h ? t.h * s : e.clientHeight, o;
    if (t.resizeToContentParent && (o = e.querySelector(t.resizeToContentParent)), o || (o = e.querySelector(ue.resizeToContentParent)), !o)
      return;
    const a = e.clientHeight - o.clientHeight, l = t.h ? t.h * s - a : o.clientHeight;
    let u;
    if (t.subGrid) {
      u = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const h = t.subGrid.el.getBoundingClientRect(), m = e.getBoundingClientRect();
      u += h.top - m.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const h = o.firstElementChild;
        if (!h) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${ue.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        u = h.getBoundingClientRect().height || l;
      }
    }
    if (l === u)
      return;
    i += u - l;
    let d = Math.ceil(i / s);
    const f = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    f && d > f && (d = f, e.classList.add("size-to-content-max")), t.minH && d < t.minH ? d = t.minH : t.maxH && d > t.maxH && (d = t.maxH), d !== t.h && (r._ignoreLayoutsNodeChange = !0, r.moveNode(t, { h: d }), delete r._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    ue.resizeToContentCB ? ue.resizeToContentCB(e) : this.resizeToContent(e);
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
    return ue.getElements(e).forEach((r) => {
      const s = r.gridstackNode;
      if (!F.canBeRotated(s))
        return;
      const i = { w: s.h, h: s.w, minH: s.minW, minW: s.minH, maxH: s.maxW, maxW: s.maxH };
      if (t) {
        const a = t.left > 0 ? Math.floor(t.left / this.cellWidth()) : 0, l = t.top > 0 ? Math.floor(t.top / this.opts.cellHeight) : 0;
        i.x = s.x + a - (s.h - (l + 1)), i.y = s.y + l - a;
      }
      Object.keys(i).forEach((a) => {
        i[a] === void 0 && delete i[a];
      });
      const o = s._orig;
      this.update(r, i), s._orig = o;
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
      const r = F.parseHeight(e);
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
      let r = 0, s = { x: t[r++], y: t[r++], w: t[r++], h: t[r++], autoPosition: t[r++] };
      return this.willItFit(s);
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
    let s = this;
    for (; s.parentGridNode; )
      s = s.parentGridNode.grid;
    return s.el.dispatchEvent(r), this;
  }
  /** @internal */
  _updateContainerHeight() {
    if (!this.engine || this.engine.batchMode)
      return this;
    const e = this.parentGridNode;
    let t = this.getRow() + this._extraDragRow;
    const r = this.opts.cellHeight, s = this.opts.cellHeightUnit;
    if (!r)
      return this;
    if (!e && !this.opts.minRow) {
      const i = F.parseHeight(getComputedStyle(this.el).minHeight);
      if (i.h > 0 && i.unit === s) {
        const o = Math.floor(i.h / r);
        t < o && (t = o);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * r + s), e && F.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, r) {
    r = r || this._readAttr(e), e.gridstackNode = r, r.el = e, r.grid = this, r = this.engine.addNode(r, t), this._writeAttr(e, r), e.classList.add(_t.itemClass, this.opts.itemClass);
    const s = F.shouldSizeToContent(r);
    return s ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), s && this.resizeToContentCheck(!1, r), F.lazyLoad(r) || this.prepareDragDrop(r.el), this;
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
    for (const s in r)
      t[s] ? e.setAttribute(r[s], String(t[s])) : e.removeAttribute(r[s]);
    return this;
  }
  /** @internal call to read any default attributes from element */
  _readAttr(e, t = !0) {
    const r = {};
    r.x = F.toNumber(e.getAttribute("gs-x")), r.y = F.toNumber(e.getAttribute("gs-y")), r.w = F.toNumber(e.getAttribute("gs-w")), r.h = F.toNumber(e.getAttribute("gs-h")), r.autoPosition = F.toBool(e.getAttribute("gs-auto-position")), r.noResize = F.toBool(e.getAttribute("gs-no-resize")), r.noMove = F.toBool(e.getAttribute("gs-no-move")), r.locked = F.toBool(e.getAttribute("gs-locked"));
    const s = e.getAttribute("gs-size-to-content");
    s && (s === "true" || s === "false" ? r.sizeToContent = F.toBool(s) : r.sizeToContent = parseInt(s, 10)), r.id = e.getAttribute("gs-id"), r.maxW = F.toNumber(e.getAttribute("gs-max-w")), r.minW = F.toNumber(e.getAttribute("gs-min-w")), r.maxH = F.toNumber(e.getAttribute("gs-max-h")), r.minH = F.toNumber(e.getAttribute("gs-min-h")), t && (r.w === 1 && e.removeAttribute("gs-w"), r.h === 1 && e.removeAttribute("gs-h"), r.maxW && e.removeAttribute("gs-max-w"), r.minW && e.removeAttribute("gs-min-w"), r.maxH && e.removeAttribute("gs-max-h"), r.minH && e.removeAttribute("gs-min-h"));
    for (const i in r) {
      if (!r.hasOwnProperty(i))
        return;
      !r[i] && r[i] !== 0 && i !== "sizeToContent" && delete r[i];
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
        F.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((r) => F.shouldSizeToContent(r))) {
        const r = [...this.engine.nodes];
        this.batchUpdate(), r.forEach((s) => {
          F.shouldSizeToContent(s) && this.resizeToContentCBCheck(s.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((r) => r.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = F.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return F.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return F.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return ue.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return F.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, r = [];
    typeof this.opts.margin == "string" && (r = this.opts.margin.split(" ")), r.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = r[0], this.opts.marginLeft = this.opts.marginRight = r[1]) : r.length === 4 ? (this.opts.marginTop = r[0], this.opts.marginRight = r[1], this.opts.marginBottom = r[2], this.opts.marginLeft = r[3]) : (e = F.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((o) => {
      this.opts[o] === void 0 ? this.opts[o] = t : (e = F.parseHeight(this.opts[o]), this.opts[o] = e.h, delete this.opts.margin);
    }), this.opts.marginUnit = e.unit, this.opts.marginTop === this.opts.marginBottom && this.opts.marginLeft === this.opts.marginRight && this.opts.marginTop === this.opts.marginRight && (this.opts.margin = this.opts.marginTop);
    const i = this.el.style;
    return i.setProperty("--gs-item-margin-top", `${this.opts.marginTop}${this.opts.marginUnit}`), i.setProperty("--gs-item-margin-bottom", `${this.opts.marginBottom}${this.opts.marginUnit}`), i.setProperty("--gs-item-margin-right", `${this.opts.marginRight}${this.opts.marginUnit}`), i.setProperty("--gs-item-margin-left", `${this.opts.marginLeft}${this.opts.marginUnit}`), this;
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
    return st;
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
  static setupDragIn(e, t, r, s = document) {
    t?.pause !== void 0 && (pe.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? F.getElements(e, s) : e).forEach((o, a) => {
      st.isDraggable(o) || st.dragIn(o, t), r?.[a] && (o.gridstackNode = r[a]);
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
    return this.opts.staticGrid ? this : (ue.getElements(e).forEach((r) => {
      const s = r.gridstackNode;
      s && (t ? delete s.noMove : s.noMove = !0, this.prepareDragDrop(s.el));
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
    return this.opts.staticGrid ? this : (ue.getElements(e).forEach((r) => {
      const s = r.gridstackNode;
      s && (t ? delete s.noResize : s.noResize = !0, this.prepareDragDrop(s.el));
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && ue._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return st.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return st.droppable(this.el, "destroy"), this;
    let e, t;
    const r = (s, i, o) => {
      o = o || i;
      const a = o.gridstackNode;
      if (!a)
        return;
      if (!a.grid?.el) {
        o.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const h = o.getBoundingClientRect();
        o.style.left = h.x + (this.dragTransform.xScale - 1) * (s.clientX - h.x) / this.dragTransform.xScale + "px", o.style.top = h.y + (this.dragTransform.yScale - 1) * (s.clientY - h.y) / this.dragTransform.yScale + "px", o.style.transformOrigin = "0px 0px";
      }
      let { top: l, left: u } = o.getBoundingClientRect();
      const d = this.el.getBoundingClientRect();
      u -= d.left, l -= d.top;
      const f = {
        position: {
          top: l * this.dragTransform.xScale,
          left: u * this.dragTransform.yScale
        }
      };
      if (a._temporaryRemoved) {
        if (a.x = Math.max(0, Math.round(u / t)), a.y = Math.max(0, Math.round(l / e)), delete a.autoPosition, this.engine.nodeBoundFix(a), !this.engine.willItFit(a)) {
          if (a.autoPosition = !0, !this.engine.willItFit(a)) {
            st.off(i, "drag");
            return;
          }
          a._willFitPos && (F.copyPos(a, a._willFitPos), delete a._willFitPos);
        }
        this._onStartMoving(o, s, f, a, t, e);
      } else
        this._dragOrResize(o, s, f, a, t, e);
    };
    return st.droppable(this.el, {
      accept: (s) => {
        const i = s.gridstackNode || this._readAttr(s, !1);
        if (i?.grid === this)
          return !0;
        if (!this.opts.acceptWidgets)
          return !1;
        let o = !0;
        if (typeof this.opts.acceptWidgets == "function")
          o = this.opts.acceptWidgets(s);
        else {
          const a = this.opts.acceptWidgets === !0 ? ".grid-stack-item" : this.opts.acceptWidgets;
          o = s.matches(a);
        }
        if (o && i && this.opts.maxRow) {
          const a = { w: i.w, h: i.h, minW: i.minW, minH: i.minH };
          o = this.engine.willItFit(a);
        }
        return o;
      }
    }).on(this.el, "dropover", (s, i, o) => {
      let a = o?.gridstackNode || i.gridstackNode;
      if (a?.grid === this && !a._temporaryRemoved)
        return !1;
      if (a?._sidebarOrig && (a.w = a._sidebarOrig.w, a.h = a._sidebarOrig.h), a?.grid && a.grid !== this && !a._temporaryRemoved && a.grid._leave(i, o), o = o || i, t = this.cellWidth(), e = this.getCellHeight(!0), !a) {
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
      const l = a.w || Math.round(o.offsetWidth / t) || 1, u = a.h || Math.round(o.offsetHeight / e) || 1;
      return a.grid && a.grid !== this ? (i._gridstackNodeOrig || (i._gridstackNodeOrig = a), i.gridstackNode = a = { ...a, w: l, h: u, grid: this }, delete a.x, delete a.y, this.engine.cleanupNode(a).nodeBoundFix(a), a._initDD = a._isExternal = // DOM needs to be re-parented on a drop
      a._temporaryRemoved = !0) : (a.w = l, a.h = u, a._temporaryRemoved = !0), ue._itemRemoving(a.el, !1), st.on(i, "drag", r), r(s, i, o), !1;
    }).on(this.el, "dropout", (s, i, o) => {
      const a = o?.gridstackNode || i.gridstackNode;
      return a && (!a.grid || a.grid === this) && (this._leave(i, o), this._isTemp && this.removeAsSubGrid(a)), !1;
    }).on(this.el, "drop", (s, i, o) => {
      const a = o?.gridstackNode || i.gridstackNode;
      if (a?.grid === this && !a._isExternal)
        return !1;
      const l = !!this.placeholder.parentElement, u = i !== o;
      this.placeholder.remove(), delete this.placeholder.gridstackNode, l && this.opts.animate && (this.setAnimation(!1), this.setAnimation(!0, !0));
      const d = i._gridstackNodeOrig;
      if (delete i._gridstackNodeOrig, l && d?.grid && d.grid !== this) {
        const h = d.grid;
        h.engine.removeNodeFromLayoutCache(d), h.engine.removedNodes.push(d), h._triggerRemoveEvent()._triggerChangeEvent(), h.parentGridNode && !h.engine.nodes.length && h.opts.subGridDynamic && h.removeAsSubGrid();
      }
      if (!a || (l && (this.engine.cleanupNode(a), a.grid = this), delete a.grid?._isTemp, st.off(i, "drag"), o !== i ? (o.remove(), i = o) : i.remove(), this._removeDD(i), !l))
        return !1;
      const f = a.subGrid?.el?.gridstack;
      return F.copyPos(a, this._readAttr(this.placeholder)), F.removePositioningStyles(i), u && (a.content || a.subGridOpts || ue.addRemoveCB) ? (delete a.el, i = this.addWidget(a)) : (this._prepareElement(i, !0, a), this.el.appendChild(i), this.resizeToContentCheck(!1, a), f && (f.parentGridNode = a), this._updateContainerHeight()), this.engine.addedNodes.push(a), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...s, type: "dropped" }, d && d.grid ? d : void 0, a), !1;
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
    return e ? (!this.opts.staticGrid && !st.isDroppable(e) && st.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, r) => ue._itemRemoving(r, !0)).on(e, "dropout", (t, r) => ue._itemRemoving(r, !1)), this) : this;
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
    const s = r.noMove || this.opts.disableDrag, i = r.noResize || this.opts.disableResize, o = this.opts.staticGrid || s && i;
    if ((t || o) && (r._initDD && (this._removeDD(e), delete r._initDD), o && e.classList.add("ui-draggable-disabled", "ui-resizable-disabled"), !t))
      return this;
    if (!r._initDD) {
      let a, l;
      const u = (h, m) => {
        this.triggerEvent(h, h.target), a = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, h, m, r, a, l);
      }, d = (h, m) => {
        this._dragOrResize(e, h, m, r, a, l);
      }, f = (h) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete r._moving, delete r._resizing, delete r._event, delete r._lastTried;
        const m = r.w !== r._orig.w, g = h.target;
        if (!(!g.gridstackNode || g.gridstackNode.grid !== this)) {
          if (r.el = g, r._isAboutToRemove) {
            const y = e.gridstackNode.grid;
            y._gsEventHandler[h.type] && y._gsEventHandler[h.type](h, g), y.engine.nodes.push(r), y.removeWidget(e, !0, !0);
          } else
            F.removePositioningStyles(g), r._temporaryRemoved ? (this._writePosAttr(g, r), this.engine.addNode(r)) : this._writePosAttr(g, r), this.triggerEvent(h, g);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), h.type === "resizestop" && (Number.isInteger(r.sizeToContent) && (r.sizeToContent = r.h), this.resizeToContentCheck(m, r));
        }
      };
      st.draggable(e, {
        start: u,
        stop: f,
        drag: d
      }).resizable(e, {
        start: u,
        stop: f,
        resize: d
      }), r._initDD = !0;
    }
    return st.draggable(e, s ? "disable" : "enable").resizable(e, i ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, r, s, i, o) {
    if (this.engine.cleanNodes().beginUpdate(s), this._writePosAttr(this.placeholder, s), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = s, s.grid?.el)
      this.dragTransform = F.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const a = this.placeholder.closest(".grid-stack");
      this.dragTransform = F.getValuesFromTransformedElement(a);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (s.el = this.placeholder, s._lastUiPosition = r.position, s._prevYPix = r.position.top, s._moving = t.type === "dragstart", s._resizing = t.type === "resizestart", delete s._lastTried, t.type === "dropover" && s._temporaryRemoved && (this.engine.addNode(s), s._moving = !0), this.engine.cacheRects(i, o, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const a = this.getColumn() - s.x, l = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - s.y;
      st.resizable(e, "option", "minWidth", i * Math.min(s.minW || 1, a)).resizable(e, "option", "minHeight", o * Math.min(s.minH || 1, l)).resizable(e, "option", "maxWidth", i * Math.min(s.maxW || Number.MAX_SAFE_INTEGER, a)).resizable(e, "option", "maxWidthMoveLeft", i * Math.min(s.maxW || Number.MAX_SAFE_INTEGER, s.x + s.w)).resizable(e, "option", "maxHeight", o * Math.min(s.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", o * Math.min(s.maxH || Number.MAX_SAFE_INTEGER, s.y + s.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, r, s, i, o) {
    const a = { ...s._orig };
    let l, u = this.opts.marginLeft, d = this.opts.marginRight, f = this.opts.marginTop, h = this.opts.marginBottom;
    const m = Math.round(o * 0.1), g = Math.round(i * 0.1);
    if (u = Math.min(u, g), d = Math.min(d, g), f = Math.min(f, m), h = Math.min(h, m), t.type === "drag") {
      if (s._temporaryRemoved)
        return;
      const p = r.position.top - s._prevYPix;
      s._prevYPix = r.position.top, this.opts.draggable.scroll !== !1 && F.updateScrollPosition(e, r.position, p);
      const b = r.position.left + (r.position.left > s._lastUiPosition.left ? -d : u), v = r.position.top + (r.position.top > s._lastUiPosition.top ? -h : f);
      a.x = Math.round(b / i), a.y = Math.round(v / o);
      const k = this._extraDragRow;
      if (this.engine.collide(s, a)) {
        const C = this.getRow();
        let x = Math.max(0, a.y + s.h - C);
        this.opts.maxRow && C + x > this.opts.maxRow && (x = Math.max(0, this.opts.maxRow - C)), this._extraDragRow = x;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== k && this._updateContainerHeight(), s.x === a.x && s.y === a.y)
        return;
    } else if (t.type === "resize") {
      if (a.x < 0 || (F.updateScrollResize(t, e, o), a.w = Math.round((r.size.width - u) / i), a.h = Math.round((r.size.height - f) / o), s.w === a.w && s.h === a.h) || s._lastTried && s._lastTried.w === a.w && s._lastTried.h === a.h)
        return;
      const p = r.position.left + u, b = r.position.top + f;
      a.x = Math.round(p / i), a.y = Math.round(b / o), l = !0;
    }
    s._event = t, s._lastTried = a;
    const y = {
      x: r.position.left + u,
      y: r.position.top + f,
      w: (r.size ? r.size.width : s.w * i) - u - d,
      h: (r.size ? r.size.height : s.h * o) - f - h
    };
    if (this.engine.moveNodeCheck(s, { ...a, cellWidth: i, cellHeight: o, rect: y, resizing: l })) {
      s._lastUiPosition = r.position, this.engine.cacheRects(i, o, f, d, h, u), delete s._skipDown, l && s.subGrid && s.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const p = t.target;
      s._sidebarOrig || this._writePosAttr(p, s), this.triggerEvent(t, p);
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
    if (!r || (t.style.transform = t.style.transformOrigin = null, st.off(e, "drag"), r._temporaryRemoved))
      return;
    r._temporaryRemoved = !0, this.engine.removeNode(r), r.el = r._isExternal && t ? t : e;
    const s = r._sidebarOrig;
    r._isExternal && this.engine.cleanupNode(r), r._sidebarOrig = s, this.opts.removable === !0 && ue._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : r._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return Rf(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
ue.renderCB = (n, e) => {
  n && e?.content && (n.textContent = e.content);
};
ue.resizeToContentParent = ".grid-stack-item-content";
ue.Utils = F;
ue.Engine = Kt;
ue.GDRev = "12.3.2";
const Tr = /* @__PURE__ */ new WeakMap();
function If({ children: n }) {
  const {
    _gridStack: { value: e, set: t },
    options: r
  } = Rl(), s = Z(/* @__PURE__ */ new Map()), i = Z(null), o = Z(r), a = B(
    (d, f) => {
      if (f.id && f.grid) {
        let h = Tr.get(f.grid);
        h || (h = /* @__PURE__ */ new Map(), Tr.set(f.grid, h)), h.set(f.id, d), s.current.set(f.id, d);
      }
    },
    []
  ), l = B(() => {
    if (i.current) {
      ue.renderCB = a;
      const d = ue.init(o.current, i.current);
      return d && o.current.handle && d.opts && (d.opts.handle = o.current.handle), d;
    }
    return null;
  }, [a]), u = (d, f) => {
    const { children: h, ...m } = d, { children: g, ...y } = f;
    return Qd(m, y);
  };
  return ii(() => {
    if (!u(r, o.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), s.current.clear(), Tr.delete(e), o.current = r, t(null);
      } catch (d) {
        console.error("Error destroying gridstack", d);
      }
    else e && (o.current = r, r.handle && e.opts && (e.opts.handle = r.handle));
  }, [r, e, t]), ii(() => {
    if (!e && i.current)
      try {
        t(l());
      } catch (d) {
        console.error("Error initializing gridstack", d);
      }
  }, [e, l, t]), /* @__PURE__ */ c(
    Al.Provider,
    {
      value: H(
        () => ({
          getWidgetContainer: (d) => {
            if (e) {
              const f = Tr.get(e);
              if (f?.has(d))
                return f.get(d) || null;
            }
            return s.current.get(d) || null;
          }
        }),
        // ! gridStack is required to reinitialize the grid when the options change
        [e]
      ),
      children: /* @__PURE__ */ c("div", { ref: i, children: e ? n : null })
    }
  );
}
const qi = ({
  options: n,
  widgets: e,
  onChange: t,
  className: r,
  static: s,
  forcePositionSync: i
}) => {
  const o = H(() => JSON.stringify(
    e.map((d) => ({
      id: d.id,
      w: d.w,
      h: d.h,
      x: d.x,
      y: d.y,
      noMove: d.noMove,
      noResize: d.noResize,
      locked: d.locked,
      content: d.content?.toString() ?? "",
      _originalContent: d._originalContent?.toString() ?? "",
      allowedSizes: d.allowedSizes
    }))
  ), [e]), a = H(() => ({
    ...n,
    class: r
  }), [n, o, r]), l = (d, f, h) => {
    let m = h[0], g = 1 / 0;
    for (const y of h) {
      const p = y.w - d, b = y.h - f, v = p * p + b * b;
      v < g && (g = v, m = y);
    }
    return m;
  };
  return /* @__PURE__ */ c(
    Nf,
    {
      options: a,
      widgets: e,
      onResizeStop: (d, f) => {
        const h = f.gridstackNode;
        if (!h) return;
        const m = f.gridstackNode?.allowedSizes ?? [];
        if (m.length === 0)
          return;
        const g = l(h.w ?? 1, h.h ?? 1, m ?? []);
        (h.w !== g.w || h.h !== g.h) && h.grid?.update(f, { w: g.w, h: g.h });
      },
      onChange: t,
      static: s,
      forcePositionSync: i,
      children: /* @__PURE__ */ c(If, { children: /* @__PURE__ */ c(Tf, {}) })
    }
  );
};
qi.displayName = "F0GridStack";
const Lf = (n, e, t) => /* @__PURE__ */ c("div", { children: n }), bs = ({
  widgets: n = [],
  editMode: e = !1,
  onChange: t = () => {
  },
  WidgetWrapper: r = Lf,
  main: s = !1,
  deps: i
}) => {
  const o = B(
    (x, _, w) => /* @__PURE__ */ c(
      Rn.div,
      {
        className: "h-full w-full",
        initial: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: {
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        },
        children: r(x, _, w)
      }
    ),
    [r]
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
  ), l = (x, _) => {
    if (typeof x.content == "function" && x.deps && _) {
      const w = {};
      return x.deps.forEach((N) => {
        typeof N == "string" && _[N] !== void 0 && (w[N] = _[N]);
      }), x.content(w);
    }
    return typeof x.content == "function" ? null : x.content;
  }, u = (x, _, w) => x.map((N) => {
    const A = l(N, w), I = {
      id: N.id,
      h: N.h ?? 1,
      w: N.w ?? 1,
      allowedSizes: N.availableSizes,
      noMove: !_,
      noResize: !_,
      locked: N.locked,
      meta: N.meta,
      _originalContent: A,
      content: o(A, N.meta, _)
    };
    return N.x !== void 0 && (I.x = N.x), N.y !== void 0 && (I.y = N.y), I;
  }), [d, f] = ee(
    u(n, e)
  ), h = Z(e), m = Z(n), g = Z(!1), y = Z(/* @__PURE__ */ new Map()), p = Z(n);
  p.current = n;
  const b = Z(i), v = H(() => {
    const x = /* @__PURE__ */ new Map();
    return !i || Object.keys(i).length === 0 || n.forEach((_) => {
      if (_.deps && _.deps.length > 0) {
        const w = _.deps.map((N) => typeof N == "string" && i[N] !== void 0 ? i[N] : N).filter((N) => N !== null);
        x.set(_.id, w);
      }
    }), x;
  }, [n, i]), k = B(
    (x) => {
      f(x), g.current || t(
        x.map((_) => {
          const w = p.current.find(
            (N) => N.id === _.id
          );
          return {
            id: _.id,
            w: _.w ?? 1,
            h: _.h ?? 1,
            allowedSizes: _.allowedSizes,
            meta: _.meta,
            // Preserve the original content (function or static) from the widget prop
            content: typeof w?.content == "function" ? w.content : _._originalContent,
            x: _.x ?? 0,
            y: _.y ?? 0,
            locked: _.locked,
            deps: w?.deps
          };
        })
      ), g.current = !1;
    },
    [t]
  ), C = (x, _) => !x && !_ ? !1 : !x || !_ || x.length !== _.length ? !0 : x.some((w, N) => w !== _[N]);
  return re(() => {
    const x = h.current !== e, _ = m.current !== n, w = b.current !== i && (b.current === void 0 || i === void 0 || Object.keys(b.current).length !== Object.keys(i).length || Object.keys(i).some(
      (D) => b.current?.[D] !== i[D]
    )), N = /* @__PURE__ */ new Map();
    n.forEach((D) => {
      if (D.deps && D.deps.length > 0) {
        const L = y.current.get(D.id), E = v.get(D.id);
        N.set(
          D.id,
          C(L, E)
        ), E ? y.current.set(D.id, E) : y.current.delete(D.id);
      }
    });
    const A = new Set(n.map((D) => D.id));
    y.current.forEach((D, L) => {
      A.has(L) || y.current.delete(L);
    });
    const I = Array.from(N.values()).some((D) => D) || w;
    x && !_ && !I ? (g.current = !0, f(
      (D) => D.map((L) => {
        const E = n.find((P) => P.id === L.id);
        if (!E)
          return L;
        const M = l(E, i);
        return {
          ...L,
          noMove: !e,
          noResize: !e,
          locked: E.locked,
          meta: E.meta,
          _originalContent: M,
          content: o(
            M,
            E.meta,
            e
          )
        };
      })
    )) : (_ || I) && f((D) => {
      const L = new Map(
        D.map((E) => [E.id, E])
      );
      return n.map((E) => {
        const M = L.get(E.id), P = N.get(E.id) ?? !1;
        let $;
        P || !M ? $ = l(E, i) : $ = M._originalContent ?? l(E, i);
        const W = {
          id: E.id,
          h: M?.h ?? E.h ?? 1,
          w: M?.w ?? E.w ?? 1,
          allowedSizes: E.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: E.locked,
          meta: E.meta,
          _originalContent: $,
          content: o($, E.meta, e)
        }, ce = M?.x ?? E.x, G = M?.y ?? E.y;
        return ce !== void 0 && (W.x = ce), G !== void 0 && (W.y = G), W;
      });
    }), h.current = e, m.current = n, b.current = i;
  }, [
    n,
    e,
    o,
    v,
    i
  ]), /* @__PURE__ */ c(
    qi,
    {
      className: Y(s && "h-full flex-1 overflow-auto"),
      options: a,
      onChange: k,
      widgets: d
    }
  );
};
bs.displayName = "GroupGrid";
bs.__isPageLayoutGroup = !0;
const Mf = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutBlock = !0, t;
}, Pf = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutGroup = !0, t;
}, Zn = fn({
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
}), zf = {
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
}, Ui = vt(
  ({
    content: n,
    variant: e,
    align: t,
    className: r,
    as: s,
    ellipsis: i,
    noEllipsisTooltip: o,
    markdown: a,
    required: l,
    ...u
  }, d) => {
    const f = s ?? zf[e ?? "body"], h = l ? /* @__PURE__ */ c("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (i !== void 0) {
      const m = typeof i == "number" ? i : 1;
      return h ? Er(
        f,
        {
          ...u,
          className: Y(
            Zn({ variant: e, align: t }),
            r,
            "inline-flex gap-0.5"
          ),
          ref: d
        },
        /* @__PURE__ */ c(
          ko,
          {
            lines: m,
            noTooltip: o,
            tag: "span",
            className: "min-w-0",
            markdown: a,
            children: n
          }
        ),
        h
      ) : /* @__PURE__ */ c(
        ko,
        {
          ref: d,
          lines: m,
          noTooltip: o,
          tag: f,
          className: Y(Zn({ variant: e, align: t }), r),
          markdown: a,
          ...u,
          children: n
        }
      );
    }
    if (a) {
      const m = Kd(n);
      return h ? Er(
        f,
        {
          ...u,
          className: Y(Zn({ variant: e, align: t }), r),
          ref: d
        },
        /* @__PURE__ */ c("span", { dangerouslySetInnerHTML: { __html: m } }),
        h
      ) : Er(f, {
        ...u,
        className: Y(Zn({ variant: e, align: t }), r),
        ref: d,
        dangerouslySetInnerHTML: { __html: m }
      });
    }
    return Er(
      f,
      {
        ...u,
        className: Y(Zn({ variant: e, align: t }), r),
        ref: d
      },
      n,
      h
    );
  }
);
Ui.displayName = "Text";
const Ol = vt((n, e) => /* @__PURE__ */ c(Ui, { ref: e, markdown: n.markdown ?? !0, ...n }));
Ol.displayName = "F0Text";
const Il = Pe(Ol), lx = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Ll = ({
  title: n,
  draggable: e = !1,
  onDragStart: t,
  onDragEnd: r,
  isDragging: s = !1,
  AIButton: i,
  actions: o,
  children: a,
  selected: l = !1
}) => {
  const [u, d] = ee(!1), [f, h] = ee(!1), m = De(), g = (p) => {
    d(p);
  }, y = f || u;
  return re(() => {
    if (!s || !r) return;
    const p = () => {
      r();
    };
    return document.addEventListener("mouseup", p), () => {
      document.removeEventListener("mouseup", p);
    };
  }, [s, r]), /* @__PURE__ */ T(
    "div",
    {
      className: Y(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        e && u ? "border-f1-border-hover" : e && "hover:border-f1-border-hover",
        l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        s && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      ),
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      children: [
        /* @__PURE__ */ T("div", { className: "flex h-12 w-full items-center justify-between gap-3", children: [
          /* @__PURE__ */ T(
            "div",
            {
              className: Y(
                "flex min-w-0 flex-1 items-center",
                !e && "pl-4",
                !o && !i && "pr-4"
              ),
              children: [
                e && /* @__PURE__ */ c(
                  "div",
                  {
                    className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
                    onMouseDown: t,
                    "data-gs-handle": "true",
                    children: /* @__PURE__ */ c(ze, { icon: vr, size: "xs" })
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: Y(
                      "flex min-w-0 flex-1 items-center",
                      e && "-translate-x-1.5"
                    ),
                    children: /* @__PURE__ */ c(Il, { variant: "label", content: n, ellipsis: !0 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ c(Xd, { children: (i || o) && y && /* @__PURE__ */ T(
            Rn.div,
            {
              className: Y(
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
                i && /* @__PURE__ */ c("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ c(
                  Yd,
                  {
                    size: "sm",
                    label: m.ai.ask,
                    onClick: i,
                    icon: Jd
                  }
                ) }),
                o && /* @__PURE__ */ c(
                  eu,
                  {
                    items: o,
                    open: u,
                    onOpenChange: g,
                    align: "end",
                    children: /* @__PURE__ */ c(
                      Qa,
                      {
                        icon: Br,
                        label: "Actions",
                        variant: "ghost",
                        size: "md",
                        hideLabel: !0,
                        noAutoTooltip: !0,
                        noTitle: !0,
                        pressed: u
                      }
                    )
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4", children: a })
      ]
    }
  );
}, Bf = () => /* @__PURE__ */ T("div", { className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
  /* @__PURE__ */ c("div", { className: "flex h-12 w-full items-center px-4", children: /* @__PURE__ */ c($e, { className: "h-3 w-full max-w-16 rounded-md" }) }),
  /* @__PURE__ */ T("div", { className: "flex flex-1 items-end gap-2 px-4 pb-4", children: [
    /* @__PURE__ */ c($e, { className: "h-1/2 w-full rounded-sm" }),
    /* @__PURE__ */ c($e, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ c($e, { className: "h-1/5 w-full rounded-sm" }),
    /* @__PURE__ */ c($e, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ c($e, { className: "h-full w-full rounded-sm" }),
    /* @__PURE__ */ c($e, { className: "h-3/4 w-full rounded-sm" })
  ] })
] });
Ll.displayName = "F0Widget";
const Vf = Ga(Ll, Bf), $f = ({
  children: n,
  title: e,
  draggable: t = !1,
  actions: r,
  aiButton: s
}) => /* @__PURE__ */ c(
  Vf,
  {
    title: e,
    draggable: t,
    actions: r,
    AIButton: s,
    children: n
  }
), Ml = ({
  widgets: n,
  editMode: e = !1,
  onChange: t = () => {
  },
  deps: r,
  ...s
}) => /* @__PURE__ */ c(
  bs,
  {
    widgets: n,
    editMode: e,
    onChange: t,
    deps: r,
    ...s,
    WidgetWrapper: (i, o, a) => /* @__PURE__ */ c(
      $f,
      {
        title: o?.title ?? "",
        draggable: a,
        actions: o?.actions,
        aiButton: o?.aiButton,
        children: i
      }
    )
  }
);
Ml.displayName = "Dashboard";
const jf = Pf("Dashboard", Ml), cx = Pe(
  St("Dashboard", jf)
), Hf = fn({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Wf = (n) => (n || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({ type: "separator" }), e.push(...t), e), []), qf = (n) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(n) ? n.every(e) ? [
    {
      items: n
    }
  ] : n : [n];
}, xs = vt(
  ({
    children: n,
    variant: e = "default",
    className: t,
    draggable: r = !1,
    onDragStart: s,
    onDragEnd: i,
    onDrop: o,
    dragId: a,
    primaryAction: l,
    ...u
  }, d) => {
    const f = H(
      () => qf(u.actions || []),
      [u.actions]
    ), h = H(
      () => f.flatMap((g) => g.items),
      [f]
    ), m = H(
      () => h.length > 0 || !!l,
      [h, l]
    );
    return /* @__PURE__ */ T(
      "div",
      {
        ref: d,
        className: Y(Hf({ variant: e }), "relative", t),
        draggable: r,
        onDragStart: s,
        onDragEnd: i,
        onDrop: o,
        "data-drag-id": a,
        ...u,
        children: [
          m && /* @__PURE__ */ T("div", { className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4", children: [
            !!l && l,
            h.length > 0 && /* @__PURE__ */ c(
              Ni,
              {
                items: Wf(f),
                "data-testid": "actions-dropdown"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { "data-testid": "content", children: n })
        ]
      }
    );
  }
);
xs.displayName = "Block";
xs.__isPageLayoutBlock = !0;
const Uf = ({
  title: n = "",
  description: e,
  titleLevel: t = "h2",
  children: r,
  className: s,
  ...i
}) => {
  if (!n) return null;
  const o = t;
  return /* @__PURE__ */ T(xs, { ...i, className: Y("space-y-4", s), children: [
    /* @__PURE__ */ T("div", { className: "space-y-2", children: [
      /* @__PURE__ */ c(
        o,
        {
          className: Y("font-semibold text-f1-foreground", {
            "text-2xl": t === "h1",
            "text-xl": t === "h2",
            "text-lg": t === "h3",
            "text-base": t === "h4",
            "text-sm": t === "h5",
            "text-xs": t === "h6"
          }),
          children: n
        }
      ),
      e && /* @__PURE__ */ c("p", { className: "text-sm text-f1-foreground-secondary", children: e })
    ] }),
    /* @__PURE__ */ c("div", { className: "flex-1", children: r })
  ] });
}, Zf = Mf(
  "BlockContent",
  Uf
), Gf = (n) => !xl(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutBlock" in n.type, Qf = (n) => !xl(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutGroup" in n.type, Pl = (n, e, t) => {
  const r = Wr.toArray(e);
  for (const s of r)
    t.includes("block") && Gf(s) || t.includes("group") && Qf(s) || console.warn(
      `${n}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      s
    );
}, Zi = vt(
  ({ children: n, onSort: e, ...t }, r) => {
    Pl("GroupLinear", n, ["block"]);
    const [s, i] = ee(Wr.toArray(n));
    return re(() => {
      i(Wr.toArray(n));
    }, [n]), re(() => {
      e?.(s);
    }, [s, e]), /* @__PURE__ */ c("div", { ref: r, ...t, children: s.map((o, a) => /* @__PURE__ */ c(wl, { children: o }, a)) });
  }
);
Zi.displayName = "GroupLinear";
Zi.__isPageLayoutGroup = !0;
function Kf() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return H(
    () => (r) => {
      e.forEach((s) => s(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const ws = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Bn(n) {
  const e = Object.prototype.toString.call(n);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Gi(n) {
  return "nodeType" in n;
}
function dt(n) {
  var e, t;
  return n ? Bn(n) ? n : Gi(n) && (e = (t = n.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Qi(n) {
  const {
    Document: e
  } = dt(n);
  return n instanceof e;
}
function br(n) {
  return Bn(n) ? !1 : n instanceof dt(n).HTMLElement;
}
function zl(n) {
  return n instanceof dt(n).SVGElement;
}
function Vn(n) {
  return n ? Bn(n) ? n.document : Gi(n) ? Qi(n) ? n : br(n) || zl(n) ? n.ownerDocument : document : document : document;
}
const zt = ws ? ii : re;
function _s(n) {
  const e = Z(n);
  return zt(() => {
    e.current = n;
  }), B(function() {
    for (var t = arguments.length, r = new Array(t), s = 0; s < t; s++)
      r[s] = arguments[s];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
function Xf() {
  const n = Z(null), e = B((r, s) => {
    n.current = setInterval(r, s);
  }, []), t = B(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [e, t];
}
function dr(n, e) {
  e === void 0 && (e = [n]);
  const t = Z(n);
  return zt(() => {
    t.current !== n && (t.current = n);
  }, e), t;
}
function xr(n, e) {
  const t = Z();
  return H(
    () => {
      const r = n(t.current);
      return t.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function Kr(n) {
  const e = _s(n), t = Z(null), r = B(
    (s) => {
      s !== t.current && e?.(s, t.current), t.current = s;
    },
    //eslint-disable-next-line
    []
  );
  return [t, r];
}
function Xr(n) {
  const e = Z();
  return re(() => {
    e.current = n;
  }, [n]), e.current;
}
let Ms = {};
function wr(n, e) {
  return H(() => {
    if (e)
      return e;
    const t = Ms[n] == null ? 0 : Ms[n] + 1;
    return Ms[n] = t, n + "-" + t;
  }, [n, e]);
}
function Bl(n) {
  return function(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      r[s - 1] = arguments[s];
    return r.reduce((i, o) => {
      const a = Object.entries(o);
      for (const [l, u] of a) {
        const d = i[l];
        d != null && (i[l] = d + n * u);
      }
      return i;
    }, {
      ...e
    });
  };
}
const Tn = /* @__PURE__ */ Bl(1), ur = /* @__PURE__ */ Bl(-1);
function Yf(n) {
  return "clientX" in n && "clientY" in n;
}
function Cs(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: e
  } = dt(n.target);
  return e && n instanceof e;
}
function Jf(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: e
  } = dt(n.target);
  return e && n instanceof e;
}
function Yr(n) {
  if (Jf(n)) {
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
  return Yf(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const cn = /* @__PURE__ */ Object.freeze({
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
        return [cn.Translate.toString(n), cn.Scale.toString(n)].join(" ");
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
}), Ro = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function eh(n) {
  return n.matches(Ro) ? n : n.querySelector(Ro);
}
const th = {
  display: "none"
};
function nh(n) {
  let {
    id: e,
    value: t
  } = n;
  return fe.createElement("div", {
    id: e,
    style: th
  }, t);
}
function rh(n) {
  let {
    id: e,
    announcement: t,
    ariaLiveType: r = "assertive"
  } = n;
  const s = {
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
  return fe.createElement("div", {
    id: e,
    style: s,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, t);
}
function sh() {
  const [n, e] = ee("");
  return {
    announce: B((r) => {
      r != null && e(r);
    }, []),
    announcement: n
  };
}
const Vl = /* @__PURE__ */ ct(null);
function ih(n) {
  const e = Je(Vl);
  re(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(n);
  }, [n, e]);
}
function oh() {
  const [n] = ee(() => /* @__PURE__ */ new Set()), e = B((r) => (n.add(r), () => n.delete(r)), [n]);
  return [B((r) => {
    let {
      type: s,
      event: i
    } = r;
    n.forEach((o) => {
      var a;
      return (a = o[s]) == null ? void 0 : a.call(o, i);
    });
  }, [n]), e];
}
const ah = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, lh = {
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
function ch(n) {
  let {
    announcements: e = lh,
    container: t,
    hiddenTextDescribedById: r,
    screenReaderInstructions: s = ah
  } = n;
  const {
    announce: i,
    announcement: o
  } = sh(), a = wr("DndLiveRegion"), [l, u] = ee(!1);
  if (re(() => {
    u(!0);
  }, []), ih(H(() => ({
    onDragStart(f) {
      let {
        active: h
      } = f;
      i(e.onDragStart({
        active: h
      }));
    },
    onDragMove(f) {
      let {
        active: h,
        over: m
      } = f;
      e.onDragMove && i(e.onDragMove({
        active: h,
        over: m
      }));
    },
    onDragOver(f) {
      let {
        active: h,
        over: m
      } = f;
      i(e.onDragOver({
        active: h,
        over: m
      }));
    },
    onDragEnd(f) {
      let {
        active: h,
        over: m
      } = f;
      i(e.onDragEnd({
        active: h,
        over: m
      }));
    },
    onDragCancel(f) {
      let {
        active: h,
        over: m
      } = f;
      i(e.onDragCancel({
        active: h,
        over: m
      }));
    }
  }), [i, e])), !l)
    return null;
  const d = fe.createElement(fe.Fragment, null, fe.createElement(nh, {
    id: r,
    value: s.draggable
  }), fe.createElement(rh, {
    id: a,
    announcement: o
  }));
  return t ? Cl(d, t) : d;
}
var Ge;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(Ge || (Ge = {}));
function Jr() {
}
function Ao(n, e) {
  return H(
    () => ({
      sensor: n,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, e]
  );
}
function dh() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return H(
    () => [...e].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const Bt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function uh(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function fh(n, e) {
  const t = Yr(n);
  if (!t)
    return "0 0";
  const r = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function hh(n, e) {
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
function mh(n, e) {
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
function Fo(n) {
  let {
    left: e,
    top: t,
    height: r,
    width: s
  } = n;
  return [{
    x: e,
    y: t
  }, {
    x: e + s,
    y: t
  }, {
    x: e,
    y: t + r
  }, {
    x: e + s,
    y: t + r
  }];
}
function $l(n, e) {
  if (!n || n.length === 0)
    return null;
  const [t] = n;
  return t[e];
}
const ph = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: r
  } = n;
  const s = Fo(e), i = [];
  for (const o of r) {
    const {
      id: a
    } = o, l = t.get(a);
    if (l) {
      const u = Fo(l), d = s.reduce((h, m, g) => h + uh(u[g], m), 0), f = Number((d / 4).toFixed(4));
      i.push({
        id: a,
        data: {
          droppableContainer: o,
          value: f
        }
      });
    }
  }
  return i.sort(hh);
};
function gh(n, e) {
  const t = Math.max(e.top, n.top), r = Math.max(e.left, n.left), s = Math.min(e.left + e.width, n.left + n.width), i = Math.min(e.top + e.height, n.top + n.height), o = s - r, a = i - t;
  if (r < s && t < i) {
    const l = e.width * e.height, u = n.width * n.height, d = o * a, f = d / (l + u - d);
    return Number(f.toFixed(4));
  }
  return 0;
}
const vh = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: r
  } = n;
  const s = [];
  for (const i of r) {
    const {
      id: o
    } = i, a = t.get(o);
    if (a) {
      const l = gh(a, e);
      l > 0 && s.push({
        id: o,
        data: {
          droppableContainer: i,
          value: l
        }
      });
    }
  }
  return s.sort(mh);
};
function yh(n, e, t) {
  return {
    ...n,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function jl(n, e) {
  return n && e ? {
    x: n.left - e.left,
    y: n.top - e.top
  } : Bt;
}
function bh(n) {
  return function(t) {
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      s[i - 1] = arguments[i];
    return s.reduce((o, a) => ({
      ...o,
      top: o.top + n * a.y,
      bottom: o.bottom + n * a.y,
      left: o.left + n * a.x,
      right: o.right + n * a.x
    }), {
      ...t
    });
  };
}
const xh = /* @__PURE__ */ bh(1);
function Hl(n) {
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
function wh(n, e, t) {
  const r = Hl(e);
  if (!r)
    return n;
  const {
    scaleX: s,
    scaleY: i,
    x: o,
    y: a
  } = r, l = n.left - o - (1 - s) * parseFloat(t), u = n.top - a - (1 - i) * parseFloat(t.slice(t.indexOf(" ") + 1)), d = s ? n.width / s : n.width, f = i ? n.height / i : n.height;
  return {
    width: d,
    height: f,
    top: u,
    right: l + d,
    bottom: u + f,
    left: l
  };
}
const _h = {
  ignoreTransform: !1
};
function $n(n, e) {
  e === void 0 && (e = _h);
  let t = n.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: u,
      transformOrigin: d
    } = dt(n).getComputedStyle(n);
    u && (t = wh(t, u, d));
  }
  const {
    top: r,
    left: s,
    width: i,
    height: o,
    bottom: a,
    right: l
  } = t;
  return {
    top: r,
    left: s,
    width: i,
    height: o,
    bottom: a,
    right: l
  };
}
function Oo(n) {
  return $n(n, {
    ignoreTransform: !0
  });
}
function Ch(n) {
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
function Sh(n, e) {
  return e === void 0 && (e = dt(n).getComputedStyle(n)), e.position === "fixed";
}
function kh(n, e) {
  e === void 0 && (e = dt(n).getComputedStyle(n));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((s) => {
    const i = e[s];
    return typeof i == "string" ? t.test(i) : !1;
  });
}
function Ss(n, e) {
  const t = [];
  function r(s) {
    if (e != null && t.length >= e || !s)
      return t;
    if (Qi(s) && s.scrollingElement != null && !t.includes(s.scrollingElement))
      return t.push(s.scrollingElement), t;
    if (!br(s) || zl(s) || t.includes(s))
      return t;
    const i = dt(n).getComputedStyle(s);
    return s !== n && kh(s, i) && t.push(s), Sh(s, i) ? t : r(s.parentNode);
  }
  return n ? r(n) : t;
}
function Wl(n) {
  const [e] = Ss(n, 1);
  return e ?? null;
}
function Ps(n) {
  return !ws || !n ? null : Bn(n) ? n : Gi(n) ? Qi(n) || n === Vn(n).scrollingElement ? window : br(n) ? n : null : null;
}
function ql(n) {
  return Bn(n) ? n.scrollX : n.scrollLeft;
}
function Ul(n) {
  return Bn(n) ? n.scrollY : n.scrollTop;
}
function oi(n) {
  return {
    x: ql(n),
    y: Ul(n)
  };
}
var Xe;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(Xe || (Xe = {}));
function Zl(n) {
  return !ws || !n ? !1 : n === document.scrollingElement;
}
function Gl(n) {
  const e = {
    x: 0,
    y: 0
  }, t = Zl(n) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: n.clientHeight,
    width: n.clientWidth
  }, r = {
    x: n.scrollWidth - t.width,
    y: n.scrollHeight - t.height
  }, s = n.scrollTop <= e.y, i = n.scrollLeft <= e.x, o = n.scrollTop >= r.y, a = n.scrollLeft >= r.x;
  return {
    isTop: s,
    isLeft: i,
    isBottom: o,
    isRight: a,
    maxScroll: r,
    minScroll: e
  };
}
const Nh = {
  x: 0.2,
  y: 0.2
};
function Eh(n, e, t, r, s) {
  let {
    top: i,
    left: o,
    right: a,
    bottom: l
  } = t;
  r === void 0 && (r = 10), s === void 0 && (s = Nh);
  const {
    isTop: u,
    isBottom: d,
    isLeft: f,
    isRight: h
  } = Gl(n), m = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, y = {
    height: e.height * s.y,
    width: e.width * s.x
  };
  return !u && i <= e.top + y.height ? (m.y = Xe.Backward, g.y = r * Math.abs((e.top + y.height - i) / y.height)) : !d && l >= e.bottom - y.height && (m.y = Xe.Forward, g.y = r * Math.abs((e.bottom - y.height - l) / y.height)), !h && a >= e.right - y.width ? (m.x = Xe.Forward, g.x = r * Math.abs((e.right - y.width - a) / y.width)) : !f && o <= e.left + y.width && (m.x = Xe.Backward, g.x = r * Math.abs((e.left + y.width - o) / y.width)), {
    direction: m,
    speed: g
  };
}
function Dh(n) {
  if (n === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: o
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: o,
      width: i,
      height: o
    };
  }
  const {
    top: e,
    left: t,
    right: r,
    bottom: s
  } = n.getBoundingClientRect();
  return {
    top: e,
    left: t,
    right: r,
    bottom: s,
    width: n.clientWidth,
    height: n.clientHeight
  };
}
function Ql(n) {
  return n.reduce((e, t) => Tn(e, oi(t)), Bt);
}
function Th(n) {
  return n.reduce((e, t) => e + ql(t), 0);
}
function Rh(n) {
  return n.reduce((e, t) => e + Ul(t), 0);
}
function Kl(n, e) {
  if (e === void 0 && (e = $n), !n)
    return;
  const {
    top: t,
    left: r,
    bottom: s,
    right: i
  } = e(n);
  Wl(n) && (s <= 0 || i <= 0 || t >= window.innerHeight || r >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Ah = [["x", ["left", "right"], Th], ["y", ["top", "bottom"], Rh]];
class Ki {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Ss(t), s = Ql(r);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [i, o, a] of Ah)
      for (const l of o)
        Object.defineProperty(this, l, {
          get: () => {
            const u = a(r), d = s[i] - u;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class nr {
  constructor(e) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((t) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...t);
      });
    }, this.target = e;
  }
  add(e, t, r) {
    var s;
    (s = this.target) == null || s.addEventListener(e, t, r), this.listeners.push([e, t, r]);
  }
}
function Fh(n) {
  const {
    EventTarget: e
  } = dt(n);
  return n instanceof e ? n : Vn(n);
}
function zs(n, e) {
  const t = Math.abs(n.x), r = Math.abs(n.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + r ** 2) > e : "x" in e && "y" in e ? t > e.x && r > e.y : "x" in e ? t > e.x : "y" in e ? r > e.y : !1;
}
var Et;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(Et || (Et = {}));
function Io(n) {
  n.preventDefault();
}
function Oh(n) {
  n.stopPropagation();
}
var Ce;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter", n.Tab = "Tab";
})(Ce || (Ce = {}));
const Xl = {
  start: [Ce.Space, Ce.Enter],
  cancel: [Ce.Esc],
  end: [Ce.Space, Ce.Enter, Ce.Tab]
}, Ih = (n, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (n.code) {
    case Ce.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case Ce.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case Ce.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case Ce.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Xi {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new nr(Vn(t)), this.windowListeners = new nr(dt(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Et.Resize, this.handleCancel), this.windowListeners.add(Et.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Et.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, r = e.node.current;
    r && Kl(r), t(Bt);
  }
  handleKeyDown(e) {
    if (Cs(e)) {
      const {
        active: t,
        context: r,
        options: s
      } = this.props, {
        keyboardCodes: i = Xl,
        coordinateGetter: o = Ih,
        scrollBehavior: a = "smooth"
      } = s, {
        code: l
      } = e;
      if (i.end.includes(l)) {
        this.handleEnd(e);
        return;
      }
      if (i.cancel.includes(l)) {
        this.handleCancel(e);
        return;
      }
      const {
        collisionRect: u
      } = r.current, d = u ? {
        x: u.left,
        y: u.top
      } : Bt;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const f = o(e, {
        active: t,
        context: r.current,
        currentCoordinates: d
      });
      if (f) {
        const h = ur(f, d), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = r.current;
        for (const y of g) {
          const p = e.code, {
            isTop: b,
            isRight: v,
            isLeft: k,
            isBottom: C,
            maxScroll: x,
            minScroll: _
          } = Gl(y), w = Dh(y), N = {
            x: Math.min(p === Ce.Right ? w.right - w.width / 2 : w.right, Math.max(p === Ce.Right ? w.left : w.left + w.width / 2, f.x)),
            y: Math.min(p === Ce.Down ? w.bottom - w.height / 2 : w.bottom, Math.max(p === Ce.Down ? w.top : w.top + w.height / 2, f.y))
          }, A = p === Ce.Right && !v || p === Ce.Left && !k, I = p === Ce.Down && !C || p === Ce.Up && !b;
          if (A && N.x !== f.x) {
            const D = y.scrollLeft + h.x, L = p === Ce.Right && D <= x.x || p === Ce.Left && D >= _.x;
            if (L && !h.y) {
              y.scrollTo({
                left: D,
                behavior: a
              });
              return;
            }
            L ? m.x = y.scrollLeft - D : m.x = p === Ce.Right ? y.scrollLeft - x.x : y.scrollLeft - _.x, m.x && y.scrollBy({
              left: -m.x,
              behavior: a
            });
            break;
          } else if (I && N.y !== f.y) {
            const D = y.scrollTop + h.y, L = p === Ce.Down && D <= x.y || p === Ce.Up && D >= _.y;
            if (L && !h.x) {
              y.scrollTo({
                top: D,
                behavior: a
              });
              return;
            }
            L ? m.y = y.scrollTop - D : m.y = p === Ce.Down ? y.scrollTop - x.y : y.scrollTop - _.y, m.y && y.scrollBy({
              top: -m.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(e, Tn(ur(f, this.referenceCoordinates), m));
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
Xi.activators = [{
  eventName: "onKeyDown",
  handler: (n, e, t) => {
    let {
      keyboardCodes: r = Xl,
      onActivation: s
    } = e, {
      active: i
    } = t;
    const {
      code: o
    } = n.nativeEvent;
    if (r.start.includes(o)) {
      const a = i.activatorNode.current;
      return a && n.target !== a ? !1 : (n.preventDefault(), s?.({
        event: n.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Lo(n) {
  return !!(n && "distance" in n);
}
function Mo(n) {
  return !!(n && "delay" in n);
}
class Yi {
  constructor(e, t, r) {
    var s;
    r === void 0 && (r = Fh(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: i
    } = e, {
      target: o
    } = i;
    this.props = e, this.events = t, this.document = Vn(o), this.documentListeners = new nr(this.document), this.listeners = new nr(r), this.windowListeners = new nr(dt(o)), this.initialCoordinates = (s = Yr(i)) != null ? s : Bt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Et.Resize, this.handleCancel), this.windowListeners.add(Et.DragStart, Io), this.windowListeners.add(Et.VisibilityChange, this.handleCancel), this.windowListeners.add(Et.ContextMenu, Io), this.documentListeners.add(Et.Keydown, this.handleKeydown), t) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Mo(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (Lo(t)) {
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
      onPending: s
    } = this.props;
    s(r, e, this.initialCoordinates, t);
  }
  handleStart() {
    const {
      initialCoordinates: e
    } = this, {
      onStart: t
    } = this.props;
    e && (this.activated = !0, this.documentListeners.add(Et.Click, Oh, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Et.SelectionChange, this.removeTextSelection), t(e));
  }
  handleMove(e) {
    var t;
    const {
      activated: r,
      initialCoordinates: s,
      props: i
    } = this, {
      onMove: o,
      options: {
        activationConstraint: a
      }
    } = i;
    if (!s)
      return;
    const l = (t = Yr(e)) != null ? t : Bt, u = ur(s, l);
    if (!r && a) {
      if (Lo(a)) {
        if (a.tolerance != null && zs(u, a.tolerance))
          return this.handleCancel();
        if (zs(u, a.distance))
          return this.handleStart();
      }
      if (Mo(a) && zs(u, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, u);
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
    e.code === Ce.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Lh = {
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
class Ji extends Yi {
  constructor(e) {
    const {
      event: t
    } = e, r = Vn(t.target);
    super(e, Lh, r);
  }
}
Ji.activators = [{
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
const Mh = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ai;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(ai || (ai = {}));
class Ph extends Yi {
  constructor(e) {
    super(e, Mh, Vn(e.event.target));
  }
}
Ph.activators = [{
  eventName: "onMouseDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: r
    } = e;
    return t.button === ai.RightClick ? !1 : (r?.({
      event: t
    }), !0);
  }
}];
const Bs = {
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
class zh extends Yi {
  constructor(e) {
    super(e, Bs);
  }
  static setup() {
    return window.addEventListener(Bs.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Bs.move.name, e);
    };
    function e() {
    }
  }
}
zh.activators = [{
  eventName: "onTouchStart",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: r
    } = e;
    const {
      touches: s
    } = t;
    return s.length > 1 ? !1 : (r?.({
      event: t
    }), !0);
  }
}];
var rr;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(rr || (rr = {}));
var es;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(es || (es = {}));
function Bh(n) {
  let {
    acceleration: e,
    activator: t = rr.Pointer,
    canScroll: r,
    draggingRect: s,
    enabled: i,
    interval: o = 5,
    order: a = es.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: u,
    scrollableAncestorRects: d,
    delta: f,
    threshold: h
  } = n;
  const m = $h({
    delta: f,
    disabled: !i
  }), [g, y] = Xf(), p = Z({
    x: 0,
    y: 0
  }), b = Z({
    x: 0,
    y: 0
  }), v = H(() => {
    switch (t) {
      case rr.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case rr.DraggableRect:
        return s;
    }
  }, [t, s, l]), k = Z(null), C = B(() => {
    const _ = k.current;
    if (!_)
      return;
    const w = p.current.x * b.current.x, N = p.current.y * b.current.y;
    _.scrollBy(w, N);
  }, []), x = H(() => a === es.TreeOrder ? [...u].reverse() : u, [a, u]);
  re(
    () => {
      if (!i || !u.length || !v) {
        y();
        return;
      }
      for (const _ of x) {
        if (r?.(_) === !1)
          continue;
        const w = u.indexOf(_), N = d[w];
        if (!N)
          continue;
        const {
          direction: A,
          speed: I
        } = Eh(_, N, v, e, h);
        for (const D of ["x", "y"])
          m[D][A[D]] || (I[D] = 0, A[D] = 0);
        if (I.x > 0 || I.y > 0) {
          y(), k.current = _, g(C, o), p.current = I, b.current = A;
          return;
        }
      }
      p.current = {
        x: 0,
        y: 0
      }, b.current = {
        x: 0,
        y: 0
      }, y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      C,
      r,
      y,
      i,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      g,
      u,
      x,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Vh = {
  x: {
    [Xe.Backward]: !1,
    [Xe.Forward]: !1
  },
  y: {
    [Xe.Backward]: !1,
    [Xe.Forward]: !1
  }
};
function $h(n) {
  let {
    delta: e,
    disabled: t
  } = n;
  const r = Xr(e);
  return xr((s) => {
    if (t || !r || !s)
      return Vh;
    const i = {
      x: Math.sign(e.x - r.x),
      y: Math.sign(e.y - r.y)
    };
    return {
      x: {
        [Xe.Backward]: s.x[Xe.Backward] || i.x === -1,
        [Xe.Forward]: s.x[Xe.Forward] || i.x === 1
      },
      y: {
        [Xe.Backward]: s.y[Xe.Backward] || i.y === -1,
        [Xe.Forward]: s.y[Xe.Forward] || i.y === 1
      }
    };
  }, [t, e, r]);
}
function jh(n, e) {
  const t = e != null ? n.get(e) : void 0, r = t ? t.node.current : null;
  return xr((s) => {
    var i;
    return e == null ? null : (i = r ?? s) != null ? i : null;
  }, [r, e]);
}
function Hh(n, e) {
  return H(() => n.reduce((t, r) => {
    const {
      sensor: s
    } = r, i = s.activators.map((o) => ({
      eventName: o.eventName,
      handler: e(o.handler, r)
    }));
    return [...t, ...i];
  }, []), [n, e]);
}
var fr;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(fr || (fr = {}));
var li;
(function(n) {
  n.Optimized = "optimized";
})(li || (li = {}));
const Po = /* @__PURE__ */ new Map();
function Wh(n, e) {
  let {
    dragging: t,
    dependencies: r,
    config: s
  } = e;
  const [i, o] = ee(null), {
    frequency: a,
    measure: l,
    strategy: u
  } = s, d = Z(n), f = p(), h = dr(f), m = B(function(b) {
    b === void 0 && (b = []), !h.current && o((v) => v === null ? b : v.concat(b.filter((k) => !v.includes(k))));
  }, [h]), g = Z(null), y = xr((b) => {
    if (f && !t)
      return Po;
    if (!b || b === Po || d.current !== n || i != null) {
      const v = /* @__PURE__ */ new Map();
      for (let k of n) {
        if (!k)
          continue;
        if (i && i.length > 0 && !i.includes(k.id) && k.rect.current) {
          v.set(k.id, k.rect.current);
          continue;
        }
        const C = k.node.current, x = C ? new Ki(l(C), C) : null;
        k.rect.current = x, x && v.set(k.id, x);
      }
      return v;
    }
    return b;
  }, [n, i, t, f, l]);
  return re(() => {
    d.current = n;
  }, [n]), re(
    () => {
      f || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, f]
  ), re(
    () => {
      i && i.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), re(
    () => {
      f || typeof a != "number" || g.current !== null || (g.current = setTimeout(() => {
        m(), g.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, f, m, ...r]
  ), {
    droppableRects: y,
    measureDroppableContainers: m,
    measuringScheduled: i != null
  };
  function p() {
    switch (u) {
      case fr.Always:
        return !1;
      case fr.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function eo(n, e) {
  return xr((t) => n ? t || (typeof e == "function" ? e(n) : n) : null, [e, n]);
}
function qh(n, e) {
  return eo(n, e);
}
function Uh(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const r = _s(e), s = H(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, t]);
  return re(() => () => s?.disconnect(), [s]), s;
}
function ks(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const r = _s(e), s = H(
    () => {
      if (t || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  );
  return re(() => () => s?.disconnect(), [s]), s;
}
function Zh(n) {
  return new Ki($n(n), n);
}
function zo(n, e, t) {
  e === void 0 && (e = Zh);
  const [r, s] = ee(null);
  function i() {
    s((l) => {
      if (!n)
        return null;
      if (n.isConnected === !1) {
        var u;
        return (u = l ?? t) != null ? u : null;
      }
      const d = e(n);
      return JSON.stringify(l) === JSON.stringify(d) ? l : d;
    });
  }
  const o = Uh({
    callback(l) {
      if (n)
        for (const u of l) {
          const {
            type: d,
            target: f
          } = u;
          if (d === "childList" && f instanceof HTMLElement && f.contains(n)) {
            i();
            break;
          }
        }
    }
  }), a = ks({
    callback: i
  });
  return zt(() => {
    i(), n ? (a?.observe(n), o?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), o?.disconnect());
  }, [n]), r;
}
function Gh(n) {
  const e = eo(n);
  return jl(n, e);
}
const Bo = [];
function Qh(n) {
  const e = Z(n), t = xr((r) => n ? r && r !== Bo && n && e.current && n.parentNode === e.current.parentNode ? r : Ss(n) : Bo, [n]);
  return re(() => {
    e.current = n;
  }, [n]), t;
}
function Kh(n) {
  const [e, t] = ee(null), r = Z(n), s = B((i) => {
    const o = Ps(i.target);
    o && t((a) => a ? (a.set(o, oi(o)), new Map(a)) : null);
  }, []);
  return re(() => {
    const i = r.current;
    if (n !== i) {
      o(i);
      const a = n.map((l) => {
        const u = Ps(l);
        return u ? (u.addEventListener("scroll", s, {
          passive: !0
        }), [u, oi(u)]) : null;
      }).filter((l) => l != null);
      t(a.length ? new Map(a) : null), r.current = n;
    }
    return () => {
      o(n), o(i);
    };
    function o(a) {
      a.forEach((l) => {
        const u = Ps(l);
        u?.removeEventListener("scroll", s);
      });
    }
  }, [s, n]), H(() => n.length ? e ? Array.from(e.values()).reduce((i, o) => Tn(i, o), Bt) : Ql(n) : Bt, [n, e]);
}
function Vo(n, e) {
  e === void 0 && (e = []);
  const t = Z(null);
  return re(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), re(() => {
    const r = n !== Bt;
    r && !t.current && (t.current = n), !r && t.current && (t.current = null);
  }, [n]), t.current ? ur(n, t.current) : Bt;
}
function Xh(n) {
  re(
    () => {
      if (!ws)
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
function Yh(n, e) {
  return H(() => n.reduce((t, r) => {
    let {
      eventName: s,
      handler: i
    } = r;
    return t[s] = (o) => {
      i(o, e);
    }, t;
  }, {}), [n, e]);
}
function Yl(n) {
  return H(() => n ? Ch(n) : null, [n]);
}
const $o = [];
function Jh(n, e) {
  e === void 0 && (e = $n);
  const [t] = n, r = Yl(t ? dt(t) : null), [s, i] = ee($o);
  function o() {
    i(() => n.length ? n.map((l) => Zl(l) ? r : new Ki(e(l), l)) : $o);
  }
  const a = ks({
    callback: o
  });
  return zt(() => {
    a?.disconnect(), o(), n.forEach((l) => a?.observe(l));
  }, [n]), s;
}
function Jl(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const e = n.children[0];
  return br(e) ? e : n;
}
function em(n) {
  let {
    measure: e
  } = n;
  const [t, r] = ee(null), s = B((u) => {
    for (const {
      target: d
    } of u)
      if (br(d)) {
        r((f) => {
          const h = e(d);
          return f ? {
            ...f,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [e]), i = ks({
    callback: s
  }), o = B((u) => {
    const d = Jl(u);
    i?.disconnect(), d && i?.observe(d), r(d ? e(d) : null);
  }, [e, i]), [a, l] = Kr(o);
  return H(() => ({
    nodeRef: a,
    rect: t,
    setRef: l
  }), [t, a, l]);
}
const tm = [{
  sensor: Ji,
  options: {}
}, {
  sensor: Xi,
  options: {}
}], nm = {
  current: {}
}, Lr = {
  draggable: {
    measure: Oo
  },
  droppable: {
    measure: Oo,
    strategy: fr.WhileDragging,
    frequency: li.Optimized
  },
  dragOverlay: {
    measure: $n
  }
};
class sr extends Map {
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
const rm = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new sr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Jr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Lr,
  measureDroppableContainers: Jr,
  windowRect: null,
  measuringScheduled: !1
}, ec = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Jr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Jr
}, _r = /* @__PURE__ */ ct(ec), tc = /* @__PURE__ */ ct(rm);
function sm() {
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
      containers: new sr()
    }
  };
}
function im(n, e) {
  switch (e.type) {
    case Ge.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case Ge.DragMove:
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
    case Ge.DragEnd:
    case Ge.DragCancel:
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
    case Ge.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: r
      } = t, s = new sr(n.droppable.containers);
      return s.set(r, t), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: s
        }
      };
    }
    case Ge.SetDroppableDisabled: {
      const {
        id: t,
        key: r,
        disabled: s
      } = e, i = n.droppable.containers.get(t);
      if (!i || r !== i.key)
        return n;
      const o = new sr(n.droppable.containers);
      return o.set(t, {
        ...i,
        disabled: s
      }), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: o
        }
      };
    }
    case Ge.UnregisterDroppable: {
      const {
        id: t,
        key: r
      } = e, s = n.droppable.containers.get(t);
      if (!s || r !== s.key)
        return n;
      const i = new sr(n.droppable.containers);
      return i.delete(t), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: i
        }
      };
    }
    default:
      return n;
  }
}
function om(n) {
  let {
    disabled: e
  } = n;
  const {
    active: t,
    activatorEvent: r,
    draggableNodes: s
  } = Je(_r), i = Xr(r), o = Xr(t?.id);
  return re(() => {
    if (!e && !r && i && o != null) {
      if (!Cs(i) || document.activeElement === i.target)
        return;
      const a = s.get(o);
      if (!a)
        return;
      const {
        activatorNode: l,
        node: u
      } = a;
      if (!l.current && !u.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [l.current, u.current]) {
          if (!d)
            continue;
          const f = eh(d);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, e, s, o, i]), null;
}
function nc(n, e) {
  let {
    transform: t,
    ...r
  } = e;
  return n != null && n.length ? n.reduce((s, i) => i({
    transform: s,
    ...r
  }), t) : t;
}
function am(n) {
  return H(
    () => ({
      draggable: {
        ...Lr.draggable,
        ...n?.draggable
      },
      droppable: {
        ...Lr.droppable,
        ...n?.droppable
      },
      dragOverlay: {
        ...Lr.dragOverlay,
        ...n?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n?.draggable, n?.droppable, n?.dragOverlay]
  );
}
function lm(n) {
  let {
    activeNode: e,
    measure: t,
    initialRect: r,
    config: s = !0
  } = n;
  const i = Z(!1), {
    x: o,
    y: a
  } = typeof s == "boolean" ? {
    x: s,
    y: s
  } : s;
  zt(() => {
    if (!o && !a || !e) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const u = e?.node.current;
    if (!u || u.isConnected === !1)
      return;
    const d = t(u), f = jl(d, r);
    if (o || (f.x = 0), a || (f.y = 0), i.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const h = Wl(u);
      h && h.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [e, o, a, r, t]);
}
const Ns = /* @__PURE__ */ ct({
  ...Bt,
  scaleX: 1,
  scaleY: 1
});
var rn;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(rn || (rn = {}));
const cm = /* @__PURE__ */ _l(function(e) {
  var t, r, s, i;
  let {
    id: o,
    accessibility: a,
    autoScroll: l = !0,
    children: u,
    sensors: d = tm,
    collisionDetection: f = vh,
    measuring: h,
    modifiers: m,
    ...g
  } = e;
  const y = rf(im, void 0, sm), [p, b] = y, [v, k] = oh(), [C, x] = ee(rn.Uninitialized), _ = C === rn.Initialized, {
    draggable: {
      active: w,
      nodes: N,
      translate: A
    },
    droppable: {
      containers: I
    }
  } = p, D = w != null ? N.get(w) : null, L = Z({
    initial: null,
    translated: null
  }), E = H(() => {
    var rt;
    return w != null ? {
      id: w,
      // It's possible for the active node to unmount while dragging
      data: (rt = D?.data) != null ? rt : nm,
      rect: L
    } : null;
  }, [w, D]), M = Z(null), [P, $] = ee(null), [W, ce] = ee(null), G = dr(g, Object.values(g)), oe = wr("DndDescribedBy", o), me = H(() => I.getEnabled(), [I]), z = am(h), {
    droppableRects: V,
    measureDroppableContainers: Q,
    measuringScheduled: ge
  } = Wh(me, {
    dragging: _,
    dependencies: [A.x, A.y],
    config: z.droppable
  }), ae = jh(N, w), be = H(() => W ? Yr(W) : null, [W]), xe = Gd(), he = qh(ae, z.draggable.measure);
  lm({
    activeNode: w != null ? N.get(w) : null,
    config: xe.layoutShiftCompensation,
    initialRect: he,
    measure: z.draggable.measure
  });
  const ne = zo(ae, z.draggable.measure, he), de = zo(ae ? ae.parentElement : null), Le = Z({
    activatorEvent: null,
    active: null,
    activeNode: ae,
    collisionRect: null,
    collisions: null,
    droppableRects: V,
    draggableNodes: N,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), je = I.getNodeFor((t = Le.current.over) == null ? void 0 : t.id), Re = em({
    measure: z.dragOverlay.measure
  }), tt = (r = Re.nodeRef.current) != null ? r : ae, Qe = _ ? (s = Re.rect) != null ? s : ne : null, yt = !!(Re.nodeRef.current && Re.rect), S = Gh(yt ? null : ne), R = Yl(tt ? dt(tt) : null), O = Qh(_ ? je ?? ae : null), X = Jh(O), U = nc(m, {
    transform: {
      x: A.x - S.x,
      y: A.y - S.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: W,
    active: E,
    activeNodeRect: ne,
    containerNodeRect: de,
    draggingNodeRect: Qe,
    over: Le.current.over,
    overlayNodeRect: Re.rect,
    scrollableAncestors: O,
    scrollableAncestorRects: X,
    windowRect: R
  }), j = be ? Tn(be, A) : null, se = Kh(O), ve = Vo(se), Ie = Vo(se, [ne]), Se = Tn(U, ve), Ke = Qe ? xh(Qe, U) : null, Vt = E && Ke ? f({
    active: E,
    collisionRect: Ke,
    droppableRects: V,
    droppableContainers: me,
    pointerCoordinates: j
  }) : null, Yt = $l(Vt, "id"), [ut, vn] = ee(null), _e = yt ? U : Tn(U, Ie), Ae = yh(_e, (i = ut?.rect) != null ? i : null, ne), Fe = Z(null), nt = B(
    (rt, bt) => {
      let {
        sensor: xt,
        options: Jt
      } = bt;
      if (M.current == null)
        return;
      const Nt = N.get(M.current);
      if (!Nt)
        return;
      const wt = rt.nativeEvent, $t = new xt({
        active: M.current,
        activeNode: Nt,
        event: wt,
        options: Jt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Le,
        onAbort(et) {
          if (!N.get(et))
            return;
          const {
            onDragAbort: jt
          } = G.current, Zt = {
            id: et
          };
          jt?.(Zt), v({
            type: "onDragAbort",
            event: Zt
          });
        },
        onPending(et, en, jt, Zt) {
          if (!N.get(et))
            return;
          const {
            onDragPending: qn
          } = G.current, tn = {
            id: et,
            constraint: en,
            initialCoordinates: jt,
            offset: Zt
          };
          qn?.(tn), v({
            type: "onDragPending",
            event: tn
          });
        },
        onStart(et) {
          const en = M.current;
          if (en == null)
            return;
          const jt = N.get(en);
          if (!jt)
            return;
          const {
            onDragStart: Zt
          } = G.current, Wn = {
            activatorEvent: wt,
            active: {
              id: en,
              data: jt.data,
              rect: L
            }
          };
          Dr(() => {
            Zt?.(Wn), x(rn.Initializing), b({
              type: Ge.DragStart,
              initialCoordinates: et,
              active: en
            }), v({
              type: "onDragStart",
              event: Wn
            }), $(Fe.current), ce(wt);
          });
        },
        onMove(et) {
          b({
            type: Ge.DragMove,
            coordinates: et
          });
        },
        onEnd: Cn(Ge.DragEnd),
        onCancel: Cn(Ge.DragCancel)
      });
      Fe.current = $t;
      function Cn(et) {
        return async function() {
          const {
            active: jt,
            collisions: Zt,
            over: Wn,
            scrollAdjustedTranslate: qn
          } = Le.current;
          let tn = null;
          if (jt && qn) {
            const {
              cancelDrop: Un
            } = G.current;
            tn = {
              activatorEvent: wt,
              active: jt,
              collisions: Zt,
              delta: qn,
              over: Wn
            }, et === Ge.DragEnd && typeof Un == "function" && await Promise.resolve(Un(tn)) && (et = Ge.DragCancel);
          }
          M.current = null, Dr(() => {
            b({
              type: et
            }), x(rn.Uninitialized), vn(null), $(null), ce(null), Fe.current = null;
            const Un = et === Ge.DragEnd ? "onDragEnd" : "onDragCancel";
            if (tn) {
              const Ls = G.current[Un];
              Ls?.(tn), v({
                type: Un,
                event: tn
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [N]
  ), Hn = B((rt, bt) => (xt, Jt) => {
    const Nt = xt.nativeEvent, wt = N.get(Jt);
    if (
      // Another sensor is already instantiating
      M.current !== null || // No active draggable
      !wt || // Event has already been captured
      Nt.dndKit || Nt.defaultPrevented
    )
      return;
    const $t = {
      active: wt
    };
    rt(xt, bt.options, $t) === !0 && (Nt.dndKit = {
      capturedBy: bt.sensor
    }, M.current = Jt, nt(xt, bt));
  }, [N, nt]), So = Hh(d, Hn);
  Xh(d), zt(() => {
    ne && C === rn.Initializing && x(rn.Initialized);
  }, [ne, C]), re(
    () => {
      const {
        onDragMove: rt
      } = G.current, {
        active: bt,
        activatorEvent: xt,
        collisions: Jt,
        over: Nt
      } = Le.current;
      if (!bt || !xt)
        return;
      const wt = {
        active: bt,
        activatorEvent: xt,
        collisions: Jt,
        delta: {
          x: Se.x,
          y: Se.y
        },
        over: Nt
      };
      Dr(() => {
        rt?.(wt), v({
          type: "onDragMove",
          event: wt
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Se.x, Se.y]
  ), re(
    () => {
      const {
        active: rt,
        activatorEvent: bt,
        collisions: xt,
        droppableContainers: Jt,
        scrollAdjustedTranslate: Nt
      } = Le.current;
      if (!rt || M.current == null || !bt || !Nt)
        return;
      const {
        onDragOver: wt
      } = G.current, $t = Jt.get(Yt), Cn = $t && $t.rect.current ? {
        id: $t.id,
        rect: $t.rect.current,
        data: $t.data,
        disabled: $t.disabled
      } : null, et = {
        active: rt,
        activatorEvent: bt,
        collisions: xt,
        delta: {
          x: Nt.x,
          y: Nt.y
        },
        over: Cn
      };
      Dr(() => {
        vn(Cn), wt?.(et), v({
          type: "onDragOver",
          event: et
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Yt]
  ), zt(() => {
    Le.current = {
      activatorEvent: W,
      active: E,
      activeNode: ae,
      collisionRect: Ke,
      collisions: Vt,
      droppableRects: V,
      draggableNodes: N,
      draggingNode: tt,
      draggingNodeRect: Qe,
      droppableContainers: I,
      over: ut,
      scrollableAncestors: O,
      scrollAdjustedTranslate: Se
    }, L.current = {
      initial: Qe,
      translated: Ke
    };
  }, [E, ae, Vt, Ke, N, tt, Qe, V, I, ut, O, Se]), Bh({
    ...xe,
    delta: A,
    draggingRect: Ke,
    pointerCoordinates: j,
    scrollableAncestors: O,
    scrollableAncestorRects: X
  });
  const Ud = H(() => ({
    active: E,
    activeNode: ae,
    activeNodeRect: ne,
    activatorEvent: W,
    collisions: Vt,
    containerNodeRect: de,
    dragOverlay: Re,
    draggableNodes: N,
    droppableContainers: I,
    droppableRects: V,
    over: ut,
    measureDroppableContainers: Q,
    scrollableAncestors: O,
    scrollableAncestorRects: X,
    measuringConfiguration: z,
    measuringScheduled: ge,
    windowRect: R
  }), [E, ae, ne, W, Vt, de, Re, N, I, V, ut, Q, O, X, z, ge, R]), Zd = H(() => ({
    activatorEvent: W,
    activators: So,
    active: E,
    activeNodeRect: ne,
    ariaDescribedById: {
      draggable: oe
    },
    dispatch: b,
    draggableNodes: N,
    over: ut,
    measureDroppableContainers: Q
  }), [W, So, E, ne, b, oe, N, ut, Q]);
  return fe.createElement(Vl.Provider, {
    value: k
  }, fe.createElement(_r.Provider, {
    value: Zd
  }, fe.createElement(tc.Provider, {
    value: Ud
  }, fe.createElement(Ns.Provider, {
    value: Ae
  }, u)), fe.createElement(om, {
    disabled: a?.restoreFocus === !1
  })), fe.createElement(ch, {
    ...a,
    hiddenTextDescribedById: oe
  }));
  function Gd() {
    const rt = P?.autoScrollEnabled === !1, bt = typeof l == "object" ? l.enabled === !1 : l === !1, xt = _ && !rt && !bt;
    return typeof l == "object" ? {
      ...l,
      enabled: xt
    } : {
      enabled: xt
    };
  }
}), dm = /* @__PURE__ */ ct(null), jo = "button", um = "Draggable";
function fm(n) {
  let {
    id: e,
    data: t,
    disabled: r = !1,
    attributes: s
  } = n;
  const i = wr(um), {
    activators: o,
    activatorEvent: a,
    active: l,
    activeNodeRect: u,
    ariaDescribedById: d,
    draggableNodes: f,
    over: h
  } = Je(_r), {
    role: m = jo,
    roleDescription: g = "draggable",
    tabIndex: y = 0
  } = s ?? {}, p = l?.id === e, b = Je(p ? Ns : dm), [v, k] = Kr(), [C, x] = Kr(), _ = Yh(o, e), w = dr(t);
  zt(
    () => (f.set(e, {
      id: e,
      key: i,
      node: v,
      activatorNode: C,
      data: w
    }), () => {
      const A = f.get(e);
      A && A.key === i && f.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, e]
  );
  const N = H(() => ({
    role: m,
    tabIndex: y,
    "aria-disabled": r,
    "aria-pressed": p && m === jo ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": d.draggable
  }), [r, m, y, p, g, d.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: u,
    attributes: N,
    isDragging: p,
    listeners: r ? void 0 : _,
    node: v,
    over: h,
    setNodeRef: k,
    setActivatorNodeRef: x,
    transform: b
  };
}
function rc() {
  return Je(tc);
}
const hm = "Droppable", mm = {
  timeout: 25
};
function pm(n) {
  let {
    data: e,
    disabled: t = !1,
    id: r,
    resizeObserverConfig: s
  } = n;
  const i = wr(hm), {
    active: o,
    dispatch: a,
    over: l,
    measureDroppableContainers: u
  } = Je(_r), d = Z({
    disabled: t
  }), f = Z(!1), h = Z(null), m = Z(null), {
    disabled: g,
    updateMeasurementsFor: y,
    timeout: p
  } = {
    ...mm,
    ...s
  }, b = dr(y ?? r), v = B(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        u(Array.isArray(b.current) ? b.current : [b.current]), m.current = null;
      }, p);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [p]
  ), k = ks({
    callback: v,
    disabled: g || !o
  }), C = B((N, A) => {
    k && (A && (k.unobserve(A), f.current = !1), N && k.observe(N));
  }, [k]), [x, _] = Kr(C), w = dr(e);
  return re(() => {
    !k || !x.current || (k.disconnect(), f.current = !1, k.observe(x.current));
  }, [x, k]), re(
    () => (a({
      type: Ge.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: t,
        node: x,
        rect: h,
        data: w
      }
    }), () => a({
      type: Ge.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), re(() => {
    t !== d.current.disabled && (a({
      type: Ge.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: t
    }), d.current.disabled = t);
  }, [r, i, t, a]), {
    active: o,
    rect: h,
    isOver: l?.id === r,
    node: x,
    over: l,
    setNodeRef: _
  };
}
function gm(n) {
  let {
    animation: e,
    children: t
  } = n;
  const [r, s] = ee(null), [i, o] = ee(null), a = Xr(t);
  return !t && !r && a && s(a), zt(() => {
    if (!i)
      return;
    const l = r?.key, u = r?.props.id;
    if (l == null || u == null) {
      s(null);
      return;
    }
    Promise.resolve(e(u, i)).then(() => {
      s(null);
    });
  }, [e, r, i]), fe.createElement(fe.Fragment, null, t, r ? sf(r, {
    ref: o
  }) : null);
}
const vm = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function ym(n) {
  let {
    children: e
  } = n;
  return fe.createElement(_r.Provider, {
    value: ec
  }, fe.createElement(Ns.Provider, {
    value: vm
  }, e));
}
const bm = {
  position: "fixed",
  touchAction: "none"
}, xm = (n) => Cs(n) ? "transform 250ms ease" : void 0, wm = /* @__PURE__ */ vt((n, e) => {
  let {
    as: t,
    activatorEvent: r,
    adjustScale: s,
    children: i,
    className: o,
    rect: a,
    style: l,
    transform: u,
    transition: d = xm
  } = n;
  if (!a)
    return null;
  const f = s ? u : {
    ...u,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...bm,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: cn.Transform.toString(f),
    transformOrigin: s && r ? fh(r, a) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...l
  };
  return fe.createElement(t, {
    className: o,
    style: h,
    ref: e
  }, i);
}), _m = (n) => (e) => {
  let {
    active: t,
    dragOverlay: r
  } = e;
  const s = {}, {
    styles: i,
    className: o
  } = n;
  if (i != null && i.active)
    for (const [a, l] of Object.entries(i.active))
      l !== void 0 && (s[a] = t.node.style.getPropertyValue(a), t.node.style.setProperty(a, l));
  if (i != null && i.dragOverlay)
    for (const [a, l] of Object.entries(i.dragOverlay))
      l !== void 0 && r.node.style.setProperty(a, l);
  return o != null && o.active && t.node.classList.add(o.active), o != null && o.dragOverlay && r.node.classList.add(o.dragOverlay), function() {
    for (const [l, u] of Object.entries(s))
      t.node.style.setProperty(l, u);
    o != null && o.active && t.node.classList.remove(o.active);
  };
}, Cm = (n) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = n;
  return [{
    transform: cn.Transform.toString(e)
  }, {
    transform: cn.Transform.toString(t)
  }];
}, Sm = {
  duration: 250,
  easing: "ease",
  keyframes: Cm,
  sideEffects: /* @__PURE__ */ _m({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function km(n) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: r,
    measuringConfiguration: s
  } = n;
  return _s((i, o) => {
    if (e === null)
      return;
    const a = t.get(i);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const u = Jl(o);
    if (!u)
      return;
    const {
      transform: d
    } = dt(o).getComputedStyle(o), f = Hl(d);
    if (!f)
      return;
    const h = typeof e == "function" ? e : Nm(e);
    return Kl(l, s.draggable.measure), h({
      active: {
        id: i,
        data: a.data,
        node: l,
        rect: s.draggable.measure(l)
      },
      draggableNodes: t,
      dragOverlay: {
        node: o,
        rect: s.dragOverlay.measure(u)
      },
      droppableContainers: r,
      measuringConfiguration: s,
      transform: f
    });
  });
}
function Nm(n) {
  const {
    duration: e,
    easing: t,
    sideEffects: r,
    keyframes: s
  } = {
    ...Sm,
    ...n
  };
  return (i) => {
    let {
      active: o,
      dragOverlay: a,
      transform: l,
      ...u
    } = i;
    if (!e)
      return;
    const d = {
      x: a.rect.left - o.rect.left,
      y: a.rect.top - o.rect.top
    }, f = {
      scaleX: l.scaleX !== 1 ? o.rect.width * l.scaleX / a.rect.width : 1,
      scaleY: l.scaleY !== 1 ? o.rect.height * l.scaleY / a.rect.height : 1
    }, h = {
      x: l.x - d.x,
      y: l.y - d.y,
      ...f
    }, m = s({
      ...u,
      active: o,
      dragOverlay: a,
      transform: {
        initial: l,
        final: h
      }
    }), [g] = m, y = m[m.length - 1];
    if (JSON.stringify(g) === JSON.stringify(y))
      return;
    const p = r?.({
      active: o,
      dragOverlay: a,
      ...u
    }), b = a.node.animate(m, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((v) => {
      b.onfinish = () => {
        p?.(), v();
      };
    });
  };
}
let Ho = 0;
function Em(n) {
  return H(() => {
    if (n != null)
      return Ho++, Ho;
  }, [n]);
}
const Dm = /* @__PURE__ */ fe.memo((n) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: r,
    style: s,
    transition: i,
    modifiers: o,
    wrapperElement: a = "div",
    className: l,
    zIndex: u = 999
  } = n;
  const {
    activatorEvent: d,
    active: f,
    activeNodeRect: h,
    containerNodeRect: m,
    draggableNodes: g,
    droppableContainers: y,
    dragOverlay: p,
    over: b,
    measuringConfiguration: v,
    scrollableAncestors: k,
    scrollableAncestorRects: C,
    windowRect: x
  } = rc(), _ = Je(Ns), w = Em(f?.id), N = nc(o, {
    activatorEvent: d,
    active: f,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: p.rect,
    over: b,
    overlayNodeRect: p.rect,
    scrollableAncestors: k,
    scrollableAncestorRects: C,
    transform: _,
    windowRect: x
  }), A = eo(h), I = km({
    config: r,
    draggableNodes: g,
    droppableContainers: y,
    measuringConfiguration: v
  }), D = A ? p.setRef : void 0;
  return fe.createElement(ym, null, fe.createElement(gm, {
    animation: I
  }, f && w ? fe.createElement(wm, {
    key: w,
    id: f.id,
    ref: D,
    as: a,
    activatorEvent: d,
    adjustScale: e,
    className: l,
    transition: i,
    rect: A,
    style: {
      zIndex: u,
      ...s
    },
    transform: N
  }, t) : null));
});
function to(n, e, t) {
  const r = n.slice();
  return r.splice(t < 0 ? r.length + t : t, 0, r.splice(e, 1)[0]), r;
}
function Tm(n, e) {
  return n.reduce((t, r, s) => {
    const i = e.get(r);
    return i && (t[s] = i), t;
  }, Array(n.length));
}
function Rr(n) {
  return n !== null && n >= 0;
}
function Rm(n, e) {
  if (n === e)
    return !0;
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function Am(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const sc = (n) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: r,
    index: s
  } = n;
  const i = to(e, r, t), o = e[s], a = i[s];
  return !a || !o ? null : {
    x: a.left - o.left,
    y: a.top - o.top,
    scaleX: a.width / o.width,
    scaleY: a.height / o.height
  };
}, ic = "Sortable", oc = /* @__PURE__ */ fe.createContext({
  activeIndex: -1,
  containerId: ic,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: sc,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Fm(n) {
  let {
    children: e,
    id: t,
    items: r,
    strategy: s = sc,
    disabled: i = !1
  } = n;
  const {
    active: o,
    dragOverlay: a,
    droppableRects: l,
    over: u,
    measureDroppableContainers: d
  } = rc(), f = wr(ic, t), h = a.rect !== null, m = H(() => r.map((_) => typeof _ == "object" && "id" in _ ? _.id : _), [r]), g = o != null, y = o ? m.indexOf(o.id) : -1, p = u ? m.indexOf(u.id) : -1, b = Z(m), v = !Rm(m, b.current), k = p !== -1 && y === -1 || v, C = Am(i);
  zt(() => {
    v && g && d(m);
  }, [v, m, g, d]), re(() => {
    b.current = m;
  }, [m]);
  const x = H(
    () => ({
      activeIndex: y,
      containerId: f,
      disabled: C,
      disableTransforms: k,
      items: m,
      overIndex: p,
      useDragOverlay: h,
      sortedRects: Tm(m, l),
      strategy: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, f, C.draggable, C.droppable, k, m, p, l, h, s]
  );
  return fe.createElement(oc.Provider, {
    value: x
  }, e);
}
const Om = (n) => {
  let {
    id: e,
    items: t,
    activeIndex: r,
    overIndex: s
  } = n;
  return to(t, r, s).indexOf(e);
}, Im = (n) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: r,
    index: s,
    items: i,
    newIndex: o,
    previousItems: a,
    previousContainerId: l,
    transition: u
  } = n;
  return !u || !r || a !== i && s === o ? !1 : t ? !0 : o !== s && e === l;
}, Lm = {
  duration: 200,
  easing: "ease"
}, ac = "transform", Mm = /* @__PURE__ */ cn.Transition.toString({
  property: ac,
  duration: 0,
  easing: "linear"
}), Pm = {
  roleDescription: "sortable"
};
function zm(n) {
  let {
    disabled: e,
    index: t,
    node: r,
    rect: s
  } = n;
  const [i, o] = ee(null), a = Z(t);
  return zt(() => {
    if (!e && t !== a.current && r.current) {
      const l = s.current;
      if (l) {
        const u = $n(r.current, {
          ignoreTransform: !0
        }), d = {
          x: l.left - u.left,
          y: l.top - u.top,
          scaleX: l.width / u.width,
          scaleY: l.height / u.height
        };
        (d.x || d.y) && o(d);
      }
    }
    t !== a.current && (a.current = t);
  }, [e, t, r, s]), re(() => {
    i && o(null);
  }, [i]), i;
}
function Bm(n) {
  let {
    animateLayoutChanges: e = Im,
    attributes: t,
    disabled: r,
    data: s,
    getNewIndex: i = Om,
    id: o,
    strategy: a,
    resizeObserverConfig: l,
    transition: u = Lm
  } = n;
  const {
    items: d,
    containerId: f,
    activeIndex: h,
    disabled: m,
    disableTransforms: g,
    sortedRects: y,
    overIndex: p,
    useDragOverlay: b,
    strategy: v
  } = Je(oc), k = Vm(r, m), C = d.indexOf(o), x = H(() => ({
    sortable: {
      containerId: f,
      index: C,
      items: d
    },
    ...s
  }), [f, s, C, d]), _ = H(() => d.slice(d.indexOf(o)), [d, o]), {
    rect: w,
    node: N,
    isOver: A,
    setNodeRef: I
  } = pm({
    id: o,
    data: x,
    disabled: k.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: _,
      ...l
    }
  }), {
    active: D,
    activatorEvent: L,
    activeNodeRect: E,
    attributes: M,
    setNodeRef: P,
    listeners: $,
    isDragging: W,
    over: ce,
    setActivatorNodeRef: G,
    transform: oe
  } = fm({
    id: o,
    data: x,
    attributes: {
      ...Pm,
      ...t
    },
    disabled: k.draggable
  }), me = Kf(I, P), z = !!D, V = z && !g && Rr(h) && Rr(p), Q = !b && W, ge = Q && V ? oe : null, be = V ? ge ?? (a ?? v)({
    rects: y,
    activeNodeRect: E,
    activeIndex: h,
    overIndex: p,
    index: C
  }) : null, xe = Rr(h) && Rr(p) ? i({
    id: o,
    items: d,
    activeIndex: h,
    overIndex: p
  }) : C, he = D?.id, ne = Z({
    activeId: he,
    items: d,
    newIndex: xe,
    containerId: f
  }), de = d !== ne.current.items, Le = e({
    active: D,
    containerId: f,
    isDragging: W,
    isSorting: z,
    id: o,
    index: C,
    items: d,
    newIndex: ne.current.newIndex,
    previousItems: ne.current.items,
    previousContainerId: ne.current.containerId,
    transition: u,
    wasDragging: ne.current.activeId != null
  }), je = zm({
    disabled: !Le,
    index: C,
    node: N,
    rect: w
  });
  return re(() => {
    z && ne.current.newIndex !== xe && (ne.current.newIndex = xe), f !== ne.current.containerId && (ne.current.containerId = f), d !== ne.current.items && (ne.current.items = d);
  }, [z, xe, f, d]), re(() => {
    if (he === ne.current.activeId)
      return;
    if (he != null && ne.current.activeId == null) {
      ne.current.activeId = he;
      return;
    }
    const tt = setTimeout(() => {
      ne.current.activeId = he;
    }, 50);
    return () => clearTimeout(tt);
  }, [he]), {
    active: D,
    activeIndex: h,
    attributes: M,
    data: x,
    rect: w,
    index: C,
    newIndex: xe,
    items: d,
    isOver: A,
    isSorting: z,
    isDragging: W,
    listeners: $,
    node: N,
    overIndex: p,
    over: ce,
    setNodeRef: me,
    setActivatorNodeRef: G,
    setDroppableNodeRef: I,
    setDraggableNodeRef: P,
    transform: je ?? be,
    transition: Re()
  };
  function Re() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      je || // Or to prevent items jumping to back to their "new" position when items change
      de && ne.current.newIndex === C
    )
      return Mm;
    if (!(Q && !Cs(L) || !u) && (z || Le))
      return cn.Transition.toString({
        ...u,
        property: ac
      });
  }
}
function Vm(n, e) {
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
function ts(n) {
  if (!n)
    return !1;
  const e = n.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const $m = [Ce.Down, Ce.Right, Ce.Up, Ce.Left], jm = (n, e) => {
  let {
    context: {
      active: t,
      collisionRect: r,
      droppableRects: s,
      droppableContainers: i,
      over: o,
      scrollableAncestors: a
    }
  } = e;
  if ($m.includes(n.code)) {
    if (n.preventDefault(), !t || !r)
      return;
    const l = [];
    i.getEnabled().forEach((f) => {
      if (!f || f != null && f.disabled)
        return;
      const h = s.get(f.id);
      if (h)
        switch (n.code) {
          case Ce.Down:
            r.top < h.top && l.push(f);
            break;
          case Ce.Up:
            r.top > h.top && l.push(f);
            break;
          case Ce.Left:
            r.left > h.left && l.push(f);
            break;
          case Ce.Right:
            r.left < h.left && l.push(f);
            break;
        }
    });
    const u = ph({
      collisionRect: r,
      droppableRects: s,
      droppableContainers: l
    });
    let d = $l(u, "id");
    if (d === o?.id && u.length > 1 && (d = u[1].id), d != null) {
      const f = i.get(t.id), h = i.get(d), m = h ? s.get(h.id) : null, g = h?.node.current;
      if (g && m && f && h) {
        const p = Ss(g).some((_, w) => a[w] !== _), b = lc(f, h), v = Hm(f, h), k = p || !b ? {
          x: 0,
          y: 0
        } : {
          x: v ? r.width - m.width : 0,
          y: v ? r.height - m.height : 0
        }, C = {
          x: m.left,
          y: m.top
        };
        return k.x && k.y ? C : ur(C, k);
      }
    }
  }
};
function lc(n, e) {
  return !ts(n) || !ts(e) ? !1 : n.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Hm(n, e) {
  return !ts(n) || !ts(e) || !lc(n, e) ? !1 : n.data.current.sortable.index < e.data.current.sortable.index;
}
const Wo = ({ id: n, children: e }) => {
  const { attributes: t, listeners: r, setNodeRef: s, transform: i, transition: o } = Bm({ id: n }), a = {
    transform: cn.Translate.toString(i),
    transition: o,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return /* @__PURE__ */ c("div", { ref: s, style: a, ...t, ...r, children: e });
}, no = ({
  blocks: n,
  sortable: e = !1,
  onSort: t = () => {
  },
  main: r = !1
}) => {
  const [s, i] = ee([]);
  Za(() => {
    i(
      n.map((f, h) => ({
        id: f.id ?? h.toString(),
        render: f.render
      }))
    );
  }, [n]);
  const [o, a] = ee(null), l = dh(
    Ao(Ji),
    Ao(Xi, {
      coordinateGetter: jm
    })
  ), u = (f) => {
    a(f.active.id);
  }, d = (f) => {
    const { active: h, over: m } = f;
    a(null), m && h.id !== m.id && i((g) => {
      const y = g.findIndex((b) => b.id === h.id), p = g.findIndex((b) => b.id === m.id);
      return to(g, y, p);
    });
  };
  return /* @__PURE__ */ c("div", { className: Y("flex flex-wrap items-stretch gap-4", r && "flex-1"), children: /* @__PURE__ */ T(
    cm,
    {
      sensors: l,
      onDragStart: u,
      onDragEnd: d,
      children: [
        /* @__PURE__ */ c(Fm, { items: s, children: s.map((f) => /* @__PURE__ */ c(Wo, { id: f.id, children: f.render }, f.id)) }),
        /* @__PURE__ */ c(Dm, { children: o ? /* @__PURE__ */ c(Wo, { id: o, children: s.find((f) => f.id === o)?.render }) : null })
      ]
    }
  ) });
};
no.displayName = "GroupMasonry";
no.__isPageLayoutGroup = !0;
const Wm = vt(function({ children: e, aside: t, header: r, variant: s = "main-aside" }, i) {
  return process.env.NODE_ENV === "development" && Pl("Page", e, ["block", "group"]), /* @__PURE__ */ c("div", { ref: i, className: "h-full", children: /* @__PURE__ */ T(
    "div",
    {
      className: Y(
        "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
        "flex-col",
        "overflow-y-auto",
        "md:sticky md:top-0 md:max-h-full"
      ),
      children: [
        /* @__PURE__ */ T(
          "main",
          {
            className: Y(
              "sm:min-h-xs h-fit border-0",
              "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2",
              "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden",
              s === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
              "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
            ),
            children: [
              r && /* @__PURE__ */ c(
                "header",
                {
                  className: Y(
                    "sticky top-0 z-30 bg-f1-background"
                  ),
                  children: r
                }
              ),
              /* @__PURE__ */ c("div", { className: "flex-1", children: e })
            ]
          }
        ),
        t && /* @__PURE__ */ c(
          "aside",
          {
            className: Y(
              "min-w-30 sm:basis-1/4 md:max-w-80",
              "order-2",
              s === "aside-main" ? "md:order-1" : "md:order-3"
            ),
            children: t
          }
        )
      ]
    }
  ) });
}), dx = {
  Page: Pe(St("Page", Wm)),
  Block: Pe(St("Block", xs)),
  BlockContent: Pe(
    St("BlockContent", Zf)
  ),
  Group: Pe(St("Group", Zi)),
  GroupGrid: Pe(
    St("GroupGrid", bs)
  ),
  GroupMasonry: Pe(
    St("GroupMasonry", no)
  )
}, ux = bf, fx = wf, hx = Pe(
  gr(
    {
      name: "HomeLayout",
      type: "layout"
    },
    vf
  )
);
var Vs, qo;
function qm() {
  if (qo) return Vs;
  qo = 1;
  var n = tu();
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? n(t, 1) : [];
  }
  return Vs = e, Vs;
}
const mx = [
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
], Um = (n) => typeof n == "boolean" || !n ? {
  show: !!n,
  invertStatus: !1
} : {
  show: n.show ?? !0,
  invertStatus: n.invertStatus ?? !1
}, cc = ({ label: n, ...e }) => {
  const t = nu(), r = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), s = Um(e.trend), i = t(e.comparison), o = ru(
    r.numericValue,
    r.formatterOptions
  ), a = No(i.numericValue), l = No(r.numericValue), u = H(() => {
    if (!(!a || !s.show) && !(!a || !l))
      return (l - a) / a * 100;
  }, [l, a, s.show]);
  return /* @__PURE__ */ T("div", { className: "flex flex-col gap-2", children: [
    n && /* @__PURE__ */ c("div", { children: n }),
    /* @__PURE__ */ T("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ c("span", { className: "font-bold text-2xl", children: o }),
      a !== void 0 && /* @__PURE__ */ c(
        su,
        {
          percentage: u,
          amount: i,
          invertStatus: s.invertStatus,
          hint: e.comparisonHint
        }
      )
    ] })
  ] });
}, Zm = () => /* @__PURE__ */ T("div", { className: "relative flex h-full w-full cursor-progress flex-col gap-2", children: [
  /* @__PURE__ */ c($e, { className: "h-3 w-full max-w-16 rounded-md" }),
  /* @__PURE__ */ T("div", { className: "flex flex-row flex-wrap items-end gap-2", children: [
    /* @__PURE__ */ c($e, { className: "h-8 w-full max-w-36 rounded-sm" }),
    /* @__PURE__ */ c($e, { className: "h-6 w-full max-w-18 rounded-sm" })
  ] })
] });
cc.displayName = "F0BigNumber";
const Gm = Ga(cc, Zm), px = Pe(Gm), gx = iu.filter(
  (n) => n !== "ai"
), vx = Ka, yx = ["default", "outline", "neutral"], bx = Ka, xx = ["split", "dropdown"], wx = ou, dc = {
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
}, uc = {
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
}, Qm = {}, Km = {
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
}, Xm = {
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
}, Ym = {
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
}, Jm = {
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
}, ep = {
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
}, tp = {
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
}, fc = {
  width: Km,
  height: Xm,
  minWidth: Ym,
  minHeight: Jm,
  maxWidth: ep,
  maxHeight: tp
}, hc = {
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
}, mc = {
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
}, pc = {
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
}, np = {}, gc = {
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
}, vc = {
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
}, rp = {}, sp = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, yc = {
  overflow: sp,
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
}, ip = {}, bc = {
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
}, op = {}, ap = {
  ...hc,
  ...bc,
  ...vc,
  ...pc,
  ...gc,
  ...fc,
  ...dc,
  ...uc,
  ...yc,
  ...mc
};
function lp(n, e) {
  return e.split(" ").map((t) => `${n}:${t}`).join(" ");
}
function cp(n, e) {
  const t = [];
  for (const [r, s] of Object.entries(e)) {
    if (s == null) continue;
    const i = ap[r];
    if (!i) continue;
    const o = i[String(s)];
    o && t.push(lp(n, o));
  }
  return t.join(" ");
}
const dp = fn({
  base: "",
  variants: {
    ...hc,
    ...bc,
    ...vc,
    ...pc,
    ...gc,
    ...fc,
    ...dc,
    ...uc,
    ...yc,
    ...mc
  },
  defaultVariants: {
    ...op,
    ...rp,
    ...np,
    ...Qm,
    ...ip
  }
}), up = ["sm", "md", "lg", "xl"], xc = vt(
  ({
    // Display & Position
    display: n,
    position: e,
    // Padding
    padding: t,
    paddingX: r,
    paddingY: s,
    paddingTop: i,
    paddingBottom: o,
    paddingLeft: a,
    paddingRight: l,
    // Margin
    margin: u,
    marginX: d,
    marginY: f,
    marginTop: h,
    marginBottom: m,
    marginLeft: g,
    marginRight: y,
    // Gap
    gap: p,
    // Grid
    columns: b,
    rows: v,
    colSpan: k,
    colStart: C,
    rowSpan: x,
    // Dimensions
    width: _,
    height: w,
    minWidth: N,
    minHeight: A,
    maxWidth: I,
    maxHeight: D,
    // Background
    background: L,
    // Border
    borderColor: E,
    border: M,
    borderTop: P,
    borderBottom: $,
    borderLeft: W,
    borderRight: ce,
    borderRadius: G,
    borderRadiusTopLeft: oe,
    borderRadiusTopRight: me,
    borderRadiusBottomLeft: z,
    borderRadiusBottomRight: V,
    borderStyle: Q,
    // Overflow
    overflow: ge,
    overflowX: ae,
    overflowY: be,
    // Divider
    divider: xe,
    dividerColor: he,
    // Flex
    alignItems: ne,
    justifyContent: de,
    flexDirection: Le,
    flexWrap: je,
    grow: Re,
    shrink: tt,
    // Responsive breakpoint overrides
    sm: Qe,
    md: yt,
    lg: S,
    xl: R,
    ...O
  }, X) => {
    const U = P && P !== "none" || $ && $ !== "none" || W && W !== "none" || ce && ce !== "none", j = M && M !== "none" || U, se = { sm: Qe, md: yt, lg: S, xl: R }, ve = up.map((Ie) => {
      const Se = se[Ie];
      return Se ? cp(Ie, Se) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ c(
      "div",
      {
        ref: X,
        className: Y(
          U && "border-0",
          dp({
            display: n,
            position: e,
            padding: t,
            paddingX: r,
            paddingY: s,
            paddingTop: i,
            paddingBottom: o,
            paddingLeft: a,
            paddingRight: l,
            margin: u,
            marginX: d,
            marginY: f,
            marginTop: h,
            marginBottom: m,
            marginLeft: g,
            marginRight: y,
            gap: p,
            columns: b,
            rows: v,
            colSpan: k,
            colStart: C,
            rowSpan: x,
            width: _,
            height: w,
            minWidth: N,
            minHeight: A,
            maxWidth: I,
            maxHeight: D,
            background: L,
            borderColor: E,
            border: M,
            borderTop: P,
            borderBottom: $,
            borderLeft: W,
            borderRight: ce,
            borderRadius: G,
            borderRadiusTopLeft: oe,
            borderRadiusTopRight: me,
            borderRadiusBottomLeft: z,
            borderRadiusBottomRight: V,
            borderStyle: Q,
            overflow: ge,
            overflowX: ae,
            overflowY: be,
            divider: xe,
            dividerColor: he,
            alignItems: ne,
            justifyContent: de,
            flexDirection: Le,
            flexWrap: je,
            grow: Re,
            shrink: tt
          }),
          ve,
          j && !E && "border-f1-border",
          xe && !he && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...O
      }
    );
  }
);
xc.displayName = "F0Box";
const wc = gr(
  {
    name: "F0Box",
    type: "layout"
  },
  xc
), _x = ["sm", "md", "lg"], Cx = ["compact", "expanded"], ci = ({ count: n, list: e }) => {
  const [t, r] = ee(!1), s = /* @__PURE__ */ c(Vr, { label: `+${n}` });
  return e?.length ? /* @__PURE__ */ T(Ei, { open: t, onOpenChange: r, children: [
    /* @__PURE__ */ c(Di, { asChild: !0, children: /* @__PURE__ */ c("button", { className: ps("inline-flex flex-shrink-0 items-center"), children: s }) }),
    /* @__PURE__ */ c(
      Ti,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ T(Xa, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          e.map((i, o) => /* @__PURE__ */ c(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ c(Vr, { ...i })
            },
            o
          )),
          /* @__PURE__ */ c(
            Ya,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      }
    )
  ] }) : s;
};
ci.displayName = "ChipCounter";
const _c = ({
  chips: n,
  max: e = 4,
  remainingCount: t,
  layout: r = "compact"
}) => {
  if (r === "fill")
    return /* @__PURE__ */ c(
      au,
      {
        items: n,
        renderListItem: (l) => /* @__PURE__ */ c(Vr, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: t !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ c(
          ci,
          {
            count: (t ?? 0) + l,
            list: t ? void 0 : n.slice(n.length - l)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const s = n.slice(0, e), i = n.slice(e), o = t ?? n.length - e, a = o > 0;
  return /* @__PURE__ */ T("div", { className: "flex items-center gap-2", children: [
    s.map((l, u) => /* @__PURE__ */ c(Vr, { ...l }, u)),
    a && /* @__PURE__ */ c(
      ci,
      {
        count: o,
        list: t ? void 0 : i
      }
    )
  ] });
};
_c.displayName = "F0ChipList";
const Sx = Pe(
  St("F0ChipList", _c)
), kx = lu, fp = ["days", "hours", "minutes", "seconds"], Nx = ["sm", "md"], ns = [...fp], Uo = ["hours", "minutes"], Qt = {
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1
};
function Ex(n) {
  const e = Number.isFinite(n) ? n : 0;
  let t = Math.max(0, Math.floor(e));
  const r = Math.floor(t / Qt.days);
  t = t % Qt.days;
  const s = Math.floor(t / Qt.hours);
  t = t % Qt.hours;
  const i = Math.floor(t / Qt.minutes), o = t % Qt.minutes;
  return { days: r, hours: s, minutes: i, seconds: o };
}
function Zo(n) {
  return ns.reduce((e, t) => {
    const r = n[t], s = Number.isFinite(r) ? r : 0, i = Math.max(0, Math.floor(s));
    return e + i * Qt[t];
  }, 0);
}
function $s(n, e) {
  const t = Number.isFinite(n) ? n : 0;
  let r = Math.max(0, Math.floor(t));
  const s = { days: 0, hours: 0, minutes: 0, seconds: 0 }, i = ns.filter((o) => e.includes(o));
  for (const o of i)
    s[o] = Math.floor(r / Qt[o]), r = r % Qt[o];
  return s;
}
function hp(n, e) {
  return e != null && n > e ? e : n < 0 ? 0 : n;
}
const mp = {
  days: "d",
  hours: "h",
  minutes: "min",
  seconds: "s"
}, pp = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, gp = 2, vp = fn({
  base: [
    "inline-flex items-center gap-1 overflow-hidden rounded-[10px]",
    "border border-solid border-f1-border bg-f1-background",
    "transition-[border-color]",
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none"
  ],
  variants: {
    size: {
      sm: "px-2 py-1",
      md: "px-3 py-[6px]"
    },
    status: {
      default: "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
      warning: "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
      info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
      error: "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10 focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical"
    },
    disabled: {
      true: "cursor-not-allowed aria-disabled:cursor-not-allowed bg-f1-background-tertiary",
      false: "cursor-text"
    },
    readonly: {
      true: "border-f1-border-secondary",
      false: ""
    }
  },
  compoundVariants: [
    {
      disabled: !1,
      readonly: !0,
      class: "bg-f1-background-secondary"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "default",
      class: "hover:border-f1-border-hover"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "warning",
      class: "hover:border-f1-border-warning-bold"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "info",
      class: "hover:border-f1-border-info-bold"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "error",
      class: "hover:border-f1-border-critical-bold"
    }
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    disabled: !1,
    readonly: !1
  }
}), Cc = vt(
  function({
    id: e,
    "aria-describedby": t,
    "aria-invalid": r,
    label: s,
    ariaLabel: i,
    hideLabel: o = !1,
    value: a,
    onChange: l,
    onBlur: u,
    units: d = Uo,
    fields: f,
    status: h,
    disabled: m = !1,
    required: g = !1,
    readonly: y = !1,
    size: p = "md"
  }, b) {
    const v = $i(), k = Z(/* @__PURE__ */ new Map()), C = Z(!1), x = H(() => {
      const z = ns.filter((V) => d.includes(V));
      return z.length > 0 ? z : ns.filter((V) => Uo.includes(V));
    }, [d]), _ = x.join("|"), [w, N] = ee(
      () => $s(a, x)
    ), A = Z(a), I = Z(_);
    (a !== A.current || _ !== I.current) && (A.current = a, I.current = _, N($s(a, x)));
    const D = `${v}-${x[0]}`, L = B(
      (z) => {
        const V = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        for (const Q of x)
          V[Q] = z[Q];
        return V;
      },
      [x]
    ), E = B(
      (z) => {
        const V = L(z), Q = Zo(V);
        N(V), A.current = Q, l(Q);
      },
      [l, L]
    ), M = B(
      (z, V) => (Q) => {
        const ge = Q.target.value;
        if (ge === "") {
          E({ ...w, [z]: 0 });
          return;
        }
        const ae = ge.replace(/\D/g, "");
        if (ae === "") return;
        const be = parseInt(ae, 10);
        if (isNaN(be)) return;
        const xe = hp(be, V);
        E({ ...w, [z]: xe });
      },
      [w, E]
    ), P = B(() => {
      const z = L(w), V = Zo(z);
      N($s(V, x)), A.current = V, u?.();
    }, [w, u, L, x]), $ = B(
      (z) => {
        z.metaKey || z.ctrlKey || z.altKey || z.key.length > 1 || /^\d$/.test(z.key) || z.preventDefault();
      },
      []
    ), W = B(
      (z) => {
        if (m || z.target instanceof HTMLInputElement) return;
        const V = x[0];
        V && k.current.get(V)?.focus();
      },
      [m, x]
    ), ce = B(
      (z) => (V) => {
        V ? k.current.set(z, V) : k.current.delete(z);
      },
      []
    ), G = (i && i.trim().length > 0 ? i : void 0) || s || void 0;
    re(() => {
      process.env.NODE_ENV !== "production" && !G && !C.current && (C.current = !0, console.warn(
        "F0DurationInput: provide a non-empty label or ariaLabel for accessibility."
      ));
    }, [G]);
    const oe = h?.type ?? "default", me = !o && s.length > 0;
    return /* @__PURE__ */ T(
      "div",
      {
        ref: b,
        className: Y(
          "flex flex-col gap-2",
          "pointer-events-none",
          m && "cursor-not-allowed"
        ),
        children: [
          me && /* @__PURE__ */ c(
            cu,
            {
              label: s,
              required: g,
              htmlFor: D,
              className: "min-w-0 flex-1",
              disabled: m
            }
          ),
          /* @__PURE__ */ c(
            "div",
            {
              id: e,
              "data-testid": "input-field-wrapper",
              className: Y(
                "pointer-events-auto",
                vp({
                  size: p,
                  status: oe,
                  disabled: m,
                  readonly: y
                })
              ),
              onClick: W,
              role: "group",
              "aria-label": G,
              "aria-describedby": t,
              "aria-invalid": r,
              "aria-disabled": m || void 0,
              "data-status": oe,
              "data-disabled": m ? "" : void 0,
              children: x.map((z, V) => {
                const Q = f?.[z]?.max, ge = w[z], ae = f?.[z]?.suffix ?? mp[z], be = ge > 0 ? String(ge) : "", xe = f?.[z]?.maxVisibleDigits, he = typeof xe == "number" && Number.isFinite(xe) ? Math.max(1, Math.floor(xe)) : gp;
                return /* @__PURE__ */ T(wl, { children: [
                  V > 0 && /* @__PURE__ */ c(
                    ze,
                    {
                      icon: du,
                      size: "xs",
                      color: "default",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c(
                    "input",
                    {
                      ref: ce(z),
                      id: `${v}-${z}`,
                      className: Y(
                        "border-none bg-transparent p-0 text-inherit outline-none",
                        "font-inherit text-[length:inherit] leading-[inherit]",
                        "placeholder:text-f1-foreground-secondary",
                        m && "pointer-events-none"
                      ),
                      style: {
                        width: `${Math.min(
                          Math.max(be.length, 1),
                          he
                        )}ch`
                      },
                      "aria-label": f?.[z]?.ariaLabel ?? pp[z],
                      "aria-describedby": t,
                      "aria-invalid": r,
                      value: be,
                      placeholder: "0",
                      onChange: M(z, Q),
                      onBlur: P,
                      onKeyDown: $,
                      inputMode: "numeric",
                      disabled: m,
                      readOnly: y,
                      "aria-readonly": y || void 0
                    }
                  ),
                  /* @__PURE__ */ c("span", { className: "text-f1-foreground-secondary", children: ae })
                ] }, z);
              })
            }
          ),
          /* @__PURE__ */ c(Ri, { status: h })
        ]
      }
    );
  }
);
Cc.displayName = "F0DurationInput";
const yp = Pe(
  gr(
    {
      name: "F0DurationInput",
      type: "form"
    },
    Cc
  )
), bp = 388;
function Sc({
  filters: n,
  value: e,
  onChange: t,
  height: r,
  width: s = 600,
  className: i,
  showApplyButton: o = !0,
  applyButtonLabel: a,
  dataTestId: l
}) {
  const u = De(), d = Object.keys(n)[0] ?? null, [f, h] = ee(d), [m, g] = ee(e);
  re(() => {
    g(e);
  }, [e]), re(() => {
    if (!f && n) {
      const v = Object.keys(n);
      if (v.length > 0) {
        const k = v.find((C) => {
          const x = m[C], _ = Eo(n[C].type);
          return x !== void 0 && !_.isEmpty(x, {
            schema: n[C],
            i18n: u
          });
        });
        h(k ?? v[0]);
      }
    }
  }, [n, f, m, u]);
  const y = (v, k) => {
    const C = {
      ...m,
      [v]: k
    };
    g(C), o || t(C);
  }, p = () => {
    t(m);
  }, b = H(() => r || Object.entries(n).reduce((k, [C, x]) => {
    const _ = Eo(x.type);
    return Math.max(k, _?.formHeight || bp);
  }, 0), [n, r]);
  return !n || Object.keys(n).length === 0 ? null : /* @__PURE__ */ c(uu, { dataTestId: l, children: /* @__PURE__ */ c(
    "div",
    {
      className: Y(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        i
      ),
      style: { maxWidth: s },
      children: /* @__PURE__ */ c(
        fu,
        {
          filters: n,
          tempFilters: m,
          selectedFilterKey: f,
          onFilterSelect: h,
          onFilterChange: y,
          onApply: p,
          height: b,
          showApplyButton: o,
          applyButtonLabel: a
        }
      )
    }
  ) });
}
Sc.displayName = "F0FilterPickerContent";
const Dx = Sc;
var Cr = (n) => n.type === "checkbox", yn = (n) => n instanceof Date, at = (n) => n == null;
const kc = (n) => typeof n == "object";
var We = (n) => !at(n) && !Array.isArray(n) && kc(n) && !yn(n), Nc = (n) => We(n) && n.target ? Cr(n.target) ? n.target.checked : n.target.value : n, xp = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n, Ec = (n, e) => n.has(xp(e)), wp = (n) => {
  const e = n.constructor && n.constructor.prototype;
  return We(e) && e.hasOwnProperty("isPrototypeOf");
}, ro = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ht(n) {
  let e;
  const t = Array.isArray(n), r = typeof FileList < "u" ? n instanceof FileList : !1;
  if (n instanceof Date)
    e = new Date(n);
  else if (n instanceof Set)
    e = new Set(n);
  else if (!(ro && (n instanceof Blob || r)) && (t || We(n)))
    if (e = t ? [] : {}, !t && !wp(n))
      e = n;
    else
      for (const s in n)
        n.hasOwnProperty(s) && (e[s] = ht(n[s]));
  else
    return n;
  return e;
}
var Es = (n) => Array.isArray(n) ? n.filter(Boolean) : [], He = (n) => n === void 0, J = (n, e, t) => {
  if (!e || !We(n))
    return t;
  const r = Es(e.split(/[,[\].]+?/)).reduce((s, i) => at(s) ? s : s[i], n);
  return He(r) || r === n ? He(n[e]) ? t : n[e] : r;
}, Dt = (n) => typeof n == "boolean", so = (n) => /^\w*$/.test(n), Dc = (n) => Es(n.replace(/["|']|\]/g, "").split(/\.|\[/)), Te = (n, e, t) => {
  let r = -1;
  const s = so(e) ? [e] : Dc(e), i = s.length, o = i - 1;
  for (; ++r < i; ) {
    const a = s[r];
    let l = t;
    if (r !== o) {
      const u = n[a];
      l = We(u) || Array.isArray(u) ? u : isNaN(+s[r + 1]) ? {} : [];
    }
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    n[a] = l, n = n[a];
  }
  return n;
};
const rs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Lt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Gt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Tc = fe.createContext(null), hn = () => fe.useContext(Tc), _p = (n) => {
  const { children: e, ...t } = n;
  return fe.createElement(Tc.Provider, { value: t }, e);
};
var Rc = (n, e, t, r = !0) => {
  const s = {
    defaultValues: e._defaultValues
  };
  for (const i in n)
    Object.defineProperty(s, i, {
      get: () => {
        const o = i;
        return e._proxyFormState[o] !== Lt.all && (e._proxyFormState[o] = !r || Lt.all), t && (t[o] = !0), n[o];
      }
    });
  return s;
}, mt = (n) => We(n) && !Object.keys(n).length, Ac = (n, e, t, r) => {
  t(n);
  const { name: s, ...i } = n;
  return mt(i) || Object.keys(i).length >= Object.keys(e).length || Object.keys(i).find((o) => e[o] === (!r || Lt.all));
}, ir = (n) => Array.isArray(n) ? n : [n], Fc = (n, e, t) => !n || !e || n === e || ir(n).some((r) => r && (t ? r === e : r.startsWith(e) || e.startsWith(r)));
function io(n) {
  const e = fe.useRef(n);
  e.current = n, fe.useEffect(() => {
    const t = !n.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [n.disabled]);
}
function Cp(n) {
  const e = hn(), { control: t = e.control, disabled: r, name: s, exact: i } = n || {}, [o, a] = fe.useState(t._formState), l = fe.useRef(!0), u = fe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = fe.useRef(s);
  return d.current = s, io({
    disabled: r,
    next: (f) => l.current && Fc(d.current, f.name, i) && Ac(f, u.current, t._updateFormState) && a({
      ...t._formState,
      ...f
    }),
    subject: t._subjects.state
  }), fe.useEffect(() => (l.current = !0, u.current.isValid && t._updateValid(!0), () => {
    l.current = !1;
  }), [t]), fe.useMemo(() => Rc(o, t, u.current, !1), [o, t]);
}
var qt = (n) => typeof n == "string", Oc = (n, e, t, r, s) => qt(n) ? (r && e.watch.add(n), J(t, n, s)) : Array.isArray(n) ? n.map((i) => (r && e.watch.add(i), J(t, i))) : (r && (e.watchAll = !0), t);
function Sp(n) {
  const e = hn(), { control: t = e.control, name: r, defaultValue: s, disabled: i, exact: o } = n || {}, a = fe.useRef(r);
  a.current = r, io({
    disabled: i,
    subject: t._subjects.values,
    next: (d) => {
      Fc(a.current, d.name, o) && u(ht(Oc(a.current, t._names, d.values || t._formValues, !1, s)));
    }
  });
  const [l, u] = fe.useState(t._getWatch(r, s));
  return fe.useEffect(() => t._removeUnmounted()), l;
}
function kp(n) {
  const e = hn(), { name: t, disabled: r, control: s = e.control, shouldUnregister: i } = n, o = Ec(s._names.array, t), a = Sp({
    control: s,
    name: t,
    defaultValue: J(s._formValues, t, J(s._defaultValues, t, n.defaultValue)),
    exact: !0
  }), l = Cp({
    control: s,
    name: t,
    exact: !0
  }), u = fe.useRef(s.register(t, {
    ...n.rules,
    value: a,
    ...Dt(n.disabled) ? { disabled: n.disabled } : {}
  })), d = fe.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!J(l.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!J(l.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!J(l.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!J(l.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => J(l.errors, t)
    }
  }), [l, t]), f = fe.useMemo(() => ({
    name: t,
    value: a,
    ...Dt(r) || l.disabled ? { disabled: l.disabled || r } : {},
    onChange: (h) => u.current.onChange({
      target: {
        value: Nc(h),
        name: t
      },
      type: rs.CHANGE
    }),
    onBlur: () => u.current.onBlur({
      target: {
        value: J(s._formValues, t),
        name: t
      },
      type: rs.BLUR
    }),
    ref: (h) => {
      const m = J(s._fields, t);
      m && h && (m._f.ref = {
        focus: () => h.focus(),
        select: () => h.select(),
        setCustomValidity: (g) => h.setCustomValidity(g),
        reportValidity: () => h.reportValidity()
      });
    }
  }), [
    t,
    s._formValues,
    r,
    l.disabled,
    a,
    s._fields
  ]);
  return fe.useEffect(() => {
    const h = s._options.shouldUnregister || i, m = (g, y) => {
      const p = J(s._fields, g);
      p && p._f && (p._f.mount = y);
    };
    if (m(t, !0), h) {
      const g = ht(J(s._options.defaultValues, t));
      Te(s._defaultValues, t, g), He(J(s._formValues, t)) && Te(s._formValues, t, g);
    }
    return !o && s.register(t), () => {
      (o ? h && !s._state.action : h) ? s.unregister(t) : m(t, !1);
    };
  }, [t, s, o, i]), fe.useEffect(() => {
    s._updateDisabledField({
      disabled: r,
      fields: s._fields,
      name: t
    });
  }, [r, t, s]), fe.useMemo(() => ({
    field: f,
    formState: l,
    fieldState: d
  }), [f, l, d]);
}
const Np = (n) => n.render(kp(n));
var Ic = (n, e, t, r, s) => e ? {
  ...t[n],
  types: {
    ...t[n] && t[n].types ? t[n].types : {},
    [r]: s || !0
  }
} : {}, Go = (n) => ({
  isOnSubmit: !n || n === Lt.onSubmit,
  isOnBlur: n === Lt.onBlur,
  isOnChange: n === Lt.onChange,
  isOnAll: n === Lt.all,
  isOnTouch: n === Lt.onTouched
}), Qo = (n, e, t) => !t && (e.watchAll || e.watch.has(n) || [...e.watch].some((r) => n.startsWith(r) && /^\.\w+/.test(n.slice(r.length))));
const or = (n, e, t, r) => {
  for (const s of t || Object.keys(n)) {
    const i = J(n, s);
    if (i) {
      const { _f: o, ...a } = i;
      if (o) {
        if (o.refs && o.refs[0] && e(o.refs[0], s) && !r)
          return !0;
        if (o.ref && e(o.ref, o.name) && !r)
          return !0;
        if (or(a, e))
          break;
      } else if (We(a) && or(a, e))
        break;
    }
  }
};
var Ep = (n, e, t) => {
  const r = ir(J(n, t));
  return Te(r, "root", e[t]), Te(n, t, r), n;
}, oo = (n) => n.type === "file", Wt = (n) => typeof n == "function", ss = (n) => {
  if (!ro)
    return !1;
  const e = n ? n.ownerDocument : 0;
  return n instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, Mr = (n) => qt(n), ao = (n) => n.type === "radio", is = (n) => n instanceof RegExp;
const Ko = {
  value: !1,
  isValid: !1
}, Xo = { value: !0, isValid: !0 };
var Lc = (n) => {
  if (Array.isArray(n)) {
    if (n.length > 1) {
      const e = n.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: e, isValid: !!e.length };
    }
    return n[0].checked && !n[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      n[0].attributes && !He(n[0].attributes.value) ? He(n[0].value) || n[0].value === "" ? Xo : { value: n[0].value, isValid: !0 } : Xo
    ) : Ko;
  }
  return Ko;
};
const Yo = {
  isValid: !1,
  value: null
};
var Mc = (n) => Array.isArray(n) ? n.reduce((e, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : e, Yo) : Yo;
function Jo(n, e, t = "validate") {
  if (Mr(n) || Array.isArray(n) && n.every(Mr) || Dt(n) && !n)
    return {
      type: t,
      message: Mr(n) ? n : "",
      ref: e
    };
}
var Sn = (n) => We(n) && !is(n) ? n : {
  value: n,
  message: ""
}, ea = async (n, e, t, r, s, i) => {
  const { ref: o, refs: a, required: l, maxLength: u, minLength: d, min: f, max: h, pattern: m, validate: g, name: y, valueAsNumber: p, mount: b } = n._f, v = J(t, y);
  if (!b || e.has(y))
    return {};
  const k = a ? a[0] : o, C = (L) => {
    s && k.reportValidity && (k.setCustomValidity(Dt(L) ? "" : L || ""), k.reportValidity());
  }, x = {}, _ = ao(o), w = Cr(o), N = _ || w, A = (p || oo(o)) && He(o.value) && He(v) || ss(o) && o.value === "" || v === "" || Array.isArray(v) && !v.length, I = Ic.bind(null, y, r, x), D = (L, E, M, P = Gt.maxLength, $ = Gt.minLength) => {
    const W = L ? E : M;
    x[y] = {
      type: L ? P : $,
      message: W,
      ref: o,
      ...I(L ? P : $, W)
    };
  };
  if (i ? !Array.isArray(v) || !v.length : l && (!N && (A || at(v)) || Dt(v) && !v || w && !Lc(a).isValid || _ && !Mc(a).isValid)) {
    const { value: L, message: E } = Mr(l) ? { value: !!l, message: l } : Sn(l);
    if (L && (x[y] = {
      type: Gt.required,
      message: E,
      ref: k,
      ...I(Gt.required, E)
    }, !r))
      return C(E), x;
  }
  if (!A && (!at(f) || !at(h))) {
    let L, E;
    const M = Sn(h), P = Sn(f);
    if (!at(v) && !isNaN(v)) {
      const $ = o.valueAsNumber || v && +v;
      at(M.value) || (L = $ > M.value), at(P.value) || (E = $ < P.value);
    } else {
      const $ = o.valueAsDate || new Date(v), W = (oe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + oe), ce = o.type == "time", G = o.type == "week";
      qt(M.value) && v && (L = ce ? W(v) > W(M.value) : G ? v > M.value : $ > new Date(M.value)), qt(P.value) && v && (E = ce ? W(v) < W(P.value) : G ? v < P.value : $ < new Date(P.value));
    }
    if ((L || E) && (D(!!L, M.message, P.message, Gt.max, Gt.min), !r))
      return C(x[y].message), x;
  }
  if ((u || d) && !A && (qt(v) || i && Array.isArray(v))) {
    const L = Sn(u), E = Sn(d), M = !at(L.value) && v.length > +L.value, P = !at(E.value) && v.length < +E.value;
    if ((M || P) && (D(M, L.message, E.message), !r))
      return C(x[y].message), x;
  }
  if (m && !A && qt(v)) {
    const { value: L, message: E } = Sn(m);
    if (is(L) && !v.match(L) && (x[y] = {
      type: Gt.pattern,
      message: E,
      ref: o,
      ...I(Gt.pattern, E)
    }, !r))
      return C(E), x;
  }
  if (g) {
    if (Wt(g)) {
      const L = await g(v, t), E = Jo(L, k);
      if (E && (x[y] = {
        ...E,
        ...I(Gt.validate, E.message)
      }, !r))
        return C(E.message), x;
    } else if (We(g)) {
      let L = {};
      for (const E in g) {
        if (!mt(L) && !r)
          break;
        const M = Jo(await g[E](v, t), k, E);
        M && (L = {
          ...M,
          ...I(E, M.message)
        }, C(M.message), r && (x[y] = L));
      }
      if (!mt(L) && (x[y] = {
        ref: k,
        ...L
      }, !r))
        return x;
    }
  }
  return C(!0), x;
};
function Dp(n, e) {
  const t = e.slice(0, -1).length;
  let r = 0;
  for (; r < t; )
    n = He(n) ? r++ : n[e[r++]];
  return n;
}
function Tp(n) {
  for (const e in n)
    if (n.hasOwnProperty(e) && !He(n[e]))
      return !1;
  return !0;
}
function Ze(n, e) {
  const t = Array.isArray(e) ? e : so(e) ? [e] : Dc(e), r = t.length === 1 ? n : Dp(n, t), s = t.length - 1, i = t[s];
  return r && delete r[i], s !== 0 && (We(r) && mt(r) || Array.isArray(r) && Tp(r)) && Ze(n, t.slice(0, -1)), n;
}
var js = () => {
  let n = [];
  return {
    get observers() {
      return n;
    },
    next: (s) => {
      for (const i of n)
        i.next && i.next(s);
    },
    subscribe: (s) => (n.push(s), {
      unsubscribe: () => {
        n = n.filter((i) => i !== s);
      }
    }),
    unsubscribe: () => {
      n = [];
    }
  };
}, di = (n) => at(n) || !kc(n);
function on(n, e) {
  if (di(n) || di(e))
    return n === e;
  if (yn(n) && yn(e))
    return n.getTime() === e.getTime();
  const t = Object.keys(n), r = Object.keys(e);
  if (t.length !== r.length)
    return !1;
  for (const s of t) {
    const i = n[s];
    if (!r.includes(s))
      return !1;
    if (s !== "ref") {
      const o = e[s];
      if (yn(i) && yn(o) || We(i) && We(o) || Array.isArray(i) && Array.isArray(o) ? !on(i, o) : i !== o)
        return !1;
    }
  }
  return !0;
}
var Pc = (n) => n.type === "select-multiple", Rp = (n) => ao(n) || Cr(n), Hs = (n) => ss(n) && n.isConnected, zc = (n) => {
  for (const e in n)
    if (Wt(n[e]))
      return !0;
  return !1;
};
function os(n, e = {}) {
  const t = Array.isArray(n);
  if (We(n) || t)
    for (const r in n)
      Array.isArray(n[r]) || We(n[r]) && !zc(n[r]) ? (e[r] = Array.isArray(n[r]) ? [] : {}, os(n[r], e[r])) : at(n[r]) || (e[r] = !0);
  return e;
}
function Bc(n, e, t) {
  const r = Array.isArray(n);
  if (We(n) || r)
    for (const s in n)
      Array.isArray(n[s]) || We(n[s]) && !zc(n[s]) ? He(e) || di(t[s]) ? t[s] = Array.isArray(n[s]) ? os(n[s], []) : { ...os(n[s]) } : Bc(n[s], at(e) ? {} : e[s], t[s]) : t[s] = !on(n[s], e[s]);
  return t;
}
var Gn = (n, e) => Bc(n, e, os(e)), Vc = (n, { valueAsNumber: e, valueAsDate: t, setValueAs: r }) => He(n) ? n : e ? n === "" ? NaN : n && +n : t && qt(n) ? new Date(n) : r ? r(n) : n;
function Ws(n) {
  const e = n.ref;
  return oo(e) ? e.files : ao(e) ? Mc(n.refs).value : Pc(e) ? [...e.selectedOptions].map(({ value: t }) => t) : Cr(e) ? Lc(n.refs).value : Vc(He(e.value) ? n.ref.value : e.value, n);
}
var Ap = (n, e, t, r) => {
  const s = {};
  for (const i of n) {
    const o = J(e, i);
    o && Te(s, i, o._f);
  }
  return {
    criteriaMode: t,
    names: [...n],
    fields: s,
    shouldUseNativeValidation: r
  };
}, Qn = (n) => He(n) ? n : is(n) ? n.source : We(n) ? is(n.value) ? n.value.source : n.value : n;
const ta = "AsyncFunction";
var Fp = (n) => !!n && !!n.validate && !!(Wt(n.validate) && n.validate.constructor.name === ta || We(n.validate) && Object.values(n.validate).find((e) => e.constructor.name === ta)), Op = (n) => n.mount && (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate);
function na(n, e, t) {
  const r = J(n, t);
  if (r || so(t))
    return {
      error: r,
      name: t
    };
  const s = t.split(".");
  for (; s.length; ) {
    const i = s.join("."), o = J(e, i), a = J(n, i);
    if (o && !Array.isArray(o) && t !== i)
      return { name: t };
    if (a && a.type)
      return {
        name: i,
        error: a
      };
    s.pop();
  }
  return {
    name: t
  };
}
var Ip = (n, e, t, r, s) => s.isOnAll ? !1 : !t && s.isOnTouch ? !(e || n) : (t ? r.isOnBlur : s.isOnBlur) ? !n : (t ? r.isOnChange : s.isOnChange) ? n : !0, Lp = (n, e) => !Es(J(n, e)).length && Ze(n, e);
const Mp = {
  mode: Lt.onSubmit,
  reValidateMode: Lt.onChange,
  shouldFocusError: !0
};
function Pp(n = {}) {
  let e = {
    ...Mp,
    ...n
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Wt(e.defaultValues),
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
  }, r = {}, s = We(e.defaultValues) || We(e.values) ? ht(e.defaultValues || e.values) || {} : {}, i = e.shouldUnregister ? {} : ht(s), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, a = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: js(),
    array: js(),
    state: js()
  }, h = Go(e.mode), m = Go(e.reValidateMode), g = e.criteriaMode === Lt.all, y = (S) => (R) => {
    clearTimeout(u), u = setTimeout(S, R);
  }, p = async (S) => {
    if (!e.disabled && (d.isValid || S)) {
      const R = e.resolver ? mt((await N()).errors) : await I(r, !0);
      R !== t.isValid && f.state.next({
        isValid: R
      });
    }
  }, b = (S, R) => {
    !e.disabled && (d.isValidating || d.validatingFields) && ((S || Array.from(a.mount)).forEach((O) => {
      O && (R ? Te(t.validatingFields, O, R) : Ze(t.validatingFields, O));
    }), f.state.next({
      validatingFields: t.validatingFields,
      isValidating: !mt(t.validatingFields)
    }));
  }, v = (S, R = [], O, X, U = !0, j = !0) => {
    if (X && O && !e.disabled) {
      if (o.action = !0, j && Array.isArray(J(r, S))) {
        const se = O(J(r, S), X.argA, X.argB);
        U && Te(r, S, se);
      }
      if (j && Array.isArray(J(t.errors, S))) {
        const se = O(J(t.errors, S), X.argA, X.argB);
        U && Te(t.errors, S, se), Lp(t.errors, S);
      }
      if (d.touchedFields && j && Array.isArray(J(t.touchedFields, S))) {
        const se = O(J(t.touchedFields, S), X.argA, X.argB);
        U && Te(t.touchedFields, S, se);
      }
      d.dirtyFields && (t.dirtyFields = Gn(s, i)), f.state.next({
        name: S,
        isDirty: L(S, R),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      Te(i, S, R);
  }, k = (S, R) => {
    Te(t.errors, S, R), f.state.next({
      errors: t.errors
    });
  }, C = (S) => {
    t.errors = S, f.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, x = (S, R, O, X) => {
    const U = J(r, S);
    if (U) {
      const j = J(i, S, He(O) ? J(s, S) : O);
      He(j) || X && X.defaultChecked || R ? Te(i, S, R ? j : Ws(U._f)) : P(S, j), o.mount && p();
    }
  }, _ = (S, R, O, X, U) => {
    let j = !1, se = !1;
    const ve = {
      name: S
    };
    if (!e.disabled) {
      const Ie = !!(J(r, S) && J(r, S)._f && J(r, S)._f.disabled);
      if (!O || X) {
        d.isDirty && (se = t.isDirty, t.isDirty = ve.isDirty = L(), j = se !== ve.isDirty);
        const Se = Ie || on(J(s, S), R);
        se = !!(!Ie && J(t.dirtyFields, S)), Se || Ie ? Ze(t.dirtyFields, S) : Te(t.dirtyFields, S, !0), ve.dirtyFields = t.dirtyFields, j = j || d.dirtyFields && se !== !Se;
      }
      if (O) {
        const Se = J(t.touchedFields, S);
        Se || (Te(t.touchedFields, S, O), ve.touchedFields = t.touchedFields, j = j || d.touchedFields && Se !== O);
      }
      j && U && f.state.next(ve);
    }
    return j ? ve : {};
  }, w = (S, R, O, X) => {
    const U = J(t.errors, S), j = d.isValid && Dt(R) && t.isValid !== R;
    if (e.delayError && O ? (l = y(() => k(S, O)), l(e.delayError)) : (clearTimeout(u), l = null, O ? Te(t.errors, S, O) : Ze(t.errors, S)), (O ? !on(U, O) : U) || !mt(X) || j) {
      const se = {
        ...X,
        ...j && Dt(R) ? { isValid: R } : {},
        errors: t.errors,
        name: S
      };
      t = {
        ...t,
        ...se
      }, f.state.next(se);
    }
  }, N = async (S) => {
    b(S, !0);
    const R = await e.resolver(i, e.context, Ap(S || a.mount, r, e.criteriaMode, e.shouldUseNativeValidation));
    return b(S), R;
  }, A = async (S) => {
    const { errors: R } = await N(S);
    if (S)
      for (const O of S) {
        const X = J(R, O);
        X ? Te(t.errors, O, X) : Ze(t.errors, O);
      }
    else
      t.errors = R;
    return R;
  }, I = async (S, R, O = {
    valid: !0
  }) => {
    for (const X in S) {
      const U = S[X];
      if (U) {
        const { _f: j, ...se } = U;
        if (j) {
          const ve = a.array.has(j.name), Ie = U._f && Fp(U._f);
          Ie && d.validatingFields && b([X], !0);
          const Se = await ea(U, a.disabled, i, g, e.shouldUseNativeValidation && !R, ve);
          if (Ie && d.validatingFields && b([X]), Se[j.name] && (O.valid = !1, R))
            break;
          !R && (J(Se, j.name) ? ve ? Ep(t.errors, Se, j.name) : Te(t.errors, j.name, Se[j.name]) : Ze(t.errors, j.name));
        }
        !mt(se) && await I(se, R, O);
      }
    }
    return O.valid;
  }, D = () => {
    for (const S of a.unMount) {
      const R = J(r, S);
      R && (R._f.refs ? R._f.refs.every((O) => !Hs(O)) : !Hs(R._f.ref)) && ae(S);
    }
    a.unMount = /* @__PURE__ */ new Set();
  }, L = (S, R) => !e.disabled && (S && R && Te(i, S, R), !on(me(), s)), E = (S, R, O) => Oc(S, a, {
    ...o.mount ? i : He(R) ? s : qt(S) ? { [S]: R } : R
  }, O, R), M = (S) => Es(J(o.mount ? i : s, S, e.shouldUnregister ? J(s, S, []) : [])), P = (S, R, O = {}) => {
    const X = J(r, S);
    let U = R;
    if (X) {
      const j = X._f;
      j && (!j.disabled && Te(i, S, Vc(R, j)), U = ss(j.ref) && at(R) ? "" : R, Pc(j.ref) ? [...j.ref.options].forEach((se) => se.selected = U.includes(se.value)) : j.refs ? Cr(j.ref) ? j.refs.length > 1 ? j.refs.forEach((se) => (!se.defaultChecked || !se.disabled) && (se.checked = Array.isArray(U) ? !!U.find((ve) => ve === se.value) : U === se.value)) : j.refs[0] && (j.refs[0].checked = !!U) : j.refs.forEach((se) => se.checked = se.value === U) : oo(j.ref) ? j.ref.value = "" : (j.ref.value = U, j.ref.type || f.values.next({
        name: S,
        values: { ...i }
      })));
    }
    (O.shouldDirty || O.shouldTouch) && _(S, U, O.shouldTouch, O.shouldDirty, !0), O.shouldValidate && oe(S);
  }, $ = (S, R, O) => {
    for (const X in R) {
      const U = R[X], j = `${S}.${X}`, se = J(r, j);
      (a.array.has(S) || We(U) || se && !se._f) && !yn(U) ? $(j, U, O) : P(j, U, O);
    }
  }, W = (S, R, O = {}) => {
    const X = J(r, S), U = a.array.has(S), j = ht(R);
    Te(i, S, j), U ? (f.array.next({
      name: S,
      values: { ...i }
    }), (d.isDirty || d.dirtyFields) && O.shouldDirty && f.state.next({
      name: S,
      dirtyFields: Gn(s, i),
      isDirty: L(S, j)
    })) : X && !X._f && !at(j) ? $(S, j, O) : P(S, j, O), Qo(S, a) && f.state.next({ ...t }), f.values.next({
      name: o.mount ? S : void 0,
      values: { ...i }
    });
  }, ce = async (S) => {
    o.mount = !0;
    const R = S.target;
    let O = R.name, X = !0;
    const U = J(r, O), j = () => R.type ? Ws(U._f) : Nc(S), se = (ve) => {
      X = Number.isNaN(ve) || yn(ve) && isNaN(ve.getTime()) || on(ve, J(i, O, ve));
    };
    if (U) {
      let ve, Ie;
      const Se = j(), Ke = S.type === rs.BLUR || S.type === rs.FOCUS_OUT, Vt = !Op(U._f) && !e.resolver && !J(t.errors, O) && !U._f.deps || Ip(Ke, J(t.touchedFields, O), t.isSubmitted, m, h), Yt = Qo(O, a, Ke);
      Te(i, O, Se), Ke ? (U._f.onBlur && U._f.onBlur(S), l && l(0)) : U._f.onChange && U._f.onChange(S);
      const ut = _(O, Se, Ke, !1), vn = !mt(ut) || Yt;
      if (!Ke && f.values.next({
        name: O,
        type: S.type,
        values: { ...i }
      }), Vt)
        return d.isValid && (e.mode === "onBlur" && Ke ? p() : Ke || p()), vn && f.state.next({ name: O, ...Yt ? {} : ut });
      if (!Ke && Yt && f.state.next({ ...t }), e.resolver) {
        const { errors: _e } = await N([O]);
        if (se(Se), X) {
          const Ae = na(t.errors, r, O), Fe = na(_e, r, Ae.name || O);
          ve = Fe.error, O = Fe.name, Ie = mt(_e);
        }
      } else
        b([O], !0), ve = (await ea(U, a.disabled, i, g, e.shouldUseNativeValidation))[O], b([O]), se(Se), X && (ve ? Ie = !1 : d.isValid && (Ie = await I(r, !0)));
      X && (U._f.deps && oe(U._f.deps), w(O, Ie, ve, ut));
    }
  }, G = (S, R) => {
    if (J(t.errors, R) && S.focus)
      return S.focus(), 1;
  }, oe = async (S, R = {}) => {
    let O, X;
    const U = ir(S);
    if (e.resolver) {
      const j = await A(He(S) ? S : U);
      O = mt(j), X = S ? !U.some((se) => J(j, se)) : O;
    } else S ? (X = (await Promise.all(U.map(async (j) => {
      const se = J(r, j);
      return await I(se && se._f ? { [j]: se } : se);
    }))).every(Boolean), !(!X && !t.isValid) && p()) : X = O = await I(r);
    return f.state.next({
      ...!qt(S) || d.isValid && O !== t.isValid ? {} : { name: S },
      ...e.resolver || !S ? { isValid: O } : {},
      errors: t.errors
    }), R.shouldFocus && !X && or(r, G, S ? U : a.mount), X;
  }, me = (S) => {
    const R = {
      ...o.mount ? i : s
    };
    return He(S) ? R : qt(S) ? J(R, S) : S.map((O) => J(R, O));
  }, z = (S, R) => ({
    invalid: !!J((R || t).errors, S),
    isDirty: !!J((R || t).dirtyFields, S),
    error: J((R || t).errors, S),
    isValidating: !!J(t.validatingFields, S),
    isTouched: !!J((R || t).touchedFields, S)
  }), V = (S) => {
    S && ir(S).forEach((R) => Ze(t.errors, R)), f.state.next({
      errors: S ? t.errors : {}
    });
  }, Q = (S, R, O) => {
    const X = (J(r, S, { _f: {} })._f || {}).ref, U = J(t.errors, S) || {}, { ref: j, message: se, type: ve, ...Ie } = U;
    Te(t.errors, S, {
      ...Ie,
      ...R,
      ref: X
    }), f.state.next({
      name: S,
      errors: t.errors,
      isValid: !1
    }), O && O.shouldFocus && X && X.focus && X.focus();
  }, ge = (S, R) => Wt(S) ? f.values.subscribe({
    next: (O) => S(E(void 0, R), O)
  }) : E(S, R, !0), ae = (S, R = {}) => {
    for (const O of S ? ir(S) : a.mount)
      a.mount.delete(O), a.array.delete(O), R.keepValue || (Ze(r, O), Ze(i, O)), !R.keepError && Ze(t.errors, O), !R.keepDirty && Ze(t.dirtyFields, O), !R.keepTouched && Ze(t.touchedFields, O), !R.keepIsValidating && Ze(t.validatingFields, O), !e.shouldUnregister && !R.keepDefaultValue && Ze(s, O);
    f.values.next({
      values: { ...i }
    }), f.state.next({
      ...t,
      ...R.keepDirty ? { isDirty: L() } : {}
    }), !R.keepIsValid && p();
  }, be = ({ disabled: S, name: R, field: O, fields: X }) => {
    (Dt(S) && o.mount || S || a.disabled.has(R)) && (S ? a.disabled.add(R) : a.disabled.delete(R), _(R, Ws(O ? O._f : J(X, R)._f), !1, !1, !0));
  }, xe = (S, R = {}) => {
    let O = J(r, S);
    const X = Dt(R.disabled) || Dt(e.disabled);
    return Te(r, S, {
      ...O || {},
      _f: {
        ...O && O._f ? O._f : { ref: { name: S } },
        name: S,
        mount: !0,
        ...R
      }
    }), a.mount.add(S), O ? be({
      field: O,
      disabled: Dt(R.disabled) ? R.disabled : e.disabled,
      name: S
    }) : x(S, !0, R.value), {
      ...X ? { disabled: R.disabled || e.disabled } : {},
      ...e.progressive ? {
        required: !!R.required,
        min: Qn(R.min),
        max: Qn(R.max),
        minLength: Qn(R.minLength),
        maxLength: Qn(R.maxLength),
        pattern: Qn(R.pattern)
      } : {},
      name: S,
      onChange: ce,
      onBlur: ce,
      ref: (U) => {
        if (U) {
          xe(S, R), O = J(r, S);
          const j = He(U.value) && U.querySelectorAll && U.querySelectorAll("input,select,textarea")[0] || U, se = Rp(j), ve = O._f.refs || [];
          if (se ? ve.find((Ie) => Ie === j) : j === O._f.ref)
            return;
          Te(r, S, {
            _f: {
              ...O._f,
              ...se ? {
                refs: [
                  ...ve.filter(Hs),
                  j,
                  ...Array.isArray(J(s, S)) ? [{}] : []
                ],
                ref: { type: j.type, name: S }
              } : { ref: j }
            }
          }), x(S, !1, void 0, j);
        } else
          O = J(r, S, {}), O._f && (O._f.mount = !1), (e.shouldUnregister || R.shouldUnregister) && !(Ec(a.array, S) && o.action) && a.unMount.add(S);
      }
    };
  }, he = () => e.shouldFocusError && or(r, G, a.mount), ne = (S) => {
    Dt(S) && (f.state.next({ disabled: S }), or(r, (R, O) => {
      const X = J(r, O);
      X && (R.disabled = X._f.disabled || S, Array.isArray(X._f.refs) && X._f.refs.forEach((U) => {
        U.disabled = X._f.disabled || S;
      }));
    }, 0, !1));
  }, de = (S, R) => async (O) => {
    let X;
    O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
    let U = ht(i);
    if (a.disabled.size)
      for (const j of a.disabled)
        Te(U, j, void 0);
    if (f.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: j, values: se } = await N();
      t.errors = j, U = se;
    } else
      await I(r);
    if (Ze(t.errors, "root"), mt(t.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await S(U, O);
      } catch (j) {
        X = j;
      }
    } else
      R && await R({ ...t.errors }, O), he(), setTimeout(he);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: mt(t.errors) && !X,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), X)
      throw X;
  }, Le = (S, R = {}) => {
    J(r, S) && (He(R.defaultValue) ? W(S, ht(J(s, S))) : (W(S, R.defaultValue), Te(s, S, ht(R.defaultValue))), R.keepTouched || Ze(t.touchedFields, S), R.keepDirty || (Ze(t.dirtyFields, S), t.isDirty = R.defaultValue ? L(S, ht(J(s, S))) : L()), R.keepError || (Ze(t.errors, S), d.isValid && p()), f.state.next({ ...t }));
  }, je = (S, R = {}) => {
    const O = S ? ht(S) : s, X = ht(O), U = mt(S), j = U ? s : X;
    if (R.keepDefaultValues || (s = O), !R.keepValues) {
      if (R.keepDirtyValues) {
        const se = /* @__PURE__ */ new Set([
          ...a.mount,
          ...Object.keys(Gn(s, i))
        ]);
        for (const ve of Array.from(se))
          J(t.dirtyFields, ve) ? Te(j, ve, J(i, ve)) : W(ve, J(j, ve));
      } else {
        if (ro && He(S))
          for (const se of a.mount) {
            const ve = J(r, se);
            if (ve && ve._f) {
              const Ie = Array.isArray(ve._f.refs) ? ve._f.refs[0] : ve._f.ref;
              if (ss(Ie)) {
                const Se = Ie.closest("form");
                if (Se) {
                  Se.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      i = e.shouldUnregister ? R.keepDefaultValues ? ht(s) : {} : ht(j), f.array.next({
        values: { ...j }
      }), f.values.next({
        values: { ...j }
      });
    }
    a = {
      mount: R.keepDirtyValues ? a.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, o.mount = !d.isValid || !!R.keepIsValid || !!R.keepDirtyValues, o.watch = !!e.shouldUnregister, f.state.next({
      submitCount: R.keepSubmitCount ? t.submitCount : 0,
      isDirty: U ? !1 : R.keepDirty ? t.isDirty : !!(R.keepDefaultValues && !on(S, s)),
      isSubmitted: R.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: U ? {} : R.keepDirtyValues ? R.keepDefaultValues && i ? Gn(s, i) : t.dirtyFields : R.keepDefaultValues && S ? Gn(s, S) : R.keepDirty ? t.dirtyFields : {},
      touchedFields: R.keepTouched ? t.touchedFields : {},
      errors: R.keepErrors ? t.errors : {},
      isSubmitSuccessful: R.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Re = (S, R) => je(Wt(S) ? S(i) : S, R);
  return {
    control: {
      register: xe,
      unregister: ae,
      getFieldState: z,
      handleSubmit: de,
      setError: Q,
      _executeSchema: N,
      _getWatch: E,
      _getDirty: L,
      _updateValid: p,
      _removeUnmounted: D,
      _updateFieldArray: v,
      _updateDisabledField: be,
      _getFieldArray: M,
      _reset: je,
      _resetDefaultValues: () => Wt(e.defaultValues) && e.defaultValues().then((S) => {
        Re(S, e.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (S) => {
        t = {
          ...t,
          ...S
        };
      },
      _disableForm: ne,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: C,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(S) {
        o = S;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(S) {
        a = S;
      },
      get _formState() {
        return t;
      },
      set _formState(S) {
        t = S;
      },
      get _options() {
        return e;
      },
      set _options(S) {
        e = {
          ...e,
          ...S
        };
      }
    },
    trigger: oe,
    register: xe,
    handleSubmit: de,
    watch: ge,
    setValue: W,
    getValues: me,
    reset: Re,
    resetField: Le,
    clearErrors: V,
    unregister: ae,
    setError: Q,
    setFocus: (S, R = {}) => {
      const O = J(r, S), X = O && O._f;
      if (X) {
        const U = X.refs ? X.refs[0] : X.ref;
        U.focus && (U.focus(), R.shouldSelect && Wt(U.select) && U.select());
      }
    },
    getFieldState: z
  };
}
function $c(n = {}) {
  const e = fe.useRef(void 0), t = fe.useRef(void 0), [r, s] = fe.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Wt(n.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1,
    defaultValues: Wt(n.defaultValues) ? void 0 : n.defaultValues
  });
  e.current || (e.current = {
    ...Pp(n),
    formState: r
  });
  const i = e.current.control;
  return i._options = n, io({
    subject: i._subjects.state,
    next: (o) => {
      Ac(o, i._proxyFormState, i._updateFormState, !0) && s({ ...i._formState });
    }
  }), fe.useEffect(() => i._disableForm(n.disabled), [i, n.disabled]), fe.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const o = i._getDirty();
      o !== r.isDirty && i._subjects.state.next({
        isDirty: o
      });
    }
  }, [i, r.isDirty]), fe.useEffect(() => {
    n.values && !on(n.values, t.current) ? (i._reset(n.values, i._options.resetOptions), t.current = n.values, s((o) => ({ ...o }))) : i._resetDefaultValues();
  }, [n.values, i]), fe.useEffect(() => {
    n.errors && i._setErrors(n.errors);
  }, [n.errors, i]), fe.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), fe.useEffect(() => {
    n.shouldUnregister && i._subjects.values.next({
      values: i._getWatch()
    });
  }, [n.shouldUnregister, i]), e.current.formState = Rc(r, i), e.current;
}
var zp = "Label", jc = Rt.forwardRef((n, e) => /* @__PURE__ */ c(
  hu.label,
  {
    ...n,
    ref: e,
    onMouseDown: (t) => {
      t.target.closest("button, input, select, textarea") || (n.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
jc.displayName = zp;
var Hc = jc;
const as = Rt.forwardRef(({ className: n, ...e }, t) => /* @__PURE__ */ c(
  Hc,
  {
    ref: t,
    className: Y(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      n
    ),
    ...e
  }
));
as.displayName = Hc.displayName;
const Wc = _p, qc = Rt.createContext(
  {}
), ui = ({
  ...n
}) => {
  const { formState: e } = hn();
  return /* @__PURE__ */ c(qc.Provider, { value: { name: n.name }, children: /* @__PURE__ */ c(Np, { ...n, disabled: e.isSubmitting }) });
}, Ds = () => {
  const n = Rt.useContext(qc), e = Rt.useContext(Uc), { getFieldState: t, formState: r } = hn(), s = t(n.name, r);
  if (!n)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = e;
  return {
    id: i,
    name: n.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...s
  };
}, Uc = Rt.createContext(
  {}
), lo = Rt.forwardRef(({ className: n, ...e }, t) => {
  const r = Rt.useId();
  return /* @__PURE__ */ c(Uc.Provider, { value: { id: r }, children: /* @__PURE__ */ c("div", { ref: t, className: Y("space-y-2", n), ...e }) });
});
lo.displayName = "FormItem";
const Bp = Rt.forwardRef(({ className: n, ...e }, t) => {
  const { error: r, formItemId: s } = Ds();
  return /* @__PURE__ */ c(
    as,
    {
      ref: t,
      className: Y(r && "text-f1-foreground-critical", n),
      htmlFor: s,
      ...e
    }
  );
});
Bp.displayName = "FormLabel";
const Zc = Rt.forwardRef(({ ...n }, e) => {
  const { error: t, formItemId: r, formDescriptionId: s, formMessageId: i } = Ds();
  return /* @__PURE__ */ c(
    mu,
    {
      ref: e,
      id: r,
      "aria-describedby": t ? `${s} ${i}` : `${s}`,
      "aria-invalid": !!t,
      ...n
    }
  );
});
Zc.displayName = "FormControl";
const Gc = Rt.forwardRef(({ className: n, ...e }, t) => {
  const { formDescriptionId: r } = Ds();
  return /* @__PURE__ */ c(
    "p",
    {
      ref: t,
      id: r,
      className: Y("text-base text-f1-foreground-secondary", n),
      ...e
    }
  );
});
Gc.displayName = "FormDescription";
const Ts = Rt.forwardRef(
  ({ className: n, children: e, fallback: t, ...r }, s) => {
    const { error: i, formMessageId: o } = Ds(), { forms: a } = De(), l = i ? i.message ?? t ?? a.validation.invalidType : e;
    return l ? /* @__PURE__ */ T(
      "div",
      {
        ref: s,
        id: o,
        className: Y("flex gap-1", n),
        ...r,
        children: [
          /* @__PURE__ */ c(ze, { icon: Ja, color: "critical" }),
          /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-critical", children: l })
        ]
      }
    ) : null;
  }
);
Ts.displayName = "FormMessage";
const Qc = vt(
  function({
    isActionBar: e,
    isDirty: t,
    actionBarStatus: r,
    hasErrors: s,
    errorCount: i,
    resolvedActionBarLabel: o,
    submitLabel: a,
    submitIcon: l,
    discardableChanges: u,
    discardLabel: d,
    discardIcon: f,
    issuesOneLabel: h,
    issuesOtherLabel: m,
    onSubmit: g,
    onDiscard: y,
    goToPreviousError: p,
    goToNextError: b
  }, v) {
    return e ? /* @__PURE__ */ c(
      ri,
      {
        ref: v,
        isOpen: t || r === "loading" || r === "success",
        variant: "light",
        status: s ? void 0 : r,
        label: o,
        leftContent: s ? /* @__PURE__ */ T("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ T("div", { className: "flex items-center gap-0.5", children: [
            /* @__PURE__ */ c(ze, { icon: Ja, size: "md", color: "critical" }),
            /* @__PURE__ */ c("span", { className: "font-medium text-f1-foreground-critical", children: i === 1 ? h.replace("{{count}}", String(i)) : m.replace(
              "{{count}}",
              String(i)
            ) })
          ] }),
          i > 1 && /* @__PURE__ */ T("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ c(
              Be,
              {
                icon: pu,
                onClick: p,
                variant: "outline",
                label: "Go to previous error",
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ c(
              Be,
              {
                icon: $r,
                onClick: b,
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
            disabled: s
          }
        ],
        secondaryActions: u ? [
          {
            label: d,
            icon: f,
            onClick: y
          }
        ] : []
      }
    ) : /* @__PURE__ */ c(
      ri,
      {
        ref: v,
        isOpen: r === "loading" || r === "success",
        variant: "light",
        status: r,
        label: o
      }
    );
  }
);
Qc.displayName = "FormActionBar";
const ra = (n, e, t) => {
  if (n && "reportValidity" in n) {
    const r = J(t, e);
    n.setCustomValidity(r && r.message || ""), n.reportValidity();
  }
}, Kc = (n, e) => {
  for (const t in e.fields) {
    const r = e.fields[t];
    r && r.ref && "reportValidity" in r.ref ? ra(r.ref, t, n) : r.refs && r.refs.forEach((s) => ra(s, t, n));
  }
}, Vp = (n, e) => {
  e.shouldUseNativeValidation && Kc(n, e);
  const t = {};
  for (const r in n) {
    const s = J(e.fields, r), i = Object.assign(n[r] || {}, { ref: s && s.ref });
    if ($p(e.names || Object.keys(n), r)) {
      const o = Object.assign({}, J(t, r));
      Te(o, "root", i), Te(t, r, o);
    } else Te(t, r, i);
  }
  return t;
}, $p = (n, e) => n.some((t) => t.startsWith(e + "."));
var jp = function(n, e) {
  for (var t = {}; n.length; ) {
    var r = n[0], s = r.code, i = r.message, o = r.path.join(".");
    if (!t[o]) if ("unionErrors" in r) {
      var a = r.unionErrors[0].errors[0];
      t[o] = { message: a.message, type: a.code };
    } else t[o] = { message: i, type: s };
    if ("unionErrors" in r && r.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(f) {
        return n.push(f);
      });
    }), e) {
      var l = t[o].types, u = l && l[r.code];
      t[o] = Ic(o, e, t, s, u ? [].concat(u, r.message) : r.message);
    }
    n.shift();
  }
  return t;
}, Hp = function(n, e, t) {
  return t === void 0 && (t = {}), function(r, s, i) {
    try {
      return Promise.resolve((function(o, a) {
        try {
          var l = Promise.resolve(n[t.mode === "sync" ? "parse" : "parseAsync"](r, e)).then(function(u) {
            return i.shouldUseNativeValidation && Kc({}, i), { errors: {}, values: t.raw ? r : u };
          });
        } catch (u) {
          return a(u);
        }
        return l && l.then ? l.then(void 0, a) : l;
      })(0, function(o) {
        if ((function(a) {
          return Array.isArray(a?.errors);
        })(o)) return { values: {}, errors: Vp(jp(o.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
}, Ne;
(function(n) {
  n.assertEqual = (s) => {
  };
  function e(s) {
  }
  n.assertIs = e;
  function t(s) {
    throw new Error();
  }
  n.assertNever = t, n.arrayToEnum = (s) => {
    const i = {};
    for (const o of s)
      i[o] = o;
    return i;
  }, n.getValidEnumValues = (s) => {
    const i = n.objectKeys(s).filter((a) => typeof s[s[a]] != "number"), o = {};
    for (const a of i)
      o[a] = s[a];
    return n.objectValues(o);
  }, n.objectValues = (s) => n.objectKeys(s).map(function(i) {
    return s[i];
  }), n.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const i = [];
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
    return i;
  }, n.find = (s, i) => {
    for (const o of s)
      if (i(o))
        return o;
  }, n.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function r(s, i = " | ") {
    return s.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  n.joinValues = r, n.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(Ne || (Ne = {}));
var sa;
(function(n) {
  n.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(sa || (sa = {}));
const ie = Ne.arrayToEnum([
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
]), sn = (n) => {
  switch (typeof n) {
    case "undefined":
      return ie.undefined;
    case "string":
      return ie.string;
    case "number":
      return Number.isNaN(n) ? ie.nan : ie.number;
    case "boolean":
      return ie.boolean;
    case "function":
      return ie.function;
    case "bigint":
      return ie.bigint;
    case "symbol":
      return ie.symbol;
    case "object":
      return Array.isArray(n) ? ie.array : n === null ? ie.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? ie.promise : typeof Map < "u" && n instanceof Map ? ie.map : typeof Set < "u" && n instanceof Set ? ie.set : typeof Date < "u" && n instanceof Date ? ie.date : ie.object;
    default:
      return ie.unknown;
  }
}, q = Ne.arrayToEnum([
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
class Xt extends Error {
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
    const t = e || function(i) {
      return i.message;
    }, r = { _errors: [] }, s = (i) => {
      for (const o of i.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(s);
        else if (o.code === "invalid_return_type")
          s(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          s(o.argumentsError);
        else if (o.path.length === 0)
          r._errors.push(t(o));
        else {
          let a = r, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (a[u] = a[u] || { _errors: [] }, a[u]._errors.push(t(o))) : a[u] = a[u] || { _errors: [] }, a = a[u], l++;
          }
        }
    };
    return s(this), r;
  }
  static assert(e) {
    if (!(e instanceof Xt))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ne.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, r = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const i = s.path[0];
        t[i] = t[i] || [], t[i].push(e(s));
      } else
        r.push(e(s));
    return { formErrors: r, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
Xt.create = (n) => new Xt(n);
const fi = (n, e) => {
  let t;
  switch (n.code) {
    case q.invalid_type:
      n.received === ie.undefined ? t = "Required" : t = `Expected ${n.expected}, received ${n.received}`;
      break;
    case q.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(n.expected, Ne.jsonStringifyReplacer)}`;
      break;
    case q.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${Ne.joinValues(n.keys, ", ")}`;
      break;
    case q.invalid_union:
      t = "Invalid input";
      break;
    case q.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${Ne.joinValues(n.options)}`;
      break;
    case q.invalid_enum_value:
      t = `Invalid enum value. Expected ${Ne.joinValues(n.options)}, received '${n.received}'`;
      break;
    case q.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case q.invalid_return_type:
      t = "Invalid function return type";
      break;
    case q.invalid_date:
      t = "Invalid date";
      break;
    case q.invalid_string:
      typeof n.validation == "object" ? "includes" in n.validation ? (t = `Invalid input: must include "${n.validation.includes}"`, typeof n.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith" in n.validation ? t = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith" in n.validation ? t = `Invalid input: must end with "${n.validation.endsWith}"` : Ne.assertNever(n.validation) : n.validation !== "regex" ? t = `Invalid ${n.validation}` : t = "Invalid";
      break;
    case q.too_small:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "bigint" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : t = "Invalid input";
      break;
    case q.too_big:
      n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : t = "Invalid input";
      break;
    case q.custom:
      t = "Invalid input";
      break;
    case q.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case q.not_multiple_of:
      t = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case q.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, Ne.assertNever(n);
  }
  return { message: t };
};
let Wp = fi;
function qp() {
  return Wp;
}
const Up = (n) => {
  const { data: e, path: t, errorMaps: r, issueData: s } = n, i = [...t, ...s.path || []], o = {
    ...s,
    path: i
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: i,
      message: s.message
    };
  let a = "";
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    a = u(o, { data: e, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: a
  };
};
function te(n, e) {
  const t = qp(), r = Up({
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
      t === fi ? void 0 : fi
      // then global default map
    ].filter((s) => !!s)
  });
  n.common.issues.push(r);
}
class kt {
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
    for (const s of t) {
      if (s.status === "aborted")
        return ye;
      s.status === "dirty" && e.dirty(), r.push(s.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, t) {
    const r = [];
    for (const s of t) {
      const i = await s.key, o = await s.value;
      r.push({
        key: i,
        value: o
      });
    }
    return kt.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, t) {
    const r = {};
    for (const s of t) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted")
        return ye;
      i.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), i.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (r[i.value] = o.value);
    }
    return { status: e.value, value: r };
  }
}
const ye = Object.freeze({
  status: "aborted"
}), Kn = (n) => ({ status: "dirty", value: n }), At = (n) => ({ status: "valid", value: n }), ia = (n) => n.status === "aborted", oa = (n) => n.status === "dirty", On = (n) => n.status === "valid", ls = (n) => typeof Promise < "u" && n instanceof Promise;
var le;
(function(n) {
  n.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, n.toString = (e) => typeof e == "string" ? e : e?.message;
})(le || (le = {}));
class dn {
  constructor(e, t, r, s) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const aa = (n, e) => {
  if (On(e))
    return { success: !0, data: e.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Xt(n.common.issues);
      return this._error = t, this._error;
    }
  };
};
function we(n) {
  if (!n)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: r, description: s } = n;
  if (e && (t || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (o, a) => {
    const { message: l } = n;
    return o.code === "invalid_enum_value" ? { message: l ?? a.defaultError } : typeof a.data > "u" ? { message: l ?? r ?? a.defaultError } : o.code !== "invalid_type" ? { message: a.defaultError } : { message: l ?? t ?? a.defaultError };
  }, description: s };
}
class ke {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return sn(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: sn(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new kt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: sn(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (ls(t))
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
      parsedType: sn(e)
    }, s = this._parseSync({ data: e, path: r.path, parent: r });
    return aa(r, s);
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
      parsedType: sn(e)
    };
    if (!this["~standard"].async)
      try {
        const r = this._parseSync({ data: e, path: [], parent: t });
        return On(r) ? {
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
    return this._parseAsync({ data: e, path: [], parent: t }).then((r) => On(r) ? {
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
      parsedType: sn(e)
    }, s = this._parse({ data: e, path: r.path, parent: r }), i = await (ls(s) ? s : Promise.resolve(s));
    return aa(r, i);
  }
  refine(e, t) {
    const r = (s) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(s) : t;
    return this._refinement((s, i) => {
      const o = e(s), a = () => i.addIssue({
        code: q.custom,
        ...r(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((r, s) => e(r) ? !0 : (s.addIssue(typeof t == "function" ? t(r, s) : t), !1));
  }
  _refinement(e) {
    return new Mn({
      schema: this,
      typeName: K.ZodEffects,
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
    return ln.create(this, this._def);
  }
  nullable() {
    return Pn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ut.create(this);
  }
  promise() {
    return us.create(this, this._def);
  }
  or(e) {
    return cs.create([this, e], this._def);
  }
  and(e) {
    return ds.create(this, e, this._def);
  }
  transform(e) {
    return new Mn({
      ...we(this._def),
      schema: this,
      typeName: K.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new vi({
      ...we(this._def),
      innerType: this,
      defaultValue: t,
      typeName: K.ZodDefault
    });
  }
  brand() {
    return new pg({
      typeName: K.ZodBranded,
      type: this,
      ...we(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new yi({
      ...we(this._def),
      innerType: this,
      catchValue: t,
      typeName: K.ZodCatch
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
    return co.create(this, e);
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
const Zp = /^c[^\s-]{8,}$/i, Gp = /^[0-9a-z]+$/, Qp = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Kp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Xp = /^[a-z0-9_-]{21}$/i, Yp = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Jp = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, eg = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, tg = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let qs;
const ng = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, rg = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, sg = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ig = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, og = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ag = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Xc = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", lg = new RegExp(`^${Xc}$`);
function Yc(n) {
  let e = "[0-5]\\d";
  n.precision ? e = `${e}\\.\\d{${n.precision}}` : n.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = n.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function cg(n) {
  return new RegExp(`^${Yc(n)}$`);
}
function dg(n) {
  let e = `${Xc}T${Yc(n)}`;
  const t = [];
  return t.push(n.local ? "Z?" : "Z"), n.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function ug(n, e) {
  return !!((e === "v4" || !e) && ng.test(n) || (e === "v6" || !e) && sg.test(n));
}
function fg(n, e) {
  if (!Yp.test(n))
    return !1;
  try {
    const [t] = n.split(".");
    if (!t)
      return !1;
    const r = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), s = JSON.parse(atob(r));
    return !(typeof s != "object" || s === null || "typ" in s && s?.typ !== "JWT" || !s.alg || e && s.alg !== e);
  } catch {
    return !1;
  }
}
function hg(n, e) {
  return !!((e === "v4" || !e) && rg.test(n) || (e === "v6" || !e) && ig.test(n));
}
class an extends ke {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ie.string) {
      const i = this._getOrReturnCtx(e);
      return te(i, {
        code: q.invalid_type,
        expected: ie.string,
        received: i.parsedType
      }), ye;
    }
    const r = new kt();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (s = this._getOrReturnCtx(e, s), te(s, {
          code: q.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (s = this._getOrReturnCtx(e, s), te(s, {
          code: q.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "length") {
        const o = e.data.length > i.value, a = e.data.length < i.value;
        (o || a) && (s = this._getOrReturnCtx(e, s), o ? te(s, {
          code: q.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && te(s, {
          code: q.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), r.dirty());
      } else if (i.kind === "email")
        eg.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
          validation: "email",
          code: q.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "emoji")
        qs || (qs = new RegExp(tg, "u")), qs.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
          validation: "emoji",
          code: q.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "uuid")
        Kp.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
          validation: "uuid",
          code: q.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "nanoid")
        Xp.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
          validation: "nanoid",
          code: q.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid")
        Zp.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
          validation: "cuid",
          code: q.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid2")
        Gp.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
          validation: "cuid2",
          code: q.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "ulid")
        Qp.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
          validation: "ulid",
          code: q.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), te(s, {
            validation: "url",
            code: q.invalid_string,
            message: i.message
          }), r.dirty();
        }
      else i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
        validation: "regex",
        code: q.invalid_string,
        message: i.message
      }), r.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s), te(s, {
        code: q.invalid_string,
        validation: { includes: i.value, position: i.position },
        message: i.message
      }), r.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s), te(s, {
        code: q.invalid_string,
        validation: { startsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), te(s, {
        code: q.invalid_string,
        validation: { endsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "datetime" ? dg(i).test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
        code: q.invalid_string,
        validation: "datetime",
        message: i.message
      }), r.dirty()) : i.kind === "date" ? lg.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
        code: q.invalid_string,
        validation: "date",
        message: i.message
      }), r.dirty()) : i.kind === "time" ? cg(i).test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
        code: q.invalid_string,
        validation: "time",
        message: i.message
      }), r.dirty()) : i.kind === "duration" ? Jp.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
        validation: "duration",
        code: q.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "ip" ? ug(e.data, i.version) || (s = this._getOrReturnCtx(e, s), te(s, {
        validation: "ip",
        code: q.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "jwt" ? fg(e.data, i.alg) || (s = this._getOrReturnCtx(e, s), te(s, {
        validation: "jwt",
        code: q.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "cidr" ? hg(e.data, i.version) || (s = this._getOrReturnCtx(e, s), te(s, {
        validation: "cidr",
        code: q.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "base64" ? og.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
        validation: "base64",
        code: q.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "base64url" ? ag.test(e.data) || (s = this._getOrReturnCtx(e, s), te(s, {
        validation: "base64url",
        code: q.invalid_string,
        message: i.message
      }), r.dirty()) : Ne.assertNever(i);
    return { status: r.value, value: e.data };
  }
  _regex(e, t, r) {
    return this.refinement((s) => e.test(s), {
      validation: t,
      code: q.invalid_string,
      ...le.errToObj(r)
    });
  }
  _addCheck(e) {
    return new an({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...le.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...le.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...le.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...le.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...le.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...le.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...le.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...le.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...le.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...le.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...le.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...le.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...le.errToObj(e) });
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
      ...le.errToObj(e?.message)
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
      ...le.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...le.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...le.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...le.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...le.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...le.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...le.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...le.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...le.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, le.errToObj(e));
  }
  trim() {
    return new an({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new an({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new an({
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
an.create = (n) => new an({
  checks: [],
  typeName: K.ZodString,
  coerce: n?.coerce ?? !1,
  ...we(n)
});
function mg(n, e) {
  const t = (n.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, s = t > r ? t : r, i = Number.parseInt(n.toFixed(s).replace(".", "")), o = Number.parseInt(e.toFixed(s).replace(".", ""));
  return i % o / 10 ** s;
}
class In extends ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ie.number) {
      const i = this._getOrReturnCtx(e);
      return te(i, {
        code: q.invalid_type,
        expected: ie.number,
        received: i.parsedType
      }), ye;
    }
    let r;
    const s = new kt();
    for (const i of this._def.checks)
      i.kind === "int" ? Ne.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), te(r, {
        code: q.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), te(r, {
        code: q.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), te(r, {
        code: q.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? mg(e.data, i.value) !== 0 && (r = this._getOrReturnCtx(e, r), te(r, {
        code: q.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), te(r, {
        code: q.not_finite,
        message: i.message
      }), s.dirty()) : Ne.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, le.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, le.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, le.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, le.toString(t));
  }
  setLimit(e, t, r, s) {
    return new In({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: le.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new In({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: le.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: le.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: le.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: le.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: le.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: le.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: le.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: le.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: le.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Ne.isInteger(e.value));
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
In.create = (n) => new In({
  checks: [],
  typeName: K.ZodNumber,
  coerce: n?.coerce || !1,
  ...we(n)
});
class hr extends ke {
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
    if (this._getType(e) !== ie.bigint)
      return this._getInvalidInput(e);
    let r;
    const s = new kt();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), te(r, {
        code: q.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), te(r, {
        code: q.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), te(r, {
        code: q.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Ne.assertNever(i);
    return { status: s.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return te(t, {
      code: q.invalid_type,
      expected: ie.bigint,
      received: t.parsedType
    }), ye;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, le.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, le.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, le.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, le.toString(t));
  }
  setLimit(e, t, r, s) {
    return new hr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: le.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new hr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: le.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: le.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: le.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: le.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: le.toString(t)
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
hr.create = (n) => new hr({
  checks: [],
  typeName: K.ZodBigInt,
  coerce: n?.coerce ?? !1,
  ...we(n)
});
class hi extends ke {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ie.boolean) {
      const r = this._getOrReturnCtx(e);
      return te(r, {
        code: q.invalid_type,
        expected: ie.boolean,
        received: r.parsedType
      }), ye;
    }
    return At(e.data);
  }
}
hi.create = (n) => new hi({
  typeName: K.ZodBoolean,
  coerce: n?.coerce || !1,
  ...we(n)
});
class mr extends ke {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ie.date) {
      const i = this._getOrReturnCtx(e);
      return te(i, {
        code: q.invalid_type,
        expected: ie.date,
        received: i.parsedType
      }), ye;
    }
    if (Number.isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return te(i, {
        code: q.invalid_date
      }), ye;
    }
    const r = new kt();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s), te(s, {
        code: q.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), te(s, {
        code: q.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), r.dirty()) : Ne.assertNever(i);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new mr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: le.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: le.toString(t)
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
mr.create = (n) => new mr({
  checks: [],
  coerce: n?.coerce || !1,
  typeName: K.ZodDate,
  ...we(n)
});
class la extends ke {
  _parse(e) {
    if (this._getType(e) !== ie.symbol) {
      const r = this._getOrReturnCtx(e);
      return te(r, {
        code: q.invalid_type,
        expected: ie.symbol,
        received: r.parsedType
      }), ye;
    }
    return At(e.data);
  }
}
la.create = (n) => new la({
  typeName: K.ZodSymbol,
  ...we(n)
});
class ca extends ke {
  _parse(e) {
    if (this._getType(e) !== ie.undefined) {
      const r = this._getOrReturnCtx(e);
      return te(r, {
        code: q.invalid_type,
        expected: ie.undefined,
        received: r.parsedType
      }), ye;
    }
    return At(e.data);
  }
}
ca.create = (n) => new ca({
  typeName: K.ZodUndefined,
  ...we(n)
});
class da extends ke {
  _parse(e) {
    if (this._getType(e) !== ie.null) {
      const r = this._getOrReturnCtx(e);
      return te(r, {
        code: q.invalid_type,
        expected: ie.null,
        received: r.parsedType
      }), ye;
    }
    return At(e.data);
  }
}
da.create = (n) => new da({
  typeName: K.ZodNull,
  ...we(n)
});
class mi extends ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return At(e.data);
  }
}
mi.create = (n) => new mi({
  typeName: K.ZodAny,
  ...we(n)
});
class pi extends ke {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return At(e.data);
  }
}
pi.create = (n) => new pi({
  typeName: K.ZodUnknown,
  ...we(n)
});
class un extends ke {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return te(t, {
      code: q.invalid_type,
      expected: ie.never,
      received: t.parsedType
    }), ye;
  }
}
un.create = (n) => new un({
  typeName: K.ZodNever,
  ...we(n)
});
class ua extends ke {
  _parse(e) {
    if (this._getType(e) !== ie.undefined) {
      const r = this._getOrReturnCtx(e);
      return te(r, {
        code: q.invalid_type,
        expected: ie.void,
        received: r.parsedType
      }), ye;
    }
    return At(e.data);
  }
}
ua.create = (n) => new ua({
  typeName: K.ZodVoid,
  ...we(n)
});
class Ut extends ke {
  _parse(e) {
    const { ctx: t, status: r } = this._processInputParams(e), s = this._def;
    if (t.parsedType !== ie.array)
      return te(t, {
        code: q.invalid_type,
        expected: ie.array,
        received: t.parsedType
      }), ye;
    if (s.exactLength !== null) {
      const o = t.data.length > s.exactLength.value, a = t.data.length < s.exactLength.value;
      (o || a) && (te(t, {
        code: o ? q.too_big : q.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty());
    }
    if (s.minLength !== null && t.data.length < s.minLength.value && (te(t, {
      code: q.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), r.dirty()), s.maxLength !== null && t.data.length > s.maxLength.value && (te(t, {
      code: q.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), r.dirty()), t.common.async)
      return Promise.all([...t.data].map((o, a) => s.type._parseAsync(new dn(t, o, t.path, a)))).then((o) => kt.mergeArray(r, o));
    const i = [...t.data].map((o, a) => s.type._parseSync(new dn(t, o, t.path, a)));
    return kt.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Ut({
      ...this._def,
      minLength: { value: e, message: le.toString(t) }
    });
  }
  max(e, t) {
    return new Ut({
      ...this._def,
      maxLength: { value: e, message: le.toString(t) }
    });
  }
  length(e, t) {
    return new Ut({
      ...this._def,
      exactLength: { value: e, message: le.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ut.create = (n, e) => new Ut({
  type: n,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: K.ZodArray,
  ...we(e)
});
function En(n) {
  if (n instanceof Ue) {
    const e = {};
    for (const t in n.shape) {
      const r = n.shape[t];
      e[t] = ln.create(En(r));
    }
    return new Ue({
      ...n._def,
      shape: () => e
    });
  } else return n instanceof Ut ? new Ut({
    ...n._def,
    type: En(n.element)
  }) : n instanceof ln ? ln.create(En(n.unwrap())) : n instanceof Pn ? Pn.create(En(n.unwrap())) : n instanceof bn ? bn.create(n.items.map((e) => En(e))) : n;
}
class Ue extends ke {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = Ne.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== ie.object) {
      const u = this._getOrReturnCtx(e);
      return te(u, {
        code: q.invalid_type,
        expected: ie.object,
        received: u.parsedType
      }), ye;
    }
    const { status: r, ctx: s } = this._processInputParams(e), { shape: i, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof un && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        o.includes(u) || a.push(u);
    const l = [];
    for (const u of o) {
      const d = i[u], f = s.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: d._parse(new dn(s, f, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof un) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const d of a)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] }
          });
      else if (u === "strict")
        a.length > 0 && (te(s, {
          code: q.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const d of a) {
        const f = s.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: u._parse(
            new dn(s, f, s.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const d of l) {
        const f = await d.key, h = await d.value;
        u.push({
          key: f,
          value: h,
          alwaysSet: d.alwaysSet
        });
      }
      return u;
    }).then((u) => kt.mergeObjectSync(r, u)) : kt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return le.errToObj, new Ue({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, r) => {
          const s = this._def.errorMap?.(t, r).message ?? r.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: le.errToObj(e).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new Ue({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ue({
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
    return new Ue({
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
    return new Ue({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: K.ZodObject
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
    return new Ue({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const r of Ne.objectKeys(e))
      e[r] && this.shape[r] && (t[r] = this.shape[r]);
    return new Ue({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const r of Ne.objectKeys(this.shape))
      e[r] || (t[r] = this.shape[r]);
    return new Ue({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return En(this);
  }
  partial(e) {
    const t = {};
    for (const r of Ne.objectKeys(this.shape)) {
      const s = this.shape[r];
      e && !e[r] ? t[r] = s : t[r] = s.optional();
    }
    return new Ue({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const r of Ne.objectKeys(this.shape))
      if (e && !e[r])
        t[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof ln; )
          i = i._def.innerType;
        t[r] = i;
      }
    return new Ue({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Jc(Ne.objectKeys(this.shape));
  }
}
Ue.create = (n, e) => new Ue({
  shape: () => n,
  unknownKeys: "strip",
  catchall: un.create(),
  typeName: K.ZodObject,
  ...we(e)
});
Ue.strictCreate = (n, e) => new Ue({
  shape: () => n,
  unknownKeys: "strict",
  catchall: un.create(),
  typeName: K.ZodObject,
  ...we(e)
});
Ue.lazycreate = (n, e) => new Ue({
  shape: n,
  unknownKeys: "strip",
  catchall: un.create(),
  typeName: K.ZodObject,
  ...we(e)
});
class cs extends ke {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new Xt(a.ctx.common.issues));
      return te(t, {
        code: q.invalid_union,
        unionErrors: o
      }), ye;
    }
    if (t.common.async)
      return Promise.all(r.map(async (i) => {
        const o = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: t.data,
            path: t.path,
            parent: o
          }),
          ctx: o
        };
      })).then(s);
    {
      let i;
      const o = [];
      for (const l of r) {
        const u = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, d = l._parseSync({
          data: t.data,
          path: t.path,
          parent: u
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !i && (i = { result: d, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (i)
        return t.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new Xt(l));
      return te(t, {
        code: q.invalid_union,
        unionErrors: a
      }), ye;
    }
  }
  get options() {
    return this._def.options;
  }
}
cs.create = (n, e) => new cs({
  options: n,
  typeName: K.ZodUnion,
  ...we(e)
});
function gi(n, e) {
  const t = sn(n), r = sn(e);
  if (n === e)
    return { valid: !0, data: n };
  if (t === ie.object && r === ie.object) {
    const s = Ne.objectKeys(e), i = Ne.objectKeys(n).filter((a) => s.indexOf(a) !== -1), o = { ...n, ...e };
    for (const a of i) {
      const l = gi(n[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (t === ie.array && r === ie.array) {
    if (n.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < n.length; i++) {
      const o = n[i], a = e[i], l = gi(o, a);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return t === ie.date && r === ie.date && +n == +e ? { valid: !0, data: n } : { valid: !1 };
}
class ds extends ke {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), s = (i, o) => {
      if (ia(i) || ia(o))
        return ye;
      const a = gi(i.value, o.value);
      return a.valid ? ((oa(i) || oa(o)) && t.dirty(), { status: t.value, value: a.data }) : (te(r, {
        code: q.invalid_intersection_types
      }), ye);
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
    ]).then(([i, o]) => s(i, o)) : s(this._def.left._parseSync({
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
ds.create = (n, e, t) => new ds({
  left: n,
  right: e,
  typeName: K.ZodIntersection,
  ...we(t)
});
class bn extends ke {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ie.array)
      return te(r, {
        code: q.invalid_type,
        expected: ie.array,
        received: r.parsedType
      }), ye;
    if (r.data.length < this._def.items.length)
      return te(r, {
        code: q.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ye;
    !this._def.rest && r.data.length > this._def.items.length && (te(r, {
      code: q.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const i = [...r.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new dn(r, o, r.path, a)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(i).then((o) => kt.mergeArray(t, o)) : kt.mergeArray(t, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new bn({
      ...this._def,
      rest: e
    });
  }
}
bn.create = (n, e) => {
  if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new bn({
    items: n,
    typeName: K.ZodTuple,
    rest: null,
    ...we(e)
  });
};
class fa extends ke {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ie.map)
      return te(r, {
        code: q.invalid_type,
        expected: ie.map,
        received: r.parsedType
      }), ye;
    const s = this._def.keyType, i = this._def.valueType, o = [...r.data.entries()].map(([a, l], u) => ({
      key: s._parse(new dn(r, a, r.path, [u, "key"])),
      value: i._parse(new dn(r, l, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, d = await l.value;
          if (u.status === "aborted" || d.status === "aborted")
            return ye;
          (u.status === "dirty" || d.status === "dirty") && t.dirty(), a.set(u.value, d.value);
        }
        return { status: t.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, d = l.value;
        if (u.status === "aborted" || d.status === "aborted")
          return ye;
        (u.status === "dirty" || d.status === "dirty") && t.dirty(), a.set(u.value, d.value);
      }
      return { status: t.value, value: a };
    }
  }
}
fa.create = (n, e, t) => new fa({
  valueType: e,
  keyType: n,
  typeName: K.ZodMap,
  ...we(t)
});
class pr extends ke {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ie.set)
      return te(r, {
        code: q.invalid_type,
        expected: ie.set,
        received: r.parsedType
      }), ye;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (te(r, {
      code: q.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), t.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (te(r, {
      code: q.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), t.dirty());
    const i = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return ye;
        d.status === "dirty" && t.dirty(), u.add(d.value);
      }
      return { status: t.value, value: u };
    }
    const a = [...r.data.values()].map((l, u) => i._parse(new dn(r, l, r.path, u)));
    return r.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, t) {
    return new pr({
      ...this._def,
      minSize: { value: e, message: le.toString(t) }
    });
  }
  max(e, t) {
    return new pr({
      ...this._def,
      maxSize: { value: e, message: le.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
pr.create = (n, e) => new pr({
  valueType: n,
  minSize: null,
  maxSize: null,
  typeName: K.ZodSet,
  ...we(e)
});
class ha extends ke {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
ha.create = (n, e) => new ha({
  getter: n,
  typeName: K.ZodLazy,
  ...we(e)
});
class ma extends ke {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return te(t, {
        received: t.data,
        code: q.invalid_literal,
        expected: this._def.value
      }), ye;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ma.create = (n, e) => new ma({
  value: n,
  typeName: K.ZodLiteral,
  ...we(e)
});
function Jc(n, e) {
  return new Ln({
    values: n,
    typeName: K.ZodEnum,
    ...we(e)
  });
}
class Ln extends ke {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return te(t, {
        expected: Ne.joinValues(r),
        received: t.parsedType,
        code: q.invalid_type
      }), ye;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return te(t, {
        received: t.data,
        code: q.invalid_enum_value,
        options: r
      }), ye;
    }
    return At(e.data);
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
    return Ln.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return Ln.create(this.options.filter((r) => !e.includes(r)), {
      ...this._def,
      ...t
    });
  }
}
Ln.create = Jc;
class pa extends ke {
  _parse(e) {
    const t = Ne.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== ie.string && r.parsedType !== ie.number) {
      const s = Ne.objectValues(t);
      return te(r, {
        expected: Ne.joinValues(s),
        received: r.parsedType,
        code: q.invalid_type
      }), ye;
    }
    if (this._cache || (this._cache = new Set(Ne.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const s = Ne.objectValues(t);
      return te(r, {
        received: r.data,
        code: q.invalid_enum_value,
        options: s
      }), ye;
    }
    return At(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
pa.create = (n, e) => new pa({
  values: n,
  typeName: K.ZodNativeEnum,
  ...we(e)
});
class us extends ke {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== ie.promise && t.common.async === !1)
      return te(t, {
        code: q.invalid_type,
        expected: ie.promise,
        received: t.parsedType
      }), ye;
    const r = t.parsedType === ie.promise ? t.data : Promise.resolve(t.data);
    return At(r.then((s) => this._def.type.parseAsync(s, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
us.create = (n, e) => new us({
  type: n,
  typeName: K.ZodPromise,
  ...we(e)
});
class Mn extends ke {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === K.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), s = this._def.effect || null, i = {
      addIssue: (o) => {
        te(r, o), o.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "preprocess") {
      const o = s.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (t.value === "aborted")
            return ye;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? ye : l.status === "dirty" || t.value === "dirty" ? Kn(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return ye;
        const a = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? ye : a.status === "dirty" || t.value === "dirty" ? Kn(a.value) : a;
      }
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const l = s.refinement(a, i);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? ye : (a.status === "dirty" && t.dirty(), o(a.value), { status: t.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? ye : (a.status === "dirty" && t.dirty(), o(a.value).then(() => ({ status: t.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!On(o))
          return ye;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => On(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({
          status: t.value,
          value: a
        })) : ye);
    Ne.assertNever(s);
  }
}
Mn.create = (n, e, t) => new Mn({
  schema: n,
  typeName: K.ZodEffects,
  effect: e,
  ...we(t)
});
Mn.createWithPreprocess = (n, e, t) => new Mn({
  schema: e,
  effect: { type: "preprocess", transform: n },
  typeName: K.ZodEffects,
  ...we(t)
});
class ln extends ke {
  _parse(e) {
    return this._getType(e) === ie.undefined ? At(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ln.create = (n, e) => new ln({
  innerType: n,
  typeName: K.ZodOptional,
  ...we(e)
});
class Pn extends ke {
  _parse(e) {
    return this._getType(e) === ie.null ? At(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Pn.create = (n, e) => new Pn({
  innerType: n,
  typeName: K.ZodNullable,
  ...we(e)
});
class vi extends ke {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let r = t.data;
    return t.parsedType === ie.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
vi.create = (n, e) => new vi({
  innerType: n,
  typeName: K.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...we(e)
});
class yi extends ke {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return ls(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Xt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Xt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
yi.create = (n, e) => new yi({
  innerType: n,
  typeName: K.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...we(e)
});
class ga extends ke {
  _parse(e) {
    if (this._getType(e) !== ie.nan) {
      const r = this._getOrReturnCtx(e);
      return te(r, {
        code: q.invalid_type,
        expected: ie.nan,
        received: r.parsedType
      }), ye;
    }
    return { status: "valid", value: e.data };
  }
}
ga.create = (n) => new ga({
  typeName: K.ZodNaN,
  ...we(n)
});
class pg extends ke {
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
class co extends ke {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? ye : i.status === "dirty" ? (t.dirty(), Kn(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return s.status === "aborted" ? ye : s.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, t) {
    return new co({
      in: e,
      out: t,
      typeName: K.ZodPipeline
    });
  }
}
class bi extends ke {
  _parse(e) {
    const t = this._def.innerType._parse(e), r = (s) => (On(s) && (s.value = Object.freeze(s.value)), s);
    return ls(t) ? t.then((s) => r(s)) : r(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
bi.create = (n, e) => new bi({
  innerType: n,
  typeName: K.ZodReadonly,
  ...we(e)
});
var K;
(function(n) {
  n.ZodString = "ZodString", n.ZodNumber = "ZodNumber", n.ZodNaN = "ZodNaN", n.ZodBigInt = "ZodBigInt", n.ZodBoolean = "ZodBoolean", n.ZodDate = "ZodDate", n.ZodSymbol = "ZodSymbol", n.ZodUndefined = "ZodUndefined", n.ZodNull = "ZodNull", n.ZodAny = "ZodAny", n.ZodUnknown = "ZodUnknown", n.ZodNever = "ZodNever", n.ZodVoid = "ZodVoid", n.ZodArray = "ZodArray", n.ZodObject = "ZodObject", n.ZodUnion = "ZodUnion", n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", n.ZodIntersection = "ZodIntersection", n.ZodTuple = "ZodTuple", n.ZodRecord = "ZodRecord", n.ZodMap = "ZodMap", n.ZodSet = "ZodSet", n.ZodFunction = "ZodFunction", n.ZodLazy = "ZodLazy", n.ZodLiteral = "ZodLiteral", n.ZodEnum = "ZodEnum", n.ZodEffects = "ZodEffects", n.ZodNativeEnum = "ZodNativeEnum", n.ZodOptional = "ZodOptional", n.ZodNullable = "ZodNullable", n.ZodDefault = "ZodDefault", n.ZodCatch = "ZodCatch", n.ZodPromise = "ZodPromise", n.ZodBranded = "ZodBranded", n.ZodPipeline = "ZodPipeline", n.ZodReadonly = "ZodReadonly";
})(K || (K = {}));
const Rs = an.create, gg = In.create, vg = hi.create, yg = mr.create, bg = mi.create, xg = pi.create;
un.create;
const ed = Ut.create, uo = Ue.create;
cs.create;
ds.create;
bn.create;
Ln.create;
us.create;
ln.create;
Pn.create;
function Me(n, e) {
  return n._def?.typeName === e;
}
function mn(n) {
  return Me(n, "ZodEffects") ? n._def.schema : n;
}
const td = /* @__PURE__ */ new WeakMap();
function Ct(n, e) {
  td.set(n, e);
  const t = n;
  return t._f0Config = e, t._innerSchema = n, t;
}
function pn(n) {
  const e = n;
  return e._f0Config ? e._f0Config : td.get(n);
}
function Tx(n) {
  return pn(n) !== void 0;
}
function lt(n) {
  let e = n;
  for (; Me(e, "ZodOptional") || Me(e, "ZodNullable") || Me(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function nd(n, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options || "source" in e && e.source)
    return "select";
  const t = lt(n);
  return Me(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : Me(t, "ZodNumber") ? "number" : Me(t, "ZodBoolean") ? "switch" : Me(t, "ZodDate") ? "date" : Me(t, "ZodEnum") || Me(t, "ZodArray") && ("options" in e && e.options || "source" in e && e.source) ? "select" : Me(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function wg(n, e) {
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
function As(n, e) {
  return typeof n == "function" ? n({ values: e }) : wg(n, e);
}
function fo(n, e) {
  return n === void 0 ? !1 : typeof n == "function" ? n({ values: e }) : n;
}
function kn(n, e) {
  if (n !== void 0)
    return typeof n == "function" ? n({ values: e }) : n;
}
function rd(n, e) {
  return async (t, r, s) => {
    const i = _g(n, t), o = { ...t };
    for (const l of Object.keys(o))
      o[l] === null && (o[l] = void 0);
    return Hp(i, e)(o, r, s);
  };
}
function _g(n, e) {
  const r = mn(n).shape, s = {};
  for (const [o, a] of Object.entries(r)) {
    const l = pn(a);
    if (!l || !l.renderIf) {
      s[o] = a;
      continue;
    }
    As(l.renderIf, e) ? s[o] = a : s[o] = bg();
  }
  const i = uo(s);
  if (Me(n, "ZodEffects")) {
    const a = n._def.effect;
    if (a.type === "refinement")
      return i.superRefine(a.refinement);
  }
  return i;
}
const ho = "gap-4", sd = "mt-6", id = "max-w-[720px]", gn = "md", Fs = ct(null);
function mo() {
  const n = Je(Fs);
  if (!n)
    throw new Error("useF0FormContext must be used within a F0Form");
  return n;
}
function od() {
  return Je(Fs);
}
function xn(n, e, t) {
  const r = ["forms", n];
  return e && r.push(e), t && r.push(t), r.join(".");
}
const Sr = ct(void 0);
function Cg({
  field: n,
  formField: e
}) {
  const t = Je(Sr), r = n.options.map((s) => ({
    value: s.value,
    title: s.label,
    description: s.description,
    selectedContent: t?.get(s.value)
  }));
  return /* @__PURE__ */ c(
    Sl,
    {
      grouped: n.grouped !== !1,
      items: r,
      value: e.value,
      onChange: (s) => e.onChange(s),
      label: n.label,
      disabled: n.disabled
    }
  );
}
function Sg(n) {
  const e = lt(n);
  return Me(e, "ZodLiteral") && e._def.value === !0;
}
function kg({
  field: n,
  formField: e
}) {
  const t = n.validation && Sg(n.validation);
  return /* @__PURE__ */ c(
    ar,
    {
      ...e,
      title: n.label,
      disabled: n.disabled,
      required: t,
      checked: !!e.value,
      onCheckedChange: e.onChange
    }
  );
}
function Ng({
  field: n,
  formField: e,
  error: t,
  isValidating: r,
  required: s
}) {
  const o = od()?.renderCustomField, a = {
    id: n.id,
    label: n.label,
    placeholder: n.placeholder,
    value: e.value,
    onChange: e.onChange,
    onBlur: e.onBlur,
    error: t,
    isValidating: r,
    disabled: n.disabled,
    required: s,
    config: n.fieldConfig
  };
  if (n.customFieldName) {
    if (!o)
      throw new Error(
        `Custom field "${n.id}" has customFieldName "${n.customFieldName}" but no renderCustomField prop was provided to F0Form.`
      );
    return /* @__PURE__ */ c(Ye, { children: o({
      ...a,
      customFieldName: n.customFieldName,
      fieldType: "custom"
    }) });
  }
  if (!n.render)
    throw new Error(
      `Custom field "${n.id}" has neither a render function nor a customFieldName.`
    );
  return /* @__PURE__ */ c(Ye, { children: n.render(a) });
}
function Eg(n, e) {
  if (n)
    return {
      value: { from: n, to: n },
      granularity: e?.[0] ?? "day"
    };
}
function Dg(n) {
  return n?.value?.from;
}
function ad({
  field: n,
  formField: e,
  error: t,
  loading: r,
  status: s
}) {
  const i = H(
    () => Eg(
      e.value ?? void 0,
      n.granularities
    ),
    [e.value, n.granularities]
  ), o = (l) => {
    e.onChange(Dg(l) ?? null);
  }, a = (l) => {
    l || e.onBlur();
  };
  return /* @__PURE__ */ c(
    el,
    {
      label: n.label,
      placeholder: n.placeholder,
      disabled: n.disabled,
      granularities: n.granularities,
      minDate: n.minDate,
      maxDate: n.maxDate,
      presets: n.presets,
      clearable: n.clearable,
      value: i,
      onChange: o,
      onOpenChange: a,
      size: gn,
      hideLabel: !0,
      error: t,
      status: s,
      loading: r
    }
  );
}
function xi(n) {
  if (!n || !(n instanceof Date) || isNaN(n.getTime())) return "";
  const e = String(n.getHours()).padStart(2, "0"), t = String(n.getMinutes()).padStart(2, "0");
  return `${e}:${t}`;
}
function Tg(n) {
  if (!n) return;
  const [e, t] = n.split(":").map(Number);
  if (isNaN(e) || isNaN(t)) return;
  const r = /* @__PURE__ */ new Date();
  return r.setHours(e, t, 0, 0), r;
}
function Us(n, e) {
  if (!n) return;
  const t = new Date(n);
  if (e) {
    const [r, s, i] = e.split(":").map(Number);
    t.setHours(r ?? 0, s ?? 0, i ?? 0, 0);
  } else
    t.setHours(0, 0, 0, 0);
  return t;
}
function ld({
  field: n,
  formField: e,
  error: t,
  loading: r,
  status: s
}) {
  const i = H(
    () => xi(e.value ?? void 0),
    [e.value]
  ), o = B(
    (a) => {
      if (!a) {
        e.onChange(null), e.onBlur();
        return;
      }
      const l = Tg(a);
      e.onChange(l), e.onBlur();
    },
    [e]
  );
  return /* @__PURE__ */ c(
    Ai,
    {
      type: "time",
      label: n.label,
      disabled: n.disabled,
      value: i,
      onChange: o,
      size: gn,
      hideLabel: !0,
      error: t,
      status: s,
      loading: r,
      clearable: n.clearable,
      name: e.name,
      ref: e.ref,
      icon: gu
    }
  );
}
function Rg({
  field: n,
  formField: e,
  error: t,
  loading: r,
  status: s
}) {
  const i = e.value ?? void 0, o = H(() => xi(i), [i]), a = B(
    (m) => {
      if (!m) {
        e.onChange(null);
        return;
      }
      e.onChange(Us(m, o));
    },
    [e, o]
  ), l = B(
    (m) => {
      if (!m) {
        if (i) {
          const y = new Date(i);
          y.setHours(0, 0, 0, 0), e.onChange(y);
        }
        return;
      }
      const g = xi(m);
      if (!i) {
        const y = /* @__PURE__ */ new Date();
        y.setHours(0, 0, 0, 0), e.onChange(Us(y, g));
        return;
      }
      e.onChange(Us(i, g));
    },
    [e, i]
  ), u = H(
    () => ({
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
    }),
    [n]
  ), d = H(
    () => ({
      ...e,
      value: i,
      onChange: a
    }),
    [e, i, a]
  ), f = H(
    () => ({
      id: `${n.id}-time`,
      type: "time",
      label: "Time",
      disabled: n.disabled,
      clearable: !1
      // Time clearing is handled via date clear
    }),
    [n.id, n.disabled]
  ), h = H(
    () => ({
      ...e,
      value: i,
      onChange: l
    }),
    [e, i, l]
  );
  return /* @__PURE__ */ T("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ c("div", { className: "flex-1", children: /* @__PURE__ */ c(
      ad,
      {
        field: u,
        formField: d,
        error: t,
        status: s,
        loading: r
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "w-32", children: /* @__PURE__ */ c(
      ld,
      {
        field: f,
        formField: h,
        error: t,
        status: s,
        loading: r
      }
    ) })
  ] });
}
function Ag(n) {
  if (!(!n?.from || !n?.to))
    return {
      value: { from: n.from, to: n.to },
      granularity: "range"
    };
}
function Fg(n) {
  if (!(!n?.value?.from || !n?.value?.to))
    return {
      from: n.value.from,
      to: n.value.to
    };
}
function Og({
  field: n,
  formField: e,
  error: t,
  loading: r,
  status: s
}) {
  const i = H(
    () => Ag(
      e.value ?? void 0
    ),
    [e.value]
  ), o = (u) => {
    e.onChange(Fg(u) ?? null);
  }, a = (u) => {
    u || e.onBlur();
  }, l = n.fromLabel && n.toLabel ? `${n.label} (${n.fromLabel} - ${n.toLabel})` : n.label;
  return /* @__PURE__ */ c(
    el,
    {
      label: l,
      placeholder: n.placeholder,
      disabled: n.disabled,
      granularities: n.granularities ?? ["range"],
      minDate: n.minDate,
      maxDate: n.maxDate,
      presets: n.presets,
      clearable: n.clearable,
      value: i,
      onChange: o,
      onOpenChange: a,
      size: gn,
      hideLabel: !0,
      error: t,
      status: s,
      loading: r
    }
  );
}
function Ig({
  field: n,
  formField: e,
  error: t,
  status: r,
  id: s,
  "aria-describedby": i,
  "aria-invalid": o
}) {
  const a = typeof e.value == "number" && Number.isFinite(e.value) ? e.value : 0, l = r ?? (t ? { type: "error" } : void 0);
  return /* @__PURE__ */ c(
    yp,
    {
      id: s,
      "aria-describedby": i,
      "aria-invalid": o,
      label: n.label,
      hideLabel: !0,
      value: a,
      onChange: (u) => e.onChange(u),
      onBlur: e.onBlur,
      units: n.units,
      fields: n.fields,
      status: l,
      disabled: n.disabled,
      readonly: n.readonly,
      size: n.size
    }
  );
}
function Lg(n) {
  return n < 1024 ? `${n} B` : n < 1024 * 1024 ? `${(n / 1024).toFixed(1)} KB` : `${(n / (1024 * 1024)).toFixed(1)} MB`;
}
function Mg({
  entry: n,
  useUpload: e,
  onUploadComplete: t,
  onRemove: r,
  onError: s,
  disabled: i,
  translations: o
}) {
  const a = !!n.file, l = e?.(), u = l?.upload, d = l?.cancelUpload, f = l?.progress ?? 0, h = l?.status ?? "idle", [m, g] = ee(null), y = Z(!1), p = B(async () => {
    if (!(!a || !n.file || !u) && !y.current) {
      y.current = !0;
      try {
        const w = await u(n.file);
        w.type === "success" ? t(w.value) : r();
      } catch {
        const w = o.uploadFailed;
        g(w), s(w);
      }
    }
  }, [
    a,
    n.file,
    u,
    t,
    r,
    s,
    o
  ]);
  re(() => {
    a && p();
  }, [a, p]);
  const b = B(() => {
    a && (h === "uploading" || h === "processing") && d?.(), r();
  }, [a, h, d, r]), v = a && (h === "uploading" || h === "processing"), k = Math.round(f * 100), C = n.file ?? {
    name: n.initialFile?.name ?? "",
    type: n.initialFile?.type ?? ""
  }, x = n.file?.name ?? n.initialFile?.name ?? "", _ = n.file?.size ?? n.initialFile?.size;
  return /* @__PURE__ */ T(
    "div",
    {
      className: Y(
        "flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-2.5 py-2",
        m && "border-f1-border-critical"
      ),
      children: [
        /* @__PURE__ */ c(vu, { file: C, size: "md" }),
        /* @__PURE__ */ T("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [
          /* @__PURE__ */ c("span", { className: "truncate text-base font-medium text-f1-foreground", children: x }),
          /* @__PURE__ */ c("span", { className: "text-sm text-f1-foreground-secondary", children: m || (v ? h === "processing" ? o.processing : `${o.uploading} ${k}%` : _ != null ? Lg(_) : null) })
        ] }),
        !i && /* @__PURE__ */ c(
          Be,
          {
            variant: "ghost",
            size: "sm",
            label: o.remove,
            onClick: b,
            icon: yr,
            hideLabel: !0
          }
        )
      ]
    }
  );
}
const Pg = /* @__PURE__ */ new Set([
  "image",
  "video",
  "audio",
  "text",
  "application"
]);
function wi(n) {
  return Pg.has(n) ? `${n}/*` : n;
}
const va = {
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
}, ya = {
  "image/*": "Images",
  "video/*": "Videos",
  "audio/*": "Audio",
  "text/*": "Text files",
  "application/*": "Documents"
};
function zg(n) {
  if (!n || n.length === 0) return;
  const e = [];
  for (const t of n) {
    const r = wi(t);
    if (ya[r])
      e.push(ya[r]);
    else if (va[r])
      e.push(va[r]);
    else {
      const s = r.split("/")[1];
      s && e.push(s.toUpperCase());
    }
  }
  return e.length > 0 ? e.join(", ") : void 0;
}
function Bg({
  isDragOver: n,
  hasCriticalStatus: e,
  statusType: t
}) {
  return n ? "border-f1-border-accent bg-f1-background-accent-bold/5" : e ? "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10" : t === "warning" ? "border-f1-border-warning-bold bg-f1-background" : t === "info" ? "border-f1-border-info-bold bg-f1-background" : "border-f1-border bg-f1-background";
}
function Vg(n, e, t) {
  if (!n?.length) return [];
  const r = t ? Array.isArray(e) ? e : [] : typeof e == "string" && e ? [e] : [];
  if (r.length === 0) return [];
  const s = new Map(n.map((i) => [i.value, i]));
  return r.map((i) => s.get(i)).filter((i) => i != null).map((i) => ({
    key: `initial-${i.value}`,
    initialFile: i,
    value: i.value
  }));
}
function $g({
  field: n,
  formField: e,
  error: t,
  statusType: r,
  initialFiles: s
}) {
  const { forms: i } = De(), o = od(), a = o?.useUpload ?? n.useUpload, l = s ?? o?.initialFiles, u = $i(), d = Z(null), [f, h] = ee(!1), m = n.multiple ?? !1, [g, y] = ee(
    () => Vg(l, e.value, m)
  ), [p, b] = ee(null), v = i.file, k = g.length > 0, C = m || !k, x = n.accept ? n.accept.map(wi).join(",") : void 0, _ = H(
    () => zg(n.accept),
    [n.accept]
  ), w = B(
    (z) => n.accept && !n.accept.some((V) => {
      const Q = wi(V);
      return Q.endsWith("/*") ? z.type.startsWith(Q.replace("/*", "/")) : z.type === Q;
    }) ? v.invalidFileType.replace(
      "{{types}}",
      _ ?? ""
    ) : n.maxSizeMB && z.size > n.maxSizeMB * 1024 * 1024 ? v.fileTooLarge.replace(
      "{{maxSize}}",
      String(n.maxSizeMB)
    ) : null,
    [n.accept, n.maxSizeMB, v, _]
  ), N = B(
    (z) => {
      b(null);
      const V = m ? z : [z[0]];
      for (const Q of V) {
        const ge = w(Q);
        if (ge) {
          b(ge);
          continue;
        }
        a || console.warn(
          "[F0Form] No useUpload hook provided. Pass useUpload to <F0Form> or to the file field config."
        );
        const ae = `${Q.name}-${Q.size}-${Date.now()}-${Math.random()}`;
        y((be) => m ? [...be, { key: ae, file: Q }] : [{ key: ae, file: Q }]);
      }
    },
    [m, w, a]
  ), A = B(
    (z) => {
      z.preventDefault(), z.stopPropagation(), n.disabled || h(!0);
    },
    [n.disabled]
  ), I = B((z) => {
    z.preventDefault(), z.stopPropagation(), h(!1);
  }, []), D = B(
    (z) => {
      if (z.preventDefault(), z.stopPropagation(), h(!1), n.disabled) return;
      const V = Array.from(z.dataTransfer.files);
      V.length > 0 && N(V);
    },
    [n.disabled, N]
  ), L = B(
    (z) => {
      const V = Array.from(z.target.files ?? []);
      V.length > 0 && N(V), d.current && (d.current.value = "");
    },
    [N]
  ), E = B(() => {
    n.disabled || d.current?.click();
  }, [n.disabled]), M = B(
    (z) => {
      (z.key === "Enter" || z.key === " ") && (z.preventDefault(), E());
    },
    [E]
  ), P = B(
    (z, V) => {
      if (y(
        (Q) => Q.map((ge) => ge.key === z ? { ...ge, value: V } : ge)
      ), m) {
        const Q = Array.isArray(e.value) ? e.value : [];
        e.onChange([...Q, V]);
      } else
        e.onChange(V);
    },
    [m, e]
  ), $ = B(
    (z) => {
      const V = g.find((Q) => Q.key === z);
      if (y((Q) => Q.filter((ge) => ge.key !== z)), V?.value)
        if (m) {
          const Q = Array.isArray(e.value) ? e.value : [];
          e.onChange(Q.filter((ge) => ge !== V.value));
        } else
          e.onChange(void 0);
      else m || e.onChange(void 0);
      e.onBlur();
    },
    [g, m, e]
  ), W = B((z, V) => {
    y(
      (Q) => Q.map(
        (ge) => ge.key === z ? { ...ge, error: V } : ge
      )
    );
  }, []), ce = f ? v.dropzoneActive : n.description ?? (m ? v.dropzoneMultiple : v.dropzone), G = !!(t || p || r === "error"), oe = G || r === "warning" || r === "info", me = Bg({
    isDragOver: f,
    hasCriticalStatus: G,
    statusType: r
  });
  return /* @__PURE__ */ T("div", { className: "flex flex-col gap-2", children: [
    C && /* @__PURE__ */ T(
      "div",
      {
        role: "button",
        tabIndex: n.disabled ? -1 : 0,
        onDragOver: A,
        onDragLeave: I,
        onDrop: D,
        onClick: E,
        onKeyDown: M,
        "aria-disabled": n.disabled,
        className: Y(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors",
          me,
          !n.disabled && !f && !oe && "hover:border-f1-border-hover hover:bg-f1-background-secondary",
          n.disabled && "cursor-not-allowed opacity-50",
          ps("rounded-lg")
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "flex aspect-square items-center justify-center rounded-md border border-solid border-f1-border p-1 text-f1-icon", children: /* @__PURE__ */ c(ze, { icon: Fi, size: "lg" }) }),
          /* @__PURE__ */ T("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ c("span", { className: "text-center text-base text-f1-foreground-secondary", children: ce }),
            !f && _ && /* @__PURE__ */ c("span", { className: "text-center text-sm text-f1-foreground-secondary/70", children: v.acceptedTypes.replace(
              "{{types}}",
              _
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c(
      "input",
      {
        ref: d,
        id: u,
        type: "file",
        accept: x,
        multiple: m,
        onChange: L,
        className: "hidden",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    p && /* @__PURE__ */ c("p", { className: "text-base text-f1-foreground-critical", children: p }),
    g.length > 0 && /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: g.map((z) => /* @__PURE__ */ c(
      Mg,
      {
        entry: z,
        useUpload: z.file ? a : void 0,
        onUploadComplete: (V) => P(z.key, V),
        onRemove: () => $(z.key),
        onError: (V) => W(z.key, V),
        disabled: n.disabled,
        translations: {
          remove: v.remove,
          uploading: v.uploading,
          processing: v.processing,
          uploadFailed: v.uploadFailed
        }
      },
      z.key
    )) })
  ] });
}
function jg({
  field: n,
  formField: e,
  error: t,
  loading: r,
  status: s
}) {
  return /* @__PURE__ */ c(
    tl,
    {
      ...e,
      label: n.label,
      placeholder: n.placeholder,
      disabled: n.disabled,
      step: n.step,
      min: n.min,
      max: n.max,
      maxDecimals: n.maxDecimals,
      units: n.units,
      locale: n.locale ?? "en-US",
      value: e.value != null ? Number(e.value) : void 0,
      onChange: (i) => e.onChange(i),
      size: gn,
      hideLabel: !0,
      hint: "",
      error: t,
      status: s,
      loading: r,
      clearable: n.clearable
    }
  );
}
function Hg({
  field: n,
  formField: e,
  error: t,
  loading: r
}) {
  const s = e.value;
  return /* @__PURE__ */ c(
    lf,
    {
      ...e,
      title: n.label,
      placeholder: n.placeholder ?? "",
      maxCharacters: n.maxCharacters,
      mentionsConfig: n.mentionsConfig,
      height: n.height,
      plainHtmlMode: n.plainHtmlMode,
      disabled: n.disabled,
      error: t,
      loading: r,
      initialEditorState: {
        content: s?.value ?? ""
      },
      onChange: (i) => {
        e.onChange({
          value: i.value,
          mentionIds: i.mentionIds
        });
      }
    }
  );
}
function Wg({
  field: n,
  formField: e,
  error: t,
  loading: r,
  status: s
}) {
  const i = {
    label: n.label,
    placeholder: n.placeholder,
    disabled: n.disabled,
    options: n.options,
    showSearchBox: n.showSearchBox,
    searchBoxPlaceholder: n.searchBoxPlaceholder,
    icon: n.icon,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    status: s,
    loading: r,
    size: gn,
    hideLabel: !0
  };
  return n.multiple ? /* @__PURE__ */ c(
    Dn,
    {
      ...i,
      multiple: !0,
      clearable: n.clearable,
      value: e.value ?? [],
      onChange: (o) => {
        e.onChange(o), e.onBlur();
      }
    }
  ) : n.clearable ? /* @__PURE__ */ c(
    Dn,
    {
      ...i,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (o) => {
        e.onChange(o), e.onBlur();
      }
    }
  ) : /* @__PURE__ */ c(
    Dn,
    {
      ...i,
      value: e.value ?? void 0,
      onChange: (o) => {
        e.onChange(o), e.onBlur();
      }
    }
  );
}
function qg({
  field: n,
  formField: e,
  error: t,
  loading: r,
  status: s
}) {
  const i = {
    label: n.label,
    placeholder: n.placeholder,
    disabled: n.disabled,
    source: n.source,
    mapOptions: n.mapOptions,
    showSearchBox: n.showSearchBox,
    searchBoxPlaceholder: n.searchBoxPlaceholder,
    icon: n.icon,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    status: s,
    loading: r,
    size: gn,
    hideLabel: !0
  };
  return n.multiple ? /* @__PURE__ */ c(
    Dn,
    {
      ...i,
      multiple: !0,
      clearable: n.clearable,
      value: e.value ?? [],
      onChange: (o) => {
        e.onChange(o), e.onBlur();
      }
    }
  ) : n.clearable ? /* @__PURE__ */ c(
    Dn,
    {
      ...i,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (o) => {
        e.onChange(o), e.onBlur();
      }
    }
  ) : /* @__PURE__ */ c(
    Dn,
    {
      ...i,
      value: e.value ?? void 0,
      onChange: (o) => {
        e.onChange(o), e.onBlur();
      }
    }
  );
}
function Ug(n) {
  const { field: e } = n;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? /* @__PURE__ */ c(
    qg,
    {
      ...n,
      field: e
    }
  ) : "options" in e && e.options !== void 0 ? /* @__PURE__ */ c(
    Wg,
    {
      ...n,
      field: e
    }
  ) : null;
}
function Zg(n) {
  const e = lt(n);
  return Me(e, "ZodLiteral") && e._def.value === !0;
}
function Gg({
  field: n,
  formField: e
}) {
  const t = n.validation && Zg(n.validation);
  return /* @__PURE__ */ c(
    nl,
    {
      ...e,
      title: n.label,
      disabled: n.disabled,
      required: t,
      checked: !!e.value,
      onCheckedChange: e.onChange,
      hideLabel: !0
    }
  );
}
const Qg = {
  email: "name@example.com"
}, Kg = {
  url: Oi,
  email: yu
};
function Xg({
  field: n,
  formField: e,
  error: t,
  loading: r,
  status: s
}) {
  const i = n.inputType ?? "text", o = n.placeholder ?? Qg[i] ?? void 0, a = Kg[i];
  return /* @__PURE__ */ c(
    Ai,
    {
      ...e,
      label: n.label,
      type: i,
      placeholder: o,
      disabled: n.disabled,
      value: e.value != null ? String(e.value) : "",
      size: gn,
      hideLabel: !0,
      error: t,
      status: s,
      loading: r,
      icon: a,
      clearable: n.clearable
    }
  );
}
function Yg({
  field: n,
  formField: e,
  error: t,
  loading: r,
  status: s
}) {
  return /* @__PURE__ */ c(
    cf,
    {
      ...e,
      label: n.label,
      placeholder: n.placeholder,
      disabled: n.disabled,
      rows: n.rows,
      maxLength: n.maxLength,
      maxHeight: n.maxHeight,
      value: e.value != null ? String(e.value) : "",
      size: gn,
      hideLabel: !0,
      error: t,
      status: s,
      loading: r
    }
  );
}
function _i({
  field: n,
  formField: e,
  fieldState: t,
  fieldStatus: r,
  isSubmitting: s,
  isRequired: i,
  values: o,
  initialFiles: a,
  isFormLoading: l
}) {
  const u = !!t.error, { isValidating: d } = t, f = fo(n.disabled, o) || s || !!l, h = {
    error: u,
    loading: !!l
  }, m = u ? { type: "error" } : r ? { type: r.type } : void 0;
  switch (n.type) {
    case "text":
      return /* @__PURE__ */ c(
        Xg,
        {
          field: { ...n, disabled: f },
          formField: e,
          ...h,
          status: m
        }
      );
    case "number":
      return /* @__PURE__ */ c(
        jg,
        {
          field: { ...n, disabled: f },
          formField: e,
          ...h,
          status: m
        }
      );
    case "duration":
      return /* @__PURE__ */ c(
        Ig,
        {
          field: { ...n, disabled: f },
          formField: e,
          error: u,
          status: m
        }
      );
    case "textarea":
      return /* @__PURE__ */ c(
        Yg,
        {
          field: { ...n, disabled: f },
          formField: e,
          ...h,
          status: m
        }
      );
    case "select":
      return /* @__PURE__ */ c(
        Ug,
        {
          field: { ...n, disabled: f },
          formField: e,
          ...h,
          status: m
        }
      );
    case "checkbox":
      return /* @__PURE__ */ c(
        kg,
        {
          field: { ...n, disabled: f },
          formField: e
        }
      );
    case "switch":
      return /* @__PURE__ */ c(
        Gg,
        {
          field: { ...n, disabled: f },
          formField: e
        }
      );
    case "date":
      return /* @__PURE__ */ c(
        ad,
        {
          field: {
            ...n,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: kn(n.minDate, o),
            maxDate: kn(n.maxDate, o)
          },
          formField: e,
          ...h,
          status: m
        }
      );
    case "time":
      return /* @__PURE__ */ c(
        ld,
        {
          field: {
            ...n,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: kn(n.minDate, o),
            maxDate: kn(n.maxDate, o)
          },
          formField: e,
          ...h,
          status: m
        }
      );
    case "datetime":
      return /* @__PURE__ */ c(
        Rg,
        {
          field: {
            ...n,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: kn(n.minDate, o),
            maxDate: kn(n.maxDate, o)
          },
          formField: e,
          ...h,
          status: m
        }
      );
    case "daterange":
      return /* @__PURE__ */ c(
        Og,
        {
          field: { ...n, disabled: f },
          formField: e,
          ...h,
          status: m
        }
      );
    case "richtext":
      return /* @__PURE__ */ c(
        Hg,
        {
          field: { ...n, disabled: f },
          formField: e,
          ...h
        }
      );
    case "file":
      return /* @__PURE__ */ c(
        $g,
        {
          field: { ...n, disabled: f },
          formField: e,
          error: u,
          statusType: m?.type,
          initialFiles: a
        }
      );
    case "cardSelect":
      return /* @__PURE__ */ c(
        Cg,
        {
          field: { ...n, disabled: f },
          formField: e
        }
      );
    case "custom":
      return /* @__PURE__ */ c(
        Ng,
        {
          field: { ...n, disabled: f },
          formField: e,
          error: t.error?.message,
          isValidating: d,
          required: i
        }
      );
    default:
      return null;
  }
}
function Ci(n) {
  return Me(n, "ZodOptional") || Me(n, "ZodNullable") || Me(n, "ZodDefault") && Ci(n._def.innerType);
}
const Jg = /* @__PURE__ */ new Set([
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
function ba(n) {
  const e = lt(n);
  return Me(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "min" ? (r.value ?? 0) >= 1 : Jg.has(r.kind)) : !1;
}
const ev = /* @__PURE__ */ new Set([
  "select",
  "date",
  "time",
  "datetime",
  "daterange",
  "file"
]);
function Os(n, e) {
  if (Ci(n))
    return !1;
  const t = lt(n);
  if (Me(t, "ZodString"))
    return e && ev.has(e) ? !0 : ba(n);
  if (Me(t, "ZodObject")) {
    const r = t._def.shape();
    if (r && "value" in r) {
      if (Ci(r.value))
        return !1;
      if (Me(lt(r.value), "ZodString"))
        return ba(r.value);
    }
  }
  return !0;
}
function tv(n) {
  return n != null && typeof n == "object" && "_type" in n && n._type === "select-config";
}
function nv({
  field: n,
  formField: e,
  fieldState: t,
  isSubmitting: r,
  isRequired: s,
  values: i,
  isFormLoading: o,
  renderCustomField: a
}) {
  if (n.customFieldName && n.type !== "custom") {
    if (!a)
      throw new Error(
        `Field "${n.id}" has customFieldName "${n.customFieldName}" but no renderCustomField prop was provided to F0Form.`
      );
    const l = a({
      id: n.id,
      label: n.label,
      placeholder: n.placeholder,
      value: e.value,
      onChange: e.onChange,
      onBlur: e.onBlur,
      error: void 0,
      isValidating: t.isValidating,
      disabled: typeof n.disabled == "boolean" ? n.disabled : void 0,
      required: s,
      customFieldName: n.customFieldName,
      config: void 0,
      fieldType: n.type
    });
    if (tv(l)) {
      const u = { ...n, ...l, type: "select" };
      return _i({
        field: u,
        formField: e,
        fieldState: t,
        fieldStatus: n.status,
        isSubmitting: r,
        isRequired: s,
        values: i,
        isFormLoading: o
      });
    }
    return /* @__PURE__ */ c(Ye, { children: l });
  }
  return _i({
    field: n,
    formField: e,
    fieldState: t,
    fieldStatus: n.status,
    isSubmitting: r,
    isRequired: s,
    values: i,
    isFormLoading: o
  });
}
function Pt({ field: n, sectionId: e }) {
  const t = hn(), r = t.watch(), { isSubmitting: s } = t.formState, {
    formName: i,
    isLoading: o,
    renderCustomField: a
  } = mo(), { forms: l } = De(), u = fo(n.disabled, r), d = Z(u);
  re(() => {
    const p = d.current;
    if (d.current = u, !p && u && n.resetOnDisable) {
      const b = t.formState.defaultValues?.[n.id];
      t.setValue(n.id, b, { shouldValidate: !1 });
    }
  }, [u, n.resetOnDisable, n.id, t]);
  const f = !n.renderIf || As(n.renderIf, r), h = n.type !== "checkbox" && n.type !== "custom" && !(n.type === "cardSelect" && n.hideLabel), m = n.type !== "custom", g = n.validation && Os(n.validation, n.type), y = xn(i, e, n.id);
  return f ? /* @__PURE__ */ c(
    ui,
    {
      control: t.control,
      name: n.id,
      render: ({ field: p, fieldState: b }) => /* @__PURE__ */ T(lo, { id: y, className: "scroll-mt-4", children: [
        h && /* @__PURE__ */ T(
          "label",
          {
            htmlFor: n.id,
            className: "text-base font-medium leading-normal text-f1-foreground-secondary",
            children: [
              n.label,
              g && /* @__PURE__ */ c("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ c(Zc, { children: nv({
          field: n,
          formField: p,
          fieldState: b,
          isSubmitting: s,
          isRequired: g,
          values: r,
          isFormLoading: o,
          renderCustomField: a
        }) }),
        n.helpText && /* @__PURE__ */ c(Gc, { children: n.helpText }),
        "moreInfoLink" in n && n.moreInfoLink && /* @__PURE__ */ c(
          bu,
          {
            href: n.moreInfoLink.href,
            target: "_blank",
            variant: "link",
            children: n.moreInfoLink.label ?? l.moreInformation
          }
        ),
        (() => {
          if (!n.alert) return null;
          const v = typeof n.alert == "function" ? n.alert({ fieldValue: p.value, values: r }) : n.alert;
          return v ? /* @__PURE__ */ c(rl, { ...v, variant: v.variant ?? "info" }) : null;
        })(),
        m && !b.error && /* @__PURE__ */ c(Ri, { status: n.status }),
        m && /* @__PURE__ */ c(
          Ts,
          {
            fallback: g ? l.validation.required : l.validation.invalidType
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ c(
    ui,
    {
      control: t.control,
      name: n.id,
      render: () => /* @__PURE__ */ c("span", { className: "hidden", "aria-hidden": "true" })
    }
  );
}
function zn({ row: n, sectionId: e }) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: `flex xs:flex-row flex-col items-start ${ho} [&>*]:flex-1`,
      children: n.fields.map((t) => /* @__PURE__ */ c(Pt, { field: t, sectionId: e }, t.id))
    }
  );
}
function xa(n, e) {
  const t = n.renderIf;
  return !t || typeof t == "function" ? null : "fieldId" in t && "equalsTo" in t && t.equalsTo === !0 && e.has(t.fieldId) ? t.fieldId : null;
}
function Ar(n, e) {
  const t = n.renderIf;
  return !t || typeof t == "function" ? null : "fieldId" in t && "equalsTo" in t && typeof t.equalsTo == "string" && e.has(t.fieldId) ? { fieldId: t.fieldId, equalsTo: t.equalsTo } : null;
}
function po(n, e) {
  const t = /* @__PURE__ */ new Map();
  for (const [r, s] of n)
    t.set(
      r,
      /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: s.map(
        (i) => "type" in i && i.type === "row" ? /* @__PURE__ */ c(
          zn,
          {
            row: i,
            sectionId: e
          },
          i.fields.map((o) => o.id).join("-")
        ) : /* @__PURE__ */ c(
          Pt,
          {
            field: i,
            sectionId: e
          },
          i.id
        )
      ) }, r)
    );
  return t;
}
function go(n) {
  const e = [];
  let t = 0;
  for (; t < n.length; ) {
    const r = n[t];
    if (r.type === "field" && r.field.type === "switch") {
      const s = [];
      if (r.field.grouped === !1)
        s.push(r.field), t++;
      else
        for (; t < n.length && n[t].type === "field" && n[t].field.type === "switch" && n[t].field.grouped !== !1; )
          s.push(n[t].field), t++;
      const i = new Set(s.map((u) => u.id)), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
      for (; t < n.length; ) {
        const u = n[t];
        if (u.type === "field" && u.field.type !== "switch") {
          const d = xa(u.field, i);
          if (d) {
            u.field.type === "cardSelect" && a.add(u.field.id);
            const h = o.get(d) ?? [];
            h.push(u.field), o.set(d, h), t++;
            continue;
          }
          const f = Ar(
            u.field,
            a
          );
          if (f) {
            l.has(f.fieldId) || l.set(f.fieldId, /* @__PURE__ */ new Map());
            const h = l.get(
              f.fieldId
            ), m = h.get(f.equalsTo) ?? [];
            m.push(u.field), h.set(f.equalsTo, m), t++;
            continue;
          }
          break;
        } else if (u.type === "row") {
          const d = u.fields.map(
            (g) => xa(g, i)
          ), f = d[0];
          if (f && d.every((g) => g === f)) {
            const g = o.get(f) ?? [];
            g.push(u), o.set(f, g), t++;
            continue;
          }
          const h = u.fields.map(
            (g) => Ar(g, a)
          ), m = h[0];
          if (m && h.every(
            (g) => g && g.fieldId === m.fieldId && g.equalsTo === m.equalsTo
          )) {
            l.has(m.fieldId) || l.set(m.fieldId, /* @__PURE__ */ new Map());
            const g = l.get(
              m.fieldId
            ), y = g.get(m.equalsTo) ?? [];
            y.push(u), g.set(m.equalsTo, y), t++;
            continue;
          }
          break;
        } else
          break;
      }
      e.push({
        type: "switchGroup",
        fields: s,
        dependentFields: o.size > 0 ? o : void 0,
        cardSelectDependentFields: l.size > 0 ? l : void 0
      });
    } else if (r.type === "field")
      if (r.field.type === "cardSelect") {
        const s = r.field.id, i = /* @__PURE__ */ new Set([s]), o = /* @__PURE__ */ new Map();
        for (t++; t < n.length; ) {
          const a = n[t];
          if (a.type === "field") {
            const l = Ar(a.field, i);
            if (l) {
              const u = o.get(l.equalsTo) ?? [];
              u.push(a.field), o.set(l.equalsTo, u), t++;
              continue;
            }
          } else if (a.type === "row") {
            const l = a.fields.map(
              (d) => Ar(d, i)
            ), u = l[0];
            if (u && l.every(
              (d) => d && d.fieldId === u.fieldId && d.equalsTo === u.equalsTo
            )) {
              const d = o.get(u.equalsTo) ?? [];
              d.push(a), o.set(u.equalsTo, d), t++;
              continue;
            }
          }
          break;
        }
        e.push({
          type: "field",
          item: r,
          cardSelectDependentFields: o.size > 0 ? o : void 0
        });
      } else
        e.push({ type: "field", item: r }), t++;
    else r.type === "row" ? (e.push({ type: "row", item: r, index: t }), t++) : (r.type === "section" && e.push({ type: "section", item: r }), t++);
  }
  return e;
}
function Zs(n) {
  const e = lt(n);
  if (!Me(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let r, s;
  for (const i of t)
    i.kind === "min" ? r = new Date(i.value) : i.kind === "max" && (s = new Date(i.value));
  return { minDate: r, maxDate: s };
}
function rv(n) {
  const e = lt(n);
  if (!Me(e, "ZodNumber"))
    return { isInteger: !1 };
  const t = e._def.checks || [];
  let r, s, i = !1;
  for (const o of t)
    o.kind === "min" ? r = o.value : o.kind === "max" ? s = o.value : o.kind === "int" && (i = !0);
  return { min: r, max: s, isInteger: i };
}
function sv(n) {
  const e = lt(n);
  return Me(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "email") : !1;
}
function iv(n) {
  const e = lt(n);
  return Me(e, "ZodString") ? (e._def.checks || []).some((r) => r.kind === "url") : !1;
}
function wa(n) {
  return sv(n) ? "email" : iv(n) ? "url" : "text";
}
function ov(n) {
  const e = lt(n);
  if (!Me(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let r;
  for (const s of t)
    s.kind === "max" && (r = s.value);
  return { maxLength: r };
}
function _a(n, e, t, r) {
  const s = {
    id: n,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    status: t.status,
    disabled: t.disabled,
    resetOnDisable: t.resetOnDisable,
    alert: t.alert,
    customFieldName: "customFieldName" in t ? t.customFieldName : void 0,
    validation: e
  }, i = !Os(e, r);
  switch (r) {
    case "text": {
      const o = "inputType" in t && t.inputType ? t.inputType : wa(e);
      return {
        ...s,
        type: "text",
        inputType: o,
        clearable: i,
        renderIf: t.renderIf
      };
    }
    case "money":
    case "percentage":
    case "number": {
      const { min: o, max: a, isInteger: l } = rv(e), u = r === "percentage" ? "%" : r === "money" && "currency" in t ? t.currency : void 0;
      return {
        ...s,
        type: "number",
        step: "step" in t ? t.step : void 0,
        min: o,
        max: a,
        maxDecimals: l ? 0 : void 0,
        units: u,
        locale: "locale" in t ? t.locale : void 0,
        clearable: i,
        renderIf: t.renderIf
      };
    }
    case "duration":
      return {
        ...s,
        type: "duration",
        units: "units" in t ? t.units : void 0,
        fields: "fields" in t ? t.fields : void 0,
        readonly: "readonly" in t ? t.readonly : void 0,
        size: "size" in t ? t.size : void 0,
        renderIf: t.renderIf
      };
    case "textarea": {
      const { maxLength: o } = ov(e);
      return {
        ...s,
        type: "textarea",
        rows: "rows" in t ? t.rows : void 0,
        maxHeight: "maxHeight" in t ? t.maxHeight : void 0,
        maxLength: o,
        clearable: i,
        renderIf: t.renderIf
      };
    }
    case "select": {
      const o = "source" in t && t.source;
      return {
        ...s,
        type: "select",
        // Only include options if not using source
        ...o ? {
          source: t.source,
          mapOptions: "mapOptions" in t ? t.mapOptions : void 0
        } : {
          options: "options" in t ? t.options : []
        },
        multiple: "multiple" in t ? t.multiple : void 0,
        clearable: i,
        showSearchBox: "showSearchBox" in t ? t.showSearchBox : void 0,
        searchBoxPlaceholder: "searchBoxPlaceholder" in t ? t.searchBoxPlaceholder : void 0,
        renderIf: t.renderIf
      };
    }
    case "checkbox":
      return {
        ...s,
        type: "checkbox",
        moreInfoLink: "moreInfoLink" in t ? t.moreInfoLink : void 0,
        renderIf: t.renderIf
      };
    case "switch":
      return {
        ...s,
        type: "switch",
        moreInfoLink: "moreInfoLink" in t ? t.moreInfoLink : void 0,
        grouped: "grouped" in t ? t.grouped : void 0,
        renderIf: t.renderIf
      };
    case "date": {
      const o = Zs(e), a = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
      return {
        ...s,
        type: "date",
        granularities: "granularities" in t ? t.granularities : void 0,
        minDate: a ?? o.minDate,
        maxDate: l ?? o.maxDate,
        presets: "presets" in t ? t.presets : void 0,
        clearable: i,
        renderIf: t.renderIf
      };
    }
    case "time": {
      const o = Zs(e), a = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
      return {
        ...s,
        type: "time",
        minDate: a ?? o.minDate,
        maxDate: l ?? o.maxDate,
        clearable: i,
        renderIf: t.renderIf
      };
    }
    case "datetime": {
      const o = Zs(e), a = "minDate" in t ? t.minDate : void 0, l = "maxDate" in t ? t.maxDate : void 0;
      return {
        ...s,
        type: "datetime",
        minDate: a ?? o.minDate,
        maxDate: l ?? o.maxDate,
        clearable: i,
        renderIf: t.renderIf
      };
    }
    case "daterange":
      return {
        ...s,
        type: "daterange",
        fromLabel: "fromLabel" in t ? t.fromLabel : void 0,
        toLabel: "toLabel" in t ? t.toLabel : void 0,
        granularities: "granularities" in t ? t.granularities : void 0,
        presets: "presets" in t ? t.presets : void 0,
        clearable: i,
        renderIf: t.renderIf
      };
    case "richtext":
      return {
        ...s,
        type: "richtext",
        maxCharacters: "maxCharacters" in t ? t.maxCharacters : void 0,
        mentionsConfig: "mentionsConfig" in t ? t.mentionsConfig : void 0,
        height: "height" in t ? t.height : void 0,
        plainHtmlMode: "plainHtmlMode" in t ? t.plainHtmlMode : void 0,
        renderIf: t.renderIf
      };
    case "file":
      return {
        ...s,
        type: "file",
        accept: "accept" in t ? t.accept : void 0,
        maxSizeMB: "maxSizeMB" in t ? t.maxSizeMB : void 0,
        multiple: "multiple" in t ? t.multiple : void 0,
        description: "description" in t ? t.description : void 0,
        useUpload: "useUpload" in t ? t.useUpload : void 0,
        renderIf: t.renderIf
      };
    case "cardSelect":
      return {
        ...s,
        type: "cardSelect",
        options: "options" in t ? t.options : [],
        hideLabel: "hideLabel" in t ? t.hideLabel : void 0,
        grouped: "grouped" in t ? t.grouped : void 0,
        renderIf: t.renderIf
      };
    case "custom":
      return {
        ...s,
        type: "custom",
        render: "render" in t ? t.render : void 0,
        fieldConfig: "fieldConfig" in t ? t.fieldConfig : void 0,
        renderIf: t.renderIf
      };
    default:
      return {
        ...s,
        type: "text",
        inputType: wa(e),
        renderIf: t.renderIf
      };
  }
}
function fs(n) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (let r = 0; r < n.length; r++) {
    if (t.has(r)) continue;
    const s = n[r], i = s.config.row;
    if (i) {
      const o = [];
      for (let l = r; l < n.length; l++)
        n[l].config.row === i && (o.push(n[l]), t.add(l));
      o.sort((l, u) => l.position - u.position);
      const a = {
        type: "row",
        fields: o.map(
          (l) => _a(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(a);
    } else {
      t.add(r);
      const o = _a(
        s.id,
        s.schema,
        s.config,
        s.fieldType
      );
      e.push({ type: "field", field: o });
    }
  }
  return e;
}
function cd(n) {
  const e = n.shape, t = [], r = Object.entries(e);
  for (let s = 0; s < r.length; s++) {
    const [i, o] = r[s], a = pn(o);
    if (a) {
      const l = nd(o, a);
      t.push({
        id: i,
        schema: o,
        config: a,
        fieldType: l,
        position: s
      });
    }
  }
  return t;
}
function dd(n, e) {
  return H(() => {
    const t = mn(n), r = cd(t), s = [], i = {};
    for (const l of r) {
      const u = l.config.section;
      u ? (i[u] || (i[u] = []), i[u].push(l)) : s.push(l);
    }
    s.sort((l, u) => l.position - u.position);
    for (const l of Object.keys(i))
      i[l].sort((u, d) => u.position - d.position);
    const o = [];
    o.push(...fs(s));
    const a = e ? Object.keys(e).filter((l) => i[l]) : Object.keys(i);
    for (const l of a) {
      const u = e?.[l], d = i[l], f = {
        id: l,
        type: "section",
        section: {
          title: u?.title ?? l,
          description: u?.description,
          withInset: u?.withInset,
          renderIf: u?.renderIf,
          action: u?.action,
          fields: fs(d)
        }
      };
      o.push(f);
    }
    return o;
  }, [n, e]);
}
function Rx(n, e) {
  const t = mn(n), r = cd(t), s = [], i = {};
  for (const l of r) {
    const u = l.config.section;
    u ? (i[u] || (i[u] = []), i[u].push(l)) : s.push(l);
  }
  s.sort((l, u) => l.position - u.position);
  for (const l of Object.keys(i))
    i[l].sort((u, d) => u.position - d.position);
  const o = [];
  o.push(...fs(s));
  const a = e ? Object.keys(e).filter((l) => i[l]) : Object.keys(i);
  for (const l of a) {
    const u = e?.[l], d = i[l], f = {
      id: l,
      type: "section",
      section: {
        title: u?.title ?? l,
        description: u?.description,
        withInset: u?.withInset,
        renderIf: u?.renderIf,
        action: u?.action,
        fields: fs(d)
      }
    };
    o.push(f);
  }
  return o;
}
function ud(n) {
  const { validation: e } = n.forms;
  return (t, r) => {
    switch (t.code) {
      case q.invalid_type:
        return t.received === "undefined" || t.received === "null" ? { message: e.required } : { message: e.invalidType };
      case q.invalid_string:
        if (t.validation === "email")
          return { message: e.string.email };
        if (t.validation === "url")
          return { message: e.string.url };
        break;
      case q.too_small:
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
      case q.too_big:
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
      case q.invalid_date:
        return { message: e.date.invalid };
      case q.not_multiple_of:
        if (t.multipleOf === 1)
          return { message: e.number.integer };
        break;
      case q.invalid_literal:
        if (t.expected === !0)
          return { message: e.checkbox.mustBeChecked };
        break;
    }
    return { message: r.defaultError };
  };
}
function Ca(n) {
  const e = lt(n);
  return Me(e, "ZodLiteral") && e._def.value === !0;
}
function vo({
  fields: n,
  dependentFields: e,
  cardSelectDependentFields: t,
  sectionId: r
}) {
  const s = hn(), { formName: i } = mo(), { watch: o, setValue: a } = s, { isSubmitting: l } = s.formState, u = o(), d = H(
    () => n.filter(
      (C) => !C.renderIf || As(C.renderIf, u)
    ),
    [n, u]
  ), f = H(
    () => Object.fromEntries(
      d.map((C) => [
        C.id,
        fo(C.disabled, u) || l
      ])
    ),
    [d, l, u]
  ), h = Z({});
  re(() => {
    const C = h.current, x = s.formState.defaultValues ?? {};
    for (const _ of d) {
      if (!(_.id in C))
        continue;
      const w = C[_.id], N = f[_.id] ?? !1;
      if (!w && N && _.resetOnDisable) {
        const A = x[_.id] ?? !1;
        a(_.id, A, { shouldValidate: !1 });
      }
    }
    h.current = { ...f };
  }, [f, d, s, a]);
  const m = H(
    () => d.map((C) => ({
      value: C.id,
      title: C.label,
      description: C.helpText,
      disabled: f[C.id] ?? !1,
      required: !!(C.validation && Ca(C.validation)),
      moreInfoLink: C.moreInfoLink,
      selectedContent: e?.has(C.id) ? /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: e.get(C.id).map((x) => {
        if ("type" in x && x.type === "row")
          return /* @__PURE__ */ c(
            zn,
            {
              row: x,
              sectionId: r
            },
            x.fields.map((w) => w.id).join("-")
          );
        const _ = x;
        if (_.type === "cardSelect" && t?.has(_.id)) {
          const w = t.get(_.id), N = /* @__PURE__ */ new Map();
          for (const [A, I] of w)
            N.set(
              A,
              /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: I.map(
                (D) => "type" in D && D.type === "row" ? /* @__PURE__ */ c(
                  zn,
                  {
                    row: D,
                    sectionId: r
                  },
                  D.fields.map((L) => L.id).join("-")
                ) : /* @__PURE__ */ c(
                  Pt,
                  {
                    field: D,
                    sectionId: r
                  },
                  D.id
                )
              ) }, A)
            );
          return /* @__PURE__ */ c(Sr.Provider, { value: N, children: /* @__PURE__ */ c(Pt, { field: _, sectionId: r }) }, _.id);
        }
        return /* @__PURE__ */ c(Pt, { field: _, sectionId: r }, _.id);
      }) }) : void 0
    })),
    [
      d,
      f,
      e,
      t,
      r
    ]
  ), g = H(
    () => d.filter((C) => u[C.id]).map((C) => C.id),
    [d, u]
  );
  if (d.length === 0)
    return null;
  const y = (C) => {
    for (const x of d) {
      const _ = C.includes(x.id), w = !!u[x.id];
      _ !== w && a(x.id, _, {
        shouldValidate: !0,
        shouldDirty: !0
      });
    }
  }, p = H(() => {
    const C = [];
    for (const x of d) {
      if (!x.alert) continue;
      const _ = typeof x.alert == "function" ? x.alert({ fieldValue: u[x.id], values: u }) : x.alert;
      _ && C.push({ fieldId: x.id, props: _ });
    }
    return C;
  }, [d, u]), { forms: b } = De(), v = d.filter((C) => C.validation && Ca(C.validation)).map((C) => {
    const x = s.formState.errors[C.id];
    return x ? { fieldId: C.id, label: C.label, message: x.message } : null;
  }).filter(
    (C) => C !== null
  ), k = H(
    () => d.map((C) => ({
      fieldId: C.id,
      anchorId: xn(i, r, C.id)
    })),
    [d, i, r]
  );
  return /* @__PURE__ */ T("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ T(
      "div",
      {
        id: k[0]?.anchorId,
        className: "flex scroll-mt-4 flex-col gap-4",
        children: [
          k.slice(1).map(({ fieldId: C, anchorId: x }) => /* @__PURE__ */ c("span", { id: x, className: "hidden" }, C)),
          /* @__PURE__ */ c(
            Sl,
            {
              multiple: !0,
              isToggle: !0,
              grouped: !0,
              items: m,
              value: g,
              onChange: y
            }
          ),
          p.map(({ fieldId: C, props: x }) => /* @__PURE__ */ c(rl, { ...x, variant: x.variant ?? "info" }, C))
        ]
      }
    ),
    v.length > 0 && /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", children: v.map((C) => /* @__PURE__ */ c(
      ui,
      {
        control: s.control,
        name: C.fieldId,
        render: () => /* @__PURE__ */ c(lo, { children: /* @__PURE__ */ c(Ts, { fallback: b.validation.required }) })
      },
      C.fieldId
    )) })
  ] });
}
const av = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function lv(n) {
  const e = {};
  function t(r, s) {
    for (const [i, o] of Object.entries(r)) {
      if (i === "root") continue;
      const a = s ? `${s}.${i}` : i;
      if (o && typeof o == "object" && !Array.isArray(o)) {
        const l = o;
        "message" in l && typeof l.message == "string" ? e[a] = l.message : t(l, a);
      }
    }
  }
  return t(n, ""), e;
}
function fd({
  formName: n,
  sectionId: e,
  schema: t,
  sectionConfig: r,
  defaultValues: s,
  onSubmit: i,
  submitConfig: o,
  errorTriggerMode: a,
  className: l,
  initialFiles: u,
  formRef: d,
  renderCustomField: f,
  useUpload: h,
  isLoading: m
}) {
  const g = De(), y = dd(t), p = o?.label ?? "Submit", b = o?.icon === null ? void 0 : o?.icon ?? sl, v = o?.showSubmitWhenDirty ?? !1, k = o?.hideSubmitButton ?? !1, C = H(() => ud(g), [g]), x = av[a], _ = H(
    () => rd(t, { errorMap: C }),
    [t, C]
  ), w = $c({
    resolver: _,
    mode: x,
    defaultValues: s
  }), N = Z(m);
  re(() => {
    N.current && !m && s && w.reset(s), N.current = m;
  }, [m, s, w]);
  const A = w.formState.errors.root, { isSubmitting: I, isDirty: D } = w.formState, L = Object.keys(w.formState.errors).filter((G) => G !== "root").length > 0, E = Z(null), M = B(
    async (G) => {
      const oe = { ...G };
      for (const z of Object.keys(oe))
        oe[z] === null && (oe[z] = void 0);
      const me = await i(oe);
      me.success ? w.reset(G) : (me.errors && Object.entries(me.errors).forEach(([z, V]) => {
        w.setError(z, { message: V });
      }), me.rootMessage && w.setError("root", { message: me.rootMessage }));
    },
    [i, w]
  );
  re(() => {
    if (d) {
      const G = {
        submit: () => new Promise((oe, me) => {
          w.handleSubmit(
            async (z) => {
              await M(z), oe();
            },
            () => {
              me(new Error("Form validation failed"));
            }
          )();
        }),
        reset: () => w.reset(),
        isDirty: () => w.formState.isDirty,
        getValues: () => w.getValues(),
        setValue: (oe, me, z) => {
          w.setValue(
            oe,
            me,
            {
              shouldValidate: z?.shouldValidate ?? !0,
              shouldDirty: z?.shouldDirty ?? !0
            }
          );
        },
        setValues: (oe, me) => {
          for (const [z, V] of Object.entries(oe))
            w.setValue(
              z,
              V,
              {
                shouldValidate: !1,
                shouldDirty: me?.shouldDirty ?? !0
              }
            );
          me?.shouldValidate !== !1 && w.trigger();
        },
        trigger: async (oe) => oe ? w.trigger(oe) : w.trigger(),
        getErrors: () => lv(w.formState.errors),
        getFieldNames: () => Object.keys(w.getValues()),
        actionBar: {
          wiggle: () => {
          }
        },
        _setStateCallback: (oe) => {
          E.current = oe;
        }
      };
      d.current = G;
    }
    return () => {
      d && (d.current = null);
    };
  }, [d, w, M]), re(() => {
    E.current && E.current({ isSubmitting: I, hasErrors: L });
  }, [I, L]);
  const P = go(y), $ = H(
    () => ({
      formName: n,
      initialFiles: u,
      renderCustomField: f,
      isLoading: m,
      useUpload: h
    }),
    [n, u, f, m, h]
  ), W = r?.title ?? e, ce = r?.description;
  return /* @__PURE__ */ c(Fs.Provider, { value: $, children: /* @__PURE__ */ c(Wc, { ...w, children: /* @__PURE__ */ T(
    "form",
    {
      onSubmit: w.handleSubmit(M),
      className: Y("flex flex-col", l),
      children: [
        /* @__PURE__ */ T(
          "div",
          {
            className: Y(
              "flex items-start justify-between py-5",
              "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
            ),
            children: [
              /* @__PURE__ */ c(kl, { title: W, description: ce ?? "" }),
              r?.action && /* @__PURE__ */ c(
                Be,
                {
                  label: r.action.label,
                  icon: r.action.icon,
                  onClick: r.action.onClick,
                  href: r.action.href,
                  variant: "outline",
                  size: "md"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: `flex flex-col ${ho}`, children: P.map((G, oe) => {
          switch (G.type) {
            case "switchGroup":
              return /* @__PURE__ */ c(
                vo,
                {
                  fields: G.fields,
                  dependentFields: G.dependentFields,
                  cardSelectDependentFields: G.cardSelectDependentFields,
                  sectionId: e
                },
                `switch-group-${oe}`
              );
            case "field": {
              const me = G.cardSelectDependentFields ? /* @__PURE__ */ c(
                Sr.Provider,
                {
                  value: po(
                    G.cardSelectDependentFields,
                    e
                  ),
                  children: /* @__PURE__ */ c(
                    Pt,
                    {
                      field: G.item.field,
                      sectionId: e
                    }
                  )
                }
              ) : /* @__PURE__ */ c(
                Pt,
                {
                  field: G.item.field,
                  sectionId: e
                }
              );
              return /* @__PURE__ */ c(fe.Fragment, { children: me }, G.item.field.id);
            }
            case "row":
              return /* @__PURE__ */ c(
                zn,
                {
                  row: G.item,
                  sectionId: e
                },
                `row-${G.index}`
              );
            default:
              return null;
          }
        }) }),
        A && /* @__PURE__ */ c("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: A.message }),
        !k && (!v || D) && /* @__PURE__ */ c("div", { className: "mt-4", children: /* @__PURE__ */ c(
          Be,
          {
            type: "submit",
            label: p,
            icon: b,
            loading: I,
            disabled: L || m
          }
        ) })
      ]
    }
  ) }) });
}
function cv({ section: n }) {
  const t = hn().watch(), { formName: r } = mo(), { title: s, description: i, withInset: o, renderIf: a, action: l, fields: u } = n.section, d = n.id;
  if (a && !As(a, t))
    return null;
  const f = go(u), h = xn(r, d);
  return /* @__PURE__ */ T("section", { id: h, className: "flex scroll-mt-4 flex-col", children: [
    /* @__PURE__ */ T(
      "div",
      {
        className: Y(
          "flex items-start justify-between py-5",
          o && "px-5",
          "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
        ),
        children: [
          /* @__PURE__ */ c(kl, { title: s, description: i ?? "" }),
          l && /* @__PURE__ */ c(
            Be,
            {
              label: l.label,
              icon: l.icon,
              onClick: l.onClick,
              href: l.href,
              variant: "outline",
              size: "md"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c("div", { className: `flex flex-col ${ho}`, children: f.map((m, g) => {
      if (m.type === "switchGroup")
        return /* @__PURE__ */ c(
          vo,
          {
            fields: m.fields,
            dependentFields: m.dependentFields,
            cardSelectDependentFields: m.cardSelectDependentFields,
            sectionId: d
          },
          `switch-group-${g}`
        );
      if (m.type === "field") {
        const y = m.cardSelectDependentFields ? /* @__PURE__ */ c(
          Sr.Provider,
          {
            value: po(
              m.cardSelectDependentFields,
              d
            ),
            children: /* @__PURE__ */ c(
              Pt,
              {
                field: m.item.field,
                sectionId: d
              },
              m.item.field.id
            )
          }
        ) : /* @__PURE__ */ c(
          Pt,
          {
            field: m.item.field,
            sectionId: d
          },
          m.item.field.id
        );
        return /* @__PURE__ */ c(fe.Fragment, { children: y }, m.item.field.id);
      }
      return m.type === "row" ? /* @__PURE__ */ c(
        zn,
        {
          row: m.item,
          sectionId: d
        },
        `row-${m.index}`
      ) : null;
    }) })
  ] });
}
const dv = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use"), uv = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: !0,
  rejectedAdditionalProperties: !1,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: !1,
  definitions: {},
  errorMessages: !1,
  markdownDescription: !1,
  patternStrategy: "escape",
  applyRegexFlags: !1,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType"
}, fv = (n) => ({
  ...uv,
  ...n
}), hv = (n) => {
  const e = fv(n), t = e.name !== void 0 ? [...e.basePath, e.definitionPath, e.name] : e.basePath;
  return {
    ...e,
    flags: { hasReferencedOpenAiAnyType: !1 },
    currentPath: t,
    propertyPath: void 0,
    seen: new Map(Object.entries(e.definitions).map(([r, s]) => [
      s._def,
      {
        def: s._def,
        path: [...e.basePath, e.definitionPath, r],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
};
function hd(n, e, t, r) {
  r?.errorMessages && t && (n.errorMessage = {
    ...n.errorMessage,
    [e]: t
  });
}
function Oe(n, e, t, r, s) {
  n[e] = t, hd(n, e, r, s);
}
const md = (n, e) => {
  let t = 0;
  for (; t < n.length && t < e.length && n[t] === e[t]; t++)
    ;
  return [(n.length - t).toString(), ...e.slice(t)].join("/");
};
function gt(n) {
  if (n.target !== "openAi")
    return {};
  const e = [
    ...n.basePath,
    n.definitionPath,
    n.openAiAnyTypeName
  ];
  return n.flags.hasReferencedOpenAiAnyType = !0, {
    $ref: n.$refStrategy === "relative" ? md(e, n.currentPath) : e.join("/")
  };
}
function mv(n, e) {
  const t = {
    type: "array"
  };
  return n.type?._def && n.type?._def?.typeName !== K.ZodAny && (t.items = Ee(n.type._def, {
    ...e,
    currentPath: [...e.currentPath, "items"]
  })), n.minLength && Oe(t, "minItems", n.minLength.value, n.minLength.message, e), n.maxLength && Oe(t, "maxItems", n.maxLength.value, n.maxLength.message, e), n.exactLength && (Oe(t, "minItems", n.exactLength.value, n.exactLength.message, e), Oe(t, "maxItems", n.exactLength.value, n.exactLength.message, e)), t;
}
function pv(n, e) {
  const t = {
    type: "integer",
    format: "int64"
  };
  if (!n.checks)
    return t;
  for (const r of n.checks)
    switch (r.kind) {
      case "min":
        e.target === "jsonSchema7" ? r.inclusive ? Oe(t, "minimum", r.value, r.message, e) : Oe(t, "exclusiveMinimum", r.value, r.message, e) : (r.inclusive || (t.exclusiveMinimum = !0), Oe(t, "minimum", r.value, r.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? r.inclusive ? Oe(t, "maximum", r.value, r.message, e) : Oe(t, "exclusiveMaximum", r.value, r.message, e) : (r.inclusive || (t.exclusiveMaximum = !0), Oe(t, "maximum", r.value, r.message, e));
        break;
      case "multipleOf":
        Oe(t, "multipleOf", r.value, r.message, e);
        break;
    }
  return t;
}
function gv() {
  return {
    type: "boolean"
  };
}
function pd(n, e) {
  return Ee(n.type._def, e);
}
const vv = (n, e) => Ee(n.innerType._def, e);
function gd(n, e, t) {
  const r = t ?? e.dateStrategy;
  if (Array.isArray(r))
    return {
      anyOf: r.map((s, i) => gd(n, e, s))
    };
  switch (r) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return yv(n, e);
  }
}
const yv = (n, e) => {
  const t = {
    type: "integer",
    format: "unix-time"
  };
  if (e.target === "openApi3")
    return t;
  for (const r of n.checks)
    switch (r.kind) {
      case "min":
        Oe(
          t,
          "minimum",
          r.value,
          // This is in milliseconds
          r.message,
          e
        );
        break;
      case "max":
        Oe(
          t,
          "maximum",
          r.value,
          // This is in milliseconds
          r.message,
          e
        );
        break;
    }
  return t;
};
function bv(n, e) {
  return {
    ...Ee(n.innerType._def, e),
    default: n.defaultValue()
  };
}
function xv(n, e) {
  return e.effectStrategy === "input" ? Ee(n.schema._def, e) : gt(e);
}
function wv(n) {
  return {
    type: "string",
    enum: Array.from(n.values)
  };
}
const _v = (n) => "type" in n && n.type === "string" ? !1 : "allOf" in n;
function Cv(n, e) {
  const t = [
    Ee(n.left._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "0"]
    }),
    Ee(n.right._def, {
      ...e,
      currentPath: [...e.currentPath, "allOf", "1"]
    })
  ].filter((i) => !!i);
  let r = e.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const s = [];
  return t.forEach((i) => {
    if (_v(i))
      s.push(...i.allOf), i.unevaluatedProperties === void 0 && (r = void 0);
    else {
      let o = i;
      if ("additionalProperties" in i && i.additionalProperties === !1) {
        const { additionalProperties: a, ...l } = i;
        o = l;
      } else
        r = void 0;
      s.push(o);
    }
  }), s.length ? {
    allOf: s,
    ...r
  } : void 0;
}
function Sv(n, e) {
  const t = typeof n.value;
  return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
    type: Array.isArray(n.value) ? "array" : "object"
  } : e.target === "openApi3" ? {
    type: t === "bigint" ? "integer" : t,
    enum: [n.value]
  } : {
    type: t === "bigint" ? "integer" : t,
    const: n.value
  };
}
let Gs;
const Ft = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => (Gs === void 0 && (Gs = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Gs),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function vd(n, e) {
  const t = {
    type: "string"
  };
  if (n.checks)
    for (const r of n.checks)
      switch (r.kind) {
        case "min":
          Oe(t, "minLength", typeof t.minLength == "number" ? Math.max(t.minLength, r.value) : r.value, r.message, e);
          break;
        case "max":
          Oe(t, "maxLength", typeof t.maxLength == "number" ? Math.min(t.maxLength, r.value) : r.value, r.message, e);
          break;
        case "email":
          switch (e.emailStrategy) {
            case "format:email":
              Ot(t, "email", r.message, e);
              break;
            case "format:idn-email":
              Ot(t, "idn-email", r.message, e);
              break;
            case "pattern:zod":
              it(t, Ft.email, r.message, e);
              break;
          }
          break;
        case "url":
          Ot(t, "uri", r.message, e);
          break;
        case "uuid":
          Ot(t, "uuid", r.message, e);
          break;
        case "regex":
          it(t, r.regex, r.message, e);
          break;
        case "cuid":
          it(t, Ft.cuid, r.message, e);
          break;
        case "cuid2":
          it(t, Ft.cuid2, r.message, e);
          break;
        case "startsWith":
          it(t, RegExp(`^${Qs(r.value, e)}`), r.message, e);
          break;
        case "endsWith":
          it(t, RegExp(`${Qs(r.value, e)}$`), r.message, e);
          break;
        case "datetime":
          Ot(t, "date-time", r.message, e);
          break;
        case "date":
          Ot(t, "date", r.message, e);
          break;
        case "time":
          Ot(t, "time", r.message, e);
          break;
        case "duration":
          Ot(t, "duration", r.message, e);
          break;
        case "length":
          Oe(t, "minLength", typeof t.minLength == "number" ? Math.max(t.minLength, r.value) : r.value, r.message, e), Oe(t, "maxLength", typeof t.maxLength == "number" ? Math.min(t.maxLength, r.value) : r.value, r.message, e);
          break;
        case "includes": {
          it(t, RegExp(Qs(r.value, e)), r.message, e);
          break;
        }
        case "ip": {
          r.version !== "v6" && Ot(t, "ipv4", r.message, e), r.version !== "v4" && Ot(t, "ipv6", r.message, e);
          break;
        }
        case "base64url":
          it(t, Ft.base64url, r.message, e);
          break;
        case "jwt":
          it(t, Ft.jwt, r.message, e);
          break;
        case "cidr": {
          r.version !== "v6" && it(t, Ft.ipv4Cidr, r.message, e), r.version !== "v4" && it(t, Ft.ipv6Cidr, r.message, e);
          break;
        }
        case "emoji":
          it(t, Ft.emoji(), r.message, e);
          break;
        case "ulid": {
          it(t, Ft.ulid, r.message, e);
          break;
        }
        case "base64": {
          switch (e.base64Strategy) {
            case "format:binary": {
              Ot(t, "binary", r.message, e);
              break;
            }
            case "contentEncoding:base64": {
              Oe(t, "contentEncoding", "base64", r.message, e);
              break;
            }
            case "pattern:zod": {
              it(t, Ft.base64, r.message, e);
              break;
            }
          }
          break;
        }
        case "nanoid":
          it(t, Ft.nanoid, r.message, e);
      }
  return t;
}
function Qs(n, e) {
  return e.patternStrategy === "escape" ? Nv(n) : n;
}
const kv = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Nv(n) {
  let e = "";
  for (let t = 0; t < n.length; t++)
    kv.has(n[t]) || (e += "\\"), e += n[t];
  return e;
}
function Ot(n, e, t, r) {
  n.format || n.anyOf?.some((s) => s.format) ? (n.anyOf || (n.anyOf = []), n.format && (n.anyOf.push({
    format: n.format,
    ...n.errorMessage && r.errorMessages && {
      errorMessage: { format: n.errorMessage.format }
    }
  }), delete n.format, n.errorMessage && (delete n.errorMessage.format, Object.keys(n.errorMessage).length === 0 && delete n.errorMessage)), n.anyOf.push({
    format: e,
    ...t && r.errorMessages && { errorMessage: { format: t } }
  })) : Oe(n, "format", e, t, r);
}
function it(n, e, t, r) {
  n.pattern || n.allOf?.some((s) => s.pattern) ? (n.allOf || (n.allOf = []), n.pattern && (n.allOf.push({
    pattern: n.pattern,
    ...n.errorMessage && r.errorMessages && {
      errorMessage: { pattern: n.errorMessage.pattern }
    }
  }), delete n.pattern, n.errorMessage && (delete n.errorMessage.pattern, Object.keys(n.errorMessage).length === 0 && delete n.errorMessage)), n.allOf.push({
    pattern: Sa(e, r),
    ...t && r.errorMessages && { errorMessage: { pattern: t } }
  })) : Oe(n, "pattern", Sa(e, r), t, r);
}
function Sa(n, e) {
  if (!e.applyRegexFlags || !n.flags)
    return n.source;
  const t = {
    i: n.flags.includes("i"),
    m: n.flags.includes("m"),
    s: n.flags.includes("s")
    // `.` matches newlines
  }, r = t.i ? n.source.toLowerCase() : n.source;
  let s = "", i = !1, o = !1, a = !1;
  for (let l = 0; l < r.length; l++) {
    if (i) {
      s += r[l], i = !1;
      continue;
    }
    if (t.i) {
      if (o) {
        if (r[l].match(/[a-z]/)) {
          a ? (s += r[l], s += `${r[l - 2]}-${r[l]}`.toUpperCase(), a = !1) : r[l + 1] === "-" && r[l + 2]?.match(/[a-z]/) ? (s += r[l], a = !0) : s += `${r[l]}${r[l].toUpperCase()}`;
          continue;
        }
      } else if (r[l].match(/[a-z]/)) {
        s += `[${r[l]}${r[l].toUpperCase()}]`;
        continue;
      }
    }
    if (t.m) {
      if (r[l] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (r[l] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (t.s && r[l] === ".") {
      s += o ? `${r[l]}\r
` : `[${r[l]}\r
]`;
      continue;
    }
    s += r[l], r[l] === "\\" ? i = !0 : o && r[l] === "]" ? o = !1 : !o && r[l] === "[" && (o = !0);
  }
  try {
    new RegExp(s);
  } catch {
    return console.warn(`Could not convert regex pattern at ${e.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), n.source;
  }
  return s;
}
function yd(n, e) {
  if (e.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), e.target === "openApi3" && n.keyType?._def.typeName === K.ZodEnum)
    return {
      type: "object",
      required: n.keyType._def.values,
      properties: n.keyType._def.values.reduce((r, s) => ({
        ...r,
        [s]: Ee(n.valueType._def, {
          ...e,
          currentPath: [...e.currentPath, "properties", s]
        }) ?? gt(e)
      }), {}),
      additionalProperties: e.rejectedAdditionalProperties
    };
  const t = {
    type: "object",
    additionalProperties: Ee(n.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalProperties"]
    }) ?? e.allowedAdditionalProperties
  };
  if (e.target === "openApi3")
    return t;
  if (n.keyType?._def.typeName === K.ZodString && n.keyType._def.checks?.length) {
    const { type: r, ...s } = vd(n.keyType._def, e);
    return {
      ...t,
      propertyNames: s
    };
  } else {
    if (n.keyType?._def.typeName === K.ZodEnum)
      return {
        ...t,
        propertyNames: {
          enum: n.keyType._def.values
        }
      };
    if (n.keyType?._def.typeName === K.ZodBranded && n.keyType._def.type._def.typeName === K.ZodString && n.keyType._def.type._def.checks?.length) {
      const { type: r, ...s } = pd(n.keyType._def, e);
      return {
        ...t,
        propertyNames: s
      };
    }
  }
  return t;
}
function Ev(n, e) {
  if (e.mapStrategy === "record")
    return yd(n, e);
  const t = Ee(n.keyType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "0"]
  }) || gt(e), r = Ee(n.valueType._def, {
    ...e,
    currentPath: [...e.currentPath, "items", "items", "1"]
  }) || gt(e);
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [t, r],
      minItems: 2,
      maxItems: 2
    }
  };
}
function Dv(n) {
  const e = n.values, r = Object.keys(n.values).filter((i) => typeof e[e[i]] != "number").map((i) => e[i]), s = Array.from(new Set(r.map((i) => typeof i)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: r
  };
}
function Tv(n) {
  return n.target === "openAi" ? void 0 : {
    not: gt({
      ...n,
      currentPath: [...n.currentPath, "not"]
    })
  };
}
function Rv(n) {
  return n.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const hs = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Av(n, e) {
  if (e.target === "openApi3")
    return ka(n, e);
  const t = n.options instanceof Map ? Array.from(n.options.values()) : n.options;
  if (t.every((r) => r._def.typeName in hs && (!r._def.checks || !r._def.checks.length))) {
    const r = t.reduce((s, i) => {
      const o = hs[i._def.typeName];
      return o && !s.includes(o) ? [...s, o] : s;
    }, []);
    return {
      type: r.length > 1 ? r : r[0]
    };
  } else if (t.every((r) => r._def.typeName === "ZodLiteral" && !r.description)) {
    const r = t.reduce((s, i) => {
      const o = typeof i._def.value;
      switch (o) {
        case "string":
        case "number":
        case "boolean":
          return [...s, o];
        case "bigint":
          return [...s, "integer"];
        case "object":
          if (i._def.value === null)
            return [...s, "null"];
        default:
          return s;
      }
    }, []);
    if (r.length === t.length) {
      const s = r.filter((i, o, a) => a.indexOf(i) === o);
      return {
        type: s.length > 1 ? s : s[0],
        enum: t.reduce((i, o) => i.includes(o._def.value) ? i : [...i, o._def.value], [])
      };
    }
  } else if (t.every((r) => r._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: t.reduce((r, s) => [
        ...r,
        ...s._def.values.filter((i) => !r.includes(i))
      ], [])
    };
  return ka(n, e);
}
const ka = (n, e) => {
  const t = (n.options instanceof Map ? Array.from(n.options.values()) : n.options).map((r, s) => Ee(r._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", `${s}`]
  })).filter((r) => !!r && (!e.strictUnions || typeof r == "object" && Object.keys(r).length > 0));
  return t.length ? { anyOf: t } : void 0;
};
function Fv(n, e) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(n.innerType._def.typeName) && (!n.innerType._def.checks || !n.innerType._def.checks.length))
    return e.target === "openApi3" ? {
      type: hs[n.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        hs[n.innerType._def.typeName],
        "null"
      ]
    };
  if (e.target === "openApi3") {
    const r = Ee(n.innerType._def, {
      ...e,
      currentPath: [...e.currentPath]
    });
    return r && "$ref" in r ? { allOf: [r], nullable: !0 } : r && { ...r, nullable: !0 };
  }
  const t = Ee(n.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "0"]
  });
  return t && { anyOf: [t, { type: "null" }] };
}
function Ov(n, e) {
  const t = {
    type: "number"
  };
  if (!n.checks)
    return t;
  for (const r of n.checks)
    switch (r.kind) {
      case "int":
        t.type = "integer", hd(t, "type", r.message, e);
        break;
      case "min":
        e.target === "jsonSchema7" ? r.inclusive ? Oe(t, "minimum", r.value, r.message, e) : Oe(t, "exclusiveMinimum", r.value, r.message, e) : (r.inclusive || (t.exclusiveMinimum = !0), Oe(t, "minimum", r.value, r.message, e));
        break;
      case "max":
        e.target === "jsonSchema7" ? r.inclusive ? Oe(t, "maximum", r.value, r.message, e) : Oe(t, "exclusiveMaximum", r.value, r.message, e) : (r.inclusive || (t.exclusiveMaximum = !0), Oe(t, "maximum", r.value, r.message, e));
        break;
      case "multipleOf":
        Oe(t, "multipleOf", r.value, r.message, e);
        break;
    }
  return t;
}
function Iv(n, e) {
  const t = e.target === "openAi", r = {
    type: "object",
    properties: {}
  }, s = [], i = n.shape();
  for (const a in i) {
    let l = i[a];
    if (l === void 0 || l._def === void 0)
      continue;
    let u = Mv(l);
    u && t && (l._def.typeName === "ZodOptional" && (l = l._def.innerType), l.isNullable() || (l = l.nullable()), u = !1);
    const d = Ee(l._def, {
      ...e,
      currentPath: [...e.currentPath, "properties", a],
      propertyPath: [...e.currentPath, "properties", a]
    });
    d !== void 0 && (r.properties[a] = d, u || s.push(a));
  }
  s.length && (r.required = s);
  const o = Lv(n, e);
  return o !== void 0 && (r.additionalProperties = o), r;
}
function Lv(n, e) {
  if (n.catchall._def.typeName !== "ZodNever")
    return Ee(n.catchall._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalProperties"]
    });
  switch (n.unknownKeys) {
    case "passthrough":
      return e.allowedAdditionalProperties;
    case "strict":
      return e.rejectedAdditionalProperties;
    case "strip":
      return e.removeAdditionalStrategy === "strict" ? e.allowedAdditionalProperties : e.rejectedAdditionalProperties;
  }
}
function Mv(n) {
  try {
    return n.isOptional();
  } catch {
    return !0;
  }
}
const Pv = (n, e) => {
  if (e.currentPath.toString() === e.propertyPath?.toString())
    return Ee(n.innerType._def, e);
  const t = Ee(n.innerType._def, {
    ...e,
    currentPath: [...e.currentPath, "anyOf", "1"]
  });
  return t ? {
    anyOf: [
      {
        not: gt(e)
      },
      t
    ]
  } : gt(e);
}, zv = (n, e) => {
  if (e.pipeStrategy === "input")
    return Ee(n.in._def, e);
  if (e.pipeStrategy === "output")
    return Ee(n.out._def, e);
  const t = Ee(n.in._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", "0"]
  }), r = Ee(n.out._def, {
    ...e,
    currentPath: [...e.currentPath, "allOf", t ? "1" : "0"]
  });
  return {
    allOf: [t, r].filter((s) => s !== void 0)
  };
};
function Bv(n, e) {
  return Ee(n.type._def, e);
}
function Vv(n, e) {
  const r = {
    type: "array",
    uniqueItems: !0,
    items: Ee(n.valueType._def, {
      ...e,
      currentPath: [...e.currentPath, "items"]
    })
  };
  return n.minSize && Oe(r, "minItems", n.minSize.value, n.minSize.message, e), n.maxSize && Oe(r, "maxItems", n.maxSize.value, n.maxSize.message, e), r;
}
function $v(n, e) {
  return n.rest ? {
    type: "array",
    minItems: n.items.length,
    items: n.items.map((t, r) => Ee(t._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${r}`]
    })).reduce((t, r) => r === void 0 ? t : [...t, r], []),
    additionalItems: Ee(n.rest._def, {
      ...e,
      currentPath: [...e.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: n.items.length,
    maxItems: n.items.length,
    items: n.items.map((t, r) => Ee(t._def, {
      ...e,
      currentPath: [...e.currentPath, "items", `${r}`]
    })).reduce((t, r) => r === void 0 ? t : [...t, r], [])
  };
}
function jv(n) {
  return {
    not: gt(n)
  };
}
function Hv(n) {
  return gt(n);
}
const Wv = (n, e) => Ee(n.innerType._def, e), qv = (n, e, t) => {
  switch (e) {
    case K.ZodString:
      return vd(n, t);
    case K.ZodNumber:
      return Ov(n, t);
    case K.ZodObject:
      return Iv(n, t);
    case K.ZodBigInt:
      return pv(n, t);
    case K.ZodBoolean:
      return gv();
    case K.ZodDate:
      return gd(n, t);
    case K.ZodUndefined:
      return jv(t);
    case K.ZodNull:
      return Rv(t);
    case K.ZodArray:
      return mv(n, t);
    case K.ZodUnion:
    case K.ZodDiscriminatedUnion:
      return Av(n, t);
    case K.ZodIntersection:
      return Cv(n, t);
    case K.ZodTuple:
      return $v(n, t);
    case K.ZodRecord:
      return yd(n, t);
    case K.ZodLiteral:
      return Sv(n, t);
    case K.ZodEnum:
      return wv(n);
    case K.ZodNativeEnum:
      return Dv(n);
    case K.ZodNullable:
      return Fv(n, t);
    case K.ZodOptional:
      return Pv(n, t);
    case K.ZodMap:
      return Ev(n, t);
    case K.ZodSet:
      return Vv(n, t);
    case K.ZodLazy:
      return () => n.getter()._def;
    case K.ZodPromise:
      return Bv(n, t);
    case K.ZodNaN:
    case K.ZodNever:
      return Tv(t);
    case K.ZodEffects:
      return xv(n, t);
    case K.ZodAny:
      return gt(t);
    case K.ZodUnknown:
      return Hv(t);
    case K.ZodDefault:
      return bv(n, t);
    case K.ZodBranded:
      return pd(n, t);
    case K.ZodReadonly:
      return Wv(n, t);
    case K.ZodCatch:
      return vv(n, t);
    case K.ZodPipeline:
      return zv(n, t);
    case K.ZodFunction:
    case K.ZodVoid:
    case K.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((r) => {
      })();
  }
};
function Ee(n, e, t = !1) {
  const r = e.seen.get(n);
  if (e.override) {
    const a = e.override?.(n, e, r, t);
    if (a !== dv)
      return a;
  }
  if (r && !t) {
    const a = Uv(r, e);
    if (a !== void 0)
      return a;
  }
  const s = { def: n, path: e.currentPath, jsonSchema: void 0 };
  e.seen.set(n, s);
  const i = qv(n, n.typeName, e), o = typeof i == "function" ? Ee(i(), e) : i;
  if (o && Zv(n, e, o), e.postProcess) {
    const a = e.postProcess(o, n, e);
    return s.jsonSchema = o, a;
  }
  return s.jsonSchema = o, o;
}
const Uv = (n, e) => {
  switch (e.$refStrategy) {
    case "root":
      return { $ref: n.path.join("/") };
    case "relative":
      return { $ref: md(e.currentPath, n.path) };
    case "none":
    case "seen":
      return n.path.length < e.currentPath.length && n.path.every((t, r) => e.currentPath[r] === t) ? (console.warn(`Recursive reference detected at ${e.currentPath.join("/")}! Defaulting to any`), gt(e)) : e.$refStrategy === "seen" ? gt(e) : void 0;
  }
}, Zv = (n, e, t) => (n.description && (t.description = n.description, e.markdownDescription && (t.markdownDescription = n.description)), t), Na = (n, e) => {
  const t = hv(e);
  let r = typeof e == "object" && e.definitions ? Object.entries(e.definitions).reduce((a, [l, u]) => ({
    ...a,
    [l]: Ee(u._def, {
      ...t,
      currentPath: [...t.basePath, t.definitionPath, l]
    }, !0) ?? gt(t)
  }), {}) : void 0;
  const s = typeof e == "string" ? e : e?.name, i = Ee(
    n._def,
    t,
    !1
  ) ?? gt(t);
  t.flags.hasReferencedOpenAiAnyType && (r || (r = {}), r[t.openAiAnyTypeName] || (r[t.openAiAnyTypeName] = {
    // Skipping "object" as no properties can be defined and additionalProperties must be "false"
    type: ["string", "number", "integer", "boolean", "array", "null"],
    items: {
      $ref: t.$refStrategy === "relative" ? "1" : [
        ...t.basePath,
        t.definitionPath,
        t.openAiAnyTypeName
      ].join("/")
    }
  }));
  const o = s === void 0 ? r ? {
    ...i,
    [t.definitionPath]: r
  } : i : {
    $ref: [
      ...t.$refStrategy === "relative" ? [] : t.basePath,
      t.definitionPath,
      s
    ].join("/"),
    [t.definitionPath]: {
      ...r,
      [s]: i
    }
  };
  return t.target === "jsonSchema7" ? o.$schema = "http://json-schema.org/draft-07/schema#" : (t.target === "jsonSchema2019-09" || t.target === "openAi") && (o.$schema = "https://json-schema.org/draft/2019-09/schema#"), t.target === "openAi" && ("anyOf" in o || "oneOf" in o || "allOf" in o || "type" in o && Array.isArray(o.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), o;
};
function Is() {
  const [n, e] = ee(!1), [t, r] = ee(!1), s = Z((p) => {
    e(p.isSubmitting), r(p.hasErrors);
  }), i = Z(null), o = Z({
    get current() {
      return i.current;
    },
    set current(p) {
      i.current = p, p && p._setStateCallback(s.current);
    }
  }), a = B(async () => {
    if (!i.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return i.current.submit();
  }, []), l = B(() => {
    if (!i.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    i.current.reset();
  }, []), u = B(() => i.current ? i.current.isDirty() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), d = B(() => i.current ? i.current.getValues() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), f = B(
    (p, b, v) => {
      if (!i.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      i.current.setValue(p, b, v);
    },
    []
  ), h = B(
    (p, b) => {
      if (!i.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      i.current.setValues(p, b);
    },
    []
  ), m = B(async (p) => i.current ? i.current.trigger(p) : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), g = B(() => i.current ? i.current.getErrors() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), y = B(() => i.current ? i.current.getFieldNames() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), []), []);
  return {
    formRef: o.current,
    submit: a,
    reset: l,
    isDirty: u,
    getValues: d,
    setValue: f,
    setValues: h,
    trigger: m,
    getErrors: g,
    getFieldNames: y,
    isSubmitting: n,
    hasErrors: t
  };
}
const bd = ct(null);
function Gv() {
  const n = Je(bd);
  if (!n)
    throw new Error("useF0Wizard must be used within a F0Wizard");
  return n;
}
function Qv({ children: n, ...e }) {
  return /* @__PURE__ */ c(bd.Provider, { value: e, children: n });
}
const Kv = fn({
  base: "flex-1 text-base font-medium leading-5 tracking-[-0.005em]",
  variants: {
    state: {
      active: "text-f1-foreground",
      completed: "text-f1-foreground-secondary",
      upcoming: "text-f1-foreground"
    }
  }
});
function Xv(n, e, t) {
  return n === e ? "active" : t ? "completed" : "upcoming";
}
function Yv({ state: n, index: e }) {
  return n === "completed" ? /* @__PURE__ */ c("span", { className: "flex h-5 w-5 min-w-5 shrink-0 items-center justify-center rounded-xs bg-f1-background-secondary text-f1-foreground-secondary", children: /* @__PURE__ */ c(Tt, { className: "h-3 w-3" }) }) : /* @__PURE__ */ c(
    xu,
    {
      value: e + 1,
      type: n === "active" ? "selected" : "default",
      size: "md"
    }
  );
}
function Jv() {
  const { steps: n, currentStep: e, goToStep: t, allowStepSkipping: r } = Gv();
  return /* @__PURE__ */ c("nav", { "aria-label": "Wizard steps", className: "flex flex-col gap-1.5 p-1", children: n.map((s, i) => {
    const o = i < e || s.isCompleted?.() === !0, a = Xv(i, e, o), l = n[e]?.hasErrors?.() === !0, u = i > e && n.slice(e, i).some((m) => m.hasErrors?.() === !0);
    let d = i !== e && !l && !u && n.slice(0, i).every((m) => m.isCompleted?.() !== !1);
    return d && !r && i > e + 1 && (d = !1), /* @__PURE__ */ T(
      "button",
      {
        type: "button",
        onClick: () => {
          d && t(i);
        },
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && d && (m.preventDefault(), t(i));
        },
        disabled: !d && i !== e,
        "aria-current": i === e ? "step" : void 0,
        className: Y(
          ps(),
          "flex cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left",
          a === "active" && "bg-f1-background-selected",
          d && "hover:bg-f1-background-secondary-hover",
          !d && i !== e && "cursor-default opacity-70"
        ),
        children: [
          /* @__PURE__ */ c(Yv, { state: a, index: i }),
          /* @__PURE__ */ c("span", { className: Kv({ state: a }), children: s.title })
        ]
      },
      i
    );
  }) });
}
function ey({
  steps: n,
  defaultStepIndex: e = 0,
  onSubmit: t,
  onStepChanged: r,
  allowStepSkipping: s = !1,
  autoCloseOnLastStepSubmit: i = !1,
  onClose: o
}) {
  const [a, l] = ee(e), [u, d] = ee(!1), f = Z(n);
  f.current = n;
  const h = B(
    (p) => {
      l(p), r?.(p);
    },
    [r]
  ), m = B(
    async (p) => {
      if (!(p < 0 || p >= f.current.length || f.current[a]?.hasErrors?.() === !0 || !s && p > a + 1 || p > a && f.current.slice(a, p).some((k) => k.hasErrors?.() === !0) || !f.current.slice(0, p).every((v) => v.isCompleted?.() !== !1))) {
        if (p > a) {
          d(!0);
          try {
            for (let v = a; v < p; v++) {
              const k = f.current[v];
              k?.onNext && await k.onNext();
            }
            h(p);
          } catch {
          } finally {
            d(!1);
          }
          return;
        }
        h(p);
      }
    },
    [h, a, s]
  ), g = B(async () => {
    const p = f.current[a];
    if (p) {
      d(!0);
      try {
        p.onNext && await p.onNext(), a === f.current.length - 1 ? (t && await t(), i && o?.()) : h(a + 1);
      } catch {
      } finally {
        d(!1);
      }
    }
  }, [a, t, h, i, o]), y = B(() => {
    a > 0 && h(a - 1);
  }, [a, h]);
  return {
    currentStep: a,
    loading: u,
    goToStep: m,
    goNext: g,
    goPrevious: y
  };
}
const ty = () => {
}, yo = ({
  steps: n,
  children: e,
  isOpen: t,
  onClose: r = ty,
  title: s,
  width: i = "xl",
  defaultStepIndex: o,
  nextLabel: a,
  previousLabel: l,
  submitLabel: u,
  onSubmit: d,
  onStepChanged: f,
  allowStepSkipping: h = !1,
  autoCloseOnLastStepSubmit: m = !1,
  autoSkipCompletedSteps: g = !1
}) => {
  const y = H(() => {
    if (o !== void 0) return o;
    if (!g) return 0;
    const A = n.findIndex(
      (I) => I.isCompleted?.() !== !0
    );
    return A === -1 ? n.length - 1 : A;
  }, [o, g, n]), p = ey({
    steps: n,
    defaultStepIndex: y,
    onSubmit: d,
    onStepChanged: f,
    allowStepSkipping: h,
    autoCloseOnLastStepSubmit: m,
    onClose: r
  }), b = De(), v = n[p.currentStep], k = p.currentStep === 0, C = p.currentStep === n.length - 1, x = C ? v?.nextLabel ?? u ?? b.wizard.submit : v?.nextLabel ?? a ?? b.wizard.next, _ = v?.previousLabel ?? l ?? b.wizard.previous, w = H(
    () => ({
      label: x,
      icon: C ? void 0 : si,
      onClick: () => {
        p.goNext();
      },
      disabled: v?.isCompleted?.() === !1 || v?.hasErrors?.() === !0,
      loading: p.loading
    }),
    [x, C, p, v]
  ), N = H(
    () => k ? void 0 : {
      label: _,
      icon: il,
      onClick: p.goPrevious,
      disabled: p.loading
    },
    [k, _, p]
  );
  return /* @__PURE__ */ c(
    wu,
    {
      isOpen: t,
      onClose: r,
      width: i,
      title: s,
      primaryAction: w,
      secondaryAction: N,
      disableContentPadding: !0,
      children: /* @__PURE__ */ c(
        Qv,
        {
          currentStep: p.currentStep,
          totalSteps: n.length,
          loading: p.loading,
          goToStep: p.goToStep,
          goNext: p.goNext,
          goPrevious: p.goPrevious,
          steps: n,
          allowStepSkipping: h,
          children: /* @__PURE__ */ T("div", { className: "flex h-[58vh] flex-1 flex-row", children: [
            /* @__PURE__ */ c("div", { className: "w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2", children: /* @__PURE__ */ c(Jv, {}) }),
            /* @__PURE__ */ c("div", { className: "flex-1 overflow-y-auto px-8", children: e({
              currentStep: p.currentStep,
              goToStep: p.goToStep
            }) })
          ] })
        }
      )
    }
  );
};
yo.displayName = "F0Wizard";
function xd(n) {
  const t = mn(n).shape, r = Object.entries(t);
  return r.length === 0 ? !1 : r.every(([, s]) => pn(s)?.disabled === !0);
}
function ny(n, e) {
  if (e) return Object.keys(e);
  const r = mn(n).shape, s = /* @__PURE__ */ new Set();
  for (const i of Object.values(r)) {
    const o = pn(i);
    o?.section && s.add(o.section);
  }
  return Array.from(s);
}
function Ks(n, e) {
  const t = n.shape, r = {};
  for (const [s, i] of Object.entries(t)) {
    const o = pn(i);
    o?.section && e.includes(o.section) && (r[s] = i);
  }
  return uo(r);
}
function wd(n, e, t) {
  const r = e ?? {};
  if (t) return t({ data: r });
  const i = mn(n).shape;
  return Object.entries(i).every(([o, a]) => {
    if (a.isOptional()) return !0;
    const l = r[o];
    return l != null && l !== "";
  });
}
const ry = 3e3;
function _d() {
  const { forms: n } = De(), [e, t] = ee("idle"), [r, s] = ee(), i = Z(null);
  re(() => () => {
    i.current && clearTimeout(i.current);
  }, []);
  const o = B((u) => {
    i.current && (clearTimeout(i.current), i.current = null), s(u), t("success"), i.current = setTimeout(() => {
      t("idle"), s(void 0), i.current = null;
    }, ry);
  }, []), a = e === "success" ? r ?? n.actionBar.saved : void 0, l = H(
    () => /* @__PURE__ */ c(
      ri,
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
function Cd(n, e, t, r, s, i, o) {
  return (t ?? n.map((l) => ({
    title: e?.[l]?.title ?? l,
    sectionIds: [l]
  }))).map((l, u) => {
    const d = r(l.sectionIds), f = o?.(u) ?? !1;
    return {
      title: l.title,
      nextLabel: l.nextLabel,
      previousLabel: l.previousLabel,
      isCompleted: d || f ? () => !0 : void 0,
      hasErrors: i ? () => i(u) : void 0,
      onNext: s(u)
    };
  });
}
function Xn(n, e, t) {
  if (t)
    return t[n]?.sectionIds ?? [];
  const r = e[n];
  return r ? [r] : [];
}
function sy({
  formDefinition: n,
  steps: e,
  isOpen: t,
  onClose: r,
  title: s,
  width: i,
  defaultStepIndex: o,
  nextLabel: a,
  previousLabel: l,
  onStepChanged: u,
  allowStepSkipping: d,
  autoCloseOnLastStepSubmit: f,
  linkAfterLastStepSubmit: h,
  autoSkipCompletedSteps: m = !1,
  renderCustomField: g
}) {
  const {
    name: y,
    schema: p,
    sections: b,
    defaultValues: v,
    onSubmit: k,
    submitConfig: C,
    errorTriggerMode: x = "on-blur"
  } = n, _ = C?.label, w = H(() => Object.keys(p), [p]), N = H(() => e ? e.some(
    (ne) => ne.sectionIds.length > 1
  ) ? (process.env.NODE_ENV !== "production" && console.error(
    "[F0WizardForm] Per-section schema mode does not support grouping multiple sections into a single step. Each section requires its own independent form and submit. Steps with multiple sectionIds will be automatically split into separate steps."
  ), e.flatMap(
    (ne) => ne.sectionIds.map((de) => ({
      title: b?.[de]?.title ?? ne.title,
      sectionIds: [de],
      nextLabel: ne.nextLabel,
      previousLabel: ne.previousLabel
    }))
  )) : e : void 0, [e, b]), A = Z({}), I = Z(o ?? 0), D = H(
    () => Object.fromEntries(w.map((he) => [he, null])),
    [w]
  ), [L, E] = ee({}), M = Z(L);
  M.current = L;
  const P = B(
    (he) => he.every((ne) => {
      const de = p[ne];
      return de ? xd(de) : !1;
    }),
    [p]
  ), $ = B(
    (he) => async () => {
      const ne = Xn(he, w, N);
      for (const de of ne) {
        const Le = D[de];
        Le && await Le.submit();
      }
    },
    [w, N, D]
  ), W = B(
    (he) => Xn(he, w, N).some((de) => M.current[de] === !0),
    [w, N]
  ), ce = H(
    () => N ?? w.map((he) => ({
      title: b?.[he]?.title ?? he,
      sectionIds: [he]
    })),
    [N, w, b]
  ), G = B(
    (he) => {
      if (!m) return !1;
      const ne = ce[he];
      return ne ? ne.sectionIds.every((de) => {
        const Le = p[de];
        if (!Le) return !1;
        const je = v?.[de] ?? A.current[de];
        return wd(Le, je, ne.isCompleted);
      }) : !1;
    },
    [m, ce, p, v]
  ), oe = H(() => {
    if (o !== void 0) return o;
    if (!m) return;
    const he = ce.findIndex(
      (ne, de) => !G(de)
    );
    return he === -1 ? ce.length - 1 : he;
  }, [o, m, ce, G]), me = H(
    () => Cd(
      w,
      b,
      N,
      P,
      $,
      W,
      m ? G : void 0
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      w,
      b,
      N,
      P,
      $,
      W,
      L,
      m,
      G
    ]
  ), z = Z(null), { showSuccess: V, ActionBar: Q } = _d(), ge = B(
    (he) => async (ne) => {
      A.current[he] = ne;
      const de = await k({
        sectionId: he,
        data: ne,
        fullData: { ...A.current }
      });
      return z.current = de, de.success && de.message && V(de.message), de;
    },
    [k, V]
  ), ae = B(() => {
    if (z.current?.success) {
      if (h) {
        const ne = h({
          fullData: { ...A.current }
        });
        window.location.href = ne;
        return;
      }
      f && r?.();
    }
  }, [f, h, r]), be = B(() => {
    const he = Xn(
      I.current,
      w,
      N
    );
    for (const ne of he) {
      const de = D[ne];
      de && (A.current[ne] = de.getValues());
    }
  }, [w, N, D]), xe = B(
    (he) => {
      be(), I.current = he, u?.(he);
    },
    [be, u]
  );
  return /* @__PURE__ */ c(
    yo,
    {
      steps: me,
      isOpen: t,
      onClose: r,
      title: s,
      width: i,
      defaultStepIndex: oe,
      nextLabel: a,
      previousLabel: l,
      submitLabel: _,
      onSubmit: ae,
      onStepChanged: xe,
      allowStepSkipping: d,
      children: ({ currentStep: he }) => {
        const ne = Xn(
          he,
          w,
          N
        );
        return /* @__PURE__ */ T(Ye, { children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 pb-5", children: ne.map((de) => {
            const Le = p[de];
            if (!Le) return null;
            const je = b?.[de], Re = A.current[de], tt = v?.[de];
            return /* @__PURE__ */ c(
              iy,
              {
                sectionId: de,
                formName: y,
                schema: Le,
                sectionConfig: je,
                defaultValues: Re ?? tt,
                onSubmit: ge(de),
                submitConfig: C,
                errorTriggerMode: x,
                sectionForms: D,
                onErrorStateChange: (yt) => {
                  E((S) => S[de] === yt ? S : { ...S, [de]: yt });
                },
                renderCustomField: g,
                isLoading: n.isLoading
              },
              de
            );
          }) }),
          Q
        ] });
      }
    }
  );
}
function iy({
  sectionId: n,
  formName: e,
  schema: t,
  sectionConfig: r,
  defaultValues: s,
  onSubmit: i,
  submitConfig: o,
  errorTriggerMode: a,
  sectionForms: l,
  onErrorStateChange: u,
  renderCustomField: d,
  isLoading: f
}) {
  const h = Is();
  re(() => (l[n] = h, () => {
    l[n] = null;
  }), [l, n, h]);
  const m = Z(u);
  return m.current = u, re(() => {
    m.current(h.hasErrors);
  }, [h.hasErrors]), /* @__PURE__ */ c(
    fd,
    {
      formName: e,
      sectionId: n,
      schema: t,
      sectionConfig: r,
      defaultValues: s,
      onSubmit: i,
      submitConfig: {
        ...o,
        hideSubmitButton: !0
      },
      errorTriggerMode: a,
      formRef: h.formRef,
      renderCustomField: d,
      isLoading: f
    }
  );
}
function oy({
  formDefinition: n,
  steps: e,
  isOpen: t,
  onClose: r,
  title: s,
  width: i,
  defaultStepIndex: o,
  nextLabel: a,
  previousLabel: l,
  onStepChanged: u,
  allowStepSkipping: d,
  autoCloseOnLastStepSubmit: f,
  linkAfterLastStepSubmit: h,
  autoSkipCompletedSteps: m = !1,
  renderCustomField: g
}) {
  const {
    name: y,
    schema: p,
    sections: b,
    defaultValues: v,
    onSubmit: k,
    submitConfig: C,
    errorTriggerMode: x = "on-blur"
  } = n, _ = C?.label, w = H(() => mn(p), [p]), N = H(
    () => ny(p, b),
    [p, b]
  ), A = B(
    (ae) => {
      const be = Ks(w, ae);
      return xd(be);
    },
    [w]
  ), I = Is(), D = Z(
    v ? { ...v } : {}
  ), L = Z(o ?? 0), E = B(
    (ae) => async () => {
      await I.submit();
    },
    [I]
  ), M = B(
    (ae) => I.hasErrors,
    [I.hasErrors]
  ), P = H(
    () => e ?? N.map((ae) => ({
      title: b?.[ae]?.title ?? ae,
      sectionIds: [ae]
    })),
    [e, N, b]
  ), $ = B(
    (ae) => {
      if (!m) return !1;
      const be = P[ae];
      if (!be) return !1;
      const xe = Ks(
        w,
        be.sectionIds
      );
      return wd(xe, v, be.isCompleted);
    },
    [m, P, w, v]
  ), W = H(() => {
    if (o !== void 0) return o;
    if (!m) return;
    const ae = P.findIndex(
      (be, xe) => !$(xe)
    );
    return ae === -1 ? P.length - 1 : ae;
  }, [o, m, P, $]), ce = H(
    () => Cd(
      N,
      b,
      e,
      A,
      E,
      M,
      m ? $ : void 0
    ),
    [
      N,
      b,
      e,
      A,
      E,
      M,
      m,
      $
    ]
  ), G = Z(null), oe = Z(null), { showSuccess: me, ActionBar: z } = _d(), V = B(
    async (ae) => {
      Object.assign(D.current, ae);
      const be = { ...D.current };
      oe.current = be;
      const xe = await k({ data: be });
      return G.current = xe, xe;
    },
    [k]
  ), Q = B(() => {
    const ae = G.current;
    if (ae?.success) {
      if (me(ae.message), h) {
        const be = h({
          fullData: oe.current
        });
        window.location.href = be;
        return;
      }
      f && r?.();
    }
  }, [f, h, r, me]), ge = B(
    (ae) => {
      const be = I.getValues();
      Object.assign(D.current, be), L.current = ae, u?.(ae);
    },
    [I, u]
  );
  return /* @__PURE__ */ c(
    yo,
    {
      steps: ce,
      isOpen: t,
      onClose: r,
      title: s,
      width: i,
      defaultStepIndex: W,
      nextLabel: a,
      previousLabel: l,
      submitLabel: _,
      onSubmit: Q,
      onStepChanged: ge,
      allowStepSkipping: d,
      children: ({ currentStep: ae }) => {
        const be = Xn(
          ae,
          N,
          e
        ), xe = Ks(
          w,
          be
        ), he = be.reduce((ne, de) => (b?.[de] && (ne[de] = b[de]), ne), {});
        return /* @__PURE__ */ T(Ye, { children: [
          /* @__PURE__ */ c("div", { className: "pb-5", children: /* @__PURE__ */ c(
            kr,
            {
              name: `${y}-step-${ae}`,
              schema: xe,
              sections: he,
              defaultValues: D.current,
              onSubmit: V,
              submitConfig: { hideSubmitButton: !0, hideActionBar: !0 },
              errorTriggerMode: x,
              formRef: I.formRef,
              renderCustomField: g,
              isLoading: n.isLoading
            },
            ae
          ) }),
          z
        ] });
      }
    }
  );
}
function Sd(n) {
  return n.formDefinition._brand === "per-section" ? /* @__PURE__ */ c(
    sy,
    {
      ...n
    }
  ) : /* @__PURE__ */ c(
    oy,
    {
      ...n
    }
  );
}
Sd.displayName = "F0WizardForm";
function ay(n) {
  if (typeof n != "object" || n === null) return !1;
  const t = n._def;
  return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
function ly(n, e) {
  const t = typeof n == "function", [r, s] = ee(
    t ? void 0 : n
  ), [i, o] = ee(t), a = Z(n);
  return a.current = n, re(() => {
    if (typeof a.current != "function") return;
    const l = new AbortController();
    o(!0);
    const u = a.current;
    return u(e ? {} : l.signal).then((f) => {
      l.signal.aborted || (s(f), o(!1));
    }).catch((f) => {
      l.signal.aborted || (console.warn(
        "[useF0FormDefinition] Async defaultValues rejected:",
        f
      ), s(void 0), o(!1));
    }), () => {
      l.abort();
    };
  }, [t, e]), t ? { resolved: r, isLoading: i } : { resolved: n, isLoading: !1 };
}
function kd(n) {
  const {
    name: e,
    schema: t,
    sections: r,
    defaultValues: s,
    onSubmit: i,
    submitConfig: o,
    errorTriggerMode: a,
    defaultValuesParamsSchema: l
  } = n, u = typeof s == "function" && l ? s : void 0, d = !!l, { resolved: f, isLoading: h } = ly(
    s,
    d
  );
  return H(() => {
    const m = ay(t) ? "single" : "per-section";
    return {
      name: e,
      schema: t,
      sections: r,
      defaultValues: f,
      onSubmit: i,
      submitConfig: o,
      errorTriggerMode: a,
      isLoading: h,
      defaultValuesParamsSchema: l,
      defaultValuesFn: u,
      _brand: m
    };
  }, [
    e,
    t,
    r,
    f,
    i,
    o,
    a,
    h,
    l,
    u
  ]);
}
const cy = Pe(Sd), dy = kr;
function uy({
  definition: n,
  initialValues: e,
  onClose: t
}) {
  const { formRef: r, submit: s, isSubmitting: i, hasErrors: o } = Is(), a = kd({
    name: n.name,
    schema: n.schema,
    defaultValues: e,
    sections: n.sections,
    submitConfig: { type: "default", hideSubmitButton: !0 },
    onSubmit: async ({ data: l }) => (await n.onSubmit?.(l), t(), { success: !0 })
  });
  return /* @__PURE__ */ c(
    ol,
    {
      isOpen: !0,
      onClose: t,
      title: n.title ?? n.name,
      description: n.description,
      primaryAction: {
        label: "Submit",
        onClick: s,
        loading: i,
        disabled: o
      },
      secondaryAction: { label: "Cancel", onClick: t },
      children: /* @__PURE__ */ c(dy, { formDefinition: a, formRef: r })
    }
  );
}
function fy({
  definition: n,
  initialValues: e,
  onClose: t
}) {
  const r = kd({
    name: n.name,
    schema: n.schema,
    defaultValues: e,
    sections: n.sections,
    onSubmit: async ({ data: s }) => (await n.onSubmit?.(s), { success: !0 })
  });
  return /* @__PURE__ */ c(
    cy,
    {
      isOpen: !0,
      onClose: t,
      title: n.title ?? n.name,
      formDefinition: r,
      steps: n.steps,
      autoCloseOnLastStepSubmit: !0
    }
  );
}
function hy({
  presentedForm: n,
  onClose: e
}) {
  const { mode: t, definition: r, initialValues: s } = n, i = H(
    () => `${n.name}-${JSON.stringify(s)}`,
    [n.name, s]
  );
  return t === "wizard" ? /* @__PURE__ */ c(
    fy,
    {
      definition: r,
      initialValues: s,
      onClose: e
    },
    i
  ) : /* @__PURE__ */ c(
    uy,
    {
      definition: r,
      initialValues: s,
      onClose: e
    },
    i
  );
}
function Ax(n) {
  return n;
}
function Xs(n, e = {}) {
  return typeof n == "function" ? n(e) : n ?? {};
}
function Ea(n, e = {}, t) {
  let r = { ...e };
  const s = { ...e }, i = /* @__PURE__ */ new Set();
  return { ref: {
    current: {
      submit: async () => {
        const l = n.safeParse(r);
        if (!l.success)
          throw new Error(l.error.issues.map((u) => u.message).join(", "));
        await t?.(l.data);
      },
      reset: () => {
        r = { ...s }, i.clear();
      },
      isDirty: () => JSON.stringify(r) !== JSON.stringify(s),
      getValues: () => ({ ...r }),
      setValue: (l, u, d) => {
        r = { ...r, [l]: u }, i.add(l);
      },
      setValues: (l, u) => {
        r = { ...r, ...l };
        for (const d of Object.keys(l))
          i.add(d);
      },
      trigger: async (l) => {
        if (l) {
          const d = lt(n).shape?.[l];
          return d ? d.safeParse(r[l]).success : !0;
        }
        return n.safeParse(r).success;
      },
      getErrors: () => {
        const l = n.safeParse(r);
        if (l.success) return {};
        const u = {};
        for (const d of l.error.issues) {
          const f = d.path.join(".");
          f && !u[f] && (u[f] = d.message);
        }
        return u;
      },
      getFieldNames: () => {
        const l = lt(n);
        return Object.keys(l.shape ?? {});
      },
      actionBar: {
        wiggle: () => {
        }
      },
      _setStateCallback: () => {
      }
    }
  }, dirtyFields: i };
}
function my(n) {
  const t = lt(n).shape;
  if (!t) return {};
  const r = {};
  for (const [s, i] of Object.entries(t)) {
    const o = pn(i), a = i.description;
    (o?.label || a) && (r[s] = {
      label: o?.label ?? s,
      ...o?.section && { section: o.section },
      ...o?.placeholder && { placeholder: o.placeholder },
      ...o?.helpText && { helpText: o.helpText },
      ...a && { description: a },
      ...o?.customFieldName && {
        customFieldName: o.customFieldName
      }
    });
  }
  return r;
}
function py(n) {
  if (!n) return {};
  const e = {};
  for (const [t, r] of Object.entries(n))
    e[t] = {
      title: r.title,
      ...r.description && { description: r.description }
    };
  return e;
}
const Nd = ct(null);
function Fx({
  children: n,
  availableFormDefinitions: e
}) {
  const t = Z(/* @__PURE__ */ new Map()), r = Z(""), [s, i] = ee(
    null
  ), [o, a] = ee([]), l = B(() => {
    queueMicrotask(() => {
      const b = Array.from(t.current.entries());
      if (b.length === 0) {
        r.current !== "[]" && (r.current = "[]", a([]));
        return;
      }
      const v = b.map(([C, x]) => {
        const _ = x.ref.current;
        return _ ? {
          formName: C,
          formSchema: Na(x.schema),
          fieldDescriptions: my(x.schema),
          sectionDescriptions: py(x.sections),
          formValues: _.getValues(),
          formErrors: _.getErrors(),
          isDirty: _.isDirty(),
          ...x.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: Na(
              x.defaultValuesParamsSchema
            )
          } : {}
        } : void 0;
      }).filter((C) => C !== null), k = JSON.stringify(v);
      k !== r.current && (r.current = k, a(v));
    });
  }, []), u = B(
    (b, v, k, C, x, _) => {
      t.current.set(b, {
        ref: v,
        schema: k,
        sections: C,
        defaultValuesParamsSchema: x,
        defaultValuesFn: _
      }), l();
    },
    [l]
  ), d = B(
    (b) => {
      if (t.current.get(b)?.virtual) return;
      t.current.delete(b);
      const k = e?.find((C) => C.name === b);
      if (k) {
        const { ref: C, dirtyFields: x } = Ea(
          k.schema,
          Xs(k.defaultValues),
          k.onSubmit
        );
        t.current.set(b, {
          ref: C,
          schema: k.schema,
          sections: k.sections,
          virtual: !0,
          defaultValuesParamsSchema: k.defaultValuesParamsSchema,
          dirtyFields: x
        });
      }
      l();
    },
    [l, e]
  ), f = B((b) => t.current.get(b), []), h = B(() => Array.from(t.current.keys()), []), m = B(
    (b, v, k) => {
      const C = e?.find((A) => A.name === b);
      if (!C)
        return {
          success: !1,
          error: `Form "${b}" not found in availableFormDefinitions`
        };
      if (k && C.defaultValuesParamsSchema) {
        const A = C.defaultValuesParamsSchema.safeParse(k);
        if (!A.success)
          return {
            success: !1,
            error: `Invalid defaultValuesParams for form "${b}": ${A.error.issues.map((I) => I.message).join(", ")}`
          };
      }
      const x = Xs(
        C.defaultValues,
        k ?? {}
      ), _ = t.current.get(b), w = _?.ref.current;
      let N;
      if (k && _?.dirtyFields) {
        const A = w?.getValues() ?? {}, I = {};
        for (const D of _.dirtyFields)
          D in A && (I[D] = A[D]);
        N = { ...x, ...I };
      } else
        N = w?.getValues() ?? x;
      return i({
        name: b,
        mode: v,
        definition: C,
        initialValues: N
      }), { success: !0 };
    },
    [e]
  ), g = B(() => {
    i(null);
  }, []), y = Z(/* @__PURE__ */ new Set());
  re(() => {
    const b = e ?? [], v = /* @__PURE__ */ new Set();
    for (const k of b) {
      v.add(k.name);
      const C = t.current.get(k.name);
      if (C && !C.virtual || C?.virtual) continue;
      const { ref: x, dirtyFields: _ } = Ea(
        k.schema,
        Xs(k.defaultValues),
        k.onSubmit
      );
      t.current.set(k.name, {
        ref: x,
        schema: k.schema,
        sections: k.sections,
        virtual: !0,
        defaultValuesParamsSchema: k.defaultValuesParamsSchema,
        dirtyFields: _
      });
    }
    for (const k of y.current)
      v.has(k) || t.current.get(k)?.virtual && t.current.delete(k);
    return y.current = v, l(), () => {
      for (const k of v)
        t.current.get(k)?.virtual && t.current.delete(k);
      l();
    };
  }, [e, l]);
  const p = {
    register: u,
    unregister: d,
    get: f,
    getFormNames: h,
    rebuildDescriptions: l,
    formDescriptions: o,
    presentedForm: s,
    presentForm: m,
    dismissForm: g
  };
  return /* @__PURE__ */ T(Nd.Provider, { value: p, children: [
    n,
    s && /* @__PURE__ */ c(
      hy,
      {
        presentedForm: s,
        onClose: g
      }
    )
  ] });
}
function gy() {
  return Je(Nd);
}
const Ys = "f0-form-error-navigate", Js = /* @__PURE__ */ new WeakMap();
function Si(n, e) {
  if (typeof document > "u") return null;
  const t = xn(n, void 0, e), r = document.getElementById(t);
  if (r) return r;
  const s = `forms.${n}.`, i = `.${e}`;
  return document.querySelector(
    `[id^="${s}"][id$="${i}"]`
  );
}
const vy = (n) => {
  const e = Js.get(n);
  e && clearTimeout(e), n.classList.remove(Ys), n.offsetWidth, n.classList.add(Ys);
  const t = setTimeout(() => {
    n.classList.remove(Ys), Js.delete(n);
  }, 600);
  Js.set(n, t);
};
function yy(n) {
  let e = n;
  for (; e && e.offsetParent === null && e.parentElement; )
    e = e.parentElement;
  return e ?? n;
}
function Da(n, e, { highlight: t = !1 } = {}) {
  const r = Si(n, e);
  r && by(r, { highlight: t });
}
function by(n, { highlight: e = !1 } = {}) {
  const t = yy(n);
  t.scrollIntoView({ behavior: "smooth", block: "center" });
  const r = t.querySelector("input, textarea, select, button");
  r instanceof HTMLElement && r.focus(), e && vy(t);
}
function xy({
  formName: n,
  errors: e
}) {
  const t = Object.keys(e).filter((b) => b !== "root"), r = typeof document > "u" ? t : [...t].sort((b, v) => {
    const k = Si(n, b), C = Si(n, v);
    if (!k || !C) return 0;
    const x = k.compareDocumentPosition(C);
    return x & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : x & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }), s = r.length > 0, i = r.length, [o, a] = ee(null), l = o ? Math.max(0, r.indexOf(o)) : 0, u = Z(r);
  u.current = r;
  const d = Z(o);
  d.current = o;
  const f = B(() => {
    const b = d.current;
    if (!b) return 0;
    const v = u.current.indexOf(b);
    return v === -1 ? 0 : v;
  }, []), h = Z([]);
  re(() => {
    const b = r, v = h.current, k = b.find(
      (C) => !v.includes(C)
    );
    k && (Da(n, k, { highlight: !0 }), a(k)), h.current = b;
  }, [r, n]);
  const m = B(
    (b) => {
      const v = u.current;
      if (v.length === 0) return;
      const k = (b % v.length + v.length) % v.length, C = v[k];
      a(C), Da(n, C, { highlight: !0 });
    },
    [n]
  ), g = B(() => {
    m(f() - 1);
  }, [f, m]), y = B(() => {
    m(f() + 1);
  }, [f, m]), p = B(() => {
    a(null), h.current = [];
  }, []);
  return {
    fieldErrors: r,
    hasErrors: s,
    errorCount: i,
    currentErrorIndex: l,
    goToPreviousError: g,
    goToNextError: y,
    resetErrorNavigation: p
  };
}
function wy(n) {
  const e = {};
  function t(r, s) {
    for (const [i, o] of Object.entries(r)) {
      if (i === "root") continue;
      const a = s ? `${s}.${i}` : i;
      if (o && typeof o == "object" && !Array.isArray(o)) {
        const l = o;
        "message" in l && typeof l.message == "string" ? e[a] = l.message : t(l, a);
      }
    }
  }
  return t(n, ""), e;
}
function _y(n) {
  if (typeof n != "object" || n === null) return !1;
  const t = n._def;
  return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
const Cy = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Ed(n) {
  const {
    name: e,
    schema: t,
    sections: r,
    defaultValues: s,
    onSubmit: i,
    submitConfig: o,
    className: a,
    errorTriggerMode: l = "on-blur",
    styling: u,
    initialFiles: d,
    renderCustomField: f,
    isLoading: h,
    useUpload: m
  } = n, g = u?.showSectionsSidepanel ?? !1, y = H(() => Object.keys(t), [t]), p = B(
    (x) => {
      const _ = xn(e, x), w = document.getElementById(_);
      w && w.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [e]
  ), [b, v] = ee(
    y[0]
  ), k = H(() => !r || !g ? [] : y.map((x) => ({
    id: x,
    label: r[x]?.title ?? x,
    onClick: () => {
      v(x), p(x);
    }
  })), [r, y, g, p]), C = /* @__PURE__ */ c("div", { className: Y("flex w-full flex-col", id, a), children: y.map((x, _) => {
    const w = t[x], N = r?.[x], A = s?.[x], I = N?.submitConfig ?? o;
    return /* @__PURE__ */ c(
      "div",
      {
        id: xn(e, x),
        className: Y("scroll-mt-4", _ !== 0 && sd),
        children: /* @__PURE__ */ c(
          fd,
          {
            formName: e,
            sectionId: x,
            schema: w,
            sectionConfig: N,
            defaultValues: A,
            onSubmit: (D) => i(x, D),
            submitConfig: I,
            errorTriggerMode: l,
            initialFiles: d,
            renderCustomField: f,
            isLoading: h,
            useUpload: m
          }
        )
      },
      x
    );
  }) });
  return g && k.length > 0 ? /* @__PURE__ */ T("div", { className: "flex w-full gap-4", children: [
    /* @__PURE__ */ c("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ c(
      ji,
      {
        items: k,
        activeItem: b,
        scrollable: !1
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "w-px bg-f1-border-secondary" }),
    /* @__PURE__ */ c("div", { className: "flex flex-1 justify-center", children: C })
  ] }) : C;
}
function Sy(n) {
  return "formDefinition" in n && n.formDefinition != null;
}
function kr(n) {
  const e = n;
  if (Sy(e))
    return /* @__PURE__ */ c(ky, { ...e });
  const t = e;
  return _y(t.schema) ? /* @__PURE__ */ c(
    Dd,
    {
      ...t
    }
  ) : /* @__PURE__ */ c(
    Ed,
    {
      ...t
    }
  );
}
function ky(n) {
  const {
    formDefinition: e,
    className: t,
    styling: r,
    formRef: s,
    initialFiles: i,
    renderCustomField: o
  } = n, a = "useUpload" in n ? n.useUpload : void 0;
  return e.isLoading ? e._brand === "single" ? /* @__PURE__ */ c(
    Ta,
    {
      formDefinition: e,
      className: t,
      styling: r,
      formRef: s,
      initialFiles: i,
      renderCustomField: o,
      useUpload: a,
      isLoading: !0
    }
  ) : /* @__PURE__ */ c(
    Ra,
    {
      formDefinition: e,
      className: t,
      styling: r,
      formRef: s,
      initialFiles: i,
      renderCustomField: o,
      useUpload: a,
      isLoading: !0
    }
  ) : e._brand === "single" ? /* @__PURE__ */ c(
    Ta,
    {
      formDefinition: e,
      className: t,
      styling: r,
      formRef: s,
      initialFiles: i,
      renderCustomField: o,
      useUpload: a
    }
  ) : /* @__PURE__ */ c(
    Ra,
    {
      formDefinition: e,
      className: t,
      styling: r,
      formRef: s,
      initialFiles: i,
      renderCustomField: o,
      useUpload: a
    }
  );
}
function Ta({
  formDefinition: n,
  className: e,
  styling: t,
  formRef: r,
  initialFiles: s,
  renderCustomField: i,
  useUpload: o,
  isLoading: a
}) {
  const l = n, u = B(
    (d) => l.onSubmit({ data: d }),
    [l]
  );
  return /* @__PURE__ */ c(
    Dd,
    {
      name: l.name,
      schema: l.schema,
      sections: l.sections,
      defaultValues: l.defaultValues,
      onSubmit: u,
      submitConfig: l.submitConfig,
      errorTriggerMode: l.errorTriggerMode,
      className: e,
      styling: t,
      formRef: r,
      initialFiles: s,
      renderCustomField: i,
      useUpload: o,
      isLoading: a,
      defaultValuesParamsSchema: l.defaultValuesParamsSchema,
      defaultValuesFn: l.defaultValuesFn
    }
  );
}
function Ra({
  formDefinition: n,
  className: e,
  styling: t,
  formRef: r,
  initialFiles: s,
  renderCustomField: i,
  useUpload: o,
  isLoading: a
}) {
  const l = n, u = Z(
    l.defaultValues ? { ...l.defaultValues } : {}
  ), d = B(
    (f, h) => (u.current[f] = h, l.onSubmit({
      sectionId: f,
      data: h,
      fullData: { ...u.current }
    })),
    [l]
  );
  return /* @__PURE__ */ c(
    Ed,
    {
      name: l.name,
      schema: l.schema,
      sections: l.sections,
      defaultValues: l.defaultValues,
      onSubmit: d,
      submitConfig: l.submitConfig,
      errorTriggerMode: l.errorTriggerMode,
      className: e,
      styling: t,
      formRef: r,
      initialFiles: s,
      renderCustomField: i,
      useUpload: o,
      isLoading: a
    }
  );
}
function Dd(n) {
  const e = De(), { forms: t } = e, {
    name: r,
    schema: s,
    sections: i,
    defaultValues: o,
    onSubmit: a,
    submitConfig: l,
    className: u,
    errorTriggerMode: d = "on-blur",
    styling: f,
    formRef: h,
    isLoading: m,
    defaultValuesParamsSchema: g,
    defaultValuesFn: y
  } = n, { useUpload: p } = n, b = f?.showSectionsSidepanel ?? !1, v = l?.type === "action-bar", k = l?.label ?? "Submit", C = l?.icon === null ? void 0 : l?.icon ?? sl, x = l?.type !== "action-bar" && l?.hideSubmitButton, _ = l?.type !== "action-bar" && !!l?.hideActionBar, w = !v && !x, N = l?.type === "action-bar" && l?.discardable, A = v ? l?.discardConfig : void 0, I = A?.label ?? t.actionBar.discard, D = A?.icon === null ? void 0 : A?.icon ?? An, L = v ? l?.actionBarLabel ?? t.actionBar.unsavedChanges : t.actionBar.unsavedChanges, E = l?.savingMessage ?? t.actionBar.saving, M = l?.successMessageDuration, P = dd(s, i), $ = H(() => P.filter((_e) => _e.type === "section").map((_e) => _e.id), [P]), [W, ce] = ee(
    $[0]
  ), G = B(
    (_e) => {
      ce(_e);
      const Ae = xn(r, _e), Fe = document.getElementById(Ae);
      Fe && Fe.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [r]
  ), oe = H(() => !i || !b ? [] : $.map((_e) => ({
    id: _e,
    label: i[_e]?.title ?? _e,
    onClick: () => G(_e)
  })), [i, $, b, G]), me = H(() => ud(e), [e]), z = Cy[d], V = H(
    () => rd(s, { errorMap: me }),
    [s, me]
  ), Q = $c({
    resolver: V,
    mode: z,
    defaultValues: o
  }), ge = Z(m);
  re(() => {
    ge.current && !m && o && Q.reset(o), ge.current = m;
  }, [m, o, Q]);
  const ae = Q.formState.errors.root, { isDirty: be, isSubmitting: xe, errors: he } = Q.formState, [ne, de] = ee("idle"), [Le, je] = ee(), Re = Z(null), tt = Z(null), {
    hasErrors: Qe,
    errorCount: yt,
    goToPreviousError: S,
    goToNextError: R,
    resetErrorNavigation: O
  } = xy({
    formName: r,
    errors: he
  }), X = (() => {
    if (!Qe)
      return ne === "loading" ? E : ne === "success" ? Le ?? t.actionBar.saved : L;
  })(), U = async (_e) => {
    Re.current && (clearTimeout(Re.current), Re.current = null), of(() => {
      de("loading");
    });
    const Ae = { ..._e };
    for (const nt of Object.keys(Ae))
      Ae[nt] === null && (Ae[nt] = void 0);
    const Fe = await a(Ae);
    Fe.success ? (Q.reset(_e), O(), je(Fe.message), de("success"), Re.current = setTimeout(() => {
      de("idle"), je(void 0), Re.current = null;
    }, M ?? 2e3)) : (de("idle"), Fe.errors && Object.entries(Fe.errors).forEach(([nt, Hn]) => {
      Q.setError(nt, { message: Hn });
    }), Fe.rootMessage && Q.setError("root", { message: Fe.rootMessage }));
  };
  re(() => () => {
    Re.current && clearTimeout(Re.current);
  }, []);
  const j = () => {
    Q.reset(), O(), de("idle"), je(void 0), Re.current && (clearTimeout(Re.current), Re.current = null);
  }, se = Z(null), ve = Z(U);
  ve.current = U;
  const Ie = B(
    (_e) => ({
      submit: () => new Promise((Ae, Fe) => {
        Q.handleSubmit(
          async (nt) => {
            await ve.current(nt), Ae();
          },
          () => Fe(new Error("Form validation failed"))
        )();
      }),
      reset: () => {
        Q.reset(), O();
      },
      isDirty: () => Q.formState.isDirty,
      getValues: () => Q.getValues(),
      setValue: (Ae, Fe, nt) => {
        Q.setValue(
          Ae,
          Fe,
          {
            shouldValidate: nt?.shouldValidate ?? !0,
            shouldDirty: nt?.shouldDirty ?? !0
          }
        );
      },
      setValues: (Ae, Fe) => {
        for (const [nt, Hn] of Object.entries(Ae))
          Q.setValue(nt, Hn, {
            shouldValidate: !1,
            shouldDirty: Fe?.shouldDirty ?? !0
          });
        Fe?.shouldValidate !== !1 && Q.trigger();
      },
      trigger: async (Ae) => Ae ? Q.trigger(Ae) : Q.trigger(),
      getErrors: () => wy(Q.formState.errors),
      getFieldNames: () => Object.keys(Q.getValues()),
      actionBar: {
        wiggle: (Ae) => {
          const Fe = Object.keys(Q.formState.errors).length > 0;
          tt.current?.wiggle(
            Ae?.errorHighlight && !Fe ? { ...Ae, errorHighlight: !1 } : Ae
          );
        }
      },
      _setStateCallback: _e?.stateCallback ? (Ae) => {
        se.current = Ae;
      } : () => {
      }
    }),
    [Q, O]
  );
  re(() => (h && (h.current = Ie({ stateCallback: !0 })), () => {
    h && (h.current = null);
  }), [h, Ie]), re(() => {
    se.current && se.current({
      isSubmitting: xe,
      hasErrors: Qe
    });
  }, [xe, Qe]);
  const Se = gy(), Ke = Z(null), Vt = h ?? Ke;
  re(() => {
    if (Se)
      return h || (Ke.current = Ie()), Se.register(
        r,
        Vt,
        s,
        i,
        g,
        y
      ), () => {
        Se.unregister(r);
      };
  }, [
    Se,
    r,
    s,
    i,
    h,
    Vt,
    Ie,
    g
  ]);
  const Yt = go(P), ut = H(
    () => ({
      formName: r,
      initialFiles: n.initialFiles,
      renderCustomField: n.renderCustomField,
      isLoading: m,
      useUpload: p
    }),
    [
      r,
      n.initialFiles,
      n.renderCustomField,
      m,
      p
    ]
  ), vn = /* @__PURE__ */ T(
    "form",
    {
      onSubmit: Q.handleSubmit(U),
      className: Y("flex flex-col", id, u),
      children: [
        Yt.map((_e, Ae) => {
          const Fe = Ae !== 0 && _e.type !== "section" ? "mt-4" : "";
          switch (_e.type) {
            case "switchGroup":
              return /* @__PURE__ */ c("div", { className: Fe, children: /* @__PURE__ */ c(
                vo,
                {
                  fields: _e.fields,
                  dependentFields: _e.dependentFields,
                  cardSelectDependentFields: _e.cardSelectDependentFields
                }
              ) }, `switch-group-${Ae}`);
            case "field": {
              const nt = _e.cardSelectDependentFields ? /* @__PURE__ */ c(
                Sr.Provider,
                {
                  value: po(
                    _e.cardSelectDependentFields
                  ),
                  children: /* @__PURE__ */ c(Pt, { field: _e.item.field })
                }
              ) : /* @__PURE__ */ c(Pt, { field: _e.item.field });
              return /* @__PURE__ */ c(
                "div",
                {
                  className: Y(Fe, "empty:hidden"),
                  children: nt
                },
                _e.item.field.id
              );
            }
            case "row":
              return /* @__PURE__ */ c("div", { className: Fe, children: /* @__PURE__ */ c(zn, { row: _e.item }) }, `row-${_e.index}`);
            case "section":
              return /* @__PURE__ */ c(
                "div",
                {
                  className: Ae !== 0 ? sd : "",
                  children: /* @__PURE__ */ c(cv, { section: _e.item })
                },
                _e.item.id
              );
            default:
              return null;
          }
        }),
        ae && /* @__PURE__ */ c("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: ae.message }),
        !v && w && /* @__PURE__ */ c("div", { className: "mt-4", children: /* @__PURE__ */ c(
          Be,
          {
            type: "submit",
            label: k,
            icon: C,
            loading: xe,
            disabled: Qe || m
          }
        ) })
      ]
    }
  );
  return /* @__PURE__ */ c(Fs.Provider, { value: ut, children: /* @__PURE__ */ T(Wc, { ...Q, children: [
    b && oe.length > 0 ? /* @__PURE__ */ T("div", { className: "flex w-full gap-4", children: [
      /* @__PURE__ */ c("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ c(
        ji,
        {
          items: oe,
          activeItem: W,
          scrollable: !1
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "w-px bg-f1-border-secondary" }),
      /* @__PURE__ */ c("div", { className: "flex flex-1 justify-center", children: vn })
    ] }) : vn,
    !_ && /* @__PURE__ */ c(
      Qc,
      {
        ref: tt,
        isActionBar: v,
        isDirty: be,
        actionBarStatus: ne,
        hasErrors: Qe,
        errorCount: yt,
        resolvedActionBarLabel: X,
        submitLabel: k,
        submitIcon: C,
        discardableChanges: N,
        discardLabel: I,
        discardIcon: D,
        issuesOneLabel: t.actionBar.issues.one,
        issuesOtherLabel: t.actionBar.issues.other,
        onSubmit: Q.handleSubmit(U),
        onDiscard: j,
        goToPreviousError: S,
        goToNextError: R
      }
    )
  ] }) });
}
function Ox(n) {
  const t = mn(n).shape, r = [];
  for (const [s, i] of Object.entries(t)) {
    const o = i, a = pn(o);
    if (!a) continue;
    const l = nd(o, a), u = Os(o, l), d = {
      name: s,
      type: l,
      label: a.label,
      required: u
    };
    if (a.placeholder && (d.placeholder = a.placeholder), a.helpText && (d.helpText = a.helpText), a.section && (d.section = a.section), a.customFieldName && (d.customFieldName = a.customFieldName), l === "select") {
      if ("source" in a && a.source)
        d.optionsSource = "dynamic";
      else if ("options" in a && a.options) {
        const f = [];
        for (const h of a.options)
          "label" in h && "value" in h && f.push({ label: h.label, value: h.value });
        d.options = f;
      }
    }
    r.push(d);
  }
  return r;
}
const Ix = St("F0Form", kr);
function ot({
  field: n,
  value: e,
  onChange: t,
  onBlur: r,
  error: s,
  errorMessage: i,
  status: o,
  loading: a,
  required: l,
  disabled: u,
  hideLabel: d,
  initialFiles: f
}) {
  const h = $i(), m = l ?? (n.validation ? Os(n.validation) : !1), g = !d && n.type !== "checkbox" && n.type !== "custom", y = {
    value: e,
    onChange: t,
    onBlur: r ?? (() => {
    }),
    name: n.id,
    ref: () => {
    }
  }, p = {
    error: s || o?.type === "error" ? {
      type: "custom",
      message: i ?? o?.message
    } : void 0,
    isValidating: !!a
  }, b = s ? { type: "error", message: i } : o, v = u !== void 0 ? { ...n, disabled: u } : n, k = n.type === "file" ? f : void 0;
  return /* @__PURE__ */ T("div", { className: "space-y-2", id: h, children: [
    g && /* @__PURE__ */ T(
      "label",
      {
        htmlFor: n.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [
          n.label,
          m && /* @__PURE__ */ c("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
        ]
      }
    ),
    _i({
      field: v,
      formField: y,
      fieldState: p,
      isSubmitting: !1,
      isRequired: m,
      values: {},
      initialFiles: k,
      fieldStatus: b
    }),
    n.helpText && /* @__PURE__ */ c("p", { className: "text-base text-f1-foreground-secondary", children: n.helpText }),
    /* @__PURE__ */ c(Ri, { status: b })
  ] });
}
ot.displayName = "F0FormField";
const Td = vt((n, e) => /* @__PURE__ */ c(Ui, { ref: e, variant: "heading", ...n }));
Td.displayName = "F0Heading";
const Lx = Pe(Td), Ny = ({
  props: n
}) => {
  const { status: e, title: t, taskCount: r, completedCount: s, expanded: i, onExpandToggle: o } = n;
  return /* @__PURE__ */ T(Ye, { children: [
    /* @__PURE__ */ c(al, { icon: _u, size: "sm" }),
    /* @__PURE__ */ T("div", { className: "flex flex-1 items-center justify-between", children: [
      /* @__PURE__ */ c(
        Cu,
        {
          label: `${r} ${t}`,
          itemCount: void 0,
          open: i,
          onOpenChange: () => o(),
          showOpenChange: !0
        }
      ),
      s !== void 0 && /* @__PURE__ */ c(
        ll,
        {
          text: `${s}/${r}`,
          variant: e === "completed" ? "positive" : "warning"
        }
      )
    ] })
  ] });
}, Ey = ({
  primaryAction: n,
  secondaryActions: e,
  otherActions: t
}) => {
  const r = e && e.length > 0, s = t && t.length > 0;
  return /* @__PURE__ */ T("div", { className: "flex flex-col gap-2 xs:flex-row xs:items-center [&>*]:w-full [&>*]:xs:w-auto", children: [
    s && /* @__PURE__ */ c(Ni, { items: t, size: "md" }),
    e?.map((i, o) => /* @__PURE__ */ c(
      Be,
      {
        label: i.label,
        icon: i.icon,
        variant: "outline",
        size: "md",
        onClick: i.onClick,
        disabled: i.disabled,
        loading: i.loading
      },
      `${i.label}-${o}`
    )),
    n && (s || r) && /* @__PURE__ */ c("div", { className: "mx-1 hidden h-4 w-px bg-f1-background-secondary-hover xs:block" }),
    n && /* @__PURE__ */ c(
      Be,
      {
        label: n.label,
        icon: n.icon,
        variant: "default",
        size: "md",
        onClick: n.onClick,
        disabled: n.disabled,
        loading: n.loading
      }
    )
  ] });
}, Dy = ({ props: n }) => {
  const { metadata: e, primaryAction: t, secondaryActions: r, otherActions: s } = n, i = e?.some(Boolean), o = t || r && r.length > 0 || s && s.length > 0;
  return /* @__PURE__ */ T("div", { className: "pl-9", children: [
    e && i && /* @__PURE__ */ c("div", { className: "mb-3", children: /* @__PURE__ */ c(Nl, { items: e }) }),
    o && /* @__PURE__ */ c("div", { className: "mb-3", children: /* @__PURE__ */ c(
      Ey,
      {
        primaryAction: t,
        secondaryActions: r,
        otherActions: s
      }
    ) })
  ] });
}, Ty = ({ props: n }) => {
  const { status: e, icon: t = Su, title: r, description: s, metadata: i } = n, o = i?.some(Boolean);
  return /* @__PURE__ */ T("div", { className: "flex justify-between gap-3 w-full flex-wrap", children: [
    /* @__PURE__ */ T("div", { className: "flex justify-start items-center gap-3 h-8", children: [
      /* @__PURE__ */ c(al, { icon: t, size: "sm" }),
      /* @__PURE__ */ c(
        "h4",
        {
          className: Y(
            "text-base font-semibold text-f1-foreground",
            e === "completed" && "line-through"
          ),
          children: r
        }
      ),
      s && /* @__PURE__ */ c(Il, { content: s, variant: "description" })
    ] }),
    /* @__PURE__ */ c("div", { className: "flex justify-end items-center gap-3 pl-9", children: e === "completed" && i && o && /* @__PURE__ */ c(Nl, { items: i }) })
  ] });
}, Ry = ({ status: n }) => /* @__PURE__ */ c(
  "div",
  {
    "data-testid": "timeline-connector",
    className: Y(
      "w-0.5 min-h-2 flex-1",
      n === "completed" && "bg-f1-icon-positive",
      n === "in-progress" && "bg-f1-border-secondary",
      n === "not-started" && "bg-[length:2px_6px] bg-repeat-y bg-[linear-gradient(to_bottom,_hsl(var(--neutral-20))_3px,_transparent_3px)]"
    )
  }
), Ay = {
  completed: /* @__PURE__ */ c(ze, { icon: gs, color: "positive", size: "lg" }),
  "in-progress": /* @__PURE__ */ c(ze, { icon: Nu, size: "lg", color: "warning" }),
  "not-started": /* @__PURE__ */ c(ze, { icon: ku, size: "lg", color: "secondary" })
}, Rd = ({
  status: n,
  isLast: e,
  hideStatus: t,
  children: r
}) => /* @__PURE__ */ T("div", { className: "flex gap-4", children: [
  !t && /* @__PURE__ */ T("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "h-8 flex flex-col justify-center",
        "data-testid": `timeline-status-${n}`,
        children: Ay[n]
      }
    ),
    !e && /* @__PURE__ */ c(Ry, { status: n })
  ] }),
  /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-3 pb-5", children: r })
] }), Ad = ({ props: n }) => {
  const { status: e, isLast: t = !1, hideStatus: r = !1 } = n;
  return /* @__PURE__ */ T(Rd, { status: e, isLast: t, hideStatus: r, children: [
    /* @__PURE__ */ c("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ c(Ty, { props: n }) }),
    e !== "completed" && /* @__PURE__ */ c(Dy, { props: n })
  ] });
}, Fy = ({
  props: n
}) => {
  const { status: e, isLast: t = !1, hideStatus: r = !1, expanded: s, items: i } = n;
  return /* @__PURE__ */ T(Rd, { status: e, isLast: t, hideStatus: r, children: [
    /* @__PURE__ */ c("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ c(Ny, { props: n }) }),
    s && /* @__PURE__ */ c("div", { className: "flex flex-col pl-4", children: i.map((o, a) => /* @__PURE__ */ c(
      Ad,
      {
        props: {
          ...o,
          hideStatus: !0,
          isLast: a === i.length - 1
        }
      },
      `${o.title}-${a}`
    )) })
  ] });
}, Oy = (n) => "items" in n, Iy = (n) => Oy(n) ? /* @__PURE__ */ c(Fy, { props: n }) : /* @__PURE__ */ c(Ad, { props: n }), Mx = [
  "completed",
  "in-progress",
  "not-started"
], Px = Pe(
  St("F0TimelineRow", Iy)
), zx = Pe(Eu), Bx = Pe(
  St(
    "F0GridStack",
    qi
  )
), ei = 16, Ly = fn({
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
function Fd(n, e = 0) {
  return n.flatMap((t) => [
    { id: t.id, depth: Math.min(e, 3) },
    ...t.children ? Fd(t.children, e + 1) : []
  ]);
}
function My(n, e) {
  const t = n.length;
  if (t <= ei) return n;
  const r = t / (ei - 1), s = new Set(
    Array.from(
      { length: ei - 1 },
      (i, o) => Math.min(Math.floor(o * r), t - 1)
    )
  );
  if (s.add(t - 1), e) {
    const i = n.findIndex((o) => o.id === e);
    if (i !== -1 && !s.has(i)) {
      const o = [...s].reduce(
        (a, l) => Math.abs(l - i) < Math.abs(a - i) ? l : a
      );
      s.delete(o), s.add(i);
    }
  }
  return [...s].sort((i, o) => i - o).map((i) => n[i]);
}
function Py({
  items: n,
  activeItem: e,
  className: t,
  align: r = "left",
  variant: s = "dark"
}) {
  const i = H(
    () => My(Fd(n), e),
    [n, e]
  );
  return /* @__PURE__ */ c(
    "div",
    {
      className: Y(
        "flex flex-col justify-center gap-2 py-3",
        r === "right" ? "items-end" : "items-start",
        t
      ),
      children: i.map((o) => /* @__PURE__ */ c(
        "div",
        {
          className: Ly({
            depth: o.depth,
            variant: s,
            active: o.id === e
          })
        },
        o.id
      ))
    }
  );
}
const ti = "[role='menu']";
function zy(n, e) {
  const t = Z(null), r = B(() => {
    t.current?.(), t.current = null;
  }, []);
  return re(() => r, [r]), { deferClose: B(() => {
    if (!document.querySelector(ti)) return !1;
    r();
    const i = () => {
      a.disconnect(), document.removeEventListener("pointermove", l), t.current = null;
    }, o = () => {
      i(), e();
    }, a = new MutationObserver(() => {
      document.querySelector(ti) || o();
    });
    a.observe(document.body, { childList: !0, subtree: !0 });
    const l = (u) => {
      const d = u.target;
      !d.closest(ti) && !n.current?.contains(d) && o();
    };
    return document.addEventListener("pointermove", l), t.current = i, !0;
  }, [n, e, r]) };
}
const By = 300, Vy = 0, $y = fn({
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
function Od({
  title: n,
  items: e,
  className: t,
  activeItem: r,
  collapsible: s = !1,
  sortable: i,
  onReorder: o,
  showChildrenCounter: a = !1,
  barsAlign: l = "left",
  size: u = "md",
  variant: d = "light",
  portalContainer: f
}) {
  const [h, m] = ee(!1), g = Z(!1), y = Z(null), { deferClose: p } = zy(y, () => m(!1)), b = (k) => {
    !k && p() || (k && !h && (g.current = !0), m(k));
  }, v = B((k) => {
    y.current = k, !(!k || !g.current) && (g.current = !1, requestAnimationFrame(() => {
      k.querySelector("[data-active]")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }, []);
  return /* @__PURE__ */ T(
    Du,
    {
      open: h,
      onOpenChange: b,
      openDelay: Vy,
      closeDelay: By,
      children: [
        /* @__PURE__ */ c(Tu, { asChild: !0, children: /* @__PURE__ */ c(
          "button",
          {
            className: Y(
              ps(),
              "flex cursor-pointer items-center rounded-md px-1.5 py-1",
              t
            ),
            "aria-label": n ?? "Menu",
            children: /* @__PURE__ */ c(
              Py,
              {
                items: e,
                activeItem: r,
                align: l,
                variant: d
              }
            )
          }
        ) }),
        /* @__PURE__ */ c(
          Ru,
          {
            ref: v,
            side: l === "left" ? "right" : "left",
            align: "center",
            sideOffset: -28,
            container: f,
            className: Y(
              $y({ size: u }),
              !n && "pt-2",
              "scrollbar-macos"
            ),
            children: /* @__PURE__ */ c(
              ji,
              {
                title: n,
                items: e,
                activeItem: r,
                collapsible: s,
                sortable: i,
                onReorder: o,
                hideChildrenCounter: !a,
                scrollable: !1
              }
            )
          }
        )
      ]
    }
  );
}
const Vx = Pe(
  St(
    "F0TableOfContentPopover",
    Od
  )
), jy = Rn.create(Au), Hy = () => {
  const n = De();
  return /* @__PURE__ */ T("div", { className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md", children: [
    /* @__PURE__ */ c(
      jy,
      {
        size: "xs",
        animate: {
          rotate: [0, 360],
          scale: [1, 0.8, 1],
          filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
        },
        transition: {
          rotate: {
            duration: 1,
            ease: "linear",
            repeat: 1 / 0,
            repeatDelay: 1
            // Adds a 0.5s delay between each repetition
          },
          scale: {
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut",
            repeat: 1 / 0,
            repeatDelay: 1
          },
          filter: {
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut",
            repeat: 1 / 0,
            repeatDelay: 1
          }
        }
      }
    ),
    /* @__PURE__ */ c("span", { className: "font-medium", children: n.t("surveyFormBuilder.labels.applyingChanges") })
  ] });
}, Wy = _l(Hy);
var qy = qm();
const Aa = /* @__PURE__ */ Fu(qy), Id = (n) => {
  switch (n) {
    case "1-5":
      return new Array(5).fill(0).map((e, t) => ({
        value: t + 1,
        label: (t + 1).toString()
      }));
    case "1-10":
      return new Array(10).fill(0).map((e, t) => ({
        value: t + 1,
        label: (t + 1).toString()
      }));
    case "emojis":
      return [
        { value: 1, label: "😠" },
        { value: 2, label: "😐" },
        { value: 3, label: "😊" },
        { value: 4, label: "😍" },
        { value: 5, label: "🤩" }
      ];
  }
}, Ld = (n) => {
  if (!n || n.length === 0) return null;
  const e = n.length, t = n.every((r) => /^\d+$/.test(r.label.trim()));
  return e === 5 && t ? "1-5" : e === 10 && t ? "1-10" : e === 5 && !t ? "emojis" : null;
}, ki = (n) => {
  switch (n) {
    case "rating":
      return {
        value: 0,
        options: Id("1-5")
      };
    case "select":
    case "multi-select":
      return {
        options: [
          {
            value: "option-1",
            label: "New option 1"
          }
        ]
      };
    case "dropdown-single":
    case "dropdown-multi":
      return {};
    case "text":
    case "longText":
      return {
        value: ""
      };
    case "numeric":
      return {
        value: 0
      };
    case "link":
      return {
        value: ""
      };
    case "date":
      return {
        value: /* @__PURE__ */ new Date()
      };
    case "file":
      return {
        value: null
      };
    case "checkbox":
      return {
        value: null,
        label: ""
      };
    default:
      throw new Error(`Unsupported question type: ${n}`);
  }
}, Fr = (n) => `new-${n}-${Date.now()}`, Fa = [
  "text",
  "longText",
  "select",
  "multi-select",
  "numeric",
  "link",
  "date",
  "file",
  "checkbox"
], Uy = (n) => {
  if (!n)
    return Fa[0];
  const e = Fa.find(
    (t) => n?.includes(t)
  );
  if (!e)
    throw new Error(
      `No default question type found for allowed question types: ${n.join(", ")}`
    );
  return e;
}, Md = ct(void 0);
function bo({
  elements: n,
  children: e,
  disabled: t,
  answering: r,
  disallowOptionalQuestions: s,
  onChange: i,
  allowedQuestionTypes: o,
  errors: a,
  onFieldBlur: l,
  useUpload: u,
  datasets: d
}) {
  const f = Z(n);
  f.current = n;
  const h = Z(i);
  h.current = i;
  const m = H(() => {
    const D = n[n.length - 1];
    if (D)
      return D.type === "section" ? D.section.id : D.question.id;
  }, [n]), g = B((D) => {
    const L = D.id, E = f.current.map((M) => {
      if (M.type === "question")
        return M.question.id === L ? {
          ...M,
          question: {
            ...M.question,
            ...D
          }
        } : M;
      if (M.type === "section") {
        const P = M.section.questions?.map(
          ($) => $.id === L ? {
            ...$,
            ...D
          } : $
        );
        return {
          ...M,
          section: {
            ...M.section,
            questions: P
          }
        };
      }
      return M;
    });
    h.current(E);
  }, []), y = B((D) => {
    const L = D.id, E = f.current.map((M) => M.type === "section" && M.section.id === L ? {
      ...M,
      section: {
        ...M.section,
        ...D
      }
    } : M);
    h.current(E);
  }, []), p = B(
    ({
      element: D,
      afterId: L
    }) => {
      const E = [...f.current];
      if (!L) {
        E.push(D), h.current(E);
        return;
      }
      ((P) => {
        E.forEach(($, W) => {
          $.type === "section" && $.section.id === P && E.splice(W + 1, 0, D), $.type === "question" && $.question.id === P && E.splice(W + 1, 0, D);
        });
      })(L), D.type === "question" && E.length === f.current.length && E.forEach((P, $) => {
        if (P.type !== "section")
          return;
        const W = [...P.section.questions ?? []];
        W?.forEach((ce, G) => {
          ce.id === L && W.splice(G + 1, 0, D.question);
        }), E.splice($, 1, {
          ...P,
          section: {
            ...P.section,
            questions: W
          }
        });
      }), h.current(E);
    },
    []
  ), b = B(
    ({ type: D, afterId: L, datasetKey: E }) => {
      if ((D === "dropdown-single" || D === "dropdown-multi") && !E)
        throw new Error(`${D} questions require a datasetKey`);
      const M = Fr(
        D === "section" ? "section" : "question"
      ), P = Uy(o), $ = D === "section" ? {
        type: "section",
        section: {
          id: M,
          title: "",
          questions: [
            {
              id: Fr("question"),
              title: "",
              description: "",
              type: P,
              required: !0,
              ...ki(
                P
              )
            }
          ]
        }
      } : {
        type: "question",
        question: {
          id: M,
          title: "",
          description: "",
          type: D,
          required: !0,
          ...ki(D),
          ...E ? { datasetKey: E } : {}
        }
      };
      p({ element: $, afterId: L });
    },
    [p, o]
  ), v = B(
    ({ elementId: D }) => {
      const E = Aa(
        f.current.map(
          (P) => P.type === "section" ? [P, ...P.section.questions ?? []] : [P.question]
        )
      ).find(
        (P) => P.type === "section" ? P.section.id === D : P.id === D
      );
      let M;
      E && (M = E.type === "section" ? {
        ...E,
        section: {
          ...E.section,
          id: Fr("section")
        }
      } : {
        type: "question",
        question: { ...E, id: Fr("question") }
      }), M && p({ element: M, afterId: D });
    },
    [p]
  ), k = B((D) => Aa(
    f.current.map(
      (E) => E.type === "question" ? [E.question] : E.section.questions
    )
  ).find((E) => E?.id === D), []), C = B((D) => {
    let L = f.current.filter((E) => E.type === "section" ? E.section.id !== D : E.type === "question" ? E.question.id !== D : !0);
    L.length === f.current.length && (L = L.map((E) => E.type === "section" ? {
      ...E,
      section: {
        ...E.section,
        questions: E.section.questions?.filter(
          (M) => M.id !== D
        )
      }
    } : E)), h.current(L);
  }, []), x = B((D) => {
    const L = f.current.find((E) => E.type === "section" ? E.section.questions?.some(
      (M) => M.id === D
    ) : !1);
    return L?.type === "section" && L?.section.questions?.length === 1;
  }, []), _ = B((D) => {
    const L = f.current.find((E) => E.type === "section" ? E.section.questions?.some(
      (M) => M.id === D
    ) : !1);
    return L?.type === "section" ? L.section : void 0;
  }, []), w = Z(!0), N = !n.length;
  re(() => {
    if (w.current) {
      w.current = !1, N && !t && !r && b({
        type: "section"
      });
      return;
    }
  }, [N, b, t]);
  const A = B(
    (D) => D === "file" && !u ? !1 : !o || o.includes(D),
    [o, u]
  ), I = H(
    () => ({
      onQuestionChange: g,
      onSectionChange: y,
      onAddNewElement: b,
      onDuplicateElement: v,
      getIsSingleQuestionInSection: x,
      getSectionContainingQuestion: _,
      disabled: t,
      answering: r,
      getQuestionById: k,
      deleteElement: C,
      lastElementId: m,
      disallowOptionalQuestions: s,
      isQuestionTypeAllowed: A,
      errors: a,
      onFieldBlur: l,
      useUpload: u,
      datasets: d
    }),
    [
      g,
      y,
      b,
      v,
      x,
      _,
      t,
      r,
      k,
      C,
      m,
      s,
      A,
      a,
      l,
      u,
      d
    ]
  );
  return /* @__PURE__ */ c(Md.Provider, { value: I, children: e });
}
function qe() {
  const n = Je(Md);
  if (!n)
    throw new Error(
      "useSurveyFormBuilderContext must be used within a SurveyFormBuilderProvider"
    );
  return n;
}
const Pd = ct(void 0);
function xo({ children: n }) {
  const [e, t] = ee(!1), [r, s] = ee(null);
  return /* @__PURE__ */ c(
    Pd.Provider,
    {
      value: { isDragging: e, setIsDragging: t, draggedItemId: r, setDraggedItemId: s },
      children: n
    }
  );
}
function jn() {
  const n = Je(Pd);
  return n || {
    isDragging: !1,
    setIsDragging: () => {
    },
    draggedItemId: null,
    setDraggedItemId: () => {
    }
  };
}
const wo = () => {
  const { isQuestionTypeAllowed: n, datasets: e } = qe(), { t } = De(), s = [
    {
      label: t("surveyFormBuilder.questionTypes.rating"),
      icon: cl,
      questionType: "rating"
    },
    {
      label: t("surveyFormBuilder.questionTypes.multipleChoice"),
      icon: wn,
      questionType: "multi-select"
    },
    {
      label: t("surveyFormBuilder.questionTypes.singleChoice"),
      icon: Tt,
      questionType: "select"
    },
    {
      label: t("surveyFormBuilder.questionTypes.text"),
      icon: dl,
      questionType: "text"
    },
    {
      label: t("surveyFormBuilder.questionTypes.longText"),
      icon: ul,
      questionType: "longText"
    },
    {
      label: t("surveyFormBuilder.questionTypes.numeric"),
      icon: jr,
      questionType: "numeric"
    },
    {
      label: t("surveyFormBuilder.questionTypes.link"),
      icon: Oi,
      questionType: "link"
    },
    {
      label: t("surveyFormBuilder.questionTypes.date"),
      icon: fl,
      questionType: "date"
    },
    {
      label: t("surveyFormBuilder.questionTypes.file"),
      icon: Fi,
      questionType: "file"
    },
    {
      label: t("surveyFormBuilder.questionTypes.checkbox"),
      icon: gs,
      questionType: "checkbox"
    }
  ].filter(
    (o) => n(o.questionType)
  ), i = n("dropdown-single") ? Object.entries(e ?? {}).map(([o, a]) => ({
    label: a.title,
    icon: a.icon ?? $r,
    questionType: "dropdown-single",
    datasetKey: o
  })) : [];
  return [...s, ...i];
}, Zy = {
  rating: cl,
  "multi-select": wn,
  select: Tt,
  text: dl,
  longText: ul,
  numeric: jr,
  link: Oi,
  date: fl,
  "dropdown-single": $r,
  "dropdown-multi": $r,
  file: Fi,
  checkbox: gs
}, Gy = () => {
  const { disabled: n, answering: e, onAddNewElement: t, isQuestionTypeAllowed: r } = qe(), [s, i] = ee(!1), o = wo(), { t: a } = De(), l = (h, m) => {
    t?.({ type: h, datasetKey: m });
  }, u = () => {
    t?.({ type: "section" });
  }, d = o.filter((h) => !h.datasetKey), f = Array.from(
    new Set(
      o.filter((h) => !!h.datasetKey).map((h) => h.datasetKey)
    )
  );
  return n || e ? null : /* @__PURE__ */ c("div", { className: "ml-6 flex justify-center", children: /* @__PURE__ */ T(Ii, { open: s, onOpenChange: i, children: [
    /* @__PURE__ */ c(Li, { asChild: !0, children: /* @__PURE__ */ c(
      Be,
      {
        icon: Mi,
        label: a("surveyFormBuilder.actions.addQuestion"),
        size: "md",
        variant: "outline",
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ T(Pi, { align: "center", className: "w-80", children: [
      /* @__PURE__ */ c(pt, { onClick: u, children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
        /* @__PURE__ */ c(ze, { icon: zi, color: "default" }),
        /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: a("surveyFormBuilder.questionTypes.section") })
      ] }) }),
      /* @__PURE__ */ c(Fn, {}),
      d.map((h) => /* @__PURE__ */ c(
        pt,
        {
          onClick: () => l(h.questionType),
          children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ c(ze, { icon: h.icon, color: "default" }),
            /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: h.label })
          ] })
        },
        h.questionType
      )),
      f.length > 0 && /* @__PURE__ */ T(Ye, { children: [
        /* @__PURE__ */ c(Fn, {}),
        f.map((h) => {
          const m = o.find(
            (g) => g.datasetKey === h && g.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ T(Yn, { children: [
            /* @__PURE__ */ c(Jn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
              m && /* @__PURE__ */ c(ze, { icon: m.icon, color: "default" }),
              /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: m?.label ?? h })
            ] }) }),
            /* @__PURE__ */ c(er, { children: /* @__PURE__ */ T(tr, { children: [
              r("dropdown-single") && /* @__PURE__ */ c(
                pt,
                {
                  onClick: () => l("dropdown-single", h),
                  children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(ze, { icon: Tt, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: a("surveyFormBuilder.labels.singleSelection") })
                  ] })
                }
              ),
              r("dropdown-multi") && /* @__PURE__ */ c(
                pt,
                {
                  onClick: () => l("dropdown-multi", h),
                  children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(ze, { icon: wn, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: a("surveyFormBuilder.labels.multiSelection") })
                  ] })
                }
              )
            ] }) })
          ] }, h);
        })
      ] })
    ] })
  ] }) });
}, Qy = ({
  open: n,
  onConfirm: e,
  onCancel: t
}) => {
  const { t: r } = De();
  return /* @__PURE__ */ c(
    df,
    {
      open: n,
      onClose: t,
      header: {
        type: "warning",
        title: r("surveyFormBuilder.labels.lastQuestionDialogTitle"),
        description: r(
          "surveyFormBuilder.labels.lastQuestionDialogDescription"
        )
      },
      actions: {
        primary: {
          label: r("surveyFormBuilder.actions.confirmMoveLastQuestion"),
          onClick: e
        },
        secondary: {
          label: r("surveyFormBuilder.actions.cancelMoveLastQuestion"),
          onClick: t
        }
      }
    }
  );
}, ms = [
  { label: "1 - 5", value: "1-5" },
  { label: "1 - 10", value: "1-10" },
  { label: "Emojis", value: "emojis" }
];
function Ky(n, e) {
  if (n !== "rating" || !e || e.type !== "rating")
    return null;
  const t = e.options;
  return !Array.isArray(t) || t.length === 0 || typeof t[0]?.value != "number" ? null : Ld(t);
}
function Xy(n, e, t) {
  return !(n === e || (n === "select" || n === "multi-select") && t && "options" in t && Array.isArray(t.options) && t.options.length > 0 || (n === "dropdown-single" || n === "dropdown-multi") && (e === "dropdown-single" || e === "dropdown-multi"));
}
function zd() {
  const {
    onQuestionChange: n,
    getQuestionById: e,
    deleteElement: t,
    onDuplicateElement: r,
    disallowOptionalQuestions: s
  } = qe(), i = wo();
  return { getActionsForQuestion: B(
    (a, l, u) => {
      const d = e(a), f = d && "datasetKey" in d && typeof d.datasetKey == "string" ? d.datasetKey : void 0, h = Ky(l, d);
      return {
        question: d,
        questionTypes: i,
        currentRatingType: h,
        currentDatasetKey: f,
        isMultiSelectEnabled: l === "dropdown-multi" && !!f,
        disallowOptionalQuestions: s,
        canDelete: u,
        handleChangeRequired: (C) => {
          n?.({
            id: a,
            type: l,
            required: C
          });
        },
        handleSelectQuestionType: (C, x) => {
          const _ = Xy(
            C,
            l,
            d
          ), w = C === "dropdown-single" || C === "dropdown-multi", N = l === "dropdown-single" || l === "dropdown-multi";
          n?.({
            id: a,
            type: C,
            // Set datasetKey for dropdown types, clear it for non-dropdown types
            ...w ? { datasetKey: x } : { datasetKey: void 0 },
            // Reset value when switching between single/multi or switching into
            // a dropdown type from a different type to avoid incompatible values
            ...w && N && C !== l || w && !N ? { value: C === "dropdown-multi" ? [] : null } : {},
            ..._ && {
              ...ki(C)
            }
          });
        },
        handleSelectRatingType: (C) => {
          n?.({
            id: a,
            type: "rating",
            value: 0,
            options: Id(C)
          });
        },
        handleToggleMultiSelect: (C) => {
          if (!f) return;
          n?.({
            id: a,
            type: C ? "dropdown-multi" : "dropdown-single",
            datasetKey: f,
            value: C ? [] : null
          });
        },
        handleDuplicate: () => {
          r?.({ elementId: a, type: l });
        },
        handleDelete: () => {
          t(a);
        }
      };
    },
    [
      e,
      n,
      t,
      r,
      s,
      i
    ]
  ), questionTypes: i };
}
function Yy({
  questionId: n,
  questionType: e,
  canDelete: t = !0
}) {
  const { getActionsForQuestion: r } = zd();
  return H(
    () => r(n, e, t),
    [r, n, e, t]
  );
}
const Oa = ({
  label: n,
  icon: e,
  checked: t,
  onChange: r
}) => /* @__PURE__ */ c(
  pt,
  {
    className: "!pb-2.5 pr-4",
    onClick: (s) => {
      s.preventDefault(), r(!t);
    },
    children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(ft, { icon: e, color: "default" }),
      /* @__PURE__ */ c("span", { className: "flex-1", children: n }),
      /* @__PURE__ */ c(
        nl,
        {
          title: n,
          checked: t,
          onCheckedChange: r,
          hideLabel: !0
        }
      )
    ] })
  }
), Jy = ({
  label: n,
  value: e,
  currentDatasetKey: t,
  questionTypes: r,
  currentRatingType: s,
  isQuestionTypeAllowed: i,
  onSelectQuestionType: o,
  onSelectRatingType: a
}) => {
  const { t: l } = De(), u = r.filter((h) => !h.datasetKey), d = Array.from(
    new Set(
      r.filter((h) => !!h.datasetKey).map((h) => h.datasetKey)
    )
  ), f = t ? r.find(
    (h) => h.questionType === e && h.datasetKey === t
  )?.label ?? void 0 : r.find(
    (h) => h.questionType === e && !h.datasetKey
  )?.label ?? void 0;
  return /* @__PURE__ */ T(Yn, { children: [
    /* @__PURE__ */ c(Jn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(ft, { icon: ml, color: "default" }),
      /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: n }),
      !!f && /* @__PURE__ */ c("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: f })
    ] }) }),
    /* @__PURE__ */ c(er, { children: /* @__PURE__ */ T(tr, { children: [
      u.map((h) => {
        const m = h.questionType === "rating", g = e === h.questionType && !t;
        return m ? /* @__PURE__ */ T(Yn, { children: [
          /* @__PURE__ */ c(Jn, { className: "mx-1 mt-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2 text-base font-medium", children: [
            /* @__PURE__ */ c(ft, { icon: h.icon, color: "default" }),
            /* @__PURE__ */ c("span", { className: "flex-1", children: h.label }),
            s && /* @__PURE__ */ c("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: ms.find(
              (y) => y.value === s
            )?.label })
          ] }) }),
          /* @__PURE__ */ c(er, { children: /* @__PURE__ */ c(tr, { children: ms.map((y) => /* @__PURE__ */ c(
            pt,
            {
              onClick: () => a(y.value),
              children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2 pl-2", children: [
                /* @__PURE__ */ c("span", { className: "flex-1", children: y.label }),
                s === y.value && /* @__PURE__ */ c(ft, { icon: Tt, color: "default" })
              ] })
            },
            y.value
          )) }) })
        ] }, h.questionType) : /* @__PURE__ */ c(
          pt,
          {
            onClick: () => o(h.questionType),
            children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
              /* @__PURE__ */ c(ft, { icon: h.icon, color: "default" }),
              /* @__PURE__ */ c("span", { className: "flex-1", children: h.label }),
              g && /* @__PURE__ */ c(ft, { icon: Tt, color: "default" })
            ] })
          },
          h.questionType
        );
      }),
      d.length > 0 && /* @__PURE__ */ T(Ye, { children: [
        /* @__PURE__ */ c(Fn, {}),
        d.map((h) => {
          const m = r.find(
            (g) => g.datasetKey === h && g.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ T(Yn, { children: [
            /* @__PURE__ */ c(Jn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
              m && /* @__PURE__ */ c(ft, { icon: m.icon, color: "default" }),
              /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: m?.label ?? h }),
              t === h && /* @__PURE__ */ c(ft, { icon: Tt, color: "default" })
            ] }) }),
            /* @__PURE__ */ c(er, { children: /* @__PURE__ */ T(tr, { children: [
              i("dropdown-single") && /* @__PURE__ */ c(
                pt,
                {
                  onClick: () => o("dropdown-single", h),
                  children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(ft, { icon: Tt, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: l("surveyFormBuilder.labels.singleSelection") }),
                    t === h && e === "dropdown-single" && /* @__PURE__ */ c(ft, { icon: Tt, color: "default" })
                  ] })
                }
              ),
              i("dropdown-multi") && /* @__PURE__ */ c(
                pt,
                {
                  onClick: () => o("dropdown-multi", h),
                  children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(ft, { icon: wn, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: l("surveyFormBuilder.labels.multiSelection") }),
                    t === h && e === "dropdown-multi" && /* @__PURE__ */ c(ft, { icon: Tt, color: "default" })
                  ] })
                }
              )
            ] }) })
          ] }, h);
        })
      ] })
    ] }) })
  ] });
}, Ia = ({
  label: n,
  icon: e,
  onClick: t,
  critical: r
}) => /* @__PURE__ */ c(
  pt,
  {
    onClick: t,
    className: Y(r ? "text-f1-foreground-critical" : void 0),
    children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(ft, { icon: e }),
      /* @__PURE__ */ c("span", { className: "flex-1", children: n })
    ] })
  }
);
function eb({
  open: n,
  setOpen: e,
  questionId: t,
  questionType: r,
  canDeleteQuestion: s = !0
}) {
  const { t: i } = De(), { isQuestionTypeAllowed: o } = qe(), {
    question: a,
    questionTypes: l,
    currentRatingType: u,
    currentDatasetKey: d,
    isMultiSelectEnabled: f,
    disallowOptionalQuestions: h,
    handleChangeRequired: m,
    handleSelectQuestionType: g,
    handleSelectRatingType: y,
    handleToggleMultiSelect: p,
    handleDuplicate: b,
    handleDelete: v
  } = Yy({
    questionId: t,
    questionType: r,
    canDelete: s
  });
  return /* @__PURE__ */ T(Ii, { open: n, onOpenChange: e, children: [
    /* @__PURE__ */ c(Li, { tabIndex: -1, asChild: !0, children: /* @__PURE__ */ c(
      Be,
      {
        icon: Br,
        label: i("surveyFormBuilder.labels.actions"),
        size: "md",
        variant: "ghost",
        tooltip: !1,
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ T(Pi, { className: "w-80", align: "start", children: [
      /* @__PURE__ */ c(Ou, { className: "p-4 pb-2 font-medium text-f1-foreground-secondary", children: i("surveyFormBuilder.labels.questionOptions") }),
      !h && /* @__PURE__ */ c(Nr, { children: /* @__PURE__ */ c(
        Oa,
        {
          label: i("surveyFormBuilder.labels.required"),
          icon: hl,
          checked: !!a?.required,
          onChange: m
        }
      ) }),
      !!d && /* @__PURE__ */ c(Nr, { children: /* @__PURE__ */ c(
        Oa,
        {
          label: i("surveyFormBuilder.labels.allowMultiSelection"),
          icon: wn,
          checked: f,
          onChange: p
        }
      ) }),
      /* @__PURE__ */ c(Nr, { children: /* @__PURE__ */ c(
        Jy,
        {
          label: i("surveyFormBuilder.labels.questionType"),
          value: r,
          currentDatasetKey: d,
          questionTypes: l,
          currentRatingType: u,
          isQuestionTypeAllowed: o,
          onSelectQuestionType: g,
          onSelectRatingType: y
        }
      ) }),
      /* @__PURE__ */ c(Fn, {}),
      /* @__PURE__ */ T(Nr, { children: [
        /* @__PURE__ */ c(
          Ia,
          {
            label: i("surveyFormBuilder.actions.duplicateQuestion"),
            icon: Hr,
            onClick: b
          }
        ),
        s && /* @__PURE__ */ c(
          Ia,
          {
            label: i("surveyFormBuilder.actions.deleteQuestion"),
            icon: An,
            onClick: v,
            critical: !0
          }
        )
      ] })
    ] })
  ] });
}
function _n(n) {
  const { answering: e, getSectionContainingQuestion: t } = qe(), r = t(n.id), s = n.locked || r?.locked;
  return e ? !1 : s || !0;
}
const La = {
  fieldSizing: "content"
}, Ve = ({
  id: n,
  title: e,
  description: t,
  children: r,
  required: s,
  locked: i,
  type: o
}) => {
  const {
    onQuestionChange: a,
    onAddNewElement: l,
    disabled: u,
    answering: d,
    getIsSingleQuestionInSection: f,
    getSectionContainingQuestion: h,
    isQuestionTypeAllowed: m
  } = qe(), g = h(n), y = g?.locked || i, p = !!g, [b, v] = ee(!1), [k, C] = ee(!1), { isDragging: x } = jn(), { t: _ } = De(), w = (G) => {
    a?.({
      id: n,
      type: o,
      title: G.target.value
    });
  }, N = (G) => {
    a?.({
      id: n,
      type: o,
      description: G.target.value
    });
  }, A = (G, oe) => {
    l?.({
      type: G,
      afterId: n,
      datasetKey: oe
    });
  }, I = () => {
    l?.({
      type: "section",
      afterId: n
    });
  }, D = wo(), L = D.filter((G) => !G.datasetKey), E = Array.from(
    new Set(
      D.filter((G) => !!G.datasetKey).map((G) => G.datasetKey)
    )
  ), M = f(n), P = Z(null), $ = Z(!M);
  re(() => {
    $.current && P.current?.focus({ preventScroll: !0 });
  }, []);
  const W = u || y || d, ce = !d && W;
  return /* @__PURE__ */ T(
    "div",
    {
      id: `co-creation-question-${n}`,
      className: Y(
        "group/question relative flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 py-4",
        !x && !d && "hover:border-f1-border-hover",
        !d || t ? "gap-4" : "gap-2"
      ),
      children: [
        /* @__PURE__ */ T("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ T("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ c("div", { className: "relative w-full", children: d ? /* @__PURE__ */ T("div", { className: "w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold text-f1-foreground", children: [
              e || _("surveyFormBuilder.labels.titlePlaceholder"),
              s && /* @__PURE__ */ c("span", { className: "text-f1-foreground-critical", children: " *" })
            ] }) : /* @__PURE__ */ T(Ye, { children: [
              /* @__PURE__ */ c(
                "textarea",
                {
                  ref: P,
                  value: e,
                  "aria-label": _("surveyFormBuilder.labels.title"),
                  placeholder: _("surveyFormBuilder.labels.titlePlaceholder"),
                  onChange: w,
                  disabled: W,
                  className: Y(
                    "w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                    ce && "cursor-not-allowed"
                  ),
                  style: La
                }
              ),
              /* @__PURE__ */ T("div", { className: "textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold", children: [
                /* @__PURE__ */ c("span", { className: "opacity-0", children: e || _("surveyFormBuilder.labels.titlePlaceholder") }),
                s && /* @__PURE__ */ T(
                  "span",
                  {
                    className: Y(
                      "text-f1-foreground-critical",
                      !e && "text-f1-foreground-secondary"
                    ),
                    children: [
                      " ",
                      "*"
                    ]
                  }
                )
              ] })
            ] }) }),
            !u && !d && !y && /* @__PURE__ */ c(
              "div",
              {
                className: Y(
                  "opacity-0 group-hover/question:opacity-100",
                  k && "opacity-100"
                ),
                children: /* @__PURE__ */ c(
                  eb,
                  {
                    open: k,
                    setOpen: C,
                    questionId: n,
                    questionType: o,
                    canDeleteQuestion: !p || !M
                  }
                )
              }
            )
          ] }),
          d ? t ? /* @__PURE__ */ c("p", { className: "w-full whitespace-pre-wrap break-words px-2 text-f1-foreground-secondary", children: t }) : null : /* @__PURE__ */ c(
            "textarea",
            {
              value: t,
              "aria-label": _("surveyFormBuilder.labels.description"),
              placeholder: _(
                "surveyFormBuilder.labels.questionDescriptionPlaceholder"
              ),
              onChange: N,
              disabled: W,
              className: Y(
                "w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                ce && "cursor-not-allowed"
              ),
              style: La
            }
          )
        ] }),
        r,
        d && /* @__PURE__ */ c(
          Ts,
          {
            className: "-mt-2",
            fallback: _(s ? "forms.validation.required" : "forms.validation.invalidType")
          }
        ),
        !u && !d && !g?.locked && /* @__PURE__ */ c(
          "div",
          {
            className: Y(
              "absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100",
              b && "opacity-100"
            ),
            children: /* @__PURE__ */ T(
              Ii,
              {
                open: b,
                onOpenChange: v,
                children: [
                  /* @__PURE__ */ c(Li, { asChild: !0, children: /* @__PURE__ */ c(
                    Be,
                    {
                      icon: Mi,
                      label: _("surveyFormBuilder.actions.addQuestion"),
                      size: "sm",
                      variant: "outline",
                      hideLabel: !0
                    }
                  ) }),
                  /* @__PURE__ */ T(Pi, { align: "center", className: "w-80", children: [
                    !p && /* @__PURE__ */ T(Ye, { children: [
                      /* @__PURE__ */ c(pt, { onClick: I, children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
                        /* @__PURE__ */ c(ze, { icon: zi, color: "default" }),
                        /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: _("surveyFormBuilder.questionTypes.section") })
                      ] }) }),
                      /* @__PURE__ */ c(Fn, {})
                    ] }),
                    L.map((G) => /* @__PURE__ */ c(
                      pt,
                      {
                        onClick: () => A(G.questionType),
                        children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
                          /* @__PURE__ */ c(ze, { icon: G.icon, color: "default" }),
                          /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: G.label })
                        ] })
                      },
                      G.questionType
                    )),
                    E.length > 0 && /* @__PURE__ */ T(Ye, { children: [
                      /* @__PURE__ */ c(Fn, {}),
                      E.map((G) => {
                        const oe = D.find(
                          (me) => me.datasetKey === G && me.questionType === "dropdown-single"
                        );
                        return /* @__PURE__ */ T(Yn, { children: [
                          /* @__PURE__ */ c(Jn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
                            oe && /* @__PURE__ */ c(ze, { icon: oe.icon, color: "default" }),
                            /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: oe?.label ?? G })
                          ] }) }),
                          /* @__PURE__ */ c(er, { children: /* @__PURE__ */ T(tr, { children: [
                            m("dropdown-single") && /* @__PURE__ */ c(
                              pt,
                              {
                                onClick: () => A("dropdown-single", G),
                                children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ c(ze, { icon: Tt, color: "default" }),
                                  /* @__PURE__ */ c("span", { className: "flex-1", children: _(
                                    "surveyFormBuilder.labels.singleSelection"
                                  ) })
                                ] })
                              }
                            ),
                            m("dropdown-multi") && /* @__PURE__ */ c(
                              pt,
                              {
                                onClick: () => A("dropdown-multi", G),
                                children: /* @__PURE__ */ T("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ c(ze, { icon: wn, color: "default" }),
                                  /* @__PURE__ */ c("span", { className: "flex-1", children: _(
                                    "surveyFormBuilder.labels.multiSelection"
                                  ) })
                                ] })
                              }
                            )
                          ] }) })
                        ] }, G);
                      })
                    ] })
                  ] })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, tb = {
  fieldSizing: "content"
}, nb = ({
  value: n,
  label: e,
  ...t
}) => {
  const { onQuestionChange: r, answering: s, disabled: i } = qe(), o = _n(t), { t: a } = De();
  if (s)
    return /* @__PURE__ */ c(Ve, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
      ar,
      {
        id: t.id,
        checked: n ?? !1,
        onCheckedChange: (u) => {
          r?.({
            ...t,
            type: "checkbox",
            label: e,
            value: u || null
          });
        },
        disabled: o,
        title: e
      }
    ) }) });
  const l = i || t.locked;
  return /* @__PURE__ */ c(Ve, { ...t, children: /* @__PURE__ */ T("div", { className: "flex items-start px-0.5", children: [
    /* @__PURE__ */ c(ar, { checked: !1, disabled: !0, hideLabel: !0, presentational: !0 }),
    /* @__PURE__ */ c(
      "textarea",
      {
        value: e,
        placeholder: a("surveyFormBuilder.checkboxQuestion.placeholder"),
        "aria-label": a("surveyFormBuilder.checkboxQuestion.placeholder"),
        onChange: (u) => {
          r?.({
            ...t,
            type: "checkbox",
            label: u.target.value
          });
        },
        disabled: !!l,
        className: Y(
          "w-full resize-none bg-transparent pt-0.5 pl-2.5 text-f1-foreground-secondary outline-none placeholder:text-f1-foreground-tertiary",
          l && "cursor-not-allowed opacity-50"
        ),
        style: tb
      }
    )
  ] }) });
}, rb = ({
  value: n,
  ...e
}) => {
  const { onQuestionChange: t } = qe(), r = _n(e), { t: s } = De(), i = {
    id: e.id,
    type: "date",
    label: s("surveyFormBuilder.answer.label"),
    clearable: !e.required
  };
  return /* @__PURE__ */ c(Ve, { ...e, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    ot,
    {
      field: i,
      value: n ?? void 0,
      onChange: (o) => {
        t?.({
          ...e,
          type: "date",
          value: o ?? void 0
        });
      },
      disabled: r,
      hideLabel: !0
    }
  ) }) });
}, sb = ({
  datasetKey: n,
  showSearchBox: e,
  searchBoxPlaceholder: t,
  ...r
}) => {
  const { onQuestionChange: s, answering: i, datasets: o } = qe(), a = _n(r), { t: l } = De(), u = o?.[n];
  if (!u)
    throw new Error(`Dataset "${n}" not found for ${r.type}`);
  const d = r.type === "dropdown-multi", f = e ?? !0, h = {
    id: r.id,
    type: "select",
    label: l("surveyFormBuilder.answer.label"),
    placeholder: u.placeholder ?? l("surveyFormBuilder.answer.dropdownPlaceholder"),
    source: u.dataSource,
    mapOptions: u.mapOptions,
    icon: u.icon,
    clearable: !r.required,
    multiple: d,
    showSearchBox: f,
    searchBoxPlaceholder: t
  };
  return /* @__PURE__ */ c(Ve, { ...r, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
    ot,
    {
      field: h,
      value: d ? r.value ?? [] : r.value ?? "",
      onChange: (m) => {
        s?.(d ? {
          id: r.id,
          type: "dropdown-multi",
          value: m
        } : {
          id: r.id,
          type: "dropdown-single",
          value: m
        });
      },
      disabled: !i || a,
      hideLabel: !0
    }
  ) }) });
}, Bd = [
  "image/*",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
  "text/csv"
], ib = () => ({
  upload: async (n) => ({
    type: "success",
    value: `local-${n.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
}), ob = ({
  value: n,
  useUpload: e,
  accept: t,
  maxSizeMB: r,
  ...s
}) => {
  const { onQuestionChange: i, useUpload: o } = qe(), a = _n(s), { t: l } = De(), u = e ?? o, d = {
    id: s.id,
    type: "file",
    label: l("surveyFormBuilder.answer.label"),
    multiple: !0,
    accept: t ?? Bd,
    maxSizeMB: r,
    useUpload: u ?? ib
  };
  return /* @__PURE__ */ c(Ve, { ...s, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    ot,
    {
      field: d,
      value: n ?? [],
      onChange: (f) => {
        i?.({
          ...s,
          type: "file",
          value: f || null
        });
      },
      disabled: a,
      hideLabel: !0
    }
  ) }) });
}, ab = ({
  value: n,
  ...e
}) => {
  const { t } = De(), { onQuestionChange: r, answering: s } = qe(), i = _n(e), o = t("surveyFormBuilder.answer.linkPlaceholder"), a = {
    id: e.id,
    type: "text",
    inputType: "url",
    label: t("surveyFormBuilder.answer.label"),
    placeholder: o,
    clearable: !e.required
  };
  return /* @__PURE__ */ c(Ve, { ...e, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    ot,
    {
      field: a,
      value: s ? n ?? "" : o,
      onChange: (l) => {
        r?.({
          ...e,
          type: "link",
          value: l || null
        });
      },
      disabled: i,
      hideLabel: !0
    }
  ) }) });
}, lb = ({
  value: n,
  ...e
}) => {
  const { t } = De(), { onQuestionChange: r, answering: s } = qe(), i = _n(e), o = (l) => {
    r?.({
      ...e,
      type: "numeric",
      value: l
    });
  }, a = t("surveyFormBuilder.answer.numericPlaceholder");
  return /* @__PURE__ */ c(Ve, { ...e, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: s ? /* @__PURE__ */ c(
    tl,
    {
      locale: "en-US",
      size: "md",
      value: n,
      onChange: o,
      disabled: i,
      label: t("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      required: e.required,
      maxDecimals: 0,
      placeholder: a,
      icon: jr
    }
  ) : /* @__PURE__ */ c(
    Ai,
    {
      type: "text",
      size: "md",
      value: a,
      onChange: () => {
      },
      disabled: !0,
      label: t("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      icon: jr
    }
  ) }) });
}, cb = ({
  option: n,
  selected: e,
  onClick: t,
  onChangeLabel: r,
  disabled: s,
  isEmojiMode: i = !1
}) => {
  const { value: o, label: a } = n, [l, u] = ee(!1), d = () => {
    s || t(o);
  }, f = (h) => {
    r?.(o, h.native), u(!1);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: Y(
        "group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        e && "border-f1-border-selected bg-f1-background-selected-secondary",
        s ? "cursor-default" : "cursor-pointer"
      ),
      onClick: d,
      children: i ? /* @__PURE__ */ T(Ei, { open: l, onOpenChange: u, children: [
        /* @__PURE__ */ c(Di, { asChild: !0, children: /* @__PURE__ */ c(
          Be,
          {
            emoji: a,
            label: o.toString(),
            variant: "ghost",
            hideLabel: !0
          }
        ) }),
        /* @__PURE__ */ c(
          Ti,
          {
            side: "bottom",
            align: "center",
            className: "w-fit border-none bg-transparent p-2 shadow-none",
            onClick: (h) => {
              h.preventDefault(), h.stopPropagation();
            },
            children: /* @__PURE__ */ c(
              uf,
              {
                data: ff,
                onEmojiSelect: f,
                locale: "en",
                icons: "outline",
                set: "twitter",
                theme: "light",
                emojiButtonSize: 32,
                emojiButtonRadius: "10px",
                emojiSize: 24,
                maxFrequentRows: 2,
                skinTonePosition: "none",
                previewPosition: "none",
                searchPosition: "top",
                navPosition: "top",
                dynamicWidth: !0
              }
            )
          }
        )
      ] }) : /* @__PURE__ */ c("span", { className: "text-base font-medium", children: a })
    }
  );
}, db = ({
  options: n,
  value: e,
  ...t
}) => {
  const { onQuestionChange: r, disabled: s, answering: i } = qe(), a = Ld(n) === "emojis", l = (d) => {
    r?.({
      id: t.id,
      value: d,
      type: "rating"
    });
  }, u = (d, f) => {
    const h = n.map(
      (m) => m.value === d ? { ...m, label: f } : m
    );
    r?.({
      id: t.id,
      type: "rating",
      value: e ?? 0,
      options: h
    });
  };
  return /* @__PURE__ */ c(Ve, { ...t, children: /* @__PURE__ */ c("div", { className: "grid grid-cols-3 gap-3 @md:grid-cols-5", children: n.map((d) => /* @__PURE__ */ c(
    cb,
    {
      option: d,
      selected: e === d.value,
      onClick: l,
      onChangeLabel: u,
      disabled: s && !i,
      isEmojiMode: i ? !1 : a
    },
    d.value
  )) }) });
}, ub = (n) => /* @__PURE__ */ c(db, { ...n, type: "rating" });
function fb({
  checked: n,
  disabled: e
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      className: Y(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        n ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background",
        e && "opacity-50"
      ),
      children: n && /* @__PURE__ */ c("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
const hb = {
  fieldSizing: "content"
}, mb = ({
  index: n,
  option: e,
  onClick: t,
  onClickAction: r,
  onChangeLabel: s,
  disabled: i,
  answering: o,
  selected: a,
  correct: l,
  locked: u,
  type: d
}) => {
  const { value: f, label: h } = e, { isDragging: m, setIsDragging: g, setDraggedItemId: y, draggedItemId: p } = jn(), { t: b } = De(), v = m && p === f, k = () => {
    !i && !o || t(f);
  }, C = (L) => {
    r({ value: f, index: n, action: L });
  }, x = (L) => {
    L.stopPropagation(), C("mark-as-correct");
  }, _ = (L) => {
    L.stopPropagation(), C("remove");
  }, w = (L) => {
    const E = L.target.value;
    s({ value: f, index: n, newLabel: E });
  }, N = () => {
    g(!0), y(f);
  }, A = () => {
    g(!1), y(null);
  }, I = m ? v : !i && !o, D = !i && !o && !u;
  return /* @__PURE__ */ c(
    vs,
    {
      value: e,
      onDragStart: N,
      onDragEnd: A,
      dragListener: D,
      layout: "position",
      as: "div",
      children: /* @__PURE__ */ T(
        "div",
        {
          className: Y(
            "group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover",
            (i || o) && "cursor-pointer",
            m && "!cursor-grabbing active:!cursor-grabbing"
          ),
          onClick: k,
          children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: Y(
                  "block",
                  I ? "group-hover:hidden" : "cursor-default",
                  m && "cursor-grabbing [&_button]:cursor-grabbing"
                ),
                children: d === "multi-select" ? /* @__PURE__ */ c(
                  ar,
                  {
                    title: h,
                    checked: o ? !!a : !1,
                    onCheckedChange: k,
                    disabled: !o,
                    presentational: !o,
                    hideLabel: !0
                  }
                ) : /* @__PURE__ */ c(
                  fb,
                  {
                    checked: o ? !!a : !1,
                    disabled: !o
                  }
                )
              }
            ),
            /* @__PURE__ */ c(
              "div",
              {
                className: Y(
                  "hidden scale-75 cursor-grab",
                  D && "active:cursor-grabbing",
                  I && "group-hover:block",
                  m && "cursor-grabbing",
                  !D && "cursor-not-allowed"
                ),
                children: /* @__PURE__ */ c(
                  "div",
                  {
                    className: Y(
                      "flex aspect-square scale-90 items-center justify-center",
                      d === "multi-select" ? "w-6" : "w-5"
                    ),
                    children: /* @__PURE__ */ c(ft, { icon: vr, size: "sm" })
                  }
                )
              }
            ),
            !i && !o && !u ? /* @__PURE__ */ c(
              "textarea",
              {
                placeholder: b(
                  "surveyFormBuilder.selectQuestion.optionPlaceholder"
                ),
                value: h,
                onChange: w,
                className: "flex-1 resize-none font-medium",
                style: hb
              }
            ) : /* @__PURE__ */ c("p", { className: "flex-1 font-medium", children: h }),
            !i && !o && l && /* @__PURE__ */ c("span", { className: "text-sm font-medium text-f1-foreground-positive", children: b("surveyFormBuilder.selectQuestion.correct") }),
            !i && !o && !u ? /* @__PURE__ */ T("div", { className: "hidden flex-row items-center gap-1 group-hover:inline-block", children: [
              /* @__PURE__ */ c(
                Be,
                {
                  label: b("surveyFormBuilder.selectQuestion.markAsCorrect"),
                  variant: "ghost",
                  icon: l ? yr : pl,
                  onClick: x,
                  hideLabel: !0
                }
              ),
              /* @__PURE__ */ c(
                Be,
                {
                  label: b("surveyFormBuilder.selectQuestion.remove"),
                  variant: "ghost",
                  icon: An,
                  hideLabel: !0,
                  onClick: _
                }
              )
            ] }) : /* @__PURE__ */ c("div", { className: "min-h-8" })
          ]
        }
      )
    }
  );
}, pb = ({ options: n, ...e }) => {
  const {
    onQuestionChange: t,
    disabled: r,
    answering: s,
    getSectionContainingQuestion: i
  } = qe(), o = new Set(n.map((p) => p.value)).size !== n.length, a = i(e.id), l = e.locked || a?.locked, { t: u } = De(), d = H(
    () => ({
      id: e.id,
      type: e.type,
      options: n
    }),
    [e.id, e.type, n]
  );
  re(() => {
    if (!o) return;
    let p = n.map((k) => ({
      ...k,
      value: k.label.toLowerCase().replace(/\s+/g, "-")
    }));
    const b = {
      id: e.id,
      type: e.type
    }, v = new Set(p.map((k) => k.value)).size !== p.length;
    if (!v) {
      t?.({ ...b, options: p });
      return;
    }
    p = p.map((k) => ({
      ...k,
      value: hf()
    })), v && t?.({ ...b, options: p }), t?.({ ...b, options: p });
  }, [
    o,
    t,
    n,
    e.id,
    e.type
  ]);
  const f = (p) => {
    let b = n;
    p.action === "remove" && (b = n.filter((v) => v.value !== p.value)), p.action === "mark-as-correct" && (b = n.map((v) => ({
      ...v,
      correct: v.value === p.value ? !v.correct : v.correct
    }))), t?.({
      ...d,
      options: b
    });
  }, h = (p) => {
    if (e.type === "select") {
      const b = !e.required && e.value === p ? null : p;
      t?.({
        ...d,
        type: e.type,
        value: b
      });
    } else if (e.type === "multi-select") {
      const b = Array.isArray(e.value) ? e.value : [], v = b.includes(p) ? b.filter((k) => k !== p) : [...b, p];
      t?.({
        ...d,
        type: e.type,
        value: v
      });
    }
  }, m = (p) => {
    const b = n.map((v, k) => ({
      ...v,
      ...k === p.index ? {
        value: p.value,
        label: p.newLabel
      } : {}
    }));
    t?.({
      ...d,
      options: b
    });
  }, g = () => {
    const p = n.length, b = {
      value: `new-option-${p + 1}`,
      label: u("surveyFormBuilder.selectQuestion.newOption", {
        number: p + 1
      })
    };
    t?.({
      ...d,
      options: [...n, b]
    });
  }, y = (p) => {
    t?.({
      ...d,
      options: p
    });
  };
  return o ? null : /* @__PURE__ */ c(Ve, { ...e, children: /* @__PURE__ */ T("div", { className: "-mx-0.5 flex flex-col items-start [&>div]:w-full", children: [
    /* @__PURE__ */ c(xo, { children: /* @__PURE__ */ c(
      Bi,
      {
        axis: "y",
        values: n,
        onReorder: y,
        as: "div",
        children: n.map((p, b) => {
          const v = e.type === "select" ? e.value === p.value : Array.isArray(e.value) && e.value.includes(p.value);
          return /* @__PURE__ */ c("div", { className: "w-full [&>div]:w-full", children: /* @__PURE__ */ c(
            mb,
            {
              index: b,
              option: p,
              correct: p.correct,
              onClick: h,
              onClickAction: f,
              onChangeLabel: m,
              disabled: r,
              answering: s,
              selected: v,
              locked: l,
              type: e.type
            }
          ) }, p.value);
        })
      }
    ) }),
    !r && !s && !l && /* @__PURE__ */ c("div", { className: "opacity-50", children: /* @__PURE__ */ c(
      Be,
      {
        label: u("surveyFormBuilder.selectQuestion.addOption"),
        variant: "ghost",
        icon: Mi,
        onClick: g
      }
    ) })
  ] }) });
}, gb = ({
  value: n,
  ...e
}) => {
  const { onQuestionChange: t, answering: r } = qe(), s = _n(e), { t: i } = De(), o = i("surveyFormBuilder.answer.textPlaceholder"), a = H(
    () => e.type === "text" ? {
      id: e.id,
      type: "text",
      label: i("surveyFormBuilder.answer.label"),
      placeholder: o,
      clearable: !e.required
    } : {
      id: e.id,
      type: "textarea",
      label: i("surveyFormBuilder.answer.label"),
      placeholder: o,
      rows: 4
    },
    [
      e.id,
      e.type,
      e.required,
      o,
      i
    ]
  );
  return /* @__PURE__ */ c(Ve, { ...e, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    ot,
    {
      field: a,
      value: r ? n ?? "" : o,
      onChange: (l) => {
        t?.({
          ...e,
          value: l
        });
      },
      disabled: s,
      hideLabel: !0
    }
  ) }) });
}, _o = ({ ...n }) => {
  switch (n.type) {
    case "text":
    case "longText":
      return /* @__PURE__ */ c(gb, { ...n });
    case "rating":
      return /* @__PURE__ */ c(ub, { ...n });
    case "select":
    case "multi-select":
      return /* @__PURE__ */ c(pb, { ...n });
    case "dropdown-single":
    case "dropdown-multi":
      return /* @__PURE__ */ c(sb, { ...n });
    case "numeric":
      return /* @__PURE__ */ c(lb, { ...n });
    case "link":
      return /* @__PURE__ */ c(ab, { ...n });
    case "date":
      return /* @__PURE__ */ c(rb, { ...n });
    case "file":
      return /* @__PURE__ */ c(ob, { ...n });
    case "checkbox":
      return /* @__PURE__ */ c(nb, { ...n });
    default:
      throw new Error("Invalid question type provided");
  }
}, Vd = () => {
  const { t: n } = De();
  return /* @__PURE__ */ T("div", { className: "mt-8 ml-7 flex flex-row items-center gap-4", children: [
    /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
    /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-secondary", children: n("surveyFormBuilder.labels.endOfSection") }),
    /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" })
  ] });
}, vb = ({
  item: n,
  showEndOfSection: e,
  className: t
}) => {
  const { isDragging: r, setIsDragging: s, setDraggedItemId: i, draggedItemId: o } = jn(), a = Vi(), { disabled: l, answering: u, getSectionContainingQuestion: d } = qe(), f = d(n.question.id), h = !!f && o === f.id, m = () => {
    s(!0), i(n.question.id);
  }, g = () => {
    s(!1), i(null);
  }, y = n.question.locked || f?.locked, p = !l && !u && !y;
  return /* @__PURE__ */ T(
    vs,
    {
      value: n,
      onDragStart: m,
      onDragEnd: g,
      dragListener: !1,
      dragControls: a,
      layout: "position",
      as: "div",
      className: Y(
        t,
        h && "invisible h-0 overflow-hidden"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "w-full", children: /* @__PURE__ */ T(
          "div",
          {
            className: Y(
              "group/element flex flex-row items-start gap-1",
              r && "cursor-grabbing"
            ),
            children: [
              !l && !u && /* @__PURE__ */ c(
                "div",
                {
                  className: Y(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !r && "cursor-grab",
                    !p && "cursor-not-allowed"
                  ),
                  onPointerDown: (b) => {
                    p && a.start(b);
                  },
                  children: /* @__PURE__ */ c(ze, { icon: vr, size: "sm" })
                }
              ),
              /* @__PURE__ */ c(
                _o,
                {
                  ...n.question
                }
              )
            ]
          }
        ) }),
        e && /* @__PURE__ */ c(Vd, {})
      ]
    }
  );
}, yb = ({ question: n }) => {
  const { isDragging: e, setIsDragging: t, setDraggedItemId: r } = jn(), s = Vi(), { disabled: i, answering: o, getSectionContainingQuestion: a } = qe(), l = a(n.id), u = () => {
    t(!0), r(n.id);
  }, d = () => {
    t(!1), r(null);
  }, f = n.locked || l?.locked, h = !i && !o && !f;
  return /* @__PURE__ */ c(
    vs,
    {
      value: n,
      as: "div",
      onDragStart: u,
      onDragEnd: d,
      dragListener: !1,
      dragControls: s,
      layout: "position",
      children: /* @__PURE__ */ T(
        "div",
        {
          className: Y(
            "group/question-element flex flex-row items-start gap-1",
            e && "cursor-grabbing"
          ),
          style: { marginLeft: i || o ? 0 : -27 },
          children: [
            !i && !o && /* @__PURE__ */ c(
              "div",
              {
                className: Y(
                  "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40",
                  !e && "cursor-grab",
                  !h && "cursor-not-allowed"
                ),
                onPointerDown: (m) => {
                  h && s.start(m);
                },
                children: /* @__PURE__ */ c(ze, { icon: vr, size: "sm" })
              }
            ),
            /* @__PURE__ */ c(
              _o,
              {
                ...n
              }
            )
          ]
        }
      )
    }
  );
}, bb = {
  fieldSizing: "content"
}, xb = ({
  id: n,
  title: e,
  description: t,
  questions: r = [],
  locked: s,
  hideQuestions: i
}) => {
  const {
    onSectionChange: o,
    disabled: a,
    answering: l,
    deleteElement: u,
    onDuplicateElement: d
  } = qe(), [f, h] = ee(!1), { t: m } = De(), g = H(
    () => ({
      id: n,
      title: e,
      description: t
    }),
    [n, e, t]
  ), y = (w) => {
    o?.({ ...g, title: w.target.value });
  }, p = (w) => {
    o?.({
      ...g,
      description: w.target.value
    });
  }, b = (w) => {
    o?.({ ...g, questions: w });
  }, v = () => {
    d?.({ elementId: n, type: "section" });
  }, k = () => {
    u(n);
  }, C = [
    {
      label: m("surveyFormBuilder.actions.duplicateSection"),
      icon: Hr,
      onClick: v
    },
    {
      label: m("surveyFormBuilder.actions.deleteSection"),
      icon: An,
      onClick: k,
      critical: !0
    }
  ], x = a || s || l, _ = Z(null);
  return re(() => {
    _.current?.focus({ preventScroll: !0 });
  }, []), /* @__PURE__ */ T(
    "div",
    {
      id: `co-creation-section-${n}`,
      className: "group/section flex w-full flex-col gap-1 bg-f1-background",
      children: [
        /* @__PURE__ */ T("div", { className: "py-1 pl-5 pr-3", children: [
          /* @__PURE__ */ T("div", { className: "flex flex-row", children: [
            /* @__PURE__ */ c(
              "input",
              {
                ref: _,
                type: "text",
                "aria-label": m("surveyFormBuilder.labels.title"),
                value: e,
                placeholder: m("surveyFormBuilder.labels.sectionTitlePlaceholder"),
                onChange: y,
                disabled: x,
                className: Y(
                  "w-full text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                  x && "cursor-not-allowed"
                )
              }
            ),
            !a && !l && !s && /* @__PURE__ */ c(
              "div",
              {
                className: Y(
                  "opacity-0 group-hover/section:opacity-100",
                  f && "opacity-100"
                ),
                children: /* @__PURE__ */ c(
                  Ni,
                  {
                    items: C,
                    icon: Br,
                    open: f,
                    onOpenChange: h,
                    align: "start",
                    children: /* @__PURE__ */ c(
                      Be,
                      {
                        icon: Br,
                        label: m("surveyFormBuilder.actions.actions"),
                        size: "md",
                        variant: "ghost",
                        tooltip: !1,
                        hideLabel: !0
                      }
                    )
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ c(
            "textarea",
            {
              value: t,
              "aria-label": m("surveyFormBuilder.labels.description"),
              placeholder: m(
                "surveyFormBuilder.labels.sectionDescriptionPlaceholder"
              ),
              onChange: p,
              disabled: x,
              style: bb,
              className: Y(
                "w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                x && "cursor-not-allowed"
              )
            }
          )
        ] }),
        !i && /* @__PURE__ */ T(Ye, { children: [
          /* @__PURE__ */ c(xo, { children: /* @__PURE__ */ c(
            Bi,
            {
              axis: "y",
              values: r,
              onReorder: b,
              as: "div",
              children: /* @__PURE__ */ c("div", { className: "group/section-list flex flex-col gap-4", children: r.map((w) => /* @__PURE__ */ c(yb, { question: w }, w.id)) })
            }
          ) }),
          !l && /* @__PURE__ */ T("div", { className: "mt-8 flex flex-row items-center gap-4", children: [
            /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
            /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-secondary", children: m("surveyFormBuilder.labels.endOfSection") }),
            /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" })
          ] })
        ] })
      ]
    }
  );
}, wb = ({
  item: n,
  className: e
}) => {
  const { isDragging: t, setIsDragging: r, setDraggedItemId: s, draggedItemId: i } = jn(), o = Vi(), { disabled: a, answering: l } = qe(), u = i === n.section.id, d = () => {
    r(!0), s(n.section.id);
  }, f = () => {
    r(!1), s(null);
  }, h = !a && !l && !n.section.locked;
  return /* @__PURE__ */ c(
    vs,
    {
      value: n,
      onDragStart: d,
      onDragEnd: f,
      dragListener: !1,
      dragControls: o,
      layout: "position",
      as: "div",
      className: e,
      children: /* @__PURE__ */ c("div", { className: "w-full", children: /* @__PURE__ */ T("div", { className: "group/element w-full", children: [
        /* @__PURE__ */ T(
          "div",
          {
            className: Y(
              "flex flex-row items-start gap-1 w-full",
              t && "cursor-grabbing"
            ),
            children: [
              !a && !l && /* @__PURE__ */ c(
                "div",
                {
                  className: Y(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !t && "cursor-grab",
                    !h && "cursor-not-allowed"
                  ),
                  onPointerDown: (m) => {
                    h && o.start(m);
                  },
                  children: /* @__PURE__ */ c(ze, { icon: vr, size: "sm" })
                }
              ),
              /* @__PURE__ */ c(xb, { ...n.section, hideQuestions: !0 })
            ]
          }
        ),
        u && (n.section.questions ?? []).length > 0 && /* @__PURE__ */ T("div", { className: "flex flex-col gap-4 w-full mt-4 ml-7", children: [
          (n.section.questions ?? []).map((m) => /* @__PURE__ */ c(_o, { ...m }, m.id)),
          /* @__PURE__ */ c(Vd, {})
        ] })
      ] }) })
    }
  );
}, Ma = (n) => Zy[n], _b = (n) => {
  document.getElementById(n)?.scrollIntoView({ behavior: "smooth", block: "start" });
}, Cb = (n, e) => {
  const {
    untitledSectionLabel: t,
    untitledQuestionLabel: r,
    duplicateQuestionLabel: s,
    deleteQuestionLabel: i,
    duplicateSectionLabel: o,
    deleteSectionLabel: a,
    questionOptionsLabel: l,
    requiredLabel: u,
    questionTypeLabel: d,
    singleSelectionLabel: f,
    multiSelectionLabel: h
  } = e, { deleteElement: m, onDuplicateElement: g, disabled: y, answering: p } = qe(), { getActionsForQuestion: b, questionTypes: v } = zd(), k = B((x) => {
    _b(x);
  }, []), C = B(
    (x, _, w) => {
      const {
        question: N,
        currentRatingType: A,
        currentDatasetKey: I,
        disallowOptionalQuestions: D,
        handleChangeRequired: L,
        handleSelectQuestionType: E,
        handleSelectRatingType: M,
        handleDuplicate: P,
        handleDelete: $
      } = b(x, _, w), W = [
        { type: "label", text: l }
      ];
      D || W.push({
        type: "toggle",
        label: u,
        icon: hl,
        checked: !!N?.required,
        onCheckedChange: L
      });
      const ce = v.filter((V) => !V.datasetKey), G = v.filter((V) => !!V.datasetKey), oe = ce.map((V) => {
        if (V.questionType === "rating") {
          const Q = ms.map((ge) => ({
            label: ge.label,
            onClick: () => M(ge.value),
            selected: A === ge.value
          }));
          return {
            type: "submenu",
            label: V.label,
            icon: V.icon,
            selectedLabel: A ? ms.find((ge) => ge.value === A)?.label : void 0,
            children: Q
          };
        }
        return {
          label: V.label,
          icon: V.icon,
          onClick: () => E(V.questionType),
          selected: _ === V.questionType && !I
        };
      }), me = /* @__PURE__ */ new Map();
      for (const V of G)
        V.datasetKey && !me.has(V.datasetKey) && me.set(V.datasetKey, {
          label: V.label,
          icon: V.icon,
          datasetKey: V.datasetKey
        });
      if (me.size > 0) {
        oe.push({ type: "separator" });
        for (const [V, Q] of me)
          oe.push({
            type: "submenu",
            label: Q.label,
            icon: Q.icon,
            selectedLabel: I === V ? _ === "dropdown-multi" ? h : f : void 0,
            children: [
              {
                label: f,
                icon: Tt,
                onClick: () => E("dropdown-single", V),
                selected: I === V && _ === "dropdown-single"
              },
              {
                label: h,
                icon: wn,
                onClick: () => E("dropdown-multi", V),
                selected: I === V && _ === "dropdown-multi"
              }
            ]
          });
      }
      let z;
      if (I) {
        const V = me.get(I);
        V && (z = V.label);
      } else
        z = ce.find(
          (V) => V.questionType === _
        )?.label;
      return W.push({
        type: "submenu",
        label: d,
        icon: ml,
        selectedLabel: z,
        children: oe
      }), W.push({ type: "separator" }), W.push({
        label: s,
        icon: Hr,
        onClick: P
      }), w && W.push({
        label: i,
        icon: An,
        onClick: $,
        critical: !0
      }), W;
    },
    [
      b,
      v,
      l,
      u,
      d,
      f,
      h,
      s,
      i
    ]
  );
  return H(
    () => n.map((x) => {
      if (x.type === "section") {
        const w = x.section, N = `co-creation-section-${w.id}`, A = w.questions ?? [], I = A.length === 1;
        return {
          id: N,
          label: w.title || t,
          icon: zi,
          onClick: k,
          ...!y && !p && !w.locked && {
            otherActions: [
              {
                label: o,
                icon: Hr,
                onClick: () => g?.({
                  elementId: w.id,
                  type: "section"
                })
              },
              { type: "separator" },
              {
                label: a,
                icon: An,
                onClick: () => m(w.id),
                critical: !0
              }
            ]
          },
          children: A.map((D) => ({
            id: `co-creation-question-${D.id}`,
            label: D.title || r,
            icon: Ma(D.type),
            onClick: k,
            ...!y && !p && !w.locked && {
              otherActions: C(
                D.id,
                D.type,
                !I
              )
            }
          }))
        };
      }
      const _ = x.question;
      return {
        id: `co-creation-question-${_.id}`,
        label: _.title || r,
        icon: Ma(_.type),
        onClick: k,
        ...!y && !p && !_.locked && {
          otherActions: C(
            _.id,
            _.type,
            !0
          )
        }
      };
    }),
    [
      n,
      k,
      t,
      r,
      y,
      p,
      C,
      o,
      a,
      g,
      m
    ]
  );
}, ni = "co-creation-section-", Or = "co-creation-question-";
function Sb(n, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const o of e)
    if (o.type === "section") {
      t.set(o.section.id, o.section);
      for (const a of o.section.questions ?? [])
        r.set(a.id, a);
    } else
      r.set(o.question.id, o.question);
  const s = [], i = (o) => {
    if (o.id.startsWith(ni)) {
      const a = o.id.slice(ni.length), l = t.get(a);
      if (!l) return;
      const u = (o.children ?? []).filter((d) => d.id.startsWith(Or)).map((d) => r.get(d.id.slice(Or.length))).filter((d) => d != null);
      s.push({
        type: "section",
        section: { ...l, questions: u }
      });
      for (const d of o.children ?? [])
        d.id.startsWith(ni) && i(d);
      return;
    }
    if (o.id.startsWith(Or)) {
      const a = o.id.slice(Or.length), l = r.get(a);
      l && s.push({ type: "question", question: l });
    }
  };
  for (const o of n)
    i(o);
  return s;
}
const $d = ({
  elements: n,
  onChange: e,
  answering: t
}) => {
  const { t: r } = De(), { disabled: s } = qe(), { portalContainer: i } = Je(Iu), o = Cb(n, {
    untitledSectionLabel: r("surveyFormBuilder.labels.sectionTitlePlaceholder"),
    untitledQuestionLabel: r("surveyFormBuilder.labels.titlePlaceholder"),
    duplicateQuestionLabel: r("surveyFormBuilder.actions.duplicateQuestion"),
    deleteQuestionLabel: r("surveyFormBuilder.actions.deleteQuestion"),
    duplicateSectionLabel: r("surveyFormBuilder.actions.duplicateSection"),
    deleteSectionLabel: r("surveyFormBuilder.actions.deleteSection"),
    questionOptionsLabel: r("surveyFormBuilder.labels.questionOptions"),
    requiredLabel: r("surveyFormBuilder.labels.required"),
    questionTypeLabel: r("surveyFormBuilder.labels.questionType"),
    singleSelectionLabel: r("surveyFormBuilder.labels.singleSelection"),
    multiSelectionLabel: r("surveyFormBuilder.labels.multiSelection")
  }), a = B(
    (l) => {
      e(Sb(l, n));
    },
    [n, e]
  );
  return /* @__PURE__ */ c("div", { className: "sticky left-0 top-1/2 z-10 hidden h-0 -translate-y-12 px-2 @3xl:block", children: /* @__PURE__ */ c(
    Od,
    {
      items: o,
      barsAlign: "left",
      size: "md",
      collapsible: !0,
      showChildrenCounter: !0,
      sortable: !t && !s,
      onReorder: a,
      portalContainer: i
    }
  ) });
};
function kb(n) {
  return n.flatMap((e) => e.type === "section" ? [
    {
      type: "section-header",
      id: `section-header-${e.section.id}`,
      section: e.section
    },
    ...(e.section.questions ?? []).map(
      (t) => ({
        type: "question",
        id: `question-${t.id}`,
        question: t
      })
    ),
    {
      type: "section-end",
      id: `section-end-${e.section.id}`,
      sectionId: e.section.id
    }
  ] : [
    {
      type: "question",
      id: `question-${e.question.id}`,
      question: e.question
    }
  ]);
}
function Pa(n) {
  const e = [];
  let t = null, r = [];
  for (const s of n)
    s.type === "section-header" ? (t && e.push({
      type: "section",
      section: { ...t, questions: r }
    }), t = s.section, r = []) : s.type === "section-end" ? t && (e.push({
      type: "section",
      section: { ...t, questions: r }
    }), t = null, r = []) : t ? r.push(s.question) : e.push({ type: "question", question: s.question });
  return t && e.push({
    type: "section",
    section: { ...t, questions: r }
  }), e;
}
function Nb(n, e) {
  const t = [];
  let r = null, s = [];
  function i() {
    if (!r) return;
    let o = -1;
    for (let a = s.length - 1; a >= 0; a--)
      if (s[a].type === "question" && e.has(s[a].id)) {
        o = a;
        break;
      }
    if (o === -1)
      t.push({
        type: "section-end",
        id: `section-end-${r}`,
        sectionId: r
      }), t.push(...s);
    else {
      for (let a = 0; a <= o; a++)
        t.push(s[a]);
      t.push({
        type: "section-end",
        id: `section-end-${r}`,
        sectionId: r
      });
      for (let a = o + 1; a < s.length; a++)
        t.push(s[a]);
    }
    s = [], r = null;
  }
  for (const o of n)
    o.type === "section-header" ? (i(), r = o.section.id, t.push(o)) : r ? s.push(o) : t.push(o);
  return i(), t;
}
function Eb(n) {
  const e = /* @__PURE__ */ new Set();
  for (const t of n)
    if (t.type === "section") {
      const r = t.section.questions;
      r?.length && e.add(`question-${r[r.length - 1].id}`);
    }
  return e;
}
function Db({
  flatItems: n,
  onChange: e
}) {
  const [t, r] = ee(
    null
  ), [s, i] = ee(!1), o = B(
    (u) => {
      const d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set();
      let h = null;
      for (const _ of n)
        _.type === "section-header" ? (h = _.id, d.set(_.id, /* @__PURE__ */ new Set()), _.section.locked && f.add(_.id)) : _.type === "section-end" ? h = null : h && d.get(h).add(_.id);
      const m = n.filter((_) => _.type === "section-header").map((_) => _.id), g = u.filter((_) => _.type === "section-header").map((_) => _.id), y = m.some(
        (_, w) => g[w] !== _
      ), p = new Map(
        n.filter((_) => _.type !== "section-end").map((_, w) => [_.id, w])
      ), b = new Set(f);
      if (y)
        for (const [_, w] of u.entries())
          w.type === "section-header" && p.get(w.id) !== _ && b.add(w.id);
      let v;
      if (b.size > 0) {
        const _ = /* @__PURE__ */ new Map();
        for (const A of b) {
          const I = d.get(A);
          if (I)
            for (const D of I)
              _.set(D, A);
        }
        const w = /* @__PURE__ */ new Map();
        for (const A of b)
          w.set(A, []);
        const N = [];
        for (const A of u) {
          const I = _.get(A.id);
          I ? w.get(I).push(A) : N.push(A);
        }
        v = [];
        for (const A of N)
          v.push(A), A.type === "section-header" && b.has(A.id) && v.push(...w.get(A.id));
      } else
        v = u;
      const k = /* @__PURE__ */ new Set();
      for (const _ of d.values())
        for (const w of _)
          k.add(w);
      const C = Nb(
        v,
        k
      );
      if ([
        ...d.entries()
      ].some(([_, w]) => {
        if (w.size === 0) return !1;
        const N = C.findIndex((I) => I.id === _);
        if (N === -1) return !1;
        const A = C[N + 1];
        return !A || A.type !== "question";
      })) {
        r(C), i(!0);
        return;
      }
      e(Pa(C));
    },
    [e, n]
  ), a = B(() => {
    if (t) {
      const u = /* @__PURE__ */ new Set();
      for (let f = 0; f < t.length; f++) {
        const h = t[f];
        if (h.type === "section-header") {
          const m = t[f + 1];
          (!m || m.type === "section-end" || m.type === "section-header") && u.add(h.section.id);
        }
      }
      const d = t.filter((f) => !(f.type === "section-header" && u.has(f.section.id) || f.type === "section-end" && u.has(f.sectionId)));
      e(Pa(d));
    }
    i(!1), r(null);
  }, [t, e]), l = B(() => {
    i(!1), r(null);
  }, []);
  return {
    handleFlatReorder: o,
    handleConfirmLastQuestionMove: a,
    handleCancelLastQuestionMove: l,
    lastQuestionDialogOpen: s
  };
}
function Tb({ children: n }) {
  const { isDragging: e } = jn();
  return /* @__PURE__ */ c("div", { className: Y("relative @container", e && "select-none"), children: n });
}
const Rb = ({
  elements: n,
  disabled: e,
  onChange: t,
  disallowOptionalQuestions: r,
  allowedQuestionTypes: s,
  applyingChanges: i,
  useUpload: o,
  datasets: a
}) => {
  const l = !e, u = H(
    () => n.map((k) => k.type === "question" ? {
      ...k,
      question: {
        ...k.question,
        required: r ? !0 : k.question.required
      }
    } : k.type === "section" ? {
      ...k,
      section: {
        ...k.section,
        questions: k.section.questions?.map((C) => ({
          ...C,
          required: r ? !0 : C.required
        }))
      }
    } : k),
    [n, r]
  ), d = H(() => kb(u), [u]), f = H(
    () => d.filter((k) => k.type !== "section-end"),
    [d]
  ), h = H(
    () => Eb(u),
    [u]
  ), m = H(() => {
    const k = /* @__PURE__ */ new Set();
    for (const C of u)
      if (C.type === "section")
        for (const x of C.section.questions ?? [])
          k.add(`question-${x.id}`);
    return k;
  }, [u]), {
    handleFlatReorder: g,
    handleConfirmLastQuestionMove: y,
    handleCancelLastQuestionMove: p,
    lastQuestionDialogOpen: b
  } = Db({ flatItems: d, onChange: t });
  re(() => {
    if (i) {
      const k = document.activeElement;
      k && k.getAttribute("name") !== "one-ai-input" && k.blur();
    }
  }, [i]);
  const v = !!u.length;
  return /* @__PURE__ */ T(
    bo,
    {
      disabled: e,
      elements: u,
      onChange: t,
      disallowOptionalQuestions: r,
      allowedQuestionTypes: s,
      useUpload: o,
      datasets: a,
      children: [
        /* @__PURE__ */ c(xo, { children: /* @__PURE__ */ T(Tb, { children: [
          v && /* @__PURE__ */ c($d, { elements: u, onChange: t }),
          /* @__PURE__ */ T("div", { className: "relative flex flex-1 flex-col", children: [
            /* @__PURE__ */ T(
              Rn.div,
              {
                className: Y(
                  "flex w-full max-w-[750px] self-center flex-col gap-6",
                  i && "pointer-events-none"
                ),
                initial: { filter: "blur(0px)" },
                animate: { filter: i ? "blur(2px)" : "none" },
                exit: { filter: "blur(0px)" },
                children: [
                  /* @__PURE__ */ c(
                    Bi,
                    {
                      axis: "y",
                      values: f,
                      onReorder: g,
                      as: "div",
                      children: /* @__PURE__ */ c("div", { className: "flex flex-col", children: f.map((k, C) => {
                        const x = C === 0 ? "" : m.has(k.id) ? "mt-4" : "mt-8";
                        return k.type === "section-header" ? /* @__PURE__ */ c(
                          wb,
                          {
                            item: k,
                            className: x
                          },
                          k.id
                        ) : /* @__PURE__ */ c(
                          vb,
                          {
                            item: k,
                            showEndOfSection: h.has(k.id),
                            className: x
                          },
                          k.id
                        );
                      }) })
                    }
                  ),
                  l && /* @__PURE__ */ c(Gy, {})
                ]
              }
            ),
            i && /* @__PURE__ */ c(
              Rn.div,
              {
                className: "sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center",
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                children: /* @__PURE__ */ c(Wy, {})
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ c(
          Qy,
          {
            open: b,
            onConfirm: y,
            onCancel: p
          }
        )
      ]
    }
  );
}, $x = Pe(Rb);
function It({
  titleWidth: n,
  descriptionWidth: e,
  answer: t
}) {
  return /* @__PURE__ */ T("div", { className: "flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4", children: [
    /* @__PURE__ */ T("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ c($e, { className: "h-5 rounded-sm", style: { width: n } }),
      e && /* @__PURE__ */ c(
        $e,
        {
          className: "h-4 rounded-sm",
          style: { width: e }
        }
      )
    ] }),
    t
  ] });
}
const Pr = /* @__PURE__ */ c($e, { className: "h-10 w-full rounded-sm" }), za = /* @__PURE__ */ c($e, { className: "h-24 w-full rounded-sm" }), Ab = /* @__PURE__ */ c($e, { className: "h-10 w-56 max-w-full rounded-sm" });
function Fb() {
  return /* @__PURE__ */ c("div", { className: "grid grid-cols-5 gap-2 sm:max-w-80", children: Array.from({ length: 5 }).map((n, e) => /* @__PURE__ */ c($e, { className: "h-9 rounded-sm" }, e)) });
}
function Ba({ count: n }) {
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: Array.from({ length: n }).map((e, t) => /* @__PURE__ */ c(
    $e,
    {
      className: "h-7 w-56 max-w-full rounded-sm",
      style: { width: `${Math.max(52, 76 - t * 7)}%` }
    },
    t
  )) });
}
function Ob() {
  return /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-2", children: Array.from({ length: 5 }).map((n, e) => /* @__PURE__ */ c(
    $e,
    {
      className: "h-8 rounded-sm",
      style: { width: `${18 + e * 3}%` }
    },
    e
  )) });
}
function jd() {
  return /* @__PURE__ */ c(
    "div",
    {
      className: "flex w-full flex-col gap-10",
      "data-testid": "survey-answering-form-loading-all-questions",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [0, 1].map((n) => /* @__PURE__ */ T("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ T("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ c($e, { className: "h-6 w-56 rounded-sm" }),
          /* @__PURE__ */ c($e, { className: "h-4 w-80 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: n === 0 ? /* @__PURE__ */ T(Ye, { children: [
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "65%",
              descriptionWidth: "42%",
              answer: Pr
            }
          ),
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "70%",
              descriptionWidth: "55%",
              answer: za
            }
          ),
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "58%",
              descriptionWidth: "38%",
              answer: /* @__PURE__ */ c(Fb, {})
            }
          ),
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "62%",
              descriptionWidth: "46%",
              answer: /* @__PURE__ */ c(Ba, { count: 4 })
            }
          ),
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "54%",
              descriptionWidth: "44%",
              answer: Pr
            }
          )
        ] }) : /* @__PURE__ */ T(Ye, { children: [
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "60%",
              descriptionWidth: "50%",
              answer: Ab
            }
          ),
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "66%",
              descriptionWidth: "45%",
              answer: Pr
            }
          ),
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "57%",
              descriptionWidth: "48%",
              answer: /* @__PURE__ */ c(Ob, {})
            }
          ),
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "64%",
              descriptionWidth: "36%",
              answer: /* @__PURE__ */ c(Ba, { count: 3 })
            }
          ),
          /* @__PURE__ */ c(
            It,
            {
              titleWidth: "52%",
              descriptionWidth: "40%",
              answer: za
            }
          )
        ] }) })
      ] }, n))
    }
  );
}
function Ib() {
  return /* @__PURE__ */ T(
    "div",
    {
      className: "flex w-full flex-col gap-6",
      "data-testid": "survey-answering-form-loading-stepped",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ T("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ c($e, { className: "h-6 w-52 rounded-sm" }),
          /* @__PURE__ */ c($e, { className: "h-4 w-72 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ c(
          It,
          {
            titleWidth: "74%",
            descriptionWidth: "50%",
            answer: Pr
          }
        )
      ]
    }
  );
}
function Lb(n) {
  const [e, t] = ee(0), [r, s] = ee(null), i = n.length, o = i > 0 ? e / i * 100 : 0, a = r ?? o, l = n[e], u = e === 0, d = e === i - 1, f = B(() => {
    s(null), t((y) => Math.min(y + 1, i - 1));
  }, [i]), h = B(() => {
    s(null), t((y) => Math.max(y - 1, 0));
  }, []), m = B(() => {
    s(null), t(0);
  }, []), g = B((y) => {
    s(y);
  }, []);
  return {
    currentStep: e,
    totalSteps: i,
    progress: a,
    currentQuestion: l,
    isFirstStep: u,
    isLastStep: d,
    goToNext: f,
    goToPrevious: h,
    reset: m,
    setProgress: g
  };
}
function Mb({
  value: n,
  onChange: e,
  onBlur: t,
  config: r
}) {
  const { options: s, disabled: i } = r, o = (a) => {
    i || (e(a), t());
  };
  return /* @__PURE__ */ c("div", { className: "grid grid-cols-3 gap-3 md:grid-cols-5", children: s.map((a) => /* @__PURE__ */ c(
    "div",
    {
      className: Y(
        "flex h-10 min-w-20 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        i ? "cursor-not-allowed" : "cursor-pointer",
        n === a.value && "border-f1-border-selected bg-f1-background-selected-secondary"
      ),
      onClick: () => o(a.value),
      children: /* @__PURE__ */ c("span", { className: "text-base font-medium", children: a.label })
    },
    a.value
  )) });
}
function Pb({ checked: n }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      className: Y(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        n ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background"
      ),
      children: n && /* @__PURE__ */ c("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
function Va({
  value: n,
  onChange: e,
  onBlur: t,
  config: r
}) {
  const { options: s, type: i, required: o, disabled: a, showAnswerValidation: l } = r, u = s.some((g) => g.correct), d = !!l && u, f = (g) => {
    if (a || i !== "select") return;
    e(!o && n === g ? void 0 : g), t();
  }, h = (g) => {
    if (a || i !== "multi-select") return;
    const y = Array.isArray(n) ? n : [], p = y.includes(g) ? y.filter((b) => b !== g) : [...y, g];
    e(p), t();
  }, m = (g) => {
    i === "select" ? f(g) : h(g);
  };
  return /* @__PURE__ */ c("div", { className: "-mx-0.5 flex flex-col items-start", children: s.map((g) => {
    const y = i === "select" ? n === g.value : Array.isArray(n) && n.includes(g.value);
    return /* @__PURE__ */ T(
      "div",
      {
        className: Y(
          "flex min-h-9 w-full items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5",
          a ? "cursor-not-allowed" : "cursor-pointer hover:bg-f1-background-hover"
        ),
        onClick: (p) => {
          a || i === "multi-select" && p.target.closest("input") || m(g.value);
        },
        children: [
          i === "multi-select" ? /* @__PURE__ */ c(
            ar,
            {
              title: g.label,
              checked: !!y,
              onCheckedChange: () => h(g.value),
              hideLabel: !0
            }
          ) : /* @__PURE__ */ c(Pb, { checked: !!y }),
          /* @__PURE__ */ c("p", { className: "flex-1 font-medium", children: g.label }),
          d ? /* @__PURE__ */ c("div", { className: "min-h-8 p-1", children: /* @__PURE__ */ c(
            ze,
            {
              icon: g.correct ? pl : yr,
              color: g.correct ? "positive" : "critical",
              "aria-hidden": !0
            }
          ) }) : /* @__PURE__ */ c("div", { className: "min-h-8" })
        ]
      },
      g.value
    );
  }) });
}
const zb = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i, Bb = () => ({
  upload: async (n) => ({
    type: "success",
    value: `local-${n.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
});
function Ir(n, e) {
  return Rs().optional().superRefine((t, r) => {
    n && (!t || t.trim() === "") && r.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function Vb(n, e) {
  return Rs().optional().superRefine((t, r) => {
    if (n && (!t || t.trim() === "")) {
      r.addIssue({
        code: "custom",
        message: e("forms.validation.required")
      });
      return;
    }
    t && !zb.test(t) && r.addIssue({
      code: "custom",
      message: e("surveyFormBuilder.answer.invalidUrl")
    });
  });
}
function $a(n, e) {
  return gg().optional().superRefine((t, r) => {
    n && t == null && r.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function ja(n, e) {
  return ed(Rs()).optional().superRefine((t, r) => {
    n && (!t || t.length === 0) && r.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function $b(n, e) {
  return yg().optional().superRefine((t, r) => {
    n && !t && r.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function jb(n, e) {
  return ed(Rs()).optional().superRefine((t, r) => {
    n && (!t || t.length === 0) && r.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function Hb(n, e) {
  return vg().optional().superRefine((t, r) => {
    n && !t && r.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function Ha(n, e) {
  const t = e?.[n.id];
  if (t) return t.value;
  if (n.type === "multi-select" || n.type === "dropdown-multi")
    return [];
  const r = n;
  return r.value !== void 0 && r.value !== null ? r.value : null;
}
function Co(n) {
  const e = [];
  for (const t of n)
    if (t.type === "section")
      for (const r of t.section.questions ?? [])
        e.push({
          id: r.id,
          type: r.type,
          required: r.required,
          sectionTitle: t.section.title,
          sectionDescription: t.section.description
        });
    else
      e.push({
        id: t.question.id,
        type: t.question.type,
        required: t.question.required
      });
  return e;
}
function Wa(n, e, t, r = !1, s = r, i, o) {
  const a = n.title ?? "", l = {
    label: a,
    section: t
  }, u = {
    id: n.id,
    title: n.title,
    description: n.description,
    type: n.type,
    required: n.required,
    locked: n.locked
  };
  switch (n.type) {
    case "text": {
      const d = {
        id: n.id,
        type: "text",
        label: a,
        placeholder: e("surveyFormBuilder.answer.textPlaceholder"),
        disabled: s
      };
      return Ct(Ir(!!n.required, e), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          ot,
          {
            field: d,
            value: f ?? "",
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "longText": {
      const d = {
        id: n.id,
        type: "textarea",
        label: a,
        placeholder: e("surveyFormBuilder.answer.textPlaceholder"),
        rows: 4,
        disabled: s
      };
      return Ct(Ir(!!n.required, e), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          ot,
          {
            field: d,
            value: f ?? "",
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "numeric": {
      const d = {
        id: n.id,
        type: "number",
        label: a,
        placeholder: e("surveyFormBuilder.answer.numericPlaceholder"),
        disabled: s
      };
      return Ct($a(!!n.required, e), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          ot,
          {
            field: d,
            value: f,
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "link": {
      const d = {
        id: n.id,
        type: "text",
        inputType: "url",
        label: a,
        placeholder: e("surveyFormBuilder.answer.linkPlaceholder"),
        disabled: s
      };
      return Ct(Vb(!!n.required, e), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          ot,
          {
            field: d,
            value: f ?? "",
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "date": {
      const d = {
        id: n.id,
        type: "date",
        label: a,
        clearable: !n.required,
        disabled: s
      };
      return Ct($b(!!n.required, e), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          ot,
          {
            field: d,
            value: f,
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "dropdown-single": {
      const d = o?.[n.datasetKey];
      if (!d)
        throw new Error(
          `Dataset "${n.datasetKey}" not found for dropdown-single`
        );
      const f = n.showSearchBox ?? !0, h = {
        id: n.id,
        type: "select",
        label: a,
        placeholder: d.placeholder ?? e("surveyFormBuilder.answer.dropdownPlaceholder"),
        source: d.dataSource,
        mapOptions: d.mapOptions,
        icon: d.icon,
        clearable: !n.required,
        multiple: !1,
        disabled: s,
        showSearchBox: f,
        searchBoxPlaceholder: n.searchBoxPlaceholder
      };
      return Ct(Ir(!!n.required, e), {
        ...l,
        fieldType: "custom",
        render: ({ value: m, onChange: g, onBlur: y, error: p }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
          ot,
          {
            field: h,
            value: m ?? "",
            onChange: g,
            onBlur: y,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "dropdown-multi": {
      const d = o?.[n.datasetKey];
      if (!d)
        throw new Error(
          `Dataset "${n.datasetKey}" not found for dropdown-multi`
        );
      const f = n.showSearchBox ?? !0, h = {
        id: n.id,
        type: "select",
        label: a,
        placeholder: d.placeholder ?? e("surveyFormBuilder.answer.dropdownPlaceholder"),
        source: d.dataSource,
        mapOptions: d.mapOptions,
        icon: d.icon,
        clearable: !n.required,
        multiple: !0,
        disabled: s,
        showSearchBox: f,
        searchBoxPlaceholder: n.searchBoxPlaceholder
      };
      return Ct(ja(!!n.required, e), {
        ...l,
        fieldType: "custom",
        render: ({ value: m, onChange: g, onBlur: y, error: p }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
          ot,
          {
            field: h,
            value: m ?? [],
            onChange: g,
            onBlur: y,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "select": {
      const f = {
        options: n.options,
        type: "select",
        required: n.required,
        disabled: s,
        showAnswerValidation: r
      };
      return Ct(Ir(!!n.required, e), {
        ...l,
        fieldType: "custom",
        fieldConfig: f,
        render: ({ value: h, onChange: m, onBlur: g, config: y }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c(
          Va,
          {
            value: h,
            onChange: m,
            onBlur: g,
            config: y
          }
        ) })
      });
    }
    case "multi-select": {
      const f = {
        options: n.options,
        type: "multi-select",
        required: n.required,
        disabled: s,
        showAnswerValidation: r
      };
      return Ct(ja(!!n.required, e), {
        ...l,
        fieldType: "custom",
        fieldConfig: f,
        render: ({ value: h, onChange: m, onBlur: g, config: y }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c(
          Va,
          {
            value: h,
            onChange: m,
            onBlur: g,
            config: y
          }
        ) })
      });
    }
    case "rating": {
      const f = {
        options: n.options,
        disabled: s
      };
      return Ct($a(!!n.required, e), {
        ...l,
        fieldType: "custom",
        fieldConfig: f,
        render: ({ value: h, onChange: m, onBlur: g, config: y }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c(
          Mb,
          {
            value: h,
            onChange: m,
            onBlur: g,
            config: y
          }
        ) })
      });
    }
    case "file": {
      const d = n, f = d.useUpload ?? i, h = {
        id: n.id,
        type: "file",
        label: a,
        multiple: !0,
        accept: d.accept ?? Bd,
        maxSizeMB: d.maxSizeMB,
        useUpload: f ?? Bb,
        disabled: s || !f
      };
      return Ct(jb(!!n.required, e), {
        ...l,
        fieldType: "custom",
        render: ({ value: m, onChange: g, onBlur: y, error: p }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          ot,
          {
            field: h,
            value: m ?? [],
            onChange: g,
            onBlur: y,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "checkbox": {
      const d = n, f = {
        id: n.id,
        type: "checkbox",
        label: d.label || a,
        disabled: s
      };
      return Ct(Hb(!!n.required, e), {
        ...l,
        fieldType: "custom",
        render: ({ value: h, onChange: m, onBlur: g, error: y }) => /* @__PURE__ */ c(Ve, { ...u, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          ot,
          {
            field: f,
            value: h ?? !1,
            onChange: m,
            onBlur: g,
            error: !!y,
            hideLabel: !0
          }
        ) }) })
      });
    }
    default:
      return Ct(xg(), {
        ...l,
        fieldType: "custom",
        render: () => null
      });
  }
}
function Hd(n, e, t, r, s, i, o = !1, a = o, l, u) {
  return H(() => {
    const d = {}, f = {}, h = {}, m = Co(n), g = e === "stepped";
    for (const y of n)
      if (y.type === "section") {
        const p = y.section, b = p.id;
        e === "all-questions" && (h[b] = {
          title: p.title,
          description: p.description,
          withInset: !0
        });
        for (const v of p.questions ?? [])
          g && s && v.id !== s || (d[v.id] = Wa(
            v,
            t,
            e === "all-questions" ? b : void 0,
            o,
            a,
            l,
            u
          ), f[v.id] = i?.[v.id] ?? Ha(v, r));
      } else {
        const p = y.question;
        if (g && s && p.id !== s)
          continue;
        d[p.id] = Wa(
          p,
          t,
          void 0,
          o,
          a,
          l,
          u
        ), f[p.id] = i?.[p.id] ?? Ha(p, r);
      }
    return {
      schema: uo(d),
      defaultValues: f,
      flatQuestions: m,
      sections: h
    };
  }, [
    n,
    e,
    t,
    r,
    s,
    o,
    a,
    l,
    u
  ]);
}
const zr = () => {
};
function jx(n) {
  return n.inline ? /* @__PURE__ */ c(qb, { ...n }) : /* @__PURE__ */ c(Wb, { ...n });
}
function Wb({
  elements: n,
  onSubmit: e,
  mode: t,
  title: r,
  description: s,
  resourceHeader: i,
  isOpen: o,
  onClose: a,
  position: l = "center",
  module: u,
  allowToChangeFullscreen: d = !1,
  defaultValues: f,
  errorTriggerMode: h = "on-blur",
  loading: m = !1,
  labels: g,
  preview: y = !1,
  useUpload: p,
  datasets: b
}) {
  const { t: v } = De(), k = l === "fullscreen", C = l === "fullscreen" ? "center" : l, [x, _] = ee(k), { formRef: w, submit: N, isSubmitting: A, hasErrors: I } = Is(), D = Z({}), L = H(
    () => Co(n),
    [n]
  ), E = Lb(L), M = L.length > 0, P = {
    title: g?.empty?.title ?? v("surveyAnsweringForm.labels.empty.title"),
    description: g?.empty?.description ?? v("surveyAnsweringForm.labels.empty.description"),
    emoji: g?.empty?.emoji ?? v("surveyAnsweringForm.labels.empty.emoji")
  }, $ = t === "stepped", ce = y && !!f && Object.keys(f).length > 0, G = y && !ce, oe = $ ? E.currentQuestion?.id : void 0, {
    schema: me,
    defaultValues: z,
    sections: V
  } = Hd(
    n,
    t,
    v,
    f,
    oe,
    $ ? D.current : void 0,
    y,
    ce,
    p,
    b
  ), Q = x ? "fullscreen" : C, ge = Q === "center" ? "xl" : void 0, ae = Z(null), be = B(
    (R) => {
      ae.current && clearTimeout(ae.current), ae.current = setTimeout(() => {
        ae.current = null, a();
      }, R);
    },
    [a]
  ), xe = B(
    async (R) => {
      if (y)
        return { success: !0 };
      if (!e)
        throw new Error("onSubmit is required when preview is false");
      if ($ && !E.isLastStep)
        return D.current = {
          ...D.current,
          ...R
        }, E.goToNext(), { success: !0 };
      const O = $ ? { ...D.current, ...R } : R, X = {};
      for (const [j, se] of Object.entries(O))
        X[j] = se === void 0 ? null : se;
      if ($) {
        E.setProgress(100);
        const [j] = await Promise.all([
          e(X),
          new Promise((se) => setTimeout(se, 1e3))
        ]);
        return j.success ? (be(j.message ? 1e3 : 0), { success: !0, message: j.message }) : (E.setProgress(null), { success: !1, errors: j.errors });
      }
      const U = await e(X);
      return U.success ? (be(U.message ? 1e3 : 0), { success: !0, message: U.message }) : { success: !1, errors: U.errors };
    },
    [
      e,
      y,
      be,
      $,
      E.isLastStep,
      E.goToNext,
      E.setProgress
    ]
  ), he = B(async () => {
    try {
      await N();
    } catch {
    }
  }, [N]), ne = B(() => {
    const R = w.current?.getValues() ?? {};
    D.current = {
      ...D.current,
      ...R
    }, E.goToPrevious();
  }, [w, E.goToPrevious]), de = d && !m ? [
    {
      label: v(x ? "surveyAnsweringForm.actions.collapse" : "surveyAnsweringForm.actions.expand"),
      icon: x ? Lu : Mu,
      onClick: () => _((R) => !R)
    }
  ] : void 0, Le = M ? m || ce ? void 0 : G ? $ && !E.isLastStep ? {
    label: v("surveyAnsweringForm.actions.next"),
    onClick: E.goToNext,
    icon: si
  } : {
    label: v("surveyAnsweringForm.actions.submit"),
    onClick: zr,
    disabled: !0
  } : $ && !E.isLastStep ? {
    label: v("surveyAnsweringForm.actions.next"),
    onClick: he,
    icon: si
  } : {
    label: v("surveyAnsweringForm.actions.submit"),
    onClick: he,
    disabled: A || I,
    loading: A
  } : void 0, je = M ? m || ce ? void 0 : $ && !E.isFirstStep ? {
    label: v("surveyAnsweringForm.actions.previous"),
    onClick: ne,
    icon: il
  } : void 0 : void 0, Re = t === "all-questions" && M && !m, tt = $ && M && !m, Qe = $ && !!E.currentQuestion?.sectionTitle && !m, yt = !M && !m || $, S = Q === "center" || Q === "fullscreen";
  return /* @__PURE__ */ c(
    ol,
    {
      isOpen: o,
      onClose: a,
      title: r,
      module: u,
      position: Q,
      width: ge,
      primaryAction: Le,
      secondaryAction: je,
      otherActions: de,
      disableContentPadding: S,
      children: /* @__PURE__ */ c(
        bo,
        {
          answering: !0,
          elements: n,
          onChange: zr,
          datasets: b,
          children: /* @__PURE__ */ T(
            "div",
            {
              className: Y(
                "relative flex min-h-full flex-col @container",
                $ && !x && "min-h-[600px]",
                yt && "h-full"
              ),
              children: [
                Re && /* @__PURE__ */ c($d, { elements: n, onChange: zr, answering: !0 }),
                tt && /* @__PURE__ */ c("div", { className: "absolute left-0 right-0 top-0 [&>div>div>div]:h-1 [&>div>div>div]:rounded-none", children: /* @__PURE__ */ c(
                  Pu,
                  {
                    label: "Value",
                    value: E.progress,
                    hideLabel: !0
                  }
                ) }),
                /* @__PURE__ */ T(
                  "div",
                  {
                    className: Y(
                      "mx-auto flex w-full flex-col @lg:w-[750px] max-w-full",
                      t === "all-questions" && !yt ? "justify-start" : "flex-1 justify-center",
                      S && "px-4 py-12"
                    ),
                    children: [
                      /* @__PURE__ */ c("div", { className: "mb-6", children: /* @__PURE__ */ c(
                        El,
                        {
                          title: r,
                          description: s,
                          ...i
                        }
                      ) }),
                      m ? t === "stepped" ? /* @__PURE__ */ c(Ib, {}) : /* @__PURE__ */ c(jd, {}) : M ? null : /* @__PURE__ */ c(
                        wc,
                        {
                          display: "flex",
                          flexDirection: "column",
                          height: "full",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingX: "lg",
                          children: /* @__PURE__ */ c(
                            gl,
                            {
                              emoji: P.emoji,
                              title: P.title,
                              description: P.description
                            }
                          )
                        }
                      ),
                      Qe && /* @__PURE__ */ T("div", { className: "py-1 pl-5", children: [
                        /* @__PURE__ */ c("span", { className: "text-lg font-semibold text-f1-foreground", children: E.currentQuestion?.sectionTitle }),
                        E.currentQuestion?.sectionDescription && /* @__PURE__ */ c("p", { className: "text-f1-foreground-secondary", children: E.currentQuestion?.sectionDescription })
                      ] }),
                      M && !m && /* @__PURE__ */ c(
                        kr,
                        {
                          formRef: w,
                          name: "survey-answering",
                          schema: me,
                          defaultValues: z,
                          onSubmit: xe,
                          submitConfig: {
                            hideSubmitButton: !0
                          },
                          errorTriggerMode: h,
                          sections: V
                        },
                        $ ? E.currentStep : void 0
                      )
                    ]
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}
function qb({
  elements: n,
  title: e,
  description: t,
  resourceHeader: r,
  defaultValues: s,
  loading: i = !1,
  labels: o,
  useUpload: a,
  datasets: l
}) {
  const { t: u } = De(), f = H(
    () => Co(n),
    [n]
  ).length > 0, h = {
    title: o?.empty?.title ?? u("surveyAnsweringForm.labels.empty.title"),
    description: o?.empty?.description ?? u("surveyAnsweringForm.labels.empty.description"),
    emoji: o?.empty?.emoji ?? u("surveyAnsweringForm.labels.empty.emoji")
  }, {
    schema: m,
    defaultValues: g,
    sections: y
  } = Hd(
    n,
    "all-questions",
    u,
    s,
    void 0,
    void 0,
    !0,
    !0,
    a,
    l
  );
  return /* @__PURE__ */ c(
    bo,
    {
      answering: !0,
      elements: n,
      onChange: zr,
      datasets: l,
      children: /* @__PURE__ */ T("div", { className: "mx-auto flex w-full max-w-3xl flex-col", children: [
        /* @__PURE__ */ c("div", { className: "mb-6", children: /* @__PURE__ */ c(
          El,
          {
            title: e,
            description: t,
            ...r
          }
        ) }),
        i ? /* @__PURE__ */ c(jd, {}) : f ? /* @__PURE__ */ c(
          kr,
          {
            name: "survey-answering-inline",
            schema: m,
            defaultValues: g,
            onSubmit: async () => ({ success: !0 }),
            submitConfig: {
              hideSubmitButton: !0,
              hideActionBar: !0
            },
            sections: y
          }
        ) : /* @__PURE__ */ c(
          wc,
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "lg",
            children: /* @__PURE__ */ c(
              gl,
              {
                emoji: h.emoji,
                title: h.title,
                description: h.description
              }
            )
          }
        )
      ] })
    }
  );
}
const Ub = ({ benefits: n }) => /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: n.map((e, t) => /* @__PURE__ */ c(Zb, { text: e }, t)) }), Zb = ({ text: n }) => /* @__PURE__ */ T("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ c(ze, { icon: gs, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ c("span", { children: n })
] }), Wd = vt(
  ({
    title: n,
    image: e,
    benefits: t,
    actions: r,
    withShadow: s = !0,
    module: i,
    moduleName: o,
    tag: a,
    promoTag: l
  }, u) => /* @__PURE__ */ T(
    "div",
    {
      ref: u,
      className: Y(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        s && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ c(
          "img",
          {
            src: e,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ T("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ T("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ T("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ T("div", { className: "flex flex-row items-center gap-2", children: [
                i && /* @__PURE__ */ c(vl, { module: i }),
                o && /* @__PURE__ */ c("p", { className: "text-base font-medium text-f1-foreground", children: o })
              ] }),
              (a || l) && /* @__PURE__ */ T("div", { className: "flex justify-start gap-2", children: [
                a && /* @__PURE__ */ c(zu, { icon: a.icon, text: a.label }),
                l && /* @__PURE__ */ c(
                  ll,
                  {
                    variant: l.variant || "positive",
                    text: l.label
                  }
                )
              ] }),
              /* @__PURE__ */ c("h2", { className: "font-bold text-xl text-f1-foreground", children: n })
            ] }),
            /* @__PURE__ */ c(Ub, { benefits: t })
          ] }),
          r && /* @__PURE__ */ c("div", { className: "flex gap-3", children: r })
        ] })
      ]
    }
  )
);
Wd.displayName = "ProductBlankslate";
const Gb = Pe(Wd);
function Qb({
  isOpen: n,
  onClose: e,
  title: t,
  children: r,
  module: s,
  portalContainer: i
}) {
  const [o, a] = ee(n);
  return re(() => {
    a(n);
  }, [n]), /* @__PURE__ */ c(Bu, { open: o, onOpenChange: (u) => {
    a(u), u || e();
  }, modal: !0, children: /* @__PURE__ */ T(
    Vu,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: i,
      children: [
        /* @__PURE__ */ T("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ T($u, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            s && /* @__PURE__ */ c(vl, { module: s, size: "lg" }),
            t
          ] }),
          /* @__PURE__ */ c(
            Qa,
            {
              variant: "outline",
              icon: yr,
              onClick: e,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ T(Xa, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          r,
          /* @__PURE__ */ c(
            Ya,
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
function Kb({
  isOpen: n,
  onClose: e,
  title: t,
  image: r,
  benefits: s,
  errorMessage: i,
  successMessage: o,
  loadingState: a,
  nextSteps: l,
  closeLabel: u,
  primaryAction: d,
  modalTitle: f,
  modalModule: h,
  secondaryAction: m,
  portalContainer: g,
  tag: y,
  promoTag: p,
  showResponseDialog: b = !0
}) {
  const [v, k] = ee(n), [C, x] = ee(null), [_, w] = ee(!1), N = async () => {
    if (d?.onClick) {
      w(!0);
      try {
        await d.onClick(), k(!1), b && x("success");
      } catch {
        b && x("error");
      } finally {
        w(!1);
      }
    }
  }, A = () => {
    k(!1), e?.();
  }, I = _;
  return /* @__PURE__ */ T(Ye, { children: [
    /* @__PURE__ */ c(
      Qb,
      {
        isOpen: v,
        onClose: A,
        title: f,
        module: h,
        portalContainer: g,
        children: /* @__PURE__ */ c("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ c(
          Gb,
          {
            title: t,
            image: r,
            benefits: s,
            withShadow: !1,
            tag: y,
            promoTag: p,
            actions: /* @__PURE__ */ T("div", { className: "flex gap-3", children: [
              d && /* @__PURE__ */ c(
                Be,
                {
                  variant: d.variant,
                  label: I ? a.label : d.label,
                  icon: d.icon || void 0,
                  onClick: N,
                  loading: d.loading,
                  size: d.size
                }
              ),
              m && /* @__PURE__ */ c(
                Be,
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
    C && b && /* @__PURE__ */ c(
      yl,
      {
        open: !0,
        onClose: () => {
          A(), x(null);
        },
        success: C === "success",
        errorMessage: i,
        successMessage: o,
        nextSteps: l,
        closeLabel: u,
        portalContainer: g
      }
    )
  ] });
}
const Hx = Pe(Kb);
function Xb({
  mediaUrl: n,
  title: e,
  description: t,
  onClose: r,
  dismissible: s,
  width: i,
  trackVisibility: o,
  actions: a,
  showConfirmation: l = !0
}) {
  const [u, d] = ee(!1), f = () => {
    d(!0), r && r();
  };
  re(() => {
    o && o(!u);
  }, [o, u]);
  const h = n?.includes(".mp4");
  return /* @__PURE__ */ c(Ye, { children: u ? null : /* @__PURE__ */ T(ju, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ T(Hu, { children: [
      s && /* @__PURE__ */ c("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ c(
        Be,
        {
          variant: "ghost",
          icon: yr,
          size: "sm",
          hideLabel: !0,
          onClick: f,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ T("div", { children: [
        /* @__PURE__ */ c("div", { children: n && (h ? /* @__PURE__ */ c(
          "video",
          {
            src: n,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ c(
          "img",
          {
            src: n,
            alt: e,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ T("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ c(as, { className: "text-lg font-medium", children: e }),
          /* @__PURE__ */ c(as, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    a && /* @__PURE__ */ c(Wu, { className: "p-3", children: a.map(
      (m) => m.type === "upsell" ? /* @__PURE__ */ c(
        bl,
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
      ) : /* @__PURE__ */ c(
        Be,
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
const Yb = Pe(Xb), qd = vt(
  function({ primaryAction: e, secondaryAction: t, ...r }, s) {
    const i = (l) => l.variant === "promote" ? /* @__PURE__ */ c(
      bl,
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
    ) : /* @__PURE__ */ c(
      Be,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), o = e?.variant !== "promote" ? e : void 0, a = t?.variant !== "promote" ? t : void 0;
    return /* @__PURE__ */ T(
      mf,
      {
        ref: s,
        ...r,
        primaryAction: o,
        secondaryAction: a,
        children: [
          e?.variant === "promote" && i(e),
          t?.variant === "promote" && i(t)
        ]
      }
    );
  }
);
qd.displayName = "UpsellingBanner";
const Wx = Pe(qd);
function Jb({
  isOpen: n,
  setIsOpen: e,
  label: t,
  variant: r = "promote",
  size: s = "md",
  showIcon: i = !0,
  side: o = "right",
  align: a = "center",
  icon: l = qu,
  mediaUrl: u,
  title: d,
  description: f,
  width: h = "300px",
  trackVisibility: m,
  actions: g,
  onClick: y,
  hideLabel: p = !1
}) {
  const [b, v] = ee(!1), [k, C] = ee(null), [x, _] = ee(null), w = (L) => {
    e(L), y && y();
  }, N = async (L) => {
    if (L.type === "upsell") {
      _(L);
      try {
        await L.onClick(), L.showConfirmation && (v(!0), C("success"));
      } catch {
        v(!0), C("error");
      }
    }
  }, A = () => {
    C(null), v(!1), _(null), e(!1);
  }, I = n && !b, D = g?.map((L) => L.type === "upsell" ? {
    ...L,
    onClick: () => N(L)
  } : L);
  return /* @__PURE__ */ T(Ye, { children: [
    /* @__PURE__ */ T(Ei, { open: I, onOpenChange: w, children: [
      /* @__PURE__ */ c(Di, { asChild: !0, children: /* @__PURE__ */ c(
        Be,
        {
          variant: r,
          label: t,
          size: s,
          icon: i ? l : void 0,
          onClick: () => e(n),
          hideLabel: p
        }
      ) }),
      /* @__PURE__ */ c(
        Ti,
        {
          side: o,
          align: a,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ c(
            Yb,
            {
              mediaUrl: u,
              title: d,
              description: f,
              onClose: () => e(!1),
              dismissible: !1,
              width: h,
              trackVisibility: m,
              actions: D,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    x?.type === "upsell" && x.showConfirmation && k && /* @__PURE__ */ c(
      yl,
      {
        open: !0,
        onClose: A,
        success: k === "success",
        errorMessage: x.errorMessage,
        successMessage: x.successMessage,
        nextSteps: x.nextSteps,
        closeLabel: x.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const qx = Pe(Jb), Ux = St(
  "F0AnalyticsDashboard",
  Uu
), ex = ct(
  null
), tx = ({ children: n, fullScreen: e = !0 }) => {
  const t = Z(null), [r, s] = ee(t.current);
  return tf(() => {
    s(t.current);
  }, []), /* @__PURE__ */ c(ex.Provider, { value: { element: r }, children: /* @__PURE__ */ c(
    "div",
    {
      ref: t,
      id: "f0-layout",
      className: Y({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: n
    }
  ) });
}, nx = ({
  children: n
}) => /* @__PURE__ */ c(ef, { reducedMotion: "user", children: n }), Zx = ({
  children: n,
  layout: e,
  link: t,
  privacyModeInitiallyEnabled: r,
  image: s,
  i18n: i,
  l10n: o,
  isDev: a = !1,
  dataCollectionStorageHandler: l,
  showExperimentalWarnings: u = !1,
  renderDataTestIdAttribute: d = !1
}) => /* @__PURE__ */ c(nx, { children: /* @__PURE__ */ c(
  Zu,
  {
    isDev: a,
    showExperimentalWarnings: u,
    renderDataTestIdAttribute: d,
    children: /* @__PURE__ */ c(Gu, { ...o, children: /* @__PURE__ */ c(Qu, { ...i, children: /* @__PURE__ */ c(Ku, { ...t, children: /* @__PURE__ */ c(tx, { ...e, children: /* @__PURE__ */ c(Xu, { children: /* @__PURE__ */ c(
      pf,
      {
        initiallyEnabled: r,
        children: /* @__PURE__ */ c(Yu, { ...s, children: /* @__PURE__ */ c(
          Ju,
          {
            handler: l,
            children: n
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), qa = (n) => `datacollection-${n}`, Gx = {
  get: async (n) => JSON.parse(
    localStorage.getItem(qa(n)) ?? "{}"
  ),
  set: async (n, e) => {
    localStorage.setItem(qa(n), JSON.stringify(e));
  }
};
export {
  q0 as AiChatTranslationsProvider,
  k0 as AreaChart,
  Xx as Await,
  N0 as BarChart,
  Yx as BarChartSkeleton,
  Sl as CardSelectableContainer,
  E0 as CategoryBarChart,
  Jx as ChatSpinner,
  Vr as Chip,
  D0 as ComboChart,
  cx as Dashboard,
  uu as DataTestIdWrapper,
  ew as DndProvider,
  tw as EmojiImage,
  ri as F0ActionBar,
  nw as F0ActionItem,
  rw as F0AiChat,
  sw as F0AiChatProvider,
  iw as F0AiChatTextArea,
  Fx as F0AiFormRegistryProvider,
  ow as F0AiFullscreenChat,
  aw as F0AiInsightCard,
  U0 as F0AiMask,
  rl as F0Alert,
  Ux as F0AnalyticsDashboard,
  Z0 as F0AuraVoiceAnimation,
  lw as F0Avatar,
  cw as F0AvatarAlert,
  dw as F0AvatarCompany,
  T0 as F0AvatarDate,
  uw as F0AvatarEmoji,
  vu as F0AvatarFile,
  fw as F0AvatarIcon,
  hw as F0AvatarList,
  vl as F0AvatarModule,
  mw as F0AvatarPerson,
  pw as F0AvatarTeam,
  px as F0BigNumber,
  wc as F0Box,
  Be as F0Button,
  gw as F0ButtonDropdown,
  vw as F0ButtonToggle,
  yw as F0Card,
  ar as F0Checkbox,
  Sx as F0ChipList,
  bw as F0DataChart,
  el as F0DatePicker,
  ol as F0Dialog,
  Iu as F0DialogContext,
  xw as F0DialogProvider,
  yp as F0DurationInput,
  ww as F0EventCatcherProvider,
  Dx as F0FilterPickerContent,
  Ix as F0Form,
  ot as F0FormField,
  Bx as F0GridStack,
  G0 as F0HILActionConfirmation,
  Lx as F0Heading,
  ze as F0Icon,
  bu as F0Link,
  Au as F0OneIcon,
  _w as F0OneSwitch,
  Zx as F0Provider,
  Dn as F0Select,
  Vx as F0TableOfContentPopover,
  Cw as F0TagAlert,
  su as F0TagBalance,
  Sw as F0TagCompany,
  kw as F0TagDot,
  Nw as F0TagList,
  Ew as F0TagPerson,
  zu as F0TagRaw,
  ll as F0TagStatus,
  Dw as F0TagTeam,
  Il as F0Text,
  Px as F0TimelineRow,
  cy as F0WizardForm,
  R0 as FILE_TYPES,
  Tw as FileItem,
  Rw as FunnelChartSkeleton,
  Aw as GROUP_ID_SYMBOL,
  Fw as GaugeChartSkeleton,
  Ow as HeatmapChartSkeleton,
  hx as HomeLayout,
  dx as Layout,
  A0 as LineChart,
  Iw as LineChartSkeleton,
  F0 as NotesTextEditor,
  O0 as NotesTextEditorSkeleton,
  Lw as OneCalendar,
  Mw as OneCalendarInternal,
  ko as OneEllipsis,
  gl as OneEmptyState,
  Pw as OneFilterPicker,
  I0 as PieChart,
  zw as PieChartSkeleton,
  pf as PrivacyModeProvider,
  Gb as ProductBlankslate,
  L0 as ProductCard,
  Hx as ProductModal,
  Yb as ProductWidget,
  M0 as ProgressBarChart,
  P0 as RadarChart,
  Bw as RadarChartSkeleton,
  z0 as RichTextDisplay,
  lf as RichTextEditor,
  ux as StandardLayout,
  jd as SurveyAllQuestionsLoadingSkeleton,
  jx as SurveyAnsweringForm,
  $x as SurveyFormBuilder,
  Ib as SurveySteppedLoadingSkeleton,
  zx as Tag,
  Vw as TagCounter,
  fx as TwoColumnLayout,
  yl as UpsellRequestResponseDialog,
  Wx as UpsellingBanner,
  bl as UpsellingButton,
  qx as UpsellingPopover,
  B0 as VerticalBarChart,
  $w as WeekStartDay,
  V0 as _RadarChart,
  jw as actionBarStatuses,
  Q0 as actionItemStatuses,
  K0 as aiTranslations,
  lx as avatarVariants,
  Hw as buildTranslations,
  xx as buttonDropdownModes,
  bx as buttonDropdownSizes,
  yx as buttonDropdownVariants,
  vx as buttonSizes,
  _x as buttonToggleSizes,
  Cx as buttonToggleVariants,
  gx as buttonVariants,
  Ww as cardImageAspectRatios,
  qw as cardImageFits,
  Uw as cardImageSizes,
  Zw as chartColorTokens,
  Gw as chipVariants,
  Eb as computeSectionEndIds,
  X0 as contentTypes,
  Qw as createAtlaskitDriver,
  Kw as createDataSourceDefinition,
  Mf as createPageLayoutBlock,
  Pf as createPageLayoutBlockGroup,
  Gx as dataCollectionLocalStorageHandler,
  kx as datepickerSizes,
  t_ as defaultTranslations,
  Ax as defineAvailableForm,
  Ox as describeFormSchema,
  Nx as durationInputSizes,
  fp as durationUnits,
  As as evaluateRenderIf,
  St as experimental,
  Ct as f0FormField,
  Zo as fieldsToSeconds,
  kb as flattenElements,
  xn as generateAnchorId,
  Xw as getAnimationVariants,
  Yw as getCanvasEntity,
  Jw as getDataSourcePaginationType,
  e0 as getEmojiLabel,
  pn as getF0Config,
  t0 as getGranularityDefinition,
  n0 as getGranularityDefinitions,
  r0 as getGranularitySimpleDefinition,
  Rx as getSchemaDefinition,
  s0 as granularityDefinitions,
  Tx as hasF0Config,
  nd as inferFieldType,
  Nb as injectSectionEnds,
  i0 as isInfiniteScrollPagination,
  o0 as isPageBasedPagination,
  Me as isZodType,
  wx as linkVariants,
  a0 as modules,
  Y0 as oneIconSizes,
  $0 as predefinedPresets,
  l0 as rangeSeparator,
  Pa as reconstructElements,
  Ex as secondsToFields,
  $s as secondsToVisibleFields,
  j0 as selectSizes,
  mx as tagDotColors,
  Mx as timelineRowStatuses,
  lt as unwrapZodSchema,
  c0 as useAiChat,
  J0 as useAiChatTranslations,
  d0 as useData,
  u0 as useDataSource,
  f0 as useDefaultCopilotActions,
  h0 as useDndEvents,
  m0 as useDraggable,
  p0 as useDroppableList,
  g0 as useEmojiConfetti,
  gy as useF0AiFormRegistry,
  v0 as useF0Dialog,
  Is as useF0Form,
  kd as useF0FormDefinition,
  y0 as useGroups,
  b0 as useMessageSourcesAction,
  x0 as useOrchestratorThinkingAction,
  H0 as usePrivacyMode,
  w0 as useReducedMotion,
  dd as useSchemaDefinition,
  _0 as useSelectable,
  C0 as useXRay,
  Pe as withDataTestId
};
