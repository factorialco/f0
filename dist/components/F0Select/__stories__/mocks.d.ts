/**
 * Generate employee data with consistent seeding
 */
declare const generateEmployee: (id: number) => {
    id: number;
    value: string;
    firstName: string;
    lastName: string;
    label: string;
    email: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    departmentId: 4 | 2 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 16 | 20 | 17 | 19 | 18 | 14 | 21 | 13 | 22 | 15 | 24 | 25 | 23;
    departmentName: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
    jobTitle: string;
    officeId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    officeName: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    legalEntityId: 201 | 202 | 203 | 204;
    legalEntityName: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    hireDate: string;
};
export declare const employeeFiltersDefinition: {
    department: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
            }[];
        };
    };
    office: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
            }[];
        };
    };
    legalEntity: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
            }[];
        };
    };
};
/**
 * Nested filter definitions: office -> space -> desk.
 * space and desk filters have hideSelector so they don't appear in the sidebar.
 */
export declare const employeeNestedFiltersDefinition: {
    department: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
            }[];
        };
    };
    office: {
        type: "in";
        label: string;
        options: {
            options: {
                children?: {
                    filterKey: string;
                    options: {
                        children?: {
                            filterKey: string;
                            options: {
                                value: string;
                                label: "Desk A1 - Standing Desk Near Window" | "Desk A2" | "Desk A3" | "Desk B1" | "Desk B2 - Ergonomic Adjustable Workspace" | "Hot Desk 1" | "Hot Desk 2";
                            }[];
                        } | undefined;
                        value: string;
                        label: "Floor 1 - Collaborative Workspace Area" | "Floor 2" | "Rooftop Terrace & Executive Meeting Rooms" | "Floor 1" | "Floor 2 - Departamento de Investigación y Desarrollo" | "Ground Floor" | "Main Floor - Customer Success & Support Center" | "Open Space";
                    }[];
                } | undefined;
                value: string;
                label: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
            }[];
        };
    };
    space: {
        type: "in";
        label: string;
        hideSelector: boolean;
        options: {
            options: {
                value: string;
                label: "Floor 1 - Collaborative Workspace Area" | "Floor 2" | "Rooftop Terrace & Executive Meeting Rooms" | "Floor 1" | "Floor 2 - Departamento de Investigación y Desarrollo" | "Ground Floor" | "Main Floor - Customer Success & Support Center" | "Open Space";
            }[];
        };
    };
    desk: {
        type: "in";
        label: string;
        hideSelector: boolean;
        options: {
            options: {
                value: string;
                label: "Desk A1 - Standing Desk Near Window" | "Desk A2" | "Desk A3" | "Desk B1" | "Desk B2 - Ergonomic Adjustable Workspace" | "Hot Desk 1" | "Hot Desk 2";
            }[];
        };
    };
    legalEntity: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
            }[];
        };
    };
};
export type Employee = ReturnType<typeof generateEmployee>;
/**
 * Paginated data source for employees
 * Simulates a real API with cursor-based pagination
 */
export declare const employeePaginatedSource: import('../../../hooks/datasource').DataSourceDefinition<{
    id: number;
    value: string;
    firstName: string;
    lastName: string;
    label: string;
    email: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    departmentId: 4 | 2 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 16 | 20 | 17 | 19 | 18 | 14 | 21 | 13 | 22 | 15 | 24 | 25 | 23;
    departmentName: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
    jobTitle: string;
    officeId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    officeName: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    legalEntityId: 201 | 202 | 203 | 204;
    legalEntityName: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    hireDate: string;
}, {
    department: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
            }[];
        };
    };
    office: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
            }[];
        };
    };
    legalEntity: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
            }[];
        };
    };
}, import('../../../hooks/datasource').SortingsDefinition, import('../../../hooks/datasource').GroupingDefinition<{
    id: number;
    value: string;
    firstName: string;
    lastName: string;
    label: string;
    email: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    departmentId: 4 | 2 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 16 | 20 | 17 | 19 | 18 | 14 | 21 | 13 | 22 | 15 | 24 | 25 | 23;
    departmentName: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
    jobTitle: string;
    officeId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    officeName: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    legalEntityId: 201 | 202 | 203 | 204;
    legalEntityName: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    hireDate: string;
}>>;
/**
 * Non-paginated data source (loads all at once, limited to 100)
 */
export declare const employeeNonPaginatedSource: import('../../../hooks/datasource').DataSourceDefinition<{
    id: number;
    value: string;
    firstName: string;
    lastName: string;
    label: string;
    email: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    departmentId: 4 | 2 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 16 | 20 | 17 | 19 | 18 | 14 | 21 | 13 | 22 | 15 | 24 | 25 | 23;
    departmentName: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
    jobTitle: string;
    officeId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    officeName: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    legalEntityId: 201 | 202 | 203 | 204;
    legalEntityName: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    hireDate: string;
}, {
    department: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
            }[];
        };
    };
    office: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
            }[];
        };
    };
    legalEntity: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
            }[];
        };
    };
}, import('../../../hooks/datasource').SortingsDefinition, import('../../../hooks/datasource').GroupingDefinition<{
    id: number;
    value: string;
    firstName: string;
    lastName: string;
    label: string;
    email: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    departmentId: 4 | 2 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 16 | 20 | 17 | 19 | 18 | 14 | 21 | 13 | 22 | 15 | 24 | 25 | 23;
    departmentName: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
    jobTitle: string;
    officeId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    officeName: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    legalEntityId: 201 | 202 | 203 | 204;
    legalEntityName: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    hireDate: string;
}>>;
/**
 * Paginated data source with nested filters (office -> space -> desk)
 */
export declare const employeeNestedPaginatedSource: import('../../../hooks/datasource').DataSourceDefinition<{
    id: number;
    value: string;
    firstName: string;
    lastName: string;
    label: string;
    email: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    departmentId: 4 | 2 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 16 | 20 | 17 | 19 | 18 | 14 | 21 | 13 | 22 | 15 | 24 | 25 | 23;
    departmentName: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
    jobTitle: string;
    officeId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    officeName: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    legalEntityId: 201 | 202 | 203 | 204;
    legalEntityName: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    hireDate: string;
}, {
    department: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
            }[];
        };
    };
    office: {
        type: "in";
        label: string;
        options: {
            options: {
                children?: {
                    filterKey: string;
                    options: {
                        children?: {
                            filterKey: string;
                            options: {
                                value: string;
                                label: "Desk A1 - Standing Desk Near Window" | "Desk A2" | "Desk A3" | "Desk B1" | "Desk B2 - Ergonomic Adjustable Workspace" | "Hot Desk 1" | "Hot Desk 2";
                            }[];
                        } | undefined;
                        value: string;
                        label: "Floor 1 - Collaborative Workspace Area" | "Floor 2" | "Rooftop Terrace & Executive Meeting Rooms" | "Floor 1" | "Floor 2 - Departamento de Investigación y Desarrollo" | "Ground Floor" | "Main Floor - Customer Success & Support Center" | "Open Space";
                    }[];
                } | undefined;
                value: string;
                label: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
            }[];
        };
    };
    space: {
        type: "in";
        label: string;
        hideSelector: boolean;
        options: {
            options: {
                value: string;
                label: "Floor 1 - Collaborative Workspace Area" | "Floor 2" | "Rooftop Terrace & Executive Meeting Rooms" | "Floor 1" | "Floor 2 - Departamento de Investigación y Desarrollo" | "Ground Floor" | "Main Floor - Customer Success & Support Center" | "Open Space";
            }[];
        };
    };
    desk: {
        type: "in";
        label: string;
        hideSelector: boolean;
        options: {
            options: {
                value: string;
                label: "Desk A1 - Standing Desk Near Window" | "Desk A2" | "Desk A3" | "Desk B1" | "Desk B2 - Ergonomic Adjustable Workspace" | "Hot Desk 1" | "Hot Desk 2";
            }[];
        };
    };
    legalEntity: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
            }[];
        };
    };
}, import('../../../hooks/datasource').SortingsDefinition, import('../../../hooks/datasource').GroupingDefinition<{
    id: number;
    value: string;
    firstName: string;
    lastName: string;
    label: string;
    email: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    departmentId: 4 | 2 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 16 | 20 | 17 | 19 | 18 | 14 | 21 | 13 | 22 | 15 | 24 | 25 | 23;
    departmentName: "HR" | "IT" | "Data" | "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Customer Success" | "Finance" | "Operations" | "Legal" | "Security" | "Research & Development" | "Quality Assurance" | "Facilities" | "Procurement" | "Communications" | "Learning & Development" | "Business Development" | "Partnerships" | "Customer Experience" | "Technical Support" | "Analytics" | "Content";
    jobTitle: string;
    officeId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    officeName: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    legalEntityId: 201 | 202 | 203 | 204;
    legalEntityName: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    hireDate: string;
}>>;
/**
 * Helper to get employee by ID (for defaultItem lookups)
 */
export declare const getEmployeeById: (id: number) => Employee | undefined;
/**
 * Helper to get multiple employees by IDs
 */
export declare const getEmployeesByIds: (ids: number[]) => Employee[];
export declare const mockItems: {
    value: string;
    label: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    role: string;
    roleId: string;
    workplace: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    workplaceId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    legalEntity: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    legalEntityId: 201 | 202 | 203 | 204;
    description: string;
}[];
export type MockItem = (typeof mockItems)[number];
export declare const mockFiltersDefinition: {
    role: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: string;
            }[];
        };
    };
    workplace: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
            }[];
        };
    };
    legalEntity: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
            }[];
        };
    };
};
export declare const mockPaginatedSource: import('../../../hooks/datasource').DataSourceDefinition<{
    value: string;
    label: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    role: string;
    roleId: string;
    workplace: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    workplaceId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    legalEntity: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    legalEntityId: 201 | 202 | 203 | 204;
    description: string;
}, {
    role: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: string;
            }[];
        };
    };
    workplace: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
            }[];
        };
    };
    legalEntity: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
            }[];
        };
    };
}, import('../../../hooks/datasource').SortingsDefinition, import('../../../hooks/datasource').GroupingDefinition<{
    value: string;
    label: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    role: string;
    roleId: string;
    workplace: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    workplaceId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    legalEntity: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    legalEntityId: 201 | 202 | 203 | 204;
    description: string;
}>>;
export declare const mockNonPaginatedSource: import('../../../hooks/datasource').DataSourceDefinition<{
    value: string;
    label: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    role: string;
    roleId: string;
    workplace: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    workplaceId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    legalEntity: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    legalEntityId: 201 | 202 | 203 | 204;
    description: string;
}, {
    role: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: string;
            }[];
        };
    };
    workplace: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
            }[];
        };
    };
    legalEntity: {
        type: "in";
        label: string;
        options: {
            options: {
                value: string;
                label: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
            }[];
        };
    };
}, import('../../../hooks/datasource').SortingsDefinition, import('../../../hooks/datasource').GroupingDefinition<{
    value: string;
    label: string;
    avatar: {
        type: "person";
        firstName: string;
        lastName: string;
    };
    role: string;
    roleId: string;
    workplace: "Barcelona HQ - Diagonal Avenue Campus" | "Madrid Centro de Innovación y Desarrollo Tecnológico" | "London" | "New York" | "San Francisco Bay Area Innovation Hub" | "Berlin" | "Remote";
    workplaceId: 101 | 102 | 103 | 104 | 105 | 106 | 107;
    legalEntity: "Factorial HR SL" | "Factorial Inc" | "Factorial UK Ltd" | "Factorial GmbH";
    legalEntityId: 201 | 202 | 203 | 204;
    description: string;
}>>;
export {};
