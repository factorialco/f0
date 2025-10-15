import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/modules/Payroll.tsx
var SvgPayroll = (props, ref) => /* @__PURE__ */ jsxs(
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
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6.046 4.51A3.046 3.046 0 0 0 3 7.556v6.092a3.046 3.046 0 0 0 3.046 3.045h9.137a3.046 3.046 0 0 0 3.046-3.046V7.557a3.046 3.046 0 0 0-3.046-3.046zm4.569 2.284c.42 0 .761.341.761.762h.761a.761.761 0 0 1 0 1.523h-1.903a.38.38 0 0 0 0 .761h.761a1.904 1.904 0 0 1 .381 3.77v.038a.761.761 0 0 1-1.523 0h-.761a.761.761 0 1 1 0-1.523h1.903a.38.38 0 0 0 0-.762h-.761a1.904 1.904 0 0 1-.38-3.77v-.037c0-.42.34-.762.76-.762",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M21 9.586a.761.761 0 1 0-1.523 0v4.57a3.807 3.807 0 0 1-3.807 3.806H8.055a.761.761 0 1 0 0 1.523h7.615a5.33 5.33 0 0 0 5.33-5.33z"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgPayroll);
var Payroll_default = ForwardRef;

export { Payroll_default as default };
//# sourceMappingURL=Payroll.mjs.map
//# sourceMappingURL=Payroll.mjs.map