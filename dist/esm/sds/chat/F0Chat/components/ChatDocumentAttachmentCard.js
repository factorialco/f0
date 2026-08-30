"use client";
import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import n from "../../../../icons/app/Download.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as i } from "../../../../ui/skeleton.js";
import { ButtonInternal as a } from "../../../../components/F0Button/internal.js";
import { F0AvatarFile as o } from "../../../../components/avatars/F0AvatarFile/F0AvatarFile.js";
import { F0FileItem as s } from "../../../../components/F0FileItem/F0FileItem.js";
import { useF0ChatEmit as c } from "../providers/F0ChatProvider.js";
import { attachedKindOf as l } from "../utils/attachments.js";
import { useChatDocumentPreview as u } from "../providers/ChatUIProvider.js";
import { useChatRenderConfig as d } from "../providers/ChatRenderConfigProvider.js";
import { useChatSurface as f } from "../providers/ChatSurfaceProvider.js";
import { triggerDownload as p } from "../utils/download.js";
import { ClampText as m } from "./ClampText.js";
import { Suspense as h, lazy as g, useState as _ } from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatDocumentAttachmentCard.tsx
var x = () => import("./ChatPdfThumbnail.js"), S = () => import("./ChatSheetThumbnail.js"), C = () => import("./ChatDocxThumbnail.js"), w = () => import("./ChatTextThumbnail.js"), T = g(x), E = g(S), D = g(C), O = g(w), k = 384, A = 160, j = ({ file: g, kind: x, cornerClass: S = "rounded-xl", action: C, previewDisabled: w = !1, compact: j = !1, surfaceClassName: M }) => {
	let N = r(), { reducedMotion: P } = d(), { openDocumentPreview: F } = u(), I = c(), L = f(), [R, z] = _(!1), [B, V] = _(!1), H = C ?? {
		label: N.t("chat.downloadNamedFile", { name: g.name }),
		icon: n,
		onClick: () => {
			p(g.url, g.name), I.onAttachmentDownloaded({ kind: l(g) });
		}
	}, U = j ? 64 : k, W = j ? "100%" : A;
	return R ? j ? /* @__PURE__ */ b("div", {
		className: e("group/attachment relative box-border flex h-16 w-16 items-center justify-center overflow-hidden border border-solid border-f1-border-secondary bg-f1-background-secondary", S, M),
		"data-testid": "chat-document-attachment",
		children: [
			/* @__PURE__ */ y(o, {
				file: {
					name: g.name,
					type: g.mimeType ?? ""
				},
				size: "md"
			}),
			/* @__PURE__ */ y("div", {
				className: "absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100",
				children: /* @__PURE__ */ y(a, {
					variant: "outline",
					size: "sm",
					hideLabel: !0,
					icon: H.icon,
					label: H.label,
					onClick: H.onClick
				})
			}),
			/* @__PURE__ */ y("span", {
				className: "sr-only",
				children: g.name
			})
		]
	}) : /* @__PURE__ */ y(s, {
		size: "md",
		file: {
			name: g.name,
			type: g.mimeType ?? ""
		},
		actions: [H]
	}) : /* @__PURE__ */ b("div", {
		className: e("group/attachment relative flex max-w-full flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-background", j && "box-border h-16 w-16", S, M),
		style: { width: U },
		"data-testid": "chat-document-attachment",
		children: [
			!j && /* @__PURE__ */ b("div", {
				className: "flex items-center gap-2 px-2 py-2",
				children: [
					/* @__PURE__ */ y(o, {
						file: {
							name: g.name,
							type: g.mimeType ?? ""
						},
						size: "md"
					}),
					/* @__PURE__ */ y(m, {
						className: "grow text-sm font-medium text-f1-foreground",
						children: g.name
					}),
					C && /* @__PURE__ */ y(a, {
						variant: "ghost",
						size: "sm",
						hideLabel: !0,
						icon: C.icon,
						label: C.label,
						onClick: C.onClick
					})
				]
			}),
			/* @__PURE__ */ b("button", {
				type: "button",
				onClick: () => {
					F(g), L === "transcript" && I.onDocumentOpened({ kind: x });
				},
				disabled: w,
				"aria-busy": !B || void 0,
				"aria-label": N.t("chat.openNamedDocument", { name: g.name }),
				className: e("relative block w-full overflow-hidden border-0 border-solid border-f1-border-secondary bg-f1-background-secondary p-0 transition-opacity enabled:hover:opacity-90", !j && "border-t", t("focus-visible:ring-inset"), M),
				style: { height: W },
				children: [/* @__PURE__ */ y(i, { className: e("absolute inset-0 h-full w-full rounded-none motion-reduce:animate-none", M) }), /* @__PURE__ */ y("div", {
					className: e("relative", !P && "transition-opacity duration-200", B ? "opacity-100" : "opacity-0"),
					"data-testid": "chat-document-snapshot",
					children: /* @__PURE__ */ b(h, {
						fallback: null,
						children: [
							x === "pdf" && /* @__PURE__ */ y(T, {
								url: g.url,
								width: U - 2,
								onError: () => z(!0),
								onRendered: () => V(!0)
							}),
							x === "sheet" && /* @__PURE__ */ y(E, {
								url: g.url,
								onError: () => z(!0),
								onRendered: () => V(!0)
							}),
							x === "docx" && /* @__PURE__ */ y(D, {
								url: g.url,
								width: U - 2,
								onError: () => z(!0),
								onRendered: () => V(!0)
							}),
							x === "text" && /* @__PURE__ */ y(O, {
								url: g.url,
								onError: () => z(!0),
								onRendered: () => V(!0)
							})
						]
					})
				})]
			}),
			j && C && /* @__PURE__ */ b(v, { children: [/* @__PURE__ */ y("div", {
				className: "absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100",
				children: /* @__PURE__ */ y(a, {
					variant: "outline",
					size: "sm",
					hideLabel: !0,
					icon: C.icon,
					label: C.label,
					onClick: C.onClick
				})
			}), /* @__PURE__ */ y("span", {
				className: "sr-only",
				children: g.name
			})] })
		]
	});
};
//#endregion
export { j as ChatDocumentAttachmentCard };
