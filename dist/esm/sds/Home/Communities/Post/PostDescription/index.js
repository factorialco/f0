import { cn as e } from "../../../../../lib/utils.js";
import { Skeleton as t } from "../../../../../ui/skeleton.js";
import { withSkeleton as n } from "../../../../../lib/skeleton.js";
import { F0RichTextDisplay as r } from "../../../../../components/RichText/F0RichTextDisplay/F0RichTextDisplay.js";
import { forwardRef as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/sds/Home/Communities/Post/PostDescription/index.tsx
var s = i(function({ content: t, collapsed: n, id: i, className: o, tabIndex: s }, c) {
	return /* @__PURE__ */ a(r, {
		ref: c,
		id: i,
		content: t,
		tabIndex: s,
		className: e("FactorialOneTextEditor", n && "line-clamp-5 break-words", o)
	});
});
s.displayName = "BasePostDescription";
var c = () => /* @__PURE__ */ o("div", {
	className: "flex flex-col justify-around gap-3 py-2",
	children: [/* @__PURE__ */ a(t, { className: "h-2.5 w-1/2 rounded-2xs" }), /* @__PURE__ */ a(t, { className: "h-2.5 w-2/3 rounded-2xs" })]
}), l = n(s, c);
//#endregion
export { s as BasePostDescription, l as PostDescription, c as PostDescriptionSkeleton };
