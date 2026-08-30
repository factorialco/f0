import { cn as e } from "../../../lib/utils.js";
import { forwardRef as t } from "react";
import { cva as n } from "cva";
import { jsx as r } from "react/jsx-runtime";
//#region src/experimental/Utilities/Layout/_FlexBox.tsx
var i = n({
	base: "flex",
	variants: {
		overflow: {
			hidden: "overflow-hidden",
			auto: "overflow-auto"
		},
		paddingX: {
			none: "px-0",
			"p-2": "px-2",
			"p-4": "px-4",
			"p-8": "px-8",
			"p-12": "px-12",
			"p-16": "px-16"
		},
		maxWidth: {
			xs: "max-w-xs",
			sm: "max-w-sm",
			md: "max-w-md",
			xl: "max-w-xl",
			"screen-sm": "max-w-screen-sm",
			"screen-md": "max-w-screen-md",
			"screen-lg": "max-w-screen-lg",
			"screen-xl": "max-w-screen-xl",
			"screen-2xl": "max-w-screen-2xl"
		},
		height: {
			auto: "h-auto",
			full: "h-full"
		},
		width: {
			auto: "w-auto",
			full: "w-full"
		},
		paddingY: {
			none: "py-0",
			"p-2": "py-2",
			"p-4": "py-4",
			"p-8": "py-8",
			"p-12": "py-12",
			"p-16": "py-16"
		},
		basis: { 0: "basis-0" },
		inline: {
			true: "inline-flex",
			false: "flex"
		},
		justifyContent: {
			center: "justify-center",
			end: "justify-end",
			"space-between": "justify-between",
			start: "justify-start",
			stretch: "justify-stretch"
		},
		alignItems: {
			center: "items-center",
			end: "items-end",
			"space-between": "items-between",
			start: "items-start",
			stretch: "items-stretch"
		},
		grow: {
			true: "flex-grow",
			false: "flex-grow-0"
		},
		shrink: {
			true: "flex-shrink",
			false: "flex-shrink-0"
		}
	},
	defaultVariants: {
		paddingX: "none",
		paddingY: "none",
		inline: !1
	}
}), a = t(function({ className: t, grow: n, basis: a, shrink: o, paddingX: s, paddingY: c, inline: l, overflow: u, maxWidth: d, justifyContent: f, alignItems: p, height: m, width: h, ...g }, _) {
	return /* @__PURE__ */ r("div", {
		className: e(i({
			paddingX: s,
			basis: a,
			paddingY: c,
			grow: n,
			shrink: o,
			inline: l,
			overflow: u,
			maxWidth: d,
			justifyContent: f,
			alignItems: p,
			height: m,
			width: h
		}), t),
		ref: _,
		...g
	});
});
//#endregion
export { a as FlexBox };
