import { jsxs as g, jsx as t } from "react/jsx-runtime";
import { cn as n } from "../../../../lib/utils.js";
import { TypewriterPlaceholder as y } from "./TypewriterPlaceholder.js";
const k = ({
  textareaRef: d,
  highlightRef: c,
  inputValue: r,
  onInputChange: m,
  onKeyDown: l,
  onCursorUpdate: o,
  onScroll: f,
  highlightSegments: h,
  hasOverlay: a,
  multiplePlaceholders: s,
  placeholders: x,
  resolvedDefaultPlaceholder: p,
  inProgress: w
}) => /* @__PURE__ */ g(
  "div",
  {
    className: n("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-0"),
    children: [
      /* @__PURE__ */ t(
        "div",
        {
          "aria-hidden": !0,
          className: n(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3"
          ),
          children: r.endsWith(`
`) ? r + "_" : r
        }
      ),
      a && /* @__PURE__ */ t(
        "div",
        {
          ref: c,
          "aria-hidden": !0,
          className: n(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ),
          children: h.map(
            (e, i) => e.type === "mention" ? /* @__PURE__ */ t(
              "span",
              {
                className: "font-medium text-f1-foreground-secondary",
                children: e.text
              },
              i
            ) : e.type === "ghost" ? /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary opacity-50", children: e.text }, i) : /* @__PURE__ */ t("span", { children: e.text }, i)
          )
        }
      ),
      !r && !s && /* @__PURE__ */ t(
        "p",
        {
          className: n(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "text-f1-foreground-secondary",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "pt-3 px-3",
            "overflow-hidden text-ellipsis whitespace-nowrap"
          ),
          children: x.length === 1 ? x[0] : p
        }
      ),
      /* @__PURE__ */ t(
        "textarea",
        {
          autoFocus: !1,
          name: "one-ai-input",
          rows: 1,
          ref: d,
          value: r,
          onChange: (e) => {
            m(e.target.value, e.target.selectionStart ?? 0);
          },
          onKeyDown: l,
          onKeyUp: o,
          onClick: o,
          onSelect: o,
          onScroll: f,
          className: n(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[240px] h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "mt-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none",
            a ? "text-transparent caret-f1-foreground" : "text-f1-foreground",
            !a && (r || !s ? "caret-f1-foreground" : "caret-transparent")
          )
        }
      ),
      s && /* @__PURE__ */ t(
        y,
        {
          placeholders: x,
          defaultPlaceholder: p,
          inputValue: r,
          inProgress: w ?? !1
        }
      )
    ]
  }
);
export {
  k as TextareaField
};
