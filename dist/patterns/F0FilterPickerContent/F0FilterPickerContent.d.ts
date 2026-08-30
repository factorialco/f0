import { ReactElement } from 'react';
import { FiltersDefinition } from '../OneFilterPicker/types';
import { F0FilterPickerContentProps } from './types';
export declare const F0FilterPickerContent: <Filters extends FiltersDefinition>(props: F0FilterPickerContentProps<Filters> & {
    dataTestId?: string;
}) => ReactElement | null;
