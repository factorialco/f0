import e from "../../../../icons/app/Ellipsis.js";
import t from "../../../../icons/app/Upsell.js";
import { Tooltip as n } from "../../../../experimental/Overlays/Tooltip/index.js";
import { ButtonInternal as r } from "../../../../components/F0Button/internal.js";
import { F0Button as i } from "../../../../components/F0Button/F0Button.js";
import { Dropdown as a } from "../../../../experimental/Navigation/Dropdown/index.js";
import { F0ButtonDropdown as o } from "../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import s, { useMemo as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/components/CollectionActions/CollectionActions.tsx
var f = ({ primaryActions: f, primaryActionsLabel: p, secondaryActions: m, otherActions: h, upsellAction: g }) => {
	let _ = (Array.isArray(f) ? f : [f]).filter((e) => e !== void 0), v = m || [], y = c(() => (h || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({ type: "separator" }), e.push(...t), e), []), [h]), [b, x] = l(!1), S = _.some((e) => e.description !== void 0);
	return _.length === 0 && v.length === 0 && y.length === 0 && !g ? null : /* @__PURE__ */ d("div", {
		className: "flex flex-row-reverse items-center gap-2",
		children: [
			S ? /* @__PURE__ */ u(o, {
				mode: "dropdown",
				size: "md",
				trigger: p,
				items: _.map((e, t) => ({
					label: e.label,
					icon: e.icon,
					description: e.description,
					disabled: e.disabled,
					value: t.toString()
				})),
				onClick: (e) => {
					_[Number(e)]?.onClick?.();
				}
			}) : _.length === 1 ? (() => {
				let e = _[0], t = e.tooltip?.({
					disabled: !!e.disabled,
					loading: !!e.loading
				}), r = /* @__PURE__ */ u(i, {
					size: "md",
					onClick: e.onClick,
					icon: e.icon,
					variant: "default",
					label: e.label,
					loading: e.loading,
					disabled: e.disabled
				});
				return t ? /* @__PURE__ */ u(n, {
					description: t,
					children: r
				}) : r;
			})() : _.length > 1 && /* @__PURE__ */ u(o, {
				size: "md",
				items: _.map((e, t) => ({
					label: e.label,
					icon: e.icon,
					value: t.toString()
				})),
				onClick: (e) => {
					_[Number(e)]?.onClick?.();
				}
			}),
			v?.map((e) => {
				let t = e.tooltip?.({
					disabled: !!e.disabled,
					loading: !!e.loading
				}), r = /* @__PURE__ */ u(i, {
					size: "md",
					onClick: e.onClick,
					icon: e.icon,
					variant: "outline",
					hideLabel: e.hideLabelWhenExpanded,
					label: e.label,
					disabled: e.disabled,
					loading: e.loading
				});
				return t ? /* @__PURE__ */ u(n, {
					description: t,
					children: r
				}, e.label) : /* @__PURE__ */ u(s.Fragment, { children: r }, e.label);
			}),
			g && /* @__PURE__ */ u(i, {
				size: "md",
				variant: g.variant ?? "outlinePromote",
				label: g.label,
				icon: g.showIcon === !1 ? void 0 : t,
				onClick: g.onClick,
				disabled: g.disabled
			}),
			y.length > 0 && /* @__PURE__ */ u(a, {
				items: y,
				align: "end",
				open: b,
				onOpenChange: x,
				children: /* @__PURE__ */ u(r, {
					variant: "outline",
					icon: e,
					label: "Actions",
					hideLabel: !0,
					pressed: b
				})
			})
		]
	});
};
//#endregion
export { f as CollectionActions };
