import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { TaskDetails as o } from "./TaskDetails.js";
import { TaskHeader as r } from "./TaskHeader.js";
import { TimelineRowLayout as l } from "./TimelineRowLayout.js";
const h = ({ props: e }) => {
  const { status: s, isLast: a = !1, hideStatus: i = !1 } = e;
  return /* @__PURE__ */ m(l, { status: s, isLast: a, hideStatus: i, children: [
    /* @__PURE__ */ t("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ t(r, { props: e }) }),
    s !== "completed" && /* @__PURE__ */ t(o, { props: e })
  ] });
};
export {
  h as TaskRow
};
