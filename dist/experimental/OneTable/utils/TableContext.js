import { createContext as t, useContext as o } from "react";
const r = t(
  void 0
);
function i() {
  const e = o(r);
  if (!e)
    throw new Error("useTable must be used within a TableProvider");
  return e;
}
export {
  r as TableContext,
  i as useTable
};
