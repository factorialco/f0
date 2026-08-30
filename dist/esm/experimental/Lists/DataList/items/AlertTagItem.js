import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { F0TagAlert as t } from "../../../../components/tags/F0TagAlert/index.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/items/AlertTagItem.tsx
var i = n(({ ...e }, n) => /* @__PURE__ */ r("li", {
	ref: n,
	className: "flex items-start pt-1",
	children: /* @__PURE__ */ r(t, { ...e })
}));
i.displayName = "AlertTagItem";
var a = e("AlertTagItem", i);
//#endregion
export { a as AlertTagItem };
