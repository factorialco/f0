import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";
declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitive.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    hideLabel?: boolean;
    title?: string;
    required?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
declare const SwitchRoot: React.ForwardRefExoticComponent<SwitchPrimitive.SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch, SwitchRoot };
