import { dataCollectionStorageFeatures as s } from "./types.js";
const o = ["*", "all"], l = (r) => {
  const t = /* @__PURE__ */ new Set();
  return r ? (r.some((e) => o.includes(e)) && s.forEach((e) => {
    t.add(e);
  }), r.filter((e) => !o.includes(e)).forEach((e) => {
    e.startsWith("!") ? t.delete(e.slice(1)) : t.add(e);
  }), Array.from(t)) : [];
};
export {
  l as getFeatures
};
