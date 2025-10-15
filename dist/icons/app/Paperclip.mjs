import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Paperclip.tsx
var SvgPaperclip = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m15 11-5 5a1.414 1.414 0 0 1-2 0v0a1.414 1.414 0 0 1 0-2l7-7a2.83 2.83 0 0 1 4 0v0a2.83 2.83 0 0 1 0 4l-7 7a4.243 4.243 0 0 1-6 0v0a4.243 4.243 0 0 1 0-6l5-5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgPaperclip);
var Paperclip_default = ForwardRef;

export { Paperclip_default as default };
//# sourceMappingURL=Paperclip.mjs.map
//# sourceMappingURL=Paperclip.mjs.map