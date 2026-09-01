import { d as e } from "./OneEllipsis-DuhKMtYp.js";
import { f as t } from "./variants-D_OHTcOj.js";
import { r as n } from "./F0Button-B67qxFBP.js";
import { $ as r, D as i, E as a, O as o, P as s, Q as c, Z as l, g as u, ht as d, j as f, mt as p, nn as m, pt as h, t as g, tt as _ } from "./F0Select-DpDIhw2A.js";
import { C as v, T as y, w as b } from "./F0Checkbox-BcR7Q7zJ.js";
import { i as x, n as S, r as C, t as w } from "./Link-CZ2DGAX8.js";
import { a as T, i as E, t as ee } from "./popover-By8ytmVb.js";
import { r as te, t as D } from "./input-CAEigqto.js";
import { forwardRef as O, useCallback as k, useContext as ne, useEffect as A, useMemo as j, useRef as M, useState as N } from "react";
import { Fragment as P, jsx as F, jsxs as I } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subMonths.mjs
function L(e, t) {
	return d(e, -t);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subYears.mjs
function R(e, t) {
	return p(e, -t);
}
//#endregion
//#region src/ui/DatePickerPopup/compareTo.ts
var re = (e, t, n) => {
	let r = c[n];
	return r ? r.add(e, t) : {
		from: /* @__PURE__ */ new Date(),
		to: /* @__PURE__ */ new Date()
	};
};
//#endregion
//#region src/ui/DatePickerPopup/components/GranularitySelector.tsx
function ie({ granularities: e, value: n, onChange: r, definitions: a }) {
	let s = t(), c = (e) => {
		r(e);
	}, l = (e) => a?.[e]?.selectorLabel || s.date.granularities[e]?.label || e;
	return /* @__PURE__ */ I("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ F("h6", {
			className: "text-sm font-medium",
			children: s.date.selectedBy
		}), /* @__PURE__ */ F(f, {
			value: n,
			onValueChange: c,
			as: "list",
			children: /* @__PURE__ */ F(o, { children: e.map((e) => /* @__PURE__ */ F(i, {
				value: e,
				children: l(e)
			}, e)) })
		})]
	});
}
//#endregion
//#region src/ui/DatePickerPopup/components/PresetList.tsx
var z = "__custom__", B = (e, t) => {
	if (!e?.value) return !1;
	let n = typeof t.value == "function" ? t.value() : t.value;
	return e.granularity === t.granularity && h(e.value.from, n.from) && (!e.value.to || !n.to || h(e.value.to, n.to));
}, ae = ({ presets: e, ...t }) => {
	let [n, r] = N();
	return A(() => {
		if (t.date) {
			let n = Object.entries(e).find(([e, n]) => B(t.date, n));
			r(n ? n[0] : void 0);
		}
	}, [t.date, e]), /* @__PURE__ */ F(f, {
		as: "list",
		value: n,
		onValueChange: (e) => {
			r(e), t.onSelect?.(e);
		},
		children: /* @__PURE__ */ I(o, { children: [
			Object.entries(e).map(([e, t]) => /* @__PURE__ */ F(i, {
				value: e,
				children: t?.label || e
			}, e)),
			/* @__PURE__ */ F(a, {}),
			/* @__PURE__ */ F(i, {
				value: z,
				children: "Custom"
			}, z)
		] })
	});
}, V = (e, t) => {
	if (!(e instanceof Element) || !t) return !1;
	let n = e.closest("[role=\"listbox\"]");
	return n?.id ? Array.from(t.querySelectorAll("[aria-controls]")).some((e) => e.getAttribute("aria-controls") === n.id) : !1;
}, H = (e, t) => e instanceof Element && t !== null && e.contains(t), oe = (e) => ({
	onPointerDownOutside: (t) => {
		V(t.target, e()) && t.preventDefault();
	},
	onFocusOutside: (t) => {
		let n = e();
		(V(t.target, n) || H(t.target, n)) && t.preventDefault();
	}
}), U = (e) => e instanceof Date ? e : new Date(e), W = (e) => {
	if (!e?.value) return e;
	let { from: t, to: n } = e.value;
	return t instanceof Date && n instanceof Date ? e : {
		...e,
		value: {
			from: U(t),
			to: U(n)
		}
	};
}, G = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, K = "__custom__";
function q({ onSelect: e, defaultValue: r, presets: i = [], granularities: a = ["day"], children: o, compareTo: c, defaultCompareTo: d, onCompareToChange: f, hideCalendarInput: p, value: h, asChild: _, weekStartsOn: y, selectOnCellOnly: x = !1, periods: S, ...C }) {
	let w = t(), te = v(), [D, O] = N(h || r), k = y ?? te.date?.weekStartsOn ?? b.Monday, P = ne(s), L = P.portalContainer && (P.position === "center" || P.position === "fullscreen") ? P.portalContainer : void 0, R = M(null), z = j(() => oe(() => R.current), []);
	A(() => {
		G(h, D) || O(h || r);
	}, [h, r]);
	let B = j(() => D?.granularity ?? "day", [D?.granularity]), V = j(() => l({
		weekStartsOn: k,
		periods: S
	}), [k, S]), H = j(() => V[B], [V, B]), U = j(() => S && !a.includes("periods") ? [...a, "periods"] : a, [a, S]), W = j(() => H.calendarMode || "single", [H]), q = (e) => {
		J({
			value: H.toRange(e ?? void 0),
			granularity: B
		});
	}, J = (t) => {
		G(t, D) || (O(t), e?.(t));
	}, Y = (e) => {
		Z(e === K);
		let t = e ? i[+e] : void 0;
		t && (J({
			value: V[t.granularity].toRange(typeof t.value == "function" ? t.value() : t.value),
			granularity: t.granularity
		}), e !== K && C.onOpenChange?.(!1));
	}, [X, Z] = N(!1), se = (e) => {
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
		J({
			value: D?.value,
			granularity: e
		});
	}, ce = j(() => i.length > 0 && !X, [i, X]), le = () => {
		Z(!1);
	}, ue = j(() => H.calendarView || "day", [H]), [Q, de] = N(d || void 0), $ = j(() => {
		let e = (c ?? {})[B] || [];
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
		c,
		D,
		H,
		B
	]);
	A(() => {
		de(d || "0");
	}, [B, d]);
	let fe = (e) => {
		de(e);
	};
	return A(() => {
		f?.(Q ? $[+Q]?.dateValue : void 0);
	}, [
		Q,
		f,
		$
	]), /* @__PURE__ */ I(ee, {
		open: C.open,
		onOpenChange: C.onOpenChange,
		children: [/* @__PURE__ */ F(T, {
			asChild: _,
			children: o
		}), /* @__PURE__ */ F(E, {
			ref: R,
			className: "w-full overflow-auto",
			align: "start",
			container: L,
			...z,
			children: ce ? /* @__PURE__ */ F(ae, {
				presets: i,
				date: D,
				onSelect: Y
			}) : /* @__PURE__ */ I("div", {
				className: "flex gap-4",
				children: [(i.length > 0 || U.length > 1) && /* @__PURE__ */ I("div", { children: [i.length > 0 && /* @__PURE__ */ F(n, {
					icon: m,
					variant: "neutral",
					size: "sm",
					hideLabel: !0,
					label: "Back",
					onClick: le
				}), U.length > 1 && /* @__PURE__ */ F(ie, {
					granularities: U,
					value: B,
					onChange: se,
					definitions: V
				})] }), /* @__PURE__ */ I("div", {
					className: "min-w-[300px] flex-1",
					children: [/* @__PURE__ */ F(u, {
						showInput: !p,
						mode: W,
						view: ue,
						onSelect: q,
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
						}), /* @__PURE__ */ F(g, {
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
var J = {
	url: w,
	email: S,
	time: C,
	date: x,
	datetime: x
};
function Y(e) {
	if (e) return J[e];
}
//#endregion
//#region src/components/F0DatePicker/components/DateInput.tsx
var X = O(({ value: e, onDateChange: n, granularity: r, onOpenChange: i, minDate: a, maxDate: o, onClear: s, showIcon: c = !0, displayFormat: l, ...u }, d) => {
	let [f, p] = N(""), [m, h] = N(!1), g = t();
	A(() => {
		p(r.toString(e?.value, g, l ?? "long"));
	}, [
		e,
		r,
		g,
		l
	]);
	let v = (e) => _(e, r, {
		minDate: a,
		maxDate: o
	}), y = (e, t) => {
		if (e === "") {
			n?.({
				value: void 0,
				granularity: t.key
			}), h(u.required ?? !1);
			return;
		}
		let r = t.toRange(t.fromString(e, g));
		r && (v(r?.from) && v(r?.to) ? (n?.({
			value: r,
			granularity: t.key
		}), h(!1)) : h(!0));
	}, b = () => {
		y(f, r);
	}, x = (e) => {
		p(e);
	}, S = u.placeholder ?? r.placeholder();
	return /* @__PURE__ */ F(P, { children: /* @__PURE__ */ F(D, {
		...u,
		placeholder: S,
		icon: c ? Y("date") : void 0,
		ref: d,
		onFocus: () => i?.(!0),
		onClear: () => {
			s?.(), p(""), y("", r);
		},
		onKeyDown: (e) => {
			e.key === "Enter" && b();
		},
		type: "text",
		onChange: x,
		error: m || u.error,
		onBlur: b,
		value: f,
		onClickContent: () => i?.(!0)
	}) });
});
X.displayName = "DateInput";
//#endregion
//#region src/components/F0DatePicker/F0DatePicker.tsx
function Z({ onChange: e, value: n, presets: i = [], granularities: a = ["day"], minDate: o, maxDate: s, open: c = !1, showIcon: l = !0, displayFormat: u, selectOnCellOnly: d, ...f }) {
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
		G(p, e) || m(e);
	}, [n]);
	let S = (e) => {
		let t = b(e), n = y(t?.granularity).calendarMode !== "range" && !G(t, p);
		C(t), n && g(!1);
	}, C = (t) => {
		let n = b(t);
		if (m(n), !G(n, p)) {
			let t = y(n?.granularity);
			e?.(n, t.toString(n?.value, _));
		}
	}, w = (e) => {
		g(e), f.onOpenChange?.(e);
	}, T = j(() => i.filter((e) => a.includes(e.granularity)), [i, a]), E = M(null);
	return A(() => {
		h && E.current && requestAnimationFrame(() => {
			E.current?.focus();
		});
	}, [h]), /* @__PURE__ */ F(q, {
		hideCalendarInput: !0,
		onSelect: S,
		value: p,
		presets: T,
		granularities: a,
		minDate: o,
		maxDate: s,
		open: h,
		onOpenChange: w,
		selectOnCellOnly: d,
		asChild: !0,
		children: /* @__PURE__ */ F(X, {
			ref: E,
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
var se = {
	today: {
		label: "Today",
		granularity: "day",
		value: () => c.day.toRange(/* @__PURE__ */ new Date())
	},
	yesterday: {
		label: "Yesterday",
		granularity: "day",
		value: () => c.day.toRange(y(/* @__PURE__ */ new Date(), 1))
	},
	last7Days: {
		label: "Last 7 days",
		granularity: "day",
		value: () => c.day.toRange({
			from: y(/* @__PURE__ */ new Date(), 7),
			to: /* @__PURE__ */ new Date()
		})
	},
	thisWeek: {
		label: "This week",
		granularity: "week",
		value: () => c.week.toRange(/* @__PURE__ */ new Date())
	},
	lastWeek: {
		label: "Last week",
		granularity: "week",
		value: () => c.week.toRange(y(/* @__PURE__ */ new Date(), 7))
	},
	thisMonth: {
		label: "This month",
		granularity: "month",
		value: () => c.month.toRange(/* @__PURE__ */ new Date())
	},
	lastMonth: {
		label: "Last month",
		granularity: "month",
		value: () => c.month.toRange(L(/* @__PURE__ */ new Date(), 1))
	},
	last3Months: {
		label: "Last 3 months",
		granularity: "month",
		value: () => c.month.toRange(L(/* @__PURE__ */ new Date(), 3))
	},
	last6Months: {
		label: "Last 6 months",
		granularity: "month",
		value: () => c.month.toRange(L(/* @__PURE__ */ new Date(), 6))
	},
	thisQuarter: {
		label: "This quarter",
		granularity: "quarter",
		value: () => c.quarter.toRange(/* @__PURE__ */ new Date())
	},
	lastQuarter: {
		label: "Last quarter",
		granularity: "quarter",
		value: () => c.quarter.toRange(L(/* @__PURE__ */ new Date(), 3))
	},
	thisHalfYear: {
		label: "This half year",
		granularity: "halfyear",
		value: () => c.halfyear.toRange(/* @__PURE__ */ new Date())
	},
	lastHalfYear: {
		label: "Last half year",
		granularity: "halfyear",
		value: () => c.halfyear.toRange(L(/* @__PURE__ */ new Date(), 6))
	},
	lastYear: {
		label: "Last year",
		granularity: "year",
		value: () => c.year.toRange(R(/* @__PURE__ */ new Date(), 1))
	},
	last3Years: {
		label: "Last 3 years",
		granularity: "year",
		value: () => c.year.toRange(R(/* @__PURE__ */ new Date(), 3))
	}
}, ce = te, le = e(Z);
//#endregion
export { q as a, Y as i, ce as n, G as o, se as r, W as s, le as t };
