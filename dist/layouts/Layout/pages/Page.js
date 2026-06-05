import { jsx as r, jsxs as s } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { cn as e } from "../../../lib/utils.js";
import { validLayoutChildrenGuard as i } from "../internal/utils.js";
const x = f(function({ children: o, aside: d, header: l, variant: m = "main-aside" }, a) {
  return process.env.NODE_ENV === "development" && i("Page", o, ["block", "group"]), /* @__PURE__ */ r("div", { ref: a, className: "h-full", children: /* @__PURE__ */ s(
    "div",
    {
      className: e(
        "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
        "flex-col",
        "overflow-y-auto",
        "md:sticky md:top-0 md:max-h-full"
      ),
      children: [
        /* @__PURE__ */ s(
          "main",
          {
            className: e(
              "sm:min-h-xs h-fit border-0",
              "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2",
              "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden",
              m === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
              "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
            ),
            children: [
              l && /* @__PURE__ */ r(
                "header",
                {
                  className: e(
                    "sticky top-0 z-30 bg-f1-background"
                  ),
                  children: l
                }
              ),
              /* @__PURE__ */ r("div", { className: "flex-1", children: o })
            ]
          }
        ),
        d && /* @__PURE__ */ r(
          "aside",
          {
            className: e(
              "min-w-30 sm:basis-1/4 md:max-w-80",
              "order-2",
              m === "aside-main" ? "md:order-1" : "md:order-3"
            ),
            children: d
          }
        )
      ]
    }
  ) });
});
export {
  x as Page
};
