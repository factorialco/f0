import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/FaceNegative.tsx
var SvgFaceNegative = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 9.5c-1.525 0-2.727.611-3.525 1.191-.401.292-.711.583-.923.804a6 6 0 0 0-.319.361l-.021.028-.007.01-.003.004-.002.002a1 1 0 0 0 1.6 1.2l-.001.002.003-.003q.008-.013.033-.042.05-.06.16-.177c.147-.154.369-.363.655-.571.577-.42 1.375-.809 2.35-.809s1.773.389 2.35.809a5 5 0 0 1 .815.748q.025.03.033.042l.002.002.001-.001a.999.999 0 1 0 1.599-1.2l-.002-.002-.003-.004-.007-.01-.021-.028-.07-.085a6 6 0 0 0-.249-.276 7 7 0 0 0-.923-.804c-.798-.58-2-1.191-3.525-1.191M8 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgFaceNegative);
var FaceNegative_default = ForwardRef;

export { FaceNegative_default as default };
//# sourceMappingURL=FaceNegative.mjs.map
//# sourceMappingURL=FaceNegative.mjs.map