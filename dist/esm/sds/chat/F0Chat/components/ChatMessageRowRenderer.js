import { cn as e } from "../../../../lib/utils.js";
import { F0Avatar as t } from "../../../../components/avatars/F0Avatar/index.js";
import { useF0ChatChannelType as n } from "../providers/F0ChatProvider.js";
import { rowEntryTransition as r } from "../utils/chat-motion.js";
import { ChatUserHoverCard as i } from "./ChatUserHoverCard.js";
import { ChatMessageItem as a } from "./ChatMessageItem.js";
import { ChatSystemMessage as o } from "./ChatSystemMessage.js";
import { ChatTypingBubble as s } from "./ChatTypingBubble.js";
import { DateTimeSeparator as c } from "./DateTimeSeparator.js";
import { MessageStatus as l } from "./MessageStatus.js";
import { UnreadDivider as u } from "./UnreadDivider.js";
import { memo as d, useEffect as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { motion as g } from "motion/react";
//#region src/sds/chat/F0Chat/components/ChatMessageRowRenderer.tsx
var _ = (e) => /* @__PURE__ */ m(t, {
	size: "xs",
	avatar: e.avatar ?? {
		type: "person",
		firstName: e.name,
		lastName: ""
	}
}), v = (e) => e.type === "message" ? e.isFirstOfRun ? "pt-5" : "pt-0" : e.type === "footer" ? "pt-0" : "pt-3", y = d(({ row: t, isGroup: d, enterAnimation: y, animatedIds: b, freshIds: x, typingLeaving: S = !1, typingEntry: C }) => {
	let w = n(), T = v(t), [E] = p(() => {
		if (!y) return null;
		if (t.type === "message" || t.type === "system") {
			let e = x.get(t.message.id);
			return e === void 0 || b.has(t.message.id) ? null : { order: e };
		}
		if (t.type === "separator") {
			let e = x.get(t.forId);
			return e === void 0 || b.has(t.key) ? null : { order: e };
		}
		return null;
	}), D = E !== null;
	if (f(() => {
		t.type === "message" || t.type === "system" ? b.add(t.message.id) : t.type === "separator" && b.add(t.key);
	}, [t, b]), t.type === "separator" || t.type === "system") {
		let e = t.type === "separator" ? /* @__PURE__ */ m(c, {
			at: t.at,
			padded: !0,
			withTime: w === "announcement"
		}) : /* @__PURE__ */ m(o, { message: t.message });
		return D ? /* @__PURE__ */ m(g.div, {
			className: T,
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			transition: r(E?.order ?? 0),
			children: e
		}) : /* @__PURE__ */ m("div", {
			className: T,
			children: e
		});
	}
	if (t.type === "divider") return /* @__PURE__ */ m("div", {
		className: T,
		children: /* @__PURE__ */ m(u, {})
	});
	if (t.type === "typing") return /* @__PURE__ */ m(s, {
		users: t.users,
		isGroup: d,
		leaving: S,
		spacingClass: T,
		entryState: C
	});
	if (t.type === "footer") {
		let n = d && !t.message.isMine;
		return /* @__PURE__ */ h("div", {
			className: e("flex w-full gap-1.5", T),
			children: [n && /* @__PURE__ */ m("span", {
				"aria-hidden": !0,
				className: "size-5 shrink-0"
			}), /* @__PURE__ */ m("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ m(l, {
					message: t.message,
					isGroup: d
				})
			})]
		});
	}
	let { message: O, isFirstOfRun: k, isLastOfRun: A } = t, j = O.isMine, M = d && !j, N = M ? /* @__PURE__ */ m("span", {
		"aria-hidden": !0,
		className: "size-5 shrink-0"
	}) : void 0, P = M ? A ? /* @__PURE__ */ m(i, {
		user: O.author,
		children: /* @__PURE__ */ m("span", {
			className: "shrink-0 cursor-default flex items-end py-0.5",
			children: _(O.author)
		})
	}) : N : void 0, F = /* @__PURE__ */ m(a, {
		message: O,
		isMine: j,
		author: M && k ? O.author : void 0,
		bubbleGutter: P,
		belowGutter: N,
		isFirstOfRun: k,
		isLastOfRun: A,
		hasAvatar: M
	});
	return D ? /* @__PURE__ */ m(g.div, {
		className: e("flex flex-col gap-1", T),
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: r(E?.order ?? 0),
		children: F
	}) : /* @__PURE__ */ m("div", {
		className: e("flex flex-col gap-1", T),
		children: F
	});
});
//#endregion
export { y as ChatMessageRowRenderer };
