import { jsx as a } from "react/jsx-runtime";
import { cva as i } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import f from "react";
import { Component as d } from "../../lib/component/component.js";
import { withDataTestId as s } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import { LayoutProvider as p } from "../LayoutProvider.js";
const c = i({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-page py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), o = f.forwardRef(({ children: r, variant: e, className: l, ...n }, m) => /* @__PURE__ */ a(p, { layout: "standard", children: /* @__PURE__ */ a(
  "section",
  {
    ref: m,
    className: t("relative flex-1 overflow-auto", l),
    ...n,
    children: /* @__PURE__ */ a("div", { className: t(c({ variant: e })), children: r })
  }
) }));
o.displayName = "StandardLayout";
const S = s(
  d(
    {
      name: "StandardLayout",
      type: "layout"
    },
    o
  )
);
export {
  S as StandardLayout
};
