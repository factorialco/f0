import { FlatQuestion } from '../types';
export declare function useStepper(questions: FlatQuestion[]): {
    currentStep: number;
    totalSteps: number;
    progress: number;
    currentQuestion: FlatQuestion | undefined;
    isFirstStep: boolean;
    isLastStep: boolean;
    goToNext: () => void;
    goToPrevious: () => void;
    reset: () => void;
    setProgress: (value: number | null) => void;
};
