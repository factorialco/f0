import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { Text as t } from "../../../ui/Text/Text.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/F0MeetingCard/components/MeetingSummary.tsx
var r = ({ summary: r }) => {
	let { meetingCard: i } = e();
	return /* @__PURE__ */ n("div", {
		role: "group",
		"aria-label": i.summary,
		children: /* @__PURE__ */ n(t, {
			variant: "body",
			content: r,
			className: "break-words"
		})
	});
};
//#endregion
export { r as MeetingSummary };
