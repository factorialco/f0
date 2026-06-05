import { filterTypes as e } from "./filters.js";
function n(t, r) {
  return {
    ...r,
    ...t
  };
}
const i = (t) => {
  const r = e[t];
  if (!r)
    throw new Error(`Filter type ${t.toString()} not found`);
  return r;
};
export {
  i as getFilterType,
  n as getOptionsWithDefaults
};
