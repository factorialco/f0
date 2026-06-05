import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { cva as R } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import a, { forwardRef as u, useEffect as T } from "react";
import { F0Icon as B } from "../../../components/F0Icon/index.js";
import { F0TagAlert as E } from "../../../components/tags/F0TagAlert/index.js";
import { F0TagStatus as U } from "../../../components/tags/F0TagStatus/index.js";
import { Counter as $ } from "../../../ui/Counter/index.js";
import { Tooltip as j } from "../../Overlays/Tooltip/index.js";
import { PrivateBox as z } from "../../../sds/Profile/PrivateBox/index.js";
import A from "../../../icons/app/EyeInvisible.js";
import I from "../../../icons/app/EyeVisible.js";
import L from "../../../icons/app/InfoCircleLine.js";
import "../../../icons/app/Menu.js";
import { withDataTestId as M } from "../../../lib/data-testid/index.js";
import { experimentalComponent as P } from "../../../lib/experimental.js";
import { usePrivacyMode as _ } from "../../../lib/privacyMode.js";
import { withSkeleton as D } from "../../../lib/skeleton.js";
import { cn as f } from "../../../lib/utils.js";
import { Card as x, CardHeader as h, CardTitle as v, CardSubtitle as w, CardContent as g, CardLink as V, CardComment as W, CardFooter as H } from "../../../ui/Card/Card.js";
import { Separator as Y } from "../../../ui/separator.js";
import { Skeleton as d } from "../../../ui/skeleton.js";
import { F0Button as p } from "../../../components/F0Button/F0Button.js";
const q = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), G = u(function({ header: l, children: o, action: c, summaries: s, alert: i, status: n, fullHeight: b = !1 }, C) {
  const { enabled: k, toggle: F } = _();
  T(() => {
    if (i && n)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, n]);
  const y = (t) => !!t && !(a.isValidElement(t) && t.type === a.Fragment && a.Children.count(t.props.children) === 0), S = () => {
    l?.link?.onClick?.();
  };
  return /* @__PURE__ */ r(
    x,
    {
      className: f(
        b ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: C,
      children: [
        l && /* @__PURE__ */ e(h, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ r("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ r("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ r("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              l.title && /* @__PURE__ */ e(v, { className: "truncate", children: l.title }),
              l.subtitle && /* @__PURE__ */ r("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(q, {}),
                /* @__PURE__ */ e(w, { className: "truncate", children: l.subtitle })
              ] }),
              l.info && /* @__PURE__ */ e(j, { label: l.info, children: /* @__PURE__ */ e(
                B,
                {
                  icon: L,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              l.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e($, { value: l.count }) })
            ] }),
            /* @__PURE__ */ r("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ e(E, { text: i, level: "critical" }),
              n && /* @__PURE__ */ e(U, { text: n.text, variant: n.variant }),
              l.link && /* @__PURE__ */ e(
                V,
                {
                  onClick: S,
                  href: l.link.url,
                  title: l.link.title,
                  icon: l.link.icon
                }
              )
            ] })
          ] }),
          l.comment && /* @__PURE__ */ r("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(W, { children: l.comment }) }),
            !!l.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              p,
              {
                icon: k ? A : I,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: F,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ r(g, { className: "flex h-full flex-col gap-4", children: [
          s && /* @__PURE__ */ e("div", { className: "flex flex-row", children: s.map((t, m) => /* @__PURE__ */ r("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: t.label }),
            /* @__PURE__ */ r("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!t.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: t.prefixUnit }),
              t.value,
              !!t.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: t.postfixUnit })
            ] })
          ] }, m)) }),
          a.Children.toArray(o).filter(y).map((t, m) => /* @__PURE__ */ r(a.Fragment, { children: [
            m > 0 && /* @__PURE__ */ e(Y, { bare: !0 }),
            t
          ] }, m))
        ] }),
        c && /* @__PURE__ */ e(H, { children: /* @__PURE__ */ e(p, { variant: "neutral", size: "sm", ...c }) })
      ]
    }
  );
}), J = R({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), K = u(
  function({ header: l, height: o }, c) {
    return /* @__PURE__ */ r(
      x,
      {
        className: f(
          "flex gap-4 border-f1-border-secondary",
          o === "full" && "h-full"
        ),
        ref: c,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(h, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ r(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                l?.title ? /* @__PURE__ */ e(v, { children: l.title }) : /* @__PURE__ */ e(d, { className: "h-4 w-full max-w-16" }),
                l?.subtitle && /* @__PURE__ */ e(w, { children: l.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            g,
            {
              "aria-hidden": !0,
              className: f(o !== "full" && J({ height: o })),
              children: [...Array(4)].map((s, i) => /* @__PURE__ */ e(
                d,
                {
                  className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][i]}`
                },
                i
              ))
            }
          )
        ]
      }
    );
  }
), we = M(
  P("Widget", D(G, K))
);
export {
  we as Widget
};
