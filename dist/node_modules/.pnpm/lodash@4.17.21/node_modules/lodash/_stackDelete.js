var e, r;
function u() {
  if (r) return e;
  r = 1;
  function a(s) {
    var t = this.__data__, i = t.delete(s);
    return this.size = t.size, i;
  }
  return e = a, e;
}
export {
  u as __require
};
