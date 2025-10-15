import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/EyeInvisible.tsx
var SvgEyeInvisible = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M19.592 7.665c-1.274 2.632-4.038 5-7.592 5s-6.318-2.368-7.592-5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "m10.008 13.016-1.11 3.32M14.058 13.016l1.11 3.32M17.523 10.543 20 13.016M6.477 10.543 4 13.016"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgEyeInvisible);
var EyeInvisible_default = ForwardRef;

export { EyeInvisible_default as default };
//# sourceMappingURL=EyeInvisible.mjs.map
//# sourceMappingURL=EyeInvisible.mjs.map