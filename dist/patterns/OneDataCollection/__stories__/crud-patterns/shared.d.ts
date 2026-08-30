import { MutableRefObject, ReactNode } from 'react';
import { F0FormRef } from '../../../F0Form';
import { FiltersDefinition } from '../../../OneFilterPicker';
import { GroupingDefinition, SortingsDefinition } from '../../../../hooks/datasource';
import { ItemActionsDefinition } from '../../item-actions';
import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { SummariesDefinition } from '../../summary';
import { Visualization } from '../../visualizations/collection/types';
export type ResourceStatus = "Draft" | "Complete" | "Needs details";
export type Resource = {
    id: string;
    name: string;
    owner: string;
    status: ResourceStatus;
    summary: string;
};
export declare const resourceFilters: {
    status: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: string;
            }[];
        };
    };
    owner: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: string;
            }[];
        };
    };
};
export declare const initialResources: Resource[];
export declare const CRUD_MODULE: {
    id: "ats";
    name: string;
    href: string;
};
export type CrudVisualization = Visualization<Resource, FiltersDefinition, SortingsDefinition, SummariesDefinition, ItemActionsDefinition<Resource>, NavigationFiltersDefinition, GroupingDefinition<Resource>>;
type CrudCardVisualization = Extract<CrudVisualization, {
    type: "card";
}>;
type CrudKanbanVisualization = Extract<CrudVisualization, {
    type: "kanban";
}>;
type CrudEditableTableVisualization = Extract<CrudVisualization, {
    type: "editableTable";
}>;
export declare const tableVisualization: CrudVisualization;
export declare const listVisualization: CrudVisualization;
export declare const cardVisualization: CrudCardVisualization;
export declare const kanbanSourceLanes: {
    id: string;
    filters: {
        status: string[];
    };
}[];
export declare const kanbanLaneStatus: Record<string, Resource["status"]>;
export declare const kanbanVisualization: CrudKanbanVisualization;
export declare const editableTableVisualization: CrudEditableTableVisualization;
export declare function createResourceDataAdapter(resources: Resource[]): {
    fetchData: ({ filters, }: {
        filters: Partial<Record<keyof typeof resourceFilters, string[]>>;
    }) => Promise<{
        records: Resource[];
    }>;
};
export declare function defaultCrudPrimaryAction(onClick: () => void): {
    label: string;
    icon: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
    onClick: () => void;
};
export declare function defaultCrudSecondaryActions(): {
    expanded: 0;
    actions: () => {
        label: string;
        icon: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
        onClick: () => void;
    }[];
};
export declare function CrudPatternLayout({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function CrudContentPlaceholder({ minHeight, }: {
    minHeight?: string;
}): import("react").JSX.Element;
export type ResourceFormData = {
    name: string;
    owner: string;
    status: string;
};
export declare function ResourceFormF0({ resource, mode, formRef, onSuccess, }: {
    resource?: Resource;
    mode: "create" | "update";
    formRef: MutableRefObject<F0FormRef | null>;
    onSuccess: (data: ResourceFormData) => void;
}): import("react").JSX.Element;
export declare function WizardStepBasic(): import("react").JSX.Element;
export declare function WizardStepAssignments(): import("react").JSX.Element;
export {};
