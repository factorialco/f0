const u = (r) => {
  if (!r)
    return [];
  const t = r();
  return (Array.isArray(t) ? t : [t]).filter(
    (e) => e !== void 0
  );
}, c = 2, i = (r) => "items" in r, o = (r) => "label" in r && !("items" in r), n = (r) => r.every(i) ? r : r.every(o) ? [
  {
    items: r
  }
] : r.map((t) => ({
  items: t
})), f = (r) => r ? typeof r == "function" ? n(r() || []) : "actions" in r ? n(r.actions() || []) : [] : [], s = (r) => r.map((t) => ({
  ...t,
  items: t.items.filter(
    (e) => e.enabled === void 0 || e.enabled
  )
}));
export {
  c as MAX_EXPANDED_ACTIONS,
  s as filterActions,
  u as getPrimaryActions,
  f as getSecondaryActions
};
