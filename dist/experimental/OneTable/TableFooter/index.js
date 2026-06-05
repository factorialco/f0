import { jsx as r } from "react/jsx-runtime";
import { TableFooter as t } from "../../../ui/table.js";
import { cn as e } from "../../../lib/utils.js";
function f({ children: o }) {
  return /* @__PURE__ */ r(
    t,
    {
      className: e(
        "bg-f1-background-default sticky bottom-0 z-30 shadow-[0_-1px_0_0_var(--f1-border-secondary)]"
      ),
      children: o
    }
  );
}
export {
  f as TableFooter
};
