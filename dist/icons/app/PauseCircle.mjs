import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/PauseCircle.tsx
var SvgPauseCircle = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16M10 8.35a.65.65 0 0 1 .65.65v6a.65.65 0 1 1-1.3 0V9a.65.65 0 0 1 .65-.65m4.65.65a.65.65 0 1 0-1.3 0v6a.65.65 0 1 0 1.3 0z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgPauseCircle);
var PauseCircle_default = ForwardRef;

export { PauseCircle_default as default };
//# sourceMappingURL=PauseCircle.mjs.map
//# sourceMappingURL=PauseCircle.mjs.map