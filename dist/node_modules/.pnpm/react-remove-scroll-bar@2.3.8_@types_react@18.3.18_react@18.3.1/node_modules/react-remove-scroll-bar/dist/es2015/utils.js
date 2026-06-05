var a = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, e = function(t) {
  return parseInt(t || "", 10) || 0;
}, o = function(t) {
  var n = window.getComputedStyle(document.body), i = n[t === "padding" ? "paddingLeft" : "marginLeft"], r = n[t === "padding" ? "paddingTop" : "marginTop"], d = n[t === "padding" ? "paddingRight" : "marginRight"];
  return [e(i), e(r), e(d)];
}, f = function(t) {
  if (t === void 0 && (t = "margin"), typeof window > "u")
    return a;
  var n = o(t), i = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - i + n[2] - n[0])
  };
};
export {
  f as getGapWidth,
  a as zeroGap
};
