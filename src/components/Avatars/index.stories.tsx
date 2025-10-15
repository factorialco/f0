import { Check } from "../../icons/app";
import type { Meta, StoryFn } from "@storybook/react";
import { ScrollView, View, Text } from "react-native";
import { PersonAvatar } from "./PersonAvatar";
import { DateAvatar } from "./DateAvatar";
import { FileAvatar } from "./FileAvatar";
import { ModuleAvatar } from "./ModuleAvatar";
import { IconAvatar } from "./IconAvatar";
import { AppIcons, ModuleIcons } from "../../icons";
import { CompanyAvatar } from "./CompanyAvatar";

const meta: Meta = {
  title: "Components/Avatars",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: StoryFn) => (
      <View className="flex-1">
        {/* @ts-expect-error - Storybook type issue with Story component */}
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const AvatarsShowCase = () => {
  const date = new Date();

  const moduleEntries = Object.entries(ModuleIcons);
  const fileTypes = [
    { name: "document.pdf", type: "application/pdf" },
    { name: "image.jpg", type: "image/jpeg" },
    {
      name: "document.docx",
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
    {
      name: "spreadsheet.xlsx",
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
      name: "presentation.pptx",
      type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    },
    { name: "text.txt", type: "text/plain" },
    { name: "video.mp4", type: "video/mp4" },
    { name: "audio.mp3", type: "audio/mpeg" },
    { name: "archive.zip", type: "application/zip" },
    { name: "data.csv", type: "csv" },
    { name: "webpage.html", type: "html" },
    { name: "readme.md", type: "markdown" },
    { name: "unknown.xyz", type: "undefined" },
  ];
  return (
    <ScrollView className="p-4">
      <Text className="font-bold mb-4 text-lg text-f1-foreground">
        PersonAvatar
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        <PersonAvatar firstName="Daniel" lastName="Maza" />
        <PersonAvatar
          firstName="Daniel"
          lastName="Maza"
          src="https://github.com/dani-moreno.png"
        />
        <PersonAvatar
          firstName="Daniel"
          lastName="Maza"
          badge={{ icon: Check, type: "positive" }}
        />
      </View>
      <Text className="font-bold mb-4 text-lg text-f1-foreground">
        DateAvatar
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        <DateAvatar date={new Date()} />
        <DateAvatar date={new Date(date.getDate() + 1)} />
        <DateAvatar date={new Date(date.setMonth(date.getMonth() + 8))} />
      </View>
      <Text className="font-bold mb-4 text-lg text-f1-foreground">
        FileAvatar
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        {fileTypes.map((fileType, index) => (
          <FileAvatar
            key={index}
            file={new File([""], fileType.name, { type: fileType.type })}
          />
        ))}
      </View>
      <Text className="font-bold mb-4 text-lg text-f1-foreground">
        ModuleAvatar
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        {moduleEntries.map(([name, icon]) => (
          <ModuleAvatar key={name} icon={icon} />
        ))}
      </View>
      <Text className="font-bold mb-4 text-lg text-f1-foreground">
        IconAvatar
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        <IconAvatar icon={AppIcons.Bell} size="md" />
        <IconAvatar icon={AppIcons.Calendar} size="md" />
        <IconAvatar icon={AppIcons.Pencil} size="md" />
        <IconAvatar icon={AppIcons.Windows} size="md" />
        <IconAvatar icon={AppIcons.MoveDown} size="md" />
        <IconAvatar icon={AppIcons.Download} size="md" />
        <IconAvatar icon={AppIcons.Ellipsis} size="md" />
        <IconAvatar icon={AppIcons.Exit} size="md" />
        <IconAvatar icon={AppIcons.Desktop} size="md" />
        <IconAvatar icon={AppIcons.Delete} size="md" />
        <IconAvatar icon={AppIcons.EyeVisible} size="md" />
        <IconAvatar icon={AppIcons.Graph} size="md" />
        <IconAvatar icon={AppIcons.Folders} size="md" />
        <IconAvatar icon={AppIcons.Folder} size="md" />
        <IconAvatar icon={AppIcons.FaceSuperPositive} size="md" />
        <IconAvatar icon={AppIcons.Heading2} size="md" />
      </View>
      <Text className="font-bold mb-4 text-lg text-f1-foreground">
        CompanyAvatar
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-2">
        <CompanyAvatar name="F0" />
        <CompanyAvatar
          src="https://avatars.githubusercontent.com/u/21041797?s=48&v=4"
          name="F0"
        />
      </View>
    </ScrollView>
  );
};
