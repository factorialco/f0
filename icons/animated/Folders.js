import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const defaultTransition = {
    duration: 0.8,
    ease: [0.175, 0.885, 0.32, 1.275],
};
const folderVariants = {
    normal: {
        x: 0,
        y: 0,
    },
    animate: {
        x: [0, 1, 0],
        y: [0, 2, 0],
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
        x: [0, -1, 0],
        y: [0, -2, 0],
        opacity: [0.6, 0, 1],
        scale: [1, 0.7, 1],
    },
};
const FoldersAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [_jsx(motion.path, { d: "M10.4375 5C10.09 4.38228 9.43639 4 8.72765 4H7.12954C6.07585 4 5.54901 4 5.14167 4.19355C4.72595 4.39108 4.39108 4.72595 4.19355 5.14167C4 5.54901 4 6.07585 4 7.12954V11.2C4 12.8802 4 13.7202 4.32698 14.362C4.6146 14.9265 5.07354 15.3854 5.63803 15.673C6.27976 16 7.11984 16 8.8 16H13.2C14.8802 16 15.7202 16 16.362 15.673C16.9265 15.3854 17.3854 14.9265 17.673 14.362C18 13.7202 18 12.8802 18 11.2V10.4168C18 9.09704 18 8.43714 17.796 7.91257C17.4911 7.12874 16.8713 6.50887 16.0874 6.20402C15.5629 6 14.903 6 13.5832 6H12.1473C11.4386 6 10.785 5.61772 10.4375 5V5Z", initial: "normal", variants: folderVariants, animate: animate, transition: defaultTransition, vectorEffect: "non-scaling-stroke" }), _jsx(motion.path, { d: "M7 19H11.4C14.7603 19 16.4405 19 17.7239 18.346C18.8529 17.7708 19.7708 16.8529 20.346 15.7239C21 14.4405 21 12.7603 21 9.4V9", initial: "normal", variants: foldVariants, animate: animate, transition: defaultTransition, vectorEffect: "non-scaling-stroke" })] }));
});
FoldersAnimated.displayName = "FoldersAnimated";
export default FoldersAnimated;
