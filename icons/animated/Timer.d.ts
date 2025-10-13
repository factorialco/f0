import * as React from "react";
interface TimerProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const TimerAnimated: React.ForwardRefExoticComponent<Omit<TimerProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default TimerAnimated;
//# sourceMappingURL=Timer.d.ts.map