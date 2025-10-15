import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/SolidPlay.tsx
var SvgSolidPlay = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M6 16.554V7.446C6 5.911 7.659 4.948 8.992 5.71l7.969 4.554c1.344.767 1.344 2.705 0 3.473L8.992 18.29C7.66 19.052 6 18.09 6 16.554"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgSolidPlay);
var SolidPlay_default = ForwardRef;

export { SolidPlay_default as default };
//# sourceMappingURL=SolidPlay.mjs.map
//# sourceMappingURL=SolidPlay.mjs.map