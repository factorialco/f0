import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/UnreadDivider.tsx
var r = () => {
	let r = e();
	return /* @__PURE__ */ n("div", {
		className: "flex items-center gap-2 py-4",
		children: [
			/* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border" }),
			/* @__PURE__ */ t("span", {
				className: "text-md font-medium text-f1-foreground",
				children: r.chat.newMessages
			}),
			/* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border-secondary" })
		]
	});
};
//#endregion
export { r as UnreadDivider };
