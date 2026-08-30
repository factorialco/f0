import { ReactNode } from 'react';
import { F0DialogContextType } from '../../../patterns/F0Dialog/internal-types';
import { DialogAlikePosition as Position } from './types';
export type DialogWrapperContextType = F0DialogContextType;
/**
 * The props for the F0DialogProvider component.
 */
export type DialogWrapperProviderProps = {
    isOpen: boolean;
    onClose: () => void;
    shownBottomSheet?: boolean;
    position: Position;
    children: ReactNode;
    portalContainer: HTMLDivElement | null;
};
export declare const DialogWrapperContext: import('react').Context<F0DialogContextType>;
export declare const DialogWrapperProvider: ({ isOpen, onClose, shownBottomSheet, position, children, portalContainer, }: DialogWrapperProviderProps) => import("react").JSX.Element;
export declare const useDialogWrapperContext: () => F0DialogContextType;
