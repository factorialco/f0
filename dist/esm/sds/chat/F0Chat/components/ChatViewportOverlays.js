import e from "../../../../icons/app/ArrowDown.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as n } from "../../../../components/F0Button/internal.js";
import { ScrollShadow as r } from "../../../../kits/ai/F0AiMessagesContainer/components/ScrollShadow.js";
import { useF0ChatEmit as i } from "../providers/F0ChatProvider.js";
import { EASE_OUT_SWIFT as a } from "../utils/chat-motion.js";
import { CHAT_COMPOSER_HEIGHT as o } from "../utils/chat-layout.js";
import { DateTimeSeparator as s } from "./DateTimeSeparator.js";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { AnimatePresence as d, motion as f } from "motion/react";
//#region src/sds/chat/F0Chat/components/ChatViewportOverlays.tsx
var p = ({ atTop: p, scrolledUp: m, hasMoreOlder: h, loadingOlder: g, stickyDate: _, showJumpButton: v, unreadCount: y, hasMoreNewer: b, reducedMotion: x, onJumpToBottom: S }) => {
	let C = t(), w = i(), T = x ? 0 : .15;
	return /* @__PURE__ */ u(c, { children: [
		/* @__PURE__ */ l(d, { children: !p && /* @__PURE__ */ l(r, { position: "top" }, "chat-header-shadow") }),
		/* @__PURE__ */ l(d, { children: m && (!p || h || g) && _ && /* @__PURE__ */ l(f.div, {
			className: "pointer-events-none absolute inset-x-0 top-2 flex justify-center",
			initial: {
				opacity: 0,
				y: -4
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -4
			},
			transition: { duration: T },
			children: /* @__PURE__ */ l("div", {
				className: "z-50",
				"aria-label": g ? C.chat.loadingOlder : void 0,
				children: /* @__PURE__ */ l(s, {
					at: _,
					withTime: !0,
					loading: g
				})
			})
		}) }),
		/* @__PURE__ */ l(d, { children: v && /* @__PURE__ */ l(f.div, {
			"data-testid": "chat-jump-overlay",
			className: "pointer-events-none absolute inset-x-0 flex justify-center",
			style: { bottom: `calc(${o} + 0.75rem)` },
			initial: {
				opacity: 0,
				scale: .9
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			exit: {
				opacity: 0,
				scale: .9
			},
			transition: {
				duration: T,
				ease: a
			},
			children: /* @__PURE__ */ l(f.div, {
				className: "pointer-events-auto",
				initial: x || y === 0 ? !1 : { scale: .95 },
				animate: { scale: 1 },
				transition: {
					duration: T,
					ease: a
				},
				children: /* @__PURE__ */ l(n, {
					onClick: () => {
						S(), w.onJumpedToBottom();
					},
					variant: "neutral",
					icon: e,
					label: y > 0 ? C.t(y === 1 ? "chat.unreadCount.one" : "chat.unreadCount.other", { count: y }) : b ? C.chat.backToLatest : C.chat.scrollToBottom,
					hideLabel: y === 0 && !b
				})
			}, y)
		}) })
	] });
};
//#endregion
export { p as ChatViewportOverlays };
