import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useChatRenderConfig as n } from "../providers/ChatRenderConfigProvider.js";
import { messageSurfaceColorClass as r, senderNameColorClass as i } from "../utils/sender-color.js";
import { ChatUserHoverCard as a } from "./ChatUserHoverCard.js";
import { renderBodyWithMentions as o } from "../utils/render-body.js";
import { ChatLinkPreview as s } from "./ChatLinkPreview.js";
import { ChatMessageMeta as c, ChatMessageMetaLabel as l } from "./ChatMessageMeta.js";
import { ReplyQuote as u } from "./ReplyQuote.js";
import { memo as d, useMemo as f, useRef as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { motion as g } from "motion/react";
//#region src/sds/chat/F0Chat/components/ChatBubble.tsx
var _ = {
	inner: {
		base: "rounded-2xl",
		left: ["rounded-tl-sm", "rounded-bl-sm"],
		right: ["rounded-tr-sm", "rounded-br-sm"],
		endLeft: "rounded-bl-2xs",
		endRight: "rounded-br-2xs"
	},
	outer: {
		base: "rounded-[22px]",
		left: ["rounded-tl-[10px]", "rounded-bl-[10px]"],
		right: ["rounded-tr-[10px]", "rounded-br-[10px]"],
		endLeft: "rounded-bl-2xs",
		endRight: "rounded-br-2xs"
	}
}, v = ({ isMine: t, isFirstOfRun: n, isLastOfRun: r, hasAvatar: i = !1, layer: a = "inner" }) => {
	let o = _[a], [s, c] = o[t ? "right" : "left"], l = t ? o.endRight : o.endLeft;
	return e(o.base, "transition-[border-radius] duration-150 motion-reduce:transition-none", !n && s, r ? i && l : c);
}, y = d(({ message: d, isMine: _, author: y, currentUserId: b, isFirstOfRun: x = !0, isLastOfRun: S = !0, hasAvatar: C = !1 }) => {
	let w = t(), { reducedMotion: T } = n(), E = p(d.deleted), D = f(() => [...(d.mentions ?? []).map((e) => ({
		name: e.name,
		isSelf: b != null && e.id === b,
		isEveryone: !1,
		user: {
			id: e.id,
			name: e.name,
			avatar: e.avatar,
			subtitle: e.subtitle,
			profileHref: e.profileHref
		}
	})), ...d.mentionedEveryone ? [{
		name: w.chat.mentionEveryone,
		isSelf: !1,
		isEveryone: !0
	}] : []], [
		d.mentions,
		d.mentionedEveryone,
		b,
		w.chat.mentionEveryone
	]), O = f(() => o(d.body.trimEnd(), D, d.linkPreviews), [
		d.body,
		D,
		d.linkPreviews
	]), k = v({
		isMine: _,
		isFirstOfRun: x,
		isLastOfRun: S,
		hasAvatar: C
	});
	return d.deleted ? /* @__PURE__ */ h(g.div, {
		initial: E.current || T ? !1 : { opacity: 0 },
		animate: { opacity: 1 },
		transition: { duration: .15 },
		className: e(k, "relative w-fit max-w-full px-3.5 py-2.5", "text-sm italic text-f1-foreground", r(d.author, _)),
		children: [w.chat.deletedMessage, /* @__PURE__ */ m(c, {
			message: d,
			placement: "bubble"
		})]
	}) : /* @__PURE__ */ m("div", {
		className: e("min-w-0 max-w-full bg-f1-background", k),
		children: /* @__PURE__ */ h("div", {
			className: e(k, "flex w-fit max-w-full flex-col text-f1-foreground font-normal", "whitespace-pre-wrap break-words", r(d.author, _)),
			children: [
				d.replyTo && /* @__PURE__ */ m(u, {
					reply: d.replyTo,
					isMine: _,
					isFirstOfRun: x
				}),
				d.linkPreviews && d.linkPreviews.length > 0 && /* @__PURE__ */ m(s, {
					previews: d.linkPreviews,
					isMine: _,
					isFirstOfRun: d.replyTo ? !0 : x
				}),
				/* @__PURE__ */ h("div", {
					className: "relative px-3.5 py-2.5",
					children: [
						y && /* @__PURE__ */ m(a, {
							user: y,
							children: /* @__PURE__ */ m("span", {
								className: e("mb-0.5 block w-fit cursor-default text-sm font-medium", i(y)),
								children: y.name
							})
						}),
						/* @__PURE__ */ m("span", {
							"data-chat-message-text": !0,
							children: O
						}),
						/* @__PURE__ */ m(c, {
							message: d,
							placement: "bubble"
						}),
						/* @__PURE__ */ m(l, { message: d })
					]
				})
			]
		})
	});
});
//#endregion
export { y as ChatBubble, v as bubbleCornerClass };
