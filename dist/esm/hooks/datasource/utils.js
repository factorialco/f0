//#region src/hooks/datasource/utils.ts
var e = (e, t) => {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = String(r[t]);
		n.has(e) || n.set(e, []), n.get(e)?.push(r);
	}
	return n;
};
//#endregion
export { e as groupBy };
