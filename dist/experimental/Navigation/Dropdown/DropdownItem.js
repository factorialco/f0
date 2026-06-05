import { jsxs as a, Fragment as t, jsx as o } from "react/jsx-runtime";
import { F0Avatar as n } from "../../../components/avatars/F0Avatar/index.js";
import { F0Icon as i } from "../../../components/F0Icon/index.js";
import { cn as c } from "../../../lib/utils.js";
const d = ({ item: r }) => /* @__PURE__ */ a(t, { children: [
  r.avatar && /* @__PURE__ */ o(n, { avatar: r.avatar, size: "xs" }),
  r.icon && /* @__PURE__ */ o(
    i,
    {
      icon: r.icon,
      size: "md",
      className: c("text-f1-icon", r.critical && "text-f1-icon-critical")
    }
  ),
  /* @__PURE__ */ a("div", { className: "flex flex-col items-start", children: [
    r.label,
    r.description && /* @__PURE__ */ o(
      "div",
      {
        className: c(
          "font-normal text-f1-foreground-secondary",
          r.critical && "text-f1-foreground-critical"
        ),
        children: r.description
      }
    )
  ] })
] });
export {
  d as DropdownItemContent
};
