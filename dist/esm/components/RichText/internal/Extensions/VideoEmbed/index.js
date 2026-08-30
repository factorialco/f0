import { cn as e } from "../../../../../lib/utils.js";
import t from "../../../../../icons/app/Delete.js";
import { useI18n as n } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../../F0Button/F0Button.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { NodeViewWrapper as o, ReactNodeViewRenderer as s } from "@tiptap/react";
import { Node as c, mergeAttributes as l, nodePasteRule as u } from "@tiptap/core";
//#region src/components/RichText/internal/Extensions/VideoEmbed/index.tsx
var d = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/, f = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/, p = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm, m = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm;
function h(e) {
	let t = e.match(d);
	if (t) return {
		provider: "youtube",
		videoId: t[1],
		embedUrl: `https://www.youtube-nocookie.com/embed/${t[1]}`
	};
	let n = e.match(f);
	return n ? {
		provider: "vimeo",
		videoId: n[1],
		embedUrl: `https://player.vimeo.com/video/${n[1]}`
	} : null;
}
var g = ({ node: s, deleteNode: c, selected: l, editor: u }) => {
	let { src: d, provider: f } = s.attrs, p = u.isEditable, m = n();
	return /* @__PURE__ */ i(o, {
		className: "mb-2",
		children: /* @__PURE__ */ a("div", {
			className: e("video-embed-wrapper relative overflow-hidden rounded-lg", l && "border-2 border-solid border-f1-border-selected-bold"),
			children: [/* @__PURE__ */ i("div", {
				className: "relative w-full",
				style: { paddingBottom: "56.25%" },
				children: /* @__PURE__ */ i("iframe", {
					src: d,
					title: `${f} video`,
					className: "absolute inset-0 h-full w-full border-0",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: !0
				})
			}), p && /* @__PURE__ */ i("div", {
				className: "dark absolute right-2 top-2",
				children: /* @__PURE__ */ i(r, {
					onClick: c,
					label: m.actions.delete,
					icon: t,
					variant: "outline",
					hideLabel: !0,
					size: "sm"
				})
			})]
		})
	});
}, _ = c.create({
	name: "videoEmbed",
	group: "block",
	atom: !0,
	draggable: !0,
	addAttributes() {
		return {
			src: { default: null },
			provider: { default: null },
			videoId: { default: null }
		};
	},
	parseHTML() {
		return [{ tag: "div[data-video-embed]" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"div",
			l(e, { "data-video-embed": "" }),
			["iframe", {
				src: e.src,
				frameborder: "0",
				allowfullscreen: "true",
				allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
				style: "width:100%;aspect-ratio:16/9;"
			}]
		];
	},
	addNodeView() {
		return s(g);
	},
	addCommands() {
		return { setVideoEmbed: ({ src: e }) => ({ commands: t }) => {
			let n = h(e);
			return n ? t.insertContent({
				type: this.name,
				attrs: {
					src: n.embedUrl,
					provider: n.provider,
					videoId: n.videoId
				}
			}) : !1;
		} };
	},
	addPasteRules() {
		return [u({
			find: p,
			type: this.type,
			getAttributes: (e) => {
				let t = h(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		}), u({
			find: m,
			type: this.type,
			getAttributes: (e) => {
				let t = h(e[0]);
				return t ? {
					src: t.embedUrl,
					provider: t.provider,
					videoId: t.videoId
				} : !1;
			}
		})];
	}
});
//#endregion
export { _ as VideoEmbedExtension, h as parseVideoUrl };
