import { EntitySelectEntity, EntitySelectSubEntity } from '../../types';
export declare const SecondaryContent: ({ groupView, onSubItemRemove, onRemove, selectedEntities, selectedLabel, disabled, hiddenAvatar, }: {
    groupView: boolean;
    onRemove: (entity: EntitySelectEntity) => void;
    onSubItemRemove: (parentEntity: EntitySelectEntity, entity: EntitySelectSubEntity) => void;
    selectedEntities: EntitySelectEntity[];
    selectedLabel?: string;
    disabled?: boolean;
    hiddenAvatar?: boolean;
}) => import("react").JSX.Element;
