import { ReactNode } from 'react';
import { DropdownItem } from '../../experimental/Navigation/Dropdown';
import { CardPrimaryAction, CardSecondaryAction, CardSecondaryLink } from './components/CardActions';
import { CardAvatarVariant } from './components/CardAvatar';
import { CardAlertProps, CardBookmark, CardMetadata as CardMetadataType } from './types';
export declare const cardImageFits: readonly ["contain", "cover", "fit-width", "fit-height", "scale-down"];
export type CardImageFit = (typeof cardImageFits)[number];
export declare const cardImageSizes: readonly ["xs", "sm", "md", "lg", "xl"];
export type CardImageSize = (typeof cardImageSizes)[number];
export declare const cardImageAspectRatios: readonly ["default", "video"];
export type CardImageAspectRatio = (typeof cardImageAspectRatios)[number];
export interface CardInternalProps {
    /**
     * Whether the card has a compact layout
     */
    compact?: boolean;
    /**
     * The avatar to display in the card
     */
    avatar?: CardAvatarVariant;
    /**
     * Whether the card has an image
     */
    image?: string;
    /**
     * How the image should be displayed/fitted within its container
     * @default "fit-width"
     */
    imageFit?: CardImageFit;
    /**
     * Size of the image container
     * @default "sm"
     */
    imageSize?: CardImageSize;
    /**
     * Constrain the image container to a fixed aspect ratio instead of a fixed height.
     * When set, `imageSize` is ignored for height.
     * @example "video"
     */
    imageAspectRatio?: CardImageAspectRatio;
    /**
     * Whether to show a blurred background image when the image doesn't fill the container
     * @default true
     */
    blurredBackground?: boolean;
    /**
     * The title of the card
     */
    title?: string;
    /**
     * The description of the card
     */
    description?: string;
    /**
     * Metadata items to display in the card
     */
    metadata?: CardMetadataType[];
    /**
     * The children to display in the card
     */
    children?: ReactNode;
    /**
     * The link to navigate to when the card is clicked
     */
    link?: string;
    /**
     * The primary action that displays a primary button in the card footer
     */
    primaryAction?: CardPrimaryAction;
    /**
     * The secondary actions - either an array of button actions or a single link
     */
    secondaryActions?: CardSecondaryAction[] | CardSecondaryLink;
    /**
     * Actions to display in the dropdown menu inside the card content
     */
    otherActions?: DropdownItem[];
    /**
     * Bookmark (save) toggle rendered as an icon button in the card's options overlay.
     * Shows an outline bookmark when not bookmarked and a filled one when bookmarked.
     */
    bookmark?: CardBookmark;
    /**
     * Whether the card is selectable
     */
    selectable?: boolean;
    /**
     * Whether the card is selected
     */
    selected?: boolean;
    /**
     * The callback to handle the selection of the card
     */
    onSelect?: (selected: boolean) => void;
    /**
     * The callback to handle the click of the card
     */
    onClick?: () => void;
    /**
     * Force vertical metadata for compact layout
     * Private prop
     */
    forceVerticalMetadata?: boolean;
    /**
     * Whether the card should have a full height
     */
    fullHeight?: boolean;
    /**
     * Use a softer/lighter border (`border-f1-border-secondary`) instead of the default
     * `border-f1-border`. Opt-in so existing cards keep their current appearance.
     * @default false
     */
    subtleBorder?: boolean;
    /**
     * When true, disables the full-card overlay link so parent components
     * can manage drag-and-drop while still allowing click navigation via onClick
     */
    disableOverlayLink?: boolean;
    /**
     * Alert banner displayed above the card with a coloured header strip and matching border.
     * Supports info, warning, critical, and positive variants with a default icon per variant.
     * Use `visible` + `onDismiss` for controlled dismiss behaviour.
     */
    alert?: CardAlertProps;
}
export declare const CardInternal: import('react').ForwardRefExoticComponent<CardInternalProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const CardSkeleton: ({ compact }: {
    compact?: boolean;
}) => import("react").JSX.Element;
