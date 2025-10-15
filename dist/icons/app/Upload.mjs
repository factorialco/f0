import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Upload.tsx
var SvgUpload = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M12 14V5m0 0L9 8m3-3 3 3M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgUpload);
var Upload_default = ForwardRef;

export { Upload_default as default };
//# sourceMappingURL=Upload.mjs.map
//# sourceMappingURL=Upload.mjs.map