import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { withSkeleton as m } from "../../../../../lib/skeleton.js";
import { ActivityItem as r } from "../../ActivityItem/index.js";
const l = ({
  title: o,
  children: t
}) => /* @__PURE__ */ s("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: o }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: t })
] }), a = ({
  title: o,
  items: t,
  onClickItem: c,
  onItemVisible: i
}) => /* @__PURE__ */ e(l, { title: o, children: t.map((n) => /* @__PURE__ */ e(
  r,
  {
    ...n,
    onClick: () => c(n.id),
    onVisible: i
  },
  n.id
)) }), d = ({
  title: o,
  numItems: t
}) => /* @__PURE__ */ e(l, { title: o, children: Array.from({ length: t }).map((c, i) => /* @__PURE__ */ e(r.Skeleton, {}, i)) }), x = m(a, d);
export {
  x as Section
};
