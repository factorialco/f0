import { cn as e } from "../../../../../lib/utils.js";
import t from "../../../../../icons/app/Delete.js";
import { useI18n as n } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../../F0Button/F0Button.js";
import { Spinner as i } from "../../../../../ui/Spinner/index.js";
import { useCallback as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { NodeViewWrapper as l, ReactNodeViewRenderer as u } from "@tiptap/react";
import { mergeAttributes as d } from "@tiptap/core";
import { FileHandler as f } from "@tiptap/extension-file-handler";
import { Image as p } from "@tiptap/extension-image";
//#region src/components/RichText/internal/Extensions/Image/index.tsx
var m = 52428800, h = [
	"image/jpeg",
	"image/png",
	"image/gif",
	"image/webp"
], g = 10, _ = 100, v = ({ node: u, deleteNode: d, selected: f, editor: p, updateAttributes: m }) => {
	let { src: h, alt: v, title: y, uploading: b, width: x } = u.attrs, S = p.isEditable, C = n(), [w, T] = o(!1), E = a((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.clientX, n = x ?? _, r = p.view.dom.clientWidth, i = (e) => {
			let i = (e.clientX - t) / r * 100, a = Math.min(_, Math.max(g, n + i));
			m({ width: Math.round(a) });
		}, a = () => {
			T(!1), document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", a);
		};
		T(!0), document.addEventListener("mousemove", i), document.addEventListener("mouseup", a);
	}, [
		p,
		x,
		m
	]);
	return /* @__PURE__ */ s(l, {
		className: "mb-2",
		children: /* @__PURE__ */ c("div", {
			style: { width: `${x ?? _}%` },
			className: e("image-resizable-wrapper group/image relative rounded-lg", f && "border-2 border-f1-border-selected-bold border-solid", w && "select-none"),
			children: [
				/* @__PURE__ */ s("img", {
					src: h,
					alt: v,
					title: y,
					draggable: !1,
					className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
				}),
				b && /* @__PURE__ */ s("div", {
					className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200",
					children: /* @__PURE__ */ s(i, { size: "medium" })
				}),
				S && !b && /* @__PURE__ */ s("div", {
					className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover/image:opacity-100",
					children: /* @__PURE__ */ s(r, {
						onClick: d,
						label: C.actions.delete,
						icon: t,
						variant: "default",
						hideLabel: !0
					})
				}),
				S && !b && /* @__PURE__ */ s("div", {
					className: e("absolute right-2 top-1/2 -translate-y-1/2 flex cursor-col-resize items-center justify-center", "h-12 w-2 rounded-sm border border-solid border-f1-border bg-f1-foreground-inverse-secondary", "opacity-0 transition-opacity group-hover/image:opacity-100", w && "opacity-100"),
					onMouseDown: E,
					role: "separator",
					"aria-orientation": "vertical",
					"aria-label": "Resize image",
					tabIndex: 0
				})
			]
		})
	});
}, y = p.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			width: {
				default: _,
				parseHTML: (e) => {
					let t = e.style.width;
					return t?.endsWith("%") && parseInt(t, 10) || _;
				},
				renderHTML: (e) => !e.width || e.width === _ ? {} : { style: `width: ${e.width}%` }
			},
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
		return u(v);
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["img", d(this.options.HTMLAttributes, e)];
	}
}).configure({
	inline: !1,
	allowBase64: !0
}), b = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.type.name === "image" && e.attrs["data-upload-id"] === t ? (n = r, !1) : !0), n;
}, x = async (e, t, n, r) => {
	let i = n.maxFileSize ?? m, { onError: a } = n;
	if (!h.includes(t.type)) {
		a?.("invalid-type");
		return;
	}
	if (t.size > i) {
		a?.("file-too-large");
		return;
	}
	let o = URL.createObjectURL(t), s = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`, c = r ?? e.state.selection.anchor;
	e.chain().focus().insertContentAt(c, [{
		type: "image",
		attrs: {
			src: o,
			alt: t.name,
			uploading: !0,
			"data-upload-id": s
		}
	}]).run();
	try {
		let { url: r } = await n.onUpload(t), i = b(e, s);
		i !== null && e.chain().setNodeSelection(i).updateAttributes("image", {
			src: r,
			uploading: !1,
			"data-upload-id": null
		}).run();
	} catch {
		a?.("upload-failed");
		let t = b(e, s);
		t !== null && e.chain().setNodeSelection(t).deleteSelection().run();
	} finally {
		URL.revokeObjectURL(o);
	}
}, S = (e) => f.configure({
	allowedMimeTypes: h,
	onDrop: (t, n, r) => {
		n.forEach((n) => {
			x(t, n, e, r);
		});
	},
	onPaste: (t, n) => {
		n.forEach((n) => {
			x(t, n, e);
		});
	}
}), C = (e, t, n) => {
	x(e, t, n);
};
//#endregion
export { h as DEFAULT_ACCEPTED_TYPES, y as ImageExtension, S as createFileHandlerExtension, C as insertImageFromFile };
