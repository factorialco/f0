import { cn as e } from "../../../../lib/utils.js";
import { ReactShaderToy as t } from "./ReactShaderToy.js";
import { shaderSource as n } from "./shaderSource.js";
import { useAuraVoiceAnimation as r } from "../hooks/useAuraVoiceAnimation.js";
import { useMemo as i } from "react";
import { cva as a } from "cva";
import { jsx as o } from "react/jsx-runtime";
//#region src/kits/ai/F0AuraVoiceAnimation/components/F0AuraVoiceAnimation.tsx
var s = a({
	base: "aspect-square",
	variants: { size: {
		icon: "h-[24px]",
		sm: "h-[56px]",
		md: "h-[112px]",
		lg: "h-[224px]",
		xl: "h-[448px]"
	} },
	defaultVariants: { size: "lg" }
});
function c(e) {
	let t = e.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
	if (t) {
		let [, e, n, r] = t;
		return [
			e,
			n,
			r
		].map((e = "00") => parseInt(e, 16) / 255);
	}
}
function l({ shape: e = 1, speed: r = 1, amplitude: a = .5, frequency: s = .5, scale: l = .2, blur: u = 1, color: d = "#FF355E", colorShift: f = 1, brightness: p = 1, themeMode: m = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light", ref: h, className: g, ..._ }) {
	let v = i(() => c(d), [d]);
	return /* @__PURE__ */ o("div", {
		ref: h,
		className: g,
		..._,
		children: /* @__PURE__ */ o(t, {
			fs: n,
			devicePixelRatio: globalThis.devicePixelRatio ?? 1,
			uniforms: {
				uSpeed: {
					type: "1f",
					value: r
				},
				uBlur: {
					type: "1f",
					value: u
				},
				uScale: {
					type: "1f",
					value: l
				},
				uShape: {
					type: "1f",
					value: e
				},
				uFrequency: {
					type: "1f",
					value: s
				},
				uAmplitude: {
					type: "1f",
					value: a
				},
				uBloom: {
					type: "1f",
					value: 0
				},
				uMix: {
					type: "1f",
					value: p
				},
				uSpacing: {
					type: "1f",
					value: .5
				},
				uColorShift: {
					type: "1f",
					value: f
				},
				uVariance: {
					type: "1f",
					value: .1
				},
				uSmoothing: {
					type: "1f",
					value: 1
				},
				uMode: {
					type: "1f",
					value: +(m === "light")
				},
				uColor: {
					type: "3fv",
					value: v ?? [
						0,
						.7,
						1
					]
				}
			},
			onError: (e) => {
				console.error("Shader error:", e);
			},
			onWarning: (e) => {
				console.warn("Shader warning:", e);
			},
			style: {
				width: "100%",
				height: "100%"
			}
		})
	});
}
l.displayName = "AuraShader";
function u({ size: t = "lg", state: n, color: i, colorShift: a = .05, audioTrack: c, themeMode: u, className: d, ref: f, ...p }) {
	let { speed: m, scale: h, amplitude: g, frequency: _, brightness: v } = r(n, c);
	return /* @__PURE__ */ o(l, {
		ref: f,
		blur: .2,
		color: i,
		colorShift: a,
		speed: m,
		scale: h,
		themeMode: u,
		amplitude: g,
		frequency: _,
		brightness: v,
		className: e(s({ size: t }), "overflow-hidden rounded-full", d),
		...p
	});
}
//#endregion
export { u as F0AuraVoiceAnimation, s as F0AuraVoiceAnimationVariants };
