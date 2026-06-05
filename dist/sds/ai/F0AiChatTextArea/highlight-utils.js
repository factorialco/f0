function f(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function m(e, a, h) {
  const r = h?.cursorPosition ?? e.length, i = h?.inlineCompletion ?? null, c = [];
  for (const t of a) {
    const o = `@${t.name}`;
    let u = 0;
    for (; ; ) {
      const l = e.indexOf(o, u);
      if (l === -1) break;
      c.push({ start: l, end: l + o.length }), u = l + o.length;
    }
  }
  c.sort((t, o) => t.start - o.start);
  const n = [];
  let s = 0, p = !1;
  const g = (t) => {
    if (!i || p || r < s || r > t) {
      t > s && n.push({ type: "text", text: e.slice(s, t) }), s = t;
      return;
    }
    r > s && n.push({ type: "text", text: e.slice(s, r) }), n.push({ type: "ghost", text: i }), p = !0, r < t && n.push({ type: "text", text: e.slice(r, t) }), s = t;
  };
  for (const t of c)
    g(t.start), n.push({ type: "mention", text: e.slice(t.start, t.end) }), s = t.end;
  return g(e.length), !p && i && r >= s && n.push({ type: "ghost", text: i }), n.length === 0 ? [{ type: "text", text: e }] : n;
}
export {
  m as buildHighlightSegments,
  f as escapeXml
};
