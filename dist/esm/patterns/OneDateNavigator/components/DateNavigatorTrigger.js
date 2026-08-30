import { cn as e, focusRing as t } from "../../../lib/utils.js";
import n from "../../../icons/app/ChevronLeft.js";
import r from "../../../icons/app/ChevronRight.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as a } from "../../../components/F0Button/internal.js";
import { F0Button as o } from "../../../components/F0Button/F0Button.js";
import { useL10n as s } from "../../../lib/providers/l10n/l10n-provider.js";
import { isAfterOrEqual as c, isBeforeOrEqual as l } from "../../../components/OneCalendar/utils.js";
import { resolveGranularityDefinition as u } from "../../../components/OneCalendar/granularities/index.js";
import { forwardRef as d, useEffect as f, useMemo as p, useState as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/patterns/OneDateNavigator/components/DateNavigatorTrigger.tsx
var _ = d(({ value: d, compareToValue: _, onDateChange: v, disabled: y, error: b, className: x, highlighted: S, onClick: C, navigation: w, granularity: T, hideGoToCurrent: E, ...D }, O) => {
	let k = i(), A = s(), j = p(() => {
		if (!d || !d.value) return [k.date.selectDate];
		let e = T || u(d.granularity);
		return [d.value, Array.isArray(_) ? _[0] : _].filter((e) => e !== void 0).sort((e, t) => e?.from.getTime() - t?.from.getTime()).map((t) => e.toString(t, k, "long", A.locale));
	}, [
		d,
		k,
		_,
		T,
		A.locale
	]), M = p(() => Object.values(j).join(" ⸱ "), [j]), N = (e) => {
		e && v?.(e);
	}, P = p(() => {
		if (D.minDate) return T?.toRange(D.minDate)?.from;
	}, [D.minDate, T]), F = p(() => {
		if (D.maxDate) return T?.toRange(D.maxDate)?.to;
	}, [D.maxDate, T]), [I, L] = m(null);
	f(() => {
		L(T?.toRange(/* @__PURE__ */ new Date()) ?? null);
		let e = () => {
			let e = T?.toRange(/* @__PURE__ */ new Date()) ?? null;
			e && c(e.from, P) && l(e.to || e.from, F) ? L(e) : L(null);
		}, t = setInterval(() => {
			e();
		}, 6e4);
		return e(), () => clearInterval(t);
	}, [
		T,
		P,
		F
	]);
	let R = d?.value ? T?.getPrevNext(d?.value, {
		min: P,
		max: F
	}) : void 0;
	return /* @__PURE__ */ g("div", {
		ref: O,
		className: e("inline-flex cursor-auto appearance-none gap-1 rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover", "[%>*] py-1", t("focus:ring-f1-border-hover"), y && "cursor-not-allowed bg-f1-background-secondary opacity-50", b && "ring-f1-border-critical-bold", x),
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ g("div", {
			className: e("flex flex-1 gap-1", w ? "justify-between" : "justify-center"),
			children: [
				w && /* @__PURE__ */ h(o, {
					size: "sm",
					variant: "ghost",
					icon: n,
					label: "Previous",
					hideLabel: !0,
					disabled: !R?.prev,
					onClick: () => N(R?.prev ?? !1)
				}),
				/* @__PURE__ */ h(a, {
					fontSize: "md",
					size: "sm",
					variant: "ghost",
					label: M,
					onClick: C,
					disabled: y,
					style: { minWidth: T?.toStringMaxWidth() },
					className: e(S && "bg-f1-background-secondary-hover")
				}),
				w && /* @__PURE__ */ h(o, {
					variant: "ghost",
					icon: r,
					label: "Next",
					hideLabel: !0,
					size: "sm",
					fontSize: "md",
					disabled: !R?.next,
					onClick: () => N(R?.next ?? !1)
				})
			]
		}), !E && I && /* @__PURE__ */ h("div", {
			className: "border-l-solid flex-shrink-0 border-[#f00]",
			children: /* @__PURE__ */ h(o, {
				fontSize: "md",
				size: "sm",
				variant: "ghost",
				label: k.date.granularities[d?.granularity ?? "day"]?.currentDate,
				onClick: () => {
					let e = T?.toRange(/* @__PURE__ */ new Date());
					e && v?.(e);
				}
			})
		})]
	});
});
_.displayName = "DatePickerTrigger";
//#endregion
export { _ as DatePickerTrigger };
