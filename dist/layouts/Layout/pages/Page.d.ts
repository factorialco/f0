import { ReactNode } from 'react';
export interface PageProps {
    children: ReactNode;
    aside?: ReactNode;
    header?: ReactNode;
    variant?: "main-aside" | "aside-main";
}
declare const Page: import('react').ForwardRefExoticComponent<PageProps & import('react').RefAttributes<HTMLDivElement>>;
export { Page };
