var t, e;
function i() {
  if (e) return t;
  e = 1;
  var o = Function.prototype, u = o.toString;
  function n(r) {
    if (r != null) {
      try {
        return u.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return t = n, t;
}
export {
  i as __require
};
