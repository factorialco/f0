import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/ArchiveOpen.tsx
var SvgArchiveOpen = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m3.876 10.008-.252-2.016a1 1 0 0 1 .868-1.116l14.016-1.752a1 1 0 0 1 1.116.868l.252 2.016a1 1 0 0 1-.868 1.116L4.992 10.876a1 1 0 0 1-1.116-.868M19 12v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-4M14 14h-4"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgArchiveOpen);
var ArchiveOpen_default = ForwardRef;

export { ArchiveOpen_default as default };
//# sourceMappingURL=ArchiveOpen.mjs.map
//# sourceMappingURL=ArchiveOpen.mjs.map