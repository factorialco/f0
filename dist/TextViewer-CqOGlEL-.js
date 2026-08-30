import { f as e } from "./variants-BhCxKzs5.js";
import { l as t } from "./F0Button-CYTXun0O.js";
import { n } from "./markdown-BP7WaW6T.js";
import { n as r, t as i } from "./DocumentToolbar-B-Ujr_bK.js";
import { useEffect as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/F0PdfViewer/components/TextViewer.tsx
var l = 2097152, u = [
	"[&_h1]:mb-3 [&_h1]:mt-6 [&_h1]:text-2xl [&_h1]:font-semibold",
	"[&_h2]:mb-2 [&_h2]:mt-5 [&_h2]:text-xl [&_h2]:font-semibold",
	"[&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold",
	"[&_h4]:mb-2 [&_h4]:mt-4 [&_h4]:font-semibold",
	"[&_p]:my-3",
	"[&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6",
	"[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6",
	"[&_li]:my-1",
	"[&_a]:text-f1-foreground-accent [&_a]:underline",
	"[&_blockquote]:my-3 [&_blockquote]:border-0 [&_blockquote]:border-l-2 [&_blockquote]:border-solid [&_blockquote]:border-f1-border [&_blockquote]:pl-3 [&_blockquote]:text-f1-foreground-secondary",
	"[&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-f1-background-secondary [&_pre]:p-3",
	"[&_code]:font-mono [&_code]:text-sm",
	"[&_table]:my-3 [&_table]:border-collapse",
	"[&_th]:border [&_th]:border-solid [&_th]:border-f1-border-secondary [&_th]:px-2 [&_th]:py-1 [&_th]:text-left [&_th]:font-medium",
	"[&_td]:border [&_td]:border-solid [&_td]:border-f1-border-secondary [&_td]:px-2 [&_td]:py-1",
	"[&_hr]:my-4 [&_hr]:border-f1-border-secondary"
].join(" "), d = (e, t) => !!t?.toLowerCase().includes("markdown") || e.toLowerCase().endsWith(".md") || e.toLowerCase().endsWith(".markdown"), f = ({ url: f, name: p, mimeType: m, withCredentials: h = !0, actions: g }) => {
	let _ = e(), v = r(), [y, b] = o(null), [x, S] = o(!1);
	return a(() => {
		let e = !1;
		return b(null), S(!1), fetch(f, { credentials: h ? "include" : "same-origin" }).then((e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e.text();
		}).then((t) => {
			e || b(t.slice(0, l));
		}).catch(() => {
			e || S(!0);
		}), () => {
			e = !0;
		};
	}, [f, h]), /* @__PURE__ */ c("div", {
		className: "flex h-full w-full flex-col bg-f1-background",
		children: [/* @__PURE__ */ s(i, {
			url: f,
			filename: p,
			withCredentials: h,
			actions: g,
			zoom: v
		}), x ? /* @__PURE__ */ s("div", {
			className: "flex min-h-0 grow items-center justify-center text-f1-foreground-secondary",
			children: _.pdfViewer.previewFailed
		}) : y === null ? /* @__PURE__ */ s(t, {
			role: "status",
			"aria-busy": !0,
			"aria-label": _.pdfViewer.loading,
			className: "min-h-0 w-full grow rounded-none"
		}) : /* @__PURE__ */ s("div", {
			className: "min-h-0 grow overflow-auto",
			children: /* @__PURE__ */ s("div", {
				style: { zoom: v.scale },
				children: d(p, m) ? /* @__PURE__ */ s("div", {
					className: `mx-auto max-w-3xl px-6 py-4 text-base text-f1-foreground ${u}`,
					dangerouslySetInnerHTML: { __html: n(y) }
				}) : /* @__PURE__ */ s("pre", {
					className: "m-0 whitespace-pre-wrap break-words px-6 py-4 font-mono text-sm text-f1-foreground",
					children: y
				})
			})
		})]
	});
};
//#endregion
export { f as default };
