import { cn as e } from "../../../../lib/utils.js";
import { Skeleton as t } from "../../../../ui/skeleton.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Chats/SidebarChatSkeleton.tsx
var i = ({ className: i }) => /* @__PURE__ */ r("div", {
	"aria-hidden": "true",
	className: e("flex h-9 w-full items-center gap-2 pl-1.5 pr-2", i),
	children: [/* @__PURE__ */ n(t, { className: "h-6 w-6 flex-shrink-0 rounded-full" }), /* @__PURE__ */ n(t, { className: "h-3.5 flex-1 rounded" })]
}), a = () => /* @__PURE__ */ n("div", {
	"aria-hidden": "true",
	className: "flex h-8 items-center px-1.5",
	children: /* @__PURE__ */ n(t, { className: "h-3 w-24 rounded" })
}), o = ({ groups: e = 2, rowsPerGroup: t = 4 }) => /* @__PURE__ */ n("div", {
	"data-testid": "sidebar-chat-list-skeleton",
	className: "flex w-full flex-col gap-2",
	children: Array.from({ length: e }).map((e, o) => /* @__PURE__ */ r("div", {
		className: "flex flex-col gap-0.5",
		children: [/* @__PURE__ */ n(a, {}), Array.from({ length: t }).map((e, t) => /* @__PURE__ */ n(i, {}, t))]
	}, o))
});
//#endregion
export { i as SidebarChatItemSkeleton, o as SidebarChatListSkeleton };
