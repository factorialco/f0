import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const SvgPlaceholder = (props, ref) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props, children: [_jsx("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }), _jsx("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M17.5 6.5L6.5 17.5", vectorEffect: "non-scaling-stroke" }), _jsx("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M17.5 17.5L6.5 6.5", vectorEffect: "non-scaling-stroke" })] }));
const ForwardRef = forwardRef(SvgPlaceholder);
export default ForwardRef;
