import e from "../../../../icons/app/Cross.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as n } from "../../../../components/F0Button/internal.js";
import { F0AvatarFile as r } from "../../../../components/avatars/F0AvatarFile/F0AvatarFile.js";
import { Spinner as i } from "../../../../ui/Spinner/index.js";
import { documentPreviewKind as a, isVideoFileAttachment as o, withinPreviewSizeLimit as s } from "../utils/attachments.js";
import { ChatSurfaceProvider as c } from "../providers/ChatSurfaceProvider.js";
import { ChatDocumentAttachmentCard as l } from "./ChatDocumentAttachmentCard.js";
import { ChatLocationAttachment as u } from "./ChatLocationAttachment.js";
import { ChatVoiceAttachment as d } from "./ChatVoiceAttachment.js";
import { FadeInImage as f } from "./FadeInImage.js";
import { useEffect as p, useState as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatComposerAttachmentPreview.tsx
var _ = () => /* @__PURE__ */ h("div", {
	className: "shadow-sm pointer-events-none absolute bottom-2 left-2 z-20 flex rounded bg-f1-background p-1",
	"data-testid": "chat-composer-attachment-uploading",
	children: /* @__PURE__ */ h(i, { size: "small" })
}), v = ({ attachment: i, uploading: c, onRemove: v }) => {
	let y = t(), [b, x] = m(!1), S = "url" in i ? i.url : void 0;
	p(() => x(!1), [S]);
	let C = {
		label: y.t("chat.removeNamedFile", { name: i.kind === "location" ? i.name ?? y.chat.location : i.kind === "voice" ? y.chat.voiceNote : i.name }),
		icon: e,
		onClick: v
	};
	if (i.kind === "image") return /* @__PURE__ */ g("figure", {
		"aria-label": i.name,
		"aria-busy": c,
		className: "group/attachment relative m-0 flex h-16 w-16 shrink-0",
		"data-testid": "chat-composer-image-preview",
		children: [
			/* @__PURE__ */ h(f, {
				src: i.thumbnailUrl ?? i.url,
				alt: i.name,
				className: "h-16 w-16 rounded-lg border border-solid border-f1-border-secondary object-cover"
			}),
			/* @__PURE__ */ h("div", {
				className: "absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100",
				children: /* @__PURE__ */ h(n, {
					variant: "outline",
					size: "sm",
					hideLabel: !0,
					label: C.label,
					icon: C.icon,
					onClick: C.onClick
				})
			}),
			c && /* @__PURE__ */ h(_, {}),
			/* @__PURE__ */ h("figcaption", {
				className: "sr-only",
				children: i.name
			})
		]
	});
	if (i.kind === "file") {
		if (o(i) && !b) return /* @__PURE__ */ g("figure", {
			"aria-label": i.name,
			"aria-busy": c,
			className: "group/attachment relative m-0 box-border h-16 w-28 shrink-0 overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary",
			"data-testid": "chat-composer-video-preview",
			children: [
				/* @__PURE__ */ h("video", {
					src: i.url,
					poster: i.thumbnailUrl,
					muted: !0,
					playsInline: !0,
					preload: "auto",
					onError: () => x(!0),
					onLoadedMetadata: (e) => {
						if (!i.thumbnailUrl && e.currentTarget.currentTime === 0) {
							let { duration: t } = e.currentTarget;
							e.currentTarget.currentTime = Number.isFinite(t) ? Math.min(1, t / 2) : 1;
						}
					},
					"aria-hidden": "true",
					className: "pointer-events-none h-full w-full object-cover"
				}),
				/* @__PURE__ */ h("div", {
					className: "absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100",
					children: /* @__PURE__ */ h(n, {
						variant: "outline",
						size: "sm",
						hideLabel: !0,
						label: C.label,
						icon: C.icon,
						onClick: C.onClick
					})
				}),
				c && /* @__PURE__ */ h(_, {}),
				/* @__PURE__ */ h("figcaption", {
					className: "sr-only",
					children: i.name
				})
			]
		});
		let e = a(i);
		return e && s(i, e) ? /* @__PURE__ */ g("div", {
			"aria-busy": c,
			className: "relative flex",
			"data-testid": "chat-composer-document-preview",
			children: [/* @__PURE__ */ h(l, {
				file: i,
				kind: e,
				cornerClass: "rounded-lg",
				action: C,
				previewDisabled: c,
				compact: !0
			}), c && /* @__PURE__ */ h(_, {})]
		}) : /* @__PURE__ */ g("div", {
			"aria-busy": c,
			className: "group/attachment relative box-border flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary",
			"data-testid": "chat-composer-file-preview",
			children: [
				/* @__PURE__ */ h(r, {
					file: {
						name: i.name,
						type: i.mimeType ?? ""
					},
					size: "md"
				}),
				/* @__PURE__ */ h("div", {
					className: "absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100",
					children: /* @__PURE__ */ h(n, {
						variant: "outline",
						size: "sm",
						hideLabel: !0,
						label: C.label,
						icon: C.icon,
						onClick: C.onClick
					})
				}),
				c && /* @__PURE__ */ h(_, {}),
				/* @__PURE__ */ h("span", {
					className: "sr-only",
					children: i.name
				})
			]
		});
	}
	return i.kind === "voice" ? /* @__PURE__ */ g("div", {
		"aria-busy": c,
		className: "group/attachment relative flex",
		"data-testid": "chat-composer-voice-preview",
		children: [
			/* @__PURE__ */ h(d, {
				voice: i,
				cornerClass: "rounded-lg",
				className: "pr-12"
			}),
			/* @__PURE__ */ h("div", {
				className: "absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100",
				children: /* @__PURE__ */ h(n, {
					variant: "outline",
					size: "sm",
					hideLabel: !0,
					label: C.label,
					icon: C.icon,
					onClick: C.onClick
				})
			}),
			c && /* @__PURE__ */ h(_, {})
		]
	}) : /* @__PURE__ */ g("div", {
		"aria-busy": c,
		className: "group/attachment relative flex",
		"data-testid": "chat-composer-location-preview",
		children: [
			/* @__PURE__ */ h(u, {
				location: i,
				cornerClass: "rounded-lg"
			}),
			/* @__PURE__ */ h("div", {
				className: "absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100",
				children: /* @__PURE__ */ h(n, {
					variant: "outline",
					size: "sm",
					hideLabel: !0,
					label: C.label,
					icon: C.icon,
					onClick: C.onClick
				})
			}),
			c && /* @__PURE__ */ h(_, {})
		]
	});
}, y = (e) => /* @__PURE__ */ h(c, {
	surface: "composer",
	children: /* @__PURE__ */ h(v, { ...e })
});
//#endregion
export { y as ChatComposerAttachmentPreview };
