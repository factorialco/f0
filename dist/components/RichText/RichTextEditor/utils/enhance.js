function E(t) {
  const e = t.state.selection.to !== t.state.selection.from ? t.state.selection : null, c = t.getHTML(), o = e?.from ?? 0, s = e?.to ?? t.state.doc.content.size;
  let n = e ? t.state.doc.textBetween(o, s, " ") : c;
  return n.length > 5e3 && (n = n.substring(0, 5e3)), {
    text: n,
    from: o,
    to: s,
    isFullDocumentSelected: !e
  };
}
function S(t, e, c) {
  const o = t.getHTML();
  if (o.length < 1e4)
    return o;
  const s = 2500, n = 2500, r = Math.max(0, e - s), i = t.state.doc.textBetween(r, e, " "), a = Math.min(t.state.doc.content.size, c + n), l = t.state.doc.textBetween(c, a, " ");
  return i + " " + l;
}
function p(t, e, c, o, s) {
  if (s) {
    t.chain().focus().setContent(e).run();
    const n = t.state.doc.content.size;
    return {
      highlightFrom: 1,
      highlightTo: Math.max(1, n - 1)
    };
  } else {
    t.chain().focus().deleteRange({ from: c, to: o }).insertContent(e).run();
    const n = t.state.selection.to;
    return {
      highlightFrom: c,
      highlightTo: n
    };
  }
}
function z(t) {
  return t.trim().length > 0;
}
async function w({
  editor: t,
  enhanceText: e,
  setIsLoadingEnhance: c,
  selectedIntent: o,
  customIntent: s,
  onLoadingStart: n,
  onSuccess: r,
  onError: i
}) {
  const {
    text: a,
    from: l,
    to: u,
    isFullDocumentSelected: h
  } = E(t);
  if (!z(a)) return;
  const f = S(t, l, u), g = h ? 1 : l, x = h ? Math.max(1, t.state.doc.content.size - 1) : u;
  n({
    range: { from: g, to: x },
    isFullDocument: h
  });
  try {
    c(!0);
    const { success: m, text: T, error: F } = await e({
      text: a,
      selectedIntent: o,
      customIntent: s,
      context: f
    });
    if (m) {
      const { highlightFrom: C, highlightTo: M } = p(
        t,
        T,
        l,
        u,
        h || a.toString() === t.getHTML().toString()
      );
      r({ from: C, to: M });
    } else
      i(F);
  } catch {
    i();
  } finally {
    c(!1);
  }
}
export {
  w as handleEnhanceWithAIFunction
};
