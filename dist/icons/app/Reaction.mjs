import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Reaction.tsx
var SvgReaction = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M19 12a7 7 0 1 1-7-7"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 10v1M14 10v1M9.5 14v0a4 4 0 0 0 5 0v0"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 3v3m0 3V6m0 0h-3 6"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgReaction);
var Reaction_default = ForwardRef;

export { Reaction_default as default };
//# sourceMappingURL=Reaction.mjs.map
//# sourceMappingURL=Reaction.mjs.map