import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const defaultTransition = {
    duration: 0.7,
    ease: [0.175, 0.885, 0.32, 1.275],
};
const frontVariants = {
    normal: {
        x: 0,
    },
    animate: {
        x: [0, 1, 0],
    },
};
const backVariants = {
    normal: {
        x: 0,
    },
    animate: {
        x: [0, -2, 0],
    },
};
const globalTransition = {
    duration: 0.8,
    ease: [0.215, 0.61, 0.355, 1],
};
const globalVariants = {
    normal: {
        rotate: 0,
        originX: "50%",
        originY: "50%",
    },
    animate: {
        rotate: [0, -10, 0],
    },
};
const WalletAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsx("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: _jsxs(motion.g, { initial: "normal", variants: globalVariants, transition: globalTransition, animate: animate, children: [_jsxs(motion.g, { initial: "normal", variants: frontVariants, transition: defaultTransition, animate: animate, children: [_jsx("circle", { cx: "16.25", cy: "13.75", r: "1.25", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M12 9H17C18.6569 9 20 10.3431 20 12V16C20 17.6569 18.6569 19 17 19H12", vectorEffect: "non-scaling-stroke" })] }), _jsx("path", { d: "M12 19H7C5.34315 19 4 17.6569 4 16V7", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M12 9H6C4.89543 9 4 8.10457 4 7V7", vectorEffect: "non-scaling-stroke" }), _jsx(motion.path, { id: "walletBack", d: "M17 9V7C17 5.89543 16.1046 5 15 5H10", initial: "normal", variants: backVariants, transition: defaultTransition, animate: animate, vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M11 5H6C4.89543 5 4 5.89543 4 7V7.5", vectorEffect: "non-scaling-stroke" })] }) }));
});
WalletAnimated.displayName = "WalletAnimated";
export default WalletAnimated;
