import { useEffect as o } from "react";
import { useDndContextOptional as u } from "./context.js";
function l(e) {
  const r = u(), { ref: n, payload: t, disabled: c, handleRef: i } = e, s = t.data, a = t.id + "|" + (s?.currentParentId ?? "null");
  o(() => {
    if (n.current && !(!r || c))
      return r.driver.registerDraggable(n.current, {
        payload: t,
        disabled: c,
        handle: i?.current ?? null
      });
  }, [r, n, a, c, i, t]);
}
function p(e) {
  const r = u(), n = e?.ref, t = e?.id, c = e?.accepts;
  o(() => {
    if (n?.current && !(!r || !t || !c))
      return r.driver.registerDroppable(n.current, { id: t, accepts: c });
  }, [r, n, t, c]);
}
function b(e) {
  const r = u();
  o(
    () => r ? r.driver.subscribe(e) : void 0,
    [r, e]
  );
}
export {
  b as useDndEvents,
  l as useDraggable,
  p as useDroppableList
};
