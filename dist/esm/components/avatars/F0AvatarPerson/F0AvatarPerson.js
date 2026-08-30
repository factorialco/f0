import e from "../../../icons/app/PersonNegative.js";
import t from "../../../icons/app/SearchPerson.js";
import { BaseAvatar as n } from "../internal/BaseAvatar/BaseAvatar.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/avatars/F0AvatarPerson/F0AvatarPerson.tsx
var i = ({ firstName: i, lastName: a, src: o, size: s, "aria-label": c, "aria-labelledby": l, badge: u, deactivated: d, pending: f }) => {
	let p = d ? e : f ? t : void 0;
	return /* @__PURE__ */ r(n, {
		type: "rounded",
		name: [i, a],
		src: o,
		size: s,
		color: "random",
		"aria-label": c,
		"aria-labelledby": l,
		badge: u,
		icon: p ? {
			icon: p,
			color: "secondary"
		} : void 0
	});
};
i.displayName = "PersonAvatar";
//#endregion
export { i as F0AvatarPerson };
