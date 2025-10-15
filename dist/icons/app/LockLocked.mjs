import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/LockLocked.tsx
var SvgLockLocked = (props, ref) => /* @__PURE__ */ jsx(
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
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16 10H8a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3M12 14v1M8 10V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v2"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgLockLocked);
var LockLocked_default = ForwardRef;

export { LockLocked_default as default };
//# sourceMappingURL=LockLocked.mjs.map
//# sourceMappingURL=LockLocked.mjs.map