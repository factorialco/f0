import { DayPicker } from 'react-day-picker';
import * as React from "react";
export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    compact?: boolean;
};
declare function Calendar({ className, classNames, showOutsideDays, compact, ...props }: CalendarProps): React.JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export { Calendar };
