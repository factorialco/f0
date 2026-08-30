import { cn as e } from "../../../lib/utils.js";
import { useReducedMotion as t } from "../../../lib/a11y.js";
import { jsx as n } from "react/jsx-runtime";
import { AnimatePresence as r, motion as i } from "motion/react";
//#region src/components/F0Slider/components/SliderTooltip.tsx
var a = ({ visible: a, content: o, style: s }) => {
	let c = t() ? 0 : .15;
	return /* @__PURE__ */ n(r, { children: a && /* @__PURE__ */ n(i.div, {
		initial: {
			opacity: 0,
			x: "-50%",
			y: 2
		},
		animate: {
			opacity: 1,
			x: "-50%",
			y: 0
		},
		exit: {
			opacity: 0,
			x: "-50%",
			y: 2
		},
		transition: { duration: c },
		style: s,
		className: e("pointer-events-none absolute bottom-full mb-2", "dark whitespace-nowrap rounded-md px-2 py-1", "border border-solid border-f1-border-secondary bg-f1-background", "text-sm font-medium text-f1-foreground-inverse"),
		role: "tooltip",
		children: o
	}) });
};
//#endregion
export { a as SliderTooltip };
