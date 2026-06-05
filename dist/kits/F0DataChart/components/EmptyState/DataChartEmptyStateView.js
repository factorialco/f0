import { jsx as e, Fragment as o } from "react/jsx-runtime";
import { DataChartEmptyState as a } from "./EmptyState.js";
import { useI18n as s } from "../../../../lib/providers/i18n/i18n-provider.js";
const p = ({
  chartType: n,
  emptyState: t
}) => {
  const i = s();
  if (t?.render) return /* @__PURE__ */ e(o, { children: t.render() });
  const r = i.dataChart.emptyState;
  return /* @__PURE__ */ e(
    a,
    {
      chartType: n,
      content: t?.title ?? r.title,
      description: t?.description ?? r.description
    }
  );
};
export {
  p as DataChartEmptyStateView
};
