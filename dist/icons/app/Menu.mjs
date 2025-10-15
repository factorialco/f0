import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Menu.tsx
var SvgMenu = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M5 7h14M5 12h14M5 17h14"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgMenu);
var Menu_default = ForwardRef;

export { Menu_default as default };
//# sourceMappingURL=Menu.mjs.map
//# sourceMappingURL=Menu.mjs.map