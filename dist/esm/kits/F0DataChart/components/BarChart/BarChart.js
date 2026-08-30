import { resolveChartSize as e } from "../../utils/responsive.js";
import { useAxisLabelTooltip as t } from "../../utils/useAxisLabelTooltip.js";
import { useChartTheme as n } from "../../utils/useChartTheme.js";
import { useContainerSize as r } from "../../utils/useContainerSize.js";
import { useEChartsInstance as i } from "../../utils/useEChartsInstance.js";
import { usePointClick as a } from "../../utils/usePointClick.js";
import { useLegendInteraction as o } from "../../utils/useLegendInteraction.js";
import { useLegendSelection as s } from "../../utils/useLegendSelection.js";
import { expandedHorizontalChartHeight as c, horizontalCategoryWindow as l, useBarChartOptions as u } from "./useBarChartOptions.js";
import { useCallback as d, useEffect as f, useRef as p, useState as m } from "react";
import { jsx as h } from "react/jsx-runtime";
//#region src/kits/F0DataChart/components/BarChart/BarChart.tsx
var g = (g) => {
	let _ = p(null), { width: v, height: y } = r(_), b = e(v), [x, S] = m(null), C = u(_, g, b, x), w = i(_, C);
	a(w, g.onPointClick);
	let T = n(_);
	t(w, _, T), o(w, g.onLegendSelectionChange), s(w, d((e) => S(e), []));
	let E = c(g), D = l({
		isVertical: g.orientation !== "horizontal",
		windowCategories: g.windowCategories ?? !1,
		showAllCategories: g.showAllCategories ?? !1,
		stacked: g.stacked ?? !1,
		categoryCount: g.categories?.length ?? 0,
		seriesCount: g.series?.length ?? 0,
		containerHeight: y
	}), O = D === void 0 ? 0 : Math.max(0, (g.categories?.length ?? 0) - D), { onHiddenCategoriesChange: k } = g;
	return f(() => {
		k?.(O);
	}, [O, k]), /* @__PURE__ */ h("div", {
		ref: _,
		className: "h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default",
		...E === void 0 ? {} : { style: { minHeight: E } }
	});
};
//#endregion
export { g as BarChart };
