import { useCallback as k } from "react";
const n = (e, t, o) => {
  const i = o ? 56 : 0;
  return {
    getStickyPosition: k(
      (c) => c < e && t.length > 1 ? {
        left: t.slice(0, Math.max(0, c)).reduce(
          (r, h) => r + (h.width ?? 0),
          i
        )
      } : void 0,
      [e, t, i]
    ),
    checkColumnWidth: i
  };
};
export {
  n as useSticky
};
