import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import { useReducedMotion as n } from "../../../lib/a11y.js";
import { OneEllipsis as r } from "../../../lib/OneEllipsis/OneEllipsis.js";
import i from "../../../icons/app/ChevronDown.js";
import a from "../../../icons/app/Cross.js";
import o from "../../../icons/app/Maximize.js";
import s from "../../../icons/app/Minimize.js";
import c from "../../../icons/app/New.js";
import { useI18n as l } from "../../../lib/providers/i18n/i18n-provider.js";
import { Action as u } from "../../../ui/Action/Action.js";
import { ButtonInternal as d } from "../../../components/F0Button/internal.js";
import { CreditsPopover as f } from "./components/CreditsPopover.js";
import { EmployeeCreditsPopover as p } from "./components/EmployeeCreditsPopover.js";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { motion as g } from "motion/react";
import { useMediaQuery as _ } from "usehooks-ts";
import { breakpoints as v } from "@factorialco/f0-core";
//#region src/kits/ai/F0AiChatHeader/F0AiChatHeader.tsx
var y = ({ credits: e, employeeCredits: t, trigger: n }) => t ? /* @__PURE__ */ m(p, {
	employeeCredits: t,
	trigger: n
}) : e ? /* @__PURE__ */ m(f, {
	credits: e,
	trigger: n
}) : null, b = y, x = ({ historyEnabled: f = !1, title: p, currentThreadTitle: b, fullscreen: x = !1, lockVisualizationMode: S = !1, onToggleVisualizationMode: C, onClose: w, onNewChat: T, onOpenHistory: E, hasMessages: D = !1, credits: O, employeeCredits: k, compact: A = !1, actions: j }) => {
	let M = l(), N = n(), P = _(`(max-width: ${v.md}px)`, { initializeWithValue: !0 }), F = !S && !P && /* @__PURE__ */ m(d, {
		variant: "ghost",
		hideLabel: !0,
		label: x ? M.ai.collapseChat : M.ai.expandChat,
		icon: x ? s : o,
		onClick: C
	}), I = /* @__PURE__ */ m(d, {
		variant: "ghost",
		hideLabel: !0,
		label: M.ai.closeChat,
		icon: a,
		onClick: w
	}), L = j?.map((e) => /* @__PURE__ */ m(d, {
		variant: "ghost",
		hideLabel: !0,
		label: e.label,
		icon: e.icon,
		type: "button",
		onClick: e.onClick
	}, e.id));
	return A ? /* @__PURE__ */ h("header", {
		className: e("flex items-center justify-between gap-3 pr-4 pl-5 py-3"),
		children: [/* @__PURE__ */ m(r, {
			lines: 1,
			className: "min-w-0 flex-1 text-left font-semibold text-f1-foreground",
			children: b ?? M.ai.newConversation
		}), /* @__PURE__ */ h(g.div, {
			className: "flex shrink-0 items-center",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			transition: {
				duration: N ? 0 : .2,
				ease: "easeOut"
			},
			children: [
				L,
				F,
				I
			]
		})]
	}) : f ? /* @__PURE__ */ h("header", {
		className: e("flex justify-between pl-2.5 pr-3 py-3 w-full overflow-hidden gap-3"),
		children: [/* @__PURE__ */ m("div", {
			className: "flex min-w-0 flex-1 items-center",
			children: !S && /* @__PURE__ */ m(u, {
				variant: "ghost",
				size: "md",
				className: "min-w-0 max-w-full [&>div>span>span]:w-full",
				onClick: E,
				children: /* @__PURE__ */ h("div", {
					className: "flex min-w-0 items-center gap-1",
					children: [/* @__PURE__ */ m(r, {
						lines: 1,
						className: "min-w-0 text-left",
						children: b ?? M.ai.newConversation
					}), /* @__PURE__ */ m(t, {
						icon: i,
						color: "default",
						size: "md"
					})]
				})
			})
		}), /* @__PURE__ */ h(g.div, {
			className: "flex shrink-0 items-center",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			transition: {
				duration: N ? 0 : .2,
				ease: "easeOut"
			},
			children: [
				/* @__PURE__ */ m(y, {
					credits: O,
					employeeCredits: k
				}),
				L,
				F,
				I
			]
		})]
	}) : /* @__PURE__ */ h("header", {
		className: e("flex justify-between px-4 py-3"),
		children: [/* @__PURE__ */ m("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ m("h2", {
				className: "text-f1-foreground",
				children: p ?? ""
			})
		}), /* @__PURE__ */ h(g.div, {
			className: "flex items-center",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			transition: {
				duration: N ? 0 : .2,
				ease: "easeOut"
			},
			children: [
				D && !S && /* @__PURE__ */ m(d, {
					variant: "ghost",
					hideLabel: !0,
					label: M.ai.startNewChat,
					icon: c,
					onClick: T
				}),
				/* @__PURE__ */ m(y, {
					credits: O,
					employeeCredits: k
				}),
				L,
				F,
				I
			]
		})]
	});
};
//#endregion
export { b as F0AiChatCreditsButton, x as F0AiChatHeader };
