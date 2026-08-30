import { NestedRowProps } from '../../../../patterns/OneDataCollection/visualizations/collection/Table/components/Row';
export declare const SPACING_FACTOR = 32;
export declare const CHEVRON_PARENT_SIZE = 24;
export declare const CHEVRON_SIZE = 18;
export declare const LINE_WIDTH = "1px";
export declare const PADDING_TOP = 8;
export declare const BUTTON_HEIGHT = 32;
export declare const BUTTON_PADDING = 4;
export declare const CONNECTOR_WIDTH = 40;
export declare const CONNECTOR_WIDTH_WITH_CHILDREN: number;
export declare const SELECTABLE_EDITABLE_ROW_OFFSET = 24;
export declare const SELECTABLE_ROW_OFFSET = 16;
export declare const getNestedMarginLeft: ({ depth, padding, }: {
    depth: number;
    padding?: number;
}) => string;
export declare const getNestedMarginLeftForLoadMore: ({ depth, isDetailedVariant, }: {
    depth: number;
    isDetailedVariant: boolean;
}) => string;
export declare const isFirstCellWithDepth: (firstCell: boolean, depth: number) => boolean;
export declare const isFirstCellWithChildren: (firstCell: boolean, hasChildren: boolean) => boolean;
export declare const isFirstCellExpanded: (expanded: boolean, firstCell: boolean) => boolean;
export declare const isFirstCellWithTableChildren: (firstCell: boolean, tableWithChildren: boolean) => boolean;
export declare const isFirstCellWithNoChildrenAndTableChildren: (firstCell: boolean, hasChildren: boolean, tableWithChildren: boolean) => boolean;
export declare const isFirstCellDetailed: (firstCell: boolean, nestedRowProps?: NestedRowProps & {
    rowWithChildren?: boolean;
}) => boolean;
