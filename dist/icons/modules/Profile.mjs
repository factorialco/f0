import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/modules/Profile.tsx
var SvgProfile = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M12 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M4.965 17.702C6.663 16.138 9.127 14.5 12 14.5s5.337 1.638 7.035 3.202c1.175 1.082.325 2.798-1.272 2.798H6.237c-1.597 0-2.447-1.716-1.272-2.798"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgProfile);
var Profile_default = ForwardRef;

export { Profile_default as default };
//# sourceMappingURL=Profile.mjs.map
//# sourceMappingURL=Profile.mjs.map