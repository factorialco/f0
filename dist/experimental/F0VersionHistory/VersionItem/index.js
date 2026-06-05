import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { F0AvatarPerson as c } from "../../../components/avatars/F0AvatarPerson/index.js";
import { OneEllipsis as i } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { getLocale as d } from "../../../components/OneCalendar/utils.js";
import { cn as p, focusRing as x } from "../../../lib/utils.js";
import { useL10n as u } from "../../../lib/providers/l10n/l10n-provider.js";
import { formatDate as g } from "../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js";
function j({
  author: e,
  timestamp: l,
  onClick: r,
  isActive: o
}) {
  const { locale: n } = u(), f = d(n), s = g(l, "PPPp", { locale: f }), a = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ m(
    "button",
    {
      type: "button",
      className: p(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        o && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        x("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `Version ${s} by ${a}${o ? " (selected)" : ""}`,
      "aria-pressed": r ? o : void 0,
      children: [
        /* @__PURE__ */ t(i, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
        /* @__PURE__ */ m("div", { className: "flex flex-row items-center gap-[6px]", children: [
          /* @__PURE__ */ t(
            c,
            {
              firstName: e.firstName,
              lastName: e.lastName,
              src: e.src,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(
            i,
            {
              lines: 1,
              className: "font-medium text-f1-foreground-secondary",
              children: a
            }
          )
        ] })
      ]
    }
  );
}
export {
  j as VersionItem
};
