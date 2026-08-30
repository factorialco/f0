import { cn as e } from "../../../../../../lib/utils.js";
import { F0AvatarPerson as t } from "../../../../../avatars/F0AvatarPerson/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/RichText/internal/Extensions/Mention/MentionItem/index.tsx
var i = ({ item: i, selected: a }) => /* @__PURE__ */ r("div", {
	className: e("flex items-center gap-2 rounded-md border border-solid p-1.5 hover:bg-f1-background-hover", a ? "border-f1-border-selected-bold" : "border-f1-border-inverse"),
	children: [/* @__PURE__ */ n(t, {
		firstName: i.label,
		lastName: "",
		src: i.image_url ?? void 0,
		size: "sm"
	}), /* @__PURE__ */ n("p", {
		className: "text-neutral-100 text-md truncate text-ellipsis font-medium",
		children: i.label
	})]
});
//#endregion
export { i as MentionItem };
