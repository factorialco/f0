import React from "react";
import { DetailsItem, DetailsItemType } from "../DetailsItem";
import { cn } from "../../../../lib/utils";
import { View, Text } from "react-native";

export interface DetailsItemsListProps {
  title?: string;
  tableView?: boolean;
  isHorizontalItem?: boolean;
  details: DetailsItemType[];
}

export const DetailsItemsList = function DetailsItemList({
  title,
  tableView = false,
  isHorizontalItem = false,
  details,
}: DetailsItemsListProps) {
  return (
    <View className="flex gap-4">
      {!!title && (
        <Text className="mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary">
          {title.toLocaleUpperCase()}
        </Text>
      )}
      <View
        className={cn(
          "flex",
          tableView
            ? "rounded-[16px] border border-solid border-f1-border-secondary"
            : "gap-3",
        )}
      >
        {details?.map((item, index) => (
          <React.Fragment key={item.title}>
            <DetailsItem
              title={item.title}
              key={item.title}
              content={item.content}
              spacingAtTheBottom={item.spacingAtTheBottom}
              tableView={tableView}
              isHorizontalItem={isHorizontalItem}
            />
            {tableView && index !== details.length - 1 && (
              <View className="h-[1px] w-full bg-f1-border-secondary" />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};
