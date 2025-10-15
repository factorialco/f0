import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Info.tsx
var SvgInfo = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M10 10h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1 4M12 7v.1"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgInfo);
var Info_default = ForwardRef;

export { Info_default as default };
//# sourceMappingURL=Info.mjs.map
//# sourceMappingURL=Info.mjs.map