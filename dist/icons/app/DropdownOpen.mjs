import Svg, { Rect, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/DropdownOpen.tsx
var SvgDropdownOpen = (props, ref) => /* @__PURE__ */ jsxs(
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
          width: 16,
          height: 16,
          x: 4,
          y: 4,
          fill: "#052657",
          fillOpacity: 0.06,
          rx: 4
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "m15.5 13.75-3.5-3.5-3.5 3.5" })
    ]
  }
);
var ForwardRef = forwardRef(SvgDropdownOpen);
var DropdownOpen_default = ForwardRef;

export { DropdownOpen_default as default };
//# sourceMappingURL=DropdownOpen.mjs.map
//# sourceMappingURL=DropdownOpen.mjs.map