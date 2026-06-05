var r, n;
function a() {
  if (n) return r;
  n = 1;
  function u(t) {
    return function(e) {
      return e?.[t];
    };
  }
  return r = u, r;
}
export {
  a as __require
};
