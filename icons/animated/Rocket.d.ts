import * as React from "react";
interface RocketProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const RocketAnimated: React.ForwardRefExoticComponent<Omit<RocketProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default RocketAnimated;
//# sourceMappingURL=Rocket.d.ts.map