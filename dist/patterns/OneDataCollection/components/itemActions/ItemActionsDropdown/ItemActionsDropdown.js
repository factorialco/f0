import { jsx as e } from "react/jsx-runtime";
import { useState as m } from "react";
import { ButtonInternal as l } from "../../../../../components/F0Button/internal.js";
import { Dropdown as f } from "../../../../../experimental/Navigation/Dropdown/index.js";
import c from "../../../../../icons/app/Ellipsis.js";
import "../../../../../icons/app/Menu.js";
import { cn as d } from "../../../../../lib/utils.js";
const x = ({
  items: t,
  onOpenChange: n,
  align: p = "end",
  label: a = "Actions",
  className: i
}) => {
  const [o, s] = m(!1);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e("div", { className: d("pointer-events-auto", i), children: /* @__PURE__ */ e(
    f,
    {
      align: p,
      items: t.map((r) => r.type === "separator" || r.type === "label" ? r : {
        ...r,
        type: "item"
      }),
      open: o,
      onOpenChange: (r) => {
        s(r), n?.(r);
      },
      children: /* @__PURE__ */ e(
        l,
        {
          icon: c,
          label: a,
          hideLabel: !0,
          variant: "ghost",
          pressed: o
        }
      )
    }
  ) });
};
export {
  x as ItemActionsDropdown
};
