import * as react_jsx_runtime from 'react/jsx-runtime';
import { DetailsItemType } from '../DetailsItem/index.js';
import 'react';
import '../DataList/index.js';
import '../../../Icon/index.js';
import 'cva';
import 'react-native-svg';
import '../../../Tags/DotTag/index.js';
import '@factorialco/f0-core';

interface DetailsItemsListProps {
    title?: string;
    tableView?: boolean;
    isHorizontalItem?: boolean;
    details: DetailsItemType[];
}
declare const DetailsItemsList: ({ title, tableView, isHorizontalItem, details, }: DetailsItemsListProps) => react_jsx_runtime.JSX.Element;

export { DetailsItemsList, type DetailsItemsListProps };
