import { experimentalComponent as e } from "../../lib/experimental.js";
import { cn as t, focusRing as n } from "../../lib/utils.js";
import { F0Icon as r } from "../F0Icon/index.js";
import i from "../../icons/app/CrossedCircle.js";
import { F0Avatar as a } from "../avatars/F0Avatar/index.js";
import { useId as o } from "react";
import { cva as s } from "cva";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/OneChip/index.tsx
var d = s({
	base: "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 font-medium",
	variants: { variant: {
		default: "",
		selected: "border-f1-border-selected bg-f1-background-selected-secondary text-f1-foreground-selected"
	} },
	defaultVariants: { variant: "default" }
}), f = e("Chip", ({ deactivated: e, label: s, variant: f, onClick: p, onClose: m, avatar: h, icon: g }) => {
	let _ = o(), v = /* @__PURE__ */ u(c, { children: [h && /* @__PURE__ */ l(a, {
		avatar: h,
		size: "xs"
	}), /* @__PURE__ */ u("div", {
		className: "flex items-center gap-0.5",
		children: [g && /* @__PURE__ */ l(r, {
			icon: g,
			size: "sm",
			className: "text-f1-icon"
		}), /* @__PURE__ */ l("span", {
			id: m ? _ : void 0,
			className: e ? "text-f1-foreground/[0.61]" : void 0,
			children: s
		})]
	})] });
	return /* @__PURE__ */ u("div", {
		className: t(d({ variant: f }), m && "pr-1.5", h && "pl-0.5", h && h?.type !== "person" && "rounded-sm", g && !h && "pl-1.5"),
		children: [p ? /* @__PURE__ */ l("button", {
			type: "button",
			className: t("-m-0.5 flex min-w-0 cursor-pointer items-center gap-1 rounded-full border-0 bg-transparent p-0.5 font-inherit text-inherit", n()),
			onClick: p,
			children: v
		}) : v, m && /* @__PURE__ */ l("button", {
			type: "button",
			onClick: (e) => {
				e.stopPropagation(), m();
			},
			className: t("-m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full [&_svg]:text-f1-icon-secondary [&_svg]:transition-colors [&_svg]:hover:text-f1-icon [&_svg]:focus:text-f1-icon", f === "selected" && "[&_svg]:text-f1-icon-selected [&_svg]:hover:text-f1-icon-selected-hover [&_svg]:focus:text-f1-icon-selected-hover", n()),
			tabIndex: 0,
			"aria-label": "Close",
			"aria-describedby": _,
			children: /* @__PURE__ */ l(r, {
				icon: i,
				size: "sm"
			})
		})]
	});
});
//#endregion
export { f as Chip, d as chipVariants };
