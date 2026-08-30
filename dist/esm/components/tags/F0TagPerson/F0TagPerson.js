import { F0TagAvatar as e } from "../internal/TagAvatar/index.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/tags/F0TagPerson/F0TagPerson.tsx
var r = t(({ src: t, name: r, deactivated: i }, a) => /* @__PURE__ */ n(e, {
	ref: a,
	avatar: {
		type: "person",
		firstName: r,
		lastName: "",
		src: t,
		deactivated: i
	},
	text: r,
	deactivated: i
}));
r.displayName = "F0TagPerson";
//#endregion
export { r as F0TagPerson };
