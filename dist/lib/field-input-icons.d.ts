import { IconType } from '../components/F0Icon';
/**
 * Single source of truth for the leading icon of a field input type, shared by
 * F0Form's field renderers, the `F0DatePicker`, and the editable-table cell
 * inputs — so a url, email, date or time reads the same whether it's a
 * standalone form field or a table cell. `datetime` reuses the `date` icon.
 */
export declare const FIELD_INPUT_ICONS: {
    url: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
    email: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
    time: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
    date: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
    datetime: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
};
/** Returns the leading icon for a field input type, if one is defined. */
export declare function getFieldInputIcon(inputType: string | undefined): IconType | undefined;
