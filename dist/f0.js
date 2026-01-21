import { c as j, a as Ri, b as Nn, m as Si, B as Ni, O as Yr, p as qr, w as An, S as we, u as Ai, F as On, d as Jr, A as Zr, D as Qr, e as es, f as Ce, C as ve, g as ts, h as is, i as kn, j as ns, k as It, P as Tn, l as zn, n as rs, o as Pn, q as Mn, r as Ln, s as ss, t as os, v as Qi, x as as, y as In, z as ls, E as cs, G as ds, H as us, J as hs, K as Hn, L as qe, M as fs, N as en, Q as gs, U as ps, R as ms, I as vs, T as ys, X as bs, V as xs, W as ws } from "./index-CP469c2X.js";
import { ae as Cd, at as _d, Y as Ed, Z as Dd, _ as Rd, $ as Sd, a0 as Nd, a2 as Ad, a3 as Od, a4 as kd, a5 as Td, a6 as zd, a7 as Pd, a8 as Md, a9 as Ld, ap as Id, ab as Hd, ac as Bd, af as Fd, ad as Wd, aq as Gd, ak as $d, an as jd, aj as Ud, au as Kd, ai as Vd, ah as Xd, a1 as Yd, ag as qd, al as Jd, av as Zd, aa as Qd, am as eu, as as tu, ao as iu, ar as nu } from "./index-CP469c2X.js";
import { jsx as f, jsxs as P, Fragment as xt } from "react/jsx-runtime";
import M, { forwardRef as oe, useRef as L, useImperativeHandle as Cs, Children as Ht, createContext as Ee, useContext as ge, useState as B, useMemo as I, useEffect as H, useCallback as U, useLayoutEffect as yi, createElement as tn, isValidElement as Bn, Fragment as _s, memo as Es, useReducer as Ds, cloneElement as Rs, PureComponent as Ss } from "react";
import { createPortal as Oi, unstable_batchedUpdates as Ot } from "react-dom";
import { L as Fn, C as Ns, i as Wn, D as As, S as nn, a as Os, f as ui, b as lt, c as ks, A as Ts, d as kt, e as Gn, E as zs, g as Pt, h as Ps, j as Ms, k as Ls, l as Ve, m as $n, u as Is, G as Hs, n as Bs, o as rn, p as Fs, q as jn, r as Ws, B as Un, X as Kn, Y as bi, s as Gs, t as Vn, v as $s, w as js, x as Us, y as Ks, z as Vs, F as Xs, H as Ys, I as qs, J as sn, K as Js, M as ct, N as hi, O as Zs, P as Qs, Q as eo, R as to, T as io, U as no, V as ro, W as so, Z as oo, _ as ao, $ as lo, a0 as on, a1 as co, a2 as uo, a3 as Xn, a4 as ho, a5 as fo, a6 as an, a7 as go, a8 as Yn, a9 as po, aa as Mt, ab as mo, ac as vo, ad as yo } from "./hooks-U_6cNUR7.js";
import { ax as su, ae as ou, af as au, ag as lu, aj as cu, ak as du, ao as uu, ap as hu, aq as fu, as as gu, at as pu, au as mu, av as vu, an as yu, ar as bu, ah as xu, ai as wu, aw as Cu, al as _u, am as Eu, ay as Du, az as Ru, aA as Su, aB as Nu } from "./hooks-U_6cNUR7.js";
import { defaultTranslations as Ou } from "./i18n-provider-defaults.js";
import './f0.css';const bo = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, xo = oe(function({ widgets: e, children: t }, i) {
  const r = L(null);
  Cs(i, () => r.current);
  const s = Ht.toArray(e).filter((o) => !!o).map((o, a) => f("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: o
  }, a));
  return f(Fn, {
    layout: "home",
    children: P("div", {
      ref: r,
      className: "@container",
      children: [P("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [f(Ns, {
          columns: bo,
          showArrows: !1,
          children: s
        }), f("main", {
          children: t
        })]
      }), P("div", {
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
}), wo = oe(function({ children: e, sideContent: t, mainColumnPosition: i = "left", sticky: r = !1 }, s) {
  return f("div", {
    ref: s,
    className: "h-full",
    children: P("div", {
      className: j("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", r && "md:sticky md:top-0 md:max-h-full"),
      children: [f("main", {
        className: j("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", r ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", i === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), f(Co, {
        sticky: r,
        className: j("order-1", i === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), Co = ({ children: n, className: e }) => f("aside", {
  className: j("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: n
}), _o = Ri({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), qn = M.forwardRef(({ children: n, variant: e, className: t, ...i }, r) => f(Fn, {
  layout: "standard",
  children: f("section", {
    ref: r,
    className: j("relative flex-1 overflow-auto", t),
    ...i,
    children: f("div", {
      className: j(_o({
        variant: e
      })),
      children: n
    })
  })
}));
qn.displayName = "StandardLayout";
const Jn = Ee(null);
function Zn() {
  const n = ge(Jn);
  if (!n)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return n;
}
function Eo(n) {
  const { content: e, ...t } = n;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function Xe(n) {
  const e = Eo(n);
  return n.subGridOpts?.children && (e.subGridOpts = {
    ...n.subGridOpts,
    children: n.subGridOpts.children.map(
      (t) => Xe(t)
    )
  }), e;
}
const Do = ["noMove", "noResize", "locked", "w", "h", "x", "y"], Le = 200;
function Ro(n) {
  const e = n.cloneNode(!0);
  return n.querySelectorAll("canvas").forEach((i) => {
    if (i.width > 0 && i.height > 0)
      try {
        const r = i.toDataURL("image/png"), s = e.querySelectorAll("canvas"), o = Array.from(n.querySelectorAll("canvas")).indexOf(i), a = s[o];
        if (a && a.parentElement) {
          const l = document.createElement("img");
          l.src = r, l.style.width = `${i.width}px`, l.style.height = `${i.height}px`, l.style.display = "block", i.className && (l.className = i.className), i.id && (l.id = i.id), a.parentElement.replaceChild(l, a);
        }
      } catch (r) {
        console.warn("Failed to convert canvas to image:", r);
      }
  }), e.innerHTML;
}
function So({ children: n, options: e, onResizeStop: t, onChange: i, widgets: r }) {
  const [s, o] = B(null), a = L(null), l = L(!1), d = I(() => ({
    ...e,
    children: (r || []).map((w) => Xe(w))
  }), [e, r]), [c, u] = B(() => {
    const w = /* @__PURE__ */ new Map(), R = r || [], v = (y) => {
      y.id && y.content && w.set(y.id, y.content), y.subGridOpts?.children && y.subGridOpts.children.forEach((m) => {
        v(m);
      });
    };
    return R.forEach((y) => {
      v(y);
    }), w;
  }), h = L(c);
  H(() => {
    h.current = c;
  }, [c]);
  const [g, _] = B(() => {
    const w = /* @__PURE__ */ new Map(), R = r || [], v = (y) => {
      y.id && y._originalContent !== void 0 && w.set(y.id, y._originalContent), y.subGridOpts?.children && y.subGridOpts.children.forEach((m) => {
        v(m);
      });
    };
    return R.forEach((y) => {
      v(y);
    }), w;
  }), b = L(g);
  H(() => {
    b.current = g;
  }, [g]);
  const [x, D] = B(() => {
    const w = /* @__PURE__ */ new Map(), R = r || [], v = (y) => {
      if (y.id) {
        const m = Xe(y);
        w.set(y.id, m);
      }
      y.subGridOpts?.children && y.subGridOpts.children.forEach((m) => {
        v(m);
      });
    };
    return R.forEach((y) => {
      v(y);
    }), w;
  });
  Nn(() => {
    if (!s) return;
    const w = s.save();
    if (!Array.isArray(w))
      return;
    const R = w.map((A) => A.id), v = r || [], y = v.map((A) => A.id), m = v.filter((A) => !R.includes(A.id));
    m.length > 0 && (m.forEach((A) => {
      A.content && h.current.set(A.id, A.content), A._originalContent !== void 0 && b.current.set(A.id, A._originalContent);
    }), m.forEach((A) => {
      const C = Xe(A);
      s.addWidget(C);
    }), D((A) => {
      const C = new Map(A);
      return m.forEach((S) => {
        const O = Xe(S);
        C.set(S.id, O);
      }), C;
    }), u((A) => {
      const C = new Map(A);
      return m.forEach((S) => {
        S.content && C.set(S.id, S.content);
      }), C;
    }), _((A) => {
      const C = new Map(A);
      return m.forEach((S) => {
        S._originalContent !== void 0 && C.set(S.id, S._originalContent);
      }), C;
    }));
    const E = w.filter((A) => !y.includes(A.id));
    if (E.length > 0) {
      const A = E.map((C) => C.id).filter(Boolean);
      A.forEach((C) => {
        setTimeout(() => {
          h.current.delete(C), b.current.delete(C);
        }, Le);
      }), E.forEach((C) => {
        const S = s.el.querySelector(`[gs-id="${C.id}"]`);
        S && setTimeout(() => {
          s.removeWidget(S, !0);
        }, Le);
      }), D((C) => {
        const S = new Map(C);
        return A.forEach((O) => {
          setTimeout(() => {
            S.delete(O);
          }, Le);
        }), S;
      }), u((C) => {
        const S = new Map(C);
        return A.forEach((O) => {
          if (S.get(O)) {
            const Q = s.el.querySelector(`[gs-id="${O}"] .grid-stack-item-content`);
            let ee = "";
            Q && (ee = Ro(Q)), S.set(O, f(Si.div, {
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
                  duration: Le / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: Le / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: Le / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: ee
              }
            }));
          }
          setTimeout(() => {
            S.delete(O);
          }, Le);
        }), S;
      }), _((C) => {
        const S = new Map(C);
        return A.forEach((O) => {
          setTimeout(() => {
            S.delete(O);
          }, Le);
        }), S;
      });
    }
    const T = v.filter((A) => R.includes(A.id));
    if (T.length > 0) {
      const A = [];
      T.forEach((C) => {
        const S = w.find((F) => F.id === C.id);
        if (!S)
          return;
        const O = Do.filter((F) => S[F] !== C[F]);
        if (O.length > 0) {
          const F = {}, Q = ["w", "h", "x", "y"], ee = ["noMove", "noResize", "locked"], K = O.filter(($) => Q.includes($)), ue = O.filter(($) => ee.includes($));
          if (K.length > 0 && ue.length > 0 && K.length + ue.length === O.length ? ue.forEach(($) => {
            const he = C[$];
            he !== void 0 && (F[$] = he);
          }) : O.forEach(($) => {
            const he = C[$];
            he !== void 0 && (F[$] = he);
          }), Object.keys(F).length > 0) {
            const $ = s.el.querySelector(`[gs-id="${C.id}"]`);
            $ && A.push({
              id: C.id,
              element: $,
              updateOptions: F
            });
          }
        }
      }), T.forEach((C) => {
        C.content && h.current.set(C.id, C.content), C._originalContent !== void 0 && b.current.set(C.id, C._originalContent);
      }), A.forEach(({ element: C, updateOptions: S }) => {
        try {
          s.update(C, S);
        } catch (O) {
          console.warn("Error updating widget:", O);
        }
      }), D((C) => {
        const S = new Map(C);
        return T.forEach((O) => {
          const F = Xe(O);
          S.set(O.id, F);
        }), S;
      }), u((C) => {
        const S = new Map(C);
        return T.forEach((O) => {
          O.content && S.set(O.id, O.content);
        }), S;
      }), _((C) => {
        const S = new Map(C);
        return T.forEach((O) => {
          O._originalContent !== void 0 && S.set(O.id, O._originalContent);
        }), S;
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
      const R = w.map((v) => {
        const y = v.id;
        if (!y) return null;
        const m = h.current.get(y), E = b.current.get(y), T = v;
        return {
          ...v,
          id: y,
          w: v.w ?? 1,
          h: v.h ?? 1,
          x: v.x ?? 0,
          y: v.y ?? 0,
          meta: T.meta,
          _originalContent: E,
          content: m ?? f("div", {
            children: "No content"
          })
        };
      }).filter((v) => v !== null);
      i?.(R);
    }
  }, [s]);
  return H(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const w = (R, v) => {
      t?.(R, v);
    };
    try {
      s.on("resizestop", w), s.on("change added removed", N);
    } catch (R) {
      console.error("Error attaching GridStack event listeners:", R);
      return;
    }
    return () => {
      const R = a.current;
      if (R && R.el)
        try {
          R.off("resizestop"), R.off("change added removed");
        } catch (v) {
          console.warn("Error cleaning up GridStack event listeners:", v);
        }
    };
  }, [s, t, N]), H(() => {
    a.current = s;
  }, [s]), H(() => {
    s && s.el && s.el.parentElement && l.current && N();
  }, [s]), f(Jn.Provider, {
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
    children: n
  });
}
const Qn = Ee(null);
function No() {
  const n = ge(Qn);
  if (!n)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return n;
}
const Ao = Ee(null);
function Oo() {
  const { _reactContentMap: n } = Zn(), { getWidgetContainer: e } = No();
  return f(xt, {
    children: Array.from(n.value.entries()).map(([t, i]) => {
      const r = e(t);
      return r ? f(Ao.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: i && Oi(i, r)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function ko(n, e, t, i, r) {
  const s = (...o) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + r + " and has been replaced with `" + i + "`. It will be **removed** in a future release"), e.apply(n, o));
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
        e[r] === null || e[r] === void 0 ? e[r] = i[r] : typeof i[r] == "object" && typeof e[r] == "object" && p.defaults(e[r], i[r]);
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
        i[0] === "_" || r === s ? delete e[i] : r && typeof r == "object" && s !== void 0 && (p.removeInternalAndSame(r, s), Object.keys(r).length || delete e[i]);
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
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : p.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, i) {
    const r = p.getScrollElement(e);
    if (!r)
      return;
    const s = e.getBoundingClientRect(), o = r.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(o.bottom, a), d = s.top - Math.max(o.top, 0), c = r.scrollTop;
    d < 0 && i < 0 ? e.offsetHeight > o.height ? r.scrollTop += i : r.scrollTop += Math.abs(d) > Math.abs(i) ? i : d : l > 0 && i > 0 && (e.offsetHeight > o.height ? r.scrollTop += i : r.scrollTop += l > i ? i : l), t.top += r.scrollTop - c;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, i) {
    const r = p.getScrollElement(t), s = r.clientHeight, o = r === p.getScrollElement() ? 0 : r.getBoundingClientRect().top, a = e.clientY - o, l = a < i, d = a > s - i;
    l ? r.scrollBy({ behavior: "smooth", top: a - i }) : d && r.scrollBy({ behavior: "smooth", top: i - (s - a) });
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
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], i = p.clone(e);
    for (const r in i)
      i.hasOwnProperty(r) && typeof i[r] == "object" && r.substring(0, 2) !== "__" && !t.find((s) => s === r) && (i[r] = p.cloneDeep(e[r]));
    return i;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let i;
    typeof t == "string" ? i = p.getElement(t) : i = t, i && i.appendChild(e);
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
    p.addElStyles(t, {
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
  _fixCollisions(e, t = e, i, r = {}) {
    if (this.sortNodes(-1), i = i || this.collide(e, t), !i)
      return !1;
    if (e._moving && !r.nested && !this.float && this.swap(e, i))
      return !0;
    let s = t;
    !this._loading && this._useEntireRowArea(e, t) && (s = { x: 0, w: this.column, y: t.y, h: t.h }, i = this.collide(e, s, r.skip));
    let o = !1;
    const a = { nested: !0, pack: !1 };
    let l = 0;
    for (; i = i || this.collide(e, s, r.skip); ) {
      if (l++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let d;
      if (i.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(i, { ...i, y: e.y }, e) || !this.collide(i, { ...i, y: t.y - i.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: i.y + i.h, ...a };
        d = this._loading && p.samePos(e, c) ? !0 : this.moveNode(e, c), (i.locked || this._loading) && d ? p.copyPos(t, e) : !i.locked && d && r.pack && (this._packNodes(), t.y = i.y + i.h, p.copyPos(e, t)), o = o || d;
      } else
        d = this.moveNode(i, { ...i, y: t.y + t.h, skip: e, ...a });
      if (!d)
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
    return this.nodes.find((o) => o._id !== r && o._id !== s && p.isIntercepted(o, t));
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
    return this.nodes.filter((o) => o._id !== r && o._id !== s && p.isIntercepted(o, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, i) {
    if (!t.rect || !e._rect)
      return;
    const r = e._rect, s = { ...t.rect };
    s.y > r.y ? (s.h += s.y - r.y, s.y = r.y) : s.h += r.y - s.y, s.x > r.x ? (s.w += s.x - r.x, s.x = r.x) : s.w += r.x - s.x;
    let o, a = 0.5;
    for (let l of i) {
      if (l.locked || !l._rect)
        break;
      const d = l._rect;
      let c = Number.MAX_VALUE, u = Number.MAX_VALUE;
      r.y < d.y ? c = (s.y + s.h - d.y) / d.h : r.y + r.h > d.y + d.h && (c = (d.y + d.h - s.y) / d.h), r.x < d.x ? u = (s.x + s.w - d.x) / d.w : r.x + r.w > d.x + d.w && (u = (d.x + d.w - s.x) / d.w);
      const h = Math.min(u, c);
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
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (r = p.isTouching(e, t)))
      return i();
    if (r !== !1) {
      if (e.w === t.w && e.x === t.x && (r || (r = p.isTouching(e, t)))) {
        if (t.y < e.y) {
          const s = e;
          e = t, t = s;
        }
        return i();
      }
      if (r !== !1) {
        if (e.h === t.h && e.y === t.y && (r || (r = p.isTouching(e, t)))) {
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
    return this.nodes = [], s.forEach((o, a, l) => {
      let d;
      o.locked || (o.autoPosition = !0, e === "list" && a && (d = l[a - 1])), this.addNode(o, !1, d);
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
    e._id = e._id ?? Ae._idSeq++;
    const i = e.id;
    if (i) {
      let s = 1;
      for (; this.nodes.find((o) => o.id === e.id && o !== e); )
        e.id = i + "_" + s++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const r = { x: 0, y: 0, w: 1, h: 1 };
    return p.defaults(e, r), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, p.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = r.x, e.autoPosition = !0), isNaN(e.y) && (e.y = r.y, e.autoPosition = !0), isNaN(e.w) && (e.w = r.w), isNaN(e.h) && (e.h = r.h), this.nodeBoundFix(e, t), e;
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
    const i = e._orig || p.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const s = { ...e };
      s.autoPosition || s.x === void 0 ? (delete s.x, delete s.y) : s.x = Math.min(this.defaultColumn - 1, s.x), s.w = Math.min(this.defaultColumn, s.w || 1), this.cacheOneLayout(s, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), p.samePos(e, i) || (e._dirty = !0), this;
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
  findEmptyPosition(e, t = this.nodes, i = this.column, r) {
    const s = r ? r.y * i + (r.x + r.w) : 0;
    let o = !1;
    for (let a = s; !o; ++a) {
      const l = a % i, d = Math.floor(a / i);
      if (l + e.w > i)
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
    const r = new Ae({
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
      const a = this.nodes.find((l) => l._id === o._id);
      a && (p.copyPos(a, o), a._dirty = !0);
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
    }), i = { ...e };
    return this.cleanupNode(i), delete i.el, delete i._id, delete i.content, delete i.grid, t.addNode(i), t.getRow() <= this.maxRow ? (e._willFitPos = p.copyPos({}, i), !0) : !1;
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
    const r = e.w !== t.w || e.h !== t.h, s = p.copyPos({}, e, !0);
    if (p.copyPos(s, t), this.nodeBoundFix(s, r), p.copyPos(t, s), !t.forceCollide && p.samePos(e, t))
      return !1;
    const o = p.copyPos({}, e), a = this.collideAll(e, s, t.skip);
    let l = !0;
    if (a.length) {
      const d = e._moving && !t.nested;
      let c = d ? this.directionCollideCoverage(e, t, a) : a[0];
      if (d && c && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const u = p.areaIntercept(t.rect, c._rect), h = p.area(t.rect), g = p.area(c._rect);
        u / (h < g ? h : g) > 0.8 && (c.grid.makeSubGrid(c.el, void 0, e), c = void 0);
      }
      c ? l = !this._fixCollisions(e, s, c, t) : (l = !1, i && delete t.pack);
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
  save(e = !0, t, i) {
    const r = this._layouts?.length || 0;
    let s;
    r && (i ? i !== this.column && (s = this._layouts[i]) : this.column !== r - 1 && (s = this._layouts[r - 1]));
    const o = [];
    return this.sortNodes(), this.nodes.forEach((a) => {
      const l = s?.find((c) => c._id === a._id), d = { ...a, ...l || {} };
      p.removeInternalForSave(d, !e), t && t(a, d), o.push(d);
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
    let s = [], o = r ? this.nodes : p.sort(this.nodes, -1);
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
      this.compact(i, !1);
    else {
      if (o.length)
        if (typeof i == "function")
          i(t, e, s, o);
        else {
          const a = r || i === "none" ? 1 : t / e, l = i === "move" || i === "moveScale", d = i === "scale" || i === "moveScale";
          o.forEach((c) => {
            c.x = t === 1 ? 0 : l ? Math.round(c.x * a) : Math.min(c.x, t - 1), c.w = t === 1 || e === 1 ? 1 : d ? Math.round(c.w * a) || 1 : Math.min(c.w, t), s.push(c);
          }), o = [];
        }
      s = p.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((a) => {
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
        const a = s.id ? this.nodes.find((l) => l.id === s.id) : void 0;
        s._id = a?._id ?? Ae._idSeq++;
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
    e._id = e._id ?? Ae._idSeq++;
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
Ae._idSeq = 0;
const se = {
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
class z {
}
const fe = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class _e {
}
function Bt(n, e) {
  n.touches.length > 1 || (n.cancelable && n.preventDefault(), p.simulateMouseEvent(n.changedTouches[0], e));
}
function er(n, e) {
  n.cancelable && n.preventDefault(), p.simulateMouseEvent(n, e);
}
function Ft(n) {
  _e.touchHandled || (_e.touchHandled = !0, Bt(n, "mousedown"));
}
function Wt(n) {
  _e.touchHandled && Bt(n, "mousemove");
}
function Gt(n) {
  if (!_e.touchHandled)
    return;
  _e.pointerLeaveTimeout && (window.clearTimeout(_e.pointerLeaveTimeout), delete _e.pointerLeaveTimeout);
  const e = !!z.dragElement;
  Bt(n, "mouseup"), e || Bt(n, "click"), _e.touchHandled = !1;
}
function $t(n) {
  n.pointerType !== "mouse" && n.target.releasePointerCapture(n.pointerId);
}
function ln(n) {
  z.dragElement && n.pointerType !== "mouse" && er(n, "mouseenter");
}
function cn(n) {
  z.dragElement && n.pointerType !== "mouse" && (_e.pointerLeaveTimeout = window.setTimeout(() => {
    delete _e.pointerLeaveTimeout, er(n, "mouseleave");
  }, 10));
}
class Zt {
  constructor(e, t, i) {
    this.host = e, this.dir = t, this.option = i, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Zt.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), fe && (this.el.addEventListener("touchstart", Ft), this.el.addEventListener("pointerdown", $t)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), fe && (this.el.removeEventListener("touchstart", Ft), this.el.removeEventListener("pointerdown", $t)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), fe && (this.el.addEventListener("touchmove", Wt), this.el.addEventListener("touchend", Gt)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), fe && (this.el.removeEventListener("touchmove", Wt), this.el.removeEventListener("touchend", Gt)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
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
Zt.prefix = "ui-resizable-";
class ki {
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
class pt extends ki {
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
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), z.overResizeElement === this && delete z.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    z.overResizeElement || z.dragElement || (z.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    z.overResizeElement === this && (delete z.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Zt(this.el, e, {
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
    const i = p.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(i, this._ui()), this.triggerEvent("resize", i), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = p.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = pt._originStyleProp.map((i) => this.el.style[i]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = p.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return pt._originStyleProp.forEach((e, t) => {
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
    let a, l;
    t.indexOf("e") > -1 ? r.width += s : t.indexOf("w") > -1 && (r.width -= s, r.left += s, a = !0), t.indexOf("s") > -1 ? r.height += o : t.indexOf("n") > -1 && (r.height -= o, r.top += o, l = !0);
    const d = this._constrainSize(r.width, r.height, a, l);
    return Math.round(r.width) !== Math.round(d.width) && (t.indexOf("w") > -1 && (r.left += r.width - d.width), r.width = d.width), Math.round(r.height) !== Math.round(d.height) && (t.indexOf("n") > -1 && (r.top += r.height - d.height), r.height = d.height), r;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, i, r) {
    const s = this.option, o = (i ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, a = s.minWidth / this.rectScale.x || e, l = (r ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, d = s.minHeight / this.rectScale.y || t, c = Math.min(o, Math.max(a, e)), u = Math.min(l, Math.max(d, t));
    return { width: c, height: u };
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
pt._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const To = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class mt extends ki {
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
      e.addEventListener("mousedown", this._mouseDown), fe && (e.addEventListener("touchstart", Ft), e.addEventListener("pointerdown", $t));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), fe && (t.removeEventListener("touchstart", Ft), t.removeEventListener("pointerdown", $t));
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
    if (!z.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(To) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete z.dragElement, delete z.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), fe && (e.currentTarget.addEventListener("touchmove", Wt), e.currentTarget.addEventListener("touchend", Gt)), e.preventDefault(), document.activeElement && document.activeElement.blur(), z.mouseHandled = !0), !0;
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
      if (this._dragFollow(e), z.pauseDrag) {
        const i = Number.isInteger(z.pauseDrag) ? z.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), i);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, z.dragElement = this;
      const i = this.el.gridstackNode?.grid;
      i ? z.dropElement = i.el.ddElement.ddDroppable : delete z.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = p.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const r = p.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(r, this.ui()), this.triggerEvent("dragstart", r), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), fe && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", Wt, !0), e.currentTarget.removeEventListener("touchend", Gt, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), z.dropElement?.el === this.el.parentElement && delete z.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = p.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), z.dropElement && z.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete z.dragElement, delete z.dropElement, delete z.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, i = t?.grid || z.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), i?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && i && (e.key === "r" || e.key === "R")) {
      if (!p.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, i.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", p.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = p.cloneNode(this.el)), e.parentElement || p.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = mt.originStyleProp.map((t) => this.el.style[t]), e;
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
      t.style.transition = this.dragElementOriginStyle.transition = "none", mt.originStyleProp.forEach((r) => t.style[r] = this.dragElementOriginStyle[r] || null), setTimeout(() => t.style.transition = i, 50);
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
mt.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class zo extends ki {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), fe && (this.el.addEventListener("pointerenter", ln), this.el.addEventListener("pointerleave", cn)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), fe && (this.el.removeEventListener("pointerenter", ln), this.el.removeEventListener("pointerleave", cn)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!z.dragElement || !this._canDrop(z.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), z.dropElement && z.dropElement !== this && z.dropElement._mouseLeave(e, !0), z.dropElement = this;
    const t = p.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(z.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!z.dragElement || z.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const i = p.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(i, this._ui(z.dragElement)), this.triggerEvent("dropout", i), z.dropElement === this && (delete z.dropElement, !t)) {
      let r, s = this.el.parentElement;
      for (; !r && s; )
        r = s.ddElement?.ddDroppable, s = s.parentElement;
      r && r._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = p.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(z.dragElement)), this.triggerEvent("drop", t);
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
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new mt(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new pt(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new zo(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Po {
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
      i(s, z.dragElement ? z.dragElement.el : s.target, z.dragElement ? z.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((i) => i.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const i = e.gridstack || t !== "destroy" && t !== "disable", r = p.getElements(e);
    return r.length ? r.map((o) => o.ddElement || (i ? Ti.init(o) : null)).filter((o) => o) : [];
  }
}
const J = new Po();
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
    const i = k.getGridElement(t);
    return i ? (i.gridstack || (i.gridstack = new k(i, p.cloneDeep(e))), i.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
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
    return typeof document > "u" || (k.getGridElements(t).forEach((r) => {
      r.gridstack || (r.gridstack = new k(r, p.cloneDeep(e))), i.push(r.gridstack);
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
    return (!e.classList.contains("grid-stack") || k.addRemoveCB) && (k.addRemoveCB ? i = k.addRemoveCB(e, t, !0, !0) : i = p.createDiv(["grid-stack", t.class], e)), k.init(t, i);
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
      this._placeholder = p.createDiv([this.opts.placeholderClass, se.itemClass, this.opts.itemClass]);
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
    const i = p.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const r = t.columnOpts;
    if (r) {
      const d = r.breakpoints;
      !r.columnWidth && !d?.length ? delete t.columnOpts : (r.columnMax = r.columnMax || 12, d?.length > 1 && d.sort((c, u) => (u.w || 0) - (c.w || 0)));
    }
    const s = {
      ...p.cloneDeep(se),
      column: p.toNumber(e.getAttribute("gs-column")) || se.column,
      minRow: i || p.toNumber(e.getAttribute("gs-min-row")) || se.minRow,
      maxRow: i || p.toNumber(e.getAttribute("gs-max-row")) || se.maxRow,
      staticGrid: p.toBool(e.getAttribute("gs-static")) || se.staticGrid,
      sizeToContent: p.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || se.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || se.removableOptions.accept,
        decline: se.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = p.toBool(e.getAttribute("gs-animate"))), t = p.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const a = this.el.closest("." + se.itemClass)?.gridstackNode;
    if (a && (a.subGrid = this, this.parentGridNode = a, this.el.classList.add("grid-stack-nested"), a.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== se.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const d = t.cellHeight;
      delete t.cellHeight, this.cellHeight(d);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = fe), this._setStaticClass();
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
    this.setAnimation(), t.subGridDynamic && !z.pauseDrag && (z.pauseDrag = !0), t.draggable?.pause !== void 0 && (z.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
    if (i.grid = this, i.el ? t = i.el : k.addRemoveCB ? t = k.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(i), !t)
      return;
    if (i = t.gridstackNode, i && t.parentElement === this.el && this.engine.nodes.find((s) => s._id === i._id))
      return t;
    const r = this._readAttr(t);
    return p.defaults(e, r), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
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
    const t = p.createDiv(["grid-stack-item", this.opts.itemClass]), i = p.createDiv(["grid-stack-item-content"], t);
    return p.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([r]) => {
      r.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, k.renderCB(i, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : k.renderCB(i, e), t;
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
    t.column === "auto" && (l = !0, t.column = Math.max(s.w || 1, i?.w || 1), delete t.columnOpts);
    let d = s.el.querySelector(".grid-stack-item-content"), c, u;
    if (r && (this._removeDD(s.el), u = { ...s, x: 0, y: 0 }, p.removeInternalForSave(u), delete u.subGridOpts, s.content && (u.content = s.content, delete s.content), k.addRemoveCB ? c = k.addRemoveCB(this.el, u, !0, !1) : (c = p.createDiv(["grid-stack-item"]), c.appendChild(d), d = p.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), i) {
      const g = l ? t.column : s.w, _ = s.h + i.h, b = s.el.style;
      b.transition = "none", this.update(s.el, { w: g, h: _ }), setTimeout(() => b.transition = null);
    }
    const h = s.subGrid = k.addGrid(d, t);
    return i?._moving && (h._isTemp = !0), l && (h._autoColumn = !0), r && h.makeWidget(c, u), i && (i._moving ? window.setTimeout(() => p.simulateMouseEvent(i._event, "mouseenter", h.el), 0) : h.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((i) => {
      i.x += this.parentGridNode.x, i.y += this.parentGridNode.y, t.makeWidget(i.el, i);
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
  save(e = !0, t = !1, i = k.saveCB, r) {
    const s = this.engine.save(e, i, r);
    if (s.forEach((o) => {
      if (e && o.el && !o.subGrid && !i) {
        const a = o.el.querySelector(".grid-stack-item-content");
        o.content = a?.innerHTML, o.content || delete o.content;
      } else if (!e && !i && delete o.content, o.subGrid?.el) {
        const a = o.w || o.subGrid.getColumn(), l = o.subGrid.save(e, t, i, a);
        o.subGridOpts = t ? l : { children: l }, delete o.subGrid;
      }
      delete o.el;
    }), t) {
      const o = p.cloneDeep(this.opts);
      o.marginBottom === o.marginTop && o.marginRight === o.marginLeft && o.marginTop === o.marginRight && (o.margin = o.marginTop, delete o.marginTop, delete o.marginRight, delete o.marginBottom, delete o.marginLeft), o.rtl === (this.el.style.direction === "rtl") && (o.rtl = "auto"), this._isAutoCellHeight && (o.cellHeight = "auto"), this._autoColumn && (o.column = "auto");
      const a = o._alwaysShowResizeHandle;
      return delete o._alwaysShowResizeHandle, a !== void 0 ? o.alwaysShowResizeHandle = a : delete o.alwaysShowResizeHandle, p.removeInternalAndSame(o, se), o.children = s, o;
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
    e = p.cloneDeep(e);
    const i = this.getColumn();
    e.forEach((c) => {
      c.w = c.w || c.minW || 1, c.h = c.h || c.minH || 1;
    }), e = p.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let r = 0;
    e.forEach((c) => {
      r = Math.max(r, (c.x || 0) + c.w);
    }), r > this.engine.defaultColumn && (this.engine.defaultColumn = r), r > i && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(r, i, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, r, !0));
    const s = k.addRemoveCB;
    typeof t == "function" && (k.addRemoveCB = t);
    const o = [];
    this.batchUpdate();
    const a = !this.engine.nodes.length, l = a && this.opts.animate;
    l && this.setAnimation(!1), !a && t && [...this.engine.nodes].forEach((u) => {
      if (!u.id)
        return;
      p.find(e, u.id) || (k.addRemoveCB && k.addRemoveCB(this.el, u, !1, !1), o.push(u), this.removeWidget(u.el, !0, !1));
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
      const r = p.toNumber(t.getAttribute("gs-h")) || 1;
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
    const s = e.left - r.left, o = e.top - r.top, a = i.width / this.getColumn(), l = i.height / parseInt(this.el.getAttribute("gs-current-row"));
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
    const i = k.getElement(e);
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
    return e ? (k.getElements(e).forEach((r) => {
      if (r.parentElement && r.parentElement !== this.el)
        return;
      let s = r.gridstackNode;
      s || (s = this.engine.nodes.find((o) => r === o.el)), s && (t && k.addRemoveCB && k.addRemoveCB(this.el, s, !1, !1), delete r.gridstackNode, this._removeDD(r), this.engine.removeNode(s, t, i), t && r.parentElement && r.remove());
    }), i && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((i) => {
      e && k.addRemoveCB && k.addRemoveCB(this.el, i, !1, !1), delete i.el.gridstackNode, this.opts.staticGrid || this._removeDD(i.el);
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
    return k.getElements(e).forEach((i) => {
      const r = i?.gridstackNode;
      if (!r)
        return;
      const s = { ...p.copyPos({}, r), ...p.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const o = ["x", "y", "w", "h"];
      let a;
      if (o.some((c) => s[c] !== void 0 && s[c] !== r[c]) && (a = {}, o.forEach((c) => {
        a[c] = s[c] !== void 0 ? s[c] : r[c], delete s[c];
      })), !a && (s.minW || s.minH || s.maxW || s.maxH) && (a = {}), s.content !== void 0) {
        const c = i.querySelector(".grid-stack-item-content");
        c && c.textContent !== s.content && (r.content = s.content, k.renderCB(c, s), r.subGrid?.el && (c.appendChild(r.subGrid.el), r.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, d = !1;
      for (const c in s)
        c[0] !== "_" && r[c] !== s[c] && (r[c] = s[c], l = !0, d = d || !this.opts.staticGrid && (c === "noResize" || c === "noMove" || c === "locked"));
      if (p.sanitizeMinMax(r), a) {
        const c = a.w !== void 0 && a.w !== r.w;
        this.moveNode(r, a), c && r.subGrid ? r.subGrid.onResize(this.hasAnimationCSS() ? r.w : void 0) : this.resizeToContentCheck(c, r), delete r._orig;
      }
      (a || l) && this._writeAttr(i, r), d && this.prepareDragDrop(r.el), k.updateCB && k.updateCB(r);
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
    if (t.resizeToContentParent && (o = e.querySelector(t.resizeToContentParent)), o || (o = e.querySelector(k.resizeToContentParent)), !o)
      return;
    const a = e.clientHeight - o.clientHeight, l = t.h ? t.h * r - a : o.clientHeight;
    let d;
    if (t.subGrid) {
      d = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const h = t.subGrid.el.getBoundingClientRect(), g = e.getBoundingClientRect();
      d += h.top - g.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const h = o.firstElementChild;
        if (!h) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${k.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        d = h.getBoundingClientRect().height || l;
      }
    }
    if (l === d)
      return;
    s += d - l;
    let c = Math.ceil(s / r);
    const u = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    u && c > u && (c = u, e.classList.add("size-to-content-max")), t.minH && c < t.minH ? c = t.minH : t.maxH && c > t.maxH && (c = t.maxH), c !== t.h && (i._ignoreLayoutsNodeChange = !0, i.moveNode(t, { h: c }), delete i._ignoreLayoutsNodeChange);
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
    return k.getElements(e).forEach((i) => {
      const r = i.gridstackNode;
      if (!p.canBeRotated(r))
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
      const i = p.parseHeight(e);
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
      const s = p.parseHeight(getComputedStyle(this.el).minHeight);
      if (s.h > 0 && s.unit === r) {
        const o = Math.floor(s.h / i);
        t < o && (t = o);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * i + r), e && p.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, i) {
    i = i || this._readAttr(e), e.gridstackNode = i, i.el = e, i.grid = this, i = this.engine.addNode(i, t), this._writeAttr(e, i), e.classList.add(se.itemClass, this.opts.itemClass);
    const r = p.shouldSizeToContent(i);
    return r ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), r && this.resizeToContentCheck(!1, i), p.lazyLoad(i) || this.prepareDragDrop(i.el), this;
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
    i.x = p.toNumber(e.getAttribute("gs-x")), i.y = p.toNumber(e.getAttribute("gs-y")), i.w = p.toNumber(e.getAttribute("gs-w")), i.h = p.toNumber(e.getAttribute("gs-h")), i.autoPosition = p.toBool(e.getAttribute("gs-auto-position")), i.noResize = p.toBool(e.getAttribute("gs-no-resize")), i.noMove = p.toBool(e.getAttribute("gs-no-move")), i.locked = p.toBool(e.getAttribute("gs-locked"));
    const r = e.getAttribute("gs-size-to-content");
    r && (r === "true" || r === "false" ? i.sizeToContent = p.toBool(r) : i.sizeToContent = parseInt(r, 10)), i.id = e.getAttribute("gs-id"), i.maxW = p.toNumber(e.getAttribute("gs-max-w")), i.minW = p.toNumber(e.getAttribute("gs-min-w")), i.maxH = p.toNumber(e.getAttribute("gs-max-h")), i.minH = p.toNumber(e.getAttribute("gs-min-h")), t && (i.w === 1 && e.removeAttribute("gs-w"), i.h === 1 && e.removeAttribute("gs-h"), i.maxW && e.removeAttribute("gs-max-w"), i.minW && e.removeAttribute("gs-min-w"), i.maxH && e.removeAttribute("gs-max-h"), i.minH && e.removeAttribute("gs-min-h"));
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
        p.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((i) => p.shouldSizeToContent(i))) {
        const i = [...this.engine.nodes];
        this.batchUpdate(), i.forEach((r) => {
          p.shouldSizeToContent(r) && this.resizeToContentCBCheck(r.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((i) => i.sizeToContent));
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
    return k.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return p.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, i = [];
    typeof this.opts.margin == "string" && (i = this.opts.margin.split(" ")), i.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = i[0], this.opts.marginLeft = this.opts.marginRight = i[1]) : i.length === 4 ? (this.opts.marginTop = i[0], this.opts.marginRight = i[1], this.opts.marginBottom = i[2], this.opts.marginLeft = i[3]) : (e = p.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((o) => {
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
  static setupDragIn(e, t, i, r = document) {
    t?.pause !== void 0 && (z.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? p.getElements(e, r) : e).forEach((o, a) => {
      J.isDraggable(o) || J.dragIn(o, t), i?.[a] && (o.gridstackNode = i[a]);
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
    return this.opts.staticGrid ? this : (k.getElements(e).forEach((i) => {
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
    return this.opts.staticGrid ? this : (k.getElements(e).forEach((i) => {
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
    const i = (r, s, o) => {
      o = o || s;
      const a = o.gridstackNode;
      if (!a)
        return;
      if (!a.grid?.el) {
        o.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const h = o.getBoundingClientRect();
        o.style.left = h.x + (this.dragTransform.xScale - 1) * (r.clientX - h.x) / this.dragTransform.xScale + "px", o.style.top = h.y + (this.dragTransform.yScale - 1) * (r.clientY - h.y) / this.dragTransform.yScale + "px", o.style.transformOrigin = "0px 0px";
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
          a._willFitPos && (p.copyPos(a, a._willFitPos), delete a._willFitPos);
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
      a._temporaryRemoved = !0) : (a.w = l, a.h = d, a._temporaryRemoved = !0), k._itemRemoving(a.el, !1), J.on(s, "drag", i), i(r, s, o), !1;
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
        const h = c.grid;
        h.engine.removeNodeFromLayoutCache(c), h.engine.removedNodes.push(c), h._triggerRemoveEvent()._triggerChangeEvent(), h.parentGridNode && !h.engine.nodes.length && h.opts.subGridDynamic && h.removeAsSubGrid();
      }
      if (!a || (l && (this.engine.cleanupNode(a), a.grid = this), delete a.grid?._isTemp, J.off(s, "drag"), o !== s ? (o.remove(), s = o) : s.remove(), this._removeDD(s), !l))
        return !1;
      const u = a.subGrid?.el?.gridstack;
      return p.copyPos(a, this._readAttr(this.placeholder)), p.removePositioningStyles(s), d && (a.content || a.subGridOpts || k.addRemoveCB) ? (delete a.el, s = this.addWidget(a)) : (this._prepareElement(s, !0, a), this.el.appendChild(s), this.resizeToContentCheck(!1, a), u && (u.parentGridNode = a), this._updateContainerHeight()), this.engine.addedNodes.push(a), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...r, type: "dropped" }, c && c.grid ? c : void 0, a), !1;
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
    return e ? (!this.opts.staticGrid && !J.isDroppable(e) && J.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, i) => k._itemRemoving(i, !0)).on(e, "dropout", (t, i) => k._itemRemoving(i, !1)), this) : this;
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
      let a, l;
      const d = (h, g) => {
        this.triggerEvent(h, h.target), a = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, h, g, i, a, l);
      }, c = (h, g) => {
        this._dragOrResize(e, h, g, i, a, l);
      }, u = (h) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete i._moving, delete i._resizing, delete i._event, delete i._lastTried;
        const g = i.w !== i._orig.w, _ = h.target;
        if (!(!_.gridstackNode || _.gridstackNode.grid !== this)) {
          if (i.el = _, i._isAboutToRemove) {
            const b = e.gridstackNode.grid;
            b._gsEventHandler[h.type] && b._gsEventHandler[h.type](h, _), b.engine.nodes.push(i), b.removeWidget(e, !0, !0);
          } else
            p.removePositioningStyles(_), i._temporaryRemoved ? (this._writePosAttr(_, i), this.engine.addNode(i)) : this._writePosAttr(_, i), this.triggerEvent(h, _);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), h.type === "resizestop" && (Number.isInteger(i.sizeToContent) && (i.sizeToContent = i.h), this.resizeToContentCheck(g, i));
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
      }), i._initDD = !0;
    }
    return J.draggable(e, r ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, i, r, s, o) {
    if (this.engine.cleanNodes().beginUpdate(r), this._writePosAttr(this.placeholder, r), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = r, r.grid?.el)
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
    if (r.el = this.placeholder, r._lastUiPosition = i.position, r._prevYPix = i.position.top, r._moving = t.type === "dragstart", r._resizing = t.type === "resizestart", delete r._lastTried, t.type === "dropover" && r._temporaryRemoved && (this.engine.addNode(r), r._moving = !0), this.engine.cacheRects(s, o, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const a = this.getColumn() - r.x, l = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - r.y;
      J.resizable(e, "option", "minWidth", s * Math.min(r.minW || 1, a)).resizable(e, "option", "minHeight", o * Math.min(r.minH || 1, l)).resizable(e, "option", "maxWidth", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, a)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, r.x + r.w)).resizable(e, "option", "maxHeight", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxHeightMoveUp", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, r.y + r.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, i, r, s, o) {
    const a = { ...r._orig };
    let l, d = this.opts.marginLeft, c = this.opts.marginRight, u = this.opts.marginTop, h = this.opts.marginBottom;
    const g = Math.round(o * 0.1), _ = Math.round(s * 0.1);
    if (d = Math.min(d, _), c = Math.min(c, _), u = Math.min(u, g), h = Math.min(h, g), t.type === "drag") {
      if (r._temporaryRemoved)
        return;
      const x = i.position.top - r._prevYPix;
      r._prevYPix = i.position.top, this.opts.draggable.scroll !== !1 && p.updateScrollPosition(e, i.position, x);
      const D = i.position.left + (i.position.left > r._lastUiPosition.left ? -c : d), N = i.position.top + (i.position.top > r._lastUiPosition.top ? -h : u);
      a.x = Math.round(D / s), a.y = Math.round(N / o);
      const w = this._extraDragRow;
      if (this.engine.collide(r, a)) {
        const R = this.getRow();
        let v = Math.max(0, a.y + r.h - R);
        this.opts.maxRow && R + v > this.opts.maxRow && (v = Math.max(0, this.opts.maxRow - R)), this._extraDragRow = v;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== w && this._updateContainerHeight(), r.x === a.x && r.y === a.y)
        return;
    } else if (t.type === "resize") {
      if (a.x < 0 || (p.updateScrollResize(t, e, o), a.w = Math.round((i.size.width - d) / s), a.h = Math.round((i.size.height - u) / o), r.w === a.w && r.h === a.h) || r._lastTried && r._lastTried.w === a.w && r._lastTried.h === a.h)
        return;
      const x = i.position.left + d, D = i.position.top + u;
      a.x = Math.round(x / s), a.y = Math.round(D / o), l = !0;
    }
    r._event = t, r._lastTried = a;
    const b = {
      x: i.position.left + d,
      y: i.position.top + u,
      w: (i.size ? i.size.width : r.w * s) - d - c,
      h: (i.size ? i.size.height : r.h * o) - u - h
    };
    if (this.engine.moveNodeCheck(r, { ...a, cellWidth: s, cellHeight: o, rect: b, resizing: l })) {
      r._lastUiPosition = i.position, this.engine.cacheRects(s, o, u, c, h, d), delete r._skipDown, l && r.subGrid && r.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const x = t.target;
      r._sidebarOrig || this._writePosAttr(x, r), this.triggerEvent(t, x);
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
    if (!i || (t.style.transform = t.style.transformOrigin = null, J.off(e, "drag"), i._temporaryRemoved))
      return;
    i._temporaryRemoved = !0, this.engine.removeNode(i), i.el = i._isExternal && t ? t : e;
    const r = i._sidebarOrig;
    i._isExternal && this.engine.cleanupNode(i), i._sidebarOrig = r, this.opts.removable === !0 && k._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : i._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return ko(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
k.renderCB = (n, e) => {
  n && e?.content && (n.textContent = e.content);
};
k.resizeToContentParent = ".grid-stack-item-content";
k.Utils = p;
k.Engine = Ae;
k.GDRev = "12.3.2";
const Tt = /* @__PURE__ */ new WeakMap();
function Mo({ children: n }) {
  const { _gridStack: { value: e, set: t }, options: i } = Zn(), r = L(/* @__PURE__ */ new Map()), s = L(null), o = L(i), a = U((c, u) => {
    if (u.id && u.grid) {
      let h = Tt.get(u.grid);
      h || (h = /* @__PURE__ */ new Map(), Tt.set(u.grid, h)), h.set(u.id, c), r.current.set(u.id, c);
    }
  }, []), l = U(() => {
    if (s.current) {
      k.renderCB = a;
      const c = k.init(o.current, s.current);
      return c && o.current.handle && c.opts && (c.opts.handle = o.current.handle), c;
    }
    return null;
  }, [a]), d = (c, u) => {
    const { children: h, ...g } = c, { children: _, ...b } = u;
    return Wn(g, b);
  };
  return yi(() => {
    if (!d(i, o.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), r.current.clear(), Tt.delete(e), o.current = i, t(null);
      } catch (c) {
        console.error("Error destroying gridstack", c);
      }
    else e && (o.current = i, i.handle && e.opts && (e.opts.handle = i.handle));
  }, [i, e, t]), yi(() => {
    if (!e && s.current)
      try {
        t(l());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, l, t]), f(Qn.Provider, {
    value: I(() => ({
      getWidgetContainer: (c) => {
        if (e) {
          const u = Tt.get(e);
          if (u?.has(c))
            return u.get(c) || null;
        }
        return r.current.get(c) || null;
      }
    }), [e]),
    children: f("div", {
      ref: s,
      children: e ? n : null
    })
  });
}
const zi = ({ options: n, widgets: e, onChange: t, className: i }) => {
  const r = I(() => JSON.stringify(e.map((l) => ({
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
  }))), [e]), s = I(() => ({
    ...n,
    class: i
  }), [n, r, i]), o = (l, d, c) => {
    let u = c[0], h = 1 / 0;
    for (const g of c) {
      const _ = g.w - l, b = g.h - d, x = _ * _ + b * b;
      x < h && (h = x, u = g);
    }
    return u;
  };
  return f(So, {
    options: s,
    widgets: e,
    onResizeStop: (l, d) => {
      const c = d.gridstackNode;
      if (!c) return;
      const u = d.gridstackNode?.allowedSizes ?? [];
      if (u.length === 0)
        return;
      const h = o(c.w ?? 1, c.h ?? 1, u ?? []);
      (c.w !== h.w || c.h !== h.h) && c.grid?.update(d, {
        w: h.w,
        h: h.h
      });
    },
    onChange: t,
    children: f(Mo, {
      children: f(Oo, {})
    })
  });
};
zi.displayName = "F0GridStack";
const Lo = (n, e, t) => f("div", {
  children: n
}), Qt = ({ widgets: n = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: i = Lo, main: r = !1, deps: s }) => {
  const o = U((v, y, m) => f(Si.div, {
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
    children: i(v, y, m)
  }), [i]), a = I(() => ({
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
  }), []), l = (v, y) => {
    if (typeof v.content == "function" && v.deps && y) {
      const m = {};
      return v.deps.forEach((E) => {
        typeof E == "string" && y[E] !== void 0 && (m[E] = y[E]);
      }), v.content(m);
    }
    return typeof v.content == "function" ? null : v.content;
  }, d = (v, y, m) => v.map((E) => {
    const T = l(E, m), A = {
      id: E.id,
      h: E.h ?? 1,
      w: E.w ?? 1,
      allowedSizes: E.availableSizes,
      noMove: !y,
      noResize: !y,
      locked: E.locked,
      meta: E.meta,
      _originalContent: T,
      content: o(T, E.meta, y)
    };
    return E.x !== void 0 && (A.x = E.x), E.y !== void 0 && (A.y = E.y), A;
  }), [c, u] = B(d(n, e)), h = L(e), g = L(n), _ = L(!1), b = L(/* @__PURE__ */ new Map()), x = L(n);
  x.current = n;
  const D = L(s), N = I(() => {
    const v = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || n.forEach((y) => {
      if (y.deps && y.deps.length > 0) {
        const m = y.deps.map((E) => typeof E == "string" && s[E] !== void 0 ? s[E] : E).filter((E) => E !== null);
        v.set(y.id, m);
      }
    }), v;
  }, [n, s]), w = U((v) => {
    u(v), _.current || t(v.map((y) => {
      const m = x.current.find((E) => E.id === y.id);
      return {
        id: y.id,
        w: y.w ?? 1,
        h: y.h ?? 1,
        allowedSizes: y.allowedSizes,
        meta: y.meta,
        content: typeof m?.content == "function" ? m.content : y._originalContent,
        x: y.x ?? 0,
        y: y.y ?? 0,
        locked: y.locked,
        deps: m?.deps
      };
    })), _.current = !1;
  }, [t]), R = (v, y) => !v && !y ? !1 : !v || !y || v.length !== y.length ? !0 : v.some((m, E) => m !== y[E]);
  return H(() => {
    const v = h.current !== e, y = g.current !== n, m = D.current !== s && (D.current === void 0 || s === void 0 || Object.keys(D.current).length !== Object.keys(s).length || Object.keys(s).some((C) => D.current?.[C] !== s[C])), E = /* @__PURE__ */ new Map();
    n.forEach((C) => {
      if (C.deps && C.deps.length > 0) {
        const S = b.current.get(C.id), O = N.get(C.id);
        E.set(C.id, R(S, O)), O ? b.current.set(C.id, O) : b.current.delete(C.id);
      }
    });
    const T = new Set(n.map((C) => C.id));
    b.current.forEach((C, S) => {
      T.has(S) || b.current.delete(S);
    });
    const A = Array.from(E.values()).some((C) => C) || m;
    v && !y && !A ? (_.current = !0, u((C) => C.map((S) => {
      const O = n.find((Q) => Q.id === S.id);
      if (!O)
        return S;
      const F = l(O, s);
      return {
        ...S,
        noMove: !e,
        noResize: !e,
        locked: O.locked,
        meta: O.meta,
        _originalContent: F,
        content: o(F, O.meta, e)
      };
    }))) : (y || A) && u((C) => {
      const S = new Map(C.map((O) => [O.id, O]));
      return n.map((O) => {
        const F = S.get(O.id), Q = E.get(O.id) ?? !1;
        let ee;
        Q || !F ? ee = l(O, s) : ee = F._originalContent ?? l(O, s);
        const K = {
          id: O.id,
          h: F?.h ?? O.h ?? 1,
          w: F?.w ?? O.w ?? 1,
          allowedSizes: O.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: O.locked,
          meta: O.meta,
          _originalContent: ee,
          content: o(ee, O.meta, e)
        }, ue = F?.x ?? O.x, $ = F?.y ?? O.y;
        return ue !== void 0 && (K.x = ue), $ !== void 0 && (K.y = $), K;
      });
    }), h.current = e, g.current = n, D.current = s;
  }, [n, e, o, N, s]), f(zi, {
    className: j(r && "h-full flex-1 overflow-auto"),
    options: a,
    onChange: w,
    widgets: c
  });
};
Qt.displayName = "GroupGrid";
Qt.__isPageLayoutGroup = !0;
const Io = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutBlock = !0, t;
}, Ho = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutGroup = !0, t;
}, Bo = (n, e) => f("svg", {
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
}), tr = oe(Bo), Fo = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], ir = oe((n, e) => {
  const t = Fo.reduce((i, r) => {
    const { [r]: s, ...o } = i;
    return o;
  }, n);
  return f(Ni, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: n.icon == tr
  });
});
ir.displayName = "AIButton";
const fi = Ri({
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
}), Wo = {
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
}, Pi = oe(({ content: n, variant: e, align: t, className: i, as: r, ellipsis: s, noEllipsisTooltip: o, markdown: a, ...l }, d) => {
  const c = r ?? Wo[e ?? "body"];
  if (s !== void 0)
    return f(Yr, {
      ref: d,
      lines: typeof s == "number" ? s : 1,
      noTooltip: o,
      tag: c,
      className: j(fi({
        variant: e,
        align: t
      }), i),
      markdown: a,
      ...l,
      children: n
    });
  if (a) {
    const u = qr(n);
    return tn(c, {
      ...l,
      className: j(fi({
        variant: e,
        align: t
      }), i),
      ref: d,
      dangerouslySetInnerHTML: {
        __html: u
      }
    });
  }
  return tn(c, {
    ...l,
    className: j(fi({
      variant: e,
      align: t
    }), i),
    ref: d
  }, n);
});
Pi.displayName = "Text";
const nr = oe((n, e) => f(Pi, {
  ref: e,
  markdown: n.markdown ?? !0,
  ...n
}));
nr.displayName = "F0Text";
const Gc = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], rr = ({ title: n, draggable: e = !1, onDragStart: t, onDragEnd: i, isDragging: r = !1, AIButton: s, actions: o, children: a, selected: l = !1 }) => {
  const [d, c] = B(!1), [u, h] = B(!1), g = Ai(), _ = (x) => {
    c(x);
  }, b = u || d;
  return H(() => {
    if (!r || !i) return;
    const x = () => {
      i();
    };
    return document.addEventListener("mouseup", x), () => {
      document.removeEventListener("mouseup", x);
    };
  }, [r, i]), P("div", {
    className: j("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && d ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", r && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [P("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [P("div", {
        className: j("flex min-w-0 flex-1 items-center", !e && "pl-4", !o && !s && "pr-4"),
        children: [e && f("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: f(On, {
            icon: Jr,
            size: "xs"
          })
        }), f("div", {
          className: j("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: f(nr, {
            variant: "label",
            content: n,
            ellipsis: !0
          })
        })]
      }), f(Zr, {
        children: (s || o) && b && P(Si.div, {
          className: j("flex shrink-0 items-center gap-0.5 pr-2", !o && "pr-4"),
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
            children: f(ir, {
              size: "sm",
              label: g.ai.ask,
              onClick: s,
              icon: tr
            })
          }), o && f(Qr, {
            items: o,
            open: d,
            onOpenChange: _,
            align: "end",
            children: f(Ni, {
              icon: es,
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
      children: a
    })]
  });
}, Go = () => P("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [f("div", {
    className: "flex h-12 w-full items-center px-4",
    children: f(we, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), P("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [f(we, {
      className: "h-1/2 w-full rounded-sm"
    }), f(we, {
      className: "h-1/3 w-full rounded-sm"
    }), f(we, {
      className: "h-1/5 w-full rounded-sm"
    }), f(we, {
      className: "h-1/3 w-full rounded-sm"
    }), f(we, {
      className: "h-full w-full rounded-sm"
    }), f(we, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
rr.displayName = "F0Widget";
const $o = An(rr, Go), jo = ({ children: n, title: e, draggable: t = !1, actions: i, aiButton: r }) => f($o, {
  title: e,
  draggable: t,
  actions: i,
  AIButton: r,
  children: n
}), sr = ({ widgets: n, editMode: e = !1, onChange: t = () => {
}, deps: i, ...r }) => f(Qt, {
  widgets: n,
  editMode: e,
  onChange: t,
  deps: i,
  ...r,
  WidgetWrapper: (s, o, a) => f(jo, {
    title: o?.title ?? "",
    draggable: a,
    actions: o?.actions,
    aiButton: o?.aiButton,
    children: s
  })
});
sr.displayName = "Dashboard";
const Uo = Ho("Dashboard", sr), $c = Ce("Dashboard", Uo), Ko = Ri({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Vo = (n) => (n || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), Xo = (n) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(n) ? n.every(e) ? [{
    items: n
  }] : n : [n];
}, ei = oe(({ children: n, variant: e = "default", className: t, draggable: i = !1, onDragStart: r, onDragEnd: s, onDrop: o, dragId: a, primaryAction: l, ...d }, c) => {
  const u = I(() => Xo(d.actions || []), [d.actions]), h = I(() => u.flatMap((_) => _.items), [u]), g = I(() => h.length > 0 || !!l, [h, l]);
  return P("div", {
    ref: c,
    className: j(Ko({
      variant: e
    }), "relative", t),
    draggable: i,
    onDragStart: r,
    onDragEnd: s,
    onDrop: o,
    "data-drag-id": a,
    ...d,
    children: [g && P("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, h.length > 0 && f(As, {
        items: Vo(u)
      })]
    }), f("div", {
      children: n
    })]
  });
});
ei.displayName = "Block";
ei.__isPageLayoutBlock = !0;
const Yo = ({ title: n = "", description: e, titleLevel: t = "h2", children: i, className: r, ...s }) => {
  if (!n) return null;
  const o = t;
  return P(ei, {
    ...s,
    className: j("space-y-4", r),
    children: [P("div", {
      className: "space-y-2",
      children: [f(o, {
        className: j("font-semibold text-f1-foreground", {
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
      children: i
    })]
  });
}, qo = Io("BlockContent", Yo), Jo = (n) => !Bn(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutBlock" in n.type, Zo = (n) => !Bn(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutGroup" in n.type, or = (n, e, t) => {
  const i = Ht.toArray(e);
  for (const r of i)
    t.includes("block") && Jo(r) || t.includes("group") && Zo(r) || console.warn(
      `${n}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      r
    );
}, Mi = oe(({ children: n, onSort: e, ...t }, i) => {
  or("GroupLinear", n, ["block"]);
  const [r, s] = B(Ht.toArray(n));
  return H(() => {
    s(Ht.toArray(n));
  }, [n]), H(() => {
    e?.(r);
  }, [r, e]), f("div", {
    ref: i,
    ...t,
    children: r.map((o, a) => f(_s, {
      children: o
    }, a))
  });
});
Mi.displayName = "GroupLinear";
Mi.__isPageLayoutGroup = !0;
function Qo() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return I(
    () => (i) => {
      e.forEach((r) => r(i));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const ti = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Qe(n) {
  const e = Object.prototype.toString.call(n);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Li(n) {
  return "nodeType" in n;
}
function Z(n) {
  var e, t;
  return n ? Qe(n) ? n : Li(n) && (e = (t = n.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Ii(n) {
  const {
    Document: e
  } = Z(n);
  return n instanceof e;
}
function wt(n) {
  return Qe(n) ? !1 : n instanceof Z(n).HTMLElement;
}
function ar(n) {
  return n instanceof Z(n).SVGElement;
}
function et(n) {
  return n ? Qe(n) ? n.document : Li(n) ? Ii(n) ? n : wt(n) || ar(n) ? n.ownerDocument : document : document : document;
}
const pe = ti ? yi : H;
function ii(n) {
  const e = L(n);
  return pe(() => {
    e.current = n;
  }), U(function() {
    for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
      i[r] = arguments[r];
    return e.current == null ? void 0 : e.current(...i);
  }, []);
}
function ea() {
  const n = L(null), e = U((i, r) => {
    n.current = setInterval(i, r);
  }, []), t = U(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [e, t];
}
function vt(n, e) {
  e === void 0 && (e = [n]);
  const t = L(n);
  return pe(() => {
    t.current !== n && (t.current = n);
  }, e), t;
}
function Ct(n, e) {
  const t = L();
  return I(
    () => {
      const i = n(t.current);
      return t.current = i, i;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function jt(n) {
  const e = ii(n), t = L(null), i = U(
    (r) => {
      r !== t.current && e?.(r, t.current), t.current = r;
    },
    //eslint-disable-next-line
    []
  );
  return [t, i];
}
function Ut(n) {
  const e = L();
  return H(() => {
    e.current = n;
  }, [n]), e.current;
}
let gi = {};
function _t(n, e) {
  return I(() => {
    if (e)
      return e;
    const t = gi[n] == null ? 0 : gi[n] + 1;
    return gi[n] = t, n + "-" + t;
  }, [n, e]);
}
function lr(n) {
  return function(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      i[r - 1] = arguments[r];
    return i.reduce((s, o) => {
      const a = Object.entries(o);
      for (const [l, d] of a) {
        const c = s[l];
        c != null && (s[l] = c + n * d);
      }
      return s;
    }, {
      ...e
    });
  };
}
const Ye = /* @__PURE__ */ lr(1), yt = /* @__PURE__ */ lr(-1);
function ta(n) {
  return "clientX" in n && "clientY" in n;
}
function ni(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: e
  } = Z(n.target);
  return e && n instanceof e;
}
function ia(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: e
  } = Z(n.target);
  return e && n instanceof e;
}
function Kt(n) {
  if (ia(n)) {
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
  return ta(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const Be = /* @__PURE__ */ Object.freeze({
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
        return [Be.Translate.toString(n), Be.Scale.toString(n)].join(" ");
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
}), dn = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function na(n) {
  return n.matches(dn) ? n : n.querySelector(dn);
}
const ra = {
  display: "none"
};
function sa(n) {
  let {
    id: e,
    value: t
  } = n;
  return M.createElement("div", {
    id: e,
    style: ra
  }, t);
}
function oa(n) {
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
  return M.createElement("div", {
    id: e,
    style: r,
    role: "status",
    "aria-live": i,
    "aria-atomic": !0
  }, t);
}
function aa() {
  const [n, e] = B("");
  return {
    announce: U((i) => {
      i != null && e(i);
    }, []),
    announcement: n
  };
}
const cr = /* @__PURE__ */ Ee(null);
function la(n) {
  const e = ge(cr);
  H(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(n);
  }, [n, e]);
}
function ca() {
  const [n] = B(() => /* @__PURE__ */ new Set()), e = U((i) => (n.add(i), () => n.delete(i)), [n]);
  return [U((i) => {
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
const da = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, ua = {
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
function ha(n) {
  let {
    announcements: e = ua,
    container: t,
    hiddenTextDescribedById: i,
    screenReaderInstructions: r = da
  } = n;
  const {
    announce: s,
    announcement: o
  } = aa(), a = _t("DndLiveRegion"), [l, d] = B(!1);
  if (H(() => {
    d(!0);
  }, []), la(I(() => ({
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
        over: g
      } = u;
      e.onDragMove && s(e.onDragMove({
        active: h,
        over: g
      }));
    },
    onDragOver(u) {
      let {
        active: h,
        over: g
      } = u;
      s(e.onDragOver({
        active: h,
        over: g
      }));
    },
    onDragEnd(u) {
      let {
        active: h,
        over: g
      } = u;
      s(e.onDragEnd({
        active: h,
        over: g
      }));
    },
    onDragCancel(u) {
      let {
        active: h,
        over: g
      } = u;
      s(e.onDragCancel({
        active: h,
        over: g
      }));
    }
  }), [s, e])), !l)
    return null;
  const c = M.createElement(M.Fragment, null, M.createElement(sa, {
    id: i,
    value: r.draggable
  }), M.createElement(oa, {
    id: a,
    announcement: o
  }));
  return t ? Oi(c, t) : c;
}
var V;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(V || (V = {}));
function Vt() {
}
function un(n, e) {
  return I(
    () => ({
      sensor: n,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, e]
  );
}
function fa() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return I(
    () => [...e].filter((i) => i != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const me = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function ga(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function pa(n, e) {
  const t = Kt(n);
  if (!t)
    return "0 0";
  const i = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return i.x + "% " + i.y + "%";
}
function ma(n, e) {
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
function va(n, e) {
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
function hn(n) {
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
function dr(n, e) {
  if (!n || n.length === 0)
    return null;
  const [t] = n;
  return t[e];
}
const ya = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: i
  } = n;
  const r = hn(e), s = [];
  for (const o of i) {
    const {
      id: a
    } = o, l = t.get(a);
    if (l) {
      const d = hn(l), c = r.reduce((h, g, _) => h + ga(d[_], g), 0), u = Number((c / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: o,
          value: u
        }
      });
    }
  }
  return s.sort(ma);
};
function ba(n, e) {
  const t = Math.max(e.top, n.top), i = Math.max(e.left, n.left), r = Math.min(e.left + e.width, n.left + n.width), s = Math.min(e.top + e.height, n.top + n.height), o = r - i, a = s - t;
  if (i < r && t < s) {
    const l = e.width * e.height, d = n.width * n.height, c = o * a, u = c / (l + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const xa = (n) => {
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
      const l = ba(a, e);
      l > 0 && r.push({
        id: o,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return r.sort(va);
};
function wa(n, e, t) {
  return {
    ...n,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function ur(n, e) {
  return n && e ? {
    x: n.left - e.left,
    y: n.top - e.top
  } : me;
}
function Ca(n) {
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
const _a = /* @__PURE__ */ Ca(1);
function hr(n) {
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
function Ea(n, e, t) {
  const i = hr(e);
  if (!i)
    return n;
  const {
    scaleX: r,
    scaleY: s,
    x: o,
    y: a
  } = i, l = n.left - o - (1 - r) * parseFloat(t), d = n.top - a - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), c = r ? n.width / r : n.width, u = s ? n.height / s : n.height;
  return {
    width: c,
    height: u,
    top: d,
    right: l + c,
    bottom: d + u,
    left: l
  };
}
const Da = {
  ignoreTransform: !1
};
function tt(n, e) {
  e === void 0 && (e = Da);
  let t = n.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: c
    } = Z(n).getComputedStyle(n);
    d && (t = Ea(t, d, c));
  }
  const {
    top: i,
    left: r,
    width: s,
    height: o,
    bottom: a,
    right: l
  } = t;
  return {
    top: i,
    left: r,
    width: s,
    height: o,
    bottom: a,
    right: l
  };
}
function fn(n) {
  return tt(n, {
    ignoreTransform: !0
  });
}
function Ra(n) {
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
function Sa(n, e) {
  return e === void 0 && (e = Z(n).getComputedStyle(n)), e.position === "fixed";
}
function Na(n, e) {
  e === void 0 && (e = Z(n).getComputedStyle(n));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((r) => {
    const s = e[r];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function ri(n, e) {
  const t = [];
  function i(r) {
    if (e != null && t.length >= e || !r)
      return t;
    if (Ii(r) && r.scrollingElement != null && !t.includes(r.scrollingElement))
      return t.push(r.scrollingElement), t;
    if (!wt(r) || ar(r) || t.includes(r))
      return t;
    const s = Z(n).getComputedStyle(r);
    return r !== n && Na(r, s) && t.push(r), Sa(r, s) ? t : i(r.parentNode);
  }
  return n ? i(n) : t;
}
function fr(n) {
  const [e] = ri(n, 1);
  return e ?? null;
}
function pi(n) {
  return !ti || !n ? null : Qe(n) ? n : Li(n) ? Ii(n) || n === et(n).scrollingElement ? window : wt(n) ? n : null : null;
}
function gr(n) {
  return Qe(n) ? n.scrollX : n.scrollLeft;
}
function pr(n) {
  return Qe(n) ? n.scrollY : n.scrollTop;
}
function xi(n) {
  return {
    x: gr(n),
    y: pr(n)
  };
}
var X;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(X || (X = {}));
function mr(n) {
  return !ti || !n ? !1 : n === document.scrollingElement;
}
function vr(n) {
  const e = {
    x: 0,
    y: 0
  }, t = mr(n) ? {
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
const Aa = {
  x: 0.2,
  y: 0.2
};
function Oa(n, e, t, i, r) {
  let {
    top: s,
    left: o,
    right: a,
    bottom: l
  } = t;
  i === void 0 && (i = 10), r === void 0 && (r = Aa);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: h
  } = vr(n), g = {
    x: 0,
    y: 0
  }, _ = {
    x: 0,
    y: 0
  }, b = {
    height: e.height * r.y,
    width: e.width * r.x
  };
  return !d && s <= e.top + b.height ? (g.y = X.Backward, _.y = i * Math.abs((e.top + b.height - s) / b.height)) : !c && l >= e.bottom - b.height && (g.y = X.Forward, _.y = i * Math.abs((e.bottom - b.height - l) / b.height)), !h && a >= e.right - b.width ? (g.x = X.Forward, _.x = i * Math.abs((e.right - b.width - a) / b.width)) : !u && o <= e.left + b.width && (g.x = X.Backward, _.x = i * Math.abs((e.left + b.width - o) / b.width)), {
    direction: g,
    speed: _
  };
}
function ka(n) {
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
function yr(n) {
  return n.reduce((e, t) => Ye(e, xi(t)), me);
}
function Ta(n) {
  return n.reduce((e, t) => e + gr(t), 0);
}
function za(n) {
  return n.reduce((e, t) => e + pr(t), 0);
}
function br(n, e) {
  if (e === void 0 && (e = tt), !n)
    return;
  const {
    top: t,
    left: i,
    bottom: r,
    right: s
  } = e(n);
  fr(n) && (r <= 0 || s <= 0 || t >= window.innerHeight || i >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Pa = [["x", ["left", "right"], Ta], ["y", ["top", "bottom"], za]];
class Hi {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const i = ri(t), r = yr(i);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, o, a] of Pa)
      for (const l of o)
        Object.defineProperty(this, l, {
          get: () => {
            const d = a(i), c = r[s] - d;
            return this.rect[l] + c;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class dt {
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
function Ma(n) {
  const {
    EventTarget: e
  } = Z(n);
  return n instanceof e ? n : et(n);
}
function mi(n, e) {
  const t = Math.abs(n.x), i = Math.abs(n.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + i ** 2) > e : "x" in e && "y" in e ? t > e.x && i > e.y : "x" in e ? t > e.x : "y" in e ? i > e.y : !1;
}
var de;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(de || (de = {}));
function gn(n) {
  n.preventDefault();
}
function La(n) {
  n.stopPropagation();
}
var W;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter", n.Tab = "Tab";
})(W || (W = {}));
const xr = {
  start: [W.Space, W.Enter],
  cancel: [W.Esc],
  end: [W.Space, W.Enter, W.Tab]
}, Ia = (n, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (n.code) {
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
class Bi {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new dt(et(t)), this.windowListeners = new dt(Z(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(de.Resize, this.handleCancel), this.windowListeners.add(de.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(de.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, i = e.node.current;
    i && br(i), t(me);
  }
  handleKeyDown(e) {
    if (ni(e)) {
      const {
        active: t,
        context: i,
        options: r
      } = this.props, {
        keyboardCodes: s = xr,
        coordinateGetter: o = Ia,
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
      } = i.current, c = d ? {
        x: d.left,
        y: d.top
      } : me;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const u = o(e, {
        active: t,
        context: i.current,
        currentCoordinates: c
      });
      if (u) {
        const h = yt(u, c), g = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: _
        } = i.current;
        for (const b of _) {
          const x = e.code, {
            isTop: D,
            isRight: N,
            isLeft: w,
            isBottom: R,
            maxScroll: v,
            minScroll: y
          } = vr(b), m = ka(b), E = {
            x: Math.min(x === W.Right ? m.right - m.width / 2 : m.right, Math.max(x === W.Right ? m.left : m.left + m.width / 2, u.x)),
            y: Math.min(x === W.Down ? m.bottom - m.height / 2 : m.bottom, Math.max(x === W.Down ? m.top : m.top + m.height / 2, u.y))
          }, T = x === W.Right && !N || x === W.Left && !w, A = x === W.Down && !R || x === W.Up && !D;
          if (T && E.x !== u.x) {
            const C = b.scrollLeft + h.x, S = x === W.Right && C <= v.x || x === W.Left && C >= y.x;
            if (S && !h.y) {
              b.scrollTo({
                left: C,
                behavior: a
              });
              return;
            }
            S ? g.x = b.scrollLeft - C : g.x = x === W.Right ? b.scrollLeft - v.x : b.scrollLeft - y.x, g.x && b.scrollBy({
              left: -g.x,
              behavior: a
            });
            break;
          } else if (A && E.y !== u.y) {
            const C = b.scrollTop + h.y, S = x === W.Down && C <= v.y || x === W.Up && C >= y.y;
            if (S && !h.x) {
              b.scrollTo({
                top: C,
                behavior: a
              });
              return;
            }
            S ? g.y = b.scrollTop - C : g.y = x === W.Down ? b.scrollTop - v.y : b.scrollTop - y.y, g.y && b.scrollBy({
              top: -g.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(e, Ye(yt(u, this.referenceCoordinates), g));
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
Bi.activators = [{
  eventName: "onKeyDown",
  handler: (n, e, t) => {
    let {
      keyboardCodes: i = xr,
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
function pn(n) {
  return !!(n && "distance" in n);
}
function mn(n) {
  return !!(n && "delay" in n);
}
class Fi {
  constructor(e, t, i) {
    var r;
    i === void 0 && (i = Ma(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: o
    } = s;
    this.props = e, this.events = t, this.document = et(o), this.documentListeners = new dt(this.document), this.listeners = new dt(i), this.windowListeners = new dt(Z(o)), this.initialCoordinates = (r = Kt(s)) != null ? r : me, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(de.Resize, this.handleCancel), this.windowListeners.add(de.DragStart, gn), this.windowListeners.add(de.VisibilityChange, this.handleCancel), this.windowListeners.add(de.ContextMenu, gn), this.documentListeners.add(de.Keydown, this.handleKeydown), t) {
      if (i != null && i({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (mn(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (pn(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(de.Click, La, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(de.SelectionChange, this.removeTextSelection), t(e));
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
    const l = (t = Kt(e)) != null ? t : me, d = yt(r, l);
    if (!i && a) {
      if (pn(a)) {
        if (a.tolerance != null && mi(d, a.tolerance))
          return this.handleCancel();
        if (mi(d, a.distance))
          return this.handleStart();
      }
      if (mn(a) && mi(d, a.tolerance))
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
const Ha = {
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
class Wi extends Fi {
  constructor(e) {
    const {
      event: t
    } = e, i = et(t.target);
    super(e, Ha, i);
  }
}
Wi.activators = [{
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
const Ba = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var wi;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(wi || (wi = {}));
class Fa extends Fi {
  constructor(e) {
    super(e, Ba, et(e.event.target));
  }
}
Fa.activators = [{
  eventName: "onMouseDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: i
    } = e;
    return t.button === wi.RightClick ? !1 : (i?.({
      event: t
    }), !0);
  }
}];
const vi = {
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
class Wa extends Fi {
  constructor(e) {
    super(e, vi);
  }
  static setup() {
    return window.addEventListener(vi.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(vi.move.name, e);
    };
    function e() {
    }
  }
}
Wa.activators = [{
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
var ut;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(ut || (ut = {}));
var Xt;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Xt || (Xt = {}));
function Ga(n) {
  let {
    acceleration: e,
    activator: t = ut.Pointer,
    canScroll: i,
    draggingRect: r,
    enabled: s,
    interval: o = 5,
    order: a = Xt.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: h
  } = n;
  const g = ja({
    delta: u,
    disabled: !s
  }), [_, b] = ea(), x = L({
    x: 0,
    y: 0
  }), D = L({
    x: 0,
    y: 0
  }), N = I(() => {
    switch (t) {
      case ut.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case ut.DraggableRect:
        return r;
    }
  }, [t, r, l]), w = L(null), R = U(() => {
    const y = w.current;
    if (!y)
      return;
    const m = x.current.x * D.current.x, E = x.current.y * D.current.y;
    y.scrollBy(m, E);
  }, []), v = I(() => a === Xt.TreeOrder ? [...d].reverse() : d, [a, d]);
  H(
    () => {
      if (!s || !d.length || !N) {
        b();
        return;
      }
      for (const y of v) {
        if (i?.(y) === !1)
          continue;
        const m = d.indexOf(y), E = c[m];
        if (!E)
          continue;
        const {
          direction: T,
          speed: A
        } = Oa(y, E, N, e, h);
        for (const C of ["x", "y"])
          g[C][T[C]] || (A[C] = 0, T[C] = 0);
        if (A.x > 0 || A.y > 0) {
          b(), w.current = y, _(R, o), x.current = A, D.current = T;
          return;
        }
      }
      x.current = {
        x: 0,
        y: 0
      }, D.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      R,
      i,
      b,
      s,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(g),
      _,
      d,
      v,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const $a = {
  x: {
    [X.Backward]: !1,
    [X.Forward]: !1
  },
  y: {
    [X.Backward]: !1,
    [X.Forward]: !1
  }
};
function ja(n) {
  let {
    delta: e,
    disabled: t
  } = n;
  const i = Ut(e);
  return Ct((r) => {
    if (t || !i || !r)
      return $a;
    const s = {
      x: Math.sign(e.x - i.x),
      y: Math.sign(e.y - i.y)
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
  }, [t, e, i]);
}
function Ua(n, e) {
  const t = e != null ? n.get(e) : void 0, i = t ? t.node.current : null;
  return Ct((r) => {
    var s;
    return e == null ? null : (s = i ?? r) != null ? s : null;
  }, [i, e]);
}
function Ka(n, e) {
  return I(() => n.reduce((t, i) => {
    const {
      sensor: r
    } = i, s = r.activators.map((o) => ({
      eventName: o.eventName,
      handler: e(o.handler, i)
    }));
    return [...t, ...s];
  }, []), [n, e]);
}
var bt;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(bt || (bt = {}));
var Ci;
(function(n) {
  n.Optimized = "optimized";
})(Ci || (Ci = {}));
const vn = /* @__PURE__ */ new Map();
function Va(n, e) {
  let {
    dragging: t,
    dependencies: i,
    config: r
  } = e;
  const [s, o] = B(null), {
    frequency: a,
    measure: l,
    strategy: d
  } = r, c = L(n), u = x(), h = vt(u), g = U(function(D) {
    D === void 0 && (D = []), !h.current && o((N) => N === null ? D : N.concat(D.filter((w) => !N.includes(w))));
  }, [h]), _ = L(null), b = Ct((D) => {
    if (u && !t)
      return vn;
    if (!D || D === vn || c.current !== n || s != null) {
      const N = /* @__PURE__ */ new Map();
      for (let w of n) {
        if (!w)
          continue;
        if (s && s.length > 0 && !s.includes(w.id) && w.rect.current) {
          N.set(w.id, w.rect.current);
          continue;
        }
        const R = w.node.current, v = R ? new Hi(l(R), R) : null;
        w.rect.current = v, v && N.set(w.id, v);
      }
      return N;
    }
    return D;
  }, [n, s, t, u, l]);
  return H(() => {
    c.current = n;
  }, [n]), H(
    () => {
      u || g();
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
        g(), _.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, u, g, ...i]
  ), {
    droppableRects: b,
    measureDroppableContainers: g,
    measuringScheduled: s != null
  };
  function x() {
    switch (d) {
      case bt.Always:
        return !1;
      case bt.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Gi(n, e) {
  return Ct((t) => n ? t || (typeof e == "function" ? e(n) : n) : null, [e, n]);
}
function Xa(n, e) {
  return Gi(n, e);
}
function Ya(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const i = ii(e), r = I(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(i);
  }, [i, t]);
  return H(() => () => r?.disconnect(), [r]), r;
}
function si(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const i = ii(e), r = I(
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
  return H(() => () => r?.disconnect(), [r]), r;
}
function qa(n) {
  return new Hi(tt(n), n);
}
function yn(n, e, t) {
  e === void 0 && (e = qa);
  const [i, r] = B(null);
  function s() {
    r((l) => {
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
  const o = Ya({
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
  }), a = si({
    callback: s
  });
  return pe(() => {
    s(), n ? (a?.observe(n), o?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), o?.disconnect());
  }, [n]), i;
}
function Ja(n) {
  const e = Gi(n);
  return ur(n, e);
}
const bn = [];
function Za(n) {
  const e = L(n), t = Ct((i) => n ? i && i !== bn && n && e.current && n.parentNode === e.current.parentNode ? i : ri(n) : bn, [n]);
  return H(() => {
    e.current = n;
  }, [n]), t;
}
function Qa(n) {
  const [e, t] = B(null), i = L(n), r = U((s) => {
    const o = pi(s.target);
    o && t((a) => a ? (a.set(o, xi(o)), new Map(a)) : null);
  }, []);
  return H(() => {
    const s = i.current;
    if (n !== s) {
      o(s);
      const a = n.map((l) => {
        const d = pi(l);
        return d ? (d.addEventListener("scroll", r, {
          passive: !0
        }), [d, xi(d)]) : null;
      }).filter((l) => l != null);
      t(a.length ? new Map(a) : null), i.current = n;
    }
    return () => {
      o(n), o(s);
    };
    function o(a) {
      a.forEach((l) => {
        const d = pi(l);
        d?.removeEventListener("scroll", r);
      });
    }
  }, [r, n]), I(() => n.length ? e ? Array.from(e.values()).reduce((s, o) => Ye(s, o), me) : yr(n) : me, [n, e]);
}
function xn(n, e) {
  e === void 0 && (e = []);
  const t = L(null);
  return H(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), H(() => {
    const i = n !== me;
    i && !t.current && (t.current = n), !i && t.current && (t.current = null);
  }, [n]), t.current ? yt(n, t.current) : me;
}
function el(n) {
  H(
    () => {
      if (!ti)
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
function tl(n, e) {
  return I(() => n.reduce((t, i) => {
    let {
      eventName: r,
      handler: s
    } = i;
    return t[r] = (o) => {
      s(o, e);
    }, t;
  }, {}), [n, e]);
}
function wr(n) {
  return I(() => n ? Ra(n) : null, [n]);
}
const wn = [];
function il(n, e) {
  e === void 0 && (e = tt);
  const [t] = n, i = wr(t ? Z(t) : null), [r, s] = B(wn);
  function o() {
    s(() => n.length ? n.map((l) => mr(l) ? i : new Hi(e(l), l)) : wn);
  }
  const a = si({
    callback: o
  });
  return pe(() => {
    a?.disconnect(), o(), n.forEach((l) => a?.observe(l));
  }, [n]), r;
}
function Cr(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const e = n.children[0];
  return wt(e) ? e : n;
}
function nl(n) {
  let {
    measure: e
  } = n;
  const [t, i] = B(null), r = U((d) => {
    for (const {
      target: c
    } of d)
      if (wt(c)) {
        i((u) => {
          const h = e(c);
          return u ? {
            ...u,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [e]), s = si({
    callback: r
  }), o = U((d) => {
    const c = Cr(d);
    s?.disconnect(), c && s?.observe(c), i(c ? e(c) : null);
  }, [e, s]), [a, l] = jt(o);
  return I(() => ({
    nodeRef: a,
    rect: t,
    setRef: l
  }), [t, a, l]);
}
const rl = [{
  sensor: Wi,
  options: {}
}, {
  sensor: Bi,
  options: {}
}], sl = {
  current: {}
}, Lt = {
  draggable: {
    measure: fn
  },
  droppable: {
    measure: fn,
    strategy: bt.WhileDragging,
    frequency: Ci.Optimized
  },
  dragOverlay: {
    measure: tt
  }
};
class ht extends Map {
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
const ol = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new ht(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Vt
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Lt,
  measureDroppableContainers: Vt,
  windowRect: null,
  measuringScheduled: !1
}, _r = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Vt,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Vt
}, Et = /* @__PURE__ */ Ee(_r), Er = /* @__PURE__ */ Ee(ol);
function al() {
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
      containers: new ht()
    }
  };
}
function ll(n, e) {
  switch (e.type) {
    case V.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case V.DragMove:
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
    case V.DragEnd:
    case V.DragCancel:
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
    case V.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: i
      } = t, r = new ht(n.droppable.containers);
      return r.set(i, t), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: r
        }
      };
    }
    case V.SetDroppableDisabled: {
      const {
        id: t,
        key: i,
        disabled: r
      } = e, s = n.droppable.containers.get(t);
      if (!s || i !== s.key)
        return n;
      const o = new ht(n.droppable.containers);
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
    case V.UnregisterDroppable: {
      const {
        id: t,
        key: i
      } = e, r = n.droppable.containers.get(t);
      if (!r || i !== r.key)
        return n;
      const s = new ht(n.droppable.containers);
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
function cl(n) {
  let {
    disabled: e
  } = n;
  const {
    active: t,
    activatorEvent: i,
    draggableNodes: r
  } = ge(Et), s = Ut(i), o = Ut(t?.id);
  return H(() => {
    if (!e && !i && s && o != null) {
      if (!ni(s) || document.activeElement === s.target)
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
          const u = na(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [i, e, r, o, s]), null;
}
function Dr(n, e) {
  let {
    transform: t,
    ...i
  } = e;
  return n != null && n.length ? n.reduce((r, s) => s({
    transform: r,
    ...i
  }), t) : t;
}
function dl(n) {
  return I(
    () => ({
      draggable: {
        ...Lt.draggable,
        ...n?.draggable
      },
      droppable: {
        ...Lt.droppable,
        ...n?.droppable
      },
      dragOverlay: {
        ...Lt.dragOverlay,
        ...n?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n?.draggable, n?.droppable, n?.dragOverlay]
  );
}
function ul(n) {
  let {
    activeNode: e,
    measure: t,
    initialRect: i,
    config: r = !0
  } = n;
  const s = L(!1), {
    x: o,
    y: a
  } = typeof r == "boolean" ? {
    x: r,
    y: r
  } : r;
  pe(() => {
    if (!o && !a || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !i)
      return;
    const d = e?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const c = t(d), u = ur(c, i);
    if (o || (u.x = 0), a || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = fr(d);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, o, a, i, t]);
}
const oi = /* @__PURE__ */ Ee({
  ...me,
  scaleX: 1,
  scaleY: 1
});
var Ie;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(Ie || (Ie = {}));
const hl = /* @__PURE__ */ Es(function(e) {
  var t, i, r, s;
  let {
    id: o,
    accessibility: a,
    autoScroll: l = !0,
    children: d,
    sensors: c = rl,
    collisionDetection: u = xa,
    measuring: h,
    modifiers: g,
    ..._
  } = e;
  const b = Ds(ll, void 0, al), [x, D] = b, [N, w] = ca(), [R, v] = B(Ie.Uninitialized), y = R === Ie.Initialized, {
    draggable: {
      active: m,
      nodes: E,
      translate: T
    },
    droppable: {
      containers: A
    }
  } = x, C = m != null ? E.get(m) : null, S = L({
    initial: null,
    translated: null
  }), O = I(() => {
    var q;
    return m != null ? {
      id: m,
      // It's possible for the active node to unmount while dragging
      data: (q = C?.data) != null ? q : sl,
      rect: S
    } : null;
  }, [m, C]), F = L(null), [Q, ee] = B(null), [K, ue] = B(null), $ = vt(_, Object.values(_)), he = _t("DndDescribedBy", o), Rt = I(() => A.getEnabled(), [A]), te = dl(h), {
    droppableRects: De,
    measureDroppableContainers: Fe,
    measuringScheduled: it
  } = Va(Rt, {
    dragging: y,
    dependencies: [T.x, T.y],
    config: te.droppable
  }), ae = Ua(E, m), St = I(() => K ? Kt(K) : null, [K]), Oe = Xr(), Re = Xa(ae, te.draggable.measure);
  ul({
    activeNode: m != null ? E.get(m) : null,
    config: Oe.layoutShiftCompensation,
    initialRect: Re,
    measure: te.draggable.measure
  });
  const G = yn(ae, te.draggable.measure, Re), nt = yn(ae ? ae.parentElement : null), ye = L({
    activatorEvent: null,
    active: null,
    activeNode: ae,
    collisionRect: null,
    collisions: null,
    droppableRects: De,
    draggableNodes: E,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: A,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), We = A.getNodeFor((t = ye.current.over) == null ? void 0 : t.id), Se = nl({
    measure: te.dragOverlay.measure
  }), Ge = (i = Se.nodeRef.current) != null ? i : ae, $e = y ? (r = Se.rect) != null ? r : G : null, Ui = !!(Se.nodeRef.current && Se.rect), Ki = Ja(Ui ? null : G), li = wr(Ge ? Z(Ge) : null), ke = Za(y ? We ?? ae : null), Nt = il(ke), At = Dr(g, {
    transform: {
      x: T.x - Ki.x,
      y: T.y - Ki.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: K,
    active: O,
    activeNodeRect: G,
    containerNodeRect: nt,
    draggingNodeRect: $e,
    over: ye.current.over,
    overlayNodeRect: Se.rect,
    scrollableAncestors: ke,
    scrollableAncestorRects: Nt,
    windowRect: li
  }), Vi = St ? Ye(St, T) : null, Xi = Qa(ke), Wr = xn(Xi), Gr = xn(Xi, [G]), je = Ye(At, Wr), Ue = $e ? _a($e, At) : null, rt = O && Ue ? u({
    active: O,
    collisionRect: Ue,
    droppableRects: De,
    droppableContainers: Rt,
    pointerCoordinates: Vi
  }) : null, Yi = dr(rt, "id"), [Te, qi] = B(null), $r = Ui ? At : Ye(At, Gr), jr = wa($r, (s = Te?.rect) != null ? s : null, G), ci = L(null), Ji = U(
    (q, ie) => {
      let {
        sensor: ne,
        options: ze
      } = ie;
      if (F.current == null)
        return;
      const le = E.get(F.current);
      if (!le)
        return;
      const re = q.nativeEvent, be = new ne({
        active: F.current,
        activeNode: le,
        event: re,
        options: ze,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ye,
        onAbort(Y) {
          if (!E.get(Y))
            return;
          const {
            onDragAbort: xe
          } = $.current, Ne = {
            id: Y
          };
          xe?.(Ne), N({
            type: "onDragAbort",
            event: Ne
          });
        },
        onPending(Y, Pe, xe, Ne) {
          if (!E.get(Y))
            return;
          const {
            onDragPending: ot
          } = $.current, Me = {
            id: Y,
            constraint: Pe,
            initialCoordinates: xe,
            offset: Ne
          };
          ot?.(Me), N({
            type: "onDragPending",
            event: Me
          });
        },
        onStart(Y) {
          const Pe = F.current;
          if (Pe == null)
            return;
          const xe = E.get(Pe);
          if (!xe)
            return;
          const {
            onDragStart: Ne
          } = $.current, st = {
            activatorEvent: re,
            active: {
              id: Pe,
              data: xe.data,
              rect: S
            }
          };
          Ot(() => {
            Ne?.(st), v(Ie.Initializing), D({
              type: V.DragStart,
              initialCoordinates: Y,
              active: Pe
            }), N({
              type: "onDragStart",
              event: st
            }), ee(ci.current), ue(re);
          });
        },
        onMove(Y) {
          D({
            type: V.DragMove,
            coordinates: Y
          });
        },
        onEnd: Ke(V.DragEnd),
        onCancel: Ke(V.DragCancel)
      });
      ci.current = be;
      function Ke(Y) {
        return async function() {
          const {
            active: xe,
            collisions: Ne,
            over: st,
            scrollAdjustedTranslate: ot
          } = ye.current;
          let Me = null;
          if (xe && ot) {
            const {
              cancelDrop: at
            } = $.current;
            Me = {
              activatorEvent: re,
              active: xe,
              collisions: Ne,
              delta: ot,
              over: st
            }, Y === V.DragEnd && typeof at == "function" && await Promise.resolve(at(Me)) && (Y = V.DragCancel);
          }
          F.current = null, Ot(() => {
            D({
              type: Y
            }), v(Ie.Uninitialized), qi(null), ee(null), ue(null), ci.current = null;
            const at = Y === V.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Me) {
              const di = $.current[at];
              di?.(Me), N({
                type: at,
                event: Me
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [E]
  ), Ur = U((q, ie) => (ne, ze) => {
    const le = ne.nativeEvent, re = E.get(ze);
    if (
      // Another sensor is already instantiating
      F.current !== null || // No active draggable
      !re || // Event has already been captured
      le.dndKit || le.defaultPrevented
    )
      return;
    const be = {
      active: re
    };
    q(ne, ie.options, be) === !0 && (le.dndKit = {
      capturedBy: ie.sensor
    }, F.current = ze, Ji(ne, ie));
  }, [E, Ji]), Zi = Ka(c, Ur);
  el(c), pe(() => {
    G && R === Ie.Initializing && v(Ie.Initialized);
  }, [G, R]), H(
    () => {
      const {
        onDragMove: q
      } = $.current, {
        active: ie,
        activatorEvent: ne,
        collisions: ze,
        over: le
      } = ye.current;
      if (!ie || !ne)
        return;
      const re = {
        active: ie,
        activatorEvent: ne,
        collisions: ze,
        delta: {
          x: je.x,
          y: je.y
        },
        over: le
      };
      Ot(() => {
        q?.(re), N({
          type: "onDragMove",
          event: re
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [je.x, je.y]
  ), H(
    () => {
      const {
        active: q,
        activatorEvent: ie,
        collisions: ne,
        droppableContainers: ze,
        scrollAdjustedTranslate: le
      } = ye.current;
      if (!q || F.current == null || !ie || !le)
        return;
      const {
        onDragOver: re
      } = $.current, be = ze.get(Yi), Ke = be && be.rect.current ? {
        id: be.id,
        rect: be.rect.current,
        data: be.data,
        disabled: be.disabled
      } : null, Y = {
        active: q,
        activatorEvent: ie,
        collisions: ne,
        delta: {
          x: le.x,
          y: le.y
        },
        over: Ke
      };
      Ot(() => {
        qi(Ke), re?.(Y), N({
          type: "onDragOver",
          event: Y
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Yi]
  ), pe(() => {
    ye.current = {
      activatorEvent: K,
      active: O,
      activeNode: ae,
      collisionRect: Ue,
      collisions: rt,
      droppableRects: De,
      draggableNodes: E,
      draggingNode: Ge,
      draggingNodeRect: $e,
      droppableContainers: A,
      over: Te,
      scrollableAncestors: ke,
      scrollAdjustedTranslate: je
    }, S.current = {
      initial: $e,
      translated: Ue
    };
  }, [O, ae, rt, Ue, E, Ge, $e, De, A, Te, ke, je]), Ga({
    ...Oe,
    delta: T,
    draggingRect: Ue,
    pointerCoordinates: Vi,
    scrollableAncestors: ke,
    scrollableAncestorRects: Nt
  });
  const Kr = I(() => ({
    active: O,
    activeNode: ae,
    activeNodeRect: G,
    activatorEvent: K,
    collisions: rt,
    containerNodeRect: nt,
    dragOverlay: Se,
    draggableNodes: E,
    droppableContainers: A,
    droppableRects: De,
    over: Te,
    measureDroppableContainers: Fe,
    scrollableAncestors: ke,
    scrollableAncestorRects: Nt,
    measuringConfiguration: te,
    measuringScheduled: it,
    windowRect: li
  }), [O, ae, G, K, rt, nt, Se, E, A, De, Te, Fe, ke, Nt, te, it, li]), Vr = I(() => ({
    activatorEvent: K,
    activators: Zi,
    active: O,
    activeNodeRect: G,
    ariaDescribedById: {
      draggable: he
    },
    dispatch: D,
    draggableNodes: E,
    over: Te,
    measureDroppableContainers: Fe
  }), [K, Zi, O, G, D, he, E, Te, Fe]);
  return M.createElement(cr.Provider, {
    value: w
  }, M.createElement(Et.Provider, {
    value: Vr
  }, M.createElement(Er.Provider, {
    value: Kr
  }, M.createElement(oi.Provider, {
    value: jr
  }, d)), M.createElement(cl, {
    disabled: a?.restoreFocus === !1
  })), M.createElement(ha, {
    ...a,
    hiddenTextDescribedById: he
  }));
  function Xr() {
    const q = Q?.autoScrollEnabled === !1, ie = typeof l == "object" ? l.enabled === !1 : l === !1, ne = y && !q && !ie;
    return typeof l == "object" ? {
      ...l,
      enabled: ne
    } : {
      enabled: ne
    };
  }
}), fl = /* @__PURE__ */ Ee(null), Cn = "button", gl = "Draggable";
function pl(n) {
  let {
    id: e,
    data: t,
    disabled: i = !1,
    attributes: r
  } = n;
  const s = _t(gl), {
    activators: o,
    activatorEvent: a,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: h
  } = ge(Et), {
    role: g = Cn,
    roleDescription: _ = "draggable",
    tabIndex: b = 0
  } = r ?? {}, x = l?.id === e, D = ge(x ? oi : fl), [N, w] = jt(), [R, v] = jt(), y = tl(o, e), m = vt(t);
  pe(
    () => (u.set(e, {
      id: e,
      key: s,
      node: N,
      activatorNode: R,
      data: m
    }), () => {
      const T = u.get(e);
      T && T.key === s && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const E = I(() => ({
    role: g,
    tabIndex: b,
    "aria-disabled": i,
    "aria-pressed": x && g === Cn ? !0 : void 0,
    "aria-roledescription": _,
    "aria-describedby": c.draggable
  }), [i, g, b, x, _, c.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: d,
    attributes: E,
    isDragging: x,
    listeners: i ? void 0 : y,
    node: N,
    over: h,
    setNodeRef: w,
    setActivatorNodeRef: v,
    transform: D
  };
}
function Rr() {
  return ge(Er);
}
const ml = "Droppable", vl = {
  timeout: 25
};
function yl(n) {
  let {
    data: e,
    disabled: t = !1,
    id: i,
    resizeObserverConfig: r
  } = n;
  const s = _t(ml), {
    active: o,
    dispatch: a,
    over: l,
    measureDroppableContainers: d
  } = ge(Et), c = L({
    disabled: t
  }), u = L(!1), h = L(null), g = L(null), {
    disabled: _,
    updateMeasurementsFor: b,
    timeout: x
  } = {
    ...vl,
    ...r
  }, D = vt(b ?? i), N = U(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      g.current != null && clearTimeout(g.current), g.current = setTimeout(() => {
        d(Array.isArray(D.current) ? D.current : [D.current]), g.current = null;
      }, x);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), w = si({
    callback: N,
    disabled: _ || !o
  }), R = U((E, T) => {
    w && (T && (w.unobserve(T), u.current = !1), E && w.observe(E));
  }, [w]), [v, y] = jt(R), m = vt(e);
  return H(() => {
    !w || !v.current || (w.disconnect(), u.current = !1, w.observe(v.current));
  }, [v, w]), H(
    () => (a({
      type: V.RegisterDroppable,
      element: {
        id: i,
        key: s,
        disabled: t,
        node: v,
        rect: h,
        data: m
      }
    }), () => a({
      type: V.UnregisterDroppable,
      key: s,
      id: i
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i]
  ), H(() => {
    t !== c.current.disabled && (a({
      type: V.SetDroppableDisabled,
      id: i,
      key: s,
      disabled: t
    }), c.current.disabled = t);
  }, [i, s, t, a]), {
    active: o,
    rect: h,
    isOver: l?.id === i,
    node: v,
    over: l,
    setNodeRef: y
  };
}
function bl(n) {
  let {
    animation: e,
    children: t
  } = n;
  const [i, r] = B(null), [s, o] = B(null), a = Ut(t);
  return !t && !i && a && r(a), pe(() => {
    if (!s)
      return;
    const l = i?.key, d = i?.props.id;
    if (l == null || d == null) {
      r(null);
      return;
    }
    Promise.resolve(e(d, s)).then(() => {
      r(null);
    });
  }, [e, i, s]), M.createElement(M.Fragment, null, t, i ? Rs(i, {
    ref: o
  }) : null);
}
const xl = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function wl(n) {
  let {
    children: e
  } = n;
  return M.createElement(Et.Provider, {
    value: _r
  }, M.createElement(oi.Provider, {
    value: xl
  }, e));
}
const Cl = {
  position: "fixed",
  touchAction: "none"
}, _l = (n) => ni(n) ? "transform 250ms ease" : void 0, El = /* @__PURE__ */ oe((n, e) => {
  let {
    as: t,
    activatorEvent: i,
    adjustScale: r,
    children: s,
    className: o,
    rect: a,
    style: l,
    transform: d,
    transition: c = _l
  } = n;
  if (!a)
    return null;
  const u = r ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...Cl,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: Be.Transform.toString(u),
    transformOrigin: r && i ? pa(i, a) : void 0,
    transition: typeof c == "function" ? c(i) : c,
    ...l
  };
  return M.createElement(t, {
    className: o,
    style: h,
    ref: e
  }, s);
}), Dl = (n) => (e) => {
  let {
    active: t,
    dragOverlay: i
  } = e;
  const r = {}, {
    styles: s,
    className: o
  } = n;
  if (s != null && s.active)
    for (const [a, l] of Object.entries(s.active))
      l !== void 0 && (r[a] = t.node.style.getPropertyValue(a), t.node.style.setProperty(a, l));
  if (s != null && s.dragOverlay)
    for (const [a, l] of Object.entries(s.dragOverlay))
      l !== void 0 && i.node.style.setProperty(a, l);
  return o != null && o.active && t.node.classList.add(o.active), o != null && o.dragOverlay && i.node.classList.add(o.dragOverlay), function() {
    for (const [l, d] of Object.entries(r))
      t.node.style.setProperty(l, d);
    o != null && o.active && t.node.classList.remove(o.active);
  };
}, Rl = (n) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = n;
  return [{
    transform: Be.Transform.toString(e)
  }, {
    transform: Be.Transform.toString(t)
  }];
}, Sl = {
  duration: 250,
  easing: "ease",
  keyframes: Rl,
  sideEffects: /* @__PURE__ */ Dl({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Nl(n) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: i,
    measuringConfiguration: r
  } = n;
  return ii((s, o) => {
    if (e === null)
      return;
    const a = t.get(s);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const d = Cr(o);
    if (!d)
      return;
    const {
      transform: c
    } = Z(o).getComputedStyle(o), u = hr(c);
    if (!u)
      return;
    const h = typeof e == "function" ? e : Al(e);
    return br(l, r.draggable.measure), h({
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
      droppableContainers: i,
      measuringConfiguration: r,
      transform: u
    });
  });
}
function Al(n) {
  const {
    duration: e,
    easing: t,
    sideEffects: i,
    keyframes: r
  } = {
    ...Sl,
    ...n
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
    }, h = {
      x: l.x - c.x,
      y: l.y - c.y,
      ...u
    }, g = r({
      ...d,
      active: o,
      dragOverlay: a,
      transform: {
        initial: l,
        final: h
      }
    }), [_] = g, b = g[g.length - 1];
    if (JSON.stringify(_) === JSON.stringify(b))
      return;
    const x = i?.({
      active: o,
      dragOverlay: a,
      ...d
    }), D = a.node.animate(g, {
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
let _n = 0;
function Ol(n) {
  return I(() => {
    if (n != null)
      return _n++, _n;
  }, [n]);
}
const kl = /* @__PURE__ */ M.memo((n) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: i,
    style: r,
    transition: s,
    modifiers: o,
    wrapperElement: a = "div",
    className: l,
    zIndex: d = 999
  } = n;
  const {
    activatorEvent: c,
    active: u,
    activeNodeRect: h,
    containerNodeRect: g,
    draggableNodes: _,
    droppableContainers: b,
    dragOverlay: x,
    over: D,
    measuringConfiguration: N,
    scrollableAncestors: w,
    scrollableAncestorRects: R,
    windowRect: v
  } = Rr(), y = ge(oi), m = Ol(u?.id), E = Dr(o, {
    activatorEvent: c,
    active: u,
    activeNodeRect: h,
    containerNodeRect: g,
    draggingNodeRect: x.rect,
    over: D,
    overlayNodeRect: x.rect,
    scrollableAncestors: w,
    scrollableAncestorRects: R,
    transform: y,
    windowRect: v
  }), T = Gi(h), A = Nl({
    config: i,
    draggableNodes: _,
    droppableContainers: b,
    measuringConfiguration: N
  }), C = T ? x.setRef : void 0;
  return M.createElement(wl, null, M.createElement(bl, {
    animation: A
  }, u && m ? M.createElement(El, {
    key: m,
    id: u.id,
    ref: C,
    as: a,
    activatorEvent: c,
    adjustScale: e,
    className: l,
    transition: s,
    rect: T,
    style: {
      zIndex: d,
      ...r
    },
    transform: E
  }, t) : null));
});
function $i(n, e, t) {
  const i = n.slice();
  return i.splice(t < 0 ? i.length + t : t, 0, i.splice(e, 1)[0]), i;
}
function Tl(n, e) {
  return n.reduce((t, i, r) => {
    const s = e.get(i);
    return s && (t[r] = s), t;
  }, Array(n.length));
}
function zt(n) {
  return n !== null && n >= 0;
}
function zl(n, e) {
  if (n === e)
    return !0;
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function Pl(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const Sr = (n) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: i,
    index: r
  } = n;
  const s = $i(e, i, t), o = e[r], a = s[r];
  return !a || !o ? null : {
    x: a.left - o.left,
    y: a.top - o.top,
    scaleX: a.width / o.width,
    scaleY: a.height / o.height
  };
}, Nr = "Sortable", Ar = /* @__PURE__ */ M.createContext({
  activeIndex: -1,
  containerId: Nr,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Sr,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Ml(n) {
  let {
    children: e,
    id: t,
    items: i,
    strategy: r = Sr,
    disabled: s = !1
  } = n;
  const {
    active: o,
    dragOverlay: a,
    droppableRects: l,
    over: d,
    measureDroppableContainers: c
  } = Rr(), u = _t(Nr, t), h = a.rect !== null, g = I(() => i.map((y) => typeof y == "object" && "id" in y ? y.id : y), [i]), _ = o != null, b = o ? g.indexOf(o.id) : -1, x = d ? g.indexOf(d.id) : -1, D = L(g), N = !zl(g, D.current), w = x !== -1 && b === -1 || N, R = Pl(s);
  pe(() => {
    N && _ && c(g);
  }, [N, g, _, c]), H(() => {
    D.current = g;
  }, [g]);
  const v = I(
    () => ({
      activeIndex: b,
      containerId: u,
      disabled: R,
      disableTransforms: w,
      items: g,
      overIndex: x,
      useDragOverlay: h,
      sortedRects: Tl(g, l),
      strategy: r
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [b, u, R.draggable, R.droppable, w, g, x, l, h, r]
  );
  return M.createElement(Ar.Provider, {
    value: v
  }, e);
}
const Ll = (n) => {
  let {
    id: e,
    items: t,
    activeIndex: i,
    overIndex: r
  } = n;
  return $i(t, i, r).indexOf(e);
}, Il = (n) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: i,
    index: r,
    items: s,
    newIndex: o,
    previousItems: a,
    previousContainerId: l,
    transition: d
  } = n;
  return !d || !i || a !== s && r === o ? !1 : t ? !0 : o !== r && e === l;
}, Hl = {
  duration: 200,
  easing: "ease"
}, Or = "transform", Bl = /* @__PURE__ */ Be.Transition.toString({
  property: Or,
  duration: 0,
  easing: "linear"
}), Fl = {
  roleDescription: "sortable"
};
function Wl(n) {
  let {
    disabled: e,
    index: t,
    node: i,
    rect: r
  } = n;
  const [s, o] = B(null), a = L(t);
  return pe(() => {
    if (!e && t !== a.current && i.current) {
      const l = r.current;
      if (l) {
        const d = tt(i.current, {
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
  }, [e, t, i, r]), H(() => {
    s && o(null);
  }, [s]), s;
}
function Gl(n) {
  let {
    animateLayoutChanges: e = Il,
    attributes: t,
    disabled: i,
    data: r,
    getNewIndex: s = Ll,
    id: o,
    strategy: a,
    resizeObserverConfig: l,
    transition: d = Hl
  } = n;
  const {
    items: c,
    containerId: u,
    activeIndex: h,
    disabled: g,
    disableTransforms: _,
    sortedRects: b,
    overIndex: x,
    useDragOverlay: D,
    strategy: N
  } = ge(Ar), w = $l(i, g), R = c.indexOf(o), v = I(() => ({
    sortable: {
      containerId: u,
      index: R,
      items: c
    },
    ...r
  }), [u, r, R, c]), y = I(() => c.slice(c.indexOf(o)), [c, o]), {
    rect: m,
    node: E,
    isOver: T,
    setNodeRef: A
  } = yl({
    id: o,
    data: v,
    disabled: w.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: y,
      ...l
    }
  }), {
    active: C,
    activatorEvent: S,
    activeNodeRect: O,
    attributes: F,
    setNodeRef: Q,
    listeners: ee,
    isDragging: K,
    over: ue,
    setActivatorNodeRef: $,
    transform: he
  } = pl({
    id: o,
    data: v,
    attributes: {
      ...Fl,
      ...t
    },
    disabled: w.draggable
  }), Rt = Qo(A, Q), te = !!C, De = te && !_ && zt(h) && zt(x), Fe = !D && K, it = Fe && De ? he : null, St = De ? it ?? (a ?? N)({
    rects: b,
    activeNodeRect: O,
    activeIndex: h,
    overIndex: x,
    index: R
  }) : null, Oe = zt(h) && zt(x) ? s({
    id: o,
    items: c,
    activeIndex: h,
    overIndex: x
  }) : R, Re = C?.id, G = L({
    activeId: Re,
    items: c,
    newIndex: Oe,
    containerId: u
  }), nt = c !== G.current.items, ye = e({
    active: C,
    containerId: u,
    isDragging: K,
    isSorting: te,
    id: o,
    index: R,
    items: c,
    newIndex: G.current.newIndex,
    previousItems: G.current.items,
    previousContainerId: G.current.containerId,
    transition: d,
    wasDragging: G.current.activeId != null
  }), We = Wl({
    disabled: !ye,
    index: R,
    node: E,
    rect: m
  });
  return H(() => {
    te && G.current.newIndex !== Oe && (G.current.newIndex = Oe), u !== G.current.containerId && (G.current.containerId = u), c !== G.current.items && (G.current.items = c);
  }, [te, Oe, u, c]), H(() => {
    if (Re === G.current.activeId)
      return;
    if (Re != null && G.current.activeId == null) {
      G.current.activeId = Re;
      return;
    }
    const Ge = setTimeout(() => {
      G.current.activeId = Re;
    }, 50);
    return () => clearTimeout(Ge);
  }, [Re]), {
    active: C,
    activeIndex: h,
    attributes: F,
    data: v,
    rect: m,
    index: R,
    newIndex: Oe,
    items: c,
    isOver: T,
    isSorting: te,
    isDragging: K,
    listeners: ee,
    node: E,
    overIndex: x,
    over: ue,
    setNodeRef: Rt,
    setActivatorNodeRef: $,
    setDroppableNodeRef: A,
    setDraggableNodeRef: Q,
    transform: We ?? St,
    transition: Se()
  };
  function Se() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      We || // Or to prevent items jumping to back to their "new" position when items change
      nt && G.current.newIndex === R
    )
      return Bl;
    if (!(Fe && !ni(S) || !d) && (te || ye))
      return Be.Transition.toString({
        ...d,
        property: Or
      });
  }
}
function $l(n, e) {
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
function Yt(n) {
  if (!n)
    return !1;
  const e = n.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const jl = [W.Down, W.Right, W.Up, W.Left], Ul = (n, e) => {
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
  if (jl.includes(n.code)) {
    if (n.preventDefault(), !t || !i)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = r.get(u.id);
      if (h)
        switch (n.code) {
          case W.Down:
            i.top < h.top && l.push(u);
            break;
          case W.Up:
            i.top > h.top && l.push(u);
            break;
          case W.Left:
            i.left > h.left && l.push(u);
            break;
          case W.Right:
            i.left < h.left && l.push(u);
            break;
        }
    });
    const d = ya({
      collisionRect: i,
      droppableRects: r,
      droppableContainers: l
    });
    let c = dr(d, "id");
    if (c === o?.id && d.length > 1 && (c = d[1].id), c != null) {
      const u = s.get(t.id), h = s.get(c), g = h ? r.get(h.id) : null, _ = h?.node.current;
      if (_ && g && u && h) {
        const x = ri(_).some((y, m) => a[m] !== y), D = kr(u, h), N = Kl(u, h), w = x || !D ? {
          x: 0,
          y: 0
        } : {
          x: N ? i.width - g.width : 0,
          y: N ? i.height - g.height : 0
        }, R = {
          x: g.left,
          y: g.top
        };
        return w.x && w.y ? R : yt(R, w);
      }
    }
  }
};
function kr(n, e) {
  return !Yt(n) || !Yt(e) ? !1 : n.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Kl(n, e) {
  return !Yt(n) || !Yt(e) || !kr(n, e) ? !1 : n.data.current.sortable.index < e.data.current.sortable.index;
}
const En = ({ id: n, children: e }) => {
  const { attributes: t, listeners: i, setNodeRef: r, transform: s, transition: o } = Gl({
    id: n
  }), a = {
    transform: Be.Translate.toString(s),
    transition: o,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return f("div", {
    ref: r,
    style: a,
    ...t,
    ...i,
    children: e
  });
}, ji = ({ blocks: n, sortable: e = !1, onSort: t = () => {
}, main: i = !1 }) => {
  const [r, s] = B([]);
  Nn(() => {
    s(n.map((u, h) => ({
      id: u.id ?? h.toString(),
      render: u.render
    })));
  }, [n]);
  const [o, a] = B(null), l = fa(un(Wi), un(Bi, {
    coordinateGetter: Ul
  })), d = (u) => {
    a(u.active.id);
  }, c = (u) => {
    const { active: h, over: g } = u;
    a(null), g && h.id !== g.id && s((_) => {
      const b = _.findIndex((D) => D.id === h.id), x = _.findIndex((D) => D.id === g.id);
      return $i(_, b, x);
    });
  };
  return f("div", {
    className: j("flex flex-wrap items-stretch gap-4", i && "flex-1"),
    children: P(hl, {
      sensors: l,
      onDragStart: d,
      onDragEnd: c,
      children: [f(Ml, {
        items: r,
        children: r.map((u) => f(En, {
          id: u.id,
          children: u.render
        }, u.id))
      }), f(kl, {
        children: o ? f(En, {
          id: o,
          children: r.find((u) => u.id === o)?.render
        }) : null
      })]
    })
  });
};
ji.displayName = "GroupMasonry";
ji.__isPageLayoutGroup = !0;
const Vl = oe(function({ children: e, aside: t, header: i, variant: r = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && or("Page", e, ["block", "group"]), f("div", {
    ref: s,
    className: "h-full",
    children: P("div", {
      className: j("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [P("main", {
        className: j("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", r === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [i && f("header", {
          className: j("sticky top-0 z-30 bg-f1-background"),
          children: i
        }), f("div", {
          className: "flex-1",
          children: e
        })]
      }), t && f("aside", {
        className: j("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", r === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), jc = {
  Page: Ce("Page", Vl),
  Block: Ce("Block", ei),
  BlockContent: Ce("BlockContent", qo),
  Group: Ce("Group", Mi),
  GroupGrid: Ce("GroupGrid", Qt),
  GroupMasonry: Ce("GroupMasonry", ji)
}, Uc = ve({
  name: "StandardLayout",
  type: "layout"
}, qn), Kc = ve({
  name: "TwoColumnLayout",
  type: "layout"
}, wo), Vc = ve({
  name: "HomeLayout",
  type: "layout"
}, xo);
function Je(n) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Je(n);
}
function Xl(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yl(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, Pr(i.key), i);
  }
}
function ql(n, e, t) {
  return e && Yl(n.prototype, e), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Jl(n, e, t) {
  return e = qt(e), Zl(n, Tr() ? Reflect.construct(e, t || [], qt(n).constructor) : e.apply(n, t));
}
function Zl(n, e) {
  if (e && (Je(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ql(n);
}
function Ql(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Tr() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Tr = function() {
    return !!n;
  })();
}
function qt(n) {
  return qt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, qt(n);
}
function ec(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && _i(n, e);
}
function _i(n, e) {
  return _i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, r) {
    return i.__proto__ = r, i;
  }, _i(n, e);
}
function zr(n, e, t) {
  return e = Pr(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Pr(n) {
  var e = tc(n, "string");
  return Je(e) == "symbol" ? e : e + "";
}
function tc(n, e) {
  if (Je(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (Je(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var ai = /* @__PURE__ */ (function(n) {
  function e() {
    return Xl(this, e), Jl(this, e, arguments);
  }
  return ec(e, n), ql(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(M.Component);
zr(ai, "displayName", "ZAxis");
zr(ai, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var ic = ["option", "isActive"];
function ft() {
  return ft = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, ft.apply(this, arguments);
}
function nc(n, e) {
  if (n == null) return {};
  var t = rc(n, e), i, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (r = 0; r < s.length; r++)
      i = s[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (t[i] = n[i]);
  }
  return t;
}
function rc(n, e) {
  if (n == null) return {};
  var t = {};
  for (var i in n)
    if (Object.prototype.hasOwnProperty.call(n, i)) {
      if (e.indexOf(i) >= 0) continue;
      t[i] = n[i];
    }
  return t;
}
function sc(n) {
  var e = n.option, t = n.isActive, i = nc(n, ic);
  return typeof e == "string" ? /* @__PURE__ */ M.createElement(nn, ft({
    option: /* @__PURE__ */ M.createElement(Os, ft({
      type: e
    }, i)),
    isActive: t,
    shapeType: "symbols"
  }, i)) : /* @__PURE__ */ M.createElement(nn, ft({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, i));
}
function Ze(n) {
  "@babel/helpers - typeof";
  return Ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ze(n);
}
function gt() {
  return gt = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, gt.apply(this, arguments);
}
function Dn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function ce(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Dn(Object(t), !0).forEach(function(i) {
      He(n, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Dn(Object(t)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return n;
}
function oc(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Rn(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, Lr(i.key), i);
  }
}
function ac(n, e, t) {
  return e && Rn(n.prototype, e), t && Rn(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function lc(n, e, t) {
  return e = Jt(e), cc(n, Mr() ? Reflect.construct(e, t || [], Jt(n).constructor) : e.apply(n, t));
}
function cc(n, e) {
  if (e && (Ze(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dc(n);
}
function dc(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Mr() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Mr = function() {
    return !!n;
  })();
}
function Jt(n) {
  return Jt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Jt(n);
}
function uc(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Ei(n, e);
}
function Ei(n, e) {
  return Ei = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, r) {
    return i.__proto__ = r, i;
  }, Ei(n, e);
}
function He(n, e, t) {
  return e = Lr(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Lr(n) {
  var e = hc(n, "string");
  return Ze(e) == "symbol" ? e : e + "";
}
function hc(n, e) {
  if (Ze(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (Ze(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var Dt = /* @__PURE__ */ (function(n) {
  function e() {
    var t;
    oc(this, e);
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s];
    return t = lc(this, e, [].concat(r)), He(t, "state", {
      isAnimationFinished: !1
    }), He(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), He(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), He(t, "id", Is("recharts-scatter-")), t;
  }
  return uc(e, n), ac(e, [{
    key: "renderSymbolsStatically",
    value: function(i) {
      var r = this, s = this.props, o = s.shape, a = s.activeShape, l = s.activeIndex, d = ui(this.props, !1);
      return i.map(function(c, u) {
        var h = l === u, g = h ? a : o, _ = ce(ce({}, d), c);
        return /* @__PURE__ */ M.createElement(lt, gt({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c?.cx, "-").concat(c?.cy, "-").concat(c?.size, "-").concat(u)
        }, ks(r.props, c, u), {
          role: "img"
        }), /* @__PURE__ */ M.createElement(sc, gt({
          option: g,
          isActive: h,
          key: "symbol-".concat(u)
        }, _)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var i = this, r = this.props, s = r.points, o = r.isAnimationActive, a = r.animationBegin, l = r.animationDuration, d = r.animationEasing, c = r.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ M.createElement(Ts, {
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
      }, function(h) {
        var g = h.t, _ = s.map(function(b, x) {
          var D = u && u[x];
          if (D) {
            var N = kt(D.cx, b.cx), w = kt(D.cy, b.cy), R = kt(D.size, b.size);
            return ce(ce({}, b), {}, {
              cx: N(g),
              cy: w(g),
              size: R(g)
            });
          }
          var v = kt(0, b.size);
          return ce(ce({}, b), {}, {
            size: v(g)
          });
        });
        return /* @__PURE__ */ M.createElement(lt, null, i.renderSymbolsStatically(_));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var i = this.props, r = i.points, s = i.isAnimationActive, o = this.state.prevPoints;
      return s && r && r.length && (!o || !Wn(o, r)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(r);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var r = this.props, s = r.points, o = r.xAxis, a = r.yAxis, l = r.children, d = Gn(l, zs);
      return d ? d.map(function(c, u) {
        var h = c.props, g = h.direction, _ = h.dataKey;
        return /* @__PURE__ */ M.cloneElement(c, {
          key: "".concat(g, "-").concat(_, "-").concat(s[u]),
          data: s,
          xAxis: o,
          yAxis: a,
          layout: g === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(x, D) {
            return {
              x: x.cx,
              y: x.cy,
              value: g === "x" ? +x.node.x : +x.node.y,
              errorVal: Pt(x, D)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var i = this.props, r = i.points, s = i.line, o = i.lineType, a = i.lineJointType, l = ui(this.props, !1), d = ui(s, !1), c, u;
      if (o === "joint")
        c = r.map(function(w) {
          return {
            x: w.cx,
            y: w.cy
          };
        });
      else if (o === "fitting") {
        var h = Ps(r), g = h.xmin, _ = h.xmax, b = h.a, x = h.b, D = function(R) {
          return b * R + x;
        };
        c = [{
          x: g,
          y: D(g)
        }, {
          x: _,
          y: D(_)
        }];
      }
      var N = ce(ce(ce({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, d), {}, {
        points: c
      });
      return /* @__PURE__ */ M.isValidElement(s) ? u = /* @__PURE__ */ M.cloneElement(s, N) : Ms(s) ? u = s(N) : u = /* @__PURE__ */ M.createElement(Ls, gt({}, N, {
        type: a
      })), /* @__PURE__ */ M.createElement(lt, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, u);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, r = i.hide, s = i.points, o = i.line, a = i.className, l = i.xAxis, d = i.yAxis, c = i.left, u = i.top, h = i.width, g = i.height, _ = i.id, b = i.isAnimationActive;
      if (r || !s || !s.length)
        return null;
      var x = this.state.isAnimationFinished, D = ts("recharts-scatter", a), N = l && l.allowDataOverflow, w = d && d.allowDataOverflow, R = N || w, v = Ve(_) ? this.id : _;
      return /* @__PURE__ */ M.createElement(lt, {
        className: D,
        clipPath: R ? "url(#clipPath-".concat(v, ")") : null
      }, N || w ? /* @__PURE__ */ M.createElement("defs", null, /* @__PURE__ */ M.createElement("clipPath", {
        id: "clipPath-".concat(v)
      }, /* @__PURE__ */ M.createElement("rect", {
        x: N ? c : c - h / 2,
        y: w ? u : u - g / 2,
        width: N ? h : h * 2,
        height: w ? g : g * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ M.createElement(lt, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!b || x) && $n.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, r) {
      return i.animationId !== r.prevAnimationId ? {
        prevAnimationId: i.animationId,
        curPoints: i.points,
        prevPoints: r.curPoints
      } : i.points !== r.curPoints ? {
        curPoints: i.points
      } : null;
    }
  }]);
})(Ss);
He(Dt, "displayName", "Scatter");
He(Dt, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Hs.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
He(Dt, "getComposedData", function(n) {
  var e = n.xAxis, t = n.yAxis, i = n.zAxis, r = n.item, s = n.displayedData, o = n.xAxisTicks, a = n.yAxisTicks, l = n.offset, d = r.props.tooltipType, c = Gn(r.props.children, Bs), u = Ve(e.dataKey) ? r.props.dataKey : e.dataKey, h = Ve(t.dataKey) ? r.props.dataKey : t.dataKey, g = i && i.dataKey, _ = i ? i.range : ai.defaultProps.range, b = _ && _[0], x = e.scale.bandwidth ? e.scale.bandwidth() : 0, D = t.scale.bandwidth ? t.scale.bandwidth() : 0, N = s.map(function(w, R) {
    var v = Pt(w, u), y = Pt(w, h), m = !Ve(g) && Pt(w, g) || "-", E = [{
      name: Ve(e.dataKey) ? r.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: v,
      payload: w,
      dataKey: u,
      type: d
    }, {
      name: Ve(t.dataKey) ? r.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: y,
      payload: w,
      dataKey: h,
      type: d
    }];
    m !== "-" && E.push({
      name: i.name || i.dataKey,
      unit: i.unit || "",
      value: m,
      payload: w,
      dataKey: g,
      type: d
    });
    var T = rn({
      axis: e,
      ticks: o,
      bandSize: x,
      entry: w,
      index: R,
      dataKey: u
    }), A = rn({
      axis: t,
      ticks: a,
      bandSize: D,
      entry: w,
      index: R,
      dataKey: h
    }), C = m !== "-" ? i.scale(m) : b, S = Math.sqrt(Math.max(C, 0) / Math.PI);
    return ce(ce({}, w), {}, {
      cx: T,
      cy: A,
      x: T - S,
      y: A - S,
      xAxis: e,
      yAxis: t,
      zAxis: i,
      width: 2 * S,
      height: 2 * S,
      size: C,
      node: {
        x: v,
        y,
        z: m
      },
      tooltipPayload: E,
      tooltipPosition: {
        x: T,
        y: A
      },
      payload: w
    }, c && c[R] && c[R].props);
  });
  return ce({
    points: N
  }, l);
});
var fc = Fs({
  chartName: "ComposedChart",
  GraphicalChild: [jn, Ws, Un, Dt],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kn
  }, {
    axisType: "yAxis",
    AxisComp: bi
  }, {
    axisType: "zAxis",
    AxisComp: ai
  }],
  formatAxisMap: Gs
});
const gc = (n) => {
  const e = (t) => {
    const { cx: i, cy: r, fill: s, payload: o } = t, a = () => {
      if (!o) return "-";
      if (o[n] !== void 0)
        return o[n];
      for (const [l, d] of Object.entries(o))
        if (typeof d == "number" && l !== "x")
          return d;
      return "-";
    };
    return f("circle", {
      cx: i,
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
  return e.displayName = `Scatter-${n}`, e;
}, pc = ({ dataConfig: n, data: e, xAxis: t, yAxis: i = {
  hide: !0
}, label: r = !1, hideTooltip: s = !1, hideGrid: o = !1, aspect: a, legend: l, showValueUnderLabel: d = !1, bar: c, line: u, scatter: h, onClick: g }, _) => {
  const b = $s(e), x = c?.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], D = u?.categories ? Array.isArray(u.categories) ? u.categories : [u.categories] : [], N = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], w = [...x, ...D, ...N], R = Math.max(...b.flatMap((m) => w.map((E) => js(i?.tickFormatter ? i.tickFormatter(`${m[E]}`) : `${m[E]}`)))), v = [c, u, h].filter((m) => m?.axisPosition === "left"), y = [c, u, h].filter((m) => m?.axisPosition === "right");
  return f(Us, {
    config: n,
    ref: _,
    aspect: a,
    children: P(fc, {
      accessibilityLayer: !0,
      data: b,
      margin: {
        left: i && !i.hide ? 0 : 12,
        right: 12,
        top: r ? 24 : 0,
        bottom: d ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (m) => {
        if (!g || !m.activeLabel || !m.activePayload)
          return;
        const E = {
          label: m.activeLabel,
          values: {}
        };
        for (const T of m.activePayload)
          E.values[T.name] = T.value;
        g(E);
      },
      children: [!s && f(Ks, {
        ...Vs(),
        content: f(Xs, {
          yAxisFormatter: i.tickFormatter
        })
      }), !o && f(Ys, {
        ...qs()
      }), v.length > 0 && f(bi, {
        ...sn(i),
        tick: !0,
        width: i.width ?? R + 20 + (y.length > 0 && v[0]?.axisLabel ? 20 : 0),
        hide: i.hide || v.some((m) => m?.hideAxis),
        label: v[0]?.axisLabel ? {
          value: v[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), y.length > 0 && f(bi, {
        ...sn(i),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: i.width ?? R + 20 + (v.length > 0 && y[0]?.axisLabel ? 20 : 0),
        hide: i.hide || y.some((m) => m?.hideAxis),
        label: y[0]?.axisLabel ? {
          value: y[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), f(Kn, {
        ...Js(t),
        hide: t?.hide,
        tick: d ? (m) => {
          const { x: E, y: T, payload: A } = m, C = e.find((F) => F.label === A.value)?.values || "", S = Object.keys(C).length === 1 ? Object.values(C)?.[0] : void 0, O = S !== void 0 && i.tickFormatter ? i.tickFormatter(`${S}`) : S.toLocaleString();
          return P("g", {
            transform: `translate(${E},${T})`,
            children: [f("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: A.value
            }), !!S && f("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: O
            })]
          });
        } : void 0
      }), x.map((m, E) => f(Un, {
        isAnimationActive: !1,
        dataKey: String(m),
        fill: n[m].color ? ct(n[m].color) : hi(E),
        radius: 4,
        maxBarSize: 32,
        children: r && f($n, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(m)}`)
      }, `bar-${String(m)}`)), D.map((m, E) => f(jn, {
        type: u?.lineType ?? "natural",
        dataKey: String(m),
        stroke: n[m].color ? ct(n[m].color) : hi(x.length + E),
        strokeWidth: 2,
        dot: u?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: u?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(m)}`)), N.map((m, E) => f(Dt, {
        dataKey: String(m),
        fill: n[m].color ? ct(n[m].color) : hi(x.length + D.length + E),
        r: 4,
        isAnimationActive: !1,
        yAxisId: h?.axisPosition === "right" ? "right" : void 0,
        shape: gc(String(m))
      }, `scatter-${String(m)}`)), l && f(Zs, {
        content: f(Qs, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, mc = Vn(pc), vc = ({ value: n, max: e = 100, label: t, color: i }, r) => {
  const s = i ? ct(i) : ct("categorical-1"), o = n / e * 100;
  return P("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [f("div", {
      className: "flex-grow",
      children: f(eo, {
        color: s,
        value: o,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": n,
        "aria-label": `${o.toFixed(1)}%`
      })
    }), t && f("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, yc = Vn(vc), Xc = ve(
  {
    name: "AreaChart",
    type: "info"
  },
  to
), Yc = ve(
  {
    name: "BarChart",
    type: "info"
  },
  io
), qc = ve(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  no
), Jc = ve(
  {
    name: "LineChart",
    type: "info"
  },
  ro
), Zc = ve(
  {
    name: "PieChart",
    type: "info"
  },
  so
), Qc = ve(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  oo
), ed = ve(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  yc
), td = ve(
  {
    name: "ComboChart",
    type: "info"
  },
  mc
), bc = (n) => typeof n == "boolean" || !n ? {
  show: !!n,
  invertStatus: !1
} : {
  show: n.show ?? !0,
  invertStatus: n.invertStatus ?? !1
}, Ir = ({ label: n, ...e }) => {
  const t = ao(), i = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), r = bc(e.trend), s = t(e.comparison), o = lo(i.numericValue, i.formatterOptions), a = on(s.numericValue), l = on(i.numericValue), d = I(() => {
    if (!(!a || !r.show) && !(!a || !l))
      return (l - a) / a * 100;
  }, [l, a, r.show]);
  return P("div", {
    className: "flex flex-col gap-2",
    children: [n && f("div", {
      children: n
    }), P("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [f("span", {
        className: "font-bold text-2xl",
        children: o
      }), a !== void 0 && f(co, {
        percentage: d,
        amount: s,
        invertStatus: r.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, xc = () => P("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [f(we, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), P("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [f(we, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), f(we, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
Ir.displayName = "F0BigNumber";
const wc = An(Ir, xc), id = Ce("F0BigNumber", wc), nd = is.filter(
  (n) => n !== "ai"
), rd = kn, sd = ["default", "outline", "neutral"], od = kn, ad = ["sm", "md", "lg"], ld = ["compact", "expanded"], cd = ns, dd = [
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
], Di = ({ count: n, list: e }) => {
  const [t, i] = B(!1), r = f(It, {
    label: `+${n}`
  });
  return e?.length ? P(Tn, {
    open: t,
    onOpenChange: i,
    children: [f(zn, {
      asChild: !0,
      children: f("button", {
        className: rs("inline-flex flex-shrink-0 items-center"),
        children: r
      })
    }), f(Pn, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: P(Mn, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, o) => f("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: f(It, {
            ...s
          })
        }, o)), f(Ln, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
Di.displayName = "ChipCounter";
const Hr = ({ chips: n, max: e = 4, remainingCount: t, layout: i = "compact" }) => {
  if (i === "fill")
    return f(ss, {
      items: n,
      renderListItem: (l) => f(It, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => f(Di, {
        count: (t ?? 0) + l,
        list: t ? void 0 : n.slice(n.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const r = n.slice(0, e), s = n.slice(e), o = t ?? n.length - e, a = o > 0;
  return P("div", {
    className: "flex items-center gap-2",
    children: [r.map((l, d) => f(It, {
      ...l
    }, d)), a && f(Di, {
      count: o,
      list: t ? void 0 : s
    })]
  });
};
Hr.displayName = "F0ChipList";
const ud = Ce("F0ChipList", Hr), hd = os, Cc = 388;
function _c({ filters: n, value: e, onChange: t, height: i, width: r = 600, className: s, showApplyButton: o = !0, applyButtonLabel: a }) {
  const l = Ai(), [d, c] = B(null), [u, h] = B(e);
  H(() => {
    h(e);
  }, [e]), H(() => {
    if (!d && n) {
      const x = Object.keys(n);
      if (x.length > 0) {
        const D = x.find((N) => {
          const w = u[N], R = Qi(n[N].type);
          return w !== void 0 && !R.isEmpty(w, {
            schema: n[N],
            i18n: l
          });
        });
        c(D ?? x[0]);
      }
    }
  }, [n, d, u, l]);
  const g = (x, D) => {
    const N = {
      ...u,
      [x]: D
    };
    h(N), o || t(N);
  }, _ = () => {
    t(u);
  }, b = I(() => i || Object.entries(n).reduce((D, [N, w]) => {
    const R = Qi(w.type);
    return Math.max(D, R?.formHeight || Cc);
  }, 0), [n, i]);
  return !n || Object.keys(n).length === 0 ? null : f("div", {
    className: j("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", s),
    style: {
      width: r
    },
    children: f(as, {
      filters: n,
      tempFilters: u,
      selectedFilterKey: d,
      onFilterSelect: c,
      onFilterChange: g,
      onApply: _,
      height: b,
      showApplyButton: o,
      applyButtonLabel: a
    })
  });
}
_c.displayName = "F0FilterPickerContent";
const Ec = oe((n, e) => f(Pi, {
  ref: e,
  variant: "heading",
  ...n
}));
Ec.displayName = "F0Heading";
const fd = Ce(
  "F0GridStack",
  zi
), Dc = ({ benefits: n }) => f("div", {
  className: "flex flex-col gap-2",
  children: n.map((e, t) => f(Rc, {
    text: e
  }, t))
}), Rc = ({ text: n }) => P("div", {
  className: "flex flex-row items-start gap-2",
  children: [f(On, {
    icon: cs,
    size: "md",
    className: "text-f1-icon-positive"
  }), f("span", {
    children: n
  })]
}), Br = oe(({ title: n, image: e, benefits: t, actions: i, withShadow: r = !0, module: s, moduleName: o, tag: a, promoTag: l }, d) => P("div", {
  ref: d,
  className: j("bg-white flex flex-row rounded-xl border border-f1-border-secondary", r && "shadow-md"),
  children: [f("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: f("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), P("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [P("div", {
      className: "flex flex-col gap-5",
      children: [P("div", {
        className: "flex flex-col gap-2",
        children: [P("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && f(In, {
            module: s
          }), o && f("p", {
            className: "text-base font-medium text-f1-foreground",
            children: o
          })]
        }), (a || l) && P("div", {
          className: "flex justify-start gap-2",
          children: [a && f(ls, {
            icon: a.icon,
            text: a.label
          }), l && f(uo, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), f("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: n
        })]
      }), f(Dc, {
        benefits: t
      })]
    }), i && f("div", {
      className: "flex gap-3",
      children: i
    })]
  })]
}));
Br.displayName = "ProductBlankslate";
function Sc({ isOpen: n, onClose: e, title: t, children: i, module: r, portalContainer: s }) {
  const [o, a] = B(n);
  return H(() => {
    a(n);
  }, [n]), f(ds, {
    open: o,
    onOpenChange: (d) => {
      a(d), d || e();
    },
    modal: !0,
    children: P(us, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [P("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [P(hs, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [r && f(In, {
            module: r,
            size: "lg"
          }), t]
        }), f(Ni, {
          variant: "outline",
          icon: Hn,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), P(Mn, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [i, f(Ln, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function gd({ isOpen: n, onClose: e, title: t, image: i, benefits: r, errorMessage: s, successMessage: o, loadingState: a, nextSteps: l, closeLabel: d, primaryAction: c, modalTitle: u, modalModule: h, secondaryAction: g, portalContainer: _, tag: b, promoTag: x, showResponseDialog: D = !0 }) {
  const [N, w] = B(n), [R, v] = B(null), [y, m] = B(!1), E = async () => {
    if (c?.onClick) {
      m(!0);
      try {
        await c.onClick(), w(!1), D && v("success");
      } catch {
        D && v("error");
      } finally {
        m(!1);
      }
    }
  }, T = () => {
    w(!1), e?.();
  }, A = y;
  return P(xt, {
    children: [f(Sc, {
      isOpen: N,
      onClose: T,
      title: u,
      module: h,
      portalContainer: _,
      children: f("div", {
        className: "pb-4 pl-4",
        children: f(Br, {
          title: t,
          image: i,
          benefits: r,
          withShadow: !1,
          tag: b,
          promoTag: x,
          actions: P("div", {
            className: "flex gap-3",
            children: [c && f(qe, {
              variant: c.variant,
              label: A ? a.label : c.label,
              icon: c.icon || void 0,
              onClick: E,
              loading: c.loading,
              size: c.size
            }), g && f(qe, {
              onClick: g.onClick,
              label: g.label,
              variant: g.variant,
              size: g.size,
              icon: g.icon
            })]
          })
        })
      })
    }), R && D && f(Xn, {
      open: !0,
      onClose: () => {
        T(), v(null);
      },
      success: R === "success",
      errorMessage: s,
      successMessage: o,
      nextSteps: l,
      closeLabel: d,
      portalContainer: _
    })]
  });
}
function Nc({ mediaUrl: n, title: e, description: t, onClose: i, dismissible: r, width: s, trackVisibility: o, actions: a, showConfirmation: l = !0 }) {
  const [d, c] = B(!1), u = () => {
    c(!0), i && i();
  };
  H(() => {
    o && o(!d);
  }, [o, d]);
  const h = n?.includes(".mp4");
  return f(xt, {
    children: d ? null : P(ho, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [P(fo, {
        children: [r && f("div", {
          className: "absolute right-2 top-2 z-10",
          children: f(qe, {
            variant: "ghost",
            icon: Hn,
            size: "sm",
            hideLabel: !0,
            onClick: u,
            label: "Close"
          })
        }), P("div", {
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
          }), P("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [f(an, {
              className: "text-lg font-medium",
              children: e
            }), f(an, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), a && f(go, {
        className: "p-3",
        children: a.map((g) => g.type === "upsell" ? f(Yn, {
          label: g.label,
          onRequest: g.onClick,
          errorMessage: g.errorMessage,
          successMessage: g.successMessage,
          loadingState: g.loadingState,
          nextSteps: g.nextSteps,
          closeLabel: g.closeLabel,
          showConfirmation: l && g.showConfirmation,
          variant: g.variant
        }, g.label) : f(qe, {
          label: g.label,
          onClick: g.onClick,
          variant: g.variant
        }, g.label))
      })]
    })
  });
}
const Ac = oe(function({ primaryAction: e, secondaryAction: t, ...i }, r) {
  const s = (l) => l.variant === "promote" ? f(Yn, {
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
  }) : f(qe, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), o = e?.variant !== "promote" ? e : void 0, a = t?.variant !== "promote" ? t : void 0;
  return P(po, {
    ref: r,
    ...i,
    primaryAction: o,
    secondaryAction: a,
    children: [e?.variant === "promote" && s(e), t?.variant === "promote" && s(t)]
  });
});
Ac.displayName = "UpsellingBanner";
function pd({ isOpen: n, setIsOpen: e, label: t, variant: i = "promote", size: r = "md", showIcon: s = !0, side: o = "right", align: a = "center", icon: l = fs, mediaUrl: d, title: c, description: u, width: h = "300px", trackVisibility: g, actions: _, onClick: b, hideLabel: x = !1 }) {
  const [D, N] = B(!1), [w, R] = B(null), [v, y] = B(null), m = (S) => {
    e(S), b && b();
  }, E = async (S) => {
    if (S.type === "upsell") {
      y(S);
      try {
        await S.onClick(), S.showConfirmation && (N(!0), R("success"));
      } catch {
        N(!0), R("error");
      }
    }
  }, T = () => {
    R(null), N(!1), y(null), e(!1);
  }, A = n && !D, C = _?.map((S) => S.type === "upsell" ? {
    ...S,
    onClick: () => E(S)
  } : S);
  return P(xt, {
    children: [P(Tn, {
      open: A,
      onOpenChange: m,
      children: [f(zn, {
        asChild: !0,
        children: f(qe, {
          variant: i,
          label: t,
          size: r,
          icon: s ? l : void 0,
          onClick: () => e(n),
          hideLabel: x
        })
      }), f(Pn, {
        side: o,
        align: a,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: f(Nc, {
          mediaUrl: d,
          title: c,
          description: u,
          onClose: () => e(!1),
          dismissible: !1,
          width: h,
          trackVisibility: g,
          actions: C,
          showConfirmation: !1
        })
      })]
    }), v?.type === "upsell" && v.showConfirmation && w && f(Xn, {
      open: !0,
      onClose: T,
      success: w === "success",
      errorMessage: v.errorMessage,
      successMessage: v.successMessage,
      nextSteps: v.nextSteps,
      closeLabel: v.closeLabel,
      portalContainer: null
    })]
  });
}
const Oc = async (n) => Promise.resolve(typeof n.value == "function" ? await n.value() : n.value), kc = ({ dialogs: n }) => {
  const [e, t] = B({}), i = (a) => e[a] > 0, r = (a, l) => {
    t((d) => ({
      ...d,
      [a]: (d[a] || 0) + l
    }));
  }, s = I(() => {
    const a = (l, d) => ({
      ...d,
      value: Mt(),
      onClick: async () => {
        d.nonBlocking || r(l.id, 1);
        try {
          const c = await Oc(d);
          l.onClickAction(d, c);
        } finally {
          d.nonBlocking || r(l.id, -1);
        }
        return Promise.resolve();
      }
    });
    return n.map((l) => ({
      ...l,
      actions: {
        primary: en(l.actions.primary).map((d) => a(l, d)),
        secondary: en(l.actions.secondary).map((d) => a(l, d))
      }
    }));
  }, [n]), o = I(() => {
    const a = (l, d) => ({
      ...d,
      disabled: d.disabled || i(l)
    });
    return s.map((l) => ({
      ...l,
      actions: {
        primary: l.actions.primary.map((d) => a(l.id, d)),
        secondary: l.actions.secondary.map((d) => a(l.id, d))
      }
    }));
  }, [s, e]);
  return f(xt, {
    children: o.map((a) => f(gs, {
      disableClose: i(a.id),
      isOpen: !0,
      width: a.width,
      onClose: a.onCloseDialog,
      title: a.title,
      description: a.description,
      primaryAction: a.actions.primary,
      secondaryAction: a.actions.secondary,
      children: a.content
    }, a.id))
  });
}, Fr = Ee(null), Tc = ({ children: n }) => {
  const [e, t] = B([]), i = (o) => {
    t((a) => [...a, o]);
  }, r = (o) => {
    t((a) => a.filter((l) => l.id !== o));
  }, s = I(() => ({
    addDialog: i,
    removeDialog: r
  }), [e, t]);
  return P(Fr.Provider, {
    value: s,
    children: [Oi(f(kc, {
      dialogs: e
    }), document.body), n]
  });
}, zc = () => {
  const n = ge(Fr);
  if (!n)
    throw new Error("useDialogsLayoutContext must be used within a DialogsLayoutProvider");
  return n;
}, md = () => {
  const n = Ai(), { addDialog: e, removeDialog: t } = zc(), i = (a) => new Promise((l) => {
    const d = {
      ...a,
      id: a.id || Mt(),
      actions: a.actions,
      onCloseDialog: () => {
        c(void 0, void 0);
      },
      onClickAction: (u, h) => {
        c(u, h);
      }
    }, c = async (u, h) => {
      l(h ?? void 0), !u?.keepOpen && t(d.id);
    };
    e(d);
  });
  return {
    openDialog: i,
    alert: (a) => {
      const l = {
        ...a,
        id: a.id || Mt(),
        title: a.title,
        content: f("div", {
          children: a.msg
        }),
        actions: {
          primary: {
            value: a.confirm?.value ?? !0,
            label: a.confirm?.label || n.actions.ok
          }
        }
      };
      return i(l);
    },
    confirm: (a) => {
      const l = {
        ...a,
        id: a.id || Mt(),
        title: a.title,
        content: f("div", {
          children: a.msg
        }),
        actions: {
          primary: {
            value: a.confirm?.value ?? !0,
            label: a.confirm?.label || n.actions.ok
          },
          secondary: {
            value: a.cancel?.value ?? !1,
            label: a.cancel?.label || n.actions.cancel
          }
        }
      };
      return i(l);
    },
    closeDialog: (a) => {
      t(a);
    }
  };
}, vd = ["default", "critical", "neutral"], Pc = Ee(null), Mc = ({ children: n, fullScreen: e = !0 }) => {
  const t = L(null), [i, r] = B(t.current);
  return ws(() => {
    r(t.current);
  }, []), f(Pc.Provider, {
    value: {
      element: i
    },
    children: f("div", {
      ref: t,
      id: "f0-layout",
      className: j({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: n
    })
  });
}, Lc = ({ children: n }) => f(yo, {
  reducedMotion: "user",
  children: n
}), yd = ({ children: n, layout: e, link: t, privacyModeInitiallyEnabled: i, image: r, i18n: s, l10n: o, isDev: a = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: d = !1 }) => f(Lc, {
  children: f(ps, {
    isDev: a,
    showExperimentalWarnings: d,
    children: f(ms, {
      ...o,
      children: f(vs, {
        ...s,
        children: f(ys, {
          ...t,
          children: f(Mc, {
            ...e,
            children: f(bs, {
              children: f(mo, {
                initiallyEnabled: i,
                children: f(xs, {
                  ...r,
                  children: f(vo, {
                    handler: l,
                    children: f(Tc, {
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
}), Sn = (n) => `datacollection-${n}`, bd = {
  get: async (n) => JSON.parse(
    localStorage.getItem(Sn(n)) ?? "{}"
  ),
  set: async (n, e) => {
    localStorage.setItem(Sn(n), JSON.stringify(e));
  }
};
export {
  Xc as AreaChart,
  Cd as Await,
  Yc as BarChart,
  qc as CategoryBarChart,
  td as ComboChart,
  $c as Dashboard,
  su as DndProvider,
  _d as EmojiImage,
  Ed as F0Avatar,
  ou as F0AvatarAlert,
  Dd as F0AvatarCompany,
  au as F0AvatarDate,
  Rd as F0AvatarEmoji,
  Sd as F0AvatarFile,
  Nd as F0AvatarIcon,
  lu as F0AvatarList,
  In as F0AvatarModule,
  Ad as F0AvatarPerson,
  Od as F0AvatarTeam,
  id as F0BigNumber,
  qe as F0Button,
  kd as F0ButtonDropdown,
  Td as F0ButtonToggle,
  cu as F0Card,
  zd as F0Checkbox,
  ud as F0ChipList,
  du as F0DatePicker,
  Pd as F0Dialog,
  Md as F0DialogContext,
  Ld as F0DialogProvider,
  Id as F0EventCatcherProvider,
  _c as F0FilterPickerContent,
  fd as F0GridStack,
  Ec as F0Heading,
  On as F0Icon,
  Hd as F0Link,
  yd as F0Provider,
  Bd as F0Select,
  uu as F0TagAlert,
  co as F0TagBalance,
  hu as F0TagCompany,
  fu as F0TagDot,
  gu as F0TagList,
  pu as F0TagPerson,
  ls as F0TagRaw,
  uo as F0TagStatus,
  mu as F0TagTeam,
  nr as F0Text,
  Fd as GROUP_ID_SYMBOL,
  Vc as HomeLayout,
  jc as Layout,
  Jc as LineChart,
  Wd as OneFilterPicker,
  Zc as PieChart,
  mo as PrivacyModeProvider,
  Br as ProductBlankslate,
  vu as ProductCard,
  gd as ProductModal,
  Nc as ProductWidget,
  ed as ProgressBarChart,
  Uc as StandardLayout,
  yu as Tag,
  bu as TagCounter,
  Kc as TwoColumnLayout,
  Xn as UpsellRequestResponseDialog,
  Ac as UpsellingBanner,
  Yn as UpsellingButton,
  pd as UpsellingPopover,
  Qc as VerticalBarChart,
  Gc as avatarVariants,
  Gd as buildTranslations,
  od as buttonDropdownSizes,
  sd as buttonDropdownVariants,
  rd as buttonSizes,
  ad as buttonToggleSizes,
  ld as buttonToggleVariants,
  nd as buttonVariants,
  xu as cardImageFits,
  wu as cardImageSizes,
  Cu as createAtlaskitDriver,
  $d as createDataSourceDefinition,
  Io as createPageLayoutBlock,
  Ho as createPageLayoutBlockGroup,
  bd as dataCollectionLocalStorageHandler,
  hd as datepickerSizes,
  Ou as defaultTranslations,
  vd as dialogVariants,
  Ce as experimental,
  jd as getAnimationVariants,
  Ud as getDataSourcePaginationType,
  Kd as getEmojiLabel,
  Vd as isInfiniteScrollPagination,
  Xd as isPageBasedPagination,
  cd as linkVariants,
  Yd as modules,
  _u as predefinedPresets,
  Eu as selectSizes,
  dd as tagDotColors,
  qd as useData,
  Jd as useDataSource,
  md as useDialog,
  Du as useDndEvents,
  Ru as useDraggable,
  Su as useDroppableList,
  Zd as useEmojiConfetti,
  Qd as useF0Dialog,
  eu as useGroups,
  Nu as usePrivacyMode,
  tu as useReducedMotion,
  iu as useSelectable,
  nu as useXRay
};
