import { WeekStartDay as e } from "../../types.js";
import { useL10n as t } from "../../../../lib/providers/l10n/l10n-provider.js";
import { useDateFnsLocale as n } from "../../../../lib/providers/l10n/use-date-fns-locale.js";
import { toCalendarPickerMatcher as r } from "../../utils.js";
import { Calendar as i } from "../../../../ui/calendar.js";
import { getEndOfWeek as a, getStartOfWeek as o } from "./weekUtils.js";
import { useCallback as s, useMemo as c } from "react";
import { jsx as l } from "react/jsx-runtime";
import { AnimatePresence as u, motion as d } from "motion/react";
//#region src/components/OneCalendar/granularities/week/WeekView.tsx
function f({ selected: f, onSelect: p, month: m, onMonthChange: h, motionDirection: g = 1, minDate: _, maxDate: v, compact: y = !1, weekStartsOn: b }) {
	let { date: x } = t(), S = n(), C = b ?? x?.weekStartsOn ?? e.Monday, w = {
		hidden: (e) => ({
			opacity: 0,
			x: e === 1 ? y ? 20 : 40 : y ? -20 : -40
		}),
		visible: {
			opacity: 1,
			x: 0
		},
		exit: (e) => ({
			opacity: 0,
			x: e === 1 ? y ? -20 : -40 : y ? 20 : 40
		})
	}, T = s((e) => {
		let t = new Date(e);
		return t.setHours(0, 0, 0, 0), {
			from: o(t, C),
			to: a(t, C)
		};
	}, [C]), E = (e, t) => {
		if (t.selected) {
			p?.(null);
			return;
		}
		p?.(T(e));
	}, D = (e) => {
		e || p?.(null);
	}, O = c(() => {
		if (!f) return;
		let e = f instanceof Date ? f : f.from;
		return T(e);
	}, [
		f,
		T,
		C
	]), k = r({
		minDate: _,
		maxDate: v
	});
	return /* @__PURE__ */ l(u, {
		mode: "popLayout",
		initial: !1,
		custom: g,
		children: /* @__PURE__ */ l(d.div, {
			variants: w,
			custom: g,
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: y ? .1 : .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: /* @__PURE__ */ l(i, {
				mode: "range",
				disabled: k,
				selected: O,
				onDayClick: E,
				onSelect: D,
				month: m,
				onMonthChange: h,
				locale: S,
				weekStartsOn: C,
				showOutsideDays: !0,
				showWeekNumber: !0,
				fixedWeeks: !1,
				compact: y
			}, m.toISOString())
		}, m.toISOString())
	});
}
//#endregion
export { f as WeekView };
