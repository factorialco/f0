var r, e;
function t() {
  if (e) return r;
  e = 1;
  function n(a) {
    return function(u) {
      return a(u);
    };
  }
  return r = n, r;
}
export {
  t as __require
};
