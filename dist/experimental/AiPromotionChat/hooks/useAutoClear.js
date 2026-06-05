import { useRef as c, useEffect as l } from "react";
const f = ({
  autoClearMinutes: r,
  reset: t,
  isOpen: u
}) => {
  const e = c(null);
  l(() => (u ? e.current && (clearTimeout(e.current), e.current = null) : r !== null && (e.current = setTimeout(
    () => {
    },
    r * 60 * 1e3
  )), () => {
    e.current && (clearTimeout(e.current), e.current = null);
  }), [t, u, r]);
};
export {
  f as useAutoClear
};
