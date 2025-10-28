import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const defaultTransition = {
    duration: 0.8,
    ease: [0.175, 0.885, 0.32, 1.275],
};
const moneyVariants = {
    normal: {
        x: 0,
        y: 0,
    },
    animate: {
        x: [1, 0],
        y: [2, 0],
    },
};
const foldVariants = {
    normal: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
    },
    animate: {
        x: [-1, 0],
        y: [-2, 0],
        opacity: [0, 1],
        scale: [0.6, 1],
    },
};
const dollarTransition = {
    duration: 0.4,
    ease: [0.645, 0.045, 0.355, 1],
    delay: 0.2,
};
const dollarVariants = {
    normal: {
        pathLength: 1,
        opacity: 1,
        transition: { delay: 0 },
    },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
    },
};
const dotsTransition = {
    duration: 0.4,
    ease: [0.645, 0.045, 0.355, 1],
    delay: 0.3,
};
const dotsVariants = {
    normal: {
        opacity: 1,
        transition: { delay: 0 },
    },
    animate: {
        opacity: [0, 1],
    },
};
const MoneyAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [_jsxs(motion.g, { initial: "normal", variants: moneyVariants, animate: animate, transition: defaultTransition, children: [_jsx("path", { d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z", vectorEffect: "non-scaling-stroke" }), _jsx(motion.path, { d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5", initial: "normal", variants: dollarVariants, transition: dollarTransition, animate: animate, vectorEffect: "non-scaling-stroke" }), _jsx(motion.line, { x1: "11.5", y1: "7", x2: "11.5", y2: "6", initial: "normal", variants: dotsVariants, transition: dotsTransition, animate: animate, vectorEffect: "non-scaling-stroke" }), _jsx(motion.line, { x1: "11.5", y1: "14", x2: "11.5", y2: "13", initial: "normal", variants: dotsVariants, transition: dotsTransition, animate: animate, vectorEffect: "non-scaling-stroke" })] }), _jsx(motion.path, { d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9", initial: "normal", variants: foldVariants, animate: animate, transition: defaultTransition, vectorEffect: "non-scaling-stroke" })] }));
});
MoneyAnimated.displayName = "MoneyAnimated";
export default MoneyAnimated;
