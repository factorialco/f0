import { jsx as i, jsxs as c } from "react/jsx-runtime";
import { F0Icon as m } from "../../../../components/F0Icon/index.js";
import p from "../../../../icons/app/ArrowDown.js";
import x from "../../../../icons/app/ArrowUp.js";
import "../../../../icons/app/Menu.js";
import { cn as h } from "../../../../lib/utils.js";
import { useDashboardItemData as F } from "../../hooks/useDashboardItemData.js";
import { DashboardItem as g } from "../DashboardItem/DashboardItem.js";
import { MetricSkeleton as b } from "../DashboardItem/DashboardItemSkeleton.js";
function w(t, e = { type: "number" }, r = 0) {
  switch (e.type) {
    case "currency":
      return new Intl.NumberFormat(void 0, {
        style: "currency",
        currency: e.currency ?? "EUR",
        minimumFractionDigits: r,
        maximumFractionDigits: r
      }).format(t);
    case "percent":
      return new Intl.NumberFormat(void 0, {
        style: "percent",
        minimumFractionDigits: r,
        maximumFractionDigits: r
      }).format(t / 100);
    case "custom": {
      const n = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: r,
        maximumFractionDigits: r
      }).format(t);
      return `${e.prefix ?? ""}${n}${e.suffix ?? ""}`;
    }
    default:
      return new Intl.NumberFormat(void 0, {
        minimumFractionDigits: r,
        maximumFractionDigits: r
      }).format(t);
  }
}
function D(t, e) {
  if (e === void 0 || e === 0) return;
  const r = (t - e) / Math.abs(e) * 100, n = r > 0.5 ? "up" : r < -0.5 ? "down" : "flat";
  return { percent: Math.abs(r), direction: n };
}
function z({
  item: t,
  filters: e,
  actions: r,
  editMode: n,
  handleDelete: s
}) {
  const d = t.useDashboardFilters !== !1, { data: o, isLoading: f, error: u, retry: l } = F(t.fetchData, e, d), a = o ? D(o.value, o.previousValue) : void 0;
  return /* @__PURE__ */ i(
    g,
    {
      title: t.title,
      description: t.description,
      explanation: t.explanation,
      isLoading: f,
      error: u,
      onRetry: l,
      skeleton: /* @__PURE__ */ i(b, {}),
      actions: r,
      editMode: n,
      handleDelete: s,
      itemId: t.id,
      children: o && /* @__PURE__ */ i("div", { className: "flex h-full min-h-0 items-end overflow-auto px-4 pb-4", children: /* @__PURE__ */ c("div", { className: "flex items-baseline gap-3", children: [
        /* @__PURE__ */ i("span", { className: "whitespace-nowrap text-4xl font-semibold leading-none tracking-tight text-f1-foreground", children: w(o.value, t.format, t.decimals) }),
        a && a.direction !== "flat" && /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center", children: [
          a.direction === "up" ? /* @__PURE__ */ i(m, { icon: x, color: "positive", size: "sm" }) : /* @__PURE__ */ i(m, { icon: p, color: "critical", size: "sm" }),
          /* @__PURE__ */ c(
            "span",
            {
              className: h(
                "whitespace-nowrap text-base font-medium",
                a.direction === "up" ? "text-f1-foreground-positive" : "text-f1-foreground-critical"
              ),
              children: [
                a.percent.toFixed(1),
                "%"
              ]
            }
          )
        ] })
      ] }) })
    }
  );
}
export {
  z as MetricItem
};
