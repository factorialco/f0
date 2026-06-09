import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const homeTransition = {
    duration: 0.6,
    ease: [0.77, 0, 0.175, 1],
};
const homeVariants = {
    normal: {
        scaleX: 1,
        x: 0,
        originX: "50%",
        originY: "50%",
    },
    animate: {
        scaleX: [1, 0.85, 1],
        x: [0, -2, 0],
    },
};
const pathVariants = {
    normal: {
        opacity: 0,
        x: -1,
        originX: "50%",
        originY: "50%",
    },
    animate: {
        opacity: [0, 1, 0],
        x: [1, 0.5, -1],
    },
};
const HomeAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [_jsx(motion.path, { d: "M6.25629 8.10265L10.2563 5.24551C11.2994 4.50044 12.7006 4.50044 13.7437 5.24551L17.7437 8.10265C18.5321 8.66579 19 9.575 19 10.5439V16.5C19 18.1569 17.6569 19.5 16 19.5H15C14.4477 19.5 14 19.0523 14 18.5V16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16V18.5C10 19.0523 9.55228 19.5 9 19.5H8C6.34315 19.5 5 18.1569 5 16.5V10.5439C5 9.575 5.4679 8.66579 6.25629 8.10265Z", initial: "normal", vectorEffect: "non-scaling-stroke", variants: homeVariants, transition: homeTransition, animate: animate }), _jsx(motion.path, { d: "M13.2 19.5L17 19.5C18.6569 19.5 20 18.1568 20 16.5V10.4196C20 9.52098 19.5971 8.66965 18.9022 8.09983L15.8295 5.58019C15.2931 5.14036 14.6209 4.89999 13.9273 4.89999H10", initial: "normal", vectorEffect: "non-scaling-stroke", variants: pathVariants, transition: homeTransition, animate: animate })] }));
});
HomeAnimated.displayName = "HomeAnimated";
export default HomeAnimated;
