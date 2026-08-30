import { IconType } from '../../../components/F0Icon';
import { UpsellingButtonProps } from '../UpsellingButton';
type AlertAction = {
    label: string;
    onRequest: UpsellingButtonProps["onRequest"];
    errorMessage: UpsellingButtonProps["errorMessage"];
    successMessage: UpsellingButtonProps["successMessage"];
    loadingState: UpsellingButtonProps["loadingState"];
    nextSteps: UpsellingButtonProps["nextSteps"];
    closeLabel: UpsellingButtonProps["closeLabel"];
    /**
     * Whether to show the confirmation dialog after the request resolves.
     * Defaults to `true`. Set to `false` when `onRequest` only opens a modal or
     * navigates instead of creating an upselling request, so the success dialog
     * ("request sent") is not shown for an action that sent nothing.
     */
    showConfirmation?: UpsellingButtonProps["showConfirmation"];
};
export interface UpsellingAlertProps {
    /**
     * Optional icon displayed as an avatar on the left side of the alert.
     */
    icon?: IconType;
    /**
     * The title of the alert
     */
    title: string;
    /**
     * The description of the alert
     */
    description?: string;
    /**
     * The upselling action button configuration.
     */
    action: AlertAction;
    /**
     * Called when the user dismisses the alert. When provided, a close button is
     * shown just to the right of the upselling action button.
     *
     * The consumer is responsible for deciding what happens on dismiss — for
     * example, hiding the alert for a number of days and showing it again later
     * by persisting the dismissal (e.g. in a cookie or local storage) and
     * unmounting the component while it should stay hidden.
     */
    onDismiss?: () => void;
}
declare function _UpsellingAlert({ icon, title, description, action, onDismiss, }: UpsellingAlertProps): import("react").JSX.Element;
export declare const UpsellingAlert: import('../../../lib/data-testid').WithDataTestIdReturnType<typeof _UpsellingAlert>;
export {};
