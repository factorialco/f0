import { createContext as e, useContext as r } from "react";
const o = e(null);
function i() {
  const t = r(o);
  if (!t)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return t;
}
export {
  o as GridStackContext,
  i as useGridStackContext
};
