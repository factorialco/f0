import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const flagTransition = {
    duration: 0.7,
    ease: [0.42, 0, 0.58, 1],
};
const flagVariants = {
    normal: {
        skewY: 0,
        x: 0,
        y: 0,
        originX: "50%",
        originY: "60%",
    },
    animate: {
        skewY: [0, -10, 10, 0],
        y: [0, -1, 1, 0],
    },
};
const FlagAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [_jsx(motion.path, { d: "M6 5.50001C9.5 4.50001 11 5.00001 12.5 6.00001C14 7 16 7.00002 18 5.50002V15C16 16.5 14 16.5 12.5 15.5C11 14.5 9.5 14 6 15", initial: "normal", variants: flagVariants, animate: animate, transition: flagTransition, vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M6 4V20", vectorEffect: "non-scaling-stroke" })] }));
});
FlagAnimated.displayName = "FlagAnimated";
export default FlagAnimated;
