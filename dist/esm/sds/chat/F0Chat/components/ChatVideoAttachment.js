import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Download.js";
import n from "../../../../icons/app/SolidPlay.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as i } from "../../../../ui/skeleton.js";
import { F0FileItem as a } from "../../../../components/F0FileItem/F0FileItem.js";
import { useF0ChatEmit as o } from "../providers/F0ChatProvider.js";
import { formatFileSize as s } from "../utils/attachments.js";
import { triggerDownload as c } from "../utils/download.js";
import { CHAT_MEDIA_OVERLAY_CLASS as l, CHAT_MEDIA_WIDTH_CLASS as u, CHAT_VIDEO_SURFACE_CLASS as d } from "../utils/media-layout.js";
import { FadeInImage as f } from "./FadeInImage.js";
import { Suspense as p, lazy as m, useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
var v = m(() => import("../../../../components/F0VideoPlayer/index.js").then((e) => ({ default: e.F0VideoPlayer }))), y = ({ file: i, cornerClass: f, className: m, surfaceClassName: y, meta: x }) => {
	let S = r(), C = o(), [w, T] = h(!1), [E, D] = h(!1), O = i.size == null ? null : s(i.size), k = {
		label: S.t("chat.downloadNamedFile", { name: i.name }),
		icon: t,
		onClick: () => {
			c(i.url, i.name), C.onAttachmentDownloaded({ kind: "video" });
		}
	};
	return w ? /* @__PURE__ */ g(a, {
		size: "md",
		file: {
			name: i.name,
			type: i.mimeType ?? ""
		},
		actions: [k]
	}) : /* @__PURE__ */ _("figure", {
		"aria-label": i.name,
		"aria-busy": !E || void 0,
		className: e("group/video relative m-0 aspect-video max-w-full overflow-hidden", u, d, f, m),
		onErrorCapture: (e) => {
			e.target instanceof HTMLVideoElement && T(!0);
		},
		onLoadedDataCapture: (e) => {
			e.target instanceof HTMLVideoElement && D(!0);
		},
		"data-testid": "chat-video-attachment",
		children: [
			/* @__PURE__ */ _("div", {
				className: e("pointer-events-none absolute inset-0 transition-opacity duration-150 motion-reduce:transition-none", E && "opacity-0"),
				"aria-hidden": E ? !0 : void 0,
				"data-testid": "chat-video-placeholder",
				children: [
					/* @__PURE__ */ g(b, {
						name: i.name,
						poster: i.thumbnailUrl,
						announce: !E,
						surfaceClassName: y
					}),
					/* @__PURE__ */ g("span", { className: "absolute inset-0 bg-[hsl(0_0%_0%/0.2)]" }),
					/* @__PURE__ */ g("span", {
						className: e("absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-f1-foreground-inverse", l),
						children: /* @__PURE__ */ g(n, { className: "size-6" })
					}),
					O && /* @__PURE__ */ g("span", {
						className: e("absolute bottom-2 left-2 rounded-full px-2 py-0.5 text-sm font-medium text-f1-foreground-inverse", "bg-[hsl(220_39%_6%/0.6)]"),
						"data-testid": "chat-video-size",
						children: O
					})
				]
			}),
			/* @__PURE__ */ g("div", {
				className: "relative z-10 h-full w-full",
				"data-testid": "chat-video-player-shell",
				children: /* @__PURE__ */ g(p, {
					fallback: null,
					children: /* @__PURE__ */ g(v, {
						src: i.url,
						ariaLabel: S.t("chat.videoPlayerLabel", { name: i.name }),
						poster: i.thumbnailUrl,
						content: i.videoContent,
						defaultLanguage: i.videoDefaultLanguage,
						silent: i.videoSilent,
						download: {
							label: k.label,
							onClick: k.onClick
						},
						"data-testid": "chat-video-player"
					})
				})
			}),
			x && /* @__PURE__ */ g("span", {
				className: "pointer-events-none absolute inset-0 z-20 opacity-100 transition-opacity duration-150 group-hover/video:opacity-0 motion-reduce:transition-none",
				children: x
			}),
			/* @__PURE__ */ g("figcaption", {
				className: "sr-only",
				children: i.name
			})
		]
	});
}, b = ({ name: t, poster: n, announce: a = !0, surfaceClassName: o }) => {
	let s = r();
	return /* @__PURE__ */ g("div", {
		role: a ? "status" : void 0,
		"aria-label": a ? s.t("chat.loadingVideo", { name: t }) : void 0,
		"aria-hidden": !a || void 0,
		className: "relative h-full w-full",
		children: n ? /* @__PURE__ */ g(f, {
			src: n,
			alt: "",
			"aria-hidden": "true",
			className: "h-full w-full object-contain"
		}) : /* @__PURE__ */ g(i, { className: e("h-full w-full", a ? "motion-reduce:animate-none" : "animate-none", o) })
	});
};
//#endregion
export { y as ChatVideoAttachment };
