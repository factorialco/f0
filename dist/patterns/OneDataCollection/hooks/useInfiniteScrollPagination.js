import { useRef as l, useEffect as u } from "react";
import { isInfiniteScrollPagination as f } from "../../../hooks/datasource/useData.js";
const a = (r, e, t, n) => {
  const o = l(null);
  return u(() => {
    if (!f(r) || !r.hasMore)
      return;
    const i = o.current;
    if (!i) return;
    const s = new IntersectionObserver(
      (c) => {
        c[0].isIntersecting && !e && !t && n();
      },
      {
        root: null,
        // viewport
        rootMargin: "200px",
        threshold: 0.1
      }
    );
    return s.observe(i), () => {
      s.disconnect();
    };
  }, [r, t, n, e]), {
    loadingIndicatorRef: o
    // Ref to the loading indicator (that is also used as a trigger for the infinite scroll)
  };
};
export {
  a as useInfiniteScrollPagination
};
