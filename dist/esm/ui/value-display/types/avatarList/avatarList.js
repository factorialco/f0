import { cn as e } from "../../../../lib/utils.js";
import { F0AvatarList as t } from "../../../../components/avatars/F0AvatarList/index.js";
import { tableDisplayClassNames as n } from "../../const.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/ui/value-display/types/avatarList/avatarList.tsx
var i = (i, a) => {
	let o = i.type ?? "person";
	return /* @__PURE__ */ r("div", {
		className: e("pointer-events-auto w-full", a.visualization === "table" && n.avatarList),
		children: /* @__PURE__ */ r(t, {
			type: o,
			avatars: i.avatarList,
			size: "xs",
			max: i.max
		})
	});
};
//#endregion
export { i as AvatarListCell };
