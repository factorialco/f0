import { jsxs as l, jsx as r } from "react/jsx-runtime";
import { F0Icon as t } from "../../F0Icon/index.js";
import f from "../../../icons/app/AlertCircle.js";
import a from "../../../icons/app/InfoCircle.js";
import "../../../icons/app/Menu.js";
import m from "../../../icons/app/Warning.js";
import { cn as s } from "../../../lib/utils.js";
const e = {
  default: {
    color: "text-f1-foreground-secondary",
    iconColor: "default"
  },
  warning: {
    color: "text-f1-foreground-warning",
    iconColor: "warning",
    icon: m
  },
  info: {
    color: "text-f1-foreground-info",
    iconColor: "info",
    icon: a
  },
  error: {
    color: "text-f1-foreground-critical",
    iconColor: "critical",
    icon: f
  }
}, C = ({ status: o }) => {
  if (!o) return null;
  const n = (Array.isArray(o.message) ? o.message : [o.message]).filter(Boolean), i = e[o.type].icon;
  return n.length > 0 && /* @__PURE__ */ l("div", { className: "flex gap-1", children: [
    i && /* @__PURE__ */ r(
      t,
      {
        icon: i,
        color: e[o.type].iconColor || "currentColor"
      }
    ),
    /* @__PURE__ */ r("ul", { className: "list-none", children: n.map((c) => /* @__PURE__ */ r(
      "li",
      {
        className: s(
          "text-base font-medium",
          e[o.type].color
        ),
        children: c
      },
      c
    )) })
  ] });
};
export {
  C as InputMessages
};
