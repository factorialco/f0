import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as $, useRef as q } from "react";
import { Image as G } from "../../lib/imageHandler.js";
import { cn as r, focusRing as H } from "../../lib/utils.js";
import { Card as R, CardHeader as S, CardTitle as M, CardSubtitle as P, CardContent as A } from "../../ui/Card/Card.js";
import { Skeleton as c } from "../../ui/skeleton.js";
import { OneEllipsis as J } from "../../lib/OneEllipsis/OneEllipsis.js";
import { CardActions as Q } from "./components/CardActions.js";
import { alertBorderColor as U, CardAlertWrapper as V } from "./components/CardAlert.js";
import { CardAvatar as X } from "./components/CardAvatar.js";
import { CardMetadata as Y } from "./components/CardMetadata.js";
import { CardOptions as z } from "./components/CardOptions.js";
import { F0Link as Z } from "../F0Link/F0Link.js";
const pe = [
  "contain",
  // Show entire image, no crop
  "cover",
  // Fill container, crop to maintain aspect ratio
  "fit-width",
  // Fill width, may have empty space on top/bottom (default value)
  "fit-height",
  // Fill height, crop left/right if needed
  "scale-down"
  // Prevent upscaling
], ve = ["xs", "sm", "md", "lg", "xl"], xe = ["default", "video"], F = {
  xs: "h-24",
  sm: "h-32",
  md: "h-40",
  lg: "h-48",
  xl: "h-64"
}, ee = {
  contain: "object-contain h-full w-full",
  cover: "object-cover h-full w-full",
  "fit-width": "w-full h-auto",
  "fit-height": "object-contain h-full w-auto",
  "scale-down": "object-scale-down h-full w-full"
};
function re(n) {
  return ee[n];
}
const be = $(
  function({
    compact: a = !1,
    avatar: u,
    image: d,
    imageFit: t = "fit-width",
    imageSize: B = "sm",
    imageAspectRatio: D = "default",
    blurredBackground: E = !0,
    title: i,
    description: x,
    metadata: m,
    children: b,
    link: p,
    primaryAction: W,
    secondaryActions: K,
    otherActions: h,
    bookmark: w,
    selectable: v = !1,
    subtleBorder: L = !1,
    selected: f = !1,
    onSelect: g,
    onClick: N,
    forceVerticalMetadata: O = !1,
    fullHeight: C = !1,
    disableOverlayLink: y = !1,
    alert: s
  }, k) {
    const j = q(null), I = (o) => {
      j?.current?.click(), N?.(), o.preventDefault(), o.stopPropagation();
    }, _ = /* @__PURE__ */ l(
      R,
      {
        className: r(
          "group relative bg-f1-background shadow-none transition-all",
          L && "border-f1-border-secondary",
          a && "p-3",
          C && "h-full",
          (v || h && h.length > 0) && !f && "hover:border-f1-border",
          p && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md",
          f && "border-f1-border-selected bg-f1-background-selected-secondary"
        ),
        style: s && s.visible !== !1 && !f ? {
          borderColor: U[s.variant],
          borderWidth: "2px"
        } : void 0,
        onClick: N,
        "data-testid": "card",
        ref: s && s.visible !== !1 ? void 0 : k,
        children: [
          p && !y && /* @__PURE__ */ e(
            Z,
            {
              href: p,
              variant: "unstyled",
              className: r("z-1 absolute inset-0 block rounded-xl", H()),
              "aria-label": i,
              ref: j,
              children: " "
            }
          ),
          d && /* @__PURE__ */ l(
            "div",
            {
              className: r(
                // pointer-events-none lets clicks on the image fall through to the
                // full-card overlay link; interactive overlay controls re-enable them.
                "pointer-events-none relative -mx-3 -mt-3 mb-4 rounded-md",
                D === "video" ? "aspect-video" : F[B],
                a && "-mx-2 -mt-2 mb-3",
                t === "fit-height" && "flex items-center justify-center overflow-hidden",
                t === "fit-width" && "flex items-center justify-center overflow-hidden",
                t !== "fit-width" && t !== "fit-height" && "overflow-hidden"
              ),
              children: [
                E && (t === "contain" || t === "fit-width" || t === "fit-height" || t === "scale-down") && /* @__PURE__ */ e(
                  "div",
                  {
                    className: "absolute inset-0 z-0 rounded-md",
                    style: {
                      backgroundImage: `url(${d})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(20px)",
                      opacity: 0.4,
                      transform: "scale(1.1)"
                    },
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ e(
                  G,
                  {
                    src: d,
                    alt: i,
                    className: r(re(t))
                  }
                ),
                /* @__PURE__ */ e(
                  z,
                  {
                    otherActions: h,
                    selectable: v,
                    selected: f,
                    onSelect: g,
                    bookmark: w,
                    title: i,
                    overlay: !0
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l("div", { className: "flex grow flex-col gap-2", children: [
            /* @__PURE__ */ l("div", { className: "flex flex-row items-start justify-between gap-1", children: [
              /* @__PURE__ */ l(
                S,
                {
                  ...y ? {} : {
                    onClick: (o) => {
                      I(o);
                    },
                    onKeyDown: (o) => {
                      (o.key === "Enter" || o.key === " ") && I(o);
                    },
                    role: "button",
                    "aria-label": i
                  },
                  className: r(
                    "relative flex-col gap-0 p-0",
                    d && !a && "pt-3",
                    a && "flex-row items-center gap-2"
                  ),
                  children: [
                    u && /* @__PURE__ */ e(
                      X,
                      {
                        avatar: u,
                        overlay: !!d,
                        compact: a
                      }
                    ),
                    /* @__PURE__ */ l("div", { className: r("flex flex-col gap-0"), children: [
                      /* @__PURE__ */ e(
                        M,
                        {
                          className: r(
                            "text-lg font-semibold text-f1-foreground",
                            a && "line-clamp-1 text-base"
                          ),
                          children: i
                        }
                      ),
                      x && /* @__PURE__ */ e(
                        P,
                        {
                          className: r("text-base text-f1-foreground-secondary"),
                          children: /* @__PURE__ */ e(J, { lines: a ? 2 : 3, children: x })
                        }
                      )
                    ] })
                  ]
                }
              ),
              !d && /* @__PURE__ */ e(
                z,
                {
                  otherActions: h,
                  selectable: v,
                  selected: f,
                  onSelect: g,
                  bookmark: w,
                  title: i
                }
              )
            ] }),
            (m || b) && /* @__PURE__ */ l(
              A,
              {
                className: "pointer-events-none relative z-10 [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_select]:pointer-events-auto [&_textarea]:pointer-events-auto [&_[role='button']]:pointer-events-auto [&_[tabindex]]:pointer-events-auto",
                onClick: (o) => o.stopPropagation(),
                children: [
                  m && /* @__PURE__ */ e(
                    "div",
                    {
                      className: r(
                        "flex flex-col gap-0.5",
                        a && "gap-x-3 gap-y-0",
                        O && "flex-col gap-y-0.5"
                      ),
                      children: m.map((o, T) => /* @__PURE__ */ e(Y, { metadata: o }, T))
                    }
                  ),
                  b
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e(
            Q,
            {
              primaryAction: W,
              secondaryActions: K,
              compact: a
            }
          )
        ]
      }
    );
    return s && s.visible !== !1 ? /* @__PURE__ */ e(V, { ref: k, alert: s, fullHeight: C, children: _ }) : _;
  }
), we = ({ compact: n = !1 }) => /* @__PURE__ */ l(
  R,
  {
    className: r(
      "group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none",
      n && "p-3"
    ),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ l(
        S,
        {
          className: r(
            "flex flex-col gap-2.5 p-0",
            n && "flex-row items-center gap-2"
          ),
          children: [
            /* @__PURE__ */ e(
              c,
              {
                className: r("h-10 w-10 rounded-full", n && "h-6 w-6")
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: r(
                  "flex flex-col gap-0",
                  n && "flex-row items-center gap-1.5"
                ),
                children: [
                  /* @__PURE__ */ e(M, { className: "flex h-6 items-center", children: /* @__PURE__ */ e(c, { className: r("h-4 w-20 rounded-md", n && "h-3") }) }),
                  /* @__PURE__ */ e(P, { className: "flex h-5 items-center", children: /* @__PURE__ */ e(c, { className: "h-3 w-12 rounded-md" }) })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ e(A, { className: "flex flex-col gap-0", children: Array.from({ length: 3 }).map((a, u) => /* @__PURE__ */ l("div", { className: "flex h-6 items-center gap-1.5", children: [
        /* @__PURE__ */ e(c, { className: "h-4 w-4 rounded-full" }),
        /* @__PURE__ */ e(c, { className: "h-3 w-full max-w-20 rounded-md" })
      ] }, u)) })
    ]
  }
);
export {
  be as CardInternal,
  we as CardSkeleton,
  xe as cardImageAspectRatios,
  pe as cardImageFits,
  ve as cardImageSizes
};
