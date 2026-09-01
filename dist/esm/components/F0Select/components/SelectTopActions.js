import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0SearchInput as t } from "../../F0SearchInput/F0SearchInput.js";
import { OneFilterPicker as n } from "../../../patterns/OneFilterPicker/OneFilterPicker.js";
import { GroupingSelector as r } from "../../../patterns/OneDataCollection/Settings/components/GroupingSelector.js";
import { ActiveFiltersChips as i } from "./ActiveFiltersChips.js";
import { useCallback as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { AnimatePresence as l, motion as u } from "motion/react";
//#region src/components/F0Select/components/SelectTopActions.tsx
var d = ({ showSearchBox: d, searchBoxPlaceholder: p, onSearchChange: m, searchValue: h, grouping: g, currentGrouping: _, onGroupingChange: v, filters: y, currentFilters: b, onFiltersChange: x, asList: S = !1, onFiltersOpenChange: C, showPreview: w = !1 }) => {
	let T = e(), [E, D] = o(!1), O = a((e) => {
		D(e), C?.(e);
	}, [C]);
	return !d && !y && (!g || g.mandatory && Object.entries(g.groupBy).length < 2) ? null : /* @__PURE__ */ c("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ c("div", {
			className: "flex gap-2 p-2 border-0 border-b border-solid border-f1-border-secondary",
			children: [/* @__PURE__ */ c("div", {
				className: "flex flex-1 flex-row gap-2",
				children: [d && /* @__PURE__ */ s("div", {
					className: "flex-1",
					children: /* @__PURE__ */ s(t, {
						placeholder: p ?? T.toc.search,
						onChange: m,
						value: h,
						debounceTime: 400,
						autoFocus: !S && !E,
						clearable: !0
					})
				}), y && /* @__PURE__ */ s(n, {
					filters: y,
					value: b,
					onChange: x,
					mode: w ? "inline" : S ? "simple" : "compact",
					onOpenChange: O
				})]
			}), /* @__PURE__ */ s(r, {
				hideLabel: !0,
				grouping: g,
				currentGrouping: _,
				onGroupingChange: v
			})]
		}), /* @__PURE__ */ s(l, { children: y && f(b) && /* @__PURE__ */ s(u.div, {
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
			children: /* @__PURE__ */ s(i, {
				filters: y,
				currentFilters: b,
				onFiltersChange: x
			})
		}) })]
	});
}, f = (e) => Object.entries(e).some(([, e]) => e == null ? !1 : Array.isArray(e) ? e.length > 0 : e !== "");
//#endregion
export { d as SelectTopActions };
