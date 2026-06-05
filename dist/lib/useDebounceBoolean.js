import { useState as n, useEffect as r } from "react";
const f = ({
  value: e,
  delay: o
}) => {
  const [s, u] = n(!1);
  return r(() => {
    let t;
    return e ? t = setTimeout(() => {
      u(e);
    }, o) : u(!1), () => {
      t && clearTimeout(t);
    };
  }, [e, o]), s;
};
export {
  f as useDebounceBoolean
};
