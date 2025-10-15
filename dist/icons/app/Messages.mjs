import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Messages.tsx
var SvgMessages = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M14 17v-3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.793a.5.5 0 0 0 .854.353L7 19h5a2 2 0 0 0 2-2M10 9V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5.793a.5.5 0 0 1-.854.353L17 12h-.5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgMessages);
var Messages_default = ForwardRef;

export { Messages_default as default };
//# sourceMappingURL=Messages.mjs.map
//# sourceMappingURL=Messages.mjs.map