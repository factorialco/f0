import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { ItemContainer as t } from "../ItemContainer.js";
import { getInternalAction as n } from "../utils.js";
import { forwardRef as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/items/Item.tsx
var a = r(({ text: e, icon: r, action: a }, o) => /* @__PURE__ */ i(t, {
	ref: o,
	text: e,
	leftIcon: r,
	action: n(a, e)
}));
a.displayName = "DataList.Item";
var o = e("DataList.Item", a);
//#endregion
export { o as Item };
