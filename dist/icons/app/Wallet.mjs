import Svg, { Path, Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Wallet.tsx
var SvgWallet = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M4 7v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 5h9a2 2 0 0 1 2 2v2H6a2 2 0 1 1 0-4Z"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 16.25, cy: 13.75, r: 1.25, fill: "currentColor" })
    ]
  }
);
var ForwardRef = forwardRef(SvgWallet);
var Wallet_default = ForwardRef;

export { Wallet_default as default };
//# sourceMappingURL=Wallet.mjs.map
//# sourceMappingURL=Wallet.mjs.map