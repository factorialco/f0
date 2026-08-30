import { useReducedMotion as e } from "../../../../lib/a11y.js";
import t from "../../../../icons/app/ArrowDown.js";
import n from "../../../../icons/app/ArrowUp.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as i } from "../../../../components/F0Button/internal.js";
import { useSidebarChats as a } from "./SidebarChatProvider.js";
import { SidebarTabPanel as o } from "../TabPanel/SidebarTabPanel.js";
import { SidebarChatBlankState as s } from "./SidebarChatBlankState.js";
import { SidebarChatListSkeleton as c } from "./SidebarChatSkeleton.js";
import { UnreadBadge as l } from "./UnreadBadge.js";
import { SidebarChatItem as u } from "./SidebarChatItem.js";
import { useOffscreenUnreadChats as d } from "./useOffscreenUnreadChats.js";
import { useMemo as f, useRef as p } from "react";
import { createPortal as m } from "react-dom";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Chats/SidebarChatList.tsx
var v = ({ actions: v = [], emptyState: y, loading: b = !1 }) => {
	let { groups: x, activeChatId: S, setActiveChat: C } = a(), w = r(), T = e(), E = p(null), { portalRoots: D, above: O, below: k, jump: A } = d({
		rootRef: E,
		groups: x,
		shouldReduceMotion: T
	}), j = (e) => w.t(e === 1 ? "chat.unreadCount.one" : "chat.unreadCount.other", { count: e }), M = (e, t) => w.t(e === "above" ? t === 1 ? "chat.unreadChatsAbove.one" : "chat.unreadChatsAbove.other" : t === 1 ? "chat.unreadChatsBelow.one" : "chat.unreadChatsBelow.other", { count: t }), N = f(() => x.map((e) => {
		let t = e.chats.reduce((e, t) => e + (t.unreadCount ?? 0), 0);
		return {
			id: e.id,
			title: e.title,
			isOpen: e.isOpen,
			highlightWhenCollapsed: t > 0,
			collapsedBadge: t > 0 ? /* @__PURE__ */ g(l, { count: t }) : void 0,
			items: e.chats.map((e) => ({
				id: e.id,
				searchText: e.label,
				content: /* @__PURE__ */ g(u, {
					chat: e,
					isActive: e.id === S,
					onClick: () => {
						C(e.id), e.onClick?.();
					}
				})
			}))
		};
	}), [
		S,
		x,
		C
	]);
	return /* @__PURE__ */ _(h, { children: [
		/* @__PURE__ */ g("div", {
			ref: E,
			className: "contents",
			children: /* @__PURE__ */ g(o, {
				className: "bg-transparent",
				groups: N,
				actions: v,
				searchPlaceholder: w.chat.searchPlaceholder,
				loading: b,
				skeleton: /* @__PURE__ */ g(c, {}),
				noResultsLabel: w.chat.noResults,
				emptyState: /* @__PURE__ */ g(s, {
					title: y.title,
					description: y.description,
					actions: y.actions
				})
			})
		}),
		D.above && m(O.count > 0 && /* @__PURE__ */ g("div", {
			className: "pointer-events-none absolute inset-x-0 top-2 z-[60] flex justify-center",
			children: /* @__PURE__ */ g("div", {
				className: "flex rounded bg-f1-background",
				children: /* @__PURE__ */ g(i, {
					type: "button",
					variant: "outline",
					size: "md",
					className: "pointer-events-auto shadow-md",
					icon: n,
					label: j(O.count),
					"aria-label": M("above", O.count),
					onClick: (e) => A("above", e.currentTarget)
				})
			})
		}), D.above),
		D.below && m(k.count > 0 && /* @__PURE__ */ g("div", {
			className: "pointer-events-none absolute inset-x-0 bottom-2 z-[60] flex justify-center",
			children: /* @__PURE__ */ g("div", {
				className: "flex rounded bg-f1-background",
				children: /* @__PURE__ */ g(i, {
					type: "button",
					variant: "outline",
					size: "md",
					className: "pointer-events-auto shadow-md",
					icon: t,
					label: j(k.count),
					"aria-label": M("below", k.count),
					onClick: (e) => A("below", e.currentTarget)
				})
			})
		}), D.below)
	] });
};
//#endregion
export { v as SidebarChatList };
