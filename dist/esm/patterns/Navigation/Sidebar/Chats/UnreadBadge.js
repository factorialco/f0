import { jsxs as e } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Chats/UnreadBadge.tsx
var t = ({ count: t, hasMention: n = !1 }) => /* @__PURE__ */ e("div", {
	"aria-label": n ? `${t} unread, mentions you` : `${t} unread`,
	className: "flex h-5 min-w-5 flex-shrink-0 items-center justify-center rounded-xs border border-solid border-f1-border-info bg-f1-background-info px-1 text-center text-sm font-semibold tabular-nums text-f1-foreground-info",
	children: [n ? "@" : "", t > 99 ? "+99" : t]
});
//#endregion
export { t as UnreadBadge };
