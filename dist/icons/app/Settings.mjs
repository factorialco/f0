import Svg, { Path, Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Settings.tsx
var SvgSettings = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M10.304 4.716a2 2 0 0 1 3.392 0l.74 1.185a2 2 0 0 0 1.628.94l1.396.048a2 2 0 0 1 1.696 2.938l-.656 1.234a2 2 0 0 0 0 1.878l.656 1.234a2 2 0 0 1-1.696 2.938l-1.396.048a2 2 0 0 0-1.628.94l-.74 1.185a2 2 0 0 1-3.392 0l-.74-1.185a2 2 0 0 0-1.627-.94l-1.397-.048a2 2 0 0 1-1.696-2.938l.656-1.234a2 2 0 0 0 0-1.878l-.656-1.234A2 2 0 0 1 6.54 6.89l1.397-.048a2 2 0 0 0 1.627-.94z"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 11.999, cy: 12, r: 2.5, stroke: "currentColor" })
    ]
  }
);
var ForwardRef = forwardRef(SvgSettings);
var Settings_default = ForwardRef;

export { Settings_default as default };
//# sourceMappingURL=Settings.mjs.map
//# sourceMappingURL=Settings.mjs.map