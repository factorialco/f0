import { Ref } from 'react';
import { ClarifyingSelectionMode } from '../types';
interface CustomAnswerRowProps {
    mode: ClarifyingSelectionMode;
    hasSelection: boolean;
    hasCustomText: boolean;
    customAnswerText: string | undefined;
    isCustomAnswerActive: boolean;
    canProceed: boolean;
    inputRef: Ref<HTMLTextAreaElement>;
    onActivate: () => void;
    onChangeText: (text: string) => void;
    onToggleActive: (active: boolean) => void;
    onConfirm: () => void;
}
export declare const CustomAnswerRow: ({ mode, hasSelection, hasCustomText, customAnswerText, isCustomAnswerActive, canProceed, inputRef, onActivate, onChangeText, onToggleActive, onConfirm, }: CustomAnswerRowProps) => import("react").JSX.Element;
export {};
