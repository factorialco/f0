import { F0Icon as e } from "../../../../components/F0Icon/index.js";
import t from "../../../../icons/app/ChevronRight.js";
import { useReducedMotion as n } from "../../../../lib/a11y.js";
import { Collapsible as r, CollapsibleContent as i, CollapsibleTrigger as a } from "../../../../ui/collapsible.js";
import { useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { motion as l } from "motion/react";
//#region src/kits/ai/F0AiMessageSources/components/CollapsibleMessage.tsx
var u = ({ icon: u, title: d, children: f }) => {
	let [p, m] = o(!1), h = n();
	return /* @__PURE__ */ c(r, {
		className: "mb-1 w-full",
		open: p,
		onOpenChange: m,
		children: [/* @__PURE__ */ c(a, {
			className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90",
			children: [
				/* @__PURE__ */ s("span", {
					className: "mr-2 *:block",
					children: /* @__PURE__ */ s(e, {
						icon: u,
						className: "block"
					})
				}),
				/* @__PURE__ */ s("span", {
					className: "mr-[2px]",
					children: d
				}),
				/* @__PURE__ */ s(e, {
					icon: t,
					className: "h-4 w-4 transition-transform duration-200"
				})
			]
		}), /* @__PURE__ */ s(i, {
			forceMount: !0,
			className: "data-[state=open]:mt-3",
			children: /* @__PURE__ */ s(l.div, {
				initial: !1,
				animate: {
					height: p ? "auto" : 0,
					opacity: +!!p,
					visibility: p ? "visible" : "hidden"
				},
				transition: {
					duration: h ? 0 : .15,
					ease: [
						.165,
						.84,
						.44,
						1
					]
				},
				className: "flex flex-col gap-2",
				children: f
			})
		})]
	});
};
//#endregion
export { u as CollapsibleMessage };
