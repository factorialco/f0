import { jsxs as m, Fragment as s, jsx as e } from "react/jsx-runtime";
import n from "../../../../icons/app/Maximize.js";
import "../../../../icons/app/Menu.js";
import d from "../../../../icons/app/Minimize.js";
import { F0Button as f } from "../../../F0Button/F0Button.js";
const b = ({
  fullScreenMode: t,
  isFullscreen: r,
  handleToggleFullscreen: l,
  disableAllButtons: o,
  title: a
}) => /* @__PURE__ */ m(s, { children: [
  t && /* @__PURE__ */ e("div", { className: "absolute right-3 top-3 z-[1300]", children: /* @__PURE__ */ e(
    f,
    {
      onClick: (i) => {
        i?.preventDefault(), l();
      },
      label: "Fullscreen",
      "aria-label": "Toggle fullscreen mode",
      variant: "outline",
      hideLabel: !0,
      size: "sm",
      icon: r ? d : n,
      disabled: o
    }
  ) }),
  r && /* @__PURE__ */ e("div", { className: "flex w-full items-start justify-center px-10 pt-24", children: /* @__PURE__ */ e("h1", { className: "font-bold w-full max-w-[824px] text-3xl", children: a }) })
] });
export {
  b as Head
};
