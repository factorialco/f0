"use client";
import { createContext as e, useContext as t, useEffect as n, useRef as r, useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/AiPromotionChat/providers/AiPromotionChatStateProvider.tsx
var o = e(null), s = 15, c = ({ children: e, enabled: t, onShow: c, ...l }) => {
	let [u, d] = i(t), [f, p] = i(!1), [m, h] = i(!0), [g, _] = i(s), v = r(null), y = (e) => {
		v.current = e;
	}, b = () => {
		v.current && v.current();
	};
	return n(() => {
		d(t);
	}, [t]), n(() => {
		if (f && c?.(), !f) {
			let e = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			h(!e);
		}
	}, [f, c]), /* @__PURE__ */ a(o.Provider, {
		value: {
			...l,
			enabled: u,
			setEnabled: d,
			open: f,
			setOpen: p,
			shouldPlayEntranceAnimation: m,
			setShouldPlayEntranceAnimation: h,
			setAutoClearMinutes: _,
			autoClearMinutes: u ? g : null,
			clear: b,
			setClearFunction: y
		},
		children: e
	});
}, l = () => {};
function u() {
	let e = t(o);
	return e === null ? {
		enabled: !1,
		setEnabled: l,
		open: !1,
		setOpen: l,
		shouldPlayEntranceAnimation: !0,
		setShouldPlayEntranceAnimation: l,
		setAutoClearMinutes: l,
		clear: l,
		setClearFunction: l,
		autoClearMinutes: null
	} : e;
}
//#endregion
export { c as AiPromotionChatStateProvider, u as useAiPromotionChat };
