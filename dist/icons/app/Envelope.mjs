import Svg, { Rect, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Envelope.tsx
var SvgEnvelope = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "m4.5 9.5 6.654 3.105a2 2 0 0 0 1.692 0L19.5 9.5"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgEnvelope);
var Envelope_default = ForwardRef;

export { Envelope_default as default };
//# sourceMappingURL=Envelope.mjs.map
//# sourceMappingURL=Envelope.mjs.map