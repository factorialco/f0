import { DataTestIdWrapper as e } from "../../lib/data-testid/index.js";
import { WeekStartDay as t } from "../../components/OneCalendar/types.js";
import { useL10n as n } from "../../lib/providers/l10n/l10n-provider.js";
import { getGranularityDefinitions as r } from "../../components/OneCalendar/granularities/index.js";
import { isSameDatePickerValue as i, reviveDatePickerValue as a } from "../../ui/DatePickerPopup/utils.js";
import { DatePickerPopup as o } from "../../ui/DatePickerPopup/DatePickerPopup.js";
import { DatePickerTrigger as s } from "./components/DateNavigatorTrigger.js";
import { useEffect as c, useMemo as l, useState as u } from "react";
import { jsx as d } from "react/jsx-runtime";
//#region src/patterns/OneDateNavigator/OneDateNavigator.tsx
function f({ onSelect: f, defaultValue: p, presets: m = [], granularities: h = ["day"], hideNavigation: g = !1, hideGoToCurrent: _ = !1, compareTo: v, defaultCompareTo: y, onCompareToChange: b, value: x, dataTestId: S, periods: C, ...w }) {
	let T = l(() => a(x), [x]), E = l(() => a(p), [p]), [D, O] = u(E ?? T);
	c(() => {
		i(T, D) || O(T || E);
	}, [T, E]);
	let [k, A] = u(), [j, M] = u(!1), N = n(), P = w.weekStartsOn ?? N.date?.weekStartsOn ?? t.Monday, F = l(() => {
		let e = D?.granularity ?? "day";
		return r({
			weekStartsOn: P,
			periods: C
		})[e];
	}, [
		D?.granularity,
		P,
		C
	]), I = (e) => {
		O(e), f?.(e);
	};
	return /* @__PURE__ */ d(e, {
		dataTestId: S,
		children: /* @__PURE__ */ d(o, {
			onSelect: I,
			value: D,
			defaultValue: E,
			presets: m,
			granularities: h,
			minDate: w.minDate,
			maxDate: w.maxDate,
			open: j,
			onOpenChange: M,
			compareTo: v,
			defaultCompareTo: y,
			onCompareToChange: (e) => {
				A(e), b?.(e);
			},
			weekStartsOn: P,
			periods: C,
			asChild: !0,
			children: /* @__PURE__ */ d(s, {
				value: D,
				compareToValue: k,
				highlighted: j,
				navigation: !g,
				onDateChange: (e) => {
					I({
						value: F.toRange(e),
						granularity: D?.granularity ?? "day"
					});
				},
				granularity: F,
				minDate: w.minDate,
				maxDate: w.maxDate,
				disabled: w.disabled,
				hideGoToCurrent: _,
				onClick: () => M(!0)
			})
		})
	});
}
var p = f;
//#endregion
export { p as OneDateNavigator };
