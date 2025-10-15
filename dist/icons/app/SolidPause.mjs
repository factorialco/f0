import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/SolidPause.tsx
var SvgSolidPause = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M6 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0M14 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgSolidPause);
var SolidPause_default = ForwardRef;

export { SolidPause_default as default };
//# sourceMappingURL=SolidPause.mjs.map
//# sourceMappingURL=SolidPause.mjs.map