import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/PartiallyCompleted.tsx
var SvgPartiallyCompleted = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M18 12a6 6 0 0 1-6 6c-4.8 0-6-4-6-6h6V6a6 6 0 0 1 6 6",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgPartiallyCompleted);
var PartiallyCompleted_default = ForwardRef;

export { PartiallyCompleted_default as default };
//# sourceMappingURL=PartiallyCompleted.mjs.map
//# sourceMappingURL=PartiallyCompleted.mjs.map