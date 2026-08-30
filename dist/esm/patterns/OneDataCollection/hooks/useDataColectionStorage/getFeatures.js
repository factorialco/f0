import { dataCollectionStorageFeatures as e } from "./types.js";
//#region src/patterns/OneDataCollection/hooks/useDataColectionStorage/getFeatures.ts
var t = ["*", "all"], n = (n) => {
	let r = /* @__PURE__ */ new Set();
	return n ? (n.some((e) => t.includes(e)) && e.forEach((e) => {
		r.add(e);
	}), n.filter((e) => !t.includes(e)).forEach((e) => {
		e.startsWith("!") ? r.delete(e.slice(1)) : r.add(e);
	}), Array.from(r)) : [];
};
//#endregion
export { n as getFeatures };
