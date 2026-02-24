import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const SvgDottedCircle = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props, children: _jsx("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2", vectorEffect: "non-scaling-stroke" }) }));
const ForwardRef = forwardRef(SvgDottedCircle);
export default ForwardRef;
