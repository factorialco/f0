import { cn as e } from "../../../../../lib/utils.js";
import { useI18n as t } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0SearchInput as n } from "../../../../../components/F0SearchInput/F0SearchInput.js";
import { EMOJI_CATEGORIES as r, searchEmoji as i } from "../../utils/emoji-index.js";
import { detectMaxEmojiVersion as a } from "../../utils/emoji-support.js";
import { useEmojiLocaleTerms as o } from "../../hooks/useEmojiLocaleTerms.js";
import { CategoryBar as s, FREQUENT_SECTION_ID as c } from "./CategoryBar.js";
import { EmojiGrid as l } from "./EmojiGrid.js";
import { buildEmojiLayout as u, moveActiveIndex as d } from "./layout.js";
import { useFrequentEmoji as f } from "./useFrequentEmoji.js";
import { useCallback as p, useEffect as m, useId as h, useMemo as g, useRef as _, useState as v } from "react";
import { jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/EmojiPicker/index.tsx
var x = [
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown",
	"Home",
	"End"
], S = (e) => x.includes(e), C = ({ onSelect: x, className: C, emojiVersion: w, autoFocusSearch: T = !0, locale: E }) => {
	let D = t(), O = `f0-emoji-picker-${h().replace(/:/g, "")}`, k = p((e) => `${O}-option-${e}`, [O]), A = _(null), j = _(null), [M, N] = v(""), [P, F] = v(0), [I, L] = v(0), R = g(() => w ?? a(), [w]);
	m(() => {
		T && j.current?.focus();
	}, [T]);
	let { frequent: z, recordUse: B } = f(), V = o(E), H = D.chat.emojiPicker.categories, U = g(() => r.map((e) => ({
		id: e.id,
		label: H[e.id],
		emojis: e.emojis.filter((e) => e.version <= R)
	})).filter((e) => e.emojis.length > 0), [H, R]), W = g(() => {
		let e = z.filter((e) => e.version <= R);
		return e.length > 0 ? [{
			id: c,
			label: D.chat.emojiPicker.frequentlyUsed,
			emojis: e
		}, ...U] : U;
	}, [
		z,
		R,
		D.chat.emojiPicker.frequentlyUsed,
		U
	]), G = M.trim().length > 0, K = g(() => {
		if (!G) return W;
		let e = i(M, {
			maxVersion: R,
			localizedTerms: V
		});
		return e.length > 0 ? [{
			id: "results",
			label: "",
			emojis: e
		}] : [];
	}, [
		G,
		M,
		R,
		V,
		W
	]), q = g(() => u(K, 9), [K]);
	m(() => {
		G && A.current?.scrollToIndex({
			index: 0,
			align: "start"
		});
	}, [M, G]);
	let J = Math.min(P, Math.max(0, q.flat.length - 1)), Y = p((e) => {
		let t = q.rowByIndex[e];
		t !== void 0 && A.current?.scrollIntoView({ index: t });
	}, [q]), X = p((e) => {
		B(e), x(e.native);
	}, [B, x]), Z = p((e) => {
		if (!e.nativeEvent.isComposing) {
			if (S(e.key)) {
				if (q.flat.length === 0) return;
				e.preventDefault();
				let t = d(q, J, e.key);
				F(t), Y(t);
				return;
			}
			if (e.key === "Enter") {
				let t = q.flat[J];
				if (!t) return;
				e.preventDefault(), X(t);
				return;
			}
			e.key === "Escape" && M.length > 0 && (e.preventDefault(), e.stopPropagation(), N(""), F(0));
		}
	}, [
		q,
		J,
		Y,
		X,
		M
	]), Q = p((e) => {
		let t = W.findIndex((t) => t.id === e);
		if (t === -1) return;
		N("");
		let n = u(W, 9), r = n.firstRowBySection[t] ?? 0;
		F(n.rows[r]?.startIndex ?? 0), requestAnimationFrame(() => {
			A.current?.scrollToIndex({
				groupIndex: t,
				align: "start"
			});
		});
	}, [W]), $ = g(() => {
		if (G) return null;
		let e = q.rows[I]?.sectionIndex;
		return e === void 0 ? null : K[e]?.id ?? null;
	}, [
		G,
		q,
		I,
		K
	]);
	return /* @__PURE__ */ b("div", {
		onKeyDown: Z,
		className: e("flex w-[304px] flex-col overflow-hidden", "h-[clamp(180px,var(--radix-popover-content-available-height,400px),400px)]", C),
		children: [
			/* @__PURE__ */ y("div", {
				className: "shrink-0 p-2",
				children: /* @__PURE__ */ y(n, {
					ref: j,
					value: M,
					placeholder: D.chat.emojiPicker.search,
					clearable: !0,
					role: "combobox",
					tabIndex: 0,
					"aria-expanded": !0,
					"aria-autocomplete": "list",
					"aria-controls": O,
					"aria-activedescendant": q.flat.length > 0 ? k(J) : void 0,
					onChange: (e) => {
						N(e), F(0);
					}
				})
			}),
			q.flat.length === 0 ? /* @__PURE__ */ y("div", {
				className: "flex min-h-0 flex-1 items-center justify-center px-4 text-center text-base text-f1-foreground-secondary",
				children: D.chat.emojiPicker.noResults
			}) : /* @__PURE__ */ y(l, {
				ref: A,
				sections: K,
				layout: q,
				activeIndex: J,
				onActivate: F,
				onSelect: X,
				listboxId: O,
				label: D.chat.emojiPicker.grid,
				optionId: k,
				onTopRowChange: L
			}),
			/* @__PURE__ */ y(s, {
				sections: W.map((e) => ({
					id: e.id,
					label: e.label
				})),
				activeSection: $,
				onJump: Q
			})
		]
	});
};
//#endregion
export { C as EmojiPicker };
