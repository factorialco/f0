import { jsx as a } from "react/jsx-runtime";
import { createContext as n, useContext as i } from "react";
const t = {
  get: () => ({}),
  set: () => Promise.resolve()
}, e = n(t), c = ({
  children: o,
  handler: r
}) => /* @__PURE__ */ a(e.Provider, { value: r ?? t, children: o }), C = () => {
  const o = i(e);
  if (!o)
    throw new Error(
      "useDataCollectionStorage must be used within a DataCollectionStorageProvider"
    );
  return o;
};
export {
  c as DataCollectionStorageProvider,
  C as useDataCollectionStorage
};
