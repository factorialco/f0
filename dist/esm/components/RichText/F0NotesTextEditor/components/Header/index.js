import { F0Button as e } from "../../../../F0Button/F0Button.js";
import { Dropdown as t } from "../../../../../experimental/Navigation/Dropdown/index.js";
import { F0ButtonDropdown as n } from "../../../../F0ButtonDropdown/F0ButtonDropdown.js";
import { Metadata as r } from "../../../../../experimental/Information/Headers/Metadata/index.js";
import { isSecondaryDropdownAction as i } from "../../../../../experimental/Information/Headers/BaseHeader/index.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/RichText/F0NotesTextEditor/components/Header/index.tsx
var s = (e) => e.isVisible !== !1, c = (e) => "isVisible" in e ? e.isVisible !== !1 : !0, l = (e) => !!e && "items" in e, u = (e) => !!e && "label" in e && !("items" in e), d = ({ primaryAction: d, secondaryActions: f = [], metadata: p = [], otherActions: m = [], status: h }) => {
	let g = [...h ? [{
		label: h.label,
		value: {
			type: "status",
			label: h.text,
			variant: h.variant
		},
		actions: h.actions,
		hideLabel: !0
	}] : [], ...p], _ = f.filter(s), v = m.filter(c), y = d && s(d), b = _.length > 0, x = v.length > 0, S = b || x || y;
	return /* @__PURE__ */ a("div", {
		className: "flex flex-col",
		children: (g.length > 0 || S) && /* @__PURE__ */ o("div", {
			className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center",
			children: [g.length > 0 && /* @__PURE__ */ a(r, { items: g }), /* @__PURE__ */ o("div", {
				className: "flex flex-shrink-0 flex-row items-center gap-2",
				children: [
					x && /* @__PURE__ */ a(t, { items: v }),
					_.map((t, r) => i(t) ? /* @__PURE__ */ a(n, {
						items: t.items,
						onClick: t.onClick,
						variant: t.variant ?? "outline",
						value: t.value,
						disabled: t.disabled,
						tooltip: t.tooltip,
						loading: t.loading
					}, r) : /* @__PURE__ */ a(e, {
						onClick: t.onClick,
						variant: t.variant || "outline",
						label: t.label,
						icon: t.icon,
						hideLabel: t.hideLabel,
						disabled: t.disabled,
						tooltip: t.tooltip
					}, r)),
					y && (b || x) && /* @__PURE__ */ a("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
					y && u(d) && /* @__PURE__ */ a(e, {
						label: d.label,
						onClick: d.onClick,
						variant: "default",
						icon: d.icon,
						disabled: d.disabled,
						tooltip: d.tooltip
					}),
					y && l(d) && /* @__PURE__ */ a(n, {
						items: d.items,
						onClick: d.onClick,
						variant: "default",
						value: d.value,
						disabled: d.disabled,
						tooltip: d.tooltip
					})
				]
			})]
		})
	});
};
//#endregion
export { d as Header };
