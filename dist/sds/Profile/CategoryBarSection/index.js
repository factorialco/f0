import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { CategoryBarChart as o } from "../../../kits/Charts/CategoryBarChart/index.js";
import { cn as c } from "../../../lib/utils.js";
function x({
  title: a,
  subtitle: i,
  data: n,
  helpText: s,
  legend: t = !1,
  hideTooltip: m = !1
}) {
  return /* @__PURE__ */ r("div", { children: [
    /* @__PURE__ */ r("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ e("span", { className: "text-3xl font-semibold", children: a }),
      /* @__PURE__ */ e("span", { className: "text-xl text-f1-foreground-secondary", children: i })
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(
      o,
      {
        data: n,
        legend: t,
        hideTooltip: m
      }
    ) }),
    !!s && /* @__PURE__ */ e("div", { className: t ? "mt-1" : "mt-2", children: /* @__PURE__ */ e(
      "span",
      {
        className: c(
          "text-f1-foreground",
          t ? "text-sm" : "text-base"
        ),
        children: s
      }
    ) })
  ] });
}
export {
  x as CategoryBarSection
};
