var e, h;
function s() {
  if (h) return e;
  h = 1;
  function a(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return e = a, e;
}
export {
  s as __require
};
