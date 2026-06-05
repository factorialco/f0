import { jsxs as l, jsx as o } from "react/jsx-runtime";
import f from "../../../../icons/app/CrossedCircle.js";
import "../../../../icons/app/Menu.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import { focusNextFocusable as c, focusPreviousFocusable as d } from "../../ListItem/index.js";
import u from "../../../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/search.js";
const D = ({
  search: e,
  onSearch: t,
  searchPlaceholder: a,
  disabled: s = !1,
  goToFirst: i,
  goToLast: p
}) => /* @__PURE__ */ l("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ o(n, { icon: u, size: "md" }),
  /* @__PURE__ */ o(
    "input",
    {
      disabled: s,
      onKeyDown: (r) => {
        r.key === "ArrowDown" ? (r.preventDefault(), r.stopPropagation(), c(r.currentTarget, i)) : r.key === "ArrowUp" ? (r.preventDefault(), r.stopPropagation(), d(r.currentTarget, p)) : r.key === "Enter" && (r.preventDefault(), r.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: a,
      value: e,
      onChange: (r) => t(r.target.value)
    }
  ),
  e && /* @__PURE__ */ o(
    n,
    {
      icon: f,
      size: "md",
      onClick: () => t(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] });
export {
  D as Searcher
};
