import { experimentalComponent as e } from "../../../lib/experimental.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import n from "../../../icons/app/Handle.js";
import r from "../../../icons/app/Plus.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as a } from "../../../ui/skeleton.js";
import { ButtonInternal as o } from "../../F0Button/internal.js";
import { withSkeleton as s } from "../../../lib/skeleton.js";
import { ScrollArea as c } from "../../../ui/scrollarea.js";
import { F0Alert as ee } from "../../F0Alert/F0Alert.js";
import { EditorBubbleMenu as l } from "../internal/BubbleMenu/index.js";
import { useEnhance as u } from "../internal/Enhance/useEnhance.js";
import { EnhanceErrorBanner as d } from "../internal/Error/index.js";
import { documentHasMissingBlockIds as f } from "../internal/Extensions/BlockIdExtension/index.js";
import { insertImageFromFile as te } from "../internal/Extensions/Image/index.js";
import '../../../_embedded/AvIzFXBi.css';/* empty css      */
import { applyPageDocumentPatch as ne, getNotesTextEditorSnapshot as p } from "./applyPageDocumentPatch.js";
import { createNotesTextEditorExtensions as re } from "./extensions.js";
import { Header as m } from "./components/Header/index.js";
import { ImageUploadError as h } from "./components/ImageUploadError/index.js";
import { Title as g } from "./components/Title/index.js";
import { forwardRef as _, useCallback as v, useEffect as y, useId as ie, useImperativeHandle as b, useMemo as x, useRef as S, useState as C } from "react";
import { jsx as w, jsxs as T } from "react/jsx-runtime";
import { AnimatePresence as E, motion as D } from "motion/react";
import { EditorContent as O, useEditor as ae } from "@tiptap/react";
import oe from "@tiptap/extension-drag-handle-react";
//#region src/components/RichText/F0NotesTextEditor/F0NotesTextEditor.tsx
var k = _(function({ onChange: e, placeholder: a, initialEditorState: s, readonly: _ = !1, aiBlockConfig: k, imageUploadConfig: A, enhanceConfig: j, onTitleChange: M, primaryAction: N, secondaryActions: P, otherActions: F, metadata: I, status: L, alert: R, titlePlaceholder: z }, B) {
	let V = i(), H = S(null), U = S(null), W = ie(), [G] = C(() => s?.content || ""), [K, se] = C(s?.title || ""), [q, J] = C(null);
	y(() => {
		M && M(K);
	}, [K, M]);
	let Y = S(!1), X = x(() => A ? {
		...A,
		onError: (e) => {
			J(e);
		}
	} : void 0, [A]), Z = x(() => re({
		placeholder: a,
		translations: V,
		aiBlockConfig: k,
		imageUploadConfig: X,
		enhanceEnabled: !!j
	}), [
		a,
		V,
		k,
		X,
		j
	]), Q = ae({
		extensions: Z,
		content: G,
		onUpdate: ({ editor: t }) => {
			Y.current || e(p(t));
		},
		onCreate: ({ editor: t }) => {
			if (f(t.state.doc)) {
				Y.current = !0;
				try {
					t.commands.setContent(t.getJSON());
				} finally {
					Y.current = !1;
				}
				f(t.state.doc) || e(p(t));
			}
		},
		editable: !_,
		shouldRerenderOnTransaction: !1
	}), $ = u(Q, j), ce = v((e) => {
		Y.current = !0;
		try {
			return e();
		} finally {
			Y.current = !1;
		}
	}, []);
	b(B, () => ({
		clear: () => Q?.commands.clearContent(),
		focus: () => Q?.commands.focus(),
		setContent: (e) => Q?.commands.setContent(e),
		applyPageDocumentPatch: (e) => Q ? ce(() => ne(Q, e)) : {
			json: null,
			html: null
		},
		insertAIBlock: () => {
			!Q || !k || Q.chain().focus().insertContentAt(Q.state.doc.content.size, [{
				type: "aiBlock",
				attrs: {
					data: {
						content: null,
						selectedAction: void 0
					},
					config: k,
					isCollapsed: !1
				}
			}, { type: "paragraph" }]).run();
		},
		insertTranscript: (e, t, n) => {
			Q && Q.chain().focus().insertContentAt(Q.state.doc.content.size, [{
				type: "transcript",
				attrs: {
					data: {
						title: e,
						users: t,
						messages: n
					},
					isOpen: !1
				}
			}, { type: "paragraph" }]).run();
		},
		pushContent: (e) => {
			Q && Q.chain().focus().insertContentAt(Q.state.doc.content.size, e).run();
		},
		insertImage: (e) => {
			!Q || !X || te(Q, e, X);
		}
	}));
	let le = x(() => ({ offset: [0, 5] }), []), ue = v(({ node: e, pos: t }) => {
		U.current = e ? {
			pos: t,
			nodeSize: e.nodeSize
		} : null;
	}, []), de = v(() => {
		let e = U.current;
		if (!e || !Q) return;
		let { pos: t, nodeSize: n } = e, r = Q.state.doc.nodeAt(t);
		if (r && r.content.size === 0) Q.chain().focus().setTextSelection(t + 1).insertContent("/").run();
		else {
			let e = t + n;
			Q.chain().focus().insertContentAt(e, { type: "paragraph" }).setTextSelection(e + 1).insertContent("/").run();
		}
	}, [Q]), fe = N || P && P.length > 0 || I && I.length > 0 || F && F.length > 0 || L, pe = M || K;
	return Q ? /* @__PURE__ */ T("div", {
		className: "relative flex h-full w-full flex-col",
		ref: H,
		id: W,
		children: [
			fe && /* @__PURE__ */ w(m, {
				primaryAction: N,
				secondaryActions: P,
				metadata: I,
				otherActions: F,
				status: L
			}),
			q && /* @__PURE__ */ w(h, {
				errorType: q,
				onDismiss: () => J(null)
			}),
			/* @__PURE__ */ w(E, { children: $.error && !$.isLoading && /* @__PURE__ */ w(D.div, {
				initial: {
					height: 0,
					opacity: 0,
					y: -20
				},
				animate: {
					height: "auto",
					opacity: 1,
					y: 0
				},
				exit: {
					height: 0,
					opacity: 0,
					y: -20
				},
				transition: { duration: .3 },
				className: "mx-auto flex w-full max-w-[824px] items-center justify-center px-14 py-2",
				children: /* @__PURE__ */ w(d, {
					error: $.error,
					onDismiss: $.clearError
				})
			}, "enhance-error") }),
			/* @__PURE__ */ T(c, {
				className: "notes-text-editor-scroll h-full gap-6",
				children: [
					R && /* @__PURE__ */ w("div", {
						className: "mx-auto w-full max-w-[824px] sm:px-14 px-0",
						children: /* @__PURE__ */ w(ee, { ...R })
					}),
					pe && /* @__PURE__ */ w(g, {
						value: K,
						onChange: M ? se : void 0,
						placeholder: z,
						disabled: !M || _
					}),
					/* @__PURE__ */ T("div", {
						className: "notes-text-editor h-full",
						onClick: () => Q.commands.focus(),
						children: [!_ && /* @__PURE__ */ w(oe, {
							editor: Q,
							tippyOptions: le,
							onNodeChange: ue,
							children: /* @__PURE__ */ T("div", {
								className: "flex flex-row",
								children: [/* @__PURE__ */ w(o, {
									compact: !0,
									variant: "ghost",
									size: "sm",
									className: "text-f1-foreground-tertiary",
									onClick: de,
									label: "Add paragraph",
									hideLabel: !0,
									icon: r
								}), /* @__PURE__ */ w("div", {
									className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
									draggable: !0,
									"data-drag-handle": !0,
									children: /* @__PURE__ */ w(t, {
										icon: n,
										size: "xs"
									})
								})]
							})
						}), /* @__PURE__ */ w(O, {
							editor: Q,
							className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
						})]
					})
				]
			}),
			!_ && /* @__PURE__ */ w(l, {
				editorId: W,
				editor: Q,
				disableButtons: $.disableButtons,
				isToolbarOpen: !1,
				isFullscreen: !1,
				plainHtmlMode: !1,
				enhance: $
			})
		]
	}) : null;
}), A = ({ withHeader: e = !1, withTitle: t = !0, withToolbar: n = !0 }) => /* @__PURE__ */ T("div", {
	className: "relative flex h-full w-full flex-col",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [
		e && /* @__PURE__ */ T("div", {
			className: "flex items-center justify-between border-b border-f1-border px-6 py-3",
			children: [/* @__PURE__ */ T("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ w(a, { className: "h-6 w-20 rounded-md" }), /* @__PURE__ */ w(a, { className: "h-6 w-24 rounded-md" })]
			}), /* @__PURE__ */ T("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ w(a, { className: "h-8 w-16 rounded-md" }), /* @__PURE__ */ w(a, { className: "h-8 w-12 rounded-md" })]
			})]
		}),
		n && /* @__PURE__ */ T("div", {
			className: "absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md",
			children: [
				/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
				/* @__PURE__ */ T("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" })
					]
				}),
				/* @__PURE__ */ T("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" })
					]
				}),
				/* @__PURE__ */ T("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" }),
						/* @__PURE__ */ w(a, { className: "h-8 w-8 rounded" })
					]
				})
			]
		}),
		/* @__PURE__ */ T(c, {
			className: "h-full gap-6",
			children: [t && /* @__PURE__ */ w("div", {
				className: "mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5",
				children: /* @__PURE__ */ w(a, { className: "h-8 w-80 rounded-md" })
			}), /* @__PURE__ */ w("div", {
				className: "h-full",
				children: /* @__PURE__ */ w("div", {
					className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14",
					children: /* @__PURE__ */ T("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ w(a, { className: "h-5 w-full rounded-md" }),
							/* @__PURE__ */ w(a, { className: "h-5 w-4/5 rounded-md" }),
							/* @__PURE__ */ w(a, { className: "h-5 w-3/5 rounded-md" }),
							/* @__PURE__ */ w(a, { className: "h-5 w-full rounded-md" }),
							/* @__PURE__ */ w(a, { className: "h-5 w-1/2 rounded-md" })
						]
					})
				})
			})]
		})
	]
}), j = e("F0NotesTextEditor", s(k, A)), M = j, N = A;
//#endregion
export { j as F0NotesTextEditor, A as F0NotesTextEditorSkeleton, M as NotesTextEditor, N as NotesTextEditorSkeleton };
