import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/LinkRemove.tsx
var SvgLinkRemove = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m5 5 1 1M9 5V4M5 9H4M19 19l-1-1M15 19v1M19 15h1M12 17l-1 1a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l1-1M12 7l1-1a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-1 1"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgLinkRemove);
var LinkRemove_default = ForwardRef;

export { LinkRemove_default as default };
//# sourceMappingURL=LinkRemove.mjs.map
//# sourceMappingURL=LinkRemove.mjs.map