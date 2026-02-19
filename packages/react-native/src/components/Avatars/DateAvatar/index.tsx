import { View, Text } from "react-native"

import { getAbbreviateMonth, getDayOfMonth } from "../../../lib/date"

type Props = {
  date: Date
}

export const DateAvatar = ({ date }: Props) => {
  const dateDay = getDayOfMonth(date)
  const month = getAbbreviateMonth(date)

  return (
    <View className="flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary">
      <Text className="pt-0.5 text-xs leading-3 font-semibold text-f1-special-highlight uppercase dark:text-f1-foreground-inverse-secondary">
        {month}
      </Text>
      <Text className="flex items-center justify-center text-lg leading-tight font-medium text-f1-foreground">
        {dateDay}
      </Text>
    </View>
  )
}
