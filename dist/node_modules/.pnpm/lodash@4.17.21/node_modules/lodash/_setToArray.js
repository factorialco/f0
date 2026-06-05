var r, t;
function o() {
  if (t) return r;
  t = 1;
  function n(e) {
    var u = -1, a = Array(e.size);
    return e.forEach(function(i) {
      a[++u] = i;
    }), a;
  }
  return r = n, r;
}
export {
  o as __require
};
