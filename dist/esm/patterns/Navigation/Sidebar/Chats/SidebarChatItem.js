import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/F0Icon.js";
import { EmojiImage as r } from "../../../../lib/emojis.js";
import { OneEllipsis as i } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import a from "../../../../icons/app/PushPin.js";
import o from "../../../../icons/app/PushPinSolid.js";
import { useI18n as s } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as c } from "../../../../components/F0Button/internal.js";
import { F0Avatar as l } from "../../../../components/avatars/F0Avatar/index.js";
import { Spinner as u } from "../../../../ui/Spinner/index.js";
import { SidebarChatItemSkeleton as d } from "./SidebarChatSkeleton.js";
import { UnreadBadge as f } from "./UnreadBadge.js";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Chats/SidebarChatItem.tsx
var h = () => /* @__PURE__ */ p("span", {
	className: "flex h-5 w-5 items-center justify-center gap-0.5",
	"aria-hidden": "true",
	children: [
		0,
		1,
		2
	].map((e) => /* @__PURE__ */ p("span", {
		className: "size-1 animate-bounce rounded-full bg-f1-foreground-secondary",
		style: { animationDelay: `${e * 120}ms` }
	}, e))
}), g = ({ presence: t, isActive: n, label: r }) => t === "offline" ? null : /* @__PURE__ */ p("div", {
	role: "img",
	"aria-label": r,
	className: "absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background",
	children: /* @__PURE__ */ p("span", {
		"aria-hidden": "true",
		className: e("ring-2 ring-f1-background-tertiary transition-[box-shadow] group-hover:ring-f1-background-secondary-hover", n && "ring-f1-background-secondary-hover", "h-2 w-2 rounded-full", "bg-f1-background-positive-bold")
	})
}), _ = ({ chat: _, isActive: v, onClick: y }) => {
	let b = s();
	if (_.loading) return /* @__PURE__ */ p(d, {});
	let x = !!_.unreadCount, S = _.presence ?? (_.avatar?.type === "person" ? "offline" : void 0), C = _.statuses ?? (_.status ? [_.status] : []), w = (_.avatar?.type === "team" || _.avatar?.type === "company") && !_.avatar.src, T = _.avatar?.type === "emoji" ? _.avatar.emoji : w ? "＃" : null;
	return /* @__PURE__ */ m("div", {
		className: "group/row relative",
		"data-sidebar-chat-id": _.id,
		children: [/* @__PURE__ */ m("button", {
			type: "button",
			onClick: y,
			"aria-pressed": v,
			className: e("group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors", t("focus-visible:ring-inset"), v ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary"),
			children: [
				_.typing ? /* @__PURE__ */ p(h, {}) : _.avatar ? /* @__PURE__ */ m("div", {
					className: "relative flex flex-shrink-0 items-center",
					children: [T ? /* @__PURE__ */ p("span", {
						"aria-hidden": w || void 0,
						className: "flex size-5 items-center justify-center text-lg font-medium text-f1-foreground-secondary",
						"data-testid": w ? "sidebar-group-avatar-fallback" : void 0,
						children: /* @__PURE__ */ p(r, {
							emoji: T,
							size: "sm"
						})
					}) : /* @__PURE__ */ p(l, {
						size: "xs",
						avatar: _.avatar
					}), S && /* @__PURE__ */ p(g, {
						presence: S,
						isActive: v,
						label: b.chat.online
					})]
				}) : null,
				/* @__PURE__ */ p(i, {
					tag: "span",
					className: e("line-clamp-1 flex-1 py-0.5", x ? "text-f1-foreground font-semibold" : _.avatar ? "text-f1-foreground-secondary font-medium" : "text-f1-foreground font-medium"),
					lines: 1,
					children: _.label
				}),
				(C.length > 0 || _.unreadCount) && /* @__PURE__ */ m("div", {
					className: e("gap-1 flex items-center justify-center transition-opacity", _.onTogglePin && "group-hover/row:opacity-0", _.pinPending && "opacity-0"),
					children: [C.map((e, t) => /* @__PURE__ */ p("div", {
						className: "flex h-5 w-5 items-center justify-center",
						children: /* @__PURE__ */ p(n, {
							icon: e.icon,
							size: "sm",
							"aria-label": e.label,
							color: "default"
						})
					}, `${e.label}-${t}`)), _.unreadCount ? /* @__PURE__ */ p(f, {
						count: _.unreadCount,
						hasMention: !!_.mentionCount
					}) : null]
				})
			]
		}), _.onTogglePin && (_.pinPending ? /* @__PURE__ */ p("div", {
			className: "absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center",
			"aria-label": _.pinned ? b.chat.unpin : b.chat.pin,
			children: /* @__PURE__ */ p(u, { size: "small" })
		}) : /* @__PURE__ */ p("div", {
			className: e("absolute right-1.5 top-1/2 -translate-y-1/2", "opacity-0 transition-opacity group-hover/row:opacity-100 focus-within:opacity-100"),
			children: /* @__PURE__ */ p(c, {
				variant: "neutral",
				size: "sm",
				hideLabel: !0,
				label: _.pinned ? b.chat.unpin : b.chat.pin,
				icon: _.pinned ? o : a,
				onClick: (e) => {
					e.stopPropagation(), _.onTogglePin?.();
				}
			})
		}))]
	});
};
//#endregion
export { _ as SidebarChatItem };
