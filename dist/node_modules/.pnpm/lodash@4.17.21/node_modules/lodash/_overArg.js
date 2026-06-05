var r, e;
function i() {
  if (e) return r;
  e = 1;
  function n(u, o) {
    return function(t) {
      return u(o(t));
    };
  }
  return r = n, r;
}
export {
  i as __require
};
