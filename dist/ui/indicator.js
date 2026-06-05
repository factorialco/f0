import { jsxs as c, jsx as i } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import { EmojiImage as l } from "../lib/emojis.js";
import { F0Icon as s } from "../components/F0Icon/index.js";
import { cn as o } from "../lib/utils.js";
const g = t(
  function({ content: r, label: n, color: m, ...e }, a) {
    return /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", ref: a, children: [
      /* @__PURE__ */ i("p", { className: "text-3xl font-semibold", children: r }),
      /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ i(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: n,
            children: n
          }
        ),
        "icon" in e && e.icon && /* @__PURE__ */ i("span", { className: o("flex", m), children: /* @__PURE__ */ i(s, { icon: e.icon }) }),
        "emoji" in e && e.emoji && /* @__PURE__ */ i("span", { className: o("flex", m), children: /* @__PURE__ */ i(l, { emoji: e.emoji, size: "md" }) })
      ] })
    ] }, n);
  }
);
export {
  g as Indicator
};
