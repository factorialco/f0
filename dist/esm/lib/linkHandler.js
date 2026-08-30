import { createContext as e, forwardRef as t, useCallback as n, useContext as r, useMemo as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/lib/linkHandler.tsx
var o = e(void 0), s = ({ children: e, component: t, currentPath: n }) => /* @__PURE__ */ a(o.Provider, {
	value: {
		component: t,
		currentPath: n
	},
	children: e
}), c = () => ({
	controller: () => ({}),
	...r(o)
}), l = (e) => {
	if (!e || e.startsWith("#") || typeof window > "u") return !1;
	try {
		let t = new URL(e, window.location.href);
		return t.protocol !== "http:" && t.protocol !== "https:" ? !1 : t.hostname !== window.location.hostname;
	} catch {
		return !1;
	}
};
function u(e) {
	return e.endsWith("/") ? e.slice(0, -1) : e;
}
function d(e) {
	let t = e.indexOf("?");
	return t === -1 ? [e, new URLSearchParams()] : [e.slice(0, t), new URLSearchParams(e.slice(t))];
}
function f(e, t) {
	for (let [n, r] of t) if (e.get(n) !== r) return !1;
	return !0;
}
function p(e, t) {
	return f(e, t) && f(t, e);
}
var m = () => {
	let { currentPath: e } = c();
	return {
		currentPath: e,
		isActive: n((t, { exact: n = !1 } = { exact: !1 }) => {
			if (e === void 0 || t === void 0) return !1;
			let [r, i] = d(e), [a, o] = d(t);
			return n ? u(r) === u(a) && p(i, o) : `${u(r)}/`.startsWith(`${u(a)}/`) ? o.size > 0 ? f(i, o) : !0 : !1;
		}, [e])
	};
}, h = t(function({ disabled: e, ...n }, r) {
	let { component: o } = c(), { isActive: s } = m(), l = s(n.href, { exact: n.exactMatch }), u = !n.href || e, d = {
		"data-is-active": l,
		...n,
		disabled: u
	}, f = i(() => t(function(e, t) {
		if (u) {
			let { href: n, target: r, rel: i, download: o, exactMatch: s, ...c } = e;
			return /* @__PURE__ */ a("span", {
				ref: t,
				"aria-disabled": !0,
				...c
			});
		}
		return e.target === "_blank" || !o ? /* @__PURE__ */ a("a", {
			ref: t,
			...e
		}) : o(e, t);
	}), [o, u]);
	return /* @__PURE__ */ a(f, {
		ref: r,
		...d
	});
});
//#endregion
export { h as Link, s as LinkProvider, l as isExternalHref, c as useLinkContext, m as useNavigation };
