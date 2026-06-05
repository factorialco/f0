var i, s;
function u() {
  if (s) return i;
  s = 1;
  var t = 9007199254740991, _ = /^(?:0|[1-9]\d*)$/;
  function d(r, e) {
    var n = typeof r;
    return e = e ?? t, !!e && (n == "number" || n != "symbol" && _.test(r)) && r > -1 && r % 1 == 0 && r < e;
  }
  return i = d, i;
}
export {
  u as __require
};
