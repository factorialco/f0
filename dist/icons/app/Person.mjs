import Svg, { Circle, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Person.tsx
var SvgPerson = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 9, r: 4, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 18s1.5-2 5-2 5 2 5 2"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgPerson);
var Person_default = ForwardRef;

export { Person_default as default };
//# sourceMappingURL=Person.mjs.map
//# sourceMappingURL=Person.mjs.map