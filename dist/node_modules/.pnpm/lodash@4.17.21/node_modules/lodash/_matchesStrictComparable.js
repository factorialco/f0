var e, n;
function u() {
  if (n) return e;
  n = 1;
  function i(t, a) {
    return function(r) {
      return r == null ? !1 : r[t] === a && (a !== void 0 || t in Object(r));
    };
  }
  return e = i, e;
}
export {
  u as __require
};
