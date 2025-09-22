import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const pageTransition = {
    duration: 0.7,
    ease: [0.175, 0.885, 0.32, 1.275],
};
const pageVariants = {
    normal: {
        originX: "50%",
        originY: "80%",
        rotate: 0,
    },
    animate: {
        originX: ["50%", "80%", "50%", "20%", "50%"],
        rotate: [0, 15, 0, -15, 0],
    },
};
const CalendarAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsx("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: _jsxs(motion.g, { variants: pageVariants, animate: animate, initial: "normal", transition: pageTransition, children: [_jsxs("g", { children: [_jsx("path", { d: "M5 10H19", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M5 8C5 6.34315 6.34315 5 8 5H16C17.6569 5 19 6.34315 19 8V10H5V8Z", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M9 3V7", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M15 3V7", vectorEffect: "non-scaling-stroke" })] }), _jsx("path", { d: "M5 10H19V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10Z", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M5 10H19V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10Z", vectorEffect: "non-scaling-stroke" })] }) }));
});
CalendarAnimated.displayName = "CalendarAnimated";
export default CalendarAnimated;
