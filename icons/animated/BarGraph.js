import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const containerVariants = {
    normal: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};
const lineVariants = {
    normal: {
        pathLength: 1,
        opacity: 1,
    },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 0.5,
            ease: [0, 0, 0.2, 1],
        },
    },
};
const BarGraphAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [_jsx("rect", { x: "4", y: "6", width: "16", height: "12", rx: "3", vectorEffect: "non-scaling-stroke" }), _jsxs(motion.g, { variants: containerVariants, animate: animate, initial: "normal", children: [_jsx(motion.path, { d: "M8 15L8 13", vectorEffect: "non-scaling-stroke", variants: lineVariants }), _jsx(motion.path, { d: "M12 15L12 9", vectorEffect: "non-scaling-stroke", variants: lineVariants }), _jsx(motion.path, { d: "M16 15L16 11", vectorEffect: "non-scaling-stroke", variants: lineVariants })] })] }));
});
BarGraphAnimated.displayName = "BarGraphAnimated";
export default BarGraphAnimated;
