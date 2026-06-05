import { jsx as v } from "react/jsx-runtime";
import { forwardRef as j, useRef as A, useMemo as B, useEffect as D } from "react";
import { cn as G } from "../../../../lib/utils.js";
import { createGlobeSpinState as Q, QUAD_POOL_SIZE as T, buildFrameInto as k, easeInOutCubic as V, SPIN_MS as x, PAUSE_MS as Z, PRECESSION_MS as H } from "./globeSpinMath.js";
const J = ({ size: s = 20, className: F, style: L, variant: I = "default" }, a) => {
  const w = A(null), R = A(null), f = A(null);
  f.current === null && (f.current = Q());
  const N = B(() => new Array(T).fill(0), []), U = (o) => {
    w.current = o, a && (typeof a == "function" ? a(o) : a.current = o);
  };
  return D(() => {
    const o = R.current, c = w.current;
    if (!o || !c) return;
    const P = o.querySelectorAll(
      "polygon"
    ), m = f.current;
    let i = null, l = 0, d = 0, h = 0, u = null, b = "spin", q = !0, g = !1;
    const C = (t) => {
      const e = m.quads;
      for (let n = 0; n < P.length; n++) {
        const r = P[n];
        if (n < t) {
          const p = e[n];
          r.setAttribute("points", p.points), r.setAttribute("fill", p.color), r.hasAttribute("display") && r.removeAttribute("display");
        } else r.hasAttribute("display") || r.setAttribute("display", "none");
      }
    }, E = (t) => {
      g || (l = t, d = t, g = !0);
      let e = 0, n = !0;
      if (I === "continuous") {
        const _ = x * 2, S = (t - l) % _ / _;
        e = S < 0.5 ? S * 2 : (1 - S) * 2, n = !1;
      } else b === "spin" ? (e = Math.min((t - l) / x, 1), e >= 1 && (e = 0, b = "pause", h = t)) : (e = 0, t - h >= Z && (b = "spin", l = t));
      const r = (t - d) / H % 1, p = n ? V(e) : e, $ = k(m, p, s, r);
      C($), i = requestAnimationFrame(E);
    }, M = () => {
      i === null && (i = requestAnimationFrame(E));
    }, O = () => {
      i !== null && (cancelAnimationFrame(i), i = null);
    };
    C(k(m, 0, s, 0));
    let y = null;
    return typeof IntersectionObserver < "u" && (y = new IntersectionObserver(
      (t) => {
        const e = t[0]?.isIntersecting ?? !0;
        if (e !== q)
          if (q = e, e) {
            if (u !== null && g) {
              const n = performance.now() - u;
              l += n, d += n, h += n;
            }
            u = null, M();
          } else
            u = performance.now(), O();
      },
      { threshold: 0 }
    ), y.observe(c)), M(), () => {
      O(), y?.disconnect();
    };
  }, [s, I]), /* @__PURE__ */ v(
    "div",
    {
      ref: U,
      role: "progressbar",
      "aria-label": "Loading",
      className: G("shrink-0 globe-spin-anim", F),
      style: { width: s, height: s, ...L },
      children: /* @__PURE__ */ v(
        "svg",
        {
          ref: R,
          width: "100%",
          height: "100%",
          viewBox: `0 0 ${s} ${s}`,
          xmlns: "http://www.w3.org/2000/svg",
          shapeRendering: "geometricPrecision",
          style: { display: "block", overflow: "visible" },
          children: N.map((o, c) => /* @__PURE__ */ v("polygon", { stroke: "none", display: "none" }, c))
        }
      )
    }
  );
}, K = j(
  J
);
K.displayName = "ChatSpinner";
export {
  K as ChatSpinner
};
