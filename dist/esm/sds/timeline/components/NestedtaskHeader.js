import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import r from "../../../icons/app/ChevronDown.js";
import i from "../../../icons/app/ChevronUp.js";
import { F0AvatarIcon as a } from "../../../components/avatars/F0AvatarIcon/F0AvatarIcon.js";
import { Progress as o } from "../../../ui/progress.js";
import { F0Text as s } from "../../../components/F0Text/F0Text.js";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/sds/timeline/components/NestedtaskHeader.tsx
var d = ({ props: d, contentId: f }) => {
	let { status: p, icon: m, title: h, description: g, taskCount: _, completedCount: v, expanded: y, onExpandToggle: b, items: x, content: S, collapsible: C = !0 } = d, w = ((x?.length ?? 0) > 0 || S !== void 0) && C;
	return /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l(a, {
		icon: m,
		size: "sm"
	}), /* @__PURE__ */ u("div", {
		className: "flex flex-1 items-center justify-between",
		children: [w ? /* @__PURE__ */ u("button", {
			type: "button",
			"aria-expanded": y,
			"aria-controls": f,
			onClick: b,
			className: e("pointer-events-auto flex items-center gap-3 rounded-sm", t()),
			children: [
				/* @__PURE__ */ l("span", {
					className: e("text-base font-semibold text-f1-foreground whitespace-nowrap", p === "completed" && "line-through"),
					children: h
				}),
				g && /* @__PURE__ */ l(s, {
					content: g,
					variant: "description",
					as: "span"
				}),
				/* @__PURE__ */ l(n, {
					icon: y ? i : r,
					size: "xs",
					color: "secondary"
				})
			]
		}) : /* @__PURE__ */ u("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ l("span", {
				className: e("text-base font-semibold text-f1-foreground whitespace-nowrap", p === "completed" && "line-through"),
				children: h
			}), g && /* @__PURE__ */ l(s, {
				content: g,
				variant: "description",
				as: "span"
			})]
		}), v !== void 0 && _ !== void 0 && /* @__PURE__ */ u("div", {
			className: "flex items-center gap-2",
			"aria-label": `${v} of ${_} completed`,
			children: [/* @__PURE__ */ l(o, {
				value: _ > 0 ? v / _ * 100 : 0,
				color: p === "completed" ? "hsl(var(--positive-50))" : "hsl(var(--warning-50))",
				className: "h-1.5 w-20"
			}), /* @__PURE__ */ u("span", {
				className: "text-sm font-medium text-f1-foreground whitespace-nowrap",
				children: [
					v,
					"/",
					_
				]
			})]
		})]
	})] });
};
//#endregion
export { d as NestedtaskHeader };
