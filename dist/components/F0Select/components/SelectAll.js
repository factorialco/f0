import { jsxs as d, jsx as e } from "react/jsx-runtime";
import { ButtonInternal as f } from "../../F0Button/internal.js";
import { cn as h } from "../../../lib/utils.js";
import { Skeleton as x } from "../../../ui/skeleton.js";
import { useI18n as u } from "../../../lib/providers/i18n/i18n-provider.js";
import { Await as k } from "../../../lib/Await/Await.js";
import { OneEllipsis as N } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Checkbox as b } from "../../F0Checkbox/F0Checkbox.js";
const z = ({
  selectedCount: c,
  indeterminate: t,
  value: i,
  onChange: a,
  hideCheckbox: n = !1,
  items: r,
  paddingTop: m = !1
}) => {
  const s = u(), o = (l) => {
    a(t ? !1 : l);
  }, p = (l) => `${l} ${l === 1 ? s.status.selected.singular.toLowerCase() : s.status.selected.plural.toLowerCase()}`;
  return /* @__PURE__ */ d(
    "div",
    {
      className: h(
        "flex items-center gap-2 pr-2 pl-4",
        m ? "pt-3 pb-1" : "py-1"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex-1 whitespace-nowrap", children: /* @__PURE__ */ e(
          k,
          {
            resolve: c,
            fallback: /* @__PURE__ */ e(x, { className: "h-4 w-4" }),
            children: (l) => /* @__PURE__ */ e("div", { className: "flex h-[24px] items-center", children: /* @__PURE__ */ e(N, { className: "text-f1-foreground-secondary", children: p(l) }) })
          }
        ) }),
        n ? r && /* @__PURE__ */ e(
          f,
          {
            variant: "ghost",
            size: "sm",
            label: s.actions.clear,
            onClick: () => o(!1),
            className: "z-10",
            disabled: r.length === 0
          }
        ) : /* @__PURE__ */ e("div", { className: "shrink-0 pr-1", children: /* @__PURE__ */ e(
          b,
          {
            id: "select-all",
            title: s.actions.selectAll,
            checked: t || i,
            indeterminate: t,
            onCheckedChange: o,
            presentational: !0,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
};
export {
  z as SelectAll
};
