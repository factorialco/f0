import * as React from "react";
import { View } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import { Info } from "../lib/icons/Info";

import { Text } from "ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "ui/avatar";
import { Progress } from "ui/progress";
import { Button } from "src/components/Button";

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }

  return (
    <View className="bg-secondary/30 flex-1 items-center justify-center gap-5 p-6">
      <Card className="w-full max-w-sm rounded-2xl p-6">
        <CardHeader className="items-center">
          <Avatar alt="Rick Sanchez's Avatar" className="h-24 w-24">
            <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
            <AvatarFallback>
              <Text>RS</Text>
            </AvatarFallback>
          </Avatar>
          <View className="p-3" />
          <CardTitle className="text-5xl pb-2 text-center">
            Rick Sanchez
          </CardTitle>
          <View className="flex-row">
            <CardDescription className="text-base font-semibold">
              Scientist
            </CardDescription>
            <Tooltip delayDuration={150}>
              <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
                <Info size={14} strokeWidth={2.5} color="#71717a" />
              </TooltipTrigger>
              <TooltipContent className="px-4 py-2 shadow">
                <Text className="native:text-lg">Freelance</Text>
              </TooltipContent>
            </Tooltip>
          </View>
        </CardHeader>
        <CardContent>
          <View className="flex-row justify-around gap-3">
            <View className="items-center">
              <Text className="text-muted-foreground text-sm">Hoooo</Text>
              <Text className="text-xl font-semibold">C-137</Text>
            </View>
            <View className="items-center">
              <Text className="text-muted-foreground text-sm">Age</Text>
              <Text className="text-xl font-semibold">70</Text>
            </View>
            <View className="items-center">
              <Text className="text-muted-foreground text-sm">Species</Text>
              <Text className="text-xl font-semibold">Human</Text>
            </View>
          </View>
        </CardContent>
        <CardFooter className="flex-col gap-3 pb-0">
          <View className="flex-row items-center overflow-hidden">
            <Text className="text-muted-foreground text-sm">Productivity:</Text>
            <LayoutAnimationConfig skipEntering>
              <Animated.View
                key={progress}
                entering={FadeInUp}
                exiting={FadeOutDown}
                className="w-11 items-center"
              >
                <Text className="font-bold text-sky-600 text-sm">
                  {progress}%
                </Text>
              </Animated.View>
            </LayoutAnimationConfig>
          </View>
          <Progress
            value={progress}
            className="h-2"
            indicatorClassName="bg-sky-600"
          />
          <View />
          <Button
            variant="outline"
            label="Update"
            className="shadow-foreground/5 shadow"
            onPress={updateProgressValue}
          />
        </CardFooter>
      </Card>
    </View>
  );
}
