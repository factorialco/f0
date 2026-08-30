import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n } from "../../lib/utils.js";
import { OneEllipsis as r } from "../../lib/OneEllipsis/OneEllipsis.js";
import i from "../../icons/app/CrossedCircle.js";
import a from "../../icons/app/Ellipsis.js";
import { F0Button as o } from "../F0Button/F0Button.js";
import { F0AvatarFile as s } from "../avatars/F0AvatarFile/F0AvatarFile.js";
import { DropdownInternal as c } from "../../experimental/Navigation/Dropdown/internal.js";
import { forwardRef as l } from "react";
import { cva as u } from "cva";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/F0FileItem/F0FileItem.tsx
var p = ["md", "lg"], m = u({
	base: "flex w-fit flex-row items-center overflow-hidden bg-f1-background-tertiary rounded-[10px]",
	variants: { size: {
		md: "max-w-48 gap-2 py-0.5 pl-0.5 pr-1.5",
		lg: "max-w-56 gap-2.5 p-1"
	} },
	defaultVariants: { size: "md" }
}), h = {
	md: "md",
	lg: "md"
}, g = {
	md: "sm",
	lg: "md"
}, _ = l(({ file: e, actions: t = [], disabled: l = !1, size: u = "md", className: p, ..._ }, v) => {
	let y = t.length > 0, b = t.length === 1 ? t[0] : null, x = t.map((e) => ({
		label: e.label,
		icon: e.icon,
		critical: e.critical,
		onClick: l ? void 0 : e.onClick
	}));
	return /* @__PURE__ */ f("div", {
		ref: v,
		className: n(m({ size: u }), p),
		..._,
		children: [
			/* @__PURE__ */ d(s, {
				file: e,
				size: h[u]
			}),
			/* @__PURE__ */ d(r, {
				className: n("text-neutral-1000 grow text-sm font-medium", !y && "pr-3"),
				children: e.name
			}),
			y && (b ? /* @__PURE__ */ d(o, {
				label: b.label,
				size: g[u],
				icon: b.icon ?? i,
				disabled: l,
				onClick: l ? void 0 : b.onClick,
				hideLabel: !0,
				variant: "ghost"
			}) : /* @__PURE__ */ d(c, {
				items: x,
				icon: a,
				size: g[u]
			}))
		]
	});
});
_.displayName = "F0FileItem";
var v = t("F0FileItem", e(_)), y = v;
//#endregion
export { v as F0FileItem, y as FileItem, p as f0FileItemSizes };
