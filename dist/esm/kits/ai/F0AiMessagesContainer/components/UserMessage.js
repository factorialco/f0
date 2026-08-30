import { F0Icon as e } from "../../../../components/F0Icon/index.js";
import t from "../../../../icons/app/Reply.js";
import { F0RichTextDisplay as n } from "../../../../components/RichText/F0RichTextDisplay/F0RichTextDisplay.js";
import { F0FileItem as r } from "../../../../components/F0FileItem/F0FileItem.js";
import { useReplySelection as i } from "../useReplySelection.js";
import { ReplyPopover as a } from "./ReplyPopover.js";
import { useEffect as o, useRef as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/UserMessage.tsx
function u(e) {
	if (typeof e == "string") return e;
	if (Array.isArray(e)) {
		let t = e.filter((e) => e.type === "text").map((e) => e.text).filter((e) => typeof e == "string");
		return t[t.length - 1];
	}
}
function d(e, t) {
	let n = Array.isArray(e) ? e.filter((e) => e.type === "binary").map((e) => ({
		url: e.url,
		filename: e.filename,
		mimetype: e.mimeType
	})).filter((e) => typeof e?.filename == "string" && typeof e?.mimetype == "string" && typeof e?.url == "string") : [];
	return n.length > 0 ? n : (t?.uploadedFiles ?? []).filter((e) => typeof e?.filename == "string" && typeof e?.mimetype == "string" && typeof e?.url == "string");
}
var f = (e) => /* @__PURE__ */ c(n, {
	content: e,
	format: "markdown"
}), p = ({ text: n, renderMarkdown: r }) => /* @__PURE__ */ l("div", {
	className: "flex max-w-[90%] items-start gap-2 self-end pb-1 pr-2 text-f1-foreground-tertiary",
	children: [/* @__PURE__ */ c("div", {
		className: "flex h-5 items-center",
		children: /* @__PURE__ */ c(e, { icon: t })
	}), /* @__PURE__ */ c("div", {
		className: "min-w-0 whitespace-pre-wrap text-base leading-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&_p]:m-0",
		children: (r ?? f)(n)
	})]
}), m = ({ message: e, onReplyQuote: t, autoScrollIntoView: n = !0, renderMarkdown: m }) => {
	let h = s(null), g = s(null);
	o(() => {
		!h.current || !n || h.current.scrollIntoView({ behavior: "smooth" });
	}, [n]);
	let _ = e.rawData, v = d(e?.content, _), y = (u(e?.content) ?? "").trim(), b = e?.replyQuote ?? null, x = y.length > 0, { anchor: S, clear: C } = i({
		containerRef: g,
		enabled: x
	});
	return /* @__PURE__ */ l("div", {
		ref: h,
		className: "my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0",
		children: [
			b && /* @__PURE__ */ c(p, {
				text: b,
				renderMarkdown: m
			}),
			v.length > 0 && /* @__PURE__ */ c("div", {
				className: "flex max-w-[90%] flex-wrap justify-end gap-1.5",
				children: v.map((e, t) => /* @__PURE__ */ c(r, {
					file: {
						name: e.filename,
						type: e.mimetype
					},
					size: "lg"
				}, `${e.filename}-${t}`))
			}),
			x && /* @__PURE__ */ c("div", {
				ref: g,
				className: "w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-xl bg-f1-background-tertiary px-4 py-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
				children: (m ?? f)(y)
			}),
			/* @__PURE__ */ c(a, {
				anchor: S,
				onReply: (e) => {
					t?.(e), C(), window.getSelection()?.removeAllRanges();
				}
			})
		]
	});
};
//#endregion
export { m as UserMessage };
