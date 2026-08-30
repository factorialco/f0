import { useNavigation as e } from "../../lib/linkHandler.js";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useMemo as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
import { useMediaQuery as c } from "usehooks-ts";
import { breakpoints as l } from "@factorialco/f0-core";
//#region src/patterns/ApplicationFrame/FrameProvider.tsx
var u = "one_sidebar_locked", d = t(void 0);
function f() {
	let e = r(d);
	return e === void 0 ? {
		isSmallScreen: !1,
		isLastToggleInvokedByUser: !0,
		prevSidebarState: null,
		sidebarState: "locked",
		toggleSidebar: () => {},
		setForceFloat: () => {}
	} : e;
}
function p({ children: t }) {
	let { currentPath: r } = e(), [f, p] = o(!1), [m, h] = o(!1), g = f ? l.xl : l.md, _ = c(`(max-width: ${g}px)`, { initializeWithValue: !0 }), [v, y] = o(() => {
		let e = localStorage.getItem(u);
		return e === null || !!e;
	}), [b, x] = o(!1), [S, C] = o(null), w = n(({ isInvokedByUser: e } = { isInvokedByUser: !0 }) => {
		h(e ?? !0), _ && x(!b), y(!v);
	}, [
		_,
		b,
		v,
		y,
		x
	]), T = n((e) => {
		_ || (e.clientX < 32 && x(!0), e.clientX > 280 && x(!1));
	}, [_, x]), E = a(() => _ ? b ? "unlocked" : "hidden" : !v && !b ? "hidden" : !v && b ? "unlocked" : "locked", [
		_,
		b,
		v
	]);
	return i(() => {
		x(!1);
	}, [r]), i(() => {
		m && localStorage.setItem(u, v ? "1" : "");
	}, [v, m]), i(() => () => {
		C(E);
	}, [E]), /* @__PURE__ */ s(d.Provider, {
		value: {
			isSmallScreen: _,
			isLastToggleInvokedByUser: m,
			sidebarState: E,
			toggleSidebar: w,
			prevSidebarState: S,
			setForceFloat: p
		},
		children: /* @__PURE__ */ s("div", {
			onPointerMove: T,
			className: "h-screen w-screen",
			children: t
		})
	});
}
//#endregion
export { p as FrameProvider, f as useSidebar };
