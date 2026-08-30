import { detectPlatform as e } from "./user-platform.js";
import { createContext as t, useContext as n, useEffect as r, useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/lib/providers/user-platafform/UserPlatformProvider.tsx
var o = t(null), s = ({ children: t, platform: n, isDev: s = !1, showExperimentalWarnings: c = !1, renderDataTestIdAttribute: l = !1, hourCycle: u }) => {
	let [d, f] = i(n ?? "unknown");
	return r(() => {
		n === void 0 && e().then(f);
	}, [n]), /* @__PURE__ */ a(o.Provider, {
		value: {
			platform: d,
			isDev: s,
			showExperimentalWarnings: c,
			renderDataTestIdAttribute: l,
			hourCycle: u
		},
		children: t
	});
}, c = () => {
	let e = n(o);
	if (e === null) throw Error("useIsDev must be used within an UserPlatformProvider");
	return e.isDev;
};
function l() {
	let e = n(o);
	if (e === null) throw Error("useUserPlatform must be used within an UserPlatformProvider");
	return e.platform;
}
function u() {
	return n(o)?.renderDataTestIdAttribute ?? !1;
}
function d() {
	let e = n(o);
	return e === null ? (console.warn("useShowExperimentalWarnings must be used within an UserPlatformProvider"), !1) : e.showExperimentalWarnings;
}
function f() {
	return n(o)?.hourCycle;
}
//#endregion
export { s as UserPlatformProvider, f as useHourCycle, c as useIsDev, u as useRenderDataTestIdAttribute, d as useShowExperimentalWarnings, l as useUserPlatform };
