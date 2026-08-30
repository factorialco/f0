import { default as React } from 'react';
export type SidebarState = "locked" | "unlocked" | "hidden";
interface FrameContextType {
    isSmallScreen: boolean;
    isLastToggleInvokedByUser: boolean;
    sidebarState: SidebarState;
    prevSidebarState: SidebarState | null;
    toggleSidebar: (callData?: {
        isInvokedByUser: boolean;
    }) => void;
    setForceFloat: (force: boolean) => void;
}
export declare function useSidebar(): FrameContextType;
interface FrameProviderProps {
    children: React.ReactNode;
}
export declare function FrameProvider({ children }: FrameProviderProps): React.JSX.Element;
export {};
