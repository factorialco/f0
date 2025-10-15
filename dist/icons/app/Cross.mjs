import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Cross.tsx
var SvgCross = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M16.95 7.05 12 12l-4.95 4.95M12 12 7.05 7.05l9.9 9.9"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgCross);
var Cross_default = ForwardRef;

export { Cross_default as default };
//# sourceMappingURL=Cross.mjs.map
//# sourceMappingURL=Cross.mjs.map