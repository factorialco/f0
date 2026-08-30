import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { useDateFnsLocale as t } from "../../../lib/providers/l10n/use-date-fns-locale.js";
import { formatShortDate as n, formatTime as r, getDayKind as i, getDurationMinutes as a, getMinutesSinceStart as o, getMinutesUntilStart as s, pluralize as c, shouldShowCountdown as l } from "../utils.js";
import { useMemo as u } from "react";
//#region src/experimental/F0MeetingCard/hooks/useMeetingLabels.ts
var d = ({ state: d, startsAt: f, endsAt: p, now: m, windowMinutes: h, invitedCount: g, presentCount: _ }) => {
	let { meetingCard: v } = e(), y = t();
	return u(() => {
		let e = {
			today: v.today,
			yesterday: v.yesterday,
			tomorrow: v.tomorrow
		}[i(f, m)] ?? n(f, y), t = o(f, m), u = d === "inProgress" ? t === 0 ? v.startingNow : c(v.startedAgo, t) : e, b = s(f, m), x = l({
			state: d,
			startsAt: f,
			now: m,
			windowMinutes: h
		}) ? b <= 0 ? v.startingNow : c(v.startsIn, b) : void 0, S = d === "inProgress" && _ !== void 0 ? c(v.inside, _) : g > 0 ? c(v.invited, g) : void 0, C = d === "finished" || d === "summarizing" ? a(f, p) : void 0;
		return {
			leadLabel: u,
			timeLabel: r(f, y),
			durationLabel: C === void 0 ? void 0 : c(v.duration, C),
			countdownLabel: x,
			attendeesLabel: S
		};
	}, [
		y,
		v,
		d,
		f,
		p,
		m,
		h,
		g,
		_
	]);
};
//#endregion
export { d as useMeetingLabels };
