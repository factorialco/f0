import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/TextSize.tsx
var SvgTextSize = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M4 6h5m5 0H9m0 0v12m4-6h3m3 0h-3m0 0v6"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgTextSize);
var TextSize_default = ForwardRef;

export { TextSize_default as default };
//# sourceMappingURL=TextSize.mjs.map
//# sourceMappingURL=TextSize.mjs.map