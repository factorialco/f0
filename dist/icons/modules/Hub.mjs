import Svg, { G, Path, Defs } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/modules/Hub.tsx
var SvgHub = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(G, { fill: "currentColor", filter: "url(#Hub_svg__a)", children: /* @__PURE__ */ jsx(Path, { d: "M4.5 7.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M4.5 15A1.5 1.5 0 0 1 6 13.5h3a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 9 19.5H6A1.5 1.5 0 0 1 4.5 18zM13.5 6A1.5 1.5 0 0 1 15 4.5h3A1.5 1.5 0 0 1 19.5 6v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 13.5 9zM13.5 15a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5z" }) }),
      /* @__PURE__ */ jsx(Defs, {})
    ]
  }
);
var ForwardRef = forwardRef(SvgHub);
var Hub_default = ForwardRef;

export { Hub_default as default };
//# sourceMappingURL=Hub.mjs.map
//# sourceMappingURL=Hub.mjs.map