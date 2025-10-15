import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Ai.tsx
var SvgAi = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M4 13c3.314 0 6-3.134 6-7 0 3.866 2.686 7 6 7-3.314 0-6 3.134-6 7 0-3.866-2.686-7-6-7Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M17.5 3.35a.65.65 0 0 1 .65.65A1.85 1.85 0 0 0 20 5.85a.65.65 0 1 1 0 1.3A1.85 1.85 0 0 0 18.15 9a.65.65 0 1 1-1.3 0A1.85 1.85 0 0 0 15 7.15a.65.65 0 1 1 0-1.3A1.85 1.85 0 0 0 16.85 4a.65.65 0 0 1 .65-.65"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgAi);
var Ai_default = ForwardRef;

export { Ai_default as default };
//# sourceMappingURL=Ai.mjs.map
//# sourceMappingURL=Ai.mjs.map