import { ReactNode } from 'react';
import * as React from "react";
export declare const PrivacyModeContext: React.Context<{
    enabled: boolean;
    enable: () => void;
    disable: () => void;
    toggle: () => void;
}>;
export declare const PrivacyModeProvider: React.FC<{
    initiallyEnabled?: boolean;
    children: ReactNode;
}>;
export declare const usePrivacyMode: () => {
    enabled: boolean;
    enable: () => void;
    disable: () => void;
    toggle: () => void;
};
