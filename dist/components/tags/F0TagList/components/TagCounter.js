import { jsx as r, jsxs as t } from "react/jsx-runtime";
import { Tag as n } from "../../F0Tag/F0Tag.js";
import { F0TagRaw as c } from "../../F0TagRaw/index.js";
import { Tooltip as d } from "../../../../experimental/Overlays/Tooltip/index.js";
import { HoverCard as s, HoverCardTrigger as p, HoverCardContent as m } from "../../../../ui/hover-card.js";
import { ScrollArea as f, ScrollBar as h } from "../../../../ui/scrollarea.js";
const x = ({ count: a, list: o }) => {
  const i = /* @__PURE__ */ r(c, { text: `+${a}` });
  return o?.length ? /* @__PURE__ */ t(s, { children: [
    /* @__PURE__ */ r(p, { children: /* @__PURE__ */ r("span", { className: "pointer-events-auto relative z-[1] cursor-pointer", children: i }) }),
    /* @__PURE__ */ r(
      m,
      {
        side: "top",
        className: "bg-f1-background text-f1-foreground shadow-md ring-1 ring-f1-border-secondary",
        children: /* @__PURE__ */ t(f, { className: "flex max-h-[220px] flex-col", children: [
          o.map((e, l) => /* @__PURE__ */ r(
            "div",
            {
              className: "flex w-[172px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: e.description ? /* @__PURE__ */ r(d, { label: e.description, children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(n, { tag: e }) }) }) : /* @__PURE__ */ r(n, { tag: e })
            },
            l
          )),
          /* @__PURE__ */ r(h, { orientation: "vertical" })
        ] })
      }
    )
  ] }) : i;
};
x.displayName = "TagCounter";
export {
  x as TagCounter
};
