import { getDataCollectionStorageKey as e } from "./dataCollectionStorageKey.js";
const r = {
  get: async (t) => JSON.parse(
    localStorage.getItem(e(t)) ?? "{}"
  ),
  set: async (t, a) => {
    localStorage.setItem(
      e(t),
      JSON.stringify(a)
    );
  }
};
export {
  r as dataCollectionLocalStorageHandler
};
