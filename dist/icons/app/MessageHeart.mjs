import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/MessageHeart.tsx
var SvgMessageHeart = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M17 6H6.857A2.857 2.857 0 0 0 4 8.857v6.272A2.87 2.87 0 0 0 6.87 18a.18.18 0 0 1 .17.123l.521 1.56a1 1 0 0 0 1.549.485l2.623-1.968a1 1 0 0 1 .6-.2H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13.439 9c1.233 0 2.061 1.117 2.061 2.16 0 2.111-3.438 3.84-3.5 3.84s-3.5-1.729-3.5-3.84c0-1.043.828-2.16 2.061-2.16.708 0 1.17.341 1.439.641.268-.3.731-.641 1.439-.641"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgMessageHeart);
var MessageHeart_default = ForwardRef;

export { MessageHeart_default as default };
//# sourceMappingURL=MessageHeart.mjs.map
//# sourceMappingURL=MessageHeart.mjs.map