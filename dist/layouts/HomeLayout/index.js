import { jsx as e, jsxs as a } from "react/jsx-runtime";
import { forwardRef as n, useRef as m, useImperativeHandle as t, Children as f } from "react";
import { Carousel as p } from "../../experimental/Navigation/Carousel/index.js";
import { LayoutProvider as x } from "../LayoutProvider.js";
const h = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, L = n(function({ widgets: i, children: o }, c) {
  const s = m(null);
  t(c, () => s.current);
  const l = f.toArray(i).filter((r) => !!r).map((r, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: r }, d));
  return /* @__PURE__ */ e(x, { layout: "home", children: /* @__PURE__ */ a("div", { ref: s, className: "@container", children: [
    /* @__PURE__ */ a("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(p, { columns: h, showArrows: !1, children: l }),
      /* @__PURE__ */ e("main", { children: o })
    ] }),
    /* @__PURE__ */ a("div", { className: "px-page hidden grid-cols-3 gap-5 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: l.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: o }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: l.slice(3) })
    ] })
  ] }) });
});
export {
  L as HomeLayout
};
