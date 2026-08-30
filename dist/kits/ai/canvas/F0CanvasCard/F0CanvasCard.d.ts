import { ModuleId } from '../../../../components/avatars/F0AvatarModule';
import { FileDef } from '../../../../components/avatars/F0AvatarFile/types';
import { IconType } from '../../../../components/F0Icon';
type CanvasCardAvatar = {
    type: "module";
    module: ModuleId;
} | {
    type: "file";
    file: FileDef;
} | {
    type: "icon";
    icon: IconType;
};
type CanvasCardAction = {
    type: "open";
    onOpen: () => void;
    onClose: () => void;
    /** When false, hides the Open/Close button but the card stays clickable. Default true. */
    showButton?: boolean;
} | {
    type: "custom";
    icon: IconType;
    label: string;
    onClick: () => void;
    hideLabel?: boolean;
};
/**
 * @deprecated Being replaced by `F0CardHorizontal`. See {@link F0CanvasCard}.
 * @removeIn 5.0.0
 */
export type F0CanvasCardProps = {
    /** Avatar to display: a module icon, a file-type badge, or a plain icon */
    avatar?: CanvasCardAvatar;
    /** Primary title */
    title: string;
    /** Optional secondary description line */
    description?: string;
    /** Whether this card's content is currently shown in the canvas (only meaningful for action.type === "open") */
    isActive?: boolean;
    /** Action exposed by the card: either an Open/Close toggle or a custom icon button */
    action: CanvasCardAction;
    /** Optional content rendered below the card header (e.g. a data preview) */
    children?: React.ReactNode;
};
/**
 * Shared inline card rendered in the AI chat for any canvas entity.
 * Shows an avatar, title, optional description, and a configurable action button.
 *
 * @deprecated Being replaced by `F0CardHorizontal` (`@/experimental/F0CardHorizontal`).
 * The AI Cocreation flow already renders these cards with `F0CardHorizontal` directly
 * (Open/Close → `primaryAction`; superseded → a faded `opacity-50 pointer-events-none`
 * wrapper). Don't add new usages; migrate the remaining one
 * (`F0AiMessagesContainer/FormCard`) once its inline `children` preview has an
 * `F0CardHorizontal`-friendly home.
 * @removeIn 5.0.0
 */
export declare function F0CanvasCard({ avatar, title, description, isActive, action, children, }: F0CanvasCardProps): import("react").JSX.Element;
export declare namespace F0CanvasCard {
    var displayName: string;
}
export {};
