import * as React from "react";
interface SplitProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const SplitAnimated: React.ForwardRefExoticComponent<Omit<SplitProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default SplitAnimated;
