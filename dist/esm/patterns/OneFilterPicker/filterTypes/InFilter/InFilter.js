"use client";
import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { OneEllipsis as n } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ScrollArea as i } from "../../../../ui/scrollarea.js";
import { Spinner as a } from "../../../../ui/Spinner/index.js";
import { F0Checkbox as o } from "../../../../components/F0Checkbox/F0Checkbox.js";
import { F0SearchInput as s } from "../../../../components/F0SearchInput/F0SearchInput.js";
import { collectNestedFilterKeys as c, optionMatchesSearch as l } from "./components/option-utils.js";
import { InFilterFlatOption as u } from "./components/InFilterFlatOption.js";
import { cacheLabel as d, cacheNestedLabel as f, getCacheKey as p, useLoadOptions as m } from "./useLoadOptions.js";
import { InFilterOptionRow as h } from "./components/InFilterOptionRow.js";
import { useEffect as g, useMemo as _, useRef as v, useState as ee } from "react";
import { jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/InFilter.tsx
function x({ schema: x, value: S, onChange: C, isCompactMode: w, onFilterChange: T, allFiltersValue: E }) {
	let D = r(), [O, k] = ee(""), A = v(!0), { options: j, isLoading: M, error: N, loadOptions: P, loadMore: F } = m({
		schema: {
			...x,
			type: "in"
		},
		search: O
	}), I = p(x);
	g(() => {
		if (!E || !j.length) return;
		let e = (t) => {
			for (let n of t) if (n.children) {
				let { filterKey: t, options: r } = n.children, i = E[t] ?? [];
				for (let a of r) {
					if (i.includes(a.value)) {
						let e = `${n.label} > ${a.label}`;
						f(t, a.value, e), d(I, a.value, a.label);
					}
					a.children && e([a]);
				}
			}
		};
		e(j);
	}, [
		j,
		E,
		I
	]), g(() => {
		let e;
		return M ? A.current = !1 : e = setTimeout(() => {
			A.current = !0;
		}, 1e3), () => clearTimeout(e);
	}, [M]);
	let L = "source" in x.options;
	g(() => {
		k("");
	}, [x]);
	let R = O.toLowerCase(), z = _(() => L ? j : j.filter((e) => l(e, R)), [
		L,
		j,
		R
	]), B = _(() => c(x.options), [x.options]), V = _(() => B.reduce((e, t) => {
		let n = E?.[t];
		return e + (Array.isArray(n) ? n.length : 0);
	}, 0), [B, E]), H = V > 0;
	if (M && !j.length) return /* @__PURE__ */ y("div", {
		className: "flex w-full items-center justify-center py-4",
		children: /* @__PURE__ */ y(a, { size: "small" })
	});
	if (N) return /* @__PURE__ */ b("div", {
		className: "text-f1-foreground-destructive flex w-full flex-col items-center justify-center gap-2 py-4",
		children: [/* @__PURE__ */ y("p", {
			className: "text-sm",
			children: D.filters.failedToLoadOptions
		}), /* @__PURE__ */ y("button", {
			className: e("text-f1-foreground-primary text-xs underline", t()),
			onClick: () => {
				P(!0);
			},
			children: D.filters.retry
		})]
	});
	if (j.length === 0 && !L) return /* @__PURE__ */ y("div", {
		className: "flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary",
		children: "No options available"
	});
	let U = j.length > 0 || L, W = z.length > 0 && z.every((e) => S.includes(e.value)), G = (S.length > 0 || H) && !W, K = () => {
		let e = [...S ?? []];
		z.forEach((t) => {
			e.includes(t.value) || (e.push(t.value), d(I, t.value, t.label));
		}), C(e);
	}, q = () => {
		C([]), T && B.forEach((e) => {
			T(e, []);
		});
	}, J = (e) => {
		G ? q() : e ? K() : q();
	}, Y = () => {
		M || !F || !A.current || F();
	}, X = (e, t) => {
		let n = S.includes(e);
		n || d(I, e, t), C(n ? S.filter((t) => t !== e) : [...S, e]);
	}, Z = S.length + V, Q = `${Z} ${Z === 1 ? D.status.selected.singular : D.status.selected.plural}`.toLowerCase(), $ = z.some((e) => !!e.children?.options.length), te = !!R && $;
	return /* @__PURE__ */ b("div", {
		className: "flex max-h-full w-full flex-col flex-1 min-h-0",
		role: "group",
		"aria-label": x.label,
		children: [
			U && /* @__PURE__ */ y("div", {
				className: "rounded-tr-xl p-2",
				children: /* @__PURE__ */ y(s, {
					placeholder: D.filters.inFilter.searchPlaceholder,
					value: O,
					onChange: k,
					clearable: !0
				})
			}),
			/* @__PURE__ */ b("div", {
				className: e("flex w-full items-center justify-between gap-1 pb-1", w ? "px-2" : "px-3.5"),
				children: [/* @__PURE__ */ y("span", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ y(n, {
						className: "text-f1-foreground-secondary",
						children: Q
					})
				}), /* @__PURE__ */ y(o, {
					title: D.actions.selectAll,
					checked: G || W,
					indeterminate: G,
					onCheckedChange: J,
					hideLabel: !0
				})]
			}),
			/* @__PURE__ */ b(i, {
				className: e("[&>div]:pb-2", w && "px-1", w ? "max-h-[360px]" : "flex-1 min-h-0"),
				onScrollBottom: Y,
				scrollMargin: 50,
				children: [
					z.length === 0 && !M && /* @__PURE__ */ y("div", {
						className: "flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary",
						children: D.select.noResults
					}),
					$ ? z.map((e) => /* @__PURE__ */ y(h, {
						option: e,
						isSelected: S.includes(e.value),
						onToggle: () => X(e.value, e.label),
						isCompactMode: w,
						depth: 0,
						onFilterChange: T,
						allFiltersValue: E,
						cacheKey: I,
						searchTerm: R,
						autoExpand: te
					}, String(e.value))) : z.map((e) => /* @__PURE__ */ y(u, {
						option: e,
						isSelected: S.includes(e.value),
						onToggle: () => X(e.value, e.label),
						isCompactMode: w
					}, String(e.value))),
					M && /* @__PURE__ */ y("div", {
						className: "flex w-full items-center justify-center py-4",
						children: /* @__PURE__ */ y(a, { size: "small" })
					})
				]
			})
		]
	});
}
//#endregion
export { x as InFilter };
