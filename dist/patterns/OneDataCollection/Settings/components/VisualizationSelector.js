import { jsx as t, jsxs as f } from "react/jsx-runtime";
import { F0Icon as u } from "../../../../components/F0Icon/index.js";
import { cn as p, focusRing as d } from "../../../../lib/utils.js";
import { collectionVisualizations as g } from "../../visualizations/collection/collectionViewRegistry.js";
import { useI18n as y } from "../../../../lib/providers/i18n/i18n-provider.js";
const k = ({
  visualizations: n,
  currentVisualization: c,
  onVisualizationChange: r
}) => {
  const i = y(), s = (o) => {
    r(o);
  }, l = (o) => o.type === "custom" ? {
    icon: o.icon,
    label: o.label
  } : {
    icon: g[o.type].icon,
    label: i.collections.visualizations[o.type]
  };
  return /* @__PURE__ */ t("div", { className: "grid grid-cols-2 p-2", children: n.map((o, e) => {
    const { icon: a, label: m } = l(o);
    return /* @__PURE__ */ f(
      "button",
      {
        className: p(
          "flex w-full flex-col items-center justify-center gap-1 rounded-sm p-2 font-medium text-f1-foreground-secondary transition-colors",
          c === e && "bg-f1-background-secondary text-f1-foreground",
          d()
        ),
        onClick: () => s(e),
        children: [
          /* @__PURE__ */ t(u, { icon: a }),
          m
        ]
      },
      o.type
    );
  }) });
};
export {
  k as VisualizationSelector
};
