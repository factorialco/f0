import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useF0Chat as n } from "../providers/F0ChatProvider.js";
import { useChatRenderConfig as r } from "../providers/ChatRenderConfigProvider.js";
import { deliveryState as i } from "../utils/delivery-status.js";
import { jsx as a } from "react/jsx-runtime";
import { motion as o } from "motion/react";
//#region src/sds/chat/F0Chat/components/MessageStatus.tsx
var s = ({ message: s, isGroup: c }) => {
	let l = t(), { reducedMotion: u } = r(), { channel: d } = n(), f = i(s, {
		isGroup: c,
		memberCount: d.memberCount
	});
	if (!f) return null;
	let p = f === "failed" ? l.chat.notSent : f === "read" ? l.chat.read : l.chat.sent;
	return /* @__PURE__ */ a("div", {
		role: "status",
		"aria-live": "polite",
		"aria-atomic": "true",
		className: e("px-1 pt-1 text-sm text-f1-foreground-secondary", s.isMine ? "text-right" : "text-left"),
		children: /* @__PURE__ */ a(o.span, {
			className: "inline-block",
			initial: !u && { opacity: 0 },
			animate: { opacity: 1 },
			transition: { duration: u ? 0 : .15 },
			children: p
		}, p)
	});
};
//#endregion
export { s as MessageStatus };
