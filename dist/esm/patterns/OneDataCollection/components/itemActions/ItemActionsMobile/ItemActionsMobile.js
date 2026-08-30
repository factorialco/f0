import { cn as e } from "../../../../../lib/utils.js";
import { ItemActionsDropdown as t } from "../ItemActionsDropdown/ItemActionsDropdown.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/components/itemActions/ItemActionsMobile/ItemActionsMobile.tsx
var r = ({ items: r, onOpenChange: i, className: a }) => /* @__PURE__ */ n("div", {
	className: e(a),
	children: /* @__PURE__ */ n(t, {
		label: "Mobile Actions",
		align: "end",
		items: r,
		onOpenChange: i
	})
});
//#endregion
export { r as ItemActionsMobile };
