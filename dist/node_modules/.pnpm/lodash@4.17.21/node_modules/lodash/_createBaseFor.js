var r, u;
function _() {
  if (u) return r;
  u = 1;
  function s(o) {
    return function(e, c, f) {
      for (var l = -1, a = Object(e), t = f(e), n = t.length; n--; ) {
        var i = t[o ? n : ++l];
        if (c(a[i], i, a) === !1)
          break;
      }
      return e;
    };
  }
  return r = s, r;
}
export {
  _ as __require
};
