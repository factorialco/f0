import type { Meta, StoryObj } from "@storybook/react-vite"

import { fakePeople } from "@/mocks/people"

import { F0RichTextDisplay } from ".."

const meta = {
  component: F0RichTextDisplay,
  title: "Rich text/RichTextDisplay",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[640px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    content: {
      description: "The HTML or Markdown content string to render",
      control: "text",
    },
    format: {
      description:
        "The format of the content. Use 'html' for raw HTML or 'markdown' for GitHub Flavored Markdown",
      control: "select",
      options: ["html", "markdown"],
    },
    className: {
      description: "Additional CSS class names to apply to the container",
      control: "text",
    },
  },
} satisfies Meta<typeof F0RichTextDisplay>

export default meta
type Story = StoryObj<typeof meta>

const htmlContent = `<p>
  <a href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg" class="mention" data-id="3" rel="noopener noreferrer" target="_blank">
    @${fakePeople.hana.fullName}
  </a>
  and
  <a href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg" class="mention" data-id="2" rel="noopener noreferrer" target="_blank">
    @${fakePeople.noor.fullName}
  </a>
  are trying to get fit so...
</p>
<p></p>
<p>
  🌍 <strong>How to Register to Gympass?</strong>
</p>
<p>
  You have to fill
  <a href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg" target="_blank" rel="noopener noreferrer">
    <strong>THIS FORM</strong>
  </a>!
</p>
<p>
  Once you filled the form, <strong>what now?</strong>
</p>
<ul>
  <li>
    <p>Wait for the invitation email, which will come by the end of the month.</p>
  </li>
  <li>
    <p>
      <em>This is some magic created by our AI</em>
    </p>
  </li>
  <li>
    <p>
      <u>More magic</u>
    </p>
  </li>
  <li>
    <p>
      <s>More magic 2.0</s>
    </p>
  </li>
  <li>
    <p>
      <mark>
        <a href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg" class="mention" data-id="1" rel="noopener noreferrer" target="_blank">
          @${fakePeople.mateo.fullName}
        </a>
      </mark>
    </p>
  </li>
</ul>
<hr>
<pre>
  <code>Good luck guys </code>
</pre>
`

const markdownContent = `
## Markdown support

This component supports **GitHub Flavored Markdown content**. You can use it by setting the \`format\` prop to \`markdown\`.
* It supports headings.
* It supports images.
* It supports links.
* Many ~text~ _formatting_ **options**.
* And [lots of other features!](https://github.github.com/gfm/)

### Code blocks

\`\`\`html
<div>
  <p>Hello world!</p>
</div>
\`\`\`

### Lists
* [ ] todo
* [x] done

### Tables
| Header 1 | Header 2 |
| - | - |
| c | d |
`

export const Default: Story = {
  args: {
    content: htmlContent,
  },
}

export const Markdown: Story = {
  parameters: { a11y: { skipCi: true } },
  args: {
    content: markdownContent,
    format: "markdown",
  },
}
