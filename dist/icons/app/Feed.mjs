import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Feed.tsx
var SvgFeed = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M4 12h3l2.5-5.5 5 11L17 12h3"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgFeed);
var Feed_default = ForwardRef;

export { Feed_default as default };
//# sourceMappingURL=Feed.mjs.map
//# sourceMappingURL=Feed.mjs.map