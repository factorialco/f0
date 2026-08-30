import { F0WizardStep } from '../types';
interface UseWizardNavigationOptions {
    steps: F0WizardStep[];
    defaultStepIndex?: number;
    onSubmit?: () => void | Promise<unknown>;
    onStepChanged?: (stepIndex: number) => void;
    allowStepSkipping?: boolean;
    autoCloseOnLastStepSubmit?: boolean;
    onClose?: () => void;
}
interface UseWizardNavigationReturn {
    currentStep: number;
    loading: boolean;
    goToStep: (index: number) => Promise<void>;
    goNext: () => Promise<void>;
    goPrevious: () => void;
}
export declare function useWizardNavigation({ steps, defaultStepIndex, onSubmit, onStepChanged, allowStepSkipping, autoCloseOnLastStepSubmit, onClose, }: UseWizardNavigationOptions): UseWizardNavigationReturn;
export {};
