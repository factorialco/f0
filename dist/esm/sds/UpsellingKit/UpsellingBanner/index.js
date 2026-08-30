import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { F0Button as t } from "../../../components/F0Button/F0Button.js";
import { UpsellingButton as n } from "../UpsellingButton/index.js";
import { BaseBanner as r } from "../../../kits/ai/Banners/BaseBanner/index.js";
import { forwardRef as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/UpsellingBanner/index.tsx
var s = i(function({ primaryAction: e, secondaryAction: i, ...s }, c) {
	let l = (e) => e.variant === "promote" ? /* @__PURE__ */ a(n, {
		label: e.label,
		onRequest: async () => {
			await e.onClick();
		},
		errorMessage: e.errorMessage,
		successMessage: e.successMessage,
		loadingState: e.loadingState,
		nextSteps: e.nextSteps,
		closeLabel: e.closeLabel,
		showIcon: e.showIcon,
		showConfirmation: e.showConfirmation,
		variant: e.variant
	}) : /* @__PURE__ */ a(t, {
		onClick: e.onClick,
		label: e.label,
		variant: e.variant || "default",
		size: "md",
		icon: e.icon
	}), u = e?.variant === "promote" ? void 0 : e, d = i?.variant === "promote" ? void 0 : i;
	return /* @__PURE__ */ o(r, {
		ref: c,
		...s,
		primaryAction: u,
		secondaryAction: d,
		children: [e?.variant === "promote" && l(e), i?.variant === "promote" && l(i)]
	});
});
s.displayName = "UpsellingBanner";
var c = e(s);
//#endregion
export { c as UpsellingBanner };
