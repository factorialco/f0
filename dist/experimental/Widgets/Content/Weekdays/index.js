import { jsx as d } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import { ToggleGroup as i, ToggleGroupItem as n } from "../../../../deprecated/ToggleGroup/ToggleGroup.js";
const b = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], p = l(
  function({ daysOfTheWeek: a = b, activatedDays: r = [] }, s) {
    const o = r.map(
      (e) => `${e}-${a[e]}`
    );
    return /* @__PURE__ */ d(
      i,
      {
        type: "multiple",
        value: o,
        disabled: !0,
        className: "flex justify-start",
        ref: s,
        children: a.map((e, t) => /* @__PURE__ */ d(
          n,
          {
            "aria-label": e,
            value: `${t}-${e}`,
            className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
            children: e[0]
          },
          t
        ))
      }
    );
  }
);
export {
  p as Weekdays
};
