import * as React from "react";
interface MoneyProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const MoneyAnimated: React.ForwardRefExoticComponent<Omit<MoneyProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default MoneyAnimated;
//# sourceMappingURL=Money.d.ts.map