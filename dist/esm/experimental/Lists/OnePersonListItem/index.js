import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { F0Icon as r } from "../../../components/F0Icon/index.js";
import i from "../../../icons/app/InfoCircle.js";
import { Tooltip as a } from "../../Overlays/Tooltip/index.js";
import { Skeleton as o } from "../../../ui/skeleton.js";
import { F0Button as s } from "../../../components/F0Button/F0Button.js";
import { F0AvatarPerson as c } from "../../../components/avatars/F0AvatarPerson/index.js";
import { withSkeleton as l } from "../../../lib/skeleton.js";
import { F0TagDot as u } from "../../../components/tags/F0TagDot/index.js";
import { F0TagRaw as d } from "../../../components/tags/F0TagRaw/index.js";
import f from "react";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/experimental/Lists/OnePersonListItem/index.tsx
var g = f.forwardRef(({ person: e, onClick: t, ...o }, l) => /* @__PURE__ */ h("div", {
	ref: l,
	className: n("flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", o.withPointerCursor && "cursor-pointer"),
	onClick: () => {
		t();
	},
	children: [
		/* @__PURE__ */ m(c, {
			firstName: e.firstName,
			lastName: e.lastName,
			src: e.avatarUrl,
			badge: e.avatarBadge
		}),
		/* @__PURE__ */ h("div", {
			className: "flex flex-1 flex-col",
			children: [
				/* @__PURE__ */ h("div", {
					className: "flex flex-1 flex-row items-center gap-1",
					children: [/* @__PURE__ */ m("span", {
						className: "truncate font-medium",
						children: `${e.firstName} ${e.lastName}`
					}), o.info && /* @__PURE__ */ m(a, {
						label: o.info,
						children: /* @__PURE__ */ m(r, {
							icon: i,
							size: "sm",
							className: "text-f1-icon-secondary"
						})
					})]
				}),
				"bottomTags" in o && /* @__PURE__ */ m("div", {
					className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1",
					children: o.bottomTags.map((e, t) => /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m(d, { ...e }, e.text), t < o.bottomTags.length - 1 && /* @__PURE__ */ m("span", { children: "·" })] }))
				}),
				"description" in o && o.description && /* @__PURE__ */ m("p", {
					className: "truncate text-f1-foreground-secondary",
					children: o.description
				})
			]
		}),
		/* @__PURE__ */ h("div", {
			className: "flex flex-row items-center justify-between gap-2",
			children: ["rightTag" in o && o.rightTag && /* @__PURE__ */ m(u, { ...o.rightTag }), "actions" in o && /* @__PURE__ */ h("div", {
				className: "flex flex-1 flex-row items-center justify-end gap-2",
				children: [o.actions?.primary && /* @__PURE__ */ m(s, {
					variant: "outline",
					onClick: o.actions.primary.onClick,
					label: o.actions.primary.label,
					icon: o.actions.primary.icon
				}), o.actions?.secondary && /* @__PURE__ */ m(s, {
					variant: "outline",
					onClick: o.actions.secondary.onClick,
					label: "Secondary",
					icon: o.actions.secondary.icon,
					hideLabel: !0
				})]
			})]
		})
	]
})), _ = () => /* @__PURE__ */ h("div", {
	className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
	children: [/* @__PURE__ */ m(o, { className: "aspect-square w-8 rounded-full" }), /* @__PURE__ */ h("div", {
		className: "flex flex-1 flex-col gap-0.5",
		children: [/* @__PURE__ */ m(o, { className: "h-4" }), /* @__PURE__ */ m(o, { className: "h-4" })]
	})]
});
g.displayName = "OnePersonListItem";
var v = e(t("OnePersonListItem", l(g, _)));
//#endregion
export { v as OnePersonListItem };
