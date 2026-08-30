import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { handleEnhanceWithAIFunction as t } from "./enhance.js";
import { useCallback as n, useEffect as r, useMemo as i, useState as a } from "react";
//#region src/components/RichText/internal/Enhance/useEnhance.ts
var o = () => {
	let e = window.getSelection();
	e && e.rangeCount > 0 && e.removeAllRanges();
};
function s(s, c) {
	let l = e(), [u, d] = a(!1), [f, p] = a(!1), [m, h] = a(null), [g, _] = a(null), [v, y] = a(null);
	r(() => {
		g && s && s.setEditable(!1);
	}, [g, s]);
	let b = n((e) => {
		_(e), !e && s && s.setEditable(!0);
	}, [s]), x = n(() => b(null), [b]), S = n(async (e, n) => {
		!c || !s || (h({
			selectedIntent: e,
			customIntent: n
		}), await t({
			editor: s,
			enhanceText: c.onEnhanceText,
			setIsLoadingEnhance: d,
			onLoadingStart: ({ range: e }) => {
				s.setEditable(!1), s.commands.setEnhanceHighlight(e.from, e.to, { placeholder: l.richTextEditor.ai.loadingEnhanceLabel }), s.view.dom.blur(), o();
			},
			onSuccess: ({ to: e }) => {
				s.commands.clearEnhanceHighlight();
				try {
					let t = Math.max(0, Math.min(e, s.state.doc.content.size));
					y(s.view.coordsAtPos(t).bottom);
				} catch {
					y(null);
				}
				p(!0);
			},
			onError: (e) => {
				p(!1), s.commands.clearEnhanceHighlight(), _(e || l.richTextEditor.ai.defaultError);
			},
			selectedIntent: e,
			customIntent: n
		}));
	}, [
		c,
		s,
		l.richTextEditor.ai.defaultError,
		l.richTextEditor.ai.loadingEnhanceLabel
	]), C = n(() => {
		s && (s.commands.clearEnhanceHighlight(), p(!1), s.setEditable(!0), h(null), c?.onAcceptChanges?.());
	}, [s, c]), w = n(() => {
		s && (s.commands.clearEnhanceHighlight(), s.chain().focus().undo().run(), p(!1), s.setEditable(!0), h(null), c?.onRejectChanges?.());
	}, [s, c]), T = n(() => {
		s && (s.commands.clearEnhanceHighlight(), s.chain().focus().undo().run(), c?.onRetryChanges?.(), S(m?.selectedIntent, m?.customIntent));
	}, [
		s,
		c,
		S,
		m
	]), E = !!(f || u || g);
	return i(() => ({
		config: c,
		isLoading: u,
		isAcceptChangesOpen: f,
		error: g,
		disableButtons: E,
		handleEnhanceWithAI: S,
		acceptChanges: C,
		rejectChanges: w,
		retryChanges: T,
		setError: b,
		clearError: x,
		reviewAnchorTop: v
	}), [
		c,
		u,
		f,
		g,
		E,
		S,
		C,
		w,
		T,
		b,
		x,
		v
	]);
}
//#endregion
export { s as useEnhance };
