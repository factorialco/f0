import * as React from "react";
interface PeopleProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const PeopleAnimated: React.ForwardRefExoticComponent<Omit<PeopleProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default PeopleAnimated;
//# sourceMappingURL=People.d.ts.map