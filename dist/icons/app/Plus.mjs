import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Plus.tsx
var SvgPlus = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M12.65 5a.65.65 0 1 0-1.3 0v6.35H5a.65.65 0 1 0 0 1.3h6.35V19a.65.65 0 1 0 1.3 0v-6.35H19a.65.65 0 1 0 0-1.3h-6.35z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgPlus);
var Plus_default = ForwardRef;

export { Plus_default as default };
//# sourceMappingURL=Plus.mjs.map
//# sourceMappingURL=Plus.mjs.map