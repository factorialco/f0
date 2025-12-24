import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const SvgLess = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 19L5 12L18 5", vectorEffect: "non-scaling-stroke" }) }));
const ForwardRef = forwardRef(SvgLess);
export default ForwardRef;
