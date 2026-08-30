import { createContext as e, useContext as t, useMemo as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Chats/SidebarChatProvider.tsx
var a = (e) => e.reduce((e, t) => e + t.chats.filter((e) => (e.unreadCount ?? 0) > 0).length, 0), o = e(null), s = e(null), c = (e, t, n) => e.map((e) => e.id === t ? n(e) : e), l = (e, t) => e.map((e) => ({
	...e,
	chats: t(e.chats)
})), u = ({ children: e, initialGroups: t = [], initialActiveChatId: u }) => {
	let [d, f] = r(t), [p, m] = r(u), h = n(() => ({
		setGroups: f,
		setActiveChat: (e) => m(e ?? void 0),
		upsertChat: (e, t) => f((n) => n.some((e) => e.chats.some((e) => e.id === t.id)) ? l(n, (e) => e.map((e) => e.id === t.id ? {
			...e,
			...t
		} : e)) : c(n, e, (e) => ({
			...e,
			chats: [...e.chats, t]
		}))),
		updateChat: (e, t) => f((n) => l(n, (n) => n.map((n) => n.id === e ? {
			...n,
			...t
		} : n))),
		removeChat: (e) => f((t) => l(t, (t) => t.filter((t) => t.id !== e))),
		setUnread: (e, t) => f((n) => l(n, (n) => n.map((n) => n.id === e ? {
			...n,
			unreadCount: t
		} : n))),
		reorder: (e, t) => f((n) => c(n, e, (e) => {
			let n = new Map(e.chats.map((e) => [e.id, e])), r = t.map((e) => n.get(e)).filter((e) => !!e), i = e.chats.filter((e) => !t.includes(e.id));
			return {
				...e,
				chats: [...r, ...i]
			};
		}))
	}), []), g = n(() => ({
		groups: d,
		activeChatId: p,
		unreadChatsCount: a(d)
	}), [d, p]);
	return /* @__PURE__ */ i(s.Provider, {
		value: h,
		children: /* @__PURE__ */ i(o.Provider, {
			value: g,
			children: e
		})
	});
}, d = () => {
	let e = t(o);
	if (e === null) throw Error("useSidebarChats must be used within a SidebarChatProvider");
	return e;
}, f = () => {
	let e = t(s);
	if (e === null) throw Error("useSidebarChatActions must be used within a SidebarChatProvider");
	return e;
}, p = () => {
	let e = d(), t = f();
	return n(() => ({
		...e,
		...t
	}), [e, t]);
}, m = () => f();
//#endregion
export { u as SidebarChatProvider, m as useSidebarChatActions, p as useSidebarChats };
