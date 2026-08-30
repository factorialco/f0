import { useF0ChatEmit as e } from "../providers/F0ChatProvider.js";
import { getTextareaCaretCoordinates as t } from "./useMentions.js";
import { findEmojiByShortcode as n, searchEmoji as r } from "../utils/emoji-index.js";
import { detectMaxEmojiVersion as i } from "../utils/emoji-support.js";
import { useEmojiLocaleTerms as a } from "./useEmojiLocaleTerms.js";
import { useCallback as o, useEffect as s, useId as c, useMemo as l, useState as u } from "react";
//#region src/sds/chat/F0Chat/hooks/useEmojiAutocomplete.ts
var d = 8, f = (e, t) => r(e, {
	limit: d,
	maxVersion: i(),
	localizedTerms: t
}), p = (e, t) => {
	let n = e.slice(0, t), r = n.lastIndexOf(":");
	if (r === -1 || r > 0 && !/\s/.test(e[r - 1] ?? "")) return null;
	let i = n.slice(r + 1);
	return /^[a-zA-Z0-9_+-]*$/.test(i) ? {
		colonIndex: r,
		query: i
	} : null;
}, m = (e, t) => {
	let r = e.slice(0, t).match(/(^|\s):([a-zA-Z0-9_+-]+):$/);
	if (!r) return null;
	let i = n(r[2] ?? "");
	if (!i) return null;
	let a = r[1]?.length ?? 0, o = t - r[0].length + a;
	return {
		value: e.slice(0, o) + i.native + e.slice(t),
		cursorPosition: o + i.native.length
	};
}, h = (e, t) => `${e}-option-${Array.from(t, (e) => e.codePointAt(0).toString(16)).join("-")}`;
function g({ inputValue: n, setInputValue: r, cursorPosition: i, setCursorPosition: d, textareaRef: m }) {
	let g = e(), _ = `chat-emoji-autocomplete-${c().replace(/:/g, "")}`, [v, y] = u(0), [b, x] = u(null), S = a(), C = l(() => p(n, i), [n, i]), w = l(() => C ? f(C.query, S) : [], [C, S]), T = C !== null && C.colonIndex !== b && w.length > 0, E = w[v] ? v : 0;
	s(() => {
		y(0), C || x(null);
	}, [C?.colonIndex, C?.query]);
	let D = o(() => {
		x(C?.colonIndex ?? null), y(0);
	}, [C?.colonIndex]), O = o((e) => {
		if (!C) return;
		let t = n.slice(0, C.colonIndex), a = n.slice(i), o = /^\s/.test(a), s = t + e.native + (o ? "" : " ") + a, c = t.length + e.native.length + +!o;
		r(s), d(c), D(), g.onEmojiInserted({
			emoji: e.native,
			source: "autocomplete"
		}), requestAnimationFrame(() => {
			let e = m.current;
			e && (e.focus(), e.setSelectionRange(c, c));
		});
	}, [
		C,
		n,
		i,
		r,
		d,
		D,
		m,
		g
	]), k = o((e) => {
		if (!T || e.nativeEvent?.isComposing) return !1;
		if (e.key === "Escape") return e.preventDefault(), D(), requestAnimationFrame(() => m.current?.focus()), !0;
		if (w.length === 0) return !1;
		switch (e.key) {
			case "ArrowDown": return e.preventDefault(), y((e) => (e + 1) % w.length), !0;
			case "ArrowUp": return e.preventDefault(), y((e) => (e + w.length - 1) % w.length), !0;
			case "Enter":
			case "Tab": {
				if (e.key === "Tab" && e.shiftKey) return !1;
				let t = w[E] ?? w[0];
				return t ? (e.preventDefault(), O(t), !0) : !1;
			}
			default: return !1;
		}
	}, [
		T,
		w,
		E,
		O,
		D,
		m
	]), A = l(() => {
		if (!T || !C) return null;
		let e = m.current;
		if (!e) return null;
		let n = t(e, C.colonIndex);
		return {
			left: e.offsetLeft + n.left,
			bottom: (e.offsetParent ? e.offsetParent.offsetHeight : 0) - (e.offsetTop + n.top)
		};
	}, [
		T,
		C,
		n,
		i,
		m
	]), j = w[E] ?? w[0];
	return {
		isOpen: T,
		query: C?.query ?? "",
		results: w,
		selectedIndex: E,
		popoverPosition: A,
		listboxId: _,
		activeDescendantId: T && j ? h(_, j.id) : void 0,
		handleKeyDown: k,
		selectCandidate: O,
		setSelectedIndex: y,
		close: D
	};
}
//#endregion
export { p as findEmojiTrigger, h as getEmojiAutocompleteOptionId, m as replaceClosedEmojiShortcode, f as searchEmojiCandidates, g as useEmojiAutocomplete };
