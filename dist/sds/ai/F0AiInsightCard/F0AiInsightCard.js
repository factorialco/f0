import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as c } from "react";
import { withDataTestId as m } from "../../../lib/data-testid/index.js";
import { withSkeleton as f } from "../../../lib/skeleton.js";
import { Skeleton as r } from "../../../ui/skeleton.js";
import { CardInternal as p } from "./internal.js";
const u = ["className"], a = c((o, l) => {
  const d = u.reduce((t, i) => {
    const { [i]: x, ...n } = t;
    return n;
  }, o);
  return /* @__PURE__ */ e(p, { ref: l, ...d });
});
a.displayName = "F0AiInsightCard";
const h = () => /* @__PURE__ */ s(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e(r, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ s("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ e(r, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ e(r, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(r, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ e(r, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), C = m(
  f(a, h)
);
export {
  C as F0AiInsightCard
};
