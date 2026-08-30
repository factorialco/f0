import { FC } from 'react';
type RestrictComponentProps = {
    identifier: string;
    allowedRoutes?: string[];
    disallowedRoutes?: string[];
    children: React.ReactNode;
};
export declare const OneRestrictComponent: FC<RestrictComponentProps>;
export {};
