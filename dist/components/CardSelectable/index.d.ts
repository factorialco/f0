import { ReactElement } from 'react';
import { WithDataTestIdProps } from '../../lib/data-testid';
import { CardSelectableContainerProps, CardSelectableValue } from './types';
type CardSelectableContainerGeneric = <T extends CardSelectableValue>(props: CardSelectableContainerProps<T> & WithDataTestIdProps) => ReactElement | null;
export declare const CardSelectableContainer: CardSelectableContainerGeneric;
export type { CardSelectableContainerProps, CardSelectableItem, CardSelectableMultipleProps, CardSelectableSingleProps, CardSelectableValue, } from './types';
