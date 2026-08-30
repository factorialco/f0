import { cn as e } from "../../../../lib/utils.js";
import { EnhanceActivator as t } from "../Enhance/EnhanceActivator.js";
import { ToolbarDivider as n } from "../Toolbar/ToolbarDivider/index.js";
import { Toolbar as r } from "../Toolbar/index.js";
import { memo as i, useEffect as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { BubbleMenu as d, isTextSelection as f } from "@tiptap/react";
import { NodeSelection as p } from "prosemirror-state";
//#region src/components/RichText/internal/BubbleMenu/index.tsx
var m = { modifiers: [{
	name: "preventOverflow",
	options: {
		boundary: "viewport",
		padding: 12,
		altAxis: !0,
		tether: !0
	}
}, {
	name: "flip",
	options: { fallbackPlacements: [
		"bottom-start",
		"bottom-end",
		"top",
		"top-start",
		"top-end"
	] }
}] }, h = i(function({ editorId: i, editor: h, disableButtons: g, isToolbarOpen: _, isFullscreen: v, plainHtmlMode: y = !1, enhance: b }) {
	let x = !!b?.error, S = !!b?.config && !!(b.isLoading || b.isAcceptChangesOpen), C = o(null), [w, T] = s();
	return a(() => {
		if (!C.current) return;
		let e = () => {
			T(C.current?.offsetWidth);
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), /* @__PURE__ */ l(d, {
		tippyOptions: {
			duration: 100,
			placement: "bottom",
			hideOnClick: !1,
			interactive: !0,
			maxWidth: "none",
			appendTo: () => v ? document.body : document.getElementById(i) || document.body,
			zIndex: 9999,
			popperOptions: m
		},
		editor: h,
		shouldShow: ({ view: e, state: t, from: n, to: r }) => {
			if (S) return !0;
			let { doc: a, selection: o } = t, { empty: s } = o;
			if (o instanceof p) return !1;
			let c = !a.textBetween(n, r).length && f(t.selection), l = document.getElementById(i)?.contains(document.activeElement);
			return !(!(e.hasFocus() || l) || s || c || !h.isEditable);
		},
		children: !_ && (!x || S) && /* @__PURE__ */ u("div", {
			ref: C,
			className: e("dark z-50 flex w-max flex-row items-center gap-1 rounded-md border border-solid border-f1-border bg-f1-background p-1.5 drop-shadow-sm", S && "invisible"),
			children: [b?.config && /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l(t, {
				enhance: b,
				disabled: g,
				darkMode: !0,
				menuWidth: w,
				menuContainerRef: C,
				lockToViewportOnLock: !0
			}), /* @__PURE__ */ l(n, {})] }), /* @__PURE__ */ l(r, {
				editor: h,
				disableButtons: g,
				darkMode: !0,
				showEmojiPicker: !1,
				plainHtmlMode: y
			})]
		})
	});
});
//#endregion
export { h as EditorBubbleMenu };
