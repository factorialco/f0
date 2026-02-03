import { y as G, z as je, D as In, G as Oi, J as zi, K as gs, M as ms, N as Hn, Q as _e, R as Li, V as Fn, W as vs, X as ys, Y as bs, Z as xs, _ as he, $ as be, a0 as ws, a1 as Cs, a2 as Bn, a3 as _s, a4 as Bt, a5 as Wn, a6 as Gn, a7 as $n, a8 as jn, a9 as Un, aa as Vn, ab as Es, ac as Ds, ad as Ss, ae as Rs, af as Ns, w as We, ag as cn, ah as Ts, ai as As, aj as gi, ak as ks, al as Os, am as zs, an as Ls, ao as Ps, ap as qn, aq as Ms, ar as Is, as as Hs, at as Fs, au as Bs, av as Kn, aw as Ws, ax as Gs, ay as $s, az as js, aA as Us, aB as Vs, aC as qs, aD as Ks } from "./F0AiChat-BN99sHG6.js";
import { A as Xu, aS as Yu, B as Zu, C as Ju, E as Qu, b5 as eh, g as th, F as ih, a as nh, v as rh, h as sh, b as oh, aE as ah, aF as lh, aG as ch, aH as dh, aJ as uh, aK as hh, aL as fh, aM as ph, aN as gh, aO as mh, aP as vh, b1 as yh, q as bh, r as xh, s as wh, t as Ch, c as _h, aT as Eh, l as Dh, m as Sh, n as Rh, H as Nh, I as Th, L as Ah, O as kh, aR as Oh, o as zh, P as Lh, S as Ph, T as Mh, j as Ih, k as Hh, U as Fh, b2 as Bh, aY as Wh, p as Gh, i as $h, a$ as jh, aX as Uh, b6 as Vh, aW as qh, aV as Kh, aI as Xh, u as Yh, aU as Zh, aZ as Jh, d as Qh, b7 as ef, aQ as tf, a_ as nf, f as rf, e as sf, b4 as of, b0 as af, b3 as lf } from "./F0AiChat-BN99sHG6.js";
import { jsx as h, jsxs as O, Fragment as Et } from "react/jsx-runtime";
import I, { forwardRef as ae, useRef as M, useImperativeHandle as Xs, Children as Wt, createContext as De, useContext as me, useState as F, useMemo as P, useEffect as H, useCallback as U, useLayoutEffect as Ei, createElement as dn, isValidElement as Xn, Fragment as Ys, memo as Zs, useReducer as Js, cloneElement as Qs, PureComponent as eo } from "react";
import { createPortal as Yn, unstable_batchedUpdates as Lt } from "react-dom";
import { L as Zn, C as to, i as Jn, D as io, S as un, a as no, f as mi, b as ht, c as ro, A as so, d as Pt, e as Qn, E as oo, g as Ht, h as ao, j as lo, k as co, l as Je, m as er, u as uo, G as ho, n as fo, o as hn, p as po, q as tr, r as go, B as ir, X as nr, Y as Di, s as mo, t as rr, v as vo, w as yo, x as bo, y as xo, z as wo, F as Co, H as _o, I as Eo, J as fn, K as Do, M as ft, N as vi, O as So, P as Ro, Q as No, R as To, T as Ao, U as ko, V as Oo, W as zo, Z as Lo, _ as Po, $ as Mo, a0 as pn, a1 as Io, a2 as Ho, a3 as sr, a4 as Fo, a5 as Bo, a6 as Wo, a7 as Pi, a8 as Go, a9 as $o, aa as jo, ab as Uo, ac as Vo, ad as qo, ae as Ko, af as Xo, ag as Yo, ah as Zo, ai as Jo, aj as Qo, ak as ea, al as or, am as ta, an as ia, ao as gn, ap as na, aq as ar, ar as ra, as as sa, at as oa, au as aa } from "./DataCollectionStorageProvider-TRBx6Sbn.js";
import { aM as df, av as uf, aw as hf, az as ff, aD as pf, aE as gf, aF as mf, aH as vf, aI as yf, aJ as bf, aK as xf, aC as wf, aG as Cf, ax as _f, ay as Ef, aL as Df, aA as Sf, aB as Rf, aN as Nf, aO as Tf, aP as Af, aQ as kf } from "./DataCollectionStorageProvider-TRBx6Sbn.js";
import { A as zf, F as Lf, b as Pf, a as Mf, o as If, u as Hf } from "./F0HILActionConfirmation-D7BLroqK.js";
import { defaultTranslations as Bf } from "./i18n-provider-defaults.js";
import './f0.css';const la = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ca = ae(function({ widgets: e, children: t }, n) {
  const r = M(null);
  Xs(n, () => r.current);
  const s = Wt.toArray(e).filter((o) => !!o).map((o, a) => h("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: o
  }, a));
  return h(Zn, {
    layout: "home",
    children: O("div", {
      ref: r,
      className: "@container",
      children: [O("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [h(to, {
          columns: la,
          showArrows: !1,
          children: s
        }), h("main", {
          children: t
        })]
      }), O("div", {
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
}), da = je({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), lr = I.forwardRef(({ children: i, variant: e, className: t, ...n }, r) => h(Zn, {
  layout: "standard",
  children: h("section", {
    ref: r,
    className: G("relative flex-1 overflow-auto", t),
    ...n,
    children: h("div", {
      className: G(da({
        variant: e
      })),
      children: i
    })
  })
}));
lr.displayName = "StandardLayout";
const ua = ae(function({ children: e, sideContent: t, mainColumnPosition: n = "left", sticky: r = !1 }, s) {
  return h("div", {
    ref: s,
    className: "h-full",
    children: O("div", {
      className: G("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", r && "md:sticky md:top-0 md:max-h-full"),
      children: [h("main", {
        className: G("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", r ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), h(ha, {
        sticky: r,
        className: G("order-1", n === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), ha = ({ children: i, className: e }) => h("aside", {
  className: G("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: i
}), cr = De(null);
function dr() {
  const i = me(cr);
  if (!i)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return i;
}
function fa(i) {
  const { content: e, ...t } = i;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function Qe(i) {
  const e = fa(i);
  return i.subGridOpts?.children && (e.subGridOpts = {
    ...i.subGridOpts,
    children: i.subGridOpts.children.map(
      (t) => Qe(t)
    )
  }), e;
}
const pa = ["noMove", "noResize", "locked", "w", "h", "x", "y"], Ie = 200;
function ga(i) {
  const e = i.cloneNode(!0);
  return i.querySelectorAll("canvas").forEach((n) => {
    if (n.width > 0 && n.height > 0)
      try {
        const r = n.toDataURL("image/png"), s = e.querySelectorAll("canvas"), o = Array.from(i.querySelectorAll("canvas")).indexOf(n), a = s[o];
        if (a && a.parentElement) {
          const l = document.createElement("img");
          l.src = r, l.style.width = `${n.width}px`, l.style.height = `${n.height}px`, l.style.display = "block", n.className && (l.className = n.className), n.id && (l.id = n.id), a.parentElement.replaceChild(l, a);
        }
      } catch (r) {
        console.warn("Failed to convert canvas to image:", r);
      }
  }), e.innerHTML;
}
function ma({ children: i, options: e, onResizeStop: t, onChange: n, widgets: r }) {
  const [s, o] = F(null), a = M(null), l = M(!1), d = P(() => ({
    ...e,
    children: (r || []).map((w) => Qe(w))
  }), [e, r]), [c, u] = F(() => {
    const w = /* @__PURE__ */ new Map(), S = r || [], y = (b) => {
      b.id && b.content && w.set(b.id, b.content), b.subGridOpts?.children && b.subGridOpts.children.forEach((m) => {
        y(m);
      });
    };
    return S.forEach((b) => {
      y(b);
    }), w;
  }), f = M(c);
  H(() => {
    f.current = c;
  }, [c]);
  const [p, _] = F(() => {
    const w = /* @__PURE__ */ new Map(), S = r || [], y = (b) => {
      b.id && b._originalContent !== void 0 && w.set(b.id, b._originalContent), b.subGridOpts?.children && b.subGridOpts.children.forEach((m) => {
        y(m);
      });
    };
    return S.forEach((b) => {
      y(b);
    }), w;
  }), v = M(p);
  H(() => {
    v.current = p;
  }, [p]);
  const [x, D] = F(() => {
    const w = /* @__PURE__ */ new Map(), S = r || [], y = (b) => {
      if (b.id) {
        const m = Qe(b);
        w.set(b.id, m);
      }
      b.subGridOpts?.children && b.subGridOpts.children.forEach((m) => {
        y(m);
      });
    };
    return S.forEach((b) => {
      y(b);
    }), w;
  });
  In(() => {
    if (!s) return;
    const w = s.save();
    if (!Array.isArray(w))
      return;
    const S = w.map((T) => T.id), y = r || [], b = y.map((T) => T.id), m = y.filter((T) => !S.includes(T.id));
    m.length > 0 && (m.forEach((T) => {
      T.content && f.current.set(T.id, T.content), T._originalContent !== void 0 && v.current.set(T.id, T._originalContent);
    }), m.forEach((T) => {
      const E = Qe(T);
      s.addWidget(E);
    }), D((T) => {
      const E = new Map(T);
      return m.forEach((R) => {
        const A = Qe(R);
        E.set(R.id, A);
      }), E;
    }), u((T) => {
      const E = new Map(T);
      return m.forEach((R) => {
        R.content && E.set(R.id, R.content);
      }), E;
    }), _((T) => {
      const E = new Map(T);
      return m.forEach((R) => {
        R._originalContent !== void 0 && E.set(R.id, R._originalContent);
      }), E;
    }));
    const C = w.filter((T) => !b.includes(T.id));
    if (C.length > 0) {
      const T = C.map((E) => E.id).filter(Boolean);
      T.forEach((E) => {
        setTimeout(() => {
          f.current.delete(E), v.current.delete(E);
        }, Ie);
      }), C.forEach((E) => {
        const R = s.el.querySelector(`[gs-id="${E.id}"]`);
        R && setTimeout(() => {
          s.removeWidget(R, !0);
        }, Ie);
      }), D((E) => {
        const R = new Map(E);
        return T.forEach((A) => {
          setTimeout(() => {
            R.delete(A);
          }, Ie);
        }), R;
      }), u((E) => {
        const R = new Map(E);
        return T.forEach((A) => {
          if (R.get(A)) {
            const ee = s.el.querySelector(`[gs-id="${A}"] .grid-stack-item-content`);
            let te = "";
            ee && (te = ga(ee)), R.set(A, h(Oi.div, {
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
                  duration: Ie / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: Ie / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: Ie / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: te
              }
            }));
          }
          setTimeout(() => {
            R.delete(A);
          }, Ie);
        }), R;
      }), _((E) => {
        const R = new Map(E);
        return T.forEach((A) => {
          setTimeout(() => {
            R.delete(A);
          }, Ie);
        }), R;
      });
    }
    const z = y.filter((T) => S.includes(T.id));
    if (z.length > 0) {
      const T = [];
      z.forEach((E) => {
        const R = w.find((B) => B.id === E.id);
        if (!R)
          return;
        const A = pa.filter((B) => R[B] !== E[B]);
        if (A.length > 0) {
          const B = {}, ee = ["w", "h", "x", "y"], te = ["noMove", "noResize", "locked"], V = A.filter((j) => ee.includes(j)), fe = A.filter((j) => te.includes(j));
          if (V.length > 0 && fe.length > 0 && V.length + fe.length === A.length ? fe.forEach((j) => {
            const pe = E[j];
            pe !== void 0 && (B[j] = pe);
          }) : A.forEach((j) => {
            const pe = E[j];
            pe !== void 0 && (B[j] = pe);
          }), Object.keys(B).length > 0) {
            const j = s.el.querySelector(`[gs-id="${E.id}"]`);
            j && T.push({
              id: E.id,
              element: j,
              updateOptions: B
            });
          }
        }
      }), z.forEach((E) => {
        E.content && f.current.set(E.id, E.content), E._originalContent !== void 0 && v.current.set(E.id, E._originalContent);
      }), T.forEach(({ element: E, updateOptions: R }) => {
        try {
          s.update(E, R);
        } catch (A) {
          console.warn("Error updating widget:", A);
        }
      }), D((E) => {
        const R = new Map(E);
        return z.forEach((A) => {
          const B = Qe(A);
          R.set(A.id, B);
        }), R;
      }), u((E) => {
        const R = new Map(E);
        return z.forEach((A) => {
          A.content && R.set(A.id, A.content);
        }), R;
      }), _((E) => {
        const R = new Map(E);
        return z.forEach((A) => {
          A._originalContent !== void 0 && R.set(A.id, A._originalContent);
        }), R;
      });
    }
    l.current || (l.current = !0);
  }, [r]), H(() => {
    if (!s || !d.handle) return;
    s.opts && (s.opts.handle = d.handle);
    const w = setTimeout(() => {
      if (s && s.el && d.handle && s.el.querySelectorAll(d.handle).length > 0)
        try {
          !s.opts?.disableResize && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(w);
  }, [s, d.handle, d.children]);
  const N = U(() => {
    if (!s)
      return;
    const w = s.save();
    if (Array.isArray(w)) {
      const S = w.map((y) => {
        const b = y.id;
        if (!b) return null;
        const m = f.current.get(b), C = v.current.get(b), z = y;
        return {
          ...y,
          id: b,
          w: y.w ?? 1,
          h: y.h ?? 1,
          x: y.x ?? 0,
          y: y.y ?? 0,
          meta: z.meta,
          _originalContent: C,
          content: m ?? h("div", {
            children: "No content"
          })
        };
      }).filter((y) => y !== null);
      n?.(S);
    }
  }, [s]);
  return H(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const w = (S, y) => {
      t?.(S, y);
    };
    try {
      s.on("resizestop", w), s.on("change added removed", N);
    } catch (S) {
      console.error("Error attaching GridStack event listeners:", S);
      return;
    }
    return () => {
      const S = a.current;
      if (S && S.el)
        try {
          S.off("resizestop"), S.off("change added removed");
        } catch (y) {
          console.warn("Error cleaning up GridStack event listeners:", y);
        }
    };
  }, [s, t, N]), H(() => {
    a.current = s;
  }, [s]), H(() => {
    s && s.el && s.el.parentElement && l.current && N();
  }, [s]), h(cr.Provider, {
    value: {
      options: d,
      gridStack: s,
      _gridStack: {
        value: s,
        set: o
      },
      _rawWidgetMetaMap: {
        value: x,
        set: D
      },
      _reactContentMap: {
        value: c,
        set: u
      }
    },
    children: i
  });
}
const ur = De(null);
function va() {
  const i = me(ur);
  if (!i)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return i;
}
const ya = De(null);
function ba() {
  const { _reactContentMap: i } = dr(), { getWidgetContainer: e } = va();
  return h(Et, {
    children: Array.from(i.value.entries()).map(([t, n]) => {
      const r = e(t);
      return r ? h(ya.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: n && Yn(n, r)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function xa(i, e, t, n, r) {
  const s = (...o) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + r + " and has been replaced with `" + n + "`. It will be **removed** in a future release"), e.apply(i, o));
  return s.prototype = e.prototype, s;
}
class g {
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
      const n = "getElementById" in t ? t : void 0;
      if (!e.length)
        return null;
      if (n && e[0] === "#")
        return n.getElementById(e.substring(1));
      if (e[0] === "#" || e[0] === "." || e[0] === "[")
        return t.querySelector(e);
      if (n && !isNaN(+e[0]))
        return n.getElementById(e);
      let r = t.querySelector(e);
      return n && !r && (r = n.getElementById(e)), r || (r = t.querySelector("." + e)), r;
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
    return e.forEach((r) => {
      r && n.classList.add(r);
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
    return g.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
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
    const n = e.x > t.x ? e.x : t.x, r = e.x + e.w < t.x + t.w ? e.x + e.w : t.x + t.w;
    if (r <= n)
      return 0;
    const s = e.y > t.y ? e.y : t.y, o = e.y + e.h < t.y + t.h ? e.y + e.h : t.y + t.h;
    return o <= s ? 0 : (r - n) * (o - s);
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
        const r = e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%|cm|mm)?$/);
        if (!r)
          throw new Error(`Invalid height val = ${e}`);
        n = r[2] || "px", t = parseFloat(r[1]);
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
      for (const r in n) {
        if (!n.hasOwnProperty(r))
          return;
        e[r] === null || e[r] === void 0 ? e[r] = n[r] : typeof n[r] == "object" && typeof e[r] == "object" && g.defaults(e[r], n[r]);
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
        const r = e[n], s = t[n];
        n[0] === "_" || r === s ? delete e[n] : r && typeof r == "object" && s !== void 0 && (g.removeInternalAndSame(r, s), Object.keys(r).length || delete e[n]);
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
    return (...r) => {
      n || (n = !0, setTimeout(() => {
        e(...r), n = !1;
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : g.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, n) {
    const r = g.getScrollElement(e);
    if (!r)
      return;
    const s = e.getBoundingClientRect(), o = r.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(o.bottom, a), d = s.top - Math.max(o.top, 0), c = r.scrollTop;
    d < 0 && n < 0 ? e.offsetHeight > o.height ? r.scrollTop += n : r.scrollTop += Math.abs(d) > Math.abs(n) ? n : d : l > 0 && n > 0 && (e.offsetHeight > o.height ? r.scrollTop += n : r.scrollTop += l > n ? n : l), t.top += r.scrollTop - c;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, n) {
    const r = g.getScrollElement(t), s = r.clientHeight, o = r === g.getScrollElement() ? 0 : r.getBoundingClientRect().top, a = e.clientY - o, l = a < n, d = a > s - n;
    l ? r.scrollBy({ behavior: "smooth", top: a - n }) : d && r.scrollBy({ behavior: "smooth", top: n - (s - a) });
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], n = g.clone(e);
    for (const r in n)
      n.hasOwnProperty(r) && typeof n[r] == "object" && r.substring(0, 2) !== "__" && !t.find((s) => s === r) && (n[r] = g.cloneDeep(e[r]));
    return n;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let n;
    typeof t == "string" ? n = g.getElement(t) : n = t, n && n.appendChild(e);
  }
  // public static setPositionRelative(el: HTMLElement): void {
  //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
  //     el.style.position = "relative";
  //   }
  // }
  static addElStyles(e, t) {
    if (t instanceof Object)
      for (const n in t)
        t.hasOwnProperty(n) && (Array.isArray(t[n]) ? t[n].forEach((r) => {
          e.style[n] = r;
        }) : e.style[n] = t[n]);
  }
  static initEvent(e, t) {
    const n = { type: t.type }, r = {
      button: 0,
      which: 0,
      buttons: 1,
      bubbles: !0,
      cancelable: !0,
      target: t.target ? t.target : e.target
    };
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].forEach((s) => n[s] = e[s]), ["pageX", "pageY", "clientX", "clientY", "screenX", "screenY"].forEach((s) => n[s] = e[s]), { ...n, ...r };
  }
  /** copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target */
  static simulateMouseEvent(e, t, n) {
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
    (n || e.target).dispatchEvent(s);
  }
  /**
   * defines an element that is used to get the offset and scale from grid transforms
   * returns the scale and offsets from said element
  */
  static getValuesFromTransformedElement(e) {
    const t = document.createElement("div");
    g.addElStyles(t, {
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
    const r = e[t];
    e[t] = e[n], e[n] = r;
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
class Ae {
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
  _fixCollisions(e, t = e, n, r = {}) {
    if (this.sortNodes(-1), n = n || this.collide(e, t), !n)
      return !1;
    if (e._moving && !r.nested && !this.float && this.swap(e, n))
      return !0;
    let s = t;
    !this._loading && this._useEntireRowArea(e, t) && (s = { x: 0, w: this.column, y: t.y, h: t.h }, n = this.collide(e, s, r.skip));
    let o = !1;
    const a = { nested: !0, pack: !1 };
    let l = 0;
    for (; n = n || this.collide(e, s, r.skip); ) {
      if (l++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let d;
      if (n.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(n, { ...n, y: e.y }, e) || !this.collide(n, { ...n, y: t.y - n.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: n.y + n.h, ...a };
        d = this._loading && g.samePos(e, c) ? !0 : this.moveNode(e, c), (n.locked || this._loading) && d ? g.copyPos(t, e) : !n.locked && d && r.pack && (this._packNodes(), t.y = n.y + n.h, g.copyPos(e, t)), o = o || d;
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
    const r = e._id, s = n?._id;
    return this.nodes.find((o) => o._id !== r && o._id !== s && g.isIntercepted(o, t));
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
    const r = e._id, s = n?._id;
    return this.nodes.filter((o) => o._id !== r && o._id !== s && g.isIntercepted(o, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, n) {
    if (!t.rect || !e._rect)
      return;
    const r = e._rect, s = { ...t.rect };
    s.y > r.y ? (s.h += s.y - r.y, s.y = r.y) : s.h += r.y - s.y, s.x > r.x ? (s.w += s.x - r.x, s.x = r.x) : s.w += r.x - s.x;
    let o, a = 0.5;
    for (let l of n) {
      if (l.locked || !l._rect)
        break;
      const d = l._rect;
      let c = Number.MAX_VALUE, u = Number.MAX_VALUE;
      r.y < d.y ? c = (s.y + s.h - d.y) / d.h : r.y + r.h > d.y + d.h && (c = (d.y + d.h - s.y) / d.h), r.x < d.x ? u = (s.x + s.w - d.x) / d.w : r.x + r.w > d.x + d.w && (u = (d.x + d.w - s.x) / d.w);
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
  cacheRects(e, t, n, r, s, o) {
    return this.nodes.forEach((a) => a._rect = {
      y: a.y * t + n,
      x: a.x * e + o,
      w: a.w * e - o - r,
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
    let r;
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (r = g.isTouching(e, t)))
      return n();
    if (r !== !1) {
      if (e.w === t.w && e.x === t.x && (r || (r = g.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return n();
      }
      if (r !== !1) {
        if (e.h === t.h && e.y === t.y && (r || (r = g.isTouching(e, t)))) {
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
  isAreaEmpty(e, t, n, r) {
    const s = { x: e || 0, y: t || 0, w: n || 1, h: r || 1 };
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
    const r = this._inColumnResize;
    r || (this._inColumnResize = !0);
    const s = this.nodes;
    return this.nodes = [], s.forEach((o, a, l) => {
      let d;
      o.locked || (o.autoPosition = !0, e === "list" && a && (d = l[a - 1])), this.addNode(o, !1, d);
    }), r || delete this._inColumnResize, n || this.batchUpdate(!1), this;
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
    return this.nodes = g.sort(this.nodes, e), this;
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
    e._id = e._id ?? Ae._idSeq++;
    const n = e.id;
    if (n) {
      let s = 1;
      for (; this.nodes.find((o) => o.id === e.id && o !== e); )
        e.id = n + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const r = { x: 0, y: 0, w: 1, h: 1 };
    return g.defaults(e, r), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, g.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = r.x, e.autoPosition = !0), isNaN(e.y) && (e.y = r.y, e.autoPosition = !0), isNaN(e.w) && (e.w = r.w), isNaN(e.h) && (e.h = r.h), this.nodeBoundFix(e, t), e;
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
    const n = e._orig || g.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), g.samePos(e, n) || (e._dirty = !0), this;
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
    return e ? this.nodes.filter((t) => t._dirty && !g.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
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
      e._orig = g.copyPos({}, e), delete e._dirty;
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
      !e._orig || g.samePos(e, e._orig) || (g.copyPos(e, e._orig), e._dirty = !0);
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
  findEmptyPosition(e, t = this.nodes, n = this.column, r) {
    const s = r ? r.y * n + (r.x + r.w) : 0;
    let o = !1;
    for (let a = s; !o; ++a) {
      const l = a % n, d = Math.floor(a / n);
      if (l + e.w > n)
        continue;
      const c = { x: l, y: d, w: e.w, h: e.h };
      t.find((u) => g.isIntercepted(c, u)) || ((e.x !== l || e.y !== d) && (e._dirty = !0), e.x = l, e.y = d, delete e.autoPosition, o = !0);
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
    const r = this.nodes.find((o) => o._id === e._id);
    if (r)
      return r;
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
    return this.nodes.find((r) => r._id === e._id) ? (n && this.removedNodes.push(e), t && (e._removeDOM = !0), this.nodes = this.nodes.filter((r) => r._id !== e._id), e._isAboutToRemove || this._packNodes(), this._notify([e]), this) : this;
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
    const r = new Ae({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((o) => o._id === e._id ? (n = { ...o }, n) : { ...o })
    });
    if (!n)
      return !1;
    const s = r.moveNode(n, t) && r.getRow() <= Math.max(this.getRow(), this.maxRow);
    if (!s && !t.resizing && t.collide) {
      const o = t.collide.el.gridstackNode;
      if (this.swap(e, o))
        return this._notify(), !0;
    }
    return s ? (r.nodes.filter((o) => o._dirty).forEach((o) => {
      const a = this.nodes.find((l) => l._id === o._id);
      a && (g.copyPos(a, o), a._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new Ae({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((r) => ({ ...r }))
    }), n = { ...e };
    return this.cleanupNode(n), delete n.el, delete n._id, delete n.content, delete n.grid, t.addNode(n), t.getRow() <= this.maxRow ? (e._willFitPos = g.copyPos({}, n), !0) : !1;
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
    const r = e.w !== t.w || e.h !== t.h, s = g.copyPos({}, e, !0);
    if (g.copyPos(s, t), this.nodeBoundFix(s, r), g.copyPos(t, s), !t.forceCollide && g.samePos(e, t))
      return !1;
    const o = g.copyPos({}, e), a = this.collideAll(e, s, t.skip);
    let l = !0;
    if (a.length) {
      const d = e._moving && !t.nested;
      let c = d ? this.directionCollideCoverage(e, t, a) : a[0];
      if (d && c && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = g.areaIntercept(t.rect, c._rect), f = g.area(t.rect), p = g.area(c._rect);
        u / (f < p ? f : p) > 0.8 && (c.grid.makeSubGrid(c.el, void 0, e), c = void 0);
      }
      c ? l = !this._fixCollisions(e, s, c, t) : (l = !1, n && delete t.pack);
    }
    return l && !g.samePos(e, s) && (e._dirty = !0, g.copyPos(e, s)), t.pack && this._packNodes()._notify(), !g.samePos(e, o);
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
    const r = this._layouts?.length || 0;
    let s;
    r && (n ? n !== this.column && (s = this._layouts[n]) : this.column !== r - 1 && (s = this._layouts[r - 1]));
    const o = [];
    return this.sortNodes(), this.nodes.forEach((a) => {
      const l = s?.find((c) => c._id === a._id), d = { ...a, ...l || {} };
      g.removeInternalForSave(d, !e), t && t(a, d), o.push(d);
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
        const r = n / this.column;
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
  columnChanged(e, t, n = "moveScale") {
    if (!this.nodes.length || !t || e === t)
      return this;
    const r = n === "compact" || n === "list";
    r && this.sortNodes(1), t < e && this.cacheLayout(this.nodes, e), this.batchUpdate();
    let s = [], o = r ? this.nodes : g.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const a = this._layouts[t] || [], l = this._layouts.length - 1;
      !a.length && e !== l && this._layouts[l]?.length && (e = l, this._layouts[l].forEach((d) => {
        const c = o.find((u) => u._id === d._id);
        c && (!r && !d.autoPosition && (c.x = d.x ?? c.x, c.y = d.y ?? c.y), c.w = d.w ?? c.w, (d.x == null || d.y === void 0) && (c.autoPosition = !0));
      })), a.forEach((d) => {
        const c = o.findIndex((u) => u._id === d._id);
        if (c !== -1) {
          const u = o[c];
          if (r) {
            u.w = d.w;
            return;
          }
          (d.autoPosition || isNaN(d.x) || isNaN(d.y)) && this.findEmptyPosition(d, s), d.autoPosition || (u.x = d.x ?? u.x, u.y = d.y ?? u.y, u.w = d.w ?? u.w, s.push(u)), o.splice(c, 1);
        }
      });
    }
    if (r)
      this.compact(n, !1);
    else {
      if (o.length)
        if (typeof n == "function")
          n(t, e, s, o);
        else {
          const a = r || n === "none" ? 1 : t / e, l = n === "move" || n === "moveScale", d = n === "scale" || n === "moveScale";
          o.forEach((c) => {
            c.x = t === 1 ? 0 : l ? Math.round(c.x * a) : Math.min(c.x, t - 1), c.w = t === 1 || e === 1 ? 1 : d ? Math.round(c.w * a) || 1 : Math.min(c.w, t), s.push(c);
          }), o = [];
        }
      s = g.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((a) => {
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
  cacheLayout(e, t, n = !1) {
    const r = [];
    return e.forEach((s, o) => {
      if (s._id === void 0) {
        const a = s.id ? this.nodes.find((l) => l.id === s.id) : void 0;
        s._id = a?._id ?? Ae._idSeq++;
      }
      r[o] = { x: s.x, y: s.y, w: s.w, _id: s._id };
    }), this._layouts = n ? [] : this._layouts || [], this._layouts[t] = r, this;
  }
  /**
   * call to cache the given node layout internally to the given location so we can restore back when column changes size
   * @param node single node to cache
   * @param column corresponding column index to save it under
   */
  cacheOneLayout(e, t) {
    e._id = e._id ?? Ae._idSeq++;
    const n = { x: e.x, y: e.y, w: e.w, _id: e._id };
    (e.autoPosition || e.x === void 0) && (delete n.x, delete n.y, e.autoPosition && (n.autoPosition = !0)), this._layouts = this._layouts || [], this._layouts[t] = this._layouts[t] || [];
    const r = this.findCacheLayout(e, t);
    return r === -1 ? this._layouts[t].push(n) : this._layouts[t][r] = n, this;
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
Ae._idSeq = 0;
const oe = {
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
class L {
}
const ge = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class Ee {
}
function Gt(i, e) {
  i.touches.length > 1 || (i.cancelable && i.preventDefault(), g.simulateMouseEvent(i.changedTouches[0], e));
}
function hr(i, e) {
  i.cancelable && i.preventDefault(), g.simulateMouseEvent(i, e);
}
function $t(i) {
  Ee.touchHandled || (Ee.touchHandled = !0, Gt(i, "mousedown"));
}
function jt(i) {
  Ee.touchHandled && Gt(i, "mousemove");
}
function Ut(i) {
  if (!Ee.touchHandled)
    return;
  Ee.pointerLeaveTimeout && (window.clearTimeout(Ee.pointerLeaveTimeout), delete Ee.pointerLeaveTimeout);
  const e = !!L.dragElement;
  Gt(i, "mouseup"), e || Gt(i, "click"), Ee.touchHandled = !1;
}
function Vt(i) {
  i.pointerType !== "mouse" && i.target.releasePointerCapture(i.pointerId);
}
function mn(i) {
  L.dragElement && i.pointerType !== "mouse" && hr(i, "mouseenter");
}
function vn(i) {
  L.dragElement && i.pointerType !== "mouse" && (Ee.pointerLeaveTimeout = window.setTimeout(() => {
    delete Ee.pointerLeaveTimeout, hr(i, "mouseleave");
  }, 10));
}
class ii {
  constructor(e, t, n) {
    this.host = e, this.dir = t, this.option = n, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${ii.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), ge && (this.el.addEventListener("touchstart", $t), this.el.addEventListener("pointerdown", Vt)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), ge && (this.el.removeEventListener("touchstart", $t), this.el.removeEventListener("pointerdown", Vt)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ge && (this.el.addEventListener("touchmove", jt), this.el.addEventListener("touchend", Ut)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ge && (this.el.removeEventListener("touchmove", jt), this.el.removeEventListener("touchend", Ut)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
ii.prefix = "ui-resizable-";
class Mi {
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
class bt extends Mi {
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
    const t = e.handles && e.handles !== this.option.handles, n = e.autoHide && e.autoHide !== this.option.autoHide;
    return Object.keys(e).forEach((r) => this.option[r] = e[r]), t && (this._removeHandlers(), this._setupHandlers()), n && this._setupAutoHide(this.option.autoHide), this;
  }
  /** @internal turns auto hide on/off */
  _setupAutoHide(e) {
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), L.overResizeElement === this && delete L.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    L.overResizeElement || L.dragElement || (L.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    L.overResizeElement === this && (delete L.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new ii(this.el, e, {
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
    this.sizeToContent = g.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = g.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = g.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const n = g.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(n, this._ui()), this.triggerEvent("resize", n), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = g.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = bt._originStyleProp.map((n) => this.el.style[n]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = g.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return bt._originStyleProp.forEach((e, t) => {
      this.el.style[e] = this.elOriginStyleVal[t] || null;
    }), this.el.parentElement.style.position = this.parentOriginStylePosition || null, this;
  }
  /** @internal */
  _getChange(e, t) {
    const n = this.startEvent, r = {
      width: this.originalRect.width,
      height: this.originalRect.height + this.scrolled,
      left: this.originalRect.left,
      top: this.originalRect.top - this.scrolled
    }, s = e.clientX - n.clientX, o = this.sizeToContent ? 0 : e.clientY - n.clientY;
    let a, l;
    t.indexOf("e") > -1 ? r.width += s : t.indexOf("w") > -1 && (r.width -= s, r.left += s, a = !0), t.indexOf("s") > -1 ? r.height += o : t.indexOf("n") > -1 && (r.height -= o, r.top += o, l = !0);
    const d = this._constrainSize(r.width, r.height, a, l);
    return Math.round(r.width) !== Math.round(d.width) && (t.indexOf("w") > -1 && (r.left += r.width - d.width), r.width = d.width), Math.round(r.height) !== Math.round(d.height) && (t.indexOf("n") > -1 && (r.top += r.height - d.height), r.height = d.height), r;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, n, r) {
    const s = this.option, o = (n ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, a = s.minWidth / this.rectScale.x || e, l = (r ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, d = s.minHeight / this.rectScale.y || t, c = Math.min(o, Math.max(a, e)), u = Math.min(l, Math.max(d, t));
    return { width: c, height: u };
  }
  /** @internal */
  _applyChange() {
    let e = { left: 0, top: 0, width: 0, height: 0 };
    if (this.el.style.position === "absolute") {
      const t = this.el.parentElement, { left: n, top: r } = t.getBoundingClientRect();
      e = { left: n, top: r, width: 0, height: 0 };
    }
    return this.temporalRect ? (Object.keys(this.temporalRect).forEach((t) => {
      const n = this.temporalRect[t], r = t === "width" || t === "left" ? this.rectScale.x : t === "height" || t === "top" ? this.rectScale.y : 1;
      this.el.style[t] = (n - e[t]) * r + "px";
    }), this) : this;
  }
  /** @internal */
  _removeHandlers() {
    return this.handlers.forEach((e) => e.destroy()), delete this.handlers, this;
  }
}
bt._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const wa = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class xt extends Mi {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.dragTransform = {
      xScale: 1,
      yScale: 1,
      xOffset: 0,
      yOffset: 0
    };
    const n = t?.handle?.substring(1), r = e.gridstackNode;
    this.dragEls = !n || e.classList.contains(n) ? [e] : r?.subGrid ? [e.querySelector(t.handle) || e] : Array.from(e.querySelectorAll(t.handle)), this.dragEls.length === 0 && (this.dragEls = [e]), this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this.enable();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.dragEls.forEach((e) => {
      e.addEventListener("mousedown", this._mouseDown), ge && (e.addEventListener("touchstart", $t), e.addEventListener("pointerdown", Vt));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), ge && (t.removeEventListener("touchstart", $t), t.removeEventListener("pointerdown", Vt));
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
    if (!L.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(wa) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete L.dragElement, delete L.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), ge && (e.currentTarget.addEventListener("touchmove", jt), e.currentTarget.addEventListener("touchend", Ut)), e.preventDefault(), document.activeElement && document.activeElement.blur(), L.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = g.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), L.pauseDrag) {
        const n = Number.isInteger(L.pauseDrag) ? L.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), n);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, L.dragElement = this;
      const n = this.el.gridstackNode?.grid;
      n ? L.dropElement = n.el.ddElement.ddDroppable : delete L.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = g.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const r = g.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(r, this.ui()), this.triggerEvent("dragstart", r), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), ge && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", jt, !0), e.currentTarget.removeEventListener("touchend", Ut, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), L.dropElement?.el === this.el.parentElement && delete L.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = g.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), L.dropElement && L.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete L.dragElement, delete L.dropElement, delete L.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, n = t?.grid || L.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), n?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && n && (e.key === "r" || e.key === "R")) {
      if (!g.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, n.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", g.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = g.cloneNode(this.el)), e.parentElement || g.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = xt.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", xt.originStyleProp.forEach((r) => t.style[r] = this.dragElementOriginStyle[r] || null), setTimeout(() => t.style.transition = n, 50);
    }
    return delete this.dragElementOriginStyle, this;
  }
  /** @internal updates the top/left position to follow the mouse */
  _dragFollow(e) {
    const t = { left: 0, top: 0 }, n = this.helper.style, r = this.dragOffset;
    n.left = (e.clientX + r.offsetLeft - t.left) * this.dragTransform.xScale + "px", n.top = (e.clientY + r.offsetTop - t.top) * this.dragTransform.yScale + "px";
  }
  /** @internal */
  _setupHelperContainmentStyle() {
    return this.helperContainment = this.helper.parentElement, this.helper.style.position !== "fixed" && (this.parentOriginStylePosition = this.helperContainment.style.position, getComputedStyle(this.helperContainment).position.match(/static/) && (this.helperContainment.style.position = "relative")), this;
  }
  /** @internal */
  _getDragOffset(e, t, n) {
    let r = 0, s = 0;
    n && (r = this.dragTransform.xOffset, s = this.dragTransform.yOffset);
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
xt.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Ca extends Mi {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), ge && (this.el.addEventListener("pointerenter", mn), this.el.addEventListener("pointerleave", vn)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), ge && (this.el.removeEventListener("pointerenter", mn), this.el.removeEventListener("pointerleave", vn)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!L.dragElement || !this._canDrop(L.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), L.dropElement && L.dropElement !== this && L.dropElement._mouseLeave(e, !0), L.dropElement = this;
    const t = g.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(L.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!L.dragElement || L.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const n = g.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(n, this._ui(L.dragElement)), this.triggerEvent("dropout", n), L.dropElement === this && (delete L.dropElement, !t)) {
      let r, s = this.el.parentElement;
      for (; !r && s; )
        r = s.ddElement?.ddDroppable, s = s.parentElement;
      r && r._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = g.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(L.dragElement)), this.triggerEvent("drop", t);
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
class Ii {
  static init(e) {
    return e.ddElement || (e.ddElement = new Ii(e)), e.ddElement;
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new xt(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new bt(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Ca(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class _a {
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
  resizable(e, t, n, r) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddResizable && s.ddResizable[t]();
      else if (t === "destroy")
        s.ddResizable && s.cleanResizable();
      else if (t === "option")
        s.setupResizable({ [n]: r });
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
  draggable(e, t, n, r) {
    return this._getDDElements(e, t).forEach((s) => {
      if (t === "disable" || t === "enable")
        s.ddDraggable && s.ddDraggable[t]();
      else if (t === "destroy")
        s.ddDraggable && s.cleanDraggable();
      else if (t === "option")
        s.setupDraggable({ [n]: r });
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
  droppable(e, t, n, r) {
    return typeof t.accept == "function" && !t._accept && (t._accept = t.accept, t.accept = (s) => t._accept(s)), this._getDDElements(e, t).forEach((s) => {
      t === "disable" || t === "enable" ? s.ddDroppable && s.ddDroppable[t]() : t === "destroy" ? s.ddDroppable && s.cleanDroppable() : t === "option" ? s.setupDroppable({ [n]: r }) : s.setupDroppable(t);
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
    return this._getDDElements(e).forEach((r) => r.on(t, (s) => {
      n(s, L.dragElement ? L.dragElement.el : s.target, L.dragElement ? L.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((n) => n.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const n = e.gridstack || t !== "destroy" && t !== "disable", r = g.getElements(e);
    return r.length ? r.map((o) => o.ddElement || (n ? Ii.init(o) : null)).filter((o) => o) : [];
  }
}
const J = new _a();
class k {
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
    const n = k.getGridElement(t);
    return n ? (n.gridstack || (n.gridstack = new k(n, g.cloneDeep(e))), n.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (k.getGridElements(t).forEach((r) => {
      r.gridstack || (r.gridstack = new k(r, g.cloneDeep(e))), n.push(r.gridstack);
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
    return (!e.classList.contains("grid-stack") || k.addRemoveCB) && (k.addRemoveCB ? n = k.addRemoveCB(e, t, !0, !0) : n = g.createDiv(["grid-stack", t.class], e)), k.init(t, n);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    k.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = g.createDiv([this.opts.placeholderClass, oe.itemClass, this.opts.itemClass]);
      const e = g.createDiv(["placeholder-content"], this._placeholder);
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
    const n = g.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const r = t.columnOpts;
    if (r) {
      const d = r.breakpoints;
      !r.columnWidth && !d?.length ? delete t.columnOpts : (r.columnMax = r.columnMax || 12, d?.length > 1 && d.sort((c, u) => (u.w || 0) - (c.w || 0)));
    }
    const s = {
      ...g.cloneDeep(oe),
      column: g.toNumber(e.getAttribute("gs-column")) || oe.column,
      minRow: n || g.toNumber(e.getAttribute("gs-min-row")) || oe.minRow,
      maxRow: n || g.toNumber(e.getAttribute("gs-max-row")) || oe.maxRow,
      staticGrid: g.toBool(e.getAttribute("gs-static")) || oe.staticGrid,
      sizeToContent: g.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || oe.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || oe.removableOptions.accept,
        decline: oe.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = g.toBool(e.getAttribute("gs-animate"))), t = g.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const a = this.el.closest("." + oe.itemClass)?.gridstackNode;
    if (a && (a.subGrid = this, this.parentGridNode = a, this.el.classList.add("grid-stack-nested"), a.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== oe.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const d = t.cellHeight;
      delete t.cellHeight, this.cellHeight(d);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = ge), this._setStaticClass();
    const l = t.engineClass || k.engineClass || Ae;
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
    this.setAnimation(), t.subGridDynamic && !L.pauseDrag && (L.pauseDrag = !0), t.draggable?.pause !== void 0 && (L.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (n.grid = this, n.el ? t = n.el : k.addRemoveCB ? t = k.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(n), !t)
      return;
    if (n = t.gridstackNode, n && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === n._id))
      return t;
    const r = this._readAttr(t);
    return g.defaults(e, r), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = g.createDiv(["grid-stack-item", this.opts.itemClass]), n = g.createDiv(["grid-stack-item-content"], t);
    return g.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([r]) => {
      r.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, k.renderCB(n, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : k.renderCB(n, e), t;
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
  makeSubGrid(e, t, n, r = !0) {
    let s = e.gridstackNode;
    if (s || (s = this.makeWidget(e).gridstackNode), s.subGrid?.el)
      return s.subGrid;
    let o, a = this;
    for (; a && !o; )
      o = a.opts?.subGridOpts, a = a.parentGridNode?.grid;
    t = g.cloneDeep({
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
    if (r && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, g.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), k.addRemoveCB ? c = k.addRemoveCB(this.el, u, !0, !1) : (c = g.createDiv(["grid-stack-item"]), c.appendChild(d), d = g.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), n) {
      const p = l ? t.column : s.w, _ = s.h + n.h, v = s.el.style;
      v.transition = "none", this.update(s.el, { w: p, h: _ }), setTimeout(() => v.transition = null);
    }
    const f = s.subGrid = k.addGrid(d, t);
    return n?._moving && (f._isTemp = !0), l && (f._autoColumn = !0), r && f.makeWidget(c, u), n && (n._moving ? window.setTimeout(() => g.simulateMouseEvent(n._event, "mouseenter", f.el), 0) : f.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), f;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((n) => {
      n.x += this.parentGridNode.x, n.y += this.parentGridNode.y, t.makeWidget(n.el, n);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => g.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
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
  save(e = !0, t = !1, n = k.saveCB, r) {
    const s = this.engine.save(e, n, r);
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
      const o = g.cloneDeep(this.opts);
      o.marginBottom === o.marginTop && o.marginRight === o.marginLeft && o.marginTop === o.marginRight && (o.margin = o.marginTop, delete o.marginTop, delete o.marginRight, delete o.marginBottom, delete o.marginLeft), o.rtl === (this.el.style.direction === "rtl") && (o.rtl = "auto"), this._isAutoCellHeight && (o.cellHeight = "auto"), this._autoColumn && (o.column = "auto");
      const a = o._alwaysShowResizeHandle;
      return delete o._alwaysShowResizeHandle, a !== void 0 ? o.alwaysShowResizeHandle = a : delete o.alwaysShowResizeHandle, g.removeInternalAndSame(o, oe), o.children = s, o;
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
  load(e, t = k.addRemoveCB || !0) {
    e = g.cloneDeep(e);
    const n = this.getColumn();
    e.forEach((c) => {
      c.w = c.w || c.minW || 1, c.h = c.h || c.minH || 1;
    }), e = g.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let r = 0;
    e.forEach((c) => {
      r = Math.max(r, (c.x || 0) + c.w);
    }), r > this.engine.defaultColumn && (this.engine.defaultColumn = r), r > n && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(r, n, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, r, !0));
    const s = k.addRemoveCB;
    typeof t == "function" && (k.addRemoveCB = t);
    const o = [];
    this.batchUpdate();
    const a = !this.engine.nodes.length, l = a && this.opts.animate;
    l && this.setAnimation(!1), !a && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      g.find(e, u.id) || (k.addRemoveCB && k.addRemoveCB(this.el, u, !1, !1), o.push(u), this.removeWidget(u.el, !0, !1));
    }), this.engine._loading = !0;
    const d = [];
    return this.engine.nodes = this.engine.nodes.filter((c) => g.find(e, c.id) ? (d.push(c), !1) : !0), e.forEach((c) => {
      const u = g.find(d, c.id);
      if (u) {
        if (g.shouldSizeToContent(u) && (c.h = u.h), this.engine.nodeBoundFix(c), (c.autoPosition || c.x === void 0 || c.y === void 0) && (c.w = c.w || u.w, c.h = c.h || u.h, this.engine.findEmptyPosition(c)), this.engine.nodes.push(u), g.samePos(u, c) && this.engine.nodes.length > 1 && (this.moveNode(u, { ...c, forceCollide: !0 }), g.copyPos(c, u)), this.update(u.el, c), c.subGridOpts?.children) {
          const f = u.el.querySelector(".grid-stack");
          f && f.gridstack && f.gridstack.load(c.subGridOpts.children);
        }
      } else t && this.addWidget(c);
    }), delete this.engine._loading, this.engine.removedNodes = o, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, s ? k.addRemoveCB = s : delete k.addRemoveCB, l && this.setAnimation(!0, !0), this;
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
      const r = g.toNumber(t.getAttribute("gs-h")) || 1;
      return Math.round(t.offsetHeight / r);
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
    const t = g.parseHeight(e);
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
    const r = this._widthOrContainer(!0);
    if (e.columnWidth)
      n = Math.min(Math.round(r / e.columnWidth) || 1, e.columnMax);
    else {
      n = e.columnMax;
      let s = 0;
      for (; s < e.breakpoints.length && r <= e.breakpoints[s].w; )
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
    let r;
    t ? r = { top: n.top + document.documentElement.scrollTop, left: n.left } : r = { top: this.el.offsetTop, left: this.el.offsetLeft };
    const s = e.left - r.left, o = e.top - r.top, a = n.width / this.getColumn(), l = n.height / parseInt(this.el.getAttribute("gs-current-row"));
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
  isAreaEmpty(e, t, n, r) {
    return this.engine.isAreaEmpty(e, t, n, r);
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
    const n = k.getElement(e);
    if (!n || n.gridstackNode)
      return n;
    n.parentElement || this.el.appendChild(n), this._prepareElement(n, !0, t);
    const r = n.gridstackNode;
    this._updateContainerHeight(), r.subGridOpts && this.makeSubGrid(n, r.subGridOpts, void 0, !1);
    let s;
    return this.opts.column === 1 && !this._ignoreLayoutsNodeChange && (s = this._ignoreLayoutsNodeChange = !0), this._triggerAddEvent(), this._triggerChangeEvent(), s && delete this._ignoreLayoutsNodeChange, n;
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
    return e ? (k.getElements(e).forEach((r) => {
      if (r.parentElement && r.parentElement !== this.el)
        return;
      let s = r.gridstackNode;
      s || (s = this.engine.nodes.find((o) => r === o.el)), s && (t && k.addRemoveCB && k.addRemoveCB(this.el, s, !1, !1), delete r.gridstackNode, this._removeDD(r), this.engine.removeNode(s, t, n), t && r.parentElement && r.remove());
    }), n && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((n) => {
      e && k.addRemoveCB && k.addRemoveCB(this.el, n, !1, !1), delete n.el.gridstackNode, this.opts.staticGrid || this._removeDD(n.el);
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
    return !!this.opts.staticGrid === e ? this : (e ? this.opts.staticGrid = !0 : delete this.opts.staticGrid, this._setupRemoveDrop(), this._setupAcceptWidget(), this.engine.nodes.forEach((r) => {
      this.prepareDragDrop(r.el), r.subGrid && n && r.subGrid.setStatic(e, t, n);
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
    return k.getElements(e).forEach((n) => {
      const r = n?.gridstackNode;
      if (!r)
        return;
      const s = { ...g.copyPos({}, r), ...g.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const o = ["x", "y", "w", "h"];
      let a;
      if (o.some((c) => s[c] !== void 0 && s[c] !== r[c]) && (a = {}, o.forEach((c) => {
        a[c] = s[c] !== void 0 ? s[c] : r[c], delete s[c];
      })), !a && (s.minW || s.minH || s.maxW || s.maxH) && (a = {}), s.content !== void 0) {
        const c = n.querySelector(".grid-stack-item-content");
        c && c.textContent !== s.content && (r.content = s.content, k.renderCB(c, s), r.subGrid?.el && (c.appendChild(r.subGrid.el), r.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, d = !1;
      for (const c in s)
        c[0] !== "_" && r[c] !== s[c] && (r[c] = s[c], l = !0, d = d || !this.opts.staticGrid && (c === "noResize" || c === "noMove" || c === "locked"));
      if (g.sanitizeMinMax(r), a) {
        const c = a.w !== void 0 && a.w !== r.w;
        this.moveNode(r, a), c && r.subGrid ? r.subGrid.onResize(this.hasAnimationCSS() ? r.w : void 0) : this.resizeToContentCheck(c, r), delete r._orig;
      }
      (a || l) && this._writeAttr(n, r), d && this.prepareDragDrop(r.el), k.updateCB && k.updateCB(r);
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
    const r = n.getCellHeight(!0);
    if (!r)
      return;
    let s = t.h ? t.h * r : e.clientHeight, o;
    if (t.resizeToContentParent && (o = e.querySelector(t.resizeToContentParent)), o || (o = e.querySelector(k.resizeToContentParent)), !o)
      return;
    const a = e.clientHeight - o.clientHeight, l = t.h ? t.h * r - a : o.clientHeight;
    let d;
    if (t.subGrid) {
      d = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const f = t.subGrid.el.getBoundingClientRect(), p = e.getBoundingClientRect();
      d += f.top - p.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const f = o.firstElementChild;
        if (!f) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${k.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        d = f.getBoundingClientRect().height || l;
      }
    }
    if (l === d)
      return;
    s += d - l;
    let c = Math.ceil(s / r);
    const u = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    u && c > u && (c = u, e.classList.add("size-to-content-max")), t.minH && c < t.minH ? c = t.minH : t.maxH && c > t.maxH && (c = t.maxH), c !== t.h && (n._ignoreLayoutsNodeChange = !0, n.moveNode(t, { h: c }), delete n._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    k.resizeToContentCB ? k.resizeToContentCB(e) : this.resizeToContent(e);
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
    return k.getElements(e).forEach((n) => {
      const r = n.gridstackNode;
      if (!g.canBeRotated(r))
        return;
      const s = { w: r.h, h: r.w, minH: r.minW, minW: r.minH, maxH: r.maxW, maxW: r.maxH };
      if (t) {
        const a = t.left > 0 ? Math.floor(t.left / this.cellWidth()) : 0, l = t.top > 0 ? Math.floor(t.top / this.opts.cellHeight) : 0;
        s.x = r.x + a - (r.h - (l + 1)), s.y = r.y + l - a;
      }
      Object.keys(s).forEach((a) => {
        s[a] === void 0 && delete s[a];
      });
      const o = r._orig;
      this.update(n, s), r._orig = o;
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
      const n = g.parseHeight(e);
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
      let n = 0, r = { x: t[n++], y: t[n++], w: t[n++], h: t[n++], autoPosition: t[n++] };
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
    const n = t ? new CustomEvent(e, { bubbles: !1, detail: t }) : new Event(e);
    let r = this;
    for (; r.parentGridNode; )
      r = r.parentGridNode.grid;
    return r.el.dispatchEvent(n), this;
  }
  /** @internal */
  _updateContainerHeight() {
    if (!this.engine || this.engine.batchMode)
      return this;
    const e = this.parentGridNode;
    let t = this.getRow() + this._extraDragRow;
    const n = this.opts.cellHeight, r = this.opts.cellHeightUnit;
    if (!n)
      return this;
    if (!e && !this.opts.minRow) {
      const s = g.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === r) {
        const o = Math.floor(s.h / n);
        t < o && (t = o);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * n + r), e && g.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, n) {
    n = n || this._readAttr(e), e.gridstackNode = n, n.el = e, n.grid = this, n = this.engine.addNode(n, t), this._writeAttr(e, n), e.classList.add(oe.itemClass, this.opts.itemClass);
    const r = g.shouldSizeToContent(n);
    return r ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), r && this.resizeToContentCheck(!1, n), g.lazyLoad(n) || this.prepareDragDrop(n.el), this;
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
    for (const r in n)
      t[r] ? e.setAttribute(n[r], String(t[r])) : e.removeAttribute(n[r]);
    return this;
  }
  /** @internal call to read any default attributes from element */
  _readAttr(e, t = !0) {
    const n = {};
    n.x = g.toNumber(e.getAttribute("gs-x")), n.y = g.toNumber(e.getAttribute("gs-y")), n.w = g.toNumber(e.getAttribute("gs-w")), n.h = g.toNumber(e.getAttribute("gs-h")), n.autoPosition = g.toBool(e.getAttribute("gs-auto-position")), n.noResize = g.toBool(e.getAttribute("gs-no-resize")), n.noMove = g.toBool(e.getAttribute("gs-no-move")), n.locked = g.toBool(e.getAttribute("gs-locked"));
    const r = e.getAttribute("gs-size-to-content");
    r && (r === "true" || r === "false" ? n.sizeToContent = g.toBool(r) : n.sizeToContent = parseInt(r, 10)), n.id = e.getAttribute("gs-id"), n.maxW = g.toNumber(e.getAttribute("gs-max-w")), n.minW = g.toNumber(e.getAttribute("gs-min-w")), n.maxH = g.toNumber(e.getAttribute("gs-max-h")), n.minH = g.toNumber(e.getAttribute("gs-min-h")), t && (n.w === 1 && e.removeAttribute("gs-w"), n.h === 1 && e.removeAttribute("gs-h"), n.maxW && e.removeAttribute("gs-max-w"), n.minW && e.removeAttribute("gs-min-w"), n.maxH && e.removeAttribute("gs-max-h"), n.minH && e.removeAttribute("gs-min-h"));
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
        g.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((n) => g.shouldSizeToContent(n))) {
        const n = [...this.engine.nodes];
        this.batchUpdate(), n.forEach((r) => {
          g.shouldSizeToContent(r) && this.resizeToContentCBCheck(r.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((n) => n.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = g.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return g.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return g.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return k.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return g.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, n = [];
    typeof this.opts.margin == "string" && (n = this.opts.margin.split(" ")), n.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = n[0], this.opts.marginLeft = this.opts.marginRight = n[1]) : n.length === 4 ? (this.opts.marginTop = n[0], this.opts.marginRight = n[1], this.opts.marginBottom = n[2], this.opts.marginLeft = n[3]) : (e = g.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((o) => {
      this.opts[o] === void 0 ? this.opts[o] = t : (e = g.parseHeight(this.opts[o]), this.opts[o] = e.h, delete this.opts.margin);
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
    return J;
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
  static setupDragIn(e, t, n, r = document) {
    t?.pause !== void 0 && (L.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? g.getElements(e, r) : e).forEach((o, a) => {
      J.isDraggable(o) || J.dragIn(o, t), n?.[a] && (o.gridstackNode = n[a]);
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
    return this.opts.staticGrid ? this : (k.getElements(e).forEach((n) => {
      const r = n.gridstackNode;
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
    return this.opts.staticGrid ? this : (k.getElements(e).forEach((n) => {
      const r = n.gridstackNode;
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
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && k._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return J.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return J.droppable(this.el, "destroy"), this;
    let e, t;
    const n = (r, s, o) => {
      o = o || s;
      const a = o.gridstackNode;
      if (!a)
        return;
      if (!a.grid?.el) {
        o.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const f = o.getBoundingClientRect();
        o.style.left = f.x + (this.dragTransform.xScale - 1) * (r.clientX - f.x) / this.dragTransform.xScale + "px", o.style.top = f.y + (this.dragTransform.yScale - 1) * (r.clientY - f.y) / this.dragTransform.yScale + "px", o.style.transformOrigin = "0px 0px";
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
            J.off(s, "drag");
            return;
          }
          a._willFitPos && (g.copyPos(a, a._willFitPos), delete a._willFitPos);
        }
        this._onStartMoving(o, r, u, a, t, e);
      } else
        this._dragOrResize(o, r, u, a, t, e);
    };
    return J.droppable(this.el, {
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
      const l = a.w || Math.round(o.offsetWidth / t) || 1, d = a.h || Math.round(o.offsetHeight / e) || 1;
      return a.grid && a.grid !== this ? (s._gridstackNodeOrig || (s._gridstackNodeOrig = a), s.gridstackNode = a = { ...a, w: l, h: d, grid: this }, delete a.x, delete a.y, this.engine.cleanupNode(a).nodeBoundFix(a), a._initDD = a._isExternal = // DOM needs to be re-parented on a drop
      a._temporaryRemoved = !0) : (a.w = l, a.h = d, a._temporaryRemoved = !0), k._itemRemoving(a.el, !1), J.on(s, "drag", n), n(r, s, o), !1;
    }).on(this.el, "dropout", (r, s, o) => {
      const a = o?.gridstackNode || s.gridstackNode;
      return a && (!a.grid || a.grid === this) && (this._leave(s, o), this._isTemp && this.removeAsSubGrid(a)), !1;
    }).on(this.el, "drop", (r, s, o) => {
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
      if (!a || (l && (this.engine.cleanupNode(a), a.grid = this), delete a.grid?._isTemp, J.off(s, "drag"), o !== s ? (o.remove(), s = o) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = a.subGrid?.el?.gridstack;
      return g.copyPos(a, this._readAttr(this.placeholder)), g.removePositioningStyles(s), d && (a.content || a.subGridOpts || k.addRemoveCB) ? (delete a.el, s = this.addWidget(a)) : (this._prepareElement(s, !0, a), this.el.appendChild(s), this.resizeToContentCheck(!1, a), u && (u.parentGridNode = a), this._updateContainerHeight()), this.engine.addedNodes.push(a), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...r, type: "dropped" }, c && c.grid ? c : void 0, a), !1;
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
    return e ? (!this.opts.staticGrid && !J.isDroppable(e) && J.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, n) => k._itemRemoving(n, !0)).on(e, "dropout", (t, n) => k._itemRemoving(n, !1)), this) : this;
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
    const r = n.noMove || this.opts.disableDrag, s = n.noResize || this.opts.disableResize, o = this.opts.staticGrid || r && s;
    if ((t || o) && (n._initDD && (this._removeDD(e), delete n._initDD), o && e.classList.add("ui-draggable-disabled", "ui-resizable-disabled"), !t))
      return this;
    if (!n._initDD) {
      let a, l;
      const d = (f, p) => {
        this.triggerEvent(f, f.target), a = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, f, p, n, a, l);
      }, c = (f, p) => {
        this._dragOrResize(e, f, p, n, a, l);
      }, u = (f) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete n._moving, delete n._resizing, delete n._event, delete n._lastTried;
        const p = n.w !== n._orig.w, _ = f.target;
        if (!(!_.gridstackNode || _.gridstackNode.grid !== this)) {
          if (n.el = _, n._isAboutToRemove) {
            const v = e.gridstackNode.grid;
            v._gsEventHandler[f.type] && v._gsEventHandler[f.type](f, _), v.engine.nodes.push(n), v.removeWidget(e, !0, !0);
          } else
            g.removePositioningStyles(_), n._temporaryRemoved ? (this._writePosAttr(_, n), this.engine.addNode(n)) : this._writePosAttr(_, n), this.triggerEvent(f, _);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), f.type === "resizestop" && (Number.isInteger(n.sizeToContent) && (n.sizeToContent = n.h), this.resizeToContentCheck(p, n));
        }
      };
      J.draggable(e, {
        start: d,
        stop: u,
        drag: c
      }).resizable(e, {
        start: d,
        stop: u,
        resize: c
      }), n._initDD = !0;
    }
    return J.draggable(e, r ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, n, r, s, o) {
    if (this.engine.cleanNodes().beginUpdate(r), this._writePosAttr(this.placeholder, r), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = r, r.grid?.el)
      this.dragTransform = g.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const a = this.placeholder.closest(".grid-stack");
      this.dragTransform = g.getValuesFromTransformedElement(a);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (r.el = this.placeholder, r._lastUiPosition = n.position, r._prevYPix = n.position.top, r._moving = t.type === "dragstart", r._resizing = t.type === "resizestart", delete r._lastTried, t.type === "dropover" && r._temporaryRemoved && (this.engine.addNode(r), r._moving = !0), this.engine.cacheRects(s, o, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const a = this.getColumn() - r.x, l = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - r.y;
      J.resizable(e, "option", "minWidth", s * Math.min(r.minW || 1, a)).resizable(e, "option", "minHeight", o * Math.min(r.minH || 1, l)).resizable(e, "option", "maxWidth", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, a)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, r.x + r.w)).resizable(e, "option", "maxHeight", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, r.y + r.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, n, r, s, o) {
    const a = { ...r._orig };
    let l, d = this.opts.marginLeft, c = this.opts.marginRight, u = this.opts.marginTop, f = this.opts.marginBottom;
    const p = Math.round(o * 0.1), _ = Math.round(s * 0.1);
    if (d = Math.min(d, _), c = Math.min(c, _), u = Math.min(u, p), f = Math.min(f, p), t.type === "drag") {
      if (r._temporaryRemoved)
        return;
      const x = n.position.top - r._prevYPix;
      r._prevYPix = n.position.top, this.opts.draggable.scroll !== !1 && g.updateScrollPosition(e, n.position, x);
      const D = n.position.left + (n.position.left > r._lastUiPosition.left ? -c : d), N = n.position.top + (n.position.top > r._lastUiPosition.top ? -f : u);
      a.x = Math.round(D / s), a.y = Math.round(N / o);
      const w = this._extraDragRow;
      if (this.engine.collide(r, a)) {
        const S = this.getRow();
        let y = Math.max(0, a.y + r.h - S);
        this.opts.maxRow && S + y > this.opts.maxRow && (y = Math.max(0, this.opts.maxRow - S)), this._extraDragRow = y;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== w && this._updateContainerHeight(), r.x === a.x && r.y === a.y)
        return;
    } else if (t.type === "resize") {
      if (a.x < 0 || (g.updateScrollResize(t, e, o), a.w = Math.round((n.size.width - d) / s), a.h = Math.round((n.size.height - u) / o), r.w === a.w && r.h === a.h) || r._lastTried && r._lastTried.w === a.w && r._lastTried.h === a.h)
        return;
      const x = n.position.left + d, D = n.position.top + u;
      a.x = Math.round(x / s), a.y = Math.round(D / o), l = !0;
    }
    r._event = t, r._lastTried = a;
    const v = {
      x: n.position.left + d,
      y: n.position.top + u,
      w: (n.size ? n.size.width : r.w * s) - d - c,
      h: (n.size ? n.size.height : r.h * o) - u - f
    };
    if (this.engine.moveNodeCheck(r, { ...a, cellWidth: s, cellHeight: o, rect: v, resizing: l })) {
      r._lastUiPosition = n.position, this.engine.cacheRects(s, o, u, c, f, d), delete r._skipDown, l && r.subGrid && r.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const x = t.target;
      r._sidebarOrig || this._writePosAttr(x, r), this.triggerEvent(t, x);
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
    if (!n || (t.style.transform = t.style.transformOrigin = null, J.off(e, "drag"), n._temporaryRemoved))
      return;
    n._temporaryRemoved = !0, this.engine.removeNode(n), n.el = n._isExternal && t ? t : e;
    const r = n._sidebarOrig;
    n._isExternal && this.engine.cleanupNode(n), n._sidebarOrig = r, this.opts.removable === !0 && k._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : n._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return xa(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
k.renderCB = (i, e) => {
  i && e?.content && (i.textContent = e.content);
};
k.resizeToContentParent = ".grid-stack-item-content";
k.Utils = g;
k.Engine = Ae;
k.GDRev = "12.3.2";
const Mt = /* @__PURE__ */ new WeakMap();
function Ea({ children: i }) {
  const { _gridStack: { value: e, set: t }, options: n } = dr(), r = M(/* @__PURE__ */ new Map()), s = M(null), o = M(n), a = U((c, u) => {
    if (u.id && u.grid) {
      let f = Mt.get(u.grid);
      f || (f = /* @__PURE__ */ new Map(), Mt.set(u.grid, f)), f.set(u.id, c), r.current.set(u.id, c);
    }
  }, []), l = U(() => {
    if (s.current) {
      k.renderCB = a;
      const c = k.init(o.current, s.current);
      return c && o.current.handle && c.opts && (c.opts.handle = o.current.handle), c;
    }
    return null;
  }, [a]), d = (c, u) => {
    const { children: f, ...p } = c, { children: _, ...v } = u;
    return Jn(p, v);
  };
  return Ei(() => {
    if (!d(n, o.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), r.current.clear(), Mt.delete(e), o.current = n, t(null);
      } catch (c) {
        console.error("Error destroying gridstack", c);
      }
    else e && (o.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, t]), Ei(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, l, t]), h(ur.Provider, {
    value: P(() => ({
      getWidgetContainer: (c) => {
        if (e) {
          const u = Mt.get(e);
          if (u?.has(c))
            return u.get(c) || null;
        }
        return r.current.get(c) || null;
      }
    }), [e]),
    children: h("div", {
      ref: s,
      children: e ? i : null
    })
  });
}
const Hi = ({ options: i, widgets: e, onChange: t, className: n }) => {
  const r = P(() => JSON.stringify(e.map((l) => ({
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
    ...i,
    class: n
  }), [i, r, n]), o = (l, d, c) => {
    let u = c[0], f = 1 / 0;
    for (const p of c) {
      const _ = p.w - l, v = p.h - d, x = _ * _ + v * v;
      x < f && (f = x, u = p);
    }
    return u;
  };
  return h(ma, {
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
    children: h(Ea, {
      children: h(ba, {})
    })
  });
};
Hi.displayName = "F0GridStack";
const Da = (i, e, t) => h("div", {
  children: i
}), ni = ({ widgets: i = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: n = Da, main: r = !1, deps: s }) => {
  const o = U((y, b, m) => h(Oi.div, {
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
    children: n(y, b, m)
  }), [n]), a = P(() => ({
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
      const m = {};
      return y.deps.forEach((C) => {
        typeof C == "string" && b[C] !== void 0 && (m[C] = b[C]);
      }), y.content(m);
    }
    return typeof y.content == "function" ? null : y.content;
  }, d = (y, b, m) => y.map((C) => {
    const z = l(C, m), T = {
      id: C.id,
      h: C.h ?? 1,
      w: C.w ?? 1,
      allowedSizes: C.availableSizes,
      noMove: !b,
      noResize: !b,
      locked: C.locked,
      meta: C.meta,
      _originalContent: z,
      content: o(z, C.meta, b)
    };
    return C.x !== void 0 && (T.x = C.x), C.y !== void 0 && (T.y = C.y), T;
  }), [c, u] = F(d(i, e)), f = M(e), p = M(i), _ = M(!1), v = M(/* @__PURE__ */ new Map()), x = M(i);
  x.current = i;
  const D = M(s), N = P(() => {
    const y = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || i.forEach((b) => {
      if (b.deps && b.deps.length > 0) {
        const m = b.deps.map((C) => typeof C == "string" && s[C] !== void 0 ? s[C] : C).filter((C) => C !== null);
        y.set(b.id, m);
      }
    }), y;
  }, [i, s]), w = U((y) => {
    u(y), _.current || t(y.map((b) => {
      const m = x.current.find((C) => C.id === b.id);
      return {
        id: b.id,
        w: b.w ?? 1,
        h: b.h ?? 1,
        allowedSizes: b.allowedSizes,
        meta: b.meta,
        content: typeof m?.content == "function" ? m.content : b._originalContent,
        x: b.x ?? 0,
        y: b.y ?? 0,
        locked: b.locked,
        deps: m?.deps
      };
    })), _.current = !1;
  }, [t]), S = (y, b) => !y && !b ? !1 : !y || !b || y.length !== b.length ? !0 : y.some((m, C) => m !== b[C]);
  return H(() => {
    const y = f.current !== e, b = p.current !== i, m = D.current !== s && (D.current === void 0 || s === void 0 || Object.keys(D.current).length !== Object.keys(s).length || Object.keys(s).some((E) => D.current?.[E] !== s[E])), C = /* @__PURE__ */ new Map();
    i.forEach((E) => {
      if (E.deps && E.deps.length > 0) {
        const R = v.current.get(E.id), A = N.get(E.id);
        C.set(E.id, S(R, A)), A ? v.current.set(E.id, A) : v.current.delete(E.id);
      }
    });
    const z = new Set(i.map((E) => E.id));
    v.current.forEach((E, R) => {
      z.has(R) || v.current.delete(R);
    });
    const T = Array.from(C.values()).some((E) => E) || m;
    y && !b && !T ? (_.current = !0, u((E) => E.map((R) => {
      const A = i.find((ee) => ee.id === R.id);
      if (!A)
        return R;
      const B = l(A, s);
      return {
        ...R,
        noMove: !e,
        noResize: !e,
        locked: A.locked,
        meta: A.meta,
        _originalContent: B,
        content: o(B, A.meta, e)
      };
    }))) : (b || T) && u((E) => {
      const R = new Map(E.map((A) => [A.id, A]));
      return i.map((A) => {
        const B = R.get(A.id), ee = C.get(A.id) ?? !1;
        let te;
        ee || !B ? te = l(A, s) : te = B._originalContent ?? l(A, s);
        const V = {
          id: A.id,
          h: B?.h ?? A.h ?? 1,
          w: B?.w ?? A.w ?? 1,
          allowedSizes: A.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: A.locked,
          meta: A.meta,
          _originalContent: te,
          content: o(te, A.meta, e)
        }, fe = B?.x ?? A.x, j = B?.y ?? A.y;
        return fe !== void 0 && (V.x = fe), j !== void 0 && (V.y = j), V;
      });
    }), f.current = e, p.current = i, D.current = s;
  }, [i, e, o, N, s]), h(Hi, {
    className: G(r && "h-full flex-1 overflow-auto"),
    options: a,
    onChange: w,
    widgets: c
  });
};
ni.displayName = "GroupGrid";
ni.__isPageLayoutGroup = !0;
const Sa = (i, e) => {
  const t = e;
  return t.displayName = i, t.__isPageLayoutBlock = !0, t;
}, Ra = (i, e) => {
  const t = e;
  return t.displayName = i, t.__isPageLayoutGroup = !0, t;
}, Na = (i, e) => h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: e,
  ...i,
  children: h("path", {
    fill: "currentColor",
    d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
    vectorEffect: "non-scaling-stroke"
  })
}), fr = ae(Na), Ta = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], pr = ae((i, e) => {
  const t = Ta.reduce((n, r) => {
    const { [r]: s, ...o } = n;
    return o;
  }, i);
  return h(zi, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: i.icon == fr
  });
});
pr.displayName = "AIButton";
const yi = je({
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
}), Aa = {
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
}, Fi = ae(({ content: i, variant: e, align: t, className: n, as: r, ellipsis: s, noEllipsisTooltip: o, markdown: a, ...l }, d) => {
  const c = r ?? Aa[e ?? "body"];
  if (s !== void 0)
    return h(gs, {
      ref: d,
      lines: typeof s == "number" ? s : 1,
      noTooltip: o,
      tag: c,
      className: G(yi({
        variant: e,
        align: t
      }), n),
      markdown: a,
      ...l,
      children: i
    });
  if (a) {
    const u = ms(i);
    return dn(c, {
      ...l,
      className: G(yi({
        variant: e,
        align: t
      }), n),
      ref: d,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return dn(c, {
    ...l,
    className: G(yi({
      variant: e,
      align: t
    }), n),
    ref: d
  }, i);
});
Fi.displayName = "Text";
const gr = ae((i, e) => h(Fi, {
  ref: e,
  markdown: i.markdown ?? !0,
  ...i
}));
gr.displayName = "F0Text";
const uu = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], mr = ({ title: i, draggable: e = !1, onDragStart: t, onDragEnd: n, isDragging: r = !1, AIButton: s, actions: o, children: a, selected: l = !1 }) => {
  const [d, c] = F(!1), [u, f] = F(!1), p = Li(), _ = (x) => {
    c(x);
  }, v = u || d;
  return H(() => {
    if (!r || !n) return;
    const x = () => {
      n();
    };
    return document.addEventListener("mouseup", x), () => {
      document.removeEventListener("mouseup", x);
    };
  }, [r, n]), O("div", {
    className: G("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && d ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", r && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => f(!0),
    onMouseLeave: () => f(!1),
    children: [O("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [O("div", {
        className: G("flex min-w-0 flex-1 items-center", !e && "pl-4", !o && !s && "pr-4"),
        children: [e && h("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: h(Fn, {
            icon: vs,
            size: "xs"
          })
        }), h("div", {
          className: G("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: h(gr, {
            variant: "label",
            content: i,
            ellipsis: !0
          })
        })]
      }), h(ys, {
        children: (s || o) && v && O(Oi.div, {
          className: G("flex shrink-0 items-center gap-0.5 pr-2", !o && "pr-4"),
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
            children: h(pr, {
              size: "sm",
              label: p.ai.ask,
              onClick: s,
              icon: fr
            })
          }), o && h(bs, {
            items: o,
            open: d,
            onOpenChange: _,
            align: "end",
            children: h(zi, {
              icon: xs,
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
}, ka = () => O("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [h("div", {
    className: "flex h-12 w-full items-center px-4",
    children: h(_e, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), O("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [h(_e, {
      className: "h-1/2 w-full rounded-sm"
    }), h(_e, {
      className: "h-1/3 w-full rounded-sm"
    }), h(_e, {
      className: "h-1/5 w-full rounded-sm"
    }), h(_e, {
      className: "h-1/3 w-full rounded-sm"
    }), h(_e, {
      className: "h-full w-full rounded-sm"
    }), h(_e, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
mr.displayName = "F0Widget";
const Oa = Hn(mr, ka), za = ({ children: i, title: e, draggable: t = !1, actions: n, aiButton: r }) => h(Oa, {
  title: e,
  draggable: t,
  actions: n,
  AIButton: r,
  children: i
}), vr = ({ widgets: i, editMode: e = !1, onChange: t = () => {
}, deps: n, ...r }) => h(ni, {
  widgets: i,
  editMode: e,
  onChange: t,
  deps: n,
  ...r,
  WidgetWrapper: (s, o, a) => h(za, {
    title: o?.title ?? "",
    draggable: a,
    actions: o?.actions,
    aiButton: o?.aiButton,
    children: s
  })
});
vr.displayName = "Dashboard";
const La = Ra("Dashboard", vr), hu = he("Dashboard", La), Pa = je({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Ma = (i) => (i || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), Ia = (i) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(i) ? i.every(e) ? [{
    items: i
  }] : i : [i];
}, ri = ae(({ children: i, variant: e = "default", className: t, draggable: n = !1, onDragStart: r, onDragEnd: s, onDrop: o, dragId: a, primaryAction: l, ...d }, c) => {
  const u = P(() => Ia(d.actions || []), [d.actions]), f = P(() => u.flatMap((_) => _.items), [u]), p = P(() => f.length > 0 || !!l, [f, l]);
  return O("div", {
    ref: c,
    className: G(Pa({
      variant: e
    }), "relative", t),
    draggable: n,
    onDragStart: r,
    onDragEnd: s,
    onDrop: o,
    "data-drag-id": a,
    ...d,
    children: [p && O("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, f.length > 0 && h(io, {
        items: Ma(u)
      })]
    }), h("div", {
      children: i
    })]
  });
});
ri.displayName = "Block";
ri.__isPageLayoutBlock = !0;
const Ha = ({ title: i = "", description: e, titleLevel: t = "h2", children: n, className: r, ...s }) => {
  if (!i) return null;
  const o = t;
  return O(ri, {
    ...s,
    className: G("space-y-4", r),
    children: [O("div", {
      className: "space-y-2",
      children: [h(o, {
        className: G("font-semibold text-f1-foreground", {
          "text-2xl": t === "h1",
          "text-xl": t === "h2",
          "text-lg": t === "h3",
          "text-base": t === "h4",
          "text-sm": t === "h5",
          "text-xs": t === "h6"
        }),
        children: i
      }), e && h("p", {
        className: "text-sm text-f1-foreground-secondary",
        children: e
      })]
    }), h("div", {
      className: "flex-1",
      children: n
    })]
  });
}, Fa = Sa("BlockContent", Ha), Ba = (i) => !Xn(i) || !i.type || typeof i.type == "string" || typeof i.type == "symbol" ? !1 : "__isPageLayoutBlock" in i.type, Wa = (i) => !Xn(i) || !i.type || typeof i.type == "string" || typeof i.type == "symbol" ? !1 : "__isPageLayoutGroup" in i.type, yr = (i, e, t) => {
  const n = Wt.toArray(e);
  for (const r of n)
    t.includes("block") && Ba(r) || t.includes("group") && Wa(r) || console.warn(
      `${i}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      r
    );
}, Bi = ae(({ children: i, onSort: e, ...t }, n) => {
  yr("GroupLinear", i, ["block"]);
  const [r, s] = F(Wt.toArray(i));
  return H(() => {
    s(Wt.toArray(i));
  }, [i]), H(() => {
    e?.(r);
  }, [r, e]), h("div", {
    ref: n,
    ...t,
    children: r.map((o, a) => h(Ys, {
      children: o
    }, a))
  });
});
Bi.displayName = "GroupLinear";
Bi.__isPageLayoutGroup = !0;
function Ga() {
  for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
    e[t] = arguments[t];
  return P(
    () => (n) => {
      e.forEach((r) => r(n));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const si = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function nt(i) {
  const e = Object.prototype.toString.call(i);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Wi(i) {
  return "nodeType" in i;
}
function Q(i) {
  var e, t;
  return i ? nt(i) ? i : Wi(i) && (e = (t = i.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Gi(i) {
  const {
    Document: e
  } = Q(i);
  return i instanceof e;
}
function Dt(i) {
  return nt(i) ? !1 : i instanceof Q(i).HTMLElement;
}
function br(i) {
  return i instanceof Q(i).SVGElement;
}
function rt(i) {
  return i ? nt(i) ? i.document : Wi(i) ? Gi(i) ? i : Dt(i) || br(i) ? i.ownerDocument : document : document : document;
}
const ve = si ? Ei : H;
function oi(i) {
  const e = M(i);
  return ve(() => {
    e.current = i;
  }), U(function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function $a() {
  const i = M(null), e = U((n, r) => {
    i.current = setInterval(n, r);
  }, []), t = U(() => {
    i.current !== null && (clearInterval(i.current), i.current = null);
  }, []);
  return [e, t];
}
function wt(i, e) {
  e === void 0 && (e = [i]);
  const t = M(i);
  return ve(() => {
    t.current !== i && (t.current = i);
  }, e), t;
}
function St(i, e) {
  const t = M();
  return P(
    () => {
      const n = i(t.current);
      return t.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function qt(i) {
  const e = oi(i), t = M(null), n = U(
    (r) => {
      r !== t.current && e?.(r, t.current), t.current = r;
    },
    //eslint-disable-next-line
    []
  );
  return [t, n];
}
function Kt(i) {
  const e = M();
  return H(() => {
    e.current = i;
  }, [i]), e.current;
}
let bi = {};
function Rt(i, e) {
  return P(() => {
    if (e)
      return e;
    const t = bi[i] == null ? 0 : bi[i] + 1;
    return bi[i] = t, i + "-" + t;
  }, [i, e]);
}
function xr(i) {
  return function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r];
    return n.reduce((s, o) => {
      const a = Object.entries(o);
      for (const [l, d] of a) {
        const c = s[l];
        c != null && (s[l] = c + i * d);
      }
      return s;
    }, {
      ...e
    });
  };
}
const et = /* @__PURE__ */ xr(1), Ct = /* @__PURE__ */ xr(-1);
function ja(i) {
  return "clientX" in i && "clientY" in i;
}
function ai(i) {
  if (!i)
    return !1;
  const {
    KeyboardEvent: e
  } = Q(i.target);
  return e && i instanceof e;
}
function Ua(i) {
  if (!i)
    return !1;
  const {
    TouchEvent: e
  } = Q(i.target);
  return e && i instanceof e;
}
function Xt(i) {
  if (Ua(i)) {
    if (i.touches && i.touches.length) {
      const {
        clientX: e,
        clientY: t
      } = i.touches[0];
      return {
        x: e,
        y: t
      };
    } else if (i.changedTouches && i.changedTouches.length) {
      const {
        clientX: e,
        clientY: t
      } = i.changedTouches[0];
      return {
        x: e,
        y: t
      };
    }
  }
  return ja(i) ? {
    x: i.clientX,
    y: i.clientY
  } : null;
}
const Ge = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(i) {
      if (!i)
        return;
      const {
        x: e,
        y: t
      } = i;
      return "translate3d(" + (e ? Math.round(e) : 0) + "px, " + (t ? Math.round(t) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(i) {
      if (!i)
        return;
      const {
        scaleX: e,
        scaleY: t
      } = i;
      return "scaleX(" + e + ") scaleY(" + t + ")";
    }
  },
  Transform: {
    toString(i) {
      if (i)
        return [Ge.Translate.toString(i), Ge.Scale.toString(i)].join(" ");
    }
  },
  Transition: {
    toString(i) {
      let {
        property: e,
        duration: t,
        easing: n
      } = i;
      return e + " " + t + "ms " + n;
    }
  }
}), yn = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Va(i) {
  return i.matches(yn) ? i : i.querySelector(yn);
}
const qa = {
  display: "none"
};
function Ka(i) {
  let {
    id: e,
    value: t
  } = i;
  return I.createElement("div", {
    id: e,
    style: qa
  }, t);
}
function Xa(i) {
  let {
    id: e,
    announcement: t,
    ariaLiveType: n = "assertive"
  } = i;
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
  return I.createElement("div", {
    id: e,
    style: r,
    role: "status",
    "aria-live": n,
    "aria-atomic": !0
  }, t);
}
function Ya() {
  const [i, e] = F("");
  return {
    announce: U((n) => {
      n != null && e(n);
    }, []),
    announcement: i
  };
}
const wr = /* @__PURE__ */ De(null);
function Za(i) {
  const e = me(wr);
  H(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(i);
  }, [i, e]);
}
function Ja() {
  const [i] = F(() => /* @__PURE__ */ new Set()), e = U((n) => (i.add(n), () => i.delete(n)), [i]);
  return [U((n) => {
    let {
      type: r,
      event: s
    } = n;
    i.forEach((o) => {
      var a;
      return (a = o[r]) == null ? void 0 : a.call(o, s);
    });
  }, [i]), e];
}
const Qa = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, el = {
  onDragStart(i) {
    let {
      active: e
    } = i;
    return "Picked up draggable item " + e.id + ".";
  },
  onDragOver(i) {
    let {
      active: e,
      over: t
    } = i;
    return t ? "Draggable item " + e.id + " was moved over droppable area " + t.id + "." : "Draggable item " + e.id + " is no longer over a droppable area.";
  },
  onDragEnd(i) {
    let {
      active: e,
      over: t
    } = i;
    return t ? "Draggable item " + e.id + " was dropped over droppable area " + t.id : "Draggable item " + e.id + " was dropped.";
  },
  onDragCancel(i) {
    let {
      active: e
    } = i;
    return "Dragging was cancelled. Draggable item " + e.id + " was dropped.";
  }
};
function tl(i) {
  let {
    announcements: e = el,
    container: t,
    hiddenTextDescribedById: n,
    screenReaderInstructions: r = Qa
  } = i;
  const {
    announce: s,
    announcement: o
  } = Ya(), a = Rt("DndLiveRegion"), [l, d] = F(!1);
  if (H(() => {
    d(!0);
  }, []), Za(P(() => ({
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
        over: p
      } = u;
      e.onDragMove && s(e.onDragMove({
        active: f,
        over: p
      }));
    },
    onDragOver(u) {
      let {
        active: f,
        over: p
      } = u;
      s(e.onDragOver({
        active: f,
        over: p
      }));
    },
    onDragEnd(u) {
      let {
        active: f,
        over: p
      } = u;
      s(e.onDragEnd({
        active: f,
        over: p
      }));
    },
    onDragCancel(u) {
      let {
        active: f,
        over: p
      } = u;
      s(e.onDragCancel({
        active: f,
        over: p
      }));
    }
  }), [s, e])), !l)
    return null;
  const c = I.createElement(I.Fragment, null, I.createElement(Ka, {
    id: n,
    value: r.draggable
  }), I.createElement(Xa, {
    id: a,
    announcement: o
  }));
  return t ? Yn(c, t) : c;
}
var q;
(function(i) {
  i.DragStart = "dragStart", i.DragMove = "dragMove", i.DragEnd = "dragEnd", i.DragCancel = "dragCancel", i.DragOver = "dragOver", i.RegisterDroppable = "registerDroppable", i.SetDroppableDisabled = "setDroppableDisabled", i.UnregisterDroppable = "unregisterDroppable";
})(q || (q = {}));
function Yt() {
}
function bn(i, e) {
  return P(
    () => ({
      sensor: i,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, e]
  );
}
function il() {
  for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
    e[t] = arguments[t];
  return P(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const ye = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function nl(i, e) {
  return Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2));
}
function rl(i, e) {
  const t = Xt(i);
  if (!t)
    return "0 0";
  const n = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function sl(i, e) {
  let {
    data: {
      value: t
    }
  } = i, {
    data: {
      value: n
    }
  } = e;
  return t - n;
}
function ol(i, e) {
  let {
    data: {
      value: t
    }
  } = i, {
    data: {
      value: n
    }
  } = e;
  return n - t;
}
function xn(i) {
  let {
    left: e,
    top: t,
    height: n,
    width: r
  } = i;
  return [{
    x: e,
    y: t
  }, {
    x: e + r,
    y: t
  }, {
    x: e,
    y: t + n
  }, {
    x: e + r,
    y: t + n
  }];
}
function Cr(i, e) {
  if (!i || i.length === 0)
    return null;
  const [t] = i;
  return t[e];
}
const al = (i) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = i;
  const r = xn(e), s = [];
  for (const o of n) {
    const {
      id: a
    } = o, l = t.get(a);
    if (l) {
      const d = xn(l), c = r.reduce((f, p, _) => f + nl(d[_], p), 0), u = Number((c / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: o,
          value: u
        }
      });
    }
  }
  return s.sort(sl);
};
function ll(i, e) {
  const t = Math.max(e.top, i.top), n = Math.max(e.left, i.left), r = Math.min(e.left + e.width, i.left + i.width), s = Math.min(e.top + e.height, i.top + i.height), o = r - n, a = s - t;
  if (n < r && t < s) {
    const l = e.width * e.height, d = i.width * i.height, c = o * a, u = c / (l + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const cl = (i) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: n
  } = i;
  const r = [];
  for (const s of n) {
    const {
      id: o
    } = s, a = t.get(o);
    if (a) {
      const l = ll(a, e);
      l > 0 && r.push({
        id: o,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return r.sort(ol);
};
function dl(i, e, t) {
  return {
    ...i,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function _r(i, e) {
  return i && e ? {
    x: i.left - e.left,
    y: i.top - e.top
  } : ye;
}
function ul(i) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return r.reduce((o, a) => ({
      ...o,
      top: o.top + i * a.y,
      bottom: o.bottom + i * a.y,
      left: o.left + i * a.x,
      right: o.right + i * a.x
    }), {
      ...t
    });
  };
}
const hl = /* @__PURE__ */ ul(1);
function Er(i) {
  if (i.startsWith("matrix3d(")) {
    const e = i.slice(9, -1).split(/, /);
    return {
      x: +e[12],
      y: +e[13],
      scaleX: +e[0],
      scaleY: +e[5]
    };
  } else if (i.startsWith("matrix(")) {
    const e = i.slice(7, -1).split(/, /);
    return {
      x: +e[4],
      y: +e[5],
      scaleX: +e[0],
      scaleY: +e[3]
    };
  }
  return null;
}
function fl(i, e, t) {
  const n = Er(e);
  if (!n)
    return i;
  const {
    scaleX: r,
    scaleY: s,
    x: o,
    y: a
  } = n, l = i.left - o - (1 - r) * parseFloat(t), d = i.top - a - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), c = r ? i.width / r : i.width, u = s ? i.height / s : i.height;
  return {
    width: c,
    height: u,
    top: d,
    right: l + c,
    bottom: d + u,
    left: l
  };
}
const pl = {
  ignoreTransform: !1
};
function st(i, e) {
  e === void 0 && (e = pl);
  let t = i.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: c
    } = Q(i).getComputedStyle(i);
    d && (t = fl(t, d, c));
  }
  const {
    top: n,
    left: r,
    width: s,
    height: o,
    bottom: a,
    right: l
  } = t;
  return {
    top: n,
    left: r,
    width: s,
    height: o,
    bottom: a,
    right: l
  };
}
function wn(i) {
  return st(i, {
    ignoreTransform: !0
  });
}
function gl(i) {
  const e = i.innerWidth, t = i.innerHeight;
  return {
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
  };
}
function ml(i, e) {
  return e === void 0 && (e = Q(i).getComputedStyle(i)), e.position === "fixed";
}
function vl(i, e) {
  e === void 0 && (e = Q(i).getComputedStyle(i));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((r) => {
    const s = e[r];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function li(i, e) {
  const t = [];
  function n(r) {
    if (e != null && t.length >= e || !r)
      return t;
    if (Gi(r) && r.scrollingElement != null && !t.includes(r.scrollingElement))
      return t.push(r.scrollingElement), t;
    if (!Dt(r) || br(r) || t.includes(r))
      return t;
    const s = Q(i).getComputedStyle(r);
    return r !== i && vl(r, s) && t.push(r), ml(r, s) ? t : n(r.parentNode);
  }
  return i ? n(i) : t;
}
function Dr(i) {
  const [e] = li(i, 1);
  return e ?? null;
}
function xi(i) {
  return !si || !i ? null : nt(i) ? i : Wi(i) ? Gi(i) || i === rt(i).scrollingElement ? window : Dt(i) ? i : null : null;
}
function Sr(i) {
  return nt(i) ? i.scrollX : i.scrollLeft;
}
function Rr(i) {
  return nt(i) ? i.scrollY : i.scrollTop;
}
function Si(i) {
  return {
    x: Sr(i),
    y: Rr(i)
  };
}
var X;
(function(i) {
  i[i.Forward = 1] = "Forward", i[i.Backward = -1] = "Backward";
})(X || (X = {}));
function Nr(i) {
  return !si || !i ? !1 : i === document.scrollingElement;
}
function Tr(i) {
  const e = {
    x: 0,
    y: 0
  }, t = Nr(i) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: i.clientHeight,
    width: i.clientWidth
  }, n = {
    x: i.scrollWidth - t.width,
    y: i.scrollHeight - t.height
  }, r = i.scrollTop <= e.y, s = i.scrollLeft <= e.x, o = i.scrollTop >= n.y, a = i.scrollLeft >= n.x;
  return {
    isTop: r,
    isLeft: s,
    isBottom: o,
    isRight: a,
    maxScroll: n,
    minScroll: e
  };
}
const yl = {
  x: 0.2,
  y: 0.2
};
function bl(i, e, t, n, r) {
  let {
    top: s,
    left: o,
    right: a,
    bottom: l
  } = t;
  n === void 0 && (n = 10), r === void 0 && (r = yl);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: f
  } = Tr(i), p = {
    x: 0,
    y: 0
  }, _ = {
    x: 0,
    y: 0
  }, v = {
    height: e.height * r.y,
    width: e.width * r.x
  };
  return !d && s <= e.top + v.height ? (p.y = X.Backward, _.y = n * Math.abs((e.top + v.height - s) / v.height)) : !c && l >= e.bottom - v.height && (p.y = X.Forward, _.y = n * Math.abs((e.bottom - v.height - l) / v.height)), !f && a >= e.right - v.width ? (p.x = X.Forward, _.x = n * Math.abs((e.right - v.width - a) / v.width)) : !u && o <= e.left + v.width && (p.x = X.Backward, _.x = n * Math.abs((e.left + v.width - o) / v.width)), {
    direction: p,
    speed: _
  };
}
function xl(i) {
  if (i === document.scrollingElement) {
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
    bottom: r
  } = i.getBoundingClientRect();
  return {
    top: e,
    left: t,
    right: n,
    bottom: r,
    width: i.clientWidth,
    height: i.clientHeight
  };
}
function Ar(i) {
  return i.reduce((e, t) => et(e, Si(t)), ye);
}
function wl(i) {
  return i.reduce((e, t) => e + Sr(t), 0);
}
function Cl(i) {
  return i.reduce((e, t) => e + Rr(t), 0);
}
function kr(i, e) {
  if (e === void 0 && (e = st), !i)
    return;
  const {
    top: t,
    left: n,
    bottom: r,
    right: s
  } = e(i);
  Dr(i) && (r <= 0 || s <= 0 || t >= window.innerHeight || n >= window.innerWidth) && i.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const _l = [["x", ["left", "right"], wl], ["y", ["top", "bottom"], Cl]];
class $i {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = li(t), r = Ar(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, o, a] of _l)
      for (const l of o)
        Object.defineProperty(this, l, {
          get: () => {
            const d = a(n), c = r[s] - d;
            return this.rect[l] + c;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class pt {
  constructor(e) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((t) => {
        var n;
        return (n = this.target) == null ? void 0 : n.removeEventListener(...t);
      });
    }, this.target = e;
  }
  add(e, t, n) {
    var r;
    (r = this.target) == null || r.addEventListener(e, t, n), this.listeners.push([e, t, n]);
  }
}
function El(i) {
  const {
    EventTarget: e
  } = Q(i);
  return i instanceof e ? i : rt(i);
}
function wi(i, e) {
  const t = Math.abs(i.x), n = Math.abs(i.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + n ** 2) > e : "x" in e && "y" in e ? t > e.x && n > e.y : "x" in e ? t > e.x : "y" in e ? n > e.y : !1;
}
var ue;
(function(i) {
  i.Click = "click", i.DragStart = "dragstart", i.Keydown = "keydown", i.ContextMenu = "contextmenu", i.Resize = "resize", i.SelectionChange = "selectionchange", i.VisibilityChange = "visibilitychange";
})(ue || (ue = {}));
function Cn(i) {
  i.preventDefault();
}
function Dl(i) {
  i.stopPropagation();
}
var W;
(function(i) {
  i.Space = "Space", i.Down = "ArrowDown", i.Right = "ArrowRight", i.Left = "ArrowLeft", i.Up = "ArrowUp", i.Esc = "Escape", i.Enter = "Enter", i.Tab = "Tab";
})(W || (W = {}));
const Or = {
  start: [W.Space, W.Enter],
  cancel: [W.Esc],
  end: [W.Space, W.Enter, W.Tab]
}, Sl = (i, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (i.code) {
    case W.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case W.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case W.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case W.Up:
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
    this.props = e, this.listeners = new pt(rt(t)), this.windowListeners = new pt(Q(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(ue.Resize, this.handleCancel), this.windowListeners.add(ue.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ue.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, n = e.node.current;
    n && kr(n), t(ye);
  }
  handleKeyDown(e) {
    if (ai(e)) {
      const {
        active: t,
        context: n,
        options: r
      } = this.props, {
        keyboardCodes: s = Or,
        coordinateGetter: o = Sl,
        scrollBehavior: a = "smooth"
      } = r, {
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
      } : ye;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const u = o(e, {
        active: t,
        context: n.current,
        currentCoordinates: c
      });
      if (u) {
        const f = Ct(u, c), p = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: _
        } = n.current;
        for (const v of _) {
          const x = e.code, {
            isTop: D,
            isRight: N,
            isLeft: w,
            isBottom: S,
            maxScroll: y,
            minScroll: b
          } = Tr(v), m = xl(v), C = {
            x: Math.min(x === W.Right ? m.right - m.width / 2 : m.right, Math.max(x === W.Right ? m.left : m.left + m.width / 2, u.x)),
            y: Math.min(x === W.Down ? m.bottom - m.height / 2 : m.bottom, Math.max(x === W.Down ? m.top : m.top + m.height / 2, u.y))
          }, z = x === W.Right && !N || x === W.Left && !w, T = x === W.Down && !S || x === W.Up && !D;
          if (z && C.x !== u.x) {
            const E = v.scrollLeft + f.x, R = x === W.Right && E <= y.x || x === W.Left && E >= b.x;
            if (R && !f.y) {
              v.scrollTo({
                left: E,
                behavior: a
              });
              return;
            }
            R ? p.x = v.scrollLeft - E : p.x = x === W.Right ? v.scrollLeft - y.x : v.scrollLeft - b.x, p.x && v.scrollBy({
              left: -p.x,
              behavior: a
            });
            break;
          } else if (T && C.y !== u.y) {
            const E = v.scrollTop + f.y, R = x === W.Down && E <= y.y || x === W.Up && E >= b.y;
            if (R && !f.x) {
              v.scrollTo({
                top: E,
                behavior: a
              });
              return;
            }
            R ? p.y = v.scrollTop - E : p.y = x === W.Down ? v.scrollTop - y.y : v.scrollTop - b.y, p.y && v.scrollBy({
              top: -p.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(e, et(Ct(u, this.referenceCoordinates), p));
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
  handler: (i, e, t) => {
    let {
      keyboardCodes: n = Or,
      onActivation: r
    } = e, {
      active: s
    } = t;
    const {
      code: o
    } = i.nativeEvent;
    if (n.start.includes(o)) {
      const a = s.activatorNode.current;
      return a && i.target !== a ? !1 : (i.preventDefault(), r?.({
        event: i.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function _n(i) {
  return !!(i && "distance" in i);
}
function En(i) {
  return !!(i && "delay" in i);
}
class Ui {
  constructor(e, t, n) {
    var r;
    n === void 0 && (n = El(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: o
    } = s;
    this.props = e, this.events = t, this.document = rt(o), this.documentListeners = new pt(this.document), this.listeners = new pt(n), this.windowListeners = new pt(Q(o)), this.initialCoordinates = (r = Xt(s)) != null ? r : ye, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(ue.Resize, this.handleCancel), this.windowListeners.add(ue.DragStart, Cn), this.windowListeners.add(ue.VisibilityChange, this.handleCancel), this.windowListeners.add(ue.ContextMenu, Cn), this.documentListeners.add(ue.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (En(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (_n(t)) {
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
      onPending: r
    } = this.props;
    r(n, e, this.initialCoordinates, t);
  }
  handleStart() {
    const {
      initialCoordinates: e
    } = this, {
      onStart: t
    } = this.props;
    e && (this.activated = !0, this.documentListeners.add(ue.Click, Dl, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(ue.SelectionChange, this.removeTextSelection), t(e));
  }
  handleMove(e) {
    var t;
    const {
      activated: n,
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
    const l = (t = Xt(e)) != null ? t : ye, d = Ct(r, l);
    if (!n && a) {
      if (_n(a)) {
        if (a.tolerance != null && wi(d, a.tolerance))
          return this.handleCancel();
        if (wi(d, a.distance))
          return this.handleStart();
      }
      if (En(a) && wi(d, a.tolerance))
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
    e.code === W.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Rl = {
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
class Vi extends Ui {
  constructor(e) {
    const {
      event: t
    } = e, n = rt(t.target);
    super(e, Rl, n);
  }
}
Vi.activators = [{
  eventName: "onPointerDown",
  handler: (i, e) => {
    let {
      nativeEvent: t
    } = i, {
      onActivation: n
    } = e;
    return !t.isPrimary || t.button !== 0 ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Nl = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Ri;
(function(i) {
  i[i.RightClick = 2] = "RightClick";
})(Ri || (Ri = {}));
class Tl extends Ui {
  constructor(e) {
    super(e, Nl, rt(e.event.target));
  }
}
Tl.activators = [{
  eventName: "onMouseDown",
  handler: (i, e) => {
    let {
      nativeEvent: t
    } = i, {
      onActivation: n
    } = e;
    return t.button === Ri.RightClick ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
const Ci = {
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
class Al extends Ui {
  constructor(e) {
    super(e, Ci);
  }
  static setup() {
    return window.addEventListener(Ci.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Ci.move.name, e);
    };
    function e() {
    }
  }
}
Al.activators = [{
  eventName: "onTouchStart",
  handler: (i, e) => {
    let {
      nativeEvent: t
    } = i, {
      onActivation: n
    } = e;
    const {
      touches: r
    } = t;
    return r.length > 1 ? !1 : (n?.({
      event: t
    }), !0);
  }
}];
var gt;
(function(i) {
  i[i.Pointer = 0] = "Pointer", i[i.DraggableRect = 1] = "DraggableRect";
})(gt || (gt = {}));
var Zt;
(function(i) {
  i[i.TreeOrder = 0] = "TreeOrder", i[i.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Zt || (Zt = {}));
function kl(i) {
  let {
    acceleration: e,
    activator: t = gt.Pointer,
    canScroll: n,
    draggingRect: r,
    enabled: s,
    interval: o = 5,
    order: a = Zt.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: f
  } = i;
  const p = zl({
    delta: u,
    disabled: !s
  }), [_, v] = $a(), x = M({
    x: 0,
    y: 0
  }), D = M({
    x: 0,
    y: 0
  }), N = P(() => {
    switch (t) {
      case gt.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case gt.DraggableRect:
        return r;
    }
  }, [t, r, l]), w = M(null), S = U(() => {
    const b = w.current;
    if (!b)
      return;
    const m = x.current.x * D.current.x, C = x.current.y * D.current.y;
    b.scrollBy(m, C);
  }, []), y = P(() => a === Zt.TreeOrder ? [...d].reverse() : d, [a, d]);
  H(
    () => {
      if (!s || !d.length || !N) {
        v();
        return;
      }
      for (const b of y) {
        if (n?.(b) === !1)
          continue;
        const m = d.indexOf(b), C = c[m];
        if (!C)
          continue;
        const {
          direction: z,
          speed: T
        } = bl(b, C, N, e, f);
        for (const E of ["x", "y"])
          p[E][z[E]] || (T[E] = 0, z[E] = 0);
        if (T.x > 0 || T.y > 0) {
          v(), w.current = b, _(S, o), x.current = T, D.current = z;
          return;
        }
      }
      x.current = {
        x: 0,
        y: 0
      }, D.current = {
        x: 0,
        y: 0
      }, v();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      S,
      n,
      v,
      s,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p),
      _,
      d,
      y,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f)
    ]
  );
}
const Ol = {
  x: {
    [X.Backward]: !1,
    [X.Forward]: !1
  },
  y: {
    [X.Backward]: !1,
    [X.Forward]: !1
  }
};
function zl(i) {
  let {
    delta: e,
    disabled: t
  } = i;
  const n = Kt(e);
  return St((r) => {
    if (t || !n || !r)
      return Ol;
    const s = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [X.Backward]: r.x[X.Backward] || s.x === -1,
        [X.Forward]: r.x[X.Forward] || s.x === 1
      },
      y: {
        [X.Backward]: r.y[X.Backward] || s.y === -1,
        [X.Forward]: r.y[X.Forward] || s.y === 1
      }
    };
  }, [t, e, n]);
}
function Ll(i, e) {
  const t = e != null ? i.get(e) : void 0, n = t ? t.node.current : null;
  return St((r) => {
    var s;
    return e == null ? null : (s = n ?? r) != null ? s : null;
  }, [n, e]);
}
function Pl(i, e) {
  return P(() => i.reduce((t, n) => {
    const {
      sensor: r
    } = n, s = r.activators.map((o) => ({
      eventName: o.eventName,
      handler: e(o.handler, n)
    }));
    return [...t, ...s];
  }, []), [i, e]);
}
var _t;
(function(i) {
  i[i.Always = 0] = "Always", i[i.BeforeDragging = 1] = "BeforeDragging", i[i.WhileDragging = 2] = "WhileDragging";
})(_t || (_t = {}));
var Ni;
(function(i) {
  i.Optimized = "optimized";
})(Ni || (Ni = {}));
const Dn = /* @__PURE__ */ new Map();
function Ml(i, e) {
  let {
    dragging: t,
    dependencies: n,
    config: r
  } = e;
  const [s, o] = F(null), {
    frequency: a,
    measure: l,
    strategy: d
  } = r, c = M(i), u = x(), f = wt(u), p = U(function(D) {
    D === void 0 && (D = []), !f.current && o((N) => N === null ? D : N.concat(D.filter((w) => !N.includes(w))));
  }, [f]), _ = M(null), v = St((D) => {
    if (u && !t)
      return Dn;
    if (!D || D === Dn || c.current !== i || s != null) {
      const N = /* @__PURE__ */ new Map();
      for (let w of i) {
        if (!w)
          continue;
        if (s && s.length > 0 && !s.includes(w.id) && w.rect.current) {
          N.set(w.id, w.rect.current);
          continue;
        }
        const S = w.node.current, y = S ? new $i(l(S), S) : null;
        w.rect.current = y, y && N.set(w.id, y);
      }
      return N;
    }
    return D;
  }, [i, s, t, u, l]);
  return H(() => {
    c.current = i;
  }, [i]), H(
    () => {
      u || p();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, u]
  ), H(
    () => {
      s && s.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), H(
    () => {
      u || typeof a != "number" || _.current !== null || (_.current = setTimeout(() => {
        p(), _.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, u, p, ...n]
  ), {
    droppableRects: v,
    measureDroppableContainers: p,
    measuringScheduled: s != null
  };
  function x() {
    switch (d) {
      case _t.Always:
        return !1;
      case _t.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function qi(i, e) {
  return St((t) => i ? t || (typeof e == "function" ? e(i) : i) : null, [e, i]);
}
function Il(i, e) {
  return qi(i, e);
}
function Hl(i) {
  let {
    callback: e,
    disabled: t
  } = i;
  const n = oi(e), r = P(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(n);
  }, [n, t]);
  return H(() => () => r?.disconnect(), [r]), r;
}
function ci(i) {
  let {
    callback: e,
    disabled: t
  } = i;
  const n = oi(e), r = P(
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
  return H(() => () => r?.disconnect(), [r]), r;
}
function Fl(i) {
  return new $i(st(i), i);
}
function Sn(i, e, t) {
  e === void 0 && (e = Fl);
  const [n, r] = F(null);
  function s() {
    r((l) => {
      if (!i)
        return null;
      if (i.isConnected === !1) {
        var d;
        return (d = l ?? t) != null ? d : null;
      }
      const c = e(i);
      return JSON.stringify(l) === JSON.stringify(c) ? l : c;
    });
  }
  const o = Hl({
    callback(l) {
      if (i)
        for (const d of l) {
          const {
            type: c,
            target: u
          } = d;
          if (c === "childList" && u instanceof HTMLElement && u.contains(i)) {
            s();
            break;
          }
        }
    }
  }), a = ci({
    callback: s
  });
  return ve(() => {
    s(), i ? (a?.observe(i), o?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), o?.disconnect());
  }, [i]), n;
}
function Bl(i) {
  const e = qi(i);
  return _r(i, e);
}
const Rn = [];
function Wl(i) {
  const e = M(i), t = St((n) => i ? n && n !== Rn && i && e.current && i.parentNode === e.current.parentNode ? n : li(i) : Rn, [i]);
  return H(() => {
    e.current = i;
  }, [i]), t;
}
function Gl(i) {
  const [e, t] = F(null), n = M(i), r = U((s) => {
    const o = xi(s.target);
    o && t((a) => a ? (a.set(o, Si(o)), new Map(a)) : null);
  }, []);
  return H(() => {
    const s = n.current;
    if (i !== s) {
      o(s);
      const a = i.map((l) => {
        const d = xi(l);
        return d ? (d.addEventListener("scroll", r, {
          passive: !0
        }), [d, Si(d)]) : null;
      }).filter((l) => l != null);
      t(a.length ? new Map(a) : null), n.current = i;
    }
    return () => {
      o(i), o(s);
    };
    function o(a) {
      a.forEach((l) => {
        const d = xi(l);
        d?.removeEventListener("scroll", r);
      });
    }
  }, [r, i]), P(() => i.length ? e ? Array.from(e.values()).reduce((s, o) => et(s, o), ye) : Ar(i) : ye, [i, e]);
}
function Nn(i, e) {
  e === void 0 && (e = []);
  const t = M(null);
  return H(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), H(() => {
    const n = i !== ye;
    n && !t.current && (t.current = i), !n && t.current && (t.current = null);
  }, [i]), t.current ? Ct(i, t.current) : ye;
}
function $l(i) {
  H(
    () => {
      if (!si)
        return;
      const e = i.map((t) => {
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
    i.map((e) => {
      let {
        sensor: t
      } = e;
      return t;
    })
  );
}
function jl(i, e) {
  return P(() => i.reduce((t, n) => {
    let {
      eventName: r,
      handler: s
    } = n;
    return t[r] = (o) => {
      s(o, e);
    }, t;
  }, {}), [i, e]);
}
function zr(i) {
  return P(() => i ? gl(i) : null, [i]);
}
const Tn = [];
function Ul(i, e) {
  e === void 0 && (e = st);
  const [t] = i, n = zr(t ? Q(t) : null), [r, s] = F(Tn);
  function o() {
    s(() => i.length ? i.map((l) => Nr(l) ? n : new $i(e(l), l)) : Tn);
  }
  const a = ci({
    callback: o
  });
  return ve(() => {
    a?.disconnect(), o(), i.forEach((l) => a?.observe(l));
  }, [i]), r;
}
function Lr(i) {
  if (!i)
    return null;
  if (i.children.length > 1)
    return i;
  const e = i.children[0];
  return Dt(e) ? e : i;
}
function Vl(i) {
  let {
    measure: e
  } = i;
  const [t, n] = F(null), r = U((d) => {
    for (const {
      target: c
    } of d)
      if (Dt(c)) {
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
  }, [e]), s = ci({
    callback: r
  }), o = U((d) => {
    const c = Lr(d);
    s?.disconnect(), c && s?.observe(c), n(c ? e(c) : null);
  }, [e, s]), [a, l] = qt(o);
  return P(() => ({
    nodeRef: a,
    rect: t,
    setRef: l
  }), [t, a, l]);
}
const ql = [{
  sensor: Vi,
  options: {}
}, {
  sensor: ji,
  options: {}
}], Kl = {
  current: {}
}, Ft = {
  draggable: {
    measure: wn
  },
  droppable: {
    measure: wn,
    strategy: _t.WhileDragging,
    frequency: Ni.Optimized
  },
  dragOverlay: {
    measure: st
  }
};
class mt extends Map {
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
const Xl = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new mt(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Yt
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Ft,
  measureDroppableContainers: Yt,
  windowRect: null,
  measuringScheduled: !1
}, Pr = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Yt,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Yt
}, Nt = /* @__PURE__ */ De(Pr), Mr = /* @__PURE__ */ De(Xl);
function Yl() {
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
      containers: new mt()
    }
  };
}
function Zl(i, e) {
  switch (e.type) {
    case q.DragStart:
      return {
        ...i,
        draggable: {
          ...i.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case q.DragMove:
      return i.draggable.active == null ? i : {
        ...i,
        draggable: {
          ...i.draggable,
          translate: {
            x: e.coordinates.x - i.draggable.initialCoordinates.x,
            y: e.coordinates.y - i.draggable.initialCoordinates.y
          }
        }
      };
    case q.DragEnd:
    case q.DragCancel:
      return {
        ...i,
        draggable: {
          ...i.draggable,
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
    case q.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: n
      } = t, r = new mt(i.droppable.containers);
      return r.set(n, t), {
        ...i,
        droppable: {
          ...i.droppable,
          containers: r
        }
      };
    }
    case q.SetDroppableDisabled: {
      const {
        id: t,
        key: n,
        disabled: r
      } = e, s = i.droppable.containers.get(t);
      if (!s || n !== s.key)
        return i;
      const o = new mt(i.droppable.containers);
      return o.set(t, {
        ...s,
        disabled: r
      }), {
        ...i,
        droppable: {
          ...i.droppable,
          containers: o
        }
      };
    }
    case q.UnregisterDroppable: {
      const {
        id: t,
        key: n
      } = e, r = i.droppable.containers.get(t);
      if (!r || n !== r.key)
        return i;
      const s = new mt(i.droppable.containers);
      return s.delete(t), {
        ...i,
        droppable: {
          ...i.droppable,
          containers: s
        }
      };
    }
    default:
      return i;
  }
}
function Jl(i) {
  let {
    disabled: e
  } = i;
  const {
    active: t,
    activatorEvent: n,
    draggableNodes: r
  } = me(Nt), s = Kt(n), o = Kt(t?.id);
  return H(() => {
    if (!e && !n && s && o != null) {
      if (!ai(s) || document.activeElement === s.target)
        return;
      const a = r.get(o);
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
          const u = Va(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, r, o, s]), null;
}
function Ir(i, e) {
  let {
    transform: t,
    ...n
  } = e;
  return i != null && i.length ? i.reduce((r, s) => s({
    transform: r,
    ...n
  }), t) : t;
}
function Ql(i) {
  return P(
    () => ({
      draggable: {
        ...Ft.draggable,
        ...i?.draggable
      },
      droppable: {
        ...Ft.droppable,
        ...i?.droppable
      },
      dragOverlay: {
        ...Ft.dragOverlay,
        ...i?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i?.draggable, i?.droppable, i?.dragOverlay]
  );
}
function ec(i) {
  let {
    activeNode: e,
    measure: t,
    initialRect: n,
    config: r = !0
  } = i;
  const s = M(!1), {
    x: o,
    y: a
  } = typeof r == "boolean" ? {
    x: r,
    y: r
  } : r;
  ve(() => {
    if (!o && !a || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !n)
      return;
    const d = e?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const c = t(d), u = _r(c, n);
    if (o || (u.x = 0), a || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = Dr(d);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, o, a, n, t]);
}
const di = /* @__PURE__ */ De({
  ...ye,
  scaleX: 1,
  scaleY: 1
});
var He;
(function(i) {
  i[i.Uninitialized = 0] = "Uninitialized", i[i.Initializing = 1] = "Initializing", i[i.Initialized = 2] = "Initialized";
})(He || (He = {}));
const tc = /* @__PURE__ */ Zs(function(e) {
  var t, n, r, s;
  let {
    id: o,
    accessibility: a,
    autoScroll: l = !0,
    children: d,
    sensors: c = ql,
    collisionDetection: u = cl,
    measuring: f,
    modifiers: p,
    ..._
  } = e;
  const v = Js(Zl, void 0, Yl), [x, D] = v, [N, w] = Ja(), [S, y] = F(He.Uninitialized), b = S === He.Initialized, {
    draggable: {
      active: m,
      nodes: C,
      translate: z
    },
    droppable: {
      containers: T
    }
  } = x, E = m != null ? C.get(m) : null, R = M({
    initial: null,
    translated: null
  }), A = P(() => {
    var Z;
    return m != null ? {
      id: m,
      // It's possible for the active node to unmount while dragging
      data: (Z = E?.data) != null ? Z : Kl,
      rect: R
    } : null;
  }, [m, E]), B = M(null), [ee, te] = F(null), [V, fe] = F(null), j = wt(_, Object.values(_)), pe = Rt("DndDescribedBy", o), At = P(() => T.getEnabled(), [T]), ie = Ql(f), {
    droppableRects: Se,
    measureDroppableContainers: $e,
    measuringScheduled: ot
  } = Ml(At, {
    dragging: b,
    dependencies: [z.x, z.y],
    config: ie.droppable
  }), le = Ll(C, m), kt = P(() => V ? Xt(V) : null, [V]), ke = ps(), Re = Il(le, ie.draggable.measure);
  ec({
    activeNode: m != null ? C.get(m) : null,
    config: ke.layoutShiftCompensation,
    initialRect: Re,
    measure: ie.draggable.measure
  });
  const $ = Sn(le, ie.draggable.measure, Re), at = Sn(le ? le.parentElement : null), xe = M({
    activatorEvent: null,
    active: null,
    activeNode: le,
    collisionRect: null,
    collisions: null,
    droppableRects: Se,
    draggableNodes: C,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: T,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Ve = T.getNodeFor((t = xe.current.over) == null ? void 0 : t.id), Ne = Vl({
    measure: ie.dragOverlay.measure
  }), qe = (n = Ne.nodeRef.current) != null ? n : le, Ke = b ? (r = Ne.rect) != null ? r : $ : null, en = !!(Ne.nodeRef.current && Ne.rect), tn = Bl(en ? null : $), hi = zr(qe ? Q(qe) : null), Oe = Wl(b ? Ve ?? le : null), Ot = Ul(Oe), zt = Ir(p, {
    transform: {
      x: z.x - tn.x,
      y: z.y - tn.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: V,
    active: A,
    activeNodeRect: $,
    containerNodeRect: at,
    draggingNodeRect: Ke,
    over: xe.current.over,
    overlayNodeRect: Ne.rect,
    scrollableAncestors: Oe,
    scrollableAncestorRects: Ot,
    windowRect: hi
  }), nn = kt ? et(kt, z) : null, rn = Gl(Oe), as = Nn(rn), ls = Nn(rn, [$]), Xe = et(zt, as), Ye = Ke ? hl(Ke, zt) : null, lt = A && Ye ? u({
    active: A,
    collisionRect: Ye,
    droppableRects: Se,
    droppableContainers: At,
    pointerCoordinates: nn
  }) : null, sn = Cr(lt, "id"), [ze, on] = F(null), cs = en ? zt : et(zt, ls), ds = dl(cs, (s = ze?.rect) != null ? s : null, $), fi = M(null), an = U(
    (Z, ne) => {
      let {
        sensor: re,
        options: Le
      } = ne;
      if (B.current == null)
        return;
      const ce = C.get(B.current);
      if (!ce)
        return;
      const se = Z.nativeEvent, we = new re({
        active: B.current,
        activeNode: ce,
        event: se,
        options: Le,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: xe,
        onAbort(Y) {
          if (!C.get(Y))
            return;
          const {
            onDragAbort: Ce
          } = j.current, Te = {
            id: Y
          };
          Ce?.(Te), N({
            type: "onDragAbort",
            event: Te
          });
        },
        onPending(Y, Pe, Ce, Te) {
          if (!C.get(Y))
            return;
          const {
            onDragPending: dt
          } = j.current, Me = {
            id: Y,
            constraint: Pe,
            initialCoordinates: Ce,
            offset: Te
          };
          dt?.(Me), N({
            type: "onDragPending",
            event: Me
          });
        },
        onStart(Y) {
          const Pe = B.current;
          if (Pe == null)
            return;
          const Ce = C.get(Pe);
          if (!Ce)
            return;
          const {
            onDragStart: Te
          } = j.current, ct = {
            activatorEvent: se,
            active: {
              id: Pe,
              data: Ce.data,
              rect: R
            }
          };
          Lt(() => {
            Te?.(ct), y(He.Initializing), D({
              type: q.DragStart,
              initialCoordinates: Y,
              active: Pe
            }), N({
              type: "onDragStart",
              event: ct
            }), te(fi.current), fe(se);
          });
        },
        onMove(Y) {
          D({
            type: q.DragMove,
            coordinates: Y
          });
        },
        onEnd: Ze(q.DragEnd),
        onCancel: Ze(q.DragCancel)
      });
      fi.current = we;
      function Ze(Y) {
        return async function() {
          const {
            active: Ce,
            collisions: Te,
            over: ct,
            scrollAdjustedTranslate: dt
          } = xe.current;
          let Me = null;
          if (Ce && dt) {
            const {
              cancelDrop: ut
            } = j.current;
            Me = {
              activatorEvent: se,
              active: Ce,
              collisions: Te,
              delta: dt,
              over: ct
            }, Y === q.DragEnd && typeof ut == "function" && await Promise.resolve(ut(Me)) && (Y = q.DragCancel);
          }
          B.current = null, Lt(() => {
            D({
              type: Y
            }), y(He.Uninitialized), on(null), te(null), fe(null), fi.current = null;
            const ut = Y === q.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Me) {
              const pi = j.current[ut];
              pi?.(Me), N({
                type: ut,
                event: Me
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), us = U((Z, ne) => (re, Le) => {
    const ce = re.nativeEvent, se = C.get(Le);
    if (
      // Another sensor is already instantiating
      B.current !== null || // No active draggable
      !se || // Event has already been captured
      ce.dndKit || ce.defaultPrevented
    )
      return;
    const we = {
      active: se
    };
    Z(re, ne.options, we) === !0 && (ce.dndKit = {
      capturedBy: ne.sensor
    }, B.current = Le, an(re, ne));
  }, [C, an]), ln = Pl(c, us);
  $l(c), ve(() => {
    $ && S === He.Initializing && y(He.Initialized);
  }, [$, S]), H(
    () => {
      const {
        onDragMove: Z
      } = j.current, {
        active: ne,
        activatorEvent: re,
        collisions: Le,
        over: ce
      } = xe.current;
      if (!ne || !re)
        return;
      const se = {
        active: ne,
        activatorEvent: re,
        collisions: Le,
        delta: {
          x: Xe.x,
          y: Xe.y
        },
        over: ce
      };
      Lt(() => {
        Z?.(se), N({
          type: "onDragMove",
          event: se
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Xe.x, Xe.y]
  ), H(
    () => {
      const {
        active: Z,
        activatorEvent: ne,
        collisions: re,
        droppableContainers: Le,
        scrollAdjustedTranslate: ce
      } = xe.current;
      if (!Z || B.current == null || !ne || !ce)
        return;
      const {
        onDragOver: se
      } = j.current, we = Le.get(sn), Ze = we && we.rect.current ? {
        id: we.id,
        rect: we.rect.current,
        data: we.data,
        disabled: we.disabled
      } : null, Y = {
        active: Z,
        activatorEvent: ne,
        collisions: re,
        delta: {
          x: ce.x,
          y: ce.y
        },
        over: Ze
      };
      Lt(() => {
        on(Ze), se?.(Y), N({
          type: "onDragOver",
          event: Y
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sn]
  ), ve(() => {
    xe.current = {
      activatorEvent: V,
      active: A,
      activeNode: le,
      collisionRect: Ye,
      collisions: lt,
      droppableRects: Se,
      draggableNodes: C,
      draggingNode: qe,
      draggingNodeRect: Ke,
      droppableContainers: T,
      over: ze,
      scrollableAncestors: Oe,
      scrollAdjustedTranslate: Xe
    }, R.current = {
      initial: Ke,
      translated: Ye
    };
  }, [A, le, lt, Ye, C, qe, Ke, Se, T, ze, Oe, Xe]), kl({
    ...ke,
    delta: z,
    draggingRect: Ye,
    pointerCoordinates: nn,
    scrollableAncestors: Oe,
    scrollableAncestorRects: Ot
  });
  const hs = P(() => ({
    active: A,
    activeNode: le,
    activeNodeRect: $,
    activatorEvent: V,
    collisions: lt,
    containerNodeRect: at,
    dragOverlay: Ne,
    draggableNodes: C,
    droppableContainers: T,
    droppableRects: Se,
    over: ze,
    measureDroppableContainers: $e,
    scrollableAncestors: Oe,
    scrollableAncestorRects: Ot,
    measuringConfiguration: ie,
    measuringScheduled: ot,
    windowRect: hi
  }), [A, le, $, V, lt, at, Ne, C, T, Se, ze, $e, Oe, Ot, ie, ot, hi]), fs = P(() => ({
    activatorEvent: V,
    activators: ln,
    active: A,
    activeNodeRect: $,
    ariaDescribedById: {
      draggable: pe
    },
    dispatch: D,
    draggableNodes: C,
    over: ze,
    measureDroppableContainers: $e
  }), [V, ln, A, $, D, pe, C, ze, $e]);
  return I.createElement(wr.Provider, {
    value: w
  }, I.createElement(Nt.Provider, {
    value: fs
  }, I.createElement(Mr.Provider, {
    value: hs
  }, I.createElement(di.Provider, {
    value: ds
  }, d)), I.createElement(Jl, {
    disabled: a?.restoreFocus === !1
  })), I.createElement(tl, {
    ...a,
    hiddenTextDescribedById: pe
  }));
  function ps() {
    const Z = ee?.autoScrollEnabled === !1, ne = typeof l == "object" ? l.enabled === !1 : l === !1, re = b && !Z && !ne;
    return typeof l == "object" ? {
      ...l,
      enabled: re
    } : {
      enabled: re
    };
  }
}), ic = /* @__PURE__ */ De(null), An = "button", nc = "Draggable";
function rc(i) {
  let {
    id: e,
    data: t,
    disabled: n = !1,
    attributes: r
  } = i;
  const s = Rt(nc), {
    activators: o,
    activatorEvent: a,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: f
  } = me(Nt), {
    role: p = An,
    roleDescription: _ = "draggable",
    tabIndex: v = 0
  } = r ?? {}, x = l?.id === e, D = me(x ? di : ic), [N, w] = qt(), [S, y] = qt(), b = jl(o, e), m = wt(t);
  ve(
    () => (u.set(e, {
      id: e,
      key: s,
      node: N,
      activatorNode: S,
      data: m
    }), () => {
      const z = u.get(e);
      z && z.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const C = P(() => ({
    role: p,
    tabIndex: v,
    "aria-disabled": n,
    "aria-pressed": x && p === An ? !0 : void 0,
    "aria-roledescription": _,
    "aria-describedby": c.draggable
  }), [n, p, v, x, _, c.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: d,
    attributes: C,
    isDragging: x,
    listeners: n ? void 0 : b,
    node: N,
    over: f,
    setNodeRef: w,
    setActivatorNodeRef: y,
    transform: D
  };
}
function Hr() {
  return me(Mr);
}
const sc = "Droppable", oc = {
  timeout: 25
};
function ac(i) {
  let {
    data: e,
    disabled: t = !1,
    id: n,
    resizeObserverConfig: r
  } = i;
  const s = Rt(sc), {
    active: o,
    dispatch: a,
    over: l,
    measureDroppableContainers: d
  } = me(Nt), c = M({
    disabled: t
  }), u = M(!1), f = M(null), p = M(null), {
    disabled: _,
    updateMeasurementsFor: v,
    timeout: x
  } = {
    ...oc,
    ...r
  }, D = wt(v ?? n), N = U(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
        d(Array.isArray(D.current) ? D.current : [D.current]), p.current = null;
      }, x);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), w = ci({
    callback: N,
    disabled: _ || !o
  }), S = U((C, z) => {
    w && (z && (w.unobserve(z), u.current = !1), C && w.observe(C));
  }, [w]), [y, b] = qt(S), m = wt(e);
  return H(() => {
    !w || !y.current || (w.disconnect(), u.current = !1, w.observe(y.current));
  }, [y, w]), H(
    () => (a({
      type: q.RegisterDroppable,
      element: {
        id: n,
        key: s,
        disabled: t,
        node: y,
        rect: f,
        data: m
      }
    }), () => a({
      type: q.UnregisterDroppable,
      key: s,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), H(() => {
    t !== c.current.disabled && (a({
      type: q.SetDroppableDisabled,
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
function lc(i) {
  let {
    animation: e,
    children: t
  } = i;
  const [n, r] = F(null), [s, o] = F(null), a = Kt(t);
  return !t && !n && a && r(a), ve(() => {
    if (!s)
      return;
    const l = n?.key, d = n?.props.id;
    if (l == null || d == null) {
      r(null);
      return;
    }
    Promise.resolve(e(d, s)).then(() => {
      r(null);
    });
  }, [e, n, s]), I.createElement(I.Fragment, null, t, n ? Qs(n, {
    ref: o
  }) : null);
}
const cc = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function dc(i) {
  let {
    children: e
  } = i;
  return I.createElement(Nt.Provider, {
    value: Pr
  }, I.createElement(di.Provider, {
    value: cc
  }, e));
}
const uc = {
  position: "fixed",
  touchAction: "none"
}, hc = (i) => ai(i) ? "transform 250ms ease" : void 0, fc = /* @__PURE__ */ ae((i, e) => {
  let {
    as: t,
    activatorEvent: n,
    adjustScale: r,
    children: s,
    className: o,
    rect: a,
    style: l,
    transform: d,
    transition: c = hc
  } = i;
  if (!a)
    return null;
  const u = r ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...uc,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: Ge.Transform.toString(u),
    transformOrigin: r && n ? rl(n, a) : void 0,
    transition: typeof c == "function" ? c(n) : c,
    ...l
  };
  return I.createElement(t, {
    className: o,
    style: f,
    ref: e
  }, s);
}), pc = (i) => (e) => {
  let {
    active: t,
    dragOverlay: n
  } = e;
  const r = {}, {
    styles: s,
    className: o
  } = i;
  if (s != null && s.active)
    for (const [a, l] of Object.entries(s.active))
      l !== void 0 && (r[a] = t.node.style.getPropertyValue(a), t.node.style.setProperty(a, l));
  if (s != null && s.dragOverlay)
    for (const [a, l] of Object.entries(s.dragOverlay))
      l !== void 0 && n.node.style.setProperty(a, l);
  return o != null && o.active && t.node.classList.add(o.active), o != null && o.dragOverlay && n.node.classList.add(o.dragOverlay), function() {
    for (const [l, d] of Object.entries(r))
      t.node.style.setProperty(l, d);
    o != null && o.active && t.node.classList.remove(o.active);
  };
}, gc = (i) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = i;
  return [{
    transform: Ge.Transform.toString(e)
  }, {
    transform: Ge.Transform.toString(t)
  }];
}, mc = {
  duration: 250,
  easing: "ease",
  keyframes: gc,
  sideEffects: /* @__PURE__ */ pc({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function vc(i) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: n,
    measuringConfiguration: r
  } = i;
  return oi((s, o) => {
    if (e === null)
      return;
    const a = t.get(s);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const d = Lr(o);
    if (!d)
      return;
    const {
      transform: c
    } = Q(o).getComputedStyle(o), u = Er(c);
    if (!u)
      return;
    const f = typeof e == "function" ? e : yc(e);
    return kr(l, r.draggable.measure), f({
      active: {
        id: s,
        data: a.data,
        node: l,
        rect: r.draggable.measure(l)
      },
      draggableNodes: t,
      dragOverlay: {
        node: o,
        rect: r.dragOverlay.measure(d)
      },
      droppableContainers: n,
      measuringConfiguration: r,
      transform: u
    });
  });
}
function yc(i) {
  const {
    duration: e,
    easing: t,
    sideEffects: n,
    keyframes: r
  } = {
    ...mc,
    ...i
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
    }, p = r({
      ...d,
      active: o,
      dragOverlay: a,
      transform: {
        initial: l,
        final: f
      }
    }), [_] = p, v = p[p.length - 1];
    if (JSON.stringify(_) === JSON.stringify(v))
      return;
    const x = n?.({
      active: o,
      dragOverlay: a,
      ...d
    }), D = a.node.animate(p, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((N) => {
      D.onfinish = () => {
        x?.(), N();
      };
    });
  };
}
let kn = 0;
function bc(i) {
  return P(() => {
    if (i != null)
      return kn++, kn;
  }, [i]);
}
const xc = /* @__PURE__ */ I.memo((i) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: n,
    style: r,
    transition: s,
    modifiers: o,
    wrapperElement: a = "div",
    className: l,
    zIndex: d = 999
  } = i;
  const {
    activatorEvent: c,
    active: u,
    activeNodeRect: f,
    containerNodeRect: p,
    draggableNodes: _,
    droppableContainers: v,
    dragOverlay: x,
    over: D,
    measuringConfiguration: N,
    scrollableAncestors: w,
    scrollableAncestorRects: S,
    windowRect: y
  } = Hr(), b = me(di), m = bc(u?.id), C = Ir(o, {
    activatorEvent: c,
    active: u,
    activeNodeRect: f,
    containerNodeRect: p,
    draggingNodeRect: x.rect,
    over: D,
    overlayNodeRect: x.rect,
    scrollableAncestors: w,
    scrollableAncestorRects: S,
    transform: b,
    windowRect: y
  }), z = qi(f), T = vc({
    config: n,
    draggableNodes: _,
    droppableContainers: v,
    measuringConfiguration: N
  }), E = z ? x.setRef : void 0;
  return I.createElement(dc, null, I.createElement(lc, {
    animation: T
  }, u && m ? I.createElement(fc, {
    key: m,
    id: u.id,
    ref: E,
    as: a,
    activatorEvent: c,
    adjustScale: e,
    className: l,
    transition: s,
    rect: z,
    style: {
      zIndex: d,
      ...r
    },
    transform: C
  }, t) : null));
});
function Ki(i, e, t) {
  const n = i.slice();
  return n.splice(t < 0 ? n.length + t : t, 0, n.splice(e, 1)[0]), n;
}
function wc(i, e) {
  return i.reduce((t, n, r) => {
    const s = e.get(n);
    return s && (t[r] = s), t;
  }, Array(i.length));
}
function It(i) {
  return i !== null && i >= 0;
}
function Cc(i, e) {
  if (i === e)
    return !0;
  if (i.length !== e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] !== e[t])
      return !1;
  return !0;
}
function _c(i) {
  return typeof i == "boolean" ? {
    draggable: i,
    droppable: i
  } : i;
}
const Fr = (i) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: n,
    index: r
  } = i;
  const s = Ki(e, n, t), o = e[r], a = s[r];
  return !a || !o ? null : {
    x: a.left - o.left,
    y: a.top - o.top,
    scaleX: a.width / o.width,
    scaleY: a.height / o.height
  };
}, Br = "Sortable", Wr = /* @__PURE__ */ I.createContext({
  activeIndex: -1,
  containerId: Br,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Fr,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Ec(i) {
  let {
    children: e,
    id: t,
    items: n,
    strategy: r = Fr,
    disabled: s = !1
  } = i;
  const {
    active: o,
    dragOverlay: a,
    droppableRects: l,
    over: d,
    measureDroppableContainers: c
  } = Hr(), u = Rt(Br, t), f = a.rect !== null, p = P(() => n.map((b) => typeof b == "object" && "id" in b ? b.id : b), [n]), _ = o != null, v = o ? p.indexOf(o.id) : -1, x = d ? p.indexOf(d.id) : -1, D = M(p), N = !Cc(p, D.current), w = x !== -1 && v === -1 || N, S = _c(s);
  ve(() => {
    N && _ && c(p);
  }, [N, p, _, c]), H(() => {
    D.current = p;
  }, [p]);
  const y = P(
    () => ({
      activeIndex: v,
      containerId: u,
      disabled: S,
      disableTransforms: w,
      items: p,
      overIndex: x,
      useDragOverlay: f,
      sortedRects: wc(p, l),
      strategy: r
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, u, S.draggable, S.droppable, w, p, x, l, f, r]
  );
  return I.createElement(Wr.Provider, {
    value: y
  }, e);
}
const Dc = (i) => {
  let {
    id: e,
    items: t,
    activeIndex: n,
    overIndex: r
  } = i;
  return Ki(t, n, r).indexOf(e);
}, Sc = (i) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: n,
    index: r,
    items: s,
    newIndex: o,
    previousItems: a,
    previousContainerId: l,
    transition: d
  } = i;
  return !d || !n || a !== s && r === o ? !1 : t ? !0 : o !== r && e === l;
}, Rc = {
  duration: 200,
  easing: "ease"
}, Gr = "transform", Nc = /* @__PURE__ */ Ge.Transition.toString({
  property: Gr,
  duration: 0,
  easing: "linear"
}), Tc = {
  roleDescription: "sortable"
};
function Ac(i) {
  let {
    disabled: e,
    index: t,
    node: n,
    rect: r
  } = i;
  const [s, o] = F(null), a = M(t);
  return ve(() => {
    if (!e && t !== a.current && n.current) {
      const l = r.current;
      if (l) {
        const d = st(n.current, {
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
  }, [e, t, n, r]), H(() => {
    s && o(null);
  }, [s]), s;
}
function kc(i) {
  let {
    animateLayoutChanges: e = Sc,
    attributes: t,
    disabled: n,
    data: r,
    getNewIndex: s = Dc,
    id: o,
    strategy: a,
    resizeObserverConfig: l,
    transition: d = Rc
  } = i;
  const {
    items: c,
    containerId: u,
    activeIndex: f,
    disabled: p,
    disableTransforms: _,
    sortedRects: v,
    overIndex: x,
    useDragOverlay: D,
    strategy: N
  } = me(Wr), w = Oc(n, p), S = c.indexOf(o), y = P(() => ({
    sortable: {
      containerId: u,
      index: S,
      items: c
    },
    ...r
  }), [u, r, S, c]), b = P(() => c.slice(c.indexOf(o)), [c, o]), {
    rect: m,
    node: C,
    isOver: z,
    setNodeRef: T
  } = ac({
    id: o,
    data: y,
    disabled: w.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: b,
      ...l
    }
  }), {
    active: E,
    activatorEvent: R,
    activeNodeRect: A,
    attributes: B,
    setNodeRef: ee,
    listeners: te,
    isDragging: V,
    over: fe,
    setActivatorNodeRef: j,
    transform: pe
  } = rc({
    id: o,
    data: y,
    attributes: {
      ...Tc,
      ...t
    },
    disabled: w.draggable
  }), At = Ga(T, ee), ie = !!E, Se = ie && !_ && It(f) && It(x), $e = !D && V, ot = $e && Se ? pe : null, kt = Se ? ot ?? (a ?? N)({
    rects: v,
    activeNodeRect: A,
    activeIndex: f,
    overIndex: x,
    index: S
  }) : null, ke = It(f) && It(x) ? s({
    id: o,
    items: c,
    activeIndex: f,
    overIndex: x
  }) : S, Re = E?.id, $ = M({
    activeId: Re,
    items: c,
    newIndex: ke,
    containerId: u
  }), at = c !== $.current.items, xe = e({
    active: E,
    containerId: u,
    isDragging: V,
    isSorting: ie,
    id: o,
    index: S,
    items: c,
    newIndex: $.current.newIndex,
    previousItems: $.current.items,
    previousContainerId: $.current.containerId,
    transition: d,
    wasDragging: $.current.activeId != null
  }), Ve = Ac({
    disabled: !xe,
    index: S,
    node: C,
    rect: m
  });
  return H(() => {
    ie && $.current.newIndex !== ke && ($.current.newIndex = ke), u !== $.current.containerId && ($.current.containerId = u), c !== $.current.items && ($.current.items = c);
  }, [ie, ke, u, c]), H(() => {
    if (Re === $.current.activeId)
      return;
    if (Re != null && $.current.activeId == null) {
      $.current.activeId = Re;
      return;
    }
    const qe = setTimeout(() => {
      $.current.activeId = Re;
    }, 50);
    return () => clearTimeout(qe);
  }, [Re]), {
    active: E,
    activeIndex: f,
    attributes: B,
    data: y,
    rect: m,
    index: S,
    newIndex: ke,
    items: c,
    isOver: z,
    isSorting: ie,
    isDragging: V,
    listeners: te,
    node: C,
    overIndex: x,
    over: fe,
    setNodeRef: At,
    setActivatorNodeRef: j,
    setDroppableNodeRef: T,
    setDraggableNodeRef: ee,
    transform: Ve ?? kt,
    transition: Ne()
  };
  function Ne() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Ve || // Or to prevent items jumping to back to their "new" position when items change
      at && $.current.newIndex === S
    )
      return Nc;
    if (!($e && !ai(R) || !d) && (ie || xe))
      return Ge.Transition.toString({
        ...d,
        property: Gr
      });
  }
}
function Oc(i, e) {
  var t, n;
  return typeof i == "boolean" ? {
    draggable: i,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (t = i?.draggable) != null ? t : e.draggable,
    droppable: (n = i?.droppable) != null ? n : e.droppable
  };
}
function Jt(i) {
  if (!i)
    return !1;
  const e = i.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const zc = [W.Down, W.Right, W.Up, W.Left], Lc = (i, e) => {
  let {
    context: {
      active: t,
      collisionRect: n,
      droppableRects: r,
      droppableContainers: s,
      over: o,
      scrollableAncestors: a
    }
  } = e;
  if (zc.includes(i.code)) {
    if (i.preventDefault(), !t || !n)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const f = r.get(u.id);
      if (f)
        switch (i.code) {
          case W.Down:
            n.top < f.top && l.push(u);
            break;
          case W.Up:
            n.top > f.top && l.push(u);
            break;
          case W.Left:
            n.left > f.left && l.push(u);
            break;
          case W.Right:
            n.left < f.left && l.push(u);
            break;
        }
    });
    const d = al({
      collisionRect: n,
      droppableRects: r,
      droppableContainers: l
    });
    let c = Cr(d, "id");
    if (c === o?.id && d.length > 1 && (c = d[1].id), c != null) {
      const u = s.get(t.id), f = s.get(c), p = f ? r.get(f.id) : null, _ = f?.node.current;
      if (_ && p && u && f) {
        const x = li(_).some((b, m) => a[m] !== b), D = $r(u, f), N = Pc(u, f), w = x || !D ? {
          x: 0,
          y: 0
        } : {
          x: N ? n.width - p.width : 0,
          y: N ? n.height - p.height : 0
        }, S = {
          x: p.left,
          y: p.top
        };
        return w.x && w.y ? S : Ct(S, w);
      }
    }
  }
};
function $r(i, e) {
  return !Jt(i) || !Jt(e) ? !1 : i.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Pc(i, e) {
  return !Jt(i) || !Jt(e) || !$r(i, e) ? !1 : i.data.current.sortable.index < e.data.current.sortable.index;
}
const On = ({ id: i, children: e }) => {
  const { attributes: t, listeners: n, setNodeRef: r, transform: s, transition: o } = kc({
    id: i
  }), a = {
    transform: Ge.Translate.toString(s),
    transition: o,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return h("div", {
    ref: r,
    style: a,
    ...t,
    ...n,
    children: e
  });
}, Xi = ({ blocks: i, sortable: e = !1, onSort: t = () => {
}, main: n = !1 }) => {
  const [r, s] = F([]);
  In(() => {
    s(i.map((u, f) => ({
      id: u.id ?? f.toString(),
      render: u.render
    })));
  }, [i]);
  const [o, a] = F(null), l = il(bn(Vi), bn(ji, {
    coordinateGetter: Lc
  })), d = (u) => {
    a(u.active.id);
  }, c = (u) => {
    const { active: f, over: p } = u;
    a(null), p && f.id !== p.id && s((_) => {
      const v = _.findIndex((D) => D.id === f.id), x = _.findIndex((D) => D.id === p.id);
      return Ki(_, v, x);
    });
  };
  return h("div", {
    className: G("flex flex-wrap items-stretch gap-4", n && "flex-1"),
    children: O(tc, {
      sensors: l,
      onDragStart: d,
      onDragEnd: c,
      children: [h(Ec, {
        items: r,
        children: r.map((u) => h(On, {
          id: u.id,
          children: u.render
        }, u.id))
      }), h(xc, {
        children: o ? h(On, {
          id: o,
          children: r.find((u) => u.id === o)?.render
        }) : null
      })]
    })
  });
};
Xi.displayName = "GroupMasonry";
Xi.__isPageLayoutGroup = !0;
const Mc = ae(function({ children: e, aside: t, header: n, variant: r = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && yr("Page", e, ["block", "group"]), h("div", {
    ref: s,
    className: "h-full",
    children: O("div", {
      className: G("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [O("main", {
        className: G("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", r === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [n && h("header", {
          className: G("sticky top-0 z-30 bg-f1-background"),
          children: n
        }), h("div", {
          className: "flex-1",
          children: e
        })]
      }), t && h("aside", {
        className: G("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", r === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), fu = {
  Page: he("Page", Mc),
  Block: he("Block", ri),
  BlockContent: he("BlockContent", Fa),
  Group: he("Group", Bi),
  GroupGrid: he("GroupGrid", ni),
  GroupMasonry: he("GroupMasonry", Xi)
}, pu = be({
  name: "StandardLayout",
  type: "layout"
}, lr), gu = be({
  name: "TwoColumnLayout",
  type: "layout"
}, ua), mu = be({
  name: "HomeLayout",
  type: "layout"
}, ca);
function tt(i) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tt(i);
}
function Ic(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Hc(i, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, Vr(n.key), n);
  }
}
function Fc(i, e, t) {
  return e && Hc(i.prototype, e), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function Bc(i, e, t) {
  return e = Qt(e), Wc(i, jr() ? Reflect.construct(e, t || [], Qt(i).constructor) : e.apply(i, t));
}
function Wc(i, e) {
  if (e && (tt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gc(i);
}
function Gc(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function jr() {
  try {
    var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jr = function() {
    return !!i;
  })();
}
function Qt(i) {
  return Qt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Qt(i);
}
function $c(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(e && e.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), e && Ti(i, e);
}
function Ti(i, e) {
  return Ti = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ti(i, e);
}
function Ur(i, e, t) {
  return e = Vr(e), e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = t, i;
}
function Vr(i) {
  var e = jc(i, "string");
  return tt(e) == "symbol" ? e : e + "";
}
function jc(i, e) {
  if (tt(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(i, e);
    if (tt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var ui = /* @__PURE__ */ (function(i) {
  function e() {
    return Ic(this, e), Bc(this, e, arguments);
  }
  return $c(e, i), Fc(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(I.Component);
Ur(ui, "displayName", "ZAxis");
Ur(ui, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Uc = ["option", "isActive"];
function vt() {
  return vt = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, vt.apply(this, arguments);
}
function Vc(i, e) {
  if (i == null) return {};
  var t = qc(i, e), n, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(i);
    for (r = 0; r < s.length; r++)
      n = s[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(i, n) && (t[n] = i[n]);
  }
  return t;
}
function qc(i, e) {
  if (i == null) return {};
  var t = {};
  for (var n in i)
    if (Object.prototype.hasOwnProperty.call(i, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = i[n];
    }
  return t;
}
function Kc(i) {
  var e = i.option, t = i.isActive, n = Vc(i, Uc);
  return typeof e == "string" ? /* @__PURE__ */ I.createElement(un, vt({
    option: /* @__PURE__ */ I.createElement(no, vt({
      type: e
    }, n)),
    isActive: t,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ I.createElement(un, vt({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, n));
}
function it(i) {
  "@babel/helpers - typeof";
  return it = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, it(i);
}
function yt() {
  return yt = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, yt.apply(this, arguments);
}
function zn(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    e && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function de(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zn(Object(t), !0).forEach(function(n) {
      Fe(i, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : zn(Object(t)).forEach(function(n) {
      Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return i;
}
function Xc(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ln(i, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, Kr(n.key), n);
  }
}
function Yc(i, e, t) {
  return e && Ln(i.prototype, e), t && Ln(i, t), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function Zc(i, e, t) {
  return e = ei(e), Jc(i, qr() ? Reflect.construct(e, t || [], ei(i).constructor) : e.apply(i, t));
}
function Jc(i, e) {
  if (e && (it(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Qc(i);
}
function Qc(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function qr() {
  try {
    var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qr = function() {
    return !!i;
  })();
}
function ei(i) {
  return ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ei(i);
}
function ed(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(e && e.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), e && Ai(i, e);
}
function Ai(i, e) {
  return Ai = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ai(i, e);
}
function Fe(i, e, t) {
  return e = Kr(e), e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = t, i;
}
function Kr(i) {
  var e = td(i, "string");
  return it(e) == "symbol" ? e : e + "";
}
function td(i, e) {
  if (it(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(i, e);
    if (it(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var Tt = /* @__PURE__ */ (function(i) {
  function e() {
    var t;
    Xc(this, e);
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t = Zc(this, e, [].concat(r)), Fe(t, "state", {
      isAnimationFinished: !1
    }), Fe(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), Fe(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), Fe(t, "id", uo("recharts-scatter-")), t;
  }
  return ed(e, i), Yc(e, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var r = this, s = this.props, o = s.shape, a = s.activeShape, l = s.activeIndex, d = mi(this.props, !1);
      return n.map(function(c, u) {
        var f = l === u, p = f ? a : o, _ = de(de({}, d), c);
        return /* @__PURE__ */ I.createElement(ht, yt({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c?.cx, "-").concat(c?.cy, "-").concat(c?.size, "-").concat(u)
        }, ro(r.props, c, u), {
          role: "img"
        }), /* @__PURE__ */ I.createElement(Kc, yt({
          option: p,
          isActive: f,
          key: "symbol-".concat(u)
        }, _)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, r = this.props, s = r.points, o = r.isAnimationActive, a = r.animationBegin, l = r.animationDuration, d = r.animationEasing, c = r.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ I.createElement(so, {
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
        var p = f.t, _ = s.map(function(v, x) {
          var D = u && u[x];
          if (D) {
            var N = Pt(D.cx, v.cx), w = Pt(D.cy, v.cy), S = Pt(D.size, v.size);
            return de(de({}, v), {}, {
              cx: N(p),
              cy: w(p),
              size: S(p)
            });
          }
          var y = Pt(0, v.size);
          return de(de({}, v), {}, {
            size: y(p)
          });
        });
        return /* @__PURE__ */ I.createElement(ht, null, n.renderSymbolsStatically(_));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, r = n.points, s = n.isAnimationActive, o = this.state.prevPoints;
      return s && r && r.length && (!o || !Jn(o, r)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(r);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var r = this.props, s = r.points, o = r.xAxis, a = r.yAxis, l = r.children, d = Qn(l, oo);
      return d ? d.map(function(c, u) {
        var f = c.props, p = f.direction, _ = f.dataKey;
        return /* @__PURE__ */ I.cloneElement(c, {
          key: "".concat(p, "-").concat(_, "-").concat(s[u]),
          data: s,
          xAxis: o,
          yAxis: a,
          layout: p === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(x, D) {
            return {
              x: x.cx,
              y: x.cy,
              value: p === "x" ? +x.node.x : +x.node.y,
              errorVal: Ht(x, D)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, r = n.points, s = n.line, o = n.lineType, a = n.lineJointType, l = mi(this.props, !1), d = mi(s, !1), c, u;
      if (o === "joint")
        c = r.map(function(w) {
          return {
            x: w.cx,
            y: w.cy
          };
        });
      else if (o === "fitting") {
        var f = ao(r), p = f.xmin, _ = f.xmax, v = f.a, x = f.b, D = function(S) {
          return v * S + x;
        };
        c = [{
          x: p,
          y: D(p)
        }, {
          x: _,
          y: D(_)
        }];
      }
      var N = de(de(de({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, d), {}, {
        points: c
      });
      return /* @__PURE__ */ I.isValidElement(s) ? u = /* @__PURE__ */ I.cloneElement(s, N) : lo(s) ? u = s(N) : u = /* @__PURE__ */ I.createElement(co, yt({}, N, {
        type: a
      })), /* @__PURE__ */ I.createElement(ht, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, r = n.hide, s = n.points, o = n.line, a = n.className, l = n.xAxis, d = n.yAxis, c = n.left, u = n.top, f = n.width, p = n.height, _ = n.id, v = n.isAnimationActive;
      if (r || !s || !s.length)
        return null;
      var x = this.state.isAnimationFinished, D = ws("recharts-scatter", a), N = l && l.allowDataOverflow, w = d && d.allowDataOverflow, S = N || w, y = Je(_) ? this.id : _;
      return /* @__PURE__ */ I.createElement(ht, {
        className: D,
        clipPath: S ? "url(#clipPath-".concat(y, ")") : null
      }, N || w ? /* @__PURE__ */ I.createElement("defs", null, /* @__PURE__ */ I.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ I.createElement("rect", {
        x: N ? c : c - f / 2,
        y: w ? u : u - p / 2,
        width: N ? f : f * 2,
        height: w ? p : p * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ I.createElement(ht, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || x) && er.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, r) {
      return n.animationId !== r.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: r.curPoints
      } : n.points !== r.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }]);
})(eo);
Fe(Tt, "displayName", "Scatter");
Fe(Tt, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !ho.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Fe(Tt, "getComposedData", function(i) {
  var e = i.xAxis, t = i.yAxis, n = i.zAxis, r = i.item, s = i.displayedData, o = i.xAxisTicks, a = i.yAxisTicks, l = i.offset, d = r.props.tooltipType, c = Qn(r.props.children, fo), u = Je(e.dataKey) ? r.props.dataKey : e.dataKey, f = Je(t.dataKey) ? r.props.dataKey : t.dataKey, p = n && n.dataKey, _ = n ? n.range : ui.defaultProps.range, v = _ && _[0], x = e.scale.bandwidth ? e.scale.bandwidth() : 0, D = t.scale.bandwidth ? t.scale.bandwidth() : 0, N = s.map(function(w, S) {
    var y = Ht(w, u), b = Ht(w, f), m = !Je(p) && Ht(w, p) || "-", C = [{
      name: Je(e.dataKey) ? r.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: y,
      payload: w,
      dataKey: u,
      type: d
    }, {
      name: Je(t.dataKey) ? r.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: b,
      payload: w,
      dataKey: f,
      type: d
    }];
    m !== "-" && C.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: m,
      payload: w,
      dataKey: p,
      type: d
    });
    var z = hn({
      axis: e,
      ticks: o,
      bandSize: x,
      entry: w,
      index: S,
      dataKey: u
    }), T = hn({
      axis: t,
      ticks: a,
      bandSize: D,
      entry: w,
      index: S,
      dataKey: f
    }), E = m !== "-" ? n.scale(m) : v, R = Math.sqrt(Math.max(E, 0) / Math.PI);
    return de(de({}, w), {}, {
      cx: z,
      cy: T,
      x: z - R,
      y: T - R,
      xAxis: e,
      yAxis: t,
      zAxis: n,
      width: 2 * R,
      height: 2 * R,
      size: E,
      node: {
        x: y,
        y: b,
        z: m
      },
      tooltipPayload: C,
      tooltipPosition: {
        x: z,
        y: T
      },
      payload: w
    }, c && c[S] && c[S].props);
  });
  return de({
    points: N
  }, l);
});
var id = po({
  chartName: "ComposedChart",
  GraphicalChild: [tr, go, ir, Tt],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: nr
  }, {
    axisType: "yAxis",
    AxisComp: Di
  }, {
    axisType: "zAxis",
    AxisComp: ui
  }],
  formatAxisMap: mo
});
const nd = (i) => {
  const e = (t) => {
    const { cx: n, cy: r, fill: s, payload: o } = t, a = () => {
      if (!o) return "-";
      if (o[i] !== void 0)
        return o[i];
      for (const [l, d] of Object.entries(o))
        if (typeof d == "number" && l !== "x")
          return d;
      return "-";
    };
    return h("circle", {
      cx: n,
      cy: r,
      r: 4,
      fill: s,
      stroke: "white",
      strokeWidth: 2,
      ref: (l) => {
        l?.parentElement && l.parentElement.setAttribute("aria-label", `Data point: ${a()}`);
      }
    });
  };
  return e.displayName = `Scatter-${i}`, e;
}, rd = ({ dataConfig: i, data: e, xAxis: t, yAxis: n = {
  hide: !0
}, label: r = !1, hideTooltip: s = !1, hideGrid: o = !1, aspect: a, legend: l, showValueUnderLabel: d = !1, bar: c, line: u, scatter: f, onClick: p }, _) => {
  const v = vo(e), x = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], D = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], N = f?.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], w = [...x, ...D, ...N], S = Math.max(...v.flatMap((m) => w.map((C) => yo(n?.tickFormatter ? n.tickFormatter(`${m[C]}`) : `${m[C]}`)))), y = [c, u, f].filter((m) => m?.axisPosition === "left"), b = [c, u, f].filter((m) => m?.axisPosition === "right");
  return h(bo, {
    config: i,
    ref: _,
    aspect: a,
    children: O(id, {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: r ? 24 : 0,
        bottom: d ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (m) => {
        if (!p || !m.activeLabel || !m.activePayload)
          return;
        const C = {
          label: m.activeLabel,
          values: {}
        };
        for (const z of m.activePayload)
          C.values[z.name] = z.value;
        p(C);
      },
      children: [!s && h(xo, {
        ...wo(),
        content: h(Co, {
          yAxisFormatter: n.tickFormatter
        })
      }), !o && h(_o, {
        ...Eo()
      }), y.length > 0 && h(Di, {
        ...fn(n),
        tick: !0,
        width: n.width ?? S + 20 + (b.length > 0 && y[0]?.axisLabel ? 20 : 0),
        hide: n.hide || y.some((m) => m?.hideAxis),
        label: y[0]?.axisLabel ? {
          value: y[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), b.length > 0 && h(Di, {
        ...fn(n),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: n.width ?? S + 20 + (y.length > 0 && b[0]?.axisLabel ? 20 : 0),
        hide: n.hide || b.some((m) => m?.hideAxis),
        label: b[0]?.axisLabel ? {
          value: b[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), h(nr, {
        ...Do(t),
        hide: t?.hide,
        tick: d ? (m) => {
          const { x: C, y: z, payload: T } = m, E = e.find((B) => B.label === T.value)?.values || "", R = Object.keys(E).length === 1 ? Object.values(E)?.[0] : void 0, A = R !== void 0 && n.tickFormatter ? n.tickFormatter(`${R}`) : R.toLocaleString();
          return O("g", {
            transform: `translate(${C},${z})`,
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
              children: A
            })]
          });
        } : void 0
      }), x.map((m, C) => h(ir, {
        isAnimationActive: !1,
        dataKey: String(m),
        fill: i[m].color ? ft(i[m].color) : vi(C),
        radius: 4,
        maxBarSize: 32,
        children: r && h(er, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(m)}`)
      }, `bar-${String(m)}`)), D.map((m, C) => h(tr, {
        type: u?.lineType ?? "natural",
        dataKey: String(m),
        stroke: i[m].color ? ft(i[m].color) : vi(x.length + C),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(m)}`)), N.map((m, C) => h(Tt, {
        dataKey: String(m),
        fill: i[m].color ? ft(i[m].color) : vi(x.length + D.length + C),
        r: 4,
        isAnimationActive: !1,
        yAxisId: f?.axisPosition === "right" ? "right" : void 0,
        shape: nd(String(m))
      }, `scatter-${String(m)}`)), l && h(So, {
        content: h(Ro, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, sd = rr(rd), od = ({ value: i, max: e = 100, label: t, color: n }, r) => {
  const s = n ? ft(n) : ft("categorical-1"), o = i / e * 100;
  return O("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [h("div", {
      className: "flex-grow",
      children: h(No, {
        color: s,
        value: o,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": i,
        "aria-label": `${o.toFixed(1)}%`
      })
    }), t && h("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, ad = rr(od), vu = be(
  {
    name: "AreaChart",
    type: "info"
  },
  To
), yu = be(
  {
    name: "BarChart",
    type: "info"
  },
  Ao
), bu = be(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  ko
), xu = be(
  {
    name: "LineChart",
    type: "info"
  },
  Oo
), wu = be(
  {
    name: "PieChart",
    type: "info"
  },
  zo
), Cu = be(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Lo
), _u = be(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ad
), Eu = be(
  {
    name: "ComboChart",
    type: "info"
  },
  sd
), ld = (i) => typeof i == "boolean" || !i ? {
  show: !!i,
  invertStatus: !1
} : {
  show: i.show ?? !0,
  invertStatus: i.invertStatus ?? !1
}, Xr = ({ label: i, ...e }) => {
  const t = Po(), n = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), r = ld(e.trend), s = t(e.comparison), o = Mo(n.numericValue, n.formatterOptions), a = pn(s.numericValue), l = pn(n.numericValue), d = P(() => {
    if (!(!a || !r.show) && !(!a || !l))
      return (l - a) / a * 100;
  }, [l, a, r.show]);
  return O("div", {
    className: "flex flex-col gap-2",
    children: [i && h("div", {
      children: i
    }), O("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [h("span", {
        className: "font-bold text-2xl",
        children: o
      }), a !== void 0 && h(Io, {
        percentage: d,
        amount: s,
        invertStatus: r.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, cd = () => O("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [h(_e, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), O("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [h(_e, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), h(_e, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
Xr.displayName = "F0BigNumber";
const dd = Hn(Xr, cd), Du = he("F0BigNumber", dd), Su = Cs.filter(
  (i) => i !== "ai"
), Ru = Bn, Nu = ["default", "outline", "neutral"], Tu = Bn, Au = ["sm", "md", "lg"], ku = ["compact", "expanded"], Ou = _s, zu = [
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
], ki = ({ count: i, list: e }) => {
  const [t, n] = F(!1), r = h(Bt, {
    label: `+${i}`
  });
  return e?.length ? O(Wn, {
    open: t,
    onOpenChange: n,
    children: [h(Gn, {
      asChild: !0,
      children: h("button", {
        className: $n("inline-flex flex-shrink-0 items-center"),
        children: r
      })
    }), h(jn, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: O(Un, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, o) => h("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: h(Bt, {
            ...s
          })
        }, o)), h(Vn, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
ki.displayName = "ChipCounter";
const Yr = ({ chips: i, max: e = 4, remainingCount: t, layout: n = "compact" }) => {
  if (n === "fill")
    return h(Es, {
      items: i,
      renderListItem: (l) => h(Bt, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => h(ki, {
        count: (t ?? 0) + l,
        list: t ? void 0 : i.slice(i.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const r = i.slice(0, e), s = i.slice(e), o = t ?? i.length - e, a = o > 0;
  return O("div", {
    className: "flex items-center gap-2",
    children: [r.map((l, d) => h(Bt, {
      ...l
    }, d)), a && h(ki, {
      count: o,
      list: t ? void 0 : s
    })]
  });
};
Yr.displayName = "F0ChipList";
const Lu = he("F0ChipList", Yr), Pu = Ds, ud = je({
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
}), hd = je({
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
}), Mu = ({ title: i, description: e, action: t, link: n, icon: r, variant: s = "neutral" }) => {
  const o = M(null);
  return h("div", {
    ref: o,
    className: "@container",
    children: h("div", {
      className: ud({
        variant: s
      }),
      children: O("div", {
        className: G("flex flex-col items-start gap-3 @sm:flex-row @sm:items-center @sm:justify-between"),
        children: [O("div", {
          className: "flex flex-row gap-2",
          children: [h("div", {
            className: "h-6 w-6 flex-shrink-0",
            children: s === "neutral" ? h(Ss, {
              icon: r || Rs,
              size: "sm"
            }) : h(Ho, {
              type: s,
              size: "sm"
            })
          }), O("div", {
            className: "flex flex-col gap-0.5",
            children: [h("p", {
              className: hd({
                variant: s
              }),
              children: i
            }), h("p", {
              className: "text-base text-f1-foreground-secondary",
              children: e
            })]
          })]
        }), (t || n) && O("div", {
          className: G("flex flex-shrink-0 flex-row items-center gap-3 pl-8 @sm:pl-0"),
          children: [n && h(Ns, {
            href: n.href,
            target: "_blank",
            variant: "link",
            size: "sm",
            children: n.label
          }), t && h(We, {
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
}, fd = 388;
function pd({ filters: i, value: e, onChange: t, height: n, width: r = 600, className: s, showApplyButton: o = !0, applyButtonLabel: a }) {
  const l = Li(), [d, c] = F(null), [u, f] = F(e);
  H(() => {
    f(e);
  }, [e]), H(() => {
    if (!d && i) {
      const x = Object.keys(i);
      if (x.length > 0) {
        const D = x.find((N) => {
          const w = u[N], S = cn(i[N].type);
          return w !== void 0 && !S.isEmpty(w, {
            schema: i[N],
            i18n: l
          });
        });
        c(D ?? x[0]);
      }
    }
  }, [i, d, u, l]);
  const p = (x, D) => {
    const N = {
      ...u,
      [x]: D
    };
    f(N), o || t(N);
  }, _ = () => {
    t(u);
  }, v = P(() => n || Object.entries(i).reduce((D, [N, w]) => {
    const S = cn(w.type);
    return Math.max(D, S?.formHeight || fd);
  }, 0), [i, n]);
  return !i || Object.keys(i).length === 0 ? null : h("div", {
    className: G("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      maxWidth: r
    },
    children: h(Ts, {
      filters: i,
      tempFilters: u,
      selectedFilterKey: d,
      onFilterSelect: c,
      onFilterChange: p,
      onApply: _,
      height: v,
      showApplyButton: o,
      applyButtonLabel: a
    })
  });
}
pd.displayName = "F0FilterPickerContent";
const Yi = "gap-4", gd = "mt-6", Be = "md", Zr = De(null);
function Jr() {
  const i = me(Zr);
  if (!i)
    throw new Error("useF0FormContext must be used within a F0Form");
  return i;
}
function Qr(i, e, t) {
  const n = ["forms", i];
  return e && n.push(e), t && n.push(t), n.join(".");
}
function K(i, e) {
  return i._def?.typeName === e;
}
const es = /* @__PURE__ */ new WeakMap();
function Iu(i, e) {
  es.set(i, e);
  const t = i;
  return t._f0Config = e, t._innerSchema = i, t;
}
function ts(i) {
  const e = i;
  return e._f0Config ? e._f0Config : es.get(i);
}
function Hu(i) {
  return ts(i) !== void 0;
}
function Ue(i) {
  let e = i;
  for (; K(e, "ZodOptional") || K(e, "ZodNullable") || K(e, "ZodDefault"); )
    e = e._def.innerType;
  return e;
}
function md(i, e) {
  if ("fieldType" in e && e.fieldType)
    return e.fieldType;
  if ("options" in e && e.options)
    return "select";
  const t = Ue(i);
  return K(t, "ZodString") ? "rows" in e && e.rows ? "textarea" : "text" : K(t, "ZodNumber") ? "number" : K(t, "ZodBoolean") ? "switch" : K(t, "ZodDate") ? "date" : K(t, "ZodEnum") || K(t, "ZodArray") && "options" in e && e.options ? "select" : K(t, "ZodObject") && "render" in e && e.render ? "custom" : "text";
}
function Zi(i) {
  return K(i, "ZodOptional") || K(i, "ZodNullable") || K(i, "ZodDefault") && Zi(i._def.innerType);
}
function Ji(i, e) {
  const t = e[i.fieldId];
  if ("equalsTo" in i)
    return i.equalsTo instanceof Date && t instanceof Date ? t.getTime() === i.equalsTo.getTime() : t === i.equalsTo;
  if ("notEqualsTo" in i)
    return i.notEqualsTo instanceof Date && t instanceof Date ? t.getTime() !== i.notEqualsTo.getTime() : t !== i.notEqualsTo;
  if ("greaterThan" in i) {
    const n = i.greaterThan;
    return typeof t == "number" && typeof n == "number" ? t > n : t instanceof Date && n instanceof Date ? t.getTime() > n.getTime() : !1;
  }
  if ("greaterThanOrEqual" in i) {
    const n = i.greaterThanOrEqual;
    return typeof t == "number" && typeof n == "number" ? t >= n : t instanceof Date && n instanceof Date ? t.getTime() >= n.getTime() : !1;
  }
  if ("lowerThan" in i) {
    const n = i.lowerThan;
    return typeof t == "number" && typeof n == "number" ? t < n : t instanceof Date && n instanceof Date ? t.getTime() < n.getTime() : !1;
  }
  if ("lowerThanOrEqual" in i) {
    const n = i.lowerThanOrEqual;
    return typeof t == "number" && typeof n == "number" ? t <= n : t instanceof Date && n instanceof Date ? t.getTime() <= n.getTime() : !1;
  }
  if ("isEmpty" in i) {
    const n = t == null || t === "" || Array.isArray(t) && t.length === 0;
    return i.isEmpty ? n : !n;
  }
  return "matches" in i ? typeof t == "string" && i.matches.test(t) : "includes" in i ? Array.isArray(t) ? t.includes(i.includes) : t === i.includes : "notIncludes" in i ? Array.isArray(t) ? !t.includes(i.notIncludes) : t !== i.notIncludes : !0;
}
function vd(i) {
  const e = Ue(i);
  return K(e, "ZodLiteral") && e._def.value === !0;
}
function yd({ field: i, formField: e }) {
  const t = i.validation && vd(i.validation);
  return h(As, {
    title: i.label,
    disabled: i.disabled,
    required: t,
    ...e,
    checked: !!e.value,
    onCheckedChange: e.onChange
  });
}
function bd({ field: i, formField: e, error: t, isValidating: n }) {
  const r = {
    id: i.id,
    label: i.label,
    placeholder: i.placeholder,
    value: e.value,
    onChange: e.onChange,
    onBlur: e.onBlur,
    error: t,
    isValidating: n,
    disabled: i.disabled
  };
  return h(Et, {
    children: i.render(r)
  });
}
function xd(i, e) {
  if (i)
    return {
      value: {
        from: i,
        to: i
      },
      granularity: e?.[0] ?? "day"
    };
}
function wd(i) {
  return i?.value?.from;
}
function Cd({ field: i, formField: e, error: t, loading: n }) {
  const r = P(() => xd(e.value, i.granularities), [e.value, i.granularities]), s = (o) => {
    e.onChange(wd(o));
  };
  return h(sr, {
    label: i.label,
    placeholder: i.placeholder,
    disabled: i.disabled,
    granularities: i.granularities,
    minDate: i.minDate,
    maxDate: i.maxDate,
    presets: i.presets,
    clearable: i.clearable,
    value: r,
    onChange: s,
    size: Be,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function _d(i) {
  if (!(!i?.from || !i?.to))
    return {
      value: {
        from: i.from,
        to: i.to
      },
      granularity: "range"
    };
}
function Ed(i) {
  if (!(!i?.value?.from || !i?.value?.to))
    return {
      from: i.value.from,
      to: i.value.to
    };
}
function Dd({ field: i, formField: e, error: t, loading: n }) {
  const r = P(() => _d(e.value), [e.value]), s = (a) => {
    e.onChange(Ed(a));
  }, o = i.fromLabel && i.toLabel ? `${i.label} (${i.fromLabel} - ${i.toLabel})` : i.label;
  return h(sr, {
    label: o,
    placeholder: i.placeholder,
    disabled: i.disabled,
    granularities: i.granularities ?? ["range"],
    minDate: i.minDate,
    maxDate: i.maxDate,
    presets: i.presets,
    clearable: i.clearable,
    value: r,
    onChange: s,
    size: Be,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Sd({ field: i, formField: e, error: t, loading: n }) {
  return h(Fo, {
    label: i.label,
    placeholder: i.placeholder,
    disabled: i.disabled,
    step: i.step,
    min: i.min,
    max: i.max,
    locale: i.locale ?? "en-US",
    ...e,
    value: e.value != null ? Number(e.value) : void 0,
    onChange: (r) => e.onChange(r),
    size: Be,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Rd({ field: i, formField: e }) {
  const t = e.value;
  return h(Bo, {
    title: i.label,
    placeholder: i.placeholder ?? "",
    maxCharacters: i.maxCharacters,
    mentionsConfig: i.mentionsConfig,
    height: i.height,
    plainHtmlMode: i.plainHtmlMode,
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
function Nd({ field: i, formField: e, error: t, loading: n }) {
  const r = {
    label: i.label,
    placeholder: i.placeholder,
    disabled: i.disabled,
    options: i.options,
    showSearchBox: i.showSearchBox,
    searchBoxPlaceholder: i.searchBoxPlaceholder,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    loading: n
  };
  return i.multiple ? h(gi, {
    ...r,
    multiple: !0,
    clearable: i.clearable,
    value: e.value ?? [],
    onChange: (s) => e.onChange(s),
    size: Be,
    hideLabel: !0
  }) : i.clearable ? h(gi, {
    ...r,
    clearable: !0,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s),
    size: Be,
    hideLabel: !0
  }) : h(gi, {
    ...r,
    value: e.value ?? void 0,
    onChange: (s) => e.onChange(s),
    size: Be,
    hideLabel: !0
  });
}
function Td(i) {
  const e = Ue(i);
  return K(e, "ZodLiteral") && e._def.value === !0;
}
function Ad({ field: i, formField: e }) {
  const t = i.validation && Td(i.validation);
  return h(ks, {
    title: i.label,
    disabled: i.disabled,
    required: t,
    ...e,
    checked: !!e.value,
    onCheckedChange: e.onChange,
    hideLabel: !0
  });
}
function kd({ field: i, formField: e, error: t, loading: n }) {
  return h(Os, {
    label: i.label,
    type: i.inputType ?? "text",
    placeholder: i.placeholder,
    disabled: i.disabled,
    ...e,
    value: e.value != null ? String(e.value) : "",
    size: Be,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function Od({ field: i, formField: e, error: t, loading: n }) {
  return h(Wo, {
    label: i.label,
    placeholder: i.placeholder,
    disabled: i.disabled,
    rows: i.rows,
    maxLength: i.maxLength,
    ...e,
    value: e.value != null ? String(e.value) : "",
    size: Be,
    hideLabel: !0,
    error: t,
    loading: n
  });
}
function zd(i, e, t) {
  const n = !!t.error, { isValidating: r } = t, s = {
    error: n,
    loading: r
  };
  switch (i.type) {
    case "text":
      return h(kd, {
        field: i,
        formField: e,
        ...s
      });
    case "number":
      return h(Sd, {
        field: i,
        formField: e,
        ...s
      });
    case "textarea":
      return h(Od, {
        field: i,
        formField: e,
        ...s
      });
    case "select":
      return h(Nd, {
        field: i,
        formField: e,
        ...s
      });
    case "checkbox":
      return h(yd, {
        field: i,
        formField: e
      });
    case "switch":
      return h(Ad, {
        field: i,
        formField: e
      });
    case "date":
      return h(Cd, {
        field: i,
        formField: e,
        ...s
      });
    case "daterange":
      return h(Dd, {
        field: i,
        formField: e,
        ...s
      });
    case "richtext":
      return h(Rd, {
        field: i,
        formField: e
      });
    case "custom":
      return h(bd, {
        field: i,
        formField: e,
        error: t.error?.message,
        isValidating: r
      });
    default:
      return null;
  }
}
function Qi({ field: i, sectionId: e }) {
  const t = Pi(), n = t.watch(), { formName: r } = Jr();
  if (i.renderIf && !Ji(i.renderIf, n))
    return null;
  const s = i.type !== "checkbox" && i.type !== "custom", o = i.validation && !Zi(i.validation), a = Qr(r, e, i.id);
  return h(Go, {
    control: t.control,
    name: i.id,
    render: ({ field: l, fieldState: d }) => O($o, {
      id: a,
      className: "scroll-mt-4",
      children: [s && O("label", {
        htmlFor: i.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [i.label, o && h("span", {
          className: "ml-0.5 text-f1-foreground-critical",
          children: "*"
        })]
      }), h(jo, {
        children: zd(i, l, d)
      }), i.helpText && h(Uo, {
        children: i.helpText
      }), h(Vo, {})]
    })
  });
}
function is({ row: i, sectionId: e }) {
  return h("div", {
    className: `flex xs:flex-row flex-col ${Yi} [&>*]:flex-1`,
    children: i.fields.map((t) => h(Qi, {
      field: t,
      sectionId: e
    }, t.id))
  });
}
function Ld(i) {
  const e = Ue(i);
  return K(e, "ZodLiteral") && e._def.value === !0;
}
function ns({ fields: i }) {
  const e = Pi(), { watch: t, setValue: n } = e, r = t(), s = P(() => i.filter((d) => !d.renderIf || Ji(d.renderIf, r)), [i, r]), o = P(() => s.map((d) => ({
    value: d.id,
    title: d.label,
    description: d.helpText,
    disabled: d.disabled,
    required: !!(d.validation && Ld(d.validation))
  })), [s]), a = P(() => s.filter((d) => r[d.id]).map((d) => d.id), [s, r]);
  return s.length === 0 ? null : h(qo, {
    multiple: !0,
    isToggle: !0,
    grouped: !0,
    items: o,
    value: a,
    onChange: (d) => {
      for (const c of s) {
        const u = d.includes(c.id), f = !!r[c.id];
        u !== f && n(c.id, u, {
          shouldValidate: !0
        });
      }
    }
  });
}
function Pd(i, e) {
  return typeof i == "function" ? i(e) : Ji(i, e);
}
function Md(i) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({
      type: "switchGroup",
      fields: [...t]
    }), t = []);
  };
  return i.forEach((r, s) => {
    r.type === "field" && r.field.type === "switch" ? t.push(r.field) : (n(), r.type === "field" ? e.push({
      type: "field",
      item: r
    }) : r.type === "row" && e.push({
      type: "row",
      item: r,
      index: s
    }));
  }), n(), e;
}
function Id({ section: i }) {
  const t = Pi().watch(), { formName: n } = Jr(), { title: r, description: s, renderIf: o, fields: a } = i.section, l = i.id;
  if (o && !Pd(o, t))
    return null;
  const d = Md(a), c = Qr(n, l);
  return O("section", {
    id: c,
    className: "flex flex-col scroll-mt-4",
    children: [h("div", {
      className: "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0 py-5",
      children: h(Ko, {
        title: r,
        description: s ?? ""
      })
    }), h("div", {
      className: `flex flex-col ${Yi}`,
      children: d.map((u, f) => u.type === "switchGroup" ? h(ns, {
        fields: u.fields,
        sectionId: l
      }, `switch-group-${f}`) : u.type === "field" ? h(Qi, {
        field: u.item.field,
        sectionId: l
      }, u.item.field.id) : u.type === "row" ? h(is, {
        row: u.item,
        sectionId: l
      }, `row-${u.index}`) : null)
    })]
  });
}
function Hd(i) {
  const e = Ue(i);
  if (!K(e, "ZodNumber"))
    return {};
  const t = e._def.checks || [];
  let n, r;
  for (const s of t)
    s.kind === "min" ? n = s.value : s.kind === "max" && (r = s.value);
  return { min: n, max: r };
}
function Fd(i) {
  const e = Ue(i);
  if (!K(e, "ZodDate"))
    return {};
  const t = e._def.checks || [];
  let n, r;
  for (const s of t)
    s.kind === "min" ? n = new Date(s.value) : s.kind === "max" && (r = new Date(s.value));
  return { minDate: n, maxDate: r };
}
function Bd(i) {
  const e = Ue(i);
  if (!K(e, "ZodString"))
    return {};
  const t = e._def.checks || [];
  let n;
  for (const r of t)
    r.kind === "max" && (n = r.value);
  return { maxLength: n };
}
function Pn(i, e, t, n) {
  const r = {
    id: i,
    label: t.label,
    placeholder: t.placeholder,
    helpText: t.helpText,
    disabled: t.disabled,
    validation: e
  }, s = Zi(e);
  switch (n) {
    case "text":
      return {
        ...r,
        type: "text",
        inputType: "inputType" in t && t.inputType || "text",
        renderIf: t.renderIf
      };
    case "number": {
      const { min: o, max: a } = Hd(e);
      return {
        ...r,
        type: "number",
        step: "step" in t ? t.step : void 0,
        min: o,
        max: a,
        locale: "locale" in t ? t.locale : void 0,
        renderIf: t.renderIf
      };
    }
    case "textarea": {
      const { maxLength: o } = Bd(e);
      return {
        ...r,
        type: "textarea",
        rows: "rows" in t ? t.rows : void 0,
        maxLength: o,
        renderIf: t.renderIf
      };
    }
    case "select":
      return {
        ...r,
        type: "select",
        options: "options" in t ? t.options : [],
        multiple: "multiple" in t ? t.multiple : void 0,
        clearable: s,
        showSearchBox: "showSearchBox" in t ? t.showSearchBox : void 0,
        searchBoxPlaceholder: "searchBoxPlaceholder" in t ? t.searchBoxPlaceholder : void 0,
        renderIf: t.renderIf
      };
    case "checkbox":
      return {
        ...r,
        type: "checkbox",
        renderIf: t.renderIf
      };
    case "switch":
      return {
        ...r,
        type: "switch",
        renderIf: t.renderIf
      };
    case "date": {
      const { minDate: o, maxDate: a } = Fd(e);
      return {
        ...r,
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
        ...r,
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
        ...r,
        type: "richtext",
        maxCharacters: "maxCharacters" in t ? t.maxCharacters : void 0,
        mentionsConfig: "mentionsConfig" in t ? t.mentionsConfig : void 0,
        height: "height" in t ? t.height : void 0,
        plainHtmlMode: "plainHtmlMode" in t ? t.plainHtmlMode : void 0,
        renderIf: t.renderIf
      };
    case "custom":
      return {
        ...r,
        type: "custom",
        render: "render" in t ? t.render : () => null,
        renderIf: t.renderIf
      };
    default:
      return {
        ...r,
        type: "text",
        inputType: "text",
        renderIf: t.renderIf
      };
  }
}
function ti(i) {
  const e = [], t = /* @__PURE__ */ new Set();
  for (let n = 0; n < i.length; n++) {
    if (t.has(n)) continue;
    const r = i[n], s = r.config.row;
    if (s) {
      const o = [];
      for (let l = n; l < i.length; l++)
        i[l].config.row === s && (o.push(i[l]), t.add(l));
      o.sort((l, d) => l.position - d.position);
      const a = {
        type: "row",
        fields: o.map(
          (l) => Pn(l.id, l.schema, l.config, l.fieldType)
        )
      };
      e.push(a);
    } else {
      t.add(n);
      const o = Pn(
        r.id,
        r.schema,
        r.config,
        r.fieldType
      );
      e.push({ type: "field", field: o });
    }
  }
  return e;
}
function rs(i) {
  const e = i.shape, t = [], n = Object.entries(e);
  for (let r = 0; r < n.length; r++) {
    const [s, o] = n[r], a = ts(o);
    if (a) {
      const l = md(o, a);
      t.push({
        id: s,
        schema: o,
        config: a,
        fieldType: l,
        position: r
      });
    }
  }
  return t;
}
function Wd(i, e) {
  return P(() => {
    const t = rs(i), n = [], r = {};
    for (const a of t) {
      const l = a.config.section;
      l ? (r[l] || (r[l] = []), r[l].push(a)) : n.push(a);
    }
    n.sort((a, l) => a.position - l.position);
    for (const a of Object.keys(r))
      r[a].sort((l, d) => l.position - d.position);
    const s = [];
    s.push(...ti(n));
    const o = e ? Object.keys(e).filter((a) => r[a]) : Object.keys(r);
    for (const a of o) {
      const l = e?.[a], d = r[a], c = {
        id: a,
        type: "section",
        section: {
          title: l?.title ?? a,
          description: l?.description,
          renderIf: l?.renderIf,
          fields: ti(d)
        }
      };
      s.push(c);
    }
    return s;
  }, [i, e]);
}
function Fu(i, e) {
  const t = rs(i), n = [], r = {};
  for (const a of t) {
    const l = a.config.section;
    l ? (r[l] || (r[l] = []), r[l].push(a)) : n.push(a);
  }
  n.sort((a, l) => a.position - l.position);
  for (const a of Object.keys(r))
    r[a].sort((l, d) => l.position - d.position);
  const s = [];
  s.push(...ti(n));
  const o = e ? Object.keys(e).filter((a) => r[a]) : Object.keys(r);
  for (const a of o) {
    const l = e?.[a], d = r[a], c = {
      id: a,
      type: "section",
      section: {
        title: l?.title ?? a,
        description: l?.description,
        renderIf: l?.renderIf,
        fields: ti(d)
      }
    };
    s.push(c);
  }
  return s;
}
function Gd(i) {
  const e = [];
  let t = [];
  const n = () => {
    t.length > 0 && (e.push({
      type: "switchGroup",
      fields: [...t]
    }), t = []);
  };
  return i.forEach((r, s) => {
    r.type === "field" && r.field.type === "switch" ? t.push(r.field) : (n(), r.type === "field" ? e.push({
      type: "field",
      item: r
    }) : r.type === "row" ? e.push({
      type: "row",
      item: r,
      index: s
    }) : r.type === "section" && e.push({
      type: "section",
      item: r
    }));
  }), n(), e;
}
function $d(i) {
  const { forms: e } = Li(), { name: t, schema: n, sections: r, defaultValues: s, onSubmit: o, submitLabel: a = "Submit", className: l } = i, d = i.submitType ?? "default", c = d === "default" ? i.showSubmitButton ?? !0 : !1, u = d === "action-bar" ? i.discardableChanges ?? !1 : !1, f = d === "action-bar" ? i.discardLabel ?? e.actionBar.discard : e.actionBar.discard, p = d === "action-bar" ? i.actionBarLabel ?? e.actionBar.unsavedChanges : e.actionBar.unsavedChanges, _ = Wd(n, r), v = Xo({
    resolver: Yo(n),
    mode: "onChange",
    defaultValues: s
  }), x = v.formState.errors.root, { isDirty: D, isSubmitting: N } = v.formState, w = async (m) => {
    const C = await o(m);
    C.success || (C.errors && Object.entries(C.errors).forEach(([z, T]) => {
      v.setError(z, {
        message: T
      });
    }), C.rootMessage && v.setError("root", {
      message: C.rootMessage
    }));
  }, S = () => {
    v.reset();
  }, y = Gd(_), b = P(() => ({
    formName: t
  }), [t]);
  return h(Zr.Provider, {
    value: b,
    children: O(Zo, {
      ...v,
      children: [O("form", {
        onSubmit: v.handleSubmit(w),
        className: G(`flex flex-col ${Yi} max-w-[600px]`, l),
        children: [y.map((m, C) => {
          switch (m.type) {
            case "switchGroup":
              return h(ns, {
                fields: m.fields
              }, `switch-group-${C}`);
            case "field":
              return h(Qi, {
                field: m.item.field
              }, m.item.field.id);
            case "row":
              return h(is, {
                row: m.item
              }, `row-${m.index}`);
            case "section":
              return h("div", {
                className: C !== 0 ? gd : "",
                children: h(Id, {
                  section: m.item
                })
              }, m.item.id);
            default:
              return null;
          }
        }), x && h("p", {
          className: "text-base font-medium text-f1-foreground-critical",
          children: x.message
        }), d === "default" && c && h(We, {
          type: "submit",
          label: a,
          loading: N
        })]
      }), d === "action-bar" && h(Jo, {
        isOpen: D,
        label: p,
        primaryActions: [{
          label: a,
          onClick: v.handleSubmit(w)
        }],
        secondaryActions: u ? [{
          label: f,
          onClick: S
        }] : []
      })]
    })
  });
}
const Bu = he("F0Form", $d), jd = ae((i, e) => h(Fi, {
  ref: e,
  variant: "heading",
  ...i
}));
jd.displayName = "F0Heading";
const Wu = he(
  "F0GridStack",
  Hi
), _i = 16, Ud = je({
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
function ss(i, e = 0) {
  return i.flatMap((t) => [{
    id: t.id,
    depth: Math.min(e, 3)
  }, ...t.children ? ss(t.children, e + 1) : []]);
}
function Vd(i, e) {
  const t = i.length;
  if (t <= _i) return i;
  const n = t / (_i - 1), r = new Set(Array.from({
    length: _i - 1
  }, (s, o) => Math.min(Math.floor(o * n), t - 1)));
  if (r.add(t - 1), e) {
    const s = i.findIndex((o) => o.id === e);
    if (s !== -1 && !r.has(s)) {
      const o = [...r].reduce((a, l) => Math.abs(l - s) < Math.abs(a - s) ? l : a);
      r.delete(o), r.add(s);
    }
  }
  return [...r].sort((s, o) => s - o).map((s) => i[s]);
}
function qd({ items: i, activeItem: e, className: t, align: n = "left", variant: r = "dark" }) {
  const s = P(() => Vd(ss(i), e), [i, e]);
  return h("div", {
    className: G("flex flex-col justify-center gap-2 py-3", n === "right" ? "items-end" : "items-start", t),
    children: s.map((o) => h("div", {
      className: Ud({
        depth: o.depth,
        variant: r,
        active: o.id === e
      })
    }, o.id))
  });
}
const Kd = 300, Xd = 0, Yd = je({
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
function Zd({ title: i, items: e, className: t, activeItem: n, collapsible: r = !1, showChildrenCounter: s = !1, barsAlign: o = "left", size: a = "md", variant: l = "light" }) {
  const [d, c] = F(!1), u = M(!1), f = (_) => {
    _ && !d && (u.current = !0), c(_);
  }, p = U((_) => {
    !_ || !u.current || (u.current = !1, requestAnimationFrame(() => {
      _.querySelector("[data-active]")?.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }));
  }, []);
  return O(zs, {
    open: d,
    onOpenChange: f,
    openDelay: Xd,
    closeDelay: Kd,
    children: [h(Ls, {
      asChild: !0,
      children: h("button", {
        className: G($n(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", t),
        "aria-label": i ?? "Menu",
        children: h(qd, {
          items: e,
          activeItem: n,
          align: o,
          variant: l
        })
      })
    }), h(Ps, {
      ref: p,
      side: o === "left" ? "right" : "left",
      align: "center",
      sideOffset: -28,
      className: G(Yd({
        size: a
      }), !i && "pt-2", "scrollbar-macos"),
      children: h(Qo, {
        title: i,
        items: e,
        activeItem: n,
        collapsible: r,
        hideChildrenCounter: !s,
        scrollable: !1
      })
    })]
  });
}
const Gu = he(
  "F0TableOfContentPopover",
  Zd
), Jd = ({ benefits: i }) => h("div", {
  className: "flex flex-col gap-2",
  children: i.map((e, t) => h(Qd, {
    text: e
  }, t))
}), Qd = ({ text: i }) => O("div", {
  className: "flex flex-row items-start gap-2",
  children: [h(Fn, {
    icon: Is,
    size: "md",
    className: "text-f1-icon-positive"
  }), h("span", {
    children: i
  })]
}), os = ae(({ title: i, image: e, benefits: t, actions: n, withShadow: r = !0, module: s, moduleName: o, tag: a, promoTag: l }, d) => O("div", {
  ref: d,
  className: G("bg-white flex flex-row rounded-xl border border-f1-border-secondary", r && "shadow-md"),
  children: [h("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: h("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), O("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [O("div", {
      className: "flex flex-col gap-5",
      children: [O("div", {
        className: "flex flex-col gap-2",
        children: [O("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && h(qn, {
            module: s
          }), o && h("p", {
            className: "text-base font-medium text-f1-foreground",
            children: o
          })]
        }), (a || l) && O("div", {
          className: "flex justify-start gap-2",
          children: [a && h(Ms, {
            icon: a.icon,
            text: a.label
          }), l && h(ea, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), h("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: i
        })]
      }), h(Jd, {
        benefits: t
      })]
    }), n && h("div", {
      className: "flex gap-3",
      children: n
    })]
  })]
}));
os.displayName = "ProductBlankslate";
function eu({ isOpen: i, onClose: e, title: t, children: n, module: r, portalContainer: s }) {
  const [o, a] = F(i);
  return H(() => {
    a(i);
  }, [i]), h(Hs, {
    open: o,
    onOpenChange: (d) => {
      a(d), d || e();
    },
    modal: !0,
    children: O(Fs, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [O("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [O(Bs, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [r && h(qn, {
            module: r,
            size: "lg"
          }), t]
        }), h(zi, {
          variant: "outline",
          icon: Kn,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), O(Un, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [n, h(Vn, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function $u({ isOpen: i, onClose: e, title: t, image: n, benefits: r, errorMessage: s, successMessage: o, loadingState: a, nextSteps: l, closeLabel: d, primaryAction: c, modalTitle: u, modalModule: f, secondaryAction: p, portalContainer: _, tag: v, promoTag: x, showResponseDialog: D = !0 }) {
  const [N, w] = F(i), [S, y] = F(null), [b, m] = F(!1), C = async () => {
    if (c?.onClick) {
      m(!0);
      try {
        await c.onClick(), w(!1), D && y("success");
      } catch {
        D && y("error");
      } finally {
        m(!1);
      }
    }
  }, z = () => {
    w(!1), e?.();
  }, T = b;
  return O(Et, {
    children: [h(eu, {
      isOpen: N,
      onClose: z,
      title: u,
      module: f,
      portalContainer: _,
      children: h("div", {
        className: "pb-4 pl-4",
        children: h(os, {
          title: t,
          image: n,
          benefits: r,
          withShadow: !1,
          tag: v,
          promoTag: x,
          actions: O("div", {
            className: "flex gap-3",
            children: [c && h(We, {
              variant: c.variant,
              label: T ? a.label : c.label,
              icon: c.icon || void 0,
              onClick: C,
              loading: c.loading,
              size: c.size
            }), p && h(We, {
              onClick: p.onClick,
              label: p.label,
              variant: p.variant,
              size: p.size,
              icon: p.icon
            })]
          })
        })
      })
    }), S && D && h(or, {
      open: !0,
      onClose: () => {
        z(), y(null);
      },
      success: S === "success",
      errorMessage: s,
      successMessage: o,
      nextSteps: l,
      closeLabel: d,
      portalContainer: _
    })]
  });
}
function tu({ mediaUrl: i, title: e, description: t, onClose: n, dismissible: r, width: s, trackVisibility: o, actions: a, showConfirmation: l = !0 }) {
  const [d, c] = F(!1), u = () => {
    c(!0), n && n();
  };
  H(() => {
    o && o(!d);
  }, [o, d]);
  const f = i?.includes(".mp4");
  return h(Et, {
    children: d ? null : O(ta, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [O(ia, {
        children: [r && h("div", {
          className: "absolute right-2 top-2 z-10",
          children: h(We, {
            variant: "ghost",
            icon: Kn,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          })
        }), O("div", {
          children: [h("div", {
            children: i && (f ? h("video", {
              src: i,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : h("img", {
              src: i,
              alt: e,
              className: "h-full w-full rounded-md"
            }))
          }), O("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [h(gn, {
              className: "text-lg font-medium",
              children: e
            }), h(gn, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), a && h(na, {
        className: "p-3",
        children: a.map((p) => p.type === "upsell" ? h(ar, {
          label: p.label,
          onRequest: p.onClick,
          errorMessage: p.errorMessage,
          successMessage: p.successMessage,
          loadingState: p.loadingState,
          nextSteps: p.nextSteps,
          closeLabel: p.closeLabel,
          showConfirmation: l && p.showConfirmation,
          variant: p.variant
        }, p.label) : h(We, {
          label: p.label,
          onClick: p.onClick,
          variant: p.variant
        }, p.label))
      })]
    })
  });
}
const iu = ae(function({ primaryAction: e, secondaryAction: t, ...n }, r) {
  const s = (l) => l.variant === "promote" ? h(ar, {
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
  }) : h(We, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), o = e?.variant !== "promote" ? e : void 0, a = t?.variant !== "promote" ? t : void 0;
  return O(ra, {
    ref: r,
    ...n,
    primaryAction: o,
    secondaryAction: a,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
iu.displayName = "UpsellingBanner";
function ju({ isOpen: i, setIsOpen: e, label: t, variant: n = "promote", size: r = "md", showIcon: s = !0, side: o = "right", align: a = "center", icon: l = Ws, mediaUrl: d, title: c, description: u, width: f = "300px", trackVisibility: p, actions: _, onClick: v, hideLabel: x = !1 }) {
  const [D, N] = F(!1), [w, S] = F(null), [y, b] = F(null), m = (R) => {
    e(R), v && v();
  }, C = async (R) => {
    if (R.type === "upsell") {
      b(R);
      try {
        await R.onClick(), R.showConfirmation && (N(!0), S("success"));
      } catch {
        N(!0), S("error");
      }
    }
  }, z = () => {
    S(null), N(!1), b(null), e(!1);
  }, T = i && !D, E = _?.map((R) => R.type === "upsell" ? {
    ...R,
    onClick: () => C(R)
  } : R);
  return O(Et, {
    children: [O(Wn, {
      open: T,
      onOpenChange: m,
      children: [h(Gn, {
        asChild: !0,
        children: h(We, {
          variant: n,
          label: t,
          size: r,
          icon: s ? l : void 0,
          onClick: () => e(i),
          hideLabel: x
        })
      }), h(jn, {
        side: o,
        align: a,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: h(tu, {
          mediaUrl: d,
          title: c,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: f,
          trackVisibility: p,
          actions: E,
          showConfirmation: !1
        })
      })]
    }), y?.type === "upsell" && y.showConfirmation && w && h(or, {
      open: !0,
      onClose: z,
      success: w === "success",
      errorMessage: y.errorMessage,
      successMessage: y.successMessage,
      nextSteps: y.nextSteps,
      closeLabel: y.closeLabel,
      portalContainer: null
    })]
  });
}
const nu = De(null), ru = ({ children: i, fullScreen: e = !0 }) => {
  const t = M(null), [n, r] = F(t.current);
  return Ks(() => {
    r(t.current);
  }, []), h(nu.Provider, {
    value: {
      element: n
    },
    children: h("div", {
      ref: t,
      id: "f0-layout",
      className: G({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: i
    })
  });
}, su = ({ children: i }) => h(aa, {
  reducedMotion: "user",
  children: i
}), Uu = ({ children: i, layout: e, link: t, privacyModeInitiallyEnabled: n, image: r, i18n: s, l10n: o, isDev: a = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: d = !1 }) => h(su, {
  children: h(Gs, {
    isDev: a,
    showExperimentalWarnings: d,
    children: h($s, {
      ...o,
      children: h(js, {
        ...s,
        children: h(Us, {
          ...t,
          children: h(ru, {
            ...e,
            children: h(Vs, {
              children: h(sa, {
                initiallyEnabled: n,
                children: h(qs, {
                  ...r,
                  children: h(oa, {
                    handler: l,
                    children: i
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}), Mn = (i) => `datacollection-${i}`, Vu = {
  get: async (i) => JSON.parse(
    localStorage.getItem(Mn(i)) ?? "{}"
  ),
  set: async (i, e) => {
    localStorage.setItem(Mn(i), JSON.stringify(e));
  }
};
export {
  Xu as A,
  zf as AiChatTranslationsProvider,
  vu as AreaChart,
  Yu as Await,
  yu as BarChart,
  Zu as Blockquote,
  bu as CategoryBarChart,
  Ju as ChatSpinner,
  Eu as ComboChart,
  hu as Dashboard,
  df as DndProvider,
  Qu as Em,
  eh as EmojiImage,
  th as F0ActionItem,
  ih as F0AiChat,
  nh as F0AiChatProvider,
  rh as F0AiChatTextArea,
  sh as F0AiCollapsibleMessage,
  oh as F0AiFullscreenChat,
  Mu as F0Alert,
  ah as F0Avatar,
  Ho as F0AvatarAlert,
  lh as F0AvatarCompany,
  uf as F0AvatarDate,
  ch as F0AvatarEmoji,
  dh as F0AvatarFile,
  Ss as F0AvatarIcon,
  hf as F0AvatarList,
  qn as F0AvatarModule,
  uh as F0AvatarPerson,
  hh as F0AvatarTeam,
  Du as F0BigNumber,
  We as F0Button,
  fh as F0ButtonDropdown,
  ph as F0ButtonToggle,
  ff as F0Card,
  As as F0Checkbox,
  Lu as F0ChipList,
  sr as F0DatePicker,
  gh as F0Dialog,
  mh as F0DialogContext,
  vh as F0DialogProvider,
  yh as F0EventCatcherProvider,
  pd as F0FilterPickerContent,
  Bu as F0Form,
  Wu as F0GridStack,
  Lf as F0HILActionConfirmation,
  jd as F0Heading,
  Fn as F0Icon,
  Ns as F0Link,
  bh as F0MessageSources,
  xh as F0OneIcon,
  wh as F0OneSwitch,
  Uu as F0Provider,
  gi as F0Select,
  Gu as F0TableOfContentPopover,
  pf as F0TagAlert,
  Io as F0TagBalance,
  gf as F0TagCompany,
  mf as F0TagDot,
  vf as F0TagList,
  yf as F0TagPerson,
  Ms as F0TagRaw,
  ea as F0TagStatus,
  bf as F0TagTeam,
  gr as F0Text,
  Ch as F0Thinking,
  _h as FullscreenChatContext,
  Eh as GROUP_ID_SYMBOL,
  Dh as H1,
  Sh as H2,
  Rh as H3,
  mu as HomeLayout,
  Nh as Hr,
  Th as Image,
  fu as Layout,
  Ah as Li,
  xu as LineChart,
  kh as Ol,
  Oh as OneFilterPicker,
  zh as P,
  wu as PieChart,
  Lh as Pre,
  sa as PrivacyModeProvider,
  os as ProductBlankslate,
  xf as ProductCard,
  $u as ProductModal,
  tu as ProductWidget,
  _u as ProgressBarChart,
  pu as StandardLayout,
  Ph as Strong,
  Mh as Table,
  wf as Tag,
  Cf as TagCounter,
  Ih as Td,
  Hh as Th,
  gu as TwoColumnLayout,
  Fh as Ul,
  or as UpsellRequestResponseDialog,
  iu as UpsellingBanner,
  ar as UpsellingButton,
  ju as UpsellingPopover,
  Cu as VerticalBarChart,
  Pf as actionItemStatuses,
  Mf as aiTranslations,
  uu as avatarVariants,
  Bh as buildTranslations,
  Tu as buttonDropdownSizes,
  Nu as buttonDropdownVariants,
  Ru as buttonSizes,
  Au as buttonToggleSizes,
  ku as buttonToggleVariants,
  Su as buttonVariants,
  _f as cardImageFits,
  Ef as cardImageSizes,
  Df as createAtlaskitDriver,
  Wh as createDataSourceDefinition,
  Sa as createPageLayoutBlock,
  Ra as createPageLayoutBlockGroup,
  Vu as dataCollectionLocalStorageHandler,
  Pu as datepickerSizes,
  Bf as defaultTranslations,
  Gh as downloadTableAsExcel,
  Ji as evaluateRenderIf,
  he as experimental,
  Iu as f0FormField,
  $h as f0MarkdownRenderers,
  Qr as generateAnchorId,
  jh as getAnimationVariants,
  Uh as getDataSourcePaginationType,
  Vh as getEmojiLabel,
  ts as getF0Config,
  Fu as getSchemaDefinition,
  Hu as hasF0Config,
  md as inferFieldType,
  qh as isInfiniteScrollPagination,
  Kh as isPageBasedPagination,
  K as isZodType,
  Ou as linkVariants,
  Xh as modules,
  If as oneIconSizes,
  Sf as predefinedPresets,
  Rf as selectSizes,
  zu as tagDotColors,
  Ue as unwrapZodSchema,
  Yh as useAiChat,
  Hf as useAiChatTranslations,
  Zh as useData,
  Jh as useDataSource,
  Qh as useDefaultCopilotActions,
  Nf as useDndEvents,
  Tf as useDraggable,
  Af as useDroppableList,
  ef as useEmojiConfetti,
  tf as useF0Dialog,
  nf as useGroups,
  rf as useMessageSourcesAction,
  sf as useOrchestratorThinkingAction,
  kf as usePrivacyMode,
  of as useReducedMotion,
  Wd as useSchemaDefinition,
  af as useSelectable,
  lf as useXRay
};
