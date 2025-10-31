import { PageLayout } from "@/components/layouts/page/PageLayout"
import { AiChatProvider } from "@/experimental/AiChat"
import { AiChat } from "@/experimental/AiChat/index"
import { useAiChat } from "@/experimental/AiChat/providers/AiChatStateProvider"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect } from "react"
import { CoCreationGroup } from "../components/CoCreationGroup/CoCreationGroup"
import { CoCreationBlockInstance, CoCreationBlockManifest } from "../types"
import { AvatarCCBManifest } from "./blocks/Avatar"
import { KeyValueCCBManifest } from "./blocks/KeyValue"
import { LongTextCCBManifest } from "./blocks/LongText"
import { TextCCBManifest } from "./blocks/Text"

const Demo = ({ children }: { children: React.ReactElement }) => {
  const { setOpen } = useAiChat()
  useEffect(() => {
    setOpen(true)
  }, [setOpen])
  return <PageLayout aside={<AiChat />}>{children}</PageLayout>
}
const meta = {
  title: "CoCreationGroup",
  component: CoCreationGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that allows to create a group of blocks using the agent.",
      },
    },
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => {
      return (
        <div>
          <AiChatProvider
            enabled
            agent="one-workflow"
            runtimeUrl="http://localhost:4111/copilotkit"
            credentials="include"
            showDevConsole={true}
          >
            <Demo>
              <Story />
            </Demo>
          </AiChatProvider>
        </div>
      )
    },
  ],
} satisfies Meta<typeof CoCreationGroup>

export default meta
type Story = StoryObj<typeof meta>

const avaliableBlocks: CoCreationBlockManifest[] = [
  TextCCBManifest,
  KeyValueCCBManifest,
  AvatarCCBManifest,
  LongTextCCBManifest,
]

const blocks: CoCreationBlockInstance[] = [
  {
    id: "1",
    type: "text",
    props: {
      text: "Hello, world!",
    },
  },
  {
    id: "2",
    type: "avatar",
    props: {
      avatar: {
        type: "person",
        firstName: "John",
        lastName: "Doe",
      },
    },
  },
  {
    id: "3",
    type: "longText",
    props: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum nisl laoreet, commodo ex id, faucibus purus. Phasellus varius ligula magna. Integer neque nulla, rhoncus vel sagittis et, consequat non velit. Vestibulum sagittis tristique gravida. Aliquam scelerisque iaculis lacinia. Fusce malesuada eros id leo commodo rutrum. Sed lectus turpis, auctor sit amet sem vitae, hendrerit tristique nibh. In imperdiet nisi mi, ultricies bibendum erat scelerisque in. Fusce pulvinar, nunc eu ultrices blandit, felis est consequat ex, quis consectetur nisl mauris id nulla.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque consectetur venenatis ex. Aenean mattis tortor mauris, quis semper turpis aliquet sed. Aenean lacus lectus, tincidunt nec varius eleifend, semper at mauris. Integer molestie urna vel nisl sagittis, at tempus enim sagittis. Integer quis arcu eros. Etiam sit amet tincidunt sem. Proin euismod dui vitae fringilla eleifend. Etiam pellentesque vulputate purus id pharetra. Integer viverra leo eget elit venenatis viverra. Quisque auctor mi orci, eget posuere dolor vulputate at. Praesent ac volutpat ligula. Nulla et augue ac nunc vehicula scelerisque. Maecenas ac tristique lectus. In hac habitasse platea dictumst. Maecenas scelerisque felis pulvinar purus rhoncus, ac rutrum turpis sollicitudin.",
        "In ornare mollis ipsum vitae consectetur. Fusce rutrum neque sed ullamcorper porttitor. In luctus dignissim lectus, at mollis ex venenatis eu. Etiam at ex nec urna elementum ultrices ac ut nunc. Nullam cursus dictum convallis. Vivamus urna felis, tincidunt at massa quis, sollicitudin semper nulla. Vivamus nisi dui, venenatis id aliquam at, fermentum sed lectus. Nulla eget odio quis metus lacinia placerat ut quis massa. Maecenas vel feugiat ligula. Nam vitae tempus nunc. Aenean pulvinar nibh a augue malesuada, sit amet accumsan erat mattis. Praesent facilisis justo purus, id finibus nibh pellentesque vel.",
      ],
      title: "Long Text",
      description: "This is a long text description",
    },
  },
]

// Basic Variants
export const Default: Story = {
  args: {
    blocks,
    agentAvailableBlockTyoes: avaliableBlocks,
    agentInstructions: [
      "I want to represent the user data using the blocks available ",
    ],
    agentContext: [
      "The user data is:",
      "John Doe",
      "email: john.doe@example.com",
      "phone: +34 666 666 666",
      "address: 123 Main St, City, Country",
    ],
  },
}
