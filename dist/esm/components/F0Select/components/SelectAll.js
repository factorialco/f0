import { cn as e } from "../../../lib/utils.js";
import { OneEllipsis as t } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as r } from "../../../ui/skeleton.js";
import { ButtonInternal as i } from "../../F0Button/internal.js";
import { F0Checkbox as a } from "../../F0Checkbox/F0Checkbox.js";
import { Await as o } from "../../../lib/Await/Await.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/F0Select/components/SelectAll.tsx
var l = ({ selectedCount: l, indeterminate: u, value: d, onChange: f, hideCheckbox: p = !1, items: m, paddingTop: h = !1 }) => {
	let g = n(), _ = (e) => {
		f(!u && e);
	}, v = (e) => `${e} ${e === 1 ? g.status.selected.singular.toLowerCase() : g.status.selected.plural.toLowerCase()}`;
	return /* @__PURE__ */ c("div", {
		className: e("flex items-center gap-2 pr-2 pl-4", h ? "pt-3 pb-1" : "py-1"),
		children: [/* @__PURE__ */ s("div", {
			className: "flex-1 whitespace-nowrap",
			children: /* @__PURE__ */ s(o, {
				resolve: l,
				fallback: /* @__PURE__ */ s(r, { className: "h-4 w-4" }),
				children: (e) => /* @__PURE__ */ s("div", {
					className: "flex h-[24px] items-center",
					children: /* @__PURE__ */ s(t, {
						className: "text-f1-foreground-secondary",
						children: v(e)
					})
				})
			})
		}), p ? m && /* @__PURE__ */ s(i, {
			variant: "ghost",
			size: "sm",
			label: g.actions.clear,
			onClick: () => _(!1),
			className: "z-10",
			disabled: m.length === 0
		}) : /* @__PURE__ */ s("div", {
			className: "shrink-0 pr-1",
			children: /* @__PURE__ */ s(a, {
				id: "select-all",
				title: g.actions.selectAll,
				checked: u || d,
				indeterminate: u,
				onCheckedChange: _,
				presentational: !0,
				hideLabel: !0
			})
		})]
	});
};
//#endregion
export { l as SelectAll };
