import { jsxs as n, jsx as e, Fragment as m } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import { F0AvatarDate as f } from "../../../../components/avatars/F0AvatarDate/index.js";
import { F0Icon as b } from "../../../../components/F0Icon/index.js";
import { F0TagRaw as g } from "../../../../components/tags/F0TagRaw/index.js";
import { Tooltip as y } from "../../../Overlays/Tooltip/index.js";
import w from "../../../../icons/app/ChevronRight.js";
import "../../../../icons/app/Menu.js";
import { cn as $ } from "../../../../lib/utils.js";
const p = ({ tags: s, right: l }) => /* @__PURE__ */ e(
  "div",
  {
    className: $(
      "flex flex-1 flex-row items-center gap-1.5",
      l && "justify-end"
    ),
    children: s.map((r) => {
      const t = /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        g,
        {
          icon: r.icon,
          text: r.label ?? (r.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${r.label}: ${r.description}`
        }
      ) });
      return r.label || r.description ? /* @__PURE__ */ e(
        y,
        {
          label: r.label,
          description: r.description,
          children: t
        },
        r.label ?? r.description
      ) : t;
    })
  }
), q = N(
  function({
    label: l,
    title: r,
    subtitle: t,
    description: x,
    color: i,
    isPending: u,
    leftTags: a,
    rightTags: o,
    fromDate: d,
    toDate: c,
    noBackground: h
  }, v) {
    return /* @__PURE__ */ n(
      "div",
      {
        ref: v,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !h && /* @__PURE__ */ n(m, { children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `${i}`
                }
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${i}, transparent)`
                }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "div",
            {
              className: "min-h-10 min-w-1 rounded-2xs",
              style: u ? {
                backgroundImage: `repeating-linear-gradient(
              135deg,
              ${i} 0px,
              ${i} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
              } : {
                backgroundColor: i
              }
            }
          ),
          /* @__PURE__ */ n("div", { className: "z-10 flex flex-1 flex-col gap-2", children: [
            /* @__PURE__ */ n("div", { className: "flex flex-row items-start gap-2.5", children: [
              /* @__PURE__ */ n("div", { className: "flex flex-1 flex-col gap-0.5", children: [
                !!l && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: l }),
                /* @__PURE__ */ n("p", { className: "line-clamp-3 font-medium text-f1-foreground", children: [
                  r,
                  !!t && /* @__PURE__ */ e("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${t}` })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: x })
              ] }),
              /* @__PURE__ */ n("div", { className: "flex flex-row items-center", children: [
                d && /* @__PURE__ */ n(m, { children: [
                  /* @__PURE__ */ e(f, { date: d }),
                  /* @__PURE__ */ e(
                    b,
                    {
                      icon: w,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                c && /* @__PURE__ */ e(f, { date: c })
              ] })
            ] }),
            (a || o) && /* @__PURE__ */ n("div", { className: "flex flex-row items-center justify-between", children: [
              a && /* @__PURE__ */ e(p, { tags: a }),
              o && /* @__PURE__ */ e(p, { tags: o, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
);
export {
  q as CalendarEvent
};
