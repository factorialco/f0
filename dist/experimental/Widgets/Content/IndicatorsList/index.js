import { jsx as i } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { Indicator as c } from "../../../../ui/indicator.js";
const g = a(
  function({ items: t }, s) {
    return /* @__PURE__ */ i(
      "div",
      {
        ref: s,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: t.map(({ label: r, content: o, color: d, ...m }) => /* @__PURE__ */ i(
          c,
          {
            label: r,
            content: o,
            color: d,
            ...m
          },
          `${r}-${o}`
        ))
      }
    );
  }
);
export {
  g as IndicatorsList
};
