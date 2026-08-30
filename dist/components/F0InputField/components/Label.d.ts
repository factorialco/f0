import { IconType } from '../../F0Icon';
type LabelProps = {
    label: string;
    required?: boolean;
    htmlFor: string;
    id?: string;
    className?: string;
    icon?: IconType;
    disabled?: boolean;
};
declare const Label: ({ label, required, htmlFor, id, className, icon, disabled, }: LabelProps) => import("react").JSX.Element;
export { Label };
