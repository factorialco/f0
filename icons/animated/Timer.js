import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import * as React from "react";
const timerTransition = {
    duration: 0.6,
    ease: [0.42, 0, 0.58, 1],
};
const timerVariants = {
    normal: {
        rotate: 0,
        originX: "50%",
        originY: "55%",
    },
    animate: {
        rotate: [0, -12, 12, -12, 12, 0],
    },
};
const TimerAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (_jsx("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: _jsxs(motion.g, { initial: "normal", variants: timerVariants, animate: animate, transition: timerTransition, children: [_jsx("circle", { cx: "12", cy: "13", r: "7.35", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M12 10.3301V12.9967L15 14.6634", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M12 5.5V3", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M10 3H14", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M19.0901 6L20.5043 7.41421", vectorEffect: "non-scaling-stroke" }), _jsx("path", { d: "M4.90991 6L3.4957 7.41421", vectorEffect: "non-scaling-stroke" })] }) }));
});
TimerAnimated.displayName = "TimerAnimated";
export default TimerAnimated;
