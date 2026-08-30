export type ResourceStatus = "Draft" | "Complete" | "Needs details";
export type Resource = {
    id: string;
    name: string;
    owner: string;
    status: ResourceStatus;
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
export declare const resourceSortings: {
    readonly name: {
        readonly label: "Name";
    };
    readonly owner: {
        readonly label: "Owner";
    };
    readonly status: {
        readonly label: "Status";
    };
};
export declare const ENGAGEMENT_RESOURCES: Resource[];
export declare const TRAINING_RESOURCES: Resource[];
/** Data adapter factory for the Collection phase table — one per flow's rows. */
export declare const makeResourcesDataAdapter: (resources: Resource[]) => {
    fetchData: () => Promise<{
        records: Resource[];
    }>;
};
export declare const tableVisualization: {
    type: "table";
    options: {
        columns: {
            label: string;
            render: (item: Resource) => string;
        }[];
    };
};
export type Template = {
    id: string;
    name: string;
    category: string;
    description: string;
    questions: number;
};
export declare const EMPTY_SURVEY_TEMPLATE_ID = "empty-survey";
export declare const EMPTY_SURVEY_TEMPLATE: Template;
export declare const ENGAGEMENT_TEMPLATES: Template[];
export declare const ENGAGEMENT_TEMPLATE_CATEGORIES: {
    value: string;
    label: string;
}[];
export declare const TRAINING_TEMPLATES: Template[];
export declare const TRAINING_TEMPLATE_CATEGORIES: {
    value: string;
    label: string;
}[];
/** Data adapter factory for the Templates browse view — one per flow's list. */
export declare const makeTemplatesDataAdapter: (templates: Template[]) => {
    fetchData: () => Promise<{
        records: Template[];
    }>;
};
/** Category filter factory for the Templates browse view — one per flow. */
export declare const makeTemplateFilters: (categories: {
    value: string;
    label: string;
}[]) => {
    category: {
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
export declare const templateSortings: {
    readonly name: {
        readonly label: "Name";
    };
    readonly questions: {
        readonly label: "Questions";
    };
};
export declare const cardVisualization: {
    type: "card";
    options: {
        title: (item: Template) => string;
        description: (item: Template) => string;
        cardProperties: {
            label: string;
            icon: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
            render: (item: Template) => string;
        }[];
    };
};
export declare const listVisualization: {
    type: "list";
    options: {
        itemDefinition: (item: Template) => {
            title: string;
            description: string[];
        };
        fields: {
            label: string;
            hide: (item: Template) => boolean;
            render: (item: Template) => string;
        }[];
    };
};
export declare const galleryListVisualization: {
    type: "list";
    options: {
        itemDefinition: (item: Template) => {
            title: string;
            description: string[];
        };
        fields: {
            label: string;
            hide: (item: Template) => boolean;
            render: (item: Template) => string;
            sorting: "questions";
        }[];
    };
};
export declare const galleryCardVisualization: {
    type: "card";
    options: {
        title: (item: Template) => string;
        description: (item: Template) => string;
        cardProperties: {
            icon: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
            label: string;
            hide: (item: Template) => boolean;
            render: (item: Template) => string;
            sorting: "questions";
        }[];
    };
};
