import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0AvatarList as t } from "../../../components/avatars/F0AvatarList/index.js";
import { normalizeAttendees as n } from "../utils.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/experimental/F0MeetingCard/components/MeetingAttendees.tsx
var i = ({ attendees: i, relevantCount: a, maxAvatars: o = 3, size: s = "sm" }) => {
	let { meetingCard: c } = e();
	if (i.length === 0) return null;
	let l = Math.max(0, a - i.length);
	return /* @__PURE__ */ r("div", {
		role: "group",
		"aria-label": c.attendees,
		children: /* @__PURE__ */ r(t, {
			type: "person",
			avatars: n(i),
			size: s,
			max: o,
			remainingCount: l > 0 ? l : void 0
		})
	});
};
//#endregion
export { i as MeetingAttendees };
