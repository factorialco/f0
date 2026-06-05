import { jsxs as n, Fragment as c, jsx as r } from "react/jsx-runtime";
import { forwardRef as F, useMemo as S } from "react";
import { F0AvatarModule as M } from "../../F0AvatarModule/index.js";
import { F0Icon as w } from "../../../F0Icon/index.js";
import { Tooltip as I } from "../../../../experimental/Overlays/Tooltip/index.js";
import { Avatar as C, AvatarImage as E, AvatarFallback as T } from "../../../../ui/Avatar/Avatar.js";
import { Badge as O } from "../../../../ui/IconBadge/index.js";
import { sizesMapping as d, avatarSizes as U } from "./types.js";
import { getInitials as $, getAvatarColor as D, getAvatarSize as P, getBadgeSize as R, getMask as Z } from "./utils.js";
const m = "md", _ = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "md",
  xl: "lg",
  "2xl": "lg"
}, q = F(
  ({
    src: p,
    name: a,
    size: o,
    type: u = "base",
    color: f = "random",
    "aria-label": v,
    "aria-labelledby": h,
    badge: e,
    flag: l,
    icon: i
  }, b) => {
    const x = S(
      () => Object.fromEntries(
        Object.entries(d).map(([s, B]) => [B, s])
      ),
      []
    ), N = (s) => U.includes(s);
    let t = m;
    o && !N(o) ? (console.warn(
      `The avatar size: ${o} is deprecated. Use ${d[o]} instead.`
    ), t = d[o] ?? m) : t = o ?? m;
    const g = $(a, t), k = f === "random" ? D(Array.isArray(a) ? a.join("") : a) : f, j = !!(v || h), y = R(t), A = P(t), z = S(
      () => e ? /* @__PURE__ */ n(c, { children: [
        e.type === "module" && /* @__PURE__ */ r(M, { module: e.module, size: A }),
        e.type !== "module" && /* @__PURE__ */ r(O, { type: e.type, icon: e.icon, size: y })
      ] }) : null,
      [e, y, A]
    );
    return /* @__PURE__ */ r(c, { children: /* @__PURE__ */ n("div", { className: "relative inline-flex h-fit w-fit", children: [
      /* @__PURE__ */ r(
        "div",
        {
          className: "relative h-fit w-fit",
          style: e ? {
            clipPath: Z.get(
              u === "rounded" ? "rounded" : "base",
              t,
              e.type === "module" ? "module" : "default"
            )
          } : void 0,
          children: /* @__PURE__ */ r(
            C,
            {
              size: x[t] || "small",
              type: u,
              color: k,
              ref: b,
              role: "img",
              "aria-hidden": !j,
              "aria-label": v,
              "aria-labelledby": h,
              translate: "no",
              "data-a11y-color-contrast-ignore": !0,
              className: i ? "bg-f1-background-secondary" : p || l ? "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary" : "",
              children: i ? /* @__PURE__ */ r(
                w,
                {
                  icon: i.icon,
                  color: i.color,
                  size: _[t]
                }
              ) : /* @__PURE__ */ n(c, { children: [
                l ? /* @__PURE__ */ r("span", { className: "absolute inset-0", children: l }) : /* @__PURE__ */ r(E, { src: p, alt: g }),
                /* @__PURE__ */ r(
                  T,
                  {
                    "data-a11y-color-contrast-ignore": !0,
                    className: "select-none",
                    children: g
                  }
                )
              ] })
            }
          )
        }
      ),
      e && /* @__PURE__ */ r("div", { className: "absolute -bottom-0.5 -right-0.5", children: e.tooltip ? /* @__PURE__ */ r(I, { description: e.tooltip, children: z }) : z })
    ] }) });
  }
);
q.displayName = "BaseAvatar";
export {
  q as BaseAvatar
};
