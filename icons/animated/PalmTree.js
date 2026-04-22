import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const defaultTransition = {
    duration: 0.6,
    ease: [0.42, 0, 0.58, 1],
};
const treeVariants = {
    normal: {
        skew: 0,
        originX: "50%",
        originY: "100%",
    },
    animate: {
        skew: [0, 8, -8, 0],
    },
};
const palmVariants = {
    normal: {
        rotate: 0,
        originX: "50%",
        originY: "100%",
    },
    animate: {
        rotate: [0, -10, 10, 0],
    },
};
const PalmTreeAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", ...props, children: [_jsxs(motion.g, { id: "palm", initial: "normal", variants: palmVariants, transition: defaultTransition, animate: animate, children: [_jsx("path", { d: "M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001", vectorEffect: "non-scaling-stroke" })] }), _jsx(motion.path, { d: "M8 19H16M13.5 13L14 19M10.5 13L10 19", initial: "normal", variants: treeVariants, transition: defaultTransition, animate: animate, vectorEffect: "non-scaling-stroke" })] }));
});
PalmTreeAnimated.displayName = "PalmTreeAnimated";
export default PalmTreeAnimated;
