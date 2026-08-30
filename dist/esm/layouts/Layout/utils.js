//#region src/layouts/Layout/utils.ts
var e = (e, t) => {
	let n = t;
	return n.displayName = e, n.__isPageLayoutBlock = !0, n;
}, t = (e, t) => {
	let n = t;
	return n.displayName = e, n.__isPageLayoutGroup = !0, n;
};
//#endregion
export { e as createPageLayoutBlock, t as createPageLayoutBlockGroup };
