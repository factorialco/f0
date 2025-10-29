import { ComponentProps, FC } from "react";
import { DataList } from "../DataList";
import { cn } from "../../../../lib/utils";
import { View } from "react-native";

export type Content =
  | (ComponentProps<typeof DataList.Item> & {
      type: "item";
    })
  | (ComponentProps<typeof DataList.PersonItem> & {
      type: "person";
    })
  | (ComponentProps<typeof DataList.CompanyItem> & {
      type: "company";
    })
  | (ComponentProps<typeof DataList.TeamItem> & {
      type: "team";
    })
  | (ComponentProps<typeof DataList.DotTagItem> & {
      type: "dot-tag";
    });

export interface DetailsItemType {
  title: string;
  content: Content | Content[];
  spacingAtTheBottom?: boolean;
  isHorizontalItem?: boolean;
  tableView?: boolean;
}

const ItemContent: FC<{ content: Content }> = ({ content }) => (
  <>
    {content.type === "person" && <DataList.PersonItem {...content} />}
    {content.type === "item" && <DataList.Item {...content} />}
    {content.type === "team" && <DataList.TeamItem {...content} />}
    {content.type === "company" && <DataList.CompanyItem {...content} />}
    {content.type === "dot-tag" && <DataList.DotTagItem {...content} />}
  </>
);

export const DetailsItem = ({
  title,
  content,
  isHorizontalItem = false,
  tableView = false,
  spacingAtTheBottom,
}: DetailsItemType) => {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <View
      className={cn(
        "flex gap-0.5",
        spacingAtTheBottom && !isHorizontalItem && "pb-3",
      )}
    >
      <DataList
        label={title}
        isHorizontalItem={isHorizontalItem}
        tableView={tableView}
      >
        {contentArray.map((c, i) => (
          <ItemContent key={i} content={c} />
        ))}
      </DataList>
    </View>
  );
};
