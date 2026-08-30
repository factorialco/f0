import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useF0ChatChannelType as n } from "../providers/F0ChatProvider.js";
import { CHAT_MEDIA_SCRIM_CLASS as r } from "../utils/media-layout.js";
import { formatClock as i } from "../utils/natural-time.js";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatMessageMeta.tsx
var c = ({ message: i, placement: c }) => {
	let l = t(), d = n(), f = u(i, l.chat.edited);
	return d === "announcement" ? null : c === "overlay" ? /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o("span", {
		"aria-hidden": !0,
		className: r
	}), /* @__PURE__ */ o("span", {
		"aria-hidden": !0,
		className: "pointer-events-none absolute bottom-1.5 right-2.5 text-xs leading-none text-f1-foreground-inverse [text-shadow:0_1px_2px_hsl(0_0%_0%/0.45)]",
		"data-testid": "chat-message-time",
		children: f
	})] }) : c === "below" ? /* @__PURE__ */ o("span", {
		"aria-hidden": !0,
		className: "px-1 text-xs leading-none text-f1-foreground-tertiary",
		"data-testid": "chat-message-time",
		children: f
	}) : /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o("span", {
		"aria-hidden": !0,
		className: "invisible ml-1.5 inline-block select-none whitespace-nowrap align-bottom text-xs leading-none",
		"data-testid": "chat-message-time-reserve",
		children: f
	}), /* @__PURE__ */ o("span", {
		"aria-hidden": !0,
		className: e("absolute bottom-2.5 right-3 select-none whitespace-nowrap text-xs leading-none [unicode-bidi:isolate]", "text-f1-foreground-tertiary dark:text-[hsl(var(--neutral-100)/0.6)]"),
		"data-testid": "chat-message-time",
		children: f
	})] });
}, l = ({ message: e }) => {
	let r = t();
	return n() === "announcement" ? null : /* @__PURE__ */ o("span", {
		className: "sr-only",
		children: u(e, r.chat.edited)
	});
}, u = (e, t) => {
	let n = i(new Date(e.createdAt));
	return e.editedAt && !e.deleted ? `${t} · ${n}` : n;
};
//#endregion
export { c as ChatMessageMeta, l as ChatMessageMetaLabel };
