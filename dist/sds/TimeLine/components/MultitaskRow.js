import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { MultitaskHeader as m } from "./MultitaskHeader.js";
import { NestedtaskRow as p } from "./NestedtaskRow.js";
import { TaskRow as d } from "./TaskRow.js";
import { TimelineRowLayout as f } from "./TimelineRowLayout.js";
const u = (t) => "icon" in t && t.icon !== void 0 && ("items" in t || "content" in t), N = ({
  props: t
}) => {
  const { status: i, isLast: r = !1, hideStatus: l = !1, expanded: n, items: a } = t;
  return /* @__PURE__ */ c(f, { status: i, isLast: r, hideStatus: l, children: [
    /* @__PURE__ */ e("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ e(m, { props: t }) }),
    n && /* @__PURE__ */ e("div", { className: "flex flex-col pl-4", children: a.map(
      (s, o) => u(s) ? /* @__PURE__ */ e(
        p,
        {
          props: {
            ...s,
            hideStatus: !0,
            isLast: o === a.length - 1
          }
        },
        `${s.title}-${o}`
      ) : /* @__PURE__ */ e(
        d,
        {
          props: {
            ...s,
            hideStatus: !0,
            isLast: o === a.length - 1
          }
        },
        `${s.title}-${o}`
      )
    ) })
  ] });
};
export {
  N as MultitaskRow
};
