var a, t;
function p() {
  if (t) return a;
  t = 1;
  function i(r, l) {
    for (var e = -1, n = r == null ? 0 : r.length, u = Array(n); ++e < n; )
      u[e] = l(r[e], e, r);
    return u;
  }
  return a = i, a;
}
export {
  p as __require
};
