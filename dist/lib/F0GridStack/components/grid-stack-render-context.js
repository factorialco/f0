import { createContext as e, useContext as r } from "react";
const n = e(null);
function i() {
  const t = r(n);
  if (!t)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return t;
}
export {
  n as GridStackRenderContext,
  i as useGridStackRenderContext
};
