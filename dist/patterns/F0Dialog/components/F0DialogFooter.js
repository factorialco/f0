import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { F0ButtonDropdown as s } from "../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import { F0Button as d } from "../../../components/F0Button/F0Button.js";
const b = (e) => Array.isArray(e), f = (e) => Array.isArray(e), C = ({
  primaryAction: e,
  secondaryAction: n
}) => {
  const o = n, a = e;
  if (!a && !o)
    return null;
  const u = () => a ? b(e) ? /* @__PURE__ */ r(
    s,
    {
      items: e.map((l) => ({
        value: l.value,
        label: l.label,
        icon: l.icon
      })),
      onClick: (l) => {
        e.find((i) => i.value === l)?.onClick();
      },
      variant: "default"
    }
  ) : /* @__PURE__ */ r(
    d,
    {
      label: e.label,
      onClick: e.onClick,
      variant: "default",
      icon: e.icon,
      iconPosition: e.iconPosition,
      disabled: e.disabled,
      loading: e.loading
    }
  ) : null;
  return /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: [
    /* @__PURE__ */ r("div", { className: "flex-1" }),
    /* @__PURE__ */ t("div", { className: "flex flex-row items-center gap-2", children: [
      o ? f(n) ? /* @__PURE__ */ r(
        s,
        {
          items: n.map((l) => ({
            value: l.value,
            label: l.label,
            icon: l.icon
          })),
          onClick: (l) => {
            n.find((i) => i.value === l)?.onClick();
          },
          variant: "outline"
        }
      ) : /* @__PURE__ */ r(
        d,
        {
          label: n.label,
          onClick: n.onClick,
          variant: "outline",
          icon: n.icon,
          iconPosition: n.iconPosition,
          disabled: n.disabled,
          loading: n.loading
        }
      ) : null,
      u()
    ] })
  ] });
};
export {
  C as F0DialogFooter
};
