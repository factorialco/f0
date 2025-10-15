import Svg, { Path, Rect } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Sliders.tsx
var SvgSliders = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M8 13v8M16 3v8M8 3v1M16 20v1"
        }
      ),
      /* @__PURE__ */ jsx(Rect, { width: 6, height: 3, x: 5, y: 7, stroke: "currentColor", rx: 1.5 }),
      /* @__PURE__ */ jsx(Rect, { width: 6, height: 3, x: 13, y: 14, stroke: "currentColor", rx: 1.5 })
    ]
  }
);
var ForwardRef = forwardRef(SvgSliders);
var Sliders_default = ForwardRef;

export { Sliders_default as default };
//# sourceMappingURL=Sliders.mjs.map
//# sourceMappingURL=Sliders.mjs.map