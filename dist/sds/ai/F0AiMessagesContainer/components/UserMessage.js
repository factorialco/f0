import { jsxs as d, jsx as i } from "react/jsx-runtime";
import { useRef as c, useEffect as w } from "react";
import { F0Icon as v } from "../../../../components/F0Icon/index.js";
import { FileItem as b } from "../../../../components/RichText/FileItem/index.js";
import { RichTextDisplay as R } from "../../../../components/RichText/RichTextDisplay/index.js";
import "../../../../icons/app/Menu.js";
import F from "../../../../icons/app/Reply.js";
import { useReplySelection as N } from "../useReplySelection.js";
import { ReplyPopover as A } from "./ReplyPopover.js";
function T(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) {
    const l = e.filter((r) => r.type === "text").map((r) => r.text).filter((r) => typeof r == "string");
    return l[l.length - 1];
  }
}
function k(e, l) {
  const r = Array.isArray(e) ? e.filter((t) => t.type === "binary").map((t) => ({
    url: t.url,
    filename: t.filename,
    mimetype: t.mimeType
  })).filter(
    (t) => typeof t?.filename == "string" && typeof t?.mimetype == "string" && typeof t?.url == "string"
  ) : [];
  return r.length > 0 ? r : (l?.uploadedFiles ?? []).filter(
    (t) => typeof t?.filename == "string" && typeof t?.mimetype == "string" && typeof t?.url == "string"
  );
}
const u = (e) => /* @__PURE__ */ i(R, { content: e, format: "markdown" }), j = ({
  text: e,
  renderMarkdown: l
}) => /* @__PURE__ */ d("div", { className: "flex max-w-[90%] items-start gap-2 self-end pb-1 pr-2 text-f1-foreground-tertiary", children: [
  /* @__PURE__ */ i("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ i(v, { icon: F }) }),
  /* @__PURE__ */ i("div", { className: "min-w-0 whitespace-pre-wrap text-base leading-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&_p]:m-0", children: (l ?? u)(e) })
] }), C = ({
  message: e,
  onReplyQuote: l,
  autoScrollIntoView: r = !0,
  renderMarkdown: t
}) => {
  const o = c(null), a = c(null);
  w(() => {
    !o.current || !r || o.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [r]);
  const y = e.rawData, s = k(
    e?.content,
    y
  ), m = (T(e?.content) ?? "").trim(), f = e?.replyQuote ?? null, p = m.length > 0, { anchor: x, clear: g } = N({
    containerRef: a,
    enabled: p
  });
  return /* @__PURE__ */ d(
    "div",
    {
      ref: o,
      className: "my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0",
      children: [
        f && /* @__PURE__ */ i(j, { text: f, renderMarkdown: t }),
        s.length > 0 && /* @__PURE__ */ i("div", { className: "flex max-w-[90%] flex-wrap justify-end gap-1.5", children: s.map((n, h) => /* @__PURE__ */ i(
          b,
          {
            file: { name: n.filename, type: n.mimetype },
            size: "lg"
          },
          `${n.filename}-${h}`
        )) }),
        p && /* @__PURE__ */ i(
          "div",
          {
            ref: a,
            className: "w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-xl bg-f1-background-tertiary px-4 py-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
            children: (t ?? u)(m)
          }
        ),
        /* @__PURE__ */ i(
          A,
          {
            anchor: x,
            onReply: (n) => {
              l?.(n), g(), window.getSelection()?.removeAllRanges();
            }
          }
        )
      ]
    }
  );
};
export {
  C as UserMessage
};
