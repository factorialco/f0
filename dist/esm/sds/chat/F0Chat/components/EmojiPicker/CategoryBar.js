import { F0Icon as e } from "../../../../../components/F0Icon/index.js";
import { EmojiImage as t } from "../../../../../lib/emojis.js";
import n from "../../../../../icons/app/ClockBack.js";
import { emojiButtonClass as r } from "./button.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/EmojiPicker/CategoryBar.tsx
var a = "frequent", o = {
	people: "😀",
	nature: "🌿",
	foods: "🍔",
	activity: "⚽",
	places: "🚗",
	objects: "💡",
	symbols: "🔣",
	flags: "🚩"
}, s = ({ sections: a, activeSection: s, onJump: c }) => /* @__PURE__ */ i("div", {
	className: "flex shrink-0 border-t border-solid border-f1-border-secondary px-2 py-1 border-0",
	role: "tablist",
	children: a.map((a) => {
		let l = a.id === s;
		return /* @__PURE__ */ i("button", {
			type: "button",
			role: "tab",
			"aria-selected": l,
			"aria-label": a.label,
			title: a.label,
			tabIndex: -1,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => c(a.id),
			className: r(l),
			style: {
				width: 32,
				height: 32
			},
			children: a.id === "frequent" ? /* @__PURE__ */ i(e, {
				icon: n,
				size: "md"
			}) : /* @__PURE__ */ i(t, {
				emoji: o[a.id],
				mode: "native",
				size: "md",
				alt: ""
			})
		}, a.id);
	})
});
//#endregion
export { s as CategoryBar, a as FREQUENT_SECTION_ID };
