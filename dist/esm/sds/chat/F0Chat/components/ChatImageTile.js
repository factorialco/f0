import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { useChatRenderConfig as n } from "../providers/ChatRenderConfigProvider.js";
import { FadeInImage as r } from "./FadeInImage.js";
import { useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatImageTile.tsx
var s = ({ image: s, aspectRatio: c, spanFull: l, surfaceClassName: u, label: d, onOpen: f, overlay: p }) => {
	let { reducedMotion: m } = n(), [h, g] = i(!1);
	return /* @__PURE__ */ o("button", {
		type: "button",
		onClick: f,
		style: { aspectRatio: c },
		className: e("relative flex overflow-hidden p-0 transition-opacity hover:opacity-90", t("focus-visible:ring-inset"), l && "col-span-2", u),
		"aria-label": d,
		"data-testid": "chat-image-attachment",
		children: [
			s.blurUrl && !h && /* @__PURE__ */ a("img", {
				src: s.blurUrl,
				alt: "",
				"aria-hidden": !0,
				className: "absolute inset-0 h-full w-full scale-105 object-cover blur-md",
				"data-testid": "chat-image-blur"
			}),
			/* @__PURE__ */ a(r, {
				src: s.thumbnailUrl ?? s.url,
				alt: s.name,
				eager: !0,
				className: e("h-full w-full object-cover", s.blurUrl && !m && "duration-300"),
				onLoadedChange: g
			}),
			p
		]
	});
};
//#endregion
export { s as ChatImageTile };
