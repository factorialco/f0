import { jsx as r } from "react/jsx-runtime";
import { F0SegmentedControl as a } from "../../../experimental/Actions/F0SegmentedControl/index.js";
import { Dropdown as i } from "../../../experimental/Navigation/Dropdown/index.js";
import l from "../../../icons/app/EllipsisHorizontal.js";
import "../../../icons/app/Menu.js";
import { F0Button as m } from "../../F0Button/F0Button.js";
const f = ({ actions: s }) => /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: s.map((e, d) => {
  switch (e.type) {
    case "segmentedControl":
      return /* @__PURE__ */ r(
        a,
        {
          items: e.items,
          value: e.value,
          onChange: e.onChange,
          disabled: e.disabled,
          ariaLabel: e.ariaLabel
        },
        d
      );
    case "dropdown":
      return /* @__PURE__ */ r(
        i,
        {
          items: e.items,
          disabled: e.disabled,
          children: /* @__PURE__ */ r(
            m,
            {
              variant: "outline",
              size: "sm",
              icon: l,
              label: e.ariaLabel,
              hideLabel: !0,
              disabled: e.disabled
            }
          )
        },
        d
      );
  }
}) });
export {
  f as AccordionActions
};
