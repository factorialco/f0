import { Skeleton as e } from "../../../../../ui/skeleton.js";
import { F0Button as t } from "../../../../F0Button/F0Button.js";
import { ColorExtension as n, DetailsContentExtension as r, DetailsExtension as i, DetailsSummaryExtension as a, HighlightExtension as o, LinkExtension as s, StarterKitExtension as c, TaskListExtension as l, TextAlignExtension as u, TextStyleExtension as d, TypographyExtension as f, UnderlineExtension as p } from "../configured.js";
import { F0AiBanner as m } from "../../../../../kits/ai/Banners/F0AiBanner/index.js";
import { CustomTaskExtension as h } from "../CustomTask/index.js";
import { useCallback as g, useEffect as _, useMemo as v, useState as y } from "react";
import { jsx as b, jsxs as x } from "react/jsx-runtime";
import { NodeViewContent as S, NodeViewWrapper as C, ReactNodeViewRenderer as w } from "@tiptap/react";
import { Node as T, generateHTML as E } from "@tiptap/core";
//#region src/components/RichText/internal/Extensions/AIBlock/index.tsx
var D = [
	c,
	p,
	d,
	n,
	f,
	l,
	h,
	o,
	u,
	s,
	i,
	a,
	r
], O = (e) => {
	if (!e?.content) return "";
	try {
		return E(e.content, D);
	} catch {
		return "";
	}
}, k = (e, t) => v(() => {
	if (t?.selectedTitle || t?.selectedEmoji) return {
		title: t.selectedTitle || e.title,
		emoji: t.selectedEmoji
	};
	let n = e.buttons?.find((e) => e.type === t?.selectedAction);
	return n ? {
		title: n.label,
		emoji: n.emoji
	} : { title: e.title };
}, [t, e]), A = (e, t) => {
	let [n, r] = y(!1);
	return {
		isLoading: n,
		handleClick: g(async (n) => {
			let i = e.buttons?.find((e) => e.type === n), a = {
				selectedAction: n,
				selectedTitle: i?.label || n,
				selectedEmoji: i?.emoji || "🤖",
				isEditable: i?.editable ?? !1
			};
			r(!0), t({ data: {
				...a,
				content: null
			} });
			try {
				let r = await e.onClick(n);
				t({ data: {
					...a,
					content: r
				} });
			} catch (e) {
				console.error("AIBlock error:", e), t({ data: {
					...a,
					content: null
				} });
			} finally {
				r(!1);
			}
		}, [e, t])
	};
}, j = (e, t, n) => {
	_(() => {
		if (!(!n?.selectedAction || !e?.buttons) && (!n?.selectedTitle || !n?.selectedEmoji || n?.isEditable === void 0)) {
			let r = e.buttons.find((e) => e.type === n.selectedAction);
			r && t({ data: {
				...n,
				selectedTitle: r.label,
				selectedEmoji: r.emoji,
				isEditable: r.editable ?? !1
			} });
		}
	}, [
		n,
		e,
		t
	]);
}, M = (e, t, n) => {
	_(() => {
		e?.shouldExecute && e?.selectedAction && t && n && (n({ data: {
			...e,
			shouldExecute: !1
		} }), t(e.selectedAction));
	}, [
		t,
		n,
		e
	]);
}, N = (e, t, n, r) => {
	_(() => {
		if (!r?.content || !r?.isEditable || !e || !n) return;
		let i = n();
		i !== void 0 && (t(), r.content && e.chain().focus().setTextSelection(i).insertContent(r.content).run());
	}, [
		r,
		e,
		n,
		t
	]);
}, P = ({ config: e, isLoading: n, onButtonClick: r }) => /* @__PURE__ */ x("div", {
	className: "flex flex-col gap-2",
	children: [e.title && /* @__PURE__ */ b("div", {
		className: "text-f1-foreground-secondary",
		children: e.title
	}), /* @__PURE__ */ b("div", {
		className: "relative flex flex-row flex-wrap items-center gap-2",
		children: e.buttons?.map((e, i) => /* @__PURE__ */ b(t, {
			onClick: () => r(e.type),
			variant: "outline",
			icon: e.icon,
			label: e.label,
			disabled: n
		}, i))
	})]
}), F = ({ isEditable: t }) => t ? /* @__PURE__ */ x("div", {
	className: "flex flex-col gap-2",
	children: [
		/* @__PURE__ */ b(e, { className: "h-4 w-1/2 rounded-md" }),
		/* @__PURE__ */ b(e, { className: "h-4 w-full rounded-md" }),
		/* @__PURE__ */ b(e, { className: "h-4 w-3/4 rounded-md" }),
		/* @__PURE__ */ b(e, { className: "h-4 w-1/3 rounded-md" })
	]
}) : /* @__PURE__ */ b(m.Skeleton, { compact: !0 }), I = ({ node: e, updateAttributes: t, deleteNode: n, extension: r, editor: i, getPos: a }) => {
	let o = e.attrs.data, s = r.options.currentConfig || e.attrs.config, { title: c } = k(s, o), { isLoading: l, handleClick: u } = A(s, t), d = !!(o?.selectedAction && !o?.content), f = l || d, p = O(o);
	if (N(i, n, a, o), j(s, t, o), M(o, u, t), !o || !s || !s.buttons?.length) return null;
	let h = !!o?.content, g = !!(o?.selectedTitle || o?.selectedAction) && h && !o?.isEditable;
	return /* @__PURE__ */ b(C, {
		contentEditable: !1,
		children: /* @__PURE__ */ x("div", {
			className: "mb-3",
			children: [f ? /* @__PURE__ */ b(F, { isEditable: o?.isEditable }) : g ? /* @__PURE__ */ b(m, {
				title: c,
				content: p,
				onClose: () => n()
			}) : /* @__PURE__ */ b("div", {
				className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ b(P, {
					config: s,
					isLoading: f,
					onButtonClick: u
				})
			}), /* @__PURE__ */ b(S, { style: { display: "none" } })]
		})
	});
}, L = T.create({
	name: "aiBlock",
	group: "block",
	atom: !0,
	selectable: !0,
	draggable: !0,
	addOptions() {
		return { currentConfig: null };
	},
	addAttributes() {
		return {
			data: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("data-ai-block");
					return t ? JSON.parse(t) : null;
				},
				renderHTML: (e) => e.data ? { "data-ai-block": JSON.stringify(e.data) } : {}
			},
			config: { default: null },
			isCollapsed: { default: !1 }
		};
	},
	parseHTML() {
		return [{ tag: "div[data-ai-block]" }];
	},
	renderHTML({ HTMLAttributes: e, node: t }) {
		let n = t.attrs.data, r = t.attrs.config;
		return !n || !r ? ["div"] : [
			"div",
			{
				...e,
				class: "ai-block",
				"data-ai-block": JSON.stringify(n)
			},
			[
				"div",
				{ class: "ai-block-content" },
				`AI Block: ${r.title}`
			]
		];
	},
	addNodeView() {
		return w(I);
	},
	addCommands() {
		return {
			insertAIBlock: (e, t) => ({ commands: n }) => n.insertContent({
				type: this.name,
				attrs: {
					data: e,
					config: t
				}
			}),
			executeAIAction: (e, t) => ({ commands: n }) => {
				let r = t.buttons?.find((t) => t.type === e);
				return r ? n.insertContent([{
					type: this.name,
					attrs: {
						data: {
							content: null,
							selectedAction: e,
							selectedTitle: r.label,
							selectedEmoji: r.emoji,
							isEditable: r.editable ?? !1,
							shouldExecute: !0
						},
						config: t
					}
				}, { type: "paragraph" }]) : !1;
			}
		};
	}
}), R = L;
//#endregion
export { L as AIBlock, R as AIBlockExtension, I as AIBlockView };
