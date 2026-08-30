import { F0DialogContextType, F0DialogProviderProps } from '../internal-types';
export declare const F0DialogContext: import('react').Context<F0DialogContextType>;
export declare const F0DialogProvider: ({ isOpen, onClose, shownBottomSheet, position, children, portalContainer, }: F0DialogProviderProps) => import("react").JSX.Element;
export declare const useF0Dialog: () => F0DialogContextType;
