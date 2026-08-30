import { NewColor } from '../../../components/tags/F0TagDot';
import { PropertyDefinition } from '../../../patterns/OneDataCollection/property-render';
export declare const mockItem: {
    id: string;
    lastName: string;
    firstName: string;
    salary: number;
    date: Date;
    role: string;
    amount: number;
    status: string;
    avatar: string;
    avatarList: {
        type: "person";
        firstName: string;
        lastName: string;
        src: string;
    }[];
    positiveDelta: {
        label: string;
        deltaStatus: "positive";
    };
    negativeDelta: {
        label: string;
        deltaStatus: "negative";
    };
    companyName: string;
    companyLogo: string;
    teamName: string;
    teamLogo: string;
    skills: {
        label: string;
        color: NewColor;
        description: string;
    }[];
};
export declare function Cell({ item, property, }: {
    item: typeof mockItem;
    property: PropertyDefinition<typeof mockItem>;
}): import('react').ReactNode;
