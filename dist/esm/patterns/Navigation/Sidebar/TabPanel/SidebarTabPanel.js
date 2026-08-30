import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import { useReducedMotion as r } from "../../../../lib/a11y.js";
import i from "../../../../icons/app/Search.js";
import { fuzzyMatch as a } from "../../../../lib/fuzzyMatch.js";
import { SidebarCollapsibleSection as o } from "../CollapsibleSection/index.js";
import { Fragment as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { AnimatePresence as d, LayoutGroup as f, motion as p } from "motion/react";
//#region src/patterns/Navigation/Sidebar/TabPanel/SidebarTabPanel.tsx
var m = ({ value: t, onChange: r, placeholder: a }) => /* @__PURE__ */ u("div", {
	className: e("flex w-full -mt-px items-center gap-1 rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-colors hover:ring-f1-border-hover dark:bg-f1-background-tertiary", "focus-within:outline-none focus-within:ring-f1-special-ring"),
	children: [/* @__PURE__ */ l(n, {
		icon: i,
		size: "md"
	}), /* @__PURE__ */ l("input", {
		type: "search",
		value: t,
		onChange: (e) => r(e.target.value),
		placeholder: a,
		"aria-label": a,
		className: "w-full bg-transparent text-f1-foreground outline-none placeholder:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:appearance-none"
	})]
}), h = ({ action: r }) => /* @__PURE__ */ u("button", {
	type: "button",
	onClick: r.onClick,
	className: e("flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary", t("focus-visible:ring-inset")),
	children: [r.icon && /* @__PURE__ */ l(n, {
		icon: r.icon,
		size: "md",
		className: "text-f1-icon"
	}), /* @__PURE__ */ l("span", {
		className: "line-clamp-1",
		children: r.label
	})]
}), g = ({ groups: t, actions: n, searchPlaceholder: i, loading: g = !1, skeleton: _, emptyState: v, noResultsLabel: y, animateItems: b = !0, className: x }) => {
	let S = r(), [C, w] = c(""), T = i !== void 0 && C.trim().length > 0, E = t.some((e) => e.items.length > 0), D = g && !E, O = t.map((e) => ({
		...e,
		items: T ? e.items.filter((e) => a(C, e.searchText ?? "")) : e.items
	})).filter((e) => e.items.length > 0), k = T && E && O.length === 0;
	return /* @__PURE__ */ u("div", {
		className: e("flex w-full flex-col gap-4 px-3", x),
		"data-sidebar-tab-panel-searching": T,
		children: [
			i !== void 0 && /* @__PURE__ */ l(m, {
				value: C,
				onChange: w,
				placeholder: i
			}),
			n && n.length > 0 && /* @__PURE__ */ l("div", {
				className: "flex flex-col gap-0.5",
				children: n.map((e) => {
					let t = /* @__PURE__ */ l(h, { action: e });
					return /* @__PURE__ */ l(s, { children: e.render ? e.render(t) : t }, e.label);
				})
			}),
			D && _,
			!D && !E && v,
			k && /* @__PURE__ */ l("p", {
				className: "px-1.5 py-2 text-base text-f1-foreground-secondary",
				children: y
			}),
			!D && (b ? /* @__PURE__ */ l(f, { children: /* @__PURE__ */ l(d, {
				mode: "popLayout",
				initial: !1,
				children: O.map((e) => /* @__PURE__ */ l(p.div, {
					"data-sidebar-panel-group-id": e.id,
					layout: "position",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: S ? { duration: 0 } : {
						layout: {
							type: "spring",
							stiffness: 520,
							damping: 40
						},
						opacity: {
							duration: .16,
							ease: [
								.16,
								1,
								.3,
								1
							]
						}
					},
					children: /* @__PURE__ */ l(o, {
						title: e.title ?? "",
						isRoot: e.title === void 0,
						isOpen: T ? !0 : e.isOpen,
						highlightWhenCollapsed: e.highlightWhenCollapsed,
						collapsedBadge: e.collapsedBadge,
						children: /* @__PURE__ */ l(d, {
							mode: "popLayout",
							initial: !1,
							children: e.items.map((e) => /* @__PURE__ */ l(p.div, {
								layout: "position",
								layoutId: `sidebar-row-${e.id}`,
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								transition: S ? { duration: 0 } : {
									layout: {
										type: "spring",
										stiffness: 560,
										damping: 42,
										mass: .9
									},
									opacity: {
										duration: .14,
										ease: [
											.16,
											1,
											.3,
											1
										]
									}
								},
								children: e.content
							}, e.id))
						})
					})
				}, `${e.id}-${T}`))
			}) }) : O.map((e) => /* @__PURE__ */ l("div", {
				"data-sidebar-panel-group-id": e.id,
				children: /* @__PURE__ */ l(o, {
					title: e.title ?? "",
					isRoot: e.title === void 0,
					isOpen: T ? !0 : e.isOpen,
					highlightWhenCollapsed: e.highlightWhenCollapsed,
					collapsedBadge: e.collapsedBadge,
					children: e.items.map((e) => /* @__PURE__ */ l(s, { children: e.content }, e.id))
				})
			}, `${e.id}-${T}`)))
		]
	});
};
//#endregion
export { g as SidebarTabPanel };
