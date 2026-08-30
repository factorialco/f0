import { getGroupedCommands as e } from "./AvailableCommands.js";
import { CommandList as t } from "./CommandList.js";
import "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "@radix-ui/react-popover";
import { Extension as a, ReactRenderer as o } from "@tiptap/react";
import { createRoot as s } from "react-dom/client";
import { Suggestion as c } from "@tiptap/suggestion";
//#region src/components/RichText/internal/Extensions/SlashCommand/index.tsx
var l = ({ aiBlockConfig: l, translations: u, imageUploadConfig: d }) => {
	let f = e({
		aiBlockConfig: l,
		translations: u,
		imageUploadConfig: d
	}), p = f.flatMap((e) => e.commands).map((e) => ({
		item: e,
		search: e.title.toLowerCase()
	})), m = (e) => {
		let t = e.toLowerCase().trim();
		return t ? p.filter(({ search: e }) => e.includes(t)).map(({ item: e }) => e) : p.map(({ item: e }) => e);
	}, h = (e) => {
		if (!e || !e.trim()) return f;
		let t = e.toLowerCase().trim();
		return f.map((e) => ({
			...e,
			commands: e.commands.filter((e) => e.title.toLowerCase().includes(t))
		})).filter((e) => e.commands.length > 0);
	};
	return a.create({
		name: "slashCommand",
		addOptions() {
			return { suggestion: {
				char: "/",
				allowSpaces: !0,
				allowedPrefixes: [" ", "\n"],
				startOfLine: !1,
				command: ({ editor: e, range: t, props: n }) => {
					let { state: r } = e, { from: i, to: a } = r.selection, o = r.doc.resolve(i), s = o.parent.textBetween(Math.max(0, o.parentOffset - 50), o.parentOffset, void 0, "￼").lastIndexOf("/");
					if (s !== -1) {
						let t = i - (o.parentOffset - s), n = a;
						e.chain().focus().deleteRange({
							from: t,
							to: n
						}).run();
					} else e.chain().focus().deleteRange(t).run();
					n.command(e);
				}
			} };
		},
		addProseMirrorPlugins() {
			return [c({
				editor: this.editor,
				...this.options.suggestion,
				items: ({ query: e }) => m(e),
				render: () => {
					let e = null, a = null, c = null, l = () => {
						let e = window.getSelection();
						if (e && e.rangeCount > 0) {
							let t = e.getRangeAt(0), { startContainer: n, startOffset: r } = t;
							if (n.nodeType === Node.TEXT_NODE) {
								let e = (n.textContent || "").lastIndexOf("/", r);
								if (e !== -1) {
									let t = document.createRange();
									return t.setStart(n, e), t.setEnd(n, e + 1), t.getBoundingClientRect();
								}
							}
							return t.getBoundingClientRect();
						}
						return document.body.getBoundingClientRect();
					}, u = (e) => {
						if (e) {
							let t = e();
							if (t && t.width && t.height) return t;
						}
						return l();
					}, d = ({ content: e, anchorRect: t }) => {
						let a = {
							position: "absolute",
							top: t.bottom + window.scrollY,
							left: t.left + window.scrollX,
							width: 0,
							height: 0
						};
						return /* @__PURE__ */ r(i.Root, {
							open: !0,
							modal: !1,
							children: [
								/* @__PURE__ */ n("div", { style: a }),
								/* @__PURE__ */ n(i.Anchor, {
									asChild: !0,
									children: /* @__PURE__ */ n("div", { style: a })
								}),
								/* @__PURE__ */ n(i.Content, {
									side: "bottom",
									align: "start",
									sideOffset: 15,
									collisionPadding: 10,
									style: { zIndex: 9999 },
									onOpenAutoFocus: (e) => {
										e.preventDefault();
									},
									onCloseAutoFocus: (e) => {
										e.preventDefault();
									},
									children: /* @__PURE__ */ n("div", { ref: (t) => {
										t && e.parentNode !== t && t.appendChild(e);
									} })
								})
							]
						});
					};
					return {
						onStart: (r) => {
							if (r.items.length === 0) return;
							e = new o(t, {
								props: {
									items: r.items,
									groups: h(r.query),
									command: r.command
								},
								editor: r.editor
							});
							let i = u(r.clientRect);
							c = document.createElement("div"), document.body.appendChild(c), a = s(c), a.render(/* @__PURE__ */ n(d, {
								content: e.element,
								anchorRect: i,
								editor: r.editor
							}));
						},
						onUpdate: (t) => {
							if (!(!e || !c || !a)) {
								if (e.updateProps({
									items: t.items,
									groups: h(t.query)
								}), t.items.length === 0) c && (c.style.display = "none");
								else {
									c && (c.style.display = "");
									let r = u(t.clientRect);
									a.render(/* @__PURE__ */ n(d, {
										content: e.element,
										anchorRect: r,
										editor: t.editor
									}));
								}
							}
						},
						onKeyDown: (t) => {
							if (t.event.key === "Escape") return a && c && (a.unmount(), c.remove()), !0;
							let n = e?.ref;
							return n && typeof n == "object" && "onKeyDown" in n && typeof n.onKeyDown == "function" && n.onKeyDown(t) || !1;
						},
						onExit() {
							a && c && (a.unmount(), c.remove()), e?.destroy();
						}
					};
				}
			})];
		}
	});
};
//#endregion
export { l as createSlashCommandExtension };
