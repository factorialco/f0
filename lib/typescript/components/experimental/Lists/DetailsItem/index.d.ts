import { ComponentProps } from "react";
import { DataList } from "../DataList";
export type Content = (ComponentProps<typeof DataList.Item> & {
    type: "item";
}) | (ComponentProps<typeof DataList.PersonItem> & {
    type: "person";
}) | (ComponentProps<typeof DataList.CompanyItem> & {
    type: "company";
}) | (ComponentProps<typeof DataList.TeamItem> & {
    type: "team";
}) | (ComponentProps<typeof DataList.DotTagItem> & {
    type: "dot-tag";
}) | (ComponentProps<typeof DataList.CardItem> & {
    type: "card";
});
export interface DetailsItemType {
    title: string;
    content: Content | Content[];
    spacingAtTheBottom?: boolean;
    isHorizontalItem?: boolean;
    tableView?: boolean;
    fullWidth?: boolean;
}
export declare const DetailsItem: ({ title, content, isHorizontalItem, tableView, fullWidth, spacingAtTheBottom, }: DetailsItemType) => import("react").JSX.Element;
//# sourceMappingURL=index.d.ts.map