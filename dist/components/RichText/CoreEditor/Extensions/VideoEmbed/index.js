import { jsx as o, jsxs as m } from "react/jsx-runtime";
import { Node as u, nodePasteRule as i, mergeAttributes as p } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
import { ReactNodeViewRenderer as v, NodeViewWrapper as b } from "../../../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import f from "../../../../../icons/app/Delete.js";
import "../../../../../icons/app/Menu.js";
import { cn as w } from "../../../../../lib/utils.js";
import { useI18n as h } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as y } from "../../../../F0Button/F0Button.js";
const E = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/, g = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/, I = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm, N = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm;
function d(r) {
  const e = r.match(E);
  if (e)
    return {
      provider: "youtube",
      videoId: e[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${e[1]}`
    };
  const t = r.match(g);
  return t ? {
    provider: "vimeo",
    videoId: t[1],
    embedUrl: `https://player.vimeo.com/video/${t[1]}`
  } : null;
}
const U = ({
  node: r,
  deleteNode: e,
  selected: t,
  editor: a
}) => {
  const { src: s, provider: l } = r.attrs, n = a.isEditable, c = h();
  return /* @__PURE__ */ o(b, { className: "mb-2", children: /* @__PURE__ */ m(
    "div",
    {
      className: w(
        "video-embed-wrapper relative overflow-hidden rounded-lg",
        t && "border-2 border-solid border-f1-border-selected-bold"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ o(
          "iframe",
          {
            src: s,
            title: `${l} video`,
            className: "absolute inset-0 h-full w-full border-0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0
          }
        ) }),
        n && /* @__PURE__ */ o("div", { className: "dark absolute right-2 top-2", children: /* @__PURE__ */ o(
          y,
          {
            onClick: e,
            label: c.actions.delete,
            icon: f,
            variant: "outline",
            hideLabel: !0,
            size: "sm"
          }
        ) })
      ]
    }
  ) });
}, k = u.create({
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
    return [
      {
        tag: "div[data-video-embed]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return [
      "div",
      p(r, { "data-video-embed": "" }),
      [
        "iframe",
        {
          src: r.src,
          frameborder: "0",
          allowfullscreen: "true",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          style: "width:100%;aspect-ratio:16/9;"
        }
      ]
    ];
  },
  addNodeView() {
    return v(U);
  },
  addCommands() {
    return {
      setVideoEmbed: ({ src: r }) => ({ commands: e }) => {
        const t = d(r);
        return t ? e.insertContent({
          type: this.name,
          attrs: {
            src: t.embedUrl,
            provider: t.provider,
            videoId: t.videoId
          }
        }) : !1;
      }
    };
  },
  addPasteRules() {
    return [
      i({
        find: I,
        type: this.type,
        getAttributes: (r) => {
          const e = d(r[0]);
          return e ? {
            src: e.embedUrl,
            provider: e.provider,
            videoId: e.videoId
          } : !1;
        }
      }),
      i({
        find: N,
        type: this.type,
        getAttributes: (r) => {
          const e = d(r[0]);
          return e ? {
            src: e.embedUrl,
            provider: e.provider,
            videoId: e.videoId
          } : !1;
        }
      })
    ];
  }
});
export {
  k as VideoEmbedExtension,
  d as parseVideoUrl
};
