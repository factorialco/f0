var t, e;
function u() {
  if (e) return t;
  e = 1;
  var i = Object.prototype;
  function p(r) {
    var o = r && r.constructor, n = typeof o == "function" && o.prototype || i;
    return r === n;
  }
  return t = p, t;
}
export {
  u as __require
};
