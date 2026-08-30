"use client";
import e from "../../../../icons/app/Cross.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as n } from "../../../../ui/skeleton.js";
import { DialogContent as r } from "../../../../ui/Dialog/components/DialogContent.js";
import { DialogTitle as i } from "../../../../ui/Dialog/components/DialogTitle.js";
import { Dialog as a } from "../../../../ui/Dialog/dialog.js";
import { useChatDocumentPreview as o } from "../providers/ChatUIProvider.js";
import { Suspense as s, lazy as c, useEffect as l, useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatDocumentPreview.tsx
var p = c(() => import("../../../../components/F0PdfViewer/index.js").then((e) => ({ default: e.F0PdfViewer }))), m = () => {
	let c = t(), { documentPreview: m, closeDocumentPreview: h } = o(), [g, _] = u(null);
	l(() => _(document.body), []);
	let v = m?.file, y = m?.kind;
	return /* @__PURE__ */ d(a, {
		open: m !== null,
		onOpenChange: (e) => {
			e || h();
		},
		children: v && y && /* @__PURE__ */ f(r, {
			container: g,
			className: "h-full w-full max-w-none rounded-none bg-transparent p-0 shadow-none",
			withTranslateAnimation: !1,
			"aria-describedby": void 0,
			children: [
				/* @__PURE__ */ d(i, {
					className: "sr-only",
					children: v.name || c.chat.documentPreview
				}),
				/* @__PURE__ */ d("button", {
					type: "button",
					tabIndex: -1,
					"aria-label": c.chat.closePreview,
					className: "absolute inset-0 cursor-default",
					onClick: h
				}),
				/* @__PURE__ */ d("div", {
					className: "pointer-events-none absolute inset-0 flex items-center justify-center px-4 pb-4 pt-4",
					children: /* @__PURE__ */ d("div", {
						className: "pointer-events-auto h-full w-full max-w-4xl overflow-hidden rounded-lg",
						children: /* @__PURE__ */ d(s, {
							fallback: /* @__PURE__ */ d(n, { className: "h-full w-full" }),
							children: /* @__PURE__ */ d(p, {
								url: v.url,
								kind: y,
								filename: v.name,
								mimeType: v.mimeType,
								initialScale: "page-width",
								withCredentials: !1,
								actions: [{
									icon: e,
									label: c.chat.closePreview,
									onClick: h
								}]
							})
						})
					})
				})
			]
		})
	});
};
//#endregion
export { m as ChatDocumentPreview };
