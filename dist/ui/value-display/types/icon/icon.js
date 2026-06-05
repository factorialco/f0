import { jsx as l, jsxs as o } from "react/jsx-runtime";
import { F0Icon as a } from "../../../../components/F0Icon/index.js";
import { TooltipWrapper as t } from "../../../../lib/tooltip-wrapper.js";
import { cn as n } from "../../../../lib/utils.js";
import { tableDisplayClassNames as r } from "../../const.js";
const f = (e, i) => /* @__PURE__ */ l(
  "div",
  {
    className: n(
      "flex items-center gap-2",
      i.visualization === "table" && r.avatar
    ),
    children: /* @__PURE__ */ l(t, { tooltip: e.tooltip, children: /* @__PURE__ */ o("div", { className: "inline-flex items-center gap-2", children: [
      /* @__PURE__ */ l(
        a,
        {
          icon: e.icon,
          "aria-label": e.hideLabel ? e.label : void 0
        }
      ),
      e.hideLabel ? /* @__PURE__ */ l("span", { className: "sr-only", children: e.label }) : /* @__PURE__ */ l("span", { className: "text-f1-foreground", children: e.label })
    ] }) })
  }
);
export {
  f as IconCell
};
