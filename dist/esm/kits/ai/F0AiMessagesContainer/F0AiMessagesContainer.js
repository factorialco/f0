import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/ArrowDown.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as r } from "../../../ui/skeleton.js";
import { ButtonInternal as i } from "../../../components/F0Button/internal.js";
import { F0ActionItem as a } from "../F0ActionItem/F0ActionItem.js";
import { ActiveFormCard as o } from "./components/ActiveFormCard.js";
import { AssistantMessage as s } from "./components/AssistantMessage.js";
import { FeedbackModal as c } from "./components/feedback/FeedbackModal.js";
import { FeedbackModalProvider as l, useFeedbackSubmit as u } from "./components/feedback/FeedbackProvider.js";
import { TurnFeedback as d } from "./components/feedback/TurnFeedback.js";
import { ScrollShadow as f } from "./components/ScrollShadow.js";
import { Thinking as p } from "./components/Thinking.js";
import { UserMessage as m } from "./components/UserMessage.js";
import { WelcomeScreen as ee } from "./components/WelcomeScreen.js";
import { useMessageScroll as h } from "./useMessageScroll.js";
import { useMemo as g, useRef as _ } from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
import { AnimatePresence as x, motion as S } from "motion/react";
//#region src/kits/ai/F0AiMessagesContainer/F0AiMessagesContainer.tsx
var C = {
	threadId: "",
	onThumbsUp: () => {},
	onThumbsDown: () => {}
}, w = (e) => /* @__PURE__ */ y(l, { children: /* @__PURE__ */ y(T, { ...e }) }), T = ({ turns: r, isLoadingThread: l = !1, interrupt: w, initialMessage: T, initialMessageCaption: ne, initialMessageSubtitle: re, initialMessageCta: E, onWelcomeClick: D, renderToolCall: O, onReplyQuote: k, onAssistantMessageRendered: A, autoScrollUserIntoView: j = !0, renderMarkdown: M, feedback: N, freezeLayout: P = !1, noShadows: F = !1, fullscreen: I = !1, children: L, AssistantMessage: R, UserMessage: z, onRegenerate: B, onCopy: V }) => {
	let { modal: H, handleSubmit: U, handleClose: W } = u(N ?? C), G = n(), K = R ?? s, q = z ?? m, J = g(() => {
		let e = T ?? G.ai.defaultInitialMessage;
		return (Array.isArray(e) ? e : [e]).filter((e) => typeof e == "string" && e.length > 0);
	}, [T, G.ai.defaultInitialMessage]), Y = !l && r.length === 0 && J.length > 0, X = _(null), Z = _(null), Q = _(null), ie = _(null), $ = _(null), { showScrollBtn: ae, turnMinHeight: oe, scrollToBottom: se } = h({
		viewportRef: X,
		contentRef: Z,
		endRef: Q,
		lastTurnRef: $,
		turnsCount: r.length,
		freezeTurnMinHeight: P
	}), ce = (t, n) => {
		let i = n === r.length - 1, s = {
			renderToolCall: O,
			onReplyQuote: k,
			onRendered: A,
			autoScrollIntoView: j,
			renderMarkdown: M
		}, c = (e, r) => {
			let i = {
				message: e,
				inProgress: t.isInProgress,
				index: r,
				isCurrentMessage: !1,
				AssistantMessage: K,
				UserMessage: q,
				onRegenerate: B,
				onCopy: V,
				rawData: e.rawData || {},
				...s
			};
			return /* @__PURE__ */ y(q, { ...i }, `${n}-u-${r}`);
		}, l = (e, r) => {
			let a = i && r === t.assistantMessages.length - 1, o = t.userMessages.length + r, c = {
				message: e,
				inProgress: t.isInProgress,
				index: o,
				isCurrentMessage: a,
				AssistantMessage: K,
				UserMessage: q,
				onRegenerate: B,
				onCopy: V,
				rawData: e.rawData || {},
				...s
			};
			return /* @__PURE__ */ y(K, {
				...c,
				isGenerating: t.isInProgress && a,
				isLoading: t.isInProgress && a && !e.content
			}, `${n}-a-${r}`);
		};
		return /* @__PURE__ */ b("div", {
			ref: i ? $ : void 0,
			className: e("flex flex-col items-start justify-start gap-2 px-1", i && "pb-5"),
			style: { minHeight: i && oe || void 0 },
			children: [
				t.userMessages.map((e, t) => c(e, t)),
				t.thinking && t.thinking.titles.length > 0 && /* @__PURE__ */ y(p, {
					titles: t.thinking.titles,
					title: G.ai.thoughtsGroupTitle,
					inProgress: t.thinking.inProgress,
					isWriting: t.thinking.isWriting
				}),
				t.assistantMessages.map((e, t) => l(e, t)),
				t.endIndicator === "thinking" && /* @__PURE__ */ y(a, {
					title: G.ai.thinking,
					status: "executing"
				}),
				t.endIndicator === "activity" && /* @__PURE__ */ y(a, { status: "writing" }),
				t.feedback && /* @__PURE__ */ y(d, {
					content: t.feedback.content,
					targetMessage: t.feedback.targetMessage,
					onCopy: V
				}),
				i && /* @__PURE__ */ y(o, {})
			]
		}, `turn-${n}`);
	};
	return /* @__PURE__ */ b(v, { children: [/* @__PURE__ */ b("div", {
		className: "relative flex flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ y("div", {
			ref: X,
			className: e("flex-1 overflow-y-scroll", "[scrollbar-width:thin] [scrollbar-color:transparent_transparent]", "hover:[scrollbar-color:var(--scrollbar-thumb)_transparent]", "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent", "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent", "hover:[&::-webkit-scrollbar-thumb]:bg-f1-background-inverse/30"),
			children: /* @__PURE__ */ b("div", {
				ref: Z,
				className: e("flex h-full flex-col items-center p-4"),
				children: [
					/* @__PURE__ */ b("div", {
						className: e(Y ? "flex flex-1" : "flex flex-col gap-6", "w-full max-w-content"),
						children: [
							l && /* @__PURE__ */ y(te, {}),
							Y && /* @__PURE__ */ y(ee, {
								messages: J,
								caption: ne,
								subtitle: re,
								cta: E,
								onClick: D,
								fullscreen: I
							}),
							!l && r.map((e, t) => ce(e, t)),
							w
						]
					}),
					/* @__PURE__ */ y("div", {
						ref: ie,
						className: "h-px shrink-0",
						"aria-hidden": !0
					}),
					/* @__PURE__ */ y("footer", {
						className: "copilotKitMessagesFooter",
						ref: Q,
						children: L
					}),
					/* @__PURE__ */ y(x, { children: ae && /* @__PURE__ */ y(S.div, {
						className: "sticky bottom-2 z-10 flex justify-center",
						initial: {
							opacity: 0,
							scale: .8
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: {
							opacity: 0,
							scale: .8
						},
						transition: { duration: .2 },
						children: /* @__PURE__ */ y("div", {
							className: "rounded bg-f1-background",
							children: /* @__PURE__ */ y(i, {
								onClick: () => se(),
								label: G.ai.scrollToBottom,
								variant: "neutral",
								icon: t,
								hideLabel: !0
							})
						})
					}) })
				]
			})
		}), !F && !Y && /* @__PURE__ */ b(v, { children: [/* @__PURE__ */ y(f, { position: "top" }, "shadow-top"), /* @__PURE__ */ y(f, { position: "bottom" }, "shadow-bottom")] })]
	}), H.isOpen && /* @__PURE__ */ y(c, {
		onSubmit: U,
		onClose: W,
		reactionType: H.currentReaction,
		message: H.currentMessage
	})] });
}, te = () => /* @__PURE__ */ y("div", {
	className: "flex h-full w-full max-w-content flex-col gap-6",
	children: /* @__PURE__ */ b("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ y("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ y(r, { className: "h-12 w-2/5 rounded-full" })
			}),
			/* @__PURE__ */ y(r, { className: "mt-6 h-5 w-full rounded-md" }),
			/* @__PURE__ */ y(r, { className: "h-5 w-2/5 rounded-md" }),
			/* @__PURE__ */ y(r, { className: "h-5 w-4/5 rounded-md" })
		]
	})
});
//#endregion
export { w as F0AiMessagesContainer };
