import { ComponentProps } from 'react';
declare const Breadcrumb: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React.ReactNode;
} & import('react').RefAttributes<HTMLElement>>;
declare const BreadcrumbList: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & import('react').RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: {
    ({ className, ...props }: ComponentProps<"li">): import("react").JSX.Element;
    displayName: string;
};
declare const BreadcrumbLink: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & import('react').RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & import('react').RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React.ComponentProps<"li">): import("react").JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): import("react").JSX.Element;
    displayName: string;
};
export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, };
