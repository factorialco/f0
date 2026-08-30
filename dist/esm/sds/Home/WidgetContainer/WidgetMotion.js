import { cn as e } from "../../../lib/utils.js";
import { useReducedMotion as t } from "../../../lib/a11y.js";
import { GENIE_ORIGIN as n, INSTANT_TRANSITION as r, entranceTransition as i, stowInTransition as a, stowOutTransition as o } from "../home-motion.js";
import { useLayoutEffect as s, useRef as c, useState as l } from "react";
import { jsx as u } from "react/jsx-runtime";
import { motion as d } from "motion/react";
//#region src/sds/Home/WidgetContainer/WidgetMotion.tsx
var f = ({ arrival: f, stow: p, fullHeight: m, children: h }) => {
	let g = t(), _ = c(null), [v, y] = l(0), b = p?.stowed ?? !1, x = f?.order ?? 0;
	s(() => {
		if (!p?.stowed) return;
		let e = _.current;
		e?.offsetParent && y(x * p.pitch - e.offsetTop);
	}, [
		p?.stowed,
		p?.pitch,
		x
	]);
	let S = g ? r : f?.arriving ? i(x, f.delayMs) : !p || p.instant ? r : b ? a : o;
	return /* @__PURE__ */ u(d.div, {
		ref: _,
		className: e(m && "h-full"),
		style: { transformOrigin: n },
		initial: f?.arriving ? {
			opacity: 0,
			y: g ? 0 : 10
		} : !1,
		animate: {
			opacity: +!b,
			y: b ? v : 0,
			scale: b ? p?.scale ?? 1 : 1
		},
		transition: S,
		children: h
	});
};
//#endregion
export { f as WidgetMotion };
