import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { F0AvatarCompany as t } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { ItemContainer as n } from "../ItemContainer.js";
import { getInternalAction as r } from "../utils.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/items/CompanyItem.tsx
var o = i(({ avatarUrl: e, name: i, action: o }, s) => /* @__PURE__ */ a(n, {
	ref: s,
	leftIcon: () => /* @__PURE__ */ a(t, {
		name: i,
		size: "xs",
		src: e
	}),
	text: i,
	action: r(o, i)
}));
o.displayName = "CompanyItem";
var s = e("CompanyItem", o);
//#endregion
export { s as CompanyItem };
