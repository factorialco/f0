import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { F0AvatarTeam as t } from "../../../../components/avatars/F0AvatarTeam/index.js";
import { ItemContainer as n } from "../ItemContainer.js";
import { getInternalAction as r } from "../utils.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/items/TeamItem.tsx
var o = i(({ action: e, name: i }, o) => /* @__PURE__ */ a(n, {
	ref: o,
	leftIcon: () => /* @__PURE__ */ a(t, {
		name: i,
		size: "xs"
	}),
	text: i,
	action: r(e, i)
}));
o.displayName = "TeamItem";
var s = e("TeamItem", o);
//#endregion
export { s as TeamItem };
