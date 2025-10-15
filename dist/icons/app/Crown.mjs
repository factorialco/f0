import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Crown.tsx
var SvgCrown = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m4.572 9.908 2 6.667A2 2 0 0 0 8.488 18h7.024a2 2 0 0 0 1.916-1.425l2-6.667a1 1 0 0 0-1.3-1.227l-2.73.993a1 1 0 0 1-1.265-.556l-1.21-2.903c-.342-.82-1.504-.82-1.846 0l-1.21 2.903a1 1 0 0 1-1.265.556l-2.73-.993a1 1 0 0 0-1.3 1.227"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgCrown);
var Crown_default = ForwardRef;

export { Crown_default as default };
//# sourceMappingURL=Crown.mjs.map
//# sourceMappingURL=Crown.mjs.map