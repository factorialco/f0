import { createContext as e, forwardRef as t, memo as n, useContext as r, useEffect as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/lib/providers/user-platafform/user-platform.ts
var s = async () => {
	if (navigator.userAgentData) {
		let e = (await navigator.userAgentData.getHighEntropyValues(["platform"])).platform?.toLowerCase() || "";
		switch (!0) {
			case e.includes("mac"): return "mac";
			case e.includes("windows"): return "windows";
			case e.includes("linux"): return "linux";
			case navigator.userAgentData.mobile: return "mobile";
		}
	}
	let e = navigator.userAgent.toLowerCase();
	switch (!0) {
		case /mac|iphone|ipod|ipad/.test(e): return "mac";
		case /win/.test(e): return "windows";
		case /linux/.test(e): return "linux";
		case /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e): return "mobile";
		default: return "unknown";
	}
}, c = e(null), l = ({ children: e, platform: t, isDev: n = !1, showExperimentalWarnings: r = !1, renderDataTestIdAttribute: l = !1, hourCycle: u }) => {
	let [d, f] = a(t ?? "unknown");
	return i(() => {
		t === void 0 && s().then(f);
	}, [t]), /* @__PURE__ */ o(c.Provider, {
		value: {
			platform: d,
			isDev: n,
			showExperimentalWarnings: r,
			renderDataTestIdAttribute: l,
			hourCycle: u
		},
		children: e
	});
}, u = () => {
	let e = r(c);
	if (e === null) throw Error("useIsDev must be used within an UserPlatformProvider");
	return e.isDev;
};
function d() {
	let e = r(c);
	if (e === null) throw Error("useUserPlatform must be used within an UserPlatformProvider");
	return e.platform;
}
function f() {
	return r(c)?.renderDataTestIdAttribute ?? !1;
}
function p() {
	let e = r(c);
	return e === null ? (console.warn("useShowExperimentalWarnings must be used within an UserPlatformProvider"), !1) : e.showExperimentalWarnings;
}
function m() {
	return r(c)?.hourCycle;
}
//#endregion
//#region src/lib/data-testid/index.tsx
var h = [
	"prototype",
	"length",
	"name",
	"$$typeof",
	"render"
], g = (e, t) => {
	let n = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
	for (let r of n) if (!h.includes(r)) try {
		let n = Object.getOwnPropertyDescriptor(e, r);
		n && Object.defineProperty(t, r, n);
	} catch {}
}, _ = ({ dataTestId: e, children: t }) => {
	let n = f();
	return !e || !n ? t : /* @__PURE__ */ o("div", {
		"data-testid": e,
		style: { display: "contents" },
		children: t
	});
}, v = (e) => {
	if (e.$$typeof === Symbol.for("react.forward_ref")) {
		let n = e, r = t((e, t) => {
			let { dataTestId: r, ...i } = e;
			return /* @__PURE__ */ o(_, {
				dataTestId: r,
				children: /* @__PURE__ */ o(n, {
					...i,
					ref: t
				})
			});
		});
		return g(e, r), r.displayName ||= e.displayName || e.name || e.render?.name || "Component", r;
	}
	if (e.$$typeof === Symbol.for("react.memo")) {
		let t = e.type, r = e.compare, i = v(t), a = n(i, r);
		return g(e, a), a.displayName ||= e.displayName || e.name || e.type?.displayName || "Component", a;
	}
	let r = t((t, n) => {
		let { dataTestId: r, ...i } = t;
		return /* @__PURE__ */ o(_, {
			dataTestId: r,
			children: /* @__PURE__ */ o(e, {
				...i,
				ref: n
			})
		});
	});
	return g(e, r), r.displayName ||= e.displayName || e.name || "Component", r;
};
//#endregion
export { u as a, m as i, v as n, p as o, l as r, d as s, _ as t };
