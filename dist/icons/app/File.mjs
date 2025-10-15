import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/File.tsx
var SvgFile = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M14.879 4.879 17.12 7.12A3 3 0 0 1 18 9.243V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3.757a3 3 0 0 1 2.122.879"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgFile);
var File_default = ForwardRef;

export { File_default as default };
//# sourceMappingURL=File.mjs.map
//# sourceMappingURL=File.mjs.map