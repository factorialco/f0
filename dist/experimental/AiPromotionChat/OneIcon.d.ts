import { SVGProps } from 'react';
interface OneIconProps extends SVGProps<SVGSVGElement> {
    spin?: boolean;
    hover?: boolean;
    background?: string;
    size?: "sm" | "md" | "lg";
}
declare const ForwardRef: import('react').ForwardRefExoticComponent<Omit<OneIconProps, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
export default ForwardRef;
