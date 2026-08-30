import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { F0TagBalance as t } from "../../../../components/tags/F0TagBalance/index.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/items/BalanceTagItem.tsx
var i = n(({ ...e }, n) => /* @__PURE__ */ r("li", {
	ref: n,
	className: "flex items-start pt-1",
	children: /* @__PURE__ */ r(t, { ...e })
}));
i.displayName = "BalanceTagItem";
var a = e("BalanceTagItem", i);
//#endregion
export { a as BalanceTagItem };
