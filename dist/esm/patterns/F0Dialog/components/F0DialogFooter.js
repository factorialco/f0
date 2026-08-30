import { F0Button as e } from "../../../components/F0Button/F0Button.js";
import { F0ButtonDropdown as t } from "../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/patterns/F0Dialog/components/F0DialogFooter.tsx
var i = (e) => Array.isArray(e), a = (e) => Array.isArray(e), o = ({ primaryAction: o, secondaryAction: s }) => {
	let c = s, l = o;
	return !l && !c ? null : /* @__PURE__ */ r("div", {
		className: "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3",
		children: [/* @__PURE__ */ n("div", { className: "flex-1" }), /* @__PURE__ */ r("div", {
			className: "flex flex-row items-center gap-2",
			children: [c ? a(s) ? /* @__PURE__ */ n(t, {
				items: s.map((e) => ({
					value: e.value,
					label: e.label,
					icon: e.icon
				})),
				onClick: (e) => {
					s.find((t) => t.value === e)?.onClick();
				},
				variant: "outline"
			}) : /* @__PURE__ */ n(e, {
				label: s.label,
				onClick: s.onClick,
				variant: "outline",
				icon: s.icon,
				iconPosition: s.iconPosition,
				disabled: s.disabled,
				loading: s.loading
			}) : null, l ? i(o) ? /* @__PURE__ */ n(t, {
				items: o.map((e) => ({
					value: e.value,
					label: e.label,
					icon: e.icon
				})),
				onClick: (e) => {
					o.find((t) => t.value === e)?.onClick();
				},
				variant: "default"
			}) : /* @__PURE__ */ n(e, {
				label: o.label,
				onClick: o.onClick,
				variant: "default",
				icon: o.icon,
				iconPosition: o.iconPosition,
				disabled: o.disabled,
				loading: o.loading
			}) : null]
		})]
	});
};
//#endregion
export { o as F0DialogFooter };
