import { InputFieldProps } from '../../../components/F0InputField';
import { EntitySelectEntity } from '../types';
export declare const Trigger: ({ placeholder, selected, selectedEntities, disabled, hiddenAvatar, label, labelIcon, icon, error, status, hint, onClickContent, hideLabel, maxLength, loading, required, readonly, append, size, open, }: {
    selected: string;
    selectedEntities: EntitySelectEntity[];
    hiddenAvatar?: boolean;
    open?: boolean;
} & Pick<InputFieldProps<string>, "onClickContent" | "label" | "labelIcon" | "icon" | "error" | "status" | "hint" | "hideLabel" | "maxLength" | "value" | "disabled" | "placeholder" | "loading" | "required" | "readonly" | "append" | "size">) => import("react").JSX.Element;
