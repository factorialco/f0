import { jsxs as i, jsx as d } from "react/jsx-runtime";
import { Dropdown as f } from "../../../experimental/Navigation/Dropdown/index.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
const u = ({
  primaryAction: l,
  secondaryActions: s,
  otherActions: a
}) => {
  const b = s && s.length > 0, o = a && a.length > 0;
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-2 xs:flex-row xs:items-center [&>*]:w-full [&>*]:xs:w-auto", children: [
    o && /* @__PURE__ */ d(f, { items: a, size: "md" }),
    s?.map((e, x) => /* @__PURE__ */ d(
      n,
      {
        label: e.label,
        icon: e.icon,
        variant: "outline",
        size: "md",
        onClick: e.onClick,
        disabled: e.disabled,
        loading: e.loading
      },
      `${e.label}-${x}`
    )),
    l && (o || b) && /* @__PURE__ */ d("div", { className: "mx-1 hidden h-4 w-px bg-f1-background-secondary-hover xs:block" }),
    l && /* @__PURE__ */ d(
      n,
      {
        label: l.label,
        icon: l.icon,
        variant: "default",
        size: "md",
        onClick: l.onClick,
        disabled: l.disabled,
        loading: l.loading
      }
    )
  ] });
};
export {
  u as Actions
};
