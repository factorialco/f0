import { IconType } from '../../../../components/F0Icon';
export type CompanySelectorProps = {
    companies: Array<{
        id: string;
        name: string;
        logo?: string;
    }>;
    selected?: string;
    onChange: (value: string) => void;
    isLoading?: boolean;
    withNotification?: boolean;
    additionalOptions?: {
        label: string;
        value: string;
        icon?: IconType;
        description?: string;
        onClick?: () => void;
    }[];
};
export declare function CompanySelector({ companies, selected, onChange, isLoading, withNotification, additionalOptions, }: CompanySelectorProps): import("react").JSX.Element;
