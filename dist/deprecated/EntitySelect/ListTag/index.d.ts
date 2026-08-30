import { EntitySelectSubEntity } from '../types';
export declare const ListTag: ({ entity, onRemove, disabled, deactivated, hiddenAvatar, }: {
    entity: EntitySelectSubEntity;
    onRemove: (entity: EntitySelectSubEntity) => void;
    disabled?: boolean;
    deactivated?: boolean;
    hiddenAvatar?: boolean;
}) => import("react").JSX.Element;
