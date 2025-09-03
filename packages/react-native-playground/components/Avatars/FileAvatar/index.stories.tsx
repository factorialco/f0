import { FileAvatar } from "@factorialco/factorial-one-react-native";
import { Check } from "@factorialco/factorial-one-react-native/src/icons/app";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

const meta = {
  component: FileAvatar,
  decorators: [
    (Story) => (
      <View className="flex-1 items-center justify-center p-6">
        <Story />
      </View>
    ),
  ],
  title: "Components/Avatars/FileAvatar",
} satisfies Meta<typeof FileAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllFileTypesGrid = (): React.ReactElement => {
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
    <View className="flex flex-row gap-2 flex-wrap">
      {fileTypes.map((fileType, index) => (
        <FileAvatar
          key={index}
          file={new File([""], fileType.name, { type: fileType.type })}
        />
      ))}
    </View>
  );
};

export const AllFileTypes: Story = {
  args: {
    file: new File([""], "dummy.txt", { type: "text/plain" }),
  },
  render: () => <AllFileTypesGrid />,
};

export const WithBadge: Story = {
  args: {
    file: new File([""], "dummy.txt", { type: "text/plain" }),
    badge: {
      type: "positive",
      icon: Check,
    },
    size: "medium",
  },
};

export const WithBadgeModuleAvatar: Story = {
  args: {
    file: new File([""], "test.pdf", { type: "application/pdf" }),
    badge: {
      type: "module",
      module: "benefits",
    },
    size: "medium",
  },
};
