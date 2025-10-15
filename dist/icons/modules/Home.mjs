import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/modules/Home.tsx
var SvgHome = (props, ref) => /* @__PURE__ */ jsx(
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
        fill: "currentColor",
        d: "M9.675 3.932a4 4 0 0 1 4.65 0l4 2.857A4 4 0 0 1 20 10.044V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2.5a1 1 0 1 0-2 0V18a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4v-5.956a4 4 0 0 1 1.675-3.255z"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgHome);
var Home_default = ForwardRef;

export { Home_default as default };
//# sourceMappingURL=Home.mjs.map
//# sourceMappingURL=Home.mjs.map