import { jsxs as l, jsx as r, Fragment as s } from "react/jsx-runtime";
import { useLayout as m } from "../../layouts/LayoutProvider.js";
import { experimentalComponent as c } from "../../lib/experimental.js";
import { cn as f } from "../../lib/utils.js";
import { F0Link as p } from "../../components/F0Link/F0Link.js";
import { F0Button as d } from "../../components/F0Button/F0Button.js";
const b = ({
  title: i,
  description: n,
  action: e,
  link: o,
  separator: t
}) => {
  const a = m();
  return /* @__PURE__ */ l(
    "div",
    {
      className: f(
        "border-1 flex flex-col justify-between gap-4 border-dashed border-transparent px-6 pb-5 pt-5 first:pb-0 first:pt-0 md:flex-row md:gap-2",
        a === "standard" && "-mx-[23px]",
        t === "top" && "border-t-f1-border first:pt-5",
        t === "bottom" && "border-b-f1-border first:pb-5"
      ),
      children: [
        /* @__PURE__ */ l("div", { className: "flex grow flex-col gap-3", children: [
          /* @__PURE__ */ l("div", { className: "flex max-w-[640px] flex-col gap-1", children: [
            /* @__PURE__ */ r("h2", { className: "text-lg font-semibold text-f1-foreground", children: i }),
            /* @__PURE__ */ r("p", { className: "text-f1-foreground-secondary", children: n })
          ] }),
          o && /* @__PURE__ */ r("div", { className: "w-fit", children: /* @__PURE__ */ r(p, { href: o.href, target: "_blank", children: o.label }) })
        ] }),
        e && /* @__PURE__ */ l(s, { children: [
          /* @__PURE__ */ r("div", { className: "hidden md:block", children: /* @__PURE__ */ r(
            d,
            {
              label: e.label,
              variant: e.variant ?? "outline",
              icon: e.icon,
              size: "md",
              onClick: e.onClick
            }
          ) }),
          /* @__PURE__ */ r("div", { className: "w-full md:hidden [&>button]:w-full", children: /* @__PURE__ */ r(
            d,
            {
              label: e.label,
              variant: e.variant ?? "outline",
              icon: e.icon,
              size: "lg",
              onClick: e.onClick
            }
          ) })
        ] })
      ]
    }
  );
}, w = c(
  "SectionHeader",
  b
);
export {
  w as SectionHeader
};
