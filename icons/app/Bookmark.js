import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const SvgBookmark = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", vectorEffect: "non-scaling-stroke" }) }));
const ForwardRef = forwardRef(SvgBookmark);
export default ForwardRef;
