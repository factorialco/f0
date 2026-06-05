import { useState as f, useCallback as l } from "react";
let o = null;
function m(e, n) {
  o || (o = document.createElement("canvas"));
  const t = o.getContext("2d");
  return t ? (t.font = n, Math.ceil(t.measureText(e).width)) : 0;
}
function x(e, n = 26, t = 48) {
  const [u, c] = f(null), a = l((i) => {
    if (i) {
      const r = i.querySelector("input");
      r && c(getComputedStyle(r).font);
    }
  }, []), s = u ? Math.max(m(e || " ", u) + n, t) : void 0;
  return { ref: a, width: s };
}
export {
  x as useInputTextWidth
};
