import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Ai.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { BaseTag as r } from "../../../components/tags/internal/BaseTag/index.js";
import { F0TagStatus as i } from "../../../components/tags/F0TagStatus/index.js";
import { useReducedMotion as a } from "../../../lib/a11y.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/experimental/F0MeetingCard/components/MeetingStatusTag.tsx
var s = ({ text: t }) => {
	let n = a();
	return /* @__PURE__ */ o(r, {
		className: "bg-f1-background-info text-f1-foreground-info",
		left: /* @__PURE__ */ o("div", {
			className: e("m-1 aspect-square w-2 rounded-full bg-f1-icon-info", !n && "animate-pulse"),
			"aria-hidden": !0
		}),
		text: t
	});
}, c = ({ state: e, countdownLabel: r }) => {
	let { meetingCard: a } = n();
	switch (e) {
		case "inProgress": return /* @__PURE__ */ o(s, { text: a.inProgress });
		case "summarizing": return /* @__PURE__ */ o(i, {
			text: a.summarizing,
			variant: "neutral",
			icon: t
		});
		case "finished": return /* @__PURE__ */ o(i, {
			text: a.finished,
			variant: "positive"
		});
		case "cancelled": return /* @__PURE__ */ o(i, {
			text: a.cancelled,
			variant: "neutral"
		});
		case "scheduled": return r ? /* @__PURE__ */ o(i, {
			text: r,
			variant: "warning"
		}) : null;
		default: return null;
	}
};
//#endregion
export { c as MeetingStatusTag };
