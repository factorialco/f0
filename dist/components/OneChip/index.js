import { jsxs as d, jsx as t } from "react/jsx-runtime";
import { cva as a } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { F0Avatar as u } from "../avatars/F0Avatar/index.js";
import { F0Icon as c } from "../F0Icon/index.js";
import x from "../../icons/app/CrossedCircle.js";
import "../../icons/app/Menu.js";
import { experimentalComponent as g } from "../../lib/experimental.js";
import { cn as f, focusRing as m } from "../../lib/utils.js";
const b = a({
  base: "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 font-medium",
  variants: {
    variant: {
      default: "",
      selected: "border-f1-border-selected bg-f1-background-selected-secondary text-f1-foreground-selected"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), v = ({
  deactivated: l,
  label: p,
  variant: i,
  onClick: r,
  onClose: s,
  avatar: e,
  icon: n
}) => /* @__PURE__ */ d(
  "div",
  {
    className: f(
      b({ variant: i }),
      s && "pr-1.5",
      e && "pl-0.5",
      e && e?.type !== "person" && "rounded-sm",
      n && !e && "pl-1.5",
      r && "cursor-pointer",
      r && m()
    ),
    onClick: r,
    onKeyDown: (o) => {
      (o.key === "Enter" || o.key === " ") && r?.();
    },
    tabIndex: r ? 0 : void 0,
    children: [
      e && /* @__PURE__ */ t(u, { avatar: e, size: "xs" }),
      /* @__PURE__ */ d("div", { className: "flex items-center gap-0.5", children: [
        n && /* @__PURE__ */ t(c, { icon: n, size: "sm", className: "text-f1-icon" }),
        /* @__PURE__ */ t("span", { className: l ? "text-f1-foreground/[0.61]" : void 0, children: p })
      ] }),
      s && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: (o) => {
            o.stopPropagation(), s();
          },
          className: f(
            "-m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full [&_svg]:text-f1-icon-secondary [&_svg]:transition-colors [&_svg]:hover:text-f1-icon [&_svg]:focus:text-f1-icon",
            i === "selected" && "[&_svg]:text-f1-icon-selected [&_svg]:hover:text-f1-icon-selected-hover [&_svg]:focus:text-f1-icon-selected-hover",
            m()
          ),
          tabIndex: 0,
          "aria-label": "Close",
          children: /* @__PURE__ */ t(c, { icon: x, size: "sm" })
        }
      )
    ]
  }
), I = g("Chip", v);
export {
  I as Chip,
  b as chipVariants
};
