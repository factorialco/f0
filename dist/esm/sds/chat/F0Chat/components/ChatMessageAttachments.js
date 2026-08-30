import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Download.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0FileItem as r } from "../../../../components/F0FileItem/F0FileItem.js";
import { useF0ChatEmit as i } from "../providers/F0ChatProvider.js";
import { attachedKindOf as a, partitionChatAttachments as o } from "../utils/attachments.js";
import { useChatImagePreview as s } from "../providers/ChatUIProvider.js";
import { triggerDownload as c } from "../utils/download.js";
import { ChatDocumentAttachmentCard as l } from "./ChatDocumentAttachmentCard.js";
import "../utils/media-layout.js";
import { ChatLocationAttachment as u } from "./ChatLocationAttachment.js";
import { ChatVoiceAttachment as d } from "./ChatVoiceAttachment.js";
import { messageSurfaceColorClass as f } from "../utils/sender-color.js";
import { ChatMessageMeta as p } from "./ChatMessageMeta.js";
import { bubbleCornerClass as m } from "./ChatBubble.js";
import { albumCells as h } from "../utils/album-layout.js";
import { ChatCardAttachment as g } from "./ChatCardAttachment.js";
import { ChatImageTile as _ } from "./ChatImageTile.js";
import { ChatVideoAttachment as v } from "./ChatVideoAttachment.js";
import { jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatMessageAttachments.tsx
var x = ({ message: x, isMine: S, isFirstOfRun: C = !0, isLastOfRun: w = !0, hasAvatar: T = !1 }) => {
	let E = n(), { openImagePreview: D } = s(), O = i(), k = x.attachments;
	if (!k || k.length === 0) return null;
	let A = f(x.author, S), { images: j, videos: M, documents: N, files: P, locations: F, voices: I, cards: L } = o(k), R = N.length + P.length, z = x.body.trim().length > 0 || x.replyTo || x.deleted ? null : R > 0 || I.length > 0 || L.length > 0 ? "below" : F.length > 0 ? "location" : M.length > 0 ? "video" : j.length > 0 ? "image" : null, B = x.body.trim().length > 0 || !!x.replyTo, V = L.length > 0, H = M.length > 0 || R > 0 || I.length > 0 || V || B || !w, U = m({
		isMine: S,
		hasAvatar: T,
		isFirstOfRun: C,
		isLastOfRun: F.length === 0 && !H
	}), W = F.length > 0 || I.length > 0 || R > 0 || V || B || !w, G = (e) => m({
		isMine: S,
		hasAvatar: T,
		isFirstOfRun: C && j.length === 0 && e === 0,
		isLastOfRun: e === M.length - 1 && !W
	}), K = I.length > 0 || R > 0 || V || B || !w, q = (e) => m({
		isMine: S,
		hasAvatar: T,
		isFirstOfRun: C && j.length === 0 && M.length === 0 && e === 0,
		isLastOfRun: e === F.length - 1 && !K
	}), J = R > 0 || V || B || !w, Y = (e) => m({
		isMine: S,
		hasAvatar: T,
		isFirstOfRun: C && j.length === 0 && M.length === 0 && F.length === 0 && e === 0,
		isLastOfRun: e === I.length - 1 && !J
	}), X = P.length > 0 || V || B || !w, Z = (e) => m({
		isMine: S,
		hasAvatar: T,
		isFirstOfRun: C && j.length === 0 && M.length === 0 && F.length === 0 && I.length === 0 && e === 0,
		isLastOfRun: e === N.length - 1 && !X
	});
	return /* @__PURE__ */ b("div", {
		"data-chat-attachments": "",
		className: e("flex w-full min-w-0 flex-col gap-1", S ? "items-end" : "items-start"),
		children: [
			j.length > 0 && /* @__PURE__ */ y("div", {
				className: e("grid grid-cols-2 overflow-hidden border border-solid border-f1-border-secondary", "w-[24rem] max-w-full", "gap-0.5", U),
				"data-testid": "chat-image-album",
				children: h(j).map((t, n, r) => {
					let i = j[t.index];
					if (!i) return null;
					let a = z === "image" && n === r.length - 1;
					return /* @__PURE__ */ y(_, {
						image: i,
						aspectRatio: t.aspectRatio,
						spanFull: t.span === 2,
						surfaceClassName: A,
						label: E.chat.openImage,
						onOpen: () => {
							D(j, t.index), O.onImageOpened({ count: j.length });
						},
						overlay: t.hiddenCount > 0 ? /* @__PURE__ */ y("span", {
							"aria-hidden": !0,
							className: e("absolute inset-0 flex items-center justify-center text-2xl font-semibold text-f1-foreground-inverse", "bg-[hsl(220_39%_6%/0.55)]"),
							"data-testid": "chat-image-album-more",
							children: `+${t.hiddenCount}`
						}) : a ? /* @__PURE__ */ y(p, {
							message: x,
							placement: "overlay"
						}) : void 0
					}, `${i.url}-${t.index}`);
				})
			}),
			M.map((e, t) => /* @__PURE__ */ y(v, {
				file: e,
				cornerClass: G(t),
				surfaceClassName: A,
				meta: z === "video" && t === M.length - 1 ? /* @__PURE__ */ y(p, {
					message: x,
					placement: "overlay"
				}) : void 0
			}, `${e.url}-${t}`)),
			F.map((e, t) => /* @__PURE__ */ y(u, {
				location: e,
				cornerClass: q(t),
				surfaceClassName: A,
				meta: z === "location" && t === F.length - 1 ? /* @__PURE__ */ y(p, {
					message: x,
					placement: "overlay"
				}) : void 0
			}, `${e.latitude},${e.longitude}-${t}`)),
			I.map((e, t) => /* @__PURE__ */ y(d, {
				voice: e,
				isMine: S,
				cornerClass: Y(t),
				surfaceClassName: A
			}, `${e.url}-${t}`)),
			N.map(({ file: e, kind: t }, n) => /* @__PURE__ */ y(l, {
				file: e,
				kind: t,
				cornerClass: Z(n),
				surfaceClassName: A
			}, `${e.url}-${n}`)),
			L.map((e, t) => /* @__PURE__ */ y(g, { card: e }, `${e.title}-${t}`)),
			P.length > 0 && /* @__PURE__ */ y("div", {
				className: e("flex flex-wrap gap-1", S && "justify-end"),
				children: P.map((e, n) => /* @__PURE__ */ y(r, {
					size: "md",
					file: {
						name: e.name,
						type: e.mimeType ?? ""
					},
					actions: [{
						label: E.chat.download,
						icon: t,
						onClick: () => {
							c(e.url, e.name), O.onAttachmentDownloaded({ kind: a(e) });
						}
					}]
				}, `${e.url}-${n}`))
			}),
			z === "below" && /* @__PURE__ */ y(p, {
				message: x,
				placement: "below"
			})
		]
	});
};
//#endregion
export { x as ChatMessageAttachments };
