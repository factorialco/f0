import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/CalendarArrowDown.tsx
var SvgCalendarArrowDown = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v4M9 5V3m0 2v2m0-2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2M5 10h14M16.5 15v6m0 0L14 18.5m2.5 2.5 2.5-2.5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgCalendarArrowDown);
var CalendarArrowDown_default = ForwardRef;

export { CalendarArrowDown_default as default };
//# sourceMappingURL=CalendarArrowDown.mjs.map
//# sourceMappingURL=CalendarArrowDown.mjs.map