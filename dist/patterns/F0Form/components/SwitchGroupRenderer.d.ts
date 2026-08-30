import { default as React } from 'react';
import { F0SwitchField } from '../fields/switch/types';
import { F0Field } from '../fields/types';
import { RowDefinition } from '../types';
interface SwitchGroupRendererProps {
    fields: F0SwitchField[];
    /** Fields that depend on a switch in this group (renders inside the card) */
    dependentFields?: Map<string, (F0Field | RowDefinition)[]>;
    /** Fields that depend on a cardSelect within this group, keyed by cardSelect ID then equalsTo value */
    cardSelectDependentFields?: Map<string, Map<string, (F0Field | RowDefinition)[]>>;
    /** Section ID when group is inside a section (for anchor links) */
    sectionId?: string;
}
/**
 * SwitchGroupRenderer renders multiple switch fields in a bordered container
 * using CardSelectableContainer with toggle indicators.
 */
export declare function SwitchGroupRenderer({ fields, dependentFields, cardSelectDependentFields, sectionId, }: SwitchGroupRendererProps): React.JSX.Element | null;
export {};
