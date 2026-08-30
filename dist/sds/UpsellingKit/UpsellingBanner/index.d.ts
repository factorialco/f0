import { IconType } from '../../../components/F0Icon';
import { BannerAction, BaseBannerProps } from '../../../kits/ai/Banners/BaseBanner';
import { UpsellingButtonProps } from '../UpsellingButton';
type DefaultAction = BannerAction;
type PromoteAction = {
    variant: "promote";
    label: string;
    onClick: () => void;
    errorMessage: UpsellingButtonProps["errorMessage"];
    successMessage: UpsellingButtonProps["successMessage"];
    loadingState: UpsellingButtonProps["loadingState"];
    nextSteps: UpsellingButtonProps["nextSteps"];
    closeLabel: UpsellingButtonProps["closeLabel"];
    showIcon?: boolean;
    showConfirmation?: boolean;
    icon?: IconType;
};
export declare const UpsellingBanner: import('../../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<BaseBannerProps, "children" | "primaryAction" | "secondaryAction"> & {
    primaryAction?: DefaultAction | PromoteAction;
    secondaryAction?: DefaultAction | PromoteAction;
} & import('react').RefAttributes<HTMLDivElement>>>;
export {};
