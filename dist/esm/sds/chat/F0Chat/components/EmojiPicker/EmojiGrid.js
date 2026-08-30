import { cn as e } from "../../../../../lib/utils.js";
import { EmojiImage as t } from "../../../../../lib/emojis.js";
import { ScrollBar as n } from "../../../../../ui/scrollarea.js";
import { emojiButtonClass as r } from "./button.js";
import { forwardRef as i, useCallback as a, useMemo as o, useRef as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import * as u from "@radix-ui/react-scroll-area";
import { GroupedVirtuoso as d } from "react-virtuoso";
//#region src/sds/chat/F0Chat/components/EmojiPicker/EmojiGrid.tsx
var f = 32, p = () => /* @__PURE__ */ c("div", { className: "h-2" }), m = i(function({ style: t, children: r, className: i, context: o, ...s }, d) {
	let f = a((e) => {
		o.viewportRef.current = e, typeof d == "function" ? d(e) : d && (d.current = e);
	}, [d, o]);
	return /* @__PURE__ */ l(u.Root, {
		className: e("overflow-hidden", i),
		scrollHideDelay: 200,
		children: [
			/* @__PURE__ */ c(u.Viewport, {
				ref: f,
				style: t,
				className: "size-full [&>div]:!block",
				...s,
				children: r
			}),
			/* @__PURE__ */ c(n, { orientation: "vertical" }),
			/* @__PURE__ */ c(u.Corner, {})
		]
	});
}), h = i(function({ sections: e, layout: n, activeIndex: i, onActivate: l, onSelect: u, listboxId: h, label: g, optionId: _, onTopRowChange: v }, y) {
	let b = s(null), x = o(() => ({ viewportRef: b }), []), S = a((e) => {
		let t = b.current?.firstElementChild;
		t instanceof HTMLElement && (t.style.minHeight = `${e}px`);
	}, []);
	return /* @__PURE__ */ c(d, {
		ref: y,
		id: h,
		role: "listbox",
		"aria-label": g,
		className: "min-h-0 flex-1",
		style: { height: "100%" },
		context: x,
		components: {
			Scroller: m,
			Header: p,
			Footer: p
		},
		totalListHeightChanged: S,
		groupCounts: n.groupCounts,
		defaultItemHeight: f,
		rangeChanged: ({ startIndex: e }) => v(e),
		groupContent: (t) => {
			let n = e[t]?.label;
			return n ? /* @__PURE__ */ c("div", {
				className: "bg-f1-background px-2 pb-1 pt-2 text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary",
				children: n
			}) : /* @__PURE__ */ c("div", { className: "h-0" });
		},
		itemContent: (e) => {
			let a = n.rows[e];
			return a ? /* @__PURE__ */ c("div", {
				className: "flex px-2",
				style: { height: f },
				children: a.emojis.map((e, n) => {
					let o = a.startIndex + n, s = o === i;
					return /* @__PURE__ */ c("button", {
						type: "button",
						role: "option",
						id: _(o),
						"aria-selected": s,
						"aria-label": e.name,
						tabIndex: -1,
						onMouseDown: (e) => e.preventDefault(),
						onMouseEnter: () => l(o),
						onClick: () => u(e),
						className: r(s),
						style: {
							width: 32,
							height: 32
						},
						children: /* @__PURE__ */ c(t, {
							emoji: e.native,
							mode: "native",
							size: "md",
							alt: ""
						})
					}, e.id);
				})
			}) : null;
		}
	});
});
//#endregion
export { f as EMOJI_ROW_HEIGHT, h as EmojiGrid };
