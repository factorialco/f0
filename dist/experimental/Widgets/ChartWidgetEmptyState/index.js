import { jsxs as e, jsx as t } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { withDataTestId as b } from "../../../lib/data-testid/index.js";
import { experimentalComponent as N } from "../../../lib/experimental.js";
import { cn as a } from "../../../lib/utils.js";
import { Card as C, CardHeader as x, CardTitle as g, CardContent as S } from "../../../ui/Card/Card.js";
import u from "./Backgrounds/EmptyBarChart.js";
import w from "./Backgrounds/EmptyLineChart.js";
import { F0Button as A } from "../../../components/F0Button/F0Button.js";
const E = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, T = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, v = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, R = {
  "line-chart": "default",
  "bar-chart": "promote"
}, _ = p(
  function({ title: l, content: n, buttonLabel: o, buttonIcon: c, buttonAction: i, type: r }, m) {
    const s = E[r], d = T[r], f = v[r], h = R[r];
    return /* @__PURE__ */ e(
      C,
      {
        className: a(
          "relative flex gap-4 overflow-hidden border-dashed",
          s
        ),
        ref: m,
        children: [
          /* @__PURE__ */ t(x, { className: "-mt-0.5", children: /* @__PURE__ */ t(g, { children: l }) }),
          /* @__PURE__ */ e(S, { className: a("flex flex-col gap-4", d), children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: a(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  f
                ),
                children: [
                  r === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(u, { className: "w-full" }) }),
                  r === "line-chart" && /* @__PURE__ */ t(w, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ e("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: n }),
              o && /* @__PURE__ */ t(
                A,
                {
                  label: o,
                  icon: c,
                  variant: h,
                  onClick: i
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
), y = b(
  N("ChartWidgetEmptyState", _)
);
export {
  y as ChartWidgetEmptyState
};
