import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Bullet.tsx
var SvgBullet = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "M10 7c-2.25 0-3 .75-3 3s.75 3 3 3 3-.75 3-3-.75-3-3-3"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgBullet);
var Bullet_default = ForwardRef;

export { Bullet_default as default };
//# sourceMappingURL=Bullet.mjs.map
//# sourceMappingURL=Bullet.mjs.map