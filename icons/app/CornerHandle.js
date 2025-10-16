import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const SvgCornerHandle = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16 6L6 16M17 11.5L11.5 17", vectorEffect: "non-scaling-stroke" }) }));
const ForwardRef = forwardRef(SvgCornerHandle);
export default ForwardRef;
