var i, l;
function h() {
  if (l) return i;
  l = 1;
  function u(r, a) {
    for (var e = -1, _ = r == null ? 0 : r.length, f = 0, t = []; ++e < _; ) {
      var n = r[e];
      a(n, e, r) && (t[f++] = n);
    }
    return t;
  }
  return i = u, i;
}
export {
  h as __require
};
