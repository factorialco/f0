import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const messageTransition = {
    duration: 0.5,
    ease: [0.175, 0.885, 0.32, 1.275],
};
const messageVariants = {
    normal: {
        scale: 1,
    },
    animate: {
        scale: [1, 0.9, 1],
    },
};
const heartTransition = {
    duration: 0.5,
    ease: [0, 0, 0.2, 1],
    delay: 0.2,
};
const heartVariants = {
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
const MessageHeartAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [_jsx(motion.path, { d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z", variants: messageVariants, transition: messageTransition, animate: animate, vectorEffect: "non-scaling-stroke" }), _jsx(motion.path, { d: "M13.4389 9C14.6716 9 15.5 10.1175 15.5 11.16C15.5 13.2713 12.0622 15 12 15C11.9378 15 8.5 13.2713 8.5 11.16C8.5 10.1175 9.32833 9 10.5611 9C11.2689 9 11.7317 9.34125 12 9.64125C12.2683 9.34125 12.7311 9 13.4389 9Z", variants: heartVariants, transition: heartTransition, animate: animate, vectorEffect: "non-scaling-stroke" })] }));
});
MessageHeartAnimated.displayName = "MessageHeartAnimated";
export default MessageHeartAnimated;
