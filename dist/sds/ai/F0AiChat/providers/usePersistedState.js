import { useState as i, useEffect as s } from "react";
import { readFromLocalStorage as d, writeToLocalStorage as m } from "../utils/local-storage.js";
function c(r, t, u, n) {
  const [e, f] = i(() => {
    if (typeof window > "u") return t;
    const o = d(r, null);
    return o === null || u && !u(o) ? t : o;
  });
  return s(() => {
    typeof window > "u" || n && !n(e) || m(r, e);
  }, [r, e, n]), [e, f];
}
export {
  c as usePersistedState
};
