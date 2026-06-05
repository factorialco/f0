import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as c } from "react";
import { RichTextDisplay as x } from "../../../../components/RichText/RichTextDisplay/index.js";
import p from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import { cn as s } from "../../../../lib/utils.js";
import { Skeleton as a } from "../../../../ui/skeleton.js";
import { OneEllipsis as u } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Button as n } from "../../../../components/F0Button/F0Button.js";
const j = c(function({ title: t, onClose: o, content: f, primaryAction: d, secondaryAction: r }, m) {
  return /* @__PURE__ */ l(
    "div",
    {
      ref: m,
      className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
      "data-testid": "ai-banner",
      children: [
        /* @__PURE__ */ l("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
          /* @__PURE__ */ e(u, { className: "font-medium", children: t }),
          o && /* @__PURE__ */ e(
            n,
            {
              variant: "ghost",
              icon: p,
              size: "sm",
              hideLabel: !0,
              onClick: o,
              label: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: "flex flex-col gap-[1px]", children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: s(
                "bg-f1-background px-4 py-3",
                r || d ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
              ),
              children: /* @__PURE__ */ e(x, { content: f })
            }
          ),
          (r || d) && /* @__PURE__ */ l("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
            /* @__PURE__ */ e("div", { children: r && /* @__PURE__ */ e(
              n,
              {
                label: r.label,
                onClick: r.onClick,
                variant: "outline",
                icon: r.icon
              }
            ) }),
            /* @__PURE__ */ e("div", { children: d && /* @__PURE__ */ e(
              n,
              {
                label: d.label,
                onClick: d.onClick,
                variant: "outline",
                icon: d.icon
              }
            ) })
          ] })
        ] })
      ]
    }
  );
}), C = ({ compact: i }) => /* @__PURE__ */ l(
  "div",
  {
    className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(a, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ l("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: s(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              i && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ e(a, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ e(a, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ e(a, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !i && /* @__PURE__ */ l("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ e(a, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ e(a, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
);
export {
  j as AiBannerInternal,
  C as AiBannerSkeleton
};
