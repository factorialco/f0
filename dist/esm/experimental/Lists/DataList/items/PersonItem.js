import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { F0AvatarPerson as t } from "../../../../components/avatars/F0AvatarPerson/index.js";
import { ItemContainer as n } from "../ItemContainer.js";
import { getInternalAction as r } from "../utils.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/items/PersonItem.tsx
var o = i(({ action: e, avatarUrl: i, firstName: o, lastName: s }, c) => {
	let l = `${o} ${s}`;
	return /* @__PURE__ */ a(n, {
		ref: c,
		leftIcon: () => /* @__PURE__ */ a(t, {
			size: "xs",
			src: i,
			firstName: o,
			lastName: s
		}),
		text: l,
		action: r(e, l)
	});
});
o.displayName = "PersonItem";
var s = e("PersonItem", o);
//#endregion
export { s as PersonItem };
