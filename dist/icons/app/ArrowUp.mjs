import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/ArrowUp.tsx
var SvgArrowUp = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m6 11 6-6 6 6M12 19V5.5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgArrowUp);
var ArrowUp_default = ForwardRef;

export { ArrowUp_default as default };
//# sourceMappingURL=ArrowUp.mjs.map
//# sourceMappingURL=ArrowUp.mjs.map