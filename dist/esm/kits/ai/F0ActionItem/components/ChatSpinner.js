import { cn as e } from "../../../../lib/utils.js";
import { PRECESSION_MS as t, SPIN_MS as n, buildFrameInto as r, createGlobeSpinState as i, easeInOutCubic as a } from "./globeSpinMath.js";
import { forwardRef as o, useEffect as s, useMemo as c, useRef as l } from "react";
import { jsx as u } from "react/jsx-runtime";
var d = o(({ size: o = 20, className: d, style: f, variant: p = "default" }, m) => {
	let h = l(null), g = l(null), _ = l(null);
	_.current === null && (_.current = i());
	let v = c(() => Array(960).fill(0), []);
	return s(() => {
		let e = g.current, i = h.current;
		if (!e || !i) return;
		let s = e.querySelectorAll("polygon"), c = _.current, l = null, u = 0, d = 0, f = 0, m = null, v = "spin", y = !0, b = !1, x = (e) => {
			let t = c.quads;
			for (let n = 0; n < s.length; n++) {
				let r = s[n];
				if (n < e) {
					let e = t[n];
					r.setAttribute("points", e.points), r.setAttribute("fill", e.color), r.hasAttribute("display") && r.removeAttribute("display");
				} else r.hasAttribute("display") || r.setAttribute("display", "none");
			}
		}, S = (e) => {
			b ||= (u = e, d = e, !0);
			let i = 0, s = !0;
			if (p === "continuous") {
				let t = n * 2, r = (e - u) % t / t;
				i = r < .5 ? r * 2 : (1 - r) * 2, s = !1;
			} else v === "spin" ? (i = Math.min((e - u) / n, 1), i >= 1 && (i = 0, v = "pause", f = e)) : (i = 0, e - f >= 500 && (v = "spin", u = e));
			let m = (e - d) / t % 1, h = s ? a(i) : i, g = r(c, h, o, m);
			x(g), l = requestAnimationFrame(S);
		}, C = () => {
			l === null && (l = requestAnimationFrame(S));
		}, w = () => {
			l !== null && (cancelAnimationFrame(l), l = null);
		};
		x(r(c, 0, o, 0));
		let T = null;
		return typeof IntersectionObserver < "u" && (T = new IntersectionObserver((e) => {
			let t = e[0]?.isIntersecting ?? !0;
			if (t !== y) {
				if (y = t, t) {
					if (m !== null && b) {
						let e = performance.now() - m;
						u += e, d += e, f += e;
					}
					m = null, C();
				} else m = performance.now(), w();
			}
		}, { threshold: 0 }), T.observe(i)), C(), () => {
			w(), T?.disconnect();
		};
	}, [o, p]), /* @__PURE__ */ u("div", {
		ref: (e) => {
			h.current = e, m && (typeof m == "function" ? m(e) : m.current = e);
		},
		role: "progressbar",
		"aria-label": "Loading",
		className: e("shrink-0 globe-spin-anim", d),
		style: {
			width: o,
			height: o,
			...f
		},
		children: /* @__PURE__ */ u("svg", {
			ref: g,
			width: "100%",
			height: "100%",
			viewBox: `0 0 ${o} ${o}`,
			xmlns: "http://www.w3.org/2000/svg",
			shapeRendering: "geometricPrecision",
			style: {
				display: "block",
				overflow: "visible"
			},
			children: v.map((e, t) => /* @__PURE__ */ u("polygon", {
				stroke: "none",
				display: "none"
			}, t))
		})
	});
});
d.displayName = "ChatSpinner";
//#endregion
export { d as ChatSpinner };
