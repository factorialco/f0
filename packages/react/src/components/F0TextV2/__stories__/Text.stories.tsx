import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TextV2 } from "../index"

const variants = [
  // Title: lg → (default) → sm → xs
  "title-lg",
  "title",
  "title-sm",
  "title-xs",
  // Heading: lg → (default) → sm → xs
  "heading-lg",
  "heading",
  "heading-sm",
  "heading-xs",
  // Subtitle: xl → lg → (default) → sm
  "subtitle-xl",
  "subtitle-lg",
  "subtitle",
  "subtitle-sm",
  // Body: xl → lg → (default) → sm → xs
  "body-xl",
  "body-lg",
  "body",
  "body-sm",
  "body-xs",
  // Label: lg → (default) → sm → xs
  "label-lg",
  "label",
  "label-sm",
  "label-xs",
  // Description: (default) → sm → xs
  "description",
  "description-sm",
  "description-xs",
  // Caption: (default) → sm
  "caption",
  "caption-sm",
  // Code: lg → (default) → sm
  "code-lg",
  "code",
  "code-sm",
] as const

const meta = {
  component: F0TextV2,
  title: "TextV2",
  tags: ["autodocs", "experimental"],
  argTypes: {
    variant: {
      options: variants,
      control: "select",
      description:
        "Semantic text variant. Size is encoded in the variant token.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "body" },
      },
    },
    color: {
      options: [
        "default",
        "secondary",
        "tertiary",
        "inverse",
        "inverse-secondary",
        "disabled",
        "accent",
        "critical",
        "warning",
        "positive",
        "info",
        "selected",
      ],
      control: "select",
      description: "Semantic text color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Text alignment",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "left" },
      },
    },
    ellipsis: {
      control: "boolean",
      description: "Whether to render the text with ellipsis",
      table: {
        type: { summary: "boolean | number" },
      },
    },
    decoration: {
      control: "select",
      options: ["none", "underline", "overline", "line-through"],
      description: "Text decoration",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "none" },
      },
    },
    transform: {
      control: "select",
      options: ["none", "uppercase", "lowercase", "capitalize"],
      description: "Text transform",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "none" },
      },
    },
    required: {
      control: "boolean",
      description: "Show a required indicator (red asterisk) after the content",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex w-full items-center justify-center p-4">
        <div className="w-full max-w-96">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof F0TextV2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "body",
    content: "This is a text wrapped in the F0TextV2 component.",
  },
}

export const SemanticVariants: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <F0TextV2 variant="title" content="Title (default scale)" />
      <F0TextV2 variant="heading" content="Heading (default scale)" />
      <F0TextV2 variant="subtitle" content="Subtitle (secondary by default)" />
      <F0TextV2 variant="body" content="Body (default scale)" />
      <F0TextV2 variant="label" content="Label (secondary by default)" />
      <F0TextV2
        variant="description"
        content="Description (secondary by default)"
      />
      <F0TextV2 variant="caption" content="Caption (secondary by default)" />
      <F0TextV2 variant="code" content="const code = 'Code alias';" />
    </div>
  ),
}

export const VariantScale: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-3">
      {/* Title */}
      <F0TextV2 variant="title-lg" content="Title lg" />
      <F0TextV2 variant="title" content="Title (default)" />
      <F0TextV2 variant="title-sm" content="Title sm" />
      <F0TextV2 variant="title-xs" content="Title xs" />
      {/* Heading */}
      <F0TextV2 variant="heading-lg" content="Heading lg" />
      <F0TextV2 variant="heading" content="Heading (default)" />
      <F0TextV2 variant="heading-sm" content="Heading sm" />
      <F0TextV2 variant="heading-xs" content="Heading xs" />
      {/* Subtitle */}
      <F0TextV2 variant="subtitle-xl" content="Subtitle xl (secondary)" />
      <F0TextV2 variant="subtitle-lg" content="Subtitle lg (secondary)" />
      <F0TextV2 variant="subtitle" content="Subtitle (secondary, default)" />
      <F0TextV2 variant="subtitle-sm" content="Subtitle sm (secondary)" />
      {/* Body */}
      <F0TextV2 variant="body-xl" content="Body xl" />
      <F0TextV2 variant="body-lg" content="Body lg" />
      <F0TextV2 variant="body" content="Body (default)" />
      <F0TextV2 variant="body-sm" content="Body sm" />
      <F0TextV2 variant="body-xs" content="Body xs" />
      {/* Label */}
      <F0TextV2 variant="label-lg" content="Label lg (secondary)" />
      <F0TextV2 variant="label" content="Label (secondary, default)" />
      <F0TextV2 variant="label-sm" content="Label sm (secondary)" />
      <F0TextV2 variant="label-xs" content="Label xs (secondary)" />
      {/* Description */}
      <F0TextV2
        variant="description"
        content="Description (secondary, default)"
      />
      <F0TextV2 variant="description-sm" content="Description sm (secondary)" />
      <F0TextV2 variant="description-xs" content="Description xs (secondary)" />
      {/* Caption */}
      <F0TextV2 variant="caption" content="Caption (secondary, default)" />
      <F0TextV2 variant="caption-sm" content="Caption sm (secondary)" />
      {/* Code */}
      <F0TextV2 variant="code-lg" content="const codeLg = 'Code lg';" />
      <F0TextV2 variant="code" content="const code = 'Code (default)';" />
      <F0TextV2 variant="code-sm" content="const codeSm = 'Code sm';" />
    </div>
  ),
}

export const Colors: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <F0TextV2 color="default" content="Default color" />
      <F0TextV2 color="secondary" content="Secondary color" />
      <F0TextV2 color="tertiary" content="Tertiary color" />
      <F0TextV2 color="disabled" content="Disabled color" />
      <F0TextV2 color="accent" content="Accent color" />
      <F0TextV2 color="critical" content="Critical color" />
      <F0TextV2 color="warning" content="Warning color" />
      <F0TextV2 color="positive" content="Positive color" />
      <F0TextV2 color="info" content="Info color" />
      <F0TextV2 color="selected" content="Selected color" />
    </div>
  ),
}

export const ColorsOnDark: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-2 rounded-lg bg-f1-background-inverse p-4">
      <F0TextV2 color="inverse" content="Inverse color" />
      <F0TextV2 color="inverse-secondary" content="Inverse secondary color" />
    </div>
  ),
}

export const ColorWithVariant: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <F0TextV2
        variant="label"
        color="critical"
        content="Critical label text"
      />
      <F0TextV2
        variant="body-sm"
        color="positive"
        content="Small positive text"
      />
      <F0TextV2 variant="body" color="warning" content="Warning body text" />
      <F0TextV2 variant="label" color="accent" content="Accent label text" />
      <F0TextV2
        variant="subtitle"
        content="Subtitle text (secondary by default)"
      />
      <F0TextV2
        variant="description"
        content="Description text (secondary by default)"
      />
      <F0TextV2
        variant="caption"
        content="Caption text (secondary by default)"
      />
      <F0TextV2
        variant="description-sm"
        color="default"
        content="Description sm with explicit default color (overrides secondary)"
      />
    </div>
  ),
}

export const TextAlignment: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    variant: "body",
    content: "Text alignment",
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <F0TextV2 {...args} align="left" />
      <F0TextV2 {...args} align="center" />
      <F0TextV2 {...args} align="right" />
    </div>
  ),
}

export const TextDecoration: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <F0TextV2 decoration="none" content="No decoration (default)" />
      <F0TextV2 decoration="underline" content="Underlined text" />
      <F0TextV2 decoration="overline" content="Overlined text" />
      <F0TextV2 decoration="line-through" content="Strikethrough text" />
    </div>
  ),
}

export const TextTransform: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <F0TextV2 transform="none" content="No transform (default)" />
      <F0TextV2 transform="uppercase" content="Uppercase text" />
      <F0TextV2 transform="lowercase" content="Lowercase text" />
      <F0TextV2 transform="capitalize" content="capitalize text" />
    </div>
  ),
}

export const TextEllipsis: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    variant: "body",
    content:
      "This is a very long text that will be truncated with ellipsis when it exceeds the container width and demonstrates the ellipsis functionality.",
    ellipsis: true,
  },
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
}

export const Required: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <F0TextV2 variant="label" content="Email address" required />
      <F0TextV2 variant="label" content="Optional field" />
      <F0TextV2 variant="body" content="Required body text" required />
      <F0TextV2
        variant="label"
        content="Required with ellipsis"
        required
        ellipsis
      />
    </div>
  ),
}

export const CombinedProps: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <F0TextV2
        variant="label"
        color="critical"
        decoration="underline"
        content="Critical underlined label"
      />
      <F0TextV2
        variant="description"
        color="positive"
        transform="uppercase"
        content="Uppercase positive description text"
      />
      <F0TextV2
        variant="body"
        color="warning"
        decoration="line-through"
        content="Warning body with strikethrough"
      />
      <F0TextV2
        variant="caption"
        color="accent"
        decoration="overline"
        content="Accent caption with overline"
      />
      <F0TextV2
        variant="label"
        color="info"
        transform="capitalize"
        decoration="underline"
        content="info capitalized underlined label"
      />
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    content: "",
  },
  render: () => (
    <div className="flex w-fit flex-col gap-4">
      <h3 className="text-lg font-semibold">All Text Variants</h3>

      <section>
        <h4 className="text-lg font-semibold">Title</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="title-lg" content="Title lg" />
          <F0TextV2 variant="title" content="Title (default)" />
          <F0TextV2 variant="title-sm" content="Title sm" />
          <F0TextV2 variant="title-xs" content="Title xs" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Heading</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="heading-lg" content="Heading lg" />
          <F0TextV2 variant="heading" content="Heading (default)" />
          <F0TextV2 variant="heading-sm" content="Heading sm" />
          <F0TextV2 variant="heading-xs" content="Heading xs" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Subtitle</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="subtitle-xl" content="Subtitle xl (secondary)" />
          <F0TextV2 variant="subtitle-lg" content="Subtitle lg (secondary)" />
          <F0TextV2
            variant="subtitle"
            content="Subtitle (secondary, default)"
          />
          <F0TextV2 variant="subtitle-sm" content="Subtitle sm (secondary)" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Body</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="body-xl" content="Body xl" />
          <F0TextV2 variant="body-lg" content="Body lg" />
          <F0TextV2 variant="body" content="Body (default)" />
          <F0TextV2 variant="body-sm" content="Body sm" />
          <F0TextV2 variant="body-xs" content="Body xs" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Label</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="label-lg" content="Label lg (secondary)" />
          <F0TextV2 variant="label" content="Label (secondary, default)" />
          <F0TextV2 variant="label-sm" content="Label sm (secondary)" />
          <F0TextV2 variant="label-xs" content="Label xs (secondary)" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Description</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2
            variant="description"
            content="Description (secondary, default)"
          />
          <F0TextV2
            variant="description-sm"
            content="Description sm (secondary)"
          />
          <F0TextV2
            variant="description-xs"
            content="Description xs (secondary)"
          />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Caption</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="caption" content="Caption (secondary, default)" />
          <F0TextV2 variant="caption-sm" content="Caption sm (secondary)" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Code</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="code-lg" content="const codeLg = 'Code lg';" />
          <F0TextV2 variant="code" content="const code = 'Code (default)';" />
          <F0TextV2 variant="code-sm" content="const codeSm = 'Code sm';" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Semantic Colors</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 color="default" content="Default color" />
          <F0TextV2 color="secondary" content="Secondary color" />
          <F0TextV2 color="tertiary" content="Tertiary color" />
          <F0TextV2 color="disabled" content="Disabled color" />
          <F0TextV2 color="accent" content="Accent color" />
          <F0TextV2 color="critical" content="Critical color" />
          <F0TextV2 color="warning" content="Warning color" />
          <F0TextV2 color="positive" content="Positive color" />
          <F0TextV2 color="info" content="Info color" />
          <F0TextV2 color="selected" content="Selected color" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Inverse Colors</h4>
        <div className="flex flex-col gap-2 rounded-lg bg-f1-background-inverse p-4">
          <F0TextV2 color="inverse" content="Inverse color" />
          <F0TextV2
            color="inverse-secondary"
            content="Inverse secondary color"
          />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Color + Variant Composition</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="label" color="critical" content="Critical label" />
          <F0TextV2
            variant="body-sm"
            color="positive"
            content="Positive body sm"
          />
          <F0TextV2 variant="body" color="warning" content="Warning body" />
          <F0TextV2 variant="label" color="accent" content="Accent label" />
          <F0TextV2
            variant="subtitle"
            color="default"
            content="Subtitle with default color override"
          />
          <F0TextV2
            variant="description"
            color="default"
            content="Description with default color override"
          />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Text Alignment</h4>
        <div className="flex w-96 flex-col gap-2">
          <F0TextV2 variant="body" align="left" content="Left aligned text" />
          <F0TextV2
            variant="body"
            align="center"
            content="Center aligned text"
          />
          <F0TextV2 variant="body" align="right" content="Right aligned text" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Text Decoration</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 decoration="underline" content="Underlined text" />
          <F0TextV2 decoration="overline" content="Overlined text" />
          <F0TextV2 decoration="line-through" content="Strikethrough text" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Text Transform</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 transform="uppercase" content="Uppercase text" />
          <F0TextV2 transform="lowercase" content="Lowercase text" />
          <F0TextV2 transform="capitalize" content="Capitalize text" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Text with Ellipsis</h4>
        <div className="w-96">
          <F0TextV2
            variant="body"
            content="This is a very long text that will be truncated with ellipsis when it exceeds the container width"
            ellipsis
          />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Required Indicator</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="label" content="Email address" required />
          <F0TextV2 variant="body" content="Required body text" required />
          <F0TextV2 variant="label" content="Optional field" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Combined Props</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2
            variant="label"
            color="critical"
            decoration="underline"
            content="Critical underlined label"
          />
          <F0TextV2
            variant="description"
            color="positive"
            transform="uppercase"
            content="Uppercase positive description"
          />
          <F0TextV2
            variant="caption"
            color="accent"
            decoration="overline"
            content="Accent caption with overline"
          />
        </div>
      </section>
    </div>
  ),
}
