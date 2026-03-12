import * as React from "react";
interface BookProps extends React.SVGProps<SVGSVGElement> {
    animate?: "normal" | "animate";
}
declare const BookAnimated: React.ForwardRefExoticComponent<Omit<BookProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default BookAnimated;
//# sourceMappingURL=Book.d.ts.map