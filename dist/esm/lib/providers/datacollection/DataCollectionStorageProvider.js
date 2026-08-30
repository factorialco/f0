import { createContext as e, useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/lib/providers/datacollection/DataCollectionStorageProvider.tsx
var r = {
	get: () => ({}),
	set: () => Promise.resolve()
}, i = e(r), a = ({ children: e, handler: t }) => /* @__PURE__ */ n(i.Provider, {
	value: t ?? r,
	children: e
}), o = () => {
	let e = t(i);
	if (!e) throw Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
	return e;
};
//#endregion
export { a as DataCollectionStorageProvider, o as useDataCollectionStorage };
