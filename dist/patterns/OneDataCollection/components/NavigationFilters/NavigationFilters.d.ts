import { default as React } from 'react';
import { NavigationFiltersDefinition, NavigationFiltersState } from '../../navigationFilters/types';
type NavigationFiltersProps<NavigationFilters extends NavigationFiltersDefinition> = {
    navigationFilters?: NavigationFilters;
    currentNavigationFilters: NavigationFiltersState<NavigationFilters>;
    onChangeNavigationFilters: (value: NavigationFiltersState<NavigationFilters>) => void;
};
export declare const NavigationFilters: <NavigationFilters extends NavigationFiltersDefinition>({ navigationFilters, currentNavigationFilters, onChangeNavigationFilters, }: NavigationFiltersProps<NavigationFilters>) => React.JSX.Element;
export {};
