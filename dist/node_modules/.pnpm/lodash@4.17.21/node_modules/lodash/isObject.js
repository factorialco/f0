var e, n;
function u() {
  if (n) return e;
  n = 1;
  function i(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return e = i, e;
}
export {
  u as __require
};
