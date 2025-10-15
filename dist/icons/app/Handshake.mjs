import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Handshake.tsx
var SvgHandshake = (props, ref) => /* @__PURE__ */ jsxs(
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
          strokeLinejoin: "round",
          d: "m5.328 14.328.172.172 5-5 1.75 1.75a1.768 1.768 0 1 0 2.5-2.5l-2.629-2.629a3 3 0 0 0-4.242 0l-2.55 2.55a4 4 0 0 0 0 5.657Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M13 7a2.83 2.83 0 0 1 4 0l1.672 1.672a4 4 0 0 1 0 5.656l-4.258 4.258a2 2 0 0 1-2.828 0L11 18l-.086.086a2 2 0 0 1-2.828 0L7.5 17.5a1.414 1.414 0 0 1-2 0l-.25-.25c-.69-.69-.69-1.81 0-2.5L6 14"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M10.46 15.46a.65.65 0 1 0-.92-.92zm-2.5 2.5 2.5-2.5-.92-.92-2.5 2.5zM13.46 16.46a.65.65 0 1 0-.92-.92zm-2.5 2.5 2.5-2.5-.92-.92-2.5 2.5z"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgHandshake);
var Handshake_default = ForwardRef;

export { Handshake_default as default };
//# sourceMappingURL=Handshake.mjs.map
//# sourceMappingURL=Handshake.mjs.map