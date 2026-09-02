import { cn as e } from "../../../../lib/utils.js";
import { PRECESSION_MS as t, SPIN_MS as n, buildFrameInto as r, createGlobeSpinState as i, spinEase as a } from "./globeSpinMath.js";
import { forwardRef as o, useEffect as s, useMemo as c, useRef as l } from "react";
import { jsx as u } from "react/jsx-runtime";
var d = o(({ size: o = 20, className: d, style: f, variant: p = "default", playing: m = !0 }, h) => {
	let g = l(null), _ = l(null), v = l(m), y = l(null), b = l(null);
	b.current === null && (b.current = i());
	let x = c(() => Array(960).fill(0), []);
	return s(() => {
		let e = _.current, i = g.current;
		if (!e || !i) return;
		let s = e.querySelectorAll("polygon"), c = b.current, l = null, u = 0, d = 0, f = 0, m = null, h = p === "continuous" || v.current ? "spin" : "rest", x = !0, S = !1, C = typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null, w = C?.matches ?? !1, T = (e) => {
			let t = c.quads;
			for (let n = 0; n < s.length; n++) {
				let r = s[n];
				if (n < e) {
					let e = t[n];
					r.setAttribute("points", e.points), r.setAttribute("fill", e.color), r.hasAttribute("display") && r.removeAttribute("display");
				} else r.hasAttribute("display") || r.setAttribute("display", "none");
			}
		}, E = (e) => {
			S ||= (u = e, d = e, !0);
			let i = 0;
			if (p === "continuous") i = (e - u) % n / n;
			else if (h === "spin") {
				let t = Math.min((e - u) / n, 1);
				i = t < 1 ? a(t) : 0, t >= 1 && (v.current ? (h = "pause", f = e) : h = "rest");
			} else h === "pause" && e - f >= 300 && (v.current ? (h = "spin", u = e) : h = "rest");
			let s = (e - d) / t % 1, m = r(c, i, o, s);
			if (T(m), h === "rest") {
				l = null;
				return;
			}
			l = requestAnimationFrame(E);
		}, D = () => {
			l !== null || w || (l = requestAnimationFrame(E));
		}, O = () => {
			l !== null && (cancelAnimationFrame(l), l = null);
		};
		y.current = () => {
			h === "rest" && (h = "spin", u = performance.now(), m !== null && (m = u)), x && D();
		}, T(r(c, 0, o, 0));
		let k = null;
		typeof IntersectionObserver < "u" && (k = new IntersectionObserver((e) => {
			let t = e[0]?.isIntersecting ?? !0;
			if (t !== x) {
				if (x = t, t) {
					if (m !== null && S) {
						let e = performance.now() - m;
						u += e, d += e, f += e;
					}
					m = null, D();
				} else m = performance.now(), O();
			}
		}, { threshold: 0 }), k.observe(i));
		let A = () => {
			w = C?.matches ?? !1, w ? (O(), T(r(c, 0, o, 0))) : D();
		};
		return C?.addEventListener("change", A), (p === "continuous" || v.current) && D(), () => {
			O(), y.current = null, k?.disconnect(), C?.removeEventListener("change", A);
		};
	}, [o, p]), s(() => {
		v.current = m, m && y.current?.();
	}, [m]), /* @__PURE__ */ u("div", {
		ref: (e) => {
			g.current = e, h && (typeof h == "function" ? h(e) : h.current = e);
		},
		role: "progressbar",
		"aria-label": "Loading",
		className: e("shrink-0 globe-spin-anim", d),
		style: {
			width: o,
			height: o,
			"--globe-spin-blur": `${(o * .05).toFixed(2)}px`,
			"--globe-spin-cycle": `${p === "continuous" ? n : n + 300}ms`,
			...f
		},
		children: /* @__PURE__ */ u("svg", {
			ref: _,
			width: "100%",
			height: "100%",
			viewBox: `0 0 ${o} ${o}`,
			xmlns: "http://www.w3.org/2000/svg",
			shapeRendering: "geometricPrecision",
			style: {
				display: "block",
				overflow: "visible"
			},
			children: x.map((e, t) => /* @__PURE__ */ u("polygon", {
				stroke: "none",
				display: "none"
			}, t))
		})
	});
});
d.displayName = "ChatSpinner";
//#endregion
export { d as ChatSpinner };
