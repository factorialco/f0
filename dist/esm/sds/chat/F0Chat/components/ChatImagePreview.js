"use client";
import e from "../../../../icons/app/ChevronLeft.js";
import t from "../../../../icons/app/ChevronRight.js";
import n from "../../../../icons/app/Cross.js";
import r from "../../../../icons/app/Download.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as a } from "../../../../components/F0Button/internal.js";
import { DialogContent as o } from "../../../../ui/Dialog/components/DialogContent.js";
import { DialogTitle as s } from "../../../../ui/Dialog/components/DialogTitle.js";
import { Dialog as c } from "../../../../ui/Dialog/dialog.js";
import { useF0ChatEmit as l } from "../providers/F0ChatProvider.js";
import { useChatImagePreview as u } from "../providers/ChatUIProvider.js";
import { useChatRenderConfig as d } from "../providers/ChatRenderConfigProvider.js";
import { EASE_OUT_SWIFT as f } from "../utils/chat-motion.js";
import { triggerDownload as p } from "../utils/download.js";
import { FadeInImage as m } from "./FadeInImage.js";
import { useCallback as h, useEffect as g, useState as _ } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
import { AnimatePresence as b, motion as x } from "motion/react";
//#region src/sds/chat/F0Chat/components/ChatImagePreview.tsx
var S = ({ icon: e, label: t, onClick: n }) => /* @__PURE__ */ v("span", {
	className: "shadow-sm pointer-events-auto z-50 flex rounded bg-f1-background",
	children: /* @__PURE__ */ v(a, {
		variant: "outline",
		hideLabel: !0,
		icon: e,
		label: t,
		onClick: n
	})
}), C = () => {
	let a = i(), { reducedMotion: C } = d(), { imagePreview: w, closeImagePreview: T, setImagePreviewIndex: E } = u(), D = l(), [O, k] = _(null);
	g(() => k(document.body), []);
	let A = w !== null, j = w?.images ?? [], M = j.length, N = w?.index ?? 0, P = j[N], F = M > 1, I = h((e) => {
		M !== 0 && E((N + e + M) % M);
	}, [
		M,
		N,
		E
	]);
	return g(() => {
		if (!A || !F) return;
		let e = (e) => {
			e.key === "ArrowRight" ? I(1) : e.key === "ArrowLeft" && I(-1);
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		A,
		F,
		I
	]), /* @__PURE__ */ v(c, {
		open: A,
		onOpenChange: (e) => {
			e || T();
		},
		children: P && /* @__PURE__ */ y(o, {
			container: O,
			className: "h-full w-full max-w-none rounded-none bg-transparent p-0 shadow-none",
			withTranslateAnimation: !1,
			"aria-describedby": void 0,
			children: [
				/* @__PURE__ */ v(s, {
					className: "sr-only",
					children: P.name || a.chat.imagePreview
				}),
				/* @__PURE__ */ v("button", {
					type: "button",
					tabIndex: -1,
					"aria-label": a.chat.closePreview,
					className: "absolute inset-0 cursor-default",
					onClick: T
				}),
				/* @__PURE__ */ v("div", {
					className: "pointer-events-none absolute inset-0 flex items-center justify-center px-4 py-16",
					children: /* @__PURE__ */ v(b, {
						initial: !1,
						mode: "popLayout",
						children: /* @__PURE__ */ v(x.div, {
							className: "pointer-events-auto flex max-h-full max-w-full",
							initial: !C && {
								opacity: 0,
								scale: .98
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: C ? void 0 : {
								opacity: 0,
								transition: { duration: .1 }
							},
							transition: {
								duration: .2,
								ease: f
							},
							children: /* @__PURE__ */ v(m, {
								src: P.url,
								alt: P.name,
								className: "max-h-full max-w-full rounded-lg object-contain"
							})
						}, P.url)
					})
				}),
				/* @__PURE__ */ y("div", {
					className: "pointer-events-none absolute inset-x-0 top-0 flex justify-end gap-1.5 p-3",
					children: [/* @__PURE__ */ v(S, {
						icon: r,
						label: a.chat.download,
						onClick: () => {
							p(P.url, P.name), D.onAttachmentDownloaded({ kind: "image" });
						}
					}), /* @__PURE__ */ v(S, {
						icon: n,
						label: a.chat.closePreview,
						onClick: T
					})]
				}),
				F && /* @__PURE__ */ y("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-3",
					children: [
						/* @__PURE__ */ v(S, {
							icon: e,
							label: a.chat.previousImage,
							onClick: () => I(-1)
						}),
						/* @__PURE__ */ y("span", {
							className: "shadow-sm pointer-events-auto rounded bg-f1-background px-2.5 py-2 text-sm font-medium text-f1-foreground",
							children: [
								N + 1,
								" / ",
								M
							]
						}),
						/* @__PURE__ */ v(S, {
							icon: t,
							label: a.chat.nextImage,
							onClick: () => I(1)
						})
					]
				})
			]
		})
	});
};
//#endregion
export { C as ChatImagePreview, S as PreviewControl };
