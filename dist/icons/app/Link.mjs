import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Link.tsx
var SvgLink = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M11 18v0a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a2.83 2.83 0 0 1 4 0v0"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13 6v0a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a2.83 2.83 0 0 1-4 0v0"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgLink);
var Link_default = ForwardRef;

export { Link_default as default };
//# sourceMappingURL=Link.mjs.map
//# sourceMappingURL=Link.mjs.map