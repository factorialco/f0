import { actionsToDropdownItems as e } from "../../visualizations/collection/utils.js";
import { filterItemActions as t } from "../../item-actions.js";
import { useState as n } from "react";
//#region src/patterns/OneDataCollection/components/itemActions/useItemActions.ts
var r = ({ source: r, item: i }) => {
	let [a, o] = n(!1), [s, c] = n(null);
	if (!r.itemActions) return {
		hasItemActions: !1,
		hasMobileItemActions: !1,
		primaryItemActions: [],
		dropdownItemActions: [],
		mobileDropdownItemActions: [],
		handleDropDownOpenChange: () => {},
		dropDownOpen: !1,
		setDropDownOpen: () => {}
	};
	let l = t(r.itemActions, i), u = l.filter((e) => e.type === "separator" || e.hideInMobileDropdown !== !0), d = l.filter((e) => e.type === "primary").slice(0, 2), f = e(l.filter((e) => e.type === "separator" || !d.includes(e))), p = e(u), m = p.some((e) => e.type !== "separator");
	return {
		hasItemActions: l.length > 0,
		hasMobileItemActions: m,
		primaryItemActions: d,
		dropdownItemActions: f,
		mobileDropdownItemActions: p,
		handleDropDownOpenChange: (e) => {
			if (!e) {
				c(setTimeout(() => {
					o(!1);
				}, 100));
				return;
			}
			s && (clearTimeout(s), c(null)), o(!0);
		},
		dropDownOpen: a,
		setDropDownOpen: o
	};
};
//#endregion
export { r as useItemActions };
