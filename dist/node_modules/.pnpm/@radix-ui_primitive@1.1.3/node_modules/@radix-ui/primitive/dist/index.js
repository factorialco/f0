function f(n, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(e) {
    if (n?.(e), t === !1 || !e.defaultPrevented)
      return r?.(e);
  };
}
export {
  f as composeEventHandlers
};
