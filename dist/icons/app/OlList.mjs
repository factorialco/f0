import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/OlList.tsx
var SvgOlList = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M7 4v6M13 7h6M13 12h6M13 17h6M5 14a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0a2 2 0 0 0-2 2v1h4M5 6c1 0 2-1 2-2"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgOlList);
var OlList_default = ForwardRef;

export { OlList_default as default };
//# sourceMappingURL=OlList.mjs.map
//# sourceMappingURL=OlList.mjs.map