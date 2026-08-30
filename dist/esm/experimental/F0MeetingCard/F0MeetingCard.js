import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n } from "../../lib/utils.js";
import { useI18n as r } from "../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as i } from "../../ui/skeleton.js";
import { F0Button as a } from "../../components/F0Button/F0Button.js";
import { withSkeleton as o } from "../../lib/skeleton.js";
import { Card as s } from "../../ui/Card/Card.js";
import { Text as c } from "../../ui/Text/Text.js";
import { hasStatusTag as l, isJoinRelevant as u, isWithinJoinWindow as d, resolveAttendeesDisplay as f, resolveRelevantCount as p } from "./utils.js";
import { MeetingAttendees as m } from "./components/MeetingAttendees.js";
import { MeetingJoinButton as ee } from "./components/MeetingJoinButton.js";
import { MeetingStatusTag as h } from "./components/MeetingStatusTag.js";
import { MeetingSummary as g } from "./components/MeetingSummary.js";
import { useMeetingLabels as te } from "./hooks/useMeetingLabels.js";
import { forwardRef as _ } from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/experimental/F0MeetingCard/F0MeetingCard.tsx
var x = _(function({ state: e, title: t, startsAt: i, endsAt: o, now: _, attendees: x = [], invitedCount: S, presentCount: C, attendeesDisplay: w = "auto", maxAvatars: T = 3, summary: E, join: D, secondaryActions: O, compact: k = !1 }, A) {
	let { meetingCard: j } = r(), M = _ ?? /* @__PURE__ */ new Date(), N = p({
		state: e,
		attendees: x,
		invitedCount: S,
		presentCount: C
	}), { leadLabel: P, timeLabel: F, durationLabel: I, countdownLabel: L, attendeesLabel: R } = te({
		state: e,
		startsAt: i,
		endsAt: o,
		now: M,
		windowMinutes: D?.windowMinutes,
		invitedCount: N,
		presentCount: C
	}), z = f(w, e), B = z === "avatars" && x.length > 0, V = z === "count" ? R : void 0, H = t ?? (e === "inProgress" ? j.inProgressTitle : void 0), U = !t && e === "inProgress", W = k ? [
		L ?? P,
		e === "inProgress" ? void 0 : F,
		V
	].filter(Boolean) : [
		P,
		F,
		I,
		V
	].filter(Boolean), G = u(e) && !!D, K = D?.disabled ?? !d({
		state: e,
		startsAt: i,
		now: M,
		windowMinutes: D?.windowMinutes
	}), q = l({
		state: e,
		hasCountdown: !!L
	}) && !(k && (e === "scheduled" || U)), J = G || !!O?.length, Y = /* @__PURE__ */ b(v, { children: [H && /* @__PURE__ */ y(c, {
		variant: "body",
		content: H,
		className: n("break-words font-medium", e === "cancelled" && "line-through")
	}), W.length > 0 && /* @__PURE__ */ y(c, {
		variant: "description",
		content: W.join(" · ")
	})] }), X = B && /* @__PURE__ */ y(m, {
		attendees: x,
		relevantCount: N,
		maxAvatars: T,
		size: k ? "xs" : "sm"
	}), Z = e === "finished" && E && /* @__PURE__ */ y(g, { summary: E }), Q = q && /* @__PURE__ */ y(h, {
		state: e,
		countdownLabel: L
	}), $ = J && /* @__PURE__ */ b(v, { children: [O?.map((e) => /* @__PURE__ */ y(a, {
		label: e.label,
		icon: e.icon,
		variant: "outline",
		onClick: e.onClick
	}, e.label)), G && D && /* @__PURE__ */ y(ee, {
		join: D,
		disabled: K
	})] });
	return /* @__PURE__ */ y(s, {
		ref: A,
		className: n("rounded-2xl border-f1-border-secondary bg-f1-background p-3 shadow-none", k ? "gap-1.5" : "gap-2.5"),
		"data-testid": "meeting-card",
		children: k ? /* @__PURE__ */ b("div", {
			className: "flex flex-row items-center gap-3",
			children: [/* @__PURE__ */ b("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1.5",
				children: [
					/* @__PURE__ */ b("div", {
						className: "flex flex-row flex-wrap items-baseline gap-1.5",
						children: [Y, Q]
					}),
					X,
					Z
				]
			}), J && /* @__PURE__ */ y("div", {
				className: "flex shrink-0 flex-row items-center gap-2",
				children: $
			})]
		}) : /* @__PURE__ */ b(v, { children: [
			/* @__PURE__ */ y("div", {
				className: "flex min-w-0 flex-col gap-0",
				children: Y
			}),
			X,
			Z,
			(J || q) && /* @__PURE__ */ b("div", {
				className: n("flex flex-row items-center gap-2", J && "-mx-3 -mb-3 mt-0.5 border-0 border-t border-solid border-t-f1-border-secondary px-3 pb-3 pt-3"),
				children: [/* @__PURE__ */ y("div", {
					className: "flex flex-1 flex-row items-center gap-2",
					children: Q
				}), J && /* @__PURE__ */ y("div", {
					className: "flex flex-row items-center gap-2",
					children: $
				})]
			})
		] })
	});
});
x.displayName = "F0MeetingCard";
var S = e(t("F0MeetingCard", o(x, ({ compact: e = !1 }) => /* @__PURE__ */ y(s, {
	className: n("rounded-2xl border-f1-border-secondary bg-f1-background p-3 shadow-none", e ? "gap-1.5" : "gap-2.5"),
	"aria-busy": "true",
	"aria-live": "polite",
	children: e ? /* @__PURE__ */ b("div", {
		className: "flex flex-row items-center gap-3",
		children: [/* @__PURE__ */ b("div", {
			className: "flex flex-1 flex-col gap-1.5",
			children: [/* @__PURE__ */ y(i, { className: "h-4 w-40 rounded-md" }), /* @__PURE__ */ y(i, { className: "h-5 w-20 rounded-md" })]
		}), /* @__PURE__ */ y(i, { className: "h-8 w-20 rounded-md" })]
	}) : /* @__PURE__ */ b(v, { children: [/* @__PURE__ */ b("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ y(i, { className: "h-4 w-40 rounded-md" }), /* @__PURE__ */ y(i, { className: "h-3 w-28 rounded-md" })]
	}), /* @__PURE__ */ b("div", {
		className: "flex flex-row items-center justify-between",
		children: [/* @__PURE__ */ y(i, { className: "h-6 w-20 rounded-md" }), /* @__PURE__ */ y(i, { className: "h-8 w-20 rounded-md" })]
	})] })
}))));
//#endregion
export { S as F0MeetingCard };
