import { useI18n as e } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { getGranularityDefinitions as t } from "../../../../../components/OneCalendar/granularities/index.js";
import { OneDateNavigator as n } from "../../../../OneDateNavigator/OneDateNavigator.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/navigationFilters/filterTypes/DateNavigation/DateNavigation.tsx
function i({ filter: i, value: a, onChange: o }) {
	let s = e(), c = {
		granularity: "day",
		...i
	}, l = Array.isArray(c.granularity) ? c.granularity : [c.granularity], u = t({ periods: c.periods })[a?.granularity || l[0]];
	return /* @__PURE__ */ r("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ r(n, {
			onSelect: (e) => {
				!e || !e.value || o({
					value: e.value,
					granularity: e.granularity,
					valueString: u.toString(e.value, s)
				});
			},
			defaultValue: a,
			granularities: l,
			minDate: c.min,
			maxDate: c.max,
			presets: c.presets,
			periods: c.periods,
			hideGoToCurrent: c.hideGoToCurrent
		})
	});
}
//#endregion
export { i as DateNavigation };
