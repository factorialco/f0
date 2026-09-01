import { cn as e } from "../../../../../lib/utils.js";
import { useReducedMotion as t } from "../../../../../lib/a11y.js";
import { useAiChat as n } from "../../providers/AiChatStateProvider.js";
import { WIDGET_DRAG_END as r, WIDGET_DRAG_START as i } from "../../../../../lib/dnd/widgetDragEvents.js";
import { DropOverlay as ee } from "../../../F0AiChatTextArea/components/DropOverlay.js";
import { F0AiPong as a } from "../../../F0AiPong/F0AiPong.js";
import { ResizeHandle as o } from "./ResizeHandle.js";
import { useCallback as s, useEffect as c, useMemo as te, useRef as l, useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { AnimatePresence as p, motion as m } from "motion/react";
import { useMediaQuery as ne } from "usehooks-ts";
import { breakpoints as re } from "@factorialco/f0-core";
//#region src/kits/ai/F0AiChat/components/layout/ChatWindow.tsx
var h = ({ children: h, visible: ie, side: ae, exitStyle: g = "shrink", acceptsWidgetDrop: _ = !1 }) => {
	let { open: v, visualizationMode: y, shouldPlayEntranceAnimation: b, setShouldPlayEntranceAnimation: oe, resizable: x, setChatWidth: S, resetChatWidth: C, setIsResizing: w, fileAttachments: T, isClarifying: E, fileDragOver: D, setFileDragOver: O, processDroppedFiles: se, setPendingQuote: k, focusChatInput: A, activeGame: j, closeGame: ce, panelSide: M } = n(), N = ie ?? v, P = _ && j === null && N && !E, F = l(P);
	F.current = P;
	let I = l(null), L = y === "canvas", R = t(), z = (ae ?? M) === "left", B = l(!1);
	c(() => {
		B.current = v;
	});
	let V = l(0), H = T?.onUploadFiles != null && !E;
	c(() => {
		P || I.current?.removeAttribute("data-ai-chat-dropzone");
	}, [P]);
	let U = s((e) => {
		e.preventDefault(), e.stopPropagation(), V.current++, H && O(!0);
	}, [H, O]), W = s((e) => {
		e.preventDefault(), e.stopPropagation();
	}, []), le = s((e) => {
		e.preventDefault(), e.stopPropagation(), V.current--, V.current <= 0 && (V.current = 0, O(!1));
	}, [O]), ue = s((e) => {
		e.preventDefault(), e.stopPropagation(), V.current = 0, O(!1);
	}, [O]), G = l(null), [K, de] = u(null), q = s((e) => {
		G.current = e, de(e?.title ?? null);
	}, []);
	c(() => {
		let e = (e) => {
			if (!P) return;
			let t = e.detail;
			typeof t?.id != "string" || !t.id || typeof t.title != "string" || !t.title.trim() || q(t);
		}, t = () => q(null);
		return window.addEventListener(i, e), window.addEventListener(r, t), () => {
			window.removeEventListener(i, e), window.removeEventListener(r, t);
		};
	}, [P, q]), c(() => {
		P || q(null);
	}, [P, q]);
	let fe = s(() => {
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
				}), k(t), A();
			}
		}
	}, [
		P,
		A,
		q,
		k
	]), J = y === "fullscreen", [Y, X] = u(!1);
	c(() => {
		if (Y) return w?.(!0), () => w?.(!1);
	}, [Y, w]);
	let Z = ne(`(max-width: ${re.md}px)`, { initializeWithValue: !0 }), Q = s((e) => {
		S((t) => {
			let n = t + e;
			return Math.max(300, Math.min(712, n));
		});
	}, [S]), pe = te(() => Y || R ? { duration: 0 } : {
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
		b
	]), $ = z ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
	return /* @__PURE__ */ d(p, { children: N && /* @__PURE__ */ f(m.div, {
		className: e("bg-f1-transparent pointer-events-auto relative flex h-full dark:bg-f1-background md:py-1", J ? "md:pr-1" : z ? "mr-auto" : "ml-auto md:pr-1"),
		initial: !R && b && !B.current ? {
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
		} : g === "hold" ? {
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
			b && oe(!1);
		},
		children: [
			x && !J && !Z && !z && /* @__PURE__ */ d(o, {
				onResize: Q,
				onReset: C,
				isResizing: Y,
				setIsResizing: X,
				isCanvasMode: L,
				side: "right"
			}),
			/* @__PURE__ */ f("div", {
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
					/* @__PURE__ */ d("div", {
						className: "relative flex h-full w-full flex-col overflow-hidden",
						children: h
					}),
					(H || P && K !== null) && /* @__PURE__ */ d(ee, {
						visible: H && D || K !== null,
						mode: K === null ? "files" : "discuss",
						onFilesDropped: H ? (e) => {
							V.current = 0, O(!1), se(e);
						} : void 0
					}),
					j === "pong" && /* @__PURE__ */ d(a, { onClose: ce })
				]
			}),
			x && !J && !Z && z && /* @__PURE__ */ d(o, {
				onResize: Q,
				onReset: C,
				isResizing: Y,
				setIsResizing: X,
				isCanvasMode: L,
				side: "left"
			})
		]
	}, "chat-wrapper") });
};
//#endregion
export { h as SidebarWindow };
