import { jsxs as r, jsx as l } from "react/jsx-runtime";
import { F0AvatarFlag as a } from "../../../../components/avatars/F0AvatarFlag/index.js";
import { OneEllipsis as n } from "../../../../lib/OneEllipsis/OneEllipsis.js";
const m = (e, o) => {
  const t = e.label ?? o.i18n.countries[e.code] ?? e.code;
  return /* @__PURE__ */ r("div", { "data-cell-type": "country", className: "flex items-center gap-2", children: [
    /* @__PURE__ */ l(a, { size: "sm", flag: e.code, "aria-label": t }),
    " ",
    /* @__PURE__ */ l(n, { className: "min-w-0 flex-1 text-f1-foreground", tag: "span", children: t })
  ] });
};
export {
  m as CountryCell
};
