import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { cva as w } from "../../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as h } from "react";
import { F0Icon as v } from "../../../../components/F0Icon/index.js";
import N from "../../../../icons/app/CheckCircle.js";
import k from "../../../../icons/app/Cross.js";
import y from "../../../../icons/app/InfoCircle.js";
import "../../../../icons/app/Menu.js";
import F from "../../../../icons/app/Warning.js";
import { cn as d } from "../../../../lib/utils.js";
import { Skeleton as o } from "../../../../ui/skeleton.js";
import { OneEllipsis as C } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Button as c } from "../../../../components/F0Button/F0Button.js";
const p = w({
  base: "flex w-full flex-col rounded-lg p-[1px]",
  variants: {
    variant: {
      ai: "bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F]",
      critical: "bg-f1-background-critical",
      positive: "bg-f1-background-positive",
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning"
    }
  },
  defaultVariants: {
    variant: "ai"
  }
}), m = {
  positive: N,
  warning: F,
  info: y
}, u = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, O = h(
  function({ title: l, onClose: s, children: x, actions: a = [], variant: i }, g) {
    if (a.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${a.length} actions were provided.`
      );
    const f = a.length > 0;
    return /* @__PURE__ */ r(
      "div",
      {
        ref: g,
        className: p({ variant: i }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ r("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ r(
              "div",
              {
                className: d(
                  "flex flex-row items-center gap-2",
                  u[i]
                ),
                children: [
                  m[i] && /* @__PURE__ */ e(v, { icon: m[i], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    C,
                    {
                      className: u[i] || "font-medium",
                      children: l
                    }
                  )
                ]
              }
            ),
            s && /* @__PURE__ */ e(
              c,
              {
                variant: "ghost",
                icon: k,
                size: "sm",
                hideLabel: !0,
                onClick: s,
                label: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { className: "flex flex-col gap-[1px]", children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: d(
                  "bg-f1-background px-4 py-3",
                  f ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: x
              }
            ),
            f && /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: a.map((t, b) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
              c,
              {
                label: t.label,
                onClick: t.onClick,
                variant: "outline",
                icon: t.icon
              }
            ) }, b)) })
          ] })
        ]
      }
    );
  }
), T = ({
  compact: n,
  variant: l = "ai"
}) => /* @__PURE__ */ r(
  "div",
  {
    className: p({ variant: l }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(o, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ r("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: d(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              n && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ e(o, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ e(o, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ e(o, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !n && /* @__PURE__ */ r("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ e(o, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ e(o, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
);
export {
  O as CalloutInternal,
  T as CalloutSkeleton
};
