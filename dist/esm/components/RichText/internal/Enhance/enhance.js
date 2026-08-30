//#region src/components/RichText/internal/Enhance/enhance.ts
var e = 5e3, t = 2500;
function n(t) {
	let n = t.state.selection.to === t.state.selection.from ? null : t.state.selection, r = t.getHTML(), i = n?.from ?? 0, a = n?.to ?? t.state.doc.content.size, o = n ? t.state.doc.textBetween(i, a, " ") : r;
	return o.length > e && (o = o.substring(0, e)), {
		text: o,
		from: i,
		to: a,
		isFullDocumentSelected: !n
	};
}
function r(e, n, r) {
	let i = e.getHTML();
	if (i.length < 1e4) return i;
	let a = Math.max(0, n - t), o = e.state.doc.textBetween(a, n, " "), s = Math.min(e.state.doc.content.size, r + t), c = e.state.doc.textBetween(r, s, " ");
	return o + " " + c;
}
function i(e, t, n, r, i) {
	if (i) {
		e.chain().focus().setContent(t).run();
		let n = e.state.doc.content.size;
		return {
			highlightFrom: 1,
			highlightTo: Math.max(1, n - 1)
		};
	}
	return e.chain().focus().deleteRange({
		from: n,
		to: r
	}).insertContent(t).run(), {
		highlightFrom: n,
		highlightTo: e.state.selection.to
	};
}
function a(e) {
	return e.trim().length > 0;
}
async function o({ editor: e, enhanceText: t, setIsLoadingEnhance: o, selectedIntent: s, customIntent: c, onLoadingStart: l, onSuccess: u, onError: d }) {
	let { text: f, from: p, to: m, isFullDocumentSelected: h } = n(e);
	if (!a(f)) return;
	let g = r(e, p, m);
	l({
		range: {
			from: h ? 1 : p,
			to: h ? Math.max(1, e.state.doc.content.size - 1) : m
		},
		isFullDocument: h
	});
	try {
		o(!0);
		let { success: n, text: r, error: a } = await t({
			text: f,
			selectedIntent: s,
			customIntent: c,
			context: g
		});
		if (n) {
			let { highlightFrom: t, highlightTo: n } = i(e, r, p, m, h || f.toString() === e.getHTML().toString());
			u({
				from: t,
				to: n
			});
		} else d(a);
	} catch {
		d();
	} finally {
		o(!1);
	}
}
//#endregion
export { o as handleEnhanceWithAIFunction };
