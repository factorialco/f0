import { cn as e } from "../../lib/utils.js";
import { useReducedMotion as t } from "../../lib/a11y.js";
import { useEffect as n, useRef as r, useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
import { AnimatePresence as o, motion as s } from "motion/react";
//#region src/sds/Home/home-motion.tsx
var c = [
	.05,
	.7,
	.1,
	1
], l = { duration: 0 }, u = (e, t = 0) => (t + Math.min(e * 55, 330)) / 1e3, d = (e, t = 0, n = !1) => n ? l : {
	duration: 320 / 1e3,
	ease: c,
	delay: u(e, t)
}, f = "top right", p = .9, m = 1.18, h = 1.3, g = .94, _ = {
	type: "spring",
	stiffness: 420,
	damping: 32,
	mass: .9
}, v = {
	duration: 140 / 1e3,
	ease: "easeIn"
}, y = {
	type: "spring",
	stiffness: 420,
	damping: 26,
	mass: .7
}, b = {
	type: "spring",
	stiffness: 520,
	damping: 38,
	mass: .8
}, x = {
	duration: 180 / 1e3,
	ease: "easeIn"
}, S = _, C = {
	duration: .28,
	ease: c
}, w = (e, t) => t ? l : e, T = (e, t) => {
	let [r, a] = i(e);
	return n(() => {
		if (!e) {
			a(!1);
			return;
		}
		if (t <= 0) {
			a(!0);
			return;
		}
		let n = setTimeout(() => a(!0), t);
		return () => clearTimeout(n);
	}, [e, t]), r;
}, E = (e) => {
	let [t, r] = i(e <= 0);
	return n(() => {
		if (e <= 0) {
			r(!0);
			return;
		}
		let t = setTimeout(() => r(!0), e);
		return () => clearTimeout(t);
	}, [e]), t;
}, D = (e = 0) => e + 330 + 320, O = {
	duration: 220 / 1e3,
	ease: c
}, k = {
	duration: 140 / 1e3,
	ease: "easeIn"
}, A = {
	type: "spring",
	stiffness: 520,
	damping: 40,
	mass: .8
}, j = (e, t = 4) => {
	let i = r(e), a = Math.abs(e - i.current) > t;
	return n(() => {
		i.current = e;
	}), a;
}, M = ({ children: e }) => /* @__PURE__ */ a(o, {
	initial: !1,
	children: e
}), N = ({ className: e, animated: n = !0, children: r }) => {
	let i = t() || !n;
	return /* @__PURE__ */ a(s.div, {
		className: e,
		style: { overflow: "hidden" },
		initial: !i && {
			opacity: 0,
			height: 0,
			y: 5
		},
		animate: {
			opacity: 1,
			height: "auto",
			y: 0
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				...w(k, i),
				height: w(A, i)
			}
		},
		transition: {
			...w(O, i),
			height: w(A, i)
		},
		children: r
	});
}, P = ({ order: n = 0, delayMs: r = 0, arriving: i = !0, fullHeight: o, className: c, children: l }) => {
	let u = t();
	return /* @__PURE__ */ a(s.div, {
		className: e(o && "h-full", c),
		initial: i ? {
			opacity: 0,
			y: u ? 0 : 10
		} : !1,
		animate: {
			opacity: 1,
			y: 0
		},
		transition: d(n, r, u),
		children: l
	});
};
//#endregion
export { m as GENIE_GLYPH_ENTER_SCALE, h as GENIE_GLYPH_EXIT_SCALE, g as GENIE_GLYPH_TAP_SCALE, f as GENIE_ORIGIN, p as GENIE_RETRACTED_SCALE, c as HOME_EASE, P as HomeEntrance, N as HomeSlotItem, M as HomeSlotItems, l as INSTANT_TRANSITION, D as arrivalWindowMs, u as entranceDelay, d as entranceTransition, v as genieCloseTransition, _ as genieOpenTransition, b as geniePanelGlideTransition, y as glyphTransition, O as itemEnterTransition, k as itemExitTransition, A as itemSizeTransition, C as railWidthTransition, x as stowInTransition, S as stowOutTransition, T as useDelayedTrue, E as useElapsed, j as useIsBulkChange, w as withReducedMotion };
