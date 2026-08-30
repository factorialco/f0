import { getDataCollectionStorageKey as e } from "./dataCollectionStorageKey.js";
//#region src/lib/providers/datacollection/dataCollectionLocalStorageHandler.ts
var t = {
	get: async (t) => JSON.parse(localStorage.getItem(e(t)) ?? "{}"),
	set: async (t, n) => {
		localStorage.setItem(e(t), JSON.stringify(n));
	}
};
//#endregion
export { t as dataCollectionLocalStorageHandler };
