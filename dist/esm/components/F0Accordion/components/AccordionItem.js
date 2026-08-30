import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { useReducedMotion as n } from "../../../lib/a11y.js";
import r from "../../../icons/app/ChevronDown.js";
import i from "../../../icons/app/ChevronUp.js";
import { useI18n as a } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as o } from "../../F0Button/F0Button.js";
import { Collapsible as s, CollapsibleContent as c, CollapsibleTrigger as l } from "../../../ui/collapsible.js";
import { AccordionActions as u } from "./AccordionActions.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { AnimatePresence as p, motion as m } from "motion/react";
//#region src/components/F0Accordion/components/AccordionItem.tsx
var h = ({ item: h, open: g, onOpenChange: _ }) => {
	let v = n(), y = a().t(g ? "actions.collapseItem" : "actions.expandItem", { title: h.title }), b = !!h.actions && h.actions.length > 0;
	return /* @__PURE__ */ d(s, {
		open: g,
		onOpenChange: _,
		asChild: !0,
		children: /* @__PURE__ */ f("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ f("div", {
				className: "flex items-center",
				children: [/* @__PURE__ */ d(l, {
					asChild: !0,
					children: /* @__PURE__ */ d("button", {
						type: "button",
						className: e("flex flex-1 min-w-0 items-center py-3 pl-4 pr-2 text-left", t()),
						children: /* @__PURE__ */ d("span", {
							className: "flex-1 truncate font-medium text-f1-foreground",
							children: h.title
						})
					})
				}), /* @__PURE__ */ f("div", {
					className: "flex items-center gap-2 py-3 pl-2 pr-4",
					children: [b && /* @__PURE__ */ d(u, { actions: h.actions }), /* @__PURE__ */ d(l, {
						asChild: !0,
						children: /* @__PURE__ */ d(o, {
							variant: "outline",
							size: "sm",
							icon: g ? i : r,
							label: y,
							hideLabel: !0
						})
					})]
				})]
			}), /* @__PURE__ */ d(p, {
				initial: !1,
				children: g && /* @__PURE__ */ d(m.div, {
					initial: {
						height: 0,
						opacity: 0
					},
					animate: {
						height: "auto",
						opacity: 1
					},
					exit: {
						height: 0,
						opacity: 0
					},
					transition: { duration: v ? 0 : .2 },
					className: "overflow-hidden",
					children: /* @__PURE__ */ d(c, {
						forceMount: !0,
						asChild: !0,
						children: /* @__PURE__ */ d("div", {
							className: "px-4 pb-4 text-f1-foreground-secondary",
							children: h.description
						})
					})
				})
			})]
		})
	});
};
//#endregion
export { h as AccordionItem };
