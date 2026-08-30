import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Avatar as n } from "../../../../components/avatars/F0Avatar/index.js";
import { F0AvatarList as r } from "../../../../components/avatars/F0AvatarList/index.js";
import { useChatRenderConfig as i } from "../providers/ChatRenderConfigProvider.js";
import { EASE_OUT_SWIFT as a } from "../utils/chat-motion.js";
import { useEffect as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { motion as u } from "motion/react";
//#region src/sds/chat/F0Chat/components/ChatTypingBubble.tsx
var d = (e) => {
	if (e.avatar?.type === "person") {
		let { type: t, ...n } = e.avatar;
		return n;
	}
	return {
		firstName: e.name,
		lastName: ""
	};
}, f = ({ animate: t }) => /* @__PURE__ */ c("span", {
	className: "flex items-center gap-1 py-px",
	"aria-hidden": "true",
	children: [
		0,
		1,
		2
	].map((n) => /* @__PURE__ */ c("span", {
		className: e("size-1.5 rounded-full bg-f1-foreground-secondary", t && "animate-typing-dot"),
		style: t ? { animationDelay: `${n * 150}ms` } : void 0
	}, n))
}), p = ({ users: p, isGroup: m, leaving: h = !1, spacingClass: g, entryState: _ }) => {
	let v = t(), { reducedMotion: y } = i(), [b] = s(() => _?.fresh ?? !0);
	if (o(() => {
		_ && (_.fresh = !1);
	}, [_]), p.length === 0) return null;
	let x = v.chat.writing;
	return m && (x = p.length === 1 ? v.t("chat.isTyping", { name: p[0].name }) : p.length === 2 ? v.t("chat.twoTyping", {
		first: p[0].name,
		second: p[1].name
	}) : v.chat.severalTyping), /* @__PURE__ */ l(u.div, {
		role: "status",
		"aria-label": x,
		className: e("flex w-full items-end gap-1 shrink-0", g),
		initial: y || !b ? !1 : { opacity: 0 },
		animate: h ? { opacity: 0 } : { opacity: 1 },
		transition: {
			duration: .14,
			ease: a
		},
		children: [m && (p.length > 1 ? /* @__PURE__ */ c(r, {
			type: "person",
			size: "xs",
			max: 3,
			noTooltip: !0,
			avatars: p.map(d)
		}) : /* @__PURE__ */ c(n, {
			size: "xs",
			avatar: p[0].avatar ?? {
				type: "person",
				firstName: p[0].name,
				lastName: ""
			}
		})), /* @__PURE__ */ c("div", {
			className: e("flex w-fit items-center justify-center rounded-2xl border border-solid border-f1-border-secondary bg-f1-background px-3.5 py-4", m && "rounded-bl-2xs"),
			children: /* @__PURE__ */ c(f, { animate: !y && !h })
		})]
	});
};
//#endregion
export { p as ChatTypingBubble };
