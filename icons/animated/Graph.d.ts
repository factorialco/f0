import * as React from "react";
interface GraphProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const GraphAnimated: React.ForwardRefExoticComponent<Omit<GraphProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default GraphAnimated;
//# sourceMappingURL=Graph.d.ts.map