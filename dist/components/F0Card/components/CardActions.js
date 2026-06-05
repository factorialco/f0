import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { useMediaQuery as m } from "../../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { cn as d } from "../../../lib/utils.js";
import { CardFooter as b } from "../../../ui/Card/Card.js";
import { F0Button as s } from "../../F0Button/F0Button.js";
import { F0Link as p } from "../../F0Link/F0Link.js";
function j({
  primaryAction: l,
  secondaryActions: t,
  compact: i = !1
}) {
  const f = m("(min-width: 640px)");
  if (!(l || a()))
    return null;
  return /* @__PURE__ */ n(
    b,
    {
      className: d(
        "flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]",
        "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4",
        i && "pt-3"
      ),
      children: [
        t && /* @__PURE__ */ r("div", { className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit", children: Array.isArray(t) ? t.map((e, o) => /* @__PURE__ */ r(
          s,
          {
            label: e.label,
            icon: e.icon,
            variant: "outline",
            onClick: (u) => {
              u.stopPropagation(), e.onClick();
            },
            hideLabel: f && o > 0,
            size: f ? i ? "sm" : "md" : "lg"
          },
          o
        )) : /* @__PURE__ */ r(
          p,
          {
            href: t.href,
            target: t.target,
            disabled: t.disabled,
            onClick: (e) => e.stopPropagation(),
            "data-testid": "secondary-link",
            children: t.label
          }
        ) }),
        l && /* @__PURE__ */ r("div", { className: "w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center", children: /* @__PURE__ */ r(
          s,
          {
            label: l.label,
            icon: l.icon,
            onClick: (e) => {
              e.stopPropagation(), l.onClick();
            },
            size: f ? i ? "sm" : "md" : "lg",
            "data-testid": "primary-button"
          }
        ) })
      ]
    }
  );
  function a() {
    return t ? "href" in t ? !0 : "length" in t ? t.length > 0 : !1 : !1;
  }
}
export {
  j as CardActions
};
