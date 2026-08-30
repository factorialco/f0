import { cn as e, focusRing as t } from "../../lib/utils.js";
import { Slider as n, SliderRange as r, SliderThumb as i, SliderTrack as ee } from "../../ui/slider.js";
import { InputMessages as a } from "../F0InputField/components/InputMessages.js";
import { Label as o } from "../F0InputField/components/Label.js";
import { SliderRangeLabels as s } from "./components/SliderRangeLabels.js";
import { SliderTooltip as c } from "./components/SliderTooltip.js";
import { forwardRef as l, useCallback as u, useEffect as d, useId as f, useRef as te, useState as p } from "react";
import { cva as m } from "cva";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
import { useControllableState as _ } from "@radix-ui/react-use-controllable-state";
//#region src/components/F0Slider/F0Slider.tsx
var v = m({
	base: "relative h-1.5 grow overflow-hidden rounded-full bg-f1-background-tertiary",
	variants: { status: {
		default: "",
		warning: "",
		info: "",
		error: ""
	} }
}), y = m({
	base: "absolute h-full",
	variants: {
		status: {
			default: "bg-f1-background-selected-bold",
			warning: "bg-f1-background-warning-bold",
			info: "bg-f1-background-info-bold",
			error: "bg-f1-background-critical-bold"
		},
		disabled: {
			true: "bg-f1-background-disabled",
			false: ""
		}
	}
}), b = 20, x = m({
	base: e("relative block rounded-full bg-f1-background border-[2px] border-solid", "transition-[transform,border-color] hover:scale-110", "motion-reduce:transition-none motion-reduce:hover:scale-100", "data-[disabled]:cursor-not-allowed data-[disabled]:hover:scale-100"),
	variants: {
		status: {
			default: "border-f1-background-selected-bold",
			warning: "border-f1-background-warning-bold",
			info: "border-f1-background-info-bold",
			error: "border-f1-background-critical-bold"
		},
		disabled: {
			true: "border-f1-background-disabled",
			false: ""
		}
	}
}), S = l((l, m) => {
	let { label: S, ariaLabel: C, hideLabel: w = !1, hint: T, status: E, required: D, disabled: O, name: ne, value: re, defaultValue: ie, onChange: ae, onValueCommit: k, min: A, max: j, step: M = 1, minLabel: N, maxLabel: P, formatValue: F = (e) => String(e), showTooltip: I = "onHover", ...L } = l, R = f(), z = f(), B = f(), V = C && C.trim().length > 0 ? C : S.trim().length > 0 ? S : void 0;
	d(() => {
		process.env.NODE_ENV !== "production" && !V && console.warn("F0Slider: provide a non-empty `label` or `ariaLabel` for accessibility.");
	}, [V]);
	let [H, U] = _({
		prop: re,
		defaultProp: ie ?? A,
		onChange: ae
	}), W = H ?? A, G = j === A ? 0 : (Math.min(j, Math.max(A, W)) - A) / (j - A) * 100, K = b * (.5 - G / 100), q = u((e) => {
		let [t] = e;
		t !== void 0 && U(t);
	}, [U]), oe = u((e) => {
		let [t] = e;
		t !== void 0 && k?.(t);
	}, [k]), [se, J] = p(!1), [ce, Y] = p(!1), [le, X] = p(!1), Z = te(!1), ue = I === "always" || I === "onHover" && (se || ce || le), Q = E?.type ?? "default", $ = !w && S.trim().length > 0, de = E ?? (T ? {
		type: "default",
		message: T
	} : void 0), fe = T || E?.message ? B : void 0;
	return /* @__PURE__ */ g("div", {
		ref: m,
		...L,
		className: e("flex flex-col gap-2", O && "cursor-not-allowed"),
		onPointerDownCapture: () => {
			Z.current = !0;
		},
		onPointerUp: () => {
			Z.current = !1;
		},
		children: [
			$ && /* @__PURE__ */ h(o, {
				label: S,
				required: D,
				htmlFor: R,
				id: z,
				disabled: O
			}),
			/* @__PURE__ */ g(n, {
				value: [W],
				onValueChange: q,
				onValueCommit: oe,
				onPointerDown: () => X(!0),
				onPointerUp: () => X(!1),
				min: A,
				max: j,
				step: M,
				disabled: O,
				name: ne,
				className: e("relative flex w-full touch-none select-none items-center py-2", O && "opacity-50"),
				onMouseEnter: () => J(!0),
				onMouseLeave: () => J(!1),
				children: [
					/* @__PURE__ */ h(ee, {
						className: v({ status: Q }),
						children: /* @__PURE__ */ h(r, { className: y({
							status: Q,
							disabled: O
						}) })
					}),
					/* @__PURE__ */ h(i, {
						id: R,
						"aria-label": $ ? void 0 : V,
						"aria-labelledby": $ ? z : void 0,
						"aria-valuetext": F(W),
						"aria-describedby": fe,
						"aria-required": D,
						style: {
							width: b,
							height: b
						},
						className: e(x({
							status: Q,
							disabled: O
						}), t("focus-visible:ring-offset-1")),
						onFocus: () => Y(!Z.current),
						onBlur: () => Y(!1)
					}),
					I !== "never" && /* @__PURE__ */ h(c, {
						visible: ue,
						content: F(W),
						style: { left: `calc(${G}% + ${K}px)` }
					})
				]
			}),
			/* @__PURE__ */ h(s, {
				minLabel: N,
				maxLabel: P
			}),
			/* @__PURE__ */ h("div", {
				id: B,
				role: "status",
				"aria-live": "polite",
				children: /* @__PURE__ */ h(a, { status: de })
			})
		]
	});
});
S.displayName = "F0Slider";
//#endregion
export { S as F0SliderBase };
