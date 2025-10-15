import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentProps } from 'react';
import { DataList } from '../DataList/index.js';
import '../../../Icon/index.js';
import 'cva';
import 'react-native-svg';
import '../../../Tags/DotTag/index.js';
import '@factorialco/f0-core';

type Content = (ComponentProps<typeof DataList.Item> & {
    type: "item";
}) | (ComponentProps<typeof DataList.PersonItem> & {
    type: "person";
}) | (ComponentProps<typeof DataList.CompanyItem> & {
    type: "company";
}) | (ComponentProps<typeof DataList.TeamItem> & {
    type: "team";
}) | (ComponentProps<typeof DataList.DotTagItem> & {
    type: "dot-tag";
});
interface DetailsItemType {
    title: string;
    content: Content | Content[];
    spacingAtTheBottom?: boolean;
    isHorizontalItem?: boolean;
    tableView?: boolean;
}
declare const DetailsItem: ({ title, content, isHorizontalItem, tableView, spacingAtTheBottom, }: DetailsItemType) => react_jsx_runtime.JSX.Element;

export { type Content, DetailsItem, type DetailsItemType };
