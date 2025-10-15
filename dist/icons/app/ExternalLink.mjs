import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/ExternalLink.tsx
var SvgExternalLink = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M10 5H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5M12.5 11.5 20 4m0 0h-4.5M20 4v4.5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgExternalLink);
var ExternalLink_default = ForwardRef;

export { ExternalLink_default as default };
//# sourceMappingURL=ExternalLink.mjs.map
//# sourceMappingURL=ExternalLink.mjs.map