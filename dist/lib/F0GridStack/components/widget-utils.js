function e(n) {
  const { content: t, ...r } = n;
  return t !== void 0 ? {
    ...r,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : r;
}
function i(n) {
  const t = e(n);
  return n.subGridOpts?.children && (t.subGridOpts = {
    ...n.subGridOpts,
    children: n.subGridOpts.children.map(
      (r) => i(r)
    )
  }), t;
}
export {
  e as convertWidgetForGridStack,
  i as convertWidgetRecursive
};
