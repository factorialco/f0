import { Skeleton as e } from "../../../../../ui/skeleton.js";
import { withSkeleton as t } from "../../../../../lib/skeleton.js";
import { formatTime as n } from "../../../../../lib/date.js";
import { useDateFnsLocale as r } from "../../../../../lib/providers/l10n/use-date-fns-locale.js";
import { CalendarEvent as i } from "../../../../../experimental/Widgets/Content/CalendarEvent/index.js";
import { isVideo as a } from "../CommunityPost/video.js";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
import { f1Colors as l } from "@factorialco/f0-core";
//#region src/sds/Home/Communities/Post/PostEvent/index.tsx
var u = ({ title: t, mediaUrl: u, place: d, date: f }) => {
	let p = r(), m = n(f, p);
	return d && (m = `${m} · ${d}`), /* @__PURE__ */ c("div", {
		className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary",
		children: [u && /* @__PURE__ */ s("div", {
			className: "relative aspect-video w-full overflow-hidden rounded-md",
			children: a(u) ? /* @__PURE__ */ s("video", {
				controls: !0,
				className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
				onClick: (e) => {
					e.stopPropagation();
				},
				children: /* @__PURE__ */ s("source", { src: u })
			}) : /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ s("img", {
				src: u,
				role: "presentation",
				loading: "lazy",
				className: "aspect-video h-full w-full object-cover"
			}), /* @__PURE__ */ s(e, { className: "absolute inset-0 h-full w-full" })] })
		}), /* @__PURE__ */ s(i, {
			title: t,
			description: m,
			color: l.special.highlight,
			isPending: !1,
			toDate: f,
			noBackground: !0
		})]
	});
}, d = () => /* @__PURE__ */ c("div", {
	className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
	role: "status",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(e, { className: "aspect-video h-full w-full rounded-lg" }) }), /* @__PURE__ */ c("div", {
		className: "flex h-full flex-row gap-3 p-2",
		children: [/* @__PURE__ */ s(e, { className: "w-1 shrink-0 self-stretch rounded-full" }), /* @__PURE__ */ c("div", {
			className: "flex grow flex-col gap-1.5 py-1",
			children: [/* @__PURE__ */ s(e, { className: "mt-px h-3 w-1/2" }), /* @__PURE__ */ s(e, { className: "mb-px h-3 w-1/4" })]
		})]
	})]
}), f = t(u, d);
//#endregion
export { u as BasePostEvent, f as PostEvent, d as PostEventSkeleton };
