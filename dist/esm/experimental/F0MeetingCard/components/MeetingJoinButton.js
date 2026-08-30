import e from "../../../icons/app/VideoRecorder.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/experimental/F0MeetingCard/components/MeetingJoinButton.tsx
var i = ({ join: i, disabled: a }) => {
	let { meetingCard: o } = t(), s = i.label ?? o.join;
	return i.href && !a ? /* @__PURE__ */ r(n, {
		label: s,
		icon: e,
		variant: "default",
		href: i.href
	}) : /* @__PURE__ */ r(n, {
		label: s,
		icon: e,
		variant: "default",
		disabled: a,
		onClick: i.onJoin
	});
};
//#endregion
export { i as MeetingJoinButton };
