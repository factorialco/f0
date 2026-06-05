const l = (r, t) => (r && r(t) || []).filter(
  (e) => e.type === "separator" || e.enabled === void 0 || e.enabled
);
export {
  l as filterItemActions
};
