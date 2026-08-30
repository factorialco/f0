import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useF0ChatEmit as r, useF0ChatStable as i } from "../providers/F0ChatProvider.js";
import { useChatJump as a } from "../providers/ChatUIProvider.js";
import { ClampText as o } from "./ClampText.js";
import { useReplyPreview as s } from "../hooks/useReplyPreview.js";
import { senderNameColorClass as c } from "../utils/sender-color.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ReplyQuote.tsx
var d = ({ reply: d, isMine: f = !1, isFirstOfRun: p = !0 }) => {
	let { jumpToMessage: m } = a(), h = r(), { currentUserId: g } = i(), _ = n(), { icon: v, label: y, thumbnailUrl: b } = s(d), x = d.author.id === g ? _.chat.you : d.author.name;
	return /* @__PURE__ */ l("div", {
		className: "p-1 pb-0",
		children: /* @__PURE__ */ u("button", {
			type: "button",
			onClick: () => {
				m(d.id), h.onJumpedToQuotedMessage();
			},
			className: e("flex w-full items-center overflow-hidden rounded-xl text-left", "bg-[hsl(var(--neutral-100)/0.06)] transition-colors hover:bg-[hsl(var(--neutral-100)/0.1)]", "dark:bg-[hsl(var(--neutral-100)/0.08)] dark:hover:bg-[hsl(var(--neutral-100)/0.12)]", p ? f ? "rounded-tr-xl" : "rounded-tl-xl" : f ? "rounded-tr-xs" : "rounded-tl-xs"),
			children: [b && /* @__PURE__ */ l("img", {
				src: b,
				alt: "",
				loading: "lazy",
				decoding: "async",
				className: "ml-2.5 h-9 w-9 shrink-0 self-center rounded-sm object-cover"
			}), /* @__PURE__ */ u("div", {
				className: "flex min-w-0 flex-1 flex-col gap-0.5 p-2.5",
				children: [/* @__PURE__ */ l(o, {
					className: e("text-sm font-medium", c(d.author)),
					children: x
				}), /* @__PURE__ */ u("span", {
					className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary",
					children: [v && /* @__PURE__ */ l(t, {
						icon: v,
						size: "sm",
						color: "default"
					}), /* @__PURE__ */ l(o, {
						className: "min-w-0 text-base",
						children: y
					})]
				})]
			})]
		})
	});
};
//#endregion
export { d as ReplyQuote };
