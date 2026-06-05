import { jsx as r, jsxs as t } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { Component as n } from "../../lib/component/component.js";
import { withDataTestId as i } from "../../lib/data-testid/index.js";
import { cn as o } from "../../lib/utils.js";
const u = f(
  function({
    children: e,
    sideContent: s,
    mainColumnPosition: l = "left",
    sticky: m = !1
  }, a) {
    return /* @__PURE__ */ r("div", { ref: a, className: "h-full", children: /* @__PURE__ */ t(
      "div",
      {
        className: o(
          "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
          "flex-col",
          "overflow-y-auto",
          m && "md:sticky md:top-0 md:max-h-full"
        ),
        children: [
          /* @__PURE__ */ r(
            "main",
            {
              className: o(
                "sm:min-h-xs order-2 h-fit border-0 py-5 sm:flex-1 sm:border-solid md:order-2 px-page",
                m ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full",
                l === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ r(
            p,
            {
              sticky: m,
              className: o(
                "order-1",
                l === "right" ? "md:order-1" : "md:order-3"
              ),
              children: s
            }
          )
        ]
      }
    ) });
  }
), y = i(
  n(
    {
      name: "TwoColumnLayout",
      type: "layout"
    },
    u
  )
), p = ({
  children: d,
  className: e
}) => /* @__PURE__ */ r(
  "aside",
  {
    className: o(
      "min-w-30 py-5 pl-page pr-page sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      e
    ),
    children: d
  }
);
export {
  y as TwoColumnLayout
};
