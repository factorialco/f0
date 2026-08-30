import { MentionList as e } from "./MentionList/index.js";
import { MentionPopover as t } from "./MentionPopover/index.js";
import { jsx as n } from "react/jsx-runtime";
import { ReactRenderer as r } from "@tiptap/react";
import { createRoot as i } from "react-dom/client";
//#region src/components/RichText/internal/Extensions/Mention/suggestion.tsx
function a(a, o, s, c) {
	let l = c?.map((e) => ({
		user: e,
		search: e.label.toLowerCase()
	}));
	return {
		char: "@",
		minLength: 0,
		items: async ({ query: e }) => {
			if (s) try {
				let t = await s(e);
				return o(t || []), t || [];
			} catch {
				return [];
			}
			if (l) {
				let t = e.toLowerCase().trim(), n = t ? l.filter(({ search: e }) => e.includes(t)).map(({ user: e }) => e) : l.map(({ user: e }) => e);
				return o(n), n;
			}
			return a;
		},
		render: () => {
			let a = null, o = null, s = null, c = null, l = () => {
				let e = window.getSelection();
				if (e && e.rangeCount > 0) {
					let t = e.getRangeAt(0), { startContainer: n, startOffset: r } = t;
					if (n.nodeType === Node.TEXT_NODE) {
						let e = (n.textContent || "").lastIndexOf("@", r);
						if (e !== -1) {
							let t = document.createRange();
							return t.setStart(n, e), t.setEnd(n, e + 1), t.getBoundingClientRect();
						}
					}
					return t.getBoundingClientRect();
				}
				return document.body.getBoundingClientRect();
			}, u = (e) => {
				if (e.clientRect) {
					let t = e.clientRect();
					if (t && t.width && t.height) return t;
				}
				return l();
			};
			return {
				onStart: (l) => {
					c = l, a = new r(e, {
						props: {
							items: l.items,
							command: (e) => {
								if (!c) return;
								let { editor: t, range: n } = c;
								t.chain().focus().insertContentAt(n, [{
									type: "mention",
									attrs: {
										id: String(e.id),
										label: e.label,
										image_url: e.image_url,
										href: e.href
									}
								}, {
									type: "text",
									text: " "
								}]).run(), (t.view.dom.ownerDocument.defaultView?.getSelection())?.collapseToEnd();
							}
						},
						editor: l.editor
					});
					let d = u(l);
					s = document.createElement("div"), document.body.appendChild(s), o = i(s), o.render(/* @__PURE__ */ n(t, {
						content: a.element,
						anchorRect: d,
						editor: l.editor
					})), l.editor?.commands.focus();
				},
				onUpdate: (e) => {
					if (c = e, !a || !s || !o) return;
					a.updateProps({ items: e.items });
					let r = u(e);
					o.render(/* @__PURE__ */ n(t, {
						content: a.element,
						anchorRect: r,
						editor: e.editor
					}));
				},
				onKeyDown: (e) => a ? e.event.key === "ArrowUp" || e.event.key === "ArrowDown" ? a.ref?.onKeyDown(e) || !1 : e.event.key === "Escape" ? (c = null, o && s && (o.unmount(), s.remove()), !0) : a.ref?.onKeyDown(e) || !1 : !1,
				onExit() {
					c = null, o && s && (o.unmount(), s.remove()), a?.destroy();
				}
			};
		}
	};
}
//#endregion
export { a as createSuggestionConfig };
