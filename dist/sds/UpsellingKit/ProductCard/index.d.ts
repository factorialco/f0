import { ModuleId } from '../../../components/avatars/F0AvatarModule';
export type ProductCardProps = {
    title: string;
    description: string;
    onClick: () => void;
    onClose?: () => void;
    isVisible: boolean;
    dismissable?: boolean;
    trackVisibility?: (open: boolean) => void;
} & ({
    module?: never;
    type: "one-campaign";
} | {
    module: ModuleId;
    type?: never;
});
declare function _ProductCard({ title, description, onClick, onClose, isVisible, dismissable, trackVisibility, type, ...props }: ProductCardProps): false | import("react").JSX.Element;
export declare const ProductCard: import('../../../lib/data-testid').WithDataTestIdReturnType<typeof _ProductCard>;
export {};
