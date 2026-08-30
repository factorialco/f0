import { OneFilterPicker as OneFilterPickerComponent } from '../../patterns/OneFilterPicker';
import { ActiveFiltersChips as ActiveFiltersChipsComponent } from './components/ActiveFiltersChips';
import { F0SelectProps, F0SelectStaticProps } from './types';
export * from './types';
type F0SelectRuntimeDependencies = {
    OneFilterPickerComponent: typeof OneFilterPickerComponent;
    ActiveFiltersChipsComponent: typeof ActiveFiltersChipsComponent;
};
export declare const F0SelectInternal: <T extends string = string, R = unknown>(props: F0SelectProps<T, R> & F0SelectRuntimeDependencies & {
    ref?: React.Ref<HTMLButtonElement>;
}) => React.ReactElement;
export declare const F0SelectStatic: <T extends string = string>(props: F0SelectStaticProps<T> & {
    ref?: React.Ref<HTMLButtonElement>;
}) => React.ReactElement;
