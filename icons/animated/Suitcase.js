import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const lidTransition = {
    duration: 0.4,
    ease: [0.215, 0.61, 0.355, 1],
};
const lidVariants = {
    normal: {
        y: 0,
    },
    animate: {
        y: [0, -4, 0],
    },
};
const suitcaseTransition = {
    duration: 0.6,
    ease: [0.175, 0.885, 0.32, 1.275],
    delay: 0.3,
};
const suitcaseVariants = {
    normal: {
        originX: "50%",
        originY: "80%",
        scaleY: 1,
        scaleX: 1,
    },
    animate: {
        scaleY: [1, 0.7, 1],
        scaleX: [1, 1.2, 1],
    },
};
const SuitcaseAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsx("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: _jsxs(motion.g, { variants: suitcaseVariants, animate: animate, initial: "normal", transition: suitcaseTransition, children: [_jsxs(motion.g, { variants: lidVariants, animate: animate, initial: "normal", transition: lidTransition, children: [_jsx("path", { d: "M9 6.5V6.5C9 5.39543 9.89543 4.5 11 4.5H13C14.1046 4.5 15 5.39543 15 6.5V6.5", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M4 10C4 8.34315 5.34315 7 7 7H17C18.6569 7 20 8.34315 20 10V12H4V10Z", vectorEffect: "non-scaling-stroke" })] }), _jsxs("g", { children: [_jsx("path", { d: "M11 12V13.75C11 13.8881 11.1119 14 11.25 14H12.75C12.8881 14 13 13.8881 13 13.75V12", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M4 12H20V16C20 17.6569 18.6569 19 17 19H7C5.34315 19 4 17.6569 4 16V12Z", vectorEffect: "non-scaling-stroke" })] })] }) }));
});
SuitcaseAnimated.displayName = "SuitcaseAnimated";
export default SuitcaseAnimated;
