import "react";
import { jsx as e, jsxs as t } from "react/jsx-runtime";
import * as n from "@radix-ui/react-popover";
//#region src/components/RichText/internal/Extensions/Mention/MentionPopover/index.tsx
var r = ({ content: r, anchorRect: i, editor: a }) => {
	let o = {
		position: "absolute",
		top: i.bottom + window.scrollY,
		left: i.left + window.scrollX,
		width: 0,
		height: 0
	};
	return /* @__PURE__ */ t(n.Root, {
		open: !0,
		modal: !1,
		onOpenChange: (e) => {
			e && a?.commands.focus();
		},
		children: [
			/* @__PURE__ */ e("div", { style: o }),
			/* @__PURE__ */ e(n.Anchor, {
				asChild: !0,
				children: /* @__PURE__ */ e("div", { style: o })
			}),
			/* @__PURE__ */ e(n.Content, {
				side: "top",
				align: "start",
				sideOffset: 25,
				collisionPadding: 10,
				style: { zIndex: 9999 },
				onMouseDownCapture: () => {
					a?.commands.focus();
				},
				onOpenAutoFocus: (e) => {
					e.preventDefault();
				},
				onCloseAutoFocus: (e) => {
					e.preventDefault();
				},
				children: /* @__PURE__ */ e("div", { ref: (e) => {
					e && r.parentNode !== e && e.appendChild(r);
				} })
			})
		]
	});
};
//#endregion
export { r as MentionPopover };
