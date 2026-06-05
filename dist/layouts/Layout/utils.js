const a = (o, t) => {
  const e = t;
  return e.displayName = o, e.__isPageLayoutBlock = !0, e;
}, r = (o, t) => {
  const e = t;
  return e.displayName = o, e.__isPageLayoutGroup = !0, e;
};
export {
  a as createPageLayoutBlock,
  r as createPageLayoutBlockGroup
};
