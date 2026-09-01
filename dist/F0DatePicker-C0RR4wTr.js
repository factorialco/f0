import { d as e } from "./OneEllipsis-CJ3poPeP.js";
import { f as t } from "./variants-CSJ-yF0i.js";
import { C as n, Et as r, Fn as i, Ht as a, O as o, Ot as s, T as c, Tt as l, Ut as u, Wt as d, a as f, rt as p, t as m, w as h, wt as g } from "./OneCalendar-BxfqTY4J.js";
import { r as _ } from "./F0Button-DAqSZkXo.js";
import { D as v, O as y, k as b } from "./F0Checkbox-D80nhG7S.js";
import { i as x, n as S, r as C, t as w } from "./Link-CZ2DGAX8.js";
import { a as ee, i as T, t as te } from "./popover-D9s66rwb.js";
import { r as E, t as D } from "./input-D5uOmhhf.js";
import { forwardRef as O, useCallback as k, useContext as ne, useEffect as A, useMemo as j, useRef as M, useState as N } from "react";
import { Fragment as P, jsx as F, jsxs as I } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subMonths.mjs
function L(e, t) {
	return d(e, -t);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subYears.mjs
function R(e, t) {
	return u(e, -t);
}
//#endregion
//#region src/ui/DatePickerPopup/compareTo.ts
var re = (e, t, n) => {
	let r = l[n];
	return r ? r.add(e, t) : {
		from: /* @__PURE__ */ new Date(),
		to: /* @__PURE__ */ new Date()
	};
}, z = (e, t) => {
	if (!(e instanceof Element) || !t) return !1;
	let n = e.closest("[role=\"listbox\"]");
	return n?.id ? Array.from(t.querySelectorAll("[aria-controls]")).some((e) => e.getAttribute("aria-controls") === n.id) : !1;
}, B = (e, t) => e instanceof Element && t !== null && e.contains(t), ie = (e) => ({
	onPointerDownOutside: (t) => {
		z(t.target, e()) && t.preventDefault();
	},
	onFocusOutside: (t) => {
		let n = e();
		(z(t.target, n) || B(t.target, n)) && t.preventDefault();
	}
});
//#endregion
//#region src/ui/DatePickerPopup/components/GranularitySelector.tsx
function ae({ granularities: e, value: n, onChange: r, definitions: i }) {
	let a = t(), s = (e) => {
		r(e);
	}, l = (e) => i?.[e]?.selectorLabel || a.date.granularities[e]?.label || e;
	return /* @__PURE__ */ I("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ F("h6", {
			className: "text-sm font-medium",
			children: a.date.selectedBy
		}), /* @__PURE__ */ F(o, {
			value: n,
			onValueChange: s,
			as: "list",
			children: /* @__PURE__ */ F(c, { children: e.map((e) => /* @__PURE__ */ F(h, {
				value: e,
				children: l(e)
			}, e)) })
		})]
	});
}
//#endregion
//#region src/ui/DatePickerPopup/components/PresetList.tsx
var V = "__custom__", H = (e, t) => {
	if (!e?.value) return !1;
	let n = typeof t.value == "function" ? t.value() : t.value;
	return e.granularity === t.granularity && a(e.value.from, n.from) && (!e.value.to || !n.to || a(e.value.to, n.to));
}, oe = ({ presets: e, ...t }) => {
	let [r, i] = N();
	return A(() => {
		if (t.date) {
			let n = Object.entries(e).find(([e, n]) => H(t.date, n));
			i(n ? n[0] : void 0);
		}
	}, [t.date, e]), /* @__PURE__ */ F(o, {
		as: "list",
		value: r,
		onValueChange: (e) => {
			i(e), t.onSelect?.(e);
		},
		children: /* @__PURE__ */ I(c, { children: [
			Object.entries(e).map(([e, t]) => /* @__PURE__ */ F(h, {
				value: e,
				children: t?.label || e
			}, e)),
			/* @__PURE__ */ F(n, {}),
			/* @__PURE__ */ F(h, {
				value: V,
				children: "Custom"
			}, V)
		] })
	});
}, U = (e) => e instanceof Date ? e : new Date(e), se = (e) => {
	if (!e?.value) return e;
	let { from: t, to: n } = e.value;
	return t instanceof Date && n instanceof Date ? e : {
		...e,
		value: {
			from: U(t),
			to: U(n)
		}
	};
}, W = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, G = "__custom__";
function K({ onSelect: e, defaultValue: n, presets: r = [], granularities: a = ["day"], children: o, compareTo: s, defaultCompareTo: c, onCompareToChange: l, hideCalendarInput: u, value: d, asChild: h, weekStartsOn: b, selectOnCellOnly: x = !1, periods: S, ...C }) {
	let w = t(), E = v(), [D, O] = N(d || n), k = b ?? E.date?.weekStartsOn ?? y.Monday, P = ne(p), L = P.portalContainer && (P.position === "center" || P.position === "fullscreen") ? P.portalContainer : void 0, R = M(null), z = j(() => ie(() => R.current), []);
	A(() => {
		W(d, D) || O(d || n);
	}, [d, n]);
	let B = j(() => D?.granularity ?? "day", [D?.granularity]), V = j(() => g({
		weekStartsOn: k,
		periods: S
	}), [k, S]), H = j(() => V[B], [V, B]), U = j(() => S && !a.includes("periods") ? [...a, "periods"] : a, [a, S]), se = j(() => H.calendarMode || "single", [H]), K = (e) => {
		q({
			value: H.toRange(e ?? void 0),
			granularity: B
		});
	}, q = (t) => {
		W(t, D) || (O(t), e?.(t));
	}, J = (e) => {
		X(e === G);
		let t = e ? r[+e] : void 0;
		t && (q({
			value: V[t.granularity].toRange(typeof t.value == "function" ? t.value() : t.value),
			granularity: t.granularity
		}), e !== G && C.onOpenChange?.(!1));
	}, [Y, X] = N(!1), Z = (e) => {
		if (x) {
			O((t) => t ? {
				...t,
				granularity: e
			} : {
				value: void 0,
				granularity: e
			});
			return;
		}
		q({
			value: D?.value,
			granularity: e
		});
	}, ce = j(() => r.length > 0 && !Y, [r, Y]), le = () => {
		X(!1);
	}, ue = j(() => H.calendarView || "day", [H]), [Q, de] = N(c || void 0), $ = j(() => {
		let e = (s ?? {})[B] || [];
		if (!D?.value) return [];
		let t = D.value, n = e.map((e, n) => {
			let r = typeof e.value == "function" ? e.value(H.toRange(t)) : re(H.toRange(t), e.value.delta, e.value.units), i = Array.isArray(r) ? r.map((e) => H.toString(e, w)).join(", ") : H.toString(r, w);
			return {
				label: e.label,
				value: (n + 1).toString(),
				description: i,
				dateValue: r
			};
		});
		return n.length === 0 ? [] : [{
			label: w.date.none,
			value: "0",
			description: "",
			dateValue: void 0
		}, ...n];
	}, [
		s,
		D,
		H,
		B
	]);
	A(() => {
		de(c || "0");
	}, [B, c]);
	let fe = (e) => {
		de(e);
	};
	return A(() => {
		l?.(Q ? $[+Q]?.dateValue : void 0);
	}, [
		Q,
		l,
		$
	]), /* @__PURE__ */ I(te, {
		open: C.open,
		onOpenChange: C.onOpenChange,
		children: [/* @__PURE__ */ F(ee, {
			asChild: h,
			children: o
		}), /* @__PURE__ */ F(T, {
			ref: R,
			className: "w-full overflow-auto",
			align: "start",
			container: L,
			...z,
			children: ce ? /* @__PURE__ */ F(oe, {
				presets: r,
				date: D,
				onSelect: J
			}) : /* @__PURE__ */ I("div", {
				className: "flex gap-4",
				children: [(r.length > 0 || U.length > 1) && /* @__PURE__ */ I("div", { children: [r.length > 0 && /* @__PURE__ */ F(_, {
					icon: i,
					variant: "neutral",
					size: "sm",
					hideLabel: !0,
					label: "Back",
					onClick: le
				}), U.length > 1 && /* @__PURE__ */ F(ae, {
					granularities: U,
					value: B,
					onChange: Z,
					definitions: V
				})] }), /* @__PURE__ */ I("div", {
					className: "min-w-[300px] flex-1",
					children: [/* @__PURE__ */ F(m, {
						showInput: !u,
						mode: se,
						view: ue,
						onSelect: K,
						defaultSelected: D?.value,
						minDate: C.minDate,
						maxDate: C.maxDate,
						weekStartsOn: k,
						selectOnCellOnly: x,
						periods: S
					}), $.length > 0 && /* @__PURE__ */ I("div", {
						className: "mt-4 flex flex-col gap-2",
						children: [/* @__PURE__ */ F("div", {
							className: "text-gray-500 text-sm",
							children: w.date.compareTo
						}), /* @__PURE__ */ F(f, {
							label: w.date.compareTo,
							hideLabel: !0,
							placeholder: w.date.compareTo,
							options: $.map((e) => ({
								label: e.label,
								value: e.value,
								description: e.description ?? ""
							})),
							onChange: fe,
							value: Q
						})]
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/lib/field-input-icons.ts
var q = {
	url: w,
	email: S,
	time: C,
	date: x,
	datetime: x
};
function J(e) {
	if (e) return q[e];
}
//#endregion
//#region src/components/F0DatePicker/components/DateInput.tsx
var Y = O(({ value: e, onDateChange: n, granularity: r, onOpenChange: i, minDate: a, maxDate: o, onClear: c, showIcon: l = !0, displayFormat: u, ...d }, f) => {
	let [p, m] = N(""), [h, g] = N(!1), _ = t();
	A(() => {
		m(r.toString(e?.value, _, u ?? "long"));
	}, [
		e,
		r,
		_,
		u
	]);
	let v = (e) => s(e, r, {
		minDate: a,
		maxDate: o
	}), y = (e, t) => {
		if (e === "") {
			n?.({
				value: void 0,
				granularity: t.key
			}), g(d.required ?? !1);
			return;
		}
		let r = t.toRange(t.fromString(e, _));
		r && (v(r?.from) && v(r?.to) ? (n?.({
			value: r,
			granularity: t.key
		}), g(!1)) : g(!0));
	}, b = () => {
		y(p, r);
	}, x = (e) => {
		m(e);
	}, S = d.placeholder ?? r.placeholder();
	return /* @__PURE__ */ F(P, { children: /* @__PURE__ */ F(D, {
		...d,
		placeholder: S,
		icon: l ? J("date") : void 0,
		ref: f,
		onFocus: () => i?.(!0),
		onClear: () => {
			c?.(), m(""), y("", r);
		},
		onKeyDown: (e) => {
			e.key === "Enter" && b();
		},
		type: "text",
		onChange: x,
		error: h || d.error,
		onBlur: b,
		value: p,
		onClickContent: () => i?.(!0)
	}) });
});
Y.displayName = "DateInput";
//#endregion
//#region src/components/F0DatePicker/F0DatePicker.tsx
function X({ onChange: e, value: n, presets: i = [], granularities: a = ["day"], minDate: o, maxDate: s, open: c = !1, showIcon: l = !0, displayFormat: u, selectOnCellOnly: d, ...f }) {
	let [p, m] = N(), [h, g] = N(c);
	A(() => {
		g(c);
	}, [c]);
	let _ = t(), v = j(() => a[0] ?? "day", [a]), y = k((e) => {
		let t = e || v;
		return {
			...r(t),
			key: t
		};
	}, [v]), b = k((e) => {
		if (!e) return;
		let t = y(e.granularity), n = t.toRange(t.calendarMode === "range" ? e.value : e.value?.from ?? void 0);
		if (n) return {
			value: n,
			granularity: e.granularity
		};
	}, [y]), x = j(() => y(p?.granularity), [p?.granularity, y]);
	A(() => {
		let e = b(n);
		W(p, e) || m(e);
	}, [n]);
	let S = (e) => {
		let t = b(e), n = y(t?.granularity).calendarMode !== "range" && !W(t, p);
		C(t), n && g(!1);
	}, C = (t) => {
		let n = b(t);
		if (m(n), !W(n, p)) {
			let t = y(n?.granularity);
			e?.(n, t.toString(n?.value, _));
		}
	}, w = (e) => {
		g(e), f.onOpenChange?.(e);
	}, ee = j(() => i.filter((e) => a.includes(e.granularity)), [i, a]), T = M(null);
	return A(() => {
		h && T.current && requestAnimationFrame(() => {
			T.current?.focus();
		});
	}, [h]), /* @__PURE__ */ F(K, {
		hideCalendarInput: !0,
		onSelect: S,
		value: p,
		presets: ee,
		granularities: a,
		minDate: o,
		maxDate: s,
		open: h,
		onOpenChange: w,
		selectOnCellOnly: d,
		asChild: !0,
		children: /* @__PURE__ */ F(Y, {
			ref: T,
			...f,
			value: p,
			granularity: x,
			onDateChange: C,
			showIcon: l,
			displayFormat: u
		})
	});
}
//#endregion
//#region src/ui/DatePickerPopup/presets.ts
var Z = {
	today: {
		label: "Today",
		granularity: "day",
		value: () => l.day.toRange(/* @__PURE__ */ new Date())
	},
	yesterday: {
		label: "Yesterday",
		granularity: "day",
		value: () => l.day.toRange(b(/* @__PURE__ */ new Date(), 1))
	},
	last7Days: {
		label: "Last 7 days",
		granularity: "day",
		value: () => l.day.toRange({
			from: b(/* @__PURE__ */ new Date(), 7),
			to: /* @__PURE__ */ new Date()
		})
	},
	thisWeek: {
		label: "This week",
		granularity: "week",
		value: () => l.week.toRange(/* @__PURE__ */ new Date())
	},
	lastWeek: {
		label: "Last week",
		granularity: "week",
		value: () => l.week.toRange(b(/* @__PURE__ */ new Date(), 7))
	},
	thisMonth: {
		label: "This month",
		granularity: "month",
		value: () => l.month.toRange(/* @__PURE__ */ new Date())
	},
	lastMonth: {
		label: "Last month",
		granularity: "month",
		value: () => l.month.toRange(L(/* @__PURE__ */ new Date(), 1))
	},
	last3Months: {
		label: "Last 3 months",
		granularity: "month",
		value: () => l.month.toRange(L(/* @__PURE__ */ new Date(), 3))
	},
	last6Months: {
		label: "Last 6 months",
		granularity: "month",
		value: () => l.month.toRange(L(/* @__PURE__ */ new Date(), 6))
	},
	thisQuarter: {
		label: "This quarter",
		granularity: "quarter",
		value: () => l.quarter.toRange(/* @__PURE__ */ new Date())
	},
	lastQuarter: {
		label: "Last quarter",
		granularity: "quarter",
		value: () => l.quarter.toRange(L(/* @__PURE__ */ new Date(), 3))
	},
	thisHalfYear: {
		label: "This half year",
		granularity: "halfyear",
		value: () => l.halfyear.toRange(/* @__PURE__ */ new Date())
	},
	lastHalfYear: {
		label: "Last half year",
		granularity: "halfyear",
		value: () => l.halfyear.toRange(L(/* @__PURE__ */ new Date(), 6))
	},
	lastYear: {
		label: "Last year",
		granularity: "year",
		value: () => l.year.toRange(R(/* @__PURE__ */ new Date(), 1))
	},
	last3Years: {
		label: "Last 3 years",
		granularity: "year",
		value: () => l.year.toRange(R(/* @__PURE__ */ new Date(), 3))
	}
}, ce = E, le = e(X);
//#endregion
export { K as a, J as i, ce as n, W as o, Z as r, se as s, le as t };
