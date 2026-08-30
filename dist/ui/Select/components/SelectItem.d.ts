import * as React from "react";
import * as SelectPrimitive from "./radix-ui";
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    selected?: boolean;
    multiple?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export { SelectItem };
