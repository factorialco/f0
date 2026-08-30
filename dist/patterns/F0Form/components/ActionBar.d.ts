import { F0ActionBarRef, ActionBarStatus } from '../../../components/F0ActionBar';
import { IconType } from '../../../components/F0Icon';
interface FormActionBarProps {
    isActionBar: boolean;
    isDirty: boolean;
    actionBarStatus: ActionBarStatus;
    hasErrors: boolean;
    /** Whether any file field still has an upload in flight */
    hasPendingUploads: boolean;
    errorCount: number;
    resolvedActionBarLabel: string | undefined;
    submitLabel: string;
    submitIcon: IconType | undefined;
    discardableChanges: boolean | "" | undefined;
    discardLabel: string;
    discardIcon: IconType | undefined;
    issuesOneLabel: string;
    issuesOtherLabel: string;
    onSubmit: () => void;
    onDiscard: () => void;
    goToPreviousError: () => void;
    goToNextError: () => void;
}
export declare const FormActionBar: import('react').ForwardRefExoticComponent<FormActionBarProps & import('react').RefAttributes<F0ActionBarRef>>;
export {};
