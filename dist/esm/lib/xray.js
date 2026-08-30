import { componentTypes as e } from "./component/types.js";
import * as t from "react";
import { createContext as n, useCallback as r, useContext as i, useEffect as a, useImperativeHandle as o, useRef as s, useState as c } from "react";
import { cva as l } from "cva";
import { createPortal as u } from "react-dom";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/lib/xray.tsx
var p = n({
	enabled: !1,
	enable: () => null,
	disable: () => null,
	filter: []
}), m = ({ children: t }) => {
	let [n, i] = c(!1), [o, s] = c([]), l = r((t) => {
		s(t || [...e].filter((e) => e !== "layout")), i(!0);
	}, [s, i]), m = r(() => i(!1), [i]);
	return a(() => {
		window.XRay = {
			enable: l,
			disable: m
		};
	}, [l, m]), /* @__PURE__ */ f(p.Provider, {
		value: {
			enabled: n,
			enable: l,
			disable: m,
			filter: o
		},
		children: [t, n && typeof document < "u" && u(/* @__PURE__ */ f("div", {
			className: "bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md",
			children: [/* @__PURE__ */ d("div", {
				className: "text-md z-50 font-semibold",
				children: "XRay"
			}), /* @__PURE__ */ d("div", {
				className: "flex flex-col space-y-2",
				children: e.map((e) => /* @__PURE__ */ f("label", {
					className: "block",
					children: [/* @__PURE__ */ d("input", {
						onChange: (t) => t.target.checked ? s([...o, e]) : s(o.filter((t) => t !== e)),
						type: "checkbox",
						checked: o.includes(e),
						className: "mr-2"
					}), e]
				}, e))
			})]
		}), document?.body)]
	});
}, h = l({
	base: "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
	variants: { type: {
		layout: "outline-red-500",
		info: "outline-blue-500",
		action: "outline-green-600",
		form: "outline-purple-600"
	} }
}), g = l({
	base: "absolute z-40 bg-opacity-50 px-2 py-1 text-sm uppercase",
	variants: { type: {
		layout: "bg-red-500 text-white",
		info: "bg-blue-500 text-white",
		action: "bg-green-600 text-white",
		form: "bg-purple-600 text-white"
	} }
}), _ = (e, n) => {
	let { enabled: r, filter: i } = t.useContext(p), c = s(null);
	o(n, () => c.current);
	let l = r && !e.internal, u = typeof document < "u" ? document.body : null;
	return a(() => {
		if (!l || !c.current || !i.includes(e.type)) return;
		let t = c.current;
		t.dataset.componentName = e.name;
		let n = null, r = null;
		if (u) {
			let { top: i, left: a, width: o, height: s } = t.getBoundingClientRect();
			n = document.createElement("div"), n.className = h({ type: e.type }), n.style.top = `${i}px`, n.style.left = `${a}px`, n.style.width = `${o}px`, n.style.height = `${s}px`, r = document.createElement("div"), r.className = g({ type: e.type }), r.style.top = `${i}px`, r.style.left = `${a}px`, r.innerText = e.name, u.appendChild(r), u.appendChild(n);
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
		ref: c,
		enabled: r
	};
}, v = () => i(p);
//#endregion
export { p as XRayContext, m as XRayProvider, _ as useComponentXRay, v as useXRay };
