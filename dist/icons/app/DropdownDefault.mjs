import Svg, { Rect, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/DropdownDefault.tsx
var SvgDropdownDefault = (props, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "m8.5 10.25 3.5 3.5 3.5-3.5" })
    ]
  }
);
var ForwardRef = forwardRef(SvgDropdownDefault);
var DropdownDefault_default = ForwardRef;

export { DropdownDefault_default as default };
//# sourceMappingURL=DropdownDefault.mjs.map
//# sourceMappingURL=DropdownDefault.mjs.map