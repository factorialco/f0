import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/AcademicCap.tsx
var SvgAcademicCap = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m3.16 8.536 8.654-3.462a.5.5 0 0 1 .372 0l8.653 3.462a.5.5 0 0 1 0 .928l-8.653 3.462a.5.5 0 0 1-.372 0L3.161 9.464a.5.5 0 0 1 0-.928Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M19 10v5.67a.5.5 0 0 1-.303.46l-6.5 2.786a.5.5 0 0 1-.394 0l-6.5-2.786A.5.5 0 0 1 5 15.67V10"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m12 9 4 2v2.5"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgAcademicCap);
var AcademicCap_default = ForwardRef;

export { AcademicCap_default as default };
//# sourceMappingURL=AcademicCap.mjs.map
//# sourceMappingURL=AcademicCap.mjs.map