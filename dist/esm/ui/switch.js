import { cn as e } from "../lib/utils.js";
import * as t from "react";
import { useId as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import * as a from "@radix-ui/react-switch";
//#region src/ui/switch.tsx
var o = t.forwardRef(({ className: t, disabled: o, hideLabel: s, required: c, ...l }, u) => {
	let d = n(), f = l.id || d;
	return /* @__PURE__ */ i("div", {
		className: "flex items-center",
		children: [/* @__PURE__ */ i(a.Root, {
			...l,
			ref: u,
			id: f,
			name: f,
			"aria-label": l.title ?? "Switch",
			className: e("group relative flex h-6 w-[1.875rem] items-center bg-transparent", o && "!cursor-not-allowed opacity-50", "focus-visible:outline-none", t),
			disabled: o,
			children: [/* @__PURE__ */ r("span", {
				"aria-hidden": "true",
				className: e("pointer-events-none absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 rounded-full bg-f1-border transition-colors", "group-hover:bg-f1-border-hover group-data-[state=checked]:bg-f1-background-selected-bold", "group-focus-visible:ring-1 group-focus-visible:ring-f1-special-ring group-focus-visible:ring-offset-1")
			}), /* @__PURE__ */ r(a.Thumb, { className: e("relative block h-4 w-4 translate-x-[0.125rem] rounded-full bg-f1-background transition-transform duration-300 data-[state=checked]:translate-x-[0.75rem]") })]
		}), l.title && !s && /* @__PURE__ */ i("label", {
			htmlFor: f,
			className: e("flex items-center justify-center pl-2.5 text-current", o && "!cursor-not-allowed opacity-50 hover:!cursor-not-allowed"),
			children: [l.title, c && /* @__PURE__ */ r("span", {
				className: "ml-0.5 text-f1-foreground-critical",
				children: "*"
			})]
		})]
	});
});
o.displayName = a.Root.displayName;
//#endregion
export { o as Switch };
