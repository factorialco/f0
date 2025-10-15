import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Add.tsx
var SvgAdd = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M12 5v14M12 12H5h14"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgAdd);
var Add_default = ForwardRef;

export { Add_default as default };
//# sourceMappingURL=Add.mjs.map
//# sourceMappingURL=Add.mjs.map