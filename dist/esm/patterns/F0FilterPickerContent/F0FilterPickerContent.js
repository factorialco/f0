"use client";
import { DataTestIdWrapper as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import { useI18n as n } from "../../lib/providers/i18n/i18n-provider.js";
import { getFilterType as r } from "../OneFilterPicker/filterTypes/utils.js";
import { FilterPickerInternal as i } from "./internal.js";
import { useEffect as a, useMemo as o, useState as s } from "react";
import { jsx as c } from "react/jsx-runtime";
//#region src/patterns/F0FilterPickerContent/F0FilterPickerContent.tsx
var l = 388;
function u({ filters: u, value: d, onChange: f, height: p, width: m = 600, className: h, showApplyButton: g = !0, applyButtonLabel: _, dataTestId: v }) {
	let y = n(), b = Object.keys(u)[0] ?? null, [x, S] = s(b), [C, w] = s(d);
	a(() => {
		w(d);
	}, [d]), a(() => {
		if (!x && u) {
			let e = Object.keys(u);
			if (e.length > 0) {
				let t = e.find((e) => {
					let t = C[e], n = r(u[e].type);
					return t !== void 0 && !n.isEmpty(t, {
						schema: u[e],
						i18n: y
					});
				});
				S(t ?? e[0]);
			}
		}
	}, [
		u,
		x,
		C,
		y
	]);
	let T = (e, t) => {
		let n = {
			...C,
			[e]: t
		};
		w(n), g || f(n);
	}, E = () => {
		f(C);
	}, D = o(() => p || Object.entries(u).reduce((e, [t, n]) => {
		let i = r(n.type);
		return Math.max(e, i?.formHeight || l);
	}, 0), [u, p]);
	return !u || Object.keys(u).length === 0 ? null : /* @__PURE__ */ c(e, {
		dataTestId: v,
		children: /* @__PURE__ */ c("div", {
			className: t("overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background", h),
			style: { maxWidth: m },
			children: /* @__PURE__ */ c(i, {
				filters: u,
				tempFilters: C,
				selectedFilterKey: x,
				onFilterSelect: S,
				onFilterChange: T,
				onApply: E,
				height: D,
				showApplyButton: g,
				applyButtonLabel: _
			})
		})
	});
}
u.displayName = "F0FilterPickerContent";
var d = u;
//#endregion
export { d as F0FilterPickerContent };
