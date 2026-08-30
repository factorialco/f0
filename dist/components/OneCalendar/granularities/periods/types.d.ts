export type DatePeriod = {
    /** Title of the period, e.g. "January 2026" */
    label: string;
    /** Overrides the date range rendered under the label */
    description?: string;
    from: Date;
    to: Date;
};
export type DatePeriodsDefinition = {
    /** Label of the entry in the granularity selector, e.g. "Payroll" */
    label?: string;
    /** Heading rendered above the period list, e.g. the legal entity the periods belong to */
    header?: string;
    periods: DatePeriod[];
};
