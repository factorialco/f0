import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Bold.tsx
var SvgBold = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M12.5 11.5a3 3 0 1 0 0-6H9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h6"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M14.833 18.5c2.025 0 3.667-1.567 3.667-3.5s-1.642-3.5-3.667-3.5H7.5"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgBold);
var Bold_default = ForwardRef;

export { Bold_default as default };
//# sourceMappingURL=Bold.mjs.map
//# sourceMappingURL=Bold.mjs.map