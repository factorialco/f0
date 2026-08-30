import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Ellipsis.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../../components/F0Button/internal.js";
import { useF0ChatStable as ee } from "../providers/F0ChatProvider.js";
import { useChatComposeActions as i, useChatHighlightedId as a } from "../providers/ChatUIProvider.js";
import { useChatRenderConfig as o } from "../providers/ChatRenderConfigProvider.js";
import { microEnterTransition as te } from "../utils/chat-motion.js";
import { hasAnyMessageAction as s } from "../utils/message-actions.js";
import { ChatBubble as c, bubbleCornerClass as l } from "./ChatBubble.js";
import { ChatMessageActions as u } from "./ChatMessageActions.js";
import { ChatMessageAttachments as d } from "./ChatMessageAttachments.js";
import { ChatMessageReactions as f } from "./ChatMessageReactions.js";
import { SendingClock as p } from "./ChatMessageStatusIcon.js";
import { useCallback as m, useEffect as h, useLayoutEffect as g, useRef as _, useState as v } from "react";
import { jsx as y, jsxs as b } from "react/jsx-runtime";
import { AnimatePresence as x, motion as S } from "motion/react";
//#region src/sds/chat/F0Chat/components/ChatMessageItem.tsx
var C = 150, w = "a, button, input, textarea, select, video, audio, summary, [role=\"button\"], [role=\"link\"], [role=\"slider\"], [contenteditable=\"true\"], [tabindex]:not([tabindex=\"-1\"]), [data-chat-attachments]", T = (e, t) => {
	for (let n = e; n; n = n.parentElement) {
		if (n === t) return !1;
		if (n.matches(w)) return !0;
	}
	return !0;
}, E = ({ message: w, isMine: E, author: ne, bubbleGutter: re, belowGutter: ie, isFirstOfRun: D = !0, isLastOfRun: O = !0, hasAvatar: k = !1 }) => {
	let A = n(), { reducedMotion: j } = o(), [M, N] = v(!1), [P, F] = v(!1), I = _(null), L = _(!1), R = _(null), z = m(() => {
		I.current?.contains(document.activeElement) && (L.current = !0), F(!0);
	}, []), B = m(() => {
		R.current ??= window.setTimeout(() => {
			R.current = null, z();
		}, C);
	}, [z]);
	h(() => () => {
		R.current != null && window.clearTimeout(R.current);
	}, []), g(() => {
		L.current && (L.current = !1, I.current?.querySelector("button")?.focus());
	}, [P]);
	let { highlightedId: V } = a(), { startReply: H } = i(), { currentUserId: U, channelType: W, capabilities: G, editMessage: K, editWindowMs: q } = ee(), J = s({
		message: w,
		isMine: E,
		channelType: W,
		capabilities: G,
		hasEditMessage: !!K,
		editWindowMs: q
	}), ae = V === w.id, Y = !w.deleted && (w.reactions?.length ?? 0) > 0, X = _(Y), oe = _(w.status === "failed");
	h(() => {
		X.current = !1;
	}, []);
	let Z = !w.deleted && (w.attachments?.length ?? 0) > 0, Q = w.deleted || w.body.trim().length > 0 || !!w.replyTo, se = Q || Z, $ = !w.deleted && w.status !== "sending" && w.status !== "failed", ce = m((e) => {
		$ && e.target instanceof Element && (T(e.target, e.currentTarget) || H(w));
	}, [
		$,
		w,
		H
	]);
	return /* @__PURE__ */ b("div", {
		"data-msg-id": w.id,
		className: e("group flex flex-col", E ? "items-end" : "items-start"),
		onPointerEnter: P || !J ? void 0 : B,
		children: [se && /* @__PURE__ */ b("div", {
			className: e("flex w-full gap-0.5", E ? "flex-row-reverse items-center" : "items-end"),
			children: [re, /* @__PURE__ */ b("div", {
				className: e("flex min-w-0 items-center gap-0.5", E ? "flex-row-reverse" : "flex-row"),
				children: [
					/* @__PURE__ */ b("div", {
						className: e(l({
							isMine: E,
							isFirstOfRun: D,
							isLastOfRun: O,
							hasAvatar: k,
							layer: "outer"
						}), "p-0.5 flex min-w-0 max-w-full flex-col gap-1 transition-[box-shadow,border-radius] duration-200 motion-reduce:transition-none", E ? "items-end" : "items-start", ae && "ring-1 ring-f1-special-ring ring-offset-1 ring-offset-f1-background"),
						onDoubleClick: ce,
						"data-testid": "chat-message-surface",
						children: [Z && /* @__PURE__ */ y(d, {
							message: w,
							isMine: E,
							isFirstOfRun: D,
							isLastOfRun: O,
							hasAvatar: k
						}), Q && /* @__PURE__ */ y(c, {
							message: w,
							isMine: E,
							author: ne,
							currentUserId: U,
							isFirstOfRun: D && !Z,
							isLastOfRun: O,
							hasAvatar: k
						})]
					}),
					E && w.status === "sending" && /* @__PURE__ */ y(p, { sentAt: w.createdAt }),
					!w.deleted && w.status !== "sending" && (J || w.status === "failed") && /* @__PURE__ */ y("div", {
						ref: I,
						className: e(w.status === "failed" ? "opacity-100" : "opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100", M && "opacity-100"),
						children: w.status === "failed" ? /* @__PURE__ */ y(S.div, {
							initial: oe.current || j ? !1 : {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: te,
							children: /* @__PURE__ */ y(u, {
								message: w,
								isMine: E,
								open: M,
								onOpenChange: N
							})
						}) : P ? /* @__PURE__ */ y(u, {
							message: w,
							isMine: E,
							open: M,
							onOpenChange: N
						}) : /* @__PURE__ */ y(r, {
							variant: "outline",
							hideLabel: !0,
							noAutoTooltip: !0,
							label: A.chat.moreActions,
							icon: t,
							pressed: !1,
							onClick: () => {
								z(), N(!0);
							}
						})
					})
				]
			})]
		}), /* @__PURE__ */ y(x, {
			initial: !1,
			children: Y && /* @__PURE__ */ b(S.div, {
				className: "flex w-full gap-1.5 overflow-hidden",
				initial: X.current || j ? !1 : {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: j ? void 0 : {
					height: 0,
					opacity: 0
				},
				transition: {
					duration: .18,
					ease: "easeOut"
				},
				children: [ie, /* @__PURE__ */ y("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ y(f, {
						message: w,
						isMine: E
					})
				})]
			}, "reactions")
		})]
	});
};
//#endregion
export { E as ChatMessageItem };
