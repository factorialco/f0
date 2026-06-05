var r, a;
function t() {
  if (a) return r;
  a = 1;
  function u(i, n) {
    for (var e = -1, s = Array(i); ++e < i; )
      s[e] = n(e);
    return s;
  }
  return r = u, r;
}
export {
  t as __require
};
