import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Spinner.tsx
var SvgSpinner = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M19 12a7 7 0 1 1-7-7"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgSpinner);
var Spinner_default = ForwardRef;

export { Spinner_default as default };
//# sourceMappingURL=Spinner.mjs.map
//# sourceMappingURL=Spinner.mjs.map