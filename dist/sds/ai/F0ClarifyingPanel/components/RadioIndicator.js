import { jsx as o } from "react/jsx-runtime";
import { cn as d } from "../../../../lib/utils.js";
const c = ({ isSelected: r }) => /* @__PURE__ */ o(
  "div",
  {
    className: d(
      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
      r ? "bg-f1-background-selected-bold" : "border-2 border-solid border-f1-border bg-f1-background"
    ),
    children: r && /* @__PURE__ */ o("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
  }
);
export {
  c as RadioIndicator
};
