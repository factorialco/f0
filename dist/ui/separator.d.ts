import { default as React } from 'react';
type SeparatorProps = {
    bare?: boolean;
} & React.HTMLProps<HTMLDivElement>;
export declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
