import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Completed.tsx
var SvgCompleted = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgCompleted);
var Completed_default = ForwardRef;

export { Completed_default as default };
//# sourceMappingURL=Completed.mjs.map
//# sourceMappingURL=Completed.mjs.map