import { jsx as e } from "react/jsx-runtime";
import { F0Icon as l } from "../../F0Icon/index.js";
import { cn as n } from "../../../lib/utils.js";
const i = {
  sm: "size-6 rounded-sm",
  md: "size-8 rounded-md",
  lg: "size-10 rounded-lg"
}, c = ({
  icon: a,
  size: r = "md",
  state: o,
  "aria-label": d,
  "aria-labelledby": s
}) => /* @__PURE__ */ e(
  "div",
  {
    className: n(
      "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background dark:bg-f1-background-inverse-secondary",
      i[r]
    ),
    "aria-label": d,
    "aria-labelledby": s,
    children: /* @__PURE__ */ e(l, { icon: a, size: r, state: o, color: "bold" })
  }
);
c.displayName = "IconAvatar";
export {
  c as F0AvatarIcon
};
