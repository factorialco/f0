import { jsx as a } from "react/jsx-runtime";
import { Root as s } from "../node_modules/.pnpm/@radix-ui_react-slot@1.2.3_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.js";
import { forwardRef as m, useId as c } from "react";
import { Link as d } from "../lib/linkHandler.js";
import { cn as t } from "../lib/utils.js";
import { LayoutGroup as l } from "../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/LayoutGroup/index.js";
import { AnimatePresence as u } from "../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
const p = m(({ ...r }, e) => /* @__PURE__ */ a("nav", { ref: e, "aria-label": "breadcrumb", ...r }));
p.displayName = "Breadcrumb";
const f = m(({ className: r, children: e, ...o }, n) => {
  const i = c();
  return /* @__PURE__ */ a(
    "ol",
    {
      ref: n,
      className: t(
        "flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary",
        r
      ),
      ...o,
      children: /* @__PURE__ */ a(l, { id: i, children: /* @__PURE__ */ a(u, { initial: !1, children: e }) })
    }
  );
});
f.displayName = "BreadcrumbList";
const b = ({ className: r, ...e }) => /* @__PURE__ */ a(
  "li",
  {
    className: t("inline-flex items-center gap-0.5 pr-1", r),
    ...e
  }
);
b.displayName = "BreadcrumbItem";
const x = m(({ asChild: r, className: e, ...o }, n) => /* @__PURE__ */ a(
  r ? s : d,
  {
    ref: n,
    className: t(
      "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
      e
    ),
    ...o
  }
));
x.displayName = "BreadcrumbLink";
const y = m(({ className: r, ...e }, o) => /* @__PURE__ */ a(
  "span",
  {
    ref: o,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: t("truncate px-1.5 py-0.5 text-f1-foreground", r),
    ...e
  }
));
y.displayName = "BreadcrumbPage";
export {
  p as Breadcrumb,
  b as BreadcrumbItem,
  x as BreadcrumbLink,
  f as BreadcrumbList,
  y as BreadcrumbPage
};
