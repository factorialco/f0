import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import t from "../../../icons/app/Upsell.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
import { UpsellRequestResponseDialog as r } from "../UpsellRequestResponseDialog/index.js";
import { useState as i } from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/UpsellingButton/index.tsx
function c({ label: e, showIcon: c = !0, onRequest: l, showConfirmation: u = !0, loading: d, errorMessage: f, successMessage: p, loadingState: m, nextSteps: h, closeLabel: g, variant: _ = "promote", onModalStateChange: v, portalContainer: y, ...b }) {
	let [x, S] = i(null), [C, w] = i(!1), T = async () => {
		if (l) {
			w(!0);
			try {
				await l(), u && (S("success"), v?.(!0));
			} catch {
				S("error"), v?.(!0);
			} finally {
				w(!1);
			}
		}
	}, E = () => {
		S(null), v?.(!1);
	}, D = d || C, O = D ? m.label : e;
	return /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o(n, {
		variant: _,
		label: O,
		icon: c ? t : void 0,
		onClick: T,
		loading: D,
		...b
	}), u && x && /* @__PURE__ */ o(r, {
		open: !0,
		onClose: E,
		success: x === "success",
		errorMessage: f,
		successMessage: p,
		nextSteps: h,
		closeLabel: g,
		portalContainer: y
	})] });
}
var l = e(c);
//#endregion
export { l as UpsellingButton };
