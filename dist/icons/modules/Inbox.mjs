import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/modules/Inbox.tsx
var SvgInbox = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M5.004 6.749A4 4 0 0 1 8.31 5h6.993a4 4 0 0 1 3.094 1.465l2.377 2.901A1 1 0 0 1 21 10v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a1 1 0 0 1 .173-.563zM8.31 7a2 2 0 0 0-1.653.874L5.891 9h1.088c1.367 0 2.533.988 2.757 2.336a.795.795 0 0 0 .784.664h2.96c.388 0 .72-.281.783-.664A2.795 2.795 0 0 1 17.02 9h.868L16.85 7.733A2 2 0 0 0 15.303 7z"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgInbox);
var Inbox_default = ForwardRef;

export { Inbox_default as default };
//# sourceMappingURL=Inbox.mjs.map
//# sourceMappingURL=Inbox.mjs.map