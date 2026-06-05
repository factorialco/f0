import { jsx as t, jsxs as w } from "react/jsx-runtime";
import { useContext as C, createContext as y, useRef as R, useEffect as h } from "react";
import { RichTextDisplay as I } from "../../../../components/RichText/RichTextDisplay/index.js";
import { useReplySelection as b } from "../useReplySelection.js";
import { ReplyPopover as j } from "./ReplyPopover.js";
const f = y(void 0), P = () => C(f), k = (o) => /* @__PURE__ */ t(I, { content: o, format: "markdown" }), S = ({
  isGenerating: o,
  isLoading: n,
  message: l,
  renderToolCall: a,
  onReplyQuote: d,
  onRendered: r,
  renderMarkdown: u
}) => {
  const e = typeof l?.content == "string" ? l.content : "", c = (l && a?.(l)) ?? l?.generativeUI?.() ?? null, s = l?.toolCalls?.[0]?.id, p = !e && !c, i = R(null), { anchor: v, clear: x } = b({
    containerRef: i,
    enabled: !!(l?.id && e)
  });
  return h(() => {
    l?.id && !n && !o && r?.(l);
  }, [l, n, o, r]), !n && !o && p ? null : /* @__PURE__ */ t(f.Provider, { value: s, children: /* @__PURE__ */ w("div", { className: "relative isolate flex w-full flex-col items-start justify-center", children: [
    l && e && /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: (u ?? k)(e)
      }
    ),
    !!c && /* @__PURE__ */ t("div", { className: "w-full", children: c }),
    /* @__PURE__ */ t(
      j,
      {
        anchor: v,
        onReply: (m) => {
          d?.(m), x(), window.getSelection()?.removeAllRanges();
        }
      }
    )
  ] }) });
};
export {
  S as AssistantMessage,
  P as useToolCallId
};
