//#region src/patterns/OneDataCollection/actions.tsx
var e = (e) => {
	if (!e) return [];
	let t = e();
	return (Array.isArray(t) ? t : [t]).filter((e) => e !== void 0);
}, t = (e) => "items" in e, n = (e) => "label" in e && !("items" in e), r = (e) => e.every(t) ? e : e.every(n) ? [{ items: e }] : e.map((e) => ({ items: e })), i = (e) => e ? typeof e == "function" ? r(e() || []) : "actions" in e ? r(e.actions() || []) : [] : [], a = (e) => e.map((e) => ({
	...e,
	items: e.items.filter((e) => e.enabled === void 0 || e.enabled)
})), o = (e) => e?.();
//#endregion
export { a as filterActions, e as getPrimaryActions, i as getSecondaryActions, o as getUpsellAction };
