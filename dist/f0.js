import { L as Cn, C as Wr, c as j, a as Di, u as _n, m as Ri, i as En, B as Si, O as Gr, p as $r, w as jr, S as Fe, b as Ur, F as Dn, d as Kr, A as Xr, D as Yr, e as qr, f as Re, g as Vr, h as me, j as Vi, k as Jr, l as di, n as lt, o as Zr, q as Qr, r as Ot, s as Rn, E as es, t as zt, v as ts, x as is, y as ns, z as rs, G as Xe, H as Sn, I as ss, J as os, K as as, M as Ji, N as ls, P as Nn, Q as cs, R as On, X as An, Y as vi, T as ds, U as kn, V as us, W as hs, Z as fs, _ as gs, $ as ps, a0 as ms, a1 as vs, a2 as ys, a3 as Zi, a4 as bs, a5 as ct, a6 as ui, a7 as xs, a8 as ws, a9 as Cs, aa as _s, ab as Es, ac as Ds, ad as Rs, ae as Ss, af as Ns, ag as Os, ah as Tn, ai as As, aj as Mt, ak as zn, al as Pn, am as ks, an as Mn, ao as Ln, ap as In, aq as Ts, ar as zs, as as Hn, at as Ps, au as Ms, av as Ls, aw as Is, ax as Hs, ay as Bs, az as Bn, aA as Ve, aB as Fn, aC as Fs, aD as Ws, aE as Qi, aF as Gs, aG as Wn, aH as $s, aI as js, aJ as Us, aK as Ks, aL as Xs, aM as Ys, aN as qs, aO as Vs, aP as Js, aQ as Zs, aR as Qs, aS as eo } from "./hooks-C51wNZuI.js";
import { bl as Vc, by as Jc, bH as Zc, aT as Qc, aU as ed, aV as td, aW as id, aX as nd, aY as rd, aZ as sd, a_ as od, b0 as ad, b1 as ld, b2 as cd, b3 as dd, b4 as ud, b5 as hd, b6 as fd, bD as gd, b8 as pd, b9 as md, bc as vd, bd as yd, be as bd, bf as xd, bi as wd, bj as Cd, bk as _d, bn as Ed, bb as Dd, bm as Rd, bh as Sd, bE as Nd, bx as Od, bs as Ad, bv as kd, br as Td, bI as zd, bq as Pd, bp as Md, a$ as Ld, b7 as Id, ba as Hd, bg as Bd, bo as Fd, bt as Wd, bz as Gd, bA as $d, bB as jd, bJ as Ud, bu as Kd, bC as Xd, bG as Yd, bw as qd, bF as Vd } from "./hooks-C51wNZuI.js";
import { jsx as g, jsxs as M, Fragment as Vt } from "react/jsx-runtime";
import L, { forwardRef as le, useRef as I, useImperativeHandle as to, Children as Lt, createContext as Ne, useContext as we, useState as W, useMemo as B, useEffect as H, useCallback as K, useLayoutEffect as yi, createElement as en, isValidElement as Gn, Fragment as io, memo as no, useReducer as ro, cloneElement as so, PureComponent as oo } from "react";
import { createPortal as $n, unstable_batchedUpdates as At } from "react-dom";
import { defaultTranslations as Zd } from "./i18n-provider-defaults.js";
import './f0.css';const ao = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, lo = le(function({ widgets: e, children: t }, i) {
  const r = I(null);
  to(i, () => r.current);
  const s = Lt.toArray(e).filter((o) => !!o).map((o, a) => g("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: o
  }, a));
  return g(Cn, {
    layout: "home",
    children: M("div", {
      ref: r,
      className: "@container",
      children: [M("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [g(Wr, {
          columns: ao,
          showArrows: !1,
          children: s
        }), g("main", {
          children: t
        })]
      }), M("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [g("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: s.slice(0, 3)
        }), g("main", {
          className: "col-span-2",
          children: t
        }), g("div", {
          className: "flex flex-1 flex-col gap-5",
          children: s.slice(3)
        })]
      })]
    })
  });
}), co = le(function({ children: e, sideContent: t, mainColumnPosition: i = "left", sticky: r = !1 }, s) {
  return g("div", {
    ref: s,
    className: "h-full",
    children: M("div", {
      className: j("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", r && "md:sticky md:top-0 md:max-h-full"),
      children: [g("main", {
        className: j("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", r ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", i === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), g(uo, {
        sticky: r,
        className: j("order-1", i === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), uo = ({ children: n, className: e }) => g("aside", {
  className: j("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: n
}), ho = Di({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), jn = L.forwardRef(({ children: n, variant: e, className: t, ...i }, r) => g(Cn, {
  layout: "standard",
  children: g("section", {
    ref: r,
    className: j("relative flex-1 overflow-auto", t),
    ...i,
    children: g("div", {
      className: j(ho({
        variant: e
      })),
      children: n
    })
  })
}));
jn.displayName = "StandardLayout";
const Un = Ne(null);
function Kn() {
  const n = we(Un);
  if (!n)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return n;
}
function fo(n) {
  const { content: e, ...t } = n;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function Ye(n) {
  var t;
  const e = fo(n);
  return (t = n.subGridOpts) != null && t.children && (e.subGridOpts = {
    ...n.subGridOpts,
    children: n.subGridOpts.children.map(
      (i) => Ye(i)
    )
  }), e;
}
const go = ["noMove", "noResize", "locked", "w", "h", "x", "y"], Me = 200;
function po(n) {
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
function mo({ children: n, options: e, onResizeStop: t, onChange: i, widgets: r }) {
  const [s, o] = W(null), a = I(null), l = I(!1), u = B(() => ({
    ...e,
    children: (r || []).map((C) => Ye(C))
  }), [e, r]), [c, d] = W(() => {
    const C = /* @__PURE__ */ new Map(), R = r || [], y = (b) => {
      var D;
      b.id && b.content && C.set(b.id, b.content), (D = b.subGridOpts) != null && D.children && b.subGridOpts.children.forEach((E) => {
        y(E);
      });
    };
    return R.forEach((b) => {
      y(b);
    }), C;
  }), h = I(c);
  H(() => {
    h.current = c;
  }, [c]);
  const [f, x] = W(() => {
    const C = /* @__PURE__ */ new Map(), R = r || [], y = (b) => {
      var D;
      b.id && b._originalContent !== void 0 && C.set(b.id, b._originalContent), (D = b.subGridOpts) != null && D.children && b.subGridOpts.children.forEach((E) => {
        y(E);
      });
    };
    return R.forEach((b) => {
      y(b);
    }), C;
  }), v = I(f);
  H(() => {
    v.current = f;
  }, [f]);
  const [w, S] = W(() => {
    const C = /* @__PURE__ */ new Map(), R = r || [], y = (b) => {
      var D;
      if (b.id) {
        const E = Ye(b);
        C.set(b.id, E);
      }
      (D = b.subGridOpts) != null && D.children && b.subGridOpts.children.forEach((E) => {
        y(E);
      });
    };
    return R.forEach((b) => {
      y(b);
    }), C;
  });
  _n(() => {
    if (!s) return;
    const C = s.save();
    if (!Array.isArray(C))
      return;
    const R = C.map((A) => A.id), y = r || [], b = y.map((A) => A.id), D = y.filter((A) => !R.includes(A.id));
    D.length > 0 && (D.forEach((A) => {
      A.content && h.current.set(A.id, A.content), A._originalContent !== void 0 && v.current.set(A.id, A._originalContent);
    }), D.forEach((A) => {
      const m = Ye(A);
      s.addWidget(m);
    }), S((A) => {
      const m = new Map(A);
      return D.forEach((_) => {
        const O = Ye(_);
        m.set(_.id, O);
      }), m;
    }), d((A) => {
      const m = new Map(A);
      return D.forEach((_) => {
        _.content && m.set(_.id, _.content);
      }), m;
    }), x((A) => {
      const m = new Map(A);
      return D.forEach((_) => {
        _._originalContent !== void 0 && m.set(_.id, _._originalContent);
      }), m;
    }));
    const E = C.filter((A) => !b.includes(A.id));
    if (E.length > 0) {
      const A = E.map((m) => m.id).filter(Boolean);
      A.forEach((m) => {
        setTimeout(() => {
          h.current.delete(m), v.current.delete(m);
        }, Me);
      }), E.forEach((m) => {
        const _ = s.el.querySelector(`[gs-id="${m.id}"]`);
        _ && setTimeout(() => {
          s.removeWidget(_, !0);
        }, Me);
      }), S((m) => {
        const _ = new Map(m);
        return A.forEach((O) => {
          setTimeout(() => {
            _.delete(O);
          }, Me);
        }), _;
      }), d((m) => {
        const _ = new Map(m);
        return A.forEach((O) => {
          if (_.get(O)) {
            const V = s.el.querySelector(`[gs-id="${O}"] .grid-stack-item-content`);
            let X = "";
            V && (X = po(V)), _.set(O, g(Ri.div, {
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
                  duration: Me / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: Me / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: Me / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: X
              }
            }));
          }
          setTimeout(() => {
            _.delete(O);
          }, Me);
        }), _;
      }), x((m) => {
        const _ = new Map(m);
        return A.forEach((O) => {
          setTimeout(() => {
            _.delete(O);
          }, Me);
        }), _;
      });
    }
    const T = y.filter((A) => R.includes(A.id));
    if (T.length > 0) {
      const A = [];
      T.forEach((m) => {
        const _ = C.find((P) => P.id === m.id);
        if (!_)
          return;
        const O = go.filter((P) => _[P] !== m[P]);
        if (O.length > 0) {
          const P = {}, V = ["w", "h", "x", "y"], X = ["noMove", "noResize", "locked"], U = O.filter((G) => V.includes(G)), te = O.filter((G) => X.includes(G));
          if (U.length > 0 && te.length > 0 && U.length + te.length === O.length ? te.forEach((G) => {
            const ne = m[G];
            ne !== void 0 && (P[G] = ne);
          }) : O.forEach((G) => {
            const ne = m[G];
            ne !== void 0 && (P[G] = ne);
          }), Object.keys(P).length > 0) {
            const G = s.el.querySelector(`[gs-id="${m.id}"]`);
            G && A.push({
              id: m.id,
              element: G,
              updateOptions: P
            });
          }
        }
      }), T.forEach((m) => {
        m.content && h.current.set(m.id, m.content), m._originalContent !== void 0 && v.current.set(m.id, m._originalContent);
      }), A.forEach(({ element: m, updateOptions: _ }) => {
        try {
          s.update(m, _);
        } catch (O) {
          console.warn("Error updating widget:", O);
        }
      }), S((m) => {
        const _ = new Map(m);
        return T.forEach((O) => {
          const P = Ye(O);
          _.set(O.id, P);
        }), _;
      }), d((m) => {
        const _ = new Map(m);
        return T.forEach((O) => {
          O.content && _.set(O.id, O.content);
        }), _;
      }), x((m) => {
        const _ = new Map(m);
        return T.forEach((O) => {
          O._originalContent !== void 0 && _.set(O.id, O._originalContent);
        }), _;
      });
    }
    l.current || (l.current = !0);
  }, [r]), H(() => {
    if (!s || !u.handle) return;
    s.opts && (s.opts.handle = u.handle);
    const C = setTimeout(() => {
      var R;
      if (s && s.el && u.handle && s.el.querySelectorAll(u.handle).length > 0)
        try {
          !((R = s.opts) != null && R.disableResize) && (s.disable(!1), s.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(C);
  }, [s, u.handle, u.children]);
  const N = K(() => {
    if (!s)
      return;
    const C = s.save();
    if (Array.isArray(C)) {
      const R = C.map((y) => {
        const b = y.id;
        if (!b) return null;
        const D = h.current.get(b), E = v.current.get(b), T = y;
        return {
          ...y,
          id: b,
          w: y.w ?? 1,
          h: y.h ?? 1,
          x: y.x ?? 0,
          y: y.y ?? 0,
          meta: T.meta,
          _originalContent: E,
          content: D ?? g("div", {
            children: "No content"
          })
        };
      }).filter((y) => y !== null);
      i == null || i(R);
    }
  }, [s]);
  return H(() => {
    if (!s || !s.el || !s.el.parentElement)
      return;
    const C = (R, y) => {
      t == null || t(R, y);
    };
    try {
      s.on("resizestop", C), s.on("change added removed", N);
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
  }, [s, t, N]), H(() => {
    a.current = s;
  }, [s]), H(() => {
    s && s.el && s.el.parentElement && l.current && N();
  }, [s]), g(Un.Provider, {
    value: {
      options: u,
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
        set: d
      }
    },
    children: n
  });
}
const Xn = Ne(null);
function vo() {
  const n = we(Xn);
  if (!n)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return n;
}
const yo = Ne(null);
function bo() {
  const { _reactContentMap: n } = Kn(), { getWidgetContainer: e } = vo();
  return g(Vt, {
    children: Array.from(n.value.entries()).map(([t, i]) => {
      const r = e(t);
      return r ? g(yo.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: i && $n(i, r)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function xo(n, e, t, i, r) {
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
    var t, i;
    return e.lazyLoad || ((i = (t = e.grid) == null ? void 0 : t.opts) == null ? void 0 : i.lazyLoad) && e.lazyLoad !== !1;
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
    }), t == null || t.appendChild(i), i;
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
    return (e == null ? void 0 : e.grid) && (t ? e.sizeToContent === !0 || e.grid.opts.sizeToContent === !0 && e.sizeToContent === void 0 : !!e.sizeToContent || e.grid.opts.sizeToContent && e.sizeToContent !== !1);
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
    const s = e.getBoundingClientRect(), o = r.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, l = s.bottom - Math.min(o.bottom, a), u = s.top - Math.max(o.top, 0), c = r.scrollTop;
    u < 0 && i < 0 ? e.offsetHeight > o.height ? r.scrollTop += i : r.scrollTop += Math.abs(u) > Math.abs(i) ? i : u : l > 0 && i > 0 && (e.offsetHeight > o.height ? r.scrollTop += i : r.scrollTop += l > i ? i : l), t.top += r.scrollTop - c;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, i) {
    const r = p.getScrollElement(t), s = r.clientHeight, o = r === p.getScrollElement() ? 0 : r.getBoundingClientRect().top, a = e.clientY - o, l = a < i, u = a > s - i;
    l ? r.scrollBy({ behavior: "smooth", top: a - i }) : u && r.scrollBy({ behavior: "smooth", top: i - (s - a) });
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
    var t;
    return !(!e || e.w === e.h || e.locked || e.noResize || (t = e.grid) != null && t.opts.disableResize || e.minW && e.minW === e.maxW || e.minH && e.minH === e.maxH);
  }
}
class Se {
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
      let u;
      if (i.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(i, { ...i, y: e.y }, e) || !this.collide(i, { ...i, y: t.y - i.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const c = { ...t, y: i.y + i.h, ...a };
        u = this._loading && p.samePos(e, c) ? !0 : this.moveNode(e, c), (i.locked || this._loading) && u ? p.copyPos(t, e) : !i.locked && u && r.pack && (this._packNodes(), t.y = i.y + i.h, p.copyPos(e, t)), o = o || u;
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
    const r = e._id, s = i == null ? void 0 : i._id;
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
    const r = e._id, s = i == null ? void 0 : i._id;
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
      const u = l._rect;
      let c = Number.MAX_VALUE, d = Number.MAX_VALUE;
      r.y < u.y ? c = (s.y + s.h - u.y) / u.h : r.y + r.h > u.y + u.h && (c = (u.y + u.h - s.y) / u.h), r.x < u.x ? d = (s.x + s.w - u.x) / u.w : r.x + r.w > u.x + u.w && (d = (u.x + u.w - s.x) / u.w);
      const h = Math.min(d, c);
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
      let u;
      o.locked || (o.autoPosition = !0, e === "list" && a && (u = l[a - 1])), this.addNode(o, !1, u);
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
    e._id = e._id ?? Se._idSeq++;
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
      const l = a % i, u = Math.floor(a / i);
      if (l + e.w > i)
        continue;
      const c = { x: l, y: u, w: e.w, h: e.h };
      t.find((d) => p.isIntercepted(c, d)) || ((e.x !== l || e.y !== u) && (e._dirty = !0), e.x = l, e.y = u, delete e.autoPosition, o = !0);
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
    const r = new Se({
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
    const t = new Se({
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
    var u, c;
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
      let h = d ? this.directionCollideCoverage(e, t, a) : a[0];
      if (d && h && ((c = (u = e.grid) == null ? void 0 : u.opts) != null && c.subGridDynamic) && !e.grid._isTemp) {
        const f = p.areaIntercept(t.rect, h._rect), x = p.area(t.rect), v = p.area(h._rect);
        f / (x < v ? x : v) > 0.8 && (h.grid.makeSubGrid(h.el, void 0, e), h = void 0);
      }
      h ? l = !this._fixCollisions(e, s, h, t) : (l = !1, i && delete t.pack);
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
    var a;
    const r = ((a = this._layouts) == null ? void 0 : a.length) || 0;
    let s;
    r && (i ? i !== this.column && (s = this._layouts[i]) : this.column !== r - 1 && (s = this._layouts[r - 1]));
    const o = [];
    return this.sortNodes(), this.nodes.forEach((l) => {
      const u = s == null ? void 0 : s.find((d) => d._id === l._id), c = { ...l, ...u || {} };
      p.removeInternalForSave(c, !e), t && t(l, c), o.push(c);
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
    var a;
    if (!this.nodes.length || !t || e === t)
      return this;
    const r = i === "compact" || i === "list";
    r && this.sortNodes(1), t < e && this.cacheLayout(this.nodes, e), this.batchUpdate();
    let s = [], o = r ? this.nodes : p.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const l = this._layouts[t] || [], u = this._layouts.length - 1;
      !l.length && e !== u && ((a = this._layouts[u]) != null && a.length) && (e = u, this._layouts[u].forEach((c) => {
        const d = o.find((h) => h._id === c._id);
        d && (!r && !c.autoPosition && (d.x = c.x ?? d.x, d.y = c.y ?? d.y), d.w = c.w ?? d.w, (c.x == null || c.y === void 0) && (d.autoPosition = !0));
      })), l.forEach((c) => {
        const d = o.findIndex((h) => h._id === c._id);
        if (d !== -1) {
          const h = o[d];
          if (r) {
            h.w = c.w;
            return;
          }
          (c.autoPosition || isNaN(c.x) || isNaN(c.y)) && this.findEmptyPosition(c, s), c.autoPosition || (h.x = c.x ?? h.x, h.y = c.y ?? h.y, h.w = c.w ?? h.w, s.push(h)), o.splice(d, 1);
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
          const l = r || i === "none" ? 1 : t / e, u = i === "move" || i === "moveScale", c = i === "scale" || i === "moveScale";
          o.forEach((d) => {
            d.x = t === 1 ? 0 : u ? Math.round(d.x * l) : Math.min(d.x, t - 1), d.w = t === 1 || e === 1 ? 1 : c ? Math.round(d.w * l) || 1 : Math.min(d.w, t), s.push(d);
          }), o = [];
        }
      s = p.sort(s, -1), this._inColumnResize = !0, this.nodes = [], s.forEach((l) => {
        this.addNode(l, !1), delete l._orig;
      });
    }
    return this.nodes.forEach((l) => delete l._orig), this.batchUpdate(!1, !r), delete this._inColumnResize, this;
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
        s._id = (a == null ? void 0 : a._id) ?? Se._idSeq++;
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
    e._id = e._id ?? Se._idSeq++;
    const i = { x: e.x, y: e.y, w: e.w, _id: e._id };
    (e.autoPosition || e.x === void 0) && (delete i.x, delete i.y, e.autoPosition && (i.autoPosition = !0)), this._layouts = this._layouts || [], this._layouts[t] = this._layouts[t] || [];
    const r = this.findCacheLayout(e, t);
    return r === -1 ? this._layouts[t].push(i) : this._layouts[t][r] = i, this;
  }
  findCacheLayout(e, t) {
    var i, r;
    return ((r = (i = this._layouts) == null ? void 0 : i[t]) == null ? void 0 : r.findIndex((s) => s._id === e._id)) ?? -1;
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
Se._idSeq = 0;
const ae = {
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
class xe {
}
function It(n, e) {
  n.touches.length > 1 || (n.cancelable && n.preventDefault(), p.simulateMouseEvent(n.changedTouches[0], e));
}
function Yn(n, e) {
  n.cancelable && n.preventDefault(), p.simulateMouseEvent(n, e);
}
function Ht(n) {
  xe.touchHandled || (xe.touchHandled = !0, It(n, "mousedown"));
}
function Bt(n) {
  xe.touchHandled && It(n, "mousemove");
}
function Ft(n) {
  if (!xe.touchHandled)
    return;
  xe.pointerLeaveTimeout && (window.clearTimeout(xe.pointerLeaveTimeout), delete xe.pointerLeaveTimeout);
  const e = !!z.dragElement;
  It(n, "mouseup"), e || It(n, "click"), xe.touchHandled = !1;
}
function Wt(n) {
  n.pointerType !== "mouse" && n.target.releasePointerCapture(n.pointerId);
}
function tn(n) {
  z.dragElement && n.pointerType !== "mouse" && Yn(n, "mouseenter");
}
function nn(n) {
  z.dragElement && n.pointerType !== "mouse" && (xe.pointerLeaveTimeout = window.setTimeout(() => {
    delete xe.pointerLeaveTimeout, Yn(n, "mouseleave");
  }, 10));
}
class Jt {
  constructor(e, t, i) {
    this.host = e, this.dir = t, this.option = i, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Jt.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), fe && (this.el.addEventListener("touchstart", Ht), this.el.addEventListener("pointerdown", Wt)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), fe && (this.el.removeEventListener("touchstart", Ht), this.el.removeEventListener("pointerdown", Wt)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), fe && (this.el.addEventListener("touchmove", Bt), this.el.addEventListener("touchend", Ft)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), fe && (this.el.removeEventListener("touchmove", Bt), this.el.removeEventListener("touchend", Ft)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel */
  _keyEvent(e) {
    var t, i;
    e.key === "Escape" && ((i = (t = this.host.gridstackNode) == null ? void 0 : t.grid) == null || i.engine.restoreInitial(), this._mouseUp(this.mouseDownEvent));
  }
  /** @internal */
  _triggerEvent(e, t) {
    return this.option[e] && this.option[e](t), this;
  }
}
Jt.prefix = "ui-resizable-";
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
class pt extends Ni {
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
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Jt(this.el, e, {
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
    const u = this._constrainSize(r.width, r.height, a, l);
    return Math.round(r.width) !== Math.round(u.width) && (t.indexOf("w") > -1 && (r.left += r.width - u.width), r.width = u.width), Math.round(r.height) !== Math.round(u.height) && (t.indexOf("n") > -1 && (r.top += r.height - u.height), r.height = u.height), r;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, i, r) {
    const s = this.option, o = (i ? s.maxWidthMoveLeft : s.maxWidth) || Number.MAX_SAFE_INTEGER, a = s.minWidth / this.rectScale.x || e, l = (r ? s.maxHeightMoveUp : s.maxHeight) || Number.MAX_SAFE_INTEGER, u = s.minHeight / this.rectScale.y || t, c = Math.min(o, Math.max(a, e)), d = Math.min(l, Math.max(u, t));
    return { width: c, height: d };
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
const wo = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class mt extends Ni {
  constructor(e, t = {}) {
    var s;
    super(), this.el = e, this.option = t, this.dragTransform = {
      xScale: 1,
      yScale: 1,
      xOffset: 0,
      yOffset: 0
    };
    const i = (s = t == null ? void 0 : t.handle) == null ? void 0 : s.substring(1), r = e.gridstackNode;
    this.dragEls = !i || e.classList.contains(i) ? [e] : r != null && r.subGrid ? [e.querySelector(t.handle) || e] : Array.from(e.querySelectorAll(t.handle)), this.dragEls.length === 0 && (this.dragEls = [e]), this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this.enable();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.dragEls.forEach((e) => {
      e.addEventListener("mousedown", this._mouseDown), fe && (e.addEventListener("touchstart", Ht), e.addEventListener("pointerdown", Wt));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), fe && (t.removeEventListener("touchstart", Ht), t.removeEventListener("pointerdown", Wt));
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
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(wo) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete z.dragElement, delete z.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), fe && (e.currentTarget.addEventListener("touchmove", Bt), e.currentTarget.addEventListener("touchend", Ft)), e.preventDefault(), document.activeElement && document.activeElement.blur(), z.mouseHandled = !0), !0;
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
    var i;
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), z.pauseDrag) {
        const r = Number.isInteger(z.pauseDrag) ? z.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), r);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, z.dragElement = this;
      const r = (i = this.el.gridstackNode) == null ? void 0 : i.grid;
      r ? z.dropElement = r.el.ddElement.ddDroppable : delete z.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = p.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const s = p.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(s, this.ui()), this.triggerEvent("dragstart", s), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    var t, i;
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), fe && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", Bt, !0), e.currentTarget.removeEventListener("touchend", Ft, !0)), this.dragging) {
      delete this.dragging, (t = this.el.gridstackNode) == null || delete t._origRotate, document.removeEventListener("keydown", this._keyEvent), ((i = z.dropElement) == null ? void 0 : i.el) === this.el.parentElement && delete z.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const r = p.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(r), this.triggerEvent("dragstop", r), z.dropElement && z.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete z.dragElement, delete z.dropElement, delete z.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    var r, s;
    const t = this.el.gridstackNode, i = (t == null ? void 0 : t.grid) || ((s = (r = z.dropElement) == null ? void 0 : r.el) == null ? void 0 : s.gridstack);
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), i == null || i.cancelDrag(), this._mouseUp(this.mouseDownEvent);
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
    var i, r;
    this.helper.classList.add("ui-draggable-dragging"), (r = (i = this.el.gridstackNode) == null ? void 0 : i.grid) == null || r.el.classList.add("grid-stack-dragging");
    const t = this.helper.style;
    return t.pointerEvents = "none", t.width = this.dragOffset.width + "px", t.height = this.dragOffset.height + "px", t.willChange = "left, top", t.position = "fixed", this._dragFollow(e), t.transition = "none", setTimeout(() => {
      this.helper && (t.transition = null);
    }, 0), this;
  }
  /** @internal restore back the original style before dragging */
  _removeHelperStyle() {
    var t, i, r;
    this.helper.classList.remove("ui-draggable-dragging"), (i = (t = this.el.gridstackNode) == null ? void 0 : t.grid) == null || i.el.classList.remove("grid-stack-dragging");
    const e = (r = this.helper) == null ? void 0 : r.gridstackNode;
    if (!(e != null && e._isAboutToRemove) && this.dragElementOriginStyle) {
      const s = this.helper, o = this.dragElementOriginStyle.transition || null;
      s.style.transition = this.dragElementOriginStyle.transition = "none", mt.originStyleProp.forEach((a) => s.style[a] = this.dragElementOriginStyle[a] || null), setTimeout(() => s.style.transition = o, 50);
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
class Co extends Ni {
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
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), fe && (this.el.addEventListener("pointerenter", tn), this.el.addEventListener("pointerleave", nn)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), fe && (this.el.removeEventListener("pointerenter", tn), this.el.removeEventListener("pointerleave", nn)));
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
    var r;
    if (!z.dragElement || z.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const i = p.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(i, this._ui(z.dragElement)), this.triggerEvent("dropout", i), z.dropElement === this && (delete z.dropElement, !t)) {
      let s, o = this.el.parentElement;
      for (; !s && o; )
        s = (r = o.ddElement) == null ? void 0 : r.ddDroppable, o = o.parentElement;
      s && s._mouseEnter(e);
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
class Oi {
  static init(e) {
    return e.ddElement || (e.ddElement = new Oi(e)), e.ddElement;
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
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Co(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class _o {
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
        const u = !a.opts.alwaysShowResizeHandle;
        s.setupResizable({
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
    var t;
    return !!((t = e == null ? void 0 : e.ddElement) != null && t.ddDroppable && !e.ddElement.ddDroppable.disabled);
  }
  /** true if element is draggable */
  isDraggable(e) {
    var t;
    return !!((t = e == null ? void 0 : e.ddElement) != null && t.ddDraggable && !e.ddElement.ddDraggable.disabled);
  }
  /** true if element is draggable */
  isResizable(e) {
    var t;
    return !!((t = e == null ? void 0 : e.ddElement) != null && t.ddResizable && !e.ddElement.ddResizable.disabled);
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
    return r.length ? r.map((o) => o.ddElement || (i ? Oi.init(o) : null)).filter((o) => o) : [];
  }
}
/*!
 * GridStack 12.3.2
 * https://gridstackjs.com/
 *
 * Copyright (c) 2021-2025  Alain Dumesny
 * see root license https://github.com/gridstack/gridstack.js/tree/master/LICENSE
 */
const Q = new _o();
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
      this._placeholder = p.createDiv([this.opts.placeholderClass, ae.itemClass, this.opts.itemClass]);
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
    var u;
    this.el = e, this.opts = t, this.animationDelay = 310, this._gsEventHandler = {}, this._extraDragRow = 0, this.dragTransform = { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 }, e.gridstack = this, this.opts = t = t || {}, e.classList.contains("grid-stack") || this.el.classList.add("grid-stack"), t.row && (t.minRow = t.maxRow = t.row, delete t.row);
    const i = p.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const r = t.columnOpts;
    if (r) {
      const c = r.breakpoints;
      !r.columnWidth && !(c != null && c.length) ? delete t.columnOpts : (r.columnMax = r.columnMax || 12, (c == null ? void 0 : c.length) > 1 && c.sort((d, h) => (h.w || 0) - (d.w || 0)));
    }
    const s = {
      ...p.cloneDeep(ae),
      column: p.toNumber(e.getAttribute("gs-column")) || ae.column,
      minRow: i || p.toNumber(e.getAttribute("gs-min-row")) || ae.minRow,
      maxRow: i || p.toNumber(e.getAttribute("gs-max-row")) || ae.maxRow,
      staticGrid: p.toBool(e.getAttribute("gs-static")) || ae.staticGrid,
      sizeToContent: p.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || ae.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || ae.removableOptions.accept,
        decline: ae.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (s.animate = p.toBool(e.getAttribute("gs-animate"))), t = p.defaults(t, s), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const o = this.el.closest("." + ae.itemClass), a = o == null ? void 0 : o.gridstackNode;
    if (a && (a.subGrid = this, this.parentGridNode = a, this.el.classList.add("grid-stack-nested"), a.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== ae.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const c = t.cellHeight;
      delete t.cellHeight, this.cellHeight(c);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = fe), this._setStaticClass();
    const l = t.engineClass || k.engineClass || Se;
    if (this.engine = new l({
      column: this.getColumn(),
      float: t.float,
      maxRow: t.maxRow,
      onChange: (c) => {
        c.forEach((d) => {
          const h = d.el;
          h && (d._removeDOM ? (h && h.remove(), delete d._removeDOM) : this._writePosAttr(h, d));
        }), this._updateContainerHeight();
      }
    }), t.auto && (this.batchUpdate(), this.engine._loading = !0, this.getGridItems().forEach((c) => this._prepareElement(c)), delete this.engine._loading, this.batchUpdate(!1)), t.children) {
      const c = t.children;
      delete t.children, c.length && this.load(c);
    }
    this.setAnimation(), t.subGridDynamic && !z.pauseDrag && (z.pauseDrag = !0), ((u = t.draggable) == null ? void 0 : u.pause) !== void 0 && (z.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
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
      var s, o;
      r.isIntersecting && ((s = e.visibleObservable) == null || s.disconnect(), delete e.visibleObservable, k.renderCB(i, e), (o = e.grid) == null || o.prepareDragDrop(e.el));
    }), window.setTimeout(() => {
      var r;
      return (r = e.visibleObservable) == null ? void 0 : r.observe(t);
    })) : k.renderCB(i, e), t;
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
    var f, x, v;
    let s = e.gridstackNode;
    if (s || (s = this.makeWidget(e).gridstackNode), (f = s.subGrid) != null && f.el)
      return s.subGrid;
    let o, a = this;
    for (; a && !o; )
      o = (x = a.opts) == null ? void 0 : x.subGridOpts, a = (v = a.parentGridNode) == null ? void 0 : v.grid;
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
    t.column === "auto" && (l = !0, t.column = Math.max(s.w || 1, (i == null ? void 0 : i.w) || 1), delete t.columnOpts);
    let u = s.el.querySelector(".grid-stack-item-content"), c, d;
    if (r && (this._removeDD(s.el), d = { ...s, x: 0, y: 0 }, p.removeInternalForSave(d), delete d.subGridOpts, s.content && (d.content = s.content, delete s.content), k.addRemoveCB ? c = k.addRemoveCB(this.el, d, !0, !1) : (c = p.createDiv(["grid-stack-item"]), c.appendChild(u), u = p.createDiv(["grid-stack-item-content"], s.el)), this.prepareDragDrop(s.el)), i) {
      const w = l ? t.column : s.w, S = s.h + i.h, N = s.el.style;
      N.transition = "none", this.update(s.el, { w, h: S }), setTimeout(() => N.transition = null);
    }
    const h = s.subGrid = k.addGrid(u, t);
    return i != null && i._moving && (h._isTemp = !0), l && (h._autoColumn = !0), r && h.makeWidget(c, d), i && (i._moving ? window.setTimeout(() => p.simulateMouseEvent(i._event, "mouseenter", h.el), 0) : h.makeWidget(s.el, s)), this.resizeToContentCheck(!1, s), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    var i;
    const t = (i = this.parentGridNode) == null ? void 0 : i.grid;
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
  save(e = !0, t = !1, i = k.saveCB, r) {
    const s = this.engine.save(e, i, r);
    if (s.forEach((o) => {
      var a;
      if (e && o.el && !o.subGrid && !i) {
        const l = o.el.querySelector(".grid-stack-item-content");
        o.content = l == null ? void 0 : l.innerHTML, o.content || delete o.content;
      } else if (!e && !i && delete o.content, (a = o.subGrid) != null && a.el) {
        const l = o.w || o.subGrid.getColumn(), u = o.subGrid.save(e, t, i, l);
        o.subGridOpts = t ? u : { children: u }, delete o.subGrid;
      }
      delete o.el;
    }), t) {
      const o = p.cloneDeep(this.opts);
      o.marginBottom === o.marginTop && o.marginRight === o.marginLeft && o.marginTop === o.marginRight && (o.margin = o.marginTop, delete o.marginTop, delete o.marginRight, delete o.marginBottom, delete o.marginLeft), o.rtl === (this.el.style.direction === "rtl") && (o.rtl = "auto"), this._isAutoCellHeight && (o.cellHeight = "auto"), this._autoColumn && (o.column = "auto");
      const a = o._alwaysShowResizeHandle;
      return delete o._alwaysShowResizeHandle, a !== void 0 ? o.alwaysShowResizeHandle = a : delete o.alwaysShowResizeHandle, p.removeInternalAndSame(o, ae), o.children = s, o;
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
    l && this.setAnimation(!1), !a && t && [...this.engine.nodes].forEach((d) => {
      if (!d.id)
        return;
      p.find(e, d.id) || (k.addRemoveCB && k.addRemoveCB(this.el, d, !1, !1), o.push(d), this.removeWidget(d.el, !0, !1));
    }), this.engine._loading = !0;
    const u = [];
    return this.engine.nodes = this.engine.nodes.filter((c) => p.find(e, c.id) ? (u.push(c), !1) : !0), e.forEach((c) => {
      var h;
      const d = p.find(u, c.id);
      if (d) {
        if (p.shouldSizeToContent(d) && (c.h = d.h), this.engine.nodeBoundFix(c), (c.autoPosition || c.x === void 0 || c.y === void 0) && (c.w = c.w || d.w, c.h = c.h || d.h, this.engine.findEmptyPosition(c)), this.engine.nodes.push(d), p.samePos(d, c) && this.engine.nodes.length > 1 && (this.moveNode(d, { ...c, forceCollide: !0 }), p.copyPos(c, d)), this.update(d.el, c), (h = c.subGridOpts) != null && h.children) {
          const f = d.el.querySelector(".grid-stack");
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
    var t;
    return e && ((t = this.opts.columnOpts) != null && t.breakpointForWindow) ? window.innerWidth : this.el.clientWidth || this.el.parentElement.clientWidth || window.innerWidth;
  }
  /** checks for dynamic column count for our current size, returning true if changed */
  checkDynamicColumn() {
    var s, o;
    const e = this.opts.columnOpts;
    if (!e || !e.columnWidth && !((s = e.breakpoints) != null && s.length))
      return !1;
    const t = this.getColumn();
    let i = t;
    const r = this._widthOrContainer(!0);
    if (e.columnWidth)
      i = Math.min(Math.round(r / e.columnWidth) || 1, e.columnMax);
    else {
      i = e.columnMax;
      let a = 0;
      for (; a < e.breakpoints.length && r <= e.breakpoints[a].w; )
        i = e.breakpoints[a++].c || t;
    }
    if (i !== t) {
      const a = (o = e.breakpoints) == null ? void 0 : o.find((l) => l.c === i);
      return this.column(i, (a == null ? void 0 : a.layout) || e.layout), !0;
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
    var t;
    if (this.el)
      return this.offAll(), this._updateResizeEvent(!0), this.setStatic(!0, !1), this.setAnimation(!1), e ? this.el.parentNode.removeChild(this.el) : (this.removeAll(e), this.el.removeAttribute("gs-current-row")), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, delete this.opts, (t = this._placeholder) == null || delete t.gridstackNode, delete this._placeholder, delete this.engine, delete this.el.gridstack, delete this.el, this;
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
    var i;
    const t = this.opts;
    return e === t ? this : (e.acceptWidgets !== void 0 && (t.acceptWidgets = e.acceptWidgets, this._setupAcceptWidget()), e.animate !== void 0 && this.setAnimation(e.animate), e.cellHeight && this.cellHeight(e.cellHeight), e.class !== void 0 && e.class !== t.class && (t.class && this.el.classList.remove(t.class), e.class && this.el.classList.add(e.class)), e.columnOpts ? (this.opts.columnOpts = e.columnOpts, this.checkDynamicColumn()) : e.columnOpts === null && this.opts.columnOpts ? (delete this.opts.columnOpts, this._updateResizeEvent()) : typeof e.column == "number" && this.column(e.column), e.margin !== void 0 && this.margin(e.margin), e.staticGrid !== void 0 && this.setStatic(e.staticGrid), e.disableDrag !== void 0 && !e.staticGrid && this.enableMove(!e.disableDrag), e.disableResize !== void 0 && !e.staticGrid && this.enableResize(!e.disableResize), e.float !== void 0 && this.float(e.float), e.row !== void 0 ? (t.minRow = t.maxRow = t.row = e.row, this._updateContainerHeight()) : (e.minRow !== void 0 && (t.minRow = e.minRow, this._updateContainerHeight()), e.maxRow !== void 0 && (t.maxRow = e.maxRow)), (i = e.children) != null && i.length && this.load(e.children), this);
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
      var c;
      const r = i == null ? void 0 : i.gridstackNode;
      if (!r)
        return;
      const s = { ...p.copyPos({}, r), ...p.cloneDeep(t) };
      this.engine.nodeBoundFix(s), delete s.autoPosition;
      const o = ["x", "y", "w", "h"];
      let a;
      if (o.some((d) => s[d] !== void 0 && s[d] !== r[d]) && (a = {}, o.forEach((d) => {
        a[d] = s[d] !== void 0 ? s[d] : r[d], delete s[d];
      })), !a && (s.minW || s.minH || s.maxW || s.maxH) && (a = {}), s.content !== void 0) {
        const d = i.querySelector(".grid-stack-item-content");
        d && d.textContent !== s.content && (r.content = s.content, k.renderCB(d, s), (c = r.subGrid) != null && c.el && (d.appendChild(r.subGrid.el), r.subGrid._updateContainerHeight())), delete s.content;
      }
      let l = !1, u = !1;
      for (const d in s)
        d[0] !== "_" && r[d] !== s[d] && (r[d] = s[d], l = !0, u = u || !this.opts.staticGrid && (d === "noResize" || d === "noMove" || d === "locked"));
      if (p.sanitizeMinMax(r), a) {
        const d = a.w !== void 0 && a.w !== r.w;
        this.moveNode(r, a), d && r.subGrid ? r.subGrid.onResize(this.hasAnimationCSS() ? r.w : void 0) : this.resizeToContentCheck(d, r), delete r._orig;
      }
      (a || l) && this._writeAttr(i, r), u && this.prepareDragDrop(r.el), k.updateCB && k.updateCB(r);
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
    var h, f;
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
    let u;
    if (t.subGrid) {
      u = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const x = t.subGrid.el.getBoundingClientRect(), v = e.getBoundingClientRect();
      u += x.top - v.top;
    } else {
      if ((f = (h = t.subGridOpts) == null ? void 0 : h.children) != null && f.length)
        return;
      {
        const x = o.firstElementChild;
        if (!x) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${k.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        u = x.getBoundingClientRect().height || l;
      }
    }
    if (l === u)
      return;
    s += u - l;
    let c = Math.ceil(s / r);
    const d = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    d && c > d && (c = d, e.classList.add("size-to-content-max")), t.minH && c < t.minH ? c = t.minH : t.maxH && c > t.maxH && (c = t.maxH), c !== t.h && (i._ignoreLayoutsNodeChange = !0, i.moveNode(t, { h: c }), delete i._ignoreLayoutsNodeChange);
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
    var e;
    if (this.engine.batchMode)
      return this;
    if ((e = this.engine.addedNodes) != null && e.length) {
      this._ignoreLayoutsNodeChange || this.engine.layoutsNodesChange(this.engine.addedNodes), this.engine.addedNodes.forEach((i) => {
        delete i._dirty;
      });
      const t = [...this.engine.addedNodes];
      this.engine.addedNodes = [], this._triggerEvent("added", t);
    }
    return this;
  }
  /** @internal */
  _triggerRemoveEvent() {
    var e;
    if (this.engine.batchMode)
      return this;
    if ((e = this.engine.removedNodes) != null && e.length) {
      const t = [...this.engine.removedNodes];
      this.engine.removedNodes = [], this._triggerEvent("removed", t);
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
    i = i || this._readAttr(e), e.gridstackNode = i, i.el = e, i.grid = this, i = this.engine.addNode(i, t), this._writeAttr(e, i), e.classList.add(ae.itemClass, this.opts.itemClass);
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
  onResize(e = ((t) => (t = this.el) == null ? void 0 : t.clientWidth)()) {
    if (!e || this.prevWidth === e)
      return;
    this.prevWidth = e, this.batchUpdate();
    let i = !1;
    return this._autoColumn && this.parentGridNode ? this.opts.column !== this.parentGridNode.w && (this.column(this.parentGridNode.w, this.opts.layout || "list"), i = !0) : i = this.checkDynamicColumn(), this._isAutoCellHeight && this.cellHeight(), this.engine.nodes.forEach((r) => {
      r.subGrid && r.subGrid.onResize();
    }), this._skipInitialResize || this.resizeToContentCheck(i), delete this._skipInitialResize, this.batchUpdate(!1), this;
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
    return Q;
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
    (t == null ? void 0 : t.pause) !== void 0 && (z.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? p.getElements(e, r) : e).forEach((o, a) => {
      Q.isDraggable(o) || Q.dragIn(o, t), i != null && i[a] && (o.gridstackNode = i[a]);
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
    var t;
    const e = (t = this._placeholder) == null ? void 0 : t.gridstackNode;
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && k._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return Q.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return Q.droppable(this.el, "destroy"), this;
    let e, t;
    const i = (r, s, o) => {
      var h;
      o = o || s;
      const a = o.gridstackNode;
      if (!a)
        return;
      if (!((h = a.grid) != null && h.el)) {
        o.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const f = o.getBoundingClientRect();
        o.style.left = f.x + (this.dragTransform.xScale - 1) * (r.clientX - f.x) / this.dragTransform.xScale + "px", o.style.top = f.y + (this.dragTransform.yScale - 1) * (r.clientY - f.y) / this.dragTransform.yScale + "px", o.style.transformOrigin = "0px 0px";
      }
      let { top: l, left: u } = o.getBoundingClientRect();
      const c = this.el.getBoundingClientRect();
      u -= c.left, l -= c.top;
      const d = {
        position: {
          top: l * this.dragTransform.xScale,
          left: u * this.dragTransform.yScale
        }
      };
      if (a._temporaryRemoved) {
        if (a.x = Math.max(0, Math.round(u / t)), a.y = Math.max(0, Math.round(l / e)), delete a.autoPosition, this.engine.nodeBoundFix(a), !this.engine.willItFit(a)) {
          if (a.autoPosition = !0, !this.engine.willItFit(a)) {
            Q.off(s, "drag");
            return;
          }
          a._willFitPos && (p.copyPos(a, a._willFitPos), delete a._willFitPos);
        }
        this._onStartMoving(o, r, d, a, t, e);
      } else
        this._dragOrResize(o, r, d, a, t, e);
    };
    return Q.droppable(this.el, {
      accept: (r) => {
        const s = r.gridstackNode || this._readAttr(r, !1);
        if ((s == null ? void 0 : s.grid) === this)
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
      let a = (o == null ? void 0 : o.gridstackNode) || s.gridstackNode;
      if ((a == null ? void 0 : a.grid) === this && !a._temporaryRemoved)
        return !1;
      if (a != null && a._sidebarOrig && (a.w = a._sidebarOrig.w, a.h = a._sidebarOrig.h), a != null && a.grid && a.grid !== this && !a._temporaryRemoved && a.grid._leave(s, o), o = o || s, t = this.cellWidth(), e = this.getCellHeight(!0), !a) {
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
      const l = a.w || Math.round(o.offsetWidth / t) || 1, u = a.h || Math.round(o.offsetHeight / e) || 1;
      return a.grid && a.grid !== this ? (s._gridstackNodeOrig || (s._gridstackNodeOrig = a), s.gridstackNode = a = { ...a, w: l, h: u, grid: this }, delete a.x, delete a.y, this.engine.cleanupNode(a).nodeBoundFix(a), a._initDD = a._isExternal = // DOM needs to be re-parented on a drop
      a._temporaryRemoved = !0) : (a.w = l, a.h = u, a._temporaryRemoved = !0), k._itemRemoving(a.el, !1), Q.on(s, "drag", i), i(r, s, o), !1;
    }).on(this.el, "dropout", (r, s, o) => {
      const a = (o == null ? void 0 : o.gridstackNode) || s.gridstackNode;
      return a && (!a.grid || a.grid === this) && (this._leave(s, o), this._isTemp && this.removeAsSubGrid(a)), !1;
    }).on(this.el, "drop", (r, s, o) => {
      var h, f, x;
      const a = (o == null ? void 0 : o.gridstackNode) || s.gridstackNode;
      if ((a == null ? void 0 : a.grid) === this && !a._isExternal)
        return !1;
      const l = !!this.placeholder.parentElement, u = s !== o;
      this.placeholder.remove(), delete this.placeholder.gridstackNode, l && this.opts.animate && (this.setAnimation(!1), this.setAnimation(!0, !0));
      const c = s._gridstackNodeOrig;
      if (delete s._gridstackNodeOrig, l && (c != null && c.grid) && c.grid !== this) {
        const v = c.grid;
        v.engine.removeNodeFromLayoutCache(c), v.engine.removedNodes.push(c), v._triggerRemoveEvent()._triggerChangeEvent(), v.parentGridNode && !v.engine.nodes.length && v.opts.subGridDynamic && v.removeAsSubGrid();
      }
      if (!a || (l && (this.engine.cleanupNode(a), a.grid = this), (h = a.grid) == null || delete h._isTemp, Q.off(s, "drag"), o !== s ? (o.remove(), s = o) : s.remove(), this._removeDD(s), !l))
        return !1;
      const d = (x = (f = a.subGrid) == null ? void 0 : f.el) == null ? void 0 : x.gridstack;
      return p.copyPos(a, this._readAttr(this.placeholder)), p.removePositioningStyles(s), u && (a.content || a.subGridOpts || k.addRemoveCB) ? (delete a.el, s = this.addWidget(a)) : (this._prepareElement(s, !0, a), this.el.appendChild(s), this.resizeToContentCheck(!1, a), d && (d.parentGridNode = a), this._updateContainerHeight()), this.engine.addedNodes.push(a), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...r, type: "dropped" }, c && c.grid ? c : void 0, a), !1;
    }), this;
  }
  /** @internal mark item for removal */
  static _itemRemoving(e, t) {
    if (!e)
      return;
    const i = e ? e.gridstackNode : void 0;
    !(i != null && i.grid) || e.classList.contains(i.grid.opts.removableOptions.decline) || (t ? i._isAboutToRemove = !0 : delete i._isAboutToRemove, t ? e.classList.add("grid-stack-item-removing") : e.classList.remove("grid-stack-item-removing"));
  }
  /** @internal called to setup a trash drop zone if the user specifies it */
  _setupRemoveDrop() {
    if (typeof this.opts.removable != "string")
      return this;
    const e = document.querySelector(this.opts.removable);
    return e ? (!this.opts.staticGrid && !Q.isDroppable(e) && Q.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, i) => k._itemRemoving(i, !0)).on(e, "dropout", (t, i) => k._itemRemoving(i, !1)), this) : this;
  }
  /**
   * prepares the element for drag&drop - this is normally called by makeWidget() unless are are delay loading
   * @param el GridItemHTMLElement of the widget
   * @param [force=false]
   * */
  prepareDragDrop(e, t = !1) {
    const i = e == null ? void 0 : e.gridstackNode;
    if (!i)
      return;
    const r = i.noMove || this.opts.disableDrag, s = i.noResize || this.opts.disableResize, o = this.opts.staticGrid || r && s;
    if ((t || o) && (i._initDD && (this._removeDD(e), delete i._initDD), o && e.classList.add("ui-draggable-disabled", "ui-resizable-disabled"), !t))
      return this;
    if (!i._initDD) {
      let a, l;
      const u = (h, f) => {
        this.triggerEvent(h, h.target), a = this.cellWidth(), l = this.getCellHeight(!0), this._onStartMoving(e, h, f, i, a, l);
      }, c = (h, f) => {
        this._dragOrResize(e, h, f, i, a, l);
      }, d = (h) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete i._moving, delete i._resizing, delete i._event, delete i._lastTried;
        const f = i.w !== i._orig.w, x = h.target;
        if (!(!x.gridstackNode || x.gridstackNode.grid !== this)) {
          if (i.el = x, i._isAboutToRemove) {
            const v = e.gridstackNode.grid;
            v._gsEventHandler[h.type] && v._gsEventHandler[h.type](h, x), v.engine.nodes.push(i), v.removeWidget(e, !0, !0);
          } else
            p.removePositioningStyles(x), i._temporaryRemoved ? (this._writePosAttr(x, i), this.engine.addNode(i)) : this._writePosAttr(x, i), this.triggerEvent(h, x);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), h.type === "resizestop" && (Number.isInteger(i.sizeToContent) && (i.sizeToContent = i.h), this.resizeToContentCheck(f, i));
        }
      };
      Q.draggable(e, {
        start: u,
        stop: d,
        drag: c
      }).resizable(e, {
        start: u,
        stop: d,
        resize: c
      }), i._initDD = !0;
    }
    return Q.draggable(e, r ? "disable" : "enable").resizable(e, s ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, i, r, s, o) {
    var a;
    if (this.engine.cleanNodes().beginUpdate(r), this._writePosAttr(this.placeholder, r), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = r, (a = r.grid) != null && a.el)
      this.dragTransform = p.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const l = this.placeholder.closest(".grid-stack");
      this.dragTransform = p.getValuesFromTransformedElement(l);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (r.el = this.placeholder, r._lastUiPosition = i.position, r._prevYPix = i.position.top, r._moving = t.type === "dragstart", r._resizing = t.type === "resizestart", delete r._lastTried, t.type === "dropover" && r._temporaryRemoved && (this.engine.addNode(r), r._moving = !0), this.engine.cacheRects(s, o, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const l = this.getColumn() - r.x, u = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - r.y;
      Q.resizable(e, "option", "minWidth", s * Math.min(r.minW || 1, l)).resizable(e, "option", "minHeight", o * Math.min(r.minH || 1, u)).resizable(e, "option", "maxWidth", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, l)).resizable(e, "option", "maxWidthMoveLeft", s * Math.min(r.maxW || Number.MAX_SAFE_INTEGER, r.x + r.w)).resizable(e, "option", "maxHeight", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, u)).resizable(e, "option", "maxHeightMoveUp", o * Math.min(r.maxH || Number.MAX_SAFE_INTEGER, r.y + r.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, i, r, s, o) {
    const a = { ...r._orig };
    let l, u = this.opts.marginLeft, c = this.opts.marginRight, d = this.opts.marginTop, h = this.opts.marginBottom;
    const f = Math.round(o * 0.1), x = Math.round(s * 0.1);
    if (u = Math.min(u, x), c = Math.min(c, x), d = Math.min(d, f), h = Math.min(h, f), t.type === "drag") {
      if (r._temporaryRemoved)
        return;
      const w = i.position.top - r._prevYPix;
      r._prevYPix = i.position.top, this.opts.draggable.scroll !== !1 && p.updateScrollPosition(e, i.position, w);
      const S = i.position.left + (i.position.left > r._lastUiPosition.left ? -c : u), N = i.position.top + (i.position.top > r._lastUiPosition.top ? -h : d);
      a.x = Math.round(S / s), a.y = Math.round(N / o);
      const C = this._extraDragRow;
      if (this.engine.collide(r, a)) {
        const R = this.getRow();
        let y = Math.max(0, a.y + r.h - R);
        this.opts.maxRow && R + y > this.opts.maxRow && (y = Math.max(0, this.opts.maxRow - R)), this._extraDragRow = y;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== C && this._updateContainerHeight(), r.x === a.x && r.y === a.y)
        return;
    } else if (t.type === "resize") {
      if (a.x < 0 || (p.updateScrollResize(t, e, o), a.w = Math.round((i.size.width - u) / s), a.h = Math.round((i.size.height - d) / o), r.w === a.w && r.h === a.h) || r._lastTried && r._lastTried.w === a.w && r._lastTried.h === a.h)
        return;
      const w = i.position.left + u, S = i.position.top + d;
      a.x = Math.round(w / s), a.y = Math.round(S / o), l = !0;
    }
    r._event = t, r._lastTried = a;
    const v = {
      x: i.position.left + u,
      y: i.position.top + d,
      w: (i.size ? i.size.width : r.w * s) - u - c,
      h: (i.size ? i.size.height : r.h * o) - d - h
    };
    if (this.engine.moveNodeCheck(r, { ...a, cellWidth: s, cellHeight: o, rect: v, resizing: l })) {
      r._lastUiPosition = i.position, this.engine.cacheRects(s, o, d, c, h, u), delete r._skipDown, l && r.subGrid && r.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const w = t.target;
      r._sidebarOrig || this._writePosAttr(w, r), this.triggerEvent(t, w);
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
    if (!i || (t.style.transform = t.style.transformOrigin = null, Q.off(e, "drag"), i._temporaryRemoved))
      return;
    i._temporaryRemoved = !0, this.engine.removeNode(i), i.el = i._isExternal && t ? t : e;
    const r = i._sidebarOrig;
    i._isExternal && this.engine.cleanupNode(i), i._sidebarOrig = r, this.opts.removable === !0 && k._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : i._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return xo(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
k.renderCB = (n, e) => {
  n && (e != null && e.content) && (n.textContent = e.content);
};
k.resizeToContentParent = ".grid-stack-item-content";
k.Utils = p;
k.Engine = Se;
k.GDRev = "12.3.2";
const kt = /* @__PURE__ */ new WeakMap();
function Eo({ children: n }) {
  const { _gridStack: { value: e, set: t }, options: i } = Kn(), r = I(/* @__PURE__ */ new Map()), s = I(null), o = I(i), a = K((c, d) => {
    if (d.id && d.grid) {
      let h = kt.get(d.grid);
      h || (h = /* @__PURE__ */ new Map(), kt.set(d.grid, h)), h.set(d.id, c), r.current.set(d.id, c);
    }
  }, []), l = K(() => {
    if (s.current) {
      k.renderCB = a;
      const c = k.init(o.current, s.current);
      return c && o.current.handle && c.opts && (c.opts.handle = o.current.handle), c;
    }
    return null;
  }, [a]), u = (c, d) => {
    const { children: h, ...f } = c, { children: x, ...v } = d;
    return En(f, v);
  };
  return yi(() => {
    if (!u(i, o.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), r.current.clear(), kt.delete(e), o.current = i, t(null);
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
  }, [e, l, t]), g(Xn.Provider, {
    value: B(() => ({
      getWidgetContainer: (c) => {
        if (e) {
          const d = kt.get(e);
          if (d != null && d.has(c))
            return d.get(c) || null;
        }
        return r.current.get(c) || null;
      }
    }), [e]),
    children: g("div", {
      ref: s,
      children: e ? n : null
    })
  });
}
const Ai = ({ options: n, widgets: e, onChange: t, className: i }) => {
  const r = B(() => JSON.stringify(e.map((l) => {
    var u, c;
    return {
      id: l.id,
      w: l.w,
      h: l.h,
      x: l.x,
      y: l.y,
      noMove: l.noMove,
      noResize: l.noResize,
      locked: l.locked,
      content: ((u = l.content) == null ? void 0 : u.toString()) ?? "",
      _originalContent: ((c = l._originalContent) == null ? void 0 : c.toString()) ?? "",
      allowedSizes: l.allowedSizes
    };
  })), [e]), s = B(() => ({
    ...n,
    class: i
  }), [n, r, i]), o = (l, u, c) => {
    let d = c[0], h = 1 / 0;
    for (const f of c) {
      const x = f.w - l, v = f.h - u, w = x * x + v * v;
      w < h && (h = w, d = f);
    }
    return d;
  };
  return g(mo, {
    options: s,
    widgets: e,
    onResizeStop: (l, u) => {
      var f, x;
      const c = u.gridstackNode;
      if (!c) return;
      const d = ((f = u.gridstackNode) == null ? void 0 : f.allowedSizes) ?? [];
      if (d.length === 0)
        return;
      const h = o(c.w ?? 1, c.h ?? 1, d ?? []);
      (c.w !== h.w || c.h !== h.h) && ((x = c.grid) == null || x.update(u, {
        w: h.w,
        h: h.h
      }));
    },
    onChange: t,
    children: g(Eo, {
      children: g(bo, {})
    })
  });
};
Ai.displayName = "F0GridStack";
const Do = (n, e, t) => g("div", {
  children: n
}), Zt = ({ widgets: n = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: i = Do, main: r = !1, deps: s }) => {
  const o = K((y, b, D) => g(Ri.div, {
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
    children: i(y, b, D)
  }), [i]), a = B(() => ({
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
      const D = {};
      return y.deps.forEach((E) => {
        typeof E == "string" && b[E] !== void 0 && (D[E] = b[E]);
      }), y.content(D);
    }
    return typeof y.content == "function" ? null : y.content;
  }, u = (y, b, D) => y.map((E) => {
    const T = l(E, D), A = {
      id: E.id,
      h: E.h ?? 1,
      w: E.w ?? 1,
      allowedSizes: E.availableSizes,
      noMove: !b,
      noResize: !b,
      locked: E.locked,
      meta: E.meta,
      _originalContent: T,
      content: o(T, E.meta, b)
    };
    return E.x !== void 0 && (A.x = E.x), E.y !== void 0 && (A.y = E.y), A;
  }), [c, d] = W(u(n, e)), h = I(e), f = I(n), x = I(!1), v = I(/* @__PURE__ */ new Map()), w = I(n);
  w.current = n;
  const S = I(s), N = B(() => {
    const y = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || n.forEach((b) => {
      if (b.deps && b.deps.length > 0) {
        const D = b.deps.map((E) => typeof E == "string" && s[E] !== void 0 ? s[E] : E).filter((E) => E !== null);
        y.set(b.id, D);
      }
    }), y;
  }, [n, s]), C = K((y) => {
    d(y), x.current || t(y.map((b) => {
      const D = w.current.find((E) => E.id === b.id);
      return {
        id: b.id,
        w: b.w ?? 1,
        h: b.h ?? 1,
        allowedSizes: b.allowedSizes,
        meta: b.meta,
        content: typeof (D == null ? void 0 : D.content) == "function" ? D.content : b._originalContent,
        x: b.x ?? 0,
        y: b.y ?? 0,
        locked: b.locked,
        deps: D == null ? void 0 : D.deps
      };
    })), x.current = !1;
  }, [t]), R = (y, b) => !y && !b ? !1 : !y || !b || y.length !== b.length ? !0 : y.some((D, E) => D !== b[E]);
  return H(() => {
    const y = h.current !== e, b = f.current !== n, D = S.current !== s && (S.current === void 0 || s === void 0 || Object.keys(S.current).length !== Object.keys(s).length || Object.keys(s).some((m) => {
      var _;
      return ((_ = S.current) == null ? void 0 : _[m]) !== s[m];
    })), E = /* @__PURE__ */ new Map();
    n.forEach((m) => {
      if (m.deps && m.deps.length > 0) {
        const _ = v.current.get(m.id), O = N.get(m.id);
        E.set(m.id, R(_, O)), O ? v.current.set(m.id, O) : v.current.delete(m.id);
      }
    });
    const T = new Set(n.map((m) => m.id));
    v.current.forEach((m, _) => {
      T.has(_) || v.current.delete(_);
    });
    const A = Array.from(E.values()).some((m) => m) || D;
    y && !b && !A ? (x.current = !0, d((m) => m.map((_) => {
      const O = n.find((V) => V.id === _.id);
      if (!O)
        return _;
      const P = l(O, s);
      return {
        ..._,
        noMove: !e,
        noResize: !e,
        locked: O.locked,
        meta: O.meta,
        _originalContent: P,
        content: o(P, O.meta, e)
      };
    }))) : (b || A) && d((m) => {
      const _ = new Map(m.map((O) => [O.id, O]));
      return n.map((O) => {
        const P = _.get(O.id), V = E.get(O.id) ?? !1;
        let X;
        V || !P ? X = l(O, s) : X = P._originalContent ?? l(O, s);
        const U = {
          id: O.id,
          h: (P == null ? void 0 : P.h) ?? O.h ?? 1,
          w: (P == null ? void 0 : P.w) ?? O.w ?? 1,
          allowedSizes: O.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: O.locked,
          meta: O.meta,
          _originalContent: X,
          content: o(X, O.meta, e)
        }, te = (P == null ? void 0 : P.x) ?? O.x, G = (P == null ? void 0 : P.y) ?? O.y;
        return te !== void 0 && (U.x = te), G !== void 0 && (U.y = G), U;
      });
    }), h.current = e, f.current = n, S.current = s;
  }, [n, e, o, N, s]), g(Ai, {
    className: j(r && "h-full flex-1 overflow-auto"),
    options: a,
    onChange: C,
    widgets: c
  });
};
Zt.displayName = "GroupGrid";
Zt.__isPageLayoutGroup = !0;
const Ro = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutBlock = !0, t;
}, So = (n, e) => {
  const t = e;
  return t.displayName = n, t.__isPageLayoutGroup = !0, t;
}, No = (n, e) => g("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: e,
  ...n,
  children: g("path", {
    fill: "currentColor",
    d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
    vectorEffect: "non-scaling-stroke"
  })
}), qn = le(No), Oo = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], Vn = le((n, e) => {
  const t = Oo.reduce((i, r) => {
    const { [r]: s, ...o } = i;
    return o;
  }, n);
  return g(Si, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: n.icon == qn
  });
});
Vn.displayName = "AIButton";
const hi = Di({
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
}), Ao = {
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
}, ki = le(({ content: n, variant: e, align: t, className: i, as: r, ellipsis: s, noEllipsisTooltip: o, markdown: a, ...l }, u) => {
  const c = r ?? Ao[e ?? "body"];
  if (s !== void 0)
    return g(Gr, {
      ref: u,
      lines: typeof s == "number" ? s : 1,
      noTooltip: o,
      tag: c,
      className: j(hi({
        variant: e,
        align: t
      }), i),
      markdown: a,
      ...l,
      children: n
    });
  if (a) {
    const d = $r(n);
    return en(c, {
      ...l,
      className: j(hi({
        variant: e,
        align: t
      }), i),
      ref: u,
      dangerouslySetInnerHTML: {
        __html: d
      }
    });
  }
  return en(c, {
    ...l,
    className: j(hi({
      variant: e,
      align: t
    }), i),
    ref: u
  }, n);
});
ki.displayName = "Text";
const Jn = le((n, e) => g(ki, {
  ref: e,
  markdown: n.markdown ?? !0,
  ...n
}));
Jn.displayName = "F0Text";
const wc = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Zn = ({ title: n, draggable: e = !1, onDragStart: t, onDragEnd: i, isDragging: r = !1, AIButton: s, actions: o, children: a, selected: l = !1 }) => {
  const [u, c] = W(!1), [d, h] = W(!1), f = Ur(), x = (w) => {
    c(w);
  }, v = d || u;
  return H(() => {
    if (!r || !i) return;
    const w = () => {
      i();
    };
    return document.addEventListener("mouseup", w), () => {
      document.removeEventListener("mouseup", w);
    };
  }, [r, i]), M("div", {
    className: j("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && u ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", r && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [M("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [M("div", {
        className: j("flex min-w-0 flex-1 items-center", !e && "pl-4", !o && !s && "pr-4"),
        children: [e && g("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: g(Dn, {
            icon: Kr,
            size: "xs"
          })
        }), g("div", {
          className: j("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: g(Jn, {
            variant: "label",
            content: n,
            ellipsis: !0
          })
        })]
      }), g(Xr, {
        children: (s || o) && v && M(Ri.div, {
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
          children: [s && g("div", {
            className: "flex h-6 items-center",
            children: g(Vn, {
              size: "sm",
              label: f.ai.ask,
              onClick: s,
              icon: qn
            })
          }), o && g(Yr, {
            items: o,
            open: u,
            onOpenChange: x,
            align: "end",
            children: g(Si, {
              icon: qr,
              label: "Actions",
              variant: "ghost",
              size: "md",
              hideLabel: !0,
              noAutoTooltip: !0,
              noTitle: !0,
              pressed: u
            })
          })]
        })
      })]
    }), g("div", {
      className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4",
      children: a
    })]
  });
}, ko = () => M("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [g("div", {
    className: "flex h-12 w-full items-center px-4",
    children: g(Fe, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), M("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [g(Fe, {
      className: "h-1/2 w-full rounded-sm"
    }), g(Fe, {
      className: "h-1/3 w-full rounded-sm"
    }), g(Fe, {
      className: "h-1/5 w-full rounded-sm"
    }), g(Fe, {
      className: "h-1/3 w-full rounded-sm"
    }), g(Fe, {
      className: "h-full w-full rounded-sm"
    }), g(Fe, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
Zn.displayName = "F0Widget";
const To = jr(Zn, ko), zo = ({ children: n, title: e, draggable: t = !1, actions: i, aiButton: r }) => g(To, {
  title: e,
  draggable: t,
  actions: i,
  AIButton: r,
  children: n
}), Qn = ({ widgets: n, editMode: e = !1, onChange: t = () => {
}, deps: i, ...r }) => g(Zt, {
  widgets: n,
  editMode: e,
  onChange: t,
  deps: i,
  ...r,
  WidgetWrapper: (s, o, a) => g(zo, {
    title: (o == null ? void 0 : o.title) ?? "",
    draggable: a,
    actions: o == null ? void 0 : o.actions,
    aiButton: o == null ? void 0 : o.aiButton,
    children: s
  })
});
Qn.displayName = "Dashboard";
const Po = So("Dashboard", Qn), Cc = Re("Dashboard", Po), Mo = Di({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Lo = (n) => (n || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), Io = (n) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(n) ? n.every(e) ? [{
    items: n
  }] : n : [n];
}, Qt = le(({ children: n, variant: e = "default", className: t, draggable: i = !1, onDragStart: r, onDragEnd: s, onDrop: o, dragId: a, primaryAction: l, ...u }, c) => {
  const d = B(() => Io(u.actions || []), [u.actions]), h = B(() => d.flatMap((x) => x.items), [d]), f = B(() => h.length > 0 || !!l, [h, l]);
  return M("div", {
    ref: c,
    className: j(Mo({
      variant: e
    }), "relative", t),
    draggable: i,
    onDragStart: r,
    onDragEnd: s,
    onDrop: o,
    "data-drag-id": a,
    ...u,
    children: [f && M("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!l && l, h.length > 0 && g(Vr, {
        items: Lo(d)
      })]
    }), g("div", {
      children: n
    })]
  });
});
Qt.displayName = "Block";
Qt.__isPageLayoutBlock = !0;
const Ho = ({ title: n = "", description: e, titleLevel: t = "h2", children: i, className: r, ...s }) => {
  if (!n) return null;
  const o = t;
  return M(Qt, {
    ...s,
    className: j("space-y-4", r),
    children: [M("div", {
      className: "space-y-2",
      children: [g(o, {
        className: j("font-semibold text-f1-foreground", {
          "text-2xl": t === "h1",
          "text-xl": t === "h2",
          "text-lg": t === "h3",
          "text-base": t === "h4",
          "text-sm": t === "h5",
          "text-xs": t === "h6"
        }),
        children: n
      }), e && g("p", {
        className: "text-sm text-f1-foreground-secondary",
        children: e
      })]
    }), g("div", {
      className: "flex-1",
      children: i
    })]
  });
}, Bo = Ro("BlockContent", Ho), Fo = (n) => !Gn(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutBlock" in n.type, Wo = (n) => !Gn(n) || !n.type || typeof n.type == "string" || typeof n.type == "symbol" ? !1 : "__isPageLayoutGroup" in n.type, er = (n, e, t) => {
  const i = Lt.toArray(e);
  for (const r of i)
    t.includes("block") && Fo(r) || t.includes("group") && Wo(r) || console.warn(
      `${n}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      r
    );
}, Ti = le(({ children: n, onSort: e, ...t }, i) => {
  er("GroupLinear", n, ["block"]);
  const [r, s] = W(Lt.toArray(n));
  return H(() => {
    s(Lt.toArray(n));
  }, [n]), H(() => {
    e == null || e(r);
  }, [r, e]), g("div", {
    ref: i,
    ...t,
    children: r.map((o, a) => g(io, {
      children: o
    }, a))
  });
});
Ti.displayName = "GroupLinear";
Ti.__isPageLayoutGroup = !0;
function Go() {
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
const ei = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Qe(n) {
  const e = Object.prototype.toString.call(n);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function zi(n) {
  return "nodeType" in n;
}
function ee(n) {
  var e, t;
  return n ? Qe(n) ? n : zi(n) && (e = (t = n.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function Pi(n) {
  const {
    Document: e
  } = ee(n);
  return n instanceof e;
}
function xt(n) {
  return Qe(n) ? !1 : n instanceof ee(n).HTMLElement;
}
function tr(n) {
  return n instanceof ee(n).SVGElement;
}
function et(n) {
  return n ? Qe(n) ? n.document : zi(n) ? Pi(n) ? n : xt(n) || tr(n) ? n.ownerDocument : document : document : document;
}
const ge = ei ? yi : H;
function ti(n) {
  const e = I(n);
  return ge(() => {
    e.current = n;
  }), K(function() {
    for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
      i[r] = arguments[r];
    return e.current == null ? void 0 : e.current(...i);
  }, []);
}
function $o() {
  const n = I(null), e = K((i, r) => {
    n.current = setInterval(i, r);
  }, []), t = K(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [e, t];
}
function vt(n, e) {
  e === void 0 && (e = [n]);
  const t = I(n);
  return ge(() => {
    t.current !== n && (t.current = n);
  }, e), t;
}
function wt(n, e) {
  const t = I();
  return B(
    () => {
      const i = n(t.current);
      return t.current = i, i;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function Gt(n) {
  const e = ti(n), t = I(null), i = K(
    (r) => {
      r !== t.current && (e == null || e(r, t.current)), t.current = r;
    },
    //eslint-disable-next-line
    []
  );
  return [t, i];
}
function $t(n) {
  const e = I();
  return H(() => {
    e.current = n;
  }, [n]), e.current;
}
let fi = {};
function Ct(n, e) {
  return B(() => {
    if (e)
      return e;
    const t = fi[n] == null ? 0 : fi[n] + 1;
    return fi[n] = t, n + "-" + t;
  }, [n, e]);
}
function ir(n) {
  return function(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      i[r - 1] = arguments[r];
    return i.reduce((s, o) => {
      const a = Object.entries(o);
      for (const [l, u] of a) {
        const c = s[l];
        c != null && (s[l] = c + n * u);
      }
      return s;
    }, {
      ...e
    });
  };
}
const qe = /* @__PURE__ */ ir(1), yt = /* @__PURE__ */ ir(-1);
function jo(n) {
  return "clientX" in n && "clientY" in n;
}
function ii(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: e
  } = ee(n.target);
  return e && n instanceof e;
}
function Uo(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: e
  } = ee(n.target);
  return e && n instanceof e;
}
function jt(n) {
  if (Uo(n)) {
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
  return jo(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const He = /* @__PURE__ */ Object.freeze({
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
        return [He.Translate.toString(n), He.Scale.toString(n)].join(" ");
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
}), rn = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Ko(n) {
  return n.matches(rn) ? n : n.querySelector(rn);
}
const Xo = {
  display: "none"
};
function Yo(n) {
  let {
    id: e,
    value: t
  } = n;
  return L.createElement("div", {
    id: e,
    style: Xo
  }, t);
}
function qo(n) {
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
  return L.createElement("div", {
    id: e,
    style: r,
    role: "status",
    "aria-live": i,
    "aria-atomic": !0
  }, t);
}
function Vo() {
  const [n, e] = W("");
  return {
    announce: K((i) => {
      i != null && e(i);
    }, []),
    announcement: n
  };
}
const nr = /* @__PURE__ */ Ne(null);
function Jo(n) {
  const e = we(nr);
  H(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(n);
  }, [n, e]);
}
function Zo() {
  const [n] = W(() => /* @__PURE__ */ new Set()), e = K((i) => (n.add(i), () => n.delete(i)), [n]);
  return [K((i) => {
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
const Qo = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, ea = {
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
function ta(n) {
  let {
    announcements: e = ea,
    container: t,
    hiddenTextDescribedById: i,
    screenReaderInstructions: r = Qo
  } = n;
  const {
    announce: s,
    announcement: o
  } = Vo(), a = Ct("DndLiveRegion"), [l, u] = W(!1);
  if (H(() => {
    u(!0);
  }, []), Jo(B(() => ({
    onDragStart(d) {
      let {
        active: h
      } = d;
      s(e.onDragStart({
        active: h
      }));
    },
    onDragMove(d) {
      let {
        active: h,
        over: f
      } = d;
      e.onDragMove && s(e.onDragMove({
        active: h,
        over: f
      }));
    },
    onDragOver(d) {
      let {
        active: h,
        over: f
      } = d;
      s(e.onDragOver({
        active: h,
        over: f
      }));
    },
    onDragEnd(d) {
      let {
        active: h,
        over: f
      } = d;
      s(e.onDragEnd({
        active: h,
        over: f
      }));
    },
    onDragCancel(d) {
      let {
        active: h,
        over: f
      } = d;
      s(e.onDragCancel({
        active: h,
        over: f
      }));
    }
  }), [s, e])), !l)
    return null;
  const c = L.createElement(L.Fragment, null, L.createElement(Yo, {
    id: i,
    value: r.draggable
  }), L.createElement(qo, {
    id: a,
    announcement: o
  }));
  return t ? $n(c, t) : c;
}
var Y;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(Y || (Y = {}));
function Ut() {
}
function sn(n, e) {
  return B(
    () => ({
      sensor: n,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, e]
  );
}
function ia() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return B(
    () => [...e].filter((i) => i != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const pe = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function na(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function ra(n, e) {
  const t = jt(n);
  if (!t)
    return "0 0";
  const i = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return i.x + "% " + i.y + "%";
}
function sa(n, e) {
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
function oa(n, e) {
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
function on(n) {
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
function rr(n, e) {
  if (!n || n.length === 0)
    return null;
  const [t] = n;
  return t[e];
}
const aa = (n) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: i
  } = n;
  const r = on(e), s = [];
  for (const o of i) {
    const {
      id: a
    } = o, l = t.get(a);
    if (l) {
      const u = on(l), c = r.reduce((h, f, x) => h + na(u[x], f), 0), d = Number((c / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: o,
          value: d
        }
      });
    }
  }
  return s.sort(sa);
};
function la(n, e) {
  const t = Math.max(e.top, n.top), i = Math.max(e.left, n.left), r = Math.min(e.left + e.width, n.left + n.width), s = Math.min(e.top + e.height, n.top + n.height), o = r - i, a = s - t;
  if (i < r && t < s) {
    const l = e.width * e.height, u = n.width * n.height, c = o * a, d = c / (l + u - c);
    return Number(d.toFixed(4));
  }
  return 0;
}
const ca = (n) => {
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
      const l = la(a, e);
      l > 0 && r.push({
        id: o,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return r.sort(oa);
};
function da(n, e, t) {
  return {
    ...n,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function sr(n, e) {
  return n && e ? {
    x: n.left - e.left,
    y: n.top - e.top
  } : pe;
}
function ua(n) {
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
const ha = /* @__PURE__ */ ua(1);
function or(n) {
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
function fa(n, e, t) {
  const i = or(e);
  if (!i)
    return n;
  const {
    scaleX: r,
    scaleY: s,
    x: o,
    y: a
  } = i, l = n.left - o - (1 - r) * parseFloat(t), u = n.top - a - (1 - s) * parseFloat(t.slice(t.indexOf(" ") + 1)), c = r ? n.width / r : n.width, d = s ? n.height / s : n.height;
  return {
    width: c,
    height: d,
    top: u,
    right: l + c,
    bottom: u + d,
    left: l
  };
}
const ga = {
  ignoreTransform: !1
};
function tt(n, e) {
  e === void 0 && (e = ga);
  let t = n.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: u,
      transformOrigin: c
    } = ee(n).getComputedStyle(n);
    u && (t = fa(t, u, c));
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
function an(n) {
  return tt(n, {
    ignoreTransform: !0
  });
}
function pa(n) {
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
function ma(n, e) {
  return e === void 0 && (e = ee(n).getComputedStyle(n)), e.position === "fixed";
}
function va(n, e) {
  e === void 0 && (e = ee(n).getComputedStyle(n));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((r) => {
    const s = e[r];
    return typeof s == "string" ? t.test(s) : !1;
  });
}
function ni(n, e) {
  const t = [];
  function i(r) {
    if (e != null && t.length >= e || !r)
      return t;
    if (Pi(r) && r.scrollingElement != null && !t.includes(r.scrollingElement))
      return t.push(r.scrollingElement), t;
    if (!xt(r) || tr(r) || t.includes(r))
      return t;
    const s = ee(n).getComputedStyle(r);
    return r !== n && va(r, s) && t.push(r), ma(r, s) ? t : i(r.parentNode);
  }
  return n ? i(n) : t;
}
function ar(n) {
  const [e] = ni(n, 1);
  return e ?? null;
}
function gi(n) {
  return !ei || !n ? null : Qe(n) ? n : zi(n) ? Pi(n) || n === et(n).scrollingElement ? window : xt(n) ? n : null : null;
}
function lr(n) {
  return Qe(n) ? n.scrollX : n.scrollLeft;
}
function cr(n) {
  return Qe(n) ? n.scrollY : n.scrollTop;
}
function bi(n) {
  return {
    x: lr(n),
    y: cr(n)
  };
}
var q;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(q || (q = {}));
function dr(n) {
  return !ei || !n ? !1 : n === document.scrollingElement;
}
function ur(n) {
  const e = {
    x: 0,
    y: 0
  }, t = dr(n) ? {
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
const ya = {
  x: 0.2,
  y: 0.2
};
function ba(n, e, t, i, r) {
  let {
    top: s,
    left: o,
    right: a,
    bottom: l
  } = t;
  i === void 0 && (i = 10), r === void 0 && (r = ya);
  const {
    isTop: u,
    isBottom: c,
    isLeft: d,
    isRight: h
  } = ur(n), f = {
    x: 0,
    y: 0
  }, x = {
    x: 0,
    y: 0
  }, v = {
    height: e.height * r.y,
    width: e.width * r.x
  };
  return !u && s <= e.top + v.height ? (f.y = q.Backward, x.y = i * Math.abs((e.top + v.height - s) / v.height)) : !c && l >= e.bottom - v.height && (f.y = q.Forward, x.y = i * Math.abs((e.bottom - v.height - l) / v.height)), !h && a >= e.right - v.width ? (f.x = q.Forward, x.x = i * Math.abs((e.right - v.width - a) / v.width)) : !d && o <= e.left + v.width && (f.x = q.Backward, x.x = i * Math.abs((e.left + v.width - o) / v.width)), {
    direction: f,
    speed: x
  };
}
function xa(n) {
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
function hr(n) {
  return n.reduce((e, t) => qe(e, bi(t)), pe);
}
function wa(n) {
  return n.reduce((e, t) => e + lr(t), 0);
}
function Ca(n) {
  return n.reduce((e, t) => e + cr(t), 0);
}
function fr(n, e) {
  if (e === void 0 && (e = tt), !n)
    return;
  const {
    top: t,
    left: i,
    bottom: r,
    right: s
  } = e(n);
  ar(n) && (r <= 0 || s <= 0 || t >= window.innerHeight || i >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const _a = [["x", ["left", "right"], wa], ["y", ["top", "bottom"], Ca]];
class Mi {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const i = ni(t), r = hr(i);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [s, o, a] of _a)
      for (const l of o)
        Object.defineProperty(this, l, {
          get: () => {
            const u = a(i), c = r[s] - u;
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
function Ea(n) {
  const {
    EventTarget: e
  } = ee(n);
  return n instanceof e ? n : et(n);
}
function pi(n, e) {
  const t = Math.abs(n.x), i = Math.abs(n.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + i ** 2) > e : "x" in e && "y" in e ? t > e.x && i > e.y : "x" in e ? t > e.x : "y" in e ? i > e.y : !1;
}
var he;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(he || (he = {}));
function ln(n) {
  n.preventDefault();
}
function Da(n) {
  n.stopPropagation();
}
var F;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter", n.Tab = "Tab";
})(F || (F = {}));
const gr = {
  start: [F.Space, F.Enter],
  cancel: [F.Esc],
  end: [F.Space, F.Enter, F.Tab]
}, Ra = (n, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (n.code) {
    case F.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case F.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case F.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case F.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class Li {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new dt(et(t)), this.windowListeners = new dt(ee(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(he.Resize, this.handleCancel), this.windowListeners.add(he.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(he.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, i = e.node.current;
    i && fr(i), t(pe);
  }
  handleKeyDown(e) {
    if (ii(e)) {
      const {
        active: t,
        context: i,
        options: r
      } = this.props, {
        keyboardCodes: s = gr,
        coordinateGetter: o = Ra,
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
        collisionRect: u
      } = i.current, c = u ? {
        x: u.left,
        y: u.top
      } : pe;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const d = o(e, {
        active: t,
        context: i.current,
        currentCoordinates: c
      });
      if (d) {
        const h = yt(d, c), f = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: x
        } = i.current;
        for (const v of x) {
          const w = e.code, {
            isTop: S,
            isRight: N,
            isLeft: C,
            isBottom: R,
            maxScroll: y,
            minScroll: b
          } = ur(v), D = xa(v), E = {
            x: Math.min(w === F.Right ? D.right - D.width / 2 : D.right, Math.max(w === F.Right ? D.left : D.left + D.width / 2, d.x)),
            y: Math.min(w === F.Down ? D.bottom - D.height / 2 : D.bottom, Math.max(w === F.Down ? D.top : D.top + D.height / 2, d.y))
          }, T = w === F.Right && !N || w === F.Left && !C, A = w === F.Down && !R || w === F.Up && !S;
          if (T && E.x !== d.x) {
            const m = v.scrollLeft + h.x, _ = w === F.Right && m <= y.x || w === F.Left && m >= b.x;
            if (_ && !h.y) {
              v.scrollTo({
                left: m,
                behavior: a
              });
              return;
            }
            _ ? f.x = v.scrollLeft - m : f.x = w === F.Right ? v.scrollLeft - y.x : v.scrollLeft - b.x, f.x && v.scrollBy({
              left: -f.x,
              behavior: a
            });
            break;
          } else if (A && E.y !== d.y) {
            const m = v.scrollTop + h.y, _ = w === F.Down && m <= y.y || w === F.Up && m >= b.y;
            if (_ && !h.x) {
              v.scrollTo({
                top: m,
                behavior: a
              });
              return;
            }
            _ ? f.y = v.scrollTop - m : f.y = w === F.Down ? v.scrollTop - y.y : v.scrollTop - b.y, f.y && v.scrollBy({
              top: -f.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(e, qe(yt(d, this.referenceCoordinates), f));
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
Li.activators = [{
  eventName: "onKeyDown",
  handler: (n, e, t) => {
    let {
      keyboardCodes: i = gr,
      onActivation: r
    } = e, {
      active: s
    } = t;
    const {
      code: o
    } = n.nativeEvent;
    if (i.start.includes(o)) {
      const a = s.activatorNode.current;
      return a && n.target !== a ? !1 : (n.preventDefault(), r == null || r({
        event: n.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function cn(n) {
  return !!(n && "distance" in n);
}
function dn(n) {
  return !!(n && "delay" in n);
}
class Ii {
  constructor(e, t, i) {
    var r;
    i === void 0 && (i = Ea(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: s
    } = e, {
      target: o
    } = s;
    this.props = e, this.events = t, this.document = et(o), this.documentListeners = new dt(this.document), this.listeners = new dt(i), this.windowListeners = new dt(ee(o)), this.initialCoordinates = (r = jt(s)) != null ? r : pe, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(he.Resize, this.handleCancel), this.windowListeners.add(he.DragStart, ln), this.windowListeners.add(he.VisibilityChange, this.handleCancel), this.windowListeners.add(he.ContextMenu, ln), this.documentListeners.add(he.Keydown, this.handleKeydown), t) {
      if (i != null && i({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (dn(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (cn(t)) {
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
    e && (this.activated = !0, this.documentListeners.add(he.Click, Da, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(he.SelectionChange, this.removeTextSelection), t(e));
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
    const l = (t = jt(e)) != null ? t : pe, u = yt(r, l);
    if (!i && a) {
      if (cn(a)) {
        if (a.tolerance != null && pi(u, a.tolerance))
          return this.handleCancel();
        if (pi(u, a.distance))
          return this.handleStart();
      }
      if (dn(a) && pi(u, a.tolerance))
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
    e.code === F.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Sa = {
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
class Hi extends Ii {
  constructor(e) {
    const {
      event: t
    } = e, i = et(t.target);
    super(e, Sa, i);
  }
}
Hi.activators = [{
  eventName: "onPointerDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: i
    } = e;
    return !t.isPrimary || t.button !== 0 ? !1 : (i == null || i({
      event: t
    }), !0);
  }
}];
const Na = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var xi;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(xi || (xi = {}));
class Oa extends Ii {
  constructor(e) {
    super(e, Na, et(e.event.target));
  }
}
Oa.activators = [{
  eventName: "onMouseDown",
  handler: (n, e) => {
    let {
      nativeEvent: t
    } = n, {
      onActivation: i
    } = e;
    return t.button === xi.RightClick ? !1 : (i == null || i({
      event: t
    }), !0);
  }
}];
const mi = {
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
class Aa extends Ii {
  constructor(e) {
    super(e, mi);
  }
  static setup() {
    return window.addEventListener(mi.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(mi.move.name, e);
    };
    function e() {
    }
  }
}
Aa.activators = [{
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
    return r.length > 1 ? !1 : (i == null || i({
      event: t
    }), !0);
  }
}];
var ut;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(ut || (ut = {}));
var Kt;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Kt || (Kt = {}));
function ka(n) {
  let {
    acceleration: e,
    activator: t = ut.Pointer,
    canScroll: i,
    draggingRect: r,
    enabled: s,
    interval: o = 5,
    order: a = Kt.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: u,
    scrollableAncestorRects: c,
    delta: d,
    threshold: h
  } = n;
  const f = za({
    delta: d,
    disabled: !s
  }), [x, v] = $o(), w = I({
    x: 0,
    y: 0
  }), S = I({
    x: 0,
    y: 0
  }), N = B(() => {
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
  }, [t, r, l]), C = I(null), R = K(() => {
    const b = C.current;
    if (!b)
      return;
    const D = w.current.x * S.current.x, E = w.current.y * S.current.y;
    b.scrollBy(D, E);
  }, []), y = B(() => a === Kt.TreeOrder ? [...u].reverse() : u, [a, u]);
  H(
    () => {
      if (!s || !u.length || !N) {
        v();
        return;
      }
      for (const b of y) {
        if ((i == null ? void 0 : i(b)) === !1)
          continue;
        const D = u.indexOf(b), E = c[D];
        if (!E)
          continue;
        const {
          direction: T,
          speed: A
        } = ba(b, E, N, e, h);
        for (const m of ["x", "y"])
          f[m][T[m]] || (A[m] = 0, T[m] = 0);
        if (A.x > 0 || A.y > 0) {
          v(), C.current = b, x(R, o), w.current = A, S.current = T;
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
      i,
      v,
      s,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f),
      x,
      u,
      y,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Ta = {
  x: {
    [q.Backward]: !1,
    [q.Forward]: !1
  },
  y: {
    [q.Backward]: !1,
    [q.Forward]: !1
  }
};
function za(n) {
  let {
    delta: e,
    disabled: t
  } = n;
  const i = $t(e);
  return wt((r) => {
    if (t || !i || !r)
      return Ta;
    const s = {
      x: Math.sign(e.x - i.x),
      y: Math.sign(e.y - i.y)
    };
    return {
      x: {
        [q.Backward]: r.x[q.Backward] || s.x === -1,
        [q.Forward]: r.x[q.Forward] || s.x === 1
      },
      y: {
        [q.Backward]: r.y[q.Backward] || s.y === -1,
        [q.Forward]: r.y[q.Forward] || s.y === 1
      }
    };
  }, [t, e, i]);
}
function Pa(n, e) {
  const t = e != null ? n.get(e) : void 0, i = t ? t.node.current : null;
  return wt((r) => {
    var s;
    return e == null ? null : (s = i ?? r) != null ? s : null;
  }, [i, e]);
}
function Ma(n, e) {
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
var bt;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(bt || (bt = {}));
var wi;
(function(n) {
  n.Optimized = "optimized";
})(wi || (wi = {}));
const un = /* @__PURE__ */ new Map();
function La(n, e) {
  let {
    dragging: t,
    dependencies: i,
    config: r
  } = e;
  const [s, o] = W(null), {
    frequency: a,
    measure: l,
    strategy: u
  } = r, c = I(n), d = w(), h = vt(d), f = K(function(S) {
    S === void 0 && (S = []), !h.current && o((N) => N === null ? S : N.concat(S.filter((C) => !N.includes(C))));
  }, [h]), x = I(null), v = wt((S) => {
    if (d && !t)
      return un;
    if (!S || S === un || c.current !== n || s != null) {
      const N = /* @__PURE__ */ new Map();
      for (let C of n) {
        if (!C)
          continue;
        if (s && s.length > 0 && !s.includes(C.id) && C.rect.current) {
          N.set(C.id, C.rect.current);
          continue;
        }
        const R = C.node.current, y = R ? new Mi(l(R), R) : null;
        C.rect.current = y, y && N.set(C.id, y);
      }
      return N;
    }
    return S;
  }, [n, s, t, d, l]);
  return H(() => {
    c.current = n;
  }, [n]), H(
    () => {
      d || f();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, d]
  ), H(
    () => {
      s && s.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), H(
    () => {
      d || typeof a != "number" || x.current !== null || (x.current = setTimeout(() => {
        f(), x.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, d, f, ...i]
  ), {
    droppableRects: v,
    measureDroppableContainers: f,
    measuringScheduled: s != null
  };
  function w() {
    switch (u) {
      case bt.Always:
        return !1;
      case bt.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function Bi(n, e) {
  return wt((t) => n ? t || (typeof e == "function" ? e(n) : n) : null, [e, n]);
}
function Ia(n, e) {
  return Bi(n, e);
}
function Ha(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const i = ti(e), r = B(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(i);
  }, [i, t]);
  return H(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function ri(n) {
  let {
    callback: e,
    disabled: t
  } = n;
  const i = ti(e), r = B(
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
  return H(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function Ba(n) {
  return new Mi(tt(n), n);
}
function hn(n, e, t) {
  e === void 0 && (e = Ba);
  const [i, r] = W(null);
  function s() {
    r((l) => {
      if (!n)
        return null;
      if (n.isConnected === !1) {
        var u;
        return (u = l ?? t) != null ? u : null;
      }
      const c = e(n);
      return JSON.stringify(l) === JSON.stringify(c) ? l : c;
    });
  }
  const o = Ha({
    callback(l) {
      if (n)
        for (const u of l) {
          const {
            type: c,
            target: d
          } = u;
          if (c === "childList" && d instanceof HTMLElement && d.contains(n)) {
            s();
            break;
          }
        }
    }
  }), a = ri({
    callback: s
  });
  return ge(() => {
    s(), n ? (a == null || a.observe(n), o == null || o.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a == null || a.disconnect(), o == null || o.disconnect());
  }, [n]), i;
}
function Fa(n) {
  const e = Bi(n);
  return sr(n, e);
}
const fn = [];
function Wa(n) {
  const e = I(n), t = wt((i) => n ? i && i !== fn && n && e.current && n.parentNode === e.current.parentNode ? i : ni(n) : fn, [n]);
  return H(() => {
    e.current = n;
  }, [n]), t;
}
function Ga(n) {
  const [e, t] = W(null), i = I(n), r = K((s) => {
    const o = gi(s.target);
    o && t((a) => a ? (a.set(o, bi(o)), new Map(a)) : null);
  }, []);
  return H(() => {
    const s = i.current;
    if (n !== s) {
      o(s);
      const a = n.map((l) => {
        const u = gi(l);
        return u ? (u.addEventListener("scroll", r, {
          passive: !0
        }), [u, bi(u)]) : null;
      }).filter((l) => l != null);
      t(a.length ? new Map(a) : null), i.current = n;
    }
    return () => {
      o(n), o(s);
    };
    function o(a) {
      a.forEach((l) => {
        const u = gi(l);
        u == null || u.removeEventListener("scroll", r);
      });
    }
  }, [r, n]), B(() => n.length ? e ? Array.from(e.values()).reduce((s, o) => qe(s, o), pe) : hr(n) : pe, [n, e]);
}
function gn(n, e) {
  e === void 0 && (e = []);
  const t = I(null);
  return H(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), H(() => {
    const i = n !== pe;
    i && !t.current && (t.current = n), !i && t.current && (t.current = null);
  }, [n]), t.current ? yt(n, t.current) : pe;
}
function $a(n) {
  H(
    () => {
      if (!ei)
        return;
      const e = n.map((t) => {
        let {
          sensor: i
        } = t;
        return i.setup == null ? void 0 : i.setup();
      });
      return () => {
        for (const t of e)
          t == null || t();
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
function ja(n, e) {
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
function pr(n) {
  return B(() => n ? pa(n) : null, [n]);
}
const pn = [];
function Ua(n, e) {
  e === void 0 && (e = tt);
  const [t] = n, i = pr(t ? ee(t) : null), [r, s] = W(pn);
  function o() {
    s(() => n.length ? n.map((l) => dr(l) ? i : new Mi(e(l), l)) : pn);
  }
  const a = ri({
    callback: o
  });
  return ge(() => {
    a == null || a.disconnect(), o(), n.forEach((l) => a == null ? void 0 : a.observe(l));
  }, [n]), r;
}
function mr(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const e = n.children[0];
  return xt(e) ? e : n;
}
function Ka(n) {
  let {
    measure: e
  } = n;
  const [t, i] = W(null), r = K((u) => {
    for (const {
      target: c
    } of u)
      if (xt(c)) {
        i((d) => {
          const h = e(c);
          return d ? {
            ...d,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [e]), s = ri({
    callback: r
  }), o = K((u) => {
    const c = mr(u);
    s == null || s.disconnect(), c && (s == null || s.observe(c)), i(c ? e(c) : null);
  }, [e, s]), [a, l] = Gt(o);
  return B(() => ({
    nodeRef: a,
    rect: t,
    setRef: l
  }), [t, a, l]);
}
const Xa = [{
  sensor: Hi,
  options: {}
}, {
  sensor: Li,
  options: {}
}], Ya = {
  current: {}
}, Pt = {
  draggable: {
    measure: an
  },
  droppable: {
    measure: an,
    strategy: bt.WhileDragging,
    frequency: wi.Optimized
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
const qa = {
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
    setRef: Ut
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Pt,
  measureDroppableContainers: Ut,
  windowRect: null,
  measuringScheduled: !1
}, vr = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Ut,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Ut
}, _t = /* @__PURE__ */ Ne(vr), yr = /* @__PURE__ */ Ne(qa);
function Va() {
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
function Ja(n, e) {
  switch (e.type) {
    case Y.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case Y.DragMove:
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
    case Y.DragEnd:
    case Y.DragCancel:
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
    case Y.RegisterDroppable: {
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
    case Y.SetDroppableDisabled: {
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
    case Y.UnregisterDroppable: {
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
function Za(n) {
  let {
    disabled: e
  } = n;
  const {
    active: t,
    activatorEvent: i,
    draggableNodes: r
  } = we(_t), s = $t(i), o = $t(t == null ? void 0 : t.id);
  return H(() => {
    if (!e && !i && s && o != null) {
      if (!ii(s) || document.activeElement === s.target)
        return;
      const a = r.get(o);
      if (!a)
        return;
      const {
        activatorNode: l,
        node: u
      } = a;
      if (!l.current && !u.current)
        return;
      requestAnimationFrame(() => {
        for (const c of [l.current, u.current]) {
          if (!c)
            continue;
          const d = Ko(c);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [i, e, r, o, s]), null;
}
function br(n, e) {
  let {
    transform: t,
    ...i
  } = e;
  return n != null && n.length ? n.reduce((r, s) => s({
    transform: r,
    ...i
  }), t) : t;
}
function Qa(n) {
  return B(
    () => ({
      draggable: {
        ...Pt.draggable,
        ...n == null ? void 0 : n.draggable
      },
      droppable: {
        ...Pt.droppable,
        ...n == null ? void 0 : n.droppable
      },
      dragOverlay: {
        ...Pt.dragOverlay,
        ...n == null ? void 0 : n.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n == null ? void 0 : n.draggable, n == null ? void 0 : n.droppable, n == null ? void 0 : n.dragOverlay]
  );
}
function el(n) {
  let {
    activeNode: e,
    measure: t,
    initialRect: i,
    config: r = !0
  } = n;
  const s = I(!1), {
    x: o,
    y: a
  } = typeof r == "boolean" ? {
    x: r,
    y: r
  } : r;
  ge(() => {
    if (!o && !a || !e) {
      s.current = !1;
      return;
    }
    if (s.current || !i)
      return;
    const u = e == null ? void 0 : e.node.current;
    if (!u || u.isConnected === !1)
      return;
    const c = t(u), d = sr(c, i);
    if (o || (d.x = 0), a || (d.y = 0), s.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const h = ar(u);
      h && h.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [e, o, a, i, t]);
}
const si = /* @__PURE__ */ Ne({
  ...pe,
  scaleX: 1,
  scaleY: 1
});
var Le;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(Le || (Le = {}));
const tl = /* @__PURE__ */ no(function(e) {
  var t, i, r, s;
  let {
    id: o,
    accessibility: a,
    autoScroll: l = !0,
    children: u,
    sensors: c = Xa,
    collisionDetection: d = ca,
    measuring: h,
    modifiers: f,
    ...x
  } = e;
  const v = ro(Ja, void 0, Va), [w, S] = v, [N, C] = Zo(), [R, y] = W(Le.Uninitialized), b = R === Le.Initialized, {
    draggable: {
      active: D,
      nodes: E,
      translate: T
    },
    droppable: {
      containers: A
    }
  } = w, m = D != null ? E.get(D) : null, _ = I({
    initial: null,
    translated: null
  }), O = B(() => {
    var Z;
    return D != null ? {
      id: D,
      // It's possible for the active node to unmount while dragging
      data: (Z = m == null ? void 0 : m.data) != null ? Z : Ya,
      rect: _
    } : null;
  }, [D, m]), P = I(null), [V, X] = W(null), [U, te] = W(null), G = vt(x, Object.values(x)), ne = Ct("DndDescribedBy", o), Dt = B(() => A.getEnabled(), [A]), ie = Qa(h), {
    droppableRects: Ce,
    measureDroppableContainers: Be,
    measuringScheduled: it
  } = La(Dt, {
    dragging: b,
    dependencies: [T.x, T.y],
    config: ie.droppable
  }), ce = Pa(E, D), Rt = B(() => U ? jt(U) : null, [U]), Oe = Fr(), _e = Ia(ce, ie.draggable.measure);
  el({
    activeNode: D != null ? E.get(D) : null,
    config: Oe.layoutShiftCompensation,
    initialRect: _e,
    measure: ie.draggable.measure
  });
  const $ = hn(ce, ie.draggable.measure, _e), nt = hn(ce ? ce.parentElement : null), ve = I({
    activatorEvent: null,
    active: null,
    activeNode: ce,
    collisionRect: null,
    collisions: null,
    droppableRects: Ce,
    draggableNodes: E,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: A,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), We = A.getNodeFor((t = ve.current.over) == null ? void 0 : t.id), Ee = Ka({
    measure: ie.dragOverlay.measure
  }), Ge = (i = Ee.nodeRef.current) != null ? i : ce, $e = b ? (r = Ee.rect) != null ? r : $ : null, Gi = !!(Ee.nodeRef.current && Ee.rect), $i = Fa(Gi ? null : $), ai = pr(Ge ? ee(Ge) : null), Ae = Wa(b ? We ?? ce : null), St = Ua(Ae), Nt = br(f, {
    transform: {
      x: T.x - $i.x,
      y: T.y - $i.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: U,
    active: O,
    activeNodeRect: $,
    containerNodeRect: nt,
    draggingNodeRect: $e,
    over: ve.current.over,
    overlayNodeRect: Ee.rect,
    scrollableAncestors: Ae,
    scrollableAncestorRects: St,
    windowRect: ai
  }), ji = Rt ? qe(Rt, T) : null, Ui = Ga(Ae), zr = gn(Ui), Pr = gn(Ui, [$]), je = qe(Nt, zr), Ue = $e ? ha($e, Nt) : null, rt = O && Ue ? d({
    active: O,
    collisionRect: Ue,
    droppableRects: Ce,
    droppableContainers: Dt,
    pointerCoordinates: ji
  }) : null, Ki = rr(rt, "id"), [ke, Xi] = W(null), Mr = Gi ? Nt : qe(Nt, Pr), Lr = da(Mr, (s = ke == null ? void 0 : ke.rect) != null ? s : null, $), li = I(null), Yi = K(
    (Z, re) => {
      let {
        sensor: se,
        options: Te
      } = re;
      if (P.current == null)
        return;
      const de = E.get(P.current);
      if (!de)
        return;
      const oe = Z.nativeEvent, ye = new se({
        active: P.current,
        activeNode: de,
        event: oe,
        options: Te,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ve,
        onAbort(J) {
          if (!E.get(J))
            return;
          const {
            onDragAbort: be
          } = G.current, De = {
            id: J
          };
          be == null || be(De), N({
            type: "onDragAbort",
            event: De
          });
        },
        onPending(J, ze, be, De) {
          if (!E.get(J))
            return;
          const {
            onDragPending: ot
          } = G.current, Pe = {
            id: J,
            constraint: ze,
            initialCoordinates: be,
            offset: De
          };
          ot == null || ot(Pe), N({
            type: "onDragPending",
            event: Pe
          });
        },
        onStart(J) {
          const ze = P.current;
          if (ze == null)
            return;
          const be = E.get(ze);
          if (!be)
            return;
          const {
            onDragStart: De
          } = G.current, st = {
            activatorEvent: oe,
            active: {
              id: ze,
              data: be.data,
              rect: _
            }
          };
          At(() => {
            De == null || De(st), y(Le.Initializing), S({
              type: Y.DragStart,
              initialCoordinates: J,
              active: ze
            }), N({
              type: "onDragStart",
              event: st
            }), X(li.current), te(oe);
          });
        },
        onMove(J) {
          S({
            type: Y.DragMove,
            coordinates: J
          });
        },
        onEnd: Ke(Y.DragEnd),
        onCancel: Ke(Y.DragCancel)
      });
      li.current = ye;
      function Ke(J) {
        return async function() {
          const {
            active: be,
            collisions: De,
            over: st,
            scrollAdjustedTranslate: ot
          } = ve.current;
          let Pe = null;
          if (be && ot) {
            const {
              cancelDrop: at
            } = G.current;
            Pe = {
              activatorEvent: oe,
              active: be,
              collisions: De,
              delta: ot,
              over: st
            }, J === Y.DragEnd && typeof at == "function" && await Promise.resolve(at(Pe)) && (J = Y.DragCancel);
          }
          P.current = null, At(() => {
            S({
              type: J
            }), y(Le.Uninitialized), Xi(null), X(null), te(null), li.current = null;
            const at = J === Y.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Pe) {
              const ci = G.current[at];
              ci == null || ci(Pe), N({
                type: at,
                event: Pe
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [E]
  ), Ir = K((Z, re) => (se, Te) => {
    const de = se.nativeEvent, oe = E.get(Te);
    if (
      // Another sensor is already instantiating
      P.current !== null || // No active draggable
      !oe || // Event has already been captured
      de.dndKit || de.defaultPrevented
    )
      return;
    const ye = {
      active: oe
    };
    Z(se, re.options, ye) === !0 && (de.dndKit = {
      capturedBy: re.sensor
    }, P.current = Te, Yi(se, re));
  }, [E, Yi]), qi = Ma(c, Ir);
  $a(c), ge(() => {
    $ && R === Le.Initializing && y(Le.Initialized);
  }, [$, R]), H(
    () => {
      const {
        onDragMove: Z
      } = G.current, {
        active: re,
        activatorEvent: se,
        collisions: Te,
        over: de
      } = ve.current;
      if (!re || !se)
        return;
      const oe = {
        active: re,
        activatorEvent: se,
        collisions: Te,
        delta: {
          x: je.x,
          y: je.y
        },
        over: de
      };
      At(() => {
        Z == null || Z(oe), N({
          type: "onDragMove",
          event: oe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [je.x, je.y]
  ), H(
    () => {
      const {
        active: Z,
        activatorEvent: re,
        collisions: se,
        droppableContainers: Te,
        scrollAdjustedTranslate: de
      } = ve.current;
      if (!Z || P.current == null || !re || !de)
        return;
      const {
        onDragOver: oe
      } = G.current, ye = Te.get(Ki), Ke = ye && ye.rect.current ? {
        id: ye.id,
        rect: ye.rect.current,
        data: ye.data,
        disabled: ye.disabled
      } : null, J = {
        active: Z,
        activatorEvent: re,
        collisions: se,
        delta: {
          x: de.x,
          y: de.y
        },
        over: Ke
      };
      At(() => {
        Xi(Ke), oe == null || oe(J), N({
          type: "onDragOver",
          event: J
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ki]
  ), ge(() => {
    ve.current = {
      activatorEvent: U,
      active: O,
      activeNode: ce,
      collisionRect: Ue,
      collisions: rt,
      droppableRects: Ce,
      draggableNodes: E,
      draggingNode: Ge,
      draggingNodeRect: $e,
      droppableContainers: A,
      over: ke,
      scrollableAncestors: Ae,
      scrollAdjustedTranslate: je
    }, _.current = {
      initial: $e,
      translated: Ue
    };
  }, [O, ce, rt, Ue, E, Ge, $e, Ce, A, ke, Ae, je]), ka({
    ...Oe,
    delta: T,
    draggingRect: Ue,
    pointerCoordinates: ji,
    scrollableAncestors: Ae,
    scrollableAncestorRects: St
  });
  const Hr = B(() => ({
    active: O,
    activeNode: ce,
    activeNodeRect: $,
    activatorEvent: U,
    collisions: rt,
    containerNodeRect: nt,
    dragOverlay: Ee,
    draggableNodes: E,
    droppableContainers: A,
    droppableRects: Ce,
    over: ke,
    measureDroppableContainers: Be,
    scrollableAncestors: Ae,
    scrollableAncestorRects: St,
    measuringConfiguration: ie,
    measuringScheduled: it,
    windowRect: ai
  }), [O, ce, $, U, rt, nt, Ee, E, A, Ce, ke, Be, Ae, St, ie, it, ai]), Br = B(() => ({
    activatorEvent: U,
    activators: qi,
    active: O,
    activeNodeRect: $,
    ariaDescribedById: {
      draggable: ne
    },
    dispatch: S,
    draggableNodes: E,
    over: ke,
    measureDroppableContainers: Be
  }), [U, qi, O, $, S, ne, E, ke, Be]);
  return L.createElement(nr.Provider, {
    value: C
  }, L.createElement(_t.Provider, {
    value: Br
  }, L.createElement(yr.Provider, {
    value: Hr
  }, L.createElement(si.Provider, {
    value: Lr
  }, u)), L.createElement(Za, {
    disabled: (a == null ? void 0 : a.restoreFocus) === !1
  })), L.createElement(ta, {
    ...a,
    hiddenTextDescribedById: ne
  }));
  function Fr() {
    const Z = (V == null ? void 0 : V.autoScrollEnabled) === !1, re = typeof l == "object" ? l.enabled === !1 : l === !1, se = b && !Z && !re;
    return typeof l == "object" ? {
      ...l,
      enabled: se
    } : {
      enabled: se
    };
  }
}), il = /* @__PURE__ */ Ne(null), mn = "button", nl = "Draggable";
function rl(n) {
  let {
    id: e,
    data: t,
    disabled: i = !1,
    attributes: r
  } = n;
  const s = Ct(nl), {
    activators: o,
    activatorEvent: a,
    active: l,
    activeNodeRect: u,
    ariaDescribedById: c,
    draggableNodes: d,
    over: h
  } = we(_t), {
    role: f = mn,
    roleDescription: x = "draggable",
    tabIndex: v = 0
  } = r ?? {}, w = (l == null ? void 0 : l.id) === e, S = we(w ? si : il), [N, C] = Gt(), [R, y] = Gt(), b = ja(o, e), D = vt(t);
  ge(
    () => (d.set(e, {
      id: e,
      key: s,
      node: N,
      activatorNode: R,
      data: D
    }), () => {
      const T = d.get(e);
      T && T.key === s && d.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, e]
  );
  const E = B(() => ({
    role: f,
    tabIndex: v,
    "aria-disabled": i,
    "aria-pressed": w && f === mn ? !0 : void 0,
    "aria-roledescription": x,
    "aria-describedby": c.draggable
  }), [i, f, v, w, x, c.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: u,
    attributes: E,
    isDragging: w,
    listeners: i ? void 0 : b,
    node: N,
    over: h,
    setNodeRef: C,
    setActivatorNodeRef: y,
    transform: S
  };
}
function xr() {
  return we(yr);
}
const sl = "Droppable", ol = {
  timeout: 25
};
function al(n) {
  let {
    data: e,
    disabled: t = !1,
    id: i,
    resizeObserverConfig: r
  } = n;
  const s = Ct(sl), {
    active: o,
    dispatch: a,
    over: l,
    measureDroppableContainers: u
  } = we(_t), c = I({
    disabled: t
  }), d = I(!1), h = I(null), f = I(null), {
    disabled: x,
    updateMeasurementsFor: v,
    timeout: w
  } = {
    ...ol,
    ...r
  }, S = vt(v ?? i), N = K(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      f.current != null && clearTimeout(f.current), f.current = setTimeout(() => {
        u(Array.isArray(S.current) ? S.current : [S.current]), f.current = null;
      }, w);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [w]
  ), C = ri({
    callback: N,
    disabled: x || !o
  }), R = K((E, T) => {
    C && (T && (C.unobserve(T), d.current = !1), E && C.observe(E));
  }, [C]), [y, b] = Gt(R), D = vt(e);
  return H(() => {
    !C || !y.current || (C.disconnect(), d.current = !1, C.observe(y.current));
  }, [y, C]), H(
    () => (a({
      type: Y.RegisterDroppable,
      element: {
        id: i,
        key: s,
        disabled: t,
        node: y,
        rect: h,
        data: D
      }
    }), () => a({
      type: Y.UnregisterDroppable,
      key: s,
      id: i
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i]
  ), H(() => {
    t !== c.current.disabled && (a({
      type: Y.SetDroppableDisabled,
      id: i,
      key: s,
      disabled: t
    }), c.current.disabled = t);
  }, [i, s, t, a]), {
    active: o,
    rect: h,
    isOver: (l == null ? void 0 : l.id) === i,
    node: y,
    over: l,
    setNodeRef: b
  };
}
function ll(n) {
  let {
    animation: e,
    children: t
  } = n;
  const [i, r] = W(null), [s, o] = W(null), a = $t(t);
  return !t && !i && a && r(a), ge(() => {
    if (!s)
      return;
    const l = i == null ? void 0 : i.key, u = i == null ? void 0 : i.props.id;
    if (l == null || u == null) {
      r(null);
      return;
    }
    Promise.resolve(e(u, s)).then(() => {
      r(null);
    });
  }, [e, i, s]), L.createElement(L.Fragment, null, t, i ? so(i, {
    ref: o
  }) : null);
}
const cl = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function dl(n) {
  let {
    children: e
  } = n;
  return L.createElement(_t.Provider, {
    value: vr
  }, L.createElement(si.Provider, {
    value: cl
  }, e));
}
const ul = {
  position: "fixed",
  touchAction: "none"
}, hl = (n) => ii(n) ? "transform 250ms ease" : void 0, fl = /* @__PURE__ */ le((n, e) => {
  let {
    as: t,
    activatorEvent: i,
    adjustScale: r,
    children: s,
    className: o,
    rect: a,
    style: l,
    transform: u,
    transition: c = hl
  } = n;
  if (!a)
    return null;
  const d = r ? u : {
    ...u,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...ul,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: He.Transform.toString(d),
    transformOrigin: r && i ? ra(i, a) : void 0,
    transition: typeof c == "function" ? c(i) : c,
    ...l
  };
  return L.createElement(t, {
    className: o,
    style: h,
    ref: e
  }, s);
}), gl = (n) => (e) => {
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
    for (const [l, u] of Object.entries(r))
      t.node.style.setProperty(l, u);
    o != null && o.active && t.node.classList.remove(o.active);
  };
}, pl = (n) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = n;
  return [{
    transform: He.Transform.toString(e)
  }, {
    transform: He.Transform.toString(t)
  }];
}, ml = {
  duration: 250,
  easing: "ease",
  keyframes: pl,
  sideEffects: /* @__PURE__ */ gl({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function vl(n) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: i,
    measuringConfiguration: r
  } = n;
  return ti((s, o) => {
    if (e === null)
      return;
    const a = t.get(s);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const u = mr(o);
    if (!u)
      return;
    const {
      transform: c
    } = ee(o).getComputedStyle(o), d = or(c);
    if (!d)
      return;
    const h = typeof e == "function" ? e : yl(e);
    return fr(l, r.draggable.measure), h({
      active: {
        id: s,
        data: a.data,
        node: l,
        rect: r.draggable.measure(l)
      },
      draggableNodes: t,
      dragOverlay: {
        node: o,
        rect: r.dragOverlay.measure(u)
      },
      droppableContainers: i,
      measuringConfiguration: r,
      transform: d
    });
  });
}
function yl(n) {
  const {
    duration: e,
    easing: t,
    sideEffects: i,
    keyframes: r
  } = {
    ...ml,
    ...n
  };
  return (s) => {
    let {
      active: o,
      dragOverlay: a,
      transform: l,
      ...u
    } = s;
    if (!e)
      return;
    const c = {
      x: a.rect.left - o.rect.left,
      y: a.rect.top - o.rect.top
    }, d = {
      scaleX: l.scaleX !== 1 ? o.rect.width * l.scaleX / a.rect.width : 1,
      scaleY: l.scaleY !== 1 ? o.rect.height * l.scaleY / a.rect.height : 1
    }, h = {
      x: l.x - c.x,
      y: l.y - c.y,
      ...d
    }, f = r({
      ...u,
      active: o,
      dragOverlay: a,
      transform: {
        initial: l,
        final: h
      }
    }), [x] = f, v = f[f.length - 1];
    if (JSON.stringify(x) === JSON.stringify(v))
      return;
    const w = i == null ? void 0 : i({
      active: o,
      dragOverlay: a,
      ...u
    }), S = a.node.animate(f, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((N) => {
      S.onfinish = () => {
        w == null || w(), N();
      };
    });
  };
}
let vn = 0;
function bl(n) {
  return B(() => {
    if (n != null)
      return vn++, vn;
  }, [n]);
}
const xl = /* @__PURE__ */ L.memo((n) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: i,
    style: r,
    transition: s,
    modifiers: o,
    wrapperElement: a = "div",
    className: l,
    zIndex: u = 999
  } = n;
  const {
    activatorEvent: c,
    active: d,
    activeNodeRect: h,
    containerNodeRect: f,
    draggableNodes: x,
    droppableContainers: v,
    dragOverlay: w,
    over: S,
    measuringConfiguration: N,
    scrollableAncestors: C,
    scrollableAncestorRects: R,
    windowRect: y
  } = xr(), b = we(si), D = bl(d == null ? void 0 : d.id), E = br(o, {
    activatorEvent: c,
    active: d,
    activeNodeRect: h,
    containerNodeRect: f,
    draggingNodeRect: w.rect,
    over: S,
    overlayNodeRect: w.rect,
    scrollableAncestors: C,
    scrollableAncestorRects: R,
    transform: b,
    windowRect: y
  }), T = Bi(h), A = vl({
    config: i,
    draggableNodes: x,
    droppableContainers: v,
    measuringConfiguration: N
  }), m = T ? w.setRef : void 0;
  return L.createElement(dl, null, L.createElement(ll, {
    animation: A
  }, d && D ? L.createElement(fl, {
    key: D,
    id: d.id,
    ref: m,
    as: a,
    activatorEvent: c,
    adjustScale: e,
    className: l,
    transition: s,
    rect: T,
    style: {
      zIndex: u,
      ...r
    },
    transform: E
  }, t) : null));
});
function Fi(n, e, t) {
  const i = n.slice();
  return i.splice(t < 0 ? i.length + t : t, 0, i.splice(e, 1)[0]), i;
}
function wl(n, e) {
  return n.reduce((t, i, r) => {
    const s = e.get(i);
    return s && (t[r] = s), t;
  }, Array(n.length));
}
function Tt(n) {
  return n !== null && n >= 0;
}
function Cl(n, e) {
  if (n === e)
    return !0;
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function _l(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const wr = (n) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: i,
    index: r
  } = n;
  const s = Fi(e, i, t), o = e[r], a = s[r];
  return !a || !o ? null : {
    x: a.left - o.left,
    y: a.top - o.top,
    scaleX: a.width / o.width,
    scaleY: a.height / o.height
  };
}, Cr = "Sortable", _r = /* @__PURE__ */ L.createContext({
  activeIndex: -1,
  containerId: Cr,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: wr,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function El(n) {
  let {
    children: e,
    id: t,
    items: i,
    strategy: r = wr,
    disabled: s = !1
  } = n;
  const {
    active: o,
    dragOverlay: a,
    droppableRects: l,
    over: u,
    measureDroppableContainers: c
  } = xr(), d = Ct(Cr, t), h = a.rect !== null, f = B(() => i.map((b) => typeof b == "object" && "id" in b ? b.id : b), [i]), x = o != null, v = o ? f.indexOf(o.id) : -1, w = u ? f.indexOf(u.id) : -1, S = I(f), N = !Cl(f, S.current), C = w !== -1 && v === -1 || N, R = _l(s);
  ge(() => {
    N && x && c(f);
  }, [N, f, x, c]), H(() => {
    S.current = f;
  }, [f]);
  const y = B(
    () => ({
      activeIndex: v,
      containerId: d,
      disabled: R,
      disableTransforms: C,
      items: f,
      overIndex: w,
      useDragOverlay: h,
      sortedRects: wl(f, l),
      strategy: r
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, d, R.draggable, R.droppable, C, f, w, l, h, r]
  );
  return L.createElement(_r.Provider, {
    value: y
  }, e);
}
const Dl = (n) => {
  let {
    id: e,
    items: t,
    activeIndex: i,
    overIndex: r
  } = n;
  return Fi(t, i, r).indexOf(e);
}, Rl = (n) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: i,
    index: r,
    items: s,
    newIndex: o,
    previousItems: a,
    previousContainerId: l,
    transition: u
  } = n;
  return !u || !i || a !== s && r === o ? !1 : t ? !0 : o !== r && e === l;
}, Sl = {
  duration: 200,
  easing: "ease"
}, Er = "transform", Nl = /* @__PURE__ */ He.Transition.toString({
  property: Er,
  duration: 0,
  easing: "linear"
}), Ol = {
  roleDescription: "sortable"
};
function Al(n) {
  let {
    disabled: e,
    index: t,
    node: i,
    rect: r
  } = n;
  const [s, o] = W(null), a = I(t);
  return ge(() => {
    if (!e && t !== a.current && i.current) {
      const l = r.current;
      if (l) {
        const u = tt(i.current, {
          ignoreTransform: !0
        }), c = {
          x: l.left - u.left,
          y: l.top - u.top,
          scaleX: l.width / u.width,
          scaleY: l.height / u.height
        };
        (c.x || c.y) && o(c);
      }
    }
    t !== a.current && (a.current = t);
  }, [e, t, i, r]), H(() => {
    s && o(null);
  }, [s]), s;
}
function kl(n) {
  let {
    animateLayoutChanges: e = Rl,
    attributes: t,
    disabled: i,
    data: r,
    getNewIndex: s = Dl,
    id: o,
    strategy: a,
    resizeObserverConfig: l,
    transition: u = Sl
  } = n;
  const {
    items: c,
    containerId: d,
    activeIndex: h,
    disabled: f,
    disableTransforms: x,
    sortedRects: v,
    overIndex: w,
    useDragOverlay: S,
    strategy: N
  } = we(_r), C = Tl(i, f), R = c.indexOf(o), y = B(() => ({
    sortable: {
      containerId: d,
      index: R,
      items: c
    },
    ...r
  }), [d, r, R, c]), b = B(() => c.slice(c.indexOf(o)), [c, o]), {
    rect: D,
    node: E,
    isOver: T,
    setNodeRef: A
  } = al({
    id: o,
    data: y,
    disabled: C.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: b,
      ...l
    }
  }), {
    active: m,
    activatorEvent: _,
    activeNodeRect: O,
    attributes: P,
    setNodeRef: V,
    listeners: X,
    isDragging: U,
    over: te,
    setActivatorNodeRef: G,
    transform: ne
  } = rl({
    id: o,
    data: y,
    attributes: {
      ...Ol,
      ...t
    },
    disabled: C.draggable
  }), Dt = Go(A, V), ie = !!m, Ce = ie && !x && Tt(h) && Tt(w), Be = !S && U, it = Be && Ce ? ne : null, Rt = Ce ? it ?? (a ?? N)({
    rects: v,
    activeNodeRect: O,
    activeIndex: h,
    overIndex: w,
    index: R
  }) : null, Oe = Tt(h) && Tt(w) ? s({
    id: o,
    items: c,
    activeIndex: h,
    overIndex: w
  }) : R, _e = m == null ? void 0 : m.id, $ = I({
    activeId: _e,
    items: c,
    newIndex: Oe,
    containerId: d
  }), nt = c !== $.current.items, ve = e({
    active: m,
    containerId: d,
    isDragging: U,
    isSorting: ie,
    id: o,
    index: R,
    items: c,
    newIndex: $.current.newIndex,
    previousItems: $.current.items,
    previousContainerId: $.current.containerId,
    transition: u,
    wasDragging: $.current.activeId != null
  }), We = Al({
    disabled: !ve,
    index: R,
    node: E,
    rect: D
  });
  return H(() => {
    ie && $.current.newIndex !== Oe && ($.current.newIndex = Oe), d !== $.current.containerId && ($.current.containerId = d), c !== $.current.items && ($.current.items = c);
  }, [ie, Oe, d, c]), H(() => {
    if (_e === $.current.activeId)
      return;
    if (_e != null && $.current.activeId == null) {
      $.current.activeId = _e;
      return;
    }
    const Ge = setTimeout(() => {
      $.current.activeId = _e;
    }, 50);
    return () => clearTimeout(Ge);
  }, [_e]), {
    active: m,
    activeIndex: h,
    attributes: P,
    data: y,
    rect: D,
    index: R,
    newIndex: Oe,
    items: c,
    isOver: T,
    isSorting: ie,
    isDragging: U,
    listeners: X,
    node: E,
    overIndex: w,
    over: te,
    setNodeRef: Dt,
    setActivatorNodeRef: G,
    setDroppableNodeRef: A,
    setDraggableNodeRef: V,
    transform: We ?? Rt,
    transition: Ee()
  };
  function Ee() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      We || // Or to prevent items jumping to back to their "new" position when items change
      nt && $.current.newIndex === R
    )
      return Nl;
    if (!(Be && !ii(_) || !u) && (ie || ve))
      return He.Transition.toString({
        ...u,
        property: Er
      });
  }
}
function Tl(n, e) {
  var t, i;
  return typeof n == "boolean" ? {
    draggable: n,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (t = n == null ? void 0 : n.draggable) != null ? t : e.draggable,
    droppable: (i = n == null ? void 0 : n.droppable) != null ? i : e.droppable
  };
}
function Xt(n) {
  if (!n)
    return !1;
  const e = n.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const zl = [F.Down, F.Right, F.Up, F.Left], Pl = (n, e) => {
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
  if (zl.includes(n.code)) {
    if (n.preventDefault(), !t || !i)
      return;
    const l = [];
    s.getEnabled().forEach((d) => {
      if (!d || d != null && d.disabled)
        return;
      const h = r.get(d.id);
      if (h)
        switch (n.code) {
          case F.Down:
            i.top < h.top && l.push(d);
            break;
          case F.Up:
            i.top > h.top && l.push(d);
            break;
          case F.Left:
            i.left > h.left && l.push(d);
            break;
          case F.Right:
            i.left < h.left && l.push(d);
            break;
        }
    });
    const u = aa({
      collisionRect: i,
      droppableRects: r,
      droppableContainers: l
    });
    let c = rr(u, "id");
    if (c === (o == null ? void 0 : o.id) && u.length > 1 && (c = u[1].id), c != null) {
      const d = s.get(t.id), h = s.get(c), f = h ? r.get(h.id) : null, x = h == null ? void 0 : h.node.current;
      if (x && f && d && h) {
        const w = ni(x).some((b, D) => a[D] !== b), S = Dr(d, h), N = Ml(d, h), C = w || !S ? {
          x: 0,
          y: 0
        } : {
          x: N ? i.width - f.width : 0,
          y: N ? i.height - f.height : 0
        }, R = {
          x: f.left,
          y: f.top
        };
        return C.x && C.y ? R : yt(R, C);
      }
    }
  }
};
function Dr(n, e) {
  return !Xt(n) || !Xt(e) ? !1 : n.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function Ml(n, e) {
  return !Xt(n) || !Xt(e) || !Dr(n, e) ? !1 : n.data.current.sortable.index < e.data.current.sortable.index;
}
const yn = ({ id: n, children: e }) => {
  const { attributes: t, listeners: i, setNodeRef: r, transform: s, transition: o } = kl({
    id: n
  }), a = {
    transform: He.Translate.toString(s),
    transition: o,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return g("div", {
    ref: r,
    style: a,
    ...t,
    ...i,
    children: e
  });
}, Wi = ({ blocks: n, sortable: e = !1, onSort: t = () => {
}, main: i = !1 }) => {
  var d;
  const [r, s] = W([]);
  _n(() => {
    s(n.map((h, f) => ({
      id: h.id ?? f.toString(),
      render: h.render
    })));
  }, [n]);
  const [o, a] = W(null), l = ia(sn(Hi), sn(Li, {
    coordinateGetter: Pl
  })), u = (h) => {
    a(h.active.id);
  }, c = (h) => {
    const { active: f, over: x } = h;
    a(null), x && f.id !== x.id && s((v) => {
      const w = v.findIndex((N) => N.id === f.id), S = v.findIndex((N) => N.id === x.id);
      return Fi(v, w, S);
    });
  };
  return g("div", {
    className: j("flex flex-wrap items-stretch gap-4", i && "flex-1"),
    children: M(tl, {
      sensors: l,
      onDragStart: u,
      onDragEnd: c,
      children: [g(El, {
        items: r,
        children: r.map((h) => g(yn, {
          id: h.id,
          children: h.render
        }, h.id))
      }), g(xl, {
        children: o ? g(yn, {
          id: o,
          children: (d = r.find((h) => h.id === o)) == null ? void 0 : d.render
        }) : null
      })]
    })
  });
};
Wi.displayName = "GroupMasonry";
Wi.__isPageLayoutGroup = !0;
const Ll = le(function({ children: e, aside: t, header: i, variant: r = "main-aside" }, s) {
  return process.env.NODE_ENV === "development" && er("Page", e, ["block", "group"]), g("div", {
    ref: s,
    className: "h-full",
    children: M("div", {
      className: j("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [M("main", {
        className: j("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", r === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [i && g("header", {
          className: j("sticky top-0 z-30 bg-f1-background"),
          children: i
        }), g("div", {
          className: "flex-1",
          children: e
        })]
      }), t && g("aside", {
        className: j("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", r === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), _c = {
  Page: Re("Page", Ll),
  Block: Re("Block", Qt),
  BlockContent: Re("BlockContent", Bo),
  Group: Re("Group", Ti),
  GroupGrid: Re("GroupGrid", Zt),
  GroupMasonry: Re("GroupMasonry", Wi)
}, Ec = me({
  name: "StandardLayout",
  type: "layout"
}, jn), Dc = me({
  name: "TwoColumnLayout",
  type: "layout"
}, co), Rc = me({
  name: "HomeLayout",
  type: "layout"
}, lo);
function Je(n) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Je(n);
}
function Il(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Hl(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, Nr(i.key), i);
  }
}
function Bl(n, e, t) {
  return e && Hl(n.prototype, e), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Fl(n, e, t) {
  return e = Yt(e), Wl(n, Rr() ? Reflect.construct(e, t || [], Yt(n).constructor) : e.apply(n, t));
}
function Wl(n, e) {
  if (e && (Je(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gl(n);
}
function Gl(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Rr() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Rr = function() {
    return !!n;
  })();
}
function Yt(n) {
  return Yt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Yt(n);
}
function $l(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Ci(n, e);
}
function Ci(n, e) {
  return Ci = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, r) {
    return i.__proto__ = r, i;
  }, Ci(n, e);
}
function Sr(n, e, t) {
  return e = Nr(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Nr(n) {
  var e = jl(n, "string");
  return Je(e) == "symbol" ? e : e + "";
}
function jl(n, e) {
  if (Je(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (Je(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var oi = /* @__PURE__ */ function(n) {
  function e() {
    return Il(this, e), Fl(this, e, arguments);
  }
  return $l(e, n), Bl(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(L.Component);
Sr(oi, "displayName", "ZAxis");
Sr(oi, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Ul = ["option", "isActive"];
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
function Kl(n, e) {
  if (n == null) return {};
  var t = Xl(n, e), i, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (r = 0; r < s.length; r++)
      i = s[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (t[i] = n[i]);
  }
  return t;
}
function Xl(n, e) {
  if (n == null) return {};
  var t = {};
  for (var i in n)
    if (Object.prototype.hasOwnProperty.call(n, i)) {
      if (e.indexOf(i) >= 0) continue;
      t[i] = n[i];
    }
  return t;
}
function Yl(n) {
  var e = n.option, t = n.isActive, i = Kl(n, Ul);
  return typeof e == "string" ? /* @__PURE__ */ L.createElement(Vi, ft({
    option: /* @__PURE__ */ L.createElement(Jr, ft({
      type: e
    }, i)),
    isActive: t,
    shapeType: "symbols"
  }, i)) : /* @__PURE__ */ L.createElement(Vi, ft({
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
function bn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function ue(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bn(Object(t), !0).forEach(function(i) {
      Ie(n, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : bn(Object(t)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return n;
}
function ql(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xn(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, Ar(i.key), i);
  }
}
function Vl(n, e, t) {
  return e && xn(n.prototype, e), t && xn(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Jl(n, e, t) {
  return e = qt(e), Zl(n, Or() ? Reflect.construct(e, t || [], qt(n).constructor) : e.apply(n, t));
}
function Zl(n, e) {
  if (e && (Ze(e) === "object" || typeof e == "function"))
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
function Or() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Or = function() {
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
function Ie(n, e, t) {
  return e = Ar(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Ar(n) {
  var e = tc(n, "string");
  return Ze(e) == "symbol" ? e : e + "";
}
function tc(n, e) {
  if (Ze(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (Ze(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var Et = /* @__PURE__ */ function(n) {
  function e() {
    var t;
    ql(this, e);
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s];
    return t = Jl(this, e, [].concat(r)), Ie(t, "state", {
      isAnimationFinished: !1
    }), Ie(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), Ie(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), Ie(t, "id", ss("recharts-scatter-")), t;
  }
  return ec(e, n), Vl(e, [{
    key: "renderSymbolsStatically",
    value: function(i) {
      var r = this, s = this.props, o = s.shape, a = s.activeShape, l = s.activeIndex, u = di(this.props, !1);
      return i.map(function(c, d) {
        var h = l === d, f = h ? a : o, x = ue(ue({}, u), c);
        return /* @__PURE__ */ L.createElement(lt, gt({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c == null ? void 0 : c.cx, "-").concat(c == null ? void 0 : c.cy, "-").concat(c == null ? void 0 : c.size, "-").concat(d)
        }, Zr(r.props, c, d), {
          role: "img"
        }), /* @__PURE__ */ L.createElement(Yl, gt({
          option: f,
          isActive: h,
          key: "symbol-".concat(d)
        }, x)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var i = this, r = this.props, s = r.points, o = r.isAnimationActive, a = r.animationBegin, l = r.animationDuration, u = r.animationEasing, c = r.animationId, d = this.state.prevPoints;
      return /* @__PURE__ */ L.createElement(Qr, {
        begin: a,
        duration: l,
        isActive: o,
        easing: u,
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
        var f = h.t, x = s.map(function(v, w) {
          var S = d && d[w];
          if (S) {
            var N = Ot(S.cx, v.cx), C = Ot(S.cy, v.cy), R = Ot(S.size, v.size);
            return ue(ue({}, v), {}, {
              cx: N(f),
              cy: C(f),
              size: R(f)
            });
          }
          var y = Ot(0, v.size);
          return ue(ue({}, v), {}, {
            size: y(f)
          });
        });
        return /* @__PURE__ */ L.createElement(lt, null, i.renderSymbolsStatically(x));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var i = this.props, r = i.points, s = i.isAnimationActive, o = this.state.prevPoints;
      return s && r && r.length && (!o || !En(o, r)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(r);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var r = this.props, s = r.points, o = r.xAxis, a = r.yAxis, l = r.children, u = Rn(l, es);
      return u ? u.map(function(c, d) {
        var h = c.props, f = h.direction, x = h.dataKey;
        return /* @__PURE__ */ L.cloneElement(c, {
          key: "".concat(f, "-").concat(x, "-").concat(s[d]),
          data: s,
          xAxis: o,
          yAxis: a,
          layout: f === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(w, S) {
            return {
              x: w.cx,
              y: w.cy,
              value: f === "x" ? +w.node.x : +w.node.y,
              errorVal: zt(w, S)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var i = this.props, r = i.points, s = i.line, o = i.lineType, a = i.lineJointType, l = di(this.props, !1), u = di(s, !1), c, d;
      if (o === "joint")
        c = r.map(function(C) {
          return {
            x: C.cx,
            y: C.cy
          };
        });
      else if (o === "fitting") {
        var h = ts(r), f = h.xmin, x = h.xmax, v = h.a, w = h.b, S = function(R) {
          return v * R + w;
        };
        c = [{
          x: f,
          y: S(f)
        }, {
          x,
          y: S(x)
        }];
      }
      var N = ue(ue(ue({}, l), {}, {
        fill: "none",
        stroke: l && l.fill
      }, u), {}, {
        points: c
      });
      return /* @__PURE__ */ L.isValidElement(s) ? d = /* @__PURE__ */ L.cloneElement(s, N) : is(s) ? d = s(N) : d = /* @__PURE__ */ L.createElement(ns, gt({}, N, {
        type: a
      })), /* @__PURE__ */ L.createElement(lt, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, d);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, r = i.hide, s = i.points, o = i.line, a = i.className, l = i.xAxis, u = i.yAxis, c = i.left, d = i.top, h = i.width, f = i.height, x = i.id, v = i.isAnimationActive;
      if (r || !s || !s.length)
        return null;
      var w = this.state.isAnimationFinished, S = rs("recharts-scatter", a), N = l && l.allowDataOverflow, C = u && u.allowDataOverflow, R = N || C, y = Xe(x) ? this.id : x;
      return /* @__PURE__ */ L.createElement(lt, {
        className: S,
        clipPath: R ? "url(#clipPath-".concat(y, ")") : null
      }, N || C ? /* @__PURE__ */ L.createElement("defs", null, /* @__PURE__ */ L.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ L.createElement("rect", {
        x: N ? c : c - h / 2,
        y: C ? d : d - f / 2,
        width: N ? h : h * 2,
        height: C ? f : f * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ L.createElement(lt, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || w) && Sn.renderCallByParent(this.props, s));
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
}(oo);
Ie(Et, "displayName", "Scatter");
Ie(Et, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !os.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Ie(Et, "getComposedData", function(n) {
  var e = n.xAxis, t = n.yAxis, i = n.zAxis, r = n.item, s = n.displayedData, o = n.xAxisTicks, a = n.yAxisTicks, l = n.offset, u = r.props.tooltipType, c = Rn(r.props.children, as), d = Xe(e.dataKey) ? r.props.dataKey : e.dataKey, h = Xe(t.dataKey) ? r.props.dataKey : t.dataKey, f = i && i.dataKey, x = i ? i.range : oi.defaultProps.range, v = x && x[0], w = e.scale.bandwidth ? e.scale.bandwidth() : 0, S = t.scale.bandwidth ? t.scale.bandwidth() : 0, N = s.map(function(C, R) {
    var y = zt(C, d), b = zt(C, h), D = !Xe(f) && zt(C, f) || "-", E = [{
      name: Xe(e.dataKey) ? r.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: y,
      payload: C,
      dataKey: d,
      type: u
    }, {
      name: Xe(t.dataKey) ? r.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: b,
      payload: C,
      dataKey: h,
      type: u
    }];
    D !== "-" && E.push({
      name: i.name || i.dataKey,
      unit: i.unit || "",
      value: D,
      payload: C,
      dataKey: f,
      type: u
    });
    var T = Ji({
      axis: e,
      ticks: o,
      bandSize: w,
      entry: C,
      index: R,
      dataKey: d
    }), A = Ji({
      axis: t,
      ticks: a,
      bandSize: S,
      entry: C,
      index: R,
      dataKey: h
    }), m = D !== "-" ? i.scale(D) : v, _ = Math.sqrt(Math.max(m, 0) / Math.PI);
    return ue(ue({}, C), {}, {
      cx: T,
      cy: A,
      x: T - _,
      y: A - _,
      xAxis: e,
      yAxis: t,
      zAxis: i,
      width: 2 * _,
      height: 2 * _,
      size: m,
      node: {
        x: y,
        y: b,
        z: D
      },
      tooltipPayload: E,
      tooltipPosition: {
        x: T,
        y: A
      },
      payload: C
    }, c && c[R] && c[R].props);
  });
  return ue({
    points: N
  }, l);
});
var ic = ls({
  chartName: "ComposedChart",
  GraphicalChild: [Nn, cs, On, Et],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: An
  }, {
    axisType: "yAxis",
    AxisComp: vi
  }, {
    axisType: "zAxis",
    AxisComp: oi
  }],
  formatAxisMap: ds
});
const nc = (n) => {
  const e = (t) => {
    const { cx: i, cy: r, fill: s, payload: o } = t, a = () => {
      if (!o) return "-";
      if (o[n] !== void 0)
        return o[n];
      for (const [l, u] of Object.entries(o))
        if (typeof u == "number" && l !== "x")
          return u;
      return "-";
    };
    return g("circle", {
      cx: i,
      cy: r,
      r: 4,
      fill: s,
      stroke: "white",
      strokeWidth: 2,
      ref: (l) => {
        l != null && l.parentElement && l.parentElement.setAttribute("aria-label", `Data point: ${a()}`);
      }
    });
  };
  return e.displayName = `Scatter-${n}`, e;
}, rc = ({ dataConfig: n, data: e, xAxis: t, yAxis: i = {
  hide: !0
}, label: r = !1, hideTooltip: s = !1, hideGrid: o = !1, aspect: a, legend: l, showValueUnderLabel: u = !1, bar: c, line: d, scatter: h, onClick: f }, x) => {
  var D, E, T, A;
  const v = us(e), w = c != null && c.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], S = d != null && d.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], N = h != null && h.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], C = [...w, ...S, ...N], R = Math.max(...v.flatMap((m) => C.map((_) => hs(i != null && i.tickFormatter ? i.tickFormatter(`${m[_]}`) : `${m[_]}`)))), y = [c, d, h].filter((m) => (m == null ? void 0 : m.axisPosition) === "left"), b = [c, d, h].filter((m) => (m == null ? void 0 : m.axisPosition) === "right");
  return g(fs, {
    config: n,
    ref: x,
    aspect: a,
    children: M(ic, {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: i && !i.hide ? 0 : 12,
        right: 12,
        top: r ? 24 : 0,
        bottom: u ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (m) => {
        if (!f || !m.activeLabel || !m.activePayload)
          return;
        const _ = {
          label: m.activeLabel,
          values: {}
        };
        for (const O of m.activePayload)
          _.values[O.name] = O.value;
        f(_);
      },
      children: [!s && g(gs, {
        ...ps(),
        content: g(ms, {
          yAxisFormatter: i.tickFormatter
        })
      }), !o && g(vs, {
        ...ys()
      }), y.length > 0 && g(vi, {
        ...Zi(i),
        tick: !0,
        width: i.width ?? R + 20 + (b.length > 0 && ((D = y[0]) != null && D.axisLabel) ? 20 : 0),
        hide: i.hide || y.some((m) => m == null ? void 0 : m.hideAxis),
        label: (E = y[0]) != null && E.axisLabel ? {
          value: y[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), b.length > 0 && g(vi, {
        ...Zi(i),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: i.width ?? R + 20 + (y.length > 0 && ((T = b[0]) != null && T.axisLabel) ? 20 : 0),
        hide: i.hide || b.some((m) => m == null ? void 0 : m.hideAxis),
        label: (A = b[0]) != null && A.axisLabel ? {
          value: b[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), g(An, {
        ...bs(t),
        hide: t == null ? void 0 : t.hide,
        tick: u ? (m) => {
          var te, G;
          const { x: _, y: O, payload: P } = m, V = ((te = e.find((ne) => ne.label === P.value)) == null ? void 0 : te.values) || "", X = Object.keys(V).length === 1 ? (G = Object.values(V)) == null ? void 0 : G[0] : void 0, U = X !== void 0 && i.tickFormatter ? i.tickFormatter(`${X}`) : X.toLocaleString();
          return M("g", {
            transform: `translate(${_},${O})`,
            children: [g("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: P.value
            }), !!X && g("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: U
            })]
          });
        } : void 0
      }), w.map((m, _) => g(On, {
        isAnimationActive: !1,
        dataKey: String(m),
        fill: n[m].color ? ct(n[m].color) : ui(_),
        radius: 4,
        maxBarSize: 32,
        children: r && g(Sn, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(m)}`)
      }, `bar-${String(m)}`)), S.map((m, _) => g(Nn, {
        type: (d == null ? void 0 : d.lineType) ?? "natural",
        dataKey: String(m),
        stroke: n[m].color ? ct(n[m].color) : ui(w.length + _),
        strokeWidth: 2,
        dot: (d == null ? void 0 : d.dot) ?? !1,
        isAnimationActive: !1,
        yAxisId: (d == null ? void 0 : d.axisPosition) === "right" ? "right" : void 0
      }, `line-${String(m)}`)), N.map((m, _) => g(Et, {
        dataKey: String(m),
        fill: n[m].color ? ct(n[m].color) : ui(w.length + S.length + _),
        r: 4,
        isAnimationActive: !1,
        yAxisId: (h == null ? void 0 : h.axisPosition) === "right" ? "right" : void 0,
        shape: nc(String(m))
      }, `scatter-${String(m)}`)), l && g(xs, {
        content: g(ws, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, sc = kn(rc), oc = ({ value: n, max: e = 100, label: t, color: i }, r) => {
  const s = i ? ct(i) : ct("categorical-1"), o = n / e * 100;
  return M("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [g("div", {
      className: "flex-grow",
      children: g(Cs, {
        color: s,
        value: o,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": n,
        "aria-label": `${o.toFixed(1)}%`
      })
    }), t && g("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, ac = kn(oc), Sc = me(
  {
    name: "AreaChart",
    type: "info"
  },
  _s
), Nc = me(
  {
    name: "BarChart",
    type: "info"
  },
  Es
), Oc = me(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Ds
), Ac = me(
  {
    name: "LineChart",
    type: "info"
  },
  Rs
), kc = me(
  {
    name: "PieChart",
    type: "info"
  },
  Ss
), Tc = me(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Ns
), zc = me(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ac
), Pc = me(
  {
    name: "ComboChart",
    type: "info"
  },
  sc
), Mc = Os.filter(
  (n) => n !== "ai"
), Lc = Tn, Ic = ["default", "outline", "neutral"], Hc = Tn, Bc = ["sm", "md", "lg"], Fc = As, Ei = ({ count: n, list: e }) => {
  const [t, i] = W(!1), r = g(Mt, {
    label: `+${n}`
  });
  return e != null && e.length ? M(zn, {
    open: t,
    onOpenChange: i,
    children: [g(Pn, {
      asChild: !0,
      children: g("button", {
        className: ks("inline-flex flex-shrink-0 items-center"),
        children: r
      })
    }), g(Mn, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: M(Ln, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((s, o) => g("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: g(Mt, {
            ...s
          })
        }, o)), g(In, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
Ei.displayName = "ChipCounter";
const kr = ({ chips: n, max: e = 4, remainingCount: t, layout: i = "compact" }) => {
  if (i === "fill")
    return g(Ts, {
      items: n,
      renderListItem: (l) => g(Mt, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => g(Ei, {
        count: (t ?? 0) + l,
        list: t ? void 0 : n.slice(n.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const r = n.slice(0, e), s = n.slice(e), o = t ?? n.length - e, a = o > 0;
  return M("div", {
    className: "flex items-center gap-2",
    children: [r.map((l, u) => g(Mt, {
      ...l
    }, u)), a && g(Ei, {
      count: o,
      list: t ? void 0 : s
    })]
  });
};
kr.displayName = "F0ChipList";
const Wc = Re("F0ChipList", kr), Gc = zs, lc = le((n, e) => g(ki, {
  ref: e,
  variant: "heading",
  ...n
}));
lc.displayName = "F0Heading";
const $c = Re(
  "F0GridStack",
  Ai
), cc = ({ benefits: n }) => g("div", {
  className: "flex flex-col gap-2",
  children: n.map((e, t) => g(dc, {
    text: e
  }, t))
}), dc = ({ text: n }) => M("div", {
  className: "flex flex-row items-start gap-2",
  children: [g(Dn, {
    icon: Ls,
    size: "md",
    className: "text-f1-icon-positive"
  }), g("span", {
    children: n
  })]
}), Tr = le(({ title: n, image: e, benefits: t, actions: i, withShadow: r = !0, module: s, moduleName: o, tag: a, promoTag: l }, u) => M("div", {
  ref: u,
  className: j("bg-white flex flex-row rounded-xl border border-f1-border-secondary", r && "shadow-md"),
  children: [g("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: g("img", {
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
          children: [s && g(Hn, {
            module: s
          }), o && g("p", {
            className: "text-base font-medium text-f1-foreground",
            children: o
          })]
        }), (a || l) && M("div", {
          className: "flex justify-start gap-2",
          children: [a && g(Ps, {
            icon: a.icon,
            text: a.label
          }), l && g(Ms, {
            variant: l.variant || "positive",
            text: l.label
          })]
        }), g("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: n
        })]
      }), g(cc, {
        benefits: t
      })]
    }), i && g("div", {
      className: "flex gap-3",
      children: i
    })]
  })]
}));
Tr.displayName = "ProductBlankslate";
function uc({ isOpen: n, onClose: e, title: t, children: i, module: r, portalContainer: s }) {
  const [o, a] = W(n);
  return H(() => {
    a(n);
  }, [n]), g(Is, {
    open: o,
    onOpenChange: (u) => {
      a(u), u || e();
    },
    modal: !0,
    children: M(Hs, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [M("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [M(Bs, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [r && g(Hn, {
            module: r,
            size: "lg"
          }), t]
        }), g(Si, {
          variant: "outline",
          icon: Bn,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), M(Ln, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [i, g(In, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function jc({ isOpen: n, onClose: e, title: t, image: i, benefits: r, errorMessage: s, successMessage: o, loadingState: a, nextSteps: l, closeLabel: u, primaryAction: c, modalTitle: d, modalModule: h, secondaryAction: f, portalContainer: x, tag: v, promoTag: w, showResponseDialog: S = !0 }) {
  const [N, C] = W(n), [R, y] = W(null), [b, D] = W(!1), E = async () => {
    if (c != null && c.onClick) {
      D(!0);
      try {
        await c.onClick(), C(!1), S && y("success");
      } catch {
        S && y("error");
      } finally {
        D(!1);
      }
    }
  }, T = () => {
    C(!1), e == null || e();
  }, A = b;
  return M(Vt, {
    children: [g(uc, {
      isOpen: N,
      onClose: T,
      title: d,
      module: h,
      portalContainer: x,
      children: g("div", {
        className: "pb-4 pl-4",
        children: g(Tr, {
          title: t,
          image: i,
          benefits: r,
          withShadow: !1,
          tag: v,
          promoTag: w,
          actions: M("div", {
            className: "flex gap-3",
            children: [c && g(Ve, {
              variant: c.variant,
              label: A ? a.label : c.label,
              icon: c.icon || void 0,
              onClick: E,
              loading: c.loading,
              size: c.size
            }), f && g(Ve, {
              onClick: f.onClick,
              label: f.label,
              variant: f.variant,
              size: f.size,
              icon: f.icon
            })]
          })
        })
      })
    }), R && S && g(Fn, {
      open: !0,
      onClose: () => {
        T(), y(null);
      },
      success: R === "success",
      errorMessage: s,
      successMessage: o,
      nextSteps: l,
      closeLabel: u,
      portalContainer: x
    })]
  });
}
function hc({ mediaUrl: n, title: e, description: t, onClose: i, dismissible: r, width: s, trackVisibility: o, actions: a, showConfirmation: l = !0 }) {
  const [u, c] = W(!1), d = () => {
    c(!0), i && i();
  };
  H(() => {
    o && o(!u);
  }, [o, u]);
  const h = n == null ? void 0 : n.includes(".mp4");
  return g(Vt, {
    children: u ? null : M(Fs, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [M(Ws, {
        children: [r && g("div", {
          className: "absolute right-2 top-2 z-10",
          children: g(Ve, {
            variant: "ghost",
            icon: Bn,
            size: "sm",
            hideLabel: !0,
            onClick: d,
            label: "Close"
          })
        }), M("div", {
          children: [g("div", {
            children: n && (h ? g("video", {
              src: n,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : g("img", {
              src: n,
              alt: e,
              className: "h-full w-full rounded-md"
            }))
          }), M("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [g(Qi, {
              className: "text-lg font-medium",
              children: e
            }), g(Qi, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), a && g(Gs, {
        className: "p-3",
        children: a.map((f) => f.type === "upsell" ? g(Wn, {
          label: f.label,
          onRequest: f.onClick,
          errorMessage: f.errorMessage,
          successMessage: f.successMessage,
          loadingState: f.loadingState,
          nextSteps: f.nextSteps,
          closeLabel: f.closeLabel,
          showConfirmation: l && f.showConfirmation,
          variant: f.variant
        }, f.label) : g(Ve, {
          label: f.label,
          onClick: f.onClick,
          variant: f.variant
        }, f.label))
      })]
    })
  });
}
const fc = le(function({ primaryAction: e, secondaryAction: t, ...i }, r) {
  const s = (l) => l.variant === "promote" ? g(Wn, {
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
  }) : g(Ve, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), o = (e == null ? void 0 : e.variant) !== "promote" ? e : void 0, a = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0;
  return M($s, {
    ref: r,
    ...i,
    primaryAction: o,
    secondaryAction: a,
    children: [(e == null ? void 0 : e.variant) === "promote" && s(e), (t == null ? void 0 : t.variant) === "promote" && s(t)]
  });
});
fc.displayName = "UpsellingBanner";
function Uc({ isOpen: n, setIsOpen: e, label: t, variant: i = "promote", size: r = "md", showIcon: s = !0, side: o = "right", align: a = "center", icon: l = js, mediaUrl: u, title: c, description: d, width: h = "300px", trackVisibility: f, actions: x, onClick: v, hideLabel: w = !1 }) {
  const [S, N] = W(!1), [C, R] = W(null), [y, b] = W(null), D = (_) => {
    e(_), v && v();
  }, E = async (_) => {
    if (_.type === "upsell") {
      b(_);
      try {
        await _.onClick(), _.showConfirmation && (N(!0), R("success"));
      } catch {
        N(!0), R("error");
      }
    }
  }, T = () => {
    R(null), N(!1), b(null), e(!1);
  }, A = n && !S, m = x == null ? void 0 : x.map((_) => _.type === "upsell" ? {
    ..._,
    onClick: () => E(_)
  } : _);
  return M(Vt, {
    children: [M(zn, {
      open: A,
      onOpenChange: D,
      children: [g(Pn, {
        asChild: !0,
        children: g(Ve, {
          variant: i,
          label: t,
          size: r,
          icon: s ? l : void 0,
          onClick: () => e(n),
          hideLabel: w
        })
      }), g(Mn, {
        side: o,
        align: a,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: g(hc, {
          mediaUrl: u,
          title: c,
          description: d,
          onClose: () => e(!1),
          dismissible: !1,
          width: h,
          trackVisibility: f,
          actions: m,
          showConfirmation: !1
        })
      })]
    }), (y == null ? void 0 : y.type) === "upsell" && y.showConfirmation && C && g(Fn, {
      open: !0,
      onClose: T,
      success: C === "success",
      errorMessage: y.errorMessage,
      successMessage: y.successMessage,
      nextSteps: y.nextSteps,
      closeLabel: y.closeLabel,
      portalContainer: null
    })]
  });
}
const gc = Ne(null), pc = ({ children: n, fullScreen: e = !0 }) => {
  const t = I(null), [i, r] = W(t.current);
  return eo(() => {
    r(t.current);
  }, []), g(gc.Provider, {
    value: {
      element: i
    },
    children: g("div", {
      ref: t,
      id: "f0-layout",
      className: j({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: n
    })
  });
}, mc = ({ children: n }) => g(Qs, {
  reducedMotion: "user",
  children: n
}), Kc = ({ children: n, layout: e, link: t, privacyModeInitiallyEnabled: i, image: r, i18n: s, l10n: o, isDev: a = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: u = !1 }) => g(mc, {
  children: g(Us, {
    isDev: a,
    showExperimentalWarnings: u,
    children: g(Ks, {
      ...o,
      children: g(Xs, {
        ...s,
        children: g(Ys, {
          ...t,
          children: g(pc, {
            ...e,
            children: g(qs, {
              children: g(Vs, {
                initiallyEnabled: i,
                children: g(Js, {
                  ...r,
                  children: g(Zs, {
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
}), wn = (n) => `datacollection-${n}`, Xc = {
  get: async (n) => JSON.parse(
    localStorage.getItem(wn(n)) ?? "{}"
  ),
  set: async (n, e) => {
    localStorage.setItem(wn(n), JSON.stringify(e));
  }
};
export {
  Sc as AreaChart,
  Vc as Await,
  Nc as BarChart,
  Oc as CategoryBarChart,
  Pc as ComboChart,
  Cc as Dashboard,
  Jc as DndProvider,
  Zc as EmojiImage,
  Qc as F0Avatar,
  ed as F0AvatarAlert,
  td as F0AvatarCompany,
  id as F0AvatarDate,
  nd as F0AvatarEmoji,
  rd as F0AvatarFile,
  sd as F0AvatarIcon,
  od as F0AvatarList,
  Hn as F0AvatarModule,
  ad as F0AvatarPerson,
  ld as F0AvatarTeam,
  Ve as F0Button,
  cd as F0ButtonDropdown,
  dd as F0ButtonToggle,
  ud as F0Card,
  hd as F0Checkbox,
  Wc as F0ChipList,
  fd as F0DatePicker,
  gd as F0EventCatcherProvider,
  $c as F0GridStack,
  lc as F0Heading,
  Dn as F0Icon,
  pd as F0Link,
  Kc as F0Provider,
  md as F0Select,
  vd as F0TagAlert,
  yd as F0TagBalance,
  bd as F0TagCompany,
  xd as F0TagDot,
  wd as F0TagList,
  Cd as F0TagPerson,
  Ps as F0TagRaw,
  Ms as F0TagStatus,
  _d as F0TagTeam,
  Jn as F0Text,
  Ed as GROUP_ID_SYMBOL,
  Rc as HomeLayout,
  _c as Layout,
  Ac as LineChart,
  Dd as OneFilterPicker,
  kc as PieChart,
  Vs as PrivacyModeProvider,
  Tr as ProductBlankslate,
  Rd as ProductCard,
  jc as ProductModal,
  hc as ProductWidget,
  zc as ProgressBarChart,
  Ec as StandardLayout,
  Sd as TagCounter,
  Dc as TwoColumnLayout,
  Fn as UpsellRequestResponseDialog,
  fc as UpsellingBanner,
  Wn as UpsellingButton,
  Uc as UpsellingPopover,
  Tc as VerticalBarChart,
  wc as avatarVariants,
  Nd as buildTranslations,
  Hc as buttonDropdownSizes,
  Ic as buttonDropdownVariants,
  Lc as buttonSizes,
  Bc as buttonToggleSizes,
  Mc as buttonVariants,
  Od as createAtlaskitDriver,
  Ad as createDataSourceDefinition,
  Ro as createPageLayoutBlock,
  So as createPageLayoutBlockGroup,
  Xc as dataCollectionLocalStorageHandler,
  Gc as datepickerSizes,
  Zd as defaultTranslations,
  Re as experimental,
  kd as getAnimationVariants,
  Td as getDataSourcePaginationType,
  zd as getEmojiLabel,
  Pd as isInfiniteScrollPagination,
  Md as isPageBasedPagination,
  Fc as linkVariants,
  Ld as modules,
  Id as predefinedPresets,
  Hd as selectSizes,
  Bd as tagDotColors,
  Fd as useData,
  Wd as useDataSource,
  Gd as useDndEvents,
  $d as useDraggable,
  jd as useDroppableList,
  Ud as useEmojiConfetti,
  Kd as useGroups,
  Xd as usePrivacyMode,
  Yd as useReducedMotion,
  qd as useSelectable,
  Vd as useXRay
};
