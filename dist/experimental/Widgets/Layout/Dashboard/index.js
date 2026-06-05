import { jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useState as p, Children as u, useRef as w, useEffect as g } from "react";
import { Masonry as v } from "../../../../node_modules/.pnpm/react-masonry@1.0.7/node_modules/react-masonry/dist/index.js";
import { withSkeleton as x, Blend as b } from "../../../../lib/skeleton.js";
import { Widget as y } from "../../Widget/index.js";
const N = { sm: 340, md: 480, lg: 640 }, l = h(
  function({ children: s, widgetWidth: m = "sm" }, c) {
    const d = N[m], [t, i] = p(), f = u.toArray(s), a = w(null);
    return g(() => {
      const r = () => {
        const o = a.current?.offsetWidth;
        o && i(Math.floor(o / d) || 1);
      };
      return r(), window.addEventListener("resize", r), () => {
        window.removeEventListener("resize", r);
      };
    }, [i, d]), /* @__PURE__ */ e("div", { ref: c, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: a, children: t === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: s }) : t && t > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(v, { children: f.map((r, o) => /* @__PURE__ */ e(
      "div",
      {
        style: {
          width: `${Math.floor(1 / t * 1e4) / 100 - 0.05}%`
        },
        className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
        children: r
      },
      o
    )) }, t) }) }) });
  }
), R = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], E = x(l, () => /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(l, { children: R.map((n, s) => /* @__PURE__ */ e(y.Skeleton, { height: n }, s)) }) }));
export {
  E as Dashboard
};
