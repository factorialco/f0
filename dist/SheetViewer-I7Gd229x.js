import { f as e } from "./variants-D_OHTcOj.js";
import { l as t } from "./F0Button-B67qxFBP.js";
import { n, t as r } from "./ToggleGroup-BEipUP_7.js";
import { n as i, t as a } from "./DocumentToolbar-CkcalFPT.js";
import { n as o, t as s } from "./sheetPreview-ol-Ru7Kz.js";
import { useEffect as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/F0PdfViewer/components/SheetViewer.tsx
var p = 1e3, m = 100, h = ({ url: h, filename: g, withCredentials: _ = !0, actions: v }) => {
	let y = e(), b = i(), [x, S] = l(null), [C, w] = l(!1), [T, E] = l(0);
	c(() => {
		let e = !1;
		return S(null), w(!1), E(0), o(h, {
			maxRows: p,
			maxCols: m,
			withCredentials: _
		}).then((t) => {
			e || (t.length === 0 ? w(!0) : S(t));
		}).catch(() => {
			e || w(!0);
		}), () => {
			e = !0;
		};
	}, [h, _]);
	let D = x ? x[Math.min(T, x.length - 1)] : null, O = D ? s(D.rows) : [];
	return /* @__PURE__ */ f("div", {
		className: "flex h-full w-full flex-col bg-f1-background",
		children: [/* @__PURE__ */ d(a, {
			url: h,
			filename: g,
			withCredentials: _,
			actions: v,
			zoom: b,
			children: x && x.length > 1 && /* @__PURE__ */ d(r, {
				type: "single",
				size: "sm",
				value: String(T),
				onValueChange: (e) => {
					e && E(Number(e));
				},
				className: "justify-start",
				children: x.map((e, t) => /* @__PURE__ */ d(n, {
					value: String(t),
					className: "whitespace-nowrap",
					children: e.name
				}, `${e.name}-${t}`))
			})
		}), C ? /* @__PURE__ */ d("div", {
			className: "flex min-h-0 grow items-center justify-center text-f1-foreground-secondary",
			children: y.pdfViewer.previewFailed
		}) : D ? /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d("div", {
			className: "min-h-0 grow overflow-auto",
			children: /* @__PURE__ */ f("table", {
				className: "border-collapse text-sm",
				style: { zoom: b.scale },
				children: [/* @__PURE__ */ d("thead", { children: /* @__PURE__ */ f("tr", { children: [/* @__PURE__ */ d("th", { className: "sticky top-0 z-10 border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1" }), O.map((e) => /* @__PURE__ */ d("th", {
					className: "sticky top-0 z-10 border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1 text-center font-medium text-f1-foreground-secondary",
					children: e
				}, e))] }) }), /* @__PURE__ */ d("tbody", { children: D.rows.map((e, t) => /* @__PURE__ */ f("tr", { children: [/* @__PURE__ */ d("td", {
					className: "border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1 text-center text-f1-foreground-secondary",
					children: t + 1
				}), O.map((t, n) => /* @__PURE__ */ d("td", {
					className: "whitespace-nowrap border border-solid border-f1-border-secondary px-2 py-1 text-f1-foreground",
					children: e[n] ?? ""
				}, n))] }, t)) })]
			})
		}), D.truncatedRows && /* @__PURE__ */ d("div", {
			className: "shrink-0 border-0 border-t border-solid border-f1-border-secondary px-3 py-1.5 text-sm text-f1-foreground-secondary",
			children: y.t("pdfViewer.showingFirstRows.other", { count: p })
		})] }) : /* @__PURE__ */ d(t, {
			role: "status",
			"aria-busy": !0,
			"aria-label": y.pdfViewer.loading,
			className: "min-h-0 w-full grow rounded-none"
		})]
	});
};
//#endregion
export { h as default };
