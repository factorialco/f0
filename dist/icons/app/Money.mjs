import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Money.tsx
var SvgMoney = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 3h5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20h1.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C20 15.44 20 13.76 20 10.4V9M13.5 7H11a1.5 1.5 0 0 0-1.5 1.5v0A1.5 1.5 0 0 0 11 10h1a1.5 1.5 0 0 1 1.5 1.5v0A1.5 1.5 0 0 1 12 13H9.5M11.5 7V6M11.5 14v-1"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgMoney);
var Money_default = ForwardRef;

export { Money_default as default };
//# sourceMappingURL=Money.mjs.map
//# sourceMappingURL=Money.mjs.map