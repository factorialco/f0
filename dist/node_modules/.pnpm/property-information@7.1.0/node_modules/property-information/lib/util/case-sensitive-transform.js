function c(o, n) {
  return n in o ? o[n] : n;
}
export {
  c as caseSensitiveTransform
};
