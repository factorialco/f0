import { jsxs as w, jsx as m } from "react/jsx-runtime";
import { cva as u } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as x } from "react";
import { DropdownInternal as h } from "../../../experimental/Navigation/Dropdown/internal.js";
import v from "../../../icons/app/CrossedCircle.js";
import F from "../../../icons/app/Ellipsis.js";
import "../../../icons/app/Menu.js";
import { withDataTestId as b } from "../../../lib/data-testid/index.js";
import { OneEllipsis as I } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { cn as n } from "../../../lib/utils.js";
import { F0AvatarFile as k } from "../../avatars/F0AvatarFile/F0AvatarFile.js";
import { F0Button as z } from "../../F0Button/F0Button.js";
const C = u({
  base: "flex w-fit flex-row items-center overflow-hidden bg-f1-background-tertiary rounded-[10px]",
  variants: {
    size: {
      md: "max-w-48 gap-2 py-0.5 pl-0.5 pr-1.5",
      lg: "max-w-56 gap-2.5 p-1"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), y = {
  md: "md",
  lg: "md"
}, s = {
  md: "sm",
  lg: "md"
}, p = x(
  ({ file: a, actions: r = [], disabled: i = !1, size: o = "md", className: c, ...d }, f) => {
    const l = r.length > 0, t = r.length === 1 ? r[0] : null, g = r.map((e) => ({
      label: e.label,
      icon: e.icon,
      critical: e.critical,
      onClick: i ? void 0 : e.onClick
    }));
    return /* @__PURE__ */ w(
      "div",
      {
        ref: f,
        className: n(C({ size: o }), c),
        ...d,
        children: [
          /* @__PURE__ */ m(k, { file: a, size: y[o] }),
          /* @__PURE__ */ m(
            I,
            {
              className: n(
                "text-neutral-1000 grow text-sm font-medium",
                !l && "pr-3"
              ),
              children: a.name
            }
          ),
          l && (t ? /* @__PURE__ */ m(
            z,
            {
              label: t.label,
              size: s[o],
              icon: t.icon ?? v,
              disabled: i,
              onClick: i ? void 0 : t.onClick,
              hideLabel: !0,
              variant: "ghost"
            }
          ) : /* @__PURE__ */ m(
            h,
            {
              items: g,
              icon: F,
              size: s[o]
            }
          ))
        ]
      }
    );
  }
);
p.displayName = "FileItem";
const T = b(p);
export {
  T as FileItem
};
