import { cn as e, focusRing as t } from "../../lib/utils.js";
import { Tooltip as n, TooltipContent as r, TooltipProvider as i, TooltipTrigger as a } from "../../ui/tooltip.js";
import { useI18n as o } from "../../lib/providers/i18n/i18n-provider.js";
import { useAiPromotionChat as s } from "./providers/AiPromotionChatStateProvider.js";
import c from "./OneIcon.js";
import { useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import * as f from "@radix-ui/react-switch";
//#region src/experimental/AiPromotionChat/OneSwitch.tsx
var p = ({ className: p, disabled: m }) => {
	let { enabled: h, setOpen: g, open: _ } = s(), v = o(), [y, b] = l(!1);
	return h ? /* @__PURE__ */ u("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ u(i, { children: /* @__PURE__ */ d(n, {
			delayDuration: 850,
			disableHoverableContent: !0,
			children: [/* @__PURE__ */ u(a, {
				asChild: !0,
				children: /* @__PURE__ */ u("div", { children: /* @__PURE__ */ u(f.Root, {
					onCheckedChange: (e) => {
						g(e);
					},
					checked: _,
					"aria-label": _ ? v.ai.closeChat : v.ai.openChat,
					className: e("group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover", "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]", "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse", "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100", "before:[animation:rotate-gradient_8s_linear_infinite_paused] data-[state=checked]:before:[animation:rotate-gradient_8s_linear_infinite_running] motion-reduce:before:[animation:none]", m && "cursor-not-allowed opacity-50", t(), p),
					disabled: m,
					onMouseEnter: () => b(!0),
					onMouseLeave: () => b(!1),
					children: /* @__PURE__ */ u(f.Thumb, {
						className: e("block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"),
						style: { transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)" },
						children: /* @__PURE__ */ u("div", { children: /* @__PURE__ */ u(c, {
							size: "sm",
							background: _ ? "white" : void 0,
							hover: y
						}) })
					})
				}) })
			}), !_ && /* @__PURE__ */ u(r, {
				side: "left",
				className: "font-medium",
				children: v.ai.welcome
			})]
		}) })
	}) : null;
};
//#endregion
export { p as OneSwitch };
