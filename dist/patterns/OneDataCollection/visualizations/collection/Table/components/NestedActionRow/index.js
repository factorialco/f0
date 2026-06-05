import { jsx as i } from "react/jsx-runtime";
import { forwardRef as f, useRef as u, useLayoutEffect as R } from "react";
import { Row as w } from "../Row.js";
const h = (e, o) => {
  const n = u(null), r = e.rowRef?.current;
  R(() => {
    if (n.current && r) {
      const t = e.rowRef?.current?.getBoundingClientRect().height;
      n.current.style.height = `${t}px`;
    }
  }, [r, e.rowRef]);
  const s = (t) => {
    n.current = t, typeof o == "function" ? o(t) : o && (o.current = t);
  }, c = e.nestedRowProps?.depth ?? 0, d = e.columns.map((t) => ({
    ...t,
    render: () => "",
    editType: () => "display-only"
  }));
  return /* @__PURE__ */ i(
    w,
    {
      ...e,
      columns: d,
      ref: s,
      noBorder: c > 0,
      nestedRowProps: {
        ...e.nestedRowProps,
        depth: c + 1,
        hasLoadedChildren: !1,
        ...e.nestedRowPropsOverride
      }
    }
  );
}, y = f(h);
export {
  y as NestedActionRow
};
