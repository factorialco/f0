import { ComponentProps } from 'react';
import { PersonAvatarVariant } from '../../../../../components/avatars/F0Avatar';
import { F0AvatarAlert } from '../../../../../components/avatars/F0AvatarAlert';
export type WidgetAvatarsListItemProps = {
    id: string | number;
    title: string;
    subtitle: string;
    avatars: Omit<PersonAvatarVariant, "type">[] & Record<string, unknown>[];
    remainingCount?: number;
    withPointerCursor?: boolean;
    onClick?: (id: string | number) => void;
} & ({
    emoji: string;
} | {
    alert: ComponentProps<typeof F0AvatarAlert>["type"];
});
export declare function WidgetAvatarsListItem({ id, title, subtitle, avatars, remainingCount, withPointerCursor, onClick, ...props }: WidgetAvatarsListItemProps): import("react").JSX.Element;
