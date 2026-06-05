var r, d;
function a() {
  if (d) return r;
  d = 1;
  var t = /\s/;
  function i(n) {
    for (var e = n.length; e-- && t.test(n.charAt(e)); )
      ;
    return e;
  }
  return r = i, r;
}
export {
  a as __require
};
