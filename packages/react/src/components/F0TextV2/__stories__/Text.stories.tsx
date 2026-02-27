import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TextV2 } from "../index"

const meta = {
  component: F0TextV2,
  title: "TextV2",
  tags: ["autodocs", "experimental"],
  argTypes: {
    variant: {
      options: [
        "title",
        "heading",
        "subtitle",
        "body",
        "label",
        "description",
        "caption",
        "code",
      ],
      control: "select",
      description:
        "Semantic text variant — controls font-weight and default HTML tag",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "body" },
      },
    },
    size: {
      options: ["default", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      control: "select",
      description:
        'Text size — independent from variant. "default" keeps the variant\'s built-in size.',
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "varies by variant" },
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
      description:
        "Semantic text color. description/subtitle/caption default to secondary.",
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
        defaultValue: { summary: "false" },
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

export const Variants: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <F0TextV2 variant="title" content="Title text" />
      <F0TextV2 variant="heading" content="Heading text" />
      <F0TextV2
        variant="subtitle"
        content="Subtitle text (secondary by default)"
      />
      <F0TextV2
        variant="body"
        content="Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <F0TextV2 variant="label" content="Label text" />
      <F0TextV2
        variant="description"
        content="Description text (secondary by default)"
      />
      <F0TextV2
        variant="caption"
        content="Caption text (secondary by default)"
      />
      <F0TextV2 variant="code" content="const example = 'code text';" />
    </div>
  ),
}

export const TypographyScale: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <F0TextV2
          variant="label"
          size="xs"
          color="secondary"
          transform="uppercase"
          content="TITLE"
        />
        <F0TextV2 variant="title" content="Title default (3xl / 26px)" />
        <F0TextV2 variant="title" size="2xl" content="Title 2xl (22px)" />
        <F0TextV2 variant="title" size="xl" content="Title xl (18px)" />
      </div>
      <div className="flex flex-col gap-2">
        <F0TextV2
          variant="label"
          size="xs"
          color="secondary"
          transform="uppercase"
          content="HEADING"
        />
        <F0TextV2 variant="heading" size="2xl" content="Heading 2xl (22px)" />
        <F0TextV2 variant="heading" content="Heading default (xl / 18px)" />
        <F0TextV2 variant="heading" size="lg" content="Heading lg (16px)" />
        <F0TextV2 variant="heading" size="md" content="Heading md (14px)" />
        <F0TextV2 variant="heading" size="sm" content="Heading sm (12px)" />
      </div>
      <div className="flex flex-col gap-2">
        <F0TextV2
          variant="label"
          size="xs"
          color="secondary"
          transform="uppercase"
          content="SUBTITLE"
        />
        <F0TextV2
          variant="subtitle"
          size="xl"
          content="Subtitle xl (18px, secondary)"
        />
        <F0TextV2
          variant="subtitle"
          content="Subtitle default (lg / 16px, secondary)"
        />
        <F0TextV2
          variant="subtitle"
          size="md"
          content="Subtitle md (14px, secondary)"
        />
      </div>
      <div className="flex flex-col gap-2">
        <F0TextV2
          variant="label"
          size="xs"
          color="secondary"
          transform="uppercase"
          content="BODY"
        />
        <F0TextV2 variant="body" size="lg" content="Body lg (16px normal)" />
        <F0TextV2 variant="body" content="Body default (md / 14px normal)" />
        <F0TextV2 variant="body" size="sm" content="Body sm (12px normal)" />
        <F0TextV2 variant="body" size="xs" content="Body xs (10px normal)" />
      </div>
      <div className="flex flex-col gap-2">
        <F0TextV2
          variant="label"
          size="xs"
          color="secondary"
          transform="uppercase"
          content="LABEL"
        />
        <F0TextV2 variant="label" size="lg" content="Label lg (16px medium)" />
        <F0TextV2 variant="label" size="md" content="Label md (14px medium)" />
        <F0TextV2 variant="label" content="Label default (sm / 12px medium)" />
        <F0TextV2 variant="label" size="xs" content="Label xs (10px medium)" />
      </div>
      <div className="flex flex-col gap-2">
        <F0TextV2
          variant="label"
          size="xs"
          color="secondary"
          transform="uppercase"
          content="DESCRIPTION"
        />
        <F0TextV2
          variant="description"
          size="md"
          content="Description md (14px, secondary)"
        />
        <F0TextV2
          variant="description"
          content="Description default (sm / 12px, secondary)"
        />
        <F0TextV2
          variant="description"
          size="xs"
          content="Description xs (10px, secondary)"
        />
      </div>
      <div className="flex flex-col gap-2">
        <F0TextV2
          variant="label"
          size="xs"
          color="secondary"
          transform="uppercase"
          content="CAPTION"
        />
        <F0TextV2
          variant="caption"
          size="sm"
          content="Caption sm (12px, secondary)"
        />
        <F0TextV2
          variant="caption"
          content="Caption default (xs / 10px, secondary)"
        />
      </div>
      <div className="flex flex-col gap-2">
        <F0TextV2
          variant="label"
          size="xs"
          color="secondary"
          transform="uppercase"
          content="CODE"
        />
        <F0TextV2
          variant="code"
          size="md"
          content="const codeMd = 'monospace 14px';"
        />
        <F0TextV2
          variant="code"
          content="const codeSm = 'monospace 12px (default)';"
        />
      </div>
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
        size="md"
        color="critical"
        content="Critical label text"
      />
      <F0TextV2
        variant="body"
        size="sm"
        color="positive"
        content="Small positive text"
      />
      <F0TextV2
        variant="body"
        size="md"
        color="warning"
        content="Warning body text"
      />
      <F0TextV2
        variant="label"
        size="md"
        color="accent"
        content="Accent label text"
      />
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
        variant="description"
        size="sm"
        color="default"
        content="Description with explicit default color (overrides secondary)"
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

export const CombinedProps: Story = {
  args: {
    content: "",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <F0TextV2
        variant="label"
        size="md"
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
        size="md"
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
        size="md"
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
          <F0TextV2 variant="title" content="Title default (3xl)" />
          <F0TextV2 variant="title" size="2xl" content="Title 2xl" />
          <F0TextV2 variant="title" size="xl" content="Title xl" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Heading</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="heading" size="2xl" content="Heading 2xl" />
          <F0TextV2 variant="heading" content="Heading default (xl)" />
          <F0TextV2 variant="heading" size="lg" content="Heading lg" />
          <F0TextV2 variant="heading" size="md" content="Heading md" />
          <F0TextV2 variant="heading" size="sm" content="Heading sm" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Subtitle</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2
            variant="subtitle"
            size="xl"
            content="Subtitle xl (secondary)"
          />
          <F0TextV2
            variant="subtitle"
            content="Subtitle default (lg, secondary)"
          />
          <F0TextV2
            variant="subtitle"
            size="md"
            content="Subtitle md (secondary)"
          />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Body</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="body" size="lg" content="Body lg" />
          <F0TextV2 variant="body" size="md" content="Body md (default)" />
          <F0TextV2 variant="body" size="sm" content="Body sm" />
          <F0TextV2 variant="body" size="xs" content="Body xs" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Label</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="label" size="lg" content="Label lg" />
          <F0TextV2 variant="label" size="md" content="Label md" />
          <F0TextV2 variant="label" size="sm" content="Label sm (default)" />
          <F0TextV2 variant="label" size="xs" content="Label xs" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Description</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="description" size="md" content="Description md" />
          <F0TextV2
            variant="description"
            size="sm"
            content="Description sm (default)"
          />
          <F0TextV2 variant="description" size="xs" content="Description xs" />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Caption</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="caption" size="sm" content="Caption sm" />
          <F0TextV2
            variant="caption"
            content="Caption default (xs, secondary)"
          />
        </div>
      </section>

      <section>
        <h4 className="text-lg font-semibold">Code</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2
            variant="code"
            size="md"
            content="const codeMd = 'Code md';"
          />
          <F0TextV2
            variant="code"
            size="sm"
            content="const codeSm = 'Code sm (default)';"
          />
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
          <F0TextV2
            variant="label"
            size="md"
            color="critical"
            content="Critical label"
          />
          <F0TextV2
            variant="body"
            size="sm"
            color="positive"
            content="Positive body"
          />
          <F0TextV2
            variant="body"
            size="md"
            color="warning"
            content="Warning body"
          />
          <F0TextV2
            variant="label"
            size="md"
            color="accent"
            content="Accent label"
          />
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
        <h4 className="text-lg font-semibold">Size Independence</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2 variant="heading" size="3xl" content="Heading at 3xl" />
          <F0TextV2 variant="body" size="xl" content="Body at xl" />
          <F0TextV2 variant="label" size="2xl" content="Label at 2xl" />
          <F0TextV2
            variant="code"
            size="lg"
            content="const code = 'Code at lg';"
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
        <h4 className="text-lg font-semibold">Combined Props</h4>
        <div className="flex flex-col gap-2">
          <F0TextV2
            variant="label"
            size="md"
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
