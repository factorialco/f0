import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as t } from "../../F0Button/F0Button.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/F0Select/components/SelectBottomActions.tsx
var i = ({ actions: i, showApplyButton: a, onApply: o, onCancel: s, showCancelButton: c, applyLabel: l }) => {
	let u = e();
	return !i && !a ? null : /* @__PURE__ */ r("div", {
		className: "flex w-full flex-row items-center justify-between gap-2 border-0 border-t border-solid border-f1-border-secondary p-2",
		children: [
			i?.map((e) => /* @__PURE__ */ n(t, {
				variant: e.variant,
				onClick: e.onClick,
				icon: e.icon,
				label: e.label,
				disabled: e.disabled
			}, e.label)),
			c && /* @__PURE__ */ n(t, {
				onClick: s,
				label: u.filters.cancel,
				variant: "ghost"
			}),
			a && /* @__PURE__ */ n("div", {
				className: c ? "" : "ml-auto",
				children: /* @__PURE__ */ n(t, {
					onClick: o,
					label: l ?? u.select.applySelection
				})
			})
		]
	});
};
//#endregion
export { i as SelectBottomActions };
