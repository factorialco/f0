var i, n;
function o() {
  if (n) return i;
  n = 1;
  function t(r) {
    var e = typeof r;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
  }
  return i = t, i;
}
export {
  o as __require
};
