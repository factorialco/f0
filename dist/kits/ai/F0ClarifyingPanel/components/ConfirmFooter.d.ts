interface ConfirmFooterProps {
    canProceed: boolean;
    /** Disables both submit actions (confirm and skip), e.g. while the assistant is still responding */
    submitDisabled?: boolean;
    label: string;
    onConfirm: () => void;
    onSkip?: () => void;
    /** Whether a Skip button should be shown (step is optional + no selection) */
    showSkip?: boolean;
}
export declare const ConfirmFooter: ({ canProceed, submitDisabled, label, onConfirm, onSkip, showSkip, }: ConfirmFooterProps) => import("react").JSX.Element;
export {};
