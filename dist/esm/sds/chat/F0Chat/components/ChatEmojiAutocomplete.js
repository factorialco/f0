import { cn as e } from "../../../../lib/utils.js";
import { EmojiImage as t } from "../../../../lib/emojis.js";
import { OneEllipsis as n } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { getEmojiAutocompleteOptionId as r } from "../hooks/useEmojiAutocomplete.js";
import { useEffect as i, useLayoutEffect as a, useRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatEmojiAutocomplete.tsx
function l({ isOpen: l, results: u, selectedIndex: d, position: f, listboxId: p, label: m, onSelect: h, onHighlight: g }) {
	let _ = o(null), v = o(null);
	return i(() => {
		v.current?.scrollIntoView({ block: "nearest" });
	}, [d]), a(() => {
		let e = _.current, t = e?.offsetParent;
		if (!e || !t) return;
		let n = e.offsetLeft + e.offsetWidth - t.clientWidth;
		n > 0 && (e.style.left = `${Math.max(0, e.offsetLeft - n)}px`);
	}, [f]), !l || u.length === 0 ? null : /* @__PURE__ */ s("div", {
		ref: _,
		id: p,
		role: "listbox",
		"aria-label": m,
		style: {
			position: "absolute",
			bottom: f ? `${f.bottom}px` : "100%",
			left: f ? `${f.left}px` : 0
		},
		className: e("z-50", "w-72 max-h-[328px] overflow-y-auto", "rounded-lg border border-solid border-f1-border-secondary", "bg-f1-background shadow-md", "p-1"),
		children: u.map((i, a) => {
			let o = a === d;
			return /* @__PURE__ */ c("div", {
				ref: o ? v : void 0,
				id: r(p, i.id),
				role: "option",
				"aria-selected": o,
				className: e("flex cursor-pointer items-center gap-2 rounded p-2", "transition-colors", o ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"),
				onMouseEnter: () => g(a),
				onMouseDown: (e) => e.preventDefault(),
				onClick: () => h(i),
				children: [/* @__PURE__ */ s("span", {
					className: "flex size-6 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ s(t, {
						emoji: i.native,
						mode: "native",
						size: "md",
						alt: ""
					})
				}), /* @__PURE__ */ c("div", {
					className: "flex min-w-0 flex-1 items-baseline gap-2",
					children: [/* @__PURE__ */ s(n, {
						className: "shrink-0 font-medium text-f1-foreground",
						children: `:${i.id}:`
					}), /* @__PURE__ */ s(n, {
						className: "text-sm text-f1-foreground-secondary",
						children: i.name
					})]
				})]
			}, i.id);
		})
	});
}
//#endregion
export { l as ChatEmojiAutocomplete };
