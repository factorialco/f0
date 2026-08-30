export declare const mockTags: {
    dot: ({
        text: string;
        color: "viridian";
    } | {
        text: string;
        color: "malibu";
    } | {
        text: string;
        color: "yellow";
    } | {
        text: string;
        color: "purple";
    } | {
        text: string;
        color: "lilac";
    })[];
    person: ({
        name: string;
        src: string;
    } | {
        name: string;
        src?: undefined;
    })[];
    team: ({
        name: string;
        src: string;
    } | {
        name: string;
        src?: undefined;
    })[];
    company: ({
        name: string;
        src: string;
    } | {
        name: string;
        src?: undefined;
    })[];
    status: ({
        variant: "positive";
        text: string;
    } | {
        variant: "warning";
        text: string;
    } | {
        variant: "critical";
        text: string;
    } | {
        variant: "info";
        text: string;
    })[];
    alert: ({
        level: "info";
        text: string;
    } | {
        level: "warning";
        text: string;
    } | {
        level: "critical";
        text: string;
    })[];
    balance: ({
        status: "positive";
        amount: number;
        percentage: number;
    } | {
        status: "negative";
        amount: number;
        percentage: number;
    } | {
        status: "neutral";
        amount: number;
        percentage: number;
    })[];
    raw: ({
        icon: import('react').ForwardRefExoticComponent<Omit<import('lucide-react').LucideProps, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
        text: string;
    } | {
        text: string;
        icon?: undefined;
    })[];
};
