import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarFile, type F0AvatarFileProps } from "../F0AvatarFile"
import { avatarFileSizes } from "../types"

const meta = {
  component: F0AvatarFile,
  title: "Avatars/AvatarFile",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["An avatar component that displays a file type icon."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: avatarFileSizes,
      description: "The size of the avatar",
    },
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
    file: {
      description:
        "<p>The file to display in the avatar `type FileDef = { name: string, type: string }`</p><p>TIP: you can use `File` as extends the `FileDef` type.</p>",
    },
  },
} satisfies Meta<typeof F0AvatarFile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    file: { name: "document.pdf", type: "application/pdf" },
    size: "md",
  },
}

export const WithBadge: Story = {
  args: {
    file: { name: "document.pdf", type: "application/pdf" },
    size: "md",
    badge: {
      type: "module",
      module: "inbox",
    },
  },
}

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
]

export const AllFileTypes: Story = {
  args: {
    file: { name: "document.pdf", type: "application/pdf" },
    size: "md",
  },
  render: (args: F0AvatarFileProps) => {
    return (
      <div className="grid grid-cols-12 gap-4">
        {fileTypes.map((fileType, index) => (
          <F0AvatarFile
            key={index}
            file={new File([""], fileType.name, { type: fileType.type })}
            size={args.size}
          />
        ))}
      </div>
    )
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    size: "md",
    file: { name: "document.pdf", type: "application/pdf" },
  },
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {avatarFileSizes.map((size) => (
        <div key={size} className="flex flex-row gap-2">
          {fileTypes.map((fileType, index) => (
            <F0AvatarFile
              key={`${size}-${index}`}
              size={size}
              file={fileType}
            />
          ))}
        </div>
      ))}
    </div>
  ),
}
