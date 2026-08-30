import { I18nContextType } from '../../../lib/providers/i18n';
import { FiltersDefinition, FiltersState } from '../types';
export declare const getActiveFilterKeys: <Filters extends FiltersDefinition>(filters: Filters, value: FiltersState<Filters>, i18n: I18nContextType) => Array<keyof Filters>;
