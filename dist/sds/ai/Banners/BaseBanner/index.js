import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as c, useState as g } from "react";
import B from "../../../../icons/app/Cross.js";
import { withDataTestId as k } from "../../../../lib/data-testid/index.js";
import { withSkeleton as j } from "../../../../lib/skeleton.js";
import { cn as C } from "../../../../lib/utils.js";
import { Skeleton as s } from "../../../../ui/skeleton.js";
import { F0Button as n } from "../../../../components/F0Button/F0Button.js";
const z = c(
  function({
    title: d,
    subtitle: o,
    mediaUrl: i,
    primaryAction: a,
    secondaryAction: r,
    onClose: t,
    isLoading: p = !1,
    children: h,
    variant: x = "default"
  }, m) {
    const w = i?.includes(".mp4"), [v, b] = g(!1), N = () => {
      t && t(), b(!0);
    };
    return p ? /* @__PURE__ */ e(f, { ref: m }) : v ? null : /* @__PURE__ */ l(
      "div",
      {
        ref: m,
        className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
        children: [
          /* @__PURE__ */ e("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: w ? /* @__PURE__ */ e(
            "video",
            {
              src: i,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              className: "h-full w-full rounded-lg object-cover"
            }
          ) : /* @__PURE__ */ e(
            "img",
            {
              src: i,
              alt: "",
              className: "h-full w-full rounded-lg object-cover"
            }
          ) }),
          /* @__PURE__ */ l("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: C(
                  "flex w-full flex-col gap-1",
                  x === "default" ? "sm:max-w-lg" : void 0
                ),
                children: [
                  /* @__PURE__ */ e("h3", { className: "font-bold text-xl text-f1-foreground", children: d }),
                  o && /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: o })
                ]
              }
            ),
            /* @__PURE__ */ l("div", { className: "flex gap-3", children: [
              a && /* @__PURE__ */ e(
                n,
                {
                  onClick: a.onClick,
                  label: a.label,
                  variant: a.variant || "default",
                  size: "md",
                  icon: a.icon
                }
              ),
              r && /* @__PURE__ */ e(
                n,
                {
                  onClick: r.onClick,
                  label: r.label,
                  variant: r.variant || "outline",
                  size: "md",
                  icon: r.icon
                }
              ),
              h
            ] })
          ] }),
          t && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
            n,
            {
              variant: "ghost",
              icon: B,
              size: "sm",
              hideLabel: !0,
              onClick: N,
              label: "Close"
            }
          ) })
        ]
      }
    );
  }
), f = c(
  function(d, o) {
    return /* @__PURE__ */ l(
      "div",
      {
        ref: o,
        className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
        role: "status",
        "aria-busy": "true",
        "aria-live": "polite",
        ...d,
        children: [
          /* @__PURE__ */ e("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: /* @__PURE__ */ e(s, { className: "h-full w-full rounded-lg" }) }),
          /* @__PURE__ */ l("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
            /* @__PURE__ */ l("div", { className: "flex w-full flex-col gap-1 sm:max-w-lg", children: [
              /* @__PURE__ */ e(s, { className: "h-7 w-3/4" }),
              /* @__PURE__ */ e(s, { className: "h-4 w-full" }),
              /* @__PURE__ */ e(s, { className: "h-4 w-2/3" })
            ] }),
            /* @__PURE__ */ l("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ e(s, { className: "h-9 w-32" }),
              /* @__PURE__ */ e(s, { className: "h-9 w-24" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded-md" }) })
        ]
      }
    );
  }
), S = k(
  j(z, f)
);
S.displayName = "BaseBanner";
export {
  S as BaseBanner
};
