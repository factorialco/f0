export declare const baseAvatarArgTypes: {
    size: {
        control: string;
        options: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    "aria-label": {
        control: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    "aria-labelledby": {
        control: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    badge: {
        control: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
};
export declare const getBaseAvatarArgTypes: (include: string[]) => {
    [k: string]: {
        control: string;
        options: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    } | {
        control: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    } | {
        control: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    } | {
        control: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
};
