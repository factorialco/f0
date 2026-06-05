import { jsxs as n, Fragment as h, jsx as t } from "react/jsx-runtime";
import { forwardRef as S, useMemo as r } from "react";
import { Badge as y } from "../../../ui/IconBadge/index.js";
import { Tooltip as F } from "../../../experimental/Overlays/Tooltip/index.js";
import { DataTestIdWrapper as A } from "../../../lib/data-testid/index.js";
import { cn as a } from "../../../lib/utils.js";
import { Avatar as g, AvatarFallback as M } from "../../../ui/Avatar/Avatar.js";
import { F0AvatarModule as N } from "../F0AvatarModule/index.js";
import { getFileTypeInfo as j, getBadgeSize as T, getAvatarSize as b } from "./utils.js";
import { sizesMapping as k } from "../internal/BaseAvatar/types.js";
const w = S(
  ({ file: c, badge: e, dataTestId: p, ...o }, d) => {
    const { type: f, color: z } = j(c), u = r(
      () => Object.fromEntries(
        Object.entries(k).map(([i, x]) => [x, i])
      ),
      []
    )[o.size] ?? "small", s = T(o.size), m = b(o.size), l = r(
      () => e ? /* @__PURE__ */ n(h, { children: [
        e.type === "module" && /* @__PURE__ */ t(N, { module: e.module, size: m }),
        e.type !== "module" && /* @__PURE__ */ t(y, { type: e.type, icon: e.icon, size: s })
      ] }) : null,
      [e, s, m]
    ), v = r(() => {
      const i = {
        xs: "text-[7px]",
        sm: "text-[8px]",
        md: "text-sm",
        lg: "text-sm"
      };
      return i[o.size || "sm"] ?? i.sm;
    }, [o]);
    return /* @__PURE__ */ t(A, { dataTestId: p, children: /* @__PURE__ */ n(
      g,
      {
        ref: d,
        className: a("bg-f1-background", "overflow-visible"),
        ...o,
        size: u,
        children: [
          /* @__PURE__ */ t(
            M,
            {
              className: a("select-none font-semibold", v, z),
              children: f
            }
          ),
          e && /* @__PURE__ */ t("div", { className: "absolute -bottom-0.5 -right-0.5", children: e.tooltip ? /* @__PURE__ */ t(F, { description: e.tooltip, children: /* @__PURE__ */ t("div", { className: "cursor-help", children: l }) }) : l })
        ]
      }
    ) });
  }
);
w.displayName = "F0AvatarFile";
export {
  w as F0AvatarFile
};
