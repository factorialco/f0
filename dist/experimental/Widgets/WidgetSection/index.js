import { jsxs as i, jsx as m } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import { withDataTestId as a } from "../../../lib/data-testid/index.js";
import { experimentalComponent as c } from "../../../lib/experimental.js";
import { useTextFormatEnforcer as d } from "../../../lib/text.js";
const t = n(
  ({ title: e, children: o }, r) => (d(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ i("div", { ref: r, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ m("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    o
  ] }))
);
t.displayName = "WidgetSection";
const g = a(
  c("WidgetSection", t)
);
export {
  g as WidgetSection
};
