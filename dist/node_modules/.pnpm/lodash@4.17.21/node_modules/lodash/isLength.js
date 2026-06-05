var e, n;
function s() {
  if (n) return e;
  n = 1;
  var t = 9007199254740991;
  function i(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= t;
  }
  return e = i, e;
}
export {
  s as __require
};
