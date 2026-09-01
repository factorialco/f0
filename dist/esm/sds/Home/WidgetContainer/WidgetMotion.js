import { cn as e } from "../../../lib/utils.js";
import { useReducedMotion as t } from "../../../lib/a11y.js";
import { INSTANT_TRANSITION as n, entranceTransition as r, stowInTransition as i, stowOutTransition as a } from "../home-motion.js";
import { jsx as o } from "react/jsx-runtime";
import { motion as s } from "motion/react";
//#region src/sds/Home/WidgetContainer/WidgetMotion.tsx
var c = ({ arrival: c, stow: l, fullHeight: u, children: d }) => {
	let f = t(), p = l?.stowed ?? !1, m = c?.order ?? 0, h = f ? n : c?.arriving ? r(m, c.delayMs) : !l || l.instant ? n : p ? i : a;
	return /* @__PURE__ */ o(s.div, {
		className: e(u && "h-full"),
		initial: c?.arriving ? {
			opacity: 0,
			y: f ? 0 : 10
		} : !1,
		animate: {
			opacity: +!p,
			y: 0
		},
		transition: h,
		children: d
	});
};
//#endregion
export { c as WidgetMotion };
