import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import { useReducedMotion as r } from "../../../../lib/a11y.js";
import i from "../../../../icons/app/ChevronDown.js";
import { Collapsible as a, CollapsibleContent as o } from "../../../../ui/collapsible.js";
import { useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { motion as u } from "motion/react";
//#region src/patterns/Navigation/Sidebar/CollapsibleSection/index.tsx
var d = ({ title: d, isOpen: f = !0, isRoot: p, onCollapse: m, children: h, highlightWhenCollapsed: g, collapsedBadge: _, isDragging: v, wasDragging: y }) => {
	let [b, x] = s(f), S = r(), C = g && !b;
	return /* @__PURE__ */ c("div", {
		"data-sidebar-collapsible-open": b,
		children: /* @__PURE__ */ l(a, {
			open: b,
			children: [/* @__PURE__ */ c("div", {
				className: "group relative flex items-center",
				children: /* @__PURE__ */ l("button", {
					type: "button",
					className: e("group relative flex w-full select-none items-center gap-1 rounded p-1.5 pr-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary", t("focus-visible:ring-inset"), p && "hidden"),
					onClick: () => {
						if (v || y?.current) return;
						let e = !b;
						x(e), m?.(e);
					},
					"aria-expanded": b,
					tabIndex: 0,
					children: [
						/* @__PURE__ */ c("span", {
							className: e("transition-colors py-0.5", C && "font-[900] text-f1-foreground"),
							children: d
						}),
						/* @__PURE__ */ c(u.div, {
							initial: !1,
							animate: { rotate: b ? 0 : -90 },
							transition: { duration: S ? 0 : .1 },
							className: "flex h-3 w-3 items-center justify-center",
							children: /* @__PURE__ */ c(n, {
								icon: i,
								size: "xs"
							})
						}),
						!b && _ && /* @__PURE__ */ c("span", {
							className: "ml-auto",
							children: _
						})
					]
				})
			}), /* @__PURE__ */ c(o, {
				forceMount: !0,
				className: "mt-0.5 flex flex-col gap-1",
				children: /* @__PURE__ */ c(u.div, {
					initial: !1,
					animate: {
						height: b ? "auto" : 0,
						opacity: +!!b,
						visibility: b ? "visible" : "hidden"
					},
					transition: {
						duration: S ? 0 : .15,
						ease: [
							.165,
							.84,
							.44,
							1
						]
					},
					children: /* @__PURE__ */ c("div", {
						className: "flex flex-col gap-0.5",
						children: h
					})
				})
			})]
		})
	});
};
//#endregion
export { d as SidebarCollapsibleSection };
