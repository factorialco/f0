import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Download.tsx
var SvgDownload = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1M12 5v9m0 0-3-3m3 3 3-3"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgDownload);
var Download_default = ForwardRef;

export { Download_default as default };
//# sourceMappingURL=Download.mjs.map
//# sourceMappingURL=Download.mjs.map