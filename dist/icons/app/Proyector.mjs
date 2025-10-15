import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Proyector.tsx
var SvgProyector = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "M5 5h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15v5M12 15l-5 5M12 15l5 5M4 5h16M9 11.5l2-2 2 2L15.5 9M12 5V3.5"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgProyector);
var Proyector_default = ForwardRef;

export { Proyector_default as default };
//# sourceMappingURL=Proyector.mjs.map
//# sourceMappingURL=Proyector.mjs.map