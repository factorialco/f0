interface StepHeaderProps {
    question: string;
    stepLabel: string | undefined;
    isFirstStep: boolean;
    isFinalStep: boolean;
    canProceed: boolean;
    onBack: () => void;
    onNext: () => void;
    onCancel: () => void;
}
export declare const StepHeader: ({ question, stepLabel, isFirstStep, isFinalStep, canProceed, onBack, onNext, onCancel, }: StepHeaderProps) => import("react").JSX.Element;
export {};
