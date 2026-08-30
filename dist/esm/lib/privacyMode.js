import { createContext as e, useCallback as t, useContext as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/lib/privacyMode.tsx
var a = e({
	enabled: !1,
	enable: () => null,
	disable: () => null,
	toggle: () => null
}), o = ({ initiallyEnabled: e = !1, children: n }) => {
	let [o, s] = r(e), c = t(() => {
		s(!0);
	}, []), l = t(() => s(!1), []), u = t(() => s((e) => !e), []);
	return /* @__PURE__ */ i(a.Provider, {
		value: {
			enable: c,
			disable: l,
			toggle: u,
			enabled: o
		},
		children: n
	});
}, s = () => {
	let e = n(a);
	if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
	return e;
};
//#endregion
export { a as PrivacyModeContext, o as PrivacyModeProvider, s as usePrivacyMode };
