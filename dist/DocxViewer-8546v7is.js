import { f as e } from "./variants-D_OHTcOj.js";
import { l as t } from "./F0Button-B67qxFBP.js";
import { t as n } from "./docx-preview-BDrVn7Yf.js";
import { n as r, t as i } from "./DocumentToolbar-Bk3PbuER.js";
import { useEffect as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/F0PdfViewer/components/DocxViewer.tsx
var u = ({ url: u, filename: d, withCredentials: f = !0, actions: p }) => {
	let m = e(), h = r(), g = o(null), [_, v] = s("loading");
	return a(() => {
		let e = g.current;
		if (!e) return;
		let t = !1;
		return v("loading"), fetch(u, { credentials: f ? "include" : "same-origin" }).then((e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e.blob();
		}).then((r) => {
			if (!t) return n(r, e, void 0, {
				inWrapper: !0,
				breakPages: !0
			}).then(() => {
				t || v("ready");
			});
		}).catch(() => {
			t || v("failed");
		}), () => {
			t = !0;
		};
	}, [u, f]), /* @__PURE__ */ l("div", {
		className: "flex h-full w-full flex-col bg-f1-background",
		children: [/* @__PURE__ */ c(i, {
			url: u,
			filename: d,
			withCredentials: f,
			actions: p,
			zoom: h
		}), /* @__PURE__ */ l("div", {
			className: "relative min-h-0 grow overflow-auto bg-f1-background-secondary",
			children: [
				_ === "loading" && /* @__PURE__ */ c(t, {
					role: "status",
					"aria-busy": !0,
					"aria-label": m.pdfViewer.loading,
					className: "absolute inset-0 h-full w-full rounded-none"
				}),
				_ === "failed" && /* @__PURE__ */ c("div", {
					className: "flex h-full w-full items-center justify-center bg-f1-background text-f1-foreground-secondary",
					children: m.pdfViewer.previewFailed
				}),
				/* @__PURE__ */ c("div", {
					ref: g,
					className: _ === "failed" ? "hidden" : void 0,
					style: { zoom: h.scale }
				})
			]
		})]
	});
};
//#endregion
export { u as default };
