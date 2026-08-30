//#region src/patterns/OneDataCollection/item-actions.tsx
var e = (e, t) => (e && e(t) || []).filter((e) => e.type === "separator" || e.enabled === void 0 || e.enabled);
//#endregion
export { e as filterItemActions };
