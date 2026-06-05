import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import { F0AvatarModule as p } from "../../../components/avatars/F0AvatarModule/index.js";
import { F0Icon as h } from "../../../components/F0Icon/index.js";
import { F0TagRaw as v } from "../../../components/tags/F0TagRaw/index.js";
import { F0TagStatus as u } from "../../../components/tags/F0TagStatus/index.js";
import N from "../../../icons/app/CheckCircle.js";
import "../../../icons/app/Menu.js";
import { withDataTestId as w } from "../../../lib/data-testid/index.js";
import { cn as b } from "../../../lib/utils.js";
const g = ({ benefits: r }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: r.map((s, i) => /* @__PURE__ */ e(y, { text: s }, i)) }), y = ({ text: r }) => /* @__PURE__ */ l("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(h, { icon: N, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: r })
] }), f = x(
  ({
    title: r,
    image: s,
    benefits: i,
    actions: o,
    withShadow: n = !0,
    module: c,
    moduleName: d,
    tag: t,
    promoTag: a
  }, m) => /* @__PURE__ */ l(
    "div",
    {
      ref: m,
      className: b(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        n && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ e(
          "img",
          {
            src: s,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ l("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ l("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ l("div", { className: "flex flex-row items-center gap-2", children: [
                c && /* @__PURE__ */ e(p, { module: c }),
                d && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: d })
              ] }),
              (t || a) && /* @__PURE__ */ l("div", { className: "flex justify-start gap-2", children: [
                t && /* @__PURE__ */ e(v, { icon: t.icon, text: t.label }),
                a && /* @__PURE__ */ e(
                  u,
                  {
                    variant: a.variant || "positive",
                    text: a.label
                  }
                )
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: r })
            ] }),
            /* @__PURE__ */ e(g, { benefits: i })
          ] }),
          o && /* @__PURE__ */ e("div", { className: "flex gap-3", children: o })
        ] })
      ]
    }
  )
);
f.displayName = "ProductBlankslate";
const M = w(f);
export {
  M as ProductBlankslate
};
