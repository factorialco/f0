import { cn as e } from "../../../../../lib/utils.js";
import t from "../../../../../icons/app/Ellipsis.js";
import { ButtonInternal as n } from "../../../../../components/F0Button/internal.js";
import { Dropdown as r } from "../../../../../experimental/Navigation/Dropdown/index.js";
import { useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/components/itemActions/ItemActionsDropdown/ItemActionsDropdown.tsx
var o = ({ items: o, onOpenChange: s, align: c = "end", label: l = "Actions", className: u }) => {
	let [d, f] = i(!1);
	return !o || o.length === 0 ? null : /* @__PURE__ */ a("div", {
		className: e("pointer-events-auto", u),
		children: /* @__PURE__ */ a(r, {
			align: c,
			items: o.map((e) => e.type === "separator" || e.type === "label" ? e : {
				...e,
				type: "item"
			}),
			open: d,
			onOpenChange: (e) => {
				f(e), s?.(e);
			},
			children: /* @__PURE__ */ a(n, {
				icon: t,
				label: l,
				hideLabel: !0,
				variant: "ghost",
				pressed: d
			})
		})
	});
};
//#endregion
export { o as ItemActionsDropdown };
