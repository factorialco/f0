import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { F0TagDot as t } from "../../../../components/tags/F0TagDot/index.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/items/DotTagItem.tsx
var i = n(({ ...e }, n) => /* @__PURE__ */ r("li", {
	ref: n,
	className: "flex items-start pt-1",
	children: /* @__PURE__ */ r(t, { ...e })
}));
i.displayName = "DotTagItem";
var a = e("DotTagItem", i);
//#endregion
export { a as DotTagItem };
