import e from "../../../../icons/app/Reaction.js";
import { ButtonInternal as t } from "../../../../components/F0Button/internal.js";
import { Popover as n, PopoverContent as r, PopoverTrigger as i } from "../../../../ui/popover.js";
import { EmojiPicker as a } from "./EmojiPicker/index.js";
import { useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatEmojiPickerButton.tsx
var l = ({ onSelect: l, label: u, size: d = "md", variant: f = "outline", icon: p }) => {
	let [m, h] = o(!1);
	return /* @__PURE__ */ c(n, {
		open: m,
		onOpenChange: h,
		children: [/* @__PURE__ */ s(i, {
			asChild: !0,
			children: /* @__PURE__ */ s(t, {
				variant: f,
				compact: !0,
				hideLabel: !0,
				label: u,
				size: d,
				icon: p ?? e,
				pressed: m,
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), h((e) => !e);
				}
			})
		}), /* @__PURE__ */ s(r, {
			align: "start",
			collisionPadding: 12,
			className: "w-auto overflow-hidden p-0 border border-solid border-f1-border-secondary rounded-lg shadow-md",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation();
			},
			children: /* @__PURE__ */ s(a, { onSelect: (e) => {
				l(e), h(!1);
			} })
		})]
	});
};
//#endregion
export { l as ChatEmojiPickerButton };
