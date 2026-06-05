import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { F0Icon as o } from "../../F0Icon/F0Icon.js";
import c from "../../../icons/app/ChevronUp.js";
import "../../../icons/app/Menu.js";
import t from "../../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js";
const d = ({ onClickArrow: e, step: i, disabled: l }) => !i || l ? null : /* @__PURE__ */ s(
  "div",
  {
    className: "-mt-1 hidden h-full flex-col group-focus-within:flex group-hover:flex",
    onClick: (n) => n.preventDefault(),
    children: [
      /* @__PURE__ */ r(
        "div",
        {
          onClick: e("increase"),
          className: "h-3 cursor-pointer",
          role: "button",
          "aria-label": "Increase",
          children: /* @__PURE__ */ r(o, { size: "sm", icon: c })
        }
      ),
      /* @__PURE__ */ r(
        "div",
        {
          onClick: e("decrease"),
          className: "h-3 cursor-pointer",
          role: "button",
          "aria-label": "Decrease",
          children: /* @__PURE__ */ r(o, { size: "sm", icon: t })
        }
      )
    ]
  }
);
export {
  d as Arrows
};
