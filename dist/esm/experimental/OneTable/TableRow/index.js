import { cn as e } from "../../../lib/utils.js";
import { TableRow as t } from "../../../ui/table.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
var i = n(({ children: n, selected: i, className: a, sticky: o, style: s }, c) => /* @__PURE__ */ r(t, {
	ref: c,
	className: e(i && "bg-f1-background-selected hover:bg-f1-background-selected", a, "relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-['']", "[&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring", "[&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring", o && "hover:!bg-f1-background-hover sticky z-20 bg-f1-background"),
	style: {
		...o ? { top: 40 } : void 0,
		...s
	},
	children: n
}));
i.displayName = "TableRow";
//#endregion
export { i as TableRow };
