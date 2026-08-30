import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";
declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    indeterminate?: boolean;
    hideLabel?: boolean;
    required?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
declare const CheckboxRoot: React.ForwardRefExoticComponent<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox, CheckboxRoot };
