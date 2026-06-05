function o(e, n) {
  return e.label.toLowerCase().includes(n) ? !0 : e.children ? e.children.options.some(
    (r) => o(r, n)
  ) : !1;
}
function s(e, n) {
  if (!e.children || !n) return !1;
  const { filterKey: r, options: c } = e.children, t = n[r] ?? [];
  for (const i of c)
    if (t.includes(i.value) || s(i, n)) return !0;
  return !1;
}
function f(e) {
  const n = /* @__PURE__ */ new Set();
  function r(c) {
    for (const t of c)
      t.children && (n.add(t.children.filterKey), r(t.children.options));
  }
  return "options" in e && Array.isArray(e.options) && r(e.options), [...n];
}
export {
  f as collectNestedFilterKeys,
  s as hasSelectedDescendant,
  o as optionMatchesSearch
};
