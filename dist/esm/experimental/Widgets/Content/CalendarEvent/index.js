import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/ChevronRight.js";
import { Tooltip as r } from "../../../Overlays/Tooltip/index.js";
import { F0AvatarDate as i } from "../../../../components/avatars/F0AvatarDate/index.js";
import { F0TagRaw as a } from "../../../../components/tags/F0TagRaw/index.js";
import { forwardRef as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/CalendarEvent/index.tsx
var u = ({ tags: t, right: n }) => /* @__PURE__ */ c("div", {
	className: e("flex flex-1 flex-row items-center gap-1.5", n && "justify-end"),
	children: t.map((e) => {
		let t = /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(a, {
			icon: e.icon,
			text: e.label ?? (e.description || ""),
			onlyIcon: !0,
			additionalAccessibleText: `${e.label}: ${e.description}`
		}) });
		return e.label || e.description ? /* @__PURE__ */ c(r, {
			label: e.label,
			description: e.description,
			children: t
		}, e.label ?? e.description) : t;
	})
}), d = o(function({ label: e, title: r, subtitle: a, description: o, color: d, isPending: f, leftTags: p, rightTags: m, fromDate: h, toDate: g, noBackground: _ }, v) {
	return /* @__PURE__ */ l("div", {
		ref: v,
		className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
		children: [
			!_ && /* @__PURE__ */ l(s, { children: [/* @__PURE__ */ c("div", {
				className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
				style: { background: `${d}` }
			}), /* @__PURE__ */ c("div", {
				className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
				style: { background: `linear-gradient(to right, ${d}, transparent)` }
			})] }),
			/* @__PURE__ */ c("div", {
				className: "min-h-10 min-w-1 rounded-2xs",
				style: f ? { backgroundImage: `repeating-linear-gradient(
              135deg,
              ${d} 0px,
              ${d} 4px, 
              transparent 4px, 
              transparent 5.5px
            )` } : { backgroundColor: d }
			}),
			/* @__PURE__ */ l("div", {
				className: "z-10 flex flex-1 flex-col gap-2",
				children: [/* @__PURE__ */ l("div", {
					className: "flex flex-row items-start gap-2.5",
					children: [/* @__PURE__ */ l("div", {
						className: "flex flex-1 flex-col gap-0.5",
						children: [
							!!e && /* @__PURE__ */ c("p", {
								className: "line-clamp-1 text-sm text-f1-foreground-secondary",
								children: e
							}),
							/* @__PURE__ */ l("p", {
								className: "line-clamp-3 font-medium text-f1-foreground",
								children: [r, !!a && /* @__PURE__ */ c("span", {
									className: "pl-1 font-normal text-f1-foreground-secondary",
									children: `· ${a}`
								})]
							}),
							/* @__PURE__ */ c("p", {
								className: "text-f1-foreground-secondary",
								children: o
							})
						]
					}), /* @__PURE__ */ l("div", {
						className: "flex flex-row items-center",
						children: [h && /* @__PURE__ */ l(s, { children: [/* @__PURE__ */ c(i, { date: h }), /* @__PURE__ */ c(t, {
							icon: n,
							size: "sm",
							className: "text-f1-foreground-tertiary"
						})] }), g && /* @__PURE__ */ c(i, { date: g })]
					})]
				}), (p || m) && /* @__PURE__ */ l("div", {
					className: "flex flex-row items-center justify-between",
					children: [p && /* @__PURE__ */ c(u, { tags: p }), m && /* @__PURE__ */ c(u, {
						tags: m,
						right: !0
					})]
				})]
			})
		]
	});
});
//#endregion
export { d as CalendarEvent };
