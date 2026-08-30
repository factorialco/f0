import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as t } from "../../../ui/skeleton.js";
import { DocumentToolbar as n, useDocumentZoom as r } from "./DocumentToolbar.js";
import { useEffect as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { renderAsync as l } from "docx-preview";
//#region src/components/F0PdfViewer/components/DocxViewer.tsx
var u = ({ url: u, filename: d, withCredentials: f = !0, actions: p }) => {
	let m = e(), h = r(), g = a(null), [_, v] = o("loading");
	return i(() => {
		let e = g.current;
		if (!e) return;
		let t = !1;
		return v("loading"), fetch(u, { credentials: f ? "include" : "same-origin" }).then((e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e.blob();
		}).then((n) => {
			if (!t) return l(n, e, void 0, {
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
	}, [u, f]), /* @__PURE__ */ c("div", {
		className: "flex h-full w-full flex-col bg-f1-background",
		children: [/* @__PURE__ */ s(n, {
			url: u,
			filename: d,
			withCredentials: f,
			actions: p,
			zoom: h
		}), /* @__PURE__ */ c("div", {
			className: "relative min-h-0 grow overflow-auto bg-f1-background-secondary",
			children: [
				_ === "loading" && /* @__PURE__ */ s(t, {
					role: "status",
					"aria-busy": !0,
					"aria-label": m.pdfViewer.loading,
					className: "absolute inset-0 h-full w-full rounded-none"
				}),
				_ === "failed" && /* @__PURE__ */ s("div", {
					className: "flex h-full w-full items-center justify-center bg-f1-background text-f1-foreground-secondary",
					children: m.pdfViewer.previewFailed
				}),
				/* @__PURE__ */ s("div", {
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
