import { fy as Or, a6 as se, bU as Tn, O as P, P as ht, fz as Mr, W as yt, dG as zo, aS as Yi, fA as Io, a7 as zr, a8 as de, u as oe, ar as he, fp as Ut, U as Bo, ac as Po, M as Ir, fB as un, aO as Oe, aL as hi, fC as Ho, fD as Wo, fE as qo, fF as Ji, a0 as Go, fG as $o, fH as Br, fI as jo, bd as fi, be as mi, a5 as Fn, bf as gi, aX as Pr, cR as hn, fJ as Hr, fK as Uo, eg as Vo, fL as Zi, ef as Qo, fM as Ko, fN as wt, fO as Vt, fP as Xo, fQ as Wr, fR as Yo, fS as Jo, fT as An, fU as Zo, fV as ea, R as We, b0 as ta, d4 as si, d3 as qr, fW as na, fX as pi, cn as ia, fY as ra, fZ as Gr, f_ as Ln, f$ as sa, g0 as oa, aI as vi, Q as Ce, aJ as aa, aK as fn, ce as la, g1 as ca, aR as On, g2 as $r, g3 as da, g4 as ua, g5 as ha, g6 as fa, cB as ma, m as ga, dq as pa, aq as jr, f4 as ft, g7 as Ur, f2 as Vr, g8 as mn, g9 as Qr, ch as Kr, ga as Xr, as as bi, at as yi, gb as xi, aw as wi, aB as De, gc as Ci, aD as xt, gd as At, ge as Lt, av as Ot, gf as Mt, gg as va, gh as Zt, gi as Yr, gj as gn, bM as Pt, gk as _e, cs as ba, gl as Jr, gm as ya, gn as pn, cr as xa, cq as wa, go as Ca, gp as Sa, bO as Mn, aE as zn, gq as Zr, bJ as Si, bP as Ei, bc as Ea, gr as Ae, gs as Na, gt as _a, gu as es, gv as In, gw as Da, gx as Ra, cj as ts, gy as ka, gz as Ta, gA as Fa, gB as Aa, bp as ns, bv as La, fs as Oa, ft as Ma, fv as za, gC as is, bW as Ia, b_ as Ba, gD as er, c5 as Pa, gE as rs, gF as Ha, gG as Wa } from "./F0AiChat-CpZHHGPt.js";
import { hk as Lf, gL as Of, co as Mf, l as zf, hy as If, bo as Bf, k as Pf, F as Hf, a as Wf, C as qf, hb as Gf, b as $f, gY as jf, bN as Uf, c7 as Vf, _ as Qf, c8 as Kf, gI as Xf, bh as Yf, Y as Jf, X as Zf, Z as em, b3 as tm, gS as nm, gW as im, gJ as rm, gX as sm, gZ as om, g$ as am, hD as lm, bx as cm, n as dm, hv as um, b5 as hm, $ as fm, hf as mm, bB as gm, hg as pm, hi as vm, hj as bm, d1 as ym, c$ as xm, d as wm, gM as Cm, hl as Sm, gN as Em, gO as Nm, gP as _m, cN as Dm, cO as Rm, gH as km, gQ as Tm, hC as Fm, gR as Am, bu as Lm, d0 as Om, hh as Mm, cP as zm, cm as Im, hE as Bm, gT as Pm, gU as Hm, gV as Wm, gK as qm, cQ as Gm, hx as $m, hq as jm, hd as Um, h4 as Vm, h3 as Qm, h2 as Km, ha as Xm, ht as Ym, g as Jm, hp as Zm, bs as eg, cM as tg, cJ as ng, cL as ig, h9 as rg, cI as sg, h5 as og, ho as ag, hn as lg, h6 as cg, cw as dg, cK as ug, h0 as hg, h1 as fg, h7 as mg, c as gg, hm as pg, hr as vg, h as bg, hz as yg, hA as xg, hB as wg, bq as Cg, hc as Sg, g_ as Eg, he as Ng, e as _g, hw as Dg, hs as Rg, j as kg, i as Tg, bV as Fg, T as Ag, h8 as Lg, hu as Og, f as Mg, hF as zg } from "./F0AiChat-CpZHHGPt.js";
import { jsx as l, jsxs as C, Fragment as we } from "react/jsx-runtime";
import ae, { forwardRef as qe, useRef as W, useImperativeHandle as qa, Children as vn, createContext as Qe, useContext as Re, useState as j, useMemo as B, useEffect as V, useCallback as I, useLayoutEffect as oi, createElement as en, isValidElement as ss, Fragment as Ga, memo as os, useReducer as $a, cloneElement as ja, useId as as } from "react";
import { g as Ua, h as Va } from "./types-CCNMPEHA.js";
import { A as Bg, e as Pg, F as Hg, c as Wg, d as qg, b as Gg, a as $g, f as jg, o as Ug, u as Vg } from "./types-CCNMPEHA.js";
import { createPortal as ls, unstable_batchedUpdates as tn } from "react-dom";
import { C as Qa, M as Ni, D as Ka, z as Xa, u as cs, j as Ya } from "./index-BWx7rlJn.js";
import { l as Kg, m as Xg, n as Yg, s as Jg, F as Zg, o as ep, w as tp, x as np, N as ip, y as rp, p as sp, P as op, r as ap, R as lp, q as cp, _ as dp, v as up, t as hp } from "./index-BWx7rlJn.js";
import { defaultTranslations as mp } from "./i18n-provider-defaults.js";
import './f0.css';const Ja = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Za = qe(function({ widgets: e, children: t }, i) {
  const r = W(null);
  qa(i, () => r.current);
  const s = vn.toArray(e).filter((o) => !!o).map((o, a) => /* @__PURE__ */ l("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: o }, a));
  return /* @__PURE__ */ l(Or, { layout: "home", children: /* @__PURE__ */ C("div", { ref: r, className: "@container", children: [
    /* @__PURE__ */ C("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ l(Qa, { columns: Ja, showArrows: !1, children: s }),
      /* @__PURE__ */ l("main", { children: t })
    ] }),
    /* @__PURE__ */ C("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ l("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: s.slice(0, 3) }),
      /* @__PURE__ */ l("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ l("div", { className: "flex flex-1 flex-col gap-5", children: s.slice(3) })
    ] })
  ] }) });
}), el = ht({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ds = ae.forwardRef(({ children: n, variant: e, className: t, ...i }, r) => /* @__PURE__ */ l(Or, { layout: "standard", children: /* @__PURE__ */ l(
  "section",
  {
    ref: r,
    className: P("relative flex-1 overflow-auto", t),
    ...i,
    children: /* @__PURE__ */ l("div", { className: P(el({ variant: e })), children: n })
  }
) }));
ds.displayName = "StandardLayout";
const tl = se(
  Tn(
    {
      name: "StandardLayout",
      type: "layout"
    },
    ds
  )
), nl = qe(
  function({
    children: e,
    sideContent: t,
    mainColumnPosition: i = "left",
    sticky: r = !1
  }, s) {
    return /* @__PURE__ */ l("div", { ref: s, className: "h-full", children: /* @__PURE__ */ C(
      "div",
      {
        className: P(
          "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
          "flex-col",
          "overflow-y-auto",
          r && "md:sticky md:top-0 md:max-h-full"
        ),
        children: [
          /* @__PURE__ */ l(
            "main",
            {
              className: P(
                "sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6",
                r ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full",
                i === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ l(
            rl,
            {
              sticky: r,
              className: P(
                "order-1",
                i === "right" ? "md:order-1" : "md:order-3"
              ),
              children: t
            }
          )
        ]
      }
    ) });
  }
), il = se(
  Tn(
    {
      name: "TwoColumnLayout",
      type: "layout"
    },
    nl
  )
), rl = ({
  children: n,
  className: e
}) => /* @__PURE__ */ l(
  "aside",
  {
    className: P(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      e
    ),
    children: n
  }
), us = Qe(null);
function hs() {
  const n = Re(us);
  if (!n)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return n;
}
function sl(n) {
  const { content: e, ...t } = n;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function vt(n) {
  const e = sl(n);
  return n.subGridOpts?.children && (e.subGridOpts = {
    ...n.subGridOpts,
    children: n.subGridOpts.children.map(
      (t) => vt(t)
    )
  }), e;
}
const ol = [
  "noMove",
  "noResize",
  "locked",
  "w",
  "h",
  "x",
  "y"
], ct = 200;
function al(n) {
  const e = n.cloneNode(!0);
  return n.querySelectorAll("canvas").forEach((i) => {
    if (i.width > 0 && i.height > 0)
      try {
        const r = i.toDataURL("image/png"), s = e.querySelectorAll("canvas"), o = Array.from(
          n.querySelectorAll("canvas")
        ).indexOf(i), a = s[o];
        if (a && a.parentElement) {
          const d = document.createElement("img");
          d.src = r, d.style.width = `${i.width}px`, d.style.height = `${i.height}px`, d.style.display = "block", i.className && (d.className = i.className), i.id && (d.id = i.id), a.parentElement.replaceChild(d, a);
        }
      } catch (r) {
        console.warn("Failed to convert canvas to image:", r);
      }
  }), e.innerHTML;
}
function ll({
  children: n,
  options: e,
  onResizeStop: t,
  onChange: i,
  widgets: r,
  static: s,
  forcePositionSync: o
}) {
  const [a, d] = j(null), u = W(null), c = W(!1), h = B(() => ({
    ...e,
    children: (r || []).map((y) => vt(y))
  }), [e, r]), [f, m] = j(() => {
    const y = /* @__PURE__ */ new Map(), _ = r || [], k = (F) => {
      F.id && F.content && y.set(F.id, F.content), F.subGridOpts?.children && F.subGridOpts.children.forEach((E) => {
        k(E);
      });
    };
    return _.forEach((F) => {
      k(F);
    }), y;
  }), p = W(f);
  V(() => {
    p.current = f;
  }, [f]);
  const [v, g] = j(() => {
    const y = /* @__PURE__ */ new Map(), _ = r || [], k = (F) => {
      F.id && F._originalContent !== void 0 && y.set(F.id, F._originalContent), F.subGridOpts?.children && F.subGridOpts.children.forEach((E) => {
        k(E);
      });
    };
    return _.forEach((F) => {
      k(F);
    }), y;
  }), b = W(v);
  V(() => {
    b.current = v;
  }, [v]);
  const w = W(i);
  V(() => {
    w.current = i;
  }, [i]);
  const [S, T] = j(() => {
    const y = /* @__PURE__ */ new Map(), _ = r || [], k = (F) => {
      if (F.id) {
        const E = vt(F);
        y.set(F.id, E);
      }
      F.subGridOpts?.children && F.subGridOpts.children.forEach((E) => {
        k(E);
      });
    };
    return _.forEach((F) => {
      k(F);
    }), y;
  });
  Mr(() => {
    if (!a) return;
    const y = a.save();
    if (!Array.isArray(y))
      return;
    const _ = y.map((A) => A.id), k = r || [], F = k.map((A) => A.id), E = k.filter(
      (A) => !_.includes(A.id)
    );
    E.length > 0 && (E.forEach((A) => {
      A.content && p.current.set(A.id, A.content), A._originalContent !== void 0 && b.current.set(A.id, A._originalContent);
    }), E.forEach((A) => {
      const L = vt(A);
      a.addWidget(L);
    }), T((A) => {
      const L = new Map(A);
      return E.forEach((O) => {
        const z = vt(O);
        L.set(O.id, z);
      }), L;
    }), m((A) => {
      const L = new Map(A);
      return E.forEach((O) => {
        O.content && L.set(O.id, O.content);
      }), L;
    }), g((A) => {
      const L = new Map(A);
      return E.forEach((O) => {
        O._originalContent !== void 0 && L.set(O.id, O._originalContent);
      }), L;
    }));
    const M = y.filter(
      (A) => !F.includes(A.id)
    );
    if (M.length > 0) {
      const A = M.map((L) => L.id).filter(Boolean);
      A.forEach((L) => {
        setTimeout(() => {
          p.current.delete(L), b.current.delete(L);
        }, ct);
      }), M.forEach((L) => {
        const O = a.el.querySelector(
          `[gs-id="${L.id}"]`
        );
        O && setTimeout(() => {
          a.removeWidget(O, !0);
        }, ct);
      }), T((L) => {
        const O = new Map(L);
        return A.forEach((z) => {
          setTimeout(() => {
            O.delete(z);
          }, ct);
        }), O;
      }), m((L) => {
        const O = new Map(L);
        return A.forEach((z) => {
          if (O.get(z)) {
            const $ = a.el.querySelector(
              `[gs-id="${z}"] .grid-stack-item-content`
            );
            let ee = "";
            $ && (ee = al($)), O.set(
              z,
              /* @__PURE__ */ l(
                yt.div,
                {
                  className: "h-full w-full",
                  initial: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  animate: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
                  exit: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
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
                  dangerouslySetInnerHTML: { __html: ee }
                }
              )
            );
          }
          setTimeout(() => {
            O.delete(z);
          }, ct);
        }), O;
      }), g((L) => {
        const O = new Map(L);
        return A.forEach((z) => {
          setTimeout(() => {
            O.delete(z);
          }, ct);
        }), O;
      });
    }
    const D = k.filter(
      (A) => _.includes(A.id)
    );
    if (D.length > 0) {
      const A = [];
      D.forEach((L) => {
        const O = y.find(
          (K) => K.id === L.id
        );
        if (!O)
          return;
        const z = ol.filter(
          (K) => O[K] !== L[K]
        );
        if (z.length > 0) {
          const K = {}, $ = ["w", "h", "x", "y"], ee = ["noMove", "noResize", "locked"], re = z.filter(
            (q) => $.includes(q)
          ), te = z.filter(
            (q) => ee.includes(q)
          );
          if (re.length > 0 && te.length > 0 && re.length + te.length === z.length ? te.forEach((q) => {
            const ne = L[q];
            ne !== void 0 && (K[q] = ne);
          }) : z.forEach((q) => {
            const ne = L[q];
            ne !== void 0 && (K[q] = ne);
          }), Object.keys(K).length > 0) {
            const q = a.el.querySelector(
              `[gs-id="${L.id}"]`
            );
            q && A.push({
              id: L.id,
              element: q,
              updateOptions: K
            });
          }
        }
      }), D.forEach((L) => {
        L.content && p.current.set(L.id, L.content), L._originalContent !== void 0 && b.current.set(L.id, L._originalContent);
      }), A.forEach(({ element: L, updateOptions: O }) => {
        try {
          a.update(L, O);
        } catch (z) {
          console.warn("Error updating widget:", z);
        }
      }), T((L) => {
        const O = new Map(L);
        return D.forEach((z) => {
          const K = vt(z);
          O.set(z.id, K);
        }), O;
      }), m((L) => {
        const O = new Map(L);
        return D.forEach((z) => {
          z.content && O.set(z.id, z.content);
        }), O;
      }), g((L) => {
        const O = new Map(L);
        return D.forEach((z) => {
          z._originalContent !== void 0 && O.set(z.id, z._originalContent);
        }), O;
      });
    }
    c.current || (c.current = !0);
  }, [r]), V(() => {
    !a || s === void 0 || a.setStatic(s);
  }, [a, s]);
  const R = W(o);
  V(() => {
    if (!a || o === void 0 || o === R.current)
      return;
    R.current = o;
    const y = r || [];
    a.batchUpdate(), y.forEach((_) => {
      const k = a.el.querySelector(
        `[gs-id="${_.id}"]`
      );
      k && a.update(k, {
        x: _.x ?? 0,
        y: _.y ?? 0,
        w: _.w ?? 1,
        h: _.h ?? 1
      });
    }), a.batchUpdate(!1);
  }, [a, o]), V(() => {
    if (!a || !h.handle) return;
    a.opts && (a.opts.handle = h.handle);
    const y = setTimeout(() => {
      if (a && a.el && h.handle && a.el.querySelectorAll(
        h.handle
      ).length > 0)
        try {
          !a.opts?.disableResize && (a.disable(!1), a.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(y);
  }, [a, h.handle, h.children]);
  const x = I(() => {
    if (!a)
      return;
    const y = a.save();
    if (Array.isArray(y)) {
      const _ = y.map((k) => {
        const F = k.id;
        if (!F) return null;
        const E = p.current.get(F), M = b.current.get(F), D = k;
        return {
          ...k,
          id: F,
          w: k.w ?? 1,
          h: k.h ?? 1,
          x: k.x ?? 0,
          y: k.y ?? 0,
          // Preserve meta if it exists (GridStack preserves custom properties)
          meta: D.meta,
          // Use _originalContent from originalContentMapRef
          _originalContent: M,
          // Use React content from reactContentMapRef
          content: E ?? /* @__PURE__ */ l("div", { children: "No content" })
        };
      }).filter((k) => k !== null);
      w.current?.(_);
    }
  }, [a]);
  return V(() => {
    if (!a || !a.el || !a.el.parentElement)
      return;
    const y = (_, k) => {
      t?.(_, k);
    };
    try {
      a.on("resizestop", y), a.on("change added removed", x);
    } catch (_) {
      console.error("Error attaching GridStack event listeners:", _);
      return;
    }
    return () => {
      const _ = u.current;
      if (_ && _.el)
        try {
          _.off("resizestop"), _.off("change added removed");
        } catch (k) {
          console.warn("Error cleaning up GridStack event listeners:", k);
        }
    };
  }, [a, t, x]), V(() => {
    u.current = a;
  }, [a]), V(() => {
    a && a.el && a.el.parentElement && c.current && x();
  }, [a]), /* @__PURE__ */ l(
    us.Provider,
    {
      value: {
        options: h,
        gridStack: a,
        _gridStack: {
          value: a,
          set: d
        },
        _rawWidgetMetaMap: {
          value: S,
          set: T
        },
        _reactContentMap: {
          value: f,
          set: m
        }
      },
      children: n
    }
  );
}
const fs = Qe(null);
function cl() {
  const n = Re(fs);
  if (!n)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return n;
}
const dl = Qe(null);
function ul() {
  const { _reactContentMap: n } = hs(), { getWidgetContainer: e } = cl();
  return /* @__PURE__ */ l(we, { children: Array.from(n.value.entries()).map(([t, i]) => {
    const r = e(t);
    return r ? /* @__PURE__ */ l(dl.Provider, { value: { widget: { id: t } }, children: i && ls(i, r) }, t) : (console.error(`Widget container not found for widget ${t}`), null);
  }) });
}
function hl(n, e, t, i, r) {
  const s = (...o) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + r + " and has been replaced with `" + i + "`. It will be **removed** in a future release"), e.apply(n, o));
  return s.prototype = e.prototype, s;
}
class N {
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
      const i = "getElementById" in t ? t : void 0;
      if (i && !isNaN(+e[0])) {
        const s = i.getElementById(e);
        return s ? [s] : [];
      }
      let r = t.querySelectorAll(e);
      return !r.length && e[0] !== "." && e[0] !== "#" && (r = t.querySelectorAll("." + e), r.length || (r = t.querySelectorAll("#" + e))), Array.from(r);
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
      const i = "getElementById" in t ? t : void 0;
      if (!e.length)
        return null;
      if (i && e[0] === "#")
        return i.getElementById(e.substring(1));
      if (e[0] === "#" || e[0] === "." || e[0] === "[")
        return t.querySelector(e);
      if (i && !isNaN(+e[0]))
        return i.getElementById(e);
      let r = t.querySelector(e);
      return i && !r && (r = i.getElementById(e)), r || (r = t.querySelector("." + e)), r;
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
    const i = document.createElement("div");
    return e.forEach((r) => {
      r && i.classList.add(r);
    }), t?.appendChild(i), i;
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
    return N.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
    const i = e.x > t.x ? e.x : t.x, r = e.x + e.w < t.x + t.w ? e.x + e.w : t.x + t.w;
    if (r <= i)
      return 0;
    const s = e.y > t.y ? e.y : t.y, o = e.y + e.h < t.y + t.h ? e.y + e.h : t.y + t.h;
    return o <= s ? 0 : (r - i) * (o - s);
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
    return e.sort((r, s) => {
      const o = t * ((r.y ?? 1e4) - (s.y ?? 1e4));
      return o === 0 ? t * ((r.x ?? 1e4) - (s.x ?? 1e4)) : o;
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
    return t ? e.find((i) => i.id === t) : void 0;
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
    let t, i = "px";
    if (typeof e == "string")
      if (e === "auto" || e === "")
        t = 0;
      else {
        const r = e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%|cm|mm)?$/);
        if (!r)
          throw new Error(`Invalid height val = ${e}`);
        i = r[2] || "px", t = parseFloat(r[1]);
      }
    else
      t = e;
    return { h: t, unit: i };
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
    return t.forEach((i) => {
      for (const r in i) {
        if (!i.hasOwnProperty(r))
          return;
        e[r] === null || e[r] === void 0 ? e[r] = i[r] : typeof i[r] == "object" && typeof e[r] == "object" && N.defaults(e[r], i[r]);
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
    for (const i in e)
      if (e[i] !== t[i])
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
  static copyPos(e, t, i = !1) {
    return t.x !== void 0 && (e.x = t.x), t.y !== void 0 && (e.y = t.y), t.w !== void 0 && (e.w = t.w), t.h !== void 0 && (e.h = t.h), i && (t.minW && (e.minW = t.minW), t.minH && (e.minH = t.minH), t.maxW && (e.maxW = t.maxW), t.maxH && (e.maxH = t.maxH)), e;
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
      for (let i in e) {
        const r = e[i], s = t[i];
        i[0] === "_" || r === s ? delete e[i] : r && typeof r == "object" && s !== void 0 && (N.removeInternalAndSame(r, s), Object.keys(r).length || delete e[i]);
      }
  }
  /** removes internal fields '_' and default values for saving */
  static removeInternalForSave(e, t = !0) {
    for (let i in e)
      (i[0] === "_" || e[i] === null || e[i] === void 0) && delete e[i];
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
    let i = !1;
    return (...r) => {
      i || (i = !0, setTimeout(() => {
        e(...r), i = !1;
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : N.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, i) {
    const r = N.getScrollElement(e);
    if (!r)
      return;
    const s = e.getBoundingClientRect(), o = r.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, d = s.bottom - Math.min(o.bottom, a), u = s.top - Math.max(o.top, 0), c = r.scrollTop;
    u < 0 && i < 0 ? e.offsetHeight > o.height ? r.scrollTop += i : r.scrollTop += Math.abs(u) > Math.abs(i) ? i : u : d > 0 && i > 0 && (e.offsetHeight > o.height ? r.scrollTop += i : r.scrollTop += d > i ? i : d), t.top += r.scrollTop - c;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, i) {
    const r = N.getScrollElement(t), s = r.clientHeight, o = r === N.getScrollElement() ? 0 : r.getBoundingClientRect().top, a = e.clientY - o, d = a < i, u = a > s - i;
    d ? r.scrollBy({ behavior: "smooth", top: a - i }) : u && r.scrollBy({ behavior: "smooth", top: i - (s - a) });
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], i = N.clone(e);
    for (const r in i)
      i.hasOwnProperty(r) && typeof i[r] == "object" && r.substring(0, 2) !== "__" && !t.find((s) => s === r) && (i[r] = N.cloneDeep(e[r]));
    return i;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let i;
    typeof t == "string" ? i = N.getElement(t) : i = t, i && i.appendChild(e);
  }
  // public static setPositionRelative(el: HTMLElement): void {
  //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
  //     el.style.position = "relative";
  //   }
  // }
  static addElStyles(e, t) {
    if (t instanceof Object)
      for (const i in t)
        t.hasOwnProperty(i) && (Array.isArray(t[i]) ? t[i].forEach((r) => {
          e.style[i] = r;
        }) : e.style[i] = t[i]);
  }
  static initEvent(e, t) {
    const i = { type: t.type }, r = {
      button: 0,
      which: 0,
      buttons: 1,
      bubbles: !0,
      cancelable: !0,
      target: t.target ? t.target : e.target
    };
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].forEach((s) => i[s] = e[s]), ["pageX", "pageY", "clientX", "clientY", "screenX", "screenY"].forEach((s) => i[s] = e[s]), { ...i, ...r };
  }
  /** copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target */
  static simulateMouseEvent(e, t, i) {
    const r = e, s = new MouseEvent(t, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      view: window,
      detail: 1,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: r.ctrlKey ?? !1,
      altKey: r.altKey ?? !1,
      shiftKey: r.shiftKey ?? !1,
      metaKey: r.metaKey ?? !1,
      button: 0,
      relatedTarget: e.target
    });
    (i || e.target).dispatchEvent(s);
  }
  /**
   * defines an element that is used to get the offset and scale from grid transforms
   * returns the scale and offsets from said element
  */
  static getValuesFromTransformedElement(e) {
    const t = document.createElement("div");
    N.addElStyles(t, {
      opacity: "0",
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "1px",
      height: "1px",
      zIndex: "-999999"
    }), e.appendChild(t);
    const i = t.getBoundingClientRect();
    return e.removeChild(t), t.remove(), {
      xScale: 1 / i.width,
      yScale: 1 / i.height,
      xOffset: i.left,
      yOffset: i.top
    };
  }
  /** swap the given object 2 field values */
  static swap(e, t, i) {
    if (!e)
      return;
    const r = e[t];
    e[t] = e[i], e[i] = r;
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
  _fixCollisions(e, t = e, i, r = {}) {
    if (this.sortNodes(-1), i = i || this.collide(e, t), !i)
      return !1;
    if (e._moving && !r.nested && !this.float && this.swap(e, i))
      return !0;
    let s = t;
    !this._loading && this._useEntireRowArea(e, t) && (s = { x: 0, w: this.column, y: t.y, h: t.h }, i = this.collide(e, s, r.skip));
    let o = !1;
    const a = { nested: !0, pack: !1 };
    let d = 0;
    for (; i = i || this.collide(e, s, r.skip); ) {
      if (d++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let u;
      if (i.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(i, { ...i, y: e.y }, e) || !this.collide(i, { ...i, y: t.y - i.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: i.y + i.h, ...a };
        u = this._loading && N.samePos(e, c) ? !0 : this.moveNode(e, c), (i.locked || this._loading) && u ? N.copyPos(t, e) : !i.locked && u && r.pack && (this._packNodes(), t.y = i.y + i.h, N.copyPos(e, t)), o = o || u;
      } else
        u = this.moveNode(i, { ...i, y: t.y + t.h, skip: e, ...a });
      if (!u)
        return o;
      i = void 0;
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
  collide(e, t = e, i) {
    const r = e._id, s = i?._id;
    return this.nodes.find((o) => o._id !== r && o._id !== s && N.isIntercepted(o, t));
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
  collideAll(e, t = e, i) {
    const r = e._id, s = i?._id;
    return this.nodes.filter((o) => o._id !== r && o._id !== s && N.isIntercepted(o, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, i) {
    if (!t.rect || !e._rect)
      return;
    const r = e._rect, s = { ...t.rect };
    s.y > r.y ? (s.h += s.y - r.y, s.y = r.y) : s.h += r.y - s.y, s.x > r.x ? (s.w += s.x - r.x, s.x = r.x) : s.w += r.x - s.x;
    let o, a = 0.5;
    for (let d of i) {
      if (d.locked || !d._rect)
        break;
      const u = d._rect;
      let c = Number.MAX_VALUE, h = Number.MAX_VALUE;
      r.y < u.y ? c = (s.y + s.h - u.y) / u.h : r.y + r.h > u.y + u.h && (c = (u.y + u.h - s.y) / u.h), r.x < u.x ? h = (s.x + s.w - u.x) / u.w : r.x + r.w > u.x + u.w && (h = (u.x + u.w - s.x) / u.w);
      const f = Math.min(h, c);
      f > a && (a = f, o = d);
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
  cacheRects(e, t, i, r, s, o) {
    return this.nodes.forEach((a) => a._rect = {
      y: a.y * t + i,
      x: a.x * e + o,
      w: a.w * e - o - r,
      h: a.h * t - i - s
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
    function i() {
      const s = t.x, o = t.y;
      return t.x = e.x, t.y = e.y, e.h != t.h ? (e.x = s, e.y = t.y + t.h) : e.w != t.w ? (e.x = t.x + t.w, e.y = o) : (e.x = s, e.y = o), e._dirty = t._dirty = !0, !0;
    }
    let r;
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (r = N.isTouching(e, t)))
      return i();
    if (r !== !1) {
      if (e.w === t.w && e.x === t.x && (r || (r = N.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return i();
      }
      if (r !== !1) {
        if (e.h === t.h && e.y === t.y && (r || (r = N.isTouching(e, t)))) {
          if (t.x < e.x) {
            const s = e;
            e = t, t = s;
          }
          return i();
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
  isAreaEmpty(e, t, i, r) {
    const s = { x: e || 0, y: t || 0, w: i || 1, h: r || 1 };
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
    const i = this.batchMode;
    i || this.batchUpdate();
    const r = this._inColumnResize;
    r || (this._inColumnResize = !0);
    const s = this.nodes;
    return this.nodes = [], s.forEach((o, a, d) => {
      let u;
      o.locked || (o.autoPosition = !0, e === "list" && a && (u = d[a - 1])), this.addNode(o, !1, u);
    }), r || delete this._inColumnResize, i || this.batchUpdate(!1), this;
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
    return this.nodes = N.sort(this.nodes, e), this;
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
          const i = t === 0 ? 0 : e.y - 1;
          if (!(t === 0 || !this.collide(e, { x: e.x, y: i, w: e.w, h: e.h })))
            break;
          e._dirty = e.y !== i, e.y = i;
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
    const i = e.id;
    if (i) {
      let s = 1;
      for (; this.nodes.find((o) => o.id === e.id && o !== e); )
        e.id = i + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const r = { x: 0, y: 0, w: 1, h: 1 };
    return N.defaults(e, r), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, N.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = r.x, e.autoPosition = !0), isNaN(e.y) && (e.y = r.y, e.autoPosition = !0), isNaN(e.w) && (e.w = r.w), isNaN(e.h) && (e.h = r.h), this.nodeBoundFix(e, t), e;
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
    const i = e._orig || N.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), N.samePos(e, i) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !N.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = N.copyPos({}, e), delete e._dirty;
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
      !e._orig || N.samePos(e, e._orig) || (N.copyPos(e, e._orig), e._dirty = !0);
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
  findEmptyPosition(e, t = this.nodes, i = this.column, r) {
    const s = r ? r.y * i + (r.x + r.w) : 0;
    let o = !1;
    for (let a = s; !o; ++a) {
      const d = a % i, u = Math.floor(a / i);
      if (d + e.w > i)
        continue;
      const c = { x: d, y: u, w: e.w, h: e.h };
      t.find((h) => N.isIntercepted(c, h)) || ((e.x !== d || e.y !== u) && (e._dirty = !0), e.x = d, e.y = u, delete e.autoPosition, o = !0);
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
  addNode(e, t = !1, i) {
    const r = this.nodes.find((o) => o._id === e._id);
    if (r)
      return r;
    this._inColumnResize ? this.nodeBoundFix(e) : this.prepareNode(e), delete e._temporaryRemoved, delete e._removeDOM;
    let s;
    return e.autoPosition && this.findEmptyPosition(e, this.nodes, this.column, i) && (delete e.autoPosition, s = !0), this.nodes.push(e), t && this.addedNodes.push(e), s || this._fixCollisions(e), this.batchMode || this._packNodes()._notify(), e;
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
  removeNode(e, t = !0, i = !1) {
    return this.nodes.find((r) => r._id === e._id) ? (i && this.removedNodes.push(e), t && (e._removeDOM = !0), this.nodes = this.nodes.filter((r) => r._id !== e._id), e._isAboutToRemove || this._packNodes(), this._notify([e]), this) : this;
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
    e && this.nodes.forEach((r) => r._removeDOM = !0);
    const i = this.nodes;
    return this.removedNodes = t ? i : [], this.nodes = [], this._notify(i);
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
    let i;
    const r = new it({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((o) => o._id === e._id ? (i = { ...o }, i) : { ...o })
    });
    if (!i)
      return !1;
    const s = r.moveNode(i, t) && r.getRow() <= Math.max(this.getRow(), this.maxRow);
    if (!s && !t.resizing && t.collide) {
      const o = t.collide.el.gridstackNode;
      if (this.swap(e, o))
        return this._notify(), !0;
    }
    return s ? (r.nodes.filter((o) => o._dirty).forEach((o) => {
      const a = this.nodes.find((d) => d._id === o._id);
      a && (N.copyPos(a, o), a._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new it({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((r) => ({ ...r }))
    }), i = { ...e };
    return this.cleanupNode(i), delete i.el, delete i._id, delete i.content, delete i.grid, t.addNode(i), t.getRow() <= this.maxRow ? (e._willFitPos = N.copyPos({}, i), !0) : !1;
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
    let i;
    t.pack === void 0 && !this.batchMode && (i = t.pack = !0), typeof t.x != "number" && (t.x = e.x), typeof t.y != "number" && (t.y = e.y), typeof t.w != "number" && (t.w = e.w), typeof t.h != "number" && (t.h = e.h);
    const r = e.w !== t.w || e.h !== t.h, s = N.copyPos({}, e, !0);
    if (N.copyPos(s, t), this.nodeBoundFix(s, r), N.copyPos(t, s), !t.forceCollide && N.samePos(e, t))
      return !1;
    const o = N.copyPos({}, e), a = this.collideAll(e, s, t.skip);
    let d = !0;
    if (a.length) {
      const u = e._moving && !t.nested;
      let c = u ? this.directionCollideCoverage(e, t, a) : a[0];
      if (u && c && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const h = N.areaIntercept(t.rect, c._rect), f = N.area(t.rect), m = N.area(c._rect);
        h / (f < m ? f : m) > 0.8 && (c.grid.makeSubGrid(c.el, void 0, e), c = void 0);
      }
      c ? d = !this._fixCollisions(e, s, c, t) : (d = !1, i && delete t.pack);
    }
    return d && !N.samePos(e, s) && (e._dirty = !0, N.copyPos(e, s)), t.pack && this._packNodes()._notify(), !N.samePos(e, o);
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
  save(e = !0, t, i) {
    const r = this._layouts?.length || 0;
    let s;
    r && (i ? i !== this.column && (s = this._layouts[i]) : this.column !== r - 1 && (s = this._layouts[r - 1]));
    const o = [];
    return this.sortNodes(), this.nodes.forEach((a) => {
      const d = s?.find((c) => c._id === a._id), u = { ...a, ...d || {} };
      N.removeInternalForSave(u, !e), t && t(a, u), o.push(u);
    }), o;
  }
  /** @internal called whenever a node is added or moved - updates the cached layouts */
  layoutsNodesChange(e) {
    return !this._layouts || this._inColumnResize ? this : (this._layouts.forEach((t, i) => {
      if (!t || i === this.column)
        return this;
      if (i < this.column)
        this._layouts[i] = void 0;
      else {
        const r = i / this.column;
        e.forEach((s) => {
          if (!s._orig)
            return;
          const o = t.find((a) => a._id === s._id);
          o && (o.y >= 0 && s.y !== s._orig.y && (o.y += s.y - s._orig.y), s.x !== s._orig.x && (o.x = Math.round(s.x * r)), s.w !== s._orig.w && (o.w = Math.round(s.w * r)));
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
  columnChanged(e, t, i = "moveScale") {
    if (!this.nodes.length || !t || e === t)
      return this;
    const r = i === "compact" || i === "list";
    r && this.sortNodes(1), t < e && this.cacheLayout(this.nodes, e), this.batchUpdate();
    let s = [], o = r ? this.nodes : N.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const a = this._layouts[t] || [], d = this._layouts.length - 1;
      !a.length && e !== d && this._layouts[d]?.length && (e = d, this._layouts[d].forEach((u) => {
        const c = o.find((h) => h._id === u._id);
        c && (!r && !u.autoPosition && (c.x = u.x ?? c.x, c.y = u.y ?? c.y), c.w = u.w ?? c.w, (u.x == null || u.y === void 0) && (c.autoPosition = !0));
      })), a.forEach((u) => {
        const c = o.findIndex((h) => h._id === u._id);
        if (c !== -1) {
          const h = o[c];
          if (r) {
            h.w = u.w;
            return;
          }
          (u.autoPosition || isNaN(u.x) || isNaN(u.y)) && this.findEmptyPosition(u, s), u.autoPosition || (h.x = u.x ?? h.x, h.y = u.y ?? h.y, h.w = u.w ?? h.w, s.push(h)), o.splice(c, 1);
        }
      });
    }
    if (r)
      this.compact(i, !1);
    else {
      if (o.length)
        if (typeof i == "function")
          i(t, e, s, o);
        else {
          const a = r || i === "none" ? 1 : t / e, d = i === "move" || i === "moveScale", u = i === "scale" || i === "moveScale";
          o.forEach((c) => {
            c.x = t === 1 ? 0 : d ? Math.round(c.x * a) : Math.min(c.x, t - 1), c.w = t === 1 || e === 1 ? 1 : u ? Math.round(c.w * a) || 1 : Math.min(c.w, t), s.push(c);
          }), o = [];
        }
      s = N.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((a) => {
        this.addNode(a, !1), delete a._orig;
      });
    }
    return this.nodes.forEach((a) => delete a._orig), this.batchUpdate(!1, !r), delete this._inColumnResize, this;
  }
  /**
   * call to cache the given layout internally to the given location so we can restore back when column changes size
   * @param nodes list of nodes
   * @param column corresponding column index to save it under
   * @param clear if true, will force other caches to be removed (default false)
   */
  cacheLayout(e, t, i = !1) {
    const r = [];
    return e.forEach((s, o) => {
      if (s._id === void 0) {
        const a = s.id ? this.nodes.find((d) => d.id === s.id) : void 0;
        s._id = a?._id ?? it._idSeq++;
      }
      r[o] = { x: s.x, y: s.y, w: s.w, _id: s._id };
    }), this._layouts = i ? [] : this._layouts || [], this._layouts[t] = r, this;
  }
  /**
   * call to cache the given node layout internally to the given location so we can restore back when column changes size
   * @param node single node to cache
   * @param column corresponding column index to save it under
   */
  cacheOneLayout(e, t) {
    e._id = e._id ?? it._idSeq++;
    const i = { x: e.x, y: e.y, w: e.w, _id: e._id };
    (e.autoPosition || e.x === void 0) && (delete i.x, delete i.y, e.autoPosition && (i.autoPosition = !0)), this._layouts = this._layouts || [], this._layouts[t] = this._layouts[t] || [];
    const r = this.findCacheLayout(e, t);
    return r === -1 ? this._layouts[t].push(i) : this._layouts[t][r] = i, this;
  }
  findCacheLayout(e, t) {
    return this._layouts?.[t]?.findIndex((i) => i._id === e._id) ?? -1;
  }
  removeNodeFromLayoutCache(e) {
    if (this._layouts)
      for (let t = 0; t < this._layouts.length; t++) {
        const i = this.findCacheLayout(e, t);
        i !== -1 && this._layouts[t].splice(i, 1);
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
const Le = {
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
class Q {
}
const je = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class Ze {
}
function bn(n, e) {
  n.touches.length > 1 || (n.cancelable && n.preventDefault(), N.simulateMouseEvent(n.changedTouches[0], e));
}
function ms(n, e) {
  n.cancelable && n.preventDefault(), N.simulateMouseEvent(n, e);
}
function yn(n) {
  Ze.touchHandled || (Ze.touchHandled = !0, bn(n, "mousedown"));
}
function xn(n) {
  Ze.touchHandled && bn(n, "mousemove");
}
function wn(n) {
  if (!Ze.touchHandled)
    return;
  Ze.pointerLeaveTimeout && (window.clearTimeout(Ze.pointerLeaveTimeout), delete Ze.pointerLeaveTimeout);
  const e = !!Q.dragElement;
  bn(n, "mouseup"), e || bn(n, "click"), Ze.touchHandled = !1;
}
function Cn(n) {
  n.pointerType !== "mouse" && n.target.releasePointerCapture(n.pointerId);
}
function tr(n) {
  Q.dragElement && n.pointerType !== "mouse" && ms(n, "mouseenter");
}
function nr(n) {
  Q.dragElement && n.pointerType !== "mouse" && (Ze.pointerLeaveTimeout = window.setTimeout(() => {
    delete Ze.pointerLeaveTimeout, ms(n, "mouseleave");
  }, 10));
}
class Bn {
  constructor(e, t, i) {
    this.host = e, this.dir = t, this.option = i, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Bn.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), je && (this.el.addEventListener("touchstart", yn), this.el.addEventListener("pointerdown", Cn)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), je && (this.el.removeEventListener("touchstart", yn), this.el.removeEventListener("pointerdown", Cn)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), je && (this.el.addEventListener("touchmove", xn), this.el.addEventListener("touchend", wn)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), je && (this.el.removeEventListener("touchmove", xn), this.el.removeEventListener("touchend", wn)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
Bn.prefix = "ui-resizable-";
class _i {
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
class Ht extends _i {
  // have to be public else complains for HTMLElementExtendOpt ?
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.rectScale = { x: 1, y: 1 }, this._ui = () => {
      const r = this.el.parentElement.getBoundingClientRect(), s = {
        width: this.originalRect.width,
        height: this.originalRect.height + this.scrolled,
        left: this.originalRect.left,
        top: this.originalRect.top - this.scrolled
      }, o = this.temporalRect || s;
      return {
        position: {
          left: (o.left - r.left) * this.rectScale.x,
          top: (o.top - r.top) * this.rectScale.y
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
    const t = e.handles && e.handles !== this.option.handles, i = e.autoHide && e.autoHide !== this.option.autoHide;
    return Object.keys(e).forEach((r) => this.option[r] = e[r]), t && (this._removeHandlers(), this._setupHandlers()), i && this._setupAutoHide(this.option.autoHide), this;
  }
  /** @internal turns auto hide on/off */
  _setupAutoHide(e) {
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), Q.overResizeElement === this && delete Q.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    Q.overResizeElement || Q.dragElement || (Q.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    Q.overResizeElement === this && (delete Q.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Bn(this.el, e, {
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
    this.sizeToContent = N.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = N.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = N.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const i = N.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(i, this._ui()), this.triggerEvent("resize", i), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = N.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = Ht._originStyleProp.map((i) => this.el.style[i]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = N.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return Ht._originStyleProp.forEach((e, t) => {
      this.el.style[e] = this.elOriginStyleVal[t] || null;
    }), this.el.parentElement.style.position = this.parentOriginStylePosition || null, this;
  }
  /** @internal */
  _getChange(e, t) {
    const i = this.startEvent, r = {
      width: this.originalRect.width,
      height: this.originalRect.height + this.scrolled,
      left: this.originalRect.left,
      top: this.originalRect.top - this.scrolled
    }, s = e.clientX - i.clientX, o = this.sizeToContent ? 0 : e.clientY - i.clientY;
    let a, d;
    t.indexOf("e") > -1 ? r.width += s : t.indexOf("w") > -1 && (r.width -= s, r.left += s, a = !0), t.indexOf("s") > -1 ? r.height += o : t.indexOf("n") > -1 && (r.height -= o, r.top += o, d = !0);
    const u = this._constrainSize(r.width, r.height, a, d);
    return Math.round(r.width) !== Math.round(u.width) && (t.indexOf("w") > -1 && (r.left += r.width - u.width), r.width = u.width), Math.round(r.height) !== Math.round(u.height) && (t.indexOf("n") > -1 && (r.top += r.height - u.height), r.height = u.height), r;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, i, r) {
    const s = this.option, o = (i ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, a = s.minWidth / this.rectScale.x || e, d = (r ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, u = s.minHeight / this.rectScale.y || t, c = Math.min(o, Math.max(a, e)), h = Math.min(d, Math.max(u, t));
    return { width: c, height: h };
  }
  /** @internal */
  _applyChange() {
    let e = { left: 0, top: 0, width: 0, height: 0 };
    if (this.el.style.position === "absolute") {
      const t = this.el.parentElement, { left: i, top: r } = t.getBoundingClientRect();
      e = { left: i, top: r, width: 0, height: 0 };
    }
    return this.temporalRect ? (Object.keys(this.temporalRect).forEach((t) => {
      const i = this.temporalRect[t], r = t === "width" || t === "left" ? this.rectScale.x : t === "height" || t === "top" ? this.rectScale.y : 1;
      this.el.style[t] = (i - e[t]) * r + "px";
    }), this) : this;
  }
  /** @internal */
  _removeHandlers() {
    return this.handlers.forEach((e) => e.destroy()), delete this.handlers, this;
  }
}
Ht._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const fl = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class Wt extends _i {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.dragTransform = {
      xScale: 1,
      yScale: 1,
      xOffset: 0,
      yOffset: 0
    };
    const i = t?.handle?.substring(1), r = e.gridstackNode;
    this.dragEls = !i || e.classList.contains(i) ? [e] : r?.subGrid ? [e.querySelector(t.handle) || e] : Array.from(e.querySelectorAll(t.handle)), this.dragEls.length === 0 && (this.dragEls = [e]), this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this.enable();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.dragEls.forEach((e) => {
      e.addEventListener("mousedown", this._mouseDown), je && (e.addEventListener("touchstart", yn), e.addEventListener("pointerdown", Cn));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), je && (t.removeEventListener("touchstart", yn), t.removeEventListener("pointerdown", Cn));
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
    if (!Q.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(fl) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete Q.dragElement, delete Q.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), je && (e.currentTarget.addEventListener("touchmove", xn), e.currentTarget.addEventListener("touchend", wn)), e.preventDefault(), document.activeElement && document.activeElement.blur(), Q.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = N.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), Q.pauseDrag) {
        const i = Number.isInteger(Q.pauseDrag) ? Q.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), i);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, Q.dragElement = this;
      const i = this.el.gridstackNode?.grid;
      i ? Q.dropElement = i.el.ddElement.ddDroppable : delete Q.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = N.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const r = N.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(r, this.ui()), this.triggerEvent("dragstart", r), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), je && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", xn, !0), e.currentTarget.removeEventListener("touchend", wn, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), Q.dropElement?.el === this.el.parentElement && delete Q.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = N.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), Q.dropElement && Q.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete Q.dragElement, delete Q.dropElement, delete Q.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, i = t?.grid || Q.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), i?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && i && (e.key === "r" || e.key === "R")) {
      if (!N.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, i.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", N.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = N.cloneNode(this.el)), e.parentElement || N.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = Wt.originStyleProp.map((t) => this.el.style[t]), e;
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
      const t = this.helper, i = this.dragElementOriginStyle.transition || null;
      t.style.transition = this.dragElementOriginStyle.transition = "none", Wt.originStyleProp.forEach((r) => t.style[r] = this.dragElementOriginStyle[r] || null), setTimeout(() => t.style.transition = i, 50);
    }
    return delete this.dragElementOriginStyle, this;
  }
  /** @internal updates the top/left position to follow the mouse */
  _dragFollow(e) {
    const t = { left: 0, top: 0 }, i = this.helper.style, r = this.dragOffset;
    i.left = (e.clientX + r.offsetLeft - t.left) * this.dragTransform.xScale + "px", i.top = (e.clientY + r.offsetTop - t.top) * this.dragTransform.yScale + "px";
  }
  /** @internal */
  _setupHelperContainmentStyle() {
    return this.helperContainment = this.helper.parentElement, this.helper.style.position !== "fixed" && (this.parentOriginStylePosition = this.helperContainment.style.position, getComputedStyle(this.helperContainment).position.match(/static/) && (this.helperContainment.style.position = "relative")), this;
  }
  /** @internal */
  _getDragOffset(e, t, i) {
    let r = 0, s = 0;
    i && (r = this.dragTransform.xOffset, s = this.dragTransform.yOffset);
    const o = t.getBoundingClientRect();
    return {
      left: o.left,
      top: o.top,
      offsetLeft: -e.clientX + o.left - r,
      offsetTop: -e.clientY + o.top - s,
      width: o.width * this.dragTransform.xScale,
      height: o.height * this.dragTransform.yScale
    };
  }
  /** @internal TODO: set to public as called by DDDroppable! */
  ui() {
    const t = this.el.parentElement.getBoundingClientRect(), i = this.helper.getBoundingClientRect();
    return {
      position: {
        top: (i.top - t.top) * this.dragTransform.yScale,
        left: (i.left - t.left) * this.dragTransform.xScale
      }
      /* not used by GridStack for now...
      helper: [this.helper], //The object arr representing the helper that's being dragged.
      offset: { top: offset.top, left: offset.left } // Current offset position of the helper as { top, left } object.
      */
    };
  }
}
Wt.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class ml extends _i {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), je && (this.el.addEventListener("pointerenter", tr), this.el.addEventListener("pointerleave", nr)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), je && (this.el.removeEventListener("pointerenter", tr), this.el.removeEventListener("pointerleave", nr)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!Q.dragElement || !this._canDrop(Q.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), Q.dropElement && Q.dropElement !== this && Q.dropElement._mouseLeave(e, !0), Q.dropElement = this;
    const t = N.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(Q.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!Q.dragElement || Q.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const i = N.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(i, this._ui(Q.dragElement)), this.triggerEvent("dropout", i), Q.dropElement === this && (delete Q.dropElement, !t)) {
      let r, s = this.el.parentElement;
      for (; !r && s; )
        r = s.ddElement?.ddDroppable, s = s.parentElement;
      r && r._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = N.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(Q.dragElement)), this.triggerEvent("drop", t);
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
class Di {
  static init(e) {
    return e.ddElement || (e.ddElement = new Di(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new Wt(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new Ht(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new ml(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class gl {
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
  resizable(e, t, i, r) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddResizable && s.ddResizable[t]();
      else if (t === "destroy")
        s.ddResizable && s.cleanResizable();
      else if (t === "option")
        s.setupResizable({ [i]: r });
      else {
        const a = s.el.gridstackNode.grid;
        let d = s.el.getAttribute("gs-resize-handles") || a.opts.resizable.handles || "e,s,se";
        d === "all" && (d = "n,e,s,w,se,sw,ne,nw");
        const u = !a.opts.alwaysShowResizeHandle;
        s.setupResizable({
          ...a.opts.resizable,
          handles: d,
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
  draggable(e, t, i, r) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddDraggable && s.ddDraggable[t]();
      else if (t === "destroy")
        s.ddDraggable && s.cleanDraggable();
      else if (t === "option")
        s.setupDraggable({ [i]: r });
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
    return this._getDDElements(e).forEach((i) => i.setupDraggable(t)), this;
  }
  droppable(e, t, i, r) {
    return typeof t.accept == "function" && !t._accept && (t._accept = t.accept, t.accept = (s) => t._accept(s)), this._getDDElements(e, t).forEach((s) => {
      t === "disable" || t === "enable" ? s.ddDroppable && s.ddDroppable[t]() : t === "destroy" ? s.ddDroppable && s.cleanDroppable() : t === "option" ? s.setupDroppable({ [i]: r }) : s.setupDroppable(t);
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
  on(e, t, i) {
    return this._getDDElements(e).forEach((r) => r.on(t, (s) => {
      i(s, Q.dragElement ? Q.dragElement.el : s.target, Q.dragElement ? Q.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((i) => i.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const i = e.gridstack || t !== "destroy" && t !== "disable", r = N.getElements(e);
    return r.length ? r.map((o) => o.ddElement || (i ? Di.init(o) : null)).filter((o) => o) : [];
  }
}
const Se = new gl();
class G {
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
    const i = G.getGridElement(t);
    return i ? (i.gridstack || (i.gridstack = new G(i, N.cloneDeep(e))), i.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    const i = [];
    return typeof document > "u" || (G.getGridElements(t).forEach((r) => {
      r.gridstack || (r.gridstack = new G(r, N.cloneDeep(e))), i.push(r.gridstack);
    }), i.length === 0 && console.error('GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
Note: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.`)), i;
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
    let i = e;
    if (i.gridstack) {
      const o = i.gridstack;
      return t && (o.opts = { ...o.opts, ...t }), t.children !== void 0 && o.load(t.children), o;
    }
    return (!e.classList.contains("grid-stack") || G.addRemoveCB) && (G.addRemoveCB ? i = G.addRemoveCB(e, t, !0, !0) : i = N.createDiv(["grid-stack", t.class], e)), G.init(t, i);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    G.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = N.createDiv([this.opts.placeholderClass, Le.itemClass, this.opts.itemClass]);
      const e = N.createDiv(["placeholder-content"], this._placeholder);
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
    const i = N.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const r = t.columnOpts;
    if (r) {
      const u = r.breakpoints;
      !r.columnWidth && !u?.length ? delete t.columnOpts : (r.columnMax = r.columnMax || 12, u?.length > 1 && u.sort((c, h) => (h.w || 0) - (c.w || 0)));
    }
    const s = {
      ...N.cloneDeep(Le),
      column: N.toNumber(e.getAttribute("gs-column")) || Le.column,
      minRow: i || N.toNumber(e.getAttribute("gs-min-row")) || Le.minRow,
      maxRow: i || N.toNumber(e.getAttribute("gs-max-row")) || Le.maxRow,
      staticGrid: N.toBool(e.getAttribute("gs-static")) || Le.staticGrid,
      sizeToContent: N.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || Le.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || Le.removableOptions.accept,
        decline: Le.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = N.toBool(e.getAttribute("gs-animate"))), t = N.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const a = this.el.closest("." + Le.itemClass)?.gridstackNode;
    if (a && (a.subGrid = this, this.parentGridNode = a, this.el.classList.add("grid-stack-nested"), a.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== Le.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const u = t.cellHeight;
      delete t.cellHeight, this.cellHeight(u);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = je), this._setStaticClass();
    const d = t.engineClass || G.engineClass || it;
    if (this.engine = new d({
      column: this.getColumn(),
      float: t.float,
      maxRow: t.maxRow,
      onChange: (u) => {
        u.forEach((c) => {
          const h = c.el;
          h && (c._removeDOM ? (h && h.remove(), delete c._removeDOM) : this._writePosAttr(h, c));
        }), this._updateContainerHeight();
      }
    }), t.auto && (this.batchUpdate(), this.engine._loading = !0, this.getGridItems().forEach((u) => this._prepareElement(u)), delete this.engine._loading, this.batchUpdate(!1)), t.children) {
      const u = t.children;
      delete t.children, u.length && this.load(u);
    }
    this.setAnimation(), t.subGridDynamic && !Q.pauseDrag && (Q.pauseDrag = !0), t.draggable?.pause !== void 0 && (Q.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    let t, i = e;
    if (i.grid = this, i.el ? t = i.el : G.addRemoveCB ? t = G.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(i), !t)
      return;
    if (i = t.gridstackNode, i && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === i._id))
      return t;
    const r = this._readAttr(t);
    return N.defaults(e, r), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = N.createDiv(["grid-stack-item", this.opts.itemClass]), i = N.createDiv(["grid-stack-item-content"], t);
    return N.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([r]) => {
      r.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, G.renderCB(i, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : G.renderCB(i, e), t;
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
  makeSubGrid(e, t, i, r = !0) {
    let s = e.gridstackNode;
    if (s || (s = this.makeWidget(e).gridstackNode), s.subGrid?.el)
      return s.subGrid;
    let o, a = this;
    for (; a && !o; )
      o = a.opts?.subGridOpts, a = a.parentGridNode?.grid;
    t = N.cloneDeep({
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
    let d;
    t.column === "auto" && (d = !0, t.column = Math.max(s.w || 1, i?.w || 1), delete t.columnOpts);
    let u = s.el.querySelector(".grid-stack-item-content"), c, h;
    if (r && (this._removeDD(s.el), h = { ...s, x: 0, y: 0 }, N.removeInternalForSave(h), delete h.subGridOpts, s.content && (h.content = s.content, delete s.content), G.addRemoveCB ? c = G.addRemoveCB(this.el, h, !0, !1) : (c = N.createDiv(["grid-stack-item"]), c.appendChild(u), u = N.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), i) {
      const m = d ? t.column : s.w, p = s.h + i.h, v = s.el.style;
      v.transition = "none", this.update(s.el, { w: m, h: p }), setTimeout(() => v.transition = null);
    }
    const f = s.subGrid = G.addGrid(u, t);
    return i?._moving && (f._isTemp = !0), d && (f._autoColumn = !0), r && f.makeWidget(c, h), i && (i._moving ? window.setTimeout(() => N.simulateMouseEvent(i._event, "mouseenter", f.el), 0) : f.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), f;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((i) => {
      i.x += this.parentGridNode.x, i.y += this.parentGridNode.y, t.makeWidget(i.el, i);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => N.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, i = G.saveCB, r) {
    const s = this.engine.save(e, i, r);
    if (s.forEach((o) => {
      if (e && o.el && !o.subGrid && !i) {
        const a = o.el.querySelector(".grid-stack-item-content");
        o.content = a?.innerHTML, o.content || delete o.content;
      } else if (!e && !i && delete o.content, o.subGrid?.el) {
        const a = o.w || o.subGrid.getColumn(), d = o.subGrid.save(e, t, i, a);
        o.subGridOpts = t ? d : { children: d }, delete o.subGrid;
      }
      delete o.el;
    }), t) {
      const o = N.cloneDeep(this.opts);
      o.marginBottom === o.marginTop && o.marginRight === o.marginLeft && o.marginTop === o.marginRight && (o.margin = o.marginTop, delete o.marginTop, delete o.marginRight, delete o.marginBottom, delete o.marginLeft), o.rtl === (this.el.style.direction === "rtl") && (o.rtl = "auto"), this._isAutoCellHeight && (o.cellHeight = "auto"), this._autoColumn && (o.column = "auto");
      const a = o._alwaysShowResizeHandle;
      return delete o._alwaysShowResizeHandle, a !== void 0 ? o.alwaysShowResizeHandle = a : delete o.alwaysShowResizeHandle, N.removeInternalAndSame(o, Le), o.children = s, o;
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
  load(e, t = G.addRemoveCB || !0) {
    e = N.cloneDeep(e);
    const i = this.getColumn();
    e.forEach((c) => {
      c.w = c.w || c.minW || 1, c.h = c.h || c.minH || 1;
    }), e = N.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let r = 0;
    e.forEach((c) => {
      r = Math.max(r, (c.x || 0) + c.w);
    }), r > this.engine.defaultColumn && (this.engine.defaultColumn = r), r > i && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(r, i, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, r, !0));
    const s = G.addRemoveCB;
    typeof t == "function" && (G.addRemoveCB = t);
    const o = [];
    this.batchUpdate();
    const a = !this.engine.nodes.length, d = a && this.opts.animate;
    d && this.setAnimation(!1), !a && t && [...this.engine.nodes].forEach((h) => {
      if (!h.id)
        return;
      N.find(e, h.id) || (G.addRemoveCB && G.addRemoveCB(this.el, h, !1, !1), o.push(h), this.removeWidget(h.el, !0, !1));
    }), this.engine._loading = !0;
    const u = [];
    return this.engine.nodes = this.engine.nodes.filter((c) => N.find(e, c.id) ? (u.push(c), !1) : !0), e.forEach((c) => {
      const h = N.find(u, c.id);
      if (h) {
        if (N.shouldSizeToContent(h) && (c.h = h.h), this.engine.nodeBoundFix(c), (c.autoPosition || c.x === void 0 || c.y === void 0) && (c.w = c.w || h.w, c.h = c.h || h.h, this.engine.findEmptyPosition(c)), this.engine.nodes.push(h), N.samePos(h, c) && this.engine.nodes.length > 1 && (this.moveNode(h, { ...c, forceCollide: !0 }), N.copyPos(c, h)), this.update(h.el, c), c.subGridOpts?.children) {
          const f = h.el.querySelector(".grid-stack");
          f && f.gridstack && f.gridstack.load(c.subGridOpts.children);
        }
      } else t && this.addWidget(c);
    }), delete this.engine._loading, this.engine.removedNodes = o, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? G.addRemoveCB = s : delete G.addRemoveCB, d && this.setAnimation(!0, !0), this;
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
      const r = N.toNumber(t.getAttribute("gs-h")) || 1;
      return Math.round(t.offsetHeight / r);
    }
    const i = parseInt(this.el.getAttribute("gs-current-row"));
    return i ? Math.round(this.el.getBoundingClientRect().height / i) : this.opts.cellHeight;
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
      const i = -this.opts.marginRight - this.opts.marginLeft + this.opts.marginTop + this.opts.marginBottom;
      e = this.cellWidth() + i;
    }
    const t = N.parseHeight(e);
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
    let i = t;
    const r = this._widthOrContainer(!0);
    if (e.columnWidth)
      i = Math.min(Math.round(r / e.columnWidth) || 1, e.columnMax);
    else {
      i = e.columnMax;
      let s = 0;
      for (; s < e.breakpoints.length && r <= e.breakpoints[s].w; )
        i = e.breakpoints[s++].c || t;
    }
    if (i !== t) {
      const s = e.breakpoints?.find((o) => o.c === i);
      return this.column(i, s?.layout || e.layout), !0;
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
    const i = this.getColumn();
    return this.opts.column = e, this.engine ? (this.engine.column = e, this.el.classList.remove("gs-" + i), this._updateColumnVar(), this.engine.columnChanged(i, e, t), this._isAutoCellHeight && this.cellHeight(), this.resizeToContentCheck(!0), this._ignoreLayoutsNodeChange = !0, this._triggerChangeEvent(), delete this._ignoreLayoutsNodeChange, this) : (this.responseLayout = t, this);
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
    const i = this.el.getBoundingClientRect();
    let r;
    t ? r = { top: i.top + document.documentElement.scrollTop, left: i.left } : r = { top: this.el.offsetTop, left: this.el.offsetLeft };
    const s = e.left - r.left, o = e.top - r.top, a = i.width / this.getColumn(), d = i.height / parseInt(this.el.getAttribute("gs-current-row"));
    return { x: Math.floor(s / a), y: Math.floor(o / d) };
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
  isAreaEmpty(e, t, i, r) {
    return this.engine.isAreaEmpty(e, t, i, r);
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
    const i = G.getElement(e);
    if (!i || i.gridstackNode)
      return i;
    i.parentElement || this.el.appendChild(i), this._prepareElement(i, !0, t);
    const r = i.gridstackNode;
    this._updateContainerHeight(), r.subGridOpts && this.makeSubGrid(i, r.subGridOpts, void 0, !1);
    let s;
    return this.opts.column === 1 && !this._ignoreLayoutsNodeChange && (s = this._ignoreLayoutsNodeChange = !0), this._triggerAddEvent(), this._triggerChangeEvent(), s && delete this._ignoreLayoutsNodeChange, i;
  }
  on(e, t) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((r) => this.on(r, t)), this) : (e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable" ? (e === "enable" || e === "disable" ? this._gsEventHandler[e] = (r) => t(r) : this._gsEventHandler[e] = (r) => {
      r.detail && t(r, r.detail);
    }, this.el.addEventListener(e, this._gsEventHandler[e])) : e === "drag" || e === "dragstart" || e === "dragstop" || e === "resizestart" || e === "resize" || e === "resizestop" || e === "dropped" || e === "resizecontent" ? this._gsEventHandler[e] = t : console.error("GridStack.on(" + e + ") event not supported"), this);
  }
  /**
   * unsubscribe from the 'on' event GridStackEvent
   * @param name of the event (see possible values) or list of names space separated
   */
  off(e) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((i) => this.off(i)), this) : ((e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable") && this._gsEventHandler[e] && this.el.removeEventListener(e, this._gsEventHandler[e]), delete this._gsEventHandler[e], this);
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
  removeWidget(e, t = !0, i = !0) {
    return e ? (G.getElements(e).forEach((r) => {
      if (r.parentElement && r.parentElement !== this.el)
        return;
      let s = r.gridstackNode;
      s || (s = this.engine.nodes.find((o) => r === o.el)), s && (t && G.addRemoveCB && G.addRemoveCB(this.el, s, !1, !1), delete r.gridstackNode, this._removeDD(r), this.engine.removeNode(s, t, i), t && r.parentElement && r.remove());
    }), i && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((i) => {
      e && G.addRemoveCB && G.addRemoveCB(this.el, i, !1, !1), delete i.el.gridstackNode, this.opts.staticGrid || this._removeDD(i.el);
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
  setStatic(e, t = !0, i = !0) {
    return !!this.opts.staticGrid === e ? this : (e ? this.opts.staticGrid = !0 : delete this.opts.staticGrid, this._setupRemoveDrop(), this._setupAcceptWidget(), this.engine.nodes.forEach((r) => {
      this.prepareDragDrop(r.el), r.subGrid && i && r.subGrid.setStatic(e, t, i);
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
    return G.getElements(e).forEach((i) => {
      const r = i?.gridstackNode;
      if (!r)
        return;
      const s = { ...N.copyPos({}, r), ...N.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const o = ["x", "y", "w", "h"];
      let a;
      if (o.some((c) => s[c] !== void 0 && s[c] !== r[c]) && (a = {}, o.forEach((c) => {
        a[c] = s[c] !== void 0 ? s[c] : r[c], delete s[c];
      })), !a && (s.minW || s.minH || s.maxW || s.maxH) && (a = {}), s.content !== void 0) {
        const c = i.querySelector(".grid-stack-item-content");
        c && c.textContent !== s.content && (r.content = s.content, G.renderCB(c, s), r.subGrid?.el && (c.appendChild(r.subGrid.el), r.subGrid._updateContainerHeight())), delete s.content;
      }
      let d = !1, u = !1;
      for (const c in s)
        c[0] !== "_" && r[c] !== s[c] && (r[c] = s[c], d = !0, u = u || !this.opts.staticGrid && (c === "noResize" || c === "noMove" || c === "locked"));
      if (N.sanitizeMinMax(r), a) {
        const c = a.w !== void 0 && a.w !== r.w;
        this.moveNode(r, a), c && r.subGrid ? r.subGrid.onResize(this.hasAnimationCSS() ? r.w : void 0) : this.resizeToContentCheck(c, r), delete r._orig;
      }
      (a || d) && this._writeAttr(i, r), u && this.prepareDragDrop(r.el), G.updateCB && G.updateCB(r);
    }), this;
  }
  moveNode(e, t) {
    const i = e._updating;
    i || this.engine.cleanNodes().beginUpdate(e), this.engine.moveNode(e, t), this._updateContainerHeight(), i || (this._triggerChangeEvent(), this.engine.endUpdate());
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
    const i = t.grid;
    if (!i || e.parentElement !== i.el)
      return;
    const r = i.getCellHeight(!0);
    if (!r)
      return;
    let s = t.h ? t.h * r : e.clientHeight, o;
    if (t.resizeToContentParent && (o = e.querySelector(t.resizeToContentParent)), o || (o = e.querySelector(G.resizeToContentParent)), !o)
      return;
    const a = e.clientHeight - o.clientHeight, d = t.h ? t.h * r - a : o.clientHeight;
    let u;
    if (t.subGrid) {
      u = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const f = t.subGrid.el.getBoundingClientRect(), m = e.getBoundingClientRect();
      u += f.top - m.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const f = o.firstElementChild;
        if (!f) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${G.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        u = f.getBoundingClientRect().height || d;
      }
    }
    if (d === u)
      return;
    s += u - d;
    let c = Math.ceil(s / r);
    const h = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    h && c > h && (c = h, e.classList.add("size-to-content-max")), t.minH && c < t.minH ? c = t.minH : t.maxH && c > t.maxH && (c = t.maxH), c !== t.h && (i._ignoreLayoutsNodeChange = !0, i.moveNode(t, { h: c }), delete i._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    G.resizeToContentCB ? G.resizeToContentCB(e) : this.resizeToContent(e);
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
    return G.getElements(e).forEach((i) => {
      const r = i.gridstackNode;
      if (!N.canBeRotated(r))
        return;
      const s = { w: r.h, h: r.w, minH: r.minW, minW: r.minH, maxH: r.maxW, maxW: r.maxH };
      if (t) {
        const a = t.left > 0 ? Math.floor(t.left / this.cellWidth()) : 0, d = t.top > 0 ? Math.floor(t.top / this.opts.cellHeight) : 0;
        s.x = r.x + a - (r.h - (d + 1)), s.y = r.y + d - a;
      }
      Object.keys(s).forEach((a) => {
        s[a] === void 0 && delete s[a];
      });
      const o = r._orig;
      this.update(i, s), r._orig = o;
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
      const i = N.parseHeight(e);
      if (this.opts.marginUnit === i.unit && this.opts.margin === i.h)
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
      let i = 0, r = { x: t[i++], y: t[i++], w: t[i++], h: t[i++], autoPosition: t[i++] };
      return this.willItFit(r);
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
    const i = t ? new CustomEvent(e, { bubbles: !1, detail: t }) : new Event(e);
    let r = this;
    for (; r.parentGridNode; )
      r = r.parentGridNode.grid;
    return r.el.dispatchEvent(i), this;
  }
  /** @internal */
  _updateContainerHeight() {
    if (!this.engine || this.engine.batchMode)
      return this;
    const e = this.parentGridNode;
    let t = this.getRow() + this._extraDragRow;
    const i = this.opts.cellHeight, r = this.opts.cellHeightUnit;
    if (!i)
      return this;
    if (!e && !this.opts.minRow) {
      const s = N.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === r) {
        const o = Math.floor(s.h / i);
        t < o && (t = o);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * i + r), e && N.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, i) {
    i = i || this._readAttr(e), e.gridstackNode = i, i.el = e, i.grid = this, i = this.engine.addNode(i, t), this._writeAttr(e, i), e.classList.add(Le.itemClass, this.opts.itemClass);
    const r = N.shouldSizeToContent(i);
    return r ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), r && this.resizeToContentCheck(!1, i), N.lazyLoad(i) || this.prepareDragDrop(i.el), this;
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
    const i = {
      // autoPosition: 'gs-auto-position', // no need to write out as already in node and doesn't affect CSS
      noResize: "gs-no-resize",
      noMove: "gs-no-move",
      locked: "gs-locked",
      id: "gs-id",
      sizeToContent: "gs-size-to-content"
    };
    for (const r in i)
      t[r] ? e.setAttribute(i[r], String(t[r])) : e.removeAttribute(i[r]);
    return this;
  }
  /** @internal call to read any default attributes from element */
  _readAttr(e, t = !0) {
    const i = {};
    i.x = N.toNumber(e.getAttribute("gs-x")), i.y = N.toNumber(e.getAttribute("gs-y")), i.w = N.toNumber(e.getAttribute("gs-w")), i.h = N.toNumber(e.getAttribute("gs-h")), i.autoPosition = N.toBool(e.getAttribute("gs-auto-position")), i.noResize = N.toBool(e.getAttribute("gs-no-resize")), i.noMove = N.toBool(e.getAttribute("gs-no-move")), i.locked = N.toBool(e.getAttribute("gs-locked"));
    const r = e.getAttribute("gs-size-to-content");
    r && (r === "true" || r === "false" ? i.sizeToContent = N.toBool(r) : i.sizeToContent = parseInt(r, 10)), i.id = e.getAttribute("gs-id"), i.maxW = N.toNumber(e.getAttribute("gs-max-w")), i.minW = N.toNumber(e.getAttribute("gs-min-w")), i.maxH = N.toNumber(e.getAttribute("gs-max-h")), i.minH = N.toNumber(e.getAttribute("gs-min-h")), t && (i.w === 1 && e.removeAttribute("gs-w"), i.h === 1 && e.removeAttribute("gs-h"), i.maxW && e.removeAttribute("gs-max-w"), i.minW && e.removeAttribute("gs-min-w"), i.maxH && e.removeAttribute("gs-max-h"), i.minH && e.removeAttribute("gs-min-h"));
    for (const s in i) {
      if (!i.hasOwnProperty(s))
        return;
      !i[s] && i[s] !== 0 && s !== "sizeToContent" && delete i[s];
    }
    return i;
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
    return this._autoColumn && this.parentGridNode ? this.opts.column !== this.parentGridNode.w && (this.column(this.parentGridNode.w, this.opts.layout || "list"), t = !0) : t = this.checkDynamicColumn(), this._isAutoCellHeight && this.cellHeight(), this.engine.nodes.forEach((i) => {
      i.subGrid && i.subGrid.onResize();
    }), this._skipInitialResize || this.resizeToContentCheck(t), delete this._skipInitialResize, this.batchUpdate(!1), this;
  }
  /** resizes content for given node (or all) if shouldSizeToContent() is true */
  resizeToContentCheck(e = !1, t = void 0) {
    if (this.engine) {
      if (e && this.hasAnimationCSS())
        return setTimeout(() => this.resizeToContentCheck(!1, t), this.animationDelay);
      if (t)
        N.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((i) => N.shouldSizeToContent(i))) {
        const i = [...this.engine.nodes];
        this.batchUpdate(), i.forEach((r) => {
          N.shouldSizeToContent(r) && this.resizeToContentCBCheck(r.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((i) => i.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = N.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return N.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return N.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return G.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return N.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, i = [];
    typeof this.opts.margin == "string" && (i = this.opts.margin.split(" ")), i.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = i[0], this.opts.marginLeft = this.opts.marginRight = i[1]) : i.length === 4 ? (this.opts.marginTop = i[0], this.opts.marginRight = i[1], this.opts.marginBottom = i[2], this.opts.marginLeft = i[3]) : (e = N.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((o) => {
      this.opts[o] === void 0 ? this.opts[o] = t : (e = N.parseHeight(this.opts[o]), this.opts[o] = e.h, delete this.opts.margin);
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
    return Se;
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
  static setupDragIn(e, t, i, r = document) {
    t?.pause !== void 0 && (Q.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? N.getElements(e, r) : e).forEach((o, a) => {
      Se.isDraggable(o) || Se.dragIn(o, t), i?.[a] && (o.gridstackNode = i[a]);
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
    return this.opts.staticGrid ? this : (G.getElements(e).forEach((i) => {
      const r = i.gridstackNode;
      r && (t ? delete r.noMove : r.noMove = !0, this.prepareDragDrop(r.el));
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
    return this.opts.staticGrid ? this : (G.getElements(e).forEach((i) => {
      const r = i.gridstackNode;
      r && (t ? delete r.noResize : r.noResize = !0, this.prepareDragDrop(r.el));
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
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableDrag : this.opts.disableDrag = !0, this.engine.nodes.forEach((i) => {
      this.prepareDragDrop(i.el), i.subGrid && t && i.subGrid.enableMove(e, t);
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
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableResize : this.opts.disableResize = !0, this.engine.nodes.forEach((i) => {
      this.prepareDragDrop(i.el), i.subGrid && t && i.subGrid.enableResize(e, t);
    }), this);
  }
  /** @internal call when drag (and drop) needs to be cancelled (Esc key) */
  cancelDrag() {
    const e = this._placeholder?.gridstackNode;
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && G._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return Se.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return Se.droppable(this.el, "destroy"), this;
    let e, t;
    const i = (r, s, o) => {
      o = o || s;
      const a = o.gridstackNode;
      if (!a)
        return;
      if (!a.grid?.el) {
        o.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const f = o.getBoundingClientRect();
        o.style.left = f.x + (this.dragTransform.xScale - 1) * (r.clientX - f.x) / this.dragTransform.xScale + "px", o.style.top = f.y + (this.dragTransform.yScale - 1) * (r.clientY - f.y) / this.dragTransform.yScale + "px", o.style.transformOrigin = "0px 0px";
      }
      let { top: d, left: u } = o.getBoundingClientRect();
      const c = this.el.getBoundingClientRect();
      u -= c.left, d -= c.top;
      const h = {
        position: {
          top: d * this.dragTransform.xScale,
          left: u * this.dragTransform.yScale
        }
      };
      if (a._temporaryRemoved) {
        if (a.x = Math.max(0, Math.round(u / t)), a.y = Math.max(0, Math.round(d / e)), delete a.autoPosition, this.engine.nodeBoundFix(a), !this.engine.willItFit(a)) {
          if (a.autoPosition = !0, !this.engine.willItFit(a)) {
            Se.off(s, "drag");
            return;
          }
          a._willFitPos && (N.copyPos(a, a._willFitPos), delete a._willFitPos);
        }
        this._onStartMoving(o, r, h, a, t, e);
      } else
        this._dragOrResize(o, r, h, a, t, e);
    };
    return Se.droppable(this.el, {
      accept: (r) => {
        const s = r.gridstackNode || this._readAttr(r, !1);
        if (s?.grid === this)
          return !0;
        if (!this.opts.acceptWidgets)
          return !1;
        let o = !0;
        if (typeof this.opts.acceptWidgets == "function")
          o = this.opts.acceptWidgets(r);
        else {
          const a = this.opts.acceptWidgets === !0 ? ".grid-stack-item" : this.opts.acceptWidgets;
          o = r.matches(a);
        }
        if (o && s && this.opts.maxRow) {
          const a = { w: s.w, h: s.h, minW: s.minW, minH: s.minH };
          o = this.engine.willItFit(a);
        }
        return o;
      }
    }).on(this.el, "dropover", (r, s, o) => {
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
      const d = a.w || Math.round(o.offsetWidth / t) || 1, u = a.h || Math.round(o.offsetHeight / e) || 1;
      return a.grid && a.grid !== this ? (s._gridstackNodeOrig || (s._gridstackNodeOrig = a), s.gridstackNode = a = { ...a, w: d, h: u, grid: this }, delete a.x, delete a.y, this.engine.cleanupNode(a).nodeBoundFix(a), a._initDD = a._isExternal = // DOM needs to be re-parented on a drop
      a._temporaryRemoved = !0) : (a.w = d, a.h = u, a._temporaryRemoved = !0), G._itemRemoving(a.el, !1), Se.on(s, "drag", i), i(r, s, o), !1;
    }).on(this.el, "dropout", (r, s, o) => {
      const a = o?.gridstackNode || s.gridstackNode;
      return a && (!a.grid || a.grid === this) && (this._leave(s, o), this._isTemp && this.removeAsSubGrid(a)), !1;
    }).on(this.el, "drop", (r, s, o) => {
      const a = o?.gridstackNode || s.gridstackNode;
      if (a?.grid === this && !a._isExternal)
        return !1;
      const d = !!this.placeholder.parentElement, u = s !== o;
      this.placeholder.remove(), delete this.placeholder.gridstackNode, d && this.opts.animate && (this.setAnimation(!1), this.setAnimation(!0, !0));
      const c = s._gridstackNodeOrig;
      if (delete s._gridstackNodeOrig, d && c?.grid && c.grid !== this) {
        const f = c.grid;
        f.engine.removeNodeFromLayoutCache(c), f.engine.removedNodes.push(c), f._triggerRemoveEvent()._triggerChangeEvent(), f.parentGridNode && !f.engine.nodes.length && f.opts.subGridDynamic && f.removeAsSubGrid();
      }
      if (!a || (d && (this.engine.cleanupNode(a), a.grid = this), delete a.grid?._isTemp, Se.off(s, "drag"), o !== s ? (o.remove(), s = o) : s.remove(), this._removeDD(s), !d))
        return !1;
      const h = a.subGrid?.el?.gridstack;
      return N.copyPos(a, this._readAttr(this.placeholder)), N.removePositioningStyles(s), u && (a.content || a.subGridOpts || G.addRemoveCB) ? (delete a.el, s = this.addWidget(a)) : (this._prepareElement(s, !0, a), this.el.appendChild(s), this.resizeToContentCheck(!1, a), h && (h.parentGridNode = a), this._updateContainerHeight()), this.engine.addedNodes.push(a), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...r, type: "dropped" }, c && c.grid ? c : void 0, a), !1;
    }), this;
  }
  /** @internal mark item for removal */
  static _itemRemoving(e, t) {
    if (!e)
      return;
    const i = e ? e.gridstackNode : void 0;
    !i?.grid || e.classList.contains(i.grid.opts.removableOptions.decline) || (t ? i._isAboutToRemove = !0 : delete i._isAboutToRemove, t ? e.classList.add("grid-stack-item-removing") : e.classList.remove("grid-stack-item-removing"));
  }
  /** @internal called to setup a trash drop zone if the user specifies it */
  _setupRemoveDrop() {
    if (typeof this.opts.removable != "string")
      return this;
    const e = document.querySelector(this.opts.removable);
    return e ? (!this.opts.staticGrid && !Se.isDroppable(e) && Se.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, i) => G._itemRemoving(i, !0)).on(e, "dropout", (t, i) => G._itemRemoving(i, !1)), this) : this;
  }
  /**
   * prepares the element for drag&drop - this is normally called by makeWidget() unless are are delay loading
   * @param el GridItemHTMLElement of the widget
   * @param [force=false]
   * */
  prepareDragDrop(e, t = !1) {
    const i = e?.gridstackNode;
    if (!i)
      return;
    const r = i.noMove || this.opts.disableDrag, s = i.noResize || this.opts.disableResize, o = this.opts.staticGrid || r && s;
    if ((t || o) && (i._initDD && (this._removeDD(e), delete i._initDD), o && e.classList.add("ui-draggable-disabled", "ui-resizable-disabled"), !t))
      return this;
    if (!i._initDD) {
      let a, d;
      const u = (f, m) => {
        this.triggerEvent(f, f.target), a = this.cellWidth(), d = this.getCellHeight(!0), this._onStartMoving(e, f, m, i, a, d);
      }, c = (f, m) => {
        this._dragOrResize(e, f, m, i, a, d);
      }, h = (f) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete i._moving, delete i._resizing, delete i._event, delete i._lastTried;
        const m = i.w !== i._orig.w, p = f.target;
        if (!(!p.gridstackNode || p.gridstackNode.grid !== this)) {
          if (i.el = p, i._isAboutToRemove) {
            const v = e.gridstackNode.grid;
            v._gsEventHandler[f.type] && v._gsEventHandler[f.type](f, p), v.engine.nodes.push(i), v.removeWidget(e, !0, !0);
          } else
            N.removePositioningStyles(p), i._temporaryRemoved ? (this._writePosAttr(p, i), this.engine.addNode(i)) : this._writePosAttr(p, i), this.triggerEvent(f, p);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), f.type === "resizestop" && (Number.isInteger(i.sizeToContent) && (i.sizeToContent = i.h), this.resizeToContentCheck(m, i));
        }
      };
      Se.draggable(e, {
        start: u,
        stop: h,
        drag: c
      }).resizable(e, {
        start: u,
        stop: h,
        resize: c
      }), i._initDD = !0;
    }
    return Se.draggable(e, r ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, i, r, s, o) {
    if (this.engine.cleanNodes().beginUpdate(r), this._writePosAttr(this.placeholder, r), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = r, r.grid?.el)
      this.dragTransform = N.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const a = this.placeholder.closest(".grid-stack");
      this.dragTransform = N.getValuesFromTransformedElement(a);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (r.el = this.placeholder, r._lastUiPosition = i.position, r._prevYPix = i.position.top, r._moving = t.type === "dragstart", r._resizing = t.type === "resizestart", delete r._lastTried, t.type === "dropover" && r._temporaryRemoved && (this.engine.addNode(r), r._moving = !0), this.engine.cacheRects(s, o, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const a = this.getColumn() - r.x, d = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - r.y;
      Se.resizable(e, "option", "minWidth", s * Math.min(r.minW || 1, a)).resizable(e, "option", "minHeight", o * Math.min(r.minH || 1, d)).resizable(e, "option", "maxWidth", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, a)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, r.x + r.w)).resizable(e, "option", "maxHeight", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, d)).resizable(e, "option", "maxHeightMoveUp", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, r.y + r.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, i, r, s, o) {
    const a = { ...r._orig };
    let d, u = this.opts.marginLeft, c = this.opts.marginRight, h = this.opts.marginTop, f = this.opts.marginBottom;
    const m = Math.round(o * 0.1), p = Math.round(s * 0.1);
    if (u = Math.min(u, p), c = Math.min(c, p), h = Math.min(h, m), f = Math.min(f, m), t.type === "drag") {
      if (r._temporaryRemoved)
        return;
      const g = i.position.top - r._prevYPix;
      r._prevYPix = i.position.top, this.opts.draggable.scroll !== !1 && N.updateScrollPosition(e, i.position, g);
      const b = i.position.left + (i.position.left > r._lastUiPosition.left ? -c : u), w = i.position.top + (i.position.top > r._lastUiPosition.top ? -f : h);
      a.x = Math.round(b / s), a.y = Math.round(w / o);
      const S = this._extraDragRow;
      if (this.engine.collide(r, a)) {
        const T = this.getRow();
        let R = Math.max(0, a.y + r.h - T);
        this.opts.maxRow && T + R > this.opts.maxRow && (R = Math.max(0, this.opts.maxRow - T)), this._extraDragRow = R;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== S && this._updateContainerHeight(), r.x === a.x && r.y === a.y)
        return;
    } else if (t.type === "resize") {
      if (a.x < 0 || (N.updateScrollResize(t, e, o), a.w = Math.round((i.size.width - u) / s), a.h = Math.round((i.size.height - h) / o), r.w === a.w && r.h === a.h) || r._lastTried && r._lastTried.w === a.w && r._lastTried.h === a.h)
        return;
      const g = i.position.left + u, b = i.position.top + h;
      a.x = Math.round(g / s), a.y = Math.round(b / o), d = !0;
    }
    r._event = t, r._lastTried = a;
    const v = {
      x: i.position.left + u,
      y: i.position.top + h,
      w: (i.size ? i.size.width : r.w * s) - u - c,
      h: (i.size ? i.size.height : r.h * o) - h - f
    };
    if (this.engine.moveNodeCheck(r, { ...a, cellWidth: s, cellHeight: o, rect: v, resizing: d })) {
      r._lastUiPosition = i.position, this.engine.cacheRects(s, o, h, c, f, u), delete r._skipDown, d && r.subGrid && r.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const g = t.target;
      r._sidebarOrig || this._writePosAttr(g, r), this.triggerEvent(t, g);
    }
  }
  /** call given event callback on our main top-most grid (if we're nested) */
  triggerEvent(e, t) {
    let i = this;
    for (; i.parentGridNode; )
      i = i.parentGridNode.grid;
    i._gsEventHandler[e.type] && i._gsEventHandler[e.type](e, t);
  }
  /** @internal called when item leaving our area by either cursor dropout event
   * or shape is outside our boundaries. remove it from us, and mark temporary if this was
   * our item to start with else restore prev node values from prev grid it came from.
   */
  _leave(e, t) {
    t = t || e;
    const i = t.gridstackNode;
    if (!i || (t.style.transform = t.style.transformOrigin = null, Se.off(e, "drag"), i._temporaryRemoved))
      return;
    i._temporaryRemoved = !0, this.engine.removeNode(i), i.el = i._isExternal && t ? t : e;
    const r = i._sidebarOrig;
    i._isExternal && this.engine.cleanupNode(i), i._sidebarOrig = r, this.opts.removable === !0 && G._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : i._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return hl(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
G.renderCB = (n, e) => {
  n && e?.content && (n.textContent = e.content);
};
G.resizeToContentParent = ".grid-stack-item-content";
G.Utils = N;
G.Engine = it;
G.GDRev = "12.3.2";
const nn = /* @__PURE__ */ new WeakMap();
function pl({ children: n }) {
  const {
    _gridStack: { value: e, set: t },
    options: i
  } = hs(), r = W(/* @__PURE__ */ new Map()), s = W(null), o = W(i), a = I(
    (c, h) => {
      if (h.id && h.grid) {
        let f = nn.get(h.grid);
        f || (f = /* @__PURE__ */ new Map(), nn.set(h.grid, f)), f.set(h.id, c), r.current.set(h.id, c);
      }
    },
    []
  ), d = I(() => {
    if (s.current) {
      G.renderCB = a;
      const c = G.init(o.current, s.current);
      return c && o.current.handle && c.opts && (c.opts.handle = o.current.handle), c;
    }
    return null;
  }, [a]), u = (c, h) => {
    const { children: f, ...m } = c, { children: p, ...v } = h;
    return zo(m, v);
  };
  return oi(() => {
    if (!u(i, o.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), r.current.clear(), nn.delete(e), o.current = i, t(null);
      } catch (c) {
        console.error("Error destroying gridstack", c);
      }
    else e && (o.current = i, i.handle && e.opts && (e.opts.handle = i.handle));
  }, [i, e, t]), oi(() => {
    if (!e && s.current)
      try {
        t(d());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, d, t]), /* @__PURE__ */ l(
    fs.Provider,
    {
      value: B(
        () => ({
          getWidgetContainer: (c) => {
            if (e) {
              const h = nn.get(e);
              if (h?.has(c))
                return h.get(c) || null;
            }
            return r.current.get(c) || null;
          }
        }),
        // ! gridStack is required to reinitialize the grid when the options change
        [e]
      ),
      children: /* @__PURE__ */ l("div", { ref: s, children: e ? n : null })
    }
  );
}
const Ri = ({
  options: n,
  widgets: e,
  onChange: t,
  className: i,
  static: r,
  forcePositionSync: s
}) => {
  const o = B(() => JSON.stringify(
    e.map((c) => ({
      id: c.id,
      w: c.w,
      h: c.h,
      x: c.x,
      y: c.y,
      noMove: c.noMove,
      noResize: c.noResize,
      locked: c.locked,
      content: c.content?.toString() ?? "",
      _originalContent: c._originalContent?.toString() ?? "",
      allowedSizes: c.allowedSizes
    }))
  ), [e]), a = B(() => ({
    ...n,
    class: i
  }), [n, o, i]), d = (c, h, f) => {
    let m = f[0], p = 1 / 0;
    for (const v of f) {
      const g = v.w - c, b = v.h - h, w = g * g + b * b;
      w < p && (p = w, m = v);
    }
    return m;
  };
  return /* @__PURE__ */ l(
    ll,
    {
      options: a,
      widgets: e,
      onResizeStop: (c, h) => {
        const f = h.gridstackNode;
        if (!f) return;
        const m = h.gridstackNode?.allowedSizes ?? [];
        if (m.length === 0)
          return;
        const p = d(f.w ?? 1, f.h ?? 1, m ?? []);
        (f.w !== p.w || f.h !== p.h) && f.grid?.update(h, { w: p.w, h: p.h });
      },
      onChange: t,
      static: r,
      forcePositionSync: s,
      children: /* @__PURE__ */ l(pl, { children: /* @__PURE__ */ l(ul, {}) })
    }
  );
};
Ri.displayName = "F0GridStack";
const vl = (n, e, t) => /* @__PURE__ */ l("div", { children: n }), Pn = ({
  widgets: n = [],
  editMode: e = !1,
  onChange: t = () => {
  },
  WidgetWrapper: i = vl,
  main: r = !1,
  deps: s
}) => {
  const o = I(
    (R, x, y) => /* @__PURE__ */ l(
      yt.div,
      {
        className: "h-full w-full",
        initial: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: {
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        },
        children: i(R, x, y)
      }
    ),
    [i]
  ), a = B(
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
  ), d = (R, x) => {
    if (typeof R.content == "function" && R.deps && x) {
      const y = {};
      return R.deps.forEach((_) => {
        typeof _ == "string" && x[_] !== void 0 && (y[_] = x[_]);
      }), R.content(y);
    }
    return typeof R.content == "function" ? null : R.content;
  }, u = (R, x, y) => R.map((_) => {
    const k = d(_, y), F = {
      id: _.id,
      h: _.h ?? 1,
      w: _.w ?? 1,
      allowedSizes: _.availableSizes,
      noMove: !x,
      noResize: !x,
      locked: _.locked,
      meta: _.meta,
      _originalContent: k,
      content: o(k, _.meta, x)
    };
    return _.x !== void 0 && (F.x = _.x), _.y !== void 0 && (F.y = _.y), F;
  }), [c, h] = j(
    u(n, e)
  ), f = W(e), m = W(n), p = W(!1), v = W(/* @__PURE__ */ new Map()), g = W(n);
  g.current = n;
  const b = W(s), w = B(() => {
    const R = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || n.forEach((x) => {
      if (x.deps && x.deps.length > 0) {
        const y = x.deps.map((_) => typeof _ == "string" && s[_] !== void 0 ? s[_] : _).filter((_) => _ !== null);
        R.set(x.id, y);
      }
    }), R;
  }, [n, s]), S = I(
    (R) => {
      h(R), p.current || t(
        R.map((x) => {
          const y = g.current.find(
            (_) => _.id === x.id
          );
          return {
            id: x.id,
            w: x.w ?? 1,
            h: x.h ?? 1,
            allowedSizes: x.allowedSizes,
            meta: x.meta,
            // Preserve the original content (function or static) from the widget prop
            content: typeof y?.content == "function" ? y.content : x._originalContent,
            x: x.x ?? 0,
            y: x.y ?? 0,
            locked: x.locked,
            deps: y?.deps
          };
        })
      ), p.current = !1;
    },
    [t]
  ), T = (R, x) => !R && !x ? !1 : !R || !x || R.length !== x.length ? !0 : R.some((y, _) => y !== x[_]);
  return V(() => {
    const R = f.current !== e, x = m.current !== n, y = b.current !== s && (b.current === void 0 || s === void 0 || Object.keys(b.current).length !== Object.keys(s).length || Object.keys(s).some(
      (E) => b.current?.[E] !== s[E]
    )), _ = /* @__PURE__ */ new Map();
    n.forEach((E) => {
      if (E.deps && E.deps.length > 0) {
        const M = v.current.get(E.id), D = w.get(E.id);
        _.set(
          E.id,
          T(M, D)
        ), D ? v.current.set(E.id, D) : v.current.delete(E.id);
      }
    });
    const k = new Set(n.map((E) => E.id));
    v.current.forEach((E, M) => {
      k.has(M) || v.current.delete(M);
    });
    const F = Array.from(_.values()).some((E) => E) || y;
    R && !x && !F ? (p.current = !0, h(
      (E) => E.map((M) => {
        const D = n.find((L) => L.id === M.id);
        if (!D)
          return M;
        const A = d(D, s);
        return {
          ...M,
          noMove: !e,
          noResize: !e,
          locked: D.locked,
          meta: D.meta,
          _originalContent: A,
          content: o(
            A,
            D.meta,
            e
          )
        };
      })
    )) : (x || F) && h((E) => {
      const M = new Map(
        E.map((D) => [D.id, D])
      );
      return n.map((D) => {
        const A = M.get(D.id), L = _.get(D.id) ?? !1;
        let O;
        L || !A ? O = d(D, s) : O = A._originalContent ?? d(D, s);
        const z = {
          id: D.id,
          h: A?.h ?? D.h ?? 1,
          w: A?.w ?? D.w ?? 1,
          allowedSizes: D.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: D.locked,
          meta: D.meta,
          _originalContent: O,
          content: o(O, D.meta, e)
        }, K = A?.x ?? D.x, $ = A?.y ?? D.y;
        return K !== void 0 && (z.x = K), $ !== void 0 && (z.y = $), z;
      });
    }), f.current = e, m.current = n, b.current = s;
  }, [
    n,
    e,
    o,
    w,
    s
  ]), /* @__PURE__ */ l(
    Ri,
    {
      className: P(r && "h-full flex-1 overflow-auto"),
      options: a,
      onChange: S,
      widgets: c
    }
  );
};
Pn.displayName = "GroupGrid";
Pn.__isPageLayoutGroup = !0;
const bl = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutBlock = !0, t;
}, yl = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutGroup = !0, t;
}, Tt = ht({
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
}), xl = {
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
}, ki = qe(
  ({
    content: n,
    variant: e,
    align: t,
    className: i,
    as: r,
    ellipsis: s,
    noEllipsisTooltip: o,
    markdown: a,
    required: d,
    ...u
  }, c) => {
    const h = r ?? xl[e ?? "body"], f = d ? /* @__PURE__ */ l("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (s !== void 0) {
      const m = typeof s == "number" ? s : 1;
      return f ? en(
        h,
        {
          ...u,
          className: P(
            Tt({ variant: e, align: t }),
            i,
            "inline-flex gap-0.5"
          ),
          ref: c
        },
        /* @__PURE__ */ l(
          Yi,
          {
            lines: m,
            noTooltip: o,
            tag: "span",
            className: "min-w-0",
            markdown: a,
            children: n
          }
        ),
        f
      ) : /* @__PURE__ */ l(
        Yi,
        {
          ref: c,
          lines: m,
          noTooltip: o,
          tag: h,
          className: P(Tt({ variant: e, align: t }), i),
          markdown: a,
          ...u,
          children: n
        }
      );
    }
    if (a) {
      const m = Io(n);
      return f ? en(
        h,
        {
          ...u,
          className: P(Tt({ variant: e, align: t }), i),
          ref: c
        },
        /* @__PURE__ */ l("span", { dangerouslySetInnerHTML: { __html: m } }),
        f
      ) : en(h, {
        ...u,
        className: P(Tt({ variant: e, align: t }), i),
        ref: c,
        dangerouslySetInnerHTML: { __html: m }
      });
    }
    return en(
      h,
      {
        ...u,
        className: P(Tt({ variant: e, align: t }), i),
        ref: c
      },
      n,
      f
    );
  }
);
ki.displayName = "Text";
const gs = qe((n, e) => /* @__PURE__ */ l(ki, { ref: e, markdown: n.markdown ?? !0, ...n }));
gs.displayName = "F0Text";
const qt = se(gs), Qh = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], ps = ({
  title: n,
  draggable: e = !1,
  onDragStart: t,
  onDragEnd: i,
  isDragging: r = !1,
  AIButton: s,
  actions: o,
  children: a,
  selected: d = !1
}) => {
  const [u, c] = j(!1), [h, f] = j(!1), m = oe(), p = (g) => {
    c(g);
  }, v = h || u;
  return V(() => {
    if (!r || !i) return;
    const g = () => {
      i();
    };
    return document.addEventListener("mouseup", g), () => {
      document.removeEventListener("mouseup", g);
    };
  }, [r, i]), /* @__PURE__ */ C(
    "div",
    {
      className: P(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        e && u ? "border-f1-border-hover" : e && "hover:border-f1-border-hover",
        d && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        r && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      ),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [
        /* @__PURE__ */ C("div", { className: "flex h-12 w-full items-center justify-between gap-3", children: [
          /* @__PURE__ */ C(
            "div",
            {
              className: P(
                "flex min-w-0 flex-1 items-center",
                !e && "pl-4",
                !o && !s && "pr-4"
              ),
              children: [
                e && /* @__PURE__ */ l(
                  "div",
                  {
                    className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
                    onMouseDown: t,
                    "data-gs-handle": "true",
                    children: /* @__PURE__ */ l(he, { icon: Ut, size: "xs" })
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: P(
                      "flex min-w-0 flex-1 items-center",
                      e && "-translate-x-1.5"
                    ),
                    children: /* @__PURE__ */ l(qt, { variant: "label", content: n, ellipsis: !0 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l(Bo, { children: (s || o) && v && /* @__PURE__ */ C(
            yt.div,
            {
              className: P(
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
                s && /* @__PURE__ */ l("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ l(
                  Ua,
                  {
                    size: "sm",
                    label: m.ai.ask,
                    onClick: s,
                    icon: Va
                  }
                ) }),
                o && /* @__PURE__ */ l(
                  Po,
                  {
                    items: o,
                    open: u,
                    onOpenChange: p,
                    align: "end",
                    children: /* @__PURE__ */ l(
                      Ir,
                      {
                        icon: un,
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
        /* @__PURE__ */ l("div", { className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4", children: a })
      ]
    }
  );
}, wl = () => /* @__PURE__ */ C("div", { className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
  /* @__PURE__ */ l("div", { className: "flex h-12 w-full items-center px-4", children: /* @__PURE__ */ l(de, { className: "h-3 w-full max-w-16 rounded-md" }) }),
  /* @__PURE__ */ C("div", { className: "flex flex-1 items-end gap-2 px-4 pb-4", children: [
    /* @__PURE__ */ l(de, { className: "h-1/2 w-full rounded-sm" }),
    /* @__PURE__ */ l(de, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ l(de, { className: "h-1/5 w-full rounded-sm" }),
    /* @__PURE__ */ l(de, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ l(de, { className: "h-full w-full rounded-sm" }),
    /* @__PURE__ */ l(de, { className: "h-3/4 w-full rounded-sm" })
  ] })
] });
ps.displayName = "F0Widget";
const Cl = zr(ps, wl), Sl = ({
  children: n,
  title: e,
  draggable: t = !1,
  actions: i,
  aiButton: r
}) => /* @__PURE__ */ l(
  Cl,
  {
    title: e,
    draggable: t,
    actions: i,
    AIButton: r,
    children: n
  }
), vs = ({
  widgets: n,
  editMode: e = !1,
  onChange: t = () => {
  },
  deps: i,
  ...r
}) => /* @__PURE__ */ l(
  Pn,
  {
    widgets: n,
    editMode: e,
    onChange: t,
    deps: i,
    ...r,
    WidgetWrapper: (s, o, a) => /* @__PURE__ */ l(
      Sl,
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
vs.displayName = "Dashboard";
const El = yl("Dashboard", vs), Kh = se(
  Oe("Dashboard", El)
), Nl = ht({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), _l = (n) => (n || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({ type: "separator" }), e.push(...t), e), []), Dl = (n) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(n) ? n.every(e) ? [
    {
      items: n
    }
  ] : n : [n];
}, Hn = qe(
  ({
    children: n,
    variant: e = "default",
    className: t,
    draggable: i = !1,
    onDragStart: r,
    onDragEnd: s,
    onDrop: o,
    dragId: a,
    primaryAction: d,
    ...u
  }, c) => {
    const h = B(
      () => Dl(u.actions || []),
      [u.actions]
    ), f = B(
      () => h.flatMap((p) => p.items),
      [h]
    ), m = B(
      () => f.length > 0 || !!d,
      [f, d]
    );
    return /* @__PURE__ */ C(
      "div",
      {
        ref: c,
        className: P(Nl({ variant: e }), "relative", t),
        draggable: i,
        onDragStart: r,
        onDragEnd: s,
        onDrop: o,
        "data-drag-id": a,
        ...u,
        children: [
          m && /* @__PURE__ */ C("div", { className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4", children: [
            !!d && d,
            f.length > 0 && /* @__PURE__ */ l(
              hi,
              {
                items: _l(h),
                "data-testid": "actions-dropdown"
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { "data-testid": "content", children: n })
        ]
      }
    );
  }
);
Hn.displayName = "Block";
Hn.__isPageLayoutBlock = !0;
const Rl = ({
  title: n = "",
  description: e,
  titleLevel: t = "h2",
  children: i,
  className: r,
  ...s
}) => {
  if (!n) return null;
  const o = t;
  return /* @__PURE__ */ C(Hn, { ...s, className: P("space-y-4", r), children: [
    /* @__PURE__ */ C("div", { className: "space-y-2", children: [
      /* @__PURE__ */ l(
        o,
        {
          className: P("font-semibold text-f1-foreground", {
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
      e && /* @__PURE__ */ l("p", { className: "text-sm text-f1-foreground-secondary", children: e })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex-1", children: i })
  ] });
}, kl = bl(
  "BlockContent",
  Rl
), Tl = (n) => !ss(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutBlock" in n.type, Fl = (n) => !ss(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutGroup" in n.type, bs = (n, e, t) => {
  const i = vn.toArray(e);
  for (const r of i)
    t.includes("block") && Tl(r) || t.includes("group") && Fl(r) || console.warn(
      `${n}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      r
    );
}, Ti = qe(
  ({ children: n, onSort: e, ...t }, i) => {
    bs("GroupLinear", n, ["block"]);
    const [r, s] = j(vn.toArray(n));
    return V(() => {
      s(vn.toArray(n));
    }, [n]), V(() => {
      e?.(r);
    }, [r, e]), /* @__PURE__ */ l("div", { ref: i, ...t, children: r.map((o, a) => /* @__PURE__ */ l(Ga, { children: o }, a)) });
  }
);
Ti.displayName = "GroupLinear";
Ti.__isPageLayoutGroup = !0;
function Al() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return B(
    () => (i) => {
      e.forEach((r) => r(i));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const Wn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ct(n) {
  const e = Object.prototype.toString.call(n);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Fi(n) {
  return "nodeType" in n;
}
function Ne(n) {
  var e, t;
  return n ? Ct(n) ? n : Fi(n) && (e = (t = n.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Ai(n) {
  const {
    Document: e
  } = Ne(n);
  return n instanceof e;
}
function Qt(n) {
  return Ct(n) ? !1 : n instanceof Ne(n).HTMLElement;
}
function ys(n) {
  return n instanceof Ne(n).SVGElement;
}
function St(n) {
  return n ? Ct(n) ? n.document : Fi(n) ? Ai(n) ? n : Qt(n) || ys(n) ? n.ownerDocument : document : document : document;
}
const Ue = Wn ? oi : V;
function qn(n) {
  const e = W(n);
  return Ue(() => {
    e.current = n;
  }), I(function() {
    for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
      i[r] = arguments[r];
    return e.current == null ? void 0 : e.current(...i);
  }, []);
}
function Ll() {
  const n = W(null), e = I((i, r) => {
    n.current = setInterval(i, r);
  }, []), t = I(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [e, t];
}
function Gt(n, e) {
  e === void 0 && (e = [n]);
  const t = W(n);
  return Ue(() => {
    t.current !== n && (t.current = n);
  }, e), t;
}
function Kt(n, e) {
  const t = W();
  return B(
    () => {
      const i = n(t.current);
      return t.current = i, i;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function Sn(n) {
  const e = qn(n), t = W(null), i = I(
    (r) => {
      r !== t.current && e?.(r, t.current), t.current = r;
    },
    //eslint-disable-next-line
    []
  );
  return [t, i];
}
function En(n) {
  const e = W();
  return V(() => {
    e.current = n;
  }, [n]), e.current;
}
let Xn = {};
function Xt(n, e) {
  return B(() => {
    if (e)
      return e;
    const t = Xn[n] == null ? 0 : Xn[n] + 1;
    return Xn[n] = t, n + "-" + t;
  }, [n, e]);
}
function xs(n) {
  return function(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      i[r - 1] = arguments[r];
    return i.reduce((s, o) => {
      const a = Object.entries(o);
      for (const [d, u] of a) {
        const c = s[d];
        c != null && (s[d] = c + n * u);
      }
      return s;
    }, {
      ...e
    });
  };
}
const bt = /* @__PURE__ */ xs(1), $t = /* @__PURE__ */ xs(-1);
function Ol(n) {
  return "clientX" in n && "clientY" in n;
}
function Gn(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: e
  } = Ne(n.target);
  return e && n instanceof e;
}
function Ml(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: e
  } = Ne(n.target);
  return e && n instanceof e;
}
function Nn(n) {
  if (Ml(n)) {
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
  return Ol(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const ut = /* @__PURE__ */ Object.freeze({
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
        return [ut.Translate.toString(n), ut.Scale.toString(n)].join(" ");
    }
  },
  Transition: {
    toString(n) {
      let {
        property: e,
        duration: t,
        easing: i
      } = n;
      return e + " " + t + "ms " + i;
    }
  }
}), ir = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function zl(n) {
  return n.matches(ir) ? n : n.querySelector(ir);
}
const Il = {
  display: "none"
};
function Bl(n) {
  let {
    id: e,
    value: t
  } = n;
  return ae.createElement("div", {
    id: e,
    style: Il
  }, t);
}
function Pl(n) {
  let {
    id: e,
    announcement: t,
    ariaLiveType: i = "assertive"
  } = n;
  const r = {
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
  return ae.createElement("div", {
    id: e,
    style: r,
    role: "status",
    "aria-live": i,
    "aria-atomic": !0
  }, t);
}
function Hl() {
  const [n, e] = j("");
  return {
    announce: I((i) => {
      i != null && e(i);
    }, []),
    announcement: n
  };
}
const ws = /* @__PURE__ */ Qe(null);
function Wl(n) {
  const e = Re(ws);
  V(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(n);
  }, [n, e]);
}
function ql() {
  const [n] = j(() => /* @__PURE__ */ new Set()), e = I((i) => (n.add(i), () => n.delete(i)), [n]);
  return [I((i) => {
    let {
      type: r,
      event: s
    } = i;
    n.forEach((o) => {
      var a;
      return (a = o[r]) == null ? void 0 : a.call(o, s);
    });
  }, [n]), e];
}
const Gl = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, $l = {
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
function jl(n) {
  let {
    announcements: e = $l,
    container: t,
    hiddenTextDescribedById: i,
    screenReaderInstructions: r = Gl
  } = n;
  const {
    announce: s,
    announcement: o
  } = Hl(), a = Xt("DndLiveRegion"), [d, u] = j(!1);
  if (V(() => {
    u(!0);
  }, []), Wl(B(() => ({
    onDragStart(h) {
      let {
        active: f
      } = h;
      s(e.onDragStart({
        active: f
      }));
    },
    onDragMove(h) {
      let {
        active: f,
        over: m
      } = h;
      e.onDragMove && s(e.onDragMove({
        active: f,
        over: m
      }));
    },
    onDragOver(h) {
      let {
        active: f,
        over: m
      } = h;
      s(e.onDragOver({
        active: f,
        over: m
      }));
    },
    onDragEnd(h) {
      let {
        active: f,
        over: m
      } = h;
      s(e.onDragEnd({
        active: f,
        over: m
      }));
    },
    onDragCancel(h) {
      let {
        active: f,
        over: m
      } = h;
      s(e.onDragCancel({
        active: f,
        over: m
      }));
    }
  }), [s, e])), !d)
    return null;
  const c = ae.createElement(ae.Fragment, null, ae.createElement(Bl, {
    id: i,
    value: r.draggable
  }), ae.createElement(Pl, {
    id: a,
    announcement: o
  }));
  return t ? ls(c, t) : c;
}
var pe;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(pe || (pe = {}));
function _n() {
}
function rr(n, e) {
  return B(
    () => ({
      sensor: n,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, e]
  );
}
function Ul() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return B(
    () => [...e].filter((i) => i != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const Ve = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Vl(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Ql(n, e) {
  const t = Nn(n);
  if (!t)
    return "0 0";
  const i = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return i.x + "% " + i.y + "%";
}
function Kl(n, e) {
  let {
    data: {
      value: t
    }
  } = n, {
    data: {
      value: i
    }
  } = e;
  return t - i;
}
function Xl(n, e) {
  let {
    data: {
      value: t
    }
  } = n, {
    data: {
      value: i
    }
  } = e;
  return i - t;
}
function sr(n) {
  let {
    left: e,
    top: t,
    height: i,
    width: r
  } = n;
  return [{
    x: e,
    y: t
  }, {
    x: e + r,
    y: t
  }, {
    x: e,
    y: t + i
  }, {
    x: e + r,
    y: t + i
  }];
}
function Cs(n, e) {
  if (!n || n.length === 0)
    return null;
  const [t] = n;
  return t[e];
}
const Yl = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: i
  } = n;
  const r = sr(e), s = [];
  for (const o of i) {
    const {
      id: a
    } = o, d = t.get(a);
    if (d) {
      const u = sr(d), c = r.reduce((f, m, p) => f + Vl(u[p], m), 0), h = Number((c / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: o,
          value: h
        }
      });
    }
  }
  return s.sort(Kl);
};
function Jl(n, e) {
  const t = Math.max(e.top, n.top), i = Math.max(e.left, n.left), r = Math.min(e.left + e.width, n.left + n.width), s = Math.min(e.top + e.height, n.top + n.height), o = r - i, a = s - t;
  if (i < r && t < s) {
    const d = e.width * e.height, u = n.width * n.height, c = o * a, h = c / (d + u - c);
    return Number(h.toFixed(4));
  }
  return 0;
}
const Zl = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: i
  } = n;
  const r = [];
  for (const s of i) {
    const {
      id: o
    } = s, a = t.get(o);
    if (a) {
      const d = Jl(a, e);
      d > 0 && r.push({
        id: o,
        data: {
          droppableContainer: s,
          value: d
        }
      });
    }
  }
  return r.sort(Xl);
};
function ec(n, e, t) {
  return {
    ...n,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Ss(n, e) {
  return n && e ? {
    x: n.left - e.left,
    y: n.top - e.top
  } : Ve;
}
function tc(n) {
  return function(t) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
      r[s - 1] = arguments[s];
    return r.reduce((o, a) => ({
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
const nc = /* @__PURE__ */ tc(1);
function Es(n) {
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
function ic(n, e, t) {
  const i = Es(e);
  if (!i)
    return n;
  const {
    scaleX: r,
    scaleY: s,
    x: o,
    y: a
  } = i, d = n.left - o - (1 - r) * parseFloat(t), u = n.top - a - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), c = r ? n.width / r : n.width, h = s ? n.height / s : n.height;
  return {
    width: c,
    height: h,
    top: u,
    right: d + c,
    bottom: u + h,
    left: d
  };
}
const rc = {
  ignoreTransform: !1
};
function Et(n, e) {
  e === void 0 && (e = rc);
  let t = n.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: u,
      transformOrigin: c
    } = Ne(n).getComputedStyle(n);
    u && (t = ic(t, u, c));
  }
  const {
    top: i,
    left: r,
    width: s,
    height: o,
    bottom: a,
    right: d
  } = t;
  return {
    top: i,
    left: r,
    width: s,
    height: o,
    bottom: a,
    right: d
  };
}
function or(n) {
  return Et(n, {
    ignoreTransform: !0
  });
}
function sc(n) {
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
function oc(n, e) {
  return e === void 0 && (e = Ne(n).getComputedStyle(n)), e.position === "fixed";
}
function ac(n, e) {
  e === void 0 && (e = Ne(n).getComputedStyle(n));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((r) => {
    const s = e[r];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function $n(n, e) {
  const t = [];
  function i(r) {
    if (e != null && t.length >= e || !r)
      return t;
    if (Ai(r) && r.scrollingElement != null && !t.includes(r.scrollingElement))
      return t.push(r.scrollingElement), t;
    if (!Qt(r) || ys(r) || t.includes(r))
      return t;
    const s = Ne(n).getComputedStyle(r);
    return r !== n && ac(r, s) && t.push(r), oc(r, s) ? t : i(r.parentNode);
  }
  return n ? i(n) : t;
}
function Ns(n) {
  const [e] = $n(n, 1);
  return e ?? null;
}
function Yn(n) {
  return !Wn || !n ? null : Ct(n) ? n : Fi(n) ? Ai(n) || n === St(n).scrollingElement ? window : Qt(n) ? n : null : null;
}
function _s(n) {
  return Ct(n) ? n.scrollX : n.scrollLeft;
}
function Ds(n) {
  return Ct(n) ? n.scrollY : n.scrollTop;
}
function ai(n) {
  return {
    x: _s(n),
    y: Ds(n)
  };
}
var ve;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(ve || (ve = {}));
function Rs(n) {
  return !Wn || !n ? !1 : n === document.scrollingElement;
}
function ks(n) {
  const e = {
    x: 0,
    y: 0
  }, t = Rs(n) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: n.clientHeight,
    width: n.clientWidth
  }, i = {
    x: n.scrollWidth - t.width,
    y: n.scrollHeight - t.height
  }, r = n.scrollTop <= e.y, s = n.scrollLeft <= e.x, o = n.scrollTop >= i.y, a = n.scrollLeft >= i.x;
  return {
    isTop: r,
    isLeft: s,
    isBottom: o,
    isRight: a,
    maxScroll: i,
    minScroll: e
  };
}
const lc = {
  x: 0.2,
  y: 0.2
};
function cc(n, e, t, i, r) {
  let {
    top: s,
    left: o,
    right: a,
    bottom: d
  } = t;
  i === void 0 && (i = 10), r === void 0 && (r = lc);
  const {
    isTop: u,
    isBottom: c,
    isLeft: h,
    isRight: f
  } = ks(n), m = {
    x: 0,
    y: 0
  }, p = {
    x: 0,
    y: 0
  }, v = {
    height: e.height * r.y,
    width: e.width * r.x
  };
  return !u && s <= e.top + v.height ? (m.y = ve.Backward, p.y = i * Math.abs((e.top + v.height - s) / v.height)) : !c && d >= e.bottom - v.height && (m.y = ve.Forward, p.y = i * Math.abs((e.bottom - v.height - d) / v.height)), !f && a >= e.right - v.width ? (m.x = ve.Forward, p.x = i * Math.abs((e.right - v.width - a) / v.width)) : !h && o <= e.left + v.width && (m.x = ve.Backward, p.x = i * Math.abs((e.left + v.width - o) / v.width)), {
    direction: m,
    speed: p
  };
}
function dc(n) {
  if (n === document.scrollingElement) {
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
    right: i,
    bottom: r
  } = n.getBoundingClientRect();
  return {
    top: e,
    left: t,
    right: i,
    bottom: r,
    width: n.clientWidth,
    height: n.clientHeight
  };
}
function Ts(n) {
  return n.reduce((e, t) => bt(e, ai(t)), Ve);
}
function uc(n) {
  return n.reduce((e, t) => e + _s(t), 0);
}
function hc(n) {
  return n.reduce((e, t) => e + Ds(t), 0);
}
function Fs(n, e) {
  if (e === void 0 && (e = Et), !n)
    return;
  const {
    top: t,
    left: i,
    bottom: r,
    right: s
  } = e(n);
  Ns(n) && (r <= 0 || s <= 0 || t >= window.innerHeight || i >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const fc = [["x", ["left", "right"], uc], ["y", ["top", "bottom"], hc]];
class Li {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const i = $n(t), r = Ts(i);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, o, a] of fc)
      for (const d of o)
        Object.defineProperty(this, d, {
          get: () => {
            const u = a(i), c = r[s] - u;
            return this.rect[d] + c;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class zt {
  constructor(e) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((t) => {
        var i;
        return (i = this.target) == null ? void 0 : i.removeEventListener(...t);
      });
    }, this.target = e;
  }
  add(e, t, i) {
    var r;
    (r = this.target) == null || r.addEventListener(e, t, i), this.listeners.push([e, t, i]);
  }
}
function mc(n) {
  const {
    EventTarget: e
  } = Ne(n);
  return n instanceof e ? n : St(n);
}
function Jn(n, e) {
  const t = Math.abs(n.x), i = Math.abs(n.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + i ** 2) > e : "x" in e && "y" in e ? t > e.x && i > e.y : "x" in e ? t > e.x : "y" in e ? i > e.y : !1;
}
var He;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(He || (He = {}));
function ar(n) {
  n.preventDefault();
}
function gc(n) {
  n.stopPropagation();
}
var J;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter", n.Tab = "Tab";
})(J || (J = {}));
const As = {
  start: [J.Space, J.Enter],
  cancel: [J.Esc],
  end: [J.Space, J.Enter, J.Tab]
}, pc = (n, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (n.code) {
    case J.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case J.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case J.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case J.Up:
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
    this.props = e, this.listeners = new zt(St(t)), this.windowListeners = new zt(Ne(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(He.Resize, this.handleCancel), this.windowListeners.add(He.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(He.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, i = e.node.current;
    i && Fs(i), t(Ve);
  }
  handleKeyDown(e) {
    if (Gn(e)) {
      const {
        active: t,
        context: i,
        options: r
      } = this.props, {
        keyboardCodes: s = As,
        coordinateGetter: o = pc,
        scrollBehavior: a = "smooth"
      } = r, {
        code: d
      } = e;
      if (s.end.includes(d)) {
        this.handleEnd(e);
        return;
      }
      if (s.cancel.includes(d)) {
        this.handleCancel(e);
        return;
      }
      const {
        collisionRect: u
      } = i.current, c = u ? {
        x: u.left,
        y: u.top
      } : Ve;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const h = o(e, {
        active: t,
        context: i.current,
        currentCoordinates: c
      });
      if (h) {
        const f = $t(h, c), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: p
        } = i.current;
        for (const v of p) {
          const g = e.code, {
            isTop: b,
            isRight: w,
            isLeft: S,
            isBottom: T,
            maxScroll: R,
            minScroll: x
          } = ks(v), y = dc(v), _ = {
            x: Math.min(g === J.Right ? y.right - y.width / 2 : y.right, Math.max(g === J.Right ? y.left : y.left + y.width / 2, h.x)),
            y: Math.min(g === J.Down ? y.bottom - y.height / 2 : y.bottom, Math.max(g === J.Down ? y.top : y.top + y.height / 2, h.y))
          }, k = g === J.Right && !w || g === J.Left && !S, F = g === J.Down && !T || g === J.Up && !b;
          if (k && _.x !== h.x) {
            const E = v.scrollLeft + f.x, M = g === J.Right && E <= R.x || g === J.Left && E >= x.x;
            if (M && !f.y) {
              v.scrollTo({
                left: E,
                behavior: a
              });
              return;
            }
            M ? m.x = v.scrollLeft - E : m.x = g === J.Right ? v.scrollLeft - R.x : v.scrollLeft - x.x, m.x && v.scrollBy({
              left: -m.x,
              behavior: a
            });
            break;
          } else if (F && _.y !== h.y) {
            const E = v.scrollTop + f.y, M = g === J.Down && E <= R.y || g === J.Up && E >= x.y;
            if (M && !f.x) {
              v.scrollTo({
                top: E,
                behavior: a
              });
              return;
            }
            M ? m.y = v.scrollTop - E : m.y = g === J.Down ? v.scrollTop - R.y : v.scrollTop - x.y, m.y && v.scrollBy({
              top: -m.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(e, bt($t(h, this.referenceCoordinates), m));
      }
    }
  }
  handleMove(e, t) {
    const {
      onMove: i
    } = this.props;
    e.preventDefault(), i(t);
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
  handler: (n, e, t) => {
    let {
      keyboardCodes: i = As,
      onActivation: r
    } = e, {
      active: s
    } = t;
    const {
      code: o
    } = n.nativeEvent;
    if (i.start.includes(o)) {
      const a = s.activatorNode.current;
      return a && n.target !== a ? !1 : (n.preventDefault(), r?.({
        event: n.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function lr(n) {
  return !!(n && "distance" in n);
}
function cr(n) {
  return !!(n && "delay" in n);
}
class Mi {
  constructor(e, t, i) {
    var r;
    i === void 0 && (i = mc(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: o
    } = s;
    this.props = e, this.events = t, this.document = St(o), this.documentListeners = new zt(this.document), this.listeners = new zt(i), this.windowListeners = new zt(Ne(o)), this.initialCoordinates = (r = Nn(s)) != null ? r : Ve, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: e,
      props: {
        options: {
          activationConstraint: t,
          bypassActivationConstraint: i
        }
      }
    } = this;
    if (this.listeners.add(e.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(He.Resize, this.handleCancel), this.windowListeners.add(He.DragStart, ar), this.windowListeners.add(He.VisibilityChange, this.handleCancel), this.windowListeners.add(He.ContextMenu, ar), this.documentListeners.add(He.Keydown, this.handleKeydown), t) {
      if (i != null && i({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (cr(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (lr(t)) {
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
      active: i,
      onPending: r
    } = this.props;
    r(i, e, this.initialCoordinates, t);
  }
  handleStart() {
    const {
      initialCoordinates: e
    } = this, {
      onStart: t
    } = this.props;
    e && (this.activated = !0, this.documentListeners.add(He.Click, gc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(He.SelectionChange, this.removeTextSelection), t(e));
  }
  handleMove(e) {
    var t;
    const {
      activated: i,
      initialCoordinates: r,
      props: s
    } = this, {
      onMove: o,
      options: {
        activationConstraint: a
      }
    } = s;
    if (!r)
      return;
    const d = (t = Nn(e)) != null ? t : Ve, u = $t(r, d);
    if (!i && a) {
      if (lr(a)) {
        if (a.tolerance != null && Jn(u, a.tolerance))
          return this.handleCancel();
        if (Jn(u, a.distance))
          return this.handleStart();
      }
      if (cr(a) && Jn(u, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, u);
      return;
    }
    e.cancelable && e.preventDefault(), o(d);
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
    e.code === J.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const vc = {
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
class zi extends Mi {
  constructor(e) {
    const {
      event: t
    } = e, i = St(t.target);
    super(e, vc, i);
  }
}
zi.activators = [{
  eventName: "onPointerDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: i
    } = e;
    return !t.isPrimary || t.button !== 0 ? !1 : (i?.({
      event: t
    }), !0);
  }
}];
const bc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var li;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(li || (li = {}));
class yc extends Mi {
  constructor(e) {
    super(e, bc, St(e.event.target));
  }
}
yc.activators = [{
  eventName: "onMouseDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: i
    } = e;
    return t.button === li.RightClick ? !1 : (i?.({
      event: t
    }), !0);
  }
}];
const Zn = {
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
class xc extends Mi {
  constructor(e) {
    super(e, Zn);
  }
  static setup() {
    return window.addEventListener(Zn.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Zn.move.name, e);
    };
    function e() {
    }
  }
}
xc.activators = [{
  eventName: "onTouchStart",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: i
    } = e;
    const {
      touches: r
    } = t;
    return r.length > 1 ? !1 : (i?.({
      event: t
    }), !0);
  }
}];
var It;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(It || (It = {}));
var Dn;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Dn || (Dn = {}));
function wc(n) {
  let {
    acceleration: e,
    activator: t = It.Pointer,
    canScroll: i,
    draggingRect: r,
    enabled: s,
    interval: o = 5,
    order: a = Dn.TreeOrder,
    pointerCoordinates: d,
    scrollableAncestors: u,
    scrollableAncestorRects: c,
    delta: h,
    threshold: f
  } = n;
  const m = Sc({
    delta: h,
    disabled: !s
  }), [p, v] = Ll(), g = W({
    x: 0,
    y: 0
  }), b = W({
    x: 0,
    y: 0
  }), w = B(() => {
    switch (t) {
      case It.Pointer:
        return d ? {
          top: d.y,
          bottom: d.y,
          left: d.x,
          right: d.x
        } : null;
      case It.DraggableRect:
        return r;
    }
  }, [t, r, d]), S = W(null), T = I(() => {
    const x = S.current;
    if (!x)
      return;
    const y = g.current.x * b.current.x, _ = g.current.y * b.current.y;
    x.scrollBy(y, _);
  }, []), R = B(() => a === Dn.TreeOrder ? [...u].reverse() : u, [a, u]);
  V(
    () => {
      if (!s || !u.length || !w) {
        v();
        return;
      }
      for (const x of R) {
        if (i?.(x) === !1)
          continue;
        const y = u.indexOf(x), _ = c[y];
        if (!_)
          continue;
        const {
          direction: k,
          speed: F
        } = cc(x, _, w, e, f);
        for (const E of ["x", "y"])
          m[E][k[E]] || (F[E] = 0, k[E] = 0);
        if (F.x > 0 || F.y > 0) {
          v(), S.current = x, p(T, o), g.current = F, b.current = k;
          return;
        }
      }
      g.current = {
        x: 0,
        y: 0
      }, b.current = {
        x: 0,
        y: 0
      }, v();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      T,
      i,
      v,
      s,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(w),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      p,
      u,
      R,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f)
    ]
  );
}
const Cc = {
  x: {
    [ve.Backward]: !1,
    [ve.Forward]: !1
  },
  y: {
    [ve.Backward]: !1,
    [ve.Forward]: !1
  }
};
function Sc(n) {
  let {
    delta: e,
    disabled: t
  } = n;
  const i = En(e);
  return Kt((r) => {
    if (t || !i || !r)
      return Cc;
    const s = {
      x: Math.sign(e.x - i.x),
      y: Math.sign(e.y - i.y)
    };
    return {
      x: {
        [ve.Backward]: r.x[ve.Backward] || s.x === -1,
        [ve.Forward]: r.x[ve.Forward] || s.x === 1
      },
      y: {
        [ve.Backward]: r.y[ve.Backward] || s.y === -1,
        [ve.Forward]: r.y[ve.Forward] || s.y === 1
      }
    };
  }, [t, e, i]);
}
function Ec(n, e) {
  const t = e != null ? n.get(e) : void 0, i = t ? t.node.current : null;
  return Kt((r) => {
    var s;
    return e == null ? null : (s = i ?? r) != null ? s : null;
  }, [i, e]);
}
function Nc(n, e) {
  return B(() => n.reduce((t, i) => {
    const {
      sensor: r
    } = i, s = r.activators.map((o) => ({
      eventName: o.eventName,
      handler: e(o.handler, i)
    }));
    return [...t, ...s];
  }, []), [n, e]);
}
var jt;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(jt || (jt = {}));
var ci;
(function(n) {
  n.Optimized = "optimized";
})(ci || (ci = {}));
const dr = /* @__PURE__ */ new Map();
function _c(n, e) {
  let {
    dragging: t,
    dependencies: i,
    config: r
  } = e;
  const [s, o] = j(null), {
    frequency: a,
    measure: d,
    strategy: u
  } = r, c = W(n), h = g(), f = Gt(h), m = I(function(b) {
    b === void 0 && (b = []), !f.current && o((w) => w === null ? b : w.concat(b.filter((S) => !w.includes(S))));
  }, [f]), p = W(null), v = Kt((b) => {
    if (h && !t)
      return dr;
    if (!b || b === dr || c.current !== n || s != null) {
      const w = /* @__PURE__ */ new Map();
      for (let S of n) {
        if (!S)
          continue;
        if (s && s.length > 0 && !s.includes(S.id) && S.rect.current) {
          w.set(S.id, S.rect.current);
          continue;
        }
        const T = S.node.current, R = T ? new Li(d(T), T) : null;
        S.rect.current = R, R && w.set(S.id, R);
      }
      return w;
    }
    return b;
  }, [n, s, t, h, d]);
  return V(() => {
    c.current = n;
  }, [n]), V(
    () => {
      h || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, h]
  ), V(
    () => {
      s && s.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), V(
    () => {
      h || typeof a != "number" || p.current !== null || (p.current = setTimeout(() => {
        m(), p.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, h, m, ...i]
  ), {
    droppableRects: v,
    measureDroppableContainers: m,
    measuringScheduled: s != null
  };
  function g() {
    switch (u) {
      case jt.Always:
        return !1;
      case jt.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Ii(n, e) {
  return Kt((t) => n ? t || (typeof e == "function" ? e(n) : n) : null, [e, n]);
}
function Dc(n, e) {
  return Ii(n, e);
}
function Rc(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const i = qn(e), r = B(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(i);
  }, [i, t]);
  return V(() => () => r?.disconnect(), [r]), r;
}
function jn(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const i = qn(e), r = B(
    () => {
      if (t || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: s
      } = window;
      return new s(i);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  );
  return V(() => () => r?.disconnect(), [r]), r;
}
function kc(n) {
  return new Li(Et(n), n);
}
function ur(n, e, t) {
  e === void 0 && (e = kc);
  const [i, r] = j(null);
  function s() {
    r((d) => {
      if (!n)
        return null;
      if (n.isConnected === !1) {
        var u;
        return (u = d ?? t) != null ? u : null;
      }
      const c = e(n);
      return JSON.stringify(d) === JSON.stringify(c) ? d : c;
    });
  }
  const o = Rc({
    callback(d) {
      if (n)
        for (const u of d) {
          const {
            type: c,
            target: h
          } = u;
          if (c === "childList" && h instanceof HTMLElement && h.contains(n)) {
            s();
            break;
          }
        }
    }
  }), a = jn({
    callback: s
  });
  return Ue(() => {
    s(), n ? (a?.observe(n), o?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), o?.disconnect());
  }, [n]), i;
}
function Tc(n) {
  const e = Ii(n);
  return Ss(n, e);
}
const hr = [];
function Fc(n) {
  const e = W(n), t = Kt((i) => n ? i && i !== hr && n && e.current && n.parentNode === e.current.parentNode ? i : $n(n) : hr, [n]);
  return V(() => {
    e.current = n;
  }, [n]), t;
}
function Ac(n) {
  const [e, t] = j(null), i = W(n), r = I((s) => {
    const o = Yn(s.target);
    o && t((a) => a ? (a.set(o, ai(o)), new Map(a)) : null);
  }, []);
  return V(() => {
    const s = i.current;
    if (n !== s) {
      o(s);
      const a = n.map((d) => {
        const u = Yn(d);
        return u ? (u.addEventListener("scroll", r, {
          passive: !0
        }), [u, ai(u)]) : null;
      }).filter((d) => d != null);
      t(a.length ? new Map(a) : null), i.current = n;
    }
    return () => {
      o(n), o(s);
    };
    function o(a) {
      a.forEach((d) => {
        const u = Yn(d);
        u?.removeEventListener("scroll", r);
      });
    }
  }, [r, n]), B(() => n.length ? e ? Array.from(e.values()).reduce((s, o) => bt(s, o), Ve) : Ts(n) : Ve, [n, e]);
}
function fr(n, e) {
  e === void 0 && (e = []);
  const t = W(null);
  return V(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), V(() => {
    const i = n !== Ve;
    i && !t.current && (t.current = n), !i && t.current && (t.current = null);
  }, [n]), t.current ? $t(n, t.current) : Ve;
}
function Lc(n) {
  V(
    () => {
      if (!Wn)
        return;
      const e = n.map((t) => {
        let {
          sensor: i
        } = t;
        return i.setup == null ? void 0 : i.setup();
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
function Oc(n, e) {
  return B(() => n.reduce((t, i) => {
    let {
      eventName: r,
      handler: s
    } = i;
    return t[r] = (o) => {
      s(o, e);
    }, t;
  }, {}), [n, e]);
}
function Ls(n) {
  return B(() => n ? sc(n) : null, [n]);
}
const mr = [];
function Mc(n, e) {
  e === void 0 && (e = Et);
  const [t] = n, i = Ls(t ? Ne(t) : null), [r, s] = j(mr);
  function o() {
    s(() => n.length ? n.map((d) => Rs(d) ? i : new Li(e(d), d)) : mr);
  }
  const a = jn({
    callback: o
  });
  return Ue(() => {
    a?.disconnect(), o(), n.forEach((d) => a?.observe(d));
  }, [n]), r;
}
function Os(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const e = n.children[0];
  return Qt(e) ? e : n;
}
function zc(n) {
  let {
    measure: e
  } = n;
  const [t, i] = j(null), r = I((u) => {
    for (const {
      target: c
    } of u)
      if (Qt(c)) {
        i((h) => {
          const f = e(c);
          return h ? {
            ...h,
            width: f.width,
            height: f.height
          } : f;
        });
        break;
      }
  }, [e]), s = jn({
    callback: r
  }), o = I((u) => {
    const c = Os(u);
    s?.disconnect(), c && s?.observe(c), i(c ? e(c) : null);
  }, [e, s]), [a, d] = Sn(o);
  return B(() => ({
    nodeRef: a,
    rect: t,
    setRef: d
  }), [t, a, d]);
}
const Ic = [{
  sensor: zi,
  options: {}
}, {
  sensor: Oi,
  options: {}
}], Bc = {
  current: {}
}, ln = {
  draggable: {
    measure: or
  },
  droppable: {
    measure: or,
    strategy: jt.WhileDragging,
    frequency: ci.Optimized
  },
  dragOverlay: {
    measure: Et
  }
};
class Bt extends Map {
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
    var t, i;
    return (t = (i = this.get(e)) == null ? void 0 : i.node.current) != null ? t : void 0;
  }
}
const Pc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Bt(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: _n
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: ln,
  measureDroppableContainers: _n,
  windowRect: null,
  measuringScheduled: !1
}, Ms = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: _n,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: _n
}, Yt = /* @__PURE__ */ Qe(Ms), zs = /* @__PURE__ */ Qe(Pc);
function Hc() {
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
      containers: new Bt()
    }
  };
}
function Wc(n, e) {
  switch (e.type) {
    case pe.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case pe.DragMove:
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
    case pe.DragEnd:
    case pe.DragCancel:
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
    case pe.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: i
      } = t, r = new Bt(n.droppable.containers);
      return r.set(i, t), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: r
        }
      };
    }
    case pe.SetDroppableDisabled: {
      const {
        id: t,
        key: i,
        disabled: r
      } = e, s = n.droppable.containers.get(t);
      if (!s || i !== s.key)
        return n;
      const o = new Bt(n.droppable.containers);
      return o.set(t, {
        ...s,
        disabled: r
      }), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: o
        }
      };
    }
    case pe.UnregisterDroppable: {
      const {
        id: t,
        key: i
      } = e, r = n.droppable.containers.get(t);
      if (!r || i !== r.key)
        return n;
      const s = new Bt(n.droppable.containers);
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
function qc(n) {
  let {
    disabled: e
  } = n;
  const {
    active: t,
    activatorEvent: i,
    draggableNodes: r
  } = Re(Yt), s = En(i), o = En(t?.id);
  return V(() => {
    if (!e && !i && s && o != null) {
      if (!Gn(s) || document.activeElement === s.target)
        return;
      const a = r.get(o);
      if (!a)
        return;
      const {
        activatorNode: d,
        node: u
      } = a;
      if (!d.current && !u.current)
        return;
      requestAnimationFrame(() => {
        for (const c of [d.current, u.current]) {
          if (!c)
            continue;
          const h = zl(c);
          if (h) {
            h.focus();
            break;
          }
        }
      });
    }
  }, [i, e, r, o, s]), null;
}
function Is(n, e) {
  let {
    transform: t,
    ...i
  } = e;
  return n != null && n.length ? n.reduce((r, s) => s({
    transform: r,
    ...i
  }), t) : t;
}
function Gc(n) {
  return B(
    () => ({
      draggable: {
        ...ln.draggable,
        ...n?.draggable
      },
      droppable: {
        ...ln.droppable,
        ...n?.droppable
      },
      dragOverlay: {
        ...ln.dragOverlay,
        ...n?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n?.draggable, n?.droppable, n?.dragOverlay]
  );
}
function $c(n) {
  let {
    activeNode: e,
    measure: t,
    initialRect: i,
    config: r = !0
  } = n;
  const s = W(!1), {
    x: o,
    y: a
  } = typeof r == "boolean" ? {
    x: r,
    y: r
  } : r;
  Ue(() => {
    if (!o && !a || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !i)
      return;
    const u = e?.node.current;
    if (!u || u.isConnected === !1)
      return;
    const c = t(u), h = Ss(c, i);
    if (o || (h.x = 0), a || (h.y = 0), s.current = !0, Math.abs(h.x) > 0 || Math.abs(h.y) > 0) {
      const f = Ns(u);
      f && f.scrollBy({
        top: h.y,
        left: h.x
      });
    }
  }, [e, o, a, i, t]);
}
const Un = /* @__PURE__ */ Qe({
  ...Ve,
  scaleX: 1,
  scaleY: 1
});
var dt;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(dt || (dt = {}));
const jc = /* @__PURE__ */ os(function(e) {
  var t, i, r, s;
  let {
    id: o,
    accessibility: a,
    autoScroll: d = !0,
    children: u,
    sensors: c = Ic,
    collisionDetection: h = Zl,
    measuring: f,
    modifiers: m,
    ...p
  } = e;
  const v = $a(Wc, void 0, Hc), [g, b] = v, [w, S] = ql(), [T, R] = j(dt.Uninitialized), x = T === dt.Initialized, {
    draggable: {
      active: y,
      nodes: _,
      translate: k
    },
    droppable: {
      containers: F
    }
  } = g, E = y != null ? _.get(y) : null, M = W({
    initial: null,
    translated: null
  }), D = B(() => {
    var xe;
    return y != null ? {
      id: y,
      // It's possible for the active node to unmount while dragging
      data: (xe = E?.data) != null ? xe : Bc,
      rect: M
    } : null;
  }, [y, E]), A = W(null), [L, O] = j(null), [z, K] = j(null), $ = Gt(p, Object.values(p)), ee = Xt("DndDescribedBy", o), re = B(() => F.getEnabled(), [F]), te = Gc(f), {
    droppableRects: q,
    measureDroppableContainers: ne,
    measuringScheduled: fe
  } = _c(re, {
    dragging: x,
    dependencies: [k.x, k.y],
    config: te.droppable
  }), le = Ec(_, y), Y = B(() => z ? Nn(z) : null, [z]), Z = Mo(), ie = Dc(le, te.draggable.measure);
  $c({
    activeNode: y != null ? _.get(y) : null,
    config: Z.layoutShiftCompensation,
    initialRect: ie,
    measure: te.draggable.measure
  });
  const H = ur(le, te.draggable.measure, ie), X = ur(le ? le.parentElement : null), U = W({
    activatorEvent: null,
    active: null,
    activeNode: le,
    collisionRect: null,
    collisions: null,
    droppableRects: q,
    draggableNodes: _,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: F,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), me = F.getNodeFor((t = U.current.over) == null ? void 0 : t.id), be = zc({
    measure: te.dragOverlay.measure
  }), Me = (i = be.nodeRef.current) != null ? i : le, ze = x ? (r = be.rect) != null ? r : H : null, rt = !!(be.nodeRef.current && be.rect), Ke = Tc(rt ? null : H), ge = Ls(Me ? Ne(Me) : null), Ie = Fc(x ? me ?? le : null), Xe = Mc(Ie), Be = Is(m, {
    transform: {
      x: k.x - Ke.x,
      y: k.y - Ke.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: z,
    active: D,
    activeNodeRect: H,
    containerNodeRect: X,
    draggingNodeRect: ze,
    over: U.current.over,
    overlayNodeRect: be.rect,
    scrollableAncestors: Ie,
    scrollableAncestorRects: Xe,
    windowRect: ge
  }), Ge = Y ? bt(Y, k) : null, et = Ac(Ie), Vn = fr(et), Jt = fr(et, [H]), tt = bt(Be, Vn), gt = ze ? nc(ze, Be) : null, _t = D && gt ? h({
    active: D,
    collisionRect: gt,
    droppableRects: q,
    droppableContainers: re,
    pointerCoordinates: Ge
  }) : null, Vi = Cs(_t, "id"), [st, Qi] = j(null), To = rt ? Be : bt(Be, Jt), Fo = ec(To, (s = st?.rect) != null ? s : null, H), Qn = W(null), Ki = I(
    (xe, ke) => {
      let {
        sensor: Te,
        options: ot
      } = ke;
      if (A.current == null)
        return;
      const Pe = _.get(A.current);
      if (!Pe)
        return;
      const Fe = xe.nativeEvent, Ye = new Te({
        active: A.current,
        activeNode: Pe,
        event: Fe,
        options: ot,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: U,
        onAbort(ye) {
          if (!_.get(ye))
            return;
          const {
            onDragAbort: Je
          } = $.current, nt = {
            id: ye
          };
          Je?.(nt), w({
            type: "onDragAbort",
            event: nt
          });
        },
        onPending(ye, at, Je, nt) {
          if (!_.get(ye))
            return;
          const {
            onDragPending: Rt
          } = $.current, lt = {
            id: ye,
            constraint: at,
            initialCoordinates: Je,
            offset: nt
          };
          Rt?.(lt), w({
            type: "onDragPending",
            event: lt
          });
        },
        onStart(ye) {
          const at = A.current;
          if (at == null)
            return;
          const Je = _.get(at);
          if (!Je)
            return;
          const {
            onDragStart: nt
          } = $.current, Dt = {
            activatorEvent: Fe,
            active: {
              id: at,
              data: Je.data,
              rect: M
            }
          };
          tn(() => {
            nt?.(Dt), R(dt.Initializing), b({
              type: pe.DragStart,
              initialCoordinates: ye,
              active: at
            }), w({
              type: "onDragStart",
              event: Dt
            }), O(Qn.current), K(Fe);
          });
        },
        onMove(ye) {
          b({
            type: pe.DragMove,
            coordinates: ye
          });
        },
        onEnd: pt(pe.DragEnd),
        onCancel: pt(pe.DragCancel)
      });
      Qn.current = Ye;
      function pt(ye) {
        return async function() {
          const {
            active: Je,
            collisions: nt,
            over: Dt,
            scrollAdjustedTranslate: Rt
          } = U.current;
          let lt = null;
          if (Je && Rt) {
            const {
              cancelDrop: kt
            } = $.current;
            lt = {
              activatorEvent: Fe,
              active: Je,
              collisions: nt,
              delta: Rt,
              over: Dt
            }, ye === pe.DragEnd && typeof kt == "function" && await Promise.resolve(kt(lt)) && (ye = pe.DragCancel);
          }
          A.current = null, tn(() => {
            b({
              type: ye
            }), R(dt.Uninitialized), Qi(null), O(null), K(null), Qn.current = null;
            const kt = ye === pe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (lt) {
              const Kn = $.current[kt];
              Kn?.(lt), w({
                type: kt,
                event: lt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [_]
  ), Ao = I((xe, ke) => (Te, ot) => {
    const Pe = Te.nativeEvent, Fe = _.get(ot);
    if (
      // Another sensor is already instantiating
      A.current !== null || // No active draggable
      !Fe || // Event has already been captured
      Pe.dndKit || Pe.defaultPrevented
    )
      return;
    const Ye = {
      active: Fe
    };
    xe(Te, ke.options, Ye) === !0 && (Pe.dndKit = {
      capturedBy: ke.sensor
    }, A.current = ot, Ki(Te, ke));
  }, [_, Ki]), Xi = Nc(c, Ao);
  Lc(c), Ue(() => {
    H && T === dt.Initializing && R(dt.Initialized);
  }, [H, T]), V(
    () => {
      const {
        onDragMove: xe
      } = $.current, {
        active: ke,
        activatorEvent: Te,
        collisions: ot,
        over: Pe
      } = U.current;
      if (!ke || !Te)
        return;
      const Fe = {
        active: ke,
        activatorEvent: Te,
        collisions: ot,
        delta: {
          x: tt.x,
          y: tt.y
        },
        over: Pe
      };
      tn(() => {
        xe?.(Fe), w({
          type: "onDragMove",
          event: Fe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tt.x, tt.y]
  ), V(
    () => {
      const {
        active: xe,
        activatorEvent: ke,
        collisions: Te,
        droppableContainers: ot,
        scrollAdjustedTranslate: Pe
      } = U.current;
      if (!xe || A.current == null || !ke || !Pe)
        return;
      const {
        onDragOver: Fe
      } = $.current, Ye = ot.get(Vi), pt = Ye && Ye.rect.current ? {
        id: Ye.id,
        rect: Ye.rect.current,
        data: Ye.data,
        disabled: Ye.disabled
      } : null, ye = {
        active: xe,
        activatorEvent: ke,
        collisions: Te,
        delta: {
          x: Pe.x,
          y: Pe.y
        },
        over: pt
      };
      tn(() => {
        Qi(pt), Fe?.(ye), w({
          type: "onDragOver",
          event: ye
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Vi]
  ), Ue(() => {
    U.current = {
      activatorEvent: z,
      active: D,
      activeNode: le,
      collisionRect: gt,
      collisions: _t,
      droppableRects: q,
      draggableNodes: _,
      draggingNode: Me,
      draggingNodeRect: ze,
      droppableContainers: F,
      over: st,
      scrollableAncestors: Ie,
      scrollAdjustedTranslate: tt
    }, M.current = {
      initial: ze,
      translated: gt
    };
  }, [D, le, _t, gt, _, Me, ze, q, F, st, Ie, tt]), wc({
    ...Z,
    delta: k,
    draggingRect: gt,
    pointerCoordinates: Ge,
    scrollableAncestors: Ie,
    scrollableAncestorRects: Xe
  });
  const Lo = B(() => ({
    active: D,
    activeNode: le,
    activeNodeRect: H,
    activatorEvent: z,
    collisions: _t,
    containerNodeRect: X,
    dragOverlay: be,
    draggableNodes: _,
    droppableContainers: F,
    droppableRects: q,
    over: st,
    measureDroppableContainers: ne,
    scrollableAncestors: Ie,
    scrollableAncestorRects: Xe,
    measuringConfiguration: te,
    measuringScheduled: fe,
    windowRect: ge
  }), [D, le, H, z, _t, X, be, _, F, q, st, ne, Ie, Xe, te, fe, ge]), Oo = B(() => ({
    activatorEvent: z,
    activators: Xi,
    active: D,
    activeNodeRect: H,
    ariaDescribedById: {
      draggable: ee
    },
    dispatch: b,
    draggableNodes: _,
    over: st,
    measureDroppableContainers: ne
  }), [z, Xi, D, H, b, ee, _, st, ne]);
  return ae.createElement(ws.Provider, {
    value: S
  }, ae.createElement(Yt.Provider, {
    value: Oo
  }, ae.createElement(zs.Provider, {
    value: Lo
  }, ae.createElement(Un.Provider, {
    value: Fo
  }, u)), ae.createElement(qc, {
    disabled: a?.restoreFocus === !1
  })), ae.createElement(jl, {
    ...a,
    hiddenTextDescribedById: ee
  }));
  function Mo() {
    const xe = L?.autoScrollEnabled === !1, ke = typeof d == "object" ? d.enabled === !1 : d === !1, Te = x && !xe && !ke;
    return typeof d == "object" ? {
      ...d,
      enabled: Te
    } : {
      enabled: Te
    };
  }
}), Uc = /* @__PURE__ */ Qe(null), gr = "button", Vc = "Draggable";
function Qc(n) {
  let {
    id: e,
    data: t,
    disabled: i = !1,
    attributes: r
  } = n;
  const s = Xt(Vc), {
    activators: o,
    activatorEvent: a,
    active: d,
    activeNodeRect: u,
    ariaDescribedById: c,
    draggableNodes: h,
    over: f
  } = Re(Yt), {
    role: m = gr,
    roleDescription: p = "draggable",
    tabIndex: v = 0
  } = r ?? {}, g = d?.id === e, b = Re(g ? Un : Uc), [w, S] = Sn(), [T, R] = Sn(), x = Oc(o, e), y = Gt(t);
  Ue(
    () => (h.set(e, {
      id: e,
      key: s,
      node: w,
      activatorNode: T,
      data: y
    }), () => {
      const k = h.get(e);
      k && k.key === s && h.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h, e]
  );
  const _ = B(() => ({
    role: m,
    tabIndex: v,
    "aria-disabled": i,
    "aria-pressed": g && m === gr ? !0 : void 0,
    "aria-roledescription": p,
    "aria-describedby": c.draggable
  }), [i, m, v, g, p, c.draggable]);
  return {
    active: d,
    activatorEvent: a,
    activeNodeRect: u,
    attributes: _,
    isDragging: g,
    listeners: i ? void 0 : x,
    node: w,
    over: f,
    setNodeRef: S,
    setActivatorNodeRef: R,
    transform: b
  };
}
function Bs() {
  return Re(zs);
}
const Kc = "Droppable", Xc = {
  timeout: 25
};
function Yc(n) {
  let {
    data: e,
    disabled: t = !1,
    id: i,
    resizeObserverConfig: r
  } = n;
  const s = Xt(Kc), {
    active: o,
    dispatch: a,
    over: d,
    measureDroppableContainers: u
  } = Re(Yt), c = W({
    disabled: t
  }), h = W(!1), f = W(null), m = W(null), {
    disabled: p,
    updateMeasurementsFor: v,
    timeout: g
  } = {
    ...Xc,
    ...r
  }, b = Gt(v ?? i), w = I(
    () => {
      if (!h.current) {
        h.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        u(Array.isArray(b.current) ? b.current : [b.current]), m.current = null;
      }, g);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), S = jn({
    callback: w,
    disabled: p || !o
  }), T = I((_, k) => {
    S && (k && (S.unobserve(k), h.current = !1), _ && S.observe(_));
  }, [S]), [R, x] = Sn(T), y = Gt(e);
  return V(() => {
    !S || !R.current || (S.disconnect(), h.current = !1, S.observe(R.current));
  }, [R, S]), V(
    () => (a({
      type: pe.RegisterDroppable,
      element: {
        id: i,
        key: s,
        disabled: t,
        node: R,
        rect: f,
        data: y
      }
    }), () => a({
      type: pe.UnregisterDroppable,
      key: s,
      id: i
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i]
  ), V(() => {
    t !== c.current.disabled && (a({
      type: pe.SetDroppableDisabled,
      id: i,
      key: s,
      disabled: t
    }), c.current.disabled = t);
  }, [i, s, t, a]), {
    active: o,
    rect: f,
    isOver: d?.id === i,
    node: R,
    over: d,
    setNodeRef: x
  };
}
function Jc(n) {
  let {
    animation: e,
    children: t
  } = n;
  const [i, r] = j(null), [s, o] = j(null), a = En(t);
  return !t && !i && a && r(a), Ue(() => {
    if (!s)
      return;
    const d = i?.key, u = i?.props.id;
    if (d == null || u == null) {
      r(null);
      return;
    }
    Promise.resolve(e(u, s)).then(() => {
      r(null);
    });
  }, [e, i, s]), ae.createElement(ae.Fragment, null, t, i ? ja(i, {
    ref: o
  }) : null);
}
const Zc = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function ed(n) {
  let {
    children: e
  } = n;
  return ae.createElement(Yt.Provider, {
    value: Ms
  }, ae.createElement(Un.Provider, {
    value: Zc
  }, e));
}
const td = {
  position: "fixed",
  touchAction: "none"
}, nd = (n) => Gn(n) ? "transform 250ms ease" : void 0, id = /* @__PURE__ */ qe((n, e) => {
  let {
    as: t,
    activatorEvent: i,
    adjustScale: r,
    children: s,
    className: o,
    rect: a,
    style: d,
    transform: u,
    transition: c = nd
  } = n;
  if (!a)
    return null;
  const h = r ? u : {
    ...u,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...td,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: ut.Transform.toString(h),
    transformOrigin: r && i ? Ql(i, a) : void 0,
    transition: typeof c == "function" ? c(i) : c,
    ...d
  };
  return ae.createElement(t, {
    className: o,
    style: f,
    ref: e
  }, s);
}), rd = (n) => (e) => {
  let {
    active: t,
    dragOverlay: i
  } = e;
  const r = {}, {
    styles: s,
    className: o
  } = n;
  if (s != null && s.active)
    for (const [a, d] of Object.entries(s.active))
      d !== void 0 && (r[a] = t.node.style.getPropertyValue(a), t.node.style.setProperty(a, d));
  if (s != null && s.dragOverlay)
    for (const [a, d] of Object.entries(s.dragOverlay))
      d !== void 0 && i.node.style.setProperty(a, d);
  return o != null && o.active && t.node.classList.add(o.active), o != null && o.dragOverlay && i.node.classList.add(o.dragOverlay), function() {
    for (const [d, u] of Object.entries(r))
      t.node.style.setProperty(d, u);
    o != null && o.active && t.node.classList.remove(o.active);
  };
}, sd = (n) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = n;
  return [{
    transform: ut.Transform.toString(e)
  }, {
    transform: ut.Transform.toString(t)
  }];
}, od = {
  duration: 250,
  easing: "ease",
  keyframes: sd,
  sideEffects: /* @__PURE__ */ rd({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function ad(n) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: i,
    measuringConfiguration: r
  } = n;
  return qn((s, o) => {
    if (e === null)
      return;
    const a = t.get(s);
    if (!a)
      return;
    const d = a.node.current;
    if (!d)
      return;
    const u = Os(o);
    if (!u)
      return;
    const {
      transform: c
    } = Ne(o).getComputedStyle(o), h = Es(c);
    if (!h)
      return;
    const f = typeof e == "function" ? e : ld(e);
    return Fs(d, r.draggable.measure), f({
      active: {
        id: s,
        data: a.data,
        node: d,
        rect: r.draggable.measure(d)
      },
      draggableNodes: t,
      dragOverlay: {
        node: o,
        rect: r.dragOverlay.measure(u)
      },
      droppableContainers: i,
      measuringConfiguration: r,
      transform: h
    });
  });
}
function ld(n) {
  const {
    duration: e,
    easing: t,
    sideEffects: i,
    keyframes: r
  } = {
    ...od,
    ...n
  };
  return (s) => {
    let {
      active: o,
      dragOverlay: a,
      transform: d,
      ...u
    } = s;
    if (!e)
      return;
    const c = {
      x: a.rect.left - o.rect.left,
      y: a.rect.top - o.rect.top
    }, h = {
      scaleX: d.scaleX !== 1 ? o.rect.width * d.scaleX / a.rect.width : 1,
      scaleY: d.scaleY !== 1 ? o.rect.height * d.scaleY / a.rect.height : 1
    }, f = {
      x: d.x - c.x,
      y: d.y - c.y,
      ...h
    }, m = r({
      ...u,
      active: o,
      dragOverlay: a,
      transform: {
        initial: d,
        final: f
      }
    }), [p] = m, v = m[m.length - 1];
    if (JSON.stringify(p) === JSON.stringify(v))
      return;
    const g = i?.({
      active: o,
      dragOverlay: a,
      ...u
    }), b = a.node.animate(m, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((w) => {
      b.onfinish = () => {
        g?.(), w();
      };
    });
  };
}
let pr = 0;
function cd(n) {
  return B(() => {
    if (n != null)
      return pr++, pr;
  }, [n]);
}
const dd = /* @__PURE__ */ ae.memo((n) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: i,
    style: r,
    transition: s,
    modifiers: o,
    wrapperElement: a = "div",
    className: d,
    zIndex: u = 999
  } = n;
  const {
    activatorEvent: c,
    active: h,
    activeNodeRect: f,
    containerNodeRect: m,
    draggableNodes: p,
    droppableContainers: v,
    dragOverlay: g,
    over: b,
    measuringConfiguration: w,
    scrollableAncestors: S,
    scrollableAncestorRects: T,
    windowRect: R
  } = Bs(), x = Re(Un), y = cd(h?.id), _ = Is(o, {
    activatorEvent: c,
    active: h,
    activeNodeRect: f,
    containerNodeRect: m,
    draggingNodeRect: g.rect,
    over: b,
    overlayNodeRect: g.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: T,
    transform: x,
    windowRect: R
  }), k = Ii(f), F = ad({
    config: i,
    draggableNodes: p,
    droppableContainers: v,
    measuringConfiguration: w
  }), E = k ? g.setRef : void 0;
  return ae.createElement(ed, null, ae.createElement(Jc, {
    animation: F
  }, h && y ? ae.createElement(id, {
    key: y,
    id: h.id,
    ref: E,
    as: a,
    activatorEvent: c,
    adjustScale: e,
    className: d,
    transition: s,
    rect: k,
    style: {
      zIndex: u,
      ...r
    },
    transform: _
  }, t) : null));
});
function Bi(n, e, t) {
  const i = n.slice();
  return i.splice(t < 0 ? i.length + t : t, 0, i.splice(e, 1)[0]), i;
}
function ud(n, e) {
  return n.reduce((t, i, r) => {
    const s = e.get(i);
    return s && (t[r] = s), t;
  }, Array(n.length));
}
function rn(n) {
  return n !== null && n >= 0;
}
function hd(n, e) {
  if (n === e)
    return !0;
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function fd(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const Ps = (n) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: i,
    index: r
  } = n;
  const s = Bi(e, i, t), o = e[r], a = s[r];
  return !a || !o ? null : {
    x: a.left - o.left,
    y: a.top - o.top,
    scaleX: a.width / o.width,
    scaleY: a.height / o.height
  };
}, Hs = "Sortable", Ws = /* @__PURE__ */ ae.createContext({
  activeIndex: -1,
  containerId: Hs,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Ps,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function md(n) {
  let {
    children: e,
    id: t,
    items: i,
    strategy: r = Ps,
    disabled: s = !1
  } = n;
  const {
    active: o,
    dragOverlay: a,
    droppableRects: d,
    over: u,
    measureDroppableContainers: c
  } = Bs(), h = Xt(Hs, t), f = a.rect !== null, m = B(() => i.map((x) => typeof x == "object" && "id" in x ? x.id : x), [i]), p = o != null, v = o ? m.indexOf(o.id) : -1, g = u ? m.indexOf(u.id) : -1, b = W(m), w = !hd(m, b.current), S = g !== -1 && v === -1 || w, T = fd(s);
  Ue(() => {
    w && p && c(m);
  }, [w, m, p, c]), V(() => {
    b.current = m;
  }, [m]);
  const R = B(
    () => ({
      activeIndex: v,
      containerId: h,
      disabled: T,
      disableTransforms: S,
      items: m,
      overIndex: g,
      useDragOverlay: f,
      sortedRects: ud(m, d),
      strategy: r
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, h, T.draggable, T.droppable, S, m, g, d, f, r]
  );
  return ae.createElement(Ws.Provider, {
    value: R
  }, e);
}
const gd = (n) => {
  let {
    id: e,
    items: t,
    activeIndex: i,
    overIndex: r
  } = n;
  return Bi(t, i, r).indexOf(e);
}, pd = (n) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: i,
    index: r,
    items: s,
    newIndex: o,
    previousItems: a,
    previousContainerId: d,
    transition: u
  } = n;
  return !u || !i || a !== s && r === o ? !1 : t ? !0 : o !== r && e === d;
}, vd = {
  duration: 200,
  easing: "ease"
}, qs = "transform", bd = /* @__PURE__ */ ut.Transition.toString({
  property: qs,
  duration: 0,
  easing: "linear"
}), yd = {
  roleDescription: "sortable"
};
function xd(n) {
  let {
    disabled: e,
    index: t,
    node: i,
    rect: r
  } = n;
  const [s, o] = j(null), a = W(t);
  return Ue(() => {
    if (!e && t !== a.current && i.current) {
      const d = r.current;
      if (d) {
        const u = Et(i.current, {
          ignoreTransform: !0
        }), c = {
          x: d.left - u.left,
          y: d.top - u.top,
          scaleX: d.width / u.width,
          scaleY: d.height / u.height
        };
        (c.x || c.y) && o(c);
      }
    }
    t !== a.current && (a.current = t);
  }, [e, t, i, r]), V(() => {
    s && o(null);
  }, [s]), s;
}
function wd(n) {
  let {
    animateLayoutChanges: e = pd,
    attributes: t,
    disabled: i,
    data: r,
    getNewIndex: s = gd,
    id: o,
    strategy: a,
    resizeObserverConfig: d,
    transition: u = vd
  } = n;
  const {
    items: c,
    containerId: h,
    activeIndex: f,
    disabled: m,
    disableTransforms: p,
    sortedRects: v,
    overIndex: g,
    useDragOverlay: b,
    strategy: w
  } = Re(Ws), S = Cd(i, m), T = c.indexOf(o), R = B(() => ({
    sortable: {
      containerId: h,
      index: T,
      items: c
    },
    ...r
  }), [h, r, T, c]), x = B(() => c.slice(c.indexOf(o)), [c, o]), {
    rect: y,
    node: _,
    isOver: k,
    setNodeRef: F
  } = Yc({
    id: o,
    data: R,
    disabled: S.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: x,
      ...d
    }
  }), {
    active: E,
    activatorEvent: M,
    activeNodeRect: D,
    attributes: A,
    setNodeRef: L,
    listeners: O,
    isDragging: z,
    over: K,
    setActivatorNodeRef: $,
    transform: ee
  } = Qc({
    id: o,
    data: R,
    attributes: {
      ...yd,
      ...t
    },
    disabled: S.draggable
  }), re = Al(F, L), te = !!E, q = te && !p && rn(f) && rn(g), ne = !b && z, fe = ne && q ? ee : null, Y = q ? fe ?? (a ?? w)({
    rects: v,
    activeNodeRect: D,
    activeIndex: f,
    overIndex: g,
    index: T
  }) : null, Z = rn(f) && rn(g) ? s({
    id: o,
    items: c,
    activeIndex: f,
    overIndex: g
  }) : T, ie = E?.id, H = W({
    activeId: ie,
    items: c,
    newIndex: Z,
    containerId: h
  }), X = c !== H.current.items, U = e({
    active: E,
    containerId: h,
    isDragging: z,
    isSorting: te,
    id: o,
    index: T,
    items: c,
    newIndex: H.current.newIndex,
    previousItems: H.current.items,
    previousContainerId: H.current.containerId,
    transition: u,
    wasDragging: H.current.activeId != null
  }), me = xd({
    disabled: !U,
    index: T,
    node: _,
    rect: y
  });
  return V(() => {
    te && H.current.newIndex !== Z && (H.current.newIndex = Z), h !== H.current.containerId && (H.current.containerId = h), c !== H.current.items && (H.current.items = c);
  }, [te, Z, h, c]), V(() => {
    if (ie === H.current.activeId)
      return;
    if (ie != null && H.current.activeId == null) {
      H.current.activeId = ie;
      return;
    }
    const Me = setTimeout(() => {
      H.current.activeId = ie;
    }, 50);
    return () => clearTimeout(Me);
  }, [ie]), {
    active: E,
    activeIndex: f,
    attributes: A,
    data: R,
    rect: y,
    index: T,
    newIndex: Z,
    items: c,
    isOver: k,
    isSorting: te,
    isDragging: z,
    listeners: O,
    node: _,
    overIndex: g,
    over: K,
    setNodeRef: re,
    setActivatorNodeRef: $,
    setDroppableNodeRef: F,
    setDraggableNodeRef: L,
    transform: me ?? Y,
    transition: be()
  };
  function be() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      me || // Or to prevent items jumping to back to their "new" position when items change
      X && H.current.newIndex === T
    )
      return bd;
    if (!(ne && !Gn(M) || !u) && (te || U))
      return ut.Transition.toString({
        ...u,
        property: qs
      });
  }
}
function Cd(n, e) {
  var t, i;
  return typeof n == "boolean" ? {
    draggable: n,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (t = n?.draggable) != null ? t : e.draggable,
    droppable: (i = n?.droppable) != null ? i : e.droppable
  };
}
function Rn(n) {
  if (!n)
    return !1;
  const e = n.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const Sd = [J.Down, J.Right, J.Up, J.Left], Ed = (n, e) => {
  let {
    context: {
      active: t,
      collisionRect: i,
      droppableRects: r,
      droppableContainers: s,
      over: o,
      scrollableAncestors: a
    }
  } = e;
  if (Sd.includes(n.code)) {
    if (n.preventDefault(), !t || !i)
      return;
    const d = [];
    s.getEnabled().forEach((h) => {
      if (!h || h != null && h.disabled)
        return;
      const f = r.get(h.id);
      if (f)
        switch (n.code) {
          case J.Down:
            i.top < f.top && d.push(h);
            break;
          case J.Up:
            i.top > f.top && d.push(h);
            break;
          case J.Left:
            i.left > f.left && d.push(h);
            break;
          case J.Right:
            i.left < f.left && d.push(h);
            break;
        }
    });
    const u = Yl({
      collisionRect: i,
      droppableRects: r,
      droppableContainers: d
    });
    let c = Cs(u, "id");
    if (c === o?.id && u.length > 1 && (c = u[1].id), c != null) {
      const h = s.get(t.id), f = s.get(c), m = f ? r.get(f.id) : null, p = f?.node.current;
      if (p && m && h && f) {
        const g = $n(p).some((x, y) => a[y] !== x), b = Gs(h, f), w = Nd(h, f), S = g || !b ? {
          x: 0,
          y: 0
        } : {
          x: w ? i.width - m.width : 0,
          y: w ? i.height - m.height : 0
        }, T = {
          x: m.left,
          y: m.top
        };
        return S.x && S.y ? T : $t(T, S);
      }
    }
  }
};
function Gs(n, e) {
  return !Rn(n) || !Rn(e) ? !1 : n.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Nd(n, e) {
  return !Rn(n) || !Rn(e) || !Gs(n, e) ? !1 : n.data.current.sortable.index < e.data.current.sortable.index;
}
const vr = ({ id: n, children: e }) => {
  const { attributes: t, listeners: i, setNodeRef: r, transform: s, transition: o } = wd({ id: n }), a = {
    transform: ut.Translate.toString(s),
    transition: o,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return /* @__PURE__ */ l("div", { ref: r, style: a, ...t, ...i, children: e });
}, Pi = ({
  blocks: n,
  sortable: e = !1,
  onSort: t = () => {
  },
  main: i = !1
}) => {
  const [r, s] = j([]);
  Mr(() => {
    s(
      n.map((h, f) => ({
        id: h.id ?? f.toString(),
        render: h.render
      }))
    );
  }, [n]);
  const [o, a] = j(null), d = Ul(
    rr(zi),
    rr(Oi, {
      coordinateGetter: Ed
    })
  ), u = (h) => {
    a(h.active.id);
  }, c = (h) => {
    const { active: f, over: m } = h;
    a(null), m && f.id !== m.id && s((p) => {
      const v = p.findIndex((b) => b.id === f.id), g = p.findIndex((b) => b.id === m.id);
      return Bi(p, v, g);
    });
  };
  return /* @__PURE__ */ l("div", { className: P("flex flex-wrap items-stretch gap-4", i && "flex-1"), children: /* @__PURE__ */ C(
    jc,
    {
      sensors: d,
      onDragStart: u,
      onDragEnd: c,
      children: [
        /* @__PURE__ */ l(md, { items: r, children: r.map((h) => /* @__PURE__ */ l(vr, { id: h.id, children: h.render }, h.id)) }),
        /* @__PURE__ */ l(dd, { children: o ? /* @__PURE__ */ l(vr, { id: o, children: r.find((h) => h.id === o)?.render }) : null })
      ]
    }
  ) });
};
Pi.displayName = "GroupMasonry";
Pi.__isPageLayoutGroup = !0;
const _d = qe(function({ children: e, aside: t, header: i, variant: r = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && bs("Page", e, ["block", "group"]), /* @__PURE__ */ l("div", { ref: s, className: "h-full", children: /* @__PURE__ */ C(
    "div",
    {
      className: P(
        "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
        "flex-col",
        "overflow-y-auto",
        "md:sticky md:top-0 md:max-h-full"
      ),
      children: [
        /* @__PURE__ */ C(
          "main",
          {
            className: P(
              "sm:min-h-xs h-fit border-0",
              "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2",
              "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden",
              r === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
              "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
            ),
            children: [
              i && /* @__PURE__ */ l(
                "header",
                {
                  className: P(
                    "sticky top-0 z-30 bg-f1-background"
                  ),
                  children: i
                }
              ),
              /* @__PURE__ */ l("div", { className: "flex-1", children: e })
            ]
          }
        ),
        t && /* @__PURE__ */ l(
          "aside",
          {
            className: P(
              "min-w-30 sm:basis-1/4 md:max-w-80",
              "order-2",
              r === "aside-main" ? "md:order-1" : "md:order-3"
            ),
            children: t
          }
        )
      ]
    }
  ) });
}), Xh = {
  Page: se(Oe("Page", _d)),
  Block: se(Oe("Block", Hn)),
  BlockContent: se(
    Oe("BlockContent", kl)
  ),
  Group: se(Oe("Group", Ti)),
  GroupGrid: se(
    Oe("GroupGrid", Pn)
  ),
  GroupMasonry: se(
    Oe("GroupMasonry", Pi)
  )
}, Yh = tl, Jh = il, Zh = se(
  Tn(
    {
      name: "HomeLayout",
      type: "layout"
    },
    Za
  )
);
var ei, br;
function Dd() {
  if (br) return ei;
  br = 1;
  var n = Ho();
  function e(t) {
    var i = t == null ? 0 : t.length;
    return i ? n(t, 1) : [];
  }
  return ei = e, ei;
}
const ef = [
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
], Rd = (n) => typeof n == "boolean" || !n ? {
  show: !!n,
  invertStatus: !1
} : {
  show: n.show ?? !0,
  invertStatus: n.invertStatus ?? !1
}, $s = ({ label: n, ...e }) => {
  const t = Wo(), i = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), r = Rd(e.trend), s = t(e.comparison), o = qo(
    i.numericValue,
    i.formatterOptions
  ), a = Ji(s.numericValue), d = Ji(i.numericValue), u = B(() => {
    if (!(!a || !r.show) && !(!a || !d))
      return (d - a) / a * 100;
  }, [d, a, r.show]);
  return /* @__PURE__ */ C("div", { className: "flex flex-col gap-2", children: [
    n && /* @__PURE__ */ l("div", { children: n }),
    /* @__PURE__ */ C("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ l("span", { className: "font-bold text-2xl", children: o }),
      a !== void 0 && /* @__PURE__ */ l(
        Go,
        {
          percentage: u,
          amount: s,
          invertStatus: r.invertStatus,
          hint: e.comparisonHint
        }
      )
    ] })
  ] });
}, kd = () => /* @__PURE__ */ C("div", { className: "relative flex h-full w-full cursor-progress flex-col gap-2", children: [
  /* @__PURE__ */ l(de, { className: "h-3 w-full max-w-16 rounded-md" }),
  /* @__PURE__ */ C("div", { className: "flex flex-row flex-wrap items-end gap-2", children: [
    /* @__PURE__ */ l(de, { className: "h-8 w-full max-w-36 rounded-sm" }),
    /* @__PURE__ */ l(de, { className: "h-6 w-full max-w-18 rounded-sm" })
  ] })
] });
$s.displayName = "F0BigNumber";
const Td = zr($s, kd), tf = se(Td), nf = $o.filter(
  (n) => n !== "ai"
), rf = Br, sf = ["default", "outline", "neutral"], of = Br, af = ["split", "dropdown"], lf = jo, js = {
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
}, Us = {
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
}, Fd = {}, Ad = {
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
}, Ld = {
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
}, Od = {
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
}, Md = {
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
}, zd = {
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
}, Id = {
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
}, Vs = {
  width: Ad,
  height: Ld,
  minWidth: Od,
  minHeight: Md,
  maxWidth: zd,
  maxHeight: Id
}, Qs = {
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
}, Ks = {
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
}, Xs = {
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
}, Bd = {}, Ys = {
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
}, Js = {
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
}, Pd = {}, Hd = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, Zs = {
  overflow: Hd,
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
}, Wd = {}, eo = {
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
}, qd = {}, Gd = {
  ...Qs,
  ...eo,
  ...Js,
  ...Xs,
  ...Ys,
  ...Vs,
  ...js,
  ...Us,
  ...Zs,
  ...Ks
};
function $d(n, e) {
  return e.split(" ").map((t) => `${n}:${t}`).join(" ");
}
function jd(n, e) {
  const t = [];
  for (const [i, r] of Object.entries(e)) {
    if (r == null) continue;
    const s = Gd[i];
    if (!s) continue;
    const o = s[String(r)];
    o && t.push($d(n, o));
  }
  return t.join(" ");
}
const Ud = ht({
  base: "",
  variants: {
    ...Qs,
    ...eo,
    ...Js,
    ...Xs,
    ...Ys,
    ...Vs,
    ...js,
    ...Us,
    ...Zs,
    ...Ks
  },
  defaultVariants: {
    ...qd,
    ...Pd,
    ...Bd,
    ...Fd,
    ...Wd
  }
}), Vd = ["sm", "md", "lg", "xl"], to = qe(
  ({
    // Display & Position
    display: n,
    position: e,
    // Padding
    padding: t,
    paddingX: i,
    paddingY: r,
    paddingTop: s,
    paddingBottom: o,
    paddingLeft: a,
    paddingRight: d,
    // Margin
    margin: u,
    marginX: c,
    marginY: h,
    marginTop: f,
    marginBottom: m,
    marginLeft: p,
    marginRight: v,
    // Gap
    gap: g,
    // Grid
    columns: b,
    rows: w,
    colSpan: S,
    colStart: T,
    rowSpan: R,
    // Dimensions
    width: x,
    height: y,
    minWidth: _,
    minHeight: k,
    maxWidth: F,
    maxHeight: E,
    // Background
    background: M,
    // Border
    borderColor: D,
    border: A,
    borderTop: L,
    borderBottom: O,
    borderLeft: z,
    borderRight: K,
    borderRadius: $,
    borderRadiusTopLeft: ee,
    borderRadiusTopRight: re,
    borderRadiusBottomLeft: te,
    borderRadiusBottomRight: q,
    borderStyle: ne,
    // Overflow
    overflow: fe,
    overflowX: le,
    overflowY: Y,
    // Divider
    divider: Z,
    dividerColor: ie,
    // Flex
    alignItems: H,
    justifyContent: X,
    flexDirection: U,
    flexWrap: me,
    grow: be,
    shrink: Me,
    // Responsive breakpoint overrides
    sm: ze,
    md: rt,
    lg: Ke,
    xl: ge,
    ...Ie
  }, Xe) => {
    const Be = L && L !== "none" || O && O !== "none" || z && z !== "none" || K && K !== "none", Ge = A && A !== "none" || Be, et = { sm: ze, md: rt, lg: Ke, xl: ge }, Vn = Vd.map((Jt) => {
      const tt = et[Jt];
      return tt ? jd(Jt, tt) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ l(
      "div",
      {
        ref: Xe,
        className: P(
          Be && "border-0",
          Ud({
            display: n,
            position: e,
            padding: t,
            paddingX: i,
            paddingY: r,
            paddingTop: s,
            paddingBottom: o,
            paddingLeft: a,
            paddingRight: d,
            margin: u,
            marginX: c,
            marginY: h,
            marginTop: f,
            marginBottom: m,
            marginLeft: p,
            marginRight: v,
            gap: g,
            columns: b,
            rows: w,
            colSpan: S,
            colStart: T,
            rowSpan: R,
            width: x,
            height: y,
            minWidth: _,
            minHeight: k,
            maxWidth: F,
            maxHeight: E,
            background: M,
            borderColor: D,
            border: A,
            borderTop: L,
            borderBottom: O,
            borderLeft: z,
            borderRight: K,
            borderRadius: $,
            borderRadiusTopLeft: ee,
            borderRadiusTopRight: re,
            borderRadiusBottomLeft: te,
            borderRadiusBottomRight: q,
            borderStyle: ne,
            overflow: fe,
            overflowX: le,
            overflowY: Y,
            divider: Z,
            dividerColor: ie,
            alignItems: H,
            justifyContent: X,
            flexDirection: U,
            flexWrap: me,
            grow: be,
            shrink: Me
          }),
          Vn,
          Ge && !D && "border-f1-border",
          Z && !ie && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...Ie
      }
    );
  }
);
to.displayName = "F0Box";
const no = Tn(
  {
    name: "F0Box",
    type: "layout"
  },
  to
), cf = ["sm", "md", "lg"], df = ["compact", "expanded"], di = ({ count: n, list: e }) => {
  const [t, i] = j(!1), r = /* @__PURE__ */ l(hn, { label: `+${n}` });
  return e?.length ? /* @__PURE__ */ C(fi, { open: t, onOpenChange: i, children: [
    /* @__PURE__ */ l(mi, { asChild: !0, children: /* @__PURE__ */ l("button", { className: Fn("inline-flex flex-shrink-0 items-center"), children: r }) }),
    /* @__PURE__ */ l(
      gi,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ C(Pr, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          e.map((s, o) => /* @__PURE__ */ l(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ l(hn, { ...s })
            },
            o
          )),
          /* @__PURE__ */ l(
            Hr,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      }
    )
  ] }) : r;
};
di.displayName = "ChipCounter";
const io = ({
  chips: n,
  max: e = 4,
  remainingCount: t,
  layout: i = "compact"
}) => {
  if (i === "fill")
    return /* @__PURE__ */ l(
      Uo,
      {
        items: n,
        renderListItem: (d) => /* @__PURE__ */ l(hn, { ...d }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: t !== void 0,
        renderOverflowIndicator: (d) => /* @__PURE__ */ l(
          di,
          {
            count: (t ?? 0) + d,
            list: t ? void 0 : n.slice(n.length - d)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const r = n.slice(0, e), s = n.slice(e), o = t ?? n.length - e, a = o > 0;
  return /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
    r.map((d, u) => /* @__PURE__ */ l(hn, { ...d }, u)),
    a && /* @__PURE__ */ l(
      di,
      {
        count: o,
        list: t ? void 0 : s
      }
    )
  ] });
};
io.displayName = "F0ChipList";
const uf = se(
  Oe("F0ChipList", io)
), hf = Vo, ff = [
  "info",
  "warning",
  "critical",
  "neutral",
  "positive"
], Qd = 388;
function ro({
  filters: n,
  value: e,
  onChange: t,
  height: i,
  width: r = 600,
  className: s,
  showApplyButton: o = !0,
  applyButtonLabel: a,
  dataTestId: d
}) {
  const u = oe(), c = Object.keys(n)[0] ?? null, [h, f] = j(c), [m, p] = j(e);
  V(() => {
    p(e);
  }, [e]), V(() => {
    if (!h && n) {
      const w = Object.keys(n);
      if (w.length > 0) {
        const S = w.find((T) => {
          const R = m[T], x = Zi(n[T].type);
          return R !== void 0 && !x.isEmpty(R, {
            schema: n[T],
            i18n: u
          });
        });
        f(S ?? w[0]);
      }
    }
  }, [n, h, m, u]);
  const v = (w, S) => {
    const T = {
      ...m,
      [w]: S
    };
    p(T), o || t(T);
  }, g = () => {
    t(m);
  }, b = B(() => i || Object.entries(n).reduce((S, [T, R]) => {
    const x = Zi(R.type);
    return Math.max(S, x?.formHeight || Qd);
  }, 0), [n, i]);
  return !n || Object.keys(n).length === 0 ? null : /* @__PURE__ */ l(Qo, { dataTestId: d, children: /* @__PURE__ */ l(
    "div",
    {
      className: P(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        s
      ),
      style: { maxWidth: r },
      children: /* @__PURE__ */ l(
        Ko,
        {
          filters: n,
          tempFilters: m,
          selectedFilterKey: h,
          onFilterSelect: f,
          onFilterChange: v,
          onApply: g,
          height: b,
          showApplyButton: o,
          applyButtonLabel: a
        }
      )
    }
  ) });
}
ro.displayName = "F0FilterPickerContent";
const mf = ro;
function Kd(n) {
  const t = wt(n).shape, i = [];
  for (const [r, s] of Object.entries(t)) {
    const o = s, a = Vt(o);
    if (!a) continue;
    const d = Xo(o, a), u = Wr(o, d), c = {
      name: r,
      type: d,
      label: a.label,
      required: u
    };
    if (a.placeholder && (c.placeholder = a.placeholder), a.helpText && (c.helpText = a.helpText), a.section && (c.section = a.section), a.customFieldName && (c.customFieldName = a.customFieldName), d === "select") {
      if ("source" in a && a.source)
        c.optionsSource = "dynamic";
      else if ("options" in a && a.options) {
        const h = [];
        for (const f of a.options)
          "label" in f && "value" in f && h.push({ label: f.label, value: f.value });
        c.options = h;
      }
    }
    i.push(c);
  }
  return i;
}
function Xd(n) {
  const e = {};
  let t;
  for (const i of n.issues) {
    if (i.path.length === 0) {
      t === void 0 && (t = i.message);
      continue;
    }
    const r = i.path.join(".");
    r in e || (e[r] = i.message);
  }
  return { errors: e, rootError: t };
}
function Yd(n) {
  const { schema: e, defaultValues: t, errorMap: i, onSubmit: r } = n, s = async (h) => {
    const f = { ...t ?? {}, ...h ?? {} }, m = Jo(e, f), p = {};
    for (const [S, T] of Object.entries(f))
      p[S] = T === null ? void 0 : T;
    const v = i ? { errorMap: i } : void 0, g = await m.safeParseAsync(p, v);
    if (g.success)
      return { valid: !0, errors: {} };
    const { errors: b, rootError: w } = Xd(g.error);
    return {
      valid: !1,
      errors: b,
      ...w !== void 0 && { rootError: w }
    };
  };
  return {
    validate: s,
    validateField: async (h, f) => {
      const p = (await s(f)).errors[h];
      return {
        valid: p === void 0,
        errors: p !== void 0 ? { [h]: p } : {}
      };
    },
    describeFields: () => Kd(e),
    getDefaultValues: () => t,
    getVisibleFields: (h) => {
      const f = { ...t ?? {}, ...h ?? {} }, m = wt(e), p = [];
      for (const [v, g] of Object.entries(m.shape)) {
        const b = Vt(g);
        if (!b?.renderIf) {
          p.push(v);
          continue;
        }
        Yo(b.renderIf, f) && p.push(v);
      }
      return p;
    },
    submit: async (h) => {
      if (!r)
        throw new Error(
          "createF0FormTester: cannot call submit() without an onSubmit handler. Pass onSubmit in the options, or use createF0FormDefinitionTester which reads it from the definition."
        );
      const f = await s(h);
      if (!f.valid)
        return { success: !1, errors: f.errors };
      const m = { ...t ?? {}, ...h ?? {} };
      return r(m);
    }
  };
}
function gf(n, e) {
  return Yd({
    schema: n.schema,
    defaultValues: n.defaultValues,
    errorMap: e?.errorMap,
    // Adapt the definition's onSubmit ({ data }) signature to the tester's (data) signature
    onSubmit: (t) => n.onSubmit({ data: t })
  });
}
const pf = Oe("F0Form", An);
function Ee({
  field: n,
  value: e,
  onChange: t,
  onBlur: i,
  error: r,
  errorMessage: s,
  status: o,
  loading: a,
  required: d,
  disabled: u,
  hideLabel: c,
  initialFiles: h
}) {
  const f = as(), m = d ?? (n.validation ? Wr(n.validation) : !1), p = !c && n.type !== "checkbox" && n.type !== "custom", v = {
    value: e,
    onChange: t,
    onBlur: i ?? (() => {
    }),
    name: n.id,
    ref: () => {
    }
  }, g = {
    error: r || o?.type === "error" ? {
      type: "custom",
      message: s ?? o?.message
    } : void 0,
    isValidating: !!a
  }, b = r ? { type: "error", message: s } : o, w = u !== void 0 ? { ...n, disabled: u } : n, S = n.type === "file" ? h : void 0;
  return /* @__PURE__ */ C("div", { className: "space-y-2", id: f, children: [
    p && /* @__PURE__ */ C(
      "label",
      {
        htmlFor: n.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [
          n.label,
          m && /* @__PURE__ */ l("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
        ]
      }
    ),
    Zo({
      field: w,
      formField: v,
      fieldState: g,
      isSubmitting: !1,
      isRequired: m,
      values: {},
      initialFiles: S,
      fieldStatus: b
    }),
    n.helpText && /* @__PURE__ */ l("p", { className: "text-base text-f1-foreground-secondary", children: n.helpText }),
    /* @__PURE__ */ l(ea, { status: b })
  ] });
}
Ee.displayName = "F0FormField";
const so = Qe(null);
function Jd() {
  const n = Re(so);
  if (!n)
    throw new Error("useF0Wizard must be used within a F0Wizard");
  return n;
}
function Zd({ children: n, ...e }) {
  return /* @__PURE__ */ l(so.Provider, { value: e, children: n });
}
const eu = ht({
  base: "flex-1 text-base font-medium leading-5 tracking-[-0.005em]",
  variants: {
    state: {
      active: "text-f1-foreground",
      completed: "text-f1-foreground-secondary",
      upcoming: "text-f1-foreground"
    }
  }
});
function tu(n, e, t) {
  return n === e ? "active" : t ? "completed" : "upcoming";
}
function nu({ state: n, index: e }) {
  return n === "completed" ? /* @__PURE__ */ l("span", { className: "flex h-5 w-5 min-w-5 shrink-0 items-center justify-center rounded-xs bg-f1-background-secondary text-f1-foreground-secondary", children: /* @__PURE__ */ l(We, { className: "h-3 w-3" }) }) : /* @__PURE__ */ l(
    ta,
    {
      value: e + 1,
      type: n === "active" ? "selected" : "default",
      size: "md"
    }
  );
}
function iu() {
  const { steps: n, currentStep: e, goToStep: t, allowStepSkipping: i } = Jd();
  return /* @__PURE__ */ l("nav", { "aria-label": "Wizard steps", className: "flex flex-col gap-1.5 p-1", children: n.map((r, s) => {
    const o = s < e || r.isCompleted?.() === !0, a = tu(s, e, o), d = n[e]?.hasErrors?.() === !0, u = s > e && n.slice(e, s).some((m) => m.hasErrors?.() === !0);
    let c = s !== e && !d && !u && n.slice(0, s).every((m) => m.isCompleted?.() !== !1);
    return c && !i && s > e + 1 && (c = !1), /* @__PURE__ */ C(
      "button",
      {
        type: "button",
        onClick: () => {
          c && t(s);
        },
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && c && (m.preventDefault(), t(s));
        },
        disabled: !c && s !== e,
        "aria-current": s === e ? "step" : void 0,
        className: P(
          Fn(),
          "flex cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left",
          a === "active" && "bg-f1-background-selected",
          c && "hover:bg-f1-background-secondary-hover",
          !c && s !== e && "cursor-default opacity-70"
        ),
        children: [
          /* @__PURE__ */ l(nu, { state: a, index: s }),
          /* @__PURE__ */ l("span", { className: eu({ state: a }), children: r.title })
        ]
      },
      s
    );
  }) });
}
function ru({
  steps: n,
  defaultStepIndex: e = 0,
  onSubmit: t,
  onStepChanged: i,
  allowStepSkipping: r = !1,
  autoCloseOnLastStepSubmit: s = !1,
  onClose: o
}) {
  const [a, d] = j(e), [u, c] = j(!1), h = W(n);
  h.current = n;
  const f = I(
    (g) => {
      d(g), i?.(g);
    },
    [i]
  ), m = I(
    async (g) => {
      if (!(g < 0 || g >= h.current.length || h.current[a]?.hasErrors?.() === !0 || !r && g > a + 1 || g > a && h.current.slice(a, g).some((S) => S.hasErrors?.() === !0) || !h.current.slice(0, g).every((w) => w.isCompleted?.() !== !1))) {
        if (g > a) {
          c(!0);
          try {
            for (let w = a; w < g; w++) {
              const S = h.current[w];
              S?.onNext && await S.onNext();
            }
            f(g);
          } catch {
          } finally {
            c(!1);
          }
          return;
        }
        f(g);
      }
    },
    [f, a, r]
  ), p = I(async () => {
    const g = h.current[a];
    if (g) {
      c(!0);
      try {
        g.onNext && await g.onNext(), a === h.current.length - 1 ? (t && await t(), s && o?.()) : f(a + 1);
      } catch {
      } finally {
        c(!1);
      }
    }
  }, [a, t, f, s, o]), v = I(() => {
    a > 0 && f(a - 1);
  }, [a, f]);
  return {
    currentStep: a,
    loading: u,
    goToStep: m,
    goNext: p,
    goPrevious: v
  };
}
const su = () => {
}, Hi = ({
  steps: n,
  children: e,
  isOpen: t,
  onClose: i = su,
  title: r,
  width: s = "xl",
  defaultStepIndex: o,
  nextLabel: a,
  previousLabel: d,
  submitLabel: u,
  onSubmit: c,
  onStepChanged: h,
  allowStepSkipping: f = !1,
  autoCloseOnLastStepSubmit: m = !1,
  autoSkipCompletedSteps: p = !1
}) => {
  const v = B(() => {
    if (o !== void 0) return o;
    if (!p) return 0;
    const k = n.findIndex(
      (F) => F.isCompleted?.() !== !0
    );
    return k === -1 ? n.length - 1 : k;
  }, [o, p, n]), g = ru({
    steps: n,
    defaultStepIndex: v,
    onSubmit: c,
    onStepChanged: h,
    allowStepSkipping: f,
    autoCloseOnLastStepSubmit: m,
    onClose: i
  }), b = oe(), w = n[g.currentStep], S = g.currentStep === 0, T = g.currentStep === n.length - 1, R = T ? w?.nextLabel ?? u ?? b.wizard.submit : w?.nextLabel ?? a ?? b.wizard.next, x = w?.previousLabel ?? d ?? b.wizard.previous, y = B(
    () => ({
      label: R,
      icon: T ? void 0 : si,
      onClick: () => {
        g.goNext();
      },
      disabled: w?.isCompleted?.() === !1 || w?.hasErrors?.() === !0,
      loading: g.loading
    }),
    [R, T, g, w]
  ), _ = B(
    () => S ? void 0 : {
      label: x,
      icon: qr,
      onClick: g.goPrevious,
      disabled: g.loading
    },
    [S, x, g]
  );
  return /* @__PURE__ */ l(
    na,
    {
      isOpen: t,
      onClose: i,
      width: s,
      title: r,
      primaryAction: y,
      secondaryAction: _,
      disableContentPadding: !0,
      children: /* @__PURE__ */ l(
        Zd,
        {
          currentStep: g.currentStep,
          totalSteps: n.length,
          loading: g.loading,
          goToStep: g.goToStep,
          goNext: g.goNext,
          goPrevious: g.goPrevious,
          steps: n,
          allowStepSkipping: f,
          children: /* @__PURE__ */ C("div", { className: "flex h-[58vh] flex-1 flex-row", children: [
            /* @__PURE__ */ l("div", { className: "w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2", children: /* @__PURE__ */ l(iu, {}) }),
            /* @__PURE__ */ l("div", { className: "flex-1 overflow-y-auto px-8", children: e({
              currentStep: g.currentStep,
              goToStep: g.goToStep
            }) })
          ] })
        }
      )
    }
  );
};
Hi.displayName = "F0Wizard";
function oo(n) {
  const t = wt(n).shape, i = Object.entries(t);
  return i.length === 0 ? !1 : i.every(([, r]) => Vt(r)?.disabled === !0);
}
function ou(n, e) {
  if (e) return Object.keys(e);
  const i = wt(n).shape, r = /* @__PURE__ */ new Set();
  for (const s of Object.values(i)) {
    const o = Vt(s);
    o?.section && r.add(o.section);
  }
  return Array.from(r);
}
function ti(n, e) {
  const t = n.shape, i = {};
  for (const [r, s] of Object.entries(t)) {
    const o = Vt(s);
    o?.section && e.includes(o.section) && (i[r] = s);
  }
  return Gr(i);
}
function ao(n, e, t) {
  const i = e ?? {};
  if (t) return t({ data: i });
  const s = wt(n).shape;
  return Object.entries(s).every(([o, a]) => {
    if (a.isOptional()) return !0;
    const d = i[o];
    return d != null && d !== "";
  });
}
const au = 3e3;
function lo() {
  const { forms: n } = oe(), [e, t] = j("idle"), [i, r] = j(), s = W(null);
  V(() => () => {
    s.current && clearTimeout(s.current);
  }, []);
  const o = I((u) => {
    s.current && (clearTimeout(s.current), s.current = null), r(u), t("success"), s.current = setTimeout(() => {
      t("idle"), r(void 0), s.current = null;
    }, au);
  }, []), a = e === "success" ? i ?? n.actionBar.saved : void 0, d = B(
    () => /* @__PURE__ */ l(
      ia,
      {
        isOpen: e === "success",
        variant: "light",
        status: e,
        label: a
      }
    ),
    [e, a]
  );
  return { showSuccess: o, ActionBar: d };
}
function co(n, e, t, i, r, s, o) {
  return (t ?? n.map((d) => ({
    title: e?.[d]?.title ?? d,
    sectionIds: [d]
  }))).map((d, u) => {
    const c = i(d.sectionIds), h = o?.(u) ?? !1;
    return {
      title: d.title,
      nextLabel: d.nextLabel,
      previousLabel: d.previousLabel,
      isCompleted: c || h ? () => !0 : void 0,
      hasErrors: s ? () => s(u) : void 0,
      onNext: r(u)
    };
  });
}
function Ft(n, e, t) {
  if (t)
    return t[n]?.sectionIds ?? [];
  const i = e[n];
  return i ? [i] : [];
}
function lu({
  formDefinition: n,
  steps: e,
  isOpen: t,
  onClose: i,
  title: r,
  width: s,
  defaultStepIndex: o,
  nextLabel: a,
  previousLabel: d,
  onStepChanged: u,
  allowStepSkipping: c,
  autoCloseOnLastStepSubmit: h,
  linkAfterLastStepSubmit: f,
  autoSkipCompletedSteps: m = !1,
  renderCustomField: p
}) {
  const {
    name: v,
    schema: g,
    sections: b,
    defaultValues: w,
    onSubmit: S,
    submitConfig: T,
    errorTriggerMode: R = "on-blur"
  } = n, x = T?.label, y = B(() => Object.keys(g), [g]), _ = e ?? n.steps, k = B(() => _ ? _.some(
    (X) => X.sectionIds.length > 1
  ) ? (process.env.NODE_ENV !== "production" && console.error(
    "[F0WizardForm] Per-section schema mode does not support grouping multiple sections into a single step. Each section requires its own independent form and submit. Steps with multiple sectionIds will be automatically split into separate steps."
  ), _.flatMap(
    (X) => X.sectionIds.map((U) => ({
      title: b?.[U]?.title ?? X.title,
      sectionIds: [U],
      nextLabel: X.nextLabel,
      previousLabel: X.previousLabel
    }))
  )) : _ : void 0, [_, b]), F = W({}), E = W(o ?? 0), M = B(
    () => Object.fromEntries(y.map((H) => [H, null])),
    [y]
  ), [D, A] = j({}), L = W(D);
  L.current = D;
  const O = I(
    (H) => H.every((X) => {
      const U = g[X];
      return U ? oo(U) : !1;
    }),
    [g]
  ), z = I(
    (H) => async () => {
      const X = Ft(H, y, k);
      for (const U of X) {
        const me = M[U];
        me && await me.submit();
      }
    },
    [y, k, M]
  ), K = I(
    (H) => Ft(H, y, k).some((U) => L.current[U] === !0),
    [y, k]
  ), $ = B(
    () => k ?? y.map((H) => ({
      title: b?.[H]?.title ?? H,
      sectionIds: [H]
    })),
    [k, y, b]
  ), ee = I(
    (H) => {
      if (!m) return !1;
      const X = $[H];
      return X ? X.sectionIds.every((U) => {
        const me = g[U];
        if (!me) return !1;
        const be = w?.[U] ?? F.current[U];
        return ao(me, be, X.isCompleted);
      }) : !1;
    },
    [m, $, g, w]
  ), re = B(() => {
    if (o !== void 0) return o;
    if (!m) return;
    const H = $.findIndex(
      (X, U) => !ee(U)
    );
    return H === -1 ? $.length - 1 : H;
  }, [o, m, $, ee]), te = B(
    () => co(
      y,
      b,
      k,
      O,
      z,
      K,
      m ? ee : void 0
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      y,
      b,
      k,
      O,
      z,
      K,
      D,
      m,
      ee
    ]
  ), q = W(null), { showSuccess: ne, ActionBar: fe } = lo(), le = I(
    (H) => async (X) => {
      F.current[H] = X;
      const U = await S({
        sectionId: H,
        data: X,
        fullData: { ...F.current }
      });
      return q.current = U, U.success && U.message && ne(U.message), U;
    },
    [S, ne]
  ), Y = I(() => {
    if (q.current?.success) {
      if (f) {
        const X = f({
          fullData: { ...F.current }
        });
        window.location.href = X;
        return;
      }
      h && i?.();
    }
  }, [h, f, i]), Z = I(() => {
    const H = Ft(
      E.current,
      y,
      k
    );
    for (const X of H) {
      const U = M[X];
      U && (F.current[X] = U.getValues());
    }
  }, [y, k, M]), ie = I(
    (H) => {
      Z(), E.current = H, u?.(H);
    },
    [Z, u]
  );
  return /* @__PURE__ */ l(
    Hi,
    {
      steps: te,
      isOpen: t,
      onClose: i,
      title: r,
      width: s,
      defaultStepIndex: re,
      nextLabel: a,
      previousLabel: d,
      submitLabel: x,
      onSubmit: Y,
      onStepChanged: ie,
      allowStepSkipping: c,
      children: ({ currentStep: H }) => {
        const X = Ft(
          H,
          y,
          k
        );
        return /* @__PURE__ */ C(we, { children: [
          /* @__PURE__ */ l("div", { className: "flex flex-col gap-6 pb-5", children: X.map((U) => {
            const me = g[U];
            if (!me) return null;
            const be = b?.[U], Me = F.current[U], ze = w?.[U];
            return /* @__PURE__ */ l(
              cu,
              {
                sectionId: U,
                formName: v,
                schema: me,
                sectionConfig: be,
                defaultValues: Me ?? ze,
                onSubmit: le(U),
                submitConfig: T,
                errorTriggerMode: R,
                sectionForms: M,
                onErrorStateChange: (Ke) => {
                  A((ge) => ge[U] === Ke ? ge : { ...ge, [U]: Ke });
                },
                renderCustomField: p,
                isLoading: n.isLoading
              },
              U
            );
          }) }),
          fe
        ] });
      }
    }
  );
}
function cu({
  sectionId: n,
  formName: e,
  schema: t,
  sectionConfig: i,
  defaultValues: r,
  onSubmit: s,
  submitConfig: o,
  errorTriggerMode: a,
  sectionForms: d,
  onErrorStateChange: u,
  renderCustomField: c,
  isLoading: h
}) {
  const f = pi();
  V(() => (d[n] = f, () => {
    d[n] = null;
  }), [d, n, f]);
  const m = W(u);
  return m.current = u, V(() => {
    m.current(f.hasErrors);
  }, [f.hasErrors]), /* @__PURE__ */ l(
    ra,
    {
      formName: e,
      sectionId: n,
      schema: t,
      sectionConfig: i,
      defaultValues: r,
      onSubmit: s,
      submitConfig: {
        ...o,
        hideSubmitButton: !0
      },
      errorTriggerMode: a,
      formRef: f.formRef,
      renderCustomField: c,
      isLoading: h
    }
  );
}
function du({
  formDefinition: n,
  steps: e,
  isOpen: t,
  onClose: i,
  title: r,
  width: s,
  defaultStepIndex: o,
  nextLabel: a,
  previousLabel: d,
  onStepChanged: u,
  allowStepSkipping: c,
  autoCloseOnLastStepSubmit: h,
  linkAfterLastStepSubmit: f,
  autoSkipCompletedSteps: m = !1,
  renderCustomField: p
}) {
  const {
    name: v,
    schema: g,
    sections: b,
    defaultValues: w,
    onSubmit: S,
    submitConfig: T,
    errorTriggerMode: R = "on-blur"
  } = n, x = T?.label, y = B(() => wt(g), [g]), _ = B(
    () => ou(g, b),
    [g, b]
  ), k = I(
    (Y) => {
      const Z = ti(y, Y);
      return oo(Z);
    },
    [y]
  ), F = pi(), E = W(
    w ? { ...w } : {}
  ), M = W(o ?? 0), D = I(
    (Y) => async () => {
      await F.submit();
    },
    [F]
  ), A = I(
    (Y) => F.hasErrors,
    [F.hasErrors]
  ), L = e ?? n.steps, O = B(
    () => L ?? _.map((Y) => ({
      title: b?.[Y]?.title ?? Y,
      sectionIds: [Y]
    })),
    [L, _, b]
  ), z = I(
    (Y) => {
      if (!m) return !1;
      const Z = O[Y];
      if (!Z) return !1;
      const ie = ti(
        y,
        Z.sectionIds
      );
      return ao(ie, w, Z.isCompleted);
    },
    [m, O, y, w]
  ), K = B(() => {
    if (o !== void 0) return o;
    if (!m) return;
    const Y = O.findIndex(
      (Z, ie) => !z(ie)
    );
    return Y === -1 ? O.length - 1 : Y;
  }, [o, m, O, z]), $ = B(
    () => co(
      _,
      b,
      L,
      k,
      D,
      A,
      m ? z : void 0
    ),
    [
      _,
      b,
      L,
      k,
      D,
      A,
      m,
      z
    ]
  ), ee = W(null), re = W(null), { showSuccess: te, ActionBar: q } = lo(), ne = I(
    async (Y) => {
      Object.assign(E.current, Y);
      const Z = { ...E.current };
      re.current = Z;
      const ie = await S({ data: Z });
      return ee.current = ie, ie;
    },
    [S]
  ), fe = I(() => {
    const Y = ee.current;
    if (Y?.success) {
      if (te(Y.message), f) {
        const Z = f({
          fullData: re.current
        });
        window.location.href = Z;
        return;
      }
      h && i?.();
    }
  }, [h, f, i, te]), le = I(
    (Y) => {
      const Z = F.getValues();
      Object.assign(E.current, Z), M.current = Y, u?.(Y);
    },
    [F, u]
  );
  return /* @__PURE__ */ l(
    Hi,
    {
      steps: $,
      isOpen: t,
      onClose: i,
      title: r,
      width: s,
      defaultStepIndex: K,
      nextLabel: a,
      previousLabel: d,
      submitLabel: x,
      onSubmit: fe,
      onStepChanged: le,
      allowStepSkipping: c,
      children: ({ currentStep: Y }) => {
        const Z = Ft(
          Y,
          _,
          L
        ), ie = ti(
          y,
          Z
        ), H = Z.reduce((X, U) => (b?.[U] && (X[U] = b[U]), X), {});
        return /* @__PURE__ */ C(we, { children: [
          /* @__PURE__ */ l("div", { className: "pb-5", children: /* @__PURE__ */ l(
            An,
            {
              name: `${v}-step-${Y}`,
              schema: ie,
              sections: H,
              defaultValues: E.current,
              onSubmit: ne,
              submitConfig: { hideSubmitButton: !0, hideActionBar: !0 },
              errorTriggerMode: R,
              formRef: F.formRef,
              renderCustomField: p,
              isLoading: n.isLoading
            },
            Y
          ) }),
          q
        ] });
      }
    }
  );
}
function uo(n) {
  return n.formDefinition._brand === "per-section" ? /* @__PURE__ */ l(
    lu,
    {
      ...n
    }
  ) : /* @__PURE__ */ l(
    du,
    {
      ...n
    }
  );
}
uo.displayName = "F0WizardForm";
const vf = se(uo), ho = qe((n, e) => /* @__PURE__ */ l(ki, { ref: e, variant: "heading", ...n }));
ho.displayName = "F0Heading";
const bf = se(ho), uu = ({
  props: n
}) => {
  const { status: e, title: t, taskCount: i, completedCount: r, expanded: s, onExpandToggle: o } = n;
  return /* @__PURE__ */ C(we, { children: [
    /* @__PURE__ */ l(Ln, { icon: sa, size: "sm" }),
    /* @__PURE__ */ C("div", { className: "flex flex-1 items-center justify-between", children: [
      /* @__PURE__ */ l(
        oa,
        {
          label: `${i} ${t}`,
          itemCount: void 0,
          open: s,
          onOpenChange: () => o(),
          showOpenChange: !0
        }
      ),
      r !== void 0 && /* @__PURE__ */ l(
        vi,
        {
          text: `${r}/${i}`,
          variant: e === "completed" ? "positive" : "warning"
        }
      )
    ] })
  ] });
}, fo = ({
  primaryAction: n,
  secondaryActions: e,
  otherActions: t
}) => {
  const i = e && e.length > 0, r = t && t.length > 0;
  return /* @__PURE__ */ C("div", { className: "flex flex-col gap-2 xs:flex-row xs:items-center [&>*]:w-full [&>*]:xs:w-auto", children: [
    r && /* @__PURE__ */ l(hi, { items: t, size: "md" }),
    e?.map((s, o) => /* @__PURE__ */ l(
      Ce,
      {
        label: s.label,
        icon: s.icon,
        variant: "outline",
        size: "md",
        onClick: s.onClick,
        disabled: s.disabled,
        loading: s.loading
      },
      `${s.label}-${o}`
    )),
    n && (r || i) && /* @__PURE__ */ l("div", { className: "mx-1 hidden h-4 w-px bg-f1-background-secondary-hover xs:block" }),
    n && /* @__PURE__ */ l(
      Ce,
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
}, hu = ({
  props: n,
  contentId: e
}) => {
  const {
    status: t,
    icon: i,
    title: r,
    description: s,
    taskCount: o,
    completedCount: a,
    expanded: d,
    onExpandToggle: u,
    items: c
  } = n, h = c.length > 0;
  return /* @__PURE__ */ C(we, { children: [
    /* @__PURE__ */ l(Ln, { icon: i, size: "sm" }),
    /* @__PURE__ */ C("div", { className: "flex flex-1 items-center justify-between", children: [
      h ? /* @__PURE__ */ C(
        "button",
        {
          type: "button",
          "aria-expanded": d,
          "aria-controls": e,
          onClick: u,
          className: P(
            "pointer-events-auto flex items-center gap-3 rounded-sm",
            Fn()
          ),
          children: [
            /* @__PURE__ */ l(
              "span",
              {
                className: P(
                  "text-base font-semibold text-f1-foreground whitespace-nowrap",
                  t === "completed" && "line-through"
                ),
                children: r
              }
            ),
            s && /* @__PURE__ */ l(qt, { content: s, variant: "description", as: "span" }),
            /* @__PURE__ */ l(
              he,
              {
                icon: d ? aa : fn,
                size: "xs",
                color: "secondary"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ C("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l(
          "span",
          {
            className: P(
              "text-base font-semibold text-f1-foreground whitespace-nowrap",
              t === "completed" && "line-through"
            ),
            children: r
          }
        ),
        s && /* @__PURE__ */ l(qt, { content: s, variant: "description", as: "span" })
      ] }),
      a !== void 0 && /* @__PURE__ */ l(
        vi,
        {
          text: `${a}/${o}`,
          variant: t === "completed" ? "positive" : "warning"
        }
      )
    ] })
  ] });
}, fu = ({ status: n }) => /* @__PURE__ */ l(
  "div",
  {
    "data-testid": "timeline-connector",
    className: P(
      "w-0.5 min-h-2 flex-1",
      n === "completed" && "bg-f1-icon-positive",
      n === "in-progress" && "bg-f1-border-secondary",
      n === "not-started" && "bg-[length:2px_6px] bg-repeat-y bg-[linear-gradient(to_bottom,_hsl(var(--neutral-20))_3px,_transparent_3px)]"
    )
  }
), mu = {
  completed: /* @__PURE__ */ l(he, { icon: On, color: "positive", size: "lg" }),
  "in-progress": /* @__PURE__ */ l(he, { icon: ca, size: "lg", color: "warning" }),
  "not-started": /* @__PURE__ */ l(he, { icon: la, size: "lg", color: "secondary" })
}, Wi = ({
  status: n,
  isLast: e,
  hideStatus: t,
  children: i
}) => /* @__PURE__ */ C("div", { className: "flex gap-4", children: [
  !t && /* @__PURE__ */ C("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ l(
      "div",
      {
        className: "h-8 flex flex-col justify-center",
        "data-testid": `timeline-status-${n}`,
        children: mu[n]
      }
    ),
    !e && /* @__PURE__ */ l(fu, { status: n })
  ] }),
  /* @__PURE__ */ l("div", { className: "flex flex-1 flex-col gap-3 pb-5", children: i })
] }), gu = ({ props: n }) => {
  const { status: e, icon: t = $r, title: i, description: r } = n;
  return /* @__PURE__ */ C("div", { className: "flex min-h-8 items-center gap-3", children: [
    /* @__PURE__ */ l(Ln, { icon: t, size: "sm" }),
    /* @__PURE__ */ l(
      "h4",
      {
        className: P(
          "text-base font-semibold text-f1-foreground",
          e === "completed" && "line-through"
        ),
        children: i
      }
    ),
    r && /* @__PURE__ */ l(qt, { content: r, variant: "description" })
  ] });
}, mo = ({
  props: n
}) => {
  const {
    status: e,
    isLast: t = !1,
    hideStatus: i = !1,
    expanded: r,
    items: s,
    metadata: o,
    primaryAction: a,
    secondaryActions: d,
    otherActions: u
  } = n, c = as(), h = o?.some(Boolean), f = a || d && d.length > 0 || u && u.length > 0;
  return /* @__PURE__ */ C(Wi, { status: e, isLast: t, hideStatus: i, children: [
    /* @__PURE__ */ l("div", { className: "flex min-h-8 items-center gap-3", children: /* @__PURE__ */ l(hu, { props: n, contentId: c }) }),
    o && h && /* @__PURE__ */ l("div", { className: "pl-9", children: /* @__PURE__ */ l(Ni, { items: o }) }),
    r && /* @__PURE__ */ l("div", { id: c, role: "region", className: "flex flex-col gap-0 pl-4", children: s.map((m, p) => /* @__PURE__ */ l(gu, { props: m }, `${m.title}-${p}`)) }),
    f && /* @__PURE__ */ l("div", { className: "pl-9", children: /* @__PURE__ */ l(
      fo,
      {
        primaryAction: a,
        secondaryActions: d,
        otherActions: u
      }
    ) })
  ] });
}, pu = ({ props: n }) => {
  const { metadata: e, primaryAction: t, secondaryActions: i, otherActions: r } = n, s = e?.some(Boolean), o = t || i && i.length > 0 || r && r.length > 0;
  return /* @__PURE__ */ C("div", { className: "pl-9", children: [
    e && s && /* @__PURE__ */ l("div", { className: "mb-3", children: /* @__PURE__ */ l(Ni, { items: e }) }),
    o && /* @__PURE__ */ l("div", { className: "mb-3", children: /* @__PURE__ */ l(
      fo,
      {
        primaryAction: t,
        secondaryActions: i,
        otherActions: r
      }
    ) })
  ] });
}, vu = ({ props: n }) => {
  const { status: e, icon: t = $r, title: i, description: r, metadata: s } = n, o = s?.some(Boolean);
  return /* @__PURE__ */ C("div", { className: "flex justify-between gap-3 w-full flex-wrap", children: [
    /* @__PURE__ */ C("div", { className: "flex justify-start items-center gap-3 h-8", children: [
      /* @__PURE__ */ l(Ln, { icon: t, size: "sm" }),
      /* @__PURE__ */ l(
        "h4",
        {
          className: P(
            "text-base font-semibold text-f1-foreground",
            e === "completed" && "line-through"
          ),
          children: i
        }
      ),
      r && /* @__PURE__ */ l(qt, { content: r, variant: "description" })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex justify-end items-center gap-3 pl-9", children: e === "completed" && s && o && /* @__PURE__ */ l(Ni, { items: s }) })
  ] });
}, go = ({ props: n }) => {
  const { status: e, isLast: t = !1, hideStatus: i = !1 } = n;
  return /* @__PURE__ */ C(Wi, { status: e, isLast: t, hideStatus: i, children: [
    /* @__PURE__ */ l("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ l(vu, { props: n }) }),
    e !== "completed" && /* @__PURE__ */ l(pu, { props: n })
  ] });
}, bu = (n) => "items" in n && "icon" in n && n.icon !== void 0, yu = ({
  props: n
}) => {
  const { status: e, isLast: t = !1, hideStatus: i = !1, expanded: r, items: s } = n;
  return /* @__PURE__ */ C(Wi, { status: e, isLast: t, hideStatus: i, children: [
    /* @__PURE__ */ l("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ l(uu, { props: n }) }),
    r && /* @__PURE__ */ l("div", { className: "flex flex-col pl-4", children: s.map(
      (o, a) => bu(o) ? /* @__PURE__ */ l(
        mo,
        {
          props: {
            ...o,
            hideStatus: !0,
            isLast: a === s.length - 1
          }
        },
        `${o.title}-${a}`
      ) : /* @__PURE__ */ l(
        go,
        {
          props: {
            ...o,
            hideStatus: !0,
            isLast: a === s.length - 1
          }
        },
        `${o.title}-${a}`
      )
    ) })
  ] });
}, xu = (n) => "items" in n && "icon" in n && n.icon !== void 0, wu = (n) => "items" in n && !("icon" in n && n.icon !== void 0), Cu = (n) => xu(n) ? /* @__PURE__ */ l(mo, { props: n }) : wu(n) ? /* @__PURE__ */ l(yu, { props: n }) : /* @__PURE__ */ l(go, { props: n }), yf = [
  "completed",
  "in-progress",
  "not-started"
], xf = se(
  Oe("F0TimelineRow", Cu)
), wf = se(da), Cf = se(
  Oe(
    "F0GridStack",
    Ri
  )
), ni = 16, Su = ht({
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
function po(n, e = 0) {
  return n.flatMap((t) => [
    { id: t.id, depth: Math.min(e, 3) },
    ...t.children ? po(t.children, e + 1) : []
  ]);
}
function Eu(n, e) {
  const t = n.length;
  if (t <= ni) return n;
  const i = t / (ni - 1), r = new Set(
    Array.from(
      { length: ni - 1 },
      (s, o) => Math.min(Math.floor(o * i), t - 1)
    )
  );
  if (r.add(t - 1), e) {
    const s = n.findIndex((o) => o.id === e);
    if (s !== -1 && !r.has(s)) {
      const o = [...r].reduce(
        (a, d) => Math.abs(d - s) < Math.abs(a - s) ? d : a
      );
      r.delete(o), r.add(s);
    }
  }
  return [...r].sort((s, o) => s - o).map((s) => n[s]);
}
function Nu({
  items: n,
  activeItem: e,
  className: t,
  align: i = "left",
  variant: r = "dark"
}) {
  const s = B(
    () => Eu(po(n), e),
    [n, e]
  );
  return /* @__PURE__ */ l(
    "div",
    {
      className: P(
        "flex flex-col justify-center gap-2 py-3",
        i === "right" ? "items-end" : "items-start",
        t
      ),
      children: s.map((o) => /* @__PURE__ */ l(
        "div",
        {
          className: Su({
            depth: o.depth,
            variant: r,
            active: o.id === e
          })
        },
        o.id
      ))
    }
  );
}
const ii = "[role='menu']";
function _u(n, e) {
  const t = W(null), i = I(() => {
    t.current?.(), t.current = null;
  }, []);
  return V(() => i, [i]), { deferClose: I(() => {
    if (!document.querySelector(ii)) return !1;
    i();
    const s = () => {
      a.disconnect(), document.removeEventListener("pointermove", d), t.current = null;
    }, o = () => {
      s(), e();
    }, a = new MutationObserver(() => {
      document.querySelector(ii) || o();
    });
    a.observe(document.body, { childList: !0, subtree: !0 });
    const d = (u) => {
      const c = u.target;
      !c.closest(ii) && !n.current?.contains(c) && o();
    };
    return document.addEventListener("pointermove", d), t.current = s, !0;
  }, [n, e, i]) };
}
const Du = 300, Ru = 0, ku = ht({
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
function vo({
  title: n,
  items: e,
  className: t,
  activeItem: i,
  collapsible: r = !1,
  sortable: s,
  onReorder: o,
  showChildrenCounter: a = !1,
  barsAlign: d = "left",
  size: u = "md",
  variant: c = "light",
  portalContainer: h
}) {
  const [f, m] = j(!1), p = W(!1), v = W(null), { deferClose: g } = _u(v, () => m(!1)), b = (S) => {
    !S && g() || (S && !f && (p.current = !0), m(S));
  }, w = I((S) => {
    v.current = S, !(!S || !p.current) && (p.current = !1, requestAnimationFrame(() => {
      S.querySelector("[data-active]")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }, []);
  return /* @__PURE__ */ C(
    ua,
    {
      open: f,
      onOpenChange: b,
      openDelay: Ru,
      closeDelay: Du,
      children: [
        /* @__PURE__ */ l(ha, { asChild: !0, children: /* @__PURE__ */ l(
          "button",
          {
            className: P(
              Fn(),
              "flex cursor-pointer items-center rounded-md px-1.5 py-1",
              t
            ),
            "aria-label": n ?? "Menu",
            children: /* @__PURE__ */ l(
              Nu,
              {
                items: e,
                activeItem: i,
                align: d,
                variant: c
              }
            )
          }
        ) }),
        /* @__PURE__ */ l(
          fa,
          {
            ref: w,
            side: d === "left" ? "right" : "left",
            align: "center",
            sideOffset: -28,
            container: h,
            className: P(
              ku({ size: u }),
              !n && "pt-2",
              "scrollbar-macos"
            ),
            children: /* @__PURE__ */ l(
              ma,
              {
                title: n,
                items: e,
                activeItem: i,
                collapsible: r,
                sortable: s,
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
const Sf = se(
  Oe(
    "F0TableOfContentPopover",
    vo
  )
), Tu = yt.create(ga), Fu = () => {
  const n = oe();
  return /* @__PURE__ */ C("div", { className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md", children: [
    /* @__PURE__ */ l(
      Tu,
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
    /* @__PURE__ */ l("span", { className: "font-medium", children: n.t("surveyFormBuilder.labels.applyingChanges") })
  ] });
}, Au = os(Fu);
var Lu = Dd();
const yr = /* @__PURE__ */ pa(Lu), bo = (n) => {
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
}, yo = (n) => {
  if (!n || n.length === 0) return null;
  const e = n.length, t = n.every((i) => /^\d+$/.test(i.label.trim()));
  return e === 5 && t ? "1-5" : e === 10 && t ? "1-10" : e === 5 && !t ? "emojis" : null;
}, ui = (n) => {
  switch (n) {
    case "rating":
      return {
        value: 0,
        options: bo("1-5")
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
}, sn = (n) => `new-${n}-${Date.now()}`, xr = [
  "text",
  "longText",
  "select",
  "multi-select",
  "numeric",
  "link",
  "date",
  "file",
  "checkbox"
], Ou = (n) => {
  if (!n)
    return xr[0];
  const e = xr.find(
    (t) => n?.includes(t)
  );
  if (!e)
    throw new Error(
      `No default question type found for allowed question types: ${n.join(", ")}`
    );
  return e;
}, xo = Qe(void 0);
function qi({
  elements: n,
  children: e,
  disabled: t,
  answering: i,
  disallowOptionalQuestions: r,
  onChange: s,
  allowedQuestionTypes: o,
  errors: a,
  onFieldBlur: d,
  useUpload: u,
  datasets: c
}) {
  const h = W(n);
  h.current = n;
  const f = W(s);
  f.current = s;
  const m = B(() => {
    const E = n[n.length - 1];
    if (E)
      return E.type === "section" ? E.section.id : E.question.id;
  }, [n]), p = I((E) => {
    const M = E.id, D = h.current.map((A) => {
      if (A.type === "question")
        return A.question.id === M ? {
          ...A,
          question: {
            ...A.question,
            ...E
          }
        } : A;
      if (A.type === "section") {
        const L = A.section.questions?.map(
          (O) => O.id === M ? {
            ...O,
            ...E
          } : O
        );
        return {
          ...A,
          section: {
            ...A.section,
            questions: L
          }
        };
      }
      return A;
    });
    f.current(D);
  }, []), v = I((E) => {
    const M = E.id, D = h.current.map((A) => A.type === "section" && A.section.id === M ? {
      ...A,
      section: {
        ...A.section,
        ...E
      }
    } : A);
    f.current(D);
  }, []), g = I(
    ({
      element: E,
      afterId: M
    }) => {
      const D = [...h.current];
      if (!M) {
        D.push(E), f.current(D);
        return;
      }
      ((L) => {
        D.forEach((O, z) => {
          O.type === "section" && O.section.id === L && D.splice(z + 1, 0, E), O.type === "question" && O.question.id === L && D.splice(z + 1, 0, E);
        });
      })(M), E.type === "question" && D.length === h.current.length && D.forEach((L, O) => {
        if (L.type !== "section")
          return;
        const z = [...L.section.questions ?? []];
        z?.forEach((K, $) => {
          K.id === M && z.splice($ + 1, 0, E.question);
        }), D.splice(O, 1, {
          ...L,
          section: {
            ...L.section,
            questions: z
          }
        });
      }), f.current(D);
    },
    []
  ), b = I(
    ({ type: E, afterId: M, datasetKey: D }) => {
      if ((E === "dropdown-single" || E === "dropdown-multi") && !D)
        throw new Error(`${E} questions require a datasetKey`);
      const A = sn(
        E === "section" ? "section" : "question"
      ), L = Ou(o), O = E === "section" ? {
        type: "section",
        section: {
          id: A,
          title: "",
          questions: [
            {
              id: sn("question"),
              title: "",
              description: "",
              type: L,
              required: !0,
              ...ui(
                L
              )
            }
          ]
        }
      } : {
        type: "question",
        question: {
          id: A,
          title: "",
          description: "",
          type: E,
          required: !0,
          ...ui(E),
          ...D ? { datasetKey: D } : {}
        }
      };
      g({ element: O, afterId: M });
    },
    [g, o]
  ), w = I(
    ({ elementId: E }) => {
      const D = yr(
        h.current.map(
          (L) => L.type === "section" ? [L, ...L.section.questions ?? []] : [L.question]
        )
      ).find(
        (L) => L.type === "section" ? L.section.id === E : L.id === E
      );
      let A;
      D && (A = D.type === "section" ? {
        ...D,
        section: {
          ...D.section,
          id: sn("section")
        }
      } : {
        type: "question",
        question: { ...D, id: sn("question") }
      }), A && g({ element: A, afterId: E });
    },
    [g]
  ), S = I((E) => yr(
    h.current.map(
      (D) => D.type === "question" ? [D.question] : D.section.questions
    )
  ).find((D) => D?.id === E), []), T = I((E) => {
    let M = h.current.filter((D) => D.type === "section" ? D.section.id !== E : D.type === "question" ? D.question.id !== E : !0);
    M.length === h.current.length && (M = M.map((D) => D.type === "section" ? {
      ...D,
      section: {
        ...D.section,
        questions: D.section.questions?.filter(
          (A) => A.id !== E
        )
      }
    } : D)), f.current(M);
  }, []), R = I((E) => {
    const M = h.current.find((D) => D.type === "section" ? D.section.questions?.some(
      (A) => A.id === E
    ) : !1);
    return M?.type === "section" && M?.section.questions?.length === 1;
  }, []), x = I((E) => {
    const M = h.current.find((D) => D.type === "section" ? D.section.questions?.some(
      (A) => A.id === E
    ) : !1);
    return M?.type === "section" ? M.section : void 0;
  }, []), y = W(!0), _ = !n.length;
  V(() => {
    if (y.current) {
      y.current = !1, _ && !t && !i && b({
        type: "section"
      });
      return;
    }
  }, [_, b, t]);
  const k = I(
    (E) => E === "file" && !u ? !1 : !o || o.includes(E),
    [o, u]
  ), F = B(
    () => ({
      onQuestionChange: p,
      onSectionChange: v,
      onAddNewElement: b,
      onDuplicateElement: w,
      getIsSingleQuestionInSection: R,
      getSectionContainingQuestion: x,
      disabled: t,
      answering: i,
      getQuestionById: S,
      deleteElement: T,
      lastElementId: m,
      disallowOptionalQuestions: r,
      isQuestionTypeAllowed: k,
      errors: a,
      onFieldBlur: d,
      useUpload: u,
      datasets: c
    }),
    [
      p,
      v,
      b,
      w,
      R,
      x,
      t,
      i,
      S,
      T,
      m,
      r,
      k,
      a,
      d,
      u,
      c
    ]
  );
  return /* @__PURE__ */ l(xo.Provider, { value: F, children: e });
}
function ue() {
  const n = Re(xo);
  if (!n)
    throw new Error(
      "useSurveyFormBuilderContext must be used within a SurveyFormBuilderProvider"
    );
  return n;
}
const wo = Qe(void 0);
function Gi({ children: n }) {
  const [e, t] = j(!1), [i, r] = j(null);
  return /* @__PURE__ */ l(
    wo.Provider,
    {
      value: { isDragging: e, setIsDragging: t, draggedItemId: i, setDraggedItemId: r },
      children: n
    }
  );
}
function Nt() {
  const n = Re(wo);
  return n || {
    isDragging: !1,
    setIsDragging: () => {
    },
    draggedItemId: null,
    setDraggedItemId: () => {
    }
  };
}
const $i = () => {
  const { isQuestionTypeAllowed: n, datasets: e } = ue(), { t } = oe(), r = [
    {
      label: t("surveyFormBuilder.questionTypes.rating"),
      icon: jr,
      questionType: "rating"
    },
    {
      label: t("surveyFormBuilder.questionTypes.multipleChoice"),
      icon: ft,
      questionType: "multi-select"
    },
    {
      label: t("surveyFormBuilder.questionTypes.singleChoice"),
      icon: We,
      questionType: "select"
    },
    {
      label: t("surveyFormBuilder.questionTypes.text"),
      icon: Ur,
      questionType: "text"
    },
    {
      label: t("surveyFormBuilder.questionTypes.longText"),
      icon: Vr,
      questionType: "longText"
    },
    {
      label: t("surveyFormBuilder.questionTypes.numeric"),
      icon: mn,
      questionType: "numeric"
    },
    {
      label: t("surveyFormBuilder.questionTypes.link"),
      icon: Qr,
      questionType: "link"
    },
    {
      label: t("surveyFormBuilder.questionTypes.date"),
      icon: Kr,
      questionType: "date"
    },
    {
      label: t("surveyFormBuilder.questionTypes.file"),
      icon: Xr,
      questionType: "file"
    },
    {
      label: t("surveyFormBuilder.questionTypes.checkbox"),
      icon: On,
      questionType: "checkbox"
    }
  ].filter(
    (o) => n(o.questionType)
  ), s = n("dropdown-single") ? Object.entries(e ?? {}).map(([o, a]) => ({
    label: a.title,
    icon: a.icon ?? fn,
    questionType: "dropdown-single",
    datasetKey: o
  })) : [];
  return [...r, ...s];
}, Mu = {
  rating: jr,
  "multi-select": ft,
  select: We,
  text: Ur,
  longText: Vr,
  numeric: mn,
  link: Qr,
  date: Kr,
  "dropdown-single": fn,
  "dropdown-multi": fn,
  file: Xr,
  checkbox: On
}, zu = () => {
  const { disabled: n, answering: e, onAddNewElement: t, isQuestionTypeAllowed: i } = ue(), [r, s] = j(!1), o = $i(), { t: a } = oe(), d = (f, m) => {
    t?.({ type: f, datasetKey: m });
  }, u = () => {
    t?.({ type: "section" });
  }, c = o.filter((f) => !f.datasetKey), h = Array.from(
    new Set(
      o.filter((f) => !!f.datasetKey).map((f) => f.datasetKey)
    )
  );
  return n || e ? null : /* @__PURE__ */ l("div", { className: "ml-6 flex justify-center", children: /* @__PURE__ */ C(bi, { open: r, onOpenChange: s, children: [
    /* @__PURE__ */ l(yi, { asChild: !0, children: /* @__PURE__ */ l(
      Ce,
      {
        icon: xi,
        label: a("surveyFormBuilder.actions.addQuestion"),
        size: "md",
        variant: "outline",
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ C(wi, { align: "center", className: "w-80", children: [
      /* @__PURE__ */ l(De, { onClick: u, children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
        /* @__PURE__ */ l(he, { icon: Ci, color: "default" }),
        /* @__PURE__ */ l("span", { className: "flex-1 text-base font-medium", children: a("surveyFormBuilder.questionTypes.section") })
      ] }) }),
      /* @__PURE__ */ l(xt, {}),
      c.map((f) => /* @__PURE__ */ l(
        De,
        {
          onClick: () => d(f.questionType),
          children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ l(he, { icon: f.icon, color: "default" }),
            /* @__PURE__ */ l("span", { className: "flex-1 text-base font-medium", children: f.label })
          ] })
        },
        f.questionType
      )),
      h.length > 0 && /* @__PURE__ */ C(we, { children: [
        /* @__PURE__ */ l(xt, {}),
        h.map((f) => {
          const m = o.find(
            (p) => p.datasetKey === f && p.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ C(At, { children: [
            /* @__PURE__ */ l(Lt, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
              m && /* @__PURE__ */ l(he, { icon: m.icon, color: "default" }),
              /* @__PURE__ */ l("span", { className: "flex-1 text-base font-medium", children: m?.label ?? f })
            ] }) }),
            /* @__PURE__ */ l(Ot, { children: /* @__PURE__ */ C(Mt, { children: [
              i("dropdown-single") && /* @__PURE__ */ l(
                De,
                {
                  onClick: () => d("dropdown-single", f),
                  children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ l(he, { icon: We, color: "default" }),
                    /* @__PURE__ */ l("span", { className: "flex-1", children: a("surveyFormBuilder.labels.singleSelection") })
                  ] })
                }
              ),
              i("dropdown-multi") && /* @__PURE__ */ l(
                De,
                {
                  onClick: () => d("dropdown-multi", f),
                  children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ l(he, { icon: ft, color: "default" }),
                    /* @__PURE__ */ l("span", { className: "flex-1", children: a("surveyFormBuilder.labels.multiSelection") })
                  ] })
                }
              )
            ] }) })
          ] }, f);
        })
      ] })
    ] })
  ] }) });
}, Iu = ({
  open: n,
  onConfirm: e,
  onCancel: t
}) => {
  const { t: i } = oe();
  return /* @__PURE__ */ l(
    Ka,
    {
      open: n,
      onClose: t,
      header: {
        type: "warning",
        title: i("surveyFormBuilder.labels.lastQuestionDialogTitle"),
        description: i(
          "surveyFormBuilder.labels.lastQuestionDialogDescription"
        )
      },
      actions: {
        primary: {
          label: i("surveyFormBuilder.actions.confirmMoveLastQuestion"),
          onClick: e
        },
        secondary: {
          label: i("surveyFormBuilder.actions.cancelMoveLastQuestion"),
          onClick: t
        }
      }
    }
  );
}, kn = [
  { label: "1 - 5", value: "1-5" },
  { label: "1 - 10", value: "1-10" },
  { label: "Emojis", value: "emojis" }
];
function Bu(n, e) {
  if (n !== "rating" || !e || e.type !== "rating")
    return null;
  const t = e.options;
  return !Array.isArray(t) || t.length === 0 || typeof t[0]?.value != "number" ? null : yo(t);
}
function Pu(n, e, t) {
  return !(n === e || (n === "select" || n === "multi-select") && t && "options" in t && Array.isArray(t.options) && t.options.length > 0 || (n === "dropdown-single" || n === "dropdown-multi") && (e === "dropdown-single" || e === "dropdown-multi"));
}
function Co() {
  const {
    onQuestionChange: n,
    getQuestionById: e,
    deleteElement: t,
    onDuplicateElement: i,
    disallowOptionalQuestions: r
  } = ue(), s = $i();
  return { getActionsForQuestion: I(
    (a, d, u) => {
      const c = e(a), h = c && "datasetKey" in c && typeof c.datasetKey == "string" ? c.datasetKey : void 0, f = Bu(d, c);
      return {
        question: c,
        questionTypes: s,
        currentRatingType: f,
        currentDatasetKey: h,
        isMultiSelectEnabled: d === "dropdown-multi" && !!h,
        disallowOptionalQuestions: r,
        canDelete: u,
        handleChangeRequired: (T) => {
          n?.({
            id: a,
            type: d,
            required: T
          });
        },
        handleSelectQuestionType: (T, R) => {
          const x = Pu(
            T,
            d,
            c
          ), y = T === "dropdown-single" || T === "dropdown-multi", _ = d === "dropdown-single" || d === "dropdown-multi";
          n?.({
            id: a,
            type: T,
            // Set datasetKey for dropdown types, clear it for non-dropdown types
            ...y ? { datasetKey: R } : { datasetKey: void 0 },
            // Reset value when switching between single/multi or switching into
            // a dropdown type from a different type to avoid incompatible values
            ...y && _ && T !== d || y && !_ ? { value: T === "dropdown-multi" ? [] : null } : {},
            ...x && {
              ...ui(T)
            }
          });
        },
        handleSelectRatingType: (T) => {
          n?.({
            id: a,
            type: "rating",
            value: 0,
            options: bo(T)
          });
        },
        handleToggleMultiSelect: (T) => {
          if (!h) return;
          n?.({
            id: a,
            type: T ? "dropdown-multi" : "dropdown-single",
            datasetKey: h,
            value: T ? [] : null
          });
        },
        handleDuplicate: () => {
          i?.({ elementId: a, type: d });
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
      i,
      r,
      s
    ]
  ), questionTypes: s };
}
function Hu({
  questionId: n,
  questionType: e,
  canDelete: t = !0
}) {
  const { getActionsForQuestion: i } = Co();
  return B(
    () => i(n, e, t),
    [i, n, e, t]
  );
}
const wr = ({
  label: n,
  icon: e,
  checked: t,
  onChange: i
}) => /* @__PURE__ */ l(
  De,
  {
    className: "!pb-2.5 pr-4",
    onClick: (r) => {
      r.preventDefault(), i(!t);
    },
    children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ l(_e, { icon: e, color: "default" }),
      /* @__PURE__ */ l("span", { className: "flex-1", children: n }),
      /* @__PURE__ */ l(
        ba,
        {
          title: n,
          checked: t,
          onCheckedChange: i,
          hideLabel: !0
        }
      )
    ] })
  }
), Wu = ({
  label: n,
  value: e,
  currentDatasetKey: t,
  questionTypes: i,
  currentRatingType: r,
  isQuestionTypeAllowed: s,
  onSelectQuestionType: o,
  onSelectRatingType: a
}) => {
  const { t: d } = oe(), u = i.filter((f) => !f.datasetKey), c = Array.from(
    new Set(
      i.filter((f) => !!f.datasetKey).map((f) => f.datasetKey)
    )
  ), h = t ? i.find(
    (f) => f.questionType === e && f.datasetKey === t
  )?.label ?? void 0 : i.find(
    (f) => f.questionType === e && !f.datasetKey
  )?.label ?? void 0;
  return /* @__PURE__ */ C(At, { children: [
    /* @__PURE__ */ l(Lt, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ l(_e, { icon: Jr, color: "default" }),
      /* @__PURE__ */ l("span", { className: "flex-1 text-base font-medium", children: n }),
      !!h && /* @__PURE__ */ l("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: h })
    ] }) }),
    /* @__PURE__ */ l(Ot, { children: /* @__PURE__ */ C(Mt, { children: [
      u.map((f) => {
        const m = f.questionType === "rating", p = e === f.questionType && !t;
        return m ? /* @__PURE__ */ C(At, { children: [
          /* @__PURE__ */ l(Lt, { className: "mx-1 mt-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2 text-base font-medium", children: [
            /* @__PURE__ */ l(_e, { icon: f.icon, color: "default" }),
            /* @__PURE__ */ l("span", { className: "flex-1", children: f.label }),
            r && /* @__PURE__ */ l("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: kn.find(
              (v) => v.value === r
            )?.label })
          ] }) }),
          /* @__PURE__ */ l(Ot, { children: /* @__PURE__ */ l(Mt, { children: kn.map((v) => /* @__PURE__ */ l(
            De,
            {
              onClick: () => a(v.value),
              children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2 pl-2", children: [
                /* @__PURE__ */ l("span", { className: "flex-1", children: v.label }),
                r === v.value && /* @__PURE__ */ l(_e, { icon: We, color: "default" })
              ] })
            },
            v.value
          )) }) })
        ] }, f.questionType) : /* @__PURE__ */ l(
          De,
          {
            onClick: () => o(f.questionType),
            children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
              /* @__PURE__ */ l(_e, { icon: f.icon, color: "default" }),
              /* @__PURE__ */ l("span", { className: "flex-1", children: f.label }),
              p && /* @__PURE__ */ l(_e, { icon: We, color: "default" })
            ] })
          },
          f.questionType
        );
      }),
      c.length > 0 && /* @__PURE__ */ C(we, { children: [
        /* @__PURE__ */ l(xt, {}),
        c.map((f) => {
          const m = i.find(
            (p) => p.datasetKey === f && p.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ C(At, { children: [
            /* @__PURE__ */ l(Lt, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
              m && /* @__PURE__ */ l(_e, { icon: m.icon, color: "default" }),
              /* @__PURE__ */ l("span", { className: "flex-1 text-base font-medium", children: m?.label ?? f }),
              t === f && /* @__PURE__ */ l(_e, { icon: We, color: "default" })
            ] }) }),
            /* @__PURE__ */ l(Ot, { children: /* @__PURE__ */ C(Mt, { children: [
              s("dropdown-single") && /* @__PURE__ */ l(
                De,
                {
                  onClick: () => o("dropdown-single", f),
                  children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ l(_e, { icon: We, color: "default" }),
                    /* @__PURE__ */ l("span", { className: "flex-1", children: d("surveyFormBuilder.labels.singleSelection") }),
                    t === f && e === "dropdown-single" && /* @__PURE__ */ l(_e, { icon: We, color: "default" })
                  ] })
                }
              ),
              s("dropdown-multi") && /* @__PURE__ */ l(
                De,
                {
                  onClick: () => o("dropdown-multi", f),
                  children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ l(_e, { icon: ft, color: "default" }),
                    /* @__PURE__ */ l("span", { className: "flex-1", children: d("surveyFormBuilder.labels.multiSelection") }),
                    t === f && e === "dropdown-multi" && /* @__PURE__ */ l(_e, { icon: We, color: "default" })
                  ] })
                }
              )
            ] }) })
          ] }, f);
        })
      ] })
    ] }) })
  ] });
}, Cr = ({
  label: n,
  icon: e,
  onClick: t,
  critical: i
}) => /* @__PURE__ */ l(
  De,
  {
    onClick: t,
    className: P(i ? "text-f1-foreground-critical" : void 0),
    children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ l(_e, { icon: e }),
      /* @__PURE__ */ l("span", { className: "flex-1", children: n })
    ] })
  }
);
function qu({
  open: n,
  setOpen: e,
  questionId: t,
  questionType: i,
  canDeleteQuestion: r = !0
}) {
  const { t: s } = oe(), { isQuestionTypeAllowed: o } = ue(), {
    question: a,
    questionTypes: d,
    currentRatingType: u,
    currentDatasetKey: c,
    isMultiSelectEnabled: h,
    disallowOptionalQuestions: f,
    handleChangeRequired: m,
    handleSelectQuestionType: p,
    handleSelectRatingType: v,
    handleToggleMultiSelect: g,
    handleDuplicate: b,
    handleDelete: w
  } = Hu({
    questionId: t,
    questionType: i,
    canDelete: r
  });
  return /* @__PURE__ */ C(bi, { open: n, onOpenChange: e, children: [
    /* @__PURE__ */ l(yi, { tabIndex: -1, asChild: !0, children: /* @__PURE__ */ l(
      Ce,
      {
        icon: un,
        label: s("surveyFormBuilder.labels.actions"),
        size: "md",
        variant: "ghost",
        tooltip: !1,
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ C(wi, { className: "w-80", align: "start", children: [
      /* @__PURE__ */ l(va, { className: "p-4 pb-2 font-medium text-f1-foreground-secondary", children: s("surveyFormBuilder.labels.questionOptions") }),
      !f && /* @__PURE__ */ l(Zt, { children: /* @__PURE__ */ l(
        wr,
        {
          label: s("surveyFormBuilder.labels.required"),
          icon: Yr,
          checked: !!a?.required,
          onChange: m
        }
      ) }),
      !!c && /* @__PURE__ */ l(Zt, { children: /* @__PURE__ */ l(
        wr,
        {
          label: s("surveyFormBuilder.labels.allowMultiSelection"),
          icon: ft,
          checked: h,
          onChange: g
        }
      ) }),
      /* @__PURE__ */ l(Zt, { children: /* @__PURE__ */ l(
        Wu,
        {
          label: s("surveyFormBuilder.labels.questionType"),
          value: i,
          currentDatasetKey: c,
          questionTypes: d,
          currentRatingType: u,
          isQuestionTypeAllowed: o,
          onSelectQuestionType: p,
          onSelectRatingType: v
        }
      ) }),
      /* @__PURE__ */ l(xt, {}),
      /* @__PURE__ */ C(Zt, { children: [
        /* @__PURE__ */ l(
          Cr,
          {
            label: s("surveyFormBuilder.actions.duplicateQuestion"),
            icon: gn,
            onClick: b
          }
        ),
        r && /* @__PURE__ */ l(
          Cr,
          {
            label: s("surveyFormBuilder.actions.deleteQuestion"),
            icon: Pt,
            onClick: w,
            critical: !0
          }
        )
      ] })
    ] })
  ] });
}
function mt(n) {
  const { answering: e, getSectionContainingQuestion: t } = ue(), i = t(n.id), r = n.locked || i?.locked;
  return e ? !1 : r || !0;
}
const Sr = {
  fieldSizing: "content"
}, ce = ({
  id: n,
  title: e,
  description: t,
  children: i,
  required: r,
  locked: s,
  type: o
}) => {
  const {
    onQuestionChange: a,
    onAddNewElement: d,
    disabled: u,
    answering: c,
    getIsSingleQuestionInSection: h,
    getSectionContainingQuestion: f,
    isQuestionTypeAllowed: m
  } = ue(), p = f(n), v = p?.locked || s, g = !!p, [b, w] = j(!1), [S, T] = j(!1), { isDragging: R } = Nt(), { t: x } = oe(), y = ($) => {
    a?.({
      id: n,
      type: o,
      title: $.target.value
    });
  }, _ = ($) => {
    a?.({
      id: n,
      type: o,
      description: $.target.value
    });
  }, k = ($, ee) => {
    d?.({
      type: $,
      afterId: n,
      datasetKey: ee
    });
  }, F = () => {
    d?.({
      type: "section",
      afterId: n
    });
  }, E = $i(), M = E.filter(($) => !$.datasetKey), D = Array.from(
    new Set(
      E.filter(($) => !!$.datasetKey).map(($) => $.datasetKey)
    )
  ), A = h(n), L = W(null), O = W(!A);
  V(() => {
    O.current && L.current?.focus({ preventScroll: !0 });
  }, []);
  const z = u || v || c, K = !c && z;
  return /* @__PURE__ */ C(
    "div",
    {
      id: `co-creation-question-${n}`,
      className: P(
        "group/question relative flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 py-4",
        !R && !c && "hover:border-f1-border-hover",
        !c || t ? "gap-4" : "gap-2"
      ),
      children: [
        /* @__PURE__ */ C("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ C("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ l("div", { className: "relative w-full", children: c ? /* @__PURE__ */ C("div", { className: "w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold text-f1-foreground", children: [
              e || x("surveyFormBuilder.labels.titlePlaceholder"),
              r && /* @__PURE__ */ l("span", { className: "text-f1-foreground-critical", children: " *" })
            ] }) : /* @__PURE__ */ C(we, { children: [
              /* @__PURE__ */ l(
                "textarea",
                {
                  ref: L,
                  value: e,
                  "aria-label": x("surveyFormBuilder.labels.title"),
                  placeholder: x("surveyFormBuilder.labels.titlePlaceholder"),
                  onChange: y,
                  disabled: z,
                  className: P(
                    "w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                    K && "cursor-not-allowed"
                  ),
                  style: Sr
                }
              ),
              /* @__PURE__ */ C("div", { className: "textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold", children: [
                /* @__PURE__ */ l("span", { className: "opacity-0", children: e || x("surveyFormBuilder.labels.titlePlaceholder") }),
                r && /* @__PURE__ */ C(
                  "span",
                  {
                    className: P(
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
            !u && !c && !v && /* @__PURE__ */ l(
              "div",
              {
                className: P(
                  "opacity-0 group-hover/question:opacity-100",
                  S && "opacity-100"
                ),
                children: /* @__PURE__ */ l(
                  qu,
                  {
                    open: S,
                    setOpen: T,
                    questionId: n,
                    questionType: o,
                    canDeleteQuestion: !g || !A
                  }
                )
              }
            )
          ] }),
          c ? t ? /* @__PURE__ */ l("p", { className: "w-full whitespace-pre-wrap break-words px-2 text-f1-foreground-secondary", children: t }) : null : /* @__PURE__ */ l(
            "textarea",
            {
              value: t,
              "aria-label": x("surveyFormBuilder.labels.description"),
              placeholder: x(
                "surveyFormBuilder.labels.questionDescriptionPlaceholder"
              ),
              onChange: _,
              disabled: z,
              className: P(
                "w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                K && "cursor-not-allowed"
              ),
              style: Sr
            }
          )
        ] }),
        i,
        c && /* @__PURE__ */ l(
          ya,
          {
            className: "-mt-2",
            fallback: x(r ? "forms.validation.required" : "forms.validation.invalidType")
          }
        ),
        !u && !c && !p?.locked && /* @__PURE__ */ l(
          "div",
          {
            className: P(
              "absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100",
              b && "opacity-100"
            ),
            children: /* @__PURE__ */ C(
              bi,
              {
                open: b,
                onOpenChange: w,
                children: [
                  /* @__PURE__ */ l(yi, { asChild: !0, children: /* @__PURE__ */ l(
                    Ce,
                    {
                      icon: xi,
                      label: x("surveyFormBuilder.actions.addQuestion"),
                      size: "sm",
                      variant: "outline",
                      hideLabel: !0
                    }
                  ) }),
                  /* @__PURE__ */ C(wi, { align: "center", className: "w-80", children: [
                    !g && /* @__PURE__ */ C(we, { children: [
                      /* @__PURE__ */ l(De, { onClick: F, children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
                        /* @__PURE__ */ l(he, { icon: Ci, color: "default" }),
                        /* @__PURE__ */ l("span", { className: "flex-1 text-base font-medium", children: x("surveyFormBuilder.questionTypes.section") })
                      ] }) }),
                      /* @__PURE__ */ l(xt, {})
                    ] }),
                    M.map(($) => /* @__PURE__ */ l(
                      De,
                      {
                        onClick: () => k($.questionType),
                        children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
                          /* @__PURE__ */ l(he, { icon: $.icon, color: "default" }),
                          /* @__PURE__ */ l("span", { className: "flex-1 text-base font-medium", children: $.label })
                        ] })
                      },
                      $.questionType
                    )),
                    D.length > 0 && /* @__PURE__ */ C(we, { children: [
                      /* @__PURE__ */ l(xt, {}),
                      D.map(($) => {
                        const ee = E.find(
                          (re) => re.datasetKey === $ && re.questionType === "dropdown-single"
                        );
                        return /* @__PURE__ */ C(At, { children: [
                          /* @__PURE__ */ l(Lt, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
                            ee && /* @__PURE__ */ l(he, { icon: ee.icon, color: "default" }),
                            /* @__PURE__ */ l("span", { className: "flex-1 text-base font-medium", children: ee?.label ?? $ })
                          ] }) }),
                          /* @__PURE__ */ l(Ot, { children: /* @__PURE__ */ C(Mt, { children: [
                            m("dropdown-single") && /* @__PURE__ */ l(
                              De,
                              {
                                onClick: () => k("dropdown-single", $),
                                children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ l(he, { icon: We, color: "default" }),
                                  /* @__PURE__ */ l("span", { className: "flex-1", children: x(
                                    "surveyFormBuilder.labels.singleSelection"
                                  ) })
                                ] })
                              }
                            ),
                            m("dropdown-multi") && /* @__PURE__ */ l(
                              De,
                              {
                                onClick: () => k("dropdown-multi", $),
                                children: /* @__PURE__ */ C("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ l(he, { icon: ft, color: "default" }),
                                  /* @__PURE__ */ l("span", { className: "flex-1", children: x(
                                    "surveyFormBuilder.labels.multiSelection"
                                  ) })
                                ] })
                              }
                            )
                          ] }) })
                        ] }, $);
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
}, Gu = {
  fieldSizing: "content"
}, $u = ({
  value: n,
  label: e,
  ...t
}) => {
  const { onQuestionChange: i, answering: r, disabled: s } = ue(), o = mt(t), { t: a } = oe();
  if (r)
    return /* @__PURE__ */ l(ce, { ...t, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
      pn,
      {
        id: t.id,
        checked: n ?? !1,
        onCheckedChange: (u) => {
          i?.({
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
  const d = s || t.locked;
  return /* @__PURE__ */ l(ce, { ...t, children: /* @__PURE__ */ C("div", { className: "flex items-start px-0.5", children: [
    /* @__PURE__ */ l(pn, { checked: !1, disabled: !0, hideLabel: !0, presentational: !0 }),
    /* @__PURE__ */ l(
      "textarea",
      {
        value: e,
        placeholder: a("surveyFormBuilder.checkboxQuestion.placeholder"),
        "aria-label": a("surveyFormBuilder.checkboxQuestion.placeholder"),
        onChange: (u) => {
          i?.({
            ...t,
            type: "checkbox",
            label: u.target.value
          });
        },
        disabled: !!d,
        className: P(
          "w-full resize-none bg-transparent pt-0.5 pl-2.5 text-f1-foreground-secondary outline-none placeholder:text-f1-foreground-tertiary",
          d && "cursor-not-allowed opacity-50"
        ),
        style: Gu
      }
    )
  ] }) });
}, ju = ({
  value: n,
  ...e
}) => {
  const { onQuestionChange: t } = ue(), i = mt(e), { t: r } = oe(), s = {
    id: e.id,
    type: "date",
    label: r("surveyFormBuilder.answer.label"),
    clearable: !e.required
  };
  return /* @__PURE__ */ l(ce, { ...e, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
    Ee,
    {
      field: s,
      value: n ?? void 0,
      onChange: (o) => {
        t?.({
          ...e,
          type: "date",
          value: o ?? void 0
        });
      },
      disabled: i,
      hideLabel: !0
    }
  ) }) });
}, Uu = ({
  datasetKey: n,
  showSearchBox: e,
  searchBoxPlaceholder: t,
  ...i
}) => {
  const { onQuestionChange: r, answering: s, datasets: o } = ue(), a = mt(i), { t: d } = oe(), u = o?.[n];
  if (!u)
    throw new Error(`Dataset "${n}" not found for ${i.type}`);
  const c = i.type === "dropdown-multi", h = e ?? !0, f = {
    id: i.id,
    type: "select",
    label: d("surveyFormBuilder.answer.label"),
    placeholder: u.placeholder ?? d("surveyFormBuilder.answer.dropdownPlaceholder"),
    source: u.dataSource,
    mapOptions: u.mapOptions,
    icon: u.icon,
    clearable: !i.required,
    multiple: c,
    showSearchBox: h,
    searchBoxPlaceholder: t
  };
  return /* @__PURE__ */ l(ce, { ...i, children: /* @__PURE__ */ l("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ l(
    Ee,
    {
      field: f,
      value: c ? i.value ?? [] : i.value ?? "",
      onChange: (m) => {
        r?.(c ? {
          id: i.id,
          type: "dropdown-multi",
          value: m
        } : {
          id: i.id,
          type: "dropdown-single",
          value: m
        });
      },
      disabled: !s || a,
      hideLabel: !0
    }
  ) }) });
}, So = [
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
], Vu = () => ({
  upload: async (n) => ({
    type: "success",
    value: `local-${n.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
}), Qu = ({
  value: n,
  useUpload: e,
  accept: t,
  maxSizeMB: i,
  ...r
}) => {
  const { onQuestionChange: s, useUpload: o } = ue(), a = mt(r), { t: d } = oe(), u = e ?? o, c = {
    id: r.id,
    type: "file",
    label: d("surveyFormBuilder.answer.label"),
    multiple: !0,
    accept: t ?? So,
    maxSizeMB: i,
    useUpload: u ?? Vu
  };
  return /* @__PURE__ */ l(ce, { ...r, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
    Ee,
    {
      field: c,
      value: n ?? [],
      onChange: (h) => {
        s?.({
          ...r,
          type: "file",
          value: h || null
        });
      },
      disabled: a,
      hideLabel: !0
    }
  ) }) });
}, Ku = ({
  value: n,
  ...e
}) => {
  const { t } = oe(), { onQuestionChange: i, answering: r } = ue(), s = mt(e), o = t("surveyFormBuilder.answer.linkPlaceholder"), a = {
    id: e.id,
    type: "text",
    inputType: "url",
    label: t("surveyFormBuilder.answer.label"),
    placeholder: o,
    clearable: !e.required
  };
  return /* @__PURE__ */ l(ce, { ...e, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
    Ee,
    {
      field: a,
      value: r ? n ?? "" : o,
      onChange: (d) => {
        i?.({
          ...e,
          type: "link",
          value: d || null
        });
      },
      disabled: s,
      hideLabel: !0
    }
  ) }) });
}, Xu = ({
  value: n,
  ...e
}) => {
  const { t } = oe(), { onQuestionChange: i, answering: r } = ue(), s = mt(e), o = (d) => {
    i?.({
      ...e,
      type: "numeric",
      value: d
    });
  }, a = t("surveyFormBuilder.answer.numericPlaceholder");
  return /* @__PURE__ */ l(ce, { ...e, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: r ? /* @__PURE__ */ l(
    xa,
    {
      locale: "en-US",
      size: "md",
      value: n,
      onChange: o,
      disabled: s,
      label: t("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      required: e.required,
      maxDecimals: 0,
      placeholder: a,
      icon: mn
    }
  ) : /* @__PURE__ */ l(
    wa,
    {
      type: "text",
      size: "md",
      value: a,
      onChange: () => {
      },
      disabled: !0,
      label: t("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      icon: mn
    }
  ) }) });
}, Yu = ({
  option: n,
  selected: e,
  onClick: t,
  onChangeLabel: i,
  disabled: r,
  isEmojiMode: s = !1
}) => {
  const { value: o, label: a } = n, [d, u] = j(!1), c = () => {
    r || t(o);
  }, h = (f) => {
    i?.(o, f.native), u(!1);
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: P(
        "group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        e && "border-f1-border-selected bg-f1-background-selected-secondary",
        r ? "cursor-default" : "cursor-pointer"
      ),
      onClick: c,
      children: s ? /* @__PURE__ */ C(fi, { open: d, onOpenChange: u, children: [
        /* @__PURE__ */ l(mi, { asChild: !0, children: /* @__PURE__ */ l(
          Ce,
          {
            emoji: a,
            label: o.toString(),
            variant: "ghost",
            hideLabel: !0
          }
        ) }),
        /* @__PURE__ */ l(
          gi,
          {
            side: "bottom",
            align: "center",
            className: "w-fit border-none bg-transparent p-2 shadow-none",
            onClick: (f) => {
              f.preventDefault(), f.stopPropagation();
            },
            children: /* @__PURE__ */ l(
              Ca,
              {
                data: Sa,
                onEmojiSelect: h,
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
      ] }) : /* @__PURE__ */ l("span", { className: "text-base font-medium", children: a })
    }
  );
}, Ju = ({
  options: n,
  value: e,
  ...t
}) => {
  const { onQuestionChange: i, disabled: r, answering: s } = ue(), a = yo(n) === "emojis", d = (c) => {
    i?.({
      id: t.id,
      value: c,
      type: "rating"
    });
  }, u = (c, h) => {
    const f = n.map(
      (m) => m.value === c ? { ...m, label: h } : m
    );
    i?.({
      id: t.id,
      type: "rating",
      value: e ?? 0,
      options: f
    });
  };
  return /* @__PURE__ */ l(ce, { ...t, children: /* @__PURE__ */ l("div", { className: "grid grid-cols-3 gap-3 @md:grid-cols-5", children: n.map((c) => /* @__PURE__ */ l(
    Yu,
    {
      option: c,
      selected: e === c.value,
      onClick: d,
      onChangeLabel: u,
      disabled: r && !s,
      isEmojiMode: s ? !1 : a
    },
    c.value
  )) }) });
}, Zu = (n) => /* @__PURE__ */ l(Ju, { ...n, type: "rating" });
function eh({
  checked: n,
  disabled: e
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "aria-hidden": "true",
      className: P(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        n ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background",
        e && "opacity-50"
      ),
      children: n && /* @__PURE__ */ l("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
const th = {
  fieldSizing: "content"
}, nh = ({
  index: n,
  option: e,
  onClick: t,
  onClickAction: i,
  onChangeLabel: r,
  disabled: s,
  answering: o,
  selected: a,
  correct: d,
  locked: u,
  type: c
}) => {
  const { value: h, label: f } = e, { isDragging: m, setIsDragging: p, setDraggedItemId: v, draggedItemId: g } = Nt(), { t: b } = oe(), w = m && g === h, S = () => {
    !s && !o || t(h);
  }, T = (M) => {
    i({ value: h, index: n, action: M });
  }, R = (M) => {
    M.stopPropagation(), T("mark-as-correct");
  }, x = (M) => {
    M.stopPropagation(), T("remove");
  }, y = (M) => {
    const D = M.target.value;
    r({ value: h, index: n, newLabel: D });
  }, _ = () => {
    p(!0), v(h);
  }, k = () => {
    p(!1), v(null);
  }, F = m ? w : !s && !o, E = !s && !o && !u;
  return /* @__PURE__ */ l(
    Mn,
    {
      value: e,
      onDragStart: _,
      onDragEnd: k,
      dragListener: E,
      layout: "position",
      as: "div",
      children: /* @__PURE__ */ C(
        "div",
        {
          className: P(
            "group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover",
            (s || o) && "cursor-pointer",
            m && "!cursor-grabbing active:!cursor-grabbing"
          ),
          onClick: S,
          children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: P(
                  "block",
                  F ? "group-hover:hidden" : "cursor-default",
                  m && "cursor-grabbing [&_button]:cursor-grabbing"
                ),
                children: c === "multi-select" ? /* @__PURE__ */ l(
                  pn,
                  {
                    title: f,
                    checked: o ? !!a : !1,
                    onCheckedChange: S,
                    disabled: !o,
                    presentational: !o,
                    hideLabel: !0
                  }
                ) : /* @__PURE__ */ l(
                  eh,
                  {
                    checked: o ? !!a : !1,
                    disabled: !o
                  }
                )
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: P(
                  "hidden scale-75 cursor-grab",
                  E && "active:cursor-grabbing",
                  F && "group-hover:block",
                  m && "cursor-grabbing",
                  !E && "cursor-not-allowed"
                ),
                children: /* @__PURE__ */ l(
                  "div",
                  {
                    className: P(
                      "flex aspect-square scale-90 items-center justify-center",
                      c === "multi-select" ? "w-6" : "w-5"
                    ),
                    children: /* @__PURE__ */ l(_e, { icon: Ut, size: "sm" })
                  }
                )
              }
            ),
            !s && !o && !u ? /* @__PURE__ */ l(
              "textarea",
              {
                placeholder: b(
                  "surveyFormBuilder.selectQuestion.optionPlaceholder"
                ),
                value: f,
                onChange: y,
                className: "flex-1 resize-none font-medium",
                style: th
              }
            ) : /* @__PURE__ */ l("p", { className: "flex-1 font-medium", children: f }),
            !s && !o && d && /* @__PURE__ */ l("span", { className: "text-sm font-medium text-f1-foreground-positive", children: b("surveyFormBuilder.selectQuestion.correct") }),
            !s && !o && !u ? /* @__PURE__ */ C("div", { className: "hidden flex-row items-center gap-1 group-hover:inline-block", children: [
              /* @__PURE__ */ l(
                Ce,
                {
                  label: b("surveyFormBuilder.selectQuestion.markAsCorrect"),
                  variant: "ghost",
                  icon: d ? zn : Zr,
                  onClick: R,
                  hideLabel: !0
                }
              ),
              /* @__PURE__ */ l(
                Ce,
                {
                  label: b("surveyFormBuilder.selectQuestion.remove"),
                  variant: "ghost",
                  icon: Pt,
                  hideLabel: !0,
                  onClick: x
                }
              )
            ] }) : /* @__PURE__ */ l("div", { className: "min-h-8" })
          ]
        }
      )
    }
  );
}, ih = ({ options: n, ...e }) => {
  const {
    onQuestionChange: t,
    disabled: i,
    answering: r,
    getSectionContainingQuestion: s
  } = ue(), o = new Set(n.map((g) => g.value)).size !== n.length, a = s(e.id), d = e.locked || a?.locked, { t: u } = oe(), c = B(
    () => ({
      id: e.id,
      type: e.type,
      options: n
    }),
    [e.id, e.type, n]
  );
  V(() => {
    if (!o) return;
    let g = n.map((S) => ({
      ...S,
      value: S.label.toLowerCase().replace(/\s+/g, "-")
    }));
    const b = {
      id: e.id,
      type: e.type
    }, w = new Set(g.map((S) => S.value)).size !== g.length;
    if (!w) {
      t?.({ ...b, options: g });
      return;
    }
    g = g.map((S) => ({
      ...S,
      value: Xa()
    })), w && t?.({ ...b, options: g }), t?.({ ...b, options: g });
  }, [
    o,
    t,
    n,
    e.id,
    e.type
  ]);
  const h = (g) => {
    let b = n;
    g.action === "remove" && (b = n.filter((w) => w.value !== g.value)), g.action === "mark-as-correct" && (b = n.map((w) => ({
      ...w,
      correct: w.value === g.value ? !w.correct : w.correct
    }))), t?.({
      ...c,
      options: b
    });
  }, f = (g) => {
    if (e.type === "select") {
      const b = !e.required && e.value === g ? null : g;
      t?.({
        ...c,
        type: e.type,
        value: b
      });
    } else if (e.type === "multi-select") {
      const b = Array.isArray(e.value) ? e.value : [], w = b.includes(g) ? b.filter((S) => S !== g) : [...b, g];
      t?.({
        ...c,
        type: e.type,
        value: w
      });
    }
  }, m = (g) => {
    const b = n.map((w, S) => ({
      ...w,
      ...S === g.index ? {
        value: g.value,
        label: g.newLabel
      } : {}
    }));
    t?.({
      ...c,
      options: b
    });
  }, p = () => {
    const g = n.length, b = {
      value: `new-option-${g + 1}`,
      label: u("surveyFormBuilder.selectQuestion.newOption", {
        number: g + 1
      })
    };
    t?.({
      ...c,
      options: [...n, b]
    });
  }, v = (g) => {
    t?.({
      ...c,
      options: g
    });
  };
  return o ? null : /* @__PURE__ */ l(ce, { ...e, children: /* @__PURE__ */ C("div", { className: "-mx-0.5 flex flex-col items-start [&>div]:w-full", children: [
    /* @__PURE__ */ l(Gi, { children: /* @__PURE__ */ l(
      Si,
      {
        axis: "y",
        values: n,
        onReorder: v,
        as: "div",
        children: n.map((g, b) => {
          const w = e.type === "select" ? e.value === g.value : Array.isArray(e.value) && e.value.includes(g.value);
          return /* @__PURE__ */ l("div", { className: "w-full [&>div]:w-full", children: /* @__PURE__ */ l(
            nh,
            {
              index: b,
              option: g,
              correct: g.correct,
              onClick: f,
              onClickAction: h,
              onChangeLabel: m,
              disabled: i,
              answering: r,
              selected: w,
              locked: d,
              type: e.type
            }
          ) }, g.value);
        })
      }
    ) }),
    !i && !r && !d && /* @__PURE__ */ l("div", { className: "opacity-50", children: /* @__PURE__ */ l(
      Ce,
      {
        label: u("surveyFormBuilder.selectQuestion.addOption"),
        variant: "ghost",
        icon: xi,
        onClick: p
      }
    ) })
  ] }) });
}, rh = ({
  value: n,
  ...e
}) => {
  const { onQuestionChange: t, answering: i } = ue(), r = mt(e), { t: s } = oe(), o = s("surveyFormBuilder.answer.textPlaceholder"), a = B(
    () => e.type === "text" ? {
      id: e.id,
      type: "text",
      label: s("surveyFormBuilder.answer.label"),
      placeholder: o,
      clearable: !e.required
    } : {
      id: e.id,
      type: "textarea",
      label: s("surveyFormBuilder.answer.label"),
      placeholder: o,
      rows: 4
    },
    [
      e.id,
      e.type,
      e.required,
      o,
      s
    ]
  );
  return /* @__PURE__ */ l(ce, { ...e, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
    Ee,
    {
      field: a,
      value: i ? n ?? "" : o,
      onChange: (d) => {
        t?.({
          ...e,
          value: d
        });
      },
      disabled: r,
      hideLabel: !0
    }
  ) }) });
}, ji = ({ ...n }) => {
  switch (n.type) {
    case "text":
    case "longText":
      return /* @__PURE__ */ l(rh, { ...n });
    case "rating":
      return /* @__PURE__ */ l(Zu, { ...n });
    case "select":
    case "multi-select":
      return /* @__PURE__ */ l(ih, { ...n });
    case "dropdown-single":
    case "dropdown-multi":
      return /* @__PURE__ */ l(Uu, { ...n });
    case "numeric":
      return /* @__PURE__ */ l(Xu, { ...n });
    case "link":
      return /* @__PURE__ */ l(Ku, { ...n });
    case "date":
      return /* @__PURE__ */ l(ju, { ...n });
    case "file":
      return /* @__PURE__ */ l(Qu, { ...n });
    case "checkbox":
      return /* @__PURE__ */ l($u, { ...n });
    default:
      throw new Error("Invalid question type provided");
  }
}, Eo = () => {
  const { t: n } = oe();
  return /* @__PURE__ */ C("div", { className: "mt-8 ml-7 flex flex-row items-center gap-4", children: [
    /* @__PURE__ */ l("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
    /* @__PURE__ */ l("span", { className: "text-base font-medium text-f1-foreground-secondary", children: n("surveyFormBuilder.labels.endOfSection") }),
    /* @__PURE__ */ l("div", { className: "h-px flex-1 bg-f1-border-secondary" })
  ] });
}, sh = ({
  item: n,
  showEndOfSection: e,
  className: t
}) => {
  const { isDragging: i, setIsDragging: r, setDraggedItemId: s, draggedItemId: o } = Nt(), a = Ei(), { disabled: d, answering: u, getSectionContainingQuestion: c } = ue(), h = c(n.question.id), f = !!h && o === h.id, m = () => {
    r(!0), s(n.question.id);
  }, p = () => {
    r(!1), s(null);
  }, v = n.question.locked || h?.locked, g = !d && !u && !v;
  return /* @__PURE__ */ C(
    Mn,
    {
      value: n,
      onDragStart: m,
      onDragEnd: p,
      dragListener: !1,
      dragControls: a,
      layout: "position",
      as: "div",
      className: P(
        t,
        f && "invisible h-0 overflow-hidden"
      ),
      children: [
        /* @__PURE__ */ l("div", { className: "w-full", children: /* @__PURE__ */ C(
          "div",
          {
            className: P(
              "group/element flex flex-row items-start gap-1",
              i && "cursor-grabbing"
            ),
            children: [
              !d && !u && /* @__PURE__ */ l(
                "div",
                {
                  className: P(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !i && "cursor-grab",
                    !g && "cursor-not-allowed"
                  ),
                  onPointerDown: (b) => {
                    g && a.start(b);
                  },
                  children: /* @__PURE__ */ l(he, { icon: Ut, size: "sm" })
                }
              ),
              /* @__PURE__ */ l(
                ji,
                {
                  ...n.question
                }
              )
            ]
          }
        ) }),
        e && /* @__PURE__ */ l(Eo, {})
      ]
    }
  );
}, oh = ({ question: n }) => {
  const { isDragging: e, setIsDragging: t, setDraggedItemId: i } = Nt(), r = Ei(), { disabled: s, answering: o, getSectionContainingQuestion: a } = ue(), d = a(n.id), u = () => {
    t(!0), i(n.id);
  }, c = () => {
    t(!1), i(null);
  }, h = n.locked || d?.locked, f = !s && !o && !h;
  return /* @__PURE__ */ l(
    Mn,
    {
      value: n,
      as: "div",
      onDragStart: u,
      onDragEnd: c,
      dragListener: !1,
      dragControls: r,
      layout: "position",
      children: /* @__PURE__ */ C(
        "div",
        {
          className: P(
            "group/question-element flex flex-row items-start gap-1",
            e && "cursor-grabbing"
          ),
          style: { marginLeft: s || o ? 0 : -27 },
          children: [
            !s && !o && /* @__PURE__ */ l(
              "div",
              {
                className: P(
                  "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40",
                  !e && "cursor-grab",
                  !f && "cursor-not-allowed"
                ),
                onPointerDown: (m) => {
                  f && r.start(m);
                },
                children: /* @__PURE__ */ l(he, { icon: Ut, size: "sm" })
              }
            ),
            /* @__PURE__ */ l(
              ji,
              {
                ...n
              }
            )
          ]
        }
      )
    }
  );
}, ah = {
  fieldSizing: "content"
}, lh = ({
  id: n,
  title: e,
  description: t,
  questions: i = [],
  locked: r,
  hideQuestions: s
}) => {
  const {
    onSectionChange: o,
    disabled: a,
    answering: d,
    deleteElement: u,
    onDuplicateElement: c
  } = ue(), [h, f] = j(!1), { t: m } = oe(), p = B(
    () => ({
      id: n,
      title: e,
      description: t
    }),
    [n, e, t]
  ), v = (y) => {
    o?.({ ...p, title: y.target.value });
  }, g = (y) => {
    o?.({
      ...p,
      description: y.target.value
    });
  }, b = (y) => {
    o?.({ ...p, questions: y });
  }, w = () => {
    c?.({ elementId: n, type: "section" });
  }, S = () => {
    u(n);
  }, T = [
    {
      label: m("surveyFormBuilder.actions.duplicateSection"),
      icon: gn,
      onClick: w
    },
    {
      label: m("surveyFormBuilder.actions.deleteSection"),
      icon: Pt,
      onClick: S,
      critical: !0
    }
  ], R = a || r || d, x = W(null);
  return V(() => {
    x.current?.focus({ preventScroll: !0 });
  }, []), /* @__PURE__ */ C(
    "div",
    {
      id: `co-creation-section-${n}`,
      className: "group/section flex w-full flex-col gap-1 bg-f1-background",
      children: [
        /* @__PURE__ */ C("div", { className: "py-1 pl-5 pr-3", children: [
          /* @__PURE__ */ C("div", { className: "flex flex-row", children: [
            /* @__PURE__ */ l(
              "input",
              {
                ref: x,
                type: "text",
                "aria-label": m("surveyFormBuilder.labels.title"),
                value: e,
                placeholder: m("surveyFormBuilder.labels.sectionTitlePlaceholder"),
                onChange: v,
                disabled: R,
                className: P(
                  "w-full text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                  R && "cursor-not-allowed"
                )
              }
            ),
            !a && !d && !r && /* @__PURE__ */ l(
              "div",
              {
                className: P(
                  "opacity-0 group-hover/section:opacity-100",
                  h && "opacity-100"
                ),
                children: /* @__PURE__ */ l(
                  hi,
                  {
                    items: T,
                    icon: un,
                    open: h,
                    onOpenChange: f,
                    align: "start",
                    children: /* @__PURE__ */ l(
                      Ce,
                      {
                        icon: un,
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
          /* @__PURE__ */ l(
            "textarea",
            {
              value: t,
              "aria-label": m("surveyFormBuilder.labels.description"),
              placeholder: m(
                "surveyFormBuilder.labels.sectionDescriptionPlaceholder"
              ),
              onChange: g,
              disabled: R,
              style: ah,
              className: P(
                "w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                R && "cursor-not-allowed"
              )
            }
          )
        ] }),
        !s && /* @__PURE__ */ C(we, { children: [
          /* @__PURE__ */ l(Gi, { children: /* @__PURE__ */ l(
            Si,
            {
              axis: "y",
              values: i,
              onReorder: b,
              as: "div",
              children: /* @__PURE__ */ l("div", { className: "group/section-list flex flex-col gap-4", children: i.map((y) => /* @__PURE__ */ l(oh, { question: y }, y.id)) })
            }
          ) }),
          !d && /* @__PURE__ */ C("div", { className: "mt-8 flex flex-row items-center gap-4", children: [
            /* @__PURE__ */ l("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
            /* @__PURE__ */ l("span", { className: "text-base font-medium text-f1-foreground-secondary", children: m("surveyFormBuilder.labels.endOfSection") }),
            /* @__PURE__ */ l("div", { className: "h-px flex-1 bg-f1-border-secondary" })
          ] })
        ] })
      ]
    }
  );
}, ch = ({
  item: n,
  className: e
}) => {
  const { isDragging: t, setIsDragging: i, setDraggedItemId: r, draggedItemId: s } = Nt(), o = Ei(), { disabled: a, answering: d } = ue(), u = s === n.section.id, c = () => {
    i(!0), r(n.section.id);
  }, h = () => {
    i(!1), r(null);
  }, f = !a && !d && !n.section.locked;
  return /* @__PURE__ */ l(
    Mn,
    {
      value: n,
      onDragStart: c,
      onDragEnd: h,
      dragListener: !1,
      dragControls: o,
      layout: "position",
      as: "div",
      className: e,
      children: /* @__PURE__ */ l("div", { className: "w-full", children: /* @__PURE__ */ C("div", { className: "group/element w-full", children: [
        /* @__PURE__ */ C(
          "div",
          {
            className: P(
              "flex flex-row items-start gap-1 w-full",
              t && "cursor-grabbing"
            ),
            children: [
              !a && !d && /* @__PURE__ */ l(
                "div",
                {
                  className: P(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !t && "cursor-grab",
                    !f && "cursor-not-allowed"
                  ),
                  onPointerDown: (m) => {
                    f && o.start(m);
                  },
                  children: /* @__PURE__ */ l(he, { icon: Ut, size: "sm" })
                }
              ),
              /* @__PURE__ */ l(lh, { ...n.section, hideQuestions: !0 })
            ]
          }
        ),
        u && (n.section.questions ?? []).length > 0 && /* @__PURE__ */ C("div", { className: "flex flex-col gap-4 w-full mt-4 ml-7", children: [
          (n.section.questions ?? []).map((m) => /* @__PURE__ */ l(ji, { ...m }, m.id)),
          /* @__PURE__ */ l(Eo, {})
        ] })
      ] }) })
    }
  );
}, Er = (n) => Mu[n], dh = (n) => {
  document.getElementById(n)?.scrollIntoView({ behavior: "smooth", block: "start" });
}, uh = (n, e) => {
  const {
    untitledSectionLabel: t,
    untitledQuestionLabel: i,
    duplicateQuestionLabel: r,
    deleteQuestionLabel: s,
    duplicateSectionLabel: o,
    deleteSectionLabel: a,
    questionOptionsLabel: d,
    requiredLabel: u,
    questionTypeLabel: c,
    singleSelectionLabel: h,
    multiSelectionLabel: f
  } = e, { deleteElement: m, onDuplicateElement: p, disabled: v, answering: g } = ue(), { getActionsForQuestion: b, questionTypes: w } = Co(), S = I((R) => {
    dh(R);
  }, []), T = I(
    (R, x, y) => {
      const {
        question: _,
        currentRatingType: k,
        currentDatasetKey: F,
        disallowOptionalQuestions: E,
        handleChangeRequired: M,
        handleSelectQuestionType: D,
        handleSelectRatingType: A,
        handleDuplicate: L,
        handleDelete: O
      } = b(R, x, y), z = [
        { type: "label", text: d }
      ];
      E || z.push({
        type: "toggle",
        label: u,
        icon: Yr,
        checked: !!_?.required,
        onCheckedChange: M
      });
      const K = w.filter((q) => !q.datasetKey), $ = w.filter((q) => !!q.datasetKey), ee = K.map((q) => {
        if (q.questionType === "rating") {
          const ne = kn.map((fe) => ({
            label: fe.label,
            onClick: () => A(fe.value),
            selected: k === fe.value
          }));
          return {
            type: "submenu",
            label: q.label,
            icon: q.icon,
            selectedLabel: k ? kn.find((fe) => fe.value === k)?.label : void 0,
            children: ne
          };
        }
        return {
          label: q.label,
          icon: q.icon,
          onClick: () => D(q.questionType),
          selected: x === q.questionType && !F
        };
      }), re = /* @__PURE__ */ new Map();
      for (const q of $)
        q.datasetKey && !re.has(q.datasetKey) && re.set(q.datasetKey, {
          label: q.label,
          icon: q.icon,
          datasetKey: q.datasetKey
        });
      if (re.size > 0) {
        ee.push({ type: "separator" });
        for (const [q, ne] of re)
          ee.push({
            type: "submenu",
            label: ne.label,
            icon: ne.icon,
            selectedLabel: F === q ? x === "dropdown-multi" ? f : h : void 0,
            children: [
              {
                label: h,
                icon: We,
                onClick: () => D("dropdown-single", q),
                selected: F === q && x === "dropdown-single"
              },
              {
                label: f,
                icon: ft,
                onClick: () => D("dropdown-multi", q),
                selected: F === q && x === "dropdown-multi"
              }
            ]
          });
      }
      let te;
      if (F) {
        const q = re.get(F);
        q && (te = q.label);
      } else
        te = K.find(
          (q) => q.questionType === x
        )?.label;
      return z.push({
        type: "submenu",
        label: c,
        icon: Jr,
        selectedLabel: te,
        children: ee
      }), z.push({ type: "separator" }), z.push({
        label: r,
        icon: gn,
        onClick: L
      }), y && z.push({
        label: s,
        icon: Pt,
        onClick: O,
        critical: !0
      }), z;
    },
    [
      b,
      w,
      d,
      u,
      c,
      h,
      f,
      r,
      s
    ]
  );
  return B(
    () => n.map((R) => {
      if (R.type === "section") {
        const y = R.section, _ = `co-creation-section-${y.id}`, k = y.questions ?? [], F = k.length === 1;
        return {
          id: _,
          label: y.title || t,
          icon: Ci,
          onClick: S,
          ...!v && !g && !y.locked && {
            otherActions: [
              {
                label: o,
                icon: gn,
                onClick: () => p?.({
                  elementId: y.id,
                  type: "section"
                })
              },
              { type: "separator" },
              {
                label: a,
                icon: Pt,
                onClick: () => m(y.id),
                critical: !0
              }
            ]
          },
          children: k.map((E) => ({
            id: `co-creation-question-${E.id}`,
            label: E.title || i,
            icon: Er(E.type),
            onClick: S,
            ...!v && !g && !y.locked && {
              otherActions: T(
                E.id,
                E.type,
                !F
              )
            }
          }))
        };
      }
      const x = R.question;
      return {
        id: `co-creation-question-${x.id}`,
        label: x.title || i,
        icon: Er(x.type),
        onClick: S,
        ...!v && !g && !x.locked && {
          otherActions: T(
            x.id,
            x.type,
            !0
          )
        }
      };
    }),
    [
      n,
      S,
      t,
      i,
      v,
      g,
      T,
      o,
      a,
      p,
      m
    ]
  );
}, ri = "co-creation-section-", on = "co-creation-question-";
function hh(n, e) {
  const t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (const o of e)
    if (o.type === "section") {
      t.set(o.section.id, o.section);
      for (const a of o.section.questions ?? [])
        i.set(a.id, a);
    } else
      i.set(o.question.id, o.question);
  const r = [], s = (o) => {
    if (o.id.startsWith(ri)) {
      const a = o.id.slice(ri.length), d = t.get(a);
      if (!d) return;
      const u = (o.children ?? []).filter((c) => c.id.startsWith(on)).map((c) => i.get(c.id.slice(on.length))).filter((c) => c != null);
      r.push({
        type: "section",
        section: { ...d, questions: u }
      });
      for (const c of o.children ?? [])
        c.id.startsWith(ri) && s(c);
      return;
    }
    if (o.id.startsWith(on)) {
      const a = o.id.slice(on.length), d = i.get(a);
      d && r.push({ type: "question", question: d });
    }
  };
  for (const o of n)
    s(o);
  return r;
}
const No = ({
  elements: n,
  onChange: e,
  answering: t
}) => {
  const { t: i } = oe(), { disabled: r } = ue(), { portalContainer: s } = Re(Ea), o = uh(n, {
    untitledSectionLabel: i("surveyFormBuilder.labels.sectionTitlePlaceholder"),
    untitledQuestionLabel: i("surveyFormBuilder.labels.titlePlaceholder"),
    duplicateQuestionLabel: i("surveyFormBuilder.actions.duplicateQuestion"),
    deleteQuestionLabel: i("surveyFormBuilder.actions.deleteQuestion"),
    duplicateSectionLabel: i("surveyFormBuilder.actions.duplicateSection"),
    deleteSectionLabel: i("surveyFormBuilder.actions.deleteSection"),
    questionOptionsLabel: i("surveyFormBuilder.labels.questionOptions"),
    requiredLabel: i("surveyFormBuilder.labels.required"),
    questionTypeLabel: i("surveyFormBuilder.labels.questionType"),
    singleSelectionLabel: i("surveyFormBuilder.labels.singleSelection"),
    multiSelectionLabel: i("surveyFormBuilder.labels.multiSelection")
  }), a = I(
    (d) => {
      e(hh(d, n));
    },
    [n, e]
  );
  return /* @__PURE__ */ l("div", { className: "sticky left-0 top-1/2 z-10 hidden h-0 -translate-y-12 px-2 @3xl:block", children: /* @__PURE__ */ l(
    vo,
    {
      items: o,
      barsAlign: "left",
      size: "md",
      collapsible: !0,
      showChildrenCounter: !0,
      sortable: !t && !r,
      onReorder: a,
      portalContainer: s
    }
  ) });
};
function fh(n) {
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
function Nr(n) {
  const e = [];
  let t = null, i = [];
  for (const r of n)
    r.type === "section-header" ? (t && e.push({
      type: "section",
      section: { ...t, questions: i }
    }), t = r.section, i = []) : r.type === "section-end" ? t && (e.push({
      type: "section",
      section: { ...t, questions: i }
    }), t = null, i = []) : t ? i.push(r.question) : e.push({ type: "question", question: r.question });
  return t && e.push({
    type: "section",
    section: { ...t, questions: i }
  }), e;
}
function mh(n, e) {
  const t = [];
  let i = null, r = [];
  function s() {
    if (!i) return;
    let o = -1;
    for (let a = r.length - 1; a >= 0; a--)
      if (r[a].type === "question" && e.has(r[a].id)) {
        o = a;
        break;
      }
    if (o === -1)
      t.push({
        type: "section-end",
        id: `section-end-${i}`,
        sectionId: i
      }), t.push(...r);
    else {
      for (let a = 0; a <= o; a++)
        t.push(r[a]);
      t.push({
        type: "section-end",
        id: `section-end-${i}`,
        sectionId: i
      });
      for (let a = o + 1; a < r.length; a++)
        t.push(r[a]);
    }
    r = [], i = null;
  }
  for (const o of n)
    o.type === "section-header" ? (s(), i = o.section.id, t.push(o)) : i ? r.push(o) : t.push(o);
  return s(), t;
}
function gh(n) {
  const e = /* @__PURE__ */ new Set();
  for (const t of n)
    if (t.type === "section") {
      const i = t.section.questions;
      i?.length && e.add(`question-${i[i.length - 1].id}`);
    }
  return e;
}
function ph({
  flatItems: n,
  onChange: e
}) {
  const [t, i] = j(
    null
  ), [r, s] = j(!1), o = I(
    (u) => {
      const c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set();
      let f = null;
      for (const x of n)
        x.type === "section-header" ? (f = x.id, c.set(x.id, /* @__PURE__ */ new Set()), x.section.locked && h.add(x.id)) : x.type === "section-end" ? f = null : f && c.get(f).add(x.id);
      const m = n.filter((x) => x.type === "section-header").map((x) => x.id), p = u.filter((x) => x.type === "section-header").map((x) => x.id), v = m.some(
        (x, y) => p[y] !== x
      ), g = new Map(
        n.filter((x) => x.type !== "section-end").map((x, y) => [x.id, y])
      ), b = new Set(h);
      if (v)
        for (const [x, y] of u.entries())
          y.type === "section-header" && g.get(y.id) !== x && b.add(y.id);
      let w;
      if (b.size > 0) {
        const x = /* @__PURE__ */ new Map();
        for (const k of b) {
          const F = c.get(k);
          if (F)
            for (const E of F)
              x.set(E, k);
        }
        const y = /* @__PURE__ */ new Map();
        for (const k of b)
          y.set(k, []);
        const _ = [];
        for (const k of u) {
          const F = x.get(k.id);
          F ? y.get(F).push(k) : _.push(k);
        }
        w = [];
        for (const k of _)
          w.push(k), k.type === "section-header" && b.has(k.id) && w.push(...y.get(k.id));
      } else
        w = u;
      const S = /* @__PURE__ */ new Set();
      for (const x of c.values())
        for (const y of x)
          S.add(y);
      const T = mh(
        w,
        S
      );
      if ([
        ...c.entries()
      ].some(([x, y]) => {
        if (y.size === 0) return !1;
        const _ = T.findIndex((F) => F.id === x);
        if (_ === -1) return !1;
        const k = T[_ + 1];
        return !k || k.type !== "question";
      })) {
        i(T), s(!0);
        return;
      }
      e(Nr(T));
    },
    [e, n]
  ), a = I(() => {
    if (t) {
      const u = /* @__PURE__ */ new Set();
      for (let h = 0; h < t.length; h++) {
        const f = t[h];
        if (f.type === "section-header") {
          const m = t[h + 1];
          (!m || m.type === "section-end" || m.type === "section-header") && u.add(f.section.id);
        }
      }
      const c = t.filter((h) => !(h.type === "section-header" && u.has(h.section.id) || h.type === "section-end" && u.has(h.sectionId)));
      e(Nr(c));
    }
    s(!1), i(null);
  }, [t, e]), d = I(() => {
    s(!1), i(null);
  }, []);
  return {
    handleFlatReorder: o,
    handleConfirmLastQuestionMove: a,
    handleCancelLastQuestionMove: d,
    lastQuestionDialogOpen: r
  };
}
function vh({ children: n }) {
  const { isDragging: e } = Nt();
  return /* @__PURE__ */ l("div", { className: P("relative @container", e && "select-none"), children: n });
}
const bh = ({
  elements: n,
  disabled: e,
  onChange: t,
  disallowOptionalQuestions: i,
  allowedQuestionTypes: r,
  applyingChanges: s,
  useUpload: o,
  datasets: a
}) => {
  const d = !e, u = B(
    () => n.map((S) => S.type === "question" ? {
      ...S,
      question: {
        ...S.question,
        required: i ? !0 : S.question.required
      }
    } : S.type === "section" ? {
      ...S,
      section: {
        ...S.section,
        questions: S.section.questions?.map((T) => ({
          ...T,
          required: i ? !0 : T.required
        }))
      }
    } : S),
    [n, i]
  ), c = B(() => fh(u), [u]), h = B(
    () => c.filter((S) => S.type !== "section-end"),
    [c]
  ), f = B(
    () => gh(u),
    [u]
  ), m = B(() => {
    const S = /* @__PURE__ */ new Set();
    for (const T of u)
      if (T.type === "section")
        for (const R of T.section.questions ?? [])
          S.add(`question-${R.id}`);
    return S;
  }, [u]), {
    handleFlatReorder: p,
    handleConfirmLastQuestionMove: v,
    handleCancelLastQuestionMove: g,
    lastQuestionDialogOpen: b
  } = ph({ flatItems: c, onChange: t });
  V(() => {
    if (s) {
      const S = document.activeElement;
      S && S.getAttribute("name") !== "one-ai-input" && S.blur();
    }
  }, [s]);
  const w = !!u.length;
  return /* @__PURE__ */ C(
    qi,
    {
      disabled: e,
      elements: u,
      onChange: t,
      disallowOptionalQuestions: i,
      allowedQuestionTypes: r,
      useUpload: o,
      datasets: a,
      children: [
        /* @__PURE__ */ l(Gi, { children: /* @__PURE__ */ C(vh, { children: [
          w && /* @__PURE__ */ l(No, { elements: u, onChange: t }),
          /* @__PURE__ */ C("div", { className: "relative flex flex-1 flex-col", children: [
            /* @__PURE__ */ C(
              yt.div,
              {
                className: P(
                  "flex w-full max-w-[750px] self-center flex-col gap-6",
                  s && "pointer-events-none"
                ),
                initial: { filter: "blur(0px)" },
                animate: { filter: s ? "blur(2px)" : "none" },
                exit: { filter: "blur(0px)" },
                children: [
                  /* @__PURE__ */ l(
                    Si,
                    {
                      axis: "y",
                      values: h,
                      onReorder: p,
                      as: "div",
                      children: /* @__PURE__ */ l("div", { className: "flex flex-col", children: h.map((S, T) => {
                        const R = T === 0 ? "" : m.has(S.id) ? "mt-4" : "mt-8";
                        return S.type === "section-header" ? /* @__PURE__ */ l(
                          ch,
                          {
                            item: S,
                            className: R
                          },
                          S.id
                        ) : /* @__PURE__ */ l(
                          sh,
                          {
                            item: S,
                            showEndOfSection: f.has(S.id),
                            className: R
                          },
                          S.id
                        );
                      }) })
                    }
                  ),
                  d && /* @__PURE__ */ l(zu, {})
                ]
              }
            ),
            s && /* @__PURE__ */ l(
              yt.div,
              {
                className: "sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center",
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                children: /* @__PURE__ */ l(Au, {})
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ l(
          Iu,
          {
            open: b,
            onConfirm: v,
            onCancel: g
          }
        )
      ]
    }
  );
}, Ef = se(bh);
function $e({
  titleWidth: n,
  descriptionWidth: e,
  answer: t
}) {
  return /* @__PURE__ */ C("div", { className: "flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4", children: [
    /* @__PURE__ */ C("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ l(de, { className: "h-5 rounded-sm", style: { width: n } }),
      e && /* @__PURE__ */ l(
        de,
        {
          className: "h-4 rounded-sm",
          style: { width: e }
        }
      )
    ] }),
    t
  ] });
}
const cn = /* @__PURE__ */ l(de, { className: "h-10 w-full rounded-sm" }), _r = /* @__PURE__ */ l(de, { className: "h-24 w-full rounded-sm" }), yh = /* @__PURE__ */ l(de, { className: "h-10 w-56 max-w-full rounded-sm" });
function xh() {
  return /* @__PURE__ */ l("div", { className: "grid grid-cols-5 gap-2 sm:max-w-80", children: Array.from({ length: 5 }).map((n, e) => /* @__PURE__ */ l(de, { className: "h-9 rounded-sm" }, e)) });
}
function Dr({ count: n }) {
  return /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", children: Array.from({ length: n }).map((e, t) => /* @__PURE__ */ l(
    de,
    {
      className: "h-7 w-56 max-w-full rounded-sm",
      style: { width: `${Math.max(52, 76 - t * 7)}%` }
    },
    t
  )) });
}
function wh() {
  return /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-2", children: Array.from({ length: 5 }).map((n, e) => /* @__PURE__ */ l(
    de,
    {
      className: "h-8 rounded-sm",
      style: { width: `${18 + e * 3}%` }
    },
    e
  )) });
}
function _o() {
  return /* @__PURE__ */ l(
    "div",
    {
      className: "flex w-full flex-col gap-10",
      "data-testid": "survey-answering-form-loading-all-questions",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [0, 1].map((n) => /* @__PURE__ */ C("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ C("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ l(de, { className: "h-6 w-56 rounded-sm" }),
          /* @__PURE__ */ l(de, { className: "h-4 w-80 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex flex-col gap-4", children: n === 0 ? /* @__PURE__ */ C(we, { children: [
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "65%",
              descriptionWidth: "42%",
              answer: cn
            }
          ),
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "70%",
              descriptionWidth: "55%",
              answer: _r
            }
          ),
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "58%",
              descriptionWidth: "38%",
              answer: /* @__PURE__ */ l(xh, {})
            }
          ),
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "62%",
              descriptionWidth: "46%",
              answer: /* @__PURE__ */ l(Dr, { count: 4 })
            }
          ),
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "54%",
              descriptionWidth: "44%",
              answer: cn
            }
          )
        ] }) : /* @__PURE__ */ C(we, { children: [
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "60%",
              descriptionWidth: "50%",
              answer: yh
            }
          ),
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "66%",
              descriptionWidth: "45%",
              answer: cn
            }
          ),
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "57%",
              descriptionWidth: "48%",
              answer: /* @__PURE__ */ l(wh, {})
            }
          ),
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "64%",
              descriptionWidth: "36%",
              answer: /* @__PURE__ */ l(Dr, { count: 3 })
            }
          ),
          /* @__PURE__ */ l(
            $e,
            {
              titleWidth: "52%",
              descriptionWidth: "40%",
              answer: _r
            }
          )
        ] }) })
      ] }, n))
    }
  );
}
function Ch() {
  return /* @__PURE__ */ C(
    "div",
    {
      className: "flex w-full flex-col gap-6",
      "data-testid": "survey-answering-form-loading-stepped",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ C("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ l(de, { className: "h-6 w-52 rounded-sm" }),
          /* @__PURE__ */ l(de, { className: "h-4 w-72 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ l(
          $e,
          {
            titleWidth: "74%",
            descriptionWidth: "50%",
            answer: cn
          }
        )
      ]
    }
  );
}
function Sh(n) {
  const [e, t] = j(0), [i, r] = j(null), s = n.length, o = s > 0 ? e / s * 100 : 0, a = i ?? o, d = n[e], u = e === 0, c = e === s - 1, h = I(() => {
    r(null), t((v) => Math.min(v + 1, s - 1));
  }, [s]), f = I(() => {
    r(null), t((v) => Math.max(v - 1, 0));
  }, []), m = I(() => {
    r(null), t(0);
  }, []), p = I((v) => {
    r(v);
  }, []);
  return {
    currentStep: e,
    totalSteps: s,
    progress: a,
    currentQuestion: d,
    isFirstStep: u,
    isLastStep: c,
    goToNext: h,
    goToPrevious: f,
    reset: m,
    setProgress: p
  };
}
function Eh({
  value: n,
  onChange: e,
  onBlur: t,
  config: i
}) {
  const { options: r, disabled: s } = i, o = (a) => {
    s || (e(a), t());
  };
  return /* @__PURE__ */ l("div", { className: "grid grid-cols-3 gap-3 md:grid-cols-5", children: r.map((a) => /* @__PURE__ */ l(
    "div",
    {
      className: P(
        "flex h-10 min-w-20 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        s ? "cursor-not-allowed" : "cursor-pointer",
        n === a.value && "border-f1-border-selected bg-f1-background-selected-secondary"
      ),
      onClick: () => o(a.value),
      children: /* @__PURE__ */ l("span", { className: "text-base font-medium", children: a.label })
    },
    a.value
  )) });
}
function Nh({ checked: n }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "aria-hidden": "true",
      className: P(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        n ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background"
      ),
      children: n && /* @__PURE__ */ l("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
function Rr({
  value: n,
  onChange: e,
  onBlur: t,
  config: i
}) {
  const { options: r, type: s, required: o, disabled: a, showAnswerValidation: d } = i, u = r.some((p) => p.correct), c = !!d && u, h = (p) => {
    if (a || s !== "select") return;
    e(!o && n === p ? void 0 : p), t();
  }, f = (p) => {
    if (a || s !== "multi-select") return;
    const v = Array.isArray(n) ? n : [], g = v.includes(p) ? v.filter((b) => b !== p) : [...v, p];
    e(g), t();
  }, m = (p) => {
    s === "select" ? h(p) : f(p);
  };
  return /* @__PURE__ */ l("div", { className: "-mx-0.5 flex flex-col items-start", children: r.map((p) => {
    const v = s === "select" ? n === p.value : Array.isArray(n) && n.includes(p.value);
    return /* @__PURE__ */ C(
      "div",
      {
        className: P(
          "flex min-h-9 w-full items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5",
          a ? "cursor-not-allowed" : "cursor-pointer hover:bg-f1-background-hover"
        ),
        onClick: (g) => {
          a || s === "multi-select" && g.target.closest("input") || m(p.value);
        },
        children: [
          s === "multi-select" ? /* @__PURE__ */ l(
            pn,
            {
              title: p.label,
              checked: !!v,
              onCheckedChange: () => f(p.value),
              hideLabel: !0
            }
          ) : /* @__PURE__ */ l(Nh, { checked: !!v }),
          /* @__PURE__ */ l("p", { className: "flex-1 font-medium", children: p.label }),
          c ? /* @__PURE__ */ l("div", { className: "min-h-8 p-1", children: /* @__PURE__ */ l(
            he,
            {
              icon: p.correct ? Zr : zn,
              color: p.correct ? "positive" : "critical",
              "aria-hidden": !0
            }
          ) }) : /* @__PURE__ */ l("div", { className: "min-h-8" })
        ]
      },
      p.value
    );
  }) });
}
const _h = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i, Dh = () => ({
  upload: async (n) => ({
    type: "success",
    value: `local-${n.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
});
function an(n, e) {
  return In().optional().superRefine((t, i) => {
    n && (!t || t.trim() === "") && i.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function Rh(n, e) {
  return In().optional().superRefine((t, i) => {
    if (n && (!t || t.trim() === "")) {
      i.addIssue({
        code: "custom",
        message: e("forms.validation.required")
      });
      return;
    }
    t && !_h.test(t) && i.addIssue({
      code: "custom",
      message: e("surveyFormBuilder.answer.invalidUrl")
    });
  });
}
function kr(n, e) {
  return Da().optional().superRefine((t, i) => {
    n && t == null && i.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function Tr(n, e) {
  return es(In()).optional().superRefine((t, i) => {
    n && (!t || t.length === 0) && i.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function kh(n, e) {
  return Ra().optional().superRefine((t, i) => {
    n && !t && i.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function Th(n, e) {
  return es(In()).optional().superRefine((t, i) => {
    n && (!t || t.length === 0) && i.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function Fh(n, e) {
  return _a().optional().superRefine((t, i) => {
    n && !t && i.addIssue({
      code: "custom",
      message: e("forms.validation.required")
    });
  });
}
function Fr(n, e) {
  const t = e?.[n.id];
  if (t) return t.value;
  if (n.type === "multi-select" || n.type === "dropdown-multi")
    return [];
  const i = n;
  return i.value !== void 0 && i.value !== null ? i.value : null;
}
function Ui(n) {
  const e = [];
  for (const t of n)
    if (t.type === "section")
      for (const i of t.section.questions ?? [])
        e.push({
          id: i.id,
          type: i.type,
          required: i.required,
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
function Ar(n, e, t, i = !1, r = i, s, o) {
  const a = n.title ?? "", d = {
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
      const c = {
        id: n.id,
        type: "text",
        label: a,
        placeholder: e("surveyFormBuilder.answer.textPlaceholder"),
        disabled: r
      };
      return Ae(an(!!n.required, e), {
        ...d,
        fieldType: "custom",
        render: ({ value: h, onChange: f, onBlur: m, error: p }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
          Ee,
          {
            field: c,
            value: h ?? "",
            onChange: f,
            onBlur: m,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "longText": {
      const c = {
        id: n.id,
        type: "textarea",
        label: a,
        placeholder: e("surveyFormBuilder.answer.textPlaceholder"),
        rows: 4,
        disabled: r
      };
      return Ae(an(!!n.required, e), {
        ...d,
        fieldType: "custom",
        render: ({ value: h, onChange: f, onBlur: m, error: p }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
          Ee,
          {
            field: c,
            value: h ?? "",
            onChange: f,
            onBlur: m,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "numeric": {
      const c = {
        id: n.id,
        type: "number",
        label: a,
        placeholder: e("surveyFormBuilder.answer.numericPlaceholder"),
        disabled: r
      };
      return Ae(kr(!!n.required, e), {
        ...d,
        fieldType: "custom",
        render: ({ value: h, onChange: f, onBlur: m, error: p }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
          Ee,
          {
            field: c,
            value: h,
            onChange: f,
            onBlur: m,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "link": {
      const c = {
        id: n.id,
        type: "text",
        inputType: "url",
        label: a,
        placeholder: e("surveyFormBuilder.answer.linkPlaceholder"),
        disabled: r
      };
      return Ae(Rh(!!n.required, e), {
        ...d,
        fieldType: "custom",
        render: ({ value: h, onChange: f, onBlur: m, error: p }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
          Ee,
          {
            field: c,
            value: h ?? "",
            onChange: f,
            onBlur: m,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "date": {
      const c = {
        id: n.id,
        type: "date",
        label: a,
        clearable: !n.required,
        disabled: r
      };
      return Ae(kh(!!n.required, e), {
        ...d,
        fieldType: "custom",
        render: ({ value: h, onChange: f, onBlur: m, error: p }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
          Ee,
          {
            field: c,
            value: h,
            onChange: f,
            onBlur: m,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "dropdown-single": {
      const c = o?.[n.datasetKey];
      if (!c)
        throw new Error(
          `Dataset "${n.datasetKey}" not found for dropdown-single`
        );
      const h = n.showSearchBox ?? !0, f = {
        id: n.id,
        type: "select",
        label: a,
        placeholder: c.placeholder ?? e("surveyFormBuilder.answer.dropdownPlaceholder"),
        source: c.dataSource,
        mapOptions: c.mapOptions,
        icon: c.icon,
        clearable: !n.required,
        multiple: !1,
        disabled: r,
        showSearchBox: h,
        searchBoxPlaceholder: n.searchBoxPlaceholder
      };
      return Ae(an(!!n.required, e), {
        ...d,
        fieldType: "custom",
        render: ({ value: m, onChange: p, onBlur: v, error: g }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ l(
          Ee,
          {
            field: f,
            value: m ?? "",
            onChange: p,
            onBlur: v,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "dropdown-multi": {
      const c = o?.[n.datasetKey];
      if (!c)
        throw new Error(
          `Dataset "${n.datasetKey}" not found for dropdown-multi`
        );
      const h = n.showSearchBox ?? !0, f = {
        id: n.id,
        type: "select",
        label: a,
        placeholder: c.placeholder ?? e("surveyFormBuilder.answer.dropdownPlaceholder"),
        source: c.dataSource,
        mapOptions: c.mapOptions,
        icon: c.icon,
        clearable: !n.required,
        multiple: !0,
        disabled: r,
        showSearchBox: h,
        searchBoxPlaceholder: n.searchBoxPlaceholder
      };
      return Ae(Tr(!!n.required, e), {
        ...d,
        fieldType: "custom",
        render: ({ value: m, onChange: p, onBlur: v, error: g }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ l(
          Ee,
          {
            field: f,
            value: m ?? [],
            onChange: p,
            onBlur: v,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "select": {
      const h = {
        options: n.options,
        type: "select",
        required: n.required,
        disabled: r,
        showAnswerValidation: i
      };
      return Ae(an(!!n.required, e), {
        ...d,
        fieldType: "custom",
        fieldConfig: h,
        render: ({ value: f, onChange: m, onBlur: p, config: v }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l(
          Rr,
          {
            value: f,
            onChange: m,
            onBlur: p,
            config: v
          }
        ) })
      });
    }
    case "multi-select": {
      const h = {
        options: n.options,
        type: "multi-select",
        required: n.required,
        disabled: r,
        showAnswerValidation: i
      };
      return Ae(Tr(!!n.required, e), {
        ...d,
        fieldType: "custom",
        fieldConfig: h,
        render: ({ value: f, onChange: m, onBlur: p, config: v }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l(
          Rr,
          {
            value: f,
            onChange: m,
            onBlur: p,
            config: v
          }
        ) })
      });
    }
    case "rating": {
      const h = {
        options: n.options,
        disabled: r
      };
      return Ae(kr(!!n.required, e), {
        ...d,
        fieldType: "custom",
        fieldConfig: h,
        render: ({ value: f, onChange: m, onBlur: p, config: v }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l(
          Eh,
          {
            value: f,
            onChange: m,
            onBlur: p,
            config: v
          }
        ) })
      });
    }
    case "file": {
      const c = n, h = c.useUpload ?? s, f = {
        id: n.id,
        type: "file",
        label: a,
        multiple: !0,
        accept: c.accept ?? So,
        maxSizeMB: c.maxSizeMB,
        useUpload: h ?? Dh,
        disabled: r || !h
      };
      return Ae(Th(!!n.required, e), {
        ...d,
        fieldType: "custom",
        render: ({ value: m, onChange: p, onBlur: v, error: g }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
          Ee,
          {
            field: f,
            value: m ?? [],
            onChange: p,
            onBlur: v,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "checkbox": {
      const c = n, h = {
        id: n.id,
        type: "checkbox",
        label: c.label || a,
        disabled: r
      };
      return Ae(Fh(!!n.required, e), {
        ...d,
        fieldType: "custom",
        render: ({ value: f, onChange: m, onBlur: p, error: v }) => /* @__PURE__ */ l(ce, { ...u, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
          Ee,
          {
            field: h,
            value: f ?? !1,
            onChange: m,
            onBlur: p,
            error: !!v,
            hideLabel: !0
          }
        ) }) })
      });
    }
    default:
      return Ae(Na(), {
        ...d,
        fieldType: "custom",
        render: () => null
      });
  }
}
function Do(n, e, t, i, r, s, o = !1, a = o, d, u) {
  return B(() => {
    const c = {}, h = {}, f = {}, m = Ui(n), p = e === "stepped";
    for (const v of n)
      if (v.type === "section") {
        const g = v.section, b = g.id;
        e === "all-questions" && (f[b] = {
          title: g.title,
          description: g.description,
          withInset: !0
        });
        for (const w of g.questions ?? [])
          p && r && w.id !== r || (c[w.id] = Ar(
            w,
            t,
            e === "all-questions" ? b : void 0,
            o,
            a,
            d,
            u
          ), h[w.id] = s?.[w.id] ?? Fr(w, i));
      } else {
        const g = v.question;
        if (p && r && g.id !== r)
          continue;
        c[g.id] = Ar(
          g,
          t,
          void 0,
          o,
          a,
          d,
          u
        ), h[g.id] = s?.[g.id] ?? Fr(g, i);
      }
    return {
      schema: Gr(c),
      defaultValues: h,
      flatQuestions: m,
      sections: f
    };
  }, [
    n,
    e,
    t,
    i,
    r,
    o,
    a,
    d,
    u
  ]);
}
const dn = () => {
};
function Nf(n) {
  return n.inline ? /* @__PURE__ */ l(Lh, { ...n }) : /* @__PURE__ */ l(Ah, { ...n });
}
function Ah({
  elements: n,
  onSubmit: e,
  mode: t,
  title: i,
  description: r,
  resourceHeader: s,
  isOpen: o,
  onClose: a,
  position: d = "center",
  module: u,
  allowToChangeFullscreen: c = !1,
  defaultValues: h,
  errorTriggerMode: f = "on-blur",
  loading: m = !1,
  labels: p,
  preview: v = !1,
  useUpload: g,
  datasets: b
}) {
  const { t: w } = oe(), S = d === "fullscreen", T = d === "fullscreen" ? "center" : d, [R, x] = j(S), { formRef: y, submit: _, isSubmitting: k, hasErrors: F } = pi(), E = W({}), M = B(
    () => Ui(n),
    [n]
  ), D = Sh(M), A = M.length > 0, L = {
    title: p?.empty?.title ?? w("surveyAnsweringForm.labels.empty.title"),
    description: p?.empty?.description ?? w("surveyAnsweringForm.labels.empty.description"),
    emoji: p?.empty?.emoji ?? w("surveyAnsweringForm.labels.empty.emoji")
  }, O = t === "stepped", K = v && !!h && Object.keys(h).length > 0, $ = v && !K, ee = O ? D.currentQuestion?.id : void 0, {
    schema: re,
    defaultValues: te,
    sections: q
  } = Do(
    n,
    t,
    w,
    h,
    ee,
    O ? E.current : void 0,
    v,
    K,
    g,
    b
  ), ne = R ? "fullscreen" : T, fe = ne === "center" ? "xl" : void 0, le = W(null), Y = I(
    (ge) => {
      le.current && clearTimeout(le.current), le.current = setTimeout(() => {
        le.current = null, a();
      }, ge);
    },
    [a]
  ), Z = I(
    async (ge) => {
      if (v)
        return { success: !0 };
      if (!e)
        throw new Error("onSubmit is required when preview is false");
      if (O && !D.isLastStep)
        return E.current = {
          ...E.current,
          ...ge
        }, D.goToNext(), { success: !0 };
      const Ie = O ? { ...E.current, ...ge } : ge, Xe = {};
      for (const [Ge, et] of Object.entries(Ie))
        Xe[Ge] = et === void 0 ? null : et;
      if (O) {
        D.setProgress(100);
        const [Ge] = await Promise.all([
          e(Xe),
          new Promise((et) => setTimeout(et, 1e3))
        ]);
        return Ge.success ? (Y(Ge.message ? 1e3 : 0), { success: !0, message: Ge.message }) : (D.setProgress(null), { success: !1, errors: Ge.errors });
      }
      const Be = await e(Xe);
      return Be.success ? (Y(Be.message ? 1e3 : 0), { success: !0, message: Be.message }) : { success: !1, errors: Be.errors };
    },
    [
      e,
      v,
      Y,
      O,
      D.isLastStep,
      D.goToNext,
      D.setProgress
    ]
  ), ie = I(async () => {
    try {
      await _();
    } catch {
    }
  }, [_]), H = I(() => {
    const ge = y.current?.getValues() ?? {};
    E.current = {
      ...E.current,
      ...ge
    }, D.goToPrevious();
  }, [y, D.goToPrevious]), X = c && !m ? [
    {
      label: w(R ? "surveyAnsweringForm.actions.collapse" : "surveyAnsweringForm.actions.expand"),
      icon: R ? ka : Ta,
      onClick: () => x((ge) => !ge)
    }
  ] : void 0, U = A ? m || K ? void 0 : $ ? O && !D.isLastStep ? {
    label: w("surveyAnsweringForm.actions.next"),
    onClick: D.goToNext,
    icon: si
  } : {
    label: w("surveyAnsweringForm.actions.submit"),
    onClick: dn,
    disabled: !0
  } : O && !D.isLastStep ? {
    label: w("surveyAnsweringForm.actions.next"),
    onClick: ie,
    icon: si
  } : {
    label: w("surveyAnsweringForm.actions.submit"),
    onClick: ie,
    disabled: k || F,
    loading: k
  } : void 0, me = A ? m || K ? void 0 : O && !D.isFirstStep ? {
    label: w("surveyAnsweringForm.actions.previous"),
    onClick: H,
    icon: qr
  } : void 0 : void 0, be = t === "all-questions" && A && !m, Me = O && A && !m, ze = O && !!D.currentQuestion?.sectionTitle && !m, rt = !A && !m || O, Ke = ne === "center" || ne === "fullscreen";
  return /* @__PURE__ */ l(
    Fa,
    {
      isOpen: o,
      onClose: a,
      title: i,
      module: u,
      position: ne,
      width: fe,
      primaryAction: U,
      secondaryAction: me,
      otherActions: X,
      disableContentPadding: Ke,
      children: /* @__PURE__ */ l(
        qi,
        {
          answering: !0,
          elements: n,
          onChange: dn,
          datasets: b,
          children: /* @__PURE__ */ C(
            "div",
            {
              className: P(
                "relative flex min-h-full flex-col @container",
                O && !R && "min-h-[600px]",
                rt && "h-full"
              ),
              children: [
                be && /* @__PURE__ */ l(No, { elements: n, onChange: dn, answering: !0 }),
                Me && /* @__PURE__ */ l("div", { className: "absolute left-0 right-0 top-0 [&>div>div>div]:h-1 [&>div>div>div]:rounded-none", children: /* @__PURE__ */ l(
                  Aa,
                  {
                    label: "Value",
                    value: D.progress,
                    hideLabel: !0
                  }
                ) }),
                /* @__PURE__ */ C(
                  "div",
                  {
                    className: P(
                      "mx-auto flex w-full flex-col @lg:w-[750px] max-w-full",
                      t === "all-questions" && !rt ? "justify-start" : "flex-1 justify-center",
                      Ke && "px-4 py-12"
                    ),
                    children: [
                      /* @__PURE__ */ l("div", { className: "mb-6", children: /* @__PURE__ */ l(
                        cs,
                        {
                          title: i,
                          description: r,
                          ...s
                        }
                      ) }),
                      m ? t === "stepped" ? /* @__PURE__ */ l(Ch, {}) : /* @__PURE__ */ l(_o, {}) : A ? null : /* @__PURE__ */ l(
                        no,
                        {
                          display: "flex",
                          flexDirection: "column",
                          height: "full",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingX: "lg",
                          children: /* @__PURE__ */ l(
                            ts,
                            {
                              emoji: L.emoji,
                              title: L.title,
                              description: L.description
                            }
                          )
                        }
                      ),
                      ze && /* @__PURE__ */ C("div", { className: "py-1 pl-5", children: [
                        /* @__PURE__ */ l("span", { className: "text-lg font-semibold text-f1-foreground", children: D.currentQuestion?.sectionTitle }),
                        D.currentQuestion?.sectionDescription && /* @__PURE__ */ l("p", { className: "text-f1-foreground-secondary", children: D.currentQuestion?.sectionDescription })
                      ] }),
                      A && !m && /* @__PURE__ */ l(
                        An,
                        {
                          formRef: y,
                          name: "survey-answering",
                          schema: re,
                          defaultValues: te,
                          onSubmit: Z,
                          submitConfig: {
                            hideSubmitButton: !0
                          },
                          errorTriggerMode: f,
                          sections: q
                        },
                        O ? D.currentStep : void 0
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
function Lh({
  elements: n,
  title: e,
  description: t,
  resourceHeader: i,
  defaultValues: r,
  loading: s = !1,
  labels: o,
  useUpload: a,
  datasets: d
}) {
  const { t: u } = oe(), h = B(
    () => Ui(n),
    [n]
  ).length > 0, f = {
    title: o?.empty?.title ?? u("surveyAnsweringForm.labels.empty.title"),
    description: o?.empty?.description ?? u("surveyAnsweringForm.labels.empty.description"),
    emoji: o?.empty?.emoji ?? u("surveyAnsweringForm.labels.empty.emoji")
  }, {
    schema: m,
    defaultValues: p,
    sections: v
  } = Do(
    n,
    "all-questions",
    u,
    r,
    void 0,
    void 0,
    !0,
    !0,
    a,
    d
  );
  return /* @__PURE__ */ l(
    qi,
    {
      answering: !0,
      elements: n,
      onChange: dn,
      datasets: d,
      children: /* @__PURE__ */ C("div", { className: "mx-auto flex w-full max-w-3xl flex-col", children: [
        /* @__PURE__ */ l("div", { className: "mb-6", children: /* @__PURE__ */ l(
          cs,
          {
            title: e,
            description: t,
            ...i
          }
        ) }),
        s ? /* @__PURE__ */ l(_o, {}) : h ? /* @__PURE__ */ l(
          An,
          {
            name: "survey-answering-inline",
            schema: m,
            defaultValues: p,
            onSubmit: async () => ({ success: !0 }),
            submitConfig: {
              hideSubmitButton: !0,
              hideActionBar: !0
            },
            sections: v
          }
        ) : /* @__PURE__ */ l(
          no,
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "lg",
            children: /* @__PURE__ */ l(
              ts,
              {
                emoji: f.emoji,
                title: f.title,
                description: f.description
              }
            )
          }
        )
      ] })
    }
  );
}
const Oh = ({ benefits: n }) => /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", children: n.map((e, t) => /* @__PURE__ */ l(Mh, { text: e }, t)) }), Mh = ({ text: n }) => /* @__PURE__ */ C("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ l(he, { icon: On, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ l("span", { children: n })
] }), Ro = qe(
  ({
    title: n,
    image: e,
    benefits: t,
    actions: i,
    withShadow: r = !0,
    module: s,
    moduleName: o,
    tag: a,
    promoTag: d
  }, u) => /* @__PURE__ */ C(
    "div",
    {
      ref: u,
      className: P(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        r && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ l("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ l(
          "img",
          {
            src: e,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ C("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ C("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ C("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ C("div", { className: "flex flex-row items-center gap-2", children: [
                s && /* @__PURE__ */ l(ns, { module: s }),
                o && /* @__PURE__ */ l("p", { className: "text-base font-medium text-f1-foreground", children: o })
              ] }),
              (a || d) && /* @__PURE__ */ C("div", { className: "flex justify-start gap-2", children: [
                a && /* @__PURE__ */ l(La, { icon: a.icon, text: a.label }),
                d && /* @__PURE__ */ l(
                  vi,
                  {
                    variant: d.variant || "positive",
                    text: d.label
                  }
                )
              ] }),
              /* @__PURE__ */ l("h2", { className: "font-bold text-xl text-f1-foreground", children: n })
            ] }),
            /* @__PURE__ */ l(Oh, { benefits: t })
          ] }),
          i && /* @__PURE__ */ l("div", { className: "flex gap-3", children: i })
        ] })
      ]
    }
  )
);
Ro.displayName = "ProductBlankslate";
const zh = se(Ro);
function Ih({
  isOpen: n,
  onClose: e,
  title: t,
  children: i,
  module: r,
  portalContainer: s
}) {
  const [o, a] = j(n);
  return V(() => {
    a(n);
  }, [n]), /* @__PURE__ */ l(Oa, { open: o, onOpenChange: (u) => {
    a(u), u || e();
  }, modal: !0, children: /* @__PURE__ */ C(
    Ma,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [
        /* @__PURE__ */ C("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ C(za, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            r && /* @__PURE__ */ l(ns, { module: r, size: "lg" }),
            t
          ] }),
          /* @__PURE__ */ l(
            Ir,
            {
              variant: "outline",
              icon: zn,
              onClick: e,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ C(Pr, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          i,
          /* @__PURE__ */ l(
            Hr,
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
function Bh({
  isOpen: n,
  onClose: e,
  title: t,
  image: i,
  benefits: r,
  errorMessage: s,
  successMessage: o,
  loadingState: a,
  nextSteps: d,
  closeLabel: u,
  primaryAction: c,
  modalTitle: h,
  modalModule: f,
  secondaryAction: m,
  portalContainer: p,
  tag: v,
  promoTag: g,
  showResponseDialog: b = !0
}) {
  const [w, S] = j(n), [T, R] = j(null), [x, y] = j(!1), _ = async () => {
    if (c?.onClick) {
      y(!0);
      try {
        await c.onClick(), S(!1), b && R("success");
      } catch {
        b && R("error");
      } finally {
        y(!1);
      }
    }
  }, k = () => {
    S(!1), e?.();
  }, F = x;
  return /* @__PURE__ */ C(we, { children: [
    /* @__PURE__ */ l(
      Ih,
      {
        isOpen: w,
        onClose: k,
        title: h,
        module: f,
        portalContainer: p,
        children: /* @__PURE__ */ l("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ l(
          zh,
          {
            title: t,
            image: i,
            benefits: r,
            withShadow: !1,
            tag: v,
            promoTag: g,
            actions: /* @__PURE__ */ C("div", { className: "flex gap-3", children: [
              c && /* @__PURE__ */ l(
                Ce,
                {
                  variant: c.variant,
                  label: F ? a.label : c.label,
                  icon: c.icon || void 0,
                  onClick: _,
                  loading: c.loading,
                  size: c.size
                }
              ),
              m && /* @__PURE__ */ l(
                Ce,
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
    T && b && /* @__PURE__ */ l(
      is,
      {
        open: !0,
        onClose: () => {
          k(), R(null);
        },
        success: T === "success",
        errorMessage: s,
        successMessage: o,
        nextSteps: d,
        closeLabel: u,
        portalContainer: p
      }
    )
  ] });
}
const _f = se(Bh);
function Ph({
  mediaUrl: n,
  title: e,
  description: t,
  onClose: i,
  dismissible: r,
  width: s,
  trackVisibility: o,
  actions: a,
  showConfirmation: d = !0
}) {
  const [u, c] = j(!1), h = () => {
    c(!0), i && i();
  };
  V(() => {
    o && o(!u);
  }, [o, u]);
  const f = n?.includes(".mp4");
  return /* @__PURE__ */ l(we, { children: u ? null : /* @__PURE__ */ C(Ia, { style: { width: s }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ C(Ba, { children: [
      r && /* @__PURE__ */ l("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ l(
        Ce,
        {
          variant: "ghost",
          icon: zn,
          size: "sm",
          hideLabel: !0,
          onClick: h,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ l("div", { children: n && (f ? /* @__PURE__ */ l(
          "video",
          {
            src: n,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ l(
          "img",
          {
            src: n,
            alt: e,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ C("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ l(er, { className: "text-lg font-medium", children: e }),
          /* @__PURE__ */ l(er, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    a && /* @__PURE__ */ l(Pa, { className: "p-3", children: a.map(
      (m) => m.type === "upsell" ? /* @__PURE__ */ l(
        rs,
        {
          label: m.label,
          onRequest: m.onClick,
          errorMessage: m.errorMessage,
          successMessage: m.successMessage,
          loadingState: m.loadingState,
          nextSteps: m.nextSteps,
          closeLabel: m.closeLabel,
          showConfirmation: d && m.showConfirmation,
          variant: m.variant
        },
        m.label
      ) : /* @__PURE__ */ l(
        Ce,
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
const Hh = se(Ph), ko = qe(
  function({ primaryAction: e, secondaryAction: t, ...i }, r) {
    const s = (d) => d.variant === "promote" ? /* @__PURE__ */ l(
      rs,
      {
        label: d.label,
        onRequest: async () => {
          await d.onClick();
        },
        errorMessage: d.errorMessage,
        successMessage: d.successMessage,
        loadingState: d.loadingState,
        nextSteps: d.nextSteps,
        closeLabel: d.closeLabel,
        showIcon: d.showIcon,
        showConfirmation: d.showConfirmation,
        variant: d.variant
      }
    ) : /* @__PURE__ */ l(
      Ce,
      {
        onClick: d.onClick,
        label: d.label,
        variant: d.variant || "default",
        size: "md",
        icon: d.icon
      }
    ), o = e?.variant !== "promote" ? e : void 0, a = t?.variant !== "promote" ? t : void 0;
    return /* @__PURE__ */ C(
      Ya,
      {
        ref: r,
        ...i,
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
ko.displayName = "UpsellingBanner";
const Df = se(ko);
function Wh({
  isOpen: n,
  setIsOpen: e,
  label: t,
  variant: i = "promote",
  size: r = "md",
  showIcon: s = !0,
  side: o = "right",
  align: a = "center",
  icon: d = Ha,
  mediaUrl: u,
  title: c,
  description: h,
  width: f = "300px",
  trackVisibility: m,
  actions: p,
  onClick: v,
  hideLabel: g = !1
}) {
  const [b, w] = j(!1), [S, T] = j(null), [R, x] = j(null), y = (M) => {
    e(M), v && v();
  }, _ = async (M) => {
    if (M.type === "upsell") {
      x(M);
      try {
        await M.onClick(), M.showConfirmation && (w(!0), T("success"));
      } catch {
        w(!0), T("error");
      }
    }
  }, k = () => {
    T(null), w(!1), x(null), e(!1);
  }, F = n && !b, E = p?.map((M) => M.type === "upsell" ? {
    ...M,
    onClick: () => _(M)
  } : M);
  return /* @__PURE__ */ C(we, { children: [
    /* @__PURE__ */ C(fi, { open: F, onOpenChange: y, children: [
      /* @__PURE__ */ l(mi, { asChild: !0, children: /* @__PURE__ */ l(
        Ce,
        {
          variant: i,
          label: t,
          size: r,
          icon: s ? d : void 0,
          onClick: () => e(n),
          hideLabel: g
        }
      ) }),
      /* @__PURE__ */ l(
        gi,
        {
          side: o,
          align: a,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ l(
            Hh,
            {
              mediaUrl: u,
              title: c,
              description: h,
              onClose: () => e(!1),
              dismissible: !1,
              width: f,
              trackVisibility: m,
              actions: E,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    R?.type === "upsell" && R.showConfirmation && S && /* @__PURE__ */ l(
      is,
      {
        open: !0,
        onClose: k,
        success: S === "success",
        errorMessage: R.errorMessage,
        successMessage: R.successMessage,
        nextSteps: R.nextSteps,
        closeLabel: R.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const Rf = se(Wh), kf = Oe(
  "F0AnalyticsDashboard",
  Wa
), Lr = (n) => `datacollection-${n}`, Tf = {
  get: async (n) => JSON.parse(
    localStorage.getItem(Lr(n)) ?? "{}"
  ),
  set: async (n, e) => {
    localStorage.setItem(Lr(n), JSON.stringify(e));
  }
};
export {
  Bg as AiChatTranslationsProvider,
  Kg as AreaChart,
  Lf as Await,
  Xg as BarChart,
  Of as BarChartSkeleton,
  Mf as CardSelectableContainer,
  Yg as CategoryBarChart,
  zf as ChatSpinner,
  hn as Chip,
  Jg as ComboChart,
  Kh as Dashboard,
  Qo as DataTestIdWrapper,
  If as DndProvider,
  Bf as EmojiImage,
  ia as F0ActionBar,
  Pf as F0ActionItem,
  Hf as F0AiChat,
  Wf as F0AiChatProvider,
  qf as F0AiChatTextArea,
  Gf as F0AiFormRegistryProvider,
  $f as F0AiFullscreenChat,
  Pg as F0AiInsightCard,
  Hg as F0AiMask,
  jf as F0Alert,
  kf as F0AnalyticsDashboard,
  Wg as F0AuraVoiceAnimation,
  Uf as F0Avatar,
  Vf as F0AvatarAlert,
  Qf as F0AvatarCompany,
  Zg as F0AvatarDate,
  Kf as F0AvatarEmoji,
  Xf as F0AvatarFile,
  Yf as F0AvatarIcon,
  Jf as F0AvatarList,
  ns as F0AvatarModule,
  Zf as F0AvatarPerson,
  em as F0AvatarTeam,
  tf as F0BigNumber,
  no as F0Box,
  Ce as F0Button,
  tm as F0ButtonDropdown,
  nm as F0ButtonToggle,
  im as F0Card,
  pn as F0Checkbox,
  uf as F0ChipList,
  rm as F0DataChart,
  sm as F0DatePicker,
  Fa as F0Dialog,
  Ea as F0DialogContext,
  om as F0DialogProvider,
  am as F0DurationInput,
  lm as F0EventCatcherProvider,
  mf as F0FilterPickerContent,
  pf as F0Form,
  Ee as F0FormField,
  Cf as F0GridStack,
  qg as F0HILActionConfirmation,
  bf as F0Heading,
  he as F0Icon,
  cm as F0Link,
  ga as F0OneIcon,
  dm as F0OneSwitch,
  um as F0Provider,
  hm as F0Select,
  Sf as F0TableOfContentPopover,
  fm as F0TagAlert,
  Go as F0TagBalance,
  mm as F0TagCompany,
  gm as F0TagDot,
  pm as F0TagList,
  vm as F0TagPerson,
  La as F0TagRaw,
  vi as F0TagStatus,
  bm as F0TagTeam,
  qt as F0Text,
  xf as F0TimelineRow,
  vf as F0WizardForm,
  ym as FILE_TYPES,
  xm as FileItem,
  wm as FormCardValueFormatterProvider,
  Cm as FunnelChartSkeleton,
  Sm as GROUP_ID_SYMBOL,
  Em as GaugeChartSkeleton,
  Nm as HeatmapChartSkeleton,
  Zh as HomeLayout,
  Xh as Layout,
  ep as LineChart,
  _m as LineChartSkeleton,
  tp as NotesTextEditor,
  np as NotesTextEditorPatchTargetNotFoundError,
  ip as NotesTextEditorSkeleton,
  rp as NotesTextEditorUnsupportedPatchTypeError,
  Dm as OneCalendar,
  Rm as OneCalendarInternal,
  Yi as OneEllipsis,
  ts as OneEmptyState,
  km as OneFilterPicker,
  sp as PieChart,
  Tm as PieChartSkeleton,
  Fm as PrivacyModeProvider,
  zh as ProductBlankslate,
  op as ProductCard,
  _f as ProductModal,
  Hh as ProductWidget,
  ap as ProgressBarChart,
  lp as RadarChart,
  Am as RadarChartSkeleton,
  Lm as RichTextDisplay,
  Om as RichTextEditor,
  Yh as StandardLayout,
  _o as SurveyAllQuestionsLoadingSkeleton,
  Nf as SurveyAnsweringForm,
  Ef as SurveyFormBuilder,
  Ch as SurveySteppedLoadingSkeleton,
  wf as Tag,
  Mm as TagCounter,
  Jh as TwoColumnLayout,
  is as UpsellRequestResponseDialog,
  Df as UpsellingBanner,
  rs as UpsellingButton,
  Rf as UpsellingPopover,
  cp as VerticalBarChart,
  zm as WeekStartDay,
  dp as _RadarChart,
  Im as actionBarStatuses,
  Gg as actionItemStatuses,
  $g as aiTranslations,
  ff as alertVariantOptions,
  Qh as avatarVariants,
  Bm as buildTranslations,
  af as buttonDropdownModes,
  of as buttonDropdownSizes,
  sf as buttonDropdownVariants,
  rf as buttonSizes,
  cf as buttonToggleSizes,
  df as buttonToggleVariants,
  nf as buttonVariants,
  Pm as cardImageAspectRatios,
  Hm as cardImageFits,
  Wm as cardImageSizes,
  qm as chartColorTokens,
  Gm as chipVariants,
  gh as computeSectionEndIds,
  jg as contentTypes,
  $m as createAtlaskitDriver,
  jm as createDataSourceDefinition,
  gf as createF0FormDefinitionTester,
  Yd as createF0FormTester,
  bl as createPageLayoutBlock,
  yl as createPageLayoutBlockGroup,
  Tf as dataCollectionLocalStorageHandler,
  hf as datepickerSizes,
  mp as defaultTranslations,
  Um as defineAvailableForm,
  Kd as describeFormSchema,
  Vm as durationInputSizes,
  Qm as durationUnits,
  Yo as evaluateRenderIf,
  Oe as experimental,
  Ae as f0FormField,
  Km as fieldsToSeconds,
  fh as flattenElements,
  Xm as generateAnchorId,
  Ym as getAnimationVariants,
  Jm as getCanvasEntity,
  Zm as getDataSourcePaginationType,
  eg as getEmojiLabel,
  Vt as getF0Config,
  tg as getGranularityDefinition,
  ng as getGranularityDefinitions,
  ig as getGranularitySimpleDefinition,
  rg as getSchemaDefinition,
  sg as granularityDefinitions,
  og as hasF0Config,
  Xo as inferFieldType,
  mh as injectSectionEnds,
  ag as isInfiniteScrollPagination,
  lg as isPageBasedPagination,
  cg as isZodType,
  lf as linkVariants,
  dg as modules,
  Ug as oneIconSizes,
  up as predefinedPresets,
  ug as rangeSeparator,
  Nr as reconstructElements,
  hg as secondsToFields,
  fg as secondsToVisibleFields,
  hp as selectSizes,
  ef as tagDotColors,
  yf as timelineRowStatuses,
  mg as unwrapZodSchema,
  gg as useAiChat,
  Vg as useAiChatTranslations,
  pg as useData,
  vg as useDataSource,
  bg as useDefaultCopilotActions,
  yg as useDndEvents,
  xg as useDraggable,
  wg as useDroppableList,
  Cg as useEmojiConfetti,
  Sg as useF0AiFormRegistry,
  Eg as useF0Dialog,
  pi as useF0Form,
  Ng as useF0FormDefinition,
  _g as useFormCardValueFormatter,
  Dg as useFormComponent,
  Rg as useGroups,
  kg as useMessageSourcesAction,
  Tg as useOrchestratorThinkingAction,
  Fg as usePrivacyMode,
  Ag as useReducedMotion,
  Lg as useSchemaDefinition,
  Og as useSelectable,
  Mg as useSetFormCardValueFormatter,
  zg as useXRay,
  se as withDataTestId
};
