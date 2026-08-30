import { useAutoClear as e } from "../hooks/useAutoClear.js";
import { useAiPromotionChat as t } from "../providers/AiPromotionChatStateProvider.js";
import { jsx as n } from "react/jsx-runtime";
import { AnimatePresence as r, motion as i } from "motion/react";
//#region src/experimental/AiPromotionChat/components/ChatWindow.tsx
var a = ({ children: a }) => {
	let { open: o, shouldPlayEntranceAnimation: s, setShouldPlayEntranceAnimation: c, autoClearMinutes: l } = t();
	return e({
		reset: () => {},
		isOpen: o,
		autoClearMinutes: l
	}), /* @__PURE__ */ n(r, { children: o && /* @__PURE__ */ n(i.div, {
		"aria-hidden": !o,
		className: "relative p-1 pl-1.5 w-[360px] flex h-full flex-col overflow-hidden ",
		initial: s ? {
			opacity: 0,
			width: 0
		} : !1,
		animate: {
			opacity: 1,
			width: 360
		},
		exit: {
			opacity: 0,
			width: 0
		},
		transition: {
			duration: .3,
			ease: [
				0,
				0,
				.1,
				1
			]
		},
		onAnimationComplete: () => {
			s && c(!1);
		},
		children: /* @__PURE__ */ n("div", {
			className: "border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full",
			children: /* @__PURE__ */ n(i.div, {
				className: "relative flex h-full w-full flex-col overflow-x-hidden ",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: {
					duration: s ? .3 : .05,
					ease: "easeOut",
					delay: s ? .2 : 0
				},
				children: a
			})
		})
	}, "chat-window") });
};
//#endregion
export { a as SidebarWindow };
