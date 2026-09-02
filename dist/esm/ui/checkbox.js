import { cn as e, focusRing as t } from "../lib/utils.js";
import { F0Icon as n } from "../components/F0Icon/index.js";
import r from "../icons/app/Check.js";
import i from "../icons/app/Minus.js";
import * as a from "react";
import { useId as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { AnimatePresence as l } from "motion/react";
import * as u from "@radix-ui/react-checkbox";
//#region src/ui/checkbox.tsx
var d = a.forwardRef(({ className: a, indeterminate: d, disabled: f, hideLabel: p, required: m, ...h }, g) => {
	let _ = o(), v = h.id || _;
	return /* @__PURE__ */ c("div", {
		className: "flex items-center",
		children: [/* @__PURE__ */ s(u.Root, {
			...h,
			ref: g,
			id: v,
			name: h.name || v,
			"aria-label": h.title,
			className: e("relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse", "after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color] after:content-[''] data-[state=checked]:after:bg-f1-background-selected-bold", f && "cursor-not-allowed opacity-50", d && "data-[state=checked]:text-f1-foreground-inverse", h.checked && f && "data-[state=checked]:bg-f1-background-secondary data-[state=checked]:text-f1-foreground-secondary", t("focus-visible:ring-offset-0"), a),
			checked: h.checked,
			onCheckedChange: h.onCheckedChange,
			disabled: f,
			children: /* @__PURE__ */ s(l, { children: /* @__PURE__ */ s(u.Indicator, {
				className: "absolute inset-0 z-[2] flex items-center justify-center text-current transition-none",
				children: d ? /* @__PURE__ */ s(n, {
					icon: i,
					size: "sm"
				}) : /* @__PURE__ */ s(n, {
					icon: r,
					size: "sm"
				})
			}) })
		}), h.title && !p && /* @__PURE__ */ c("label", {
			htmlFor: v,
			className: e("flex items-center justify-center pl-2.5 text-current hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50", f && "cursor-not-allowed opacity-50 hover:cursor-not-allowed"),
			children: [h.title, m && /* @__PURE__ */ s("span", {
				className: "ml-0.5 text-f1-foreground-critical",
				children: "*"
			})]
		})]
	});
});
d.displayName = u.Root.displayName;
//#endregion
export { d as Checkbox };
