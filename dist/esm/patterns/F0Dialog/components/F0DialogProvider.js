import { createContext as e, useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Dialog/components/F0DialogProvider.tsx
var r = e({
	open: !1,
	onClose: () => {},
	position: "center",
	shownBottomSheet: !1,
	portalContainer: null
}), i = ({ isOpen: e, onClose: t, shownBottomSheet: i = !1, position: a, children: o, portalContainer: s }) => /* @__PURE__ */ n(r.Provider, {
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
export { r as F0DialogContext, i as F0DialogProvider, a as useF0Dialog };
