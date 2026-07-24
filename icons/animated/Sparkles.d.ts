import * as React from "react";
interface SparklesProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const SparklesAnimated: React.ForwardRefExoticComponent<Omit<SparklesProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default SparklesAnimated;
//# sourceMappingURL=Sparkles.d.ts.map