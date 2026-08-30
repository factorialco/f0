import { cn as e } from "../../../lib/utils.js";
import { useReducedMotion as t } from "../../../lib/a11y.js";
import n from "../../../icons/app/Ai.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import { BaseTag as i } from "../../../components/tags/internal/BaseTag/index.js";
import { F0TagStatus as a } from "../../../components/tags/F0TagStatus/index.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/experimental/F0MeetingCard/components/MeetingStatusTag.tsx
var s = ({ text: n }) => {
	let r = t();
	return /* @__PURE__ */ o(i, {
		className: "bg-f1-background-info text-f1-foreground-info",
		left: /* @__PURE__ */ o("div", {
			className: e("m-1 aspect-square w-2 rounded-full bg-f1-icon-info", !r && "animate-pulse"),
			"aria-hidden": !0
		}),
		text: n
	});
}, c = ({ state: e, countdownLabel: t }) => {
	let { meetingCard: i } = r();
	switch (e) {
		case "inProgress": return /* @__PURE__ */ o(s, { text: i.inProgress });
		case "summarizing": return /* @__PURE__ */ o(a, {
			text: i.summarizing,
			variant: "neutral",
			icon: n
		});
		case "finished": return /* @__PURE__ */ o(a, {
			text: i.finished,
			variant: "positive"
		});
		case "cancelled": return /* @__PURE__ */ o(a, {
			text: i.cancelled,
			variant: "neutral"
		});
		case "scheduled": return t ? /* @__PURE__ */ o(a, {
			text: t,
			variant: "warning"
		}) : null;
		default: return null;
	}
};
//#endregion
export { c as MeetingStatusTag };
