import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/FaceNeutral.tsx
var SvgFaceNeutral = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M8 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm2-6a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgFaceNeutral);
var FaceNeutral_default = ForwardRef;

export { FaceNeutral_default as default };
//# sourceMappingURL=FaceNeutral.mjs.map
//# sourceMappingURL=FaceNeutral.mjs.map