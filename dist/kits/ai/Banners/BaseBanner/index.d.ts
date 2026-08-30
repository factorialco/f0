import { IconType } from '../../../../components/F0Icon';
export type BannerAction = {
    label: string;
    onClick: () => void;
    variant?: "default" | "outline" | "ghost";
    icon?: IconType;
};
export type BaseBannerProps = {
    title: string;
    subtitle?: string;
    mediaUrl: string;
    primaryAction?: BannerAction;
    secondaryAction?: BannerAction;
    onClose?: () => void;
    isLoading?: boolean;
    children?: React.ReactNode;
    variant?: "default" | "full-width";
};
export declare const BaseBanner: import('../../../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<BaseBannerProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: import('react').ForwardRefExoticComponent<import('react').RefAttributes<HTMLDivElement>>;
}>;
