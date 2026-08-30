import { F0TagAvatar as e } from "../internal/TagAvatar/index.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/tags/F0TagTeam/F0TagTeam.tsx
var r = t(({ name: t, src: r }, i) => /* @__PURE__ */ n(e, {
	ref: i,
	avatar: {
		type: "team",
		name: t,
		src: r
	},
	text: t
}));
r.displayName = "F0TagTeam";
//#endregion
export { r as F0TagTeam };
