import { NestedRowProps } from '../../../../patterns/OneDataCollection/visualizations/collection/Table/components/Row';
interface NestedCellProps {
    width?: number | "auto";
    linkRef: React.RefObject<HTMLAnchorElement>;
    firstCell: boolean;
    nestedRowProps?: NestedRowProps & {
        rowWithChildren?: boolean;
        tableWithChildren?: boolean;
    };
    children: React.ReactNode;
    onClick?: () => void;
}
export declare const NestedCell: ({ width, linkRef, firstCell, nestedRowProps, children, onClick, }: NestedCellProps) => import("react").JSX.Element;
export {};
