import { Ref } from 'react';
import { ClarifyingOption, ClarifyingSelectionMode } from '../types';
interface OptionsListProps {
    mode: ClarifyingSelectionMode;
    question: string;
    options: ClarifyingOption[];
    selectedOptionIds: string[];
    allowCustomAnswer: boolean | undefined;
    hasSelection: boolean;
    hasCustomText: boolean;
    customAnswerText: string | undefined;
    isCustomAnswerActive: boolean;
    canProceed: boolean;
    customInputRef: Ref<HTMLTextAreaElement>;
    /** When true, auto-focus the first option when the list mounts */
    autoFocus?: boolean;
    onToggleOption: (optionId: string) => void;
    onActivateCustom: () => void;
    onChangeCustomText: (text: string) => void;
    onToggleCustomActive: (active: boolean) => void;
    onConfirm: () => void;
}
export declare const OptionsList: ({ mode, question, options, selectedOptionIds, allowCustomAnswer, hasSelection, hasCustomText, customAnswerText, isCustomAnswerActive, canProceed, customInputRef, autoFocus, onToggleOption, onActivateCustom, onChangeCustomText, onToggleCustomActive, onConfirm, }: OptionsListProps) => import("react").JSX.Element;
export {};
