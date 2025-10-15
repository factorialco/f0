import Svg, { Circle, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/People.tsx
var SvgPeople = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 9, cy: 9, r: 4, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 13a3 3 0 1 0 0-6"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 18s1.5-2 5-2 5 2 5 2M17 16c2 0 2.75 1 2.75 1"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgPeople);
var People_default = ForwardRef;

export { People_default as default };
//# sourceMappingURL=People.mjs.map
//# sourceMappingURL=People.mjs.map