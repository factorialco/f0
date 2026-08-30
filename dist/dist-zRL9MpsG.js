import * as e from "react";
import * as t from "react-dom";
import { Fragment as n, jsx as r } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs
function i(t, n) {
	let i = e.createContext(n), a = (t) => {
		let { children: n, ...a } = t, o = e.useMemo(() => a, Object.values(a));
		return /* @__PURE__ */ r(i.Provider, {
			value: o,
			children: n
		});
	};
	a.displayName = t + "Provider";
	function o(r) {
		let a = e.useContext(i);
		if (a) return a;
		if (n !== void 0) return n;
		throw Error(`\`${r}\` must be used within \`${t}\``);
	}
	return [a, o];
}
function a(t, n = []) {
	let i = [];
	function a(n, a) {
		let o = e.createContext(a), s = i.length;
		i = [...i, a];
		let c = (n) => {
			let { scope: i, children: a, ...c } = n, l = i?.[t]?.[s] || o, u = e.useMemo(() => c, Object.values(c));
			return /* @__PURE__ */ r(l.Provider, {
				value: u,
				children: a
			});
		};
		c.displayName = n + "Provider";
		function l(r, i) {
			let c = i?.[t]?.[s] || o, l = e.useContext(c);
			if (l) return l;
			if (a !== void 0) return a;
			throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return [c, l];
	}
	let s = () => {
		let n = i.map((t) => e.createContext(t));
		return function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return s.scopeName = t, [a, o(s, ...n)];
}
function o(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function s(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => (...e) => n.current?.(...e), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var c = globalThis?.document ? e.useLayoutEffect : () => {};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function l(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function u(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = l(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : l(e[t], null);
			}
		};
	};
}
function d(...t) {
	return e.useCallback(u(...t), t);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs
var f = e.forwardRef((t, n) => {
	let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(h);
	if (s) {
		let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
		return /* @__PURE__ */ r(p, {
			...a,
			ref: n,
			children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
		});
	}
	return /* @__PURE__ */ r(p, {
		...a,
		ref: n,
		children: i
	});
});
f.displayName = "Slot";
var p = e.forwardRef((t, n) => {
	let { children: r, ...i } = t;
	if (e.isValidElement(r)) {
		let t = _(r);
		return e.cloneElement(r, {
			...g(i, r.props),
			ref: n ? u(n, t) : t
		});
	}
	return e.Children.count(r) > 1 ? e.Children.only(null) : null;
});
p.displayName = "SlotClone";
var m = ({ children: e }) => /* @__PURE__ */ r(n, { children: e });
function h(t) {
	return e.isValidElement(t) && t.type === m;
}
function g(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			a(...e), i(...e);
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function _(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var v = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"span",
	"svg",
	"ul"
].reduce((t, n) => {
	let i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? f : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ r(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function y(e, n) {
	e && t.flushSync(() => e.dispatchEvent(n));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs
function b(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function x({ prop: t, defaultProp: n, onChange: r = () => {} }) {
	let [i, a] = S({
		defaultProp: n,
		onChange: r
	}), o = t !== void 0, c = o ? t : i, l = s(r);
	return [c, e.useCallback((e) => {
		if (o) {
			let n = typeof e == "function" ? e(t) : e;
			n !== t && l(n);
		} else a(e);
	}, [
		o,
		t,
		a,
		l
	])];
}
function S({ defaultProp: t, onChange: n }) {
	let r = e.useState(t), [i] = r, a = e.useRef(i), o = s(n);
	return e.useEffect(() => {
		a.current !== i && (o(i), a.current = i);
	}, [
		i,
		a,
		o
	]), r;
}
//#endregion
export { f as a, c, a as d, y as i, s as l, b as n, u as o, v as r, d as s, x as t, i as u };
