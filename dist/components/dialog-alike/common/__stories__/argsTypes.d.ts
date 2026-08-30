export declare const getDialogAlikeArgTypes: ({ componentName, include, exclude, }: {
    componentName: string;
    include?: string[];
    exclude?: string[];
}) => {
    [k: string]: {
        description: string;
        control: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    } | {
        description: string;
        action: string;
    } | {
        description: string;
        control: string;
    } | {
        description: string;
        control: string;
    } | {
        description: string;
        control: string;
        options: import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>[];
    } | {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    } | {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    } | {
        description: string;
        control: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    } | {
        description: string;
        control: string;
        table: {
            type: {
                summary: string;
            };
        };
    } | {
        description: string;
        control: string;
    } | {
        description: string;
        control: string;
    } | {
        description: string;
        control: string;
    } | {
        description: string;
        action: string;
    };
};
