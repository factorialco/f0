import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const SvgBullet = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", ref: ref, ...props, children: _jsx("path", { fill: "currentColor", d: "M10 7C7.75 7 7 7.75 7 10C7 12.25 7.75 13 10 13C12.25 13 13 12.25 13 10C13 7.75 12.25 7 10 7Z", vectorEffect: "non-scaling-stroke" }) }));
const ForwardRef = forwardRef(SvgBullet);
export default ForwardRef;
