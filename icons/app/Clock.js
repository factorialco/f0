import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const SvgClock = (props, ref) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props, children: [_jsx("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }), _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9V12L15.5 14", vectorEffect: "non-scaling-stroke" })] }));
const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;
