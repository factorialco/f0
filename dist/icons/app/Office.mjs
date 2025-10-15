import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Office.tsx
var SvgOffice = (props, ref) => /* @__PURE__ */ jsxs(
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
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM10 12h4M10 8h4"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M10 16.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20h-4z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 20H5"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgOffice);
var Office_default = ForwardRef;

export { Office_default as default };
//# sourceMappingURL=Office.mjs.map
//# sourceMappingURL=Office.mjs.map