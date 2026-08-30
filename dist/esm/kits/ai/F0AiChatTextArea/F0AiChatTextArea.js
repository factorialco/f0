import { cn as e } from "../../../lib/utils.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { Link as n } from "../../../lib/linkHandler.js";
import { OneEllipsis as r } from "../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0AvatarAlert as ee } from "../../../components/avatars/F0AvatarAlert/index.js";
import { useReducedMotion as te } from "../../../lib/a11y.js";
import { useAudioRecorder as ne } from "./useAudioRecorder.js";
import { F0OneIcon as re } from "../F0OneIcon/F0OneIcon.js";
import { useRevealOnChange as ie } from "../F0AiChat/hooks/useRevealOnChange.js";
import { useAiChat as ae } from "../F0AiChat/providers/AiChatStateProvider.js";
import { DictationButton as oe } from "./components/DictationButton.js";
import { SubmitButton as se } from "./components/SubmitButton.js";
import { ActionBar as ce } from "./components/ActionBar.js";
import { AttachedFilesList as le } from "./components/AttachedFilesList.js";
import { CreditWarningWrapper as ue } from "./components/CreditWarningWrapper.js";
import { MentionPopover as de } from "./components/MentionPopover.js";
import { PendingQuoteChip as fe } from "./components/PendingQuoteChip.js";
import { TextareaField as pe } from "./components/TextareaField.js";
import { WelcomeScreenCardsRow as me } from "./components/WelcomeScreenCardsRow.js";
import { WelcomeScreenSuggestionsRow as he } from "./components/WelcomeScreenSuggestionsRow.js";
import { buildHighlightSegments as ge } from "./highlight-utils.js";
import { useFileAttachments as _e } from "./useFileAttachments.js";
import { useMentions as ve } from "./useMentions.js";
import { useCallback as i, useEffect as a, useMemo as ye, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { AnimatePresence as u, motion as d } from "motion/react";
//#region src/kits/ai/F0AiChatTextArea/F0AiChatTextArea.tsx
var f = /[\\`*_{}[\]()#+\-.!|~>]/g, be = (e) => e.split(/(<entity-ref\b[^>]*>[\s\S]*?<\/entity-ref>)/g).map((e, t) => t % 2 == 1 ? e : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(f, "\\$&")).join(""), xe = ({ onSubmit: f, onStop: xe, inProgress: p, onBeforeSubmit: Se, placeholders: Ce, creditWarning: we, clarifyingUI: Te, pendingContext: Ee = null, onPendingContextChange: De, pendingQuote: m = null, onPendingQuoteChange: Oe, fileAttachments: ke, toolbarStart: Ae, onTranscribe: je, searchPersons: Me, onProcessFilesRef: h, disclaimer: g, footer: _, isWelcomeScreen: v = !1, fullscreen: y = !1, welcomeScreenSuggestions: b, onSuggestionClick: x, welcomeScreenSuggestionsPlacement: Ne = "above", welcomeScreenSuggestionsCollapsedByDefault: S = !1, welcomeScreenCards: C, padding: Pe = "default", ref: Fe }) => {
	let w = t(), T = te(), [E, D] = s(""), [O, k] = s(0), [A, j] = s(!1), [M, N] = s(!1), [P, Ie] = s(null), [Le, F] = s(!1), I = o(null), L = o(null), R = o(null), z = o(null);
	a(() => () => {
		z.current && clearTimeout(z.current);
	}, []);
	let B = Te != null, { tracking: V, setFocusChatInputFunction: H } = ae(), Re = i((e, t) => {
		V?.onWelcomeSuggestionClick?.({
			item: e,
			group: t,
			prompt: e.prompt || e.title
		}), x?.(e, t);
	}, [V, x]), { attachedFiles: U, fileInputRef: ze, onUploadFiles: Be, acceptValue: Ve, isAtMaxFiles: He, maxFiles: Ue, processFiles: We, handleFileSelect: Ge, handleRemoveFile: Ke, clearFiles: qe, transientError: Je, showTransientError: W } = _e(ke), G = ve({
		inputValue: E,
		setInputValue: D,
		cursorPosition: O,
		searchPersons: Me,
		textareaRef: L
	}), Ye = o(""), Xe = i((e) => {
		let t = Ye.current, n = `${t}${t && !/\s$/.test(t) ? " " : ""}${e}`;
		D(n), k(n.length);
	}, []), Ze = {
		"permission-denied": w.ai.micPermissionDenied,
		"device-error": w.ai.micError,
		"transcription-failed": w.ai.transcriptionError
	}, K = ne({
		onTranscribe: je,
		onPartial: Xe,
		onFinal: (e) => {
			Xe(e), L.current?.focus();
		},
		onError: (e) => W(Ze[e])
	}), Qe = !!je && K.isSupported, $e = i(() => {
		V?.onDictationStart?.(), Ye.current = E, K.start();
	}, [
		E,
		K,
		V
	]), et = i(() => {
		V?.onDictationCancel?.(), K.cancel();
	}, [K, V]);
	a(() => {
		S || typeof window < "u" && window.location.hash.length === 0 && L.current?.focus();
	}, []), a(() => {
		if (B) {
			H(null);
			return;
		}
		return H(() => {
			L.current?.focus();
		}), () => H(null);
	}, [B, H]), a(() => {
		if (h) return h((e) => {
			We(e);
		}), () => {
			h(null);
		};
	}, [h, We]);
	let tt = K.status === "recording", nt = tt ? w.ai.listening : w.ai.inputPlaceholder, rt = U.filter((e) => e.status === "uploaded"), q = U.some((e) => e.status === "uploading"), it = U.some((e) => e.status === "error"), J = E.trim().length > 0 || rt.length > 0;
	a(() => {
		if (!(!M || q)) {
			if (N(!1), it) {
				W(w.ai.fileUploadBlockedSubmit);
				return;
			}
			I.current?.requestSubmit();
		}
	}, [
		M,
		q,
		it,
		W,
		w.ai.fileUploadBlockedSubmit
	]);
	let at = async (e) => {
		if (e.preventDefault(), !B) {
			if (G.close(), p) xe?.();
			else if (J && !A) {
				if (q) {
					N(!0), L.current?.focus();
					return;
				}
				if (Se) {
					j(!0);
					try {
						if (await Se() === !1) {
							L.current?.focus();
							return;
						}
					} finally {
						j(!1);
					}
				}
				let e = be(G.transformMentions(E.trim())), t = rt.flatMap((e) => e.uploadedFile ? [e.uploadedFile] : []), n = Ee, r = m;
				n && De?.(null), r && Oe?.(null), await f({
					text: e,
					files: t,
					context: n,
					quote: r
				}), D(""), qe();
			}
			L.current?.focus();
		}
	}, ot = (e) => {
		B || G.handleKeyDown(e) || e.key === "Enter" && !e.shiftKey && (e.preventDefault(), p || I.current?.requestSubmit());
	}, st = () => {
		k(L.current?.selectionStart ?? 0);
	}, ct = () => {
		R.current && L.current && (R.current.scrollTop = L.current.scrollTop);
	}, Y = P ? P.prompt ?? P.title : null, lt = tt ? [w.ai.listening] : Y ? [Y] : Ce ?? [], ut = lt.length > 1, dt = ye(() => ge(E, G.mentions, {
		cursorPosition: O,
		inlineCompletion: G.inlineCompletion
	}), [
		E,
		G.mentions,
		O,
		G.inlineCompletion
	]), ft = G.mentions.length > 0 || G.inlineCompletion !== null, X = Ne === "inside", Z = v && b && b.length > 0 && x ? /* @__PURE__ */ c(he, {
		suggestions: b,
		onItemClick: Re,
		onItemHover: Ie,
		side: X ? "bottom" : "top",
		reserveTwoRows: !X,
		overflow: X ? "scroll" : "wrap"
	}) : null, pt = !S || Le || J || K.status !== "idle", mt = (e) => e instanceof Node ? I.current?.contains(e) ? !0 : e instanceof Element && e.closest("[data-radix-popper-content-wrapper]") !== null : !1, ht = () => {
		z.current && clearTimeout(z.current), z.current = setTimeout(() => {
			mt(document.activeElement) || F(!1);
		}, 0);
	}, Q = X, gt = Q && S, $ = gt && !pt, _t = Q && Z ? /* @__PURE__ */ c("div", {
		onClick: (e) => e.stopPropagation(),
		children: Z
	}) : void 0, vt = {
		duration: T ? 0 : .32,
		ease: [
			.4,
			0,
			.2,
			1
		]
	}, yt = /* @__PURE__ */ c(ce, {
		onUploadFiles: Be,
		toolbarStart: Ae,
		center: _t,
		isAtMaxFiles: He,
		maxFiles: Ue,
		acceptValue: Ve,
		fileInputRef: ze,
		handleFileSelect: Ge,
		inProgress: p,
		hasDataToSend: J,
		isPreSending: A || M,
		canRecord: Qe,
		recordingStatus: K.status,
		recordingStream: K.stream,
		onStartRecording: $e,
		onStopRecording: K.stop,
		onCancelRecording: et
	}), bt = v && y && !!C && C.length > 0, xt = y && v, { motionProps: St } = ie(v, 160, .5);
	return /* @__PURE__ */ l(d.div, {
		ref: Fe,
		className: e("flex flex-col items-center gap-2", Pe === "default" && "px-4 pb-3 pt-2", xt && "min-h-0 flex-1 justify-start -mt-20"),
		...y ? St : {},
		children: [
			/* @__PURE__ */ l("div", {
				className: "flex w-full max-w-content flex-col gap-2",
				children: [Z && !X && /* @__PURE__ */ c("div", { children: S ? /* @__PURE__ */ c(u, {
					initial: !1,
					children: pt && /* @__PURE__ */ c(d.div, {
						className: "overflow-hidden",
						initial: {
							opacity: 0,
							height: 0
						},
						animate: {
							opacity: 1,
							height: "auto"
						},
						exit: {
							opacity: 0,
							height: 0
						},
						transition: vt,
						children: Z
					}, "welcome-suggestions")
				}) : Z }), /* @__PURE__ */ c(ue, {
					creditWarning: we,
					children: /* @__PURE__ */ l("form", {
						"aria-busy": p,
						ref: I,
						className: e("relative isolate z-20", "flex flex-col items-stretch md:gap-3 gap-2", "rounded-lg border border-solid border-f1-border-secondary has-[textarea:focus]:border-f1-background-tertiary", "transition-all hover:cursor-text", "p-0", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]", "before:rounded-[inherit] before:content-['']", "before:bg-f1-background-inverse-secondary dark:before:bg-f1-background-tertiary", "after:pointer-events-none after:absolute after:-inset-2.5 after:z-[-2]", "after:rounded-3xl after:border-[10px] after:border-solid after:border-transparent", "after:p-0.5 after:blur-[6px] after:content-['']", "after:[background-clip:content-box]", "after:[mask:linear-gradient(#000,#000)_padding-box_exclude,linear-gradient(#000,#000)]", "after:opacity-0", "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "from-[#E55619] via-[#A1ADE5] to-[#E51943]", "after:transition-opacity after:delay-200 after:duration-300", "has-[textarea:focus]:after:opacity-100", !T && !B && "after:[animation:rotate-gradient_6s_linear_infinite_paused] has-[textarea:focus]:after:[animation:rotate-gradient_6s_linear_infinite_running]", !T && B && "after:[animation:rotate-gradient_6s_linear_infinite_running]", B && "after:opacity-100 border-f1-background-tertiary"),
						onClick: () => {
							B || L.current?.focus();
						},
						onFocus: () => F(!0),
						onBlur: ht,
						onSubmit: at,
						children: [/* @__PURE__ */ c(de, {
							isOpen: G.isOpen,
							results: G.results,
							isLoading: G.isLoading,
							selectedIndex: G.selectedIndex,
							position: G.popoverPosition,
							onSelect: G.selectPerson
						}), /* @__PURE__ */ c(u, {
							initial: !1,
							children: B ? /* @__PURE__ */ c(d.div, {
								className: "overflow-hidden",
								initial: {
									height: 0,
									opacity: 0
								},
								animate: {
									height: "auto",
									opacity: 1
								},
								exit: {
									height: 0,
									opacity: 0,
									transition: {
										duration: T ? 0 : .22,
										ease: [
											.4,
											0,
											1,
											1
										]
									}
								},
								transition: {
									duration: T ? 0 : .4,
									ease: [
										.4,
										0,
										.2,
										1
									]
								},
								children: Te
							}, "clarifying") : /* @__PURE__ */ l(d.div, {
								className: "overflow-hidden",
								initial: {
									height: 0,
									opacity: 0
								},
								animate: {
									height: "auto",
									opacity: 1
								},
								exit: {
									height: 0,
									opacity: 0,
									transition: {
										duration: T ? 0 : .15,
										ease: [
											.55,
											0,
											1,
											.45
										]
									}
								},
								transition: {
									duration: T ? 0 : .4,
									ease: [
										.4,
										0,
										.2,
										1
									]
								},
								children: [
									m && /* @__PURE__ */ c(fe, {
										quote: m,
										onRemove: () => Oe?.(null)
									}),
									/* @__PURE__ */ c(u, {
										initial: !1,
										children: Je && /* @__PURE__ */ c(d.div, {
											role: "alert",
											"aria-live": "polite",
											className: "p-1",
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
											transition: {
												duration: T ? 0 : .2,
												ease: "easeOut"
											},
											children: /* @__PURE__ */ l("div", {
												className: e("flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3", "bg-f1-background-critical text-f1-foreground"),
												children: [/* @__PURE__ */ c("div", {
													className: "h-6 w-6 flex-shrink-0",
													children: /* @__PURE__ */ c(ee, {
														type: "critical",
														size: "sm"
													})
												}), /* @__PURE__ */ c("p", {
													className: "font-medium text-f1-foreground-critical",
													children: Je
												})]
											})
										}, "transient-error")
									}),
									/* @__PURE__ */ c(le, {
										attachedFiles: U,
										isUploading: q,
										onRemove: Ke,
										removeLabel: w.ai.removeFile
									}),
									/* @__PURE__ */ l("div", {
										className: e(Q && "flex items-end", $ && "pr-3"),
										children: [
											Q && /* @__PURE__ */ c("div", {
												className: "flex shrink-0 self-center pl-3",
												children: /* @__PURE__ */ c(re, {
													size: "sm",
													spin: p
												})
											}),
											/* @__PURE__ */ c(pe, {
												textareaRef: L,
												highlightRef: R,
												inputValue: E,
												onInputChange: (e, t) => {
													D(e), k(t);
												},
												onKeyDown: ot,
												onCursorUpdate: st,
												onScroll: ct,
												highlightSegments: dt,
												hasOverlay: ft,
												multiplePlaceholders: ut,
												placeholders: lt,
												resolvedDefaultPlaceholder: nt,
												inProgress: p
											}),
											$ && /* @__PURE__ */ l("div", {
												className: "flex shrink-0 items-center gap-2 pb-[10px] pl-2",
												onMouseDown: (e) => e.preventDefault(),
												children: [Qe && /* @__PURE__ */ c(oe, {
													inProgress: p,
													recordingStatus: K.status,
													onStartRecording: $e,
													size: "sm"
												}), /* @__PURE__ */ c(se, {
													inProgress: p,
													hasDataToSend: J,
													isPreSending: A || M,
													recordingStatus: K.status,
													size: "sm"
												})]
											})
										]
									}),
									gt ? /* @__PURE__ */ c(u, {
										initial: !1,
										children: !$ && /* @__PURE__ */ c(d.div, {
											className: "overflow-hidden",
											initial: {
												opacity: 0,
												height: 0
											},
											animate: {
												opacity: 1,
												height: "auto"
											},
											exit: {
												opacity: 0,
												height: 0
											},
											transition: vt,
											children: yt
										}, "action-row")
									}) : yt
								]
							}, "input")
						})]
					})
				})]
			}),
			bt && /* @__PURE__ */ c("div", {
				className: "w-full max-w-content pt-2",
				children: /* @__PURE__ */ c(me, { cards: C })
			}),
			_ && v && y && /* @__PURE__ */ c("div", {
				className: "w-full py-4 mx-auto flex max-w-content justify-center",
				children: _
			}),
			/* @__PURE__ */ c(u, {
				mode: "wait",
				initial: !1,
				children: B ? /* @__PURE__ */ l(d.div, {
					className: "flex w-full max-w-content flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-f1-foreground-tertiary",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: {
						duration: .15,
						ease: "easeOut"
					},
					children: [
						/* @__PURE__ */ l("span", { children: [
							/* @__PURE__ */ c("kbd", {
								className: "font-sans",
								children: "↑↓"
							}),
							" ",
							w.ai.clarifyingQuestion.navHint.navigate
						] }),
						/* @__PURE__ */ l("span", { children: [
							/* @__PURE__ */ c("kbd", {
								className: "font-sans",
								children: "Enter"
							}),
							" ",
							w.ai.clarifyingQuestion.navHint.select
						] }),
						/* @__PURE__ */ l("span", { children: [
							/* @__PURE__ */ c("kbd", {
								className: "font-sans",
								children: "Esc"
							}),
							" ",
							w.ai.clarifyingQuestion.navHint.cancel
						] })
					]
				}, "clarifying-nav-hint") : g?.text && !xt && /* @__PURE__ */ l(d.div, {
					className: "flex w-full max-w-content flex-row items-center justify-center gap-1",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: {
						duration: T ? 0 : .3,
						ease: "easeOut"
					},
					children: [g.onClick ? /* @__PURE__ */ c("button", {
						type: "button",
						onClick: g.onClick,
						className: e("group min-w-0 cursor-pointer bg-transparent p-0 text-inherit", "transition-transform duration-700 ease-out", "hover:scale-[1.02] focus-visible:scale-[1.02]", "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"),
						children: /* @__PURE__ */ c(r, {
							className: e("text-sm font-medium text-f1-foreground-tertiary transition-colors duration-700 ease-out", "group-hover:bg-gradient-to-r group-hover:from-[#E55619] group-hover:to-[#A1ADE5] group-hover:bg-clip-text group-hover:text-transparent", "group-focus-visible:bg-gradient-to-r group-focus-visible:from-[#E55619] group-focus-visible:to-[#A1ADE5] group-focus-visible:bg-clip-text group-focus-visible:text-transparent"),
							children: g.text
						})
					}) : /* @__PURE__ */ c(r, {
						className: "text-sm font-medium text-f1-foreground-tertiary",
						children: g.text
					}), g.link && g.linkText && /* @__PURE__ */ c(n, {
						href: g.link,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary",
						children: g.linkText
					})]
				}, "chat-disclaimer")
			})
		]
	});
};
//#endregion
export { xe as F0AiChatTextArea };
