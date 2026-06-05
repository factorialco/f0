var p = Object.prototype;
function e(t) {
  var o = t && t.constructor, r = typeof o == "function" && o.prototype || p;
  return t === r;
}
export {
  e as default
};
