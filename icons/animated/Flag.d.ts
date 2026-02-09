import * as React from "react";
interface FlagProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const FlagAnimated: React.ForwardRefExoticComponent<Omit<FlagProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default FlagAnimated;
//# sourceMappingURL=Flag.d.ts.map