import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/EnvelopeOpen.tsx
var SvgEnvelopeOpen = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M20 15V8.618a1 1 0 0 0-.553-.894L13.342 4.67a3 3 0 0 0-2.684 0L4.553 7.724A1 1 0 0 0 4 8.618V15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "m4 9 7.497 3.748c.317.159.69.159 1.006 0L20 9"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgEnvelopeOpen);
var EnvelopeOpen_default = ForwardRef;

export { EnvelopeOpen_default as default };
//# sourceMappingURL=EnvelopeOpen.mjs.map
//# sourceMappingURL=EnvelopeOpen.mjs.map