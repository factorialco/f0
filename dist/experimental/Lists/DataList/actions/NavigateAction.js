import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { memo as n } from "react";
import { F0Icon as c } from "../../../../components/F0Icon/index.js";
import d from "../../../../icons/app/ChevronRight.js";
import { Link as m } from "../../../../lib/linkHandler.js";
import { cn as s } from "../../../../lib/utils.js";
const a = n(
  ({ children: o, className: r, ...i }) => /* @__PURE__ */ t(
    m,
    {
      ...i,
      className: s(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        r
      ),
      children: [
        o,
        /* @__PURE__ */ e("div", { className: "grid", children: /* @__PURE__ */ e(c, { "aria-hidden": !0, icon: d, size: "md" }) })
      ]
    }
  )
);
a.displayName = "NavigateAction";
export {
  a as NavigateAction
};
