import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/ArrowUp.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../components/F0Button/internal.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { motion as o } from "motion/react";
//#region src/experimental/AiPromotionChat/components/ChatTextarea.tsx
var s = () => {
	let s = n();
	return /* @__PURE__ */ a(o.div, {
		className: e("relative isolate m-3 mt-2 flex flex-col gap-3 rounded-lg border border-solid border-f1-border", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-[inherit] after:bg-f1-foreground-secondary after:opacity-0 after:blur-[5px] after:content-['']", "from-[#E55619] via-[#A1ADE5] to-[#E51943] after:scale-90 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "after:transition-all after:delay-200 after:duration-300", "after:[animation:rotate-gradient_6s_linear_infinite] motion-reduce:after:[animation:none]", "before:bg-white before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:content-['']"),
		children: [/* @__PURE__ */ i("div", {
			className: "grid grid-cols-1 grid-rows-1",
			children: /* @__PURE__ */ i("textarea", {
				disabled: !0,
				name: "one-ai-input",
				placeholder: s.ai.inputPlaceholder,
				className: e("col-start-1 row-start-1", "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all", "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary", "cursor-not-allowed opacity-60")
			})
		}), /* @__PURE__ */ i("div", {
			className: "flex flex-row-reverse p-3 pt-0",
			children: /* @__PURE__ */ i(r, {
				type: "button",
				disabled: !0,
				variant: "neutral",
				label: s.ai.sendMessage,
				icon: t,
				hideLabel: !0
			})
		})]
	});
};
//#endregion
export { s as ChatTextarea };
