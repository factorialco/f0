import e from "../../../../icons/app/ArrowCycle.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as n } from "../../../../components/F0Button/internal.js";
import { OneEmptyState as r } from "../../../../components/OneEmptyState/OneEmptyState.js";
import { useF0Chat as i } from "../providers/F0ChatProvider.js";
import { ChatMessageSkeleton as a } from "./ChatMessageSkeleton.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatStates.tsx
var c = ({ children: e }) => /* @__PURE__ */ o("div", {
	className: "flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary",
	children: e
}), l = () => /* @__PURE__ */ o("div", {
	className: "min-h-0 flex-1 overflow-hidden",
	children: /* @__PURE__ */ o(a, {})
}), u = () => {
	let r = t(), { reconnect: a } = i();
	return /* @__PURE__ */ o(c, { children: /* @__PURE__ */ s("div", {
		className: "flex flex-col items-center gap-3",
		children: [/* @__PURE__ */ o("span", { children: r.chat.error }), a && /* @__PURE__ */ o(n, {
			variant: "outline",
			size: "sm",
			label: r.chat.retry,
			icon: e,
			onClick: () => void a()
		})]
	}) });
}, d = () => {
	let e = t();
	return /* @__PURE__ */ o("div", {
		className: "flex h-full flex-1 items-center justify-center p-6",
		children: /* @__PURE__ */ o(r, {
			emoji: "💬",
			title: e.chat.emptyConversation,
			description: e.chat.emptyConversationDescription
		})
	});
};
//#endregion
export { l as ChatConnecting, d as ChatEmptyState, u as ChatError };
