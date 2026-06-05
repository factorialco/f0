import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { memo as c } from "react";
import { F0Icon as a } from "../../../../components/F0Icon/index.js";
import p from "../../../../icons/app/ExternalLink.js";
import { Link as s } from "../../../../lib/linkHandler.js";
import { cn as d } from "../../../../lib/utils.js";
const l = c(
  ({ children: e, className: r, href: i, ...t }) => /* @__PURE__ */ n(
    s,
    {
      ...t,
      target: "_blank",
      href: i,
      rel: "noopener noreferrer",
      className: d(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        r
      ),
      children: [
        e,
        /* @__PURE__ */ o("div", { className: "grid opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100", children: /* @__PURE__ */ o(
          a,
          {
            "aria-hidden": !0,
            icon: p,
            size: "md",
            color: "default"
          }
        ) })
      ]
    }
  )
);
l.displayName = "OpenLinkAction";
export {
  l as OpenLinkAction
};
