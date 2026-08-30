import { useTextFormatEnforcer as e } from "../../../../lib/text.js";
import { BaseTag as t } from "../BaseTag/index.js";
import { F0Avatar as n } from "../../../avatars/F0Avatar/index.js";
import { forwardRef as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/tags/internal/TagAvatar/index.tsx
var a = r(({ avatar: r, text: a, deactivated: o }, s) => (e(a, { disallowEmpty: !0 }, { componentName: "F0TagAvatar" }), /* @__PURE__ */ i(t, {
	ref: s,
	deactivated: o,
	className: "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
	left: /* @__PURE__ */ i(n, {
		avatar: r,
		size: "xs"
	}),
	text: a,
	shape: r.type === "person" ? "rounded" : "square"
})));
a.displayName = "AvatarTag";
//#endregion
export { a as F0TagAvatar };
