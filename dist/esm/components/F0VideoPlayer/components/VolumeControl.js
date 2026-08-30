import { cn as e, focusRing as t } from "../../../lib/utils.js";
import n from "../../../icons/app/VolumeHigh.js";
import r from "../../../icons/app/VolumeMid.js";
import i from "../../../icons/app/VolumeMuted.js";
import { useI18n as a } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as o } from "../../F0Button/F0Button.js";
import { VOLUME_STEP as s } from "../utils.js";
import { useRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/F0VideoPlayer/components/VolumeControl.tsx
function f(e, t) {
	return t || e === 0 ? i : e <= .5 ? r : n;
}
function p({ volume: e, isMuted: t, onToggleMute: n, onVolumeChange: r, silent: s = !1 }) {
	let { t: c } = a(), l = t || e === 0;
	return s ? /* @__PURE__ */ u(o, {
		variant: "ghost",
		size: "sm",
		hideLabel: !0,
		disabled: !0,
		icon: i,
		label: c("videoPlayer.noAudio")
	}) : /* @__PURE__ */ d("div", {
		className: "flex items-center gap-1",
		children: [/* @__PURE__ */ u(o, {
			variant: "ghost",
			size: "sm",
			hideLabel: !0,
			icon: f(e, l),
			label: c(l ? "videoPlayer.unmute" : "videoPlayer.mute"),
			onClick: n
		}), /* @__PURE__ */ u(m, {
			value: l ? 0 : e,
			onChange: r
		})]
	});
}
function m({ value: n, onChange: r }) {
	let { t: i } = a(), o = c(null), [f, p] = l(!1), m = Math.max(0, Math.min(1, n)), h = (e) => {
		let t = o.current;
		if (!t) return 0;
		let n = t.getBoundingClientRect(), r = n.width - 12;
		return r <= 0 ? 0 : Math.max(0, Math.min(1, (e - n.left - 6) / r));
	}, g = (e) => {
		e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), p(!0), r(h(e.clientX));
	}, _ = (e) => {
		f && r(h(e.clientX));
	}, v = (e) => {
		f && (p(!1), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
	};
	return /* @__PURE__ */ d("div", {
		ref: o,
		className: e("relative flex h-4 w-[60px] items-center rounded-sm", "cursor-pointer touch-none", t()),
		role: "slider",
		tabIndex: 0,
		"aria-label": i("videoPlayer.volume"),
		"aria-valuemin": 0,
		"aria-valuemax": 1,
		"aria-valuenow": Number(m.toFixed(2)),
		"aria-valuetext": `${Math.round(m * 100)}%`,
		onPointerDown: g,
		onPointerMove: _,
		onPointerUp: v,
		onPointerCancel: v,
		onLostPointerCapture: () => p(!1),
		onKeyDown: (e) => {
			let t = null;
			switch (e.key) {
				case "ArrowRight":
				case "ArrowUp":
					t = Math.min(1, m + s);
					break;
				case "ArrowLeft":
				case "ArrowDown":
					t = Math.max(0, m - s);
					break;
				case "Home":
					t = 0;
					break;
				case "End":
					t = 1;
					break;
				default: return;
			}
			e.preventDefault(), e.stopPropagation(), r(t);
		},
		children: [
			/* @__PURE__ */ u("div", { className: "absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" }),
			/* @__PURE__ */ u("div", {
				className: "pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground",
				style: { width: `calc(12px + (100% - 12px) * ${m})` }
			}),
			/* @__PURE__ */ u("div", {
				className: "pointer-events-none absolute h-3 w-3 -translate-x-1/2 rounded-full bg-f1-foreground shadow-[0_0_4px_rgba(0,0,0,0.4)]",
				style: { left: `calc(6px + (100% - 12px) * ${m})` }
			})
		]
	});
}
//#endregion
export { p as VolumeControl, f as volumeIcon };
