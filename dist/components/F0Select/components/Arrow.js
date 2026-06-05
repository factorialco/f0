import { jsx as t } from "react/jsx-runtime";
import { F0Icon as m } from "../../F0Icon/F0Icon.js";
import c from "../../../icons/app/DropdownOpen.js";
import "../../../icons/app/Menu.js";
import { cn as s } from "../../../lib/utils.js";
const d = ({
  disabled: r,
  open: o,
  onChange: i,
  size: e = "sm",
  className: n
}) => /* @__PURE__ */ t(
  "div",
  {
    className: s(
      !r && "cursor-pointer",
      "origin-center transition-transform duration-200",
      "flex items-center justify-center",
      !o && "rotate-180",
      e === "md" && "scale-110",
      n
    ),
    onClick: () => {
      r || i?.(!o);
    },
    children: /* @__PURE__ */ t(m, { icon: c, size: "lg" })
  }
);
export {
  d as Arrow
};
