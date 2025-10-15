import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Windows.tsx
var SvgWindows = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m20 4-8.537 1.247v6.16H20zm0 16.25v-7.524l-8.537-.016v6.19zm-9.671-7.587v6.129l-6.324-.885v-5.275zm0-7.307L4 6.24l.003 5.244h6.326z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgWindows);
var Windows_default = ForwardRef;

export { Windows_default as default };
//# sourceMappingURL=Windows.mjs.map
//# sourceMappingURL=Windows.mjs.map