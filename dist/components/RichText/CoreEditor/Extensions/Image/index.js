import { jsx as s, jsxs as H } from "react/jsx-runtime";
import { mergeAttributes as S } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
import { FileHandler as z } from "../../../../../node_modules/.pnpm/@tiptap_extension-file-handler@3.15.3_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_extensio_a463aqgyzqa2ozfpnubi2k2rha/node_modules/@tiptap/extension-file-handler/dist/index.js";
import { Image as U } from "../../../../../node_modules/.pnpm/@tiptap_extension-image@2.27.2_@tiptap_core@2.24.0_@tiptap_pm@2.24.0_/node_modules/@tiptap/extension-image/dist/index.js";
import { ReactNodeViewRenderer as A, NodeViewWrapper as D } from "../../../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import { useState as F, useCallback as P } from "react";
import { Spinner as W } from "../../../../../ui/Spinner/index.js";
import _ from "../../../../../icons/app/Delete.js";
import "../../../../../icons/app/Menu.js";
import { cn as v } from "../../../../../lib/utils.js";
import { useI18n as j } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as X } from "../../../../F0Button/F0Button.js";
const k = 50 * 1024 * 1024, E = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp"
], C = 10, d = 100, V = ({
  node: e,
  deleteNode: t,
  selected: r,
  editor: a,
  updateAttributes: l
}) => {
  const { src: c, alt: f, title: u, uploading: m, width: o } = e.attrs, n = a.isEditable, i = j(), [p, g] = F(!1), M = P(
    (h) => {
      h.preventDefault(), h.stopPropagation();
      const L = h.clientX, T = o ?? d, N = a.view.dom.clientWidth, w = (I) => {
        const x = (I.clientX - L) / N * 100, R = Math.min(
          d,
          Math.max(C, T + x)
        );
        l({ width: Math.round(R) });
      }, y = () => {
        g(!1), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", y);
      };
      g(!0), document.addEventListener("mousemove", w), document.addEventListener("mouseup", y);
    },
    [a, o, l]
  );
  return /* @__PURE__ */ s(D, { className: "mb-2", children: /* @__PURE__ */ H(
    "div",
    {
      style: { width: `${o ?? d}%` },
      className: v(
        "image-resizable-wrapper group/image relative rounded-lg",
        r && "border-2 border-f1-border-selected-bold border-solid",
        p && "select-none"
      ),
      children: [
        /* @__PURE__ */ s(
          "img",
          {
            src: c,
            alt: f,
            title: u,
            draggable: !1,
            className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
          }
        ),
        m && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200", children: /* @__PURE__ */ s(W, { size: "medium" }) }),
        n && !m && /* @__PURE__ */ s("div", { className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100", children: /* @__PURE__ */ s(
          X,
          {
            onClick: t,
            label: i.actions.delete,
            icon: _,
            variant: "default",
            hideLabel: !0
          }
        ) }),
        n && !m && /* @__PURE__ */ s(
          "div",
          {
            className: v(
              "absolute right-2 top-1/2 -translate-y-1/2 flex cursor-col-resize items-center justify-center",
              "h-12 w-2 rounded-sm border border-solid border-f1-border bg-f1-foreground-inverse-secondary",
              "opacity-0 transition-opacity group-hover/image:opacity-100",
              p && "opacity-100"
            ),
            onMouseDown: M,
            role: "separator",
            "aria-orientation": "vertical",
            "aria-label": "Resize image",
            tabIndex: 0
          }
        )
      ]
    }
  ) });
}, ae = U.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: d,
        parseHTML: (e) => {
          const t = e.style.width;
          return t?.endsWith("%") && parseInt(t, 10) || d;
        },
        renderHTML: (e) => !e.width || e.width === d ? {} : { style: `width: ${e.width}%` }
      },
      // We need it to track the uploading state and visual feedback
      uploading: {
        default: !1,
        renderHTML: () => ({}),
        parseHTML: () => !1
      },
      "data-upload-id": {
        default: null,
        renderHTML: () => ({}),
        parseHTML: () => null
      }
    };
  },
  addNodeView() {
    return A(V);
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["img", S(this.options.HTMLAttributes, e)];
  }
}).configure({
  inline: !1,
  allowBase64: !0
}), b = async (e, t, r, a) => {
  const l = r.maxFileSize ?? k, { onError: c } = r;
  if (!E.includes(t.type)) {
    c?.("invalid-type");
    return;
  }
  if (t.size > l) {
    c?.("file-too-large");
    return;
  }
  const f = URL.createObjectURL(t), u = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`, m = a ?? e.state.selection.anchor;
  e.chain().focus().insertContentAt(m, [
    {
      type: "image",
      attrs: {
        src: f,
        alt: t.name,
        uploading: !0,
        "data-upload-id": u
      }
    }
  ]).run();
  try {
    const { url: o } = await r.onUpload(t), { doc: n } = e.state;
    let i = null;
    n.descendants((p, g) => p.type.name === "image" && p.attrs["data-upload-id"] === u ? (i = g, !1) : !0), i !== null && e.chain().setNodeSelection(i).updateAttributes("image", {
      src: o,
      uploading: !1,
      "data-upload-id": null
    }).run();
  } catch {
    c?.("upload-failed");
    const { doc: o } = e.state;
    o.descendants((n, i) => n.type.name === "image" && n.attrs["data-upload-id"] === u ? (e.chain().setNodeSelection(i).deleteSelection().run(), !1) : !0);
  } finally {
    URL.revokeObjectURL(f);
  }
}, oe = (e) => z.configure({
  allowedMimeTypes: E,
  onDrop: (t, r, a) => {
    r.forEach((l) => {
      b(t, l, e, a);
    });
  },
  onPaste: (t, r) => {
    r.forEach((a) => {
      b(t, a, e);
    });
  }
}), ne = (e, t, r) => {
  b(e, t, r);
};
export {
  E as DEFAULT_ACCEPTED_TYPES,
  ae as ImageExtension,
  oe as createFileHandlerExtension,
  ne as insertImageFromFile
};
