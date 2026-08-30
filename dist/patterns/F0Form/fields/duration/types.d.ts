import { DurationFieldConfig, DurationInputSize, DurationUnit } from '../../../../components/F0DurationInput/types';
import { CommonRenderIfCondition, F0BaseField, F0BaseFieldRenderIfFunction, NumberRenderIfCondition } from '../types';
export type DurationRenderIfCondition = NumberRenderIfCondition;
export type DurationFieldRenderIf = DurationRenderIfCondition | CommonRenderIfCondition | F0BaseFieldRenderIfFunction;
export interface F0DurationConfig {
    units?: DurationUnit[];
    fields?: Partial<Record<DurationUnit, DurationFieldConfig>>;
    allowNegative?: boolean;
    readonly?: boolean;
    size?: DurationInputSize;
}
export type F0DurationField = F0BaseField & F0DurationConfig & {
    type: "duration";
    /** Conditional rendering based on another field's value */
    renderIf?: DurationFieldRenderIf;
};
