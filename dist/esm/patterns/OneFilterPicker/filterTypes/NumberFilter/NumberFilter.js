"use client";
import e from "../../../../icons/app/EqualGreater.js";
import t from "../../../../icons/app/EqualLess.js";
import n from "../../../../icons/app/Greater.js";
import r from "../../../../icons/app/Less.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as a } from "../../../../components/F0Button/F0Button.js";
import { useL10n as o } from "../../../../lib/providers/l10n/l10n-provider.js";
import { NumberInputInternal as s } from "../../../../components/F0NumberInput/internal.js";
import { Switch as c } from "../../../../experimental/Forms/Fields/Switch/index.js";
import { useMemo as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { useDeepCompareEffect as m } from "@reactuses/core";
//#region src/patterns/OneFilterPicker/filterTypes/NumberFilter/NumberFilter.tsx
function h({ value: h, onChange: g, schema: _, isCompactMode: v }) {
	let y = {
		mode: _.options?.modes?.[0] ?? "single",
		..._.options
	}, b = i(), x = o(), S = () => {
		g(void 0);
	}, C = y.modes === void 0 || y.modes?.length > 1, [w, T] = u(h ?? {
		mode: "single",
		value: void 0
	});
	m(() => {
		T(h);
	}, [h]);
	let E = (e) => {
		T(e ? {
			mode: "range",
			from: {
				value: w?.mode === "single" ? w?.value : w?.from?.value,
				closed: !0
			},
			to: {
				value: w?.mode === "single" ? w?.value : w?.to?.value,
				closed: !0
			}
		} : {
			mode: "single",
			value: w?.mode === "single" ? w?.value : w?.from?.value
		});
	}, D = (e, t) => {
		w?.mode === "range" && T({
			...w,
			[e]: {
				...w?.[e],
				closed: t
			}
		});
	}, O = (e, t) => {
		T((n) => n?.mode === "range" ? {
			...n,
			[t]: {
				...n?.[t] ?? {},
				value: e ?? void 0
			}
		} : {
			...n ?? {
				mode: "single",
				value: void 0
			},
			value: e ?? void 0
		});
	};
	m(() => {
		w?.mode === "range" ? g({
			mode: "range",
			from: {
				value: w?.from?.value,
				closed: w?.from?.closed ?? !1
			},
			to: {
				value: w?.to?.value,
				closed: w?.to?.closed ?? !1
			}
		}) : g({
			mode: "single",
			value: w?.value
		});
	}, [w]);
	let k = l(() => ({
		from: {
			value: w?.mode === "range" ? w?.from?.value : w?.value,
			closed: w?.mode !== "range" || w?.from?.closed
		},
		to: {
			value: w?.mode === "range" ? w?.to?.value : w?.value,
			closed: w?.mode !== "range" || w?.to?.closed
		}
	}), [w]);
	return /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ p("div", {
		className: "flex flex-col gap-2 space-y-4 overflow-x-hidden p-4",
		children: [/* @__PURE__ */ p("div", {
			className: "flex flex-row gap-2",
			children: [/* @__PURE__ */ f("div", {
				className: "min-w-1/2 flex-1",
				children: /* @__PURE__ */ f(s, {
					label: w?.mode === "range" ? w?.from?.closed ? b.filters.number.greaterOrEqual : b.filters.number.greaterThan : b.filters.number.value,
					locale: x.locale,
					value: k.from.value,
					onChange: (e) => O(e, "from"),
					max: y.max,
					min: y.min,
					buttonToggle: w?.mode === "range" && y.openCloseToggle ? {
						label: [b.filters.number.greaterThan, b.filters.number.greaterOrEqual],
						icon: [n, e],
						selected: k.from.closed,
						onChange: (e) => D("from", e)
					} : void 0
				})
			}), w?.mode === "range" && /* @__PURE__ */ f("div", {
				className: "min-w-1/2 flex-1",
				children: /* @__PURE__ */ f(s, {
					label: w?.to?.closed ? b.filters.number.lessOrEqual : b.filters.number.lessThan,
					locale: x.locale,
					value: k.to.value,
					onChange: (e) => O(e, "to"),
					max: y.max,
					min: y.min,
					buttonToggle: w?.mode === "range" && y.openCloseToggle ? {
						label: [b.filters.number.lessThan, b.filters.number.lessOrEqual],
						icon: [r, t],
						selected: k.to.closed,
						onChange: (e) => D("to", e)
					} : void 0
				})
			})]
		}), C && /* @__PURE__ */ f(c, {
			title: b.filters.number.rangeTitle,
			checked: w?.mode === "range",
			onCheckedChange: E
		})]
	}), !v && /* @__PURE__ */ f("div", {
		className: "sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]",
		children: /* @__PURE__ */ f(a, {
			variant: "ghost",
			label: b.actions.clear,
			onClick: () => S(),
			disabled: !h,
			size: "sm"
		})
	})] });
}
//#endregion
export { h as NumberFilter };
