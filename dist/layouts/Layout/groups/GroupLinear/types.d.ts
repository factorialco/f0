import { ReactElement } from 'react';
export interface GroupLinearProps {
    children: React.ReactNode;
    sortable?: boolean;
    onSort?: (items: React.ReactNode[]) => void;
    /**
     * If the group is the main content of the page, it will try to take the full height of the page
     */
    main?: boolean;
}
export type GroupLinearElement = ReactElement<GroupLinearProps>;
