import { F0RichTextDisplay as e } from "../../../../components/RichText/F0RichTextDisplay/F0RichTextDisplay.js";
import { useReplySelection as t } from "../useReplySelection.js";
import { ReplyPopover as n } from "./ReplyPopover.js";
import { createContext as r, useContext as i, useEffect as a, useRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/AssistantMessage.tsx
var l = r(void 0), u = () => i(l), d = (t) => /* @__PURE__ */ s(e, {
	content: t,
	format: "markdown"
}), f = ({ isGenerating: e, isLoading: r, message: i, renderToolCall: u, onReplyQuote: f, onRendered: p, renderMarkdown: m }) => {
	let h = typeof i?.content == "string" ? i.content : "", g = (i && u?.(i)) ?? i?.generativeUI?.() ?? null, _ = i?.toolCalls?.[0]?.id, v = !h && !g, y = o(null), { anchor: b, clear: x } = t({
		containerRef: y,
		enabled: !!(i?.id && h)
	});
	return a(() => {
		i?.id && !r && !e && p?.(i);
	}, [
		i,
		r,
		e,
		p
	]), !r && !e && v ? null : /* @__PURE__ */ s(l.Provider, {
		value: _,
		children: /* @__PURE__ */ c("div", {
			className: "relative isolate flex w-full flex-col items-start justify-center",
			children: [
				i && h && /* @__PURE__ */ s("div", {
					ref: y,
					className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
					children: (m ?? d)(h)
				}),
				!!g && /* @__PURE__ */ s("div", {
					className: "w-full",
					children: g
				}),
				/* @__PURE__ */ s(n, {
					anchor: b,
					onReply: (e) => {
						f?.(e), x(), window.getSelection()?.removeAllRanges();
					}
				})
			]
		})
	});
};
//#endregion
export { f as AssistantMessage, u as useToolCallId };
