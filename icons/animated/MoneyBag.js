import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const bagTransition = {
    duration: 0.6,
    ease: [0.175, 0.885, 0.32, 1.275],
};
const bagVariants = {
    normal: {
        scaleY: 1,
        scaleX: 1,
        originX: "50%",
        originY: "90%",
    },
    animate: {
        scaleY: [1, 0.8, 1],
        scaleX: [1, 1.1, 1],
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
const MoneyBagAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [_jsxs(motion.g, { id: "bag", initial: "normal", variants: bagVariants, transition: bagTransition, animate: animate, children: [_jsx("path", { d: "M5.54981 14.121L6.2641 10.121C6.68993 7.73641 8.76387 6 11.1862 6H12.8138C15.2361 6 17.3101 7.73641 17.7359 10.121L18.4502 14.121C18.9974 17.1857 16.6412 20 13.528 20H10.472C7.35882 20 5.00255 17.1857 5.54981 14.121Z", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M10.3257 2.5H13.6743C14.3386 2.5 14.8183 3.13591 14.6358 3.77472L14 6H10L9.36421 3.77472C9.18169 3.1359 9.66135 2.5 10.3257 2.5Z", vectorEffect: "non-scaling-stroke" })] }), _jsx(motion.path, { d: "M14 10H11.5C10.6716 10 10 10.6716 10 11.5V11.5C10 12.3284 10.6716 13 11.5 13H12.5C13.3284 13 14 13.6716 14 14.5V14.5C14 15.3284 13.3284 16 12.5 16H10", initial: "normal", variants: dollarVariants, transition: dollarTransition, animate: animate, vectorEffect: "non-scaling-stroke" }), _jsx(motion.line, { x1: "12", y1: "16", x2: "12", y2: "17", initial: "normal", variants: dotsVariants, transition: dotsTransition, animate: animate, vectorEffect: "non-scaling-stroke" }), _jsx(motion.line, { x1: "12", y1: "9", x2: "12", y2: "10", initial: "normal", variants: dotsVariants, transition: dotsTransition, animate: animate, vectorEffect: "non-scaling-stroke" })] }));
});
MoneyBagAnimated.displayName = "MoneyBagAnimated";
export default MoneyBagAnimated;
