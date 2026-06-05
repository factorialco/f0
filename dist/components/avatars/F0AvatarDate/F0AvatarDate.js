import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { getDayOfMonth as n, getAbbreviateMonth as l } from "../../../lib/date.js";
const f = ({
  date: e,
  "aria-label": t,
  "aria-labelledby": a
}) => {
  const o = n(e), i = l(e);
  return /* @__PURE__ */ d(
    "div",
    {
      className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
      "aria-label": t,
      "aria-labelledby": a,
      children: [
        /* @__PURE__ */ r("div", { className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary", children: i }),
        /* @__PURE__ */ r("div", { className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground", children: o })
      ]
    }
  );
};
export {
  f as F0AvatarDate
};
