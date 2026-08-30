import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/ArrowUp.js";
import n from "../../../../icons/app/Check.js";
import r from "../../../../icons/app/Cross.js";
import i from "../../../../icons/app/Microphone.js";
import ee from "../../../../icons/app/Paperclip.js";
import { useI18n as te } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as a } from "../../../../components/F0Button/internal.js";
import { F0AvatarAlert as ne } from "../../../../components/avatars/F0AvatarAlert/index.js";
import { useAudioRecorder as re } from "../../../../kits/ai/F0AiChatTextArea/useAudioRecorder.js";
import { RecordingWaveform as ie } from "../../../../kits/ai/F0AiChatTextArea/components/RecordingWaveform.js";
import { useF0Chat as ae, useF0ChatEmit as oe } from "../providers/F0ChatProvider.js";
import { MENTION_EVERYONE_ID as se, useMentions as ce } from "../hooks/useMentions.js";
import { buildHighlightSegments as le } from "../hooks/highlight-utils.js";
import { replaceClosedEmojiShortcode as ue, useEmojiAutocomplete as de } from "../hooks/useEmojiAutocomplete.js";
import { attachedKindOf as fe, formatFileSize as pe } from "../utils/attachments.js";
import { useChatComposeActions as me, useChatComposeTarget as he, useChatDrop as ge } from "../providers/ChatUIProvider.js";
import { useEditLastOwnMessage as _e } from "../hooks/useEditLastOwnMessage.js";
import { useTransientError as ve } from "../hooks/useTransientError.js";
import { useChatRenderConfig as ye } from "../providers/ChatRenderConfigProvider.js";
import { chatPermission as be } from "../utils/capabilities.js";
import { EASE_OUT_SWIFT as o, layoutTransition as xe, microEnterTransition as Se, microExitTransition as Ce } from "../utils/chat-motion.js";
import { ChatComposerAttachmentPreview as we } from "./ChatComposerAttachmentPreview.js";
import { ChatEditChip as Te } from "./ChatEditChip.js";
import { ChatEmojiPickerButton as Ee } from "./ChatEmojiPickerButton.js";
import { ChatEmojiAutocomplete as De } from "./ChatEmojiAutocomplete.js";
import { ChatMentionPopover as Oe, getChatMentionOptionId as ke } from "./ChatMentionPopover.js";
import { ChatReplyChip as Ae } from "./ChatReplyChip.js";
import { ChatTextareaField as je } from "./ChatTextareaField.js";
import { useCallback as s, useEffect as c, useId as Me, useMemo as l, useRef as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { AnimatePresence as m, motion as h } from "motion/react";
//#region src/sds/chat/F0Chat/components/ChatComposer.tsx
var Ne = (e) => e.attachment.kind === "image", Pe = (e, t) => e.type.startsWith("image/") ? {
	kind: "image",
	url: t,
	name: e.name,
	mimeType: e.type
} : {
	kind: "file",
	url: t,
	name: e.name,
	size: e.size,
	mimeType: e.type
}, g = () => {
	let g = te(), { sendMessage: _, editMessage: v, onInputActivity: y, stopTyping: b, uploadFiles: x, transcribe: Fe, maxFiles: S, maxFileSizeBytes: C, channel: w, searchMembers: Ie, currentUserId: Le, capabilities: Re } = ae(), T = !!x && be("canUpload", w.type, Re), { target: E } = he(), { clearComposeTarget: D, registerComposerHandle: O } = me(), ze = _e(), { registerFileDropHandler: Be } = ge(), k = oe(), { reducedMotion: A } = ye(), [j, M] = d(""), [N, P] = d(0), [F, I] = d([]), [Ve, He] = d(!1), L = u(null), R = u(null), Ue = u(null), We = u(null), z = u(/* @__PURE__ */ new Set()), B = de({
		inputValue: j,
		setInputValue: M,
		cursorPosition: N,
		setCursorPosition: P,
		textareaRef: L
	}), V = ce({
		inputValue: j,
		setInputValue: M,
		cursorPosition: N,
		textareaRef: L,
		enabled: !!Ie && !B.isOpen,
		searchMembers: Ie,
		everyoneLabel: w.type === "group" ? g.chat.mentionEveryone : void 0
	}), Ge = B.close, Ke = B.handleKeyDown, qe = `chat-mention-autocomplete-${Me().replace(/:/g, "")}`, Je = V.results[V.selectedIndex] ?? V.results[0], Ye = V.isOpen && Je ? ke(qe, Je) : void 0;
	c(() => {
		B.isOpen && V.dismissCurrentTrigger();
	}, [B.isOpen, V.dismissCurrentTrigger]);
	let Xe = l(() => le(j, V.mentions, {
		cursorPosition: N,
		inlineCompletion: B.isOpen ? null : V.inlineCompletion,
		currentUserId: Le
	}), [
		j,
		V.mentions,
		N,
		V.inlineCompletion,
		B.isOpen,
		Le
	]), Ze = V.mentions.length > 0 || V.inlineCompletion !== null, Qe = u(0), H = s((e) => {
		z.current.delete(e) && URL.revokeObjectURL(e);
	}, []);
	c(() => () => {
		for (let e of z.current) URL.revokeObjectURL(e);
		z.current.clear();
	}, []);
	let $e = F.some((e) => e.status === "uploading"), et = l(() => [...F.filter(Ne), ...F.filter((e) => !Ne(e))], [F]), { error: tt, show: U, clear: nt } = ve(), rt = u(0);
	c(() => {
		rt.current = F.length;
	}, [F]);
	let it = u(""), at = u(j);
	at.current = j;
	let ot = s((e) => {
		let t = it.current, n = t ? `${t} ${e}` : e;
		M(n), P(n.length);
	}, []), st = {
		"permission-denied": g.chat.micPermissionDenied,
		"device-error": g.chat.micError,
		"transcription-failed": g.chat.transcriptionError
	}, ct = T, [W, lt] = d(!1), ut = s(async (e, t) => {
		if (!x) return;
		lt(!0);
		let n = e.type || "audio/webm", r = n.includes("mp4") ? "m4a" : n.includes("ogg") ? "ogg" : "webm", i = new File([e], `voice-note.${r}`, { type: n });
		try {
			let [e] = await x([i]);
			e && "url" in e && _({
				body: "",
				attachments: [{
					kind: "voice",
					url: e.url,
					durationSeconds: Math.max(1, Math.round(t / 1e3)),
					mimeType: n,
					name: i.name
				}]
			});
		} catch {
			U(g.chat.fileUploadError);
		} finally {
			lt(!1);
		}
	}, [
		x,
		_,
		U,
		g.chat.fileUploadError
	]), G = re({
		onTranscribe: Fe,
		onPartial: ot,
		onFinal: ot,
		onError: (e) => U(st[e]),
		onAudio: ct ? (e, t) => void ut(e, t) : void 0
	}), K = G.status === "transcribing", dt = G.status === "recording", ft = (ct || !!Fe) && G.isSupported, q = (j.trim().length > 0 || F.length > 0) && !K && !$e && !W, pt = j === "" && F.length === 0 && E.kind === "none" && !Ve && !dt && !K && !W, [mt, ht] = d(0), gt = u(q);
	gt.current !== q && (gt.current = q, q && ht((e) => e + 1));
	let _t = s((e, t) => {
		let n = ue(e, t), r = n?.value ?? e, i = n?.cursorPosition ?? t;
		M(r), P(i), y(), n && requestAnimationFrame(() => {
			L.current?.setSelectionRange(i, i);
		}), r.trim().length === 0 && b?.();
	}, [y, b]);
	c(() => () => {
		b?.();
	}, [b]);
	let vt = s(() => {
		P(L.current?.selectionStart ?? 0);
	}, []), yt = s(() => {
		R.current && L.current && (R.current.scrollTop = L.current.scrollTop);
	}, []), J = s(async (e, t) => {
		if (e.length === 0 || !x || !T) return;
		if (nt(), S !== void 0 && rt.current + e.length > S) {
			U(g.chat.tooManyFilesError.replace("{{maxFiles}}", String(S)));
			return;
		}
		if (C !== void 0 && e.some((e) => e.size > C)) {
			U(g.chat.fileTooLargeError.replace("{{maxFileSize}}", pe(C)), { persistent: !0 });
			return;
		}
		let n = e.map((e) => {
			let t = URL.createObjectURL(e);
			return z.current.add(t), {
				id: `att-${Qe.current++}`,
				status: "uploading",
				attachment: Pe(e, t)
			};
		});
		for (let e of n) k.onFileAttached({
			kind: fe(e.attachment),
			source: t
		});
		I((e) => [...e, ...n]);
		let r = new Set(n.map((e) => e.id));
		try {
			let t = (await x(e)).map((e, t) => ({
				id: n[t]?.id ?? `att-${Qe.current++}`,
				status: "ready",
				attachment: e
			}));
			I((e) => {
				let n = new Map(t.map((e) => [e.id, e]));
				return e.flatMap((e) => {
					if (!r.has(e.id)) return [e];
					let t = n.get(e.id);
					return t ? [t] : [];
				});
			});
			for (let e of n) H(e.attachment.url);
		} catch {
			I((e) => e.filter((e) => !r.has(e.id)));
			for (let e of n) H(e.attachment.url);
			U(g.chat.fileUploadError);
		}
	}, [
		x,
		T,
		S,
		C,
		nt,
		U,
		g.chat.tooManyFilesError,
		g.chat.fileTooLargeError,
		g.chat.fileUploadError,
		H,
		k
	]), bt = s((e) => {
		let t = F.find((t) => t.id === e), n = t?.attachment;
		n && n.kind !== "voice" && n.kind !== "location" && k.onAttachmentRemoved({ kind: fe(n) });
		let r = F.some((t) => t.id !== e);
		t?.status === "uploading" && H(t.attachment.url), I((t) => t.filter((t) => t.id !== e)), requestAnimationFrame(() => {
			r ? We.current?.focus() : L.current?.focus();
		});
	}, [
		F,
		H,
		k
	]), Y = s((e) => {
		for (let t of e) t.status === "uploading" && H(t.attachment.url);
	}, [H]);
	c(() => {
		Be((e) => void J(e, "drop"));
	}, [Be, J]);
	let xt = s((e) => {
		if (!T) return;
		let t = Array.from(e.clipboardData.files);
		t.length !== 0 && (e.preventDefault(), J(t, "paste"));
	}, [T, J]), X = E.kind === "edit", Z = E.kind === "edit" ? E.message : null, Q = E.kind === "reply" ? E.message : null, $ = s(() => {
		V.close(), V.seedMentions([]), M(""), P(0), Y(F), I([]);
	}, [
		V.close,
		V.seedMentions,
		Y,
		F
	]), St = s((e) => {
		M(e.body), P(e.body.length), I((t) => (Y(t), (e.attachments ?? []).filter((e) => e.kind !== "card").map((e) => ({
			id: `att-${Qe.current++}`,
			status: "ready",
			attachment: e
		})))), V.seedMentions([...(e.mentions ?? []).map((e) => ({
			id: e.id,
			name: e.name,
			avatar: e.avatar,
			subtitle: e.subtitle,
			profileHref: e.profileHref
		})), ...e.mentionedEveryone && w.type === "group" ? [{
			id: se,
			name: g.chat.mentionEveryone
		}] : []]);
	}, [
		w.type,
		g.chat.mentionEveryone,
		V.seedMentions,
		Y
	]), Ct = s(() => {
		let e = L.current;
		if (!e) return;
		e.focus({ preventScroll: !0 });
		let t = e.value.length;
		e.setSelectionRange(t, t);
	}, []), wt = s((e, t) => {
		let n = e.kind === "edit" && t.kind !== "edit", r = e.kind === "edit" && t.kind === "edit" && e.message.id === t.message.id;
		n && $(), t.kind === "edit" && !r && St(t.message), t.kind !== "none" && Ct();
	}, [
		$,
		St,
		Ct
	]), Tt = l(() => ({
		retarget: wt,
		abandonDraft: $
	}), [wt, $]);
	c(function() {
		return O(Tt), () => O(null);
	}, [O, Tt]), c(function() {
		return D;
	}, [D]);
	let Et = s(() => {
		if (!q) return;
		b?.();
		let e = F.flatMap((e) => e.status === "ready" ? [e.attachment] : []), { mentions: t, mentionedEveryone: n } = V.getMentions();
		if (Z && v) {
			v(Z.id, {
				body: j.trim(),
				attachments: e.length > 0 ? e : void 0,
				mentions: t.length > 0 ? t : void 0,
				mentionedEveryone: n || void 0
			}), D();
			return;
		}
		_({
			body: j.trim(),
			attachments: e.length > 0 ? e : void 0,
			replyToId: Q?.id,
			mentions: t.length > 0 ? t : void 0,
			mentionedEveryone: n || void 0
		}), V.close(), M(""), P(0), I([]), D();
	}, [
		F,
		q,
		V,
		Q,
		_,
		D,
		b,
		j,
		Z,
		v
	]), Dt = s((e) => {
		let t = L.current, n = t?.selectionStart ?? t?.value.length ?? 0, r = t?.selectionEnd ?? t?.value.length ?? 0, i = n + e.length;
		M((t) => t.slice(0, n) + e + t.slice(r)), P(i), Ge(), y(), k.onEmojiInserted({
			emoji: e,
			source: "picker"
		}), requestAnimationFrame(() => {
			let e = L.current;
			e && (e.focus(), e.setSelectionRange(i, i));
		});
	}, [
		Ge,
		y,
		k
	]), Ot = s(() => {
		Z && k.onEditCancelled({ messageId: Z.id }), D();
	}, [
		D,
		Z,
		k
	]), kt = s(() => {
		Q && k.onReplyCancelled({ messageId: Q.id }), D();
	}, [
		D,
		k,
		Q
	]), At = s((e) => {
		if (!e.nativeEvent.isComposing && !Ke(e) && !V.handleKeyDown(e)) {
			if (e.key === "Escape" && X) {
				e.preventDefault(), Ot();
				return;
			}
			if (e.key === "ArrowUp" && !e.shiftKey && !e.altKey && !e.metaKey && !e.ctrlKey && pt && ze()) {
				e.preventDefault();
				return;
			}
			e.key === "Enter" && !e.shiftKey && (e.preventDefault(), Et());
		}
	}, [
		Et,
		Ke,
		V,
		X,
		Ot,
		pt,
		ze
	]), jt = s(() => {
		He(!0), (async () => {
			try {
				await G.start(), it.current = at.current;
			} catch {} finally {
				He(!1);
			}
		})();
	}, [G]), Mt = u(!1);
	c(function() {
		let e = G.status === "recording";
		e && !Mt.current && k.onVoiceRecordingStarted(), Mt.current = e;
	}, [G.status, k]);
	let Nt = g.chat.placeholder;
	return /* @__PURE__ */ f("div", {
		className: "pointer-events-none shrink-0 p-4 pt-0",
		children: /* @__PURE__ */ f("div", {
			className: "pointer-events-auto mx-auto w-full max-w-content",
			children: /* @__PURE__ */ p("div", {
				"data-testid": "chat-composer-surface",
				className: "relative flex flex-col rounded-lg border border-solid border-f1-border-secondary bg-f1-background/90 shadow-md backdrop-blur-[2px]",
				children: [
					/* @__PURE__ */ f(De, {
						isOpen: B.isOpen,
						results: B.results,
						selectedIndex: B.selectedIndex,
						position: B.popoverPosition,
						listboxId: B.listboxId,
						label: g.chat.addEmoji,
						onSelect: B.selectCandidate,
						onHighlight: B.setSelectedIndex
					}),
					/* @__PURE__ */ f(Oe, {
						isOpen: V.isOpen && !B.isOpen,
						listboxId: qe,
						results: V.results,
						isLoading: V.isLoading,
						selectedIndex: V.selectedIndex,
						position: V.popoverPosition,
						onSelect: V.selectCandidate,
						everyoneDescription: g.chat.mentionEveryoneDescription
					}),
					/* @__PURE__ */ f(m, {
						initial: !1,
						mode: "popLayout",
						children: X && Z ? /* @__PURE__ */ f(h.div, {
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
								opacity: 0
							},
							transition: {
								duration: A ? 0 : .18,
								ease: o
							},
							children: /* @__PURE__ */ f(Te, {
								message: Z,
								onRemove: Ot
							})
						}, "edit-chip") : Q ? /* @__PURE__ */ f(h.div, {
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
								opacity: 0
							},
							transition: {
								duration: A ? 0 : .18,
								ease: o
							},
							children: /* @__PURE__ */ f(Ae, {
								message: Q,
								onRemove: kt
							})
						}, "reply-chip") : null
					}),
					/* @__PURE__ */ f(m, {
						initial: !1,
						children: tt && /* @__PURE__ */ f(h.div, {
							role: "alert",
							"aria-atomic": "true",
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
								duration: A ? 0 : .2,
								ease: "easeOut"
							},
							children: /* @__PURE__ */ p("div", {
								className: e("flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3", "bg-f1-background-critical text-f1-foreground"),
								children: [/* @__PURE__ */ f("div", {
									className: "h-6 w-6 flex-shrink-0",
									children: /* @__PURE__ */ f(ne, {
										type: "critical",
										size: "sm"
									})
								}), /* @__PURE__ */ f("p", {
									className: "font-medium text-f1-foreground-critical",
									children: tt
								})]
							})
						}, "transient-error")
					}),
					/* @__PURE__ */ f(m, {
						initial: !1,
						children: F.length > 0 && /* @__PURE__ */ f(h.div, {
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
								opacity: 0
							},
							transition: {
								duration: A ? 0 : .18,
								ease: o
							},
							children: /* @__PURE__ */ f("div", {
								ref: We,
								role: "region",
								tabIndex: 0,
								"aria-label": g.t(F.length === 1 ? "chat.attachmentCount.one" : "chat.attachmentCount.other", { count: F.length }),
								"aria-live": "polite",
								"aria-busy": $e,
								className: "flex flex-nowrap items-end gap-1 overflow-x-auto px-1 pt-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring",
								"data-testid": "chat-composer-attachments",
								children: /* @__PURE__ */ f(m, {
									initial: !1,
									mode: "popLayout",
									children: et.map((e) => /* @__PURE__ */ f(h.div, {
										layout: "position",
										className: "flex shrink-0",
										initial: !A && {
											opacity: 0,
											scale: .95
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										exit: A ? void 0 : {
											opacity: 0,
											scale: .95,
											transition: Ce
										},
										transition: {
											...Se,
											layout: xe
										},
										children: /* @__PURE__ */ f(h.div, {
											className: "flex",
											initial: !A && { opacity: 0 },
											animate: { opacity: 1 },
											transition: { duration: .15 },
											children: /* @__PURE__ */ f(we, {
												attachment: e.attachment,
												uploading: e.status === "uploading",
												onRemove: () => bt(e.id)
											})
										})
									}, e.id))
								})
							})
						}, "attachments-row")
					}),
					/* @__PURE__ */ f(je, {
						textareaRef: L,
						highlightRef: R,
						value: j,
						placeholder: dt ? g.chat.listening : Nt,
						accessibleLabel: Nt,
						onChange: _t,
						onKeyDown: At,
						onPaste: xt,
						onBlur: Ge,
						onCursorUpdate: vt,
						onScroll: yt,
						highlightSegments: Xe,
						hasOverlay: Ze,
						isAutocompleteOpen: B.isOpen || V.isOpen,
						autocompleteListboxId: B.isOpen ? B.listboxId : V.isOpen ? qe : void 0,
						activeAutocompleteOptionId: B.activeDescendantId ?? Ye
					}),
					/* @__PURE__ */ f("div", {
						className: "grid",
						children: /* @__PURE__ */ f(m, {
							initial: !1,
							children: dt ? /* @__PURE__ */ p(h.div, {
								className: "flex items-center gap-3 p-3 [grid-area:1/1]",
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								transition: { duration: A ? 0 : .15 },
								children: [/* @__PURE__ */ f(ie, {
									stream: G.stream,
									className: "min-w-0 flex-1"
								}), /* @__PURE__ */ p("div", {
									className: "flex shrink-0 items-center gap-2",
									children: [/* @__PURE__ */ f(a, {
										variant: "outline",
										size: "md",
										hideLabel: !0,
										label: g.chat.cancelRecording,
										icon: r,
										onClick: () => {
											G.cancel(), k.onVoiceRecordingCancelled();
										}
									}), /* @__PURE__ */ f(a, {
										variant: "default",
										size: "md",
										hideLabel: !0,
										label: ct ? g.chat.sendVoiceNote : g.chat.stopRecording,
										icon: n,
										onClick: G.stop
									})]
								})]
							}, "recording-row") : /* @__PURE__ */ p(h.div, {
								className: "flex items-center justify-between p-3 [grid-area:1/1]",
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								transition: { duration: A ? 0 : .15 },
								children: [
									/* @__PURE__ */ f("input", {
										ref: Ue,
										type: "file",
										multiple: !0,
										className: "hidden",
										onChange: (e) => {
											J(Array.from(e.target.files ?? []), "button"), e.target.value = "";
										}
									}),
									/* @__PURE__ */ p("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ f(a, {
											variant: "outline",
											size: "md",
											hideLabel: !0,
											label: g.chat.attachFile,
											icon: ee,
											onClick: () => Ue.current?.click(),
											disabled: !T || K
										}), /* @__PURE__ */ f(Ee, {
											variant: "outline",
											size: "md",
											label: g.chat.addEmoji,
											onSelect: Dt
										})]
									}),
									/* @__PURE__ */ p("div", {
										className: "flex items-center gap-1",
										children: [ft && /* @__PURE__ */ f(a, {
											variant: "outline",
											size: "md",
											hideLabel: !0,
											label: W ? g.chat.sendingVoiceNote : g.chat.recordAudio,
											icon: i,
											onClick: jt,
											loading: Ve || K || W
										}), /* @__PURE__ */ f(m, {
											initial: !1,
											mode: "popLayout",
											children: /* @__PURE__ */ f(h.div, {
												className: "flex",
												initial: !A && {
													opacity: 0,
													scale: .95
												},
												animate: {
													opacity: 1,
													scale: 1
												},
												exit: A ? void 0 : {
													opacity: 0,
													transition: { duration: .1 }
												},
												transition: {
													duration: .15,
													ease: o
												},
												children: /* @__PURE__ */ f(a, {
													variant: "default",
													size: "md",
													hideLabel: !0,
													label: X ? g.chat.saveEdit : g.actions.send,
													icon: X ? n : t,
													onClick: Et,
													disabled: !q
												})
											}, `${X ? "save" : "send"}-${mt}`)
										})]
									})
								]
							}, "actions-row")
						})
					})
				]
			})
		})
	});
};
//#endregion
export { g as ChatComposer };
