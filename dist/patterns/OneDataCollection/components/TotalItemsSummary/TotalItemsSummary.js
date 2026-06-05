import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { Skeleton as m } from "../../../../ui/skeleton.js";
const o = ({
  isReady: s,
  totalItemSummaryResult: t
}) => /* @__PURE__ */ e("div", { className: "flex flex-1 flex-shrink items-center gap-4 text-lg font-semibold", children: s ? /* @__PURE__ */ l("div", { className: "flex h-5 items-center", children: [
  " ",
  t
] }) : /* @__PURE__ */ e(m, { className: "h-5 w-24" }) });
export {
  o as TotalItemsSummary
};
