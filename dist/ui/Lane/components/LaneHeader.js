import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { F0TagStatus as m } from "../../../components/tags/F0TagStatus/index.js";
import { Counter as s } from "../../Counter/index.js";
import "../../../icons/app/Menu.js";
import l from "../../../icons/app/Plus.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
const v = ({
  label: t,
  variant: a,
  count: o,
  onPrimaryAction: r
}) => /* @__PURE__ */ i("div", { className: "flex items-center gap-2 px-1 pb-0.5 pt-2", children: [
  /* @__PURE__ */ e(m, { text: t, variant: a || "neutral" }),
  /* @__PURE__ */ e(s, { size: "md", type: "default", value: o }),
  !!r && /* @__PURE__ */ e("div", { className: "ml-auto flex items-center gap-1 pr-1", children: /* @__PURE__ */ e(
    n,
    {
      variant: "ghost",
      size: "sm",
      label: "Add",
      icon: l,
      hideLabel: !0,
      onClick: r
    }
  ) })
] });
export {
  v as LaneHeader
};
