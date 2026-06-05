function h(t) {
  return (e, c = {}) => {
    const n = e.match(t.matchPattern);
    if (!n) return null;
    const u = n[0], a = e.match(t.parsePattern);
    if (!a) return null;
    let l = t.valueCallback ? t.valueCallback(a[0]) : a[0];
    l = c.valueCallback ? c.valueCallback(l) : l;
    const r = e.slice(u.length);
    return { value: l, rest: r };
  };
}
export {
  h as buildMatchPatternFn
};
