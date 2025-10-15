import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/modules/Calendar.tsx
var SvgCalendar = (props, ref) => /* @__PURE__ */ jsx(
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
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10 4a1 1 0 1 0-2 0v1h-.5A3.5 3.5 0 0 0 4 8.5v9A3.5 3.5 0 0 0 7.5 21h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 5H16V4a1 1 0 1 0-2 0v1h-4zm-2.4 6h8.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C18 10.76 18 11.04 18 11.6v4.2c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C16.48 19 15.92 19 14.8 19H9.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C6 17.48 6 16.92 6 15.8v-4.2c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C6.76 10 7.04 10 7.6 10",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgCalendar);
var Calendar_default = ForwardRef;

export { Calendar_default as default };
//# sourceMappingURL=Calendar.mjs.map
//# sourceMappingURL=Calendar.mjs.map