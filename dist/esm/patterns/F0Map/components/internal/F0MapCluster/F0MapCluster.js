import { DataTestIdWrapper as e } from "../../../../../lib/data-testid/index.js";
import { cn as t } from "../../../../../lib/utils.js";
import { useI18n as n } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0MapMarker as r } from "../../F0MapMarker/F0MapMarker.js";
import { forwardRef as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/patterns/F0Map/components/internal/F0MapCluster/F0MapCluster.tsx
var c = 4, l = 3, u = 1.3, d = 1.08, f = "cubic-bezier(0.16, 1, 0.3, 1)", p = 72, m = {
	1: [[0, 0]],
	2: [[-8, 0], [8, 0]],
	3: [
		[0, -8],
		[-8, 7],
		[8, 7]
	],
	4: [
		[-8, -8],
		[8, -8],
		[-8, 8],
		[8, 8]
	]
}, h = i(function({ count: i, members: h, onClick: g, ariaLabel: _, dataTestId: v, className: y }, b) {
	let x = n(), [S, C] = a(!1), w = h.slice(0, i <= c ? c : l), T = Math.max(0, i - w.length), E = T > 0, D = T > 99 ? "+99" : `+${T}`, O = m[w.length + +!!E] ?? m[4], k = S ? u : 1, A = S ? d : 1, j = (e) => {
		let [t, n] = O[e] ?? [0, 0];
		return {
			transform: `translate(${t * k}px, ${n * k}px) scale(${A})`,
			transition: `transform 240ms ${f}`
		};
	};
	return /* @__PURE__ */ o(e, {
		dataTestId: v,
		children: /* @__PURE__ */ s("div", {
			ref: b,
			role: "button",
			tabIndex: 0,
			"aria-label": _ ?? x.t("map.cluster", { count: i }),
			onClick: g,
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && (e.preventDefault(), g?.());
			},
			onPointerEnter: () => C(!0),
			onPointerLeave: () => C(!1),
			onFocus: () => C(!0),
			onBlur: () => C(!1),
			className: t("group cursor-pointer outline-none", y),
			style: {
				position: "relative",
				width: 0,
				height: 0
			},
			children: [
				/* @__PURE__ */ o("span", {
					"aria-hidden": !0,
					className: "absolute rounded-lg group-focus-visible:ring-1 group-focus-visible:ring-f1-special-ring group-focus-visible:ring-offset-1",
					style: {
						left: -36,
						top: -36,
						width: p,
						height: p
					}
				}),
				w.map((e, t) => /* @__PURE__ */ o("span", {
					className: "absolute left-0 top-0 flex leading-none",
					style: {
						zIndex: t,
						...j(t)
					},
					children: /* @__PURE__ */ o(r, {
						...e,
						showLabel: !1
					})
				}, t)),
				E && (() => {
					let [e, n] = O[w.length] ?? [0, 0];
					return /* @__PURE__ */ s("span", {
						className: t("absolute left-0 top-0 flex h-6 min-w-6 items-center justify-center overflow-hidden rounded-full px-1.5", "border border-solid border-f1-border-secondary", "text-f1-foreground-secondary text-sm font-medium leading-none"),
						style: {
							zIndex: l,
							backgroundColor: "hsl(var(--white-90))",
							transform: `translate(${e * k}px, ${n * k}px) translate(-50%, -50%) scale(${A})`,
							transition: `transform 240ms ${f}`
						},
						children: [/* @__PURE__ */ o("span", {
							"aria-hidden": !0,
							className: "absolute inset-0 bg-f1-background-hover"
						}), /* @__PURE__ */ o("span", {
							className: "relative",
							children: D
						})]
					});
				})()
			]
		})
	});
});
h.displayName = "F0MapCluster";
var g = h;
//#endregion
export { g as F0MapCluster };
