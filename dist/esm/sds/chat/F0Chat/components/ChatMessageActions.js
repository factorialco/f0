import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/AlertCircleLine.js";
import i from "../../../../icons/app/ArrowCycle.js";
import a from "../../../../icons/app/ChevronRight.js";
import o from "../../../../icons/app/Delete.js";
import s from "../../../../icons/app/Ellipsis.js";
import c from "../../../../icons/app/Files.js";
import l from "../../../../icons/app/Pencil.js";
import u from "../../../../icons/app/Plus.js";
import d from "../../../../icons/app/Reply.js";
import { useI18n as f } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Action as p } from "../../../../ui/Action/Action.js";
import { ButtonInternal as m } from "../../../../components/F0Button/internal.js";
import { Popover as ee, PopoverContent as te, PopoverTrigger as ne } from "../../../../ui/popover.js";
import { useF0ChatEmit as re, useF0ChatStable as ie } from "../providers/F0ChatProvider.js";
import { useChatComposeActions as ae } from "../providers/ChatUIProvider.js";
import { ChatEmojiPickerButton as h } from "./ChatEmojiPickerButton.js";
import { formatClock as g } from "../utils/natural-time.js";
import { canCopyAction as _, canDeleteAction as v, canEditAction as y, canReactAction as b, canReplyAction as oe, canViewInfoAction as se } from "../utils/message-actions.js";
import { emitReactionToggle as ce } from "../utils/reactions.js";
import { ChatMessageInfoView as le } from "./ChatMessageInfo.js";
import { useRef as ue, useState as de } from "react";
import { Fragment as x, jsx as S, jsxs as C } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatMessageActions.tsx
var w = [
	"👍",
	"❤️",
	"😂",
	"🎉",
	"😮",
	"🙏"
], T = "flex w-full cursor-pointer items-center gap-1.5 rounded px-2 py-2 text-left font-medium transition-colors hover:bg-f1-background-secondary text-f1-foreground", E = ({ icon: r, label: i, onClick: a, trailing: o }) => /* @__PURE__ */ C("button", {
	type: "button",
	onClick: a,
	className: e(T, t("focus-visible:ring-inset")),
	children: [
		/* @__PURE__ */ S(n, {
			icon: r,
			size: "md"
		}),
		/* @__PURE__ */ S("span", {
			className: "line-clamp-1 flex-1",
			children: i
		}),
		o
	]
}), D = ({ message: e, isMine: t, open: T, onOpenChange: D }) => {
	let O = f(), { toggleReaction: k, deleteMessage: A, deleteFailedMessage: j, editMessage: M, editWindowMs: N, retryMessage: P, capabilities: F, channelType: fe } = ie(), { startReply: I, startEdit: L } = ae(), R = re(), [z, B] = de("menu"), V = ue(!1), H = {
		message: e,
		isMine: t,
		channelType: fe,
		capabilities: F,
		hasEditMessage: !!M,
		editWindowMs: N
	}, U = b(H), W = oe(H), G = _(H), K = se(H), q = y(H), J = v(H), Y = (e) => {
		D(e), e || B("menu");
	}, X = (t, n) => {
		ce(R, e, t, n), k(e.id, t), Y(!1);
	}, Z = (e) => () => {
		e(), Y(!1);
	}, Q = e.status === "failed", $ = [`${O.chat.notSent} · ${g(new Date(e.createdAt))}`, ...e.failureReason ? [e.failureReason] : []].join(" — "), pe = j ?? A;
	return /* @__PURE__ */ C(ee, {
		open: T,
		onOpenChange: Y,
		children: [/* @__PURE__ */ S(ne, {
			asChild: !0,
			children: Q ? /* @__PURE__ */ S(p, {
				variant: "ghost",
				size: "md",
				mode: "only",
				compact: !0,
				pressed: T,
				"aria-label": $,
				tooltip: $,
				"data-testid": "chat-failed-indicator",
				children: /* @__PURE__ */ S(n, {
					icon: r,
					size: "md",
					color: "critical-bold"
				})
			}) : /* @__PURE__ */ S(m, {
				variant: "outline",
				hideLabel: !0,
				label: O.chat.moreActions,
				icon: s,
				pressed: T
			})
		}), /* @__PURE__ */ S(te, {
			align: t ? "end" : "start",
			className: "w-64 rounded-lg border border-solid border-f1-border-secondary p-0",
			onCloseAutoFocus: (e) => {
				V.current && (V.current = !1, e.preventDefault());
			},
			children: Q ? /* @__PURE__ */ C("div", {
				className: "flex flex-col gap-0 p-1",
				children: [/* @__PURE__ */ S(E, {
					icon: i,
					label: O.chat.retry,
					onClick: Z(() => void P(e.id))
				}), /* @__PURE__ */ S(E, {
					icon: o,
					label: O.actions.delete,
					onClick: Z(() => void pe(e.id))
				})]
			}) : z === "info" ? /* @__PURE__ */ S(le, {
				message: e,
				onBack: () => B("menu")
			}) : /* @__PURE__ */ C(x, { children: [
				U && /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ C("div", {
					className: "flex items-center justify-between p-2",
					children: [w.map((e) => /* @__PURE__ */ S(m, {
						label: e,
						emoji: e,
						emojiMode: "native",
						variant: "ghost",
						"aria-label": e,
						onClick: () => X(e, "quickRow"),
						className: "h-8 w-8 rounded text-base hover:bg-f1-background-secondary-hover"
					}, e)), /* @__PURE__ */ S(h, {
						size: "md",
						variant: "ghost",
						label: O.chat.react,
						onSelect: (e) => X(e, "menuPicker"),
						icon: u
					})]
				}), /* @__PURE__ */ S("div", { className: "h-px bg-f1-border-secondary" })] }),
				(K || W || G) && /* @__PURE__ */ C("div", {
					className: "flex flex-col gap-0 p-1",
					children: [
						K && /* @__PURE__ */ S(E, {
							icon: r,
							label: O.chat.info,
							onClick: () => {
								R.onMessageInfoViewed({ messageId: e.id }), B("info");
							},
							trailing: /* @__PURE__ */ S(n, {
								icon: a,
								size: "md",
								className: "text-f1-icon"
							})
						}),
						W && /* @__PURE__ */ S(E, {
							icon: d,
							label: O.chat.reply,
							onClick: Z(() => {
								V.current = !0, I(e);
							})
						}),
						G && /* @__PURE__ */ S(E, {
							icon: c,
							label: O.actions.copy,
							onClick: Z(() => {
								navigator.clipboard?.writeText(e.body).then(() => R.onMessageCopied({ messageId: e.id })).catch(() => {});
							})
						})
					]
				}),
				(q || J) && /* @__PURE__ */ C(x, { children: [(U || K || W || G) && /* @__PURE__ */ S("div", { className: "h-px bg-f1-border-secondary" }), /* @__PURE__ */ C("div", {
					className: "flex flex-col gap-0 p-1",
					children: [q && /* @__PURE__ */ S(E, {
						icon: l,
						label: O.chat.edit,
						onClick: Z(() => L(e))
					}), J && /* @__PURE__ */ S(E, {
						icon: o,
						label: O.actions.delete,
						onClick: Z(() => void A(e.id))
					})]
				})] })
			] })
		})]
	});
};
//#endregion
export { D as ChatMessageActions };
