"use client";
import { createContext as e, useCallback as t, useContext as n, useMemo as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/lib/providers/events/event-catcher-provider.tsx
var a = e(null);
function o({ children: e, onEvent: n, enabled: o = !0, catchEvents: s }) {
	let c = t((e, t) => {
		!o || s && !s.includes(e) || n(e, t);
	}, [
		o,
		s,
		n
	]), l = r(() => ({ onEvent: c }), [c]);
	return /* @__PURE__ */ i(a.Provider, {
		value: l,
		children: e
	});
}
function s() {
	return n(a) ?? { onEvent: () => Promise.resolve(!1) };
}
//#endregion
export { o as F0EventCatcherProvider, s as useF0EventCatcher };
