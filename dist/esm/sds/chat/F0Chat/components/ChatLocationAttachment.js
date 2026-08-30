import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as r } from "../../../../ui/skeleton.js";
import { useF0ChatEmit as i } from "../providers/F0ChatProvider.js";
import { useChatSurface as a } from "../providers/ChatSurfaceProvider.js";
import { useMountOnVisible as o } from "../hooks/useMountOnVisible.js";
import { CHAT_MEDIA_WIDE_WIDTH_CLASS as s } from "../utils/media-layout.js";
import { Suspense as c, lazy as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import "maplibre-gl/dist/maplibre-gl.css";
var f = l(() => import("./LocationMap.js")), p = 3 / 2, m = ({ latitude: e, longitude: t }) => `https://www.google.com/maps?q=${e},${t}`, h = ({ location: r, cornerClass: l = "rounded-xl", surfaceClassName: h, meta: _ }) => {
	let v = n(), y = i(), b = a(), { ref: x, shouldMount: S } = o();
	return /* @__PURE__ */ u("a", {
		ref: x,
		href: m(r),
		onClick: () => {
			b === "transcript" && y.onLocationOpened();
		},
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": r.name ?? v.chat.location,
		className: e("flex min-w-0 max-w-full flex-col overflow-hidden no-underline", s, "border border-solid border-f1-border bg-f1-background-tertiary", "transition-shadow hover:ring-1 hover:ring-inset hover:ring-f1-border-secondary", t("focus-visible:ring-inset"), l, h),
		"data-testid": "chat-location-attachment",
		children: /* @__PURE__ */ d("div", {
			className: "pointer-events-none relative w-full",
			style: { aspectRatio: p },
			children: [
				S ? /* @__PURE__ */ u(c, {
					fallback: /* @__PURE__ */ u(g, { surface: h }),
					children: /* @__PURE__ */ u(f, {
						latitude: r.latitude,
						longitude: r.longitude
					})
				}) : /* @__PURE__ */ u(g, { surface: h }),
				/* @__PURE__ */ u("div", {
					className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full drop-shadow-md",
					"data-testid": "chat-location-pin",
					children: /* @__PURE__ */ d("svg", {
						width: "27",
						height: "40",
						viewBox: "0 0 24 36",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ u("path", {
							d: "M12 .5C5.66.5.5 5.66.5 12c0 2.79 1.32 5.94 2.96 8.86 3.28 5.83 7.6 11.14 7.77 11.35a1 1 0 0 0 1.54 0c.17-.21 4.49-5.52 7.77-11.35 1.64-2.92 2.96-6.07 2.96-8.86C23.5 5.66 18.34.5 12 .5Z",
							className: "fill-f1-background-accent-bold",
							stroke: "black",
							strokeOpacity: .25
						}), /* @__PURE__ */ u("circle", {
							cx: 12,
							cy: 12,
							r: 4.5,
							fill: "black",
							fillOpacity: .3
						})]
					})
				}),
				_
			]
		})
	});
}, g = ({ surface: t }) => /* @__PURE__ */ u(r, { className: e("h-full w-full rounded-none motion-reduce:animate-none", t) });
//#endregion
export { h as ChatLocationAttachment };
