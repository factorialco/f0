import e from "../../../../icons/app/ArrowLeft.js";
import t from "../../../../icons/app/Filter.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../../components/F0Button/internal.js";
import { F0Button as i } from "../../../../components/F0Button/F0Button.js";
import { Popover as a, PopoverContent as o, PopoverTrigger as s } from "../../../../ui/popover.js";
import { F0DialogContext as c } from "../../../F0Dialog/components/F0DialogProvider.js";
import { getActiveFilterKeys as l } from "../../../OneFilterPicker/internal/getActiveFilterKeys.js";
import { FilterContent as u } from "../../../OneFilterPicker/components/FilterContent.js";
import { FilterList as d } from "../../../OneFilterPicker/components/FilterList.js";
import { getActiveFiltersValue as f } from "../../../OneFilterPicker/internal/getActiveFiltersValue.js";
import { useContext as p, useEffect as m, useId as h, useLayoutEffect as g, useMemo as _, useRef as v, useState as y } from "react";
import { Fragment as b, jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/DashboardItem/DashboardItemFilters.tsx
function C({ filters: C, value: w, onChange: T, onOpenChange: E }) {
	let D = n(), O = h(), k = v(null), A = v(void 0), j = v(E), [M, N] = y(!1), [P, F] = y(null), [I, L] = y(w);
	m(() => {
		j.current = E;
	}, [E]), m(() => () => {
		j.current?.(!1);
	}, []);
	let R = P ? C[P] : void 0, z = R ? P : null, B = _(() => Object.fromEntries(Object.entries(C).filter(([, e]) => !e.hideSelector)), [C]);
	m(() => {
		P && !R && (F(null), A.current = void 0);
	}, [R, P]), m(() => {
		M || L(w);
	}, [M, w]);
	let V = p(c), H = V.portalContainer && (V.position === "center" || V.position === "fullscreen") ? V.portalContainer : void 0, U = _(() => l(C, w, D), [
		C,
		w,
		D
	]), W = _(() => {
		let e = U.length;
		return e === 0 ? void 0 : e;
	}, [U]), G = _(() => U.length > 0 ? D.t("filters.activeFilters", { filters: U.map((e) => C[e].label).join(", ") }) : D.filters.label, [
		U,
		C,
		D
	]);
	g(() => {
		if (!M) return;
		let e = k.current;
		if (!e) return;
		if (z) {
			e.querySelector("button")?.focus();
			return;
		}
		let t = Array.from(e.querySelectorAll("button")), n = A.current;
		((n ? t.find((e) => e.textContent?.trim().includes(n)) : void 0) ?? t[0])?.focus(), A.current = void 0;
	}, [z, M]);
	let K = (e) => {
		A.current = C[e].label, F(e);
	}, q = () => {
		let e = k.current?.querySelector("[aria-invalid=\"true\"]");
		if (e) {
			e.focus();
			return;
		}
		F(null);
	};
	return Object.keys(B).length === 0 ? null : /* @__PURE__ */ S(a, {
		open: M,
		onOpenChange: (e) => {
			N(e), E?.(e), !e && (F(null), L(w));
		},
		modal: !1,
		children: [
			/* @__PURE__ */ x(s, {
				asChild: !0,
				children: /* @__PURE__ */ x(r, {
					label: D.filters.label,
					icon: t,
					variant: "ghost",
					size: "md",
					hideLabel: !0,
					compact: !0,
					pressed: M,
					counterValue: W,
					"aria-label": D.filters.label,
					"aria-describedby": W ? `${O}-status` : void 0,
					"aria-controls": M ? O : void 0,
					onClick: (e) => e.stopPropagation()
				})
			}),
			W && /* @__PURE__ */ S("span", {
				id: `${O}-status`,
				className: "sr-only",
				children: [
					G,
					" (",
					W,
					")"
				]
			}),
			/* @__PURE__ */ x(o, {
				ref: k,
				"aria-label": D.filters.label,
				className: "w-[380px] max-w-[calc(100vw-1rem)] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md",
				align: "end",
				side: "bottom",
				id: O,
				container: H,
				children: /* @__PURE__ */ S("div", {
					className: "flex h-[420px] flex-col",
					children: [/* @__PURE__ */ x("div", {
						className: "flex shrink-0 items-center gap-2 py-1.5 pl-1.5 pr-3",
						children: z ? /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(i, {
							label: D.filters.availableFilters,
							icon: e,
							hideLabel: !0,
							variant: "ghost",
							size: "sm",
							onClick: q
						}), /* @__PURE__ */ x("h4", {
							className: "m-0 truncate text-base font-medium text-f1-foreground",
							children: R?.label
						})] }) : /* @__PURE__ */ x("span", {
							className: "px-2 text-base font-medium text-f1-foreground",
							children: D.filters.label
						})
					}), /* @__PURE__ */ x("div", {
						className: "flex min-h-0 flex-1 flex-col",
						children: z ? /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x("div", {
							className: "min-h-0 flex-1 overflow-y-auto border-0 border-t border-solid border-f1-border-secondary",
							children: /* @__PURE__ */ x(u, {
								selectedFilterKey: z,
								definition: C,
								tempFilters: I,
								onFilterChange: (e, t) => {
									L((n) => ({
										...n,
										[e]: t
									}));
								},
								isCompactMode: !0
							})
						}), /* @__PURE__ */ x("div", {
							className: "flex shrink-0 items-center justify-end gap-2 border-0 border-t border-solid border-f1-border-secondary p-2",
							children: /* @__PURE__ */ x(i, {
								onClick: q,
								label: D.filters.applySelection
							})
						})] }) : /* @__PURE__ */ x(d, {
							definition: B,
							tempFilters: I,
							selectedFilterKey: z,
							onFilterSelect: K,
							onClickApplyFilters: () => {
								T(f(C, I, D)), N(!1), E?.(!1), F(null);
							},
							isCompactMode: !0
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { C as DashboardItemFilters };
