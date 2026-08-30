import { TableVisualizationType } from '../../../../patterns/OneDataCollection/types';
import { NestedRowProps } from '../../../../patterns/OneDataCollection/visualizations/collection/Table/components/Row';
interface TreeConnectorProps {
    firstCell: boolean;
    nestedRowProps?: NestedRowProps & {
        rowWithChildren?: boolean;
        tableWithChildren?: boolean;
        selectableRow?: boolean;
    };
    fromVisualization?: TableVisualizationType;
}
export declare const connectorVariables: (height: number, nestedRowProps?: NestedRowProps & {
    rowWithChildren?: boolean;
    tableWithChildren?: boolean;
    selectableRow?: boolean;
}, fromVisualization?: TableVisualizationType) => {
    "--starting-y": string;
    "--line-height"?: string | undefined;
    "--line-left": string;
    "--line-width": string;
    "--horizontal-offset": string;
    "--horizontal-left": string;
    "--horizontal-height": string;
    "--connector-width": string;
};
export declare const verticalConnectorStyles: string;
export declare const horizontalConnectorStyles: string;
export declare const TreeConnector: ({ firstCell, nestedRowProps, fromVisualization, }: TreeConnectorProps) => import("react").JSX.Element | null;
export {};
