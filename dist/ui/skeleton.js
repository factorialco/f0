import { jsx as t } from "react/jsx-runtime";
import { cn as n } from "../lib/utils.js";
function s({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-testid": "skeleton",
      className: n(
        "animate-pulse rounded-xs bg-f1-background-secondary",
        e
      ),
      ...o
    }
  );
}
export {
  s as Skeleton
};
