interface VersionItemProps {
    author: {
        firstName: string;
        lastName: string;
        src?: string;
    };
    timestamp: Date;
    onClick?: () => void;
    isActive?: boolean;
}
export declare function VersionItem({ author, timestamp, onClick, isActive, }: VersionItemProps): import("react").JSX.Element;
export {};
