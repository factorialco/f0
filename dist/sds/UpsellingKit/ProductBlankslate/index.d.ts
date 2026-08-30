import { ModuleId } from '../../../components/avatars/F0AvatarModule';
import { IconType } from '../../../components/F0Icon';
import { Variant } from '../../../components/tags/F0TagStatus';
type ProductBlankslateProps = {
    title: string;
    subtitle?: string;
    image: string;
    benefits: string[];
    actions?: React.ReactNode;
    withShadow?: boolean;
    module?: ModuleId;
    moduleName?: string;
    tag?: {
        label: string;
        icon: IconType;
    };
    promoTag?: {
        label: string;
        variant?: Variant;
    };
};
export declare const ProductBlankslate: import('../../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<ProductBlankslateProps & import('react').RefAttributes<HTMLDivElement>>>;
export {};
