import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Microphone.tsx
var SvgMicrophone = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 7a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 11v0a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v0M12 17v3m0 0h-2m2 0h2"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgMicrophone);
var Microphone_default = ForwardRef;

export { Microphone_default as default };
//# sourceMappingURL=Microphone.mjs.map
//# sourceMappingURL=Microphone.mjs.map