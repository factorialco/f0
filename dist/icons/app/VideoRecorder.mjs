import Svg, { Rect, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/VideoRecorder.tsx
var SvgVideoRecorder = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 13,
          height: 12,
          x: 4,
          y: 6,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          rx: 3
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m17 11 4-2v6l-4-2z"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgVideoRecorder);
var VideoRecorder_default = ForwardRef;

export { VideoRecorder_default as default };
//# sourceMappingURL=VideoRecorder.mjs.map
//# sourceMappingURL=VideoRecorder.mjs.map