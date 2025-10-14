import * as React from "react";
interface BarGraphProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const BarGraphAnimated: React.ForwardRefExoticComponent<Omit<BarGraphProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default BarGraphAnimated;
//# sourceMappingURL=BarGraph.d.ts.map