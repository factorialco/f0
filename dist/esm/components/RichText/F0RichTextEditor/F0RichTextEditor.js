import { experimentalComponent as e } from "../../../lib/experimental.js";
import { cn as t } from "../../../lib/utils.js";
import n from "../../../icons/app/Cross.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as i } from "../../../ui/skeleton.js";
import { F0Button as ee } from "../../F0Button/F0Button.js";
import { withSkeleton as a } from "../../../lib/skeleton.js";
import { AIEnhanceMenu as te } from "../internal/Enhance/EnhanceMenu.js";
import { EnhanceActivator as o } from "../internal/Enhance/EnhanceActivator.js";
import { ToolbarDivider as s } from "../internal/Toolbar/ToolbarDivider/index.js";
import { Toolbar as ne } from "../internal/Toolbar/index.js";
import { EditorBubbleMenu as re } from "../internal/BubbleMenu/index.js";
import { useEnhance as ie } from "../internal/Enhance/useEnhance.js";
import { EnhanceErrorBanner as c } from "../internal/Error/index.js";
import '../index.css';/* empty css       */
import { useAudioRecorder as ae } from "../../../kits/ai/F0AiChatTextArea/useAudioRecorder.js";
import { FILE_TYPES as l, UPLOAD_INPUT_ID as u } from "./utils/constants.js";
import { FileList as oe } from "./components/FileList/index.js";
import { Footer as se } from "./components/Footer/index.js";
import { Head as ce } from "./components/Head/index.js";
import { ExtensionsConfiguration as d } from "./utils/extensions.js";
import { getHeight as le, getHeightThreshold as ue, handleEditorUpdate as de, setupContainerObservers as fe } from "./utils/helpers.js";
import { forwardRef as f, useCallback as p, useEffect as m, useId as pe, useImperativeHandle as me, useMemo as he, useRef as h, useState as g } from "react";
import ge from "react-dom";
import { Fragment as _e, jsx as _, jsxs as v } from "react/jsx-runtime";
import { AnimatePresence as y, motion as b } from "motion/react";
import { FocusScope as ve } from "@radix-ui/react-focus-scope";
import { EditorContent as ye, useEditor as be } from "@tiptap/react";
//#region src/components/RichText/F0RichTextEditor/F0RichTextEditor.tsx
var xe = 4e3, x = f(function({ mentionsConfig: e, enhanceConfig: i, filesConfig: a, secondaryAction: l, primaryAction: u, maxCharacters: f, initialEditorState: x, onChange: S, placeholder: C, title: w, height: T = "auto", plainHtmlMode: E = !1, fullScreenMode: Se = !0, onFullscreenChange: D, disabled: O = !1, error: k = !1, loading: A = !1, onTranscribe: j }, M) {
	let N = r(), P = pe(), F = h(null), Ce = h(null), I = h(null), L = h(null), [we, Te] = g(!1), [Ee, De] = g(!0), [R, Oe] = g(!1), [z, B] = g(!1), [ke, Ae] = g(0), [je, V] = g(x?.files || []), [H, U] = g(e?.users || []);
	m(() => (R ? (document.body.style.overflow = "hidden", B(!0)) : (document.body.style.overflow = "", B(!1)), () => {
		document.body.style.overflow = "";
	}), [R]), m(() => {
		let e = R ? window.innerHeight : ue(T);
		return fe({
			containerRef: I,
			onHeightChange: Te,
			onScrollChange: De,
			heightThreshold: e
		});
	}, [T, R]), m(() => {
		if (!R || !z) return;
		let e = () => {
			L.current && Ae(L.current.offsetWidth);
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, [R, z]);
	let Me = () => {
		Oe((e) => {
			let t = !e;
			return D && D(t), t;
		});
	}, Ne = p(({ editor: e }) => {
		de({
			editor: e,
			onChange: S
		});
	}, [S]), Pe = he(() => d({
		mentionsConfig: e,
		mentionSuggestions: H,
		setMentionSuggestions: U,
		placeholder: C,
		maxCharacters: f,
		plainHtmlMode: E
	}), [
		e,
		H,
		U,
		C,
		f,
		E
	]), W = h(!1), G = be({
		extensions: Pe,
		content: x?.content || "",
		editable: !O,
		onUpdate: Ne,
		onFocus: () => {
			W.current = !0;
		},
		editorProps: { attributes: {
			role: "textbox",
			"aria-multiline": "true",
			"aria-label": w
		} },
		shouldRerenderOnTransaction: !1
	}), K = ie(G, i);
	m(() => {
		(K.error || O) && G ? G.setEditable(!1) : G && !K.error && !O && G.setEditable(!0);
	}, [
		K.error,
		O,
		G
	]);
	let q = h(null), [J, Y] = g(null), X = h(null), Fe = p((e) => {
		X.current && clearTimeout(X.current), Y(e), X.current = setTimeout(() => {
			Y(null), X.current = null;
		}, xe);
	}, []), Ie = p(() => {
		X.current &&= (clearTimeout(X.current), null), Y(null);
	}, []);
	m(() => () => {
		X.current && clearTimeout(X.current);
	}, []);
	let Z = p((e) => {
		let t = q.current;
		if (!G || !t) return;
		let n = G.state.doc.content.size, r = Math.min(t.from, n), i = Math.min(t.to, n);
		G.chain().deleteRange({
			from: r,
			to: i
		}).insertContentAt(r, e).run(), q.current = {
			from: r,
			to: r + e.length
		};
	}, [G]), Le = {
		"permission-denied": N.ai.micPermissionDenied,
		"device-error": N.ai.micError,
		"transcription-failed": N.ai.transcriptionError
	}, Q = ae({
		onTranscribe: j,
		onPartial: Z,
		onFinal: (e) => {
			Z(e), G?.commands.focus();
		},
		onError: (e) => Fe(Le[e])
	}), Re = !!j && Q.isSupported, ze = p(() => {
		G && (q.current = {
			from: G.state.selection.to,
			to: G.state.selection.to
		}, Q.start());
	}, [G, Q]);
	if (me(M, () => ({
		clear: () => G?.commands.clearContent(),
		clearFiles: () => {
			V([]), a && a.onFiles([]);
		},
		focus: () => {
			W.current = !0, G?.commands.focus();
		},
		setError: (e) => {
			K.setError(e);
		},
		setContent: (e) => {
			G?.commands.setContent(e);
		},
		insertContent: (e) => {
			G?.chain().focus(W.current ? null : "end").insertContent(e).run();
		}
	})), !G) return null;
	let $ = /* @__PURE__ */ _(ve, {
		trapped: !1,
		children: /* @__PURE__ */ v("div", {
			ref: Ce,
			id: P,
			"aria-busy": A,
			className: t("rich-text-editor-container pointer-events-auto flex flex-col", O ? "bg-f1-background-tertiary" : "bg-f1-background", R ? "fixed inset-0 z-50" : "relative w-full rounded-xl border border-solid border-f1-border-secondary", !R && k && "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10"),
			children: [
				R && /* @__PURE__ */ _("div", { className: "pointer-events-none fixed inset-0 z-40" }),
				/* @__PURE__ */ _(ce, {
					fullScreenMode: Se,
					isFullscreen: R,
					handleToggleFullscreen: Me,
					disableAllButtons: K.disableButtons,
					title: w
				}),
				/* @__PURE__ */ v("div", {
					className: "relative z-50 w-full flex-grow overflow-hidden",
					onClick: (e) => {
						let t = e.target;
						!t.closest("button") && !t.closest("[role=\"button\"]") && !t.closest("input") && !t.closest("textarea") && !t.closest("[data-radix-popper-content-wrapper]") && (e?.preventDefault(), G?.commands.focus());
					},
					children: [
						/* @__PURE__ */ _("div", {
							ref: I,
							className: t("scrollbar-macos relative flex w-full items-start justify-center overflow-y-auto py-3", R ? "h-full px-10 pb-24" : t(le(T), "pl-3 pr-10")),
							children: /* @__PURE__ */ _("div", {
								className: t("w-full overflow-hidden", R && "max-w-[824px]"),
								children: /* @__PURE__ */ _(ye, { editor: G })
							})
						}),
						/* @__PURE__ */ _(y, { children: R && z && !K.disableButtons && /* @__PURE__ */ _(b.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: 20
							},
							transition: {
								duration: .2,
								ease: "easeOut"
							},
							className: "absolute bottom-10 left-0 right-0 z-[9998] flex w-full items-center justify-center",
							style: { pointerEvents: "none" },
							children: /* @__PURE__ */ _("div", {
								ref: L,
								className: "absolute -bottom-4 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-1.5 shadow-md",
								style: { pointerEvents: "auto" },
								children: /* @__PURE__ */ v("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ _(ee, {
											onClick: (e) => {
												e.preventDefault(), B(!1), queueMicrotask(() => G.commands.focus());
											},
											variant: "neutral",
											size: "md",
											disabled: K.disableButtons,
											hideLabel: !0,
											label: N.actions.close,
											icon: n
										}),
										/* @__PURE__ */ _(s, {}),
										i && /* @__PURE__ */ v(_e, { children: [/* @__PURE__ */ _(o, {
											enhance: K,
											disabled: K.disableButtons,
											menuWidth: ke,
											menuContainerRef: L
										}), /* @__PURE__ */ _(s, {})] }),
										/* @__PURE__ */ _(ne, {
											editor: G,
											isFullscreen: R,
											disableButtons: K.disableButtons,
											plainHtmlMode: E
										})
									]
								})
							})
						}) }),
						/* @__PURE__ */ _(y, { children: R && z && K.isAcceptChangesOpen && /* @__PURE__ */ _(b.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: 20
							},
							transition: {
								duration: .2,
								ease: "easeOut"
							},
							className: "absolute bottom-10 left-0 right-0 z-[9998] flex w-full items-center justify-center",
							style: { pointerEvents: "none" },
							children: /* @__PURE__ */ _("div", {
								className: "absolute -bottom-4 left-1/2 -translate-x-1/2",
								style: { pointerEvents: "auto" },
								children: /* @__PURE__ */ _(te, {
									onSelect: () => {},
									enhancementOptions: [],
									inputPlaceholder: "",
									menuState: "review",
									compactReview: !0,
									onAccept: K.acceptChanges,
									onReject: K.rejectChanges,
									onRetry: K.retryChanges
								})
							})
						}) })
					]
				}),
				/* @__PURE__ */ v("div", {
					className: t("relative z-40 rounded-b-lg px-3", !O && "bg-f1-background", we && !Ee && "shadow-editor-tools"),
					children: [
						/* @__PURE__ */ _(y, { children: K.error && !K.isLoading && /* @__PURE__ */ _(b.div, {
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
							className: "flex w-full items-center justify-center pt-2",
							children: /* @__PURE__ */ _(c, {
								error: K.error,
								onDismiss: K.clearError
							})
						}, "accordion") }),
						/* @__PURE__ */ _(y, {
							initial: !1,
							children: J && /* @__PURE__ */ _(b.div, {
								role: "alert",
								"aria-live": "polite",
								className: "flex w-full items-center justify-center pt-2",
								initial: {
									opacity: 0,
									y: -4
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -4
								},
								children: /* @__PURE__ */ _(c, {
									error: J,
									onDismiss: Ie,
									dismissLabel: N.actions.close
								})
							}, "dictation-error")
						}),
						/* @__PURE__ */ _(oe, {
							files: je,
							disabled: K.disableButtons,
							filesConfig: a,
							setFiles: V,
							fileInputRef: F
						}),
						/* @__PURE__ */ _(se, {
							editor: G,
							maxCharacters: f,
							secondaryAction: l,
							primaryAction: u,
							fileInputRef: F,
							canUseFiles: !!a,
							disableButtons: K.disableButtons || O,
							disabled: O,
							enhance: K,
							isFullscreen: R,
							setIsToolbarOpen: B,
							isToolbarOpen: z,
							plainHtmlMode: E,
							canRecord: Re,
							recordingStatus: Q.status,
							recordingStream: Q.stream,
							onStartRecording: ze,
							onStopRecording: Q.stop,
							onCancelRecording: Q.cancel
						}),
						/* @__PURE__ */ _(re, {
							editorId: P,
							editor: G,
							disableButtons: K.disableButtons,
							isToolbarOpen: z,
							isFullscreen: R,
							plainHtmlMode: E,
							enhance: K
						})
					]
				})
			]
		})
	});
	return R ? ge.createPortal($, document.body) : $;
}), S = e("F0RichTextEditor", a(x, ({ rows: e = 2 }) => {
	let t = [
		"75%",
		"100%",
		"60%",
		"85%",
		"70%"
	], n = Array.from({ length: e }, (e, n) => t[n % t.length]);
	return /* @__PURE__ */ v("div", {
		className: "relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background",
		children: [/* @__PURE__ */ _("div", {
			className: "relative w-full flex-grow overflow-hidden",
			children: /* @__PURE__ */ _("div", {
				className: "h-auto w-full pl-3 pr-4 pt-3",
				children: /* @__PURE__ */ _("div", {
					className: "flex flex-col gap-2",
					children: n.map((e, t) => /* @__PURE__ */ _(i, {
						className: "h-4",
						style: { width: e }
					}, t))
				})
			})
		}), /* @__PURE__ */ _("div", {
			className: "px-3 py-3",
			children: /* @__PURE__ */ v("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ v("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ _(i, { className: "h-8 w-8 rounded-md" }),
						/* @__PURE__ */ _(i, { className: "h-8 w-8 rounded-md" }),
						/* @__PURE__ */ _(i, { className: "h-8 w-8 rounded-md" })
					]
				}), /* @__PURE__ */ v("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ _(i, { className: "h-8 w-24 rounded-md" }), /* @__PURE__ */ _(i, { className: "h-8 w-32 rounded-md" })]
				})]
			})
		})]
	});
})), C = S;
//#endregion
export { S as F0RichTextEditor, l as FILE_TYPES, C as RichTextEditor, u as UPLOAD_INPUT_ID };
