import Svg, { Rect, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Briefcase.tsx
var SvgBriefcase = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 12, x: 4, y: 7, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinejoin: "round", d: "M8 7v12M16 7v12" })
    ]
  }
);
var ForwardRef = forwardRef(SvgBriefcase);
var Briefcase_default = ForwardRef;

export { Briefcase_default as default };
//# sourceMappingURL=Briefcase.mjs.map
//# sourceMappingURL=Briefcase.mjs.map