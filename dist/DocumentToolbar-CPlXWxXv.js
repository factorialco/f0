import { f as e } from "./variants-CSJ-yF0i.js";
import { a as t, wn as n } from "./OneCalendar-BxfqTY4J.js";
import { Dt as r } from "./F0Checkbox-D80nhG7S.js";
import { t as i } from "./Download-Dvj6cfxp.js";
import { i as a, n as o, r as s, s as c, t as l } from "./scales-WWMMynum.js";
import { useCallback as u, useMemo as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/F0PdfViewer/components/DocumentToolbar.tsx
var h = () => {
	let [e, t] = f(1);
	return {
		scale: e,
		zoomIn: u(() => t((e) => s(e) ?? e), []),
		zoomOut: u(() => t((e) => o(e) ?? e), []),
		setScale: t
	};
}, g = ({ url: o, filename: s, withCredentials: u, actions: f, zoom: h, children: g }) => {
	let { pdfViewer: _ } = e(), v = d(() => l.map((e) => ({
		value: e,
		label: `${Number(e) * 100}%`
	})), []);
	return /* @__PURE__ */ m("div", {
		role: "toolbar",
		"aria-label": _.toolbar,
		className: "F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2 px-6 py-4",
		children: [
			/* @__PURE__ */ p("div", {
				className: "flex min-w-0 flex-1 basis-0 flex-row items-center gap-2 overflow-x-auto",
				children: g
			}),
			h && /* @__PURE__ */ m("div", {
				className: "flex shrink-0 flex-row items-center gap-2",
				children: [
					/* @__PURE__ */ p(c, {
						label: _.zoomOut,
						onClick: h.zoomOut,
						icon: r
					}),
					/* @__PURE__ */ p(c, {
						label: _.zoomIn,
						onClick: h.zoomIn,
						icon: n
					}),
					/* @__PURE__ */ p(t, {
						hideLabel: !0,
						label: _.scaleSelector,
						options: v,
						value: String(h.scale),
						onChange: (e) => h.setScale(Number(e))
					})
				]
			}),
			/* @__PURE__ */ m("div", {
				className: "flex flex-1 basis-0 flex-row items-center justify-end gap-2",
				children: [/* @__PURE__ */ p(c, {
					label: _.download,
					onClick: () => void a(o, s, u),
					icon: i
				}), f?.map((e, t) => /* @__PURE__ */ p(c, {
					label: e.label,
					onClick: e.onClick,
					icon: e.icon
				}, `${e.label}-${t}`))]
			})
		]
	});
};
//#endregion
export { h as n, g as t };
