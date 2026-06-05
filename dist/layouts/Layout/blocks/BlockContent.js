import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { cn as c } from "../../../lib/utils.js";
import { createPageLayoutBlock as f } from "../utils.js";
import { Block as h } from "./Block/Block.js";
const d = ({
  title: s = "",
  description: n,
  titleLevel: o = "h2",
  children: a,
  className: e,
  ...m
}) => {
  if (!s) return null;
  const x = o;
  return /* @__PURE__ */ r(h, { ...m, className: c("space-y-4", e), children: [
    /* @__PURE__ */ r("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t(
        x,
        {
          className: c("font-semibold text-f1-foreground", {
            "text-2xl": o === "h1",
            "text-xl": o === "h2",
            "text-lg": o === "h3",
            "text-base": o === "h4",
            "text-sm": o === "h5",
            "text-xs": o === "h6"
          }),
          children: s
        }
      ),
      n && /* @__PURE__ */ t("p", { className: "text-sm text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ t("div", { className: "flex-1", children: a })
  ] });
}, k = f(
  "BlockContent",
  d
);
export {
  k as BlockContent
};
