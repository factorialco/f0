import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatReadOnlyNotice.tsx
var n = ({ channel: n }) => {
	let r = e();
	return /* @__PURE__ */ t("p", {
		className: "shrink-0 px-4 pb-4 pt-2 text-center text-sm text-f1-foreground-tertiary font-medium",
		"data-testid": "chat-read-only-notice",
		children: n.readOnlyNotice ?? r.chat.readOnly
	});
};
//#endregion
export { n as ChatReadOnlyNotice };
