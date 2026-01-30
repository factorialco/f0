import { memo } from "react";
import { Text, View } from "react-native";
import { Button } from "../../Button";
import { AppIcons } from "../../../icons";

type ActionType = "notifications";

export type ActionT = {
  type: ActionType;
  label: string;
  onPress: () => void;
  showBadge?: boolean;
};

type Props = {
  title: string;
  actions?: ActionT[];
};

const NotificationsAction = ({ label, onPress, showBadge }: ActionT) => {
  return (
    <Button
      variant="outline"
      icon={AppIcons.Bell}
      label={label}
      hideLabel
      onPress={onPress}
      showBadge={showBadge}
      size="md"
      round
    />
  );
};

export const PageHeader = memo(({ title, actions }: Props) => {
  return (
    <View className="flex-row items-center justify-between px-5 py-3">
      <Text className="text-3xl font-semibold text-f1-foreground">{title}</Text>
      <View className="flex-row gap-2">
        {actions?.map((action) => {
          switch (action.type) {
            case "notifications":
              return <NotificationsAction {...action} key={action.label} />;
            default:
              return null;
          }
        })}
      </View>
    </View>
  );
});

PageHeader.displayName = "PageHeader";
