import * as React from "react";
interface ClockProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const ClockAnimated: React.ForwardRefExoticComponent<Omit<ClockProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ClockAnimated;
//# sourceMappingURL=Clock.d.ts.map