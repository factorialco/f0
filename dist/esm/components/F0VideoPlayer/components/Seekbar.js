import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { formatTime as r } from "../utils.js";
import { useRef as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/F0VideoPlayer/components/Seekbar.tsx
function c({ currentTime: c, duration: l, markerTime: u, blockSeekPastMarker: d = !1, onSeek: f }) {
	let { t: p } = n(), m = i(null), [h, g] = a(!1), [_, v] = a(null), y = l > 0 ? Math.min(1, c / l) : 0, b = u !== void 0 && l > 0 ? Math.min(1, u / l) : 0, x = u !== void 0 && l > 0 && u > 0 && u < l - .25 && c < u - .25, S = (e) => {
		let t = m.current;
		if (!t) return 0;
		let n = t.getBoundingClientRect();
		return Math.max(0, Math.min(1, (e - n.left) / n.width));
	}, C = (e) => {
		l && f(S(e) * l);
	}, w = (e) => {
		l && (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), g(!0), C(e.clientX));
	}, T = (e) => {
		l && (v(S(e.clientX)), h && C(e.clientX));
	}, E = (e) => {
		h && (g(!1), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
	}, D = _ !== null && d && u !== void 0 && _ > b;
	return /* @__PURE__ */ s("div", {
		ref: m,
		className: e("relative flex h-4 flex-1 items-center rounded-sm", "cursor-pointer touch-none", t()),
		role: "slider",
		tabIndex: 0,
		"aria-label": p("videoPlayer.seekLabel"),
		"aria-valuemin": 0,
		"aria-valuemax": l || 0,
		"aria-valuenow": c,
		"aria-valuetext": p("videoPlayer.timeProgress", {
			current: r(c),
			total: r(l)
		}),
		onPointerDown: w,
		onPointerMove: T,
		onPointerUp: E,
		onPointerCancel: E,
		onLostPointerCapture: () => g(!1),
		onPointerLeave: () => v(null),
		onKeyDown: (e) => {
			if (!l) return;
			let t = null;
			switch (e.key) {
				case "ArrowLeft":
					t = Math.max(0, c - 5);
					break;
				case "ArrowRight":
					t = Math.min(l, c + 5);
					break;
				case "Home":
					t = 0;
					break;
				case "End":
					t = l;
					break;
				default: return;
			}
			e.preventDefault(), e.stopPropagation(), f(t);
		},
		children: [
			/* @__PURE__ */ o("div", { className: "absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" }),
			/* @__PURE__ */ o("div", {
				className: "pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground",
				style: { width: `${y * 100}%` }
			}),
			x && /* @__PURE__ */ o("div", {
				className: "pointer-events-none absolute z-[1] h-2.5 w-0.5 -translate-x-px bg-f1-foreground/95",
				style: { left: `${b * 100}%` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ o("div", {
				className: "pointer-events-none absolute z-[2] h-3 w-3 -translate-x-1/2 rounded-full bg-f1-foreground shadow-[0_0_4px_rgba(0,0,0,0.4)]",
				style: { left: `${y * 100}%` }
			}),
			D && /* @__PURE__ */ o("div", { className: "absolute inset-0 cursor-not-allowed" })
		]
	});
}
//#endregion
export { c as Seekbar };
