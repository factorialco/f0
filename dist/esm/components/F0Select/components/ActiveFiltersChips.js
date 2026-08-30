import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { ScrollArea as t } from "../../../ui/scrollarea.js";
import { Chip as n } from "../../OneChip/index.js";
import { filterTypes as r } from "../../../patterns/OneFilterPicker/filterTypes/filters.js";
import { useEffect as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
import { AnimatePresence as s, motion as c } from "motion/react";
//#region src/components/F0Select/components/ActiveFiltersChips.tsx
var l = ({ filters: l, currentFilters: u, onFiltersChange: d }) => {
	let [f, p] = a([]), m = e();
	if (i(() => {
		(async () => {
			let e = Object.entries(u).filter(([, e]) => e == null ? !1 : Array.isArray(e) ? e.length > 0 : e !== ""), t = await Promise.all(e.map(async ([e, t]) => {
				let n = l[e], i = n?.label ?? e;
				if (!n || !n.type) return {
					key: e,
					label: i,
					displayText: String(t)
				};
				let a = r[n.type];
				if (!a?.chipLabel) return {
					key: e,
					label: i,
					displayText: Array.isArray(t) ? t.join(", ") : String(t)
				};
				try {
					let r = await a.chipLabel(t, {
						schema: n,
						i18n: m
					});
					return {
						key: e,
						label: i,
						displayText: typeof r == "string" ? r : r.label
					};
				} catch {
					return {
						key: e,
						label: i,
						displayText: Array.isArray(t) ? t.join(", ") : String(t)
					};
				}
			}));
			p(t);
		})();
	}, [
		u,
		l,
		m
	]), f.length === 0) return null;
	let h = (e) => {
		let t = { ...u };
		delete t[e], d(t);
	};
	return /* @__PURE__ */ o(t, { children: /* @__PURE__ */ o("div", {
		className: "flex gap-1 border-0 p-2",
		children: /* @__PURE__ */ o(s, {
			mode: "popLayout",
			children: f.map((e) => /* @__PURE__ */ o(c.div, {
				layout: !0,
				initial: {
					opacity: 0,
					scale: .8
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .8
				},
				transition: {
					type: "spring",
					duration: .2
				},
				className: "shrink-0",
				children: /* @__PURE__ */ o(n, {
					variant: "selected",
					label: `${e.label}: ${e.displayText}`,
					onClose: () => h(e.key)
				})
			}, e.key))
		})
	}) });
};
l.displayName = "ActiveFiltersChips";
//#endregion
export { l as ActiveFiltersChips };
