import * as React from "react";
interface HeartProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const HeartAnimated: React.ForwardRefExoticComponent<Omit<HeartProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default HeartAnimated;
//# sourceMappingURL=Heart.d.ts.map