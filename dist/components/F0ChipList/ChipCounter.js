import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { useState as c } from "react";
import { focusRing as p } from "../../lib/utils.js";
import { Popover as m, PopoverTrigger as f, PopoverContent as h } from "../../ui/popover.js";
import { ScrollArea as b, ScrollBar as u } from "../../ui/scrollarea.js";
import { Chip as n } from "../OneChip/index.js";
const x = ({ count: t, list: r }) => {
  const [l, a] = c(!1), o = /* @__PURE__ */ e(n, { label: `+${t}` });
  return r?.length ? /* @__PURE__ */ i(m, { open: l, onOpenChange: a, children: [
    /* @__PURE__ */ e(f, { asChild: !0, children: /* @__PURE__ */ e("button", { className: p("inline-flex flex-shrink-0 items-center"), children: o }) }),
    /* @__PURE__ */ e(
      h,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ i(b, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          r.map((s, d) => /* @__PURE__ */ e(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ e(n, { ...s })
            },
            d
          )),
          /* @__PURE__ */ e(
            u,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      }
    )
  ] }) : o;
};
x.displayName = "ChipCounter";
export {
  x as ChipCounter
};
