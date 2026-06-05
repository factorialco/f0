import * as t from "react";
import "react/jsx-runtime";
var r = t.createContext(void 0);
function n(o) {
  const e = t.useContext(r);
  return o || e || "ltr";
}
export {
  n as useDirection
};
