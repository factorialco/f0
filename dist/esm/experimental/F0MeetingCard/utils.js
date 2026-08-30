import { differenceInMinutes as e, format as t, isSameDay as n } from "date-fns";
var r = (e, t) => {
	let n = new Date(e);
	return n.setDate(n.getDate() + t), n;
}, i = (e, t) => n(e, t) ? "today" : n(e, r(t, -1)) ? "yesterday" : n(e, r(t, 1)) ? "tomorrow" : "other", a = (t, n) => e(t, n), o = (t, n) => Math.max(0, e(n, t)), s = ({ state: e, startsAt: t, now: n, windowMinutes: r = 10 }) => e === "inProgress" || e === "scheduled" && a(t, n) <= r, c = (e) => e === "scheduled" || e === "inProgress", l = ({ state: e, startsAt: t, now: n, windowMinutes: r = 10 }) => e === "scheduled" && a(t, n) <= r, u = ({ state: e, hasCountdown: t }) => e !== "scheduled" || t, d = (t, n) => {
	if (!n) return;
	let r = e(n, t);
	return r > 0 ? r : void 0;
}, f = (e, t) => e === "auto" ? t === "inProgress" ? "avatars" : "count" : e, p = ({ state: e, attendees: t, invitedCount: n, presentCount: r }) => e === "inProgress" && r !== void 0 ? r : n ?? t.length, m = (e) => e.map((e) => {
	if (e.type === "internal") return {
		firstName: e.firstName,
		lastName: e.lastName,
		src: e.src,
		tooltipDescription: e.email
	};
	let [t = "", ...n] = (e.name?.trim() || e.email?.split("@")[0] || "").split(/\s+/);
	return {
		firstName: t,
		lastName: n.join(" "),
		tooltipDescription: e.email
	};
}), h = (e, t) => (t === 1 ? e.one : e.other).replace("{{count}}", String(t)), g = (e, n) => t(e, "p", { locale: n }), _ = (e, n) => t(e, "d MMM", { locale: n });
//#endregion
export { _ as formatShortDate, g as formatTime, i as getDayKind, d as getDurationMinutes, o as getMinutesSinceStart, a as getMinutesUntilStart, u as hasStatusTag, c as isJoinRelevant, s as isWithinJoinWindow, m as normalizeAttendees, h as pluralize, f as resolveAttendeesDisplay, p as resolveRelevantCount, l as shouldShowCountdown };
