import { ModuleId } from '../../../../../components/avatars/F0AvatarModule';
type Props<Id extends string | number = string | number> = {
    id: Id;
    module?: ModuleId;
    title: string;
    subtitle: string;
    onClick?: (id: Id) => void;
};
export type WidgetInboxListItemProps<Id extends string | number = string | number> = Props<Id>;
export declare function WidgetInboxListItem({ id, title, subtitle, onClick, module, }: Props): import("react").JSX.Element;
export {};
