import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Inbox.tsx
var SvgInbox = (props, ref) => /* @__PURE__ */ jsxs(
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
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 15v-4.285a2 2 0 0 0-.453-1.268L17.624 7.1A3 3 0 0 0 15.303 6H8.31a3 3 0 0 0-2.48 1.312L4.347 9.49A2 2 0 0 0 4 10.616V15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.5 10h3.153a1 1 0 0 1 .986.836l.222 1.328a1 1 0 0 0 .986.836h4.306a1 1 0 0 0 .986-.836l.222-1.328a1 1 0 0 1 .986-.836H19.5"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgInbox);
var Inbox_default = ForwardRef;

export { Inbox_default as default };
//# sourceMappingURL=Inbox.mjs.map
//# sourceMappingURL=Inbox.mjs.map