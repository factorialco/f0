import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Quote.tsx
var SvgQuote = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M10 6a5 5 0 0 0-5 5v2m0 0v2.5A2.5 2.5 0 0 0 7.5 18v0a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 7.5 13zM19 6a5 5 0 0 0-5 5v2m0 0v2.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5z"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgQuote);
var Quote_default = ForwardRef;

export { Quote_default as default };
//# sourceMappingURL=Quote.mjs.map
//# sourceMappingURL=Quote.mjs.map