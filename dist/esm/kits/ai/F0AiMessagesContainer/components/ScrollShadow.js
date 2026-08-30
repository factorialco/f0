import { cn as e } from "../../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
import { motion as n } from "motion/react";
//#region src/kits/ai/F0AiMessagesContainer/components/ScrollShadow.tsx
var r = ({ position: r }) => /* @__PURE__ */ t(n.div, {
	transition: {
		duration: .2,
		ease: "easeOut"
	},
	className: e("pointer-events-none absolute inset-x-px z-[5] after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-f1-background-inverse-secondary after:opacity-[0.04] after:content-['']", r === "top" ? [
		"top-0",
		"h-6",
		"bg-gradient-to-b from-f1-background dark:from-f1-background-secondary to-transparent",
		"after:top-0"
	] : [
		"bottom-0",
		"h-6",
		"bg-gradient-to-t from-f1-background dark:from-f1-background-secondary to-transparent",
		"after:bottom-0"
	])
});
//#endregion
export { r as ScrollShadow };
