import { jsx as r, jsxs as a } from "react/jsx-runtime";
import { withDataTestId as m } from "../../lib/data-testid/index.js";
import { experimentalComponent as l } from "../../lib/experimental.js";
import { F0Icon as s } from "../../components/F0Icon/index.js";
import "../../icons/app/Menu.js";
import c from "../../icons/app/Question.js";
import { cn as f, focusRing as d } from "../../lib/utils.js";
import { Dropdown as u } from "../../experimental/Navigation/Dropdown/index.js";
function p(o) {
  return o.filter((t) => !!t.title).map(({ title: t, description: e, href: n, onClick: i, target: b }) => ({
    label: t,
    description: e,
    href: n,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function g({ label: o, options: t, hasNewUpdate: e }) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ r(u, { items: p(t), children: /* @__PURE__ */ a(
        "button",
        {
          className: f(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            d()
          ),
          "aria-label": o,
          children: [
            /* @__PURE__ */ r(s, { icon: c, size: "sm" }),
            e && /* @__PURE__ */ r("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const I = m(
  l("OmniButton", g)
);
export {
  I as OmniButton
};
