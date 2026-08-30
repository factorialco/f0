import { ReactNode } from 'react';
import { ComponentMetadata, ComponentTypes } from './component/types';
import * as React from "react";
declare global {
    interface Window {
        XRay: {
            enable: (filter?: ComponentTypes[]) => void;
            disable: () => void;
        };
    }
}
export declare const XRayContext: React.Context<{
    enabled: boolean;
    filter: ComponentTypes[];
    enable: (filter?: ComponentTypes[]) => void;
    disable: () => void;
}>;
export declare const XRayProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useComponentXRay: <R extends HTMLElement | SVGElement>(meta: ComponentMetadata, forwardedRef: React.ForwardedRef<R>) => {
    ref: React.MutableRefObject<R | null>;
    enabled: boolean;
};
export declare const useXRay: () => {
    enabled: boolean;
    filter: ComponentTypes[];
    enable: (filter?: ComponentTypes[]) => void;
    disable: () => void;
};
