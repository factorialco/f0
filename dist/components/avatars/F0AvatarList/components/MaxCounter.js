import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { cva as x } from "../../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { F0Icon as h } from "../../../F0Icon/index.js";
import v from "../../../../icons/app/EllipsisHorizontal.js";
import "../../../../icons/app/Menu.js";
import { cn as t } from "../../../../lib/utils.js";
import { HoverCard as b, HoverCardTrigger as g, HoverCardContent as w } from "../../../../ui/hover-card.js";
import { ScrollArea as N, ScrollBar as y } from "../../../../ui/scrollarea.js";
import { F0Avatar as k } from "../../F0Avatar/index.js";
import { getAvatarDisplayName as z } from "../utils.js";
const C = x({
  base: "flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary",
  variants: {
    size: {
      xs: "h-5 w-5 rounded-xs text-sm",
      sm: "h-6 min-w-6 rounded-sm px-1 text-sm",
      md: "h-8 min-w-8 rounded px-1.5"
    },
    type: {
      base: "",
      rounded: "!rounded-full"
    }
  },
  compoundVariants: [
    {
      size: "sm",
      type: "rounded",
      className: "px-1.5"
    },
    {
      size: "md",
      type: "rounded",
      className: "px-2"
    }
  ],
  defaultVariants: {
    size: "md",
    type: "base"
  }
}), M = ({
  count: l,
  size: o = "md",
  type: p,
  list: a,
  avatarType: n = "person",
  tooltipScroll: f = "vertical"
}) => {
  const c = /* @__PURE__ */ e(
    "div",
    {
      className: t(
        "cursor-default font-medium transition hover:bg-f1-background-secondary-hover",
        C({ size: o, type: p })
      ),
      children: o === "xs" ? /* @__PURE__ */ e(h, { icon: v, size: "xs" }) : `+${l}`
    }
  );
  if (!a?.length) return c;
  const r = f === "vertical", d = a.map((i, u) => {
    const m = i.tooltipDescription;
    return /* @__PURE__ */ s(
      "div",
      {
        className: t(
          "flex items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          r && "w-[180px] min-w-0"
        ),
        children: [
          /* @__PURE__ */ e("div", { className: "h-6 w-6 shrink-0", children: /* @__PURE__ */ e(
            k,
            {
              avatar: { type: n, ...i },
              size: "sm"
            }
          ) }),
          /* @__PURE__ */ s("div", { className: t("flex flex-col", r && "min-w-0 flex-1"), children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: t(
                  "font-semibold",
                  r ? "truncate" : "whitespace-nowrap"
                ),
                children: z(n, i)
              }
            ),
            m && /* @__PURE__ */ e(
              "div",
              {
                className: t(
                  "text-sm text-current opacity-70",
                  r ? "truncate" : "whitespace-nowrap"
                ),
                children: m
              }
            )
          ] })
        ]
      },
      u
    );
  });
  return /* @__PURE__ */ s(b, { children: [
    /* @__PURE__ */ e(g, { asChild: !0, children: c }),
    /* @__PURE__ */ e(w, { side: "top", className: t(!r && "w-auto"), children: r ? /* @__PURE__ */ s(N, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
      d,
      /* @__PURE__ */ e(
        y,
        {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        }
      )
    ] }) : /* @__PURE__ */ e("div", { className: "flex flex-col py-1", children: d }) })
  ] });
};
export {
  M as MaxCounter
};
