import { jsx as o, jsxs as p } from "react/jsx-runtime";
import { getColor as c } from "../../../../kits/Charts/utils/colors.js";
import { Progress as u } from "../../../progress.js";
import { resolveValue as x, isShowingPlaceholder as b } from "../../utils.js";
const N = (e, v) => {
  const l = x(e, "value"), a = b(e, "value");
  if (l === void 0)
    return null;
  if (a)
    return /* @__PURE__ */ o(
      "span",
      {
        className: "text-f1-foreground-secondary",
        "data-cell-type": "progressBar",
        children: l
      }
    );
  const i = l, n = typeof e == "object" && "max" in e ? e.max ?? 100 : 100, t = typeof e == "object" && "label" in e ? e.label : void 0, s = typeof e == "object" && "hideLabel" in e ? e.hideLabel : void 0, r = typeof e == "object" && "color" in e ? e.color : void 0, d = r ? c(r) : c("categorical-1"), m = i / n * 100;
  return /* @__PURE__ */ p(
    "div",
    {
      className: "flex w-full items-center gap-2",
      "data-cell-type": "progressBar",
      children: [
        /* @__PURE__ */ o("div", { className: "min-w-16 flex-grow", children: /* @__PURE__ */ o(
          u,
          {
            color: d,
            value: m,
            max: 100,
            getValueLabel: (f) => `${(f ?? 0).toFixed(1)}% ${t}`,
            "aria-label": t,
            className: "w-full"
          }
        ) }),
        !s && /* @__PURE__ */ o("div", { className: "flex-shrink-0 text-sm font-medium text-f1-foreground", children: t })
      ]
    }
  );
};
export {
  N as ProgressBarCell
};
