import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import { useReducedMotion as r } from "../../../lib/a11y.js";
import { OneEllipsis as i } from "../../../lib/OneEllipsis/OneEllipsis.js";
import a from "../../../icons/app/ChevronRight.js";
import { useI18n as o } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as s } from "../../../components/F0Button/F0Button.js";
import { NonFocusableScrollArea as c, ScrollArea as l } from "../../../ui/scrollarea.js";
import { collectNestedFilterKeys as u } from "../filterTypes/InFilter/components/option-utils.js";
import { getFilterType as d } from "../filterTypes/utils.js";
import { useId as f, useMemo as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { AnimatePresence as g, motion as _ } from "motion/react";
//#region src/patterns/OneFilterPicker/components/FilterList.tsx
function v({ definition: v, tempFilters: y, selectedFilterKey: b, onFilterSelect: x, isCompactMode: S, onClickApplyFilters: C }) {
	let w = o(), T = f(), E = r(), D = S ? c : l, O = p(() => {
		let e = /* @__PURE__ */ new Map();
		for (let [t, n] of Object.entries(v)) if (n.type === "in" && "options" in n) {
			let r = u(n.options);
			r.length > 0 && e.set(t, r);
		}
		return e;
	}, [v]);
	return /* @__PURE__ */ m("div", {
		className: e("z-30 flex h-full flex-col", S ? "min-w-[224px] w-full" : "w-56", !S && "border border-solid border-transparent border-r-f1-border-secondary"),
		children: /* @__PURE__ */ h("div", {
			className: e("flex flex-1 h-full w-full flex-col min-h-0 max-h-full gap-1 overflow-x-hidden p-2"),
			children: [
				S && /* @__PURE__ */ m("div", { className: "-mx-2 mb-1 h-px border-0 border-t border-solid border-f1-border-secondary" }),
				/* @__PURE__ */ m(D, {
					className: "flex-1 min-h-0 max-h-full",
					children: /* @__PURE__ */ m("div", {
						className: "flex flex-col gap-1",
						children: Object.entries(v).map(([r, o]) => {
							let s = d(o.type), c = y[r], l = !s.isEmpty(c, {
								schema: o,
								i18n: w
							}), u = O.get(r), f = !l && !!u?.some((e) => {
								let t = y[e];
								return Array.isArray(t) && t.length > 0;
							}), p = l || f;
							return /* @__PURE__ */ h("button", {
								className: e("group relative flex w-full appearance-none items-center justify-between rounded px-2 py-1.5 font-medium transition-colors", "hover:bg-f1-background-secondary", b === r && "bg-f1-background-secondary", t()),
								onClick: () => x(r),
								"aria-label": o.label,
								"aria-describedby": p ? `${T}-${r}` : void 0,
								children: [/* @__PURE__ */ h("div", {
									className: "flex w-full items-center justify-start gap-2.5 overflow-hidden",
									children: [
										/* @__PURE__ */ m(i, {
											className: "flex-1 text-left text-f1-foreground",
											children: o.label
										}),
										/* @__PURE__ */ m(g, { children: p && /* @__PURE__ */ m(_.span, {
											className: "h-2 w-2 shrink-0 rounded-full bg-f1-background-selected-bold",
											initial: !E && {
												opacity: 0,
												scale: .7
											},
											animate: {
												opacity: 1,
												scale: 1
											},
											exit: E ? void 0 : {
												opacity: 0,
												scale: .7
											}
										}) }),
										S && /* @__PURE__ */ m(n, { icon: a })
									]
								}), p && /* @__PURE__ */ m("span", {
									id: `${T}-${r}`,
									className: "sr-only",
									children: w.t("filters.activeFilters", { filters: o.label })
								})]
							}, r);
						})
					})
				}),
				S && /* @__PURE__ */ m("div", {
					className: "-mx-2 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2",
					children: /* @__PURE__ */ m(s, {
						onClick: C,
						label: w.filters.applyFilters
					})
				})
			]
		})
	});
}
//#endregion
export { v as FilterList };
