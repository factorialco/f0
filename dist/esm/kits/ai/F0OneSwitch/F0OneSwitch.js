import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { Tooltip as n, TooltipContent as r, TooltipProvider as i, TooltipTrigger as a } from "../../../ui/tooltip.js";
import { useI18n as o } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0OneIcon as s } from "../F0OneIcon/F0OneIcon.js";
import { useAiChatToggle as c } from "../F0AiChat/providers/useAiChatToggle.js";
import { useEffect as l, useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import * as p from "@radix-ui/react-switch";
//#region src/kits/ai/F0OneSwitch/F0OneSwitch.tsx
var m = ({ className: m, disabled: h, onVisible: g, tooltip: _, autoOpen: v = !1, onToggle: y }) => {
	let { enabled: b, setOpen: x, open: S } = c(), C = o(), [w, T] = u(!1), [E, D] = u(!1), [O, k] = u(v), A = h && _?.whenDisabled ? _?.whenDisabled : _?.whenEnabled ?? C.ai.welcome, j = v ? O : E;
	return l(() => {
		v && k(!0);
	}, [v]), l(() => {
		if (!v) return;
		let e = setTimeout(() => k(!1), 3e3);
		return () => clearTimeout(e);
	}, [v]), l(() => {
		g?.();
	}, [g]), b ? /* @__PURE__ */ d("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ d(i, { children: /* @__PURE__ */ f(n, {
			delayDuration: 850,
			disableHoverableContent: !0,
			open: !S && j,
			onOpenChange: v ? () => {} : D,
			children: [/* @__PURE__ */ d(a, {
				asChild: !0,
				children: /* @__PURE__ */ d("div", { children: /* @__PURE__ */ d(p.Root, {
					onCheckedChange: (e) => {
						x(e), y?.();
					},
					checked: S,
					"aria-label": S ? C.ai.closeChat : C.ai.openChat,
					className: e("group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover", "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]", "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse", "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100", "before:[animation:rotate-gradient_8s_linear_infinite_paused] data-[state=checked]:before:[animation:rotate-gradient_8s_linear_infinite_running] motion-reduce:before:[animation:none]", h && "cursor-not-allowed opacity-50", t(), m),
					disabled: h,
					onMouseEnter: () => T(!0),
					onMouseLeave: () => T(!1),
					children: /* @__PURE__ */ d(p.Thumb, {
						className: e("block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"),
						style: { transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)" },
						children: /* @__PURE__ */ d("div", { children: /* @__PURE__ */ d(s, {
							size: "sm",
							background: S ? "white" : void 0,
							hover: w
						}) })
					})
				}) })
			}), !S && /* @__PURE__ */ d(r, {
				side: "left",
				className: e("font-medium", v && "z-[100]"),
				children: A
			})]
		}) })
	}) : null;
};
//#endregion
export { m as F0OneSwitch };
