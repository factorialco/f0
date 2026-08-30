import { F0CardHorizontal as e } from "../../../experimental/F0CardHorizontal/F0CardHorizontal.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/kits/ai/F0HILActionConfirmation/F0HILActionConfirmation.tsx
var n = ({ text: n, description: r, avatar: i, confirmationText: a, onConfirm: o, cancelText: s, onCancel: c, stackAt: l = "sm" }) => /* @__PURE__ */ t(e, {
	title: n,
	description: r,
	avatar: i,
	stackAt: l,
	confirmAction: {
		label: a,
		onClick: o
	},
	rejectAction: {
		label: s,
		onClick: c
	}
});
//#endregion
export { n as F0HILActionConfirmation };
