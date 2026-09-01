import { o as e, t } from "./rolldown-runtime-CEFd7nDs.js";
import { t as n } from "./dist-CqnuTXEz.js";
import { d as r, t as i, u as a } from "./OneEllipsis-CJ3poPeP.js";
import { D as o, O as s, S as c, _ as l, c as u, ct as d, f, ft as p, ht as m, k as h, lt as g, mt as _, n as v, s as y, t as b, w as x } from "./variants-CSJ-yF0i.js";
import { n as S, t as C } from "./utils-CVzxZnoI.js";
import { A as w, D as T, E, F as D, M as ee, O, P as k, T as A, a as j, c as te, d as ne, f as re, i as ie, j as ae, l as M, m as oe, n as N, o as se, p as ce, r as le, t as ue, u as de, w as fe } from "./tooltip-BbudvOFU.js";
import { a as pe, i as me, l as he, o as ge, p as _e, r as ve, u as ye } from "./F0Button-DAqSZkXo.js";
import { a as be, r as xe } from "./F0AvatarIcon-u_ab66zP.js";
import { $ as Se, A as Ce, At as we, B as Te, C as Ee, D as De, F as Oe, G as ke, I as Ae, J as je, K as Me, L as Ne, M as Pe, Mt as Fe, N as Ie, Nt as Le, O as P, Ot as Re, P as ze, Pt as Be, Q as Ve, R as He, S as Ue, St as We, T as Ge, Tt as Ke, U as qe, V as Je, W as Ye, X as Xe, Y as Ze, Z as Qe, _ as $e, _t as et, a as tt, at as nt, bt as F, ct as rt, dt as it, et as at, f as ot, ft as st, g as ct, gt as lt, h as ut, ht as dt, i as ft, it as pt, j as mt, jt as ht, k as gt, lt as _t, m as vt, n as yt, o as bt, ot as I, pt as xt, q as St, r as Ct, st as wt, t as Tt, ut as Et, v as Dt, vt as Ot, xt as kt, z as At } from "./F0Checkbox-D80nhG7S.js";
import { t as jt } from "./internal-DUTjEW68.js";
import { _ as Mt, a as Nt, b as Pt, g as Ft, i as It, p as Lt, t as Rt, v as zt, x as Bt, y as Vt } from "./popover-D9s66rwb.js";
import { n as Ht, t as Ut } from "./Cross-BmL9HU4z.js";
import { a as Wt, d as Gt, i as Kt, n as qt, r as Jt, t as Yt, u as Xt } from "./input-D5uOmhhf.js";
import { t as Zt } from "./internal-C76UO1Na.js";
import { t as Qt } from "./Maximize-CyNX1-Xd.js";
import { h as $t } from "./F0Avatar-BRF_8pk8.js";
import { _ as en, g as tn, m as nn, v as rn, y as an } from "./dropdown-menu-BwXIQsOl.js";
import { a as on, c as sn, d as cn, i as ln, l as un, n as dn, o as fn, r as pn, s as mn, t as hn } from "./dist-zRL9MpsG.js";
import { n as gn } from "./variants-DNPXraYs.js";
import * as L from "react";
import _n, { Component as vn, Fragment as yn, createContext as R, forwardRef as z, memo as bn, useCallback as B, useContext as xn, useDeferredValue as Sn, useEffect as V, useId as Cn, useImperativeHandle as wn, useLayoutEffect as Tn, useMemo as H, useReducer as En, useRef as U, useState as W } from "react";
import * as Dn from "react-dom";
import On, { flushSync as kn } from "react-dom";
import { Fragment as An, jsx as G, jsxs as K } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var jn = R(null);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-is-mounted.mjs
function Mn() {
	let e = U(!1);
	return p(() => (e.current = !0, () => {
		e.current = !1;
	}), []), e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-force-update.mjs
function Nn() {
	let e = Mn(), [t, n] = W(0), r = B(() => {
		e.current && n(t + 1);
	}, [t]);
	return [B(() => d.postRender(r), [r]), t];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/node/group.mjs
var Pn = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function Fn() {
	let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach(Pn);
	return {
		add: (r) => {
			e.add(r), t.set(r, r.addEventListener("willUpdate", n));
		},
		remove: (r) => {
			e.delete(r);
			let i = t.get(r);
			i && (i(), t.delete(r)), n();
		},
		dirty: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/LayoutGroup/index.mjs
var In = (e) => e === !0, Ln = (e) => In(e === !0) || e === "id", Rn = ({ children: e, id: t, inherit: n = !0 }) => {
	let r = xn(_), i = xn(jn), [a, o] = Nn(), s = U(null), c = r.id || i;
	s.current === null && (Ln(n) && c && (t = t ? c + "-" + t : c), s.current = {
		id: t,
		group: In(n) && r.group || Fn()
	});
	let l = H(() => ({
		...s.current,
		forceRender: a
	}), [o]);
	return G(_.Provider, {
		value: l,
		children: e
	});
}, zn = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M12 5V12V19"
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M12 12H5H19"
	})]
})), Bn = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M11 18L5.00002 12L11 6.00002"
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M19 12L5.50002 12"
	})]
})), Vn = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M15 6L9 12"
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M15 18L9 12"
	})]
})), Hn = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("rect", {
		width: 16,
		height: 16,
		x: 4,
		y: 4,
		fill: "#052657",
		fillOpacity: .06,
		rx: 4
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		d: "M15.5 13.75L12 10.25L8.5 13.75"
	})]
})), Un = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M19 10H5"
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M19 14H5"
	})]
})), Wn = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M4.66667 9.26642C7.11112 6.51742 9.55556 7.32196 12 9.33333C14.4445 11.3447 16.8889 12.1492 19.3333 9.40025"
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M4.66667 14.5998C7.11112 11.8508 9.55556 12.6553 12 14.6667C14.4445 16.678 16.8889 17.4826 19.3333 14.7336"
	})]
})), Gn = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M19 19H5"
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M6 16L18 10.5L6 5"
	})]
})), Kn = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M19 19H5"
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M18 16L6 10.5L18 5"
	})]
})), qn = z((e, t) => /* @__PURE__ */ G("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		d: "M5.41496 6.65079C4.85896 6.00212 5.31987 5 6.17422 5H17.8258C18.6801 5 19.141 6.00212 18.585 6.65079L14.2407 11.7191C14.0854 11.9004 14 12.1312 14 12.3699V16.5C14 16.8148 13.8518 17.1111 13.6 17.3L11.6 18.8C10.9408 19.2944 10 18.824 10 18V12.3699C10 12.1312 9.91461 11.9004 9.75926 11.7191L5.41496 6.65079Z"
	})
})), Jn = z((e, t) => /* @__PURE__ */ G("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M6 19L19 12L6 5"
	})
})), Yn = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9"
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M8 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H8C6.34315 17 5 15.6569 5 14V8C5 6.34315 6.34315 5 8 5Z"
	})]
})), Xn = z((e, t) => /* @__PURE__ */ G("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M18 19L5 12L18 5"
	})
})), Zn = z((e, t) => /* @__PURE__ */ G("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M7 13L5.5 18.5L11 17M7 13L14.5 5.5C15.6046 4.39543 17.3954 4.39543 18.5 5.5V5.5C19.6046 6.60457 19.6046 8.39543 18.5 9.5L11 17M7 13L11 17"
	})
})), Qn = z((e, t) => /* @__PURE__ */ G("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ G("path", {
		fill: "currentColor",
		fillRule: "evenodd",
		d: "M12.65 5.00001C12.65 4.64102 12.359 4.35001 12 4.35001C11.641 4.35001 11.35 4.64102 11.35 5.00001V11.35H5C4.64102 11.35 4.35 11.641 4.35 12C4.35 12.359 4.64102 12.65 5 12.65H11.35V19C11.35 19.359 11.641 19.65 12 19.65C12.359 19.65 12.65 19.359 12.65 19V12.65H19C19.359 12.65 19.65 12.359 19.65 12C19.65 11.641 19.359 11.35 19 11.35H12.65V5.00001Z",
		clipRule: "evenodd"
	})
})), $n = z((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		d: "M16 16L19 19"
	}), /* @__PURE__ */ G("rect", {
		width: 14,
		height: 14,
		x: 4,
		y: 4,
		stroke: "currentColor",
		rx: 7
	})]
})), er = z((e, t) => /* @__PURE__ */ G("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 36 36",
	ref: t,
	...e,
	children: /* @__PURE__ */ G("path", {
		fill: "#F5A51C",
		d: "M21.0778 6.85106C21.0778 6.14261 20.6191 5.51571 19.9438 5.30139C19.2686 5.08708 18.5323 5.33468 18.1237 5.91346L8.36863 19.7332C8.01836 20.2294 7.97389 20.8795 8.25333 21.4187C8.53277 21.958 9.08951 22.2966 9.6969 22.2966H14.5744V29.6129C14.5744 30.3034 15.0106 30.9185 15.6621 31.1471C16.3137 31.3756 17.0385 31.1677 17.4699 30.6286L27.2249 18.4347C27.6153 17.9467 27.6915 17.2781 27.4207 16.7148C27.15 16.1515 26.5803 15.7932 25.9554 15.7932H21.0778V6.85106Z"
	})
})), tr = R(null);
function nr({ children: e, layout: t }) {
	return /* @__PURE__ */ G(tr.Provider, {
		value: t,
		children: e
	});
}
function rr() {
	return xn(tr);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_freeGlobal.js
var ir = typeof global == "object" && global && global.Object === Object && global, ar = typeof self == "object" && self && self.Object === Object && self, or = ir || ar || Function("return this")(), sr = or.Symbol, cr = Object.prototype, lr = cr.hasOwnProperty, ur = cr.toString, dr = sr ? sr.toStringTag : void 0;
function q(e) {
	var t = lr.call(e, dr), n = e[dr];
	try {
		e[dr] = void 0;
		var r = !0;
	} catch {}
	var i = ur.call(e);
	return r && (t ? e[dr] = n : delete e[dr]), i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var fr = Object.prototype.toString;
function pr(e) {
	return fr.call(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var mr = "[object Null]", hr = "[object Undefined]", gr = sr ? sr.toStringTag : void 0;
function _r(e) {
	return e == null ? e === void 0 ? hr : mr : gr && gr in Object(e) ? q(e) : pr(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function vr(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArray.js
var yr = Array.isArray;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function br(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var xr = "[object AsyncFunction]", Sr = "[object Function]", Cr = "[object GeneratorFunction]", wr = "[object Proxy]";
function Tr(e) {
	if (!br(e)) return !1;
	var t = _r(e);
	return t == Sr || t == Cr || t == xr || t == wr;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var Er = or["__core-js_shared__"], Dr = function() {
	var e = /[^.]+$/.exec(Er && Er.keys && Er.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Or(e) {
	return !!Dr && Dr in e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var kr = Function.prototype.toString;
function Ar(e) {
	if (e != null) {
		try {
			return kr.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var jr = /[\\^$.*+?()[\]{}|]/g, Mr = /^\[object .+?Constructor\]$/, Nr = Function.prototype, Pr = Object.prototype, Fr = Nr.toString, Ir = Pr.hasOwnProperty, Lr = RegExp("^" + Fr.call(Ir).replace(jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Rr(e) {
	return !br(e) || Or(e) ? !1 : (Tr(e) ? Lr : Mr).test(Ar(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function zr(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function Br(e, t) {
	var n = zr(e, t);
	return Rr(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_WeakMap.js
var Vr = Br(or, "WeakMap"), Hr = 9007199254740991, Ur = /^(?:0|[1-9]\d*)$/;
function Wr(e, t) {
	var n = typeof e;
	return t ??= Hr, !!t && (n == "number" || n != "symbol" && Ur.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function Gr(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var Kr = 9007199254740991;
function qr(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Kr;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function Jr(e) {
	return e != null && qr(e.length) && !Tr(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var Yr = Object.prototype;
function Xr(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Yr);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function Zr(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var Qr = "[object Arguments]";
function $r(e) {
	return vr(e) && _r(e) == Qr;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var ei = Object.prototype, ti = ei.hasOwnProperty, ni = ei.propertyIsEnumerable, ri = $r(function() {
	return arguments;
}()) ? $r : function(e) {
	return vr(e) && ti.call(e, "callee") && !ni.call(e, "callee");
};
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function ii() {
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var ai = typeof exports == "object" && exports && !exports.nodeType && exports, oi = ai && typeof module == "object" && module && !module.nodeType && module, si = oi && oi.exports === ai ? or.Buffer : void 0, ci = (si ? si.isBuffer : void 0) || ii, li = "[object Arguments]", ui = "[object Array]", di = "[object Boolean]", fi = "[object Date]", pi = "[object Error]", mi = "[object Function]", hi = "[object Map]", gi = "[object Number]", _i = "[object Object]", vi = "[object RegExp]", yi = "[object Set]", bi = "[object String]", xi = "[object WeakMap]", Si = "[object ArrayBuffer]", Ci = "[object DataView]", wi = "[object Float32Array]", Ti = "[object Float64Array]", Ei = "[object Int8Array]", Di = "[object Int16Array]", Oi = "[object Int32Array]", ki = "[object Uint8Array]", Ai = "[object Uint8ClampedArray]", ji = "[object Uint16Array]", Mi = "[object Uint32Array]", Ni = {};
Ni[wi] = Ni[Ti] = Ni[Ei] = Ni[Di] = Ni[Oi] = Ni[ki] = Ni[Ai] = Ni[ji] = Ni[Mi] = !0, Ni[li] = Ni[ui] = Ni[Si] = Ni[di] = Ni[Ci] = Ni[fi] = Ni[pi] = Ni[mi] = Ni[hi] = Ni[gi] = Ni[_i] = Ni[vi] = Ni[yi] = Ni[bi] = Ni[xi] = !1;
function Pi(e) {
	return vr(e) && qr(e.length) && !!Ni[_r(e)];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function Fi(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var Ii = typeof exports == "object" && exports && !exports.nodeType && exports, Li = Ii && typeof module == "object" && module && !module.nodeType && module, Ri = Li && Li.exports === Ii && ir.process, zi = function() {
	try {
		return Li && Li.require && Li.require("util").types || Ri && Ri.binding && Ri.binding("util");
	} catch {}
}(), Bi = zi && zi.isTypedArray, Vi = Bi ? Fi(Bi) : Pi, Hi = Object.prototype.hasOwnProperty;
function Ui(e, t) {
	var n = yr(e), r = !n && ri(e), i = !n && !r && ci(e), a = !n && !r && !i && Vi(e), o = n || r || i || a, s = o ? Zr(e.length, String) : [], c = s.length;
	for (var l in e) (t || Hi.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Wr(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function Wi(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var Gi = Wi(Object.keys, Object), Ki = Object.prototype.hasOwnProperty;
function qi(e) {
	if (!Xr(e)) return Gi(e);
	var t = [];
	for (var n in Object(e)) Ki.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Ji(e) {
	return Jr(e) ? Ui(e) : qi(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeCreate.js
var Yi = Br(Object, "create");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function Xi() {
	this.__data__ = Yi ? Yi(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function Zi(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var Qi = "__lodash_hash_undefined__", $i = Object.prototype.hasOwnProperty;
function ea(e) {
	var t = this.__data__;
	if (Yi) {
		var n = t[e];
		return n === Qi ? void 0 : n;
	}
	return $i.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var ta = Object.prototype.hasOwnProperty;
function na(e) {
	var t = this.__data__;
	return Yi ? t[e] !== void 0 : ta.call(t, e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var ra = "__lodash_hash_undefined__";
function ia(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Yi && t === void 0 ? ra : t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function aa(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
aa.prototype.clear = Xi, aa.prototype.delete = Zi, aa.prototype.get = ea, aa.prototype.has = na, aa.prototype.set = ia;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function oa() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function sa(e, t) {
	for (var n = e.length; n--;) if (Gr(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var J = Array.prototype.splice;
function ca(e) {
	var t = this.__data__, n = sa(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : J.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function la(e) {
	var t = this.__data__, n = sa(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function ua(e) {
	return sa(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function da(e, t) {
	var n = this.__data__, r = sa(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function fa(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
fa.prototype.clear = oa, fa.prototype.delete = ca, fa.prototype.get = la, fa.prototype.has = ua, fa.prototype.set = da;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var pa = Br(or, "Map");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function ma() {
	this.size = 0, this.__data__ = {
		hash: new aa(),
		map: new (pa || fa)(),
		string: new aa()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function ha(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function ga(e, t) {
	var n = e.__data__;
	return ha(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function _a(e) {
	var t = ga(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function va(e) {
	return ga(this, e).get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function ya(e) {
	return ga(this, e).has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function ba(e, t) {
	var n = ga(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function xa(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
xa.prototype.clear = ma, xa.prototype.delete = _a, xa.prototype.get = va, xa.prototype.has = ya, xa.prototype.set = ba;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function Sa(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function Ca() {
	this.__data__ = new fa(), this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function wa(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function Ta(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function Ea(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var Da = 200;
function Oa(e, t) {
	var n = this.__data__;
	if (n instanceof fa) {
		var r = n.__data__;
		if (!pa || r.length < Da - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new xa(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function ka(e) {
	var t = this.__data__ = new fa(e);
	this.size = t.size;
}
ka.prototype.clear = Ca, ka.prototype.delete = wa, ka.prototype.get = Ta, ka.prototype.has = Ea, ka.prototype.set = Oa;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function Aa(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function ja() {
	return [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var Ma = Object.prototype.propertyIsEnumerable, Na = Object.getOwnPropertySymbols, Pa = Na ? function(e) {
	return e == null ? [] : (e = Object(e), Aa(Na(e), function(t) {
		return Ma.call(e, t);
	}));
} : ja;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function Fa(e, t, n) {
	var r = t(e);
	return yr(e) ? r : Sa(r, n(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function Ia(e) {
	return Fa(e, Ji, Pa);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var La = Br(or, "DataView"), Ra = Br(or, "Promise"), za = Br(or, "Set"), Ba = "[object Map]", Va = "[object Object]", Ha = "[object Promise]", Ua = "[object Set]", Wa = "[object WeakMap]", Ga = "[object DataView]", Ka = Ar(La), qa = Ar(pa), Ja = Ar(Ra), Ya = Ar(za), Xa = Ar(Vr), Za = _r;
(La && Za(new La(/* @__PURE__ */ new ArrayBuffer(1))) != Ga || pa && Za(new pa()) != Ba || Ra && Za(Ra.resolve()) != Ha || za && Za(new za()) != Ua || Vr && Za(new Vr()) != Wa) && (Za = function(e) {
	var t = _r(e), n = t == Va ? e.constructor : void 0, r = n ? Ar(n) : "";
	if (r) switch (r) {
		case Ka: return Ga;
		case qa: return Ba;
		case Ja: return Ha;
		case Ya: return Ua;
		case Xa: return Wa;
	}
	return t;
});
var Qa = Za, $a = or.Uint8Array, eo = "__lodash_hash_undefined__";
function to(e) {
	return this.__data__.set(e, eo), this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_setCacheHas.js
function no(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_SetCache.js
function ro(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new xa(); ++t < n;) this.add(e[t]);
}
ro.prototype.add = ro.prototype.push = to, ro.prototype.has = no;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arraySome.js
function io(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cacheHas.js
function ao(e, t) {
	return e.has(t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_equalArrays.js
var oo = 1, so = 2;
function co(e, t, n, r, i, a) {
	var o = n & oo, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & so ? new ro() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!io(t, function(e, t) {
				if (!ao(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapToArray.js
function lo(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_setToArray.js
function uo(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_equalByTag.js
var fo = 1, po = 2, mo = "[object Boolean]", ho = "[object Date]", go = "[object Error]", _o = "[object Map]", vo = "[object Number]", yo = "[object RegExp]", bo = "[object Set]", xo = "[object String]", So = "[object Symbol]", Co = "[object ArrayBuffer]", wo = "[object DataView]", To = sr ? sr.prototype : void 0, Eo = To ? To.valueOf : void 0;
function Do(e, t, n, r, i, a, o) {
	switch (n) {
		case wo:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case Co: return !(e.byteLength != t.byteLength || !a(new $a(e), new $a(t)));
		case mo:
		case ho:
		case vo: return Gr(+e, +t);
		case go: return e.name == t.name && e.message == t.message;
		case yo:
		case xo: return e == t + "";
		case _o: var s = lo;
		case bo:
			var c = r & fo;
			if (s ||= uo, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= po, o.set(e, t);
			var u = co(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case So: if (Eo) return Eo.call(e) == Eo.call(t);
	}
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_equalObjects.js
var Oo = 1, ko = Object.prototype.hasOwnProperty;
function Ao(e, t, n, r, i, a) {
	var o = n & Oo, s = Ia(e), c = s.length;
	if (c != Ia(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : ko.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsEqualDeep.js
var Y = 1, jo = "[object Arguments]", Mo = "[object Array]", No = "[object Object]", Po = Object.prototype.hasOwnProperty;
function Fo(e, t, n, r, i, a) {
	var o = yr(e), s = yr(t), c = o ? Mo : Qa(e), l = s ? Mo : Qa(t);
	c = c == jo ? No : c, l = l == jo ? No : l;
	var u = c == No, d = l == No, f = c == l;
	if (f && ci(e)) {
		if (!ci(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new ka(), o || Vi(e) ? co(e, t, n, r, i, a) : Do(e, t, c, n, r, i, a);
	if (!(n & Y)) {
		var p = u && Po.call(e, "__wrapped__"), m = d && Po.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new ka(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new ka(), Ao(e, t, n, r, i, a)) : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsEqual.js
function Io(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !vr(e) && !vr(t) ? e !== e && t !== t : Fo(e, t, n, r, Io, i);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isEqual.js
function Lo(e, t) {
	return Io(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs
function Ro(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t];
		for (var r in n) e[r] = n[r];
	}
	return e;
}
var zo = {
	read: function(e) {
		return e[0] === "\"" && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
	},
	write: function(e) {
		return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
	}
};
function Bo(e, t) {
	function n(n, r, i) {
		if (!(typeof document > "u")) {
			i = Ro({}, t, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), n = encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
			var a = "";
			for (var o in i) i[o] && (a += "; " + o, i[o] !== !0 && (a += "=" + i[o].split(";")[0]));
			return document.cookie = n + "=" + e.write(r, n) + a;
		}
	}
	function r(t) {
		if (!(typeof document > "u" || arguments.length && !t)) {
			for (var n = document.cookie ? document.cookie.split("; ") : [], r = {}, i = 0; i < n.length; i++) {
				var a = n[i].split("="), o = a.slice(1).join("=");
				try {
					var s = decodeURIComponent(a[0]);
					if (r[s] = e.read(o, s), t === s) break;
				} catch {}
			}
			return t ? r[t] : r;
		}
	}
	return Object.create({
		set: n,
		get: r,
		remove: function(e, t) {
			n(e, "", Ro({}, t, { expires: -1 }));
		},
		withAttributes: function(e) {
			return Bo(this.converter, Ro({}, this.attributes, e));
		},
		withConverter: function(e) {
			return Bo(Ro({}, this.converter, e), this.attributes);
		}
	}, {
		attributes: { value: Object.freeze(t) },
		converter: { value: Object.freeze(e) }
	});
}
Bo(zo, { path: "/" });
//#endregion
//#region ../../node_modules/.pnpm/screenfull@5.2.0/node_modules/screenfull/dist/screenfull.js
var Vo = /* @__PURE__ */ t(((e, t) => {
	(function() {
		var e = typeof window < "u" && window.document !== void 0 ? window.document : {}, n = t !== void 0 && t.exports, r = (function() {
			for (var t, n = [
				[
					"requestFullscreen",
					"exitFullscreen",
					"fullscreenElement",
					"fullscreenEnabled",
					"fullscreenchange",
					"fullscreenerror"
				],
				[
					"webkitRequestFullscreen",
					"webkitExitFullscreen",
					"webkitFullscreenElement",
					"webkitFullscreenEnabled",
					"webkitfullscreenchange",
					"webkitfullscreenerror"
				],
				[
					"webkitRequestFullScreen",
					"webkitCancelFullScreen",
					"webkitCurrentFullScreenElement",
					"webkitCancelFullScreen",
					"webkitfullscreenchange",
					"webkitfullscreenerror"
				],
				[
					"mozRequestFullScreen",
					"mozCancelFullScreen",
					"mozFullScreenElement",
					"mozFullScreenEnabled",
					"mozfullscreenchange",
					"mozfullscreenerror"
				],
				[
					"msRequestFullscreen",
					"msExitFullscreen",
					"msFullscreenElement",
					"msFullscreenEnabled",
					"MSFullscreenChange",
					"MSFullscreenError"
				]
			], r = 0, i = n.length, a = {}; r < i; r++) if (t = n[r], t && t[1] in e) {
				for (r = 0; r < t.length; r++) a[n[0][r]] = t[r];
				return a;
			}
			return !1;
		})(), i = {
			change: r.fullscreenchange,
			error: r.fullscreenerror
		}, a = {
			request: function(t, n) {
				return new Promise(function(i, a) {
					var o = function() {
						this.off("change", o), i();
					}.bind(this);
					this.on("change", o), t ||= e.documentElement;
					var s = t[r.requestFullscreen](n);
					s instanceof Promise && s.then(o).catch(a);
				}.bind(this));
			},
			exit: function() {
				return new Promise(function(t, n) {
					if (!this.isFullscreen) {
						t();
						return;
					}
					var i = function() {
						this.off("change", i), t();
					}.bind(this);
					this.on("change", i);
					var a = e[r.exitFullscreen]();
					a instanceof Promise && a.then(i).catch(n);
				}.bind(this));
			},
			toggle: function(e, t) {
				return this.isFullscreen ? this.exit() : this.request(e, t);
			},
			onchange: function(e) {
				this.on("change", e);
			},
			onerror: function(e) {
				this.on("error", e);
			},
			on: function(t, n) {
				var r = i[t];
				r && e.addEventListener(r, n, !1);
			},
			off: function(t, n) {
				var r = i[t];
				r && e.removeEventListener(r, n, !1);
			},
			raw: r
		};
		if (!r) {
			n ? t.exports = { isEnabled: !1 } : window.screenfull = { isEnabled: !1 };
			return;
		}
		Object.defineProperties(a, {
			isFullscreen: { get: function() {
				return !!e[r.fullscreenElement];
			} },
			element: {
				enumerable: !0,
				get: function() {
					return e[r.fullscreenElement];
				}
			},
			isEnabled: {
				enumerable: !0,
				get: function() {
					return !!e[r.fullscreenEnabled];
				}
			}
		}), n ? t.exports = a : window.screenfull = a;
	})();
})), Ho = /* @__PURE__ */ t(((e, t) => {
	t.exports = { ...L };
})), Uo = /* @__PURE__ */ t(((e) => {
	var t = Ho();
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), Wo = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!f) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var p = i[0].inst, m = i[1];
			return l(function() {
				p.value = n, p.getSnapshot = t, r(p) && m({ inst: p });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(p) && m({ inst: p }), e(function() {
					r(p) && m({ inst: p });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = Ho(), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, f = !1, p = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? p : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Go = /* @__PURE__ */ t(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? Uo() : Wo();
}));
Vo(), Go();
var Ko;
process.env.NODE_ENV === "development" || process.env.NODE_ENV;
var qo = typeof window < "u", Jo = typeof navigator < "u";
qo && (Ko = window) != null && Ko.navigator?.userAgent && /iP(?:ad|hone|od)/.test(window.navigator.userAgent);
var Yo = qo ? Tn : V, Xo = (e) => (e + 1) % 1e6;
function Zo() {
	let [, e] = En(Xo, 0);
	return e;
}
var Qo = (e, t, n) => {
	process.env.NODE_ENV !== "production" && ((!Array.isArray(t) || !t.length) && console.warn("`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead."), typeof n != "function" && console.warn("`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list"));
	let r = U(void 0), i = Zo();
	r.current ||= t, Yo(() => {
		n(t, r.current) || (r.current = t, i());
	}), V(e, r.current);
}, $o = (e, t) => {
	process.env.NODE_ENV !== "production" && (!Array.isArray(t) || !t.length) && console.warn("`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead."), Qo(e, t, Lo);
}, es = Jo ? navigator : void 0;
es && (es.connection || es.mozConnection || es.webkitConnection), _n.use;
//#endregion
//#region ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js
var ts = /* @__PURE__ */ t(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), ns = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), rs = /* @__PURE__ */ t(((e, t) => {
	var n = ns();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), is = /* @__PURE__ */ t(((e, t) => {
	var n = rs(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), as = /* @__PURE__ */ t(((e, t) => {
	var n = rs();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), os = /* @__PURE__ */ t(((e, t) => {
	var n = rs();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), ss = /* @__PURE__ */ t(((e, t) => {
	var n = rs();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), cs = /* @__PURE__ */ t(((e, t) => {
	var n = ts(), r = is(), i = as(), a = os(), o = ss();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), ls = /* @__PURE__ */ t(((e, t) => {
	var n = cs();
	function r() {
		this.__data__ = new n(), this.size = 0;
	}
	t.exports = r;
})), us = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	t.exports = n;
})), ds = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return this.__data__.get(e);
	}
	t.exports = n;
})), fs = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), ps = /* @__PURE__ */ t(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), ms = /* @__PURE__ */ t(((e, t) => {
	var n = ps(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), hs = /* @__PURE__ */ t(((e, t) => {
	t.exports = ms().Symbol;
})), gs = /* @__PURE__ */ t(((e, t) => {
	var n = hs(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
	function s(e) {
		var t = i.call(e, o), n = e[o];
		try {
			e[o] = void 0;
			var r = !0;
		} catch {}
		var s = a.call(e);
		return r && (t ? e[o] = n : delete e[o]), s;
	}
	t.exports = s;
})), _s = /* @__PURE__ */ t(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), vs = /* @__PURE__ */ t(((e, t) => {
	var n = hs(), r = gs(), i = _s(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), ys = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), bs = /* @__PURE__ */ t(((e, t) => {
	var n = vs(), r = ys(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), xs = /* @__PURE__ */ t(((e, t) => {
	t.exports = ms()["__core-js_shared__"];
})), Ss = /* @__PURE__ */ t(((e, t) => {
	var n = xs(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), Cs = /* @__PURE__ */ t(((e, t) => {
	var n = Function.prototype.toString;
	function r(e) {
		if (e != null) {
			try {
				return n.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	t.exports = r;
})), ws = /* @__PURE__ */ t(((e, t) => {
	var n = bs(), r = Ss(), i = ys(), a = Cs(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function p(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = p;
})), Ts = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), Es = /* @__PURE__ */ t(((e, t) => {
	var n = ws(), r = Ts();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), Ds = /* @__PURE__ */ t(((e, t) => {
	t.exports = Es()(ms(), "Map");
})), Os = /* @__PURE__ */ t(((e, t) => {
	t.exports = Es()(Object, "create");
})), ks = /* @__PURE__ */ t(((e, t) => {
	var n = Os();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), As = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), js = /* @__PURE__ */ t(((e, t) => {
	var n = Os(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), Ms = /* @__PURE__ */ t(((e, t) => {
	var n = Os(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), Ns = /* @__PURE__ */ t(((e, t) => {
	var n = Os(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), Ps = /* @__PURE__ */ t(((e, t) => {
	var n = ks(), r = As(), i = js(), a = Ms(), o = Ns();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Fs = /* @__PURE__ */ t(((e, t) => {
	var n = Ps(), r = cs(), i = Ds();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), Is = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), Ls = /* @__PURE__ */ t(((e, t) => {
	var n = Is();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), Rs = /* @__PURE__ */ t(((e, t) => {
	var n = Ls();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), zs = /* @__PURE__ */ t(((e, t) => {
	var n = Ls();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), Bs = /* @__PURE__ */ t(((e, t) => {
	var n = Ls();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), Vs = /* @__PURE__ */ t(((e, t) => {
	var n = Ls();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), Hs = /* @__PURE__ */ t(((e, t) => {
	var n = Fs(), r = Rs(), i = zs(), a = Bs(), o = Vs();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Us = /* @__PURE__ */ t(((e, t) => {
	var n = cs(), r = Ds(), i = Hs(), a = 200;
	function o(e, t) {
		var o = this.__data__;
		if (o instanceof n) {
			var s = o.__data__;
			if (!r || s.length < a - 1) return s.push([e, t]), this.size = ++o.size, this;
			o = this.__data__ = new i(s);
		}
		return o.set(e, t), this.size = o.size, this;
	}
	t.exports = o;
})), Ws = /* @__PURE__ */ t(((e, t) => {
	var n = cs(), r = ls(), i = us(), a = ds(), o = fs(), s = Us();
	function c(e) {
		var t = this.__data__ = new n(e);
		this.size = t.size;
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, t.exports = c;
})), Gs = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return this.__data__.set(e, "__lodash_hash_undefined__"), this;
	}
	t.exports = n;
})), Ks = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), qs = /* @__PURE__ */ t(((e, t) => {
	var n = Hs(), r = Gs(), i = Ks();
	function a(e) {
		var t = -1, r = e == null ? 0 : e.length;
		for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
	}
	a.prototype.add = a.prototype.push = r, a.prototype.has = i, t.exports = a;
})), Js = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	t.exports = n;
})), Ys = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		return e.has(t);
	}
	t.exports = n;
})), Xs = /* @__PURE__ */ t(((e, t) => {
	var n = qs(), r = Js(), i = Ys(), a = 1, o = 2;
	function s(e, t, s, c, l, u) {
		var d = s & a, f = e.length, p = t.length;
		if (f != p && !(d && p > f)) return !1;
		var m = u.get(e), h = u.get(t);
		if (m && h) return m == t && h == e;
		var g = -1, _ = !0, v = s & o ? new n() : void 0;
		for (u.set(e, t), u.set(t, e); ++g < f;) {
			var y = e[g], b = t[g];
			if (c) var x = d ? c(b, y, g, t, e, u) : c(y, b, g, e, t, u);
			if (x !== void 0) {
				if (x) continue;
				_ = !1;
				break;
			}
			if (v) {
				if (!r(t, function(e, t) {
					if (!i(v, t) && (y === e || l(y, e, s, c, u))) return v.push(t);
				})) {
					_ = !1;
					break;
				}
			} else if (!(y === b || l(y, b, s, c, u))) {
				_ = !1;
				break;
			}
		}
		return u.delete(e), u.delete(t), _;
	}
	t.exports = s;
})), Zs = /* @__PURE__ */ t(((e, t) => {
	t.exports = ms().Uint8Array;
})), Qs = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	t.exports = n;
})), $s = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	t.exports = n;
})), ec = /* @__PURE__ */ t(((e, t) => {
	var n = hs(), r = Zs(), i = ns(), a = Xs(), o = Qs(), s = $s(), c = 1, l = 2, u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Map]", m = "[object Number]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", x = n ? n.prototype : void 0, S = x ? x.valueOf : void 0;
	function C(e, t, n, x, C, w, T) {
		switch (n) {
			case b:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case y: return !(e.byteLength != t.byteLength || !w(new r(e), new r(t)));
			case u:
			case d:
			case m: return i(+e, +t);
			case f: return e.name == t.name && e.message == t.message;
			case h:
			case _: return e == t + "";
			case p: var E = o;
			case g:
				var D = x & c;
				if (E ||= s, e.size != t.size && !D) return !1;
				var ee = T.get(e);
				if (ee) return ee == t;
				x |= l, T.set(e, t);
				var O = a(E(e), E(t), x, C, w, T);
				return T.delete(e), O;
			case v: if (S) return S.call(e) == S.call(t);
		}
		return !1;
	}
	t.exports = C;
})), tc = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	t.exports = n;
})), nc = /* @__PURE__ */ t(((e, t) => {
	t.exports = Array.isArray;
})), rc = /* @__PURE__ */ t(((e, t) => {
	var n = tc(), r = nc();
	function i(e, t, i) {
		var a = t(e);
		return r(e) ? a : n(a, i(e));
	}
	t.exports = i;
})), ic = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	t.exports = n;
})), ac = /* @__PURE__ */ t(((e, t) => {
	function n() {
		return [];
	}
	t.exports = n;
})), oc = /* @__PURE__ */ t(((e, t) => {
	var n = ic(), r = ac(), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols;
	t.exports = a ? function(e) {
		return e == null ? [] : (e = Object(e), n(a(e), function(t) {
			return i.call(e, t);
		}));
	} : r;
})), sc = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	t.exports = n;
})), cc = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), lc = /* @__PURE__ */ t(((e, t) => {
	var n = vs(), r = cc(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), uc = /* @__PURE__ */ t(((e, t) => {
	var n = lc(), r = cc(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), dc = /* @__PURE__ */ t(((e, t) => {
	function n() {
		return !1;
	}
	t.exports = n;
})), fc = /* @__PURE__ */ t(((e, t) => {
	var n = ms(), r = dc(), i = typeof e == "object" && e && !e.nodeType && e, a = i && typeof t == "object" && t && !t.nodeType && t, o = a && a.exports === i ? n.Buffer : void 0;
	t.exports = (o ? o.isBuffer : void 0) || r;
})), pc = /* @__PURE__ */ t(((e, t) => {
	var n = /^(?:0|[1-9]\d*)$/;
	function r(e, t) {
		var r = typeof e;
		return t ??= 9007199254740991, !!t && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = r;
})), mc = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
	}
	t.exports = n;
})), hc = /* @__PURE__ */ t(((e, t) => {
	var n = vs(), r = mc(), i = cc(), a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", ee = "[object Uint32Array]", O = {};
	O[b] = O[x] = O[S] = O[C] = O[w] = O[T] = O[E] = O[D] = O[ee] = !0, O[a] = O[o] = O[v] = O[s] = O[y] = O[c] = O[l] = O[u] = O[d] = O[f] = O[p] = O[m] = O[h] = O[g] = O[_] = !1;
	function k(e) {
		return i(e) && r(e.length) && !!O[n(e)];
	}
	t.exports = k;
})), gc = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return function(t) {
			return e(t);
		};
	}
	t.exports = n;
})), _c = /* @__PURE__ */ t(((e, t) => {
	var n = ps(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r && n.process;
	t.exports = function() {
		try {
			return i && i.require && i.require("util").types || a && a.binding && a.binding("util");
		} catch {}
	}();
})), vc = /* @__PURE__ */ t(((e, t) => {
	var n = hc(), r = gc(), i = _c(), a = i && i.isTypedArray;
	t.exports = a ? r(a) : n;
})), yc = /* @__PURE__ */ t(((e, t) => {
	var n = sc(), r = uc(), i = nc(), a = fc(), o = pc(), s = vc(), c = Object.prototype.hasOwnProperty;
	function l(e, t) {
		var l = i(e), u = !l && r(e), d = !l && !u && a(e), f = !l && !u && !d && s(e), p = l || u || d || f, m = p ? n(e.length, String) : [], h = m.length;
		for (var g in e) (t || c.call(e, g)) && !(p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || o(g, h))) && m.push(g);
		return m;
	}
	t.exports = l;
})), bc = /* @__PURE__ */ t(((e, t) => {
	var n = Object.prototype;
	function r(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || n);
	}
	t.exports = r;
})), xc = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	t.exports = n;
})), Sc = /* @__PURE__ */ t(((e, t) => {
	t.exports = xc()(Object.keys, Object);
})), Cc = /* @__PURE__ */ t(((e, t) => {
	var n = bc(), r = Sc(), i = Object.prototype.hasOwnProperty;
	function a(e) {
		if (!n(e)) return r(e);
		var t = [];
		for (var a in Object(e)) i.call(e, a) && a != "constructor" && t.push(a);
		return t;
	}
	t.exports = a;
})), wc = /* @__PURE__ */ t(((e, t) => {
	var n = bs(), r = mc();
	function i(e) {
		return e != null && r(e.length) && !n(e);
	}
	t.exports = i;
})), Tc = /* @__PURE__ */ t(((e, t) => {
	var n = yc(), r = Cc(), i = wc();
	function a(e) {
		return i(e) ? n(e) : r(e);
	}
	t.exports = a;
})), Ec = /* @__PURE__ */ t(((e, t) => {
	var n = rc(), r = oc(), i = Tc();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), Dc = /* @__PURE__ */ t(((e, t) => {
	var n = Ec(), r = 1, i = Object.prototype.hasOwnProperty;
	function a(e, t, a, o, s, c) {
		var l = a & r, u = n(e), d = u.length;
		if (d != n(t).length && !l) return !1;
		for (var f = d; f--;) {
			var p = u[f];
			if (!(l ? p in t : i.call(t, p))) return !1;
		}
		var m = c.get(e), h = c.get(t);
		if (m && h) return m == t && h == e;
		var g = !0;
		c.set(e, t), c.set(t, e);
		for (var _ = l; ++f < d;) {
			p = u[f];
			var v = e[p], y = t[p];
			if (o) var b = l ? o(y, v, p, t, e, c) : o(v, y, p, e, t, c);
			if (!(b === void 0 ? v === y || s(v, y, a, o, c) : b)) {
				g = !1;
				break;
			}
			_ ||= p == "constructor";
		}
		if (g && !_) {
			var x = e.constructor, S = t.constructor;
			x != S && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof S == "function" && S instanceof S) && (g = !1);
		}
		return c.delete(e), c.delete(t), g;
	}
	t.exports = a;
})), Oc = /* @__PURE__ */ t(((e, t) => {
	t.exports = Es()(ms(), "DataView");
})), kc = /* @__PURE__ */ t(((e, t) => {
	t.exports = Es()(ms(), "Promise");
})), Ac = /* @__PURE__ */ t(((e, t) => {
	t.exports = Es()(ms(), "Set");
})), jc = /* @__PURE__ */ t(((e, t) => {
	t.exports = Es()(ms(), "WeakMap");
})), Mc = /* @__PURE__ */ t(((e, t) => {
	var n = Oc(), r = Ds(), i = kc(), a = Ac(), o = jc(), s = vs(), c = Cs(), l = "[object Map]", u = "[object Object]", d = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", h = c(n), g = c(r), _ = c(i), v = c(a), y = c(o), b = s;
	(n && b(new n(/* @__PURE__ */ new ArrayBuffer(1))) != m || r && b(new r()) != l || i && b(i.resolve()) != d || a && b(new a()) != f || o && b(new o()) != p) && (b = function(e) {
		var t = s(e), n = t == u ? e.constructor : void 0, r = n ? c(n) : "";
		if (r) switch (r) {
			case h: return m;
			case g: return l;
			case _: return d;
			case v: return f;
			case y: return p;
		}
		return t;
	}), t.exports = b;
})), Nc = /* @__PURE__ */ t(((e, t) => {
	var n = Ws(), r = Xs(), i = ec(), a = Dc(), o = Mc(), s = nc(), c = fc(), l = vc(), u = 1, d = "[object Arguments]", f = "[object Array]", p = "[object Object]", m = Object.prototype.hasOwnProperty;
	function h(e, t, h, g, _, v) {
		var y = s(e), b = s(t), x = y ? f : o(e), S = b ? f : o(t);
		x = x == d ? p : x, S = S == d ? p : S;
		var C = x == p, w = S == p, T = x == S;
		if (T && c(e)) {
			if (!c(t)) return !1;
			y = !0, C = !1;
		}
		if (T && !C) return v ||= new n(), y || l(e) ? r(e, t, h, g, _, v) : i(e, t, x, h, g, _, v);
		if (!(h & u)) {
			var E = C && m.call(e, "__wrapped__"), D = w && m.call(t, "__wrapped__");
			if (E || D) {
				var ee = E ? e.value() : e, O = D ? t.value() : t;
				return v ||= new n(), _(ee, O, h, g, v);
			}
		}
		return T ? (v ||= new n(), a(e, t, h, g, _, v)) : !1;
	}
	t.exports = h;
})), Pc = /* @__PURE__ */ t(((e, t) => {
	var n = Nc(), r = cc();
	function i(e, t, a, o, s) {
		return e === t ? !0 : e == null || t == null || !r(e) && !r(t) ? e !== e && t !== t : n(e, t, a, o, i, s);
	}
	t.exports = i;
})), Fc = /* @__PURE__ */ t(((e, t) => {
	var n = Pc();
	function r(e, t) {
		return n(e, t);
	}
	t.exports = r;
})), Ic = zt("ChevronLeft", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
zt("Ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]);
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.mjs
function Lc(e, t) {
	let n = I(e);
	if (isNaN(t)) return nt(e, NaN);
	if (!t) return n;
	let r = n.getDate(), i = nt(e, n.getTime());
	return i.setMonth(n.getMonth() + t + 1, 0), r >= i.getDate() ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), r), n);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addWeeks.mjs
function Rc(e, t) {
	let n = t * 7;
	return pt(e, n);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addYears.mjs
function zc(e, t) {
	return Lc(e, t * 12);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/max.mjs
function Bc(e) {
	let t;
	return e.forEach(function(e) {
		let n = I(e);
		(t === void 0 || t < n || isNaN(Number(n))) && (t = n);
	}), t || /* @__PURE__ */ new Date(NaN);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/min.mjs
function Vc(e) {
	let t;
	return e.forEach((e) => {
		let n = I(e);
		(!t || t > n || isNaN(+n)) && (t = n);
	}), t || /* @__PURE__ */ new Date(NaN);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarMonths.mjs
function Hc(e, t) {
	let n = I(e), r = I(t), i = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
	return i * 12 + a;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarWeeks.mjs
function Uc(e, t, n) {
	let r = Ze(e, n), i = Ze(t, n), a = +r - Me(r), o = +i - Me(i);
	return Math.round((a - o) / at);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfDay.mjs
function Wc(e) {
	let t = I(e);
	return t.setHours(23, 59, 59, 999), t;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfMonth.mjs
function Gc(e) {
	let t = I(e), n = t.getMonth();
	return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfQuarter.mjs
function Kc(e) {
	let t = I(e), n = t.getMonth(), r = n - n % 3;
	return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.mjs
function qc(e) {
	let t = I(e);
	return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfYear.mjs
function Jc(e) {
	let t = I(e), n = t.getFullYear();
	return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfWeek.mjs
function Yc(e, t) {
	let n = Xe(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = I(e), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfISOWeek.mjs
function Xc(e) {
	return Yc(e, { weekStartsOn: 1 });
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfQuarter.mjs
function Zc(e) {
	let t = I(e), n = t.getMonth(), r = n - n % 3 + 3;
	return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDaysInMonth.mjs
function Qc(e) {
	let t = I(e), n = t.getFullYear(), r = t.getMonth(), i = nt(e, 0);
	return i.setFullYear(n, r + 1, 0), i.setHours(0, 0, 0, 0), i.getDate();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDefaultOptions.mjs
function $c() {
	return Object.assign({}, Xe());
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getISODay.mjs
function el(e) {
	let t = I(e).getDay();
	return t === 0 && (t = 7), t;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getMonth.mjs
function tl(e) {
	return I(e).getMonth();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getUnixTime.mjs
function nl(e) {
	return Math.trunc(I(e) / 1e3);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/lastDayOfMonth.mjs
function rl(e) {
	let t = I(e), n = t.getMonth();
	return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getWeeksInMonth.mjs
function il(e, t) {
	return Uc(rl(e), qc(e), t) + 1;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getYear.mjs
function al(e) {
	return I(e).getFullYear();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isAfter.mjs
function ol(e, t) {
	let n = I(e), r = I(t);
	return n.getTime() > r.getTime();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.mjs
function sl(e, t) {
	let n = I(e), r = I(t);
	return +n < +r;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isEqual.mjs
function cl(e, t) {
	let n = I(e), r = I(t);
	return +n == +r;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/transpose.mjs
function ll(e, t) {
	let n = t instanceof Date ? nt(t, 0) : new t(0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/Setter.mjs
var ul = 10, dl = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, fl = class extends dl {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, pl = class extends dl {
	priority = ul;
	subPriority = -1;
	set(e, t) {
		return t.timestampIsSet ? e : nt(e, ll(e, Date));
	}
}, ml = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new fl(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, hl = class extends ml {
	priority = 140;
	parse(e, t, n) {
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
			case "GGGGG": return n.era(e, { width: "narrow" });
			default: return n.era(e, { width: "wide" }) || n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
		}
	}
	set(e, t, n) {
		return t.era = n, e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"R",
		"u",
		"t",
		"T"
	];
}, gl = {
	month: /^(1[0-2]|0?\d)/,
	date: /^(3[0-1]|[0-2]?\d)/,
	dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	week: /^(5[0-3]|[0-4]?\d)/,
	hour23h: /^(2[0-3]|[0-1]?\d)/,
	hour24h: /^(2[0-4]|[0-1]?\d)/,
	hour11h: /^(1[0-1]|0?\d)/,
	hour12h: /^(1[0-2]|0?\d)/,
	minute: /^[0-5]?\d/,
	second: /^[0-5]?\d/,
	singleDigit: /^\d/,
	twoDigits: /^\d{1,2}/,
	threeDigits: /^\d{1,3}/,
	fourDigits: /^\d{1,4}/,
	anyDigitsSigned: /^-?\d+/,
	singleDigitSigned: /^-?\d/,
	twoDigitsSigned: /^-?\d{1,2}/,
	threeDigitsSigned: /^-?\d{1,3}/,
	fourDigitsSigned: /^-?\d{1,4}/
}, _l = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/utils.mjs
function vl(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function yl(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function bl(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * Qe + a * Ve + o * Se),
		rest: t.slice(n[0].length)
	};
}
function xl(e) {
	return yl(gl.anyDigitsSigned, e);
}
function Sl(e, t) {
	switch (e) {
		case 1: return yl(gl.singleDigit, t);
		case 2: return yl(gl.twoDigits, t);
		case 3: return yl(gl.threeDigits, t);
		case 4: return yl(gl.fourDigits, t);
		default: return yl(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Cl(e, t) {
	switch (e) {
		case 1: return yl(gl.singleDigitSigned, t);
		case 2: return yl(gl.twoDigitsSigned, t);
		case 3: return yl(gl.threeDigitsSigned, t);
		case 4: return yl(gl.fourDigitsSigned, t);
		default: return yl(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function wl(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function Tl(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function El(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/YearParser.mjs
var Dl = class extends ml {
	priority = 130;
	incompatibleTokens = [
		"Y",
		"R",
		"u",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "yy"
		});
		switch (t) {
			case "y": return vl(Sl(4, e), r);
			case "yo": return vl(n.ordinalNumber(e, { unit: "year" }), r);
			default: return vl(Sl(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = Tl(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, Ol = class extends ml {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return vl(Sl(4, e), r);
			case "Yo": return vl(n.ordinalNumber(e, { unit: "year" }), r);
			default: return vl(Sl(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Ne(e, r);
		if (n.isTwoDigitYear) {
			let t = Tl(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ze(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ze(e, r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
}, kl = class extends ml {
	priority = 130;
	parse(e, t) {
		return Cl(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = nt(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), je(r);
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, Al = class extends ml {
	priority = 130;
	parse(e, t) {
		return Cl(t === "u" ? 4 : t.length, e);
	}
	set(e, t, n) {
		return e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"R",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, jl = class extends ml {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return Sl(t.length, e);
			case "Qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "QQQ": return n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "formatting"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Ml = class extends ml {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return Sl(t.length, e);
			case "qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "qqq": return n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "standalone"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Nl = class extends ml {
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"L",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "M": return vl(yl(gl.month, e), r);
			case "MM": return vl(Sl(2, e), r);
			case "Mo": return vl(n.ordinalNumber(e, { unit: "month" }), r);
			case "MMM": return n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			case "MMMMM": return n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(e, {
				width: "wide",
				context: "formatting"
			}) || n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
}, Pl = class extends ml {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return vl(yl(gl.month, e), r);
			case "LL": return vl(Sl(2, e), r);
			case "Lo": return vl(n.ordinalNumber(e, { unit: "month" }), r);
			case "LLL": return n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			case "LLLLL": return n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(e, {
				width: "wide",
				context: "standalone"
			}) || n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setWeek.mjs
function Fl(e, t, n) {
	let r = I(e), i = Ae(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs
var Il = class extends ml {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return yl(gl.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return Ze(Fl(e, n, r), r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setISOWeek.mjs
function Ll(e, t) {
	let n = I(e), r = He(n) - t;
	return n.setDate(n.getDate() - r * 7), n;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs
var Rl = class extends ml {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return yl(gl.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return je(Ll(e, n));
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, zl = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], Bl = [
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], Vl = class extends ml {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return yl(gl.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		let n = El(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= Bl[r] : t >= 1 && t <= zl[r];
	}
	set(e, t, n) {
		return e.setDate(n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Hl = class extends ml {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return yl(gl.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		return El(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
	}
	set(e, t, n) {
		return e.setMonth(0, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"E",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setDay.mjs
function Ul(e, t, n) {
	let r = Xe(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = I(e), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i, l = t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7;
	return pt(a, l);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/DayParser.mjs
var Wl = class extends ml {
	priority = 90;
	parse(e, t, n) {
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEE": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Ul(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, Gl = class extends ml {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return vl(Sl(t.length, e), i);
			case "eo": return vl(n.ordinalNumber(e, { unit: "day" }), i);
			case "eee": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeee": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Ul(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"c",
		"t",
		"T"
	];
}, Kl = class extends ml {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return vl(Sl(t.length, e), i);
			case "co": return vl(n.ordinalNumber(e, { unit: "day" }), i);
			case "ccc": return n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "ccccc": return n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.day(e, {
				width: "wide",
				context: "standalone"
			}) || n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = Ul(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"e",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setISODay.mjs
function ql(e, t) {
	let n = I(e), r = t - el(n);
	return pt(n, r);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs
var X = class extends ml {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return Sl(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return vl(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return vl(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return vl(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return vl(n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 7;
	}
	set(e, t, n) {
		return e = ql(e, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"E",
		"e",
		"c",
		"t",
		"T"
	];
}, Jl = class extends ml {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "a":
			case "aa":
			case "aaa": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "aaaaa": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(wl(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Yl = class extends ml {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "b":
			case "bb":
			case "bbb": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "bbbbb": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(wl(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Xl = class extends ml {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(wl(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, Zl = class extends ml {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return yl(gl.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 12;
	}
	set(e, t, n) {
		let r = e.getHours() >= 12;
		return r && n < 12 ? e.setHours(n + 12, 0, 0, 0) : !r && n === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"H",
		"K",
		"k",
		"t",
		"T"
	];
}, Ql = class extends ml {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return yl(gl.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 23;
	}
	set(e, t, n) {
		return e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"K",
		"k",
		"t",
		"T"
	];
}, $l = class extends ml {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return yl(gl.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.getHours() >= 12 && n < 12 ? e.setHours(n + 12, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"h",
		"H",
		"k",
		"t",
		"T"
	];
}, eu = class extends ml {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return yl(gl.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 24;
	}
	set(e, t, n) {
		let r = n <= 24 ? n % 24 : n;
		return e.setHours(r, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"H",
		"K",
		"t",
		"T"
	];
}, tu = class extends ml {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return yl(gl.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, nu = class extends ml {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return yl(gl.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return Sl(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, ru = class extends ml {
	priority = 30;
	parse(e, t) {
		return vl(Sl(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, iu = class extends ml {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return bl(_l.basicOptionalMinutes, e);
			case "XX": return bl(_l.basic, e);
			case "XXXX": return bl(_l.basicOptionalSeconds, e);
			case "XXXXX": return bl(_l.extendedOptionalSeconds, e);
			default: return bl(_l.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : nt(e, e.getTime() - Me(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, au = class extends ml {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return bl(_l.basicOptionalMinutes, e);
			case "xx": return bl(_l.basic, e);
			case "xxxx": return bl(_l.basicOptionalSeconds, e);
			case "xxxxx": return bl(_l.extendedOptionalSeconds, e);
			default: return bl(_l.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : nt(e, e.getTime() - Me(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, ou = class extends ml {
	priority = 40;
	parse(e) {
		return xl(e);
	}
	set(e, t, n) {
		return [nt(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, su = class extends ml {
	priority = 20;
	parse(e) {
		return xl(e);
	}
	set(e, t, n) {
		return [nt(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, cu = {
	G: new hl(),
	y: new Dl(),
	Y: new Ol(),
	R: new kl(),
	u: new Al(),
	Q: new jl(),
	q: new Ml(),
	M: new Nl(),
	L: new Pl(),
	w: new Il(),
	I: new Rl(),
	d: new Vl(),
	D: new Hl(),
	E: new Wl(),
	e: new Gl(),
	c: new Kl(),
	i: new X(),
	a: new Jl(),
	b: new Yl(),
	B: new Xl(),
	h: new Zl(),
	H: new Ql(),
	K: new $l(),
	k: new eu(),
	m: new tu(),
	s: new nu(),
	S: new ru(),
	X: new iu(),
	x: new au(),
	t: new ou(),
	T: new su()
}, lu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, uu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, du = /^'([^]*?)'?$/, fu = /''/g, pu = /\S/, mu = /[a-zA-Z]/;
function hu(e, t, n, r) {
	let i = $c(), a = r?.locale ?? i.locale ?? At, o = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, s = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? i.weekStartsOn ?? i.locale?.options?.weekStartsOn ?? 0;
	if (t === "") return e === "" ? I(n) : nt(n, NaN);
	let c = {
		firstWeekContainsDate: o,
		weekStartsOn: s,
		locale: a
	}, l = [new pl()], u = t.match(uu).map((e) => {
		let t = e[0];
		if (t in Oe) {
			let n = Oe[t];
			return n(e, a.formatLong);
		}
		return e;
	}).join("").match(lu), d = [];
	for (let i of u) {
		!r?.useAdditionalWeekYearTokens && Ie(i) && ze(i, t, e), !r?.useAdditionalDayOfYearTokens && Pe(i) && ze(i, t, e);
		let o = i[0], s = cu[o];
		if (s) {
			let { incompatibleTokens: t } = s;
			if (Array.isArray(t)) {
				let e = d.find((e) => t.includes(e.token) || e.token === o);
				if (e) throw RangeError(`The format string mustn't contain \`${e.fullToken}\` and \`${i}\` at the same time`);
			} else if (s.incompatibleTokens === "*" && d.length > 0) throw RangeError(`The format string mustn't contain \`${i}\` and any other token at the same time`);
			d.push({
				token: o,
				fullToken: i
			});
			let r = s.run(e, i, a.match, c);
			if (!r) return nt(n, NaN);
			l.push(r.setter), e = r.rest;
		} else {
			if (o.match(mu)) throw RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
			if (i === "''" ? i = "'" : o === "'" && (i = gu(i)), e.indexOf(i) === 0) e = e.slice(i.length);
			else return nt(n, NaN);
		}
	}
	if (e.length > 0 && pu.test(e)) return nt(n, NaN);
	let f = l.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => l.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), p = I(n);
	if (isNaN(p.getTime())) return nt(n, NaN);
	let m = {};
	for (let e of f) {
		if (!e.validate(p, c)) return nt(n, NaN);
		let t = e.set(p, m, c);
		Array.isArray(t) ? (p = t[0], Object.assign(m, t[1])) : p = t;
	}
	return nt(n, p);
}
function gu(e) {
	return e.match(du)[1].replace(fu, "'");
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameISOWeek.mjs
function _u(e, t) {
	return Ce(e, t, { weekStartsOn: 1 });
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.mjs
function vu(e, t) {
	let n = I(e), r = I(t);
	return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameQuarter.mjs
function yu(e, t) {
	let n = Kc(e), r = Kc(t);
	return +n == +r;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.mjs
function bu(e, t) {
	let n = I(e), r = I(t);
	return n.getFullYear() === r.getFullYear();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isWithinInterval.mjs
function xu(e, t) {
	let n = +I(e), [r, i] = [+I(t.start), +I(t.end)].sort((e, t) => e - t);
	return n >= r && n <= i;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs
function Su(e, t) {
	let n = I(e), r = n.getFullYear(), i = n.getDate(), a = nt(e, 0);
	a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
	let o = Qc(a);
	return n.setMonth(t, Math.min(i, o)), n;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setYear.mjs
function Cu(e, t) {
	let n = I(e);
	return isNaN(+n) ? nt(e, NaN) : (n.setFullYear(t), n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var wu = /* @__PURE__ */ t(((e, t) => {
	(function() {
		var n, r = "Expected a function", i = "__lodash_hash_undefined__", a = "__lodash_placeholder__", o = 1, s = 2, c = 8, l = 16, u = 32, d = 64, f = 128, p = 256, m = 512, h = 1 / 0, g = 9007199254740991, _ = 17976931348623157e292, v = NaN, y = 4294967295, b = y - 1, x = y >>> 1, S = [
			["ary", f],
			["bind", o],
			["bindKey", s],
			["curry", c],
			["curryRight", l],
			["flip", m],
			["partial", u],
			["partialRight", d],
			["rearg", p]
		], C = "[object Arguments]", w = "[object Array]", T = "[object AsyncFunction]", E = "[object Boolean]", D = "[object Date]", ee = "[object DOMException]", O = "[object Error]", k = "[object Function]", A = "[object GeneratorFunction]", j = "[object Map]", te = "[object Number]", ne = "[object Null]", re = "[object Object]", ie = "[object Promise]", ae = "[object Proxy]", M = "[object RegExp]", oe = "[object Set]", N = "[object String]", se = "[object Symbol]", ce = "[object Undefined]", le = "[object WeakMap]", ue = "[object WeakSet]", de = "[object ArrayBuffer]", fe = "[object DataView]", pe = "[object Float32Array]", me = "[object Float64Array]", he = "[object Int8Array]", ge = "[object Int16Array]", _e = "[object Int32Array]", ve = "[object Uint8Array]", ye = "[object Uint8ClampedArray]", be = "[object Uint16Array]", xe = "[object Uint32Array]", Se = /\b__p \+= '';/g, Ce = /\b(__p \+=) '' \+/g, we = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Te = /&(?:amp|lt|gt|quot|#39);/g, Ee = /[&<>"']/g, De = RegExp(Te.source), Oe = RegExp(Ee.source), ke = /<%-([\s\S]+?)%>/g, Ae = /<%([\s\S]+?)%>/g, je = /<%=([\s\S]+?)%>/g, Me = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ne = /^\w*$/, Pe = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fe = /[\\^$.*+?()[\]{}|]/g, Ie = RegExp(Fe.source), Le = /^\s+/, P = /\s/, Re = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ze = /\{\n\/\* \[wrapped with (.+)\] \*/, Be = /,? & /, Ve = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, He = /[()=,{}\[\]\/\s]/, Ue = /\\(\\)?/g, We = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ge = /\w*$/, Ke = /^[-+]0x[0-9a-f]+$/i, qe = /^0b[01]+$/i, Je = /^\[object .+?Constructor\]$/, Ye = /^0o[0-7]+$/i, Xe = /^(?:0|[1-9]\d*)$/, Ze = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Qe = /($^)/, $e = /['\n\r\u2028\u2029\\]/g, et = "\\ud800-\\udfff", tt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", nt = "\\u2700-\\u27bf", F = "a-z\\xdf-\\xf6\\xf8-\\xff", rt = "\\xac\\xb1\\xd7\\xf7", it = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", at = "\\u2000-\\u206f", ot = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", st = "A-Z\\xc0-\\xd6\\xd8-\\xde", ct = "\\ufe0e\\ufe0f", lt = rt + it + at + ot, ut = "['’]", dt = "[" + et + "]", ft = "[" + lt + "]", pt = "[" + tt + "]", mt = "\\d+", ht = "[" + nt + "]", gt = "[" + F + "]", _t = "[^" + et + lt + mt + nt + F + st + "]", vt = "\\ud83c[\\udffb-\\udfff]", yt = "(?:" + pt + "|" + vt + ")", bt = "[^" + et + "]", I = "(?:\\ud83c[\\udde6-\\uddff]){2}", xt = "[\\ud800-\\udbff][\\udc00-\\udfff]", St = "[" + st + "]", Ct = "\\u200d", wt = "(?:" + gt + "|" + _t + ")", Tt = "(?:" + St + "|" + _t + ")", Et = "(?:" + ut + "(?:d|ll|m|re|s|t|ve))?", Dt = "(?:" + ut + "(?:D|LL|M|RE|S|T|VE))?", Ot = yt + "?", kt = "[" + ct + "]?", At = "(?:" + Ct + "(?:" + [
			bt,
			I,
			xt
		].join("|") + ")" + kt + Ot + ")*", jt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Mt = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Nt = kt + Ot + At, Pt = "(?:" + [
			ht,
			I,
			xt
		].join("|") + ")" + Nt, Ft = "(?:" + [
			bt + pt + "?",
			pt,
			I,
			xt,
			dt
		].join("|") + ")", It = RegExp(ut, "g"), Lt = RegExp(pt, "g"), Rt = RegExp(vt + "(?=" + vt + ")|" + Ft + Nt, "g"), zt = RegExp([
			St + "?" + gt + "+" + Et + "(?=" + [
				ft,
				St,
				"$"
			].join("|") + ")",
			Tt + "+" + Dt + "(?=" + [
				ft,
				St + wt,
				"$"
			].join("|") + ")",
			St + "?" + wt + "+" + Et,
			St + "+" + Dt,
			Mt,
			jt,
			mt,
			Pt
		].join("|"), "g"), Bt = RegExp("[" + Ct + et + tt + ct + "]"), Vt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ht = /* @__PURE__ */ "Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout".split("."), Ut = -1, Wt = {};
		Wt[pe] = Wt[me] = Wt[he] = Wt[ge] = Wt[_e] = Wt[ve] = Wt[ye] = Wt[be] = Wt[xe] = !0, Wt[C] = Wt[w] = Wt[de] = Wt[E] = Wt[fe] = Wt[D] = Wt[O] = Wt[k] = Wt[j] = Wt[te] = Wt[re] = Wt[M] = Wt[oe] = Wt[N] = Wt[le] = !1;
		var Gt = {};
		Gt[C] = Gt[w] = Gt[de] = Gt[fe] = Gt[E] = Gt[D] = Gt[pe] = Gt[me] = Gt[he] = Gt[ge] = Gt[_e] = Gt[j] = Gt[te] = Gt[re] = Gt[M] = Gt[oe] = Gt[N] = Gt[se] = Gt[ve] = Gt[ye] = Gt[be] = Gt[xe] = !0, Gt[O] = Gt[k] = Gt[le] = !1;
		var Kt = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "A",
			Å: "A",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "a",
			å: "a",
			Ç: "C",
			ç: "c",
			Ð: "D",
			ð: "d",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			Ñ: "N",
			ñ: "n",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "O",
			Ø: "O",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "o",
			ø: "o",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "U",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "u",
			Ý: "Y",
			ý: "y",
			ÿ: "y",
			Æ: "Ae",
			æ: "ae",
			Þ: "Th",
			þ: "th",
			ß: "ss",
			Ā: "A",
			Ă: "A",
			Ą: "A",
			ā: "a",
			ă: "a",
			ą: "a",
			Ć: "C",
			Ĉ: "C",
			Ċ: "C",
			Č: "C",
			ć: "c",
			ĉ: "c",
			ċ: "c",
			č: "c",
			Ď: "D",
			Đ: "D",
			ď: "d",
			đ: "d",
			Ē: "E",
			Ĕ: "E",
			Ė: "E",
			Ę: "E",
			Ě: "E",
			ē: "e",
			ĕ: "e",
			ė: "e",
			ę: "e",
			ě: "e",
			Ĝ: "G",
			Ğ: "G",
			Ġ: "G",
			Ģ: "G",
			ĝ: "g",
			ğ: "g",
			ġ: "g",
			ģ: "g",
			Ĥ: "H",
			Ħ: "H",
			ĥ: "h",
			ħ: "h",
			Ĩ: "I",
			Ī: "I",
			Ĭ: "I",
			Į: "I",
			İ: "I",
			ĩ: "i",
			ī: "i",
			ĭ: "i",
			į: "i",
			ı: "i",
			Ĵ: "J",
			ĵ: "j",
			Ķ: "K",
			ķ: "k",
			ĸ: "k",
			Ĺ: "L",
			Ļ: "L",
			Ľ: "L",
			Ŀ: "L",
			Ł: "L",
			ĺ: "l",
			ļ: "l",
			ľ: "l",
			ŀ: "l",
			ł: "l",
			Ń: "N",
			Ņ: "N",
			Ň: "N",
			Ŋ: "N",
			ń: "n",
			ņ: "n",
			ň: "n",
			ŋ: "n",
			Ō: "O",
			Ŏ: "O",
			Ő: "O",
			ō: "o",
			ŏ: "o",
			ő: "o",
			Ŕ: "R",
			Ŗ: "R",
			Ř: "R",
			ŕ: "r",
			ŗ: "r",
			ř: "r",
			Ś: "S",
			Ŝ: "S",
			Ş: "S",
			Š: "S",
			ś: "s",
			ŝ: "s",
			ş: "s",
			š: "s",
			Ţ: "T",
			Ť: "T",
			Ŧ: "T",
			ţ: "t",
			ť: "t",
			ŧ: "t",
			Ũ: "U",
			Ū: "U",
			Ŭ: "U",
			Ů: "U",
			Ű: "U",
			Ų: "U",
			ũ: "u",
			ū: "u",
			ŭ: "u",
			ů: "u",
			ű: "u",
			ų: "u",
			Ŵ: "W",
			ŵ: "w",
			Ŷ: "Y",
			ŷ: "y",
			Ÿ: "Y",
			Ź: "Z",
			Ż: "Z",
			Ž: "Z",
			ź: "z",
			ż: "z",
			ž: "z",
			Ĳ: "IJ",
			ĳ: "ij",
			Œ: "Oe",
			œ: "oe",
			ŉ: "'n",
			ſ: "s"
		}, qt = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		}, Jt = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": "\"",
			"&#39;": "'"
		}, Yt = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"\u2028": "u2028",
			"\u2029": "u2029"
		}, Xt = parseFloat, Zt = parseInt, Qt = typeof global == "object" && global && global.Object === Object && global, $t = typeof self == "object" && self && self.Object === Object && self, en = Qt || $t || Function("return this")(), tn = typeof e == "object" && e && !e.nodeType && e, nn = tn && typeof t == "object" && t && !t.nodeType && t, rn = nn && nn.exports === tn, an = rn && Qt.process, on = function() {
			try {
				return nn && nn.require && nn.require("util").types || an && an.binding && an.binding("util");
			} catch {}
		}(), sn = on && on.isArrayBuffer, cn = on && on.isDate, ln = on && on.isMap, un = on && on.isRegExp, dn = on && on.isSet, fn = on && on.isTypedArray;
		function pn(e, t, n) {
			switch (n.length) {
				case 0: return e.call(t);
				case 1: return e.call(t, n[0]);
				case 2: return e.call(t, n[0], n[1]);
				case 3: return e.call(t, n[0], n[1], n[2]);
			}
			return e.apply(t, n);
		}
		function mn(e, t, n, r) {
			for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
				var o = e[i];
				t(r, o, n(o), e);
			}
			return r;
		}
		function hn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
			return e;
		}
		function gn(e, t) {
			for (var n = e == null ? 0 : e.length; n-- && t(e[n], n, e) !== !1;);
			return e;
		}
		function L(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (!t(e[n], n, e)) return !1;
			return !0;
		}
		function _n(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
				var o = e[n];
				t(o, n, e) && (a[i++] = o);
			}
			return a;
		}
		function vn(e, t) {
			return !!(e != null && e.length) && H(e, t, 0) > -1;
		}
		function yn(e, t, n) {
			for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
			return !1;
		}
		function R(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
			return i;
		}
		function z(e, t) {
			for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
			return e;
		}
		function bn(e, t, n, r) {
			var i = -1, a = e == null ? 0 : e.length;
			for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
			return n;
		}
		function B(e, t, n, r) {
			var i = e == null ? 0 : e.length;
			for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
			return n;
		}
		function xn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
			return !1;
		}
		var Sn = Dn("length");
		function V(e) {
			return e.split("");
		}
		function Cn(e) {
			return e.match(Ve) || [];
		}
		function wn(e, t, n) {
			var r;
			return n(e, function(e, n, i) {
				if (t(e, n, i)) return r = n, !1;
			}), r;
		}
		function Tn(e, t, n, r) {
			for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
			return -1;
		}
		function H(e, t, n) {
			return t === t ? Zn(e, t, n) : Tn(e, U, n);
		}
		function En(e, t, n, r) {
			for (var i = n - 1, a = e.length; ++i < a;) if (r(e[i], t)) return i;
			return -1;
		}
		function U(e) {
			return e !== e;
		}
		function W(e, t) {
			var n = e == null ? 0 : e.length;
			return n ? G(e, t) / n : v;
		}
		function Dn(e) {
			return function(t) {
				return t == null ? n : t[e];
			};
		}
		function On(e) {
			return function(t) {
				return e == null ? n : e[t];
			};
		}
		function kn(e, t, n, r, i) {
			return i(e, function(e, i, a) {
				n = r ? (r = !1, e) : t(n, e, i, a);
			}), n;
		}
		function An(e, t) {
			var n = e.length;
			for (e.sort(t); n--;) e[n] = e[n].value;
			return e;
		}
		function G(e, t) {
			for (var r, i = -1, a = e.length; ++i < a;) {
				var o = t(e[i]);
				o !== n && (r = r === n ? o : r + o);
			}
			return r;
		}
		function K(e, t) {
			for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
			return r;
		}
		function jn(e, t) {
			return R(t, function(t) {
				return [t, e[t]];
			});
		}
		function Mn(e) {
			return e && e.slice(0, tr(e) + 1).replace(Le, "");
		}
		function Nn(e) {
			return function(t) {
				return e(t);
			};
		}
		function Pn(e, t) {
			return R(t, function(t) {
				return e[t];
			});
		}
		function Fn(e, t) {
			return e.has(t);
		}
		function In(e, t) {
			for (var n = -1, r = e.length; ++n < r && H(t, e[n], 0) > -1;);
			return n;
		}
		function Ln(e, t) {
			for (var n = e.length; n-- && H(t, e[n], 0) > -1;);
			return n;
		}
		function Rn(e, t) {
			for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
			return r;
		}
		var zn = On(Kt), Bn = On(qt);
		function Vn(e) {
			return "\\" + Yt[e];
		}
		function Hn(e, t) {
			return e == null ? n : e[t];
		}
		function Un(e) {
			return Bt.test(e);
		}
		function Wn(e) {
			return Vt.test(e);
		}
		function Gn(e) {
			for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
			return n;
		}
		function Kn(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e, r) {
				n[++t] = [r, e];
			}), n;
		}
		function qn(e, t) {
			return function(n) {
				return e(t(n));
			};
		}
		function Jn(e, t) {
			for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
				var s = e[n];
				(s === t || s === a) && (e[n] = a, o[i++] = n);
			}
			return o;
		}
		function Yn(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e) {
				n[++t] = e;
			}), n;
		}
		function Xn(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e) {
				n[++t] = [e, e];
			}), n;
		}
		function Zn(e, t, n) {
			for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
			return -1;
		}
		function Qn(e, t, n) {
			for (var r = n + 1; r--;) if (e[r] === t) return r;
			return r;
		}
		function $n(e) {
			return Un(e) ? rr(e) : Sn(e);
		}
		function er(e) {
			return Un(e) ? ir(e) : V(e);
		}
		function tr(e) {
			for (var t = e.length; t-- && P.test(e.charAt(t)););
			return t;
		}
		var nr = On(Jt);
		function rr(e) {
			for (var t = Rt.lastIndex = 0; Rt.test(e);) ++t;
			return t;
		}
		function ir(e) {
			return e.match(Rt) || [];
		}
		function ar(e) {
			return e.match(zt) || [];
		}
		var or = (function e(t) {
			t = t == null ? en : or.defaults(en.Object(), t, or.pick(en, Ht));
			var P = t.Array, Ve = t.Date, et = t.Error, tt = t.Function, nt = t.Math, F = t.Object, rt = t.RegExp, it = t.String, at = t.TypeError, ot = P.prototype, st = tt.prototype, ct = F.prototype, lt = t["__core-js_shared__"], ut = st.toString, dt = ct.hasOwnProperty, ft = 0, pt = function() {
				var e = /[^.]+$/.exec(lt && lt.keys && lt.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : "";
			}(), mt = ct.toString, ht = ut.call(F), gt = en._, _t = rt("^" + ut.call(dt).replace(Fe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), vt = rn ? t.Buffer : n, yt = t.Symbol, bt = t.Uint8Array, I = vt ? vt.allocUnsafe : n, xt = qn(F.getPrototypeOf, F), St = F.create, Ct = ct.propertyIsEnumerable, wt = ot.splice, Tt = yt ? yt.isConcatSpreadable : n, Et = yt ? yt.iterator : n, Dt = yt ? yt.toStringTag : n, Ot = function() {
				try {
					var e = No(F, "defineProperty");
					return e({}, "", {}), e;
				} catch {}
			}(), kt = t.clearTimeout !== en.clearTimeout && t.clearTimeout, At = Ve && Ve.now !== en.Date.now && Ve.now, jt = t.setTimeout !== en.setTimeout && t.setTimeout, Mt = nt.ceil, Nt = nt.floor, Pt = F.getOwnPropertySymbols, Ft = vt ? vt.isBuffer : n, Rt = t.isFinite, zt = ot.join, Bt = qn(F.keys, F), Vt = nt.max, Kt = nt.min, qt = Ve.now, Jt = t.parseInt, Yt = nt.random, Qt = ot.reverse, $t = No(t, "DataView"), tn = No(t, "Map"), nn = No(t, "Promise"), an = No(t, "Set"), on = No(t, "WeakMap"), Sn = No(F, "create"), V = on && new on(), On = {}, Zn = vs($t), rr = vs(tn), ir = vs(nn), sr = vs(an), cr = vs(on), lr = yt ? yt.prototype : n, ur = lr ? lr.valueOf : n, dr = lr ? lr.toString : n;
			function q(e) {
				if (uu(e) && !X(e) && !(e instanceof hr)) {
					if (e instanceof mr) return e;
					if (dt.call(e, "__wrapped__")) return bs(e);
				}
				return new mr(e);
			}
			var fr = function() {
				function e() {}
				return function(t) {
					if (!lu(t)) return {};
					if (St) return St(t);
					e.prototype = t;
					var r = new e();
					return e.prototype = n, r;
				};
			}();
			function pr() {}
			function mr(e, t) {
				this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = n;
			}
			q.templateSettings = {
				escape: ke,
				evaluate: Ae,
				interpolate: je,
				variable: "",
				imports: { _: q }
			}, q.prototype = pr.prototype, q.prototype.constructor = q, mr.prototype = fr(pr.prototype), mr.prototype.constructor = mr;
			function hr(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = y, this.__views__ = [];
			}
			function gr() {
				var e = new hr(this.__wrapped__);
				return e.__actions__ = Wa(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Wa(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Wa(this.__views__), e;
			}
			function _r() {
				if (this.__filtered__) {
					var e = new hr(this);
					e.__dir__ = -1, e.__filtered__ = !0;
				} else e = this.clone(), e.__dir__ *= -1;
				return e;
			}
			function vr() {
				var e = this.__wrapped__.value(), t = this.__dir__, n = X(e), r = t < 0, i = n ? e.length : 0, a = Ro(0, i, this.__views__), o = a.start, s = a.end, c = s - o, l = r ? s : o - 1, u = this.__iteratees__, d = u.length, f = 0, p = Kt(c, this.__takeCount__);
				if (!n || !r && i == c && p == c) return Ta(e, this.__actions__);
				var m = [];
				outer: for (; c-- && f < p;) {
					l += t;
					for (var h = -1, g = e[l]; ++h < d;) {
						var _ = u[h], v = _.iteratee, y = _.type, b = v(g);
						if (y == 2) g = b;
						else if (!b) {
							if (y == 1) continue outer;
							break outer;
						}
					}
					m[f++] = g;
				}
				return m;
			}
			hr.prototype = fr(pr.prototype), hr.prototype.constructor = hr;
			function yr(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function br() {
				this.__data__ = Sn ? Sn(null) : {}, this.size = 0;
			}
			function xr(e) {
				var t = this.has(e) && delete this.__data__[e];
				return this.size -= +!!t, t;
			}
			function Sr(e) {
				var t = this.__data__;
				if (Sn) {
					var r = t[e];
					return r === i ? n : r;
				}
				return dt.call(t, e) ? t[e] : n;
			}
			function Cr(e) {
				var t = this.__data__;
				return Sn ? t[e] !== n : dt.call(t, e);
			}
			function wr(e, t) {
				var r = this.__data__;
				return this.size += +!this.has(e), r[e] = Sn && t === n ? i : t, this;
			}
			yr.prototype.clear = br, yr.prototype.delete = xr, yr.prototype.get = Sr, yr.prototype.has = Cr, yr.prototype.set = wr;
			function Tr(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function Er() {
				this.__data__ = [], this.size = 0;
			}
			function Dr(e) {
				var t = this.__data__, n = Qr(t, e);
				return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : wt.call(t, n, 1), --this.size, !0);
			}
			function Or(e) {
				var t = this.__data__, r = Qr(t, e);
				return r < 0 ? n : t[r][1];
			}
			function kr(e) {
				return Qr(this.__data__, e) > -1;
			}
			function Ar(e, t) {
				var n = this.__data__, r = Qr(n, e);
				return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
			}
			Tr.prototype.clear = Er, Tr.prototype.delete = Dr, Tr.prototype.get = Or, Tr.prototype.has = kr, Tr.prototype.set = Ar;
			function jr(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function Mr() {
				this.size = 0, this.__data__ = {
					hash: new yr(),
					map: new (tn || Tr)(),
					string: new yr()
				};
			}
			function Nr(e) {
				var t = jo(this, e).delete(e);
				return this.size -= +!!t, t;
			}
			function Pr(e) {
				return jo(this, e).get(e);
			}
			function Fr(e) {
				return jo(this, e).has(e);
			}
			function Ir(e, t) {
				var n = jo(this, e), r = n.size;
				return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
			}
			jr.prototype.clear = Mr, jr.prototype.delete = Nr, jr.prototype.get = Pr, jr.prototype.has = Fr, jr.prototype.set = Ir;
			function Lr(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.__data__ = new jr(); ++t < n;) this.add(e[t]);
			}
			function Rr(e) {
				return this.__data__.set(e, i), this;
			}
			function zr(e) {
				return this.__data__.has(e);
			}
			Lr.prototype.add = Lr.prototype.push = Rr, Lr.prototype.has = zr;
			function Br(e) {
				var t = this.__data__ = new Tr(e);
				this.size = t.size;
			}
			function Vr() {
				this.__data__ = new Tr(), this.size = 0;
			}
			function Hr(e) {
				var t = this.__data__, n = t.delete(e);
				return this.size = t.size, n;
			}
			function Ur(e) {
				return this.__data__.get(e);
			}
			function Wr(e) {
				return this.__data__.has(e);
			}
			function Gr(e, t) {
				var n = this.__data__;
				if (n instanceof Tr) {
					var r = n.__data__;
					if (!tn || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
					n = this.__data__ = new jr(r);
				}
				return n.set(e, t), this.size = n.size, this;
			}
			Br.prototype.clear = Vr, Br.prototype.delete = Hr, Br.prototype.get = Ur, Br.prototype.has = Wr, Br.prototype.set = Gr;
			function Kr(e, t) {
				var n = X(e), r = !n && ql(e), i = !n && !r && Ql(e), a = !n && !r && !i && Tu(e), o = n || r || i || a, s = o ? K(e.length, it) : [], c = s.length;
				for (var l in e) (t || dt.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Ko(l, c))) && s.push(l);
				return s;
			}
			function qr(e) {
				var t = e.length;
				return t ? e[aa(0, t - 1)] : n;
			}
			function Jr(e, t) {
				return hs(Wa(e), ii(t, 0, e.length));
			}
			function Yr(e) {
				return hs(Wa(e));
			}
			function Xr(e, t, r) {
				(r !== n && !Wl(e[t], r) || r === n && !(t in e)) && ni(e, t, r);
			}
			function Zr(e, t, r) {
				var i = e[t];
				(!(dt.call(e, t) && Wl(i, r)) || r === n && !(t in e)) && ni(e, t, r);
			}
			function Qr(e, t) {
				for (var n = e.length; n--;) if (Wl(e[n][0], t)) return n;
				return -1;
			}
			function $r(e, t, n, r) {
				return ui(e, function(e, i, a) {
					t(r, e, n(e), a);
				}), r;
			}
			function ei(e, t) {
				return e && Ga(t, id(t), e);
			}
			function ti(e, t) {
				return e && Ga(t, ad(t), e);
			}
			function ni(e, t, n) {
				t == "__proto__" && Ot ? Ot(e, t, {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0
				}) : e[t] = n;
			}
			function ri(e, t) {
				for (var r = -1, i = t.length, a = P(i), o = e == null; ++r < i;) a[r] = o ? n : Qu(e, t[r]);
				return a;
			}
			function ii(e, t, r) {
				return e === e && (r !== n && (e = e <= r ? e : r), t !== n && (e = e >= t ? e : t)), e;
			}
			function ai(e, t, r, i, a, o) {
				var s, c = t & 1, l = t & 2, u = t & 4;
				if (r && (s = a ? r(e, i, a, o) : r(e)), s !== n) return s;
				if (!lu(e)) return e;
				var d = X(e);
				if (d) {
					if (s = Vo(e), !c) return Wa(e, s);
				} else {
					var f = Lo(e), p = f == k || f == A;
					if (Ql(e)) return Pa(e, c);
					if (f == re || f == C || p && !a) {
						if (s = l || p ? {} : Ho(e), !c) return l ? qa(e, ti(s, e)) : Ka(e, ei(s, e));
					} else {
						if (!Gt[f]) return a ? e : {};
						s = Uo(e, f, c);
					}
				}
				o ||= new Br();
				var m = o.get(e);
				if (m) return m;
				o.set(e, s), Su(e) ? e.forEach(function(n) {
					s.add(ai(n, t, r, n, e, o));
				}) : du(e) && e.forEach(function(n, i) {
					s.set(i, ai(n, t, r, i, e, o));
				});
				var h = d ? n : (u ? l ? Do : Eo : l ? ad : id)(e);
				return hn(h || e, function(n, i) {
					h && (i = n, n = e[i]), Zr(s, i, ai(n, t, r, i, e, o));
				}), s;
			}
			function oi(e) {
				var t = id(e);
				return function(n) {
					return si(n, e, t);
				};
			}
			function si(e, t, r) {
				var i = r.length;
				if (e == null) return !i;
				for (e = F(e); i--;) {
					var a = r[i], o = t[a], s = e[a];
					if (s === n && !(a in e) || !o(s)) return !1;
				}
				return !0;
			}
			function ci(e, t, i) {
				if (typeof e != "function") throw new at(r);
				return ds(function() {
					e.apply(n, i);
				}, t);
			}
			function li(e, t, n, r) {
				var i = -1, a = vn, o = !0, s = e.length, c = [], l = t.length;
				if (!s) return c;
				n && (t = R(t, Nn(n))), r ? (a = yn, o = !1) : t.length >= 200 && (a = Fn, o = !1, t = new Lr(t));
				outer: for (; ++i < s;) {
					var u = e[i], d = n == null ? u : n(u);
					if (u = r || u !== 0 ? u : 0, o && d === d) {
						for (var f = l; f--;) if (t[f] === d) continue outer;
						c.push(u);
					} else a(t, d, r) || c.push(u);
				}
				return c;
			}
			var ui = Xa(yi), di = Xa(bi, !0);
			function fi(e, t) {
				var n = !0;
				return ui(e, function(e, r, i) {
					return n = !!t(e, r, i), n;
				}), n;
			}
			function pi(e, t, r) {
				for (var i = -1, a = e.length; ++i < a;) {
					var o = e[i], s = t(o);
					if (s != null && (c === n ? s === s && !wu(s) : r(s, c))) var c = s, l = o;
				}
				return l;
			}
			function mi(e, t, r, i) {
				var a = e.length;
				for (r = Z(r), r < 0 && (r = -r > a ? 0 : a + r), i = i === n || i > a ? a : Z(i), i < 0 && (i += a), i = r > i ? 0 : Nu(i); r < i;) e[r++] = t;
				return e;
			}
			function hi(e, t) {
				var n = [];
				return ui(e, function(e, r, i) {
					t(e, r, i) && n.push(e);
				}), n;
			}
			function gi(e, t, n, r, i) {
				var a = -1, o = e.length;
				for (n ||= Go, i ||= []; ++a < o;) {
					var s = e[a];
					t > 0 && n(s) ? t > 1 ? gi(s, t - 1, n, r, i) : z(i, s) : r || (i[i.length] = s);
				}
				return i;
			}
			var _i = Za(), vi = Za(!0);
			function yi(e, t) {
				return e && _i(e, t, id);
			}
			function bi(e, t) {
				return e && vi(e, t, id);
			}
			function xi(e, t) {
				return _n(t, function(t) {
					return ou(e[t]);
				});
			}
			function Si(e, t) {
				t = Aa(t, e);
				for (var r = 0, i = t.length; e != null && r < i;) e = e[_s(t[r++])];
				return r && r == i ? e : n;
			}
			function Ci(e, t, n) {
				var r = t(e);
				return X(e) ? r : z(r, n(e));
			}
			function wi(e) {
				return e == null ? e === n ? ce : ne : Dt && Dt in F(e) ? Po(e) : as(e);
			}
			function Ti(e, t) {
				return e > t;
			}
			function Ei(e, t) {
				return e != null && dt.call(e, t);
			}
			function Di(e, t) {
				return e != null && t in F(e);
			}
			function Oi(e, t, n) {
				return e >= Kt(t, n) && e < Vt(t, n);
			}
			function ki(e, t, r) {
				for (var i = r ? yn : vn, a = e[0].length, o = e.length, s = o, c = P(o), l = Infinity, u = []; s--;) {
					var d = e[s];
					s && t && (d = R(d, Nn(t))), l = Kt(d.length, l), c[s] = !r && (t || a >= 120 && d.length >= 120) ? new Lr(s && d) : n;
				}
				d = e[0];
				var f = -1, p = c[0];
				outer: for (; ++f < a && u.length < l;) {
					var m = d[f], h = t ? t(m) : m;
					if (m = r || m !== 0 ? m : 0, !(p ? Fn(p, h) : i(u, h, r))) {
						for (s = o; --s;) {
							var g = c[s];
							if (!(g ? Fn(g, h) : i(e[s], h, r))) continue outer;
						}
						p && p.push(h), u.push(m);
					}
				}
				return u;
			}
			function Ai(e, t, n, r) {
				return yi(e, function(e, i, a) {
					t(r, n(e), i, a);
				}), r;
			}
			function ji(e, t, r) {
				t = Aa(t, e), e = ss(e, t);
				var i = e == null ? e : e[_s(Gs(t))];
				return i == null ? n : pn(i, e, r);
			}
			function Mi(e) {
				return uu(e) && wi(e) == C;
			}
			function Ni(e) {
				return uu(e) && wi(e) == de;
			}
			function Pi(e) {
				return uu(e) && wi(e) == D;
			}
			function Fi(e, t, n, r, i) {
				return e === t ? !0 : e == null || t == null || !uu(e) && !uu(t) ? e !== e && t !== t : Ii(e, t, n, r, Fi, i);
			}
			function Ii(e, t, n, r, i, a) {
				var o = X(e), s = X(t), c = o ? w : Lo(e), l = s ? w : Lo(t);
				c = c == C ? re : c, l = l == C ? re : l;
				var u = c == re, d = l == re, f = c == l;
				if (f && Ql(e)) {
					if (!Ql(t)) return !1;
					o = !0, u = !1;
				}
				if (f && !u) return a ||= new Br(), o || Tu(e) ? So(e, t, n, r, i, a) : Co(e, t, c, n, r, i, a);
				if (!(n & 1)) {
					var p = u && dt.call(e, "__wrapped__"), m = d && dt.call(t, "__wrapped__");
					if (p || m) {
						var h = p ? e.value() : e, g = m ? t.value() : t;
						return a ||= new Br(), i(h, g, n, r, a);
					}
				}
				return f ? (a ||= new Br(), wo(e, t, n, r, i, a)) : !1;
			}
			function Li(e) {
				return uu(e) && Lo(e) == j;
			}
			function Ri(e, t, r, i) {
				var a = r.length, o = a, s = !i;
				if (e == null) return !o;
				for (e = F(e); a--;) {
					var c = r[a];
					if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
				}
				for (; ++a < o;) {
					c = r[a];
					var l = c[0], u = e[l], d = c[1];
					if (s && c[2]) {
						if (u === n && !(l in e)) return !1;
					} else {
						var f = new Br();
						if (i) var p = i(u, d, l, e, t, f);
						if (!(p === n ? Fi(d, u, 3, i, f) : p)) return !1;
					}
				}
				return !0;
			}
			function zi(e) {
				return !lu(e) || Zo(e) ? !1 : (ou(e) ? _t : Je).test(vs(e));
			}
			function Bi(e) {
				return uu(e) && wi(e) == M;
			}
			function Vi(e) {
				return uu(e) && Lo(e) == oe;
			}
			function Hi(e) {
				return uu(e) && cu(e.length) && !!Wt[wi(e)];
			}
			function Ui(e) {
				return typeof e == "function" ? e : e == null ? pf : typeof e == "object" ? X(e) ? Yi(e[0], e[1]) : Ji(e) : Ef(e);
			}
			function Wi(e) {
				if (!$o(e)) return Bt(e);
				var t = [];
				for (var n in F(e)) dt.call(e, n) && n != "constructor" && t.push(n);
				return t;
			}
			function Gi(e) {
				if (!lu(e)) return is(e);
				var t = $o(e), n = [];
				for (var r in e) r == "constructor" && (t || !dt.call(e, r)) || n.push(r);
				return n;
			}
			function Ki(e, t) {
				return e < t;
			}
			function qi(e, t) {
				var n = -1, r = Yl(e) ? P(e.length) : [];
				return ui(e, function(e, i, a) {
					r[++n] = t(e, i, a);
				}), r;
			}
			function Ji(e) {
				var t = Mo(e);
				return t.length == 1 && t[0][2] ? ts(t[0][0], t[0][1]) : function(n) {
					return n === e || Ri(n, e, t);
				};
			}
			function Yi(e, t) {
				return Jo(e) && es(t) ? ts(_s(e), t) : function(r) {
					var i = Qu(r, e);
					return i === n && i === t ? ed(r, e) : Fi(t, i, 3);
				};
			}
			function Xi(e, t, r, i, a) {
				e !== t && _i(t, function(o, s) {
					if (a ||= new Br(), lu(o)) Zi(e, t, s, r, Xi, i, a);
					else {
						var c = i ? i(ls(e, s), o, s + "", e, t, a) : n;
						c === n && (c = o), Xr(e, s, c);
					}
				}, ad);
			}
			function Zi(e, t, r, i, a, o, s) {
				var c = ls(e, r), l = ls(t, r), u = s.get(l);
				if (u) {
					Xr(e, r, u);
					return;
				}
				var d = o ? o(c, l, r + "", e, t, s) : n, f = d === n;
				if (f) {
					var p = X(l), m = !p && Ql(l), h = !p && !m && Tu(l);
					d = l, p || m || h ? X(c) ? d = c : Xl(c) ? d = Wa(c) : m ? (f = !1, d = Pa(l, !0)) : h ? (f = !1, d = za(l, !0)) : d = [] : yu(l) || ql(l) ? (d = c, ql(c) ? d = Fu(c) : (!lu(c) || ou(c)) && (d = Ho(l))) : f = !1;
				}
				f && (s.set(l, d), a(d, l, i, o, s), s.delete(l)), Xr(e, r, d);
			}
			function Qi(e, t) {
				var r = e.length;
				if (r) return t += t < 0 ? r : 0, Ko(t, r) ? e[t] : n;
			}
			function $i(e, t, n) {
				t = t.length ? R(t, function(e) {
					return X(e) ? function(t) {
						return Si(t, e.length === 1 ? e[0] : e);
					} : e;
				}) : [pf];
				var r = -1;
				return t = R(t, Nn(Y())), An(qi(e, function(e, n, i) {
					return {
						criteria: R(t, function(t) {
							return t(e);
						}),
						index: ++r,
						value: e
					};
				}), function(e, t) {
					return Va(e, t, n);
				});
			}
			function ea(e, t) {
				return ta(e, t, function(t, n) {
					return ed(e, n);
				});
			}
			function ta(e, t, n) {
				for (var r = -1, i = t.length, a = {}; ++r < i;) {
					var o = t[r], s = Si(e, o);
					n(s, o) && ua(a, Aa(o, e), s);
				}
				return a;
			}
			function na(e) {
				return function(t) {
					return Si(t, e);
				};
			}
			function ra(e, t, n, r) {
				var i = r ? En : H, a = -1, o = t.length, s = e;
				for (e === t && (t = Wa(t)), n && (s = R(e, Nn(n))); ++a < o;) for (var c = 0, l = t[a], u = n ? n(l) : l; (c = i(s, u, c, r)) > -1;) s !== e && wt.call(s, c, 1), wt.call(e, c, 1);
				return e;
			}
			function ia(e, t) {
				for (var n = e ? t.length : 0, r = n - 1; n--;) {
					var i = t[n];
					if (n == r || i !== a) {
						var a = i;
						Ko(i) ? wt.call(e, i, 1) : Sa(e, i);
					}
				}
				return e;
			}
			function aa(e, t) {
				return e + Nt(Yt() * (t - e + 1));
			}
			function oa(e, t, n, r) {
				for (var i = -1, a = Vt(Mt((t - e) / (n || 1)), 0), o = P(a); a--;) o[r ? a : ++i] = e, e += n;
				return o;
			}
			function sa(e, t) {
				var n = "";
				if (!e || t < 1 || t > g) return n;
				do
					t % 2 && (n += e), t = Nt(t / 2), t && (e += e);
				while (t);
				return n;
			}
			function J(e, t) {
				return fs(os(e, t, pf), e + "");
			}
			function ca(e) {
				return qr(Cd(e));
			}
			function la(e, t) {
				var n = Cd(e);
				return hs(n, ii(t, 0, n.length));
			}
			function ua(e, t, r, i) {
				if (!lu(e)) return e;
				t = Aa(t, e);
				for (var a = -1, o = t.length, s = o - 1, c = e; c != null && ++a < o;) {
					var l = _s(t[a]), u = r;
					if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
					if (a != s) {
						var d = c[l];
						u = i ? i(d, l, c) : n, u === n && (u = lu(d) ? d : Ko(t[a + 1]) ? [] : {});
					}
					Zr(c, l, u), c = c[l];
				}
				return e;
			}
			var da = V ? function(e, t) {
				return V.set(e, t), e;
			} : pf, fa = Ot ? function(e, t) {
				return Ot(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: lf(t),
					writable: !0
				});
			} : pf;
			function pa(e) {
				return hs(Cd(e));
			}
			function ma(e, t, n) {
				var r = -1, i = e.length;
				t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
				for (var a = P(i); ++r < i;) a[r] = e[r + t];
				return a;
			}
			function ha(e, t) {
				var n;
				return ui(e, function(e, r, i) {
					return n = t(e, r, i), !n;
				}), !!n;
			}
			function ga(e, t, n) {
				var r = 0, i = e == null ? r : e.length;
				if (typeof t == "number" && t === t && i <= x) {
					for (; r < i;) {
						var a = r + i >>> 1, o = e[a];
						o !== null && !wu(o) && (n ? o <= t : o < t) ? r = a + 1 : i = a;
					}
					return i;
				}
				return _a(e, t, pf, n);
			}
			function _a(e, t, r, i) {
				var a = 0, o = e == null ? 0 : e.length;
				if (o === 0) return 0;
				t = r(t);
				for (var s = t !== t, c = t === null, l = wu(t), u = t === n; a < o;) {
					var d = Nt((a + o) / 2), f = r(e[d]), p = f !== n, m = f === null, h = f === f, g = wu(f);
					if (s) var _ = i || h;
					else _ = u ? h && (i || p) : c ? h && p && (i || !m) : l ? h && p && !m && (i || !g) : m || g ? !1 : i ? f <= t : f < t;
					_ ? a = d + 1 : o = d;
				}
				return Kt(o, b);
			}
			function va(e, t) {
				for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
					var o = e[n], s = t ? t(o) : o;
					if (!n || !Wl(s, c)) {
						var c = s;
						a[i++] = o === 0 ? 0 : o;
					}
				}
				return a;
			}
			function ya(e) {
				return typeof e == "number" ? e : wu(e) ? v : +e;
			}
			function ba(e) {
				if (typeof e == "string") return e;
				if (X(e)) return R(e, ba) + "";
				if (wu(e)) return dr ? dr.call(e) : "";
				var t = e + "";
				return t == "0" && 1 / e == -Infinity ? "-0" : t;
			}
			function xa(e, t, n) {
				var r = -1, i = vn, a = e.length, o = !0, s = [], c = s;
				if (n) o = !1, i = yn;
				else if (a >= 200) {
					var l = t ? null : go(e);
					if (l) return Yn(l);
					o = !1, i = Fn, c = new Lr();
				} else c = t ? [] : s;
				outer: for (; ++r < a;) {
					var u = e[r], d = t ? t(u) : u;
					if (u = n || u !== 0 ? u : 0, o && d === d) {
						for (var f = c.length; f--;) if (c[f] === d) continue outer;
						t && c.push(d), s.push(u);
					} else i(c, d, n) || (c !== s && c.push(d), s.push(u));
				}
				return s;
			}
			function Sa(e, t) {
				return t = Aa(t, e), e = ss(e, t), e == null || delete e[_s(Gs(t))];
			}
			function Ca(e, t, n, r) {
				return ua(e, t, n(Si(e, t)), r);
			}
			function wa(e, t, n, r) {
				for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e););
				return n ? ma(e, r ? 0 : a, r ? a + 1 : i) : ma(e, r ? a + 1 : 0, r ? i : a);
			}
			function Ta(e, t) {
				var n = e;
				return n instanceof hr && (n = n.value()), bn(t, function(e, t) {
					return t.func.apply(t.thisArg, z([e], t.args));
				}, n);
			}
			function Ea(e, t, n) {
				var r = e.length;
				if (r < 2) return r ? xa(e[0]) : [];
				for (var i = -1, a = P(r); ++i < r;) for (var o = e[i], s = -1; ++s < r;) s != i && (a[i] = li(a[i] || o, e[s], t, n));
				return xa(gi(a, 1), t, n);
			}
			function Da(e, t, r) {
				for (var i = -1, a = e.length, o = t.length, s = {}; ++i < a;) {
					var c = i < o ? t[i] : n;
					r(s, e[i], c);
				}
				return s;
			}
			function Oa(e) {
				return Xl(e) ? e : [];
			}
			function ka(e) {
				return typeof e == "function" ? e : pf;
			}
			function Aa(e, t) {
				return X(e) ? e : Jo(e, t) ? [e] : gs(Q(e));
			}
			var ja = J;
			function Ma(e, t, r) {
				var i = e.length;
				return r = r === n ? i : r, !t && r >= i ? e : ma(e, t, r);
			}
			var Na = kt || function(e) {
				return en.clearTimeout(e);
			};
			function Pa(e, t) {
				if (t) return e.slice();
				var n = e.length, r = I ? I(n) : new e.constructor(n);
				return e.copy(r), r;
			}
			function Fa(e) {
				var t = new e.constructor(e.byteLength);
				return new bt(t).set(new bt(e)), t;
			}
			function Ia(e, t) {
				var n = t ? Fa(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.byteLength);
			}
			function La(e) {
				var t = new e.constructor(e.source, Ge.exec(e));
				return t.lastIndex = e.lastIndex, t;
			}
			function Ra(e) {
				return ur ? F(ur.call(e)) : {};
			}
			function za(e, t) {
				var n = t ? Fa(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.length);
			}
			function Ba(e, t) {
				if (e !== t) {
					var r = e !== n, i = e === null, a = e === e, o = wu(e), s = t !== n, c = t === null, l = t === t, u = wu(t);
					if (!c && !u && !o && e > t || o && s && l && !c && !u || i && s && l || !r && l || !a) return 1;
					if (!i && !o && !u && e < t || u && r && a && !i && !o || c && r && a || !s && a || !l) return -1;
				}
				return 0;
			}
			function Va(e, t, n) {
				for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, s = n.length; ++r < o;) {
					var c = Ba(i[r], a[r]);
					if (c) return r >= s ? c : c * (n[r] == "desc" ? -1 : 1);
				}
				return e.index - t.index;
			}
			function Ha(e, t, n, r) {
				for (var i = -1, a = e.length, o = n.length, s = -1, c = t.length, l = Vt(a - o, 0), u = P(c + l), d = !r; ++s < c;) u[s] = t[s];
				for (; ++i < o;) (d || i < a) && (u[n[i]] = e[i]);
				for (; l--;) u[s++] = e[i++];
				return u;
			}
			function Ua(e, t, n, r) {
				for (var i = -1, a = e.length, o = -1, s = n.length, c = -1, l = t.length, u = Vt(a - s, 0), d = P(u + l), f = !r; ++i < u;) d[i] = e[i];
				for (var p = i; ++c < l;) d[p + c] = t[c];
				for (; ++o < s;) (f || i < a) && (d[p + n[o]] = e[i++]);
				return d;
			}
			function Wa(e, t) {
				var n = -1, r = e.length;
				for (t ||= P(r); ++n < r;) t[n] = e[n];
				return t;
			}
			function Ga(e, t, r, i) {
				var a = !r;
				r ||= {};
				for (var o = -1, s = t.length; ++o < s;) {
					var c = t[o], l = i ? i(r[c], e[c], c, r, e) : n;
					l === n && (l = e[c]), a ? ni(r, c, l) : Zr(r, c, l);
				}
				return r;
			}
			function Ka(e, t) {
				return Ga(e, Fo(e), t);
			}
			function qa(e, t) {
				return Ga(e, Io(e), t);
			}
			function Ja(e, t) {
				return function(n, r) {
					var i = X(n) ? mn : $r, a = t ? t() : {};
					return i(n, e, Y(r, 2), a);
				};
			}
			function Ya(e) {
				return J(function(t, r) {
					var i = -1, a = r.length, o = a > 1 ? r[a - 1] : n, s = a > 2 ? r[2] : n;
					for (o = e.length > 3 && typeof o == "function" ? (a--, o) : n, s && qo(r[0], r[1], s) && (o = a < 3 ? n : o, a = 1), t = F(t); ++i < a;) {
						var c = r[i];
						c && e(t, c, i, o);
					}
					return t;
				});
			}
			function Xa(e, t) {
				return function(n, r) {
					if (n == null) return n;
					if (!Yl(n)) return e(n, r);
					for (var i = n.length, a = t ? i : -1, o = F(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
					return n;
				};
			}
			function Za(e) {
				return function(t, n, r) {
					for (var i = -1, a = F(t), o = r(t), s = o.length; s--;) {
						var c = o[e ? s : ++i];
						if (n(a[c], c, a) === !1) break;
					}
					return t;
				};
			}
			function Qa(e, t, n) {
				var r = t & o, i = to(e);
				function a() {
					return (this && this !== en && this instanceof a ? i : e).apply(r ? n : this, arguments);
				}
				return a;
			}
			function $a(e) {
				return function(t) {
					t = Q(t);
					var r = Un(t) ? er(t) : n, i = r ? r[0] : t.charAt(0), a = r ? Ma(r, 1).join("") : t.slice(1);
					return i[e]() + a;
				};
			}
			function eo(e) {
				return function(t) {
					return bn(rf(Ad(t).replace(It, "")), e, "");
				};
			}
			function to(e) {
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return new e();
						case 1: return new e(t[0]);
						case 2: return new e(t[0], t[1]);
						case 3: return new e(t[0], t[1], t[2]);
						case 4: return new e(t[0], t[1], t[2], t[3]);
						case 5: return new e(t[0], t[1], t[2], t[3], t[4]);
						case 6: return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
						case 7: return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
					}
					var n = fr(e.prototype), r = e.apply(n, t);
					return lu(r) ? r : n;
				};
			}
			function no(e, t, r) {
				var i = to(e);
				function a() {
					for (var o = arguments.length, s = P(o), c = o, l = Ao(a); c--;) s[c] = arguments[c];
					var u = o < 3 && s[0] !== l && s[o - 1] !== l ? [] : Jn(s, l);
					return o -= u.length, o < r ? mo(e, t, ao, a.placeholder, n, s, u, n, n, r - o) : pn(this && this !== en && this instanceof a ? i : e, this, s);
				}
				return a;
			}
			function ro(e) {
				return function(t, r, i) {
					var a = F(t);
					if (!Yl(t)) {
						var o = Y(r, 3);
						t = id(t), r = function(e) {
							return o(a[e], e, a);
						};
					}
					var s = e(t, r, i);
					return s > -1 ? a[o ? t[s] : s] : n;
				};
			}
			function io(e) {
				return To(function(t) {
					var i = t.length, a = i, o = mr.prototype.thru;
					for (e && t.reverse(); a--;) {
						var s = t[a];
						if (typeof s != "function") throw new at(r);
						if (o && !l && ko(s) == "wrapper") var l = new mr([], !0);
					}
					for (a = l ? a : i; ++a < i;) {
						s = t[a];
						var d = ko(s), m = d == "wrapper" ? Oo(s) : n;
						l = m && Xo(m[0]) && m[1] == (f | c | u | p) && !m[4].length && m[9] == 1 ? l[ko(m[0])].apply(l, m[3]) : s.length == 1 && Xo(s) ? l[d]() : l.thru(s);
					}
					return function() {
						var e = arguments, n = e[0];
						if (l && e.length == 1 && X(n)) return l.plant(n).value();
						for (var r = 0, a = i ? t[r].apply(this, e) : n; ++r < i;) a = t[r].call(this, a);
						return a;
					};
				});
			}
			function ao(e, t, r, i, a, u, d, p, h, g) {
				var _ = t & f, v = t & o, y = t & s, b = t & (c | l), x = t & m, S = y ? n : to(e);
				function C() {
					for (var n = arguments.length, o = P(n), s = n; s--;) o[s] = arguments[s];
					if (b) var c = Ao(C), l = Rn(o, c);
					if (i && (o = Ha(o, i, a, b)), u && (o = Ua(o, u, d, b)), n -= l, b && n < g) {
						var f = Jn(o, c);
						return mo(e, t, ao, C.placeholder, r, o, f, p, h, g - n);
					}
					var m = v ? r : this, w = y ? m[e] : e;
					return n = o.length, p ? o = cs(o, p) : x && n > 1 && o.reverse(), _ && h < n && (o.length = h), this && this !== en && this instanceof C && (w = S || to(w)), w.apply(m, o);
				}
				return C;
			}
			function oo(e, t) {
				return function(n, r) {
					return Ai(n, e, t(r), {});
				};
			}
			function so(e, t) {
				return function(r, i) {
					var a;
					if (r === n && i === n) return t;
					if (r !== n && (a = r), i !== n) {
						if (a === n) return i;
						typeof r == "string" || typeof i == "string" ? (r = ba(r), i = ba(i)) : (r = ya(r), i = ya(i)), a = e(r, i);
					}
					return a;
				};
			}
			function co(e) {
				return To(function(t) {
					return t = R(t, Nn(Y())), J(function(n) {
						var r = this;
						return e(t, function(e) {
							return pn(e, r, n);
						});
					});
				});
			}
			function lo(e, t) {
				t = t === n ? " " : ba(t);
				var r = t.length;
				if (r < 2) return r ? sa(t, e) : t;
				var i = sa(t, Mt(e / $n(t)));
				return Un(t) ? Ma(er(i), 0, e).join("") : i.slice(0, e);
			}
			function uo(e, t, n, r) {
				var i = t & o, a = to(e);
				function s() {
					for (var t = -1, o = arguments.length, c = -1, l = r.length, u = P(l + o), d = this && this !== en && this instanceof s ? a : e; ++c < l;) u[c] = r[c];
					for (; o--;) u[c++] = arguments[++t];
					return pn(d, i ? n : this, u);
				}
				return s;
			}
			function fo(e) {
				return function(t, r, i) {
					return i && typeof i != "number" && qo(t, r, i) && (r = i = n), t = Mu(t), r === n ? (r = t, t = 0) : r = Mu(r), i = i === n ? t < r ? 1 : -1 : Mu(i), oa(t, r, i, e);
				};
			}
			function po(e) {
				return function(t, n) {
					return (typeof t != "string" || typeof n != "string") && (t = Pu(t), n = Pu(n)), e(t, n);
				};
			}
			function mo(e, t, r, i, a, l, f, p, m, h) {
				var g = t & c, _ = g ? f : n, v = g ? n : f, y = g ? l : n, b = g ? n : l;
				t |= g ? u : d, t &= ~(g ? d : u), t & 4 || (t &= ~(o | s));
				var x = [
					e,
					t,
					a,
					y,
					_,
					b,
					v,
					p,
					m,
					h
				], S = r.apply(n, x);
				return Xo(e) && us(S, x), S.placeholder = i, ps(S, e, t);
			}
			function ho(e) {
				var t = nt[e];
				return function(e, n) {
					if (e = Pu(e), n = n == null ? 0 : Kt(Z(n), 292), n && Rt(e)) {
						var r = (Q(e) + "e").split("e");
						return r = (Q(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"), +(r[0] + "e" + (+r[1] - n));
					}
					return t(e);
				};
			}
			var go = an && 1 / Yn(new an([, -0]))[1] == h ? function(e) {
				return new an(e);
			} : xf;
			function _o(e) {
				return function(t) {
					var n = Lo(t);
					return n == j ? Kn(t) : n == oe ? Xn(t) : jn(t, e(t));
				};
			}
			function vo(e, t, i, a, f, p, m, h) {
				var g = t & s;
				if (!g && typeof e != "function") throw new at(r);
				var _ = a ? a.length : 0;
				if (_ || (t &= ~(u | d), a = f = n), m = m === n ? m : Vt(Z(m), 0), h = h === n ? h : Z(h), _ -= f ? f.length : 0, t & d) {
					var v = a, y = f;
					a = f = n;
				}
				var b = g ? n : Oo(e), x = [
					e,
					t,
					i,
					a,
					f,
					v,
					y,
					p,
					m,
					h
				];
				if (b && rs(x, b), e = x[0], t = x[1], i = x[2], a = x[3], f = x[4], h = x[9] = x[9] === n ? g ? 0 : e.length : Vt(x[9] - _, 0), !h && t & (c | l) && (t &= ~(c | l)), !t || t == o) var S = Qa(e, t, i);
				else S = t == c || t == l ? no(e, t, h) : (t == u || t == (o | u)) && !f.length ? uo(e, t, i, a) : ao.apply(n, x);
				return ps((b ? da : us)(S, x), e, t);
			}
			function yo(e, t, r, i) {
				return e === n || Wl(e, ct[r]) && !dt.call(i, r) ? t : e;
			}
			function bo(e, t, r, i, a, o) {
				return lu(e) && lu(t) && (o.set(t, e), Xi(e, t, n, bo, o), o.delete(t)), e;
			}
			function xo(e) {
				return yu(e) ? n : e;
			}
			function So(e, t, r, i, a, o) {
				var s = r & 1, c = e.length, l = t.length;
				if (c != l && !(s && l > c)) return !1;
				var u = o.get(e), d = o.get(t);
				if (u && d) return u == t && d == e;
				var f = -1, p = !0, m = r & 2 ? new Lr() : n;
				for (o.set(e, t), o.set(t, e); ++f < c;) {
					var h = e[f], g = t[f];
					if (i) var _ = s ? i(g, h, f, t, e, o) : i(h, g, f, e, t, o);
					if (_ !== n) {
						if (_) continue;
						p = !1;
						break;
					}
					if (m) {
						if (!xn(t, function(e, t) {
							if (!Fn(m, t) && (h === e || a(h, e, r, i, o))) return m.push(t);
						})) {
							p = !1;
							break;
						}
					} else if (!(h === g || a(h, g, r, i, o))) {
						p = !1;
						break;
					}
				}
				return o.delete(e), o.delete(t), p;
			}
			function Co(e, t, n, r, i, a, o) {
				switch (n) {
					case fe:
						if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
						e = e.buffer, t = t.buffer;
					case de: return !(e.byteLength != t.byteLength || !a(new bt(e), new bt(t)));
					case E:
					case D:
					case te: return Wl(+e, +t);
					case O: return e.name == t.name && e.message == t.message;
					case M:
					case N: return e == t + "";
					case j: var s = Kn;
					case oe:
						var c = r & 1;
						if (s ||= Yn, e.size != t.size && !c) return !1;
						var l = o.get(e);
						if (l) return l == t;
						r |= 2, o.set(e, t);
						var u = So(s(e), s(t), r, i, a, o);
						return o.delete(e), u;
					case se: if (ur) return ur.call(e) == ur.call(t);
				}
				return !1;
			}
			function wo(e, t, r, i, a, o) {
				var s = r & 1, c = Eo(e), l = c.length;
				if (l != Eo(t).length && !s) return !1;
				for (var u = l; u--;) {
					var d = c[u];
					if (!(s ? d in t : dt.call(t, d))) return !1;
				}
				var f = o.get(e), p = o.get(t);
				if (f && p) return f == t && p == e;
				var m = !0;
				o.set(e, t), o.set(t, e);
				for (var h = s; ++u < l;) {
					d = c[u];
					var g = e[d], _ = t[d];
					if (i) var v = s ? i(_, g, d, t, e, o) : i(g, _, d, e, t, o);
					if (!(v === n ? g === _ || a(g, _, r, i, o) : v)) {
						m = !1;
						break;
					}
					h ||= d == "constructor";
				}
				if (m && !h) {
					var y = e.constructor, b = t.constructor;
					y != b && "constructor" in e && "constructor" in t && !(typeof y == "function" && y instanceof y && typeof b == "function" && b instanceof b) && (m = !1);
				}
				return o.delete(e), o.delete(t), m;
			}
			function To(e) {
				return fs(os(e, n, Ps), e + "");
			}
			function Eo(e) {
				return Ci(e, id, Fo);
			}
			function Do(e) {
				return Ci(e, ad, Io);
			}
			var Oo = V ? function(e) {
				return V.get(e);
			} : xf;
			function ko(e) {
				for (var t = e.name + "", n = On[t], r = dt.call(On, t) ? n.length : 0; r--;) {
					var i = n[r], a = i.func;
					if (a == null || a == e) return i.name;
				}
				return t;
			}
			function Ao(e) {
				return (dt.call(q, "placeholder") ? q : e).placeholder;
			}
			function Y() {
				var e = q.iteratee || mf;
				return e = e === mf ? Ui : e, arguments.length ? e(arguments[0], arguments[1]) : e;
			}
			function jo(e, t) {
				var n = e.__data__;
				return Yo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
			}
			function Mo(e) {
				for (var t = id(e), n = t.length; n--;) {
					var r = t[n], i = e[r];
					t[n] = [
						r,
						i,
						es(i)
					];
				}
				return t;
			}
			function No(e, t) {
				var r = Hn(e, t);
				return zi(r) ? r : n;
			}
			function Po(e) {
				var t = dt.call(e, Dt), r = e[Dt];
				try {
					e[Dt] = n;
					var i = !0;
				} catch {}
				var a = mt.call(e);
				return i && (t ? e[Dt] = r : delete e[Dt]), a;
			}
			var Fo = Pt ? function(e) {
				return e == null ? [] : (e = F(e), _n(Pt(e), function(t) {
					return Ct.call(e, t);
				}));
			} : Af, Io = Pt ? function(e) {
				for (var t = []; e;) z(t, Fo(e)), e = xt(e);
				return t;
			} : Af, Lo = wi;
			($t && Lo(new $t(/* @__PURE__ */ new ArrayBuffer(1))) != fe || tn && Lo(new tn()) != j || nn && Lo(nn.resolve()) != ie || an && Lo(new an()) != oe || on && Lo(new on()) != le) && (Lo = function(e) {
				var t = wi(e), r = t == re ? e.constructor : n, i = r ? vs(r) : "";
				if (i) switch (i) {
					case Zn: return fe;
					case rr: return j;
					case ir: return ie;
					case sr: return oe;
					case cr: return le;
				}
				return t;
			});
			function Ro(e, t, n) {
				for (var r = -1, i = n.length; ++r < i;) {
					var a = n[r], o = a.size;
					switch (a.type) {
						case "drop":
							e += o;
							break;
						case "dropRight":
							t -= o;
							break;
						case "take":
							t = Kt(t, e + o);
							break;
						case "takeRight": e = Vt(e, t - o);
					}
				}
				return {
					start: e,
					end: t
				};
			}
			function zo(e) {
				var t = e.match(ze);
				return t ? t[1].split(Be) : [];
			}
			function Bo(e, t, n) {
				t = Aa(t, e);
				for (var r = -1, i = t.length, a = !1; ++r < i;) {
					var o = _s(t[r]);
					if (!(a = e != null && n(e, o))) break;
					e = e[o];
				}
				return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && cu(i) && Ko(o, i) && (X(e) || ql(e)));
			}
			function Vo(e) {
				var t = e.length, n = new e.constructor(t);
				return t && typeof e[0] == "string" && dt.call(e, "index") && (n.index = e.index, n.input = e.input), n;
			}
			function Ho(e) {
				return typeof e.constructor == "function" && !$o(e) ? fr(xt(e)) : {};
			}
			function Uo(e, t, n) {
				var r = e.constructor;
				switch (t) {
					case de: return Fa(e);
					case E:
					case D: return new r(+e);
					case fe: return Ia(e, n);
					case pe:
					case me:
					case he:
					case ge:
					case _e:
					case ve:
					case ye:
					case be:
					case xe: return za(e, n);
					case j: return new r();
					case te:
					case N: return new r(e);
					case M: return La(e);
					case oe: return new r();
					case se: return Ra(e);
				}
			}
			function Wo(e, t) {
				var n = t.length;
				if (!n) return e;
				var r = n - 1;
				return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(Re, "{\n/* [wrapped with " + t + "] */\n");
			}
			function Go(e) {
				return X(e) || ql(e) || !!(Tt && e && e[Tt]);
			}
			function Ko(e, t) {
				var n = typeof e;
				return t ??= g, !!t && (n == "number" || n != "symbol" && Xe.test(e)) && e > -1 && e % 1 == 0 && e < t;
			}
			function qo(e, t, n) {
				if (!lu(n)) return !1;
				var r = typeof t;
				return (r == "number" ? Yl(n) && Ko(t, n.length) : r == "string" && t in n) ? Wl(n[t], e) : !1;
			}
			function Jo(e, t) {
				if (X(e)) return !1;
				var n = typeof e;
				return n == "number" || n == "symbol" || n == "boolean" || e == null || wu(e) ? !0 : Ne.test(e) || !Me.test(e) || t != null && e in F(t);
			}
			function Yo(e) {
				var t = typeof e;
				return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
			}
			function Xo(e) {
				var t = ko(e), n = q[t];
				if (typeof n != "function" || !(t in hr.prototype)) return !1;
				if (e === n) return !0;
				var r = Oo(n);
				return !!r && e === r[0];
			}
			function Zo(e) {
				return !!pt && pt in e;
			}
			var Qo = lt ? ou : jf;
			function $o(e) {
				var t = e && e.constructor;
				return e === (typeof t == "function" && t.prototype || ct);
			}
			function es(e) {
				return e === e && !lu(e);
			}
			function ts(e, t) {
				return function(r) {
					return r != null && r[e] === t && (t !== n || e in F(r));
				};
			}
			function ns(e) {
				var t = El(e, function(e) {
					return n.size === 500 && n.clear(), e;
				}), n = t.cache;
				return t;
			}
			function rs(e, t) {
				var n = e[1], r = t[1], i = n | r, l = i < (o | s | f), u = r == f && n == c || r == f && n == p && e[7].length <= t[8] || r == (f | p) && t[7].length <= t[8] && n == c;
				if (!(l || u)) return e;
				r & o && (e[2] = t[2], i |= n & o ? 0 : 4);
				var d = t[3];
				if (d) {
					var m = e[3];
					e[3] = m ? Ha(m, d, t[4]) : d, e[4] = m ? Jn(e[3], a) : t[4];
				}
				return d = t[5], d && (m = e[5], e[5] = m ? Ua(m, d, t[6]) : d, e[6] = m ? Jn(e[5], a) : t[6]), d = t[7], d && (e[7] = d), r & f && (e[8] = e[8] == null ? t[8] : Kt(e[8], t[8])), e[9] ??= t[9], e[0] = t[0], e[1] = i, e;
			}
			function is(e) {
				var t = [];
				if (e != null) for (var n in F(e)) t.push(n);
				return t;
			}
			function as(e) {
				return mt.call(e);
			}
			function os(e, t, r) {
				return t = Vt(t === n ? e.length - 1 : t, 0), function() {
					for (var n = arguments, i = -1, a = Vt(n.length - t, 0), o = P(a); ++i < a;) o[i] = n[t + i];
					i = -1;
					for (var s = P(t + 1); ++i < t;) s[i] = n[i];
					return s[t] = r(o), pn(e, this, s);
				};
			}
			function ss(e, t) {
				return t.length < 2 ? e : Si(e, ma(t, 0, -1));
			}
			function cs(e, t) {
				for (var r = e.length, i = Kt(t.length, r), a = Wa(e); i--;) {
					var o = t[i];
					e[i] = Ko(o, r) ? a[o] : n;
				}
				return e;
			}
			function ls(e, t) {
				if ((t !== "constructor" || typeof e[t] != "function") && t != "__proto__") return e[t];
			}
			var us = ms(da), ds = jt || function(e, t) {
				return en.setTimeout(e, t);
			}, fs = ms(fa);
			function ps(e, t, n) {
				var r = t + "";
				return fs(e, Wo(r, ys(zo(r), n)));
			}
			function ms(e) {
				var t = 0, r = 0;
				return function() {
					var i = qt(), a = 16 - (i - r);
					if (r = i, a > 0) {
						if (++t >= 800) return arguments[0];
					} else t = 0;
					return e.apply(n, arguments);
				};
			}
			function hs(e, t) {
				var r = -1, i = e.length, a = i - 1;
				for (t = t === n ? i : t; ++r < t;) {
					var o = aa(r, a), s = e[o];
					e[o] = e[r], e[r] = s;
				}
				return e.length = t, e;
			}
			var gs = ns(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(Pe, function(e, n, r, i) {
					t.push(r ? i.replace(Ue, "$1") : n || e);
				}), t;
			});
			function _s(e) {
				if (typeof e == "string" || wu(e)) return e;
				var t = e + "";
				return t == "0" && 1 / e == -Infinity ? "-0" : t;
			}
			function vs(e) {
				if (e != null) {
					try {
						return ut.call(e);
					} catch {}
					try {
						return e + "";
					} catch {}
				}
				return "";
			}
			function ys(e, t) {
				return hn(S, function(n) {
					var r = "_." + n[0];
					t & n[1] && !vn(e, r) && e.push(r);
				}), e.sort();
			}
			function bs(e) {
				if (e instanceof hr) return e.clone();
				var t = new mr(e.__wrapped__, e.__chain__);
				return t.__actions__ = Wa(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
			}
			function xs(e, t, r) {
				t = (r ? qo(e, t, r) : t === n) ? 1 : Vt(Z(t), 0);
				var i = e == null ? 0 : e.length;
				if (!i || t < 1) return [];
				for (var a = 0, o = 0, s = P(Mt(i / t)); a < i;) s[o++] = ma(e, a, a += t);
				return s;
			}
			function Ss(e) {
				for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n;) {
					var a = e[t];
					a && (i[r++] = a);
				}
				return i;
			}
			function Cs() {
				var e = arguments.length;
				if (!e) return [];
				for (var t = P(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
				return z(X(n) ? Wa(n) : [n], gi(t, 1));
			}
			var ws = J(function(e, t) {
				return Xl(e) ? li(e, gi(t, 1, Xl, !0)) : [];
			}), Ts = J(function(e, t) {
				var r = Gs(t);
				return Xl(r) && (r = n), Xl(e) ? li(e, gi(t, 1, Xl, !0), Y(r, 2)) : [];
			}), Es = J(function(e, t) {
				var r = Gs(t);
				return Xl(r) && (r = n), Xl(e) ? li(e, gi(t, 1, Xl, !0), n, r) : [];
			});
			function Ds(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : Z(t), ma(e, t < 0 ? 0 : t, i)) : [];
			}
			function Os(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : Z(t), t = i - t, ma(e, 0, t < 0 ? 0 : t)) : [];
			}
			function ks(e, t) {
				return e && e.length ? wa(e, Y(t, 3), !0, !0) : [];
			}
			function As(e, t) {
				return e && e.length ? wa(e, Y(t, 3), !0) : [];
			}
			function js(e, t, n, r) {
				var i = e == null ? 0 : e.length;
				return i ? (n && typeof n != "number" && qo(e, t, n) && (n = 0, r = i), mi(e, t, n, r)) : [];
			}
			function Ms(e, t, n) {
				var r = e == null ? 0 : e.length;
				if (!r) return -1;
				var i = n == null ? 0 : Z(n);
				return i < 0 && (i = Vt(r + i, 0)), Tn(e, Y(t, 3), i);
			}
			function Ns(e, t, r) {
				var i = e == null ? 0 : e.length;
				if (!i) return -1;
				var a = i - 1;
				return r !== n && (a = Z(r), a = r < 0 ? Vt(i + a, 0) : Kt(a, i - 1)), Tn(e, Y(t, 3), a, !0);
			}
			function Ps(e) {
				return e != null && e.length ? gi(e, 1) : [];
			}
			function Fs(e) {
				return e != null && e.length ? gi(e, h) : [];
			}
			function Is(e, t) {
				return e != null && e.length ? (t = t === n ? 1 : Z(t), gi(e, t)) : [];
			}
			function Ls(e) {
				for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n;) {
					var i = e[t];
					r[i[0]] = i[1];
				}
				return r;
			}
			function Rs(e) {
				return e && e.length ? e[0] : n;
			}
			function zs(e, t, n) {
				var r = e == null ? 0 : e.length;
				if (!r) return -1;
				var i = n == null ? 0 : Z(n);
				return i < 0 && (i = Vt(r + i, 0)), H(e, t, i);
			}
			function Bs(e) {
				return e != null && e.length ? ma(e, 0, -1) : [];
			}
			var Vs = J(function(e) {
				var t = R(e, Oa);
				return t.length && t[0] === e[0] ? ki(t) : [];
			}), Hs = J(function(e) {
				var t = Gs(e), r = R(e, Oa);
				return t === Gs(r) ? t = n : r.pop(), r.length && r[0] === e[0] ? ki(r, Y(t, 2)) : [];
			}), Us = J(function(e) {
				var t = Gs(e), r = R(e, Oa);
				return t = typeof t == "function" ? t : n, t && r.pop(), r.length && r[0] === e[0] ? ki(r, n, t) : [];
			});
			function Ws(e, t) {
				return e == null ? "" : zt.call(e, t);
			}
			function Gs(e) {
				var t = e == null ? 0 : e.length;
				return t ? e[t - 1] : n;
			}
			function Ks(e, t, r) {
				var i = e == null ? 0 : e.length;
				if (!i) return -1;
				var a = i;
				return r !== n && (a = Z(r), a = a < 0 ? Vt(i + a, 0) : Kt(a, i - 1)), t === t ? Qn(e, t, a) : Tn(e, U, a, !0);
			}
			function qs(e, t) {
				return e && e.length ? Qi(e, Z(t)) : n;
			}
			var Js = J(Ys);
			function Ys(e, t) {
				return e && e.length && t && t.length ? ra(e, t) : e;
			}
			function Xs(e, t, n) {
				return e && e.length && t && t.length ? ra(e, t, Y(n, 2)) : e;
			}
			function Zs(e, t, r) {
				return e && e.length && t && t.length ? ra(e, t, n, r) : e;
			}
			var Qs = To(function(e, t) {
				var n = e == null ? 0 : e.length, r = ri(e, t);
				return ia(e, R(t, function(e) {
					return Ko(e, n) ? +e : e;
				}).sort(Ba)), r;
			});
			function $s(e, t) {
				var n = [];
				if (!(e && e.length)) return n;
				var r = -1, i = [], a = e.length;
				for (t = Y(t, 3); ++r < a;) {
					var o = e[r];
					t(o, r, e) && (n.push(o), i.push(r));
				}
				return ia(e, i), n;
			}
			function ec(e) {
				return e == null ? e : Qt.call(e);
			}
			function tc(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (r && typeof r != "number" && qo(e, t, r) ? (t = 0, r = i) : (t = t == null ? 0 : Z(t), r = r === n ? i : Z(r)), ma(e, t, r)) : [];
			}
			function nc(e, t) {
				return ga(e, t);
			}
			function rc(e, t, n) {
				return _a(e, t, Y(n, 2));
			}
			function ic(e, t) {
				var n = e == null ? 0 : e.length;
				if (n) {
					var r = ga(e, t);
					if (r < n && Wl(e[r], t)) return r;
				}
				return -1;
			}
			function ac(e, t) {
				return ga(e, t, !0);
			}
			function oc(e, t, n) {
				return _a(e, t, Y(n, 2), !0);
			}
			function sc(e, t) {
				if (e != null && e.length) {
					var n = ga(e, t, !0) - 1;
					if (Wl(e[n], t)) return n;
				}
				return -1;
			}
			function cc(e) {
				return e && e.length ? va(e) : [];
			}
			function lc(e, t) {
				return e && e.length ? va(e, Y(t, 2)) : [];
			}
			function uc(e) {
				var t = e == null ? 0 : e.length;
				return t ? ma(e, 1, t) : [];
			}
			function dc(e, t, r) {
				return e && e.length ? (t = r || t === n ? 1 : Z(t), ma(e, 0, t < 0 ? 0 : t)) : [];
			}
			function fc(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : Z(t), t = i - t, ma(e, t < 0 ? 0 : t, i)) : [];
			}
			function pc(e, t) {
				return e && e.length ? wa(e, Y(t, 3), !1, !0) : [];
			}
			function mc(e, t) {
				return e && e.length ? wa(e, Y(t, 3)) : [];
			}
			var hc = J(function(e) {
				return xa(gi(e, 1, Xl, !0));
			}), gc = J(function(e) {
				var t = Gs(e);
				return Xl(t) && (t = n), xa(gi(e, 1, Xl, !0), Y(t, 2));
			}), _c = J(function(e) {
				var t = Gs(e);
				return t = typeof t == "function" ? t : n, xa(gi(e, 1, Xl, !0), n, t);
			});
			function vc(e) {
				return e && e.length ? xa(e) : [];
			}
			function yc(e, t) {
				return e && e.length ? xa(e, Y(t, 2)) : [];
			}
			function bc(e, t) {
				return t = typeof t == "function" ? t : n, e && e.length ? xa(e, n, t) : [];
			}
			function xc(e) {
				if (!(e && e.length)) return [];
				var t = 0;
				return e = _n(e, function(e) {
					if (Xl(e)) return t = Vt(e.length, t), !0;
				}), K(t, function(t) {
					return R(e, Dn(t));
				});
			}
			function Sc(e, t) {
				if (!(e && e.length)) return [];
				var r = xc(e);
				return t == null ? r : R(r, function(e) {
					return pn(t, n, e);
				});
			}
			var Cc = J(function(e, t) {
				return Xl(e) ? li(e, t) : [];
			}), wc = J(function(e) {
				return Ea(_n(e, Xl));
			}), Tc = J(function(e) {
				var t = Gs(e);
				return Xl(t) && (t = n), Ea(_n(e, Xl), Y(t, 2));
			}), Ec = J(function(e) {
				var t = Gs(e);
				return t = typeof t == "function" ? t : n, Ea(_n(e, Xl), n, t);
			}), Dc = J(xc);
			function Oc(e, t) {
				return Da(e || [], t || [], Zr);
			}
			function kc(e, t) {
				return Da(e || [], t || [], ua);
			}
			var Ac = J(function(e) {
				var t = e.length, r = t > 1 ? e[t - 1] : n;
				return r = typeof r == "function" ? (e.pop(), r) : n, Sc(e, r);
			});
			function jc(e) {
				var t = q(e);
				return t.__chain__ = !0, t;
			}
			function Mc(e, t) {
				return t(e), e;
			}
			function Nc(e, t) {
				return t(e);
			}
			var Pc = To(function(e) {
				var t = e.length, r = t ? e[0] : 0, i = this.__wrapped__, a = function(t) {
					return ri(t, e);
				};
				return t > 1 || this.__actions__.length || !(i instanceof hr) || !Ko(r) ? this.thru(a) : (i = i.slice(r, +r + +!!t), i.__actions__.push({
					func: Nc,
					args: [a],
					thisArg: n
				}), new mr(i, this.__chain__).thru(function(e) {
					return t && !e.length && e.push(n), e;
				}));
			});
			function Fc() {
				return jc(this);
			}
			function Ic() {
				return new mr(this.value(), this.__chain__);
			}
			function Lc() {
				this.__values__ === n && (this.__values__ = ju(this.value()));
				var e = this.__index__ >= this.__values__.length;
				return {
					done: e,
					value: e ? n : this.__values__[this.__index__++]
				};
			}
			function Rc() {
				return this;
			}
			function zc(e) {
				for (var t, r = this; r instanceof pr;) {
					var i = bs(r);
					i.__index__ = 0, i.__values__ = n, t ? a.__wrapped__ = i : t = i;
					var a = i;
					r = r.__wrapped__;
				}
				return a.__wrapped__ = e, t;
			}
			function Bc() {
				var e = this.__wrapped__;
				if (e instanceof hr) {
					var t = e;
					return this.__actions__.length && (t = new hr(this)), t = t.reverse(), t.__actions__.push({
						func: Nc,
						args: [ec],
						thisArg: n
					}), new mr(t, this.__chain__);
				}
				return this.thru(ec);
			}
			function Vc() {
				return Ta(this.__wrapped__, this.__actions__);
			}
			var Hc = Ja(function(e, t, n) {
				dt.call(e, n) ? ++e[n] : ni(e, n, 1);
			});
			function Uc(e, t, r) {
				var i = X(e) ? L : fi;
				return r && qo(e, t, r) && (t = n), i(e, Y(t, 3));
			}
			function Wc(e, t) {
				return (X(e) ? _n : hi)(e, Y(t, 3));
			}
			var Gc = ro(Ms), Kc = ro(Ns);
			function qc(e, t) {
				return gi(nl(e, t), 1);
			}
			function Jc(e, t) {
				return gi(nl(e, t), h);
			}
			function Yc(e, t, r) {
				return r = r === n ? 1 : Z(r), gi(nl(e, t), r);
			}
			function Xc(e, t) {
				return (X(e) ? hn : ui)(e, Y(t, 3));
			}
			function Zc(e, t) {
				return (X(e) ? gn : di)(e, Y(t, 3));
			}
			var Qc = Ja(function(e, t, n) {
				dt.call(e, n) ? e[n].push(t) : ni(e, n, [t]);
			});
			function $c(e, t, n, r) {
				e = Yl(e) ? e : Cd(e), n = n && !r ? Z(n) : 0;
				var i = e.length;
				return n < 0 && (n = Vt(i + n, 0)), Cu(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && H(e, t, n) > -1;
			}
			var el = J(function(e, t, n) {
				var r = -1, i = typeof t == "function", a = Yl(e) ? P(e.length) : [];
				return ui(e, function(e) {
					a[++r] = i ? pn(t, e, n) : ji(e, t, n);
				}), a;
			}), tl = Ja(function(e, t, n) {
				ni(e, n, t);
			});
			function nl(e, t) {
				return (X(e) ? R : qi)(e, Y(t, 3));
			}
			function rl(e, t, r, i) {
				return e == null ? [] : (X(t) || (t = t == null ? [] : [t]), r = i ? n : r, X(r) || (r = r == null ? [] : [r]), $i(e, t, r));
			}
			var il = Ja(function(e, t, n) {
				e[+!n].push(t);
			}, function() {
				return [[], []];
			});
			function al(e, t, n) {
				var r = X(e) ? bn : kn, i = arguments.length < 3;
				return r(e, Y(t, 4), n, i, ui);
			}
			function ol(e, t, n) {
				var r = X(e) ? B : kn, i = arguments.length < 3;
				return r(e, Y(t, 4), n, i, di);
			}
			function sl(e, t) {
				return (X(e) ? _n : hi)(e, Dl(Y(t, 3)));
			}
			function cl(e) {
				return (X(e) ? qr : ca)(e);
			}
			function ll(e, t, r) {
				return t = (r ? qo(e, t, r) : t === n) ? 1 : Z(t), (X(e) ? Jr : la)(e, t);
			}
			function ul(e) {
				return (X(e) ? Yr : pa)(e);
			}
			function dl(e) {
				if (e == null) return 0;
				if (Yl(e)) return Cu(e) ? $n(e) : e.length;
				var t = Lo(e);
				return t == j || t == oe ? e.size : Wi(e).length;
			}
			function fl(e, t, r) {
				var i = X(e) ? xn : ha;
				return r && qo(e, t, r) && (t = n), i(e, Y(t, 3));
			}
			var pl = J(function(e, t) {
				if (e == null) return [];
				var n = t.length;
				return n > 1 && qo(e, t[0], t[1]) ? t = [] : n > 2 && qo(t[0], t[1], t[2]) && (t = [t[0]]), $i(e, gi(t, 1), []);
			}), ml = At || function() {
				return en.Date.now();
			};
			function hl(e, t) {
				if (typeof t != "function") throw new at(r);
				return e = Z(e), function() {
					if (--e < 1) return t.apply(this, arguments);
				};
			}
			function gl(e, t, r) {
				return t = r ? n : t, t = e && t == null ? e.length : t, vo(e, f, n, n, n, n, t);
			}
			function _l(e, t) {
				var i;
				if (typeof t != "function") throw new at(r);
				return e = Z(e), function() {
					return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = n), i;
				};
			}
			var vl = J(function(e, t, n) {
				var r = o;
				if (n.length) {
					var i = Jn(n, Ao(vl));
					r |= u;
				}
				return vo(e, r, t, n, i);
			}), yl = J(function(e, t, n) {
				var r = o | s;
				if (n.length) {
					var i = Jn(n, Ao(yl));
					r |= u;
				}
				return vo(t, r, e, n, i);
			});
			function bl(e, t, r) {
				t = r ? n : t;
				var i = vo(e, c, n, n, n, n, n, t);
				return i.placeholder = bl.placeholder, i;
			}
			function xl(e, t, r) {
				t = r ? n : t;
				var i = vo(e, l, n, n, n, n, n, t);
				return i.placeholder = xl.placeholder, i;
			}
			function Sl(e, t, i) {
				var a, o, s, c, l, u, d = 0, f = !1, p = !1, m = !0;
				if (typeof e != "function") throw new at(r);
				t = Pu(t) || 0, lu(i) && (f = !!i.leading, p = "maxWait" in i, s = p ? Vt(Pu(i.maxWait) || 0, t) : s, m = "trailing" in i ? !!i.trailing : m);
				function h(t) {
					var r = a, i = o;
					return a = o = n, d = t, c = e.apply(i, r), c;
				}
				function g(e) {
					return d = e, l = ds(y, t), f ? h(e) : c;
				}
				function _(e) {
					var n = e - u, r = e - d, i = t - n;
					return p ? Kt(i, s - r) : i;
				}
				function v(e) {
					var r = e - u, i = e - d;
					return u === n || r >= t || r < 0 || p && i >= s;
				}
				function y() {
					var e = ml();
					if (v(e)) return b(e);
					l = ds(y, _(e));
				}
				function b(e) {
					return l = n, m && a ? h(e) : (a = o = n, c);
				}
				function x() {
					l !== n && Na(l), d = 0, a = u = o = l = n;
				}
				function S() {
					return l === n ? c : b(ml());
				}
				function C() {
					var e = ml(), r = v(e);
					if (a = arguments, o = this, u = e, r) {
						if (l === n) return g(u);
						if (p) return Na(l), l = ds(y, t), h(u);
					}
					return l === n && (l = ds(y, t)), c;
				}
				return C.cancel = x, C.flush = S, C;
			}
			var Cl = J(function(e, t) {
				return ci(e, 1, t);
			}), wl = J(function(e, t, n) {
				return ci(e, Pu(t) || 0, n);
			});
			function Tl(e) {
				return vo(e, m);
			}
			function El(e, t) {
				if (typeof e != "function" || t != null && typeof t != "function") throw new at(r);
				var n = function() {
					var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
					if (a.has(i)) return a.get(i);
					var o = e.apply(this, r);
					return n.cache = a.set(i, o) || a, o;
				};
				return n.cache = new (El.Cache || jr)(), n;
			}
			El.Cache = jr;
			function Dl(e) {
				if (typeof e != "function") throw new at(r);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return !e.call(this);
						case 1: return !e.call(this, t[0]);
						case 2: return !e.call(this, t[0], t[1]);
						case 3: return !e.call(this, t[0], t[1], t[2]);
					}
					return !e.apply(this, t);
				};
			}
			function Ol(e) {
				return _l(2, e);
			}
			var kl = ja(function(e, t) {
				t = t.length == 1 && X(t[0]) ? R(t[0], Nn(Y())) : R(gi(t, 1), Nn(Y()));
				var n = t.length;
				return J(function(r) {
					for (var i = -1, a = Kt(r.length, n); ++i < a;) r[i] = t[i].call(this, r[i]);
					return pn(e, this, r);
				});
			}), Al = J(function(e, t) {
				return vo(e, u, n, t, Jn(t, Ao(Al)));
			}), jl = J(function(e, t) {
				return vo(e, d, n, t, Jn(t, Ao(jl)));
			}), Ml = To(function(e, t) {
				return vo(e, p, n, n, n, t);
			});
			function Nl(e, t) {
				if (typeof e != "function") throw new at(r);
				return t = t === n ? t : Z(t), J(e, t);
			}
			function Pl(e, t) {
				if (typeof e != "function") throw new at(r);
				return t = t == null ? 0 : Vt(Z(t), 0), J(function(n) {
					var r = n[t], i = Ma(n, 0, t);
					return r && z(i, r), pn(e, this, i);
				});
			}
			function Fl(e, t, n) {
				var i = !0, a = !0;
				if (typeof e != "function") throw new at(r);
				return lu(n) && (i = "leading" in n ? !!n.leading : i, a = "trailing" in n ? !!n.trailing : a), Sl(e, t, {
					leading: i,
					maxWait: t,
					trailing: a
				});
			}
			function Il(e) {
				return gl(e, 1);
			}
			function Ll(e, t) {
				return Al(ka(t), e);
			}
			function Rl() {
				if (!arguments.length) return [];
				var e = arguments[0];
				return X(e) ? e : [e];
			}
			function zl(e) {
				return ai(e, 4);
			}
			function Bl(e, t) {
				return t = typeof t == "function" ? t : n, ai(e, 4, t);
			}
			function Vl(e) {
				return ai(e, 5);
			}
			function Hl(e, t) {
				return t = typeof t == "function" ? t : n, ai(e, 5, t);
			}
			function Ul(e, t) {
				return t == null || si(e, t, id(t));
			}
			function Wl(e, t) {
				return e === t || e !== e && t !== t;
			}
			var Gl = po(Ti), Kl = po(function(e, t) {
				return e >= t;
			}), ql = Mi(function() {
				return arguments;
			}()) ? Mi : function(e) {
				return uu(e) && dt.call(e, "callee") && !Ct.call(e, "callee");
			}, X = P.isArray, Jl = sn ? Nn(sn) : Ni;
			function Yl(e) {
				return e != null && cu(e.length) && !ou(e);
			}
			function Xl(e) {
				return uu(e) && Yl(e);
			}
			function Zl(e) {
				return e === !0 || e === !1 || uu(e) && wi(e) == E;
			}
			var Ql = Ft || jf, $l = cn ? Nn(cn) : Pi;
			function eu(e) {
				return uu(e) && e.nodeType === 1 && !yu(e);
			}
			function tu(e) {
				if (e == null) return !0;
				if (Yl(e) && (X(e) || typeof e == "string" || typeof e.splice == "function" || Ql(e) || Tu(e) || ql(e))) return !e.length;
				var t = Lo(e);
				if (t == j || t == oe) return !e.size;
				if ($o(e)) return !Wi(e).length;
				for (var n in e) if (dt.call(e, n)) return !1;
				return !0;
			}
			function nu(e, t) {
				return Fi(e, t);
			}
			function ru(e, t, r) {
				r = typeof r == "function" ? r : n;
				var i = r ? r(e, t) : n;
				return i === n ? Fi(e, t, n, r) : !!i;
			}
			function iu(e) {
				if (!uu(e)) return !1;
				var t = wi(e);
				return t == O || t == ee || typeof e.message == "string" && typeof e.name == "string" && !yu(e);
			}
			function au(e) {
				return typeof e == "number" && Rt(e);
			}
			function ou(e) {
				if (!lu(e)) return !1;
				var t = wi(e);
				return t == k || t == A || t == T || t == ae;
			}
			function su(e) {
				return typeof e == "number" && e == Z(e);
			}
			function cu(e) {
				return typeof e == "number" && e > -1 && e % 1 == 0 && e <= g;
			}
			function lu(e) {
				var t = typeof e;
				return e != null && (t == "object" || t == "function");
			}
			function uu(e) {
				return typeof e == "object" && !!e;
			}
			var du = ln ? Nn(ln) : Li;
			function fu(e, t) {
				return e === t || Ri(e, t, Mo(t));
			}
			function pu(e, t, r) {
				return r = typeof r == "function" ? r : n, Ri(e, t, Mo(t), r);
			}
			function mu(e) {
				return vu(e) && e != +e;
			}
			function hu(e) {
				if (Qo(e)) throw new et("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
				return zi(e);
			}
			function gu(e) {
				return e === null;
			}
			function _u(e) {
				return e == null;
			}
			function vu(e) {
				return typeof e == "number" || uu(e) && wi(e) == te;
			}
			function yu(e) {
				if (!uu(e) || wi(e) != re) return !1;
				var t = xt(e);
				if (t === null) return !0;
				var n = dt.call(t, "constructor") && t.constructor;
				return typeof n == "function" && n instanceof n && ut.call(n) == ht;
			}
			var bu = un ? Nn(un) : Bi;
			function xu(e) {
				return su(e) && e >= -g && e <= g;
			}
			var Su = dn ? Nn(dn) : Vi;
			function Cu(e) {
				return typeof e == "string" || !X(e) && uu(e) && wi(e) == N;
			}
			function wu(e) {
				return typeof e == "symbol" || uu(e) && wi(e) == se;
			}
			var Tu = fn ? Nn(fn) : Hi;
			function Eu(e) {
				return e === n;
			}
			function Du(e) {
				return uu(e) && Lo(e) == le;
			}
			function Ou(e) {
				return uu(e) && wi(e) == ue;
			}
			var ku = po(Ki), Au = po(function(e, t) {
				return e <= t;
			});
			function ju(e) {
				if (!e) return [];
				if (Yl(e)) return Cu(e) ? er(e) : Wa(e);
				if (Et && e[Et]) return Gn(e[Et]());
				var t = Lo(e);
				return (t == j ? Kn : t == oe ? Yn : Cd)(e);
			}
			function Mu(e) {
				return e ? (e = Pu(e), e === h || e === -Infinity ? (e < 0 ? -1 : 1) * _ : e === e ? e : 0) : e === 0 ? e : 0;
			}
			function Z(e) {
				var t = Mu(e), n = t % 1;
				return t === t ? n ? t - n : t : 0;
			}
			function Nu(e) {
				return e ? ii(Z(e), 0, y) : 0;
			}
			function Pu(e) {
				if (typeof e == "number") return e;
				if (wu(e)) return v;
				if (lu(e)) {
					var t = typeof e.valueOf == "function" ? e.valueOf() : e;
					e = lu(t) ? t + "" : t;
				}
				if (typeof e != "string") return e === 0 ? e : +e;
				e = Mn(e);
				var n = qe.test(e);
				return n || Ye.test(e) ? Zt(e.slice(2), n ? 2 : 8) : Ke.test(e) ? v : +e;
			}
			function Fu(e) {
				return Ga(e, ad(e));
			}
			function Iu(e) {
				return e ? ii(Z(e), -g, g) : e === 0 ? e : 0;
			}
			function Q(e) {
				return e == null ? "" : ba(e);
			}
			var Lu = Ya(function(e, t) {
				if ($o(t) || Yl(t)) {
					Ga(t, id(t), e);
					return;
				}
				for (var n in t) dt.call(t, n) && Zr(e, n, t[n]);
			}), Ru = Ya(function(e, t) {
				Ga(t, ad(t), e);
			}), zu = Ya(function(e, t, n, r) {
				Ga(t, ad(t), e, r);
			}), Bu = Ya(function(e, t, n, r) {
				Ga(t, id(t), e, r);
			}), Vu = To(ri);
			function Hu(e, t) {
				var n = fr(e);
				return t == null ? n : ei(n, t);
			}
			var Uu = J(function(e, t) {
				e = F(e);
				var r = -1, i = t.length, a = i > 2 ? t[2] : n;
				for (a && qo(t[0], t[1], a) && (i = 1); ++r < i;) for (var o = t[r], s = ad(o), c = -1, l = s.length; ++c < l;) {
					var u = s[c], d = e[u];
					(d === n || Wl(d, ct[u]) && !dt.call(e, u)) && (e[u] = o[u]);
				}
				return e;
			}), Wu = J(function(e) {
				return e.push(n, bo), pn(ld, n, e);
			});
			function Gu(e, t) {
				return wn(e, Y(t, 3), yi);
			}
			function Ku(e, t) {
				return wn(e, Y(t, 3), bi);
			}
			function qu(e, t) {
				return e == null ? e : _i(e, Y(t, 3), ad);
			}
			function Ju(e, t) {
				return e == null ? e : vi(e, Y(t, 3), ad);
			}
			function Yu(e, t) {
				return e && yi(e, Y(t, 3));
			}
			function $(e, t) {
				return e && bi(e, Y(t, 3));
			}
			function Xu(e) {
				return e == null ? [] : xi(e, id(e));
			}
			function Zu(e) {
				return e == null ? [] : xi(e, ad(e));
			}
			function Qu(e, t, r) {
				var i = e == null ? n : Si(e, t);
				return i === n ? r : i;
			}
			function $u(e, t) {
				return e != null && Bo(e, t, Ei);
			}
			function ed(e, t) {
				return e != null && Bo(e, t, Di);
			}
			var td = oo(function(e, t, n) {
				t != null && typeof t.toString != "function" && (t = mt.call(t)), e[t] = n;
			}, lf(pf)), nd = oo(function(e, t, n) {
				t != null && typeof t.toString != "function" && (t = mt.call(t)), dt.call(e, t) ? e[t].push(n) : e[t] = [n];
			}, Y), rd = J(ji);
			function id(e) {
				return Yl(e) ? Kr(e) : Wi(e);
			}
			function ad(e) {
				return Yl(e) ? Kr(e, !0) : Gi(e);
			}
			function od(e, t) {
				var n = {};
				return t = Y(t, 3), yi(e, function(e, r, i) {
					ni(n, t(e, r, i), e);
				}), n;
			}
			function sd(e, t) {
				var n = {};
				return t = Y(t, 3), yi(e, function(e, r, i) {
					ni(n, r, t(e, r, i));
				}), n;
			}
			var cd = Ya(function(e, t, n) {
				Xi(e, t, n);
			}), ld = Ya(function(e, t, n, r) {
				Xi(e, t, n, r);
			}), ud = To(function(e, t) {
				var n = {};
				if (e == null) return n;
				var r = !1;
				t = R(t, function(t) {
					return t = Aa(t, e), r ||= t.length > 1, t;
				}), Ga(e, Do(e), n), r && (n = ai(n, 7, xo));
				for (var i = t.length; i--;) Sa(n, t[i]);
				return n;
			});
			function dd(e, t) {
				return pd(e, Dl(Y(t)));
			}
			var fd = To(function(e, t) {
				return e == null ? {} : ea(e, t);
			});
			function pd(e, t) {
				if (e == null) return {};
				var n = R(Do(e), function(e) {
					return [e];
				});
				return t = Y(t), ta(e, n, function(e, n) {
					return t(e, n[0]);
				});
			}
			function md(e, t, r) {
				t = Aa(t, e);
				var i = -1, a = t.length;
				for (a || (a = 1, e = n); ++i < a;) {
					var o = e == null ? n : e[_s(t[i])];
					o === n && (i = a, o = r), e = ou(o) ? o.call(e) : o;
				}
				return e;
			}
			function hd(e, t, n) {
				return e == null ? e : ua(e, t, n);
			}
			function gd(e, t, r, i) {
				return i = typeof i == "function" ? i : n, e == null ? e : ua(e, t, r, i);
			}
			var _d = _o(id), vd = _o(ad);
			function yd(e, t, n) {
				var r = X(e), i = r || Ql(e) || Tu(e);
				if (t = Y(t, 4), n == null) {
					var a = e && e.constructor;
					n = i ? r ? new a() : [] : lu(e) && ou(a) ? fr(xt(e)) : {};
				}
				return (i ? hn : yi)(e, function(e, r, i) {
					return t(n, e, r, i);
				}), n;
			}
			function bd(e, t) {
				return e == null || Sa(e, t);
			}
			function xd(e, t, n) {
				return e == null ? e : Ca(e, t, ka(n));
			}
			function Sd(e, t, r, i) {
				return i = typeof i == "function" ? i : n, e == null ? e : Ca(e, t, ka(r), i);
			}
			function Cd(e) {
				return e == null ? [] : Pn(e, id(e));
			}
			function wd(e) {
				return e == null ? [] : Pn(e, ad(e));
			}
			function Td(e, t, r) {
				return r === n && (r = t, t = n), r !== n && (r = Pu(r), r = r === r ? r : 0), t !== n && (t = Pu(t), t = t === t ? t : 0), ii(Pu(e), t, r);
			}
			function Ed(e, t, r) {
				return t = Mu(t), r === n ? (r = t, t = 0) : r = Mu(r), e = Pu(e), Oi(e, t, r);
			}
			function Dd(e, t, r) {
				if (r && typeof r != "boolean" && qo(e, t, r) && (t = r = n), r === n && (typeof t == "boolean" ? (r = t, t = n) : typeof e == "boolean" && (r = e, e = n)), e === n && t === n ? (e = 0, t = 1) : (e = Mu(e), t === n ? (t = e, e = 0) : t = Mu(t)), e > t) {
					var i = e;
					e = t, t = i;
				}
				if (r || e % 1 || t % 1) {
					var a = Yt();
					return Kt(e + a * (t - e + Xt("1e-" + ((a + "").length - 1))), t);
				}
				return aa(e, t);
			}
			var Od = eo(function(e, t, n) {
				return t = t.toLowerCase(), e + (n ? kd(t) : t);
			});
			function kd(e) {
				return nf(Q(e).toLowerCase());
			}
			function Ad(e) {
				return e = Q(e), e && e.replace(Ze, zn).replace(Lt, "");
			}
			function jd(e, t, r) {
				e = Q(e), t = ba(t);
				var i = e.length;
				r = r === n ? i : ii(Z(r), 0, i);
				var a = r;
				return r -= t.length, r >= 0 && e.slice(r, a) == t;
			}
			function Md(e) {
				return e = Q(e), e && Oe.test(e) ? e.replace(Ee, Bn) : e;
			}
			function Nd(e) {
				return e = Q(e), e && Ie.test(e) ? e.replace(Fe, "\\$&") : e;
			}
			var Pd = eo(function(e, t, n) {
				return e + (n ? "-" : "") + t.toLowerCase();
			}), Fd = eo(function(e, t, n) {
				return e + (n ? " " : "") + t.toLowerCase();
			}), Id = $a("toLowerCase");
			function Ld(e, t, n) {
				e = Q(e), t = Z(t);
				var r = t ? $n(e) : 0;
				if (!t || r >= t) return e;
				var i = (t - r) / 2;
				return lo(Nt(i), n) + e + lo(Mt(i), n);
			}
			function Rd(e, t, n) {
				e = Q(e), t = Z(t);
				var r = t ? $n(e) : 0;
				return t && r < t ? e + lo(t - r, n) : e;
			}
			function zd(e, t, n) {
				e = Q(e), t = Z(t);
				var r = t ? $n(e) : 0;
				return t && r < t ? lo(t - r, n) + e : e;
			}
			function Bd(e, t, n) {
				return n || t == null ? t = 0 : t &&= +t, Jt(Q(e).replace(Le, ""), t || 0);
			}
			function Vd(e, t, r) {
				return t = (r ? qo(e, t, r) : t === n) ? 1 : Z(t), sa(Q(e), t);
			}
			function Hd() {
				var e = arguments, t = Q(e[0]);
				return e.length < 3 ? t : t.replace(e[1], e[2]);
			}
			var Ud = eo(function(e, t, n) {
				return e + (n ? "_" : "") + t.toLowerCase();
			});
			function Wd(e, t, r) {
				return r && typeof r != "number" && qo(e, t, r) && (t = r = n), r = r === n ? y : r >>> 0, r ? (e = Q(e), e && (typeof t == "string" || t != null && !bu(t)) && (t = ba(t), !t && Un(e)) ? Ma(er(e), 0, r) : e.split(t, r)) : [];
			}
			var Gd = eo(function(e, t, n) {
				return e + (n ? " " : "") + nf(t);
			});
			function Kd(e, t, n) {
				return e = Q(e), n = n == null ? 0 : ii(Z(n), 0, e.length), t = ba(t), e.slice(n, n + t.length) == t;
			}
			function qd(e, t, r) {
				var i = q.templateSettings;
				r && qo(e, t, r) && (t = n), e = Q(e), t = zu({}, t, i, yo);
				var a = zu({}, t.imports, i.imports, yo), o = id(a), s = Pn(a, o), c, l, u = 0, d = t.interpolate || Qe, f = "__p += '", p = rt((t.escape || Qe).source + "|" + d.source + "|" + (d === je ? We : Qe).source + "|" + (t.evaluate || Qe).source + "|$", "g"), m = "//# sourceURL=" + (dt.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ut + "]") + "\n";
				e.replace(p, function(t, n, r, i, a, o) {
					return r ||= i, f += e.slice(u, o).replace($e, Vn), n && (c = !0, f += "' +\n__e(" + n + ") +\n'"), a && (l = !0, f += "';\n" + a + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), u = o + t.length, t;
				}), f += "';\n";
				var h = dt.call(t, "variable") && t.variable;
				if (!h) f = "with (obj) {\n" + f + "\n}\n";
				else if (He.test(h)) throw new et("Invalid `variable` option passed into `_.template`");
				f = (l ? f.replace(Se, "") : f).replace(Ce, "$1").replace(we, "$1;"), f = "function(" + (h || "obj") + ") {\n" + (h ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (c ? ", __e = _.escape" : "") + (l ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
				var g = af(function() {
					return tt(o, m + "return " + f).apply(n, s);
				});
				if (g.source = f, iu(g)) throw g;
				return g;
			}
			function Jd(e) {
				return Q(e).toLowerCase();
			}
			function Yd(e) {
				return Q(e).toUpperCase();
			}
			function Xd(e, t, r) {
				if (e = Q(e), e && (r || t === n)) return Mn(e);
				if (!e || !(t = ba(t))) return e;
				var i = er(e), a = er(t);
				return Ma(i, In(i, a), Ln(i, a) + 1).join("");
			}
			function Zd(e, t, r) {
				if (e = Q(e), e && (r || t === n)) return e.slice(0, tr(e) + 1);
				if (!e || !(t = ba(t))) return e;
				var i = er(e);
				return Ma(i, 0, Ln(i, er(t)) + 1).join("");
			}
			function Qd(e, t, r) {
				if (e = Q(e), e && (r || t === n)) return e.replace(Le, "");
				if (!e || !(t = ba(t))) return e;
				var i = er(e);
				return Ma(i, In(i, er(t))).join("");
			}
			function $d(e, t) {
				var r = 30, i = "...";
				if (lu(t)) {
					var a = "separator" in t ? t.separator : a;
					r = "length" in t ? Z(t.length) : r, i = "omission" in t ? ba(t.omission) : i;
				}
				e = Q(e);
				var o = e.length;
				if (Un(e)) {
					var s = er(e);
					o = s.length;
				}
				if (r >= o) return e;
				var c = r - $n(i);
				if (c < 1) return i;
				var l = s ? Ma(s, 0, c).join("") : e.slice(0, c);
				if (a === n) return l + i;
				if (s && (c += l.length - c), bu(a)) {
					if (e.slice(c).search(a)) {
						var u, d = l;
						for (a.global || (a = rt(a.source, Q(Ge.exec(a)) + "g")), a.lastIndex = 0; u = a.exec(d);) var f = u.index;
						l = l.slice(0, f === n ? c : f);
					}
				} else if (e.indexOf(ba(a), c) != c) {
					var p = l.lastIndexOf(a);
					p > -1 && (l = l.slice(0, p));
				}
				return l + i;
			}
			function ef(e) {
				return e = Q(e), e && De.test(e) ? e.replace(Te, nr) : e;
			}
			var tf = eo(function(e, t, n) {
				return e + (n ? " " : "") + t.toUpperCase();
			}), nf = $a("toUpperCase");
			function rf(e, t, r) {
				return e = Q(e), t = r ? n : t, t === n ? Wn(e) ? ar(e) : Cn(e) : e.match(t) || [];
			}
			var af = J(function(e, t) {
				try {
					return pn(e, n, t);
				} catch (e) {
					return iu(e) ? e : new et(e);
				}
			}), of = To(function(e, t) {
				return hn(t, function(t) {
					t = _s(t), ni(e, t, vl(e[t], e));
				}), e;
			});
			function sf(e) {
				var t = e == null ? 0 : e.length, n = Y();
				return e = t ? R(e, function(e) {
					if (typeof e[1] != "function") throw new at(r);
					return [n(e[0]), e[1]];
				}) : [], J(function(n) {
					for (var r = -1; ++r < t;) {
						var i = e[r];
						if (pn(i[0], this, n)) return pn(i[1], this, n);
					}
				});
			}
			function cf(e) {
				return oi(ai(e, 1));
			}
			function lf(e) {
				return function() {
					return e;
				};
			}
			function uf(e, t) {
				return e == null || e !== e ? t : e;
			}
			var df = io(), ff = io(!0);
			function pf(e) {
				return e;
			}
			function mf(e) {
				return Ui(typeof e == "function" ? e : ai(e, 1));
			}
			function hf(e) {
				return Ji(ai(e, 1));
			}
			function gf(e, t) {
				return Yi(e, ai(t, 1));
			}
			var _f = J(function(e, t) {
				return function(n) {
					return ji(n, e, t);
				};
			}), vf = J(function(e, t) {
				return function(n) {
					return ji(e, n, t);
				};
			});
			function yf(e, t, n) {
				var r = id(t), i = xi(t, r);
				n == null && !(lu(t) && (i.length || !r.length)) && (n = t, t = e, e = this, i = xi(t, id(t)));
				var a = !(lu(n) && "chain" in n) || !!n.chain, o = ou(e);
				return hn(i, function(n) {
					var r = t[n];
					e[n] = r, o && (e.prototype[n] = function() {
						var t = this.__chain__;
						if (a || t) {
							var n = e(this.__wrapped__);
							return (n.__actions__ = Wa(this.__actions__)).push({
								func: r,
								args: arguments,
								thisArg: e
							}), n.__chain__ = t, n;
						}
						return r.apply(e, z([this.value()], arguments));
					});
				}), e;
			}
			function bf() {
				return en._ === this && (en._ = gt), this;
			}
			function xf() {}
			function Sf(e) {
				return e = Z(e), J(function(t) {
					return Qi(t, e);
				});
			}
			var Cf = co(R), wf = co(L), Tf = co(xn);
			function Ef(e) {
				return Jo(e) ? Dn(_s(e)) : na(e);
			}
			function Df(e) {
				return function(t) {
					return e == null ? n : Si(e, t);
				};
			}
			var Of = fo(), kf = fo(!0);
			function Af() {
				return [];
			}
			function jf() {
				return !1;
			}
			function Mf() {
				return {};
			}
			function Nf() {
				return "";
			}
			function Pf() {
				return !0;
			}
			function Ff(e, t) {
				if (e = Z(e), e < 1 || e > g) return [];
				var n = y, r = Kt(e, y);
				t = Y(t), e -= y;
				for (var i = K(r, t); ++n < e;) t(n);
				return i;
			}
			function If(e) {
				return X(e) ? R(e, _s) : wu(e) ? [e] : Wa(gs(Q(e)));
			}
			function Lf(e) {
				var t = ++ft;
				return Q(e) + t;
			}
			var Rf = so(function(e, t) {
				return e + t;
			}, 0), zf = ho("ceil"), Bf = so(function(e, t) {
				return e / t;
			}, 1), Vf = ho("floor");
			function Hf(e) {
				return e && e.length ? pi(e, pf, Ti) : n;
			}
			function Uf(e, t) {
				return e && e.length ? pi(e, Y(t, 2), Ti) : n;
			}
			function Wf(e) {
				return W(e, pf);
			}
			function Gf(e, t) {
				return W(e, Y(t, 2));
			}
			function Kf(e) {
				return e && e.length ? pi(e, pf, Ki) : n;
			}
			function qf(e, t) {
				return e && e.length ? pi(e, Y(t, 2), Ki) : n;
			}
			var Jf = so(function(e, t) {
				return e * t;
			}, 1), Yf = ho("round"), Xf = so(function(e, t) {
				return e - t;
			}, 0);
			function Zf(e) {
				return e && e.length ? G(e, pf) : 0;
			}
			function Qf(e, t) {
				return e && e.length ? G(e, Y(t, 2)) : 0;
			}
			return q.after = hl, q.ary = gl, q.assign = Lu, q.assignIn = Ru, q.assignInWith = zu, q.assignWith = Bu, q.at = Vu, q.before = _l, q.bind = vl, q.bindAll = of, q.bindKey = yl, q.castArray = Rl, q.chain = jc, q.chunk = xs, q.compact = Ss, q.concat = Cs, q.cond = sf, q.conforms = cf, q.constant = lf, q.countBy = Hc, q.create = Hu, q.curry = bl, q.curryRight = xl, q.debounce = Sl, q.defaults = Uu, q.defaultsDeep = Wu, q.defer = Cl, q.delay = wl, q.difference = ws, q.differenceBy = Ts, q.differenceWith = Es, q.drop = Ds, q.dropRight = Os, q.dropRightWhile = ks, q.dropWhile = As, q.fill = js, q.filter = Wc, q.flatMap = qc, q.flatMapDeep = Jc, q.flatMapDepth = Yc, q.flatten = Ps, q.flattenDeep = Fs, q.flattenDepth = Is, q.flip = Tl, q.flow = df, q.flowRight = ff, q.fromPairs = Ls, q.functions = Xu, q.functionsIn = Zu, q.groupBy = Qc, q.initial = Bs, q.intersection = Vs, q.intersectionBy = Hs, q.intersectionWith = Us, q.invert = td, q.invertBy = nd, q.invokeMap = el, q.iteratee = mf, q.keyBy = tl, q.keys = id, q.keysIn = ad, q.map = nl, q.mapKeys = od, q.mapValues = sd, q.matches = hf, q.matchesProperty = gf, q.memoize = El, q.merge = cd, q.mergeWith = ld, q.method = _f, q.methodOf = vf, q.mixin = yf, q.negate = Dl, q.nthArg = Sf, q.omit = ud, q.omitBy = dd, q.once = Ol, q.orderBy = rl, q.over = Cf, q.overArgs = kl, q.overEvery = wf, q.overSome = Tf, q.partial = Al, q.partialRight = jl, q.partition = il, q.pick = fd, q.pickBy = pd, q.property = Ef, q.propertyOf = Df, q.pull = Js, q.pullAll = Ys, q.pullAllBy = Xs, q.pullAllWith = Zs, q.pullAt = Qs, q.range = Of, q.rangeRight = kf, q.rearg = Ml, q.reject = sl, q.remove = $s, q.rest = Nl, q.reverse = ec, q.sampleSize = ll, q.set = hd, q.setWith = gd, q.shuffle = ul, q.slice = tc, q.sortBy = pl, q.sortedUniq = cc, q.sortedUniqBy = lc, q.split = Wd, q.spread = Pl, q.tail = uc, q.take = dc, q.takeRight = fc, q.takeRightWhile = pc, q.takeWhile = mc, q.tap = Mc, q.throttle = Fl, q.thru = Nc, q.toArray = ju, q.toPairs = _d, q.toPairsIn = vd, q.toPath = If, q.toPlainObject = Fu, q.transform = yd, q.unary = Il, q.union = hc, q.unionBy = gc, q.unionWith = _c, q.uniq = vc, q.uniqBy = yc, q.uniqWith = bc, q.unset = bd, q.unzip = xc, q.unzipWith = Sc, q.update = xd, q.updateWith = Sd, q.values = Cd, q.valuesIn = wd, q.without = Cc, q.words = rf, q.wrap = Ll, q.xor = wc, q.xorBy = Tc, q.xorWith = Ec, q.zip = Dc, q.zipObject = Oc, q.zipObjectDeep = kc, q.zipWith = Ac, q.entries = _d, q.entriesIn = vd, q.extend = Ru, q.extendWith = zu, yf(q, q), q.add = Rf, q.attempt = af, q.camelCase = Od, q.capitalize = kd, q.ceil = zf, q.clamp = Td, q.clone = zl, q.cloneDeep = Vl, q.cloneDeepWith = Hl, q.cloneWith = Bl, q.conformsTo = Ul, q.deburr = Ad, q.defaultTo = uf, q.divide = Bf, q.endsWith = jd, q.eq = Wl, q.escape = Md, q.escapeRegExp = Nd, q.every = Uc, q.find = Gc, q.findIndex = Ms, q.findKey = Gu, q.findLast = Kc, q.findLastIndex = Ns, q.findLastKey = Ku, q.floor = Vf, q.forEach = Xc, q.forEachRight = Zc, q.forIn = qu, q.forInRight = Ju, q.forOwn = Yu, q.forOwnRight = $, q.get = Qu, q.gt = Gl, q.gte = Kl, q.has = $u, q.hasIn = ed, q.head = Rs, q.identity = pf, q.includes = $c, q.indexOf = zs, q.inRange = Ed, q.invoke = rd, q.isArguments = ql, q.isArray = X, q.isArrayBuffer = Jl, q.isArrayLike = Yl, q.isArrayLikeObject = Xl, q.isBoolean = Zl, q.isBuffer = Ql, q.isDate = $l, q.isElement = eu, q.isEmpty = tu, q.isEqual = nu, q.isEqualWith = ru, q.isError = iu, q.isFinite = au, q.isFunction = ou, q.isInteger = su, q.isLength = cu, q.isMap = du, q.isMatch = fu, q.isMatchWith = pu, q.isNaN = mu, q.isNative = hu, q.isNil = _u, q.isNull = gu, q.isNumber = vu, q.isObject = lu, q.isObjectLike = uu, q.isPlainObject = yu, q.isRegExp = bu, q.isSafeInteger = xu, q.isSet = Su, q.isString = Cu, q.isSymbol = wu, q.isTypedArray = Tu, q.isUndefined = Eu, q.isWeakMap = Du, q.isWeakSet = Ou, q.join = Ws, q.kebabCase = Pd, q.last = Gs, q.lastIndexOf = Ks, q.lowerCase = Fd, q.lowerFirst = Id, q.lt = ku, q.lte = Au, q.max = Hf, q.maxBy = Uf, q.mean = Wf, q.meanBy = Gf, q.min = Kf, q.minBy = qf, q.stubArray = Af, q.stubFalse = jf, q.stubObject = Mf, q.stubString = Nf, q.stubTrue = Pf, q.multiply = Jf, q.nth = qs, q.noConflict = bf, q.noop = xf, q.now = ml, q.pad = Ld, q.padEnd = Rd, q.padStart = zd, q.parseInt = Bd, q.random = Dd, q.reduce = al, q.reduceRight = ol, q.repeat = Vd, q.replace = Hd, q.result = md, q.round = Yf, q.runInContext = e, q.sample = cl, q.size = dl, q.snakeCase = Ud, q.some = fl, q.sortedIndex = nc, q.sortedIndexBy = rc, q.sortedIndexOf = ic, q.sortedLastIndex = ac, q.sortedLastIndexBy = oc, q.sortedLastIndexOf = sc, q.startCase = Gd, q.startsWith = Kd, q.subtract = Xf, q.sum = Zf, q.sumBy = Qf, q.template = qd, q.times = Ff, q.toFinite = Mu, q.toInteger = Z, q.toLength = Nu, q.toLower = Jd, q.toNumber = Pu, q.toSafeInteger = Iu, q.toString = Q, q.toUpper = Yd, q.trim = Xd, q.trimEnd = Zd, q.trimStart = Qd, q.truncate = $d, q.unescape = ef, q.uniqueId = Lf, q.upperCase = tf, q.upperFirst = nf, q.each = Xc, q.eachRight = Zc, q.first = Rs, yf(q, function() {
				var e = {};
				return yi(q, function(t, n) {
					dt.call(q.prototype, n) || (e[n] = t);
				}), e;
			}(), { chain: !1 }), q.VERSION = "4.17.21", hn([
				"bind",
				"bindKey",
				"curry",
				"curryRight",
				"partial",
				"partialRight"
			], function(e) {
				q[e].placeholder = q;
			}), hn(["drop", "take"], function(e, t) {
				hr.prototype[e] = function(r) {
					r = r === n ? 1 : Vt(Z(r), 0);
					var i = this.__filtered__ && !t ? new hr(this) : this.clone();
					return i.__filtered__ ? i.__takeCount__ = Kt(r, i.__takeCount__) : i.__views__.push({
						size: Kt(r, y),
						type: e + (i.__dir__ < 0 ? "Right" : "")
					}), i;
				}, hr.prototype[e + "Right"] = function(t) {
					return this.reverse()[e](t).reverse();
				};
			}), hn([
				"filter",
				"map",
				"takeWhile"
			], function(e, t) {
				var n = t + 1, r = n == 1 || n == 3;
				hr.prototype[e] = function(e) {
					var t = this.clone();
					return t.__iteratees__.push({
						iteratee: Y(e, 3),
						type: n
					}), t.__filtered__ = t.__filtered__ || r, t;
				};
			}), hn(["head", "last"], function(e, t) {
				var n = "take" + (t ? "Right" : "");
				hr.prototype[e] = function() {
					return this[n](1).value()[0];
				};
			}), hn(["initial", "tail"], function(e, t) {
				var n = "drop" + (t ? "" : "Right");
				hr.prototype[e] = function() {
					return this.__filtered__ ? new hr(this) : this[n](1);
				};
			}), hr.prototype.compact = function() {
				return this.filter(pf);
			}, hr.prototype.find = function(e) {
				return this.filter(e).head();
			}, hr.prototype.findLast = function(e) {
				return this.reverse().find(e);
			}, hr.prototype.invokeMap = J(function(e, t) {
				return typeof e == "function" ? new hr(this) : this.map(function(n) {
					return ji(n, e, t);
				});
			}), hr.prototype.reject = function(e) {
				return this.filter(Dl(Y(e)));
			}, hr.prototype.slice = function(e, t) {
				e = Z(e);
				var r = this;
				return r.__filtered__ && (e > 0 || t < 0) ? new hr(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== n && (t = Z(t), r = t < 0 ? r.dropRight(-t) : r.take(t - e)), r);
			}, hr.prototype.takeRightWhile = function(e) {
				return this.reverse().takeWhile(e).reverse();
			}, hr.prototype.toArray = function() {
				return this.take(y);
			}, yi(hr.prototype, function(e, t) {
				var r = /^(?:filter|find|map|reject)|While$/.test(t), i = /^(?:head|last)$/.test(t), a = q[i ? "take" + (t == "last" ? "Right" : "") : t], o = i || /^find/.test(t);
				a && (q.prototype[t] = function() {
					var t = this.__wrapped__, s = i ? [1] : arguments, c = t instanceof hr, l = s[0], u = c || X(t), d = function(e) {
						var t = a.apply(q, z([e], s));
						return i && f ? t[0] : t;
					};
					u && r && typeof l == "function" && l.length != 1 && (c = u = !1);
					var f = this.__chain__, p = !!this.__actions__.length, m = o && !f, h = c && !p;
					if (!o && u) {
						t = h ? t : new hr(this);
						var g = e.apply(t, s);
						return g.__actions__.push({
							func: Nc,
							args: [d],
							thisArg: n
						}), new mr(g, f);
					}
					return m && h ? e.apply(this, s) : (g = this.thru(d), m ? i ? g.value()[0] : g.value() : g);
				});
			}), hn([
				"pop",
				"push",
				"shift",
				"sort",
				"splice",
				"unshift"
			], function(e) {
				var t = ot[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
				q.prototype[e] = function() {
					var e = arguments;
					if (r && !this.__chain__) {
						var i = this.value();
						return t.apply(X(i) ? i : [], e);
					}
					return this[n](function(n) {
						return t.apply(X(n) ? n : [], e);
					});
				};
			}), yi(hr.prototype, function(e, t) {
				var n = q[t];
				if (n) {
					var r = n.name + "";
					dt.call(On, r) || (On[r] = []), On[r].push({
						name: t,
						func: n
					});
				}
			}), On[ao(n, s).name] = [{
				name: "wrapper",
				func: n
			}], hr.prototype.clone = gr, hr.prototype.reverse = _r, hr.prototype.value = vr, q.prototype.at = Pc, q.prototype.chain = Fc, q.prototype.commit = Ic, q.prototype.next = Lc, q.prototype.plant = zc, q.prototype.reverse = Bc, q.prototype.toJSON = q.prototype.valueOf = q.prototype.value = Vc, q.prototype.first = q.prototype.head, Et && (q.prototype[Et] = Rc), q;
		})();
		typeof define == "function" && typeof define.amd == "object" && define.amd ? (en._ = or, define(function() {
			return or;
		})) : nn ? ((nn.exports = or)._ = or, tn._ = or) : en._ = or;
	}).call(e);
})), Tu = (e) => Array.isArray(e) ? e.every(Eu) ? [{ items: e }] : e : [e];
function Eu(e) {
	return "value" in e;
}
var Du = ({ onClick: e, value: t, items: n, size: r, variant: i, disabled: a, loading: s, tooltip: c }) => {
	let l = f(), [u, d] = W(!1), p = H(() => Tu(n), [n]), m = H(() => p.flatMap((e) => e.items), [p]), h = H(() => t || m[0]?.value, [t, m]), g = H(() => m.find((e) => e.value === h), [h, m]), _ = () => {
		let t = m.find((e) => e.value === h);
		t && e(h, t);
	}, y = H(() => p.map((e) => e.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n.filter((e) => e.value !== h).map((t) => ({
		...t,
		onClick: () => {
			e(t.value, t), d(!1);
		}
	}))), t), []), [
		p,
		e,
		h
	]), x = r === "sm" ? "[&_.main]:w-6" : r === "lg" ? "[&_.main]:w-10" : "[&_.main]:w-8";
	return g && /* @__PURE__ */ G("div", {
		className: C(a && "opacity-30"),
		children: /* @__PURE__ */ G(ge, {
			onClick: _,
			variant: i,
			size: r,
			disabled: a,
			loading: s,
			"data-testid": "button-main",
			"aria-label": g.label,
			prepend: g.icon && /* @__PURE__ */ G(o, { icon: g.icon }),
			className: "rounded-r-none after:rounded-r-none disabled:opacity-100",
			tooltip: {
				label: c,
				description: g.label
			},
			appendOutside: /* @__PURE__ */ G(kt, {
				items: y,
				align: "end",
				open: u && !a,
				onOpenChange: (e) => {
					a || d(e);
				},
				children: /* @__PURE__ */ G("button", {
					className: C(b({
						variant: i,
						pressed: u && !a
					}), v({ size: r }), "-translate-x-px rounded-l-none px-0 after:rounded-l-none disabled:opacity-100", x, S()),
					disabled: a,
					"data-testid": "button-menu",
					"data-pressed": u && !a,
					children: /* @__PURE__ */ K("div", {
						className: "main flex items-center justify-center gap-1",
						children: [/* @__PURE__ */ G("span", {
							className: "sr-only",
							children: l.actions.more
						}), /* @__PURE__ */ G(o, {
							icon: Fe,
							size: r === "sm" ? "sm" : "md"
						})]
					})
				})
			}),
			children: g.label
		})
	});
}, Ou = ({ onClick: e, trigger: t, value: n, items: r, size: i, variant: a, disabled: s, loading: c, tooltip: l }) => {
	let [u, d] = W(!1), f = H(() => Tu(r), [r]), p = H(() => f.flatMap((e) => e.items), [f]), m = H(() => p.find((e) => e.value === n), [n, p]), h = t || m?.label || p[0]?.label, g = m ? {
		label: l,
		description: m.label
	} : l, _ = H(() => f.map((e) => e.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n.map((t) => ({
		...t,
		onClick: () => {
			e(t.value, t), d(!1);
		}
	}))), t), []), [f, e]);
	return h ? /* @__PURE__ */ G(kt, {
		items: _,
		align: "end",
		open: u && !s,
		onOpenChange: (e) => {
			s || d(e);
		},
		children: /* @__PURE__ */ G(ge, {
			variant: a,
			size: i,
			disabled: s,
			loading: c,
			"data-testid": "button-dropdown-trigger",
			"aria-label": h,
			prepend: m?.icon && /* @__PURE__ */ G(o, { icon: m.icon }),
			append: /* @__PURE__ */ G(o, {
				icon: Fe,
				size: i === "sm" ? "sm" : "md"
			}),
			pressed: u && !s,
			tooltip: g,
			children: h
		})
	}) : null;
}, ku = r((e) => (e.mode ?? "split") === "dropdown" ? /* @__PURE__ */ G(Ou, {
	onClick: e.onClick,
	trigger: "trigger" in e ? e.trigger : void 0,
	value: "value" in e ? e.value : void 0,
	items: e.items,
	size: e.size,
	variant: e.variant,
	disabled: e.disabled,
	loading: e.loading,
	tooltip: e.tooltip
}) : /* @__PURE__ */ G(Du, {
	onClick: e.onClick,
	value: "value" in e ? e.value : void 0,
	items: e.items,
	size: e.size,
	variant: e.variant,
	disabled: e.disabled,
	loading: e.loading,
	tooltip: e.tooltip
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+number@1.1.1/node_modules/@radix-ui/number/dist/index.mjs
function Au(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-previous/dist/index.mjs
function ju(e) {
	let t = L.useRef({
		value: e,
		previous: e
	});
	return L.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom_8b50dd17dda88491984286d0a66c0706/node_modules/@radix-ui/react-collection/dist/index.mjs
var Mu = wu();
function Z(e) {
	let t = e + "CollectionProvider", [n, r] = cn(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = (e) => {
		let { scope: t, children: n } = e, r = _n.useRef(null), a = _n.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ G(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	};
	o.displayName = t;
	let s = e + "CollectionSlot", c = _n.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = a(s, n), o = mn(t, i.collectionRef);
		return /* @__PURE__ */ G(on, {
			ref: o,
			children: r
		});
	});
	c.displayName = s;
	let l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = _n.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = _n.useRef(null), s = mn(t, o), c = a(l, n);
		return _n.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ G(on, {
			[u]: "",
			ref: s,
			children: r
		});
	});
	d.displayName = l;
	function f(t) {
		let n = a(e + "CollectionConsumer", t);
		return _n.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${u}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: o,
			Slot: c,
			ItemSlot: d
		},
		f,
		r
	];
}
//#endregion
//#region src/components/OneChip/index.tsx
var Nu = n({
	base: "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 font-medium",
	variants: { variant: {
		default: "",
		selected: "border-f1-border-selected bg-f1-background-selected-secondary text-f1-foreground-selected"
	} },
	defaultVariants: { variant: "default" }
}), Pu = m("Chip", ({ deactivated: e, label: t, variant: n, onClick: r, onClose: i, avatar: a, icon: s }) => {
	let c = Cn(), l = /* @__PURE__ */ K(An, { children: [a && /* @__PURE__ */ G(We, {
		avatar: a,
		size: "xs"
	}), /* @__PURE__ */ K("div", {
		className: "flex items-center gap-0.5",
		children: [s && /* @__PURE__ */ G(o, {
			icon: s,
			size: "sm",
			className: "text-f1-icon"
		}), /* @__PURE__ */ G("span", {
			id: i ? c : void 0,
			className: e ? "text-f1-foreground/[0.61]" : void 0,
			children: t
		})]
	})] });
	return /* @__PURE__ */ K("div", {
		className: C(Nu({ variant: n }), i && "pr-1.5", a && "pl-0.5", a && a?.type !== "person" && "rounded-sm", s && !a && "pl-1.5"),
		children: [r ? /* @__PURE__ */ G("button", {
			type: "button",
			className: C("-m-0.5 flex min-w-0 cursor-pointer items-center gap-1 rounded-full border-0 bg-transparent p-0.5 font-inherit text-inherit", S()),
			onClick: r,
			children: l
		}) : l, i && /* @__PURE__ */ G("button", {
			type: "button",
			onClick: (e) => {
				e.stopPropagation(), i();
			},
			className: C("-m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full [&_svg]:text-f1-icon-secondary [&_svg]:transition-colors [&_svg]:hover:text-f1-icon [&_svg]:focus:text-f1-icon", n === "selected" && "[&_svg]:text-f1-icon-selected [&_svg]:hover:text-f1-icon-selected-hover [&_svg]:focus:text-f1-icon-selected-hover", S()),
			tabIndex: 0,
			"aria-label": "Close",
			"aria-describedby": c,
			children: /* @__PURE__ */ G(o, {
				icon: Gt,
				size: "sm"
			})
		})]
	});
}), Fu = /* @__PURE__ */ e(Fc(), 1), Iu = "→", Q = (e) => e.replace(/'([^']+)'/g, "$1").replace(/MM/g, "mm").replace(/dd/g, "dd").replace(/yyyy/g, "yyyy").replace(/I/g, "nn").replace(/Q/g, "n"), Lu = (e, t) => e && t ? Bc([e, t]) : e ?? t, Ru = (e, t) => e && t ? Vc([e, t]) : e ?? t, zu = (e) => {
	if (e instanceof Date) return { from: e };
	if (e != null) return e;
}, Bu = (e) => e != null && e instanceof Date && !isNaN(e.getTime()), Vu = (e) => {
	if (e !== void 0) {
		if (typeof e == "string") {
			let [t, n] = e.split(/(?:\s+-\s+|\s+→\s+)/);
			return {
				from: t,
				to: n
			};
		}
		return e;
	}
}, Hu = (e, t) => mt(e, t), Uu = (e, t) => {
	let n = zu(e);
	if (!n) return {
		from: "",
		to: void 0
	};
	let r = Hu(n.from, t), i = n.to ? Hu(n.to, t) : void 0;
	return {
		from: r,
		to: i && r !== i ? i : void 0
	};
}, Wu = (e, t) => {
	let n = Uu(e, t);
	if (!n) return "-";
	let { from: r, to: i } = n;
	return `${r}${i && r !== i ? ` → ${i}` : ""}`;
};
function Gu(e, t, n) {
	let r = zu(e);
	if (!r) return null;
	let { from: i, to: a } = r;
	return {
		from: t(i),
		to: n(a || i)
	};
}
var Ku = (e, t) => !t || sl(e, t) || cl(e, t), qu = (e, t) => !t || ol(e, t) || cl(e, t), Ju = ({ minDate: e, maxDate: t }) => {
	let n = [];
	return e && n.push({ before: e }), t && n.push({ after: t }), n;
}, Yu = (e, t, { minDate: n, maxDate: r }) => {
	let i = t.toRange(e), a = t.toRange(n), o = t.toRange(r);
	return !e || !!i?.from && Bu(i.from) && (!a?.from || qu(i.from, a.from)) && (!o?.to || Ku(i.to, o.to));
}, $ = function() {
	return $ = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, $.apply(this, arguments);
};
function Xu(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Zu(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function Qu(e) {
	return e.mode === "multiple";
}
function $u(e) {
	return e.mode === "range";
}
function ed(e) {
	return e.mode === "single";
}
var td = {
	root: "rdp",
	multiple_months: "rdp-multiple_months",
	with_weeknumber: "rdp-with_weeknumber",
	vhidden: "rdp-vhidden",
	button_reset: "rdp-button_reset",
	button: "rdp-button",
	caption: "rdp-caption",
	caption_start: "rdp-caption_start",
	caption_end: "rdp-caption_end",
	caption_between: "rdp-caption_between",
	caption_label: "rdp-caption_label",
	caption_dropdowns: "rdp-caption_dropdowns",
	dropdown: "rdp-dropdown",
	dropdown_month: "rdp-dropdown_month",
	dropdown_year: "rdp-dropdown_year",
	dropdown_icon: "rdp-dropdown_icon",
	months: "rdp-months",
	month: "rdp-month",
	table: "rdp-table",
	tbody: "rdp-tbody",
	tfoot: "rdp-tfoot",
	head: "rdp-head",
	head_row: "rdp-head_row",
	head_cell: "rdp-head_cell",
	nav: "rdp-nav",
	nav_button: "rdp-nav_button",
	nav_button_previous: "rdp-nav_button_previous",
	nav_button_next: "rdp-nav_button_next",
	nav_icon: "rdp-nav_icon",
	row: "rdp-row",
	weeknumber: "rdp-weeknumber",
	cell: "rdp-cell",
	day: "rdp-day",
	day_today: "rdp-day_today",
	day_outside: "rdp-day_outside",
	day_selected: "rdp-day_selected",
	day_disabled: "rdp-day_disabled",
	day_hidden: "rdp-day_hidden",
	day_range_start: "rdp-day_range_start",
	day_range_end: "rdp-day_range_end",
	day_range_middle: "rdp-day_range_middle"
};
function nd(e, t) {
	return mt(e, "LLLL y", t);
}
function rd(e, t) {
	return mt(e, "d", t);
}
function id(e, t) {
	return mt(e, "LLLL", t);
}
function ad(e) {
	return `${e}`;
}
function od(e, t) {
	return mt(e, "cccccc", t);
}
function sd(e, t) {
	return mt(e, "yyyy", t);
}
var cd = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	formatCaption: nd,
	formatDay: rd,
	formatMonthCaption: id,
	formatWeekNumber: ad,
	formatWeekdayName: od,
	formatYearCaption: sd
}), ld = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	labelDay: function(e, t, n) {
		return mt(e, "do MMMM (EEEE)", n);
	},
	labelMonthDropdown: function() {
		return "Month: ";
	},
	labelNext: function() {
		return "Go to next month";
	},
	labelPrevious: function() {
		return "Go to previous month";
	},
	labelWeekNumber: function(e) {
		return `Week n. ${e}`;
	},
	labelWeekday: function(e, t) {
		return mt(e, "cccc", t);
	},
	labelYearDropdown: function() {
		return "Year: ";
	}
});
function ud() {
	return {
		captionLayout: "buttons",
		classNames: td,
		formatters: cd,
		labels: ld,
		locale: At,
		modifiersClassNames: {},
		modifiers: {},
		numberOfMonths: 1,
		styles: {},
		today: /* @__PURE__ */ new Date(),
		mode: "default"
	};
}
function dd(e) {
	var t = e.fromYear, n = e.toYear, r = e.fromMonth, i = e.toMonth, a = e.fromDate, o = e.toDate;
	return r ? a = qc(r) : t && (a = new Date(t, 0, 1)), i ? o = Gc(i) : n && (o = new Date(n, 11, 31)), {
		fromDate: a ? St(a) : void 0,
		toDate: o ? St(o) : void 0
	};
}
var fd = R(void 0);
function pd(e) {
	var t = e.initialProps, n = ud(), r = dd(t), i = r.fromDate, a = r.toDate, o = t.captionLayout ?? n.captionLayout;
	o !== "buttons" && (!i || !a) && (o = "buttons");
	var s;
	(ed(t) || Qu(t) || $u(t)) && (s = t.onSelect);
	var c = $($($({}, n), t), {
		captionLayout: o,
		classNames: $($({}, n.classNames), t.classNames),
		components: $({}, t.components),
		formatters: $($({}, n.formatters), t.formatters),
		fromDate: i,
		labels: $($({}, n.labels), t.labels),
		mode: t.mode || n.mode,
		modifiers: $($({}, n.modifiers), t.modifiers),
		modifiersClassNames: $($({}, n.modifiersClassNames), t.modifiersClassNames),
		onSelect: s,
		styles: $($({}, n.styles), t.styles),
		toDate: a
	});
	return G(fd.Provider, {
		value: c,
		children: e.children
	});
}
function md() {
	var e = xn(fd);
	if (!e) throw Error("useDayPicker must be used within a DayPickerProvider.");
	return e;
}
function hd(e) {
	var t = md(), n = t.locale, r = t.classNames, i = t.styles, a = t.formatters.formatCaption;
	return G("div", {
		className: r.caption_label,
		style: i.caption_label,
		"aria-live": "polite",
		role: "presentation",
		id: e.id,
		children: a(e.displayMonth, { locale: n })
	});
}
function gd(e) {
	return G("svg", $({
		width: "8px",
		height: "8px",
		viewBox: "0 0 120 120",
		"data-testid": "iconDropdown"
	}, e, { children: G("path", {
		d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",
		fill: "currentColor",
		fillRule: "nonzero"
	}) }));
}
function _d(e) {
	var t = e.onChange, n = e.value, r = e.children, i = e.caption, a = e.className, o = e.style, s = md(), c = s.components?.IconDropdown ?? gd;
	return K("div", {
		className: a,
		style: o,
		children: [
			G("span", {
				className: s.classNames.vhidden,
				children: e["aria-label"]
			}),
			G("select", {
				name: e.name,
				"aria-label": e["aria-label"],
				className: s.classNames.dropdown,
				style: s.styles.dropdown,
				value: n,
				onChange: t,
				children: r
			}),
			K("div", {
				className: s.classNames.caption_label,
				style: s.styles.caption_label,
				"aria-hidden": "true",
				children: [i, G(c, {
					className: s.classNames.dropdown_icon,
					style: s.styles.dropdown_icon
				})]
			})
		]
	});
}
function vd(e) {
	var t = md(), n = t.fromDate, r = t.toDate, i = t.styles, a = t.locale, o = t.formatters.formatMonthCaption, s = t.classNames, c = t.components, l = t.labels.labelMonthDropdown;
	if (!n || !r) return G(An, {});
	var u = [];
	if (bu(n, r)) for (var d = qc(n), f = n.getMonth(); f <= r.getMonth(); f++) u.push(Su(d, f));
	else for (var d = qc(/* @__PURE__ */ new Date()), f = 0; f <= 11; f++) u.push(Su(d, f));
	var p = function(t) {
		var n = Number(t.target.value), r = Su(qc(e.displayMonth), n);
		e.onChange(r);
	}, m = c?.Dropdown ?? _d;
	return G(m, {
		name: "months",
		"aria-label": l(),
		className: s.dropdown_month,
		style: i.dropdown_month,
		onChange: p,
		value: e.displayMonth.getMonth(),
		caption: o(e.displayMonth, { locale: a }),
		children: u.map(function(e) {
			return G("option", {
				value: e.getMonth(),
				children: o(e, { locale: a })
			}, e.getMonth());
		})
	});
}
function yd(e) {
	var t = e.displayMonth, n = md(), r = n.fromDate, i = n.toDate, a = n.locale, o = n.styles, s = n.classNames, c = n.components, l = n.formatters.formatYearCaption, u = n.labels.labelYearDropdown, d = [];
	if (!r || !i) return G(An, {});
	for (var f = r.getFullYear(), p = i.getFullYear(), m = f; m <= p; m++) d.push(Cu(Te(/* @__PURE__ */ new Date()), m));
	var h = function(n) {
		var r = Cu(qc(t), Number(n.target.value));
		e.onChange(r);
	}, g = c?.Dropdown ?? _d;
	return G(g, {
		name: "years",
		"aria-label": u(),
		className: s.dropdown_year,
		style: o.dropdown_year,
		onChange: h,
		value: t.getFullYear(),
		caption: l(t, { locale: a }),
		children: d.map(function(e) {
			return G("option", {
				value: e.getFullYear(),
				children: l(e, { locale: a })
			}, e.getFullYear());
		})
	});
}
function bd(e, t) {
	var n = W(e), r = n[0], i = n[1];
	return [t === void 0 ? r : t, i];
}
function xd(e) {
	var t = e.month, n = e.defaultMonth, r = e.today, i = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, o = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
	return a && Hc(a, i) < 0 && (i = Lc(a, -1 * (c - 1))), o && Hc(i, o) < 0 && (i = o), qc(i);
}
function Sd() {
	var e = md(), t = bd(xd(e), e.month), n = t[0], r = t[1];
	return [n, function(t) {
		var n;
		if (!e.disableNavigation) {
			var i = qc(t);
			r(i), (n = e.onMonthChange) == null || n.call(e, i);
		}
	}];
}
function Cd(e, t) {
	for (var n = t.reverseMonths, r = t.numberOfMonths, i = qc(e), a = Hc(qc(Lc(i, r)), i), o = [], s = 0; s < a; s++) {
		var c = Lc(i, s);
		o.push(c);
	}
	return n && (o = o.reverse()), o;
}
function wd(e, t) {
	if (!t.disableNavigation) {
		var n = t.toDate, r = t.pagedNavigation, i = t.numberOfMonths, a = i === void 0 ? 1 : i, o = r ? a : 1, s = qc(e);
		if (!n || !(Hc(n, e) < a)) return Lc(s, o);
	}
}
function Td(e, t) {
	if (!t.disableNavigation) {
		var n = t.fromDate, r = t.pagedNavigation, i = t.numberOfMonths, a = r ? i === void 0 ? 1 : i : 1, o = qc(e);
		if (!n || !(Hc(o, n) <= 0)) return Lc(o, -a);
	}
}
var Ed = R(void 0);
function Dd(e) {
	var t = md(), n = Sd(), r = n[0], i = n[1], a = Cd(r, t), o = wd(r, t), s = Td(r, t), c = function(e) {
		return a.some(function(t) {
			return vu(e, t);
		});
	}, l = {
		currentMonth: r,
		displayMonths: a,
		goToMonth: i,
		goToDate: function(e, n) {
			c(e) || (n && sl(e, n) ? i(Lc(e, 1 + t.numberOfMonths * -1)) : i(e));
		},
		previousMonth: s,
		nextMonth: o,
		isDateDisplayed: c
	};
	return G(Ed.Provider, {
		value: l,
		children: e.children
	});
}
function Od() {
	var e = xn(Ed);
	if (!e) throw Error("useNavigation must be used within a NavigationProvider");
	return e;
}
function kd(e) {
	var t = md(), n = t.classNames, r = t.styles, i = t.components, a = Od().goToMonth, o = function(t) {
		a(Lc(t, e.displayIndex ? -e.displayIndex : 0));
	}, s = i?.CaptionLabel ?? hd, c = G(s, {
		id: e.id,
		displayMonth: e.displayMonth
	});
	return K("div", {
		className: n.caption_dropdowns,
		style: r.caption_dropdowns,
		children: [
			G("div", {
				className: n.vhidden,
				children: c
			}),
			G(vd, {
				onChange: o,
				displayMonth: e.displayMonth
			}),
			G(yd, {
				onChange: o,
				displayMonth: e.displayMonth
			})
		]
	});
}
function Ad(e) {
	return G("svg", $({
		width: "16px",
		height: "16px",
		viewBox: "0 0 120 120"
	}, e, { children: G("path", {
		d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",
		fill: "currentColor",
		fillRule: "nonzero"
	}) }));
}
function jd(e) {
	return G("svg", $({
		width: "16px",
		height: "16px",
		viewBox: "0 0 120 120"
	}, e, { children: G("path", {
		d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",
		fill: "currentColor"
	}) }));
}
var Md = z(function(e, t) {
	var n = md(), r = n.classNames, i = n.styles, a = [r.button_reset, r.button];
	e.className && a.push(e.className);
	var o = a.join(" "), s = $($({}, i.button_reset), i.button);
	return e.style && Object.assign(s, e.style), G("button", $({}, e, {
		ref: t,
		type: "button",
		className: o,
		style: s
	}));
});
function Nd(e) {
	var t = md(), n = t.dir, r = t.locale, i = t.classNames, a = t.styles, o = t.labels, s = o.labelPrevious, c = o.labelNext, l = t.components;
	if (!e.nextMonth && !e.previousMonth) return G(An, {});
	var u = s(e.previousMonth, { locale: r }), d = [i.nav_button, i.nav_button_previous].join(" "), f = c(e.nextMonth, { locale: r }), p = [i.nav_button, i.nav_button_next].join(" "), m = l?.IconRight ?? jd, h = l?.IconLeft ?? Ad;
	return K("div", {
		className: i.nav,
		style: a.nav,
		children: [!e.hidePrevious && G(Md, {
			name: "previous-month",
			"aria-label": u,
			className: d,
			style: a.nav_button_previous,
			disabled: !e.previousMonth,
			onClick: e.onPreviousClick,
			children: G(n === "rtl" ? m : h, {
				className: i.nav_icon,
				style: a.nav_icon
			})
		}), !e.hideNext && G(Md, {
			name: "next-month",
			"aria-label": f,
			className: p,
			style: a.nav_button_next,
			disabled: !e.nextMonth,
			onClick: e.onNextClick,
			children: G(n === "rtl" ? h : m, {
				className: i.nav_icon,
				style: a.nav_icon
			})
		})]
	});
}
function Pd(e) {
	var t = md().numberOfMonths, n = Od(), r = n.previousMonth, i = n.nextMonth, a = n.goToMonth, o = n.displayMonths, s = o.findIndex(function(t) {
		return vu(e.displayMonth, t);
	}), c = s === 0, l = s === o.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c);
	return G(Nd, {
		displayMonth: e.displayMonth,
		hideNext: u,
		hidePrevious: d,
		nextMonth: i,
		previousMonth: r,
		onPreviousClick: function() {
			r && a(r);
		},
		onNextClick: function() {
			i && a(i);
		}
	});
}
function Fd(e) {
	var t = md(), n = t.classNames, r = t.disableNavigation, i = t.styles, a = t.captionLayout, o = t.components?.CaptionLabel ?? hd, s = r ? G(o, {
		id: e.id,
		displayMonth: e.displayMonth
	}) : a === "dropdown" ? G(kd, {
		displayMonth: e.displayMonth,
		id: e.id
	}) : a === "dropdown-buttons" ? K(An, { children: [G(kd, {
		displayMonth: e.displayMonth,
		displayIndex: e.displayIndex,
		id: e.id
	}), G(Pd, {
		displayMonth: e.displayMonth,
		displayIndex: e.displayIndex,
		id: e.id
	})] }) : K(An, { children: [G(o, {
		id: e.id,
		displayMonth: e.displayMonth,
		displayIndex: e.displayIndex
	}), G(Pd, {
		displayMonth: e.displayMonth,
		id: e.id
	})] });
	return G("div", {
		className: n.caption,
		style: i.caption,
		children: s
	});
}
function Id(e) {
	var t = md(), n = t.footer, r = t.styles, i = t.classNames.tfoot;
	return n ? G("tfoot", {
		className: i,
		style: r.tfoot,
		children: G("tr", { children: G("td", {
			colSpan: 8,
			children: n
		}) })
	}) : G(An, {});
}
function Ld(e, t, n) {
	for (var r = n ? je(/* @__PURE__ */ new Date()) : Ze(/* @__PURE__ */ new Date(), {
		locale: e,
		weekStartsOn: t
	}), i = [], a = 0; a < 7; a++) {
		var o = pt(r, a);
		i.push(o);
	}
	return i;
}
function Rd() {
	var e = md(), t = e.classNames, n = e.styles, r = e.showWeekNumber, i = e.locale, a = e.weekStartsOn, o = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = Ld(i, a, o);
	return K("tr", {
		style: n.head_row,
		className: t.head_row,
		children: [r && G("td", {
			style: n.head_cell,
			className: t.head_cell
		}), l.map(function(e, r) {
			return G("th", {
				scope: "col",
				className: t.head_cell,
				style: n.head_cell,
				"aria-label": c(e, { locale: i }),
				children: s(e, { locale: i })
			}, r);
		})]
	});
}
function zd() {
	var e = md(), t = e.classNames, n = e.styles, r = e.components?.HeadRow ?? Rd;
	return G("thead", {
		style: n.head,
		className: t.head,
		children: G(r, {})
	});
}
function Bd(e) {
	var t = md(), n = t.locale, r = t.formatters.formatDay;
	return G(An, { children: r(e.date, { locale: n }) });
}
var Vd = R(void 0);
function Hd(e) {
	return Qu(e.initialProps) ? G(Ud, {
		initialProps: e.initialProps,
		children: e.children
	}) : G(Vd.Provider, {
		value: {
			selected: void 0,
			modifiers: { disabled: [] }
		},
		children: e.children
	});
}
function Ud(e) {
	var t = e.initialProps, n = e.children, r = t.selected, i = t.min, a = t.max, o = function(e, n, o) {
		var s, c;
		if ((s = t.onDayClick) == null || s.call(t, e, n, o), !(n.selected && i && r?.length === i) && !(!n.selected && a && r?.length === a)) {
			var l = r ? Zu([], r, !0) : [];
			if (n.selected) {
				var u = l.findIndex(function(t) {
					return Ye(e, t);
				});
				l.splice(u, 1);
			} else l.push(e);
			(c = t.onSelect) == null || c.call(t, l, e, n, o);
		}
	}, s = { disabled: [] };
	r && s.disabled.push(function(e) {
		var t = a && r.length > a - 1, n = r.some(function(t) {
			return Ye(t, e);
		});
		return !!(t && !n);
	});
	var c = {
		selected: r,
		onDayClick: o,
		modifiers: s
	};
	return G(Vd.Provider, {
		value: c,
		children: n
	});
}
function Wd() {
	var e = xn(Vd);
	if (!e) throw Error("useSelectMultiple must be used within a SelectMultipleProvider");
	return e;
}
function Gd(e, t) {
	var n = t || {}, r = n.from, i = n.to;
	return r && i ? Ye(i, e) && Ye(r, e) ? void 0 : Ye(i, e) ? {
		from: i,
		to: void 0
	} : Ye(r, e) ? void 0 : ol(r, e) ? {
		from: e,
		to: i
	} : {
		from: r,
		to: e
	} : i ? ol(e, i) ? {
		from: i,
		to: e
	} : {
		from: e,
		to: i
	} : r ? sl(e, r) ? {
		from: e,
		to: r
	} : {
		from: r,
		to: e
	} : {
		from: e,
		to: void 0
	};
}
var Kd = R(void 0);
function qd(e) {
	return $u(e.initialProps) ? G(Jd, {
		initialProps: e.initialProps,
		children: e.children
	}) : G(Kd.Provider, {
		value: {
			selected: void 0,
			modifiers: {
				range_start: [],
				range_end: [],
				range_middle: [],
				disabled: []
			}
		},
		children: e.children
	});
}
function Jd(e) {
	var t = e.initialProps, n = e.children, r = t.selected, i = r || {}, a = i.from, o = i.to, s = t.min, c = t.max, l = function(e, n, i) {
		var a, o;
		(a = t.onDayClick) == null || a.call(t, e, n, i);
		var s = Gd(e, r);
		(o = t.onSelect) == null || o.call(t, s, e, n, i);
	}, u = {
		range_start: [],
		range_end: [],
		range_middle: [],
		disabled: []
	};
	if (a ? (u.range_start = [a], o ? (u.range_end = [o], Ye(a, o) || (u.range_middle = [{
		after: a,
		before: o
	}])) : u.range_end = [a]) : o && (u.range_start = [o], u.range_end = [o]), s && (a && !o && u.disabled.push({
		after: gt(a, s - 1),
		before: pt(a, s - 1)
	}), a && o && u.disabled.push({
		after: a,
		before: pt(a, s - 1)
	}), !a && o && u.disabled.push({
		after: gt(o, s - 1),
		before: pt(o, s - 1)
	})), c) {
		if (a && !o && (u.disabled.push({ before: pt(a, -c + 1) }), u.disabled.push({ after: pt(a, c - 1) })), a && o) {
			var d = c - (ke(o, a) + 1);
			u.disabled.push({ before: gt(a, d) }), u.disabled.push({ after: pt(o, d) });
		}
		!a && o && (u.disabled.push({ before: pt(o, -c + 1) }), u.disabled.push({ after: pt(o, c - 1) }));
	}
	return G(Kd.Provider, {
		value: {
			selected: r,
			onDayClick: l,
			modifiers: u
		},
		children: n
	});
}
function Yd() {
	var e = xn(Kd);
	if (!e) throw Error("useSelectRange must be used within a SelectRangeProvider");
	return e;
}
function Xd(e) {
	return Array.isArray(e) ? Zu([], e, !0) : e === void 0 ? [] : [e];
}
function Zd(e) {
	var t = {};
	return Object.entries(e).forEach(function(e) {
		var n = e[0], r = e[1];
		t[n] = Xd(r);
	}), t;
}
var Qd;
(function(e) {
	e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Qd ||= {});
var $d = Qd.Selected, ef = Qd.Disabled, tf = Qd.Hidden, nf = Qd.Today, rf = Qd.RangeEnd, af = Qd.RangeMiddle, of = Qd.RangeStart, sf = Qd.Outside;
function cf(e, t, n) {
	var r, i = (r = {}, r[$d] = Xd(e.selected), r[ef] = Xd(e.disabled), r[tf] = Xd(e.hidden), r[nf] = [e.today], r[rf] = [], r[af] = [], r[of] = [], r[sf] = [], r);
	return e.fromDate && i[ef].push({ before: e.fromDate }), e.toDate && i[ef].push({ after: e.toDate }), Qu(e) ? i[ef] = i[ef].concat(t.modifiers[ef]) : $u(e) && (i[ef] = i[ef].concat(n.modifiers[ef]), i[of] = n.modifiers[of], i[af] = n.modifiers[af], i[rf] = n.modifiers[rf]), i;
}
var lf = R(void 0);
function uf(e) {
	var t = md(), n = cf(t, Wd(), Yd()), r = Zd(t.modifiers), i = $($({}, n), r);
	return G(lf.Provider, {
		value: i,
		children: e.children
	});
}
function df() {
	var e = xn(lf);
	if (!e) throw Error("useModifiers must be used within a ModifiersProvider");
	return e;
}
function ff(e) {
	return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function pf(e) {
	return !!(e && typeof e == "object" && "from" in e);
}
function mf(e) {
	return !!(e && typeof e == "object" && "after" in e);
}
function hf(e) {
	return !!(e && typeof e == "object" && "before" in e);
}
function gf(e) {
	return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function _f(e, t) {
	var n, r = t.from, i = t.to;
	return r && i ? (ke(i, r) < 0 && (n = [i, r], r = n[0], i = n[1]), ke(e, r) >= 0 && ke(i, e) >= 0) : i ? Ye(i, e) : r ? Ye(r, e) : !1;
}
function vf(e) {
	return qe(e);
}
function yf(e) {
	return Array.isArray(e) && e.every(qe);
}
function bf(e, t) {
	return t.some(function(t) {
		if (typeof t == "boolean") return t;
		if (vf(t)) return Ye(e, t);
		if (yf(t)) return t.includes(e);
		if (pf(t)) return _f(e, t);
		if (gf(t)) return t.dayOfWeek.includes(e.getDay());
		if (ff(t)) {
			var n = ke(t.before, e), r = ke(t.after, e), i = n > 0, a = r < 0;
			return ol(t.before, t.after) ? a && i : i || a;
		}
		return mf(t) ? ke(e, t.after) > 0 : hf(t) ? ke(t.before, e) > 0 : typeof t == "function" && t(e);
	});
}
function xf(e, t, n) {
	var r = Object.keys(t).reduce(function(n, r) {
		var i = t[r];
		return bf(e, i) && n.push(r), n;
	}, []), i = {};
	return r.forEach(function(e) {
		return i[e] = !0;
	}), n && !vu(e, n) && (i.outside = !0), i;
}
function Sf(e, t) {
	for (var n = qc(e[0]), r = Gc(e[e.length - 1]), i, a, o = n; o <= r;) {
		var s = xf(o, t);
		if (!(!s.disabled && !s.hidden)) {
			o = pt(o, 1);
			continue;
		}
		if (s.selected) return o;
		s.today && !a && (a = o), i ||= o, o = pt(o, 1);
	}
	return a || i;
}
var Cf = 365;
function wf(e, t) {
	var n = t.moveBy, r = t.direction, i = t.context, a = t.modifiers, o = t.retry, s = o === void 0 ? {
		count: 0,
		lastFocused: e
	} : o, c = i.weekStartsOn, l = i.fromDate, u = i.toDate, d = i.locale, f = {
		day: pt,
		week: Rc,
		month: Lc,
		year: zc,
		startOfWeek: function(e) {
			return i.ISOWeek ? je(e) : Ze(e, {
				locale: d,
				weekStartsOn: c
			});
		},
		endOfWeek: function(e) {
			return i.ISOWeek ? Xc(e) : Yc(e, {
				locale: d,
				weekStartsOn: c
			});
		}
	}[n](e, r === "after" ? 1 : -1);
	r === "before" && l ? f = Bc([l, f]) : r === "after" && u && (f = Vc([u, f]));
	var p = !0;
	if (a) {
		var m = xf(f, a);
		p = !m.disabled && !m.hidden;
	}
	return p ? f : s.count > Cf ? s.lastFocused : wf(f, {
		moveBy: n,
		direction: r,
		context: i,
		modifiers: a,
		retry: $($({}, s), { count: s.count + 1 })
	});
}
var Tf = R(void 0);
function Ef(e) {
	var t = Od(), n = df(), r = W(), i = r[0], a = r[1], o = W(), s = o[0], c = o[1], l = Sf(t.displayMonths, n), u = i ?? (s && t.isDateDisplayed(s)) ? s : l, d = function() {
		c(i), a(void 0);
	}, f = function(e) {
		a(e);
	}, p = md(), m = function(e, r) {
		if (i) {
			var a = wf(i, {
				moveBy: e,
				direction: r,
				context: p,
				modifiers: n
			});
			Ye(i, a) || (t.goToDate(a, i), f(a));
		}
	}, h = {
		focusedDay: i,
		focusTarget: u,
		blur: d,
		focus: f,
		focusDayAfter: function() {
			return m("day", "after");
		},
		focusDayBefore: function() {
			return m("day", "before");
		},
		focusWeekAfter: function() {
			return m("week", "after");
		},
		focusWeekBefore: function() {
			return m("week", "before");
		},
		focusMonthBefore: function() {
			return m("month", "before");
		},
		focusMonthAfter: function() {
			return m("month", "after");
		},
		focusYearBefore: function() {
			return m("year", "before");
		},
		focusYearAfter: function() {
			return m("year", "after");
		},
		focusStartOfWeek: function() {
			return m("startOfWeek", "before");
		},
		focusEndOfWeek: function() {
			return m("endOfWeek", "after");
		}
	};
	return G(Tf.Provider, {
		value: h,
		children: e.children
	});
}
function Df() {
	var e = xn(Tf);
	if (!e) throw Error("useFocusContext must be used within a FocusProvider");
	return e;
}
function Of(e, t) {
	return xf(e, df(), t);
}
var kf = R(void 0);
function Af(e) {
	return ed(e.initialProps) ? G(jf, {
		initialProps: e.initialProps,
		children: e.children
	}) : G(kf.Provider, {
		value: { selected: void 0 },
		children: e.children
	});
}
function jf(e) {
	var t = e.initialProps, n = e.children, r = {
		selected: t.selected,
		onDayClick: function(e, n, r) {
			var i, a, o;
			if ((i = t.onDayClick) == null || i.call(t, e, n, r), n.selected && !t.required) {
				(a = t.onSelect) == null || a.call(t, void 0, e, n, r);
				return;
			}
			(o = t.onSelect) == null || o.call(t, e, e, n, r);
		}
	};
	return G(kf.Provider, {
		value: r,
		children: n
	});
}
function Mf() {
	var e = xn(kf);
	if (!e) throw Error("useSelectSingle must be used within a SelectSingleProvider");
	return e;
}
function Nf(e, t) {
	var n = md(), r = Mf(), i = Wd(), a = Yd(), o = Df(), s = o.focusDayAfter, c = o.focusDayBefore, l = o.focusWeekAfter, u = o.focusWeekBefore, d = o.blur, f = o.focus, p = o.focusMonthBefore, m = o.focusMonthAfter, h = o.focusYearBefore, g = o.focusYearAfter, _ = o.focusStartOfWeek, v = o.focusEndOfWeek;
	return {
		onClick: function(o) {
			var s, c, l, u;
			ed(n) ? (s = r.onDayClick) == null || s.call(r, e, t, o) : Qu(n) ? (c = i.onDayClick) == null || c.call(i, e, t, o) : $u(n) ? (l = a.onDayClick) == null || l.call(a, e, t, o) : (u = n.onDayClick) == null || u.call(n, e, t, o);
		},
		onFocus: function(r) {
			var i;
			f(e), (i = n.onDayFocus) == null || i.call(n, e, t, r);
		},
		onBlur: function(r) {
			var i;
			d(), (i = n.onDayBlur) == null || i.call(n, e, t, r);
		},
		onKeyDown: function(r) {
			var i;
			switch (r.key) {
				case "ArrowLeft":
					r.preventDefault(), r.stopPropagation(), n.dir === "rtl" ? s() : c();
					break;
				case "ArrowRight":
					r.preventDefault(), r.stopPropagation(), n.dir === "rtl" ? c() : s();
					break;
				case "ArrowDown":
					r.preventDefault(), r.stopPropagation(), l();
					break;
				case "ArrowUp":
					r.preventDefault(), r.stopPropagation(), u();
					break;
				case "PageUp":
					r.preventDefault(), r.stopPropagation(), r.shiftKey ? h() : p();
					break;
				case "PageDown":
					r.preventDefault(), r.stopPropagation(), r.shiftKey ? g() : m();
					break;
				case "Home":
					r.preventDefault(), r.stopPropagation(), _();
					break;
				case "End": r.preventDefault(), r.stopPropagation(), v();
			}
			(i = n.onDayKeyDown) == null || i.call(n, e, t, r);
		},
		onKeyUp: function(r) {
			var i;
			(i = n.onDayKeyUp) == null || i.call(n, e, t, r);
		},
		onMouseEnter: function(r) {
			var i;
			(i = n.onDayMouseEnter) == null || i.call(n, e, t, r);
		},
		onMouseLeave: function(r) {
			var i;
			(i = n.onDayMouseLeave) == null || i.call(n, e, t, r);
		},
		onPointerEnter: function(r) {
			var i;
			(i = n.onDayPointerEnter) == null || i.call(n, e, t, r);
		},
		onPointerLeave: function(r) {
			var i;
			(i = n.onDayPointerLeave) == null || i.call(n, e, t, r);
		},
		onTouchCancel: function(r) {
			var i;
			(i = n.onDayTouchCancel) == null || i.call(n, e, t, r);
		},
		onTouchEnd: function(r) {
			var i;
			(i = n.onDayTouchEnd) == null || i.call(n, e, t, r);
		},
		onTouchMove: function(r) {
			var i;
			(i = n.onDayTouchMove) == null || i.call(n, e, t, r);
		},
		onTouchStart: function(r) {
			var i;
			(i = n.onDayTouchStart) == null || i.call(n, e, t, r);
		}
	};
}
function Pf() {
	var e = md(), t = Mf(), n = Wd(), r = Yd();
	return ed(e) ? t.selected : Qu(e) ? n.selected : $u(e) ? r.selected : void 0;
}
function Ff(e) {
	return Object.values(Qd).includes(e);
}
function If(e, t) {
	var n = [e.classNames.day];
	return Object.keys(t).forEach(function(t) {
		var r = e.modifiersClassNames[t];
		if (r) n.push(r);
		else if (Ff(t)) {
			var i = e.classNames[`day_${t}`];
			i && n.push(i);
		}
	}), n;
}
function Lf(e, t) {
	var n = $({}, e.styles.day);
	return Object.keys(t).forEach(function(t) {
		n = $($({}, n), e.modifiersStyles?.[t]);
	}), n;
}
function Rf(e, t, n) {
	var r, i = md(), a = Df(), o = Of(e, t), s = Nf(e, o), c = Pf(), l = !!(i.onDayClick || i.mode !== "default");
	V(function() {
		var t;
		o.outside || a.focusedDay && l && Ye(a.focusedDay, e) && ((t = n.current) == null || t.focus());
	}, [
		a.focusedDay,
		e,
		n,
		l,
		o.outside
	]);
	var u = If(i, o).join(" "), d = Lf(i, o), f = !!(o.outside && !i.showOutsideDays || o.hidden), p = i.components?.DayContent ?? Bd, m = {
		style: d,
		className: u,
		children: G(p, {
			date: e,
			displayMonth: t,
			activeModifiers: o
		}),
		role: "gridcell"
	}, h = a.focusTarget && Ye(a.focusTarget, e) && !o.outside, g = a.focusedDay && Ye(a.focusedDay, e);
	return {
		isButton: l,
		isHidden: f,
		activeModifiers: o,
		selectedDays: c,
		buttonProps: $($($({}, m), (r = {
			disabled: o.disabled,
			role: "gridcell"
		}, r["aria-selected"] = o.selected, r.tabIndex = g || h ? 0 : -1, r)), s),
		divProps: m
	};
}
function zf(e) {
	var t = U(null), n = Rf(e.date, e.displayMonth, t);
	return n.isHidden ? G("div", { role: "gridcell" }) : n.isButton ? G(Md, $({
		name: "day",
		ref: t
	}, n.buttonProps)) : G("div", $({}, n.divProps));
}
function Bf(e) {
	var t = e.number, n = e.dates, r = md(), i = r.onWeekNumberClick, a = r.styles, o = r.classNames, s = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: s });
	if (!i) return G("span", {
		className: o.weeknumber,
		style: a.weeknumber,
		children: u
	});
	var d = c(Number(t), { locale: s });
	return G(Md, {
		name: "week-number",
		"aria-label": d,
		className: o.weeknumber,
		style: a.weeknumber,
		onClick: function(e) {
			i(t, n, e);
		},
		children: u
	});
}
function Vf(e) {
	var t = md(), n = t.styles, r = t.classNames, i = t.showWeekNumber, a = t.components, o = a?.Day ?? zf, s = a?.WeekNumber ?? Bf, c;
	return i && (c = G("td", {
		className: r.cell,
		style: n.cell,
		children: G(s, {
			number: e.weekNumber,
			dates: e.dates
		})
	})), K("tr", {
		className: r.row,
		style: n.row,
		children: [c, e.dates.map(function(t) {
			return G("td", {
				className: r.cell,
				style: n.cell,
				role: "presentation",
				children: G(o, {
					displayMonth: e.displayMonth,
					date: t
				})
			}, nl(t));
		})]
	});
}
function Hf(e, t, n) {
	for (var r = n?.ISOWeek ? Xc(t) : Yc(t, n), i = n?.ISOWeek ? je(e) : Ze(e, n), a = ke(r, i), o = [], s = 0; s <= a; s++) o.push(pt(i, s));
	return o.reduce(function(e, t) {
		var r = n?.ISOWeek ? He(t) : Ae(t, n), i = e.find(function(e) {
			return e.weekNumber === r;
		});
		return i ? (i.dates.push(t), e) : (e.push({
			weekNumber: r,
			dates: [t]
		}), e);
	}, []);
}
function Uf(e, t) {
	var n = Hf(qc(e), Gc(e), t);
	if (t?.useFixedWeeks) {
		var r = il(e, t);
		if (r < 6) {
			var i = n[n.length - 1], a = i.dates[i.dates.length - 1], o = Rc(a, 6 - r), s = Hf(Rc(a, 1), o, t);
			n.push.apply(n, s);
		}
	}
	return n;
}
function Wf(e) {
	var t = md(), n = t.locale, r = t.classNames, i = t.styles, a = t.hideHead, o = t.fixedWeeks, s = t.components, c = t.weekStartsOn, l = t.firstWeekContainsDate, u = t.ISOWeek, d = Uf(e.displayMonth, {
		useFixedWeeks: !!o,
		ISOWeek: u,
		locale: n,
		weekStartsOn: c,
		firstWeekContainsDate: l
	}), f = s?.Head ?? zd, p = s?.Row ?? Vf, m = s?.Footer ?? Id;
	return K("table", {
		id: e.id,
		className: r.table,
		style: i.table,
		role: "grid",
		"aria-labelledby": e["aria-labelledby"],
		children: [
			!a && G(f, {}),
			G("tbody", {
				className: r.tbody,
				style: i.tbody,
				children: d.map(function(t) {
					return G(p, {
						displayMonth: e.displayMonth,
						dates: t.dates,
						weekNumber: t.weekNumber
					}, t.weekNumber);
				})
			}),
			G(m, { displayMonth: e.displayMonth })
		]
	});
}
function Gf() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Kf = Gf() ? Tn : V, qf = !1, Jf = 0;
function Yf() {
	return `react-day-picker-${++Jf}`;
}
function Xf(e) {
	var t = e ?? (qf ? Yf() : null), n = W(t), r = n[0], i = n[1];
	return Kf(function() {
		r === null && i(Yf());
	}, []), V(function() {
		qf === !1 && (qf = !0);
	}, []), e ?? r ?? void 0;
}
function Zf(e) {
	var t, n = md(), r = n.dir, i = n.classNames, a = n.styles, o = n.components, s = Od().displayMonths, c = Xf(n.id ? `${n.id}-${e.displayIndex}` : void 0), l = n.id ? `${n.id}-grid-${e.displayIndex}` : void 0, u = [i.month], d = a.month, f = e.displayIndex === 0, p = e.displayIndex === s.length - 1, m = !f && !p;
	r === "rtl" && (t = [f, p], p = t[0], f = t[1]), f && (u.push(i.caption_start), d = $($({}, d), a.caption_start)), p && (u.push(i.caption_end), d = $($({}, d), a.caption_end)), m && (u.push(i.caption_between), d = $($({}, d), a.caption_between));
	var h = o?.Caption ?? Fd;
	return K("div", {
		className: u.join(" "),
		style: d,
		children: [G(h, {
			id: c,
			displayMonth: e.displayMonth,
			displayIndex: e.displayIndex
		}), G(Wf, {
			id: l,
			"aria-labelledby": c,
			displayMonth: e.displayMonth
		})]
	}, e.displayIndex);
}
function Qf(e) {
	var t = md(), n = t.classNames, r = t.styles;
	return G("div", {
		className: n.months,
		style: r.months,
		children: e.children
	});
}
function $f(e) {
	var t = e.initialProps, n = md(), r = Df(), i = Od(), a = W(!1), o = a[0], s = a[1];
	V(function() {
		n.initialFocus && r.focusTarget && (o || (r.focus(r.focusTarget), s(!0)));
	}, [
		n.initialFocus,
		o,
		r.focus,
		r.focusTarget,
		r
	]);
	var c = [n.classNames.root, n.className];
	n.numberOfMonths > 1 && c.push(n.classNames.multiple_months), n.showWeekNumber && c.push(n.classNames.with_weeknumber);
	var l = $($({}, n.styles.root), n.style), u = Object.keys(t).filter(function(e) {
		return e.startsWith("data-");
	}).reduce(function(e, n) {
		var r;
		return $($({}, e), (r = {}, r[n] = t[n], r));
	}, {}), d = t.components?.Months ?? Qf;
	return G("div", $({
		className: c.join(" "),
		style: l,
		dir: n.dir,
		id: n.id,
		nonce: t.nonce,
		title: t.title,
		lang: t.lang
	}, u, { children: G(d, { children: i.displayMonths.map(function(e, t) {
		return G(Zf, {
			displayIndex: t,
			displayMonth: e
		}, t);
	}) }) }));
}
function ep(e) {
	var t = e.children, n = Xu(e, ["children"]);
	return G(pd, {
		initialProps: n,
		children: G(Dd, { children: G(Af, {
			initialProps: n,
			children: G(Hd, {
				initialProps: n,
				children: G(qd, {
					initialProps: n,
					children: G(uf, { children: G(Ef, { children: t }) })
				})
			})
		}) })
	});
}
function tp(e) {
	return G(ep, $({}, e, { children: G($f, { initialProps: e }) }));
}
//#endregion
//#region src/ui/calendar.tsx
function np({ className: e, classNames: t, showOutsideDays: n = !0, compact: r = !1, ...i }) {
	return /* @__PURE__ */ G(tp, {
		showOutsideDays: n,
		fixedWeeks: i.fixedWeeks,
		className: e,
		disabled: i.disabled,
		classNames: {
			months: "flex flex-col",
			caption: "hidden",
			nav: "space-x-1 flex items-center",
			nav_button_previous: "absolute left-1",
			nav_button_next: "absolute right-1",
			table: "w-full border-collapse",
			head_row: C("flex items-center", i.showWeekNumber ? "justify-start" : "justify-between"),
			head_cell: C("text-f1-foreground-secondary rounded-xs font-medium flex justify-center items-center", i.showWeekNumber && r ? "w-[30px] flex-shrink-0" : "w-full", r ? "h-6 text-sm" : "h-8 text-md"),
			row: C("flex w-full items-center", i.showWeekNumber ? "justify-start" : "justify-between", r ? "mt-1" : "mt-2"),
			cell: C("text-center font-medium p-0 relative text-f1-foreground transition-all duration-100", i.showWeekNumber && r ? "w-[30px] flex-shrink-0" : "w-full", r ? "rounded-sm h-7 text-md" : "rounded-md h-10 text-md", "before:absolute before:inset-0 before:z-0 before:bg-f1-background-selected-bold before:opacity-0 before:transition-all before:duration-100 before:content-[''] hover:before:bg-f1-background-selected-bold-hover before:pointer-events-none", r ? "before:rounded-sm" : "before:rounded-md", "[&:has([aria-selected].day-range-start)]:before:opacity-100 [&:has([aria-selected].day-range-end)]:before:opacity-100", "[&:has([aria-selected].day-outside)]:bg-f1-background-selected focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none [&:has([aria-selected].day-range-start.day-range-end)]:rounded-md [&:has([aria-selected].day-range-middle)]:bg-f1-background-selected", r ? "first:[&:has([aria-selected].day-range-middle)]:rounded-l-sm last:[&:has([aria-selected].day-range-middle)]:rounded-r-sm first:[&:has([aria-selected].day-range-end)]:rounded-r-sm first:[&:has([aria-selected].day-range-end)]:rounded-l-sm last:[&:has([aria-selected].day-range-start)]:rounded-l-sm last:[&:has([aria-selected].day-range-start)]:rounded-r-sm" : "first:[&:has([aria-selected].day-range-middle)]:rounded-l-md last:[&:has([aria-selected].day-range-middle)]:rounded-r-md first:[&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-r-md", "[&:has([aria-selected].day-range-start)]:bg-f1-background-selected [&:has([aria-selected].day-range-end)]:bg-f1-background-selected", C("[&>span.rdp-weeknumber]:text-f1-foreground-secondary [&>span.rdp-weeknumber]:flex [&>span.rdp-weeknumber]:items-center [&>span.rdp-weeknumber]:justify-center [&>span.rdp-weeknumber]:h-full [&>span.rdp-weeknumber]:font-normal", r ? "[&>span.rdp-weeknumber]:w-[30px] [&>span.rdp-weeknumber]:flex-shrink-0" : "[&>span.rdp-weeknumber]:w-7 [&>span.rdp-weeknumber]:flex-shrink-0", "[&>span.rdp-weeknumber]:text-md"), i.mode === "single" && "[&:has([aria-selected].day-selected)]:before:opacity-100", i.showWeekNumber && "[&:has([aria-selected].day-range-middle)]:bg-f1-background-selected-bold [&:has([aria-selected].day-range-start)]:bg-f1-background-selected-bold [&:has([aria-selected].day-range-end)]:bg-f1-background-selected-bold hover:before:bg-f1-background-selected-bold"),
			day: C("rounded-[inherit] p-0 text-f1-foreground aria-selected:opacity-100 z-20 relative", r ? i.showWeekNumber ? "h-7 w-[30px] text-sm" : "h-7 w-7 text-sm" : "h-10 w-10 text-md"),
			day_range_start: "day-range-start aria-selected:text-f1-foreground-inverse",
			day_range_end: "day-range-end aria-selected:text-f1-foreground-inverse",
			day_today: C("relative after:absolute after:inset-x-0 after:z-20 after:mx-auto after:rounded-full after:bg-f1-background-selected-bold after:transition-colors after:duration-100 after:content-[''] after:pointer-events-none aria-selected:after:bg-f1-background", r ? "after:bottom-0.5 after:h-0.5 after:w-1" : "after:bottom-1 after:h-0.5 after:w-1.5"),
			day_selected: C("day-selected", i.mode === "single" && "aria-selected:text-f1-foreground-inverse"),
			day_outside: "day-outside text-f1-foreground-secondary font-normal",
			day_disabled: "text-f1-foreground-disabled",
			day_range_middle: C("day-range-middle aria-selected:text-f1-foreground-selected", i.showWeekNumber && "aria-selected:text-f1-foreground-inverse"),
			day_hidden: "invisible",
			...t
		},
		modifiers: {
			...i.modifiers,
			...r && { hideLastWeek: (e) => {
				let t = new Date(e.getFullYear(), e.getMonth() + 1, 1);
				return e.getMonth() === t.getMonth();
			} }
		},
		modifiersClassNames: {
			...i.modifiersClassNames,
			...r && { hideLastWeek: "hidden" }
		},
		components: {
			IconLeft: () => /* @__PURE__ */ G(Ic, { className: r ? "h-3 w-3" : "h-4 w-4" }),
			IconRight: () => /* @__PURE__ */ G(nn, { className: r ? "h-3 w-3" : "h-4 w-4" })
		},
		...i
	});
}
np.displayName = "Calendar";
//#endregion
//#region src/components/OneCalendar/granularities/day/DayView.tsx
var rp = (e) => !e?.from || !e?.to ? !1 : e.from.toDateString() !== e.to.toDateString();
function ip({ mode: e, selected: t, onSelect: n, month: r, onMonthChange: i, motionDirection: a = 1, minDate: o, maxDate: s, compact: c = !1, weekStartsOn: l }) {
	let { date: u } = De(), d = Ge(), f = l ?? u?.weekStartsOn ?? P.Monday, p = Ju({
		minDate: o,
		maxDate: s
	}), m = B((e) => {
		if (!n) return;
		let r = t;
		if (rp(r) && e?.from) {
			let t = e.from.getTime() !== r?.from?.getTime(), i = e.to?.getTime() !== r?.to?.getTime();
			n({
				from: t || !i ? e.from : e.to ?? e.from,
				to: void 0
			});
		} else e?.from ? n({
			from: e.from,
			to: e.to
		}) : n(null);
	}, [n, t]), _ = {
		hidden: (e) => ({
			opacity: 0,
			x: e === 1 ? 40 : -40
		}),
		visible: {
			opacity: 1,
			x: 0
		},
		exit: (e) => ({
			opacity: 0,
			x: e === 1 ? -40 : 40
		})
	};
	return e === "single" ? /* @__PURE__ */ G(g, {
		mode: "popLayout",
		initial: !1,
		custom: a,
		children: /* @__PURE__ */ G(h.div, {
			variants: _,
			custom: a,
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: /* @__PURE__ */ G(np, {
				mode: "single",
				disabled: p,
				selected: t,
				onSelect: n,
				month: r,
				locale: d,
				weekStartsOn: f,
				compact: c
			})
		}, r.toISOString())
	}) : /* @__PURE__ */ G(g, {
		mode: "popLayout",
		initial: !1,
		custom: a,
		children: /* @__PURE__ */ G(h.div, {
			variants: _,
			custom: a,
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: /* @__PURE__ */ G(np, {
				mode: "range",
				disabled: p,
				selected: t,
				onSelect: m,
				month: r,
				onMonthChange: i,
				locale: d,
				weekStartsOn: f,
				compact: c
			}, r.toISOString())
		}, r.toISOString())
	});
}
//#endregion
//#region src/components/OneCalendar/granularities/day/index.tsx
var ap = "dd/MM/yyyy";
function op(e) {
	return Gu(e, St, Wc);
}
var sp = (e, t) => ({
	from: St(pt(e.from, t)),
	to: Wc(pt(e.to, t))
}), cp = (e) => {
	let t = op(e);
	return t ? !t.to || Ye(t.from, t.to) ? Hu(t.from, "dd MMM yyyy") : vu(t.from, t.to) ? `${Hu(t.from, "dd")} → ${Hu(t.to, "dd MMM yyyy")}` : bu(t.from, t.to) ? `${Hu(t.from, "dd MMM")} → ${Hu(t.to, "dd MMM yyyy")}` : `${Hu(t.from, "dd MMM yyyy")} → ${Hu(t.to, "dd MMM yyyy")}` : "";
}, lp = {
	calendarView: "day",
	add: sp,
	getPrevNext: (e, t) => {
		let n = op(e);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: r, to: i } = n, { from: a, to: o } = sp({
			from: r,
			to: i
		}, -1), { from: s, to: c } = sp({
			from: r,
			to: i
		}, 1), l = t.min && St(t.min), u = t.max && Wc(t.max);
		return {
			prev: qu(a, l) ? {
				from: a,
				to: o
			} : !1,
			next: Ku(c, u) ? {
				from: s,
				to: c
			} : !1
		};
	},
	toRange: (e) => op(e),
	toRangeString: (e) => Uu(e, ap),
	toString: (e, t, n = "default") => {
		let r = {
			default: Wu(e, ap),
			long: cp(e)
		};
		return r[n] ?? r.default;
	},
	toStringMaxWidth: () => 160,
	placeholder: () => Q(ap),
	fromString: (e) => {
		let t = Vu(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let t = e.trim(), n = /* @__PURE__ */ new Date(), r = hu(t, "d MMM yyyy", n);
			if (!isNaN(r.getTime())) return r;
			let i = hu(t, ap, n);
			if (!isNaN(i.getTime())) return i;
			let [a, o, s] = t.split(/[/.-]/);
			return !a || !o || !s ? /* @__PURE__ */ new Date(NaN) : new Date(Number(s), Number(o) - 1, Number(a));
		};
		return op({
			from: i(n),
			to: r ? i(r) : void 0
		});
	},
	navigate: (e, t) => pt(e, t),
	navigateUIView: (e, t) => Lc(e, t),
	getViewDateFromDate: (e) => qc(e),
	label: (e, t, n = "en-US") => new Intl.DateTimeFormat(n, {
		month: "long",
		year: "numeric"
	}).format(e),
	render: (e) => {
		let t = op(e.minDate), n = op(e.maxDate);
		return /* @__PURE__ */ G(ip, {
			mode: e.mode,
			selected: e.selected,
			onSelect: e.onSelect,
			month: e.month,
			onMonthChange: e.onMonthChange,
			motionDirection: e.motionDirection,
			minDate: t ? t.from : void 0,
			maxDate: n ? n.to : void 0,
			compact: e.compact,
			weekStartsOn: e.weekStartsOn
		});
	}
}, up = (e) => e < 6 ? 1 : 2, dp = (e, t) => {
	let n = e === 1 ? 0 : 6, r = e === 1 ? 5 : 11;
	return {
		from: qc(new Date(t, n, 1)),
		to: Gc(new Date(t, r + 1, 0))
	};
}, fp = ({ mode: e, selected: t, onSelect: n, year: r, minDate: i, maxDate: a, motionDirection: o = 1 }) => {
	let s = [1, 2], c = /* @__PURE__ */ new Date(), l = c.getFullYear(), u = up(c.getMonth()), d = Math.floor(r / 5) * 5, f = Array.from({ length: 5 }, (e, t) => d + t), p = (e) => !!(e && typeof e == "object" && ("from" in e || "to" in e)), m = (r, i) => {
		let a = dp(r, i);
		if (e === "single") n?.(a.from);
		else if (e === "range") {
			if (!t || !p(t)) n?.({
				from: a.from,
				to: void 0
			});
			else if (t && t.from && !t.to) {
				let e = t.from, o = up(e.getMonth()), s = e.getFullYear();
				if (o === r && s === i) n?.({
					from: a.from,
					to: a.to
				});
				else {
					let e = dp(o, s), t = sl(e.from, a.from) ? e.from : a.from, r = ol(e.to, a.to) ? e.to : a.to;
					n?.({
						from: t,
						to: r
					});
				}
			} else n?.({
				from: a.from,
				to: void 0
			});
		}
	}, _ = (e, n) => {
		if (!t) return !1;
		let r = dp(e, n);
		if (p(t)) {
			let i = t.from, a = t.to;
			if (i && a) return xu(r.from, {
				start: i,
				end: a
			}) || !!r.to && xu(r.to, {
				start: i,
				end: a
			}) || sl(r.from, i) && !!r.to && ol(r.to, a);
			if (i) return up(i.getMonth()) === e && i.getFullYear() === n;
		} else return up(t.getMonth()) === e && t.getFullYear() === n;
		return !1;
	}, v = (e, t) => e === u && t === l, y = (e, n) => {
		if (!t || !p(t) || !t.from) return !1;
		let r = t.from;
		return up(r.getMonth()) === e && r.getFullYear() === n;
	}, b = (e, n) => {
		if (!t || !p(t) || !t.to) return !1;
		let r = t.to;
		return up(r.getMonth()) === e && r.getFullYear() === n;
	};
	return /* @__PURE__ */ G(g, {
		mode: "popLayout",
		initial: !1,
		custom: o,
		children: /* @__PURE__ */ G(h.div, {
			className: "flex flex-col gap-4",
			custom: o,
			variants: {
				hidden: (e) => ({
					opacity: 0,
					x: e === 1 ? 40 : -40
				}),
				visible: {
					opacity: 1,
					x: 0
				},
				exit: (e) => ({
					opacity: 0,
					x: e === 1 ? -40 : 40
				})
			},
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: f.map((t) => /* @__PURE__ */ K("div", {
				className: "flex items-center justify-center gap-3 pl-1.5",
				children: [/* @__PURE__ */ G("div", {
					className: "text-medium text-right text-sm tabular-nums text-f1-foreground-secondary",
					children: t
				}), /* @__PURE__ */ G("div", {
					className: "flex flex-1",
					children: s.map((n) => {
						let r = _(n, t), o = v(n, t), s = y(n, t), c = b(n, t), l = dp(n, t), u = i && sl(l.from, i) || a && l.to && ol(l.to, a);
						return /* @__PURE__ */ K("button", {
							onClick: () => m(n, t),
							disabled: u,
							className: C("relative isolate flex h-10 flex-1 items-center justify-center rounded-md p-2 tabular-nums", "after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded-md after:ring-1 after:ring-inset after:ring-f1-border-secondary after:transition-all after:duration-100 after:content-['']", u && "cursor-not-allowed text-f1-foreground-secondary", !u && "hover:after:bg-f1-background-hover", S(), (s || c) && "after:inset-x-0", r && "after:bg-f1-background-selected-bold after:ring-0 hover:after:bg-f1-background-selected-bold-hover [&>span]:text-f1-foreground-inverse", r && !s && !c && e === "range" && "rounded-none bg-f1-background-selected after:opacity-0 after:transition-none first:rounded-l-md last:rounded-r-md hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected"),
							children: [
								s && /* @__PURE__ */ G("div", { className: "absolute inset-y-0 right-0 z-0 w-1/2 bg-f1-background-selected" }),
								c && /* @__PURE__ */ G("div", { className: "absolute inset-y-0 left-0 z-0 w-1/2 bg-f1-background-selected" }),
								/* @__PURE__ */ K("span", {
									className: "z-10 font-medium",
									children: ["H", n]
								}),
								o && /* @__PURE__ */ G("div", { className: C("absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100", r && e === "single" && "bg-f1-background", (s || c) && "bg-f1-background", !s && !c && r && e === "range" && "bg-f1-background-selected-bold") })
							]
						}, `${t}-H${n}`);
					})
				})]
			}, t))
		}, r)
	});
}, pp = "Hn yyyy", mp = (e) => `${hp(e)} ${e.getFullYear()}`, hp = (e) => {
	let t = e.getMonth();
	return `H${Math.floor(t / 6) + 1}`;
}, gp = (e) => {
	let t = vp(e);
	if (!t) return {
		from: "",
		to: void 0
	};
	let n = mp(t.from), r = t.to ? mp(t.to) : void 0;
	return {
		from: n,
		to: r && n !== r ? r : void 0
	};
}, _p = (e, t) => ({
	from: qc(Lc(e.from, t * 6)),
	to: Gc(Lc(e.to, t * 6))
});
function vp(e) {
	return Gu(e, (e) => tl(e) < 6 ? Te(e) : qc(Su(e, 6)), (e) => tl(e) < 6 ? Gc(Su(e, 5)) : Jc(e));
}
var yp = (e, t) => {
	let n = vp(e), r = vp(t);
	return mp(n.from) === mp(r.from);
}, bp = (e) => {
	let t = gp(e);
	if (!t) return "-";
	let { from: n, to: r } = t;
	return `${n}${r && n !== r ? ` → ${r}` : ""}`;
}, xp = (e) => {
	let t = vp(e);
	return t ? !t.to || yp(t.from, t.to) ? mp(t.from) : bu(t.from, t.to) ? `${hp(t.from)} → ${hp(t.to)} ${al(t.to)}` : `${mp(t.from)} → ${mp(t.to)}` : "";
}, Sp = {
	calendarView: "halfyear",
	add: _p,
	getPrevNext: (e, t) => {
		let n = vp(e);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: r, to: i } = n, { from: a, to: o } = _p({
			from: r,
			to: i
		}, -1), { from: s, to: c } = _p({
			from: r,
			to: i
		}, 1), l = t.min && qc(t.min), u = t.max && Gc(t.max);
		return {
			prev: qu(a, l) ? {
				from: a,
				to: o
			} : !1,
			next: Ku(c, u) ? {
				from: s,
				to: c
			} : !1
		};
	},
	toRangeString: (e) => gp(e),
	toRange: (e) => vp(e),
	toString: (e, t, n = "default") => {
		let r = {
			default: bp(e),
			long: xp(e)
		};
		return r[n] ?? r.default;
	},
	toStringMaxWidth: () => 155,
	placeholder: () => pp,
	fromString: (e) => {
		let t = Vu(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let [t, n] = e.trim().split(/\s+/), r = isNaN(Number(n)) ? (/* @__PURE__ */ new Date()).getFullYear() : +n, i = Number(t.replace(/[hH\s+]/g, "").trim());
			return new Date(r, (i - 1) * 6, 1);
		};
		return vp({
			from: i(n),
			to: i(r || n)
		});
	},
	navigate: (e, t) => Lc(e, t * 6),
	navigateUIView: (e, t) => zc(e, t * 5),
	label: (e) => {
		let t = Math.floor(e.getFullYear() / 5) * 5;
		return `${t} → ${t + 4}`;
	},
	getViewDateFromDate: (e) => Te(e),
	render: (e) => {
		let t = vp(e.minDate), n = vp(e.maxDate);
		return /* @__PURE__ */ G(fp, {
			mode: e.mode,
			year: e.viewDate.getFullYear(),
			selected: e.selected,
			onSelect: e.onSelect,
			motionDirection: e.motionDirection,
			minDate: t ? t.from : void 0,
			maxDate: n ? n.to : void 0
		});
	}
}, Cp = typeof window < "u", wp = (e, t, n) => {
	let r = document.createElement(e), [i, a] = Array.isArray(t) ? [void 0, t] : [t, n];
	return i && Object.assign(r, i), a?.forEach((e) => r.appendChild(e)), r;
}, Tp = (e, t) => t === "left" ? e.offsetLeft : ((e.offsetParent instanceof HTMLElement ? e.offsetParent : null)?.offsetWidth ?? 0) - e.offsetWidth - e.offsetLeft, Ep = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, Dp = (e, t) => {
	Cp && !customElements.get(e) && customElements.define(e, t);
};
function Op(e, t, { reverse: n = !1 } = {}) {
	let r = e.length;
	for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i);
}
function kp(e, t, n, r) {
	let i = t.formatToParts(e);
	n && i.unshift({
		type: "prefix",
		value: n
	}), r && i.push({
		type: "suffix",
		value: r
	});
	let a = [], o = [], s = [], c = [], l = {}, u = (e) => `${e}:${l[e] = (l[e] ?? -1) + 1}`, d = "", f = !1, p = !1;
	for (let e of i) {
		d += e.value;
		let t = e.type === "minusSign" || e.type === "plusSign" ? "sign" : e.type;
		t === "integer" ? (f = !0, o.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e)
		})))) : t === "group" ? o.push({
			type: t,
			value: e.value
		}) : t === "decimal" ? (p = !0, s.push({
			type: t,
			value: e.value,
			key: u(t)
		})) : t === "fraction" ? s.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e),
			key: u(t),
			pos: -1 - l[t]
		}))) : (f || p ? c : a).push({
			type: t,
			value: e.value,
			key: u(t)
		});
	}
	let m = [];
	for (let e = o.length - 1; e >= 0; e--) {
		let t = o[e];
		m.unshift(t.type === "integer" ? {
			...t,
			key: u(t.type),
			pos: l[t.type]
		} : {
			...t,
			key: u(t.type)
		});
	}
	return {
		pre: a,
		integer: m,
		fraction: s,
		post: c,
		valueAsString: d,
		value: typeof e == "string" ? parseFloat(e) : e
	};
}
var Ap = String.raw, jp = String.raw, Mp = Cp && (() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), Np = Cp && typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), Pp = Cp && typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, Fp = "--_number-flow-d-opacity", Ip = "--_number-flow-d-width", Lp = "--_number-flow-dx", Rp = "--_number-flow-d", zp = (() => {
	try {
		return CSS.registerProperty({
			name: Fp,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: Lp,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: Ip,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: Rp,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})(), Bp = "var(--number-flow-char-height, 1em)", Vp = "var(--number-flow-mask-height, 0.25em)", Hp = `calc(${Vp} / 2)`, Up = "var(--number-flow-mask-width, 0.5em)", Wp = `calc(${Up} / var(--scale-x))`, Gp = "#000 0, transparent 71%", Kp = jp`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${Bp} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${Ip}) / var(--width));transform:translateX(var(${Lp})) scaleX(var(--scale-x));margin:0 calc(-1 * ${Up});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${Wp},#000 calc(100% - ${Wp}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${Vp},#000 calc(100% - ${Vp}),transparent 100% ),radial-gradient(at bottom right,${Gp}),radial-gradient(at bottom left,${Gp}),radial-gradient(at top left,${Gp}),radial-gradient(at top right,${Gp});-webkit-mask-size:100% calc(100% - ${Vp} * 2),calc(100% - ${Wp} * 2) 100%,${Wp} ${Vp},${Wp} ${Vp},${Wp} ${Vp},${Wp} ${Vp};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${Hp} ${Up};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${Lp})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${Rp})}.digit__num,.number .section::after{padding:${Hp} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${Fp}))}`, qp = Cp ? HTMLElement : class {}, Jp = jp`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${Bp} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${Hp} 0}.symbol{white-space:pre}`, Yp = (e) => `<span class="${e.type === "integer" || e.type === "fraction" ? "digit" : "symbol"}" part="${e.type === "integer" || e.type === "fraction" ? `digit ${e.type}-digit` : `symbol ${e.type}`}">${e.value}</span>`, Xp = (e, t) => `<span part="${t}">${e.reduce((e, t) => e + Yp(t), "")}</span>`, Zp = (e) => Ap`<template shadowroot="open" shadowrootmode="open"
			><style>
				${Jp}</style
			><span role="img" aria-label="${e.valueAsString}"
				>${Xp(e.pre, "left")}<span part="number" class="number"
					>${Xp(e.integer, "integer")}${Xp(e.fraction, "fraction")}</span
				>${Xp(e.post, "right")}</span
			></template
		><span
			style="font-kerning: none; display: inline-block; line-height: ${Bp} !important; padding: ${Vp} 0;"
			>${e.valueAsString}</span
		>`, Qp = Np && Mp && zp, $p, em = class extends qp {
	constructor() {
		super(), this.created = !1, this.batched = !1;
		let { animated: e, ...t } = this.constructor.defaultProps;
		this._animated = this.computedAnimated = e, Object.assign(this, t);
	}
	get animated() {
		return this._animated;
	}
	set animated(e) {
		var t;
		this.animated !== e && (this._animated = e, (t = this.shadowRoot) == null || t.getAnimations().forEach((e) => e.finish()));
	}
	set data(e) {
		var t;
		if (e == null) return;
		let { pre: n, integer: r, fraction: i, post: a, value: o } = e;
		if (this.created) {
			let s = this._data;
			this._data = e, this.computedTrend = typeof this.trend == "function" ? this.trend(s.value, o) : this.trend, this.computedAnimated = Qp && this._animated && (!this.respectMotionPreference || !(Pp != null && Pp.matches)) && Ep(this), (t = this.plugins) == null || t.forEach((t) => t.onUpdate?.call(t, e, s, this)), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({
				integer: r,
				fraction: i
			}), this._post.update(a), this.batched || this.didUpdate();
		} else {
			this._data = e, this.attachShadow({ mode: "open" });
			try {
				this._internals ??= this.attachInternals(), this._internals.role = "img";
			} catch {}
			if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets) $p || ($p = new CSSStyleSheet(), $p.replaceSync(Kp)), this.shadowRoot.adoptedStyleSheets = [$p];
			else {
				let e = document.createElement("style");
				e.textContent = Kp, this.shadowRoot.appendChild(e);
			}
			this._pre = new im(this, n, {
				justify: "right",
				part: "left"
			}), this.shadowRoot.appendChild(this._pre.el), this._num = new tm(this, r, i), this.shadowRoot.appendChild(this._num.el), this._post = new im(this, a, {
				justify: "left",
				part: "right"
			}), this.shadowRoot.appendChild(this._post.el), this.created = !0;
		}
		try {
			this._internals.ariaLabel = e.valueAsString;
		} catch {}
	}
	willUpdate() {
		this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
	}
	didUpdate() {
		if (!this.computedAnimated) return;
		this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
		let e = new AbortController();
		Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(() => {
			e.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
		}), this._abortAnimationsFinish = e;
	}
};
em.defaultProps = {
	transformTiming: {
		duration: 900,
		easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
	},
	spinTiming: void 0,
	opacityTiming: {
		duration: 450,
		easing: "ease-out"
	},
	animated: !0,
	trend: (e, t) => Math.sign(t - e),
	respectMotionPreference: !0,
	plugins: void 0,
	digits: void 0
};
var tm = class {
	constructor(e, t, n, { className: r, ...i } = {}) {
		this.flow = e, this._integer = new rm(e, t, {
			justify: "right",
			part: "integer"
		}), this._fraction = new rm(e, n, {
			justify: "left",
			part: "fraction"
		}), this._inner = wp("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = wp("span", {
			...i,
			part: "number",
			className: `number ${r ?? ""}`
		}, [this._inner]);
	}
	willUpdate() {
		this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
	}
	update({ integer: e, fraction: t }) {
		this._integer.update(e), this._fraction.update(t);
	}
	didUpdate() {
		let e = this.el.getBoundingClientRect();
		this._integer.didUpdate(), this._fraction.didUpdate();
		let t = this._prevLeft - e.left, n = this.el.offsetWidth, r = this._prevWidth - n;
		this.el.style.setProperty("--width", String(n)), this.el.animate({
			[Lp]: [`${t}px`, "0px"],
			[Ip]: [r, 0]
		}, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, nm = class {
	constructor(e, t, { justify: n, className: r, ...i }, a) {
		this.flow = e, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e) => () => {
			this.children.delete(e);
		}, this.justify = n;
		let o = t.map((e) => this.addChar(e).el);
		this.el = wp("span", {
			...i,
			className: `section section--justify-${n} ${r ?? ""}`
		}, a ? a(o) : o);
	}
	addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
		let r = e.type === "integer" || e.type === "fraction" ? new sm(this, e.type, t ? 0 : e.value, e.pos, {
			...n,
			onRemove: this.onCharRemove(e.key)
		}) : new cm(this, e.type, e.value, {
			...n,
			onRemove: this.onCharRemove(e.key)
		});
		return this.children.set(e.key, r), r;
	}
	unpop(e) {
		e.el.removeAttribute("inert"), e.el.style.top = "", e.el.style[this.justify] = "";
	}
	pop(e) {
		e.forEach((e) => {
			e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${Tp(e.el, this.justify)}px`;
		}), e.forEach((e) => {
			e.el.setAttribute("inert", ""), e.present = !1;
		});
	}
	addNewAndUpdateExisting(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = this.justify === "left", i = r ? "prepend" : "append";
		if (Op(e, (e) => {
			let r;
			this.children.has(e.key) ? (r = this.children.get(e.key), n.set(e, r), this.unpop(r), r.present = !0) : (r = this.addChar(e, {
				startDigitsAtZero: !0,
				animateIn: !0
			}), t.set(e, r)), this.el[i](r.el);
		}, { reverse: r }), this.flow.computedAnimated) {
			let e = this.el.getBoundingClientRect();
			t.forEach((t) => {
				t.willUpdate(e);
			});
		}
		t.forEach((e, t) => {
			e.update(t.value);
		}), n.forEach((e, t) => {
			e.update(t.value);
		});
	}
	willUpdate() {
		let e = this.el.getBoundingClientRect();
		this._prevOffset = e[this.justify], this.children.forEach((t) => t.willUpdate(e));
	}
	didUpdate() {
		let e = this.el.getBoundingClientRect();
		this.children.forEach((t) => t.didUpdate(e));
		let t = e[this.justify], n = this._prevOffset - t;
		n && this.children.size && this.el.animate({ transform: [`translateX(${n}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, rm = class extends nm {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
		}), this.addNewAndUpdateExisting(e), t.forEach((e) => {
			e instanceof sm && e.update(0);
		}), this.pop(t);
	}
}, im = class extends nm {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n);
		}), this.pop(t), this.addNewAndUpdateExisting(e);
	}
}, am = class {
	constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
		this.flow = e, this.el = t, this._present = !0, this._remove = () => {
			var e;
			this.el.remove(), (e = this._onRemove) == null || e.call(this);
		}, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({ [Fp]: [-.9999, 0] }, {
			...this.flow.opacityTiming,
			composite: "accumulate"
		}), this._onRemove = n;
	}
	get present() {
		return this._present;
	}
	set present(e) {
		if (this._present !== e) {
			if (this._present = e, e ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
				e || this._remove();
				return;
			}
			this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({ [Fp]: e ? [-.9999, 0] : [.999, 0] }, {
				...this.flow.opacityTiming,
				composite: "accumulate"
			}), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: !0 });
		}
	}
}, om = class extends am {
	constructor(e, t, n, r) {
		super(e.flow, n, r), this.section = e, this.value = t, this.el = n;
	}
}, sm = class extends om {
	constructor(e, t, n, r, i) {
		let a = (e.flow.digits?.[r]?.max ?? 9) + 1, o = Array.from({ length: a }).map((e, t) => {
			let r = wp("span", { className: "digit__num" }, [document.createTextNode(String(t))]);
			return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r;
		}), s = wp("span", {
			part: `digit ${t}-digit`,
			className: "digit"
		}, o);
		s.style.setProperty("--current", String(n)), s.style.setProperty("--length", String(a)), super(e, n, s, i), this.pos = r, this._onAnimationsFinish = () => {
			this.el.classList.remove("is-spinning");
		}, this._numbers = o, this.length = a;
	}
	willUpdate(e) {
		let t = this.el.getBoundingClientRect();
		this._prevValue = this.value;
		let n = t[this.section.justify] - e[this.section.justify], r = t.width / 2;
		this._prevCenter = this.section.justify === "left" ? n + r : n - r;
	}
	update(e) {
		this.el.style.setProperty("--current", String(e)), this._numbers.forEach((t, n) => n === e ? t.removeAttribute("inert") : t.setAttribute("inert", "")), this.value = e;
	}
	didUpdate(e) {
		let t = this.el.getBoundingClientRect(), n = t[this.section.justify] - e[this.section.justify], r = t.width / 2, i = this.section.justify === "left" ? n + r : n - r, a = this._prevCenter - i;
		a && this.el.animate({ transform: [`translateX(${a}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
		let o = this.getDelta();
		o && (this.el.classList.add("is-spinning"), this.el.animate({ [Rp]: [-o, 0] }, {
			...this.flow.spinTiming ?? this.flow.transformTiming,
			composite: "accumulate"
		}), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
	}
	getDelta() {
		if (this.flow.plugins) for (let e of this.flow.plugins) {
			let t = e.getDelta?.call(e, this.value, this._prevValue, this);
			if (t != null) return t;
		}
		let e = this.value - this._prevValue, t = this.flow.computedTrend || Math.sign(e);
		return t < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : t > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : e;
	}
}, cm = class extends om {
	constructor(e, t, n, r) {
		let i = wp("span", {
			className: "symbol__value",
			textContent: n
		});
		super(e, n, wp("span", {
			part: `symbol ${t}`,
			className: "symbol"
		}, [i]), r), this.type = t, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e) => () => {
			this._children.delete(e);
		}, this._children.set(n, new am(this.flow, i, { onRemove: this._onChildRemove(n) }));
	}
	willUpdate(e) {
		if (this.type === "decimal") return;
		let t = this.el.getBoundingClientRect();
		this._prevOffset = t[this.section.justify] - e[this.section.justify];
	}
	update(e) {
		if (this.value !== e) {
			let t = this._children.get(this.value);
			t && (t.present = !1);
			let n = this._children.get(e);
			if (n) n.present = !0;
			else {
				let t = wp("span", {
					className: "symbol__value",
					textContent: e
				});
				this.el.appendChild(t), this._children.set(e, new am(this.flow, t, {
					animateIn: !0,
					onRemove: this._onChildRemove(e)
				}));
			}
		}
		this.value = e;
	}
	didUpdate(e) {
		if (this.type === "decimal") return;
		let t = this.el.getBoundingClientRect()[this.section.justify] - e[this.section.justify], n = this._prevOffset - t;
		n && this.el.animate({ transform: [`translateX(${n}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, lm = parseInt(L.version.match(/^(\d+)\./)?.[1]) >= 19, um = ["data", "digits"], dm = class extends em {
	attributeChangedCallback(e, t, n) {
		this[e] = JSON.parse(n);
	}
};
dm.observedAttributes = lm ? [] : um, Dp("number-flow-react", dm);
var fm = {}, pm = lm ? (e) => e : JSON.stringify;
function mm(e) {
	let { transformTiming: t, spinTiming: n, opacityTiming: r, animated: i, respectMotionPreference: a, trend: o, plugins: s, ...c } = e;
	return [{
		transformTiming: t,
		spinTiming: n,
		opacityTiming: r,
		animated: i,
		respectMotionPreference: a,
		trend: o,
		plugins: s
	}, c];
}
var hm = class extends L.Component {
	updateProperties(e) {
		if (!this.el) return;
		this.el.batched = !this.props.isolate;
		let [t] = mm(this.props);
		Object.entries(t).forEach(([e, t]) => {
			this.el[e] = t ?? dm.defaultProps[e];
		}), e?.onAnimationsStart && this.el.removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
	}
	componentDidMount() {
		this.updateProperties(), lm && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
	}
	getSnapshotBeforeUpdate(e) {
		if (this.updateProperties(e), e.data !== this.props.data) {
			if (this.props.group) return this.props.group.willUpdate(), () => this.props.group?.didUpdate();
			if (!this.props.isolate) return this.el?.willUpdate(), () => this.el?.didUpdate();
		}
		return null;
	}
	componentDidUpdate(e, t, n) {
		n?.();
	}
	handleRef(e) {
		this.props.innerRef && (this.props.innerRef.current = e), this.el = e;
	}
	render() {
		let [e, { innerRef: t, className: n, data: r, willChange: i, isolate: a, group: o, digits: s, onAnimationsStart: c, onAnimationsFinish: l, ...u }] = mm(this.props);
		return /*#__PURE__*/ L.createElement("number-flow-react", {
			ref: this.handleRef,
			"data-will-change": i ? "" : void 0,
			class: n,
			...u,
			dangerouslySetInnerHTML: { __html: Cp ? "" : Zp(r) },
			suppressHydrationWarning: !0,
			digits: pm(s),
			data: pm(r)
		});
	}
	constructor(e) {
		super(e), this.handleRef = this.handleRef.bind(this);
	}
}, gm = /*#__PURE__*/ L.forwardRef(function({ value: e, locales: t, format: n, prefix: r, suffix: i, ...a }, o) {
	L.useImperativeHandle(o, () => s.current, []);
	let s = L.useRef(), c = L.useContext(_m);
	c?.useRegister(s);
	let l = L.useMemo(() => t ? JSON.stringify(t) : "", [t]), u = L.useMemo(() => n ? JSON.stringify(n) : "", [n]), d = L.useMemo(() => kp(e, fm[`${l}:${u}`] ??= new Intl.NumberFormat(t, n), r, i), [
		e,
		l,
		u,
		r,
		i
	]);
	return /*#__PURE__*/ L.createElement(hm, {
		...a,
		group: c,
		data: d,
		innerRef: s
	});
}), _m = /*#__PURE__*/ L.createContext(void 0);
//#endregion
//#region src/components/OneCalendar/granularities/month/MonthView.tsx
function vm({ mode: e, selected: t, onSelect: n, year: r, motionDirection: i = 1, minDate: a, maxDate: o, compact: s = !1 }) {
	let c = f(), l = [
		{
			name: c.date.month.january,
			index: 0
		},
		{
			name: c.date.month.february,
			index: 1
		},
		{
			name: c.date.month.march,
			index: 2
		},
		{
			name: c.date.month.april,
			index: 3
		},
		{
			name: c.date.month.may,
			index: 4
		},
		{
			name: c.date.month.june,
			index: 5
		},
		{
			name: c.date.month.july,
			index: 6
		},
		{
			name: c.date.month.august,
			index: 7
		},
		{
			name: c.date.month.september,
			index: 8
		},
		{
			name: c.date.month.october,
			index: 9
		},
		{
			name: c.date.month.november,
			index: 10
		},
		{
			name: c.date.month.december,
			index: 11
		}
	], u = /* @__PURE__ */ new Date(), d = (e) => !!(e && typeof e == "object" && ("from" in e || "to" in e)), p = (i) => {
		let a = new Date(r, i, 1), o = qc(a), s = Gc(a);
		if (e === "single") n?.({
			from: o,
			to: s
		});
		else if (e === "range") {
			if (!t || !d(t)) n?.({
				from: a,
				to: void 0
			});
			else if (t.from && !t.to) {
				let e = t.from;
				if (vu(e, a)) n?.({
					from: qc(a),
					to: Gc(a)
				});
				else {
					let t = sl(e, a) ? e : a, r = sl(e, a) ? a : e;
					n?.({
						from: qc(t),
						to: Gc(r)
					});
				}
			} else n?.({
				from: a,
				to: void 0
			});
		}
	}, m = (e) => e === u.getMonth() && r === u.getFullYear(), _ = (e) => t ? d(t) ? t.from && t.to ? xu(new Date(r, e, 15), {
		start: t.from,
		end: t.to
	}) : t.from ? t.from.getMonth() === e && t.from.getFullYear() === r : !1 : t.getMonth() === e && t.getFullYear() === r : !1, v = (e) => !t || !d(t) || !t.from ? !1 : t.from.getMonth() === e && t.from.getFullYear() === r, y = (e) => !t || !d(t) || !t.to ? !1 : t.to.getMonth() === e && t.to.getFullYear() === r;
	return /* @__PURE__ */ G(g, {
		mode: "popLayout",
		initial: !1,
		custom: i,
		children: /* @__PURE__ */ G(h.div, {
			className: C("grid gap-y-3", s ? "grid-cols-2 gap-y-2" : "grid-cols-3"),
			custom: i,
			variants: {
				hidden: (e) => ({
					opacity: 0,
					x: e === 1 ? s ? 20 : 40 : s ? -20 : -40
				}),
				visible: {
					opacity: 1,
					x: 0
				},
				exit: (e) => ({
					opacity: 0,
					x: e === 1 ? s ? -20 : -40 : s ? 20 : 40
				})
			},
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: s ? .1 : .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: l.map((t) => {
				let n = m(t.index), i = _(t.index), c = v(t.index), l = y(t.index), u = new Date(r, t.index, 1), d = qc(u), f = Gc(u), h = a && sl(d, a) || o && ol(f, o);
				return /* @__PURE__ */ K("button", {
					type: "button",
					onClick: () => p(t.index),
					disabled: h,
					className: C("relative isolate flex items-center justify-center font-medium text-f1-foreground transition-colors duration-100 after:absolute after:inset-0 after:z-0 after:bg-f1-background-selected-bold after:opacity-0 after:transition-all after:duration-100 after:content-['']", s ? "h-8 rounded-sm after:rounded-sm" : "h-10 rounded-md after:rounded-md", !h && "hover:bg-f1-background-hover hover:after:bg-f1-background-selected-bold-hover", h && "cursor-not-allowed text-f1-foreground-secondary", S(), i && e === "single" && "bg-f1-background-selected-bold after:opacity-100 hover:bg-f1-background-selected-bold-hover [&>span]:z-10 [&>span]:text-f1-foreground-inverse", i && e === "range" && C("rounded-none bg-f1-background-selected hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected", s ? "[&:nth-child(4n+1)]:rounded-s-sm [&:nth-child(4n+4)]:rounded-e-sm" : "[&:nth-child(3n+1)]:rounded-s-md [&:nth-child(3n+3)]:rounded-e-md"), (c || l) && e === "range" && "rounded-none bg-f1-background-selected after:opacity-100 [&>span]:z-10 [&>span]:text-f1-foreground-inverse", c && e === "range" && l && (s ? "rounded-s-sm" : "rounded-s-md"), l && e === "range" && (s ? "rounded-e-sm" : "rounded-e-md")),
					children: [/* @__PURE__ */ G("span", { children: t.name }), n && /* @__PURE__ */ G("div", { className: C("absolute inset-x-0 z-20 mx-auto h-0.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100", s ? "bottom-0.5 w-1" : "bottom-1 w-1.5", i && e === "single" && "bg-f1-background", (c || l) && "bg-f1-background", !c && !l && i && e === "range" && "bg-f1-background-selected-bold") })]
				}, t.index);
			})
		}, r)
	});
}
//#endregion
//#region src/components/OneCalendar/granularities/month/index.tsx
var ym = "MM/yyyy";
function bm(e) {
	return Gu(e, qc, Gc);
}
var xm = (e, t) => ({
	from: qc(Lc(e.from, t)),
	to: Gc(Lc(e.to, t))
}), Sm = (e) => Wu(e, ym), Cm = (e, t = "en-US") => {
	let n = bm(e);
	if (!n) return "";
	let r = (e) => new Intl.DateTimeFormat(t, {
		month: "long",
		year: "numeric"
	}).format(e);
	return !n.to || vu(n.from, n.to) ? r(n.from) : bu(n.from, n.to) ? `${new Intl.DateTimeFormat(t, { month: "long" }).format(n.from)} → ${r(n.to)}` : `${r(n.from)} → ${r(n.to)}`;
}, wm = {
	calendarView: "month",
	add: xm,
	getPrevNext: (e, t) => {
		let n = bm(e);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: r, to: i } = n, { from: a, to: o } = xm({
			from: r,
			to: i
		}, -1), { from: s, to: c } = xm({
			from: r,
			to: i
		}, 1), l = t.min && qc(t.min), u = t.max && Gc(t.max);
		return {
			prev: qu(a, l) ? {
				from: a,
				to: o
			} : !1,
			next: Ku(c, u) ? {
				from: s,
				to: c
			} : !1
		};
	},
	toRangeString: (e) => Uu(e, "MM/yyyy"),
	toRange: (e) => bm(e),
	toString: (e, t, n = "default", r = "en-US") => {
		let i = {
			default: Sm(e),
			long: Cm(e, r)
		};
		return i[n] ?? i.default;
	},
	toStringMaxWidth: () => 140,
	placeholder: () => Q(ym),
	fromString: (e) => {
		let t = Vu(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let [t, n] = e.trim().split(/[/.-\s+]/), r = isNaN(Number(n)) ? (/* @__PURE__ */ new Date()).getFullYear() : +n, i = hu(t, "MMMM", (/* @__PURE__ */ new Date()).setFullYear(r)).getMonth() + 1 || hu(t, "MMM", (/* @__PURE__ */ new Date()).setFullYear(r)).getMonth() + 1 || Number(t);
			return new Date(Number(r), Number(i) - 1, 1);
		};
		return bm({
			from: i(n),
			to: r ? i(r) : void 0
		});
	},
	navigate: (e, t) => Lc(e, t),
	navigateUIView: (e, t) => zc(e, t),
	label: (e) => /* @__PURE__ */ G(gm, {
		format: {
			useGrouping: !1,
			maximumFractionDigits: 0
		},
		spinTiming: { duration: 150 },
		value: e.getFullYear()
	}),
	getViewDateFromDate: (e) => qc(e),
	render: (e) => {
		let t = bm(e.minDate), n = bm(e.maxDate);
		return /* @__PURE__ */ G(vm, {
			mode: e.mode,
			year: e.viewDate.getFullYear(),
			selected: e.selected,
			onSelect: e.onSelect,
			motionDirection: e.motionDirection,
			minDate: t ? t.from : void 0,
			maxDate: n ? n.to : void 0,
			compact: e.compact
		});
	}
}, Tm = (e) => [...e].sort((e, t) => e.from.getTime() - t.from.getTime()), Em = (e) => ({
	from: St(e.from),
	to: Wc(e.to)
}), Dm = (e, t) => {
	if (t) return e.find((e) => {
		let { from: n, to: r } = Em(e);
		return n <= r && xu(t, {
			start: n,
			end: r
		});
	});
}, Om = (e, t) => {
	let n = Dm(e, zu(t)?.from);
	return n ? e.indexOf(n) : -1;
}, km = (e) => e.to.getFullYear(), Am = (e, t) => e.filter((e) => km(e) === t), jm = (e, t = "en-US") => {
	if (e.description !== void 0) return e.description;
	let n = new Intl.DateTimeFormat(t, {
		day: "numeric",
		month: "short"
	});
	return `${n.format(e.from)} → ${n.format(e.to)}`;
};
//#endregion
//#region src/components/OneCalendar/granularities/periods/PeriodsView.tsx
function Mm({ periods: e, header: t, year: n, motionDirection: r = 1, selected: i, onSelect: a, minDate: o, maxDate: s, compact: c = !1 }) {
	let l = f(), u = De(), d = U(null);
	V(() => {
		d.current?.scrollIntoView({ block: "nearest" });
	}, []);
	let p = Dm(e, zu(i ?? void 0)?.from), m = Am(e, n);
	return /* @__PURE__ */ K("div", {
		className: "flex flex-col gap-2",
		children: [t && /* @__PURE__ */ G("div", {
			className: "px-2 font-medium text-f1-foreground-secondary",
			children: t
		}), /* @__PURE__ */ G(g, {
			mode: "popLayout",
			initial: !1,
			custom: r,
			children: /* @__PURE__ */ G(h.div, {
				className: C("grid max-h-72 grid-cols-2 overflow-y-auto", c ? "gap-0.5" : "gap-1"),
				custom: r,
				variants: {
					hidden: (e) => ({
						opacity: 0,
						x: e === 1 ? c ? 20 : 40 : c ? -20 : -40
					}),
					visible: {
						opacity: 1,
						x: 0
					},
					exit: (e) => ({
						opacity: 0,
						x: e === 1 ? c ? -20 : -40 : c ? 20 : 40
					})
				},
				initial: "hidden",
				animate: "visible",
				exit: "exit",
				transition: {
					duration: c ? .1 : .15,
					ease: [
						.455,
						.03,
						.515,
						.955
					]
				},
				children: m.length === 0 ? /* @__PURE__ */ G("div", {
					className: "col-span-2 py-4 text-center text-f1-foreground-secondary",
					children: l.date.granularities.periods.empty
				}) : m.map((e) => {
					let t = Em(e), n = e === p, r = !qu(t.to, o) || !Ku(t.from, s);
					return /* @__PURE__ */ K("button", {
						type: "button",
						ref: n ? d : void 0,
						onClick: () => a?.(t),
						disabled: r,
						"aria-pressed": n,
						className: C("flex flex-col items-start rounded-md text-left transition-colors duration-100", c ? "gap-0 px-2 py-1" : "gap-0.5 px-3 py-2", !r && !n && "hover:bg-f1-background-hover", n && "bg-f1-background-selected", r && "cursor-not-allowed opacity-50", S()),
						children: [/* @__PURE__ */ G("span", {
							className: C("font-medium text-f1-foreground", n && "text-f1-foreground-selected"),
							children: e.label
						}), /* @__PURE__ */ G("span", {
							className: "text-sm text-f1-foreground-secondary",
							children: jm(e, u.locale)
						})]
					}, `${e.label}-${t.from.getTime()}`);
				})
			}, n)
		})]
	});
}
//#endregion
//#region src/components/OneCalendar/granularities/periods/index.tsx
var Nm = "dd/MM/yyyy";
function Pm(e, t) {
	let n = zu(e);
	if (!n) return null;
	let r = Dm(t, n.from);
	return r ? Em(r) : {
		from: St(n.from),
		to: Wc(n.to ?? n.from)
	};
}
var Fm = (e) => {
	let t = Tm(e.periods), n = (e) => {
		let n = t[e];
		return n ? Em(n) : void 0;
	}, r = (e, r) => {
		let i = Om(t, e);
		if (i !== -1) return n(i + r);
	};
	return {
		calendarView: "periods",
		selectorLabel: e.label,
		hideDateInput: !0,
		getViewDateBounds: () => {
			let e = t.at(0), n = t.at(-1);
			if (!(!e || !n)) return {
				min: Wc(e.to),
				max: Wc(n.to)
			};
		},
		add: (e, t) => r(e, t) ?? e,
		getPrevNext: (e, r) => {
			let i = Om(t, e);
			if (i === -1) return {
				prev: !1,
				next: !1
			};
			let a = n(i - 1), o = n(i + 1);
			return {
				prev: a && qu(a.to, r.min) ? a : !1,
				next: o && Ku(o.from, r.max) ? o : !1
			};
		},
		toRangeString: (e) => Uu(e, Nm),
		toRange: (e) => Pm(e, t),
		toString: (e) => {
			let n = zu(e), r = Dm(t, n?.from);
			return r ? r.label : n ? Wu(Pm(n, t), Nm) : "";
		},
		toStringMaxWidth: () => 240,
		placeholder: () => Q(Nm),
		fromString: (e) => {
			let n = Vu(e);
			if (!n) return null;
			let r = hu(n.from.trim(), Nm, /* @__PURE__ */ new Date());
			return Bu(r) ? Pm(r, t) : null;
		},
		navigate: (e, t) => r(e, t)?.from ?? e,
		navigateUIView: (e, t) => zc(e, t),
		label: (e) => String(e.getFullYear()),
		getViewDateFromDate: (e) => Pm(e, t)?.to ?? e,
		render: (n) => /* @__PURE__ */ G(Mm, {
			periods: t,
			header: e.header,
			year: n.viewDate.getFullYear(),
			motionDirection: n.motionDirection,
			selected: n.selected,
			onSelect: n.onSelect,
			minDate: n.minDate,
			maxDate: n.maxDate,
			compact: n.compact
		})
	};
}, Im = Fm({ periods: [] }), Lm = (e) => Math.floor(e / 3) + 1, Rm = (e) => e >= 1 && e <= 4 ? [
	0,
	1,
	2
].map((t) => t + (e - 1) * 3) : [], zm = (e, t) => {
	let n = Rm(e), r = n[0], i = n[n.length - 1];
	return {
		from: new Date(t, r, 1),
		to: new Date(t, i + 1, 0)
	};
}, Bm = ({ mode: e, selected: t, onSelect: n, year: r, motionDirection: i = 1, minDate: a, maxDate: o }) => {
	let s = [
		1,
		2,
		3,
		4
	], c = /* @__PURE__ */ new Date(), l = c.getFullYear(), u = Lm(c.getMonth()), d = Math.floor(r / 5) * 5, f = Array.from({ length: 5 }, (e, t) => d + t), p = (e) => !!(e && typeof e == "object" && ("from" in e || "to" in e)), m = (r, i) => {
		let a = zm(r, i);
		if (e === "single") n?.(a.from);
		else if (e === "range") {
			if (!t || !p(t)) n?.({
				from: a.from,
				to: void 0
			});
			else if (t && t.from && !t.to) {
				let e = t.from, o = Lm(e.getMonth()), s = e.getFullYear();
				if (o === r && s === i) n?.({
					from: a.from,
					to: a.to
				});
				else {
					let e = zm(o, s), t = sl(e.from, a.from) ? e.from : a.from, r = ol(e.to, a.to) ? e.to : a.to;
					n?.({
						from: t,
						to: r
					});
				}
			} else n?.({
				from: a.from,
				to: void 0
			});
		}
	}, _ = (e, n) => {
		if (!t) return !1;
		let r = zm(e, n);
		if (!r.to) return !1;
		if (p(t)) {
			let i = t.from, a = t.to;
			if (i && a) return xu(r.from, {
				start: i,
				end: a
			}) || xu(r.to, {
				start: i,
				end: a
			}) || sl(r.from, i) && ol(r.to, a);
			if (i) return Lm(i.getMonth()) === e && i.getFullYear() === n;
		} else return Lm(t.getMonth()) === e && t.getFullYear() === n;
		return !1;
	}, v = (e, t) => e === u && t === l, y = (e, n) => {
		if (!t || !p(t) || !t.from) return !1;
		let r = t.from;
		return Lm(r.getMonth()) === e && r.getFullYear() === n;
	}, b = (e, n) => {
		if (!t || !p(t) || !t.to) return !1;
		let r = t.to;
		return Lm(r.getMonth()) === e && r.getFullYear() === n;
	};
	return /* @__PURE__ */ G(g, {
		mode: "popLayout",
		initial: !1,
		custom: i,
		children: /* @__PURE__ */ G(h.div, {
			className: "flex flex-col gap-4",
			custom: i,
			variants: {
				hidden: (e) => ({
					opacity: 0,
					x: e === 1 ? 40 : -40
				}),
				visible: {
					opacity: 1,
					x: 0
				},
				exit: (e) => ({
					opacity: 0,
					x: e === 1 ? -40 : 40
				})
			},
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: f.map((t) => /* @__PURE__ */ K("div", {
				className: "flex items-center justify-center gap-3 pl-1.5",
				children: [/* @__PURE__ */ G("div", {
					className: "text-medium text-right text-sm tabular-nums text-f1-foreground-secondary",
					children: t
				}), /* @__PURE__ */ G("div", {
					className: "flex flex-1",
					children: s.map((n) => {
						let r = _(n, t), i = v(n, t), s = y(n, t), c = b(n, t), l = zm(n, t), u = a && sl(l.from, a) || o && l.to && ol(l.to, o);
						return /* @__PURE__ */ K("button", {
							onClick: () => m(n, t),
							disabled: u,
							className: C("relative isolate flex h-10 flex-1 items-center justify-center rounded-md p-2 tabular-nums", "after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded-md after:ring-1 after:ring-inset after:ring-f1-border-secondary after:transition-all after:duration-100 after:content-['']", u && "cursor-not-allowed text-f1-foreground-secondary", !u && "hover:after:bg-f1-background-hover", S(), (s || c) && "after:inset-x-0", r && "after:bg-f1-background-selected-bold after:ring-0 hover:after:bg-f1-background-selected-bold-hover [&>span]:text-f1-foreground-inverse", r && !s && !c && e === "range" && "rounded-none bg-f1-background-selected after:opacity-0 after:transition-none first:rounded-l-md last:rounded-r-md hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected"),
							children: [
								s && /* @__PURE__ */ G("div", { className: "absolute inset-y-0 right-0 z-0 w-1/2 bg-f1-background-selected" }),
								c && /* @__PURE__ */ G("div", { className: "absolute inset-y-0 left-0 z-0 w-1/2 bg-f1-background-selected" }),
								/* @__PURE__ */ K("span", {
									className: "z-10 font-medium",
									children: ["Q", n]
								}),
								i && /* @__PURE__ */ G("div", { className: C("absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100", r && e === "single" && "bg-f1-background", (s || c) && "bg-f1-background", !s && !c && r && e === "range" && "bg-f1-background-selected-bold") })
							]
						}, `${t}-Q${n}`);
					})
				})]
			}, t))
		}, r)
	});
}, Vm = "'Q'Q yyyy";
function Hm(e) {
	return Gu(e, Kc, Zc);
}
var Um = (e, t) => ({
	from: Kc(Lc(e.from, t * 3)),
	to: Zc(Lc(e.to, t * 3))
}), Wm = (e) => Wu(e, Vm), Gm = (e) => {
	let t = Hm(e);
	return t ? !t.to || yu(t.from, t.to) ? mt(t.from, "'Q'Q yyyy") : bu(t.from, t.to) ? `${mt(t.from, "'Q'Q")} → ${mt(t.to, "'Q'Q yyyy")}` : `${mt(t.from, "'Q'Q yyyy")} → ${mt(t.to, "'Q'Q yyyy")}` : "";
}, Km = {
	calendarView: "quarter",
	add: Um,
	getPrevNext: (e, t) => {
		let n = Hm(e);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: r, to: i } = n, { from: a, to: o } = Um({
			from: r,
			to: i
		}, -1), { from: s, to: c } = Um({
			from: r,
			to: i
		}, 1), l = t.min && Kc(t.min), u = t.max && Zc(t.max);
		return {
			prev: qu(a, l) ? {
				from: a,
				to: o
			} : !1,
			next: Ku(c, u) ? {
				from: s,
				to: c
			} : !1
		};
	},
	toRangeString: (e) => Uu(e, "'Q'Q yyyy"),
	toRange: (e) => Hm(e),
	toString: (e, t, n = "default") => {
		let r = {
			default: Wm(e),
			long: Gm(e)
		};
		return r[n] ?? r.default;
	},
	toStringMaxWidth: () => 110,
	placeholder: () => Q(Vm),
	fromString: (e) => {
		let t = Vu(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let [t, n] = e.trim().split(/\s+/), r = isNaN(Number(n)) ? (/* @__PURE__ */ new Date()).getFullYear() : +n, i = Number(t.replace(/[qQ\s]/g, ""));
			return new Date(r, (i - 1) * 3, 1);
		};
		return Hm({
			from: i(n),
			to: r ? i(r) : void 0
		});
	},
	navigate: (e, t) => Kc(Lc(e, t * 3)),
	navigateUIView: (e, t) => Kc(zc(e, t * 5)),
	label: (e) => {
		let t = Math.floor(e.getFullYear() / 5) * 5;
		return `${t} → ${t + 4}`;
	},
	getViewDateFromDate: (e) => Kc(e),
	render: (e) => {
		let t = Hm(e.minDate), n = Hm(e.maxDate);
		return /* @__PURE__ */ G(Bm, {
			mode: e.mode,
			year: e.viewDate.getFullYear(),
			selected: e.selected,
			onSelect: e.onSelect,
			motionDirection: e.motionDirection,
			minDate: t ? t.from : void 0,
			maxDate: n ? n.to : void 0
		});
	}
}, qm = (e, t) => ({
	from: St(pt(e.from, t)),
	to: Wc(pt(e.to, t))
}), Jm = Q(ap), Ym = {
	...lp,
	calendarMode: "range",
	placeholder: () => `${Jm} → ${Jm}`,
	add: qm,
	getPrevNext: (e, t) => {
		let n = op(e);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: r, to: i } = n, a = Je(i, r) + 1, { from: o, to: s } = qm({
			from: r,
			to: i
		}, -a), { from: c, to: l } = qm({
			from: r,
			to: i
		}, a), u = t.min && St(t.min), d = t.max && Wc(t.max);
		return {
			prev: qu(o, u) ? {
				from: o,
				to: s
			} : !1,
			next: Ku(l, d) ? {
				from: c,
				to: l
			} : !1
		};
	},
	calendarView: "day",
	render: (e) => lp.render({
		...e,
		mode: "range"
	})
};
//#endregion
//#region src/components/OneCalendar/granularities/week/WeekView.tsx
function Xm({ selected: e, onSelect: t, month: n, onMonthChange: r, motionDirection: i = 1, minDate: a, maxDate: o, compact: s = !1, weekStartsOn: c }) {
	let { date: l } = De(), u = Ge(), d = c ?? l?.weekStartsOn ?? P.Monday, f = {
		hidden: (e) => ({
			opacity: 0,
			x: e === 1 ? s ? 20 : 40 : s ? -20 : -40
		}),
		visible: {
			opacity: 1,
			x: 0
		},
		exit: (e) => ({
			opacity: 0,
			x: e === 1 ? s ? -20 : -40 : s ? 20 : 40
		})
	}, p = B((e) => {
		let t = new Date(e);
		return t.setHours(0, 0, 0, 0), {
			from: Qm(t, d),
			to: $m(t, d)
		};
	}, [d]), m = (e, n) => {
		if (n.selected) {
			t?.(null);
			return;
		}
		t?.(p(e));
	}, _ = (e) => {
		e || t?.(null);
	}, v = H(() => {
		if (!e) return;
		let t = e instanceof Date ? e : e.from;
		return p(t);
	}, [
		e,
		p,
		d
	]), y = Ju({
		minDate: a,
		maxDate: o
	});
	return /* @__PURE__ */ G(g, {
		mode: "popLayout",
		initial: !1,
		custom: i,
		children: /* @__PURE__ */ G(h.div, {
			variants: f,
			custom: i,
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: s ? .1 : .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: /* @__PURE__ */ G(np, {
				mode: "range",
				disabled: y,
				selected: v,
				onDayClick: m,
				onSelect: _,
				month: n,
				onMonthChange: r,
				locale: u,
				weekStartsOn: d,
				showOutsideDays: !0,
				showWeekNumber: !0,
				fixedWeeks: !1,
				compact: s
			}, n.toISOString())
		}, n.toISOString())
	});
}
//#endregion
//#region src/components/OneCalendar/granularities/week/index.tsx
var Zm = "'W'I yyyy", Qm = (e, t) => t === P.Monday ? je(e) : Ze(e, { weekStartsOn: t }), $m = (e, t) => t === P.Monday ? Xc(e) : Yc(e, { weekStartsOn: t }), eh = (e, t, n) => n === P.Monday ? _u(e, t) : Ce(e, t, { weekStartsOn: n });
function th(e, t = P.Monday) {
	return Gu(e, (e) => Qm(e, t), (e) => $m(e, t));
}
var nh = (e, t, n = P.Monday) => ({
	from: Qm(pt(e.from, t * 7), n),
	to: $m(pt(e.to, t * 7), n)
}), rh = (e, t = P.Monday) => {
	let n = th(e, t);
	return n ? !n.to || eh(n.from, n.to, t) ? mt(n.from, Zm) : bu(n.from, n.to) ? `${mt(n.from, "'W'I")} → ${mt(n.to, Zm)}` : `${mt(n.from, Zm)} → ${mt(n.to, Zm)}` : "";
}, ih = (e, t, n = P.Monday) => {
	let r = th(e, n);
	if (!r) return "";
	let i = (e, n = "singular") => (t[n] || "").replace("{{date}}", e);
	if (!r.to || eh(r.from, r.to, n)) return i(mt(r.from, "d MMM yyyy"));
	let a = Qm(r.to, n);
	return vu(r.from, r.to) ? `${i(mt(r.from, "d"), "plural")} → ${i(mt(a, "d MMM yyyy"))}` : bu(r.from, r.to) ? `${i(mt(r.from, "d MMM"), "plural")} → ${i(mt(a, "d MMM yyyy"))}` : `${i(mt(r.from, "d MMM yyyy"), "plural")} → ${i(mt(a, "d MMM yyyy"))}`;
}, ah = (e = P.Monday) => ({
	weekStartsOn: e,
	calendarView: "week",
	add: function(e, t) {
		return nh(e, t, this.weekStartsOn);
	},
	getPrevNext: function(e, t) {
		let n = th(e, this.weekStartsOn);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: r, to: i } = n, { from: a, to: o } = nh({
			from: r,
			to: i
		}, -1, this.weekStartsOn), { from: s, to: c } = nh({
			from: r,
			to: i
		}, 1, this.weekStartsOn), l = t.min && Qm(t.min, this.weekStartsOn ?? P.Monday), u = t.max && $m(t.max, this.weekStartsOn ?? P.Monday);
		return {
			prev: qu(a, l) ? {
				from: a,
				to: o
			} : !1,
			next: Ku(c, u) ? {
				from: s,
				to: c
			} : !1
		};
	},
	toRangeString: function(e) {
		return Uu(e, "'W'I yyyy");
	},
	toRange: function(e) {
		return th(e, this.weekStartsOn);
	},
	toString: function(e, t, n = "default") {
		let r = {
			default: rh(e, this.weekStartsOn),
			long: ih(e, {
				singular: t.date.granularities.week.longSingular,
				plural: t.date.granularities.week.longPlural
			}, this.weekStartsOn)
		};
		return r[n] ?? r.default;
	},
	toStringMaxWidth: function() {
		return 240;
	},
	placeholder: () => Q(Zm),
	fromString: function(e) {
		let t = Vu(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let [t, n] = e.trim().split(/\s+/), r = isNaN(Number(n)) ? (/* @__PURE__ */ new Date()).getFullYear() : +n;
			return hu(`${Number(t.replace(/[wW\s]/g, ""))}`, "I", new Date(r, 0, 1));
		};
		return th({
			from: i(n),
			to: r ? i(r) : void 0
		}, this.weekStartsOn);
	},
	getViewDateFromDate: function(e) {
		return qc(e);
	},
	navigate: function(e, t) {
		return pt(e, t * 7);
	},
	navigateUIView: function(e, t) {
		return Lc(e, t);
	},
	label: function(e, t, n = "en-US") {
		return new Intl.DateTimeFormat(n, {
			month: "long",
			year: "numeric"
		}).format(e);
	},
	render: function(e) {
		let t = e.weekStartsOn === void 0 ? this.weekStartsOn : e.weekStartsOn, n = th(e.minDate, t), r = th(e.maxDate, t);
		return /* @__PURE__ */ G(Xm, {
			selected: e.selected,
			onSelect: e.onSelect,
			month: e.month,
			onMonthChange: e.onMonthChange,
			motionDirection: e.motionDirection,
			minDate: n ? n.from : void 0,
			maxDate: r ? r.to : void 0,
			compact: e.compact,
			weekStartsOn: t
		});
	}
}), oh = ah(P.Monday);
//#endregion
//#region src/components/OneCalendar/granularities/year/YearView.tsx
function sh({ mode: e, selected: t, onSelect: n, decade: r, motionDirection: i = 1, minDate: a, maxDate: o }) {
	let s = /* @__PURE__ */ new Date(), c = (e) => !!(e && typeof e == "object" && ("from" in e || "to" in e)), l = Math.floor(r / 10) * 10, u = [
		l - 1,
		...Array.from({ length: 10 }, (e, t) => l + t),
		l + 10
	], d = (r) => {
		let i = new Date(r, 0, 1);
		if (e === "single") n?.({
			from: Te(i),
			to: Jc(i)
		});
		else if (e === "range") {
			if (!t || !c(t)) n?.({
				from: i,
				to: void 0
			});
			else if (t && t.from && !t.to) {
				if (bu(t.from, i)) n?.({
					from: Te(t.from),
					to: Jc(t.from)
				});
				else {
					let e = sl(t.from, i) ? t.from : i, r = sl(t.from, i) ? i : t.from;
					n?.({
						from: Te(e),
						to: Jc(r)
					});
				}
			} else n?.({
				from: i,
				to: void 0
			});
		}
	}, f = (e) => t ? c(t) ? t.from && t.to ? xu(new Date(e, 6, 1), {
		start: t.from,
		end: t.to
	}) : t.from ? t.from.getFullYear() === e : !1 : t.getFullYear() === e : !1, p = (e) => e === s.getFullYear(), m = (e) => !t || !c(t) || !t.from ? !1 : t.from.getFullYear() === e, _ = (e) => !t || !c(t) || !t.to ? !1 : t.to.getFullYear() === e, v = (e) => e < l || e >= l + 10;
	return /* @__PURE__ */ G(g, {
		mode: "popLayout",
		initial: !1,
		custom: i,
		children: /* @__PURE__ */ G(h.div, {
			className: "grid grid-cols-4 gap-y-3",
			custom: i,
			variants: {
				hidden: (e) => ({
					opacity: 0,
					x: e === 1 ? 40 : -40
				}),
				visible: {
					opacity: 1,
					x: 0
				},
				exit: (e) => ({
					opacity: 0,
					x: e === 1 ? -40 : 40
				})
			},
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: u.map((t) => {
				let n = f(t), r = m(t), i = _(t), s = v(t), c = p(t), l = new Date(t, 0, 1), u = a && sl(Te(l), a) || o && ol(Jc(l), o);
				return /* @__PURE__ */ K("button", {
					onClick: () => d(t),
					disabled: u,
					className: C("relative isolate flex h-10 items-center justify-center rounded-md font-medium text-f1-foreground transition-colors duration-100 after:absolute after:inset-0 after:z-0 after:rounded-md after:bg-f1-background-selected-bold after:opacity-0 after:transition-all after:duration-100 after:content-['']", !u && "hover:bg-f1-background-hover hover:after:bg-f1-background-selected-bold-hover", u && "cursor-not-allowed text-f1-foreground-secondary", S(), s && "[&>span]:font-normal [&>span]:text-f1-foreground-secondary", n && e === "single" && "bg-f1-background-selected-bold after:opacity-100 hover:bg-f1-background-selected-bold-hover [&>span]:z-10 [&>span]:text-f1-foreground-inverse [&>span]:opacity-100", n && e === "range" && "rounded-none bg-f1-background-selected hover:bg-f1-background-selected [&:nth-child(4n+1)]:rounded-s-md [&:nth-child(4n+4)]:rounded-e-md [&>span]:text-f1-foreground-selected [&>span]:opacity-100", (r || i) && e === "range" && "rounded-none bg-f1-background-selected after:opacity-100 [&>span]:z-10 [&>span]:text-f1-foreground-inverse [&>span]:opacity-100", r && e === "range" && i && "rounded-s-md", i && e === "range" && "rounded-e-md"),
					children: [/* @__PURE__ */ G("span", { children: t }), c && /* @__PURE__ */ G("div", { className: C("absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100", n && e === "single" && "bg-f1-background", (r || i) && "bg-f1-background", !r && !i && n && e === "range" && "bg-f1-background-selected-bold") })]
				}, t);
			})
		}, r)
	});
}
//#endregion
//#region src/components/OneCalendar/granularities/year/index.tsx
var ch = "yyyy";
function lh(e) {
	return Gu(e, Te, Jc);
}
var uh = (e, t) => ({
	from: Te(zc(e.from, t)),
	to: Jc(zc(e.to, t))
}), dh = {
	day: lp,
	week: oh,
	month: wm,
	quarter: Km,
	halfyear: Sp,
	year: {
		calendarView: "year",
		add: uh,
		getPrevNext: (e, t) => {
			let n = lh(e);
			if (!n) return {
				prev: !1,
				next: !1
			};
			let { from: r, to: i } = n, { from: a, to: o } = uh({
				from: r,
				to: i
			}, -1), { from: s, to: c } = uh({
				from: r,
				to: i
			}, 1), l = t.min && Te(t.min), u = t.max && Jc(t.max);
			return {
				prev: qu(a, l) && qu(o, l) ? {
					from: a,
					to: o
				} : !1,
				next: Ku(c, u) && Ku(s, u) ? {
					from: s,
					to: c
				} : !1
			};
		},
		toRange: (e) => lh(e),
		toRangeString: (e) => Uu(e, ch),
		toString: (e, t, n = "default") => {
			let r = {
				default: Wu(e, ch),
				long: Wu(e, ch)
			};
			return r[n] ?? r.default;
		},
		toStringMaxWidth: () => 70,
		placeholder: () => Q(ch),
		fromString: (e) => {
			let t = Vu(e);
			if (!t) return null;
			let { from: n, to: r } = t, i = (e) => hu(e.trim(), "yyyy", /* @__PURE__ */ new Date());
			return lh({
				from: i(n),
				to: r ? i(r) : void 0
			});
		},
		getViewDateFromDate: (e) => Te(e),
		navigate: (e, t) => zc(e, t),
		navigateUIView: (e, t) => zc(e, t * 10),
		label: (e) => {
			let t = e.getFullYear() - e.getFullYear() % 10;
			return `${t} → ${t + 9}`;
		},
		render: (e) => {
			let t = lh(e.minDate), n = lh(e.maxDate);
			return /* @__PURE__ */ G(sh, {
				mode: e.mode,
				decade: e.viewDate.getFullYear(),
				selected: e.selected,
				onSelect: e.onSelect,
				motionDirection: e.motionDirection,
				minDate: t ? t.from : void 0,
				maxDate: n ? n.to : void 0
			});
		}
	},
	range: Ym
}, fh = (e) => e === "periods" ? Im : dh[e], ph = (e) => [
	e.label ?? "",
	e.header ?? "",
	...e.periods.map((e) => `${e.label}|${e.description ?? ""}|${e.from.getTime()}|${e.to.getTime()}`)
].join("|~|"), mh = /* @__PURE__ */ new Map(), hh = 8, gh = (e) => {
	let t = ph(e), n = mh.get(t);
	if (n) return n;
	let r = Fm(e);
	if (mh.size >= hh) {
		let e = mh.keys().next().value;
		e !== void 0 && mh.delete(e);
	}
	return mh.set(t, r), r;
};
function _h(e) {
	let { weekStartsOn: t, periods: n } = typeof e == "number" ? { weekStartsOn: e } : e ?? {}, r = t ?? P.Monday;
	return {
		...r === P.Monday ? dh : {
			...dh,
			week: ah(r)
		},
		periods: n ? gh(n) : Im
	};
}
//#endregion
//#region ../../node_modules/.pnpm/zen-observable-ts@1.1.0/node_modules/zen-observable-ts/module.js
function vh(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = yh(e)) || t && e && typeof e.length == "number") {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function yh(e, t) {
	if (e) {
		if (typeof e == "string") return bh(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bh(e, t);
	}
}
function bh(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function xh(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function Sh(e, t, n) {
	return t && xh(e.prototype, t), n && xh(e, n), e;
}
var Ch = function() {
	return typeof Symbol == "function";
}, wh = function(e) {
	return Ch() && !!Symbol[e];
}, Th = function(e) {
	return wh(e) ? Symbol[e] : "@@" + e;
};
Ch() && !wh("observable") && (Symbol.observable = Symbol("observable"));
var Eh = Th("iterator"), Dh = Th("observable"), Oh = Th("species");
function kh(e, t) {
	var n = e[t];
	if (n != null) {
		if (typeof n != "function") throw TypeError(n + " is not a function");
		return n;
	}
}
function Ah(e) {
	var t = e.constructor;
	return t !== void 0 && (t = t[Oh], t === null && (t = void 0)), t === void 0 ? Vh : t;
}
function jh(e) {
	return e instanceof Vh;
}
function Mh(e) {
	Mh.log ? Mh.log(e) : setTimeout(function() {
		throw e;
	});
}
function Nh(e) {
	Promise.resolve().then(function() {
		try {
			e();
		} catch (e) {
			Mh(e);
		}
	});
}
function Ph(e) {
	var t = e._cleanup;
	if (t !== void 0 && (e._cleanup = void 0, t)) try {
		if (typeof t == "function") t();
		else {
			var n = kh(t, "unsubscribe");
			n && n.call(t);
		}
	} catch (e) {
		Mh(e);
	}
}
function Fh(e) {
	e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Ih(e) {
	var t = e._queue;
	if (t) {
		e._queue = void 0, e._state = "ready";
		for (var n = 0; n < t.length && (Lh(e, t[n].type, t[n].value), e._state !== "closed"); ++n);
	}
}
function Lh(e, t, n) {
	e._state = "running";
	var r = e._observer;
	try {
		var i = kh(r, t);
		switch (t) {
			case "next":
				i && i.call(r, n);
				break;
			case "error":
				if (Fh(e), i) i.call(r, n);
				else throw n;
				break;
			case "complete": Fh(e), i && i.call(r);
		}
	} catch (e) {
		Mh(e);
	}
	e._state === "closed" ? Ph(e) : e._state === "running" && (e._state = "ready");
}
function Rh(e, t, n) {
	if (e._state !== "closed") {
		if (e._state === "buffering") {
			e._queue.push({
				type: t,
				value: n
			});
			return;
		}
		if (e._state !== "ready") {
			e._state = "buffering", e._queue = [{
				type: t,
				value: n
			}], Nh(function() {
				return Ih(e);
			});
			return;
		}
		Lh(e, t, n);
	}
}
var zh = /*#__PURE__*/ function() {
	function e(e, t) {
		this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
		var n = new Bh(this);
		try {
			this._cleanup = t.call(void 0, n);
		} catch (e) {
			n.error(e);
		}
		this._state === "initializing" && (this._state = "ready");
	}
	var t = e.prototype;
	return t.unsubscribe = function() {
		this._state !== "closed" && (Fh(this), Ph(this));
	}, Sh(e, [{
		key: "closed",
		get: function() {
			return this._state === "closed";
		}
	}]), e;
}(), Bh = /*#__PURE__*/ function() {
	function e(e) {
		this._subscription = e;
	}
	var t = e.prototype;
	return t.next = function(e) {
		Rh(this._subscription, "next", e);
	}, t.error = function(e) {
		Rh(this._subscription, "error", e);
	}, t.complete = function() {
		Rh(this._subscription, "complete");
	}, Sh(e, [{
		key: "closed",
		get: function() {
			return this._subscription._state === "closed";
		}
	}]), e;
}(), Vh = /*#__PURE__*/ function() {
	function e(t) {
		if (!(this instanceof e)) throw TypeError("Observable cannot be called as a function");
		if (typeof t != "function") throw TypeError("Observable initializer must be a function");
		this._subscriber = t;
	}
	var t = e.prototype;
	return t.subscribe = function(e) {
		return (typeof e != "object" || !e) && (e = {
			next: e,
			error: arguments[1],
			complete: arguments[2]
		}), new zh(e, this._subscriber);
	}, t.forEach = function(e) {
		var t = this;
		return new Promise(function(n, r) {
			if (typeof e != "function") {
				r(/* @__PURE__ */ TypeError(e + " is not a function"));
				return;
			}
			function i() {
				a.unsubscribe(), n();
			}
			var a = t.subscribe({
				next: function(t) {
					try {
						e(t, i);
					} catch (e) {
						r(e), a.unsubscribe();
					}
				},
				error: r,
				complete: n
			});
		});
	}, t.map = function(e) {
		var t = this;
		if (typeof e != "function") throw TypeError(e + " is not a function");
		return new (Ah(this))(function(n) {
			return t.subscribe({
				next: function(t) {
					try {
						t = e(t);
					} catch (e) {
						return n.error(e);
					}
					n.next(t);
				},
				error: function(e) {
					n.error(e);
				},
				complete: function() {
					n.complete();
				}
			});
		});
	}, t.filter = function(e) {
		var t = this;
		if (typeof e != "function") throw TypeError(e + " is not a function");
		return new (Ah(this))(function(n) {
			return t.subscribe({
				next: function(t) {
					try {
						if (!e(t)) return;
					} catch (e) {
						return n.error(e);
					}
					n.next(t);
				},
				error: function(e) {
					n.error(e);
				},
				complete: function() {
					n.complete();
				}
			});
		});
	}, t.reduce = function(e) {
		var t = this;
		if (typeof e != "function") throw TypeError(e + " is not a function");
		var n = Ah(this), r = arguments.length > 1, i = !1, a = arguments[1];
		return new n(function(n) {
			return t.subscribe({
				next: function(t) {
					var o = !i;
					if (i = !0, !o || r) try {
						a = e(a, t);
					} catch (e) {
						return n.error(e);
					}
					else a = t;
				},
				error: function(e) {
					n.error(e);
				},
				complete: function() {
					if (!i && !r) return n.error(/* @__PURE__ */ TypeError("Cannot reduce an empty sequence"));
					n.next(a), n.complete();
				}
			});
		});
	}, t.concat = function() {
		var e = this, t = [...arguments], n = Ah(this);
		return new n(function(r) {
			var i, a = 0;
			function o(e) {
				i = e.subscribe({
					next: function(e) {
						r.next(e);
					},
					error: function(e) {
						r.error(e);
					},
					complete: function() {
						a === t.length ? (i = void 0, r.complete()) : o(n.from(t[a++]));
					}
				});
			}
			return o(e), function() {
				i &&= (i.unsubscribe(), void 0);
			};
		});
	}, t.flatMap = function(e) {
		var t = this;
		if (typeof e != "function") throw TypeError(e + " is not a function");
		var n = Ah(this);
		return new n(function(r) {
			var i = [], a = t.subscribe({
				next: function(t) {
					if (e) try {
						t = e(t);
					} catch (e) {
						return r.error(e);
					}
					var a = n.from(t).subscribe({
						next: function(e) {
							r.next(e);
						},
						error: function(e) {
							r.error(e);
						},
						complete: function() {
							var e = i.indexOf(a);
							e >= 0 && i.splice(e, 1), o();
						}
					});
					i.push(a);
				},
				error: function(e) {
					r.error(e);
				},
				complete: function() {
					o();
				}
			});
			function o() {
				a.closed && i.length === 0 && r.complete();
			}
			return function() {
				i.forEach(function(e) {
					return e.unsubscribe();
				}), a.unsubscribe();
			};
		});
	}, t[Dh] = function() {
		return this;
	}, e.from = function(t) {
		var n = typeof this == "function" ? this : e;
		if (t == null) throw TypeError(t + " is not an object");
		var r = kh(t, Dh);
		if (r) {
			var i = r.call(t);
			if (Object(i) !== i) throw TypeError(i + " is not an object");
			return jh(i) && i.constructor === n ? i : new n(function(e) {
				return i.subscribe(e);
			});
		}
		if (wh("iterator") && (r = kh(t, Eh), r)) return new n(function(e) {
			Nh(function() {
				if (!e.closed) {
					for (var n = vh(r.call(t)), i; !(i = n()).done;) {
						var a = i.value;
						if (e.next(a), e.closed) return;
					}
					e.complete();
				}
			});
		});
		if (Array.isArray(t)) return new n(function(e) {
			Nh(function() {
				if (!e.closed) {
					for (var n = 0; n < t.length; ++n) if (e.next(t[n]), e.closed) return;
					e.complete();
				}
			});
		});
		throw TypeError(t + " is not observable");
	}, e.of = function() {
		var t = [...arguments];
		return new (typeof this == "function" ? this : e)(function(e) {
			Nh(function() {
				if (!e.closed) {
					for (var n = 0; n < t.length; ++n) if (e.next(t[n]), e.closed) return;
					e.complete();
				}
			});
		});
	}, Sh(e, null, [{
		key: Oh,
		get: function() {
			return this;
		}
	}]), e;
}();
Ch() && Object.defineProperty(Vh, Symbol("extensions"), {
	value: {
		symbol: Dh,
		hostReportError: Mh
	},
	configurable: !0
});
//#endregion
//#region src/lib/promise-to-observable.ts
function Hh(e) {
	return typeof e == "object" && !!e && "subscribe" in e;
}
function Uh(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function Wh(e) {
	return new Vh((t) => (t.next({
		loading: !0,
		error: null,
		data: null
	}), e.then((e) => {
		t.next({
			loading: !1,
			error: null,
			data: e
		}), t.complete();
	}).catch((e) => {
		t.next({
			loading: !1,
			error: e,
			data: null
		}), t.complete();
	}), () => {}));
}
//#endregion
//#region src/hooks/useDebouncedState.ts
function Gh(e, t) {
	let [n, r] = W(e), i = U(null), a = B((e) => {
		i.current !== null && clearTimeout(i.current), i.current = setTimeout(() => {
			i.current = null, r(e);
		}, t);
	}, [t]);
	return V(() => () => {
		i.current !== null && (clearTimeout(i.current), i.current = null);
	}, []), [n, a];
}
//#endregion
//#region src/hooks/datasource/useDataSource.ts
var Kh = (e) => e.paginationType ?? "no-pagination", qh = (e) => e;
function Jh({ defaultFilters: e = {}, currentFilters: t, defaultGrouping: n, currentGrouping: r, filters: i, search: a, defaultSortings: o, currentSortings: s, dataAdapter: c, grouping: l, ...u }, d = []) {
	let [f, p] = W(t ?? e ?? {}), m = (e) => {
		if (typeof e == "function") p((t) => {
			let n = e(t);
			return JSON.stringify(n) === JSON.stringify(t) ? t : n;
		});
		else {
			if (JSON.stringify(f) === JSON.stringify(e)) return;
			p(e);
		}
	};
	$o(() => {
		t && m(t);
	}, [t]);
	let [h, g] = W(s ?? o ?? null), _ = (e) => {
		if (typeof e == "function") g((t) => {
			let n = e(t);
			return JSON.stringify(n) === JSON.stringify(t) ? t : n;
		});
		else {
			if (JSON.stringify(h) === JSON.stringify(e)) return;
			g(e);
		}
	};
	$o(() => {
		s && _(s);
	}, [s]);
	let v = {
		enabled: !1,
		sync: !1,
		...a
	}, [y, b] = W(), [x, S] = Gh(y, 200);
	V(() => {
		v.sync || S(y);
	}, [
		y,
		v.sync,
		S
	]);
	let C = H(() => i, d), [w, T] = W(!1), E = H(() => c, d), D = H(() => l?.mandatory ? {
		field: Object.keys(l.groupBy)[0],
		order: "asc"
	} : void 0, [JSON.stringify(l)]), [ee, O] = W(r ?? n ?? D);
	return V(() => {
		l?.mandatory && !ee?.field && O(r ?? n ?? D);
	}, [
		l?.mandatory,
		ee?.field,
		D
	]), $o(() => {
		O(r);
	}, [r]), {
		...u,
		filters: C,
		currentFilters: f,
		setCurrentFilters: m,
		currentSortings: h,
		setCurrentSortings: _,
		search: a,
		currentSearch: y,
		setCurrentSearch: b,
		debouncedCurrentSearch: x,
		isLoading: w,
		setIsLoading: T,
		dataAdapter: E,
		setCurrentGrouping: O,
		currentGrouping: ee,
		grouping: l
	};
}
//#endregion
//#region src/hooks/datasource/adaptDataAdapterToInfiniteScroll.ts
var Yh = (e) => e.type === "infinite-scroll" ? e : {
	type: "infinite-scroll",
	records: e.records,
	total: e.total,
	perPage: e.perPage,
	cursor: String(e.currentPage + 1),
	hasMore: e.currentPage < e.pagesCount,
	summaries: e.summaries
}, Xh = (e, t) => Hh(e) ? e.map((e) => {
	let n = e.data;
	return n == null ? {
		loading: e.loading,
		error: e.error,
		data: null
	} : {
		loading: e.loading,
		error: e.error,
		data: t(n)
	};
}) : Uh(e) ? e.then(t) : t(e), Zh = (e) => {
	if (Kh(e) !== "pages") return e;
	let t = e;
	return {
		...t,
		paginationType: "infinite-scroll",
		fetchData: (e) => {
			let n = "cursor" in e.pagination ? e.pagination.cursor : null, r = Math.max(1, Number(n) || 1);
			return Xh(t.fetchData({
				...e,
				pagination: {
					currentPage: r,
					perPage: e.pagination.perPage
				}
			}), Yh);
		}
	};
};
//#endregion
//#region src/lib/objectPaths.ts
function Qh(e, t) {
	if (!e || typeof e != "object") return;
	let n = t.split("."), r = e;
	for (let e of n) if (r && typeof r == "object" && e in r) r = r[e];
	else return;
	return r;
}
//#endregion
//#region src/hooks/datasource/utils.ts
var $h = (e, t) => {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = String(r[t]);
		n.has(e) || n.set(e, []), n.get(e)?.push(r);
	}
	return n;
}, eg = Symbol("groupId");
function tg() {
	let [e, t] = W(!0), [n, r] = W([]), [i, a] = W(null);
	return {
		isInitialLoading: e,
		setIsInitialLoading: t,
		data: n,
		setData: r,
		error: i,
		setError: a
	};
}
function ng() {
	let [e, t] = W(null);
	return {
		paginationInfo: e,
		setPaginationInfo: t
	};
}
var rg = (e) => e, ig = (e, t) => "id" in e ? `${e.id}` : t || JSON.stringify(e);
function ag(e, { filters: t, enabled: n = !0, onError: r, fetchParamsProvider: i = rg, onResponse: a } = {}, o = []) {
	let { dataAdapter: s, currentFilters: c, currentSortings: l, search: u, currentSearch: d, setCurrentSearch: f, isLoading: p, setIsLoading: m, currentGrouping: h, grouping: g, idProvider: _ = ig, itemPreFilter: v, currentPage: y, onPaginationChange: b } = e, x = U(), { isInitialLoading: S, setIsInitialLoading: C, data: w, setData: T, error: E, setError: D } = tg(), [ee, O] = W(0), { paginationInfo: k, setPaginationInfo: A } = ng();
	V(() => {
		v && T((e) => {
			let t = e.length, n = e.filter(v), r = t - n.length;
			return O(r), A((e) => e ? {
				...e,
				total: e.total - r
			} : null), n;
		});
	}, [
		v,
		T,
		A
	]);
	let j = U(k);
	V(() => {
		j.current = k;
	}, [k]);
	let [te, ne] = W(void 0), [re, ie] = W(!1), [ae, M] = W(void 0), oe = U(!1), N = U(w);
	N.current = w;
	let se = U(void 0), ce = U(void 0), le = U(y);
	V(() => {
		b?.(k);
	}, [k, b]);
	let ue = H(() => ({
		...c,
		...t
	}), [c, t]), de = Sn(d), fe = U(void 0);
	V(() => {
		fe.current = u?.enabled ? u?.sync ? d : de || d : void 0;
	}, [
		d,
		de,
		u?.enabled,
		u?.sync
	]);
	let pe = (e, t, n) => {
		{
			let r = new Map(e.map((e, t) => [n(e, t), e]));
			for (let [e, i] of t.entries()) {
				let t = n(i, e);
				r.set(t, i);
			}
			return Array.from(r.values());
		}
	}, me = B((e, t, n, r) => {
		a?.(e);
		let i = [];
		if ("records" in e) {
			i = e.records;
			let n = s.paginationType;
			if (n && ["pages", "infinite-scroll"].includes(n) && n !== "no-pagination") {
				let r = {
					total: e.total,
					perPage: e.perPage
				};
				n === "pages" ? A({
					...r,
					type: "pages",
					currentPage: "currentPage" in e ? e.currentPage : 1,
					pagesCount: "pagesCount" in e ? e.pagesCount : Math.ceil(e.total / e.perPage)
				}) : n === "infinite-scroll" && A({
					...r,
					type: "infinite-scroll",
					cursor: "cursor" in e && e.cursor !== void 0 ? e.cursor : t ? String(e.perPage) : "0",
					hasMore: "hasMore" in e ? e.hasMore : w.length + e.records.length < e.total
				}), ne(e.total);
			}
		} else i = e, ne?.(e.length);
		T(t ? (e) => pe(e, i, _) : i), D(null), C(!1), m(!!n), ie(!1), oe.current = !1, r !== void 0 && M(r);
	}, [
		T,
		s,
		A,
		D,
		C,
		m,
		ie,
		ne,
		oe,
		M
	]), he = H(() => {
		let e = w.map((e) => ({
			...e,
			[eg]: h?.field && Qh(e, h.field) || void 0
		}));
		if (h && h.field && g && g.groupBy[h.field]) {
			let t = $h(e, eg), n = h.field, r = g.groupBy[n];
			return {
				type: "grouped",
				records: e,
				groups: Array.from(t.entries()).map(([e, t]) => ({
					key: e,
					label: r.label(e, ue),
					itemCount: r.itemCount?.(e, ue),
					records: t
				}))
			};
		}
		return {
			type: "flat",
			records: e,
			groups: [{
				key: "all",
				label: "All",
				itemCount: e.length,
				records: e
			}]
		};
	}, [
		w,
		h,
		g,
		ue
	]), ge = B((e) => {
		D({
			message: "Error fetching data",
			cause: e
		}), r?.({
			message: "Error fetching data",
			cause: e
		}), C(!1), m(!1), ie(!1), x.current = void 0, oe.current = !1;
	}, [
		D,
		C,
		m
	]), _e = B(async ({ filters: e, currentPage: t = 1, search: n, appendMode: r = !1, cursor: a = null }) => {
		try {
			x.current &&= (x.current(), void 0);
			let o = [...l ? [{
				field: l.field,
				order: l.order
			}] : [], ...h ? [{
				field: h.field,
				order: h.order ?? "asc"
			}] : []], c = i({
				filters: e,
				search: n,
				sortings: o
			}), u = JSON.stringify({
				filters: e,
				search: n,
				sortings: o,
				currentPage: t,
				cursor: a
			});
			function d() {
				ne(void 0);
				let e = "perPage" in s && typeof s.perPage == "number" ? s.perPage : 20;
				return s.fetchData({
					...c,
					pagination: { ...s.paginationType === "pages" ? {
						currentPage: t,
						perPage: e
					} : s.paginationType === "infinite-scroll" ? {
						cursor: a,
						perPage: e
					} : {} }
				});
			}
			let f = d();
			if (!("then" in f || "subscribe" in f)) {
				me(f, r, void 0, u);
				return;
			}
			let p = ("subscribe" in f ? f : Wh(f)).subscribe({
				next: (e) => {
					e.data ? me(e.data, r, e.loading, u) : e.loading ? m(!0) : e.error && ge(e.error);
				},
				error: ge,
				complete: () => {
					x.current = void 0;
				}
			});
			x.current = () => p.unsubscribe();
		} catch (e) {
			ge(e);
		}
	}, [
		ge,
		s,
		l,
		h,
		me,
		m,
		...o
	]), ve = B((e) => {
		og(k) && (m(!0), _e({
			filters: ue,
			currentPage: e,
			search: fe.current
		}));
	}, [
		fe.current,
		_e,
		ue,
		m,
		k,
		...o
	]), ye = B(() => {
		let e = j.current;
		if (!(!e || p || re)) {
			if (!sg(e)) {
				console.warn("loadMore is only applicable for infinite-scroll pagination type");
				return;
			}
			if (e.hasMore) {
				let t = e.cursor;
				ie(!0), m(!0), oe.current = !0, _e({
					filters: ue,
					appendMode: !0,
					cursor: t,
					search: fe.current
				});
			}
		}
	}, [
		_e,
		p,
		ue,
		j.current,
		fe.current,
		re,
		m,
		ie,
		...o
	]);
	return V(() => {
		if (n && !oe.current) {
			let e = "perPage" in s && typeof s.perPage == "number" ? s.perPage : void 0, t = j.current, n = JSON.stringify({
				filters: ue,
				sortings: l,
				grouping: h,
				search: fe.current,
				paginationType: s.paginationType
			});
			if (s.paginationType === "pages" && e !== void 0 && n === se.current && ce.current !== void 0 && e < ce.current && og(t) && t.currentPage === 1 && N.current.length >= e) {
				ce.current = e, T((t) => t.slice(0, e)), A((t) => t && t.type === "pages" ? {
					...t,
					perPage: e,
					pagesCount: Math.max(1, Math.ceil(t.total / e))
				} : t);
				return;
			}
			se.current = n, ce.current = e, m(!0);
			let r = le.current;
			le.current = void 0;
			let i = s.paginationType === "infinite-scroll" ? 0 : r ?? 1;
			_e({
				filters: ue,
				currentPage: i,
				search: fe.current,
				cursor: s.paginationType === "infinite-scroll" ? "0" : null
			});
		}
	}, [
		_e,
		ue,
		m,
		n,
		s.paginationType,
		fe.current,
		...o
	]), V(() => () => {
		x.current?.(), m(!1);
	}, [m]), {
		data: he,
		search: d,
		setSearch: f,
		isInitialLoading: S,
		isLoading: p,
		isLoadingMore: re,
		error: E,
		paginationInfo: k,
		setPage: ve,
		loadMore: ye,
		mergedFilters: ue,
		totalItems: te ? te - ee : 0,
		committedQuery: ae
	};
}
function og(e) {
	return e !== null && e.type === "pages";
}
function sg(e) {
	return e !== null && e.type === "infinite-scroll";
}
//#endregion
//#region src/hooks/datasource/useGroups.ts
var cg = (e, t) => e.reduce((e, n) => (e[n.key] = typeof t == "boolean" ? t : t.includes(n.key), e), {}), lg = (e, t = []) => {
	let [n, r] = W(() => cg(e, t));
	return V(() => {
		let n = cg(e, t);
		Object.values(n).length > 0 && r(n);
	}, [JSON.stringify(e), JSON.stringify(t)]), {
		openGroups: n,
		setGroupOpen: (e, t) => {
			r((n) => ({
				...n,
				[e]: t
			}));
		}
	};
}, ug = {
	delay: .03,
	duration: .03,
	maxDelay: 20
}, dg = (e) => {
	let { delay: t, duration: n, maxDelay: r } = {
		...ug,
		...e
	};
	return {
		hidden: {
			opacity: 0,
			y: -10
		},
		visible: (e) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: Math.min(e * t, r),
				duration: n,
				type: "spring",
				stiffness: 100,
				damping: 10
			}
		})
	};
}, fg = (e) => ({
	allSelected: e?.allSelected ?? !1,
	items: e?.items ?? /* @__PURE__ */ new Map(),
	groups: e?.groups ?? /* @__PURE__ */ new Map()
}), pg = (e) => typeof e == "object" && !!e && !Array.isArray(e) && "key" in e && "records" in e, mg = (e, t) => typeof e == "object" && !!e && !Array.isArray(e) && t;
//#endregion
//#region src/hooks/datasource/useSelectable/useSelectable.ts
function hg({ data: e, paginationInfo: t, source: n, selectionMode: r = "multi", selectedState: i, onSelectItems: a, disableSelectAll: o = !1, isSearchActive: s = !1, allPagesSelection: c, resetOnPageChange: l = !0, preserveSelectionOnDatasetChange: u = !1, getRenderedSelectableEntries: d, renderedSelectableCount: f = 0 }) {
	let p = e.type === "grouped", m = r === "multi", h = n.selectable, g = !(c ?? n.allPagesSelection ?? !1), [_, v] = W(fg(i)), [y, b] = W(/* @__PURE__ */ new Map()), [x, S] = W(!1), [C, w] = W(null), T = U(!1), E = U(""), D = U(!1), ee = U(!0), O = U(n.currentFilters), k = U(n.currentSortings), A = n.debouncedCurrentSearch, j = U(A), te = U(""), ne = U(""), re = U(!1), ie = U(!1), ae = U(void 0), M = H(() => {
		if (g) return e.records?.length || 0;
		let n = t ? t.total : e.records?.length ?? 0;
		return Math.max(n, f);
	}, [
		t,
		e.records?.length,
		g,
		f
	]), oe = H(() => t ? "type" in t && t.type === "pages" ? t.currentPage : "cursor" in t ? t.cursor : null : null, [t]), [N, se] = H(() => {
		let e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
		for (let [n, r] of _.items?.entries() || []) r.checked ? e.set(n, r.item) : t.set(n, r.item);
		return [e, t];
	}, [_.items]), ce = N.size, le = se.size, ue = H(() => ce === M && M > 0, [M, ce]), de = H(() => o ? !1 : s ? x && ce > 0 : (x || ue) && ce > 0, [
		o,
		x,
		ue,
		ce,
		s
	]), fe = H(() => o || s && !T.current || !x ? !1 : le === 0 || "indeterminate", [
		o,
		x,
		le,
		s
	]), pe = fe === "indeterminate", me = H(() => {
		let e = /* @__PURE__ */ new Map();
		for (let [t, n] of y.entries()) n.checked && e.set(t, n.group);
		return e;
	}, [y]), he = H(() => {
		if (!p || e.type !== "grouped") return {};
		let t = {};
		for (let n of e.groups) {
			let e = n.records.map((e) => h?.(e)).filter((e) => e !== void 0), r = 0, i = 0;
			for (let t of e) _.items?.get(t)?.checked ? r++ : i++;
			let a = e.length, o = r === a && a > 0, s = r > 0 && r < a;
			t[n.key] = {
				checked: o || s,
				indeterminate: s,
				selectedCount: r,
				unselectedCount: i
			};
		}
		return t;
	}, [
		p,
		e,
		_.items,
		h
	]), ge = H(() => p ? Object.values(he).reduce((e, t) => e + (t.selectedCount || 0), 0) : x && C !== null ? Math.max(0, Math.max(C, f) - le) : ce, [
		he,
		C,
		le,
		ce,
		p,
		x,
		f
	]), { itemsStatus: _e, selectedIds: ve } = H(() => {
		let t = _.items || /* @__PURE__ */ new Map(), r = n.fetchChildren !== void 0, i = g && !r ? new Set(e.records.map((e) => h?.(e)).filter((e) => e !== void 0)) : null;
		return {
			itemsStatus: Array.from(t.values()).filter((e) => e.item === void 0 ? !1 : g && i ? i.has(e.id) : !0).map(({ item: e, checked: t }) => ({
				item: e,
				checked: t
			})),
			selectedIds: Array.from(t.entries()).filter(([e, t]) => t.checked ? g && i ? i.has(e) : !0 : !1).map(([e]) => e)
		};
	}, [
		_.items,
		g,
		e.records,
		h,
		n.fetchChildren
	]), ye = H(() => Object.fromEntries(Array.from(y.values()).map(({ group: e, checked: t }) => [e.key, !!t])), [y]), be = H(() => ({
		allChecked: fe,
		itemsStatus: _e,
		selectedIds: ve,
		checkedItems: Array.from(N.values()),
		uncheckedItems: Array.from(se.values()),
		groupsStatus: ye,
		filters: n.currentFilters || {},
		selectedCount: ge,
		totalKnownItemsCount: M
	}), [
		fe,
		_e,
		ve,
		N,
		se,
		ye,
		n.currentFilters,
		ge,
		M
	]), xe = {
		checked: x || pe,
		indeterminate: pe,
		selectedCount: ge,
		unselectedCount: le
	}, Se = B((t) => _.items?.get(t)?.item ?? e.records.find((e) => {
		let n = h?.(e);
		return n !== void 0 && n === t;
	}), [
		_.items,
		e.records,
		h
	]), Ce = B(() => e.type === "grouped" ? e.groups.flatMap((e) => e.records) : e.records, [e]), we = B((e) => {
		if (!e) return "";
		let t = Array.from(e.items?.entries() || []).map(([e, t]) => `${e}:${t.checked}`).sort().join(","), n = Array.from(e.groups?.entries() || []).map(([e, t]) => `${e}:${t.checked}`).sort().join(",");
		return `${e.allSelected}|${t}|${n}`;
	}, []), Te = B((t) => {
		let n = fg(t);
		v((t) => {
			let r = /* @__PURE__ */ new Map(), i = new Set(n.items?.keys() || []);
			for (let [e, n] of t.items?.entries() || []) !m && !i.has(e) && n.checked ? r.set(e, {
				...n,
				checked: !1
			}) : r.set(e, n);
			for (let [e, t] of n.items?.entries() || []) {
				let n = r.get(e), i = Se(e);
				if (!n) r.set(e, {
					id: e,
					checked: t.checked,
					item: i
				});
				else {
					let a = n.checked !== t.checked && (!m || t.checked), o = n.item === void 0 && i !== void 0;
					(o || a) && r.set(e, {
						...n,
						...o ? { item: i } : {},
						...a ? { checked: t.checked } : {}
					});
				}
			}
			for (let t of e.records) {
				let e = h?.(t);
				e && !r.has(e) && r.set(e, {
					id: e,
					checked: x,
					item: t
				});
			}
			let a = /* @__PURE__ */ new Map();
			for (let [e, t] of n.groups?.entries() || []) a.set(String(e), {
				id: e,
				checked: t.checked
			});
			return {
				allSelected: t.allSelected,
				items: r,
				groups: a
			};
		});
	}, [
		e.records,
		h,
		x,
		Se,
		m
	]), Ee = B((t, n, r = !1, i) => {
		let a = (Array.isArray(t) ? t : [t]).slice(0, m ? void 0 : 1), o = Array.isArray(i) ? i : i === void 0 ? [] : [i];
		v((t) => {
			let i = !m && n ? /* @__PURE__ */ new Map() : new Map(t.items), s = 0;
			for (let c of a) {
				if (r && i.has(c)) continue;
				s++;
				let a = t.items?.get(c)?.item, l = o.find((e) => {
					let t = h?.(e);
					return t !== void 0 && t === c;
				}), u = a ?? l ?? e.records.find((e) => {
					let t = h?.(e);
					return t !== void 0 && t === c;
				});
				i.set(c, {
					id: c,
					checked: n,
					item: u
				});
			}
			return s === 0 ? t : {
				...t,
				items: i
			};
		});
	}, [
		m,
		e.records,
		h
	]), De = B((t, n) => {
		if (!p || e.type !== "grouped") return;
		let r = pg(t) ? [t.key] : Array.isArray(t) ? [...t] : [t], i = e.groups.filter((e) => r.includes(e.key));
		if (i.length === 0) return;
		let a = i.flatMap((e) => e.records.map((e) => h?.(e)).filter((e) => e !== void 0));
		a.length > 0 && Ee(a, n), b((e) => {
			let t = new Map(e);
			for (let e of i) t.set(e.key, {
				group: e,
				checked: n
			});
			return t;
		});
	}, [
		p,
		e,
		h,
		Ee
	]), Oe = B(() => {
		let t = d?.() ?? [];
		return t.length > 0 ? t : e.records.map((e) => {
			let t = h?.(e);
			return t === void 0 ? void 0 : [t, e];
		}).filter((e) => e !== void 0);
	}, [
		d,
		e.records,
		h
	]), ke = B((e, t) => {
		if (mg(e, h !== void 0)) {
			let n = h?.(e);
			n !== void 0 && Ee(n, t, !1, e);
			return;
		}
		Ee(e, t);
	}, [h, Ee]), Ae = B((t) => {
		if (!m) return;
		if (!t && x) {
			S(!1), T.current = !1, w(null), b(/* @__PURE__ */ new Map()), re.current = !1, v(() => ({
				allSelected: !1,
				items: /* @__PURE__ */ new Map(),
				groups: /* @__PURE__ */ new Map()
			}));
			return;
		}
		let n = p && e.type === "grouped" ? [] : Oe(), r = n.length || e.records?.length || 0;
		if (t && w((e) => e === null ? r : e), p && e.type === "grouped") {
			let n = e.groups.map((e) => e.key);
			n.length > 0 && De(n, t);
		} else {
			let e = n.map(([e]) => e), r = n.map(([, e]) => e);
			e.length > 0 && Ee(e, t, !1, r);
		}
		t || (S(!1), T.current = !1, w(null));
	}, [
		m,
		x,
		p,
		e,
		Oe,
		De,
		Ee
	]), je = B((t) => {
		if (m) {
			if (S(t), T.current = t, w(t ? M : null), p && e.type === "grouped") {
				let n = e.groups.map((e) => e.key);
				n.length > 0 && De(n, t);
			} else if (t) {
				let e = Oe();
				v((t) => {
					let n = /* @__PURE__ */ new Map();
					for (let [t, r] of e) n.set(t, {
						id: t,
						checked: !0,
						item: r
					});
					return {
						...t,
						allSelected: !0,
						items: n
					};
				});
			} else {
				let e = Oe().map(([e]) => e);
				e.length > 0 && Ee(e, !1), v((e) => {
					let t = new Map(e.items), n = !1;
					for (let [e, r] of t.entries()) r.checked !== !1 && (t.set(e, {
						...r,
						checked: !1
					}), n = !0);
					return n ? {
						...e,
						allSelected: !1,
						items: t
					} : e;
				});
			}
		}
	}, [
		m,
		M,
		p,
		e,
		Oe,
		De,
		Ee
	]), Me = B(() => {
		S(!1), T.current = !1, w(null), b(/* @__PURE__ */ new Map()), re.current = !1, v(() => ({
			allSelected: !1,
			items: /* @__PURE__ */ new Map(),
			groups: /* @__PURE__ */ new Map()
		}));
	}, []);
	return V(() => {
		v((e) => ({
			...e,
			allSelected: fe
		}));
	}, [fe]), V(() => {
		let e = we(i);
		if (!D.current) {
			D.current = !0, E.current = e;
			return;
		}
		e !== E.current && (E.current = e, Te(i));
	}, [
		i,
		we,
		Te
	]), V(() => {
		if (ee.current) {
			ee.current = !1, O.current = n.currentFilters, k.current = n.currentSortings, j.current = A;
			return;
		}
		let e = JSON.stringify(n.currentFilters) !== JSON.stringify(O.current), t = JSON.stringify(n.currentSortings) !== JSON.stringify(k.current), r = A !== j.current;
		(e || t || r) && (!o && (!u || x) && (ie.current = !0, Me()), O.current = n.currentFilters, k.current = n.currentSortings, j.current = A);
	}, [
		n.currentFilters,
		n.currentSortings,
		A,
		Me,
		o,
		u,
		x
	]), V(() => {
		if (!l) return;
		if (t?.type === "infinite-scroll") {
			ae.current = oe;
			return;
		}
		let e = ae.current;
		if (e === void 0) {
			ae.current = oe;
			return;
		}
		oe !== e && (x || Me()), ae.current = oe;
	}, [
		oe,
		x,
		Me,
		l,
		t?.type
	]), V(() => {
		re.current = de;
	}, [de]), V(() => {
		let e = Ce();
		if (e.length === 0) return;
		let t = e.map((e) => h?.(e)).filter((e) => e !== void 0), n = t.join(",");
		if (n !== te.current) {
			if (te.current = n, ie.current) {
				ie.current = !1;
				return;
			}
			if (p) for (let t of e) {
				let e = h?.(t);
				if (e === void 0) continue;
				let n = t[eg];
				n && y.get(n)?.checked && Ee(e, !0, !0);
			}
			else m && !g && Ee(t, re.current, !0);
			v((t) => {
				let n = !1, r = new Map(t.items);
				for (let [t, i] of r.entries()) if (i.item === void 0) {
					let a = e.find((e) => {
						let n = h?.(e);
						return n !== void 0 && n === t;
					});
					a && (r.set(t, {
						...i,
						item: a
					}), n = !0);
				}
				return n ? {
					...t,
					items: r
				} : t;
			});
		}
	}, [
		e.records,
		e.groups,
		h,
		Ce,
		p,
		y,
		m,
		Ee,
		g
	]), V(() => {
		ce === 0 && (S(!1), T.current = !1);
	}, [ce]), V(() => {
		let e = JSON.stringify({
			allSelectedCheck: x,
			allSelectedState: fe,
			itemsCount: _.items?.size ?? 0,
			checkedCount: ce
		});
		e !== ne.current && (ne.current = e, a?.({
			allSelected: fe,
			itemsStatus: _e,
			selectedIds: ve,
			groupsStatus: ye,
			filters: n.currentFilters || {},
			selectedCount: ge
		}, Me, je));
	}, [
		x,
		fe,
		_e,
		ve,
		ye,
		ge,
		ce
	]), {
		isAllSelected: de,
		isPartiallySelected: pe,
		selectedItems: N,
		selectedGroups: me,
		allSelectedStatus: xe,
		clearSelection: Me,
		handleSelectItemChange: ke,
		handleSelectAll: Ae,
		handleSelectAllItems: je,
		handleSelectGroupChange: De,
		selectionMeta: {
			selectedItemsCount: ge,
			totalKnownItemsCount: M,
			checkedItems: Array.from(N.values()),
			uncheckedItems: Array.from(se.values())
		},
		groupAllSelectedStatus: he,
		selectionStatus: be,
		selectedState: _
	};
}
//#endregion
//#region src/lib/toArray.ts
var gg = (e) => e === void 0 ? [] : Array.isArray(e) ? e : [e], _g = z(({ className: e, ...t }, n) => /* @__PURE__ */ G(dt, {
	ref: n,
	className: C("fixed inset-0 z-50 bg-f1-background-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
_g.displayName = dt.displayName;
//#endregion
//#region src/ui/Dialog/components/DialogPortal.tsx
var vg = lt, yg = z(({ wrapperClassName: e, className: t, children: n, withTranslateAnimation: r = !0, animation: i = "scale", overlayClassName: a, container: o, defaultContainerId: s = "content", ...c }, l) => {
	let [u, d] = W();
	return V(() => {
		d(o === void 0 ? document.getElementById(s) ?? document.getElementById("content") ?? document.body : o);
	}, [o, s]), u === void 0 ? null : /* @__PURE__ */ K(vg, {
		container: u,
		children: [/* @__PURE__ */ G(_g, { className: a }), /* @__PURE__ */ G(xt, {
			ref: l,
			className: C("fixed inset-0 z-50 flex items-center justify-center", "pointer-events-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", i === "scale" && "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", i === "scale" && r && "data-[state=closed]:slide-out-to-top-[10%] data-[state=open]:slide-in-from-top-[10%]", e),
			...c,
			children: /* @__PURE__ */ G("div", {
				className: C("relative flex w-[90%] flex-col rounded-xl bg-f1-background shadow-lg", "pointer-events-auto", t),
				children: n
			})
		})]
	});
});
yg.displayName = xt.displayName;
//#endregion
//#region src/ui/Dialog/components/DialogTitle.tsx
var bg = z(({ className: e, ...t }, n) => /* @__PURE__ */ G(Ot, {
	ref: n,
	className: C("text-lg font-medium text-f1-foreground", e),
	...t
}));
bg.displayName = Ot.displayName;
//#endregion
//#region src/ui/Dialog/dialog.tsx
var xg = et, Sg = R({
	open: !1,
	onClose: () => {},
	position: "center",
	shownBottomSheet: !1,
	portalContainer: null
}), Cg = ({ isOpen: e, onClose: t, shownBottomSheet: n = !1, position: r, children: i, portalContainer: a }) => /* @__PURE__ */ G(Sg.Provider, {
	value: {
		open: e,
		onClose: t,
		position: r,
		shownBottomSheet: n,
		portalContainer: a
	},
	children: i
}), wg = () => xn(Sg), Tg = ({ position: e }) => /* @__PURE__ */ G(h.div, {
	initial: { opacity: 0 },
	animate: { opacity: .6 },
	exit: { opacity: 0 },
	transition: {
		duration: .2,
		ease: "easeOut"
	},
	className: C("pointer-events-none absolute inset-x-0 z-10 h-4", e === "top" ? [
		"top-0",
		"bg-gradient-to-b from-f1-background-secondary to-transparent",
		"after:top-0"
	] : [
		"bottom-0",
		"bg-gradient-to-t from-f1-background-secondary to-transparent",
		"after:bottom-0"
	])
}), Eg = ({ children: e, disableContentPadding: t = !1 }) => {
	let { position: n } = wg(), r = U(null), [i, a] = W(!0), [o, s] = W(!0), c = B(() => {
		let e = r.current;
		if (!e) return;
		let { scrollTop: t, scrollHeight: n, clientHeight: i } = e;
		a(t <= 0), s(t + i >= n - 1);
	}, []);
	return V(() => {
		let e = r.current;
		if (!e) return;
		e.addEventListener("scroll", c, { passive: !0 }), c();
		let t = new ResizeObserver(() => c());
		return t.observe(e), () => {
			e.removeEventListener("scroll", c), t.disconnect();
		};
	}, [c]), /* @__PURE__ */ K("div", {
		className: "relative flex flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ K($e, {
			viewportRef: r,
			className: C("[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col", "[&_.resource-header]:p-0 [&_.resource-header]:pr-1", !t && "px-4 [&>div]:py-4", n === "fullscreen" && "h-full [&>div]:h-full [&>div>div]:h-full"),
			children: [/* @__PURE__ */ G(nr, {
				layout: null,
				children: e
			}), /* @__PURE__ */ G(Dt, {
				orientation: "vertical",
				className: "[&_div]:bg-f1-background"
			})]
		}), /* @__PURE__ */ K(g, { children: [!i && /* @__PURE__ */ G(Tg, { position: "top" }, "shadow-top"), !o && /* @__PURE__ */ G(Tg, { position: "bottom" }, "shadow-bottom")] })]
	});
}, Dg = (e) => Array.isArray(e), Og = (e) => Array.isArray(e), kg = ({ primaryAction: e, secondaryAction: t }) => {
	let n = t, r = e;
	return !r && !n ? null : /* @__PURE__ */ K("div", {
		className: "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3",
		children: [/* @__PURE__ */ G("div", { className: "flex-1" }), /* @__PURE__ */ K("div", {
			className: "flex flex-row items-center gap-2",
			children: [n ? Og(t) ? /* @__PURE__ */ G(ku, {
				items: t.map((e) => ({
					value: e.value,
					label: e.label,
					icon: e.icon
				})),
				onClick: (e) => {
					t.find((t) => t.value === e)?.onClick();
				},
				variant: "outline"
			}) : /* @__PURE__ */ G(ve, {
				label: t.label,
				onClick: t.onClick,
				variant: "outline",
				icon: t.icon,
				iconPosition: t.iconPosition,
				disabled: t.disabled,
				loading: t.loading
			}) : null, r ? Dg(e) ? /* @__PURE__ */ G(ku, {
				items: e.map((e) => ({
					value: e.value,
					label: e.label,
					icon: e.icon
				})),
				onClick: (t) => {
					e.find((e) => e.value === t)?.onClick();
				},
				variant: "default"
			}) : /* @__PURE__ */ G(ve, {
				label: e.label,
				onClick: e.onClick,
				variant: "default",
				icon: e.icon,
				iconPosition: e.iconPosition,
				disabled: e.disabled,
				loading: e.loading
			}) : null]
		})]
	});
}, Ag = ({ description: e }) => {
	let [t, n] = W(!1), [r, i] = W(!1), a = f(), o = U(null), s = U(null), c = x({ ref: o }), l = x({ ref: s });
	return V(() => {
		l.height && c.height && i(l.height > c.height);
	}, [l.height, c.height]), /* @__PURE__ */ K("div", {
		className: "flex max-w-[640px] flex-col gap-1",
		children: [/* @__PURE__ */ K(h.div, {
			initial: !1,
			animate: { height: t ? l.height ?? c.height : c.height ?? "3rem" },
			transition: {
				duration: r ? .15 : 0,
				ease: [
					.165,
					.84,
					.44,
					1
				]
			},
			className: C(t ? "overflow-y-scroll" : "overflow-clip", "relative max-h-80"),
			children: [/* @__PURE__ */ G("div", {
				ref: s,
				className: "pointer-events-none invisible absolute left-0 top-0 -z-10 text-lg text-f1-foreground-secondary",
				"aria-hidden": "true",
				children: e
			}), /* @__PURE__ */ G("div", {
				ref: o,
				className: C("text-lg text-f1-foreground-secondary", !t && "line-clamp-2"),
				children: e
			})]
		}), (r || t) && /* @__PURE__ */ G("button", {
			onClick: () => n((e) => !e),
			className: "relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",
			children: t ? a.actions.showLess : a.actions.showAll
		})]
	});
}, jg = {
	initial: {
		scale: .9,
		opacity: 0
	},
	animate: {
		scale: 1,
		opacity: 1
	},
	exit: {
		scale: .9,
		opacity: 0
	}
}, Mg = {
	duration: .15,
	ease: "easeOut"
}, Ng = z(({ valueToCopy: e, onCopy: t, copyTooltipLabel: n, copiedTooltipLabel: r, variant: i = "neutral", size: a = "sm", ...s }, c) => {
	let [l, u] = W(!1), d = f(), p = n ?? d.actions.copy, m = l ? r ?? "Copied" : p;
	return V(() => {
		let e = null;
		return l && (e = setTimeout(() => u(!1), 1e3)), () => {
			e && clearTimeout(e);
		};
	}, [l]), /* @__PURE__ */ G(ge, {
		ref: c,
		variant: i,
		size: a,
		onClick: (n) => {
			n.stopPropagation(), window.navigator.clipboard.writeText(e), u(!0), t?.(n);
		},
		"aria-live": "polite",
		"aria-label": m,
		title: m,
		...s,
		compact: !0,
		children: /* @__PURE__ */ G(g, {
			mode: "wait",
			initial: !1,
			children: /* @__PURE__ */ G(h.span, {
				variants: jg,
				initial: "initial",
				animate: "animate",
				exit: "exit",
				transition: Mg,
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					verticalAlign: "middle"
				},
				children: /* @__PURE__ */ G(o, {
					size: a === "sm" ? "sm" : "md",
					icon: l ? Bt : Yn
				})
			}, l ? "check" : "copy")
		})
	});
});
Ng.displayName = "ButtonCopy";
//#endregion
//#region src/experimental/Information/Headers/Metadata/MetadataValue.tsx
var Pg = {
	warning: {
		icon: xe,
		iconColor: "warning",
		textColor: "text-f1-foreground-warning"
	},
	critical: {
		icon: be,
		iconColor: "critical",
		textColor: "text-f1-foreground-critical"
	}
};
function Fg({ item: e, collapse: t = !1 }) {
	let { value: n } = e;
	switch (n.type) {
		case "text": return /* @__PURE__ */ G("span", { children: n.content });
		case "avatar": return /* @__PURE__ */ K("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ G(We, {
				avatar: n.variant,
				size: "xs"
			}), n.text && /* @__PURE__ */ G("span", { children: n.text })]
		});
		case "status": return /* @__PURE__ */ G(Ke, {
			text: n.label,
			variant: n.variant
		});
		case "list": return /* @__PURE__ */ G(ut, {
			type: n.variant,
			avatars: n.avatars,
			size: "xs",
			max: n.max ?? 3
		});
		case "data-list": return t ? /* @__PURE__ */ K("div", {
			className: "flex items-center justify-center gap-1 font-medium",
			children: [n.data[0], n.data.length > 1 && /* @__PURE__ */ K("span", {
				className: "tabular-nums text-f1-foreground-secondary",
				children: ["+", n.data.length - 1]
			})]
		}) : /* @__PURE__ */ G("div", {
			className: "flex flex-col gap-1.5",
			children: n.data.map((e) => /* @__PURE__ */ G("span", { children: e }, e))
		});
		case "tag-list": return t ? /* @__PURE__ */ K("div", {
			className: "flex flex-wrap items-center justify-center gap-1 font-medium",
			children: [/* @__PURE__ */ G(ft, { text: n.tags[0] }), n.tags.length > 1 && /* @__PURE__ */ K("span", {
				className: "tabular-nums text-f1-foreground-secondary",
				children: ["+", n.tags.length - 1]
			})]
		}) : /* @__PURE__ */ G("div", {
			className: C("flex flex-col gap-1 [&>div]:w-fit", n.tags.length > 1 && "-mt-[3px]"),
			children: n.tags.map((e) => /* @__PURE__ */ G(ft, { text: e }, e))
		});
		case "dot-tag": return /* @__PURE__ */ G(bt, {
			text: n.label,
			color: n.color
		});
		case "date": {
			if (n.icon === void 0) return /* @__PURE__ */ G("span", { children: n.formattedDate });
			let { icon: e, iconColor: t, textColor: r } = Pg[n.icon];
			return /* @__PURE__ */ K("div", {
				className: "flex items-center justify-center gap-0.5 font-medium",
				children: [/* @__PURE__ */ G(o, {
					icon: e,
					color: t
				}), /* @__PURE__ */ G("span", {
					className: r,
					children: n.formattedDate
				})]
			});
		}
		case "progress-bar": {
			let t = n.color ? vt(n.color) : vt("categorical-1"), r = n.max && n.max > 0 ? n.max : 100, i = Math.min(Math.max(0, n.value), r), a = i / r * 100;
			return /* @__PURE__ */ K("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ G("div", {
					className: "min-w-16",
					children: /* @__PURE__ */ G(ot, {
						color: t,
						value: a,
						max: 100,
						"aria-label": e.label,
						"aria-valuemin": 0,
						"aria-valuemax": r,
						"aria-valuenow": i,
						"aria-valuetext": n.label
					})
				}), n.label && /* @__PURE__ */ G("span", {
					className: "whitespace-nowrap text-sm font-medium",
					children: n.label
				})]
			});
		}
	}
}
//#endregion
//#region src/experimental/Information/Headers/Metadata/index.tsx
var Ig = (e) => e?.type !== "copy", Lg = (e) => e?.type === "copy", Rg = {
	none: "gap-y-0",
	xs: "gap-y-1",
	sm: "gap-y-2",
	md: "gap-y-3"
};
function zg({ item: e }) {
	let [t, n] = W(!1), r = e.value.type === "data-list" && e.value.data.length > 1 || e.value.type === "tag-list" && e.value.tags.length > 1, i = !!e.actions?.length, a = i || r, s = (e, t) => {
		if (t) return t;
		let n;
		switch (e.type) {
			case "text": return e.content;
			case "avatar": return e.text;
			case "status":
			case "dot-tag": return e.label;
			case "date": return e.formattedDate;
			case "tag-list": return e.tags.join(", ");
			case "data-list": return e.data.join(", ");
			case "list": return "";
			case "progress-bar": {
				let t = typeof e.max == "number" && e.max > 0 ? e.max : 100;
				return e.label ?? `${e.value}/${t}`;
			}
			default: return n = e, n;
		}
	};
	return /* @__PURE__ */ K("div", {
		className: "flex h-8 items-center gap-2",
		children: [
			e.icon && /* @__PURE__ */ G("span", {
				className: "flex shrink-0 items-center text-f1-foreground-secondary",
				children: /* @__PURE__ */ G(o, {
					icon: e.icon,
					size: "md"
				})
			}),
			/* @__PURE__ */ K("div", {
				className: C("flex w-28 items-center gap-1 truncate text-f1-foreground-secondary md:w-fit", e.hideLabel && "md:hidden"),
				children: [e.label, e.info && /* @__PURE__ */ G("div", {
					className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help",
					children: /* @__PURE__ */ G(y, {
						label: e.info.title,
						description: e.info.description,
						children: /* @__PURE__ */ G(o, {
							icon: Re,
							size: "sm"
						})
					})
				})]
			}),
			/* @__PURE__ */ K("div", {
				role: "button",
				tabIndex: a ? 0 : -1,
				onMouseEnter: () => a && n(!0),
				onMouseLeave: () => a && n(!1),
				onFocus: () => a && n(!0),
				onBlur: () => a && n(!1),
				className: "relative flex h-5 w-fit items-center hover:cursor-default",
				"aria-label": `${e.label} actions`,
				children: [
					/* @__PURE__ */ G("div", {
						className: C("hidden font-medium text-f1-foreground md:block", !i && "block"),
						children: /* @__PURE__ */ G(Fg, {
							item: e,
							collapse: !0
						})
					}),
					i && /* @__PURE__ */ G("div", {
						className: "w-full md:hidden",
						children: /* @__PURE__ */ G(rt, {
							items: e.actions?.filter(Ig).map((e) => ({
								label: e.label,
								icon: e.icon,
								onClick: e.onClick
							})) ?? [],
							children: /* @__PURE__ */ G(Fg, {
								item: e,
								collapse: !0
							})
						})
					}),
					/* @__PURE__ */ G(g, { children: t && a && /* @__PURE__ */ K(h.div, {
						className: C("absolute -left-1.5 -top-1.5 z-50 hidden max-h-[80vh] items-start justify-center gap-1.5 overflow-y-auto whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex", !r && "h-8 items-start", i ? "pr-1" : "pr-1.5"),
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .1 },
						children: [/* @__PURE__ */ G("div", {
							className: C("flex h-6 items-center font-medium text-f1-foreground", r && "h-auto items-start pt-0.5"),
							children: /* @__PURE__ */ G(Fg, { item: e })
						}), i && /* @__PURE__ */ G(h.div, {
							className: "flex gap-1",
							initial: { x: -16 },
							animate: { x: 0 },
							exit: { x: -16 },
							transition: { duration: .1 },
							children: e.actions?.map((t, n) => Lg(t) ? /* @__PURE__ */ G(Ng, { valueToCopy: s(e.value, t.copyValue) }, `copy-${n}`) : /* @__PURE__ */ G(y, {
								label: t.label,
								children: /* @__PURE__ */ G(ve, {
									size: "sm",
									variant: "neutral",
									label: t.label,
									hideLabel: !0,
									icon: t.icon,
									onClick: t.onClick
								}, `action-${n}`)
							}, `tooltip-${n}`))
						})]
					}) })
				]
			})
		]
	});
}
var Bg = bn(function({ items: e, rowGap: t = "none" }) {
	let n = e.filter((e) => typeof e == "object");
	return /* @__PURE__ */ G("div", {
		className: C("flex flex-col items-start gap-x-3 md:flex-row md:flex-wrap md:items-center", Rg[t]),
		children: n.map((e, t) => /* @__PURE__ */ K(yn, { children: [/* @__PURE__ */ G(zg, { item: e }), t < n.length - 1 && /* @__PURE__ */ G("div", { className: "hidden h-4 w-[1px] bg-f1-border md:block" })] }, `metadata-item-${t}`))
	});
}), Vg = m("Metadata", Bg), Hg = (e) => e.isVisible !== !1;
function Ug({ title: e, avatar: t, deactivated: n, description: r, primaryAction: i, secondaryActions: a = [], otherActions: o = [], status: s, metadata: c = [], metadataRowGap: l = "none", showBottomBorder: u = !1, onClose: d }) {
	let p = f(), m = [s && {
		label: s.label,
		value: {
			type: "status",
			label: s.text,
			variant: s.variant
		},
		actions: s.actions,
		hideLabel: !0
	}, ...c], h = a.filter(Hg), g = o.filter(Hg), _ = i && Hg(i), v = h.length > 0, y = g.length > 0, b = (e) => !!e && "items" in e, x = (e) => !!e && "label" in e && !("items" in e), S = (e, t) => `${Wg(e) ? `${e.value ?? "default"}-${e.items.map((e) => e.value).join("-")}` : e.label}-${t}`;
	return /* @__PURE__ */ K("div", {
		className: C("resource-header px-page flex flex-col gap-3 pb-5 pt-3", u && "border-0 border-b border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ K("div", {
			className: C("flex flex-col items-start justify-start gap-4 md:flex-row", !r && "md:items-center"),
			children: [
				/* @__PURE__ */ K("div", {
					className: C("flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start", !r && "md:items-center"),
					children: [t && /* @__PURE__ */ G("div", {
						className: "flex items-start",
						children: /* @__PURE__ */ G(We, {
							avatar: { ...t.type === "generic" ? {
								...t,
								type: "company"
							} : t },
							size: "xl"
						})
					}), /* @__PURE__ */ K("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ G("span", {
							className: C("text-2xl font-semibold", n ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
							children: e
						}), r && /* @__PURE__ */ G(Ag, { description: r })]
					})]
				}),
				m.length > 0 && /* @__PURE__ */ G("div", {
					className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden",
					children: /* @__PURE__ */ G(Vg, {
						items: m,
						rowGap: l
					})
				}),
				/* @__PURE__ */ K("div", {
					className: "flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden",
					children: [
						_ && x(i) && /* @__PURE__ */ G("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ G(ve, {
								label: i.label,
								onClick: i.onClick,
								variant: "default",
								icon: i.icon,
								size: "lg",
								disabled: i.disabled,
								tooltip: i.tooltip,
								loading: i.loading
							})
						}),
						_ && b(i) && /* @__PURE__ */ G("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ G(ku, {
								items: i.items,
								onClick: i.onClick,
								variant: "default",
								value: i.value,
								size: "lg",
								disabled: i.disabled,
								tooltip: i.tooltip,
								loading: i.loading
							})
						}),
						h.map((e, t) => /* @__PURE__ */ G(yn, { children: /* @__PURE__ */ G("div", {
							className: "w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full",
							children: Wg(e) ? /* @__PURE__ */ G(ku, {
								items: e.items,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								value: e.value,
								size: "lg",
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							}) : /* @__PURE__ */ G(ve, {
								label: e.label,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								icon: e.icon,
								size: "lg",
								hideLabel: e.hideLabel,
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							})
						}) }, S(e, t))),
						g.length > 0 && /* @__PURE__ */ G("div", {
							className: "w-full [&>*]:w-full [&_button]:w-full",
							children: /* @__PURE__ */ G(rt, { items: g })
						}),
						d && /* @__PURE__ */ G("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ G(ve, {
								label: p.actions.close,
								icon: Ut,
								variant: "outline",
								size: "lg",
								onClick: d
							})
						})
					]
				}),
				/* @__PURE__ */ K("div", {
					className: "-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto",
					children: [
						g.length > 0 && /* @__PURE__ */ G("div", { children: /* @__PURE__ */ G(wt, { items: g }) }),
						h.map((e, t) => /* @__PURE__ */ G(yn, { children: /* @__PURE__ */ G("div", {
							className: "hidden md:block",
							children: Wg(e) ? /* @__PURE__ */ G(ku, {
								items: e.items,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								value: e.value,
								size: "md",
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							}) : /* @__PURE__ */ G(ve, {
								label: e.label,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								icon: e.icon,
								hideLabel: e.hideLabel,
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							})
						}) }, S(e, t))),
						_ && (v || y) && /* @__PURE__ */ G("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
						_ && x(i) && /* @__PURE__ */ G("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ G(ve, {
								label: i.label,
								onClick: i.onClick,
								variant: "default",
								icon: i.icon,
								disabled: i.disabled,
								tooltip: i.tooltip,
								loading: i.loading
							})
						}),
						_ && b(i) && /* @__PURE__ */ G("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ G(ku, {
								items: i.items,
								onClick: i.onClick,
								variant: "default",
								value: i.value,
								size: "md",
								disabled: i.disabled,
								tooltip: i.tooltip,
								loading: i.loading
							})
						}),
						d && /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }), /* @__PURE__ */ G("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ G(ve, {
								label: p.actions.close,
								hideLabel: !0,
								icon: Ut,
								variant: "outline",
								onClick: d
							})
						})] })
					]
				})
			]
		}), m.length > 0 && /* @__PURE__ */ G("div", {
			className: "hidden flex-wrap items-center gap-x-3 gap-y-1 md:block",
			children: /* @__PURE__ */ G(Vg, {
				items: m,
				rowGap: l
			})
		})]
	});
}
var Wg = (e) => "items" in e, Gg = z(({ ...e }, t) => /* @__PURE__ */ G("nav", {
	ref: t,
	"aria-label": "breadcrumb",
	...e
}));
Gg.displayName = "Breadcrumb";
var Kg = z(({ className: e, children: t, ...n }, r) => {
	let i = Cn();
	return /* @__PURE__ */ G("ol", {
		ref: r,
		className: C("flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary", e),
		...n,
		children: /* @__PURE__ */ G(Rn, {
			id: i,
			children: /* @__PURE__ */ G(g, {
				initial: !1,
				children: t
			})
		})
	});
});
Kg.displayName = "BreadcrumbList";
var qg = ({ className: e, ...t }) => /* @__PURE__ */ G("li", {
	className: C("inline-flex items-center gap-0.5 pr-1", e),
	...t
});
qg.displayName = "BreadcrumbItem";
var Jg = z(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ G(e ? w : ye, {
	ref: r,
	className: C("rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", t),
	...n
}));
Jg.displayName = "BreadcrumbLink";
var Yg = z(({ className: e, ...t }, n) => /* @__PURE__ */ G("span", {
	ref: n,
	role: "link",
	"aria-disabled": "true",
	"aria-current": "page",
	className: C("truncate px-1.5 py-0.5 text-f1-foreground", e),
	...t
}));
Yg.displayName = "BreadcrumbPage";
var Xg = (e) => e && "type" in e && e.type === "collection-select" ? `collection-select-${e.collectionId}` : e?.id, Zg = z((e, t) => /* @__PURE__ */ G("span", {
	ref: t,
	role: "presentation",
	"aria-hidden": "true",
	className: "h-4 w-4 text-f1-icon-secondary",
	...e,
	children: /* @__PURE__ */ G(ht, {})
}));
Zg.displayName = "BreadcrumbSeparator";
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbSelect/index.tsx
function Qg({ ...e }) {
	let [t, n] = W(e.open), r = (t) => {
		n(t), e.onOpenChange?.(t);
	}, i = e.placeholder || e.label, [a, s] = W(i), [c, l] = W(i);
	c !== i && (l(i), s(i));
	let u = (t, n, r) => {
		e.onChange?.(t, n, r);
	}, d = (e) => {
		s(e?.label || "");
	};
	return /* @__PURE__ */ G(HS, {
		...e,
		onOpenChange: r,
		onChange: u,
		onChangeSelectedOption: d,
		label: a,
		hideLabel: !0,
		children: /* @__PURE__ */ K("button", {
			className: "flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
			"aria-label": a,
			children: [/* @__PURE__ */ G("span", {
				className: "block grow text-f1-foreground",
				children: a
			}), /* @__PURE__ */ G("div", {
				className: "ml-2",
				children: /* @__PURE__ */ G(h.div, {
					animate: { rotate: t ? 180 : 0 },
					className: "h-[16px] w-[16px]",
					children: /* @__PURE__ */ G(o, {
						icon: Fe,
						size: "sm",
						className: "rounded-2xs bg-f1-background-secondary p-0.5"
					})
				})
			})]
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-switch@1.2.6_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-switch/dist/index.mjs
var $g = "Switch", [e_, t_] = ee($g), [n_, r_] = e_($g), i_ = L.forwardRef((e, t) => {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c = "on", onCheckedChange: l, form: u, ...d } = e, [f, p] = L.useState(null), m = k(t, (e) => p(e)), h = L.useRef(!1), g = !f || u || !!f.closest("form"), [_, v] = se({
		prop: i,
		defaultProp: a ?? !1,
		onChange: l,
		caller: $g
	});
	return /* @__PURE__ */ K(n_, {
		scope: n,
		checked: _,
		disabled: s,
		children: [/* @__PURE__ */ G(O.button, {
			type: "button",
			role: "switch",
			"aria-checked": _,
			"aria-required": o,
			"data-state": l_(_),
			"data-disabled": s ? "" : void 0,
			disabled: s,
			value: c,
			...d,
			ref: m,
			onClick: D(e.onClick, (e) => {
				v((e) => !e), g && (h.current = e.isPropagationStopped(), h.current || e.stopPropagation());
			})
		}), g && /* @__PURE__ */ G(c_, {
			control: f,
			bubbles: !h.current,
			name: r,
			value: c,
			checked: _,
			required: o,
			disabled: s,
			form: u,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
i_.displayName = $g;
var a_ = "SwitchThumb", o_ = L.forwardRef((e, t) => {
	let { __scopeSwitch: n, ...r } = e, i = r_(a_, n);
	return /* @__PURE__ */ G(O.span, {
		"data-state": l_(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
o_.displayName = a_;
var s_ = "SwitchBubbleInput", c_ = L.forwardRef(({ __scopeSwitch: e, control: t, checked: n, bubbles: r = !0, ...i }, a) => {
	let o = L.useRef(null), s = k(o, a), c = ju(n), l = oe(t);
	return L.useEffect(() => {
		let e = o.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, i = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (c !== n && i) {
			let t = new Event("click", { bubbles: r });
			i.call(e, n), e.dispatchEvent(t);
		}
	}, [
		c,
		n,
		r
	]), /* @__PURE__ */ G("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: n,
		...i,
		tabIndex: -1,
		ref: s,
		style: {
			...i.style,
			...l,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
c_.displayName = s_;
function l_(e) {
	return e ? "checked" : "unchecked";
}
var u_ = i_, d_ = o_;
//#endregion
//#region src/experimental/Navigation/Header/PageNavigation/index.tsx
function f_({ icon: e, target: t, fallbackLabel: n }) {
	let r = !t, i = t?.title || n, a = t?.onClick, o = a ? void 0 : t?.url;
	return /* @__PURE__ */ G(me, {
		...a ? {
			onClick: a,
			type: "button"
		} : { href: o ?? "" },
		title: r ? void 0 : i,
		"aria-label": i,
		disabled: r,
		noAutoTooltip: r,
		noTitle: r,
		size: "sm",
		variant: "outline",
		label: i,
		icon: e,
		hideLabel: !0
	});
}
function p_({ previous: e, next: t, counter: n }) {
	return /* @__PURE__ */ K("div", {
		className: "flex items-center gap-3",
		children: [n && /* @__PURE__ */ K("span", {
			className: "text-sm text-f1-foreground-secondary",
			children: [
				n.current,
				"/",
				n.total
			]
		}), /* @__PURE__ */ K("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ G(f_, {
				icon: Vn,
				target: e,
				fallbackLabel: "Previous"
			}), /* @__PURE__ */ G(f_, {
				icon: ht,
				target: t,
				fallbackLabel: "Next"
			})]
		})]
	});
}
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbSkeleton.tsx
var m_ = z((e, t) => /* @__PURE__ */ G("div", {
	ref: t,
	className: "px-1.5",
	...e,
	children: /* @__PURE__ */ G(he, {
		className: "h-4 w-24",
		"aria-hidden": "true"
	})
}));
m_.displayName = "BreadcrumbSkeleton";
//#endregion
//#region src/lib/providers/datacollection/dataCollectionStorageKey.ts
var h_ = (e) => `datacollection-${e}`, g_ = {
	get: () => ({}),
	set: () => Promise.resolve()
}, __ = R(g_), v_ = ({ children: e, handler: t }) => /* @__PURE__ */ G(__.Provider, {
	value: t ?? g_,
	children: e
}), y_ = () => {
	let e = xn(__);
	if (!e) throw Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
	return e;
}, b_ = /* @__PURE__ */ new Map(), x_ = (e, t) => {
	let n = b_.get(e);
	return n || (n = /* @__PURE__ */ new Set(), b_.set(e, n)), n.add(t), () => {
		n.delete(t), n.size === 0 && b_.delete(e);
	};
}, S_ = (e) => {
	b_.get(e)?.forEach((e) => e());
}, C_ = (e) => {
	try {
		let t = localStorage.getItem(h_(e));
		return t === null ? null : JSON.parse(t);
	} catch {
		return null;
	}
}, w_ = (e) => {
	if (e) return e.visualizationFilters?.[String(e.visualization ?? 0)] ?? e.filters;
}, T_ = (e, t) => {
	let n = String(e.visualization ?? 0), r = e.visualizationFilters?.[n] !== void 0;
	return {
		...e,
		filters: t,
		...r ? { visualizationFilters: {
			...e.visualizationFilters,
			[n]: t
		} } : {}
	};
};
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbCollectionSelect/buildCollectionBoundSource.ts
function E_(e, t, n) {
	let r = n?.seed?.filters ?? !0, i = n?.seed?.sortings ?? !0, a = n?.showFilters ?? !1, o = e.currentFilters;
	if (r && t) {
		let n = w_(t);
		if (n !== void 0) {
			let t = e.filters, r = t ? Object.fromEntries(Object.entries(n).filter(([e]) => e in t)) : n;
			(Object.keys(r).length > 0 || Object.keys(n).length === 0) && (o = r);
		}
	}
	let s = e.currentSortings;
	i && t && t.sortings !== void 0 && (t.sortings === null ? s = null : e.sortings && t.sortings.field in e.sortings && (s = {
		field: t.sortings.field,
		order: t.sortings.order
	}));
	let { filters: c, presets: l, presetsLoading: u, ...d } = e;
	return {
		...d,
		...a && c ? { filters: c } : {},
		currentFilters: o,
		currentSortings: s,
		dataAdapter: Zh(e.dataAdapter)
	};
}
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbCollectionSelect/index.tsx
function D_({ item: e }) {
	let [t] = W(() => E_(e.source, C_(e.collectionId), {
		seed: e.seed,
		showFilters: e.showFilters
	})), n = U(e);
	n.current = e;
	let r = y_(), i = U(r);
	i.current = r;
	let a = B((e) => n.current.mapOptions(e), []), o = B((e) => {
		let t = n.current;
		t.onFiltersChange?.(e), t.showFilters && (async () => {
			let n = await i.current.get(t.collectionId);
			await i.current.set(t.collectionId, T_(n ?? {}, e)), S_(t.collectionId);
		})().catch(() => {});
	}, []), [s, c] = W(null), l = U(null);
	Tn(() => {
		s && (l.current?.click(), c(null));
	}, [s]);
	let u = B((e, t) => {
		let r = n.current;
		if (e === void 0 || e === r.value) return;
		let i = r.getItemHref?.(e, t);
		i && c(i), r.onSelect?.(e, t);
	}, []);
	return /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G(Qg, {
		label: e.label,
		hideLabel: !0,
		source: t,
		mapOptions: a,
		defaultItem: e.defaultItem,
		clearable: !1,
		onChange: u,
		value: e.value,
		showSearchBox: e.searchbox,
		onFiltersChange: o
	}), s && /* @__PURE__ */ G(ye, {
		href: s,
		ref: l,
		tabIndex: -1,
		"aria-hidden": !0,
		className: "hidden"
	})] });
}
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem.tsx
var O_ = z(({ item: e, isLast: t, isOnly: n = !1, isFirst: r = !1, children: i }, a) => /* @__PURE__ */ K(qg, {
	ref: a,
	children: [
		!r && /* @__PURE__ */ G(Zg, {}),
		/* @__PURE__ */ G(k_, {
			item: e,
			isLast: t,
			isOnly: n,
			isFirst: r
		}),
		i
	]
}, Xg(e)));
O_.displayName = "BreadcrumbItem";
var k_ = z(({ item: e, isLast: t, isOnly: n = !1, isFirst: r = !1 }, i) => {
	let a = "loading" in e && e.loading, o = a ? "loading" : "type" in e && e.type ? e.type : t || n ? "page" : "link", s = /* @__PURE__ */ K(h.div, {
		layoutId: `breadcrumb-${e.id}`,
		className: C("flex items-center gap-2 px-1.5", r && "pl-0", n && "text-2xl font-semibold"),
		transition: { duration: .15 },
		children: [!a && "module" in e && e.module && (n || r) && /* @__PURE__ */ G($t, {
			module: e.module,
			size: n ? "md" : "xs"
		}), /* @__PURE__ */ G("span", {
			className: "truncate",
			children: !a && "label" in e ? e.label : ""
		})]
	}), c = {
		loading: /* @__PURE__ */ G(m_, {}),
		select: "type" in e && e.type === "select" && (e.options || e.source) && /* @__PURE__ */ G(An, { children: /* @__PURE__ */ G(Qg, {
			label: e.label,
			hideLabel: !0,
			source: e.source,
			options: e.options,
			mapOptions: e.mapOptions,
			defaultItem: e.defaultItem,
			clearable: !1,
			onChange: e.onChange,
			value: e.value,
			showSearchBox: e.searchbox
		}) }),
		"collection-select": "type" in e && e.type === "collection-select" && /* @__PURE__ */ G(D_, { item: e }),
		page: /* @__PURE__ */ G(Yg, {
			"aria-hidden": "true",
			className: "p-0",
			children: s
		}),
		link: /* @__PURE__ */ G(Jg, {
			asChild: !0,
			className: "p-0",
			children: /* @__PURE__ */ G(ye, {
				..."href" in e && !("type" in e) ? e : {},
				className: "block",
				children: s
			})
		})
	}, l = o === "select" || o === "collection-select";
	return /* @__PURE__ */ G(h.div, {
		ref: i,
		layout: !l,
		className: C(a && "max-w-40"),
		transition: { duration: .15 },
		children: c[o]
	});
});
k_.displayName = "BreadcrumbContent";
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_reac_6232f8da9b78ecdf4e0098cbb7814d3f/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var A_ = "VisuallyHidden", j_ = L.forwardRef((e, t) => /* @__PURE__ */ G(pn.span, {
	...e,
	ref: t,
	style: {
		position: "absolute",
		border: 0,
		width: 1,
		height: 1,
		padding: 0,
		margin: -1,
		overflow: "hidden",
		clip: "rect(0, 0, 0, 0)",
		whiteSpace: "nowrap",
		wordWrap: "normal",
		...e.style
	}
}));
j_.displayName = A_;
var M_ = j_, N_ = "NavigationMenu", [P_, F_, I_] = Z(N_), [L_, R_, z_] = Z(N_), [B_, V_] = cn(N_, [I_, z_]), [H_, U_] = B_(N_), [W_, G_] = B_(N_), K_ = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, delayDuration: o = 200, skipDelayDuration: s = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, f] = L.useState(null), p = mn(t, (e) => f(e)), m = Ue(l), h = L.useRef(0), g = L.useRef(0), _ = L.useRef(0), [v, y] = L.useState(!0), [b = "", x] = hn({
		prop: r,
		onChange: (e) => {
			let t = e !== "", n = s > 0;
			t ? (window.clearTimeout(_.current), n && y(!1)) : (window.clearTimeout(_.current), _.current = window.setTimeout(() => y(!0), s)), i?.(e);
		},
		defaultProp: a
	}), S = L.useCallback(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => x(""), 150);
	}, [x]), C = L.useCallback((e) => {
		window.clearTimeout(g.current), x(e);
	}, [x]), w = L.useCallback((e) => {
		b === e ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
			window.clearTimeout(g.current), x(e);
		}, o);
	}, [
		b,
		x,
		o
	]);
	return L.useEffect(() => () => {
		window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(_.current);
	}, []), /* @__PURE__ */ G(Y_, {
		scope: n,
		isRootMenu: !0,
		value: b,
		dir: m,
		orientation: c,
		rootNavigationMenu: d,
		onTriggerEnter: (e) => {
			window.clearTimeout(h.current), v ? w(e) : C(e);
		},
		onTriggerLeave: () => {
			window.clearTimeout(h.current), S();
		},
		onContentEnter: () => window.clearTimeout(g.current),
		onContentLeave: S,
		onItemSelect: (e) => {
			x((t) => t === e ? "" : e);
		},
		onItemDismiss: () => x(""),
		children: /* @__PURE__ */ G(pn.nav, {
			"aria-label": "Main",
			"data-orientation": c,
			dir: m,
			...u,
			ref: p
		})
	});
});
K_.displayName = N_;
var q_ = "NavigationMenuSub", J_ = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", ...s } = e, c = U_(q_, n), [l = "", u] = hn({
		prop: r,
		onChange: i,
		defaultProp: a
	});
	return /* @__PURE__ */ G(Y_, {
		scope: n,
		isRootMenu: !1,
		value: l,
		dir: c.dir,
		orientation: o,
		rootNavigationMenu: c.rootNavigationMenu,
		onTriggerEnter: (e) => u(e),
		onItemSelect: (e) => u(e),
		onItemDismiss: () => u(""),
		children: /* @__PURE__ */ G(pn.div, {
			"data-orientation": o,
			...s,
			ref: t
		})
	});
});
J_.displayName = q_;
var Y_ = (e) => {
	let { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: i, orientation: a, children: o, value: s, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: p } = e, [m, h] = L.useState(null), [g, _] = L.useState(/* @__PURE__ */ new Map()), [v, y] = L.useState(null);
	return /* @__PURE__ */ G(H_, {
		scope: t,
		isRootMenu: n,
		rootNavigationMenu: r,
		value: s,
		previousValue: Ct(s),
		baseId: Mt(),
		dir: i,
		orientation: a,
		viewport: m,
		onViewportChange: h,
		indicatorTrack: v,
		onIndicatorTrackChange: y,
		onTriggerEnter: un(u),
		onTriggerLeave: un(d),
		onContentEnter: un(f),
		onContentLeave: un(p),
		onItemSelect: un(c),
		onItemDismiss: un(l),
		onViewportContentChange: L.useCallback((e, t) => {
			_((n) => (n.set(e, t), new Map(n)));
		}, []),
		onViewportContentRemove: L.useCallback((e) => {
			_((t) => t.has(e) ? (t.delete(e), new Map(t)) : t);
		}, []),
		children: /* @__PURE__ */ G(P_.Provider, {
			scope: t,
			children: /* @__PURE__ */ G(W_, {
				scope: t,
				items: g,
				children: o
			})
		})
	});
}, X_ = "NavigationMenuList", Z_ = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = U_(X_, n), a = /* @__PURE__ */ G(pn.ul, {
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
	return /* @__PURE__ */ G(pn.div, {
		style: { position: "relative" },
		ref: i.onIndicatorTrackChange,
		children: /* @__PURE__ */ G(P_.Slot, {
			scope: n,
			children: i.isRootMenu ? /* @__PURE__ */ G(yv, {
				asChild: !0,
				children: a
			}) : a
		})
	});
});
Z_.displayName = X_;
var Q_ = "NavigationMenuItem", [$_, ev] = B_(Q_), tv = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, ...i } = e, a = Mt(), o = r || a || "LEGACY_REACT_AUTO_VALUE", s = L.useRef(null), c = L.useRef(null), l = L.useRef(null), u = L.useRef(() => {}), d = L.useRef(!1), f = L.useCallback((e = "start") => {
		if (s.current) {
			u.current();
			let t = Cv(s.current);
			t.length && wv(e === "start" ? t : t.reverse());
		}
	}, []), p = L.useCallback(() => {
		if (s.current) {
			let e = Cv(s.current);
			e.length && (u.current = Tv(e));
		}
	}, []);
	return /* @__PURE__ */ G($_, {
		scope: n,
		value: o,
		triggerRef: c,
		contentRef: s,
		focusProxyRef: l,
		wasEscapeCloseRef: d,
		onEntryKeyDown: f,
		onFocusProxyEnter: f,
		onRootContentClose: p,
		onContentFocusOutside: p,
		children: /* @__PURE__ */ G(pn.li, {
			...i,
			ref: t
		})
	});
});
tv.displayName = Q_;
var nv = "NavigationMenuTrigger", rv = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, disabled: r, ...i } = e, a = U_(nv, e.__scopeNavigationMenu), o = ev(nv, e.__scopeNavigationMenu), s = L.useRef(null), c = mn(s, o.triggerRef, t), l = Ov(a.baseId, o.value), u = kv(a.baseId, o.value), d = L.useRef(!1), f = L.useRef(!1), p = o.value === a.value;
	return /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G(P_.ItemSlot, {
		scope: n,
		value: o.value,
		children: /* @__PURE__ */ G(Sv, {
			asChild: !0,
			children: /* @__PURE__ */ G(pn.button, {
				id: l,
				disabled: r,
				"data-disabled": r ? "" : void 0,
				"data-state": Dv(p),
				"aria-expanded": p,
				"aria-controls": u,
				...i,
				ref: c,
				onPointerEnter: dn(e.onPointerEnter, () => {
					f.current = !1, o.wasEscapeCloseRef.current = !1;
				}),
				onPointerMove: dn(e.onPointerMove, Av(() => {
					r || f.current || o.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(o.value), d.current = !0);
				})),
				onPointerLeave: dn(e.onPointerLeave, Av(() => {
					r || (a.onTriggerLeave(), d.current = !1);
				})),
				onClick: dn(e.onClick, () => {
					a.onItemSelect(o.value), f.current = p;
				}),
				onKeyDown: dn(e.onKeyDown, (e) => {
					let t = {
						horizontal: "ArrowDown",
						vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
					}[a.orientation];
					p && e.key === t && (o.onEntryKeyDown(), e.preventDefault());
				})
			})
		})
	}), p && /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G(M_, {
		"aria-hidden": !0,
		tabIndex: 0,
		ref: o.focusProxyRef,
		onFocus: (e) => {
			let t = o.contentRef.current, n = e.relatedTarget, r = n === s.current, i = t?.contains(n);
			(r || !i) && o.onFocusProxyEnter(r ? "start" : "end");
		}
	}), a.viewport && /* @__PURE__ */ G("span", { "aria-owns": u })] })] });
});
rv.displayName = nv;
var iv = "NavigationMenuLink", av = "navigationMenu.linkSelect", ov = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, active: r, onSelect: i, ...a } = e;
	return /* @__PURE__ */ G(Sv, {
		asChild: !0,
		children: /* @__PURE__ */ G(pn.a, {
			"data-active": r ? "" : void 0,
			"aria-current": r ? "page" : void 0,
			...a,
			ref: t,
			onClick: dn(e.onClick, (e) => {
				let t = e.target, n = new CustomEvent(av, {
					bubbles: !0,
					cancelable: !0
				});
				if (t.addEventListener(av, (e) => i?.(e), { once: !0 }), ln(t, n), !n.defaultPrevented && !e.metaKey) {
					let e = new CustomEvent(pv, {
						bubbles: !0,
						cancelable: !0
					});
					ln(t, e);
				}
			}, { checkForDefaultPrevented: !1 })
		})
	});
});
ov.displayName = iv;
var sv = "NavigationMenuIndicator", cv = L.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = U_(sv, e.__scopeNavigationMenu), a = !!i.value;
	return i.indicatorTrack ? On.createPortal(/* @__PURE__ */ G(Lt, {
		present: n || a,
		children: /* @__PURE__ */ G(lv, {
			...r,
			ref: t
		})
	}), i.indicatorTrack) : null;
});
cv.displayName = sv;
var lv = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = U_(sv, n), a = F_(n), [o, s] = L.useState(null), [c, l] = L.useState(null), u = i.orientation === "horizontal", d = !!i.value;
	L.useEffect(() => {
		let e = a().find((e) => e.value === i.value)?.ref.current;
		e && s(e);
	}, [a, i.value]);
	let f = () => {
		o && l({
			size: u ? o.offsetWidth : o.offsetHeight,
			offset: u ? o.offsetLeft : o.offsetTop
		});
	};
	return Ev(o, f), Ev(i.indicatorTrack, f), c ? /* @__PURE__ */ G(pn.div, {
		"aria-hidden": !0,
		"data-state": d ? "visible" : "hidden",
		"data-orientation": i.orientation,
		...r,
		ref: t,
		style: {
			position: "absolute",
			...u ? {
				left: 0,
				width: c.size + "px",
				transform: `translateX(${c.offset}px)`
			} : {
				top: 0,
				height: c.size + "px",
				transform: `translateY(${c.offset}px)`
			},
			...r.style
		}
	}) : null;
}), uv = "NavigationMenuContent", dv = L.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = U_(uv, e.__scopeNavigationMenu), a = ev(uv, e.__scopeNavigationMenu), o = mn(a.contentRef, t), s = a.value === i.value, c = {
		value: a.value,
		triggerRef: a.triggerRef,
		focusProxyRef: a.focusProxyRef,
		wasEscapeCloseRef: a.wasEscapeCloseRef,
		onContentFocusOutside: a.onContentFocusOutside,
		onRootContentClose: a.onRootContentClose,
		...r
	};
	return i.viewport ? /* @__PURE__ */ G(fv, {
		forceMount: n,
		...c,
		ref: o
	}) : /* @__PURE__ */ G(Lt, {
		present: n || s,
		children: /* @__PURE__ */ G(mv, {
			"data-state": Dv(s),
			...c,
			ref: o,
			onPointerEnter: dn(e.onPointerEnter, i.onContentEnter),
			onPointerLeave: dn(e.onPointerLeave, Av(i.onContentLeave)),
			style: {
				pointerEvents: !s && i.isRootMenu ? "none" : void 0,
				...c.style
			}
		})
	});
});
dv.displayName = uv;
var fv = L.forwardRef((e, t) => {
	let { onViewportContentChange: n, onViewportContentRemove: r } = U_(uv, e.__scopeNavigationMenu);
	return sn(() => {
		n(e.value, {
			ref: t,
			...e
		});
	}, [
		e,
		t,
		n
	]), sn(() => () => r(e.value), [e.value, r]), null;
}), pv = "navigationMenu.rootContentDismiss", mv = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, triggerRef: i, focusProxyRef: a, wasEscapeCloseRef: o, onRootContentClose: s, onContentFocusOutside: c, ...l } = e, u = U_(uv, n), d = L.useRef(null), f = mn(d, t), p = Ov(u.baseId, r), m = kv(u.baseId, r), h = F_(n), g = L.useRef(null), { onItemDismiss: _ } = u;
	L.useEffect(() => {
		let e = d.current;
		if (u.isRootMenu && e) {
			let t = () => {
				_(), s(), e.contains(document.activeElement) && i.current?.focus();
			};
			return e.addEventListener(pv, t), () => e.removeEventListener(pv, t);
		}
	}, [
		u.isRootMenu,
		e.value,
		i,
		_,
		s
	]);
	let v = L.useMemo(() => {
		let e = h().map((e) => e.value);
		u.dir === "rtl" && e.reverse();
		let t = e.indexOf(u.value), n = e.indexOf(u.previousValue), i = r === u.value, a = n === e.indexOf(r);
		if (!i && !a) return g.current;
		let o = (() => {
			if (t !== n) {
				if (i && n !== -1) return t > n ? "from-end" : "from-start";
				if (a && t !== -1) return t > n ? "to-start" : "to-end";
			}
			return null;
		})();
		return g.current = o, o;
	}, [
		u.previousValue,
		u.value,
		u.dir,
		h,
		r
	]);
	return /* @__PURE__ */ G(yv, {
		asChild: !0,
		children: /* @__PURE__ */ G(Ft, {
			id: m,
			"aria-labelledby": p,
			"data-motion": v,
			"data-orientation": u.orientation,
			...l,
			ref: f,
			disableOutsidePointerEvents: !1,
			onDismiss: () => {
				let e = new Event(pv, {
					bubbles: !0,
					cancelable: !0
				});
				d.current?.dispatchEvent(e);
			},
			onFocusOutside: dn(e.onFocusOutside, (e) => {
				c();
				let t = e.target;
				u.rootNavigationMenu?.contains(t) && e.preventDefault();
			}),
			onPointerDownOutside: dn(e.onPointerDownOutside, (e) => {
				let t = e.target, n = h().some((e) => e.ref.current?.contains(t)), r = u.isRootMenu && u.viewport?.contains(t);
				(n || r || !u.isRootMenu) && e.preventDefault();
			}),
			onKeyDown: dn(e.onKeyDown, (e) => {
				let t = e.altKey || e.ctrlKey || e.metaKey;
				if (e.key === "Tab" && !t) {
					let t = Cv(e.currentTarget), n = document.activeElement, r = t.findIndex((e) => e === n);
					wv(e.shiftKey ? t.slice(0, r).reverse() : t.slice(r + 1, t.length)) ? e.preventDefault() : a.current?.focus();
				}
			}),
			onEscapeKeyDown: dn(e.onEscapeKeyDown, (e) => {
				o.current = !0;
			})
		})
	});
}), hv = "NavigationMenuViewport", gv = L.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = !!U_(hv, e.__scopeNavigationMenu).value;
	return /* @__PURE__ */ G(Lt, {
		present: n || i,
		children: /* @__PURE__ */ G(_v, {
			...r,
			ref: t
		})
	});
});
gv.displayName = hv;
var _v = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, children: r, ...i } = e, a = U_(hv, n), o = mn(t, a.onViewportChange), s = G_(uv, e.__scopeNavigationMenu), [c, l] = L.useState(null), [u, d] = L.useState(null), f = c ? c?.width + "px" : void 0, p = c ? c?.height + "px" : void 0, m = !!a.value, h = m ? a.value : a.previousValue;
	return Ev(u, () => {
		u && l({
			width: u.offsetWidth,
			height: u.offsetHeight
		});
	}), /* @__PURE__ */ G(pn.div, {
		"data-state": Dv(m),
		"data-orientation": a.orientation,
		...i,
		ref: o,
		style: {
			pointerEvents: !m && a.isRootMenu ? "none" : void 0,
			"--radix-navigation-menu-viewport-width": f,
			"--radix-navigation-menu-viewport-height": p,
			...i.style
		},
		onPointerEnter: dn(e.onPointerEnter, a.onContentEnter),
		onPointerLeave: dn(e.onPointerLeave, Av(a.onContentLeave)),
		children: Array.from(s.items).map(([e, { ref: t, forceMount: n, ...r }]) => {
			let i = h === e;
			return /* @__PURE__ */ G(Lt, {
				present: n || i,
				children: /* @__PURE__ */ G(mv, {
					...r,
					ref: fn(t, (e) => {
						i && e && d(e);
					})
				})
			}, e);
		})
	});
}), vv = "FocusGroup", yv = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = U_(vv, n);
	return /* @__PURE__ */ G(L_.Provider, {
		scope: n,
		children: /* @__PURE__ */ G(L_.Slot, {
			scope: n,
			children: /* @__PURE__ */ G(pn.div, {
				dir: i.dir,
				...r,
				ref: t
			})
		})
	});
}), bv = [
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown"
], xv = "FocusGroupItem", Sv = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = R_(n), a = U_(xv, n);
	return /* @__PURE__ */ G(L_.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ G(pn.button, {
			...r,
			ref: t,
			onKeyDown: dn(e.onKeyDown, (e) => {
				if ([
					"Home",
					"End",
					...bv
				].includes(e.key)) {
					let t = i().map((e) => e.ref.current);
					if ([
						a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
						"ArrowUp",
						"End"
					].includes(e.key) && t.reverse(), bv.includes(e.key)) {
						let n = t.indexOf(e.currentTarget);
						t = t.slice(n + 1);
					}
					setTimeout(() => wv(t)), e.preventDefault();
				}
			})
		})
	});
});
function Cv(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function wv(e) {
	let t = document.activeElement;
	return e.some((e) => e === t || (e.focus(), document.activeElement !== t));
}
function Tv(e) {
	return e.forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	}), () => {
		e.forEach((e) => {
			let t = e.dataset.tabindex;
			e.setAttribute("tabindex", t);
		});
	};
}
function Ev(e, t) {
	let n = un(t);
	sn(() => {
		let t = 0;
		if (e) {
			let r = new ResizeObserver(() => {
				cancelAnimationFrame(t), t = window.requestAnimationFrame(n);
			});
			return r.observe(e), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
	}, [e, n]);
}
function Dv(e) {
	return e ? "open" : "closed";
}
function Ov(e, t) {
	return `${e}-trigger-${t}`;
}
function kv(e, t) {
	return `${e}-content-${t}`;
}
function Av(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var jv = K_, Mv = Z_, Nv = tv, Pv = ov;
//#endregion
//#region src/ui/tab-navigation.tsx
function Fv(e, t) {
	let { asChild: n, children: r } = e;
	if (!n) return typeof t == "function" ? t(r) : t;
	let i = L.Children.only(r);
	return L.cloneElement(i, { children: typeof t == "function" ? t(i.props.children) : t });
}
var Iv = n({
	base: "relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-page py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
	variants: { secondary: {
		true: "bg-f1-foreground/[.02] dark:bg-f1-foreground/[.02]",
		false: "bg-f1-background-transparent pt-1"
	} },
	defaultVariants: { secondary: !1 }
}), Lv = L.forwardRef(({ className: e, children: t, secondary: n, ...r }, i) => {
	let a = Cn();
	return /* @__PURE__ */ K(jv, {
		ref: i,
		...r,
		asChild: !1,
		className: "relative",
		children: [/* @__PURE__ */ G("div", { className: "absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary" }), /* @__PURE__ */ G(Rn, {
			id: a,
			children: /* @__PURE__ */ G(Mv, {
				className: C(Iv({ secondary: n }), e),
				children: t
			})
		})]
	});
});
Lv.displayName = "TabNavigation";
var Rv = n({
	base: "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
	variants: {
		secondary: {
			true: "group-hover:ring-f1-border group-data-[active=true]:bg-f1-background-inverse-secondary dark:group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground group-data-[active=true]:ring-f1-border",
			false: "bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground"
		},
		disabled: { true: "pointer-events-none text-f1-foreground-disabled" }
	},
	defaultVariants: {
		secondary: !1,
		disabled: !1
	}
}), zv = L.forwardRef(function({ asChild: e, disabled: t, active: n, className: r, children: i, secondary: a, ...o }, s) {
	return /* @__PURE__ */ G(Nv, {
		className: "flex",
		children: /* @__PURE__ */ G(Pv, {
			"data-active": n ? "true" : void 0,
			"aria-disabled": t || void 0,
			className: C("group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", t ? "pointer-events-none" : ""),
			ref: s,
			onSelect: () => {},
			asChild: e,
			...o,
			children: Fv({
				asChild: e,
				children: i
			}, (e) => /* @__PURE__ */ K("span", {
				className: C("text-f1-foreground-secondary ring-1 ring-inset ring-transparent", Rv({
					secondary: a,
					disabled: t
				}), r),
				children: [e, n && !a && /* @__PURE__ */ G(h.div, {
					layoutId: "underline",
					className: "absolute inset-x-0 -bottom-3 h-px bg-f1-background-inverse",
					transition: {
						type: "spring",
						bounce: .2,
						duration: .5
					}
				})]
			}))
		})
	});
}), Bv = F(zv, ({ className: e }) => /* @__PURE__ */ G("li", {
	className: "list-none",
	children: /* @__PURE__ */ G(he, {
		className: C("mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent", e),
		children: "\xA0"
	})
})), Vv = ({ tabs: e, activeTabId: t, setActiveTabId: n, secondary: r = !1, embedded: i = !1 }) => {
	let a = e[0], [s, c] = W(t ?? ("id" in a ? a.id : void 0));
	V(() => {
		s && n?.(s);
	}, [n, s]);
	let { isActive: l } = _e(), u = i ? [e[0]] : e, d = [...u].sort((e, t) => e.index ? 1 : t.index ? -1 : 0).find((e) => "href" in e ? l(e.href) : s === e.id);
	return /* @__PURE__ */ G(Lv, {
		secondary: r,
		asChild: !0,
		"aria-label": r ? "primary-navigation" : "secondary-navigation",
		children: u.length === 1 ? /* @__PURE__ */ G("li", {
			className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground",
			children: u[0].label
		}) : u.map(({ label: e, ...t }, n) => {
			let i = d && "href" in d && "href" in t ? d.href === t.href : "id" in t && s === t.id;
			return /* @__PURE__ */ G(Bv, {
				active: i,
				href: "href" in t ? t.href : void 0,
				onClick: () => {
					"id" in t && c?.(t.id);
				},
				secondary: r,
				asChild: !0,
				children: /* @__PURE__ */ K(ye, {
					role: "link",
					...t,
					children: [t.variant === "upsell" && /* @__PURE__ */ G(o, {
						icon: er,
						size: "md",
						className: "mr-1 text-[hsl(var(--promote-50))]"
					}), e]
				})
			}, n);
		})
	});
}, Hv = ({ secondary: e }) => /* @__PURE__ */ K(Lv, {
	"aria-label": e ? "Secondary empty nav" : "Main empty nav",
	secondary: e,
	"aria-busy": "true",
	"aria-live": "polite",
	children: [
		/* @__PURE__ */ G(Bv.Skeleton, { className: "w-24" }),
		/* @__PURE__ */ G(Bv.Skeleton, { className: "w-20" }),
		/* @__PURE__ */ G(Bv.Skeleton, { className: "w-28" }),
		/* @__PURE__ */ G(Bv.Skeleton, { className: "w-20" })
	]
}), Uv = r(m("Tabs", F(Vv, Hv))), Wv = ({ title: e, description: t, module: n, otherActions: r, navigation: i, resourceHeader: a, controls: o, headerStatus: s, dismissable: c = !0, tabs: l, activeTabId: u, setActiveTabId: d }) => {
	let p = f(), { onClose: m } = wg(), h = !!l, g = () => /* @__PURE__ */ G("div", { className: "h-4 w-px self-center bg-f1-background-secondary" }), _ = r?.filter((e) => e.type !== "separator" && e.type !== "label") ?? [], v = () => {
		if (!_.length || !r) return null;
		let e = _.some((e) => e.critical);
		return _.length <= 2 && !e ? /* @__PURE__ */ G("div", {
			className: "flex flex-row gap-2",
			children: _.map((e) => /* @__PURE__ */ G(me, {
				variant: "outline",
				icon: e.icon,
				onClick: e.onClick,
				label: e.label,
				hideLabel: !0
			}, e.label))
		}) : /* @__PURE__ */ G(kt, {
			items: r,
			icon: we
		});
	}, y = () => n ? /* @__PURE__ */ G(Kg, { children: /* @__PURE__ */ G(O_, {
		item: {
			id: n.id,
			label: n.label,
			href: n.href,
			module: n.id
		},
		isLast: !1,
		isFirst: !0
	}) }) : null, b = () => s ? /* @__PURE__ */ G("span", {
		className: "whitespace-nowrap text-f1-foreground-secondary",
		children: s
	}) : null, x = () => c ? /* @__PURE__ */ G(me, {
		variant: "outline",
		icon: Ut,
		onClick: m,
		label: p.actions.close,
		hideLabel: !0
	}) : null, S = () => l ? /* @__PURE__ */ G("div", {
		className: "shrink-0 overflow-hidden",
		children: /* @__PURE__ */ G("div", {
			className: "-mx-2",
			children: /* @__PURE__ */ G(Uv, {
				tabs: l,
				activeTabId: u,
				setActiveTabId: d
			})
		})
	}) : null;
	return a || o ? /* @__PURE__ */ K(An, { children: [
		/* @__PURE__ */ K("div", {
			className: "flex flex-row items-center justify-between gap-3 px-4 py-3",
			children: [/* @__PURE__ */ G("div", {
				className: "flex flex-row items-center gap-2",
				children: /* @__PURE__ */ G(() => o ? o.kind === "back" ? /* @__PURE__ */ G(me, {
					variant: "outline",
					icon: Bn,
					onClick: o.onClick,
					label: o.label
				}) : /* @__PURE__ */ K(An, { children: [
					o.expand && (o.expand.url === void 0 ? /* @__PURE__ */ G(me, {
						variant: "outline",
						icon: Qt,
						onClick: o.expand.onClick,
						label: o.expand.label
					}) : /* @__PURE__ */ G(me, {
						variant: "outline",
						icon: Qt,
						href: o.expand.url,
						label: o.expand.label
					})),
					o.expand && o.navigation && /* @__PURE__ */ G(g, {}),
					o.navigation && /* @__PURE__ */ G(p_, { ...o.navigation })
				] }) : null, {})
			}), /* @__PURE__ */ K("div", {
				className: "flex flex-row items-center gap-2",
				children: [
					/* @__PURE__ */ G(b, {}),
					/* @__PURE__ */ G(v, {}),
					/* @__PURE__ */ G(x, {})
				]
			})]
		}),
		a ? /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G(bg, {
			className: "sr-only",
			children: a.title
		}), /* @__PURE__ */ G("div", {
			className: "[&_.resource-header]:px-4",
			children: /* @__PURE__ */ G(Ug, { ...a })
		})] }) : e && /* @__PURE__ */ G(bg, {
			className: "sr-only",
			children: e
		}),
		/* @__PURE__ */ G(S, {})
	] }) : /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ K("div", {
		className: C("flex flex-row items-start justify-between gap-3 px-4 py-3", !h && "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ G("div", {
			className: "flex flex-row items-center gap-3",
			children: (n || e || !!t) && /* @__PURE__ */ K("div", {
				className: "flex flex-col gap-1",
				children: [n ? /* @__PURE__ */ G(y, {}) : e && /* @__PURE__ */ G(bg, {
					className: "py-1 text-lg font-semibold text-f1-foreground",
					children: e
				}), !!t && /* @__PURE__ */ G(it, {
					className: "text-base text-f1-foreground-secondary",
					children: t
				})]
			})
		}), /* @__PURE__ */ K("div", {
			className: "flex flex-row items-center gap-2",
			children: [
				i && /* @__PURE__ */ G(p_, { ...i }),
				/* @__PURE__ */ G(b, {}),
				/* @__PURE__ */ G(v, {}),
				(i || r) && /* @__PURE__ */ G(g, {}),
				/* @__PURE__ */ G(x, {})
			]
		})]
	}), /* @__PURE__ */ G(S, {})] });
}, Gv = () => c("(max-width: 560px)", { initializeWithValue: !1 }), Kv = n({
	variants: {
		variant: {
			bottomSheet: "max-h-[95vh] bg-f1-background",
			sidePosition: "absolute flex flex-col rounded-md w-full",
			center: "flex",
			fullscreen: ""
		},
		position: {
			right: "left-auto right-0 items-end p-3",
			left: "left-0 items-start p-3",
			center: "",
			fullscreen: "inset-6 max-[560px]:inset-0"
		}
	},
	defaultVariants: { variant: "center" }
}), qv = n({
	variants: {
		variant: {
			bottomSheet: "max-h-[95vh] bg-f1-background",
			sidePosition: "flex h-full w-full flex-col rounded-md border border-solid border-f1-border-secondary",
			center: "flex max-h-[95vh] flex-1 flex-col rounded-xl",
			fullscreen: "h-full w-full rounded-xl max-[560px]:rounded-none"
		},
		position: {
			left: "",
			right: "",
			center: "",
			fullscreen: ""
		},
		width: {
			sm: "max-w-[480px]",
			md: "max-w-[640px]",
			lg: "max-w-[800px]",
			xl: "max-w-[960px]"
		}
	},
	compoundVariants: [{
		variant: "fullscreen",
		width: [
			"sm",
			"md",
			"lg",
			"xl"
		],
		class: "max-w-full"
	}],
	defaultVariants: { variant: "center" }
}), Jv = ({ dismissable: e = !0, asBottomSheetInMobile: t = !0, position: n = "center", onClose: r, isOpen: i, children: a, width: o = "md", primaryAction: s, secondaryAction: c, title: l, description: u, module: d, otherActions: f, navigation: p, resourceHeader: m, controls: h, headerStatus: g, sideControls: _, tabs: v, activeTabId: y, setActiveTabId: b, disableContentPadding: x, container: S }) => {
	let [w, T] = W(null), E = B((e) => {
		T(e);
	}, []), D = (t) => {
		!t && e && r();
	}, ee = Gv(), O = n === "left" || n === "right", k = H(() => ee && t ? "bottomSheet" : n === "fullscreen" ? "fullscreen" : O ? "sidePosition" : "center", [
		ee,
		t,
		O,
		n
	]), A = H(() => (o && ![
		"center",
		"left",
		"right"
	].includes(n) && console.warn("F0Dialog: `width` prop is only applicable to center and side panel positions"), o), [
		k,
		o,
		n
	]), j = H(() => qv({
		variant: k,
		position: n,
		width: A
	}), [
		k,
		n,
		A
	]), te = O ? "content" : "f0-overlay-root";
	m && !O && console.warn("F0Dialog: `resourceHeader` is only applicable to side panel positions (left/right)");
	let ne = {
		title: l,
		description: u,
		module: d,
		otherActions: f,
		navigation: p,
		resourceHeader: m,
		controls: h,
		headerStatus: g,
		dismissable: e,
		tabs: v,
		activeTabId: y,
		setActiveTabId: b
	}, re = ee, ie = ee && n === "fullscreen", ae = "absolute top-1/2 z-10 -translate-y-1/2", M = _ ? re ? /* @__PURE__ */ K("div", {
		className: C("sticky bottom-0 z-10 flex shrink-0 flex-row items-center justify-between gap-2", "border border-x-0 border-b-0 border-t border-solid border-f1-border-secondary", "bg-f1-background px-4 py-3"),
		children: [_.previous, _.next]
	}) : /* @__PURE__ */ K(An, { children: [_.previous ? /* @__PURE__ */ G("div", {
		className: C(ae, "-left-14"),
		children: _.previous
	}) : null, _.next ? /* @__PURE__ */ G("div", {
		className: C(ae, "-right-14"),
		children: _.next
	}) : null] }) : null;
	return ee && t ? /* @__PURE__ */ G(Cg, {
		isOpen: i,
		onClose: r,
		position: n,
		portalContainer: w,
		shownBottomSheet: !0,
		children: /* @__PURE__ */ K(_t, {
			open: i,
			onOpenChange: D,
			children: [/* @__PURE__ */ G(st, { className: "bg-f1-background-overlay" }), /* @__PURE__ */ K(Et, {
				ref: E,
				className: j,
				children: [
					/* @__PURE__ */ G(Wv, { ...ne }),
					/* @__PURE__ */ G(Eg, {
						disableContentPadding: x,
						children: a
					}),
					M,
					/* @__PURE__ */ G(kg, {
						primaryAction: s,
						secondaryAction: c
					})
				]
			})]
		})
	}) : /* @__PURE__ */ G(Cg, {
		isOpen: i,
		onClose: r,
		position: n,
		portalContainer: w,
		children: /* @__PURE__ */ G(xg, {
			open: i,
			onOpenChange: D,
			modal: n === "center" || n === "fullscreen",
			children: /* @__PURE__ */ K(yg, {
				ref: E,
				withTranslateAnimation: !O,
				animation: ie ? "fade" : "scale",
				overlayClassName: ie ? "bg-transparent" : void 0,
				wrapperClassName: Kv({
					variant: k,
					position: n
				}),
				className: j,
				onOpenAutoFocus: (e) => e.preventDefault(),
				container: S,
				defaultContainerId: te,
				children: [
					re ? null : M,
					/* @__PURE__ */ G(Wv, { ...ne }),
					/* @__PURE__ */ G(Eg, {
						disableContentPadding: x,
						children: a
					}),
					re ? M : null,
					/* @__PURE__ */ G(kg, {
						primaryAction: s,
						secondaryAction: c
					})
				]
			})
		})
	});
}, Yv = (e) => /* @__PURE__ */ G(Jv, { ...e });
Yv.displayName = "F0Dialog";
//#endregion
//#region src/patterns/F0Dialog/index.tsx
var Xv = r(m("F0Dialog", Yv)), Zv = ({ resolve: e, fallback: t, error: n, children: r, dataTestId: i }) => {
	let [o, s] = W(() => e instanceof Promise ? null : e), [c, l] = W(null), [u, d] = W(!1);
	return V(() => {
		if (e instanceof Promise) {
			d(!0), l(null), s(null);
			let t = !1;
			return e.then((e) => {
				t || s(e);
			}).catch((e) => {
				t || l(e);
			}).finally(() => {
				t || d(!1);
			}), () => {
				t = !0;
			};
		}
		s(e), l(null), d(!1);
	}, [e]), u ? /* @__PURE__ */ G(a, {
		dataTestId: i,
		children: t
	}) : c ? /* @__PURE__ */ G(a, {
		dataTestId: i,
		children: n ?? null
	}) : o === null ? /* @__PURE__ */ G(a, {
		dataTestId: i,
		children: null
	}) : /* @__PURE__ */ G(a, {
		dataTestId: i,
		children: r(o)
	});
}, Qv = ({ open: e, className: t, onClick: n, disabled: r, size: i = "xs", closedRotation: a = 0, openRotation: s = 180 }) => {
	let c = l();
	return /* @__PURE__ */ G("div", {
		style: {
			transform: `rotate(${e ? s : a}deg)`,
			transition: c ? "none" : "transform 200ms ease-out"
		},
		className: C("flex h-3 w-3 shrink-0 items-center justify-center", r && "cursor-not-allowed opacity-50", t),
		onClick: n,
		children: /* @__PURE__ */ G(o, {
			icon: Fe,
			size: i,
			role: "button"
		})
	});
}, $v = ({ label: e, itemCount: t, open: n, onOpenChange: r, showOpenChange: i, selectable: a, select: o, onSelectChange: s, className: c, chevronPosition: l = "trailing", closedRotation: u, openRotation: d }) => {
	let [f, p] = W(n);
	V(() => {
		p(n);
	}, [n]);
	let m = () => {
		p(!f), r?.(!f);
	}, h = () => {
		i ? m() : a && s?.(!o);
	}, g = i && /* @__PURE__ */ G("span", {
		className: "text-f1-icon-secondary",
		"data-testid": "group-header-chevron",
		children: /* @__PURE__ */ G(Qv, {
			open: f,
			size: "sm",
			closedRotation: u,
			openRotation: d
		})
	}), _ = (e) => {
		(e.key === "Enter" || e.key === " ") && (e.key === " " && e.preventDefault(), h());
	}, v = i || a;
	return /* @__PURE__ */ K("div", {
		className: C("pointer-events-auto flex items-center gap-2", v && S("rounded"), c),
		onClick: h,
		...v && {
			role: "button",
			tabIndex: 0,
			onKeyDown: _
		},
		children: [
			l === "leading" && g,
			a && /* @__PURE__ */ G(Tt, {
				checked: !!o,
				indeterminate: o === "indeterminate",
				title: "Select all",
				hideLabel: !0,
				onCheckedChange: (e) => s?.(e),
				stopPropagation: !0
			}),
			/* @__PURE__ */ G(Zv, {
				resolve: e,
				fallback: /* @__PURE__ */ G(he, { className: "h-4 w-24" }),
				children: (e) => /* @__PURE__ */ G("h6", {
					className: "text-base font-semibold text-f1-foreground",
					children: e
				})
			}),
			/* @__PURE__ */ G(Zv, {
				resolve: t,
				fallback: /* @__PURE__ */ G(he, { className: "h-4 w-5" }),
				children: (e) => e !== void 0 && /* @__PURE__ */ G(pe, { value: e })
			}),
			l === "trailing" && g
		]
	});
}, ey = R({
	value: "",
	open: !1,
	multiple: !1
}), ty = () => xn(ey);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs
function ny(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = L.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = L.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ G(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = L.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => L.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return L.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, ry(i, ...t)];
}
function ry(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return L.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region src/ui/Select/components/radix-ui/select.tsx
var iy = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], ay = [" ", "Enter"], oy = 50, sy = "Select", [cy, ly, uy] = an(sy), [dy, fy] = ny(sy, [uy, ce]), py = ce(), [my, hy] = dy(sy), [gy, _y] = dy(sy), vy = (e) => {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, onItemCheckChange: l, dir: u, name: d, autoComplete: f, disabled: p, required: m, form: h, multiple: g } = e, _ = py(t), [v, y] = L.useState(null), [b, x] = L.useState(null), [S, C] = L.useState(!1), w = rn(u), [T, E] = se({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: sy
	}), [D, ee] = se({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: sy
	}), O = L.useRef(null), k = !v || h || !!v.closest("form"), [A, j] = L.useState(/* @__PURE__ */ new Set()), te = Array.from(A).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ G(re, {
		..._,
		children: /* @__PURE__ */ K(my, {
			required: m,
			scope: t,
			trigger: v,
			onTriggerChange: y,
			valueNode: b,
			onValueNodeChange: x,
			valueNodeHasChildren: S,
			onValueNodeHasChildrenChange: C,
			contentId: fe(),
			value: D,
			onValueChange: (e) => ee(e),
			onItemCheckChange: l,
			open: T,
			onOpenChange: E,
			dir: w,
			triggerPointerDownPosRef: O,
			disabled: p,
			multiple: g,
			children: [/* @__PURE__ */ G(cy.Provider, {
				scope: t,
				children: /* @__PURE__ */ G(gy, {
					scope: e.__scopeSelect,
					onNativeOptionAdd: L.useCallback((e) => {
						j((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: L.useCallback((e) => {
						j((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: n
				})
			}), k ? /* @__PURE__ */ K(_b, {
				"aria-hidden": !0,
				required: m,
				tabIndex: -1,
				name: d,
				autoComplete: f,
				value: D,
				onChange: (e) => {
					ee(g ? Array.from(e.currentTarget.selectedOptions).map((e) => e.value) : e.target.value);
				},
				disabled: p,
				form: h,
				multiple: g,
				children: [D === void 0 ? /* @__PURE__ */ G("option", { value: "" }) : null, Array.from(A)]
			}, te) : null]
		})
	});
};
vy.displayName = sy;
var yy = "SelectTrigger", by = L.forwardRef((e, t) => {
	let { __scopeSelect: n, disabled: r = !1, ...i } = e, a = py(n), o = hy(yy, n), s = o.disabled || r, c = k(t, o.onTriggerChange), l = ly(n), u = L.useRef("touch"), [d, f, p] = yb((e) => {
		let t = l().filter((e) => !e.disabled), n = bb(t, e, t.find((e) => e.value === o.value));
		n !== void 0 && o.onValueChange(n.value);
	}), m = (e) => {
		s || (o.onOpenChange(!0), p()), e && (o.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ G(M, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ G(O.button, {
			type: "button",
			role: "combobox",
			"aria-controls": o.contentId,
			"aria-expanded": o.open,
			"aria-required": o.required,
			"aria-autocomplete": "none",
			dir: o.dir,
			"data-state": o.open ? "open" : "closed",
			disabled: s,
			"data-disabled": s ? "" : void 0,
			"data-placeholder": vb(o.value) ? "" : void 0,
			...i,
			ref: c,
			onClick: D(i.onClick, (e) => {
				e.currentTarget.focus(), u.current !== "mouse" && m(e);
			}),
			onPointerDown: D(i.onPointerDown, (e) => {
				u.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (m(e), e.preventDefault());
			}),
			onKeyDown: D(i.onKeyDown, (e) => {
				let t = d.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && f(e.key), !(t && e.key === " ") && iy.includes(e.key) && (m(), e.preventDefault());
			})
		})
	});
});
by.displayName = yy;
var xy = "SelectValue", Sy = L.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = hy(xy, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = k(t, c.onValueNodeChange);
	return A(() => {
		l(u);
	}, [l, u]), /* @__PURE__ */ G(O.span, {
		...s,
		ref: d,
		style: { pointerEvents: "none" },
		children: vb(c.value) ? /* @__PURE__ */ G(An, { children: o }) : a
	});
});
Sy.displayName = xy;
var Cy = "SelectIcon", wy = L.forwardRef((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ G(O.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
wy.displayName = Cy;
var Ty = "SelectPortal", Ey = (e) => /* @__PURE__ */ G(te, {
	asChild: !0,
	...e
});
Ey.displayName = Ty;
var Dy = "SelectContent", Oy = L.forwardRef((e, t) => {
	let n = hy(Dy, e.__scopeSelect), [r, i] = L.useState();
	if (A(() => {
		i(new DocumentFragment());
	}, []), !n.open) {
		let t = r;
		return t ? Dn.createPortal(/* @__PURE__ */ G(Ay, {
			scope: e.__scopeSelect,
			children: /* @__PURE__ */ G(cy.Slot, {
				scope: e.__scopeSelect,
				children: /* @__PURE__ */ G("div", { children: e.children })
			})
		}), t) : null;
	}
	return /* @__PURE__ */ G(Fy, {
		...e,
		ref: t
	});
});
Oy.displayName = Dy;
var ky = 10, [Ay, jy] = dy(Dy), My = "SelectContentImpl", Ny = ae("SelectContent.RemoveScroll"), Py = ({ disableScrollLock: e, children: t }) => e ? t : /* @__PURE__ */ G(Vt, {
	as: Ny,
	allowPinchZoom: !0,
	children: t
}), Fy = L.forwardRef((e, t) => {
	let { __scopeSelect: n, position: r = "item-aligned", onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, disableScrollLock: s = !1, side: c, sideOffset: l, align: u, alignOffset: d, arrowPadding: f, collisionBoundary: p, collisionPadding: m, sticky: h, hideWhenDetached: g, avoidCollisions: _, ...v } = e, y = hy(Dy, n), [b, x] = L.useState(null), [S, C] = L.useState(null), w = k(t, (e) => x(e)), [T, ee] = L.useState(null), [O, A] = L.useState(null), j = ly(n), [te, ne] = L.useState(!1), re = L.useRef(!1), ie = L.useRef(null);
	L.useEffect(() => {
		if (b && (ie.current &&= (ie.current(), null), y.open && r === "popper")) {
			let e = Pt(b);
			return ie.current = e, () => {
				e && e(), ie.current = null;
			};
		}
	}, [
		b,
		y.open,
		r
	]), en();
	let ae = L.useCallback((e) => {
		let [t, ...n] = j().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && S && (S.scrollTop = 0), n === r && S && (S.scrollTop = S.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [j, S]), M = L.useCallback((e = !1) => {
		let t = document.activeElement;
		if (!(t instanceof HTMLElement && t !== b && b?.contains(t) && !e) && !y.multiple) {
			ae([T, b]);
			return;
		}
	}, [
		ae,
		T,
		b,
		y.multiple
	]), oe = L.useRef(!1), N = L.useRef(null), se = L.useRef(M);
	se.current = M, L.useEffect(() => {
		if (!y.open) {
			oe.current = !1, N.current = null;
			return;
		}
		if (te && !oe.current) {
			let e = !1, t, n = (Array.isArray(y.value) ? y.value : [y.value]).filter((e) => e !== void 0), r = y.value === void 0 || y.value === "", i = y.multiple || T !== null && (r || j().some((e) => e.ref.current === T && n.includes(e.value))), a = setTimeout(() => {
				if (e) return;
				let n = document.activeElement, r = n instanceof HTMLElement && n !== b && b?.contains(n), a = N.current;
				if (r && n !== a) {
					oe.current = !0;
					return;
				}
				let o = a ? n === a : n === b || n === y.trigger || n === document.body;
				if (!i) {
					if (!o) {
						oe.current = !0;
						return;
					}
					N.current = b, T && (t = setTimeout(() => {
						if (!(e || oe.current)) {
							if (document.activeElement !== N.current) {
								oe.current = !0;
								return;
							}
							T.focus(), !e && document.activeElement === T && (N.current = T);
						}
					}, oy)), b?.focus();
					return;
				}
				oe.current = !0, o && se.current(n === a);
			}, 0);
			return () => {
				e = !0, clearTimeout(a), t !== void 0 && clearTimeout(t);
			};
		}
	}, [
		y.multiple,
		y.open,
		y.trigger,
		y.value,
		b,
		j,
		te,
		T
	]);
	let { onOpenChange: ce, triggerPointerDownPosRef: le } = y;
	L.useEffect(() => {
		if (b) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (le.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (le.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || ce(!1), document.removeEventListener("pointermove", t), le.current = null;
			};
			return le.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		b,
		ce,
		le
	]), L.useEffect(() => {
		let e = () => ce(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [ce]);
	let [ue, de] = yb((e) => {
		let t = j().filter((e) => !e.disabled), n = bb(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), fe = L.useCallback((e, t, n) => {
		let r = (Array.isArray(y.value) ? y.value : [y.value]).filter((e) => e !== void 0), i = !re.current && !n;
		(y.value !== void 0 && r.includes(t) || i) && (ee(e), i && (re.current = !0));
	}, [y.value]), pe = L.useCallback(() => b?.focus(), [b]), me = L.useCallback((e, t, n) => {
		let r = !re.current && !n;
		(y.value !== void 0 && y.value === t || r) && A(e);
	}, [y.value]), he = r === "popper" ? Vy : zy, ge = he === Vy ? {
		side: c,
		sideOffset: l,
		align: u,
		alignOffset: d,
		arrowPadding: f,
		collisionBoundary: p,
		collisionPadding: m,
		sticky: h,
		hideWhenDetached: g,
		avoidCollisions: _
	} : {};
	return /* @__PURE__ */ G(Ay, {
		scope: n,
		content: b,
		viewport: S,
		onViewportChange: C,
		itemRefCallback: fe,
		selectedItem: T,
		onItemLeave: pe,
		itemTextRefCallback: me,
		focusSelectedItem: M,
		selectedItemText: O,
		position: r,
		isPositioned: te,
		searchRef: ue,
		children: /* @__PURE__ */ G(Py, {
			disableScrollLock: s,
			children: /* @__PURE__ */ G(tn, {
				asChild: !0,
				trapped: !1,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: D(i, (e) => {
					y.trigger?.isConnected && y.trigger.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ G(E, {
					asChild: !0,
					disableOutsidePointerEvents: !s,
					onEscapeKeyDown: a,
					onPointerDownOutside: o,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => y.onOpenChange(!1),
					children: /* @__PURE__ */ G(he, {
						"data-radix-select-content": "",
						"data-state": y.open ? "open" : "closed",
						dir: y.dir,
						onContextMenu: (e) => e.preventDefault(),
						...v,
						...ge,
						onPlaced: () => ne(!0),
						ref: w,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...v.style
						},
						onKeyDown: D(v.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey, n = e.target instanceof HTMLElement && e.target.getAttribute("role") === "searchbox";
							if (e.key === "Tab" && e.preventDefault(), !t && !n && e.key.length === 1 && de(e.key), ["ArrowUp", "ArrowDown"].includes(e.key) || !n && ["Home", "End"].includes(e.key)) {
								let t = j().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => ae(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
Fy.displayName = My;
var Iy = "SelectListbox", Ly = L.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = hy(Iy, n);
	return /* @__PURE__ */ G(O.div, {
		...r,
		ref: t,
		role: "listbox",
		id: i.contentId,
		"aria-multiselectable": i.multiple || void 0
	});
});
Ly.displayName = Iy;
var Ry = "SelectItemAlignedPosition", zy = L.forwardRef((e, t) => {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, a = hy(Dy, n), o = jy(Dy, n), [s, c] = L.useState(null), [l, u] = L.useState(null), d = k(t, (e) => u(e)), f = ly(n), p = L.useRef(!1), m = L.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: _, focusSelectedItem: v } = o, y = L.useCallback(() => {
		if (a.trigger && a.valueNode && s && l && h && g && _) {
			let e = a.trigger.getBoundingClientRect(), t = l.getBoundingClientRect(), n = a.valueNode.getBoundingClientRect(), i = _.getBoundingClientRect();
			if (a.dir !== "rtl") {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - ky, d = Au(a, [ky, Math.max(ky, u - l)]);
				s.style.minWidth = c + "px", s.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - ky, d = Au(a, [ky, Math.max(ky, u - l)]);
				s.style.minWidth = c + "px", s.style.right = d + "px";
			}
			let o = f(), c = window.innerHeight - 20, u = h.scrollHeight, d = window.getComputedStyle(l), m = parseInt(d.borderTopWidth, 10), v = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = m + v + u + b + y, S = Math.min(g.offsetHeight * 5, x), C = window.getComputedStyle(h), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - ky, D = c - E, ee = g.offsetHeight / 2, O = g.offsetTop + ee, k = m + v + O, A = x - k;
			if (k <= E) {
				let e = o.length > 0 && g === o[o.length - 1].ref.current;
				s.style.bottom = "0px";
				let t = l.clientHeight - h.offsetTop - h.offsetHeight, n = k + Math.max(D, ee + (e ? T : 0) + t + y);
				s.style.height = n + "px";
			} else {
				let e = o.length > 0 && g === o[0].ref.current;
				s.style.top = "0px";
				let t = Math.max(E, m + h.offsetTop + (e ? w : 0) + ee) + A;
				s.style.height = t + "px", h.scrollTop = k - E + h.offsetTop;
			}
			s.style.margin = `${ky}px 0`, s.style.minHeight = S + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame(() => p.current = !0);
		}
	}, [
		f,
		a.trigger,
		a.valueNode,
		s,
		l,
		h,
		g,
		_,
		a.dir,
		r
	]);
	A(() => y(), [y]);
	let [b, x] = L.useState();
	A(() => {
		l && x(window.getComputedStyle(l).zIndex);
	}, [l]);
	let S = L.useCallback((e) => {
		e && m.current === !0 && (y(), v?.(), m.current = !1);
	}, [y, v]);
	return /* @__PURE__ */ G(Hy, {
		scope: n,
		contentWrapper: s,
		shouldExpandOnScrollRef: p,
		onScrollButtonChange: S,
		children: /* @__PURE__ */ G("div", {
			ref: c,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: b
			},
			children: /* @__PURE__ */ G(O.div, {
				...i,
				ref: d,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...i.style
				}
			})
		})
	});
});
zy.displayName = Ry;
var By = "SelectPopperPosition", Vy = L.forwardRef((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = ky, ...a } = e, o = py(n);
	return /* @__PURE__ */ G(ne, {
		...o,
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Vy.displayName = By;
var [Hy, Uy] = dy(Dy, {}), Wy = "SelectViewport", Gy = L.forwardRef((e, t) => {
	let { __scopeSelect: n, nonce: r, ...i } = e, a = jy(Wy, n), o = Uy(Wy, n), s = k(t, a.onViewportChange), c = L.useRef(0);
	return /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ G(cy.Slot, {
		scope: n,
		children: /* @__PURE__ */ G(O.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...i,
			ref: s,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...i.style
			},
			onScroll: D(i.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = o;
				if (r?.current && n) {
					let e = Math.abs(c.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - 20, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				c.current = t.scrollTop;
			})
		})
	})] });
});
Gy.displayName = Wy;
var Ky = "SelectGroup", [qy, Jy] = dy(Ky), Yy = L.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = fe();
	return /* @__PURE__ */ G(qy, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ G(O.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
});
Yy.displayName = Ky;
var Xy = "SelectLabel", Zy = L.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Jy(Xy, n);
	return /* @__PURE__ */ G(O.div, {
		id: i.id,
		...r,
		ref: t
	});
});
Zy.displayName = Xy;
var Qy = "SelectItem", [$y, eb] = dy(Qy), tb = L.forwardRef((e, t) => {
	let { __scopeSelect: n, value: r, disabled: i = !1, textValue: a, ...o } = e, s = hy(Qy, n), c = jy(Qy, n), l = s.multiple ? s.value?.includes(r) || !1 : s.value === r, [u, d] = L.useState(a ?? ""), [f, p] = L.useState(!1), m = k(t, (e) => c.itemRefCallback?.(e, r, i)), h = fe(), g = L.useRef("touch"), _ = () => {
		if (!i) {
			if (s.onItemCheckChange?.(r, !l), s.multiple) {
				let e = s.value ?? [], t = l ? e.filter((e) => e !== r) : [...e, r];
				s.onValueChange(t);
			} else s.onValueChange(r), s.onOpenChange(!1);
		}
	};
	if (r === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ G($y, {
		scope: n,
		value: r,
		disabled: i,
		textId: h,
		isSelected: l,
		onItemTextChange: L.useCallback((e) => {
			d((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ G(cy.ItemSlot, {
			scope: n,
			value: r,
			disabled: i,
			textValue: u,
			children: /* @__PURE__ */ G(O.div, {
				role: "option",
				"aria-labelledby": h,
				"data-highlighted": f ? "" : void 0,
				"aria-selected": l && f,
				"data-state": l ? "checked" : "unchecked",
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				tabIndex: i ? void 0 : -1,
				...o,
				ref: m,
				onFocus: D(o.onFocus, () => p(!0)),
				onBlur: D(o.onBlur, () => p(!1)),
				onClick: D(o.onClick, () => {
					g.current !== "mouse" && _();
				}),
				onPointerUp: D(o.onPointerUp, () => {
					g.current === "mouse" && _();
				}),
				onPointerDown: D(o.onPointerDown, (e) => {
					g.current = e.pointerType;
				}),
				onPointerMove: D(o.onPointerMove, (e) => {
					g.current = e.pointerType, i ? c.onItemLeave?.() : g.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: D(o.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && c.onItemLeave?.();
				}),
				onKeyDown: D(o.onKeyDown, (e) => {
					(c.searchRef?.current === "" || e.key !== " ") && (ay.includes(e.key) && _(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
tb.displayName = Qy;
var nb = "SelectItemText", rb = L.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, ...a } = e, o = hy(nb, n), s = jy(nb, n), c = eb(nb, n), l = _y(nb, n), [u, d] = L.useState(null), f = k(t, (e) => d(e), c.onItemTextChange, (e) => s.itemTextRefCallback?.(e, c.value, c.disabled)), p = u?.textContent, m = L.useMemo(() => /* @__PURE__ */ G("option", {
		value: c.value,
		disabled: c.disabled,
		children: p
	}, c.value), [
		c.disabled,
		c.value,
		p
	]), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
	return A(() => (h(m), () => g(m)), [
		h,
		g,
		m
	]), /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G(O.span, {
		id: c.textId,
		...a,
		ref: f
	}), c.isSelected && o.valueNode && !o.valueNodeHasChildren ? Dn.createPortal(a.children, o.valueNode) : null] });
});
rb.displayName = nb;
var ib = "SelectItemIndicator", ab = L.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return eb(ib, n).isSelected ? /* @__PURE__ */ G(O.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
ab.displayName = ib;
var ob = "SelectScrollUpButton", sb = L.forwardRef((e, t) => {
	let n = jy(ob, e.__scopeSelect), r = Uy(ob, e.__scopeSelect), [i, a] = L.useState(!1), o = k(t, r.onScrollButtonChange);
	return A(() => {
		if (n.viewport && n.isPositioned) {
			let e = n.viewport;
			function t() {
				let t = e.scrollTop > 0;
				a(t);
			}
			return t(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ G(ub, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
sb.displayName = ob;
var cb = "SelectScrollDownButton", lb = L.forwardRef((e, t) => {
	let n = jy(cb, e.__scopeSelect), r = Uy(cb, e.__scopeSelect), [i, a] = L.useState(!1), o = k(t, r.onScrollButtonChange);
	return A(() => {
		if (n.viewport && n.isPositioned) {
			let e = n.viewport;
			function t() {
				let t = e.scrollHeight - e.clientHeight, n = Math.ceil(e.scrollTop) < t;
				a(n);
			}
			return t(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ G(ub, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
lb.displayName = cb;
var ub = L.forwardRef((e, t) => {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = jy("SelectScrollButton", n), o = L.useRef(null), s = ly(n), c = L.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return L.useEffect(() => () => c(), [c]), A(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ G(O.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: D(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: D(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: D(i.onPointerLeave, () => {
			c();
		})
	});
});
ub.displayName = "SelectScrollButtonImpl";
var db = "SelectSeparator", fb = L.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ G(O.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
fb.displayName = db;
var pb = "SelectArrow", mb = L.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = py(n), a = hy(pb, n), o = jy(pb, n);
	return a.open && o.position === "popper" ? /* @__PURE__ */ G(de, {
		...i,
		...r,
		ref: t
	}) : null;
});
mb.displayName = pb;
var hb = "SelectBubbleInput";
function gb(e, t) {
	return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : Array.isArray(e) || Array.isArray(t) ? !1 : e === t;
}
var _b = L.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
	let i = L.useRef(null), a = k(r, i), o = ju(t);
	return L.useEffect(() => {
		let e = i.current;
		if (!e || gb(o, t)) return;
		let n = Object.getOwnPropertyDescriptor(window.HTMLOptionElement.prototype, "selected")?.set;
		if (n) {
			let r = Array.isArray(t) ? t : [t];
			for (let t of e.options) n.call(t, r.includes(t.value));
		}
		e.dispatchEvent(new Event("change", { bubbles: !0 }));
	}, [o, t]), /* @__PURE__ */ G(O.select, {
		...n,
		style: {
			...j,
			...n.style
		},
		ref: a,
		defaultValue: t
	});
});
_b.displayName = hb;
function vb(e) {
	return Array.isArray(e) ? e.length === 0 || e.every((e) => e === "") : e === "" || e === void 0;
}
function yb(e) {
	let t = T(e), n = L.useRef(""), r = L.useRef(0), i = L.useCallback((e) => {
		let i = n.current + e;
		t(i), (function e(t) {
			n.current = t, window.clearTimeout(r.current), t !== "" && (r.current = window.setTimeout(() => e(""), 1e3));
		})(i);
	}, [t]), a = L.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return L.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
function bb(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = xb(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function xb(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Sb = vy, Cb = by, wb = Ey, Tb = Oy, Eb = Ly, Db = Gy, Ob = tb, kb = rb, Ab = ab, jb = fb, Mb = (e) => {
	let [t, n] = W(e.as === "list"), r = e.as === "list" ? !0 : e.open === void 0 ? t : e.open, i = (t) => {
		e.open === void 0 && n(t), e.onOpenChange?.(t);
	}, [a, o] = W(gg(e.value));
	V(() => {
		o(gg(e.value));
	}, [JSON.stringify(e.value)]);
	let s = H(() => ({
		value: e.value === void 0 ? a : gg(e.value),
		open: r,
		as: e.as,
		multiple: e.multiple || !1
	}), [
		JSON.stringify(e.value),
		a,
		r,
		e.as,
		e.multiple
	]), c = {
		...e,
		open: r,
		onOpenChange: i,
		children: /* @__PURE__ */ G(ey.Provider, {
			value: s,
			children: e.children
		})
	}, l = (t) => {
		o(gg(t)), e.multiple ? e.onValueChange?.(gg(t)) : e.onValueChange?.(t);
	}, u = e.multiple ? {
		...c,
		multiple: !0,
		value: a,
		defaultValue: e.defaultValue,
		onValueChange: l
	} : {
		...c,
		multiple: !1,
		value: a[0],
		defaultValue: e.defaultValue,
		onValueChange: l
	};
	return /* @__PURE__ */ G("div", {
		className: "h-full [&>div]:!relative [&>div]:!h-full",
		children: /* @__PURE__ */ G(Sb, { ...u })
	});
};
Mb.displayName = Sb.displayName;
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+virtual-core@3.13.12/node_modules/@tanstack/virtual-core/dist/esm/utils.js
function Nb(e, t, n) {
	let r = n.initialDeps ?? [], i;
	function a() {
		var a;
		let o;
		n.key && n.debug?.call(n) && (o = Date.now());
		let s = e();
		if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
		r = s;
		let c;
		if (n.key && n.debug?.call(n) && (c = Date.now()), i = t(...s), n.key && n.debug?.call(n)) {
			let e = Math.round((Date.now() - o) * 100) / 100, t = Math.round((Date.now() - c) * 100) / 100, r = t / 16, i = (e, t) => {
				for (e = String(e); e.length < t;) e = " " + e;
				return e;
			};
			console.info(`%c⏱ ${i(t, 5)} /${i(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`, n?.key);
		}
		return (a = n?.onChange) == null || a.call(n, i), i;
	}
	return a.updateDeps = (e) => {
		r = e;
	}, a;
}
function Pb(e, t) {
	if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
	return e;
}
var Fb = (e, t) => Math.abs(e - t) < 1.01, Ib = (e, t, n) => {
	let r;
	return function(...i) {
		e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), n);
	};
}, Lb = (e) => {
	let { offsetWidth: t, offsetHeight: n } = e;
	return {
		width: t,
		height: n
	};
}, Rb = (e) => e, zb = (e) => {
	let t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
	for (let e = t; e <= n; e++) r.push(e);
	return r;
}, Bb = (e, t) => {
	let n = e.scrollElement;
	if (!n) return;
	let r = e.targetWindow;
	if (!r) return;
	let i = (e) => {
		let { width: n, height: r } = e;
		t({
			width: Math.round(n),
			height: Math.round(r)
		});
	};
	if (i(Lb(n)), !r.ResizeObserver) return () => {};
	let a = new r.ResizeObserver((t) => {
		let r = () => {
			let e = t[0];
			if (e?.borderBoxSize) {
				let t = e.borderBoxSize[0];
				if (t) {
					i({
						width: t.inlineSize,
						height: t.blockSize
					});
					return;
				}
			}
			i(Lb(n));
		};
		e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
	});
	return a.observe(n, { box: "border-box" }), () => {
		a.unobserve(n);
	};
}, Vb = { passive: !0 }, Hb = typeof window > "u" || "onscrollend" in window, Ub = (e, t) => {
	let n = e.scrollElement;
	if (!n) return;
	let r = e.targetWindow;
	if (!r) return;
	let i = 0, a = e.options.useScrollendEvent && Hb ? () => void 0 : Ib(r, () => {
		t(i, !1);
	}, e.options.isScrollingResetDelay), o = (r) => () => {
		let { horizontal: o, isRtl: s } = e.options;
		i = o ? n.scrollLeft * (s && -1 || 1) : n.scrollTop, a(), t(i, r);
	}, s = o(!0), c = o(!1);
	c(), n.addEventListener("scroll", s, Vb);
	let l = e.options.useScrollendEvent && Hb;
	return l && n.addEventListener("scrollend", c, Vb), () => {
		n.removeEventListener("scroll", s), l && n.removeEventListener("scrollend", c);
	};
}, Wb = (e, t, n) => {
	if (t?.borderBoxSize) {
		let e = t.borderBoxSize[0];
		if (e) return Math.round(e[n.options.horizontal ? "inlineSize" : "blockSize"]);
	}
	return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Gb = (e, { adjustments: t = 0, behavior: n }, r) => {
	var i, a;
	let o = e + t;
	(a = (i = r.scrollElement)?.scrollTo) == null || a.call(i, {
		[r.options.horizontal ? "left" : "top"]: o,
		behavior: n
	});
}, Kb = class {
	constructor(e) {
		this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
			let e = null, t = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((e) => {
				e.forEach((e) => {
					let t = () => {
						this._measureElement(e.target, e);
					};
					this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
				});
			}));
			return {
				disconnect: () => {
					var n;
					(n = t()) == null || n.disconnect(), e = null;
				},
				observe: (e) => t()?.observe(e, { box: "border-box" }),
				unobserve: (e) => t()?.unobserve(e)
			};
		})(), this.range = null, this.setOptions = (e) => {
			Object.entries(e).forEach(([t, n]) => {
				n === void 0 && delete e[t];
			}), this.options = {
				debug: !1,
				initialOffset: 0,
				overscan: 1,
				paddingStart: 0,
				paddingEnd: 0,
				scrollPaddingStart: 0,
				scrollPaddingEnd: 0,
				horizontal: !1,
				getItemKey: Rb,
				rangeExtractor: zb,
				onChange: () => {},
				measureElement: Wb,
				initialRect: {
					width: 0,
					height: 0
				},
				scrollMargin: 0,
				gap: 0,
				indexAttribute: "data-index",
				initialMeasurementsCache: [],
				lanes: 1,
				isScrollingResetDelay: 150,
				enabled: !0,
				isRtl: !1,
				useScrollendEvent: !1,
				useAnimationFrameWithResizeObserver: !1,
				...e
			};
		}, this.notify = (e) => {
			var t, n;
			(n = (t = this.options).onChange) == null || n.call(t, this, e);
		}, this.maybeNotify = Nb(() => (this.calculateRange(), [
			this.isScrolling,
			this.range ? this.range.startIndex : null,
			this.range ? this.range.endIndex : null
		]), (e) => {
			this.notify(e);
		}, {
			key: process.env.NODE_ENV !== "production" && "maybeNotify",
			debug: () => this.options.debug,
			initialDeps: [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			]
		}), this.cleanup = () => {
			this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
		}, this._didMount = () => () => {
			this.cleanup();
		}, this._willUpdate = () => {
			let e = this.options.enabled ? this.options.getScrollElement() : null;
			if (this.scrollElement !== e) {
				if (this.cleanup(), !e) {
					this.maybeNotify();
					return;
				}
				this.scrollElement = e, this.targetWindow = this.scrollElement && "ownerDocument" in this.scrollElement ? this.scrollElement.ownerDocument.defaultView : this.scrollElement?.window ?? null, this.elementsCache.forEach((e) => {
					this.observer.observe(e);
				}), this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				}), this.unsubs.push(this.options.observeElementRect(this, (e) => {
					this.scrollRect = e, this.maybeNotify();
				})), this.unsubs.push(this.options.observeElementOffset(this, (e, t) => {
					this.scrollAdjustments = 0, this.scrollDirection = t ? this.getScrollOffset() < e ? "forward" : "backward" : null, this.scrollOffset = e, this.isScrolling = t, this.maybeNotify();
				}));
			}
		}, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, t) => {
			let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
			for (let i = t - 1; i >= 0; i--) {
				let t = e[i];
				if (n.has(t.lane)) continue;
				let a = r.get(t.lane);
				if (a == null || t.end > a.end ? r.set(t.lane, t) : t.end < a.end && n.set(t.lane, !0), n.size === this.options.lanes) break;
			}
			return r.size === this.options.lanes ? Array.from(r.values()).sort((e, t) => e.end === t.end ? e.index - t.index : e.end - t.end)[0] : void 0;
		}, this.getMeasurementOptions = Nb(() => [
			this.options.count,
			this.options.paddingStart,
			this.options.scrollMargin,
			this.options.getItemKey,
			this.options.enabled
		], (e, t, n, r, i) => (this.pendingMeasuredCacheIndexes = [], {
			count: e,
			paddingStart: t,
			scrollMargin: n,
			getItemKey: r,
			enabled: i
		}), { key: !1 }), this.getMeasurements = Nb(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: r, enabled: i }, a) => {
			if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), [];
			this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e) => {
				this.itemSizeCache.set(e.key, e.size);
			}));
			let o = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
			this.pendingMeasuredCacheIndexes = [];
			let s = this.measurementsCache.slice(0, o);
			for (let i = o; i < e; i++) {
				let e = r(i), o = this.options.lanes === 1 ? s[i - 1] : this.getFurthestMeasurement(s, i), c = o ? o.end + this.options.gap : t + n, l = a.get(e), u = typeof l == "number" ? l : this.options.estimateSize(i), d = c + u, f = o ? o.lane : i % this.options.lanes;
				s[i] = {
					index: i,
					start: c,
					size: u,
					end: d,
					key: e,
					lane: f
				};
			}
			return this.measurementsCache = s, s;
		}, {
			key: process.env.NODE_ENV !== "production" && "getMeasurements",
			debug: () => this.options.debug
		}), this.calculateRange = Nb(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (e, t, n, r) => this.range = e.length > 0 && t > 0 ? Jb({
			measurements: e,
			outerSize: t,
			scrollOffset: n,
			lanes: r
		}) : null, {
			key: process.env.NODE_ENV !== "production" && "calculateRange",
			debug: () => this.options.debug
		}), this.getVirtualIndexes = Nb(() => {
			let e = null, t = null, n = this.calculateRange();
			return n && (e = n.startIndex, t = n.endIndex), this.maybeNotify.updateDeps([
				this.isScrolling,
				e,
				t
			]), [
				this.options.rangeExtractor,
				this.options.overscan,
				this.options.count,
				e,
				t
			];
		}, (e, t, n, r, i) => r === null || i === null ? [] : e({
			startIndex: r,
			endIndex: i,
			overscan: t,
			count: n
		}), {
			key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
			debug: () => this.options.debug
		}), this.indexFromElement = (e) => {
			let t = this.options.indexAttribute, n = e.getAttribute(t);
			return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
		}, this._measureElement = (e, t) => {
			let n = this.indexFromElement(e), r = this.measurementsCache[n];
			if (!r) return;
			let i = r.key, a = this.elementsCache.get(i);
			a !== e && (a && this.observer.unobserve(a), this.observer.observe(e), this.elementsCache.set(i, e)), e.isConnected && this.resizeItem(n, this.options.measureElement(e, t, this));
		}, this.resizeItem = (e, t) => {
			let n = this.measurementsCache[e];
			if (!n) return;
			let r = t - (this.itemSizeCache.get(n.key) ?? n.size);
			r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? n.start < this.getScrollOffset() + this.scrollAdjustments : this.shouldAdjustScrollPositionOnItemSizeChange(n, r, this)) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", r), this._scrollToOffset(this.getScrollOffset(), {
				adjustments: this.scrollAdjustments += r,
				behavior: void 0
			})), this.pendingMeasuredCacheIndexes.push(n.index), this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t)), this.notify(!1));
		}, this.measureElement = (e) => {
			if (!e) {
				this.elementsCache.forEach((e, t) => {
					e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
				});
				return;
			}
			this._measureElement(e, void 0);
		}, this.getVirtualItems = Nb(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
			let n = [];
			for (let r = 0, i = e.length; r < i; r++) {
				let i = t[e[r]];
				n.push(i);
			}
			return n;
		}, {
			key: process.env.NODE_ENV !== "production" && "getVirtualItems",
			debug: () => this.options.debug
		}), this.getVirtualItemForOffset = (e) => {
			let t = this.getMeasurements();
			if (t.length !== 0) return Pb(t[qb(0, t.length - 1, (e) => Pb(t[e]).start, e)]);
		}, this.getOffsetForAlignment = (e, t, n = 0) => {
			let r = this.getSize(), i = this.getScrollOffset();
			t === "auto" && (t = e >= i + r ? "end" : "start"), t === "center" ? e += (n - r) / 2 : t === "end" && (e -= r);
			let a = this.getTotalSize() + this.options.scrollMargin - r;
			return Math.max(Math.min(a, e), 0);
		}, this.getOffsetForIndex = (e, t = "auto") => {
			e = Math.max(0, Math.min(e, this.options.count - 1));
			let n = this.measurementsCache[e];
			if (!n) return;
			let r = this.getSize(), i = this.getScrollOffset();
			if (t === "auto") {
				if (n.end >= i + r - this.options.scrollPaddingEnd) t = "end";
				else if (n.start <= i + this.options.scrollPaddingStart) t = "start";
				else return [i, t];
			}
			let a = t === "end" ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
			return [this.getOffsetForAlignment(a, t, n.size), t];
		}, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (e, { align: t = "start", behavior: n } = {}) => {
			n === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(e, t), {
				adjustments: void 0,
				behavior: n
			});
		}, this.scrollToIndex = (e, { align: t = "auto", behavior: n } = {}) => {
			n === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), e = Math.max(0, Math.min(e, this.options.count - 1));
			let r = 0, i = (t) => {
				if (!this.targetWindow) return;
				let r = this.getOffsetForIndex(e, t);
				if (!r) {
					console.warn("Failed to get offset for index:", e);
					return;
				}
				let [i, o] = r;
				this._scrollToOffset(i, {
					adjustments: void 0,
					behavior: n
				}), this.targetWindow.requestAnimationFrame(() => {
					let t = this.getScrollOffset(), n = this.getOffsetForIndex(e, o);
					if (!n) {
						console.warn("Failed to get offset for index:", e);
						return;
					}
					Fb(n[0], t) || a(o);
				});
			}, a = (t) => {
				this.targetWindow && (r++, r < 10 ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", r, 10), this.targetWindow.requestAnimationFrame(() => i(t))) : console.warn(`Failed to scroll to index ${e} after 10 attempts.`));
			};
			i(t);
		}, this.scrollBy = (e, { behavior: t } = {}) => {
			t === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + e, {
				adjustments: void 0,
				behavior: t
			});
		}, this.getTotalSize = () => {
			let e = this.getMeasurements(), t;
			if (e.length === 0) t = this.options.paddingStart;
			else if (this.options.lanes === 1) t = e[e.length - 1]?.end ?? 0;
			else {
				let n = Array(this.options.lanes).fill(null), r = e.length - 1;
				for (; r >= 0 && n.some((e) => e === null);) {
					let t = e[r];
					n[t.lane] === null && (n[t.lane] = t.end), r--;
				}
				t = Math.max(...n.filter((e) => e !== null));
			}
			return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
		}, this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
			this.options.scrollToFn(e, {
				behavior: n,
				adjustments: t
			}, this);
		}, this.measure = () => {
			this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
		}, this.setOptions(e);
	}
}, qb = (e, t, n, r) => {
	for (; e <= t;) {
		let i = (e + t) / 2 | 0, a = n(i);
		if (a < r) e = i + 1;
		else if (a > r) t = i - 1;
		else return i;
	}
	return e > 0 ? e - 1 : 0;
};
function Jb({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
	let i = e.length - 1, a = (t) => e[t].start;
	if (e.length <= r) return {
		startIndex: 0,
		endIndex: i
	};
	let o = qb(0, i, a, n), s = o;
	if (r === 1) for (; s < i && e[s].end < n + t;) s++;
	else if (r > 1) {
		let a = Array(r).fill(0);
		for (; s < i && a.some((e) => e < n + t);) {
			let t = e[s];
			a[t.lane] = t.end, s++;
		}
		let c = Array(r).fill(n + t);
		for (; o >= 0 && c.some((e) => e >= n);) {
			let t = e[o];
			c[t.lane] = t.start, o--;
		}
		o = Math.max(0, o - o % r), s = Math.min(i, s + (r - 1 - s % r));
	}
	return {
		startIndex: o,
		endIndex: s
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-virtual@3.13.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tanstack/react-virtual/dist/esm/index.js
var Yb = typeof document < "u" ? L.useLayoutEffect : L.useEffect;
function Xb(e) {
	let t = L.useReducer(() => ({}), {})[1], n = {
		...e,
		onChange: (n, r) => {
			var i;
			r ? kn(t) : t(), (i = e.onChange) == null || i.call(e, n, r);
		}
	}, [r] = L.useState(() => new Kb(n));
	return r.setOptions(n), Yb(() => r._didMount(), []), Yb(() => r._willUpdate()), r;
}
function Zb(e) {
	return Xb({
		observeElementRect: Bb,
		observeElementOffset: Ub,
		scrollToFn: Gb,
		...e
	});
}
//#endregion
//#region src/ui/Select/components/SelectContent.tsx
var Qb = 8, $b = [
	"a[href]",
	"button:not([disabled])",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(","), ex = z(({ items: e = void 0, className: t, children: n, position: r = "popper", taller: i = !1, emptyMessage: a, emptyAction: o, onScrollBottom: s, onScrollTop: c, isLoadingMore: u, isLoading: d, scrollMargin: f, forceMinHeight: p, fitContentWidth: m = !1, showLoadingIndicator: h, asChild: g, portalContainer: _, bottom: v, "aria-label": y, "aria-labelledby": b, "aria-describedby": x, ...S }, w) => {
	let T = xn(Sg), E = T.portalContainer && (T.position === "center" || T.position === "fullscreen"), D = _ === void 0 ? E ? T.portalContainer : void 0 : _, ee = U(null), O = U(null), k = Array.isArray(e), A = H(() => k ? e.every((e) => !e.value && e.type !== "group-header") : !n, [
		k,
		e,
		n
	]), j = l(), [te, ne] = W(j), [re, ie] = W(!1), { value: ae, open: M, as: oe } = xn(ey), N = oe === "list", se = H(() => new Set((Array.isArray(ae) ? ae : [ae]).filter((e) => e !== void 0)), [ae]), ce = H(() => e?.findIndex((e) => e.value !== void 0 && se.has(e.value)) ?? -1, [e, se]), le = Zb({
		count: e?.length || 0,
		getScrollElement: () => ee.current,
		estimateSize: (t) => e?.[t]?.height || 0,
		getItemKey: (t) => e?.[t]?.key ?? t,
		overscan: 5,
		measureElement: (e) => Math.round(e.getBoundingClientRect().height),
		enabled: N || j || re
	});
	V(() => {
		M || (ie(!1), ne(!0));
	}, [M]), V(() => {
		N || le.measure();
	}, [
		le,
		re,
		N
	]);
	let ue = U(!1);
	V(() => {
		!M && !N && (ue.current = !1);
	}, [M, N]), V(() => {
		ue.current || ce < 0 || !M && !N || (ue.current = !0, le.scrollToIndex(ce));
	}, [
		N,
		M,
		ce,
		le
	]);
	let de = le.getVirtualItems(), fe = (e) => {
		if (S.onKeyDown?.(e), e.defaultPrevented || e.key !== "Tab") return;
		let t = e.target, n = e.currentTarget, r = t.closest("[role=\"option\"]");
		r && r.getAttribute("aria-disabled") !== "true" && (O.current = r);
		let i = r ?? (O.current?.isConnected ? O.current : n.querySelector("[role=\"option\"][data-highlighted]:not([aria-disabled=\"true\"]), [role=\"option\"][data-state=\"checked\"]:not([aria-disabled=\"true\"]), [role=\"option\"]:not([aria-disabled=\"true\"])")), a = Array.from(n.querySelectorAll($b)).filter((e) => (e.tabIndex >= 0 || e.getAttribute("role") === "searchbox") && !e.matches("[data-radix-scroll-area-viewport]") && !e.closest("[hidden], [aria-hidden=\"true\"], [inert], [role=\"listbox\"]")), o = !r && t !== n && !t.closest("[role=\"listbox\"]") ? t : void 0, s = Array.from(/* @__PURE__ */ new Set([
			...a,
			...i ? [i] : [],
			...o ? [o] : []
		])).sort((e, t) => e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1), c = r ?? t, l = s.indexOf(c), u = l >= 0 ? s[l + (e.shiftKey ? -1 : 1)] : void 0;
		u && (e.preventDefault(), u.focus());
	}, pe = A ? /* @__PURE__ */ G("div", {
		className: "flex h-full w-full flex-col items-center justify-center p-2",
		children: /* @__PURE__ */ G("div", {
			role: "option",
			"aria-disabled": "true",
			children: /* @__PURE__ */ G("p", {
				className: "text-center",
				children: a || "-"
			})
		})
	}) : k ? /* @__PURE__ */ G("div", {
		className: C(!N && "transition-opacity delay-100", N || te ? "" : "opacity-0", !N && p ? "min-h-[412px]" : ""),
		style: {
			height: le.getTotalSize() + Qb,
			width: "100%",
			position: "relative",
			overflow: "visible",
			flex: "none"
		},
		children: /* @__PURE__ */ G("div", {
			role: "presentation",
			style: {
				top: 0,
				left: 0,
				width: "100%",
				transform: `translateY(${de[0]?.start ?? 0}px)`
			},
			children: de.map((t, n) => /* @__PURE__ */ G("div", {
				role: "presentation",
				"data-index": t.index,
				ref: le.measureElement,
				children: u && n === de.length - 1 ? /* @__PURE__ */ G("div", {
					className: "flex w-full items-center justify-center py-4",
					children: /* @__PURE__ */ G(Xt, { size: "small" })
				}) : e[t.index].item
			}, t.key))
		})
	}) : /* @__PURE__ */ G("div", { children: n }), me = d && !u, he = /* @__PURE__ */ G(Tb, {
		ref: w,
		asChild: g,
		disableScrollLock: N || !!D,
		className: C("relative z-50 text-f1-foreground", N ? "flex w-full h-full flex-col" : "flex min-w-[8rem] flex-col overflow-hidden", !N && "rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2", !N && r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", !N && r === "popper" && !p && (m ? "w-max min-w-[var(--radix-select-trigger-width)]" : "min-w-80 w-[var(--radix-select-trigger-width)]"), !N && r === "popper" && p && "min-w-[32rem] w-[calc(var(--radix-select-trigger-width)+12rem)]", !N && (i ? "max-h-[412px]" : "max-h-[320px]"), !N && k && !te && "opacity-0", t),
		position: N ? "item-aligned" : r,
		side: N ? void 0 : "bottom",
		sideOffset: N ? void 0 : 4,
		collisionPadding: 16,
		avoidCollisions: !0,
		...S,
		onKeyDown: fe,
		onCloseAutoFocus: (e) => {
			S.onCloseAutoFocus && typeof S.onCloseAutoFocus == "function" && S.onCloseAutoFocus(e), e.preventDefault();
		},
		onAnimationStart: () => {
			ie(!0), setTimeout(() => {
				le.scrollToIndex(ce, { align: "center" }), ne(!0);
			});
		},
		children: /* @__PURE__ */ K("div", {
			className: "flex min-h-0 flex-1 flex-col",
			style: N ? void 0 : {
				maxHeight: "var(--radix-select-content-available-height, 100%)",
				...p ? { minHeight: "min(412px, var(--radix-select-content-available-height, 412px))" } : {}
			},
			children: [
				N && !S.right && /* @__PURE__ */ G("div", {
					className: "flex-shrink-0",
					children: S.top
				}),
				/* @__PURE__ */ K("div", {
					className: "flex min-h-0 flex-1 flex-row overflow-hidden",
					children: [/* @__PURE__ */ K("div", {
						className: C("relative flex flex-1 min-h-0 min-w-0 flex-col overflow-hidden", N && "flex flex-col overflow-hidden flex-1 min-h-0"),
						children: [
							(!N || S.right) && S.top,
							h && me && /* @__PURE__ */ G("div", {
								className: "absolute inset-0 flex cursor-progress items-center justify-center",
								"aria-live": "polite",
								"aria-busy": "true",
								children: /* @__PURE__ */ G(Xt, {})
							}),
							/* @__PURE__ */ G($e, {
								viewportRef: ee,
								className: C("flex h-full flex-col", A ? "justify-center" : "pb-1", me && "select-none opacity-10 transition-opacity"),
								onScrollBottom: s,
								onScrollTop: c,
								scrollMargin: f,
								children: N ? /* @__PURE__ */ G(Eb, {
									asChild: !0,
									"aria-label": y,
									"aria-labelledby": b,
									"aria-describedby": x,
									children: /* @__PURE__ */ G("div", {
										className: "min-h-0 p-1",
										children: pe
									})
								}) : /* @__PURE__ */ G(Eb, {
									asChild: !0,
									"aria-label": y,
									"aria-labelledby": b,
									"aria-describedby": x,
									children: /* @__PURE__ */ G(Db, {
										asChild: !0,
										className: C("p-1", r === "popper" && "h-[var(--radix-select-trigger-height)] w-full", A && "flex h-full"),
										children: pe
									})
								})
							})
						]
					}), S.right]
				}),
				A && o || v ? /* @__PURE__ */ K("div", {
					className: "shrink-0",
					children: [A && o && /* @__PURE__ */ G("div", {
						className: "w-full border-0 border-t border-solid border-f1-border-secondary p-2",
						children: o
					}), v]
				}) : null
			]
		})
	});
	return N ? he : /* @__PURE__ */ G(wb, {
		container: D,
		children: /* @__PURE__ */ K(An, { children: [M && !D && /* @__PURE__ */ G("div", {
			className: "pointer-events-auto fixed inset-0 z-40",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation();
			}
		}), he] })
	});
});
ex.displayName = Tb.displayName;
//#endregion
//#region src/ui/Select/components/SelectItem.tsx
var tx = L.forwardRef(({ className: e, children: t, ...n }, r) => {
	let i = ty(), { multiple: a } = i, s = H(() => Array.isArray(i.value) ? i.value.includes(n.value) : i.value === n.value, [i.value, n.value]);
	return /* @__PURE__ */ K(Ob, {
		ref: r,
		className: C("relative grid w-full cursor-pointer select-none items-center gap-x-1.5 rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] first-of-type:pt-3 first-of-type:after:top-1 first-of-type:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:bg-f1-background-hover focus:after:text-f1-foreground focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_*]:z-10", "hover:data-[state=checked]:after:bg-f1-background-selected-bold/10 dark:data-[state=checked]:after:bg-f1-background-selected-bold/20 dark:hover:data-[state=checked]:after:bg-f1-background-selected-bold/20", "focus:outline-none focus:ring-0 focus:ring-transparent", "[&>*]:translate-y-0.5", !a && "data-[state=checked]:after:bg-f1-background-selected-bold/10 data-[state=checked]:after:opacity-100", a || s ? "grid-cols-[1fr_20px]" : void 0, e),
		...n,
		children: [/* @__PURE__ */ G(kb, { children: t }), a ? /* @__PURE__ */ G(yt, {
			title: "Select item",
			onClick: (e) => e.stopPropagation(),
			onKeyDown: (e) => e.stopPropagation(),
			checked: s,
			hideLabel: !0
		}) : s && /* @__PURE__ */ G(Ab, {
			className: "flex text-f1-icon-selected",
			children: /* @__PURE__ */ G(o, {
				icon: Ht,
				size: "md"
			})
		})]
	});
});
tx.displayName = Ob.displayName;
//#endregion
//#region src/ui/Select/components/SelectSeparator.tsx
var nx = L.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ G(jb, {
	ref: n,
	className: C("-mx-1 my-1 h-px bg-f1-border-secondary", e),
	...t
}));
nx.displayName = jb.displayName;
//#endregion
//#region src/ui/Select/components/SelectTrigger.tsx
var rx = L.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ G(Cb, {
	ref: r,
	className: C(e),
	...n,
	children: t
}));
rx.displayName = Cb.displayName;
//#endregion
//#region src/components/F0Select/components/Arrow.tsx
var ix = ({ disabled: e, open: t, onChange: n, size: r = "sm", className: i }) => /* @__PURE__ */ G("div", {
	className: C(!e && "cursor-pointer", "origin-center transition-transform duration-200", "flex items-center justify-center", !t && "rotate-180", r === "md" && "scale-110", i),
	onClick: () => {
		e || n?.(!t);
	},
	children: /* @__PURE__ */ G(s, {
		icon: Hn,
		size: "lg"
	})
}), ax = ({ selectedCount: e, indeterminate: t, value: n, onChange: r, hideCheckbox: a = !1, items: o, paddingTop: s = !1 }) => {
	let c = f(), l = (e) => {
		r(!t && e);
	}, u = (e) => `${e} ${e === 1 ? c.status.selected.singular.toLowerCase() : c.status.selected.plural.toLowerCase()}`;
	return /* @__PURE__ */ K("div", {
		className: C("flex items-center gap-2 pr-2 pl-4", s ? "pt-3 pb-1" : "py-1"),
		children: [/* @__PURE__ */ G("div", {
			className: "flex-1 whitespace-nowrap",
			children: /* @__PURE__ */ G(Zv, {
				resolve: e,
				fallback: /* @__PURE__ */ G(he, { className: "h-4 w-4" }),
				children: (e) => /* @__PURE__ */ G("div", {
					className: "flex h-[24px] items-center",
					children: /* @__PURE__ */ G(i, {
						className: "text-f1-foreground-secondary",
						children: u(e)
					})
				})
			})
		}), a ? o && /* @__PURE__ */ G(me, {
			variant: "ghost",
			size: "sm",
			label: c.actions.clear,
			onClick: () => l(!1),
			className: "z-10",
			disabled: o.length === 0
		}) : /* @__PURE__ */ G("div", {
			className: "shrink-0 pr-1",
			children: /* @__PURE__ */ G(Tt, {
				id: "select-all",
				title: c.actions.selectAll,
				checked: t || n,
				indeterminate: t,
				onCheckedChange: l,
				presentational: !0,
				hideLabel: !0
			})
		})]
	});
}, ox = ({ actions: e, showApplyButton: t, onApply: n, onCancel: r, showCancelButton: i, applyLabel: a }) => {
	let o = f();
	return !e && !t ? null : /* @__PURE__ */ K("div", {
		className: "flex w-full flex-row justify-between items-center gap-2 border-0 border-t border-solid border-f1-border-secondary p-2",
		children: [
			e?.map((e) => /* @__PURE__ */ G(ve, {
				variant: e.variant,
				onClick: e.onClick,
				icon: e.icon,
				label: e.label,
				disabled: e.disabled
			}, e.label)),
			i && /* @__PURE__ */ G(ve, {
				onClick: r,
				label: o.filters.cancel,
				variant: "ghost"
			}),
			t && /* @__PURE__ */ G("div", {
				className: i ? "" : "ml-auto",
				children: /* @__PURE__ */ G(ve, {
					onClick: n,
					label: a ?? o.select.applySelection
				})
			})
		]
	});
};
function sx(e, t) {
	return e.textContent = t, e.offsetWidth;
}
function cx(e) {
	let t = U(null), [n, r] = W(!0), i = B(() => {
		let n = t.current;
		if (!n || e.length === 0) {
			r(!0);
			return;
		}
		let i = n.offsetWidth;
		if (i === 0) {
			r(!0);
			return;
		}
		let a = document.createElement("span");
		a.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap;font:inherit;", n.appendChild(a);
		let o = sx(a, ", "), s = 0;
		for (let t = 0; t < e.length; t++) {
			let c = sx(a, e[t]);
			if (s += t === 0 ? c : o + c, s > i) {
				n.removeChild(a), r(!1);
				return;
			}
		}
		n.removeChild(a), r(!0);
	}, [e]);
	return Tn(() => {
		i();
		let e = t.current;
		if (!e) return;
		let n = new ResizeObserver(() => {
			i();
		});
		return n.observe(e), () => {
			n.disconnect();
		};
	}, [i]), {
		allFit: n,
		containerRef: t
	};
}
//#endregion
//#region src/components/F0Select/components/SelectedItems.tsx
function lx({ count: e }) {
	let t = f();
	return /* @__PURE__ */ G("div", {
		className: "flex w-full items-center gap-1 text-left",
		children: /* @__PURE__ */ G(i, {
			className: "min-w-0 flex-1 text-f1-foreground",
			children: `${e} ${e === 1 ? t.status.selected.singular : t.status.selected.plural}`.toLowerCase()
		})
	});
}
function ux({ selection: e, totalSelectedCount: t }) {
	let n = e.map((e) => e.selectedLabel ?? e.label), { allFit: r, containerRef: i } = cx(n);
	return r ? /* @__PURE__ */ G("div", {
		ref: i,
		className: "flex w-full items-center gap-1 text-left",
		children: /* @__PURE__ */ G("span", {
			className: "min-w-0 flex-1 truncate text-f1-foreground",
			children: n.join(", ")
		})
	}) : /* @__PURE__ */ G("div", {
		ref: i,
		className: "flex w-full items-center text-left",
		children: /* @__PURE__ */ G(lx, { count: t })
	});
}
var dx = z(function({ selection: e, multiple: t, totalSelectedCount: n, allSelected: r, hideItemIcon: a }, s) {
	let c = f();
	if (t) {
		let t = n ?? e.length;
		return t === 0 && e.length === 0 ? null : r === !0 ? /* @__PURE__ */ G("div", {
			className: "flex w-full items-center gap-1 text-left",
			children: /* @__PURE__ */ G(i, {
				className: "min-w-0 flex-1 text-f1-foreground",
				children: `${c.status.selected.all} (${t})`
			})
		}) : e.length === 0 && t > 0 ? /* @__PURE__ */ G(lx, { count: t }) : /* @__PURE__ */ G(ux, {
			selection: e,
			totalSelectedCount: t
		});
	}
	let l = e[0];
	return !l && n && n > 0 ? /* @__PURE__ */ G("div", {
		className: "flex min-w-0 flex-1 justify-start gap-1.5",
		ref: s,
		children: /* @__PURE__ */ G(i, {
			tag: "span",
			className: "text-left text-f1-foreground-secondary",
			children: "..."
		})
	}) : l ? l.tag && typeof l.tag != "string" && l.tag.type === "status" ? /* @__PURE__ */ G("div", {
		className: "flex min-w-0 flex-1 justify-start",
		ref: s,
		children: /* @__PURE__ */ G(Ke, {
			text: l.tag.text,
			variant: l.tag.variant
		})
	}) : /* @__PURE__ */ K("div", {
		className: "flex min-w-0 flex-1 justify-start gap-1.5",
		ref: s,
		children: [
			l.avatar && /* @__PURE__ */ G("div", {
				className: "flex shrink-0 items-center",
				children: /* @__PURE__ */ G(We, {
					avatar: l.avatar,
					size: "xs"
				})
			}),
			l.icon && !a && /* @__PURE__ */ G("div", {
				className: "h-5 shrink-0 text-f1-icon",
				children: /* @__PURE__ */ G(o, { icon: l.icon })
			}),
			/* @__PURE__ */ G(i, {
				tag: "span",
				className: "text-left text-f1-foreground",
				children: l.selectedLabel ?? l.label
			})
		]
	}) : null;
}), fx = 10;
function px({ item: e, onDeselect: t }) {
	return /* @__PURE__ */ K("div", {
		className: "flex w-fit max-w-full min-w-0 items-center justify-between gap-1.5 rounded-md border border-solid border-f1-border-secondary p-1",
		children: [/* @__PURE__ */ K("div", {
			className: "flex min-w-0 flex-1 items-center gap-1.5",
			children: [
				e.avatar && /* @__PURE__ */ G(We, {
					avatar: e.avatar,
					size: "xs"
				}),
				e.icon && /* @__PURE__ */ G(o, {
					icon: e.icon,
					size: "sm",
					className: "shrink-0 text-f1-icon"
				}),
				/* @__PURE__ */ G(i, {
					className: "text-sm",
					children: e.label
				})
			]
		}), /* @__PURE__ */ G("button", {
			className: C("flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0", S()),
			"aria-label": `Remove ${e.label}`,
			type: "button",
			tabIndex: 0,
			onClick: (n) => {
				n.preventDefault(), n.stopPropagation(), t(String(e.value));
			},
			children: /* @__PURE__ */ G(o, {
				icon: Gt,
				color: "default",
				size: "md"
			})
		})]
	});
}
function mx({ items: e, onDeselect: t, allSelected: n, onLoadMore: r, isLoadingMore: i }) {
	let a = f(), o = U(null), s = (n === !0 || n === "indeterminate") && !!r, c = e.length === 0;
	return V(() => {
		let e = o.current;
		if (!e) return;
		let t = (e) => e.stopPropagation();
		return e.addEventListener("wheel", t), e.addEventListener("touchmove", t), () => {
			e.removeEventListener("wheel", t), e.removeEventListener("touchmove", t);
		};
	}, []), /* @__PURE__ */ G("div", {
		ref: o,
		className: "flex w-48 shrink-0 flex-col overflow-hidden border-0 border-l border-solid border-f1-border-secondary",
		children: c ? /* @__PURE__ */ G("div", {
			className: "flex flex-1 items-center justify-center p-4",
			children: /* @__PURE__ */ G("span", {
				className: "text-sm text-f1-foreground-secondary",
				children: a.status.noItemsSelected
			})
		}) : /* @__PURE__ */ G("div", {
			className: "flex min-h-0 flex-1 flex-col overflow-hidden",
			children: /* @__PURE__ */ G($e, {
				className: "flex h-full flex-col",
				onScrollBottom: () => {
					s && !i && r?.();
				},
				scrollMargin: fx,
				children: /* @__PURE__ */ K("div", {
					className: "flex flex-col gap-1 p-2",
					children: [e.map((e) => /* @__PURE__ */ G(px, {
						item: e,
						onDeselect: t
					}, String(e.value))), i && /* @__PURE__ */ G("div", {
						className: "flex items-center justify-center py-2",
						children: /* @__PURE__ */ G(Xt, { size: "small" })
					})]
				})
			})
		})
	});
}
//#endregion
//#region src/components/F0Select/components/SelectItem.tsx
var hx = /^\+\d{1,4}$/, gx = /* @__PURE__ */ new Set(), _x = (e) => {
	if (e.type === "dialCode") return process.env.NODE_ENV !== "production" && !hx.test(e.dialCode) && !gx.has(e.dialCode) && (gx.add(e.dialCode), console.warn(`[F0Select] metadata dialCode "${e.dialCode}" is not a valid dial code (expected "+" followed by 1-4 digits).`)), e.dialCode;
}, vx = ({ item: e }) => {
	let t = e.tag && typeof e.tag != "string" && e.tag.type === "status";
	return /* @__PURE__ */ G(tx, {
		value: String(e.value),
		disabled: e.disabled,
		children: /* @__PURE__ */ K("div", {
			className: `flex w-full gap-1.5 ${e.description ? "items-start" : "items-center"}`,
			children: [
				e.avatar && /* @__PURE__ */ G("div", {
					className: "flex shrink-0 items-center",
					children: /* @__PURE__ */ G(We, {
						avatar: e.avatar,
						size: "xs"
					})
				}),
				e.icon && /* @__PURE__ */ G("div", {
					className: "flex shrink-0 items-center text-f1-icon",
					children: /* @__PURE__ */ G(o, { icon: e.icon })
				}),
				!t && /* @__PURE__ */ K("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ K("div", {
						className: "flex min-w-0 items-baseline gap-1.5",
						children: [/* @__PURE__ */ G(i, {
							lines: 2,
							className: "font-medium",
							children: e.label
						}), e.metadata && /* @__PURE__ */ G("span", {
							className: "whitespace-nowrap text-f1-foreground-secondary",
							children: _x(e.metadata)
						})]
					}), e.description && /* @__PURE__ */ G(i, {
						lines: 2,
						className: "text-f1-foreground-secondary",
						children: e.description
					})]
				}),
				e.tag && /* @__PURE__ */ G("div", {
					className: e.description ? "self-start" : "self-center",
					children: typeof e.tag == "string" ? /* @__PURE__ */ G(ft, { text: e.tag }) : e.tag.type === "dot" ? /* @__PURE__ */ G(bt, { ...e.tag }) : e.tag.type === "icon" ? /* @__PURE__ */ G(ft, {
						text: e.tag.text,
						icon: e.tag.icon
					}) : e.tag.type === "status" ? /* @__PURE__ */ G(Ke, {
						text: e.tag.text,
						variant: e.tag.variant
					}) : /* @__PURE__ */ G(tt, {
						name: e.tag.name,
						src: e.tag.src
					})
				})
			]
		})
	});
}, yx = R(null);
function bx({ children: e, onEvent: t, enabled: n = !0, catchEvents: r }) {
	let i = B((e, i) => {
		!n || r && !r.includes(e) || t(e, i);
	}, [
		n,
		r,
		t
	]), a = H(() => ({ onEvent: i }), [i]);
	return /* @__PURE__ */ G(yx.Provider, {
		value: a,
		children: e
	});
}
function xx() {
	return xn(yx) ?? { onEvent: () => Promise.resolve(!1) };
}
//#endregion
//#region src/lib/providers/events/normalize.ts
var Sx = (e) => {
	if (e != null) {
		if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
		if (e instanceof Date) return e.toISOString();
		if (Array.isArray(e)) return e.map((e) => Sx(e) ?? null);
		if (typeof e == "object") {
			let t = {};
			for (let [n, r] of Object.entries(e)) {
				let e = Sx(r);
				e !== void 0 && (t[n] = e);
			}
			return t;
		}
	}
}, Cx = ({ defaultFilters: e, defaultSorting: t, currentVisualization: n }) => {
	let r = U(e), i = U(t), { onEvent: a } = xx();
	return {
		emitFilterChange: B((e) => {
			if (!e) return;
			let t = Object.entries(e).find(([e, t]) => r.current?.[e] !== t);
			if (!t) return;
			let [i, o] = t, s = Sx(o);
			s !== void 0 && (r.current = e, a("datacollection.filter-change", {
				name: i,
				value: s,
				...n !== void 0 && { visualization: n }
			}));
		}, [a, n]),
		emitSortingChange: B((e) => {
			i?.current?.field === e?.field && i?.current?.order === e?.order || !e || typeof e.field != "string" || (i.current = e, a("datacollection.sorting-change", {
				name: e.field,
				value: e.order
			}));
		}, [a]),
		emitPresetClick: B((e) => {
			if (!e) return;
			let t = Object.entries(e).find(([e, t]) => r.current?.[e] !== t);
			if (!t) return;
			let [i, o] = t, s = Sx(o);
			s !== void 0 && (r.current = e, a("datacollection.preset-click", {
				name: i,
				value: s,
				...n !== void 0 && { visualization: n }
			}));
		}, [a, n])
	};
}, wx = class extends vn {
	state = { hasError: !1 };
	static getDerivedStateFromError() {
		return { hasError: !0 };
	}
	componentDidCatch(e) {
		this.props.onError?.(e);
	}
	render() {
		return this.state.hasError ? this.props.fallback ?? null : this.props.children;
	}
};
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/components/option-utils.ts
function Tx(e, t) {
	return e.label.toLowerCase().includes(t) ? !0 : e.children ? e.children.options.some((e) => Tx(e, t)) : !1;
}
function Ex(e, t) {
	if (!e.children || !t) return !1;
	let { filterKey: n, options: r } = e.children, i = t[n] ?? [];
	for (let e of r) if (i.includes(e.value) || Ex(e, t)) return !0;
	return !1;
}
function Dx(e) {
	let t = /* @__PURE__ */ new Set();
	function n(e) {
		for (let r of e) r.children && (t.add(r.children.filterKey), n(r.children.options));
	}
	return "options" in e && Array.isArray(e.options) && n(e.options), [...t];
}
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/utils.ts
function Ox(e, t) {
	return {
		...t,
		...e
	};
}
var kx = (e) => {
	let t = iS[e];
	if (!t) throw Error(`Filter type ${e.toString()} not found`);
	return t;
};
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/DateFilter/DateFilter.tsx
function Ax({ value: e, onChange: t, schema: n, isCompactMode: r }) {
	let i = {
		mode: "single",
		view: "day",
		...n.options
	}, a = () => {
		t(void 0);
	};
	return /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G("div", {
		className: "space-y-4 overflow-x-hidden p-3",
		children: /* @__PURE__ */ G(XS, {
			defaultSelected: e || i.defaultSelected,
			onSelect: (e) => t(e ?? void 0),
			view: i.view,
			mode: i.mode,
			compact: r,
			showInput: !0
		})
	}), !r && /* @__PURE__ */ G("div", {
		className: "sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]",
		children: /* @__PURE__ */ G(ve, {
			variant: "ghost",
			label: "Clear",
			onClick: () => a(),
			disabled: !e,
			size: "sm"
		})
	})] });
}
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/DateFilter/index.tsx
var jx = (e, t) => !e || "from" in e && !e.from && t.schema.options.mode === "single" || "from" in e && !e.from && !e.to && t.schema.options.mode === "range", Mx = {
	mode: "single",
	view: "day"
}, Nx = {
	emptyValue: void 0,
	render: (e) => {
		let t = Ox(e.schema.options, Mx);
		return /* @__PURE__ */ G(Ax, {
			...e,
			schema: {
				...e.schema,
				options: t
			}
		});
	},
	isEmpty: jx,
	chipLabel: (e, t) => JS(Ox(t.schema.options, Mx).view).toString(e, t.i18n),
	formHeight: 520
}, Px = z(({ value: e, threshold: t = 0, onChange: n, onBlur: r, onFocus: i, size: a = "sm", debounceTime: o = 0, clearable: s = !1, tabIndex: c = -1, role: l = "searchbox", onKeyDown: u, "aria-controls": d, "aria-expanded": f, "aria-activedescendant": p, "aria-autocomplete": m, ...h }, g) => {
	let _ = U(null);
	wn(g, () => _.current), V(() => {
		let e = _.current;
		if (!h.autoFocus || h.disabled || !e || document.activeElement === e) return;
		let t, n = () => {
			t !== void 0 && (clearTimeout(t), t = void 0), e.removeEventListener("focus", n);
		};
		return e.addEventListener("focus", n), t = setTimeout(() => {
			e.focus(), n();
		}, 50), () => {
			n();
		};
	}, [h.autoFocus, h.disabled]);
	let v = U(void 0), y = B((e) => {
		n && (e.length >= t || e.length === 0) && (v.current === void 0 && setTimeout(() => {
			if (v.current !== void 0) {
				let e = document.activeElement === _.current;
				n(v.current), e && _.current?.focus();
			}
			v.current = void 0;
		}, o), v.current = e);
	}, [
		n,
		t,
		o
	]);
	return /* @__PURE__ */ G(Yt, {
		ref: _,
		type: "search",
		tabIndex: c,
		icon: $n,
		value: e,
		label: h.placeholder ?? "Search",
		hideLabel: !0,
		placeholder: h.placeholder,
		disabled: h.disabled,
		onChange: y,
		role: l,
		onKeyDown: u,
		"aria-controls": d,
		"aria-expanded": f,
		"aria-activedescendant": p,
		"aria-autocomplete": m,
		size: a,
		clearable: s,
		onBlur: r,
		onFocus: i,
		name: h.name
	}, "search-input");
});
Px.displayName = "F0SearchInput";
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/components/InFilterOptionCheckbox.tsx
function Fx({ label: e, isSelected: t, onToggle: n }) {
	return /* @__PURE__ */ G("div", {
		className: "shrink-0",
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ G(Tt, {
			title: e,
			checked: t,
			onCheckedChange: (e) => {
				e !== t && n();
			},
			hideLabel: !0
		})
	});
}
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/components/InFilterFlatOption.tsx
function Ix({ option: e, isSelected: t, onToggle: n, isCompactMode: r }) {
	return /* @__PURE__ */ G("div", {
		className: C("w-full", !r && "px-2"),
		children: /* @__PURE__ */ K("div", {
			className: C("flex w-full min-w-0 flex-1 cursor-pointer appearance-none items-center justify-between gap-1 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary", r && "py-1 pr-1", S()),
			onClick: n,
			children: [/* @__PURE__ */ G("span", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ G(i, { children: e.label })
			}), /* @__PURE__ */ G(Fx, {
				label: e.label,
				isSelected: t,
				onToggle: n
			})]
		})
	});
}
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/useLoadOptions.ts
var Lx = /* @__PURE__ */ new Map(), Rx = /* @__PURE__ */ new Map(), zx = /* @__PURE__ */ new Map();
function Bx(e) {
	return JSON.stringify(e);
}
function Vx(e, t, n) {
	let r = `${e}:${String(t)}`;
	Rx.set(r, n);
}
function Hx(e, t) {
	let n = `${e}:${String(t)}`;
	return Rx.get(n);
}
function Ux(e, t, n) {
	zx.set(`${e}:${String(t)}`, n);
}
function Wx(e, t) {
	return zx.get(`${e}:${String(t)}`);
}
async function Gx(e, t, n = !1) {
	if (n && Lx.has(e)) return Lx.get(e);
	let r = await (typeof t == "function" ? t : () => t)();
	return Lx.set(e, r), r;
}
function Kx({ schema: e, search: t }) {
	let n = Bx(e), [r, i] = W([]), [a, o] = W(!1), [s, c] = W(null), l = "options" in e.options ? e.options.options : void 0, u = "source" in e.options ? e.options.source : void 0, { data: d, isInitialLoading: f, loadMore: p, isLoadingMore: m, paginationInfo: h } = ag({
		...Jh(u ? {
			...u,
			search: {
				enabled: !0,
				sync: !0
			}
		} : { dataAdapter: { fetchData: async () => ({ records: [] }) } }, [u]),
		currentSearch: t
	}, {}, [u]), g = B(async (t = !1) => {
		if (l) {
			t && Lx.delete(n);
			try {
				o(!0), c(null);
				let t = await Gx(n, l, e.options.cache);
				i(t);
			} catch (e) {
				c(e instanceof Error ? e : /* @__PURE__ */ Error("Failed to load options"));
			} finally {
				o(!1);
			}
		}
	}, [JSON.stringify(e), n]);
	return V(() => {
		if ("source" in e.options && e.options.mapOptions) try {
			o(!1), c(null);
			let t = d.records.map(e.options.mapOptions);
			i(t);
		} catch (e) {
			c(e instanceof Error ? e : /* @__PURE__ */ Error("Failed to map options from source"));
		}
	}, [d.records, e.options]), V(() => {
		u || g();
	}, [g, u]), {
		options: r,
		isLoading: u ? f || m : a,
		error: s,
		setOptions: i,
		loadOptions: g,
		loadMore: u ? p : void 0,
		hasMore: u ? h?.type === "infinite-scroll" && "hasMore" in h && h.hasMore : !1
	};
}
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/components/InFilterOptionRow.tsx
function qx({ option: e, isSelected: t, onToggle: n, isCompactMode: r, depth: a, onFilterChange: o, allFiltersValue: s, cacheKey: c, searchTerm: l, autoExpand: u }) {
	let [d, p] = W(!1), m = f(), h = !!e.children?.options.length, g = d || u && h, _ = e.children?.filterKey, v = _ && s ? s[_] ?? [] : [], y = B((t, n) => {
		if (!_ || !o) return;
		let r = v.includes(t);
		if (!r) {
			Vx(c, t, n);
			let r = `${e.label} > ${n}`;
			Ux(_, t, r);
		}
		let i = r ? v.filter((e) => e !== t) : [...v, t];
		o(_, i);
	}, [
		_,
		v,
		o,
		c,
		e.label
	]), b = h && Ex(e, s), x = m.t(g ? "actions.collapseItem" : "actions.expandItem", { title: e.label });
	return /* @__PURE__ */ K("div", {
		className: C("w-full", a === 0 && !r && "px-2", a === 0 && "border-0 border-b border-solid border-f1-border-secondary last:border-b-0"),
		children: [/* @__PURE__ */ K("div", {
			className: "flex flex-row items-center overflow-hidden min-w-0",
			style: { paddingLeft: `${a * 24}px` },
			children: [h && /* @__PURE__ */ K("div", {
				className: "relative shrink-0",
				children: [/* @__PURE__ */ G(ve, {
					variant: "ghost",
					size: "sm",
					onClick: () => p((e) => !e),
					icon: g ? Fe : ht,
					label: x,
					"aria-label": b ? `${x}. ${m.status.selected.singular}` : x,
					"aria-expanded": g,
					hideLabel: !0
				}), b && !g && /* @__PURE__ */ G("span", {
					"aria-hidden": "true",
					className: "absolute -right-px -top-px h-2 w-2 rounded-full bg-f1-background-selected-bold"
				})]
			}), /* @__PURE__ */ G("div", {
				className: C("flex min-w-0 flex-1 cursor-pointer appearance-none items-center gap-1 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary", r && "py-1 pr-1", S()),
				children: /* @__PURE__ */ K("div", {
					className: "flex min-w-0 flex-1 items-center justify-between gap-1",
					onClick: n,
					children: [/* @__PURE__ */ G("span", {
						className: "min-w-0 flex-1",
						children: /* @__PURE__ */ G(i, { children: e.label })
					}), /* @__PURE__ */ G(Fx, {
						label: e.label,
						isSelected: t,
						onToggle: n
					})]
				})
			})]
		}), g && e.children && /* @__PURE__ */ G("div", { children: e.children.options.filter((e) => !l || Tx(e, l)).map((e) => {
			let t = v.includes(e.value);
			return /* @__PURE__ */ G(qx, {
				option: e,
				isSelected: t,
				onToggle: () => y(e.value, e.label),
				isCompactMode: r,
				depth: a + 1,
				onFilterChange: o,
				allFiltersValue: s,
				cacheKey: c,
				searchTerm: l,
				autoExpand: u
			}, String(e.value));
		}) })]
	});
}
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/InFilter.tsx
function Jx({ schema: e, value: t, onChange: n, isCompactMode: r, onFilterChange: a, allFiltersValue: o }) {
	let s = f(), [c, l] = W(""), u = U(!0), { options: d, isLoading: p, error: m, loadOptions: h, loadMore: g } = Kx({
		schema: {
			...e,
			type: "in"
		},
		search: c
	}), _ = Bx(e);
	V(() => {
		if (!o || !d.length) return;
		let e = (t) => {
			for (let n of t) if (n.children) {
				let { filterKey: t, options: r } = n.children, i = o[t] ?? [];
				for (let a of r) {
					if (i.includes(a.value)) {
						let e = `${n.label} > ${a.label}`;
						Ux(t, a.value, e), Vx(_, a.value, a.label);
					}
					a.children && e([a]);
				}
			}
		};
		e(d);
	}, [
		d,
		o,
		_
	]), V(() => {
		let e;
		return p ? u.current = !1 : e = setTimeout(() => {
			u.current = !0;
		}, 1e3), () => clearTimeout(e);
	}, [p]);
	let v = "source" in e.options;
	V(() => {
		l("");
	}, [e]);
	let y = c.toLowerCase(), b = H(() => v ? d : d.filter((e) => Tx(e, y)), [
		v,
		d,
		y
	]), x = H(() => Dx(e.options), [e.options]), w = H(() => x.reduce((e, t) => {
		let n = o?.[t];
		return e + (Array.isArray(n) ? n.length : 0);
	}, 0), [x, o]), T = w > 0;
	if (p && !d.length) return /* @__PURE__ */ G("div", {
		className: "flex w-full items-center justify-center py-4",
		children: /* @__PURE__ */ G(Xt, { size: "small" })
	});
	if (m) return /* @__PURE__ */ K("div", {
		className: "text-f1-foreground-destructive flex w-full flex-col items-center justify-center gap-2 py-4",
		children: [/* @__PURE__ */ G("p", {
			className: "text-sm",
			children: s.filters.failedToLoadOptions
		}), /* @__PURE__ */ G("button", {
			className: C("text-f1-foreground-primary text-xs underline", S()),
			onClick: () => {
				h(!0);
			},
			children: s.filters.retry
		})]
	});
	if (d.length === 0 && !v) return /* @__PURE__ */ G("div", {
		className: "flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary",
		children: "No options available"
	});
	let E = d.length > 0 || v, D = b.length > 0 && b.every((e) => t.includes(e.value)), ee = (t.length > 0 || T) && !D, O = () => {
		let e = [...t ?? []];
		b.forEach((t) => {
			e.includes(t.value) || (e.push(t.value), Vx(_, t.value, t.label));
		}), n(e);
	}, k = () => {
		n([]), a && x.forEach((e) => {
			a(e, []);
		});
	}, A = (e) => {
		ee ? k() : e ? O() : k();
	}, j = () => {
		p || !g || !u.current || g();
	}, te = (e, r) => {
		let i = t.includes(e);
		i || Vx(_, e, r), n(i ? t.filter((t) => t !== e) : [...t, e]);
	}, ne = t.length + w, re = `${ne} ${ne === 1 ? s.status.selected.singular : s.status.selected.plural}`.toLowerCase(), ie = b.some((e) => !!e.children?.options.length), ae = !!y && ie;
	return /* @__PURE__ */ K("div", {
		className: "flex max-h-full w-full flex-col flex-1 min-h-0",
		role: "group",
		"aria-label": e.label,
		children: [
			E && /* @__PURE__ */ G("div", {
				className: "rounded-tr-xl p-2",
				children: /* @__PURE__ */ G(Px, {
					placeholder: s.filters.inFilter.searchPlaceholder,
					value: c,
					onChange: l,
					clearable: !0
				})
			}),
			/* @__PURE__ */ K("div", {
				className: C("flex w-full items-center justify-between gap-1 pb-1", r ? "px-2" : "px-3.5"),
				children: [/* @__PURE__ */ G("span", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ G(i, {
						className: "text-f1-foreground-secondary",
						children: re
					})
				}), /* @__PURE__ */ G(Tt, {
					title: s.actions.selectAll,
					checked: ee || D,
					indeterminate: ee,
					onCheckedChange: A,
					hideLabel: !0
				})]
			}),
			/* @__PURE__ */ K($e, {
				className: C("[&>div]:pb-2", r && "px-1", r ? "max-h-[360px]" : "flex-1 min-h-0"),
				onScrollBottom: j,
				scrollMargin: 50,
				children: [
					b.length === 0 && !p && /* @__PURE__ */ G("div", {
						className: "flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary",
						children: s.select.noResults
					}),
					ie ? b.map((e) => /* @__PURE__ */ G(qx, {
						option: e,
						isSelected: t.includes(e.value),
						onToggle: () => te(e.value, e.label),
						isCompactMode: r,
						depth: 0,
						onFilterChange: a,
						allFiltersValue: o,
						cacheKey: _,
						searchTerm: y,
						autoExpand: ae
					}, String(e.value))) : b.map((e) => /* @__PURE__ */ G(Ix, {
						option: e,
						isSelected: t.includes(e.value),
						onToggle: () => te(e.value, e.label),
						isCompactMode: r
					}, String(e.value))),
					p && /* @__PURE__ */ G("div", {
						className: "flex w-full items-center justify-center py-4",
						children: /* @__PURE__ */ G(Xt, { size: "small" })
					})
				]
			})
		]
	});
}
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/index.tsx
var Yx = {
	emptyValue: [],
	isEmpty: (e) => (e || []).length === 0,
	render: (e) => /* @__PURE__ */ G(Jx, { ...e }),
	chipLabel: async (e, { schema: t, filterKey: n }) => {
		let r = Bx(t);
		if (n) {
			let t = e.map((e) => Wx(n, e));
			if (t[0]) {
				let e = t.length - 1;
				return e > 0 ? `${t[0]} +${e}` : t[0];
			}
		}
		let i = e.map((e) => Hx(r, e));
		if (i[0]) {
			let e = i[0], t = i.length - 1;
			return t > 0 ? `${e} +${t}` : `${e}`;
		}
		if (t.options.getLabel) {
			let n = e[0];
			if (!n) return "";
			let i = Hx(r, n);
			if (i) {
				let t = e.length - 1;
				return t > 0 ? `${i} +${t}` : i;
			}
			let a = await t.options.getLabel(n);
			Vx(r, n, a);
			let o = e.length - 1;
			return o > 0 ? `${a} +${o}` : a;
		}
		let a = "options" in t.options ? t.options.options : [];
		if ("source" in t.options && t.options.source && "mapOptions" in t.options) {
			let t = e[0], n = e.length - 1;
			return n > 0 ? `${String(t)} +${n}` : String(t);
		}
		let o = await Gx(r, a, t.options.cache), s = e.map((e) => {
			let t = o.find((t) => t.value === e), n = t?.label ?? String(e);
			return t && Vx(r, e, n), n;
		}), c = s[0], l = s.length - 1;
		return l > 0 ? `${c} +${l}` : `${c}`;
	}
}, Xx = L.forwardRef(({ className: e, disabled: t, hideLabel: n, required: r, ...i }, a) => {
	let o = Cn(), s = i.id || o;
	return /* @__PURE__ */ K("div", {
		className: "flex items-center",
		children: [/* @__PURE__ */ K(u_, {
			...i,
			ref: a,
			id: s,
			name: s,
			"aria-label": i.title ?? "Switch",
			className: C("group relative flex h-6 w-[1.875rem] items-center bg-transparent", t && "!cursor-not-allowed opacity-50", "focus-visible:outline-none", e),
			disabled: t,
			children: [/* @__PURE__ */ G("span", {
				"aria-hidden": "true",
				className: C("pointer-events-none absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 rounded-full bg-f1-border transition-colors", "group-hover:bg-f1-border-hover group-data-[state=checked]:bg-f1-background-selected-bold", "group-focus-visible:ring-1 group-focus-visible:ring-f1-special-ring group-focus-visible:ring-offset-1")
			}), /* @__PURE__ */ G(d_, { className: C("relative block h-4 w-4 translate-x-[0.125rem] rounded-full bg-f1-background transition-transform duration-300 data-[state=checked]:translate-x-[0.75rem]") })]
		}), i.title && !n && /* @__PURE__ */ K("label", {
			htmlFor: s,
			className: C("flex items-center justify-center pl-2.5 text-current", t && "!cursor-not-allowed opacity-50 hover:!cursor-not-allowed"),
			children: [i.title, r && /* @__PURE__ */ G("span", {
				className: "ml-0.5 text-f1-foreground-critical",
				children: "*"
			})]
		})]
	});
});
Xx.displayName = u_.displayName;
//#endregion
//#region src/experimental/Forms/Fields/Switch/index.tsx
function Zx({ title: e, onCheckedChange: t, id: n, disabled: r, checked: i = !1, value: a, hideLabel: o = !1, presentational: s = !1, required: c = !1, ...l }) {
	return /* @__PURE__ */ G(Xx, {
		title: e,
		onCheckedChange: t,
		id: n,
		disabled: r,
		checked: i,
		value: a,
		hideLabel: o,
		required: c,
		tabIndex: s ? -1 : void 0,
		...l
	});
}
var Qx = m("Switch", Zx);
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/NumberFilter/NumberFilter.tsx
function $x({ value: e, onChange: t, schema: n, isCompactMode: r }) {
	let i = {
		mode: n.options?.modes?.[0] ?? "single",
		...n.options
	}, a = f(), o = De(), s = () => {
		t(void 0);
	}, c = i.modes === void 0 || i.modes?.length > 1, [l, u] = W(e ?? {
		mode: "single",
		value: void 0
	});
	$o(() => {
		u(e);
	}, [e]);
	let d = (e) => {
		u(e ? {
			mode: "range",
			from: {
				value: l?.mode === "single" ? l?.value : l?.from?.value,
				closed: !0
			},
			to: {
				value: l?.mode === "single" ? l?.value : l?.to?.value,
				closed: !0
			}
		} : {
			mode: "single",
			value: l?.mode === "single" ? l?.value : l?.from?.value
		});
	}, p = (e, t) => {
		l?.mode === "range" && u({
			...l,
			[e]: {
				...l?.[e],
				closed: t
			}
		});
	}, m = (e, t) => {
		u((n) => n?.mode === "range" ? {
			...n,
			[t]: {
				...n?.[t] ?? {},
				value: e ?? void 0
			}
		} : {
			...n ?? {
				mode: "single",
				value: void 0
			},
			value: e ?? void 0
		});
	};
	$o(() => {
		l?.mode === "range" ? t({
			mode: "range",
			from: {
				value: l?.from?.value,
				closed: l?.from?.closed ?? !1
			},
			to: {
				value: l?.to?.value,
				closed: l?.to?.closed ?? !1
			}
		}) : t({
			mode: "single",
			value: l?.value
		});
	}, [l]);
	let h = H(() => ({
		from: {
			value: l?.mode === "range" ? l?.from?.value : l?.value,
			closed: l?.mode !== "range" || l?.from?.closed
		},
		to: {
			value: l?.mode === "range" ? l?.to?.value : l?.value,
			closed: l?.mode !== "range" || l?.to?.closed
		}
	}), [l]);
	return /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ K("div", {
		className: "flex flex-col gap-2 space-y-4 overflow-x-hidden p-4",
		children: [/* @__PURE__ */ K("div", {
			className: "flex flex-row gap-2",
			children: [/* @__PURE__ */ G("div", {
				className: "min-w-1/2 flex-1",
				children: /* @__PURE__ */ G(jt, {
					label: l?.mode === "range" ? l?.from?.closed ? a.filters.number.greaterOrEqual : a.filters.number.greaterThan : a.filters.number.value,
					locale: o.locale,
					value: h.from.value,
					onChange: (e) => m(e, "from"),
					max: i.max,
					min: i.min,
					buttonToggle: l?.mode === "range" && i.openCloseToggle ? {
						label: [a.filters.number.greaterThan, a.filters.number.greaterOrEqual],
						icon: [Jn, Gn],
						selected: h.from.closed,
						onChange: (e) => p("from", e)
					} : void 0
				})
			}), l?.mode === "range" && /* @__PURE__ */ G("div", {
				className: "min-w-1/2 flex-1",
				children: /* @__PURE__ */ G(jt, {
					label: l?.to?.closed ? a.filters.number.lessOrEqual : a.filters.number.lessThan,
					locale: o.locale,
					value: h.to.value,
					onChange: (e) => m(e, "to"),
					max: i.max,
					min: i.min,
					buttonToggle: l?.mode === "range" && i.openCloseToggle ? {
						label: [a.filters.number.lessThan, a.filters.number.lessOrEqual],
						icon: [Xn, Kn],
						selected: h.to.closed,
						onChange: (e) => p("to", e)
					} : void 0
				})
			})]
		}), c && /* @__PURE__ */ G(Qx, {
			title: a.filters.number.rangeTitle,
			checked: l?.mode === "range",
			onCheckedChange: d
		})]
	}), !r && /* @__PURE__ */ G("div", {
		className: "sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]",
		children: /* @__PURE__ */ G(ve, {
			variant: "ghost",
			label: a.actions.clear,
			onClick: () => s(),
			disabled: !e,
			size: "sm"
		})
	})] });
}
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/NumberFilter/index.tsx
var eS = (e) => !e || e?.mode === "range" && e?.from?.value === e?.to?.value && e?.from?.value === void 0 || e?.mode === "single" && e?.value === void 0, tS = {
	min: void 0,
	max: void 0
}, nS = {
	emptyValue: void 0,
	render: (e) => {
		let t = Ox(e.schema.options, tS);
		return /* @__PURE__ */ G($x, {
			...e,
			schema: {
				...e.schema,
				options: t
			}
		});
	},
	isEmpty: eS,
	chipLabel: (e, t) => {
		let n = t.i18n;
		if (e?.mode === "single" || e?.mode === void 0) return e?.value === void 0 ? "" : n.t("filters.number.equalShort", { value: e?.value?.toString() });
		if (e?.mode === "range") {
			if (e?.from?.value !== void 0 && e?.to?.value !== void 0) return n.t("filters.number.range", {
				min: e?.from?.value,
				max: e?.to?.value,
				minStrict: e?.from?.closed ? "≥" : ">",
				maxStrict: e?.to?.closed ? "≤" : "<"
			});
			if (e?.to?.value !== void 0) return e?.to?.closed ? n.t("filters.number.lessThanOrEqualShort", { value: e?.to?.value }) : n.t("filters.number.lessThanShort", { value: e?.to?.value });
			if (e?.from?.value !== void 0) return e?.from?.closed ? n.t("filters.number.greaterThanOrEqualShort", { value: e?.from?.value }) : n.t("filters.number.greaterThanShort", { value: e?.from?.value });
		}
		return "";
	}
};
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/SearchFilter/SearchFilter.tsx
function rS({ schema: e, value: t, onChange: n }) {
	let r = "options" in e ? e.options : void 0, i = (r && "defaultStrict" in r && r.defaultStrict) ?? !1, a = {
		strictToggle: r ? r.strictToggle : !1,
		defaultStrict: r ? i : !1,
		...e.options
	}, o = f(), s = (e) => {
		a.strictToggle ? n({
			value: e,
			strict: l
		}) : n(e);
	}, c = (e) => {
		u(e), n({
			value: d ?? "",
			strict: e
		});
	}, [l, u] = W(a.defaultStrict), d = H(() => typeof t == "object" && "value" in t ? t.value : t ?? "", [t]);
	return /* @__PURE__ */ G("div", {
		className: "space-y-4 p-2",
		children: /* @__PURE__ */ G(Zt, {
			label: `Search ${e.label.toLowerCase()}...`,
			hideLabel: !0,
			placeholder: `Search ${e.label.toLowerCase()}...`,
			value: d,
			onChange: s,
			clearable: !0,
			buttonToggle: a.strictToggle ? {
				label: [o.filters.search.relaxed, o.filters.search.strict],
				icon: [Wn, Un],
				selected: l,
				onChange: c
			} : void 0
		})
	});
}
//#endregion
//#region src/patterns/OneFilterPicker/filterTypes/filters.tsx
var iS = {
	in: Yx,
	search: {
		emptyValue: "",
		defaultOptions: { strictToggle: !1 },
		render: (e) => /* @__PURE__ */ G(rS, { ...e }),
		isEmpty: (e) => typeof e == "object" && "value" in e ? e.value?.trim() === "" : (e ?? "").trim() === "",
		chipLabel: (e) => typeof e == "object" && "value" in e ? {
			label: e.value,
			icon: e.strict ? be : void 0,
			avatar: void 0
		} : e ?? ""
	},
	date: Nx,
	number: nS
}, aS = (e, t, n) => Object.keys(e).filter((r) => {
	let i = t[r], a = e[r];
	return !kx(a.type).isEmpty(i, {
		schema: a,
		i18n: n
	});
});
//#endregion
//#region src/patterns/OneFilterPicker/components/FilterChipButton.tsx
function oS({ filter: e, filterKey: t, value: n, onSelect: r, onRemove: i }) {
	let [a, o] = W(!0), s = l(), c = kx(e.type), u = f(), [d, p] = W({ label: "" });
	return V(() => {
		(async () => {
			if (n === void 0) return;
			o(!0);
			let r = c.chipLabel, i = await r(n, {
				schema: e,
				i18n: u,
				filterKey: t
			}), a = typeof i == "object" ? i : {
				label: i,
				icon: void 0,
				avatar: void 0
			};
			p({
				label: `${e.label}: ${a.label}`,
				icon: a.icon,
				avatar: a.avatar
			}), o(!1);
		})();
	}, [
		n,
		c,
		e
	]), /* @__PURE__ */ G(h.div, {
		layout: !0,
		initial: !s && {
			opacity: 0,
			scale: .8
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: s ? void 0 : {
			opacity: 0,
			scale: .8
		},
		transition: s ? { duration: 0 } : {
			type: "spring",
			duration: .2
		},
		children: a ? /* @__PURE__ */ G(he, { className: "h-5 w-[100px]" }) : /* @__PURE__ */ G(An, { children: /* @__PURE__ */ G(Pu, {
			variant: "selected",
			...d,
			onClose: i,
			onClick: r
		}) })
	});
}
//#endregion
//#region src/patterns/OneFilterPicker/components/FiltersChipsList.tsx
function sS({ filters: e, value: t = {}, onFilterSelect: n, onFilterRemove: r, onClearAll: i, hideChips: a = !1, resultCount: o }) {
	let s = f(), c = aS(e, t, s), l = !a && c.length > 0;
	return l ? /* @__PURE__ */ K("div", {
		className: "mt-2 flex items-center gap-2",
		children: [/* @__PURE__ */ K("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [o !== void 0 && l && /* @__PURE__ */ G(ft, { text: s.t(o === 1 ? "filters.resultsFor.one" : "filters.resultsFor.other", { count: o }) }), /* @__PURE__ */ G(g, {
				presenceAffectsLayout: !0,
				initial: !1,
				children: l && c.map((i) => {
					let a = e[i];
					if (!e[i]) return null;
					let o = t?.[i];
					return kx(a.type).isEmpty(o, {
						schema: a,
						i18n: s
					}) ? null : /* @__PURE__ */ G(oS, {
						filter: a,
						filterKey: String(i),
						value: o,
						onSelect: () => n(i),
						onRemove: () => r(i)
					}, `filter-${String(i)}`);
				})
			})]
		}), /* @__PURE__ */ G(ve, {
			variant: "neutral",
			label: s.actions.clear,
			size: "sm",
			onClick: i
		})]
	}) : null;
}
//#endregion
//#region src/patterns/OneFilterPicker/components/FilterContent.tsx
function cS({ selectedFilterKey: e, definition: t, tempFilters: n, onFilterChange: r, isCompactMode: i }) {
	if (!e) return null;
	let a = t[e], o = kx(a.type);
	if (!o) throw Error(`Filter type ${a.type} not found`);
	let s = n[e] || o.emptyValue, c = (e, t) => {
		r(e, t);
	};
	function l({ schema: e, value: t, onChange: r }) {
		return kx(e.type).render({
			schema: e,
			value: t,
			onChange: r,
			isCompactMode: i,
			onFilterChange: c,
			allFiltersValue: n
		});
	}
	return /* @__PURE__ */ G("div", {
		className: "relative flex h-full w-full flex-col gap-1",
		children: /* @__PURE__ */ G("div", {
			className: "relative flex h-full flex-col justify-between overflow-y-auto overflow-x-hidden",
			children: l({
				schema: a,
				value: s,
				onChange: (t) => {
					r(e, t);
				}
			})
		})
	});
}
//#endregion
//#region src/patterns/OneFilterPicker/components/FilterList.tsx
function lS({ definition: e, tempFilters: t, selectedFilterKey: n, onFilterSelect: r, isCompactMode: a, onClickApplyFilters: s }) {
	let c = f(), u = Cn(), d = l(), p = a ? ct : $e, m = H(() => {
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of Object.entries(e)) if (r.type === "in" && "options" in r) {
			let e = Dx(r.options);
			e.length > 0 && t.set(n, e);
		}
		return t;
	}, [e]);
	return /* @__PURE__ */ G("div", {
		className: C("z-30 flex h-full flex-col", a ? "min-w-[224px] w-full" : "w-56", !a && "border border-solid border-transparent border-r-f1-border-secondary"),
		children: /* @__PURE__ */ K("div", {
			className: C("flex flex-1 h-full w-full flex-col min-h-0 max-h-full gap-1 overflow-x-hidden p-2"),
			children: [
				a && /* @__PURE__ */ G("div", { className: "-mx-2 mb-1 h-px border-0 border-t border-solid border-f1-border-secondary" }),
				/* @__PURE__ */ G(p, {
					className: "flex-1 min-h-0 max-h-full",
					children: /* @__PURE__ */ G("div", {
						className: "flex flex-col gap-1",
						children: Object.entries(e).map(([e, s]) => {
							let l = kx(s.type), f = t[e], p = !l.isEmpty(f, {
								schema: s,
								i18n: c
							}), _ = m.get(e), v = !p && !!_?.some((e) => {
								let n = t[e];
								return Array.isArray(n) && n.length > 0;
							}), y = p || v;
							return /* @__PURE__ */ K("button", {
								className: C("group relative flex w-full appearance-none items-center justify-between rounded px-2 py-1.5 font-medium transition-colors", "hover:bg-f1-background-secondary", n === e && "bg-f1-background-secondary", S()),
								onClick: () => r(e),
								"aria-label": s.label,
								"aria-describedby": y ? `${u}-${e}` : void 0,
								children: [/* @__PURE__ */ K("div", {
									className: "flex w-full items-center justify-start gap-2.5 overflow-hidden",
									children: [
										/* @__PURE__ */ G(i, {
											className: "flex-1 text-left text-f1-foreground",
											children: s.label
										}),
										/* @__PURE__ */ G(g, { children: y && /* @__PURE__ */ G(h.span, {
											className: "h-2 w-2 shrink-0 rounded-full bg-f1-background-selected-bold",
											initial: !d && {
												opacity: 0,
												scale: .7
											},
											animate: {
												opacity: 1,
												scale: 1
											},
											exit: d ? void 0 : {
												opacity: 0,
												scale: .7
											}
										}) }),
										a && /* @__PURE__ */ G(o, { icon: ht })
									]
								}), y && /* @__PURE__ */ G("span", {
									id: `${u}-${e}`,
									className: "sr-only",
									children: c.t("filters.activeFilters", { filters: s.label })
								})]
							}, e);
						})
					})
				}),
				a && /* @__PURE__ */ G("div", {
					className: "-mx-2 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2",
					children: /* @__PURE__ */ G(ve, {
						onClick: s,
						label: c.filters.applyFilters
					})
				})
			]
		})
	});
}
//#endregion
//#region src/patterns/F0FilterPickerContent/internal.tsx
function uS({ filters: e, tempFilters: t, selectedFilterKey: n, onFilterSelect: r, onFilterChange: i, onApply: a, onClear: o, height: s, showApplyButton: c = !0, applyButtonLabel: l, className: u }) {
	let d = f();
	return /* @__PURE__ */ K("div", {
		className: C("flex flex-col transition-all", "max-h-[calc(var(--radix-popover-content-available-height)-15px)] min-h-[250px]", u),
		style: { height: s },
		children: [/* @__PURE__ */ K("div", {
			className: "flex min-h-0 flex-1",
			children: [/* @__PURE__ */ G(lS, {
				definition: e,
				tempFilters: t,
				selectedFilterKey: n,
				onFilterSelect: r,
				onClickApplyFilters: a
			}), n && /* @__PURE__ */ G("div", {
				className: "min-w-[340px] flex-1",
				children: /* @__PURE__ */ G(cS, {
					selectedFilterKey: n,
					definition: e,
					tempFilters: t,
					onFilterChange: i
				})
			})]
		}), c || o ? /* @__PURE__ */ K("div", {
			className: "flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2",
			children: [o && /* @__PURE__ */ G(ve, {
				onClick: o,
				label: d.collections.emptyStates.noResults.clearFilters,
				variant: "outline"
			}), c && /* @__PURE__ */ G(ve, {
				onClick: a,
				label: l ?? d.filters.applyFilters
			})]
		}) : null]
	});
}
uS.displayName = "FilterPickerInternal";
//#endregion
//#region src/patterns/OneFilterPicker/internal/getClearedFiltersValue.ts
function dS(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		let e = n;
		if (t[e] = kx(r.type).emptyValue, !(r.type !== "in" || !("options" in r))) for (let e of Dx(r.options)) t[e] = [];
	}
	return t;
}
//#endregion
//#region src/patterns/OneFilterPicker/internal/getActiveFiltersValue.ts
var fS = (e, t, n) => {
	let r = {};
	for (let i of aS(e, t, n)) r[i] = t[i];
	return r;
}, pS = 388;
function mS({ id: e, text: t }) {
	return /* @__PURE__ */ G("span", {
		id: e,
		title: t,
		className: "sr-only"
	});
}
var hS = z((e, t) => /* @__PURE__ */ G(me, {
	...e,
	ref: t
}));
hS.displayName = "DescribedFilterButton";
function gS({ filters: e, allFilters: t, value: n, onChange: r, isOpen: i, onOpenChange: a, hideLabel: o, mode: s = "default", displayCounter: c = !1 }) {
	let l = t ?? e, u = Object.keys(e)[0] ?? null, [d, p] = W(s === "compact" ? null : u), m = f(), _ = xn(Sg), v = _.portalContainer && (_.position === "center" || _.position === "fullscreen") ? _.portalContainer : void 0, [y, b] = se({
		prop: i,
		defaultProp: !1,
		onChange: a
	}), [x, S] = W(n), C = U(y);
	V(() => {
		C.current = y;
	}, [y]);
	let w = U(!1), T = (e) => {
		let t = C.current;
		if (!w.current) {
			if (t) {
				w.current = !0, S(n), b(!1), setTimeout(() => {
					w.current = !1;
				}, 150);
				return;
			}
			b(e);
		}
	}, E = U(n);
	V(() => {
		(0, Fu.default)(E.current, n) || (E.current = n, S(n));
	}, [n]);
	let D = (e, t) => {
		S((n) => ({
			...n,
			[e]: t
		}));
	}, ee = () => {
		r(fS(l, x, m)), T(!1);
	}, O = () => {
		S(dS(l));
	}, k = () => {
		d ? p(null) : (r(fS(l, x, m)), T(!1));
	}, A = () => {
		S(n), T(!1);
	}, j = () => {
		k();
	};
	V(() => {
		let t = () => Object.entries(x || {}).find(([t, n]) => e[t] ? !kx(e[t].type).isEmpty(n, {
			schema: e[t],
			i18n: m
		}) : !1);
		if (y && s === "default") {
			let n = t();
			if (n) p(n[0]);
			else {
				let t = Object.keys(e)[0];
				p(t);
			}
		}
	}, [y]);
	let te = H(() => Object.entries(e).reduce((e, [t, n]) => {
		let r = kx(n.type);
		return Math.max(e, r?.formHeight || pS);
	}, 0), [e]), ne = Cn(), re = `${ne}-active-filters-description`, ie = H(() => aS(l, n, m), [
		l,
		n,
		m
	]), ae = ie.length === 0 ? void 0 : ie.length, M = H(() => ie.length > 0 ? m.t("filters.activeFilters", { filters: ie.map((e) => l[e].label).join(", ") }) : void 0, [ie, l]);
	if (s === "inline") {
		let t = !!Object.values(x).length;
		return /* @__PURE__ */ K("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ K("div", {
				className: "relative",
				children: [/* @__PURE__ */ G(hS, {
					variant: "outline",
					label: m.filters.label,
					"aria-describedby": M ? re : void 0,
					append: M ? /* @__PURE__ */ G(mS, {
						id: re,
						text: M
					}) : void 0,
					icon: qn,
					pressed: y,
					onClick: () => T(!y),
					"aria-controls": y ? ne : void 0,
					hideLabel: !0,
					tooltip: M
				}), t && /* @__PURE__ */ G("div", { className: "absolute right-0 top-0 aspect-square w-2 rounded-full border border-solid border-f1-background bg-f1-background-selected-bold" })]
			}), /* @__PURE__ */ G(g, {
				mode: "popLayout",
				propagate: !1,
				children: y && /* @__PURE__ */ G(h.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 8
					},
					transition: {
						type: "spring",
						duration: .3,
						bounce: 0
					},
					className: "absolute bottom-0 left-0 right-0 top-0 z-20 bg-f1-background",
					children: /* @__PURE__ */ K("div", {
						className: "flex h-full flex-col flex-1 min-h-0 max-h-full",
						children: [
							/* @__PURE__ */ K("div", {
								className: "flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary px-2 py-1.5",
								children: [/* @__PURE__ */ G(me, {
									variant: "ghost",
									icon: Bn,
									label: m.filters.label,
									hideLabel: !0,
									size: "sm",
									onClick: A
								}), /* @__PURE__ */ G("span", {
									className: "text-base font-medium text-f1-foreground",
									children: m.filters.label
								})]
							}),
							/* @__PURE__ */ K("div", {
								className: "flex flex-1 min-h-0 max-h-full",
								children: [/* @__PURE__ */ G(lS, {
									definition: e,
									tempFilters: x,
									selectedFilterKey: d,
									onFilterSelect: (e) => p(e),
									onClickApplyFilters: ee
								}), d && /* @__PURE__ */ G("div", {
									className: "flex-1 min-w-0 overflow-hidden",
									children: /* @__PURE__ */ G(cS, {
										selectedFilterKey: d,
										definition: e,
										tempFilters: x,
										onFilterChange: D
									})
								})]
							}),
							/* @__PURE__ */ G("div", {
								className: "flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2 bg-f1-background",
								children: /* @__PURE__ */ G(ve, {
									onClick: ee,
									label: m.filters.applyFilters
								})
							})
						]
					})
				})
			})]
		});
	}
	if (s === "compact") {
		let t = !!Object.values(x).length, n = d ? m.t("filters.filteringBy", { label: e[d].label }) : m.t("filters.availableFilters"), r = /* @__PURE__ */ K("div", {
			className: "flex items-center gap-2 pl-1.5 py-1.5",
			children: [/* @__PURE__ */ G(ve, {
				label: "Back",
				icon: Bn,
				hideLabel: !0,
				variant: "ghost",
				size: "sm",
				onClick: k
			}), n]
		}), i = /* @__PURE__ */ G(An, { children: d && /* @__PURE__ */ G("div", {
			className: "sticky bottom-0 left-0 right-0 z-30 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2 bg-f1-background",
			children: /* @__PURE__ */ G(ve, {
				onClick: j,
				label: m.filters.applySelection
			})
		}) });
		return /* @__PURE__ */ K("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ K("div", {
				className: "relative",
				children: [/* @__PURE__ */ G(hS, {
					variant: "outline",
					label: m.filters.label,
					"aria-describedby": M ? re : void 0,
					append: M ? /* @__PURE__ */ G(mS, {
						id: re,
						text: M
					}) : void 0,
					icon: qn,
					pressed: y,
					onClick: () => T(!y),
					"aria-controls": y ? ne : void 0,
					hideLabel: !0,
					tooltip: M
				}), t && /* @__PURE__ */ G("div", { className: "absolute right-0 top-0 aspect-square w-2 rounded-full border border-solid border-f1-background bg-f1-background-selected-bold" })]
			}), /* @__PURE__ */ G(g, {
				mode: "popLayout",
				propagate: !1,
				children: y && /* @__PURE__ */ G(h.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 8
					},
					transition: {
						type: "spring",
						duration: .3,
						bounce: 0
					},
					className: "absolute bottom-0 left-0 right-0 top-0 z-20 bg-f1-background",
					children: /* @__PURE__ */ K("div", {
						className: "flex h-full flex-col transition-all flex-1 min-h-0 max-h-full",
						children: [
							r,
							/* @__PURE__ */ G("div", {
								className: "flex flex-1 min-h-0 max-h-full",
								children: d ? /* @__PURE__ */ G(h.div, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									transition: { duration: .2 },
									className: "h-full w-full bg-f1-background",
									children: /* @__PURE__ */ G(cS, {
										selectedFilterKey: d,
										definition: e,
										tempFilters: x,
										onFilterChange: D,
										isCompactMode: !0
									})
								}, "filter-content") : /* @__PURE__ */ G(h.div, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									transition: { duration: .2 },
									className: "h-full w-full bg-f1-background",
									children: /* @__PURE__ */ G(lS, {
										definition: e,
										tempFilters: x,
										selectedFilterKey: d,
										onFilterSelect: (e) => p(e),
										onClickApplyFilters: ee,
										isCompactMode: !0
									})
								}, "filter-list")
							}),
							i
						]
					})
				})
			})]
		});
	}
	return /* @__PURE__ */ G("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ K(Rt, {
			open: y,
			onOpenChange: T,
			modal: !0,
			children: [/* @__PURE__ */ G(Nt, {
				asChild: !0,
				children: /* @__PURE__ */ G(hS, {
					variant: "outline",
					label: m.filters.label,
					"aria-describedby": M ? re : void 0,
					append: M ? /* @__PURE__ */ G(mS, {
						id: re,
						text: M
					}) : void 0,
					icon: qn,
					pressed: y,
					hideLabel: o,
					"aria-controls": y ? ne : void 0,
					counterValue: c ? ae : void 0
				})
			}), /* @__PURE__ */ G(It, {
				className: "w-fit min-w-[600px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md",
				align: "start",
				side: "bottom",
				id: ne,
				"aria-label": m.filters.label,
				container: v,
				children: /* @__PURE__ */ G(uS, {
					filters: e,
					tempFilters: x,
					selectedFilterKey: d,
					onFilterSelect: p,
					onFilterChange: D,
					onApply: ee,
					onClear: O,
					height: te || pS
				})
			})]
		})
	});
}
var _S = m("Preset", ({ label: e, number: t, onClick: n, selected: r, description: i, onEdit: a }) => {
	let o = f(), s = !!a, [c, l] = W(!1), u = /* @__PURE__ */ K(h.label, {
		layout: !0,
		transition: {
			duration: .15,
			ease: "easeOut"
		},
		onMouseEnter: s ? () => l(!0) : void 0,
		onMouseLeave: s ? () => l(!1) : void 0,
		className: C("group flex min-w-0 cursor-default appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all", n && "focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2", t && "pr-1.5", n && "cursor-pointer hover:outline-f1-border-hover", r && "bg-f1-background-selected-secondary text-f1-foreground-selected outline-f1-border-selected hover:outline-f1-border-selected"),
		children: [
			/* @__PURE__ */ G("input", {
				type: "checkbox",
				className: "sr-only",
				checked: r,
				onChange: () => n?.()
			}),
			/* @__PURE__ */ G("span", {
				className: "min-w-0 truncate",
				children: e
			}),
			t !== void 0 && /* @__PURE__ */ G(Zv, {
				resolve: t,
				fallback: /* @__PURE__ */ G(he, { className: "h-4 w-4" }),
				children: (e) => e !== void 0 && /* @__PURE__ */ G(pe, {
					value: e,
					type: r ? "selected" : "default"
				})
			}),
			s && /* @__PURE__ */ G(g, {
				initial: !1,
				children: c && /* @__PURE__ */ G(h.span, {
					className: "-my-0.5 -ml-1.5 -mr-1 flex items-center gap-0.5 overflow-hidden",
					initial: {
						opacity: 0,
						width: 0
					},
					animate: {
						opacity: 1,
						width: "auto"
					},
					exit: {
						opacity: 0,
						width: 0
					},
					transition: {
						duration: .15,
						ease: "easeOut"
					},
					children: a && /* @__PURE__ */ G(ve, {
						variant: "ghost",
						size: "sm",
						hideLabel: !0,
						label: o.actions.editPreset,
						icon: Zn,
						onClick: ((e) => (t) => {
							t.preventDefault(), t.stopPropagation(), e();
						})(a)
					})
				}, "preset-actions")
			})
		]
	});
	return i ? /* @__PURE__ */ G(le, {
		delayDuration: 400,
		children: /* @__PURE__ */ K(ue, { children: [/* @__PURE__ */ G(ie, {
			asChild: !0,
			children: u
		}), /* @__PURE__ */ G(N, {
			className: "max-w-xs",
			children: /* @__PURE__ */ G("p", {
				className: "font-normal",
				children: i
			})
		})] })
	}) : u;
}), vS = (e, t) => {
	let n = e.filter;
	if (typeof n != "object" || !n || Array.isArray(n)) return !1;
	let r = Object.keys(n).filter((e) => n[e] !== void 0), i = Object.keys(t).filter((e) => t[e] !== void 0);
	return r.length === i.length && Object.entries(n).filter(([, e]) => e !== void 0).every(([e, n]) => (0, Fu.default)(t[e], n));
}, yS = 4, bS = ({ presets: e, value: t, onPresetsChange: n, presetsLoading: r = !1, selectedPresetId: i, onSelectPreset: a, editablePresetIds: s, onEditPreset: c, presetActionState: l = "none", onPresetAction: u }) => {
	let d = f(), p = H(() => typeof t == "object" && t && !Array.isArray(t) ? t : {}, [t]), m = (e, t) => {
		if (a) return {
			isSelected: t === i,
			handleClick: () => a(t)
		};
		let r = vS(e, p);
		return {
			isSelected: r,
			handleClick: () => {
				r ? n?.({}) : n?.({ ...e.filter });
			}
		};
	}, h = H(() => !e || e.length === 0 ? [] : e.filter((e) => e && e.filter != null && typeof e.filter == "object" && !Array.isArray(e.filter)), [e]), g = H(() => {
		let e = h.map((e, t) => ({
			preset: e,
			presetId: e.id ?? `${e.label}-${t}`,
			key: `${e.label}-${t}`
		})), t = (e) => s?.includes(e) ?? !1, n = e.filter((e) => !t(e.presetId)), r = e.filter((e) => t(e.presetId)), i = (e) => ({
			kind: "preset",
			...e
		});
		return [
			...n.map(i),
			...n.length > 0 && r.length > 0 ? [{
				kind: "separator",
				key: "preset-group-separator"
			}] : [],
			...r.map(i)
		];
	}, [h, s]), _ = H(() => l === "save" ? [...g, {
		kind: "save",
		key: "save-as-preset"
	}] : g, [g, l]), v = (e, t, n = !0) => {
		if (e.kind === "separator") return /* @__PURE__ */ G("div", {
			className: "mx-1 flex items-center",
			"data-visible": n,
			"data-testid": "preset-group-separator",
			children: /* @__PURE__ */ G("div", { className: "h-4 w-px bg-f1-background-secondary-hover" })
		});
		if (e.kind === "save") return /* @__PURE__ */ K("button", {
			type: "button",
			"data-visible": n,
			onClick: () => u?.(),
			className: C("flex shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded px-2.5 py-1.5 font-medium text-f1-foreground opacity-60 outline-dashed outline-1 outline-f1-border transition-opacity hover:opacity-100", S()),
			children: [/* @__PURE__ */ G(o, {
				icon: zn,
				size: "sm"
			}), d.actions.saveAsPreset]
		});
		let { preset: r, presetId: i } = e, { isSelected: a, handleClick: l } = m(r, i), f = r.itemsCount?.(p), h = s?.includes(i) ?? !1;
		return /* @__PURE__ */ G(_S, {
			label: r.label,
			description: r.description,
			selected: a,
			onClick: l,
			"data-visible": n,
			number: f,
			onEdit: h && c ? () => c(i) : void 0
		});
	}, y = (e) => {
		if (e.kind === "separator") return /* @__PURE__ */ G("div", { className: "my-1 h-px w-full bg-f1-border-secondary" });
		if (e.kind === "save") return /* @__PURE__ */ K("button", {
			type: "button",
			onClick: () => u?.(),
			className: C("flex w-full cursor-pointer items-center gap-1 rounded-sm p-2 text-left font-medium text-f1-foreground opacity-70 hover:bg-f1-background-secondary hover:opacity-100", S()),
			children: [/* @__PURE__ */ G(o, {
				icon: zn,
				size: "sm"
			}), d.actions.saveAsPreset]
		});
		let { preset: t, presetId: n } = e, { isSelected: r, handleClick: i } = m(t, n), a = t.itemsCount?.(p);
		return /* @__PURE__ */ K("button", {
			className: C("flex w-full cursor-pointer items-center justify-between rounded-sm p-2 text-left font-medium text-f1-foreground hover:bg-f1-background-secondary", r && "bg-f1-background-selected hover:bg-f1-background-selected", S()),
			onClick: i,
			"data-visible": !0,
			children: [t.label, a !== void 0 && /* @__PURE__ */ G(Zv, {
				resolve: a,
				fallback: /* @__PURE__ */ G(he, { className: "h-4 w-6" }),
				children: (e) => e !== void 0 && /* @__PURE__ */ G(pe, {
					value: e,
					type: r ? "selected" : "default"
				})
			})]
		});
	}, b = (e, t, n = !0) => /* @__PURE__ */ G(he, {
		className: "h-8 w-32 rounded-md",
		"data-visible": n
	}, t), x = (e, t) => /* @__PURE__ */ K("div", {
		className: "flex w-full items-center justify-between rounded-sm p-2",
		"data-visible": !0,
		children: [/* @__PURE__ */ G(he, { className: "h-4 w-24" }), /* @__PURE__ */ G(he, { className: "h-4 w-6" })]
	}, t);
	if (r) {
		let e = Array.from({ length: yS }, (e, t) => t);
		return /* @__PURE__ */ G(Ee, {
			items: e,
			renderListItem: b,
			renderDropdownItem: x,
			className: "min-w-0 flex-1"
		});
	}
	return _.length === 0 ? null : /* @__PURE__ */ G(Ee, {
		items: _,
		renderListItem: v,
		renderDropdownItem: y,
		className: "min-w-0 flex-1",
		min: 1,
		fluidItems: !0
	});
}, xS = R({
	filters: {},
	value: {},
	presets: [],
	presetsLoading: !1,
	removeFilterValue: () => {},
	setFiltersValue: () => {},
	isFiltersOpen: !1,
	setIsFiltersOpen: () => {},
	emitFilterChange: () => {},
	emitPresetClick: () => {},
	mode: "default",
	displayCounter: !1,
	resultCount: void 0,
	selectedPresetId: void 0,
	onSelectPreset: void 0,
	editablePresetIds: void 0,
	onEditPreset: void 0,
	presetActionState: "none",
	onPresetAction: void 0
}), SS = R("optimistic"), CS = ({ filters: e, value: t, children: n, presetsLoading: r = !1, mode: i = "default", onOpenChange: a, ...o }) => {
	let s = xn(SS), { emitFilterChange: c, emitPresetClick: l } = Cx({ defaultFilters: U(t).current }), [u, d] = W(!1);
	V(() => {
		a?.(u);
	}, [u, a]);
	let [f, p] = W(t);
	V(() => {
		p(t ?? {});
	}, [JSON.stringify(e), JSON.stringify(t)]);
	let m = s === "controlled" ? t : f, h = (t) => {
		let n = { ...m };
		delete n[t];
		let r = e?.[t];
		r?.type === "in" && r.options && Dx(r.options).forEach((e) => {
			delete n[e];
		}), s === "optimistic" && p(n), o.onChange(n);
	}, g = (e) => {
		s === "optimistic" && p(e), o.onChange(e);
	};
	return /* @__PURE__ */ G(xS.Provider, {
		value: {
			...o,
			mode: i,
			presets: o.presets,
			presetsLoading: r,
			value: m,
			filters: e,
			removeFilterValue: h,
			setFiltersValue: (e) => g(e),
			isFiltersOpen: u,
			setIsFiltersOpen: d,
			emitFilterChange: c,
			emitPresetClick: l
		},
		children: n
	});
};
CS.displayName = "OneFilterPicker.Root";
var wS = () => {
	let { value: e, filters: t, isFiltersOpen: n, setIsFiltersOpen: r, setFiltersValue: i, presets: a, emitFilterChange: o, mode: s, displayCounter: c } = xn(xS), l = t ? Object.fromEntries(Object.entries(t).filter(([e, t]) => !t.hideSelector)) : void 0;
	return !l || Object.keys(l).length === 0 ? null : /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G(gS, {
		filters: l,
		allFilters: t,
		value: e,
		onChange: (e) => {
			o(e), i(e);
		},
		onOpenChange: r,
		isOpen: n,
		hideLabel: !!a || s === "simple",
		mode: s,
		displayCounter: c
	}), !!a?.length && /* @__PURE__ */ G("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ G("div", { className: "mx-2 h-4 w-px bg-f1-background-secondary-hover" })
	})] });
};
wS.displayName = "OneFilterPicker.Controls";
var TS = () => {
	let { presets: e, presetsLoading: t, value: n, setFiltersValue: r, emitPresetClick: i, selectedPresetId: a, onSelectPreset: o, editablePresetIds: s, onEditPreset: c, presetActionState: l, onPresetAction: u } = xn(xS);
	return e && /* @__PURE__ */ G(wx, {
		onError: (e) => console.error("[f0-react] FiltersPresets failed to render; hiding the presets row", e),
		children: /* @__PURE__ */ G(bS, {
			presets: e,
			presetsLoading: t,
			value: n,
			onPresetsChange: (e) => {
				i(e), r(e);
			},
			selectedPresetId: a,
			onSelectPreset: o ? (t) => {
				let n = e?.find((e, n) => (e.id ?? `${e.label}-${n}`) === t);
				n && i(n.filter), o(t);
			} : void 0,
			editablePresetIds: s,
			onEditPreset: c,
			presetActionState: l,
			onPresetAction: u
		})
	});
};
TS.displayName = "Filters.Presets";
var ES = () => {
	let { value: e, filters: t, setIsFiltersOpen: n, presets: r, removeFilterValue: i, setFiltersValue: a, resultCount: o, onSelectPreset: s } = xn(xS), c = H(() => s || !r?.length ? !1 : r.some((t) => vS(t, e)), [
		r,
		e,
		s
	]);
	return t && /* @__PURE__ */ G(sS, {
		filters: t,
		value: e,
		onFilterSelect: () => n(!0),
		onFilterRemove: i,
		onClearAll: () => a({}),
		hideChips: c,
		resultCount: o
	});
};
ES.displayName = "OneFilterPicker.ChipsList";
var DS = (e) => {
	let { dataTestId: t, ...n } = e;
	return /* @__PURE__ */ G(a, {
		dataTestId: t,
		children: /* @__PURE__ */ K(CS, {
			...n,
			children: [/* @__PURE__ */ K("div", {
				className: C("flex items-center justify-between gap-4", !n.filters && "justify-end"),
				children: [n.filters && /* @__PURE__ */ K("div", {
					className: "flex min-w-0 flex-1 gap-1",
					children: [/* @__PURE__ */ G(wS, {}), /* @__PURE__ */ G(TS, {})]
				}), n.children && /* @__PURE__ */ G("div", {
					className: "flex shrink-0 items-center gap-2",
					children: n.children
				})]
			}), (!n.mode || n.mode === "default") && /* @__PURE__ */ G(ES, {})]
		})
	});
};
DS.displayName = "OneFilterPicker";
var OS = DS, kS = "__no-grouping__", AS = ({ grouping: e, currentGrouping: t, onGroupingChange: n, hideLabel: r = !1 }) => {
	let i = f();
	if (!e || e.mandatory && Object.entries(e.groupBy).length < 2) return null;
	let a = [...e.mandatory ? [] : [{
		label: i.collections.grouping.noGrouping,
		value: kS
	}], ...Object.entries(e.groupBy || {}).filter((e) => !!e[1]).map(([e, t]) => ({
		label: t.name,
		value: e
	}))];
	return /* @__PURE__ */ G("div", {
		className: "flex flex-col",
		children: /* @__PURE__ */ K("div", {
			className: "flex items-end gap-2",
			children: [/* @__PURE__ */ G("div", {
				className: "shrink grow [&_button]:h-8 [&_button]:rounded",
				children: /* @__PURE__ */ G(HS, {
					label: i.collections.grouping.groupBy,
					options: a,
					hideLabel: r,
					value: t?.field.toString() ?? kS,
					onChange: (r) => n?.(r === kS ? void 0 : {
						field: r,
						order: e.groupBy[r]?.defaultDirection ?? t?.order ?? "asc"
					})
				})
			}), t?.field && /* @__PURE__ */ G(ve, {
				hideLabel: !0,
				label: i.collections.grouping.toggleDirection,
				variant: "outline",
				icon: t?.order === "asc" ? Le : Be,
				onClick: () => n?.({
					field: t.field,
					order: t.order === "asc" ? "desc" : "asc"
				})
			})]
		})
	});
}, jS = ({ filters: e, currentFilters: t, onFiltersChange: n }) => {
	let [r, i] = W([]), a = f();
	if (V(() => {
		(async () => {
			let n = Object.entries(t).filter(([, e]) => e == null ? !1 : Array.isArray(e) ? e.length > 0 : e !== ""), r = await Promise.all(n.map(async ([t, n]) => {
				let r = e[t], i = r?.label ?? t;
				if (!r || !r.type) return {
					key: t,
					label: i,
					displayText: String(n)
				};
				let o = iS[r.type];
				if (!o?.chipLabel) return {
					key: t,
					label: i,
					displayText: Array.isArray(n) ? n.join(", ") : String(n)
				};
				try {
					let e = await o.chipLabel(n, {
						schema: r,
						i18n: a
					});
					return {
						key: t,
						label: i,
						displayText: typeof e == "string" ? e : e.label
					};
				} catch {
					return {
						key: t,
						label: i,
						displayText: Array.isArray(n) ? n.join(", ") : String(n)
					};
				}
			}));
			i(r);
		})();
	}, [
		t,
		e,
		a
	]), r.length === 0) return null;
	let o = (e) => {
		let r = { ...t };
		delete r[e], n(r);
	};
	return /* @__PURE__ */ G($e, { children: /* @__PURE__ */ G("div", {
		className: "flex gap-1 border-0 p-2",
		children: /* @__PURE__ */ G(g, {
			mode: "popLayout",
			children: r.map((e) => /* @__PURE__ */ G(h.div, {
				layout: !0,
				initial: {
					opacity: 0,
					scale: .8
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .8
				},
				transition: {
					type: "spring",
					duration: .2
				},
				className: "shrink-0",
				children: /* @__PURE__ */ G(Pu, {
					variant: "selected",
					label: `${e.label}: ${e.displayText}`,
					onClose: () => o(e.key)
				})
			}, e.key))
		})
	}) });
};
jS.displayName = "ActiveFiltersChips";
//#endregion
//#region src/components/F0Select/components/SelectTopActions.tsx
var MS = ({ showSearchBox: e, searchBoxPlaceholder: t, onSearchChange: n, searchValue: r, grouping: i, currentGrouping: a, onGroupingChange: o, filters: s, currentFilters: c, onFiltersChange: l, asList: u = !1, onFiltersOpenChange: d, showPreview: p = !1 }) => {
	let m = f(), [_, v] = W(!1), y = B((e) => {
		v(e), d?.(e);
	}, [d]);
	return !e && !s && (!i || i.mandatory && Object.entries(i.groupBy).length < 2) ? null : /* @__PURE__ */ K("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ K("div", {
			className: "flex gap-2 p-2 border-0 border-b border-solid border-f1-border-secondary",
			children: [/* @__PURE__ */ K("div", {
				className: "flex flex-1 flex-row gap-2",
				children: [e && /* @__PURE__ */ G("div", {
					className: "flex-1",
					children: /* @__PURE__ */ G(Px, {
						placeholder: t ?? m.toc.search,
						onChange: n,
						value: r,
						debounceTime: 400,
						autoFocus: !u && !_,
						clearable: !0
					})
				}), s && /* @__PURE__ */ G(OS, {
					filters: s,
					value: c,
					onChange: l,
					mode: p ? "inline" : u ? "simple" : "compact",
					onOpenChange: y
				})]
			}), /* @__PURE__ */ G(AS, {
				hideLabel: !0,
				grouping: i,
				currentGrouping: a,
				onGroupingChange: o
			})]
		}), /* @__PURE__ */ G(g, { children: s && NS(c) && /* @__PURE__ */ G(h.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				type: "spring",
				duration: .3,
				bounce: 0
			},
			children: /* @__PURE__ */ G(jS, {
				filters: s,
				currentFilters: c,
				onFiltersChange: l
			})
		}) })]
	});
}, NS = (e) => Object.entries(e).some(([, e]) => e == null ? !1 : Array.isArray(e) ? e.length > 0 : e !== ""), PS = ["field", "inline"], FS = Jt, IS = (e, t) => e.type === "separator" || !t || e.label.toLowerCase().includes(t.toLowerCase()), LS = (e) => {
	if (e.type !== "separator" && e.tag !== void 0 && typeof e.tag != "string") return e.tag.type;
}, RS = n({
	base: "flex flex-col rounded-md border border-solid bg-f1-background max-h-full",
	variants: { status: {
		default: "border-f1-border-secondary",
		error: "border-f1-border-critical-bold",
		warning: "border-f1-border-warning-bold",
		info: "border-f1-border-info-bold"
	} },
	defaultVariants: { status: "default" }
}), zS = C("group inline-flex h-8 w-fit max-w-full items-center gap-1 rounded border-0 bg-transparent pl-3 pr-2 shadow-none outline-none transition-colors enabled:cursor-pointer enabled:hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover disabled:cursor-not-allowed disabled:bg-f1-background-tertiary disabled:text-f1-foreground-disabled disabled:data-[state=open]:bg-f1-background-tertiary disabled:[&_*]:text-f1-foreground-disabled", gn({ variant: "label" })), BS = z(function({ label: e, placeholder: t, selection: n, hasValue: r }, i) {
	return /* @__PURE__ */ K(rx, {
		ref: i,
		"aria-label": e,
		className: C(zS, S()),
		children: [/* @__PURE__ */ G("span", {
			className: "flex min-w-0 max-w-full items-center",
			children: r ? /* @__PURE__ */ G(dx, {
				selection: n,
				totalSelectedCount: 1
			}) : /* @__PURE__ */ G("span", {
				className: "truncate text-f1-foreground-secondary",
				children: t ?? e
			})
		}), /* @__PURE__ */ G("span", {
			className: "flex size-4 shrink-0 items-center justify-center text-f1-icon",
			"aria-hidden": "true",
			children: /* @__PURE__ */ G(o, {
				icon: Fe,
				size: "sm"
			})
		})]
	});
});
BS.displayName = "InlineSelectTrigger";
var VS = z(function({ variant: e = "field", placeholder: t, onChange: n, withApplySelection: r = !1, applySelectionLabel: i, onChangeSelectedOption: o, value: s, options: c = [], mapOptions: l, children: d, disabled: p, open: m, hideLabel: h, onOpenChange: g, showSearchBox: _, onSearchChange: v, searchBoxPlaceholder: y, searchEmptyMessage: b, size: x, actions: S, onCreate: w, onFiltersChange: T, source: E, label: D, icon: ee, labelIcon: O, clearable: A, loading: j, name: te, error: ne, status: re, hint: ie, required: ae, multiple: M, portalContainer: oe, asList: N = !1, showPreview: se = !1, preserveSelectionOnDatasetChange: ce = !0, fitContentWidth: le, dataTestId: ue, ...de }, fe) {
	let pe = Cn(), me = x ?? "sm", he = xn(Sg), ge = he.portalContainer && (he.position === "center" || he.position === "fullscreen"), _e = oe === void 0 ? ge ? he.portalContainer : void 0 : oe, ye = "onSelectItems" in de ? de.onSelectItems : void 0, be = "disableSelectAll" in de && de.disableSelectAll, [xe, Se] = W(m), Ce = U(null), we = k(fe, Ce), Te = U(xe), Ee = U(!1);
	V(() => {
		e === "inline" && Te.current && !xe && Ce.current?.focus({ preventScroll: !0 }), Te.current = xe;
	}, [xe, e]);
	let De = H(() => gg(de.defaultItem).filter((e) => e !== void 0), [de.defaultItem]), Oe = H(() => De.map((e) => String(e.value)), [De]), [ke, Ae] = W(() => (gg(s) ?? Oe ?? []).map(String)), je = e === "inline" && typeof s == "string" ? String(s) : void 0;
	V(() => {
		let e = (gg(s) ?? []).map(String);
		if (!(0, Mu.isEqual)(e, ke ?? [])) {
			let e = gg(s) ?? Oe ?? [];
			Ae(Array.from(new Set(e.map(String))));
		}
	}, [s]);
	let Me = Jh({
		...H(() => {
			if (E && !["infinite-scroll", "no-pagination"].includes(Kh(E.dataAdapter))) throw Error("Select component only supports `infinite-scroll` or `no-pagination` pagination types");
			return {
				...E,
				dataAdapter: E ? E.dataAdapter : { fetchData: ({ search: e }) => {
					let t = "searchFn" in de && de.searchFn ? de.searchFn : IS;
					return { records: c.filter((n) => t(n, e) ?? !0) };
				} }
			};
		}, [
			c,
			E,
			"searchFn" in de && de.searchFn
		]),
		selectable: (e) => {
			if (!e) return;
			let t = Ne(e);
			return t.type === "separator" ? void 0 : String(t.value);
		},
		search: _ ? {
			enabled: _,
			sync: !E
		} : void 0
	}, [c]), Ne = B((e) => {
		if (E) {
			if (!l) throw Error("mapOptions is required when using a source");
			return l(e);
		}
		return e;
	}, [l, E]), { data: Pe, isInitialLoading: Fe, loadMore: Ie, isLoadingMore: Le, isLoading: P, paginationInfo: Re } = ag(Me), { currentSearch: ze, setCurrentSearch: Be } = Me, Ve = U(/* @__PURE__ */ new Map()), He = H(() => {
		let e = [];
		for (let t of Pe.records) {
			let n = Ne(t);
			n.type !== "separator" && e.push([String(n.value), {
				item: t,
				option: n
			}]);
		}
		return Object.fromEntries(e);
	}, [Pe, Ne]), Ue = H(() => {
		let e = gg(s) ?? Oe ?? [];
		if (e.length === 0) return;
		let t = /* @__PURE__ */ new Map(), n = Array.from(new Set(e));
		for (let e of n) {
			let n = He[String(e)];
			t.set(String(e), {
				id: String(e),
				checked: !0,
				item: n?.item
			});
		}
		return {
			allSelected: !1,
			items: t,
			groups: /* @__PURE__ */ new Map()
		};
	}, [
		s,
		Oe,
		He
	]), { handleSelectAllItems: We, handleSelectItemChange: Ge, selectedState: Ke, clearSelection: qe, selectionMeta: Je } = hg({
		data: Pe,
		paginationInfo: Re,
		source: Me,
		selectionMode: M ? "multi" : "single",
		onSelectItems: ye,
		selectedState: Ue,
		disableSelectAll: be,
		isSearchActive: !!ze,
		allPagesSelection: !0,
		resetOnPageChange: !1,
		preserveSelectionOnDatasetChange: ce
	}), Ye = B((e) => ({
		allSelected: e.allSelected,
		items: new Map(e.items),
		groups: new Map(e.groups)
	}), []), Xe = B((e) => {
		let t = Array.from(e.items.entries()).filter(([, t]) => e.allSelected ? !0 : t.checked).map(([e, t]) => `${e}:${t.checked}`).sort().join(","), n = Array.from(e.groups.entries()).filter(([, t]) => e.allSelected ? !0 : t.checked).map(([e, t]) => `${e}:${t.checked}`).sort().join(",");
		return `${e.allSelected}|${t}|${n}`;
	}, []), Ze = U(Ue ? Ye(Ue) : {
		allSelected: !1,
		items: /* @__PURE__ */ new Map(),
		groups: /* @__PURE__ */ new Map()
	}), Qe = H(() => {
		let e = [];
		for (let t of ke) {
			let n = String(t), r = He[n];
			if (r) {
				Ve.current.set(n, r.option), e.push(r.option);
				continue;
			}
			let i = Ve.current.get(n);
			if (i) {
				e.push(i);
				continue;
			}
			let a = De.find((e) => String(e.value) === n);
			a && (Ve.current.set(n, a), e.push(a));
		}
		return e;
	}, [
		ke,
		He,
		De
	]), $e = H(() => Pe.records.some((e) => LS(Ne(e)) === "status") || Qe.some((e) => LS(e) === "status"), [
		Pe.records,
		Ne,
		Qe
	]) ? "md" : me, et = le ?? e === "inline", tt = (e) => {
		Be(e), v?.(e);
	}, nt = M && !N, F = !!(r && nt), rt = U(!1), it = U(!0), at = U(null), ot = U(null), st = B((e, t) => {
		if (!M && !A && !t && ke[0] === e) return;
		rt.current = !0, Ge(e, t);
		let n = He[String(e)];
		n && (t ? Ve.current.set(String(e), n.option) : Ve.current.delete(String(e)), F || o?.(n.option, t));
	}, [
		F,
		o,
		He,
		Ge,
		M,
		A,
		ke
	]), ct = U(!1), lt = B((e) => {
		rt.current = !0, ct.current = e, We(e);
	}, [We]), ut = B(() => {
		let e = Array.from(Ke.items.values() || []).filter((e) => e.checked), t = (e) => {
			if (e) return E ? e : e.item;
		}, n = e.map((e) => e.item).filter((e) => e !== void 0), r = n.map(t).filter((e) => e !== void 0), i = n.map((e) => Ne(e));
		return {
			values: e.map((e) => {
				if (e.item) {
					let t = Ne(e.item);
					return t.type === "separator" ? String(e.id) : t.value;
				}
				return String(e.id);
			}),
			originalItems: r,
			options: i
		};
	}, [
		Ne,
		Ke.items,
		E
	]);
	$o(() => {
		if (!rt.current) {
			it.current &&= !1;
			return;
		}
		!M && !xe && !N && Be(void 0);
		let e = (e) => {
			if (e) return E ? e : e.item;
		};
		if (M) {
			let { values: e, originalItems: t, options: r } = ut();
			Ae(Array.from(new Set(e.map(String))));
			let i = e.map(String).sort().join("\0");
			if (ot.current === i) return;
			F || (ot.current = i, n?.(e, t, r));
		} else {
			let t = Array.from(Ke.items.values() || []).filter((e) => e.checked)[0], r = t?.item, i = e(r), a = r ? Ne(r) : void 0, o = a ? a.value : t ? String(t.id) : void 0;
			Ae(o === void 0 ? [] : [String(o)]);
			let s = o === void 0 ? void 0 : String(o);
			if (at.current !== null && at.current.value === s) return;
			F || (at.current = { value: s }, n?.(o, i, a), je !== void 0 && s !== je && (rt.current = !1, at.current = null, qe(), Ge(je, !0), Ae([je])));
		}
	}, [
		je,
		ut,
		F,
		Ne,
		Ke,
		E
	]);
	let dt = U(() => {});
	dt.current = (e) => {
		g?.(e), Se(e), e || (Ee.current = !1);
	};
	let ft = U(null), pt = H(() => {
		let e = (e) => {
			ft.current !== null && clearTimeout(ft.current), ft.current = setTimeout(() => {
				ft.current = null, dt.current(e);
			}, 100);
		};
		return e.cancel = () => {
			ft.current !== null && (clearTimeout(ft.current), ft.current = null);
		}, e;
	}, []);
	V(() => () => {
		pt.cancel();
	}, [pt]);
	let mt = B(() => {
		let e = Ze.current;
		if (qe(), e.allSelected) {
			lt(!0);
			for (let t of e.items.values()) t.checked || Ge(t.item ?? t.id, !1);
			return;
		}
		let t = Array.from(e.items.values()).filter((e) => e.checked);
		for (let e of t) Ge(e.item ?? e.id, !0);
	}, [
		qe,
		lt,
		Ge
	]), ht = (e) => {
		!e && F && !Ee.current && mt(), pt(e);
	}, gt = B(() => {
		ht(!1);
	}, [ht]), _t = B(() => {
		if (F) {
			let e = Ye(Ke), { values: t, originalItems: r, options: i } = ut();
			Xe(e) !== Xe(Ze.current) && (Ze.current = e, n?.(t, r, i)), Ee.current = !0;
		}
		ht(!1);
	}, [
		Ye,
		Xe,
		ut,
		ht,
		F,
		n,
		Ke
	]), [vt, yt] = W(!1), bt = U(null);
	V(() => {
		let e = JSON.stringify([
			Me.currentFilters,
			Me.currentSortings,
			Me.debouncedCurrentSearch
		]);
		if (bt.current === null) {
			bt.current = e;
			return;
		}
		bt.current !== e && (bt.current = e, !be && (!ce || ct.current) && (Ve.current.clear(), Ae([]), rt.current = !0, ct.current = !1));
	}, [
		Me.currentFilters,
		Me.currentSortings,
		Me.debouncedCurrentSearch,
		be,
		ce
	]);
	let I = Me.grouping?.collapsible ?? !1, xt = Me.grouping?.defaultOpenGroups, { openGroups: St, setGroupOpen: Ct } = lg(Pe?.type === "grouped" ? Pe.groups : [], xt), wt = B((e, t) => e.map((e, n) => {
		let r = Ne(e), i = LS(r);
		if (i !== void 0 && (t.add(i), t.size > 1)) throw Error(`[F0Select] All options must use the same tag type, but multiple were provided: ${Array.from(t).map((e) => `"${e}"`).join(", ")}.`);
		return r.type === "separator" ? {
			height: 1,
			key: `separator-${n}`,
			type: "separator",
			item: /* @__PURE__ */ G(nx, { className: "mb-1 mt-2" }, `separator-${n}`)
		} : {
			height: r.description ? 64 : 32,
			key: `item-${r.value}`,
			type: "item",
			item: /* @__PURE__ */ G(vx, { item: r }, String(r.value)),
			value: String(r.value)
		};
	}), [Ne]), Tt = H(() => {
		let e = /* @__PURE__ */ new Set();
		if (Pe.type === "grouped") {
			let t = [];
			return Pe.groups.map((n) => {
				t.push({
					height: 36,
					key: `group-header-${n.key}`,
					type: "group-header",
					item: /* @__PURE__ */ G($v, {
						label: n.label,
						itemCount: n.itemCount,
						showOpenChange: I,
						onOpenChange: (e) => Ct(n.key, e),
						open: St[n.key],
						chevronPosition: "leading",
						closedRotation: -90,
						openRotation: 0,
						className: "relative cursor-pointer rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:after:opacity-100 [&_*]:z-10"
					})
				}), (!I || St[n.key]) && t.push(...wt(n.records, e).map((e) => ({
					...e,
					key: `${n.key}:${e.key}`,
					item: I ? /* @__PURE__ */ G("div", {
						className: "pl-5",
						children: e.item
					}) : e.item
				})));
			}), t;
		}
		return wt(Pe.records, e);
	}, [
		Pe.records,
		Pe.type,
		Pe.groups,
		wt,
		St,
		Ct,
		I
	]), Et = () => {
		Ie();
	}, Dt = f(), Ot = H(() => Array.from(Ke.items.values()).filter((e) => e.checked).map((e) => String(e.id)), [Ke.items]), kt = {
		...de,
		onItemCheckChange: st,
		disabled: p,
		open: xe,
		onOpenChange: ht
	}, At = M ? {
		...kt,
		value: Ot,
		multiple: !0,
		as: N ? "list" : void 0
	} : {
		...kt,
		value: Ot[0] ?? "",
		multiple: !1,
		as: N ? "list" : void 0
	}, jt = w ? (e) => {
		let t = w(e);
		t && typeof t.then == "function" ? t.then(() => {
			Be(void 0);
		}, (e) => {
			console.warn("[F0Select] onCreate failed:", e);
		}) : Be(void 0);
	} : void 0, Mt = ze ? Dt.t("select.createWithValue", { value: ze }) : Dt.select.create, Nt = jt && ze?.trim() ? /* @__PURE__ */ G("div", {
		className: "flex w-full",
		children: /* @__PURE__ */ G(ve, {
			type: "button",
			variant: "outline",
			onClick: () => jt(ze.trim()),
			icon: Qn,
			label: Mt
		})
	}) : void 0, Pt = /* @__PURE__ */ G(ex, {
		items: Tt,
		fitContentWidth: et,
		taller: !!E?.filters,
		emptyMessage: b ?? (w && ze?.trim() ? Dt.select.createEmptyMessage ?? Dt.select.noResults : Dt.select.noResults),
		emptyAction: Nt,
		bottom: vt ? null : /* @__PURE__ */ G(ox, {
			actions: S,
			showApplyButton: nt,
			applyLabel: i,
			onApply: _t,
			onCancel: gt,
			showCancelButton: F
		}),
		top: /* @__PURE__ */ K(An, { children: [/* @__PURE__ */ G(MS, {
			searchValue: ze,
			onSearchChange: tt,
			searchBoxPlaceholder: y,
			showSearchBox: _,
			grouping: Me.grouping,
			currentGrouping: Me.currentGrouping,
			onGroupingChange: Me.setCurrentGrouping,
			filters: Me.filters,
			currentFilters: Me.currentFilters,
			onFiltersChange: (e) => {
				Me.setCurrentFilters(e), T?.(e);
			},
			asList: N,
			onFiltersOpenChange: yt,
			showPreview: se
		}), M && !ze && !vt && /* @__PURE__ */ G(ax, {
			selectedCount: Je.selectedItemsCount,
			indeterminate: Ke.allSelected === "indeterminate" || Ke.allSelected === !1 && Je.selectedItemsCount > 0,
			value: !!Ke.allSelected,
			onChange: lt,
			hideCheckbox: be,
			items: Qe,
			paddingTop: !_ && !Me.filters
		})] }),
		right: M && !vt && se ? /* @__PURE__ */ G(mx, {
			items: Qe,
			onDeselect: (e) => st(e, !1),
			allSelected: Ke.allSelected,
			onLoadMore: Ie,
			isLoadingMore: Le
		}) : null,
		forceMinHeight: !!Me.filters && se,
		onScrollBottom: Et,
		scrollMargin: 10,
		isLoadingMore: Le,
		isLoading: P || j,
		showLoadingIndicator: !!d,
		portalContainer: _e
	}), Ft = Qe.map((e) => e.selectedLabel ?? e.label).filter(Boolean).join(", "), It = (e) => {
		let t = /* @__PURE__ */ G("div", {
			className: C("w-full min-w-0", !!d && "h-full"),
			children: e
		});
		return /* @__PURE__ */ G(u, {
			label: h ? D : void 0,
			description: Ft,
			children: t
		});
	};
	if (N) return /* @__PURE__ */ G(a, {
		dataTestId: ue,
		children: /* @__PURE__ */ K("div", {
			className: C("flex w-full max-h-full flex-col gap-2", p && "cursor-not-allowed opacity-50"),
			children: [
				D && !h && /* @__PURE__ */ G(Kt, {
					label: D,
					required: ae,
					htmlFor: pe,
					icon: O,
					disabled: p
				}),
				/* @__PURE__ */ G("div", {
					className: C("flex-1 min-h-0", RS({ status: ne ? "error" : re?.type ? re?.type : "default" })),
					children: /* @__PURE__ */ G(Mb, {
						...At,
						children: Pt
					})
				}),
				/* @__PURE__ */ G(Wt, { status: re })
			]
		})
	});
	let Lt = /* @__PURE__ */ K(Mb, {
		...At,
		children: [e === "inline" ? /* @__PURE__ */ G(BS, {
			ref: we,
			label: D,
			placeholder: t,
			selection: Qe,
			hasValue: !!ke[0]
		}) : /* @__PURE__ */ G(rx, {
			ref: we,
			asChild: !0,
			children: d ? /* @__PURE__ */ G("div", {
				className: "flex h-full w-full items-center justify-between",
				"aria-label": D || t,
				children: d
			}) : /* @__PURE__ */ G(qt, {
				label: D,
				error: ne,
				required: ae,
				status: re,
				hint: ie,
				icon: ee,
				labelIcon: O,
				hideLabel: h,
				value: M ? Math.max(ke.length, Je.selectedItemsCount).toString() : ke[0] ?? void 0,
				isEmpty: (e) => M ? !e || +(e ?? 0) == 0 : !e,
				onClear: () => {
					rt.current = !0, qe(), Ve.current.clear(), o?.(void 0, !1);
				},
				placeholder: t || "",
				disabled: p,
				clearable: A,
				size: $e,
				loadingIndicator: {
					asOverlay: !0,
					offset: 34
				},
				loading: Fe || j || P,
				name: te,
				onClickContent: () => {
					ht(!xe);
				},
				append: /* @__PURE__ */ G(ix, {
					open: xe,
					disabled: p,
					size: $e
				}),
				children: /* @__PURE__ */ G("button", {
					className: "flex w-full items-center justify-between",
					"aria-label": D || t,
					onClick: (e) => {
						e.preventDefault();
					},
					children: (M ? ke.length > 0 || Je.selectedItemsCount > 0 : !!ke[0]) && /* @__PURE__ */ G(dx, {
						multiple: M,
						totalSelectedCount: M ? Math.max(ke.length, Je.selectedItemsCount) : +!!ke[0],
						allSelected: Ke.allSelected,
						selection: Qe,
						hideItemIcon: !!ee
					})
				})
			})
		}), xe && Pt]
	});
	return /* @__PURE__ */ G(a, {
		dataTestId: ue,
		children: e === "inline" ? Lt : It(Lt)
	});
}), HS = m("F0Select", VS);
function US(e, t, n, r) {
	let i = t ? t.getFullYear() : e - 120, a = n ? n.getFullYear() : e + 120;
	return {
		fromYear: Math.min(i, a, r ?? Infinity),
		toYear: Math.max(i, a, r ?? -Infinity)
	};
}
function WS(e, t, n, r) {
	let { fromYear: i, toYear: a } = US(e, t, n, r), o = [];
	for (let e = a; e >= i; e--) o.push({
		value: String(e),
		label: String(e)
	});
	return o;
}
function GS(e, t, n, r, i = "long") {
	let a = new Intl.DateTimeFormat(t, { month: i });
	return Array.from({ length: 12 }, (t, i) => {
		let o = new Date(e, i, 1), s = !!(n && sl(Gc(o), n) || r && ol(qc(o), r));
		return {
			value: String(i),
			label: a.format(new Date(2e3, i, 1)),
			disabled: s
		};
	});
}
function KS({ viewDate: e, onViewDateChange: t, showMonth: n, locale: r = "en-US", minDate: i, maxDate: a, compact: o = !1 }) {
	let s = f(), c = H(() => WS((/* @__PURE__ */ new Date()).getFullYear(), i, a, e.getFullYear()), [
		i,
		a,
		e
	]), l = H(() => GS(e.getFullYear(), r, i, a, o ? "short" : "long"), [
		r,
		e,
		i,
		a,
		o
	]);
	return /* @__PURE__ */ K("div", {
		className: "flex min-w-0 items-center gap-1",
		children: [n && /* @__PURE__ */ G("div", {
			className: o ? "w-[5.5rem]" : "w-[8.5rem]",
			children: /* @__PURE__ */ G(HS, {
				size: "sm",
				label: s.date.selectMonth,
				hideLabel: !0,
				placeholder: s.date.selectMonth,
				options: l,
				value: String(e.getMonth()),
				onChange: (n) => {
					t(new Date(e.getFullYear(), Number(n), 1));
				},
				fitContentWidth: !0
			})
		}), /* @__PURE__ */ G("div", {
			className: o ? "w-[5.5rem]" : "w-[6rem]",
			children: /* @__PURE__ */ G(HS, {
				size: "sm",
				label: s.date.selectYear,
				hideLabel: !0,
				placeholder: s.date.selectYear,
				showSearchBox: !0,
				options: c,
				value: String(e.getFullYear()),
				onChange: (n) => {
					t(new Date(Number(n), e.getMonth(), 1));
				},
				fitContentWidth: !0
			})
		})]
	});
}
//#endregion
//#region src/components/OneCalendar/OneCalendar.tsx
var qS = ["compact"], JS = (e) => {
	let t = fh(e);
	return {
		toRangeString: t.toRangeString,
		toString: t.toString
	};
}, YS = (e) => fh(e), XS = ({ mode: e = "single", view: t = "month", onSelect: n, defaultMonth: r, defaultSelected: i = null, showNavigation: a = !0, showInput: o = !1, minDate: s, maxDate: c, compact: l = !1, weekStartsOn: u, selectOnCellOnly: d = !1, periods: p }) => {
	let m = f(), h = De(), g = u ?? h.date?.weekStartsOn ?? P.Monday, _ = H(() => {
		if (r) return r;
		let e = /* @__PURE__ */ new Date();
		return s && e < s ? s : c && e > c ? c : e;
	}, [
		r,
		s,
		c
	]), [v, y] = W(_), [b, x] = W(i), [S, w] = W(1), T = H(() => _h({
		weekStartsOn: g,
		periods: p
	})[t], [
		t,
		g,
		p
	]), E = B((e) => {
		x(e), M(T.toRangeString(e, m));
		let t = T.getViewDateFromDate(e instanceof Date ? e : e?.from || e?.to || _);
		t !== T.getViewDateFromDate(v) && y(t);
	}, [T, _]);
	V(() => {
		E(i);
	}, [i]);
	let D = () => T.label(v, m, h.locale), ee = T.calendarView === "day" || T.calendarView === "week" ? "month-year" : T.calendarView === "month" || T.calendarView === "periods" ? "year" : null, O = T.getViewDateBounds?.(), k = Lu(s, O?.min), A = Ru(c, O?.max), j = ee ? US((/* @__PURE__ */ new Date()).getFullYear(), k, A, v.getFullYear()) : null, te = (e) => {
		if (!j) return !0;
		let t = T.navigateUIView(v, e).getFullYear();
		return t >= j.fromYear && t <= j.toYear;
	}, ne = (e) => {
		if (!te(e)) return;
		let t = T.navigateUIView(v, e);
		w(e), y(t);
	}, re = (e) => {
		w(e.getTime() >= v.getTime() ? 1 : -1), y(e);
	}, ie = (e) => {
		e && (e = T.toRange(e), E(e), n?.(e));
	}, [ae, M] = W({
		from: "",
		to: ""
	}), [oe, N] = W({
		from: !1,
		to: !1
	}), se = (e) => {
		le(e, ae);
	}, ce = B((e) => e ? Yu(e, T, {
		minDate: s,
		maxDate: c
	}) : !1, [
		T,
		s,
		c
	]), le = (e, t) => {
		let n = T.fromString(t, m), r = !ce(n?.[e]);
		N((t) => ({
			...t,
			[e]: r
		})), r || ie(n);
	};
	V(() => {
		let t = zu(b);
		if (!t) return;
		let n = e === "range" ? T.toRange(t) : T.toRange(t.from);
		d ? E(n) : ie(n);
	}, [T]), V(() => {
		let e = zu(b), { from: t, to: n } = T.toRangeString(e || {
			from: /* @__PURE__ */ new Date(),
			to: void 0
		}, m);
		M({
			from: t || "",
			to: n || ""
		});
	}, [T, b]);
	let ue = (e, t) => {
		let n = ae[e] ? T.fromString(ae[e], m) : void 0, r = n ? T.navigate(n.from, t) : void 0;
		if (ce(r)) {
			let t = {
				...ae,
				[e]: T.toRangeString(r, m).from
			};
			le(e, t), M(t);
		}
	};
	return /* @__PURE__ */ K("div", {
		className: "flex flex-col",
		children: [
			o && !T.hideDateInput && /* @__PURE__ */ K("div", {
				className: "mb-2 flex gap-2",
				children: [/* @__PURE__ */ G(Yt, {
					label: m.date.from,
					hideLabel: !0,
					error: !!oe.from,
					value: ae.from,
					placeholder: e === "range" ? m.date.from : m.date.date,
					onBlur: () => se("from"),
					onKeyDown: (e) => {
						e.key === "Enter" && se("from"), (e.key === "ArrowUp" || e.key === "ArrowDown") && (e.preventDefault(), ue("from", e.key === "ArrowDown" ? -1 : 1));
					},
					onChange: (e) => M({
						...ae,
						from: e
					})
				}), e === "range" && /* @__PURE__ */ G(Yt, {
					label: m.date.to,
					hideLabel: !0,
					error: !!oe.to,
					value: ae.to,
					placeholder: m.date.to,
					onBlur: () => se("to"),
					onKeyDown: (e) => {
						e.key === "Enter" && se("to"), (e.key === "ArrowUp" || e.key === "ArrowDown") && (e.preventDefault(), ue("to", e.key === "ArrowDown" ? -1 : 1));
					},
					onChange: (e) => M({
						...ae,
						to: e
					})
				})]
			}),
			a && /* @__PURE__ */ K("div", {
				className: C("flex items-center justify-between", l ? "mx-2 pb-2" : "pb-3"),
				children: [ee ? /* @__PURE__ */ G(KS, {
					viewDate: v,
					onViewDateChange: re,
					showMonth: ee === "month-year",
					locale: h.locale,
					minDate: k,
					maxDate: A,
					compact: l
				}) : /* @__PURE__ */ G("div", {
					className: C("font-medium text-f1-foreground", l ? "text-md" : "text-lg"),
					children: D()
				}), /* @__PURE__ */ K("div", {
					className: C("flex items-center", l ? "gap-1" : "gap-2"),
					children: [/* @__PURE__ */ G(ve, {
						onClick: () => ne(-1),
						variant: "outline",
						label: m.navigation.previous,
						hideLabel: !0,
						icon: Vn,
						size: "sm",
						disabled: !te(-1)
					}), /* @__PURE__ */ G(ve, {
						onClick: () => ne(1),
						variant: "outline",
						label: m.navigation.next,
						hideLabel: !0,
						icon: ht,
						size: "sm",
						disabled: !te(1)
					})]
				})]
			}),
			/* @__PURE__ */ G("div", {
				className: "relative",
				children: T.render({
					mode: e,
					selected: b,
					onSelect: ie,
					month: v,
					onMonthChange: y,
					motionDirection: S,
					setViewDate: y,
					viewDate: v,
					minDate: s,
					maxDate: c,
					compact: l,
					weekStartsOn: g
				})
			})
		]
	});
}, ZS = (e) => {
	let t = qS.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ G(XS, { ...t });
};
ZS.displayName = "OneCalendar";
var QS = r(ZS);
//#endregion
export { Ug as $, pc as $t, Zv as A, Kn as An, Ku as At, x_ as B, vu as Bt, nx as C, $n as Cn, Wh as Ct, zb as D, Yn as Dn, gm as Dt, Zb as E, Xn as En, fh as Et, Hv as F, Vn as Fn, ju as Ft, u_ as G, Fc as Gt, y_ as H, cl as Ht, O_ as I, Bn as In, Au as It, Zg as J, Tc as Jt, d_ as K, Pc as Kt, T_ as L, zn as Ln, ku as Lt, Gv as M, Wn as Mn, Pu as Mt, Vv as N, Un as Nn, Nu as Nt, Mb as O, Jn as On, Yu as Ot, Uv as P, Hn as Pn, Z as Pt, Kg as Q, mc as Qt, C_ as R, Rn, wu as Rt, ix as S, er as Sn, Hh as St, ex as T, Zn as Tn, dh as Tt, h_ as U, zc as Ut, v_ as V, hu as Vt, p_ as W, Lc as Wt, Gg as X, xc as Xt, Xg as Y, wc as Yt, qg as Z, gc as Zt, Px as _, $o as _n, ag as _t, HS as a, Ys as an, wg as at, Cx as b, nr as bn, Kh as bt, AS as c, Ws as cn, yg as ct, fS as d, bs as dn, hg as dt, uc as en, Wg as et, uS as f, ys as fn, dg as ft, Qx as g, ns as gn, og as gt, aS as h, ms as hn, sg as ht, JS as i, $s as in, Cg as it, Xv as j, Gn as jn, Iu as jt, $v as k, qn as kn, qu as kt, OS as l, Hs as ln, vg as lt, cS as m, hs as mn, eg as mt, XS as n, nc as nn, Ng as nt, FS as o, Js as on, xg as ot, lS as p, vs as pn, lg as pt, Qg as q, Ac as qt, YS as r, tc as rn, Sg as rt, PS as s, qs as sn, bg as st, QS as t, cc as tn, Vg as tt, SS as u, Es as un, gg as ut, kx as v, Go as vn, Zh as vt, tx as w, Qn as wn, _h as wt, bx as x, rr as xn, Jh as xt, wx as y, Ho as yn, qh as yt, w_ as z, bu as zt };
