import Svg, { Path, Rect } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Pin.tsx
var SvgPin = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M12 20c3-3.2 6-6.065 6-9.6S15.314 4 12 4s-6 2.865-6 6.4 3 6.4 6 9.6"
        }
      ),
      /* @__PURE__ */ jsx(Rect, { width: 4, height: 4, x: 10, y: 8, stroke: "currentColor", rx: 2 })
    ]
  }
);
var ForwardRef = forwardRef(SvgPin);
var Pin_default = ForwardRef;

export { Pin_default as default };
//# sourceMappingURL=Pin.mjs.map
//# sourceMappingURL=Pin.mjs.map