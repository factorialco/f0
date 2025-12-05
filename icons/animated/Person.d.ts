import * as React from "react";
interface PersonProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const PersonAnimated: React.ForwardRefExoticComponent<Omit<PersonProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default PersonAnimated;
//# sourceMappingURL=Person.d.ts.map