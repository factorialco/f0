import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/LogoAvatar.tsx
var SvgLogoAvatar = (props, ref) => /* @__PURE__ */ jsxs(
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
          fill: "currentColor",
          d: "M6.919 16.284a6.646 6.646 0 1 1 10.162 0q.505.315.964.689l.134.108a8 8 0 1 0-12.358 0l.134-.108q.46-.374.964-.689"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M17.037 18.215A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.037-1.785A7.97 7.97 0 0 1 12 16.431c1.91 0 3.662.668 5.037 1.784M12 14.708A2.954 2.954 0 1 0 12 8.8a2.954 2.954 0 0 0 0 5.908"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgLogoAvatar);
var LogoAvatar_default = ForwardRef;

export { LogoAvatar_default as default };
//# sourceMappingURL=LogoAvatar.mjs.map
//# sourceMappingURL=LogoAvatar.mjs.map