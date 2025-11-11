import type { Meta, StoryObj } from "@storybook/react-vite"

import { NewColor } from "@/components/tags/F0TagDot"
import { AcademicCap, List, Placeholder, Settings } from "@/icons/app"

import { NotesTextEditor, NotesTextEditorSkeleton } from "./index"

const meta: Meta<typeof NotesTextEditor> = {
  title: "Rich text/NotesTextEditor",
  component: NotesTextEditor,
  tags: ["experimental"],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultSlashCommandGroupLabels = {
  textStyles: "Text Styles",
  lists: "Lists",
  blocks: "Blocks",
}

const defaultAIBlockLabels = {
  reset: "Reset",
  resetDescription: "Clear content and start over",
  deleteBlock: "Delete",
  expand: "Expand",
  collapse: "Collapse",
}

const initialContent = `<p data-id="4ETaW"></p><blockquote data-id="6m2Yh"><p data-id="4ETaW">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.”</p></blockquote><p data-id="tlG3x"></p><hr data-id="2JExc"><p data-id="BZtQ9"></p><h2 data-id="2WvW8">📚 Introduction</h2><p data-id="B-Ql-">Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>.<br>Sed do <strong>eiusmod tempor</strong> incididunt ut labore et dolore magna aliqua.</p><p data-id="BhhN9"></p><h3 data-id="zei-2">Key Highlights</h3><ul class="f1-bullet-list" data-id="L0xJ4"><li data-id="UHlji"><p data-id="ElFGh">Donec id elit non mi porta gravida at eget metus.</p></li><li data-id="Q73TB"><p data-id="HFhZP">Integer posuere erat a ante venenatis dapibus.</p></li><li data-id="MLf7t"><p data-id="oz21q">Nulla vitae elit libero, a pharetra augue.</p></li></ul><p data-id="3NCU7"></p><hr data-id="JQLA6"><p data-id="lMGq3"></p><h2 data-id="1om1L">🧩 Ordered List Example</h2><ol class="f1-ordered-list" data-id="sofC_"><li data-id="aTNDt"><p data-id="77Lzd"><strong>First Step:</strong> Lorem ipsum dolor sit amet.</p></li><li data-id="Netai"><p data-id="FMqEW"><strong>Second Step:</strong> Consectetur adipiscing elit.</p><ol class="f1-ordered-list" data-id="KWHXm"><li data-id="_Nutu"><p data-id="p9JA2">Substep A — Nulla vitae elit libero.</p></li><li data-id="355Wu"><p data-id="4W-NP">Substep B — Integer posuere erat.</p></li></ol></li><li data-id="oQMnd"><p data-id="-E2ck"><strong>Third Step:</strong> Etiam porta sem malesuada magna mollis euismod.</p></li></ol><p data-id="NYxgk"></p><hr data-id="M-nTL"><p data-id="h39_J"></p><h2 data-id="RT1gp">🧾 Table Example</h2><table data-id="Su3GJ" style="min-width: 100px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr data-id="ta7c4"><th data-id="e__SH" colspan="1" rowspan="1"><p data-id="RlLJs">ID</p></th><th data-id="h4yFZ" colspan="1" rowspan="1"><p data-id="spkfY">Name</p></th><th data-id="Mi36q" colspan="1" rowspan="1"><p data-id="1LBu5">Description</p></th><th data-id="b1E7l" colspan="1" rowspan="1"><p data-id="mF5-G">Active</p></th></tr><tr data-id="dz36Q"><td data-id="5PDof" colspan="1" rowspan="1"><p data-id="SFLVK">1</p></td><td data-id="4KRwc" colspan="1" rowspan="1"><p data-id="rQa3e">Lorem Ipsum</p></td><td data-id="a8sr2" colspan="1" rowspan="1"><p data-id="cjr3Q">Default placeholder text</p></td><td data-id="JueDJ" colspan="1" rowspan="1"><p data-id="rye5G">✅</p></td></tr><tr data-id="qwPHA"><td data-id="dgQc3" colspan="1" rowspan="1"><p data-id="j9rfn">2</p></td><td data-id="8hvFK" colspan="1" rowspan="1"><p data-id="q4DI-">Dolor Sit Amet</p></td><td data-id="86T-A" colspan="1" rowspan="1"><p data-id="4YSg_">Latin dummy content</p></td><td data-id="cpArr" colspan="1" rowspan="1"><p data-id="Ge9jh">❌</p></td></tr><tr data-id="lAh41"><td data-id="j6qof" colspan="1" rowspan="1"><p data-id="WgnU2">3</p></td><td data-id="efJbR" colspan="1" rowspan="1"><p data-id="AvI-l">Consectetur</p></td><td data-id="oTzuj" colspan="1" rowspan="1"><p data-id="Da3Ee">Useful for mockups</p></td><td data-id="r8Fpa" colspan="1" rowspan="1"><p data-id="JNJ09">✅</p></td></tr></tbody></table><p data-id="ntgVH"></p><hr data-id="sbQPa"><p data-id="OZMue"></p><h2 data-id="4umPi">🧱 Blockquote + Code Combo</h2><blockquote data-id="ZKi4-"><p data-id="U1sag"><em>“Quisque sit amet est et sapien ullamcorper pharetra.”</em><br>Example inline code: <code>console.log('Hello World');</code></p></blockquote><p data-id="27aii"></p><hr data-id="m9R-f"><p data-id="qfmNF"></p><h2 data-id="KiYSB">🧮 Checklist Example</h2><ul class="f1-bullet-list" data-id="ysMX1"><li data-id="HdNdm"><p data-id="4-1BP">Write markdown sample</p></li><li data-id="kLVQ4"><p data-id="pXf5Z">Include headings and code</p></li><li data-id="glXFX"><p data-id="Axeh0">Add advanced formatting (math, mermaid, etc.)</p></li></ul><p data-id="bfSXO"></p><hr data-id="2u-0i"><p data-id="cyLF0"></p><h2 data-id="ZkYst">⚙️ Inline Formatting Examples</h2><p data-id="dGxGH"><strong>Bold text</strong>, <em>italic text</em>, <s>strikethrough</s>, and <code>inline code</code>.</p><p data-id="0RfB9"></p><hr data-id="cfhMz"><p data-id="82KdD"></p><h2 data-id="LVVfR">🧭 Conclusion</h2><p data-id="o2gwH">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.<br>Curabitur blandit tempus porttitor.</p>`

// Mock image upload function that simulates a delay and returns a URL to store it
const mockImageUpload = async (file: File) => {
  // Simulate upload delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Create a local URL for the uploaded file (in real usage, this would be the server URL)
  const url = URL.createObjectURL(file)

  return {
    url,
    signedId: `mock-signed-id-${Date.now()}`,
  }
}

export const Default: Story = {
  args: {
    placeholder: "Enter '/' to open the command palette...",
    labels: {
      slashCommandGroupLabels: defaultSlashCommandGroupLabels,
      aiBlockLabels: defaultAIBlockLabels,
      titlePlaceholder: "Enter a title for the meeting",
    },
    onTitleChange: (title) => {
      console.log("Title changed:", title)
    },
    onChange: (value) => {
      console.log("Content changed:", value)
    },

    initialEditorState: {
      content: initialContent,
      title: "Lorem Ipsum Dolor Sit Amet",
    },

    imageUploadConfig: {
      onUpload: mockImageUpload,
    },

    aiBlockConfig: {
      title: "AI Pre-Meeting Helper",
      onClick: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              type: "taskList",
              content: [
                {
                  type: "taskItem",
                  attrs: {
                    checked: false,
                  },
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "Lista de ejemplo",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "taskItem",
                  attrs: {
                    checked: false,
                  },
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        {
                          type: "text",
                          text: "hola hola",
                        },
                      ],
                    },
                  ],
                },
              ],
            })
          }, 1000)
        })
      },
      buttons: [
        {
          type: "factorial-format",
          emoji: "🤖",
          label: "Factorial format",
          icon: AcademicCap,
        },
        {
          type: "task-list",
          emoji: "📝",
          label: "Task list (custom)",
          icon: List,
          editable: true,
        },
      ],
    },

    actions: [
      {
        label: "Actions",
        onClick: () => {
          console.log("Actions")
        },
      },
    ],
    secondaryActions: [
      {
        label: "More Actions",
        onClick: () => {
          console.log("More Actions")
        },
        icon: Placeholder,
      },
      {
        label: "More Actions 2",
        onClick: () => {
          console.log("More Actions 2")
        },
        icon: Placeholder,
        critical: true,
      },
    ],
    metadata: [
      {
        type: "status",
        label: "Status",
        variant: "warning",
      },
      {
        type: "dot-tag",
        label: "Dot tag",
        color: "malibu" as NewColor,
      },
      {
        type: "tag",
        label: "Tag",
        icon: Settings,
      },
      {
        type: "text",

        label: "label",
        content: "hello",
      },
      {
        type: "person",
        label: "Person",
        firstName: "Raúl",
        lastName: "Sigüenza",
        src: "/avatars/person01.jpg",
      },
    ],
  },
}

type SkeletonStory = StoryObj<typeof NotesTextEditorSkeleton>

export const Skeleton: SkeletonStory = {
  name: "Skeleton - Basic",
  render: (args) => (
    <div className="h-96 w-full">
      <NotesTextEditorSkeleton {...args} />
    </div>
  ),
  args: {
    withHeader: true,
    withTitle: true,
  },
}
