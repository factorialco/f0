import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Select as t } from "../../../F0Select.js";
import { useMemo as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { endOfMonth as a, isAfter as o, isBefore as s, startOfMonth as c } from "date-fns";
function l(e, t, n, r) {
	let i = t ? t.getFullYear() : e - 120, a = n ? n.getFullYear() : e + 120;
	return {
		fromYear: Math.min(i, a, r ?? Infinity),
		toYear: Math.max(i, a, r ?? -Infinity)
	};
}
function u(e, t, n, r) {
	let { fromYear: i, toYear: a } = l(e, t, n, r), o = [];
	for (let e = a; e >= i; e--) o.push({
		value: String(e),
		label: String(e)
	});
	return o;
}
function d(e, t, n, r, i = "long") {
	let l = new Intl.DateTimeFormat(t, { month: i });
	return Array.from({ length: 12 }, (t, i) => {
		let u = new Date(e, i, 1), d = !!(n && s(a(u), n) || r && o(c(u), r));
		return {
			value: String(i),
			label: l.format(new Date(2e3, i, 1)),
			disabled: d
		};
	});
}
function f({ viewDate: a, onViewDateChange: o, showMonth: s, locale: c = "en-US", minDate: l, maxDate: f, compact: p = !1 }) {
	let m = e(), h = n(() => u((/* @__PURE__ */ new Date()).getFullYear(), l, f, a.getFullYear()), [
		l,
		f,
		a
	]), g = n(() => d(a.getFullYear(), c, l, f, p ? "short" : "long"), [
		c,
		a,
		l,
		f,
		p
	]);
	return /* @__PURE__ */ i("div", {
		className: "flex min-w-0 items-center gap-1",
		children: [s && /* @__PURE__ */ r("div", {
			className: p ? "w-[5.5rem]" : "w-[8.5rem]",
			children: /* @__PURE__ */ r(t, {
				size: "sm",
				label: m.date.selectMonth,
				hideLabel: !0,
				placeholder: m.date.selectMonth,
				options: g,
				value: String(a.getMonth()),
				onChange: (e) => {
					o(new Date(a.getFullYear(), Number(e), 1));
				},
				fitContentWidth: !0
			})
		}), /* @__PURE__ */ r("div", {
			className: p ? "w-[5.5rem]" : "w-[6rem]",
			children: /* @__PURE__ */ r(t, {
				size: "sm",
				label: m.date.selectYear,
				hideLabel: !0,
				placeholder: m.date.selectYear,
				showSearchBox: !0,
				options: h,
				value: String(a.getFullYear()),
				onChange: (e) => {
					o(new Date(Number(e), a.getMonth(), 1));
				},
				fitContentWidth: !0
			})
		})]
	});
}
//#endregion
export { f as CalendarHeaderDropdowns, d as buildMonthOptions, u as buildYearOptions, l as getYearBounds };
