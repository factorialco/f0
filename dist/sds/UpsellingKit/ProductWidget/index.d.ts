import { ButtonVariant } from '../../../components/F0Button';
import { LoadingStateProps } from '../UpsellingButton';
import { ErrorMessageProps, NextStepsProps, SuccessMessageProps } from '../UpsellRequestResponseDialog';
type BaseAction = {
    label: string;
    onClick: () => Promise<void> | void;
};
type UpsellAction = BaseAction & {
    type: "upsell";
    variant: "promote" | "outlinePromote";
    errorMessage: ErrorMessageProps;
    successMessage: SuccessMessageProps;
    loadingState: LoadingStateProps;
    nextSteps: NextStepsProps;
    closeLabel: string;
    showConfirmation: boolean;
};
type RegularAction = BaseAction & {
    type: "regular";
    variant: ButtonVariant;
};
export type Action = UpsellAction | RegularAction;
type ProductWidgetProps = {
    mediaUrl?: string;
    title: string;
    description: string;
    onClose: () => void;
    dismissible: boolean;
    width?: string;
    trackVisibility?: (visible: boolean) => void;
    actions?: Action[];
    showConfirmation?: boolean;
};
declare function _ProductWidget({ mediaUrl, title, description, onClose, dismissible, width, trackVisibility, actions, showConfirmation, }: ProductWidgetProps): import("react").JSX.Element;
export declare const ProductWidget: import('../../../lib/data-testid').WithDataTestIdReturnType<typeof _ProductWidget>;
export {};
