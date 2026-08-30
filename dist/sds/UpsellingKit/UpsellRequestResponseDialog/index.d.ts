interface UpsellRequestResponseDialogProps {
    open: boolean;
    onClose?: () => void;
    success: boolean;
    errorMessage: ErrorMessageProps;
    successMessage: SuccessMessageProps;
    nextSteps?: NextStepsProps;
    closeLabel: string;
    portalContainer?: HTMLElement | null;
}
export interface ErrorMessageProps {
    title: string;
    description: string;
}
export interface SuccessMessageProps {
    title: string;
    description: string;
    buttonLabel?: string;
    buttonOnClick?: () => void;
}
export interface StepItemProps {
    text: string;
    isCompleted?: boolean;
}
export interface NextStepsProps {
    title: string;
    items: StepItemProps[];
}
export declare const UpsellRequestResponseDialog: import('../../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<UpsellRequestResponseDialogProps & import('react').RefAttributes<HTMLDivElement>>>;
export {};
