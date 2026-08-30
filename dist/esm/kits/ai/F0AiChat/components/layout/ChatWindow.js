import { cn as e } from "../../../../../lib/utils.js";
import { useReducedMotion as t } from "../../../../../lib/a11y.js";
import { WIDGET_DRAG_END as n, WIDGET_DRAG_START as r } from "../../../../../lib/dnd/widgetDragEvents.js";
import { useAiChat as i } from "../../providers/AiChatStateProvider.js";
import { DropOverlay as a } from "../../../F0AiChatTextArea/components/DropOverlay.js";
import { F0AiPong as o } from "../../../F0AiPong/F0AiPong.js";
import { ResizeHandle as s } from "./ResizeHandle.js";
import { useCallback as c, useEffect as l, useMemo as u, useRef as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
import { AnimatePresence as h, motion as g } from "motion/react";
import { useMediaQuery as _ } from "usehooks-ts";
import { breakpoints as ee } from "@factorialco/f0-core";
//#region src/kits/ai/F0AiChat/components/layout/ChatWindow.tsx
var v = ({ children: v, visible: te, side: ne, exitStyle: re = "shrink", acceptsWidgetDrop: y = !1 }) => {
	let { open: b, visualizationMode: x, shouldPlayEntranceAnimation: S, setShouldPlayEntranceAnimation: ie, resizable: C, setChatWidth: w, resetChatWidth: T, setIsResizing: E, fileAttachments: ae, isClarifying: D, fileDragOver: oe, setFileDragOver: O, processDroppedFiles: k, setPendingQuote: A, focusChatInput: j, activeGame: M, closeGame: se, panelSide: ce } = i(), N = te ?? b, P = y && M === null && N && !D, F = d(P);
	F.current = P;
	let I = d(null), L = x === "canvas", R = t(), z = (ne ?? ce) === "left", B = d(!1);
	l(() => {
		B.current = b;
	});
	let V = d(0), H = ae?.onUploadFiles != null && !D;
	l(() => {
		P || I.current?.removeAttribute("data-ai-chat-dropzone");
	}, [P]);
	let U = c((e) => {
		e.preventDefault(), e.stopPropagation(), V.current++, H && O(!0);
	}, [H, O]), W = c((e) => {
		e.preventDefault(), e.stopPropagation();
	}, []), le = c((e) => {
		e.preventDefault(), e.stopPropagation(), V.current--, V.current <= 0 && (V.current = 0, O(!1));
	}, [O]), ue = c((e) => {
		e.preventDefault(), e.stopPropagation(), V.current = 0, O(!1);
	}, [O]), G = d(null), [K, de] = f(null), q = c((e) => {
		G.current = e, de(e?.title ?? null);
	}, []);
	l(() => {
		let e = (e) => {
			if (!P) return;
			let t = e.detail;
			typeof t?.id != "string" || !t.id || typeof t.title != "string" || !t.title.trim() || q(t);
		}, t = () => q(null);
		return window.addEventListener(r, e), window.addEventListener(n, t), () => {
			window.removeEventListener(r, e), window.removeEventListener(n, t);
		};
	}, [P, q]), l(() => {
		P || q(null);
	}, [P, q]);
	let fe = c(() => {
		if (!F.current) {
			q(null);
			return;
		}
		let e = G.current;
		if (e !== null) {
			if (q(null), e.onAskAi) e.onAskAi({
				id: e.id,
				title: e.title
			});
			else {
				let t = { text: e.title };
				e.onAskAiTarget?.({
					id: e.id,
					title: e.title,
					quote: t
				}), A(t), j();
			}
		}
	}, [
		P,
		j,
		q,
		A
	]), J = x === "fullscreen", [Y, X] = f(!1);
	l(() => {
		if (Y) return E?.(!0), () => E?.(!1);
	}, [Y, E]);
	let Z = _(`(max-width: ${ee.md}px)`, { initializeWithValue: !0 }), Q = c((e) => {
		w((t) => {
			let n = t + e;
			return Math.max(300, Math.min(712, n));
		});
	}, [w]), pe = u(() => Y || R ? { duration: 0 } : {
		duration: .3,
		ease: [
			0,
			0,
			.1,
			1
		]
	}, [
		Y,
		R,
		S
	]), $ = z ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
	return /* @__PURE__ */ p(h, { children: N && /* @__PURE__ */ m(g.div, {
		className: e("bg-f1-transparent pointer-events-auto relative flex h-full dark:bg-f1-background md:py-1", J ? "md:pr-1" : z ? "mr-auto" : "ml-auto md:pr-1"),
		initial: !R && S && !B.current ? {
			opacity: 0,
			clipPath: $
		} : !1,
		animate: {
			opacity: 1,
			clipPath: "inset(0 0 0 0)"
		},
		exit: R ? {
			opacity: 0,
			transition: { duration: 0 }
		} : re === "hold" ? {
			opacity: 0,
			transition: {
				delay: .25,
				duration: .05
			}
		} : {
			opacity: 0,
			clipPath: $
		},
		transition: pe,
		style: {
			width: "100%",
			transformOrigin: z ? "left center" : "right center"
		},
		onAnimationComplete: () => {
			S && ie(!1);
		},
		children: [
			C && !J && !Z && !z && /* @__PURE__ */ p(s, {
				onResize: Q,
				onReset: T,
				isResizing: Y,
				setIsResizing: X,
				isCanvasMode: L,
				side: "right"
			}),
			/* @__PURE__ */ m("div", {
				ref: I,
				"aria-hidden": !N,
				className: e("relative flex h-full w-full flex-col overflow-hidden bg-f1-special-page border border-solid border-f1-border-secondary", L && (z ? "border-r-transparent" : "border-l-transparent"), L ? z ? "xs:rounded-l-xl" : "xs:rounded-r-xl" : "xs:rounded-xl"),
				"data-ai-chat-dropzone": P ? "" : void 0,
				onDragEnter: U,
				onDragOver: W,
				onDragLeave: le,
				onDrop: ue,
				onPointerUp: fe,
				children: [
					/* @__PURE__ */ p("div", {
						className: "relative flex h-full w-full flex-col overflow-hidden",
						children: v
					}),
					(H || P && K !== null) && /* @__PURE__ */ p(a, {
						visible: H && oe || K !== null,
						mode: K === null ? "files" : "discuss",
						onFilesDropped: H ? (e) => {
							V.current = 0, O(!1), k(e);
						} : void 0
					}),
					M === "pong" && /* @__PURE__ */ p(o, { onClose: se })
				]
			}),
			C && !J && !Z && z && /* @__PURE__ */ p(s, {
				onResize: Q,
				onReset: T,
				isResizing: Y,
				setIsResizing: X,
				isCanvasMode: L,
				side: "left"
			})
		]
	}, "chat-wrapper") });
};
//#endregion
export { v as SidebarWindow };
