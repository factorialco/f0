import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const defaultTransition = {
    duration: 0.6,
    ease: [0.175, 0.885, 0.32, 1.275],
};
const personFrontVariants = {
    normal: {
        x: 0,
        scale: 1,
        originX: "50%",
        originY: "50%",
    },
    animate: {
        x: [0, 3, 0],
        scale: [1, 1.1, 1],
    },
};
const personBackVariants = {
    normal: {
        x: 0,
        opacity: 1,
    },
    animate: {
        x: [0, -3, 0],
        opacity: [1, 0, 1],
    },
};
const PeopleAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [_jsxs(motion.g, { initial: "normal", variants: personFrontVariants, animate: animate, transition: defaultTransition, children: [_jsx("circle", { cx: "9", cy: "9", r: "4", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M4.00003 18C4.00003 18 5.50003 16 9.00003 16C12.5 16 14 18 14 18", vectorEffect: "non-scaling-stroke" })] }), _jsxs(motion.g, { initial: "normal", variants: personBackVariants, animate: animate, transition: defaultTransition, children: [_jsx("path", { d: "M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M17 16C19 16 19.75 17 19.75 17", vectorEffect: "non-scaling-stroke" })] })] }));
});
PeopleAnimated.displayName = "PeopleAnimated";
export default PeopleAnimated;
