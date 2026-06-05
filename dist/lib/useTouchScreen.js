import { useState as t, useEffect as o } from "react";
function s() {
  const [e, c] = t(!1);
  return o(() => {
    c(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
export {
  s as useTouchScreen
};
