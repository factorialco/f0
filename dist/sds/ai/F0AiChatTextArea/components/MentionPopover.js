import { jsx as o, jsxs as m } from "react/jsx-runtime";
import { useRef as d, useEffect as N, useLayoutEffect as w } from "react";
import { F0AvatarPerson as y } from "../../../../components/avatars/F0AvatarPerson/F0AvatarPerson.js";
import { cn as n } from "../../../../lib/utils.js";
import { Skeleton as u } from "../../../../ui/skeleton.js";
import { OneEllipsis as k } from "../../../../lib/OneEllipsis/OneEllipsis.js";
function R({
  isOpen: h,
  results: a,
  isLoading: s,
  selectedIndex: f,
  position: l,
  onSelect: b
}) {
  const c = d(null), i = d(null);
  N(() => {
    i.current?.scrollIntoView({ block: "nearest" });
  }, [f]), w(() => {
    const e = c.current, t = e?.offsetParent;
    if (!e || !t) return;
    const r = e.offsetLeft + e.offsetWidth - t.clientWidth;
    r > 0 && (e.style.left = `${Math.max(0, e.offsetLeft - r)}px`);
  }, [l]);
  const x = s && a.length === 0, g = !s && a.length === 0;
  return !h || g ? null : /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      role: "listbox",
      style: {
        position: "absolute",
        bottom: l ? `${l.bottom}px` : "100%",
        left: l ? `${l.left}px` : 0
      },
      className: n(
        "z-50",
        "w-64 max-h-60 overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      ),
      children: x ? Array.from({ length: 3 }, (e, t) => /* @__PURE__ */ m(
        "div",
        {
          className: "flex items-center gap-2 p-2",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ o(u, { className: "size-5 shrink-0 rounded-full" }),
            /* @__PURE__ */ o(
              u,
              {
                className: n("h-4 rounded", t === 1 ? "w-24" : "w-32")
              }
            )
          ]
        },
        t
      )) : a.map((e, t) => {
        const r = t === f, p = `${e.firstName} ${e.lastName}`.trim();
        return /* @__PURE__ */ m(
          "div",
          {
            ref: r ? i : void 0,
            role: "option",
            "aria-selected": r,
            className: n(
              "flex cursor-pointer items-center gap-2 p-2 rounded",
              "transition-colors",
              r ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"
            ),
            onMouseDown: (v) => {
              v.preventDefault(), b(e);
            },
            onMouseEnter: () => {
            },
            children: [
              /* @__PURE__ */ o(
                y,
                {
                  firstName: e.firstName,
                  lastName: e.lastName,
                  src: e.avatarUrl,
                  size: "xsmall"
                }
              ),
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o(k, { className: "text-base font-medium text-f1-foreground", children: p }) })
            ]
          },
          String(e.id)
        );
      })
    }
  );
}
export {
  R as MentionPopover
};
