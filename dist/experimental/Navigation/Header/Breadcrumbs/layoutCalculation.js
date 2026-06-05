function _(n, t) {
  const I = t.length;
  if (I <= 2) return I;
  const h = t[0];
  let e = n - h - 8, i = 0, l = 1;
  for (let o = I - 1; o > 0; o--) {
    const D = t[o];
    if (e < D)
      break;
    e -= D, i = o, l++;
  }
  if (l < I)
    for (e -= 50; e < 0 && l > 1; )
      e += t[i], i++, l--;
  return Math.max(2, l);
}
function T(n = []) {
  switch (n.length) {
    case 0:
      return;
    case 1:
      return n[0] + 8;
    default:
      return n[0] + 50 + n[n.length - 1] + 8;
  }
}
function s(n, t) {
  return 120 * n + (t ? 50 : 0) + 8;
}
function g(n, t, I = []) {
  if (!n) {
    const l = Math.min(t.length, 2);
    return {
      visibleCount: l,
      headItem: t[0] ?? null,
      tailItems: t.slice(t.length - 1),
      collapsedItems: t.slice(1, t.length - 1),
      isOnly: t.length === 1,
      minWidth: s(
        l,
        t.length > 2
      )
    };
  }
  const h = t.length <= 2, e = I.map((l) => l.clientWidth);
  if (h)
    return {
      visibleCount: t.length,
      headItem: t[0] ?? null,
      tailItems: t.slice(1),
      collapsedItems: [],
      isOnly: t.length === 1,
      minWidth: T(e)
    };
  const i = _(n, e);
  return {
    visibleCount: i,
    headItem: t[0] || null,
    tailItems: t.slice(
      Math.max(1, t.length - (i - 1))
    ),
    collapsedItems: t.slice(
      1,
      t.length - (i - 1)
    ),
    isOnly: t.length === 1,
    minWidth: T(e)
  };
}
export {
  g as calculateBreadcrumbState
};
