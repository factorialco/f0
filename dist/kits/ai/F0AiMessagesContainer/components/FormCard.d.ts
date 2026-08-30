import { ModuleId } from '../../../../components/avatars/F0AvatarModule';
import { DetailsItemContent } from '../../../../experimental/Lists/DetailsItem';
type FieldMeta = {
    label: string;
    fieldType?: string;
    customFieldName?: string;
};
export type FormCardValueFormatter = (key: string, value: unknown, meta: {
    fieldType?: string;
    customFieldName?: string;
}) => DetailsItemContent | DetailsItemContent[] | undefined;
export type FormCardProps = {
    formName: string;
    formDescription?: string;
    module?: ModuleId;
    cardTitle: string;
    cardDescription: string;
    fieldDescriptions?: Record<string, FieldMeta>;
    formValues?: Record<string, unknown>;
    valueFormatter?: FormCardValueFormatter;
};
export declare function FormCard({ formName, formDescription, module: formModule, cardTitle, cardDescription, fieldDescriptions, formValues, valueFormatter, }: FormCardProps): import("react").JSX.Element;
export declare namespace FormCard {
    var displayName: string;
}
export {};
