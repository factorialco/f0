import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/ChevronRight.js";
import { useReducedMotion as r } from "../../../../lib/a11y.js";
import { Collapsible as i, CollapsibleContent as a, CollapsibleTrigger as o } from "../../../../ui/collapsible.js";
import { useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { motion as u } from "motion/react";
//#region src/kits/ai/F0AiMessagesContainer/components/CollapsibleMessage.tsx
var d = ({ icon: d, title: f, children: p, open: m, defaultOpen: h = !1, onOpenChange: g, lockOpen: _ = !1 }) => {
	let [v, y] = s(h), b = r(), x = m !== void 0, S = x ? m : v;
	return /* @__PURE__ */ l(i, {
		className: "mb-1 w-full",
		open: S,
		onOpenChange: (e) => {
			_ || (x || y(e), g?.(e));
		},
		children: [/* @__PURE__ */ l(o, {
			disabled: _,
			className: e("gap-1", _ ? "flex w-full items-center text-base text-f1-foreground-secondary" : "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90"),
			children: [
				/* @__PURE__ */ c("span", {
					className: "flex items-center justify-start h-6 w-6",
					children: /* @__PURE__ */ c(t, {
						icon: d,
						className: "block"
					})
				}),
				/* @__PURE__ */ c("div", {
					className: "min-h-6 flex items-center",
					children: /* @__PURE__ */ c("span", { children: f })
				}),
				!_ && /* @__PURE__ */ c(t, { icon: n })
			]
		}), /* @__PURE__ */ c(a, {
			forceMount: !0,
			className: "data-[state=open]:mt-3",
			children: /* @__PURE__ */ c(u.div, {
				initial: !1,
				animate: {
					height: S ? "auto" : 0,
					opacity: +!!S,
					visibility: S ? "visible" : "hidden"
				},
				transition: {
					duration: b ? 0 : .15,
					ease: [
						.165,
						.84,
						.44,
						1
					]
				},
				className: "flex flex-col gap-2",
				children: p
			})
		})]
	});
};
//#endregion
export { d as CollapsibleMessage };
