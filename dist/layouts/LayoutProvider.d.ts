import { ReactNode } from 'react';
export type LayoutType = "standard" | "fullscreen" | "home" | "overview" | null;
interface LayoutProviderProps {
    children: ReactNode;
    layout: LayoutType;
}
export declare function LayoutProvider({ children, layout }: LayoutProviderProps): import("react").JSX.Element;
export declare function useLayout(): LayoutType;
export {};
