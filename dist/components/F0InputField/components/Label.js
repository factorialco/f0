import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { F0Icon as t } from "../../F0Icon/index.js";
import { cn as n } from "../../../lib/utils.js";
import { OneEllipsis as d } from "../../../lib/OneEllipsis/OneEllipsis.js";
const u = ({
  label: e,
  required: i,
  htmlFor: s,
  className: m,
  icon: a,
  disabled: l
}) => /* @__PURE__ */ o(
  "label",
  {
    className: n(
      m,
      "text-md flex max-w-full gap-1 font-medium text-f1-foreground-secondary"
    ),
    htmlFor: s,
    "aria-label": e,
    "aria-disabled": l,
    children: [
      a && /* @__PURE__ */ r(t, { icon: a, size: "sm" }),
      /* @__PURE__ */ r(d, { className: "shrink-1 min-w-0", children: e }),
      i && /* @__PURE__ */ r("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: "*" })
    ]
  }
);
export {
  u as Label
};
