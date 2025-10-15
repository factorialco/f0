import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Coffee.tsx
var SvgCoffee = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M6 17V8.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 2v0a1.414 1.414 0 0 0 0 2v0M12 2v0a1.414 1.414 0 0 0 0 2v0M16 11h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H16"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgCoffee);
var Coffee_default = ForwardRef;

export { Coffee_default as default };
//# sourceMappingURL=Coffee.mjs.map
//# sourceMappingURL=Coffee.mjs.map