import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { cn as u } from "../../../../lib/utils.js";
import { tableDisplayClassNames as h } from "../../const.js";
import { resolveValue as x, isShowingPlaceholder as b } from "../../utils.js";
const s = 100, f = 12, g = 12, P = (e, d) => {
  const r = x(e, "percentage"), c = b(e, "percentage");
  if (r === void 0)
    return null;
  if (c)
    return /* @__PURE__ */ o(
      "span",
      {
        className: u(
          "text-f1-foreground",
          c && "text-f1-foreground-secondary",
          d.visualization === "table" && h.text
        ),
        "data-cell-type": "percentage",
        children: r
      }
    );
  const t = s / 2, a = t - f / 2, n = a - g, l = 2 * Math.PI * n, m = (100 - Math.min(Number(r), 100)) / 100 * l, p = typeof e == "object" && "label" in e;
  return /* @__PURE__ */ i("div", { className: "flex items-center gap-2", "data-cell-type": "percentage", children: [
    /* @__PURE__ */ i(
      "svg",
      {
        viewBox: `0 0 ${s} ${s}`,
        className: "h-7 w-7 -rotate-90 transform",
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: t,
              cy: t,
              r: a,
              className: "fill-f1-background-positive"
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: t,
              cy: t,
              r: n,
              className: "stroke-f1-background-positive-bold",
              fill: "none",
              strokeWidth: f,
              strokeDasharray: l,
              strokeDashoffset: m,
              strokeLinecap: "round"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o("span", { className: "text-f1-foreground", children: p ? e.label : `${r}%` })
  ] });
};
export {
  P as PercentageCell
};
