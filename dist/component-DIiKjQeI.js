import { t as e } from "./dist-HAF2K0vx.js";
import * as t from "react";
import { createContext as n, forwardRef as r, useCallback as i, useContext as a, useEffect as o, useImperativeHandle as s, useRef as c, useState as l } from "react";
import { createPortal as u } from "react-dom";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/lib/component/types.ts
var p = [
	"layout",
	"info",
	"action",
	"form"
], m = n({
	enabled: !1,
	enable: () => null,
	disable: () => null,
	filter: []
}), h = ({ children: e }) => {
	let [t, n] = l(!1), [r, a] = l([]), s = i((e) => {
		a(e || [...p].filter((e) => e !== "layout")), n(!0);
	}, [a, n]), c = i(() => n(!1), [n]);
	return o(() => {
		window.XRay = {
			enable: s,
			disable: c
		};
	}, [s, c]), /* @__PURE__ */ f(m.Provider, {
		value: {
			enabled: t,
			enable: s,
			disable: c,
			filter: r
		},
		children: [e, t && typeof document < "u" && u(/* @__PURE__ */ f("div", {
			className: "bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md",
			children: [/* @__PURE__ */ d("div", {
				className: "text-md z-50 font-semibold",
				children: "XRay"
			}), /* @__PURE__ */ d("div", {
				className: "flex flex-col space-y-2",
				children: p.map((e) => /* @__PURE__ */ f("label", {
					className: "block",
					children: [/* @__PURE__ */ d("input", {
						onChange: (t) => t.target.checked ? a([...r, e]) : a(r.filter((t) => t !== e)),
						type: "checkbox",
						checked: r.includes(e),
						className: "mr-2"
					}), e]
				}, e))
			})]
		}), document?.body)]
	});
}, g = e({
	base: "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
	variants: { type: {
		layout: "outline-red-500",
		info: "outline-blue-500",
		action: "outline-green-600",
		form: "outline-purple-600"
	} }
}), _ = e({
	base: "absolute z-40 bg-opacity-50 px-2 py-1 text-sm uppercase",
	variants: { type: {
		layout: "bg-red-500 text-white",
		info: "bg-blue-500 text-white",
		action: "bg-green-600 text-white",
		form: "bg-purple-600 text-white"
	} }
}), v = (e, n) => {
	let { enabled: r, filter: i } = t.useContext(m), a = c(null);
	s(n, () => a.current);
	let l = r && !e.internal, u = typeof document < "u" ? document.body : null;
	return o(() => {
		if (!l || !a.current || !i.includes(e.type)) return;
		let t = a.current;
		t.dataset.componentName = e.name;
		let n = null, r = null;
		if (u) {
			let { top: i, left: a, width: o, height: s } = t.getBoundingClientRect();
			n = document.createElement("div"), n.className = g({ type: e.type }), n.style.top = `${i}px`, n.style.left = `${a}px`, n.style.width = `${o}px`, n.style.height = `${s}px`, r = document.createElement("div"), r.className = _({ type: e.type }), r.style.top = `${i}px`, r.style.left = `${a}px`, r.innerText = e.name, u.appendChild(r), u.appendChild(n);
		}
		return () => {
			n && u?.removeChild(n), r && u?.removeChild(r);
		};
	}, [
		l,
		e.name,
		e.type,
		i,
		u
	]), {
		ref: a,
		enabled: r
	};
}, y = () => a(m), b = (e, t) => {
	let n = r((n, r) => {
		let { ref: i } = v(e, r);
		return /* @__PURE__ */ d(t, {
			ref: i,
			...n
		});
	});
	return n.displayName = `${e.name}`, n;
};
//#endregion
export { h as n, y as r, b as t };
