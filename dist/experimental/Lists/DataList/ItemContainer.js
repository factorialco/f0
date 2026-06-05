import { jsx as t, jsxs as a } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { F0Icon as s } from "../../../components/F0Icon/index.js";
import { cn as f } from "../../../lib/utils.js";
import { CopyAction as p } from "./actions/CopyAction.js";
import { NavigateAction as l } from "./actions/NavigateAction.js";
import { OpenLinkAction as u } from "./actions/OpenLinkAction.js";
const d = m(
  (o, n) => {
    const {
      text: r,
      leftIcon: e,
      className: i,
      action: c = { type: "noop" }
    } = o;
    return /* @__PURE__ */ t(
      "li",
      {
        className: "flex rounded font-medium text-f1-foreground *:flex-1",
        ref: n,
        children: /* @__PURE__ */ a(
          x,
          {
            action: c,
            className: f("flex items-center gap-1.5 p-1.5", i),
            children: [
              e && (typeof e == "function" ? e({}) : /* @__PURE__ */ t(s, { icon: e, size: "md", "aria-hidden": "true" })),
              /* @__PURE__ */ t("div", { className: "line-clamp-5 flex-1 whitespace-pre-line text-left", children: r })
            ]
          }
        )
      }
    );
  }
);
d.displayName = "ItemContainer";
const x = ({
  children: o,
  action: n,
  ...r
}) => {
  const e = n.type;
  switch (e) {
    case "copy":
      return /* @__PURE__ */ t(p, { ...n, ...r, children: o });
    case "navigate":
      return /* @__PURE__ */ t(l, { ...n, ...r, children: o });
    case "open-link":
      return /* @__PURE__ */ t(u, { ...n, ...r, children: o });
    case "noop":
      return /* @__PURE__ */ t("div", { ...r, children: o });
    default:
      return e;
  }
};
export {
  d as ItemContainer
};
