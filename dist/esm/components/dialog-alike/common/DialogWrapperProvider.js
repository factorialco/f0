import { F0DialogContext as e } from "../../../patterns/F0Dialog/components/F0DialogProvider.js";
import { useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/dialog-alike/common/DialogWrapperProvider.tsx
var r = e, i = ({ isOpen: e, onClose: t, shownBottomSheet: i = !1, position: a, children: o, portalContainer: s }) => /* @__PURE__ */ n(r.Provider, {
	value: {
		open: e,
		onClose: t,
		position: a,
		shownBottomSheet: i,
		portalContainer: s
	},
	children: o
}), a = () => t(r);
//#endregion
export { r as DialogWrapperContext, i as DialogWrapperProvider, a as useDialogWrapperContext };
