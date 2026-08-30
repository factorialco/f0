import { ComponentProps } from 'react';
import { Pulse } from '../../../lib/mood';
import { BaseAvatar } from '../../../components/avatars/internal/BaseAvatar';
type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;
export type F0AvatarPulseProps = {
    /**
     * The first name of the person.
     */
    firstName: string;
    /**
     * The last name of the person.
     */
    lastName: string;
    /**
     * The source of the person's image.
     */
    src?: string;
    /**
     * The pulse to display on the avatar.
     */
    pulse?: Pulse;
    /**
     * The callback to be called when the pulse is clicked.
     */
    onPulseClick: () => void;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;
export declare const F0AvatarPulse: {
    ({ firstName, lastName, src, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, pulse, onPulseClick, }: F0AvatarPulseProps): import("react").JSX.Element;
    displayName: string;
};
export {};
