import { FlatRow as e } from "./FlatRow.js";
import { NestedRow as t } from "./NestedRow.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
var i = n((n, i) => {
	let a = !!n.source.itemsWithChildren?.(n.item), o = n.nestedRowProps?.hasLoadedChildren === void 0 || n.nestedRowProps.hasLoadedChildren;
	return r(a && o ? t : e, {
		...n,
		ref: i
	});
});
//#endregion
export { i as Row };
