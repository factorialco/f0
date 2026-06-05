import { jsx as r } from "react/jsx-runtime";
import { cn as o } from "../../lib/utils.js";
import { OneEllipsis as t } from "../../lib/OneEllipsis/OneEllipsis.js";
const n = ({ text: e }) => /* @__PURE__ */ r(
  "div",
  {
    className: o(
      "flex h-[24px] max-w-20 items-center gap-2 rounded-sm border border-solid border-f1-border px-2 py-0.5 font-medium text-f1-foreground-tertiary"
    ),
    children: /* @__PURE__ */ r(t, { tag: "span", children: e })
  }
);
export {
  n as AppendTag
};
