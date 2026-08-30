import { icons } from 'lucide-react';
declare const inputFieldArgs: {
    label: {
        description: string;
        control: string;
    };
    hideLabel: {
        description: string;
        control: string;
    };
    labelIcon: {
        description: string;
        control: string;
        mapping: typeof icons;
        options: string[];
    };
    placeholder: {
        description: string;
        control: string;
    };
    value: {
        description: string;
        control: string;
    };
    onChange: {
        description: string;
        action: string;
    };
    size: {
        description: string;
        control: string;
        options: string[];
    };
    error: {
        description: string;
        control: string;
    };
    disabled: {
        description: string;
        control: string;
    };
    className: {
        description: string;
        control: string;
    };
    required: {
        description: string;
        control: string;
    };
    readonly: {
        description: string;
        control: string;
    };
    status: {
        description: string;
        control: string;
        options: string[];
    };
    hint: {
        description: string;
        control: string;
    };
    clearable: {
        description: string;
        control: string;
    };
    onClear: {
        description: string;
        action: string;
    };
    onFocus: {
        description: string;
        action: string;
    };
    onBlur: {
        description: string;
        action: string;
    };
    children: {
        description: string;
        control: boolean;
    };
    icon: {
        description: string;
        control: string;
        mapping: typeof icons;
        options: string[];
    };
    maxLength: {
        description: string;
        control: string;
    };
    hideMaxLength: {
        description: string;
    };
    buttonToggle: {
        description: string;
        control: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
};
export declare const getInputFieldArgs: (keys?: ReadonlyArray<keyof typeof inputFieldArgs | string>) => any;
export {};
