import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/modules/Recruitment.tsx
var SvgRecruitment = (props, ref) => /* @__PURE__ */ jsx(
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
        fillRule: "evenodd",
        d: "M11.579 3.5a7.579 7.579 0 1 0 4.73 13.5l2.253 2.253a.842.842 0 0 0 1.191-1.19L17.5 15.81A7.579 7.579 0 0 0 11.578 3.5m2.32 5.65a2.15 2.15 0 1 1-4.298 0 2.15 2.15 0 0 1 4.298 0m-2.149 2.924c-1.206 0-2.27.569-3.09 1.215-.848.668-.283 1.83.798 1.83h4.584c1.081 0 1.646-1.162.797-1.83-.82-.646-1.883-1.215-3.089-1.215",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgRecruitment);
var Recruitment_default = ForwardRef;

export { Recruitment_default as default };
//# sourceMappingURL=Recruitment.mjs.map
//# sourceMappingURL=Recruitment.mjs.map