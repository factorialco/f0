function P(t) {
  return (n, e = {}) => {
    const l = e.width, h = l && t.matchPatterns[l] || t.matchPatterns[t.defaultMatchWidth], i = n.match(h);
    if (!i)
      return null;
    const r = i[0], c = l && t.parsePatterns[l] || t.parsePatterns[t.defaultParseWidth], d = Array.isArray(c) ? o(c, (u) => u.test(r)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      s(c, (u) => u.test(r))
    );
    let a;
    a = t.valueCallback ? t.valueCallback(d) : d, a = e.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      e.valueCallback(a)
    ) : a;
    const f = n.slice(r.length);
    return { value: a, rest: f };
  };
}
function s(t, n) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && n(t[e]))
      return e;
}
function o(t, n) {
  for (let e = 0; e < t.length; e++)
    if (n(t[e]))
      return e;
}
export {
  P as buildMatchFn
};
