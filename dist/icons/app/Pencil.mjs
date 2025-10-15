import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Pencil.tsx
var SvgPencil = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m7 13-1.5 5.5L11 17m-4-4 7.5-7.5a2.83 2.83 0 0 1 4 0v0a2.83 2.83 0 0 1 0 4L11 17m-4-4 4 4"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgPencil);
var Pencil_default = ForwardRef;

export { Pencil_default as default };
//# sourceMappingURL=Pencil.mjs.map
//# sourceMappingURL=Pencil.mjs.map