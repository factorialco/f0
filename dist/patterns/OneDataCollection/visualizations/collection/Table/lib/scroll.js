const t = (l) => {
  let r = l.parentElement;
  for (; r; ) {
    const { overflow: o, overflowY: e } = getComputedStyle(r);
    if (o === "auto" || o === "scroll" || e === "auto" || e === "scroll")
      return r;
    r = r.parentElement;
  }
  return null;
}, i = (l, r) => {
  const o = t(l);
  if (!o) return;
  let e;
  const n = () => {
    e !== void 0 && cancelAnimationFrame(e), e = requestAnimationFrame(r);
  };
  return o.addEventListener("scroll", n, { passive: !0 }), () => {
    o.removeEventListener("scroll", n), e !== void 0 && cancelAnimationFrame(e);
  };
};
export {
  t as findScrollContainer,
  i as subscribeToScroll
};
