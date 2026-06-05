var n, u;
function o() {
  if (u) return n;
  u = 1;
  function t(e, i) {
    for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
      if (i(e[r], r, e))
        return !0;
    return !1;
  }
  return n = t, n;
}
export {
  o as __require
};
