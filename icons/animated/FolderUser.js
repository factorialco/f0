import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const folderTransition = {
    duration: 0.5,
    ease: [0.175, 0.885, 0.32, 1.275],
};
const folderVariants = {
    normal: {
        scale: 1,
    },
    animate: {
        scale: [1, 0.9, 1],
    },
};
const userTransition = {
    duration: 0.5,
    ease: [0, 0, 0.2, 1],
    delay: 0.2,
};
const userVariants = {
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
const FolderUserAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [_jsx(motion.path, { d: "M11.4375 5C11.09 4.38228 10.4364 4 9.72765 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V13.2C4 14.8802 4 15.7202 4.32698 16.362C4.6146 16.9265 5.07354 17.3854 5.63803 17.673C6.27976 18 7.11984 18 8.8 18H15.2C16.8802 18 17.7202 18 18.362 17.673C18.9265 17.3854 19.3854 16.9265 19.673 16.362C20 15.7202 20 14.8802 20 13.2V10.8C20 9.11984 20 8.27976 19.673 7.63803C19.3854 7.07354 18.9265 6.6146 18.362 6.32698C17.7202 6 16.8802 6 15.2 6H13.1473C12.4386 6 11.785 5.61772 11.4375 5V5Z", variants: folderVariants, transition: folderTransition, animate: animate, vectorEffect: "non-scaling-stroke" }), _jsx(motion.path, { d: "M8 17.5C8 16 9.79086 15 12 15C14.2091 15 16 16 16 17.5", initial: "normal", variants: userVariants, transition: userTransition, animate: animate, vectorEffect: "non-scaling-stroke" }), _jsx(motion.circle, { cx: "12", cy: "11.5", r: "2.5", initial: "normal", variants: userVariants, transition: userTransition, animate: animate, vectorEffect: "non-scaling-stroke" })] }));
});
FolderUserAnimated.displayName = "FolderUserAnimatedIcon";
export default FolderUserAnimated;
