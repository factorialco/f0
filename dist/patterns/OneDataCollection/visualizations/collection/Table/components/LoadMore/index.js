import { jsx as e } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import { NestedActionRow as d } from "../NestedActionRow/index.js";
const t = (o, r) => /* @__PURE__ */ e(
  d,
  {
    ...o,
    ref: r,
    nestedRowPropsOverride: {
      onLoadMoreChildren: o.onLoadMoreChildren
    }
  }
), f = n(t);
export {
  f as LoadMoreRow
};
