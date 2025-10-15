import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/ArrowDown.tsx
var SvgArrowDown = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "m18 13-6 6-6-6"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5v13.5"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgArrowDown);
var ArrowDown_default = ForwardRef;

export { ArrowDown_default as default };
//# sourceMappingURL=ArrowDown.mjs.map
//# sourceMappingURL=ArrowDown.mjs.map