import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import { EmojiImage as n } from "../../../../lib/emojis.js";
import r from "../../../../icons/app/Cross.js";
import i from "../../../../icons/app/Ellipsis.js";
import a from "../../../../icons/app/Maximize.js";
import o from "../../../../icons/app/Minimize.js";
import s from "../../../../icons/app/Search.js";
import { useI18n as c } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as l } from "../../../../components/F0Button/internal.js";
import { F0Avatar as u } from "../../../../components/avatars/F0Avatar/index.js";
import { Dropdown as d } from "../../../../experimental/Navigation/Dropdown/index.js";
import { useChatSearch as f } from "../providers/ChatUIProvider.js";
import { ChatHeaderSearch as p } from "./ChatHeaderSearch.js";
import { ChatUserHoverCard as m } from "./ChatUserHoverCard.js";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
import { useMediaQuery as v } from "usehooks-ts";
import { breakpoints as y } from "@factorialco/f0-core";
//#region src/sds/chat/F0Chat/components/ChatHeader.tsx
var b = ({ online: t, label: n }) => t ? /* @__PURE__ */ g("span", {
	role: "img",
	"aria-label": n,
	className: "absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background",
	children: /* @__PURE__ */ g("span", {
		"aria-hidden": "true",
		className: e("h-2 w-2 rounded-full", "bg-f1-background-positive-bold")
	})
}) : null, x = ({ channel: e, isFullscreen: x, onToggleFullscreen: S, onClose: C, actions: w }) => {
	let T = c(), { searchOpen: E, openSearch: D } = f(), O = v(`(max-width: ${y.md}px)`, { initializeWithValue: !0 }), k = e.type === "dm" && e.presence !== void 0, A = e.type === "group" && (e.avatar.type === "team" || e.avatar.type === "company") && !e.avatar.src, j = e.avatar.type === "emoji" ? e.avatar.emoji : A ? "＃" : null, M = (w ?? []).filter((t) => !t.channelTypes || t.channelTypes.includes(e.type)), N = (e) => e.placement === "inline" && e.icon != null, P = M.filter(N), F = M.filter((e) => !N(e)), I = [...e.type === "announcement" ? [] : [{
		label: T.actions.search,
		icon: s,
		onClick: D
	}], ...F.map((t) => ({
		label: t.label,
		icon: t.icon,
		onClick: () => t.onClick(e)
	}))], L = /* @__PURE__ */ _("div", {
		className: "flex min-w-0 items-center gap-2",
		children: [
			/* @__PURE__ */ _("div", {
				className: "relative flex shrink-0",
				children: [j ? /* @__PURE__ */ g("span", {
					"aria-hidden": A || void 0,
					className: "flex size-5 items-center justify-center text-lg font-medium text-f1-foreground-secondary",
					"data-testid": A ? "chat-group-avatar-fallback" : void 0,
					children: /* @__PURE__ */ g(n, {
						emoji: j,
						size: "sm"
					})
				}) : /* @__PURE__ */ g(u, {
					size: "sm",
					avatar: e.avatar
				}), k && /* @__PURE__ */ g(b, {
					online: e.presence === "online",
					label: T.chat.online
				})]
			}),
			/* @__PURE__ */ g("span", {
				className: "truncate text-base font-medium text-f1-foreground",
				children: e.title
			}),
			e.statuses?.map((e) => /* @__PURE__ */ g(t, {
				icon: e.icon,
				size: "sm",
				color: "default",
				"aria-label": e.label
			}, e.label))
		]
	});
	return /* @__PURE__ */ g("header", {
		className: "flex shrink-0 items-center justify-between gap-2 px-4 py-3",
		children: E ? /* @__PURE__ */ g(p, {}) : /* @__PURE__ */ _(h, { children: [e.user ? /* @__PURE__ */ g(m, {
			user: e.user,
			children: L
		}) : L, /* @__PURE__ */ _("div", {
			className: "flex shrink-0 items-center gap-0.5",
			children: [
				P.map((t) => /* @__PURE__ */ g(l, {
					variant: "ghost",
					hideLabel: !0,
					label: t.label,
					icon: t.icon,
					onClick: () => t.onClick(e)
				}, t.id)),
				I.length > 0 && /* @__PURE__ */ g(d, {
					items: I,
					align: "end",
					label: T.chat.options,
					children: /* @__PURE__ */ g(l, {
						variant: "ghost",
						hideLabel: !0,
						label: T.chat.options,
						icon: i
					})
				}),
				S && !O && /* @__PURE__ */ g(l, {
					variant: "ghost",
					hideLabel: !0,
					label: x ? T.actions.collapse : T.actions.expand,
					icon: x ? o : a,
					onClick: S
				}),
				C && /* @__PURE__ */ g(l, {
					variant: "ghost",
					hideLabel: !0,
					label: T.actions.close,
					icon: r,
					onClick: C
				})
			]
		})] })
	});
};
//#endregion
export { x as ChatHeader };
