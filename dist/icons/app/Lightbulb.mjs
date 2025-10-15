import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Lightbulb.tsx
var SvgLightbulb = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "M8 16h8v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16v-4.5m0 0-1.5-1m1.5 1 1.5-1"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M8 16v-2.08a1.1 1.1 0 0 0-.322-.758 6 6 0 1 1 8.644 0 1.1 1.1 0 0 0-.322.757V16"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgLightbulb);
var Lightbulb_default = ForwardRef;

export { Lightbulb_default as default };
//# sourceMappingURL=Lightbulb.mjs.map
//# sourceMappingURL=Lightbulb.mjs.map