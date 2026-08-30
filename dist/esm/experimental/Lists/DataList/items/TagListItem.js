import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { F0TagList as t } from "../../../../components/tags/F0TagList/index.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/items/TagListItem.tsx
function i(e, n) {
	return /* @__PURE__ */ r("li", {
		ref: n,
		className: "flex items-start pt-1",
		children: /* @__PURE__ */ r(t, { ...e })
	});
}
var a = n(i);
a.displayName = "TagListItem";
var o = e("TagListItem", a);
//#endregion
export { o as TagListItem };
