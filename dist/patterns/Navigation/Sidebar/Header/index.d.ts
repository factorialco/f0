import { CompanySelectorProps } from '../CompanySelector';
import { SidebarIconProps } from '../Icon';
export type SidebarHeaderProps = CompanySelectorProps & SidebarIconProps;
export declare function SidebarHeader({ companies, selected, onChange, withNotification, additionalOptions, isLoading, }: SidebarHeaderProps): import("react").JSX.Element;
