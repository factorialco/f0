import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Table.tsx
var SvgTable = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M4 9.5V17a2 2 0 0 0 2 2h6M4 9.5V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.5m-16 0h8m8 0V17a2 2 0 0 1-2 2h-6m8-9.5h-8M4 14h16m-8 5V9.5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgTable);
var Table_default = ForwardRef;

export { Table_default as default };
//# sourceMappingURL=Table.mjs.map
//# sourceMappingURL=Table.mjs.map