var r, t;
function c() {
  if (t) return r;
  t = 1;
  var e = Object.prototype, o = e.toString;
  function n(i) {
    return o.call(i);
  }
  return r = n, r;
}
export {
  c as __require
};
