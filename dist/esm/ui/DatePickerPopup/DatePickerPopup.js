import e from "../../icons/app/ChevronLeft.js";
import { useI18n as t } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../components/F0Button/F0Button.js";
import { WeekStartDay as r } from "../../components/OneCalendar/types.js";
import { useL10n as i } from "../../lib/providers/l10n/l10n-provider.js";
import { Popover as a, PopoverContent as o, PopoverTrigger as s } from "../popover.js";
import { getGranularityDefinitions as c } from "../../components/OneCalendar/granularities/index.js";
import { F0DialogContext as l } from "../../patterns/F0Dialog/components/F0DialogProvider.js";
import { OneCalendar as ee } from "../../components/OneCalendar/OneCalendar.js";
import { F0Select as te } from "../../F0Select.js";
import { getCompareToValue as ne } from "./compareTo.js";
import { GranularitySelector as re } from "./components/GranularitySelector.js";
import { PresetList as u } from "./components/PresetList.js";
import { createCalendarDismissalHandlers as ie } from "./dismissal.js";
import { isSameDatePickerValue as d } from "./utils.js";
import { useContext as f, useEffect as p, useMemo as m, useRef as h, useState as g } from "react";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/ui/DatePickerPopup/DatePickerPopup.tsx
var y = "__custom__";
function b({ onSelect: b, defaultValue: x, presets: S = [], granularities: C = ["day"], children: w, compareTo: T, defaultCompareTo: E, onCompareToChange: D, hideCalendarInput: ae, value: O, asChild: k, weekStartsOn: A, selectOnCellOnly: j = !1, periods: M, ...N }) {
	let P = t(), F = i(), [I, L] = g(O || x), R = A ?? F.date?.weekStartsOn ?? r.Monday, z = f(l), B = z.portalContainer && (z.position === "center" || z.position === "fullscreen") ? z.portalContainer : void 0, V = h(null), H = m(() => ie(() => V.current), []);
	p(() => {
		d(O, I) || L(O || x);
	}, [O, x]);
	let U = m(() => I?.granularity ?? "day", [I?.granularity]), W = m(() => c({
		weekStartsOn: R,
		periods: M
	}), [R, M]), G = m(() => W[U], [W, U]), K = m(() => M && !C.includes("periods") ? [...C, "periods"] : C, [C, M]), q = m(() => G.calendarMode || "single", [G]), oe = (e) => {
		J({
			value: G.toRange(e ?? void 0),
			granularity: U
		});
	}, J = (e) => {
		d(e, I) || (L(e), b?.(e));
	}, se = (e) => {
		X(e === y);
		let t = e ? S[+e] : void 0;
		t && (J({
			value: W[t.granularity].toRange(typeof t.value == "function" ? t.value() : t.value),
			granularity: t.granularity
		}), e !== y && N.onOpenChange?.(!1));
	}, [Y, X] = g(!1), ce = (e) => {
		if (j) {
			L((t) => t ? {
				...t,
				granularity: e
			} : {
				value: void 0,
				granularity: e
			});
			return;
		}
		J({
			value: I?.value,
			granularity: e
		});
	}, le = m(() => S.length > 0 && !Y, [S, Y]), ue = () => {
		X(!1);
	}, de = m(() => G.calendarView || "day", [G]), [Z, Q] = g(E || void 0), $ = m(() => {
		let e = (T ?? {})[U] || [];
		if (!I?.value) return [];
		let t = I.value, n = e.map((e, n) => {
			let r = typeof e.value == "function" ? e.value(G.toRange(t)) : ne(G.toRange(t), e.value.delta, e.value.units), i = Array.isArray(r) ? r.map((e) => G.toString(e, P)).join(", ") : G.toString(r, P);
			return {
				label: e.label,
				value: (n + 1).toString(),
				description: i,
				dateValue: r
			};
		});
		return n.length === 0 ? [] : [{
			label: P.date.none,
			value: "0",
			description: "",
			dateValue: void 0
		}, ...n];
	}, [
		T,
		I,
		G,
		U
	]);
	p(() => {
		Q(E || "0");
	}, [U, E]);
	let fe = (e) => {
		Q(e);
	};
	return p(() => {
		D?.(Z ? $[+Z]?.dateValue : void 0);
	}, [
		Z,
		D,
		$
	]), /* @__PURE__ */ v(a, {
		open: N.open,
		onOpenChange: N.onOpenChange,
		children: [/* @__PURE__ */ _(s, {
			asChild: k,
			children: w
		}), /* @__PURE__ */ _(o, {
			ref: V,
			className: "w-full overflow-auto",
			align: "start",
			container: B,
			...H,
			children: le ? /* @__PURE__ */ _(u, {
				presets: S,
				date: I,
				onSelect: se
			}) : /* @__PURE__ */ v("div", {
				className: "flex gap-4",
				children: [(S.length > 0 || K.length > 1) && /* @__PURE__ */ v("div", { children: [S.length > 0 && /* @__PURE__ */ _(n, {
					icon: e,
					variant: "neutral",
					size: "sm",
					hideLabel: !0,
					label: "Back",
					onClick: ue
				}), K.length > 1 && /* @__PURE__ */ _(re, {
					granularities: K,
					value: U,
					onChange: ce,
					definitions: W
				})] }), /* @__PURE__ */ v("div", {
					className: "min-w-[300px] flex-1",
					children: [/* @__PURE__ */ _(ee, {
						showInput: !ae,
						mode: q,
						view: de,
						onSelect: oe,
						defaultSelected: I?.value,
						minDate: N.minDate,
						maxDate: N.maxDate,
						weekStartsOn: R,
						selectOnCellOnly: j,
						periods: M
					}), $.length > 0 && /* @__PURE__ */ v("div", {
						className: "mt-4 flex flex-col gap-2",
						children: [/* @__PURE__ */ _("div", {
							className: "text-gray-500 text-sm",
							children: P.date.compareTo
						}), /* @__PURE__ */ _(te, {
							label: P.date.compareTo,
							hideLabel: !0,
							placeholder: P.date.compareTo,
							options: $.map((e) => ({
								label: e.label,
								value: e.value,
								description: e.description ?? ""
							})),
							onChange: fe,
							value: Z
						})]
					})]
				})]
			})
		})]
	});
}
//#endregion
export { b as DatePickerPopup };
