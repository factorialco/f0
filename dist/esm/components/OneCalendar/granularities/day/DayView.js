import { WeekStartDay as e } from "../../types.js";
import { useL10n as t } from "../../../../lib/providers/l10n/l10n-provider.js";
import { useDateFnsLocale as n } from "../../../../lib/providers/l10n/use-date-fns-locale.js";
import { toCalendarPickerMatcher as r } from "../../utils.js";
import { Calendar as i } from "../../../../ui/calendar.js";
import { useCallback as a } from "react";
import { jsx as o } from "react/jsx-runtime";
import { AnimatePresence as s, motion as c } from "motion/react";
//#region src/components/OneCalendar/granularities/day/DayView.tsx
var l = (e) => !e?.from || !e?.to ? !1 : e.from.toDateString() !== e.to.toDateString();
function u({ mode: u, selected: d, onSelect: f, month: p, onMonthChange: m, motionDirection: h = 1, minDate: g, maxDate: _, compact: v = !1, weekStartsOn: y }) {
	let { date: b } = t(), x = n(), S = y ?? b?.weekStartsOn ?? e.Monday, C = r({
		minDate: g,
		maxDate: _
	}), w = a((e) => {
		if (!f) return;
		let t = d;
		if (l(t) && e?.from) {
			let n = e.from.getTime() !== t?.from?.getTime(), r = e.to?.getTime() !== t?.to?.getTime();
			f({
				from: n || !r ? e.from : e.to ?? e.from,
				to: void 0
			});
		} else e?.from ? f({
			from: e.from,
			to: e.to
		}) : f(null);
	}, [f, d]), T = {
		hidden: (e) => ({
			opacity: 0,
			x: e === 1 ? 40 : -40
		}),
		visible: {
			opacity: 1,
			x: 0
		},
		exit: (e) => ({
			opacity: 0,
			x: e === 1 ? -40 : 40
		})
	};
	return u === "single" ? /* @__PURE__ */ o(s, {
		mode: "popLayout",
		initial: !1,
		custom: h,
		children: /* @__PURE__ */ o(c.div, {
			variants: T,
			custom: h,
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: /* @__PURE__ */ o(i, {
				mode: "single",
				disabled: C,
				selected: d,
				onSelect: f,
				month: p,
				locale: x,
				weekStartsOn: S,
				compact: v
			})
		}, p.toISOString())
	}) : /* @__PURE__ */ o(s, {
		mode: "popLayout",
		initial: !1,
		custom: h,
		children: /* @__PURE__ */ o(c.div, {
			variants: T,
			custom: h,
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: /* @__PURE__ */ o(i, {
				mode: "range",
				disabled: C,
				selected: d,
				onSelect: w,
				month: p,
				onMonthChange: m,
				locale: x,
				weekStartsOn: S,
				compact: v
			}, p.toISOString())
		}, p.toISOString())
	});
}
//#endregion
export { u as DayView };
