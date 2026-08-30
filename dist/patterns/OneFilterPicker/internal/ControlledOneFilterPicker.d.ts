import { ReactElement } from 'react';
import { FiltersDefinition } from '../types';
import { OneFilterPickerRootProps } from '../OneFilterPicker';
type ControlledOneFilterPickerProps<Definition extends FiltersDefinition> = OneFilterPickerRootProps<Definition> & {
    dataTestId?: string;
};
export declare function ControlledOneFilterPicker<Definition extends FiltersDefinition>(props: ControlledOneFilterPickerProps<Definition>): ReactElement | null;
export declare namespace ControlledOneFilterPicker {
    var displayName: string;
}
export {};
