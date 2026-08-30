import { default as React } from 'react';
import { F0SwitchField } from './fields/switch/types';
import { F0Field } from './fields/types';
import { FieldItem, FormDefinitionItem, RowDefinition, SectionDefinition } from './types';
/**
 * Checks if a field has an object-form renderIf that targets a specific switch
 * being true.
 */
export declare function isDependentOnSwitch(field: F0Field, switchIds: Set<string>): string | null;
/**
 * Checks if a field has an object-form renderIf that targets a specific
 * cardSelect field with a string equalsTo value.
 */
export declare function isDependentOnCardSelect(field: F0Field, cardSelectIds: Set<string>): {
    fieldId: string;
    equalsTo: string;
} | null;
/**
 * Builds a Map from option value → ReactNode for CardSelectDepsContext.
 * Used for both standalone cardSelect fields and those inside switch groups.
 */
export declare function buildCardSelectContentMap(deps: Map<string, (F0Field | RowDefinition)[]>, sectionId?: string): Map<string, React.ReactNode>;
export type GroupedItem = {
    type: "field";
    item: FieldItem;
    cardSelectDependentFields?: Map<string, (F0Field | RowDefinition)[]>;
} | {
    type: "row";
    item: RowDefinition;
    index: number;
} | {
    type: "section";
    item: SectionDefinition;
} | {
    type: "switchGroup";
    fields: F0SwitchField[];
    dependentFields?: Map<string, (F0Field | RowDefinition)[]>;
    cardSelectDependentFields?: Map<string, Map<string, (F0Field | RowDefinition)[]>>;
};
/**
 * Groups contiguous switch fields together for rendering in a bordered container.
 * Absorbs subsequent dependent fields (including cardSelect chains) into the switch group.
 * Also handles standalone cardSelect fields that absorb their own dependents.
 *
 * Only declarative (object-form) renderIf conditions are detected — function-form
 * renderIf cannot be statically analysed and will render as regular fields.
 */
export declare function groupContiguousSwitches(definition: FormDefinitionItem[]): GroupedItem[];
