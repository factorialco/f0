import { experimentalComponent as e } from "../../lib/experimental.js";
import { cn as t } from "../../lib/utils.js";
import { Tooltip as n, TooltipContent as r, TooltipProvider as i, TooltipTrigger as a } from "../tooltip.js";
import o from "../../icons/app/Pencil.js";
import { useI18n as s } from "../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as c } from "../skeleton.js";
import { Counter as l } from "../Counter/index.js";
import { F0Button as u } from "../../components/F0Button/F0Button.js";
import { Await as d } from "../../lib/Await/Await.js";
import { useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
import { AnimatePresence as h, motion as g } from "motion/react";
var _ = e("Preset", ({ label: e, number: _, onClick: v, selected: y, description: b, onEdit: x }) => {
	let S = s(), C = !!x, [w, T] = f(!1), E = /* @__PURE__ */ m(g.label, {
		layout: !0,
		transition: {
			duration: .15,
			ease: "easeOut"
		},
		onMouseEnter: C ? () => T(!0) : void 0,
		onMouseLeave: C ? () => T(!1) : void 0,
		className: t("group flex min-w-0 cursor-default appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all", v && "focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2", _ && "pr-1.5", v && "cursor-pointer hover:outline-f1-border-hover", y && "bg-f1-background-selected-secondary text-f1-foreground-selected outline-f1-border-selected hover:outline-f1-border-selected"),
		children: [
			/* @__PURE__ */ p("input", {
				type: "checkbox",
				className: "sr-only",
				checked: y,
				onChange: () => v?.()
			}),
			/* @__PURE__ */ p("span", {
				className: "min-w-0 truncate",
				children: e
			}),
			_ !== void 0 && /* @__PURE__ */ p(d, {
				resolve: _,
				fallback: /* @__PURE__ */ p(c, { className: "h-4 w-4" }),
				children: (e) => e !== void 0 && /* @__PURE__ */ p(l, {
					value: e,
					type: y ? "selected" : "default"
				})
			}),
			C && /* @__PURE__ */ p(h, {
				initial: !1,
				children: w && /* @__PURE__ */ p(g.span, {
					className: "-my-0.5 -ml-1.5 -mr-1 flex items-center gap-0.5 overflow-hidden",
					initial: {
						opacity: 0,
						width: 0
					},
					animate: {
						opacity: 1,
						width: "auto"
					},
					exit: {
						opacity: 0,
						width: 0
					},
					transition: {
						duration: .15,
						ease: "easeOut"
					},
					children: x && /* @__PURE__ */ p(u, {
						variant: "ghost",
						size: "sm",
						hideLabel: !0,
						label: S.actions.editPreset,
						icon: o,
						onClick: ((e) => (t) => {
							t.preventDefault(), t.stopPropagation(), e();
						})(x)
					})
				}, "preset-actions")
			})
		]
	});
	return b ? /* @__PURE__ */ p(i, {
		delayDuration: 400,
		children: /* @__PURE__ */ m(n, { children: [/* @__PURE__ */ p(a, {
			asChild: !0,
			children: E
		}), /* @__PURE__ */ p(r, {
			className: "max-w-xs",
			children: /* @__PURE__ */ p("p", {
				className: "font-normal",
				children: b
			})
		})] })
	}) : E;
});
//#endregion
export { _ as Preset };
