import { jsx as o } from "react/jsx-runtime";
import { cn as e } from "../../../../../lib/utils.js";
import { ItemActionsDropdown as n } from "../ItemActionsDropdown/ItemActionsDropdown.js";
const s = ({
  items: i,
  onOpenChange: r,
  className: t
}) => /* @__PURE__ */ o("div", { className: e(t), children: /* @__PURE__ */ o(
  n,
  {
    label: "Mobile Actions",
    align: "end",
    items: i,
    onOpenChange: r
  }
) });
export {
  s as ItemActionsMobile
};
