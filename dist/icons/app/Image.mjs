import Svg, { Path, Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Image.tsx
var SvgImage = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M4 15V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "m20 15-1.879-1.879a3 3 0 0 0-4.242 0L9 18" }),
      /* @__PURE__ */ jsx(Circle, { cx: 9, cy: 11, r: 2.35, stroke: "currentColor" })
    ]
  }
);
var ForwardRef = forwardRef(SvgImage);
var Image_default = ForwardRef;

export { Image_default as default };
//# sourceMappingURL=Image.mjs.map
//# sourceMappingURL=Image.mjs.map