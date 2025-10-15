import Svg, { Circle, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Globe.tsx
var SvgGlobe = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12H5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M12 20c-1.767-1.804-3-5.275-3-8s1.233-6.196 3-8M12 20c1.767-1.804 3-5.275 3-8s-1.233-6.196-3-8"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgGlobe);
var Globe_default = ForwardRef;

export { Globe_default as default };
//# sourceMappingURL=Globe.mjs.map
//# sourceMappingURL=Globe.mjs.map