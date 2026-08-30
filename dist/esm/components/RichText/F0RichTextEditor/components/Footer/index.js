import { cn as e } from "../../../../../lib/utils.js";
import t from "../../../../../icons/app/Check.js";
import n from "../../../../../icons/app/Cross.js";
import r from "../../../../../icons/app/Microphone.js";
import i from "../../../../../icons/app/Paperclip.js";
import a from "../../../../../icons/app/TextSize.js";
import { useI18n as o } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as s } from "../../../../F0Button/F0Button.js";
import { AIEnhanceMenu as c } from "../../../internal/Enhance/EnhanceMenu.js";
import { EnhanceActivator as l } from "../../../internal/Enhance/EnhanceActivator.js";
import { Toolbar as ee } from "../../../internal/Toolbar/index.js";
import { UPLOAD_INPUT_ID as u } from "../../utils/constants.js";
import { RecordingWaveform as d } from "../../../../../kits/ai/F0AiChatTextArea/components/RecordingWaveform.js";
import { ActionsMenu as f } from "./ActionsMenu/index.js";
import { useEffect as p, useRef as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
import { motion as y } from "motion/react";
import { useEditorState as b } from "@tiptap/react";
//#region src/components/RichText/F0RichTextEditor/components/Footer/index.tsx
var x = ({ editor: x, maxCharacters: S, secondaryAction: C, primaryAction: w, fileInputRef: T, canUseFiles: E, enhance: D, isFullscreen: O, disableButtons: k, disabled: A = !1, setIsToolbarOpen: j, isToolbarOpen: M, plainHtmlMode: N, canRecord: P, recordingStatus: F = "idle", recordingStream: I, onStartRecording: L, onStopRecording: R, onCancelRecording: z }) => {
	let B = o(), [V, H] = h(!1), U = m(null), [W, G] = h(0), [K, q] = h(!1), J = K && !O && !D.isLoading;
	p(() => {
		U.current && G(U.current.offsetWidth);
		let e = () => {
			U.current && G(U.current.offsetWidth);
		};
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let Y = W < 500, X = b({
		editor: x,
		selector: ({ editor: e }) => e.storage.characterCount?.characters() ?? 0
	}), Z = (e) => {
		e.preventDefault(), T?.current ? T.current.click() : document.getElementById(u)?.click();
	}, Q = () => /* @__PURE__ */ _(s, {
		onClick: (e) => {
			e?.preventDefault(), j(!0);
		},
		variant: "outline",
		size: "md",
		label: "Toolbar",
		disabled: k,
		hideLabel: !0,
		icon: a
	}), $ = () => /* @__PURE__ */ v(g, { children: [
		P && /* @__PURE__ */ _(s, {
			label: B.ai.recordAudio,
			hideLabel: !0,
			icon: r,
			variant: "outline",
			disabled: k,
			onClick: (e) => {
				e?.preventDefault(), L?.();
			},
			loading: F === "transcribing"
		}),
		E && /* @__PURE__ */ _(s, {
			icon: i,
			onClick: Z,
			hideLabel: !0,
			label: "Add Attachment",
			variant: "outline",
			disabled: k
		}),
		D.config && !O && /* @__PURE__ */ _(l, {
			enhance: D,
			disabled: k,
			hideLabel: Y,
			menuWidth: W,
			menuContainerRef: U,
			onOpenChange: q,
			hideReviewPanel: !0
		}),
		S && !Y && /* @__PURE__ */ v("p", {
			className: "text-sm font-normal text-f1-foreground-secondary",
			children: [
				X,
				"/",
				S
			]
		})
	] });
	return F === "recording" ? /* @__PURE__ */ v("div", {
		ref: U,
		className: "flex min-h-[56px] max-w-full items-center gap-3 py-3",
		children: [/* @__PURE__ */ v("div", {
			className: "flex shrink-0 items-center gap-2",
			children: [/* @__PURE__ */ _(s, {
				label: B.ai.cancelRecording,
				hideLabel: !0,
				icon: n,
				variant: "outline",
				size: "md",
				onClick: (e) => {
					e?.preventDefault(), z?.();
				}
			}), /* @__PURE__ */ _(s, {
				label: B.ai.stopRecording,
				hideLabel: !0,
				icon: t,
				variant: "default",
				size: "md",
				onClick: (e) => {
					e?.preventDefault(), R?.();
				}
			})]
		}), /* @__PURE__ */ _(d, {
			stream: I ?? null,
			className: "min-w-0 flex-1",
			anchor: "left"
		})]
	}) : /* @__PURE__ */ v("div", {
		ref: U,
		className: "relative flex min-h-[56px] max-w-full items-center gap-2 py-3",
		children: [
			J && D.isAcceptChangesOpen && /* @__PURE__ */ _("div", {
				className: "absolute inset-x-0 inset-y-0 z-20 flex items-center",
				children: /* @__PURE__ */ _(c, {
					onSelect: () => {},
					enhancementOptions: [],
					inputPlaceholder: "",
					menuState: "review",
					onAccept: D.acceptChanges,
					onReject: D.rejectChanges,
					onRetry: D.retryChanges
				})
			}),
			/* @__PURE__ */ v("div", {
				className: e("relative flex flex-grow items-center gap-2", J && "invisible"),
				children: [
					!O && /* @__PURE__ */ _(y.div, {
						initial: { width: 0 },
						animate: { width: M ? "100%" : 0 },
						transition: {
							duration: .3,
							delay: M ? .15 : 0,
							ease: "easeInOut"
						},
						onAnimationComplete: () => H(M),
						className: e("absolute left-0 top-0 z-10 h-full overflow-hidden", A ? "bg-f1-background-tertiary" : "bg-f1-background"),
						"aria-label": "Rich text editor toolbar",
						children: /* @__PURE__ */ v("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ _(s, {
								onClick: (e) => {
									e.preventDefault(), j(!1), H(!1), queueMicrotask(() => x.commands.focus());
								},
								variant: "neutral",
								size: "md",
								disabled: k,
								hideLabel: !0,
								label: B.actions.close,
								icon: n
							}), /* @__PURE__ */ _(ee, {
								editor: x,
								isFullscreen: O,
								disableButtons: k,
								animationComplete: V,
								plainHtmlMode: N
							})]
						})
					}),
					!O && /* @__PURE__ */ v(y.div, {
						className: "flex items-center gap-2",
						initial: { opacity: 1 },
						animate: { opacity: +!M },
						transition: {
							duration: M ? .15 : .25,
							delay: M ? 0 : .2,
							ease: "easeInOut"
						},
						children: [Q(), $()]
					}),
					O && /* @__PURE__ */ v("div", {
						className: "flex items-center gap-2",
						children: [!M && Q(), $()]
					})
				]
			}),
			/* @__PURE__ */ _("div", {
				className: e("contents", J && "invisible"),
				children: /* @__PURE__ */ _(f, {
					primaryAction: w,
					secondaryAction: C,
					useLittleMode: Y,
					disableButtons: k,
					isFullscreen: O
				})
			})
		]
	});
};
//#endregion
export { x as Footer };
