import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ChatUserHoverCard as t } from "./ChatUserHoverCard.js";
import { Fragment as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatSystemMessage.tsx
var a = 3, o = {
	"member.added": {
		one: "chat.system.memberAdded.one",
		other: "chat.system.memberAdded.other"
	},
	"member.removed": {
		one: "chat.system.memberRemoved.one",
		other: "chat.system.memberRemoved.other"
	},
	"member.left": {
		one: "chat.system.memberLeft.one",
		other: "chat.system.memberLeft.other"
	}
}, s = (e, t) => e.split(/\{\{(\w+)\}\}/).map((e, i) => /* @__PURE__ */ r(n, { children: i % 2 == 1 ? t[e] : e }, i)), c = (e, t) => e.flatMap((e, i) => i === 0 ? [e] : [t, /* @__PURE__ */ r(n, { children: e }, `n-${i}`)]), l = ({ message: n }) => {
	let l = e(), u = n.system, d = (e) => /* @__PURE__ */ r("div", {
		className: "flex justify-center px-4 py-5",
		children: /* @__PURE__ */ r("span", {
			className: "text-center text-sm text-f1-foreground-tertiary max-w-96",
			children: e
		})
	});
	if (!u) return n.body ? d(n.body) : null;
	let { event: f, members: p, remainingCount: m } = u, h = p.slice(0, a), g = p.length - h.length + (m ?? 0), _ = h.map((e) => /* @__PURE__ */ r(t, {
		user: e,
		children: /* @__PURE__ */ i("span", {
			className: "cursor-default font-medium",
			children: ["@", e.name]
		})
	}, e.id)), v = g > 0 ? s(l.t("chat.system.membersWithMore"), {
		names: c(_, ", "),
		count: String(g)
	}) : _.length > 1 ? s(l.t("chat.system.membersWithLast"), {
		names: c(_.slice(0, -1), ", "),
		last: _[_.length - 1]
	}) : _[0], y = p.length + (m ?? 0), b = o[f];
	return d(s(l.t(y === 1 ? b.one : b.other), { members: v }));
};
//#endregion
export { l as ChatSystemMessage };
