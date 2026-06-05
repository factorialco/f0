import { getDataCollectionStorageKey as e } from "./dataCollectionStorageKey.js";
const o = (t) => {
  try {
    const r = localStorage.getItem(e(t));
    return r === null ? null : JSON.parse(r);
  } catch {
    return null;
  }
}, a = (t) => {
  if (t)
    return t.visualizationFilters?.[String(t.visualization ?? 0)] ?? t.filters;
};
export {
  o as readDataCollectionStorage,
  a as resolveDataCollectionFilters
};
