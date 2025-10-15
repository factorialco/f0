import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/modules/Documents.tsx
var SvgDocuments = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M5.7 3.85A2.7 2.7 0 0 0 3 6.55v9a3.6 3.6 0 0 0 3.6 3.6h10.8a3.6 3.6 0 0 0 3.6-3.6v-5.4a3.6 3.6 0 0 0-3.6-3.6h-4.243a.257.257 0 0 1-.257-.257 2.443 2.443 0 0 0-2.443-2.443z"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgDocuments);
var Documents_default = ForwardRef;

export { Documents_default as default };
//# sourceMappingURL=Documents.mjs.map
//# sourceMappingURL=Documents.mjs.map