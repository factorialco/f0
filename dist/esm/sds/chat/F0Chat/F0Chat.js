import { useReducedMotion as e } from "../../../lib/a11y.js";
import { useF0Chat as t } from "./providers/F0ChatProvider.js";
import { ChatUIProvider as n, useChatDrop as r } from "./providers/ChatUIProvider.js";
import { ChatRenderConfigProvider as i } from "./providers/ChatRenderConfigProvider.js";
import { chatPermission as a } from "./utils/capabilities.js";
import { ChatComposer as o } from "./components/ChatComposer.js";
import { ChatDocumentPreview as s } from "./components/ChatDocumentPreview.js";
import { ChatDropOverlay as c } from "./components/ChatDropOverlay.js";
import { ChatHeader as l } from "./components/ChatHeader.js";
import { ChatImagePreview as u } from "./components/ChatImagePreview.js";
import { ChatMessagesContainer as d } from "./components/ChatMessagesContainer.js";
import { ChatReadOnlyNotice as f } from "./components/ChatReadOnlyNotice.js";
import { ChatConnecting as p, ChatEmptyState as m, ChatError as h } from "./components/ChatStates.js";
import { useComposerOverlayLayout as g } from "./hooks/useComposerOverlayLayout.js";
import { useRef as _, useState as v } from "react";
import { jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/F0Chat.tsx
var x = (e) => e.dataTransfer?.types?.includes("Files"), S = ({ isFullscreen: e, onToggleFullscreen: n, onClose: i, headerActions: S }) => {
	let { channel: C, status: w, messages: T, capabilities: E } = t(), { dropFiles: D } = r(), O = a("canSend", C.type, E), { shellRef: k, composerOverlayRef: A } = g(O), j = _(0), [M, N] = v(!1);
	return /* @__PURE__ */ b("div", {
		ref: k,
		"data-f0-chat-shell": "",
		className: "relative flex h-full min-h-0 w-full flex-col overflow-x-hidden",
		onDragEnter: (e) => {
			x(e) && (e.preventDefault(), e.stopPropagation(), j.current++, N(!0));
		},
		onDragOver: (e) => {
			x(e) && (e.preventDefault(), e.stopPropagation());
		},
		onDragLeave: (e) => {
			x(e) && (e.preventDefault(), e.stopPropagation(), j.current--, j.current <= 0 && (j.current = 0, N(!1)));
		},
		onDrop: (e) => {
			if (!x(e)) return;
			e.preventDefault(), e.stopPropagation(), j.current = 0, N(!1);
			let t = Array.from(e.dataTransfer.files);
			t.length > 0 && D(t);
		},
		children: [
			/* @__PURE__ */ y(l, {
				channel: C,
				isFullscreen: e,
				onToggleFullscreen: n,
				onClose: i,
				actions: typeof S == "function" ? S(C) : S
			}),
			w === "connecting" ? /* @__PURE__ */ y(p, {}) : w === "error" ? /* @__PURE__ */ y(h, {}) : T.length > 0 ? /* @__PURE__ */ y(d, {}, C.id) : y(w === "ready" ? m : p, {}),
			O ? /* @__PURE__ */ y("div", {
				ref: A,
				"data-testid": "chat-composer-overlay",
				className: "pointer-events-none absolute inset-x-0 bottom-0 z-20",
				children: /* @__PURE__ */ y(o, {})
			}) : /* @__PURE__ */ y(f, { channel: C }),
			/* @__PURE__ */ y(c, { visible: M && O }),
			/* @__PURE__ */ y(u, {}),
			/* @__PURE__ */ y(s, {})
		]
	});
}, C = (t) => {
	let r = e();
	return /* @__PURE__ */ y(i, {
		reducedMotion: r,
		children: /* @__PURE__ */ y(n, { children: /* @__PURE__ */ y(S, { ...t }) })
	});
};
//#endregion
export { C as F0Chat };
