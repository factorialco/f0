var n, t;
function s() {
  if (t) return n;
  t = 1;
  function h(r, u) {
    for (var e = -1, a = u.length, i = r.length; ++e < a; )
      r[i + e] = u[e];
    return r;
  }
  return n = h, n;
}
export {
  s as __require
};
