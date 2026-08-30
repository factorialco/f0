import { useReducedMotion as e } from "../../../../../lib/a11y.js";
import { Skeleton as t } from "../../../../../ui/skeleton.js";
import { useAiChat as n } from "../../providers/AiChatStateProvider.js";
import { SidebarWindow as r } from "./ChatWindow.js";
import { useRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
import { AnimatePresence as o, motion as s } from "motion/react";
//#region src/kits/ai/F0AiChat/components/layout/HostedPanelWindow.tsx
var c = () => {
	let { open: c, panelContent: l, panelContentSide: u, restoringPanelContentId: d } = n(), f = e(), p = i(l);
	l && (p.current = l);
	let m = !l && d ? {
		id: d,
		content: /* @__PURE__ */ a(t, {
			role: "status",
			"aria-busy": !0,
			className: "h-full w-full rounded-none"
		})
	} : null, h = l ?? m ?? p.current;
	return /* @__PURE__ */ a(r, {
		visible: c && (l !== null || m !== null),
		side: u,
		exitStyle: c ? "hold" : "shrink",
		children: /* @__PURE__ */ a(o, {
			initial: !1,
			children: /* @__PURE__ */ a(s.div, {
				className: "absolute inset-0 flex flex-col overflow-hidden",
				initial: !f && { opacity: 0 },
				animate: { opacity: 1 },
				exit: f ? void 0 : { opacity: 0 },
				transition: {
					duration: f ? 0 : .15,
					ease: "easeOut"
				},
				children: h?.content
			}, h ? `panel:${h.id}` : "panel:none")
		})
	});
};
//#endregion
export { c as HostedPanelWindow };
