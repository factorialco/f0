import { DateRange } from '../../../../../components/OneCalendar';
import { NavigationFilter } from '../../types';
import { DateValue } from './types';
declare const dateNavigatorFilter: NavigationFilter<DateValue, DateValue | Date | DateRange | undefined | null>;
export default dateNavigatorFilter;
