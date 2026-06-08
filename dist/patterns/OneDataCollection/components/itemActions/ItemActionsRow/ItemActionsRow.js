import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { cn as m } from "../../../../../lib/utils.js";
import { F0Button as s } from "../../../../../components/F0Button/F0Button.js";
import { ItemActionsDropdown as a } from "../ItemActionsDropdown/ItemActionsDropdown.js";
const b = ({
  className: n,
  primaryItemActions: t,
  dropdownItemActions: i,
  handleDropDownOpenChange: r
}) => /* @__PURE__ */ l(
  "aside",
  {
    className: m(
      "pointer-events-auto items-center justify-end gap-2 md:flex",
      n
    ),
    children: [
      t.map((e) => /* @__PURE__ */ o(
        s,
        {
          label: e.label,
          hideLabel: e.hideLabel,
          variant: "outline",
          onClick: e.onClick,
          icon: e.icon
        },
        e.label
      )),
      /* @__PURE__ */ o(
        a,
        {
          align: "end",
          items: i,
          onOpenChange: r
        }
      )
    ]
  }
);
export {
  b as ItemActionsRow
};
