import { useReducedMotion as e } from "../../../lib/a11y.js";
import { INSTANT_TRANSITION as t, genieCloseTransition as n, genieOpenTransition as r, geniePanelGlideTransition as i, railWidthTransition as a, useDelayedTrue as o } from "../home-motion.js";
import { useEffect as s, useLayoutEffect as c, useState as l } from "react";
import { animate as u, useMotionValue as d, useTransform as f } from "motion/react";
//#region src/sds/Home/NewHomeLayout/useRailMotion.ts
var p = ({ collapsed: p, open: m, glide: h, drawn: g, width: _ }) => {
	let v = e(), [y, b] = l(!1);
	s(() => {
		g && b(!0);
	}, [g]);
	let x = y && !v, S = o(p, x ? 180 : 0), C = p ? S || m ? "panel" : "retracting" : "column", w = C === "panel", T = !w || m, E = d(_), D = f(E, (e) => `${e}px`);
	return c(() => {
		if (!g) return;
		if (!x) {
			E.jump(_);
			return;
		}
		let e = u(E, _, a);
		return () => e.stop();
	}, [
		g,
		x,
		_,
		E
	]), {
		mode: C,
		bodyOut: T,
		widthPx: D,
		panelHidden: o(!m, v ? 0 : 140),
		transition: !x || !w ? t : {
			...m ? r : n,
			y: h ? i : t
		},
		glyphDelayMs: y ? 90 : 220
	};
};
//#endregion
export { p as useRailMotion };
