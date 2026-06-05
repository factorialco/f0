import { jsxs as i, jsx as e, Fragment as w } from "react/jsx-runtime";
import { useRef as N } from "react";
import { Tag as x } from "../../../../components/tags/F0Tag/F0Tag.js";
import { formatPercent as F } from "../../utils/formatters.js";
import { useEChartsInstance as z } from "../../utils/useEChartsInstance.js";
import { useLegendInteraction as C } from "../../utils/useLegendInteraction.js";
import { useFunnelChartOptions as y } from "./useFunnelChartOptions.js";
import { OneEllipsis as f } from "../../../../lib/OneEllipsis/OneEllipsis.js";
function j(r, s) {
  return s === "none" ? r : s === "ascending" ? [...r].sort((n, t) => n.value - t.value) : [...r].sort((n, t) => t.value - n.value);
}
const S = (r) => {
  const {
    series: s,
    sort: n = "descending",
    orient: t = "horizontal",
    showConversion: v = !1,
    showLabels: p = !0,
    valueFormatter: c
  } = r, d = N(null), b = y(d, r), g = z(d, b);
  C(g);
  const m = j(s.data ?? [], n), u = m[0]?.value ?? 0, l = t === "horizontal";
  return /* @__PURE__ */ i("div", { className: "relative h-full w-full", children: [
    p && /* @__PURE__ */ e(
      "div",
      {
        className: `pointer-events-none absolute inset-0 z-10 flex ${l ? "" : "flex-col"}`,
        children: m.map((o) => {
          const h = c ? c(o.value) : String(o.value), a = v && u > 0 ? F(o.value, u) : null;
          return /* @__PURE__ */ e(
            "div",
            {
              className: l ? "min-w-0 flex-1 border-0 border-l border-dashed border-f1-border" : "min-h-0 flex-1 border-0 border-t border-dashed border-f1-border",
              children: /* @__PURE__ */ i(
                "div",
                {
                  className: l ? "flex flex-col gap-3 overflow-hidden px-2.5 pt-2" : "flex items-baseline gap-2 overflow-hidden px-2.5 pt-2",
                  children: [
                    /* @__PURE__ */ e(
                      f,
                      {
                        className: "text-base text-f1-foreground-secondary",
                        lines: l ? 2 : 1,
                        children: o.name
                      }
                    ),
                    l ? /* @__PURE__ */ i("div", { className: "flex items-baseline gap-1.5", children: [
                      /* @__PURE__ */ e(
                        f,
                        {
                          className: "text-2xl font-semibold leading-none text-f1-foreground",
                          lines: 1,
                          children: h
                        }
                      ),
                      a && /* @__PURE__ */ e(x, { tag: { type: "raw", text: a } })
                    ] }) : /* @__PURE__ */ i(w, { children: [
                      /* @__PURE__ */ e(
                        f,
                        {
                          className: "text-xl font-semibold leading-none text-f1-foreground",
                          lines: 1,
                          children: h
                        }
                      ),
                      a && /* @__PURE__ */ e(x, { tag: { type: "raw", text: a } })
                    ] })
                  ]
                }
              )
            },
            o.name
          );
        })
      }
    ),
    /* @__PURE__ */ e("div", { ref: d, className: "h-full w-full" })
  ] });
};
export {
  S as FunnelChart
};
