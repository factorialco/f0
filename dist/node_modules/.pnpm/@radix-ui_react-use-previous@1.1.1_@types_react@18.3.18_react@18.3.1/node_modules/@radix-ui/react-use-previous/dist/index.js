import * as u from "react";
function t(r) {
  const e = u.useRef({ value: r, previous: r });
  return u.useMemo(() => (e.current.value !== r && (e.current.previous = e.current.value, e.current.value = r), e.current.previous), [r]);
}
export {
  t as usePrevious
};
