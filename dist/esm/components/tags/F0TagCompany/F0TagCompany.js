import { F0TagAvatar as e } from "../internal/TagAvatar/index.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/tags/F0TagCompany/F0TagCompany.tsx
var r = t(({ name: t, src: r }, i) => /* @__PURE__ */ n(e, {
	ref: i,
	avatar: {
		type: "company",
		name: t,
		src: r
	},
	text: t
}));
r.displayName = "F0TagCompany";
//#endregion
export { r as F0TagCompany };
