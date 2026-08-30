import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import n from "../../icons/app/ChevronLeft.js";
import r from "../../icons/app/ChevronRight.js";
import { useI18n as ee } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as i } from "../F0Button/F0Button.js";
import { WeekStartDay as te } from "./types.js";
import { useL10n as ne } from "../../lib/providers/l10n/l10n-provider.js";
import { earliestDate as re, isActiveDate as ie, latestDate as ae, toDateRange as a } from "./utils.js";
import { getGranularityDefinitions as o, resolveGranularityDefinition as s } from "./granularities/index.js";
import { Input as c } from "../../ui/input.js";
import { CalendarHeaderDropdowns as l, getYearBounds as u } from "./components/CalendarHeaderDropdowns.js";
import { useCallback as d, useEffect as f, useMemo as p, useState as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/OneCalendar/OneCalendar.tsx
var _ = ["compact"], v = (e) => {
	let t = s(e);
	return {
		toRangeString: t.toRangeString,
		toString: t.toString
	};
}, y = (e) => s(e), b = ({ mode: e = "single", view: s = "month", onSelect: _, defaultMonth: v, defaultSelected: y = null, showNavigation: b = !0, showInput: x = !1, minDate: S, maxDate: C, compact: w = !1, weekStartsOn: T, selectOnCellOnly: oe = !1, periods: E }) => {
	let D = ee(), O = ne(), k = T ?? O.date?.weekStartsOn ?? te.Monday, A = p(() => {
		if (v) return v;
		let e = /* @__PURE__ */ new Date();
		return S && e < S ? S : C && e > C ? C : e;
	}, [
		v,
		S,
		C
	]), [j, M] = m(A), [N, P] = m(y), [F, I] = m(1), L = p(() => o({
		weekStartsOn: k,
		periods: E
	})[s], [
		s,
		k,
		E
	]), R = d((e) => {
		P(e), J(L.toRangeString(e, D));
		let t = L.getViewDateFromDate(e instanceof Date ? e : e?.from || e?.to || A);
		t !== L.getViewDateFromDate(j) && M(t);
	}, [L, A]);
	f(() => {
		R(y);
	}, [y]);
	let se = () => L.label(j, D, O.locale), z = L.calendarView === "day" || L.calendarView === "week" ? "month-year" : L.calendarView === "month" || L.calendarView === "periods" ? "year" : null, B = L.getViewDateBounds?.(), V = ae(S, B?.min), H = re(C, B?.max), U = z ? u((/* @__PURE__ */ new Date()).getFullYear(), V, H, j.getFullYear()) : null, W = (e) => {
		if (!U) return !0;
		let t = L.navigateUIView(j, e).getFullYear();
		return t >= U.fromYear && t <= U.toYear;
	}, G = (e) => {
		if (!W(e)) return;
		let t = L.navigateUIView(j, e);
		I(e), M(t);
	}, ce = (e) => {
		I(e.getTime() >= j.getTime() ? 1 : -1), M(e);
	}, K = (e) => {
		e && (e = L.toRange(e), R(e), _?.(e));
	}, [q, J] = m({
		from: "",
		to: ""
	}), [Y, le] = m({
		from: !1,
		to: !1
	}), X = (e) => {
		Q(e, q);
	}, Z = d((e) => e ? ie(e, L, {
		minDate: S,
		maxDate: C
	}) : !1, [
		L,
		S,
		C
	]), Q = (e, t) => {
		let n = L.fromString(t, D), r = !Z(n?.[e]);
		le((t) => ({
			...t,
			[e]: r
		})), r || K(n);
	};
	f(() => {
		let t = a(N);
		if (!t) return;
		let n = e === "range" ? L.toRange(t) : L.toRange(t.from);
		oe ? R(n) : K(n);
	}, [L]), f(() => {
		let e = a(N), { from: t, to: n } = L.toRangeString(e || {
			from: /* @__PURE__ */ new Date(),
			to: void 0
		}, D);
		J({
			from: t || "",
			to: n || ""
		});
	}, [L, N]);
	let $ = (e, t) => {
		let n = q[e] ? L.fromString(q[e], D) : void 0, r = n ? L.navigate(n.from, t) : void 0;
		if (Z(r)) {
			let t = {
				...q,
				[e]: L.toRangeString(r, D).from
			};
			Q(e, t), J(t);
		}
	};
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col",
		children: [
			x && !L.hideDateInput && /* @__PURE__ */ g("div", {
				className: "mb-2 flex gap-2",
				children: [/* @__PURE__ */ h(c, {
					label: D.date.from,
					hideLabel: !0,
					error: !!Y.from,
					value: q.from,
					placeholder: e === "range" ? D.date.from : D.date.date,
					onBlur: () => X("from"),
					onKeyDown: (e) => {
						e.key === "Enter" && X("from"), (e.key === "ArrowUp" || e.key === "ArrowDown") && (e.preventDefault(), $("from", e.key === "ArrowDown" ? -1 : 1));
					},
					onChange: (e) => J({
						...q,
						from: e
					})
				}), e === "range" && /* @__PURE__ */ h(c, {
					label: D.date.to,
					hideLabel: !0,
					error: !!Y.to,
					value: q.to,
					placeholder: D.date.to,
					onBlur: () => X("to"),
					onKeyDown: (e) => {
						e.key === "Enter" && X("to"), (e.key === "ArrowUp" || e.key === "ArrowDown") && (e.preventDefault(), $("to", e.key === "ArrowDown" ? -1 : 1));
					},
					onChange: (e) => J({
						...q,
						to: e
					})
				})]
			}),
			b && /* @__PURE__ */ g("div", {
				className: t("flex items-center justify-between", w ? "mx-2 pb-2" : "pb-3"),
				children: [z ? /* @__PURE__ */ h(l, {
					viewDate: j,
					onViewDateChange: ce,
					showMonth: z === "month-year",
					locale: O.locale,
					minDate: V,
					maxDate: H,
					compact: w
				}) : /* @__PURE__ */ h("div", {
					className: t("font-medium text-f1-foreground", w ? "text-md" : "text-lg"),
					children: se()
				}), /* @__PURE__ */ g("div", {
					className: t("flex items-center", w ? "gap-1" : "gap-2"),
					children: [/* @__PURE__ */ h(i, {
						onClick: () => G(-1),
						variant: "outline",
						label: D.navigation.previous,
						hideLabel: !0,
						icon: n,
						size: "sm",
						disabled: !W(-1)
					}), /* @__PURE__ */ h(i, {
						onClick: () => G(1),
						variant: "outline",
						label: D.navigation.next,
						hideLabel: !0,
						icon: r,
						size: "sm",
						disabled: !W(1)
					})]
				})]
			}),
			/* @__PURE__ */ h("div", {
				className: "relative",
				children: L.render({
					mode: e,
					selected: N,
					onSelect: K,
					month: j,
					onMonthChange: M,
					motionDirection: F,
					setViewDate: M,
					viewDate: j,
					minDate: S,
					maxDate: C,
					compact: w,
					weekStartsOn: k
				})
			})
		]
	});
}, x = (e) => {
	let t = _.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ h(b, { ...t });
};
x.displayName = "OneCalendar";
var S = e(x);
//#endregion
export { S as OneCalendar, b as OneCalendarInternal, y as getGranularityDefinition, v as getGranularitySimpleDefinition };
