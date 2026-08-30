import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0SearchInput as t } from "../../F0SearchInput/F0SearchInput.js";
import { GroupingSelector as n } from "../../../patterns/OneDataCollection/Settings/components/GroupingSelector.js";
import { useCallback as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { AnimatePresence as s, motion as c } from "motion/react";
//#region src/components/F0Select/components/SelectTopActions.tsx
var l = ({ SelectComponent: l, OneFilterPickerComponent: d, ActiveFiltersChipsComponent: f, showSearchBox: p, searchBoxPlaceholder: m, onSearchChange: h, searchValue: g, grouping: _, currentGrouping: v, onGroupingChange: y, filters: b, currentFilters: x, onFiltersChange: S, asList: C = !1, onFiltersOpenChange: w, showPreview: T = !1 }) => {
	let E = e(), [D, O] = i(!1), k = r((e) => {
		O(e), w?.(e);
	}, [w]);
	return !p && !b && (!_ || _.mandatory && Object.entries(_.groupBy).length < 2) ? null : /* @__PURE__ */ o("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ o("div", {
			className: "flex gap-2 border-0 border-b border-solid border-f1-border-secondary p-2",
			children: [/* @__PURE__ */ o("div", {
				className: "flex flex-1 flex-row gap-2",
				children: [p && /* @__PURE__ */ a("div", {
					className: "flex-1",
					children: /* @__PURE__ */ a(t, {
						placeholder: m ?? E.toc.search,
						onChange: h,
						value: g,
						debounceTime: 400,
						autoFocus: !C && !D,
						clearable: !0
					})
				}), b && /* @__PURE__ */ a(d, {
					filters: b,
					value: x,
					onChange: S,
					mode: T ? "inline" : C ? "simple" : "compact",
					onOpenChange: k
				})]
			}), _ && /* @__PURE__ */ a(n, {
				SelectComponent: l,
				hideLabel: !0,
				grouping: _,
				currentGrouping: v,
				onGroupingChange: y
			})]
		}), /* @__PURE__ */ a(s, { children: b && u(x) && /* @__PURE__ */ a(c.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				type: "spring",
				duration: .3,
				bounce: 0
			},
			children: /* @__PURE__ */ a(f, {
				filters: b,
				currentFilters: x,
				onFiltersChange: S
			})
		}) })]
	});
}, u = (e) => Object.entries(e).some(([, e]) => e == null ? !1 : Array.isArray(e) ? e.length > 0 : e !== "");
//#endregion
export { l as SelectTopActions };
