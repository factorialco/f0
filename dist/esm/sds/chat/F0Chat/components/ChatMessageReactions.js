import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useF0ChatEmit as n, useF0ChatStable as r } from "../providers/F0ChatProvider.js";
import { useChatRenderConfig as i } from "../providers/ChatRenderConfigProvider.js";
import { microEnterTransition as a, microExitTransition as o } from "../utils/chat-motion.js";
import { ChatEmojiPickerButton as s } from "./ChatEmojiPickerButton.js";
import { emitReactionToggle as c } from "../utils/reactions.js";
import { useChatPermission as l } from "../hooks/useChatPermission.js";
import { ChatReactionPill as u } from "./ChatReactionPill.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { AnimatePresence as p, motion as m } from "motion/react";
//#region src/sds/chat/F0Chat/components/ChatMessageReactions.tsx
var h = ({ message: h, isMine: g }) => {
	let _ = t(), { reducedMotion: v } = i(), { toggleReaction: y, loadReactionUsers: b } = r(), x = n(), S = l("canReact"), C = (e, t) => {
		c(x, h, e, t), y(h.id, e);
	};
	return !h.reactions || h.reactions.length === 0 ? null : /* @__PURE__ */ f("div", {
		className: e("flex flex-wrap items-center gap-2 py-1", g && "justify-end"),
		children: [/* @__PURE__ */ d(p, {
			initial: !1,
			children: h.reactions.map((e) => /* @__PURE__ */ d(m.span, {
				className: "flex",
				initial: !v && {
					scale: .9,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: v ? void 0 : {
					scale: .9,
					opacity: 0,
					transition: o
				},
				transition: a,
				children: /* @__PURE__ */ d(u, {
					emoji: e.emoji,
					initialCount: e.count,
					hasReacted: e.reactedByMe,
					users: e.users,
					loadUsers: b && (e.users?.length ?? 0) < e.count ? () => b(h.id, e.emoji, e.count) : void 0,
					onInteraction: S ? (e) => C(e, "existingPill") : void 0,
					size: "sm"
				})
			}, e.emoji))
		}), S && /* @__PURE__ */ d(s, {
			size: "md",
			variant: "outline",
			label: _.chat.react,
			onSelect: (e) => C(e, "inlinePicker")
		})]
	});
};
//#endregion
export { h as ChatMessageReactions };
