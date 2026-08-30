import { ModuleId } from '../../../components/avatars/F0AvatarModule';
import { ButtonVariant } from '../../../components/F0Button';
import { IconType } from '../../../components/F0Icon';
import { Variant } from '../../../components/tags/F0TagStatus';
type ProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    modalTitle: string;
    modalModule: ModuleId;
    title: string;
    image: string;
    benefits: string[];
    errorMessage: {
        title: string;
        description: string;
    };
    successMessage: {
        title: string;
        description: string;
        buttonLabel?: string;
        buttonOnClick?: () => void;
    };
    loadingState: {
        label: string;
    };
    closeLabel: string;
    nextSteps?: {
        title: string;
        items: {
            text: string;
            isCompleted?: boolean;
        }[];
    };
    tag?: {
        label: string;
        icon: IconType;
    };
    promoTag?: {
        label: string;
        variant?: Variant;
    };
    primaryAction?: Action;
    secondaryAction?: Action;
    portalContainer?: HTMLElement | null;
    showResponseDialog?: boolean;
};
type Action = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: ButtonVariant;
    size?: "md" | "lg";
    loading?: boolean;
};
declare function _ProductModal({ isOpen, onClose, title, image, benefits, errorMessage, successMessage, loadingState, nextSteps, closeLabel, primaryAction, modalTitle, modalModule, secondaryAction, portalContainer, tag, promoTag, showResponseDialog, }: ProductModalProps): import("react").JSX.Element;
export declare const ProductModal: import('../../../lib/data-testid').WithDataTestIdReturnType<typeof _ProductModal>;
export {};
